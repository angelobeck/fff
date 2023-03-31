
class Template {
    #trackProperties;
    #page;
    template = "";
    templateChildren = [];
    parentElement;

    constructor(page) {
        this.#page = page;
    }

    get page() {
        return this.#page;
    }

    render(element) {
        this.parentElement = element;
        var tokenizer = new Tokenizer(this.template);
        var tokens = tokenizer.tokenize();
        var treeBuilder = new BuildTree(tokens, this);
        this.templateChildren = treeBuilder.buildTree();
        this.renderChildren(element, this.templateChildren);
    }

    renderChildren(parentElement, templateChildren) {
        var index;
        var templateNode;
        var element;
        for (index = 0; index < templateChildren.length; index++) {
            templateNode = templateChildren[index];
            if (templateNode.type === "text") {
                this.createStaticText(parentElement, templateNode);
            } else if (templateNode.type === "property") {
                this.createDinamicText(parentElement, templateNode);
            } else if (templateNode.specialAttributes["if:true"] && !this.getComponentAttribute(templateNode.component, templateNode.specialAttributes["if:true"])) {
                this.createComment(parentElement, templateNode);
            } else if (templateNode.specialAttributes["if:false"] && this.getComponentAttribute(templateNode.component, templateNode.specialAttributes["if:false"])) {
                this.createComment(parentElement, templateNode);
            } else if (templateNode.value === "mod") {
                this.createModule(parentElement, templateNode);
            } else {
                element = this.createElement(parentElement, templateNode);
                this.createStaticAttributes(element, templateNode);
                this.createDinamicAttributes(element, templateNode);

                if (templateNode.specialAttributes["for:each"] && templateNode.specialAttributes["for:item"] && templateNode.children.length > 0) {
                    this.createLoopList(element, templateNode);
                } else if (templateNode.children.length > 0) {
                    this.renderChildren(element, templateNode.children);
                }
            }
        }
    }

    createStaticText(parentElement, templateNode) {
        templateNode.node = document.createTextNode(templateNode.value);
        parentElement.appendChild(templateNode.node);
    }

    createDinamicText(parentElement, templateNode) {
        var value = this.getComponentProperty(templateNode.component, templateNode.value);
        templateNode.node = document.createTextNode(value);
        parentElement.appendChild(templateNode.node);
    }

    createComment(parentElement, templateNode) {
        templateNode.node = document.createComment("");
        templateNode.status = false;
        parentElement.appendChild(templateNode.node);
    }

    createElement(parentElement, templateNode) {
        templateNode.node = document.createElement(templateNode.value.toUpperCase());
        if (templateNode.specialAttributes["id:true"] || templateNode.specialAttributes["if:false"]) {
            templateNode.status = true;
        }
        parentElement.appendChild(templateNode.node);
        return templateNode.node;
    }

    createStaticAttributes(element, templateNode) {
        for (let name in templateNode.staticAttributes) {
            let value = templateNode.staticAttributes[name];
            element.setAttribute(name, value);
        }
    }

    createDinamicAttributes(element, templateNode) {
        for (let name in templateNode.dinamicAttributes) {
            if (name.startsWith("on")) {
                this.createEvent(element, templateNode, name);
            } else {
                let value = this.getComponentProperty(templateNode.component, templateNode.dinamicAttributes[name]);
                element.setAttribute(name, value);
            }
        }
    }

    createEvent(element, templateNode, name) {
        var target = templateNode.dinamicAttributes[name];
        element[name] = (event) => {
            templateNode.component.beforeEvent();
            templateNode.component[target](event);
            templateNode.component.afterEvent();
        };
    }

    createModule(parentElement, templateNode) {
        let module = templateNode.component.page.modules[templateNode.staticAttributes["name"]];
        if (module) {
            templateNode.component = new module(templateNode.component.page);
            templateNode.component.render(parentElement);
        }
    }

    createLoopList(element, templateNode) {
        var loopChildren;
        const loopIterator = this.getComponentProperty(templateNode.component, templateNode.specialAttributes["for:each"]);
        if (!Array.isArray(loopIterator)) {
            return;
        }
        let target = templateNode.specialAttributes["for:item"];
        templateNode.loopChildren = [];
        for (let iteratorIndex = 0; iteratorIndex < loopIterator.length; iteratorIndex++) {
            templateNode.component[target] = loopIterator[iteratorIndex];
            loopChildren = this.cloneChildren(templateNode.children);
            templateNode.loopChildren.push(loopChildren);
            this.renderChildren(element, loopChildren);
        }
    }

    refresh() {
        this.refreshChildren(this.parentElement, this.templateChildren);
    }

    refreshChildren(parentElement, templateChildren) {
        if (!templateChildren) { return; }
        var index;
        var templateNode;
        var element;
        for (index = 0; index < templateChildren.length; index++) {
            templateNode = templateChildren[index];
            if (templateNode.type === "text") {
                continue;
            } else if (templateNode.type === "property") {
                this.refreshDinamicText(parentElement, templateNode);
            } else if (templateNode.specialAttributes["if:true"] && templateNode.status === true && !this.getComponentAttribute(templateNode.component, templateNode.specialAttributes["if:true"])) {
                this.refreshToFalseCondition(parentElement, templateNode);
            } else if (templateNode.specialAttributes["if:true"] && templateNode.status === false) {
                if (this.getComponentAttribute(templateNode.component, templateNode.specialAttributes["if:true"])) {
                    this.refreshToTrueCondition(parentElement, templateNode);
                }
            } else if (templateNode.specialAttributes["if:false"] && templateNode.status === true && this.getComponentAttribute(templateNode.component, templateNode.specialAttributes["if:false"])) {
                this.refreshToFalseCondition(parentElement, templateNode);
            } else if (templateNode.specialAttributes["if:false"] && templateNode.status === false) {
                if (!this.getComponentAttribute(templateNode.component, templateNode.specialAttributes["if:false"])) {
                    this.refreshToTrueCondition(parentElement, templateNode);
                }
            } else if (templateNode.value === "mod") {
                templateNode.component.refresh();
            } else {
                element = templateNode.node;
                this.refreshDinamicAttributes(element, templateNode);

                if (templateNode.specialAttributes["for:each"] && templateNode.specialAttributes["for:item"] && templateNode.children.length > 0) {
                    this.refreshLoopList(element, templateNode);
                } else if (templateNode.children.length > 0) {
                    this.refreshChildren(element, templateNode.children);
                }
            }
        }
    }

    refreshDinamicText(parentElement, templateNode) {
        templateNode.node.data = this.getComponentProperty(templateNode.component, templateNode.value);
    }

    refreshToFalseCondition(parentElement, templateNode) {
        const comment = document.createComment("");
        parentElement.insertBefore(comment, templateNode.node);
        parentElement.removeChild(templateNode.node);
        templateNode.node = comment;
        templateNode.status = false;
    }

    refreshToTrueCondition(parentElement, templateNode) {
        var element = this.createElement(parentElement, templateNode);
        parentElement.insertBefore(element, templateNode.node);
        parentElement.removeChild(templateNode.node);
        templateNode.node = element;
        templateNode.status = true;

        this.createStaticAttributes(element, templateNode);
        this.createDinamicAttributes(element, templateNode);

        if (templateNode.specialAttributes["for:each"] && templateNode.specialAttributes["for:item"] && templateNode.children.length > 0) {
            this.createLoopList(element, templateNode);
        } else if (templateNode.children.length > 0) {
            this.renderChildren(element, templateNode.children);
        }
    }

    refreshDinamicAttributes(element, templateNode) {
        for (let name in templateNode.dinamicAttributes) {
            if (name.startsWith("on")) {
                continue;
            }
            let value = this.getComponentProperty(templateNode.component, templateNode.dinamicAttributes[name]);
            element.setAttribute(name, value);
        }
    }

    refreshLoopList(element, templateNode) {
        var loopChildren;
        const loopIterator = this.getComponentProperty(templateNode.component, templateNode.specialAttributes["for:each"]);
        if (!Array.isArray(loopIterator) || loopIterator.length === 0) {
            while (templateNode.loopChildren && templateNode.loopChildren.length > 0) {
                loopChildren = templateNode.loopChildren.pop();
                while (loopChildren.length > 0) {
                    this.removeNode(element, loopChildren.pop());
                }
            }
            return;
        }
        let target = templateNode.specialAttributes["for:item"];
        while (templateNode.loopChildren.length > loopIterator.length) {
            loopChildren = templateNode.loopChildren.pop();
            while (loopChildren.length > 0) {
                this.removeNode(element, loopChildren.pop());
            }
        }
        for (let iteratorIndex = 0; iteratorIndex < loopIterator.length; iteratorIndex++) {
            templateNode.component[target] = loopIterator[iteratorIndex];
            if (iteratorIndex < templateNode.loopChildren.length) {
                loopChildren = templateNode.loopChildren[iteratorIndex];
                this.refreshChildren(element, loopChildren);
            } else {
                loopChildren = this.cloneChildren(templateNode.children);
                templateNode.loopChildren.push(loopChildren);
                this.renderChildren(element, loopChildren);
            }
        }
    }

    removeNode(parentElement, templateNode) {
        while (templateNode.children && templateNode.children.length > 0) {
            this.removeNode(templateNode.node, templateNode.children.pop());
        }
        while (templateNode.loopChildren && templateNode.loopChildren.length > 0) {
            let loopChildren = templateNode.loopChildren.pop();
            while (loopChildren.length > 0) {
                this.removeNode(templateNode.node, loopChildren.pop());
            }
        }
        parentElement.removeChild(templateNode.node);
    }

    getComponentProperty(component, path) {
        var parts = path.split(".");
        var value = component[parts.shift()];
        while (value && parts.length > 0) {
            value = value[parts.shift()];
        }
        return value;
    }

    cloneChildren(children) {
        var result = [];
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            let clonedChild = {};
            for (let name in child) {
                if (name === "children") {
                    clonedChild.children = this.cloneChildren(child.children);
                } else {
                    clonedChild[name] = child[name];
                }
            }
            result.push(clonedChild);
        }
        return result;
    }

    beforeEvent() {
        this.#trackProperties = {};
        for (name in this) {
            this.#trackProperties[name] = this[name];
        }
    }

    afterEvent() {
        for (name in this.#trackProperties) {
            if (this[name] !== this.#trackProperties[name]) {
                this.refresh();
                return;
            }
        }
    }

}

class TemplateLayout extends Template {
    title = { value: "Meu primeiro template" };
    label = "pressione";
    expanded = false;

    template = `<div>
    <h1>{title.value}</h1>
    <button onclick={buttonSwitch}  aria-label="pressione aqui" aria-expanded={expanded}>{label}</button>
    </div>`;

    buttonSwitch(event) {
        this.expanded = !this.expanded;
    }

}

class TemplateMenu extends Template {
    template = `
    <div>
    <mod name="title" />
    <div aria-live="polite">{selectedTab}</div>
    <div for:each={iterableTabs} for:item={item} role="tablist">
    <button onclick={tabChange} data-index={item.index} aria-selected={item.selected} role="tab">{item.label}</button>
    </div>

    </div>
    `;

    selectedTab = 0;
    tabs = ["Primeira", "Segunda", "Terceira"];

    get iterableTabs() {
        return this.tabs.map((value, index) => {
            return {
                index: index,
                label: index === this.selectedTab ? value + " selecionado" : value,
                selected: index === this.selectedTab
            };
        });
    }

    tabChange(event) {
        this.selectedTab = parseInt(event.currentTarget.dataset.index, 10);
this.tabs.shift();
        this.tabs.push("mais");
        
    }
}

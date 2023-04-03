
class Tokenizer {
    fromString;
    index;
    line;
    length;
    tokens = [];

    constructor(fromString) {
        this.fromString = fromString;
        this.length = fromString.length;
    }

    tokenize() {
        var char;
        this.tokens = [];
        this.index = 0;
        this.line = 1;
        while (this.index < this.length) {
            char = this.fromString.charAt(this.index);
            switch (char) {
                case "<":
                case ">":
                case "=":
                case "/":
                    this.tokens.push({ type: char, line: this.line });
                    this.index++;
                    break;

                case "{":
                    this.index++;
                    this.tokens.push({ type: char, value: this.findBoundary("}"), line: this.line });
                    break;

                case "'":
                case '"':
                    this.index++;
                    this.tokens.push({ type: "string", value: this.findBoundary(char), line: this.line });
                    break;

                case "\n":
                    this.index++;
                    this.line++;
                    break;

                default:
                    if (/[a-zA-Z]/.test(char)) {
                        this.tokens.push({ type: "name", value: this.findName(), line: this.line });
                    } else {
                        this.index++;
                    }
            }
        }
        return this.tokens;
    }

    findBoundary(boundary) {
        var startPosition = this.index;
        var endPosition = this.fromString.indexOf(boundary, this.index);
        this.index = endPosition + 1;
        return this.fromString.substring(startPosition, endPosition);
    }

    findName() {
        var buffer = "";
        while (this.index < this.length) {
            const char = this.fromString.charAt(this.index);
            if (/[a-zA-Z0-9.:_-]/.test(char)) {
                this.index++;
                buffer += char;
            } else {
                return buffer;
            }
        }
        return buffer;
    }

}

class Parser {
    tokens;
    tree;
    component;
    error;
    line;

    constructor(tokens, component) {
        this.tokens = tokens || [];
        this.component = component;
    }

    checkTokenType(type) {
        if (this.tokens.length === 0) {
            return false;
        } else if (this.tokens[0].type === type) {
            return true;
        } else {
            return false;
        }
    }

    checkNextTokenType(type) {
        if (this.tokens.length <= 1) {
            return false;
        } else if (this.tokens[1].type === type) {
            return true;
        } else {
            return false;
        }
    }

    parse() {
        this.tree = new TokenTree();
        this.error = false;
        var token;
        while (this.tokens.length > 0 && !this.error) {
            token = this.tokens.shift();
            this.line = token.line;
            if (token.type === undefined) {
                continue;
            } else if (token.type === "<" && this.checkTokenType("/")) {
                this.endTagContext();
            } else if (token.type === "<") {
                this.tagContext();
            } else if (token.type === "{") {
                this.tree.createDinamicContent(token.value, this.component);
            } else if (token.type === "string") {
                this.tree.createText(token.value, this.component);
            } else {
                // this.error = "unexpected t   oken " + token.type + " at line " + token.line;
            }
        }
        this.tree.end();
        return this.tree.elements;
    }

    tagContext() {
        if (this.tokens.length === 0) {
            this.error = "Unexpected end of string at line" + this.line;
            return;
        }
        if (!this.checkTokenType("name")) {
            this.error = "missing tag name at line " + this.line;
            return;
        }
        this.tree.createElement(this.tokens.shift().value, this.component);
        var token;
        while (this.tokens.length > 0) {
            token = this.tokens.shift();
            this.line = token.line;
            if (token.type === ">") {
                this.tree.levelUp();
                return;
            } else if (token.type === "name" && token.value.indexOf(":") > 0 && this.checkTokenType("=") && this.checkNextTokenType("{")) {
                this.tokens.shift();
                const value = this.tokens.shift().value;
                const attributeName = token.value;
                this.tree.currentElement.specialAttributes[attributeName] = value;
            } else if (token.type === "/" && this.checkTokenType(">")) {
                this.tokens.shift();
                return;
            } else if (token.type === "name" && this.checkTokenType("=") && this.checkNextTokenType("string")) {
                this.tokens.shift();
                const value = this.tokens.shift().value;
                const attributeName = token.value;
                this.tree.currentElement.staticAttributes[attributeName] = value;
            } else if (token.type === "name" && this.checkTokenType("=") && this.checkNextTokenType("{")) {
                this.tokens.shift();
                const value = this.tokens.shift().value;
                const attributeName = token.value;
                this.tree.currentElement.dinamicAttributes[attributeName] = value;
            } else if (token.type === "name") {
                this.tree.currentElement.staticAttributes[token.value] = true;
            }
        }
    }

    endTagContext() {
        this.tree.levelDown();
        do {
            this.tokens.shift();
        } while (!this.checkTokenType(">"));
        this.tokens.shift();
    }
}

class TokenTree {
    steps = [[]];
    currentStep = 0;
    currentElement = false;

    createElement(name, component) {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
        }
        this.currentElement = {
            type: "element",
            value: name,
            component: component,
            staticAttributes: {},
            dinamicAttributes: {},
            specialAttributes: {},
            children: []
        };
    }

    createDinamicContent(value, component) {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
        }
        this.currentElement = {
            type: "property",
            component: component,
            value: value
        };
    }

    createText(value, component) {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
        }
        this.currentElement = {
            type: "text",
            value: value
        };
    }

    levelUp() {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
            this.currentElement = false;
        }
        this.currentStep++;
        this.steps[this.currentStep] = [];
    }

    levelDown() {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
            this.currentElement = false;
        }
        this.currentStep--;
        this.steps[this.currentStep][this.steps[this.currentStep].length - 1].children = this.steps.pop();
    }

    end() {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
            this.currentElement = false;
        }
        while (this.currentStep > 0) {
            this.levelDown();
        }
    }

    get elements() {
        return this.steps[0];
    }

}

class Render {
    #trackedProperties;
    page;
    slot = [];
    #template;
    #templateChildren = [];
    #parentElement;

    constructor(page, template) {
        this.page = page;
        this.#template = template;
    }

    render(element) {
        this.#parentElement = element;
        var tokenizer = new Tokenizer(this.#template.template);
        var tokens = tokenizer.tokenize();
        var parser = new Parser(tokens, this.#template);
        this.#templateChildren = parser.parse();
        this.renderChildren(element, this.#templateChildren);
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
            } else if (templateNode.specialAttributes["if:true"] && !this.getComponentProperty(templateNode.component, templateNode.specialAttributes["if:true"])) {
                this.createComment(parentElement, templateNode);
            } else if (templateNode.specialAttributes["if:false"] && this.getComponentProperty(templateNode.component, templateNode.specialAttributes["if:false"])) {
                this.createComment(parentElement, templateNode);
            } else if (templateNode.value === "mod") {
                this.createModule(parentElement, templateNode);
            } else if (templateNode.value === "slot") {
                this.createSlot(parentElement, templateNode);
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
        if (templateNode.specialAttributes["if:true"] || templateNode.specialAttributes["if:false"]) {
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
            templateNode.component.slot = templateNode.children;
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

    createSlot(parentElement, templateNode) {
        templateNode.children = this.cloneChildren(templateNode.component.slot);
        this.renderChildren(parentElement, templateNode.children);
    }

    refresh() {
        this.refreshChildren(this.parentElement, this.#templateChildren);
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
            } else if (templateNode.specialAttributes["if:true"] && templateNode.status === true && !this.getComponentProperty(templateNode.component, templateNode.specialAttributes["if:true"])) {
                this.refreshToFalseCondition(parentElement, templateNode);
            } else if (templateNode.specialAttributes["if:true"] && templateNode.status === false) {
                if (this.getComponentProperty(templateNode.component, templateNode.specialAttributes["if:true"])) {
                    this.refreshToTrueCondition(parentElement, templateNode);
                }
            } else if (templateNode.specialAttributes["if:false"] && templateNode.status === true && this.getComponentProperty(templateNode.component, templateNode.specialAttributes["if:false"])) {
                this.refreshToFalseCondition(parentElement, templateNode);
            } else if (templateNode.specialAttributes["if:false"] && templateNode.status === false) {
                if (!this.getComponentProperty(templateNode.component, templateNode.specialAttributes["if:false"])) {
                    this.refreshToTrueCondition(parentElement, templateNode);
                }
            } else if (templateNode.value === "mod") {
                templateNode.component.refresh();
            } else if (templateNode.value === "slot") {
                this.refreshChildren(element, templateNode.children);
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
        var oldNode = templateNode.node;
        var element = this.createElement(parentElement, templateNode);
        parentElement.insertBefore(element, oldNode);
        parentElement.removeChild(oldNode);
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
        if (!Array.isArray(loopIterator)) {
            loopIterator = [];
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
        this.#trackedProperties = {};
        for (name in this.#template) {
            this.#trackedProperties[name] = this.#template[name];
        }
    }

    afterEvent() {
        for (name in this.#trackedProperties) {
            if (this.#template[name] !== this.#trackedProperties[name]) {
                this.refresh();
                return;
            }
        }
    }

}

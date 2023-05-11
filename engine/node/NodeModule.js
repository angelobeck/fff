
class NodeModule extends Node {
    endingComment;
    moduleSymbol;
    parentRender;

    create(parentElement, insertBeforeMe) {
        this.endingComment = document.createComment("");
        parentElement.insertBefore(this.endingComment, insertBeforeMe);
        if (!this.parentRender) {
            this.parentRender = this.render;
        }
        this.generateModule(parentElement, this.endingComment);
    }

    generateModule(parentElement, insertBeforeMe) {
        var component;
        this.moduleSymbol = this.findMySymbol();
        if (!this.moduleSymbol) {
            return;
        } else if (typeof (this.moduleSymbol) === "object") {
            component = this.moduleSymbol;
        } else {
            component = new this.moduleSymbol();
        }
        this.render = new Render(component, this);
        var tokenizer = new Tokenizer(component.template);
        var tokens = tokenizer.tokenize();
        var parser = new Parser(tokens, this.render);
        this.render.slot = this.children;
        this.children = parser.parse();
        this.createStaticAttributes();
        this.createDinamicAttributes();
        setTimeout(() => {
            this.render.beforeEvent();
            this.render.component.renderedCallback();
            this.render.afterEvent();
        }, 20);
        this.render.component.connectedCallback();
        this.render.createChildren(this.children, parentElement, insertBeforeMe);
    }

    refresh() {
        var moduleSymbol = this.findMySymbol();
        if (moduleSymbol && this.moduleSymbol && moduleSymbol === this.moduleSymbol) {
            this.refreshDinamicAttributes();
            setTimeout(() => {
                this.render.beforeEvent();
                this.render.component.renderedCallback();
                this.render.afterEvent();
            }, 20);
            this.render.refreshChildren(this.children);
            return;
        }

        this.render.removeChildren(this.children);
        this.children = [];
        this.render.component.disconnectedCallback();
        this.generateModule(this.endingComment.parentElement, this.endingComment);
    }

    remove() {
        this.render.removeChildren(this.children);
        this.render.component.disconnectedCallback();
        var parentElement = this.endingComment.parentElement;
        parentElement.removeChild(this.endingComment);
        this.endingComment = false;
    }

    findMySymbol() {
        var name = this.findMyName();
        if (page.modules[name]) {
            return page.modules[name];
        } else if (componentsList[name]) {
            return componentsList[name];
        } else {
            return false;
        }
    }

    findMyName() {
        if (this.staticAttributes.name) {
            return this.staticAttributes.name;
        } else if (this.dinamicAttributes.name) {
            var path = this.dinamicAttributes.name;
            return this.parentRender.getComponentProperty(path);
        } else {
            return "";
        }
    }

    createStaticAttributes() {
        for (let name in this.staticAttributes) {
            if (name === "name") {
                continue;
            }
            const value = this.staticAttributes[name];
            this.render.setComponentProperty(name, value);
        }
    }

    createDinamicAttributes() {
        for (let name in this.dinamicAttributes) {
            if (name.startsWith("on")) {
                this.createEvent(name);
            } else if (name.indexOf(":") > 0) {
                continue;
            } else if (name === "name") {
                continue;
            } else {
                const path = this.dinamicAttributes[name];
                const value = this.parentRender.getComponentProperty(path);
                this.render.setComponentProperty(name, value);
            }
        }
    }

    createEvent(name) {
        var callback = this.dinamicAttributes[name];
        this.render.component[name] = (event) => {
            this.parentRender.beforeEvent();
            this.parentRender.component[callback](event);
            this.parentRender.afterEvent();
        }
    }

    refreshDinamicAttributes() {
        for (let name in this.dinamicAttributes) {
            if (name.startsWith("on")) {
                continue;
            } else if (name.indexOf(":") > 0) {
                continue;
            } else if (name === "name") {
                continue;
            } else {
                const path = this.dinamicAttributes[name];
                const value = this.parentRender.getComponentProperty(path);
                this.render.setComponentProperty(name, value);
            }
        }
    }

}

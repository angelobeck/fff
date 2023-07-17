
class NodeComponent extends Node {
    parentRender;

    create(parentElement, insertBeforeMe) {
        if (!this.parentRender) {
            this.parentRender = this.render;
        }
        var component = new componentsList[this.value]();
        this.render = new Render(component, this);
        var tokenizer = new Tokenizer(component.template);
        var tokens = tokenizer.tokenize();
        var parser = new Parser(tokens, this.render);
        this.render.slot = this.children || [];
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
        this.refreshDinamicAttributes();
        setTimeout(() => {
            this.render.beforeEvent();
            this.render.component.renderedCallback();
            this.render.afterEvent();
        }, 20);
        this.render.refreshChildren(this.children);
    }

    remove() {
        this.render.removeChildren(this.children);
        this.render.component.disconnectedCallback();
    }

    createStaticAttributes() {
        for (let name in this.staticAttributes) {
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
            } else {
                const path = this.dinamicAttributes[name];
                const value = this.parentRender.getComponentProperty(path);
                this.render.setComponentProperty(name, value);
            }
        }
    }

    createEvent(name) {
        var callbackName = this.dinamicAttributes[name];
        this.render.component[name] = (event) => {
            this.parentRender.beforeEvent();
            this.parentRender.component[callbackName](event);
            this.parentRender.afterEvent();
        }
    }

    refreshDinamicAttributes() {
        for (let name in this.dinamicAttributes) {
            if (name.startsWith("on")) {
                continue;
            } else if (name.indexOf(":") > 0) {
                continue;
            } else {
                const path = this.dinamicAttributes[name];
                const value = this.parentRender.getComponentProperty(path);
                this.render.setComponentProperty(name, value);
            }
        }
    }

}

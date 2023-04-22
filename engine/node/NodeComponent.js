
class NodeComponent extends Node {
    parentRender;

    create(parentElement, insertBeforeMe) {
        this.parentRender = this.render;
        this.generateModule(parentElement, insertBeforeMe);
    }

    generateModule(parentElement, insertBeforeMe) {
        var component = new componentsList[this.type]();
        this.render = new Render(component, this);
        var tokenizer = new Tokenizer(component.template);
        var tokens = tokenizer.tokenize();
        var parser = new Parser(tokens, this.render);
        this.render.slot = this.children;
        this.children = parser.parse();
        this.createStaticAttributes();
        this.createDinamicAttributes();
        this.render.createChildren(this.children, parentElement, insertBeforeMe);
    }

    refresh() {
        this.refreshDinamicAttributes();
        this.render.refreshChildren(this.children);
    }

    remove() {
        this.render.removeChildren(this.children);
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
                const target = this.dinamicAttributes[name];
                const value = this.parentRender.getComponentProperty(target);
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
            } else {
                const target = this.dinamicAttributes[name];
                const value = this.parentRender.getComponentProperty(target);
                this.render.setComponentProperty(name, value);
            }
        }
    }

}

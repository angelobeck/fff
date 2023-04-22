
class NodeModule extends Node {
    endingComment;
    moduleSymbol;
    parentRender;

    create(parentElement, insertBeforeMe) {
        this.endingComment = document.createComment("");
        parentElement.insertBefore(this.endingComment, insertBeforeMe);
        this.parentRender = this.render;
        this.generateModule(parentElement, this.endingComment);
    }

    generateModule(parentElement, insertBeforeMe) {
        var name = this.findMyName();
        this.moduleSymbol = page.modules[name];
        var component = new this.moduleSymbol();
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
        var name = this.findMyName();
        var moduleSymbol = page.modules[name];
        if (moduleSymbol === this.moduleSymbol) {
            this.refreshDinamicAttributes();
            this.render.refreshChildren(this.children);
            return;
        }

        this.render.removeChildren(this.children);
        this.children = [];
        this.render = null;
        this.generateModule(this.endingComment.parentElement, this.endingComment);
    }

    remove() {
        this.render.removeChildren(this.children);
        var parentElement = this.endingComment.parentElement;
        parentElement.removeChild(this.endingComment);
        this.endingComment = false;
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
            } else if (name === "name") {
                continue;
            } else {
                const target = this.dinamicAttributes[name];
                const value = this.parentRender.getComponentProperty(target);
                this.render.setComponentProperty(name, value);
            }
        }
    }

}

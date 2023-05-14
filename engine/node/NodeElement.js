
class NodeElement extends Node {
    loopChildren = [];

    create(parentElement, insertBeforeMe) {
        var tagName = this.value.toUpperCase();
        this.node = document.createElement(tagName);
        parentElement.insertBefore(this.node, insertBeforeMe);
        this.createStaticAttributes();
        this.createDinamicAttributes();

        if (this.dinamicAttributes["for:each"] && this.dinamicAttributes["for:item"]) {
            this.createLoop(this.node);
        } else {
            this.render.createChildren(this.children, this.node);
        }
    }

    refresh() {
        this.refreshDinamicAttributes();

        if (this.dinamicAttributes["for:each"] && this.dinamicAttributes["for:item"]) {
            this.refreshLoop();
        } else {
            this.render.refreshChildren(this.children);
        }
    }

    remove() {
        if (this.dinamicAttributes["for:each"] && this.dinamicAttributes["for:item"]) {
            while (this.loopChildren.length > 0) {
                this.render.removeChildren(this.loopChildren.shift());
            }
        } else {
            this.render.removeChildren(this.children);
        }
        if (this.node) {
            const parentElement = this.node.parentElement;
            parentElement.removeChild(this.node);
            this.node = false;
        }
    }

    createStaticAttributes() {
        for (let name in this.staticAttributes) {
            if(name.indexOf(":") >= 0) {
                continue;
            }
            let value = this.staticAttributes[name];
            this.node.setAttribute(name, value);
        }
    }

    createDinamicAttributes() {
        for (let name in this.dinamicAttributes) {
            const path = this.dinamicAttributes[name];
            if (name.startsWith("on")) {
                this.createEvent(name);
            } else if (name === "wire:element") {
                this.render.setComponentProperty(path, this.node);
            } else if (name.indexOf(":") > 0) {
                continue;
            } else {
                const value = this.render.getComponentProperty(path);
                this.node.setAttribute(name, value);
            }
        }
    }

    createEvent(name) {
        var target = this.dinamicAttributes[name];
        this.node[name] = (event) => {
            this.render.beforeEvent();
            this.render.component[target](event);
            this.render.afterEvent();
        };
    }

    createLoop() {
        var loopChildren;
        const loopIterator = this.render.getComponentProperty(this.dinamicAttributes["for:each"]);
        if (!Array.isArray(loopIterator)) {
            return;
        }
        const target = this.dinamicAttributes["for:item"];
        this.loopChildren = [];
        for (let iteratorIndex = 0; iteratorIndex < loopIterator.length; iteratorIndex++) {
            this.render.setComponentProperty(target, loopIterator[iteratorIndex]);
            loopChildren = this.render.cloneChildren(this.children);
            this.loopChildren.push(loopChildren);
            this.render.createChildren(loopChildren, this.node);
        }
    }

    refreshDinamicAttributes() {
        for (let name in this.dinamicAttributes) {
            const path = this.dinamicAttributes[name];
            const value = this.render.getComponentProperty(path);
            if (name.startsWith("on")) {
                continue;
            } else if (name === "wire:element") {
                continue;
                // this.render.setComponentProperty(path, this.node);
            } else if (name.indexOf(":") > 0) {
                continue;
            } else {
                this.node.setAttribute(name, value);
            }
        }
    }

    refreshLoop() {
        var loopChildren;
        const loopIterator = this.render.getComponentProperty(this.dinamicAttributes["for:each"]);
        if (!Array.isArray(loopIterator)) {
            loopIterator = [];
        }
        let target = this.dinamicAttributes["for:item"];
        while (this.loopChildren.length > loopIterator.length) {
            loopChildren = this.loopChildren.pop();
            while (loopChildren.length > 0) {
                loopChildren.pop().remove();
            }
        }
        for (let iteratorIndex = 0; iteratorIndex < loopIterator.length; iteratorIndex++) {
            this.render.component[target] = loopIterator[iteratorIndex];
            if (iteratorIndex < this.loopChildren.length) {
                loopChildren = this.loopChildren[iteratorIndex];
                this.render.refreshChildren(loopChildren);
            } else {
                loopChildren = this.render.cloneChildren(this.children);
                this.loopChildren.push(loopChildren);
                this.render.createChildren(loopChildren, this.node);
            }
        }
    }

}

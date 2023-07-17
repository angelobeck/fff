
class NodeTemplate extends Node {
    loopChildren = [];
    endingElement = false;

    create(parentElement, insertBeforeMe) {
        this.endingElement = document.createTextNode("");
        parentElement.insertBefore(this.endingElement, insertBeforeMe);
        if (this.dinamicAttributes["for:each"] && this.dinamicAttributes["for:item"]) {
            this.createLoop(parentElement, this.endingElement);
        } else {
            this.render.createChildren(this.children, parentElement, this.endingElement);
        }
    }

    refresh() {
        if (this.dinamicAttributes["for:each"] && this.dinamicAttributes["for:item"]) {
            this.refreshLoop();
        } else {
            this.render.refreshChildren(this.children);
        }
    }

    remove() {
        if (this.dinamicAttributes["for:each"] && this.dinamicAttributes["for:item"]) {
            while (this.loopChildren.length > 0) {
                this.render.removeChildren(this.loopChildren.pop());
            }
        } else {
            this.render.removeChildren(this.children);
        }
        var parentElement = this.endingElement.parentElement;
        parentElement.removeChild(this.endingElement);
        this.endingElement = false;
    }

    createLoop(parentElement, insertBeforeMe) {
        var children;
        const loopIterator = this.render.getComponentProperty(this.dinamicAttributes["for:each"]);
        if (!Array.isArray(loopIterator)) {
            return;
        }
        const target = this.dinamicAttributes["for:item"];
        this.loopChildren = [];
        for (let iteratorIndex = 0; iteratorIndex < loopIterator.length; iteratorIndex++) {
            this.render.component[target] = loopIterator[iteratorIndex];
            children = this.render.cloneChildren(this.children);
            this.loopChildren.push(children);
            this.render.createChildren(children, parentElement, insertBeforeMe);
        }
    }

    refreshLoop() {
        var parentElement = this.endingElement.parentElement;
        var children;
        const loopIterator = this.render.getComponentProperty(this.dinamicAttributes["for:each"]);
        if (!Array.isArray(loopIterator)) {
            loopIterator = [];
        }
        let target = this.dinamicAttributes["for:item"];
        while (this.loopChildren.length > loopIterator.length) {
            children = this.loopChildren.pop();
            while (children.length > 0) {
                children.pop().remove();
            }
        }
        for (let iteratorIndex = 0; iteratorIndex < loopIterator.length; iteratorIndex++) {
            this.render.component[target] = loopIterator[iteratorIndex];
            if (iteratorIndex < this.loopChildren.length) {
                children = this.loopChildren[iteratorIndex];
                this.render.refreshChildren(children);
            } else {
                children = this.render.cloneChildren(this.children);
                this.loopChildren.push(children);
                this.render.createChildren(children, parentElement, this.endingElement);
            }
        }
    }


}

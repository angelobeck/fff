
class NodeTemplate extends Node {
    loopChildren = [];
    endingComment = false;

    create(parentElement, insertBeforeMe) {
        this.endingComment = document.createComment("");
        parentElement.insertBefore(this.endingComment, insertBeforeMe);
        if (this.dinamicAttributes["for:each"] && this.dinamicAttributes["for:item"]) {
            this.createLoop(parentElement, this.endingComment);
        } else {
            this.render.createChildren(this.children, parentElement, this.endingComment);
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
        var parentElement = this.endingComment.parentElement;
        parentElement.removeChild(this.endingComment);
        this.endingComment = false;
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
        var parentElement = this.endingComment.parentElement;
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
                this.render.createChildren(children, parentElement, this.endingComment);
            }
        }
    }


}

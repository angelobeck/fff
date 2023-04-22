
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
        this.render.removeChildren(this.children);
        var parentElement = this.endingComment.parentElement;
        parentElement.removeChild(this.endingComment);
        this.endingComment = false;
    }

    createLoop(parentElement, insertBeforeMe) {
        var loopChildren;
        const loopIterator = this.render.getComponentProperty(this.dinamicAttributes["for:each"]);
        if (!Array.isArray(loopIterator)) {
            return;
        }
        const target = this.dinamicAttributes["for:item"];
        this.loopChildren = [];
        for (let iteratorIndex = 0; iteratorIndex < loopIterator.length; iteratorIndex++) {
            this.render.component[target] = loopIterator[iteratorIndex];
            loopChildren = this.render.cloneChildren(this.children);
            this.loopChildren.push(loopChildren);
            this.render.createChildren(loopChildren, parentElement, insertBeforeMe);
        }
    }

    refreshLoop() {
        var parentElement = this.endingComment.parentElement;
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
                this.render.createChildren(loopChildren, parentElement, this.endingComment);
            }
        }
    }


}

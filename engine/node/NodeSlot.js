
class NodeSlot extends Node {

    create(parentElement, insertBeforeMe) {
        if (!this.render || !this.render.slot || !Array.isArray(this.render.slot)) {
            return;
        }
        this.children = this.render.slot;
        this.render.createChildren(this.children, parentElement, insertBeforeMe);
    }

    refresh() {
        this.render.refreshChildren(this.children);
    }

    remove() {
        this.render.removeChildren(this.children);
    }

}

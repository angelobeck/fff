
class NodeSlot {

    create(parentElement, insertBeforeMe) {
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

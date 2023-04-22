
class NodeText extends Node {

    create(parentElement, insertBeforeMe) {
        this.node = document.createTextNode(this.value);
        parentElement.insertBefore(this.node, insertBeforeMe);
    }

    refresh() {
    }

    remove() {
        if (this.node) {
            var parentElement = this.node.parentElement;
            parentElement.removeChild(this.node);
            this.node = false;
        }
    }

}

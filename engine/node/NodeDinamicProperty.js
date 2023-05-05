
class NodeDinamicProperty extends Node {

    create(parentElement, insertBeforeMe) {
        var value = this.render.getComponentProperty(this.value);
        this.node = document.createTextNode(value);
        parentElement.insertBefore(this.node, insertBeforeMe);
    }

    refresh() {
        var value = this.render.getComponentProperty(this.value);
        this.node.data = value;
    }

    remove() {
        if (this.node) {
            var parentElement = this.node.parentElement;
            parentElement.removeChild(this.node);
        }
    }

}

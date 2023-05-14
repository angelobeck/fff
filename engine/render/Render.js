
class Render {
    component;
    slot;
    rootNode;
    trackedProperties = {};

    constructor(component, rootNode) {
        this.component = component;
        this.component.registerRender(this);

        this.rootNode = rootNode;
    }

    createChildren(children, parentElement, insertBeforeMe) {
        if (!Array.isArray(children)) {
            return;
        }
        var index;
        var node;
        for (index = 0; index < children.length; index++) {
            node = children[index];
            if (node.dinamicAttributes["if:true"] || node.dinamicAttributes["if:false"]) {
                node.conditionEndingComment = document.createComment("");
                parentElement.insertBefore(node.conditionEndingComment, insertBeforeMe);
                node.status = this.checkConditionStatus(node);
                if (node.status) {
                    node.create(parentElement, node.conditionEndingComment);
                }
            } else {
                node.create(parentElement, insertBeforeMe);
            }
        }
    }

    refreshChildren(children) {
        if (!Array.isArray(children)) {
            return;
        }
        var index;
        var node;
        for (index = 0; index < children.length; index++) {
            node = children[index];
            if (node.dinamicAttributes["if:true"] || node.dinamicAttributes["if:false"]) {
                if (!node.status && this.checkConditionStatus(node)) {
                    node.create(node.conditionEndingComment.parentElement, node.conditionEndingComment);
                } else if (node.status && !this.checkConditionStatus(node)) {
                    node.remove();
                } else if (node.status) {
                    node.refresh();
                }
                node.status = this.checkConditionStatus(node);
            } else {
                node.refresh();
            }
        }
    }

    removeChildren(children) {
        if (!Array.isArray(children)) {
            return;
        }
        var index;
        var node;
        for (index = 0; index < children.length; index++) {
            node = children[index];
            if (this.checkConditionStatus(node)) {
                node.remove();
            }
            if (node.dinamicAttributes["if:true"] || node.dinamicAttributes["if:false"]) {
                const parentElement = node.conditionEndingComment.parentElement;
                parentElement.removeChild(node.conditionEndingComment);
                node.conditionEndingComment = false;
            }
        }
    }

    getComponentProperty(path) {
        var value;
        var parts = path.split(".");
        value = this.component[parts.shift()];
        while (value && parts.length > 0) {
            value = value[parts.shift()];
        }
        return value || "";
    }

    setComponentProperty(path, value) {
        var parts = path.split(".");
        var name = parts.shift();
        if (parts.length === 0) {
            this.component[name] = value;
            return;
        }
        var name2 = parts.shift();
        if (!this.component[name]) {
            this.component[name] = {};
        }
        if (parts.length === 0) {
            this.component[name][name2] = value;
            return;
        }
    }

    checkConditionStatus(node) {
        var value;
        if (node.dinamicAttributes["if:true"]) {
            value = this.getComponentProperty(node.dinamicAttributes["if:true"]);
            if (node.staticAttributes["if:compare"]) {
                return value === node.staticAttributes["if:compare"];
            } else if (node.dinamicAttributes["if:compare"]) {
                return value === this.getComponentProperty(node.dinamicAttributes["if:compare"]);
            } else if (
                value === undefined ||
                value === null ||
                value === false ||
                value === "false" ||
                value === 0 ||
                value === "" ||
                (Array.isArray(value) && value.length === 0)
            ) {
                return false;
            } else {
                return true;
            }
        } else if (node.dinamicAttributes["if:false"]) {
            value = this.getComponentProperty(node.dinamicAttributes["if:false"]);
            if (node.staticAttributes["if:compare"]) {
                return value !== node.staticAttributes["if:compare"];
            } else if (node.dinamicAttributes["if:compare"]) {
                return value !== this.getComponentProperty(node.dinamicAttributes["if:compare"]);
            }else if (
                value === undefined ||
                value === null ||
                value === false ||
                value === "false" ||
                value === 0 ||
                value === "" ||
                (Array.isArray(value) && value.length === 0)
            ) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    cloneChildren(children) {
        var clonedChild;
        var result = [];
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            const type = child.constructor.name;
            eval("clonedChild = new " + type + "(this, child.value);");
            for (let name in child) {
                if (name === "children") {
                    clonedChild.children = this.cloneChildren(child.children);
                } else {
                    clonedChild[name] = child[name];
                }
            }
            result.push(clonedChild);
        }
        return result;
    }

    beforeEvent() {
        for (name in this.component) {
            if (Object.hasOwn(this.component, name)) {
                this.trackedProperties[name] = this.component[name];
            }
        }
    }

    afterEvent() {
        for (name in this.trackedProperties) {
            if (this.trackedProperties[name] !== this.component[name]) {
                setTimeout(() => {
                    this.beforeEvent();
                    this.component.renderedCallback();
                    this.afterEvent();
                }, 20);
                this.refreshChildren(this.rootNode.children);
                return;
            }
        }
    }

    refresh() {
        // this.rootNode.refresh();
        this.refreshChildren(this.rootNode.children);
    }

}

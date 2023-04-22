
class TokenTree {
    steps = [[]];
    currentStep = 0;
    currentElement = false;

    createElement(name, render) {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
        }
        if (name === "mod") {
            this.currentElement = new NodeModule(false);
        } else if (name === "template") {
            this.currentElement = new NodeTemplate(render);
        } else if (name === "slot") {
            this.currentElement = new NodeSlot(render);
        } else if (componentsList[name]) {
            this.currentElement = new NodeComponent(render, name);
        } else {
            this.currentElement = new NodeElement(render, name);
        }
    }

    createDinamicContent(value, render) {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
        }
        this.currentElement = new NodeDinamicProperty(render, value);
    }

    createText(value, render) {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
        }
        this.currentElement = new NodeText(render, value);
    }

    levelUp() {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
            this.currentElement = false;
        }
        this.currentStep++;
        this.steps[this.currentStep] = [];
    }

    levelDown() {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
            this.currentElement = false;
        }
        this.currentStep--;
        this.steps[this.currentStep][this.steps[this.currentStep].length - 1].children = this.steps.pop();
    }

    end() {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
            this.currentElement = false;
        }
        while (this.currentStep > 0) {
            this.levelDown();
        }
    }

    get elements() {
        return this.steps[0];
    }

}

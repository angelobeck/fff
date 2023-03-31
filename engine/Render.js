
class Tokenizer {
    fromString;
    index;
    line;
    length;
    tokens = [];

    constructor(fromString) {
        this.fromString = fromString;
        this.length = fromString.length;
    }

    tokenize() {
        var char;
        this.tokens = [];
        this.index = 0;
        this.line = 1;
        while (this.index < this.length) {
            char = this.fromString.charAt(this.index);
            switch (char) {
                case "<":
                case ">":
                case "=":
                case "/":
                    this.tokens.push({ type: char, line: this.line });
                    this.index++;
                    break;

                case "{":
                    this.index++;
                    this.tokens.push({ type: char, value: this.findBoundary("}"), line: this.line });
                    break;

                case "'":
                case '"':
                    this.index++;
                    this.tokens.push({ type: "string", value: this.findBoundary(char), line: this.line });
                    break;

                case "\n":
                    this.index++;
                    this.line++;
                    break;

                default:
                    if (/[a-zA-Z]/.test(char)) {
                        this.tokens.push({ type: "name", value: this.findName(), line: this.line });
                    } else {
                        this.index++;
                    }
            }
        }
        return this.tokens;
    }

    findBoundary(boundary) {
        var startPosition = this.index;
        var endPosition = this.fromString.indexOf(boundary, this.index);
        this.index = endPosition + 1;
        return this.fromString.substring(startPosition, endPosition);
    }

    findName() {
        var buffer = "";
        while (this.index < this.length) {
            const char = this.fromString.charAt(this.index);
            if (/[a-zA-Z0-9.:_-]/.test(char)) {
                this.index++;
                buffer += char;
            } else {
                return buffer;
            }
        }
        return buffer;
    }

}

class BuildTree {
    tokens;
    tree;
    component;
    error;
    line;

    constructor(tokens, component) {
        this.tokens = tokens || [];
        this.component = component;
    }

    checkTokenType(type) {
        if (this.tokens.length === 0) {
            return false;
        } else if (this.tokens[0].type === type) {
            return true;
        } else {
            return false;
        }
    }

    checkNextTokenType(type) {
        if (this.tokens.length <= 1) {
            return false;
        } else if (this.tokens[1].type === type) {
            return true;
        } else {
            return false;
        }
    }

    buildTree() {
        this.tree = new TokenTree();
        this.error = false;
        var token;
        while (this.tokens.length > 0 && !this.error) {
            token = this.tokens.shift();
            this.line = token.line;
            if (token.type === undefined) {
                continue;
            } else if (token.type === "<" && this.checkTokenType("/")) {
                this.endTagContext();
            } else if (token.type === "<") {
                this.tagContext();
            } else if (token.type === "{") {
                this.tree.createDinamicContent(token.value, this.component);
            } else {
                // this.error = "unexpected token " + token.type + " at line " + token.line;
            }
        }
        this.tree.end();
        return this.tree.elements;
    }

    tagContext() {
        if (this.tokens.length === 0) {
            this.error = "Unexpected end of string at line" + this.line;
            return;
        }
        if (!this.checkTokenType("name")) {
            this.error = "missing tag name at line " + this.line;
            return;
        }
        this.tree.createElement(this.tokens.shift().value, this.component);
        var token;
        while (this.tokens.length > 0) {
            token = this.tokens.shift();
            this.line = token.line;
            if (token.type === ">") {
                this.tree.levelUp();
                return;
            } else if (token.type === "name" && token.value.indexOf(":") > 0 && this.checkTokenType("=") && this.checkNextTokenType("{")) {
                this.tokens.shift();
                const value = this.tokens.shift().value;
                const attributeName = token.value;
                this.tree.currentElement.specialAttributes[attributeName] = value;
            } else if (token.type === "/" && this.checkTokenType(">")) {
                this.tokens.shift();
                return;
            } else if (token.type === "name" && this.checkTokenType("=") && this.checkNextTokenType("string")) {
                this.tokens.shift();
                const value = this.tokens.shift().value;
                const attributeName = token.value;
                this.tree.currentElement.staticAttributes[attributeName] = value;
            } else if (token.type === "name" && this.checkTokenType("=") && this.checkNextTokenType("{")) {
                this.tokens.shift();
                const value = this.tokens.shift().value;
                const attributeName = token.value;
                this.tree.currentElement.dinamicAttributes[attributeName] = value;
            } else if (token.type === "name") {
                this.tree.currentElement.staticAttributes[token.value] = true;
            }
        }
    }

    endTagContext() {
        this.tree.levelDown();
        do {
            this.tokens.shift();
        } while (!this.checkTokenType(">"));
        this.tokens.shift();
    }
}

class TokenTree {
    steps = [[]];
    currentStep = 0;
    currentElement = false;

    createElement(name, component) {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
        }
        this.currentElement = {
            type: "element",
            value: name,
            component: component,
            staticAttributes: {},
            dinamicAttributes: {},
            specialAttributes: {},
            children: []
        };
    }

    createDinamicContent(value, component) {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
        }
        this.currentElement = {
            type: "property",
            component: component,
            value: value
        };
    }

    createText(value, component) {
        if (this.currentElement !== false) {
            this.steps[this.currentStep].push(this.currentElement);
        }
        this.currentElement = {
            type: "text",
            value: value
        };
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


class Parser {
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

    parse() {
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
            } else if (token.type === "string") {
                this.tree.createText(token.value, this.component);
            } else {
                // this.error = "unexpected t   oken " + token.type + " at line " + token.line;
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


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

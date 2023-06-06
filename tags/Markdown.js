
class Markdown extends Module {
    template = `
<template for:each={iterableBlocks} for:item={block}>
<mod name={block.name} value={block.value} />
</template>
    `;

    plain = false;

    get iterableBlocks() {
        var plain;
        if (!this.plain) {
            plain = page.unescapeString(page.selectLanguage(this.value));
        } else {
            plain = this.value;
        }
        var lines = plain.split("\n");
        var blocks = [];
        var block;

        function nextLineStartsWith(prefix, includingBlankLines = true) {
            if (lines.length === 0) {
                return false;
            } else if (lines[0] === "") {
                return includingBlankLines;
            } else {
                return lines[0].startsWith(prefix);
            }
        }

        function recognizeCodefence() {
            if (nextLineStartsWith("    ")) {
                let block = {
                    name: "markdown-block-codefence",
                    value: lines.shift().substring(4),
                    lazyParagraph: false
                };
                while (nextLineStartsWith("    ")) {
                    block.value += "\n" + lines.shift().substring(4);
                }
                return block;
            } else {
                return false;
            }
        }

        function recognizeHeaders() {
            var match = /^\s{0,3}(#{1,6})\s(.*?)\s?#*$/d.exec(lines[0]);
            if (!match) {
                return false;
            }
            lines.shift();
            let headerLevel = match[1].length;
            let value = match[2];
            return {
                name: "markdown-block-h" + headerLevel,
                value: value,
                lazyParagraph: true
            };
        }

        function recognizeUnorderedList() {
            var items = [];
            while (true) {
                var match = /^(\s{0,3}(\*|-)\s)(.*)/d.exec(lines[0]);
                if (!match && items.length === 0) {
                    return false;
                } else if (!match) {
                    return {
                        name: "markdown-block-ul",
                        value: items,
                        lazyParagraph: true
                    };
                }
                lines.shift();
                let prefixLength = match[1].length;
                let prefix = "".padStart(prefixLength, " ");
                let value = match[3];
                while (nextLineStartsWith(prefix)) {
                    value += "\n" + lines.shift().substring(prefixLength);
                }
                items.push(value);
            }
        }

        function appendParagraph() {
            var line = lines.shift();
            if (blocks.length > 0 && blocks[blocks.length - 1].lazyParagraph) {
                let blocksLastIndex = blocks.length - 1;
                if (Array.isArray(blocks[blocksLastIndex].value)) {
                    let valueLastIndex = blocks[blocksLastIndex].value.length - 1;
                    blocks[blocksLastIndex].value[valueLastIndex] += "\n" + line;
                } else {
                    blocks[blocksLastIndex].value += "\n" + line;
                }
            } else {
                blocks.push({
                    name: "markdown-block-p",
                    value: line,
                    lazyParagraph: true
                });
            }
        }

        while (lines.length > 0) {
            if (lines[0].trim() === "") {
                lines.shift();
                if (blocks.length > 0) {
                    blocks[blocks.length - 1].lazyParagraph = false;
                }
                continue;
            }

            block = recognizeCodefence()
                || recognizeHeaders()
                || recognizeUnorderedList();

            if (block) {
                blocks.push(block);
            } else {
                appendParagraph();
            }
        }
        return blocks;
    }

}

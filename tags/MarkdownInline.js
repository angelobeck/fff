
class MarkdownInline extends Module {
    template = `
<template for:each={iterableInline} for:item={item}>
<mod name={item.name} value={item.value} />
</template>
    `;

    get iterableInline() {
        var plain;
        var items = [];

        if (typeof (this.value) !== "string") {
            plain = page.unescapeString(page.selectLanguage(this.value));
        } else {
            plain = this.value;
        }

        var buffer = "";
        var char = "";
        var index = 0;

        function bufferToTextNode() {
            if (buffer.length > 0) {
                items.push({
                    name: "markdown-inline-text",
                    value: buffer
                });
                plain = plain.substring(index);
                index = 0;
                buffer = "";
            }
        }

        function recognizeTagColor() {
            if (!plain.startsWith("<<", index)) {
                return false;
            }
            var endingIndex = plain.indexOf(">>", index);
            if (endingIndex === -1) {
                return false;
            }
            var value = plain.substring(index + 2, endingIndex);
            index = endingIndex + 2;
            return {
                name: "markdown-inline-color",
                value: value
            };
        }

        function recognizeTagUp() {
            if (!plain.startsWith("[^", index)) {
                return false;
            }
            var endingIndex = plain.indexOf("]", index);
            if (endingIndex === -1) {
                return false;
            }
            var value = plain.substring(index + 2, endingIndex);
            index = endingIndex + 1;
            return {
                name: "markdown-inline-cipher",
                value: value
            };
        }

        while (index < plain.length) {
            let item = recognizeTagColor()
                || recognizeTagUp();

            if (item) {
                bufferToTextNode();
                items.push(item);
            } else {
                buffer += plain.substring(index, index + 1);
                index++;
            }
        }
        bufferToTextNode();
        return items;
    }

}

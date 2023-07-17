
class MarkdownTagStrophe extends Module {
    static closeTag = true;

    template = `<p class="strophe" for:each={lines} for:item={line}>
<markdown-inline value={line.content} />
<br if:true={line.br} />
</p>`;

    get lines() {
        var lines = this.value.split("\n");
        return lines.map((content, index) => {
            return {
                content: content,
                br: index < lines.length - 1
            };
        });
    }


}

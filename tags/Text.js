
class Text extends Module {
    template = `{text}`;

    value = "";

    get text() {
        return page.unescapeString(page.selectLanguage(this.value));
    }

}

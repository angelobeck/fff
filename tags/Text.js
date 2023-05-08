
class Text extends Module {
    template = `{text}`;

    value = "";

get text() {
    return page.selectLanguage(this.value);
}

}

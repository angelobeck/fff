
class ModuleContent extends Module {
    template = `<markdown value={content} />`;

    get content() {
        return application.data.content;
    }

}

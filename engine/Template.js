
class Template {
    #render;
    template = ``;

    registerRender(render) {
        this.#render = render;
    }

    refresh() {
        this.#render.refresh();
    }

}

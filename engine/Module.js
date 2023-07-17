
class Module {
    #render;
    template = ``;

    registerRender(render) {
        this.#render = render;
    }

    refresh() {
        this.#render.refresh();
    }

    connectedCallback() { }
    renderedCallback() { }
    disconnectedCallback() { }
}

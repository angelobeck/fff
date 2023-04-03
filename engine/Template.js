
class Template {
    template = ``;
    #render;

    constructor(page){
        this.#render = new Render(page, this);
    }

    render(parentElement) {
        this.#render.render(parentElement);
    }

    renderizationRefresh() {
        this.#render.refresh();
    }

    refresh() {
        this.#render.refresh();
    }

    get slot () {
        return this.#render.slot;
    }

    set slot(slot){
        this.#render.slot = slot;
    }

    beforeEvent(){
        this.#render.beforeEvent();
    }

    afterEvent() {
        this.#render.afterEvent();
    }

    get page(){
        return this.#render.page;
    }

}

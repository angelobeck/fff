
class DreamFormButton extends Module {
    template = `
    <div>
    <button onclick={handleClick}><text value={label} /></button>
    </div>
    `;

    #control = {
        action: false,
        filter: "text",
        label: "",
        required: false,
        target: false,
        value: ""
    };

    set control(control) {
        const fields = ["action", "filter", "label", "required", "target", "value"];
        while (fields.length > 0) {
            const name = fields.shift();
            if (control[name]) {
                this.#control[name] = control[name];
            }
        }
    }

    onchange = (event) => { };
    onclick = (event) => { };

    set label(label) {
        this.#control.label = label;
    }

    get label() {
        return this.#control.label;
    }

    handleClick(event) {
        event.stopPropagation();
        this.onchange({ detail: this.#control });
        this.onclick({ detail: this.#control });
    }

}


class DreamFormTextarea extends Module {
    template = `
    <div>
    <label><text value={label} />
<textarea value={value} onkeydown={handleKeyDown} />
    </label>
    </div>
    `;

    #control = {
        action: false,
        filter: "text",
        label: "",
        required: false,
        target: false,
        value: ""
    }

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

    get label() {
        return this.#control.label;
    }

    get value() {
        return this.#control.value;
    }

    handleKeyDown(event) {
        this.#control.value = event.currentTarget.value;
        this.onchange({ detail: this.#control });
    }

}

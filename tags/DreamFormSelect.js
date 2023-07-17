
class DreamFormSelect extends Module {
    template = `
    <div>
    <label><text value={label} />

    </label>
    </div>
    `;

    value = "";
    control = {};
    inputElement;

    onchange = (event) => { };

    get label() {
        return this.control.label || "";
    }

    handleKeyDown(event) {
        this.value = event.currentTarget.value;
        this.onchange({
            detail: this
        });
    }

}

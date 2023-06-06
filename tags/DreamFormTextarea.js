
class DreamFormTextarea extends Module {
    template = `
    <div>
    <label><text value={label} />
<textarea onkeydown={handleKeyDown}>{value}</textarea>
    </label>
    </div>
    `;

    value = "";
    control = {};

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

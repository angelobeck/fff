
class DreamFormInput extends Module {
    template = `
    <div>
    <label><text value={label} />
<input type="text" value={value} onkeydown={handleKeyDown} wire:element={inputElement} />
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

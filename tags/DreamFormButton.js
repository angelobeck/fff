
class DreamFormButton extends Module {
    template = `
    <div>
    <button onclick={handleClick}><text value={label} /></button>
    </div>
    `;

    control = {};

    onchange = (event) => { };
    onclick = (event) => { };

    set label(label) {
        this.control.label = label;
    }

    get label() {
        return this.control.label;
    }

    handleClick(event) {
        event.stopPropagation();
        this.onchange({ detail: this });
        this.onclick({ detail: this });
    }

}


class DreamFormSelect extends Module {
    template = `
    <div>
    <label><text value={label} /><br />
<select wire:element={selectElement} for:each={iterableOptions} for:item={option}  onchange={handleChange}>
<option value={option.value} selected={option.selected}><text value={option.label} /></option>
</select>
    </label>
    </div>
    `;

    selectElement = false;
    value = "";
    control = {};

    get iterableOptions() {
        if (!Array.isArray(this.control.children) || this.control.children.length === 0) {
            return [];
        }

        return this.control.children.map(item => {
            if (typeof (item) === "string") {
                return {
                    value: item,
                    label: item,
                    selected: item === this.value
                };
            }
            return {
                value: item.value,
                label: item.label || item.value,
                selected: item.value === this.value
            };
        });
    }

    onchange = (event) => { };

    get label() {
        return this.control.label || "";
    }

    handleChange(event) {
        this.value = event.currentTarget.value;
        this.onchange({
            detail: this
        });
    }

}

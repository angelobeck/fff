
class DreamForm extends Module {
    template = `
    <div for:each={iterableFields} for:item={item}>
<mod name={item.name} control={item.control} onchange={handleChange} />
    </div>
    `;

    #data = {};
    controls = [];
    actions = {};

    set data(data) {
        this.#data = JSON.parse(JSON.stringify(data));
    }

    get data() {
        return this.#data;
    }

    handleChange(event) {
        const control = event.detail;
        if (control.action) {
            if (this.actions[control.action]) {
                this.actions[control.action]();
            }
            return;
        }
        if (control.filter && filtersList[control.filter]) {
            filtersList[control.filter].update(control, this);
        } else if (control.target) {
            this.#data[control.target] = control.value;
        }
    }

    get iterableFields() {
        return this.controls.map(control => {
            if (control.filter && filtersList[control.filter]) {
                control.value = filtersList[control.filter].create(control, this);
            }
            var name = "dream-form-" + control.type;
            return {
                name: name,
                control: control
            };
        });
    }

    getField(target) {
        if (this.#data[target]) {
            return this.#data[target];
        }
        return undefined;
    }

    setField(target, value) {
        this.#data[target] = value;
    }

}

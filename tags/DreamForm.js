
class DreamForm extends Module {
    template = `
    <div for:each={iterableFields} for:item={item}>
<mod 
name={item.name} 
control={item.control} 
value={item.value} 
onchange={handleChange} 
/>
    </div>
    `;

    #data = {};
    controls = [];
    commands = ["command-save", "command-cancel"];
    actions = {};

    set data(data) {
        this.#data = JSON.parse(JSON.stringify(data));
    }

    get data() {
        return this.#data;
    }

    handleChange(event) {
        var component = event.detail;
        var control = component.control;
        if (control.action) {
            if (this.actions[control.action]) {
                this.actions[control.action]();
            }
            return;
        }
        if (control.filter && filtersList[control.filter]) {
            filtersList[control.filter].update(control, this, component);
        }
    }

    get iterableFields() {
        var fields = this.controls.map((control, index) => {
            if (typeof (control) === "string") {
                control = store.controls.openByName(control);
            }
            var value = "";
            if (control.filter && filtersList[control.filter]) {
                value = filtersList[control.filter].create(control, this);
            }
            var name = "dream-form-" + control.type;
            return {
                name: name,
                control: control,
                value: value
            };
        });

        if (this.commands.length > 0) {
            fields.push({
                name: "dream-form-command-group",
                value: "",
                control: { children: this.commands }
            });
        }

        return fields;
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

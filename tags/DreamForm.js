
class DreamForm extends Module {
    template = `
    <div for:each={iterableFields} for:item={item}>
<mod name={item.name} control={item.control} onchange={handleChange} />
    </div>
    `;

    renderedCallback() {
    }
    handleChange(event) {

    }

    get iterableFields() {
        return [
            {
                name: "dream-form-input",
                control: {
                    label: "Nome",
                    target: "name"
                }
            },
            {
                name: "dream-form-input",
                control: {
                    label: "Cidade",
                    target: "city"
                }
            },
            {
                name: "dream-form-button",
                control: {
                    action: "submit",
                    label: "Enviar"
                }
            }
        ];
    }

}


class DreamFormCommandGroup extends Module {
    template = `
    <div for:each={iterableFields} for:item={item}>
<button data-action={item.action}  onclick={handleClick} >
<text value={item.label} />
</button>
    </div>
    `;

    control = {};

    onchange = (event) => { };

    handleClick(event) {
        event.stopPropagation();
        this.onchange({
            detail: {
                control: {
                    action: event.currentTarget.dataset.action
                }
            }
        });
    }

    get iterableFields() {
        return this.control.children.map(control => {
            if (typeof (control) === "string") {
                control = store.controls.openByName(control);
            }
            return {
                action: control.action || "",
                label: control.label || ""
            };
        });
    }
}


class FilterCategory extends Filter {

    static generateControl(control) {
        control.children = [];
        var teams = store.domainContent.query({ where: { type: "category" } });
        teams.forEach(data => {
            control.children.push({
                value: data.name,
                label: data.title
            });
        });

        return control;
    }

    static create(control, formulary) {
        var target = control.target;
        var value = formulary.getField(target);
        if (typeof (value) === "string") {
            return value;
        } else if (control.children && control.children.length > 0) {
            return control.children[0].value;
        } else {
            return "";
        }
    }

    static update(control, formulary, component) {
        var target = control.target;
        var updated = component.value;
        formulary.setField(target, updated);
        component.value = updated;
        component.refresh();
    }

    static isValid(control, data) {
        return true;
    }

}

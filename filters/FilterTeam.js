
class FilterTeam extends Filter {

static generateControl(control) {
control.children = [];
var teams = store.domainContent.query({where: {type: "team"}});
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
        } else {
            return "";
        }
    }

    static update(control, formulary, component) {
        var target = control.target;
        var updated = this.filterName(component.value);
        formulary.setField(target, updated);
        component.value = updated;
        component.refresh();
    }

    static isValid(control, data) {
        return true;
    }

    static filterName(fromString) {
        var buffer = "";
        var char;
        for (let i = 0; i < fromString.length; i++) {
            char = fromString.substring(i, i + 1);
            if (buffer.length === 0 && /[a-z0-9]/.test(char)) {
                buffer += char;
            } else if (buffer.length > 0 && /[a-z0-9_-]/.test(char)) {
                buffer += char;
            }
        }
        return buffer;
    }

}

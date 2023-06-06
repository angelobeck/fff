
class FilterLanguages extends Filter {

    static create(control, formulary) {
        var target = control.target;
        var value = formulary.getField(target);
        if (typeof (value) === "string") {
            return page.unescapeString(value);
        } else if (value === undefined) {
            return "";
        }
        if (value[page.lang]) {
            return page.unescapeString(value[page.lang]);
        }
        return "";
    }

    static update(control, formulary, component) {
        var target = control.target;
        var updated = page.escapeString(component.value);
        var field = formulary.getField(target);
        if (field === undefined || typeof (field) === "string") {
            field = {};
            field[page.lang] = updated;
        } else {
            field[page.lang] = updated;
        }
        formulary.setField(target, field);
    }

    static isValid(control, data) {
        return true;
    }

}

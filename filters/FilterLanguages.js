
class FilterLanguages extends Filter {

    static create(control, formulary) {
        var target = control.target;
        var value = formulary.getField(target);
        if (typeof (value) === "string") {
            return page.unescapeString(value);
        }else if(value === undefined) {
            return "";
        }
        if (value[page.lang]) {
            return page.unescapeString(value[page.lang]);
        }
        return "";
    }

    static update(control, formulary) {
        var target = control.target;
        var updated = page.escapeString(control.value);
        var value = formulary.getField(target);
        if (value === undefined || typeof (value) === "string") {
            value = {};
            value[page.lang] = updated;
        } else {
            value[page.lang] = updated;
        }
        formulary.setField(target, value);
    }

    static isValid(control, data) {
        return true;
    }

}

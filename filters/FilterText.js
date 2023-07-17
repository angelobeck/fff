
class FilterText extends Filter {

    static create(control, formulary) {
        var target = control.target;
        var value = formulary.getField(target);
        if (typeof (value) === "string") {
            return page.unescapeString(value);
        } else {
            return "";
        }
    }

    static update(control, formulary, component) {
        var target = control.target;
        var value = page.escapeString(component.value);
        formulary.setField(target, value);
    }

    static isValid(control, data) {
        return true;
    }

}

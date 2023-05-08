
class FilterLanguages extends Filter {

    static create(control, formulary) {
        var target = control.target;
        var value = formulary.getField(target);
        if (typeof (value) === "string") {
            return value;
        }else if(value === undefined) {
            return "";
        }
        if (value[page.lang]) {
            return value[page.lang];
        }
        return "";
    }

    static update(control, formulary) {
        var target = control.target;
        var value = formulary.getField(target);
        if (value === undefined || typeof (value) === "string") {
            value = {};
            value[page.lang] = control.value;
        } else {
            value[page.lang] = control.value;
        }
        formulary.setField(target, value);
    }

    static isValid(control, data) {
        return true;
    }

}

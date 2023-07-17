
class FilterInteger extends Filter {

    static create(control, formulary) {
        var target = control.target;
        var value = formulary.getField(target);
        if (typeof (value) === "number") {
            return value.toString();
        } else if (control.defaultValue) {
            return control.defaultValue.toString();
        } else {
            return "";
        }
    }

    static update(control, formulary, component) {
        var target = control.target;
        var updated = this.filterNumber(component.value);
        formulary.setField(target, updated);
        component.value = updated.toString();
        component.refresh();
    }

    static isValid(control, data) {
        return true;
    }

    static filterNumber(fromString) {
        var buffer = "";
        var char;
        for (let i = 0; i < fromString.length; i++) {
            char = fromString.substring(i, i + 1);
            if (/[0-9]/.test(char)) {
                buffer += char;
            }
        }
        if (buffer === "") {
            return 0;
        } else {
            return parseInt(buffer, 10);
        }
    }

}

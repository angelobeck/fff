
class ApplicationHelper {
    static name = "";
    static map = [];

    static isChild(parent, name) {
        return name === this.name;
    }
    static childrenNames(parent) {
        return [this.name];
    }
    static constructorHelper(me) {

    }
    static dispatch(page) {

    }
}

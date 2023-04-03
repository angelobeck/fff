
class App_section extends ApplicationHelper {
    static map = [App_section];

    static isChild(parent, name) {
        var data = store.domainContent.openByName(name);
        if (parent.name === "-root" && data.parentName === "") {
            return true;
        } else if (parent.name === data.parentName) {
            return true;
        } else {
            return false;
        }
    }

    static childrenNames(parent) {
        if (parent.name === "-root") {
            return store.domainContent.childrenNames("");
        } else {
            return store.domainContent.childrenNames(parent.name);
        }
    }

    static constructorHelper(me) {
        me.data = store.domainContent.openByName(me.name);
    }

}

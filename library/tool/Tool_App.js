
class Tool_App extends ApplicationHelper {
    static name = "-tools";
    static map = ["toolConfig", "toolExport"];

    static childrenNames(me) {
        return [];
    }

    static constructorHelper(me) {
        me.data = store.controls.openByName("tools");
    }

}

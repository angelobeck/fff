
class ToolExport_App extends ApplicationHelper {
    static name = "export";

    static constructorHelper(me) {
        me.data = store.controls.openByName("tool-export");
    }

}

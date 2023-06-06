
class ToolConfig_App extends ApplicationHelper {
    static name = "config";

    static constructorHelper(me) {
        me.data = store.controls.openByName("tool-config");
    }

}

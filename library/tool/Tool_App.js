
class Tool_App extends ApplicationHelper {
    static name = "-tools";
    static map = [ToolConfig_App, ToolExport_App];

    static childrenNames(me)  {
        return [];
    }

    static constructorHelper(me) {
        me.data = store.controls.openByName("tools");
    }

}

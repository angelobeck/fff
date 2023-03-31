
class App_default extends ApplicationHelper {
    static name = "-default";
    static constructorHelper(me) {
        me.data = store.controls.openByName("-default");
    }
}

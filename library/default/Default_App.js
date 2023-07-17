
class Default_App extends ApplicationHelper {
    static name = "-default";
    static constructorHelper(me) {
        me.data = store.controls.openByName("-default");
    }
}

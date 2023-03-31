
class App_index extends ApplicationHelper {
    static name = "-index";
    static constructorHelper(me) {
        me.data = store.controls.openByName("-index");
    }
}

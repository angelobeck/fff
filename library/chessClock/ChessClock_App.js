
class ChessClock_App extends ApplicationHelper {
    static name = "-chess-clock";
    static constructorHelper(me) {
        me.data = store.controls.openByName("-chess-clock");
    }
    static dispatch() {
        page.modules.content = new ChessClock_ModuleContent();
    }
}

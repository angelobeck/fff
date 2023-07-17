
class SectionTreeNavigator_App extends ApplicationHelper {

    static constructorHelper(me) {
        me.map = ["sectionTreeNavigator_Post", "sectionTreeNavigator_PostNew"];
    }

    static dispatch() {
        page.modules.layout = new SectionTreeNavigator_ModuleLayout();
    }

    static editControls = [
        "edit-content",

    ];

}

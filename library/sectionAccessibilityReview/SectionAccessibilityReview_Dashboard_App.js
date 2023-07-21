
class SectionAccessibilityReview_Dashboard_App extends ApplicationHelper {
    static name = "-dashboard";

    static constructorHelper(me) {
        me.data = {
            title: { en: "Dashboard" }
        };
    }

    static dispatch() {
        page.modules.list = new sectionAccessibilityReview_Dashboard_ModuleList();
    }

}

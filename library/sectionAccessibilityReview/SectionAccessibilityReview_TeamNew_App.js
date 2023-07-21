
class SectionAccessibilityReview_TeamNew_App extends ApplicationHelper {
    static name = "-new-team";

    static constructorHelper(me) {
        me.data = {
            title: { pt: "Nova equipe", en: "New team" }
        };
    }

    static dispatch() {

        var form = new DreamForm();
        form.actions.save = () => {
            var data = form.data;
            data.parentName = application.parent.parent.name;
            data.type = "team";
            store.domainContent.insert(data);
            application.parent.refresh();
            page.navigateTo(application.parent.path);
        };
        form.actions.cancel = () => {
            page.navigateTo(application.parent.path);
        };
        form.controls = SectionAccessibilityReview_Team_App.editControls;

        page.modules.formulary = form;
    }

}

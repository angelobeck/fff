
class SectionAccessibilityReview_CategoryNew_App extends ApplicationHelper {
    static name = "-new-category";

    static constructorHelper(me) {
        me.data = {
            title: { pt: "Nova categoria", en: "New category" }
        };
    }

    static dispatch() {

        var form = new DreamForm();
        form.actions.save = () => {
            var data = form.data;
            data.parentName = application.parent.parent.name;
            data.type = "category";
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

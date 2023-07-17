
class SectionTreeNavigator_PostNew_App extends ApplicationHelper {
    static name = "-new-post";

    static constructorHelper(me) {
        me.data = {
            title: { pt: "Novo post", en: "New post" }
        };
    }

    static dispatch() {

        var form = new DreamForm();
        form.actions.save = () => {
            var data = form.data;
            data.parentName = application.parent.name;
            store.domainContent.insert(data);
            application.parent.refresh();
            page.navigateTo([...application.parent.path, data.name]);
        };
        form.actions.cancel = () => {
            page.navigateTo(application.parent.path);
        };
        form.controls = SectionTreeNavigator_Post_App.editControls;

        page.modules.main.namesList = ["formulary"];
        page.modules.formulary = form;
    }

}

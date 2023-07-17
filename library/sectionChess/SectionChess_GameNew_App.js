
class SectionChess_GameNew_App extends ApplicationHelper {
    static name = "-new-game";

    static constructorHelper(me) {
        me.data = {
            title: { pt: "Novo jogo", en: "New game" }
        };
    }

    static dispatch() {

        var form = new DreamForm();
        form.actions.save = () => {
            var data = form.data;
            data.parentName = application.parent.name;
            store.domainContent.insert(data);
            application.parent.refresh();
            page.navigateTo([...application.parent.path, data.name], true, "_setup");
        };
        form.actions.cancel = () => {
            page.navigateTo(application.parent.path);
        };
        form.controls = store.controls.openByName("section-create").children;

        page.modules.main.namesList = ["formulary"];
        page.modules.formulary = form;
    }

}

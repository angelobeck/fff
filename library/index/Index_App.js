
class Index_App extends ApplicationHelper {
    static name = "-index";
    static constructorHelper(me) {
        me.data = store.domainContent.openByName("-index");
        if (!me.data || !me.data.title) {
            me.data = store.controls.openByName("-index");
        }
        me.path = [];
    }

    static dispatch() {

        page.modules.context.children.push({
            label: { pt: "editar a página inicial", en: "Edit the home page" },
            url: page.url(true, true, "_edit"),
            current: !!page.actions.edit
        });

        page.modules.context.children.push({
            label: { pt: "Nova seção principal", en: "New main section" },
            url: page.url([...application.path, "-section-create"])
        });

        if (page.actions.edit) {
            var form = new DreamForm();
            form.data = application.data;
            form.actions.save = () => {
                var data = form.data;
                if (store.domainContent.openByName("-index").name) {
                    store.domainContent.update(data);
                } else {
                    data.name = "-index";
                    store.domainContent.insert(data);
                }
                application.parent.refresh();
                page.navigateTo();
            };
            form.actions.cancel = () => {
                page.navigateTo();
            };
            form.controls = [
                "edit-title",
                "edit-description",
                "edit-content"
            ];
            page.modules.main.namesList = ["formulary"];
            page.modules.formulary = form;
        }
    }

}

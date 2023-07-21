
class SectionAccessibilityReview_Category_App extends ApplicationHelper {

    static isChild(parent, name) {
        var data = store.domainContent.openByName(name);
        if (data.parentName === parent.parent.name && data.type === "category") {
            return true;
        } else {
            return false;
        }
    }

    static childrenNames(parent) {
return store.domainContent.childrenNames(parent.parent.name, "category");
    }

    static constructorHelper(me) {
        me.data = store.domainContent.openByName(me.name);
    }

    static dispatch() {

        page.modules.context.children.push({
            label: { pt: "Remover equipe", en: "Remove team" },
            url: page.url(true, true, "_remove-team"),
        });

if(page.actions.remove) {
store.domainContent.removeByName(application.name);
application.parent.refresh();
page.navigateTo(application.parent.path);
return;
}

            var form = new DreamForm();
            form.data = application.data;
            form.actions.save = () => {
                application.data = form.data;
                store.domainContent.update(form.data);
            application.parent.refresh();
                page.navigateTo(application.parent.path);
            };
            form.actions.cancel = () => {
                page.navigateTo(application.parent.path);
            };
            form.controls = this.editControls;
            page.modules.formulary = form;
    }

    static editControls = [
        "edit-title",
        "edit-name",
        "edit-content"
    ];

}

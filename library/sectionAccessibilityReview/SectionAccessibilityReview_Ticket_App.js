
class SectionAccessibilityReview_Ticket_App extends ApplicationHelper {

    static isChild(parent, name) {
        var data = store.domainContent.openByName(name);
        if (data.type === "accessibilityReview") {
            return true;
        } else {
            return false;
        }
    }

    static childrenNames(parent) {
        return [];
        //         return store.domainContent.childrenNames(parent.name, "accessibilityReview");
    }

    static constructorHelper(me) {
        me.data = {
            title: {pt: "ocorrência", en:"ticket"}
        };
    }

    static dispatch() {

        page.modules.context.children.push({
            label: { pt: "Remover ocorrência", en: "Remove ticket" },
            url: page.url(true, true, "_remove-ticket"),
        });

        if (page.actions.remove) {
            store.domainContent.removeByName(application.name);
            application.parent.refresh();
            page.navigateTo(application.parent.path);
            return;
        }

        var form = new DreamForm();
        form.data = store.domainContent.openByName(application.name);
        form.actions.save = () => {
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
        "edit-category",
        {
            name: "gravity",
            type: "select",
            filter: "text",
            target: "gravity",
            label: { pt: "Gravidade", en: "Gravity" },
            children: [
                { value: "low", label: { pt: "baixa", en: "low" } },
                { value: "medium", label: { pt: "média", en: "medium" } },
                { value: "hi", label: { pt: "alta", en: "hi" } }
            ]
        },
        "edit-description",
        "edit-content"
    ];

}

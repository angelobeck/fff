
class SectionAccessibilityReview_Ticket_App extends ApplicationHelper {

    static isChild(parent, name) {
        var data = store.domainContent.openByName(name);
        if (data.parentName === parent.name && data.type === "accessibilityReview") {
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
        me.data = store.domainContent.openByName(me.name);
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

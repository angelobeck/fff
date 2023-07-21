
class SectionAccessibilityReview_Post_App extends ApplicationHelper {

    static map = ["sectionAccessibilityReview_post", "sectionAccessibilityReview_postNew", "sectionAccessibilityReview_ticket", "sectionAccessibilityReview_ticketNew"];

    static isChild(parent, name) {
        var data = store.domainContent.openByName(name);
        if (data.parentName === parent.name && data.type === "post") {
            return true;
        } else {
            return false;
        }
    }

    static childrenNames(parent) {
        return store.domainContent.childrenNames(parent.name, "post");
    }

    static constructorHelper(me) {
        me.data = store.domainContent.openByName(me.name);
    }

    static dispatch() {

        page.modules.context.children.push({
            label: { pt: "Editar post", en: "Edit post" },
            url: page.url(true, true, "_edit"),
            current: page.actions.edit ? "page" : "false"
        });

        page.modules.context.children.push({
            label: { pt: "Remover item", en: "Remove item" },
            url: page.url(true, true, "_remove-item"),
        });

        if (page.actions.remove) {
            store.domainContent.removeByName(application.name);
            application.parent.refresh();
            page.navigateTo(application.parent.path);
            return;
        }

        if (page.actions.edit) {
            var form = new DreamForm();
            form.data = application.data;
            form.actions.save = () => {
                application.data = form.data;
                store.domainContent.update(form.data);
                page.navigateTo();
            };
            form.actions.cancel = () => {
                page.navigateTo();
            };
            form.controls = this.editControls;
            page.modules.main.namesList = ["formulary"];
            page.modules.formulary = form;
        } else {

            page.modules.linked = new SectionAccessibilityReview_Post_ModuleList();

        }
    }

    static editControls = [
        "edit-title",
        "edit-name",
{
name: "resource",
type: "input",
filter: "text",
label: {pt: "URL", en: "URL"},
target: "resource"
},
"edit-team",
        "edit-content"
    ];
}

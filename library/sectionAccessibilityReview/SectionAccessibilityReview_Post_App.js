
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

            if (!application.data.reviewStatus) {
                var form = new DreamForm();

                form.actions.save = () => {
                    this.generateReviewRegisters(form.data);
                    application.data.reviewStatus = "done";
                    store.domainContent.update(application.data);
                    application.refresh();
                    page.navigateTo();
                };
                form.actions.cancel = () => {
                    application.data.reviewStatus = "done";
                    store.domainContent.update(application.data);
                    page.navigateTo();
                };
                form.controls = [...this.reviewControls, "edit-save"];
                page.modules.formulary = form;
            }
        }
    }

    static generateReviewRegisters(formData) {
        for (let i = 0; i < this.reviewControls.length; i++) {
            const control = this.reviewControls[i];
            if (formData[control.target]) {
                let data = {
                    name: application.name + "_-_" + control.name,
                    parentName: application.name,
                    title: control.label,
                    content: { pt: formData[control.target] },
                    type: "accessibilityReview",
                    gravity: control.gravity,
                    created: page.currentDate(),
                    updated: page.currentDate()
                };
                store.domainContent.insert(data);
            }
        }
    }

    static editControls = [
        "edit-title",
        "edit-name",
        "edit-content"
    ];

    static reviewControls = [
        {
            name: "window_title",
            type: "input",
            filter: "text",
            label: { pt: "Título da janela", en: "Window title" },
            target: "window_title",
            gravity: "medium"
        },
        {
            name: "page_title",
            type: "input",
            filter: "text",
            label: { pt: "Cabeçalho principal", en: "Main header" },
            target: "page_title",
            gravity: "medium"
        },
        {
            name: "content_errors",
            type: "textarea",
            filter: "text",
            label: { pt: "Erros no conteúdo", en: "Content errors" },
            target: "content_errors",
            gravity: "low"
        },
    ];

}

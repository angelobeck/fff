
class Section_App extends ApplicationHelper {
    static map = ["section", "sectionCreate"];

    static isChild(parent, name) {
        var data = store.domainContent.openByName(name);
        if (parent.name === "-root" && data.parentName === "") {
            return true;
        } else if (parent.name === data.parentName) {
            return true;
        } else {
            return false;
        }
    }

    static childrenNames(parent) {
        if (parent.name === "-root") {
            return store.domainContent.childrenNames("");
        } else {
            return store.domainContent.childrenNames(parent.name);
        }
    }

    static constructorHelper(me) {
        me.data = store.domainContent.openByName(me.name);
        if (me.data.sectionType && sectionHelpersList[me.data.sectionType]) {
            me.sectionHelper = sectionHelpersList[me.data.sectionType];
        } else {
            me.sectionHelper = SectionFolder_App;
        }
        me.sectionHelper.constructorHelper(me);

    }

    static dispatch() {

        page.modules.context.children.push({
            label: { pt: "editar", en: "Edit" },
            url: page.url(true, true, "_edit"),
            current: !!page.actions.edit
        });

        page.modules.context.children.push({
            label: { pt: "Nova subseção", en: "New subsection" },
            url: page.url([...application.path, "-section-create"])
        });

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

            form.controls = store.controls.openByName("section-edit").children;
            if (application.sectionHelper.editControls) {
                form.controls = [...form.controls, ...application.sectionHelper.editControls];
            }
            page.modules.main.namesList = ["formulary"];
            page.modules.formulary = form;
        }

        else {
            if (application.sectionHelper) {
                application.sectionHelper.dispatch();
            }
        }

    }

}

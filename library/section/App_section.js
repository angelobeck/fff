
class App_section extends ApplicationHelper {
    static map = [App_section, App_sectionCreate];

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
            label: { pt: "Exportar", en: "Export" },
            url: page.url(true, true, "_export"),
            current: !!page.actions.export
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

        else if (page.actions.export) {
            var form = new DreamForm();
            form.actions.exportData = () => {
                const value = "var data = data || {}\r\ndata.domainContent = " + page.serializeJS(data.domainContent) + ";\r\n";
                let blob = new Blob([value], { type: 'text/javascript;charset=utf-8;' });
                const link = window.document.createElement('A');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'domainContent.js';
                link.click();
                window.URL.revokeObjectURL(link.href);
                page.navigateTo();
            };

            form.actions.exportDocument = () => {
                page.navigateTo();
                setTimeout(() => {
                    const value = "<html><body>" + document.body.innerHTML + "</body></html>";
                    let blob = new Blob([value], { type: 'text/javascript;charset=utf-8;' });
                    const link = window.document.createElement('A');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = 'fff.html';
                    link.click();
                    window.URL.revokeObjectURL(link.href);
                }, 400);
            };

            form.actions.cancel = () => {
                page.navigateTo();
            };
            form.controls = store.controls.openByName("section-export").children;
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

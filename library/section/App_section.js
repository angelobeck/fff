
class App_section extends ApplicationHelper {
    static map = [App_section];

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

        if (page.actions.edit) {
            var form = new DreamForm();
            form.data = application.data;
            form.actions.save = () => {
                application.data = form.data;
                page.navigateTo();
            };
            form.actions.cancel = () => {
                page.navigateTo();
            };
            form.controls = store.controls.openByName("section-edit").children;
            page.modules.main.namesList = ["formulary"];
            page.modules.formulary = form;
        }

        if (page.actions.export) {
            var form = new DreamForm();
            form.actions.save = () => {
                const value = JSON.stringify(data.domainContent);
                let blob = new Blob([value], { type: 'text/json;charset=utf-8;' });
                const link = window.document.createElement('A');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'content.json';
                link.click();
                window.URL.revokeObjectURL(link.href);
                page.navigateTo();
            };
            form.actions.cancel = () => {
                page.navigateTo();
            };
            form.controls = store.controls.openByName("section-export").children;
            page.modules.main.namesList = ["formulary"];
            page.modules.formulary = form;
        }

    }

}

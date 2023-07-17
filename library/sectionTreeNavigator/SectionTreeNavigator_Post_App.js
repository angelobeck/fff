
class SectionTreeNavigator_Post_App extends ApplicationHelper {

    static isChild(parent, name) {
        var data = store.domainContent.openByName(name);
        if (parent.name === data.parentName) {
            return true;
        } else {
            return false;
        }
    }

    static childrenNames(parent) {
        return store.domainContent.childrenNames(parent.name);
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
            page.modules.layout = new SectionSongbook_ModuleLayout();
        }
    }

    static editControls = [
        "edit-title",
        "edit-name",
        "edit-content",
        {
            type: "input",
            filter: "text",
            label: { pt: "Cor", en: "Color" },
            target: "color"
        },
        {
            type: "input",
            filter: "text",
            label: { pt: "Imagem", en: "Image" },
            target: "image"
        },
        {
            type: "input",
            filter: "text",
            label: { pt: "Largura da imagem", en: "Image width" },
            target: "imageWidth"
        },
        {
            type: "input",
            filter: "text",
            label: { pt: "Alinhamento horizontal", en: "Horizontal alignment" },
            target: "imageHorizontalAlign"
        },
        {
            type: "input",
            filter: "text",
            label: { pt: "Alinhamento vertical", en: "Vertical alignment" },
            target: "imageVerticalAlign"
        }
    ];
}

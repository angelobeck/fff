
class Section_Create_App extends ApplicationHelper {
    static name = "-section-create";

    static childrenNames(me) {
        return [];
    }

    static constructorHelper(me) {
        me.data = store.controls.openByName("section-create");
    }

    static dispatch() {

        if (page.actions.create) {
            var sectionType;
            var sectionHelper;
            if (page.actions.create.length > 1 && sectionHelpersList[page.actions.create[1]]) {
                sectionType = page.actions.create[1];
                sectionHelper = sectionHelpersList[page.actions.create[1]];
            } else {
                sectionType = "folder";
                sectionHelper = SectionFolder_App;
            }
            var form = new DreamForm();
            form.actions.save = () => {
                var data = form.data;
                data.type = "section";
                data.sectionType = sectionType;
                if (application.parent.name === "-root") {
                    data.parentName = "";
                } else {
                    data.parentName = application.parent.name;
                }
                store.domainContent.insert(data);
                application.parent.refresh();
                page.navigateTo([...application.parent.path, data.name]);
            };
            form.actions.cancel = () => {
                page.navigateTo(application.parent.path);
            };
            form.controls = store.controls.openByName("section-create").children;
            if (sectionHelper.editControls) {
                form.controls = [...form.controls, ...sectionHelper.editControls];
            }

            page.modules.main.namesList = ["formulary"];
            page.modules.formulary = form;
        } else {
            page.modules.list = new SectionCreate_ModuleList();
        }
    }

}

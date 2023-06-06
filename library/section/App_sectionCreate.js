
class App_sectionCreate extends ApplicationHelper {
    static name = "-section-create";

    static childrenNames(me)  {
        return [];
    }

    static constructorHelper(me) {
        me.data = store.controls.openByName("section-create");
    }

    static dispatch() {

        if (page.actions.create) {
            var sectionType = "section";
            if(page.actions.create.length > 1 && sectionHelpersList[page.actions.create[1]]) {
                sectionType = page.actions.create[1];
            }
            var form = new DreamForm();
            form.actions.save = () => {
                var data = form.data;
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
            page.modules.main.namesList = ["formulary"];
            page.modules.formulary = form;
        } else {
            page.modules.list = new SectionCreate_ModuleList();
        }
    }

}

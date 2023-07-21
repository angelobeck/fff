
class SectionAccessibilityReview_ProductNew_App extends ApplicationHelper {
    static name = "-new-product";

    static constructorHelper(me) {
        me.data = {
            title: { pt: "Novo produto ", en: "New product" }
        };
    }

    static dispatch() {

        var form = new DreamForm();
        form.actions.save = () => {
            var data = form.data;
            data.parentName = application.parent.name;
            data.type = "product";
            store.domainContent.insert(data);
            application.parent.refresh();
            page.navigateTo([...application.parent.path, data.name]);
        };
        form.actions.cancel = () => {
            page.navigateTo(application.parent.path);
        };
        form.controls = SectionAccessibilityReview_Product_App.editControls;

        page.modules.formulary = form;
    }

}

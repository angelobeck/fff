
class SectionAccessibilityReview_TicketNew_App extends ApplicationHelper {
    static name = "-new-ticket";

    static constructorHelper(me) {
        me.data = {
            title: { pt: "Nova ocorrência" }
        };
    }

    static dispatch() {

        var form = new DreamForm();
        form.actions.save = () => {
            var data = form.data;
            data.parentName = application.parent.name;
            data.name = application.parent.name + "_-_" + data.name;
            data.type = "accessibilityReview";
            store.domainContent.insert(data);
            application.parent.refresh();
            page.navigateTo(application.parent.path);
        };
        form.actions.cancel = () => {
            page.navigateTo(application.parent.path);
        };
        form.controls = SectionAccessibilityReview_Ticket_App.editControls;

        page.modules.formulary = form;
    }

}


class ToolExport_App extends ApplicationHelper {
    static name = "export";

    static constructorHelper(me) {
        me.data = store.controls.openByName("tool-export");
    }

    static dispatch() {

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

}

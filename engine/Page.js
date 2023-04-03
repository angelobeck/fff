
class Page {
    application;
    layout;

    refresh() {
        this.modules = {
            content: TemplateContent,
            description: TemplateDescription,
            linked: TemplateLinked,
            list: TemplateList,
            menu: TemplateMenu,
            title: TemplateTitle
        };
    
        this.application.dispatch(this);

        if (!this.layout) {
            this.layout = new TemplateLayout(this);
            this.layout.render(document.getElementById("layout"));
        } else {
            this.layout.refresh();
        }
    }

    url(path) {
        return "#" + path.join("/");
    }

}

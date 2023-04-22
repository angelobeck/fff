
class Page {
    rootNode;

    refresh() {
        this.modules = {
            content: TemplateContent,
            description: TemplateDescription,
            layout: TemplateLayout,
            linked: TemplateLinked,
            list: TemplateList,
            menu: TemplateMenu,
            title: TemplateTitle
        };
    
        application.dispatch();

        if (!this.rootNode) {
            this.rootNode = new NodeModule(false, "mod");
            this.rootNode.staticAttributes.name = "layout";
            this.rootNode.create(document.getElementById("layout"));
        } else {
            this.rootNode.refresh();
        }
    }

    url(path) {
        return "#" + path.join("/");
    }

}

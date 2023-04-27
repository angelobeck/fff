
class Page {
    rootNode;

    refresh() {
        this.modules = {
            content: ModuleContent,
            description: ModuleDescription,
            layout: ModuleLayout,
            linked: ModuleLinked,
            list: ModuleList,
            menu: ModuleMenu,
            title: ModuleTitle
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

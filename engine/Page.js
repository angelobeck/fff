
class Page {
    rootNode;
    actions = {};

    refresh() {
        this.modules = {
            content: ModuleContent,
            context: new ModuleContext(),
            description: ModuleDescription,
            layout: ModuleLayout,
            linked: ModuleLinked,
            list: ModuleList,
            main: new ModuleMain(),
            menu: ModuleMenu,
            title: ModuleTitle
        };
    
        application.dispatch();

        this.modules.root = ModuleRoot;
        document.title = application.data.title || "fff";

        if (!this.rootNode) {
            this.rootNode = new NodeModule(false, "mod");
            this.rootNode.staticAttributes.name = "root";
            this.rootNode.create(document.getElementById("layout"));
        } else {
            this.rootNode.refresh();
        }
    }

    url(path=true, lang=true, action=false) {
        var parts = [];
        if(Array.isArray(path)) {
            parts = [...path];
        }else{
            parts = [...application.path];
        }
        if(action) {
            parts.push(action);
        }
        return "#" + parts.join("/");
    }

}

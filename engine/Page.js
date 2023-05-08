
class Page {
    rootNode;
    actions = {};
    lang = "pt";

    refresh() {

        this.modules = {};
        for (let name in modulesList) {
            this.modules[name] = modulesList[name];
        }

        this.modules.context = new ModuleContext();
        this.modules.main = new ModuleMain();

        application.dispatch();

        this.modules.root = ModuleRoot;
        document.title = this.selectLanguage(application.data.title || "fff");

        if (!this.rootNode) {
            this.rootNode = new NodeModule(false, "mod");
            this.rootNode.staticAttributes.name = "root";
            this.rootNode.create(document.getElementById("layout"));
        } else {
            this.rootNode.refresh();
        }
    }

    url(path = true, lang = true, action = false) {
        var parts = [];
        if (Array.isArray(path)) {
            parts = [...path];
        } else {
            parts = [...application.path];
        }
        if (typeof (lang) === "string") {
            if (lang !== setup.defaultLang) {
                parts.push("-" + lang);
            }
        } else if (page.lang !== setup.defaultLang) {
            parts.push("-" + page.lang);
        }
        if (action) {
            parts.push(action);
        }
        return "#" + parts.join("/");
    }

    navigateTo(path, lang, actions) {
        var url = this.url(path, lang, actions);
        window.location.hash = url;
    }

    selectLanguage(value) {
        if (typeof (value) === "string") {
            return value;
        } else if (value[this.lang]) {
            return value[this.lang];
        }
        for (let lang in value) {
            return value[lang];
        }
        return "";
    }

}

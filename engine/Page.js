
class Page {
    rootNode;
    actions = {};
    lang = "pt";
    globals = {};

    refresh() {
        this.globals = {};
        this.modules = {};
        for (let name in modulesList) {
            this.modules[name] = modulesList[name];
        }

        this.modules.context = new ModuleContext();
        this.modules.main = new ModuleMain();

        application.dispatch();

        this.modules.root = ModuleRoot;
        document.title = this.unescapeString(this.selectLanguage(application.data.title || "fff"));

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

    escapeString(fromString) {
        return fromString.replace(/[#]/g, "#c")
            .replace(/[\\]/g, "#b")
            .replace(/\n/g, "#n")
            .replace(/["]/g, "#q");
    }

    unescapeString(fromString) {
        return fromString.replace(/[#]q/g, '"')
            .replace(/[#]n/g, "\n")
            .replace(/[#]b/g, "\\")
            .replace(/[#]c/g, "#");
    }

    serializeJS(fromAny) {
        if (fromAny === undefined) {
            return "undefined";
        } else if (fromAny === null) {
            return "null";
        } else if (fromAny === true) {
            return "true";
        } else if (fromAny === false) {
            return "false";
        } else if (Array.isArray(fromAny)) {
            return this.serializeArray(fromAny);
        } else if (typeof (fromAny) === "object") {
            return this.serializeObject(fromAny);
        } else if (typeof (fromAny) === "string") {
            return '"' + fromAny + '"';
        } else {
            return fromAny.toString();
        }
    }

    serializeArray(fromArray) {
        if (fromArray.length === 0) {
            return "[]";
        }
        var buffer = "[";
        for (let i = 0; i < fromArray.length; i++) {
            if (i > 0) {
                buffer += ",";
            }
            buffer += "\r\n" + this.serializeJS(fromArray[i]);
        }
        return buffer + "\r\n]";
    }

    serializeObject(fromObject) {
        var isFirstElement = true;
        var buffer = "{";
        for (var field in fromObject) {
            if (isFirstElement) {
                isFirstElement = false;
            } else {
                buffer += ",";
            }
            buffer += "\r\n";
            const value = fromObject[field];
            buffer += field + ": " + this.serializeJS(value);
        }
        if (!isFirstElement) {
            buffer += "\r\n";
        }
        return buffer + "}";
    }

}

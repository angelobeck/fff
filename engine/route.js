
function route() {
    var path = getCurrentPath();
    if (path.length > 0 && path[path.length - 1].startsWith("_")) {
        page.actions = parseActions(path.pop());
    } else {
        page.actions = {};
    }
    if (path.length > 0 && setup.validLanguages[path[path.length - 1]]) {
        page.lang = path.pop().substring(1);
    } else {
        page.lang = setup.defaultLang;
    }
    if (path.length === 0 || path[0] === "") {
        application = root.child("-index");
    } else {
        application = routeSublevel(path, root);
        if (!application) {
            application = root.child("-default");
        }
    }
    page.refresh();
}

function getCurrentPath() {
    var hash = location.hash;
    if (typeof (hash) !== "string" || hash.length <= 1) {
        return [];
    }
    return hash.substring(1).split("/");
}

function routeSublevel(path, parent) {
    var name = path.shift();
    application = parent.child(name);
    if (!application || path.length === 0) {
        return application;
    }
    return routeSublevel(path, application);
}

function parseActions(fromString) {
    var actions = [];
    const parts = fromString.split("_");
    for (let i = 0; i < parts.length; i++) {
        const actionGroup = parts[i].split("-");
        if (actionGroup.length === 0) {
            continue;
        }
        const name = actionGroup[0];
        actions[name] = actionGroup;
    }
    return actions;
}

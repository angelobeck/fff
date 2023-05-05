
function route() {
    var path = getCurrentPath();
    if (path.length > 0 && path[path.length - 1].startsWith("_")) {
        page.actions = parseActions(path.pop());
    } else {
        page.actions = {};
    }
    application = routeSublevel(path, root);
    if (!application) {
        application = root.child("-default");
    }
    page.refresh();
}

function getCurrentPath() {
    var path = location.hash.substring(1).split("/");
    if (path.length === 0 || path[0] === "") {
        path = ["-index"];
    }
    return path;
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

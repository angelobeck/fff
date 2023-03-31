
function route() {
    var path = getCurrentPath();
    var application = routeSublevel(path, root);
    if (!application) {
        application = root.child("-default");
    }
    page.application = application;
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

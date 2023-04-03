
var root;
var page;
var store = {};

function startup() {
    root = new Application(false, "-root", App_root);
    page = new Page();
    store.controls = new Store(data.controls);
    store.domainContent = new Store(data.domainContent);
    window.addEventListener("hashchange", route);
    route();
}

var loaderIndex = 0;

function loader() {
    var name = importsList[loaderIndex];
    var element = document.createElement("SCRIPT");
    loaderIndex++;
    if (loaderIndex < importsList.length) {
        element.addEventListener("load", loader);
    } else {
        element.addEventListener("load", startup);
    }
    element.src = name;
    document.body.appendChild(element);
}

window.addEventListener("load", loader);

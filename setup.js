
var root;
var page;
var application;
var store = {};

function startup() {
    root = new Application(false, "-root", Root_App);
    page = new Page();
    store.controls = new Store(data.controls);
    store.domainContent = new Store(data.domainContent);
    window.addEventListener("hashchange", route);
    route();
}

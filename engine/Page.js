
class Page {
    application;
    modules = {
        title: TemplateLayout
    }
    refresh() {
        this.application.dispatch(this);
        document.getElementById("layout").innerHTML = this.application.data.title;
        var template = new TemplateMenu(this);
        template.render(document.getElementById("layout"));
    }

}

class TemplateTitle extends Template {
    template = `<h1>{title}</h1>`;

    get title(){
        return this.page.application.data.title;
    }

}

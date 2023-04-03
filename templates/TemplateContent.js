
class TemplateContent extends Template {
    template = ``;

    get content(){
        return this.page.application.data.content;
    }

}

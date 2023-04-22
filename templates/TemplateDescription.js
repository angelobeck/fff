
class TemplateDescription extends Template {
    template = `<div><p if:true={description}>{description}</p></div>`;

    get description(){
        return application.data.description || false;
    }

}

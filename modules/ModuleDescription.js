
class ModuleDescription extends Module {
    template = `<div><p if:true={description}>{description}</p></div>`;

    get description(){
        return application.data.description || false;
    }

}

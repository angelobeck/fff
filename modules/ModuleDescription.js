
class ModuleDescription extends Module {
    template = `<div><p if:true={description}><text value={description} /></p></div>`;

    get description(){
        return application.data.description || false;
    }

}

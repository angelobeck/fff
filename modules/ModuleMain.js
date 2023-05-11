
class ModuleMain extends Module {
    template = `
    <template for:each={iterableNames} for:item={item}>
        <mod name={item.name} />
    </template>
    `;

    namesList = ["description", "content", "list", "linked"];
    
    get iterableNames() {
        return this.namesList.map(item => {
            return {
                name: item
            }
        })
    }
}

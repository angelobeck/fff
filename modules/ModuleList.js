
class ModuleList extends Module {
    template = `<div>
    <div if:true={iterableList}>
        <ul for:each={iterableList} for:item={item}>
    <li>
    <a href={item.url}><text value={item.title} /></a>
    <p if:true={item.description}><text value={item.description} /></p>
    </li>
    </ul>
    </div>
    </div>`;

    get iterableList(){
        var children = application.children;
        if(children.length === 0) {
            return [];
        }
        return children.map((child) => {
            return {
                url: page.url(child.path),
                title: child.data.title,
                description: child.data.description
            };
        });
    }

}

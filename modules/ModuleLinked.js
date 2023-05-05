
class ModuleLinked extends Module {
    template = `
    <div for:each={iterableList} for:item={item}>
    <h2>{item.label}</h2>
    <ul for:each={item.children} for:item={child}>
    <li>
    <a href={child.url}>{child.label}</a>
    <p if:true={child.description}>{child.description}</p>
    </li>
    </ul>
    </div>`;

    get iterableList() {
        var groups = {};
        if (!application.data.name) {
            return [];
        }

        var linked = store.domainContent.query({ where: { linked: application.data.name } });
        if (application.data.linked && application.data.linked !== "") {
            const names = application.data.linked.split(" ");
            for (let i = 0; i < names.length; i++) {
                const name = names[i];
                const register = store.domainContent.openByName(name);
                if (register) {
                    linked.push(register);
                }
            }
        }
        for (let i = 0; i < linked.length; i++) {
            const name = linked[i].name;
            const path = store.domainContent.getPath(name);
            const child = root.findChild(path);
            if (child && child.parent && child.parent.name !== "") {
                const parentName = child.parent.name;
                if (!groups[parentName]) {
                    groups[parentName] = {
                        label: child.parent.data.title,
                        children: []
                    };
                }
                groups[parentName].children.push({
                    label: child.data.title,
                    description: child.data.description,
                    url: page.url(child.path)
                });
            }
        }

        var result = [];
        for (let name in groups) {
            result.push({
                label: groups[name].label,
                children: groups[name].children
            });
        }
        return result;
    }

}

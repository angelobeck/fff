
class ModulePaginator extends Module {
    template = `<div>
"Ir para:"
        <span for:each={iterableList} for:item={item} style="display:inline-block; padding-left:1em;">
    <a href={item.url}><text value={item.title} /></a>
    </span>
</div>`;

    get iterableList() {
        var items = [];

        items.push({
            title: application.parent.data.title,
            url: page.url(application.parent.path)
        });

        var children = application.parent.children;
        if (children.length < 2) {
            return items;
        }
        var index = this.findIndex(children, application);

        if (index > 0) {
            let child = children[index - 1];
            items.push({
                title: { pt: "Anterior", en: "Previous" },
                url: page.url(child.path)
            });
        }

        if (index + 1 < children.length) {
            let child = children[index + 1];
            items.push({
                title: { pt: "Próxima", en: "Next" },
                url: page.url(child.path)
            });
        }
        return items;
    }

    findIndex(children, application) {
        for (let i = 0; i < children.length; i++) {
            if (children[i].name === application.name) {
                return i;
            }
        }
        return -1;
    }

}


class TemplateMenu extends Template {
    template = `<div for:each={iterableMenu} for:item={item}>
<a href={item.url} aria-current={item.current}>{item.label}</a>
</div>`;

    get iterableMenu() {
        var result = [];
        var children = root.children;
        for (let i = 0; i < children.length; i++) {
            let currentApplication = children[i];
            if(currentApplication.data.menu_hidden) {
                continue;
            }
            result.push({
                current: currentApplication.path == application.path ? "page" : "false",
                label: currentApplication.data.title,
                url: page.url(currentApplication.path)
            });
        }
        return result;
    }

}

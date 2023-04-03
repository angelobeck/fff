
class TemplateMenu extends Template {
    template = `<div for:each={iterableMenu} for:item={item}>
<a href={item.url} aria-current={item.current}>{item.label}</a>
</div>`;

    get iterableMenu() {
        var result = [];
        var children = root.children;
        for (let i = 0; i < children.length; i++) {
            let application = children[i];
            if(application.data.menu_hidden) {
                continue;
            }
            result.push({
                current: this.page.application.path == application.path ? "page" : "false",
                label: application.data.title,
                url: this.page.url(application.path)
            });
        }
        return result;
    }

}

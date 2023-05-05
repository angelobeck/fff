
class ModuleContext extends Module {
    template = `<div for:each={iterableMenu} for:item={item}>
<a href={item.url} aria-current={item.current}>{item.label}</a>
</div>`;

children = [];

get iterableMenu() {
        return this.children.map((item) => {
            return {
                label: item.label,
                url: item.url,
                current: item.current || false
            }
        });
    }

}

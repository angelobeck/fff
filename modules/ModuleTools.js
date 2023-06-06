
class ModuleTools extends Module {
    template = `<h2><text value={label} /></h2>
    <div for:each={iterableMenu} for:item={item}>
<a tabindex="0" data-url={item.url} onclick={handleClick} aria-current={item.current} style="display:block"><text value={item.label} /></a>
</div>`;

    label = { pt: "Ferramentas", en: "Tools" };

    onchange = () => { };

    get iterableMenu() {
        return root.child("-tools").children.map(child => {
            return {
                label: child.data.title,
                url: page.url(child.path),
                current: child.path == application.path ? "page" : "false"
            };
        });
    }

    handleClick(event) {
        var url = event.currentTarget.dataset.url;
        this.onchange();
        window.location.hash = url;
    }
}

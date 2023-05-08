
class ModuleContext extends Module {
    template = `<div for:each={iterableMenu} for:item={item}>
<a tabindex="0" data-url={item.url} onclick={handleClick} aria-current={item.current} style="display:block"><text value={item.label} /></a>
</div>`;

onchange = () => {};

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

    handleClick(event) {
        var url = event.currentTarget.dataset.url;
        this.onchange();
        window.location.hash = url;
    }
}

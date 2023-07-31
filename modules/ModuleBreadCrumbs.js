
class ModuleBreadCrumbs extends Module {
    template = `
    <div if:true={menuEnabled}>
    <text value={breadcrumbsLabel} />
    <template for:each={iterableMenu} for:item={item}>
<a href={item.url} aria-current={item.current}><text value={item.label} /></a>
</template>
</div>`;

    breadcrumbsLabel = { pt: "Você está em ", en: "You are in " };

    get menuEnabled() {
        return application.path.length > 0;
    }

    get iterableMenu() {
        var menu = [];
        var current = application;
        while (current.parent) {
            menu.push({
                label: current.data.title,
                url: page.url(current.path),
                current: current.path === application.path
            });
            current = current.parent;
        }

        // append the index page
        current = root.child("-index");
        menu.push({
            label: current.data.title,
            url: page.url([]),
            current: false
        });
        
        return menu.reverse();
    }

}

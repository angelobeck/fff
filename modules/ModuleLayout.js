
class ModuleLayout extends Module {
    template = `
    <layout-modals modals={modals}>
<mod name="menu" />
<mod name="breadcrumbs" />
<mod name="title" nofocus={menuExpanded} />
<mod name="main" />
<button onclick={openMenu}>Menu</button>
</layout-modals>
`;

    modals = [];

    openMenu() {
        this.modals.push({
            title: { pt: "Opções", en: "Options" },
            name: "humperstilshen"
        });
        this.refresh();
    }

}


class ModuleLayout extends Module {
    template = `
    <layout-modals>
<mod name="menu" />
<mod name="breadcrumbs" />
<mod name="title" nofocus={menuExpanded} />
<mod name="main" />
<button onclick={openMenu}>Menu</button>
</layout-modals>
`;

    openMenu() {
        Modals.push({
            title: { pt: "Opções", en: "Options" },
            name: "rumperstilshen"
        });
    }

}

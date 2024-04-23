
class ModuleLayout extends Module {
    template = `
    <layout-modals>
<mod name="menu" />
<mod name="breadcrumbs" />
<mod name="title" nofocus={menuExpanded} />
<mod name="main" />
<<<<<<< HEAD
<div>
<button onclick={menuSwitch} aria-expanded={menuExpanded}>menu</button>
</div>
</div>
<div if:true={menuExpanded}>
<div tabindex="0" onfocus={focusOnLastElement}></div>
<h2 tabindex="0" wire:element={menuTitleElement}><text value={menuLabel} /></h2>
<mod name="context" onchange={menuSwitch} />
<mod name="tools" onchange={menuSwitch} />
<hr />
<button wire:element={menuButtonElement} onclick={menuSwitch}><text value={closeLabel} /></button>
<div tabindex="0" onfocus={focusOnFirstElement}></div>
</div>
=======
<button onclick={openMenu}>Menu</button>
</layout-modals>
>>>>>>> c6b29a415d6d57773f51006edaa384bc839098e6
`;

    openMenu() {
        Modals.push({
            title: { pt: "Opções", en: "Options" },
            name: "rumperstilshen"
        });
    }

}

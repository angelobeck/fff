
class LayoutModals extends Module {
    template = `
<div wire:element={layoutElement}>
<slot />
<div>
<button onclick={menuSwitch} aria-expanded={menuExpanded}>"menu"</button>
</div>
</div>
<div if:true={menuExpanded}>
<div tabindex="0" onfocus={focusOnLastElement}></div>
<h2  tabindex="0" wire:element={menuTitleElement}><text value={menuLabel} /></h2>
<mod name="context" onchange={menuSwitch} />
<mod name="tools" onchange={menuSwitch} />
<hr />
<button wire:element={menuButtonElement} onclick={menuSwitch}><text value={closeLabel} /></button>
<div tabindex="0" onfocus={focusOnFirstElement}></div>
</div>
`;

    menuExpanded = false;
    menuTitleElement;
    menuButtonElement;
    layouteElement;
    menuLabel = { pt: "Opções", en: "Options" };
    closeLabel = { pt: "Fechar", en: "Close" };

    menuSwitch() {
        this.menuExpanded = !this.menuExpanded;
        if (!this.menuExpanded) {
            this.layoutElement.setAttribute("aria-hidden", false);
        }
    }

    renderedCallback() {
        if (this.menuExpanded) {
            this.menuTitleElement.focus();
            this.layoutElement.setAttribute("aria-hidden", true);
        }
    }

    focusOnFirstElement() {
        this.menuTitleElement.focus();
    }

    focusOnLastElement() {
        this.menuButtonElement.focus();
    }

}

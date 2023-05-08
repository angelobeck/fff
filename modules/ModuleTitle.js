
class ModuleTitle extends Module {
    template = `<h1 tabindex="0" wire:element={header} onblur={handleBlur}>
    <text value={title} />
    </h1>`;

    header;
    nofocus = "título";

    get title() {
        return application.data.title;
    }

    renderedCallback() {
        if (!this.nofocus) {
            this.header.tabIndex = "0";
            this.header.focus();
        }
    }

    handleBlur() {
        this.header.tabIndex = "-1";
    }

}

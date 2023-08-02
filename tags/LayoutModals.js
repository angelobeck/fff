
class LayoutModals extends Module {

    template = `
    <div aria-hidden={layoutHidden} class="layout">
    <slot />
    </div>
    <template for:each={modalsIterableList} for:item={modal}>
    <div class="modal-background" aria-hidden={modal.hidden}>
    <div class="modal-box">
    <div tabindex="0" onfocus={focusOnLastElement} />
    <h1 wire:element={modalHeaderElement} tabindex="0" class="modal-header"><text value={modal.title} /></h1>
    <mod name={modal.name} />
    <div
    aria-label={modalCloseLabel}
    class="modal-close-button"
    onclick={closeModal}
    onkeydown={closeKeyDown}
    role="button"
    tabindex="0"
    >x</div>
    <div tabindex="0" onfocus={focusOnFirstElement} />
    </div>
    </div>
    </template>
    `;

    modals = [];

    modalTitleElement;

    get modalCloseLabel() {
        return page.selectLanguage({ pt: "Fechar", en: "Close" });
    }

    get layoutHidden() {
        return this.modals.length > 0;
    }

    get modalsIterableList() {
        return this.modals.map((modal, index) => {
            return {
                title: modal.title,
                name: modal.name,
                hidden: index + 1 < this.modals.length
            };
        });
    }

    renderedCallback() {
        if (this.modals.length > 0) {
            this.modalHeaderElement.focus();
        }
    }

    focusOnLastElement(event) {
        var element = event.currentTarget;
        element.parentElement.lastElementChild.previousElementSibling.focus();
    }

    focusOnFirstElement(event) {
        var element = event.currentTarget;
        element.parentElement.firstElementChild.nextElementSibling.focus();
    }

    closeModal() {
        this.modals.pop();
        this.refresh();
    }

    closeKeyDown(event) {
        if (event.key === "Enter" || event.key === " ") {
            this.modals.pop();
            this.refresh();
        }
    }

}

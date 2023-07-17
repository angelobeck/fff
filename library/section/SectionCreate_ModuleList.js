
class SectionCreate_ModuleList extends Module {

    template = `
<ul for:each={iterableMenu} for:item={item}>
<li>
<a href={item.url}><text value={item.label} /></a>
</li>
</ul>`;

    get iterableMenu() {
        return [
            {
                label: { pt: "Nova seção", en: "New section" },
                url: page.url(true, true, '_create-section')
            },
            {
                label: { pt: "Novo jogo de xadrez", en: "New chess game" },
                url: page.url(true, true, '_create-chess')
            },
            {
                label: { pt: "Nova pasta de música", en: "New songbook" },
                url: page.url(true, true, '_create-songbook')
            },
            {
                label: { pt: "Novo navegador em árvore", en: "New tree navigator" },
                url: page.url(true, true, '_create-treenavigator')
            }
        ];
    }

}

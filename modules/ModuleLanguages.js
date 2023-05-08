
class ModuleLanguages extends Module {
    template = `
    <div><text value={languagesLabel} />
    <template for:each={iterableMenu} for:item={item}>
<a href={item.url} aria-current={item.current}><text value={item.label} /></a>
</template>
</div>`;

    languages = [
        { lang: "pt", label: { pt: "Português" } },
        { lang: "en", label: { en: "English" } }
    ];

    languagesLabel = { pt: "Idiomas", en: "Languages" };
    
    get iterableMenu() {
        return this.languages.map(item => {
            return {
                label: item.label,
                url: page.url(true, item.lang),
                current: item.lang === page.lang ? "page" : false
            }
        });
    }

}

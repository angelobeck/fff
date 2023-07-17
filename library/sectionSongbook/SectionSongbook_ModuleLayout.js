
class SectionSongbook_ModuleLayout extends Module {
    template = `
<div wire:element={layoutElement} id="songbook">
<div id="navbar" style="display:flex">
<mod name="paginator" />
<button onclick={actionExport}>"Baixar"</button>
</div>
<div id="background">
<div id="page">
<div id="frame-container">
<div id="frame-limits">
<div id="image" if:true={imageSrc}>
<img src={imageSrc} class={imageClass} style={imageStyle} cross-origin="anonimous" />
</div>
<div id="content" class={colorScheme}>
<h1 class="color" style="opacity:0.5">{title}</h1>
<markdown value={content} />
</div>
</div>
</div>
</div>
</div>
<div id="menu-button">
<button onclick={menuSwitch} aria-expanded={menuExpanded}>"menu"</button>
</div>
</div>

<div if:true={menuExpanded} class="menu">
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

    get title() {
        return page.unescapeString(page.selectLanguage(application.data.title));
    }

    get imageSrc() {
        return application.data.image;
    }

    get content() {
        return application.data.content;
    }

    get imageClass() {
        return application.data.imageHorizontalAlign + " " + application.data.imageVerticalAlign;
    }

    get imageStyle() {
        return "width:" + application.data.imageWidth;
    }

    get colorScheme() {
        return application.data.color;
    }

    actionExport() {

        var title = page.unescapeString(page.selectLanguage(application.data.title));
        var content = document.getElementById("page").innerHTML;
        var htmlTemplate = `<!DOCTYPE html>
<html lang="pt">
        <meta charset="UTF-8">
        <title>${title}</title>
<style>
#frame-container { min-width:100%; min-height:100%; display:flex; padding-top:10mm; }
#frame-limits { margin:auto; width:170mm; height:267mm; position:relative; }
#image { z-index:-2; position:absolute; top:0; right:0; bottom:0; left:0; display:flex; }
#image img { height:auto; }
#content { z-index:3; position:absolute; top:0; right:-10mm; bottom:0; left:0; }

.grid { display:flex; }
.card { width:49.5%; margin-left:auto; margin-right:auto; }
#content * { font-family:'Times New Roman', Times, serif; line-height:100%; }
em, .up { font-weight:inherit; text-decoration:none; text-transform:none; }
h1 { font-size:45px; }
p { font-size: 16px; }
.strophe { font-size:27px; line-height:32px; }
.up { display:inline-block; position:relative; }
.up > span { position:absolute; left:0; bottom:16px; }

.violeta .color { color:#80c; }
.azul .color { color:#00f; }
.ciano .color { color:#0cf; }
.verde .color { color:#0c0; }
.ocre .color { color:#cc0; }
.laranja .color { color:#f80; }
.vermelho .color { color:#c00; }
.magenta .cor { color:#f0f; }
.cinza .color { color:#888; }

.left { margin-left:0; margin-right:auto; }
.center { margin-left:auto; margin-right:auto; }
.right { margin-left:auto; margin-right:0; }
.top { margin-top: 0; margin-bottom:auto; }
.middle { margin-top:auto; margin-bottom:auto; }
.bottom { margin-top:auto; margin-bottom:0; }
</style>
    <body>
${content}
    </body>
</html>`;

        download(title + ".html", htmlTemplate);
    }

}


class TextMarkdown extends Module {
    template = `
<template for:each={iterableBlocks} for:item={block}>

</template>
    `;

    get iterableBlocks() {
    return page.unescapeString(page.selectLanguage(this.value));
}

}

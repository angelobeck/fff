
var componentsList = {
    "dream-form": DreamForm,
    "dream-form-button": DreamFormButton,
    "dream-form-checkbox": DreamFormCheckbox,
    "dream-form-command-group": DreamFormCommandGroup,
    "dream-form-input": DreamFormInput,
    "dream-form-textarea": DreamFormTextarea,
    "markdown": Markdown,
    "markdown-block-codefence": MarkdownBlockCodefence,
    "markdown-block-h1": MarkdownBlockH1,
    "markdown-block-h2": MarkdownBlockH2,
    "markdown-block-h3": MarkdownBlockH3,
    "markdown-block-h4": MarkdownBlockH4,
    "markdown-block-h5": MarkdownBlockH5,
    "markdown-block-h6": MarkdownBlockH6,
    "markdown-block-p": MarkdownBlockP,
    "markdown-block-ul": MarkdownBlockUl,
    "text": Text
};

var filtersList = {
    folderName: FilterFolderName,
    languages: FilterLanguages,
    number: FilterNumber,
    text: FilterText
};

var modulesList = {
    content: ModuleContent,
    description: ModuleDescription,
    languages: ModuleLanguages,
    layout: ModuleLayout,
    linked: ModuleLinked,
    list: ModuleList,
    menu: ModuleMenu,
    title: ModuleTitle,
    tools: ModuleTools
};

var sectionHelpersList = {
    chess: SectionChess_App
};

var setup = {
    defaultLang: "pt",
    validLanguages: {
        "-pt": { lang: "pt", label: "Português" },
        "-en": { lang: "en", label: "English" }
    }
};

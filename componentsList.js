
var applicationsList = {
    default: Default_App,
    index: Index_App,
    root: Root_App,
    section: Section_App,
    sectionCreate: SectionCreate_App,
    sectionChess: SectionChess_App,
    sectionChess_Game: SectionChess_Game_App,
    sectionChess_GameNew: SectionChess_GameNew_App,
    sectionFolder: SectionFolder_App,
    sectionSongbook: SectionSongbook_App,
    sectionSongbook_Post: SectionSongbook_Post_App,
    sectionSongbook_PostNew: SectionSongbook_PostNew_App,
    sectionTreeNavigator: SectionTreeNavigator_App,
    sectionTreeNavigator_Post: SectionTreeNavigator_Post_App,
    sectionTreeNavigator_PostNew: SectionTreeNavigator_PostNew_App,
    tool: Tool_App,
    toolConfig: ToolConfig_App,
    toolExport: ToolExport_App
};

var componentsList = {
    "dream-form": DreamForm,
    "dream-form-button": DreamFormButton,
    "dream-form-checkbox": DreamFormCheckbox,
    "dream-form-command-group": DreamFormCommandGroup,
    "dream-form-input": DreamFormInput,
    "dream-form-textarea": DreamFormTextarea,
    "layout-modals": LayoutModals,
    "layout-tree": LayoutTree,
    "layout-tree-item": LayoutTreeItem,
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
    "markdown-inline": MarkdownInline,
    "markdown-inline-cipher": MarkdownInlineCipher,
    "markdown-inline-color": MarkdownInlineColor,
    "markdown-inline-text": MarkdownInlineText,
    "markdown-tag-card": MarkdownTagCard,
    "markdown-tag-grid": MarkdownTagGrid,
    "markdown-tag-strophe": MarkdownTagStrophe,
    "markdown-tag-tom": MarkdownTagTom,
    "text": Text
};

var filtersList = {
    folderName: FilterFolderName,
    languages: FilterLanguages,
    integer: FilterInteger,
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
    paginator: ModulePaginator,
    title: ModuleTitle,
    tools: ModuleTools
};

var sectionHelpersList = {
    chess: SectionChess_App,
    songbook: SectionSongbook_App,
    treenavigator: SectionTreeNavigator_App
};

var setup = {
    defaultLang: "pt",
    validLanguages: {
        "-pt": { lang: "pt", label: "Português" },
        "-en": { lang: "en", label: "English" }
    }
};

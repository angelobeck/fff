
var applicationsList = {
    default: Default_App,
    index: Index_App,
    root: Root_App,
    section: Section_App,
    section_create: Section_Create_App,
    sectionAccessibilityReview: SectionAccessibilityReview_App,
    sectionAccessibilityReview_categories: SectionAccessibilityReview_Categories_App,
    sectionAccessibilityReview_category: SectionAccessibilityReview_Category_App,
    sectionAccessibilityReview_categoryNew: SectionAccessibilityReview_CategoryNew_App,
    sectionAccessibilityReview_dashboard: SectionAccessibilityReview_Dashboard_App,
    sectionAccessibilityReview_post: SectionAccessibilityReview_Post_App,
    sectionAccessibilityReview_postNew: SectionAccessibilityReview_PostNew_App,
    sectionAccessibilityReview_product: SectionAccessibilityReview_Product_App,
    sectionAccessibilityReview_productNew: SectionAccessibilityReview_ProductNew_App,
    sectionAccessibilityReview_team: SectionAccessibilityReview_Team_App,
    sectionAccessibilityReview_teamNew: SectionAccessibilityReview_TeamNew_App,
    sectionAccessibilityReview_teams: SectionAccessibilityReview_Teams_App,
    sectionAccessibilityReview_ticket: SectionAccessibilityReview_Ticket_App,
    sectionAccessibilityReview_ticketNew: SectionAccessibilityReview_TicketNew_App,
    sectionChess: SectionChess_App,
    sectionChess_Game: SectionChess_Game_App,
    sectionChess_GameNew: SectionChess_GameNew_App,
    sectionFolder: SectionFolder_App,
    sectionSongbook: SectionSongbook_App,
    sectionSongbook_Post: SectionSongbook_Post_App,
    sectionSongbook_PostNew: SectionSongbook_PostNew_App,
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
    "dream-form-select": DreamFormSelect,
    "dream-form-textarea": DreamFormTextarea,
    "layout-modals": LayoutModals,
    "layout-table": LayoutTable,
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
category: FilterCategory,
    folderName: FilterFolderName,
    languages: FilterLanguages,
    integer: FilterInteger,
team: FilterTeam,
    text: FilterText
};

var modulesList = {
    breadcrumbs: ModuleBreadCrumbs,
    content: ModuleContent,
    description: ModuleDescription,
    languages: ModuleLanguages,
    layout: ModuleLayout,
    linked: ModuleLinked,
    list: ModuleList,
    menu: ModuleMenu,
    paginator: ModulePaginator,
    rumperstilshen: ModuleRumperstilshen,
    title: ModuleTitle,
    tools: ModuleTools
};

var sectionHelpersList = {
    accessibilityreview: SectionAccessibilityReview_App,
    chess: SectionChess_App,
    songbook: SectionSongbook_App,
};

var setup = {
    defaultLang: "pt",
    validLanguages: {
        "-pt": { lang: "pt", label: "Português" },
        "-en": { lang: "en", label: "English" }
    }
};

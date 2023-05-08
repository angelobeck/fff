
var componentsList = {
    "dream-form": DreamForm,
    "dream-form-button": DreamFormButton,
    "dream-form-checkbox": DreamFormCheckbox,
    "dream-form-input": DreamFormInput,
    "dream-form-textarea": DreamFormTextarea,
    "text": Text
};

var filtersList = {
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
    title: ModuleTitle
};

var setup = {
    defaultLang: "pt",
    validLanguages: {
        "-pt": { lang: "pt", label: "Português" },
        "-en": { lang: "en", label: "English" }
    }
};

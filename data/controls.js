
var data = data || {};

data.controls = [
    {
        name: "-default",
        menu_hidden: true,
        title: { pt: "Página não encontrada", en: "Page not found" },
        description: { pt: "A página que você procura não existe.", en: "The page you requested does not exists" }
    },
    {
        name: "-index",
        title: { pt: "Início", en: "Home" }
    },
    {
        name: "section-create",
        title: { pt: "Nova seção", en: "New section" },
        children: [
            "edit-title",
            "edit-name",
            "edit-description"
        ]
    },
    {
        name: "section-edit",
        title: { pt: "Editar seção", en: "Edit section" },
        children: [
            "edit-title",
            "edit-description"
        ]
    },
    {
        name: "section-export",
        children: [
            {
                type: "button",
                label: { pt: "Recuperar backup", en: "Recover backup" },
                action: "recoverbackup"
            },
            {
                type: "button",
                label: { pt: "Remover backup", en: "Remove backup" },
                action: "removebackup"
            },
            {
                type: "button",
                label: { pt: "Exportar dados .js", en: "Export .js data file" },
                action: "exportData"
            },
            {
                type: "button",
                label: { pt: "Exportar página HTML", en: "Export HTML page" },
                action: "exportDocument"
            }
        ]
    },
    {
        name: "edit-title",
        type: "input",
        filter: "languages",
        label: { pt: "Título", en: "Title" },
        target: "title",
    },
    {
        name: "edit-name",
        type: "input",
        filter: "folderName",
        label: { pt: "Pasta", en: "Folder" },
        target: "name"
    },
    {
        name: "edit-description",
        type: "input",
        filter: "languages",
        label: { pt: "Descrição", en: "Description" },
        target: "description"
    },
    {
        name: "edit-content",
        type: "textarea",
        filter: "languages",
        label: { pt: "Conteúdo", en: "Content" },
        target: "content"
    },
{
name: "edit-category",
type: "select",
filter: "category",
label: {pt: "Categoria", en: "Category"},
target: "category"
},
{
name: "edit-team",
type: "select",
filter: "team",
label: {pt: "Equipe", en: "Team"},
target: "team"
},
    {
        name: "command-save",
        type: "button",
        action: "save",
        label: { pt: "Salvar", en: "save" }
    },
    {
        name: "command-cancel",
        type: "button",
        action: "cancel",
        label: { pt: "Cancelar", en: "Cancel" }
    },
    {
        name: "tools",
        title: { pt: "Ferramentas", en: "Tools" }
    },
    {
        name: "tool-config",
        title: { pt: "Configurações", en: "Configurations" }
    },
    {
        name: "tool-export",
        title: { pt: "Exportar", en: "Export" }
    }
];

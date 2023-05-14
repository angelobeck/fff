
var data = data || {};

data.controls = [
    {
        name: "-default",
        menu_hidden: true,
        title: "Página não encontrada",
        description: "A página que você procura não existe."
    },
    {
        name: "-index",
        title: "Checklist de acessibilidade",
        description: "Este é um pequeno manual de referência sobre acessibilidade."
    },
    {
        name: "-chess-clock",
        title: "Relógio para xadrez",
        description: "Um simples relógio para contar o tempo de partidas de xadrez."
    },
    {
        name: "section-edit",
        title: { pt: "Editar seção", en: "Edit section" },
        children: [
            {
                type: "input",
                filter: "languages",
                label: { pt: "Título", en: "Title" },
                target: "title",
            },
            {
                type: "input",
                filter: "languages",
                label: { pt: "Descrição", en: "Description" },
                target: "description"
            },
            {
                type: "textarea",
                filter: "languages",
                label: { pt: "Conteúdo", en: "Content" },
                target: "content"
            },
            {
                type: "button",
                action: "save",
                label: { pt: "Salvar", en: "save" }
            },
            {
                type: "button",
                action: "cancel",
                label: { pt: "Cancelar", en: "Cancel" }
            }
        ]
    },
    {
        name: "section-export",
        children: [
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
    }
];

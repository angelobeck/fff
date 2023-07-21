
class sectionAccessibilityReview_Dashboard_ModuleList extends Module {

    template = `
<layout-table value={iterableTable} header={iterableHeader} />
`;

    iterableHeader = [
        { label: { pt: "Nome", en: "Name" } },
        { label: { pt: "Descrição", en: "Description" } },
        { label: { pt: "Tipo", en: "Type" } },
        { label: { pt: "Gravidade", en: "Gravity" } },
        { label: { pt: "Status", en: "Status" } },
    ];

    get iterableTable() {
        var rows = [];
        var where = { type: "accessibilityReview" };
        var tickets = store.domainContent.query({ where: where });
        tickets.map(data => {
            var row = [
                // name
                {
                    label: data.title,
                    url: page.url(store.domainContent.getPath(data.name))
                },


                // description
                { label: data.description || "-" },

                // type
                { label: data.group || "-" },

                // gravity
                { label: data.gravity || "unknown" },

                // status
                { label: data.status || "unknown" }

            ];

            rows.push(row);
        });
        return rows;
    }
}


class sectionAccessibilityReview_Dashboard_ModuleList extends Module {

    template = `
<layout-table value={iterableTable} header={iterableHeader} />
`;

    get iterableTable() {
        var where = { type: "accessibilityReview" };
        var tickets = store.domainContent.query({ where: where });
        return sectionAccessibilityReview_Dashboard_ModuleList.buildTableContent(tickets);
    }

    static buildTableContent(tickets) {
        var rows = [];

        tickets.map(data => {
            var row = [
                // category
                {
                    label: this.getCategoryTitle(data),
                    url: page.url([...application.path, data.name])
                },

                // description
                { label: data.description || "-" },

                // gravity
                { label: this.getGravityTitle(data) },

                // status
                { label: this.getStatusTitle(data) }
            ];

            rows.push(row);
        });
        return rows;
    }

    static getCategoryTitle(data) {
        if (!data.category) return {pt:"(sem título)", en: "(untitled)"};
        var category = store.domainContent.openByName(data.category);
        return category.title || { pt: "(sem título)", en: "(untitled)" };
    }

    static getGravityTitle(data) {
        const gravityTitles = {
            low: { pt: "leve", en: "low" },
            medium: { pt: "média", en: "medium" },
            hi: { pt: "alta", en: "hi" },
            unknown: { pt: "(desconhecido)", en: "(unknown)" }
        };
        if (!data.gravity || !gravityTitles[data.gravity]) {
            return gravityTitles.unknown;
        } else {
            return gravityTitles[data.gravity];
        }
    }

    static getStatusTitle(data) {
        const statusTitles = {
            pending: { pt: "pendente", en: "pending" },
            backlog: { pt: "backlog", en: "backlog" },
            running: { pt: "em execução", en: "running" },
            testing: { pt: "aguardando teste", en: "awaiting test" },
            adjusted: { pt: "corrigido", en: "done" }
        };
        if (!data.status || !statusTitles[data.status]) {
            return statusTitles.pending;
        } else {
            return statusTitles[data.status];
        }
    }

    get iterableHeader() {
        return sectionAccessibilityReview_Dashboard_ModuleList.headerTitles;
    }

    static headerTitles = [
        { label: { pt: "Tipo", en: "Type" } },
        { label: { pt: "Descrição", en: "Description" } },
        { label: { pt: "Gravidade", en: "Gravity" } },
        { label: { pt: "Status", en: "Status" } }
    ];

}

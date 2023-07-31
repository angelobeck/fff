
class SectionAccessibilityReview_Post_ModuleList extends Module {

    template = `
<layout-table value={iterableTable} header={iterableHeader} />
`;

    get iterableHeader() {
        return sectionAccessibilityReview_Dashboard_ModuleList.headerTitles;
    }

    get iterableTable() {
        var where = {
            type: "accessibilityReview",
            parentName: application.name
        };
        var tickets = store.domainContent.query({ where: where });
        return sectionAccessibilityReview_Dashboard_ModuleList.buildTableContent(tickets);
    }

}

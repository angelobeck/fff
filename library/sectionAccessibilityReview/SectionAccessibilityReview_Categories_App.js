
class SectionAccessibilityReview_Categories_App extends ApplicationHelper {
    static name = "-categories";
    static map = ["sectionAccessibilityReview_category", "sectionAccessibilityReview_categoryNew"];

    static constructorHelper(me) {
        me.data = {
            title: { pt: "Categorias", en: "Categories" }
        };
    }

}

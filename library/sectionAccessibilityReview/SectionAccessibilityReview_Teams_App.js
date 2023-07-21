
class SectionAccessibilityReview_Teams_App extends ApplicationHelper {
    static name = "-teams";
    static map = ["sectionAccessibilityReview_team", "sectionAccessibilityReview_teamNew"];

    static constructorHelper(me) {
        me.data = {
            title: { pt: "Equipes", en: "Teams" }
        };
    }

}

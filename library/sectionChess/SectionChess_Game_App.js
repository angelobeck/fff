
class SectionChess_Game_App extends ApplicationHelper {

    static isChild(parent, name) {
        var data = store.domainContent.openByName(name);
        if (parent.name === data.parentName) {
            return true;
        } else {
            return false;
        }
    }

    static childrenNames(parent) {
        return store.domainContent.childrenNames(parent.name);
    }

    static constructorHelper(me) {
        me.data = store.domainContent.openByName(me.name);
    }

    static dispatch() {
        page.modules.context.children.push({
            label: { pt: "Configurar", en: "Setup" },
            url: page.url(true, true, "_setup"),
            current: page.actions.setup ? "page" : "false"
        });

        if (page.actions.setup) {
            var form = new DreamForm();
            form.data = application.data;
            form.actions.save = () => {
                application.data = form.data;
                store.domainContent.update(form.data);
                page.navigateTo();
            };
            form.actions.cancel = () => {
                page.navigateTo();
            };
            form.controls = this.controls;
            page.modules.main.namesList = ["formulary"];
            page.modules.formulary = form;
        } else {
            page.modules.content = new SectionChess_ModuleContent();
        }
    }

    static controls = [
        {
            type: "input",
            filter: "text",
            target: "white",
            label: { pt: "Brancas", en: "White" }
        },
        {
            type: "input",
            filter: "text",
            target: "black",
            label: { pt: "Pretas", en: "Black" }
        },
        {
            type: "input",
            filter: "integer",
            defaultValue: 45,
            target: "timePerPlayer",
            label: { pt: "Tempo por jogador (minutos)", en: "Time per player (minutes)" }
        },
        {
            type: "input",
            filter: "integer",
            defaultValue: 30,
            target: "incrementPerMove",
            label: { pt: "Acréscimo por jogada (segundos)", en: "Increment per move (seconds)" }
        }
    ];
}

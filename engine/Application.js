
class Application {
    data = {};
    path = [];
    parent = false;

    #helper;
    #children = [];
    #childrenIsLoaded = false;
    #childrenByName = {};

    constructor(parent, name, helper) {
        this.parent = parent;
        this.name = name;
        this.#helper = helper;
        if (parent && name !== "-index") {
            this.path = [...parent.path, name];
        }
        this.#helper.constructorHelper(this);
    }

    child(name) {
        if (this.#childrenByName[name]) {
            return this.#childrenByName[name];
        }
        for (let i = 0; i < this.#helper.map.length; i++) {
            var helper = this.#helper.map[i];
            if (helper.isChild(this, name)) {
                this.#childrenByName[name] = new Application(this, name, helper);
                return this.#childrenByName[name];
            }
        }
        return false;
    }

    get children() {
        if (this.#childrenIsLoaded) {
            return this.#children;
        }
        for (let i = 0; i < this.#helper.map.length; i++) {
            var helper = this.#helper.map[i];
            let names = helper.childrenNames(this);
            for (let n = 0; n < names.length; n++) {
                let name = names[n];
                if (helper.isChild(this, name)) {
                    this.#childrenByName[name] = new Application(this, name, helper);
                    this.#children.push(this.#childrenByName[name]);
                }
            }
        }
        this.#childrenIsLoaded = true;
        return this.#children;
    }

    dispatch(page) {
        this.#helper.dispatch(page);
    }

}

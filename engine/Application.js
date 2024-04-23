
class Application {
    data = {};
    path = [];
    parent = false;

    #helper;
    #children = [];
    #childrenIsLoaded = false;
    #childrenByName = {};
    sectionHelper;
    map = [];

    constructor(parent, name, helper) {
        this.parent = parent;
        this.name = name;
        this.#helper = helper;
        if (parent && name !== "-index") {
            this.path = [...parent.path, name];
        }
        if (this.#helper.map) {
            this.map = this.#helper.map;
        }
        this.#helper.constructorHelper(this);
    }

    child(name) {
        if (this.#childrenByName[name]) {
            return this.#childrenByName[name];
        }
        for (let i = 0; i < this.map.length; i++) {
            if (!applicationsList[this.map[i]]) {
                continue;
            }
            var helper = applicationsList[this.map[i]];
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
        for (let i = 0; i < this.map.length; i++) {
            if (!applicationsList[this.map[i]]) {
                continue;
            }
            var helper = applicationsList[this.map[i]];
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

    findChild(path) {
        if (!Array.isArray(path)) {
            return false;
        }
        var app = this;
        while (path.length > 0) {
            app = app.child(path.shift());
            if (!app) {
                return false;
            }
        }
        return app;
    }

    refresh() {
        this.#children = [];
        this.#childrenIsLoaded = false;
        this.#childrenByName = {};
    }

    dispatch(page) {
        this.#helper.dispatch(page);
    }

sortedChildren(sortBy = "name", sortDirection = "asc") {
var children = this.children;
var toSort = {};
var unsorted = [];
for(let i = 0; i < children.length; i++) {
let child = children[i];
if(!child[sortBy]) {
	unsorted.push(child);
}else{
	let index = child[sortBy].toString();
	if(index === "" || index === "0") {
		unsorted.push(child);
	}else{
		if(toSort[index]) {
			toSort[index].push(child);
		}else{
			toSort[index] = [child];
		}
	}
}
}
var keys = Object.keys(toSort);
keys.sort();
if(sortDirection === "desc") {
keys.reverse();
}

var result = [];
for(let i = 0; i < keys.length; i++) {
let key = keys[i];
let items = toSort[key];
while(items.length > 0) {
result.push(items.shift());
}
}

return result.concat(unsorted);
}

}

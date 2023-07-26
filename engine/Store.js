
class Store {
    #cache = [];

    constructor(data) {
        this.#cache = data;
    }

    query(query) {
        var result = [];
        var counter = 0;
        var limit = query.limit || 0;
        var offset = query.offset || 0;
        var sort_by = query.sort_by || "";
        var direction = query.direction || "asc";

        if (!query.where) {
            return result;
        }

        for (let index = 0; index < this.#cache.length; index++) {
            const register = this.#cache[index];
            if (this.#where(register, query.where)) {
                counter++;
                if (counter > offset) {
                    result.push(register);
                    if (limit > 0 && result.length === limit) {
                        break;
                    }
                }
            }
        }
        return this.#sort_by(result, sort_by, direction);
    }

    #where(register, where) {
        for (let name in where) {
            const value = where[name];
            if (register[name] === undefined || register[name] === null) {
                return false;
            }
            if (name === "linked") {
                if (!this.#keywordExists(register.linked, value)) {
                    return false;
                } else {
                    continue;
                }
            }
            if (name === "keywords") {
                if (!this.#keywordExists(register.keywords, value)) {
                    return false;
                } else {
                    continue;
                }
            }
            if (register[name] !== value) {
                return false;
            }
        }
        return true;
    }

    #sort_by(result, sort_by, direction) {
        if (sort_by === "") {
            return result;
        }
        return result.sort((a, b) => {
            if (a[sort_by] && b[sort_by]) {
                if (a[sort_by] === b[sort_by]) {
                    return 0;
                } else if (direction === "asc" && a[sort_by] > b[sort_by]) {
                    return 1;
                } else if (direction === "desc" && a[sort_by] < b[sort_by]) {
                    return 1;
                } else {
                    return -1;
                }
            } else if (a[sort_by]) {
                return 1;
            } else if (b[sort_by]) {
                return -1;
            } else {
                return 0;
            }
        });
    }

    #keywordExists(keywordsString, keyword) {
        var keywordsList = keywordsString.split(" ");
        if (keywordsList.indexOf(keyword) >= 0) {
            return true;
        } else {
            return false;
        }
    }

    update(register) {
        if (!register.name || register.name === "") {
            return;
        }
        var name = register.name;
        for (let index = 0; index < this.#cache.length; index++) {
            const current = this.#cache[index];
            if (current.name && current.name === name) {
                this.#cache[index] = register;
                return;
            }
        }
    }

    insert(row) {
        if (!row.name) {
            let counter = this.#cache.length;
            while (this.openByName(counter.toString()).name) {
                counter++;
            }
            row.name = counter.toString();
        }
        this.#cache.push(row);
    }

    openByName(name) {
        for (let index = 0; index < this.#cache.length; index++) {
            const register = this.#cache[index];
            if (register.name && register.name === name) {
                return register;
            }
        }
        return {};
    }

    removeByName(name) {
        var found = false;
        do {
            for (let index = 0; index < this.#cache.length; index++) {
                const register = this.#cache[index];
                if (register.name && register.parentName && register.parentName === name) {
                    this.removeByName(register.name);
                    found = true;
                    break;
                }
            }
        } while (found);

        for (let index = 0; index < this.#cache.length; index++) {
            const register = this.#cache[index];
            if (register.name && register.name === name) {
                this.#cache.splice(index, 1);
                return;
            }
        }
    }

    childrenNames(parentName, type = false) {
        var names = [];
        var where = { parentName: parentName };
        if (type) {
            where.type = type;
        }
        var children = this.query({ where: where });
        for (let i = 0; i < children.length; i++) {
            let data = children[i];
            if (data.name) {
                names.push(data.name);
            }
        }
        return names;
    }

    getPath(name) {
        var path = [];
        while (true) {
            path.unshift(name);
            const register = this.openByName(name);
            if (!register || !register.parentName || register.parentName === "") {
                return path;
            }
            name = register.parentName;
        }
    }


}

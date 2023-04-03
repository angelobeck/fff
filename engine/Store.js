
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
            if (register[name] === undefined || register[name] === null || register[name] !== value) {
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

    openByName(name) {
        for (let index = 0; index < this.#cache.length; index++) {
            const register = this.#cache[index];
            if (register.name && register.name === name) {
                return register;
            }
        }
        return {};
    }

    childrenNames(parentName) {
        var names = [];
        var children = this.query({
            where: { parentName: parentName }
        });
        for(let i = 0; i < children.length; i++) {
            let data = children[i];
            if(data.name) {
                names.push(data.name);
            }
        }
        return names;
    }

}
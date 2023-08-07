
class Store {
    #cache = [];
    #indexByParentName = false;
    #removeIndexList;

    constructor(data) {
        this.#cache = data;
        this.#generateIndex();
    }

    #generateIndex() {
        this.#indexByParentName = {};
        var parentName;
        var length = this.#cache.length;
        for (let index = 0; index < length; index++) {
            const row = this.#cache[index];
            if (!row.parentName || row.parentName === "") {
                parentName = "-index";
            } else {
                parentName = row.parentName;
            }
            if (!this.#indexByParentName[parentName]) {
                this.#indexByParentName[parentName] = [index];
            } else {
                this.#indexByParentName[parentName].push(index);
            }
        }
    }

    query(query) {
        var searchOnIndex = false;
        var length = this.#cache.length;
        var result = [];
        var counter = 0;
        var limit = query.limit || 0;
        var offset = query.offset || 0;
        var sort_by = query.sort_by || "";
        var direction = query.direction || "asc";
        var register;

        if (!query.where) {
            return result;
        }

        if (query.where.parentName) {
            let parentName = query.where.parentName;
            if (parentName === "") {
                parentName = "-index";
            }
            if (!this.#indexByParentName[parentName]) {
                return result;
            }
            searchOnIndex = this.#indexByParentName[parentName];
            length = searchOnIndex.length;
        }

        for (let index = 0; index < length; index++) {
            if (searchOnIndex) {
                register = this.#cache[searchOnIndex[index]];
            } else {
                register = this.#cache[index];
            }
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
        register.updated = page.currentDate();
        for (let index = 0; index < this.#cache.length; index++) {
            const current = this.#cache[index];
            if (current.name && current.name === name) {
                this.#cache[index] = register;
                return;
            }
        }
    }

    insert(row) {
        var parentName = "-index";
        var index = this.#cache.length;
        if (!row.name) {
            let counter = this.#cache.length;
            while (this.openByName(counter.toString()).name) {
                counter++;
            }
            row.name = counter.toString();
        }

        row.created = page.currentDate();
        row.updated = row.created;
        this.#cache.push(row);

        if (row.parentName && row.parentName !== "") {
            parentName = row.parentName;
        }
        if (!this.#indexByParentName[parentName]) {
            this.#indexByParentName[parentName] = [index];
        } else {
            this.#indexByParentName[parentName].push(index);
        }
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
        this.#removeIndexList = [];
        for (let index = 0; index < this.#cache.length; index++) {
            const register = this.#cache[index];
            if (register.name && register.name === name) {
                this.#appendToRemoveIndexList(index);
                break;
            }
        }
        this.#removeIndexList.sort((a, b) => {
            if (a > b) {
                return -1;
            } else if (a == b) {
                return 0;
            } else {
                return -1;
            }
        });

        for (let i = 0; i < this.#removeIndexList.length; i++) {
            const indexToRemove = this.#removeIndexList[i];
            this.#cache.splice(indexToRemove, 1);
        }
        this.#generateIndex();
    }

    #appendToRemoveIndexList(index) {
        this.#removeIndexList.push(index);
        var row = this.#cache[index];
        if (!this.#indexByParentName[row.name]) {
            return;
        }

        const list = this.#indexByParentName[row.name];
        for (let i = 0; i < list.length; i++) {
            this.#appendToRemoveIndexList(list[i]);
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

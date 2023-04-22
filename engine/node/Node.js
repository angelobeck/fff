
class Node {
    node = false;
    render;
    value;
    staticAttributes = {};
    dinamicAttributes = {};
    children = [];

    constructor(render, value) {
        this.render = render;
        this.value = value;
    }

}

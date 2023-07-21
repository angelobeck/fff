
class LayoutTree extends Module {
    template = `
<div role="tree" for:each={iterableItems} for:item={item}>
<div 
aria-expanded={item.expanded}
role="treeitem"
tabindex={item.tabindex}
><text value={item.title} /></div>
</div>
`;

    items = [];
path = [];

get iterableItems() {
return this.items.map(item => {
return {
title: item.data.title,
expanded: true,
tabindex: 0
};
});
}

}


class MarkdownBlockUl extends Module {
template = `   <ul for:each={value} for:item={item}>
<li><markdown value={item} plain="true" /></li>
</ul>
`;
}

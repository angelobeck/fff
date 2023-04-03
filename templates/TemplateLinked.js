
class TemplateLinked extends Template {
    template = `<ul for:each={iterableList} for:item={item}>
    <li>
    <a href={item.url}>{item.label}</a>
    <p if:true={item.description}>{item.description}</p>
    </li>
    </ul>`;

    get iterableList(){
        var result = [];
        return [];
    }

}

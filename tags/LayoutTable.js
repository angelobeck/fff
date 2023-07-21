
class LayoutTable extends Module {
    template = `
<table if:true={value}>
<thead if:true={header}>
<tr for:each={header} for:item={item}>
<th><text value={item.label} /></th>
</tr>
</thead>
<tbody for:each={value} for:item={row}>
<tr for:each={row} for:item={cell}>
<td>
<a if:true={cell.url} href={cell.url}><text value={cell.label} /></a>
<text if:false={cell.url} value={cell.label} />
</td>
</tr>
</tbody>
</table>
`;

}

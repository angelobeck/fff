
class MarkdownTagTom extends Module {
    static closeTag = false;

    template = `
<span if:false={displaySelect} tabindex="0" role="button" onkeydown={showSelect} onclick={showSelect}>
Tom: 
<span class="color">{currentTom}</span>
</span>

<span if:true={displaySelect}>
<label>
Tom: 
<select for:each={options} for:item={option} onchange={handleChange}>
<option value={option.value} selected={option.selected}>{option.value}</option>
</select>
</label>
<button onclick={choose}>Escolher</button>
<button onclick={switchCipherVisibility}>{labelTomHidden}</button>
</div>
`;

    tons = [
        "C",
        "C#",
        "D",
        "Eb",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "Bb",
        "B"
    ];

    displaySelect = false;

    get currentTom() {
        if (!page.globals.tomCurrent) {
            return this.value;
        } else {
            return page.globals.tomCurrent;
        }
    }

    get options() {
        return this.tons.map((tom, index) => {
            return {
                value: tom,
                selected: tom === page.globals.tomCurrent
            };
        });
    }

switchCipherVisibility() {
        page.globals.tomHidden = !page.globals.tomHidden;
this.displaySelect = false;
        page.rootNode.refresh();
}

get labelTomHidden() {
return page.globals.tomHidden ? "Exibir cifras" : "Ocultar cifras";
}

choose() {
this.displaySelect = false;
        page.rootNode.refresh();
}

    handleChange(event) {
        var value = event.currentTarget.value;
        page.globals.tomCurrent = value;
        page.globals.tomOriginal = this.value;
        let tomCurrentIndex = this.tons.indexOf(value);
        l
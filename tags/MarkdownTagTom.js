
class MarkdownTagTom extends Module {
    static closeTag = false;

    template = `
<span if:false={displaySelect} tabindex="0" role="button" onkeydown={showSelect}>
"Tom: "
<span class="color">{currentTom}</span>
</span>

<label if:true={displaySelect}>
"Tom: "
<select for:each={options} for:item={option} onchange={handleChange} onblur={hideSelect} onkeydown={switchSelect}>
<option value={option.value} selected={option.selected}>{option.value}</option>
</select>
</label>
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

    handleChange(event) {
        var value = event.currentTarget.value;
        page.globals.tomCurrent = value;
        page.globals.tomOriginal = this.value;
        let tomCurrentIndex = this.tons.indexOf(value);
        let tomOriginalIndex = this.tons.indexOf(this.value);
        page.globals.tomOffset = tomCurrentIndex - tomOriginalIndex;
        page.modules.layout.refresh();
    }

    switchSelect(event) {
        if (event.key === "Enter") {
            this.displaySelect = false;
        }
    }

    showSelect() {
        this.displaySelect = true;
    }

    hideSelect() {
        this.displaySelect = false;
    }

}

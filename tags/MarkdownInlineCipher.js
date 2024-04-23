
class MarkdownInlineCipher extends Module {
    template = `<span if:true={displayCipher} class="up color"><span>{cipher}</span></span>`;

    tonsSharp = [
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B"
    ];

    tonsBemol = [
        "C",
        "Db",
        "D",
        "Eb",
        "E",
        "F",
        "Gb",
        "G",
        "Ab",
        "A",
        "Bb",
        "B"
    ];

    tons = [
        "C",
        "C\u266F",
        "D",
        "E\u266D",
        "E",
        "F",
        "F\u266F",
        "G",
        "G\u266F",
        "A",
        "B\u266D",
        "B"
    ];

    get displayCipher() {
        return !page.globals.tomHidden; 
    }

    get cipher() {
        if(this.value === "*") {
            return `\u2605`;
        }
var offset = 0;
        if (page.globals.tomOffset) {
            offset = page.globals.tomOffset;
        }
        var match = /^([A-G][#b]?)(.*)$/.exec(this.value);
        if (!match) {
            return this.value;
        }
        var index = this.tonsSharp.indexOf(match[1]);
        if (index === -1) {
            index = this.tonsBemol.indexOf(match[1]);
            if (index === -1) {
                return this.value;
            }
        }
        index += offs
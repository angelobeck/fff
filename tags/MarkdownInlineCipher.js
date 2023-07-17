
class MarkdownInlineCipher extends Module {
    template = `<span class="up color"><span>{cipher}</span></span>`;

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

    get cipher() {
        if (!page.globals.tomOffset || page.globals.tomOffset === 0) {
            return this.value;
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
        index += page.globals.tomOffset;
        if (index >= 12) {
            index -= 12;
        } else if (index < 0) {
            index += 12;
        }
        return this.tons[index] + match[2];
    }
}


class SectionChess_ModuleContent extends Module {

    template = `<div style="display:flex">
<div role="menuitem" tabindex="0" onkeydown={timerSwitch} style="flex-grow:1; background:black; color:white font-size:2em; font-weight:bold;  text-align:center;">
<h2>"Brancas"</h2>
<p>{timerWhite}</p>
</div>

<div role="menuitem" tabindex="0" onkeydown={timerSwitch} style="flex-grow:1">
<h2>"Pretas"</h2>
<p>{timerBlack}</p>
</div>

</div>

<div onkeydown={playPause} role="menuitem" tabindex="0">{playPauseLabel}</div>
`;

    timerWhite = 60;
    timerBlack = 60;
    timerIncrement = 10;
    currentTimer = "start";
    intervalId;

    get playPauseLabel() {
        if (this.currentTimer === "start") {
            return "Iniciar";
        }
        return this.intervalId ? "Pausar" : "Continuar";
    }

    timerSwitch(event) {
        if (event.key !== "Enter") {
            return;
        } else if (this.timerWhite === 0 || this.timerBlack === 0) {
            return;
        }
        if (this.currentTimer === "start" || this.currentTimer === "black") {
            this.currentTimer = "white";
            this.timerWhite += this.timerIncrement;
        } else {
            this.timerBlack += this.timerIncrement;
            this.currentTimer = "black";
        }
        this.start();
    }

    start() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(() => {
            if (this.currentTimer === "white") {
                this.timerWhite--;
                if (this.timerWhite === 0) {
                    this.stop();
                }
            } else {
                this.timerBlack--;
                if (this.timerBlack === 0) {
                    this.stop();
                }
            }
            this.refresh();
        }, 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = false;
        }
    }

    playPause(event) {
        switch (event.key) {
            case " ":
            case "Enter":
                if (!this.intervalId) {
                    this.start();
                } else {
                    this.stop();
                }
        }
    }

}


class SectionChess_ModuleContent extends Module {

    template = `<div style="display:flex; background:black; color:white; font-size:2em; font-weight:bold; text-align:center; width:100%;">
<div role="menuitem" tabindex="0" onkeydown={timerSwitch} style="flex-grow:1; flex-basis:35%;">
<p>"Brancas"</p>
<p style="font-size:150%">{formatedTimerWhite}</p>
</div>

<div style="width:30%;">
<div onkeydown={timerSwitch} role="menuitem" tabindex="0" style="margin:1em; padding:1em; border-radius:1em; border:3px solid white; background-color:#444; width:100%;">
{timerSwitchLabel}
</div>

<div onkeydown={playPause} role="menuitem" tabindex="0" style="margin:1em; padding:1em; border-radius:1em; border:3px solid white; background-color:#444; width:100%;">
{playPauseLabel}
</div>

</div>

<div role="menuitem" tabindex="0" onkeydown={timerSwitch} style="flex-basis:35%; flex-grow:1;">
<p>"Pretas"</p>
<p style="font-size:150%">{formatedTimerBlack}</p>
</div>

</div>
`;

    timerWhite = 60;
    timerBlack = 60;
    timerIncrement = 10;
    currentTimer = "start";
    intervalId;

    get formatedTimerBlack() {
        return this.formatTime(this.timerBlack);
    }

    get formatedTimerWhite() {
        return this.formatTime(this.timerWhite);
    }

    get timerSwitchLabel() {
        return "Alternar";
    }

    get playPauseLabel() {
        if (this.currentTimer === "start") {
            return "Iniciar";
        }
        return this.intervalId ? "Pausar" : "Continuar";
    }

    connectedCallback() {
        this.timerBlack = application.data.timePerPlayer * 60;
        this.timerWhite = application.data.timePerPlayer * 60;
        this.timerIncrement = application.data.incrementPerMove;
    }
    timerSwitch(event) {
        switch (event.key) {
            case "Enter":
            case " ":
                if (this.currentTimer === "start" || this.currentTimer === "black") {
                    this.currentTimer = "white";
                    this.timerWhite += this.timerIncrement;
                } else {
                    this.timerBlack += this.timerIncrement;
                    this.currentTimer = "black";
                }
                this.start();
        }
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
                if (this.currentTimer === "start") {
                    this.timerSwitch(event);
                } else if (!this.intervalId) {
                    this.start();
                } else {
                    this.stop();
                }
        }
    }

    formatTime(time) {
        var seconds = time % 60;
        var minutes = (time - seconds) / 60;
        return minutes.toString() + ":" + seconds.toString().padStart(2, "0");
    }
}

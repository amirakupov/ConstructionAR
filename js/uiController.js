export class UIController {
    constructor({ pipeEl }) {
        this.pipeEl = pipeEl;

        this.btnScale = document.getElementById("btnScale");
        this.btnContrast = document.getElementById("btnContrast");

        this.isBig = false;
        this.isHighContrast = false;
    }

    init() {
        if (this.btnScale) {
            this.btnScale.addEventListener("click", () => this.togglePipeSize());
        }
        if (this.btnContrast) {
            this.btnContrast.addEventListener("click", () =>
                this.toggleHighContrast()
            );
        }
    }

    togglePipeSize() {
        if (!this.pipeEl) return;

        if (!this._soundStarted) {
            this._soundStarted = true;
            const soundComp = this.pipeEl.components.sound;
            if (soundComp) {
                soundComp.playSound();
                console.log("sound complete");
            }
        }

        this.isBig = !this.isBig;
        const scale = this.isBig ? "0.8 0.8 0.8" : "0.4 0.4 0.4";
        this.pipeEl.setAttribute("scale", scale);
    }

    toggleHighContrast() {
        this.isHighContrast = !this.isHighContrast;
        document.body.classList.toggle("high-contrast", this.isHighContrast);

        if (this.btnContrast) {
            this.btnContrast.textContent = `High Contrast: ${
                this.isHighContrast ? "On" : "Off"
            }`;
        }
        const clickable = document.querySelectorAll(".clickable");
        clickable.forEach((el) => {
            if (this.isHighContrast) {
                el.setAttribute("material", {
                    color: "#FFFF00",
                    emissive: "#ffffff",
                    emissiveIntensity: 0.4,
                });
            } else {
                if (el.id === "box") el.setAttribute("material", "color", "#FF0000");
                if (el.id === "sphere") el.setAttribute("material", "color", "#0000FF");
                if (el.id === "cylinder")
                    el.setAttribute("material", "color", "#00FF00");
            }
        });
    }
}

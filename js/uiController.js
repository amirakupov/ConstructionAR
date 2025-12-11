export class UIController {
    constructor({ targetEl }) {
        this.targetEl = targetEl;

        this.scaleSlider = document.getElementById("scaleSlider");
        this.btnContrast = document.getElementById("btnContrast");

        this.isHighContrast = false;
    }

    init() {
        if (this.scaleSlider) {
            this.scaleSlider.addEventListener("input", () => this.updateScaleFromSlider());
            this.updateScaleFromSlider();
        }

        if (this.btnContrast) {
            this.btnContrast.addEventListener("click", () =>
                this.toggleHighContrast()
            );
        }
    }

    updateScaleFromSlider() {
        if (!this.targetEl || !this.scaleSlider) return;

        const value = parseFloat(this.scaleSlider.value || "0.4");
        const scale = `${value} ${value} ${value}`;
        this.targetEl.setAttribute("scale", scale);
    }

    toggleHighContrast() {
        this.isHighContrast = !this.isHighContrast;
        document.body.classList.toggle("high-contrast", this.isHighContrast);

        if (this.btnContrast) {
            this.btnContrast.textContent = `High Contrast: ${
                this.isHighContrast ? "On" : "Off"
            }`;
        }
        if (!this._soundStarted) {
            this._soundStarted = true;
            const audioEl = document.getElementById("helmetSound");
            console.log("audioEl", audioEl);
            if (audioEl) {
                audioEl.pause();
                audioEl.currentTime = 0;
                audioEl.play().catch((e) => console.warn("Audio play error", e));
            } else {
                console.warn("pipeSound element not found");
            }
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
                if (el.id === "helmet") {
                    el.removeAttribute("material");
                }
            }
        });
    }
}

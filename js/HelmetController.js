export class HelmetController {
    constructor(helmetEl, audioEl) {
        this.helmetEl = helmetEl;
        this.audioEl = audioEl;
    }

    init() {
        if (!this.helmetEl || !this.audioEl) {
            console.warn("HelmetController: missing helmet or audio element");
            return;
        }
        this.helmetEl.addEventListener("click", () => {
            this.playClickSound();
        });
    }

    playClickSound() {
        const audio = this.audioEl;
        if (!audio) return;
        audio.pause();
        audio.currentTime = 0;

        audio.play().catch((err) => {
            console.warn("Helmet click sound play error:", err);
        });
    }
}

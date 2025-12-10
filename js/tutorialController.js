export class TutorialController {
    /**
     * @param {HTMLElement} tutorialEl
     * @param {HTMLElement} closeBtnEl
     */
    constructor(tutorialEl, closeBtnEl) {
        this.tutorialEl = tutorialEl;
        this.closeBtnEl = closeBtnEl;
        this._isVisible = true;
    }

    init() {
        if (!this.tutorialEl || !this.closeBtnEl) return;

        this.closeBtnEl.addEventListener("click", () => {
            this.hide();
        });
        this.show();
    }

    show() {
        if (!this.tutorialEl) return;
        this.tutorialEl.classList.remove("hidden");
        this._isVisible = true;
    }

    hide() {
        if (!this.tutorialEl) return;
        this.tutorialEl.classList.add("hidden");
        this._isVisible = false;
    }

    get isVisible() {
        return this._isVisible;
    }
}

import { registerToggleColorComponent } from "./components/toggleColor.js";
import { UIController } from "./uiController.js";
import { TutorialController } from "./tutorialController.js";

export class ARApp {
    constructor() {
        this.sceneEl = document.querySelector("a-scene");
        this.markerRoot = document.getElementById("markerRoot");
        this.pipeEl = document.getElementById("pipe");

        this.tutorialEl = document.getElementById("tutorial");
        this.tutorialCloseBtn = document.getElementById("btnTutorialClose");
    }

    init() {
        if (!window.AFRAME) {
            console.error("A-Frame is not loaded");
            return;
        }
        registerToggleColorComponent();

        const tutorialController = new TutorialController(this.tutorialEl, this.tutorialCloseBtn);
        tutorialController.init();

        const uiController = new UIController({ pipeEl: this.pipeEl });
        uiController.init();

    }
}

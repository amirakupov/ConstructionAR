import { registerToggleColorComponent } from "./components/toggleColor.js";
import { UIController } from "./uiController.js";
import { TutorialController } from "./tutorialController.js";
import {registerDragRotateComponent} from "./components/registerDragRotateComponent.js";
import {registerTapToPlaceComponent} from "./components/registerTapToPlace.js";
import {HelmetController} from "./HelmetController.js";

export class ARApp {
    constructor() {
        this.sceneEl = document.querySelector("a-scene");
        this.markerRoot = document.getElementById("markerRoot");
        this.helmetEl = document.getElementById("helmet");

        this.tutorialEl = document.getElementById("tutorial");
        this.tutorialCloseBtn = document.getElementById("btnTutorialClose");
    }

    init() {
        if (!window.AFRAME) {
            console.error("A-Frame is not loaded");
            return;
        }
        registerToggleColorComponent();
        registerDragRotateComponent();
        registerTapToPlaceComponent();


        const tutorialController = new TutorialController(this.tutorialEl, this.tutorialCloseBtn);
        tutorialController.init();

        const uiController = new UIController({ targetEl: this.helmetEl });
        uiController.init();

        const helmetSoundEl = document.getElementById("helmetSound");
        console.log("helmetEl =", this.helmetEl);
        console.log("helmetSoundEl =", helmetSoundEl);

        const helmetController = new HelmetController(this.helmetEl, helmetSoundEl);
        helmetController.init();


    }
}

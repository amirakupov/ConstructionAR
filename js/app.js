import { ARApp } from "./arApp.js";

window.addEventListener("DOMContentLoaded", () => {
    const app = new ARApp();
    app.init();
});
window.addEventListener("click", () => {
    const audioEl = document.getElementById("pipeSound");
    if (audioEl) {
        audioEl.muted = true;
        audioEl.play().then(() => {
            audioEl.pause();
            audioEl.currentTime = 0;
            audioEl.muted = false;
            console.log("Audio unlocked");
        }).catch(() => {});
    }
}, { once: true });


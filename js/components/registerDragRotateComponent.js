export function registerDragRotateComponent() {
    AFRAME.registerComponent("drag-rotate", {
        schema: { speed: { default: 0.5 } },

        init: function () {
            this.dragging = false;
            this.prevX = 0;

            this.onMouseDown = this.onMouseDown.bind(this);
            this.onMouseMove = this.onMouseMove.bind(this);
            this.onMouseUp = this.onMouseUp.bind(this);

            window.addEventListener("mousedown", this.onMouseDown);
            window.addEventListener("mousemove", this.onMouseMove);
            window.addEventListener("mouseup", this.onMouseUp);

            window.addEventListener("touchstart", (e) => this.onMouseDown(e.touches[0]));
            window.addEventListener("touchmove", (e) => this.onMouseMove(e.touches[0]));
            window.addEventListener("touchend", this.onMouseUp);
        },

        remove: function () {
            window.removeEventListener("mousedown", this.onMouseDown);
            window.removeEventListener("mousemove", this.onMouseMove);
            window.removeEventListener("mouseup", this.onMouseUp);
            window.removeEventListener("touchstart", this.onMouseDown);
            window.removeEventListener("touchmove", this.onMouseMove);
            window.removeEventListener("touchend", this.onMouseUp);
        },

        onMouseDown: function (event) {
            this.dragging = true;
            this.prevX = event.clientX;
        },

        onMouseMove: function (event) {
            if (!this.dragging) return;
            const deltaX = event.clientX - this.prevX;
            this.prevX = event.clientX;

            const rot = this.el.getAttribute("rotation");
            rot.y += deltaX * this.data.speed;
            this.el.setAttribute("rotation", rot);
        },

        onMouseUp: function () {
            this.dragging = false;
        }
    });
}

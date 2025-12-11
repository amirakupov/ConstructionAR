export function registerTapToPlaceComponent() {
    AFRAME.registerComponent("tap-to-place", {
        schema: { target: { type: "selector" } },

        init: function () {
            this.el.addEventListener("click", (event) => {
                const intersection = event.detail.intersection;
                const target = this.data.target;

                if (!intersection || !target) return;

                const point = intersection.point;
                target.object3D.position.copy(point);
            });
        }
    });
}

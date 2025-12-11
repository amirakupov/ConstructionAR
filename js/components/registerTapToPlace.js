export function registerTapToPlaceComponent() {
    AFRAME.registerComponent("tap-to-place", {
        schema: { target: { type: "selector" } },

        init: function () {
            this.el.addEventListener("click", (event) => {
                console.log("[tap-to-place] click event:", event.detail);

                const target = this.data.target;
                if (!target) {
                    console.warn("[tap-to-place] no target");
                    return;
                }
                const intersection = event.detail.intersection || (event.detail.intersections && event.detail.intersections[0]);

                if (!intersection) {
                    console.warn("[tap-to-place] no intersection in event.detail");
                    return;
                }

                const point = intersection.point;
                console.log("[tap-to-place] placing at:", point);

                target.object3D.position.copy(point);
            });
        }
    });
}

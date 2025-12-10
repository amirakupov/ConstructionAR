export function registerToggleColorComponent() {
    AFRAME.registerComponent("toggle-color", {
        schema: { type: "color", default: "#24CAFF" },
        init: function () {
            const el = this.el;
            const originalColor =
                (el.getAttribute("material") || {}).color || "#FFFFFF";
            const altColor = this.data;
            let toggled = false;

            el.addEventListener("click", () => {
                toggled = !toggled;
                el.setAttribute(
                    "material",
                    "color",
                    toggled ? altColor : originalColor
                );
            });
        },
    });
}

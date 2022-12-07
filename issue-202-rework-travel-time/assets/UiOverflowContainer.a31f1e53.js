import { aw as defineComponent, aM as ref, az as openBlock, aA as createElementBlock, aD as createBaseVNode, aN as renderSlot } from "./vendor.8ff45f1e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiOverflowContainer",
  setup(__props, { expose }) {
    expose();
    const scrollBar = ref(null);
    const currentScrollPosition = ref(0);
    function scroll(amount) {
      var _a, _b, _c, _d;
      const currentScroll = ((_a = scrollBar.value) == null ? void 0 : _a.scrollLeft) || 0;
      (_b = scrollBar.value) == null ? void 0 : _b.scrollTo({
        left: currentScroll + amount,
        behavior: "smooth"
      });
      const maxScroll = (((_c = scrollBar.value) == null ? void 0 : _c.scrollWidth) || 0) - (((_d = scrollBar.value) == null ? void 0 : _d.clientWidth) || 0);
      currentScrollPosition.value = currentScrollPosition.value.valueOf() + amount;
      if (currentScrollPosition.value < 0) {
        currentScrollPosition.value = 0;
      } else if (currentScrollPosition.value > maxScroll) {
        currentScrollPosition.value = maxScroll;
      }
      console.log(currentScrollPosition.value);
    }
    const __returned__ = { scrollBar, currentScrollPosition, scroll };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "relative" };
const _hoisted_2 = {
  ref: "scrollBar",
  class: "flex p-0 gap-3 items-start overflow-x-auto scrollbar-hide"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ], 512),
    createBaseVNode("button", {
      class: "absolute inset-y-0 right-0 bg-blue-600 w-6 h-6",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.scroll(200))
    }, " R "),
    createBaseVNode("button", {
      class: "absolute inset-y-0 left-0 bg-blue-600 w-6 h-6",
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.scroll(-200))
    }, " L ")
  ]);
}
_sfc_main.__file = "src/components/ui/UiOverflowContainer.vue";
const UiOverflowContainer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiOverflowContainer.vue"]]);
export {
  UiOverflowContainer as U
};

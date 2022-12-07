import { aw as defineComponent, aL as computed, az as openBlock, aA as createElementBlock, aB as createBaseVNode, aK as toDisplayString, aJ as normalizeClass } from "./vendor.e2e3fcbc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconLine",
  props: {
    line: {
      type: Number,
      required: true
    },
    size: String
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const lineText = computed(() => {
      if (props.size == "s")
        return props.line;
      else
        return `T${props.line}`;
    });
    const __returned__ = { props, lineText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["flex items-center rounded-full justify-center", {
      "w-4 h-4": _ctx.$props.size === "s",
      "w-6 h-6": _ctx.$props.size === "m",
      "w-8 h-8": _ctx.$props.size === "l",
      "w-12 h-12": _ctx.$props.size === "xl",
      "bg-indigo-600": _ctx.$props.line == 1,
      "bg-pink-600": _ctx.$props.line == 2,
      "bg-emerald-600": _ctx.$props.line == 3,
      "bg-purple-600": _ctx.$props.line == 4
    }])
  }, [
    createBaseVNode("div", {
      class: normalizeClass(["font-dm-sans font-bold text-white text-xl items-end", {
        "font-normal text-xs": _ctx.$props.size === "s",
        "font-bold text-xs": _ctx.$props.size === "m",
        "font-bold text-lg": _ctx.$props.size === "l",
        "font-bold text-xl": _ctx.$props.size === "xl"
      }])
    }, toDisplayString($setup.lineText), 3)
  ], 2);
}
_sfc_main.__file = "src/components/ui/icons/IconLine.vue";
const IconLine = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/icons/IconLine.vue"]]);
export {
  IconLine as I
};

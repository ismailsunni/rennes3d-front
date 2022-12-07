import { aw as defineComponent, az as openBlock, aA as createElementBlock, aJ as normalizeClass, aB as createBaseVNode, aK as toDisplayString, aE as createCommentVNode, aI as createVNode } from "./vendor.e2e3fcbc.js";
import { I as IconLine } from "./IconLine.e6b7576b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "IconLineEllipse",
  props: {
    lineNumber: {
      type: Number,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "4.5",
  cy: "5",
  r: "4",
  transform: "rotate(90 4.5 5)"
}, null, -1);
const _hoisted_2$2 = [
  _hoisted_1$2
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    class: normalizeClass(["stroke-1", {
      "fill-indigo-600 stroke-indigo-50": $setup.props.lineNumber == 1,
      "fill-pink-600 stroke-pink-50": $setup.props.lineNumber == 2,
      "fill-emerald-600 stroke-emerald-50": $setup.props.lineNumber == 3,
      "fill-purple-600 stroke-purple-50": $setup.props.lineNumber == 4
    }]),
    width: "9",
    height: "10",
    viewBox: "0 0 9 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _hoisted_2$2, 2);
}
_sfc_main$2.__file = "src/components/ui/icons/IconLineEllipse.vue";
const IconLineEllipse = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/icons/IconLineEllipse.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "IconLineRectangle",
  props: {
    lineNumber: {
      type: Number,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("rect", {
  y: "0.5",
  width: "1"
}, null, -1);
const _hoisted_2$1 = [
  _hoisted_1$1
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    class: normalizeClass({
      "bg-indigo-300": $setup.props.lineNumber == 1,
      "bg-pink-300": $setup.props.lineNumber == 2,
      "bg-emerald-300": $setup.props.lineNumber == 3,
      "bg-purple-300": $setup.props.lineNumber == 4
    }),
    width: "1",
    viewBox: "0 0 1 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _hoisted_2$1, 2);
}
_sfc_main$1.__file = "src/components/ui/icons/IconLineRectangle.vue";
const IconLineRectangle = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/icons/IconLineRectangle.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiTravelTime",
  props: {
    newDuration: Number,
    oldDuration: Number,
    lineNumber: {
      type: Number,
      required: true
    },
    startStation: String,
    endStation: String
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, IconLine, IconLineEllipse, IconLineRectangle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col justify-center items-start pt-3 pl-3 pb-3 pr-0" };
const _hoisted_2 = { class: "flex items-center px-0.5 py-0 gap-1 rounded" };
const _hoisted_3 = { class: "font-bold text-base leading-5" };
const _hoisted_4 = { class: "flex flex-col items-start p-0 gap-1" };
const _hoisted_5 = { class: "font-normal text-xs leading-4 text-neutral-500" };
const _hoisted_6 = { class: "flex flex-col items-center rounded p-0" };
const _hoisted_7 = { class: "flex flex-col items-start p-0 gap-1 grow" };
const _hoisted_8 = { class: "flex flex-col justify-center items-start p-0 gap-1.5" };
const _hoisted_9 = { class: "font-medium text-sm leading-5" };
const _hoisted_10 = { class: "font-medium text-sm leading-5" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["flex items-center px-3 py-0 gap-2.5 rounded font-dm-sans", {
      "bg-indigo-100 border-indigo-50": $setup.props.lineNumber == 1,
      "bg-pink-100 border-pink-50": $setup.props.lineNumber == 2,
      "bg-emerald-100 border-emerald-50": $setup.props.lineNumber == 3,
      "bg-purple-100 border-purple-50": $setup.props.lineNumber == 4
    }])
  }, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, toDisplayString($setup.props.newDuration) + " min ", 1),
        createCommentVNode(" TODO: Information Icon here ")
      ]),
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", _hoisted_5, " au lie de " + toDisplayString($setup.props.oldDuration), 1)
      ])
    ]),
    createBaseVNode("div", _hoisted_6, [
      createVNode($setup["IconLineEllipse"], {
        lineNumber: $setup.props.lineNumber
      }, null, 8, ["lineNumber"]),
      createVNode($setup["IconLineRectangle"], {
        class: "grow",
        lineNumber: $setup.props.lineNumber
      }, null, 8, ["lineNumber"]),
      createVNode($setup["IconLineEllipse"], {
        lineNumber: $setup.props.lineNumber
      }, null, 8, ["lineNumber"])
    ]),
    createBaseVNode("div", _hoisted_7, [
      createBaseVNode("div", _hoisted_8, [
        createBaseVNode("div", _hoisted_9, toDisplayString($setup.props.startStation), 1),
        createBaseVNode("div", _hoisted_10, toDisplayString($setup.props.endStation), 1)
      ])
    ]),
    createVNode($setup["IconLine"], {
      line: $props.lineNumber,
      size: "l"
    }, null, 8, ["line"])
  ], 2);
}
_sfc_main.__file = "src/components/ui/UiTravelTime.vue";
const UiTravelTime = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiTravelTime.vue"]]);
export {
  UiTravelTime as U
};

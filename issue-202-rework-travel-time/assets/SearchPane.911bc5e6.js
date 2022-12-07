import { d as defineComponent, u as useCssVars, r as ref, a9 as toRefs, aa as useRouter, o as openBlock, e as createElementBlock, f as createVNode, w as withCtx, a as unref, I as Icon, n as normalizeClass, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, q as createBlock, h as createCommentVNode, V as markRaw, aR as useFocus, k as watch, aS as refDebounced, c as computed, y as withDirectives, ac as vModelText, m as withKeys, a1 as withModifiers, _ as __vitePreload, aT as flexsearch_bundle } from "./vendor.bcdf19e2.js";
import { u as useStoryStore } from "./story.0e6ea0db.js";
import { B as BaseEmpty } from "./BaseEmpty.23bdcc84.js";
import { o as onKeyboardShortcut } from "./bundle-main.5fff5e13.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.8fe17d0e.js";
import "./GenericMountStory.e19aaad1.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[\xE0\xE1\xE2\xE3\xE4\xE5]"), regex_e = regex("[\xE8\xE9\xEA\xEB]"), regex_i = regex("[\xEC\xED\xEE\xEF]"), regex_o = regex("[\xF2\xF3\xF4\xF5\xF6\u0151]"), regex_u = regex("[\xF9\xFA\xFB\xFC\u0171]"), regex_y = regex("[\xFD\u0177\xFF]"), regex_n = regex("\xF1"), regex_c = regex("[\xE7c]"), regex_s = regex("\xDF"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", \u00DF: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
var charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
var language = { filter, stemmer, matcher };
const _hoisted_1$1 = ["data-selected"];
const _hoisted_2$1 = { class: "htw-flex-1" };
const _hoisted_3 = { class: "htw-flex" };
const _hoisted_4 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_5 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "7333f29c": __props.result.iconColor
    }));
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      router.push(props.result.route);
      emit("close");
    });
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        createVNode(BaseListItemLink, {
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, {
          default: withCtx(() => {
            var _a, _b;
            return [
              createVNode(unref(Icon), {
                icon: (_a = __props.result.icon) != null ? _a : defaultIcons[__props.result.kind],
                class: normalizeClass(["htw-w-4 htw-h-4", [
                  !unref(selected) ? [
                    __props.result.iconColor ? "bind-icon-color" : {
                      "htw-text-primary-500": __props.result.kind === "story",
                      "htw-text-gray-500": __props.result.kind === "variant"
                    }
                  ] : []
                ]])
              }, null, 8, ["icon", "class"]),
              createBaseVNode("div", _hoisted_2$1, [
                createBaseVNode("div", _hoisted_3, [
                  createTextVNode(toDisplayString(__props.result.title) + " ", 1),
                  createBaseVNode("span", _hoisted_4, toDisplayString(kindLabels[__props.result.kind]), 1)
                ]),
                ((_b = __props.result.path) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.result.path, (p, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "htw-flex htw-items-center htw-gap-0.5"
                    }, [
                      index > 0 ? (openBlock(), createBlock(unref(Icon), {
                        key: 0,
                        icon: "carbon:chevron-right",
                        class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", null, toDisplayString(p), 1)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])
            ];
          }),
          _: 1
        }, 8, ["to", "is-active"])
      ], 8, _hoisted_1$1);
    };
  }
});
var SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3fb261e4"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"m":[0,1],"me":[0,1],"met":[0,1],"metf":[0,1],"metfo":[0,1],"metfor":[0,1],"metfork":[0,1],"t":[2,3,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"tr":[2,3],"tra":[2,3],"traf":[2,3],"trafe":[2,3],"trafel":[2,3],"l":[4,5,25,26,27,28,29],"le":[4,5,25,26,27,28,29],"lem":[4,5,25,26,27,28,29],"leme":[4,5,25,26,27,28,29],"o":[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"of":[17,18],"ofe":[17,18],"ofer":[17,18],"oferf":[17,18],"oferfl":[17,18],"oferflo":[17,18],"oferflof":[17,18],"ta":[30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"tal":[30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"talf":[30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"talfe":[30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"talfem":[30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"talfemt":[30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]},{"f":[0,1,4,5,19,20,36,37,38,44,46],"fe":[0,1,4,5,44],"fek":[0,1,4,5],"feko":[0,1,4,5],"fekor":[0,1,4,5],"fekore":[0,1,4,5],"fekores":[0,1],"te":[2,3,32],"tem":[2,3],"teme":[2,3],"p":[6,7,8,9,31,33,34,42,43],"po":[6,7,8,9,33,42,43],"pot":[6,7,8,9],"poto":[6,7,8,9],"potom":[6,7,8,9],"l":[10,11,39,40],"le":[10,11,39,40],"lem":[10,11,40],"leme":[10,11,40],"m":[12,13,14,15,16,35],"me":[12,13,14,15,16],"met":[12,13,14,15,16],"metf":[12,13,14,15,16],"metfo":[12,13,14,15,16],"metfor":[12,13,14,15,16],"metfork":[12,13,14,15,16],"k":[17,18],"ko":[17,18],"kom":[17,18],"komt":[17,18],"komta":[17,18],"komtam":[17,18],"komtame":[17,18],"komtamer":[17,18],"fo":[19,20,36,37,38,46],"fot":[19,20],"foto":[19,20],"t":[21,22,23,24],"tr":[21,22,23,24,41],"tra":[21,22,23,24],"tram":[21,22],"tramp":[21,22],"trampo":[21,22],"trampos":[21,22],"traf":[23,24],"trafe":[23,24],"trafel":[23,24],"e":[25,26,27,28,29,45],"ek":[25,26,27,28,29,45],"eko":[25,26,27,28,29],"ekom":[25,26,27,28,29],"pa":[31,34],"pak":[31],"pakr":[31],"pakro":[31],"pakrom":[31],"pakromt":[31],"tes":[32],"test":[32],"por":[33,42,43],"port":[33,42,43],"porte":[33,42,43],"porter":[33,42,43],"pat":[34],"pate":[34],"patem":[34],"patemk":[34],"ma":[35],"mar":[35],"mark":[35],"marke":[35],"markem":[35],"fom":[36,37,38],"fomt":[36,37,38],"let":[39],"lete":[39],"leter":[39],"tro":[41],"trop":[41],"fet":[44],"ekt":[45],"fol":[46]},{"t":[1,5,7,10,11,18],"te":[1,5,7,10,11,18,21,22,23,24],"tef":[1,3,5],"tefa":[1,3,5],"tefao":[1,3,5],"tefaol":[1,3,5],"tefaolt":[1,3,5],"tes":[7,10,11,18],"test":[7,18],"e":[8,9,40],"ek":[8,9,40],"eko":[8,9],"ekom":[8,9],"tesk":[10,11],"teskr":[10,11],"teskre":[10,11],"teskrep":[10,11],"teskrept":[10,11],"teskrepte":[10,11],"teskrepteo":[10,11],"teskrepteom":[10,11],"f":[12,13,14,15,16,43],"fe":[12,13,14,15,16,37,43],"fek":[12,13,14,15,16,37],"feko":[12,13,14,15,16],"fekor":[12,13,14,15,16],"fekore":[12,13,14,15,16],"k":[19,20,31,32,33,46],"ka":[19,20],"kal":[19,20],"kale":[19,20],"kaler":[19,20],"kalere":[19,20],"tet":[21,22],"tetl":[21,22],"tetle":[21,22],"tem":[23,24],"teme":[23,24],"s":[26,36,39,41],"sm":[26],"sma":[26],"smal":[26],"m":[27],"me":[27],"met":[27],"mete":[27],"meteo":[27],"meteom":[27],"la":[28],"lar":[28],"lark":[28],"larke":[28],"es":[29],"est":[29],"estr":[29],"estra":[29],"ko":[31,32,33,46],"kol":[31,32,33],"kolo":[31,32,33],"kolor":[31,32,33],"se":[36],"ses":[36],"sese":[36],"fekt":[37],"fa":[38],"fam":[38],"fame":[38],"famel":[38],"famele":[38],"sp":[39],"spa":[39],"spak":[39],"spake":[39],"spakem":[39],"spakemk":[39],"ekt":[40],"sa":[41],"sat":[41],"sato":[41],"satof":[41],"r":[42],"ra":[42],"rat":[42],"rate":[42],"rateo":[42],"rateos":[42],"fet":[43],"kom":[46],"komf":[46],"komfe":[46],"komfek":[46]},{"a":[9],"am":[9],"amt":[9],"tef":[11,20,22,24],"tefa":[11,20,22,24],"tefao":[11,20,22,24],"tefaol":[11,20,22,24],"tefaolt":[11,20,22,24],"mo":[14],"l":[15,16],"le":[15,16],"lem":[15,16],"leme":[15,16],"t":[20],"te":[20],"la":[29],"lar":[29],"lark":[29],"larke":[29]},{"t":[9],"te":[9],"tes":[9],"test":[9],"om":[14],"ome":[14],"omet":[14]},{"mo":[13,15],"p":[16],"pl":[16],"pla":[16],"plam":[16]},{"e":[13,15],"em":[13],"emf":[13],"emfo":[13],"ek":[15],"eko":[15],"ekom":[15]},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-components-home-networkfigures-story-vue", "kind": "story" }, "1": { "id": "src-components-home-networkfigures-story-vue:_default", "kind": "variant" }, "2": { "id": "src-components-home-traveltimes-story-vue", "kind": "story" }, "3": { "id": "src-components-home-traveltimes-story-vue:_default", "kind": "variant" }, "4": { "id": "src-components-line-linefigures-story-vue", "kind": "story" }, "5": { "id": "src-components-line-linefigures-story-vue:src-components-line-linefigures-story-vue-0", "kind": "variant" }, "6": { "id": "src-components-ui-uibutton-story-vue", "kind": "story" }, "7": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-0", "kind": "variant" }, "8": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-1", "kind": "variant" }, "9": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-2", "kind": "variant" }, "10": { "id": "src-components-ui-uilinedescription-story-vue", "kind": "story" }, "11": { "id": "src-components-ui-uilinedescription-story-vue:_default", "kind": "variant" }, "12": { "id": "src-components-ui-uinetworkfigure-story-vue", "kind": "story" }, "13": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-0", "kind": "variant" }, "14": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-1", "kind": "variant" }, "15": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-2", "kind": "variant" }, "16": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-3", "kind": "variant" }, "17": { "id": "src-components-ui-uioverflowcontainer-story-vue", "kind": "story" }, "18": { "id": "src-components-ui-uioverflowcontainer-story-vue:src-components-ui-uioverflowcontainer-story-vue-0", "kind": "variant" }, "19": { "id": "src-components-ui-uiphotogalery-story-vue", "kind": "story" }, "20": { "id": "src-components-ui-uiphotogalery-story-vue:_default", "kind": "variant" }, "21": { "id": "src-components-ui-uitrambustitle-story-vue", "kind": "story" }, "22": { "id": "src-components-ui-uitrambustitle-story-vue:_default", "kind": "variant" }, "23": { "id": "src-components-ui-uitraveltime-story-vue", "kind": "story" }, "24": { "id": "src-components-ui-uitraveltime-story-vue:_default", "kind": "variant" }, "25": { "id": "src-components-ui-icons-iconline-story-vue", "kind": "story" }, "26": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-0", "kind": "variant" }, "27": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-1", "kind": "variant" }, "28": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-2", "kind": "variant" }, "29": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-3", "kind": "variant" }, "30": { "id": "tailwind", "kind": "story" }, "31": { "id": "tailwind:background-color", "kind": "variant" }, "32": { "id": "tailwind:text-color", "kind": "variant" }, "33": { "id": "tailwind:border-color", "kind": "variant" }, "34": { "id": "tailwind:padding", "kind": "variant" }, "35": { "id": "tailwind:margin", "kind": "variant" }, "36": { "id": "tailwind:font-size", "kind": "variant" }, "37": { "id": "tailwind:font-weight", "kind": "variant" }, "38": { "id": "tailwind:font-family", "kind": "variant" }, "39": { "id": "tailwind:letter-spacing", "kind": "variant" }, "40": { "id": "tailwind:line-height", "kind": "variant" }, "41": { "id": "tailwind:drop-shadow", "kind": "variant" }, "42": { "id": "tailwind:border-radius", "kind": "variant" }, "43": { "id": "tailwind:border-width", "kind": "variant" }, "44": { "id": "tailwind:width", "kind": "variant" }, "45": { "id": "tailwind:height", "kind": "variant" }, "46": { "id": "tailwind:full-config", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" No results ");
const _hoisted_2 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.b40df257.js"), true ? ["assets/search-docs-data.b40df257.js","assets/vendor.bcdf19e2.js"] : void 0);
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundle.exports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor,
        type
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      var _a;
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...(_a = story.file.path) != null ? _a : [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor,
        type
      };
    }
    const results = computed(() => {
      const list = [...titleResults.value];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const selectedIndex = ref(0);
    watch(results, () => {
      selectedIndex.value = 0;
    });
    function selectNext() {
      selectedIndex.value++;
      if (selectedIndex.value > results.value.length - 1) {
        selectedIndex.value = 0;
      }
    }
    function selectPrevious() {
      selectedIndex.value--;
      if (selectedIndex.value < 0) {
        selectedIndex.value = results.value.length - 1;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => selectNext(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => selectPrevious(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !unref(results).length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            _hoisted_1
          ]),
          _: 1
        })) : unref(results).length ? (openBlock(), createElementBlock("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === selectedIndex.value,
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};

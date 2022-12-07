import { d as defineComponent, u as useCssVars, r as ref, a9 as toRefs, aa as useRouter, o as openBlock, e as createElementBlock, f as createVNode, w as withCtx, a as unref, I as Icon, n as normalizeClass, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, q as createBlock, h as createCommentVNode, V as markRaw, aS as useFocus, k as watch, aT as refDebounced, c as computed, y as withDirectives, ac as vModelText, m as withKeys, a1 as withModifiers, _ as __vitePreload, aU as flexsearch_bundle } from "./vendor.8a095ad9.js";
import { u as useStoryStore } from "./story.68f07257.js";
import { B as BaseEmpty } from "./BaseEmpty.366848bc.js";
import { o as onKeyboardShortcut } from "./bundle-main.92d7001f.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.764cdfc1.js";
import "./GenericMountStory.5118f90c.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"m":[0,1],"me":[0,1],"met":[0,1],"metf":[0,1],"metfo":[0,1],"metfor":[0,1],"metfork":[0,1],"l":[2,3],"le":[2,3],"lem":[2,3],"leme":[2,3],"o":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"t":[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"ta":[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"tal":[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"talf":[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"talfe":[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"talfem":[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"talfemt":[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]},{"f":[0,1,2,3,28,29,40,41,42,48,50],"fe":[0,1,2,3,48],"fek":[0,1,2,3],"feko":[0,1,2,3],"fekor":[0,1,2,3],"fekore":[0,1,2,3],"fekores":[0,1],"p":[4,5,6,7,8,9,10,11,12,13,14,15,16,35,37,38,46,47],"po":[4,5,6,7,8,9,10,11,12,13,14,15,16,37,46,47],"pot":[4,5,6,7,8,9,10,11,12,13,14,15,16],"poto":[4,5,6,7,8,9,10,11,12,13,14,15,16],"potom":[4,5,6,7,8,9,10,11,12,13,14,15,16],"e":[17,18,19,20,49],"ek":[17,18,19,20,49],"eko":[17,18,19,20],"ekom":[17,18,19,20],"l":[21,22,43,44],"le":[21,22,43,44],"lem":[21,22,44],"leme":[21,22,44],"m":[23,24,25,26,27,39],"me":[23,24,25,26,27],"met":[23,24,25,26,27],"metf":[23,24,25,26,27],"metfo":[23,24,25,26,27],"metfor":[23,24,25,26,27],"metfork":[23,24,25,26,27],"fo":[28,29,40,41,42,50],"fot":[28,29],"foto":[28,29],"t":[30,31,32,33],"tr":[30,31,32,33,45],"tra":[30,31,32,33],"tram":[30,31],"tramp":[30,31],"trampo":[30,31],"trampos":[30,31],"traf":[32,33],"trafe":[32,33],"trafel":[32,33],"pa":[35,38],"pak":[35],"pakr":[35],"pakro":[35],"pakrom":[35],"pakromt":[35],"te":[36],"tes":[36],"test":[36],"por":[37,46,47],"port":[37,46,47],"porte":[37,46,47],"porter":[37,46,47],"pat":[38],"pate":[38],"patem":[38],"patemk":[38],"ma":[39],"mar":[39],"mark":[39],"marke":[39],"markem":[39],"fom":[40,41,42],"fomt":[40,41,42],"let":[43],"lete":[43],"leter":[43],"tro":[45],"trop":[45],"fet":[48],"ekt":[49],"fol":[50]},{"t":[1,3,21,22],"te":[1,3,21,22,30,31,32,33],"tef":[1,3],"tefa":[1,3],"tefao":[1,3],"tefaol":[1,3],"tefaolt":[1,3],"f":[5,6,7,14,23,24,25,26,27,47],"fl":[5,6,7,14],"flo":[5,6,7,14],"floa":[5,6,7,14],"float":[5,6,7,14],"floate":[5,6,7,14],"floatem":[5,6,7,14],"floatemk":[5,6,7,14],"pr":[8,9,10,15],"pre":[8,9,10,15],"prem":[8,9,10,15],"prema":[8,9,10,15],"premar":[8,9,10,15],"premare":[8,9,10,15],"s":[11,12,13,16,40,43,45],"se":[11,12,13,16,40],"sek":[11,12,13,16],"seko":[11,12,13,16],"sekom":[11,12,13,16],"sekomt":[11,12,13,16],"sekomta":[11,12,13,16],"sekomtar":[11,12,13,16],"sekomtare":[11,12,13,16],"p":[17,18,19,20],"po":[17,18,19,20],"pot":[17,18,19,20],"poto":[17,18,19,20],"potom":[17,18,19,20],"tes":[21,22],"tesk":[21,22],"teskr":[21,22],"teskre":[21,22],"teskrep":[21,22],"teskrept":[21,22],"teskrepte":[21,22],"teskrepteo":[21,22],"teskrepteom":[21,22],"fe":[23,24,25,26,27,41,47],"fek":[23,24,25,26,27,41],"feko":[23,24,25,26,27],"fekor":[23,24,25,26,27],"fekore":[23,24,25,26,27],"k":[28,29,35,36,37,50],"ka":[28,29],"kal":[28,29],"kale":[28,29],"kaler":[28,29],"kalere":[28,29],"tet":[30,31],"tetl":[30,31],"tetle":[30,31],"tem":[32,33],"teme":[32,33],"ko":[35,36,37,50],"kol":[35,36,37],"kolo":[35,36,37],"kolor":[35,36,37],"ses":[40],"sese":[40],"fekt":[41],"fa":[42],"fam":[42],"fame":[42],"famel":[42],"famele":[42],"sp":[43],"spa":[43],"spak":[43],"spake":[43],"spakem":[43],"spakemk":[43],"e":[44],"ek":[44],"ekt":[44],"sa":[45],"sat":[45],"sato":[45],"satof":[45],"r":[46],"ra":[46],"rat":[46],"rate":[46],"rateo":[46],"rateos":[46],"fet":[47],"kom":[50],"komf":[50],"komfe":[50],"komfek":[50]},{"e":[5,6,8,9,11,12],"ek":[5,6,8,9,11,12],"eko":[5,6,8,9,11,12],"ekom":[5,6,8,9,11,12],"t":[7,10,13,18,29],"te":[7,10,13,18,29],"tes":[7,10,13,18],"test":[7,10,13,18],"s":[14,15],"sm":[14,15,16],"sma":[14,15,16],"smal":[14,15,16],"tef":[22,29,31,33],"tefa":[22,29,31,33],"tefao":[22,29,31,33],"tefaol":[22,29,31,33],"tefaolt":[22,29,31,33],"mo":[25],"l":[26,27],"le":[26,27],"lem":[26,27],"leme":[26,27]},{"t":[5,6,8,9,11,12],"te":[5,6,8,9,11,12],"tes":[5,6,8,9,11,12],"test":[5,6,8,9,11,12],"a":[20],"am":[20],"amt":[20],"om":[25],"ome":[25],"omet":[25]},{"m":[5,8,11],"mo":[5,8,11,24,26],"mot":[5,8,11],"mote":[5,8,11],"motef":[5,8,11],"t":[20],"te":[20],"tes":[20],"test":[20],"p":[27],"pl":[27],"pla":[27],"plam":[27]},{"e":[24,26],"em":[24],"emf":[24],"emfo":[24],"ek":[26],"eko":[26],"ekom":[26]},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-components-home-networkfigures-story-vue", "kind": "story" }, "1": { "id": "src-components-home-networkfigures-story-vue:_default", "kind": "variant" }, "2": { "id": "src-components-line-linefigures-story-vue", "kind": "story" }, "3": { "id": "src-components-line-linefigures-story-vue:src-components-line-linefigures-story-vue-0", "kind": "variant" }, "4": { "id": "src-components-ui-uibutton-story-vue", "kind": "story" }, "5": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-0", "kind": "variant" }, "6": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-1", "kind": "variant" }, "7": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-2", "kind": "variant" }, "8": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-3", "kind": "variant" }, "9": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-4", "kind": "variant" }, "10": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-5", "kind": "variant" }, "11": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-6", "kind": "variant" }, "12": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-7", "kind": "variant" }, "13": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-8", "kind": "variant" }, "14": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-9", "kind": "variant" }, "15": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-10", "kind": "variant" }, "16": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-11", "kind": "variant" }, "17": { "id": "src-components-ui-uiiconbutton-story-vue", "kind": "story" }, "18": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-0", "kind": "variant" }, "19": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-1", "kind": "variant" }, "20": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-2", "kind": "variant" }, "21": { "id": "src-components-ui-uilinedescription-story-vue", "kind": "story" }, "22": { "id": "src-components-ui-uilinedescription-story-vue:_default", "kind": "variant" }, "23": { "id": "src-components-ui-uinetworkfigure-story-vue", "kind": "story" }, "24": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-0", "kind": "variant" }, "25": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-1", "kind": "variant" }, "26": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-2", "kind": "variant" }, "27": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-3", "kind": "variant" }, "28": { "id": "src-components-ui-uiphotogalery-story-vue", "kind": "story" }, "29": { "id": "src-components-ui-uiphotogalery-story-vue:_default", "kind": "variant" }, "30": { "id": "src-components-ui-uitrambustitle-story-vue", "kind": "story" }, "31": { "id": "src-components-ui-uitrambustitle-story-vue:_default", "kind": "variant" }, "32": { "id": "src-components-ui-uitraveltime-story-vue", "kind": "story" }, "33": { "id": "src-components-ui-uitraveltime-story-vue:_default", "kind": "variant" }, "34": { "id": "tailwind", "kind": "story" }, "35": { "id": "tailwind:background-color", "kind": "variant" }, "36": { "id": "tailwind:text-color", "kind": "variant" }, "37": { "id": "tailwind:border-color", "kind": "variant" }, "38": { "id": "tailwind:padding", "kind": "variant" }, "39": { "id": "tailwind:margin", "kind": "variant" }, "40": { "id": "tailwind:font-size", "kind": "variant" }, "41": { "id": "tailwind:font-weight", "kind": "variant" }, "42": { "id": "tailwind:font-family", "kind": "variant" }, "43": { "id": "tailwind:letter-spacing", "kind": "variant" }, "44": { "id": "tailwind:line-height", "kind": "variant" }, "45": { "id": "tailwind:drop-shadow", "kind": "variant" }, "46": { "id": "tailwind:border-radius", "kind": "variant" }, "47": { "id": "tailwind:border-width", "kind": "variant" }, "48": { "id": "tailwind:width", "kind": "variant" }, "49": { "id": "tailwind:height", "kind": "variant" }, "50": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.24cfb074.js"), true ? ["assets/search-docs-data.24cfb074.js","assets/vendor.8a095ad9.js"] : void 0);
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

// ==UserScript==
// @name         原神Wiki辅助工具
// @namespace    https://dev.songe.li
// @version      1.0.1
// @author       lisonge
// @description  原神 Wiki 辅助工具, 1.显示/隐藏已完成成就
// @license      MIT
// @icon         https://dev.songe.li/favicon.svg
// @homepage     https://github.com/lisonge/op-wiki-plus#readme
// @homepageURL  https://github.com/lisonge/op-wiki-plus#readme
// @supportURL   https://github.com/lisonge/op-wiki-plus/issues
// @updateURL    https://cdn.jsdelivr.net/gh/lisonge/op-wiki-plus@main/dist/op-wiki-plus.user.js
// @include      https://wiki.biligame.com/ys/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.2.31/dist/vue.global.prod.js
// ==/UserScript==

(({ cssTextList = [] }) => {
  cssTextList.forEach((s) => {
    const style = document.createElement("style");
    style.innerText = s;
    style.dataset.source = "vite-plugin-monkey";
    document.head.appendChild(style);
  });
})({
  "cssTextList": [
    ".root-1fdb449b[data-v-2a34b125] {\n  color: black;\n  background-color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n}\n.root-1fdb449b > div[data-v-2a34b125] {\n  background-color: darkgrey;\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n.root-1fdb449b > div[data-v-2a34b125]:last-child {\n  margin-bottom: 0;\n}"
  ]
});

(function(vue) {
  "use strict";
  var App_vue_vue_type_style_index_0_scoped_true_lang = "";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _hoisted_1 = { class: "root-1fdb449b" };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      const switchShowStatus = (show = true) => {
        var _a, _b;
        const display = show ? "block" : "none";
        const catelogList = document.querySelectorAll("#toc > ul  a > span.toctext.checked");
        catelogList.forEach((el) => {
          var _a2;
          const target = (_a2 = el.parentElement) == null ? void 0 : _a2.parentElement;
          if (target) {
            target.style.display = display;
          }
        });
        const mainbodyList = document.querySelectorAll(`#mw-content-text div.bwiki-collection.checked`);
        if (mainbodyList.length > 0) {
          const realList = Array.from((_b = (_a = mainbodyList[0].parentElement) == null ? void 0 : _a.children) != null ? _b : []);
          mainbodyList.forEach((el) => {
            const index = realList.indexOf(el);
            el.style.display = display;
            if (index >= 0) {
              for (let i = index + 1; i < realList.length; i++) {
                const child = realList[i];
                if (!child.classList.contains("bwiki-collection")) {
                  child.style.display = display;
                } else {
                  break;
                }
              }
            }
          });
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("div", {
            onClick: _cache[0] || (_cache[0] = ($event) => switchShowStatus(true))
          }, "\u663E\u793A\u5DF2\u5B8C\u6210\u6210\u5C31"),
          vue.createElementVNode("div", {
            onClick: _cache[1] || (_cache[1] = ($event) => switchShowStatus(false))
          }, "\u9690\u85CF\u5DF2\u5B8C\u6210\u6210\u5C31")
        ]);
      };
    }
  });
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2a34b125"]]);
  const app = document.createElement("div");
  document.body.appendChild(app);
  setTimeout(() => {
    vue.createApp(App).mount(app);
  });
})(Vue);
 

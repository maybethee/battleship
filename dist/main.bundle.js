/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
/* prettier-ignore */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
/* prettier-ignore */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 20px;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 232, 0.762);
  color: beige;
}

button {
  background-color: beige;
  color: rgb(2, 2, 206);
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
}

button:hover {
  background-color: rgb(216, 216, 195);
}

.page-wrapper {
  display: flex;
  flex-flow: column;
  gap: 3rem;
  align-items: center;
}

h1 {
  font-family: "Bungee", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 5rem;
  margin-top: 1rem;
}

.game-start-btn {
  place-self: center;
}

#randomize-ships {
  display: none;
}

.hit {
  background-color: rgb(247, 23, 53);
}

.miss {
  background-color: rgb(161, 161, 255);
}

.human-cell,
.computer-cell {
  border: 3px solid beige;
}

.computer-cell:hover {
  background-color: beige;
}

.ship {
  background-color: rgb(126, 126, 126);
  border: solid 2px rgb(126, 126, 126);
  /* border: solid 2px rgb(126, 126, 126); */
}

.game {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;
}

.game-wrapper {
  display: grid;
  gap: 1rem;
}

.game-over-message {
  position: absolute;
  white-space: pre;
  text-align: center;
  background-color: rgb(99, 35, 35);
  color: beige;
  padding: 1rem;
  border: dashed beige 3px;
  border-radius: 25px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 50%);
}

table {
  width: 400px;
  height: 400px;
}

p {
  font-size: 1.2rem;
  font-weight: 400;
}

.content-wrapper {
  background-color: rgba(25, 25, 162, 0.762);
  padding: 1rem;
  transform-origin: top;
}

.row-2,
#collapse-rules-btn,
.content-wrapper {
  display: none;
}

.rules-ship,
.rules-hit,
.rules-miss {
  display: inline-block;
  width: 20px;
  height: 1rem;
}

.rules-ship {
  background-color: rgb(126, 126, 126);
}

.rules-hit {
  background-color: rgb(247, 23, 53);
}

.rules-miss {
  background-color: rgb(161, 161, 255);
}

.rules-hit,
.rules-miss {
  margin-left: 40px;
}

.rules p {
  text-align: center;
  font-size: 0.8rem;
  line-height: 120%;
  margin-bottom: 0.5rem;
}

.rules p:first-child {
  font-size: 1.1rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
  text-align: center;
}

p,
button,
.game-over-message {
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.game-over-message {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
}

#collapse-rules-btn {
  justify-self: end;
  font-family: sans-serif;
  padding: 0.4rem;
  background-color: rgba(25, 25, 162, 0);
  color: beige;
  height: 35px;
}

#collapse-rules-btn:hover {
  border-radius: 25px;
  background-color: rgba(25, 25, 162, 0.762);
}

/* animations */

.unrolled-btn {
  animation: rotateBack 0.4s ease-out both;
}

.unrolled-div {
  animation: unroll 0.2s ease-in-out both;
}

.collapsed-btn {
  animation: rotate 0.4s ease-out both;
}

.collapsed-div {
  animation: collapse 0.2s ease-in-out both;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}

@keyframes rotateBack {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes unroll {
  from {
    transform: scale(1, 0);
    height: 0;
    opacity: 0;
  }
  to {
    transform: scale(1, 1);
    height: auto;
    opacity: 1;
  }
}

@keyframes collapse {
  from {
    transform: scale(1, 1);
    height: auto;
    opacity: 1;
  }
  to {
    transform: scale(1, 0);
    height: 0;
    opacity: 0;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n/* prettier-ignore */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\n/* prettier-ignore */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin-bottom: 20px;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: rgba(0, 0, 232, 0.762);\n  color: beige;\n}\n\nbutton {\n  background-color: beige;\n  color: rgb(2, 2, 206);\n  padding: 0.5rem;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-weight: 600;\n}\n\nbutton:hover {\n  background-color: rgb(216, 216, 195);\n}\n\n.page-wrapper {\n  display: flex;\n  flex-flow: column;\n  gap: 3rem;\n  align-items: center;\n}\n\nh1 {\n  font-family: \"Bungee\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 5rem;\n  margin-top: 1rem;\n}\n\n.game-start-btn {\n  place-self: center;\n}\n\n#randomize-ships {\n  display: none;\n}\n\n.hit {\n  background-color: rgb(247, 23, 53);\n}\n\n.miss {\n  background-color: rgb(161, 161, 255);\n}\n\n.human-cell,\n.computer-cell {\n  border: 3px solid beige;\n}\n\n.computer-cell:hover {\n  background-color: beige;\n}\n\n.ship {\n  background-color: rgb(126, 126, 126);\n  border: solid 2px rgb(126, 126, 126);\n  /* border: solid 2px rgb(126, 126, 126); */\n}\n\n.game {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 4rem;\n}\n\n.game-wrapper {\n  display: grid;\n  gap: 1rem;\n}\n\n.game-over-message {\n  position: absolute;\n  white-space: pre;\n  text-align: center;\n  background-color: rgb(99, 35, 35);\n  color: beige;\n  padding: 1rem;\n  border: dashed beige 3px;\n  border-radius: 25px;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n}\n\ntable {\n  width: 400px;\n  height: 400px;\n}\n\np {\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\n.content-wrapper {\n  background-color: rgba(25, 25, 162, 0.762);\n  padding: 1rem;\n  transform-origin: top;\n}\n\n.row-2,\n#collapse-rules-btn,\n.content-wrapper {\n  display: none;\n}\n\n.rules-ship,\n.rules-hit,\n.rules-miss {\n  display: inline-block;\n  width: 20px;\n  height: 1rem;\n}\n\n.rules-ship {\n  background-color: rgb(126, 126, 126);\n}\n\n.rules-hit {\n  background-color: rgb(247, 23, 53);\n}\n\n.rules-miss {\n  background-color: rgb(161, 161, 255);\n}\n\n.rules-hit,\n.rules-miss {\n  margin-left: 40px;\n}\n\n.rules p {\n  text-align: center;\n  font-size: 0.8rem;\n  line-height: 120%;\n  margin-bottom: 0.5rem;\n}\n\n.rules p:first-child {\n  font-size: 1.1rem;\n  font-weight: 800;\n  padding-bottom: 0.3rem;\n  text-align: center;\n}\n\np,\nbutton,\n.game-over-message {\n  font-family: \"Space Grotesk\", sans-serif;\n  font-optical-sizing: auto;\n  font-style: normal;\n}\n\n.game-over-message {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  row-gap: 1rem;\n}\n\n#collapse-rules-btn {\n  justify-self: end;\n  font-family: sans-serif;\n  padding: 0.4rem;\n  background-color: rgba(25, 25, 162, 0);\n  color: beige;\n  height: 35px;\n}\n\n#collapse-rules-btn:hover {\n  border-radius: 25px;\n  background-color: rgba(25, 25, 162, 0.762);\n}\n\n/* animations */\n\n.unrolled-btn {\n  animation: rotateBack 0.4s ease-out both;\n}\n\n.unrolled-div {\n  animation: unroll 0.2s ease-in-out both;\n}\n\n.collapsed-btn {\n  animation: rotate 0.4s ease-out both;\n}\n\n.collapsed-div {\n  animation: collapse 0.2s ease-in-out both;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(180deg);\n  }\n}\n\n@keyframes rotateBack {\n  from {\n    transform: rotate(180deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes unroll {\n  from {\n    transform: scale(1, 0);\n    height: 0;\n    opacity: 0;\n  }\n  to {\n    transform: scale(1, 1);\n    height: auto;\n    opacity: 1;\n  }\n}\n\n@keyframes collapse {\n  from {\n    transform: scale(1, 1);\n    height: auto;\n    opacity: 1;\n  }\n  to {\n    transform: scale(1, 0);\n    height: 0;\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const gameStartBtn = document.querySelector(".game-start-btn");
const randomizeShipsBtn = document.querySelector("#randomize-ships");
const contentWrapper = document.querySelector(".content-wrapper");
const rulesRow = document.querySelector(".row-2");
const collapseBtn = document.querySelector("#collapse-rules-btn");

const gameDiv = document.querySelector(".game");
let game = new _index__WEBPACK_IMPORTED_MODULE_0__.GameController();
let availableCoordinates = [];

// need to make sure the button can only get clicked once
gameStartBtn.addEventListener("click", () => {
  // console.log(game);

  gameStartBtn.remove();

  // computer guess pool
  intializePossibleCoordinates();

  // initialize display
  setupDOM();
});

function setupDOM() {
  // set initial human turn flag:
  game.playTurn();

  // set up player variables
  const p1 = game.players[0];
  const p2 = game.players[1];

  // create arrays of ships for each player
  let ships1 = [
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(5),
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(4),
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(3),
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(3),
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(2),
  ];
  let ships2 = [
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(5),
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(4),
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(3),
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(3),
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(2),
  ];

  // place ships on boards
  p1.board.placeRandomShips(ships1);
  p2.board.placeRandomShips(ships2);

  // create boards
  createPlayerBoards();

  randomizeShipsBtn.style.display = "inline";
  rulesRow.style.display = "grid";
  contentWrapper.style.display = "inline";

  collapseBtn.style.display = "inline";
}

collapseBtn.addEventListener("click", () => {
  collapseBtn.classList.toggle("collapsed-btn");
  contentWrapper.classList.toggle("collapsed-div");
});

randomizeShipsBtn.addEventListener("click", () => {
  // only need to re-randomize human ships
  game.players[0].board = new _index__WEBPACK_IMPORTED_MODULE_0__.Gameboard();

  let ships1 = [
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(5),
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(4),
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(3),
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(3),
    new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(2),
  ];

  game.players[0].board.placeRandomShips(ships1);

  createPlayerBoards();
});

function createPlayerBoards() {
  gameDiv.textContent = "";

  game.players.forEach((player) => {
    // create html gameboard
    let table = document.createElement("table");
    table.setAttribute("id", `${player.type}-board`);
    // header row for the x-axis labels
    let headerRow = document.createElement("tr");
    // empty top left corner
    let emptyCorner = document.createElement("td");

    headerRow.appendChild(emptyCorner);
    for (let i = 0; i < player.board.board.length; i++) {
      let axisCell = document.createElement("td");
      axisCell.textContent = i;
      headerRow.appendChild(axisCell);
    }
    table.appendChild(headerRow);

    for (let i = 0; i < player.board.board.length; i++) {
      let row = document.createElement("tr");

      // create axis cell
      let axisCell = document.createElement("td");
      axisCell.textContent = i;
      row.appendChild(axisCell);

      for (let j = 0; j < player.board.board[i].length; j++) {
        let cell = document.createElement("td");
        cell.textContent = " ";
        cell.classList.add(`${player.type}-cell`);

        cell.dataset.x = i;
        cell.dataset.y = j;

        if (player.type === "computer") {
          // make clickable if player is opponent
          cell.style.cursor = "pointer";
          cell.addEventListener("click", () => cellClick(cell));
        } else if (player.board.isShip(cell.dataset.y, cell.dataset.x)) {
          cell.classList.add("ship");
        }

        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    // append boards
    gameDiv.appendChild(table);
  });
  // append board names
  game.players.forEach((player) => {
    let boardName = document.createElement("p");
    boardName.textContent = `${player.type}'s ships`;

    gameDiv.appendChild(boardName);
  });
}

// add class to guessed cells using isShip to differentiate between hit and miss
function updateDOM() {
  const humanBoardCells = document.querySelectorAll(".human-cell");
  const computerBoardCells = document.querySelectorAll(".computer-cell");

  computerBoardCells.forEach((cell) => {
    // console.log("guessedCells:", game.players[0].board.guessedCells);

    // console.log("cellinfo:", `${[cell.dataset.x, cell.dataset.y]}`);

    if (
      game.players[1].board.guessedCells.some(
        (guessedCell) =>
          guessedCell[0] === cell.dataset.y && guessedCell[1] === cell.dataset.x
      )
    ) {
      // check if cell is ship
      if (game.players[1].board.isShip(cell.dataset.y, cell.dataset.x)) {
        cell.classList.add("hit");
      } else {
        cell.classList.add("miss");
      }
    }
  });

  humanBoardCells.forEach((cell) => {
    // console.log("guessedCells:", game.players[0].board.guessedCells);

    // console.log("cellinfo:", `${[cell.dataset.x, cell.dataset.y]}`);

    if (
      game.players[0].board.guessedCells.some(
        (guessedCell) =>
          guessedCell[0] === cell.dataset.y && guessedCell[1] === cell.dataset.x
      )
    ) {
      // check if cell is ship
      if (game.players[0].board.isShip(cell.dataset.y, cell.dataset.x)) {
        cell.classList.remove("ship");
        cell.classList.add("hit");
      } else {
        cell.classList.add("miss");
      }
    }
  });
}

let isComputerTurn = false;

function cellClick(cell) {
  // prevents players from clicking when computer's turn
  if (isComputerTurn) {
    return;
  }

  if (game.currentIsHuman) {
    // console.log("y, x:", cell.dataset.y, cell.dataset.x);
    // console.log("ship at:", game.players[1].board.board[5][5]);

    // remove randomize button
    randomizeShipsBtn.remove();

    // disallow clicking the same cell twice
    cell.setAttribute("style", "pointer-events: none");
    cell.classList.add("clicked");

    let hit = game
      .getOpposingPlayer()
      .board.receiveAttack(cell.dataset.y, cell.dataset.x);

    // re-render clicked cell to show hit/miss immediately
    cell.classList.remove("computer-cell");
    requestAnimationFrame(() => {
      cell.classList.add("computer-cell");
      updateDOM();
    });

    if (hit) {
      updateDOM();
    } else {
      updateDOM();

      game.nextTurn();
      computerTurn();
    }

    if (game.winCheck()) {
      gameOver();
    } else {
      return;
    }
  }
}

function disableClicks() {
  const cells = document.querySelectorAll(".computer-cell, .human-cell");
  cells.forEach((cell) => {
    if (!cell.classList.contains("clicked")) {
      cell.style.pointerEvents = "none";
    }
  });
}

function enableClicks() {
  const cells = document.querySelectorAll(".computer-cell, .human-cell");
  cells.forEach((cell) => {
    if (!cell.classList.contains("clicked")) {
      cell.style.pointerEvents = "auto";
    }
  });
}

function intializePossibleCoordinates() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      availableCoordinates.push([i, j]);
    }
  }

  return availableCoordinates;
}

let lastHit = null;
let direction = null;

function computerTurn() {
  isComputerTurn = true;
  disableClicks();

  if (availableCoordinates.length === 0) {
    updateDOM();
    game.nextTurn();
    enableClicks();
    isComputerTurn = false;

    return;
  }

  let index;
  let x, y;

  if (lastHit && direction) {
    // continue in the same direction if last guess was a hit
    [x, y] =
      direction === "x"
        ? [lastHit[0], lastHit[1] + 1]
        : [lastHit[0] + 1, lastHit[1]];
    index = availableCoordinates.findIndex(
      (coord) => coord[0] === x && coord[1] === y
    );
    if (index === -1 || x >= game.boardSize || y >= game.boardSize) {
      // if next coordinate in the same direction is not available or out of bounds, choose a random coordinate
      index = Math.floor(Math.random() * availableCoordinates.length);
      [x, y] = availableCoordinates[index];
      lastHit = null;
      direction = null;
    }
  } else {
    // choose a random coordinate if the last guess was a miss or there was no last guess
    index = Math.floor(Math.random() * availableCoordinates.length);
    [x, y] = availableCoordinates[index];
  }

  // remove the chosen coordinate from availableCoordinates
  availableCoordinates.splice(index, 1);

  // convert to strings for conformity
  let hit = game.getOpposingPlayer().board.receiveAttack(String(y), String(x));

  updateDOM();

  if (game.winCheck()) {
    gameOver();
    return;
  }

  if (hit) {
    // set last hit coordinate and direction for subsequent guess
    lastHit = [x, y];
    direction = direction || (Math.random() < 0.5 ? "x" : "y");
    setTimeout(computerTurn, 500);
  } else {
    // reset values on miss
    lastHit = null;
    direction = null;
    enableClicks();
    isComputerTurn = false;
    game.nextTurn();
  }
}

function gameOver() {
  disableClicks();
  const gameWrapper = document.querySelector(".game-wrapper");
  const gameOverMessage = document.createElement("div");
  const playAgainBtn = document.createElement("button");

  gameDiv.setAttribute("style", "pointer-events: none");

  gameWrapper.classList.add("end-screen");
  gameOverMessage.classList.add("game-over-message");
  gameOverMessage.textContent = `game over, ${
    game.getCurrentPlayer().type
  } wins!`;

  gameWrapper.appendChild(gameOverMessage);
  gameOverMessage.appendChild(playAgainBtn);

  playAgainBtn.textContent = "new game";
  playAgainBtn.addEventListener("click", () => {
    gameWrapper.classList.remove("end-screen");
    gameOverMessage.remove();
    playAgainBtn.remove();
    gameDiv.setAttribute("style", "pointer-events: auto");

    game = new _index__WEBPACK_IMPORTED_MODULE_0__.GameController();
    availableCoordinates = [];
    intializePossibleCoordinates();

    setupDOM();
  });
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameController: () => (/* binding */ GameController),
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
if (true) {
  __webpack_require__(/*! ./dom */ "./src/dom.js");
}

class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
  }

  hit() {
    this.hitCount++;
  }

  isSunk() {
    if (this.hitCount >= this.length) {
      return true;
    } else {
      return false;
    }
  }
}

class Gameboard {
  constructor() {
    this.board = this.createBoard();
    this.ships = [];
    this.missedShots = [];
    this.guessedCells = [];
  }

  createBoard() {
    const boardArr = [];
    const size = 10;
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(" ");
      }
      boardArr.push(row);
    }
    return boardArr;
  }

  printBoard() {
    let boardString = "";
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] instanceof Ship) {
          boardString += "X ";
        } else {
          boardString += "- ";
        }
      }
      boardString += "\n";
    }
    console.log(boardString);
  }

  placeRandomShips(shipArr) {
    for (let ship of shipArr) {
      let placed = false;
      while (!placed) {
        // generate a random orientation, x-coordinate, and y-coordinate
        let orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
        let x = Math.floor(Math.random() * this.board.length);
        let y = Math.floor(Math.random() * this.board.length);

        // check if the ship can be placed at the generated location
        if (this.canPlace(ship, x, y, orientation)) {
          this.placeShip(ship, x, y, orientation);

          placed = true;
        }
      }
    }
  }

  canPlace(ship, x, y, orientation) {
    for (let i = 0; i < ship.length; i++) {
      let xCoordinate, yCoordinate;
      if (orientation === "vertical") {
        xCoordinate = x + i;
        yCoordinate = y;
      } else {
        xCoordinate = x;
        yCoordinate = y + i;
      }

      // check the cell itself
      if (
        xCoordinate >= this.board.length ||
        yCoordinate >= this.board.length ||
        this.board[yCoordinate][xCoordinate] instanceof Ship
      ) {
        return false;
      }

      // check the surrounding cells
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          let nx = xCoordinate + dx;
          let ny = yCoordinate + dy;
          if (
            nx >= 0 &&
            nx < this.board.length &&
            ny >= 0 &&
            ny < this.board.length &&
            this.board[ny][nx] instanceof Ship
          ) {
            return false;
          }
        }
      }
    }
    return true;
  }

  placeShip(ship, xCoordinate, yCoordinate, orientation = "horizontal") {
    for (let i = 0; i < ship.length; i++) {
      if (orientation === "vertical") {
        this.board[yCoordinate][xCoordinate + i] = ship;
      } else {
        this.board[yCoordinate + i][xCoordinate] = ship;
      }
    }
    this.ships.push(ship);
  }

  receiveAttack(yCoordinate, xCoordinate) {
    if (this.board[yCoordinate][xCoordinate] instanceof Ship) {
      this.board[yCoordinate][xCoordinate].hit();
      // console.log("hit ship");

      this.guessedCells.push([yCoordinate, xCoordinate]);
      // console.log("guessed shots", this.guessedCells);
      return true;
    } else {
      this.missedShots.push([yCoordinate, xCoordinate]);
      this.guessedCells.push([yCoordinate, xCoordinate]);
      // console.log("guessed shots", this.guessedCells);
      return false;
    }
  }

  allSunk() {
    let sunkCount = 0;
    this.ships.forEach((ship) => {
      if (ship.isSunk()) {
        sunkCount++;
      }
    });
    if (sunkCount === this.ships.length) {
      return true;
    } else {
      return false;
    }
  }

  isShip(yCoordinate, xCoordinate) {
    console.log("is ship called:");

    if (this.board[yCoordinate][xCoordinate] instanceof Ship) {
      console.log("it was a ship!!");

      return true;
    } else {
      return false;
    }
  }
}

class Player {
  constructor(type) {
    this.type = type;
    this.board = new Gameboard();
  }
}

class GameController {
  constructor() {
    this.players = [new Player("human"), new Player("computer")];
    this.currentPlayer = this.players[0];
    this.currentPlayerIndex = 0;
    this.currentIsHuman = true;
  }

  gameStart() {
    this.playTurn(this.getCurrentPlayer());
  }

  // sets flag for whether current turn is human
  playTurn() {
    if (this.getCurrentPlayer().type === "human") {
      this.currentIsHuman = true;
    } else {
      this.currentIsHuman = false;
    }
    // console.log("current player:", this.getCurrentPlayer().type);
    // console.log("opposing player:", this.getOpposingPlayer().type);
  }

  // only gets called in DOM maybe?
  nextTurn() {
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length;

    console.log(
      "next turn called, current player is now:",
      this.getCurrentPlayer().type
    );
  }

  winCheck() {
    if (this.getOpposingPlayer().board.allSunk()) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  getOpposingPlayer() {
    return this.players[(this.currentPlayerIndex + 1) % this.players.length];
  }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dom.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtGQUFrRixLQUFLLFlBQVksa0JBQWtCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLFFBQVEsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssbXBCQUFtcEIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFB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QUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuLyogcHJldHRpZXItaWdub3JlICovXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG4vKiBwcmV0dGllci1pZ25vcmUgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyMzIsIDAuNzYyKTtcbiAgY29sb3I6IGJlaWdlO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgY29sb3I6IHJnYigyLCAyLCAyMDYpO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMTk1KTtcbn1cblxuLnBhZ2Utd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBnYXA6IDNyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiQnVuZ2VlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uZ2FtZS1zdGFydC1idG4ge1xuICBwbGFjZS1zZWxmOiBjZW50ZXI7XG59XG5cbiNyYW5kb21pemUtc2hpcHMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjMsIDUzKTtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNjEsIDI1NSk7XG59XG5cbi5odW1hbi1jZWxsLFxuLmNvbXB1dGVyLWNlbGwge1xuICBib3JkZXI6IDNweCBzb2xpZCBiZWlnZTtcbn1cblxuLmNvbXB1dGVyLWNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbn1cblxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigxMjYsIDEyNiwgMTI2KTtcbiAgLyogYm9yZGVyOiBzb2xpZCAycHggcmdiKDEyNiwgMTI2LCAxMjYpOyAqL1xufVxuXG4uZ2FtZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgY29sdW1uLWdhcDogNHJlbTtcbn1cblxuLmdhbWUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbn1cblxuLmdhbWUtb3Zlci1tZXNzYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMzUsIDM1KTtcbiAgY29sb3I6IGJlaWdlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IGRhc2hlZCBiZWlnZSAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCAyNSwgMTYyLCAwLjc2Mik7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbn1cblxuLnJvdy0yLFxuI2NvbGxhcHNlLXJ1bGVzLWJ0bixcbi5jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucnVsZXMtc2hpcCxcbi5ydWxlcy1oaXQsXG4ucnVsZXMtbWlzcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMXJlbTtcbn1cblxuLnJ1bGVzLXNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XG59XG5cbi5ydWxlcy1oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMywgNTMpO1xufVxuXG4ucnVsZXMtbWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE2MSwgMjU1KTtcbn1cblxuLnJ1bGVzLWhpdCxcbi5ydWxlcy1taXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi5ydWxlcyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLnJ1bGVzIHA6Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wLFxuYnV0dG9uLFxuLmdhbWUtb3Zlci1tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgR3JvdGVza1wiLCBzYW5zLXNlcmlmO1xuICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5nYW1lLW92ZXItbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogMXJlbTtcbn1cblxuI2NvbGxhcHNlLXJ1bGVzLWJ0biB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMC40cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCAyNSwgMTYyLCAwKTtcbiAgY29sb3I6IGJlaWdlO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbiNjb2xsYXBzZS1ydWxlcy1idG46aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCAyNSwgMTYyLCAwLjc2Mik7XG59XG5cbi8qIGFuaW1hdGlvbnMgKi9cblxuLnVucm9sbGVkLWJ0biB7XG4gIGFuaW1hdGlvbjogcm90YXRlQmFjayAwLjRzIGVhc2Utb3V0IGJvdGg7XG59XG5cbi51bnJvbGxlZC1kaXYge1xuICBhbmltYXRpb246IHVucm9sbCAwLjJzIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi5jb2xsYXBzZWQtYnRuIHtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMC40cyBlYXNlLW91dCBib3RoO1xufVxuXG4uY29sbGFwc2VkLWRpdiB7XG4gIGFuaW1hdGlvbjogY29sbGFwc2UgMC4ycyBlYXNlLWluLW91dCBib3RoO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlQmFjayB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdW5yb2xsIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNvbGxhcHNlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQztBQUNELG9CQUFvQjtBQUNwQjs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hELG9CQUFvQjtB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Q3RCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtFQUNaO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG4vKiBwcmV0dGllci1pZ25vcmUgKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG4vKiBwcmV0dGllci1pZ25vcmUgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyMzIsIDAuNzYyKTtcXG4gIGNvbG9yOiBiZWlnZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgY29sb3I6IHJnYigyLCAyLCAyMDYpO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMTk1KTtcXG59XFxuXFxuLnBhZ2Utd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogXFxcIkJ1bmdlZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmdhbWUtc3RhcnQtYnRuIHtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3JhbmRvbWl6ZS1zaGlwcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIzLCA1Myk7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE2MSwgMjU1KTtcXG59XFxuXFxuLmh1bWFuLWNlbGwsXFxuLmNvbXB1dGVyLWNlbGwge1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmVpZ2U7XFxufVxcblxcbi5jb21wdXRlci1jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTI2LCAxMjYsIDEyNik7XFxuICAvKiBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTI2LCAxMjYsIDEyNik7ICovXFxufVxcblxcbi5nYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiA0cmVtO1xcbn1cXG5cXG4uZ2FtZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5nYW1lLW92ZXItbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCAzNSwgMzUpO1xcbiAgY29sb3I6IGJlaWdlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogZGFzaGVkIGJlaWdlIDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB0b3A6IDQwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxufVxcblxcbnRhYmxlIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI1LCAxNjIsIDAuNzYyKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxufVxcblxcbi5yb3ctMixcXG4jY29sbGFwc2UtcnVsZXMtYnRuLFxcbi5jb250ZW50LXdyYXBwZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJ1bGVzLXNoaXAsXFxuLnJ1bGVzLWhpdCxcXG4ucnVsZXMtbWlzcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLnJ1bGVzLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNiwgMTI2LCAxMjYpO1xcbn1cXG5cXG4ucnVsZXMtaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIzLCA1Myk7XFxufVxcblxcbi5ydWxlcy1taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE2MSwgMjU1KTtcXG59XFxuXFxuLnJ1bGVzLWhpdCxcXG4ucnVsZXMtbWlzcyB7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuLnJ1bGVzIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBsaW5lLWhlaWdodDogMTIwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnJ1bGVzIHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucCxcXG5idXR0b24sXFxuLmdhbWUtb3Zlci1tZXNzYWdlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BhY2UgR3JvdGVza1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcm93LWdhcDogMXJlbTtcXG59XFxuXFxuI2NvbGxhcHNlLXJ1bGVzLWJ0biB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjUsIDE2MiwgMCk7XFxuICBjb2xvcjogYmVpZ2U7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbiNjb2xsYXBzZS1ydWxlcy1idG46aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI1LCAxNjIsIDAuNzYyKTtcXG59XFxuXFxuLyogYW5pbWF0aW9ucyAqL1xcblxcbi51bnJvbGxlZC1idG4ge1xcbiAgYW5pbWF0aW9uOiByb3RhdGVCYWNrIDAuNHMgZWFzZS1vdXQgYm90aDtcXG59XFxuXFxuLnVucm9sbGVkLWRpdiB7XFxuICBhbmltYXRpb246IHVucm9sbCAwLjJzIGVhc2UtaW4tb3V0IGJvdGg7XFxufVxcblxcbi5jb2xsYXBzZWQtYnRuIHtcXG4gIGFuaW1hdGlvbjogcm90YXRlIDAuNHMgZWFzZS1vdXQgYm90aDtcXG59XFxuXFxuLmNvbGxhcHNlZC1kaXYge1xcbiAgYW5pbWF0aW9uOiBjb2xsYXBzZSAwLjJzIGVhc2UtaW4tb3V0IGJvdGg7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVCYWNrIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB1bnJvbGwge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XFxuICAgIGhlaWdodDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNvbGxhcHNlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XFxuICAgIGhlaWdodDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGdhbWVTdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1zdGFydC1idG5cIik7XG5jb25zdCByYW5kb21pemVTaGlwc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFuZG9taXplLXNoaXBzXCIpO1xuY29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtd3JhcHBlclwiKTtcbmNvbnN0IHJ1bGVzUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3ctMlwiKTtcbmNvbnN0IGNvbGxhcHNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2xsYXBzZS1ydWxlcy1idG5cIik7XG5cbmNvbnN0IGdhbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVcIik7XG5sZXQgZ2FtZSA9IG5ldyBHYW1lQ29udHJvbGxlcigpO1xubGV0IGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gW107XG5cbi8vIG5lZWQgdG8gbWFrZSBzdXJlIHRoZSBidXR0b24gY2FuIG9ubHkgZ2V0IGNsaWNrZWQgb25jZVxuZ2FtZVN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKGdhbWUpO1xuXG4gIGdhbWVTdGFydEJ0bi5yZW1vdmUoKTtcblxuICAvLyBjb21wdXRlciBndWVzcyBwb29sXG4gIGludGlhbGl6ZVBvc3NpYmxlQ29vcmRpbmF0ZXMoKTtcblxuICAvLyBpbml0aWFsaXplIGRpc3BsYXlcbiAgc2V0dXBET00oKTtcbn0pO1xuXG5mdW5jdGlvbiBzZXR1cERPTSgpIHtcbiAgLy8gc2V0IGluaXRpYWwgaHVtYW4gdHVybiBmbGFnOlxuICBnYW1lLnBsYXlUdXJuKCk7XG5cbiAgLy8gc2V0IHVwIHBsYXllciB2YXJpYWJsZXNcbiAgY29uc3QgcDEgPSBnYW1lLnBsYXllcnNbMF07XG4gIGNvbnN0IHAyID0gZ2FtZS5wbGF5ZXJzWzFdO1xuXG4gIC8vIGNyZWF0ZSBhcnJheXMgb2Ygc2hpcHMgZm9yIGVhY2ggcGxheWVyXG4gIGxldCBzaGlwczEgPSBbXG4gICAgbmV3IFNoaXAoNSksXG4gICAgbmV3IFNoaXAoNCksXG4gICAgbmV3IFNoaXAoMyksXG4gICAgbmV3IFNoaXAoMyksXG4gICAgbmV3IFNoaXAoMiksXG4gIF07XG4gIGxldCBzaGlwczIgPSBbXG4gICAgbmV3IFNoaXAoNSksXG4gICAgbmV3IFNoaXAoNCksXG4gICAgbmV3IFNoaXAoMyksXG4gICAgbmV3IFNoaXAoMyksXG4gICAgbmV3IFNoaXAoMiksXG4gIF07XG5cbiAgLy8gcGxhY2Ugc2hpcHMgb24gYm9hcmRzXG4gIHAxLmJvYXJkLnBsYWNlUmFuZG9tU2hpcHMoc2hpcHMxKTtcbiAgcDIuYm9hcmQucGxhY2VSYW5kb21TaGlwcyhzaGlwczIpO1xuXG4gIC8vIGNyZWF0ZSBib2FyZHNcbiAgY3JlYXRlUGxheWVyQm9hcmRzKCk7XG5cbiAgcmFuZG9taXplU2hpcHNCdG4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gIHJ1bGVzUm93LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgY29udGVudFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG5cbiAgY29sbGFwc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG59XG5cbmNvbGxhcHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbGxhcHNlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWQtYnRuXCIpO1xuICBjb250ZW50V3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VkLWRpdlwiKTtcbn0pO1xuXG5yYW5kb21pemVTaGlwc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvLyBvbmx5IG5lZWQgdG8gcmUtcmFuZG9taXplIGh1bWFuIHNoaXBzXG4gIGdhbWUucGxheWVyc1swXS5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICBsZXQgc2hpcHMxID0gW1xuICAgIG5ldyBTaGlwKDUpLFxuICAgIG5ldyBTaGlwKDQpLFxuICAgIG5ldyBTaGlwKDMpLFxuICAgIG5ldyBTaGlwKDMpLFxuICAgIG5ldyBTaGlwKDIpLFxuICBdO1xuXG4gIGdhbWUucGxheWVyc1swXS5ib2FyZC5wbGFjZVJhbmRvbVNoaXBzKHNoaXBzMSk7XG5cbiAgY3JlYXRlUGxheWVyQm9hcmRzKCk7XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyQm9hcmRzKCkge1xuICBnYW1lRGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBnYW1lLnBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgLy8gY3JlYXRlIGh0bWwgZ2FtZWJvYXJkXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgIHRhYmxlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3BsYXllci50eXBlfS1ib2FyZGApO1xuICAgIC8vIGhlYWRlciByb3cgZm9yIHRoZSB4LWF4aXMgbGFiZWxzXG4gICAgbGV0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAvLyBlbXB0eSB0b3AgbGVmdCBjb3JuZXJcbiAgICBsZXQgZW1wdHlDb3JuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoZW1wdHlDb3JuZXIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLmJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgYXhpc0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICBheGlzQ2VsbC50ZXh0Q29udGVudCA9IGk7XG4gICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoYXhpc0NlbGwpO1xuICAgIH1cbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkZXJSb3cpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgIC8vIGNyZWF0ZSBheGlzIGNlbGxcbiAgICAgIGxldCBheGlzQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgIGF4aXNDZWxsLnRleHRDb250ZW50ID0gaTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChheGlzQ2VsbCk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyLmJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCIgXCI7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChgJHtwbGF5ZXIudHlwZX0tY2VsbGApO1xuXG4gICAgICAgIGNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnkgPSBqO1xuXG4gICAgICAgIGlmIChwbGF5ZXIudHlwZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgICAgLy8gbWFrZSBjbGlja2FibGUgaWYgcGxheWVyIGlzIG9wcG9uZW50XG4gICAgICAgICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjZWxsQ2xpY2soY2VsbCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllci5ib2FyZC5pc1NoaXAoY2VsbC5kYXRhc2V0LnksIGNlbGwuZGF0YXNldC54KSkge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgIH1cblxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgICAvLyBhcHBlbmQgYm9hcmRzXG4gICAgZ2FtZURpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gIH0pO1xuICAvLyBhcHBlbmQgYm9hcmQgbmFtZXNcbiAgZ2FtZS5wbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgIGxldCBib2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBib2FyZE5hbWUudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIudHlwZX0ncyBzaGlwc2A7XG5cbiAgICBnYW1lRGl2LmFwcGVuZENoaWxkKGJvYXJkTmFtZSk7XG4gIH0pO1xufVxuXG4vLyBhZGQgY2xhc3MgdG8gZ3Vlc3NlZCBjZWxscyB1c2luZyBpc1NoaXAgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGhpdCBhbmQgbWlzc1xuZnVuY3Rpb24gdXBkYXRlRE9NKCkge1xuICBjb25zdCBodW1hbkJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmh1bWFuLWNlbGxcIik7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXItY2VsbFwiKTtcblxuICBjb21wdXRlckJvYXJkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZ3Vlc3NlZENlbGxzOlwiLCBnYW1lLnBsYXllcnNbMF0uYm9hcmQuZ3Vlc3NlZENlbGxzKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2VsbGluZm86XCIsIGAke1tjZWxsLmRhdGFzZXQueCwgY2VsbC5kYXRhc2V0LnldfWApO1xuXG4gICAgaWYgKFxuICAgICAgZ2FtZS5wbGF5ZXJzWzFdLmJvYXJkLmd1ZXNzZWRDZWxscy5zb21lKFxuICAgICAgICAoZ3Vlc3NlZENlbGwpID0+XG4gICAgICAgICAgZ3Vlc3NlZENlbGxbMF0gPT09IGNlbGwuZGF0YXNldC55ICYmIGd1ZXNzZWRDZWxsWzFdID09PSBjZWxsLmRhdGFzZXQueFxuICAgICAgKVxuICAgICkge1xuICAgICAgLy8gY2hlY2sgaWYgY2VsbCBpcyBzaGlwXG4gICAgICBpZiAoZ2FtZS5wbGF5ZXJzWzFdLmJvYXJkLmlzU2hpcChjZWxsLmRhdGFzZXQueSwgY2VsbC5kYXRhc2V0LngpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBodW1hbkJvYXJkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZ3Vlc3NlZENlbGxzOlwiLCBnYW1lLnBsYXllcnNbMF0uYm9hcmQuZ3Vlc3NlZENlbGxzKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2VsbGluZm86XCIsIGAke1tjZWxsLmRhdGFzZXQueCwgY2VsbC5kYXRhc2V0LnldfWApO1xuXG4gICAgaWYgKFxuICAgICAgZ2FtZS5wbGF5ZXJzWzBdLmJvYXJkLmd1ZXNzZWRDZWxscy5zb21lKFxuICAgICAgICAoZ3Vlc3NlZENlbGwpID0+XG4gICAgICAgICAgZ3Vlc3NlZENlbGxbMF0gPT09IGNlbGwuZGF0YXNldC55ICYmIGd1ZXNzZWRDZWxsWzFdID09PSBjZWxsLmRhdGFzZXQueFxuICAgICAgKVxuICAgICkge1xuICAgICAgLy8gY2hlY2sgaWYgY2VsbCBpcyBzaGlwXG4gICAgICBpZiAoZ2FtZS5wbGF5ZXJzWzBdLmJvYXJkLmlzU2hpcChjZWxsLmRhdGFzZXQueSwgY2VsbC5kYXRhc2V0LngpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxubGV0IGlzQ29tcHV0ZXJUdXJuID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGNlbGxDbGljayhjZWxsKSB7XG4gIC8vIHByZXZlbnRzIHBsYXllcnMgZnJvbSBjbGlja2luZyB3aGVuIGNvbXB1dGVyJ3MgdHVyblxuICBpZiAoaXNDb21wdXRlclR1cm4pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZ2FtZS5jdXJyZW50SXNIdW1hbikge1xuICAgIC8vIGNvbnNvbGUubG9nKFwieSwgeDpcIiwgY2VsbC5kYXRhc2V0LnksIGNlbGwuZGF0YXNldC54KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNoaXAgYXQ6XCIsIGdhbWUucGxheWVyc1sxXS5ib2FyZC5ib2FyZFs1XVs1XSk7XG5cbiAgICAvLyByZW1vdmUgcmFuZG9taXplIGJ1dHRvblxuICAgIHJhbmRvbWl6ZVNoaXBzQnRuLnJlbW92ZSgpO1xuXG4gICAgLy8gZGlzYWxsb3cgY2xpY2tpbmcgdGhlIHNhbWUgY2VsbCB0d2ljZVxuICAgIGNlbGwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb2ludGVyLWV2ZW50czogbm9uZVwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuXG4gICAgbGV0IGhpdCA9IGdhbWVcbiAgICAgIC5nZXRPcHBvc2luZ1BsYXllcigpXG4gICAgICAuYm9hcmQucmVjZWl2ZUF0dGFjayhjZWxsLmRhdGFzZXQueSwgY2VsbC5kYXRhc2V0LngpO1xuXG4gICAgLy8gcmUtcmVuZGVyIGNsaWNrZWQgY2VsbCB0byBzaG93IGhpdC9taXNzIGltbWVkaWF0ZWx5XG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcHV0ZXItY2VsbFwiKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItY2VsbFwiKTtcbiAgICAgIHVwZGF0ZURPTSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKGhpdCkge1xuICAgICAgdXBkYXRlRE9NKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZURPTSgpO1xuXG4gICAgICBnYW1lLm5leHRUdXJuKCk7XG4gICAgICBjb21wdXRlclR1cm4oKTtcbiAgICB9XG5cbiAgICBpZiAoZ2FtZS53aW5DaGVjaygpKSB7XG4gICAgICBnYW1lT3ZlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVDbGlja3MoKSB7XG4gIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wdXRlci1jZWxsLCAuaHVtYW4tY2VsbFwiKTtcbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGlmICghY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbGlja2VkXCIpKSB7XG4gICAgICBjZWxsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbmFibGVDbGlja3MoKSB7XG4gIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wdXRlci1jZWxsLCAuaHVtYW4tY2VsbFwiKTtcbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGlmICghY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbGlja2VkXCIpKSB7XG4gICAgICBjZWxsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbnRpYWxpemVQb3NzaWJsZUNvb3JkaW5hdGVzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGF2YWlsYWJsZUNvb3JkaW5hdGVzLnB1c2goW2ksIGpdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXZhaWxhYmxlQ29vcmRpbmF0ZXM7XG59XG5cbmxldCBsYXN0SGl0ID0gbnVsbDtcbmxldCBkaXJlY3Rpb24gPSBudWxsO1xuXG5mdW5jdGlvbiBjb21wdXRlclR1cm4oKSB7XG4gIGlzQ29tcHV0ZXJUdXJuID0gdHJ1ZTtcbiAgZGlzYWJsZUNsaWNrcygpO1xuXG4gIGlmIChhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICB1cGRhdGVET00oKTtcbiAgICBnYW1lLm5leHRUdXJuKCk7XG4gICAgZW5hYmxlQ2xpY2tzKCk7XG4gICAgaXNDb21wdXRlclR1cm4gPSBmYWxzZTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpbmRleDtcbiAgbGV0IHgsIHk7XG5cbiAgaWYgKGxhc3RIaXQgJiYgZGlyZWN0aW9uKSB7XG4gICAgLy8gY29udGludWUgaW4gdGhlIHNhbWUgZGlyZWN0aW9uIGlmIGxhc3QgZ3Vlc3Mgd2FzIGEgaGl0XG4gICAgW3gsIHldID1cbiAgICAgIGRpcmVjdGlvbiA9PT0gXCJ4XCJcbiAgICAgICAgPyBbbGFzdEhpdFswXSwgbGFzdEhpdFsxXSArIDFdXG4gICAgICAgIDogW2xhc3RIaXRbMF0gKyAxLCBsYXN0SGl0WzFdXTtcbiAgICBpbmRleCA9IGF2YWlsYWJsZUNvb3JkaW5hdGVzLmZpbmRJbmRleChcbiAgICAgIChjb29yZCkgPT4gY29vcmRbMF0gPT09IHggJiYgY29vcmRbMV0gPT09IHlcbiAgICApO1xuICAgIGlmIChpbmRleCA9PT0gLTEgfHwgeCA+PSBnYW1lLmJvYXJkU2l6ZSB8fCB5ID49IGdhbWUuYm9hcmRTaXplKSB7XG4gICAgICAvLyBpZiBuZXh0IGNvb3JkaW5hdGUgaW4gdGhlIHNhbWUgZGlyZWN0aW9uIGlzIG5vdCBhdmFpbGFibGUgb3Igb3V0IG9mIGJvdW5kcywgY2hvb3NlIGEgcmFuZG9tIGNvb3JkaW5hdGVcbiAgICAgIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgICAgIFt4LCB5XSA9IGF2YWlsYWJsZUNvb3JkaW5hdGVzW2luZGV4XTtcbiAgICAgIGxhc3RIaXQgPSBudWxsO1xuICAgICAgZGlyZWN0aW9uID0gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gY2hvb3NlIGEgcmFuZG9tIGNvb3JkaW5hdGUgaWYgdGhlIGxhc3QgZ3Vlc3Mgd2FzIGEgbWlzcyBvciB0aGVyZSB3YXMgbm8gbGFzdCBndWVzc1xuICAgIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgICBbeCwgeV0gPSBhdmFpbGFibGVDb29yZGluYXRlc1tpbmRleF07XG4gIH1cblxuICAvLyByZW1vdmUgdGhlIGNob3NlbiBjb29yZGluYXRlIGZyb20gYXZhaWxhYmxlQ29vcmRpbmF0ZXNcbiAgYXZhaWxhYmxlQ29vcmRpbmF0ZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAvLyBjb252ZXJ0IHRvIHN0cmluZ3MgZm9yIGNvbmZvcm1pdHlcbiAgbGV0IGhpdCA9IGdhbWUuZ2V0T3Bwb3NpbmdQbGF5ZXIoKS5ib2FyZC5yZWNlaXZlQXR0YWNrKFN0cmluZyh5KSwgU3RyaW5nKHgpKTtcblxuICB1cGRhdGVET00oKTtcblxuICBpZiAoZ2FtZS53aW5DaGVjaygpKSB7XG4gICAgZ2FtZU92ZXIoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaGl0KSB7XG4gICAgLy8gc2V0IGxhc3QgaGl0IGNvb3JkaW5hdGUgYW5kIGRpcmVjdGlvbiBmb3Igc3Vic2VxdWVudCBndWVzc1xuICAgIGxhc3RIaXQgPSBbeCwgeV07XG4gICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uIHx8IChNYXRoLnJhbmRvbSgpIDwgMC41ID8gXCJ4XCIgOiBcInlcIik7XG4gICAgc2V0VGltZW91dChjb21wdXRlclR1cm4sIDUwMCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gcmVzZXQgdmFsdWVzIG9uIG1pc3NcbiAgICBsYXN0SGl0ID0gbnVsbDtcbiAgICBkaXJlY3Rpb24gPSBudWxsO1xuICAgIGVuYWJsZUNsaWNrcygpO1xuICAgIGlzQ29tcHV0ZXJUdXJuID0gZmFsc2U7XG4gICAgZ2FtZS5uZXh0VHVybigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdhbWVPdmVyKCkge1xuICBkaXNhYmxlQ2xpY2tzKCk7XG4gIGNvbnN0IGdhbWVXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLXdyYXBwZXJcIik7XG4gIGNvbnN0IGdhbWVPdmVyTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgZ2FtZURpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInBvaW50ZXItZXZlbnRzOiBub25lXCIpO1xuXG4gIGdhbWVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJlbmQtc2NyZWVuXCIpO1xuICBnYW1lT3Zlck1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImdhbWUtb3Zlci1tZXNzYWdlXCIpO1xuICBnYW1lT3Zlck1lc3NhZ2UudGV4dENvbnRlbnQgPSBgZ2FtZSBvdmVyLCAke1xuICAgIGdhbWUuZ2V0Q3VycmVudFBsYXllcigpLnR5cGVcbiAgfSB3aW5zIWA7XG5cbiAgZ2FtZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJNZXNzYWdlKTtcbiAgZ2FtZU92ZXJNZXNzYWdlLmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ0bik7XG5cbiAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gXCJuZXcgZ2FtZVwiO1xuICBwbGF5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBnYW1lV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiZW5kLXNjcmVlblwiKTtcbiAgICBnYW1lT3Zlck1lc3NhZ2UucmVtb3ZlKCk7XG4gICAgcGxheUFnYWluQnRuLnJlbW92ZSgpO1xuICAgIGdhbWVEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb2ludGVyLWV2ZW50czogYXV0b1wiKTtcblxuICAgIGdhbWUgPSBuZXcgR2FtZUNvbnRyb2xsZXIoKTtcbiAgICBhdmFpbGFibGVDb29yZGluYXRlcyA9IFtdO1xuICAgIGludGlhbGl6ZVBvc3NpYmxlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHNldHVwRE9NKCk7XG4gIH0pO1xufVxuIiwiaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInRlc3RcIikge1xuICByZXF1aXJlKFwiLi9kb21cIik7XG59XG5cbmNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdENvdW50ID0gMDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdENvdW50Kys7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0Q291bnQgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSB0aGlzLmNyZWF0ZUJvYXJkKCk7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMubWlzc2VkU2hvdHMgPSBbXTtcbiAgICB0aGlzLmd1ZXNzZWRDZWxscyA9IFtdO1xuICB9XG5cbiAgY3JlYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmRBcnIgPSBbXTtcbiAgICBjb25zdCBzaXplID0gMTA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgIHJvdy5wdXNoKFwiIFwiKTtcbiAgICAgIH1cbiAgICAgIGJvYXJkQXJyLnB1c2gocm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkQXJyO1xuICB9XG5cbiAgcHJpbnRCb2FyZCgpIHtcbiAgICBsZXQgYm9hcmRTdHJpbmcgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgIGJvYXJkU3RyaW5nICs9IFwiWCBcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib2FyZFN0cmluZyArPSBcIi0gXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJvYXJkU3RyaW5nICs9IFwiXFxuXCI7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGJvYXJkU3RyaW5nKTtcbiAgfVxuXG4gIHBsYWNlUmFuZG9tU2hpcHMoc2hpcEFycikge1xuICAgIGZvciAobGV0IHNoaXAgb2Ygc2hpcEFycikge1xuICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuICAgICAgd2hpbGUgKCFwbGFjZWQpIHtcbiAgICAgICAgLy8gZ2VuZXJhdGUgYSByYW5kb20gb3JpZW50YXRpb24sIHgtY29vcmRpbmF0ZSwgYW5kIHktY29vcmRpbmF0ZVxuICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCI7XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ib2FyZC5sZW5ndGgpO1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYm9hcmQubGVuZ3RoKTtcblxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgc2hpcCBjYW4gYmUgcGxhY2VkIGF0IHRoZSBnZW5lcmF0ZWQgbG9jYXRpb25cbiAgICAgICAgaWYgKHRoaXMuY2FuUGxhY2Uoc2hpcCwgeCwgeSwgb3JpZW50YXRpb24pKSB7XG4gICAgICAgICAgdGhpcy5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgb3JpZW50YXRpb24pO1xuXG4gICAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhblBsYWNlKHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgeENvb3JkaW5hdGUsIHlDb29yZGluYXRlO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgeENvb3JkaW5hdGUgPSB4ICsgaTtcbiAgICAgICAgeUNvb3JkaW5hdGUgPSB5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeENvb3JkaW5hdGUgPSB4O1xuICAgICAgICB5Q29vcmRpbmF0ZSA9IHkgKyBpO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayB0aGUgY2VsbCBpdHNlbGZcbiAgICAgIGlmIChcbiAgICAgICAgeENvb3JkaW5hdGUgPj0gdGhpcy5ib2FyZC5sZW5ndGggfHxcbiAgICAgICAgeUNvb3JkaW5hdGUgPj0gdGhpcy5ib2FyZC5sZW5ndGggfHxcbiAgICAgICAgdGhpcy5ib2FyZFt5Q29vcmRpbmF0ZV1beENvb3JkaW5hdGVdIGluc3RhbmNlb2YgU2hpcFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgdGhlIHN1cnJvdW5kaW5nIGNlbGxzXG4gICAgICBmb3IgKGxldCBkeCA9IC0xOyBkeCA8PSAxOyBkeCsrKSB7XG4gICAgICAgIGZvciAobGV0IGR5ID0gLTE7IGR5IDw9IDE7IGR5KyspIHtcbiAgICAgICAgICBsZXQgbnggPSB4Q29vcmRpbmF0ZSArIGR4O1xuICAgICAgICAgIGxldCBueSA9IHlDb29yZGluYXRlICsgZHk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbnggPj0gMCAmJlxuICAgICAgICAgICAgbnggPCB0aGlzLmJvYXJkLmxlbmd0aCAmJlxuICAgICAgICAgICAgbnkgPj0gMCAmJlxuICAgICAgICAgICAgbnkgPCB0aGlzLmJvYXJkLmxlbmd0aCAmJlxuICAgICAgICAgICAgdGhpcy5ib2FyZFtueV1bbnhdIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCB4Q29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUsIG9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeUNvb3JkaW5hdGVdW3hDb29yZGluYXRlICsgaV0gPSBzaGlwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ib2FyZFt5Q29vcmRpbmF0ZSArIGldW3hDb29yZGluYXRlXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeUNvb3JkaW5hdGUsIHhDb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuYm9hcmRbeUNvb3JkaW5hdGVdW3hDb29yZGluYXRlXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIHRoaXMuYm9hcmRbeUNvb3JkaW5hdGVdW3hDb29yZGluYXRlXS5oaXQoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0IHNoaXBcIik7XG5cbiAgICAgIHRoaXMuZ3Vlc3NlZENlbGxzLnB1c2goW3lDb29yZGluYXRlLCB4Q29vcmRpbmF0ZV0pO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJndWVzc2VkIHNob3RzXCIsIHRoaXMuZ3Vlc3NlZENlbGxzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1pc3NlZFNob3RzLnB1c2goW3lDb29yZGluYXRlLCB4Q29vcmRpbmF0ZV0pO1xuICAgICAgdGhpcy5ndWVzc2VkQ2VsbHMucHVzaChbeUNvb3JkaW5hdGUsIHhDb29yZGluYXRlXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImd1ZXNzZWQgc2hvdHNcIiwgdGhpcy5ndWVzc2VkQ2VsbHMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFsbFN1bmsoKSB7XG4gICAgbGV0IHN1bmtDb3VudCA9IDA7XG4gICAgdGhpcy5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBzdW5rQ291bnQrKztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3Vua0NvdW50ID09PSB0aGlzLnNoaXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpc1NoaXAoeUNvb3JkaW5hdGUsIHhDb29yZGluYXRlKSB7XG4gICAgY29uc29sZS5sb2coXCJpcyBzaGlwIGNhbGxlZDpcIik7XG5cbiAgICBpZiAodGhpcy5ib2FyZFt5Q29vcmRpbmF0ZV1beENvb3JkaW5hdGVdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgY29uc29sZS5sb2coXCJpdCB3YXMgYSBzaGlwISFcIik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIH1cbn1cblxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBsYXllcnMgPSBbbmV3IFBsYXllcihcImh1bWFuXCIpLCBuZXcgUGxheWVyKFwiY29tcHV0ZXJcIildO1xuICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyc1swXTtcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCA9IDA7XG4gICAgdGhpcy5jdXJyZW50SXNIdW1hbiA9IHRydWU7XG4gIH1cblxuICBnYW1lU3RhcnQoKSB7XG4gICAgdGhpcy5wbGF5VHVybih0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKSk7XG4gIH1cblxuICAvLyBzZXRzIGZsYWcgZm9yIHdoZXRoZXIgY3VycmVudCB0dXJuIGlzIGh1bWFuXG4gIHBsYXlUdXJuKCkge1xuICAgIGlmICh0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS50eXBlID09PSBcImh1bWFuXCIpIHtcbiAgICAgIHRoaXMuY3VycmVudElzSHVtYW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRJc0h1bWFuID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycmVudCBwbGF5ZXI6XCIsIHRoaXMuZ2V0Q3VycmVudFBsYXllcigpLnR5cGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwib3Bwb3NpbmcgcGxheWVyOlwiLCB0aGlzLmdldE9wcG9zaW5nUGxheWVyKCkudHlwZSk7XG4gIH1cblxuICAvLyBvbmx5IGdldHMgY2FsbGVkIGluIERPTSBtYXliZT9cbiAgbmV4dFR1cm4oKSB7XG4gICAgdGhpcy5jdXJyZW50UGxheWVySW5kZXggPVxuICAgICAgKHRoaXMuY3VycmVudFBsYXllckluZGV4ICsgMSkgJSB0aGlzLnBsYXllcnMubGVuZ3RoO1xuXG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIm5leHQgdHVybiBjYWxsZWQsIGN1cnJlbnQgcGxheWVyIGlzIG5vdzpcIixcbiAgICAgIHRoaXMuZ2V0Q3VycmVudFBsYXllcigpLnR5cGVcbiAgICApO1xuICB9XG5cbiAgd2luQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMuZ2V0T3Bwb3NpbmdQbGF5ZXIoKS5ib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFBsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJzW3RoaXMuY3VycmVudFBsYXllckluZGV4XTtcbiAgfVxuXG4gIGdldE9wcG9zaW5nUGxheWVyKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllcnNbKHRoaXMuY3VycmVudFBsYXllckluZGV4ICsgMSkgJSB0aGlzLnBsYXllcnMubGVuZ3RoXTtcbiAgfVxufVxuXG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciwgR2FtZUNvbnRyb2xsZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2RvbS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
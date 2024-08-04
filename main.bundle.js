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
.computer-cell,
.player-cell {
  border: 3px solid beige;
}

.player-cell:hover,
.computer-cell:hover {
  background-color: beige;
}

.ship {
  background-color: rgb(126, 126, 126);
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
  border-width: 4px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n/* prettier-ignore */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\n/* prettier-ignore */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin-bottom: 20px;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: rgba(0, 0, 232, 0.762);\n  color: beige;\n}\n\nbutton {\n  background-color: beige;\n  color: rgb(2, 2, 206);\n  padding: 0.5rem;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-weight: 600;\n}\n\nbutton:hover {\n  background-color: rgb(216, 216, 195);\n}\n\n.page-wrapper {\n  display: flex;\n  flex-flow: column;\n  gap: 3rem;\n  align-items: center;\n}\n\nh1 {\n  font-family: \"Bungee\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 5rem;\n  margin-top: 1rem;\n}\n\n.game-start-btn {\n  place-self: center;\n}\n\n#randomize-ships {\n  display: none;\n}\n\n.hit {\n  background-color: rgb(247, 23, 53);\n}\n\n.miss {\n  background-color: rgb(161, 161, 255);\n}\n\n.human-cell,\n.computer-cell,\n.player-cell {\n  border: 3px solid beige;\n}\n\n.player-cell:hover,\n.computer-cell:hover {\n  background-color: beige;\n}\n\n.ship {\n  background-color: rgb(126, 126, 126);\n}\n\n.game {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 4rem;\n}\n\n.game-wrapper {\n  display: grid;\n  gap: 1rem;\n}\n\n.game-over-message {\n  position: absolute;\n  white-space: pre;\n  text-align: center;\n  background-color: rgb(99, 35, 35);\n  color: beige;\n  padding: 1rem;\n  border: dashed beige 3px;\n  border-radius: 25px;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n}\n\ntable {\n  width: 400px;\n  height: 400px;\n  border-width: 4px;\n}\n\np {\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\n.content-wrapper {\n  background-color: rgba(25, 25, 162, 0.762);\n  padding: 1rem;\n  transform-origin: top;\n}\n\n.row-2,\n#collapse-rules-btn,\n.content-wrapper {\n  display: none;\n}\n\n.rules-ship,\n.rules-hit,\n.rules-miss {\n  display: inline-block;\n  width: 20px;\n  height: 1rem;\n}\n\n.rules-ship {\n  background-color: rgb(126, 126, 126);\n}\n\n.rules-hit {\n  background-color: rgb(247, 23, 53);\n}\n\n.rules-miss {\n  background-color: rgb(161, 161, 255);\n}\n\n.rules-hit,\n.rules-miss {\n  margin-left: 40px;\n}\n\n.rules p {\n  text-align: center;\n  font-size: 0.8rem;\n  line-height: 120%;\n  margin-bottom: 0.5rem;\n}\n\n.rules p:first-child {\n  font-size: 1.1rem;\n  font-weight: 800;\n  padding-bottom: 0.3rem;\n  text-align: center;\n}\n\np,\nbutton,\n.game-over-message {\n  font-family: \"Space Grotesk\", sans-serif;\n  font-optical-sizing: auto;\n  font-style: normal;\n}\n\n#collapse-rules-btn {\n  justify-self: end;\n  font-family: sans-serif;\n  padding: 0.4rem;\n  background-color: rgba(25, 25, 162, 0);\n  color: beige;\n  height: 35px;\n}\n\n#collapse-rules-btn:hover {\n  border-radius: 25px;\n  background-color: rgba(25, 25, 162, 0.762);\n}\n\n/* animations */\n\n.unrolled-btn {\n  animation: rotateBack 0.4s ease-out both;\n}\n\n.unrolled-div {\n  animation: unroll 0.2s ease-in-out both;\n}\n\n.collapsed-btn {\n  animation: rotate 0.4s ease-out both;\n}\n\n.collapsed-div {\n  animation: collapse 0.2s ease-in-out both;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(180deg);\n  }\n}\n\n@keyframes rotateBack {\n  from {\n    transform: rotate(180deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes unroll {\n  from {\n    transform: scale(1, 0);\n    height: 0;\n    opacity: 0;\n  }\n  to {\n    transform: scale(1, 1);\n    height: auto;\n    opacity: 1;\n  }\n}\n\n@keyframes collapse {\n  from {\n    transform: scale(1, 1);\n    height: auto;\n    opacity: 1;\n  }\n  to {\n    transform: scale(1, 0);\n    height: 0;\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);
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
// if (process.env.NODE_ENV !== "test") {
//   require("./dom");
// }

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
        // Generate a random orientation, x-coordinate, and y-coordinate
        let orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
        let x = Math.floor(Math.random() * this.board.length);
        let y = Math.floor(Math.random() * this.board.length);

        // Check if the ship can be placed at the generated location
        if (this.canPlace(ship, x, y, orientation)) {
          this.placeShip(ship, x, y, orientation);

          placed = true;
        }
      }
    }
  }

  // at this point in my life, there's not a single chance i would work through implementing this logic myself. in 20 years, i hope i'll find this project again and think "how pedestrian, i couldn't handle such a simple problem on my own." as of now though, i can't envision myself becoming that person, so forgive me. if you're me and reading this in 20 years and had the aforementioned thought, take a moment to feel proud of how far you've come.
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

      // Check the cell itself
      if (
        xCoordinate >= this.board.length ||
        yCoordinate >= this.board.length ||
        this.board[yCoordinate][xCoordinate] instanceof Ship
      ) {
        return false;
      }

      // Check the surrounding cells
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
  constructor(type, name) {
    this.type = type;
    this.board = new Gameboard();
    this.name = name;
  }
}

class GameController {
  constructor() {
    this.players = [
      new Player("human", "Player 1"),
      new Player("computer", "Player 2"),
    ];
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
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(function () {
  const gameStartBtn = document.querySelector(".game-start-btn");
  const twoPlayerGameStartBtn = document.querySelector(
    ".two-player-game-start-btn"
  );
  const randomizeShipsBtn = document.querySelector("#randomize-ships");
  const contentWrapper = document.querySelector(".content-wrapper");
  const rulesRow = document.querySelector(".row-2");
  const collapseBtn = document.querySelector("#collapse-rules-btn");

  // single player === 1, two players === 2
  let gameMode = null;
  const gameDiv = document.querySelector(".game");
  const game = new _index__WEBPACK_IMPORTED_MODULE_0__.GameController();
  let availableCoordinates = [];

  gameStartBtn.addEventListener("click", () => {
    // set mode
    gameMode = 1;
    // console.log(game);

    gameStartBtn.remove();
    twoPlayerGameStartBtn.remove();

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

    // show rules row
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

    // single player mode
    if (gameMode === 1) {
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
            // cell.textContent = " ";
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
        boardName.textContent = `${player.type}'s grid`;

        gameDiv.appendChild(boardName);
      });

      // two player mode
    } else {
      game.players.forEach((player) => {
        // create html gameboard
        let table = document.createElement("table");
        table.setAttribute("id", `${player.name}-board`);
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
            // cell.textContent = " ";
            cell.classList.add("player-cell");

            cell.dataset.x = i;
            cell.dataset.y = j;

            cell.style.cursor = "pointer";
            cell.addEventListener("click", () => twoPlayerCellClick(cell));

            if (player.board.isShip(cell.dataset.y, cell.dataset.x)) {
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
        boardName.textContent = `${player.name}'s grid`;

        gameDiv.appendChild(boardName);
      });
    }
  }

  // add class to guessed cells using isShip to differentiate between hit and miss
  function updateDOM() {
    const humanBoardCells = document.querySelectorAll(".human-cell");
    const computerBoardCells = document.querySelectorAll(".computer-cell");
    const playerCell = document.querySelectorAll(".player-cell");

    computerBoardCells.forEach((cell) => {
      // console.log("guessedCells:", game.players[0].board.guessedCells);

      // console.log("cellinfo:", `${[cell.dataset.x, cell.dataset.y]}`);

      if (
        game.players[1].board.guessedCells.some(
          (guessedCell) =>
            guessedCell[0] === cell.dataset.y &&
            guessedCell[1] === cell.dataset.x
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
            guessedCell[0] === cell.dataset.y &&
            guessedCell[1] === cell.dataset.x
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

    playerCell.forEach((cell) => {
      game.players.forEach((player) => {
        if (
          player.board.guessedCells.some(
            (guessedCell) =>
              guessedCell[0] === cell.dataset.y &&
              guessedCell[1] === cell.dataset.x
          )
        ) {
          // check if cell is ship
          if (player.board.isShip(cell.dataset.y, cell.dataset.x)) {
            cell.classList.remove("ship");
            cell.classList.add("hit");
          } else {
            cell.classList.add("miss");
          }
        }
      });
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
    let hit = game
      .getOpposingPlayer()
      .board.receiveAttack(String(y), String(x));

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

    gameDiv.setAttribute("style", "pointer-events: none");

    gameWrapper.classList.add("end-screen");
    gameOverMessage.classList.add("game-over-message");

    if (gameMode === 1) {
      gameOverMessage.textContent = `Game over, ${
        game.getCurrentPlayer().type
      } wins!\r\n\r\nRefresh the page to play again.`;
    } else {
      gameOverMessage.textContent = `Game over, ${
        game.getCurrentPlayer().name
      } wins!\r\n\r\nRefresh the page to play again.`;
    }

    gameWrapper.appendChild(gameOverMessage);
  }

  //

  //

  //

  //

  //

  //

  //

  //

  //

  //

  //

  //

  //

  //

  // 2 players fn

  // i'll probably also need a 2player flag or something

  twoPlayerGameStartBtn.addEventListener("click", () => {
    // set mode
    gameMode = 2;

    gameStartBtn.remove();
    twoPlayerGameStartBtn.remove();

    // initialize display
    twoPlayerSetupDOM();
  });

  function twoPlayerSetupDOM() {
    // set initial human turn flag:
    // game.playTurn();

    // get player names (default to player 1 and player 2)

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

    // ensure second player's grid is shown and clickable?

    // show rules row
    // need two randomize btns and diff rules?
    randomizeShipsBtn.style.display = "inline";
    rulesRow.style.display = "grid";
    contentWrapper.style.display = "inline";
    collapseBtn.style.display = "inline";
  }

  function twoPlayerCellClick(cell) {
    // show opponent's board(?)
    // each turn, player will click cells on opponent's board until miss
    // if hit, just update board to show the hit
    // if miss
    // setinterval to let player see the miss
    // then remove the boards
    // display message saying pass the screen to opponent with button to continue AS the next player
    // on button click, display new player's opponent's board

    // check win after each click

    // if player 1
    if (game.currentPlayerIndex === 0) {
      // show player 2's grid
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
        // change display
        updateDOM();
        game.nextTurn();
      }

      if (game.winCheck()) {
        gameOver();
      } else {
        return;
      }
    }
  }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtGQUFrRixLQUFLLFlBQVksa0JBQWtCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLFFBQVEsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxP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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLHdDQUFJO0FBQ2QsVUFBVSx3Q0FBSTtBQUNkLFVBQVUsd0NBQUk7QUFDZCxVQUFVLHdDQUFJO0FBQ2QsVUFBVSx3Q0FBSTtBQUNkO0FBQ0E7QUFDQSxVQUFVLHdDQUFJO0FBQ2QsVUFBVSx3Q0FBSTtBQUNkLFVBQVUsd0NBQUk7QUFDZCxVQUFVLHdDQUFJO0FBQ2QsVUFBVSx3Q0FBSTtBQUNkOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuLyogcHJldHRpZXItaWdub3JlICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjMyLCAwLjc2Mik7XG4gIGNvbG9yOiBiZWlnZTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG4gIGNvbG9yOiByZ2IoMiwgMiwgMjA2KTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDE5NSk7XG59XG5cbi5wYWdlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiAzcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJ1bmdlZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmdhbWUtc3RhcnQtYnRuIHtcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xufVxuXG4jcmFuZG9taXplLXNoaXBzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIzLCA1Myk7XG59XG5cbi5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTYxLCAyNTUpO1xufVxuXG4uaHVtYW4tY2VsbCxcbi5jb21wdXRlci1jZWxsLFxuLnBsYXllci1jZWxsIHtcbiAgYm9yZGVyOiAzcHggc29saWQgYmVpZ2U7XG59XG5cbi5wbGF5ZXItY2VsbDpob3Zlcixcbi5jb21wdXRlci1jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG59XG5cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNiwgMTI2LCAxMjYpO1xufVxuXG4uZ2FtZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgY29sdW1uLWdhcDogNHJlbTtcbn1cblxuLmdhbWUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbn1cblxuLmdhbWUtb3Zlci1tZXNzYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMzUsIDM1KTtcbiAgY29sb3I6IGJlaWdlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IGRhc2hlZCBiZWlnZSAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBib3JkZXItd2lkdGg6IDRweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjUsIDE2MiwgMC43NjIpO1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG59XG5cbi5yb3ctMixcbiNjb2xsYXBzZS1ydWxlcy1idG4sXG4uY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJ1bGVzLXNoaXAsXG4ucnVsZXMtaGl0LFxuLnJ1bGVzLW1pc3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDFyZW07XG59XG5cbi5ydWxlcy1zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNiwgMTI2LCAxMjYpO1xufVxuXG4ucnVsZXMtaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjMsIDUzKTtcbn1cblxuLnJ1bGVzLW1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNjEsIDI1NSk7XG59XG5cbi5ydWxlcy1oaXQsXG4ucnVsZXMtbWlzcyB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4ucnVsZXMgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5ydWxlcyBwOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucCxcbmJ1dHRvbixcbi5nYW1lLW92ZXItbWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEdyb3Rlc2tcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4jY29sbGFwc2UtcnVsZXMtYnRuIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI1LCAxNjIsIDApO1xuICBjb2xvcjogYmVpZ2U7XG4gIGhlaWdodDogMzVweDtcbn1cblxuI2NvbGxhcHNlLXJ1bGVzLWJ0bjpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI1LCAxNjIsIDAuNzYyKTtcbn1cblxuLyogYW5pbWF0aW9ucyAqL1xuXG4udW5yb2xsZWQtYnRuIHtcbiAgYW5pbWF0aW9uOiByb3RhdGVCYWNrIDAuNHMgZWFzZS1vdXQgYm90aDtcbn1cblxuLnVucm9sbGVkLWRpdiB7XG4gIGFuaW1hdGlvbjogdW5yb2xsIDAuMnMgZWFzZS1pbi1vdXQgYm90aDtcbn1cblxuLmNvbGxhcHNlZC1idG4ge1xuICBhbmltYXRpb246IHJvdGF0ZSAwLjRzIGVhc2Utb3V0IGJvdGg7XG59XG5cbi5jb2xsYXBzZWQtZGl2IHtcbiAgYW5pbWF0aW9uOiBjb2xsYXBzZSAwLjJzIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByb3RhdGVCYWNrIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB1bnJvbGwge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xuICAgIGhlaWdodDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY29sbGFwc2Uge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xuICAgIGhlaWdodDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDO0FBQ0Qsb0JBQW9CO0FBQ3BCOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQsb0JBQW9CO0FBQ3BCOztDQUVDLGNBQWM7QUFDZjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7OztFQUdFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixTQUFTO0VBQ1QsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7OztFQUdFLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSx3Q0FBd0M7RUFDeEMseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBDQUEwQztBQUM1Qzs7QUFFQSxlQUFlOztBQUVmO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0VBQ1o7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDIzMiwgMC43NjIpO1xcbiAgY29sb3I6IGJlaWdlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICBjb2xvcjogcmdiKDIsIDIsIDIwNik7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAxOTUpO1xcbn1cXG5cXG4ucGFnZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogM3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQnVuZ2VlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uZ2FtZS1zdGFydC1idG4ge1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jcmFuZG9taXplLXNoaXBzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjMsIDUzKTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTYxLCAyNTUpO1xcbn1cXG5cXG4uaHVtYW4tY2VsbCxcXG4uY29tcHV0ZXItY2VsbCxcXG4ucGxheWVyLWNlbGwge1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmVpZ2U7XFxufVxcblxcbi5wbGF5ZXItY2VsbDpob3ZlcixcXG4uY29tcHV0ZXItY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNiwgMTI2LCAxMjYpO1xcbn1cXG5cXG4uZ2FtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgY29sdW1uLWdhcDogNHJlbTtcXG59XFxuXFxuLmdhbWUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMzUsIDM1KTtcXG4gIGNvbG9yOiBiZWlnZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IGRhc2hlZCBiZWlnZSAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgdG9wOiA0MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbn1cXG5cXG50YWJsZSB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI1LCAxNjIsIDAuNzYyKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxufVxcblxcbi5yb3ctMixcXG4jY29sbGFwc2UtcnVsZXMtYnRuLFxcbi5jb250ZW50LXdyYXBwZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJ1bGVzLXNoaXAsXFxuLnJ1bGVzLWhpdCxcXG4ucnVsZXMtbWlzcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLnJ1bGVzLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNiwgMTI2LCAxMjYpO1xcbn1cXG5cXG4ucnVsZXMtaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIzLCA1Myk7XFxufVxcblxcbi5ydWxlcy1taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE2MSwgMjU1KTtcXG59XFxuXFxuLnJ1bGVzLWhpdCxcXG4ucnVsZXMtbWlzcyB7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuLnJ1bGVzIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBsaW5lLWhlaWdodDogMTIwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnJ1bGVzIHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucCxcXG5idXR0b24sXFxuLmdhbWUtb3Zlci1tZXNzYWdlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BhY2UgR3JvdGVza1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4jY29sbGFwc2UtcnVsZXMtYnRuIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCAyNSwgMTYyLCAwKTtcXG4gIGNvbG9yOiBiZWlnZTtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuI2NvbGxhcHNlLXJ1bGVzLWJ0bjpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjUsIDE2MiwgMC43NjIpO1xcbn1cXG5cXG4vKiBhbmltYXRpb25zICovXFxuXFxuLnVucm9sbGVkLWJ0biB7XFxuICBhbmltYXRpb246IHJvdGF0ZUJhY2sgMC40cyBlYXNlLW91dCBib3RoO1xcbn1cXG5cXG4udW5yb2xsZWQtZGl2IHtcXG4gIGFuaW1hdGlvbjogdW5yb2xsIDAuMnMgZWFzZS1pbi1vdXQgYm90aDtcXG59XFxuXFxuLmNvbGxhcHNlZC1idG4ge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgMC40cyBlYXNlLW91dCBib3RoO1xcbn1cXG5cXG4uY29sbGFwc2VkLWRpdiB7XFxuICBhbmltYXRpb246IGNvbGxhcHNlIDAuMnMgZWFzZS1pbi1vdXQgYm90aDtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZUJhY2sge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHVucm9sbCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgY29sbGFwc2Uge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJ0ZXN0XCIpIHtcbi8vICAgcmVxdWlyZShcIi4vZG9tXCIpO1xuLy8gfVxuXG5jbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRDb3VudCA9IDA7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRDb3VudCsrO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdENvdW50ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICB0aGlzLm1pc3NlZFNob3RzID0gW107XG4gICAgdGhpcy5ndWVzc2VkQ2VsbHMgPSBbXTtcbiAgfVxuXG4gIGNyZWF0ZUJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkQXJyID0gW107XG4gICAgY29uc3Qgc2l6ZSA9IDEwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBsZXQgcm93ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICByb3cucHVzaChcIiBcIik7XG4gICAgICB9XG4gICAgICBib2FyZEFyci5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBib2FyZEFycjtcbiAgfVxuXG4gIHByaW50Qm9hcmQoKSB7XG4gICAgbGV0IGJvYXJkU3RyaW5nID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICBib2FyZFN0cmluZyArPSBcIlggXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm9hcmRTdHJpbmcgKz0gXCItIFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBib2FyZFN0cmluZyArPSBcIlxcblwiO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhib2FyZFN0cmluZyk7XG4gIH1cblxuICBwbGFjZVJhbmRvbVNoaXBzKHNoaXBBcnIpIHtcbiAgICBmb3IgKGxldCBzaGlwIG9mIHNoaXBBcnIpIHtcbiAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIGEgcmFuZG9tIG9yaWVudGF0aW9uLCB4LWNvb3JkaW5hdGUsIGFuZCB5LWNvb3JkaW5hdGVcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYm9hcmQubGVuZ3RoKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmJvYXJkLmxlbmd0aCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHNoaXAgY2FuIGJlIHBsYWNlZCBhdCB0aGUgZ2VuZXJhdGVkIGxvY2F0aW9uXG4gICAgICAgIGlmICh0aGlzLmNhblBsYWNlKHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKSkge1xuICAgICAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKTtcblxuICAgICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBhdCB0aGlzIHBvaW50IGluIG15IGxpZmUsIHRoZXJlJ3Mgbm90IGEgc2luZ2xlIGNoYW5jZSBpIHdvdWxkIHdvcmsgdGhyb3VnaCBpbXBsZW1lbnRpbmcgdGhpcyBsb2dpYyBteXNlbGYuIGluIDIwIHllYXJzLCBpIGhvcGUgaSdsbCBmaW5kIHRoaXMgcHJvamVjdCBhZ2FpbiBhbmQgdGhpbmsgXCJob3cgcGVkZXN0cmlhbiwgaSBjb3VsZG4ndCBoYW5kbGUgc3VjaCBhIHNpbXBsZSBwcm9ibGVtIG9uIG15IG93bi5cIiBhcyBvZiBub3cgdGhvdWdoLCBpIGNhbid0IGVudmlzaW9uIG15c2VsZiBiZWNvbWluZyB0aGF0IHBlcnNvbiwgc28gZm9yZ2l2ZSBtZS4gaWYgeW91J3JlIG1lIGFuZCByZWFkaW5nIHRoaXMgaW4gMjAgeWVhcnMgYW5kIGhhZCB0aGUgYWZvcmVtZW50aW9uZWQgdGhvdWdodCwgdGFrZSBhIG1vbWVudCB0byBmZWVsIHByb3VkIG9mIGhvdyBmYXIgeW91J3ZlIGNvbWUuXG4gIGNhblBsYWNlKHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgeENvb3JkaW5hdGUsIHlDb29yZGluYXRlO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgeENvb3JkaW5hdGUgPSB4ICsgaTtcbiAgICAgICAgeUNvb3JkaW5hdGUgPSB5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeENvb3JkaW5hdGUgPSB4O1xuICAgICAgICB5Q29vcmRpbmF0ZSA9IHkgKyBpO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayB0aGUgY2VsbCBpdHNlbGZcbiAgICAgIGlmIChcbiAgICAgICAgeENvb3JkaW5hdGUgPj0gdGhpcy5ib2FyZC5sZW5ndGggfHxcbiAgICAgICAgeUNvb3JkaW5hdGUgPj0gdGhpcy5ib2FyZC5sZW5ndGggfHxcbiAgICAgICAgdGhpcy5ib2FyZFt5Q29vcmRpbmF0ZV1beENvb3JkaW5hdGVdIGluc3RhbmNlb2YgU2hpcFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgdGhlIHN1cnJvdW5kaW5nIGNlbGxzXG4gICAgICBmb3IgKGxldCBkeCA9IC0xOyBkeCA8PSAxOyBkeCsrKSB7XG4gICAgICAgIGZvciAobGV0IGR5ID0gLTE7IGR5IDw9IDE7IGR5KyspIHtcbiAgICAgICAgICBsZXQgbnggPSB4Q29vcmRpbmF0ZSArIGR4O1xuICAgICAgICAgIGxldCBueSA9IHlDb29yZGluYXRlICsgZHk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbnggPj0gMCAmJlxuICAgICAgICAgICAgbnggPCB0aGlzLmJvYXJkLmxlbmd0aCAmJlxuICAgICAgICAgICAgbnkgPj0gMCAmJlxuICAgICAgICAgICAgbnkgPCB0aGlzLmJvYXJkLmxlbmd0aCAmJlxuICAgICAgICAgICAgdGhpcy5ib2FyZFtueV1bbnhdIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCB4Q29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUsIG9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeUNvb3JkaW5hdGVdW3hDb29yZGluYXRlICsgaV0gPSBzaGlwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ib2FyZFt5Q29vcmRpbmF0ZSArIGldW3hDb29yZGluYXRlXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeUNvb3JkaW5hdGUsIHhDb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuYm9hcmRbeUNvb3JkaW5hdGVdW3hDb29yZGluYXRlXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIHRoaXMuYm9hcmRbeUNvb3JkaW5hdGVdW3hDb29yZGluYXRlXS5oaXQoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0IHNoaXBcIik7XG5cbiAgICAgIHRoaXMuZ3Vlc3NlZENlbGxzLnB1c2goW3lDb29yZGluYXRlLCB4Q29vcmRpbmF0ZV0pO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJndWVzc2VkIHNob3RzXCIsIHRoaXMuZ3Vlc3NlZENlbGxzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1pc3NlZFNob3RzLnB1c2goW3lDb29yZGluYXRlLCB4Q29vcmRpbmF0ZV0pO1xuICAgICAgdGhpcy5ndWVzc2VkQ2VsbHMucHVzaChbeUNvb3JkaW5hdGUsIHhDb29yZGluYXRlXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImd1ZXNzZWQgc2hvdHNcIiwgdGhpcy5ndWVzc2VkQ2VsbHMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFsbFN1bmsoKSB7XG4gICAgbGV0IHN1bmtDb3VudCA9IDA7XG4gICAgdGhpcy5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBzdW5rQ291bnQrKztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3Vua0NvdW50ID09PSB0aGlzLnNoaXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpc1NoaXAoeUNvb3JkaW5hdGUsIHhDb29yZGluYXRlKSB7XG4gICAgY29uc29sZS5sb2coXCJpcyBzaGlwIGNhbGxlZDpcIik7XG5cbiAgICBpZiAodGhpcy5ib2FyZFt5Q29vcmRpbmF0ZV1beENvb3JkaW5hdGVdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgY29uc29sZS5sb2coXCJpdCB3YXMgYSBzaGlwISFcIik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxufVxuXG5jbGFzcyBHYW1lQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWVycyA9IFtcbiAgICAgIG5ldyBQbGF5ZXIoXCJodW1hblwiLCBcIlBsYXllciAxXCIpLFxuICAgICAgbmV3IFBsYXllcihcImNvbXB1dGVyXCIsIFwiUGxheWVyIDJcIiksXG4gICAgXTtcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcnNbMF07XG4gICAgdGhpcy5jdXJyZW50UGxheWVySW5kZXggPSAwO1xuICAgIHRoaXMuY3VycmVudElzSHVtYW4gPSB0cnVlO1xuICB9XG5cbiAgZ2FtZVN0YXJ0KCkge1xuICAgIHRoaXMucGxheVR1cm4odGhpcy5nZXRDdXJyZW50UGxheWVyKCkpO1xuICB9XG5cbiAgLy8gc2V0cyBmbGFnIGZvciB3aGV0aGVyIGN1cnJlbnQgdHVybiBpcyBodW1hblxuICBwbGF5VHVybigpIHtcbiAgICBpZiAodGhpcy5nZXRDdXJyZW50UGxheWVyKCkudHlwZSA9PT0gXCJodW1hblwiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJc0h1bWFuID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50SXNIdW1hbiA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnQgcGxheWVyOlwiLCB0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS50eXBlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm9wcG9zaW5nIHBsYXllcjpcIiwgdGhpcy5nZXRPcHBvc2luZ1BsYXllcigpLnR5cGUpO1xuICB9XG5cbiAgLy8gb25seSBnZXRzIGNhbGxlZCBpbiBET00gbWF5YmU/XG4gIG5leHRUdXJuKCkge1xuICAgIHRoaXMuY3VycmVudFBsYXllckluZGV4ID1cbiAgICAgICh0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgdGhpcy5wbGF5ZXJzLmxlbmd0aDtcblxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCJuZXh0IHR1cm4gY2FsbGVkLCBjdXJyZW50IHBsYXllciBpcyBub3c6XCIsXG4gICAgICB0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS50eXBlXG4gICAgKTtcbiAgfVxuXG4gIHdpbkNoZWNrKCkge1xuICAgIGlmICh0aGlzLmdldE9wcG9zaW5nUGxheWVyKCkuYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleF07XG4gIH1cblxuICBnZXRPcHBvc2luZ1BsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJzWyh0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgdGhpcy5wbGF5ZXJzLmxlbmd0aF07XG4gIH1cbn1cblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIsIEdhbWVDb250cm9sbGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciwgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2FtZVN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLXN0YXJ0LWJ0blwiKTtcbiAgY29uc3QgdHdvUGxheWVyR2FtZVN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi50d28tcGxheWVyLWdhbWUtc3RhcnQtYnRuXCJcbiAgKTtcbiAgY29uc3QgcmFuZG9taXplU2hpcHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhbmRvbWl6ZS1zaGlwc1wiKTtcbiAgY29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtd3JhcHBlclwiKTtcbiAgY29uc3QgcnVsZXNSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdy0yXCIpO1xuICBjb25zdCBjb2xsYXBzZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sbGFwc2UtcnVsZXMtYnRuXCIpO1xuXG4gIC8vIHNpbmdsZSBwbGF5ZXIgPT09IDEsIHR3byBwbGF5ZXJzID09PSAyXG4gIGxldCBnYW1lTW9kZSA9IG51bGw7XG4gIGNvbnN0IGdhbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVcIik7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZUNvbnRyb2xsZXIoKTtcbiAgbGV0IGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gW107XG5cbiAgZ2FtZVN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gc2V0IG1vZGVcbiAgICBnYW1lTW9kZSA9IDE7XG4gICAgLy8gY29uc29sZS5sb2coZ2FtZSk7XG5cbiAgICBnYW1lU3RhcnRCdG4ucmVtb3ZlKCk7XG4gICAgdHdvUGxheWVyR2FtZVN0YXJ0QnRuLnJlbW92ZSgpO1xuXG4gICAgLy8gY29tcHV0ZXIgZ3Vlc3MgcG9vbFxuICAgIGludGlhbGl6ZVBvc3NpYmxlQ29vcmRpbmF0ZXMoKTtcblxuICAgIC8vIGluaXRpYWxpemUgZGlzcGxheVxuICAgIHNldHVwRE9NKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHNldHVwRE9NKCkge1xuICAgIC8vIHNldCBpbml0aWFsIGh1bWFuIHR1cm4gZmxhZzpcbiAgICBnYW1lLnBsYXlUdXJuKCk7XG5cbiAgICAvLyBzZXQgdXAgcGxheWVyIHZhcmlhYmxlc1xuICAgIGNvbnN0IHAxID0gZ2FtZS5wbGF5ZXJzWzBdO1xuICAgIGNvbnN0IHAyID0gZ2FtZS5wbGF5ZXJzWzFdO1xuXG4gICAgLy8gY3JlYXRlIGFycmF5cyBvZiBzaGlwcyBmb3IgZWFjaCBwbGF5ZXJcbiAgICBsZXQgc2hpcHMxID0gW1xuICAgICAgbmV3IFNoaXAoNSksXG4gICAgICBuZXcgU2hpcCg0KSxcbiAgICAgIG5ldyBTaGlwKDMpLFxuICAgICAgbmV3IFNoaXAoMyksXG4gICAgICBuZXcgU2hpcCgyKSxcbiAgICBdO1xuICAgIGxldCBzaGlwczIgPSBbXG4gICAgICBuZXcgU2hpcCg1KSxcbiAgICAgIG5ldyBTaGlwKDQpLFxuICAgICAgbmV3IFNoaXAoMyksXG4gICAgICBuZXcgU2hpcCgzKSxcbiAgICAgIG5ldyBTaGlwKDIpLFxuICAgIF07XG5cbiAgICAvLyBwbGFjZSBzaGlwcyBvbiBib2FyZHNcbiAgICBwMS5ib2FyZC5wbGFjZVJhbmRvbVNoaXBzKHNoaXBzMSk7XG4gICAgcDIuYm9hcmQucGxhY2VSYW5kb21TaGlwcyhzaGlwczIpO1xuXG4gICAgLy8gY3JlYXRlIGJvYXJkc1xuICAgIGNyZWF0ZVBsYXllckJvYXJkcygpO1xuXG4gICAgLy8gc2hvdyBydWxlcyByb3dcbiAgICByYW5kb21pemVTaGlwc0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICBydWxlc1Jvdy5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgY29udGVudFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgY29sbGFwc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gIH1cblxuICBjb2xsYXBzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbGxhcHNlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWQtYnRuXCIpO1xuICAgIGNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWQtZGl2XCIpO1xuICB9KTtcblxuICByYW5kb21pemVTaGlwc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIG9ubHkgbmVlZCB0byByZS1yYW5kb21pemUgaHVtYW4gc2hpcHNcbiAgICBnYW1lLnBsYXllcnNbMF0uYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbiAgICBsZXQgc2hpcHMxID0gW1xuICAgICAgbmV3IFNoaXAoNSksXG4gICAgICBuZXcgU2hpcCg0KSxcbiAgICAgIG5ldyBTaGlwKDMpLFxuICAgICAgbmV3IFNoaXAoMyksXG4gICAgICBuZXcgU2hpcCgyKSxcbiAgICBdO1xuXG4gICAgZ2FtZS5wbGF5ZXJzWzBdLmJvYXJkLnBsYWNlUmFuZG9tU2hpcHMoc2hpcHMxKTtcblxuICAgIGNyZWF0ZVBsYXllckJvYXJkcygpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJCb2FyZHMoKSB7XG4gICAgZ2FtZURpdi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAvLyBzaW5nbGUgcGxheWVyIG1vZGVcbiAgICBpZiAoZ2FtZU1vZGUgPT09IDEpIHtcbiAgICAgIGdhbWUucGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgICAgLy8gY3JlYXRlIGh0bWwgZ2FtZWJvYXJkXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICAgICAgdGFibGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cGxheWVyLnR5cGV9LWJvYXJkYCk7XG4gICAgICAgIC8vIGhlYWRlciByb3cgZm9yIHRoZSB4LWF4aXMgbGFiZWxzXG4gICAgICAgIGxldCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIC8vIGVtcHR5IHRvcCBsZWZ0IGNvcm5lclxuICAgICAgICBsZXQgZW1wdHlDb3JuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGVtcHR5Q29ybmVyKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgYXhpc0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgYXhpc0NlbGwudGV4dENvbnRlbnQgPSBpO1xuICAgICAgICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChheGlzQ2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZGVyUm93KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5ib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgICAgICAvLyBjcmVhdGUgYXhpcyBjZWxsXG4gICAgICAgICAgbGV0IGF4aXNDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgIGF4aXNDZWxsLnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYXhpc0NlbGwpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIuYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgLy8gY2VsbC50ZXh0Q29udGVudCA9IFwiIFwiO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGAke3BsYXllci50eXBlfS1jZWxsYCk7XG5cbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC55ID0gajtcblxuICAgICAgICAgICAgaWYgKHBsYXllci50eXBlID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgICAgICAgLy8gbWFrZSBjbGlja2FibGUgaWYgcGxheWVyIGlzIG9wcG9uZW50XG4gICAgICAgICAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNlbGxDbGljayhjZWxsKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllci5ib2FyZC5pc1NoaXAoY2VsbC5kYXRhc2V0LnksIGNlbGwuZGF0YXNldC54KSkge1xuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXBwZW5kIGJvYXJkc1xuICAgICAgICBnYW1lRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICAgIH0pO1xuICAgICAgLy8gYXBwZW5kIGJvYXJkIG5hbWVzXG4gICAgICBnYW1lLnBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICAgIGxldCBib2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgYm9hcmROYW1lLnRleHRDb250ZW50ID0gYCR7cGxheWVyLnR5cGV9J3MgZ3JpZGA7XG5cbiAgICAgICAgZ2FtZURpdi5hcHBlbmRDaGlsZChib2FyZE5hbWUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHR3byBwbGF5ZXIgbW9kZVxuICAgIH0gZWxzZSB7XG4gICAgICBnYW1lLnBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICAgIC8vIGNyZWF0ZSBodG1sIGdhbWVib2FyZFxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgICAgIHRhYmxlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3BsYXllci5uYW1lfS1ib2FyZGApO1xuICAgICAgICAvLyBoZWFkZXIgcm93IGZvciB0aGUgeC1heGlzIGxhYmVsc1xuICAgICAgICBsZXQgaGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAvLyBlbXB0eSB0b3AgbGVmdCBjb3JuZXJcbiAgICAgICAgbGV0IGVtcHR5Q29ybmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChlbXB0eUNvcm5lcik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLmJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGF4aXNDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgIGF4aXNDZWxsLnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoYXhpc0NlbGwpO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWRlclJvdyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gICAgICAgICAgLy8gY3JlYXRlIGF4aXMgY2VsbFxuICAgICAgICAgIGxldCBheGlzQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICBheGlzQ2VsbC50ZXh0Q29udGVudCA9IGk7XG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKGF4aXNDZWxsKTtcblxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyLmJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIC8vIGNlbGwudGV4dENvbnRlbnQgPSBcIiBcIjtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jZWxsXCIpO1xuXG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQueCA9IGk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGo7XG5cbiAgICAgICAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0d29QbGF5ZXJDZWxsQ2xpY2soY2VsbCkpO1xuXG4gICAgICAgICAgICBpZiAocGxheWVyLmJvYXJkLmlzU2hpcChjZWxsLmRhdGFzZXQueSwgY2VsbC5kYXRhc2V0LngpKSB7XG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhcHBlbmQgYm9hcmRzXG4gICAgICAgIGdhbWVEaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgICAgfSk7XG4gICAgICAvLyBhcHBlbmQgYm9hcmQgbmFtZXNcbiAgICAgIGdhbWUucGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBib2FyZE5hbWUudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIubmFtZX0ncyBncmlkYDtcblxuICAgICAgICBnYW1lRGl2LmFwcGVuZENoaWxkKGJvYXJkTmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBhZGQgY2xhc3MgdG8gZ3Vlc3NlZCBjZWxscyB1c2luZyBpc1NoaXAgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGhpdCBhbmQgbWlzc1xuICBmdW5jdGlvbiB1cGRhdGVET00oKSB7XG4gICAgY29uc3QgaHVtYW5Cb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5odW1hbi1jZWxsXCIpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXItY2VsbFwiKTtcbiAgICBjb25zdCBwbGF5ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItY2VsbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImd1ZXNzZWRDZWxsczpcIiwgZ2FtZS5wbGF5ZXJzWzBdLmJvYXJkLmd1ZXNzZWRDZWxscyk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2VsbGluZm86XCIsIGAke1tjZWxsLmRhdGFzZXQueCwgY2VsbC5kYXRhc2V0LnldfWApO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGdhbWUucGxheWVyc1sxXS5ib2FyZC5ndWVzc2VkQ2VsbHMuc29tZShcbiAgICAgICAgICAoZ3Vlc3NlZENlbGwpID0+XG4gICAgICAgICAgICBndWVzc2VkQ2VsbFswXSA9PT0gY2VsbC5kYXRhc2V0LnkgJiZcbiAgICAgICAgICAgIGd1ZXNzZWRDZWxsWzFdID09PSBjZWxsLmRhdGFzZXQueFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgY2VsbCBpcyBzaGlwXG4gICAgICAgIGlmIChnYW1lLnBsYXllcnNbMV0uYm9hcmQuaXNTaGlwKGNlbGwuZGF0YXNldC55LCBjZWxsLmRhdGFzZXQueCkpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaHVtYW5Cb2FyZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ3Vlc3NlZENlbGxzOlwiLCBnYW1lLnBsYXllcnNbMF0uYm9hcmQuZ3Vlc3NlZENlbGxzKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJjZWxsaW5mbzpcIiwgYCR7W2NlbGwuZGF0YXNldC54LCBjZWxsLmRhdGFzZXQueV19YCk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgZ2FtZS5wbGF5ZXJzWzBdLmJvYXJkLmd1ZXNzZWRDZWxscy5zb21lKFxuICAgICAgICAgIChndWVzc2VkQ2VsbCkgPT5cbiAgICAgICAgICAgIGd1ZXNzZWRDZWxsWzBdID09PSBjZWxsLmRhdGFzZXQueSAmJlxuICAgICAgICAgICAgZ3Vlc3NlZENlbGxbMV0gPT09IGNlbGwuZGF0YXNldC54XG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICAvLyBjaGVjayBpZiBjZWxsIGlzIHNoaXBcbiAgICAgICAgaWYgKGdhbWUucGxheWVyc1swXS5ib2FyZC5pc1NoaXAoY2VsbC5kYXRhc2V0LnksIGNlbGwuZGF0YXNldC54KSkge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBsYXllckNlbGwuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgZ2FtZS5wbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyLmJvYXJkLmd1ZXNzZWRDZWxscy5zb21lKFxuICAgICAgICAgICAgKGd1ZXNzZWRDZWxsKSA9PlxuICAgICAgICAgICAgICBndWVzc2VkQ2VsbFswXSA9PT0gY2VsbC5kYXRhc2V0LnkgJiZcbiAgICAgICAgICAgICAgZ3Vlc3NlZENlbGxbMV0gPT09IGNlbGwuZGF0YXNldC54XG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiBjZWxsIGlzIHNoaXBcbiAgICAgICAgICBpZiAocGxheWVyLmJvYXJkLmlzU2hpcChjZWxsLmRhdGFzZXQueSwgY2VsbC5kYXRhc2V0LngpKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgaXNDb21wdXRlclR1cm4gPSBmYWxzZTtcblxuICBmdW5jdGlvbiBjZWxsQ2xpY2soY2VsbCkge1xuICAgIC8vIHByZXZlbnRzIHBsYXllcnMgZnJvbSBjbGlja2luZyB3aGVuIGNvbXB1dGVyJ3MgdHVyblxuICAgIGlmIChpc0NvbXB1dGVyVHVybikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChnYW1lLmN1cnJlbnRJc0h1bWFuKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInksIHg6XCIsIGNlbGwuZGF0YXNldC55LCBjZWxsLmRhdGFzZXQueCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNoaXAgYXQ6XCIsIGdhbWUucGxheWVyc1sxXS5ib2FyZC5ib2FyZFs1XVs1XSk7XG5cbiAgICAgIC8vIHJlbW92ZSByYW5kb21pemUgYnV0dG9uXG4gICAgICByYW5kb21pemVTaGlwc0J0bi5yZW1vdmUoKTtcblxuICAgICAgLy8gZGlzYWxsb3cgY2xpY2tpbmcgdGhlIHNhbWUgY2VsbCB0d2ljZVxuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInBvaW50ZXItZXZlbnRzOiBub25lXCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcblxuICAgICAgbGV0IGhpdCA9IGdhbWVcbiAgICAgICAgLmdldE9wcG9zaW5nUGxheWVyKClcbiAgICAgICAgLmJvYXJkLnJlY2VpdmVBdHRhY2soY2VsbC5kYXRhc2V0LnksIGNlbGwuZGF0YXNldC54KTtcblxuICAgICAgLy8gcmUtcmVuZGVyIGNsaWNrZWQgY2VsbCB0byBzaG93IGhpdC9taXNzIGltbWVkaWF0ZWx5XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wdXRlci1jZWxsXCIpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItY2VsbFwiKTtcbiAgICAgICAgdXBkYXRlRE9NKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGhpdCkge1xuICAgICAgICB1cGRhdGVET00oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZURPTSgpO1xuXG4gICAgICAgIGdhbWUubmV4dFR1cm4oKTtcbiAgICAgICAgY29tcHV0ZXJUdXJuKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChnYW1lLndpbkNoZWNrKCkpIHtcbiAgICAgICAgZ2FtZU92ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlQ2xpY2tzKCkge1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wdXRlci1jZWxsLCAuaHVtYW4tY2VsbFwiKTtcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBpZiAoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xpY2tlZFwiKSkge1xuICAgICAgICBjZWxsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZUNsaWNrcygpIHtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXItY2VsbCwgLmh1bWFuLWNlbGxcIik7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgaWYgKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcImNsaWNrZWRcIikpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnRpYWxpemVQb3NzaWJsZUNvb3JkaW5hdGVzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGF2YWlsYWJsZUNvb3JkaW5hdGVzLnB1c2goW2ksIGpdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXZhaWxhYmxlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBsZXQgbGFzdEhpdCA9IG51bGw7XG4gIGxldCBkaXJlY3Rpb24gPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGNvbXB1dGVyVHVybigpIHtcbiAgICBpc0NvbXB1dGVyVHVybiA9IHRydWU7XG4gICAgZGlzYWJsZUNsaWNrcygpO1xuXG4gICAgaWYgKGF2YWlsYWJsZUNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdXBkYXRlRE9NKCk7XG4gICAgICBnYW1lLm5leHRUdXJuKCk7XG4gICAgICBlbmFibGVDbGlja3MoKTtcbiAgICAgIGlzQ29tcHV0ZXJUdXJuID0gZmFsc2U7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaW5kZXg7XG4gICAgbGV0IHgsIHk7XG5cbiAgICBpZiAobGFzdEhpdCAmJiBkaXJlY3Rpb24pIHtcbiAgICAgIC8vIGNvbnRpbnVlIGluIHRoZSBzYW1lIGRpcmVjdGlvbiBpZiBsYXN0IGd1ZXNzIHdhcyBhIGhpdFxuICAgICAgW3gsIHldID1cbiAgICAgICAgZGlyZWN0aW9uID09PSBcInhcIlxuICAgICAgICAgID8gW2xhc3RIaXRbMF0sIGxhc3RIaXRbMV0gKyAxXVxuICAgICAgICAgIDogW2xhc3RIaXRbMF0gKyAxLCBsYXN0SGl0WzFdXTtcbiAgICAgIGluZGV4ID0gYXZhaWxhYmxlQ29vcmRpbmF0ZXMuZmluZEluZGV4KFxuICAgICAgICAoY29vcmQpID0+IGNvb3JkWzBdID09PSB4ICYmIGNvb3JkWzFdID09PSB5XG4gICAgICApO1xuICAgICAgaWYgKGluZGV4ID09PSAtMSB8fCB4ID49IGdhbWUuYm9hcmRTaXplIHx8IHkgPj0gZ2FtZS5ib2FyZFNpemUpIHtcbiAgICAgICAgLy8gaWYgbmV4dCBjb29yZGluYXRlIGluIHRoZSBzYW1lIGRpcmVjdGlvbiBpcyBub3QgYXZhaWxhYmxlIG9yIG91dCBvZiBib3VuZHMsIGNob29zZSBhIHJhbmRvbSBjb29yZGluYXRlXG4gICAgICAgIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgICAgICAgW3gsIHldID0gYXZhaWxhYmxlQ29vcmRpbmF0ZXNbaW5kZXhdO1xuICAgICAgICBsYXN0SGl0ID0gbnVsbDtcbiAgICAgICAgZGlyZWN0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hvb3NlIGEgcmFuZG9tIGNvb3JkaW5hdGUgaWYgdGhlIGxhc3QgZ3Vlc3Mgd2FzIGEgbWlzcyBvciB0aGVyZSB3YXMgbm8gbGFzdCBndWVzc1xuICAgICAgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGgpO1xuICAgICAgW3gsIHldID0gYXZhaWxhYmxlQ29vcmRpbmF0ZXNbaW5kZXhdO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSB0aGUgY2hvc2VuIGNvb3JkaW5hdGUgZnJvbSBhdmFpbGFibGVDb29yZGluYXRlc1xuICAgIGF2YWlsYWJsZUNvb3JkaW5hdGVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAvLyBjb252ZXJ0IHRvIHN0cmluZ3MgZm9yIGNvbmZvcm1pdHlcbiAgICBsZXQgaGl0ID0gZ2FtZVxuICAgICAgLmdldE9wcG9zaW5nUGxheWVyKClcbiAgICAgIC5ib2FyZC5yZWNlaXZlQXR0YWNrKFN0cmluZyh5KSwgU3RyaW5nKHgpKTtcblxuICAgIHVwZGF0ZURPTSgpO1xuXG4gICAgaWYgKGdhbWUud2luQ2hlY2soKSkge1xuICAgICAgZ2FtZU92ZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaGl0KSB7XG4gICAgICAvLyBzZXQgbGFzdCBoaXQgY29vcmRpbmF0ZSBhbmQgZGlyZWN0aW9uIGZvciBzdWJzZXF1ZW50IGd1ZXNzXG4gICAgICBsYXN0SGl0ID0gW3gsIHldO1xuICAgICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uIHx8IChNYXRoLnJhbmRvbSgpIDwgMC41ID8gXCJ4XCIgOiBcInlcIik7XG4gICAgICBzZXRUaW1lb3V0KGNvbXB1dGVyVHVybiwgNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmVzZXQgdmFsdWVzIG9uIG1pc3NcbiAgICAgIGxhc3RIaXQgPSBudWxsO1xuICAgICAgZGlyZWN0aW9uID0gbnVsbDtcbiAgICAgIGVuYWJsZUNsaWNrcygpO1xuICAgICAgaXNDb21wdXRlclR1cm4gPSBmYWxzZTtcbiAgICAgIGdhbWUubmV4dFR1cm4oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcbiAgICBkaXNhYmxlQ2xpY2tzKCk7XG4gICAgY29uc3QgZ2FtZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtd3JhcHBlclwiKTtcbiAgICBjb25zdCBnYW1lT3Zlck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgZ2FtZURpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInBvaW50ZXItZXZlbnRzOiBub25lXCIpO1xuXG4gICAgZ2FtZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImVuZC1zY3JlZW5cIik7XG4gICAgZ2FtZU92ZXJNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItbWVzc2FnZVwiKTtcblxuICAgIGlmIChnYW1lTW9kZSA9PT0gMSkge1xuICAgICAgZ2FtZU92ZXJNZXNzYWdlLnRleHRDb250ZW50ID0gYEdhbWUgb3ZlciwgJHtcbiAgICAgICAgZ2FtZS5nZXRDdXJyZW50UGxheWVyKCkudHlwZVxuICAgICAgfSB3aW5zIVxcclxcblxcclxcblJlZnJlc2ggdGhlIHBhZ2UgdG8gcGxheSBhZ2Fpbi5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBnYW1lT3Zlck1lc3NhZ2UudGV4dENvbnRlbnQgPSBgR2FtZSBvdmVyLCAke1xuICAgICAgICBnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKS5uYW1lXG4gICAgICB9IHdpbnMhXFxyXFxuXFxyXFxuUmVmcmVzaCB0aGUgcGFnZSB0byBwbGF5IGFnYWluLmA7XG4gICAgfVxuXG4gICAgZ2FtZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJNZXNzYWdlKTtcbiAgfVxuXG4gIC8vXG5cbiAgLy9cblxuICAvL1xuXG4gIC8vXG5cbiAgLy9cblxuICAvL1xuXG4gIC8vXG5cbiAgLy9cblxuICAvL1xuXG4gIC8vXG5cbiAgLy9cblxuICAvL1xuXG4gIC8vXG5cbiAgLy9cblxuICAvLyAyIHBsYXllcnMgZm5cblxuICAvLyBpJ2xsIHByb2JhYmx5IGFsc28gbmVlZCBhIDJwbGF5ZXIgZmxhZyBvciBzb21ldGhpbmdcblxuICB0d29QbGF5ZXJHYW1lU3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBzZXQgbW9kZVxuICAgIGdhbWVNb2RlID0gMjtcblxuICAgIGdhbWVTdGFydEJ0bi5yZW1vdmUoKTtcbiAgICB0d29QbGF5ZXJHYW1lU3RhcnRCdG4ucmVtb3ZlKCk7XG5cbiAgICAvLyBpbml0aWFsaXplIGRpc3BsYXlcbiAgICB0d29QbGF5ZXJTZXR1cERPTSgpO1xuICB9KTtcblxuICBmdW5jdGlvbiB0d29QbGF5ZXJTZXR1cERPTSgpIHtcbiAgICAvLyBzZXQgaW5pdGlhbCBodW1hbiB0dXJuIGZsYWc6XG4gICAgLy8gZ2FtZS5wbGF5VHVybigpO1xuXG4gICAgLy8gZ2V0IHBsYXllciBuYW1lcyAoZGVmYXVsdCB0byBwbGF5ZXIgMSBhbmQgcGxheWVyIDIpXG5cbiAgICAvLyBzZXQgdXAgcGxheWVyIHZhcmlhYmxlc1xuICAgIGNvbnN0IHAxID0gZ2FtZS5wbGF5ZXJzWzBdO1xuICAgIGNvbnN0IHAyID0gZ2FtZS5wbGF5ZXJzWzFdO1xuXG4gICAgLy8gY3JlYXRlIGFycmF5cyBvZiBzaGlwcyBmb3IgZWFjaCBwbGF5ZXJcbiAgICBsZXQgc2hpcHMxID0gW1xuICAgICAgbmV3IFNoaXAoNSksXG4gICAgICBuZXcgU2hpcCg0KSxcbiAgICAgIG5ldyBTaGlwKDMpLFxuICAgICAgbmV3IFNoaXAoMyksXG4gICAgICBuZXcgU2hpcCgyKSxcbiAgICBdO1xuICAgIGxldCBzaGlwczIgPSBbXG4gICAgICBuZXcgU2hpcCg1KSxcbiAgICAgIG5ldyBTaGlwKDQpLFxuICAgICAgbmV3IFNoaXAoMyksXG4gICAgICBuZXcgU2hpcCgzKSxcbiAgICAgIG5ldyBTaGlwKDIpLFxuICAgIF07XG5cbiAgICAvLyBwbGFjZSBzaGlwcyBvbiBib2FyZHNcbiAgICBwMS5ib2FyZC5wbGFjZVJhbmRvbVNoaXBzKHNoaXBzMSk7XG4gICAgcDIuYm9hcmQucGxhY2VSYW5kb21TaGlwcyhzaGlwczIpO1xuXG4gICAgLy8gY3JlYXRlIGJvYXJkc1xuICAgIGNyZWF0ZVBsYXllckJvYXJkcygpO1xuXG4gICAgLy8gZW5zdXJlIHNlY29uZCBwbGF5ZXIncyBncmlkIGlzIHNob3duIGFuZCBjbGlja2FibGU/XG5cbiAgICAvLyBzaG93IHJ1bGVzIHJvd1xuICAgIC8vIG5lZWQgdHdvIHJhbmRvbWl6ZSBidG5zIGFuZCBkaWZmIHJ1bGVzP1xuICAgIHJhbmRvbWl6ZVNoaXBzQnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgIHJ1bGVzUm93LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBjb250ZW50V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICBjb2xsYXBzZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHR3b1BsYXllckNlbGxDbGljayhjZWxsKSB7XG4gICAgLy8gc2hvdyBvcHBvbmVudCdzIGJvYXJkKD8pXG4gICAgLy8gZWFjaCB0dXJuLCBwbGF5ZXIgd2lsbCBjbGljayBjZWxscyBvbiBvcHBvbmVudCdzIGJvYXJkIHVudGlsIG1pc3NcbiAgICAvLyBpZiBoaXQsIGp1c3QgdXBkYXRlIGJvYXJkIHRvIHNob3cgdGhlIGhpdFxuICAgIC8vIGlmIG1pc3NcbiAgICAvLyBzZXRpbnRlcnZhbCB0byBsZXQgcGxheWVyIHNlZSB0aGUgbWlzc1xuICAgIC8vIHRoZW4gcmVtb3ZlIHRoZSBib2FyZHNcbiAgICAvLyBkaXNwbGF5IG1lc3NhZ2Ugc2F5aW5nIHBhc3MgdGhlIHNjcmVlbiB0byBvcHBvbmVudCB3aXRoIGJ1dHRvbiB0byBjb250aW51ZSBBUyB0aGUgbmV4dCBwbGF5ZXJcbiAgICAvLyBvbiBidXR0b24gY2xpY2ssIGRpc3BsYXkgbmV3IHBsYXllcidzIG9wcG9uZW50J3MgYm9hcmRcblxuICAgIC8vIGNoZWNrIHdpbiBhZnRlciBlYWNoIGNsaWNrXG5cbiAgICAvLyBpZiBwbGF5ZXIgMVxuICAgIGlmIChnYW1lLmN1cnJlbnRQbGF5ZXJJbmRleCA9PT0gMCkge1xuICAgICAgLy8gc2hvdyBwbGF5ZXIgMidzIGdyaWRcbiAgICB9XG5cbiAgICBpZiAoZ2FtZS5jdXJyZW50SXNIdW1hbikge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ5LCB4OlwiLCBjZWxsLmRhdGFzZXQueSwgY2VsbC5kYXRhc2V0LngpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJzaGlwIGF0OlwiLCBnYW1lLnBsYXllcnNbMV0uYm9hcmQuYm9hcmRbNV1bNV0pO1xuXG4gICAgICAvLyByZW1vdmUgcmFuZG9taXplIGJ1dHRvblxuICAgICAgcmFuZG9taXplU2hpcHNCdG4ucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGRpc2FsbG93IGNsaWNraW5nIHRoZSBzYW1lIGNlbGwgdHdpY2VcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb2ludGVyLWV2ZW50czogbm9uZVwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG5cbiAgICAgIGxldCBoaXQgPSBnYW1lXG4gICAgICAgIC5nZXRPcHBvc2luZ1BsYXllcigpXG4gICAgICAgIC5ib2FyZC5yZWNlaXZlQXR0YWNrKGNlbGwuZGF0YXNldC55LCBjZWxsLmRhdGFzZXQueCk7XG5cbiAgICAgIC8vIHJlLXJlbmRlciBjbGlja2VkIGNlbGwgdG8gc2hvdyBoaXQvbWlzcyBpbW1lZGlhdGVseVxuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcHV0ZXItY2VsbFwiKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLWNlbGxcIik7XG4gICAgICAgIHVwZGF0ZURPTSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgdXBkYXRlRE9NKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjaGFuZ2UgZGlzcGxheVxuICAgICAgICB1cGRhdGVET00oKTtcbiAgICAgICAgZ2FtZS5uZXh0VHVybigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2FtZS53aW5DaGVjaygpKSB7XG4gICAgICAgIGdhbWVPdmVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
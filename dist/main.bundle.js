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
  border: 1px solid beige;
}

.computer-cell:hover {
  background-color: beige;
}

.ship {
  background-color: rgb(126, 126, 126);
  border: solid 2px rgb(126, 126, 126);
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n/* prettier-ignore */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\n/* prettier-ignore */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin-bottom: 20px;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: rgba(0, 0, 232, 0.762);\n  color: beige;\n}\n\nbutton {\n  background-color: beige;\n  color: rgb(2, 2, 206);\n  padding: 0.5rem;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-weight: 600;\n}\n\nbutton:hover {\n  background-color: rgb(216, 216, 195);\n}\n\n.page-wrapper {\n  display: flex;\n  flex-flow: column;\n  gap: 3rem;\n  align-items: center;\n}\n\nh1 {\n  font-family: \"Bungee\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 5rem;\n  margin-top: 1rem;\n}\n\n.game-start-btn {\n  place-self: center;\n}\n\n#randomize-ships {\n  display: none;\n}\n\n.hit {\n  background-color: rgb(247, 23, 53);\n}\n\n.miss {\n  background-color: rgb(161, 161, 255);\n}\n\n.human-cell,\n.computer-cell {\n  border: 1px solid beige;\n}\n\n.computer-cell:hover {\n  background-color: beige;\n}\n\n.ship {\n  background-color: rgb(126, 126, 126);\n  border: solid 2px rgb(126, 126, 126);\n}\n\n.game {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 4rem;\n}\n\n.game-wrapper {\n  display: grid;\n  gap: 1rem;\n}\n\n.game-over-message {\n  position: absolute;\n  white-space: pre;\n  text-align: center;\n  background-color: rgb(99, 35, 35);\n  color: beige;\n  padding: 1rem;\n  border: dashed beige 3px;\n  border-radius: 25px;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n}\n\ntable {\n  width: 400px;\n  height: 400px;\n}\n\np {\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\n.content-wrapper {\n  background-color: rgba(25, 25, 162, 0.762);\n  padding: 1rem;\n  transform-origin: top;\n}\n\n.row-2,\n#collapse-rules-btn,\n.content-wrapper {\n  display: none;\n}\n\n.rules-ship,\n.rules-hit,\n.rules-miss {\n  display: inline-block;\n  width: 20px;\n  height: 1rem;\n}\n\n.rules-ship {\n  background-color: rgb(126, 126, 126);\n}\n\n.rules-hit {\n  background-color: rgb(247, 23, 53);\n}\n\n.rules-miss {\n  background-color: rgb(161, 161, 255);\n}\n\n.rules-hit,\n.rules-miss {\n  margin-left: 40px;\n}\n\n.rules p {\n  text-align: center;\n  font-size: 0.8rem;\n  line-height: 120%;\n  margin-bottom: 0.5rem;\n}\n\n.rules p:first-child {\n  font-size: 1.1rem;\n  font-weight: 800;\n  padding-bottom: 0.3rem;\n  text-align: center;\n}\n\np,\nbutton,\n.game-over-message {\n  font-family: \"Space Grotesk\", sans-serif;\n  font-optical-sizing: auto;\n  font-style: normal;\n}\n\n#collapse-rules-btn {\n  justify-self: end;\n  font-family: sans-serif;\n  padding: 0.4rem;\n  background-color: rgba(25, 25, 162, 0);\n  color: beige;\n  height: 35px;\n}\n\n#collapse-rules-btn:hover {\n  border-radius: 25px;\n  background-color: rgba(25, 25, 162, 0.762);\n}\n\n/* animations */\n\n.unrolled-btn {\n  animation: rotateBack 0.4s ease-out both;\n}\n\n.unrolled-div {\n  animation: unroll 0.2s ease-in-out both;\n}\n\n.collapsed-btn {\n  animation: rotate 0.4s ease-out both;\n}\n\n.collapsed-div {\n  animation: collapse 0.2s ease-in-out both;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(180deg);\n  }\n}\n\n@keyframes rotateBack {\n  from {\n    transform: rotate(180deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes unroll {\n  from {\n    transform: scale(1, 0);\n    height: 0;\n    opacity: 0;\n  }\n  to {\n    transform: scale(1, 1);\n    height: auto;\n    opacity: 1;\n  }\n}\n\n@keyframes collapse {\n  from {\n    transform: scale(1, 1);\n    height: auto;\n    opacity: 1;\n  }\n  to {\n    transform: scale(1, 0);\n    height: 0;\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);
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
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const gameStartBtn = document.querySelector(".game-start-btn");
const randomizeShipsBtn = document.querySelector("#randomize-ships");
const contentWrapper = document.querySelector(".content-wrapper");
const rulesRow = document.querySelector(".row-2");
const collapseBtn = document.querySelector("#collapse-rules-btn");

const gameDiv = document.querySelector(".game");
const game = new _index__WEBPACK_IMPORTED_MODULE_0__.GameController();
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
    boardName.textContent = `${player.type}'s grid`;

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

  gameDiv.setAttribute("style", "pointer-events: none");

  gameWrapper.classList.add("end-screen");
  gameOverMessage.classList.add("game-over-message");
  gameOverMessage.textContent = `Game over, ${
    game.getCurrentPlayer().type
  } wins!\r\n\r\nRefresh the page to play again.`;

  gameWrapper.appendChild(gameOverMessage);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0ZBQWtGLEtBQUssWUFBWSxrQkFBa0IsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssUUFBUSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxV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Q0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuLyogcHJldHRpZXItaWdub3JlICovXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG4vKiBwcmV0dGllci1pZ25vcmUgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyMzIsIDAuNzYyKTtcbiAgY29sb3I6IGJlaWdlO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgY29sb3I6IHJnYigyLCAyLCAyMDYpO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMTk1KTtcbn1cblxuLnBhZ2Utd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBnYXA6IDNyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiQnVuZ2VlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uZ2FtZS1zdGFydC1idG4ge1xuICBwbGFjZS1zZWxmOiBjZW50ZXI7XG59XG5cbiNyYW5kb21pemUtc2hpcHMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjMsIDUzKTtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNjEsIDI1NSk7XG59XG5cbi5odW1hbi1jZWxsLFxuLmNvbXB1dGVyLWNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCBiZWlnZTtcbn1cblxuLmNvbXB1dGVyLWNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbn1cblxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigxMjYsIDEyNiwgMTI2KTtcbn1cblxuLmdhbWUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGNvbHVtbi1nYXA6IDRyZW07XG59XG5cbi5nYW1lLXdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG59XG5cbi5nYW1lLW92ZXItbWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDM1LCAzNSk7XG4gIGNvbG9yOiBiZWlnZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiBkYXNoZWQgYmVpZ2UgM3B4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjUsIDE2MiwgMC43NjIpO1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG59XG5cbi5yb3ctMixcbiNjb2xsYXBzZS1ydWxlcy1idG4sXG4uY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJ1bGVzLXNoaXAsXG4ucnVsZXMtaGl0LFxuLnJ1bGVzLW1pc3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDFyZW07XG59XG5cbi5ydWxlcy1zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNiwgMTI2LCAxMjYpO1xufVxuXG4ucnVsZXMtaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjMsIDUzKTtcbn1cblxuLnJ1bGVzLW1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNjEsIDI1NSk7XG59XG5cbi5ydWxlcy1oaXQsXG4ucnVsZXMtbWlzcyB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4ucnVsZXMgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5ydWxlcyBwOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucCxcbmJ1dHRvbixcbi5nYW1lLW92ZXItbWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEdyb3Rlc2tcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4jY29sbGFwc2UtcnVsZXMtYnRuIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI1LCAxNjIsIDApO1xuICBjb2xvcjogYmVpZ2U7XG4gIGhlaWdodDogMzVweDtcbn1cblxuI2NvbGxhcHNlLXJ1bGVzLWJ0bjpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI1LCAxNjIsIDAuNzYyKTtcbn1cblxuLyogYW5pbWF0aW9ucyAqL1xuXG4udW5yb2xsZWQtYnRuIHtcbiAgYW5pbWF0aW9uOiByb3RhdGVCYWNrIDAuNHMgZWFzZS1vdXQgYm90aDtcbn1cblxuLnVucm9sbGVkLWRpdiB7XG4gIGFuaW1hdGlvbjogdW5yb2xsIDAuMnMgZWFzZS1pbi1vdXQgYm90aDtcbn1cblxuLmNvbGxhcHNlZC1idG4ge1xuICBhbmltYXRpb246IHJvdGF0ZSAwLjRzIGVhc2Utb3V0IGJvdGg7XG59XG5cbi5jb2xsYXBzZWQtZGl2IHtcbiAgYW5pbWF0aW9uOiBjb2xsYXBzZSAwLjJzIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByb3RhdGVCYWNrIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB1bnJvbGwge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xuICAgIGhlaWdodDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY29sbGFwc2Uge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xuICAgIGhlaWdodDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDO0FBQ0Qsb0JBQW9CO0FBQ3BCOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQsb0JBQW9CO0FBQ3BCOztDQUVDLGNBQWM7QUFDZjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBOzs7RUFHRSxhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0Usd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwwQ0FBMEM7QUFDNUM7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtFQUNaO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG4vKiBwcmV0dGllci1pZ25vcmUgKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG4vKiBwcmV0dGllci1pZ25vcmUgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyMzIsIDAuNzYyKTtcXG4gIGNvbG9yOiBiZWlnZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgY29sb3I6IHJnYigyLCAyLCAyMDYpO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMTk1KTtcXG59XFxuXFxuLnBhZ2Utd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogXFxcIkJ1bmdlZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmdhbWUtc3RhcnQtYnRuIHtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3JhbmRvbWl6ZS1zaGlwcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIzLCA1Myk7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE2MSwgMjU1KTtcXG59XFxuXFxuLmh1bWFuLWNlbGwsXFxuLmNvbXB1dGVyLWNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmVpZ2U7XFxufVxcblxcbi5jb21wdXRlci1jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTI2LCAxMjYsIDEyNik7XFxufVxcblxcbi5nYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiA0cmVtO1xcbn1cXG5cXG4uZ2FtZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5nYW1lLW92ZXItbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCAzNSwgMzUpO1xcbiAgY29sb3I6IGJlaWdlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogZGFzaGVkIGJlaWdlIDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB0b3A6IDQwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxufVxcblxcbnRhYmxlIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI1LCAxNjIsIDAuNzYyKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxufVxcblxcbi5yb3ctMixcXG4jY29sbGFwc2UtcnVsZXMtYnRuLFxcbi5jb250ZW50LXdyYXBwZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJ1bGVzLXNoaXAsXFxuLnJ1bGVzLWhpdCxcXG4ucnVsZXMtbWlzcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLnJ1bGVzLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNiwgMTI2LCAxMjYpO1xcbn1cXG5cXG4ucnVsZXMtaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIzLCA1Myk7XFxufVxcblxcbi5ydWxlcy1taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE2MSwgMjU1KTtcXG59XFxuXFxuLnJ1bGVzLWhpdCxcXG4ucnVsZXMtbWlzcyB7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuLnJ1bGVzIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBsaW5lLWhlaWdodDogMTIwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnJ1bGVzIHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucCxcXG5idXR0b24sXFxuLmdhbWUtb3Zlci1tZXNzYWdlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BhY2UgR3JvdGVza1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4jY29sbGFwc2UtcnVsZXMtYnRuIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCAyNSwgMTYyLCAwKTtcXG4gIGNvbG9yOiBiZWlnZTtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuI2NvbGxhcHNlLXJ1bGVzLWJ0bjpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjUsIDE2MiwgMC43NjIpO1xcbn1cXG5cXG4vKiBhbmltYXRpb25zICovXFxuXFxuLnVucm9sbGVkLWJ0biB7XFxuICBhbmltYXRpb246IHJvdGF0ZUJhY2sgMC40cyBlYXNlLW91dCBib3RoO1xcbn1cXG5cXG4udW5yb2xsZWQtZGl2IHtcXG4gIGFuaW1hdGlvbjogdW5yb2xsIDAuMnMgZWFzZS1pbi1vdXQgYm90aDtcXG59XFxuXFxuLmNvbGxhcHNlZC1idG4ge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgMC40cyBlYXNlLW91dCBib3RoO1xcbn1cXG5cXG4uY29sbGFwc2VkLWRpdiB7XFxuICBhbmltYXRpb246IGNvbGxhcHNlIDAuMnMgZWFzZS1pbi1vdXQgYm90aDtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZUJhY2sge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHVucm9sbCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgY29sbGFwc2Uge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJ0ZXN0XCIpIHtcbi8vICAgcmVxdWlyZShcIi4vZG9tXCIpO1xuLy8gfVxuXG5jbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRDb3VudCA9IDA7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRDb3VudCsrO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdENvdW50ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICB0aGlzLm1pc3NlZFNob3RzID0gW107XG4gICAgdGhpcy5ndWVzc2VkQ2VsbHMgPSBbXTtcbiAgfVxuXG4gIGNyZWF0ZUJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkQXJyID0gW107XG4gICAgY29uc3Qgc2l6ZSA9IDEwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBsZXQgcm93ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICByb3cucHVzaChcIiBcIik7XG4gICAgICB9XG4gICAgICBib2FyZEFyci5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBib2FyZEFycjtcbiAgfVxuXG4gIHByaW50Qm9hcmQoKSB7XG4gICAgbGV0IGJvYXJkU3RyaW5nID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICBib2FyZFN0cmluZyArPSBcIlggXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm9hcmRTdHJpbmcgKz0gXCItIFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBib2FyZFN0cmluZyArPSBcIlxcblwiO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhib2FyZFN0cmluZyk7XG4gIH1cblxuICBwbGFjZVJhbmRvbVNoaXBzKHNoaXBBcnIpIHtcbiAgICBmb3IgKGxldCBzaGlwIG9mIHNoaXBBcnIpIHtcbiAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIGEgcmFuZG9tIG9yaWVudGF0aW9uLCB4LWNvb3JkaW5hdGUsIGFuZCB5LWNvb3JkaW5hdGVcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYm9hcmQubGVuZ3RoKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmJvYXJkLmxlbmd0aCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHNoaXAgY2FuIGJlIHBsYWNlZCBhdCB0aGUgZ2VuZXJhdGVkIGxvY2F0aW9uXG4gICAgICAgIGlmICh0aGlzLmNhblBsYWNlKHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKSkge1xuICAgICAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKTtcblxuICAgICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBhdCB0aGlzIHBvaW50IGluIG15IGxpZmUsIHRoZXJlJ3Mgbm90IGEgc2luZ2xlIGNoYW5jZSBpIHdvdWxkIHdvcmsgdGhyb3VnaCBpbXBsZW1lbnRpbmcgdGhpcyBsb2dpYyBteXNlbGYuIGluIDIwIHllYXJzLCBpIGhvcGUgaSdsbCBmaW5kIHRoaXMgcHJvamVjdCBhZ2FpbiBhbmQgdGhpbmsgXCJob3cgcGVkZXN0cmlhbiwgaSBjb3VsZG4ndCBoYW5kbGUgc3VjaCBhIHNpbXBsZSBwcm9ibGVtIG9uIG15IG93bi5cIiBhcyBvZiBub3cgdGhvdWdoLCBpIGNhbid0IGVudmlzaW9uIG15c2VsZiBiZWNvbWluZyB0aGF0IHBlcnNvbiwgc28gZm9yZ2l2ZSBtZS4gaWYgeW91J3JlIG1lIGFuZCByZWFkaW5nIHRoaXMgaW4gMjAgeWVhcnMgYW5kIGhhZCB0aGUgYWZvcmVtZW50aW9uZWQgdGhvdWdodCwgdGFrZSBhIG1vbWVudCB0byBmZWVsIHByb3VkIG9mIGhvdyBmYXIgeW91J3ZlIGNvbWUuXG4gIGNhblBsYWNlKHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgeENvb3JkaW5hdGUsIHlDb29yZGluYXRlO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgeENvb3JkaW5hdGUgPSB4ICsgaTtcbiAgICAgICAgeUNvb3JkaW5hdGUgPSB5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeENvb3JkaW5hdGUgPSB4O1xuICAgICAgICB5Q29vcmRpbmF0ZSA9IHkgKyBpO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayB0aGUgY2VsbCBpdHNlbGZcbiAgICAgIGlmIChcbiAgICAgICAgeENvb3JkaW5hdGUgPj0gdGhpcy5ib2FyZC5sZW5ndGggfHxcbiAgICAgICAgeUNvb3JkaW5hdGUgPj0gdGhpcy5ib2FyZC5sZW5ndGggfHxcbiAgICAgICAgdGhpcy5ib2FyZFt5Q29vcmRpbmF0ZV1beENvb3JkaW5hdGVdIGluc3RhbmNlb2YgU2hpcFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgdGhlIHN1cnJvdW5kaW5nIGNlbGxzXG4gICAgICBmb3IgKGxldCBkeCA9IC0xOyBkeCA8PSAxOyBkeCsrKSB7XG4gICAgICAgIGZvciAobGV0IGR5ID0gLTE7IGR5IDw9IDE7IGR5KyspIHtcbiAgICAgICAgICBsZXQgbnggPSB4Q29vcmRpbmF0ZSArIGR4O1xuICAgICAgICAgIGxldCBueSA9IHlDb29yZGluYXRlICsgZHk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbnggPj0gMCAmJlxuICAgICAgICAgICAgbnggPCB0aGlzLmJvYXJkLmxlbmd0aCAmJlxuICAgICAgICAgICAgbnkgPj0gMCAmJlxuICAgICAgICAgICAgbnkgPCB0aGlzLmJvYXJkLmxlbmd0aCAmJlxuICAgICAgICAgICAgdGhpcy5ib2FyZFtueV1bbnhdIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCB4Q29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUsIG9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeUNvb3JkaW5hdGVdW3hDb29yZGluYXRlICsgaV0gPSBzaGlwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ib2FyZFt5Q29vcmRpbmF0ZSArIGldW3hDb29yZGluYXRlXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeUNvb3JkaW5hdGUsIHhDb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuYm9hcmRbeUNvb3JkaW5hdGVdW3hDb29yZGluYXRlXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIHRoaXMuYm9hcmRbeUNvb3JkaW5hdGVdW3hDb29yZGluYXRlXS5oaXQoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0IHNoaXBcIik7XG5cbiAgICAgIHRoaXMuZ3Vlc3NlZENlbGxzLnB1c2goW3lDb29yZGluYXRlLCB4Q29vcmRpbmF0ZV0pO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJndWVzc2VkIHNob3RzXCIsIHRoaXMuZ3Vlc3NlZENlbGxzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1pc3NlZFNob3RzLnB1c2goW3lDb29yZGluYXRlLCB4Q29vcmRpbmF0ZV0pO1xuICAgICAgdGhpcy5ndWVzc2VkQ2VsbHMucHVzaChbeUNvb3JkaW5hdGUsIHhDb29yZGluYXRlXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImd1ZXNzZWQgc2hvdHNcIiwgdGhpcy5ndWVzc2VkQ2VsbHMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFsbFN1bmsoKSB7XG4gICAgbGV0IHN1bmtDb3VudCA9IDA7XG4gICAgdGhpcy5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBzdW5rQ291bnQrKztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3Vua0NvdW50ID09PSB0aGlzLnNoaXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpc1NoaXAoeUNvb3JkaW5hdGUsIHhDb29yZGluYXRlKSB7XG4gICAgY29uc29sZS5sb2coXCJpcyBzaGlwIGNhbGxlZDpcIik7XG5cbiAgICBpZiAodGhpcy5ib2FyZFt5Q29vcmRpbmF0ZV1beENvb3JkaW5hdGVdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgY29uc29sZS5sb2coXCJpdCB3YXMgYSBzaGlwISFcIik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIH1cbn1cblxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBsYXllcnMgPSBbbmV3IFBsYXllcihcImh1bWFuXCIpLCBuZXcgUGxheWVyKFwiY29tcHV0ZXJcIildO1xuICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyc1swXTtcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCA9IDA7XG4gICAgdGhpcy5jdXJyZW50SXNIdW1hbiA9IHRydWU7XG4gIH1cblxuICBnYW1lU3RhcnQoKSB7XG4gICAgdGhpcy5wbGF5VHVybih0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKSk7XG4gIH1cblxuICAvLyBzZXRzIGZsYWcgZm9yIHdoZXRoZXIgY3VycmVudCB0dXJuIGlzIGh1bWFuXG4gIHBsYXlUdXJuKCkge1xuICAgIGlmICh0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS50eXBlID09PSBcImh1bWFuXCIpIHtcbiAgICAgIHRoaXMuY3VycmVudElzSHVtYW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRJc0h1bWFuID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycmVudCBwbGF5ZXI6XCIsIHRoaXMuZ2V0Q3VycmVudFBsYXllcigpLnR5cGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwib3Bwb3NpbmcgcGxheWVyOlwiLCB0aGlzLmdldE9wcG9zaW5nUGxheWVyKCkudHlwZSk7XG4gIH1cblxuICAvLyBvbmx5IGdldHMgY2FsbGVkIGluIERPTSBtYXliZT9cbiAgbmV4dFR1cm4oKSB7XG4gICAgdGhpcy5jdXJyZW50UGxheWVySW5kZXggPVxuICAgICAgKHRoaXMuY3VycmVudFBsYXllckluZGV4ICsgMSkgJSB0aGlzLnBsYXllcnMubGVuZ3RoO1xuXG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIm5leHQgdHVybiBjYWxsZWQsIGN1cnJlbnQgcGxheWVyIGlzIG5vdzpcIixcbiAgICAgIHRoaXMuZ2V0Q3VycmVudFBsYXllcigpLnR5cGVcbiAgICApO1xuICB9XG5cbiAgd2luQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMuZ2V0T3Bwb3NpbmdQbGF5ZXIoKS5ib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFBsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJzW3RoaXMuY3VycmVudFBsYXllckluZGV4XTtcbiAgfVxuXG4gIGdldE9wcG9zaW5nUGxheWVyKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllcnNbKHRoaXMuY3VycmVudFBsYXllckluZGV4ICsgMSkgJSB0aGlzLnBsYXllcnMubGVuZ3RoXTtcbiAgfVxufVxuXG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciwgR2FtZUNvbnRyb2xsZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyLCBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBnYW1lU3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtc3RhcnQtYnRuXCIpO1xuY29uc3QgcmFuZG9taXplU2hpcHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhbmRvbWl6ZS1zaGlwc1wiKTtcbmNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LXdyYXBwZXJcIik7XG5jb25zdCBydWxlc1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm93LTJcIik7XG5jb25zdCBjb2xsYXBzZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sbGFwc2UtcnVsZXMtYnRuXCIpO1xuXG5jb25zdCBnYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lXCIpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lQ29udHJvbGxlcigpO1xubGV0IGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gW107XG5cbi8vIG5lZWQgdG8gbWFrZSBzdXJlIHRoZSBidXR0b24gY2FuIG9ubHkgZ2V0IGNsaWNrZWQgb25jZVxuZ2FtZVN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKGdhbWUpO1xuXG4gIGdhbWVTdGFydEJ0bi5yZW1vdmUoKTtcblxuICAvLyBjb21wdXRlciBndWVzcyBwb29sXG4gIGludGlhbGl6ZVBvc3NpYmxlQ29vcmRpbmF0ZXMoKTtcblxuICAvLyBpbml0aWFsaXplIGRpc3BsYXlcbiAgc2V0dXBET00oKTtcbn0pO1xuXG5mdW5jdGlvbiBzZXR1cERPTSgpIHtcbiAgLy8gc2V0IGluaXRpYWwgaHVtYW4gdHVybiBmbGFnOlxuICBnYW1lLnBsYXlUdXJuKCk7XG5cbiAgLy8gc2V0IHVwIHBsYXllciB2YXJpYWJsZXNcbiAgY29uc3QgcDEgPSBnYW1lLnBsYXllcnNbMF07XG4gIGNvbnN0IHAyID0gZ2FtZS5wbGF5ZXJzWzFdO1xuXG4gIC8vIGNyZWF0ZSBhcnJheXMgb2Ygc2hpcHMgZm9yIGVhY2ggcGxheWVyXG4gIGxldCBzaGlwczEgPSBbXG4gICAgbmV3IFNoaXAoNSksXG4gICAgbmV3IFNoaXAoNCksXG4gICAgbmV3IFNoaXAoMyksXG4gICAgbmV3IFNoaXAoMyksXG4gICAgbmV3IFNoaXAoMiksXG4gIF07XG4gIGxldCBzaGlwczIgPSBbXG4gICAgbmV3IFNoaXAoNSksXG4gICAgbmV3IFNoaXAoNCksXG4gICAgbmV3IFNoaXAoMyksXG4gICAgbmV3IFNoaXAoMyksXG4gICAgbmV3IFNoaXAoMiksXG4gIF07XG5cbiAgLy8gcGxhY2Ugc2hpcHMgb24gYm9hcmRzXG4gIHAxLmJvYXJkLnBsYWNlUmFuZG9tU2hpcHMoc2hpcHMxKTtcbiAgcDIuYm9hcmQucGxhY2VSYW5kb21TaGlwcyhzaGlwczIpO1xuXG4gIC8vIGNyZWF0ZSBib2FyZHNcbiAgY3JlYXRlUGxheWVyQm9hcmRzKCk7XG5cbiAgcmFuZG9taXplU2hpcHNCdG4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gIHJ1bGVzUm93LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgY29udGVudFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG5cbiAgY29sbGFwc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG59XG5cbmNvbGxhcHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbGxhcHNlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWQtYnRuXCIpO1xuICBjb250ZW50V3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VkLWRpdlwiKTtcbn0pO1xuXG5yYW5kb21pemVTaGlwc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvLyBvbmx5IG5lZWQgdG8gcmUtcmFuZG9taXplIGh1bWFuIHNoaXBzXG4gIGdhbWUucGxheWVyc1swXS5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICBsZXQgc2hpcHMxID0gW1xuICAgIG5ldyBTaGlwKDUpLFxuICAgIG5ldyBTaGlwKDQpLFxuICAgIG5ldyBTaGlwKDMpLFxuICAgIG5ldyBTaGlwKDMpLFxuICAgIG5ldyBTaGlwKDIpLFxuICBdO1xuXG4gIGdhbWUucGxheWVyc1swXS5ib2FyZC5wbGFjZVJhbmRvbVNoaXBzKHNoaXBzMSk7XG5cbiAgY3JlYXRlUGxheWVyQm9hcmRzKCk7XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyQm9hcmRzKCkge1xuICBnYW1lRGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBnYW1lLnBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgLy8gY3JlYXRlIGh0bWwgZ2FtZWJvYXJkXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgIHRhYmxlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3BsYXllci50eXBlfS1ib2FyZGApO1xuICAgIC8vIGhlYWRlciByb3cgZm9yIHRoZSB4LWF4aXMgbGFiZWxzXG4gICAgbGV0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAvLyBlbXB0eSB0b3AgbGVmdCBjb3JuZXJcbiAgICBsZXQgZW1wdHlDb3JuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoZW1wdHlDb3JuZXIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLmJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgYXhpc0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICBheGlzQ2VsbC50ZXh0Q29udGVudCA9IGk7XG4gICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoYXhpc0NlbGwpO1xuICAgIH1cbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkZXJSb3cpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgIC8vIGNyZWF0ZSBheGlzIGNlbGxcbiAgICAgIGxldCBheGlzQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgIGF4aXNDZWxsLnRleHRDb250ZW50ID0gaTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChheGlzQ2VsbCk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyLmJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCIgXCI7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChgJHtwbGF5ZXIudHlwZX0tY2VsbGApO1xuXG4gICAgICAgIGNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnkgPSBqO1xuXG4gICAgICAgIGlmIChwbGF5ZXIudHlwZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgICAgLy8gbWFrZSBjbGlja2FibGUgaWYgcGxheWVyIGlzIG9wcG9uZW50XG4gICAgICAgICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjZWxsQ2xpY2soY2VsbCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllci5ib2FyZC5pc1NoaXAoY2VsbC5kYXRhc2V0LnksIGNlbGwuZGF0YXNldC54KSkge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgIH1cblxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgICAvLyBhcHBlbmQgYm9hcmRzXG4gICAgZ2FtZURpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gIH0pO1xuICAvLyBhcHBlbmQgYm9hcmQgbmFtZXNcbiAgZ2FtZS5wbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgIGxldCBib2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBib2FyZE5hbWUudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIudHlwZX0ncyBncmlkYDtcblxuICAgIGdhbWVEaXYuYXBwZW5kQ2hpbGQoYm9hcmROYW1lKTtcbiAgfSk7XG59XG5cbi8vIGFkZCBjbGFzcyB0byBndWVzc2VkIGNlbGxzIHVzaW5nIGlzU2hpcCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gaGl0IGFuZCBtaXNzXG5mdW5jdGlvbiB1cGRhdGVET00oKSB7XG4gIGNvbnN0IGh1bWFuQm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaHVtYW4tY2VsbFwiKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wdXRlci1jZWxsXCIpO1xuXG4gIGNvbXB1dGVyQm9hcmRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJndWVzc2VkQ2VsbHM6XCIsIGdhbWUucGxheWVyc1swXS5ib2FyZC5ndWVzc2VkQ2VsbHMpO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJjZWxsaW5mbzpcIiwgYCR7W2NlbGwuZGF0YXNldC54LCBjZWxsLmRhdGFzZXQueV19YCk7XG5cbiAgICBpZiAoXG4gICAgICBnYW1lLnBsYXllcnNbMV0uYm9hcmQuZ3Vlc3NlZENlbGxzLnNvbWUoXG4gICAgICAgIChndWVzc2VkQ2VsbCkgPT5cbiAgICAgICAgICBndWVzc2VkQ2VsbFswXSA9PT0gY2VsbC5kYXRhc2V0LnkgJiYgZ3Vlc3NlZENlbGxbMV0gPT09IGNlbGwuZGF0YXNldC54XG4gICAgICApXG4gICAgKSB7XG4gICAgICAvLyBjaGVjayBpZiBjZWxsIGlzIHNoaXBcbiAgICAgIGlmIChnYW1lLnBsYXllcnNbMV0uYm9hcmQuaXNTaGlwKGNlbGwuZGF0YXNldC55LCBjZWxsLmRhdGFzZXQueCkpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGh1bWFuQm9hcmRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJndWVzc2VkQ2VsbHM6XCIsIGdhbWUucGxheWVyc1swXS5ib2FyZC5ndWVzc2VkQ2VsbHMpO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJjZWxsaW5mbzpcIiwgYCR7W2NlbGwuZGF0YXNldC54LCBjZWxsLmRhdGFzZXQueV19YCk7XG5cbiAgICBpZiAoXG4gICAgICBnYW1lLnBsYXllcnNbMF0uYm9hcmQuZ3Vlc3NlZENlbGxzLnNvbWUoXG4gICAgICAgIChndWVzc2VkQ2VsbCkgPT5cbiAgICAgICAgICBndWVzc2VkQ2VsbFswXSA9PT0gY2VsbC5kYXRhc2V0LnkgJiYgZ3Vlc3NlZENlbGxbMV0gPT09IGNlbGwuZGF0YXNldC54XG4gICAgICApXG4gICAgKSB7XG4gICAgICAvLyBjaGVjayBpZiBjZWxsIGlzIHNoaXBcbiAgICAgIGlmIChnYW1lLnBsYXllcnNbMF0uYm9hcmQuaXNTaGlwKGNlbGwuZGF0YXNldC55LCBjZWxsLmRhdGFzZXQueCkpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5sZXQgaXNDb21wdXRlclR1cm4gPSBmYWxzZTtcblxuZnVuY3Rpb24gY2VsbENsaWNrKGNlbGwpIHtcbiAgLy8gcHJldmVudHMgcGxheWVycyBmcm9tIGNsaWNraW5nIHdoZW4gY29tcHV0ZXIncyB0dXJuXG4gIGlmIChpc0NvbXB1dGVyVHVybikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChnYW1lLmN1cnJlbnRJc0h1bWFuKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJ5LCB4OlwiLCBjZWxsLmRhdGFzZXQueSwgY2VsbC5kYXRhc2V0LngpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2hpcCBhdDpcIiwgZ2FtZS5wbGF5ZXJzWzFdLmJvYXJkLmJvYXJkWzVdWzVdKTtcblxuICAgIC8vIHJlbW92ZSByYW5kb21pemUgYnV0dG9uXG4gICAgcmFuZG9taXplU2hpcHNCdG4ucmVtb3ZlKCk7XG5cbiAgICAvLyBkaXNhbGxvdyBjbGlja2luZyB0aGUgc2FtZSBjZWxsIHR3aWNlXG4gICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInBvaW50ZXItZXZlbnRzOiBub25lXCIpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG5cbiAgICBsZXQgaGl0ID0gZ2FtZVxuICAgICAgLmdldE9wcG9zaW5nUGxheWVyKClcbiAgICAgIC5ib2FyZC5yZWNlaXZlQXR0YWNrKGNlbGwuZGF0YXNldC55LCBjZWxsLmRhdGFzZXQueCk7XG5cbiAgICAvLyByZS1yZW5kZXIgY2xpY2tlZCBjZWxsIHRvIHNob3cgaGl0L21pc3MgaW1tZWRpYXRlbHlcbiAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wdXRlci1jZWxsXCIpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1jZWxsXCIpO1xuICAgICAgdXBkYXRlRE9NKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoaGl0KSB7XG4gICAgICB1cGRhdGVET00oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlRE9NKCk7XG5cbiAgICAgIGdhbWUubmV4dFR1cm4oKTtcbiAgICAgIGNvbXB1dGVyVHVybigpO1xuICAgIH1cblxuICAgIGlmIChnYW1lLndpbkNoZWNrKCkpIHtcbiAgICAgIGdhbWVPdmVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzYWJsZUNsaWNrcygpIHtcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyLWNlbGwsIC5odW1hbi1jZWxsXCIpO1xuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcImNsaWNrZWRcIikpIHtcbiAgICAgIGNlbGwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUNsaWNrcygpIHtcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyLWNlbGwsIC5odW1hbi1jZWxsXCIpO1xuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcImNsaWNrZWRcIikpIHtcbiAgICAgIGNlbGwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGludGlhbGl6ZVBvc3NpYmxlQ29vcmRpbmF0ZXMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgYXZhaWxhYmxlQ29vcmRpbmF0ZXMucHVzaChbaSwgal0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdmFpbGFibGVDb29yZGluYXRlcztcbn1cblxubGV0IGxhc3RIaXQgPSBudWxsO1xubGV0IGRpcmVjdGlvbiA9IG51bGw7XG5cbmZ1bmN0aW9uIGNvbXB1dGVyVHVybigpIHtcbiAgaXNDb21wdXRlclR1cm4gPSB0cnVlO1xuICBkaXNhYmxlQ2xpY2tzKCk7XG5cbiAgaWYgKGF2YWlsYWJsZUNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHVwZGF0ZURPTSgpO1xuICAgIGdhbWUubmV4dFR1cm4oKTtcbiAgICBlbmFibGVDbGlja3MoKTtcbiAgICBpc0NvbXB1dGVyVHVybiA9IGZhbHNlO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGluZGV4O1xuICBsZXQgeCwgeTtcblxuICBpZiAobGFzdEhpdCAmJiBkaXJlY3Rpb24pIHtcbiAgICAvLyBjb250aW51ZSBpbiB0aGUgc2FtZSBkaXJlY3Rpb24gaWYgbGFzdCBndWVzcyB3YXMgYSBoaXRcbiAgICBbeCwgeV0gPVxuICAgICAgZGlyZWN0aW9uID09PSBcInhcIlxuICAgICAgICA/IFtsYXN0SGl0WzBdLCBsYXN0SGl0WzFdICsgMV1cbiAgICAgICAgOiBbbGFzdEhpdFswXSArIDEsIGxhc3RIaXRbMV1dO1xuICAgIGluZGV4ID0gYXZhaWxhYmxlQ29vcmRpbmF0ZXMuZmluZEluZGV4KFxuICAgICAgKGNvb3JkKSA9PiBjb29yZFswXSA9PT0geCAmJiBjb29yZFsxXSA9PT0geVxuICAgICk7XG4gICAgaWYgKGluZGV4ID09PSAtMSB8fCB4ID49IGdhbWUuYm9hcmRTaXplIHx8IHkgPj0gZ2FtZS5ib2FyZFNpemUpIHtcbiAgICAgIC8vIGlmIG5leHQgY29vcmRpbmF0ZSBpbiB0aGUgc2FtZSBkaXJlY3Rpb24gaXMgbm90IGF2YWlsYWJsZSBvciBvdXQgb2YgYm91bmRzLCBjaG9vc2UgYSByYW5kb20gY29vcmRpbmF0ZVxuICAgICAgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGgpO1xuICAgICAgW3gsIHldID0gYXZhaWxhYmxlQ29vcmRpbmF0ZXNbaW5kZXhdO1xuICAgICAgbGFzdEhpdCA9IG51bGw7XG4gICAgICBkaXJlY3Rpb24gPSBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBjaG9vc2UgYSByYW5kb20gY29vcmRpbmF0ZSBpZiB0aGUgbGFzdCBndWVzcyB3YXMgYSBtaXNzIG9yIHRoZXJlIHdhcyBubyBsYXN0IGd1ZXNzXG4gICAgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGgpO1xuICAgIFt4LCB5XSA9IGF2YWlsYWJsZUNvb3JkaW5hdGVzW2luZGV4XTtcbiAgfVxuXG4gIC8vIHJlbW92ZSB0aGUgY2hvc2VuIGNvb3JkaW5hdGUgZnJvbSBhdmFpbGFibGVDb29yZGluYXRlc1xuICBhdmFpbGFibGVDb29yZGluYXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gIC8vIGNvbnZlcnQgdG8gc3RyaW5ncyBmb3IgY29uZm9ybWl0eVxuICBsZXQgaGl0ID0gZ2FtZS5nZXRPcHBvc2luZ1BsYXllcigpLmJvYXJkLnJlY2VpdmVBdHRhY2soU3RyaW5nKHkpLCBTdHJpbmcoeCkpO1xuXG4gIHVwZGF0ZURPTSgpO1xuXG4gIGlmIChnYW1lLndpbkNoZWNrKCkpIHtcbiAgICBnYW1lT3ZlcigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChoaXQpIHtcbiAgICAvLyBzZXQgbGFzdCBoaXQgY29vcmRpbmF0ZSBhbmQgZGlyZWN0aW9uIGZvciBzdWJzZXF1ZW50IGd1ZXNzXG4gICAgbGFzdEhpdCA9IFt4LCB5XTtcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gfHwgKE1hdGgucmFuZG9tKCkgPCAwLjUgPyBcInhcIiA6IFwieVwiKTtcbiAgICBzZXRUaW1lb3V0KGNvbXB1dGVyVHVybiwgNTAwKTtcbiAgfSBlbHNlIHtcbiAgICAvLyByZXNldCB2YWx1ZXMgb24gbWlzc1xuICAgIGxhc3RIaXQgPSBudWxsO1xuICAgIGRpcmVjdGlvbiA9IG51bGw7XG4gICAgZW5hYmxlQ2xpY2tzKCk7XG4gICAgaXNDb21wdXRlclR1cm4gPSBmYWxzZTtcbiAgICBnYW1lLm5leHRUdXJuKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XG4gIGRpc2FibGVDbGlja3MoKTtcbiAgY29uc3QgZ2FtZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtd3JhcHBlclwiKTtcbiAgY29uc3QgZ2FtZU92ZXJNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBnYW1lRGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwicG9pbnRlci1ldmVudHM6IG5vbmVcIik7XG5cbiAgZ2FtZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImVuZC1zY3JlZW5cIik7XG4gIGdhbWVPdmVyTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyLW1lc3NhZ2VcIik7XG4gIGdhbWVPdmVyTWVzc2FnZS50ZXh0Q29udGVudCA9IGBHYW1lIG92ZXIsICR7XG4gICAgZ2FtZS5nZXRDdXJyZW50UGxheWVyKCkudHlwZVxuICB9IHdpbnMhXFxyXFxuXFxyXFxuUmVmcmVzaCB0aGUgcGFnZSB0byBwbGF5IGFnYWluLmA7XG5cbiAgZ2FtZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJNZXNzYWdlKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
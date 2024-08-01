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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0ZBQWtGLEtBQUssWUFBWSxrQkFBa0IsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssUUFBUSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLG1wQkFBbXBCLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLEdBQUcsdUtBQXVLLG1CQUFtQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcsNkRBQTZELGtCQUFrQixrQkFBa0IsR0FBRyxTQUFTLDhCQUE4QixzQkFBc0Isd0JBQXdCLEdBQUcsVUFBVSxrQkFBa0IsNEJBQTRCLHdCQUF3QixrQkFBa0IsNkNBQTZDLGlCQUFpQixHQUFHLFlBQVksNEJBQTRCLDBCQUEwQixvQkFBb0IsaUJBQWlCLHVCQUF1QixvQkFBb0IscUJBQXFCLEdBQUcsa0JBQWtCLHlDQUF5QyxHQUFHLG1CQUFtQixrQkFBa0Isc0JBQXNCLGNBQWMsd0JBQXdCLEdBQUcsUUFBUSx3Q0FBd0MscUJBQXFCLHVCQUF1QixvQkFBb0IscUJBQXFCLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLHNCQUFzQixrQkFBa0IsR0FBRyxVQUFVLHVDQUF1QyxHQUFHLFdBQVcseUNBQXlDLEdBQUcsa0NBQWtDLDRCQUE0QixHQUFHLDBCQUEwQiw0QkFBNEIsR0FBRyxXQUFXLHlDQUF5Qyx5Q0FBeUMsR0FBRyxXQUFXLGtCQUFrQixtQ0FBbUMscUJBQXFCLEdBQUcsbUJBQW1CLGtCQUFrQixjQUFjLEdBQUcsd0JBQXdCLHVCQUF1QixxQkFBcUIsdUJBQXVCLHNDQUFzQyxpQkFBaUIsa0JBQWtCLDZCQUE2Qix3QkFBd0IsYUFBYSxjQUFjLG9DQUFvQyxHQUFHLFdBQVcsaUJBQWlCLGtCQUFrQixHQUFHLE9BQU8sc0JBQXNCLHFCQUFxQixHQUFHLHNCQUFzQiwrQ0FBK0Msa0JBQWtCLDBCQUEwQixHQUFHLHFEQUFxRCxrQkFBa0IsR0FBRyw0Q0FBNEMsMEJBQTBCLGdCQUFnQixpQkFBaUIsR0FBRyxpQkFBaUIseUNBQXlDLEdBQUcsZ0JBQWdCLHVDQUF1QyxHQUFHLGlCQUFpQix5Q0FBeUMsR0FBRyw4QkFBOEIsc0JBQXNCLEdBQUcsY0FBYyx1QkFBdUIsc0JBQXNCLHNCQUFzQiwwQkFBMEIsR0FBRywwQkFBMEIsc0JBQXNCLHFCQUFxQiwyQkFBMkIsdUJBQXVCLEdBQUcscUNBQXFDLCtDQUErQyw4QkFBOEIsdUJBQXVCLEdBQUcseUJBQXlCLHNCQUFzQiw0QkFBNEIsb0JBQW9CLDJDQUEyQyxpQkFBaUIsaUJBQWlCLEdBQUcsK0JBQStCLHdCQUF3QiwrQ0FBK0MsR0FBRyx1Q0FBdUMsNkNBQTZDLEdBQUcsbUJBQW1CLDRDQUE0QyxHQUFHLG9CQUFvQix5Q0FBeUMsR0FBRyxvQkFBb0IsOENBQThDLEdBQUcsdUJBQXVCLFVBQVUsOEJBQThCLEtBQUssUUFBUSxnQ0FBZ0MsS0FBSyxHQUFHLDJCQUEyQixVQUFVLGdDQUFnQyxLQUFLLFFBQVEsOEJBQThCLEtBQUssR0FBRyx1QkFBdUIsVUFBVSw2QkFBNkIsZ0JBQWdCLGlCQUFpQixLQUFLLFFBQVEsNkJBQTZCLG1CQUFtQixpQkFBaUIsS0FBSyxHQUFHLHlCQUF5QixVQUFVLDZCQUE2QixtQkFBbUIsaUJBQWlCLEtBQUssUUFBUSw2QkFBNkIsZ0JBQWdCLGlCQUFpQixLQUFLLEdBQUcscUJBQXFCO0FBQ3QyTjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzNTMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQyxzQkFBc0IsMEJBQTBCO0FBQ2hEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVtRDs7Ozs7OztVQ3ZPbkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7O0FDQWtFO0FBQzdDOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtEQUFjO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsd0NBQUk7QUFDWixRQUFRLHdDQUFJO0FBQ1osUUFBUSx3Q0FBSTtBQUNaLFFBQVEsd0NBQUk7QUFDWixRQUFRLHdDQUFJO0FBQ1o7QUFDQTtBQUNBLFFBQVEsd0NBQUk7QUFDWixRQUFRLHdDQUFJO0FBQ1osUUFBUSx3Q0FBSTtBQUNaLFFBQVEsd0NBQUk7QUFDWixRQUFRLHdDQUFJO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDhCQUE4Qiw2Q0FBUzs7QUFFdkM7QUFDQSxRQUFRLHdDQUFJO0FBQ1osUUFBUSx3Q0FBSTtBQUNaLFFBQVEsd0NBQUk7QUFDWixRQUFRLHdDQUFJO0FBQ1osUUFBUSx3Q0FBSTtBQUNaOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwrQkFBK0I7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGtDQUFrQztBQUN4RDtBQUNBO0FBQ0EsOEJBQThCLFlBQVk7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFlBQVk7O0FBRTNDO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUNBQW1DLGlDQUFpQzs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxtQ0FBbUMsaUNBQWlDOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuLyogcHJldHRpZXItaWdub3JlICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjMyLCAwLjc2Mik7XG4gIGNvbG9yOiBiZWlnZTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG4gIGNvbG9yOiByZ2IoMiwgMiwgMjA2KTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDE5NSk7XG59XG5cbi5wYWdlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiAzcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJ1bmdlZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmdhbWUtc3RhcnQtYnRuIHtcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xufVxuXG4jcmFuZG9taXplLXNoaXBzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIzLCA1Myk7XG59XG5cbi5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTYxLCAyNTUpO1xufVxuXG4uaHVtYW4tY2VsbCxcbi5jb21wdXRlci1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmVpZ2U7XG59XG5cbi5jb21wdXRlci1jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG59XG5cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNiwgMTI2LCAxMjYpO1xuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTI2LCAxMjYsIDEyNik7XG59XG5cbi5nYW1lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBjb2x1bW4tZ2FwOiA0cmVtO1xufVxuXG4uZ2FtZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uZ2FtZS1vdmVyLW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCAzNSwgMzUpO1xuICBjb2xvcjogYmVpZ2U7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogZGFzaGVkIGJlaWdlIDNweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbn1cblxudGFibGUge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI1LCAxNjIsIDAuNzYyKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xufVxuXG4ucm93LTIsXG4jY29sbGFwc2UtcnVsZXMtYnRuLFxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ydWxlcy1zaGlwLFxuLnJ1bGVzLWhpdCxcbi5ydWxlcy1taXNzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxcmVtO1xufVxuXG4ucnVsZXMtc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjYsIDEyNiwgMTI2KTtcbn1cblxuLnJ1bGVzLWhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIzLCA1Myk7XG59XG5cbi5ydWxlcy1taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTYxLCAyNTUpO1xufVxuXG4ucnVsZXMtaGl0LFxuLnJ1bGVzLW1pc3Mge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLnJ1bGVzIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBsaW5lLWhlaWdodDogMTIwJTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4ucnVsZXMgcDpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAsXG5idXR0b24sXG4uZ2FtZS1vdmVyLW1lc3NhZ2Uge1xuICBmb250LWZhbWlseTogXCJTcGFjZSBHcm90ZXNrXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuI2NvbGxhcHNlLXJ1bGVzLWJ0biB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMC40cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCAyNSwgMTYyLCAwKTtcbiAgY29sb3I6IGJlaWdlO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbiNjb2xsYXBzZS1ydWxlcy1idG46aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCAyNSwgMTYyLCAwLjc2Mik7XG59XG5cbi8qIGFuaW1hdGlvbnMgKi9cblxuLnVucm9sbGVkLWJ0biB7XG4gIGFuaW1hdGlvbjogcm90YXRlQmFjayAwLjRzIGVhc2Utb3V0IGJvdGg7XG59XG5cbi51bnJvbGxlZC1kaXYge1xuICBhbmltYXRpb246IHVucm9sbCAwLjJzIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi5jb2xsYXBzZWQtYnRuIHtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMC40cyBlYXNlLW91dCBib3RoO1xufVxuXG4uY29sbGFwc2VkLWRpdiB7XG4gIGFuaW1hdGlvbjogY29sbGFwc2UgMC4ycyBlYXNlLWluLW91dCBib3RoO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlQmFjayB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdW5yb2xsIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNvbGxhcHNlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQztBQUNELG9CQUFvQjtBQUNwQjs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hELG9CQUFvQjtBQUNwQjs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTs7OztFQUlFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixTQUFTO0VBQ1QsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTs7O0VBR0UsYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLHdDQUF3QztFQUN4Qyx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMENBQTBDO0FBQzVDOztBQUVBLGVBQWU7O0FBRWY7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7RUFDWjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuLyogcHJldHRpZXItaWdub3JlICovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuLyogcHJldHRpZXItaWdub3JlICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjMyLCAwLjc2Mik7XFxuICBjb2xvcjogYmVpZ2U7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMjA2KTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDE5NSk7XFxufVxcblxcbi5wYWdlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAzcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCdW5nZWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5nYW1lLXN0YXJ0LWJ0biB7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNyYW5kb21pemUtc2hpcHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMywgNTMpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNjEsIDI1NSk7XFxufVxcblxcbi5odW1hbi1jZWxsLFxcbi5jb21wdXRlci1jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJlaWdlO1xcbn1cXG5cXG4uY29tcHV0ZXItY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNiwgMTI2LCAxMjYpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDEyNiwgMTI2LCAxMjYpO1xcbn1cXG5cXG4uZ2FtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgY29sdW1uLWdhcDogNHJlbTtcXG59XFxuXFxuLmdhbWUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMzUsIDM1KTtcXG4gIGNvbG9yOiBiZWlnZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IGRhc2hlZCBiZWlnZSAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgdG9wOiA0MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbn1cXG5cXG50YWJsZSB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG5wIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmNvbnRlbnQtd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCAyNSwgMTYyLCAwLjc2Mik7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbn1cXG5cXG4ucm93LTIsXFxuI2NvbGxhcHNlLXJ1bGVzLWJ0bixcXG4uY29udGVudC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ydWxlcy1zaGlwLFxcbi5ydWxlcy1oaXQsXFxuLnJ1bGVzLW1pc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5ydWxlcy1zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjYsIDEyNiwgMTI2KTtcXG59XFxuXFxuLnJ1bGVzLWhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMywgNTMpO1xcbn1cXG5cXG4ucnVsZXMtbWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNjEsIDI1NSk7XFxufVxcblxcbi5ydWxlcy1oaXQsXFxuLnJ1bGVzLW1pc3Mge1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5ydWxlcyBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5ydWxlcyBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnAsXFxuYnV0dG9uLFxcbi5nYW1lLW92ZXItbWVzc2FnZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwYWNlIEdyb3Rlc2tcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuI2NvbGxhcHNlLXJ1bGVzLWJ0biB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjUsIDE2MiwgMCk7XFxuICBjb2xvcjogYmVpZ2U7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbiNjb2xsYXBzZS1ydWxlcy1idG46aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI1LCAxNjIsIDAuNzYyKTtcXG59XFxuXFxuLyogYW5pbWF0aW9ucyAqL1xcblxcbi51bnJvbGxlZC1idG4ge1xcbiAgYW5pbWF0aW9uOiByb3RhdGVCYWNrIDAuNHMgZWFzZS1vdXQgYm90aDtcXG59XFxuXFxuLnVucm9sbGVkLWRpdiB7XFxuICBhbmltYXRpb246IHVucm9sbCAwLjJzIGVhc2UtaW4tb3V0IGJvdGg7XFxufVxcblxcbi5jb2xsYXBzZWQtYnRuIHtcXG4gIGFuaW1hdGlvbjogcm90YXRlIDAuNHMgZWFzZS1vdXQgYm90aDtcXG59XFxuXFxuLmNvbGxhcHNlZC1kaXYge1xcbiAgYW5pbWF0aW9uOiBjb2xsYXBzZSAwLjJzIGVhc2UtaW4tb3V0IGJvdGg7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVCYWNrIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB1bnJvbGwge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XFxuICAgIGhlaWdodDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNvbGxhcHNlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XFxuICAgIGhlaWdodDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwidGVzdFwiKSB7XG4vLyAgIHJlcXVpcmUoXCIuL2RvbVwiKTtcbi8vIH1cblxuY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0Q291bnQgPSAwO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0Q291bnQrKztcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRDb3VudCA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gICAgdGhpcy5taXNzZWRTaG90cyA9IFtdO1xuICAgIHRoaXMuZ3Vlc3NlZENlbGxzID0gW107XG4gIH1cblxuICBjcmVhdGVCb2FyZCgpIHtcbiAgICBjb25zdCBib2FyZEFyciA9IFtdO1xuICAgIGNvbnN0IHNpemUgPSAxMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgcm93LnB1c2goXCIgXCIpO1xuICAgICAgfVxuICAgICAgYm9hcmRBcnIucHVzaChyb3cpO1xuICAgIH1cbiAgICByZXR1cm4gYm9hcmRBcnI7XG4gIH1cblxuICBwcmludEJvYXJkKCkge1xuICAgIGxldCBib2FyZFN0cmluZyA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgYm9hcmRTdHJpbmcgKz0gXCJYIFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvYXJkU3RyaW5nICs9IFwiLSBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYm9hcmRTdHJpbmcgKz0gXCJcXG5cIjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYm9hcmRTdHJpbmcpO1xuICB9XG5cbiAgcGxhY2VSYW5kb21TaGlwcyhzaGlwQXJyKSB7XG4gICAgZm9yIChsZXQgc2hpcCBvZiBzaGlwQXJyKSB7XG4gICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBhIHJhbmRvbSBvcmllbnRhdGlvbiwgeC1jb29yZGluYXRlLCBhbmQgeS1jb29yZGluYXRlXG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIjtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmJvYXJkLmxlbmd0aCk7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ib2FyZC5sZW5ndGgpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBzaGlwIGNhbiBiZSBwbGFjZWQgYXQgdGhlIGdlbmVyYXRlZCBsb2NhdGlvblxuICAgICAgICBpZiAodGhpcy5jYW5QbGFjZShzaGlwLCB4LCB5LCBvcmllbnRhdGlvbikpIHtcbiAgICAgICAgICB0aGlzLnBsYWNlU2hpcChzaGlwLCB4LCB5LCBvcmllbnRhdGlvbik7XG5cbiAgICAgICAgICBwbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYXQgdGhpcyBwb2ludCBpbiBteSBsaWZlLCB0aGVyZSdzIG5vdCBhIHNpbmdsZSBjaGFuY2UgaSB3b3VsZCB3b3JrIHRocm91Z2ggaW1wbGVtZW50aW5nIHRoaXMgbG9naWMgbXlzZWxmLiBpbiAyMCB5ZWFycywgaSBob3BlIGknbGwgZmluZCB0aGlzIHByb2plY3QgYWdhaW4gYW5kIHRoaW5rIFwiaG93IHBlZGVzdHJpYW4sIGkgY291bGRuJ3QgaGFuZGxlIHN1Y2ggYSBzaW1wbGUgcHJvYmxlbSBvbiBteSBvd24uXCIgYXMgb2Ygbm93IHRob3VnaCwgaSBjYW4ndCBlbnZpc2lvbiBteXNlbGYgYmVjb21pbmcgdGhhdCBwZXJzb24sIHNvIGZvcmdpdmUgbWUuIGlmIHlvdSdyZSBtZSBhbmQgcmVhZGluZyB0aGlzIGluIDIwIHllYXJzIGFuZCBoYWQgdGhlIGFmb3JlbWVudGlvbmVkIHRob3VnaHQsIHRha2UgYSBtb21lbnQgdG8gZmVlbCBwcm91ZCBvZiBob3cgZmFyIHlvdSd2ZSBjb21lLlxuICBjYW5QbGFjZShzaGlwLCB4LCB5LCBvcmllbnRhdGlvbikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZTtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIHhDb29yZGluYXRlID0geCArIGk7XG4gICAgICAgIHlDb29yZGluYXRlID0geTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhDb29yZGluYXRlID0geDtcbiAgICAgICAgeUNvb3JkaW5hdGUgPSB5ICsgaTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgdGhlIGNlbGwgaXRzZWxmXG4gICAgICBpZiAoXG4gICAgICAgIHhDb29yZGluYXRlID49IHRoaXMuYm9hcmQubGVuZ3RoIHx8XG4gICAgICAgIHlDb29yZGluYXRlID49IHRoaXMuYm9hcmQubGVuZ3RoIHx8XG4gICAgICAgIHRoaXMuYm9hcmRbeUNvb3JkaW5hdGVdW3hDb29yZGluYXRlXSBpbnN0YW5jZW9mIFNoaXBcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIHRoZSBzdXJyb3VuZGluZyBjZWxsc1xuICAgICAgZm9yIChsZXQgZHggPSAtMTsgZHggPD0gMTsgZHgrKykge1xuICAgICAgICBmb3IgKGxldCBkeSA9IC0xOyBkeSA8PSAxOyBkeSsrKSB7XG4gICAgICAgICAgbGV0IG54ID0geENvb3JkaW5hdGUgKyBkeDtcbiAgICAgICAgICBsZXQgbnkgPSB5Q29vcmRpbmF0ZSArIGR5O1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG54ID49IDAgJiZcbiAgICAgICAgICAgIG54IDwgdGhpcy5ib2FyZC5sZW5ndGggJiZcbiAgICAgICAgICAgIG55ID49IDAgJiZcbiAgICAgICAgICAgIG55IDwgdGhpcy5ib2FyZC5sZW5ndGggJiZcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbbnldW254XSBpbnN0YW5jZW9mIFNoaXBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgeENvb3JkaW5hdGUsIHlDb29yZGluYXRlLCBvcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICB0aGlzLmJvYXJkW3lDb29yZGluYXRlXVt4Q29vcmRpbmF0ZSArIGldID0gc2hpcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeUNvb3JkaW5hdGUgKyBpXVt4Q29vcmRpbmF0ZV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHlDb29yZGluYXRlLCB4Q29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLmJvYXJkW3lDb29yZGluYXRlXVt4Q29vcmRpbmF0ZV0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICB0aGlzLmJvYXJkW3lDb29yZGluYXRlXVt4Q29vcmRpbmF0ZV0uaGl0KCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImhpdCBzaGlwXCIpO1xuXG4gICAgICB0aGlzLmd1ZXNzZWRDZWxscy5wdXNoKFt5Q29vcmRpbmF0ZSwgeENvb3JkaW5hdGVdKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ3Vlc3NlZCBzaG90c1wiLCB0aGlzLmd1ZXNzZWRDZWxscyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5taXNzZWRTaG90cy5wdXNoKFt5Q29vcmRpbmF0ZSwgeENvb3JkaW5hdGVdKTtcbiAgICAgIHRoaXMuZ3Vlc3NlZENlbGxzLnB1c2goW3lDb29yZGluYXRlLCB4Q29vcmRpbmF0ZV0pO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJndWVzc2VkIHNob3RzXCIsIHRoaXMuZ3Vlc3NlZENlbGxzKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBhbGxTdW5rKCkge1xuICAgIGxldCBzdW5rQ291bnQgPSAwO1xuICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgc3Vua0NvdW50Kys7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHN1bmtDb3VudCA9PT0gdGhpcy5zaGlwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaXNTaGlwKHlDb29yZGluYXRlLCB4Q29vcmRpbmF0ZSkge1xuICAgIGNvbnNvbGUubG9nKFwiaXMgc2hpcCBjYWxsZWQ6XCIpO1xuXG4gICAgaWYgKHRoaXMuYm9hcmRbeUNvb3JkaW5hdGVdW3hDb29yZGluYXRlXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaXQgd2FzIGEgc2hpcCEhXCIpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9XG59XG5cbmNsYXNzIEdhbWVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wbGF5ZXJzID0gW25ldyBQbGF5ZXIoXCJodW1hblwiKSwgbmV3IFBsYXllcihcImNvbXB1dGVyXCIpXTtcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcnNbMF07XG4gICAgdGhpcy5jdXJyZW50UGxheWVySW5kZXggPSAwO1xuICAgIHRoaXMuY3VycmVudElzSHVtYW4gPSB0cnVlO1xuICB9XG5cbiAgZ2FtZVN0YXJ0KCkge1xuICAgIHRoaXMucGxheVR1cm4odGhpcy5nZXRDdXJyZW50UGxheWVyKCkpO1xuICB9XG5cbiAgLy8gc2V0cyBmbGFnIGZvciB3aGV0aGVyIGN1cnJlbnQgdHVybiBpcyBodW1hblxuICBwbGF5VHVybigpIHtcbiAgICBpZiAodGhpcy5nZXRDdXJyZW50UGxheWVyKCkudHlwZSA9PT0gXCJodW1hblwiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJc0h1bWFuID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50SXNIdW1hbiA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnQgcGxheWVyOlwiLCB0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS50eXBlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm9wcG9zaW5nIHBsYXllcjpcIiwgdGhpcy5nZXRPcHBvc2luZ1BsYXllcigpLnR5cGUpO1xuICB9XG5cbiAgLy8gb25seSBnZXRzIGNhbGxlZCBpbiBET00gbWF5YmU/XG4gIG5leHRUdXJuKCkge1xuICAgIHRoaXMuY3VycmVudFBsYXllckluZGV4ID1cbiAgICAgICh0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgdGhpcy5wbGF5ZXJzLmxlbmd0aDtcblxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCJuZXh0IHR1cm4gY2FsbGVkLCBjdXJyZW50IHBsYXllciBpcyBub3c6XCIsXG4gICAgICB0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS50eXBlXG4gICAgKTtcbiAgfVxuXG4gIHdpbkNoZWNrKCkge1xuICAgIGlmICh0aGlzLmdldE9wcG9zaW5nUGxheWVyKCkuYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleF07XG4gIH1cblxuICBnZXRPcHBvc2luZ1BsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJzWyh0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgdGhpcy5wbGF5ZXJzLmxlbmd0aF07XG4gIH1cbn1cblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIsIEdhbWVDb250cm9sbGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciwgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgZ2FtZVN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLXN0YXJ0LWJ0blwiKTtcbmNvbnN0IHJhbmRvbWl6ZVNoaXBzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYW5kb21pemUtc2hpcHNcIik7XG5jb25zdCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC13cmFwcGVyXCIpO1xuY29uc3QgcnVsZXNSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdy0yXCIpO1xuY29uc3QgY29sbGFwc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbGxhcHNlLXJ1bGVzLWJ0blwiKTtcblxuY29uc3QgZ2FtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZVwiKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZUNvbnRyb2xsZXIoKTtcbmxldCBhdmFpbGFibGVDb29yZGluYXRlcyA9IFtdO1xuXG4vLyBuZWVkIHRvIG1ha2Ugc3VyZSB0aGUgYnV0dG9uIGNhbiBvbmx5IGdldCBjbGlja2VkIG9uY2VcbmdhbWVTdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhnYW1lKTtcblxuICBnYW1lU3RhcnRCdG4ucmVtb3ZlKCk7XG5cbiAgLy8gY29tcHV0ZXIgZ3Vlc3MgcG9vbFxuICBpbnRpYWxpemVQb3NzaWJsZUNvb3JkaW5hdGVzKCk7XG5cbiAgLy8gaW5pdGlhbGl6ZSBkaXNwbGF5XG4gIHNldHVwRE9NKCk7XG59KTtcblxuZnVuY3Rpb24gc2V0dXBET00oKSB7XG4gIC8vIHNldCBpbml0aWFsIGh1bWFuIHR1cm4gZmxhZzpcbiAgZ2FtZS5wbGF5VHVybigpO1xuXG4gIC8vIHNldCB1cCBwbGF5ZXIgdmFyaWFibGVzXG4gIGNvbnN0IHAxID0gZ2FtZS5wbGF5ZXJzWzBdO1xuICBjb25zdCBwMiA9IGdhbWUucGxheWVyc1sxXTtcblxuICAvLyBjcmVhdGUgYXJyYXlzIG9mIHNoaXBzIGZvciBlYWNoIHBsYXllclxuICBsZXQgc2hpcHMxID0gW1xuICAgIG5ldyBTaGlwKDUpLFxuICAgIG5ldyBTaGlwKDQpLFxuICAgIG5ldyBTaGlwKDMpLFxuICAgIG5ldyBTaGlwKDMpLFxuICAgIG5ldyBTaGlwKDIpLFxuICBdO1xuICBsZXQgc2hpcHMyID0gW1xuICAgIG5ldyBTaGlwKDUpLFxuICAgIG5ldyBTaGlwKDQpLFxuICAgIG5ldyBTaGlwKDMpLFxuICAgIG5ldyBTaGlwKDMpLFxuICAgIG5ldyBTaGlwKDIpLFxuICBdO1xuXG4gIC8vIHBsYWNlIHNoaXBzIG9uIGJvYXJkc1xuICBwMS5ib2FyZC5wbGFjZVJhbmRvbVNoaXBzKHNoaXBzMSk7XG4gIHAyLmJvYXJkLnBsYWNlUmFuZG9tU2hpcHMoc2hpcHMyKTtcblxuICAvLyBjcmVhdGUgYm9hcmRzXG4gIGNyZWF0ZVBsYXllckJvYXJkcygpO1xuXG4gIC8vIHNob3cgcnVsZXMgcm93XG4gIHJhbmRvbWl6ZVNoaXBzQnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICBydWxlc1Jvdy5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gIGNvbnRlbnRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICBjb2xsYXBzZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbn1cblxuY29sbGFwc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29sbGFwc2VCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlZC1idG5cIik7XG4gIGNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWQtZGl2XCIpO1xufSk7XG5cbnJhbmRvbWl6ZVNoaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIG9ubHkgbmVlZCB0byByZS1yYW5kb21pemUgaHVtYW4gc2hpcHNcbiAgZ2FtZS5wbGF5ZXJzWzBdLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gIGxldCBzaGlwczEgPSBbXG4gICAgbmV3IFNoaXAoNSksXG4gICAgbmV3IFNoaXAoNCksXG4gICAgbmV3IFNoaXAoMyksXG4gICAgbmV3IFNoaXAoMyksXG4gICAgbmV3IFNoaXAoMiksXG4gIF07XG5cbiAgZ2FtZS5wbGF5ZXJzWzBdLmJvYXJkLnBsYWNlUmFuZG9tU2hpcHMoc2hpcHMxKTtcblxuICBjcmVhdGVQbGF5ZXJCb2FyZHMoKTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXJCb2FyZHMoKSB7XG4gIGdhbWVEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGdhbWUucGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAvLyBjcmVhdGUgaHRtbCBnYW1lYm9hcmRcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGFibGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cGxheWVyLnR5cGV9LWJvYXJkYCk7XG4gICAgLy8gaGVhZGVyIHJvdyBmb3IgdGhlIHgtYXhpcyBsYWJlbHNcbiAgICBsZXQgaGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIC8vIGVtcHR5IHRvcCBsZWZ0IGNvcm5lclxuICAgIGxldCBlbXB0eUNvcm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChlbXB0eUNvcm5lcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBheGlzQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgIGF4aXNDZWxsLnRleHRDb250ZW50ID0gaTtcbiAgICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChheGlzQ2VsbCk7XG4gICAgfVxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWRlclJvdyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5ib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuICAgICAgLy8gY3JlYXRlIGF4aXMgY2VsbFxuICAgICAgbGV0IGF4aXNDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgYXhpc0NlbGwudGV4dENvbnRlbnQgPSBpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGF4aXNDZWxsKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIuYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIiBcIjtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGAke3BsYXllci50eXBlfS1jZWxsYCk7XG5cbiAgICAgICAgY2VsbC5kYXRhc2V0LnggPSBpO1xuICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGo7XG5cbiAgICAgICAgaWYgKHBsYXllci50eXBlID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgICAvLyBtYWtlIGNsaWNrYWJsZSBpZiBwbGF5ZXIgaXMgb3Bwb25lbnRcbiAgICAgICAgICBjZWxsLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNlbGxDbGljayhjZWxsKSk7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyLmJvYXJkLmlzU2hpcChjZWxsLmRhdGFzZXQueSwgY2VsbC5kYXRhc2V0LngpKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICAgIC8vIGFwcGVuZCBib2FyZHNcbiAgICBnYW1lRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgfSk7XG4gIC8vIGFwcGVuZCBib2FyZCBuYW1lc1xuICBnYW1lLnBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgbGV0IGJvYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJvYXJkTmFtZS50ZXh0Q29udGVudCA9IGAke3BsYXllci50eXBlfSdzIGdyaWRgO1xuXG4gICAgZ2FtZURpdi5hcHBlbmRDaGlsZChib2FyZE5hbWUpO1xuICB9KTtcbn1cblxuLy8gYWRkIGNsYXNzIHRvIGd1ZXNzZWQgY2VsbHMgdXNpbmcgaXNTaGlwIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBoaXQgYW5kIG1pc3NcbmZ1bmN0aW9uIHVwZGF0ZURPTSgpIHtcbiAgY29uc3QgaHVtYW5Cb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5odW1hbi1jZWxsXCIpO1xuICBjb25zdCBjb21wdXRlckJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyLWNlbGxcIik7XG5cbiAgY29tcHV0ZXJCb2FyZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImd1ZXNzZWRDZWxsczpcIiwgZ2FtZS5wbGF5ZXJzWzBdLmJvYXJkLmd1ZXNzZWRDZWxscyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImNlbGxpbmZvOlwiLCBgJHtbY2VsbC5kYXRhc2V0LngsIGNlbGwuZGF0YXNldC55XX1gKTtcblxuICAgIGlmIChcbiAgICAgIGdhbWUucGxheWVyc1sxXS5ib2FyZC5ndWVzc2VkQ2VsbHMuc29tZShcbiAgICAgICAgKGd1ZXNzZWRDZWxsKSA9PlxuICAgICAgICAgIGd1ZXNzZWRDZWxsWzBdID09PSBjZWxsLmRhdGFzZXQueSAmJiBndWVzc2VkQ2VsbFsxXSA9PT0gY2VsbC5kYXRhc2V0LnhcbiAgICAgIClcbiAgICApIHtcbiAgICAgIC8vIGNoZWNrIGlmIGNlbGwgaXMgc2hpcFxuICAgICAgaWYgKGdhbWUucGxheWVyc1sxXS5ib2FyZC5pc1NoaXAoY2VsbC5kYXRhc2V0LnksIGNlbGwuZGF0YXNldC54KSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaHVtYW5Cb2FyZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImd1ZXNzZWRDZWxsczpcIiwgZ2FtZS5wbGF5ZXJzWzBdLmJvYXJkLmd1ZXNzZWRDZWxscyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImNlbGxpbmZvOlwiLCBgJHtbY2VsbC5kYXRhc2V0LngsIGNlbGwuZGF0YXNldC55XX1gKTtcblxuICAgIGlmIChcbiAgICAgIGdhbWUucGxheWVyc1swXS5ib2FyZC5ndWVzc2VkQ2VsbHMuc29tZShcbiAgICAgICAgKGd1ZXNzZWRDZWxsKSA9PlxuICAgICAgICAgIGd1ZXNzZWRDZWxsWzBdID09PSBjZWxsLmRhdGFzZXQueSAmJiBndWVzc2VkQ2VsbFsxXSA9PT0gY2VsbC5kYXRhc2V0LnhcbiAgICAgIClcbiAgICApIHtcbiAgICAgIC8vIGNoZWNrIGlmIGNlbGwgaXMgc2hpcFxuICAgICAgaWYgKGdhbWUucGxheWVyc1swXS5ib2FyZC5pc1NoaXAoY2VsbC5kYXRhc2V0LnksIGNlbGwuZGF0YXNldC54KSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmxldCBpc0NvbXB1dGVyVHVybiA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjZWxsQ2xpY2soY2VsbCkge1xuICAvLyBwcmV2ZW50cyBwbGF5ZXJzIGZyb20gY2xpY2tpbmcgd2hlbiBjb21wdXRlcidzIHR1cm5cbiAgaWYgKGlzQ29tcHV0ZXJUdXJuKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGdhbWUuY3VycmVudElzSHVtYW4pIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInksIHg6XCIsIGNlbGwuZGF0YXNldC55LCBjZWxsLmRhdGFzZXQueCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJzaGlwIGF0OlwiLCBnYW1lLnBsYXllcnNbMV0uYm9hcmQuYm9hcmRbNV1bNV0pO1xuXG4gICAgLy8gcmVtb3ZlIHJhbmRvbWl6ZSBidXR0b25cbiAgICByYW5kb21pemVTaGlwc0J0bi5yZW1vdmUoKTtcblxuICAgIC8vIGRpc2FsbG93IGNsaWNraW5nIHRoZSBzYW1lIGNlbGwgdHdpY2VcbiAgICBjZWxsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwicG9pbnRlci1ldmVudHM6IG5vbmVcIik7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcblxuICAgIGxldCBoaXQgPSBnYW1lXG4gICAgICAuZ2V0T3Bwb3NpbmdQbGF5ZXIoKVxuICAgICAgLmJvYXJkLnJlY2VpdmVBdHRhY2soY2VsbC5kYXRhc2V0LnksIGNlbGwuZGF0YXNldC54KTtcblxuICAgIC8vIHJlLXJlbmRlciBjbGlja2VkIGNlbGwgdG8gc2hvdyBoaXQvbWlzcyBpbW1lZGlhdGVseVxuICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNvbXB1dGVyLWNlbGxcIik7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLWNlbGxcIik7XG4gICAgICB1cGRhdGVET00oKTtcbiAgICB9KTtcblxuICAgIGlmIChoaXQpIHtcbiAgICAgIHVwZGF0ZURPTSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVET00oKTtcblxuICAgICAgZ2FtZS5uZXh0VHVybigpO1xuICAgICAgY29tcHV0ZXJUdXJuKCk7XG4gICAgfVxuXG4gICAgaWYgKGdhbWUud2luQ2hlY2soKSkge1xuICAgICAgZ2FtZU92ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlQ2xpY2tzKCkge1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXItY2VsbCwgLmh1bWFuLWNlbGxcIik7XG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZiAoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xpY2tlZFwiKSkge1xuICAgICAgY2VsbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlQ2xpY2tzKCkge1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXItY2VsbCwgLmh1bWFuLWNlbGxcIik7XG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZiAoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xpY2tlZFwiKSkge1xuICAgICAgY2VsbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaW50aWFsaXplUG9zc2libGVDb29yZGluYXRlcygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBhdmFpbGFibGVDb29yZGluYXRlcy5wdXNoKFtpLCBqXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF2YWlsYWJsZUNvb3JkaW5hdGVzO1xufVxuXG5sZXQgbGFzdEhpdCA9IG51bGw7XG5sZXQgZGlyZWN0aW9uID0gbnVsbDtcblxuZnVuY3Rpb24gY29tcHV0ZXJUdXJuKCkge1xuICBpc0NvbXB1dGVyVHVybiA9IHRydWU7XG4gIGRpc2FibGVDbGlja3MoKTtcblxuICBpZiAoYXZhaWxhYmxlQ29vcmRpbmF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgdXBkYXRlRE9NKCk7XG4gICAgZ2FtZS5uZXh0VHVybigpO1xuICAgIGVuYWJsZUNsaWNrcygpO1xuICAgIGlzQ29tcHV0ZXJUdXJuID0gZmFsc2U7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaW5kZXg7XG4gIGxldCB4LCB5O1xuXG4gIGlmIChsYXN0SGl0ICYmIGRpcmVjdGlvbikge1xuICAgIC8vIGNvbnRpbnVlIGluIHRoZSBzYW1lIGRpcmVjdGlvbiBpZiBsYXN0IGd1ZXNzIHdhcyBhIGhpdFxuICAgIFt4LCB5XSA9XG4gICAgICBkaXJlY3Rpb24gPT09IFwieFwiXG4gICAgICAgID8gW2xhc3RIaXRbMF0sIGxhc3RIaXRbMV0gKyAxXVxuICAgICAgICA6IFtsYXN0SGl0WzBdICsgMSwgbGFzdEhpdFsxXV07XG4gICAgaW5kZXggPSBhdmFpbGFibGVDb29yZGluYXRlcy5maW5kSW5kZXgoXG4gICAgICAoY29vcmQpID0+IGNvb3JkWzBdID09PSB4ICYmIGNvb3JkWzFdID09PSB5XG4gICAgKTtcbiAgICBpZiAoaW5kZXggPT09IC0xIHx8IHggPj0gZ2FtZS5ib2FyZFNpemUgfHwgeSA+PSBnYW1lLmJvYXJkU2l6ZSkge1xuICAgICAgLy8gaWYgbmV4dCBjb29yZGluYXRlIGluIHRoZSBzYW1lIGRpcmVjdGlvbiBpcyBub3QgYXZhaWxhYmxlIG9yIG91dCBvZiBib3VuZHMsIGNob29zZSBhIHJhbmRvbSBjb29yZGluYXRlXG4gICAgICBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUNvb3JkaW5hdGVzLmxlbmd0aCk7XG4gICAgICBbeCwgeV0gPSBhdmFpbGFibGVDb29yZGluYXRlc1tpbmRleF07XG4gICAgICBsYXN0SGl0ID0gbnVsbDtcbiAgICAgIGRpcmVjdGlvbiA9IG51bGw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGNob29zZSBhIHJhbmRvbSBjb29yZGluYXRlIGlmIHRoZSBsYXN0IGd1ZXNzIHdhcyBhIG1pc3Mgb3IgdGhlcmUgd2FzIG5vIGxhc3QgZ3Vlc3NcbiAgICBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUNvb3JkaW5hdGVzLmxlbmd0aCk7XG4gICAgW3gsIHldID0gYXZhaWxhYmxlQ29vcmRpbmF0ZXNbaW5kZXhdO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHRoZSBjaG9zZW4gY29vcmRpbmF0ZSBmcm9tIGF2YWlsYWJsZUNvb3JkaW5hdGVzXG4gIGF2YWlsYWJsZUNvb3JkaW5hdGVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgLy8gY29udmVydCB0byBzdHJpbmdzIGZvciBjb25mb3JtaXR5XG4gIGxldCBoaXQgPSBnYW1lLmdldE9wcG9zaW5nUGxheWVyKCkuYm9hcmQucmVjZWl2ZUF0dGFjayhTdHJpbmcoeSksIFN0cmluZyh4KSk7XG5cbiAgdXBkYXRlRE9NKCk7XG5cbiAgaWYgKGdhbWUud2luQ2hlY2soKSkge1xuICAgIGdhbWVPdmVyKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGhpdCkge1xuICAgIC8vIHNldCBsYXN0IGhpdCBjb29yZGluYXRlIGFuZCBkaXJlY3Rpb24gZm9yIHN1YnNlcXVlbnQgZ3Vlc3NcbiAgICBsYXN0SGl0ID0gW3gsIHldO1xuICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiB8fCAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IFwieFwiIDogXCJ5XCIpO1xuICAgIHNldFRpbWVvdXQoY29tcHV0ZXJUdXJuLCA1MDApO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlc2V0IHZhbHVlcyBvbiBtaXNzXG4gICAgbGFzdEhpdCA9IG51bGw7XG4gICAgZGlyZWN0aW9uID0gbnVsbDtcbiAgICBlbmFibGVDbGlja3MoKTtcbiAgICBpc0NvbXB1dGVyVHVybiA9IGZhbHNlO1xuICAgIGdhbWUubmV4dFR1cm4oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnYW1lT3ZlcigpIHtcbiAgZGlzYWJsZUNsaWNrcygpO1xuICBjb25zdCBnYW1lV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS13cmFwcGVyXCIpO1xuICBjb25zdCBnYW1lT3Zlck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGdhbWVEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb2ludGVyLWV2ZW50czogbm9uZVwiKTtcblxuICBnYW1lV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZW5kLXNjcmVlblwiKTtcbiAgZ2FtZU92ZXJNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItbWVzc2FnZVwiKTtcbiAgZ2FtZU92ZXJNZXNzYWdlLnRleHRDb250ZW50ID0gYEdhbWUgb3ZlciwgJHtcbiAgICBnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKS50eXBlXG4gIH0gd2lucyFcXHJcXG5cXHJcXG5SZWZyZXNoIHRoZSBwYWdlIHRvIHBsYXkgYWdhaW4uYDtcblxuICBnYW1lV3JhcHBlci5hcHBlbmRDaGlsZChnYW1lT3Zlck1lc3NhZ2UpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
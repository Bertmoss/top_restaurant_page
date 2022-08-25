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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./CormorantGaramond-Regular.ttf */ "./src/CormorantGaramond-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./CormorantGaramond-LightItalic.ttf */ "./src/CormorantGaramond-LightItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@font-face {\n  font-family: cormo;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n\n.root {\n  box-sizing: border-box;\n  margin: 0%;\n}\nbody {\n  padding: 0px; \n  margin: 0%;\n}\n#container {\n  position: relative;\n  padding: 0px;\n  margin: 0px;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  background-size: cover;\n  background-position: bottom center;\n}\n\n.hidden {\n  display: none;\n}\n\n/* HEADING CONTAINER */\n\n#heading-container, #contact-info-container {\n  position: absolute;\n  bottom: 30%;  /* 300px; */\n  margin-left:  auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  width: fit-content;\n}\n\n#heading-container *{\n  font-family: cormo;\n  margin: 0px;\n  color: white;\n  padding-bottom: 10px;\n  text-align: center;\n}\n#contact-info-container {\n  background-color: white;\n  opacity: 0.6;\n  border-radius: 65px ;\n  padding: 25px;\n}\n #contact-info-container *{\n  font-family: cormo;\n  margin: 20px 0px;\n  text-align: center;\n }\n #contact-info-container :first-child {\n  margin-top: 0px;\n }\n #contact-info-container p {\n  font-size: 18px;\n }\n\nh1 {\n  font-size: 60px;\n  font-weight: lighter;\n}\nh5 {\n  font-weight: lighter;\n}\n\n/* NAV CONTAINER */\n#nav-container {\n  padding: 20px;\n}\n\n#nav-container a {\n  background: none;\n  font-family: cormo;\n  font-size: 24px;\n  color: white;\n  position: relative;\n  margin: 5px 15px;\n}\n\na::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 2px;\n  bottom: -5px;\n  left: 0;\n  background-color: white;\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\na:hover::before {\n  transform: scaleX(1);\n}\n\n/*menu container */\n\n#menu-container * {\n  font-family: cormo; \n\n}\nimg {\n  width: 100vw \n}\n#menu-content {\n  box-sizing: border-box;\n  margin: 50px auto;\n  width: 100vw;\n  padding-left: 20%;\n  padding-right: 20%;\n  \n}\n#drinks-container {\n  margin: 0px;\n}\ncaption {\n  font-size: 32px;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\ntable {\n  width: 100%;\n  margin: 25px 0px;\n}\n\n@media  screen and (min-width: 1000px) {\n  #menu-container {\n    margin: 100px 0px;\n    height: fit-content;\n    display: flex;\n    justify-content: space-between;\n    height: fit-content;\n    \n  }\n  #menu-content {\n    width: 400px;\n    padding: 0px;\n    margin: 0px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 50px);\n    grid-template-rows: repeat(auto-fill, 50px);\n    \n  } \n  #food-container, #drinks-container {\n    width: fit-content;\n    padding: 15px 50px 0px 50px ;\n    width: 300px;\n  }\n  #food-container {\n    border: #652422 5px solid;\n    grid-column: 1/11;\n    grid-row: 1/10;\n    border-radius: 92% 8% 89% 11% / 14% 87% 13% 86% ;\n  }\n  #drinks-container {\n    border: 5px #252C36 solid;\n    border-radius: 14% 86% 14% 86% / 90% 17% 83% 10%   ;\n    grid-column: 4/-1;\n    grid-row: 9/19;\n    z-index: 2;\n    background: white;\n    padding-bottom: 20px;\n    \n  }\n \n  table {\n    width: 100%;\n    margin: 0px;\n  } \n \n    img {\n    place-self: center;\n    width: 560px;\n    height: auto;\n  }\n    \n\n  \n}\n\n\n@media screen and (min-width:1500px) {\n  body {\n  padding: 0  150px;\n}\n  \n  \n} ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;EACE,kBAAkB;EAClB,qFAAmF;AACrF;;;AAGA;EACE,sBAAsB;EACtB,UAAU;AACZ;AACA;EACE,YAAY;EACZ,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,aAAa;AACf;;AAEA,sBAAsB;;AAEtB;EACE,kBAAkB;EAClB,WAAW,GAAG,WAAW;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;AACpB;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,oBAAoB;EACpB,aAAa;AACf;CACC;EACC,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;CACnB;CACA;EACC,eAAe;CAChB;CACA;EACC,eAAe;CAChB;;AAED;EACE,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,oBAAoB;AACtB;;AAEA,kBAAkB;AAClB;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,WAAW;EACX,YAAY;EACZ,OAAO;EACP,uBAAuB;EACvB,oBAAoB;EACpB,+BAA+B;AACjC;AACA;EACE,oBAAoB;AACtB;;AAEA,kBAAkB;;AAElB;EACE,kBAAkB;;AAEpB;AACA;EACE;AACF;AACA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;;AAEpB;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE;IACE,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;EAErB;EACA;IACE,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,aAAa;IACb,8CAA8C;IAC9C,2CAA2C;;EAE7C;EACA;IACE,kBAAkB;IAClB,4BAA4B;IAC5B,YAAY;EACd;EACA;IACE,yBAAyB;IACzB,iBAAiB;IACjB,cAAc;IACd,gDAAgD;EAClD;EACA;IACE,yBAAyB;IACzB,mDAAmD;IACnD,iBAAiB;IACjB,cAAc;IACd,UAAU;IACV,iBAAiB;IACjB,oBAAoB;;EAEtB;;EAEA;IACE,WAAW;IACX,WAAW;EACb;;IAEE;IACA,kBAAkB;IAClB,YAAY;IACZ,YAAY;EACd;;;;AAIF;;;AAGA;EACE;EACA,iBAAiB;AACnB;;;AAGA","sourcesContent":["\n@font-face {\n  font-family: cormo;\n  src: url(./CormorantGaramond-Regular.ttf), url(./CormorantGaramond-LightItalic.ttf);\n}\n\n\n.root {\n  box-sizing: border-box;\n  margin: 0%;\n}\nbody {\n  padding: 0px; \n  margin: 0%;\n}\n#container {\n  position: relative;\n  padding: 0px;\n  margin: 0px;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  background-size: cover;\n  background-position: bottom center;\n}\n\n.hidden {\n  display: none;\n}\n\n/* HEADING CONTAINER */\n\n#heading-container, #contact-info-container {\n  position: absolute;\n  bottom: 30%;  /* 300px; */\n  margin-left:  auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  width: fit-content;\n}\n\n#heading-container *{\n  font-family: cormo;\n  margin: 0px;\n  color: white;\n  padding-bottom: 10px;\n  text-align: center;\n}\n#contact-info-container {\n  background-color: white;\n  opacity: 0.6;\n  border-radius: 65px ;\n  padding: 25px;\n}\n #contact-info-container *{\n  font-family: cormo;\n  margin: 20px 0px;\n  text-align: center;\n }\n #contact-info-container :first-child {\n  margin-top: 0px;\n }\n #contact-info-container p {\n  font-size: 18px;\n }\n\nh1 {\n  font-size: 60px;\n  font-weight: lighter;\n}\nh5 {\n  font-weight: lighter;\n}\n\n/* NAV CONTAINER */\n#nav-container {\n  padding: 20px;\n}\n\n#nav-container a {\n  background: none;\n  font-family: cormo;\n  font-size: 24px;\n  color: white;\n  position: relative;\n  margin: 5px 15px;\n}\n\na::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 2px;\n  bottom: -5px;\n  left: 0;\n  background-color: white;\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\na:hover::before {\n  transform: scaleX(1);\n}\n\n/*menu container */\n\n#menu-container * {\n  font-family: cormo; \n\n}\nimg {\n  width: 100vw \n}\n#menu-content {\n  box-sizing: border-box;\n  margin: 50px auto;\n  width: 100vw;\n  padding-left: 20%;\n  padding-right: 20%;\n  \n}\n#drinks-container {\n  margin: 0px;\n}\ncaption {\n  font-size: 32px;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\ntable {\n  width: 100%;\n  margin: 25px 0px;\n}\n\n@media  screen and (min-width: 1000px) {\n  #menu-container {\n    margin: 100px 0px;\n    height: fit-content;\n    display: flex;\n    justify-content: space-between;\n    height: fit-content;\n    \n  }\n  #menu-content {\n    width: 400px;\n    padding: 0px;\n    margin: 0px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 50px);\n    grid-template-rows: repeat(auto-fill, 50px);\n    \n  } \n  #food-container, #drinks-container {\n    width: fit-content;\n    padding: 15px 50px 0px 50px ;\n    width: 300px;\n  }\n  #food-container {\n    border: #652422 5px solid;\n    grid-column: 1/11;\n    grid-row: 1/10;\n    border-radius: 92% 8% 89% 11% / 14% 87% 13% 86% ;\n  }\n  #drinks-container {\n    border: 5px #252C36 solid;\n    border-radius: 14% 86% 14% 86% / 90% 17% 83% 10%   ;\n    grid-column: 4/-1;\n    grid-row: 9/19;\n    z-index: 2;\n    background: white;\n    padding-bottom: 20px;\n    \n  }\n \n  table {\n    width: 100%;\n    margin: 0px;\n  } \n \n    img {\n    place-self: center;\n    width: 560px;\n    height: auto;\n  }\n    \n\n  \n}\n\n\n@media screen and (min-width:1500px) {\n  body {\n  padding: 0  150px;\n}\n  \n  \n} "],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactPage": () => (/* binding */ createContactPage)
/* harmony export */ });

function createDiv(idString) {
  let div = document.createElement("div");
  div.setAttribute("id", idString);
  return div;
}

let addressHeading = document.createElement('h2');
addressHeading.textContent = "Address";
let address = document.createElement("p");
address.textContent= "Aalmarkt 3011,\n 2311 EC Leiden";


let contactHeading = document.createElement("h2");
contactHeading.textContent = "Contact Us";

let contactPhone = document.createElement("p");
contactPhone.textContent = "+666 666 666"
let contactMail = document.createElement("p");
contactMail.textContent = "fakeemail@gmail.com"

function appendChildren(arr, location) {
  for ( let i = 0; i < arr.length; i++ ) {
    location.appendChild(arr[i]);
  }
}


function createContactPage() {

  let headingContainer = document.querySelector("#heading-container");
  headingContainer.classList.add("hidden");
  let contactContainer = createDiv("contact-info-container");
  contactContainer.setAttribute("style", "bottom: 35%");
  const container = document.querySelector("#container")
  container
  container.setAttribute("style", "background-image: url(/src/contact-side.jpg); background-size: cover; background-position: center")
  container.appendChild(contactContainer);
  appendChildren([addressHeading, address, contactHeading, contactPhone, contactMail], contactContainer);
}



/***/ }),

/***/ "./src/landing-page.js":
/*!*****************************!*\
  !*** ./src/landing-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFirstLandingPage": () => (/* binding */ createFirstLandingPage),
/* harmony export */   "createLandingPageFromLink": () => (/* binding */ createLandingPageFromLink)
/* harmony export */ });
function createDiv(idString) {
  let div = document.createElement("div");
  div.setAttribute("id", idString);
  return div;
}

function createLink(idString) {
  let link = document.createElement("a");
  link.setAttribute("id", idString);
  link.textContent = idString;
  return link;
}

function createLinks() {
  const nameArr = ["home", "menu", "contact"];
  const linkArr = [];
  for (let num = 0; num < nameArr.length; num++) {
    linkArr.push(createLink(nameArr[num]));
  }
  return linkArr;
}

function createNav() {
  let navContainer = createDiv("nav-container");
  let linkArr = createLinks();
  for (let item of linkArr) {
    navContainer.appendChild(item);
  }
  return navContainer;
}


function createHeadings(headingTxt, subheadingTxt, container) {
  if(headingTxt !== "") {
  let heading = document.createElement("h1");
  heading.textContent = headingTxt;
  container.appendChild(heading);
  }
  if (subheadingTxt !== "") {
  let subheading = document.createElement("h4");
  subheading.textContent = subheadingTxt;
  container.appendChild(subheading);
  }
}


function createFirstLandingPage() {
  const container = document.querySelector("#container");
  container.setAttribute("style", "background-image: url(/src/restaurant.jpg); background-size: cover;")

  let headingContainer = createDiv("heading-container");
  container.appendChild(headingContainer);

  createHeadings("Taqueria de Mitsu",
  "The most delicious tacos on this side of the Atlantic", headingContainer);
 
  let navContainer = createNav();
  container.appendChild(navContainer);
}



function createLandingPageFromLink() {
  const container = document.querySelector("#container")
  container.setAttribute("style", "background-image: url(/src/restaurant.jpg); background-size: cover;")
  
  let heading = document.querySelector("#heading-container > h1");
  heading.textContent = "Taqueria de Mitsu";

  let headingContainer = document.querySelector("#heading-container");
  headingContainer.classList.remove("hidden");
  headingContainer.setAttribute("style", "bottom: 30%")
  createHeadings("",
  "The most delicious tacos on this side of the Atlantic",
  headingContainer);
  
}
 



/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuPage": () => (/* binding */ createMenuPage)
/* harmony export */ });


/* MENU SECTION */
function createDiv(idString) {
  let div = document.createElement("div");
  div.setAttribute("id", idString);
  return div;
}
const body = document.querySelector("body");
const container = document.querySelector("#container");
let menuDiv = createDiv("menu-container");

/* menu content section */
let menuContent = createDiv("menu-content");
let foodContainer = createDiv("food-container");
let drinksContainer = createDiv("drinks-container");

/* menu image section */
let img = document.createElement("img");
img.setAttribute("src", "/src/menu-side.jpg");
img.setAttribute("alt", "image of a Taco");

/* appending children */
appendChildren([foodContainer, drinksContainer], menuContent);
appendChildren([menuContent, img], menuDiv);

/* Table data and headers arr*/
const headerArr = ["WARM DRINKS", "COCKTAILS", "CERVEZAS", "LUNCH", "DINNER"];
const foodArr = [
  "LUNCH",
  "Barbacoa Salad:13.45",
  "Grilled Chicken Salad:11.50",
  "Carnitas Tacos: 10.50",
  "Veggie Tacos:9:50",
  "DINNER",
  "Carne Asada Tacos:15.00",
  "Tacos al Pastor:16.00",
  "Tacos de Pescado:16.00",
  "Campechanos: 15.00",
  "Tacos de Birra: 15.50",
  "Tacos de Veggie: 13.00",
  "Vegetable Burrito: 16.00",
  "Chili con Carne Burrito: 17.00",
];
const drinkArr = [
  "WARM DRINKS",
  "Coffee:2.50",
  "Espresso:4.50",
  "Tea:1.50",
  "Mint Tea:4.00",
  "COCKTAILS",
  "Mojito:7.50",
  "Aztec Mule:8.00",
  "The Dr. Koizumi:10.00",
  "Cuba Libre:8.50",
  "CERVEZAS",
  "Red Stripe:5.00",
  "Corona (the good kind):4.50",
  "Heineken:4.00",
];

/* FUNCTIONS AND CONSTRUCTORS */

/* loop that appends children from an arr to location */
function appendChildren(arr, location) {
  for ( let i = 0; i < arr.length; i++ ) {
    location.appendChild(arr[i]);
  }
}
/* Table element and caption constructor */
function tableConstruction (captionText, container) {
  this.captionText = captionText;
  this.container = container;
}

tableConstruction.prototype.createTableElement = function () {
  const table = document.createElement("table");
  const caption = document.createElement("caption");
  caption.textContent = this.captionText;
  table.appendChild(caption);
  this.container.appendChild(table);
  return table;
}

/* constructor that creates a td element or th element for the menu */
function menuItemConstructor(name, price, table) {
  this.name = name;
  this.price = price;
  this.table = table;
}

menuItemConstructor.prototype.createItemRow = function () {
  let tableRow = document.createElement("tr");
  let itemCell = document.createElement("td");
  itemCell.textContent = this.name;
  tableRow.appendChild(itemCell);
  let itemPriceCell = document.createElement("td");
  itemPriceCell.textContent = this.price;
  itemPriceCell.setAttribute("style", "text-align: right");
  tableRow.appendChild(itemPriceCell);
  this.table.appendChild(tableRow);
};

menuItemConstructor.prototype.createHeaderRow = function () {
  let tableRow = document.createElement("tr");
  let headerCell = document.createElement("th");
  headerCell.setAttribute("colspan", "2");
  headerCell.setAttribute("scope", "colgroup");
  headerCell.textContent = this.name;
  tableRow.appendChild(headerCell);
  this.table.appendChild(tableRow);
};

/* generate inside of the table based on the headingArr and food/drink arr */

function generateTable(itemArr, table) {
  loop: for (let num = 0; num < itemArr.length; num++) {
    for (let numb = 0; numb < headerArr.length; numb++) {
      if (itemArr[num] == headerArr[numb]) {
        let name = itemArr[num],
            price = "N/A";
        let item = new menuItemConstructor(name, price, table);
        item.createHeaderRow();
        continue loop;
      }
    }
    let [name, price] = itemArr[num].split(":");
    let item = new menuItemConstructor(name, price, table);
    item.createItemRow();
  }
}

function createMenuPage() {
  container.setAttribute(
    "style",
    "background-image: url(/src/menu-header.jpg); background-size: cover;"
  );
  let headingContainer = document.querySelector("#heading-container");
  headingContainer.classList.remove("hidden");
  headingContainer.setAttribute("style", "bottom: 50%");

  let heading = document.querySelector("#heading-container h1");
  heading.textContent = "Menu";
  
  let drinksTable = new tableConstruction("Beverages", drinksContainer);
  let foodTable = new tableConstruction("Dishes", foodContainer);

  appendChildren([foodContainer, drinksContainer], menuContent);
  appendChildren([menuContent, img], menuDiv);

  generateTable(drinkArr, drinksTable.createTableElement());
  generateTable(foodArr, foodTable.createTableElement());

  body.appendChild(menuDiv);
}




/***/ }),

/***/ "./src/set-up-functions.js":
/*!*********************************!*\
  !*** ./src/set-up-functions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeItems": () => (/* binding */ removeItems)
/* harmony export */ });
function removeItems() {
  const allInBodyExceptContainer = document.querySelectorAll("body :not(#container):not(#nav-container):not(a):not(#heading-container):not(#heading-container > h1)"); 
  allInBodyExceptContainer.forEach((item) => {
    item.remove();
  })
 }
 




/***/ }),

/***/ "./src/CormorantGaramond-LightItalic.ttf":
/*!***********************************************!*\
  !*** ./src/CormorantGaramond-LightItalic.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6341a06fa18687533a6.ttf";

/***/ }),

/***/ "./src/CormorantGaramond-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/CormorantGaramond-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "274cef1344d2d06fb1be.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page */ "./src/landing-page.js");
/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-page.js */ "./src/menu-page.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-page */ "./src/contact-page.js");
/* harmony import */ var _set_up_functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set-up-functions.js */ "./src/set-up-functions.js");







function setUpLinks() {
  const links = document.querySelectorAll("#nav-container a");
  links.forEach((link) => {
    switch (link.getAttribute("id")) {
        case "menu":
          link.addEventListener("click", function() {
            (0,_set_up_functions_js__WEBPACK_IMPORTED_MODULE_4__.removeItems)(); 
            (0,_menu_page_js__WEBPACK_IMPORTED_MODULE_2__.createMenuPage)()});
          break;
        case "home":
          link.addEventListener("click", function() {
            (0,_set_up_functions_js__WEBPACK_IMPORTED_MODULE_4__.removeItems)();  
            (0,_landing_page__WEBPACK_IMPORTED_MODULE_1__.createLandingPageFromLink)()});
          break;
        case "contact":
          link.addEventListener("click", function() {
            (0,_set_up_functions_js__WEBPACK_IMPORTED_MODULE_4__.removeItems)();  
            (0,_contact_page__WEBPACK_IMPORTED_MODULE_3__.createContactPage)()});
          break;         
    }
  })
}

(0,_landing_page__WEBPACK_IMPORTED_MODULE_1__.createFirstLandingPage)();
setUpLinks();

 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJJQUFrRDtBQUM5Riw0Q0FBNEMsbUpBQXNEO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esd0RBQXdELHVCQUF1QiwwR0FBMEcsR0FBRyxhQUFhLDJCQUEyQixlQUFlLEdBQUcsUUFBUSxrQkFBa0IsZUFBZSxHQUFHLGNBQWMsdUJBQXVCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixzQkFBc0IsMkJBQTJCLHVDQUF1QyxHQUFHLGFBQWEsa0JBQWtCLEdBQUcsNEVBQTRFLHVCQUF1QixrQkFBa0IsVUFBVSx5QkFBeUIsdUJBQXVCLFlBQVksYUFBYSx1QkFBdUIsR0FBRyx5QkFBeUIsdUJBQXVCLGdCQUFnQixpQkFBaUIseUJBQXlCLHVCQUF1QixHQUFHLDJCQUEyQiw0QkFBNEIsaUJBQWlCLHlCQUF5QixrQkFBa0IsR0FBRyw2QkFBNkIsdUJBQXVCLHFCQUFxQix1QkFBdUIsSUFBSSx5Q0FBeUMsb0JBQW9CLElBQUksOEJBQThCLG9CQUFvQixJQUFJLFFBQVEsb0JBQW9CLHlCQUF5QixHQUFHLE1BQU0seUJBQXlCLEdBQUcseUNBQXlDLGtCQUFrQixHQUFHLHNCQUFzQixxQkFBcUIsdUJBQXVCLG9CQUFvQixpQkFBaUIsdUJBQXVCLHFCQUFxQixHQUFHLGVBQWUsa0JBQWtCLHVCQUF1QixtQkFBbUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsWUFBWSw0QkFBNEIseUJBQXlCLG9DQUFvQyxHQUFHLG1CQUFtQix5QkFBeUIsR0FBRyw4Q0FBOEMsd0JBQXdCLEtBQUssT0FBTyxvQkFBb0IsaUJBQWlCLDJCQUEyQixzQkFBc0IsaUJBQWlCLHNCQUFzQix1QkFBdUIsT0FBTyxxQkFBcUIsZ0JBQWdCLEdBQUcsV0FBVyxvQkFBb0Isd0JBQXdCLHVCQUF1QixHQUFHLFdBQVcsZ0JBQWdCLHFCQUFxQixHQUFHLDRDQUE0QyxxQkFBcUIsd0JBQXdCLDBCQUEwQixvQkFBb0IscUNBQXFDLDBCQUEwQixXQUFXLG1CQUFtQixtQkFBbUIsbUJBQW1CLGtCQUFrQixvQkFBb0IscURBQXFELGtEQUFrRCxZQUFZLHdDQUF3Qyx5QkFBeUIsbUNBQW1DLG1CQUFtQixLQUFLLHFCQUFxQixnQ0FBZ0Msd0JBQXdCLHFCQUFxQix1REFBdUQsS0FBSyx1QkFBdUIsZ0NBQWdDLDBEQUEwRCx3QkFBd0IscUJBQXFCLGlCQUFpQix3QkFBd0IsMkJBQTJCLFdBQVcsY0FBYyxrQkFBa0Isa0JBQWtCLE1BQU0sY0FBYyx5QkFBeUIsbUJBQW1CLG1CQUFtQixLQUFLLGVBQWUsNENBQTRDLFVBQVUsc0JBQXNCLEdBQUcsWUFBWSxPQUFPLDRFQUE0RSxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLHFCQUFxQixhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsUUFBUSxPQUFPLEtBQUssS0FBSyxZQUFZLFFBQVEsdUNBQXVDLHVCQUF1Qix3RkFBd0YsR0FBRyxhQUFhLDJCQUEyQixlQUFlLEdBQUcsUUFBUSxrQkFBa0IsZUFBZSxHQUFHLGNBQWMsdUJBQXVCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixzQkFBc0IsMkJBQTJCLHVDQUF1QyxHQUFHLGFBQWEsa0JBQWtCLEdBQUcsNEVBQTRFLHVCQUF1QixrQkFBa0IsVUFBVSx5QkFBeUIsdUJBQXVCLFlBQVksYUFBYSx1QkFBdUIsR0FBRyx5QkFBeUIsdUJBQXVCLGdCQUFnQixpQkFBaUIseUJBQXlCLHVCQUF1QixHQUFHLDJCQUEyQiw0QkFBNEIsaUJBQWlCLHlCQUF5QixrQkFBa0IsR0FBRyw2QkFBNkIsdUJBQXVCLHFCQUFxQix1QkFBdUIsSUFBSSx5Q0FBeUMsb0JBQW9CLElBQUksOEJBQThCLG9CQUFvQixJQUFJLFFBQVEsb0JBQW9CLHlCQUF5QixHQUFHLE1BQU0seUJBQXlCLEdBQUcseUNBQXlDLGtCQUFrQixHQUFHLHNCQUFzQixxQkFBcUIsdUJBQXVCLG9CQUFvQixpQkFBaUIsdUJBQXVCLHFCQUFxQixHQUFHLGVBQWUsa0JBQWtCLHVCQUF1QixtQkFBbUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsWUFBWSw0QkFBNEIseUJBQXlCLG9DQUFvQyxHQUFHLG1CQUFtQix5QkFBeUIsR0FBRyw4Q0FBOEMsd0JBQXdCLEtBQUssT0FBTyxvQkFBb0IsaUJBQWlCLDJCQUEyQixzQkFBc0IsaUJBQWlCLHNCQUFzQix1QkFBdUIsT0FBTyxxQkFBcUIsZ0JBQWdCLEdBQUcsV0FBVyxvQkFBb0Isd0JBQXdCLHVCQUF1QixHQUFHLFdBQVcsZ0JBQWdCLHFCQUFxQixHQUFHLDRDQUE0QyxxQkFBcUIsd0JBQXdCLDBCQUEwQixvQkFBb0IscUNBQXFDLDBCQUEwQixXQUFXLG1CQUFtQixtQkFBbUIsbUJBQW1CLGtCQUFrQixvQkFBb0IscURBQXFELGtEQUFrRCxZQUFZLHdDQUF3Qyx5QkFBeUIsbUNBQW1DLG1CQUFtQixLQUFLLHFCQUFxQixnQ0FBZ0Msd0JBQXdCLHFCQUFxQix1REFBdUQsS0FBSyx1QkFBdUIsZ0NBQWdDLDBEQUEwRCx3QkFBd0IscUJBQXFCLGlCQUFpQix3QkFBd0IsMkJBQTJCLFdBQVcsY0FBYyxrQkFBa0Isa0JBQWtCLE1BQU0sY0FBYyx5QkFBeUIsbUJBQW1CLG1CQUFtQixLQUFLLGVBQWUsNENBQTRDLFVBQVUsc0JBQXNCLEdBQUcsWUFBWSxtQkFBbUI7QUFDdnRRO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRix3QkFBd0I7QUFDekc7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLCtFQUErRSx1QkFBdUI7O0FBRXRHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLCtFQUErRSx1QkFBdUI7QUFDdEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBCQUEwQixzQkFBc0I7QUFDaEQsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsdUJBQXVCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRTBCOzs7Ozs7Ozs7Ozs7Ozs7QUM1SjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDcUI7QUFDOEQ7QUFDcEM7QUFDSTtBQUNGOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUFXO0FBQ3ZCLFlBQVksNkRBQWMsR0FBRztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUFXO0FBQ3ZCLFlBQVksd0VBQXlCLEdBQUc7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBVztBQUN2QixZQUFZLGdFQUFpQixHQUFHO0FBQ2hDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEscUVBQXNCO0FBQ3RCOztBQUVBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC1wYWdlLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbGFuZGluZy1wYWdlLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc2V0LXVwLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQ29ybW9yYW50R2FyYW1vbmQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0Nvcm1vcmFudEdhcmFtb25kLUxpZ2h0SXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBjb3JtbztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuXFxuLnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMCU7XFxufVxcbmJvZHkge1xcbiAgcGFkZGluZzogMHB4OyBcXG4gIG1hcmdpbjogMCU7XFxufVxcbiNjb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBjZW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSEVBRElORyBDT05UQUlORVIgKi9cXG5cXG4jaGVhZGluZy1jb250YWluZXIsICNjb250YWN0LWluZm8tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMzAlOyAgLyogMzAwcHg7ICovXFxuICBtYXJnaW4tbGVmdDogIGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNoZWFkaW5nLWNvbnRhaW5lciAqe1xcbiAgZm9udC1mYW1pbHk6IGNvcm1vO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2NvbnRhY3QtaW5mby1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBib3JkZXItcmFkaXVzOiA2NXB4IDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxufVxcbiAjY29udGFjdC1pbmZvLWNvbnRhaW5lciAqe1xcbiAgZm9udC1mYW1pbHk6IGNvcm1vO1xcbiAgbWFyZ2luOiAyMHB4IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gfVxcbiAjY29udGFjdC1pbmZvLWNvbnRhaW5lciA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiB9XFxuICNjb250YWN0LWluZm8tY29udGFpbmVyIHAge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiB9XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcbmg1IHtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4vKiBOQVYgQ09OVEFJTkVSICovXFxuI25hdi1jb250YWluZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI25hdi1jb250YWluZXIgYSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGNvcm1vO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiA1cHggMTVweDtcXG59XFxuXFxuYTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgYm90dG9tOiAtNXB4O1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG5hOmhvdmVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi8qbWVudSBjb250YWluZXIgKi9cXG5cXG4jbWVudS1jb250YWluZXIgKiB7XFxuICBmb250LWZhbWlseTogY29ybW87IFxcblxcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDEwMHZ3IFxcbn1cXG4jbWVudS1jb250ZW50IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmctbGVmdDogMjAlO1xcbiAgcGFkZGluZy1yaWdodDogMjAlO1xcbiAgXFxufVxcbiNkcmlua3MtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5jYXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAyNXB4IDBweDtcXG59XFxuXFxuQG1lZGlhICBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgI21lbnUtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMDBweCAwcHg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgXFxuICB9XFxuICAjbWVudS1jb250ZW50IHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDUwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDUwcHgpO1xcbiAgICBcXG4gIH0gXFxuICAjZm9vZC1jb250YWluZXIsICNkcmlua3MtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHggMHB4IDUwcHggO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxuICAjZm9vZC1jb250YWluZXIge1xcbiAgICBib3JkZXI6ICM2NTI0MjIgNXB4IHNvbGlkO1xcbiAgICBncmlkLWNvbHVtbjogMS8xMTtcXG4gICAgZ3JpZC1yb3c6IDEvMTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDkyJSA4JSA4OSUgMTElIC8gMTQlIDg3JSAxMyUgODYlIDtcXG4gIH1cXG4gICNkcmlua3MtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiA1cHggIzI1MkMzNiBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTQlIDg2JSAxNCUgODYlIC8gOTAlIDE3JSA4MyUgMTAlICAgO1xcbiAgICBncmlkLWNvbHVtbjogNC8tMTtcXG4gICAgZ3JpZC1yb3c6IDkvMTk7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgXFxuICB9XFxuIFxcbiAgdGFibGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICB9IFxcbiBcXG4gICAgaW1nIHtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogNTYwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gICAgXFxuXFxuICBcXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNTAwcHgpIHtcXG4gIGJvZHkge1xcbiAgcGFkZGluZzogMCAgMTUwcHg7XFxufVxcbiAgXFxuICBcXG59IFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFGQUFtRjtBQUNyRjs7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLHNCQUFzQjs7QUFFdEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxHQUFHLFdBQVc7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZjtDQUNDO0VBQ0Msa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0Usa0JBQWtCOztBQUVwQjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1COztFQUVyQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhDQUE4QztJQUM5QywyQ0FBMkM7O0VBRTdDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0RBQWdEO0VBQ2xEO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsbURBQW1EO0lBQ25ELGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixvQkFBb0I7O0VBRXRCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYjs7SUFFRTtJQUNBLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtFQUNkOzs7O0FBSUY7OztBQUdBO0VBQ0U7RUFDQSxpQkFBaUI7QUFDbkI7OztBQUdBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGNvcm1vO1xcbiAgc3JjOiB1cmwoLi9Db3Jtb3JhbnRHYXJhbW9uZC1SZWd1bGFyLnR0ZiksIHVybCguL0Nvcm1vcmFudEdhcmFtb25kLUxpZ2h0SXRhbGljLnR0Zik7XFxufVxcblxcblxcbi5yb290IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDAlO1xcbn1cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDBweDsgXFxuICBtYXJnaW46IDAlO1xcbn1cXG4jY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEhFQURJTkcgQ09OVEFJTkVSICovXFxuXFxuI2hlYWRpbmctY29udGFpbmVyLCAjY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDMwJTsgIC8qIDMwMHB4OyAqL1xcbiAgbWFyZ2luLWxlZnQ6ICBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jaGVhZGluZy1jb250YWluZXIgKntcXG4gIGZvbnQtZmFtaWx5OiBjb3JtbztcXG4gIG1hcmdpbjogMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNjb250YWN0LWluZm8tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgYm9yZGVyLXJhZGl1czogNjVweCA7XFxuICBwYWRkaW5nOiAyNXB4O1xcbn1cXG4gI2NvbnRhY3QtaW5mby1jb250YWluZXIgKntcXG4gIGZvbnQtZmFtaWx5OiBjb3JtbztcXG4gIG1hcmdpbjogMjBweCAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIH1cXG4gI2NvbnRhY3QtaW5mby1jb250YWluZXIgOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gfVxcbiAjY29udGFjdC1pbmZvLWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gfVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5oNSB7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuXFxuLyogTkFWIENPTlRBSU5FUiAqL1xcbiNuYXYtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNuYXYtY29udGFpbmVyIGEge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBjb3JtbztcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogNXB4IDE1cHg7XFxufVxcblxcbmE6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJvdHRvbTogLTVweDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG59XFxuYTpob3Zlcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG4vKm1lbnUgY29udGFpbmVyICovXFxuXFxuI21lbnUtY29udGFpbmVyICoge1xcbiAgZm9udC1mYW1pbHk6IGNvcm1vOyBcXG5cXG59XFxuaW1nIHtcXG4gIHdpZHRoOiAxMDB2dyBcXG59XFxuI21lbnUtY29udGVudCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICB3aWR0aDogMTAwdnc7XFxuICBwYWRkaW5nLWxlZnQ6IDIwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwJTtcXG4gIFxcbn1cXG4jZHJpbmtzLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuY2FwdGlvbiB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG50YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjVweCAwcHg7XFxufVxcblxcbkBtZWRpYSAgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICNtZW51LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMTAwcHggMHB4O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIFxcbiAgfVxcbiAgI21lbnUtY29udGVudCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCA1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCA1MHB4KTtcXG4gICAgXFxuICB9IFxcbiAgI2Zvb2QtY29udGFpbmVyLCAjZHJpbmtzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMTVweCA1MHB4IDBweCA1MHB4IDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbiAgI2Zvb2QtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAjNjUyNDIyIDVweCBzb2xpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTE7XFxuICAgIGdyaWQtcm93OiAxLzEwO1xcbiAgICBib3JkZXItcmFkaXVzOiA5MiUgOCUgODklIDExJSAvIDE0JSA4NyUgMTMlIDg2JSA7XFxuICB9XFxuICAjZHJpbmtzLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogNXB4ICMyNTJDMzYgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE0JSA4NiUgMTQlIDg2JSAvIDkwJSAxNyUgODMlIDEwJSAgIDtcXG4gICAgZ3JpZC1jb2x1bW46IDQvLTE7XFxuICAgIGdyaWQtcm93OiA5LzE5O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIFxcbiAgfVxcbiBcXG4gIHRhYmxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgfSBcXG4gXFxuICAgIGltZyB7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDU2MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICAgIFxcblxcbiAgXFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTUwMHB4KSB7XFxuICBib2R5IHtcXG4gIHBhZGRpbmc6IDAgIDE1MHB4O1xcbn1cXG4gIFxcbiAgXFxufSBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5mdW5jdGlvbiBjcmVhdGVEaXYoaWRTdHJpbmcpIHtcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZFN0cmluZyk7XG4gIHJldHVybiBkaXY7XG59XG5cbmxldCBhZGRyZXNzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5hZGRyZXNzSGVhZGluZy50ZXh0Q29udGVudCA9IFwiQWRkcmVzc1wiO1xubGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmFkZHJlc3MudGV4dENvbnRlbnQ9IFwiQWFsbWFya3QgMzAxMSxcXG4gMjMxMSBFQyBMZWlkZW5cIjtcblxuXG5sZXQgY29udGFjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5jb250YWN0SGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuXG5sZXQgY29udGFjdFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb250YWN0UGhvbmUudGV4dENvbnRlbnQgPSBcIis2NjYgNjY2IDY2NlwiXG5sZXQgY29udGFjdE1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnRhY3RNYWlsLnRleHRDb250ZW50ID0gXCJmYWtlZW1haWxAZ21haWwuY29tXCJcblxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4oYXJyLCBsb2NhdGlvbikge1xuICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKysgKSB7XG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoYXJyW2ldKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RQYWdlKCkge1xuXG4gIGxldCBoZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkaW5nLWNvbnRhaW5lclwiKTtcbiAgaGVhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBsZXQgY29udGFjdENvbnRhaW5lciA9IGNyZWF0ZURpdihcImNvbnRhY3QtaW5mby1jb250YWluZXJcIik7XG4gIGNvbnRhY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3R0b206IDM1JVwiKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIilcbiAgY29udGFpbmVyXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2NvbnRhY3Qtc2lkZS5qcGcpOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXJcIilcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuICBhcHBlbmRDaGlsZHJlbihbYWRkcmVzc0hlYWRpbmcsIGFkZHJlc3MsIGNvbnRhY3RIZWFkaW5nLCBjb250YWN0UGhvbmUsIGNvbnRhY3RNYWlsXSwgY29udGFjdENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlIH07IiwiZnVuY3Rpb24gY3JlYXRlRGl2KGlkU3RyaW5nKSB7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWRTdHJpbmcpO1xuICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rKGlkU3RyaW5nKSB7XG4gIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxpbmsuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWRTdHJpbmcpO1xuICBsaW5rLnRleHRDb250ZW50ID0gaWRTdHJpbmc7XG4gIHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rcygpIHtcbiAgY29uc3QgbmFtZUFyciA9IFtcImhvbWVcIiwgXCJtZW51XCIsIFwiY29udGFjdFwiXTtcbiAgY29uc3QgbGlua0FyciA9IFtdO1xuICBmb3IgKGxldCBudW0gPSAwOyBudW0gPCBuYW1lQXJyLmxlbmd0aDsgbnVtKyspIHtcbiAgICBsaW5rQXJyLnB1c2goY3JlYXRlTGluayhuYW1lQXJyW251bV0pKTtcbiAgfVxuICByZXR1cm4gbGlua0Fycjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBsZXQgbmF2Q29udGFpbmVyID0gY3JlYXRlRGl2KFwibmF2LWNvbnRhaW5lclwiKTtcbiAgbGV0IGxpbmtBcnIgPSBjcmVhdGVMaW5rcygpO1xuICBmb3IgKGxldCBpdGVtIG9mIGxpbmtBcnIpIHtcbiAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH1cbiAgcmV0dXJuIG5hdkNvbnRhaW5lcjtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkaW5ncyhoZWFkaW5nVHh0LCBzdWJoZWFkaW5nVHh0LCBjb250YWluZXIpIHtcbiAgaWYoaGVhZGluZ1R4dCAhPT0gXCJcIikge1xuICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IGhlYWRpbmdUeHQ7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgfVxuICBpZiAoc3ViaGVhZGluZ1R4dCAhPT0gXCJcIikge1xuICBsZXQgc3ViaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgc3ViaGVhZGluZy50ZXh0Q29udGVudCA9IHN1YmhlYWRpbmdUeHQ7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJoZWFkaW5nKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUZpcnN0TGFuZGluZ1BhZ2UoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9yZXN0YXVyYW50LmpwZyk7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7XCIpXG5cbiAgbGV0IGhlYWRpbmdDb250YWluZXIgPSBjcmVhdGVEaXYoXCJoZWFkaW5nLWNvbnRhaW5lclwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmdDb250YWluZXIpO1xuXG4gIGNyZWF0ZUhlYWRpbmdzKFwiVGFxdWVyaWEgZGUgTWl0c3VcIixcbiAgXCJUaGUgbW9zdCBkZWxpY2lvdXMgdGFjb3Mgb24gdGhpcyBzaWRlIG9mIHRoZSBBdGxhbnRpY1wiLCBoZWFkaW5nQ29udGFpbmVyKTtcbiBcbiAgbGV0IG5hdkNvbnRhaW5lciA9IGNyZWF0ZU5hdigpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2Q29udGFpbmVyKTtcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUxhbmRpbmdQYWdlRnJvbUxpbmsoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL3Jlc3RhdXJhbnQuanBnKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcIilcbiAgXG4gIGxldCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkaW5nLWNvbnRhaW5lciA+IGgxXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUYXF1ZXJpYSBkZSBNaXRzdVwiO1xuXG4gIGxldCBoZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkaW5nLWNvbnRhaW5lclwiKTtcbiAgaGVhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBoZWFkaW5nQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm90dG9tOiAzMCVcIilcbiAgY3JlYXRlSGVhZGluZ3MoXCJcIixcbiAgXCJUaGUgbW9zdCBkZWxpY2lvdXMgdGFjb3Mgb24gdGhpcyBzaWRlIG9mIHRoZSBBdGxhbnRpY1wiLFxuICBoZWFkaW5nQ29udGFpbmVyKTtcbiAgXG59XG4gXG5leHBvcnQgeyBjcmVhdGVGaXJzdExhbmRpbmdQYWdlLCBjcmVhdGVMYW5kaW5nUGFnZUZyb21MaW5rIH07XG4iLCJcblxuLyogTUVOVSBTRUNUSU9OICovXG5mdW5jdGlvbiBjcmVhdGVEaXYoaWRTdHJpbmcpIHtcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZFN0cmluZyk7XG4gIHJldHVybiBkaXY7XG59XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcbmxldCBtZW51RGl2ID0gY3JlYXRlRGl2KFwibWVudS1jb250YWluZXJcIik7XG5cbi8qIG1lbnUgY29udGVudCBzZWN0aW9uICovXG5sZXQgbWVudUNvbnRlbnQgPSBjcmVhdGVEaXYoXCJtZW51LWNvbnRlbnRcIik7XG5sZXQgZm9vZENvbnRhaW5lciA9IGNyZWF0ZURpdihcImZvb2QtY29udGFpbmVyXCIpO1xubGV0IGRyaW5rc0NvbnRhaW5lciA9IGNyZWF0ZURpdihcImRyaW5rcy1jb250YWluZXJcIik7XG5cbi8qIG1lbnUgaW1hZ2Ugc2VjdGlvbiAqL1xubGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5pbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiL3NyYy9tZW51LXNpZGUuanBnXCIpO1xuaW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImltYWdlIG9mIGEgVGFjb1wiKTtcblxuLyogYXBwZW5kaW5nIGNoaWxkcmVuICovXG5hcHBlbmRDaGlsZHJlbihbZm9vZENvbnRhaW5lciwgZHJpbmtzQ29udGFpbmVyXSwgbWVudUNvbnRlbnQpO1xuYXBwZW5kQ2hpbGRyZW4oW21lbnVDb250ZW50LCBpbWddLCBtZW51RGl2KTtcblxuLyogVGFibGUgZGF0YSBhbmQgaGVhZGVycyBhcnIqL1xuY29uc3QgaGVhZGVyQXJyID0gW1wiV0FSTSBEUklOS1NcIiwgXCJDT0NLVEFJTFNcIiwgXCJDRVJWRVpBU1wiLCBcIkxVTkNIXCIsIFwiRElOTkVSXCJdO1xuY29uc3QgZm9vZEFyciA9IFtcbiAgXCJMVU5DSFwiLFxuICBcIkJhcmJhY29hIFNhbGFkOjEzLjQ1XCIsXG4gIFwiR3JpbGxlZCBDaGlja2VuIFNhbGFkOjExLjUwXCIsXG4gIFwiQ2Fybml0YXMgVGFjb3M6IDEwLjUwXCIsXG4gIFwiVmVnZ2llIFRhY29zOjk6NTBcIixcbiAgXCJESU5ORVJcIixcbiAgXCJDYXJuZSBBc2FkYSBUYWNvczoxNS4wMFwiLFxuICBcIlRhY29zIGFsIFBhc3RvcjoxNi4wMFwiLFxuICBcIlRhY29zIGRlIFBlc2NhZG86MTYuMDBcIixcbiAgXCJDYW1wZWNoYW5vczogMTUuMDBcIixcbiAgXCJUYWNvcyBkZSBCaXJyYTogMTUuNTBcIixcbiAgXCJUYWNvcyBkZSBWZWdnaWU6IDEzLjAwXCIsXG4gIFwiVmVnZXRhYmxlIEJ1cnJpdG86IDE2LjAwXCIsXG4gIFwiQ2hpbGkgY29uIENhcm5lIEJ1cnJpdG86IDE3LjAwXCIsXG5dO1xuY29uc3QgZHJpbmtBcnIgPSBbXG4gIFwiV0FSTSBEUklOS1NcIixcbiAgXCJDb2ZmZWU6Mi41MFwiLFxuICBcIkVzcHJlc3NvOjQuNTBcIixcbiAgXCJUZWE6MS41MFwiLFxuICBcIk1pbnQgVGVhOjQuMDBcIixcbiAgXCJDT0NLVEFJTFNcIixcbiAgXCJNb2ppdG86Ny41MFwiLFxuICBcIkF6dGVjIE11bGU6OC4wMFwiLFxuICBcIlRoZSBEci4gS29penVtaToxMC4wMFwiLFxuICBcIkN1YmEgTGlicmU6OC41MFwiLFxuICBcIkNFUlZFWkFTXCIsXG4gIFwiUmVkIFN0cmlwZTo1LjAwXCIsXG4gIFwiQ29yb25hICh0aGUgZ29vZCBraW5kKTo0LjUwXCIsXG4gIFwiSGVpbmVrZW46NC4wMFwiLFxuXTtcblxuLyogRlVOQ1RJT05TIEFORCBDT05TVFJVQ1RPUlMgKi9cblxuLyogbG9vcCB0aGF0IGFwcGVuZHMgY2hpbGRyZW4gZnJvbSBhbiBhcnIgdG8gbG9jYXRpb24gKi9cbmZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKGFyciwgbG9jYXRpb24pIHtcbiAgZm9yICggbGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrICkge1xuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGFycltpXSk7XG4gIH1cbn1cbi8qIFRhYmxlIGVsZW1lbnQgYW5kIGNhcHRpb24gY29uc3RydWN0b3IgKi9cbmZ1bmN0aW9uIHRhYmxlQ29uc3RydWN0aW9uIChjYXB0aW9uVGV4dCwgY29udGFpbmVyKSB7XG4gIHRoaXMuY2FwdGlvblRleHQgPSBjYXB0aW9uVGV4dDtcbiAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG59XG5cbnRhYmxlQ29uc3RydWN0aW9uLnByb3RvdHlwZS5jcmVhdGVUYWJsZUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICBjb25zdCBjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhcHRpb25cIik7XG4gIGNhcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLmNhcHRpb25UZXh0O1xuICB0YWJsZS5hcHBlbmRDaGlsZChjYXB0aW9uKTtcbiAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGUpO1xuICByZXR1cm4gdGFibGU7XG59XG5cbi8qIGNvbnN0cnVjdG9yIHRoYXQgY3JlYXRlcyBhIHRkIGVsZW1lbnQgb3IgdGggZWxlbWVudCBmb3IgdGhlIG1lbnUgKi9cbmZ1bmN0aW9uIG1lbnVJdGVtQ29uc3RydWN0b3IobmFtZSwgcHJpY2UsIHRhYmxlKSB7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgdGhpcy50YWJsZSA9IHRhYmxlO1xufVxuXG5tZW51SXRlbUNvbnN0cnVjdG9yLnByb3RvdHlwZS5jcmVhdGVJdGVtUm93ID0gZnVuY3Rpb24gKCkge1xuICBsZXQgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIGxldCBpdGVtQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgaXRlbUNlbGwudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKGl0ZW1DZWxsKTtcbiAgbGV0IGl0ZW1QcmljZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gIGl0ZW1QcmljZUNlbGwudGV4dENvbnRlbnQgPSB0aGlzLnByaWNlO1xuICBpdGVtUHJpY2VDZWxsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidGV4dC1hbGlnbjogcmlnaHRcIik7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKGl0ZW1QcmljZUNlbGwpO1xuICB0aGlzLnRhYmxlLmFwcGVuZENoaWxkKHRhYmxlUm93KTtcbn07XG5cbm1lbnVJdGVtQ29uc3RydWN0b3IucHJvdG90eXBlLmNyZWF0ZUhlYWRlclJvdyA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICBsZXQgaGVhZGVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgaGVhZGVyQ2VsbC5zZXRBdHRyaWJ1dGUoXCJjb2xzcGFuXCIsIFwiMlwiKTtcbiAgaGVhZGVyQ2VsbC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcImNvbGdyb3VwXCIpO1xuICBoZWFkZXJDZWxsLnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZChoZWFkZXJDZWxsKTtcbiAgdGhpcy50YWJsZS5hcHBlbmRDaGlsZCh0YWJsZVJvdyk7XG59O1xuXG4vKiBnZW5lcmF0ZSBpbnNpZGUgb2YgdGhlIHRhYmxlIGJhc2VkIG9uIHRoZSBoZWFkaW5nQXJyIGFuZCBmb29kL2RyaW5rIGFyciAqL1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYmxlKGl0ZW1BcnIsIHRhYmxlKSB7XG4gIGxvb3A6IGZvciAobGV0IG51bSA9IDA7IG51bSA8IGl0ZW1BcnIubGVuZ3RoOyBudW0rKykge1xuICAgIGZvciAobGV0IG51bWIgPSAwOyBudW1iIDwgaGVhZGVyQXJyLmxlbmd0aDsgbnVtYisrKSB7XG4gICAgICBpZiAoaXRlbUFycltudW1dID09IGhlYWRlckFycltudW1iXSkge1xuICAgICAgICBsZXQgbmFtZSA9IGl0ZW1BcnJbbnVtXSxcbiAgICAgICAgICAgIHByaWNlID0gXCJOL0FcIjtcbiAgICAgICAgbGV0IGl0ZW0gPSBuZXcgbWVudUl0ZW1Db25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgdGFibGUpO1xuICAgICAgICBpdGVtLmNyZWF0ZUhlYWRlclJvdygpO1xuICAgICAgICBjb250aW51ZSBsb29wO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgW25hbWUsIHByaWNlXSA9IGl0ZW1BcnJbbnVtXS5zcGxpdChcIjpcIik7XG4gICAgbGV0IGl0ZW0gPSBuZXcgbWVudUl0ZW1Db25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgdGFibGUpO1xuICAgIGl0ZW0uY3JlYXRlSXRlbVJvdygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgIFwic3R5bGVcIixcbiAgICBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL21lbnUtaGVhZGVyLmpwZyk7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7XCJcbiAgKTtcbiAgbGV0IGhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRpbmctY29udGFpbmVyXCIpO1xuICBoZWFkaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIGhlYWRpbmdDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3R0b206IDUwJVwiKTtcblxuICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGluZy1jb250YWluZXIgaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgXG4gIGxldCBkcmlua3NUYWJsZSA9IG5ldyB0YWJsZUNvbnN0cnVjdGlvbihcIkJldmVyYWdlc1wiLCBkcmlua3NDb250YWluZXIpO1xuICBsZXQgZm9vZFRhYmxlID0gbmV3IHRhYmxlQ29uc3RydWN0aW9uKFwiRGlzaGVzXCIsIGZvb2RDb250YWluZXIpO1xuXG4gIGFwcGVuZENoaWxkcmVuKFtmb29kQ29udGFpbmVyLCBkcmlua3NDb250YWluZXJdLCBtZW51Q29udGVudCk7XG4gIGFwcGVuZENoaWxkcmVuKFttZW51Q29udGVudCwgaW1nXSwgbWVudURpdik7XG5cbiAgZ2VuZXJhdGVUYWJsZShkcmlua0FyciwgZHJpbmtzVGFibGUuY3JlYXRlVGFibGVFbGVtZW50KCkpO1xuICBnZW5lcmF0ZVRhYmxlKGZvb2RBcnIsIGZvb2RUYWJsZS5jcmVhdGVUYWJsZUVsZW1lbnQoKSk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChtZW51RGl2KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWVudVBhZ2UgfTtcbiIsImZ1bmN0aW9uIHJlbW92ZUl0ZW1zKCkge1xuICBjb25zdCBhbGxJbkJvZHlFeGNlcHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYm9keSA6bm90KCNjb250YWluZXIpOm5vdCgjbmF2LWNvbnRhaW5lcik6bm90KGEpOm5vdCgjaGVhZGluZy1jb250YWluZXIpOm5vdCgjaGVhZGluZy1jb250YWluZXIgPiBoMSlcIik7IFxuICBhbGxJbkJvZHlFeGNlcHRDb250YWluZXIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0ucmVtb3ZlKCk7XG4gIH0pXG4gfVxuIGV4cG9ydCB7cmVtb3ZlSXRlbXN9XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUZpcnN0TGFuZGluZ1BhZ2UsIGNyZWF0ZUxhbmRpbmdQYWdlRnJvbUxpbmsgfSBmcm9tIFwiLi9sYW5kaW5nLXBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlfSBmcm9tIFwiLi9tZW51LXBhZ2UuanNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdC1wYWdlXCI7XG5pbXBvcnQge3JlbW92ZUl0ZW1zfSBmcm9tIFwiLi9zZXQtdXAtZnVuY3Rpb25zLmpzXCJcblxuZnVuY3Rpb24gc2V0VXBMaW5rcygpIHtcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI25hdi1jb250YWluZXIgYVwiKTtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIHN3aXRjaCAobGluay5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkge1xuICAgICAgICBjYXNlIFwibWVudVwiOlxuICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVtb3ZlSXRlbXMoKTsgXG4gICAgICAgICAgICBjcmVhdGVNZW51UGFnZSgpfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVJdGVtcygpOyAgXG4gICAgICAgICAgICBjcmVhdGVMYW5kaW5nUGFnZUZyb21MaW5rKCl9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNvbnRhY3RcIjpcbiAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlbW92ZUl0ZW1zKCk7ICBcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRhY3RQYWdlKCl9KTtcbiAgICAgICAgICBicmVhazsgICAgICAgICBcbiAgICB9XG4gIH0pXG59XG5cbmNyZWF0ZUZpcnN0TGFuZGluZ1BhZ2UoKTtcbnNldFVwTGlua3MoKTtcblxuICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
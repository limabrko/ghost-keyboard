/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/IME/english.ts":
/*!****************************!*\
  !*** ./src/IME/english.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ENGLISH = {\n    id: 'en',\n    compose: function (text) {\n        return text;\n    },\n    decompose: function (text) {\n        return text;\n    },\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ENGLISH);\n\n\n//# sourceURL=webpack:///./src/IME/english.ts?");

/***/ }),

/***/ "./src/IME/index.ts":
/*!**************************!*\
  !*** ./src/IME/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _english__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./english */ \"./src/IME/english.ts\");\n/* harmony import */ var _korean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./korean */ \"./src/IME/korean.ts\");\n\n\nvar IME_LIST = {\n    en: _english__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ko: _korean__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nvar IME = /** @class */ (function () {\n    function IME(lang) {\n        if (!IME_LIST[lang]) {\n            throw new Error('IME Language not found.');\n        }\n        this.lang = lang;\n        this.composer = IME_LIST[lang];\n    }\n    return IME;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (IME);\n\n\n//# sourceURL=webpack:///./src/IME/index.ts?");

/***/ }),

/***/ "./src/IME/korean.ts":
/*!***************************!*\
  !*** ./src/IME/korean.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar UNICODE_DATA = {\n    initial: [12593, 12594, 12596, 12599, 12600, 12601, 12609, 12610, 12611, 12613, 12614, 12615, 12616, 12617, 12618, 12619, 12620, 12621, 12622],\n    finale: [0, 12593, 12594, 12595, 12596, 12597, 12598, 12599, 12601, 12602, 12603, 12604, 12605, 12606, 12607, 12608, 12609, 12610, 12612, 12613, 12614, 12615, 12616, 12618, 12619, 12620, 12621, 12622],\n    dMedial: [0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 801, 820, 0, 0, 1304, 1305, 1320, 0, 0, 1820],\n    dFinale: [0, 0, 0, 119, 0, 422, 427, 0, 0, 801, 816, 817, 819, 825, 826, 827, 0, 0, 1719, 0, 0],\n    SBase: 44032,\n    VBase: 12623,\n    LCount: 19,\n    VCount: 21,\n    TCount: 28,\n    NCount: 588,\n    SCount: 11172\n    //LBase: 4352\n    //TBase: 4519\n};\nvar KOREAN = {\n    id: 'ko',\n    compose: function (text) {\n        var textLen = text.length;\n        if (textLen === 0) {\n            return \"\";\n        }\n        var initial = UNICODE_DATA.initial, finale = UNICODE_DATA.finale, VBase = UNICODE_DATA.VBase, SBase = UNICODE_DATA.SBase, VCount = UNICODE_DATA.VCount, TCount = UNICODE_DATA.TCount, NCount = UNICODE_DATA.NCount, LCount = UNICODE_DATA.LCount, dFinale = UNICODE_DATA.dFinale, dMedial = UNICODE_DATA.dMedial;\n        var firstUnicode = text.charCodeAt(0), firstChar = String.fromCharCode(firstUnicode), curUnicode, initialIndex, mergeUnicode, medialIndex, finaleIndex, dFinaleIndex, SBaseUnicode;\n        for (var i = 1; i < textLen; ++i) {\n            curUnicode = text.charCodeAt(i);\n            initialIndex = initial.indexOf(firstUnicode);\n            if (initialIndex !== -1) {\n                mergeUnicode = curUnicode - VBase;\n                if (0 <= mergeUnicode && mergeUnicode < VCount) {\n                    firstUnicode = SBase + (initialIndex * VCount + mergeUnicode) * TCount;\n                    firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);\n                    continue;\n                }\n            }\n            SBaseUnicode = firstUnicode - SBase;\n            if (0 <= SBaseUnicode && SBaseUnicode < 11145 && (SBaseUnicode % TCount) === 0) {\n                finaleIndex = finale.indexOf(curUnicode);\n                if (finaleIndex !== -1) {\n                    firstUnicode += finaleIndex;\n                    firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);\n                    continue;\n                }\n                mergeUnicode = (SBaseUnicode % NCount) / TCount;\n                medialIndex = dMedial.indexOf((mergeUnicode * 100) + (curUnicode - VBase));\n                if (medialIndex > 0) {\n                    firstUnicode += (medialIndex - mergeUnicode) * TCount;\n                    firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);\n                    continue;\n                }\n            }\n            if (0 <= SBaseUnicode && SBaseUnicode < 11172 && (SBaseUnicode % TCount) !== 0) {\n                finaleIndex = SBaseUnicode % TCount;\n                mergeUnicode = curUnicode - VBase;\n                if (0 <= mergeUnicode && mergeUnicode < VCount) {\n                    initialIndex = initial.indexOf(finale[finaleIndex]);\n                    if (0 <= initialIndex && initialIndex < LCount) {\n                        firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode - finaleIndex);\n                        firstUnicode = SBase + (initialIndex * VCount + mergeUnicode) * TCount;\n                        firstChar = firstChar + String.fromCharCode(firstUnicode);\n                        continue;\n                    }\n                    if (finaleIndex < dFinale.length && dFinale[finaleIndex] !== 0) {\n                        firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode - finaleIndex + Math.floor(dFinale[finaleIndex] / 100));\n                        firstUnicode = SBase + (initial.indexOf(finale[(dFinale[finaleIndex] % 100)]) * VCount + mergeUnicode) * TCount;\n                        firstChar = firstChar + String.fromCharCode(firstUnicode);\n                        continue;\n                    }\n                }\n                dFinaleIndex = dFinale.indexOf((finaleIndex * 100) + finale.indexOf(curUnicode));\n                if (dFinaleIndex > 0) {\n                    firstUnicode = firstUnicode + dFinaleIndex - finaleIndex;\n                    firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);\n                    continue;\n                }\n            }\n            firstUnicode = curUnicode;\n            firstChar = firstChar + String.fromCharCode(curUnicode);\n        }\n        return firstChar;\n    },\n    /**\n     * Decompose a korean char\n     * @param {String} text\n     * @returns {string}\n     */\n    decompose: function (text) {\n        var initial = UNICODE_DATA.initial, finale = UNICODE_DATA.finale, VBase = UNICODE_DATA.VBase, SBase = UNICODE_DATA.SBase, TCount = UNICODE_DATA.TCount, NCount = UNICODE_DATA.NCount, SCount = UNICODE_DATA.SCount;\n        var len = text.length, firstChar = \"\", curUnicode, SBaseUnicode, initialUnicode, VBaseUnicode, finaleUnicode;\n        for (var b = 0; b < len; b++) {\n            curUnicode = text.charCodeAt(b);\n            SBaseUnicode = curUnicode - SBase;\n            if (SBaseUnicode < 0 || SBaseUnicode >= SCount) {\n                firstChar = firstChar + String.fromCharCode(curUnicode);\n                continue;\n            }\n            initialUnicode = initial[Math.floor(SBaseUnicode / NCount)];\n            VBaseUnicode = VBase + (SBaseUnicode % NCount) / TCount;\n            finaleUnicode = finale[SBaseUnicode % TCount];\n            firstChar = firstChar + String.fromCharCode(initialUnicode, VBaseUnicode);\n            if (finaleUnicode !== 0) {\n                firstChar = firstChar + String.fromCharCode(finaleUnicode);\n            }\n        }\n        return firstChar;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (KOREAN);\n\n\n//# sourceURL=webpack:///./src/IME/korean.ts?");

/***/ }),

/***/ "./src/components/EnvChecker.ts":
/*!**************************************!*\
  !*** ./src/components/EnvChecker.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {function EnvChecker(global, factory) {\n    if ( true && typeof module.exports === 'object') {\n        module.exports = factory();\n    }\n    else {\n        global.GhostKeyboard = factory();\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (EnvChecker);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/EnvChecker.ts?");

/***/ }),

/***/ "./src/components/GhostKeyboard.ts":
/*!*****************************************!*\
  !*** ./src/components/GhostKeyboard.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keyboard */ \"./src/components/Keyboard.ts\");\n/* harmony import */ var _IME__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../IME */ \"./src/IME/index.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\nvar defaultConfig = {\n    lang: 'en',\n    value: '',\n    caretPos: {\n        startPos: 0,\n        endPos: 0\n    }\n};\nvar GhostKeyboard = /** @class */ (function () {\n    function GhostKeyboard(config) {\n        if (config) {\n            config = __assign({}, defaultConfig, config);\n        }\n        this.lang = config.lang;\n        this.Keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.lang);\n        this.IME = new _IME__WEBPACK_IMPORTED_MODULE_1__[\"default\"](config.lang);\n        this.setInput(config.input);\n        this.value = config.value;\n        this.caretPos = {\n            startPos: config.caretPos.startPos,\n            endPos: config.caretPos.endPos\n        };\n        this.isComposing = false;\n        this.capslock = false;\n    }\n    GhostKeyboard.prototype.getCaretPos = function () {\n        return {\n            startPos: this.caretPos.startPos,\n            endPos: this.caretPos.endPos\n        };\n    };\n    GhostKeyboard.prototype.setCaretPos = function (startPos, endPos) {\n        var len = this.value.length;\n        if (startPos < 0) {\n            startPos = 0;\n        }\n        if (startPos > len) {\n            startPos = len;\n        }\n        if (endPos === undefined) {\n            endPos = startPos;\n        }\n        if (endPos > len) {\n            endPos = len;\n        }\n        this.caretPos.startPos = startPos;\n        this.caretPos.endPos = endPos;\n    };\n    GhostKeyboard.prototype.insertChar = function (char) {\n        var value = this.value, len = value.length;\n        this.value = value.substring(0, this.caretPos.startPos) + char + value.substring(this.caretPos.endPos, len);\n        this.setCaretPos(this.caretPos.startPos + char.length);\n    };\n    GhostKeyboard.prototype.removeComposing = function () {\n        var startPos = this.getCaretPos().startPos;\n        this.setCaretPos(startPos - 1, startPos);\n        return this.removeSelection();\n    };\n    GhostKeyboard.prototype.onBackspace = function () {\n        var _a = this.getCaretPos(), startPos = _a.startPos, endPos = _a.endPos;\n        if (startPos !== endPos) {\n            this.removeSelection();\n            return;\n        }\n        if (this.isComposing) {\n            var composingChar = this.removeComposing();\n            var decomposeChar = this.IME.composer.decompose(composingChar);\n            if (composingChar.length === decomposeChar.length) {\n                this.isComposing = false;\n                return;\n            }\n            this.insertChar(this.IME.composer.compose(decomposeChar.slice(0, -1)));\n            return;\n        }\n        this.setCaretPos(startPos - 1, startPos);\n        this.removeSelection();\n    };\n    GhostKeyboard.prototype.onArrow = function (code) {\n        var _a = this.getCaretPos(), startPos = _a.startPos, endPos = _a.endPos;\n        this.isComposing = false;\n        if (code === 'ArrowRight') {\n            if (startPos !== endPos) {\n                this.setCaretPos(endPos);\n            }\n            else {\n                this.setCaretPos(endPos + 1);\n            }\n        }\n        if (code === 'ArrowLeft') {\n            if (startPos !== endPos) {\n                this.setCaretPos(startPos);\n            }\n            else {\n                this.setCaretPos(startPos - 1);\n            }\n        }\n        if (code === 'ArrowUp') {\n            this.setCaretPos(0);\n        }\n        if (code === 'ArrowDown') {\n            this.setCaretPos(this.value.length);\n        }\n    };\n    GhostKeyboard.prototype.setInput = function (input) {\n        if (!input) {\n            return;\n        }\n        if (typeof input !== 'object' || !(input instanceof HTMLInputElement)) {\n            throw new Error('HTMLInputElement is required');\n        }\n        this.input = input;\n        this.input.addEventListener('keydown', this.event.bind(this));\n    };\n    GhostKeyboard.prototype.updateInput = function () {\n        if (!this.input) {\n            return;\n        }\n        this.input.value = this.value;\n        this.input.selectionStart = this.caretPos.startPos;\n        this.input.selectionEnd = this.caretPos.endPos;\n    };\n    GhostKeyboard.prototype.removeSelection = function () {\n        var _a = this.getCaretPos(), startPos = _a.startPos, endPos = _a.endPos;\n        var value = this.value;\n        var removedChars = value.slice(startPos, endPos);\n        this.value = value.slice(0, startPos) + value.slice(endPos);\n        this.setCaretPos(startPos);\n        return removedChars;\n    };\n    GhostKeyboard.prototype.executeKey = function (code, mods) {\n        switch (code) {\n            case 'Backspace':\n                this.onBackspace();\n                break;\n            case 'ArrowUp':\n            case 'ArrowRight':\n            case 'ArrowDown':\n            case 'ArrowLeft':\n                this.onArrow(code);\n                break;\n            default:\n                var charSet = this.Keyboard.getChar(code);\n                if (!charSet) {\n                    break;\n                }\n                var char = charSet.base;\n                if (!this.isComposing && charSet.compose) {\n                    this.isComposing = true;\n                }\n                if (this.isComposing && charSet.compose) {\n                    var composingChar = this.removeComposing();\n                    var composition = this.IME.composer.compose(composingChar + charSet.base);\n                    char = composition;\n                }\n                this.insertChar(char);\n        }\n        this.updateInput();\n        return this.value;\n    };\n    GhostKeyboard.prototype.event = function (event) {\n        if (typeof event !== 'object' || !event.type) {\n            throw new Error('The event have to be a KeyboardEvent.');\n        }\n        if (event.type === 'keydown') {\n            var code = this.Keyboard.getCode(event.code ? event.code : event.which);\n            return this.executeKey(code);\n        }\n    };\n    GhostKeyboard.prototype.type = function (key) {\n        var code = this.Keyboard.getCode(key);\n        return this.executeKey(code);\n    };\n    return GhostKeyboard;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (GhostKeyboard);\n\n\n//# sourceURL=webpack:///./src/components/GhostKeyboard.ts?");

/***/ }),

/***/ "./src/components/Keyboard.ts":
/*!************************************!*\
  !*** ./src/components/Keyboard.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar KEYSET_LIST = [\n    { code: \"ArrowLeft\", keyCode: 37 },\n    { code: \"ArrowUp\", keyCode: 38 },\n    { code: \"ArrowRight\", keyCode: 39 },\n    { code: \"ArrowDown\", keyCode: 40 },\n    { code: \"Backspace\", keyCode: 8 },\n    { code: \"Digit1\", keyCode: 49, ko: { base: \"1\", mod: \"!\" }, en: { base: \"1\", mod: '!' } },\n    { code: \"Digit2\", keyCode: 50, ko: { base: \"2\", mod: \"@\" }, en: { base: \"2\", mod: '@' } },\n    { code: \"Digit3\", keyCode: 51, ko: { base: \"3\", mod: \"#\" }, en: { base: \"3\", mod: '#' } },\n    { code: \"Digit4\", keyCode: 52, ko: { base: \"4\", mod: \"$\" }, en: { base: \"4\", mod: '$' } },\n    { code: \"Digit5\", keyCode: 53, ko: { base: \"5\", mod: \"%\" }, en: { base: \"5\", mod: '%' } },\n    { code: \"Digit6\", keyCode: 54, ko: { base: \"6\", mod: \"^\" }, en: { base: \"6\", mod: '^' } },\n    { code: \"Digit7\", keyCode: 55, ko: { base: \"7\", mod: \"&\" }, en: { base: \"7\", mod: '&' } },\n    { code: \"Digit8\", keyCode: 56, ko: { base: \"8\", mod: \"*\" }, en: { base: \"8\", mod: '*' } },\n    { code: \"Digit9\", keyCode: 57, ko: { base: \"9\", mod: \"(\" }, en: { base: \"9\", mod: '(' } },\n    { code: \"Digit0\", keyCode: 48, ko: { base: \"0\", mod: \")\" }, en: { base: \"0\", mod: ')' } },\n    { code: \"KeyA\", keyCode: 65, ko: { base: \"ㅁ\", mod: null, compose: true }, en: { base: \"a\", mod: 'A' } },\n    { code: \"KeyB\", keyCode: 66, ko: { base: \"ㅠ\", mod: null, compose: true }, en: { base: \"b\", mod: 'B' } },\n    { code: \"KeyC\", keyCode: 67, ko: { base: \"ㅊ\", mod: null, compose: true }, en: { base: \"c\", mod: 'C' } },\n    { code: \"KeyD\", keyCode: 68, ko: { base: \"ㅇ\", mod: null, compose: true }, en: { base: \"d\", mod: 'D' } },\n    { code: \"KeyE\", keyCode: 69, ko: { base: \"ㄷ\", mod: \"ㄸ\", compose: true }, en: { base: \"e\", mod: 'E' } },\n    { code: \"KeyF\", keyCode: 70, ko: { base: \"ㄹ\", mod: null, compose: true }, en: { base: \"f\", mod: 'F' } },\n    { code: \"KeyG\", keyCode: 71, ko: { base: \"ㅎ\", mod: null, compose: true }, en: { base: \"g\", mod: 'G' } },\n    { code: \"KeyH\", keyCode: 72, ko: { base: \"ㅗ\", mod: null, compose: true }, en: { base: \"h\", mod: 'H' } },\n    { code: \"KeyI\", keyCode: 73, ko: { base: \"ㅑ\", mod: null, compose: true }, en: { base: \"i\", mod: 'I' } },\n    { code: \"KeyJ\", keyCode: 74, ko: { base: \"ㅓ\", mod: null, compose: true }, en: { base: \"j\", mod: 'J' } },\n    { code: \"KeyK\", keyCode: 75, ko: { base: \"ㅏ\", mod: null, compose: true }, en: { base: \"k\", mod: 'K' } },\n    { code: \"KeyL\", keyCode: 76, ko: { base: \"ㅣ\", mod: null, compose: true }, en: { base: \"l\", mod: 'L' } },\n    { code: \"KeyM\", keyCode: 77, ko: { base: \"ㅡ\", mod: null, compose: true }, en: { base: \"m\", mod: 'M' } },\n    { code: \"KeyN\", keyCode: 78, ko: { base: \"ㅜ\", mod: null, compose: true }, en: { base: \"n\", mod: 'N' } },\n    { code: \"KeyO\", keyCode: 79, ko: { base: \"ㅐ\", mod: \"ㅒ\", compose: true }, en: { base: \"o\", mod: 'O' } },\n    { code: \"KeyP\", keyCode: 80, ko: { base: \"ㅔ\", mod: \"ㅖ\", compose: true }, en: { base: \"p\", mod: 'P' } },\n    { code: \"KeyQ\", keyCode: 81, ko: { base: \"ㅂ\", mod: \"ㅃ\", compose: true }, en: { base: \"q\", mod: 'q' } },\n    { code: \"KeyR\", keyCode: 82, ko: { base: \"ㄱ\", mod: \"ㄲ\", compose: true }, en: { base: \"r\", mod: 'R' } },\n    { code: \"KeyS\", keyCode: 83, ko: { base: \"ㄴ\", mod: null, compose: true }, en: { base: \"s\", mod: 'S' } },\n    { code: \"KeyT\", keyCode: 84, ko: { base: \"ㅅ\", mod: \"ㅆ\", compose: true }, en: { base: \"t\", mod: 'T' } },\n    { code: \"KeyU\", keyCode: 85, ko: { base: \"ㅕ\", mod: null, compose: true }, en: { base: \"u\", mod: 'U' } },\n    { code: \"KeyV\", keyCode: 86, ko: { base: \"ㅍ\", mod: null, compose: true }, en: { base: \"v\", mod: 'V' } },\n    { code: \"KeyW\", keyCode: 87, ko: { base: \"ㅈ\", mod: \"ㅉ\", compose: true }, en: { base: \"w\", mod: 'W' } },\n    { code: \"KeyX\", keyCode: 88, ko: { base: \"ㅌ\", mod: null, compose: true }, en: { base: \"x\", mod: 'X' } },\n    { code: \"KeyY\", keyCode: 89, ko: { base: \"ㅛ\", mod: null, compose: true }, en: { base: \"y\", mod: 'Y' } },\n    { code: \"KeyZ\", keyCode: 90, ko: { base: \"ㅋ\", mod: null, compose: true }, en: { base: \"z\", mod: 'Z' } }\n];\nfunction arrangeChars(key) {\n    var charsListArranged = {};\n    KEYSET_LIST.forEach(function (char) {\n        charsListArranged[char[key]] = char;\n    });\n    return charsListArranged;\n}\nvar KEYSET_LIST_BY_CODE = arrangeChars('code');\nvar KEYSET_LIST_BY_KEYCODE = arrangeChars('keyCode');\nvar Keyboard = /** @class */ (function () {\n    function Keyboard(lang) {\n        var hasLang = KEYSET_LIST.some(function (KeySetData) {\n            return KeySetData[lang] !== undefined;\n        });\n        if (!hasLang) {\n            throw new Error('Keyboard Language not found.');\n        }\n        this.lang = lang;\n    }\n    Keyboard.prototype.getCode = function (key) {\n        if (typeof key === 'string' && KEYSET_LIST_BY_CODE[key]) {\n            return key;\n        }\n        if (typeof key === 'number' && KEYSET_LIST_BY_KEYCODE[key]) {\n            return KEYSET_LIST_BY_KEYCODE[key].code;\n        }\n        throw new Error(\"Key \" + key + \" not found.\");\n    };\n    Keyboard.prototype.getChar = function (key) {\n        if (KEYSET_LIST_BY_CODE[key] && KEYSET_LIST_BY_CODE[key][this.lang]) {\n            return KEYSET_LIST_BY_CODE[key][this.lang];\n        }\n        return null;\n    };\n    return Keyboard;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Keyboard);\n\n\n//# sourceURL=webpack:///./src/components/Keyboard.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_EnvChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EnvChecker */ \"./src/components/EnvChecker.ts\");\n/* harmony import */ var _components_GhostKeyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/GhostKeyboard */ \"./src/components/GhostKeyboard.ts\");\n\n\n(Object(_components_EnvChecker__WEBPACK_IMPORTED_MODULE_0__[\"default\"]))(typeof window !== 'undefined' ? window : undefined, function () {\n    function createGhostKeyboard(config) {\n        return new _components_GhostKeyboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](config);\n    }\n    return createGhostKeyboard;\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });
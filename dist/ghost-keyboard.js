(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/IME/english.ts":
/*!****************************!*\
  !*** ./src/IME/english.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ENGLISH = {
    id: 'en',
    compose: function (text) {
        return text;
    },
    decompose: function (text) {
        return text;
    },
};
/* harmony default export */ __webpack_exports__["default"] = (ENGLISH);


/***/ }),

/***/ "./src/IME/index.ts":
/*!**************************!*\
  !*** ./src/IME/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _english__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./english */ "./src/IME/english.ts");
/* harmony import */ var _korean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./korean */ "./src/IME/korean.ts");


var IME_LIST = {
    en: _english__WEBPACK_IMPORTED_MODULE_0__["default"],
    ko: _korean__WEBPACK_IMPORTED_MODULE_1__["default"]
};
var IME = /** @class */ (function () {
    function IME(lang) {
        if (!IME_LIST[lang]) {
            throw new Error('IME Language not found.');
        }
        this.lang = lang;
        this.composer = IME_LIST[lang];
    }
    return IME;
}());
/* harmony default export */ __webpack_exports__["default"] = (IME);


/***/ }),

/***/ "./src/IME/korean.ts":
/*!***************************!*\
  !*** ./src/IME/korean.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var UNICODE_DATA = {
    initial: [12593, 12594, 12596, 12599, 12600, 12601, 12609, 12610, 12611, 12613, 12614, 12615, 12616, 12617, 12618, 12619, 12620, 12621, 12622],
    finale: [0, 12593, 12594, 12595, 12596, 12597, 12598, 12599, 12601, 12602, 12603, 12604, 12605, 12606, 12607, 12608, 12609, 12610, 12612, 12613, 12614, 12615, 12616, 12618, 12619, 12620, 12621, 12622],
    dMedial: [0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 801, 820, 0, 0, 1304, 1305, 1320, 0, 0, 1820],
    dFinale: [0, 0, 0, 119, 0, 422, 427, 0, 0, 801, 816, 817, 819, 825, 826, 827, 0, 0, 1719, 0, 0],
    SBase: 44032,
    VBase: 12623,
    LCount: 19,
    VCount: 21,
    TCount: 28,
    NCount: 588,
    SCount: 11172
    //LBase: 4352
    //TBase: 4519
};
var KOREAN = {
    id: 'ko',
    compose: function (text) {
        var textLen = text.length;
        if (textLen === 0) {
            return "";
        }
        var initial = UNICODE_DATA.initial, finale = UNICODE_DATA.finale, VBase = UNICODE_DATA.VBase, SBase = UNICODE_DATA.SBase, VCount = UNICODE_DATA.VCount, TCount = UNICODE_DATA.TCount, NCount = UNICODE_DATA.NCount, LCount = UNICODE_DATA.LCount, dFinale = UNICODE_DATA.dFinale, dMedial = UNICODE_DATA.dMedial;
        var firstUnicode = text.charCodeAt(0), firstChar = String.fromCharCode(firstUnicode), curUnicode, initialIndex, mergeUnicode, medialIndex, finaleIndex, dFinaleIndex, SBaseUnicode;
        for (var i = 1; i < textLen; ++i) {
            curUnicode = text.charCodeAt(i);
            initialIndex = initial.indexOf(firstUnicode);
            if (initialIndex !== -1) {
                mergeUnicode = curUnicode - VBase;
                if (0 <= mergeUnicode && mergeUnicode < VCount) {
                    firstUnicode = SBase + (initialIndex * VCount + mergeUnicode) * TCount;
                    firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
                    continue;
                }
            }
            SBaseUnicode = firstUnicode - SBase;
            if (0 <= SBaseUnicode && SBaseUnicode < 11145 && (SBaseUnicode % TCount) === 0) {
                finaleIndex = finale.indexOf(curUnicode);
                if (finaleIndex !== -1) {
                    firstUnicode += finaleIndex;
                    firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
                    continue;
                }
                mergeUnicode = (SBaseUnicode % NCount) / TCount;
                medialIndex = dMedial.indexOf((mergeUnicode * 100) + (curUnicode - VBase));
                if (medialIndex > 0) {
                    firstUnicode += (medialIndex - mergeUnicode) * TCount;
                    firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
                    continue;
                }
            }
            if (0 <= SBaseUnicode && SBaseUnicode < 11172 && (SBaseUnicode % TCount) !== 0) {
                finaleIndex = SBaseUnicode % TCount;
                mergeUnicode = curUnicode - VBase;
                if (0 <= mergeUnicode && mergeUnicode < VCount) {
                    initialIndex = initial.indexOf(finale[finaleIndex]);
                    if (0 <= initialIndex && initialIndex < LCount) {
                        firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode - finaleIndex);
                        firstUnicode = SBase + (initialIndex * VCount + mergeUnicode) * TCount;
                        firstChar = firstChar + String.fromCharCode(firstUnicode);
                        continue;
                    }
                    if (finaleIndex < dFinale.length && dFinale[finaleIndex] !== 0) {
                        firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode - finaleIndex + Math.floor(dFinale[finaleIndex] / 100));
                        firstUnicode = SBase + (initial.indexOf(finale[(dFinale[finaleIndex] % 100)]) * VCount + mergeUnicode) * TCount;
                        firstChar = firstChar + String.fromCharCode(firstUnicode);
                        continue;
                    }
                }
                dFinaleIndex = dFinale.indexOf((finaleIndex * 100) + finale.indexOf(curUnicode));
                if (dFinaleIndex > 0) {
                    firstUnicode = firstUnicode + dFinaleIndex - finaleIndex;
                    firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
                    continue;
                }
            }
            firstUnicode = curUnicode;
            firstChar = firstChar + String.fromCharCode(curUnicode);
        }
        return firstChar;
    },
    /**
     * Decompose a korean char
     * @param {String} text
     * @returns {string}
     */
    decompose: function (text) {
        var initial = UNICODE_DATA.initial, finale = UNICODE_DATA.finale, VBase = UNICODE_DATA.VBase, SBase = UNICODE_DATA.SBase, TCount = UNICODE_DATA.TCount, NCount = UNICODE_DATA.NCount, SCount = UNICODE_DATA.SCount;
        var len = text.length, firstChar = "", curUnicode, SBaseUnicode, initialUnicode, VBaseUnicode, finaleUnicode;
        for (var b = 0; b < len; b++) {
            curUnicode = text.charCodeAt(b);
            SBaseUnicode = curUnicode - SBase;
            if (SBaseUnicode < 0 || SBaseUnicode >= SCount) {
                firstChar = firstChar + String.fromCharCode(curUnicode);
                continue;
            }
            initialUnicode = initial[Math.floor(SBaseUnicode / NCount)];
            VBaseUnicode = VBase + (SBaseUnicode % NCount) / TCount;
            finaleUnicode = finale[SBaseUnicode % TCount];
            firstChar = firstChar + String.fromCharCode(initialUnicode, VBaseUnicode);
            if (finaleUnicode !== 0) {
                firstChar = firstChar + String.fromCharCode(finaleUnicode);
            }
        }
        return firstChar;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (KOREAN);


/***/ }),

/***/ "./src/components/GhostKeyboard.ts":
/*!*****************************************!*\
  !*** ./src/components/GhostKeyboard.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keyboards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../keyboards */ "./src/keyboards/index.ts");
/* harmony import */ var _keyboards_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keyboards/codes */ "./src/keyboards/codes.ts");
/* harmony import */ var _IME__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IME */ "./src/IME/index.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var defaultConfig = {
    lang: 'en',
    value: '',
    caretPos: {
        startPos: 0,
        endPos: 0,
        direction: null
    }
};
var GhostKeyboard = /** @class */ (function () {
    function GhostKeyboard(config) {
        var _a, _b;
        if (config) {
            config = __assign({}, defaultConfig, config);
        }
        this.lang = config.lang;
        this.pattern = config.pattern;
        this.Keyboard = Object(_keyboards__WEBPACK_IMPORTED_MODULE_0__["default"])(this.lang);
        this.IME = new _IME__WEBPACK_IMPORTED_MODULE_2__["default"](config.lang);
        this.setInput(config.input);
        this.value = config.value;
        this.caretPos = {
            startPos: config.caretPos.startPos,
            endPos: config.caretPos.endPos,
            direction: null
        };
        this.composing = null;
        this.capslock = false;
        this.commands = (_a = {},
            _a[_keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].KeyA.code] = [{ mods: ['ctrlKey'], action: this.selectWholeValue.bind(this) }],
            _a[_keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].Space.code] = [{ mods: [], action: this.onSpace.bind(this) }],
            _a[_keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].Backspace.code] = [{ mods: [], action: this.onBackspace.bind(this) }],
            _a[_keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].Delete.code] = [{ mods: [], action: this.onDelete.bind(this) }],
            _a[_keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].CapsLock.code] = [{ mods: [], action: this.onCapsLock.bind(this) }],
            _a[_keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].ArrowUp.code] = [{ mods: [], action: this.onMoveCaret.bind(this) }],
            _a[_keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].ArrowRight.code] = [{ mods: [], action: this.onMoveCaret.bind(this) }],
            _a[_keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].ArrowDown.code] = [{ mods: [], action: this.onMoveCaret.bind(this) }],
            _a[_keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].ArrowLeft.code] = [{ mods: [], action: this.onMoveCaret.bind(this) }],
            _a[_keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].Home.code] = [{ mods: [], action: this.onMoveCaret.bind(this) }],
            _a[_keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].End.code] = [{ mods: [], action: this.onMoveCaret.bind(this) }],
            _a);
        this.notPreventCommands = (_b = {}, _b[_keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].KeyC.code] = [{ mods: ['ctrlKey'], action: function () { } }], _b);
    }
    GhostKeyboard.prototype.selectWholeValue = function () {
        this.setCaretPos(0, this.value.length);
    };
    GhostKeyboard.prototype.getCaretPos = function () {
        return {
            startPos: this.caretPos.startPos,
            endPos: this.caretPos.endPos,
            direction: this.caretPos.direction
        };
    };
    GhostKeyboard.prototype.setCaretPos = function (startPos, endPos, direction) {
        var len = this.value.length;
        if (startPos < 0) {
            startPos = 0;
        }
        if (startPos > len) {
            startPos = len;
        }
        if (endPos === undefined) {
            endPos = startPos;
        }
        if (startPos > endPos) {
            startPos = endPos;
        }
        if (endPos < 0) {
            endPos = startPos;
        }
        if (endPos > len) {
            endPos = len;
        }
        this.caretPos.direction = direction && (startPos !== endPos) ? direction : null;
        this.caretPos.startPos = startPos;
        this.caretPos.endPos = endPos;
    };
    GhostKeyboard.prototype.insertChar = function (char) {
        var value = this.value, len = value.length;
        if (this.pattern && !char.match(this.pattern)) {
            return;
        }
        this.value = value.substring(0, this.caretPos.startPos) + char + value.substring(this.caretPos.endPos, len);
        this.setCaretPos(this.caretPos.startPos + char.length);
    };
    GhostKeyboard.prototype.removeComposing = function () {
        if (!this.composing) {
            return '';
        }
        this.setCaretPos(this.composing.position, this.composing.position + this.composing.char.length);
        this.composing = null;
        return this.removeSelection();
    };
    GhostKeyboard.prototype.isMultipleSelection = function () {
        var _a = this.getCaretPos(), startPos = _a.startPos, endPos = _a.endPos;
        return (startPos !== endPos);
    };
    GhostKeyboard.prototype.onSpace = function () {
        if (this.isMultipleSelection()) {
            this.removeSelection();
            return;
        }
        this.composing = null;
        this.insertChar(' ');
    };
    GhostKeyboard.prototype.onDelete = function () {
        if (this.isMultipleSelection()) {
            this.removeSelection();
            return;
        }
        var startPos = this.getCaretPos().startPos;
        this.composing = null;
        this.setCaretPos(startPos, startPos + 1);
        this.removeSelection();
    };
    GhostKeyboard.prototype.onBackspace = function () {
        if (this.isMultipleSelection()) {
            this.removeSelection();
            return;
        }
        var startPos = this.getCaretPos().startPos;
        if (this.composing) {
            var composingChar = this.removeComposing();
            var decomposeChar = this.IME.composer.decompose(composingChar);
            if (decomposeChar.length === 1) {
                return;
            }
            var newCompositionChar = this.IME.composer.compose(decomposeChar.slice(0, -1));
            this.composing = this.createComposition(newCompositionChar, this.caretPos.startPos + (newCompositionChar.length - 1));
            this.insertChar(this.composing.char);
            return;
        }
        this.setCaretPos(startPos - 1, startPos);
        this.removeSelection();
    };
    GhostKeyboard.prototype.onMoveCaret = function (code, mods) {
        var _a = this.getCaretPos(), startPos = _a.startPos, endPos = _a.endPos, direction = _a.direction;
        this.composing = null;
        if (code === _keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].ArrowRight.code) {
            if (mods.ctrlKey) {
                var refPos = direction === 'left' ? startPos : endPos;
                var valueCut = this.value.substr(refPos, this.value.length);
                var words = valueCut.match(/[^ .!@#]+/gi);
                if (words) {
                    refPos = this.value.indexOf(words[0], refPos) + words[0].length;
                    startPos = direction === 'left' ? refPos : startPos;
                    endPos = direction === 'left' ? endPos : refPos;
                    direction = direction ? direction : 'right';
                }
                return this.setCaretPos((mods.shiftKey ? startPos : endPos), endPos, direction);
            }
            if (startPos !== endPos && !mods.shiftKey) {
                return this.setCaretPos(endPos);
            }
            if (mods.shiftKey) {
                startPos = direction === 'left' ? startPos + 1 : startPos;
                endPos = direction === 'left' ? endPos : endPos + 1;
                direction = direction ? direction : 'right';
            }
            else {
                endPos += 1;
                startPos = endPos;
                direction = null;
            }
            return this.setCaretPos(startPos, endPos, direction);
        }
        else if (code === _keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].ArrowLeft.code) {
            if (mods.ctrlKey) {
                var refPos = direction === 'right' ? endPos : startPos;
                var valueCut = this.value.substr(0, refPos);
                var words = valueCut.match(/[^ .!@#]+/gi);
                if (words) {
                    refPos = valueCut.lastIndexOf(words[words.length - 1]);
                    startPos = direction === 'right' ? startPos : refPos;
                    endPos = direction === 'right' ? refPos : endPos;
                    direction = direction ? direction : 'left';
                }
                return this.setCaretPos(startPos, (mods.shiftKey ? endPos : startPos), direction);
            }
            if (startPos !== endPos && !mods.shiftKey) {
                return this.setCaretPos(startPos);
            }
            if (mods.shiftKey) {
                startPos = direction === 'right' ? startPos : startPos - 1;
                endPos = direction === 'right' ? endPos - 1 : endPos;
                direction = direction ? direction : 'left';
            }
            else {
                startPos -= 1;
                endPos = startPos;
                direction = null;
            }
            return this.setCaretPos(startPos, endPos, direction);
        }
        else if (code === _keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].ArrowUp.code) {
            //TODO Textarea proper selection
            if (mods.shiftKey) {
                return this.setCaretPos(0, endPos);
            }
            return this.setCaretPos(0);
        }
        else if (code === _keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].ArrowDown.code) {
            //TODO Textarea proper selection
            if (mods.shiftKey) {
                return this.setCaretPos(startPos, this.value.length);
            }
            return this.setCaretPos(this.value.length);
        }
        else if (code === _keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].Home.code) {
            if (mods.shiftKey) {
                return this.setCaretPos(0, endPos);
            }
            return this.setCaretPos(0);
        }
        else if (code === _keyboards_codes__WEBPACK_IMPORTED_MODULE_1__["default"].End.code) {
            if (mods.shiftKey) {
                return this.setCaretPos(startPos, this.value.length);
            }
            return this.setCaretPos(this.value.length);
        }
    };
    GhostKeyboard.prototype.onInputInput = function (e) {
        var _a = this.input, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd, value = _a.value;
        this.input.value = value.substr(0, selectionStart) + value.substr(selectionEnd, value.length);
        this.input.selectionStart = selectionStart;
        this.input.selectionEnd = selectionStart;
    };
    GhostKeyboard.prototype.onCompositionstart = function (e) {
        /*
        * Blur is a hack to force the browser
        * to cancel the composition
        */
        this.input.blur();
        requestAnimationFrame(this.updateInput.bind(this));
    };
    GhostKeyboard.prototype.onCompositionend = function (e) {
        this.composing = null;
    };
    GhostKeyboard.prototype.updateCaretPosFromInput = function () {
        var _a = this.getCaretPos(), startPos = _a.startPos, endPos = _a.endPos;
        var self = this;
        /**
         * Safari doesn`t update the position instantly
         */
        requestAnimationFrame(function () {
            var _a = self.input, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd;
            if (startPos !== selectionStart || endPos !== selectionEnd) {
                self.setCaretPos(selectionStart, selectionEnd);
                self.composing = null;
            }
        });
    };
    GhostKeyboard.prototype.isEventShortcut = function (e) {
        return (e.metaKey || e.ctrlKey || e.altKey);
    };
    GhostKeyboard.prototype.onInputMousedown = function () {
        this.composing = null;
        document.addEventListener('mouseup', this.updateCaretPosFromInput.bind(this), { once: true });
    };
    GhostKeyboard.prototype.setInput = function (input) {
        if (!input) {
            return;
        }
        if (typeof input !== 'object' || !(input instanceof HTMLInputElement)) {
            throw new Error('HTMLInputElement is required');
        }
        this.input = input;
        this.input.setAttribute('autocomplete', 'off');
        this.input.addEventListener('keydown', this.event.bind(this));
        if (_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getBrowser() === 'Safari') {
            this.input.addEventListener('beforeinput', this.onInputInput.bind(this));
        }
        else {
            this.input.addEventListener('compositionupdate', this.onCompositionstart.bind(this));
            this.input.addEventListener('compositionend', this.onCompositionend.bind(this));
        }
        this.input.addEventListener('mousedown', this.onInputMousedown.bind(this));
    };
    GhostKeyboard.prototype.updateInput = function () {
        if (!this.input) {
            return;
        }
        this.input.value = this.value;
        this.input.focus();
        this.input.selectionStart = this.caretPos.startPos;
        this.input.selectionEnd = this.caretPos.endPos;
        var coords = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getCaretCoord(this.input, this.caretPos.startPos);
        var inputViewStart = this.input.scrollLeft;
        var inputViewEnd = this.input.scrollLeft + this.input.clientWidth;
        if (coords.x < inputViewStart || coords.x > inputViewEnd) {
            this.input.scrollLeft = coords.x - (this.input.clientWidth / 2);
        }
    };
    GhostKeyboard.prototype.removeSelection = function () {
        var _a = this.getCaretPos(), startPos = _a.startPos, endPos = _a.endPos;
        var value = this.value;
        var removedChars = value.slice(startPos, endPos);
        this.value = value.slice(0, startPos) + value.slice(endPos);
        this.setCaretPos(startPos);
        this.composing = null;
        return removedChars;
    };
    GhostKeyboard.prototype.normalizeMods = function (mods) {
        var modsKey = ['ctrlKey', 'altKey', 'shiftKey', 'metaKey'];
        var normalizedMods = {};
        modsKey.forEach(function (key) {
            normalizedMods[key] = false;
            if (mods && mods[key]) {
                normalizedMods[key] = mods[key];
            }
        });
        if (mods && mods.metaKey) {
            normalizedMods.ctrlKey = true;
        }
        normalizedMods.capslock = this.capslock;
        return normalizedMods;
    };
    GhostKeyboard.prototype.createComposition = function (char, position) {
        return {
            char: char,
            position: position
        };
    };
    GhostKeyboard.prototype.onCapsLock = function () {
        this.capslock = !this.capslock;
    };
    GhostKeyboard.prototype.getCommandAction = function (commands, code, mods) {
        var commandFound = null;
        if (commands[code]) {
            var commandConditions = commands[code];
            for (var i = 0; i < commandConditions.length; i++) {
                var missingMods = commandConditions[i].mods.filter(function (mod) {
                    return mods[mod] !== true;
                });
                if (missingMods.length !== 0) {
                    continue;
                }
                commandFound = commandConditions[i].action;
                break;
            }
        }
        return commandFound;
    };
    GhostKeyboard.prototype.filterPattern = function () {
        if (!this.pattern) {
            return;
        }
        var _a = this.getCaretPos(), startPos = _a.startPos, endPos = _a.endPos;
        var oppositePattern = new RegExp('[^' + this.pattern.source + ']', 'g');
        var beginValue = this.value.substr(0, startPos);
        var beginCleanValue = beginValue.replace(oppositePattern, '');
        this.value = this.value.replace(oppositePattern, '');
        if (beginValue.length !== beginCleanValue.length) {
            this.setCaretPos(startPos - (beginValue.length - beginCleanValue.length));
        }
    };
    GhostKeyboard.prototype.executeKey = function (code, mods) {
        mods = this.normalizeMods(mods);
        // First verify if has any command related to the key
        var commandAction = this.getCommandAction(this.commands, code, mods);
        if (commandAction) {
            commandAction(code, mods);
            this.updateInput();
            return this.value;
        }
        // If no command found, insert the character based on the virtual keyboard
        var charSet = this.Keyboard.getChar(code, mods);
        if (!charSet || !charSet.char) {
            return this.value;
        }
        var char = charSet.char;
        if (this.composing && charSet.compose) {
            var composingChar = this.removeComposing();
            var composition = this.IME.composer.compose(composingChar + char);
            char = composition;
        }
        this.composing = charSet.compose ? this.createComposition(char.charAt(char.length - 1), this.caretPos.startPos + (char.length - 1)) : null;
        this.insertChar(char);
        this.updateInput();
        return this.value;
    };
    GhostKeyboard.prototype.setValue = function (value) {
        this.value = value;
        this.setCaretPos(0);
    };
    GhostKeyboard.prototype.event = function (event) {
        if (typeof event !== 'object' || !event.type) {
            throw new Error('The event have to be a KeyboardEvent.');
        }
        if (event.type === 'keydown') {
            var code = this.Keyboard.getCode(event.code ? event.code : event.which);
            if (!code) {
                return;
            }
            var mods = this.normalizeMods(event);
            if (event.getModifierState) {
                this.capslock = event.getModifierState('CapsLock');
                mods.capslock = this.capslock;
            }
            var commandAction = this.getCommandAction(this.notPreventCommands, code, mods);
            if (commandAction) {
                return;
            }
            event.preventDefault();
            return this.executeKey(code, mods);
        }
    };
    GhostKeyboard.prototype.type = function (key, mods) {
        var code = this.Keyboard.getCode(key);
        return this.executeKey(code, mods);
    };
    return GhostKeyboard;
}());
/* harmony default export */ __webpack_exports__["default"] = (GhostKeyboard);


/***/ }),

/***/ "./src/helpers/utils.ts":
/*!******************************!*\
  !*** ./src/helpers/utils.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Get the x, y coordinates of a caret position inside a input
 */
var getCaretCoord = function (input, caretPos) {
    var inputX = input.offsetLeft, inputY = input.offsetTop;
    var div = document.createElement('div');
    var inputStyle = getComputedStyle(input);
    // @ts-ignore
    for (var _i = 0, inputStyle_1 = inputStyle; _i < inputStyle_1.length; _i++) {
        var prop = inputStyle_1[_i];
        div.style[prop] = inputStyle[prop];
    }
    var swap = '.';
    var inputValue = input.tagName === 'INPUT' ? input.value.replace(/ /g, swap) : input.value;
    var textContent = inputValue.substr(0, caretPos);
    div.textContent = textContent;
    if (input.tagName === 'TEXTAREA') {
        div.style.height = 'auto';
    }
    if (input.tagName === 'INPUT') {
        div.style.width = 'auto';
    }
    var span = document.createElement('span');
    span.textContent = inputValue.substr(caretPos) || '.';
    div.appendChild(span);
    document.body.appendChild(div);
    var offsetLeft = span.offsetLeft, offsetTop = span.offsetTop;
    document.body.removeChild(div);
    return {
        x: offsetLeft,
        y: offsetTop,
    };
};
function getBrowser() {
    if (!navigator) {
        return null;
    }
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return 'Opera';
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return 'Chrome';
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return 'Firefox';
        // @ts-ignore
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode === true)) {
        return 'IE';
    }
    return null;
}
var utils = {
    getCaretCoord: getCaretCoord,
    getBrowser: getBrowser
};
/* harmony default export */ __webpack_exports__["default"] = (utils);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_GhostKeyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/GhostKeyboard */ "./src/components/GhostKeyboard.ts");

function createGhostKeyboard(config) {
    return new _components_GhostKeyboard__WEBPACK_IMPORTED_MODULE_0__["default"](config);
}
/* harmony default export */ __webpack_exports__["default"] = (createGhostKeyboard);


/***/ }),

/***/ "./src/keyboards/Main.ts":
/*!*******************************!*\
  !*** ./src/keyboards/Main.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codes */ "./src/keyboards/codes.ts");

var Keyboard = /** @class */ (function () {
    function Keyboard(props) {
        this.lang = null;
        this.charsets = {};
    }
    Keyboard.prototype.getCode = function (key) {
        if (typeof key === 'number') {
            var keyboardCode = Object(_codes__WEBPACK_IMPORTED_MODULE_0__["getByKeyCode"])(key);
            if (keyboardCode !== null) {
                key = keyboardCode.code;
            }
        }
        if (typeof key === 'string' && this.charsets[key]) {
            return key;
        }
        return null;
    };
    Keyboard.prototype.getChar = function (code, mods) {
        if (this.charsets[code]) {
            var char = {
                code: code,
                char: this.charsets[code].base,
                compose: this.charsets[code].compose
            };
            if (mods && mods.shiftKey && this.charsets[code].mod) {
                char.char = this.charsets[code].mod;
            }
            return char;
        }
        return null;
    };
    return Keyboard;
}());
/* harmony default export */ __webpack_exports__["default"] = (Keyboard);


/***/ }),

/***/ "./src/keyboards/codes.ts":
/*!********************************!*\
  !*** ./src/keyboards/codes.ts ***!
  \********************************/
/*! exports provided: getByKeyCode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByKeyCode", function() { return getByKeyCode; });
var CODES_LIST = {
    Backquote: { code: 'Backquote', keyCode: 192 },
    Minus: { code: 'Minus', keyCode: 189 },
    Equal: { code: 'Equal', keyCode: 187 },
    BracketLeft: { code: 'BracketLeft', keyCode: 219 },
    BracketRight: { code: 'BracketRight', keyCode: 221 },
    Backslash: { code: 'Backslash', keyCode: 220 },
    Semicolon: { code: 'Semicolon', keyCode: 186 },
    Quote: { code: 'Quote', keyCode: 222 },
    Comma: { code: 'Comma', keyCode: 188 },
    Period: { code: 'Period', keyCode: 190 },
    Slash: { code: 'Slash', keyCode: 191 },
    AltLeft: { code: 'AltLeft', keyCode: 18 },
    Home: { code: 'Home', keyCode: 36 },
    End: { code: 'End', keyCode: 35 },
    CapsLock: { code: 'CapsLock', keyCode: 20 },
    ShiftLeft: { code: 'ShiftLeft', keyCode: 16 },
    ShiftRight: { code: 'ShiftRight', keyCode: 16 },
    Space: { code: 'Space', keyCode: 32 },
    ArrowLeft: { code: 'ArrowLeft', keyCode: 37 },
    ArrowUp: { code: 'ArrowUp', keyCode: 38 },
    ArrowRight: { code: 'ArrowRight', keyCode: 39 },
    ArrowDown: { code: 'ArrowDown', keyCode: 40 },
    Backspace: { code: 'Backspace', keyCode: 8 },
    Delete: { code: 'Delete', keyCode: 46 },
    Tab: { code: 'Tab', keyCode: 9 },
    Digit1: { code: 'Digit1', keyCode: 49 },
    Digit2: { code: 'Digit2', keyCode: 50 },
    Digit3: { code: 'Digit3', keyCode: 51 },
    Digit4: { code: 'Digit4', keyCode: 52 },
    Digit5: { code: 'Digit5', keyCode: 53 },
    Digit6: { code: 'Digit6', keyCode: 54 },
    Digit7: { code: 'Digit7', keyCode: 55 },
    Digit8: { code: 'Digit8', keyCode: 56 },
    Digit9: { code: 'Digit9', keyCode: 57 },
    Digit0: { code: 'Digit0', keyCode: 48 },
    KeyA: { code: 'KeyA', keyCode: 65 },
    KeyB: { code: 'KeyB', keyCode: 66 },
    KeyC: { code: 'KeyC', keyCode: 67 },
    KeyD: { code: 'KeyD', keyCode: 68 },
    KeyE: { code: 'KeyE', keyCode: 69 },
    KeyF: { code: 'KeyF', keyCode: 70 },
    KeyG: { code: 'KeyG', keyCode: 71 },
    KeyH: { code: 'KeyH', keyCode: 72 },
    KeyI: { code: 'KeyI', keyCode: 73 },
    KeyJ: { code: 'KeyJ', keyCode: 74 },
    KeyK: { code: 'KeyK', keyCode: 75 },
    KeyL: { code: 'KeyL', keyCode: 76 },
    KeyM: { code: 'KeyM', keyCode: 77 },
    KeyN: { code: 'KeyN', keyCode: 78 },
    KeyO: { code: 'KeyO', keyCode: 79 },
    KeyP: { code: 'KeyP', keyCode: 80 },
    KeyQ: { code: 'KeyQ', keyCode: 81 },
    KeyR: { code: 'KeyR', keyCode: 82 },
    KeyS: { code: 'KeyS', keyCode: 83 },
    KeyT: { code: 'KeyT', keyCode: 84 },
    KeyU: { code: 'KeyU', keyCode: 85 },
    KeyV: { code: 'KeyV', keyCode: 86 },
    KeyW: { code: 'KeyW', keyCode: 87 },
    KeyX: { code: 'KeyX', keyCode: 88 },
    KeyY: { code: 'KeyY', keyCode: 89 },
    KeyZ: { code: 'KeyZ', keyCode: 90 }
};
function getByKeyCode(keyCode) {
    for (var code in CODES_LIST) {
        if (CODES_LIST[code].keyCode === keyCode) {
            return CODES_LIST[code];
        }
    }
    return null;
}
;
/* harmony default export */ __webpack_exports__["default"] = (CODES_LIST);


/***/ }),

/***/ "./src/keyboards/english.ts":
/*!**********************************!*\
  !*** ./src/keyboards/english.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codes */ "./src/keyboards/codes.ts");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ "./src/keyboards/Main.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var KEYSET_LIST = [
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Backquote.code, base: '`', mod: '~' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Minus.code, base: '-', mod: '_' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Equal.code, base: '=', mod: '+' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].BracketLeft.code, base: '[', mod: '{' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].BracketRight.code, base: ']', mod: '}' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Backslash.code, base: '\\', mod: '|' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Semicolon.code, base: ';', mod: ':' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Quote.code, base: '\'', mod: '"' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Comma.code, base: ',', mod: '<' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Period.code, base: '.', mod: '>' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Slash.code, base: '/', mod: '?' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].CapsLock.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Space.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].ArrowLeft.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].ArrowUp.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].ArrowRight.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].ArrowDown.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Backspace.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Delete.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Home.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].End.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit1.code, base: '1', mod: '!' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit2.code, base: '2', mod: '@' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit3.code, base: '3', mod: '#' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit4.code, base: '4', mod: '$' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit5.code, base: '5', mod: '%' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit6.code, base: '6', mod: '^' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit7.code, base: '7', mod: '&' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit8.code, base: '8', mod: '*' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit9.code, base: '9', mod: '(' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit0.code, base: '0', mod: ')' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyA.code, base: 'a', mod: 'A' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyB.code, base: 'b', mod: 'B' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyC.code, base: 'c', mod: 'C' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyD.code, base: 'd', mod: 'D' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyE.code, base: 'e', mod: 'E' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyF.code, base: 'f', mod: 'F' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyG.code, base: 'g', mod: 'G' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyH.code, base: 'h', mod: 'H' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyI.code, base: 'i', mod: 'I' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyJ.code, base: 'j', mod: 'J' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyK.code, base: 'k', mod: 'K' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyL.code, base: 'l', mod: 'L' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyM.code, base: 'm', mod: 'M' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyN.code, base: 'n', mod: 'N' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyO.code, base: 'o', mod: 'O' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyP.code, base: 'p', mod: 'P' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyQ.code, base: 'q', mod: 'q' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyR.code, base: 'r', mod: 'R' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyS.code, base: 's', mod: 'S' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyT.code, base: 't', mod: 'T' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyU.code, base: 'u', mod: 'U' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyV.code, base: 'v', mod: 'V' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyW.code, base: 'w', mod: 'W' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyX.code, base: 'x', mod: 'X' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyY.code, base: 'y', mod: 'Y' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyZ.code, base: 'z', mod: 'Z' }
];
function arrangeCharsets() {
    var charsListArranged = {};
    KEYSET_LIST.forEach(function (char) {
        charsListArranged[char.code] = char;
    });
    return charsListArranged;
}
var EnglishKeyboard = /** @class */ (function (_super) {
    __extends(EnglishKeyboard, _super);
    function EnglishKeyboard(props) {
        var _this = _super.call(this, props) || this;
        _this.lang = 'en';
        _this.charsets = arrangeCharsets();
        return _this;
    }
    EnglishKeyboard.prototype.getChar = function (code, mods) {
        if (this.charsets[code]) {
            var char = {
                code: code,
                char: this.charsets[code].base,
                compose: this.charsets[code].compose
            };
            if (mods && mods.shiftKey) {
                char.char = this.charsets[code].mod;
            }
            if (mods && mods.capslock && char.char.match(/[a-zA-Z]/g)) {
                char.char = this.charsets[code].mod;
            }
            return char;
        }
        return null;
    };
    return EnglishKeyboard;
}(_Main__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (EnglishKeyboard);


/***/ }),

/***/ "./src/keyboards/index.ts":
/*!********************************!*\
  !*** ./src/keyboards/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _english__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./english */ "./src/keyboards/english.ts");
/* harmony import */ var _korean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./korean */ "./src/keyboards/korean.ts");


var KEYBOARDS = {
    en: _english__WEBPACK_IMPORTED_MODULE_0__["default"],
    ko: _korean__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (function (lang) {
    if (!KEYBOARDS[lang]) {
        throw new Error('Keyboard Language not found.');
    }
    return new KEYBOARDS[lang]();
});
;


/***/ }),

/***/ "./src/keyboards/korean.ts":
/*!*********************************!*\
  !*** ./src/keyboards/korean.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codes */ "./src/keyboards/codes.ts");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ "./src/keyboards/Main.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var KEYSET_LIST = [
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Backquote.code, base: '`', mod: '~' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Minus.code, base: '-', mod: '_' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Equal.code, base: '=', mod: '+' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].BracketLeft.code, base: '[', mod: '{' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].BracketRight.code, base: ']', mod: '}' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Backslash.code, base: '\\', mod: '|' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Semicolon.code, base: ';', mod: ':' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Quote.code, base: '\'', mod: '"' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Comma.code, base: ',', mod: '<' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Period.code, base: '.', mod: '>' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Slash.code, base: '/', mod: '?' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].CapsLock.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Space.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].ArrowLeft.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].ArrowUp.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].ArrowRight.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].ArrowDown.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Backspace.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Delete.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Home.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].End.code },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit1.code, base: '1', mod: '!' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit2.code, base: '2', mod: '@' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit3.code, base: '3', mod: '#' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit4.code, base: '4', mod: '$' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit5.code, base: '5', mod: '%' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit6.code, base: '6', mod: '^' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit7.code, base: '7', mod: '&' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit8.code, base: '8', mod: '*' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit9.code, base: '9', mod: '(' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].Digit0.code, base: '0', mod: ')' },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyA.code, base: 'ㅁ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyB.code, base: 'ㅠ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyC.code, base: 'ㅊ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyD.code, base: 'ㅇ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyE.code, base: 'ㄷ', mod: 'ㄸ', compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyF.code, base: 'ㄹ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyG.code, base: 'ㅎ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyH.code, base: 'ㅗ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyI.code, base: 'ㅑ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyJ.code, base: 'ㅓ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyK.code, base: 'ㅏ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyL.code, base: 'ㅣ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyM.code, base: 'ㅡ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyN.code, base: 'ㅜ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyO.code, base: 'ㅐ', mod: 'ㅒ', compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyP.code, base: 'ㅔ', mod: 'ㅖ', compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyQ.code, base: 'ㅂ', mod: 'ㅃ', compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyR.code, base: 'ㄱ', mod: 'ㄲ', compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyS.code, base: 'ㄴ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyT.code, base: 'ㅅ', mod: 'ㅆ', compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyU.code, base: 'ㅕ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyV.code, base: 'ㅍ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyW.code, base: 'ㅈ', mod: 'ㅉ', compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyX.code, base: 'ㅌ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyY.code, base: 'ㅛ', mod: null, compose: true },
    { code: _codes__WEBPACK_IMPORTED_MODULE_0__["default"].KeyZ.code, base: 'ㅋ', mod: null, compose: true }
];
function arrangeCharsets() {
    var charsListArranged = {};
    KEYSET_LIST.forEach(function (char) {
        charsListArranged[char.code] = char;
    });
    return charsListArranged;
}
var KoreanKeyboard = /** @class */ (function (_super) {
    __extends(KoreanKeyboard, _super);
    function KoreanKeyboard(props) {
        var _this = _super.call(this, props) || this;
        _this.lang = 'ko';
        _this.charsets = arrangeCharsets();
        return _this;
    }
    return KoreanKeyboard;
}(_Main__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (KoreanKeyboard);


/***/ })

/******/ });
});
//# sourceMappingURL=ghost-keyboard.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Models/CachingOptions.ts":
/*!**************************************!*\
  !*** ./src/Models/CachingOptions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.CachingOptions = void 0;
/**
 * Class that represents caching options to be used with datasets
 */
var CachingOptions = /** @class */ (function () {
    /**
     * Constructor.
     * @param {IBebar | undefined} plainObject A plain object containing required properties
     */
    function CachingOptions(plainObject) {
        /** If the cache is enabled or not */
        this.enabled = false;
        if (plainObject) {
            this.ttl = plainObject.ttl;
            this.enabled = plainObject.enabled;
        }
    }
    return CachingOptions;
}());
exports.CachingOptions = CachingOptions;
;


/***/ }),

/***/ "./src/Models/Dataset.ts":
/*!*******************************!*\
  !*** ./src/Models/Dataset.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.Dataset = void 0;
var CachingOptions_1 = __webpack_require__(/*! ./CachingOptions */ "./src/Models/CachingOptions.ts");
/**
 * Generic Dataset class
 */
var Dataset = /** @class */ (function () {
    /**
     * Constructor.
     * @param {Dataset | undefined} plainObject
     *    A plain object containing required properties
     */
    function Dataset(plainObject) {
        if (plainObject) {
            this.name = plainObject.name;
            this.file = plainObject.file;
            this.encoding = plainObject.encoding;
            this.options = plainObject.options;
            this.content = plainObject.content;
            this.context = plainObject.context;
            this.parseAs = plainObject.parseAs;
            this.url = plainObject.url;
            this.httpOptions = plainObject.httpOptions;
            this.cache = plainObject.cache ? new CachingOptions_1.CachingOptions(plainObject.cache) :
                undefined;
        }
    }
    return Dataset;
}());
exports.Dataset = Dataset;
;


/***/ }),

/***/ "./src/Models/Helperset.ts":
/*!*********************************!*\
  !*** ./src/Models/Helperset.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.Helperset = void 0;
/**
 * Represents a place where handlebar helpers can be found.
 * A helper set can point to a single file, or a file pattern.
 */
var Helperset = /** @class */ (function () {
    /**
     * Constructor.
     * @param {IHelperset | undefined} plainObject A plain object containing required properties
     */
    function Helperset(plainObject) {
        if (plainObject) {
            this.file = plainObject.file;
            this.encoding = plainObject.encoding;
            this.url = plainObject.url;
            this.httpOptions = plainObject.httpOptions;
        }
        this.setDefaults();
    }
    /**
     * Sets default values where it's needed
     */
    Helperset.prototype.setDefaults = function () {
        this.encoding = (this.file && !this.encoding) ? 'utf-8' : this.encoding;
        if (this.url != null && this.url != undefined &&
            (this.httpOptions === null || this.httpOptions === undefined)) {
            this.httpOptions = {
                method: 'GET'
            };
        }
    };
    return Helperset;
}());
exports.Helperset = Helperset;
;


/***/ }),

/***/ "./src/Models/Import.ts":
/*!******************************!*\
  !*** ./src/Models/Import.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.Import = void 0;
/**
 * Represents a place where handlebar helpers can be found.
 * A helper set can point to a single file, or a file pattern.
 */
var Import = /** @class */ (function () {
    /**
     * Constructor.
     * @param {IHelperset | undefined} plainObject A plain object containing required properties
     */
    function Import(plainObject) {
        if (plainObject) {
            this.file = plainObject.file;
            this.encoding = plainObject.encoding;
            this.url = plainObject.url;
            this.httpOptions = plainObject.httpOptions;
        }
        this.setDefaults();
    }
    /**
     * Sets default values where it's needed
     */
    Import.prototype.setDefaults = function () {
        this.encoding = (this.file && !this.encoding) ? 'utf-8' : this.encoding;
        if (this.url != null && this.url != undefined &&
            (this.httpOptions === null || this.httpOptions === undefined)) {
            this.httpOptions = {
                method: 'GET'
            };
        }
    };
    return Import;
}());
exports.Import = Import;
;


/***/ }),

/***/ "./src/Models/Interfaces/IBebar.ts":
/*!*****************************************!*\
  !*** ./src/Models/Interfaces/IBebar.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;


/***/ }),

/***/ "./src/Models/Interfaces/IDataset.ts":
/*!*******************************************!*\
  !*** ./src/Models/Interfaces/IDataset.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;


/***/ }),

/***/ "./src/Models/Interfaces/IHelperset.ts":
/*!*********************************************!*\
  !*** ./src/Models/Interfaces/IHelperset.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;


/***/ }),

/***/ "./src/Models/Interfaces/IIterator.ts":
/*!********************************************!*\
  !*** ./src/Models/Interfaces/IIterator.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;


/***/ }),

/***/ "./src/Models/Interfaces/IOutput.ts":
/*!******************************************!*\
  !*** ./src/Models/Interfaces/IOutput.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;


/***/ }),

/***/ "./src/Models/Interfaces/IPartialset.ts":
/*!**********************************************!*\
  !*** ./src/Models/Interfaces/IPartialset.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;


/***/ }),

/***/ "./src/Models/Interfaces/ITemplate.ts":
/*!********************************************!*\
  !*** ./src/Models/Interfaces/ITemplate.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;


/***/ }),

/***/ "./src/Models/Iterator.ts":
/*!********************************!*\
  !*** ./src/Models/Iterator.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.Iterator = void 0;
/**
 * Top class that contains everything a bebar file can handle
 */
var Iterator = /** @class */ (function () {
    /**
     * Constructor.
     * @param {IIterator | undefined} plainObject A plain object containing required properties
     */
    function Iterator(plainObject) {
        /** The name of the variable to use in the iteration result */
        this.variable = '';
        if (plainObject) {
            this.variable = plainObject.variable;
            this.array = plainObject.array;
        }
    }
    return Iterator;
}());
exports.Iterator = Iterator;
;


/***/ }),

/***/ "./src/Models/Output.ts":
/*!******************************!*\
  !*** ./src/Models/Output.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.Output = void 0;
/**
 * Represents a produced file output
 */
var Output = /** @class */ (function () {
    /**
     * Constructor.
     * @param {IOutput | undefined} plainObject A plain object containing required properties
     */
    function Output(plainObject) {
        /** The resulting file content */
        this.content = '';
        /** object that contains all datasets,
         * accessible from their key in the final data object */
        this.keyToDataset = {};
        if (plainObject) {
            this.content = plainObject.content;
            this.file = plainObject.file;
            this.data = plainObject.data;
            this.keyToDataset = plainObject.keyToDataset;
        }
    }
    return Output;
}());
exports.Output = Output;
;


/***/ }),

/***/ "./src/Models/Partialset.ts":
/*!**********************************!*\
  !*** ./src/Models/Partialset.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.Partialset = void 0;
/**
 * Represents a place where handlebar partials can be found.
 * A partial set can point to a single file, or a file pattern.
 */
var Partialset = /** @class */ (function () {
    /**
     * Constructor.
     * @param {IPartialset | undefined} plainObject A plain object containing required properties
     */
    function Partialset(plainObject) {
        if (plainObject) {
            this.name = plainObject.name;
            this.file = plainObject.file;
            this.encoding = plainObject.encoding;
            this.url = plainObject.url;
            this.httpOptions = plainObject.httpOptions;
            this.content = plainObject.content;
        }
        this.setDefaults();
    }
    /**
     * Sets default values where it's needed
     */
    Partialset.prototype.setDefaults = function () {
        this.encoding = (this.file && !this.encoding) ? 'utf-8' : this.encoding;
        if (this.url != null && this.url != undefined &&
            (this.httpOptions === null || this.httpOptions === undefined)) {
            this.httpOptions = {
                method: 'GET'
            };
        }
    };
    return Partialset;
}());
exports.Partialset = Partialset;
;


/***/ }),

/***/ "./src/Models/Template.ts":
/*!********************************!*\
  !*** ./src/Models/Template.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.Template = void 0;
/**
 * Generic Template class
 */
var Template = /** @class */ (function () {
    /**
     * Constructor.
     * @param {ITemplate | undefined} plainObject A plain object containing required properties
     */
    function Template(plainObject) {
        /** The list of files containing partial mustache templates */
        this.partials = [];
        /** The list of files containing helper functions */
        this.helpers = [];
        /** A list of iterators to loop
         *  through when processing the outputs */
        this.iterators = [];
        if (plainObject) {
            this.name = plainObject.name;
            this.file = plainObject.file;
            this.encoding = plainObject.encoding;
            this.url = plainObject.url;
            this.httpOptions = plainObject.httpOptions;
            this.content = plainObject.content;
            this.output = plainObject.output;
            this.iterationValueName = plainObject.iterationValueName;
            this.prettify = plainObject.prettify;
        }
        this.setDefaults();
    }
    /**
     * Sets default values where it's needed
     */
    Template.prototype.setDefaults = function () {
        this.encoding = (this.file && !this.encoding) ? 'utf-8' : this.encoding;
    };
    return Template;
}());
exports.Template = Template;
;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(__webpack_require__(/*! ./Models/Dataset */ "./src/Models/Dataset.ts"), exports);
__exportStar(__webpack_require__(/*! ./Models/Helperset */ "./src/Models/Helperset.ts"), exports);
__exportStar(__webpack_require__(/*! ./Models/Iterator */ "./src/Models/Iterator.ts"), exports);
__exportStar(__webpack_require__(/*! ./Models/Import */ "./src/Models/Import.ts"), exports);
__exportStar(__webpack_require__(/*! ./Models/Output */ "./src/Models/Output.ts"), exports);
__exportStar(__webpack_require__(/*! ./Models/Partialset */ "./src/Models/Partialset.ts"), exports);
__exportStar(__webpack_require__(/*! ./Models/Template */ "./src/Models/Template.ts"), exports);
__exportStar(__webpack_require__(/*! ./Models/Interfaces/IBebar */ "./src/Models/Interfaces/IBebar.ts"), exports);
__exportStar(__webpack_require__(/*! ./Models/Interfaces/IDataset */ "./src/Models/Interfaces/IDataset.ts"), exports);
__exportStar(__webpack_require__(/*! ./Models/Interfaces/IHelperset */ "./src/Models/Interfaces/IHelperset.ts"), exports);
__exportStar(__webpack_require__(/*! ./Models/Interfaces/IIterator */ "./src/Models/Interfaces/IIterator.ts"), exports);
__exportStar(__webpack_require__(/*! ./Models/Interfaces/IOutput */ "./src/Models/Interfaces/IOutput.ts"), exports);
__exportStar(__webpack_require__(/*! ./Models/Interfaces/IPartialset */ "./src/Models/Interfaces/IPartialset.ts"), exports);
__exportStar(__webpack_require__(/*! ./Models/Interfaces/ITemplate */ "./src/Models/Interfaces/ITemplate.ts"), exports);


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxnQkFBZ0I7QUFDaEI7Ozs7Ozs7Ozs7O0FDekNhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGFBQWEsbUJBQU8sQ0FBQyxpREFBa0I7QUFDdkMsYUFBYSxtQkFBTyxDQUFDLHFEQUFvQjtBQUN6QyxhQUFhLG1CQUFPLENBQUMsbURBQW1CO0FBQ3hDLGFBQWEsbUJBQU8sQ0FBQywrQ0FBaUI7QUFDdEMsYUFBYSxtQkFBTyxDQUFDLCtDQUFpQjtBQUN0QyxhQUFhLG1CQUFPLENBQUMsdURBQXFCO0FBQzFDLGFBQWEsbUJBQU8sQ0FBQyxtREFBbUI7QUFDeEMsYUFBYSxtQkFBTyxDQUFDLHFFQUE0QjtBQUNqRCxhQUFhLG1CQUFPLENBQUMseUVBQThCO0FBQ25ELGFBQWEsbUJBQU8sQ0FBQyw2RUFBZ0M7QUFDckQsYUFBYSxtQkFBTyxDQUFDLDJFQUErQjtBQUNwRCxhQUFhLG1CQUFPLENBQUMsdUVBQTZCO0FBQ2xELGFBQWEsbUJBQU8sQ0FBQywrRUFBaUM7QUFDdEQsYUFBYSxtQkFBTyxDQUFDLDJFQUErQjs7Ozs7OztVQzdCcEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29jdG9nZW4uY29yZS8uL3NyYy9Nb2RlbHMvQ2FjaGluZ09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vb2N0b2dlbi5jb3JlLy4vc3JjL01vZGVscy9EYXRhc2V0LnRzIiwid2VicGFjazovL29jdG9nZW4uY29yZS8uL3NyYy9Nb2RlbHMvSGVscGVyc2V0LnRzIiwid2VicGFjazovL29jdG9nZW4uY29yZS8uL3NyYy9Nb2RlbHMvSW1wb3J0LnRzIiwid2VicGFjazovL29jdG9nZW4uY29yZS8uL3NyYy9Nb2RlbHMvSW50ZXJmYWNlcy9JQmViYXIudHMiLCJ3ZWJwYWNrOi8vb2N0b2dlbi5jb3JlLy4vc3JjL01vZGVscy9JbnRlcmZhY2VzL0lEYXRhc2V0LnRzIiwid2VicGFjazovL29jdG9nZW4uY29yZS8uL3NyYy9Nb2RlbHMvSW50ZXJmYWNlcy9JSGVscGVyc2V0LnRzIiwid2VicGFjazovL29jdG9nZW4uY29yZS8uL3NyYy9Nb2RlbHMvSW50ZXJmYWNlcy9JSXRlcmF0b3IudHMiLCJ3ZWJwYWNrOi8vb2N0b2dlbi5jb3JlLy4vc3JjL01vZGVscy9JbnRlcmZhY2VzL0lPdXRwdXQudHMiLCJ3ZWJwYWNrOi8vb2N0b2dlbi5jb3JlLy4vc3JjL01vZGVscy9JbnRlcmZhY2VzL0lQYXJ0aWFsc2V0LnRzIiwid2VicGFjazovL29jdG9nZW4uY29yZS8uL3NyYy9Nb2RlbHMvSW50ZXJmYWNlcy9JVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vb2N0b2dlbi5jb3JlLy4vc3JjL01vZGVscy9JdGVyYXRvci50cyIsIndlYnBhY2s6Ly9vY3RvZ2VuLmNvcmUvLi9zcmMvTW9kZWxzL091dHB1dC50cyIsIndlYnBhY2s6Ly9vY3RvZ2VuLmNvcmUvLi9zcmMvTW9kZWxzL1BhcnRpYWxzZXQudHMiLCJ3ZWJwYWNrOi8vb2N0b2dlbi5jb3JlLy4vc3JjL01vZGVscy9UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9vY3RvZ2VuLmNvcmUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb2N0b2dlbi5jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29jdG9nZW4uY29yZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29jdG9nZW4uY29yZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2N0b2dlbi5jb3JlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkNhY2hpbmdPcHRpb25zID0gdm9pZCAwO1xuLyoqXG4gKiBDbGFzcyB0aGF0IHJlcHJlc2VudHMgY2FjaGluZyBvcHRpb25zIHRvIGJlIHVzZWQgd2l0aCBkYXRhc2V0c1xuICovXG52YXIgQ2FjaGluZ09wdGlvbnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICogQHBhcmFtIHtJQmViYXIgfCB1bmRlZmluZWR9IHBsYWluT2JqZWN0IEEgcGxhaW4gb2JqZWN0IGNvbnRhaW5pbmcgcmVxdWlyZWQgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIENhY2hpbmdPcHRpb25zKHBsYWluT2JqZWN0KSB7XG4gICAgICAgIC8qKiBJZiB0aGUgY2FjaGUgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChwbGFpbk9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy50dGwgPSBwbGFpbk9iamVjdC50dGw7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBwbGFpbk9iamVjdC5lbmFibGVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBDYWNoaW5nT3B0aW9ucztcbn0oKSk7XG5leHBvcnRzLkNhY2hpbmdPcHRpb25zID0gQ2FjaGluZ09wdGlvbnM7XG47XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkRhdGFzZXQgPSB2b2lkIDA7XG52YXIgQ2FjaGluZ09wdGlvbnNfMSA9IHJlcXVpcmUoXCIuL0NhY2hpbmdPcHRpb25zXCIpO1xuLyoqXG4gKiBHZW5lcmljIERhdGFzZXQgY2xhc3NcbiAqL1xudmFyIERhdGFzZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICogQHBhcmFtIHtEYXRhc2V0IHwgdW5kZWZpbmVkfSBwbGFpbk9iamVjdFxuICAgICAqICAgIEEgcGxhaW4gb2JqZWN0IGNvbnRhaW5pbmcgcmVxdWlyZWQgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIERhdGFzZXQocGxhaW5PYmplY3QpIHtcbiAgICAgICAgaWYgKHBsYWluT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBwbGFpbk9iamVjdC5uYW1lO1xuICAgICAgICAgICAgdGhpcy5maWxlID0gcGxhaW5PYmplY3QuZmlsZTtcbiAgICAgICAgICAgIHRoaXMuZW5jb2RpbmcgPSBwbGFpbk9iamVjdC5lbmNvZGluZztcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHBsYWluT2JqZWN0Lm9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBwbGFpbk9iamVjdC5jb250ZW50O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gcGxhaW5PYmplY3QuY29udGV4dDtcbiAgICAgICAgICAgIHRoaXMucGFyc2VBcyA9IHBsYWluT2JqZWN0LnBhcnNlQXM7XG4gICAgICAgICAgICB0aGlzLnVybCA9IHBsYWluT2JqZWN0LnVybDtcbiAgICAgICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSBwbGFpbk9iamVjdC5odHRwT3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMuY2FjaGUgPSBwbGFpbk9iamVjdC5jYWNoZSA/IG5ldyBDYWNoaW5nT3B0aW9uc18xLkNhY2hpbmdPcHRpb25zKHBsYWluT2JqZWN0LmNhY2hlKSA6XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBEYXRhc2V0O1xufSgpKTtcbmV4cG9ydHMuRGF0YXNldCA9IERhdGFzZXQ7XG47XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkhlbHBlcnNldCA9IHZvaWQgMDtcbi8qKlxuICogUmVwcmVzZW50cyBhIHBsYWNlIHdoZXJlIGhhbmRsZWJhciBoZWxwZXJzIGNhbiBiZSBmb3VuZC5cbiAqIEEgaGVscGVyIHNldCBjYW4gcG9pbnQgdG8gYSBzaW5nbGUgZmlsZSwgb3IgYSBmaWxlIHBhdHRlcm4uXG4gKi9cbnZhciBIZWxwZXJzZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICogQHBhcmFtIHtJSGVscGVyc2V0IHwgdW5kZWZpbmVkfSBwbGFpbk9iamVjdCBBIHBsYWluIG9iamVjdCBjb250YWluaW5nIHJlcXVpcmVkIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBIZWxwZXJzZXQocGxhaW5PYmplY3QpIHtcbiAgICAgICAgaWYgKHBsYWluT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmZpbGUgPSBwbGFpbk9iamVjdC5maWxlO1xuICAgICAgICAgICAgdGhpcy5lbmNvZGluZyA9IHBsYWluT2JqZWN0LmVuY29kaW5nO1xuICAgICAgICAgICAgdGhpcy51cmwgPSBwbGFpbk9iamVjdC51cmw7XG4gICAgICAgICAgICB0aGlzLmh0dHBPcHRpb25zID0gcGxhaW5PYmplY3QuaHR0cE9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXREZWZhdWx0cygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGRlZmF1bHQgdmFsdWVzIHdoZXJlIGl0J3MgbmVlZGVkXG4gICAgICovXG4gICAgSGVscGVyc2V0LnByb3RvdHlwZS5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbmNvZGluZyA9ICh0aGlzLmZpbGUgJiYgIXRoaXMuZW5jb2RpbmcpID8gJ3V0Zi04JyA6IHRoaXMuZW5jb2Rpbmc7XG4gICAgICAgIGlmICh0aGlzLnVybCAhPSBudWxsICYmIHRoaXMudXJsICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgKHRoaXMuaHR0cE9wdGlvbnMgPT09IG51bGwgfHwgdGhpcy5odHRwT3B0aW9ucyA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSGVscGVyc2V0O1xufSgpKTtcbmV4cG9ydHMuSGVscGVyc2V0ID0gSGVscGVyc2V0O1xuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5JbXBvcnQgPSB2b2lkIDA7XG4vKipcbiAqIFJlcHJlc2VudHMgYSBwbGFjZSB3aGVyZSBoYW5kbGViYXIgaGVscGVycyBjYW4gYmUgZm91bmQuXG4gKiBBIGhlbHBlciBzZXQgY2FuIHBvaW50IHRvIGEgc2luZ2xlIGZpbGUsIG9yIGEgZmlsZSBwYXR0ZXJuLlxuICovXG52YXIgSW1wb3J0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqIEBwYXJhbSB7SUhlbHBlcnNldCB8IHVuZGVmaW5lZH0gcGxhaW5PYmplY3QgQSBwbGFpbiBvYmplY3QgY29udGFpbmluZyByZXF1aXJlZCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgZnVuY3Rpb24gSW1wb3J0KHBsYWluT2JqZWN0KSB7XG4gICAgICAgIGlmIChwbGFpbk9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5maWxlID0gcGxhaW5PYmplY3QuZmlsZTtcbiAgICAgICAgICAgIHRoaXMuZW5jb2RpbmcgPSBwbGFpbk9iamVjdC5lbmNvZGluZztcbiAgICAgICAgICAgIHRoaXMudXJsID0gcGxhaW5PYmplY3QudXJsO1xuICAgICAgICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHBsYWluT2JqZWN0Lmh0dHBPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdHMoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBkZWZhdWx0IHZhbHVlcyB3aGVyZSBpdCdzIG5lZWRlZFxuICAgICAqL1xuICAgIEltcG9ydC5wcm90b3R5cGUuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW5jb2RpbmcgPSAodGhpcy5maWxlICYmICF0aGlzLmVuY29kaW5nKSA/ICd1dGYtOCcgOiB0aGlzLmVuY29kaW5nO1xuICAgICAgICBpZiAodGhpcy51cmwgIT0gbnVsbCAmJiB0aGlzLnVybCAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICh0aGlzLmh0dHBPcHRpb25zID09PSBudWxsIHx8IHRoaXMuaHR0cE9wdGlvbnMgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEltcG9ydDtcbn0oKSk7XG5leHBvcnRzLkltcG9ydCA9IEltcG9ydDtcbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuSXRlcmF0b3IgPSB2b2lkIDA7XG4vKipcbiAqIFRvcCBjbGFzcyB0aGF0IGNvbnRhaW5zIGV2ZXJ5dGhpbmcgYSBiZWJhciBmaWxlIGNhbiBoYW5kbGVcbiAqL1xudmFyIEl0ZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqIEBwYXJhbSB7SUl0ZXJhdG9yIHwgdW5kZWZpbmVkfSBwbGFpbk9iamVjdCBBIHBsYWluIG9iamVjdCBjb250YWluaW5nIHJlcXVpcmVkIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBJdGVyYXRvcihwbGFpbk9iamVjdCkge1xuICAgICAgICAvKiogVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIHVzZSBpbiB0aGUgaXRlcmF0aW9uIHJlc3VsdCAqL1xuICAgICAgICB0aGlzLnZhcmlhYmxlID0gJyc7XG4gICAgICAgIGlmIChwbGFpbk9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy52YXJpYWJsZSA9IHBsYWluT2JqZWN0LnZhcmlhYmxlO1xuICAgICAgICAgICAgdGhpcy5hcnJheSA9IHBsYWluT2JqZWN0LmFycmF5O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJdGVyYXRvcjtcbn0oKSk7XG5leHBvcnRzLkl0ZXJhdG9yID0gSXRlcmF0b3I7XG47XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLk91dHB1dCA9IHZvaWQgMDtcbi8qKlxuICogUmVwcmVzZW50cyBhIHByb2R1Y2VkIGZpbGUgb3V0cHV0XG4gKi9cbnZhciBPdXRwdXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICogQHBhcmFtIHtJT3V0cHV0IHwgdW5kZWZpbmVkfSBwbGFpbk9iamVjdCBBIHBsYWluIG9iamVjdCBjb250YWluaW5nIHJlcXVpcmVkIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBPdXRwdXQocGxhaW5PYmplY3QpIHtcbiAgICAgICAgLyoqIFRoZSByZXN1bHRpbmcgZmlsZSBjb250ZW50ICovXG4gICAgICAgIHRoaXMuY29udGVudCA9ICcnO1xuICAgICAgICAvKiogb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIGRhdGFzZXRzLFxuICAgICAgICAgKiBhY2Nlc3NpYmxlIGZyb20gdGhlaXIga2V5IGluIHRoZSBmaW5hbCBkYXRhIG9iamVjdCAqL1xuICAgICAgICB0aGlzLmtleVRvRGF0YXNldCA9IHt9O1xuICAgICAgICBpZiAocGxhaW5PYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IHBsYWluT2JqZWN0LmNvbnRlbnQ7XG4gICAgICAgICAgICB0aGlzLmZpbGUgPSBwbGFpbk9iamVjdC5maWxlO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gcGxhaW5PYmplY3QuZGF0YTtcbiAgICAgICAgICAgIHRoaXMua2V5VG9EYXRhc2V0ID0gcGxhaW5PYmplY3Qua2V5VG9EYXRhc2V0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPdXRwdXQ7XG59KCkpO1xuZXhwb3J0cy5PdXRwdXQgPSBPdXRwdXQ7XG47XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlBhcnRpYWxzZXQgPSB2b2lkIDA7XG4vKipcbiAqIFJlcHJlc2VudHMgYSBwbGFjZSB3aGVyZSBoYW5kbGViYXIgcGFydGlhbHMgY2FuIGJlIGZvdW5kLlxuICogQSBwYXJ0aWFsIHNldCBjYW4gcG9pbnQgdG8gYSBzaW5nbGUgZmlsZSwgb3IgYSBmaWxlIHBhdHRlcm4uXG4gKi9cbnZhciBQYXJ0aWFsc2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqIEBwYXJhbSB7SVBhcnRpYWxzZXQgfCB1bmRlZmluZWR9IHBsYWluT2JqZWN0IEEgcGxhaW4gb2JqZWN0IGNvbnRhaW5pbmcgcmVxdWlyZWQgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIFBhcnRpYWxzZXQocGxhaW5PYmplY3QpIHtcbiAgICAgICAgaWYgKHBsYWluT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBwbGFpbk9iamVjdC5uYW1lO1xuICAgICAgICAgICAgdGhpcy5maWxlID0gcGxhaW5PYmplY3QuZmlsZTtcbiAgICAgICAgICAgIHRoaXMuZW5jb2RpbmcgPSBwbGFpbk9iamVjdC5lbmNvZGluZztcbiAgICAgICAgICAgIHRoaXMudXJsID0gcGxhaW5PYmplY3QudXJsO1xuICAgICAgICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHBsYWluT2JqZWN0Lmh0dHBPcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gcGxhaW5PYmplY3QuY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldERlZmF1bHRzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgZGVmYXVsdCB2YWx1ZXMgd2hlcmUgaXQncyBuZWVkZWRcbiAgICAgKi9cbiAgICBQYXJ0aWFsc2V0LnByb3RvdHlwZS5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbmNvZGluZyA9ICh0aGlzLmZpbGUgJiYgIXRoaXMuZW5jb2RpbmcpID8gJ3V0Zi04JyA6IHRoaXMuZW5jb2Rpbmc7XG4gICAgICAgIGlmICh0aGlzLnVybCAhPSBudWxsICYmIHRoaXMudXJsICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgKHRoaXMuaHR0cE9wdGlvbnMgPT09IG51bGwgfHwgdGhpcy5odHRwT3B0aW9ucyA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gUGFydGlhbHNldDtcbn0oKSk7XG5leHBvcnRzLlBhcnRpYWxzZXQgPSBQYXJ0aWFsc2V0O1xuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5UZW1wbGF0ZSA9IHZvaWQgMDtcbi8qKlxuICogR2VuZXJpYyBUZW1wbGF0ZSBjbGFzc1xuICovXG52YXIgVGVtcGxhdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICogQHBhcmFtIHtJVGVtcGxhdGUgfCB1bmRlZmluZWR9IHBsYWluT2JqZWN0IEEgcGxhaW4gb2JqZWN0IGNvbnRhaW5pbmcgcmVxdWlyZWQgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIFRlbXBsYXRlKHBsYWluT2JqZWN0KSB7XG4gICAgICAgIC8qKiBUaGUgbGlzdCBvZiBmaWxlcyBjb250YWluaW5nIHBhcnRpYWwgbXVzdGFjaGUgdGVtcGxhdGVzICovXG4gICAgICAgIHRoaXMucGFydGlhbHMgPSBbXTtcbiAgICAgICAgLyoqIFRoZSBsaXN0IG9mIGZpbGVzIGNvbnRhaW5pbmcgaGVscGVyIGZ1bmN0aW9ucyAqL1xuICAgICAgICB0aGlzLmhlbHBlcnMgPSBbXTtcbiAgICAgICAgLyoqIEEgbGlzdCBvZiBpdGVyYXRvcnMgdG8gbG9vcFxuICAgICAgICAgKiAgdGhyb3VnaCB3aGVuIHByb2Nlc3NpbmcgdGhlIG91dHB1dHMgKi9cbiAgICAgICAgdGhpcy5pdGVyYXRvcnMgPSBbXTtcbiAgICAgICAgaWYgKHBsYWluT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBwbGFpbk9iamVjdC5uYW1lO1xuICAgICAgICAgICAgdGhpcy5maWxlID0gcGxhaW5PYmplY3QuZmlsZTtcbiAgICAgICAgICAgIHRoaXMuZW5jb2RpbmcgPSBwbGFpbk9iamVjdC5lbmNvZGluZztcbiAgICAgICAgICAgIHRoaXMudXJsID0gcGxhaW5PYmplY3QudXJsO1xuICAgICAgICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHBsYWluT2JqZWN0Lmh0dHBPcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gcGxhaW5PYmplY3QuY29udGVudDtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0ID0gcGxhaW5PYmplY3Qub3V0cHV0O1xuICAgICAgICAgICAgdGhpcy5pdGVyYXRpb25WYWx1ZU5hbWUgPSBwbGFpbk9iamVjdC5pdGVyYXRpb25WYWx1ZU5hbWU7XG4gICAgICAgICAgICB0aGlzLnByZXR0aWZ5ID0gcGxhaW5PYmplY3QucHJldHRpZnk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXREZWZhdWx0cygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGRlZmF1bHQgdmFsdWVzIHdoZXJlIGl0J3MgbmVlZGVkXG4gICAgICovXG4gICAgVGVtcGxhdGUucHJvdG90eXBlLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVuY29kaW5nID0gKHRoaXMuZmlsZSAmJiAhdGhpcy5lbmNvZGluZykgPyAndXRmLTgnIDogdGhpcy5lbmNvZGluZztcbiAgICB9O1xuICAgIHJldHVybiBUZW1wbGF0ZTtcbn0oKSk7XG5leHBvcnRzLlRlbXBsYXRlID0gVGVtcGxhdGU7XG47XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9Nb2RlbHMvRGF0YXNldFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vTW9kZWxzL0hlbHBlcnNldFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vTW9kZWxzL0l0ZXJhdG9yXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9Nb2RlbHMvSW1wb3J0XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9Nb2RlbHMvT3V0cHV0XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9Nb2RlbHMvUGFydGlhbHNldFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vTW9kZWxzL1RlbXBsYXRlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9Nb2RlbHMvSW50ZXJmYWNlcy9JQmViYXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL01vZGVscy9JbnRlcmZhY2VzL0lEYXRhc2V0XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9Nb2RlbHMvSW50ZXJmYWNlcy9JSGVscGVyc2V0XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9Nb2RlbHMvSW50ZXJmYWNlcy9JSXRlcmF0b3JcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL01vZGVscy9JbnRlcmZhY2VzL0lPdXRwdXRcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL01vZGVscy9JbnRlcmZhY2VzL0lQYXJ0aWFsc2V0XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9Nb2RlbHMvSW50ZXJmYWNlcy9JVGVtcGxhdGVcIiksIGV4cG9ydHMpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
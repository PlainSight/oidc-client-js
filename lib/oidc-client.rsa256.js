(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Log = __webpack_require__(/*! ./src/Log.js */ "./src/Log.js");

var _OidcClient = __webpack_require__(/*! ./src/OidcClient.js */ "./src/OidcClient.js");

var _OidcClientSettings = __webpack_require__(/*! ./src/OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _WebStorageStateStore = __webpack_require__(/*! ./src/WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _InMemoryWebStorage = __webpack_require__(/*! ./src/InMemoryWebStorage.js */ "./src/InMemoryWebStorage.js");

var _UserManager = __webpack_require__(/*! ./src/UserManager.js */ "./src/UserManager.js");

var _AccessTokenEvents = __webpack_require__(/*! ./src/AccessTokenEvents.js */ "./src/AccessTokenEvents.js");

var _MetadataService = __webpack_require__(/*! ./src/MetadataService.js */ "./src/MetadataService.js");

var _CordovaPopupNavigator = __webpack_require__(/*! ./src/CordovaPopupNavigator.js */ "./src/CordovaPopupNavigator.js");

var _CordovaIFrameNavigator = __webpack_require__(/*! ./src/CordovaIFrameNavigator.js */ "./src/CordovaIFrameNavigator.js");

var _CheckSessionIFrame = __webpack_require__(/*! ./src/CheckSessionIFrame.js */ "./src/CheckSessionIFrame.js");

var _TokenRevocationClient = __webpack_require__(/*! ./src/TokenRevocationClient.js */ "./src/TokenRevocationClient.js");

var _SessionMonitor = __webpack_require__(/*! ./src/SessionMonitor.js */ "./src/SessionMonitor.js");

var _Global = __webpack_require__(/*! ./src/Global.js */ "./src/Global.js");

var _User = __webpack_require__(/*! ./src/User.js */ "./src/User.js");

var _version = __webpack_require__(/*! ./version.js */ "./version.js");

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

exports.default = {
    Version: _version.Version,
    Log: _Log.Log,
    OidcClient: _OidcClient.OidcClient,
    OidcClientSettings: _OidcClientSettings.OidcClientSettings,
    WebStorageStateStore: _WebStorageStateStore.WebStorageStateStore,
    InMemoryWebStorage: _InMemoryWebStorage.InMemoryWebStorage,
    UserManager: _UserManager.UserManager,
    AccessTokenEvents: _AccessTokenEvents.AccessTokenEvents,
    MetadataService: _MetadataService.MetadataService,
    CordovaPopupNavigator: _CordovaPopupNavigator.CordovaPopupNavigator,
    CordovaIFrameNavigator: _CordovaIFrameNavigator.CordovaIFrameNavigator,
    CheckSessionIFrame: _CheckSessionIFrame.CheckSessionIFrame,
    TokenRevocationClient: _TokenRevocationClient.TokenRevocationClient,
    SessionMonitor: _SessionMonitor.SessionMonitor,
    Global: _Global.Global,
    User: _User.User
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha256.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha256.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),

/***/ "./node_modules/jsbn/index.js":
/*!************************************!*\
  !*** ./node_modules/jsbn/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){

    // Copyright (c) 2005  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Basic JavaScript BN library - subset useful for RSA encryption.

    // Bits per digit
    var dbits;

    // JavaScript engine analysis
    var canary = 0xdeadbeefcafe;
    var j_lm = ((canary&0xffffff)==0xefcafe);

    // (public) Constructor
    function BigInteger(a,b,c) {
      if(a != null)
        if("number" == typeof a) this.fromNumber(a,b,c);
        else if(b == null && "string" != typeof a) this.fromString(a,256);
        else this.fromString(a,b);
    }

    // return new, unset BigInteger
    function nbi() { return new BigInteger(null); }

    // am: Compute w_j += (x*this_i), propagate carries,
    // c is initial carry, returns final carry.
    // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
    // We need to select the fastest one that works in this environment.

    // am1: use a single mult and divide to get the high bits,
    // max digit bits should be 26 because
    // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
    function am1(i,x,w,j,c,n) {
      while(--n >= 0) {
        var v = x*this[i++]+w[j]+c;
        c = Math.floor(v/0x4000000);
        w[j++] = v&0x3ffffff;
      }
      return c;
    }
    // am2 avoids a big mult-and-extract completely.
    // Max digit bits should be <= 30 because we do bitwise ops
    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
    function am2(i,x,w,j,c,n) {
      var xl = x&0x7fff, xh = x>>15;
      while(--n >= 0) {
        var l = this[i]&0x7fff;
        var h = this[i++]>>15;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
        c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
        w[j++] = l&0x3fffffff;
      }
      return c;
    }
    // Alternately, set max digit bits to 28 since some
    // browsers slow down when dealing with 32-bit numbers.
    function am3(i,x,w,j,c,n) {
      var xl = x&0x3fff, xh = x>>14;
      while(--n >= 0) {
        var l = this[i]&0x3fff;
        var h = this[i++]>>14;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x3fff)<<14)+w[j]+c;
        c = (l>>28)+(m>>14)+xh*h;
        w[j++] = l&0xfffffff;
      }
      return c;
    }
    var inBrowser = typeof navigator !== "undefined";
    if(inBrowser && j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
      BigInteger.prototype.am = am2;
      dbits = 30;
    }
    else if(inBrowser && j_lm && (navigator.appName != "Netscape")) {
      BigInteger.prototype.am = am1;
      dbits = 26;
    }
    else { // Mozilla/Netscape seems to prefer am3
      BigInteger.prototype.am = am3;
      dbits = 28;
    }

    BigInteger.prototype.DB = dbits;
    BigInteger.prototype.DM = ((1<<dbits)-1);
    BigInteger.prototype.DV = (1<<dbits);

    var BI_FP = 52;
    BigInteger.prototype.FV = Math.pow(2,BI_FP);
    BigInteger.prototype.F1 = BI_FP-dbits;
    BigInteger.prototype.F2 = 2*dbits-BI_FP;

    // Digit conversions
    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    var BI_RC = new Array();
    var rr,vv;
    rr = "0".charCodeAt(0);
    for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
    rr = "a".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
    rr = "A".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

    function int2char(n) { return BI_RM.charAt(n); }
    function intAt(s,i) {
      var c = BI_RC[s.charCodeAt(i)];
      return (c==null)?-1:c;
    }

    // (protected) copy this to r
    function bnpCopyTo(r) {
      for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
      r.t = this.t;
      r.s = this.s;
    }

    // (protected) set from integer value x, -DV <= x < DV
    function bnpFromInt(x) {
      this.t = 1;
      this.s = (x<0)?-1:0;
      if(x > 0) this[0] = x;
      else if(x < -1) this[0] = x+this.DV;
      else this.t = 0;
    }

    // return bigint initialized to value
    function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

    // (protected) set from string and radix
    function bnpFromString(s,b) {
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 256) k = 8; // byte array
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else { this.fromRadix(s,b); return; }
      this.t = 0;
      this.s = 0;
      var i = s.length, mi = false, sh = 0;
      while(--i >= 0) {
        var x = (k==8)?s[i]&0xff:intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-") mi = true;
          continue;
        }
        mi = false;
        if(sh == 0)
          this[this.t++] = x;
        else if(sh+k > this.DB) {
          this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
          this[this.t++] = (x>>(this.DB-sh));
        }
        else
          this[this.t-1] |= x<<sh;
        sh += k;
        if(sh >= this.DB) sh -= this.DB;
      }
      if(k == 8 && (s[0]&0x80) != 0) {
        this.s = -1;
        if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
      }
      this.clamp();
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) clamp off excess high words
    function bnpClamp() {
      var c = this.s&this.DM;
      while(this.t > 0 && this[this.t-1] == c) --this.t;
    }

    // (public) return string representation in given radix
    function bnToString(b) {
      if(this.s < 0) return "-"+this.negate().toString(b);
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else return this.toRadix(b);
      var km = (1<<k)-1, d, m = false, r = "", i = this.t;
      var p = this.DB-(i*this.DB)%k;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
        while(i >= 0) {
          if(p < k) {
            d = (this[i]&((1<<p)-1))<<(k-p);
            d |= this[--i]>>(p+=this.DB-k);
          }
          else {
            d = (this[i]>>(p-=k))&km;
            if(p <= 0) { p += this.DB; --i; }
          }
          if(d > 0) m = true;
          if(m) r += int2char(d);
        }
      }
      return m?r:"0";
    }

    // (public) -this
    function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

    // (public) |this|
    function bnAbs() { return (this.s<0)?this.negate():this; }

    // (public) return + if this > a, - if this < a, 0 if equal
    function bnCompareTo(a) {
      var r = this.s-a.s;
      if(r != 0) return r;
      var i = this.t;
      r = i-a.t;
      if(r != 0) return (this.s<0)?-r:r;
      while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
      return 0;
    }

    // returns bit length of the integer x
    function nbits(x) {
      var r = 1, t;
      if((t=x>>>16) != 0) { x = t; r += 16; }
      if((t=x>>8) != 0) { x = t; r += 8; }
      if((t=x>>4) != 0) { x = t; r += 4; }
      if((t=x>>2) != 0) { x = t; r += 2; }
      if((t=x>>1) != 0) { x = t; r += 1; }
      return r;
    }

    // (public) return the number of bits in "this"
    function bnBitLength() {
      if(this.t <= 0) return 0;
      return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
    }

    // (protected) r = this << n*DB
    function bnpDLShiftTo(n,r) {
      var i;
      for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
      for(i = n-1; i >= 0; --i) r[i] = 0;
      r.t = this.t+n;
      r.s = this.s;
    }

    // (protected) r = this >> n*DB
    function bnpDRShiftTo(n,r) {
      for(var i = n; i < this.t; ++i) r[i-n] = this[i];
      r.t = Math.max(this.t-n,0);
      r.s = this.s;
    }

    // (protected) r = this << n
    function bnpLShiftTo(n,r) {
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<cbs)-1;
      var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
      for(i = this.t-1; i >= 0; --i) {
        r[i+ds+1] = (this[i]>>cbs)|c;
        c = (this[i]&bm)<<bs;
      }
      for(i = ds-1; i >= 0; --i) r[i] = 0;
      r[ds] = c;
      r.t = this.t+ds+1;
      r.s = this.s;
      r.clamp();
    }

    // (protected) r = this >> n
    function bnpRShiftTo(n,r) {
      r.s = this.s;
      var ds = Math.floor(n/this.DB);
      if(ds >= this.t) { r.t = 0; return; }
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<bs)-1;
      r[0] = this[ds]>>bs;
      for(var i = ds+1; i < this.t; ++i) {
        r[i-ds-1] |= (this[i]&bm)<<cbs;
        r[i-ds] = this[i]>>bs;
      }
      if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
      r.t = this.t-ds;
      r.clamp();
    }

    // (protected) r = this - a
    function bnpSubTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]-a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c -= a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c -= a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c -= a.s;
      }
      r.s = (c<0)?-1:0;
      if(c < -1) r[i++] = this.DV+c;
      else if(c > 0) r[i++] = c;
      r.t = i;
      r.clamp();
    }

    // (protected) r = this * a, r != this,a (HAC 14.12)
    // "this" should be the larger one if appropriate.
    function bnpMultiplyTo(a,r) {
      var x = this.abs(), y = a.abs();
      var i = x.t;
      r.t = i+y.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
      r.s = 0;
      r.clamp();
      if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
    }

    // (protected) r = this^2, r != this (HAC 14.16)
    function bnpSquareTo(r) {
      var x = this.abs();
      var i = r.t = 2*x.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < x.t-1; ++i) {
        var c = x.am(i,x[i],r,2*i,0,1);
        if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
          r[i+x.t] -= x.DV;
          r[i+x.t+1] = 1;
        }
      }
      if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
      r.s = 0;
      r.clamp();
    }

    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
    // r != q, this != m.  q or r may be null.
    function bnpDivRemTo(m,q,r) {
      var pm = m.abs();
      if(pm.t <= 0) return;
      var pt = this.abs();
      if(pt.t < pm.t) {
        if(q != null) q.fromInt(0);
        if(r != null) this.copyTo(r);
        return;
      }
      if(r == null) r = nbi();
      var y = nbi(), ts = this.s, ms = m.s;
      var nsh = this.DB-nbits(pm[pm.t-1]);   // normalize modulus
      if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
      else { pm.copyTo(y); pt.copyTo(r); }
      var ys = y.t;
      var y0 = y[ys-1];
      if(y0 == 0) return;
      var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
      var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
      var i = r.t, j = i-ys, t = (q==null)?nbi():q;
      y.dlShiftTo(j,t);
      if(r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t,r);
      }
      BigInteger.ONE.dlShiftTo(ys,t);
      t.subTo(y,y);  // "negative" y so we can replace sub with am later
      while(y.t < ys) y[y.t++] = 0;
      while(--j >= 0) {
        // Estimate quotient digit
        var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
        if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {   // Try it out
          y.dlShiftTo(j,t);
          r.subTo(t,r);
          while(r[i] < --qd) r.subTo(t,r);
        }
      }
      if(q != null) {
        r.drShiftTo(ys,q);
        if(ts != ms) BigInteger.ZERO.subTo(q,q);
      }
      r.t = ys;
      r.clamp();
      if(nsh > 0) r.rShiftTo(nsh,r); // Denormalize remainder
      if(ts < 0) BigInteger.ZERO.subTo(r,r);
    }

    // (public) this mod a
    function bnMod(a) {
      var r = nbi();
      this.abs().divRemTo(a,null,r);
      if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
      return r;
    }

    // Modular reduction using "classic" algorithm
    function Classic(m) { this.m = m; }
    function cConvert(x) {
      if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
      else return x;
    }
    function cRevert(x) { return x; }
    function cReduce(x) { x.divRemTo(this.m,null,x); }
    function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
    function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    Classic.prototype.convert = cConvert;
    Classic.prototype.revert = cRevert;
    Classic.prototype.reduce = cReduce;
    Classic.prototype.mulTo = cMulTo;
    Classic.prototype.sqrTo = cSqrTo;

    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
    // justification:
    //         xy == 1 (mod m)
    //         xy =  1+km
    //   xy(2-xy) = (1+km)(1-km)
    // x[y(2-xy)] = 1-k^2m^2
    // x[y(2-xy)] == 1 (mod m^2)
    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
    // JS multiply "overflows" differently from C/C++, so care is needed here.
    function bnpInvDigit() {
      if(this.t < 1) return 0;
      var x = this[0];
      if((x&1) == 0) return 0;
      var y = x&3;       // y == 1/x mod 2^2
      y = (y*(2-(x&0xf)*y))&0xf; // y == 1/x mod 2^4
      y = (y*(2-(x&0xff)*y))&0xff;   // y == 1/x mod 2^8
      y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;    // y == 1/x mod 2^16
      // last step - calculate inverse mod DV directly;
      // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
      y = (y*(2-x*y%this.DV))%this.DV;       // y == 1/x mod 2^dbits
      // we really want the negative inverse, and -DV < y < DV
      return (y>0)?this.DV-y:-y;
    }

    // Montgomery reduction
    function Montgomery(m) {
      this.m = m;
      this.mp = m.invDigit();
      this.mpl = this.mp&0x7fff;
      this.mph = this.mp>>15;
      this.um = (1<<(m.DB-15))-1;
      this.mt2 = 2*m.t;
    }

    // xR mod m
    function montConvert(x) {
      var r = nbi();
      x.abs().dlShiftTo(this.m.t,r);
      r.divRemTo(this.m,null,r);
      if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
      return r;
    }

    // x/R mod m
    function montRevert(x) {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }

    // x = x/R mod m (HAC 14.32)
    function montReduce(x) {
      while(x.t <= this.mt2) // pad x so am has enough room later
        x[x.t++] = 0;
      for(var i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        var j = x[i]&0x7fff;
        var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
        // use am to combine the multiply-shift-add into one call
        j = i+this.m.t;
        x[j] += this.m.am(0,u0,x,i,0,this.m.t);
        // propagate carry
        while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
      }
      x.clamp();
      x.drShiftTo(this.m.t,x);
      if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = "x^2/R mod m"; x != r
    function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = "xy/R mod m"; x,y != r
    function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Montgomery.prototype.convert = montConvert;
    Montgomery.prototype.revert = montRevert;
    Montgomery.prototype.reduce = montReduce;
    Montgomery.prototype.mulTo = montMulTo;
    Montgomery.prototype.sqrTo = montSqrTo;

    // (protected) true iff this is even
    function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
    function bnpExp(e,z) {
      if(e > 0xffffffff || e < 1) return BigInteger.ONE;
      var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
      g.copyTo(r);
      while(--i >= 0) {
        z.sqrTo(r,r2);
        if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
        else { var t = r; r = r2; r2 = t; }
      }
      return z.revert(r);
    }

    // (public) this^e % m, 0 <= e < 2^32
    function bnModPowInt(e,m) {
      var z;
      if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
      return this.exp(e,z);
    }

    // protected
    BigInteger.prototype.copyTo = bnpCopyTo;
    BigInteger.prototype.fromInt = bnpFromInt;
    BigInteger.prototype.fromString = bnpFromString;
    BigInteger.prototype.clamp = bnpClamp;
    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    BigInteger.prototype.lShiftTo = bnpLShiftTo;
    BigInteger.prototype.rShiftTo = bnpRShiftTo;
    BigInteger.prototype.subTo = bnpSubTo;
    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    BigInteger.prototype.squareTo = bnpSquareTo;
    BigInteger.prototype.divRemTo = bnpDivRemTo;
    BigInteger.prototype.invDigit = bnpInvDigit;
    BigInteger.prototype.isEven = bnpIsEven;
    BigInteger.prototype.exp = bnpExp;

    // public
    BigInteger.prototype.toString = bnToString;
    BigInteger.prototype.negate = bnNegate;
    BigInteger.prototype.abs = bnAbs;
    BigInteger.prototype.compareTo = bnCompareTo;
    BigInteger.prototype.bitLength = bnBitLength;
    BigInteger.prototype.mod = bnMod;
    BigInteger.prototype.modPowInt = bnModPowInt;

    // "constants"
    BigInteger.ZERO = nbv(0);
    BigInteger.ONE = nbv(1);

    // Copyright (c) 2005-2009  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Extended JavaScript BN functions, required for RSA private ops.

    // Version 1.1: new BigInteger("0", 10) returns "proper" zero
    // Version 1.2: square() API, isProbablePrime fix

    // (public)
    function bnClone() { var r = nbi(); this.copyTo(r); return r; }

    // (public) return value as integer
    function bnIntValue() {
      if(this.s < 0) {
        if(this.t == 1) return this[0]-this.DV;
        else if(this.t == 0) return -1;
      }
      else if(this.t == 1) return this[0];
      else if(this.t == 0) return 0;
      // assumes 16 < DB < 32
      return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
    }

    // (public) return value as byte
    function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }

    // (public) return value as short (assumes DB>=16)
    function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }

    // (protected) return x s.t. r^x < DV
    function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

    // (public) 0 if this == 0, 1 if this > 0
    function bnSigNum() {
      if(this.s < 0) return -1;
      else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
      else return 1;
    }

    // (protected) convert to radix string
    function bnpToRadix(b) {
      if(b == null) b = 10;
      if(this.signum() == 0 || b < 2 || b > 36) return "0";
      var cs = this.chunkSize(b);
      var a = Math.pow(b,cs);
      var d = nbv(a), y = nbi(), z = nbi(), r = "";
      this.divRemTo(d,y,z);
      while(y.signum() > 0) {
        r = (a+z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d,y,z);
      }
      return z.intValue().toString(b) + r;
    }

    // (protected) convert from radix string
    function bnpFromRadix(s,b) {
      this.fromInt(0);
      if(b == null) b = 10;
      var cs = this.chunkSize(b);
      var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
      for(var i = 0; i < s.length; ++i) {
        var x = intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
          continue;
        }
        w = b*w+x;
        if(++j >= cs) {
          this.dMultiply(d);
          this.dAddOffset(w,0);
          j = 0;
          w = 0;
        }
      }
      if(j > 0) {
        this.dMultiply(Math.pow(b,j));
        this.dAddOffset(w,0);
      }
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) alternate constructor
    function bnpFromNumber(a,b,c) {
      if("number" == typeof b) {
        // new BigInteger(int,int,RNG)
        if(a < 2) this.fromInt(1);
        else {
          this.fromNumber(a,c);
          if(!this.testBit(a-1))    // force MSB set
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
          if(this.isEven()) this.dAddOffset(1,0); // force odd
          while(!this.isProbablePrime(b)) {
            this.dAddOffset(2,0);
            if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
          }
        }
      }
      else {
        // new BigInteger(int,RNG)
        var x = new Array(), t = a&7;
        x.length = (a>>3)+1;
        b.nextBytes(x);
        if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
        this.fromString(x,256);
      }
    }

    // (public) convert to bigendian byte array
    function bnToByteArray() {
      var i = this.t, r = new Array();
      r[0] = this.s;
      var p = this.DB-(i*this.DB)%8, d, k = 0;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
          r[k++] = d|(this.s<<(this.DB-p));
        while(i >= 0) {
          if(p < 8) {
            d = (this[i]&((1<<p)-1))<<(8-p);
            d |= this[--i]>>(p+=this.DB-8);
          }
          else {
            d = (this[i]>>(p-=8))&0xff;
            if(p <= 0) { p += this.DB; --i; }
          }
          if((d&0x80) != 0) d |= -256;
          if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
          if(k > 0 || d != this.s) r[k++] = d;
        }
      }
      return r;
    }

    function bnEquals(a) { return(this.compareTo(a)==0); }
    function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
    function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

    // (protected) r = this op a (bitwise)
    function bnpBitwiseTo(a,op,r) {
      var i, f, m = Math.min(a.t,this.t);
      for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
      if(a.t < this.t) {
        f = a.s&this.DM;
        for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
        r.t = this.t;
      }
      else {
        f = this.s&this.DM;
        for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
        r.t = a.t;
      }
      r.s = op(this.s,a.s);
      r.clamp();
    }

    // (public) this & a
    function op_and(x,y) { return x&y; }
    function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

    // (public) this | a
    function op_or(x,y) { return x|y; }
    function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

    // (public) this ^ a
    function op_xor(x,y) { return x^y; }
    function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

    // (public) this & ~a
    function op_andnot(x,y) { return x&~y; }
    function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

    // (public) ~this
    function bnNot() {
      var r = nbi();
      for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
      r.t = this.t;
      r.s = ~this.s;
      return r;
    }

    // (public) this << n
    function bnShiftLeft(n) {
      var r = nbi();
      if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
      return r;
    }

    // (public) this >> n
    function bnShiftRight(n) {
      var r = nbi();
      if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
      return r;
    }

    // return index of lowest 1-bit in x, x < 2^31
    function lbit(x) {
      if(x == 0) return -1;
      var r = 0;
      if((x&0xffff) == 0) { x >>= 16; r += 16; }
      if((x&0xff) == 0) { x >>= 8; r += 8; }
      if((x&0xf) == 0) { x >>= 4; r += 4; }
      if((x&3) == 0) { x >>= 2; r += 2; }
      if((x&1) == 0) ++r;
      return r;
    }

    // (public) returns index of lowest 1-bit (or -1 if none)
    function bnGetLowestSetBit() {
      for(var i = 0; i < this.t; ++i)
        if(this[i] != 0) return i*this.DB+lbit(this[i]);
      if(this.s < 0) return this.t*this.DB;
      return -1;
    }

    // return number of 1 bits in x
    function cbit(x) {
      var r = 0;
      while(x != 0) { x &= x-1; ++r; }
      return r;
    }

    // (public) return number of set bits
    function bnBitCount() {
      var r = 0, x = this.s&this.DM;
      for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
      return r;
    }

    // (public) true iff nth bit is set
    function bnTestBit(n) {
      var j = Math.floor(n/this.DB);
      if(j >= this.t) return(this.s!=0);
      return((this[j]&(1<<(n%this.DB)))!=0);
    }

    // (protected) this op (1<<n)
    function bnpChangeBit(n,op) {
      var r = BigInteger.ONE.shiftLeft(n);
      this.bitwiseTo(r,op,r);
      return r;
    }

    // (public) this | (1<<n)
    function bnSetBit(n) { return this.changeBit(n,op_or); }

    // (public) this & ~(1<<n)
    function bnClearBit(n) { return this.changeBit(n,op_andnot); }

    // (public) this ^ (1<<n)
    function bnFlipBit(n) { return this.changeBit(n,op_xor); }

    // (protected) r = this + a
    function bnpAddTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]+a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c += a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c += a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += a.s;
      }
      r.s = (c<0)?-1:0;
      if(c > 0) r[i++] = c;
      else if(c < -1) r[i++] = this.DV+c;
      r.t = i;
      r.clamp();
    }

    // (public) this + a
    function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

    // (public) this - a
    function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

    // (public) this * a
    function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

    // (public) this^2
    function bnSquare() { var r = nbi(); this.squareTo(r); return r; }

    // (public) this / a
    function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

    // (public) this % a
    function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

    // (public) [this/a,this%a]
    function bnDivideAndRemainder(a) {
      var q = nbi(), r = nbi();
      this.divRemTo(a,q,r);
      return new Array(q,r);
    }

    // (protected) this *= n, this >= 0, 1 < n < DV
    function bnpDMultiply(n) {
      this[this.t] = this.am(0,n-1,this,0,0,this.t);
      ++this.t;
      this.clamp();
    }

    // (protected) this += n << w words, this >= 0
    function bnpDAddOffset(n,w) {
      if(n == 0) return;
      while(this.t <= w) this[this.t++] = 0;
      this[w] += n;
      while(this[w] >= this.DV) {
        this[w] -= this.DV;
        if(++w >= this.t) this[this.t++] = 0;
        ++this[w];
      }
    }

    // A "null" reducer
    function NullExp() {}
    function nNop(x) { return x; }
    function nMulTo(x,y,r) { x.multiplyTo(y,r); }
    function nSqrTo(x,r) { x.squareTo(r); }

    NullExp.prototype.convert = nNop;
    NullExp.prototype.revert = nNop;
    NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.sqrTo = nSqrTo;

    // (public) this^e
    function bnPow(e) { return this.exp(e,new NullExp()); }

    // (protected) r = lower n words of "this * a", a.t <= n
    // "this" should be the larger one if appropriate.
    function bnpMultiplyLowerTo(a,n,r) {
      var i = Math.min(this.t+a.t,n);
      r.s = 0; // assumes a,this >= 0
      r.t = i;
      while(i > 0) r[--i] = 0;
      var j;
      for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
      for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
      r.clamp();
    }

    // (protected) r = "this * a" without lower n words, n > 0
    // "this" should be the larger one if appropriate.
    function bnpMultiplyUpperTo(a,n,r) {
      --n;
      var i = r.t = this.t+a.t-n;
      r.s = 0; // assumes a,this >= 0
      while(--i >= 0) r[i] = 0;
      for(i = Math.max(n-this.t,0); i < a.t; ++i)
        r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
      r.clamp();
      r.drShiftTo(1,r);
    }

    // Barrett modular reduction
    function Barrett(m) {
      // setup Barrett
      this.r2 = nbi();
      this.q3 = nbi();
      BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
      this.mu = this.r2.divide(m);
      this.m = m;
    }

    function barrettConvert(x) {
      if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
      else if(x.compareTo(this.m) < 0) return x;
      else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
    }

    function barrettRevert(x) { return x; }

    // x = x mod m (HAC 14.42)
    function barrettReduce(x) {
      x.drShiftTo(this.m.t-1,this.r2);
      if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
      this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
      this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
      while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
      x.subTo(this.r2,x);
      while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = x^2 mod m; x != r
    function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = x*y mod m; x,y != r
    function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.reduce = barrettReduce;
    Barrett.prototype.mulTo = barrettMulTo;
    Barrett.prototype.sqrTo = barrettSqrTo;

    // (public) this^e % m (HAC 14.85)
    function bnModPow(e,m) {
      var i = e.bitLength(), k, r = nbv(1), z;
      if(i <= 0) return r;
      else if(i < 18) k = 1;
      else if(i < 48) k = 3;
      else if(i < 144) k = 4;
      else if(i < 768) k = 5;
      else k = 6;
      if(i < 8)
        z = new Classic(m);
      else if(m.isEven())
        z = new Barrett(m);
      else
        z = new Montgomery(m);

      // precomputation
      var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
      g[1] = z.convert(this);
      if(k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1],g2);
        while(n <= km) {
          g[n] = nbi();
          z.mulTo(g2,g[n-2],g[n]);
          n += 2;
        }
      }

      var j = e.t-1, w, is1 = true, r2 = nbi(), t;
      i = nbits(e[j])-1;
      while(j >= 0) {
        if(i >= k1) w = (e[j]>>(i-k1))&km;
        else {
          w = (e[j]&((1<<(i+1))-1))<<(k1-i);
          if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
        }

        n = k;
        while((w&1) == 0) { w >>= 1; --n; }
        if((i -= n) < 0) { i += this.DB; --j; }
        if(is1) {    // ret == 1, don't bother squaring or multiplying it
          g[w].copyTo(r);
          is1 = false;
        }
        else {
          while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
          if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
          z.mulTo(r2,g[w],r);
        }

        while(j >= 0 && (e[j]&(1<<i)) == 0) {
          z.sqrTo(r,r2); t = r; r = r2; r2 = t;
          if(--i < 0) { i = this.DB-1; --j; }
        }
      }
      return z.revert(r);
    }

    // (public) gcd(this,a) (HAC 14.54)
    function bnGCD(a) {
      var x = (this.s<0)?this.negate():this.clone();
      var y = (a.s<0)?a.negate():a.clone();
      if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
      var i = x.getLowestSetBit(), g = y.getLowestSetBit();
      if(g < 0) return x;
      if(i < g) g = i;
      if(g > 0) {
        x.rShiftTo(g,x);
        y.rShiftTo(g,y);
      }
      while(x.signum() > 0) {
        if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
        if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
        if(x.compareTo(y) >= 0) {
          x.subTo(y,x);
          x.rShiftTo(1,x);
        }
        else {
          y.subTo(x,y);
          y.rShiftTo(1,y);
        }
      }
      if(g > 0) y.lShiftTo(g,y);
      return y;
    }

    // (protected) this % n, n < 2^26
    function bnpModInt(n) {
      if(n <= 0) return 0;
      var d = this.DV%n, r = (this.s<0)?n-1:0;
      if(this.t > 0)
        if(d == 0) r = this[0]%n;
        else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
      return r;
    }

    // (public) 1/this % m (HAC 14.61)
    function bnModInverse(m) {
      var ac = m.isEven();
      if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
      var u = m.clone(), v = this.clone();
      var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
      while(u.signum() != 0) {
        while(u.isEven()) {
          u.rShiftTo(1,u);
          if(ac) {
            if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
            a.rShiftTo(1,a);
          }
          else if(!b.isEven()) b.subTo(m,b);
          b.rShiftTo(1,b);
        }
        while(v.isEven()) {
          v.rShiftTo(1,v);
          if(ac) {
            if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
            c.rShiftTo(1,c);
          }
          else if(!d.isEven()) d.subTo(m,d);
          d.rShiftTo(1,d);
        }
        if(u.compareTo(v) >= 0) {
          u.subTo(v,u);
          if(ac) a.subTo(c,a);
          b.subTo(d,b);
        }
        else {
          v.subTo(u,v);
          if(ac) c.subTo(a,c);
          d.subTo(b,d);
        }
      }
      if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
      if(d.compareTo(m) >= 0) return d.subtract(m);
      if(d.signum() < 0) d.addTo(m,d); else return d;
      if(d.signum() < 0) return d.add(m); else return d;
    }

    var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
    var lplim = (1<<26)/lowprimes[lowprimes.length-1];

    // (public) test primality with certainty >= 1-.5^t
    function bnIsProbablePrime(t) {
      var i, x = this.abs();
      if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
        for(i = 0; i < lowprimes.length; ++i)
          if(x[0] == lowprimes[i]) return true;
        return false;
      }
      if(x.isEven()) return false;
      i = 1;
      while(i < lowprimes.length) {
        var m = lowprimes[i], j = i+1;
        while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
        m = x.modInt(m);
        while(i < j) if(m%lowprimes[i++] == 0) return false;
      }
      return x.millerRabin(t);
    }

    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
    function bnpMillerRabin(t) {
      var n1 = this.subtract(BigInteger.ONE);
      var k = n1.getLowestSetBit();
      if(k <= 0) return false;
      var r = n1.shiftRight(k);
      t = (t+1)>>1;
      if(t > lowprimes.length) t = lowprimes.length;
      var a = nbi();
      for(var i = 0; i < t; ++i) {
        //Pick bases at random, instead of starting at 2
        a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
        var y = a.modPow(r,this);
        if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
          var j = 1;
          while(j++ < k && y.compareTo(n1) != 0) {
            y = y.modPowInt(2,this);
            if(y.compareTo(BigInteger.ONE) == 0) return false;
          }
          if(y.compareTo(n1) != 0) return false;
        }
      }
      return true;
    }

    // protected
    BigInteger.prototype.chunkSize = bnpChunkSize;
    BigInteger.prototype.toRadix = bnpToRadix;
    BigInteger.prototype.fromRadix = bnpFromRadix;
    BigInteger.prototype.fromNumber = bnpFromNumber;
    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    BigInteger.prototype.changeBit = bnpChangeBit;
    BigInteger.prototype.addTo = bnpAddTo;
    BigInteger.prototype.dMultiply = bnpDMultiply;
    BigInteger.prototype.dAddOffset = bnpDAddOffset;
    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    BigInteger.prototype.modInt = bnpModInt;
    BigInteger.prototype.millerRabin = bnpMillerRabin;

    // public
    BigInteger.prototype.clone = bnClone;
    BigInteger.prototype.intValue = bnIntValue;
    BigInteger.prototype.byteValue = bnByteValue;
    BigInteger.prototype.shortValue = bnShortValue;
    BigInteger.prototype.signum = bnSigNum;
    BigInteger.prototype.toByteArray = bnToByteArray;
    BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.min = bnMin;
    BigInteger.prototype.max = bnMax;
    BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.or = bnOr;
    BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.not = bnNot;
    BigInteger.prototype.shiftLeft = bnShiftLeft;
    BigInteger.prototype.shiftRight = bnShiftRight;
    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    BigInteger.prototype.bitCount = bnBitCount;
    BigInteger.prototype.testBit = bnTestBit;
    BigInteger.prototype.setBit = bnSetBit;
    BigInteger.prototype.clearBit = bnClearBit;
    BigInteger.prototype.flipBit = bnFlipBit;
    BigInteger.prototype.add = bnAdd;
    BigInteger.prototype.subtract = bnSubtract;
    BigInteger.prototype.multiply = bnMultiply;
    BigInteger.prototype.divide = bnDivide;
    BigInteger.prototype.remainder = bnRemainder;
    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    BigInteger.prototype.modPow = bnModPow;
    BigInteger.prototype.modInverse = bnModInverse;
    BigInteger.prototype.pow = bnPow;
    BigInteger.prototype.gcd = bnGCD;
    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

    // JSBN-specific extension
    BigInteger.prototype.square = bnSquare;

    // Expose the Barrett function
    BigInteger.prototype.Barrett = Barrett

    // BigInteger interfaces not implemented in jsbn:

    // BigInteger(int signum, byte[] magnitude)
    // double doubleValue()
    // float floatValue()
    // int hashCode()
    // long longValue()
    // static BigInteger valueOf(long val)

    // Random number generator - requires a PRNG backend, e.g. prng4.js

    // For best results, put code like
    // <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
    // in your main HTML document.

    var rng_state;
    var rng_pool;
    var rng_pptr;

    // Mix in a 32-bit integer into the pool
    function rng_seed_int(x) {
      rng_pool[rng_pptr++] ^= x & 255;
      rng_pool[rng_pptr++] ^= (x >> 8) & 255;
      rng_pool[rng_pptr++] ^= (x >> 16) & 255;
      rng_pool[rng_pptr++] ^= (x >> 24) & 255;
      if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
    }

    // Mix in the current time (w/milliseconds) into the pool
    function rng_seed_time() {
      rng_seed_int(new Date().getTime());
    }

    // Initialize the pool with junk if needed.
    if(rng_pool == null) {
      rng_pool = new Array();
      rng_pptr = 0;
      var t;
      if(typeof window !== "undefined" && window.crypto) {
        if (window.crypto.getRandomValues) {
          // Use webcrypto if available
          var ua = new Uint8Array(32);
          window.crypto.getRandomValues(ua);
          for(t = 0; t < 32; ++t)
            rng_pool[rng_pptr++] = ua[t];
        }
        else if(navigator.appName == "Netscape" && navigator.appVersion < "5") {
          // Extract entropy (256 bits) from NS4 RNG if available
          var z = window.crypto.random(32);
          for(t = 0; t < z.length; ++t)
            rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
        }
      }
      while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
        t = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = t >>> 8;
        rng_pool[rng_pptr++] = t & 255;
      }
      rng_pptr = 0;
      rng_seed_time();
      //rng_seed_int(window.screenX);
      //rng_seed_int(window.screenY);
    }

    function rng_get_byte() {
      if(rng_state == null) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);
        for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
          rng_pool[rng_pptr] = 0;
        rng_pptr = 0;
        //rng_pool = null;
      }
      // TODO: allow reseeding after first request
      return rng_state.next();
    }

    function rng_get_bytes(ba) {
      var i;
      for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
    }

    function SecureRandom() {}

    SecureRandom.prototype.nextBytes = rng_get_bytes;

    // prng4.js - uses Arcfour as a PRNG

    function Arcfour() {
      this.i = 0;
      this.j = 0;
      this.S = new Array();
    }

    // Initialize arcfour context from key, an array of ints, each from [0..255]
    function ARC4init(key) {
      var i, j, t;
      for(i = 0; i < 256; ++i)
        this.S[i] = i;
      j = 0;
      for(i = 0; i < 256; ++i) {
        j = (j + this.S[i] + key[i % key.length]) & 255;
        t = this.S[i];
        this.S[i] = this.S[j];
        this.S[j] = t;
      }
      this.i = 0;
      this.j = 0;
    }

    function ARC4next() {
      var t;
      this.i = (this.i + 1) & 255;
      this.j = (this.j + this.S[this.i]) & 255;
      t = this.S[this.i];
      this.S[this.i] = this.S[this.j];
      this.S[this.j] = t;
      return this.S[(t + this.S[this.i]) & 255];
    }

    Arcfour.prototype.init = ARC4init;
    Arcfour.prototype.next = ARC4next;

    // Plug in your RNG constructor here
    function prng_newstate() {
      return new Arcfour();
    }

    // Pool size must be a multiple of 4 and greater than 32.
    // An array of bytes the size of the pool will be passed to init()
    var rng_psize = 256;

    if (true) {
        exports = module.exports = {
            default: BigInteger,
            BigInteger: BigInteger,
            SecureRandom: SecureRandom,
        };
    } else {}

}).call(this);


/***/ }),

/***/ "./src/AccessTokenEvents.js":
/*!**********************************!*\
  !*** ./src/AccessTokenEvents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccessTokenEvents = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Timer = __webpack_require__(/*! ./Timer.js */ "./src/Timer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultAccessTokenExpiringNotificationTime = 60; // seconds

var AccessTokenEvents = exports.AccessTokenEvents = function () {
    function AccessTokenEvents() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
            accessTokenExpiringNotificationTime = _ref$accessTokenExpir === undefined ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
            _ref$accessTokenExpir2 = _ref.accessTokenExpiringTimer,
            accessTokenExpiringTimer = _ref$accessTokenExpir2 === undefined ? new _Timer.Timer("Access token expiring") : _ref$accessTokenExpir2,
            _ref$accessTokenExpir3 = _ref.accessTokenExpiredTimer,
            accessTokenExpiredTimer = _ref$accessTokenExpir3 === undefined ? new _Timer.Timer("Access token expired") : _ref$accessTokenExpir3;

        _classCallCheck(this, AccessTokenEvents);

        this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;

        this._accessTokenExpiring = accessTokenExpiringTimer;
        this._accessTokenExpired = accessTokenExpiredTimer;
    }

    AccessTokenEvents.prototype.load = function load(container) {
        // only register events if there's an access token and it has an expiration
        if (container.access_token && container.expires_in !== undefined) {
            var duration = container.expires_in;
            _Log.Log.debug("AccessTokenEvents.load: access token present, remaining duration:", duration);

            if (duration > 0) {
                // only register expiring if we still have time
                var expiring = duration - this._accessTokenExpiringNotificationTime;
                if (expiring <= 0) {
                    expiring = 1;
                }

                _Log.Log.debug("AccessTokenEvents.load: registering expiring timer in:", expiring);
                this._accessTokenExpiring.init(expiring);
            } else {
                _Log.Log.debug("AccessTokenEvents.load: canceling existing expiring timer becase we're past expiration.");
                this._accessTokenExpiring.cancel();
            }

            // if it's negative, it will still fire
            var expired = duration + 1;
            _Log.Log.debug("AccessTokenEvents.load: registering expired timer in:", expired);
            this._accessTokenExpired.init(expired);
        } else {
            this._accessTokenExpiring.cancel();
            this._accessTokenExpired.cancel();
        }
    };

    AccessTokenEvents.prototype.unload = function unload() {
        _Log.Log.debug("AccessTokenEvents.unload: canceling existing access token timers");
        this._accessTokenExpiring.cancel();
        this._accessTokenExpired.cancel();
    };

    AccessTokenEvents.prototype.addAccessTokenExpiring = function addAccessTokenExpiring(cb) {
        this._accessTokenExpiring.addHandler(cb);
    };

    AccessTokenEvents.prototype.removeAccessTokenExpiring = function removeAccessTokenExpiring(cb) {
        this._accessTokenExpiring.removeHandler(cb);
    };

    AccessTokenEvents.prototype.addAccessTokenExpired = function addAccessTokenExpired(cb) {
        this._accessTokenExpired.addHandler(cb);
    };

    AccessTokenEvents.prototype.removeAccessTokenExpired = function removeAccessTokenExpired(cb) {
        this._accessTokenExpired.removeHandler(cb);
    };

    return AccessTokenEvents;
}();

/***/ }),

/***/ "./src/CheckSessionIFrame.js":
/*!***********************************!*\
  !*** ./src/CheckSessionIFrame.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckSessionIFrame = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultInterval = 2000;

var CheckSessionIFrame = exports.CheckSessionIFrame = function () {
    function CheckSessionIFrame(callback, client_id, url, interval) {
        var stopOnError = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

        _classCallCheck(this, CheckSessionIFrame);

        this._callback = callback;
        this._client_id = client_id;
        this._url = url;
        this._interval = interval || DefaultInterval;
        this._stopOnError = stopOnError;

        var idx = url.indexOf("/", url.indexOf("//") + 2);
        this._frame_origin = url.substr(0, idx);

        this._frame = window.document.createElement("iframe");

        // shotgun approach
        this._frame.style.visibility = "hidden";
        this._frame.style.position = "absolute";
        this._frame.style.display = "none";
        this._frame.style.width = 0;
        this._frame.style.height = 0;

        this._frame.src = url;
    }

    CheckSessionIFrame.prototype.load = function load() {
        var _this = this;

        return new Promise(function (resolve) {
            _this._frame.onload = function () {
                resolve();
            };

            window.document.body.appendChild(_this._frame);
            _this._boundMessageEvent = _this._message.bind(_this);
            window.addEventListener("message", _this._boundMessageEvent, false);
        });
    };

    CheckSessionIFrame.prototype._message = function _message(e) {
        if (e.origin === this._frame_origin && e.source === this._frame.contentWindow) {
            if (e.data === "error") {
                _Log.Log.error("CheckSessionIFrame: error message from check session op iframe");
                if (this._stopOnError) {
                    this.stop();
                }
            } else if (e.data === "changed") {
                _Log.Log.debug("CheckSessionIFrame: changed message from check session op iframe");
                this.stop();
                this._callback();
            } else {
                _Log.Log.debug("CheckSessionIFrame: " + e.data + " message from check session op iframe");
            }
        }
    };

    CheckSessionIFrame.prototype.start = function start(session_state) {
        var _this2 = this;

        if (this._session_state !== session_state) {
            _Log.Log.debug("CheckSessionIFrame.start");

            this.stop();

            this._session_state = session_state;

            var send = function send() {
                _this2._frame.contentWindow.postMessage(_this2._client_id + " " + _this2._session_state, _this2._frame_origin);
            };

            // trigger now
            send();

            // and setup timer
            this._timer = window.setInterval(send, this._interval);
        }
    };

    CheckSessionIFrame.prototype.stop = function stop() {
        this._session_state = null;

        if (this._timer) {
            _Log.Log.debug("CheckSessionIFrame.stop");

            window.clearInterval(this._timer);
            this._timer = null;
        }
    };

    return CheckSessionIFrame;
}();

/***/ }),

/***/ "./src/CordovaIFrameNavigator.js":
/*!***************************************!*\
  !*** ./src/CordovaIFrameNavigator.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaIFrameNavigator = undefined;

var _CordovaPopupWindow = __webpack_require__(/*! ./CordovaPopupWindow.js */ "./src/CordovaPopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var CordovaIFrameNavigator = exports.CordovaIFrameNavigator = function () {
    function CordovaIFrameNavigator() {
        _classCallCheck(this, CordovaIFrameNavigator);
    }

    CordovaIFrameNavigator.prototype.prepare = function prepare(params) {
        params.popupWindowFeatures = 'hidden=yes';
        var popup = new _CordovaPopupWindow.CordovaPopupWindow(params);
        return Promise.resolve(popup);
    };

    return CordovaIFrameNavigator;
}();

/***/ }),

/***/ "./src/CordovaPopupNavigator.js":
/*!**************************************!*\
  !*** ./src/CordovaPopupNavigator.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaPopupNavigator = undefined;

var _CordovaPopupWindow = __webpack_require__(/*! ./CordovaPopupWindow.js */ "./src/CordovaPopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var CordovaPopupNavigator = exports.CordovaPopupNavigator = function () {
    function CordovaPopupNavigator() {
        _classCallCheck(this, CordovaPopupNavigator);
    }

    CordovaPopupNavigator.prototype.prepare = function prepare(params) {
        var popup = new _CordovaPopupWindow.CordovaPopupWindow(params);
        return Promise.resolve(popup);
    };

    return CordovaPopupNavigator;
}();

/***/ }),

/***/ "./src/CordovaPopupWindow.js":
/*!***********************************!*\
  !*** ./src/CordovaPopupWindow.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaPopupWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultPopupFeatures = 'location=no,toolbar=no,zoom=no';
var DefaultPopupTarget = "_blank";

var CordovaPopupWindow = exports.CordovaPopupWindow = function () {
    function CordovaPopupWindow(params) {
        var _this = this;

        _classCallCheck(this, CordovaPopupWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        this.features = params.popupWindowFeatures || DefaultPopupFeatures;
        this.target = params.popupWindowTarget || DefaultPopupTarget;

        this.redirect_uri = params.startUrl;
        _Log.Log.debug("CordovaPopupWindow.ctor: redirect_uri: " + this.redirect_uri);
    }

    CordovaPopupWindow.prototype._isInAppBrowserInstalled = function _isInAppBrowserInstalled(cordovaMetadata) {
        return ["cordova-plugin-inappbrowser", "cordova-plugin-inappbrowser.inappbrowser", "org.apache.cordova.inappbrowser"].some(function (name) {
            return cordovaMetadata.hasOwnProperty(name);
        });
    };

    CordovaPopupWindow.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            this._error("No url provided");
        } else {
            if (!window.cordova) {
                return this._error("cordova is undefined");
            }

            var cordovaMetadata = window.cordova.require("cordova/plugin_list").metadata;
            if (this._isInAppBrowserInstalled(cordovaMetadata) === false) {
                return this._error("InAppBrowser plugin not found");
            }
            this._popup = cordova.InAppBrowser.open(params.url, this.target, this.features);
            if (this._popup) {
                _Log.Log.debug("CordovaPopupWindow.navigate: popup successfully created");

                this._exitCallbackEvent = this._exitCallback.bind(this);
                this._loadStartCallbackEvent = this._loadStartCallback.bind(this);

                this._popup.addEventListener("exit", this._exitCallbackEvent, false);
                this._popup.addEventListener("loadstart", this._loadStartCallbackEvent, false);
            } else {
                this._error("Error opening popup window");
            }
        }
        return this.promise;
    };

    CordovaPopupWindow.prototype._loadStartCallback = function _loadStartCallback(event) {
        if (event.url.indexOf(this.redirect_uri) === 0) {
            this._success({ url: event.url });
        }
    };

    CordovaPopupWindow.prototype._exitCallback = function _exitCallback(message) {
        this._error(message);
    };

    CordovaPopupWindow.prototype._success = function _success(data) {
        this._cleanup();

        _Log.Log.debug("CordovaPopupWindow: Successful response from cordova popup window");
        this._resolve(data);
    };

    CordovaPopupWindow.prototype._error = function _error(message) {
        this._cleanup();

        _Log.Log.error(message);
        this._reject(new Error(message));
    };

    CordovaPopupWindow.prototype.close = function close() {
        this._cleanup();
    };

    CordovaPopupWindow.prototype._cleanup = function _cleanup() {
        if (this._popup) {
            _Log.Log.debug("CordovaPopupWindow: cleaning up popup");
            this._popup.removeEventListener("exit", this._exitCallbackEvent, false);
            this._popup.removeEventListener("loadstart", this._loadStartCallbackEvent, false);
            this._popup.close();
        }
        this._popup = null;
    };

    _createClass(CordovaPopupWindow, [{
        key: 'promise',
        get: function get() {
            return this._promise;
        }
    }]);

    return CordovaPopupWindow;
}();

/***/ }),

/***/ "./src/ErrorResponse.js":
/*!******************************!*\
  !*** ./src/ErrorResponse.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.ErrorResponse = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var ErrorResponse = exports.ErrorResponse = function (_Error) {
        _inherits(ErrorResponse, _Error);

        function ErrorResponse() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    error = _ref.error,
                    error_description = _ref.error_description,
                    error_uri = _ref.error_uri,
                    state = _ref.state,
                    session_state = _ref.session_state;

                _classCallCheck(this, ErrorResponse);

                if (!error) {
                        _Log.Log.error("No error passed to ErrorResponse");
                        throw new Error("error");
                }

                var _this = _possibleConstructorReturn(this, _Error.call(this, error_description || error));

                _this.name = "ErrorResponse";

                _this.error = error;
                _this.error_description = error_description;
                _this.error_uri = error_uri;

                _this.state = state;
                _this.session_state = session_state;
                return _this;
        }

        return ErrorResponse;
}(Error);

/***/ }),

/***/ "./src/Event.js":
/*!**********************!*\
  !*** ./src/Event.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Event = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var Event = exports.Event = function () {
    function Event(name) {
        _classCallCheck(this, Event);

        this._name = name;
        this._callbacks = [];
    }

    Event.prototype.addHandler = function addHandler(cb) {
        this._callbacks.push(cb);
    };

    Event.prototype.removeHandler = function removeHandler(cb) {
        var idx = this._callbacks.findIndex(function (item) {
            return item === cb;
        });
        if (idx >= 0) {
            this._callbacks.splice(idx, 1);
        }
    };

    Event.prototype.raise = function raise() {
        _Log.Log.debug("Event: Raising event: " + this._name);
        for (var i = 0; i < this._callbacks.length; i++) {
            var _callbacks;

            (_callbacks = this._callbacks)[i].apply(_callbacks, arguments);
        }
    };

    return Event;
}();

/***/ }),

/***/ "./src/Global.js":
/*!***********************!*\
  !*** ./src/Global.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var timer = {
    setInterval: function (_setInterval) {
        function setInterval(_x, _x2) {
            return _setInterval.apply(this, arguments);
        }

        setInterval.toString = function () {
            return _setInterval.toString();
        };

        return setInterval;
    }(function (cb, duration) {
        return setInterval(cb, duration);
    }),
    clearInterval: function (_clearInterval) {
        function clearInterval(_x3) {
            return _clearInterval.apply(this, arguments);
        }

        clearInterval.toString = function () {
            return _clearInterval.toString();
        };

        return clearInterval;
    }(function (handle) {
        return clearInterval(handle);
    })
};

var testing = false;
var request = null;

var Global = exports.Global = function () {
    function Global() {
        _classCallCheck(this, Global);
    }

    Global._testing = function _testing() {
        testing = true;
    };

    Global.setXMLHttpRequest = function setXMLHttpRequest(newRequest) {
        request = newRequest;
    };

    _createClass(Global, null, [{
        key: 'location',
        get: function get() {
            if (!testing) {
                return location;
            }
        }
    }, {
        key: 'localStorage',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return localStorage;
            }
        }
    }, {
        key: 'sessionStorage',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return sessionStorage;
            }
        }
    }, {
        key: 'XMLHttpRequest',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return request || XMLHttpRequest;
            }
        }
    }, {
        key: 'timer',
        get: function get() {
            if (!testing) {
                return timer;
            }
        }
    }]);

    return Global;
}();

/***/ }),

/***/ "./src/IFrameNavigator.js":
/*!********************************!*\
  !*** ./src/IFrameNavigator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFrameNavigator = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _IFrameWindow = __webpack_require__(/*! ./IFrameWindow.js */ "./src/IFrameWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var IFrameNavigator = exports.IFrameNavigator = function () {
    function IFrameNavigator() {
        _classCallCheck(this, IFrameNavigator);
    }

    IFrameNavigator.prototype.prepare = function prepare(params) {
        var frame = new _IFrameWindow.IFrameWindow(params);
        return Promise.resolve(frame);
    };

    IFrameNavigator.prototype.callback = function callback(url) {
        _Log.Log.debug("IFrameNavigator.callback");

        try {
            _IFrameWindow.IFrameWindow.notifyParent(url);
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    };

    return IFrameNavigator;
}();

/***/ }),

/***/ "./src/IFrameWindow.js":
/*!*****************************!*\
  !*** ./src/IFrameWindow.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFrameWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultTimeout = 10000;

var IFrameWindow = exports.IFrameWindow = function () {
    function IFrameWindow(params) {
        var _this = this;

        _classCallCheck(this, IFrameWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        this._boundMessageEvent = this._message.bind(this);
        window.addEventListener("message", this._boundMessageEvent, false);

        this._frame = window.document.createElement("iframe");

        // shotgun approach
        this._frame.style.visibility = "hidden";
        this._frame.style.position = "absolute";
        this._frame.style.display = "none";
        this._frame.style.width = 0;
        this._frame.style.height = 0;

        window.document.body.appendChild(this._frame);
    }

    IFrameWindow.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            this._error("No url provided");
        } else {
            var timeout = params.silentRequestTimeout || DefaultTimeout;
            _Log.Log.debug("IFrameWindow.navigate: Using timeout of:", timeout);
            this._timer = window.setTimeout(this._timeout.bind(this), timeout);
            this._frame.src = params.url;
        }

        return this.promise;
    };

    IFrameWindow.prototype._success = function _success(data) {
        this._cleanup();

        _Log.Log.debug("IFrameWindow: Successful response from frame window");
        this._resolve(data);
    };

    IFrameWindow.prototype._error = function _error(message) {
        this._cleanup();

        _Log.Log.error(message);
        this._reject(new Error(message));
    };

    IFrameWindow.prototype.close = function close() {
        this._cleanup();
    };

    IFrameWindow.prototype._cleanup = function _cleanup() {
        if (this._frame) {
            _Log.Log.debug("IFrameWindow: cleanup");

            window.removeEventListener("message", this._boundMessageEvent, false);
            window.clearTimeout(this._timer);
            window.document.body.removeChild(this._frame);

            this._timer = null;
            this._frame = null;
            this._boundMessageEvent = null;
        }
    };

    IFrameWindow.prototype._timeout = function _timeout() {
        _Log.Log.debug("IFrameWindow.timeout");
        this._error("Frame window timed out");
    };

    IFrameWindow.prototype._message = function _message(e) {
        _Log.Log.debug("IFrameWindow.message");

        if (this._timer && e.origin === this._origin && e.source === this._frame.contentWindow) {
            var url = e.data;
            if (url) {
                this._success({ url: url });
            } else {
                this._error("Invalid response from frame");
            }
        }
    };

    IFrameWindow.notifyParent = function notifyParent(url) {
        _Log.Log.debug("IFrameWindow.notifyParent");
        url = url || window.location.href;
        if (url) {
            _Log.Log.debug("IFrameWindow.notifyParent: posting url message to parent");
            console.log('Posting message to parent "' + url + '" at location: "' + location.protocol + "//" + location.host + '"');
            window.parent.postMessage(url, location.protocol + "//" + location.host);
        }
    };

    _createClass(IFrameWindow, [{
        key: "promise",
        get: function get() {
            return this._promise;
        }
    }, {
        key: "_origin",
        get: function get() {
            return location.protocol + "//" + location.host;
        }
    }]);

    return IFrameWindow;
}();

/***/ }),

/***/ "./src/InMemoryWebStorage.js":
/*!***********************************!*\
  !*** ./src/InMemoryWebStorage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InMemoryWebStorage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InMemoryWebStorage = exports.InMemoryWebStorage = function () {
    function InMemoryWebStorage() {
        _classCallCheck(this, InMemoryWebStorage);

        this._data = {};
    }

    InMemoryWebStorage.prototype.getItem = function getItem(key) {
        _Log.Log.debug("InMemoryWebStorage.getItem", key);
        return this._data[key];
    };

    InMemoryWebStorage.prototype.setItem = function setItem(key, value) {
        _Log.Log.debug("InMemoryWebStorage.setItem", key);
        this._data[key] = value;
    };

    InMemoryWebStorage.prototype.removeItem = function removeItem(key) {
        _Log.Log.debug("InMemoryWebStorage.removeItem", key);
        delete this._data[key];
    };

    InMemoryWebStorage.prototype.key = function key(index) {
        return Object.getOwnPropertyNames(this._data)[index];
    };

    _createClass(InMemoryWebStorage, [{
        key: "length",
        get: function get() {
            return Object.getOwnPropertyNames(this._data).length;
        }
    }]);

    return InMemoryWebStorage;
}();

/***/ }),

/***/ "./src/JoseUtilImpl.js":
/*!*****************************!*\
  !*** ./src/JoseUtilImpl.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getJoseUtil;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

function getJoseUtil(_ref) {
    var jws = _ref.jws,
        KeyUtil = _ref.KeyUtil,
        X509 = _ref.X509,
        crypto = _ref.crypto,
        hextob64u = _ref.hextob64u,
        b64tohex = _ref.b64tohex,
        AllowedSigningAlgs = _ref.AllowedSigningAlgs;

    return function () {
        function JoseUtil() {
            _classCallCheck(this, JoseUtil);
        }

        JoseUtil.parseJwt = function parseJwt(jwt) {
            _Log.Log.debug("JoseUtil.parseJwt");
            try {
                var token = jws.JWS.parse(jwt);
                return {
                    header: token.headerObj,
                    payload: token.payloadObj
                };
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        JoseUtil.validateJwt = function validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive) {
            _Log.Log.debug("JoseUtil.validateJwt");

            try {
                if (key.kty === "RSA") {
                    if (key.e && key.n) {
                        key = KeyUtil.getKey(key);
                    } else if (key.x5c && key.x5c.length) {
                        var hex = b64tohex(key.x5c[0]);
                        key = X509.getPublicKeyFromCertHex(hex);
                    } else {
                        _Log.Log.error("JoseUtil.validateJwt: RSA key missing key material", key);
                        return Promise.reject(new Error("RSA key missing key material"));
                    }
                } else if (key.kty === "EC") {
                    if (key.crv && key.x && key.y) {
                        key = KeyUtil.getKey(key);
                    } else {
                        _Log.Log.error("JoseUtil.validateJwt: EC key missing key material", key);
                        return Promise.reject(new Error("EC key missing key material"));
                    }
                } else {
                    _Log.Log.error("JoseUtil.validateJwt: Unsupported key type", key && key.kty);
                    return Promise.reject(new Error( true && key.kty));
                }

                return JoseUtil._validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive);
            } catch (e) {
                _Log.Log.error(e && e.message || e);
                return Promise.reject("JWT validation failed");
            }
        };

        JoseUtil.validateJwtAttributes = function validateJwtAttributes(jwt, issuer, audience, clockSkew, now, timeInsensitive) {
            if (!clockSkew) {
                clockSkew = 0;
            }

            if (!now) {
                now = parseInt(Date.now() / 1000);
            }

            var payload = JoseUtil.parseJwt(jwt).payload;

            if (!payload.iss) {
                _Log.Log.error("JoseUtil._validateJwt: issuer was not provided");
                return Promise.reject(new Error("issuer was not provided"));
            }
            if (payload.iss !== issuer) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid issuer in token", payload.iss);
                return Promise.reject(new Error("Invalid issuer in token: " + payload.iss));
            }

            if (!payload.aud) {
                _Log.Log.error("JoseUtil._validateJwt: aud was not provided");
                return Promise.reject(new Error("aud was not provided"));
            }
            var validAudience = payload.aud === audience || Array.isArray(payload.aud) && payload.aud.indexOf(audience) >= 0;
            if (!validAudience) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid audience in token", payload.aud);
                return Promise.reject(new Error("Invalid audience in token: " + payload.aud));
            }
            if (payload.azp && payload.azp !== audience) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid azp in token", payload.azp);
                return Promise.reject(new Error("Invalid azp in token: " + payload.azp));
            }

            if (!timeInsensitive) {
                var lowerNow = now + clockSkew;
                var upperNow = now - clockSkew;

                if (!payload.iat) {
                    _Log.Log.error("JoseUtil._validateJwt: iat was not provided");
                    return Promise.reject(new Error("iat was not provided"));
                }
                if (lowerNow < payload.iat) {
                    _Log.Log.error("JoseUtil._validateJwt: iat is in the future", payload.iat);
                    return Promise.reject(new Error("iat is in the future: " + payload.iat));
                }

                if (payload.nbf && lowerNow < payload.nbf) {
                    _Log.Log.error("JoseUtil._validateJwt: nbf is in the future", payload.nbf);
                    return Promise.reject(new Error("nbf is in the future: " + payload.nbf));
                }

                if (!payload.exp) {
                    _Log.Log.error("JoseUtil._validateJwt: exp was not provided");
                    return Promise.reject(new Error("exp was not provided"));
                }
                if (payload.exp < upperNow) {
                    _Log.Log.error("JoseUtil._validateJwt: exp is in the past", payload.exp);
                    return Promise.reject(new Error("exp is in the past:" + payload.exp));
                }
            }

            return Promise.resolve(payload);
        };

        JoseUtil._validateJwt = function _validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive) {

            return JoseUtil.validateJwtAttributes(jwt, issuer, audience, clockSkew, now, timeInsensitive).then(function (payload) {
                try {
                    if (!jws.JWS.verify(jwt, key, AllowedSigningAlgs)) {
                        _Log.Log.error("JoseUtil._validateJwt: signature validation failed");
                        return Promise.reject(new Error("signature validation failed"));
                    }

                    return payload;
                } catch (e) {
                    _Log.Log.error(e && e.message || e);
                    return Promise.reject(new Error("signature validation failed"));
                }
            });
        };

        JoseUtil.hashString = function hashString(value, alg) {
            try {
                return crypto.Util.hashString(value, alg);
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        JoseUtil.hexToBase64Url = function hexToBase64Url(value) {
            try {
                return hextob64u(value);
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        return JoseUtil;
    }();
}
module.exports = exports["default"];

/***/ }),

/***/ "./src/JoseUtilRsa.js":
/*!****************************!*\
  !*** ./src/JoseUtilRsa.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JoseUtil = undefined;

var _rsa = __webpack_require__(/*! ./crypto/rsa */ "./src/crypto/rsa.js");

var _JoseUtilImpl = __webpack_require__(/*! ./JoseUtilImpl */ "./src/JoseUtilImpl.js");

var _JoseUtilImpl2 = _interopRequireDefault(_JoseUtilImpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JoseUtil = exports.JoseUtil = (0, _JoseUtilImpl2.default)({ jws: _rsa.jws, KeyUtil: _rsa.KeyUtil, X509: _rsa.X509, crypto: _rsa.crypto, hextob64u: _rsa.hextob64u, b64tohex: _rsa.b64tohex, AllowedSigningAlgs: _rsa.AllowedSigningAlgs });

/***/ }),

/***/ "./src/JsonService.js":
/*!****************************!*\
  !*** ./src/JsonService.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JsonService = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var JsonService = exports.JsonService = function () {
    function JsonService() {
        var additionalContentTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var XMLHttpRequestCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.XMLHttpRequest;
        var jwtHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, JsonService);

        if (additionalContentTypes && Array.isArray(additionalContentTypes)) {
            this._contentTypes = additionalContentTypes.slice();
        } else {
            this._contentTypes = [];
        }
        this._contentTypes.push('application/json');
        if (jwtHandler) {
            this._contentTypes.push('application/jwt');
        }

        this._XMLHttpRequest = XMLHttpRequestCtor;
        this._jwtHandler = jwtHandler;
    }

    JsonService.prototype.getJson = function getJson(url, token) {
        var _this = this;

        if (!url) {
            _Log.Log.error("JsonService.getJson: No url passed");
            throw new Error("url");
        }

        _Log.Log.debug("JsonService.getJson, url: ", url);

        return new Promise(function (resolve, reject) {

            var req = new _this._XMLHttpRequest();
            req.open('GET', url);

            var allowedContentTypes = _this._contentTypes;
            var jwtHandler = _this._jwtHandler;

            req.onload = function () {
                _Log.Log.debug("JsonService.getJson: HTTP response received, status", req.status);

                if (req.status === 200) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found == "application/jwt") {
                            jwtHandler(req).then(resolve, reject);
                            return;
                        }

                        if (found) {
                            try {
                                resolve(JSON.parse(req.responseText));
                                return;
                            } catch (e) {
                                _Log.Log.error("JsonService.getJson: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }

                    reject(Error("Invalid response Content-Type: " + contentType + ", from URL: " + url));
                } else {
                    reject(Error(req.statusText + " (" + req.status + ")"));
                }
            };

            req.onerror = function () {
                _Log.Log.error("JsonService.getJson: network error");
                reject(Error("Network Error"));
            };

            if (token) {
                _Log.Log.debug("JsonService.getJson: token passed, setting Authorization header");
                req.setRequestHeader("Authorization", "Bearer " + token);
            }

            req.send();
        });
    };

    JsonService.prototype.postForm = function postForm(url, payload) {
        var _this2 = this;

        if (!url) {
            _Log.Log.error("JsonService.postForm: No url passed");
            throw new Error("url");
        }

        _Log.Log.debug("JsonService.postForm, url: ", url);

        return new Promise(function (resolve, reject) {

            var req = new _this2._XMLHttpRequest();
            req.open('POST', url);

            var allowedContentTypes = _this2._contentTypes;

            req.onload = function () {
                _Log.Log.debug("JsonService.postForm: HTTP response received, status", req.status);

                if (req.status === 200) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found) {
                            try {
                                resolve(JSON.parse(req.responseText));
                                return;
                            } catch (e) {
                                _Log.Log.error("JsonService.postForm: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }

                    reject(Error("Invalid response Content-Type: " + contentType + ", from URL: " + url));
                    return;
                }

                if (req.status === 400) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found) {
                            try {
                                var payload = JSON.parse(req.responseText);
                                if (payload && payload.error) {
                                    _Log.Log.error("JsonService.postForm: Error from server: ", payload.error);
                                    reject(new Error(payload.error));
                                    return;
                                }
                            } catch (e) {
                                _Log.Log.error("JsonService.postForm: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }
                }

                reject(Error(req.statusText + " (" + req.status + ")"));
            };

            req.onerror = function () {
                _Log.Log.error("JsonService.postForm: network error");
                reject(Error("Network Error"));
            };

            var body = "";
            for (var key in payload) {

                var value = payload[key];

                if (value) {

                    if (body.length > 0) {
                        body += "&";
                    }

                    body += encodeURIComponent(key);
                    body += "=";
                    body += encodeURIComponent(value);
                }
            }

            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            req.send(body);
        });
    };

    return JsonService;
}();

/***/ }),

/***/ "./src/Log.js":
/*!********************!*\
  !*** ./src/Log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var nopLogger = {
    debug: function debug() {},
    info: function info() {},
    warn: function warn() {},
    error: function error() {}
};

var NONE = 0;
var ERROR = 1;
var WARN = 2;
var INFO = 3;
var DEBUG = 4;

var logger = void 0;
var level = void 0;

var Log = exports.Log = function () {
    function Log() {
        _classCallCheck(this, Log);
    }

    Log.reset = function reset() {
        level = INFO;
        logger = nopLogger;
    };

    Log.debug = function debug() {
        if (level >= DEBUG) {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            logger.debug.apply(logger, Array.from(args));
        }
    };

    Log.info = function info() {
        if (level >= INFO) {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            logger.info.apply(logger, Array.from(args));
        }
    };

    Log.warn = function warn() {
        if (level >= WARN) {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            logger.warn.apply(logger, Array.from(args));
        }
    };

    Log.error = function error() {
        if (level >= ERROR) {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            logger.error.apply(logger, Array.from(args));
        }
    };

    _createClass(Log, null, [{
        key: "NONE",
        get: function get() {
            return NONE;
        }
    }, {
        key: "ERROR",
        get: function get() {
            return ERROR;
        }
    }, {
        key: "WARN",
        get: function get() {
            return WARN;
        }
    }, {
        key: "INFO",
        get: function get() {
            return INFO;
        }
    }, {
        key: "DEBUG",
        get: function get() {
            return DEBUG;
        }
    }, {
        key: "level",
        get: function get() {
            return level;
        },
        set: function set(value) {
            if (NONE <= value && value <= DEBUG) {
                level = value;
            } else {
                throw new Error("Invalid log level");
            }
        }
    }, {
        key: "logger",
        get: function get() {
            return logger;
        },
        set: function set(value) {
            if (!value.debug && value.info) {
                // just to stay backwards compat. can remove in 2.0
                value.debug = value.info;
            }

            if (value.debug && value.info && value.warn && value.error) {
                logger = value;
            } else {
                throw new Error("Invalid logger");
            }
        }
    }]);

    return Log;
}();

Log.reset();

/***/ }),

/***/ "./src/MetadataService.js":
/*!********************************!*\
  !*** ./src/MetadataService.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MetadataService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcMetadataUrlPath = '.well-known/openid-configuration';

var MetadataService = exports.MetadataService = function () {
    function MetadataService(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;

        _classCallCheck(this, MetadataService);

        if (!settings) {
            _Log.Log.error("MetadataService: No settings passed to MetadataService");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor(['application/jwk-set+json']);
    }

    MetadataService.prototype.getMetadata = function getMetadata() {
        var _this = this;

        if (this._settings.metadata) {
            _Log.Log.debug("MetadataService.getMetadata: Returning metadata from settings");
            return Promise.resolve(this._settings.metadata);
        }

        if (!this.metadataUrl) {
            _Log.Log.error("MetadataService.getMetadata: No authority or metadataUrl configured on settings");
            return Promise.reject(new Error("No authority or metadataUrl configured on settings"));
        }

        _Log.Log.debug("MetadataService.getMetadata: getting metadata from", this.metadataUrl);

        return this._jsonService.getJson(this.metadataUrl).then(function (metadata) {
            _Log.Log.debug("MetadataService.getMetadata: json received");
            _this._settings.metadata = metadata;
            return metadata;
        });
    };

    MetadataService.prototype.getIssuer = function getIssuer() {
        return this._getMetadataProperty("issuer");
    };

    MetadataService.prototype.getAuthorizationEndpoint = function getAuthorizationEndpoint() {
        return this._getMetadataProperty("authorization_endpoint");
    };

    MetadataService.prototype.getUserInfoEndpoint = function getUserInfoEndpoint() {
        return this._getMetadataProperty("userinfo_endpoint");
    };

    MetadataService.prototype.getTokenEndpoint = function getTokenEndpoint() {
        var optional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        return this._getMetadataProperty("token_endpoint", optional);
    };

    MetadataService.prototype.getCheckSessionIframe = function getCheckSessionIframe() {
        return this._getMetadataProperty("check_session_iframe", true);
    };

    MetadataService.prototype.getEndSessionEndpoint = function getEndSessionEndpoint() {
        return this._getMetadataProperty("end_session_endpoint", true);
    };

    MetadataService.prototype.getRevocationEndpoint = function getRevocationEndpoint() {
        return this._getMetadataProperty("revocation_endpoint", true);
    };

    MetadataService.prototype.getKeysEndpoint = function getKeysEndpoint() {
        return this._getMetadataProperty("jwks_uri", true);
    };

    MetadataService.prototype._getMetadataProperty = function _getMetadataProperty(name) {
        var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _Log.Log.debug("MetadataService.getMetadataProperty for: " + name);

        return this.getMetadata().then(function (metadata) {
            _Log.Log.debug("MetadataService.getMetadataProperty: metadata recieved");

            if (metadata[name] === undefined) {

                if (optional === true) {
                    _Log.Log.warn("MetadataService.getMetadataProperty: Metadata does not contain optional property " + name);
                    return undefined;
                } else {
                    _Log.Log.error("MetadataService.getMetadataProperty: Metadata does not contain property " + name);
                    throw new Error("Metadata does not contain property " + name);
                }
            }

            return metadata[name];
        });
    };

    MetadataService.prototype.getSigningKeys = function getSigningKeys() {
        var _this2 = this;

        if (this._settings.signingKeys) {
            _Log.Log.debug("MetadataService.getSigningKeys: Returning signingKeys from settings");
            return Promise.resolve(this._settings.signingKeys);
        }

        return this._getMetadataProperty("jwks_uri").then(function (jwks_uri) {
            _Log.Log.debug("MetadataService.getSigningKeys: jwks_uri received", jwks_uri);

            return _this2._jsonService.getJson(jwks_uri).then(function (keySet) {
                _Log.Log.debug("MetadataService.getSigningKeys: key set received", keySet);

                if (!keySet.keys) {
                    _Log.Log.error("MetadataService.getSigningKeys: Missing keys on keyset");
                    throw new Error("Missing keys on keyset");
                }

                _this2._settings.signingKeys = keySet.keys;
                return _this2._settings.signingKeys;
            });
        });
    };

    _createClass(MetadataService, [{
        key: 'metadataUrl',
        get: function get() {
            if (!this._metadataUrl) {
                if (this._settings.metadataUrl) {
                    this._metadataUrl = this._settings.metadataUrl;
                } else {
                    this._metadataUrl = this._settings.authority;

                    if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
                        if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
                            this._metadataUrl += '/';
                        }
                        this._metadataUrl += OidcMetadataUrlPath;
                    }
                }
            }

            return this._metadataUrl;
        }
    }]);

    return MetadataService;
}();

/***/ }),

/***/ "./src/OidcClient.js":
/*!***************************!*\
  !*** ./src/OidcClient.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OidcClient = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClientSettings = __webpack_require__(/*! ./OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _ErrorResponse = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");

var _SigninRequest = __webpack_require__(/*! ./SigninRequest.js */ "./src/SigninRequest.js");

var _SigninResponse = __webpack_require__(/*! ./SigninResponse.js */ "./src/SigninResponse.js");

var _SignoutRequest = __webpack_require__(/*! ./SignoutRequest.js */ "./src/SignoutRequest.js");

var _SignoutResponse = __webpack_require__(/*! ./SignoutResponse.js */ "./src/SignoutResponse.js");

var _SigninState = __webpack_require__(/*! ./SigninState.js */ "./src/SigninState.js");

var _State = __webpack_require__(/*! ./State.js */ "./src/State.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcClient = exports.OidcClient = function () {
    function OidcClient() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, OidcClient);

        if (settings instanceof _OidcClientSettings.OidcClientSettings) {
            this._settings = settings;
        } else {
            this._settings = new _OidcClientSettings.OidcClientSettings(settings);
        }
    }

    OidcClient.prototype.createSigninRequest = function createSigninRequest() {
        var _this = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            response_type = _ref.response_type,
            scope = _ref.scope,
            redirect_uri = _ref.redirect_uri,
            data = _ref.data,
            state = _ref.state,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            id_token_hint = _ref.id_token_hint,
            login_hint = _ref.login_hint,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            request = _ref.request,
            request_uri = _ref.request_uri,
            response_mode = _ref.response_mode,
            extraQueryParams = _ref.extraQueryParams,
            extraTokenParams = _ref.extraTokenParams,
            request_type = _ref.request_type,
            skipUserInfo = _ref.skipUserInfo;

        var stateStore = arguments[1];

        _Log.Log.debug("OidcClient.createSigninRequest");

        var client_id = this._settings.client_id;
        response_type = response_type || this._settings.response_type;
        scope = scope || this._settings.scope;
        redirect_uri = redirect_uri || this._settings.redirect_uri;

        // id_token_hint, login_hint aren't allowed on _settings
        prompt = prompt || this._settings.prompt;
        display = display || this._settings.display;
        max_age = max_age || this._settings.max_age;
        ui_locales = ui_locales || this._settings.ui_locales;
        acr_values = acr_values || this._settings.acr_values;
        resource = resource || this._settings.resource;
        response_mode = response_mode || this._settings.response_mode;
        extraQueryParams = extraQueryParams || this._settings.extraQueryParams;
        extraTokenParams = extraTokenParams || this._settings.extraTokenParams;

        var authority = this._settings.authority;

        if (_SigninRequest.SigninRequest.isCode(response_type) && response_type !== "code") {
            return Promise.reject(new Error("OpenID Connect hybrid flow is not supported"));
        }

        return this._metadataService.getAuthorizationEndpoint().then(function (url) {
            _Log.Log.debug("OidcClient.createSigninRequest: Received authorization endpoint", url);

            var signinRequest = new _SigninRequest.SigninRequest({
                url: url,
                client_id: client_id,
                redirect_uri: redirect_uri,
                response_type: response_type,
                scope: scope,
                data: data || state,
                authority: authority,
                prompt: prompt, display: display, max_age: max_age, ui_locales: ui_locales, id_token_hint: id_token_hint, login_hint: login_hint, acr_values: acr_values,
                resource: resource, request: request, request_uri: request_uri, extraQueryParams: extraQueryParams, extraTokenParams: extraTokenParams, request_type: request_type, response_mode: response_mode,
                client_secret: _this._settings.client_secret,
                skipUserInfo: skipUserInfo
            });

            var signinState = signinRequest.state;
            stateStore = stateStore || _this._stateStore;

            return stateStore.set(signinState.id, signinState.toStorageString()).then(function () {
                return signinRequest;
            });
        });
    };

    OidcClient.prototype.readSigninResponseState = function readSigninResponseState(url, stateStore) {
        var removeState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _Log.Log.debug("OidcClient.readSigninResponseState");

        var useQuery = this._settings.response_mode === "query" || !this._settings.response_mode && _SigninRequest.SigninRequest.isCode(this._settings.response_type);
        var delimiter = useQuery ? "?" : "#";

        var response = new _SigninResponse.SigninResponse(url, delimiter);

        if (!response.state) {
            _Log.Log.error("OidcClient.readSigninResponseState: No state in response");
            return Promise.reject(new Error("No state in response"));
        }

        stateStore = stateStore || this._stateStore;

        var stateApi = removeState ? stateStore.remove.bind(stateStore) : stateStore.get.bind(stateStore);

        return stateApi(response.state).then(function (storedStateString) {
            if (!storedStateString) {
                _Log.Log.error("OidcClient.readSigninResponseState: No matching state found in storage");
                throw new Error("No matching state found in storage");
            }

            var state = _SigninState.SigninState.fromStorageString(storedStateString);
            return { state: state, response: response };
        });
    };

    OidcClient.prototype.processSigninResponse = function processSigninResponse(url, stateStore) {
        var _this2 = this;

        _Log.Log.debug("OidcClient.processSigninResponse");

        return this.readSigninResponseState(url, stateStore, true).then(function (_ref2) {
            var state = _ref2.state,
                response = _ref2.response;

            _Log.Log.debug("OidcClient.processSigninResponse: Received state from storage; validating response");
            return _this2._validator.validateSigninResponse(state, response);
        });
    };

    OidcClient.prototype.createSignoutRequest = function createSignoutRequest() {
        var _this3 = this;

        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id_token_hint = _ref3.id_token_hint,
            data = _ref3.data,
            state = _ref3.state,
            post_logout_redirect_uri = _ref3.post_logout_redirect_uri,
            extraQueryParams = _ref3.extraQueryParams,
            request_type = _ref3.request_type;

        var stateStore = arguments[1];

        _Log.Log.debug("OidcClient.createSignoutRequest");

        post_logout_redirect_uri = post_logout_redirect_uri || this._settings.post_logout_redirect_uri;
        extraQueryParams = extraQueryParams || this._settings.extraQueryParams;

        return this._metadataService.getEndSessionEndpoint().then(function (url) {
            if (!url) {
                _Log.Log.error("OidcClient.createSignoutRequest: No end session endpoint url returned");
                throw new Error("no end session endpoint");
            }

            _Log.Log.debug("OidcClient.createSignoutRequest: Received end session endpoint", url);

            var request = new _SignoutRequest.SignoutRequest({
                url: url,
                id_token_hint: id_token_hint,
                post_logout_redirect_uri: post_logout_redirect_uri,
                data: data || state,
                extraQueryParams: extraQueryParams,
                request_type: request_type
            });

            var signoutState = request.state;
            if (signoutState) {
                _Log.Log.debug("OidcClient.createSignoutRequest: Signout request has state to persist");

                stateStore = stateStore || _this3._stateStore;
                stateStore.set(signoutState.id, signoutState.toStorageString());
            }

            return request;
        });
    };

    OidcClient.prototype.readSignoutResponseState = function readSignoutResponseState(url, stateStore) {
        var removeState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _Log.Log.debug("OidcClient.readSignoutResponseState");

        var response = new _SignoutResponse.SignoutResponse(url);
        if (!response.state) {
            _Log.Log.debug("OidcClient.readSignoutResponseState: No state in response");

            if (response.error) {
                _Log.Log.warn("OidcClient.readSignoutResponseState: Response was error: ", response.error);
                return Promise.reject(new _ErrorResponse.ErrorResponse(response));
            }

            return Promise.resolve({ state: undefined, response: response });
        }

        var stateKey = response.state;

        stateStore = stateStore || this._stateStore;

        var stateApi = removeState ? stateStore.remove.bind(stateStore) : stateStore.get.bind(stateStore);
        return stateApi(stateKey).then(function (storedStateString) {
            if (!storedStateString) {
                _Log.Log.error("OidcClient.readSignoutResponseState: No matching state found in storage");
                throw new Error("No matching state found in storage");
            }

            var state = _State.State.fromStorageString(storedStateString);

            return { state: state, response: response };
        });
    };

    OidcClient.prototype.processSignoutResponse = function processSignoutResponse(url, stateStore) {
        var _this4 = this;

        _Log.Log.debug("OidcClient.processSignoutResponse");

        return this.readSignoutResponseState(url, stateStore, true).then(function (_ref4) {
            var state = _ref4.state,
                response = _ref4.response;

            if (state) {
                _Log.Log.debug("OidcClient.processSignoutResponse: Received state from storage; validating response");
                return _this4._validator.validateSignoutResponse(state, response);
            } else {
                _Log.Log.debug("OidcClient.processSignoutResponse: No state from storage; skipping validating response");
                return response;
            }
        });
    };

    OidcClient.prototype.clearStaleState = function clearStaleState(stateStore) {
        _Log.Log.debug("OidcClient.clearStaleState");

        stateStore = stateStore || this._stateStore;

        return _State.State.clearStaleState(stateStore, this.settings.staleStateAge);
    };

    _createClass(OidcClient, [{
        key: '_stateStore',
        get: function get() {
            return this.settings.stateStore;
        }
    }, {
        key: '_validator',
        get: function get() {
            return this.settings.validator;
        }
    }, {
        key: '_metadataService',
        get: function get() {
            return this.settings.metadataService;
        }
    }, {
        key: 'settings',
        get: function get() {
            return this._settings;
        }
    }, {
        key: 'metadataService',
        get: function get() {
            return this._metadataService;
        }
    }]);

    return OidcClient;
}();

/***/ }),

/***/ "./src/OidcClientSettings.js":
/*!***********************************!*\
  !*** ./src/OidcClientSettings.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OidcClientSettings = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _WebStorageStateStore = __webpack_require__(/*! ./WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _ResponseValidator = __webpack_require__(/*! ./ResponseValidator.js */ "./src/ResponseValidator.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcMetadataUrlPath = '.well-known/openid-configuration';

var DefaultResponseType = "id_token";
var DefaultScope = "openid";
var DefaultStaleStateAge = 60 * 15; // seconds
var DefaultClockSkewInSeconds = 60 * 5;

var OidcClientSettings = exports.OidcClientSettings = function () {
    function OidcClientSettings() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            authority = _ref.authority,
            metadataUrl = _ref.metadataUrl,
            metadata = _ref.metadata,
            signingKeys = _ref.signingKeys,
            client_id = _ref.client_id,
            client_secret = _ref.client_secret,
            _ref$response_type = _ref.response_type,
            response_type = _ref$response_type === undefined ? DefaultResponseType : _ref$response_type,
            _ref$scope = _ref.scope,
            scope = _ref$scope === undefined ? DefaultScope : _ref$scope,
            redirect_uri = _ref.redirect_uri,
            post_logout_redirect_uri = _ref.post_logout_redirect_uri,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            response_mode = _ref.response_mode,
            _ref$filterProtocolCl = _ref.filterProtocolClaims,
            filterProtocolClaims = _ref$filterProtocolCl === undefined ? true : _ref$filterProtocolCl,
            _ref$loadUserInfo = _ref.loadUserInfo,
            loadUserInfo = _ref$loadUserInfo === undefined ? true : _ref$loadUserInfo,
            _ref$staleStateAge = _ref.staleStateAge,
            staleStateAge = _ref$staleStateAge === undefined ? DefaultStaleStateAge : _ref$staleStateAge,
            _ref$clockSkew = _ref.clockSkew,
            clockSkew = _ref$clockSkew === undefined ? DefaultClockSkewInSeconds : _ref$clockSkew,
            _ref$userInfoJwtIssue = _ref.userInfoJwtIssuer,
            userInfoJwtIssuer = _ref$userInfoJwtIssue === undefined ? 'OP' : _ref$userInfoJwtIssue,
            _ref$stateStore = _ref.stateStore,
            stateStore = _ref$stateStore === undefined ? new _WebStorageStateStore.WebStorageStateStore() : _ref$stateStore,
            _ref$ResponseValidato = _ref.ResponseValidatorCtor,
            ResponseValidatorCtor = _ref$ResponseValidato === undefined ? _ResponseValidator.ResponseValidator : _ref$ResponseValidato,
            _ref$MetadataServiceC = _ref.MetadataServiceCtor,
            MetadataServiceCtor = _ref$MetadataServiceC === undefined ? _MetadataService.MetadataService : _ref$MetadataServiceC,
            _ref$extraQueryParams = _ref.extraQueryParams,
            extraQueryParams = _ref$extraQueryParams === undefined ? {} : _ref$extraQueryParams,
            _ref$extraTokenParams = _ref.extraTokenParams,
            extraTokenParams = _ref$extraTokenParams === undefined ? {} : _ref$extraTokenParams;

        _classCallCheck(this, OidcClientSettings);

        this._authority = authority;
        this._metadataUrl = metadataUrl;
        this._metadata = metadata;
        this._signingKeys = signingKeys;

        this._client_id = client_id;
        this._client_secret = client_secret;
        this._response_type = response_type;
        this._scope = scope;
        this._redirect_uri = redirect_uri;
        this._post_logout_redirect_uri = post_logout_redirect_uri;

        this._prompt = prompt;
        this._display = display;
        this._max_age = max_age;
        this._ui_locales = ui_locales;
        this._acr_values = acr_values;
        this._resource = resource;
        this._response_mode = response_mode;

        this._filterProtocolClaims = !!filterProtocolClaims;
        this._loadUserInfo = !!loadUserInfo;
        this._staleStateAge = staleStateAge;
        this._clockSkew = clockSkew;
        this._userInfoJwtIssuer = userInfoJwtIssuer;

        this._stateStore = stateStore;
        this._validator = new ResponseValidatorCtor(this);
        this._metadataService = new MetadataServiceCtor(this);

        this._extraQueryParams = (typeof extraQueryParams === 'undefined' ? 'undefined' : _typeof(extraQueryParams)) === 'object' ? extraQueryParams : {};
        this._extraTokenParams = (typeof extraTokenParams === 'undefined' ? 'undefined' : _typeof(extraTokenParams)) === 'object' ? extraTokenParams : {};
    }

    // client config


    _createClass(OidcClientSettings, [{
        key: 'client_id',
        get: function get() {
            return this._client_id;
        },
        set: function set(value) {
            if (!this._client_id) {
                // one-time set only
                this._client_id = value;
            } else {
                _Log.Log.error("OidcClientSettings.set_client_id: client_id has already been assigned.");
                throw new Error("client_id has already been assigned.");
            }
        }
    }, {
        key: 'client_secret',
        get: function get() {
            return this._client_secret;
        }
    }, {
        key: 'response_type',
        get: function get() {
            return this._response_type;
        }
    }, {
        key: 'scope',
        get: function get() {
            return this._scope;
        }
    }, {
        key: 'redirect_uri',
        get: function get() {
            return this._redirect_uri;
        }
    }, {
        key: 'post_logout_redirect_uri',
        get: function get() {
            return this._post_logout_redirect_uri;
        }

        // optional protocol params

    }, {
        key: 'prompt',
        get: function get() {
            return this._prompt;
        }
    }, {
        key: 'display',
        get: function get() {
            return this._display;
        }
    }, {
        key: 'max_age',
        get: function get() {
            return this._max_age;
        }
    }, {
        key: 'ui_locales',
        get: function get() {
            return this._ui_locales;
        }
    }, {
        key: 'acr_values',
        get: function get() {
            return this._acr_values;
        }
    }, {
        key: 'resource',
        get: function get() {
            return this._resource;
        }
    }, {
        key: 'response_mode',
        get: function get() {
            return this._response_mode;
        }

        // metadata

    }, {
        key: 'authority',
        get: function get() {
            return this._authority;
        },
        set: function set(value) {
            if (!this._authority) {
                // one-time set only
                this._authority = value;
            } else {
                _Log.Log.error("OidcClientSettings.set_authority: authority has already been assigned.");
                throw new Error("authority has already been assigned.");
            }
        }
    }, {
        key: 'metadataUrl',
        get: function get() {
            if (!this._metadataUrl) {
                this._metadataUrl = this.authority;

                if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
                    if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
                        this._metadataUrl += '/';
                    }
                    this._metadataUrl += OidcMetadataUrlPath;
                }
            }

            return this._metadataUrl;
        }

        // settable/cachable metadata values

    }, {
        key: 'metadata',
        get: function get() {
            return this._metadata;
        },
        set: function set(value) {
            this._metadata = value;
        }
    }, {
        key: 'signingKeys',
        get: function get() {
            return this._signingKeys;
        },
        set: function set(value) {
            this._signingKeys = value;
        }

        // behavior flags

    }, {
        key: 'filterProtocolClaims',
        get: function get() {
            return this._filterProtocolClaims;
        }
    }, {
        key: 'loadUserInfo',
        get: function get() {
            return this._loadUserInfo;
        }
    }, {
        key: 'staleStateAge',
        get: function get() {
            return this._staleStateAge;
        }
    }, {
        key: 'clockSkew',
        get: function get() {
            return this._clockSkew;
        }
    }, {
        key: 'userInfoJwtIssuer',
        get: function get() {
            return this._userInfoJwtIssuer;
        }
    }, {
        key: 'stateStore',
        get: function get() {
            return this._stateStore;
        }
    }, {
        key: 'validator',
        get: function get() {
            return this._validator;
        }
    }, {
        key: 'metadataService',
        get: function get() {
            return this._metadataService;
        }

        // extra query params

    }, {
        key: 'extraQueryParams',
        get: function get() {
            return this._extraQueryParams;
        },
        set: function set(value) {
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                this._extraQueryParams = value;
            } else {
                this._extraQueryParams = {};
            }
        }

        // extra token params

    }, {
        key: 'extraTokenParams',
        get: function get() {
            return this._extraTokenParams;
        },
        set: function set(value) {
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                this._extraTokenParams = value;
            } else {
                this._extraTokenParams = {};
            }
        }
    }]);

    return OidcClientSettings;
}();

/***/ }),

/***/ "./src/PopupNavigator.js":
/*!*******************************!*\
  !*** ./src/PopupNavigator.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupNavigator = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _PopupWindow = __webpack_require__(/*! ./PopupWindow.js */ "./src/PopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var PopupNavigator = exports.PopupNavigator = function () {
    function PopupNavigator() {
        _classCallCheck(this, PopupNavigator);
    }

    PopupNavigator.prototype.prepare = function prepare(params) {
        var popup = new _PopupWindow.PopupWindow(params);
        return Promise.resolve(popup);
    };

    PopupNavigator.prototype.callback = function callback(url, keepOpen, delimiter) {
        _Log.Log.debug("PopupNavigator.callback");

        try {
            _PopupWindow.PopupWindow.notifyOpener(url, keepOpen, delimiter);
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    };

    return PopupNavigator;
}();

/***/ }),

/***/ "./src/PopupWindow.js":
/*!****************************!*\
  !*** ./src/PopupWindow.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckForPopupClosedInterval = 500;
var DefaultPopupFeatures = 'location=no,toolbar=no,width=500,height=500,left=100,top=100;';
//const DefaultPopupFeatures = 'location=no,toolbar=no,width=500,height=500,left=100,top=100;resizable=yes';

var DefaultPopupTarget = "_blank";

var PopupWindow = exports.PopupWindow = function () {
    function PopupWindow(params) {
        var _this = this;

        _classCallCheck(this, PopupWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        var target = params.popupWindowTarget || DefaultPopupTarget;
        var features = params.popupWindowFeatures || DefaultPopupFeatures;

        this._popup = window.open('', target, features);
        if (this._popup) {
            _Log.Log.debug("PopupWindow.ctor: popup successfully created");
            this._checkForPopupClosedTimer = window.setInterval(this._checkForPopupClosed.bind(this), CheckForPopupClosedInterval);
        }
    }

    PopupWindow.prototype.navigate = function navigate(params) {
        if (!this._popup) {
            this._error("PopupWindow.navigate: Error opening popup window");
        } else if (!params || !params.url) {
            this._error("PopupWindow.navigate: no url provided");
            this._error("No url provided");
        } else {
            _Log.Log.debug("PopupWindow.navigate: Setting URL in popup");

            this._id = params.id;
            if (this._id) {
                window["popupCallback_" + params.id] = this._callback.bind(this);
            }

            this._popup.focus();
            this._popup.window.location = params.url;
        }

        return this.promise;
    };

    PopupWindow.prototype._success = function _success(data) {
        _Log.Log.debug("PopupWindow.callback: Successful response from popup window");

        this._cleanup();
        this._resolve(data);
    };

    PopupWindow.prototype._error = function _error(message) {
        _Log.Log.error("PopupWindow.error: ", message);

        this._cleanup();
        this._reject(new Error(message));
    };

    PopupWindow.prototype.close = function close() {
        this._cleanup(false);
    };

    PopupWindow.prototype._cleanup = function _cleanup(keepOpen) {
        _Log.Log.debug("PopupWindow.cleanup");

        window.clearInterval(this._checkForPopupClosedTimer);
        this._checkForPopupClosedTimer = null;

        delete window["popupCallback_" + this._id];

        if (this._popup && !keepOpen) {
            this._popup.close();
        }
        this._popup = null;
    };

    PopupWindow.prototype._checkForPopupClosed = function _checkForPopupClosed() {
        if (!this._popup || this._popup.closed) {
            this._error("Popup window closed");
        }
    };

    PopupWindow.prototype._callback = function _callback(url, keepOpen) {
        this._cleanup(keepOpen);

        if (url) {
            _Log.Log.debug("PopupWindow.callback success");
            this._success({ url: url });
        } else {
            _Log.Log.debug("PopupWindow.callback: Invalid response from popup");
            this._error("Invalid response from popup");
        }
    };

    PopupWindow.notifyOpener = function notifyOpener(url, keepOpen, delimiter) {
        if (window.opener) {
            url = url || window.location.href;
            if (url) {
                var data = _UrlUtility.UrlUtility.parseUrlFragment(url, delimiter);

                if (data.state) {
                    var name = "popupCallback_" + data.state;
                    var callback = window.opener[name];
                    if (callback) {
                        _Log.Log.debug("PopupWindow.notifyOpener: passing url message to opener");
                        callback(url, keepOpen);
                    } else {
                        _Log.Log.warn("PopupWindow.notifyOpener: no matching callback found on opener");
                    }
                } else {
                    _Log.Log.warn("PopupWindow.notifyOpener: no state found in response url");
                }
            }
        } else {
            _Log.Log.warn("PopupWindow.notifyOpener: no window.opener. Can't complete notification.");
        }
    };

    _createClass(PopupWindow, [{
        key: 'promise',
        get: function get() {
            return this._promise;
        }
    }]);

    return PopupWindow;
}();

/***/ }),

/***/ "./src/RedirectNavigator.js":
/*!**********************************!*\
  !*** ./src/RedirectNavigator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RedirectNavigator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RedirectNavigator = exports.RedirectNavigator = function () {
    function RedirectNavigator() {
        _classCallCheck(this, RedirectNavigator);
    }

    RedirectNavigator.prototype.prepare = function prepare() {
        return Promise.resolve(this);
    };

    RedirectNavigator.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            _Log.Log.error("RedirectNavigator.navigate: No url provided");
            return Promise.reject(new Error("No url provided"));
        }

        if (params.useReplaceToNavigate) {
            window.location.replace(params.url);
        } else {
            window.location = params.url;
        }

        return Promise.resolve();
    };

    _createClass(RedirectNavigator, [{
        key: "url",
        get: function get() {
            return window.location.href;
        }
    }]);

    return RedirectNavigator;
}();

/***/ }),

/***/ "./src/ResponseValidator.js":
/*!**********************************!*\
  !*** ./src/ResponseValidator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResponseValidator = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _UserInfoService = __webpack_require__(/*! ./UserInfoService.js */ "./src/UserInfoService.js");

var _TokenClient = __webpack_require__(/*! ./TokenClient.js */ "./src/TokenClient.js");

var _ErrorResponse = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var ProtocolClaims = ["nonce", "at_hash", "iat", "nbf", "exp", "aud", "iss", "c_hash"];

var ResponseValidator = exports.ResponseValidator = function () {
    function ResponseValidator(settings) {
        var MetadataServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _MetadataService.MetadataService;
        var UserInfoServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _UserInfoService.UserInfoService;
        var joseUtil = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _JoseUtil.JoseUtil;
        var TokenClientCtor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _TokenClient.TokenClient;

        _classCallCheck(this, ResponseValidator);

        if (!settings) {
            _Log.Log.error("ResponseValidator.ctor: No settings passed to ResponseValidator");
            throw new Error("settings");
        }

        this._settings = settings;
        this._metadataService = new MetadataServiceCtor(this._settings);
        this._userInfoService = new UserInfoServiceCtor(this._settings);
        this._joseUtil = joseUtil;
        this._tokenClient = new TokenClientCtor(this._settings);
    }

    ResponseValidator.prototype.validateSigninResponse = function validateSigninResponse(state, response) {
        var _this = this;

        _Log.Log.debug("ResponseValidator.validateSigninResponse");

        return this._processSigninParams(state, response).then(function (response) {
            _Log.Log.debug("ResponseValidator.validateSigninResponse: state processed");
            return _this._validateTokens(state, response).then(function (response) {
                _Log.Log.debug("ResponseValidator.validateSigninResponse: tokens validated");
                return _this._processClaims(state, response).then(function (response) {
                    _Log.Log.debug("ResponseValidator.validateSigninResponse: claims processed");
                    return response;
                });
            });
        });
    };

    ResponseValidator.prototype.validateSignoutResponse = function validateSignoutResponse(state, response) {
        if (state.id !== response.state) {
            _Log.Log.error("ResponseValidator.validateSignoutResponse: State does not match");
            return Promise.reject(new Error("State does not match"));
        }

        // now that we know the state matches, take the stored data
        // and set it into the response so callers can get their state
        // this is important for both success & error outcomes
        _Log.Log.debug("ResponseValidator.validateSignoutResponse: state validated");
        response.state = state.data;

        if (response.error) {
            _Log.Log.warn("ResponseValidator.validateSignoutResponse: Response was error", response.error);
            return Promise.reject(new _ErrorResponse.ErrorResponse(response));
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processSigninParams = function _processSigninParams(state, response) {
        if (state.id !== response.state) {
            _Log.Log.error("ResponseValidator._processSigninParams: State does not match");
            return Promise.reject(new Error("State does not match"));
        }

        if (!state.client_id) {
            _Log.Log.error("ResponseValidator._processSigninParams: No client_id on state");
            return Promise.reject(new Error("No client_id on state"));
        }

        if (!state.authority) {
            _Log.Log.error("ResponseValidator._processSigninParams: No authority on state");
            return Promise.reject(new Error("No authority on state"));
        }

        // this allows the authority to be loaded from the signin state
        if (!this._settings.authority) {
            this._settings.authority = state.authority;
        }
        // ensure we're using the correct authority if the authority is not loaded from signin state
        else if (this._settings.authority && this._settings.authority !== state.authority) {
                _Log.Log.error("ResponseValidator._processSigninParams: authority mismatch on settings vs. signin state");
                return Promise.reject(new Error("authority mismatch on settings vs. signin state"));
            }
        // this allows the client_id to be loaded from the signin state
        if (!this._settings.client_id) {
            this._settings.client_id = state.client_id;
        }
        // ensure we're using the correct client_id if the client_id is not loaded from signin state
        else if (this._settings.client_id && this._settings.client_id !== state.client_id) {
                _Log.Log.error("ResponseValidator._processSigninParams: client_id mismatch on settings vs. signin state");
                return Promise.reject(new Error("client_id mismatch on settings vs. signin state"));
            }

        // now that we know the state matches, take the stored data
        // and set it into the response so callers can get their state
        // this is important for both success & error outcomes
        _Log.Log.debug("ResponseValidator._processSigninParams: state validated");
        response.state = state.data;

        if (response.error) {
            _Log.Log.warn("ResponseValidator._processSigninParams: Response was error", response.error);
            return Promise.reject(new _ErrorResponse.ErrorResponse(response));
        }

        if (state.nonce && !response.id_token) {
            _Log.Log.error("ResponseValidator._processSigninParams: Expecting id_token in response");
            return Promise.reject(new Error("No id_token in response"));
        }

        if (!state.nonce && response.id_token) {
            _Log.Log.error("ResponseValidator._processSigninParams: Not expecting id_token in response");
            return Promise.reject(new Error("Unexpected id_token in response"));
        }

        if (state.code_verifier && !response.code) {
            _Log.Log.error("ResponseValidator._processSigninParams: Expecting code in response");
            return Promise.reject(new Error("No code in response"));
        }

        if (!state.code_verifier && response.code) {
            _Log.Log.error("ResponseValidator._processSigninParams: Not expecting code in response");
            return Promise.reject(new Error("Unexpected code in response"));
        }

        if (!response.scope) {
            // if there's no scope on the response, then assume all scopes granted (per-spec) and copy over scopes from original request
            response.scope = state.scope;
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processClaims = function _processClaims(state, response) {
        var _this2 = this;

        if (response.isOpenIdConnect) {
            _Log.Log.debug("ResponseValidator._processClaims: response is OIDC, processing claims");

            response.profile = this._filterProtocolClaims(response.profile);

            if (state.skipUserInfo !== true && this._settings.loadUserInfo && response.access_token) {
                _Log.Log.debug("ResponseValidator._processClaims: loading user info");

                return this._userInfoService.getClaims(response.access_token).then(function (claims) {
                    _Log.Log.debug("ResponseValidator._processClaims: user info claims received from user info endpoint");

                    if (claims.sub !== response.profile.sub) {
                        _Log.Log.error("ResponseValidator._processClaims: sub from user info endpoint does not match sub in access_token");
                        return Promise.reject(new Error("sub from user info endpoint does not match sub in access_token"));
                    }

                    response.profile = _this2._mergeClaims(response.profile, claims);
                    _Log.Log.debug("ResponseValidator._processClaims: user info claims received, updated profile:", response.profile);

                    return response;
                });
            } else {
                _Log.Log.debug("ResponseValidator._processClaims: not loading user info");
            }
        } else {
            _Log.Log.debug("ResponseValidator._processClaims: response is not OIDC, not processing claims");
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._mergeClaims = function _mergeClaims(claims1, claims2) {
        var result = Object.assign({}, claims1);

        for (var name in claims2) {
            var values = claims2[name];
            if (!Array.isArray(values)) {
                values = [values];
            }

            for (var i = 0; i < values.length; i++) {
                var value = values[i];
                if (!result[name]) {
                    result[name] = value;
                } else if (Array.isArray(result[name])) {
                    if (result[name].indexOf(value) < 0) {
                        result[name].push(value);
                    }
                } else if (result[name] !== value) {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                        result[name] = this._mergeClaims(result[name], value);
                    } else {
                        result[name] = [result[name], value];
                    }
                }
            }
        }

        return result;
    };

    ResponseValidator.prototype._filterProtocolClaims = function _filterProtocolClaims(claims) {
        _Log.Log.debug("ResponseValidator._filterProtocolClaims, incoming claims:", claims);

        var result = Object.assign({}, claims);

        if (this._settings._filterProtocolClaims) {
            ProtocolClaims.forEach(function (type) {
                delete result[type];
            });

            _Log.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims filtered", result);
        } else {
            _Log.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims not filtered");
        }

        return result;
    };

    ResponseValidator.prototype._validateTokens = function _validateTokens(state, response) {
        if (response.code) {
            _Log.Log.debug("ResponseValidator._validateTokens: Validating code");
            return this._processCode(state, response);
        }

        if (response.id_token) {
            if (response.access_token) {
                _Log.Log.debug("ResponseValidator._validateTokens: Validating id_token and access_token");
                return this._validateIdTokenAndAccessToken(state, response);
            }

            _Log.Log.debug("ResponseValidator._validateTokens: Validating id_token");
            return this._validateIdToken(state, response);
        }

        _Log.Log.debug("ResponseValidator._validateTokens: No code to process or id_token to validate");
        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processCode = function _processCode(state, response) {
        var _this3 = this;

        var request = {
            client_id: state.client_id,
            client_secret: state.client_secret,
            code: response.code,
            redirect_uri: state.redirect_uri,
            code_verifier: state.code_verifier
        };

        if (state.extraTokenParams && _typeof(state.extraTokenParams) === 'object') {
            Object.assign(request, state.extraTokenParams);
        }

        return this._tokenClient.exchangeCode(request).then(function (tokenResponse) {

            for (var key in tokenResponse) {
                response[key] = tokenResponse[key];
            }

            if (response.id_token) {
                _Log.Log.debug("ResponseValidator._processCode: token response successful, processing id_token");
                return _this3._validateIdTokenAttributes(state, response);
            } else {
                _Log.Log.debug("ResponseValidator._processCode: token response successful, returning response");
            }

            return response;
        });
    };

    ResponseValidator.prototype._validateIdTokenAttributes = function _validateIdTokenAttributes(state, response) {
        var _this4 = this;

        return this._metadataService.getIssuer().then(function (issuer) {

            var audience = state.client_id;
            var clockSkewInSeconds = _this4._settings.clockSkew;
            _Log.Log.debug("ResponseValidator._validateIdTokenAttributes: Validaing JWT attributes; using clock skew (in seconds) of: ", clockSkewInSeconds);

            return _this4._joseUtil.validateJwtAttributes(response.id_token, issuer, audience, clockSkewInSeconds).then(function (payload) {

                if (state.nonce && state.nonce !== payload.nonce) {
                    _Log.Log.error("ResponseValidator._validateIdTokenAttributes: Invalid nonce in id_token");
                    return Promise.reject(new Error("Invalid nonce in id_token"));
                }

                if (!payload.sub) {
                    _Log.Log.error("ResponseValidator._validateIdTokenAttributes: No sub present in id_token");
                    return Promise.reject(new Error("No sub present in id_token"));
                }

                response.profile = payload;
                return response;
            });
        });
    };

    ResponseValidator.prototype._validateIdTokenAndAccessToken = function _validateIdTokenAndAccessToken(state, response) {
        var _this5 = this;

        return this._validateIdToken(state, response).then(function (response) {
            return _this5._validateAccessToken(response);
        });
    };

    ResponseValidator.prototype._validateIdToken = function _validateIdToken(state, response) {
        var _this6 = this;

        if (!state.nonce) {
            _Log.Log.error("ResponseValidator._validateIdToken: No nonce on state");
            return Promise.reject(new Error("No nonce on state"));
        }

        var jwt = this._joseUtil.parseJwt(response.id_token);
        if (!jwt || !jwt.header || !jwt.payload) {
            _Log.Log.error("ResponseValidator._validateIdToken: Failed to parse id_token", jwt);
            return Promise.reject(new Error("Failed to parse id_token"));
        }

        if (state.nonce !== jwt.payload.nonce) {
            _Log.Log.error("ResponseValidator._validateIdToken: Invalid nonce in id_token");
            return Promise.reject(new Error("Invalid nonce in id_token"));
        }

        var kid = jwt.header.kid;

        return this._metadataService.getIssuer().then(function (issuer) {
            _Log.Log.debug("ResponseValidator._validateIdToken: Received issuer");

            return _this6._metadataService.getSigningKeys().then(function (keys) {
                if (!keys) {
                    _Log.Log.error("ResponseValidator._validateIdToken: No signing keys from metadata");
                    return Promise.reject(new Error("No signing keys from metadata"));
                }

                _Log.Log.debug("ResponseValidator._validateIdToken: Received signing keys");
                var key = void 0;
                if (!kid) {
                    keys = _this6._filterByAlg(keys, jwt.header.alg);

                    if (keys.length > 1) {
                        _Log.Log.error("ResponseValidator._validateIdToken: No kid found in id_token and more than one key found in metadata");
                        return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                    } else {
                        // kid is mandatory only when there are multiple keys in the referenced JWK Set document
                        // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
                        key = keys[0];
                    }
                } else {
                    key = keys.filter(function (key) {
                        return key.kid === kid;
                    })[0];
                }

                if (!key) {
                    _Log.Log.error("ResponseValidator._validateIdToken: No key matching kid or alg found in signing keys");
                    return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                }

                var audience = state.client_id;

                var clockSkewInSeconds = _this6._settings.clockSkew;
                _Log.Log.debug("ResponseValidator._validateIdToken: Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);

                return _this6._joseUtil.validateJwt(response.id_token, key, issuer, audience, clockSkewInSeconds).then(function () {
                    _Log.Log.debug("ResponseValidator._validateIdToken: JWT validation successful");

                    if (!jwt.payload.sub) {
                        _Log.Log.error("ResponseValidator._validateIdToken: No sub present in id_token");
                        return Promise.reject(new Error("No sub present in id_token"));
                    }

                    response.profile = jwt.payload;

                    return response;
                });
            });
        });
    };

    ResponseValidator.prototype._filterByAlg = function _filterByAlg(keys, alg) {
        var kty = null;
        if (alg.startsWith("RS")) {
            kty = "RSA";
        } else if (alg.startsWith("PS")) {
            kty = "PS";
        } else if (alg.startsWith("ES")) {
            kty = "EC";
        } else {
            _Log.Log.debug("ResponseValidator._filterByAlg: alg not supported: ", alg);
            return [];
        }

        _Log.Log.debug("ResponseValidator._filterByAlg: Looking for keys that match kty: ", kty);

        keys = keys.filter(function (key) {
            return key.kty === kty;
        });

        _Log.Log.debug("ResponseValidator._filterByAlg: Number of keys that match kty: ", kty, keys.length);

        return keys;
    };

    ResponseValidator.prototype._validateAccessToken = function _validateAccessToken(response) {
        if (!response.profile) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No profile loaded from id_token");
            return Promise.reject(new Error("No profile loaded from id_token"));
        }

        if (!response.profile.at_hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No at_hash in id_token");
            return Promise.reject(new Error("No at_hash in id_token"));
        }

        if (!response.id_token) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No id_token");
            return Promise.reject(new Error("No id_token"));
        }

        var jwt = this._joseUtil.parseJwt(response.id_token);
        if (!jwt || !jwt.header) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Failed to parse id_token", jwt);
            return Promise.reject(new Error("Failed to parse id_token"));
        }

        var hashAlg = jwt.header.alg;
        if (!hashAlg || hashAlg.length !== 5) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        var hashBits = hashAlg.substr(2, 3);
        if (!hashBits) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg, hashBits);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        hashBits = parseInt(hashBits);
        if (hashBits !== 256 && hashBits !== 384 && hashBits !== 512) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg, hashBits);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        var sha = "sha" + hashBits;
        var hash = this._joseUtil.hashString(response.access_token, sha);
        if (!hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: access_token hash failed:", sha);
            return Promise.reject(new Error("Failed to validate at_hash"));
        }

        var left = hash.substr(0, hash.length / 2);
        var left_b64u = this._joseUtil.hexToBase64Url(left);
        if (left_b64u !== response.profile.at_hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Failed to validate at_hash", left_b64u, response.profile.at_hash);
            return Promise.reject(new Error("Failed to validate at_hash"));
        }

        _Log.Log.debug("ResponseValidator._validateAccessToken: success");

        return Promise.resolve(response);
    };

    return ResponseValidator;
}();

/***/ }),

/***/ "./src/SessionMonitor.js":
/*!*******************************!*\
  !*** ./src/SessionMonitor.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SessionMonitor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _CheckSessionIFrame = __webpack_require__(/*! ./CheckSessionIFrame.js */ "./src/CheckSessionIFrame.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SessionMonitor = exports.SessionMonitor = function () {
    function SessionMonitor(userManager) {
        var _this = this;

        var CheckSessionIFrameCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _CheckSessionIFrame.CheckSessionIFrame;
        var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Global.Global.timer;

        _classCallCheck(this, SessionMonitor);

        if (!userManager) {
            _Log.Log.error("SessionMonitor.ctor: No user manager passed to SessionMonitor");
            throw new Error("userManager");
        }

        this._userManager = userManager;
        this._CheckSessionIFrameCtor = CheckSessionIFrameCtor;
        this._timer = timer;

        this._userManager.events.addUserLoaded(this._start.bind(this));
        this._userManager.events.addUserUnloaded(this._stop.bind(this));

        this._userManager.getUser().then(function (user) {
            // doing this manually here since calling getUser 
            // doesn't trigger load event.
            if (user) {
                _this._start(user);
            } else if (_this._settings.monitorAnonymousSession) {
                _this._userManager.querySessionStatus().then(function (session) {
                    var tmpUser = {
                        session_state: session.session_state
                    };
                    if (session.sub && session.sid) {
                        tmpUser.profile = {
                            sub: session.sub,
                            sid: session.sid
                        };
                    }
                    _this._start(tmpUser);
                }).catch(function (err) {
                    // catch to suppress errors since we're in a ctor
                    _Log.Log.error("SessionMonitor ctor: error from querySessionStatus:", err.message);
                });
            }
        }).catch(function (err) {
            // catch to suppress errors since we're in a ctor
            _Log.Log.error("SessionMonitor ctor: error from getUser:", err.message);
        });
    }

    SessionMonitor.prototype._start = function _start(user) {
        var _this2 = this;

        var session_state = user.session_state;

        if (session_state) {
            if (user.profile) {
                this._sub = user.profile.sub;
                this._sid = user.profile.sid;
                _Log.Log.debug("SessionMonitor._start: session_state:", session_state, ", sub:", this._sub);
            } else {
                this._sub = undefined;
                this._sid = undefined;
                _Log.Log.debug("SessionMonitor._start: session_state:", session_state, ", anonymous user");
            }

            if (!this._checkSessionIFrame) {
                this._metadataService.getCheckSessionIframe().then(function (url) {
                    if (url) {
                        _Log.Log.debug("SessionMonitor._start: Initializing check session iframe");

                        var client_id = _this2._client_id;
                        var interval = _this2._checkSessionInterval;
                        var stopOnError = _this2._stopCheckSessionOnError;

                        _this2._checkSessionIFrame = new _this2._CheckSessionIFrameCtor(_this2._callback.bind(_this2), client_id, url, interval, stopOnError);
                        _this2._checkSessionIFrame.load().then(function () {
                            _this2._checkSessionIFrame.start(session_state);
                        });
                    } else {
                        _Log.Log.warn("SessionMonitor._start: No check session iframe found in the metadata");
                    }
                }).catch(function (err) {
                    // catch to suppress errors since we're in non-promise callback
                    _Log.Log.error("SessionMonitor._start: Error from getCheckSessionIframe:", err.message);
                });
            } else {
                this._checkSessionIFrame.start(session_state);
            }
        }
    };

    SessionMonitor.prototype._stop = function _stop() {
        var _this3 = this;

        this._sub = undefined;
        this._sid = undefined;

        if (this._checkSessionIFrame) {
            _Log.Log.debug("SessionMonitor._stop");
            this._checkSessionIFrame.stop();
        }

        if (this._settings.monitorAnonymousSession) {
            // using a timer to delay re-initialization to avoid race conditions during signout
            var timerHandle = this._timer.setInterval(function () {
                _this3._timer.clearInterval(timerHandle);

                _this3._userManager.querySessionStatus().then(function (session) {
                    var tmpUser = {
                        session_state: session.session_state
                    };
                    if (session.sub && session.sid) {
                        tmpUser.profile = {
                            sub: session.sub,
                            sid: session.sid
                        };
                    }
                    _this3._start(tmpUser);
                }).catch(function (err) {
                    // catch to suppress errors since we're in a callback
                    _Log.Log.error("SessionMonitor: error from querySessionStatus:", err.message);
                });
            }, 1000);
        }
    };

    SessionMonitor.prototype._callback = function _callback() {
        var _this4 = this;

        this._userManager.querySessionStatus().then(function (session) {
            var raiseEvent = true;

            if (session) {
                if (session.sub === _this4._sub) {
                    raiseEvent = false;
                    _this4._checkSessionIFrame.start(session.session_state);

                    if (session.sid === _this4._sid) {
                        _Log.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, restarting check session iframe; session_state:", session.session_state);
                    } else {
                        _Log.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:", session.session_state);
                        _this4._userManager.events._raiseUserSessionChanged();
                    }
                } else {
                    _Log.Log.debug("SessionMonitor._callback: Different subject signed into OP:", session.sub);
                }
            } else {
                _Log.Log.debug("SessionMonitor._callback: Subject no longer signed into OP");
            }

            if (raiseEvent) {
                if (_this4._sub) {
                    _Log.Log.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed out event");
                    _this4._userManager.events._raiseUserSignedOut();
                } else {
                    _Log.Log.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed in event");
                    _this4._userManager.events._raiseUserSignedIn();
                }
            }
        }).catch(function (err) {
            if (_this4._sub) {
                _Log.Log.debug("SessionMonitor._callback: Error calling queryCurrentSigninSession; raising signed out event", err.message);
                _this4._userManager.events._raiseUserSignedOut();
            }
        });
    };

    _createClass(SessionMonitor, [{
        key: '_settings',
        get: function get() {
            return this._userManager.settings;
        }
    }, {
        key: '_metadataService',
        get: function get() {
            return this._userManager.metadataService;
        }
    }, {
        key: '_client_id',
        get: function get() {
            return this._settings.client_id;
        }
    }, {
        key: '_checkSessionInterval',
        get: function get() {
            return this._settings.checkSessionInterval;
        }
    }, {
        key: '_stopCheckSessionOnError',
        get: function get() {
            return this._settings.stopCheckSessionOnError;
        }
    }]);

    return SessionMonitor;
}();

/***/ }),

/***/ "./src/SigninRequest.js":
/*!******************************!*\
  !*** ./src/SigninRequest.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninRequest = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

var _SigninState = __webpack_require__(/*! ./SigninState.js */ "./src/SigninState.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SigninRequest = exports.SigninRequest = function () {
    function SigninRequest(_ref) {
        var url = _ref.url,
            client_id = _ref.client_id,
            redirect_uri = _ref.redirect_uri,
            response_type = _ref.response_type,
            scope = _ref.scope,
            authority = _ref.authority,
            data = _ref.data,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            id_token_hint = _ref.id_token_hint,
            login_hint = _ref.login_hint,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            response_mode = _ref.response_mode,
            request = _ref.request,
            request_uri = _ref.request_uri,
            extraQueryParams = _ref.extraQueryParams,
            request_type = _ref.request_type,
            client_secret = _ref.client_secret,
            extraTokenParams = _ref.extraTokenParams,
            skipUserInfo = _ref.skipUserInfo;

        _classCallCheck(this, SigninRequest);

        if (!url) {
            _Log.Log.error("SigninRequest.ctor: No url passed");
            throw new Error("url");
        }
        if (!client_id) {
            _Log.Log.error("SigninRequest.ctor: No client_id passed");
            throw new Error("client_id");
        }
        if (!redirect_uri) {
            _Log.Log.error("SigninRequest.ctor: No redirect_uri passed");
            throw new Error("redirect_uri");
        }
        if (!response_type) {
            _Log.Log.error("SigninRequest.ctor: No response_type passed");
            throw new Error("response_type");
        }
        if (!scope) {
            _Log.Log.error("SigninRequest.ctor: No scope passed");
            throw new Error("scope");
        }
        if (!authority) {
            _Log.Log.error("SigninRequest.ctor: No authority passed");
            throw new Error("authority");
        }

        var oidc = SigninRequest.isOidc(response_type);
        var code = SigninRequest.isCode(response_type);

        if (!response_mode) {
            response_mode = SigninRequest.isCode(response_type) ? "query" : null;
        }

        this.state = new _SigninState.SigninState({ nonce: oidc,
            data: data, client_id: client_id, authority: authority, redirect_uri: redirect_uri,
            code_verifier: code,
            request_type: request_type, response_mode: response_mode,
            client_secret: client_secret, scope: scope, extraTokenParams: extraTokenParams, skipUserInfo: skipUserInfo });

        url = _UrlUtility.UrlUtility.addQueryParam(url, "client_id", client_id);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "redirect_uri", redirect_uri);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "response_type", response_type);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "scope", scope);

        url = _UrlUtility.UrlUtility.addQueryParam(url, "state", this.state.id);
        if (oidc) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, "nonce", this.state.nonce);
        }
        if (code) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, "code_challenge", this.state.code_challenge);
            url = _UrlUtility.UrlUtility.addQueryParam(url, "code_challenge_method", "S256");
        }

        var optional = { prompt: prompt, display: display, max_age: max_age, ui_locales: ui_locales, id_token_hint: id_token_hint, login_hint: login_hint, acr_values: acr_values, resource: resource, request: request, request_uri: request_uri, response_mode: response_mode };
        for (var key in optional) {
            if (optional[key]) {
                url = _UrlUtility.UrlUtility.addQueryParam(url, key, optional[key]);
            }
        }

        for (var _key in extraQueryParams) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, _key, extraQueryParams[_key]);
        }

        this.url = url;
    }

    SigninRequest.isOidc = function isOidc(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "id_token";
        });
        return !!result[0];
    };

    SigninRequest.isOAuth = function isOAuth(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "token";
        });
        return !!result[0];
    };

    SigninRequest.isCode = function isCode(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "code";
        });
        return !!result[0];
    };

    return SigninRequest;
}();

/***/ }),

/***/ "./src/SigninResponse.js":
/*!*******************************!*\
  !*** ./src/SigninResponse.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcScope = "openid";

var SigninResponse = exports.SigninResponse = function () {
    function SigninResponse(url) {
        var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";

        _classCallCheck(this, SigninResponse);

        var values = _UrlUtility.UrlUtility.parseUrlFragment(url, delimiter);

        this.error = values.error;
        this.error_description = values.error_description;
        this.error_uri = values.error_uri;

        this.code = values.code;
        this.state = values.state;
        this.id_token = values.id_token;
        this.session_state = values.session_state;
        this.access_token = values.access_token;
        this.token_type = values.token_type;
        this.scope = values.scope;
        this.profile = undefined; // will be set from ResponseValidator

        this.expires_in = values.expires_in;
    }

    _createClass(SigninResponse, [{
        key: "expires_in",
        get: function get() {
            if (this.expires_at) {
                var now = parseInt(Date.now() / 1000);
                return this.expires_at - now;
            }
            return undefined;
        },
        set: function set(value) {
            var expires_in = parseInt(value);
            if (typeof expires_in === 'number' && expires_in > 0) {
                var now = parseInt(Date.now() / 1000);
                this.expires_at = now + expires_in;
            }
        }
    }, {
        key: "expired",
        get: function get() {
            var expires_in = this.expires_in;
            if (expires_in !== undefined) {
                return expires_in <= 0;
            }
            return undefined;
        }
    }, {
        key: "scopes",
        get: function get() {
            return (this.scope || "").split(" ");
        }
    }, {
        key: "isOpenIdConnect",
        get: function get() {
            return this.scopes.indexOf(OidcScope) >= 0 || !!this.id_token;
        }
    }]);

    return SigninResponse;
}();

/***/ }),

/***/ "./src/SigninState.js":
/*!****************************!*\
  !*** ./src/SigninState.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _State2 = __webpack_require__(/*! ./State.js */ "./src/State.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

var _random = __webpack_require__(/*! ./random.js */ "./src/random.js");

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SigninState = exports.SigninState = function (_State) {
    _inherits(SigninState, _State);

    function SigninState() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            nonce = _ref.nonce,
            authority = _ref.authority,
            client_id = _ref.client_id,
            redirect_uri = _ref.redirect_uri,
            code_verifier = _ref.code_verifier,
            response_mode = _ref.response_mode,
            client_secret = _ref.client_secret,
            scope = _ref.scope,
            extraTokenParams = _ref.extraTokenParams,
            skipUserInfo = _ref.skipUserInfo;

        _classCallCheck(this, SigninState);

        var _this = _possibleConstructorReturn(this, _State.call(this, arguments[0]));

        if (nonce === true) {
            _this._nonce = (0, _random2.default)();
        } else if (nonce) {
            _this._nonce = nonce;
        }

        if (code_verifier === true) {
            // random() produces 32 length
            _this._code_verifier = (0, _random2.default)() + (0, _random2.default)() + (0, _random2.default)();
        } else if (code_verifier) {
            _this._code_verifier = code_verifier;
        }

        if (_this.code_verifier) {
            var hash = _JoseUtil.JoseUtil.hashString(_this.code_verifier, "SHA256");
            _this._code_challenge = _JoseUtil.JoseUtil.hexToBase64Url(hash);
        }

        _this._redirect_uri = redirect_uri;
        _this._authority = authority;
        _this._client_id = client_id;
        _this._response_mode = response_mode;
        _this._client_secret = client_secret;
        _this._scope = scope;
        _this._extraTokenParams = extraTokenParams;
        _this._skipUserInfo = skipUserInfo;
        return _this;
    }

    SigninState.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("SigninState.toStorageString");
        return JSON.stringify({
            id: this.id,
            data: this.data,
            created: this.created,
            request_type: this.request_type,
            nonce: this.nonce,
            code_verifier: this.code_verifier,
            redirect_uri: this.redirect_uri,
            authority: this.authority,
            client_id: this.client_id,
            response_mode: this.response_mode,
            client_secret: this.client_secret,
            scope: this.scope,
            extraTokenParams: this.extraTokenParams,
            skipUserInfo: this.skipUserInfo
        });
    };

    SigninState.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("SigninState.fromStorageString");
        var data = JSON.parse(storageString);
        return new SigninState(data);
    };

    _createClass(SigninState, [{
        key: 'nonce',
        get: function get() {
            return this._nonce;
        }
    }, {
        key: 'authority',
        get: function get() {
            return this._authority;
        }
    }, {
        key: 'client_id',
        get: function get() {
            return this._client_id;
        }
    }, {
        key: 'redirect_uri',
        get: function get() {
            return this._redirect_uri;
        }
    }, {
        key: 'code_verifier',
        get: function get() {
            return this._code_verifier;
        }
    }, {
        key: 'code_challenge',
        get: function get() {
            return this._code_challenge;
        }
    }, {
        key: 'response_mode',
        get: function get() {
            return this._response_mode;
        }
    }, {
        key: 'client_secret',
        get: function get() {
            return this._client_secret;
        }
    }, {
        key: 'scope',
        get: function get() {
            return this._scope;
        }
    }, {
        key: 'extraTokenParams',
        get: function get() {
            return this._extraTokenParams;
        }
    }, {
        key: 'skipUserInfo',
        get: function get() {
            return this._skipUserInfo;
        }
    }]);

    return SigninState;
}(_State2.State);

/***/ }),

/***/ "./src/SignoutRequest.js":
/*!*******************************!*\
  !*** ./src/SignoutRequest.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignoutRequest = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

var _State = __webpack_require__(/*! ./State.js */ "./src/State.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SignoutRequest = exports.SignoutRequest = function SignoutRequest(_ref) {
    var url = _ref.url,
        id_token_hint = _ref.id_token_hint,
        post_logout_redirect_uri = _ref.post_logout_redirect_uri,
        data = _ref.data,
        extraQueryParams = _ref.extraQueryParams,
        request_type = _ref.request_type;

    _classCallCheck(this, SignoutRequest);

    if (!url) {
        _Log.Log.error("SignoutRequest.ctor: No url passed");
        throw new Error("url");
    }

    if (id_token_hint) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, "id_token_hint", id_token_hint);
    }

    if (post_logout_redirect_uri) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, "post_logout_redirect_uri", post_logout_redirect_uri);

        if (data) {
            this.state = new _State.State({ data: data, request_type: request_type });

            url = _UrlUtility.UrlUtility.addQueryParam(url, "state", this.state.id);
        }
    }

    for (var key in extraQueryParams) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, key, extraQueryParams[key]);
    }

    this.url = url;
};

/***/ }),

/***/ "./src/SignoutResponse.js":
/*!********************************!*\
  !*** ./src/SignoutResponse.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.SignoutResponse = undefined;

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SignoutResponse = exports.SignoutResponse = function SignoutResponse(url) {
        _classCallCheck(this, SignoutResponse);

        var values = _UrlUtility.UrlUtility.parseUrlFragment(url, "?");

        this.error = values.error;
        this.error_description = values.error_description;
        this.error_uri = values.error_uri;

        this.state = values.state;
};

/***/ }),

/***/ "./src/SilentRenewService.js":
/*!***********************************!*\
  !*** ./src/SilentRenewService.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SilentRenewService = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SilentRenewService = exports.SilentRenewService = function () {
    function SilentRenewService(userManager) {
        _classCallCheck(this, SilentRenewService);

        this._userManager = userManager;
    }

    SilentRenewService.prototype.start = function start() {
        if (!this._callback) {
            this._callback = this._tokenExpiring.bind(this);
            this._userManager.events.addAccessTokenExpiring(this._callback);

            // this will trigger loading of the user so the expiring events can be initialized
            this._userManager.getUser().then(function (user) {
                // deliberate nop
            }).catch(function (err) {
                // catch to suppress errors since we're in a ctor
                _Log.Log.error("SilentRenewService.start: Error from getUser:", err.message);
            });
        }
    };

    SilentRenewService.prototype.stop = function stop() {
        if (this._callback) {
            this._userManager.events.removeAccessTokenExpiring(this._callback);
            delete this._callback;
        }
    };

    SilentRenewService.prototype._tokenExpiring = function _tokenExpiring() {
        var _this = this;

        this._userManager.signinSilent().then(function (user) {
            _Log.Log.debug("SilentRenewService._tokenExpiring: Silent token renewal successful");
        }, function (err) {
            _Log.Log.error("SilentRenewService._tokenExpiring: Error from signinSilent:", err.message);
            _this._userManager.events._raiseSilentRenewError(err);
        });
    };

    return SilentRenewService;
}();

/***/ }),

/***/ "./src/State.js":
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.State = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _random = __webpack_require__(/*! ./random.js */ "./src/random.js");

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = exports.State = function () {
    function State() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id = _ref.id,
            data = _ref.data,
            created = _ref.created,
            request_type = _ref.request_type;

        _classCallCheck(this, State);

        this._id = id || (0, _random2.default)();
        this._data = data;

        if (typeof created === 'number' && created > 0) {
            this._created = created;
        } else {
            this._created = parseInt(Date.now() / 1000);
        }
        this._request_type = request_type;
    }

    State.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("State.toStorageString");
        return JSON.stringify({
            id: this.id,
            data: this.data,
            created: this.created,
            request_type: this.request_type
        });
    };

    State.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("State.fromStorageString");
        return new State(JSON.parse(storageString));
    };

    State.clearStaleState = function clearStaleState(storage, age) {

        var cutoff = Date.now() / 1000 - age;

        return storage.getAllKeys().then(function (keys) {
            _Log.Log.debug("State.clearStaleState: got keys", keys);

            var promises = [];

            var _loop = function _loop(i) {
                var key = keys[i];
                p = storage.get(key).then(function (item) {
                    var remove = false;

                    if (item) {
                        try {
                            var state = State.fromStorageString(item);

                            _Log.Log.debug("State.clearStaleState: got item from key: ", key, state.created);

                            if (state.created <= cutoff) {
                                remove = true;
                            }
                        } catch (e) {
                            _Log.Log.error("State.clearStaleState: Error parsing state for key", key, e.message);
                            remove = true;
                        }
                    } else {
                        _Log.Log.debug("State.clearStaleState: no item in storage for key: ", key);
                        remove = true;
                    }

                    if (remove) {
                        _Log.Log.debug("State.clearStaleState: removed item for key: ", key);
                        return storage.remove(key);
                    }
                });


                promises.push(p);
            };

            for (var i = 0; i < keys.length; i++) {
                var p;

                _loop(i);
            }

            _Log.Log.debug("State.clearStaleState: waiting on promise count:", promises.length);
            return Promise.all(promises);
        });
    };

    _createClass(State, [{
        key: 'id',
        get: function get() {
            return this._id;
        }
    }, {
        key: 'data',
        get: function get() {
            return this._data;
        }
    }, {
        key: 'created',
        get: function get() {
            return this._created;
        }
    }, {
        key: 'request_type',
        get: function get() {
            return this._request_type;
        }
    }]);

    return State;
}();

/***/ }),

/***/ "./src/Timer.js":
/*!**********************!*\
  !*** ./src/Timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Timer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

var _Event2 = __webpack_require__(/*! ./Event.js */ "./src/Event.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var TimerDuration = 5; // seconds

var Timer = exports.Timer = function (_Event) {
    _inherits(Timer, _Event);

    function Timer(name) {
        var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.timer;
        var nowFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, _Event.call(this, name));

        _this._timer = timer;

        if (nowFunc) {
            _this._nowFunc = nowFunc;
        } else {
            _this._nowFunc = function () {
                return Date.now() / 1000;
            };
        }
        return _this;
    }

    Timer.prototype.init = function init(duration) {
        if (duration <= 0) {
            duration = 1;
        }
        duration = parseInt(duration);

        var expiration = this.now + duration;
        if (this.expiration === expiration && this._timerHandle) {
            // no need to reinitialize to same expiration, so bail out
            _Log.Log.debug("Timer.init timer " + this._name + " skipping initialization since already initialized for expiration:", this.expiration);
            return;
        }

        this.cancel();

        _Log.Log.debug("Timer.init timer " + this._name + " for duration:", duration);
        this._expiration = expiration;

        // we're using a fairly short timer and then checking the expiration in the
        // callback to handle scenarios where the browser device sleeps, and then
        // the timers end up getting delayed.
        var timerDuration = TimerDuration;
        if (duration < timerDuration) {
            timerDuration = duration;
        }
        this._timerHandle = this._timer.setInterval(this._callback.bind(this), timerDuration * 1000);
    };

    Timer.prototype.cancel = function cancel() {
        if (this._timerHandle) {
            _Log.Log.debug("Timer.cancel: ", this._name);
            this._timer.clearInterval(this._timerHandle);
            this._timerHandle = null;
        }
    };

    Timer.prototype._callback = function _callback() {
        var diff = this._expiration - this.now;
        _Log.Log.debug("Timer.callback; " + this._name + " timer expires in:", diff);

        if (this._expiration <= this.now) {
            this.cancel();
            _Event.prototype.raise.call(this);
        }
    };

    _createClass(Timer, [{
        key: 'now',
        get: function get() {
            return parseInt(this._nowFunc());
        }
    }, {
        key: 'expiration',
        get: function get() {
            return this._expiration;
        }
    }]);

    return Timer;
}(_Event2.Event);

/***/ }),

/***/ "./src/TokenClient.js":
/*!****************************!*\
  !*** ./src/TokenClient.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenClient = undefined;

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var TokenClient = exports.TokenClient = function () {
    function TokenClient(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;

        _classCallCheck(this, TokenClient);

        if (!settings) {
            _Log.Log.error("TokenClient.ctor: No settings passed");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor();
        this._metadataService = new MetadataServiceCtor(this._settings);
    }

    TokenClient.prototype.exchangeCode = function exchangeCode() {
        var _this = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.grant_type = args.grant_type || "authorization_code";
        args.client_id = args.client_id || this._settings.client_id;
        args.redirect_uri = args.redirect_uri || this._settings.redirect_uri;

        if (!args.code) {
            _Log.Log.error("TokenClient.exchangeCode: No code passed");
            return Promise.reject(new Error("A code is required"));
        }
        if (!args.redirect_uri) {
            _Log.Log.error("TokenClient.exchangeCode: No redirect_uri passed");
            return Promise.reject(new Error("A redirect_uri is required"));
        }
        if (!args.code_verifier) {
            _Log.Log.error("TokenClient.exchangeCode: No code_verifier passed");
            return Promise.reject(new Error("A code_verifier is required"));
        }
        if (!args.client_id) {
            _Log.Log.error("TokenClient.exchangeCode: No client_id passed");
            return Promise.reject(new Error("A client_id is required"));
        }

        return this._metadataService.getTokenEndpoint(false).then(function (url) {
            _Log.Log.debug("TokenClient.exchangeCode: Received token endpoint");

            return _this._jsonService.postForm(url, args).then(function (response) {
                _Log.Log.debug("TokenClient.exchangeCode: response received");
                return response;
            });
        });
    };

    TokenClient.prototype.exchangeRefreshToken = function exchangeRefreshToken() {
        var _this2 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.grant_type = args.grant_type || "refresh_token";
        args.client_id = args.client_id || this._settings.client_id;
        args.client_secret = args.client_secret || this._settings.client_secret;

        if (!args.refresh_token) {
            _Log.Log.error("TokenClient.exchangeRefreshToken: No refresh_token passed");
            return Promise.reject(new Error("A refresh_token is required"));
        }
        if (!args.client_id) {
            _Log.Log.error("TokenClient.exchangeRefreshToken: No client_id passed");
            return Promise.reject(new Error("A client_id is required"));
        }

        return this._metadataService.getTokenEndpoint(false).then(function (url) {
            _Log.Log.debug("TokenClient.exchangeRefreshToken: Received token endpoint");

            return _this2._jsonService.postForm(url, args).then(function (response) {
                _Log.Log.debug("TokenClient.exchangeRefreshToken: response received");
                return response;
            });
        });
    };

    return TokenClient;
}();

/***/ }),

/***/ "./src/TokenRevocationClient.js":
/*!**************************************!*\
  !*** ./src/TokenRevocationClient.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenRevocationClient = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var AccessTokenTypeHint = "access_token";
var RefreshTokenTypeHint = "refresh_token";

var TokenRevocationClient = exports.TokenRevocationClient = function () {
    function TokenRevocationClient(settings) {
        var XMLHttpRequestCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.XMLHttpRequest;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;

        _classCallCheck(this, TokenRevocationClient);

        if (!settings) {
            _Log.Log.error("TokenRevocationClient.ctor: No settings provided");
            throw new Error("No settings provided.");
        }

        this._settings = settings;
        this._XMLHttpRequestCtor = XMLHttpRequestCtor;
        this._metadataService = new MetadataServiceCtor(this._settings);
    }

    TokenRevocationClient.prototype.revoke = function revoke(token, required) {
        var _this = this;

        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "access_token";

        if (!token) {
            _Log.Log.error("TokenRevocationClient.revoke: No token provided");
            throw new Error("No token provided.");
        }

        if (type !== AccessTokenTypeHint && type != RefreshTokenTypeHint) {
            _Log.Log.error("TokenRevocationClient.revoke: Invalid token type");
            throw new Error("Invalid token type.");
        }

        return this._metadataService.getRevocationEndpoint().then(function (url) {
            if (!url) {
                if (required) {
                    _Log.Log.error("TokenRevocationClient.revoke: Revocation not supported");
                    throw new Error("Revocation not supported");
                }

                // not required, so don't error and just return
                return;
            }

            _Log.Log.debug("TokenRevocationClient.revoke: Revoking " + type);
            var client_id = _this._settings.client_id;
            var client_secret = _this._settings.client_secret;
            return _this._revoke(url, client_id, client_secret, token, type);
        });
    };

    TokenRevocationClient.prototype._revoke = function _revoke(url, client_id, client_secret, token, type) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {

            var xhr = new _this2._XMLHttpRequestCtor();
            xhr.open("POST", url);

            xhr.onload = function () {
                _Log.Log.debug("TokenRevocationClient.revoke: HTTP response received, status", xhr.status);

                if (xhr.status === 200) {
                    resolve();
                } else {
                    reject(Error(xhr.statusText + " (" + xhr.status + ")"));
                }
            };
            xhr.onerror = function () {
                _Log.Log.debug("TokenRevocationClient.revoke: Network Error.");
                reject("Network Error");
            };

            var body = "client_id=" + encodeURIComponent(client_id);
            if (client_secret) {
                body += "&client_secret=" + encodeURIComponent(client_secret);
            }
            body += "&token_type_hint=" + encodeURIComponent(type);
            body += "&token=" + encodeURIComponent(token);

            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(body);
        });
    };

    return TokenRevocationClient;
}();

/***/ }),

/***/ "./src/UrlUtility.js":
/*!***************************!*\
  !*** ./src/UrlUtility.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UrlUtility = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UrlUtility = exports.UrlUtility = function () {
    function UrlUtility() {
        _classCallCheck(this, UrlUtility);
    }

    UrlUtility.addQueryParam = function addQueryParam(url, name, value) {
        if (url.indexOf('?') < 0) {
            url += "?";
        }

        if (url[url.length - 1] !== "?") {
            url += "&";
        }

        url += encodeURIComponent(name);
        url += "=";
        url += encodeURIComponent(value);

        return url;
    };

    UrlUtility.parseUrlFragment = function parseUrlFragment(value) {
        var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";
        var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Global.Global;

        if (typeof value !== 'string') {
            value = global.location.href;
        }

        var idx = value.lastIndexOf(delimiter);
        if (idx >= 0) {
            value = value.substr(idx + 1);
        }

        if (delimiter === "?") {
            // if we're doing query, then strip off hash fragment before we parse
            idx = value.indexOf('#');
            if (idx >= 0) {
                value = value.substr(0, idx);
            }
        }

        var params = {},
            regex = /([^&=]+)=([^&]*)/g,
            m;

        var counter = 0;
        while (m = regex.exec(value)) {
            params[decodeURIComponent(m[1])] = decodeURIComponent(m[2].replace(/\+/g, ' '));
            if (counter++ > 50) {
                _Log.Log.error("UrlUtility.parseUrlFragment: response exceeded expected number of parameters", value);
                return {
                    error: "Response exceeded expected number of parameters"
                };
            }
        }

        for (var prop in params) {
            return params;
        }

        return {};
    };

    return UrlUtility;
}();

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function () {
    function User(_ref) {
        var id_token = _ref.id_token,
            session_state = _ref.session_state,
            access_token = _ref.access_token,
            refresh_token = _ref.refresh_token,
            token_type = _ref.token_type,
            scope = _ref.scope,
            profile = _ref.profile,
            expires_at = _ref.expires_at,
            state = _ref.state;

        _classCallCheck(this, User);

        this.id_token = id_token;
        this.session_state = session_state;
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.token_type = token_type;
        this.scope = scope;
        this.profile = profile;
        this.expires_at = expires_at;
        this.state = state;
    }

    User.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("User.toStorageString");
        return JSON.stringify({
            id_token: this.id_token,
            session_state: this.session_state,
            access_token: this.access_token,
            refresh_token: this.refresh_token,
            token_type: this.token_type,
            scope: this.scope,
            profile: this.profile,
            expires_at: this.expires_at
        });
    };

    User.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("User.fromStorageString");
        return new User(JSON.parse(storageString));
    };

    _createClass(User, [{
        key: 'expires_in',
        get: function get() {
            if (this.expires_at) {
                var now = parseInt(Date.now() / 1000);
                return this.expires_at - now;
            }
            return undefined;
        },
        set: function set(value) {
            var expires_in = parseInt(value);
            if (typeof expires_in === 'number' && expires_in > 0) {
                var now = parseInt(Date.now() / 1000);
                this.expires_at = now + expires_in;
            }
        }
    }, {
        key: 'expired',
        get: function get() {
            var expires_in = this.expires_in;
            if (expires_in !== undefined) {
                return expires_in <= 0;
            }
            return undefined;
        }
    }, {
        key: 'scopes',
        get: function get() {
            return (this.scope || "").split(" ");
        }
    }]);

    return User;
}();

/***/ }),

/***/ "./src/UserInfoService.js":
/*!********************************!*\
  !*** ./src/UserInfoService.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInfoService = undefined;

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserInfoService = exports.UserInfoService = function () {
    function UserInfoService(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;
        var joseUtil = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _JoseUtil.JoseUtil;

        _classCallCheck(this, UserInfoService);

        if (!settings) {
            _Log.Log.error("UserInfoService.ctor: No settings passed");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor(undefined, undefined, this._getClaimsFromJwt.bind(this));
        this._metadataService = new MetadataServiceCtor(this._settings);
        this._joseUtil = joseUtil;
    }

    UserInfoService.prototype.getClaims = function getClaims(token) {
        var _this = this;

        if (!token) {
            _Log.Log.error("UserInfoService.getClaims: No token passed");
            return Promise.reject(new Error("A token is required"));
        }

        return this._metadataService.getUserInfoEndpoint().then(function (url) {
            _Log.Log.debug("UserInfoService.getClaims: received userinfo url", url);

            return _this._jsonService.getJson(url, token).then(function (claims) {
                _Log.Log.debug("UserInfoService.getClaims: claims received", claims);
                return claims;
            });
        });
    };

    UserInfoService.prototype._getClaimsFromJwt = function _getClaimsFromJwt(req) {
        var _this2 = this;

        try {
            var jwt = this._joseUtil.parseJwt(req.responseText);
            if (!jwt || !jwt.header || !jwt.payload) {
                _Log.Log.error("UserInfoService._getClaimsFromJwt: Failed to parse JWT", jwt);
                return Promise.reject(new Error("Failed to parse id_token"));
            }

            var kid = jwt.header.kid;

            var issuerPromise = void 0;
            switch (this._settings.userInfoJwtIssuer) {
                case 'OP':
                    issuerPromise = this._metadataService.getIssuer();
                    break;
                case 'ANY':
                    issuerPromise = Promise.resolve(jwt.payload.iss);
                    break;
                default:
                    issuerPromise = Promise.resolve(this._settings.userInfoJwtIssuer);
                    break;
            }

            return issuerPromise.then(function (issuer) {
                _Log.Log.debug("UserInfoService._getClaimsFromJwt: Received issuer:" + issuer);

                return _this2._metadataService.getSigningKeys().then(function (keys) {
                    if (!keys) {
                        _Log.Log.error("UserInfoService._getClaimsFromJwt: No signing keys from metadata");
                        return Promise.reject(new Error("No signing keys from metadata"));
                    }

                    _Log.Log.debug("UserInfoService._getClaimsFromJwt: Received signing keys");
                    var key = void 0;
                    if (!kid) {
                        keys = _this2._filterByAlg(keys, jwt.header.alg);

                        if (keys.length > 1) {
                            _Log.Log.error("UserInfoService._getClaimsFromJwt: No kid found in id_token and more than one key found in metadata");
                            return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                        } else {
                            // kid is mandatory only when there are multiple keys in the referenced JWK Set document
                            // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
                            key = keys[0];
                        }
                    } else {
                        key = keys.filter(function (key) {
                            return key.kid === kid;
                        })[0];
                    }

                    if (!key) {
                        _Log.Log.error("UserInfoService._getClaimsFromJwt: No key matching kid or alg found in signing keys");
                        return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                    }

                    var audience = _this2._settings.client_id;

                    var clockSkewInSeconds = _this2._settings.clockSkew;
                    _Log.Log.debug("UserInfoService._getClaimsFromJwt: Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);

                    return _this2._joseUtil.validateJwt(req.responseText, key, issuer, audience, clockSkewInSeconds, undefined, true).then(function () {
                        _Log.Log.debug("UserInfoService._getClaimsFromJwt: JWT validation successful");
                        return jwt.payload;
                    });
                });
            });
            return;
        } catch (e) {
            _Log.Log.error("UserInfoService._getClaimsFromJwt: Error parsing JWT response", e.message);
            reject(e);
            return;
        }
    };

    UserInfoService.prototype._filterByAlg = function _filterByAlg(keys, alg) {
        var kty = null;
        if (alg.startsWith("RS")) {
            kty = "RSA";
        } else if (alg.startsWith("PS")) {
            kty = "PS";
        } else if (alg.startsWith("ES")) {
            kty = "EC";
        } else {
            _Log.Log.debug("UserInfoService._filterByAlg: alg not supported: ", alg);
            return [];
        }

        _Log.Log.debug("UserInfoService._filterByAlg: Looking for keys that match kty: ", kty);

        keys = keys.filter(function (key) {
            return key.kty === kty;
        });

        _Log.Log.debug("UserInfoService._filterByAlg: Number of keys that match kty: ", kty, keys.length);

        return keys;
    };

    return UserInfoService;
}();

/***/ }),

/***/ "./src/UserManager.js":
/*!****************************!*\
  !*** ./src/UserManager.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClient2 = __webpack_require__(/*! ./OidcClient.js */ "./src/OidcClient.js");

var _UserManagerSettings = __webpack_require__(/*! ./UserManagerSettings.js */ "./src/UserManagerSettings.js");

var _User = __webpack_require__(/*! ./User.js */ "./src/User.js");

var _UserManagerEvents = __webpack_require__(/*! ./UserManagerEvents.js */ "./src/UserManagerEvents.js");

var _SilentRenewService = __webpack_require__(/*! ./SilentRenewService.js */ "./src/SilentRenewService.js");

var _SessionMonitor = __webpack_require__(/*! ./SessionMonitor.js */ "./src/SessionMonitor.js");

var _TokenRevocationClient = __webpack_require__(/*! ./TokenRevocationClient.js */ "./src/TokenRevocationClient.js");

var _TokenClient = __webpack_require__(/*! ./TokenClient.js */ "./src/TokenClient.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserManager = exports.UserManager = function (_OidcClient) {
    _inherits(UserManager, _OidcClient);

    function UserManager() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var SilentRenewServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _SilentRenewService.SilentRenewService;
        var SessionMonitorCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _SessionMonitor.SessionMonitor;
        var TokenRevocationClientCtor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _TokenRevocationClient.TokenRevocationClient;
        var TokenClientCtor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _TokenClient.TokenClient;
        var joseUtil = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _JoseUtil.JoseUtil;

        _classCallCheck(this, UserManager);

        if (!(settings instanceof _UserManagerSettings.UserManagerSettings)) {
            settings = new _UserManagerSettings.UserManagerSettings(settings);
        }

        var _this = _possibleConstructorReturn(this, _OidcClient.call(this, settings));

        _this._events = new _UserManagerEvents.UserManagerEvents(settings);
        _this._silentRenewService = new SilentRenewServiceCtor(_this);

        // order is important for the following properties; these services depend upon the events.
        if (_this.settings.automaticSilentRenew) {
            _Log.Log.debug("UserManager.ctor: automaticSilentRenew is configured, setting up silent renew");
            _this.startSilentRenew();
        }

        if (_this.settings.monitorSession) {
            _Log.Log.debug("UserManager.ctor: monitorSession is configured, setting up session monitor");
            _this._sessionMonitor = new SessionMonitorCtor(_this);
        }

        _this._tokenRevocationClient = new TokenRevocationClientCtor(_this._settings);
        _this._tokenClient = new TokenClientCtor(_this._settings);
        _this._joseUtil = joseUtil;
        return _this;
    }

    UserManager.prototype.getUser = function getUser() {
        var _this2 = this;

        return this._loadUser().then(function (user) {
            if (user) {
                _Log.Log.info("UserManager.getUser: user loaded");

                _this2._events.load(user, false);

                return user;
            } else {
                _Log.Log.info("UserManager.getUser: user not found in storage");
                return null;
            }
        });
    };

    UserManager.prototype.removeUser = function removeUser() {
        var _this3 = this;

        return this.storeUser(null).then(function () {
            _Log.Log.info("UserManager.removeUser: user removed from storage");
            _this3._events.unload();
        });
    };

    UserManager.prototype.signinRedirect = function signinRedirect() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:r";
        var navParams = {
            useReplaceToNavigate: args.useReplaceToNavigate
        };
        return this._signinStart(args, this._redirectNavigator, navParams).then(function () {
            _Log.Log.info("UserManager.signinRedirect: successful");
        });
    };

    UserManager.prototype.signinRedirectCallback = function signinRedirectCallback(url) {
        return this._signinEnd(url || this._redirectNavigator.url).then(function (user) {
            if (user.profile && user.profile.sub) {
                _Log.Log.info("UserManager.signinRedirectCallback: successful, signed in sub: ", user.profile.sub);
            } else {
                _Log.Log.info("UserManager.signinRedirectCallback: no sub");
            }

            return user;
        });
    };

    UserManager.prototype.signinPopup = function signinPopup() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:p";
        var url = args.redirect_uri || this.settings.popup_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.signinPopup: No popup_redirect_uri or redirect_uri configured");
            return Promise.reject(new Error("No popup_redirect_uri or redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.display = "popup";

        return this._signin(args, this._popupNavigator, {
            startUrl: url,
            popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
            popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
        }).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinPopup: signinPopup successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinPopup: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinPopupCallback = function signinPopupCallback(url) {
        return this._signinCallback(url, this._popupNavigator).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinPopupCallback: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinPopupCallback: no sub");
                }
            }

            return user;
        }).catch(function (err) {
            _Log.Log.error( true && err.message);
        });
    };

    UserManager.prototype.signinSilent = function signinSilent() {
        var _this4 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:s";
        // first determine if we have a refresh token, or need to use iframe
        return this._loadUser().then(function (user) {
            if (user && user.refresh_token) {
                args.refresh_token = user.refresh_token;
                return _this4._useRefreshToken(args);
            } else {
                args.id_token_hint = args.id_token_hint || _this4.settings.includeIdTokenInSilentRenew && user && user.id_token;
                if (user && _this4._settings.validateSubOnSilentRenew) {
                    _Log.Log.debug("UserManager.signinSilent, subject prior to silent renew: ", user.profile.sub);
                    args.current_sub = user.profile.sub;
                }
                return _this4._signinSilentIframe(args);
            }
        });
    };

    UserManager.prototype._useRefreshToken = function _useRefreshToken() {
        var _this5 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._tokenClient.exchangeRefreshToken(args).then(function (result) {
            if (!result) {
                _Log.Log.error("UserManager._useRefreshToken: No response returned from token endpoint");
                return Promise.reject("No response returned from token endpoint");
            }
            if (!result.access_token) {
                _Log.Log.error("UserManager._useRefreshToken: No access token returned from token endpoint");
                return Promise.reject("No access token returned from token endpoint");
            }

            return _this5._loadUser().then(function (user) {
                if (user) {
                    var idTokenValidation = Promise.resolve();
                    if (result.id_token) {
                        idTokenValidation = _this5._validateIdTokenFromTokenRefreshToken(user.profile, result.id_token);
                    }

                    return idTokenValidation.then(function () {
                        _Log.Log.debug("UserManager._useRefreshToken: refresh token response success");
                        user.id_token = result.id_token;
                        user.access_token = result.access_token;
                        user.refresh_token = result.refresh_token || user.refresh_token;
                        user.expires_in = result.expires_in;

                        return _this5.storeUser(user).then(function () {
                            _this5._events.load(user);
                            return user;
                        });
                    });
                } else {
                    return null;
                }
            });
        });
    };

    UserManager.prototype._validateIdTokenFromTokenRefreshToken = function _validateIdTokenFromTokenRefreshToken(profile, id_token) {
        var _this6 = this;

        return this._metadataService.getIssuer().then(function (issuer) {
            return _this6._joseUtil.validateJwtAttributes(id_token, issuer, _this6._settings.client_id, _this6._settings.clockSkew).then(function (payload) {
                if (!payload) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: Failed to validate id_token");
                    return Promise.reject(new Error("Failed to validate id_token"));
                }
                if (payload.sub !== profile.sub) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: sub in id_token does not match current sub");
                    return Promise.reject(new Error("sub in id_token does not match current sub"));
                }
                if (payload.auth_time && payload.auth_time !== profile.auth_time) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: auth_time in id_token does not match original auth_time");
                    return Promise.reject(new Error("auth_time in id_token does not match original auth_time"));
                }
                if (payload.azp && payload.azp !== profile.azp) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp in id_token does not match original azp");
                    return Promise.reject(new Error("azp in id_token does not match original azp"));
                }
                if (!payload.azp && profile.azp) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp not in id_token, but present in original id_token");
                    return Promise.reject(new Error("azp not in id_token, but present in original id_token"));
                }
            });
        });
    };

    UserManager.prototype._signinSilentIframe = function _signinSilentIframe() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var url = args.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.signinSilent: No silent_redirect_uri configured");
            return Promise.reject(new Error("No silent_redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.prompt = args.prompt || "none";

        return this._signin(args, this._iframeNavigator, {
            startUrl: url,
            silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
        }).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinSilent: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinSilent: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinSilentCallback = function signinSilentCallback(url) {
        return this._signinCallback(url, this._iframeNavigator).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinSilentCallback: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinSilentCallback: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinCallback = function signinCallback(url) {
        var _this7 = this;

        return this.readSigninResponseState(url).then(function (_ref) {
            var state = _ref.state,
                response = _ref.response;

            if (state.request_type === "si:r") {
                return _this7.signinRedirectCallback(url);
            }
            if (state.request_type === "si:p") {
                return _this7.signinPopupCallback(url);
            }
            if (state.request_type === "si:s") {
                return _this7.signinSilentCallback(url);
            }
            return Promise.reject(new Error("invalid response_type in state"));
        });
    };

    UserManager.prototype.signoutCallback = function signoutCallback(url, keepOpen) {
        var _this8 = this;

        return this.readSignoutResponseState(url).then(function (_ref2) {
            var state = _ref2.state,
                response = _ref2.response;

            if (state) {
                if (state.request_type === "so:r") {
                    return _this8.signoutRedirectCallback(url);
                }
                if (state.request_type === "so:p") {
                    return _this8.signoutPopupCallback(url, keepOpen);
                }
                return Promise.reject(new Error("invalid response_type in state"));
            }
            return response;
        });
    };

    UserManager.prototype.querySessionStatus = function querySessionStatus() {
        var _this9 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:s"; // this acts like a signin silent
        var url = args.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.querySessionStatus: No silent_redirect_uri configured");
            return Promise.reject(new Error("No silent_redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.prompt = "none";
        args.response_type = args.response_type || this.settings.query_status_response_type;
        args.scope = args.scope || "openid";
        args.skipUserInfo = true;

        return this._signinStart(args, this._iframeNavigator, {
            startUrl: url,
            silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
        }).then(function (navResponse) {
            return _this9.processSigninResponse(navResponse.url).then(function (signinResponse) {
                _Log.Log.debug("UserManager.querySessionStatus: got signin response");

                if (signinResponse.session_state && signinResponse.profile.sub) {
                    _Log.Log.info("UserManager.querySessionStatus: querySessionStatus success for sub: ", signinResponse.profile.sub);
                    return {
                        session_state: signinResponse.session_state,
                        sub: signinResponse.profile.sub,
                        sid: signinResponse.profile.sid
                    };
                } else {
                    _Log.Log.info("querySessionStatus successful, user not authenticated");
                }
            }).catch(function (err) {
                if (err.session_state && _this9.settings.monitorAnonymousSession) {
                    if (err.message == "login_required" || err.message == "consent_required" || err.message == "interaction_required" || err.message == "account_selection_required") {
                        _Log.Log.info("UserManager.querySessionStatus: querySessionStatus success for anonymous user");
                        return {
                            session_state: err.session_state
                        };
                    }
                }

                throw err;
            });
        });
    };

    UserManager.prototype._signin = function _signin(args, navigator) {
        var _this10 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return this._signinStart(args, navigator, navigatorParams).then(function (navResponse) {
            return _this10._signinEnd(navResponse.url, args);
        });
    };

    UserManager.prototype._signinStart = function _signinStart(args, navigator) {
        var _this11 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


        return navigator.prepare(navigatorParams).then(function (handle) {
            _Log.Log.debug("UserManager._signinStart: got navigator window handle");

            return _this11.createSigninRequest(args).then(function (signinRequest) {
                _Log.Log.debug("UserManager._signinStart: got signin request");

                navigatorParams.url = signinRequest.url;
                navigatorParams.id = signinRequest.state.id;

                return handle.navigate(navigatorParams);
            }).catch(function (err) {
                if (handle.close) {
                    _Log.Log.debug("UserManager._signinStart: Error after preparing navigator, closing navigator window");
                    handle.close();
                }
                throw err;
            });
        });
    };

    UserManager.prototype._signinEnd = function _signinEnd(url) {
        var _this12 = this;

        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return this.processSigninResponse(url).then(function (signinResponse) {
            _Log.Log.debug("UserManager._signinEnd: got signin response");

            var user = new _User.User(signinResponse);

            if (args.current_sub) {
                if (args.current_sub !== user.profile.sub) {
                    _Log.Log.debug("UserManager._signinEnd: current user does not match user returned from signin. sub from signin: ", user.profile.sub);
                    return Promise.reject(new Error("login_required"));
                } else {
                    _Log.Log.debug("UserManager._signinEnd: current user matches user returned from signin");
                }
            }

            return _this12.storeUser(user).then(function () {
                _Log.Log.debug("UserManager._signinEnd: user stored");

                _this12._events.load(user);

                return user;
            });
        });
    };

    UserManager.prototype._signinCallback = function _signinCallback(url, navigator) {
        _Log.Log.debug("UserManager._signinCallback");
        return navigator.callback(url);
    };

    UserManager.prototype.signoutRedirect = function signoutRedirect() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "so:r";
        var postLogoutRedirectUri = args.post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
        if (postLogoutRedirectUri) {
            args.post_logout_redirect_uri = postLogoutRedirectUri;
        }
        var navParams = {
            useReplaceToNavigate: args.useReplaceToNavigate
        };
        return this._signoutStart(args, this._redirectNavigator, navParams).then(function () {
            _Log.Log.info("UserManager.signoutRedirect: successful");
        });
    };

    UserManager.prototype.signoutRedirectCallback = function signoutRedirectCallback(url) {
        return this._signoutEnd(url || this._redirectNavigator.url).then(function (response) {
            _Log.Log.info("UserManager.signoutRedirectCallback: successful");
            return response;
        });
    };

    UserManager.prototype.signoutPopup = function signoutPopup() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "so:p";
        var url = args.post_logout_redirect_uri || this.settings.popup_post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
        args.post_logout_redirect_uri = url;
        args.display = "popup";
        if (args.post_logout_redirect_uri) {
            // we're putting a dummy entry in here because we
            // need a unique id from the state for notification
            // to the parent window, which is necessary if we
            // plan to return back to the client after signout
            // and so we can close the popup after signout
            args.state = args.state || {};
        }

        return this._signout(args, this._popupNavigator, {
            startUrl: url,
            popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
            popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
        }).then(function () {
            _Log.Log.info("UserManager.signoutPopup: successful");
        });
    };

    UserManager.prototype.signoutPopupCallback = function signoutPopupCallback(url, keepOpen) {
        if (typeof keepOpen === 'undefined' && typeof url === 'boolean') {
            keepOpen = url;
            url = null;
        }

        var delimiter = '?';
        return this._popupNavigator.callback(url, keepOpen, delimiter).then(function () {
            _Log.Log.info("UserManager.signoutPopupCallback: successful");
        });
    };

    UserManager.prototype._signout = function _signout(args, navigator) {
        var _this13 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return this._signoutStart(args, navigator, navigatorParams).then(function (navResponse) {
            return _this13._signoutEnd(navResponse.url);
        });
    };

    UserManager.prototype._signoutStart = function _signoutStart() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _this14 = this;

        var navigator = arguments[1];
        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return navigator.prepare(navigatorParams).then(function (handle) {
            _Log.Log.debug("UserManager._signoutStart: got navigator window handle");

            return _this14._loadUser().then(function (user) {
                _Log.Log.debug("UserManager._signoutStart: loaded current user from storage");

                var revokePromise = _this14._settings.revokeAccessTokenOnSignout ? _this14._revokeInternal(user) : Promise.resolve();
                return revokePromise.then(function () {

                    var id_token = args.id_token_hint || user && user.id_token;
                    if (id_token) {
                        _Log.Log.debug("UserManager._signoutStart: Setting id_token into signout request");
                        args.id_token_hint = id_token;
                    }

                    return _this14.removeUser().then(function () {
                        _Log.Log.debug("UserManager._signoutStart: user removed, creating signout request");

                        return _this14.createSignoutRequest(args).then(function (signoutRequest) {
                            _Log.Log.debug("UserManager._signoutStart: got signout request");

                            navigatorParams.url = signoutRequest.url;
                            if (signoutRequest.state) {
                                navigatorParams.id = signoutRequest.state.id;
                            }
                            return handle.navigate(navigatorParams);
                        });
                    });
                });
            }).catch(function (err) {
                if (handle.close) {
                    _Log.Log.debug("UserManager._signoutStart: Error after preparing navigator, closing navigator window");
                    handle.close();
                }
                throw err;
            });
        });
    };

    UserManager.prototype._signoutEnd = function _signoutEnd(url) {
        return this.processSignoutResponse(url).then(function (signoutResponse) {
            _Log.Log.debug("UserManager._signoutEnd: got signout response");

            return signoutResponse;
        });
    };

    UserManager.prototype.revokeAccessToken = function revokeAccessToken() {
        var _this15 = this;

        return this._loadUser().then(function (user) {
            return _this15._revokeInternal(user, true).then(function (success) {
                if (success) {
                    _Log.Log.debug("UserManager.revokeAccessToken: removing token properties from user and re-storing");

                    user.access_token = null;
                    user.refresh_token = null;
                    user.expires_at = null;
                    user.token_type = null;

                    return _this15.storeUser(user).then(function () {
                        _Log.Log.debug("UserManager.revokeAccessToken: user stored");
                        _this15._events.load(user);
                    });
                }
            });
        }).then(function () {
            _Log.Log.info("UserManager.revokeAccessToken: access token revoked successfully");
        });
    };

    UserManager.prototype._revokeInternal = function _revokeInternal(user, required) {
        var _this16 = this;

        if (user) {
            var access_token = user.access_token;
            var refresh_token = user.refresh_token;

            return this._revokeAccessTokenInternal(access_token, required).then(function (atSuccess) {
                return _this16._revokeRefreshTokenInternal(refresh_token, required).then(function (rtSuccess) {
                    if (!atSuccess && !rtSuccess) {
                        _Log.Log.debug("UserManager.revokeAccessToken: no need to revoke due to no token(s), or JWT format");
                    }

                    return atSuccess || rtSuccess;
                });
            });
        }

        return Promise.resolve(false);
    };

    UserManager.prototype._revokeAccessTokenInternal = function _revokeAccessTokenInternal(access_token, required) {
        // check for JWT vs. reference token
        if (!access_token || access_token.indexOf('.') >= 0) {
            return Promise.resolve(false);
        }

        return this._tokenRevocationClient.revoke(access_token, required).then(function () {
            return true;
        });
    };

    UserManager.prototype._revokeRefreshTokenInternal = function _revokeRefreshTokenInternal(refresh_token, required) {
        if (!refresh_token) {
            return Promise.resolve(false);
        }

        return this._tokenRevocationClient.revoke(refresh_token, required, "refresh_token").then(function () {
            return true;
        });
    };

    UserManager.prototype.startSilentRenew = function startSilentRenew() {
        this._silentRenewService.start();
    };

    UserManager.prototype.stopSilentRenew = function stopSilentRenew() {
        this._silentRenewService.stop();
    };

    UserManager.prototype._loadUser = function _loadUser() {
        return this._userStore.get(this._userStoreKey).then(function (storageString) {
            if (storageString) {
                _Log.Log.debug("UserManager._loadUser: user storageString loaded");
                return _User.User.fromStorageString(storageString);
            }

            _Log.Log.debug("UserManager._loadUser: no user storageString");
            return null;
        });
    };

    UserManager.prototype.storeUser = function storeUser(user) {
        if (user) {
            _Log.Log.debug("UserManager.storeUser: storing user");

            var storageString = user.toStorageString();
            return this._userStore.set(this._userStoreKey, storageString);
        } else {
            _Log.Log.debug("storeUser.storeUser: removing user");
            return this._userStore.remove(this._userStoreKey);
        }
    };

    _createClass(UserManager, [{
        key: '_redirectNavigator',
        get: function get() {
            return this.settings.redirectNavigator;
        }
    }, {
        key: '_popupNavigator',
        get: function get() {
            return this.settings.popupNavigator;
        }
    }, {
        key: '_iframeNavigator',
        get: function get() {
            return this.settings.iframeNavigator;
        }
    }, {
        key: '_userStore',
        get: function get() {
            return this.settings.userStore;
        }
    }, {
        key: 'events',
        get: function get() {
            return this._events;
        }
    }, {
        key: '_userStoreKey',
        get: function get() {
            return 'user:' + this.settings.authority + ':' + this.settings.client_id;
        }
    }]);

    return UserManager;
}(_OidcClient2.OidcClient);

/***/ }),

/***/ "./src/UserManagerEvents.js":
/*!**********************************!*\
  !*** ./src/UserManagerEvents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManagerEvents = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _AccessTokenEvents2 = __webpack_require__(/*! ./AccessTokenEvents.js */ "./src/AccessTokenEvents.js");

var _Event = __webpack_require__(/*! ./Event.js */ "./src/Event.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserManagerEvents = exports.UserManagerEvents = function (_AccessTokenEvents) {
    _inherits(UserManagerEvents, _AccessTokenEvents);

    function UserManagerEvents(settings) {
        _classCallCheck(this, UserManagerEvents);

        var _this = _possibleConstructorReturn(this, _AccessTokenEvents.call(this, settings));

        _this._userLoaded = new _Event.Event("User loaded");
        _this._userUnloaded = new _Event.Event("User unloaded");
        _this._silentRenewError = new _Event.Event("Silent renew error");
        _this._userSignedIn = new _Event.Event("User signed in");
        _this._userSignedOut = new _Event.Event("User signed out");
        _this._userSessionChanged = new _Event.Event("User session changed");
        return _this;
    }

    UserManagerEvents.prototype.load = function load(user) {
        var raiseEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        _Log.Log.debug("UserManagerEvents.load");
        _AccessTokenEvents.prototype.load.call(this, user);
        if (raiseEvent) {
            this._userLoaded.raise(user);
        }
    };

    UserManagerEvents.prototype.unload = function unload() {
        _Log.Log.debug("UserManagerEvents.unload");
        _AccessTokenEvents.prototype.unload.call(this);
        this._userUnloaded.raise();
    };

    UserManagerEvents.prototype.addUserLoaded = function addUserLoaded(cb) {
        this._userLoaded.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserLoaded = function removeUserLoaded(cb) {
        this._userLoaded.removeHandler(cb);
    };

    UserManagerEvents.prototype.addUserUnloaded = function addUserUnloaded(cb) {
        this._userUnloaded.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserUnloaded = function removeUserUnloaded(cb) {
        this._userUnloaded.removeHandler(cb);
    };

    UserManagerEvents.prototype.addSilentRenewError = function addSilentRenewError(cb) {
        this._silentRenewError.addHandler(cb);
    };

    UserManagerEvents.prototype.removeSilentRenewError = function removeSilentRenewError(cb) {
        this._silentRenewError.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseSilentRenewError = function _raiseSilentRenewError(e) {
        _Log.Log.debug("UserManagerEvents._raiseSilentRenewError", e.message);
        this._silentRenewError.raise(e);
    };

    UserManagerEvents.prototype.addUserSignedIn = function addUserSignedIn(cb) {
        this._userSignedIn.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserSignedIn = function removeUserSignedIn(cb) {
        this._userSignedIn.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseUserSignedIn = function _raiseUserSignedIn() {
        _Log.Log.debug("UserManagerEvents._raiseUserSignedIn");
        this._userSignedIn.raise();
    };

    UserManagerEvents.prototype.addUserSignedOut = function addUserSignedOut(cb) {
        this._userSignedOut.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserSignedOut = function removeUserSignedOut(cb) {
        this._userSignedOut.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseUserSignedOut = function _raiseUserSignedOut() {
        _Log.Log.debug("UserManagerEvents._raiseUserSignedOut");
        this._userSignedOut.raise();
    };

    UserManagerEvents.prototype.addUserSessionChanged = function addUserSessionChanged(cb) {
        this._userSessionChanged.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserSessionChanged = function removeUserSessionChanged(cb) {
        this._userSessionChanged.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseUserSessionChanged = function _raiseUserSessionChanged() {
        _Log.Log.debug("UserManagerEvents._raiseUserSessionChanged");
        this._userSessionChanged.raise();
    };

    return UserManagerEvents;
}(_AccessTokenEvents2.AccessTokenEvents);

/***/ }),

/***/ "./src/UserManagerSettings.js":
/*!************************************!*\
  !*** ./src/UserManagerSettings.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManagerSettings = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClientSettings2 = __webpack_require__(/*! ./OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _RedirectNavigator = __webpack_require__(/*! ./RedirectNavigator.js */ "./src/RedirectNavigator.js");

var _PopupNavigator = __webpack_require__(/*! ./PopupNavigator.js */ "./src/PopupNavigator.js");

var _IFrameNavigator = __webpack_require__(/*! ./IFrameNavigator.js */ "./src/IFrameNavigator.js");

var _WebStorageStateStore = __webpack_require__(/*! ./WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

var _SigninRequest = __webpack_require__(/*! ./SigninRequest.js */ "./src/SigninRequest.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultAccessTokenExpiringNotificationTime = 60;
var DefaultCheckSessionInterval = 2000;

var UserManagerSettings = exports.UserManagerSettings = function (_OidcClientSettings) {
    _inherits(UserManagerSettings, _OidcClientSettings);

    function UserManagerSettings() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            popup_redirect_uri = _ref.popup_redirect_uri,
            popup_post_logout_redirect_uri = _ref.popup_post_logout_redirect_uri,
            popupWindowFeatures = _ref.popupWindowFeatures,
            popupWindowTarget = _ref.popupWindowTarget,
            silent_redirect_uri = _ref.silent_redirect_uri,
            silentRequestTimeout = _ref.silentRequestTimeout,
            _ref$automaticSilentR = _ref.automaticSilentRenew,
            automaticSilentRenew = _ref$automaticSilentR === undefined ? false : _ref$automaticSilentR,
            _ref$validateSubOnSil = _ref.validateSubOnSilentRenew,
            validateSubOnSilentRenew = _ref$validateSubOnSil === undefined ? false : _ref$validateSubOnSil,
            _ref$includeIdTokenIn = _ref.includeIdTokenInSilentRenew,
            includeIdTokenInSilentRenew = _ref$includeIdTokenIn === undefined ? true : _ref$includeIdTokenIn,
            _ref$monitorSession = _ref.monitorSession,
            monitorSession = _ref$monitorSession === undefined ? true : _ref$monitorSession,
            _ref$monitorAnonymous = _ref.monitorAnonymousSession,
            monitorAnonymousSession = _ref$monitorAnonymous === undefined ? false : _ref$monitorAnonymous,
            _ref$checkSessionInte = _ref.checkSessionInterval,
            checkSessionInterval = _ref$checkSessionInte === undefined ? DefaultCheckSessionInterval : _ref$checkSessionInte,
            _ref$stopCheckSession = _ref.stopCheckSessionOnError,
            stopCheckSessionOnError = _ref$stopCheckSession === undefined ? true : _ref$stopCheckSession,
            query_status_response_type = _ref.query_status_response_type,
            _ref$revokeAccessToke = _ref.revokeAccessTokenOnSignout,
            revokeAccessTokenOnSignout = _ref$revokeAccessToke === undefined ? false : _ref$revokeAccessToke,
            _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
            accessTokenExpiringNotificationTime = _ref$accessTokenExpir === undefined ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
            _ref$redirectNavigato = _ref.redirectNavigator,
            redirectNavigator = _ref$redirectNavigato === undefined ? new _RedirectNavigator.RedirectNavigator() : _ref$redirectNavigato,
            _ref$popupNavigator = _ref.popupNavigator,
            popupNavigator = _ref$popupNavigator === undefined ? new _PopupNavigator.PopupNavigator() : _ref$popupNavigator,
            _ref$iframeNavigator = _ref.iframeNavigator,
            iframeNavigator = _ref$iframeNavigator === undefined ? new _IFrameNavigator.IFrameNavigator() : _ref$iframeNavigator,
            _ref$userStore = _ref.userStore,
            userStore = _ref$userStore === undefined ? new _WebStorageStateStore.WebStorageStateStore({ store: _Global.Global.sessionStorage }) : _ref$userStore;

        _classCallCheck(this, UserManagerSettings);

        var _this = _possibleConstructorReturn(this, _OidcClientSettings.call(this, arguments[0]));

        _this._popup_redirect_uri = popup_redirect_uri;
        _this._popup_post_logout_redirect_uri = popup_post_logout_redirect_uri;
        _this._popupWindowFeatures = popupWindowFeatures;
        _this._popupWindowTarget = popupWindowTarget;

        _this._silent_redirect_uri = silent_redirect_uri;
        _this._silentRequestTimeout = silentRequestTimeout;
        _this._automaticSilentRenew = automaticSilentRenew;
        _this._validateSubOnSilentRenew = validateSubOnSilentRenew;
        _this._includeIdTokenInSilentRenew = includeIdTokenInSilentRenew;
        _this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;

        _this._monitorSession = monitorSession;
        _this._monitorAnonymousSession = monitorAnonymousSession;
        _this._checkSessionInterval = checkSessionInterval;
        _this._stopCheckSessionOnError = stopCheckSessionOnError;
        if (query_status_response_type) {
            _this._query_status_response_type = query_status_response_type;
        } else if (arguments[0] && arguments[0].response_type) {
            _this._query_status_response_type = _SigninRequest.SigninRequest.isOidc(arguments[0].response_type) ? "id_token" : "code";
        } else {
            _this._query_status_response_type = "id_token";
        }
        _this._revokeAccessTokenOnSignout = revokeAccessTokenOnSignout;

        _this._redirectNavigator = redirectNavigator;
        _this._popupNavigator = popupNavigator;
        _this._iframeNavigator = iframeNavigator;

        _this._userStore = userStore;
        return _this;
    }

    _createClass(UserManagerSettings, [{
        key: 'popup_redirect_uri',
        get: function get() {
            return this._popup_redirect_uri;
        }
    }, {
        key: 'popup_post_logout_redirect_uri',
        get: function get() {
            return this._popup_post_logout_redirect_uri;
        }
    }, {
        key: 'popupWindowFeatures',
        get: function get() {
            return this._popupWindowFeatures;
        }
    }, {
        key: 'popupWindowTarget',
        get: function get() {
            return this._popupWindowTarget;
        }
    }, {
        key: 'silent_redirect_uri',
        get: function get() {
            return this._silent_redirect_uri;
        }
    }, {
        key: 'silentRequestTimeout',
        get: function get() {
            return this._silentRequestTimeout;
        }
    }, {
        key: 'automaticSilentRenew',
        get: function get() {
            return this._automaticSilentRenew;
        }
    }, {
        key: 'validateSubOnSilentRenew',
        get: function get() {
            return this._validateSubOnSilentRenew;
        }
    }, {
        key: 'includeIdTokenInSilentRenew',
        get: function get() {
            return this._includeIdTokenInSilentRenew;
        }
    }, {
        key: 'accessTokenExpiringNotificationTime',
        get: function get() {
            return this._accessTokenExpiringNotificationTime;
        }
    }, {
        key: 'monitorSession',
        get: function get() {
            return this._monitorSession;
        }
    }, {
        key: 'monitorAnonymousSession',
        get: function get() {
            return this._monitorAnonymousSession;
        }
    }, {
        key: 'checkSessionInterval',
        get: function get() {
            return this._checkSessionInterval;
        }
    }, {
        key: 'stopCheckSessionOnError',
        get: function get() {
            return this._stopCheckSessionOnError;
        }
    }, {
        key: 'query_status_response_type',
        get: function get() {
            return this._query_status_response_type;
        }
    }, {
        key: 'revokeAccessTokenOnSignout',
        get: function get() {
            return this._revokeAccessTokenOnSignout;
        }
    }, {
        key: 'redirectNavigator',
        get: function get() {
            return this._redirectNavigator;
        }
    }, {
        key: 'popupNavigator',
        get: function get() {
            return this._popupNavigator;
        }
    }, {
        key: 'iframeNavigator',
        get: function get() {
            return this._iframeNavigator;
        }
    }, {
        key: 'userStore',
        get: function get() {
            return this._userStore;
        }
    }]);

    return UserManagerSettings;
}(_OidcClientSettings2.OidcClientSettings);

/***/ }),

/***/ "./src/WebStorageStateStore.js":
/*!*************************************!*\
  !*** ./src/WebStorageStateStore.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WebStorageStateStore = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var WebStorageStateStore = exports.WebStorageStateStore = function () {
    function WebStorageStateStore() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$prefix = _ref.prefix,
            prefix = _ref$prefix === undefined ? "oidc." : _ref$prefix,
            _ref$store = _ref.store,
            store = _ref$store === undefined ? _Global.Global.localStorage : _ref$store;

        _classCallCheck(this, WebStorageStateStore);

        this._store = store;
        this._prefix = prefix;
    }

    WebStorageStateStore.prototype.set = function set(key, value) {
        _Log.Log.debug("WebStorageStateStore.set", key);

        key = this._prefix + key;

        this._store.setItem(key, value);

        return Promise.resolve();
    };

    WebStorageStateStore.prototype.get = function get(key) {
        _Log.Log.debug("WebStorageStateStore.get", key);

        key = this._prefix + key;

        var item = this._store.getItem(key);

        return Promise.resolve(item);
    };

    WebStorageStateStore.prototype.remove = function remove(key) {
        _Log.Log.debug("WebStorageStateStore.remove", key);

        key = this._prefix + key;

        var item = this._store.getItem(key);
        this._store.removeItem(key);

        return Promise.resolve(item);
    };

    WebStorageStateStore.prototype.getAllKeys = function getAllKeys() {
        _Log.Log.debug("WebStorageStateStore.getAllKeys");

        var keys = [];

        for (var index = 0; index < this._store.length; index++) {
            var key = this._store.key(index);

            if (key.indexOf(this._prefix) === 0) {
                keys.push(key.substr(this._prefix.length));
            }
        }

        return Promise.resolve(keys);
    };

    return WebStorageStateStore;
}();

/***/ }),

/***/ "./src/crypto/rsa.js":
/*!***************************!*\
  !*** ./src/crypto/rsa.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AllowedSigningAlgs = exports.b64tohex = exports.hextob64u = exports.crypto = exports.X509 = exports.KeyUtil = exports.jws = undefined;

var _jsbn = __webpack_require__(/*! jsbn */ "./node_modules/jsbn/index.js");

var _jsbn2 = _interopRequireDefault(_jsbn);

var _sha = __webpack_require__(/*! crypto-js/sha256 */ "./node_modules/crypto-js/sha256.js");

var _sha2 = _interopRequireDefault(_sha);

var _base64Js = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");

var _base64Js2 = _interopRequireDefault(_base64Js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BigInteger = _jsbn2.default.BigInteger;

/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
/*
Based on the work of Auth0
https://github.com/auth0/idtoken-verifier
https://github.com/auth0/idtoken-verifier/blob/master/LICENSE
Which is based on the work of Tom Wu
http://www-cs-students.stanford.edu/~tjw/jsbn/
http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
*/

/*
 * To support most basic OpenId use cases (using RSA256), we can get away without
 * requiring the full jrsasign feature set (and resulting massive bundle).
 *
 * - Support RSA 256 algorithm (optionally could support RSA* family)
 * - Parse JWT tokens using the (n) parameter.
 * - Verify signature of id_tokens
 * - Verify at_hash of access_tokens
 * - Perform common base64 encoding/decoding tasks.
 */

var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";

var Base64 = {
    b64tohex: function b64tohex(s) {
        var ret = "";
        var i;
        var k = 0; // b64 state, 0-3
        var slop;
        for (i = 0; i < s.length; ++i) {
            if (s.charAt(i) === b64pad) break;
            var v = b64map.indexOf(s.charAt(i));
            if (v < 0) continue;
            if (k === 0) {
                ret += String.fromCharCode(v >> 2);
                slop = v & 3;
                k = 1;
            } else if (k === 1) {
                ret += String.fromCharCode(slop << 2 | v >> 4);
                slop = v & 0xf;
                k = 2;
            } else if (k === 2) {
                ret += String.fromCharCode(slop);
                ret += String.fromCharCode(v >> 2);
                slop = v & 3;
                k = 3;
            } else {
                ret += String.fromCharCode(slop << 2 | v >> 4);
                ret += String.fromCharCode(v & 0xf);
                k = 0;
            }
        }
        if (k === 1) ret += String.fromCharCode(slop << 2);
        return ret;
    },
    hexToBase64: function hexToBase64(h) {
        var i;
        var c;
        var ret = "";
        for (i = 0; i + 3 <= h.length; i += 3) {
            c = parseInt(h.substring(i, i + 3), 16);
            ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
        }
        if (i + 1 === h.length) {
            c = parseInt(h.substring(i, i + 1), 16);
            ret += b64map.charAt(c << 2);
        } else if (i + 2 === h.length) {
            c = parseInt(h.substring(i, i + 2), 16);
            ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
        }
        if (b64pad) while ((ret.length & 3) > 0) {
            ret += b64pad;
        }return ret;
    },
    padding: function padding(str) {
        var mod = str.length % 4;
        var pad = 4 - mod;

        if (mod === 0) {
            return str;
        }

        return str + new Array(1 + pad).join('=');
    },
    byteArrayToHex: function byteArrayToHex(raw) {
        var HEX = '';

        for (var i = 0; i < raw.length; i++) {
            var _hex = raw[i].toString(16);
            HEX += _hex.length === 2 ? _hex : '0' + _hex;
        }

        return HEX;
    },
    decodeToHEX: function decodeToHEX(str) {
        return Base64.byteArrayToHex(_base64Js2.default.toByteArray(Base64.padding(str)));
    },
    base64ToBase64Url: function base64ToBase64Url(s) {
        s = s.replace(/=/g, "");
        s = s.replace(/\+/g, "-");
        s = s.replace(/\//g, "_");
        return s;
    },
    urlDecode: function urlDecode(str) {
        str = str.replace(/-/g, '+') // Convert '-' to '+'
        .replace(/_/g, '/') // Convert '_' to '/'
        .replace(/\s/g, ' '); // Convert '\s' to ' '

        return atob(str);
    }
};

var DigestInfoHead = {
    sha1: '3021300906052b0e03021a05000414',
    sha224: '302d300d06096086480165030402040500041c',
    sha256: '3031300d060960864801650304020105000420',
    sha384: '3041300d060960864801650304020205000430',
    sha512: '3051300d060960864801650304020305000440',
    md2: '3020300c06082a864886f70d020205000410',
    md5: '3020300c06082a864886f70d020505000410',
    ripemd160: '3021300906052b2403020105000414'
};

var DigestAlgs = {
    sha256: _sha2.default,
    SHA256: _sha2.default
};

function RSAVerifier(modulus, exp) {
    this.n = null;
    this.e = 0;

    if (modulus != null && exp != null && modulus.length > 0 && exp.length > 0) {
        this.n = new BigInteger(modulus, 16);
        this.e = parseInt(exp, 16);
    } else {
        throw new Error('Invalid key data');
    }
}

function getAlgorithmFromDigest(hDigestInfo) {
    for (var algName in DigestInfoHead) {
        var head = DigestInfoHead[algName];
        var len = head.length;

        if (hDigestInfo.substring(0, len) === head) {
            return {
                alg: algName,
                hash: hDigestInfo.substring(len)
            };
        }
    }
    return [];
}

RSAVerifier.prototype.verify = function (msg, encsig) {
    encsig = Base64.decodeToHEX(encsig);
    encsig = encsig.replace(/[^0-9a-f]|[\s\n]]/ig, '');

    var sig = new BigInteger(encsig, 16);

    if (sig.bitLength() > this.n.bitLength()) {
        throw new Error('Signature does not match with the key modulus.');
    }

    var decryptedSig = sig.modPowInt(this.e, this.n);
    var digest = decryptedSig.toString(16).replace(/^1f+00/, '');
    var digestInfo = getAlgorithmFromDigest(digest);

    if (digestInfo.length === 0) {
        return false;
    }

    if (!DigestAlgs.hasOwnProperty(digestInfo.alg)) {
        throw new Error('Hashing algorithm is not supported.');
    }

    var msgHash = DigestAlgs[digestInfo.alg](msg).toString();
    return digestInfo.hash === msgHash;
};

var AllowedSigningAlgs = ['RS256'];

var jws = {
    JWS: {
        parse: function parse(token) {
            var parts = token.split('.');
            var header;
            var payload;

            // This diverges from Auth0's implementation, which throws rather than
            // returning undefined
            if (parts.length !== 3) {
                return undefined;
            }

            try {
                header = JSON.parse(Base64.urlDecode(parts[0]));
                payload = JSON.parse(Base64.urlDecode(parts[1]));
            } catch (e) {
                return new Error('Token header or payload is not valid JSON');
            }

            return {
                headerObj: header,
                payloadObj: payload
            };
        },
        verify: function verify(jwt, key) {
            var allowedSigningAlgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            allowedSigningAlgs.forEach(function (alg) {
                if (AllowedSigningAlgs.indexOf(alg) === -1) {
                    throw new Error('Invalid signing algorithm: ' + alg);
                }
            });
            var verify = new RSAVerifier(key.n, key.e);
            var parts = jwt.split('.');

            var headerAndPayload = [parts[0], parts[1]].join('.');
            return verify.verify(headerAndPayload, parts[2]);
        }
    }
};

var KeyUtil = {
    /**
     * Returns decoded keys in Hex format for use in crypto functions.
     * Supports modulus/exponent-style keys.
     *
     * @param {object} key the security key
     * @returns
     */
    getKey: function getKey(key) {
        if (key.kty === 'RSA') {
            return {
                e: Base64.decodeToHEX(key.e),
                n: Base64.decodeToHEX(key.n)
            };
        }

        return null;
    }
};

var X509 = {
    getPublicKeyFromCertPEM: function getPublicKeyFromCertPEM() {
        throw new Error('Not implemented. Use the full oidc-client library if you need support for X509.');
    }
};

var crypto = {
    Util: {
        hashString: function hashString(value, alg) {
            var hashFunc = DigestAlgs[alg];
            return hashFunc(value).toString();
        }
    }
};

function hextob64u(s) {
    if (s.length % 2 === 1) {
        s = '0' + s;
    }
    return Base64.base64ToBase64Url(Base64.hexToBase64(s));
}

var b64tohex = Base64.b64tohex;
exports.jws = jws;
exports.KeyUtil = KeyUtil;
exports.X509 = X509;
exports.crypto = crypto;
exports.hextob64u = hextob64u;
exports.b64tohex = b64tohex;
exports.AllowedSigningAlgs = AllowedSigningAlgs;

/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = random;
/**
 * Generates RFC4122 version 4 guid ()
 */

var crypto = typeof window !== 'undefined' ? window.crypto || window.msCrypto : null;

function _cryptoUuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
}

function _uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ Math.random() * 16 >> c / 4).toString(16);
  });
}

function random() {
  var hasCrypto = crypto != 'undefined' && crypto !== null;
  var hasRandomValues = hasCrypto && typeof crypto.getRandomValues != 'undefined';
  var uuid = hasRandomValues ? _cryptoUuidv4 : _uuidv4;
  return uuid().replace(/-/g, '');
}
module.exports = exports['default'];

/***/ }),

/***/ "./version.js":
/*!********************!*\
  !*** ./version.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Version = "1.11.0-beta.1";exports.Version = Version;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNibi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWNjZXNzVG9rZW5FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoZWNrU2Vzc2lvbklGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZG92YUlGcmFtZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZG92YVBvcHVwTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9Db3Jkb3ZhUG9wdXBXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9yUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lGcmFtZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUZyYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9Jbk1lbW9yeVdlYlN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pvc2VVdGlsSW1wbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSm9zZVV0aWxSc2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pzb25TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Mb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01ldGFkYXRhU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2lkY0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2lkY0NsaWVudFNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9Qb3B1cE5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlZGlyZWN0TmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNwb25zZVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2Vzc2lvbk1vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWduaW5TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbm91dFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25vdXRSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lsZW50UmVuZXdTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rva2VuQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2tlblJldm9jYXRpb25DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VybFV0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJJbmZvU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJNYW5hZ2VyRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyTWFuYWdlclNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3J5cHRvL3JzYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZG9tLmpzIiwid2VicGFjazovLy8uL3ZlcnNpb24uanMiXSwibmFtZXMiOlsiVmVyc2lvbiIsIkxvZyIsIk9pZGNDbGllbnQiLCJPaWRjQ2xpZW50U2V0dGluZ3MiLCJXZWJTdG9yYWdlU3RhdGVTdG9yZSIsIkluTWVtb3J5V2ViU3RvcmFnZSIsIlVzZXJNYW5hZ2VyIiwiQWNjZXNzVG9rZW5FdmVudHMiLCJNZXRhZGF0YVNlcnZpY2UiLCJDb3Jkb3ZhUG9wdXBOYXZpZ2F0b3IiLCJDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yIiwiQ2hlY2tTZXNzaW9uSUZyYW1lIiwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50IiwiU2Vzc2lvbk1vbml0b3IiLCJHbG9iYWwiLCJVc2VyIiwiRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUiLCJhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXIiLCJUaW1lciIsImFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyIiwiX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiX2FjY2Vzc1Rva2VuRXhwaXJpbmciLCJfYWNjZXNzVG9rZW5FeHBpcmVkIiwibG9hZCIsImNvbnRhaW5lciIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNfaW4iLCJ1bmRlZmluZWQiLCJkdXJhdGlvbiIsImRlYnVnIiwiZXhwaXJpbmciLCJpbml0IiwiY2FuY2VsIiwiZXhwaXJlZCIsInVubG9hZCIsImFkZEFjY2Vzc1Rva2VuRXhwaXJpbmciLCJjYiIsImFkZEhhbmRsZXIiLCJyZW1vdmVBY2Nlc3NUb2tlbkV4cGlyaW5nIiwicmVtb3ZlSGFuZGxlciIsImFkZEFjY2Vzc1Rva2VuRXhwaXJlZCIsInJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJlZCIsIkRlZmF1bHRJbnRlcnZhbCIsImNhbGxiYWNrIiwiY2xpZW50X2lkIiwidXJsIiwiaW50ZXJ2YWwiLCJzdG9wT25FcnJvciIsIl9jYWxsYmFjayIsIl9jbGllbnRfaWQiLCJfdXJsIiwiX2ludGVydmFsIiwiX3N0b3BPbkVycm9yIiwiaWR4IiwiaW5kZXhPZiIsIl9mcmFtZV9vcmlnaW4iLCJzdWJzdHIiLCJfZnJhbWUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsIlByb21pc2UiLCJyZXNvbHZlIiwib25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiX2JvdW5kTWVzc2FnZUV2ZW50IiwiX21lc3NhZ2UiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJvcmlnaW4iLCJzb3VyY2UiLCJjb250ZW50V2luZG93IiwiZGF0YSIsImVycm9yIiwic3RvcCIsInN0YXJ0Iiwic2Vzc2lvbl9zdGF0ZSIsIl9zZXNzaW9uX3N0YXRlIiwic2VuZCIsInBvc3RNZXNzYWdlIiwiX3RpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicHJlcGFyZSIsInBhcmFtcyIsInBvcHVwV2luZG93RmVhdHVyZXMiLCJwb3B1cCIsIkNvcmRvdmFQb3B1cFdpbmRvdyIsIkRlZmF1bHRQb3B1cEZlYXR1cmVzIiwiRGVmYXVsdFBvcHVwVGFyZ2V0IiwiX3Byb21pc2UiLCJyZWplY3QiLCJfcmVzb2x2ZSIsIl9yZWplY3QiLCJmZWF0dXJlcyIsInRhcmdldCIsInBvcHVwV2luZG93VGFyZ2V0IiwicmVkaXJlY3RfdXJpIiwic3RhcnRVcmwiLCJfaXNJbkFwcEJyb3dzZXJJbnN0YWxsZWQiLCJjb3Jkb3ZhTWV0YWRhdGEiLCJzb21lIiwibmFtZSIsImhhc093blByb3BlcnR5IiwibmF2aWdhdGUiLCJfZXJyb3IiLCJjb3Jkb3ZhIiwicmVxdWlyZSIsIm1ldGFkYXRhIiwiX3BvcHVwIiwiSW5BcHBCcm93c2VyIiwib3BlbiIsIl9leGl0Q2FsbGJhY2tFdmVudCIsIl9leGl0Q2FsbGJhY2siLCJfbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCIsIl9sb2FkU3RhcnRDYWxsYmFjayIsInByb21pc2UiLCJldmVudCIsIl9zdWNjZXNzIiwibWVzc2FnZSIsIl9jbGVhbnVwIiwiRXJyb3IiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJFcnJvclJlc3BvbnNlIiwiZXJyb3JfZGVzY3JpcHRpb24iLCJlcnJvcl91cmkiLCJzdGF0ZSIsIkV2ZW50IiwiX25hbWUiLCJfY2FsbGJhY2tzIiwicHVzaCIsImZpbmRJbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJyYWlzZSIsImkiLCJsZW5ndGgiLCJ0aW1lciIsImhhbmRsZSIsInRlc3RpbmciLCJyZXF1ZXN0IiwiX3Rlc3RpbmciLCJzZXRYTUxIdHRwUmVxdWVzdCIsIm5ld1JlcXVlc3QiLCJsb2NhdGlvbiIsImxvY2FsU3RvcmFnZSIsInNlc3Npb25TdG9yYWdlIiwiWE1MSHR0cFJlcXVlc3QiLCJJRnJhbWVOYXZpZ2F0b3IiLCJmcmFtZSIsIklGcmFtZVdpbmRvdyIsIm5vdGlmeVBhcmVudCIsIkRlZmF1bHRUaW1lb3V0IiwidGltZW91dCIsInNpbGVudFJlcXVlc3RUaW1lb3V0Iiwic2V0VGltZW91dCIsIl90aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCJfb3JpZ2luIiwiaHJlZiIsImNvbnNvbGUiLCJsb2ciLCJwcm90b2NvbCIsImhvc3QiLCJwYXJlbnQiLCJfZGF0YSIsImdldEl0ZW0iLCJrZXkiLCJzZXRJdGVtIiwidmFsdWUiLCJyZW1vdmVJdGVtIiwiaW5kZXgiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZ2V0Sm9zZVV0aWwiLCJqd3MiLCJLZXlVdGlsIiwiWDUwOSIsImNyeXB0byIsImhleHRvYjY0dSIsImI2NHRvaGV4IiwiQWxsb3dlZFNpZ25pbmdBbGdzIiwicGFyc2VKd3QiLCJqd3QiLCJ0b2tlbiIsIkpXUyIsInBhcnNlIiwiaGVhZGVyIiwiaGVhZGVyT2JqIiwicGF5bG9hZCIsInBheWxvYWRPYmoiLCJ2YWxpZGF0ZUp3dCIsImlzc3VlciIsImF1ZGllbmNlIiwiY2xvY2tTa2V3Iiwibm93IiwidGltZUluc2Vuc2l0aXZlIiwia3R5IiwibiIsImdldEtleSIsIng1YyIsImhleCIsImdldFB1YmxpY0tleUZyb21DZXJ0SGV4IiwiY3J2IiwieCIsInkiLCJKb3NlVXRpbCIsIl92YWxpZGF0ZUp3dCIsInZhbGlkYXRlSnd0QXR0cmlidXRlcyIsInBhcnNlSW50IiwiRGF0ZSIsImlzcyIsImF1ZCIsInZhbGlkQXVkaWVuY2UiLCJBcnJheSIsImlzQXJyYXkiLCJhenAiLCJsb3dlck5vdyIsInVwcGVyTm93IiwiaWF0IiwibmJmIiwiZXhwIiwidGhlbiIsInZlcmlmeSIsImhhc2hTdHJpbmciLCJhbGciLCJVdGlsIiwiaGV4VG9CYXNlNjRVcmwiLCJKc29uU2VydmljZSIsImFkZGl0aW9uYWxDb250ZW50VHlwZXMiLCJYTUxIdHRwUmVxdWVzdEN0b3IiLCJqd3RIYW5kbGVyIiwiX2NvbnRlbnRUeXBlcyIsInNsaWNlIiwiX1hNTEh0dHBSZXF1ZXN0IiwiX2p3dEhhbmRsZXIiLCJnZXRKc29uIiwicmVxIiwiYWxsb3dlZENvbnRlbnRUeXBlcyIsInN0YXR1cyIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJmb3VuZCIsImZpbmQiLCJzdGFydHNXaXRoIiwiSlNPTiIsInJlc3BvbnNlVGV4dCIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwic2V0UmVxdWVzdEhlYWRlciIsInBvc3RGb3JtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwibm9wTG9nZ2VyIiwiaW5mbyIsIndhcm4iLCJOT05FIiwiRVJST1IiLCJXQVJOIiwiSU5GTyIsIkRFQlVHIiwibG9nZ2VyIiwibGV2ZWwiLCJyZXNldCIsImFyZ3MiLCJhcHBseSIsImZyb20iLCJPaWRjTWV0YWRhdGFVcmxQYXRoIiwic2V0dGluZ3MiLCJKc29uU2VydmljZUN0b3IiLCJfc2V0dGluZ3MiLCJfanNvblNlcnZpY2UiLCJnZXRNZXRhZGF0YSIsIm1ldGFkYXRhVXJsIiwiZ2V0SXNzdWVyIiwiX2dldE1ldGFkYXRhUHJvcGVydHkiLCJnZXRBdXRob3JpemF0aW9uRW5kcG9pbnQiLCJnZXRVc2VySW5mb0VuZHBvaW50IiwiZ2V0VG9rZW5FbmRwb2ludCIsIm9wdGlvbmFsIiwiZ2V0Q2hlY2tTZXNzaW9uSWZyYW1lIiwiZ2V0RW5kU2Vzc2lvbkVuZHBvaW50IiwiZ2V0UmV2b2NhdGlvbkVuZHBvaW50IiwiZ2V0S2V5c0VuZHBvaW50IiwiZ2V0U2lnbmluZ0tleXMiLCJzaWduaW5nS2V5cyIsImp3a3NfdXJpIiwia2V5U2V0Iiwia2V5cyIsIl9tZXRhZGF0YVVybCIsImF1dGhvcml0eSIsImNyZWF0ZVNpZ25pblJlcXVlc3QiLCJyZXNwb25zZV90eXBlIiwic2NvcGUiLCJwcm9tcHQiLCJtYXhfYWdlIiwidWlfbG9jYWxlcyIsImlkX3Rva2VuX2hpbnQiLCJsb2dpbl9oaW50IiwiYWNyX3ZhbHVlcyIsInJlc291cmNlIiwicmVxdWVzdF91cmkiLCJyZXNwb25zZV9tb2RlIiwiZXh0cmFRdWVyeVBhcmFtcyIsImV4dHJhVG9rZW5QYXJhbXMiLCJyZXF1ZXN0X3R5cGUiLCJza2lwVXNlckluZm8iLCJzdGF0ZVN0b3JlIiwiU2lnbmluUmVxdWVzdCIsImlzQ29kZSIsIl9tZXRhZGF0YVNlcnZpY2UiLCJzaWduaW5SZXF1ZXN0IiwiY2xpZW50X3NlY3JldCIsInNpZ25pblN0YXRlIiwiX3N0YXRlU3RvcmUiLCJzZXQiLCJpZCIsInRvU3RvcmFnZVN0cmluZyIsInJlYWRTaWduaW5SZXNwb25zZVN0YXRlIiwicmVtb3ZlU3RhdGUiLCJ1c2VRdWVyeSIsImRlbGltaXRlciIsInJlc3BvbnNlIiwiU2lnbmluUmVzcG9uc2UiLCJzdGF0ZUFwaSIsInJlbW92ZSIsImdldCIsInN0b3JlZFN0YXRlU3RyaW5nIiwiU2lnbmluU3RhdGUiLCJmcm9tU3RvcmFnZVN0cmluZyIsInByb2Nlc3NTaWduaW5SZXNwb25zZSIsIl92YWxpZGF0b3IiLCJ2YWxpZGF0ZVNpZ25pblJlc3BvbnNlIiwiY3JlYXRlU2lnbm91dFJlcXVlc3QiLCJwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJTaWdub3V0UmVxdWVzdCIsInNpZ25vdXRTdGF0ZSIsInJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSIsIlNpZ25vdXRSZXNwb25zZSIsInN0YXRlS2V5IiwiU3RhdGUiLCJwcm9jZXNzU2lnbm91dFJlc3BvbnNlIiwidmFsaWRhdGVTaWdub3V0UmVzcG9uc2UiLCJjbGVhclN0YWxlU3RhdGUiLCJzdGFsZVN0YXRlQWdlIiwidmFsaWRhdG9yIiwibWV0YWRhdGFTZXJ2aWNlIiwiRGVmYXVsdFJlc3BvbnNlVHlwZSIsIkRlZmF1bHRTY29wZSIsIkRlZmF1bHRTdGFsZVN0YXRlQWdlIiwiRGVmYXVsdENsb2NrU2tld0luU2Vjb25kcyIsImZpbHRlclByb3RvY29sQ2xhaW1zIiwibG9hZFVzZXJJbmZvIiwidXNlckluZm9Kd3RJc3N1ZXIiLCJSZXNwb25zZVZhbGlkYXRvckN0b3IiLCJSZXNwb25zZVZhbGlkYXRvciIsIk1ldGFkYXRhU2VydmljZUN0b3IiLCJfYXV0aG9yaXR5IiwiX21ldGFkYXRhIiwiX3NpZ25pbmdLZXlzIiwiX2NsaWVudF9zZWNyZXQiLCJfcmVzcG9uc2VfdHlwZSIsIl9zY29wZSIsIl9yZWRpcmVjdF91cmkiLCJfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiX3Byb21wdCIsIl9kaXNwbGF5IiwiX21heF9hZ2UiLCJfdWlfbG9jYWxlcyIsIl9hY3JfdmFsdWVzIiwiX3Jlc291cmNlIiwiX3Jlc3BvbnNlX21vZGUiLCJfZmlsdGVyUHJvdG9jb2xDbGFpbXMiLCJfbG9hZFVzZXJJbmZvIiwiX3N0YWxlU3RhdGVBZ2UiLCJfY2xvY2tTa2V3IiwiX3VzZXJJbmZvSnd0SXNzdWVyIiwiX2V4dHJhUXVlcnlQYXJhbXMiLCJfZXh0cmFUb2tlblBhcmFtcyIsIlBvcHVwTmF2aWdhdG9yIiwiUG9wdXBXaW5kb3ciLCJrZWVwT3BlbiIsIm5vdGlmeU9wZW5lciIsIkNoZWNrRm9yUG9wdXBDbG9zZWRJbnRlcnZhbCIsIl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIiLCJfY2hlY2tGb3JQb3B1cENsb3NlZCIsIl9pZCIsImZvY3VzIiwiY2xvc2VkIiwib3BlbmVyIiwiVXJsVXRpbGl0eSIsInBhcnNlVXJsRnJhZ21lbnQiLCJSZWRpcmVjdE5hdmlnYXRvciIsInVzZVJlcGxhY2VUb05hdmlnYXRlIiwicmVwbGFjZSIsIlByb3RvY29sQ2xhaW1zIiwiVXNlckluZm9TZXJ2aWNlQ3RvciIsIlVzZXJJbmZvU2VydmljZSIsImpvc2VVdGlsIiwiVG9rZW5DbGllbnRDdG9yIiwiVG9rZW5DbGllbnQiLCJfdXNlckluZm9TZXJ2aWNlIiwiX2pvc2VVdGlsIiwiX3Rva2VuQ2xpZW50IiwiX3Byb2Nlc3NTaWduaW5QYXJhbXMiLCJfdmFsaWRhdGVUb2tlbnMiLCJfcHJvY2Vzc0NsYWltcyIsIm5vbmNlIiwiaWRfdG9rZW4iLCJjb2RlX3ZlcmlmaWVyIiwiY29kZSIsImlzT3BlbklkQ29ubmVjdCIsInByb2ZpbGUiLCJnZXRDbGFpbXMiLCJjbGFpbXMiLCJzdWIiLCJfbWVyZ2VDbGFpbXMiLCJjbGFpbXMxIiwiY2xhaW1zMiIsInJlc3VsdCIsImFzc2lnbiIsInZhbHVlcyIsImZvckVhY2giLCJ0eXBlIiwiX3Byb2Nlc3NDb2RlIiwiX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuIiwiX3ZhbGlkYXRlSWRUb2tlbiIsImV4Y2hhbmdlQ29kZSIsInRva2VuUmVzcG9uc2UiLCJfdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlcyIsImNsb2NrU2tld0luU2Vjb25kcyIsIl92YWxpZGF0ZUFjY2Vzc1Rva2VuIiwia2lkIiwiX2ZpbHRlckJ5QWxnIiwiZmlsdGVyIiwiYXRfaGFzaCIsImhhc2hBbGciLCJoYXNoQml0cyIsInNoYSIsImhhc2giLCJsZWZ0IiwibGVmdF9iNjR1IiwidXNlck1hbmFnZXIiLCJDaGVja1Nlc3Npb25JRnJhbWVDdG9yIiwiX3VzZXJNYW5hZ2VyIiwiX0NoZWNrU2Vzc2lvbklGcmFtZUN0b3IiLCJldmVudHMiLCJhZGRVc2VyTG9hZGVkIiwiX3N0YXJ0IiwiYWRkVXNlclVubG9hZGVkIiwiX3N0b3AiLCJnZXRVc2VyIiwidXNlciIsIm1vbml0b3JBbm9ueW1vdXNTZXNzaW9uIiwicXVlcnlTZXNzaW9uU3RhdHVzIiwidG1wVXNlciIsInNlc3Npb24iLCJzaWQiLCJjYXRjaCIsImVyciIsIl9zdWIiLCJfc2lkIiwiX2NoZWNrU2Vzc2lvbklGcmFtZSIsIl9jaGVja1Nlc3Npb25JbnRlcnZhbCIsIl9zdG9wQ2hlY2tTZXNzaW9uT25FcnJvciIsInRpbWVySGFuZGxlIiwicmFpc2VFdmVudCIsIl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCIsIl9yYWlzZVVzZXJTaWduZWRPdXQiLCJfcmFpc2VVc2VyU2lnbmVkSW4iLCJjaGVja1Nlc3Npb25JbnRlcnZhbCIsInN0b3BDaGVja1Nlc3Npb25PbkVycm9yIiwib2lkYyIsImlzT2lkYyIsImFkZFF1ZXJ5UGFyYW0iLCJjb2RlX2NoYWxsZW5nZSIsInNwbGl0IiwiaXNPQXV0aCIsIk9pZGNTY29wZSIsInRva2VuX3R5cGUiLCJleHBpcmVzX2F0Iiwic2NvcGVzIiwiYXJndW1lbnRzIiwiX25vbmNlIiwiX2NvZGVfdmVyaWZpZXIiLCJfY29kZV9jaGFsbGVuZ2UiLCJfc2tpcFVzZXJJbmZvIiwic3RyaW5naWZ5IiwiY3JlYXRlZCIsInN0b3JhZ2VTdHJpbmciLCJTaWxlbnRSZW5ld1NlcnZpY2UiLCJfdG9rZW5FeHBpcmluZyIsInNpZ25pblNpbGVudCIsIl9yYWlzZVNpbGVudFJlbmV3RXJyb3IiLCJfY3JlYXRlZCIsIl9yZXF1ZXN0X3R5cGUiLCJzdG9yYWdlIiwiYWdlIiwiY3V0b2ZmIiwiZ2V0QWxsS2V5cyIsInByb21pc2VzIiwicCIsImFsbCIsIlRpbWVyRHVyYXRpb24iLCJub3dGdW5jIiwiX25vd0Z1bmMiLCJleHBpcmF0aW9uIiwiX3RpbWVySGFuZGxlIiwiX2V4cGlyYXRpb24iLCJ0aW1lckR1cmF0aW9uIiwiZGlmZiIsImdyYW50X3R5cGUiLCJleGNoYW5nZVJlZnJlc2hUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJBY2Nlc3NUb2tlblR5cGVIaW50IiwiUmVmcmVzaFRva2VuVHlwZUhpbnQiLCJfWE1MSHR0cFJlcXVlc3RDdG9yIiwicmV2b2tlIiwicmVxdWlyZWQiLCJfcmV2b2tlIiwieGhyIiwiZ2xvYmFsIiwibGFzdEluZGV4T2YiLCJyZWdleCIsIm0iLCJjb3VudGVyIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCIsInByb3AiLCJfZ2V0Q2xhaW1zRnJvbUp3dCIsImlzc3VlclByb21pc2UiLCJTaWxlbnRSZW5ld1NlcnZpY2VDdG9yIiwiU2Vzc2lvbk1vbml0b3JDdG9yIiwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3RvciIsIlVzZXJNYW5hZ2VyU2V0dGluZ3MiLCJfZXZlbnRzIiwiVXNlck1hbmFnZXJFdmVudHMiLCJfc2lsZW50UmVuZXdTZXJ2aWNlIiwiYXV0b21hdGljU2lsZW50UmVuZXciLCJzdGFydFNpbGVudFJlbmV3IiwibW9uaXRvclNlc3Npb24iLCJfc2Vzc2lvbk1vbml0b3IiLCJfdG9rZW5SZXZvY2F0aW9uQ2xpZW50IiwiX2xvYWRVc2VyIiwicmVtb3ZlVXNlciIsInN0b3JlVXNlciIsInNpZ25pblJlZGlyZWN0IiwibmF2UGFyYW1zIiwiX3NpZ25pblN0YXJ0IiwiX3JlZGlyZWN0TmF2aWdhdG9yIiwic2lnbmluUmVkaXJlY3RDYWxsYmFjayIsIl9zaWduaW5FbmQiLCJzaWduaW5Qb3B1cCIsInBvcHVwX3JlZGlyZWN0X3VyaSIsIl9zaWduaW4iLCJfcG9wdXBOYXZpZ2F0b3IiLCJzaWduaW5Qb3B1cENhbGxiYWNrIiwiX3NpZ25pbkNhbGxiYWNrIiwiX3VzZVJlZnJlc2hUb2tlbiIsImluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyIsInZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyIsImN1cnJlbnRfc3ViIiwiX3NpZ25pblNpbGVudElmcmFtZSIsImlkVG9rZW5WYWxpZGF0aW9uIiwiX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbiIsImF1dGhfdGltZSIsInNpbGVudF9yZWRpcmVjdF91cmkiLCJfaWZyYW1lTmF2aWdhdG9yIiwic2lnbmluU2lsZW50Q2FsbGJhY2siLCJzaWduaW5DYWxsYmFjayIsInNpZ25vdXRDYWxsYmFjayIsInNpZ25vdXRSZWRpcmVjdENhbGxiYWNrIiwic2lnbm91dFBvcHVwQ2FsbGJhY2siLCJxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSIsIm5hdlJlc3BvbnNlIiwic2lnbmluUmVzcG9uc2UiLCJuYXZpZ2F0b3IiLCJuYXZpZ2F0b3JQYXJhbXMiLCJzaWdub3V0UmVkaXJlY3QiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJfc2lnbm91dFN0YXJ0IiwiX3NpZ25vdXRFbmQiLCJzaWdub3V0UG9wdXAiLCJwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfc2lnbm91dCIsInJldm9rZVByb21pc2UiLCJyZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCIsIl9yZXZva2VJbnRlcm5hbCIsInNpZ25vdXRSZXF1ZXN0Iiwic2lnbm91dFJlc3BvbnNlIiwicmV2b2tlQWNjZXNzVG9rZW4iLCJzdWNjZXNzIiwiX3Jldm9rZUFjY2Vzc1Rva2VuSW50ZXJuYWwiLCJfcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwiLCJhdFN1Y2Nlc3MiLCJydFN1Y2Nlc3MiLCJzdG9wU2lsZW50UmVuZXciLCJfdXNlclN0b3JlIiwiX3VzZXJTdG9yZUtleSIsInJlZGlyZWN0TmF2aWdhdG9yIiwicG9wdXBOYXZpZ2F0b3IiLCJpZnJhbWVOYXZpZ2F0b3IiLCJ1c2VyU3RvcmUiLCJfdXNlckxvYWRlZCIsIl91c2VyVW5sb2FkZWQiLCJfc2lsZW50UmVuZXdFcnJvciIsIl91c2VyU2lnbmVkSW4iLCJfdXNlclNpZ25lZE91dCIsIl91c2VyU2Vzc2lvbkNoYW5nZWQiLCJyZW1vdmVVc2VyTG9hZGVkIiwicmVtb3ZlVXNlclVubG9hZGVkIiwiYWRkU2lsZW50UmVuZXdFcnJvciIsInJlbW92ZVNpbGVudFJlbmV3RXJyb3IiLCJhZGRVc2VyU2lnbmVkSW4iLCJyZW1vdmVVc2VyU2lnbmVkSW4iLCJhZGRVc2VyU2lnbmVkT3V0IiwicmVtb3ZlVXNlclNpZ25lZE91dCIsImFkZFVzZXJTZXNzaW9uQ2hhbmdlZCIsInJlbW92ZVVzZXJTZXNzaW9uQ2hhbmdlZCIsIkRlZmF1bHRDaGVja1Nlc3Npb25JbnRlcnZhbCIsInN0b3JlIiwiX3BvcHVwX3JlZGlyZWN0X3VyaSIsIl9wb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfcG9wdXBXaW5kb3dGZWF0dXJlcyIsIl9wb3B1cFdpbmRvd1RhcmdldCIsIl9zaWxlbnRfcmVkaXJlY3RfdXJpIiwiX3NpbGVudFJlcXVlc3RUaW1lb3V0IiwiX2F1dG9tYXRpY1NpbGVudFJlbmV3IiwiX3ZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyIsIl9pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXciLCJfbW9uaXRvclNlc3Npb24iLCJfbW9uaXRvckFub255bW91c1Nlc3Npb24iLCJfcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUiLCJfcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQiLCJwcmVmaXgiLCJfc3RvcmUiLCJfcHJlZml4IiwiQmlnSW50ZWdlciIsIkpTQk4iLCJiNjRtYXAiLCJiNjRwYWQiLCJCYXNlNjQiLCJzIiwicmV0IiwiayIsInNsb3AiLCJjaGFyQXQiLCJ2IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiaGV4VG9CYXNlNjQiLCJoIiwiYyIsInN1YnN0cmluZyIsInBhZGRpbmciLCJzdHIiLCJtb2QiLCJwYWQiLCJqb2luIiwiYnl0ZUFycmF5VG9IZXgiLCJyYXciLCJIRVgiLCJfaGV4IiwidG9TdHJpbmciLCJkZWNvZGVUb0hFWCIsImJhc2U2NEpzIiwidG9CeXRlQXJyYXkiLCJiYXNlNjRUb0Jhc2U2NFVybCIsInVybERlY29kZSIsImF0b2IiLCJEaWdlc3RJbmZvSGVhZCIsInNoYTEiLCJzaGEyMjQiLCJzaGEyNTYiLCJzaGEzODQiLCJzaGE1MTIiLCJtZDIiLCJtZDUiLCJyaXBlbWQxNjAiLCJEaWdlc3RBbGdzIiwiU0hBMjU2IiwiUlNBVmVyaWZpZXIiLCJtb2R1bHVzIiwiZ2V0QWxnb3JpdGhtRnJvbURpZ2VzdCIsImhEaWdlc3RJbmZvIiwiYWxnTmFtZSIsImhlYWQiLCJsZW4iLCJwcm90b3R5cGUiLCJtc2ciLCJlbmNzaWciLCJzaWciLCJiaXRMZW5ndGgiLCJkZWNyeXB0ZWRTaWciLCJtb2RQb3dJbnQiLCJkaWdlc3QiLCJkaWdlc3RJbmZvIiwibXNnSGFzaCIsInBhcnRzIiwiYWxsb3dlZFNpZ25pbmdBbGdzIiwiaGVhZGVyQW5kUGF5bG9hZCIsImdldFB1YmxpY0tleUZyb21DZXJ0UEVNIiwiaGFzaEZ1bmMiLCJyYW5kb20iLCJtc0NyeXB0byIsIl9jcnlwdG9VdWlkdjQiLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50OEFycmF5IiwiX3V1aWR2NCIsIk1hdGgiLCJoYXNDcnlwdG8iLCJoYXNSYW5kb21WYWx1ZXMiLCJ1dWlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNB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LEdBQWtDRyxPQUE3QztBQUNBLFNBQU9JLE9BQU85VCxPQUFQLENBQWUsSUFBZixFQUFxQixFQUFyQixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRCxJQUFNclosVUFBVSxlQUFoQixDLFFBQXlDQSxPLEdBQUFBLE8iLCJmaWxlIjoib2lkYy1jbGllbnQucnNhMjU2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL3NyYy9Mb2cuanMnO1xyXG5pbXBvcnQgeyBPaWRjQ2xpZW50IH0gZnJvbSAnLi9zcmMvT2lkY0NsaWVudC5qcyc7XHJcbmltcG9ydCB7IE9pZGNDbGllbnRTZXR0aW5ncyB9IGZyb20gJy4vc3JjL09pZGNDbGllbnRTZXR0aW5ncy5qcyc7XHJcbmltcG9ydCB7IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnLi9zcmMvV2ViU3RvcmFnZVN0YXRlU3RvcmUuanMnO1xyXG5pbXBvcnQgeyBJbk1lbW9yeVdlYlN0b3JhZ2UgfSBmcm9tICcuL3NyYy9Jbk1lbW9yeVdlYlN0b3JhZ2UuanMnO1xyXG5pbXBvcnQgeyBVc2VyTWFuYWdlciB9IGZyb20gJy4vc3JjL1VzZXJNYW5hZ2VyLmpzJztcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5FdmVudHMgfSBmcm9tICcuL3NyYy9BY2Nlc3NUb2tlbkV2ZW50cy5qcyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vc3JjL01ldGFkYXRhU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IENvcmRvdmFQb3B1cE5hdmlnYXRvciB9IGZyb20gJy4vc3JjL0NvcmRvdmFQb3B1cE5hdmlnYXRvci5qcyc7XHJcbmltcG9ydCB7IENvcmRvdmFJRnJhbWVOYXZpZ2F0b3IgfSBmcm9tICcuL3NyYy9Db3Jkb3ZhSUZyYW1lTmF2aWdhdG9yLmpzJztcclxuaW1wb3J0IHsgQ2hlY2tTZXNzaW9uSUZyYW1lIH0gZnJvbSAnLi9zcmMvQ2hlY2tTZXNzaW9uSUZyYW1lLmpzJztcclxuaW1wb3J0IHsgVG9rZW5SZXZvY2F0aW9uQ2xpZW50IH0gZnJvbSAnLi9zcmMvVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzJztcclxuaW1wb3J0IHsgU2Vzc2lvbk1vbml0b3IgfSBmcm9tICcuL3NyYy9TZXNzaW9uTW9uaXRvci5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vc3JjL0dsb2JhbC5qcyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3NyYy9Vc2VyLmpzJztcclxuXHJcbmltcG9ydCB7IFZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24uanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgVmVyc2lvbixcclxuICAgIExvZyxcclxuICAgIE9pZGNDbGllbnQsXHJcbiAgICBPaWRjQ2xpZW50U2V0dGluZ3MsXHJcbiAgICBXZWJTdG9yYWdlU3RhdGVTdG9yZSxcclxuICAgIEluTWVtb3J5V2ViU3RvcmFnZSxcclxuICAgIFVzZXJNYW5hZ2VyLFxyXG4gICAgQWNjZXNzVG9rZW5FdmVudHMsXHJcbiAgICBNZXRhZGF0YVNlcnZpY2UsXHJcbiAgICBDb3Jkb3ZhUG9wdXBOYXZpZ2F0b3IsXHJcbiAgICBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yLFxyXG4gICAgQ2hlY2tTZXNzaW9uSUZyYW1lLFxyXG4gICAgVG9rZW5SZXZvY2F0aW9uQ2xpZW50LFxyXG4gICAgU2Vzc2lvbk1vbml0b3IsXHJcbiAgICBHbG9iYWwsXHJcbiAgICBVc2VyXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdHJvb3QuQ3J5cHRvSlMgPSBmYWN0b3J5KCk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXG5cdC8qKlxuXHQgKiBDcnlwdG9KUyBjb3JlIGNvbXBvbmVudHMuXG5cdCAqL1xuXHR2YXIgQ3J5cHRvSlMgPSBDcnlwdG9KUyB8fCAoZnVuY3Rpb24gKE1hdGgsIHVuZGVmaW5lZCkge1xuXHQgICAgLypcblx0ICAgICAqIExvY2FsIHBvbHlmaWwgb2YgT2JqZWN0LmNyZWF0ZVxuXHQgICAgICovXG5cdCAgICB2YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIEYoKSB7fTtcblxuXHQgICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgICAgICAgIHZhciBzdWJ0eXBlO1xuXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gb2JqO1xuXG5cdCAgICAgICAgICAgIHN1YnR5cGUgPSBuZXcgRigpO1xuXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gbnVsbDtcblxuXHQgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICB9O1xuXHQgICAgfSgpKVxuXG5cdCAgICAvKipcblx0ICAgICAqIENyeXB0b0pTIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMaWJyYXJ5IG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfbGliID0gQy5saWIgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBCYXNlIG9iamVjdCBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlID0gKGZ1bmN0aW9uICgpIHtcblxuXG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG92ZXJyaWRlcyBQcm9wZXJ0aWVzIHRvIGNvcHkgaW50byB0aGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZScsXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICAgICAgbWV0aG9kOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNwYXduXG5cdCAgICAgICAgICAgICAgICB2YXIgc3VidHlwZSA9IGNyZWF0ZSh0aGlzKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gQXVnbWVudFxuXHQgICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUubWl4SW4ob3ZlcnJpZGVzKTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRlZmF1bHQgaW5pdGlhbGl6ZXJcblx0ICAgICAgICAgICAgICAgIGlmICghc3VidHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5pdCcpIHx8IHRoaXMuaW5pdCA9PT0gc3VidHlwZS5pbml0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlci5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZXIncyBwcm90b3R5cGUgaXMgdGhlIHN1YnR5cGUgb2JqZWN0XG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQucHJvdG90eXBlID0gc3VidHlwZTtcblxuXHQgICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHN1cGVydHlwZVxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIgPSB0aGlzO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogRXh0ZW5kcyB0aGlzIG9iamVjdCBhbmQgcnVucyB0aGUgaW5pdCBtZXRob2QuXG5cdCAgICAgICAgICAgICAqIEFyZ3VtZW50cyB0byBjcmVhdGUoKSB3aWxsIGJlIHBhc3NlZCB0byBpbml0KCkuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBpbnN0YW5jZSA9IE15VHlwZS5jcmVhdGUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5leHRlbmQoKTtcblx0ICAgICAgICAgICAgICAgIGluc3RhbmNlLmluaXQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIG9iamVjdC5cblx0ICAgICAgICAgICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHNvbWUgbG9naWMgd2hlbiB5b3VyIG9iamVjdHMgYXJlIGNyZWF0ZWQuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgICAgIC8vIC4uLlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDb3BpZXMgcHJvcGVydGllcyBpbnRvIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBtaXggaW4uXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICBNeVR5cGUubWl4SW4oe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnXG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIG1peEluOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIElFIHdvbid0IGNvcHkgdG9TdHJpbmcgdXNpbmcgdGhlIGxvb3AgYWJvdmVcblx0ICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy50b1N0cmluZyA9IHByb3BlcnRpZXMudG9TdHJpbmc7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGluc3RhbmNlLmNsb25lKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9IHdvcmRzIFRoZSBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2lnQnl0ZXMgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgKi9cblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXkgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSB3b3JkcyAoT3B0aW9uYWwpIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lnQnl0ZXMgKE9wdGlvbmFsKSBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoZSB3b3Jkcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKCk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10pO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddLCA2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAod29yZHMsIHNpZ0J5dGVzKSB7XG5cdCAgICAgICAgICAgIHdvcmRzID0gdGhpcy53b3JkcyA9IHdvcmRzIHx8IFtdO1xuXG5cdCAgICAgICAgICAgIGlmIChzaWdCeXRlcyAhPSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSBzaWdCeXRlcztcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSB3b3Jkcy5sZW5ndGggKiA0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIHRoaXMgd29yZCBhcnJheSB0byBhIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7RW5jb2Rlcn0gZW5jb2RlciAoT3B0aW9uYWwpIFRoZSBlbmNvZGluZyBzdHJhdGVneSB0byB1c2UuIERlZmF1bHQ6IENyeXB0b0pTLmVuYy5IZXhcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZ2lmaWVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkgKyAnJztcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZygpO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKGVuY29kZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIChlbmNvZGVyIHx8IEhleCkuc3RyaW5naWZ5KHRoaXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25jYXRlbmF0ZXMgYSB3b3JkIGFycmF5IHRvIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheTEuY29uY2F0KHdvcmRBcnJheTIpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHRoaXNXb3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0V29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGlzU2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHRoaXMuY2xhbXAoKTtcblxuXHQgICAgICAgICAgICAvLyBDb25jYXRcblx0ICAgICAgICAgICAgaWYgKHRoaXNTaWdCeXRlcyAlIDQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIGJ5dGUgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXRCeXRlID0gKHRoYXRXb3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gfD0gdGhhdEJ5dGUgPDwgKDI0IC0gKCh0aGlzU2lnQnl0ZXMgKyBpKSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSB3b3JkIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0U2lnQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaSkgPj4+IDJdID0gdGhhdFdvcmRzW2kgPj4+IDJdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgKz0gdGhhdFNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVtb3ZlcyBpbnNpZ25pZmljYW50IGJpdHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsYW1wOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wXG5cdCAgICAgICAgICAgIHdvcmRzW3NpZ0J5dGVzID4+PiAyXSAmPSAweGZmZmZmZmZmIDw8ICgzMiAtIChzaWdCeXRlcyAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIHdvcmRzLmxlbmd0aCA9IE1hdGguY2VpbChzaWdCeXRlcyAvIDQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gd29yZEFycmF5LmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS53b3JkcyA9IHRoaXMud29yZHMuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgd29yZCBhcnJheSBmaWxsZWQgd2l0aCByYW5kb20gYnl0ZXMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbkJ5dGVzIFRoZSBudW1iZXIgb2YgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcmFuZG9tIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LnJhbmRvbSgxNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiAobkJ5dGVzKSB7XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXG5cdCAgICAgICAgICAgIHZhciByID0gKGZ1bmN0aW9uIChtX3cpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBtX3cgPSBtX3c7XG5cdCAgICAgICAgICAgICAgICB2YXIgbV96ID0gMHgzYWRlNjhiMTtcblx0ICAgICAgICAgICAgICAgIHZhciBtYXNrID0gMHhmZmZmZmZmZjtcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICBtX3ogPSAoMHg5MDY5ICogKG1feiAmIDB4RkZGRikgKyAobV96ID4+IDB4MTApKSAmIG1hc2s7XG5cdCAgICAgICAgICAgICAgICAgICAgbV93ID0gKDB4NDY1MCAqIChtX3cgJiAweEZGRkYpICsgKG1fdyA+PiAweDEwKSkgJiBtYXNrO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAoKG1feiA8PCAweDEwKSArIG1fdykgJiBtYXNrO1xuXHQgICAgICAgICAgICAgICAgICAgIHJlc3VsdCAvPSAweDEwMDAwMDAwMDtcblx0ICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gMC41O1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKiAoTWF0aC5yYW5kb20oKSA+IC41ID8gMSA6IC0xKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSk7XG5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIHJjYWNoZTsgaSA8IG5CeXRlczsgaSArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgX3IgPSByKChyY2FjaGUgfHwgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwMDAwMCk7XG5cblx0ICAgICAgICAgICAgICAgIHJjYWNoZSA9IF9yKCkgKiAweDNhZGU2N2I3O1xuXHQgICAgICAgICAgICAgICAgd29yZHMucHVzaCgoX3IoKSAqIDB4MTAwMDAwMDAwKSB8IDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbkJ5dGVzKTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBFbmNvZGVyIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBIZXggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBIZXggPSBDX2VuYy5IZXggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGV4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkhleC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGhleENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgJiAweDBmKS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhleENoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIGhleCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhleFN0ciBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKGhleFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChoZXhTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGhleFN0ckxlbmd0aCA9IGhleFN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZXhTdHJMZW5ndGg7IGkgKz0gMikge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gM10gfD0gcGFyc2VJbnQoaGV4U3RyLnN1YnN0cihpLCAyKSwgMTYpIDw8ICgyNCAtIChpICUgOCkgKiA0KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGhleFN0ckxlbmd0aCAvIDIpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGF0aW4xIGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgTGF0aW4xID0gQ19lbmMuTGF0aW4xID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGxhdGluMVN0cmluZyA9IENyeXB0b0pTLmVuYy5MYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGxhdGluMUNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShiaXRlKSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbGF0aW4xQ2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgTGF0aW4xIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGF0aW4xU3RyIFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5MYXRpbjEucGFyc2UobGF0aW4xU3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGxhdGluMVN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xU3RyTGVuZ3RoID0gbGF0aW4xU3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhdGluMVN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAyXSB8PSAobGF0aW4xU3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmKSA8PCAoMjQgLSAoaSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBsYXRpbjFTdHJMZW5ndGgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogVVRGLTggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBVdGY4ID0gQ19lbmMuVXRmOCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgdXRmOFN0cmluZyA9IENyeXB0b0pTLmVuYy5VdGY4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpKSk7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkIFVURi04IGRhdGEnKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIFVURi04IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXRmOFN0ciBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHV0ZjhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAodXRmOFN0cikge1xuXHQgICAgICAgICAgICByZXR1cm4gTGF0aW4xLnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh1dGY4U3RyKSkpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgYnVmZmVyZWQgYmxvY2sgYWxnb3JpdGhtIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIFRoZSBwcm9wZXJ0eSBibG9ja1NpemUgbXVzdCBiZSBpbXBsZW1lbnRlZCBpbiBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IF9taW5CdWZmZXJTaXplIFRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgc2hvdWxkIGJlIGtlcHQgdW5wcm9jZXNzZWQgaW4gdGhlIGJ1ZmZlci4gRGVmYXVsdDogMFxuXHQgICAgICovXG5cdCAgICB2YXIgQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IENfbGliLkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgZGF0YSBidWZmZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFdvcmRBcnJheS5pbml0KCk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgPSAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBBZGRzIG5ldyBkYXRhIHRvIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgYnVmZmVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGFwcGVuZC4gU3RyaW5ncyBhcmUgY29udmVydGVkIHRvIGEgV29yZEFycmF5IHVzaW5nIFVURi04LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQoJ2RhdGEnKTtcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2FwcGVuZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gV29yZEFycmF5LCBlbHNlIGFzc3VtZSBXb3JkQXJyYXkgYWxyZWFkeVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgICAgIGRhdGEgPSBVdGY4LnBhcnNlKGRhdGEpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEuY29uY2F0KGRhdGEpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzICs9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFByb2Nlc3NlcyBhdmFpbGFibGUgZGF0YSBibG9ja3MuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBUaGlzIG1ldGhvZCBpbnZva2VzIF9kb1Byb2Nlc3NCbG9jayhvZmZzZXQpLCB3aGljaCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9GbHVzaCBXaGV0aGVyIGFsbCBibG9ja3MgYW5kIHBhcnRpYWwgYmxvY2tzIHNob3VsZCBiZSBwcm9jZXNzZWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBwcm9jZXNzZWQgZGF0YS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCk7XG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcyghISdmbHVzaCcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9wcm9jZXNzOiBmdW5jdGlvbiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGRhdGFTaWdCeXRlcyA9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBibG9ja3MgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CbG9ja3NSZWFkeSA9IGRhdGFTaWdCeXRlcyAvIGJsb2NrU2l6ZUJ5dGVzO1xuXHQgICAgICAgICAgICBpZiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgdXAgdG8gaW5jbHVkZSBwYXJ0aWFsIGJsb2Nrc1xuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5jZWlsKG5CbG9ja3NSZWFkeSk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCBkb3duIHRvIGluY2x1ZGUgb25seSBmdWxsIGJsb2Nrcyxcblx0ICAgICAgICAgICAgICAgIC8vIGxlc3MgdGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBtdXN0IHJlbWFpbiBpbiB0aGUgYnVmZmVyXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLm1heCgobkJsb2Nrc1JlYWR5IHwgMCkgLSB0aGlzLl9taW5CdWZmZXJTaXplLCAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvdW50IHdvcmRzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuV29yZHNSZWFkeSA9IG5CbG9ja3NSZWFkeSAqIGJsb2NrU2l6ZTtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBieXRlcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbkJ5dGVzUmVhZHkgPSBNYXRoLm1pbihuV29yZHNSZWFkeSAqIDQsIGRhdGFTaWdCeXRlcyk7XG5cblx0ICAgICAgICAgICAgLy8gUHJvY2VzcyBibG9ja3Ncblx0ICAgICAgICAgICAgaWYgKG5Xb3Jkc1JlYWR5KSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBuV29yZHNSZWFkeTsgb2Zmc2V0ICs9IGJsb2NrU2l6ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtYWxnb3JpdGhtIGxvZ2ljXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9Qcm9jZXNzQmxvY2soZGF0YVdvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc2VkV29yZHMgPSBkYXRhV29yZHMuc3BsaWNlKDAsIG5Xb3Jkc1JlYWR5KTtcblx0ICAgICAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gbkJ5dGVzUmVhZHk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQocHJvY2Vzc2VkV29yZHMsIG5CeXRlc1JlYWR5KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2RhdGEgPSB0aGlzLl9kYXRhLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfbWluQnVmZmVyU2l6ZTogMFxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgaGFzaGVyIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBibG9ja1NpemUgVGhlIG51bWJlciBvZiAzMi1iaXQgd29yZHMgdGhpcyBoYXNoZXIgb3BlcmF0ZXMgb24uIERlZmF1bHQ6IDE2ICg1MTIgYml0cylcblx0ICAgICAqL1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlciA9IEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCgpLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaGVyID0gQ3J5cHRvSlMuYWxnby5TSEEyNTYuY3JlYXRlKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBoYXNoZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGRhdGEgYnVmZmVyXG5cdCAgICAgICAgICAgIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB0aGlzLl9kb1Jlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFVwZGF0ZXMgdGhpcyBoYXNoZXIgd2l0aCBhIG1lc3NhZ2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgVGhlIG1lc3NhZ2UgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7SGFzaGVyfSBUaGlzIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXG5cdCAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgaGFzaFxuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBGaW5hbGl6ZXMgdGhlIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSAoT3B0aW9uYWwpIEEgZmluYWwgbWVzc2FnZSB1cGRhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBGaW5hbCBtZXNzYWdlIHVwZGF0ZVxuXHQgICAgICAgICAgICBpZiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLl9kb0ZpbmFsaXplKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogNTEyLzMyLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIGEgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byBjcmVhdGUgYSBoZWxwZXIgZm9yLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIFNIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGNmZykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBoYXNoZXIuaW5pdChjZmcpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIHVzZSBpbiB0aGlzIEhNQUMgaGVscGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIEhtYWNTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSG1hY0hlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGtleSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDX2FsZ28uSE1BQy5pbml0KGhhc2hlciwga2V5KS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbGdvcml0aG0gbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvID0ge307XG5cblx0ICAgIHJldHVybiBDO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUztcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uIChNYXRoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyO1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLy8gSW5pdGlhbGl6YXRpb24gYW5kIHJvdW5kIGNvbnN0YW50cyB0YWJsZXNcblx0ICAgIHZhciBIID0gW107XG5cdCAgICB2YXIgSyA9IFtdO1xuXG5cdCAgICAvLyBDb21wdXRlIGNvbnN0YW50c1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBpc1ByaW1lKG4pIHtcblx0ICAgICAgICAgICAgdmFyIHNxcnROID0gTWF0aC5zcXJ0KG4pO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBmYWN0b3IgPSAyOyBmYWN0b3IgPD0gc3FydE47IGZhY3RvcisrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoIShuICUgZmFjdG9yKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGZ1bmN0aW9uIGdldEZyYWN0aW9uYWxCaXRzKG4pIHtcblx0ICAgICAgICAgICAgcmV0dXJuICgobiAtIChuIHwgMCkpICogMHgxMDAwMDAwMDApIHwgMDtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICB2YXIgbiA9IDI7XG5cdCAgICAgICAgdmFyIG5QcmltZSA9IDA7XG5cdCAgICAgICAgd2hpbGUgKG5QcmltZSA8IDY0KSB7XG5cdCAgICAgICAgICAgIGlmIChpc1ByaW1lKG4pKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoblByaW1lIDwgOCkge1xuXHQgICAgICAgICAgICAgICAgICAgIEhbblByaW1lXSA9IGdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sIDEgLyAyKSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBLW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhNYXRoLnBvdyhuLCAxIC8gMykpO1xuXG5cdCAgICAgICAgICAgICAgICBuUHJpbWUrKztcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIG4rKztcblx0ICAgICAgICB9XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3Rcblx0ICAgIHZhciBXID0gW107XG5cblx0ICAgIC8qKlxuXHQgICAgICogU0hBLTI1NiBoYXNoIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFNIQTI1NiA9IENfYWxnby5TSEEyNTYgPSBIYXNoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFdvcmRBcnJheS5pbml0KEguc2xpY2UoMCkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIEggPSB0aGlzLl9oYXNoLndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFdvcmtpbmcgdmFyaWFibGVzXG5cdCAgICAgICAgICAgIHZhciBhID0gSFswXTtcblx0ICAgICAgICAgICAgdmFyIGIgPSBIWzFdO1xuXHQgICAgICAgICAgICB2YXIgYyA9IEhbMl07XG5cdCAgICAgICAgICAgIHZhciBkID0gSFszXTtcblx0ICAgICAgICAgICAgdmFyIGUgPSBIWzRdO1xuXHQgICAgICAgICAgICB2YXIgZiA9IEhbNV07XG5cdCAgICAgICAgICAgIHZhciBnID0gSFs2XTtcblx0ICAgICAgICAgICAgdmFyIGggPSBIWzddO1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGF0aW9uXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKGkgPCAxNikge1xuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBNW29mZnNldCArIGldIHwgMDtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMHggPSBXW2kgLSAxNV07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMCAgPSAoKGdhbW1hMHggPDwgMjUpIHwgKGdhbW1hMHggPj4+IDcpKSAgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnYW1tYTB4IDw8IDE0KSB8IChnYW1tYTB4ID4+PiAxOCkpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2FtbWEweCA+Pj4gMyk7XG5cblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExeCA9IFdbaSAtIDJdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTEgID0gKChnYW1tYTF4IDw8IDE1KSB8IChnYW1tYTF4ID4+PiAxNykpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZ2FtbWExeCA8PCAxMykgfCAoZ2FtbWExeCA+Pj4gMTkpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdhbW1hMXggPj4+IDEwKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBnYW1tYTAgKyBXW2kgLSA3XSArIGdhbW1hMSArIFdbaSAtIDE2XTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgdmFyIGNoICA9IChlICYgZikgXiAofmUgJiBnKTtcblx0ICAgICAgICAgICAgICAgIHZhciBtYWogPSAoYSAmIGIpIF4gKGEgJiBjKSBeIChiICYgYyk7XG5cblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTAgPSAoKGEgPDwgMzApIHwgKGEgPj4+IDIpKSBeICgoYSA8PCAxOSkgfCAoYSA+Pj4gMTMpKSBeICgoYSA8PCAxMCkgfCAoYSA+Pj4gMjIpKTtcblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTEgPSAoKGUgPDwgMjYpIHwgKGUgPj4+IDYpKSBeICgoZSA8PCAyMSkgfCAoZSA+Pj4gMTEpKSBeICgoZSA8PCA3KSAgfCAoZSA+Pj4gMjUpKTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHQxID0gaCArIHNpZ21hMSArIGNoICsgS1tpXSArIFdbaV07XG5cdCAgICAgICAgICAgICAgICB2YXIgdDIgPSBzaWdtYTAgKyBtYWo7XG5cblx0ICAgICAgICAgICAgICAgIGggPSBnO1xuXHQgICAgICAgICAgICAgICAgZyA9IGY7XG5cdCAgICAgICAgICAgICAgICBmID0gZTtcblx0ICAgICAgICAgICAgICAgIGUgPSAoZCArIHQxKSB8IDA7XG5cdCAgICAgICAgICAgICAgICBkID0gYztcblx0ICAgICAgICAgICAgICAgIGMgPSBiO1xuXHQgICAgICAgICAgICAgICAgYiA9IGE7XG5cdCAgICAgICAgICAgICAgICBhID0gKHQxICsgdDIpIHwgMDtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG5cdCAgICAgICAgICAgIEhbMF0gPSAoSFswXSArIGEpIHwgMDtcblx0ICAgICAgICAgICAgSFsxXSA9IChIWzFdICsgYikgfCAwO1xuXHQgICAgICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSB8IDA7XG5cdCAgICAgICAgICAgIEhbM10gPSAoSFszXSArIGQpIHwgMDtcblx0ICAgICAgICAgICAgSFs0XSA9IChIWzRdICsgZSkgfCAwO1xuXHQgICAgICAgICAgICBIWzVdID0gKEhbNV0gKyBmKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNl0gPSAoSFs2XSArIGcpIHwgMDtcblx0ICAgICAgICAgICAgSFs3XSA9IChIWzddICsgaCkgfCAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuXHQgICAgICAgICAgICB2YXIgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE1XSA9IG5CaXRzVG90YWw7XG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcblxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTI1Nih3b3JkQXJyYXkpO1xuXHQgICAgICovXG5cdCAgICBDLlNIQTI1NiA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFNIQTI1Nik7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBMjU2KG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgKi9cblx0ICAgIEMuSG1hY1NIQTI1NiA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihTSEEyNTYpO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEEyNTY7XG5cbn0pKTsiLCIoZnVuY3Rpb24oKXtcblxuICAgIC8vIENvcHlyaWdodCAoYykgMjAwNSAgVG9tIFd1XG4gICAgLy8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAvLyBTZWUgXCJMSUNFTlNFXCIgZm9yIGRldGFpbHMuXG5cbiAgICAvLyBCYXNpYyBKYXZhU2NyaXB0IEJOIGxpYnJhcnkgLSBzdWJzZXQgdXNlZnVsIGZvciBSU0EgZW5jcnlwdGlvbi5cblxuICAgIC8vIEJpdHMgcGVyIGRpZ2l0XG4gICAgdmFyIGRiaXRzO1xuXG4gICAgLy8gSmF2YVNjcmlwdCBlbmdpbmUgYW5hbHlzaXNcbiAgICB2YXIgY2FuYXJ5ID0gMHhkZWFkYmVlZmNhZmU7XG4gICAgdmFyIGpfbG0gPSAoKGNhbmFyeSYweGZmZmZmZik9PTB4ZWZjYWZlKTtcblxuICAgIC8vIChwdWJsaWMpIENvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gQmlnSW50ZWdlcihhLGIsYykge1xuICAgICAgaWYoYSAhPSBudWxsKVxuICAgICAgICBpZihcIm51bWJlclwiID09IHR5cGVvZiBhKSB0aGlzLmZyb21OdW1iZXIoYSxiLGMpO1xuICAgICAgICBlbHNlIGlmKGIgPT0gbnVsbCAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBhKSB0aGlzLmZyb21TdHJpbmcoYSwyNTYpO1xuICAgICAgICBlbHNlIHRoaXMuZnJvbVN0cmluZyhhLGIpO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBuZXcsIHVuc2V0IEJpZ0ludGVnZXJcbiAgICBmdW5jdGlvbiBuYmkoKSB7IHJldHVybiBuZXcgQmlnSW50ZWdlcihudWxsKTsgfVxuXG4gICAgLy8gYW06IENvbXB1dGUgd19qICs9ICh4KnRoaXNfaSksIHByb3BhZ2F0ZSBjYXJyaWVzLFxuICAgIC8vIGMgaXMgaW5pdGlhbCBjYXJyeSwgcmV0dXJucyBmaW5hbCBjYXJyeS5cbiAgICAvLyBjIDwgMypkdmFsdWUsIHggPCAyKmR2YWx1ZSwgdGhpc19pIDwgZHZhbHVlXG4gICAgLy8gV2UgbmVlZCB0byBzZWxlY3QgdGhlIGZhc3Rlc3Qgb25lIHRoYXQgd29ya3MgaW4gdGhpcyBlbnZpcm9ubWVudC5cblxuICAgIC8vIGFtMTogdXNlIGEgc2luZ2xlIG11bHQgYW5kIGRpdmlkZSB0byBnZXQgdGhlIGhpZ2ggYml0cyxcbiAgICAvLyBtYXggZGlnaXQgYml0cyBzaG91bGQgYmUgMjYgYmVjYXVzZVxuICAgIC8vIG1heCBpbnRlcm5hbCB2YWx1ZSA9IDIqZHZhbHVlXjItMipkdmFsdWUgKDwgMl41MylcbiAgICBmdW5jdGlvbiBhbTEoaSx4LHcsaixjLG4pIHtcbiAgICAgIHdoaWxlKC0tbiA+PSAwKSB7XG4gICAgICAgIHZhciB2ID0geCp0aGlzW2krK10rd1tqXStjO1xuICAgICAgICBjID0gTWF0aC5mbG9vcih2LzB4NDAwMDAwMCk7XG4gICAgICAgIHdbaisrXSA9IHYmMHgzZmZmZmZmO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIC8vIGFtMiBhdm9pZHMgYSBiaWcgbXVsdC1hbmQtZXh0cmFjdCBjb21wbGV0ZWx5LlxuICAgIC8vIE1heCBkaWdpdCBiaXRzIHNob3VsZCBiZSA8PSAzMCBiZWNhdXNlIHdlIGRvIGJpdHdpc2Ugb3BzXG4gICAgLy8gb24gdmFsdWVzIHVwIHRvIDIqaGR2YWx1ZV4yLWhkdmFsdWUtMSAoPCAyXjMxKVxuICAgIGZ1bmN0aW9uIGFtMihpLHgsdyxqLGMsbikge1xuICAgICAgdmFyIHhsID0geCYweDdmZmYsIHhoID0geD4+MTU7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgbCA9IHRoaXNbaV0mMHg3ZmZmO1xuICAgICAgICB2YXIgaCA9IHRoaXNbaSsrXT4+MTU7XG4gICAgICAgIHZhciBtID0geGgqbCtoKnhsO1xuICAgICAgICBsID0geGwqbCsoKG0mMHg3ZmZmKTw8MTUpK3dbal0rKGMmMHgzZmZmZmZmZik7XG4gICAgICAgIGMgPSAobD4+PjMwKSsobT4+PjE1KSt4aCpoKyhjPj4+MzApO1xuICAgICAgICB3W2orK10gPSBsJjB4M2ZmZmZmZmY7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgLy8gQWx0ZXJuYXRlbHksIHNldCBtYXggZGlnaXQgYml0cyB0byAyOCBzaW5jZSBzb21lXG4gICAgLy8gYnJvd3NlcnMgc2xvdyBkb3duIHdoZW4gZGVhbGluZyB3aXRoIDMyLWJpdCBudW1iZXJzLlxuICAgIGZ1bmN0aW9uIGFtMyhpLHgsdyxqLGMsbikge1xuICAgICAgdmFyIHhsID0geCYweDNmZmYsIHhoID0geD4+MTQ7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgbCA9IHRoaXNbaV0mMHgzZmZmO1xuICAgICAgICB2YXIgaCA9IHRoaXNbaSsrXT4+MTQ7XG4gICAgICAgIHZhciBtID0geGgqbCtoKnhsO1xuICAgICAgICBsID0geGwqbCsoKG0mMHgzZmZmKTw8MTQpK3dbal0rYztcbiAgICAgICAgYyA9IChsPj4yOCkrKG0+PjE0KSt4aCpoO1xuICAgICAgICB3W2orK10gPSBsJjB4ZmZmZmZmZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICB2YXIgaW5Ccm93c2VyID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICBpZihpbkJyb3dzZXIgJiYgal9sbSAmJiAobmF2aWdhdG9yLmFwcE5hbWUgPT0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIikpIHtcbiAgICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFtID0gYW0yO1xuICAgICAgZGJpdHMgPSAzMDtcbiAgICB9XG4gICAgZWxzZSBpZihpbkJyb3dzZXIgJiYgal9sbSAmJiAobmF2aWdhdG9yLmFwcE5hbWUgIT0gXCJOZXRzY2FwZVwiKSkge1xuICAgICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBhbTE7XG4gICAgICBkYml0cyA9IDI2O1xuICAgIH1cbiAgICBlbHNlIHsgLy8gTW96aWxsYS9OZXRzY2FwZSBzZWVtcyB0byBwcmVmZXIgYW0zXG4gICAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbSA9IGFtMztcbiAgICAgIGRiaXRzID0gMjg7XG4gICAgfVxuXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuREIgPSBkYml0cztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ETSA9ICgoMTw8ZGJpdHMpLTEpO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkRWID0gKDE8PGRiaXRzKTtcblxuICAgIHZhciBCSV9GUCA9IDUyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkZWID0gTWF0aC5wb3coMixCSV9GUCk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRjEgPSBCSV9GUC1kYml0cztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5GMiA9IDIqZGJpdHMtQklfRlA7XG5cbiAgICAvLyBEaWdpdCBjb252ZXJzaW9uc1xuICAgIHZhciBCSV9STSA9IFwiMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCI7XG4gICAgdmFyIEJJX1JDID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIHJyLHZ2O1xuICAgIHJyID0gXCIwXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAwOyB2diA8PSA5OyArK3Z2KSBCSV9SQ1tycisrXSA9IHZ2O1xuICAgIHJyID0gXCJhXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAxMDsgdnYgPCAzNjsgKyt2dikgQklfUkNbcnIrK10gPSB2djtcbiAgICByciA9IFwiQVwiLmNoYXJDb2RlQXQoMCk7XG4gICAgZm9yKHZ2ID0gMTA7IHZ2IDwgMzY7ICsrdnYpIEJJX1JDW3JyKytdID0gdnY7XG5cbiAgICBmdW5jdGlvbiBpbnQyY2hhcihuKSB7IHJldHVybiBCSV9STS5jaGFyQXQobik7IH1cbiAgICBmdW5jdGlvbiBpbnRBdChzLGkpIHtcbiAgICAgIHZhciBjID0gQklfUkNbcy5jaGFyQ29kZUF0KGkpXTtcbiAgICAgIHJldHVybiAoYz09bnVsbCk/LTE6YztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb3B5IHRoaXMgdG8gclxuICAgIGZ1bmN0aW9uIGJucENvcHlUbyhyKSB7XG4gICAgICBmb3IodmFyIGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSB0aGlzW2ldO1xuICAgICAgci50ID0gdGhpcy50O1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHNldCBmcm9tIGludGVnZXIgdmFsdWUgeCwgLURWIDw9IHggPCBEVlxuICAgIGZ1bmN0aW9uIGJucEZyb21JbnQoeCkge1xuICAgICAgdGhpcy50ID0gMTtcbiAgICAgIHRoaXMucyA9ICh4PDApPy0xOjA7XG4gICAgICBpZih4ID4gMCkgdGhpc1swXSA9IHg7XG4gICAgICBlbHNlIGlmKHggPCAtMSkgdGhpc1swXSA9IHgrdGhpcy5EVjtcbiAgICAgIGVsc2UgdGhpcy50ID0gMDtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gYmlnaW50IGluaXRpYWxpemVkIHRvIHZhbHVlXG4gICAgZnVuY3Rpb24gbmJ2KGkpIHsgdmFyIHIgPSBuYmkoKTsgci5mcm9tSW50KGkpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgc2V0IGZyb20gc3RyaW5nIGFuZCByYWRpeFxuICAgIGZ1bmN0aW9uIGJucEZyb21TdHJpbmcocyxiKSB7XG4gICAgICB2YXIgaztcbiAgICAgIGlmKGIgPT0gMTYpIGsgPSA0O1xuICAgICAgZWxzZSBpZihiID09IDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihiID09IDI1NikgayA9IDg7IC8vIGJ5dGUgYXJyYXlcbiAgICAgIGVsc2UgaWYoYiA9PSAyKSBrID0gMTtcbiAgICAgIGVsc2UgaWYoYiA9PSAzMikgayA9IDU7XG4gICAgICBlbHNlIGlmKGIgPT0gNCkgayA9IDI7XG4gICAgICBlbHNlIHsgdGhpcy5mcm9tUmFkaXgocyxiKTsgcmV0dXJuOyB9XG4gICAgICB0aGlzLnQgPSAwO1xuICAgICAgdGhpcy5zID0gMDtcbiAgICAgIHZhciBpID0gcy5sZW5ndGgsIG1pID0gZmFsc2UsIHNoID0gMDtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSB7XG4gICAgICAgIHZhciB4ID0gKGs9PTgpP3NbaV0mMHhmZjppbnRBdChzLGkpO1xuICAgICAgICBpZih4IDwgMCkge1xuICAgICAgICAgIGlmKHMuY2hhckF0KGkpID09IFwiLVwiKSBtaSA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbWkgPSBmYWxzZTtcbiAgICAgICAgaWYoc2ggPT0gMClcbiAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9IHg7XG4gICAgICAgIGVsc2UgaWYoc2grayA+IHRoaXMuREIpIHtcbiAgICAgICAgICB0aGlzW3RoaXMudC0xXSB8PSAoeCYoKDE8PCh0aGlzLkRCLXNoKSktMSkpPDxzaDtcbiAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9ICh4Pj4odGhpcy5EQi1zaCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzW3RoaXMudC0xXSB8PSB4PDxzaDtcbiAgICAgICAgc2ggKz0gaztcbiAgICAgICAgaWYoc2ggPj0gdGhpcy5EQikgc2ggLT0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGsgPT0gOCAmJiAoc1swXSYweDgwKSAhPSAwKSB7XG4gICAgICAgIHRoaXMucyA9IC0xO1xuICAgICAgICBpZihzaCA+IDApIHRoaXNbdGhpcy50LTFdIHw9ICgoMTw8KHRoaXMuREItc2gpKS0xKTw8c2g7XG4gICAgICB9XG4gICAgICB0aGlzLmNsYW1wKCk7XG4gICAgICBpZihtaSkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMsdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY2xhbXAgb2ZmIGV4Y2VzcyBoaWdoIHdvcmRzXG4gICAgZnVuY3Rpb24gYm5wQ2xhbXAoKSB7XG4gICAgICB2YXIgYyA9IHRoaXMucyZ0aGlzLkRNO1xuICAgICAgd2hpbGUodGhpcy50ID4gMCAmJiB0aGlzW3RoaXMudC0xXSA9PSBjKSAtLXRoaXMudDtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIGluIGdpdmVuIHJhZGl4XG4gICAgZnVuY3Rpb24gYm5Ub1N0cmluZyhiKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gXCItXCIrdGhpcy5uZWdhdGUoKS50b1N0cmluZyhiKTtcbiAgICAgIHZhciBrO1xuICAgICAgaWYoYiA9PSAxNikgayA9IDQ7XG4gICAgICBlbHNlIGlmKGIgPT0gOCkgayA9IDM7XG4gICAgICBlbHNlIGlmKGIgPT0gMikgayA9IDE7XG4gICAgICBlbHNlIGlmKGIgPT0gMzIpIGsgPSA1O1xuICAgICAgZWxzZSBpZihiID09IDQpIGsgPSAyO1xuICAgICAgZWxzZSByZXR1cm4gdGhpcy50b1JhZGl4KGIpO1xuICAgICAgdmFyIGttID0gKDE8PGspLTEsIGQsIG0gPSBmYWxzZSwgciA9IFwiXCIsIGkgPSB0aGlzLnQ7XG4gICAgICB2YXIgcCA9IHRoaXMuREItKGkqdGhpcy5EQiklaztcbiAgICAgIGlmKGktLSA+IDApIHtcbiAgICAgICAgaWYocCA8IHRoaXMuREIgJiYgKGQgPSB0aGlzW2ldPj5wKSA+IDApIHsgbSA9IHRydWU7IHIgPSBpbnQyY2hhcihkKTsgfVxuICAgICAgICB3aGlsZShpID49IDApIHtcbiAgICAgICAgICBpZihwIDwgaykge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldJigoMTw8cCktMSkpPDwoay1wKTtcbiAgICAgICAgICAgIGQgfD0gdGhpc1stLWldPj4ocCs9dGhpcy5EQi1rKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0+PihwLT1rKSkma207XG4gICAgICAgICAgICBpZihwIDw9IDApIHsgcCArPSB0aGlzLkRCOyAtLWk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZCA+IDApIG0gPSB0cnVlO1xuICAgICAgICAgIGlmKG0pIHIgKz0gaW50MmNoYXIoZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBtP3I6XCIwXCI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgLXRoaXNcbiAgICBmdW5jdGlvbiBibk5lZ2F0ZSgpIHsgdmFyIHIgPSBuYmkoKTsgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB8dGhpc3xcbiAgICBmdW5jdGlvbiBibkFicygpIHsgcmV0dXJuICh0aGlzLnM8MCk/dGhpcy5uZWdhdGUoKTp0aGlzOyB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gKyBpZiB0aGlzID4gYSwgLSBpZiB0aGlzIDwgYSwgMCBpZiBlcXVhbFxuICAgIGZ1bmN0aW9uIGJuQ29tcGFyZVRvKGEpIHtcbiAgICAgIHZhciByID0gdGhpcy5zLWEucztcbiAgICAgIGlmKHIgIT0gMCkgcmV0dXJuIHI7XG4gICAgICB2YXIgaSA9IHRoaXMudDtcbiAgICAgIHIgPSBpLWEudDtcbiAgICAgIGlmKHIgIT0gMCkgcmV0dXJuICh0aGlzLnM8MCk/LXI6cjtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSBpZigocj10aGlzW2ldLWFbaV0pICE9IDApIHJldHVybiByO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBiaXQgbGVuZ3RoIG9mIHRoZSBpbnRlZ2VyIHhcbiAgICBmdW5jdGlvbiBuYml0cyh4KSB7XG4gICAgICB2YXIgciA9IDEsIHQ7XG4gICAgICBpZigodD14Pj4+MTYpICE9IDApIHsgeCA9IHQ7IHIgKz0gMTY7IH1cbiAgICAgIGlmKCh0PXg+PjgpICE9IDApIHsgeCA9IHQ7IHIgKz0gODsgfVxuICAgICAgaWYoKHQ9eD4+NCkgIT0gMCkgeyB4ID0gdDsgciArPSA0OyB9XG4gICAgICBpZigodD14Pj4yKSAhPSAwKSB7IHggPSB0OyByICs9IDI7IH1cbiAgICAgIGlmKCh0PXg+PjEpICE9IDApIHsgeCA9IHQ7IHIgKz0gMTsgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHRoZSBudW1iZXIgb2YgYml0cyBpbiBcInRoaXNcIlxuICAgIGZ1bmN0aW9uIGJuQml0TGVuZ3RoKCkge1xuICAgICAgaWYodGhpcy50IDw9IDApIHJldHVybiAwO1xuICAgICAgcmV0dXJuIHRoaXMuREIqKHRoaXMudC0xKStuYml0cyh0aGlzW3RoaXMudC0xXV4odGhpcy5zJnRoaXMuRE0pKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA8PCBuKkRCXG4gICAgZnVuY3Rpb24gYm5wRExTaGlmdFRvKG4scikge1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IoaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkgcltpK25dID0gdGhpc1tpXTtcbiAgICAgIGZvcihpID0gbi0xOyBpID49IDA7IC0taSkgcltpXSA9IDA7XG4gICAgICByLnQgPSB0aGlzLnQrbjtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA+PiBuKkRCXG4gICAgZnVuY3Rpb24gYm5wRFJTaGlmdFRvKG4scikge1xuICAgICAgZm9yKHZhciBpID0gbjsgaSA8IHRoaXMudDsgKytpKSByW2ktbl0gPSB0aGlzW2ldO1xuICAgICAgci50ID0gTWF0aC5tYXgodGhpcy50LW4sMCk7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPDwgblxuICAgIGZ1bmN0aW9uIGJucExTaGlmdFRvKG4scikge1xuICAgICAgdmFyIGJzID0gbiV0aGlzLkRCO1xuICAgICAgdmFyIGNicyA9IHRoaXMuREItYnM7XG4gICAgICB2YXIgYm0gPSAoMTw8Y2JzKS0xO1xuICAgICAgdmFyIGRzID0gTWF0aC5mbG9vcihuL3RoaXMuREIpLCBjID0gKHRoaXMuczw8YnMpJnRoaXMuRE0sIGk7XG4gICAgICBmb3IoaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkge1xuICAgICAgICByW2krZHMrMV0gPSAodGhpc1tpXT4+Y2JzKXxjO1xuICAgICAgICBjID0gKHRoaXNbaV0mYm0pPDxicztcbiAgICAgIH1cbiAgICAgIGZvcihpID0gZHMtMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSAwO1xuICAgICAgcltkc10gPSBjO1xuICAgICAgci50ID0gdGhpcy50K2RzKzE7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPj4gblxuICAgIGZ1bmN0aW9uIGJucFJTaGlmdFRvKG4scikge1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgICAgdmFyIGRzID0gTWF0aC5mbG9vcihuL3RoaXMuREIpO1xuICAgICAgaWYoZHMgPj0gdGhpcy50KSB7IHIudCA9IDA7IHJldHVybjsgfVxuICAgICAgdmFyIGJzID0gbiV0aGlzLkRCO1xuICAgICAgdmFyIGNicyA9IHRoaXMuREItYnM7XG4gICAgICB2YXIgYm0gPSAoMTw8YnMpLTE7XG4gICAgICByWzBdID0gdGhpc1tkc10+PmJzO1xuICAgICAgZm9yKHZhciBpID0gZHMrMTsgaSA8IHRoaXMudDsgKytpKSB7XG4gICAgICAgIHJbaS1kcy0xXSB8PSAodGhpc1tpXSZibSk8PGNicztcbiAgICAgICAgcltpLWRzXSA9IHRoaXNbaV0+PmJzO1xuICAgICAgfVxuICAgICAgaWYoYnMgPiAwKSByW3RoaXMudC1kcy0xXSB8PSAodGhpcy5zJmJtKTw8Y2JzO1xuICAgICAgci50ID0gdGhpcy50LWRzO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIC0gYVxuICAgIGZ1bmN0aW9uIGJucFN1YlRvKGEscikge1xuICAgICAgdmFyIGkgPSAwLCBjID0gMCwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgd2hpbGUoaSA8IG0pIHtcbiAgICAgICAgYyArPSB0aGlzW2ldLWFbaV07XG4gICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBjIC09IGEucztcbiAgICAgICAgd2hpbGUoaSA8IHRoaXMudCkge1xuICAgICAgICAgIGMgKz0gdGhpc1tpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgICAgd2hpbGUoaSA8IGEudCkge1xuICAgICAgICAgIGMgLT0gYVtpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjIC09IGEucztcbiAgICAgIH1cbiAgICAgIHIucyA9IChjPDApPy0xOjA7XG4gICAgICBpZihjIDwgLTEpIHJbaSsrXSA9IHRoaXMuRFYrYztcbiAgICAgIGVsc2UgaWYoYyA+IDApIHJbaSsrXSA9IGM7XG4gICAgICByLnQgPSBpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzICogYSwgciAhPSB0aGlzLGEgKEhBQyAxNC4xMilcbiAgICAvLyBcInRoaXNcIiBzaG91bGQgYmUgdGhlIGxhcmdlciBvbmUgaWYgYXBwcm9wcmlhdGUuXG4gICAgZnVuY3Rpb24gYm5wTXVsdGlwbHlUbyhhLHIpIHtcbiAgICAgIHZhciB4ID0gdGhpcy5hYnMoKSwgeSA9IGEuYWJzKCk7XG4gICAgICB2YXIgaSA9IHgudDtcbiAgICAgIHIudCA9IGkreS50O1xuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgeS50OyArK2kpIHJbaSt4LnRdID0geC5hbSgwLHlbaV0scixpLDAseC50KTtcbiAgICAgIHIucyA9IDA7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICBpZih0aGlzLnMgIT0gYS5zKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocixyKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpc14yLCByICE9IHRoaXMgKEhBQyAxNC4xNilcbiAgICBmdW5jdGlvbiBibnBTcXVhcmVUbyhyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMuYWJzKCk7XG4gICAgICB2YXIgaSA9IHIudCA9IDIqeC50O1xuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgeC50LTE7ICsraSkge1xuICAgICAgICB2YXIgYyA9IHguYW0oaSx4W2ldLHIsMippLDAsMSk7XG4gICAgICAgIGlmKChyW2kreC50XSs9eC5hbShpKzEsMip4W2ldLHIsMippKzEsYyx4LnQtaS0xKSkgPj0geC5EVikge1xuICAgICAgICAgIHJbaSt4LnRdIC09IHguRFY7XG4gICAgICAgICAgcltpK3gudCsxXSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHIudCA+IDApIHJbci50LTFdICs9IHguYW0oaSx4W2ldLHIsMippLDAsMSk7XG4gICAgICByLnMgPSAwO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGRpdmlkZSB0aGlzIGJ5IG0sIHF1b3RpZW50IGFuZCByZW1haW5kZXIgdG8gcSwgciAoSEFDIDE0LjIwKVxuICAgIC8vIHIgIT0gcSwgdGhpcyAhPSBtLiAgcSBvciByIG1heSBiZSBudWxsLlxuICAgIGZ1bmN0aW9uIGJucERpdlJlbVRvKG0scSxyKSB7XG4gICAgICB2YXIgcG0gPSBtLmFicygpO1xuICAgICAgaWYocG0udCA8PSAwKSByZXR1cm47XG4gICAgICB2YXIgcHQgPSB0aGlzLmFicygpO1xuICAgICAgaWYocHQudCA8IHBtLnQpIHtcbiAgICAgICAgaWYocSAhPSBudWxsKSBxLmZyb21JbnQoMCk7XG4gICAgICAgIGlmKHIgIT0gbnVsbCkgdGhpcy5jb3B5VG8ocik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmKHIgPT0gbnVsbCkgciA9IG5iaSgpO1xuICAgICAgdmFyIHkgPSBuYmkoKSwgdHMgPSB0aGlzLnMsIG1zID0gbS5zO1xuICAgICAgdmFyIG5zaCA9IHRoaXMuREItbmJpdHMocG1bcG0udC0xXSk7ICAgLy8gbm9ybWFsaXplIG1vZHVsdXNcbiAgICAgIGlmKG5zaCA+IDApIHsgcG0ubFNoaWZ0VG8obnNoLHkpOyBwdC5sU2hpZnRUbyhuc2gscik7IH1cbiAgICAgIGVsc2UgeyBwbS5jb3B5VG8oeSk7IHB0LmNvcHlUbyhyKTsgfVxuICAgICAgdmFyIHlzID0geS50O1xuICAgICAgdmFyIHkwID0geVt5cy0xXTtcbiAgICAgIGlmKHkwID09IDApIHJldHVybjtcbiAgICAgIHZhciB5dCA9IHkwKigxPDx0aGlzLkYxKSsoKHlzPjEpP3lbeXMtMl0+PnRoaXMuRjI6MCk7XG4gICAgICB2YXIgZDEgPSB0aGlzLkZWL3l0LCBkMiA9ICgxPDx0aGlzLkYxKS95dCwgZSA9IDE8PHRoaXMuRjI7XG4gICAgICB2YXIgaSA9IHIudCwgaiA9IGkteXMsIHQgPSAocT09bnVsbCk/bmJpKCk6cTtcbiAgICAgIHkuZGxTaGlmdFRvKGosdCk7XG4gICAgICBpZihyLmNvbXBhcmVUbyh0KSA+PSAwKSB7XG4gICAgICAgIHJbci50KytdID0gMTtcbiAgICAgICAgci5zdWJUbyh0LHIpO1xuICAgICAgfVxuICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKHlzLHQpO1xuICAgICAgdC5zdWJUbyh5LHkpOyAgLy8gXCJuZWdhdGl2ZVwiIHkgc28gd2UgY2FuIHJlcGxhY2Ugc3ViIHdpdGggYW0gbGF0ZXJcbiAgICAgIHdoaWxlKHkudCA8IHlzKSB5W3kudCsrXSA9IDA7XG4gICAgICB3aGlsZSgtLWogPj0gMCkge1xuICAgICAgICAvLyBFc3RpbWF0ZSBxdW90aWVudCBkaWdpdFxuICAgICAgICB2YXIgcWQgPSAoclstLWldPT15MCk/dGhpcy5ETTpNYXRoLmZsb29yKHJbaV0qZDErKHJbaS0xXStlKSpkMik7XG4gICAgICAgIGlmKChyW2ldKz15LmFtKDAscWQscixqLDAseXMpKSA8IHFkKSB7ICAgLy8gVHJ5IGl0IG91dFxuICAgICAgICAgIHkuZGxTaGlmdFRvKGosdCk7XG4gICAgICAgICAgci5zdWJUbyh0LHIpO1xuICAgICAgICAgIHdoaWxlKHJbaV0gPCAtLXFkKSByLnN1YlRvKHQscik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHEgIT0gbnVsbCkge1xuICAgICAgICByLmRyU2hpZnRUbyh5cyxxKTtcbiAgICAgICAgaWYodHMgIT0gbXMpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhxLHEpO1xuICAgICAgfVxuICAgICAgci50ID0geXM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICBpZihuc2ggPiAwKSByLnJTaGlmdFRvKG5zaCxyKTsgLy8gRGVub3JtYWxpemUgcmVtYWluZGVyXG4gICAgICBpZih0cyA8IDApIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhyLHIpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgbW9kIGFcbiAgICBmdW5jdGlvbiBibk1vZChhKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgdGhpcy5hYnMoKS5kaXZSZW1UbyhhLG51bGwscik7XG4gICAgICBpZih0aGlzLnMgPCAwICYmIHIuY29tcGFyZVRvKEJpZ0ludGVnZXIuWkVSTykgPiAwKSBhLnN1YlRvKHIscik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyBNb2R1bGFyIHJlZHVjdGlvbiB1c2luZyBcImNsYXNzaWNcIiBhbGdvcml0aG1cbiAgICBmdW5jdGlvbiBDbGFzc2ljKG0pIHsgdGhpcy5tID0gbTsgfVxuICAgIGZ1bmN0aW9uIGNDb252ZXJ0KHgpIHtcbiAgICAgIGlmKHgucyA8IDAgfHwgeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSByZXR1cm4geC5tb2QodGhpcy5tKTtcbiAgICAgIGVsc2UgcmV0dXJuIHg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNSZXZlcnQoeCkgeyByZXR1cm4geDsgfVxuICAgIGZ1bmN0aW9uIGNSZWR1Y2UoeCkgeyB4LmRpdlJlbVRvKHRoaXMubSxudWxsLHgpOyB9XG4gICAgZnVuY3Rpb24gY011bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuICAgIGZ1bmN0aW9uIGNTcXJUbyh4LHIpIHsgeC5zcXVhcmVUbyhyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIENsYXNzaWMucHJvdG90eXBlLmNvbnZlcnQgPSBjQ29udmVydDtcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5yZXZlcnQgPSBjUmV2ZXJ0O1xuICAgIENsYXNzaWMucHJvdG90eXBlLnJlZHVjZSA9IGNSZWR1Y2U7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUubXVsVG8gPSBjTXVsVG87XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUuc3FyVG8gPSBjU3FyVG87XG5cbiAgICAvLyAocHJvdGVjdGVkKSByZXR1cm4gXCItMS90aGlzICUgMl5EQlwiOyB1c2VmdWwgZm9yIE1vbnQuIHJlZHVjdGlvblxuICAgIC8vIGp1c3RpZmljYXRpb246XG4gICAgLy8gICAgICAgICB4eSA9PSAxIChtb2QgbSlcbiAgICAvLyAgICAgICAgIHh5ID0gIDEra21cbiAgICAvLyAgIHh5KDIteHkpID0gKDEra20pKDEta20pXG4gICAgLy8geFt5KDIteHkpXSA9IDEta14ybV4yXG4gICAgLy8geFt5KDIteHkpXSA9PSAxIChtb2QgbV4yKVxuICAgIC8vIGlmIHkgaXMgMS94IG1vZCBtLCB0aGVuIHkoMi14eSkgaXMgMS94IG1vZCBtXjJcbiAgICAvLyBzaG91bGQgcmVkdWNlIHggYW5kIHkoMi14eSkgYnkgbV4yIGF0IGVhY2ggc3RlcCB0byBrZWVwIHNpemUgYm91bmRlZC5cbiAgICAvLyBKUyBtdWx0aXBseSBcIm92ZXJmbG93c1wiIGRpZmZlcmVudGx5IGZyb20gQy9DKyssIHNvIGNhcmUgaXMgbmVlZGVkIGhlcmUuXG4gICAgZnVuY3Rpb24gYm5wSW52RGlnaXQoKSB7XG4gICAgICBpZih0aGlzLnQgPCAxKSByZXR1cm4gMDtcbiAgICAgIHZhciB4ID0gdGhpc1swXTtcbiAgICAgIGlmKCh4JjEpID09IDApIHJldHVybiAwO1xuICAgICAgdmFyIHkgPSB4JjM7ICAgICAgIC8vIHkgPT0gMS94IG1vZCAyXjJcbiAgICAgIHkgPSAoeSooMi0oeCYweGYpKnkpKSYweGY7IC8vIHkgPT0gMS94IG1vZCAyXjRcbiAgICAgIHkgPSAoeSooMi0oeCYweGZmKSp5KSkmMHhmZjsgICAvLyB5ID09IDEveCBtb2QgMl44XG4gICAgICB5ID0gKHkqKDItKCgoeCYweGZmZmYpKnkpJjB4ZmZmZikpKSYweGZmZmY7ICAgIC8vIHkgPT0gMS94IG1vZCAyXjE2XG4gICAgICAvLyBsYXN0IHN0ZXAgLSBjYWxjdWxhdGUgaW52ZXJzZSBtb2QgRFYgZGlyZWN0bHk7XG4gICAgICAvLyBhc3N1bWVzIDE2IDwgREIgPD0gMzIgYW5kIGFzc3VtZXMgYWJpbGl0eSB0byBoYW5kbGUgNDgtYml0IGludHNcbiAgICAgIHkgPSAoeSooMi14KnkldGhpcy5EVikpJXRoaXMuRFY7ICAgICAgIC8vIHkgPT0gMS94IG1vZCAyXmRiaXRzXG4gICAgICAvLyB3ZSByZWFsbHkgd2FudCB0aGUgbmVnYXRpdmUgaW52ZXJzZSwgYW5kIC1EViA8IHkgPCBEVlxuICAgICAgcmV0dXJuICh5PjApP3RoaXMuRFYteToteTtcbiAgICB9XG5cbiAgICAvLyBNb250Z29tZXJ5IHJlZHVjdGlvblxuICAgIGZ1bmN0aW9uIE1vbnRnb21lcnkobSkge1xuICAgICAgdGhpcy5tID0gbTtcbiAgICAgIHRoaXMubXAgPSBtLmludkRpZ2l0KCk7XG4gICAgICB0aGlzLm1wbCA9IHRoaXMubXAmMHg3ZmZmO1xuICAgICAgdGhpcy5tcGggPSB0aGlzLm1wPj4xNTtcbiAgICAgIHRoaXMudW0gPSAoMTw8KG0uREItMTUpKS0xO1xuICAgICAgdGhpcy5tdDIgPSAyKm0udDtcbiAgICB9XG5cbiAgICAvLyB4UiBtb2QgbVxuICAgIGZ1bmN0aW9uIG1vbnRDb252ZXJ0KHgpIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICB4LmFicygpLmRsU2hpZnRUbyh0aGlzLm0udCxyKTtcbiAgICAgIHIuZGl2UmVtVG8odGhpcy5tLG51bGwscik7XG4gICAgICBpZih4LnMgPCAwICYmIHIuY29tcGFyZVRvKEJpZ0ludGVnZXIuWkVSTykgPiAwKSB0aGlzLm0uc3ViVG8ocixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIHgvUiBtb2QgbVxuICAgIGZ1bmN0aW9uIG1vbnRSZXZlcnQoeCkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIHguY29weVRvKHIpO1xuICAgICAgdGhpcy5yZWR1Y2Uocik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyB4ID0geC9SIG1vZCBtIChIQUMgMTQuMzIpXG4gICAgZnVuY3Rpb24gbW9udFJlZHVjZSh4KSB7XG4gICAgICB3aGlsZSh4LnQgPD0gdGhpcy5tdDIpIC8vIHBhZCB4IHNvIGFtIGhhcyBlbm91Z2ggcm9vbSBsYXRlclxuICAgICAgICB4W3gudCsrXSA9IDA7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5tLnQ7ICsraSkge1xuICAgICAgICAvLyBmYXN0ZXIgd2F5IG9mIGNhbGN1bGF0aW5nIHUwID0geFtpXSptcCBtb2QgRFZcbiAgICAgICAgdmFyIGogPSB4W2ldJjB4N2ZmZjtcbiAgICAgICAgdmFyIHUwID0gKGoqdGhpcy5tcGwrKCgoaip0aGlzLm1waCsoeFtpXT4+MTUpKnRoaXMubXBsKSZ0aGlzLnVtKTw8MTUpKSZ4LkRNO1xuICAgICAgICAvLyB1c2UgYW0gdG8gY29tYmluZSB0aGUgbXVsdGlwbHktc2hpZnQtYWRkIGludG8gb25lIGNhbGxcbiAgICAgICAgaiA9IGkrdGhpcy5tLnQ7XG4gICAgICAgIHhbal0gKz0gdGhpcy5tLmFtKDAsdTAseCxpLDAsdGhpcy5tLnQpO1xuICAgICAgICAvLyBwcm9wYWdhdGUgY2FycnlcbiAgICAgICAgd2hpbGUoeFtqXSA+PSB4LkRWKSB7IHhbal0gLT0geC5EVjsgeFsrK2pdKys7IH1cbiAgICAgIH1cbiAgICAgIHguY2xhbXAoKTtcbiAgICAgIHguZHJTaGlmdFRvKHRoaXMubS50LHgpO1xuICAgICAgaWYoeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSB4LnN1YlRvKHRoaXMubSx4KTtcbiAgICB9XG5cbiAgICAvLyByID0gXCJ4XjIvUiBtb2QgbVwiOyB4ICE9IHJcbiAgICBmdW5jdGlvbiBtb250U3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICAvLyByID0gXCJ4eS9SIG1vZCBtXCI7IHgseSAhPSByXG4gICAgZnVuY3Rpb24gbW9udE11bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUuY29udmVydCA9IG1vbnRDb252ZXJ0O1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLnJldmVydCA9IG1vbnRSZXZlcnQ7XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUucmVkdWNlID0gbW9udFJlZHVjZTtcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5tdWxUbyA9IG1vbnRNdWxUbztcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5zcXJUbyA9IG1vbnRTcXJUbztcblxuICAgIC8vIChwcm90ZWN0ZWQpIHRydWUgaWZmIHRoaXMgaXMgZXZlblxuICAgIGZ1bmN0aW9uIGJucElzRXZlbigpIHsgcmV0dXJuICgodGhpcy50PjApPyh0aGlzWzBdJjEpOnRoaXMucykgPT0gMDsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpc15lLCBlIDwgMl4zMiwgZG9pbmcgc3FyIGFuZCBtdWwgd2l0aCBcInJcIiAoSEFDIDE0Ljc5KVxuICAgIGZ1bmN0aW9uIGJucEV4cChlLHopIHtcbiAgICAgIGlmKGUgPiAweGZmZmZmZmZmIHx8IGUgPCAxKSByZXR1cm4gQmlnSW50ZWdlci5PTkU7XG4gICAgICB2YXIgciA9IG5iaSgpLCByMiA9IG5iaSgpLCBnID0gei5jb252ZXJ0KHRoaXMpLCBpID0gbmJpdHMoZSktMTtcbiAgICAgIGcuY29weVRvKHIpO1xuICAgICAgd2hpbGUoLS1pID49IDApIHtcbiAgICAgICAgei5zcXJUbyhyLHIyKTtcbiAgICAgICAgaWYoKGUmKDE8PGkpKSA+IDApIHoubXVsVG8ocjIsZyxyKTtcbiAgICAgICAgZWxzZSB7IHZhciB0ID0gcjsgciA9IHIyOyByMiA9IHQ7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB6LnJldmVydChyKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmUgJSBtLCAwIDw9IGUgPCAyXjMyXG4gICAgZnVuY3Rpb24gYm5Nb2RQb3dJbnQoZSxtKSB7XG4gICAgICB2YXIgejtcbiAgICAgIGlmKGUgPCAyNTYgfHwgbS5pc0V2ZW4oKSkgeiA9IG5ldyBDbGFzc2ljKG0pOyBlbHNlIHogPSBuZXcgTW9udGdvbWVyeShtKTtcbiAgICAgIHJldHVybiB0aGlzLmV4cChlLHopO1xuICAgIH1cblxuICAgIC8vIHByb3RlY3RlZFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvcHlUbyA9IGJucENvcHlUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tSW50ID0gYm5wRnJvbUludDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tU3RyaW5nID0gYm5wRnJvbVN0cmluZztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbGFtcCA9IGJucENsYW1wO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRsU2hpZnRUbyA9IGJucERMU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kclNoaWZ0VG8gPSBibnBEUlNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubFNoaWZ0VG8gPSBibnBMU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yU2hpZnRUbyA9IGJucFJTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YlRvID0gYm5wU3ViVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlUbyA9IGJucE11bHRpcGx5VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlVG8gPSBibnBTcXVhcmVUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZSZW1UbyA9IGJucERpdlJlbVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmludkRpZ2l0ID0gYm5wSW52RGlnaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNFdmVuID0gYm5wSXNFdmVuO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmV4cCA9IGJucEV4cDtcblxuICAgIC8vIHB1YmxpY1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nID0gYm5Ub1N0cmluZztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZWdhdGUgPSBibk5lZ2F0ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hYnMgPSBibkFicztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlVG8gPSBibkNvbXBhcmVUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGggPSBibkJpdExlbmd0aDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBibk1vZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3dJbnQgPSBibk1vZFBvd0ludDtcblxuICAgIC8vIFwiY29uc3RhbnRzXCJcbiAgICBCaWdJbnRlZ2VyLlpFUk8gPSBuYnYoMCk7XG4gICAgQmlnSW50ZWdlci5PTkUgPSBuYnYoMSk7XG5cbiAgICAvLyBDb3B5cmlnaHQgKGMpIDIwMDUtMjAwOSAgVG9tIFd1XG4gICAgLy8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAvLyBTZWUgXCJMSUNFTlNFXCIgZm9yIGRldGFpbHMuXG5cbiAgICAvLyBFeHRlbmRlZCBKYXZhU2NyaXB0IEJOIGZ1bmN0aW9ucywgcmVxdWlyZWQgZm9yIFJTQSBwcml2YXRlIG9wcy5cblxuICAgIC8vIFZlcnNpb24gMS4xOiBuZXcgQmlnSW50ZWdlcihcIjBcIiwgMTApIHJldHVybnMgXCJwcm9wZXJcIiB6ZXJvXG4gICAgLy8gVmVyc2lvbiAxLjI6IHNxdWFyZSgpIEFQSSwgaXNQcm9iYWJsZVByaW1lIGZpeFxuXG4gICAgLy8gKHB1YmxpYylcbiAgICBmdW5jdGlvbiBibkNsb25lKCkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmNvcHlUbyhyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBpbnRlZ2VyXG4gICAgZnVuY3Rpb24gYm5JbnRWYWx1ZSgpIHtcbiAgICAgIGlmKHRoaXMucyA8IDApIHtcbiAgICAgICAgaWYodGhpcy50ID09IDEpIHJldHVybiB0aGlzWzBdLXRoaXMuRFY7XG4gICAgICAgIGVsc2UgaWYodGhpcy50ID09IDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodGhpcy50ID09IDEpIHJldHVybiB0aGlzWzBdO1xuICAgICAgZWxzZSBpZih0aGlzLnQgPT0gMCkgcmV0dXJuIDA7XG4gICAgICAvLyBhc3N1bWVzIDE2IDwgREIgPCAzMlxuICAgICAgcmV0dXJuICgodGhpc1sxXSYoKDE8PCgzMi10aGlzLkRCKSktMSkpPDx0aGlzLkRCKXx0aGlzWzBdO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBieXRlXG4gICAgZnVuY3Rpb24gYm5CeXRlVmFsdWUoKSB7IHJldHVybiAodGhpcy50PT0wKT90aGlzLnM6KHRoaXNbMF08PDI0KT4+MjQ7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBzaG9ydCAoYXNzdW1lcyBEQj49MTYpXG4gICAgZnVuY3Rpb24gYm5TaG9ydFZhbHVlKCkgeyByZXR1cm4gKHRoaXMudD09MCk/dGhpcy5zOih0aGlzWzBdPDwxNik+PjE2OyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByZXR1cm4geCBzLnQuIHJeeCA8IERWXG4gICAgZnVuY3Rpb24gYm5wQ2h1bmtTaXplKHIpIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5MTjIqdGhpcy5EQi9NYXRoLmxvZyhyKSk7IH1cblxuICAgIC8vIChwdWJsaWMpIDAgaWYgdGhpcyA9PSAwLCAxIGlmIHRoaXMgPiAwXG4gICAgZnVuY3Rpb24gYm5TaWdOdW0oKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gLTE7XG4gICAgICBlbHNlIGlmKHRoaXMudCA8PSAwIHx8ICh0aGlzLnQgPT0gMSAmJiB0aGlzWzBdIDw9IDApKSByZXR1cm4gMDtcbiAgICAgIGVsc2UgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY29udmVydCB0byByYWRpeCBzdHJpbmdcbiAgICBmdW5jdGlvbiBibnBUb1JhZGl4KGIpIHtcbiAgICAgIGlmKGIgPT0gbnVsbCkgYiA9IDEwO1xuICAgICAgaWYodGhpcy5zaWdudW0oKSA9PSAwIHx8IGIgPCAyIHx8IGIgPiAzNikgcmV0dXJuIFwiMFwiO1xuICAgICAgdmFyIGNzID0gdGhpcy5jaHVua1NpemUoYik7XG4gICAgICB2YXIgYSA9IE1hdGgucG93KGIsY3MpO1xuICAgICAgdmFyIGQgPSBuYnYoYSksIHkgPSBuYmkoKSwgeiA9IG5iaSgpLCByID0gXCJcIjtcbiAgICAgIHRoaXMuZGl2UmVtVG8oZCx5LHopO1xuICAgICAgd2hpbGUoeS5zaWdudW0oKSA+IDApIHtcbiAgICAgICAgciA9IChhK3ouaW50VmFsdWUoKSkudG9TdHJpbmcoYikuc3Vic3RyKDEpICsgcjtcbiAgICAgICAgeS5kaXZSZW1UbyhkLHkseik7XG4gICAgICB9XG4gICAgICByZXR1cm4gei5pbnRWYWx1ZSgpLnRvU3RyaW5nKGIpICsgcjtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb252ZXJ0IGZyb20gcmFkaXggc3RyaW5nXG4gICAgZnVuY3Rpb24gYm5wRnJvbVJhZGl4KHMsYikge1xuICAgICAgdGhpcy5mcm9tSW50KDApO1xuICAgICAgaWYoYiA9PSBudWxsKSBiID0gMTA7XG4gICAgICB2YXIgY3MgPSB0aGlzLmNodW5rU2l6ZShiKTtcbiAgICAgIHZhciBkID0gTWF0aC5wb3coYixjcyksIG1pID0gZmFsc2UsIGogPSAwLCB3ID0gMDtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciB4ID0gaW50QXQocyxpKTtcbiAgICAgICAgaWYoeCA8IDApIHtcbiAgICAgICAgICBpZihzLmNoYXJBdChpKSA9PSBcIi1cIiAmJiB0aGlzLnNpZ251bSgpID09IDApIG1pID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB3ID0gYip3K3g7XG4gICAgICAgIGlmKCsraiA+PSBjcykge1xuICAgICAgICAgIHRoaXMuZE11bHRpcGx5KGQpO1xuICAgICAgICAgIHRoaXMuZEFkZE9mZnNldCh3LDApO1xuICAgICAgICAgIGogPSAwO1xuICAgICAgICAgIHcgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihqID4gMCkge1xuICAgICAgICB0aGlzLmRNdWx0aXBseShNYXRoLnBvdyhiLGopKTtcbiAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KHcsMCk7XG4gICAgICB9XG4gICAgICBpZihtaSkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMsdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgYWx0ZXJuYXRlIGNvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gYm5wRnJvbU51bWJlcihhLGIsYykge1xuICAgICAgaWYoXCJudW1iZXJcIiA9PSB0eXBlb2YgYikge1xuICAgICAgICAvLyBuZXcgQmlnSW50ZWdlcihpbnQsaW50LFJORylcbiAgICAgICAgaWYoYSA8IDIpIHRoaXMuZnJvbUludCgxKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5mcm9tTnVtYmVyKGEsYyk7XG4gICAgICAgICAgaWYoIXRoaXMudGVzdEJpdChhLTEpKSAgICAvLyBmb3JjZSBNU0Igc2V0XG4gICAgICAgICAgICB0aGlzLmJpdHdpc2VUbyhCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQoYS0xKSxvcF9vcix0aGlzKTtcbiAgICAgICAgICBpZih0aGlzLmlzRXZlbigpKSB0aGlzLmRBZGRPZmZzZXQoMSwwKTsgLy8gZm9yY2Ugb2RkXG4gICAgICAgICAgd2hpbGUoIXRoaXMuaXNQcm9iYWJsZVByaW1lKGIpKSB7XG4gICAgICAgICAgICB0aGlzLmRBZGRPZmZzZXQoMiwwKTtcbiAgICAgICAgICAgIGlmKHRoaXMuYml0TGVuZ3RoKCkgPiBhKSB0aGlzLnN1YlRvKEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChhLTEpLHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIG5ldyBCaWdJbnRlZ2VyKGludCxSTkcpXG4gICAgICAgIHZhciB4ID0gbmV3IEFycmF5KCksIHQgPSBhJjc7XG4gICAgICAgIHgubGVuZ3RoID0gKGE+PjMpKzE7XG4gICAgICAgIGIubmV4dEJ5dGVzKHgpO1xuICAgICAgICBpZih0ID4gMCkgeFswXSAmPSAoKDE8PHQpLTEpOyBlbHNlIHhbMF0gPSAwO1xuICAgICAgICB0aGlzLmZyb21TdHJpbmcoeCwyNTYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIGNvbnZlcnQgdG8gYmlnZW5kaWFuIGJ5dGUgYXJyYXlcbiAgICBmdW5jdGlvbiBiblRvQnl0ZUFycmF5KCkge1xuICAgICAgdmFyIGkgPSB0aGlzLnQsIHIgPSBuZXcgQXJyYXkoKTtcbiAgICAgIHJbMF0gPSB0aGlzLnM7XG4gICAgICB2YXIgcCA9IHRoaXMuREItKGkqdGhpcy5EQiklOCwgZCwgayA9IDA7XG4gICAgICBpZihpLS0gPiAwKSB7XG4gICAgICAgIGlmKHAgPCB0aGlzLkRCICYmIChkID0gdGhpc1tpXT4+cCkgIT0gKHRoaXMucyZ0aGlzLkRNKT4+cClcbiAgICAgICAgICByW2srK10gPSBkfCh0aGlzLnM8PCh0aGlzLkRCLXApKTtcbiAgICAgICAgd2hpbGUoaSA+PSAwKSB7XG4gICAgICAgICAgaWYocCA8IDgpIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXSYoKDE8PHApLTEpKTw8KDgtcCk7XG4gICAgICAgICAgICBkIHw9IHRoaXNbLS1pXT4+KHArPXRoaXMuREItOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldPj4ocC09OCkpJjB4ZmY7XG4gICAgICAgICAgICBpZihwIDw9IDApIHsgcCArPSB0aGlzLkRCOyAtLWk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoKGQmMHg4MCkgIT0gMCkgZCB8PSAtMjU2O1xuICAgICAgICAgIGlmKGsgPT0gMCAmJiAodGhpcy5zJjB4ODApICE9IChkJjB4ODApKSArK2s7XG4gICAgICAgICAgaWYoayA+IDAgfHwgZCAhPSB0aGlzLnMpIHJbaysrXSA9IGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJuRXF1YWxzKGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPT0wKTsgfVxuICAgIGZ1bmN0aW9uIGJuTWluKGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPDApP3RoaXM6YTsgfVxuICAgIGZ1bmN0aW9uIGJuTWF4KGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPjApP3RoaXM6YTsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgb3AgYSAoYml0d2lzZSlcbiAgICBmdW5jdGlvbiBibnBCaXR3aXNlVG8oYSxvcCxyKSB7XG4gICAgICB2YXIgaSwgZiwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgbTsgKytpKSByW2ldID0gb3AodGhpc1tpXSxhW2ldKTtcbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBmID0gYS5zJnRoaXMuRE07XG4gICAgICAgIGZvcihpID0gbTsgaSA8IHRoaXMudDsgKytpKSByW2ldID0gb3AodGhpc1tpXSxmKTtcbiAgICAgICAgci50ID0gdGhpcy50O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGYgPSB0aGlzLnMmdGhpcy5ETTtcbiAgICAgICAgZm9yKGkgPSBtOyBpIDwgYS50OyArK2kpIHJbaV0gPSBvcChmLGFbaV0pO1xuICAgICAgICByLnQgPSBhLnQ7XG4gICAgICB9XG4gICAgICByLnMgPSBvcCh0aGlzLnMsYS5zKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICYgYVxuICAgIGZ1bmN0aW9uIG9wX2FuZCh4LHkpIHsgcmV0dXJuIHgmeTsgfVxuICAgIGZ1bmN0aW9uIGJuQW5kKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF9hbmQscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIHwgYVxuICAgIGZ1bmN0aW9uIG9wX29yKHgseSkgeyByZXR1cm4geHx5OyB9XG4gICAgZnVuY3Rpb24gYm5PcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3Bfb3Iscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIF4gYVxuICAgIGZ1bmN0aW9uIG9wX3hvcih4LHkpIHsgcmV0dXJuIHheeTsgfVxuICAgIGZ1bmN0aW9uIGJuWG9yKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF94b3Iscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICYgfmFcbiAgICBmdW5jdGlvbiBvcF9hbmRub3QoeCx5KSB7IHJldHVybiB4Jn55OyB9XG4gICAgZnVuY3Rpb24gYm5BbmROb3QoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmJpdHdpc2VUbyhhLG9wX2FuZG5vdCxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIH50aGlzXG4gICAgZnVuY3Rpb24gYm5Ob3QoKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudDsgKytpKSByW2ldID0gdGhpcy5ETSZ+dGhpc1tpXTtcbiAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgIHIucyA9IH50aGlzLnM7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIDw8IG5cbiAgICBmdW5jdGlvbiBiblNoaWZ0TGVmdChuKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgaWYobiA8IDApIHRoaXMuclNoaWZ0VG8oLW4scik7IGVsc2UgdGhpcy5sU2hpZnRUbyhuLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyA+PiBuXG4gICAgZnVuY3Rpb24gYm5TaGlmdFJpZ2h0KG4pIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICBpZihuIDwgMCkgdGhpcy5sU2hpZnRUbygtbixyKTsgZWxzZSB0aGlzLnJTaGlmdFRvKG4scik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gaW5kZXggb2YgbG93ZXN0IDEtYml0IGluIHgsIHggPCAyXjMxXG4gICAgZnVuY3Rpb24gbGJpdCh4KSB7XG4gICAgICBpZih4ID09IDApIHJldHVybiAtMTtcbiAgICAgIHZhciByID0gMDtcbiAgICAgIGlmKCh4JjB4ZmZmZikgPT0gMCkgeyB4ID4+PSAxNjsgciArPSAxNjsgfVxuICAgICAgaWYoKHgmMHhmZikgPT0gMCkgeyB4ID4+PSA4OyByICs9IDg7IH1cbiAgICAgIGlmKCh4JjB4ZikgPT0gMCkgeyB4ID4+PSA0OyByICs9IDQ7IH1cbiAgICAgIGlmKCh4JjMpID09IDApIHsgeCA+Pj0gMjsgciArPSAyOyB9XG4gICAgICBpZigoeCYxKSA9PSAwKSArK3I7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm5zIGluZGV4IG9mIGxvd2VzdCAxLWJpdCAob3IgLTEgaWYgbm9uZSlcbiAgICBmdW5jdGlvbiBibkdldExvd2VzdFNldEJpdCgpIHtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSlcbiAgICAgICAgaWYodGhpc1tpXSAhPSAwKSByZXR1cm4gaSp0aGlzLkRCK2xiaXQodGhpc1tpXSk7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gdGhpcy50KnRoaXMuREI7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG51bWJlciBvZiAxIGJpdHMgaW4geFxuICAgIGZ1bmN0aW9uIGNiaXQoeCkge1xuICAgICAgdmFyIHIgPSAwO1xuICAgICAgd2hpbGUoeCAhPSAwKSB7IHggJj0geC0xOyArK3I7IH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiBudW1iZXIgb2Ygc2V0IGJpdHNcbiAgICBmdW5jdGlvbiBibkJpdENvdW50KCkge1xuICAgICAgdmFyIHIgPSAwLCB4ID0gdGhpcy5zJnRoaXMuRE07XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy50OyArK2kpIHIgKz0gY2JpdCh0aGlzW2ldXngpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdHJ1ZSBpZmYgbnRoIGJpdCBpcyBzZXRcbiAgICBmdW5jdGlvbiBiblRlc3RCaXQobikge1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKG4vdGhpcy5EQik7XG4gICAgICBpZihqID49IHRoaXMudCkgcmV0dXJuKHRoaXMucyE9MCk7XG4gICAgICByZXR1cm4oKHRoaXNbal0mKDE8PChuJXRoaXMuREIpKSkhPTApO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgb3AgKDE8PG4pXG4gICAgZnVuY3Rpb24gYm5wQ2hhbmdlQml0KG4sb3ApIHtcbiAgICAgIHZhciByID0gQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KG4pO1xuICAgICAgdGhpcy5iaXR3aXNlVG8ocixvcCxyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgfCAoMTw8bilcbiAgICBmdW5jdGlvbiBiblNldEJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX29yKTsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIH4oMTw8bilcbiAgICBmdW5jdGlvbiBibkNsZWFyQml0KG4pIHsgcmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sb3BfYW5kbm90KTsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyBeICgxPDxuKVxuICAgIGZ1bmN0aW9uIGJuRmxpcEJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX3hvcik7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzICsgYVxuICAgIGZ1bmN0aW9uIGJucEFkZFRvKGEscikge1xuICAgICAgdmFyIGkgPSAwLCBjID0gMCwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgd2hpbGUoaSA8IG0pIHtcbiAgICAgICAgYyArPSB0aGlzW2ldK2FbaV07XG4gICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBjICs9IGEucztcbiAgICAgICAgd2hpbGUoaSA8IHRoaXMudCkge1xuICAgICAgICAgIGMgKz0gdGhpc1tpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgICAgd2hpbGUoaSA8IGEudCkge1xuICAgICAgICAgIGMgKz0gYVtpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IGEucztcbiAgICAgIH1cbiAgICAgIHIucyA9IChjPDApPy0xOjA7XG4gICAgICBpZihjID4gMCkgcltpKytdID0gYztcbiAgICAgIGVsc2UgaWYoYyA8IC0xKSByW2krK10gPSB0aGlzLkRWK2M7XG4gICAgICByLnQgPSBpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgKyBhXG4gICAgZnVuY3Rpb24gYm5BZGQoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmFkZFRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIC0gYVxuICAgIGZ1bmN0aW9uIGJuU3VidHJhY3QoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLnN1YlRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICogYVxuICAgIGZ1bmN0aW9uIGJuTXVsdGlwbHkoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLm11bHRpcGx5VG8oYSxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXNeMlxuICAgIGZ1bmN0aW9uIGJuU3F1YXJlKCkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLnNxdWFyZVRvKHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAvIGFcbiAgICBmdW5jdGlvbiBibkRpdmlkZShhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuZGl2UmVtVG8oYSxyLG51bGwpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAlIGFcbiAgICBmdW5jdGlvbiBiblJlbWFpbmRlcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuZGl2UmVtVG8oYSxudWxsLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgW3RoaXMvYSx0aGlzJWFdXG4gICAgZnVuY3Rpb24gYm5EaXZpZGVBbmRSZW1haW5kZXIoYSkge1xuICAgICAgdmFyIHEgPSBuYmkoKSwgciA9IG5iaSgpO1xuICAgICAgdGhpcy5kaXZSZW1UbyhhLHEscik7XG4gICAgICByZXR1cm4gbmV3IEFycmF5KHEscik7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyAqPSBuLCB0aGlzID49IDAsIDEgPCBuIDwgRFZcbiAgICBmdW5jdGlvbiBibnBETXVsdGlwbHkobikge1xuICAgICAgdGhpc1t0aGlzLnRdID0gdGhpcy5hbSgwLG4tMSx0aGlzLDAsMCx0aGlzLnQpO1xuICAgICAgKyt0aGlzLnQ7XG4gICAgICB0aGlzLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyArPSBuIDw8IHcgd29yZHMsIHRoaXMgPj0gMFxuICAgIGZ1bmN0aW9uIGJucERBZGRPZmZzZXQobix3KSB7XG4gICAgICBpZihuID09IDApIHJldHVybjtcbiAgICAgIHdoaWxlKHRoaXMudCA8PSB3KSB0aGlzW3RoaXMudCsrXSA9IDA7XG4gICAgICB0aGlzW3ddICs9IG47XG4gICAgICB3aGlsZSh0aGlzW3ddID49IHRoaXMuRFYpIHtcbiAgICAgICAgdGhpc1t3XSAtPSB0aGlzLkRWO1xuICAgICAgICBpZigrK3cgPj0gdGhpcy50KSB0aGlzW3RoaXMudCsrXSA9IDA7XG4gICAgICAgICsrdGhpc1t3XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBIFwibnVsbFwiIHJlZHVjZXJcbiAgICBmdW5jdGlvbiBOdWxsRXhwKCkge31cbiAgICBmdW5jdGlvbiBuTm9wKHgpIHsgcmV0dXJuIHg7IH1cbiAgICBmdW5jdGlvbiBuTXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IH1cbiAgICBmdW5jdGlvbiBuU3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IH1cblxuICAgIE51bGxFeHAucHJvdG90eXBlLmNvbnZlcnQgPSBuTm9wO1xuICAgIE51bGxFeHAucHJvdG90eXBlLnJldmVydCA9IG5Ob3A7XG4gICAgTnVsbEV4cC5wcm90b3R5cGUubXVsVG8gPSBuTXVsVG87XG4gICAgTnVsbEV4cC5wcm90b3R5cGUuc3FyVG8gPSBuU3FyVG87XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmVcbiAgICBmdW5jdGlvbiBiblBvdyhlKSB7IHJldHVybiB0aGlzLmV4cChlLG5ldyBOdWxsRXhwKCkpOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gbG93ZXIgbiB3b3JkcyBvZiBcInRoaXMgKiBhXCIsIGEudCA8PSBuXG4gICAgLy8gXCJ0aGlzXCIgc2hvdWxkIGJlIHRoZSBsYXJnZXIgb25lIGlmIGFwcHJvcHJpYXRlLlxuICAgIGZ1bmN0aW9uIGJucE11bHRpcGx5TG93ZXJUbyhhLG4scikge1xuICAgICAgdmFyIGkgPSBNYXRoLm1pbih0aGlzLnQrYS50LG4pO1xuICAgICAgci5zID0gMDsgLy8gYXNzdW1lcyBhLHRoaXMgPj0gMFxuICAgICAgci50ID0gaTtcbiAgICAgIHdoaWxlKGkgPiAwKSByWy0taV0gPSAwO1xuICAgICAgdmFyIGo7XG4gICAgICBmb3IoaiA9IHIudC10aGlzLnQ7IGkgPCBqOyArK2kpIHJbaSt0aGlzLnRdID0gdGhpcy5hbSgwLGFbaV0scixpLDAsdGhpcy50KTtcbiAgICAgIGZvcihqID0gTWF0aC5taW4oYS50LG4pOyBpIDwgajsgKytpKSB0aGlzLmFtKDAsYVtpXSxyLGksMCxuLWkpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSBcInRoaXMgKiBhXCIgd2l0aG91dCBsb3dlciBuIHdvcmRzLCBuID4gMFxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBmdW5jdGlvbiBibnBNdWx0aXBseVVwcGVyVG8oYSxuLHIpIHtcbiAgICAgIC0tbjtcbiAgICAgIHZhciBpID0gci50ID0gdGhpcy50K2EudC1uO1xuICAgICAgci5zID0gMDsgLy8gYXNzdW1lcyBhLHRoaXMgPj0gMFxuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSBNYXRoLm1heChuLXRoaXMudCwwKTsgaSA8IGEudDsgKytpKVxuICAgICAgICByW3RoaXMudCtpLW5dID0gdGhpcy5hbShuLWksYVtpXSxyLDAsMCx0aGlzLnQraS1uKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICAgIHIuZHJTaGlmdFRvKDEscik7XG4gICAgfVxuXG4gICAgLy8gQmFycmV0dCBtb2R1bGFyIHJlZHVjdGlvblxuICAgIGZ1bmN0aW9uIEJhcnJldHQobSkge1xuICAgICAgLy8gc2V0dXAgQmFycmV0dFxuICAgICAgdGhpcy5yMiA9IG5iaSgpO1xuICAgICAgdGhpcy5xMyA9IG5iaSgpO1xuICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKDIqbS50LHRoaXMucjIpO1xuICAgICAgdGhpcy5tdSA9IHRoaXMucjIuZGl2aWRlKG0pO1xuICAgICAgdGhpcy5tID0gbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiYXJyZXR0Q29udmVydCh4KSB7XG4gICAgICBpZih4LnMgPCAwIHx8IHgudCA+IDIqdGhpcy5tLnQpIHJldHVybiB4Lm1vZCh0aGlzLm0pO1xuICAgICAgZWxzZSBpZih4LmNvbXBhcmVUbyh0aGlzLm0pIDwgMCkgcmV0dXJuIHg7XG4gICAgICBlbHNlIHsgdmFyIHIgPSBuYmkoKTsgeC5jb3B5VG8ocik7IHRoaXMucmVkdWNlKHIpOyByZXR1cm4gcjsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJhcnJldHRSZXZlcnQoeCkgeyByZXR1cm4geDsgfVxuXG4gICAgLy8geCA9IHggbW9kIG0gKEhBQyAxNC40MilcbiAgICBmdW5jdGlvbiBiYXJyZXR0UmVkdWNlKHgpIHtcbiAgICAgIHguZHJTaGlmdFRvKHRoaXMubS50LTEsdGhpcy5yMik7XG4gICAgICBpZih4LnQgPiB0aGlzLm0udCsxKSB7IHgudCA9IHRoaXMubS50KzE7IHguY2xhbXAoKTsgfVxuICAgICAgdGhpcy5tdS5tdWx0aXBseVVwcGVyVG8odGhpcy5yMix0aGlzLm0udCsxLHRoaXMucTMpO1xuICAgICAgdGhpcy5tLm11bHRpcGx5TG93ZXJUbyh0aGlzLnEzLHRoaXMubS50KzEsdGhpcy5yMik7XG4gICAgICB3aGlsZSh4LmNvbXBhcmVUbyh0aGlzLnIyKSA8IDApIHguZEFkZE9mZnNldCgxLHRoaXMubS50KzEpO1xuICAgICAgeC5zdWJUbyh0aGlzLnIyLHgpO1xuICAgICAgd2hpbGUoeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSB4LnN1YlRvKHRoaXMubSx4KTtcbiAgICB9XG5cbiAgICAvLyByID0geF4yIG1vZCBtOyB4ICE9IHJcbiAgICBmdW5jdGlvbiBiYXJyZXR0U3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICAvLyByID0geCp5IG1vZCBtOyB4LHkgIT0gclxuICAgIGZ1bmN0aW9uIGJhcnJldHRNdWxUbyh4LHkscikgeyB4Lm11bHRpcGx5VG8oeSxyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIEJhcnJldHQucHJvdG90eXBlLmNvbnZlcnQgPSBiYXJyZXR0Q29udmVydDtcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5yZXZlcnQgPSBiYXJyZXR0UmV2ZXJ0O1xuICAgIEJhcnJldHQucHJvdG90eXBlLnJlZHVjZSA9IGJhcnJldHRSZWR1Y2U7XG4gICAgQmFycmV0dC5wcm90b3R5cGUubXVsVG8gPSBiYXJyZXR0TXVsVG87XG4gICAgQmFycmV0dC5wcm90b3R5cGUuc3FyVG8gPSBiYXJyZXR0U3FyVG87XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmUgJSBtIChIQUMgMTQuODUpXG4gICAgZnVuY3Rpb24gYm5Nb2RQb3coZSxtKSB7XG4gICAgICB2YXIgaSA9IGUuYml0TGVuZ3RoKCksIGssIHIgPSBuYnYoMSksIHo7XG4gICAgICBpZihpIDw9IDApIHJldHVybiByO1xuICAgICAgZWxzZSBpZihpIDwgMTgpIGsgPSAxO1xuICAgICAgZWxzZSBpZihpIDwgNDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihpIDwgMTQ0KSBrID0gNDtcbiAgICAgIGVsc2UgaWYoaSA8IDc2OCkgayA9IDU7XG4gICAgICBlbHNlIGsgPSA2O1xuICAgICAgaWYoaSA8IDgpXG4gICAgICAgIHogPSBuZXcgQ2xhc3NpYyhtKTtcbiAgICAgIGVsc2UgaWYobS5pc0V2ZW4oKSlcbiAgICAgICAgeiA9IG5ldyBCYXJyZXR0KG0pO1xuICAgICAgZWxzZVxuICAgICAgICB6ID0gbmV3IE1vbnRnb21lcnkobSk7XG5cbiAgICAgIC8vIHByZWNvbXB1dGF0aW9uXG4gICAgICB2YXIgZyA9IG5ldyBBcnJheSgpLCBuID0gMywgazEgPSBrLTEsIGttID0gKDE8PGspLTE7XG4gICAgICBnWzFdID0gei5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYoayA+IDEpIHtcbiAgICAgICAgdmFyIGcyID0gbmJpKCk7XG4gICAgICAgIHouc3FyVG8oZ1sxXSxnMik7XG4gICAgICAgIHdoaWxlKG4gPD0ga20pIHtcbiAgICAgICAgICBnW25dID0gbmJpKCk7XG4gICAgICAgICAgei5tdWxUbyhnMixnW24tMl0sZ1tuXSk7XG4gICAgICAgICAgbiArPSAyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBqID0gZS50LTEsIHcsIGlzMSA9IHRydWUsIHIyID0gbmJpKCksIHQ7XG4gICAgICBpID0gbmJpdHMoZVtqXSktMTtcbiAgICAgIHdoaWxlKGogPj0gMCkge1xuICAgICAgICBpZihpID49IGsxKSB3ID0gKGVbal0+PihpLWsxKSkma207XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHcgPSAoZVtqXSYoKDE8PChpKzEpKS0xKSk8PChrMS1pKTtcbiAgICAgICAgICBpZihqID4gMCkgdyB8PSBlW2otMV0+Pih0aGlzLkRCK2ktazEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbiA9IGs7XG4gICAgICAgIHdoaWxlKCh3JjEpID09IDApIHsgdyA+Pj0gMTsgLS1uOyB9XG4gICAgICAgIGlmKChpIC09IG4pIDwgMCkgeyBpICs9IHRoaXMuREI7IC0tajsgfVxuICAgICAgICBpZihpczEpIHsgICAgLy8gcmV0ID09IDEsIGRvbid0IGJvdGhlciBzcXVhcmluZyBvciBtdWx0aXBseWluZyBpdFxuICAgICAgICAgIGdbd10uY29weVRvKHIpO1xuICAgICAgICAgIGlzMSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHdoaWxlKG4gPiAxKSB7IHouc3FyVG8ocixyMik7IHouc3FyVG8ocjIscik7IG4gLT0gMjsgfVxuICAgICAgICAgIGlmKG4gPiAwKSB6LnNxclRvKHIscjIpOyBlbHNlIHsgdCA9IHI7IHIgPSByMjsgcjIgPSB0OyB9XG4gICAgICAgICAgei5tdWxUbyhyMixnW3ddLHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUoaiA+PSAwICYmIChlW2pdJigxPDxpKSkgPT0gMCkge1xuICAgICAgICAgIHouc3FyVG8ocixyMik7IHQgPSByOyByID0gcjI7IHIyID0gdDtcbiAgICAgICAgICBpZigtLWkgPCAwKSB7IGkgPSB0aGlzLkRCLTE7IC0tajsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gei5yZXZlcnQocik7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgZ2NkKHRoaXMsYSkgKEhBQyAxNC41NClcbiAgICBmdW5jdGlvbiBibkdDRChhKSB7XG4gICAgICB2YXIgeCA9ICh0aGlzLnM8MCk/dGhpcy5uZWdhdGUoKTp0aGlzLmNsb25lKCk7XG4gICAgICB2YXIgeSA9IChhLnM8MCk/YS5uZWdhdGUoKTphLmNsb25lKCk7XG4gICAgICBpZih4LmNvbXBhcmVUbyh5KSA8IDApIHsgdmFyIHQgPSB4OyB4ID0geTsgeSA9IHQ7IH1cbiAgICAgIHZhciBpID0geC5nZXRMb3dlc3RTZXRCaXQoKSwgZyA9IHkuZ2V0TG93ZXN0U2V0Qml0KCk7XG4gICAgICBpZihnIDwgMCkgcmV0dXJuIHg7XG4gICAgICBpZihpIDwgZykgZyA9IGk7XG4gICAgICBpZihnID4gMCkge1xuICAgICAgICB4LnJTaGlmdFRvKGcseCk7XG4gICAgICAgIHkuclNoaWZ0VG8oZyx5KTtcbiAgICAgIH1cbiAgICAgIHdoaWxlKHguc2lnbnVtKCkgPiAwKSB7XG4gICAgICAgIGlmKChpID0geC5nZXRMb3dlc3RTZXRCaXQoKSkgPiAwKSB4LnJTaGlmdFRvKGkseCk7XG4gICAgICAgIGlmKChpID0geS5nZXRMb3dlc3RTZXRCaXQoKSkgPiAwKSB5LnJTaGlmdFRvKGkseSk7XG4gICAgICAgIGlmKHguY29tcGFyZVRvKHkpID49IDApIHtcbiAgICAgICAgICB4LnN1YlRvKHkseCk7XG4gICAgICAgICAgeC5yU2hpZnRUbygxLHgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHkuc3ViVG8oeCx5KTtcbiAgICAgICAgICB5LnJTaGlmdFRvKDEseSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGcgPiAwKSB5LmxTaGlmdFRvKGcseSk7XG4gICAgICByZXR1cm4geTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzICUgbiwgbiA8IDJeMjZcbiAgICBmdW5jdGlvbiBibnBNb2RJbnQobikge1xuICAgICAgaWYobiA8PSAwKSByZXR1cm4gMDtcbiAgICAgIHZhciBkID0gdGhpcy5EViVuLCByID0gKHRoaXMuczwwKT9uLTE6MDtcbiAgICAgIGlmKHRoaXMudCA+IDApXG4gICAgICAgIGlmKGQgPT0gMCkgciA9IHRoaXNbMF0lbjtcbiAgICAgICAgZWxzZSBmb3IodmFyIGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHIgPSAoZCpyK3RoaXNbaV0pJW47XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSAxL3RoaXMgJSBtIChIQUMgMTQuNjEpXG4gICAgZnVuY3Rpb24gYm5Nb2RJbnZlcnNlKG0pIHtcbiAgICAgIHZhciBhYyA9IG0uaXNFdmVuKCk7XG4gICAgICBpZigodGhpcy5pc0V2ZW4oKSAmJiBhYykgfHwgbS5zaWdudW0oKSA9PSAwKSByZXR1cm4gQmlnSW50ZWdlci5aRVJPO1xuICAgICAgdmFyIHUgPSBtLmNsb25lKCksIHYgPSB0aGlzLmNsb25lKCk7XG4gICAgICB2YXIgYSA9IG5idigxKSwgYiA9IG5idigwKSwgYyA9IG5idigwKSwgZCA9IG5idigxKTtcbiAgICAgIHdoaWxlKHUuc2lnbnVtKCkgIT0gMCkge1xuICAgICAgICB3aGlsZSh1LmlzRXZlbigpKSB7XG4gICAgICAgICAgdS5yU2hpZnRUbygxLHUpO1xuICAgICAgICAgIGlmKGFjKSB7XG4gICAgICAgICAgICBpZighYS5pc0V2ZW4oKSB8fCAhYi5pc0V2ZW4oKSkgeyBhLmFkZFRvKHRoaXMsYSk7IGIuc3ViVG8obSxiKTsgfVxuICAgICAgICAgICAgYS5yU2hpZnRUbygxLGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCFiLmlzRXZlbigpKSBiLnN1YlRvKG0sYik7XG4gICAgICAgICAgYi5yU2hpZnRUbygxLGIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlKHYuaXNFdmVuKCkpIHtcbiAgICAgICAgICB2LnJTaGlmdFRvKDEsdik7XG4gICAgICAgICAgaWYoYWMpIHtcbiAgICAgICAgICAgIGlmKCFjLmlzRXZlbigpIHx8ICFkLmlzRXZlbigpKSB7IGMuYWRkVG8odGhpcyxjKTsgZC5zdWJUbyhtLGQpOyB9XG4gICAgICAgICAgICBjLnJTaGlmdFRvKDEsYyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoIWQuaXNFdmVuKCkpIGQuc3ViVG8obSxkKTtcbiAgICAgICAgICBkLnJTaGlmdFRvKDEsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodS5jb21wYXJlVG8odikgPj0gMCkge1xuICAgICAgICAgIHUuc3ViVG8odix1KTtcbiAgICAgICAgICBpZihhYykgYS5zdWJUbyhjLGEpO1xuICAgICAgICAgIGIuc3ViVG8oZCxiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2LnN1YlRvKHUsdik7XG4gICAgICAgICAgaWYoYWMpIGMuc3ViVG8oYSxjKTtcbiAgICAgICAgICBkLnN1YlRvKGIsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHYuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSAhPSAwKSByZXR1cm4gQmlnSW50ZWdlci5aRVJPO1xuICAgICAgaWYoZC5jb21wYXJlVG8obSkgPj0gMCkgcmV0dXJuIGQuc3VidHJhY3QobSk7XG4gICAgICBpZihkLnNpZ251bSgpIDwgMCkgZC5hZGRUbyhtLGQpOyBlbHNlIHJldHVybiBkO1xuICAgICAgaWYoZC5zaWdudW0oKSA8IDApIHJldHVybiBkLmFkZChtKTsgZWxzZSByZXR1cm4gZDtcbiAgICB9XG5cbiAgICB2YXIgbG93cHJpbWVzID0gWzIsMyw1LDcsMTEsMTMsMTcsMTksMjMsMjksMzEsMzcsNDEsNDMsNDcsNTMsNTksNjEsNjcsNzEsNzMsNzksODMsODksOTcsMTAxLDEwMywxMDcsMTA5LDExMywxMjcsMTMxLDEzNywxMzksMTQ5LDE1MSwxNTcsMTYzLDE2NywxNzMsMTc5LDE4MSwxOTEsMTkzLDE5NywxOTksMjExLDIyMywyMjcsMjI5LDIzMywyMzksMjQxLDI1MSwyNTcsMjYzLDI2OSwyNzEsMjc3LDI4MSwyODMsMjkzLDMwNywzMTEsMzEzLDMxNywzMzEsMzM3LDM0NywzNDksMzUzLDM1OSwzNjcsMzczLDM3OSwzODMsMzg5LDM5Nyw0MDEsNDA5LDQxOSw0MjEsNDMxLDQzMyw0MzksNDQzLDQ0OSw0NTcsNDYxLDQ2Myw0NjcsNDc5LDQ4Nyw0OTEsNDk5LDUwMyw1MDksNTIxLDUyMyw1NDEsNTQ3LDU1Nyw1NjMsNTY5LDU3MSw1NzcsNTg3LDU5Myw1OTksNjAxLDYwNyw2MTMsNjE3LDYxOSw2MzEsNjQxLDY0Myw2NDcsNjUzLDY1OSw2NjEsNjczLDY3Nyw2ODMsNjkxLDcwMSw3MDksNzE5LDcyNyw3MzMsNzM5LDc0Myw3NTEsNzU3LDc2MSw3NjksNzczLDc4Nyw3OTcsODA5LDgxMSw4MjEsODIzLDgyNyw4MjksODM5LDg1Myw4NTcsODU5LDg2Myw4NzcsODgxLDg4Myw4ODcsOTA3LDkxMSw5MTksOTI5LDkzNyw5NDEsOTQ3LDk1Myw5NjcsOTcxLDk3Nyw5ODMsOTkxLDk5N107XG4gICAgdmFyIGxwbGltID0gKDE8PDI2KS9sb3dwcmltZXNbbG93cHJpbWVzLmxlbmd0aC0xXTtcblxuICAgIC8vIChwdWJsaWMpIHRlc3QgcHJpbWFsaXR5IHdpdGggY2VydGFpbnR5ID49IDEtLjVedFxuICAgIGZ1bmN0aW9uIGJuSXNQcm9iYWJsZVByaW1lKHQpIHtcbiAgICAgIHZhciBpLCB4ID0gdGhpcy5hYnMoKTtcbiAgICAgIGlmKHgudCA9PSAxICYmIHhbMF0gPD0gbG93cHJpbWVzW2xvd3ByaW1lcy5sZW5ndGgtMV0pIHtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgbG93cHJpbWVzLmxlbmd0aDsgKytpKVxuICAgICAgICAgIGlmKHhbMF0gPT0gbG93cHJpbWVzW2ldKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYoeC5pc0V2ZW4oKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaSA9IDE7XG4gICAgICB3aGlsZShpIDwgbG93cHJpbWVzLmxlbmd0aCkge1xuICAgICAgICB2YXIgbSA9IGxvd3ByaW1lc1tpXSwgaiA9IGkrMTtcbiAgICAgICAgd2hpbGUoaiA8IGxvd3ByaW1lcy5sZW5ndGggJiYgbSA8IGxwbGltKSBtICo9IGxvd3ByaW1lc1tqKytdO1xuICAgICAgICBtID0geC5tb2RJbnQobSk7XG4gICAgICAgIHdoaWxlKGkgPCBqKSBpZihtJWxvd3ByaW1lc1tpKytdID09IDApIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB4Lm1pbGxlclJhYmluKHQpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRydWUgaWYgcHJvYmFibHkgcHJpbWUgKEhBQyA0LjI0LCBNaWxsZXItUmFiaW4pXG4gICAgZnVuY3Rpb24gYm5wTWlsbGVyUmFiaW4odCkge1xuICAgICAgdmFyIG4xID0gdGhpcy5zdWJ0cmFjdChCaWdJbnRlZ2VyLk9ORSk7XG4gICAgICB2YXIgayA9IG4xLmdldExvd2VzdFNldEJpdCgpO1xuICAgICAgaWYoayA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgciA9IG4xLnNoaWZ0UmlnaHQoayk7XG4gICAgICB0ID0gKHQrMSk+PjE7XG4gICAgICBpZih0ID4gbG93cHJpbWVzLmxlbmd0aCkgdCA9IGxvd3ByaW1lcy5sZW5ndGg7XG4gICAgICB2YXIgYSA9IG5iaSgpO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHQ7ICsraSkge1xuICAgICAgICAvL1BpY2sgYmFzZXMgYXQgcmFuZG9tLCBpbnN0ZWFkIG9mIHN0YXJ0aW5nIGF0IDJcbiAgICAgICAgYS5mcm9tSW50KGxvd3ByaW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbG93cHJpbWVzLmxlbmd0aCldKTtcbiAgICAgICAgdmFyIHkgPSBhLm1vZFBvdyhyLHRoaXMpO1xuICAgICAgICBpZih5LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgIT0gMCAmJiB5LmNvbXBhcmVUbyhuMSkgIT0gMCkge1xuICAgICAgICAgIHZhciBqID0gMTtcbiAgICAgICAgICB3aGlsZShqKysgPCBrICYmIHkuY29tcGFyZVRvKG4xKSAhPSAwKSB7XG4gICAgICAgICAgICB5ID0geS5tb2RQb3dJbnQoMix0aGlzKTtcbiAgICAgICAgICAgIGlmKHkuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHkuY29tcGFyZVRvKG4xKSAhPSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIHByb3RlY3RlZFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNodW5rU2l6ZSA9IGJucENodW5rU2l6ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1JhZGl4ID0gYm5wVG9SYWRpeDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tUmFkaXggPSBibnBGcm9tUmFkaXg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbU51bWJlciA9IGJucEZyb21OdW1iZXI7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0d2lzZVRvID0gYm5wQml0d2lzZVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNoYW5nZUJpdCA9IGJucENoYW5nZUJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGRUbyA9IGJucEFkZFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRNdWx0aXBseSA9IGJucERNdWx0aXBseTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kQWRkT2Zmc2V0ID0gYm5wREFkZE9mZnNldDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseUxvd2VyVG8gPSBibnBNdWx0aXBseUxvd2VyVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlVcHBlclRvID0gYm5wTXVsdGlwbHlVcHBlclRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludCA9IGJucE1vZEludDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5taWxsZXJSYWJpbiA9IGJucE1pbGxlclJhYmluO1xuXG4gICAgLy8gcHVibGljXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2xvbmUgPSBibkNsb25lO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmludFZhbHVlID0gYm5JbnRWYWx1ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ieXRlVmFsdWUgPSBibkJ5dGVWYWx1ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaG9ydFZhbHVlID0gYm5TaG9ydFZhbHVlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNpZ251bSA9IGJuU2lnTnVtO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvQnl0ZUFycmF5ID0gYm5Ub0J5dGVBcnJheTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHMgPSBibkVxdWFscztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5taW4gPSBibk1pbjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tYXggPSBibk1heDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmQgPSBibkFuZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5vciA9IGJuT3I7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUueG9yID0gYm5Yb3I7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kTm90ID0gYm5BbmROb3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubm90ID0gYm5Ob3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRMZWZ0ID0gYm5TaGlmdExlZnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRSaWdodCA9IGJuU2hpZnRSaWdodDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nZXRMb3dlc3RTZXRCaXQgPSBibkdldExvd2VzdFNldEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRDb3VudCA9IGJuQml0Q291bnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudGVzdEJpdCA9IGJuVGVzdEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zZXRCaXQgPSBiblNldEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbGVhckJpdCA9IGJuQ2xlYXJCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZmxpcEJpdCA9IGJuRmxpcEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGQgPSBibkFkZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGJuU3VidHJhY3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHkgPSBibk11bHRpcGx5O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZSA9IGJuRGl2aWRlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnJlbWFpbmRlciA9IGJuUmVtYWluZGVyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZUFuZFJlbWFpbmRlciA9IGJuRGl2aWRlQW5kUmVtYWluZGVyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvdyA9IGJuTW9kUG93O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludmVyc2UgPSBibk1vZEludmVyc2U7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucG93ID0gYm5Qb3c7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ2NkID0gYm5HQ0Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gYm5Jc1Byb2JhYmxlUHJpbWU7XG5cbiAgICAvLyBKU0JOLXNwZWNpZmljIGV4dGVuc2lvblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNxdWFyZSA9IGJuU3F1YXJlO1xuXG4gICAgLy8gRXhwb3NlIHRoZSBCYXJyZXR0IGZ1bmN0aW9uXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuQmFycmV0dCA9IEJhcnJldHRcblxuICAgIC8vIEJpZ0ludGVnZXIgaW50ZXJmYWNlcyBub3QgaW1wbGVtZW50ZWQgaW4ganNibjpcblxuICAgIC8vIEJpZ0ludGVnZXIoaW50IHNpZ251bSwgYnl0ZVtdIG1hZ25pdHVkZSlcbiAgICAvLyBkb3VibGUgZG91YmxlVmFsdWUoKVxuICAgIC8vIGZsb2F0IGZsb2F0VmFsdWUoKVxuICAgIC8vIGludCBoYXNoQ29kZSgpXG4gICAgLy8gbG9uZyBsb25nVmFsdWUoKVxuICAgIC8vIHN0YXRpYyBCaWdJbnRlZ2VyIHZhbHVlT2YobG9uZyB2YWwpXG5cbiAgICAvLyBSYW5kb20gbnVtYmVyIGdlbmVyYXRvciAtIHJlcXVpcmVzIGEgUFJORyBiYWNrZW5kLCBlLmcuIHBybmc0LmpzXG5cbiAgICAvLyBGb3IgYmVzdCByZXN1bHRzLCBwdXQgY29kZSBsaWtlXG4gICAgLy8gPGJvZHkgb25DbGljaz0ncm5nX3NlZWRfdGltZSgpOycgb25LZXlQcmVzcz0ncm5nX3NlZWRfdGltZSgpOyc+XG4gICAgLy8gaW4geW91ciBtYWluIEhUTUwgZG9jdW1lbnQuXG5cbiAgICB2YXIgcm5nX3N0YXRlO1xuICAgIHZhciBybmdfcG9vbDtcbiAgICB2YXIgcm5nX3BwdHI7XG5cbiAgICAvLyBNaXggaW4gYSAzMi1iaXQgaW50ZWdlciBpbnRvIHRoZSBwb29sXG4gICAgZnVuY3Rpb24gcm5nX3NlZWRfaW50KHgpIHtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49IHggJiAyNTU7XG4gICAgICBybmdfcG9vbFtybmdfcHB0cisrXSBePSAoeCA+PiA4KSAmIDI1NTtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49ICh4ID4+IDE2KSAmIDI1NTtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49ICh4ID4+IDI0KSAmIDI1NTtcbiAgICAgIGlmKHJuZ19wcHRyID49IHJuZ19wc2l6ZSkgcm5nX3BwdHIgLT0gcm5nX3BzaXplO1xuICAgIH1cblxuICAgIC8vIE1peCBpbiB0aGUgY3VycmVudCB0aW1lICh3L21pbGxpc2Vjb25kcykgaW50byB0aGUgcG9vbFxuICAgIGZ1bmN0aW9uIHJuZ19zZWVkX3RpbWUoKSB7XG4gICAgICBybmdfc2VlZF9pbnQobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgdGhlIHBvb2wgd2l0aCBqdW5rIGlmIG5lZWRlZC5cbiAgICBpZihybmdfcG9vbCA9PSBudWxsKSB7XG4gICAgICBybmdfcG9vbCA9IG5ldyBBcnJheSgpO1xuICAgICAgcm5nX3BwdHIgPSAwO1xuICAgICAgdmFyIHQ7XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5jcnlwdG8pIHtcbiAgICAgICAgaWYgKHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgLy8gVXNlIHdlYmNyeXB0byBpZiBhdmFpbGFibGVcbiAgICAgICAgICB2YXIgdWEgPSBuZXcgVWludDhBcnJheSgzMik7XG4gICAgICAgICAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXModWEpO1xuICAgICAgICAgIGZvcih0ID0gMDsgdCA8IDMyOyArK3QpXG4gICAgICAgICAgICBybmdfcG9vbFtybmdfcHB0cisrXSA9IHVhW3RdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobmF2aWdhdG9yLmFwcE5hbWUgPT0gXCJOZXRzY2FwZVwiICYmIG5hdmlnYXRvci5hcHBWZXJzaW9uIDwgXCI1XCIpIHtcbiAgICAgICAgICAvLyBFeHRyYWN0IGVudHJvcHkgKDI1NiBiaXRzKSBmcm9tIE5TNCBSTkcgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgdmFyIHogPSB3aW5kb3cuY3J5cHRvLnJhbmRvbSgzMik7XG4gICAgICAgICAgZm9yKHQgPSAwOyB0IDwgei5sZW5ndGg7ICsrdClcbiAgICAgICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gei5jaGFyQ29kZUF0KHQpICYgMjU1O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aGlsZShybmdfcHB0ciA8IHJuZ19wc2l6ZSkgeyAgLy8gZXh0cmFjdCBzb21lIHJhbmRvbW5lc3MgZnJvbSBNYXRoLnJhbmRvbSgpXG4gICAgICAgIHQgPSBNYXRoLmZsb29yKDY1NTM2ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gdCA+Pj4gODtcbiAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB0ICYgMjU1O1xuICAgICAgfVxuICAgICAgcm5nX3BwdHIgPSAwO1xuICAgICAgcm5nX3NlZWRfdGltZSgpO1xuICAgICAgLy9ybmdfc2VlZF9pbnQod2luZG93LnNjcmVlblgpO1xuICAgICAgLy9ybmdfc2VlZF9pbnQod2luZG93LnNjcmVlblkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJuZ19nZXRfYnl0ZSgpIHtcbiAgICAgIGlmKHJuZ19zdGF0ZSA9PSBudWxsKSB7XG4gICAgICAgIHJuZ19zZWVkX3RpbWUoKTtcbiAgICAgICAgcm5nX3N0YXRlID0gcHJuZ19uZXdzdGF0ZSgpO1xuICAgICAgICBybmdfc3RhdGUuaW5pdChybmdfcG9vbCk7XG4gICAgICAgIGZvcihybmdfcHB0ciA9IDA7IHJuZ19wcHRyIDwgcm5nX3Bvb2wubGVuZ3RoOyArK3JuZ19wcHRyKVxuICAgICAgICAgIHJuZ19wb29sW3JuZ19wcHRyXSA9IDA7XG4gICAgICAgIHJuZ19wcHRyID0gMDtcbiAgICAgICAgLy9ybmdfcG9vbCA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBhbGxvdyByZXNlZWRpbmcgYWZ0ZXIgZmlyc3QgcmVxdWVzdFxuICAgICAgcmV0dXJuIHJuZ19zdGF0ZS5uZXh0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcm5nX2dldF9ieXRlcyhiYSkge1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IoaSA9IDA7IGkgPCBiYS5sZW5ndGg7ICsraSkgYmFbaV0gPSBybmdfZ2V0X2J5dGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTZWN1cmVSYW5kb20oKSB7fVxuXG4gICAgU2VjdXJlUmFuZG9tLnByb3RvdHlwZS5uZXh0Qnl0ZXMgPSBybmdfZ2V0X2J5dGVzO1xuXG4gICAgLy8gcHJuZzQuanMgLSB1c2VzIEFyY2ZvdXIgYXMgYSBQUk5HXG5cbiAgICBmdW5jdGlvbiBBcmNmb3VyKCkge1xuICAgICAgdGhpcy5pID0gMDtcbiAgICAgIHRoaXMuaiA9IDA7XG4gICAgICB0aGlzLlMgPSBuZXcgQXJyYXkoKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFyY2ZvdXIgY29udGV4dCBmcm9tIGtleSwgYW4gYXJyYXkgb2YgaW50cywgZWFjaCBmcm9tIFswLi4yNTVdXG4gICAgZnVuY3Rpb24gQVJDNGluaXQoa2V5KSB7XG4gICAgICB2YXIgaSwgaiwgdDtcbiAgICAgIGZvcihpID0gMDsgaSA8IDI1NjsgKytpKVxuICAgICAgICB0aGlzLlNbaV0gPSBpO1xuICAgICAgaiA9IDA7XG4gICAgICBmb3IoaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICBqID0gKGogKyB0aGlzLlNbaV0gKyBrZXlbaSAlIGtleS5sZW5ndGhdKSAmIDI1NTtcbiAgICAgICAgdCA9IHRoaXMuU1tpXTtcbiAgICAgICAgdGhpcy5TW2ldID0gdGhpcy5TW2pdO1xuICAgICAgICB0aGlzLlNbal0gPSB0O1xuICAgICAgfVxuICAgICAgdGhpcy5pID0gMDtcbiAgICAgIHRoaXMuaiA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQVJDNG5leHQoKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIHRoaXMuaSA9ICh0aGlzLmkgKyAxKSAmIDI1NTtcbiAgICAgIHRoaXMuaiA9ICh0aGlzLmogKyB0aGlzLlNbdGhpcy5pXSkgJiAyNTU7XG4gICAgICB0ID0gdGhpcy5TW3RoaXMuaV07XG4gICAgICB0aGlzLlNbdGhpcy5pXSA9IHRoaXMuU1t0aGlzLmpdO1xuICAgICAgdGhpcy5TW3RoaXMual0gPSB0O1xuICAgICAgcmV0dXJuIHRoaXMuU1sodCArIHRoaXMuU1t0aGlzLmldKSAmIDI1NV07XG4gICAgfVxuXG4gICAgQXJjZm91ci5wcm90b3R5cGUuaW5pdCA9IEFSQzRpbml0O1xuICAgIEFyY2ZvdXIucHJvdG90eXBlLm5leHQgPSBBUkM0bmV4dDtcblxuICAgIC8vIFBsdWcgaW4geW91ciBSTkcgY29uc3RydWN0b3IgaGVyZVxuICAgIGZ1bmN0aW9uIHBybmdfbmV3c3RhdGUoKSB7XG4gICAgICByZXR1cm4gbmV3IEFyY2ZvdXIoKTtcbiAgICB9XG5cbiAgICAvLyBQb29sIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQgYW5kIGdyZWF0ZXIgdGhhbiAzMi5cbiAgICAvLyBBbiBhcnJheSBvZiBieXRlcyB0aGUgc2l6ZSBvZiB0aGUgcG9vbCB3aWxsIGJlIHBhc3NlZCB0byBpbml0KClcbiAgICB2YXIgcm5nX3BzaXplID0gMjU2O1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgICAgICBkZWZhdWx0OiBCaWdJbnRlZ2VyLFxuICAgICAgICAgICAgQmlnSW50ZWdlcjogQmlnSW50ZWdlcixcbiAgICAgICAgICAgIFNlY3VyZVJhbmRvbTogU2VjdXJlUmFuZG9tLFxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuanNibiA9IHtcbiAgICAgICAgICBCaWdJbnRlZ2VyOiBCaWdJbnRlZ2VyLFxuICAgICAgICAgIFNlY3VyZVJhbmRvbTogU2VjdXJlUmFuZG9tXG4gICAgICAgIH07XG4gICAgfVxuXG59KS5jYWxsKHRoaXMpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBUaW1lciB9IGZyb20gJy4vVGltZXIuanMnO1xyXG5cclxuY29uc3QgRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gNjA7IC8vIHNlY29uZHNcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJpbmdUaW1lciA9IG5ldyBUaW1lcihcIkFjY2VzcyB0b2tlbiBleHBpcmluZ1wiKSxcclxuICAgICAgICBhY2Nlc3NUb2tlbkV4cGlyZWRUaW1lciA9IG5ldyBUaW1lcihcIkFjY2VzcyB0b2tlbiBleHBpcmVkXCIpXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xyXG5cclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nID0gYWNjZXNzVG9rZW5FeHBpcmluZ1RpbWVyO1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZCA9IGFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoY29udGFpbmVyKSB7XHJcbiAgICAgICAgLy8gb25seSByZWdpc3RlciBldmVudHMgaWYgdGhlcmUncyBhbiBhY2Nlc3MgdG9rZW4gYW5kIGl0IGhhcyBhbiBleHBpcmF0aW9uXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lci5hY2Nlc3NfdG9rZW4gJiYgY29udGFpbmVyLmV4cGlyZXNfaW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSBjb250YWluZXIuZXhwaXJlc19pbjtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQWNjZXNzVG9rZW5FdmVudHMubG9hZDogYWNjZXNzIHRva2VuIHByZXNlbnQsIHJlbWFpbmluZyBkdXJhdGlvbjpcIiwgZHVyYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gb25seSByZWdpc3RlciBleHBpcmluZyBpZiB3ZSBzdGlsbCBoYXZlIHRpbWVcclxuICAgICAgICAgICAgICAgIGxldCBleHBpcmluZyA9IGR1cmF0aW9uIC0gdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhwaXJpbmcgPD0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJpbmcgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiByZWdpc3RlcmluZyBleHBpcmluZyB0aW1lciBpbjpcIiwgZXhwaXJpbmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5pbml0KGV4cGlyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IGNhbmNlbGluZyBleGlzdGluZyBleHBpcmluZyB0aW1lciBiZWNhc2Ugd2UncmUgcGFzdCBleHBpcmF0aW9uLlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgbmVnYXRpdmUsIGl0IHdpbGwgc3RpbGwgZmlyZVxyXG4gICAgICAgICAgICBsZXQgZXhwaXJlZCA9IGR1cmF0aW9uICsgMTtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQWNjZXNzVG9rZW5FdmVudHMubG9hZDogcmVnaXN0ZXJpbmcgZXhwaXJlZCB0aW1lciBpbjpcIiwgZXhwaXJlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5pbml0KGV4cGlyZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bmxvYWQoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiQWNjZXNzVG9rZW5FdmVudHMudW5sb2FkOiBjYW5jZWxpbmcgZXhpc3RpbmcgYWNjZXNzIHRva2VuIHRpbWVyc1wiKTtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmNhbmNlbCgpO1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBY2Nlc3NUb2tlbkV4cGlyaW5nKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJpbmcoY2IpIHtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFjY2Vzc1Rva2VuRXhwaXJlZChjYikge1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJlZChjYikge1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5yZW1vdmVIYW5kbGVyKGNiKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0SW50ZXJ2YWwgPSAyMDAwO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrU2Vzc2lvbklGcmFtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaywgY2xpZW50X2lkLCB1cmwsIGludGVydmFsLCBzdG9wT25FcnJvciA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IGNsaWVudF9pZDtcclxuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBpbnRlcnZhbCB8fCBEZWZhdWx0SW50ZXJ2YWw7XHJcbiAgICAgICAgdGhpcy5fc3RvcE9uRXJyb3IgPSBzdG9wT25FcnJvcjtcclxuXHJcbiAgICAgICAgdmFyIGlkeCA9IHVybC5pbmRleE9mKFwiL1wiLCB1cmwuaW5kZXhPZihcIi8vXCIpICsgMik7XHJcbiAgICAgICAgdGhpcy5fZnJhbWVfb3JpZ2luID0gdXJsLnN1YnN0cigwLCBpZHgpO1xyXG5cclxuICAgICAgICB0aGlzLl9mcmFtZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG5cclxuICAgICAgICAvLyBzaG90Z3VuIGFwcHJvYWNoXHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLndpZHRoID0gMDtcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5oZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9mcmFtZS5zcmMgPSB1cmw7XHJcbiAgICB9XHJcbiAgICBsb2FkKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9mcmFtZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2ZyYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQgPSB0aGlzLl9tZXNzYWdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX21lc3NhZ2UoZSkge1xyXG4gICAgICAgIGlmIChlLm9yaWdpbiA9PT0gdGhpcy5fZnJhbWVfb3JpZ2luICYmXHJcbiAgICAgICAgICAgIGUuc291cmNlID09PSB0aGlzLl9mcmFtZS5jb250ZW50V2luZG93XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEgPT09IFwiZXJyb3JcIikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiQ2hlY2tTZXNzaW9uSUZyYW1lOiBlcnJvciBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RvcE9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLmRhdGEgPT09IFwiY2hhbmdlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJDaGVja1Nlc3Npb25JRnJhbWU6IGNoYW5nZWQgbWVzc2FnZSBmcm9tIGNoZWNrIHNlc3Npb24gb3AgaWZyYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ2hlY2tTZXNzaW9uSUZyYW1lOiBcIiArIGUuZGF0YSArIFwiIG1lc3NhZ2UgZnJvbSBjaGVjayBzZXNzaW9uIG9wIGlmcmFtZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0KHNlc3Npb25fc3RhdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2Vzc2lvbl9zdGF0ZSAhPT0gc2Vzc2lvbl9zdGF0ZSkge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJDaGVja1Nlc3Npb25JRnJhbWUuc3RhcnRcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Nlc3Npb25fc3RhdGUgPSBzZXNzaW9uX3N0YXRlO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHRoaXMuX2NsaWVudF9pZCArIFwiIFwiICsgdGhpcy5fc2Vzc2lvbl9zdGF0ZSwgdGhpcy5fZnJhbWVfb3JpZ2luKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgbm93XHJcbiAgICAgICAgICAgIHNlbmQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFuZCBzZXR1cCB0aW1lclxyXG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbChzZW5kLCB0aGlzLl9pbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5fc2Vzc2lvbl9zdGF0ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl90aW1lcikge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJDaGVja1Nlc3Npb25JRnJhbWUuc3RvcFwiKTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBDb3Jkb3ZhUG9wdXBXaW5kb3cgfSBmcm9tICcuL0NvcmRvdmFQb3B1cFdpbmRvdy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZG92YUlGcmFtZU5hdmlnYXRvciB7XHJcblxyXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcclxuICAgICAgICBwYXJhbXMucG9wdXBXaW5kb3dGZWF0dXJlcyA9ICdoaWRkZW49eWVzJztcclxuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgQ29yZG92YVBvcHVwV2luZG93KHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3B1cCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgQ29yZG92YVBvcHVwV2luZG93IH0gZnJvbSAnLi9Db3Jkb3ZhUG9wdXBXaW5kb3cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvcmRvdmFQb3B1cE5hdmlnYXRvciB7XHJcblxyXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcclxuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgQ29yZG92YVBvcHVwV2luZG93KHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3B1cCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuY29uc3QgRGVmYXVsdFBvcHVwRmVhdHVyZXMgPSAnbG9jYXRpb249bm8sdG9vbGJhcj1ubyx6b29tPW5vJztcclxuY29uc3QgRGVmYXVsdFBvcHVwVGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhUG9wdXBXaW5kb3cge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBwYXJhbXMucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCBEZWZhdWx0UG9wdXBGZWF0dXJlcztcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHBhcmFtcy5wb3B1cFdpbmRvd1RhcmdldCB8fCBEZWZhdWx0UG9wdXBUYXJnZXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdF91cmkgPSBwYXJhbXMuc3RhcnRVcmw7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93LmN0b3I6IHJlZGlyZWN0X3VyaTogXCIgKyB0aGlzLnJlZGlyZWN0X3VyaSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2lzSW5BcHBCcm93c2VySW5zdGFsbGVkKGNvcmRvdmFNZXRhZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBbXCJjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXJcIiwgXCJjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXIuaW5hcHBicm93c2VyXCIsIFwib3JnLmFwYWNoZS5jb3Jkb3ZhLmluYXBwYnJvd3NlclwiXS5zb21lKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3Jkb3ZhTWV0YWRhdGEuaGFzT3duUHJvcGVydHkobmFtZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcclxuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5jb3Jkb3ZhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3IoXCJjb3Jkb3ZhIGlzIHVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY29yZG92YU1ldGFkYXRhID0gd2luZG93LmNvcmRvdmEucmVxdWlyZShcImNvcmRvdmEvcGx1Z2luX2xpc3RcIikubWV0YWRhdGE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0luQXBwQnJvd3Nlckluc3RhbGxlZChjb3Jkb3ZhTWV0YWRhdGEpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKFwiSW5BcHBCcm93c2VyIHBsdWdpbiBub3QgZm91bmRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9wb3B1cCA9IGNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW4ocGFyYW1zLnVybCwgdGhpcy50YXJnZXQsIHRoaXMuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcG9wdXApIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogcG9wdXAgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4aXRDYWxsYmFja0V2ZW50ID0gdGhpcy5fZXhpdENhbGxiYWNrLmJpbmQodGhpcyk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCA9IHRoaXMuX2xvYWRTdGFydENhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJleGl0XCIsIHRoaXMuX2V4aXRDYWxsYmFja0V2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibG9hZHN0YXJ0XCIsIHRoaXMuX2xvYWRTdGFydENhbGxiYWNrRXZlbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiRXJyb3Igb3BlbmluZyBwb3B1cCB3aW5kb3dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvbWlzZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBfbG9hZFN0YXJ0Q2FsbGJhY2soZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudXJsLmluZGV4T2YodGhpcy5yZWRpcmVjdF91cmkpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Y2Nlc3MoeyB1cmw6IGV2ZW50LnVybCB9KTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG4gICAgX2V4aXRDYWxsYmFjayhtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fZXJyb3IobWVzc2FnZSk7ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfc3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJDb3Jkb3ZhUG9wdXBXaW5kb3c6IFN1Y2Nlc3NmdWwgcmVzcG9uc2UgZnJvbSBjb3Jkb3ZhIHBvcHVwIHdpbmRvd1wiKTtcclxuICAgICAgICB0aGlzLl9yZXNvbHZlKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgX2Vycm9yKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcblxyXG4gICAgICAgIExvZy5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLl9yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFudXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwKXtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93OiBjbGVhbmluZyB1cCBwb3B1cFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImV4aXRcIiwgdGhpcy5fZXhpdENhbGxiYWNrRXZlbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRzdGFydFwiLCB0aGlzLl9sb2FkU3RhcnRDYWxsYmFja0V2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BvcHVwID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRXJyb3JSZXNwb25zZSBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHtlcnJvciwgZXJyb3JfZGVzY3JpcHRpb24sIGVycm9yX3VyaSwgc3RhdGUsIHNlc3Npb25fc3RhdGV9PXt9XHJcbiAgICApIHtcclxuICAgICAgICAgaWYgKCFlcnJvcil7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIGVycm9yIHBhc3NlZCB0byBFcnJvclJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1cGVyKGVycm9yX2Rlc2NyaXB0aW9uIHx8IGVycm9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJFcnJvclJlc3BvbnNlXCI7XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcclxuICAgICAgICB0aGlzLmVycm9yX2Rlc2NyaXB0aW9uID0gZXJyb3JfZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5lcnJvcl91cmkgPSBlcnJvcl91cmk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLnNlc3Npb25fc3RhdGUgPSBzZXNzaW9uX3N0YXRlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEhhbmRsZXIoY2IpIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3MucHVzaChjYik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSGFuZGxlcihjYikge1xyXG4gICAgICAgIHZhciBpZHggPSB0aGlzLl9jYWxsYmFja3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gY2IpO1xyXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3Muc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJhaXNlKC4uLnBhcmFtcykge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIkV2ZW50OiBSYWlzaW5nIGV2ZW50OiBcIiArIHRoaXMuX25hbWUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1tpXSguLi5wYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5jb25zdCB0aW1lciA9IHtcclxuICAgIHNldEludGVydmFsOiBmdW5jdGlvbiAoY2IsIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKGNiLCBkdXJhdGlvbik7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJJbnRlcnZhbDogZnVuY3Rpb24gKGhhbmRsZSkge1xyXG4gICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGhhbmRsZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5sZXQgdGVzdGluZyA9IGZhbHNlO1xyXG5sZXQgcmVxdWVzdCA9IG51bGw7XHJcblxyXG5leHBvcnQgY2xhc3MgR2xvYmFsIHtcclxuXHJcbiAgICBzdGF0aWMgX3Rlc3RpbmcoKSB7XHJcbiAgICAgICAgdGVzdGluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBsb2NhdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRlc3RpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGxvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICBpZiAoIXRlc3RpbmcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBzZXNzaW9uU3RvcmFnZSgpIHtcclxuICAgICAgICBpZiAoIXRlc3RpbmcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0WE1MSHR0cFJlcXVlc3QobmV3UmVxdWVzdCkge1xyXG4gICAgICAgIHJlcXVlc3QgPSBuZXdSZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgWE1MSHR0cFJlcXVlc3QoKSB7XHJcbiAgICAgICAgaWYgKCF0ZXN0aW5nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0IHx8IFhNTEh0dHBSZXF1ZXN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IHRpbWVyKCkge1xyXG4gICAgICAgIGlmICghdGVzdGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGltZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgSUZyYW1lV2luZG93IH0gZnJvbSAnLi9JRnJhbWVXaW5kb3cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIElGcmFtZU5hdmlnYXRvciB7XHJcblxyXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcclxuICAgICAgICBsZXQgZnJhbWUgPSBuZXcgSUZyYW1lV2luZG93KHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbGJhY2sodXJsKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lTmF2aWdhdG9yLmNhbGxiYWNrXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBJRnJhbWVXaW5kb3cubm90aWZ5UGFyZW50KHVybCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0VGltZW91dCA9IDEwMDAwO1xyXG5cclxuZXhwb3J0IGNsYXNzIElGcmFtZVdpbmRvdyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQgPSB0aGlzLl9tZXNzYWdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50LCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcblxyXG4gICAgICAgIC8vIHNob3RndW4gYXBwcm9hY2hcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUud2lkdGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2ZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcclxuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lb3V0ID0gcGFyYW1zLnNpbGVudFJlcXVlc3RUaW1lb3V0IHx8IERlZmF1bHRUaW1lb3V0O1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cubmF2aWdhdGU6IFVzaW5nIHRpbWVvdXQgb2Y6XCIsIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuX3RpbWVvdXQuYmluZCh0aGlzKSwgdGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lLnNyYyA9IHBhcmFtcy51cmw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9taXNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9zdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdzogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIGZyYW1lIHdpbmRvd1wiKTtcclxuICAgICAgICB0aGlzLl9yZXNvbHZlKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgX2Vycm9yKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcblxyXG4gICAgICAgIExvZy5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLl9yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFudXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZyYW1lKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdzogY2xlYW51cFwiKTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcclxuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5fZnJhbWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9mcmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3RpbWVvdXQoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93LnRpbWVvdXRcIik7XHJcbiAgICAgICAgdGhpcy5fZXJyb3IoXCJGcmFtZSB3aW5kb3cgdGltZWQgb3V0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9tZXNzYWdlKGUpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cubWVzc2FnZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVyICYmXHJcbiAgICAgICAgICAgIGUub3JpZ2luID09PSB0aGlzLl9vcmlnaW4gJiZcclxuICAgICAgICAgICAgZS5zb3VyY2UgPT09IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3dcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IGUuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3VjY2Vzcyh7IHVybDogdXJsIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIGZyb20gZnJhbWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9vcmlnaW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm90aWZ5UGFyZW50KHVybCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnRcIik7XHJcbiAgICAgICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93Lm5vdGlmeVBhcmVudDogcG9zdGluZyB1cmwgbWVzc2FnZSB0byBwYXJlbnRcIik7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdQb3N0aW5nIG1lc3NhZ2UgdG8gcGFyZW50IFwiJyArIHVybCArICdcIiBhdCBsb2NhdGlvbjogXCInICsgbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0ICsgJ1wiJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UodXJsLCBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlXZWJTdG9yYWdle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShrZXkpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2UuZ2V0SXRlbVwiLCBrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXRlbShrZXksIHZhbHVlKXtcclxuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2Uuc2V0SXRlbVwiLCBrZXkpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW0oa2V5KXtcclxuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2UucmVtb3ZlSXRlbVwiLCBrZXkpO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9kYXRhW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fZGF0YSkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGtleShpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLl9kYXRhKVtpbmRleF07XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Sm9zZVV0aWwoeyBqd3MsIEtleVV0aWwsIFg1MDksIGNyeXB0bywgaGV4dG9iNjR1LCBiNjR0b2hleCwgQWxsb3dlZFNpZ25pbmdBbGdzIH0pIHtcclxuICAgIHJldHVybiBjbGFzcyBKb3NlVXRpbCB7XHJcblxyXG4gICAgICAgIHN0YXRpYyBwYXJzZUp3dChqd3QpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwucGFyc2VKd3RcIik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBqd3MuSldTLnBhcnNlKGp3dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogdG9rZW4uaGVhZGVyT2JqLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHRva2VuLnBheWxvYWRPYmpcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgdmFsaWRhdGVKd3Qoand0LCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93LCB0aW1lSW5zZW5zaXRpdmUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwudmFsaWRhdGVKd3RcIik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleS5rdHkgPT09IFwiUlNBXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmUgJiYga2V5Lm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gS2V5VXRpbC5nZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleS54NWMgJiYga2V5Lng1Yy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhleCA9IGI2NHRvaGV4KGtleS54NWNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBYNTA5LmdldFB1YmxpY0tleUZyb21DZXJ0SGV4KGhleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwudmFsaWRhdGVKd3Q6IFJTQSBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIiwga2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlJTQSBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Lmt0eSA9PT0gXCJFQ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5jcnYgJiYga2V5LnggJiYga2V5LnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gS2V5VXRpbC5nZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC52YWxpZGF0ZUp3dDogRUMga2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIsIGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJFQyBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwudmFsaWRhdGVKd3Q6IFVuc3VwcG9ydGVkIGtleSB0eXBlXCIsIGtleSAmJiBrZXkua3R5KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQga2V5IHR5cGU6IFwiICsga2V5ICYmIGtleS5rdHkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSm9zZVV0aWwuX3ZhbGlkYXRlSnd0KGp3dCwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUgJiYgZS5tZXNzYWdlIHx8IGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiSldUIHZhbGlkYXRpb24gZmFpbGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgdmFsaWRhdGVKd3RBdHRyaWJ1dGVzKGp3dCwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3LCBub3csIHRpbWVJbnNlbnNpdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAoIWNsb2NrU2tldykge1xyXG4gICAgICAgICAgICAgICAgY2xvY2tTa2V3ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFub3cpIHtcclxuICAgICAgICAgICAgICAgIG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBKb3NlVXRpbC5wYXJzZUp3dChqd3QpLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuaXNzKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGlzc3VlciB3YXMgbm90IHByb3ZpZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImlzc3VlciB3YXMgbm90IHByb3ZpZGVkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGF5bG9hZC5pc3MgIT09IGlzc3Vlcikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBJbnZhbGlkIGlzc3VlciBpbiB0b2tlblwiLCBwYXlsb2FkLmlzcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBpc3N1ZXIgaW4gdG9rZW46IFwiICsgcGF5bG9hZC5pc3MpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmF1ZCkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBhdWQgd2FzIG5vdCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhdWQgd2FzIG5vdCBwcm92aWRlZFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZhbGlkQXVkaWVuY2UgPSBwYXlsb2FkLmF1ZCA9PT0gYXVkaWVuY2UgfHwgKEFycmF5LmlzQXJyYXkocGF5bG9hZC5hdWQpICYmIHBheWxvYWQuYXVkLmluZGV4T2YoYXVkaWVuY2UpID49IDApO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkQXVkaWVuY2UpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBhdWRpZW5jZSBpbiB0b2tlblwiLCBwYXlsb2FkLmF1ZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBhdWRpZW5jZSBpbiB0b2tlbjogXCIgKyBwYXlsb2FkLmF1ZCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmF6cCAmJiBwYXlsb2FkLmF6cCAhPT0gYXVkaWVuY2UpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBhenAgaW4gdG9rZW5cIiwgcGF5bG9hZC5henApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgYXpwIGluIHRva2VuOiBcIiArIHBheWxvYWQuYXpwKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGltZUluc2Vuc2l0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG93ZXJOb3cgPSBub3cgKyBjbG9ja1NrZXc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXBwZXJOb3cgPSBub3cgLSBjbG9ja1NrZXc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmlhdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogaWF0IHdhcyBub3QgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImlhdCB3YXMgbm90IHByb3ZpZGVkXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsb3dlck5vdyA8IHBheWxvYWQuaWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBpYXQgaXMgaW4gdGhlIGZ1dHVyZVwiLCBwYXlsb2FkLmlhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImlhdCBpcyBpbiB0aGUgZnV0dXJlOiBcIiArIHBheWxvYWQuaWF0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQubmJmICYmIGxvd2VyTm93IDwgcGF5bG9hZC5uYmYpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IG5iZiBpcyBpbiB0aGUgZnV0dXJlXCIsIHBheWxvYWQubmJmKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwibmJmIGlzIGluIHRoZSBmdXR1cmU6IFwiICsgcGF5bG9hZC5uYmYpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBheWxvYWQuZXhwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBleHAgd2FzIG5vdCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiZXhwIHdhcyBub3QgcHJvdmlkZWRcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuZXhwIDwgdXBwZXJOb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGV4cCBpcyBpbiB0aGUgcGFzdFwiLCBwYXlsb2FkLmV4cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImV4cCBpcyBpbiB0aGUgcGFzdDpcIiArIHBheWxvYWQuZXhwKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgX3ZhbGlkYXRlSnd0KGp3dCwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gSm9zZVV0aWwudmFsaWRhdGVKd3RBdHRyaWJ1dGVzKGp3dCwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3LCBub3csIHRpbWVJbnNlbnNpdGl2ZSkudGhlbihwYXlsb2FkID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqd3MuSldTLnZlcmlmeShqd3QsIGtleSwgQWxsb3dlZFNpZ25pbmdBbGdzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IHNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF5bG9hZDtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoZSAmJiBlLm1lc3NhZ2UgfHwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGhhc2hTdHJpbmcodmFsdWUsIGFsZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5VdGlsLmhhc2hTdHJpbmcodmFsdWUsIGFsZyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGhleFRvQmFzZTY0VXJsKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGV4dG9iNjR1KHZhbHVlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGp3cywgS2V5VXRpbCwgWDUwOSwgY3J5cHRvLCBoZXh0b2I2NHUsIGI2NHRvaGV4LCBBbGxvd2VkU2lnbmluZ0FsZ3MgfSBmcm9tICcuL2NyeXB0by9yc2EnO1xyXG5pbXBvcnQgZ2V0Sm9zZVV0aWwgZnJvbSAnLi9Kb3NlVXRpbEltcGwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEpvc2VVdGlsID0gZ2V0Sm9zZVV0aWwoeyBqd3MsIEtleVV0aWwsIFg1MDksIGNyeXB0bywgaGV4dG9iNjR1LCBiNjR0b2hleCwgQWxsb3dlZFNpZ25pbmdBbGdzIH0pO1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBKc29uU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBhZGRpdGlvbmFsQ29udGVudFR5cGVzID0gbnVsbCwgXHJcbiAgICAgICAgWE1MSHR0cFJlcXVlc3RDdG9yID0gR2xvYmFsLlhNTEh0dHBSZXF1ZXN0LCBcclxuICAgICAgICBqd3RIYW5kbGVyID0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxDb250ZW50VHlwZXMgJiYgQXJyYXkuaXNBcnJheShhZGRpdGlvbmFsQ29udGVudFR5cGVzKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcyA9IGFkZGl0aW9uYWxDb250ZW50VHlwZXMuc2xpY2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGVudFR5cGVzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcy5wdXNoKCdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgaWYgKGp3dEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGVudFR5cGVzLnB1c2goJ2FwcGxpY2F0aW9uL2p3dCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fWE1MSHR0cFJlcXVlc3QgPSBYTUxIdHRwUmVxdWVzdEN0b3I7XHJcbiAgICAgICAgdGhpcy5fand0SGFuZGxlciA9IGp3dEhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SnNvbih1cmwsIHRva2VuKSB7XHJcbiAgICAgICAgaWYgKCF1cmwpe1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5nZXRKc29uOiBObyB1cmwgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5nZXRKc29uLCB1cmw6IFwiLCB1cmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyB0aGlzLl9YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXEub3BlbignR0VUJywgdXJsKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhbGxvd2VkQ29udGVudFR5cGVzID0gdGhpcy5fY29udGVudFR5cGVzO1xyXG4gICAgICAgICAgICB2YXIgand0SGFuZGxlciA9IHRoaXMuX2p3dEhhbmRsZXI7XHJcblxyXG4gICAgICAgICAgICByZXEub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5nZXRKc29uOiBIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgcmVxLnN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQgPT0gXCJhcHBsaWNhdGlvbi9qd3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgand0SGFuZGxlcihyZXEpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5nZXRKc29uOiBFcnJvciBwYXJzaW5nIEpTT04gcmVzcG9uc2VcIiwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIENvbnRlbnQtVHlwZTogXCIgKyBjb250ZW50VHlwZSArIFwiLCBmcm9tIFVSTDogXCIgKyB1cmwpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihyZXEuc3RhdHVzVGV4dCArIFwiIChcIiArIHJlcS5zdGF0dXMgKyBcIilcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLmdldEpzb246IG5ldHdvcmsgZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiSnNvblNlcnZpY2UuZ2V0SnNvbjogdG9rZW4gcGFzc2VkLCBzZXR0aW5nIEF1dGhvcml6YXRpb24gaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgdG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXEuc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RGb3JtKHVybCwgcGF5bG9hZCkge1xyXG4gICAgICAgIGlmICghdXJsKXtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IE5vIHVybCBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLnBvc3RGb3JtLCB1cmw6IFwiLCB1cmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyB0aGlzLl9YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXEub3BlbignUE9TVCcsIHVybCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWxsb3dlZENvbnRlbnRUeXBlcyA9IHRoaXMuX2NvbnRlbnRUeXBlcztcclxuXHJcbiAgICAgICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgcmVxLnN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBFcnJvciBwYXJzaW5nIEpTT04gcmVzcG9uc2VcIiwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIENvbnRlbnQtVHlwZTogXCIgKyBjb250ZW50VHlwZSArIFwiLCBmcm9tIFVSTDogXCIgKyB1cmwpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDQwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkICYmIHBheWxvYWQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IEVycm9yIGZyb20gc2VydmVyOiBcIiwgcGF5bG9hZC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocGF5bG9hZC5lcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogRXJyb3IgcGFyc2luZyBKU09OIHJlc3BvbnNlXCIsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IocmVxLnN0YXR1c1RleHQgKyBcIiAoXCIgKyByZXEuc3RhdHVzICsgXCIpXCIpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogbmV0d29yayBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiBwYXlsb2FkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGF5bG9hZFtrZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9keS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gXCImXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gXCI9XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAgICAgcmVxLnNlbmQoYm9keSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxubGV0IG5vcExvZ2dlciA9IHtcclxuICAgIGRlYnVnKCl7fSxcclxuICAgIGluZm8oKXt9LFxyXG4gICAgd2Fybigpe30sXHJcbiAgICBlcnJvcigpe31cclxufTtcclxuXHJcbmNvbnN0IE5PTkUgPSAwO1xyXG5jb25zdCBFUlJPUiA9IDE7XHJcbmNvbnN0IFdBUk4gPSAyO1xyXG5jb25zdCBJTkZPID0gMztcclxuY29uc3QgREVCVUcgPSA0O1xyXG5cclxubGV0IGxvZ2dlcjtcclxubGV0IGxldmVsO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZyB7XHJcbiAgICBzdGF0aWMgZ2V0IE5PTkUoKSB7cmV0dXJuIE5PTkV9O1xyXG4gICAgc3RhdGljIGdldCBFUlJPUigpIHtyZXR1cm4gRVJST1J9O1xyXG4gICAgc3RhdGljIGdldCBXQVJOKCkge3JldHVybiBXQVJOfTtcclxuICAgIHN0YXRpYyBnZXQgSU5GTygpIHtyZXR1cm4gSU5GT307XHJcbiAgICBzdGF0aWMgZ2V0IERFQlVHKCkge3JldHVybiBERUJVR307XHJcbiAgICBcclxuICAgIHN0YXRpYyByZXNldCgpe1xyXG4gICAgICAgIGxldmVsID0gSU5GTztcclxuICAgICAgICBsb2dnZXIgPSBub3BMb2dnZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXQgbGV2ZWwoKXtcclxuICAgICAgICByZXR1cm4gbGV2ZWw7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0IGxldmVsKHZhbHVlKXtcclxuICAgICAgICBpZiAoTk9ORSA8PSB2YWx1ZSAmJiB2YWx1ZSA8PSBERUJVRyl7XHJcbiAgICAgICAgICAgIGxldmVsID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvZyBsZXZlbFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXQgbG9nZ2VyKCl7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2dlcjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXQgbG9nZ2VyKHZhbHVlKXtcclxuICAgICAgICBpZiAoIXZhbHVlLmRlYnVnICYmIHZhbHVlLmluZm8pIHtcclxuICAgICAgICAgICAgLy8ganVzdCB0byBzdGF5IGJhY2t3YXJkcyBjb21wYXQuIGNhbiByZW1vdmUgaW4gMi4wXHJcbiAgICAgICAgICAgIHZhbHVlLmRlYnVnID0gdmFsdWUuaW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZS5kZWJ1ZyAmJiB2YWx1ZS5pbmZvICYmIHZhbHVlLndhcm4gJiYgdmFsdWUuZXJyb3Ipe1xyXG4gICAgICAgICAgICBsb2dnZXIgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9nZ2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGRlYnVnKC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmIChsZXZlbCA+PSBERUJVRyl7XHJcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zy5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBpbmZvKC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmIChsZXZlbCA+PSBJTkZPKXtcclxuICAgICAgICAgICAgbG9nZ2VyLmluZm8uYXBwbHkobG9nZ2VyLCBBcnJheS5mcm9tKGFyZ3MpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgd2FybiguLi5hcmdzKXtcclxuICAgICAgICBpZiAobGV2ZWwgPj0gV0FSTil7XHJcbiAgICAgICAgICAgIGxvZ2dlci53YXJuLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGVycm9yKC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmIChsZXZlbCA+PSBFUlJPUil7XHJcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvci5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuTG9nLnJlc2V0KCk7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgSnNvblNlcnZpY2UgfSBmcm9tICcuL0pzb25TZXJ2aWNlLmpzJztcclxuXHJcbmNvbnN0IE9pZGNNZXRhZGF0YVVybFBhdGggPSAnLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgSnNvblNlcnZpY2VDdG9yID0gSnNvblNlcnZpY2UpIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZTogTm8gc2V0dGluZ3MgcGFzc2VkIHRvIE1ldGFkYXRhU2VydmljZVwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0dGluZ3NcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgICAgIHRoaXMuX2pzb25TZXJ2aWNlID0gbmV3IEpzb25TZXJ2aWNlQ3RvcihbJ2FwcGxpY2F0aW9uL2p3ay1zZXQranNvbiddKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWV0YWRhdGFVcmwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9tZXRhZGF0YVVybCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubWV0YWRhdGFVcmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5fc2V0dGluZ3MubWV0YWRhdGFVcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmwgJiYgdGhpcy5fbWV0YWRhdGFVcmwuaW5kZXhPZihPaWRjTWV0YWRhdGFVcmxQYXRoKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmxbdGhpcy5fbWV0YWRhdGFVcmwubGVuZ3RoIC0gMV0gIT09ICcvJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCArPSAnLyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9IE9pZGNNZXRhZGF0YVVybFBhdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVVybDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRhZGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhOiBSZXR1cm5pbmcgbWV0YWRhdGEgZnJvbSBzZXR0aW5nc1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMubWV0YWRhdGFVcmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhOiBObyBhdXRob3JpdHkgb3IgbWV0YWRhdGFVcmwgY29uZmlndXJlZCBvbiBzZXR0aW5nc1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGF1dGhvcml0eSBvciBtZXRhZGF0YVVybCBjb25maWd1cmVkIG9uIHNldHRpbmdzXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YTogZ2V0dGluZyBtZXRhZGF0YSBmcm9tXCIsIHRoaXMubWV0YWRhdGFVcmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih0aGlzLm1ldGFkYXRhVXJsKVxyXG4gICAgICAgICAgICAudGhlbihtZXRhZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGE6IGpzb24gcmVjZWl2ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJc3N1ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJpc3N1ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiYXV0aG9yaXphdGlvbl9lbmRwb2ludFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VySW5mb0VuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwidXNlcmluZm9fZW5kcG9pbnRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW5FbmRwb2ludChvcHRpb25hbD10cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJ0b2tlbl9lbmRwb2ludFwiLCBvcHRpb25hbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hlY2tTZXNzaW9uSWZyYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiY2hlY2tfc2Vzc2lvbl9pZnJhbWVcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW5kU2Vzc2lvbkVuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiZW5kX3Nlc3Npb25fZW5kcG9pbnRcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmV2b2NhdGlvbkVuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwicmV2b2NhdGlvbl9lbmRwb2ludFwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRLZXlzRW5kcG9pbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJqd2tzX3VyaVwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0TWV0YWRhdGFQcm9wZXJ0eShuYW1lLCBvcHRpb25hbD1mYWxzZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5IGZvcjogXCIgKyBuYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWV0YWRhdGEoKS50aGVuKG1ldGFkYXRhID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhUHJvcGVydHk6IG1ldGFkYXRhIHJlY2lldmVkXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1ldGFkYXRhW25hbWVdID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5OiBNZXRhZGF0YSBkb2VzIG5vdCBjb250YWluIG9wdGlvbmFsIHByb3BlcnR5IFwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5OiBNZXRhZGF0YSBkb2VzIG5vdCBjb250YWluIHByb3BlcnR5IFwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0YWRhdGEgZG9lcyBub3QgY29udGFpbiBwcm9wZXJ0eSBcIiArIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWV0YWRhdGFbbmFtZV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2lnbmluZ0tleXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czogUmV0dXJuaW5nIHNpZ25pbmdLZXlzIGZyb20gc2V0dGluZ3NcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJqd2tzX3VyaVwiKS50aGVuKGp3a3NfdXJpID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBqd2tzX3VyaSByZWNlaXZlZFwiLCBqd2tzX3VyaSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbihqd2tzX3VyaSkudGhlbihrZXlTZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBrZXkgc2V0IHJlY2VpdmVkXCIsIGtleVNldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFrZXlTZXQua2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czogTWlzc2luZyBrZXlzIG9uIGtleXNldFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGtleXMgb24ga2V5c2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzID0ga2V5U2V0LmtleXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudFNldHRpbmdzIH0gZnJvbSAnLi9PaWRjQ2xpZW50U2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi9FcnJvclJlc3BvbnNlLmpzJztcclxuaW1wb3J0IHsgU2lnbmluUmVxdWVzdCB9IGZyb20gJy4vU2lnbmluUmVxdWVzdC5qcyc7XHJcbmltcG9ydCB7IFNpZ25pblJlc3BvbnNlIH0gZnJvbSAnLi9TaWduaW5SZXNwb25zZS5qcyc7XHJcbmltcG9ydCB7IFNpZ25vdXRSZXF1ZXN0IH0gZnJvbSAnLi9TaWdub3V0UmVxdWVzdC5qcyc7XHJcbmltcG9ydCB7IFNpZ25vdXRSZXNwb25zZSB9IGZyb20gJy4vU2lnbm91dFJlc3BvbnNlLmpzJztcclxuaW1wb3J0IHsgU2lnbmluU3RhdGUgfSBmcm9tICcuL1NpZ25pblN0YXRlLmpzJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1N0YXRlLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBPaWRjQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzID0ge30pIHtcclxuICAgICAgICBpZiAoc2V0dGluZ3MgaW5zdGFuY2VvZiBPaWRjQ2xpZW50U2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzID0gbmV3IE9pZGNDbGllbnRTZXR0aW5ncyhzZXR0aW5ncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBfc3RhdGVTdG9yZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5zdGF0ZVN0b3JlO1xyXG4gICAgfVxyXG4gICAgZ2V0IF92YWxpZGF0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudmFsaWRhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9tZXRhZGF0YVNlcnZpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubWV0YWRhdGFTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZXR0aW5ncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICBnZXQgbWV0YWRhdGFTZXJ2aWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2lnbmluUmVxdWVzdCh7XHJcbiAgICAgICAgcmVzcG9uc2VfdHlwZSwgc2NvcGUsIHJlZGlyZWN0X3VyaSxcclxuICAgICAgICAvLyBkYXRhIHdhcyBtZWFudCB0byBiZSB0aGUgcGxhY2UgYSBjYWxsZXIgY291bGQgaW5kaWNhdGUgdGhlIGRhdGEgdG9cclxuICAgICAgICAvLyBoYXZlIHJvdW5kIHRyaXBwZWQsIGJ1dCBwZW9wbGUgd2VyZSBnZXR0aW5nIGNvbmZ1c2VkLCBzbyBpIGFkZGVkIHN0YXRlIChzaW5jZSB0aGF0IG1hdGNoZXMgdGhlIHNwZWMpXHJcbiAgICAgICAgLy8gYW5kIHNvIG5vdyBpZiBkYXRhIGlzIG5vdCBwYXNzZWQsIGJ1dCBzdGF0ZSBpcyB0aGVuIHN0YXRlIHdpbGwgYmUgdXNlZFxyXG4gICAgICAgIGRhdGEsIHN0YXRlLCBwcm9tcHQsIGRpc3BsYXksIG1heF9hZ2UsIHVpX2xvY2FsZXMsIGlkX3Rva2VuX2hpbnQsIGxvZ2luX2hpbnQsIGFjcl92YWx1ZXMsXHJcbiAgICAgICAgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCByZXNwb25zZV9tb2RlLCBleHRyYVF1ZXJ5UGFyYW1zLCBleHRyYVRva2VuUGFyYW1zLCByZXF1ZXN0X3R5cGUsIHNraXBVc2VySW5mbyB9ID0ge30sXHJcbiAgICAgICAgc3RhdGVTdG9yZVxyXG4gICAgKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWduaW5SZXF1ZXN0XCIpO1xyXG5cclxuICAgICAgICBsZXQgY2xpZW50X2lkID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xyXG4gICAgICAgIHJlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlIHx8IHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX3R5cGU7XHJcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzLl9zZXR0aW5ncy5zY29wZTtcclxuICAgICAgICByZWRpcmVjdF91cmkgPSByZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xyXG5cclxuICAgICAgICAvLyBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50IGFyZW4ndCBhbGxvd2VkIG9uIF9zZXR0aW5nc1xyXG4gICAgICAgIHByb21wdCA9IHByb21wdCB8fCB0aGlzLl9zZXR0aW5ncy5wcm9tcHQ7XHJcbiAgICAgICAgZGlzcGxheSA9IGRpc3BsYXkgfHwgdGhpcy5fc2V0dGluZ3MuZGlzcGxheTtcclxuICAgICAgICBtYXhfYWdlID0gbWF4X2FnZSB8fCB0aGlzLl9zZXR0aW5ncy5tYXhfYWdlO1xyXG4gICAgICAgIHVpX2xvY2FsZXMgPSB1aV9sb2NhbGVzIHx8IHRoaXMuX3NldHRpbmdzLnVpX2xvY2FsZXM7XHJcbiAgICAgICAgYWNyX3ZhbHVlcyA9IGFjcl92YWx1ZXMgfHwgdGhpcy5fc2V0dGluZ3MuYWNyX3ZhbHVlcztcclxuICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlIHx8IHRoaXMuX3NldHRpbmdzLnJlc291cmNlO1xyXG4gICAgICAgIHJlc3BvbnNlX21vZGUgPSByZXNwb25zZV9tb2RlIHx8IHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX21vZGU7XHJcbiAgICAgICAgZXh0cmFRdWVyeVBhcmFtcyA9IGV4dHJhUXVlcnlQYXJhbXMgfHwgdGhpcy5fc2V0dGluZ3MuZXh0cmFRdWVyeVBhcmFtcztcclxuICAgICAgICBleHRyYVRva2VuUGFyYW1zID0gZXh0cmFUb2tlblBhcmFtcyB8fCB0aGlzLl9zZXR0aW5ncy5leHRyYVRva2VuUGFyYW1zO1xyXG5cclxuICAgICAgICBsZXQgYXV0aG9yaXR5ID0gdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5O1xyXG5cclxuICAgICAgICBpZiAoU2lnbmluUmVxdWVzdC5pc0NvZGUocmVzcG9uc2VfdHlwZSkgJiYgcmVzcG9uc2VfdHlwZSAhPT0gXCJjb2RlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk9wZW5JRCBDb25uZWN0IGh5YnJpZCBmbG93IGlzIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRBdXRob3JpemF0aW9uRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbmluUmVxdWVzdDogUmVjZWl2ZWQgYXV0aG9yaXphdGlvbiBlbmRwb2ludFwiLCB1cmwpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNpZ25pblJlcXVlc3QgPSBuZXcgU2lnbmluUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRfaWQsXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdF91cmksXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZV90eXBlLFxyXG4gICAgICAgICAgICAgICAgc2NvcGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhIHx8IHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5LFxyXG4gICAgICAgICAgICAgICAgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50LCBhY3JfdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCBleHRyYVF1ZXJ5UGFyYW1zLCBleHRyYVRva2VuUGFyYW1zLCByZXF1ZXN0X3R5cGUsIHJlc3BvbnNlX21vZGUsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfc2VjcmV0LFxyXG4gICAgICAgICAgICAgICAgc2tpcFVzZXJJbmZvXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNpZ25pblN0YXRlID0gc2lnbmluUmVxdWVzdC5zdGF0ZTtcclxuICAgICAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVN0b3JlLnNldChzaWduaW5TdGF0ZS5pZCwgc2lnbmluU3RhdGUudG9TdG9yYWdlU3RyaW5nKCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpZ25pblJlcXVlc3Q7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRTaWduaW5SZXNwb25zZVN0YXRlKHVybCwgc3RhdGVTdG9yZSwgcmVtb3ZlU3RhdGUgPSBmYWxzZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucmVhZFNpZ25pblJlc3BvbnNlU3RhdGVcIik7XHJcblxyXG4gICAgICAgIGxldCB1c2VRdWVyeSA9IHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX21vZGUgPT09IFwicXVlcnlcIiB8fCBcclxuICAgICAgICAgICAgKCF0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV9tb2RlICYmIFNpZ25pblJlcXVlc3QuaXNDb2RlKHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX3R5cGUpKTtcclxuICAgICAgICBsZXQgZGVsaW1pdGVyID0gdXNlUXVlcnkgPyBcIj9cIiA6IFwiI1wiO1xyXG5cclxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBuZXcgU2lnbmluUmVzcG9uc2UodXJsLCBkZWxpbWl0ZXIpO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnQucmVhZFNpZ25pblJlc3BvbnNlU3RhdGU6IE5vIHN0YXRlIGluIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc3RhdGUgaW4gcmVzcG9uc2VcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcclxuXHJcbiAgICAgICAgdmFyIHN0YXRlQXBpID0gcmVtb3ZlU3RhdGUgPyBzdGF0ZVN0b3JlLnJlbW92ZS5iaW5kKHN0YXRlU3RvcmUpIDogc3RhdGVTdG9yZS5nZXQuYmluZChzdGF0ZVN0b3JlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlQXBpKHJlc3BvbnNlLnN0YXRlKS50aGVuKHN0b3JlZFN0YXRlU3RyaW5nID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzdG9yZWRTdGF0ZVN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZTogTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG1hdGNoaW5nIHN0YXRlIGZvdW5kIGluIHN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IFNpZ25pblN0YXRlLmZyb21TdG9yYWdlU3RyaW5nKHN0b3JlZFN0YXRlU3RyaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZSwgcmVzcG9uc2V9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwsIHN0YXRlU3RvcmUpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnByb2Nlc3NTaWduaW5SZXNwb25zZVwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFNpZ25pblJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCB0cnVlKS50aGVuKCh7c3RhdGUsIHJlc3BvbnNlfSkgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnByb2Nlc3NTaWduaW5SZXNwb25zZTogUmVjZWl2ZWQgc3RhdGUgZnJvbSBzdG9yYWdlOyB2YWxpZGF0aW5nIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTaWdub3V0UmVxdWVzdCh7aWRfdG9rZW5faGludCwgZGF0YSwgc3RhdGUsIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSwgZXh0cmFRdWVyeVBhcmFtcywgcmVxdWVzdF90eXBlIH0gPSB7fSxcclxuICAgICAgICBzdGF0ZVN0b3JlXHJcbiAgICApIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25vdXRSZXF1ZXN0XCIpO1xyXG5cclxuICAgICAgICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIGV4dHJhUXVlcnlQYXJhbXMgPSBleHRyYVF1ZXJ5UGFyYW1zIHx8IHRoaXMuX3NldHRpbmdzLmV4dHJhUXVlcnlQYXJhbXM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0RW5kU2Vzc2lvbkVuZHBvaW50KCkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogTm8gZW5kIHNlc3Npb24gZW5kcG9pbnQgdXJsIHJldHVybmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm8gZW5kIHNlc3Npb24gZW5kcG9pbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbm91dFJlcXVlc3Q6IFJlY2VpdmVkIGVuZCBzZXNzaW9uIGVuZHBvaW50XCIsIHVybCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBTaWdub3V0UmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICBpZF90b2tlbl9oaW50LFxyXG4gICAgICAgICAgICAgICAgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSB8fCBzdGF0ZSxcclxuICAgICAgICAgICAgICAgIGV4dHJhUXVlcnlQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0X3R5cGVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2lnbm91dFN0YXRlID0gcmVxdWVzdC5zdGF0ZTtcclxuICAgICAgICAgICAgaWYgKHNpZ25vdXRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogU2lnbm91dCByZXF1ZXN0IGhhcyBzdGF0ZSB0byBwZXJzaXN0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZVN0b3JlLnNldChzaWdub3V0U3RhdGUuaWQsIHNpZ25vdXRTdGF0ZS50b1N0b3JhZ2VTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSh1cmwsIHN0YXRlU3RvcmUsIHJlbW92ZVN0YXRlID0gZmFsc2UpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZVwiKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gbmV3IFNpZ25vdXRSZXNwb25zZSh1cmwpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uuc3RhdGUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGU6IE5vIHN0YXRlIGluIHJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cud2FybihcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlOiBSZXNwb25zZSB3YXMgZXJyb3I6IFwiLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yUmVzcG9uc2UocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c3RhdGU6IHVuZGVmaW5lZCwgcmVzcG9uc2V9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzdGF0ZUtleSA9IHJlc3BvbnNlLnN0YXRlO1xyXG5cclxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xyXG5cclxuICAgICAgICB2YXIgc3RhdGVBcGkgPSByZW1vdmVTdGF0ZSA/IHN0YXRlU3RvcmUucmVtb3ZlLmJpbmQoc3RhdGVTdG9yZSkgOiBzdGF0ZVN0b3JlLmdldC5iaW5kKHN0YXRlU3RvcmUpO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZUFwaShzdGF0ZUtleSkudGhlbihzdG9yZWRTdGF0ZVN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3RvcmVkU3RhdGVTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlOiBObyBtYXRjaGluZyBzdGF0ZSBmb3VuZCBpbiBzdG9yYWdlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmVkU3RhdGVTdHJpbmcpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZSwgcmVzcG9uc2V9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsLCBzdGF0ZVN0b3JlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCB0cnVlKS50aGVuKCh7c3RhdGUsIHJlc3BvbnNlfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25vdXRSZXNwb25zZTogUmVjZWl2ZWQgc3RhdGUgZnJvbSBzdG9yYWdlOyB2YWxpZGF0aW5nIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlOiBObyBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHNraXBwaW5nIHZhbGlkYXRpbmcgcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclN0YWxlU3RhdGUoc3RhdGVTdG9yZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY2xlYXJTdGFsZVN0YXRlXCIpO1xyXG5cclxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xyXG5cclxuICAgICAgICByZXR1cm4gU3RhdGUuY2xlYXJTdGFsZVN0YXRlKHN0YXRlU3RvcmUsIHRoaXMuc2V0dGluZ3Muc3RhbGVTdGF0ZUFnZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJy4vV2ViU3RvcmFnZVN0YXRlU3RvcmUuanMnO1xyXG5pbXBvcnQgeyBSZXNwb25zZVZhbGlkYXRvciB9IGZyb20gJy4vUmVzcG9uc2VWYWxpZGF0b3IuanMnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL01ldGFkYXRhU2VydmljZS5qcyc7XHJcblxyXG5jb25zdCBPaWRjTWV0YWRhdGFVcmxQYXRoID0gJy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uJztcclxuXHJcbmNvbnN0IERlZmF1bHRSZXNwb25zZVR5cGUgPSBcImlkX3Rva2VuXCI7XHJcbmNvbnN0IERlZmF1bHRTY29wZSA9IFwib3BlbmlkXCI7XHJcbmNvbnN0IERlZmF1bHRTdGFsZVN0YXRlQWdlID0gNjAgKiAxNTsgLy8gc2Vjb25kc1xyXG5jb25zdCBEZWZhdWx0Q2xvY2tTa2V3SW5TZWNvbmRzID0gNjAgKiA1O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9pZGNDbGllbnRTZXR0aW5ncyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgLy8gbWV0YWRhdGEgcmVsYXRlZFxyXG4gICAgICAgIGF1dGhvcml0eSwgbWV0YWRhdGFVcmwsIG1ldGFkYXRhLCBzaWduaW5nS2V5cyxcclxuICAgICAgICAvLyBjbGllbnQgcmVsYXRlZFxyXG4gICAgICAgIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgcmVzcG9uc2VfdHlwZSA9IERlZmF1bHRSZXNwb25zZVR5cGUsIHNjb3BlID0gRGVmYXVsdFNjb3BlLFxyXG4gICAgICAgIHJlZGlyZWN0X3VyaSwgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxyXG4gICAgICAgIC8vIG9wdGlvbmFsIHByb3RvY29sXHJcbiAgICAgICAgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBhY3JfdmFsdWVzLCByZXNvdXJjZSwgcmVzcG9uc2VfbW9kZSxcclxuICAgICAgICAvLyBiZWhhdmlvciBmbGFnc1xyXG4gICAgICAgIGZpbHRlclByb3RvY29sQ2xhaW1zID0gdHJ1ZSwgbG9hZFVzZXJJbmZvID0gdHJ1ZSxcclxuICAgICAgICBzdGFsZVN0YXRlQWdlID0gRGVmYXVsdFN0YWxlU3RhdGVBZ2UsIGNsb2NrU2tldyA9IERlZmF1bHRDbG9ja1NrZXdJblNlY29uZHMsXHJcbiAgICAgICAgdXNlckluZm9Kd3RJc3N1ZXIgPSAnT1AnLFxyXG4gICAgICAgIC8vIG90aGVyIGJlaGF2aW9yXHJcbiAgICAgICAgc3RhdGVTdG9yZSA9IG5ldyBXZWJTdG9yYWdlU3RhdGVTdG9yZSgpLFxyXG4gICAgICAgIFJlc3BvbnNlVmFsaWRhdG9yQ3RvciA9IFJlc3BvbnNlVmFsaWRhdG9yLFxyXG4gICAgICAgIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2UsXHJcbiAgICAgICAgLy8gZXh0cmEgcXVlcnkgcGFyYW1zXHJcbiAgICAgICAgZXh0cmFRdWVyeVBhcmFtcyA9IHt9LFxyXG4gICAgICAgIGV4dHJhVG9rZW5QYXJhbXMgPSB7fVxyXG4gICAgfSA9IHt9KSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2F1dGhvcml0eSA9IGF1dGhvcml0eTtcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IG1ldGFkYXRhVXJsO1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhID0gbWV0YWRhdGE7XHJcbiAgICAgICAgdGhpcy5fc2lnbmluZ0tleXMgPSBzaWduaW5nS2V5cztcclxuXHJcbiAgICAgICAgdGhpcy5fY2xpZW50X2lkID0gY2xpZW50X2lkO1xyXG4gICAgICAgIHRoaXMuX2NsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xyXG4gICAgICAgIHRoaXMuX3Jlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlO1xyXG4gICAgICAgIHRoaXMuX3Njb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5fcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcclxuXHJcbiAgICAgICAgdGhpcy5fcHJvbXB0ID0gcHJvbXB0O1xyXG4gICAgICAgIHRoaXMuX2Rpc3BsYXkgPSBkaXNwbGF5O1xyXG4gICAgICAgIHRoaXMuX21heF9hZ2UgPSBtYXhfYWdlO1xyXG4gICAgICAgIHRoaXMuX3VpX2xvY2FsZXMgPSB1aV9sb2NhbGVzO1xyXG4gICAgICAgIHRoaXMuX2Fjcl92YWx1ZXMgPSBhY3JfdmFsdWVzO1xyXG4gICAgICAgIHRoaXMuX3Jlc291cmNlID0gcmVzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZpbHRlclByb3RvY29sQ2xhaW1zID0gISFmaWx0ZXJQcm90b2NvbENsYWltcztcclxuICAgICAgICB0aGlzLl9sb2FkVXNlckluZm8gPSAhIWxvYWRVc2VySW5mbztcclxuICAgICAgICB0aGlzLl9zdGFsZVN0YXRlQWdlID0gc3RhbGVTdGF0ZUFnZTtcclxuICAgICAgICB0aGlzLl9jbG9ja1NrZXcgPSBjbG9ja1NrZXc7XHJcbiAgICAgICAgdGhpcy5fdXNlckluZm9Kd3RJc3N1ZXIgPSB1c2VySW5mb0p3dElzc3VlcjtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmU7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdG9yID0gbmV3IFJlc3BvbnNlVmFsaWRhdG9yQ3Rvcih0aGlzKTtcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHR5cGVvZiBleHRyYVF1ZXJ5UGFyYW1zID09PSAnb2JqZWN0JyA/IGV4dHJhUXVlcnlQYXJhbXMgOiB7fTtcclxuICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0gdHlwZW9mIGV4dHJhVG9rZW5QYXJhbXMgPT09ICdvYmplY3QnID8gZXh0cmFUb2tlblBhcmFtcyA6IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNsaWVudCBjb25maWdcclxuICAgIGdldCBjbGllbnRfaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9pZDtcclxuICAgIH1cclxuICAgIHNldCBjbGllbnRfaWQodmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NsaWVudF9pZCkge1xyXG4gICAgICAgICAgICAvLyBvbmUtdGltZSBzZXQgb25seVxyXG4gICAgICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnRTZXR0aW5ncy5zZXRfY2xpZW50X2lkOiBjbGllbnRfaWQgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpZW50X2lkIGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGNsaWVudF9zZWNyZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9zZWNyZXQ7XHJcbiAgICB9XHJcbiAgICBnZXQgcmVzcG9uc2VfdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VfdHlwZTtcclxuICAgIH1cclxuICAgIGdldCBzY29wZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcGU7XHJcbiAgICB9XHJcbiAgICBnZXQgcmVkaXJlY3RfdXJpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdF91cmk7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG9wdGlvbmFsIHByb3RvY29sIHBhcmFtc1xyXG4gICAgZ2V0IHByb21wdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbXB0O1xyXG4gICAgfVxyXG4gICAgZ2V0IGRpc3BsYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXk7XHJcbiAgICB9XHJcbiAgICBnZXQgbWF4X2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4X2FnZTtcclxuICAgIH1cclxuICAgIGdldCB1aV9sb2NhbGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91aV9sb2NhbGVzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFjcl92YWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fjcl92YWx1ZXM7XHJcbiAgICB9XHJcbiAgICBnZXQgcmVzb3VyY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlc3BvbnNlX21vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlX21vZGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG1ldGFkYXRhXHJcbiAgICBnZXQgYXV0aG9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRob3JpdHk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXV0aG9yaXR5KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9hdXRob3JpdHkpIHtcclxuICAgICAgICAgICAgLy8gb25lLXRpbWUgc2V0IG9ubHlcclxuICAgICAgICAgICAgdGhpcy5fYXV0aG9yaXR5ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJPaWRjQ2xpZW50U2V0dGluZ3Muc2V0X2F1dGhvcml0eTogYXV0aG9yaXR5IGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhvcml0eSBoYXMgYWxyZWFkeSBiZWVuIGFzc2lnbmVkLlwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBtZXRhZGF0YVVybCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX21ldGFkYXRhVXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5hdXRob3JpdHk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmwgJiYgdGhpcy5fbWV0YWRhdGFVcmwuaW5kZXhPZihPaWRjTWV0YWRhdGFVcmxQYXRoKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybFt0aGlzLl9tZXRhZGF0YVVybC5sZW5ndGggLSAxXSAhPT0gJy8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gJy8nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gT2lkY01ldGFkYXRhVXJsUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldHRhYmxlL2NhY2hhYmxlIG1ldGFkYXRhIHZhbHVlc1xyXG4gICAgZ2V0IG1ldGFkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YTtcclxuICAgIH1cclxuICAgIHNldCBtZXRhZGF0YSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZ25pbmdLZXlzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5nS2V5cztcclxuICAgIH1cclxuICAgIHNldCBzaWduaW5nS2V5cyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3NpZ25pbmdLZXlzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmVoYXZpb3IgZmxhZ3NcclxuICAgIGdldCBmaWx0ZXJQcm90b2NvbENsYWltcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyUHJvdG9jb2xDbGFpbXM7XHJcbiAgICB9XHJcbiAgICBnZXQgbG9hZFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkVXNlckluZm87XHJcbiAgICB9XHJcbiAgICBnZXQgc3RhbGVTdGF0ZUFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhbGVTdGF0ZUFnZTtcclxuICAgIH1cclxuICAgIGdldCBjbG9ja1NrZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb2NrU2tldztcclxuICAgIH1cclxuICAgIGdldCB1c2VySW5mb0p3dElzc3VlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckluZm9Kd3RJc3N1ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXRlU3RvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlU3RvcmU7XHJcbiAgICB9XHJcbiAgICBnZXQgdmFsaWRhdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgbWV0YWRhdGFTZXJ2aWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXh0cmEgcXVlcnkgcGFyYW1zXHJcbiAgICBnZXQgZXh0cmFRdWVyeVBhcmFtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFRdWVyeVBhcmFtcztcclxuICAgIH1cclxuICAgIHNldCBleHRyYVF1ZXJ5UGFyYW1zKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zID0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBleHRyYSB0b2tlbiBwYXJhbXNcclxuICAgIGdldCBleHRyYVRva2VuUGFyYW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHRyYVRva2VuUGFyYW1zO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4dHJhVG9rZW5QYXJhbXModmFsdWUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXMgPSB2YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgUG9wdXBXaW5kb3cgfSBmcm9tICcuL1BvcHVwV2luZG93LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cE5hdmlnYXRvciB7XHJcblxyXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcclxuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgUG9wdXBXaW5kb3cocGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsYmFjayh1cmwsIGtlZXBPcGVuLCBkZWxpbWl0ZXIpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cE5hdmlnYXRvci5jYWxsYmFja1wiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xyXG5cclxuY29uc3QgQ2hlY2tGb3JQb3B1cENsb3NlZEludGVydmFsID0gNTAwO1xyXG5jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9ICdsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHdpZHRoPTUwMCxoZWlnaHQ9NTAwLGxlZnQ9MTAwLHRvcD0xMDA7JztcclxuLy9jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9ICdsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHdpZHRoPTUwMCxoZWlnaHQ9NTAwLGxlZnQ9MTAwLHRvcD0xMDA7cmVzaXphYmxlPXllcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0UG9wdXBUYXJnZXQgPSBcIl9ibGFua1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwV2luZG93IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gcGFyYW1zLnBvcHVwV2luZG93VGFyZ2V0IHx8IERlZmF1bHRQb3B1cFRhcmdldDtcclxuICAgICAgICBsZXQgZmVhdHVyZXMgPSBwYXJhbXMucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCBEZWZhdWx0UG9wdXBGZWF0dXJlcztcclxuXHJcbiAgICAgICAgdGhpcy5fcG9wdXAgPSB3aW5kb3cub3BlbignJywgdGFyZ2V0LCBmZWF0dXJlcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmN0b3I6IHBvcHVwIHN1Y2Nlc3NmdWxseSBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZC5iaW5kKHRoaXMpLCBDaGVja0ZvclBvcHVwQ2xvc2VkSW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvbWlzZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3BvcHVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiUG9wdXBXaW5kb3cubmF2aWdhdGU6IEVycm9yIG9wZW5pbmcgcG9wdXAgd2luZG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghcGFyYW1zIHx8ICFwYXJhbXMudXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiUG9wdXBXaW5kb3cubmF2aWdhdGU6IG5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogU2V0dGluZyBVUkwgaW4gcG9wdXBcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pZCA9IHBhcmFtcy5pZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJwb3B1cENhbGxiYWNrX1wiICsgcGFyYW1zLmlkXSA9IHRoaXMuX2NhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLndpbmRvdy5sb2NhdGlvbiA9IHBhcmFtcy51cmw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9zdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5jYWxsYmFjazogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIHBvcHVwIHdpbmRvd1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdmUoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBfZXJyb3IobWVzc2FnZSkge1xyXG4gICAgICAgIExvZy5lcnJvcihcIlBvcHVwV2luZG93LmVycm9yOiBcIiwgbWVzc2FnZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG4gICAgICAgIHRoaXMuX3JlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXAoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbGVhbnVwKGtlZXBPcGVuKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY2xlYW51cFwiKTtcclxuXHJcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZFRpbWVyKTtcclxuICAgICAgICB0aGlzLl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBkZWxldGUgd2luZG93W1wicG9wdXBDYWxsYmFja19cIiArIHRoaXMuX2lkXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwICYmICFrZWVwT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wb3B1cCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrRm9yUG9wdXBDbG9zZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9wb3B1cCB8fCB0aGlzLl9wb3B1cC5jbG9zZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJQb3B1cCB3aW5kb3cgY2xvc2VkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXAoa2VlcE9wZW4pO1xyXG5cclxuICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNhbGxiYWNrIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Y2Nlc3MoeyB1cmw6IHVybCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNhbGxiYWNrOiBJbnZhbGlkIHJlc3BvbnNlIGZyb20gcG9wdXBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiSW52YWxpZCByZXNwb25zZSBmcm9tIHBvcHVwXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm90aWZ5T3BlbmVyKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcikge1xyXG4gICAgICAgIGlmICh3aW5kb3cub3BlbmVyKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBkZWxpbWl0ZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBcInBvcHVwQ2FsbGJhY2tfXCIgKyBkYXRhLnN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHdpbmRvdy5vcGVuZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogcGFzc2luZyB1cmwgbWVzc2FnZSB0byBvcGVuZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVybCwga2VlcE9wZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJQb3B1cFdpbmRvdy5ub3RpZnlPcGVuZXI6IG5vIG1hdGNoaW5nIGNhbGxiYWNrIGZvdW5kIG9uIG9wZW5lclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gc3RhdGUgZm91bmQgaW4gcmVzcG9uc2UgdXJsXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cud2FybihcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gd2luZG93Lm9wZW5lci4gQ2FuJ3QgY29tcGxldGUgbm90aWZpY2F0aW9uLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlZGlyZWN0TmF2aWdhdG9yIHtcclxuXHJcbiAgICBwcmVwYXJlKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2aWdhdGUocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy51cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVkaXJlY3ROYXZpZ2F0b3IubmF2aWdhdGU6IE5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyYW1zLnVzZVJlcGxhY2VUb05hdmlnYXRlKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHBhcmFtcy51cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcGFyYW1zLnVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXJsKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgVXNlckluZm9TZXJ2aWNlIH0gZnJvbSAnLi9Vc2VySW5mb1NlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBUb2tlbkNsaWVudCB9IGZyb20gJy4vVG9rZW5DbGllbnQuanMnO1xyXG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi9FcnJvclJlc3BvbnNlLmpzJztcclxuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcclxuXHJcbmNvbnN0IFByb3RvY29sQ2xhaW1zID0gW1wibm9uY2VcIiwgXCJhdF9oYXNoXCIsIFwiaWF0XCIsIFwibmJmXCIsIFwiZXhwXCIsIFwiYXVkXCIsIFwiaXNzXCIsIFwiY19oYXNoXCJdO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlVmFsaWRhdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgXHJcbiAgICAgICAgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSxcclxuICAgICAgICBVc2VySW5mb1NlcnZpY2VDdG9yID0gVXNlckluZm9TZXJ2aWNlLCBcclxuICAgICAgICBqb3NlVXRpbCA9IEpvc2VVdGlsLFxyXG4gICAgICAgIFRva2VuQ2xpZW50Q3RvciA9IFRva2VuQ2xpZW50KSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5jdG9yOiBObyBzZXR0aW5ncyBwYXNzZWQgdG8gUmVzcG9uc2VWYWxpZGF0b3JcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fdXNlckluZm9TZXJ2aWNlID0gbmV3IFVzZXJJbmZvU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XHJcbiAgICAgICAgdGhpcy5fdG9rZW5DbGllbnQgPSBuZXcgVG9rZW5DbGllbnRDdG9yKHRoaXMuX3NldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZVNpZ25pblJlc3BvbnNlKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2VcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzU2lnbmluUGFyYW1zKHN0YXRlLCByZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2U6IHN0YXRlIHByb2Nlc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlVG9rZW5zKHN0YXRlLCByZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlOiB0b2tlbnMgdmFsaWRhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NDbGFpbXMoc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlOiBjbGFpbXMgcHJvY2Vzc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoc3RhdGUuaWQgIT09IHJlc3BvbnNlLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbm91dFJlc3BvbnNlOiBTdGF0ZSBkb2VzIG5vdCBtYXRjaFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG5vdyB0aGF0IHdlIGtub3cgdGhlIHN0YXRlIG1hdGNoZXMsIHRha2UgdGhlIHN0b3JlZCBkYXRhXHJcbiAgICAgICAgLy8gYW5kIHNldCBpdCBpbnRvIHRoZSByZXNwb25zZSBzbyBjYWxsZXJzIGNhbiBnZXQgdGhlaXIgc3RhdGVcclxuICAgICAgICAvLyB0aGlzIGlzIGltcG9ydGFudCBmb3IgYm90aCBzdWNjZXNzICYgZXJyb3Igb3V0Y29tZXNcclxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZTogc3RhdGUgdmFsaWRhdGVkXCIpO1xyXG4gICAgICAgIHJlc3BvbnNlLnN0YXRlID0gc3RhdGUuZGF0YTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIExvZy53YXJuKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWdub3V0UmVzcG9uc2U6IFJlc3BvbnNlIHdhcyBlcnJvclwiLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JSZXNwb25zZShyZXNwb25zZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Byb2Nlc3NTaWduaW5QYXJhbXMoc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmlkICE9PSByZXNwb25zZS5zdGF0ZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogU3RhdGUgZG9lcyBub3QgbWF0Y2hcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJTdGF0ZSBkb2VzIG5vdCBtYXRjaFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXN0YXRlLmNsaWVudF9pZCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogTm8gY2xpZW50X2lkIG9uIHN0YXRlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gY2xpZW50X2lkIG9uIHN0YXRlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUuYXV0aG9yaXR5KSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBObyBhdXRob3JpdHkgb24gc3RhdGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBhdXRob3JpdHkgb24gc3RhdGVcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcyBhbGxvd3MgdGhlIGF1dGhvcml0eSB0byBiZSBsb2FkZWQgZnJvbSB0aGUgc2lnbmluIHN0YXRlXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5ID0gc3RhdGUuYXV0aG9yaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbnN1cmUgd2UncmUgdXNpbmcgdGhlIGNvcnJlY3QgYXV0aG9yaXR5IGlmIHRoZSBhdXRob3JpdHkgaXMgbm90IGxvYWRlZCBmcm9tIHNpZ25pbiBzdGF0ZVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSAmJiB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkgIT09IHN0YXRlLmF1dGhvcml0eSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogYXV0aG9yaXR5IG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhdXRob3JpdHkgbWlzbWF0Y2ggb24gc2V0dGluZ3MgdnMuIHNpZ25pbiBzdGF0ZVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMgYWxsb3dzIHRoZSBjbGllbnRfaWQgdG8gYmUgbG9hZGVkIGZyb20gdGhlIHNpZ25pbiBzdGF0ZVxyXG4gICAgICAgIGlmICghdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCA9IHN0YXRlLmNsaWVudF9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZW5zdXJlIHdlJ3JlIHVzaW5nIHRoZSBjb3JyZWN0IGNsaWVudF9pZCBpZiB0aGUgY2xpZW50X2lkIGlzIG5vdCBsb2FkZWQgZnJvbSBzaWduaW4gc3RhdGVcclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQgJiYgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkICE9PSBzdGF0ZS5jbGllbnRfaWQpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IGNsaWVudF9pZCBtaXNtYXRjaCBvbiBzZXR0aW5ncyB2cy4gc2lnbmluIHN0YXRlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiY2xpZW50X2lkIG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbm93IHRoYXQgd2Uga25vdyB0aGUgc3RhdGUgbWF0Y2hlcywgdGFrZSB0aGUgc3RvcmVkIGRhdGFcclxuICAgICAgICAvLyBhbmQgc2V0IGl0IGludG8gdGhlIHJlc3BvbnNlIHNvIGNhbGxlcnMgY2FuIGdldCB0aGVpciBzdGF0ZVxyXG4gICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGZvciBib3RoIHN1Y2Nlc3MgJiBlcnJvciBvdXRjb21lc1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBzdGF0ZSB2YWxpZGF0ZWRcIik7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdGUgPSBzdGF0ZS5kYXRhO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgTG9nLndhcm4oXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogUmVzcG9uc2Ugd2FzIGVycm9yXCIsIHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUubm9uY2UgJiYgIXJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBFeHBlY3RpbmcgaWRfdG9rZW4gaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBpZF90b2tlbiBpbiByZXNwb25zZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXN0YXRlLm5vbmNlICYmIHJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBOb3QgZXhwZWN0aW5nIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5leHBlY3RlZCBpZF90b2tlbiBpbiByZXNwb25zZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUuY29kZV92ZXJpZmllciAmJiAhcmVzcG9uc2UuY29kZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogRXhwZWN0aW5nIGNvZGUgaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBjb2RlIGluIHJlc3BvbnNlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUuY29kZV92ZXJpZmllciAmJiByZXNwb25zZS5jb2RlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBOb3QgZXhwZWN0aW5nIGNvZGUgaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGNvZGUgaW4gcmVzcG9uc2VcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5zY29wZSkge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSdzIG5vIHNjb3BlIG9uIHRoZSByZXNwb25zZSwgdGhlbiBhc3N1bWUgYWxsIHNjb3BlcyBncmFudGVkIChwZXItc3BlYykgYW5kIGNvcHkgb3ZlciBzY29wZXMgZnJvbSBvcmlnaW5hbCByZXF1ZXN0XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnNjb3BlID0gc3RhdGUuc2NvcGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcHJvY2Vzc0NsYWltcyhzdGF0ZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuaXNPcGVuSWRDb25uZWN0KSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiByZXNwb25zZSBpcyBPSURDLCBwcm9jZXNzaW5nIGNsYWltc1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnByb2ZpbGUgPSB0aGlzLl9maWx0ZXJQcm90b2NvbENsYWltcyhyZXNwb25zZS5wcm9maWxlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5za2lwVXNlckluZm8gIT09IHRydWUgJiYgdGhpcy5fc2V0dGluZ3MubG9hZFVzZXJJbmZvICYmIHJlc3BvbnNlLmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IGxvYWRpbmcgdXNlciBpbmZvXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zKHJlc3BvbnNlLmFjY2Vzc190b2tlbikudGhlbihjbGFpbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiB1c2VyIGluZm8gY2xhaW1zIHJlY2VpdmVkIGZyb20gdXNlciBpbmZvIGVuZHBvaW50XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xhaW1zLnN1YiAhPT0gcmVzcG9uc2UucHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHN1YiBmcm9tIHVzZXIgaW5mbyBlbmRwb2ludCBkb2VzIG5vdCBtYXRjaCBzdWIgaW4gYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic3ViIGZyb20gdXNlciBpbmZvIGVuZHBvaW50IGRvZXMgbm90IG1hdGNoIHN1YiBpbiBhY2Nlc3NfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHRoaXMuX21lcmdlQ2xhaW1zKHJlc3BvbnNlLnByb2ZpbGUsIGNsYWltcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHVzZXIgaW5mbyBjbGFpbXMgcmVjZWl2ZWQsIHVwZGF0ZWQgcHJvZmlsZTpcIiwgcmVzcG9uc2UucHJvZmlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IG5vdCBsb2FkaW5nIHVzZXIgaW5mb1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHJlc3BvbnNlIGlzIG5vdCBPSURDLCBub3QgcHJvY2Vzc2luZyBjbGFpbXNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBfbWVyZ2VDbGFpbXMoY2xhaW1zMSwgY2xhaW1zMikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBjbGFpbXMxKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBjbGFpbXMyKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBjbGFpbXMyW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdFtuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRbbmFtZV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdFtuYW1lXS5pbmRleE9mKHZhbHVlKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdFtuYW1lXSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSB0aGlzLl9tZXJnZUNsYWltcyhyZXN1bHRbbmFtZV0sIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSBbcmVzdWx0W25hbWVdLCB2YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIF9maWx0ZXJQcm90b2NvbENsYWltcyhjbGFpbXMpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyUHJvdG9jb2xDbGFpbXMsIGluY29taW5nIGNsYWltczpcIiwgY2xhaW1zKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIGNsYWltcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5fZmlsdGVyUHJvdG9jb2xDbGFpbXMpIHtcclxuICAgICAgICAgICAgUHJvdG9jb2xDbGFpbXMuZm9yRWFjaCh0eXBlID0+IHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbdHlwZV07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlclByb3RvY29sQ2xhaW1zOiBwcm90b2NvbCBjbGFpbXMgZmlsdGVyZWRcIiwgcmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJQcm90b2NvbENsYWltczogcHJvdG9jb2wgY2xhaW1zIG5vdCBmaWx0ZXJlZFwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBfdmFsaWRhdGVUb2tlbnMoc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zOiBWYWxpZGF0aW5nIGNvZGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzQ29kZShzdGF0ZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5hY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogVmFsaWRhdGluZyBpZF90b2tlbiBhbmQgYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogVmFsaWRhdGluZyBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbihzdGF0ZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zOiBObyBjb2RlIHRvIHByb2Nlc3Mgb3IgaWRfdG9rZW4gdG8gdmFsaWRhdGVcIik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Byb2Nlc3NDb2RlKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBjbGllbnRfaWQ6IHN0YXRlLmNsaWVudF9pZCxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogc3RhdGUuY2xpZW50X3NlY3JldCxcclxuICAgICAgICAgICAgY29kZSA6IHJlc3BvbnNlLmNvZGUsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogc3RhdGUucmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICBjb2RlX3ZlcmlmaWVyOiBzdGF0ZS5jb2RlX3ZlcmlmaWVyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMgJiYgdHlwZW9mKHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlcXVlc3QsIHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlKHJlcXVlc3QpLnRoZW4odG9rZW5SZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiB0b2tlblJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVtrZXldID0gdG9rZW5SZXNwb25zZVtrZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ29kZTogdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc2Z1bCwgcHJvY2Vzc2luZyBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzKHN0YXRlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NvZGU6IHRva2VuIHJlc3BvbnNlIHN1Y2Nlc3NmdWwsIHJldHVybmluZyByZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCkudGhlbihpc3N1ZXIgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGF1ZGllbmNlID0gc3RhdGUuY2xpZW50X2lkO1xyXG4gICAgICAgICAgICBsZXQgY2xvY2tTa2V3SW5TZWNvbmRzID0gdGhpcy5fc2V0dGluZ3MuY2xvY2tTa2V3O1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlczogVmFsaWRhaW5nIEpXVCBhdHRyaWJ1dGVzOyB1c2luZyBjbG9jayBza2V3IChpbiBzZWNvbmRzKSBvZjogXCIsIGNsb2NrU2tld0luU2Vjb25kcyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3RBdHRyaWJ1dGVzKHJlc3BvbnNlLmlkX3Rva2VuLCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXdJblNlY29uZHMpLnRoZW4ocGF5bG9hZCA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLm5vbmNlICYmIHN0YXRlLm5vbmNlICE9PSBwYXlsb2FkLm5vbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXM6IEludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcGF5bG9hZC5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlczogTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gcGF5bG9hZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlQWNjZXNzVG9rZW4ocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5ub25jZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBub25jZSBvbiBzdGF0ZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIG5vbmNlIG9uIHN0YXRlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXNwb25zZS5pZF90b2tlbik7XHJcbiAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIgfHwgIWp3dC5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IEZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiLCBqd3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5ub25jZSAhPT0gand0LnBheWxvYWQubm9uY2UpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGtpZCA9IGp3dC5oZWFkZXIua2lkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpLnRoZW4oaXNzdWVyID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogUmVjZWl2ZWQgaXNzdWVyXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5cygpLnRoZW4oa2V5cyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc2lnbmluZyBrZXlzIGZyb20gbWV0YWRhdGFcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IFJlY2VpdmVkIHNpZ25pbmcga2V5c1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBrZXk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWtpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleXMgPSB0aGlzLl9maWx0ZXJCeUFsZyhrZXlzLCBqd3QuaGVhZGVyLmFsZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGtpZCBmb3VuZCBpbiBpZF90b2tlbiBhbmQgbW9yZSB0aGFuIG9uZSBrZXkgZm91bmQgaW4gbWV0YWRhdGFcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2lkIGlzIG1hbmRhdG9yeSBvbmx5IHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGtleXMgaW4gdGhlIHJlZmVyZW5jZWQgSldLIFNldCBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWUgaHR0cDovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNTaWduaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5cy5maWx0ZXIoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleS5raWQgPT09IGtpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVswXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaWVuY2UgPSBzdGF0ZS5jbGllbnRfaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IFZhbGlkYWluZyBKV1Q7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIiwgY2xvY2tTa2V3SW5TZWNvbmRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3QocmVzcG9uc2UuaWRfdG9rZW4sIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogSldUIHZhbGlkYXRpb24gc3VjY2Vzc2Z1bFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqd3QucGF5bG9hZC5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzdWIgcHJlc2VudCBpbiBpZF90b2tlblwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gand0LnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZmlsdGVyQnlBbGcoa2V5cywgYWxnKXtcclxuICAgICAgICB2YXIga3R5ID0gbnVsbDtcclxuICAgICAgICBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJSU1wiKSkge1xyXG4gICAgICAgICAgICBrdHkgPSBcIlJTQVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIlBTXCIpKSB7XHJcbiAgICAgICAgICAgIGt0eSA9IFwiUFNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJFU1wiKSkge1xyXG4gICAgICAgICAgICBrdHkgPSBcIkVDXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyQnlBbGc6IGFsZyBub3Qgc3VwcG9ydGVkOiBcIiwgYWxnKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlckJ5QWxnOiBMb29raW5nIGZvciBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIiwga3R5KTtcclxuXHJcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXkua3R5ID09PSBrdHk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJCeUFsZzogTnVtYmVyIG9mIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHksIGtleXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICB9XHJcblxyXG4gICAgX3ZhbGlkYXRlQWNjZXNzVG9rZW4ocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLnByb2ZpbGUpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IE5vIHByb2ZpbGUgbG9hZGVkIGZyb20gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBwcm9maWxlIGxvYWRlZCBmcm9tIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBObyBhdF9oYXNoIGluIGlkX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gYXRfaGFzaCBpbiBpZF90b2tlblwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBObyBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXNwb25zZS5pZF90b2tlbik7XHJcbiAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IEZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiLCBqd3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBoYXNoQWxnID0gand0LmhlYWRlci5hbGc7XHJcbiAgICAgICAgaWYgKCFoYXNoQWxnIHx8IGhhc2hBbGcubGVuZ3RoICE9PSA1KSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBVbnN1cHBvcnRlZCBhbGc6XCIsIGhhc2hBbGcpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOiBcIiArIGhhc2hBbGcpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBoYXNoQml0cyA9IGhhc2hBbGcuc3Vic3RyKDIsIDMpO1xyXG4gICAgICAgIGlmICghaGFzaEJpdHMpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IFVuc3VwcG9ydGVkIGFsZzpcIiwgaGFzaEFsZywgaGFzaEJpdHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOiBcIiArIGhhc2hBbGcpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhc2hCaXRzID0gcGFyc2VJbnQoaGFzaEJpdHMpO1xyXG4gICAgICAgIGlmIChoYXNoQml0cyAhPT0gMjU2ICYmIGhhc2hCaXRzICE9PSAzODQgJiYgaGFzaEJpdHMgIT09IDUxMikge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogVW5zdXBwb3J0ZWQgYWxnOlwiLCBoYXNoQWxnLCBoYXNoQml0cyk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6IFwiICsgaGFzaEFsZykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNoYSA9IFwic2hhXCIgKyBoYXNoQml0cztcclxuICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2pvc2VVdGlsLmhhc2hTdHJpbmcocmVzcG9uc2UuYWNjZXNzX3Rva2VuLCBzaGEpO1xyXG4gICAgICAgIGlmICghaGFzaCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogYWNjZXNzX3Rva2VuIGhhc2ggZmFpbGVkOlwiLCBzaGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHZhbGlkYXRlIGF0X2hhc2hcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxlZnQgPSBoYXNoLnN1YnN0cigwLCBoYXNoLmxlbmd0aCAvIDIpO1xyXG4gICAgICAgIHZhciBsZWZ0X2I2NHUgPSB0aGlzLl9qb3NlVXRpbC5oZXhUb0Jhc2U2NFVybChsZWZ0KTtcclxuICAgICAgICBpZiAobGVmdF9iNjR1ICE9PSByZXNwb25zZS5wcm9maWxlLmF0X2hhc2gpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IEZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIsIGxlZnRfYjY0dSwgcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBzdWNjZXNzXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IENoZWNrU2Vzc2lvbklGcmFtZSB9IGZyb20gJy4vQ2hlY2tTZXNzaW9uSUZyYW1lLmpzJztcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlc3Npb25Nb25pdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih1c2VyTWFuYWdlciwgQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciA9IENoZWNrU2Vzc2lvbklGcmFtZSwgdGltZXIgPSBHbG9iYWwudGltZXIpIHtcclxuICAgICAgICBpZiAoIXVzZXJNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yLmN0b3I6IE5vIHVzZXIgbWFuYWdlciBwYXNzZWQgdG8gU2Vzc2lvbk1vbml0b3JcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJNYW5hZ2VyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcclxuICAgICAgICB0aGlzLl9DaGVja1Nlc3Npb25JRnJhbWVDdG9yID0gQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvcjtcclxuICAgICAgICB0aGlzLl90aW1lciA9IHRpbWVyO1xyXG5cclxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkVXNlckxvYWRlZCh0aGlzLl9zdGFydC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkVXNlclVubG9hZGVkKHRoaXMuX3N0b3AuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmdldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAvLyBkb2luZyB0aGlzIG1hbnVhbGx5IGhlcmUgc2luY2UgY2FsbGluZyBnZXRVc2VyIFxyXG4gICAgICAgICAgICAvLyBkb2Vzbid0IHRyaWdnZXIgbG9hZCBldmVudC5cclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0KHVzZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3NldHRpbmdzLm1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXMoKS50aGVuKHNlc3Npb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0bXBVc2VyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlIDogc2Vzc2lvbi5zZXNzaW9uX3N0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zdWIgJiYgc2Vzc2lvbi5zaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wVXNlci5wcm9maWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViOiBzZXNzaW9uLnN1YixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZDogc2Vzc2lvbi5zaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQodG1wVXNlcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yIGN0b3I6IGVycm9yIGZyb20gcXVlcnlTZXNzaW9uU3RhdHVzOlwiLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBhIGN0b3JcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2Vzc2lvbk1vbml0b3IgY3RvcjogZXJyb3IgZnJvbSBnZXRVc2VyOlwiLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9zZXR0aW5ncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1hbmFnZXIuc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICBnZXQgX21ldGFkYXRhU2VydmljZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1hbmFnZXIubWV0YWRhdGFTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9jbGllbnRfaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcclxuICAgIH1cclxuICAgIGdldCBfY2hlY2tTZXNzaW9uSW50ZXJ2YWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmNoZWNrU2Vzc2lvbkludGVydmFsO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9zdG9wQ2hlY2tTZXNzaW9uT25FcnJvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Muc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgX3N0YXJ0KHVzZXIpIHtcclxuICAgICAgICBsZXQgc2Vzc2lvbl9zdGF0ZSA9IHVzZXIuc2Vzc2lvbl9zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHNlc3Npb25fc3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViID0gdXNlci5wcm9maWxlLnN1YjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpZCA9IHVzZXIucHJvZmlsZS5zaWQ7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb25fc3RhdGUsIFwiLCBzdWI6XCIsIHRoaXMuX3N1Yik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb25fc3RhdGUsIFwiLCBhbm9ueW1vdXMgdXNlclwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRDaGVja1Nlc3Npb25JZnJhbWUoKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IEluaXRpYWxpemluZyBjaGVjayBzZXNzaW9uIGlmcmFtZVwiKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudF9pZCA9IHRoaXMuX2NsaWVudF9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gdGhpcy5fY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdG9wT25FcnJvciA9IHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lID0gbmV3IHRoaXMuX0NoZWNrU2Vzc2lvbklGcmFtZUN0b3IodGhpcy5fY2FsbGJhY2suYmluZCh0aGlzKSwgY2xpZW50X2lkLCB1cmwsIGludGVydmFsLCBzdG9wT25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUuc3RhcnQoc2Vzc2lvbl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IE5vIGNoZWNrIHNlc3Npb24gaWZyYW1lIGZvdW5kIGluIHRoZSBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBub24tcHJvbWlzZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogRXJyb3IgZnJvbSBnZXRDaGVja1Nlc3Npb25JZnJhbWU6XCIsIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0KHNlc3Npb25fc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9zdG9wKCkge1xyXG4gICAgICAgIHRoaXMuX3N1YiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9zaWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX3N0b3BcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubW9uaXRvckFub255bW91c1Nlc3Npb24pIHtcclxuICAgICAgICAgICAgLy8gdXNpbmcgYSB0aW1lciB0byBkZWxheSByZS1pbml0aWFsaXphdGlvbiB0byBhdm9pZCByYWNlIGNvbmRpdGlvbnMgZHVyaW5nIHNpZ25vdXRcclxuICAgICAgICAgICAgbGV0IHRpbWVySGFuZGxlID0gdGhpcy5fdGltZXIuc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyLmNsZWFySW50ZXJ2YWwodGltZXJIYW5kbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRtcFVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25fc3RhdGUgOiBzZXNzaW9uLnNlc3Npb25fc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnN1YiAmJiBzZXNzaW9uLnNpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBVc2VyLnByb2ZpbGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWI6IHNlc3Npb24uc3ViLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkOiBzZXNzaW9uLnNpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCh0bXBVc2VyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yOiBlcnJvciBmcm9tIHF1ZXJ5U2Vzc2lvblN0YXR1czpcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XHJcbiAgICAgICAgICAgIHZhciByYWlzZUV2ZW50ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zdWIgPT09IHRoaXMuX3N1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhaXNlRXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUuc3RhcnQoc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlc3Npb24uc2lkID09PSB0aGlzLl9zaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTYW1lIHN1YiBzdGlsbCBsb2dnZWQgaW4gYXQgT1AsIHJlc3RhcnRpbmcgY2hlY2sgc2Vzc2lvbiBpZnJhbWU7IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb24uc2Vzc2lvbl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNhbWUgc3ViIHN0aWxsIGxvZ2dlZCBpbiBhdCBPUCwgc2Vzc2lvbiBzdGF0ZSBoYXMgY2hhbmdlZCwgcmVzdGFydGluZyBjaGVjayBzZXNzaW9uIGlmcmFtZTsgc2Vzc2lvbl9zdGF0ZTpcIiwgc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogRGlmZmVyZW50IHN1YmplY3Qgc2lnbmVkIGludG8gT1A6XCIsIHNlc3Npb24uc3ViKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogU3ViamVjdCBubyBsb25nZXIgc2lnbmVkIGludG8gT1BcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyYWlzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s7IHJhaXNpbmcgc2lnbmVkIG91dCBldmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNpZ25lZE91dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s7IHJhaXNpbmcgc2lnbmVkIGluIGV2ZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkSW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdWIpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogRXJyb3IgY2FsbGluZyBxdWVyeUN1cnJlbnRTaWduaW5TZXNzaW9uOyByYWlzaW5nIHNpZ25lZCBvdXQgZXZlbnRcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLl9yYWlzZVVzZXJTaWduZWRPdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XHJcbmltcG9ydCB7IFNpZ25pblN0YXRlIH0gZnJvbSAnLi9TaWduaW5TdGF0ZS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVxdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgLy8gbWFuZGF0b3J5XHJcbiAgICAgICAgdXJsLCBjbGllbnRfaWQsIHJlZGlyZWN0X3VyaSwgcmVzcG9uc2VfdHlwZSwgc2NvcGUsIGF1dGhvcml0eSxcclxuICAgICAgICAvLyBvcHRpb25hbFxyXG4gICAgICAgIGRhdGEsIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcywgcmVzb3VyY2UsIHJlc3BvbnNlX21vZGUsXHJcbiAgICAgICAgcmVxdWVzdCwgcmVxdWVzdF91cmksIGV4dHJhUXVlcnlQYXJhbXMsIHJlcXVlc3RfdHlwZSwgY2xpZW50X3NlY3JldCwgZXh0cmFUb2tlblBhcmFtcywgc2tpcFVzZXJJbmZvXHJcbiAgICB9KSB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyB1cmwgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpZW50X2lkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlZGlyZWN0X3VyaSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHJlZGlyZWN0X3VyaSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlZGlyZWN0X3VyaVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gcmVzcG9uc2VfdHlwZSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlc3BvbnNlX3R5cGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2NvcGUpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyBzY29wZSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNjb3BlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWF1dGhvcml0eSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIGF1dGhvcml0eSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhvcml0eVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvaWRjID0gU2lnbmluUmVxdWVzdC5pc09pZGMocmVzcG9uc2VfdHlwZSk7XHJcbiAgICAgICAgbGV0IGNvZGUgPSBTaWduaW5SZXF1ZXN0LmlzQ29kZShyZXNwb25zZV90eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZV9tb2RlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlX21vZGUgPSBTaWduaW5SZXF1ZXN0LmlzQ29kZShyZXNwb25zZV90eXBlKSA/IFwicXVlcnlcIiA6IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFNpZ25pblN0YXRlKHsgbm9uY2U6IG9pZGMsIFxyXG4gICAgICAgICAgICBkYXRhLCBjbGllbnRfaWQsIGF1dGhvcml0eSwgcmVkaXJlY3RfdXJpLCBcclxuICAgICAgICAgICAgY29kZV92ZXJpZmllcjogY29kZSwgXHJcbiAgICAgICAgICAgIHJlcXVlc3RfdHlwZSwgcmVzcG9uc2VfbW9kZSxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldCwgc2NvcGUsIGV4dHJhVG9rZW5QYXJhbXMsIHNraXBVc2VySW5mbyB9KTtcclxuXHJcbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJjbGllbnRfaWRcIiwgY2xpZW50X2lkKTtcclxuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInJlZGlyZWN0X3VyaVwiLCByZWRpcmVjdF91cmkpO1xyXG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwicmVzcG9uc2VfdHlwZVwiLCByZXNwb25zZV90eXBlKTtcclxuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInNjb3BlXCIsIHNjb3BlKTtcclxuXHJcbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLmlkKTtcclxuICAgICAgICBpZiAob2lkYykge1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcIm5vbmNlXCIsIHRoaXMuc3RhdGUubm9uY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29kZSkge1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImNvZGVfY2hhbGxlbmdlXCIsIHRoaXMuc3RhdGUuY29kZV9jaGFsbGVuZ2UpO1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImNvZGVfY2hhbGxlbmdlX21ldGhvZFwiLCBcIlMyNTZcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3B0aW9uYWwgPSB7IHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcywgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCByZXNwb25zZV9tb2RlIH07XHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gb3B0aW9uYWwpe1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uYWxba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwga2V5LCBvcHRpb25hbFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gZXh0cmFRdWVyeVBhcmFtcyl7XHJcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgZXh0cmFRdWVyeVBhcmFtc1trZXldKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzT2lkYyhyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwiaWRfdG9rZW5cIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gISEocmVzdWx0WzBdKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNPQXV0aChyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwidG9rZW5cIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gISEocmVzdWx0WzBdKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGlzQ29kZShyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwiY29kZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAhIShyZXN1bHRbMF0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xyXG5cclxuY29uc3QgT2lkY1Njb3BlID0gXCJvcGVuaWRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5SZXNwb25zZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1cmwsIGRlbGltaXRlciA9IFwiI1wiKSB7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZXMgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBkZWxpbWl0ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yID0gdmFsdWVzLmVycm9yO1xyXG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSB2YWx1ZXMuZXJyb3JfZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5lcnJvcl91cmkgPSB2YWx1ZXMuZXJyb3JfdXJpO1xyXG5cclxuICAgICAgICB0aGlzLmNvZGUgPSB2YWx1ZXMuY29kZTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdmFsdWVzLnN0YXRlO1xyXG4gICAgICAgIHRoaXMuaWRfdG9rZW4gPSB2YWx1ZXMuaWRfdG9rZW47XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uX3N0YXRlID0gdmFsdWVzLnNlc3Npb25fc3RhdGU7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSB2YWx1ZXMuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgIHRoaXMudG9rZW5fdHlwZSA9IHZhbHVlcy50b2tlbl90eXBlO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB2YWx1ZXMuc2NvcGU7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlID0gdW5kZWZpbmVkOyAvLyB3aWxsIGJlIHNldCBmcm9tIFJlc3BvbnNlVmFsaWRhdG9yXHJcblxyXG4gICAgICAgIHRoaXMuZXhwaXJlc19pbiA9IHZhbHVlcy5leHBpcmVzX2luO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBleHBpcmVzX2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGlyZXNfYXQpIHtcclxuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHNldCBleHBpcmVzX2luKHZhbHVlKXtcclxuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgICBpZiAodHlwZW9mIGV4cGlyZXNfaW4gPT09ICdudW1iZXInICYmIGV4cGlyZXNfaW4gPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBub3cgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwaXJlc19hdCA9IG5vdyArIGV4cGlyZXNfaW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBleHBpcmVkKCkge1xyXG4gICAgICAgIGxldCBleHBpcmVzX2luID0gdGhpcy5leHBpcmVzX2luO1xyXG4gICAgICAgIGlmIChleHBpcmVzX2luICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4cGlyZXNfaW4gPD0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2NvcGVzKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zY29wZSB8fCBcIlwiKS5zcGxpdChcIiBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzT3BlbklkQ29ubmVjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZXMuaW5kZXhPZihPaWRjU2NvcGUpID49IDAgfHwgISF0aGlzLmlkX3Rva2VuO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1N0YXRlLmpzJztcclxuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcclxuaW1wb3J0IHJhbmRvbSBmcm9tICcuL3JhbmRvbS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7bm9uY2UsIGF1dGhvcml0eSwgY2xpZW50X2lkLCByZWRpcmVjdF91cmksIGNvZGVfdmVyaWZpZXIsIHJlc3BvbnNlX21vZGUsIGNsaWVudF9zZWNyZXQsIHNjb3BlLCBleHRyYVRva2VuUGFyYW1zLCBza2lwVXNlckluZm99ID0ge30pIHtcclxuICAgICAgICBzdXBlcihhcmd1bWVudHNbMF0pO1xyXG5cclxuICAgICAgICBpZiAobm9uY2UgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9uY2UgPSByYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobm9uY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9uY2UgPSBub25jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2RlX3ZlcmlmaWVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIHJhbmRvbSgpIHByb2R1Y2VzIDMyIGxlbmd0aFxyXG4gICAgICAgICAgICB0aGlzLl9jb2RlX3ZlcmlmaWVyID0gcmFuZG9tKCkgKyByYW5kb20oKSArIHJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2RlX3ZlcmlmaWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvZGVfdmVyaWZpZXIgPSBjb2RlX3ZlcmlmaWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5jb2RlX3ZlcmlmaWVyKSB7XHJcbiAgICAgICAgICAgIGxldCBoYXNoID0gSm9zZVV0aWwuaGFzaFN0cmluZyh0aGlzLmNvZGVfdmVyaWZpZXIsIFwiU0hBMjU2XCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2RlX2NoYWxsZW5nZSA9IEpvc2VVdGlsLmhleFRvQmFzZTY0VXJsKGhhc2gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX2F1dGhvcml0eSA9IGF1dGhvcml0eTtcclxuICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSBjbGllbnRfaWQ7XHJcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGU7XHJcbiAgICAgICAgdGhpcy5fY2xpZW50X3NlY3JldCA9IGNsaWVudF9zZWNyZXQ7XHJcbiAgICAgICAgdGhpcy5fc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0gZXh0cmFUb2tlblBhcmFtcztcclxuICAgICAgICB0aGlzLl9za2lwVXNlckluZm8gPSBza2lwVXNlckluZm87XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5vbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ub25jZTtcclxuICAgIH1cclxuICAgIGdldCBhdXRob3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhvcml0eTtcclxuICAgIH1cclxuICAgIGdldCBjbGllbnRfaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9pZDtcclxuICAgIH1cclxuICAgIGdldCByZWRpcmVjdF91cmkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0X3VyaTtcclxuICAgIH1cclxuICAgIGdldCBjb2RlX3ZlcmlmaWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlX3ZlcmlmaWVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvZGVfY2hhbGxlbmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlX2NoYWxsZW5nZTtcclxuICAgIH1cclxuICAgIGdldCByZXNwb25zZV9tb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZV9tb2RlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNsaWVudF9zZWNyZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9zZWNyZXQ7XHJcbiAgICB9XHJcbiAgICBnZXQgc2NvcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3BlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGV4dHJhVG9rZW5QYXJhbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXM7XHJcbiAgICB9XHJcbiAgICBnZXQgc2tpcFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9za2lwVXNlckluZm87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJTaWduaW5TdGF0ZS50b1N0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcclxuICAgICAgICAgICAgY3JlYXRlZDogdGhpcy5jcmVhdGVkLFxyXG4gICAgICAgICAgICByZXF1ZXN0X3R5cGU6IHRoaXMucmVxdWVzdF90eXBlLFxyXG4gICAgICAgICAgICBub25jZTogdGhpcy5ub25jZSxcclxuICAgICAgICAgICAgY29kZV92ZXJpZmllcjogdGhpcy5jb2RlX3ZlcmlmaWVyLFxyXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICBhdXRob3JpdHk6IHRoaXMuYXV0aG9yaXR5LFxyXG4gICAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxyXG4gICAgICAgICAgICByZXNwb25zZV9tb2RlOiB0aGlzLnJlc3BvbnNlX21vZGUsXHJcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY2xpZW50X3NlY3JldCxcclxuICAgICAgICAgICAgc2NvcGU6IHRoaXMuc2NvcGUsXHJcbiAgICAgICAgICAgIGV4dHJhVG9rZW5QYXJhbXMgOiB0aGlzLmV4dHJhVG9rZW5QYXJhbXMsXHJcbiAgICAgICAgICAgIHNraXBVc2VySW5mbzogdGhpcy5za2lwVXNlckluZm9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmFnZVN0cmluZykge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlNpZ25pblN0YXRlLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShzdG9yYWdlU3RyaW5nKTtcclxuICAgICAgICByZXR1cm4gbmV3IFNpZ25pblN0YXRlKGRhdGEpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9TdGF0ZS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dFJlcXVlc3Qge1xyXG4gICAgY29uc3RydWN0b3Ioe3VybCwgaWRfdG9rZW5faGludCwgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLCBkYXRhLCBleHRyYVF1ZXJ5UGFyYW1zLCByZXF1ZXN0X3R5cGV9KSB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbm91dFJlcXVlc3QuY3RvcjogTm8gdXJsIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkX3Rva2VuX2hpbnQpIHtcclxuICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJpZF90b2tlbl9oaW50XCIsIGlkX3Rva2VuX2hpbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSkge1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaVwiLCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU3RhdGUoeyBkYXRhLCByZXF1ZXN0X3R5cGUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gZXh0cmFRdWVyeVBhcmFtcyl7XHJcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgZXh0cmFRdWVyeVBhcmFtc1trZXldKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dFJlc3BvbnNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHVybCkge1xyXG5cclxuICAgICAgICB2YXIgdmFsdWVzID0gVXJsVXRpbGl0eS5wYXJzZVVybEZyYWdtZW50KHVybCwgXCI/XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yID0gdmFsdWVzLmVycm9yO1xyXG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSB2YWx1ZXMuZXJyb3JfZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5lcnJvcl91cmkgPSB2YWx1ZXMuZXJyb3JfdXJpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gdmFsdWVzLnN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWxlbnRSZW5ld1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVzZXJNYW5hZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrID0gdGhpcy5fdG9rZW5FeHBpcmluZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkQWNjZXNzVG9rZW5FeHBpcmluZyh0aGlzLl9jYWxsYmFjayk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgdHJpZ2dlciBsb2FkaW5nIG9mIHRoZSB1c2VyIHNvIHRoZSBleHBpcmluZyBldmVudHMgY2FuIGJlIGluaXRpYWxpemVkXHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmdldFVzZXIoKS50aGVuKHVzZXI9PntcclxuICAgICAgICAgICAgICAgIC8vIGRlbGliZXJhdGUgbm9wXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lsZW50UmVuZXdTZXJ2aWNlLnN0YXJ0OiBFcnJvciBmcm9tIGdldFVzZXI6XCIsIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5yZW1vdmVBY2Nlc3NUb2tlbkV4cGlyaW5nKHRoaXMuX2NhbGxiYWNrKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdG9rZW5FeHBpcmluZygpIHtcclxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5zaWduaW5TaWxlbnQoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTaWxlbnRSZW5ld1NlcnZpY2UuX3Rva2VuRXhwaXJpbmc6IFNpbGVudCB0b2tlbiByZW5ld2FsIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lsZW50UmVuZXdTZXJ2aWNlLl90b2tlbkV4cGlyaW5nOiBFcnJvciBmcm9tIHNpZ25pblNpbGVudDpcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHJhbmRvbSBmcm9tICcuL3JhbmRvbS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3Ioe2lkLCBkYXRhLCBjcmVhdGVkLCByZXF1ZXN0X3R5cGV9ID0ge30pIHtcclxuICAgICAgICB0aGlzLl9pZCA9IGlkIHx8IHJhbmRvbSgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNyZWF0ZWQgPT09ICdudW1iZXInICYmIGNyZWF0ZWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZWQgPSBjcmVhdGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdF90eXBlID0gIHJlcXVlc3RfdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgICB9XHJcbiAgICBnZXQgY3JlYXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlZDtcclxuICAgIH1cclxuICAgIGdldCByZXF1ZXN0X3R5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RfdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0b3JhZ2VTdHJpbmcoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUudG9TdG9yYWdlU3RyaW5nXCIpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgICAgIGNyZWF0ZWQ6IHRoaXMuY3JlYXRlZCxcclxuICAgICAgICAgICAgcmVxdWVzdF90eXBlOiB0aGlzLnJlcXVlc3RfdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0ZShKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xlYXJTdGFsZVN0YXRlKHN0b3JhZ2UsIGFnZSkge1xyXG5cclxuICAgICAgICB2YXIgY3V0b2ZmID0gRGF0ZS5ub3coKSAvIDEwMDAgLSBhZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLmdldEFsbEtleXMoKS50aGVuKGtleXMgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IGdvdCBrZXlzXCIsIGtleXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgcCA9IHN0b3JhZ2UuZ2V0KGtleSkudGhlbihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZyhpdGVtKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogZ290IGl0ZW0gZnJvbSBrZXk6IFwiLCBrZXksIHN0YXRlLmNyZWF0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jcmVhdGVkIDw9IGN1dG9mZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogRXJyb3IgcGFyc2luZyBzdGF0ZSBmb3Iga2V5XCIsIGtleSwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogbm8gaXRlbSBpbiBzdG9yYWdlIGZvciBrZXk6IFwiLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IHJlbW92ZWQgaXRlbSBmb3Iga2V5OiBcIiwga2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2UucmVtb3ZlKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiB3YWl0aW5nIG9uIHByb21pc2UgY291bnQ6XCIsIHByb21pc2VzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9FdmVudC5qcyc7XHJcblxyXG5jb25zdCBUaW1lckR1cmF0aW9uID0gNTsgLy8gc2Vjb25kc1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVyIGV4dGVuZHMgRXZlbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRpbWVyID0gR2xvYmFsLnRpbWVyLCBub3dGdW5jID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICAgICAgdGhpcy5fdGltZXIgPSB0aW1lcjtcclxuXHJcbiAgICAgICAgaWYgKG5vd0Z1bmMpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm93RnVuYyA9IG5vd0Z1bmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ub3dGdW5jID0gKCkgPT4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBub3coKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX25vd0Z1bmMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChkdXJhdGlvbikge1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHVyYXRpb24gPSBwYXJzZUludChkdXJhdGlvbik7XHJcblxyXG4gICAgICAgIHZhciBleHBpcmF0aW9uID0gdGhpcy5ub3cgKyBkdXJhdGlvbjtcclxuICAgICAgICBpZiAodGhpcy5leHBpcmF0aW9uID09PSBleHBpcmF0aW9uICYmIHRoaXMuX3RpbWVySGFuZGxlKSB7XHJcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gcmVpbml0aWFsaXplIHRvIHNhbWUgZXhwaXJhdGlvbiwgc28gYmFpbCBvdXRcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVGltZXIuaW5pdCB0aW1lciBcIiArIHRoaXMuX25hbWUgKyBcIiBza2lwcGluZyBpbml0aWFsaXphdGlvbiBzaW5jZSBhbHJlYWR5IGluaXRpYWxpemVkIGZvciBleHBpcmF0aW9uOlwiLCB0aGlzLmV4cGlyYXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbmNlbCgpO1xyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJUaW1lci5pbml0IHRpbWVyIFwiICsgdGhpcy5fbmFtZSArIFwiIGZvciBkdXJhdGlvbjpcIiwgZHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMuX2V4cGlyYXRpb24gPSBleHBpcmF0aW9uO1xyXG5cclxuICAgICAgICAvLyB3ZSdyZSB1c2luZyBhIGZhaXJseSBzaG9ydCB0aW1lciBhbmQgdGhlbiBjaGVja2luZyB0aGUgZXhwaXJhdGlvbiBpbiB0aGVcclxuICAgICAgICAvLyBjYWxsYmFjayB0byBoYW5kbGUgc2NlbmFyaW9zIHdoZXJlIHRoZSBicm93c2VyIGRldmljZSBzbGVlcHMsIGFuZCB0aGVuXHJcbiAgICAgICAgLy8gdGhlIHRpbWVycyBlbmQgdXAgZ2V0dGluZyBkZWxheWVkLlxyXG4gICAgICAgIHZhciB0aW1lckR1cmF0aW9uID0gVGltZXJEdXJhdGlvbjtcclxuICAgICAgICBpZiAoZHVyYXRpb24gPCB0aW1lckR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRpbWVyRHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdGltZXJIYW5kbGUgPSB0aGlzLl90aW1lci5zZXRJbnRlcnZhbCh0aGlzLl9jYWxsYmFjay5iaW5kKHRoaXMpLCB0aW1lckR1cmF0aW9uICogMTAwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBleHBpcmF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBpcmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGltZXJIYW5kbGUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVGltZXIuY2FuY2VsOiBcIiwgdGhpcy5fbmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyLmNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXJIYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lckhhbmRsZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsYmFjaygpIHtcclxuICAgICAgICB2YXIgZGlmZiA9IHRoaXMuX2V4cGlyYXRpb24gLSB0aGlzLm5vdztcclxuICAgICAgICBMb2cuZGVidWcoXCJUaW1lci5jYWxsYmFjazsgXCIgKyB0aGlzLl9uYW1lICsgXCIgdGltZXIgZXhwaXJlcyBpbjpcIiwgZGlmZik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9leHBpcmF0aW9uIDw9IHRoaXMubm93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHN1cGVyLnJhaXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IEpzb25TZXJ2aWNlIH0gZnJvbSAnLi9Kc29uU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBKc29uU2VydmljZUN0b3IgPSBKc29uU2VydmljZSwgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSkge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuY3RvcjogTm8gc2V0dGluZ3MgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5fanNvblNlcnZpY2UgPSBuZXcgSnNvblNlcnZpY2VDdG9yKCk7XHJcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4Y2hhbmdlQ29kZShhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MuZ3JhbnRfdHlwZSA9IGFyZ3MuZ3JhbnRfdHlwZSB8fCBcImF1dGhvcml6YXRpb25fY29kZVwiO1xyXG4gICAgICAgIGFyZ3MuY2xpZW50X2lkID0gYXJncy5jbGllbnRfaWQgfHwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xyXG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gYXJncy5yZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xyXG5cclxuICAgICAgICBpZiAoIWFyZ3MuY29kZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IE5vIGNvZGUgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSBjb2RlIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcmdzLnJlZGlyZWN0X3VyaSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IE5vIHJlZGlyZWN0X3VyaSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHJlZGlyZWN0X3VyaSBpcyByZXF1aXJlZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJncy5jb2RlX3ZlcmlmaWVyKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY29kZV92ZXJpZmllciBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIGNvZGVfdmVyaWZpZXIgaXMgcmVxdWlyZWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFyZ3MuY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY2xpZW50X2lkIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VG9rZW5FbmRwb2ludChmYWxzZSkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IFJlY2VpdmVkIHRva2VuIGVuZHBvaW50XCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25TZXJ2aWNlLnBvc3RGb3JtKHVybCwgYXJncykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IHJlc3BvbnNlIHJlY2VpdmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleGNoYW5nZVJlZnJlc2hUb2tlbihhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MuZ3JhbnRfdHlwZSA9IGFyZ3MuZ3JhbnRfdHlwZSB8fCBcInJlZnJlc2hfdG9rZW5cIjtcclxuICAgICAgICBhcmdzLmNsaWVudF9pZCA9IGFyZ3MuY2xpZW50X2lkIHx8IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcclxuICAgICAgICBhcmdzLmNsaWVudF9zZWNyZXQgPSBhcmdzLmNsaWVudF9zZWNyZXQgfHwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcclxuXHJcbiAgICAgICAgaWYgKCFhcmdzLnJlZnJlc2hfdG9rZW4pIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VSZWZyZXNoVG9rZW46IE5vIHJlZnJlc2hfdG9rZW4gcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSByZWZyZXNoX3Rva2VuIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcmdzLmNsaWVudF9pZCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY2xpZW50X2lkIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VG9rZW5FbmRwb2ludChmYWxzZSkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogUmVjZWl2ZWQgdG9rZW4gZW5kcG9pbnRcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UucG9zdEZvcm0odXJsLCBhcmdzKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuOiByZXNwb25zZSByZWNlaXZlZFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL01ldGFkYXRhU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuXHJcbmNvbnN0IEFjY2Vzc1Rva2VuVHlwZUhpbnQgPSBcImFjY2Vzc190b2tlblwiO1xyXG5jb25zdCBSZWZyZXNoVG9rZW5UeXBlSGludCA9IFwicmVmcmVzaF90b2tlblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuUmV2b2NhdGlvbkNsaWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgWE1MSHR0cFJlcXVlc3RDdG9yID0gR2xvYmFsLlhNTEh0dHBSZXF1ZXN0LCBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQuY3RvcjogTm8gc2V0dGluZ3MgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNldHRpbmdzIHByb3ZpZGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5fWE1MSHR0cFJlcXVlc3RDdG9yID0gWE1MSHR0cFJlcXVlc3RDdG9yO1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXZva2UodG9rZW4sIHJlcXVpcmVkLCB0eXBlID0gXCJhY2Nlc3NfdG9rZW5cIikge1xyXG4gICAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogTm8gdG9rZW4gcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHRva2VuIHByb3ZpZGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlICE9PSBBY2Nlc3NUb2tlblR5cGVIaW50ICYmIHR5cGUgIT0gUmVmcmVzaFRva2VuVHlwZUhpbnQpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogSW52YWxpZCB0b2tlbiB0eXBlXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRva2VuIHR5cGUuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRSZXZvY2F0aW9uRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBSZXZvY2F0aW9uIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmV2b2NhdGlvbiBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIG5vdCByZXF1aXJlZCwgc28gZG9uJ3QgZXJyb3IgYW5kIGp1c3QgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IFJldm9raW5nIFwiICsgdHlwZSk7XHJcbiAgICAgICAgICAgIHZhciBjbGllbnRfaWQgPSB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XHJcbiAgICAgICAgICAgIHZhciBjbGllbnRfc2VjcmV0ID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZSh1cmwsIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgdG9rZW4sIHR5cGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZXZva2UodXJsLCBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHRva2VuLCB0eXBlKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IHRoaXMuX1hNTEh0dHBSZXF1ZXN0Q3RvcigpO1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsKTtcclxuXHJcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgeGhyLnN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcih4aHIuc3RhdHVzVGV4dCArIFwiIChcIiArIHhoci5zdGF0dXMgKyBcIilcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHsgXHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBOZXR3b3JrIEVycm9yLlwiKVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTmV0d29yayBFcnJvclwiKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBib2R5ID0gXCJjbGllbnRfaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50X2lkKTtcclxuICAgICAgICAgICAgaWYgKGNsaWVudF9zZWNyZXQpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkgKz0gXCImY2xpZW50X3NlY3JldD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChjbGllbnRfc2VjcmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2R5ICs9IFwiJnRva2VuX3R5cGVfaGludD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0eXBlKTtcclxuICAgICAgICAgICAgYm9keSArPSBcIiZ0b2tlbj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0b2tlbik7XHJcblxyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoYm9keSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXJsVXRpbGl0eSB7XHJcbiAgICBzdGF0aWMgYWRkUXVlcnlQYXJhbSh1cmwsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKCc/JykgPCAwKSB7XHJcbiAgICAgICAgICAgIHVybCArPSBcIj9cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1cmxbdXJsLmxlbmd0aCAtIDFdICE9PSBcIj9cIikge1xyXG4gICAgICAgICAgICB1cmwgKz0gXCImXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xyXG4gICAgICAgIHVybCArPSBcIj1cIjtcclxuICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGFyc2VVcmxGcmFnbWVudCh2YWx1ZSwgZGVsaW1pdGVyID0gXCIjXCIsIGdsb2JhbCA9IEdsb2JhbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgdmFsdWUgPSBnbG9iYWwubG9jYXRpb24uaHJlZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpZHggPSB2YWx1ZS5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xyXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cihpZHggKyAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkZWxpbWl0ZXIgPT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHdlJ3JlIGRvaW5nIHF1ZXJ5LCB0aGVuIHN0cmlwIG9mZiBoYXNoIGZyYWdtZW50IGJlZm9yZSB3ZSBwYXJzZVxyXG4gICAgICAgICAgICBpZHggPSB2YWx1ZS5pbmRleE9mKCcjJyk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgaWR4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IHt9LFxyXG4gICAgICAgICAgICByZWdleCA9IC8oW14mPV0rKT0oW14mXSopL2csXHJcbiAgICAgICAgICAgIG07XHJcblxyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICB3aGlsZSAobSA9IHJlZ2V4LmV4ZWModmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tkZWNvZGVVUklDb21wb25lbnQobVsxXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KG1bMl0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG4gICAgICAgICAgICBpZiAoY291bnRlcisrID4gNTApIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVybFV0aWxpdHkucGFyc2VVcmxGcmFnbWVudDogcmVzcG9uc2UgZXhjZWVkZWQgZXhwZWN0ZWQgbnVtYmVyIG9mIHBhcmFtZXRlcnNcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJSZXNwb25zZSBleGNlZWRlZCBleHBlY3RlZCBudW1iZXIgb2YgcGFyYW1ldGVyc1wiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHtpZF90b2tlbiwgc2Vzc2lvbl9zdGF0ZSwgYWNjZXNzX3Rva2VuLCByZWZyZXNoX3Rva2VuLCB0b2tlbl90eXBlLCBzY29wZSwgcHJvZmlsZSwgZXhwaXJlc19hdCwgc3RhdGV9KSB7XHJcbiAgICAgICAgdGhpcy5pZF90b2tlbiA9IGlkX3Rva2VuO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbl9zdGF0ZSA9IHNlc3Npb25fc3RhdGU7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Rva2VuID0gcmVmcmVzaF90b2tlbjtcclxuICAgICAgICB0aGlzLnRva2VuX3R5cGUgPSB0b2tlbl90eXBlO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLnByb2ZpbGUgPSBwcm9maWxlO1xyXG4gICAgICAgIHRoaXMuZXhwaXJlc19hdCA9IGV4cGlyZXNfYXQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBleHBpcmVzX2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGlyZXNfYXQpIHtcclxuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHNldCBleHBpcmVzX2luKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGV4cGlyZXNfaW4gPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBleHBpcmVzX2luID09PSAnbnVtYmVyJyAmJiBleHBpcmVzX2luID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLmV4cGlyZXNfYXQgPSBub3cgKyBleHBpcmVzX2luO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXhwaXJlZCgpIHtcclxuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHRoaXMuZXhwaXJlc19pbjtcclxuICAgICAgICBpZiAoZXhwaXJlc19pbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHBpcmVzX2luIDw9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjb3BlcygpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuc2NvcGUgfHwgXCJcIikuc3BsaXQoXCIgXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyLnRvU3RvcmFnZVN0cmluZ1wiKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBpZF90b2tlbjogdGhpcy5pZF90b2tlbixcclxuICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogdGhpcy5zZXNzaW9uX3N0YXRlLFxyXG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW46IHRoaXMuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICByZWZyZXNoX3Rva2VuOiB0aGlzLnJlZnJlc2hfdG9rZW4sXHJcbiAgICAgICAgICAgIHRva2VuX3R5cGU6IHRoaXMudG9rZW5fdHlwZSxcclxuICAgICAgICAgICAgc2NvcGU6IHRoaXMuc2NvcGUsXHJcbiAgICAgICAgICAgIHByb2ZpbGU6IHRoaXMucHJvZmlsZSxcclxuICAgICAgICAgICAgZXhwaXJlc19hdDogdGhpcy5leHBpcmVzX2F0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyb21TdG9yYWdlU3RyaW5nKHN0b3JhZ2VTdHJpbmcpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVXNlcihKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBKc29uU2VydmljZSB9IGZyb20gJy4vSnNvblNlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL01ldGFkYXRhU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VySW5mb1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc2V0dGluZ3MsIFxyXG4gICAgICAgIEpzb25TZXJ2aWNlQ3RvciA9IEpzb25TZXJ2aWNlLCBcclxuICAgICAgICBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlLCBcclxuICAgICAgICBqb3NlVXRpbCA9IEpvc2VVdGlsXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5jdG9yOiBObyBzZXR0aW5ncyBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLl9qc29uU2VydmljZSA9IG5ldyBKc29uU2VydmljZUN0b3IodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMuX2dldENsYWltc0Zyb21Kd3QuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xhaW1zKHRva2VuKSB7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zOiBObyB0b2tlbiBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHRva2VuIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VXNlckluZm9FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLmdldENsYWltczogcmVjZWl2ZWQgdXNlcmluZm8gdXJsXCIsIHVybCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih1cmwsIHRva2VuKS50aGVuKGNsYWltcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zOiBjbGFpbXMgcmVjZWl2ZWRcIiwgY2xhaW1zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFpbXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRDbGFpbXNGcm9tSnd0KHJlcSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXEucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIgfHwgIWp3dC5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEZhaWxlZCB0byBwYXJzZSBKV1RcIiwgand0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIga2lkID0gand0LmhlYWRlci5raWQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXNzdWVyUHJvbWlzZTtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zZXR0aW5ncy51c2VySW5mb0p3dElzc3Vlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnT1AnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlzc3VlclByb21pc2UgPSB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBTlknOlxyXG4gICAgICAgICAgICAgICAgICAgIGlzc3VlclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoand0LnBheWxvYWQuaXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy51c2VySW5mb0p3dElzc3Vlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpc3N1ZXJQcm9taXNlLnRoZW4oaXNzdWVyID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogUmVjZWl2ZWQgaXNzdWVyOlwiICsgaXNzdWVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzKCkudGhlbihrZXlzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogUmVjZWl2ZWQgc2lnbmluZyBrZXlzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFraWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cyA9IHRoaXMuX2ZpbHRlckJ5QWxnKGtleXMsIGp3dC5oZWFkZXIuYWxnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBraWQgZm91bmQgaW4gaWRfdG9rZW4gYW5kIG1vcmUgdGhhbiBvbmUga2V5IGZvdW5kIGluIG1ldGFkYXRhXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpZCBpcyBtYW5kYXRvcnkgb25seSB3aGVuIHRoZXJlIGFyZSBtdWx0aXBsZSBrZXlzIGluIHRoZSByZWZlcmVuY2VkIEpXSyBTZXQgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlZSBodHRwOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1jb3JlLTFfMC5odG1sI1NpZ25pbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXMuZmlsdGVyKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5LmtpZCA9PT0ga2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVswXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdWRpZW5jZSA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IFZhbGlkYWluZyBKV1Q7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIiwgY2xvY2tTa2V3SW5TZWNvbmRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsLnZhbGlkYXRlSnd0KHJlcS5yZXNwb25zZVRleHQsIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzLCB1bmRlZmluZWQsIHRydWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEpXVCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBqd3QucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEVycm9yIHBhcnNpbmcgSldUIHJlc3BvbnNlXCIsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZmlsdGVyQnlBbGcoa2V5cywgYWxnKSB7XHJcbiAgICAgICAgdmFyIGt0eSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGFsZy5zdGFydHNXaXRoKFwiUlNcIikpIHtcclxuICAgICAgICAgICAga3R5ID0gXCJSU0FcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJQU1wiKSkge1xyXG4gICAgICAgICAgICBrdHkgPSBcIlBTXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFsZy5zdGFydHNXaXRoKFwiRVNcIikpIHtcclxuICAgICAgICAgICAga3R5ID0gXCJFQ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9maWx0ZXJCeUFsZzogYWxnIG5vdCBzdXBwb3J0ZWQ6IFwiLCBhbGcpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2ZpbHRlckJ5QWxnOiBMb29raW5nIGZvciBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIiwga3R5KTtcclxuXHJcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXkua3R5ID09PSBrdHk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZmlsdGVyQnlBbGc6IE51bWJlciBvZiBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIiwga3R5LCBrZXlzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudCB9IGZyb20gJy4vT2lkY0NsaWVudC5qcyc7XHJcbmltcG9ydCB7IFVzZXJNYW5hZ2VyU2V0dGluZ3MgfSBmcm9tICcuL1VzZXJNYW5hZ2VyU2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyLmpzJztcclxuaW1wb3J0IHsgVXNlck1hbmFnZXJFdmVudHMgfSBmcm9tICcuL1VzZXJNYW5hZ2VyRXZlbnRzLmpzJztcclxuaW1wb3J0IHsgU2lsZW50UmVuZXdTZXJ2aWNlIH0gZnJvbSAnLi9TaWxlbnRSZW5ld1NlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uTW9uaXRvciB9IGZyb20gJy4vU2Vzc2lvbk1vbml0b3IuanMnO1xyXG5pbXBvcnQgeyBUb2tlblJldm9jYXRpb25DbGllbnQgfSBmcm9tICcuL1Rva2VuUmV2b2NhdGlvbkNsaWVudC5qcyc7XHJcbmltcG9ydCB7IFRva2VuQ2xpZW50IH0gZnJvbSAnLi9Ub2tlbkNsaWVudC5qcyc7XHJcbmltcG9ydCB7IEpvc2VVdGlsIH0gZnJvbSAnLi9Kb3NlVXRpbC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJNYW5hZ2VyIGV4dGVuZHMgT2lkY0NsaWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncyA9IHt9LFxyXG4gICAgICAgIFNpbGVudFJlbmV3U2VydmljZUN0b3IgPSBTaWxlbnRSZW5ld1NlcnZpY2UsXHJcbiAgICAgICAgU2Vzc2lvbk1vbml0b3JDdG9yID0gU2Vzc2lvbk1vbml0b3IsXHJcbiAgICAgICAgVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3RvciA9IFRva2VuUmV2b2NhdGlvbkNsaWVudCxcclxuICAgICAgICBUb2tlbkNsaWVudEN0b3IgPSBUb2tlbkNsaWVudCxcclxuICAgICAgICBqb3NlVXRpbCA9IEpvc2VVdGlsXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgaWYgKCEoc2V0dGluZ3MgaW5zdGFuY2VvZiBVc2VyTWFuYWdlclNldHRpbmdzKSkge1xyXG4gICAgICAgICAgICBzZXR0aW5ncyA9IG5ldyBVc2VyTWFuYWdlclNldHRpbmdzKHNldHRpbmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoc2V0dGluZ3MpO1xyXG5cclxuICAgICAgICB0aGlzLl9ldmVudHMgPSBuZXcgVXNlck1hbmFnZXJFdmVudHMoc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3U2VydmljZSA9IG5ldyBTaWxlbnRSZW5ld1NlcnZpY2VDdG9yKHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBvcmRlciBpcyBpbXBvcnRhbnQgZm9yIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczsgdGhlc2Ugc2VydmljZXMgZGVwZW5kIHVwb24gdGhlIGV2ZW50cy5cclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvbWF0aWNTaWxlbnRSZW5ldykge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5jdG9yOiBhdXRvbWF0aWNTaWxlbnRSZW5ldyBpcyBjb25maWd1cmVkLCBzZXR0aW5nIHVwIHNpbGVudCByZW5ld1wiKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFNpbGVudFJlbmV3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5tb25pdG9yU2Vzc2lvbikge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5jdG9yOiBtb25pdG9yU2Vzc2lvbiBpcyBjb25maWd1cmVkLCBzZXR0aW5nIHVwIHNlc3Npb24gbW9uaXRvclwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Vzc2lvbk1vbml0b3IgPSBuZXcgU2Vzc2lvbk1vbml0b3JDdG9yKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50ID0gbmV3IFRva2VuUmV2b2NhdGlvbkNsaWVudEN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX3Rva2VuQ2xpZW50ID0gbmV3IFRva2VuQ2xpZW50Q3Rvcih0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fam9zZVV0aWwgPSBqb3NlVXRpbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3JlZGlyZWN0TmF2aWdhdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnJlZGlyZWN0TmF2aWdhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9wb3B1cE5hdmlnYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5wb3B1cE5hdmlnYXRvcjtcclxuICAgIH1cclxuICAgIGdldCBfaWZyYW1lTmF2aWdhdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmlmcmFtZU5hdmlnYXRvcjtcclxuICAgIH1cclxuICAgIGdldCBfdXNlclN0b3JlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnVzZXJTdG9yZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXZlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5nZXRVc2VyOiB1c2VyIGxvYWRlZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMubG9hZCh1c2VyLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLmdldFVzZXI6IHVzZXIgbm90IGZvdW5kIGluIHN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVVzZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVVc2VyKG51bGwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnJlbW92ZVVzZXI6IHVzZXIgcmVtb3ZlZCBmcm9tIHN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy51bmxvYWQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5SZWRpcmVjdChhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpyXCI7XHJcbiAgICAgICAgbGV0IG5hdlBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdXNlUmVwbGFjZVRvTmF2aWdhdGUgOiBhcmdzLnVzZVJlcGxhY2VUb05hdmlnYXRlXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IsIG5hdlBhcmFtcykudGhlbigoKT0+e1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0OiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbmluUmVkaXJlY3RDYWxsYmFjayh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluRW5kKHVybCB8fCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvci51cmwpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5SZWRpcmVjdENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2s6IG5vIHN1YlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbmluUG9wdXAoYXJncyA9IHt9KSB7XHJcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xyXG5cclxuICAgICAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic2k6cFwiO1xyXG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvcHVwX3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cDogTm8gcG9wdXBfcmVkaXJlY3RfdXJpIG9yIHJlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gcG9wdXBfcmVkaXJlY3RfdXJpIG9yIHJlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gdXJsO1xyXG4gICAgICAgIGFyZ3MuZGlzcGxheSA9IFwicG9wdXBcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbihhcmdzLCB0aGlzLl9wb3B1cE5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd0ZlYXR1cmVzOiBhcmdzLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd0ZlYXR1cmVzLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd1RhcmdldDogYXJncy5wb3B1cFdpbmRvd1RhcmdldCB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93VGFyZ2V0XHJcbiAgICAgICAgfSkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXA6IHNpZ25pblBvcHVwIHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXA6IG5vIHN1YlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaWduaW5Qb3B1cENhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5DYWxsYmFjayh1cmwsIHRoaXMuX3BvcHVwTmF2aWdhdG9yKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2s6IG5vIHN1YlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2sgZXJyb3I6IFwiICsgZXJyICYmIGVyci5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5TaWxlbnQoYXJncyA9IHt9KSB7XHJcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xyXG5cclxuICAgICAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic2k6c1wiO1xyXG4gICAgICAgIC8vIGZpcnN0IGRldGVybWluZSBpZiB3ZSBoYXZlIGEgcmVmcmVzaCB0b2tlbiwgb3IgbmVlZCB0byB1c2UgaWZyYW1lXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5yZWZyZXNoX3Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzLnJlZnJlc2hfdG9rZW4gPSB1c2VyLnJlZnJlc2hfdG9rZW47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlUmVmcmVzaFRva2VuKGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXJncy5pZF90b2tlbl9oaW50ID0gYXJncy5pZF90b2tlbl9oaW50IHx8ICh0aGlzLnNldHRpbmdzLmluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyAmJiB1c2VyICYmIHVzZXIuaWRfdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIgJiYgdGhpcy5fc2V0dGluZ3MudmFsaWRhdGVTdWJPblNpbGVudFJlbmV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50LCBzdWJqZWN0IHByaW9yIHRvIHNpbGVudCByZW5ldzogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuY3VycmVudF9zdWIgPSB1c2VyLnByb2ZpbGUuc3ViO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pblNpbGVudElmcmFtZShhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF91c2VSZWZyZXNoVG9rZW4oYXJncyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuKGFyZ3MpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl91c2VSZWZyZXNoVG9rZW46IE5vIHJlc3BvbnNlIHJldHVybmVkIGZyb20gdG9rZW4gZW5kcG9pbnRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyByZXNwb25zZSByZXR1cm5lZCBmcm9tIHRva2VuIGVuZHBvaW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3VzZVJlZnJlc2hUb2tlbjogTm8gYWNjZXNzIHRva2VuIHJldHVybmVkIGZyb20gdG9rZW4gZW5kcG9pbnRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQgZnJvbSB0b2tlbiBlbmRwb2ludFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkVG9rZW5WYWxpZGF0aW9uID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pZF90b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRva2VuVmFsaWRhdGlvbiA9IHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbih1c2VyLnByb2ZpbGUsIHJlc3VsdC5pZF90b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWRUb2tlblZhbGlkYXRpb24udGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl91c2VSZWZyZXNoVG9rZW46IHJlZnJlc2ggdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5pZF90b2tlbiA9IHJlc3VsdC5pZF90b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5hY2Nlc3NfdG9rZW4gPSByZXN1bHQuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLnJlZnJlc2hfdG9rZW4gPSByZXN1bHQucmVmcmVzaF90b2tlbiB8fCB1c2VyLnJlZnJlc2hfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZXhwaXJlc19pbiA9IHJlc3VsdC5leHBpcmVzX2luO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVVc2VyKHVzZXIpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW4ocHJvZmlsZSwgaWRfdG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpLnRoZW4oaXNzdWVyID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsLnZhbGlkYXRlSnd0QXR0cmlidXRlcyhpZF90b2tlbiwgaXNzdWVyLCB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQsIHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldykudGhlbihwYXlsb2FkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IEZhaWxlZCB0byB2YWxpZGF0ZSBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHZhbGlkYXRlIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLnN1YiAhPT0gcHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBzdWIgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggY3VycmVudCBzdWJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInN1YiBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBjdXJyZW50IHN1YlwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5hdXRoX3RpbWUgJiYgcGF5bG9hZC5hdXRoX3RpbWUgIT09IHByb2ZpbGUuYXV0aF90aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXV0aF90aW1lIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF1dGhfdGltZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXV0aF90aW1lIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF1dGhfdGltZVwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5henAgJiYgcGF5bG9hZC5henAgIT09IHByb2ZpbGUuYXpwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXpwIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF6cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXpwIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF6cFwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBheWxvYWQuYXpwICYmIHByb2ZpbGUuYXpwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXpwIG5vdCBpbiBpZF90b2tlbiwgYnV0IHByZXNlbnQgaW4gb3JpZ2luYWwgaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImF6cCBub3QgaW4gaWRfdG9rZW4sIGJ1dCBwcmVzZW50IGluIG9yaWdpbmFsIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9zaWduaW5TaWxlbnRJZnJhbWUoYXJncyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50X3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQ6IE5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IHVybDtcclxuICAgICAgICBhcmdzLnByb21wdCA9IGFyZ3MucHJvbXB0IHx8IFwibm9uZVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluKGFyZ3MsIHRoaXMuX2lmcmFtZU5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDogYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0XHJcbiAgICAgICAgfSkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50OiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudDogbm8gc3ViXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5TaWxlbnRDYWxsYmFjayh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluQ2FsbGJhY2sodXJsLCB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudENhbGxiYWNrOiBubyBzdWJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25pbkNhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRTaWduaW5SZXNwb25zZVN0YXRlKHVybCkudGhlbigoe3N0YXRlLCByZXNwb25zZX0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLnJlcXVlc3RfdHlwZSA9PT0gXCJzaTpyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2sodXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNpOnBcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmluUG9wdXBDYWxsYmFjayh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0X3R5cGUgPT09IFwic2k6c1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduaW5TaWxlbnRDYWxsYmFjayh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpbnZhbGlkIHJlc3BvbnNlX3R5cGUgaW4gc3RhdGVcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25vdXRDYWxsYmFjayh1cmwsIGtlZXBPcGVuKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlKHVybCkudGhlbigoe3N0YXRlLCByZXNwb25zZX0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNvOnJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25vdXRSZWRpcmVjdENhbGxiYWNrKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNvOnBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25vdXRQb3B1cENhbGxiYWNrKHVybCwga2VlcE9wZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImludmFsaWQgcmVzcG9uc2VfdHlwZSBpbiBzdGF0ZVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHF1ZXJ5U2Vzc2lvblN0YXR1cyhhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpzXCI7IC8vIHRoaXMgYWN0cyBsaWtlIGEgc2lnbmluIHNpbGVudFxyXG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnNpbGVudF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJncy5yZWRpcmVjdF91cmkgPSB1cmw7XHJcbiAgICAgICAgYXJncy5wcm9tcHQgPSBcIm5vbmVcIjtcclxuICAgICAgICBhcmdzLnJlc3BvbnNlX3R5cGUgPSBhcmdzLnJlc3BvbnNlX3R5cGUgfHwgdGhpcy5zZXR0aW5ncy5xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZTtcclxuICAgICAgICBhcmdzLnNjb3BlID0gYXJncy5zY29wZSB8fCBcIm9wZW5pZFwiO1xyXG4gICAgICAgIGFyZ3Muc2tpcFVzZXJJbmZvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pblN0YXJ0KGFyZ3MsIHRoaXMuX2lmcmFtZU5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDogYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0XHJcbiAgICAgICAgfSkudGhlbihuYXZSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWduaW5SZXNwb25zZShuYXZSZXNwb25zZS51cmwpLnRoZW4oc2lnbmluUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBnb3Qgc2lnbmluIHJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzaWduaW5SZXNwb25zZS5zZXNzaW9uX3N0YXRlICYmIHNpZ25pblJlc3BvbnNlLnByb2ZpbGUuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXM6IHF1ZXJ5U2Vzc2lvblN0YXR1cyBzdWNjZXNzIGZvciBzdWI6IFwiLCAgc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25fc3RhdGU6IHNpZ25pblJlc3BvbnNlLnNlc3Npb25fc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yjogc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZDogc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zaWRcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJxdWVyeVNlc3Npb25TdGF0dXMgc3VjY2Vzc2Z1bCwgdXNlciBub3QgYXV0aGVudGljYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyLnNlc3Npb25fc3RhdGUgJiYgdGhpcy5zZXR0aW5ncy5tb25pdG9yQW5vbnltb3VzU2Vzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIubWVzc2FnZSA9PSBcImxvZ2luX3JlcXVpcmVkXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID09IFwiY29uc2VudF9yZXF1aXJlZFwiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9PSBcImludGVyYWN0aW9uX3JlcXVpcmVkXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID09IFwiYWNjb3VudF9zZWxlY3Rpb25fcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1czogcXVlcnlTZXNzaW9uU3RhdHVzIHN1Y2Nlc3MgZm9yIGFub255bW91cyB1c2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogZXJyLnNlc3Npb25fc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2lnbmluKGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMpLnRoZW4obmF2UmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluRW5kKG5hdlJlc3BvbnNlLnVybCwgYXJncyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfc2lnbmluU3RhcnQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xyXG5cclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnByZXBhcmUobmF2aWdhdG9yUGFyYW1zKS50aGVuKGhhbmRsZSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5TdGFydDogZ290IG5hdmlnYXRvciB3aW5kb3cgaGFuZGxlXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2lnbmluUmVxdWVzdChhcmdzKS50aGVuKHNpZ25pblJlcXVlc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pblN0YXJ0OiBnb3Qgc2lnbmluIHJlcXVlc3RcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLnVybCA9IHNpZ25pblJlcXVlc3QudXJsO1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLmlkID0gc2lnbmluUmVxdWVzdC5zdGF0ZS5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLm5hdmlnYXRlKG5hdmlnYXRvclBhcmFtcyk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pblN0YXJ0OiBFcnJvciBhZnRlciBwcmVwYXJpbmcgbmF2aWdhdG9yLCBjbG9zaW5nIG5hdmlnYXRvciB3aW5kb3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3NpZ25pbkVuZCh1cmwsIGFyZ3MgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwpLnRoZW4oc2lnbmluUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiBnb3Qgc2lnbmluIHJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcihzaWduaW5SZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXJncy5jdXJyZW50X3N1Yikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MuY3VycmVudF9zdWIgIT09IHVzZXIucHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiBjdXJyZW50IHVzZXIgZG9lcyBub3QgbWF0Y2ggdXNlciByZXR1cm5lZCBmcm9tIHNpZ25pbi4gc3ViIGZyb20gc2lnbmluOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImxvZ2luX3JlcXVpcmVkXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5FbmQ6IGN1cnJlbnQgdXNlciBtYXRjaGVzIHVzZXIgcmV0dXJuZWQgZnJvbSBzaWduaW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcih1c2VyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5FbmQ6IHVzZXIgc3RvcmVkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9zaWduaW5DYWxsYmFjayh1cmwsIG5hdmlnYXRvcikge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5DYWxsYmFja1wiKTtcclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmNhbGxiYWNrKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbm91dFJlZGlyZWN0KGFyZ3MgPSB7fSkge1xyXG4gICAgICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcclxuXHJcbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNvOnJcIjtcclxuICAgICAgICBsZXQgcG9zdExvZ291dFJlZGlyZWN0VXJpID0gYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgaWYgKHBvc3RMb2dvdXRSZWRpcmVjdFVyaSl7XHJcbiAgICAgICAgICAgIGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9zdExvZ291dFJlZGlyZWN0VXJpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmF2UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB1c2VSZXBsYWNlVG9OYXZpZ2F0ZSA6IGFyZ3MudXNlUmVwbGFjZVRvTmF2aWdhdGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0U3RhcnQoYXJncywgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IsIG5hdlBhcmFtcykudGhlbigoKT0+e1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25vdXRSZWRpcmVjdDogc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNpZ25vdXRSZWRpcmVjdENhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0RW5kKHVybCB8fCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvci51cmwpLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UmVkaXJlY3RDYWxsYmFjazogc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25vdXRQb3B1cChhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzbzpwXCI7XHJcbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gdXJsO1xyXG4gICAgICAgIGFyZ3MuZGlzcGxheSA9IFwicG9wdXBcIjtcclxuICAgICAgICBpZiAoYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkpe1xyXG4gICAgICAgICAgICAvLyB3ZSdyZSBwdXR0aW5nIGEgZHVtbXkgZW50cnkgaW4gaGVyZSBiZWNhdXNlIHdlXHJcbiAgICAgICAgICAgIC8vIG5lZWQgYSB1bmlxdWUgaWQgZnJvbSB0aGUgc3RhdGUgZm9yIG5vdGlmaWNhdGlvblxyXG4gICAgICAgICAgICAvLyB0byB0aGUgcGFyZW50IHdpbmRvdywgd2hpY2ggaXMgbmVjZXNzYXJ5IGlmIHdlXHJcbiAgICAgICAgICAgIC8vIHBsYW4gdG8gcmV0dXJuIGJhY2sgdG8gdGhlIGNsaWVudCBhZnRlciBzaWdub3V0XHJcbiAgICAgICAgICAgIC8vIGFuZCBzbyB3ZSBjYW4gY2xvc2UgdGhlIHBvcHVwIGFmdGVyIHNpZ25vdXRcclxuICAgICAgICAgICAgYXJncy5zdGF0ZSA9IGFyZ3Muc3RhdGUgfHwge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbm91dChhcmdzLCB0aGlzLl9wb3B1cE5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd0ZlYXR1cmVzOiBhcmdzLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd0ZlYXR1cmVzLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd1RhcmdldDogYXJncy5wb3B1cFdpbmRvd1RhcmdldCB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93VGFyZ2V0XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbm91dFBvcHVwOiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbm91dFBvcHVwQ2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xyXG4gICAgICAgIGlmICh0eXBlb2Yoa2VlcE9wZW4pID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YodXJsKSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIGtlZXBPcGVuID0gdXJsO1xyXG4gICAgICAgICAgICB1cmwgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRlbGltaXRlciA9ICc/JztcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBOYXZpZ2F0b3IuY2FsbGJhY2sodXJsLCBrZWVwT3BlbiwgZGVsaW1pdGVyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UG9wdXBDYWxsYmFjazogc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2lnbm91dChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRTdGFydChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcykudGhlbihuYXZSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0RW5kKG5hdlJlc3BvbnNlLnVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfc2lnbm91dFN0YXJ0KGFyZ3MgPSB7fSwgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IucHJlcGFyZShuYXZpZ2F0b3JQYXJhbXMpLnRoZW4oaGFuZGxlID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogZ290IG5hdmlnYXRvciB3aW5kb3cgaGFuZGxlXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IGxvYWRlZCBjdXJyZW50IHVzZXIgZnJvbSBzdG9yYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXZva2VQcm9taXNlID0gdGhpcy5fc2V0dGluZ3MucmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQgPyB0aGlzLl9yZXZva2VJbnRlcm5hbCh1c2VyKSA6IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldm9rZVByb21pc2UudGhlbigoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZF90b2tlbiA9IGFyZ3MuaWRfdG9rZW5faGludCB8fCB1c2VyICYmIHVzZXIuaWRfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IFNldHRpbmcgaWRfdG9rZW4gaW50byBzaWdub3V0IHJlcXVlc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MuaWRfdG9rZW5faGludCA9IGlkX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlVXNlcigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiB1c2VyIHJlbW92ZWQsIGNyZWF0aW5nIHNpZ25vdXQgcmVxdWVzdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNpZ25vdXRSZXF1ZXN0KGFyZ3MpLnRoZW4oc2lnbm91dFJlcXVlc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogZ290IHNpZ25vdXQgcmVxdWVzdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMudXJsID0gc2lnbm91dFJlcXVlc3QudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25vdXRSZXF1ZXN0LnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLmlkID0gc2lnbm91dFJlcXVlc3Quc3RhdGUuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLm5hdmlnYXRlKG5hdmlnYXRvclBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogRXJyb3IgYWZ0ZXIgcHJlcGFyaW5nIG5hdmlnYXRvciwgY2xvc2luZyBuYXZpZ2F0b3Igd2luZG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9zaWdub3V0RW5kKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsKS50aGVuKHNpZ25vdXRSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0RW5kOiBnb3Qgc2lnbm91dCByZXNwb25zZVwiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzaWdub3V0UmVzcG9uc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2b2tlQWNjZXNzVG9rZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUludGVybmFsKHVzZXIsIHRydWUpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuOiByZW1vdmluZyB0b2tlbiBwcm9wZXJ0aWVzIGZyb20gdXNlciBhbmQgcmUtc3RvcmluZ1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5hY2Nlc3NfdG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIucmVmcmVzaF90b2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5leHBpcmVzX2F0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnRva2VuX3R5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIodXNlcikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuOiB1c2VyIHN0b3JlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmxvYWQodXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5yZXZva2VBY2Nlc3NUb2tlbjogYWNjZXNzIHRva2VuIHJldm9rZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZXZva2VJbnRlcm5hbCh1c2VyLCByZXF1aXJlZCkge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIHZhciBhY2Nlc3NfdG9rZW4gPSB1c2VyLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgdmFyIHJlZnJlc2hfdG9rZW4gPSB1c2VyLnJlZnJlc2hfdG9rZW47XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlQWNjZXNzVG9rZW5JbnRlcm5hbChhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXRTdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJ0U3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWF0U3VjY2VzcyAmJiAhcnRTdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucmV2b2tlQWNjZXNzVG9rZW46IG5vIG5lZWQgdG8gcmV2b2tlIGR1ZSB0byBubyB0b2tlbihzKSwgb3IgSldUIGZvcm1hdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0U3VjY2VzcyB8fCBydFN1Y2Nlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmV2b2tlQWNjZXNzVG9rZW5JbnRlcm5hbChhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIEpXVCB2cy4gcmVmZXJlbmNlIHRva2VuXHJcbiAgICAgICAgaWYgKCFhY2Nlc3NfdG9rZW4gfHwgYWNjZXNzX3Rva2VuLmluZGV4T2YoJy4nKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2UoYWNjZXNzX3Rva2VuLCByZXF1aXJlZCkudGhlbigoKSA9PiB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQpIHtcclxuICAgICAgICBpZiAoIXJlZnJlc2hfdG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZShyZWZyZXNoX3Rva2VuLCByZXF1aXJlZCwgXCJyZWZyZXNoX3Rva2VuXCIpLnRoZW4oKCkgPT4gdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTaWxlbnRSZW5ldygpIHtcclxuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld1NlcnZpY2Uuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wU2lsZW50UmVuZXcoKSB7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdTZXJ2aWNlLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3VzZXJTdG9yZUtleSgpIHtcclxuICAgICAgICByZXR1cm4gYHVzZXI6JHt0aGlzLnNldHRpbmdzLmF1dGhvcml0eX06JHt0aGlzLnNldHRpbmdzLmNsaWVudF9pZH1gO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb2FkVXNlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlLmdldCh0aGlzLl91c2VyU3RvcmVLZXkpLnRoZW4oc3RvcmFnZVN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdG9yYWdlU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fbG9hZFVzZXI6IHVzZXIgc3RvcmFnZVN0cmluZyBsb2FkZWRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVXNlci5mcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX2xvYWRVc2VyOiBubyB1c2VyIHN0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlVXNlcih1c2VyKSB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc3RvcmVVc2VyOiBzdG9yaW5nIHVzZXJcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RvcmFnZVN0cmluZyA9IHVzZXIudG9TdG9yYWdlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VyU3RvcmUuc2V0KHRoaXMuX3VzZXJTdG9yZUtleSwgc3RvcmFnZVN0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJzdG9yZVVzZXIuc3RvcmVVc2VyOiByZW1vdmluZyB1c2VyXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlLnJlbW92ZSh0aGlzLl91c2VyU3RvcmVLZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRXZlbnRzIH0gZnJvbSAnLi9BY2Nlc3NUb2tlbkV2ZW50cy5qcyc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9FdmVudC5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlck1hbmFnZXJFdmVudHMgZXh0ZW5kcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcclxuICAgICAgICBzdXBlcihzZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZCA9IG5ldyBFdmVudChcIlVzZXIgbG9hZGVkXCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZCA9IG5ldyBFdmVudChcIlVzZXIgdW5sb2FkZWRcIik7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvciA9IG5ldyBFdmVudChcIlNpbGVudCByZW5ldyBlcnJvclwiKTtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkSW4gPSBuZXcgRXZlbnQoXCJVc2VyIHNpZ25lZCBpblwiKTtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkT3V0ID0gbmV3IEV2ZW50KFwiVXNlciBzaWduZWQgb3V0XCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZCA9IG5ldyBFdmVudChcIlVzZXIgc2Vzc2lvbiBjaGFuZ2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQodXNlciwgcmFpc2VFdmVudD10cnVlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMubG9hZFwiKTtcclxuICAgICAgICBzdXBlci5sb2FkKHVzZXIpO1xyXG4gICAgICAgIGlmIChyYWlzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJMb2FkZWQucmFpc2UodXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdW5sb2FkKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLnVubG9hZFwiKTtcclxuICAgICAgICBzdXBlci51bmxvYWQoKTtcclxuICAgICAgICB0aGlzLl91c2VyVW5sb2FkZWQucmFpc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyTG9hZGVkKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVVzZXJMb2FkZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyTG9hZGVkLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFVzZXJVbmxvYWRlZChjYikge1xyXG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVVzZXJVbmxvYWRlZChjYikge1xyXG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5yZW1vdmVIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTaWxlbnRSZW5ld0Vycm9yKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVNpbGVudFJlbmV3RXJyb3IoY2IpIHtcclxuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld0Vycm9yLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlU2lsZW50UmVuZXdFcnJvclwiLCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3RXJyb3IucmFpc2UoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVXNlclNpZ25lZEluKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluLmFkZEhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlVXNlclNpZ25lZEluKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgX3JhaXNlVXNlclNpZ25lZEluKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTaWduZWRJblwiKTtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkSW4ucmFpc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyU2lnbmVkT3V0KGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZE91dC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVVzZXJTaWduZWRPdXQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkT3V0LnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgX3JhaXNlVXNlclNpZ25lZE91dCgpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkT3V0XCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQucmFpc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyU2Vzc2lvbkNoYW5nZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQuYWRkSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbiAgICByZW1vdmVVc2VyU2Vzc2lvbkNoYW5nZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQucmVtb3ZlSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbiAgICBfcmFpc2VVc2VyU2Vzc2lvbkNoYW5nZWQoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkXCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZC5yYWlzZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudFNldHRpbmdzIH0gZnJvbSAnLi9PaWRjQ2xpZW50U2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdE5hdmlnYXRvciB9IGZyb20gJy4vUmVkaXJlY3ROYXZpZ2F0b3IuanMnO1xyXG5pbXBvcnQgeyBQb3B1cE5hdmlnYXRvciB9IGZyb20gJy4vUG9wdXBOYXZpZ2F0b3IuanMnO1xyXG5pbXBvcnQgeyBJRnJhbWVOYXZpZ2F0b3IgfSBmcm9tICcuL0lGcmFtZU5hdmlnYXRvci5qcyc7XHJcbmltcG9ydCB7IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnLi9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuaW1wb3J0IHsgU2lnbmluUmVxdWVzdCB9IGZyb20gJy4vU2lnbmluUmVxdWVzdC5qcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSA2MDtcclxuY29uc3QgRGVmYXVsdENoZWNrU2Vzc2lvbkludGVydmFsID0gMjAwMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyTWFuYWdlclNldHRpbmdzIGV4dGVuZHMgT2lkY0NsaWVudFNldHRpbmdzIHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICBwb3B1cF9yZWRpcmVjdF91cmksXHJcbiAgICAgICAgcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxyXG4gICAgICAgIHBvcHVwV2luZG93RmVhdHVyZXMsXHJcbiAgICAgICAgcG9wdXBXaW5kb3dUYXJnZXQsXHJcbiAgICAgICAgc2lsZW50X3JlZGlyZWN0X3VyaSxcclxuICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dCxcclxuICAgICAgICBhdXRvbWF0aWNTaWxlbnRSZW5ldyA9IGZhbHNlLFxyXG4gICAgICAgIHZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyA9IGZhbHNlLFxyXG4gICAgICAgIGluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyA9IHRydWUsXHJcbiAgICAgICAgbW9uaXRvclNlc3Npb24gPSB0cnVlLFxyXG4gICAgICAgIG1vbml0b3JBbm9ueW1vdXNTZXNzaW9uID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tTZXNzaW9uSW50ZXJ2YWwgPSBEZWZhdWx0Q2hlY2tTZXNzaW9uSW50ZXJ2YWwsXHJcbiAgICAgICAgc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IgPSB0cnVlLFxyXG4gICAgICAgIHF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlLFxyXG4gICAgICAgIHJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0ID0gZmFsc2UsXHJcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUsXHJcbiAgICAgICAgcmVkaXJlY3ROYXZpZ2F0b3IgPSBuZXcgUmVkaXJlY3ROYXZpZ2F0b3IoKSxcclxuICAgICAgICBwb3B1cE5hdmlnYXRvciA9IG5ldyBQb3B1cE5hdmlnYXRvcigpLFxyXG4gICAgICAgIGlmcmFtZU5hdmlnYXRvciA9IG5ldyBJRnJhbWVOYXZpZ2F0b3IoKSxcclxuICAgICAgICB1c2VyU3RvcmUgPSBuZXcgV2ViU3RvcmFnZVN0YXRlU3RvcmUoeyBzdG9yZTogR2xvYmFsLnNlc3Npb25TdG9yYWdlIH0pXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICBzdXBlcihhcmd1bWVudHNbMF0pO1xyXG5cclxuICAgICAgICB0aGlzLl9wb3B1cF9yZWRpcmVjdF91cmkgPSBwb3B1cF9yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwV2luZG93RmVhdHVyZXMgPSBwb3B1cFdpbmRvd0ZlYXR1cmVzO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwV2luZG93VGFyZ2V0ID0gcG9wdXBXaW5kb3dUYXJnZXQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3NpbGVudF9yZWRpcmVjdF91cmkgPSBzaWxlbnRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX3NpbGVudFJlcXVlc3RUaW1lb3V0ID0gc2lsZW50UmVxdWVzdFRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy5fYXV0b21hdGljU2lsZW50UmVuZXcgPSBhdXRvbWF0aWNTaWxlbnRSZW5ldztcclxuICAgICAgICB0aGlzLl92YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXcgPSB2YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXc7XHJcbiAgICAgICAgdGhpcy5faW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3ID0gaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3O1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XHJcblxyXG4gICAgICAgIHRoaXMuX21vbml0b3JTZXNzaW9uID0gbW9uaXRvclNlc3Npb247XHJcbiAgICAgICAgdGhpcy5fbW9uaXRvckFub255bW91c1Nlc3Npb24gPSBtb25pdG9yQW5vbnltb3VzU2Vzc2lvbjtcclxuICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JbnRlcnZhbCA9IGNoZWNrU2Vzc2lvbkludGVydmFsO1xyXG4gICAgICAgIHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yID0gc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XHJcbiAgICAgICAgaWYgKHF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3F1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlID0gcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGU7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmIChhcmd1bWVudHNbMF0gJiYgYXJndW1lbnRzWzBdLnJlc3BvbnNlX3R5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUgPSBTaWduaW5SZXF1ZXN0LmlzT2lkYyhhcmd1bWVudHNbMF0ucmVzcG9uc2VfdHlwZSkgPyBcImlkX3Rva2VuXCIgOiBcImNvZGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3F1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlID0gXCJpZF90b2tlblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCA9IHJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0O1xyXG5cclxuICAgICAgICB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvciA9IHJlZGlyZWN0TmF2aWdhdG9yO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwTmF2aWdhdG9yID0gcG9wdXBOYXZpZ2F0b3I7XHJcbiAgICAgICAgdGhpcy5faWZyYW1lTmF2aWdhdG9yID0gaWZyYW1lTmF2aWdhdG9yO1xyXG5cclxuICAgICAgICB0aGlzLl91c2VyU3RvcmUgPSB1c2VyU3RvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBvcHVwX3JlZGlyZWN0X3VyaSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBfcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvcHVwV2luZG93RmVhdHVyZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwV2luZG93RmVhdHVyZXM7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9wdXBXaW5kb3dUYXJnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwV2luZG93VGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaWxlbnRfcmVkaXJlY3RfdXJpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWxlbnRfcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgIGdldCBzaWxlbnRSZXF1ZXN0VGltZW91dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lsZW50UmVxdWVzdFRpbWVvdXQ7XHJcbiAgICB9XHJcbiAgICBnZXQgYXV0b21hdGljU2lsZW50UmVuZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9tYXRpY1NpbGVudFJlbmV3O1xyXG4gICAgfVxyXG4gICAgZ2V0IHZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3O1xyXG4gICAgfVxyXG4gICAgZ2V0IGluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3O1xyXG4gICAgfVxyXG4gICAgZ2V0IGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9uaXRvclNlc3Npb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbml0b3JTZXNzaW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb25pdG9yQW5vbnltb3VzU2Vzc2lvbjtcclxuICAgIH1cclxuICAgIGdldCBjaGVja1Nlc3Npb25JbnRlcnZhbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XHJcbiAgICB9XHJcbiAgICBnZXQgcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGU7XHJcbiAgICB9XHJcbiAgICBnZXQgcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZWRpcmVjdE5hdmlnYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9wdXBOYXZpZ2F0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwTmF2aWdhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlmcmFtZU5hdmlnYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWZyYW1lTmF2aWdhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB1c2VyU3RvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7cHJlZml4ID0gXCJvaWRjLlwiLCBzdG9yZSA9IEdsb2JhbC5sb2NhbFN0b3JhZ2V9ID0ge30pIHtcclxuICAgICAgICB0aGlzLl9zdG9yZSA9IHN0b3JlO1xyXG4gICAgICAgIHRoaXMuX3ByZWZpeCA9IHByZWZpeDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLnNldFwiLCBrZXkpO1xyXG5cclxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0b3JlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoa2V5KSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUuZ2V0XCIsIGtleSk7XHJcblxyXG4gICAgICAgIGtleSA9IHRoaXMuX3ByZWZpeCArIGtleTtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9zdG9yZS5nZXRJdGVtKGtleSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGtleSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLnJlbW92ZVwiLCBrZXkpO1xyXG5cclxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XHJcblxyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5fc3RvcmUuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIHRoaXMuX3N0b3JlLnJlbW92ZUl0ZW0oa2V5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxLZXlzKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLmdldEFsbEtleXNcIik7XHJcblxyXG4gICAgICAgIHZhciBrZXlzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9zdG9yZS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuX3N0b3JlLmtleShpbmRleCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5fcHJlZml4KSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleS5zdWJzdHIodGhpcy5fcHJlZml4Lmxlbmd0aCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGtleXMpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbkJhc2VkIG9uIHRoZSB3b3JrIG9mIEF1dGgwXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9hdXRoMC9pZHRva2VuLXZlcmlmaWVyXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9hdXRoMC9pZHRva2VuLXZlcmlmaWVyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuV2hpY2ggaXMgYmFzZWQgb24gdGhlIHdvcmsgb2YgVG9tIFd1XHJcbmh0dHA6Ly93d3ctY3Mtc3R1ZGVudHMuc3RhbmZvcmQuZWR1L350ancvanNibi9cclxuaHR0cDovL3d3dy1jcy1zdHVkZW50cy5zdGFuZm9yZC5lZHUvfnRqdy9qc2JuL0xJQ0VOU0VcclxuKi9cclxuXHJcbi8qXHJcbiAqIFRvIHN1cHBvcnQgbW9zdCBiYXNpYyBPcGVuSWQgdXNlIGNhc2VzICh1c2luZyBSU0EyNTYpLCB3ZSBjYW4gZ2V0IGF3YXkgd2l0aG91dFxyXG4gKiByZXF1aXJpbmcgdGhlIGZ1bGwganJzYXNpZ24gZmVhdHVyZSBzZXQgKGFuZCByZXN1bHRpbmcgbWFzc2l2ZSBidW5kbGUpLlxyXG4gKlxyXG4gKiAtIFN1cHBvcnQgUlNBIDI1NiBhbGdvcml0aG0gKG9wdGlvbmFsbHkgY291bGQgc3VwcG9ydCBSU0EqIGZhbWlseSlcclxuICogLSBQYXJzZSBKV1QgdG9rZW5zIHVzaW5nIHRoZSAobikgcGFyYW1ldGVyLlxyXG4gKiAtIFZlcmlmeSBzaWduYXR1cmUgb2YgaWRfdG9rZW5zXHJcbiAqIC0gVmVyaWZ5IGF0X2hhc2ggb2YgYWNjZXNzX3Rva2Vuc1xyXG4gKiAtIFBlcmZvcm0gY29tbW9uIGJhc2U2NCBlbmNvZGluZy9kZWNvZGluZyB0YXNrcy5cclxuICovXHJcblxyXG5pbXBvcnQgSlNCTiBmcm9tICdqc2JuJztcclxuaW1wb3J0IFNIQTI1NiBmcm9tICdjcnlwdG8tanMvc2hhMjU2JztcclxuaW1wb3J0IGJhc2U2NEpzIGZyb20gJ2Jhc2U2NC1qcyc7XHJcblxyXG52YXIgQmlnSW50ZWdlciA9IEpTQk4uQmlnSW50ZWdlcjtcclxuXHJcbi8qISAoYykgVG9tIFd1IHwgaHR0cDovL3d3dy1jcy1zdHVkZW50cy5zdGFuZm9yZC5lZHUvfnRqdy9qc2JuL1xyXG4gKi9cclxudmFyIGI2NG1hcCA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xyXG52YXIgYjY0cGFkID0gXCI9XCI7XHJcblxyXG5jb25zdCBCYXNlNjQgPSB7XHJcbiAgICBiNjR0b2hleChzKSB7XHJcbiAgICAgICAgdmFyIHJldCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgdmFyIGsgPSAwOyAvLyBiNjQgc3RhdGUsIDAtM1xyXG4gICAgICAgIHZhciBzbG9wO1xyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYocy5jaGFyQXQoaSkgPT09IGI2NHBhZCkgYnJlYWs7XHJcbiAgICAgICAgICAgIHZhciB2ID0gYjY0bWFwLmluZGV4T2Yocy5jaGFyQXQoaSkpO1xyXG4gICAgICAgICAgICBpZih2IDwgMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmKGsgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHYgPj4gMik7XHJcbiAgICAgICAgICAgICAgICBzbG9wID0gdiAmIDM7XHJcbiAgICAgICAgICAgICAgICBrID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGsgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChzbG9wIDw8IDIpIHwgKHYgPj4gNCkpO1xyXG4gICAgICAgICAgICAgICAgc2xvcCA9IHYgJiAweGY7XHJcbiAgICAgICAgICAgICAgICBrID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGsgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHNsb3ApO1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodiA+PiAyKTtcclxuICAgICAgICAgICAgICAgIHNsb3AgPSB2ICYgMztcclxuICAgICAgICAgICAgICAgIGsgPSAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHNsb3AgPDwgMikgfCAodiA+PiA0KSk7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh2ICYgMHhmKTtcclxuICAgICAgICAgICAgICAgIGsgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGsgPT09IDEpXHJcbiAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHNsb3AgPDwgMik7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0sXHJcbiAgICBoZXhUb0Jhc2U2NChoKSB7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgdmFyIGM7XHJcbiAgICAgICAgdmFyIHJldCA9IFwiXCI7XHJcbiAgICAgICAgZm9yKGkgPSAwOyBpKzMgPD0gaC5sZW5ndGg7IGkrPTMpIHtcclxuICAgICAgICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksaSszKSwxNik7XHJcbiAgICAgICAgICAgIHJldCArPSBiNjRtYXAuY2hhckF0KGMgPj4gNikgKyBiNjRtYXAuY2hhckF0KGMgJiA2Myk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGkrMSA9PT0gaC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksaSsxKSwxNik7XHJcbiAgICAgICAgICAgIHJldCArPSBiNjRtYXAuY2hhckF0KGMgPDwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaSsyID09PSBoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSxpKzIpLDE2KTtcclxuICAgICAgICAgICAgcmV0ICs9IGI2NG1hcC5jaGFyQXQoYyA+PiAyKSArIGI2NG1hcC5jaGFyQXQoKGMgJiAzKSA8PCA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGI2NHBhZCkgd2hpbGUoKHJldC5sZW5ndGggJiAzKSA+IDApIHJldCArPSBiNjRwYWQ7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0sXHJcblxyXG4gICAgcGFkZGluZyhzdHIpIHtcclxuICAgICAgICB2YXIgbW9kID0gKHN0ci5sZW5ndGggJSA0KTtcclxuICAgICAgICB2YXIgcGFkID0gNCAtIG1vZDtcclxuXHJcbiAgICAgICAgaWYgKG1vZCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0ciArIChuZXcgQXJyYXkoMSArIHBhZCkpLmpvaW4oJz0nKTtcclxuICAgIH0sXHJcblxyXG4gICAgYnl0ZUFycmF5VG9IZXgocmF3KSB7XHJcbiAgICAgICAgdmFyIEhFWCA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhdy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgX2hleCA9IHJhd1tpXS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIEhFWCArPSAoX2hleC5sZW5ndGggPT09IDIgPyBfaGV4IDogJzAnICsgX2hleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gSEVYO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWNvZGVUb0hFWChzdHIpIHtcclxuICAgICAgICByZXR1cm4gQmFzZTY0LmJ5dGVBcnJheVRvSGV4KGJhc2U2NEpzLnRvQnl0ZUFycmF5KEJhc2U2NC5wYWRkaW5nKHN0cikpKTtcclxuICAgIH0sXHJcblxyXG4gICAgYmFzZTY0VG9CYXNlNjRVcmwocykge1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoLz0vZywgXCJcIik7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvXFwrL2csIFwiLVwiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC9cXC8vZywgXCJfXCIpO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cmxEZWNvZGUoc3RyKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLy0vZywgJysnKSAvLyBDb252ZXJ0ICctJyB0byAnKydcclxuICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJy8nKSAvLyBDb252ZXJ0ICdfJyB0byAnLydcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xccy9nLCAnICcpOyAvLyBDb252ZXJ0ICdcXHMnIHRvICcgJ1xyXG5cclxuICAgICAgICByZXR1cm4gYXRvYihzdHIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbnZhciBEaWdlc3RJbmZvSGVhZCA9IHtcclxuICAgIHNoYTE6ICczMDIxMzAwOTA2MDUyYjBlMDMwMjFhMDUwMDA0MTQnLFxyXG4gICAgc2hhMjI0OiAnMzAyZDMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjA0MDUwMDA0MWMnLFxyXG4gICAgc2hhMjU2OiAnMzAzMTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAxMDUwMDA0MjAnLFxyXG4gICAgc2hhMzg0OiAnMzA0MTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAyMDUwMDA0MzAnLFxyXG4gICAgc2hhNTEyOiAnMzA1MTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAzMDUwMDA0NDAnLFxyXG4gICAgbWQyOiAnMzAyMDMwMGMwNjA4MmE4NjQ4ODZmNzBkMDIwMjA1MDAwNDEwJyxcclxuICAgIG1kNTogJzMwMjAzMDBjMDYwODJhODY0ODg2ZjcwZDAyMDUwNTAwMDQxMCcsXHJcbiAgICByaXBlbWQxNjA6ICczMDIxMzAwOTA2MDUyYjI0MDMwMjAxMDUwMDA0MTQnXHJcbn07XHJcblxyXG52YXIgRGlnZXN0QWxncyA9IHtcclxuICAgIHNoYTI1NjogU0hBMjU2LFxyXG4gICAgU0hBMjU2OlNIQTI1NlxyXG59O1xyXG5cclxuZnVuY3Rpb24gUlNBVmVyaWZpZXIobW9kdWx1cywgZXhwKSB7XHJcbiAgICB0aGlzLm4gPSBudWxsO1xyXG4gICAgdGhpcy5lID0gMDtcclxuXHJcbiAgICBpZiAobW9kdWx1cyAhPSBudWxsICYmIGV4cCAhPSBudWxsICYmIG1vZHVsdXMubGVuZ3RoID4gMCAmJiBleHAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMubiA9IG5ldyBCaWdJbnRlZ2VyKG1vZHVsdXMsIDE2KTtcclxuICAgICAgICB0aGlzLmUgPSBwYXJzZUludChleHAsIDE2KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGtleSBkYXRhJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFsZ29yaXRobUZyb21EaWdlc3QoaERpZ2VzdEluZm8pIHtcclxuICAgIGZvciAodmFyIGFsZ05hbWUgaW4gRGlnZXN0SW5mb0hlYWQpIHtcclxuICAgICAgICB2YXIgaGVhZCA9IERpZ2VzdEluZm9IZWFkW2FsZ05hbWVdO1xyXG4gICAgICAgIHZhciBsZW4gPSBoZWFkLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGhEaWdlc3RJbmZvLnN1YnN0cmluZygwLCBsZW4pID09PSBoZWFkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhbGc6IGFsZ05hbWUsXHJcbiAgICAgICAgICAgICAgICBoYXNoOiBoRGlnZXN0SW5mby5zdWJzdHJpbmcobGVuKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufVxyXG5cclxuXHJcblJTQVZlcmlmaWVyLnByb3RvdHlwZS52ZXJpZnkgPSBmdW5jdGlvbiAobXNnLCBlbmNzaWcpIHtcclxuICAgIGVuY3NpZyA9IEJhc2U2NC5kZWNvZGVUb0hFWChlbmNzaWcpO1xyXG4gICAgZW5jc2lnID0gZW5jc2lnLnJlcGxhY2UoL1teMC05YS1mXXxbXFxzXFxuXV0vaWcsICcnKTtcclxuXHJcbiAgICB2YXIgc2lnID0gbmV3IEJpZ0ludGVnZXIoZW5jc2lnLCAxNik7XHJcblxyXG4gICAgaWYgKHNpZy5iaXRMZW5ndGgoKSA+IHRoaXMubi5iaXRMZW5ndGgoKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2lnbmF0dXJlIGRvZXMgbm90IG1hdGNoIHdpdGggdGhlIGtleSBtb2R1bHVzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkZWNyeXB0ZWRTaWcgPSBzaWcubW9kUG93SW50KHRoaXMuZSwgdGhpcy5uKTtcclxuICAgIHZhciBkaWdlc3QgPSBkZWNyeXB0ZWRTaWcudG9TdHJpbmcoMTYpLnJlcGxhY2UoL14xZiswMC8sICcnKTtcclxuICAgIHZhciBkaWdlc3RJbmZvID0gZ2V0QWxnb3JpdGhtRnJvbURpZ2VzdChkaWdlc3QpO1xyXG5cclxuICAgIGlmIChkaWdlc3RJbmZvLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIURpZ2VzdEFsZ3MuaGFzT3duUHJvcGVydHkoZGlnZXN0SW5mby5hbGcpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYXNoaW5nIGFsZ29yaXRobSBpcyBub3Qgc3VwcG9ydGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtc2dIYXNoID0gRGlnZXN0QWxnc1tkaWdlc3RJbmZvLmFsZ10obXNnKS50b1N0cmluZygpO1xyXG4gICAgcmV0dXJuIChkaWdlc3RJbmZvLmhhc2ggPT09IG1zZ0hhc2gpO1xyXG59O1xyXG5cclxuY29uc3QgQWxsb3dlZFNpZ25pbmdBbGdzID0gWydSUzI1NiddO1xyXG5cclxuY29uc3QgandzID0ge1xyXG4gICAgSldTOiB7XHJcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIHZhciBoZWFkZXI7XHJcbiAgICAgICAgICAgIHZhciBwYXlsb2FkO1xyXG5cclxuICAgICAgICAgICAgLy8gVGhpcyBkaXZlcmdlcyBmcm9tIEF1dGgwJ3MgaW1wbGVtZW50YXRpb24sIHdoaWNoIHRocm93cyByYXRoZXIgdGhhblxyXG4gICAgICAgICAgICAvLyByZXR1cm5pbmcgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIgPSBKU09OLnBhcnNlKEJhc2U2NC51cmxEZWNvZGUocGFydHNbMF0pKTtcclxuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKEJhc2U2NC51cmxEZWNvZGUocGFydHNbMV0pKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignVG9rZW4gaGVhZGVyIG9yIHBheWxvYWQgaXMgbm90IHZhbGlkIEpTT04nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlck9iajogaGVhZGVyLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZE9iajogcGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcmlmeTogZnVuY3Rpb24oand0LCBrZXksIGFsbG93ZWRTaWduaW5nQWxncyA9IFtdKSB7XHJcbiAgICAgICAgICAgIGFsbG93ZWRTaWduaW5nQWxncy5mb3JFYWNoKChhbGcpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChBbGxvd2VkU2lnbmluZ0FsZ3MuaW5kZXhPZihhbGcpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaWduaW5nIGFsZ29yaXRobTogJyArIGFsZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgdmVyaWZ5ID0gbmV3IFJTQVZlcmlmaWVyKGtleS5uLCBrZXkuZSk7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGp3dC5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGhlYWRlckFuZFBheWxvYWQgPSBbcGFydHNbMF0sIHBhcnRzWzFdXS5qb2luKCcuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZXJpZnkudmVyaWZ5KGhlYWRlckFuZFBheWxvYWQsIHBhcnRzWzJdKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IEtleVV0aWwgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgZGVjb2RlZCBrZXlzIGluIEhleCBmb3JtYXQgZm9yIHVzZSBpbiBjcnlwdG8gZnVuY3Rpb25zLlxyXG4gICAgICogU3VwcG9ydHMgbW9kdWx1cy9leHBvbmVudC1zdHlsZSBrZXlzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBrZXkgdGhlIHNlY3VyaXR5IGtleVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0S2V5KGtleSkge1xyXG4gICAgICAgIGlmIChrZXkua3R5ID09PSAnUlNBJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZTogQmFzZTY0LmRlY29kZVRvSEVYKGtleS5lKSxcclxuICAgICAgICAgICAgICAgIG46IEJhc2U2NC5kZWNvZGVUb0hFWChrZXkubiksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBYNTA5ID0ge1xyXG4gICAgZ2V0UHVibGljS2V5RnJvbUNlcnRQRU06IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkLiBVc2UgdGhlIGZ1bGwgb2lkYy1jbGllbnQgbGlicmFyeSBpZiB5b3UgbmVlZCBzdXBwb3J0IGZvciBYNTA5LicpO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNyeXB0byA9IHtcclxuICAgIFV0aWw6IHtcclxuICAgICAgICBoYXNoU3RyaW5nOiBmdW5jdGlvbih2YWx1ZSwgYWxnKSB7XHJcbiAgICAgICAgICAgIHZhciBoYXNoRnVuYyA9IERpZ2VzdEFsZ3NbYWxnXTtcclxuICAgICAgICAgICAgcmV0dXJuIGhhc2hGdW5jKHZhbHVlKS50b1N0cmluZygpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBoZXh0b2I2NHUocykge1xyXG4gICAgaWYgKHMubGVuZ3RoICUgMiA9PT0gMSkge1xyXG4gICAgICAgIHMgPSAnMCcgKyBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEJhc2U2NC5iYXNlNjRUb0Jhc2U2NFVybChCYXNlNjQuaGV4VG9CYXNlNjQocykpO1xyXG59XHJcblxyXG5jb25zdCB7YjY0dG9oZXh9ID0gQmFzZTY0O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGp3cyxcclxuICAgIEtleVV0aWwsXHJcbiAgICBYNTA5LFxyXG4gICAgY3J5cHRvLFxyXG4gICAgaGV4dG9iNjR1LFxyXG4gICAgYjY0dG9oZXgsXHJcbiAgICBBbGxvd2VkU2lnbmluZ0FsZ3NcclxufTtcclxuIiwiLyoqXHJcbiAqIEdlbmVyYXRlcyBSRkM0MTIyIHZlcnNpb24gNCBndWlkICgpXHJcbiAqL1xyXG5cclxudmFyIGNyeXB0byA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyAod2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG8pIDogbnVsbDtcclxuXHJcbmZ1bmN0aW9uIF9jcnlwdG9VdWlkdjQoKSB7XHJcbiAgcmV0dXJuIChbMWU3XSstMWUzKy00ZTMrLThlMystMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYyA9PlxyXG4gICAgKGMgXiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmIDE1ID4+IGMgLyA0KS50b1N0cmluZygxNilcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF91dWlkdjQoKSB7XHJcbiAgICByZXR1cm4gKFsxZTddKy0xZTMrLTRlMystOGUzKy0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+XHJcbiAgICAoYyBeIE1hdGgucmFuZG9tKCkgKiAxNiA+PiBjIC8gNCkudG9TdHJpbmcoMTYpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5kb20oKSB7XHJcbiAgdmFyIGhhc0NyeXB0byA9IGNyeXB0byAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8gIT09IG51bGw7XHJcbiAgdmFyIGhhc1JhbmRvbVZhbHVlcyA9IGhhc0NyeXB0byAmJiAodHlwZW9mKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpICE9ICd1bmRlZmluZWQnKTsgIFxyXG4gIHZhciB1dWlkID0gaGFzUmFuZG9tVmFsdWVzID8gX2NyeXB0b1V1aWR2NCA6IF91dWlkdjQ7XHJcbiAgcmV0dXJuIHV1aWQoKS5yZXBsYWNlKC8tL2csICcnKTtcclxufVxyXG4iLCJjb25zdCBWZXJzaW9uID0gXCIxLjExLjAtYmV0YS4xXCI7IGV4cG9ydCB7VmVyc2lvbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
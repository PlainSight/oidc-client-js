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
        console.log('Received message from child: origin = ' + e.origin + ', source = ' + e.source + ', data = ' + e.data);
        console.log('Must have: origin == ' + this._origin + ', source == ' + this._frame.contentWindow + ' and data not falsey');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNibi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWNjZXNzVG9rZW5FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoZWNrU2Vzc2lvbklGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZG92YUlGcmFtZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZG92YVBvcHVwTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9Db3Jkb3ZhUG9wdXBXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9yUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lGcmFtZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUZyYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9Jbk1lbW9yeVdlYlN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pvc2VVdGlsSW1wbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSm9zZVV0aWxSc2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pzb25TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Mb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01ldGFkYXRhU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2lkY0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2lkY0NsaWVudFNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9Qb3B1cE5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlZGlyZWN0TmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNwb25zZVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2Vzc2lvbk1vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWduaW5TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbm91dFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25vdXRSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lsZW50UmVuZXdTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rva2VuQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2tlblJldm9jYXRpb25DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VybFV0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJJbmZvU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJNYW5hZ2VyRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyTWFuYWdlclNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3J5cHRvL3JzYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZG9tLmpzIiwid2VicGFjazovLy8uL3ZlcnNpb24uanMiXSwibmFtZXMiOlsiVmVyc2lvbiIsIkxvZyIsIk9pZGNDbGllbnQiLCJPaWRjQ2xpZW50U2V0dGluZ3MiLCJXZWJTdG9yYWdlU3RhdGVTdG9yZSIsIkluTWVtb3J5V2ViU3RvcmFnZSIsIlVzZXJNYW5hZ2VyIiwiQWNjZXNzVG9rZW5FdmVudHMiLCJNZXRhZGF0YVNlcnZpY2UiLCJDb3Jkb3ZhUG9wdXBOYXZpZ2F0b3IiLCJDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yIiwiQ2hlY2tTZXNzaW9uSUZyYW1lIiwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50IiwiU2Vzc2lvbk1vbml0b3IiLCJHbG9iYWwiLCJVc2VyIiwiRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUiLCJhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXIiLCJUaW1lciIsImFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyIiwiX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiX2FjY2Vzc1Rva2VuRXhwaXJpbmciLCJfYWNjZXNzVG9rZW5FeHBpcmVkIiwibG9hZCIsImNvbnRhaW5lciIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNfaW4iLCJ1bmRlZmluZWQiLCJkdXJhdGlvbiIsImRlYnVnIiwiZXhwaXJpbmciLCJpbml0IiwiY2FuY2VsIiwiZXhwaXJlZCIsInVubG9hZCIsImFkZEFjY2Vzc1Rva2VuRXhwaXJpbmciLCJjYiIsImFkZEhhbmRsZXIiLCJyZW1vdmVBY2Nlc3NUb2tlbkV4cGlyaW5nIiwicmVtb3ZlSGFuZGxlciIsImFkZEFjY2Vzc1Rva2VuRXhwaXJlZCIsInJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJlZCIsIkRlZmF1bHRJbnRlcnZhbCIsImNhbGxiYWNrIiwiY2xpZW50X2lkIiwidXJsIiwiaW50ZXJ2YWwiLCJzdG9wT25FcnJvciIsIl9jYWxsYmFjayIsIl9jbGllbnRfaWQiLCJfdXJsIiwiX2ludGVydmFsIiwiX3N0b3BPbkVycm9yIiwiaWR4IiwiaW5kZXhPZiIsIl9mcmFtZV9vcmlnaW4iLCJzdWJzdHIiLCJfZnJhbWUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsIlByb21pc2UiLCJyZXNvbHZlIiwib25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiX2JvdW5kTWVzc2FnZUV2ZW50IiwiX21lc3NhZ2UiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJvcmlnaW4iLCJzb3VyY2UiLCJjb250ZW50V2luZG93IiwiZGF0YSIsImVycm9yIiwic3RvcCIsInN0YXJ0Iiwic2Vzc2lvbl9zdGF0ZSIsIl9zZXNzaW9uX3N0YXRlIiwic2VuZCIsInBvc3RNZXNzYWdlIiwiX3RpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicHJlcGFyZSIsInBhcmFtcyIsInBvcHVwV2luZG93RmVhdHVyZXMiLCJwb3B1cCIsIkNvcmRvdmFQb3B1cFdpbmRvdyIsIkRlZmF1bHRQb3B1cEZlYXR1cmVzIiwiRGVmYXVsdFBvcHVwVGFyZ2V0IiwiX3Byb21pc2UiLCJyZWplY3QiLCJfcmVzb2x2ZSIsIl9yZWplY3QiLCJmZWF0dXJlcyIsInRhcmdldCIsInBvcHVwV2luZG93VGFyZ2V0IiwicmVkaXJlY3RfdXJpIiwic3RhcnRVcmwiLCJfaXNJbkFwcEJyb3dzZXJJbnN0YWxsZWQiLCJjb3Jkb3ZhTWV0YWRhdGEiLCJzb21lIiwibmFtZSIsImhhc093blByb3BlcnR5IiwibmF2aWdhdGUiLCJfZXJyb3IiLCJjb3Jkb3ZhIiwicmVxdWlyZSIsIm1ldGFkYXRhIiwiX3BvcHVwIiwiSW5BcHBCcm93c2VyIiwib3BlbiIsIl9leGl0Q2FsbGJhY2tFdmVudCIsIl9leGl0Q2FsbGJhY2siLCJfbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCIsIl9sb2FkU3RhcnRDYWxsYmFjayIsInByb21pc2UiLCJldmVudCIsIl9zdWNjZXNzIiwibWVzc2FnZSIsIl9jbGVhbnVwIiwiRXJyb3IiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJFcnJvclJlc3BvbnNlIiwiZXJyb3JfZGVzY3JpcHRpb24iLCJlcnJvcl91cmkiLCJzdGF0ZSIsIkV2ZW50IiwiX25hbWUiLCJfY2FsbGJhY2tzIiwicHVzaCIsImZpbmRJbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJyYWlzZSIsImkiLCJsZW5ndGgiLCJ0aW1lciIsImhhbmRsZSIsInRlc3RpbmciLCJyZXF1ZXN0IiwiX3Rlc3RpbmciLCJzZXRYTUxIdHRwUmVxdWVzdCIsIm5ld1JlcXVlc3QiLCJsb2NhdGlvbiIsImxvY2FsU3RvcmFnZSIsInNlc3Npb25TdG9yYWdlIiwiWE1MSHR0cFJlcXVlc3QiLCJJRnJhbWVOYXZpZ2F0b3IiLCJmcmFtZSIsIklGcmFtZVdpbmRvdyIsIm5vdGlmeVBhcmVudCIsIkRlZmF1bHRUaW1lb3V0IiwidGltZW91dCIsInNpbGVudFJlcXVlc3RUaW1lb3V0Iiwic2V0VGltZW91dCIsIl90aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwiX29yaWdpbiIsImhyZWYiLCJwcm90b2NvbCIsImhvc3QiLCJwYXJlbnQiLCJfZGF0YSIsImdldEl0ZW0iLCJrZXkiLCJzZXRJdGVtIiwidmFsdWUiLCJyZW1vdmVJdGVtIiwiaW5kZXgiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZ2V0Sm9zZVV0aWwiLCJqd3MiLCJLZXlVdGlsIiwiWDUwOSIsImNyeXB0byIsImhleHRvYjY0dSIsImI2NHRvaGV4IiwiQWxsb3dlZFNpZ25pbmdBbGdzIiwicGFyc2VKd3QiLCJqd3QiLCJ0b2tlbiIsIkpXUyIsInBhcnNlIiwiaGVhZGVyIiwiaGVhZGVyT2JqIiwicGF5bG9hZCIsInBheWxvYWRPYmoiLCJ2YWxpZGF0ZUp3dCIsImlzc3VlciIsImF1ZGllbmNlIiwiY2xvY2tTa2V3Iiwibm93IiwidGltZUluc2Vuc2l0aXZlIiwia3R5IiwibiIsImdldEtleSIsIng1YyIsImhleCIsImdldFB1YmxpY0tleUZyb21DZXJ0SGV4IiwiY3J2IiwieCIsInkiLCJKb3NlVXRpbCIsIl92YWxpZGF0ZUp3dCIsInZhbGlkYXRlSnd0QXR0cmlidXRlcyIsInBhcnNlSW50IiwiRGF0ZSIsImlzcyIsImF1ZCIsInZhbGlkQXVkaWVuY2UiLCJBcnJheSIsImlzQXJyYXkiLCJhenAiLCJsb3dlck5vdyIsInVwcGVyTm93IiwiaWF0IiwibmJmIiwiZXhwIiwidGhlbiIsInZlcmlmeSIsImhhc2hTdHJpbmciLCJhbGciLCJVdGlsIiwiaGV4VG9CYXNlNjRVcmwiLCJKc29uU2VydmljZSIsImFkZGl0aW9uYWxDb250ZW50VHlwZXMiLCJYTUxIdHRwUmVxdWVzdEN0b3IiLCJqd3RIYW5kbGVyIiwiX2NvbnRlbnRUeXBlcyIsInNsaWNlIiwiX1hNTEh0dHBSZXF1ZXN0IiwiX2p3dEhhbmRsZXIiLCJnZXRKc29uIiwicmVxIiwiYWxsb3dlZENvbnRlbnRUeXBlcyIsInN0YXR1cyIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJmb3VuZCIsImZpbmQiLCJzdGFydHNXaXRoIiwiSlNPTiIsInJlc3BvbnNlVGV4dCIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwic2V0UmVxdWVzdEhlYWRlciIsInBvc3RGb3JtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwibm9wTG9nZ2VyIiwiaW5mbyIsIndhcm4iLCJOT05FIiwiRVJST1IiLCJXQVJOIiwiSU5GTyIsIkRFQlVHIiwibG9nZ2VyIiwibGV2ZWwiLCJyZXNldCIsImFyZ3MiLCJhcHBseSIsImZyb20iLCJPaWRjTWV0YWRhdGFVcmxQYXRoIiwic2V0dGluZ3MiLCJKc29uU2VydmljZUN0b3IiLCJfc2V0dGluZ3MiLCJfanNvblNlcnZpY2UiLCJnZXRNZXRhZGF0YSIsIm1ldGFkYXRhVXJsIiwiZ2V0SXNzdWVyIiwiX2dldE1ldGFkYXRhUHJvcGVydHkiLCJnZXRBdXRob3JpemF0aW9uRW5kcG9pbnQiLCJnZXRVc2VySW5mb0VuZHBvaW50IiwiZ2V0VG9rZW5FbmRwb2ludCIsIm9wdGlvbmFsIiwiZ2V0Q2hlY2tTZXNzaW9uSWZyYW1lIiwiZ2V0RW5kU2Vzc2lvbkVuZHBvaW50IiwiZ2V0UmV2b2NhdGlvbkVuZHBvaW50IiwiZ2V0S2V5c0VuZHBvaW50IiwiZ2V0U2lnbmluZ0tleXMiLCJzaWduaW5nS2V5cyIsImp3a3NfdXJpIiwia2V5U2V0Iiwia2V5cyIsIl9tZXRhZGF0YVVybCIsImF1dGhvcml0eSIsImNyZWF0ZVNpZ25pblJlcXVlc3QiLCJyZXNwb25zZV90eXBlIiwic2NvcGUiLCJwcm9tcHQiLCJtYXhfYWdlIiwidWlfbG9jYWxlcyIsImlkX3Rva2VuX2hpbnQiLCJsb2dpbl9oaW50IiwiYWNyX3ZhbHVlcyIsInJlc291cmNlIiwicmVxdWVzdF91cmkiLCJyZXNwb25zZV9tb2RlIiwiZXh0cmFRdWVyeVBhcmFtcyIsImV4dHJhVG9rZW5QYXJhbXMiLCJyZXF1ZXN0X3R5cGUiLCJza2lwVXNlckluZm8iLCJzdGF0ZVN0b3JlIiwiU2lnbmluUmVxdWVzdCIsImlzQ29kZSIsIl9tZXRhZGF0YVNlcnZpY2UiLCJzaWduaW5SZXF1ZXN0IiwiY2xpZW50X3NlY3JldCIsInNpZ25pblN0YXRlIiwiX3N0YXRlU3RvcmUiLCJzZXQiLCJpZCIsInRvU3RvcmFnZVN0cmluZyIsInJlYWRTaWduaW5SZXNwb25zZVN0YXRlIiwicmVtb3ZlU3RhdGUiLCJ1c2VRdWVyeSIsImRlbGltaXRlciIsInJlc3BvbnNlIiwiU2lnbmluUmVzcG9uc2UiLCJzdGF0ZUFwaSIsInJlbW92ZSIsImdldCIsInN0b3JlZFN0YXRlU3RyaW5nIiwiU2lnbmluU3RhdGUiLCJmcm9tU3RvcmFnZVN0cmluZyIsInByb2Nlc3NTaWduaW5SZXNwb25zZSIsIl92YWxpZGF0b3IiLCJ2YWxpZGF0ZVNpZ25pblJlc3BvbnNlIiwiY3JlYXRlU2lnbm91dFJlcXVlc3QiLCJwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJTaWdub3V0UmVxdWVzdCIsInNpZ25vdXRTdGF0ZSIsInJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSIsIlNpZ25vdXRSZXNwb25zZSIsInN0YXRlS2V5IiwiU3RhdGUiLCJwcm9jZXNzU2lnbm91dFJlc3BvbnNlIiwidmFsaWRhdGVTaWdub3V0UmVzcG9uc2UiLCJjbGVhclN0YWxlU3RhdGUiLCJzdGFsZVN0YXRlQWdlIiwidmFsaWRhdG9yIiwibWV0YWRhdGFTZXJ2aWNlIiwiRGVmYXVsdFJlc3BvbnNlVHlwZSIsIkRlZmF1bHRTY29wZSIsIkRlZmF1bHRTdGFsZVN0YXRlQWdlIiwiRGVmYXVsdENsb2NrU2tld0luU2Vjb25kcyIsImZpbHRlclByb3RvY29sQ2xhaW1zIiwibG9hZFVzZXJJbmZvIiwidXNlckluZm9Kd3RJc3N1ZXIiLCJSZXNwb25zZVZhbGlkYXRvckN0b3IiLCJSZXNwb25zZVZhbGlkYXRvciIsIk1ldGFkYXRhU2VydmljZUN0b3IiLCJfYXV0aG9yaXR5IiwiX21ldGFkYXRhIiwiX3NpZ25pbmdLZXlzIiwiX2NsaWVudF9zZWNyZXQiLCJfcmVzcG9uc2VfdHlwZSIsIl9zY29wZSIsIl9yZWRpcmVjdF91cmkiLCJfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiX3Byb21wdCIsIl9kaXNwbGF5IiwiX21heF9hZ2UiLCJfdWlfbG9jYWxlcyIsIl9hY3JfdmFsdWVzIiwiX3Jlc291cmNlIiwiX3Jlc3BvbnNlX21vZGUiLCJfZmlsdGVyUHJvdG9jb2xDbGFpbXMiLCJfbG9hZFVzZXJJbmZvIiwiX3N0YWxlU3RhdGVBZ2UiLCJfY2xvY2tTa2V3IiwiX3VzZXJJbmZvSnd0SXNzdWVyIiwiX2V4dHJhUXVlcnlQYXJhbXMiLCJfZXh0cmFUb2tlblBhcmFtcyIsIlBvcHVwTmF2aWdhdG9yIiwiUG9wdXBXaW5kb3ciLCJrZWVwT3BlbiIsIm5vdGlmeU9wZW5lciIsIkNoZWNrRm9yUG9wdXBDbG9zZWRJbnRlcnZhbCIsIl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIiLCJfY2hlY2tGb3JQb3B1cENsb3NlZCIsIl9pZCIsImZvY3VzIiwiY2xvc2VkIiwib3BlbmVyIiwiVXJsVXRpbGl0eSIsInBhcnNlVXJsRnJhZ21lbnQiLCJSZWRpcmVjdE5hdmlnYXRvciIsInVzZVJlcGxhY2VUb05hdmlnYXRlIiwicmVwbGFjZSIsIlByb3RvY29sQ2xhaW1zIiwiVXNlckluZm9TZXJ2aWNlQ3RvciIsIlVzZXJJbmZvU2VydmljZSIsImpvc2VVdGlsIiwiVG9rZW5DbGllbnRDdG9yIiwiVG9rZW5DbGllbnQiLCJfdXNlckluZm9TZXJ2aWNlIiwiX2pvc2VVdGlsIiwiX3Rva2VuQ2xpZW50IiwiX3Byb2Nlc3NTaWduaW5QYXJhbXMiLCJfdmFsaWRhdGVUb2tlbnMiLCJfcHJvY2Vzc0NsYWltcyIsIm5vbmNlIiwiaWRfdG9rZW4iLCJjb2RlX3ZlcmlmaWVyIiwiY29kZSIsImlzT3BlbklkQ29ubmVjdCIsInByb2ZpbGUiLCJnZXRDbGFpbXMiLCJjbGFpbXMiLCJzdWIiLCJfbWVyZ2VDbGFpbXMiLCJjbGFpbXMxIiwiY2xhaW1zMiIsInJlc3VsdCIsImFzc2lnbiIsInZhbHVlcyIsImZvckVhY2giLCJ0eXBlIiwiX3Byb2Nlc3NDb2RlIiwiX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuIiwiX3ZhbGlkYXRlSWRUb2tlbiIsImV4Y2hhbmdlQ29kZSIsInRva2VuUmVzcG9uc2UiLCJfdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlcyIsImNsb2NrU2tld0luU2Vjb25kcyIsIl92YWxpZGF0ZUFjY2Vzc1Rva2VuIiwia2lkIiwiX2ZpbHRlckJ5QWxnIiwiZmlsdGVyIiwiYXRfaGFzaCIsImhhc2hBbGciLCJoYXNoQml0cyIsInNoYSIsImhhc2giLCJsZWZ0IiwibGVmdF9iNjR1IiwidXNlck1hbmFnZXIiLCJDaGVja1Nlc3Npb25JRnJhbWVDdG9yIiwiX3VzZXJNYW5hZ2VyIiwiX0NoZWNrU2Vzc2lvbklGcmFtZUN0b3IiLCJldmVudHMiLCJhZGRVc2VyTG9hZGVkIiwiX3N0YXJ0IiwiYWRkVXNlclVubG9hZGVkIiwiX3N0b3AiLCJnZXRVc2VyIiwidXNlciIsIm1vbml0b3JBbm9ueW1vdXNTZXNzaW9uIiwicXVlcnlTZXNzaW9uU3RhdHVzIiwidG1wVXNlciIsInNlc3Npb24iLCJzaWQiLCJjYXRjaCIsImVyciIsIl9zdWIiLCJfc2lkIiwiX2NoZWNrU2Vzc2lvbklGcmFtZSIsIl9jaGVja1Nlc3Npb25JbnRlcnZhbCIsIl9zdG9wQ2hlY2tTZXNzaW9uT25FcnJvciIsInRpbWVySGFuZGxlIiwicmFpc2VFdmVudCIsIl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCIsIl9yYWlzZVVzZXJTaWduZWRPdXQiLCJfcmFpc2VVc2VyU2lnbmVkSW4iLCJjaGVja1Nlc3Npb25JbnRlcnZhbCIsInN0b3BDaGVja1Nlc3Npb25PbkVycm9yIiwib2lkYyIsImlzT2lkYyIsImFkZFF1ZXJ5UGFyYW0iLCJjb2RlX2NoYWxsZW5nZSIsInNwbGl0IiwiaXNPQXV0aCIsIk9pZGNTY29wZSIsInRva2VuX3R5cGUiLCJleHBpcmVzX2F0Iiwic2NvcGVzIiwiYXJndW1lbnRzIiwiX25vbmNlIiwiX2NvZGVfdmVyaWZpZXIiLCJfY29kZV9jaGFsbGVuZ2UiLCJfc2tpcFVzZXJJbmZvIiwic3RyaW5naWZ5IiwiY3JlYXRlZCIsInN0b3JhZ2VTdHJpbmciLCJTaWxlbnRSZW5ld1NlcnZpY2UiLCJfdG9rZW5FeHBpcmluZyIsInNpZ25pblNpbGVudCIsIl9yYWlzZVNpbGVudFJlbmV3RXJyb3IiLCJfY3JlYXRlZCIsIl9yZXF1ZXN0X3R5cGUiLCJzdG9yYWdlIiwiYWdlIiwiY3V0b2ZmIiwiZ2V0QWxsS2V5cyIsInByb21pc2VzIiwicCIsImFsbCIsIlRpbWVyRHVyYXRpb24iLCJub3dGdW5jIiwiX25vd0Z1bmMiLCJleHBpcmF0aW9uIiwiX3RpbWVySGFuZGxlIiwiX2V4cGlyYXRpb24iLCJ0aW1lckR1cmF0aW9uIiwiZGlmZiIsImdyYW50X3R5cGUiLCJleGNoYW5nZVJlZnJlc2hUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJBY2Nlc3NUb2tlblR5cGVIaW50IiwiUmVmcmVzaFRva2VuVHlwZUhpbnQiLCJfWE1MSHR0cFJlcXVlc3RDdG9yIiwicmV2b2tlIiwicmVxdWlyZWQiLCJfcmV2b2tlIiwieGhyIiwiZ2xvYmFsIiwibGFzdEluZGV4T2YiLCJyZWdleCIsIm0iLCJjb3VudGVyIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCIsInByb3AiLCJfZ2V0Q2xhaW1zRnJvbUp3dCIsImlzc3VlclByb21pc2UiLCJTaWxlbnRSZW5ld1NlcnZpY2VDdG9yIiwiU2Vzc2lvbk1vbml0b3JDdG9yIiwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3RvciIsIlVzZXJNYW5hZ2VyU2V0dGluZ3MiLCJfZXZlbnRzIiwiVXNlck1hbmFnZXJFdmVudHMiLCJfc2lsZW50UmVuZXdTZXJ2aWNlIiwiYXV0b21hdGljU2lsZW50UmVuZXciLCJzdGFydFNpbGVudFJlbmV3IiwibW9uaXRvclNlc3Npb24iLCJfc2Vzc2lvbk1vbml0b3IiLCJfdG9rZW5SZXZvY2F0aW9uQ2xpZW50IiwiX2xvYWRVc2VyIiwicmVtb3ZlVXNlciIsInN0b3JlVXNlciIsInNpZ25pblJlZGlyZWN0IiwibmF2UGFyYW1zIiwiX3NpZ25pblN0YXJ0IiwiX3JlZGlyZWN0TmF2aWdhdG9yIiwic2lnbmluUmVkaXJlY3RDYWxsYmFjayIsIl9zaWduaW5FbmQiLCJzaWduaW5Qb3B1cCIsInBvcHVwX3JlZGlyZWN0X3VyaSIsIl9zaWduaW4iLCJfcG9wdXBOYXZpZ2F0b3IiLCJzaWduaW5Qb3B1cENhbGxiYWNrIiwiX3NpZ25pbkNhbGxiYWNrIiwiX3VzZVJlZnJlc2hUb2tlbiIsImluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyIsInZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyIsImN1cnJlbnRfc3ViIiwiX3NpZ25pblNpbGVudElmcmFtZSIsImlkVG9rZW5WYWxpZGF0aW9uIiwiX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbiIsImF1dGhfdGltZSIsInNpbGVudF9yZWRpcmVjdF91cmkiLCJfaWZyYW1lTmF2aWdhdG9yIiwic2lnbmluU2lsZW50Q2FsbGJhY2siLCJzaWduaW5DYWxsYmFjayIsInNpZ25vdXRDYWxsYmFjayIsInNpZ25vdXRSZWRpcmVjdENhbGxiYWNrIiwic2lnbm91dFBvcHVwQ2FsbGJhY2siLCJxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSIsIm5hdlJlc3BvbnNlIiwic2lnbmluUmVzcG9uc2UiLCJuYXZpZ2F0b3IiLCJuYXZpZ2F0b3JQYXJhbXMiLCJzaWdub3V0UmVkaXJlY3QiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJfc2lnbm91dFN0YXJ0IiwiX3NpZ25vdXRFbmQiLCJzaWdub3V0UG9wdXAiLCJwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfc2lnbm91dCIsInJldm9rZVByb21pc2UiLCJyZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCIsIl9yZXZva2VJbnRlcm5hbCIsInNpZ25vdXRSZXF1ZXN0Iiwic2lnbm91dFJlc3BvbnNlIiwicmV2b2tlQWNjZXNzVG9rZW4iLCJzdWNjZXNzIiwiX3Jldm9rZUFjY2Vzc1Rva2VuSW50ZXJuYWwiLCJfcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwiLCJhdFN1Y2Nlc3MiLCJydFN1Y2Nlc3MiLCJzdG9wU2lsZW50UmVuZXciLCJfdXNlclN0b3JlIiwiX3VzZXJTdG9yZUtleSIsInJlZGlyZWN0TmF2aWdhdG9yIiwicG9wdXBOYXZpZ2F0b3IiLCJpZnJhbWVOYXZpZ2F0b3IiLCJ1c2VyU3RvcmUiLCJfdXNlckxvYWRlZCIsIl91c2VyVW5sb2FkZWQiLCJfc2lsZW50UmVuZXdFcnJvciIsIl91c2VyU2lnbmVkSW4iLCJfdXNlclNpZ25lZE91dCIsIl91c2VyU2Vzc2lvbkNoYW5nZWQiLCJyZW1vdmVVc2VyTG9hZGVkIiwicmVtb3ZlVXNlclVubG9hZGVkIiwiYWRkU2lsZW50UmVuZXdFcnJvciIsInJlbW92ZVNpbGVudFJlbmV3RXJyb3IiLCJhZGRVc2VyU2lnbmVkSW4iLCJyZW1vdmVVc2VyU2lnbmVkSW4iLCJhZGRVc2VyU2lnbmVkT3V0IiwicmVtb3ZlVXNlclNpZ25lZE91dCIsImFkZFVzZXJTZXNzaW9uQ2hhbmdlZCIsInJlbW92ZVVzZXJTZXNzaW9uQ2hhbmdlZCIsIkRlZmF1bHRDaGVja1Nlc3Npb25JbnRlcnZhbCIsInN0b3JlIiwiX3BvcHVwX3JlZGlyZWN0X3VyaSIsIl9wb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfcG9wdXBXaW5kb3dGZWF0dXJlcyIsIl9wb3B1cFdpbmRvd1RhcmdldCIsIl9zaWxlbnRfcmVkaXJlY3RfdXJpIiwiX3NpbGVudFJlcXVlc3RUaW1lb3V0IiwiX2F1dG9tYXRpY1NpbGVudFJlbmV3IiwiX3ZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyIsIl9pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXciLCJfbW9uaXRvclNlc3Npb24iLCJfbW9uaXRvckFub255bW91c1Nlc3Npb24iLCJfcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUiLCJfcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQiLCJwcmVmaXgiLCJfc3RvcmUiLCJfcHJlZml4IiwiQmlnSW50ZWdlciIsIkpTQk4iLCJiNjRtYXAiLCJiNjRwYWQiLCJCYXNlNjQiLCJzIiwicmV0IiwiayIsInNsb3AiLCJjaGFyQXQiLCJ2IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiaGV4VG9CYXNlNjQiLCJoIiwiYyIsInN1YnN0cmluZyIsInBhZGRpbmciLCJzdHIiLCJtb2QiLCJwYWQiLCJqb2luIiwiYnl0ZUFycmF5VG9IZXgiLCJyYXciLCJIRVgiLCJfaGV4IiwidG9TdHJpbmciLCJkZWNvZGVUb0hFWCIsImJhc2U2NEpzIiwidG9CeXRlQXJyYXkiLCJiYXNlNjRUb0Jhc2U2NFVybCIsInVybERlY29kZSIsImF0b2IiLCJEaWdlc3RJbmZvSGVhZCIsInNoYTEiLCJzaGEyMjQiLCJzaGEyNTYiLCJzaGEzODQiLCJzaGE1MTIiLCJtZDIiLCJtZDUiLCJyaXBlbWQxNjAiLCJEaWdlc3RBbGdzIiwiU0hBMjU2IiwiUlNBVmVyaWZpZXIiLCJtb2R1bHVzIiwiZ2V0QWxnb3JpdGhtRnJvbURpZ2VzdCIsImhEaWdlc3RJbmZvIiwiYWxnTmFtZSIsImhlYWQiLCJsZW4iLCJwcm90b3R5cGUiLCJtc2ciLCJlbmNzaWciLCJzaWciLCJiaXRMZW5ndGgiLCJkZWNyeXB0ZWRTaWciLCJtb2RQb3dJbnQiLCJkaWdlc3QiLCJkaWdlc3RJbmZvIiwibXNnSGFzaCIsInBhcnRzIiwiYWxsb3dlZFNpZ25pbmdBbGdzIiwiaGVhZGVyQW5kUGF5bG9hZCIsImdldFB1YmxpY0tleUZyb21DZXJ0UEVNIiwiaGFzaEZ1bmMiLCJyYW5kb20iLCJtc0NyeXB0byIsIl9jcnlwdG9VdWlkdjQiLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50OEFycmF5IiwiX3V1aWR2NCIsIk1hdGgiLCJoYXNDcnlwdG8iLCJoYXNSYW5kb21WYWx1ZXMiLCJ1dWlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNB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QUFsQyxDQUEyQyxFQUEzQyxDQURzRDtBQUFBLEdBQS9DLENBQVA7QUFHSDs7QUFFYyxTQUFTd0MsTUFBVCxHQUFrQjtBQUMvQixNQUFJTyxZQUFZbmhCLFVBQVUsV0FBVixJQUF5QkEsV0FBVyxJQUFwRDtBQUNBLE1BQUlvaEIsa0JBQWtCRCxhQUFjLE9BQU9uaEIsT0FBTytnQixlQUFkLElBQWtDLFdBQXRFO0FBQ0EsTUFBSU0sT0FBT0Qsa0JBQWtCTixhQUFsQixHQUFrQ0csT0FBN0M7QUFDQSxTQUFPSSxPQUFPOVQsT0FBUCxDQUFlLElBQWYsRUFBcUIsRUFBckIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkQsSUFBTXJaLFVBQVUsZUFBaEIsQyxRQUF5Q0EsTyxHQUFBQSxPIiwiZmlsZSI6Im9pZGMtY2xpZW50LnJzYTI1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9zcmMvTG9nLmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudCB9IGZyb20gJy4vc3JjL09pZGNDbGllbnQuanMnO1xyXG5pbXBvcnQgeyBPaWRjQ2xpZW50U2V0dGluZ3MgfSBmcm9tICcuL3NyYy9PaWRjQ2xpZW50U2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgeyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJy4vc3JjL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlLmpzJztcclxuaW1wb3J0IHsgSW5NZW1vcnlXZWJTdG9yYWdlIH0gZnJvbSAnLi9zcmMvSW5NZW1vcnlXZWJTdG9yYWdlLmpzJztcclxuaW1wb3J0IHsgVXNlck1hbmFnZXIgfSBmcm9tICcuL3NyYy9Vc2VyTWFuYWdlci5qcyc7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRXZlbnRzIH0gZnJvbSAnLi9zcmMvQWNjZXNzVG9rZW5FdmVudHMuanMnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL3NyYy9NZXRhZGF0YVNlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhUG9wdXBOYXZpZ2F0b3IgfSBmcm9tICcuL3NyYy9Db3Jkb3ZhUG9wdXBOYXZpZ2F0b3IuanMnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yIH0gZnJvbSAnLi9zcmMvQ29yZG92YUlGcmFtZU5hdmlnYXRvci5qcyc7XHJcbmltcG9ydCB7IENoZWNrU2Vzc2lvbklGcmFtZSB9IGZyb20gJy4vc3JjL0NoZWNrU2Vzc2lvbklGcmFtZS5qcyc7XHJcbmltcG9ydCB7IFRva2VuUmV2b2NhdGlvbkNsaWVudCB9IGZyb20gJy4vc3JjL1Rva2VuUmV2b2NhdGlvbkNsaWVudC5qcyc7XHJcbmltcG9ydCB7IFNlc3Npb25Nb25pdG9yIH0gZnJvbSAnLi9zcmMvU2Vzc2lvbk1vbml0b3IuanMnO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL3NyYy9HbG9iYWwuanMnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9zcmMvVXNlci5qcyc7XHJcblxyXG5pbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnLi92ZXJzaW9uLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFZlcnNpb24sXHJcbiAgICBMb2csXHJcbiAgICBPaWRjQ2xpZW50LFxyXG4gICAgT2lkY0NsaWVudFNldHRpbmdzLFxyXG4gICAgV2ViU3RvcmFnZVN0YXRlU3RvcmUsXHJcbiAgICBJbk1lbW9yeVdlYlN0b3JhZ2UsXHJcbiAgICBVc2VyTWFuYWdlcixcclxuICAgIEFjY2Vzc1Rva2VuRXZlbnRzLFxyXG4gICAgTWV0YWRhdGFTZXJ2aWNlLFxyXG4gICAgQ29yZG92YVBvcHVwTmF2aWdhdG9yLFxyXG4gICAgQ29yZG92YUlGcmFtZU5hdmlnYXRvcixcclxuICAgIENoZWNrU2Vzc2lvbklGcmFtZSxcclxuICAgIFRva2VuUmV2b2NhdGlvbkNsaWVudCxcclxuICAgIFNlc3Npb25Nb25pdG9yLFxyXG4gICAgR2xvYmFsLFxyXG4gICAgVXNlclxyXG59O1xyXG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRyb290LkNyeXB0b0pTID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuXHQvKipcblx0ICogQ3J5cHRvSlMgY29yZSBjb21wb25lbnRzLlxuXHQgKi9cblx0dmFyIENyeXB0b0pTID0gQ3J5cHRvSlMgfHwgKGZ1bmN0aW9uIChNYXRoLCB1bmRlZmluZWQpIHtcblx0ICAgIC8qXG5cdCAgICAgKiBMb2NhbCBwb2x5ZmlsIG9mIE9iamVjdC5jcmVhdGVcblx0ICAgICAqL1xuXHQgICAgdmFyIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBGKCkge307XG5cblx0ICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuXHQgICAgICAgICAgICB2YXIgc3VidHlwZTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG9iajtcblxuXHQgICAgICAgICAgICBzdWJ0eXBlID0gbmV3IEYoKTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG51bGw7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHN1YnR5cGU7XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSlcblxuXHQgICAgLyoqXG5cdCAgICAgKiBDcnlwdG9KUyBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGlicmFyeSBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2xpYiA9IEMubGliID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogQmFzZSBvYmplY3QgZm9yIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBCYXNlID0gQ19saWIuQmFzZSA9IChmdW5jdGlvbiAoKSB7XG5cblxuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvdmVycmlkZXMgUHJvcGVydGllcyB0byBjb3B5IGludG8gdGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBNeVR5cGUgPSBDcnlwdG9KUy5saWIuQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnLFxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIG1ldGhvZDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgZXh0ZW5kOiBmdW5jdGlvbiAob3ZlcnJpZGVzKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTcGF3blxuXHQgICAgICAgICAgICAgICAgdmFyIHN1YnR5cGUgPSBjcmVhdGUodGhpcyk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIEF1Z21lbnRcblx0ICAgICAgICAgICAgICAgIGlmIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLm1peEluKG92ZXJyaWRlcyk7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBkZWZhdWx0IGluaXRpYWxpemVyXG5cdCAgICAgICAgICAgICAgICBpZiAoIXN1YnR5cGUuaGFzT3duUHJvcGVydHkoJ2luaXQnKSB8fCB0aGlzLmluaXQgPT09IHN1YnR5cGUuaW5pdCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemVyJ3MgcHJvdG90eXBlIGlzIHRoZSBzdWJ0eXBlIG9iamVjdFxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0LnByb3RvdHlwZSA9IHN1YnR5cGU7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlZmVyZW5jZSBzdXBlcnR5cGVcblx0ICAgICAgICAgICAgICAgIHN1YnR5cGUuJHN1cGVyID0gdGhpcztcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHN1YnR5cGU7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIEV4dGVuZHMgdGhpcyBvYmplY3QgYW5kIHJ1bnMgdGhlIGluaXQgbWV0aG9kLlxuXHQgICAgICAgICAgICAgKiBBcmd1bWVudHMgdG8gY3JlYXRlKCkgd2lsbCBiZSBwYXNzZWQgdG8gaW5pdCgpLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgaW5zdGFuY2UgPSBNeVR5cGUuY3JlYXRlKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZXh0ZW5kKCk7XG5cdCAgICAgICAgICAgICAgICBpbnN0YW5jZS5pbml0LmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBvYmplY3QuXG5cdCAgICAgICAgICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGFkZCBzb21lIGxvZ2ljIHdoZW4geW91ciBvYmplY3RzIGFyZSBjcmVhdGVkLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgKiAgICAgICAgICAgICAvLyAuLi5cblx0ICAgICAgICAgICAgICogICAgICAgICB9XG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ29waWVzIHByb3BlcnRpZXMgaW50byB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgVGhlIHByb3BlcnRpZXMgdG8gbWl4IGluLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgTXlUeXBlLm1peEluKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBmaWVsZDogJ3ZhbHVlJ1xuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBtaXhJbjogZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBJRSB3b24ndCBjb3B5IHRvU3RyaW5nIHVzaW5nIHRoZSBsb29wIGFib3ZlXG5cdCAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eSgndG9TdHJpbmcnKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMudG9TdHJpbmcgPSBwcm9wZXJ0aWVzLnRvU3RyaW5nO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSBpbnN0YW5jZS5jbG9uZSgpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXQucHJvdG90eXBlLmV4dGVuZCh0aGlzKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge0FycmF5fSB3b3JkcyBUaGUgYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNpZ0J5dGVzIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICovXG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5ID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtBcnJheX0gd29yZHMgKE9wdGlvbmFsKSBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHNpZ0J5dGVzIChPcHRpb25hbCkgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGUgd29yZHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFsweDAwMDEwMjAzLCAweDA0MDUwNjA3XSwgNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdvcmRzLCBzaWdCeXRlcykge1xuXHQgICAgICAgICAgICB3b3JkcyA9IHRoaXMud29yZHMgPSB3b3JkcyB8fCBbXTtcblxuXHQgICAgICAgICAgICBpZiAoc2lnQnl0ZXMgIT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gd29yZHMubGVuZ3RoICogNDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIHdvcmQgYXJyYXkgdG8gYSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0VuY29kZXJ9IGVuY29kZXIgKE9wdGlvbmFsKSBUaGUgZW5jb2Rpbmcgc3RyYXRlZ3kgdG8gdXNlLiBEZWZhdWx0OiBDcnlwdG9KUy5lbmMuSGV4XG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBzdHJpbmdpZmllZCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5ICsgJyc7XG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIChlbmNvZGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAoZW5jb2RlciB8fCBIZXgpLnN0cmluZ2lmeSh0aGlzKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uY2F0ZW5hdGVzIGEgd29yZCBhcnJheSB0byB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5IHRvIGFwcGVuZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB3b3JkQXJyYXkxLmNvbmNhdCh3b3JkQXJyYXkyKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjb25jYXQ6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB0aGlzV29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgdGhpc1NpZ0J5dGVzID0gdGhpcy5zaWdCeXRlcztcblx0ICAgICAgICAgICAgdmFyIHRoYXRTaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDbGFtcCBleGNlc3MgYml0c1xuXHQgICAgICAgICAgICB0aGlzLmNsYW1wKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ29uY2F0XG5cdCAgICAgICAgICAgIGlmICh0aGlzU2lnQnl0ZXMgJSA0KSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSBieXRlIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0U2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0aGF0Qnl0ZSA9ICh0aGF0V29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaSkgPj4+IDJdIHw9IHRoYXRCeXRlIDw8ICgyNCAtICgodGhpc1NpZ0J5dGVzICsgaSkgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gQ29weSBvbmUgd29yZCBhdCBhIHRpbWVcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdFNpZ0J5dGVzOyBpICs9IDQpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzV29yZHNbKHRoaXNTaWdCeXRlcyArIGkpID4+PiAyXSA9IHRoYXRXb3Jkc1tpID4+PiAyXTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzICs9IHRoYXRTaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlbW92ZXMgaW5zaWduaWZpY2FudCBiaXRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB3b3JkQXJyYXkuY2xhbXAoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbGFtcDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gdGhpcy53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gdGhpcy5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDbGFtcFxuXHQgICAgICAgICAgICB3b3Jkc1tzaWdCeXRlcyA+Pj4gMl0gJj0gMHhmZmZmZmZmZiA8PCAoMzIgLSAoc2lnQnl0ZXMgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICB3b3Jkcy5sZW5ndGggPSBNYXRoLmNlaWwoc2lnQnl0ZXMgLyA0KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjbG9uZSA9IHdvcmRBcnJheS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUud29yZHMgPSB0aGlzLndvcmRzLnNsaWNlKDApO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHdvcmQgYXJyYXkgZmlsbGVkIHdpdGggcmFuZG9tIGJ5dGVzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG5CeXRlcyBUaGUgbnVtYmVyIG9mIHJhbmRvbSBieXRlcyB0byBnZW5lcmF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHJhbmRvbSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5yYW5kb20oMTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJhbmRvbTogZnVuY3Rpb24gKG5CeXRlcykge1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblxuXHQgICAgICAgICAgICB2YXIgciA9IChmdW5jdGlvbiAobV93KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgbV93ID0gbV93O1xuXHQgICAgICAgICAgICAgICAgdmFyIG1feiA9IDB4M2FkZTY4YjE7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWFzayA9IDB4ZmZmZmZmZmY7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbV96ID0gKDB4OTA2OSAqIChtX3ogJiAweEZGRkYpICsgKG1feiA+PiAweDEwKSkgJiBtYXNrO1xuXHQgICAgICAgICAgICAgICAgICAgIG1fdyA9ICgweDQ2NTAgKiAobV93ICYgMHhGRkZGKSArIChtX3cgPj4gMHgxMCkpICYgbWFzaztcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gKChtX3ogPDwgMHgxMCkgKyBtX3cpICYgbWFzaztcblx0ICAgICAgICAgICAgICAgICAgICByZXN1bHQgLz0gMHgxMDAwMDAwMDA7XG5cdCAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IDAuNTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICogKE1hdGgucmFuZG9tKCkgPiAuNSA/IDEgOiAtMSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0pO1xuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCByY2FjaGU7IGkgPCBuQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIF9yID0gcigocmNhY2hlIHx8IE1hdGgucmFuZG9tKCkpICogMHgxMDAwMDAwMDApO1xuXG5cdCAgICAgICAgICAgICAgICByY2FjaGUgPSBfcigpICogMHgzYWRlNjdiNztcblx0ICAgICAgICAgICAgICAgIHdvcmRzLnB1c2goKF9yKCkgKiAweDEwMDAwMDAwMCkgfCAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIG5CeXRlcyk7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogRW5jb2RlciBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogSGV4IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgSGV4ID0gQ19lbmMuSGV4ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhleFN0cmluZyA9IENyeXB0b0pTLmVuYy5IZXguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBoZXhDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgPj4+IDQpLnRvU3RyaW5nKDE2KSk7XG5cdCAgICAgICAgICAgICAgICBoZXhDaGFycy5wdXNoKChiaXRlICYgMHgwZikudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBoZXhDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBoZXggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoZXhTdHIgVGhlIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkhleC5wYXJzZShoZXhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAoaGV4U3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBoZXhTdHJMZW5ndGggPSBoZXhTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGV4U3RyTGVuZ3RoOyBpICs9IDIpIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDNdIHw9IHBhcnNlSW50KGhleFN0ci5zdWJzdHIoaSwgMiksIDE2KSA8PCAoMjQgLSAoaSAlIDgpICogNCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBoZXhTdHJMZW5ndGggLyAyKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIExhdGluMSBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIExhdGluMSA9IENfZW5jLkxhdGluMSA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBsYXRpbjFTdHJpbmcgPSBDcnlwdG9KUy5lbmMuTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xQ2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICBsYXRpbjFDaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYml0ZSkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGxhdGluMUNoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIExhdGluMSBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxhdGluMVN0ciBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuTGF0aW4xLnBhcnNlKGxhdGluMVN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChsYXRpbjFTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGxhdGluMVN0ckxlbmd0aCA9IGxhdGluMVN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXRpbjFTdHJMZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gMl0gfD0gKGxhdGluMVN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZikgPDwgKDI0IC0gKGkgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbGF0aW4xU3RyTGVuZ3RoKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIFVURi04IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgVXRmOCA9IENfZW5jLlV0ZjggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHV0ZjhTdHJpbmcgPSBDcnlwdG9KUy5lbmMuVXRmOC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKExhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KSkpO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hbGZvcm1lZCBVVEYtOCBkYXRhJyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBVVEYtOCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHV0ZjhTdHIgVGhlIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZSh1dGY4U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKHV0ZjhTdHIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIExhdGluMS5wYXJzZSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQodXRmOFN0cikpKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGJ1ZmZlcmVkIGJsb2NrIGFsZ29yaXRobSB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBUaGUgcHJvcGVydHkgYmxvY2tTaXplIG11c3QgYmUgaW1wbGVtZW50ZWQgaW4gYSBjb25jcmV0ZSBzdWJ0eXBlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfbWluQnVmZmVyU2l6ZSBUaGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IHNob3VsZCBiZSBrZXB0IHVucHJvY2Vzc2VkIGluIHRoZSBidWZmZXIuIERlZmF1bHQ6IDBcblx0ICAgICAqL1xuXHQgICAgdmFyIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBDX2xpYi5CdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGJsb2NrIGFsZ29yaXRobSdzIGRhdGEgYnVmZmVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gSW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBXb3JkQXJyYXkuaW5pdCgpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzID0gMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQWRkcyBuZXcgZGF0YSB0byB0aGlzIGJsb2NrIGFsZ29yaXRobSdzIGJ1ZmZlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBhcHBlbmQuIFN0cmluZ3MgYXJlIGNvbnZlcnRlZCB0byBhIFdvcmRBcnJheSB1c2luZyBVVEYtOC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKCdkYXRhJyk7XG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9hcHBlbmQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIFdvcmRBcnJheSwgZWxzZSBhc3N1bWUgV29yZEFycmF5IGFscmVhZHlcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgICAgICAgICBkYXRhID0gVXRmOC5wYXJzZShkYXRhKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9kYXRhLmNvbmNhdChkYXRhKTtcblx0ICAgICAgICAgICAgdGhpcy5fbkRhdGFCeXRlcyArPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBQcm9jZXNzZXMgYXZhaWxhYmxlIGRhdGEgYmxvY2tzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogVGhpcyBtZXRob2QgaW52b2tlcyBfZG9Qcm9jZXNzQmxvY2sob2Zmc2V0KSwgd2hpY2ggbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvRmx1c2ggV2hldGhlciBhbGwgYmxvY2tzIGFuZCBwYXJ0aWFsIGJsb2NrcyBzaG91bGQgYmUgcHJvY2Vzc2VkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcHJvY2Vzc2VkIGRhdGEuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcygpO1xuXHQgICAgICAgICAqICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX3Byb2Nlc3MoISEnZmx1c2gnKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfcHJvY2VzczogZnVuY3Rpb24gKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBkYXRhU2lnQnl0ZXMgPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemU7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYmxvY2tzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuQmxvY2tzUmVhZHkgPSBkYXRhU2lnQnl0ZXMgLyBibG9ja1NpemVCeXRlcztcblx0ICAgICAgICAgICAgaWYgKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIHVwIHRvIGluY2x1ZGUgcGFydGlhbCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGguY2VpbChuQmxvY2tzUmVhZHkpO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgZG93biB0byBpbmNsdWRlIG9ubHkgZnVsbCBibG9ja3MsXG5cdCAgICAgICAgICAgICAgICAvLyBsZXNzIHRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgbXVzdCByZW1haW4gaW4gdGhlIGJ1ZmZlclxuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5tYXgoKG5CbG9ja3NSZWFkeSB8IDApIC0gdGhpcy5fbWluQnVmZmVyU2l6ZSwgMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb3VudCB3b3JkcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbldvcmRzUmVhZHkgPSBuQmxvY2tzUmVhZHkgKiBibG9ja1NpemU7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYnl0ZXMgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CeXRlc1JlYWR5ID0gTWF0aC5taW4obldvcmRzUmVhZHkgKiA0LCBkYXRhU2lnQnl0ZXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFByb2Nlc3MgYmxvY2tzXG5cdCAgICAgICAgICAgIGlmIChuV29yZHNSZWFkeSkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgbldvcmRzUmVhZHk7IG9mZnNldCArPSBibG9ja1NpemUpIHtcblx0ICAgICAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWFsZ29yaXRobSBsb2dpY1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvUHJvY2Vzc0Jsb2NrKGRhdGFXb3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFdvcmRzID0gZGF0YVdvcmRzLnNwbGljZSgwLCBuV29yZHNSZWFkeSk7XG5cdCAgICAgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzIC09IG5CeXRlc1JlYWR5O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHByb2Nlc3NlZFdvcmRzLCBuQnl0ZXNSZWFkeSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uY2xvbmUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9kYXRhID0gdGhpcy5fZGF0YS5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX21pbkJ1ZmZlclNpemU6IDBcblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGhhc2hlciB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYmxvY2tTaXplIFRoZSBudW1iZXIgb2YgMzItYml0IHdvcmRzIHRoaXMgaGFzaGVyIG9wZXJhdGVzIG9uLiBEZWZhdWx0OiAxNiAoNTEyIGJpdHMpXG5cdCAgICAgKi9cblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXIgPSBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogQmFzZS5leHRlbmQoKSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBoYXNoZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgaGFzaCBjb21wdXRhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2hlciA9IENyeXB0b0pTLmFsZ28uU0hBMjU2LmNyZWF0ZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjZmcpIHtcblx0ICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlnIGRlZmF1bHRzXG5cdCAgICAgICAgICAgIHRoaXMuY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XG5cblx0ICAgICAgICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgaGFzaGVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBoYXNoZXIucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBSZXNldCBkYXRhIGJ1ZmZlclxuXHQgICAgICAgICAgICBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLnJlc2V0LmNhbGwodGhpcyk7XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdGhpcy5fZG9SZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBVcGRhdGVzIHRoaXMgaGFzaGVyIHdpdGggYSBtZXNzYWdlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIFRoZSBtZXNzYWdlIHRvIGFwcGVuZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0hhc2hlcn0gVGhpcyBoYXNoZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci51cGRhdGUoJ21lc3NhZ2UnKTtcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcblxuXHQgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGhhc2hcblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRmluYWxpemVzIHRoZSBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqIE5vdGUgdGhhdCB0aGUgZmluYWxpemUgb3BlcmF0aW9uIGlzIGVmZmVjdGl2ZWx5IGEgZGVzdHJ1Y3RpdmUsIHJlYWQtb25jZSBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgKE9wdGlvbmFsKSBBIGZpbmFsIG1lc3NhZ2UgdXBkYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUoJ21lc3NhZ2UnKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gRmluYWwgbWVzc2FnZSB1cGRhdGVcblx0ICAgICAgICAgICAgaWYgKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtaGFzaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5fZG9GaW5hbGl6ZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBibG9ja1NpemU6IDUxMi8zMixcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBzaG9ydGN1dCBmdW5jdGlvbiB0byBhIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gY3JlYXRlIGEgaGVscGVyIGZvci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9jcmVhdGVIZWxwZXI6IGZ1bmN0aW9uIChoYXNoZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlLCBjZmcpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBuZXcgaGFzaGVyLmluaXQoY2ZnKS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byB1c2UgaW4gdGhpcyBITUFDIGhlbHBlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBIbWFjU0hBMjU2ID0gQ3J5cHRvSlMubGliLkhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhtYWNIZWxwZXI6IGZ1bmN0aW9uIChoYXNoZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlLCBrZXkpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ19hbGdvLkhNQUMuaW5pdChoYXNoZXIsIGtleSkuZmluYWxpemUobWVzc2FnZSk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWxnb3JpdGhtIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbyA9IHt9O1xuXG5cdCAgICByZXR1cm4gQztcblx0fShNYXRoKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlM7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoTWF0aCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIEluaXRpYWxpemF0aW9uIGFuZCByb3VuZCBjb25zdGFudHMgdGFibGVzXG5cdCAgICB2YXIgSCA9IFtdO1xuXHQgICAgdmFyIEsgPSBbXTtcblxuXHQgICAgLy8gQ29tcHV0ZSBjb25zdGFudHNcblx0ICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZnVuY3Rpb24gaXNQcmltZShuKSB7XG5cdCAgICAgICAgICAgIHZhciBzcXJ0TiA9IE1hdGguc3FydChuKTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgZmFjdG9yID0gMjsgZmFjdG9yIDw9IHNxcnROOyBmYWN0b3IrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKCEobiAlIGZhY3RvcikpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBmdW5jdGlvbiBnZXRGcmFjdGlvbmFsQml0cyhuKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAoKG4gLSAobiB8IDApKSAqIDB4MTAwMDAwMDAwKSB8IDA7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgdmFyIG4gPSAyO1xuXHQgICAgICAgIHZhciBuUHJpbWUgPSAwO1xuXHQgICAgICAgIHdoaWxlIChuUHJpbWUgPCA2NCkge1xuXHQgICAgICAgICAgICBpZiAoaXNQcmltZShuKSkge1xuXHQgICAgICAgICAgICAgICAgaWYgKG5QcmltZSA8IDgpIHtcblx0ICAgICAgICAgICAgICAgICAgICBIW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhNYXRoLnBvdyhuLCAxIC8gMikpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgS1tuUHJpbWVdID0gZ2V0RnJhY3Rpb25hbEJpdHMoTWF0aC5wb3cobiwgMSAvIDMpKTtcblxuXHQgICAgICAgICAgICAgICAgblByaW1lKys7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBuKys7XG5cdCAgICAgICAgfVxuXHQgICAgfSgpKTtcblxuXHQgICAgLy8gUmV1c2FibGUgb2JqZWN0XG5cdCAgICB2YXIgVyA9IFtdO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNIQS0yNTYgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBTSEEyNTYgPSBDX2FsZ28uU0hBMjU2ID0gSGFzaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBXb3JkQXJyYXkuaW5pdChILnNsaWNlKDApKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBIID0gdGhpcy5faGFzaC53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xuXHQgICAgICAgICAgICB2YXIgYSA9IEhbMF07XG5cdCAgICAgICAgICAgIHZhciBiID0gSFsxXTtcblx0ICAgICAgICAgICAgdmFyIGMgPSBIWzJdO1xuXHQgICAgICAgICAgICB2YXIgZCA9IEhbM107XG5cdCAgICAgICAgICAgIHZhciBlID0gSFs0XTtcblx0ICAgICAgICAgICAgdmFyIGYgPSBIWzVdO1xuXHQgICAgICAgICAgICB2YXIgZyA9IEhbNl07XG5cdCAgICAgICAgICAgIHZhciBoID0gSFs3XTtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRhdGlvblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmIChpIDwgMTYpIHtcblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gTVtvZmZzZXQgKyBpXSB8IDA7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTB4ID0gV1tpIC0gMTVdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTAgID0gKChnYW1tYTB4IDw8IDI1KSB8IChnYW1tYTB4ID4+PiA3KSkgIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZ2FtbWEweCA8PCAxNCkgfCAoZ2FtbWEweCA+Pj4gMTgpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdhbW1hMHggPj4+IDMpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMXggPSBXW2kgLSAyXTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExICA9ICgoZ2FtbWExeCA8PCAxNSkgfCAoZ2FtbWExeCA+Pj4gMTcpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGdhbW1hMXggPDwgMTMpIHwgKGdhbW1hMXggPj4+IDE5KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnYW1tYTF4ID4+PiAxMCk7XG5cblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gZ2FtbWEwICsgV1tpIC0gN10gKyBnYW1tYTEgKyBXW2kgLSAxNl07XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIHZhciBjaCAgPSAoZSAmIGYpIF4gKH5lICYgZyk7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWFqID0gKGEgJiBiKSBeIChhICYgYykgXiAoYiAmIGMpO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWEwID0gKChhIDw8IDMwKSB8IChhID4+PiAyKSkgXiAoKGEgPDwgMTkpIHwgKGEgPj4+IDEzKSkgXiAoKGEgPDwgMTApIHwgKGEgPj4+IDIyKSk7XG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWExID0gKChlIDw8IDI2KSB8IChlID4+PiA2KSkgXiAoKGUgPDwgMjEpIHwgKGUgPj4+IDExKSkgXiAoKGUgPDwgNykgIHwgKGUgPj4+IDI1KSk7XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0MSA9IGggKyBzaWdtYTEgKyBjaCArIEtbaV0gKyBXW2ldO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQyID0gc2lnbWEwICsgbWFqO1xuXG5cdCAgICAgICAgICAgICAgICBoID0gZztcblx0ICAgICAgICAgICAgICAgIGcgPSBmO1xuXHQgICAgICAgICAgICAgICAgZiA9IGU7XG5cdCAgICAgICAgICAgICAgICBlID0gKGQgKyB0MSkgfCAwO1xuXHQgICAgICAgICAgICAgICAgZCA9IGM7XG5cdCAgICAgICAgICAgICAgICBjID0gYjtcblx0ICAgICAgICAgICAgICAgIGIgPSBhO1xuXHQgICAgICAgICAgICAgICAgYSA9ICh0MSArIHQyKSB8IDA7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuXHQgICAgICAgICAgICBIWzBdID0gKEhbMF0gKyBhKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMV0gPSAoSFsxXSArIGIpIHwgMDtcblx0ICAgICAgICAgICAgSFsyXSA9IChIWzJdICsgYykgfCAwO1xuXHQgICAgICAgICAgICBIWzNdID0gKEhbM10gKyBkKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNF0gPSAoSFs0XSArIGUpIHwgMDtcblx0ICAgICAgICAgICAgSFs1XSA9IChIWzVdICsgZikgfCAwO1xuXHQgICAgICAgICAgICBIWzZdID0gKEhbNl0gKyBnKSB8IDA7XG5cdCAgICAgICAgICAgIEhbN10gPSAoSFs3XSArIGgpIHwgMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcblx0ICAgICAgICAgICAgdmFyIG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbkJpdHNMZWZ0ICUgMzIpO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IE1hdGguZmxvb3IobkJpdHNUb3RhbCAvIDB4MTAwMDAwMDAwKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNV0gPSBuQml0c1RvdGFsO1xuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzID0gZGF0YVdvcmRzLmxlbmd0aCAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3Ncblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBIYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEEyNTYgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihTSEEyNTYpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTI1NihtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEEyNTYgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBMjU2KTtcblx0fShNYXRoKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuU0hBMjU2O1xuXG59KSk7IiwiKGZ1bmN0aW9uKCl7XG5cbiAgICAvLyBDb3B5cmlnaHQgKGMpIDIwMDUgIFRvbSBXdVxuICAgIC8vIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgLy8gU2VlIFwiTElDRU5TRVwiIGZvciBkZXRhaWxzLlxuXG4gICAgLy8gQmFzaWMgSmF2YVNjcmlwdCBCTiBsaWJyYXJ5IC0gc3Vic2V0IHVzZWZ1bCBmb3IgUlNBIGVuY3J5cHRpb24uXG5cbiAgICAvLyBCaXRzIHBlciBkaWdpdFxuICAgIHZhciBkYml0cztcblxuICAgIC8vIEphdmFTY3JpcHQgZW5naW5lIGFuYWx5c2lzXG4gICAgdmFyIGNhbmFyeSA9IDB4ZGVhZGJlZWZjYWZlO1xuICAgIHZhciBqX2xtID0gKChjYW5hcnkmMHhmZmZmZmYpPT0weGVmY2FmZSk7XG5cbiAgICAvLyAocHVibGljKSBDb25zdHJ1Y3RvclxuICAgIGZ1bmN0aW9uIEJpZ0ludGVnZXIoYSxiLGMpIHtcbiAgICAgIGlmKGEgIT0gbnVsbClcbiAgICAgICAgaWYoXCJudW1iZXJcIiA9PSB0eXBlb2YgYSkgdGhpcy5mcm9tTnVtYmVyKGEsYixjKTtcbiAgICAgICAgZWxzZSBpZihiID09IG51bGwgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSkgdGhpcy5mcm9tU3RyaW5nKGEsMjU2KTtcbiAgICAgICAgZWxzZSB0aGlzLmZyb21TdHJpbmcoYSxiKTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gbmV3LCB1bnNldCBCaWdJbnRlZ2VyXG4gICAgZnVuY3Rpb24gbmJpKCkgeyByZXR1cm4gbmV3IEJpZ0ludGVnZXIobnVsbCk7IH1cblxuICAgIC8vIGFtOiBDb21wdXRlIHdfaiArPSAoeCp0aGlzX2kpLCBwcm9wYWdhdGUgY2FycmllcyxcbiAgICAvLyBjIGlzIGluaXRpYWwgY2FycnksIHJldHVybnMgZmluYWwgY2FycnkuXG4gICAgLy8gYyA8IDMqZHZhbHVlLCB4IDwgMipkdmFsdWUsIHRoaXNfaSA8IGR2YWx1ZVxuICAgIC8vIFdlIG5lZWQgdG8gc2VsZWN0IHRoZSBmYXN0ZXN0IG9uZSB0aGF0IHdvcmtzIGluIHRoaXMgZW52aXJvbm1lbnQuXG5cbiAgICAvLyBhbTE6IHVzZSBhIHNpbmdsZSBtdWx0IGFuZCBkaXZpZGUgdG8gZ2V0IHRoZSBoaWdoIGJpdHMsXG4gICAgLy8gbWF4IGRpZ2l0IGJpdHMgc2hvdWxkIGJlIDI2IGJlY2F1c2VcbiAgICAvLyBtYXggaW50ZXJuYWwgdmFsdWUgPSAyKmR2YWx1ZV4yLTIqZHZhbHVlICg8IDJeNTMpXG4gICAgZnVuY3Rpb24gYW0xKGkseCx3LGosYyxuKSB7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgdiA9IHgqdGhpc1tpKytdK3dbal0rYztcbiAgICAgICAgYyA9IE1hdGguZmxvb3Iodi8weDQwMDAwMDApO1xuICAgICAgICB3W2orK10gPSB2JjB4M2ZmZmZmZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICAvLyBhbTIgYXZvaWRzIGEgYmlnIG11bHQtYW5kLWV4dHJhY3QgY29tcGxldGVseS5cbiAgICAvLyBNYXggZGlnaXQgYml0cyBzaG91bGQgYmUgPD0gMzAgYmVjYXVzZSB3ZSBkbyBiaXR3aXNlIG9wc1xuICAgIC8vIG9uIHZhbHVlcyB1cCB0byAyKmhkdmFsdWVeMi1oZHZhbHVlLTEgKDwgMl4zMSlcbiAgICBmdW5jdGlvbiBhbTIoaSx4LHcsaixjLG4pIHtcbiAgICAgIHZhciB4bCA9IHgmMHg3ZmZmLCB4aCA9IHg+PjE1O1xuICAgICAgd2hpbGUoLS1uID49IDApIHtcbiAgICAgICAgdmFyIGwgPSB0aGlzW2ldJjB4N2ZmZjtcbiAgICAgICAgdmFyIGggPSB0aGlzW2krK10+PjE1O1xuICAgICAgICB2YXIgbSA9IHhoKmwraCp4bDtcbiAgICAgICAgbCA9IHhsKmwrKChtJjB4N2ZmZik8PDE1KSt3W2pdKyhjJjB4M2ZmZmZmZmYpO1xuICAgICAgICBjID0gKGw+Pj4zMCkrKG0+Pj4xNSkreGgqaCsoYz4+PjMwKTtcbiAgICAgICAgd1tqKytdID0gbCYweDNmZmZmZmZmO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIC8vIEFsdGVybmF0ZWx5LCBzZXQgbWF4IGRpZ2l0IGJpdHMgdG8gMjggc2luY2Ugc29tZVxuICAgIC8vIGJyb3dzZXJzIHNsb3cgZG93biB3aGVuIGRlYWxpbmcgd2l0aCAzMi1iaXQgbnVtYmVycy5cbiAgICBmdW5jdGlvbiBhbTMoaSx4LHcsaixjLG4pIHtcbiAgICAgIHZhciB4bCA9IHgmMHgzZmZmLCB4aCA9IHg+PjE0O1xuICAgICAgd2hpbGUoLS1uID49IDApIHtcbiAgICAgICAgdmFyIGwgPSB0aGlzW2ldJjB4M2ZmZjtcbiAgICAgICAgdmFyIGggPSB0aGlzW2krK10+PjE0O1xuICAgICAgICB2YXIgbSA9IHhoKmwraCp4bDtcbiAgICAgICAgbCA9IHhsKmwrKChtJjB4M2ZmZik8PDE0KSt3W2pdK2M7XG4gICAgICAgIGMgPSAobD4+MjgpKyhtPj4xNCkreGgqaDtcbiAgICAgICAgd1tqKytdID0gbCYweGZmZmZmZmY7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgdmFyIGluQnJvd3NlciA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCI7XG4gICAgaWYoaW5Ccm93c2VyICYmIGpfbG0gJiYgKG5hdmlnYXRvci5hcHBOYW1lID09IFwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCIpKSB7XG4gICAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbSA9IGFtMjtcbiAgICAgIGRiaXRzID0gMzA7XG4gICAgfVxuICAgIGVsc2UgaWYoaW5Ccm93c2VyICYmIGpfbG0gJiYgKG5hdmlnYXRvci5hcHBOYW1lICE9IFwiTmV0c2NhcGVcIikpIHtcbiAgICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFtID0gYW0xO1xuICAgICAgZGJpdHMgPSAyNjtcbiAgICB9XG4gICAgZWxzZSB7IC8vIE1vemlsbGEvTmV0c2NhcGUgc2VlbXMgdG8gcHJlZmVyIGFtM1xuICAgICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBhbTM7XG4gICAgICBkYml0cyA9IDI4O1xuICAgIH1cblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkRCID0gZGJpdHM7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRE0gPSAoKDE8PGRiaXRzKS0xKTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5EViA9ICgxPDxkYml0cyk7XG5cbiAgICB2YXIgQklfRlAgPSA1MjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5GViA9IE1hdGgucG93KDIsQklfRlApO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkYxID0gQklfRlAtZGJpdHM7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRjIgPSAyKmRiaXRzLUJJX0ZQO1xuXG4gICAgLy8gRGlnaXQgY29udmVyc2lvbnNcbiAgICB2YXIgQklfUk0gPSBcIjAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiO1xuICAgIHZhciBCSV9SQyA9IG5ldyBBcnJheSgpO1xuICAgIHZhciBycix2djtcbiAgICByciA9IFwiMFwiLmNoYXJDb2RlQXQoMCk7XG4gICAgZm9yKHZ2ID0gMDsgdnYgPD0gOTsgKyt2dikgQklfUkNbcnIrK10gPSB2djtcbiAgICByciA9IFwiYVwiLmNoYXJDb2RlQXQoMCk7XG4gICAgZm9yKHZ2ID0gMTA7IHZ2IDwgMzY7ICsrdnYpIEJJX1JDW3JyKytdID0gdnY7XG4gICAgcnIgPSBcIkFcIi5jaGFyQ29kZUF0KDApO1xuICAgIGZvcih2diA9IDEwOyB2diA8IDM2OyArK3Z2KSBCSV9SQ1tycisrXSA9IHZ2O1xuXG4gICAgZnVuY3Rpb24gaW50MmNoYXIobikgeyByZXR1cm4gQklfUk0uY2hhckF0KG4pOyB9XG4gICAgZnVuY3Rpb24gaW50QXQocyxpKSB7XG4gICAgICB2YXIgYyA9IEJJX1JDW3MuY2hhckNvZGVBdChpKV07XG4gICAgICByZXR1cm4gKGM9PW51bGwpPy0xOmM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY29weSB0aGlzIHRvIHJcbiAgICBmdW5jdGlvbiBibnBDb3B5VG8ocikge1xuICAgICAgZm9yKHZhciBpID0gdGhpcy50LTE7IGkgPj0gMDsgLS1pKSByW2ldID0gdGhpc1tpXTtcbiAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBzZXQgZnJvbSBpbnRlZ2VyIHZhbHVlIHgsIC1EViA8PSB4IDwgRFZcbiAgICBmdW5jdGlvbiBibnBGcm9tSW50KHgpIHtcbiAgICAgIHRoaXMudCA9IDE7XG4gICAgICB0aGlzLnMgPSAoeDwwKT8tMTowO1xuICAgICAgaWYoeCA+IDApIHRoaXNbMF0gPSB4O1xuICAgICAgZWxzZSBpZih4IDwgLTEpIHRoaXNbMF0gPSB4K3RoaXMuRFY7XG4gICAgICBlbHNlIHRoaXMudCA9IDA7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGJpZ2ludCBpbml0aWFsaXplZCB0byB2YWx1ZVxuICAgIGZ1bmN0aW9uIG5idihpKSB7IHZhciByID0gbmJpKCk7IHIuZnJvbUludChpKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHNldCBmcm9tIHN0cmluZyBhbmQgcmFkaXhcbiAgICBmdW5jdGlvbiBibnBGcm9tU3RyaW5nKHMsYikge1xuICAgICAgdmFyIGs7XG4gICAgICBpZihiID09IDE2KSBrID0gNDtcbiAgICAgIGVsc2UgaWYoYiA9PSA4KSBrID0gMztcbiAgICAgIGVsc2UgaWYoYiA9PSAyNTYpIGsgPSA4OyAvLyBieXRlIGFycmF5XG4gICAgICBlbHNlIGlmKGIgPT0gMikgayA9IDE7XG4gICAgICBlbHNlIGlmKGIgPT0gMzIpIGsgPSA1O1xuICAgICAgZWxzZSBpZihiID09IDQpIGsgPSAyO1xuICAgICAgZWxzZSB7IHRoaXMuZnJvbVJhZGl4KHMsYik7IHJldHVybjsgfVxuICAgICAgdGhpcy50ID0gMDtcbiAgICAgIHRoaXMucyA9IDA7XG4gICAgICB2YXIgaSA9IHMubGVuZ3RoLCBtaSA9IGZhbHNlLCBzaCA9IDA7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkge1xuICAgICAgICB2YXIgeCA9IChrPT04KT9zW2ldJjB4ZmY6aW50QXQocyxpKTtcbiAgICAgICAgaWYoeCA8IDApIHtcbiAgICAgICAgICBpZihzLmNoYXJBdChpKSA9PSBcIi1cIikgbWkgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG1pID0gZmFsc2U7XG4gICAgICAgIGlmKHNoID09IDApXG4gICAgICAgICAgdGhpc1t0aGlzLnQrK10gPSB4O1xuICAgICAgICBlbHNlIGlmKHNoK2sgPiB0aGlzLkRCKSB7XG4gICAgICAgICAgdGhpc1t0aGlzLnQtMV0gfD0gKHgmKCgxPDwodGhpcy5EQi1zaCkpLTEpKTw8c2g7XG4gICAgICAgICAgdGhpc1t0aGlzLnQrK10gPSAoeD4+KHRoaXMuREItc2gpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpc1t0aGlzLnQtMV0gfD0geDw8c2g7XG4gICAgICAgIHNoICs9IGs7XG4gICAgICAgIGlmKHNoID49IHRoaXMuREIpIHNoIC09IHRoaXMuREI7XG4gICAgICB9XG4gICAgICBpZihrID09IDggJiYgKHNbMF0mMHg4MCkgIT0gMCkge1xuICAgICAgICB0aGlzLnMgPSAtMTtcbiAgICAgICAgaWYoc2ggPiAwKSB0aGlzW3RoaXMudC0xXSB8PSAoKDE8PCh0aGlzLkRCLXNoKSktMSk8PHNoO1xuICAgICAgfVxuICAgICAgdGhpcy5jbGFtcCgpO1xuICAgICAgaWYobWkpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyh0aGlzLHRoaXMpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGNsYW1wIG9mZiBleGNlc3MgaGlnaCB3b3Jkc1xuICAgIGZ1bmN0aW9uIGJucENsYW1wKCkge1xuICAgICAgdmFyIGMgPSB0aGlzLnMmdGhpcy5ETTtcbiAgICAgIHdoaWxlKHRoaXMudCA+IDAgJiYgdGhpc1t0aGlzLnQtMV0gPT0gYykgLS10aGlzLnQ7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHN0cmluZyByZXByZXNlbnRhdGlvbiBpbiBnaXZlbiByYWRpeFxuICAgIGZ1bmN0aW9uIGJuVG9TdHJpbmcoYikge1xuICAgICAgaWYodGhpcy5zIDwgMCkgcmV0dXJuIFwiLVwiK3RoaXMubmVnYXRlKCkudG9TdHJpbmcoYik7XG4gICAgICB2YXIgaztcbiAgICAgIGlmKGIgPT0gMTYpIGsgPSA0O1xuICAgICAgZWxzZSBpZihiID09IDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihiID09IDIpIGsgPSAxO1xuICAgICAgZWxzZSBpZihiID09IDMyKSBrID0gNTtcbiAgICAgIGVsc2UgaWYoYiA9PSA0KSBrID0gMjtcbiAgICAgIGVsc2UgcmV0dXJuIHRoaXMudG9SYWRpeChiKTtcbiAgICAgIHZhciBrbSA9ICgxPDxrKS0xLCBkLCBtID0gZmFsc2UsIHIgPSBcIlwiLCBpID0gdGhpcy50O1xuICAgICAgdmFyIHAgPSB0aGlzLkRCLShpKnRoaXMuREIpJWs7XG4gICAgICBpZihpLS0gPiAwKSB7XG4gICAgICAgIGlmKHAgPCB0aGlzLkRCICYmIChkID0gdGhpc1tpXT4+cCkgPiAwKSB7IG0gPSB0cnVlOyByID0gaW50MmNoYXIoZCk7IH1cbiAgICAgICAgd2hpbGUoaSA+PSAwKSB7XG4gICAgICAgICAgaWYocCA8IGspIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXSYoKDE8PHApLTEpKTw8KGstcCk7XG4gICAgICAgICAgICBkIHw9IHRoaXNbLS1pXT4+KHArPXRoaXMuREItayk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldPj4ocC09aykpJmttO1xuICAgICAgICAgICAgaWYocCA8PSAwKSB7IHAgKz0gdGhpcy5EQjsgLS1pOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGQgPiAwKSBtID0gdHJ1ZTtcbiAgICAgICAgICBpZihtKSByICs9IGludDJjaGFyKGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbT9yOlwiMFwiO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIC10aGlzXG4gICAgZnVuY3Rpb24gYm5OZWdhdGUoKSB7IHZhciByID0gbmJpKCk7IEJpZ0ludGVnZXIuWkVSTy5zdWJUbyh0aGlzLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgfHRoaXN8XG4gICAgZnVuY3Rpb24gYm5BYnMoKSB7IHJldHVybiAodGhpcy5zPDApP3RoaXMubmVnYXRlKCk6dGhpczsgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuICsgaWYgdGhpcyA+IGEsIC0gaWYgdGhpcyA8IGEsIDAgaWYgZXF1YWxcbiAgICBmdW5jdGlvbiBibkNvbXBhcmVUbyhhKSB7XG4gICAgICB2YXIgciA9IHRoaXMucy1hLnM7XG4gICAgICBpZihyICE9IDApIHJldHVybiByO1xuICAgICAgdmFyIGkgPSB0aGlzLnQ7XG4gICAgICByID0gaS1hLnQ7XG4gICAgICBpZihyICE9IDApIHJldHVybiAodGhpcy5zPDApPy1yOnI7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkgaWYoKHI9dGhpc1tpXS1hW2ldKSAhPSAwKSByZXR1cm4gcjtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgYml0IGxlbmd0aCBvZiB0aGUgaW50ZWdlciB4XG4gICAgZnVuY3Rpb24gbmJpdHMoeCkge1xuICAgICAgdmFyIHIgPSAxLCB0O1xuICAgICAgaWYoKHQ9eD4+PjE2KSAhPSAwKSB7IHggPSB0OyByICs9IDE2OyB9XG4gICAgICBpZigodD14Pj44KSAhPSAwKSB7IHggPSB0OyByICs9IDg7IH1cbiAgICAgIGlmKCh0PXg+PjQpICE9IDApIHsgeCA9IHQ7IHIgKz0gNDsgfVxuICAgICAgaWYoKHQ9eD4+MikgIT0gMCkgeyB4ID0gdDsgciArPSAyOyB9XG4gICAgICBpZigodD14Pj4xKSAhPSAwKSB7IHggPSB0OyByICs9IDE7IH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB0aGUgbnVtYmVyIG9mIGJpdHMgaW4gXCJ0aGlzXCJcbiAgICBmdW5jdGlvbiBibkJpdExlbmd0aCgpIHtcbiAgICAgIGlmKHRoaXMudCA8PSAwKSByZXR1cm4gMDtcbiAgICAgIHJldHVybiB0aGlzLkRCKih0aGlzLnQtMSkrbmJpdHModGhpc1t0aGlzLnQtMV1eKHRoaXMucyZ0aGlzLkRNKSk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPDwgbipEQlxuICAgIGZ1bmN0aW9uIGJucERMU2hpZnRUbyhuLHIpIHtcbiAgICAgIHZhciBpO1xuICAgICAgZm9yKGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHJbaStuXSA9IHRoaXNbaV07XG4gICAgICBmb3IoaSA9IG4tMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSAwO1xuICAgICAgci50ID0gdGhpcy50K247XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPj4gbipEQlxuICAgIGZ1bmN0aW9uIGJucERSU2hpZnRUbyhuLHIpIHtcbiAgICAgIGZvcih2YXIgaSA9IG47IGkgPCB0aGlzLnQ7ICsraSkgcltpLW5dID0gdGhpc1tpXTtcbiAgICAgIHIudCA9IE1hdGgubWF4KHRoaXMudC1uLDApO1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIDw8IG5cbiAgICBmdW5jdGlvbiBibnBMU2hpZnRUbyhuLHIpIHtcbiAgICAgIHZhciBicyA9IG4ldGhpcy5EQjtcbiAgICAgIHZhciBjYnMgPSB0aGlzLkRCLWJzO1xuICAgICAgdmFyIGJtID0gKDE8PGNicyktMTtcbiAgICAgIHZhciBkcyA9IE1hdGguZmxvb3Iobi90aGlzLkRCKSwgYyA9ICh0aGlzLnM8PGJzKSZ0aGlzLkRNLCBpO1xuICAgICAgZm9yKGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgcltpK2RzKzFdID0gKHRoaXNbaV0+PmNicyl8YztcbiAgICAgICAgYyA9ICh0aGlzW2ldJmJtKTw8YnM7XG4gICAgICB9XG4gICAgICBmb3IoaSA9IGRzLTE7IGkgPj0gMDsgLS1pKSByW2ldID0gMDtcbiAgICAgIHJbZHNdID0gYztcbiAgICAgIHIudCA9IHRoaXMudCtkcysxO1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzID4+IG5cbiAgICBmdW5jdGlvbiBibnBSU2hpZnRUbyhuLHIpIHtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICAgIHZhciBkcyA9IE1hdGguZmxvb3Iobi90aGlzLkRCKTtcbiAgICAgIGlmKGRzID49IHRoaXMudCkgeyByLnQgPSAwOyByZXR1cm47IH1cbiAgICAgIHZhciBicyA9IG4ldGhpcy5EQjtcbiAgICAgIHZhciBjYnMgPSB0aGlzLkRCLWJzO1xuICAgICAgdmFyIGJtID0gKDE8PGJzKS0xO1xuICAgICAgclswXSA9IHRoaXNbZHNdPj5icztcbiAgICAgIGZvcih2YXIgaSA9IGRzKzE7IGkgPCB0aGlzLnQ7ICsraSkge1xuICAgICAgICByW2ktZHMtMV0gfD0gKHRoaXNbaV0mYm0pPDxjYnM7XG4gICAgICAgIHJbaS1kc10gPSB0aGlzW2ldPj5icztcbiAgICAgIH1cbiAgICAgIGlmKGJzID4gMCkgclt0aGlzLnQtZHMtMV0gfD0gKHRoaXMucyZibSk8PGNicztcbiAgICAgIHIudCA9IHRoaXMudC1kcztcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyAtIGFcbiAgICBmdW5jdGlvbiBibnBTdWJUbyhhLHIpIHtcbiAgICAgIHZhciBpID0gMCwgYyA9IDAsIG0gPSBNYXRoLm1pbihhLnQsdGhpcy50KTtcbiAgICAgIHdoaWxlKGkgPCBtKSB7XG4gICAgICAgIGMgKz0gdGhpc1tpXS1hW2ldO1xuICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICB9XG4gICAgICBpZihhLnQgPCB0aGlzLnQpIHtcbiAgICAgICAgYyAtPSBhLnM7XG4gICAgICAgIHdoaWxlKGkgPCB0aGlzLnQpIHtcbiAgICAgICAgICBjICs9IHRoaXNbaV07XG4gICAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICAgIHdoaWxlKGkgPCBhLnQpIHtcbiAgICAgICAgICBjIC09IGFbaV07XG4gICAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgYyAtPSBhLnM7XG4gICAgICB9XG4gICAgICByLnMgPSAoYzwwKT8tMTowO1xuICAgICAgaWYoYyA8IC0xKSByW2krK10gPSB0aGlzLkRWK2M7XG4gICAgICBlbHNlIGlmKGMgPiAwKSByW2krK10gPSBjO1xuICAgICAgci50ID0gaTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyAqIGEsIHIgIT0gdGhpcyxhIChIQUMgMTQuMTIpXG4gICAgLy8gXCJ0aGlzXCIgc2hvdWxkIGJlIHRoZSBsYXJnZXIgb25lIGlmIGFwcHJvcHJpYXRlLlxuICAgIGZ1bmN0aW9uIGJucE11bHRpcGx5VG8oYSxyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMuYWJzKCksIHkgPSBhLmFicygpO1xuICAgICAgdmFyIGkgPSB4LnQ7XG4gICAgICByLnQgPSBpK3kudDtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSByW2ldID0gMDtcbiAgICAgIGZvcihpID0gMDsgaSA8IHkudDsgKytpKSByW2kreC50XSA9IHguYW0oMCx5W2ldLHIsaSwwLHgudCk7XG4gICAgICByLnMgPSAwO1xuICAgICAgci5jbGFtcCgpO1xuICAgICAgaWYodGhpcy5zICE9IGEucykgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHIscik7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXNeMiwgciAhPSB0aGlzIChIQUMgMTQuMTYpXG4gICAgZnVuY3Rpb24gYm5wU3F1YXJlVG8ocikge1xuICAgICAgdmFyIHggPSB0aGlzLmFicygpO1xuICAgICAgdmFyIGkgPSByLnQgPSAyKngudDtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSByW2ldID0gMDtcbiAgICAgIGZvcihpID0gMDsgaSA8IHgudC0xOyArK2kpIHtcbiAgICAgICAgdmFyIGMgPSB4LmFtKGkseFtpXSxyLDIqaSwwLDEpO1xuICAgICAgICBpZigocltpK3gudF0rPXguYW0oaSsxLDIqeFtpXSxyLDIqaSsxLGMseC50LWktMSkpID49IHguRFYpIHtcbiAgICAgICAgICByW2kreC50XSAtPSB4LkRWO1xuICAgICAgICAgIHJbaSt4LnQrMV0gPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihyLnQgPiAwKSByW3IudC0xXSArPSB4LmFtKGkseFtpXSxyLDIqaSwwLDEpO1xuICAgICAgci5zID0gMDtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBkaXZpZGUgdGhpcyBieSBtLCBxdW90aWVudCBhbmQgcmVtYWluZGVyIHRvIHEsIHIgKEhBQyAxNC4yMClcbiAgICAvLyByICE9IHEsIHRoaXMgIT0gbS4gIHEgb3IgciBtYXkgYmUgbnVsbC5cbiAgICBmdW5jdGlvbiBibnBEaXZSZW1UbyhtLHEscikge1xuICAgICAgdmFyIHBtID0gbS5hYnMoKTtcbiAgICAgIGlmKHBtLnQgPD0gMCkgcmV0dXJuO1xuICAgICAgdmFyIHB0ID0gdGhpcy5hYnMoKTtcbiAgICAgIGlmKHB0LnQgPCBwbS50KSB7XG4gICAgICAgIGlmKHEgIT0gbnVsbCkgcS5mcm9tSW50KDApO1xuICAgICAgICBpZihyICE9IG51bGwpIHRoaXMuY29weVRvKHIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZihyID09IG51bGwpIHIgPSBuYmkoKTtcbiAgICAgIHZhciB5ID0gbmJpKCksIHRzID0gdGhpcy5zLCBtcyA9IG0ucztcbiAgICAgIHZhciBuc2ggPSB0aGlzLkRCLW5iaXRzKHBtW3BtLnQtMV0pOyAgIC8vIG5vcm1hbGl6ZSBtb2R1bHVzXG4gICAgICBpZihuc2ggPiAwKSB7IHBtLmxTaGlmdFRvKG5zaCx5KTsgcHQubFNoaWZ0VG8obnNoLHIpOyB9XG4gICAgICBlbHNlIHsgcG0uY29weVRvKHkpOyBwdC5jb3B5VG8ocik7IH1cbiAgICAgIHZhciB5cyA9IHkudDtcbiAgICAgIHZhciB5MCA9IHlbeXMtMV07XG4gICAgICBpZih5MCA9PSAwKSByZXR1cm47XG4gICAgICB2YXIgeXQgPSB5MCooMTw8dGhpcy5GMSkrKCh5cz4xKT95W3lzLTJdPj50aGlzLkYyOjApO1xuICAgICAgdmFyIGQxID0gdGhpcy5GVi95dCwgZDIgPSAoMTw8dGhpcy5GMSkveXQsIGUgPSAxPDx0aGlzLkYyO1xuICAgICAgdmFyIGkgPSByLnQsIGogPSBpLXlzLCB0ID0gKHE9PW51bGwpP25iaSgpOnE7XG4gICAgICB5LmRsU2hpZnRUbyhqLHQpO1xuICAgICAgaWYoci5jb21wYXJlVG8odCkgPj0gMCkge1xuICAgICAgICByW3IudCsrXSA9IDE7XG4gICAgICAgIHIuc3ViVG8odCxyKTtcbiAgICAgIH1cbiAgICAgIEJpZ0ludGVnZXIuT05FLmRsU2hpZnRUbyh5cyx0KTtcbiAgICAgIHQuc3ViVG8oeSx5KTsgIC8vIFwibmVnYXRpdmVcIiB5IHNvIHdlIGNhbiByZXBsYWNlIHN1YiB3aXRoIGFtIGxhdGVyXG4gICAgICB3aGlsZSh5LnQgPCB5cykgeVt5LnQrK10gPSAwO1xuICAgICAgd2hpbGUoLS1qID49IDApIHtcbiAgICAgICAgLy8gRXN0aW1hdGUgcXVvdGllbnQgZGlnaXRcbiAgICAgICAgdmFyIHFkID0gKHJbLS1pXT09eTApP3RoaXMuRE06TWF0aC5mbG9vcihyW2ldKmQxKyhyW2ktMV0rZSkqZDIpO1xuICAgICAgICBpZigocltpXSs9eS5hbSgwLHFkLHIsaiwwLHlzKSkgPCBxZCkgeyAgIC8vIFRyeSBpdCBvdXRcbiAgICAgICAgICB5LmRsU2hpZnRUbyhqLHQpO1xuICAgICAgICAgIHIuc3ViVG8odCxyKTtcbiAgICAgICAgICB3aGlsZShyW2ldIDwgLS1xZCkgci5zdWJUbyh0LHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihxICE9IG51bGwpIHtcbiAgICAgICAgci5kclNoaWZ0VG8oeXMscSk7XG4gICAgICAgIGlmKHRzICE9IG1zKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocSxxKTtcbiAgICAgIH1cbiAgICAgIHIudCA9IHlzO1xuICAgICAgci5jbGFtcCgpO1xuICAgICAgaWYobnNoID4gMCkgci5yU2hpZnRUbyhuc2gscik7IC8vIERlbm9ybWFsaXplIHJlbWFpbmRlclxuICAgICAgaWYodHMgPCAwKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocixyKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIG1vZCBhXG4gICAgZnVuY3Rpb24gYm5Nb2QoYSkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIHRoaXMuYWJzKCkuZGl2UmVtVG8oYSxudWxsLHIpO1xuICAgICAgaWYodGhpcy5zIDwgMCAmJiByLmNvbXBhcmVUbyhCaWdJbnRlZ2VyLlpFUk8pID4gMCkgYS5zdWJUbyhyLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gTW9kdWxhciByZWR1Y3Rpb24gdXNpbmcgXCJjbGFzc2ljXCIgYWxnb3JpdGhtXG4gICAgZnVuY3Rpb24gQ2xhc3NpYyhtKSB7IHRoaXMubSA9IG07IH1cbiAgICBmdW5jdGlvbiBjQ29udmVydCh4KSB7XG4gICAgICBpZih4LnMgPCAwIHx8IHguY29tcGFyZVRvKHRoaXMubSkgPj0gMCkgcmV0dXJuIHgubW9kKHRoaXMubSk7XG4gICAgICBlbHNlIHJldHVybiB4O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjUmV2ZXJ0KHgpIHsgcmV0dXJuIHg7IH1cbiAgICBmdW5jdGlvbiBjUmVkdWNlKHgpIHsgeC5kaXZSZW1Ubyh0aGlzLm0sbnVsbCx4KTsgfVxuICAgIGZ1bmN0aW9uIGNNdWxUbyh4LHkscikgeyB4Lm11bHRpcGx5VG8oeSxyKTsgdGhpcy5yZWR1Y2Uocik7IH1cbiAgICBmdW5jdGlvbiBjU3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICBDbGFzc2ljLnByb3RvdHlwZS5jb252ZXJ0ID0gY0NvbnZlcnQ7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUucmV2ZXJ0ID0gY1JldmVydDtcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5yZWR1Y2UgPSBjUmVkdWNlO1xuICAgIENsYXNzaWMucHJvdG90eXBlLm11bFRvID0gY011bFRvO1xuICAgIENsYXNzaWMucHJvdG90eXBlLnNxclRvID0gY1NxclRvO1xuXG4gICAgLy8gKHByb3RlY3RlZCkgcmV0dXJuIFwiLTEvdGhpcyAlIDJeREJcIjsgdXNlZnVsIGZvciBNb250LiByZWR1Y3Rpb25cbiAgICAvLyBqdXN0aWZpY2F0aW9uOlxuICAgIC8vICAgICAgICAgeHkgPT0gMSAobW9kIG0pXG4gICAgLy8gICAgICAgICB4eSA9ICAxK2ttXG4gICAgLy8gICB4eSgyLXh5KSA9ICgxK2ttKSgxLWttKVxuICAgIC8vIHhbeSgyLXh5KV0gPSAxLWteMm1eMlxuICAgIC8vIHhbeSgyLXh5KV0gPT0gMSAobW9kIG1eMilcbiAgICAvLyBpZiB5IGlzIDEveCBtb2QgbSwgdGhlbiB5KDIteHkpIGlzIDEveCBtb2QgbV4yXG4gICAgLy8gc2hvdWxkIHJlZHVjZSB4IGFuZCB5KDIteHkpIGJ5IG1eMiBhdCBlYWNoIHN0ZXAgdG8ga2VlcCBzaXplIGJvdW5kZWQuXG4gICAgLy8gSlMgbXVsdGlwbHkgXCJvdmVyZmxvd3NcIiBkaWZmZXJlbnRseSBmcm9tIEMvQysrLCBzbyBjYXJlIGlzIG5lZWRlZCBoZXJlLlxuICAgIGZ1bmN0aW9uIGJucEludkRpZ2l0KCkge1xuICAgICAgaWYodGhpcy50IDwgMSkgcmV0dXJuIDA7XG4gICAgICB2YXIgeCA9IHRoaXNbMF07XG4gICAgICBpZigoeCYxKSA9PSAwKSByZXR1cm4gMDtcbiAgICAgIHZhciB5ID0geCYzOyAgICAgICAvLyB5ID09IDEveCBtb2QgMl4yXG4gICAgICB5ID0gKHkqKDItKHgmMHhmKSp5KSkmMHhmOyAvLyB5ID09IDEveCBtb2QgMl40XG4gICAgICB5ID0gKHkqKDItKHgmMHhmZikqeSkpJjB4ZmY7ICAgLy8geSA9PSAxL3ggbW9kIDJeOFxuICAgICAgeSA9ICh5KigyLSgoKHgmMHhmZmZmKSp5KSYweGZmZmYpKSkmMHhmZmZmOyAgICAvLyB5ID09IDEveCBtb2QgMl4xNlxuICAgICAgLy8gbGFzdCBzdGVwIC0gY2FsY3VsYXRlIGludmVyc2UgbW9kIERWIGRpcmVjdGx5O1xuICAgICAgLy8gYXNzdW1lcyAxNiA8IERCIDw9IDMyIGFuZCBhc3N1bWVzIGFiaWxpdHkgdG8gaGFuZGxlIDQ4LWJpdCBpbnRzXG4gICAgICB5ID0gKHkqKDIteCp5JXRoaXMuRFYpKSV0aGlzLkRWOyAgICAgICAvLyB5ID09IDEveCBtb2QgMl5kYml0c1xuICAgICAgLy8gd2UgcmVhbGx5IHdhbnQgdGhlIG5lZ2F0aXZlIGludmVyc2UsIGFuZCAtRFYgPCB5IDwgRFZcbiAgICAgIHJldHVybiAoeT4wKT90aGlzLkRWLXk6LXk7XG4gICAgfVxuXG4gICAgLy8gTW9udGdvbWVyeSByZWR1Y3Rpb25cbiAgICBmdW5jdGlvbiBNb250Z29tZXJ5KG0pIHtcbiAgICAgIHRoaXMubSA9IG07XG4gICAgICB0aGlzLm1wID0gbS5pbnZEaWdpdCgpO1xuICAgICAgdGhpcy5tcGwgPSB0aGlzLm1wJjB4N2ZmZjtcbiAgICAgIHRoaXMubXBoID0gdGhpcy5tcD4+MTU7XG4gICAgICB0aGlzLnVtID0gKDE8PChtLkRCLTE1KSktMTtcbiAgICAgIHRoaXMubXQyID0gMiptLnQ7XG4gICAgfVxuXG4gICAgLy8geFIgbW9kIG1cbiAgICBmdW5jdGlvbiBtb250Q29udmVydCh4KSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgeC5hYnMoKS5kbFNoaWZ0VG8odGhpcy5tLnQscik7XG4gICAgICByLmRpdlJlbVRvKHRoaXMubSxudWxsLHIpO1xuICAgICAgaWYoeC5zIDwgMCAmJiByLmNvbXBhcmVUbyhCaWdJbnRlZ2VyLlpFUk8pID4gMCkgdGhpcy5tLnN1YlRvKHIscik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyB4L1IgbW9kIG1cbiAgICBmdW5jdGlvbiBtb250UmV2ZXJ0KHgpIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICB4LmNvcHlUbyhyKTtcbiAgICAgIHRoaXMucmVkdWNlKHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8geCA9IHgvUiBtb2QgbSAoSEFDIDE0LjMyKVxuICAgIGZ1bmN0aW9uIG1vbnRSZWR1Y2UoeCkge1xuICAgICAgd2hpbGUoeC50IDw9IHRoaXMubXQyKSAvLyBwYWQgeCBzbyBhbSBoYXMgZW5vdWdoIHJvb20gbGF0ZXJcbiAgICAgICAgeFt4LnQrK10gPSAwO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMubS50OyArK2kpIHtcbiAgICAgICAgLy8gZmFzdGVyIHdheSBvZiBjYWxjdWxhdGluZyB1MCA9IHhbaV0qbXAgbW9kIERWXG4gICAgICAgIHZhciBqID0geFtpXSYweDdmZmY7XG4gICAgICAgIHZhciB1MCA9IChqKnRoaXMubXBsKygoKGoqdGhpcy5tcGgrKHhbaV0+PjE1KSp0aGlzLm1wbCkmdGhpcy51bSk8PDE1KSkmeC5ETTtcbiAgICAgICAgLy8gdXNlIGFtIHRvIGNvbWJpbmUgdGhlIG11bHRpcGx5LXNoaWZ0LWFkZCBpbnRvIG9uZSBjYWxsXG4gICAgICAgIGogPSBpK3RoaXMubS50O1xuICAgICAgICB4W2pdICs9IHRoaXMubS5hbSgwLHUwLHgsaSwwLHRoaXMubS50KTtcbiAgICAgICAgLy8gcHJvcGFnYXRlIGNhcnJ5XG4gICAgICAgIHdoaWxlKHhbal0gPj0geC5EVikgeyB4W2pdIC09IHguRFY7IHhbKytqXSsrOyB9XG4gICAgICB9XG4gICAgICB4LmNsYW1wKCk7XG4gICAgICB4LmRyU2hpZnRUbyh0aGlzLm0udCx4KTtcbiAgICAgIGlmKHguY29tcGFyZVRvKHRoaXMubSkgPj0gMCkgeC5zdWJUbyh0aGlzLm0seCk7XG4gICAgfVxuXG4gICAgLy8gciA9IFwieF4yL1IgbW9kIG1cIjsgeCAhPSByXG4gICAgZnVuY3Rpb24gbW9udFNxclRvKHgscikgeyB4LnNxdWFyZVRvKHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgLy8gciA9IFwieHkvUiBtb2QgbVwiOyB4LHkgIT0gclxuICAgIGZ1bmN0aW9uIG1vbnRNdWxUbyh4LHkscikgeyB4Lm11bHRpcGx5VG8oeSxyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLmNvbnZlcnQgPSBtb250Q29udmVydDtcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5yZXZlcnQgPSBtb250UmV2ZXJ0O1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLnJlZHVjZSA9IG1vbnRSZWR1Y2U7XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUubXVsVG8gPSBtb250TXVsVG87XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUuc3FyVG8gPSBtb250U3FyVG87XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0cnVlIGlmZiB0aGlzIGlzIGV2ZW5cbiAgICBmdW5jdGlvbiBibnBJc0V2ZW4oKSB7IHJldHVybiAoKHRoaXMudD4wKT8odGhpc1swXSYxKTp0aGlzLnMpID09IDA7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXNeZSwgZSA8IDJeMzIsIGRvaW5nIHNxciBhbmQgbXVsIHdpdGggXCJyXCIgKEhBQyAxNC43OSlcbiAgICBmdW5jdGlvbiBibnBFeHAoZSx6KSB7XG4gICAgICBpZihlID4gMHhmZmZmZmZmZiB8fCBlIDwgMSkgcmV0dXJuIEJpZ0ludGVnZXIuT05FO1xuICAgICAgdmFyIHIgPSBuYmkoKSwgcjIgPSBuYmkoKSwgZyA9IHouY29udmVydCh0aGlzKSwgaSA9IG5iaXRzKGUpLTE7XG4gICAgICBnLmNvcHlUbyhyKTtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSB7XG4gICAgICAgIHouc3FyVG8ocixyMik7XG4gICAgICAgIGlmKChlJigxPDxpKSkgPiAwKSB6Lm11bFRvKHIyLGcscik7XG4gICAgICAgIGVsc2UgeyB2YXIgdCA9IHI7IHIgPSByMjsgcjIgPSB0OyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gei5yZXZlcnQocik7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpc15lICUgbSwgMCA8PSBlIDwgMl4zMlxuICAgIGZ1bmN0aW9uIGJuTW9kUG93SW50KGUsbSkge1xuICAgICAgdmFyIHo7XG4gICAgICBpZihlIDwgMjU2IHx8IG0uaXNFdmVuKCkpIHogPSBuZXcgQ2xhc3NpYyhtKTsgZWxzZSB6ID0gbmV3IE1vbnRnb21lcnkobSk7XG4gICAgICByZXR1cm4gdGhpcy5leHAoZSx6KTtcbiAgICB9XG5cbiAgICAvLyBwcm90ZWN0ZWRcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb3B5VG8gPSBibnBDb3B5VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbUludCA9IGJucEZyb21JbnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbVN0cmluZyA9IGJucEZyb21TdHJpbmc7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2xhbXAgPSBibnBDbGFtcDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kbFNoaWZ0VG8gPSBibnBETFNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZHJTaGlmdFRvID0gYm5wRFJTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmxTaGlmdFRvID0gYm5wTFNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuclNoaWZ0VG8gPSBibnBSU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJUbyA9IGJucFN1YlRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5VG8gPSBibnBNdWx0aXBseVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNxdWFyZVRvID0gYm5wU3F1YXJlVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2UmVtVG8gPSBibnBEaXZSZW1UbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pbnZEaWdpdCA9IGJucEludkRpZ2l0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzRXZlbiA9IGJucElzRXZlbjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5leHAgPSBibnBFeHA7XG5cbiAgICAvLyBwdWJsaWNcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGJuVG9TdHJpbmc7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubmVnYXRlID0gYm5OZWdhdGU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWJzID0gYm5BYnM7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZVRvID0gYm5Db21wYXJlVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0TGVuZ3RoID0gYm5CaXRMZW5ndGg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kID0gYm5Nb2Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93SW50ID0gYm5Nb2RQb3dJbnQ7XG5cbiAgICAvLyBcImNvbnN0YW50c1wiXG4gICAgQmlnSW50ZWdlci5aRVJPID0gbmJ2KDApO1xuICAgIEJpZ0ludGVnZXIuT05FID0gbmJ2KDEpO1xuXG4gICAgLy8gQ29weXJpZ2h0IChjKSAyMDA1LTIwMDkgIFRvbSBXdVxuICAgIC8vIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgLy8gU2VlIFwiTElDRU5TRVwiIGZvciBkZXRhaWxzLlxuXG4gICAgLy8gRXh0ZW5kZWQgSmF2YVNjcmlwdCBCTiBmdW5jdGlvbnMsIHJlcXVpcmVkIGZvciBSU0EgcHJpdmF0ZSBvcHMuXG5cbiAgICAvLyBWZXJzaW9uIDEuMTogbmV3IEJpZ0ludGVnZXIoXCIwXCIsIDEwKSByZXR1cm5zIFwicHJvcGVyXCIgemVyb1xuICAgIC8vIFZlcnNpb24gMS4yOiBzcXVhcmUoKSBBUEksIGlzUHJvYmFibGVQcmltZSBmaXhcblxuICAgIC8vIChwdWJsaWMpXG4gICAgZnVuY3Rpb24gYm5DbG9uZSgpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5jb3B5VG8ocik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gdmFsdWUgYXMgaW50ZWdlclxuICAgIGZ1bmN0aW9uIGJuSW50VmFsdWUoKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSB7XG4gICAgICAgIGlmKHRoaXMudCA9PSAxKSByZXR1cm4gdGhpc1swXS10aGlzLkRWO1xuICAgICAgICBlbHNlIGlmKHRoaXMudCA9PSAwKSByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHRoaXMudCA9PSAxKSByZXR1cm4gdGhpc1swXTtcbiAgICAgIGVsc2UgaWYodGhpcy50ID09IDApIHJldHVybiAwO1xuICAgICAgLy8gYXNzdW1lcyAxNiA8IERCIDwgMzJcbiAgICAgIHJldHVybiAoKHRoaXNbMV0mKCgxPDwoMzItdGhpcy5EQikpLTEpKTw8dGhpcy5EQil8dGhpc1swXTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gdmFsdWUgYXMgYnl0ZVxuICAgIGZ1bmN0aW9uIGJuQnl0ZVZhbHVlKCkgeyByZXR1cm4gKHRoaXMudD09MCk/dGhpcy5zOih0aGlzWzBdPDwyNCk+PjI0OyB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gdmFsdWUgYXMgc2hvcnQgKGFzc3VtZXMgREI+PTE2KVxuICAgIGZ1bmN0aW9uIGJuU2hvcnRWYWx1ZSgpIHsgcmV0dXJuICh0aGlzLnQ9PTApP3RoaXMuczoodGhpc1swXTw8MTYpPj4xNjsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgcmV0dXJuIHggcy50LiByXnggPCBEVlxuICAgIGZ1bmN0aW9uIGJucENodW5rU2l6ZShyKSB7IHJldHVybiBNYXRoLmZsb29yKE1hdGguTE4yKnRoaXMuREIvTWF0aC5sb2cocikpOyB9XG5cbiAgICAvLyAocHVibGljKSAwIGlmIHRoaXMgPT0gMCwgMSBpZiB0aGlzID4gMFxuICAgIGZ1bmN0aW9uIGJuU2lnTnVtKCkge1xuICAgICAgaWYodGhpcy5zIDwgMCkgcmV0dXJuIC0xO1xuICAgICAgZWxzZSBpZih0aGlzLnQgPD0gMCB8fCAodGhpcy50ID09IDEgJiYgdGhpc1swXSA8PSAwKSkgcmV0dXJuIDA7XG4gICAgICBlbHNlIHJldHVybiAxO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGNvbnZlcnQgdG8gcmFkaXggc3RyaW5nXG4gICAgZnVuY3Rpb24gYm5wVG9SYWRpeChiKSB7XG4gICAgICBpZihiID09IG51bGwpIGIgPSAxMDtcbiAgICAgIGlmKHRoaXMuc2lnbnVtKCkgPT0gMCB8fCBiIDwgMiB8fCBiID4gMzYpIHJldHVybiBcIjBcIjtcbiAgICAgIHZhciBjcyA9IHRoaXMuY2h1bmtTaXplKGIpO1xuICAgICAgdmFyIGEgPSBNYXRoLnBvdyhiLGNzKTtcbiAgICAgIHZhciBkID0gbmJ2KGEpLCB5ID0gbmJpKCksIHogPSBuYmkoKSwgciA9IFwiXCI7XG4gICAgICB0aGlzLmRpdlJlbVRvKGQseSx6KTtcbiAgICAgIHdoaWxlKHkuc2lnbnVtKCkgPiAwKSB7XG4gICAgICAgIHIgPSAoYSt6LmludFZhbHVlKCkpLnRvU3RyaW5nKGIpLnN1YnN0cigxKSArIHI7XG4gICAgICAgIHkuZGl2UmVtVG8oZCx5LHopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHouaW50VmFsdWUoKS50b1N0cmluZyhiKSArIHI7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY29udmVydCBmcm9tIHJhZGl4IHN0cmluZ1xuICAgIGZ1bmN0aW9uIGJucEZyb21SYWRpeChzLGIpIHtcbiAgICAgIHRoaXMuZnJvbUludCgwKTtcbiAgICAgIGlmKGIgPT0gbnVsbCkgYiA9IDEwO1xuICAgICAgdmFyIGNzID0gdGhpcy5jaHVua1NpemUoYik7XG4gICAgICB2YXIgZCA9IE1hdGgucG93KGIsY3MpLCBtaSA9IGZhbHNlLCBqID0gMCwgdyA9IDA7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgeCA9IGludEF0KHMsaSk7XG4gICAgICAgIGlmKHggPCAwKSB7XG4gICAgICAgICAgaWYocy5jaGFyQXQoaSkgPT0gXCItXCIgJiYgdGhpcy5zaWdudW0oKSA9PSAwKSBtaSA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdyA9IGIqdyt4O1xuICAgICAgICBpZigrK2ogPj0gY3MpIHtcbiAgICAgICAgICB0aGlzLmRNdWx0aXBseShkKTtcbiAgICAgICAgICB0aGlzLmRBZGRPZmZzZXQodywwKTtcbiAgICAgICAgICBqID0gMDtcbiAgICAgICAgICB3ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoaiA+IDApIHtcbiAgICAgICAgdGhpcy5kTXVsdGlwbHkoTWF0aC5wb3coYixqKSk7XG4gICAgICAgIHRoaXMuZEFkZE9mZnNldCh3LDApO1xuICAgICAgfVxuICAgICAgaWYobWkpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyh0aGlzLHRoaXMpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGFsdGVybmF0ZSBjb25zdHJ1Y3RvclxuICAgIGZ1bmN0aW9uIGJucEZyb21OdW1iZXIoYSxiLGMpIHtcbiAgICAgIGlmKFwibnVtYmVyXCIgPT0gdHlwZW9mIGIpIHtcbiAgICAgICAgLy8gbmV3IEJpZ0ludGVnZXIoaW50LGludCxSTkcpXG4gICAgICAgIGlmKGEgPCAyKSB0aGlzLmZyb21JbnQoMSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuZnJvbU51bWJlcihhLGMpO1xuICAgICAgICAgIGlmKCF0aGlzLnRlc3RCaXQoYS0xKSkgICAgLy8gZm9yY2UgTVNCIHNldFxuICAgICAgICAgICAgdGhpcy5iaXR3aXNlVG8oQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KGEtMSksb3Bfb3IsdGhpcyk7XG4gICAgICAgICAgaWYodGhpcy5pc0V2ZW4oKSkgdGhpcy5kQWRkT2Zmc2V0KDEsMCk7IC8vIGZvcmNlIG9kZFxuICAgICAgICAgIHdoaWxlKCF0aGlzLmlzUHJvYmFibGVQcmltZShiKSkge1xuICAgICAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KDIsMCk7XG4gICAgICAgICAgICBpZih0aGlzLmJpdExlbmd0aCgpID4gYSkgdGhpcy5zdWJUbyhCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQoYS0xKSx0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBuZXcgQmlnSW50ZWdlcihpbnQsUk5HKVxuICAgICAgICB2YXIgeCA9IG5ldyBBcnJheSgpLCB0ID0gYSY3O1xuICAgICAgICB4Lmxlbmd0aCA9IChhPj4zKSsxO1xuICAgICAgICBiLm5leHRCeXRlcyh4KTtcbiAgICAgICAgaWYodCA+IDApIHhbMF0gJj0gKCgxPDx0KS0xKTsgZWxzZSB4WzBdID0gMDtcbiAgICAgICAgdGhpcy5mcm9tU3RyaW5nKHgsMjU2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAocHVibGljKSBjb252ZXJ0IHRvIGJpZ2VuZGlhbiBieXRlIGFycmF5XG4gICAgZnVuY3Rpb24gYm5Ub0J5dGVBcnJheSgpIHtcbiAgICAgIHZhciBpID0gdGhpcy50LCByID0gbmV3IEFycmF5KCk7XG4gICAgICByWzBdID0gdGhpcy5zO1xuICAgICAgdmFyIHAgPSB0aGlzLkRCLShpKnRoaXMuREIpJTgsIGQsIGsgPSAwO1xuICAgICAgaWYoaS0tID4gMCkge1xuICAgICAgICBpZihwIDwgdGhpcy5EQiAmJiAoZCA9IHRoaXNbaV0+PnApICE9ICh0aGlzLnMmdGhpcy5ETSk+PnApXG4gICAgICAgICAgcltrKytdID0gZHwodGhpcy5zPDwodGhpcy5EQi1wKSk7XG4gICAgICAgIHdoaWxlKGkgPj0gMCkge1xuICAgICAgICAgIGlmKHAgPCA4KSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0mKCgxPDxwKS0xKSk8PCg4LXApO1xuICAgICAgICAgICAgZCB8PSB0aGlzWy0taV0+PihwKz10aGlzLkRCLTgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXT4+KHAtPTgpKSYweGZmO1xuICAgICAgICAgICAgaWYocCA8PSAwKSB7IHAgKz0gdGhpcy5EQjsgLS1pOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKChkJjB4ODApICE9IDApIGQgfD0gLTI1NjtcbiAgICAgICAgICBpZihrID09IDAgJiYgKHRoaXMucyYweDgwKSAhPSAoZCYweDgwKSkgKytrO1xuICAgICAgICAgIGlmKGsgPiAwIHx8IGQgIT0gdGhpcy5zKSByW2srK10gPSBkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBibkVxdWFscyhhKSB7IHJldHVybih0aGlzLmNvbXBhcmVUbyhhKT09MCk7IH1cbiAgICBmdW5jdGlvbiBibk1pbihhKSB7IHJldHVybih0aGlzLmNvbXBhcmVUbyhhKTwwKT90aGlzOmE7IH1cbiAgICBmdW5jdGlvbiBibk1heChhKSB7IHJldHVybih0aGlzLmNvbXBhcmVUbyhhKT4wKT90aGlzOmE7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIG9wIGEgKGJpdHdpc2UpXG4gICAgZnVuY3Rpb24gYm5wQml0d2lzZVRvKGEsb3Ascikge1xuICAgICAgdmFyIGksIGYsIG0gPSBNYXRoLm1pbihhLnQsdGhpcy50KTtcbiAgICAgIGZvcihpID0gMDsgaSA8IG07ICsraSkgcltpXSA9IG9wKHRoaXNbaV0sYVtpXSk7XG4gICAgICBpZihhLnQgPCB0aGlzLnQpIHtcbiAgICAgICAgZiA9IGEucyZ0aGlzLkRNO1xuICAgICAgICBmb3IoaSA9IG07IGkgPCB0aGlzLnQ7ICsraSkgcltpXSA9IG9wKHRoaXNbaV0sZik7XG4gICAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBmID0gdGhpcy5zJnRoaXMuRE07XG4gICAgICAgIGZvcihpID0gbTsgaSA8IGEudDsgKytpKSByW2ldID0gb3AoZixhW2ldKTtcbiAgICAgICAgci50ID0gYS50O1xuICAgICAgfVxuICAgICAgci5zID0gb3AodGhpcy5zLGEucyk7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIGFcbiAgICBmdW5jdGlvbiBvcF9hbmQoeCx5KSB7IHJldHVybiB4Jnk7IH1cbiAgICBmdW5jdGlvbiBibkFuZChhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3BfYW5kLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyB8IGFcbiAgICBmdW5jdGlvbiBvcF9vcih4LHkpIHsgcmV0dXJuIHh8eTsgfVxuICAgIGZ1bmN0aW9uIGJuT3IoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmJpdHdpc2VUbyhhLG9wX29yLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyBeIGFcbiAgICBmdW5jdGlvbiBvcF94b3IoeCx5KSB7IHJldHVybiB4Xnk7IH1cbiAgICBmdW5jdGlvbiBiblhvcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3BfeG9yLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIH5hXG4gICAgZnVuY3Rpb24gb3BfYW5kbm90KHgseSkgeyByZXR1cm4geCZ+eTsgfVxuICAgIGZ1bmN0aW9uIGJuQW5kTm90KGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF9hbmRub3Qscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB+dGhpc1xuICAgIGZ1bmN0aW9uIGJuTm90KCkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSkgcltpXSA9IHRoaXMuRE0mfnRoaXNbaV07XG4gICAgICByLnQgPSB0aGlzLnQ7XG4gICAgICByLnMgPSB+dGhpcy5zO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyA8PCBuXG4gICAgZnVuY3Rpb24gYm5TaGlmdExlZnQobikge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIGlmKG4gPCAwKSB0aGlzLnJTaGlmdFRvKC1uLHIpOyBlbHNlIHRoaXMubFNoaWZ0VG8obixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgPj4gblxuICAgIGZ1bmN0aW9uIGJuU2hpZnRSaWdodChuKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgaWYobiA8IDApIHRoaXMubFNoaWZ0VG8oLW4scik7IGVsc2UgdGhpcy5yU2hpZnRUbyhuLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGluZGV4IG9mIGxvd2VzdCAxLWJpdCBpbiB4LCB4IDwgMl4zMVxuICAgIGZ1bmN0aW9uIGxiaXQoeCkge1xuICAgICAgaWYoeCA9PSAwKSByZXR1cm4gLTE7XG4gICAgICB2YXIgciA9IDA7XG4gICAgICBpZigoeCYweGZmZmYpID09IDApIHsgeCA+Pj0gMTY7IHIgKz0gMTY7IH1cbiAgICAgIGlmKCh4JjB4ZmYpID09IDApIHsgeCA+Pj0gODsgciArPSA4OyB9XG4gICAgICBpZigoeCYweGYpID09IDApIHsgeCA+Pj0gNDsgciArPSA0OyB9XG4gICAgICBpZigoeCYzKSA9PSAwKSB7IHggPj49IDI7IHIgKz0gMjsgfVxuICAgICAgaWYoKHgmMSkgPT0gMCkgKytyO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJucyBpbmRleCBvZiBsb3dlc3QgMS1iaXQgKG9yIC0xIGlmIG5vbmUpXG4gICAgZnVuY3Rpb24gYm5HZXRMb3dlc3RTZXRCaXQoKSB7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy50OyArK2kpXG4gICAgICAgIGlmKHRoaXNbaV0gIT0gMCkgcmV0dXJuIGkqdGhpcy5EQitsYml0KHRoaXNbaV0pO1xuICAgICAgaWYodGhpcy5zIDwgMCkgcmV0dXJuIHRoaXMudCp0aGlzLkRCO1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBudW1iZXIgb2YgMSBiaXRzIGluIHhcbiAgICBmdW5jdGlvbiBjYml0KHgpIHtcbiAgICAgIHZhciByID0gMDtcbiAgICAgIHdoaWxlKHggIT0gMCkgeyB4ICY9IHgtMTsgKytyOyB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gbnVtYmVyIG9mIHNldCBiaXRzXG4gICAgZnVuY3Rpb24gYm5CaXRDb3VudCgpIHtcbiAgICAgIHZhciByID0gMCwgeCA9IHRoaXMucyZ0aGlzLkRNO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudDsgKytpKSByICs9IGNiaXQodGhpc1tpXV54KTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRydWUgaWZmIG50aCBiaXQgaXMgc2V0XG4gICAgZnVuY3Rpb24gYm5UZXN0Qml0KG4pIHtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihuL3RoaXMuREIpO1xuICAgICAgaWYoaiA+PSB0aGlzLnQpIHJldHVybih0aGlzLnMhPTApO1xuICAgICAgcmV0dXJuKCh0aGlzW2pdJigxPDwobiV0aGlzLkRCKSkpIT0wKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzIG9wICgxPDxuKVxuICAgIGZ1bmN0aW9uIGJucENoYW5nZUJpdChuLG9wKSB7XG4gICAgICB2YXIgciA9IEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChuKTtcbiAgICAgIHRoaXMuYml0d2lzZVRvKHIsb3Ascik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIHwgKDE8PG4pXG4gICAgZnVuY3Rpb24gYm5TZXRCaXQobikgeyByZXR1cm4gdGhpcy5jaGFuZ2VCaXQobixvcF9vcik7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgJiB+KDE8PG4pXG4gICAgZnVuY3Rpb24gYm5DbGVhckJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX2FuZG5vdCk7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgXiAoMTw8bilcbiAgICBmdW5jdGlvbiBibkZsaXBCaXQobikgeyByZXR1cm4gdGhpcy5jaGFuZ2VCaXQobixvcF94b3IpOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyArIGFcbiAgICBmdW5jdGlvbiBibnBBZGRUbyhhLHIpIHtcbiAgICAgIHZhciBpID0gMCwgYyA9IDAsIG0gPSBNYXRoLm1pbihhLnQsdGhpcy50KTtcbiAgICAgIHdoaWxlKGkgPCBtKSB7XG4gICAgICAgIGMgKz0gdGhpc1tpXSthW2ldO1xuICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICB9XG4gICAgICBpZihhLnQgPCB0aGlzLnQpIHtcbiAgICAgICAgYyArPSBhLnM7XG4gICAgICAgIHdoaWxlKGkgPCB0aGlzLnQpIHtcbiAgICAgICAgICBjICs9IHRoaXNbaV07XG4gICAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICAgIHdoaWxlKGkgPCBhLnQpIHtcbiAgICAgICAgICBjICs9IGFbaV07XG4gICAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgYyArPSBhLnM7XG4gICAgICB9XG4gICAgICByLnMgPSAoYzwwKT8tMTowO1xuICAgICAgaWYoYyA+IDApIHJbaSsrXSA9IGM7XG4gICAgICBlbHNlIGlmKGMgPCAtMSkgcltpKytdID0gdGhpcy5EVitjO1xuICAgICAgci50ID0gaTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICsgYVxuICAgIGZ1bmN0aW9uIGJuQWRkKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5hZGRUbyhhLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAtIGFcbiAgICBmdW5jdGlvbiBiblN1YnRyYWN0KGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5zdWJUbyhhLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAqIGFcbiAgICBmdW5jdGlvbiBibk11bHRpcGx5KGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5tdWx0aXBseVRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzXjJcbiAgICBmdW5jdGlvbiBiblNxdWFyZSgpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5zcXVhcmVUbyhyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgLyBhXG4gICAgZnVuY3Rpb24gYm5EaXZpZGUoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmRpdlJlbVRvKGEscixudWxsKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgJSBhXG4gICAgZnVuY3Rpb24gYm5SZW1haW5kZXIoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmRpdlJlbVRvKGEsbnVsbCxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIFt0aGlzL2EsdGhpcyVhXVxuICAgIGZ1bmN0aW9uIGJuRGl2aWRlQW5kUmVtYWluZGVyKGEpIHtcbiAgICAgIHZhciBxID0gbmJpKCksIHIgPSBuYmkoKTtcbiAgICAgIHRoaXMuZGl2UmVtVG8oYSxxLHIpO1xuICAgICAgcmV0dXJuIG5ldyBBcnJheShxLHIpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgKj0gbiwgdGhpcyA+PSAwLCAxIDwgbiA8IERWXG4gICAgZnVuY3Rpb24gYm5wRE11bHRpcGx5KG4pIHtcbiAgICAgIHRoaXNbdGhpcy50XSA9IHRoaXMuYW0oMCxuLTEsdGhpcywwLDAsdGhpcy50KTtcbiAgICAgICsrdGhpcy50O1xuICAgICAgdGhpcy5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgKz0gbiA8PCB3IHdvcmRzLCB0aGlzID49IDBcbiAgICBmdW5jdGlvbiBibnBEQWRkT2Zmc2V0KG4sdykge1xuICAgICAgaWYobiA9PSAwKSByZXR1cm47XG4gICAgICB3aGlsZSh0aGlzLnQgPD0gdykgdGhpc1t0aGlzLnQrK10gPSAwO1xuICAgICAgdGhpc1t3XSArPSBuO1xuICAgICAgd2hpbGUodGhpc1t3XSA+PSB0aGlzLkRWKSB7XG4gICAgICAgIHRoaXNbd10gLT0gdGhpcy5EVjtcbiAgICAgICAgaWYoKyt3ID49IHRoaXMudCkgdGhpc1t0aGlzLnQrK10gPSAwO1xuICAgICAgICArK3RoaXNbd107XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQSBcIm51bGxcIiByZWR1Y2VyXG4gICAgZnVuY3Rpb24gTnVsbEV4cCgpIHt9XG4gICAgZnVuY3Rpb24gbk5vcCh4KSB7IHJldHVybiB4OyB9XG4gICAgZnVuY3Rpb24gbk11bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB9XG4gICAgZnVuY3Rpb24gblNxclRvKHgscikgeyB4LnNxdWFyZVRvKHIpOyB9XG5cbiAgICBOdWxsRXhwLnByb3RvdHlwZS5jb252ZXJ0ID0gbk5vcDtcbiAgICBOdWxsRXhwLnByb3RvdHlwZS5yZXZlcnQgPSBuTm9wO1xuICAgIE51bGxFeHAucHJvdG90eXBlLm11bFRvID0gbk11bFRvO1xuICAgIE51bGxFeHAucHJvdG90eXBlLnNxclRvID0gblNxclRvO1xuXG4gICAgLy8gKHB1YmxpYykgdGhpc15lXG4gICAgZnVuY3Rpb24gYm5Qb3coZSkgeyByZXR1cm4gdGhpcy5leHAoZSxuZXcgTnVsbEV4cCgpKTsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IGxvd2VyIG4gd29yZHMgb2YgXCJ0aGlzICogYVwiLCBhLnQgPD0gblxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBmdW5jdGlvbiBibnBNdWx0aXBseUxvd2VyVG8oYSxuLHIpIHtcbiAgICAgIHZhciBpID0gTWF0aC5taW4odGhpcy50K2EudCxuKTtcbiAgICAgIHIucyA9IDA7IC8vIGFzc3VtZXMgYSx0aGlzID49IDBcbiAgICAgIHIudCA9IGk7XG4gICAgICB3aGlsZShpID4gMCkgclstLWldID0gMDtcbiAgICAgIHZhciBqO1xuICAgICAgZm9yKGogPSByLnQtdGhpcy50OyBpIDwgajsgKytpKSByW2krdGhpcy50XSA9IHRoaXMuYW0oMCxhW2ldLHIsaSwwLHRoaXMudCk7XG4gICAgICBmb3IoaiA9IE1hdGgubWluKGEudCxuKTsgaSA8IGo7ICsraSkgdGhpcy5hbSgwLGFbaV0scixpLDAsbi1pKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gXCJ0aGlzICogYVwiIHdpdGhvdXQgbG93ZXIgbiB3b3JkcywgbiA+IDBcbiAgICAvLyBcInRoaXNcIiBzaG91bGQgYmUgdGhlIGxhcmdlciBvbmUgaWYgYXBwcm9wcmlhdGUuXG4gICAgZnVuY3Rpb24gYm5wTXVsdGlwbHlVcHBlclRvKGEsbixyKSB7XG4gICAgICAtLW47XG4gICAgICB2YXIgaSA9IHIudCA9IHRoaXMudCthLnQtbjtcbiAgICAgIHIucyA9IDA7IC8vIGFzc3VtZXMgYSx0aGlzID49IDBcbiAgICAgIHdoaWxlKC0taSA+PSAwKSByW2ldID0gMDtcbiAgICAgIGZvcihpID0gTWF0aC5tYXgobi10aGlzLnQsMCk7IGkgPCBhLnQ7ICsraSlcbiAgICAgICAgclt0aGlzLnQraS1uXSA9IHRoaXMuYW0obi1pLGFbaV0sciwwLDAsdGhpcy50K2ktbik7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICByLmRyU2hpZnRUbygxLHIpO1xuICAgIH1cblxuICAgIC8vIEJhcnJldHQgbW9kdWxhciByZWR1Y3Rpb25cbiAgICBmdW5jdGlvbiBCYXJyZXR0KG0pIHtcbiAgICAgIC8vIHNldHVwIEJhcnJldHRcbiAgICAgIHRoaXMucjIgPSBuYmkoKTtcbiAgICAgIHRoaXMucTMgPSBuYmkoKTtcbiAgICAgIEJpZ0ludGVnZXIuT05FLmRsU2hpZnRUbygyKm0udCx0aGlzLnIyKTtcbiAgICAgIHRoaXMubXUgPSB0aGlzLnIyLmRpdmlkZShtKTtcbiAgICAgIHRoaXMubSA9IG07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmFycmV0dENvbnZlcnQoeCkge1xuICAgICAgaWYoeC5zIDwgMCB8fCB4LnQgPiAyKnRoaXMubS50KSByZXR1cm4geC5tb2QodGhpcy5tKTtcbiAgICAgIGVsc2UgaWYoeC5jb21wYXJlVG8odGhpcy5tKSA8IDApIHJldHVybiB4O1xuICAgICAgZWxzZSB7IHZhciByID0gbmJpKCk7IHguY29weVRvKHIpOyB0aGlzLnJlZHVjZShyKTsgcmV0dXJuIHI7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiYXJyZXR0UmV2ZXJ0KHgpIHsgcmV0dXJuIHg7IH1cblxuICAgIC8vIHggPSB4IG1vZCBtIChIQUMgMTQuNDIpXG4gICAgZnVuY3Rpb24gYmFycmV0dFJlZHVjZSh4KSB7XG4gICAgICB4LmRyU2hpZnRUbyh0aGlzLm0udC0xLHRoaXMucjIpO1xuICAgICAgaWYoeC50ID4gdGhpcy5tLnQrMSkgeyB4LnQgPSB0aGlzLm0udCsxOyB4LmNsYW1wKCk7IH1cbiAgICAgIHRoaXMubXUubXVsdGlwbHlVcHBlclRvKHRoaXMucjIsdGhpcy5tLnQrMSx0aGlzLnEzKTtcbiAgICAgIHRoaXMubS5tdWx0aXBseUxvd2VyVG8odGhpcy5xMyx0aGlzLm0udCsxLHRoaXMucjIpO1xuICAgICAgd2hpbGUoeC5jb21wYXJlVG8odGhpcy5yMikgPCAwKSB4LmRBZGRPZmZzZXQoMSx0aGlzLm0udCsxKTtcbiAgICAgIHguc3ViVG8odGhpcy5yMix4KTtcbiAgICAgIHdoaWxlKHguY29tcGFyZVRvKHRoaXMubSkgPj0gMCkgeC5zdWJUbyh0aGlzLm0seCk7XG4gICAgfVxuXG4gICAgLy8gciA9IHheMiBtb2QgbTsgeCAhPSByXG4gICAgZnVuY3Rpb24gYmFycmV0dFNxclRvKHgscikgeyB4LnNxdWFyZVRvKHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgLy8gciA9IHgqeSBtb2QgbTsgeCx5ICE9IHJcbiAgICBmdW5jdGlvbiBiYXJyZXR0TXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICBCYXJyZXR0LnByb3RvdHlwZS5jb252ZXJ0ID0gYmFycmV0dENvbnZlcnQ7XG4gICAgQmFycmV0dC5wcm90b3R5cGUucmV2ZXJ0ID0gYmFycmV0dFJldmVydDtcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5yZWR1Y2UgPSBiYXJyZXR0UmVkdWNlO1xuICAgIEJhcnJldHQucHJvdG90eXBlLm11bFRvID0gYmFycmV0dE11bFRvO1xuICAgIEJhcnJldHQucHJvdG90eXBlLnNxclRvID0gYmFycmV0dFNxclRvO1xuXG4gICAgLy8gKHB1YmxpYykgdGhpc15lICUgbSAoSEFDIDE0Ljg1KVxuICAgIGZ1bmN0aW9uIGJuTW9kUG93KGUsbSkge1xuICAgICAgdmFyIGkgPSBlLmJpdExlbmd0aCgpLCBrLCByID0gbmJ2KDEpLCB6O1xuICAgICAgaWYoaSA8PSAwKSByZXR1cm4gcjtcbiAgICAgIGVsc2UgaWYoaSA8IDE4KSBrID0gMTtcbiAgICAgIGVsc2UgaWYoaSA8IDQ4KSBrID0gMztcbiAgICAgIGVsc2UgaWYoaSA8IDE0NCkgayA9IDQ7XG4gICAgICBlbHNlIGlmKGkgPCA3NjgpIGsgPSA1O1xuICAgICAgZWxzZSBrID0gNjtcbiAgICAgIGlmKGkgPCA4KVxuICAgICAgICB6ID0gbmV3IENsYXNzaWMobSk7XG4gICAgICBlbHNlIGlmKG0uaXNFdmVuKCkpXG4gICAgICAgIHogPSBuZXcgQmFycmV0dChtKTtcbiAgICAgIGVsc2VcbiAgICAgICAgeiA9IG5ldyBNb250Z29tZXJ5KG0pO1xuXG4gICAgICAvLyBwcmVjb21wdXRhdGlvblxuICAgICAgdmFyIGcgPSBuZXcgQXJyYXkoKSwgbiA9IDMsIGsxID0gay0xLCBrbSA9ICgxPDxrKS0xO1xuICAgICAgZ1sxXSA9IHouY29udmVydCh0aGlzKTtcbiAgICAgIGlmKGsgPiAxKSB7XG4gICAgICAgIHZhciBnMiA9IG5iaSgpO1xuICAgICAgICB6LnNxclRvKGdbMV0sZzIpO1xuICAgICAgICB3aGlsZShuIDw9IGttKSB7XG4gICAgICAgICAgZ1tuXSA9IG5iaSgpO1xuICAgICAgICAgIHoubXVsVG8oZzIsZ1tuLTJdLGdbbl0pO1xuICAgICAgICAgIG4gKz0gMjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaiA9IGUudC0xLCB3LCBpczEgPSB0cnVlLCByMiA9IG5iaSgpLCB0O1xuICAgICAgaSA9IG5iaXRzKGVbal0pLTE7XG4gICAgICB3aGlsZShqID49IDApIHtcbiAgICAgICAgaWYoaSA+PSBrMSkgdyA9IChlW2pdPj4oaS1rMSkpJmttO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB3ID0gKGVbal0mKCgxPDwoaSsxKSktMSkpPDwoazEtaSk7XG4gICAgICAgICAgaWYoaiA+IDApIHcgfD0gZVtqLTFdPj4odGhpcy5EQitpLWsxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG4gPSBrO1xuICAgICAgICB3aGlsZSgodyYxKSA9PSAwKSB7IHcgPj49IDE7IC0tbjsgfVxuICAgICAgICBpZigoaSAtPSBuKSA8IDApIHsgaSArPSB0aGlzLkRCOyAtLWo7IH1cbiAgICAgICAgaWYoaXMxKSB7ICAgIC8vIHJldCA9PSAxLCBkb24ndCBib3RoZXIgc3F1YXJpbmcgb3IgbXVsdGlwbHlpbmcgaXRcbiAgICAgICAgICBnW3ddLmNvcHlUbyhyKTtcbiAgICAgICAgICBpczEgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB3aGlsZShuID4gMSkgeyB6LnNxclRvKHIscjIpOyB6LnNxclRvKHIyLHIpOyBuIC09IDI7IH1cbiAgICAgICAgICBpZihuID4gMCkgei5zcXJUbyhyLHIyKTsgZWxzZSB7IHQgPSByOyByID0gcjI7IHIyID0gdDsgfVxuICAgICAgICAgIHoubXVsVG8ocjIsZ1t3XSxyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlKGogPj0gMCAmJiAoZVtqXSYoMTw8aSkpID09IDApIHtcbiAgICAgICAgICB6LnNxclRvKHIscjIpOyB0ID0gcjsgciA9IHIyOyByMiA9IHQ7XG4gICAgICAgICAgaWYoLS1pIDwgMCkgeyBpID0gdGhpcy5EQi0xOyAtLWo7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHoucmV2ZXJ0KHIpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIGdjZCh0aGlzLGEpIChIQUMgMTQuNTQpXG4gICAgZnVuY3Rpb24gYm5HQ0QoYSkge1xuICAgICAgdmFyIHggPSAodGhpcy5zPDApP3RoaXMubmVnYXRlKCk6dGhpcy5jbG9uZSgpO1xuICAgICAgdmFyIHkgPSAoYS5zPDApP2EubmVnYXRlKCk6YS5jbG9uZSgpO1xuICAgICAgaWYoeC5jb21wYXJlVG8oeSkgPCAwKSB7IHZhciB0ID0geDsgeCA9IHk7IHkgPSB0OyB9XG4gICAgICB2YXIgaSA9IHguZ2V0TG93ZXN0U2V0Qml0KCksIGcgPSB5LmdldExvd2VzdFNldEJpdCgpO1xuICAgICAgaWYoZyA8IDApIHJldHVybiB4O1xuICAgICAgaWYoaSA8IGcpIGcgPSBpO1xuICAgICAgaWYoZyA+IDApIHtcbiAgICAgICAgeC5yU2hpZnRUbyhnLHgpO1xuICAgICAgICB5LnJTaGlmdFRvKGcseSk7XG4gICAgICB9XG4gICAgICB3aGlsZSh4LnNpZ251bSgpID4gMCkge1xuICAgICAgICBpZigoaSA9IHguZ2V0TG93ZXN0U2V0Qml0KCkpID4gMCkgeC5yU2hpZnRUbyhpLHgpO1xuICAgICAgICBpZigoaSA9IHkuZ2V0TG93ZXN0U2V0Qml0KCkpID4gMCkgeS5yU2hpZnRUbyhpLHkpO1xuICAgICAgICBpZih4LmNvbXBhcmVUbyh5KSA+PSAwKSB7XG4gICAgICAgICAgeC5zdWJUbyh5LHgpO1xuICAgICAgICAgIHguclNoaWZ0VG8oMSx4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB5LnN1YlRvKHgseSk7XG4gICAgICAgICAgeS5yU2hpZnRUbygxLHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihnID4gMCkgeS5sU2hpZnRUbyhnLHkpO1xuICAgICAgcmV0dXJuIHk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyAlIG4sIG4gPCAyXjI2XG4gICAgZnVuY3Rpb24gYm5wTW9kSW50KG4pIHtcbiAgICAgIGlmKG4gPD0gMCkgcmV0dXJuIDA7XG4gICAgICB2YXIgZCA9IHRoaXMuRFYlbiwgciA9ICh0aGlzLnM8MCk/bi0xOjA7XG4gICAgICBpZih0aGlzLnQgPiAwKVxuICAgICAgICBpZihkID09IDApIHIgPSB0aGlzWzBdJW47XG4gICAgICAgIGVsc2UgZm9yKHZhciBpID0gdGhpcy50LTE7IGkgPj0gMDsgLS1pKSByID0gKGQqcit0aGlzW2ldKSVuO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgMS90aGlzICUgbSAoSEFDIDE0LjYxKVxuICAgIGZ1bmN0aW9uIGJuTW9kSW52ZXJzZShtKSB7XG4gICAgICB2YXIgYWMgPSBtLmlzRXZlbigpO1xuICAgICAgaWYoKHRoaXMuaXNFdmVuKCkgJiYgYWMpIHx8IG0uc2lnbnVtKCkgPT0gMCkgcmV0dXJuIEJpZ0ludGVnZXIuWkVSTztcbiAgICAgIHZhciB1ID0gbS5jbG9uZSgpLCB2ID0gdGhpcy5jbG9uZSgpO1xuICAgICAgdmFyIGEgPSBuYnYoMSksIGIgPSBuYnYoMCksIGMgPSBuYnYoMCksIGQgPSBuYnYoMSk7XG4gICAgICB3aGlsZSh1LnNpZ251bSgpICE9IDApIHtcbiAgICAgICAgd2hpbGUodS5pc0V2ZW4oKSkge1xuICAgICAgICAgIHUuclNoaWZ0VG8oMSx1KTtcbiAgICAgICAgICBpZihhYykge1xuICAgICAgICAgICAgaWYoIWEuaXNFdmVuKCkgfHwgIWIuaXNFdmVuKCkpIHsgYS5hZGRUbyh0aGlzLGEpOyBiLnN1YlRvKG0sYik7IH1cbiAgICAgICAgICAgIGEuclNoaWZ0VG8oMSxhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZighYi5pc0V2ZW4oKSkgYi5zdWJUbyhtLGIpO1xuICAgICAgICAgIGIuclNoaWZ0VG8oMSxiKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSh2LmlzRXZlbigpKSB7XG4gICAgICAgICAgdi5yU2hpZnRUbygxLHYpO1xuICAgICAgICAgIGlmKGFjKSB7XG4gICAgICAgICAgICBpZighYy5pc0V2ZW4oKSB8fCAhZC5pc0V2ZW4oKSkgeyBjLmFkZFRvKHRoaXMsYyk7IGQuc3ViVG8obSxkKTsgfVxuICAgICAgICAgICAgYy5yU2hpZnRUbygxLGMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCFkLmlzRXZlbigpKSBkLnN1YlRvKG0sZCk7XG4gICAgICAgICAgZC5yU2hpZnRUbygxLGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHUuY29tcGFyZVRvKHYpID49IDApIHtcbiAgICAgICAgICB1LnN1YlRvKHYsdSk7XG4gICAgICAgICAgaWYoYWMpIGEuc3ViVG8oYyxhKTtcbiAgICAgICAgICBiLnN1YlRvKGQsYik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdi5zdWJUbyh1LHYpO1xuICAgICAgICAgIGlmKGFjKSBjLnN1YlRvKGEsYyk7XG4gICAgICAgICAgZC5zdWJUbyhiLGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZih2LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgIT0gMCkgcmV0dXJuIEJpZ0ludGVnZXIuWkVSTztcbiAgICAgIGlmKGQuY29tcGFyZVRvKG0pID49IDApIHJldHVybiBkLnN1YnRyYWN0KG0pO1xuICAgICAgaWYoZC5zaWdudW0oKSA8IDApIGQuYWRkVG8obSxkKTsgZWxzZSByZXR1cm4gZDtcbiAgICAgIGlmKGQuc2lnbnVtKCkgPCAwKSByZXR1cm4gZC5hZGQobSk7IGVsc2UgcmV0dXJuIGQ7XG4gICAgfVxuXG4gICAgdmFyIGxvd3ByaW1lcyA9IFsyLDMsNSw3LDExLDEzLDE3LDE5LDIzLDI5LDMxLDM3LDQxLDQzLDQ3LDUzLDU5LDYxLDY3LDcxLDczLDc5LDgzLDg5LDk3LDEwMSwxMDMsMTA3LDEwOSwxMTMsMTI3LDEzMSwxMzcsMTM5LDE0OSwxNTEsMTU3LDE2MywxNjcsMTczLDE3OSwxODEsMTkxLDE5MywxOTcsMTk5LDIxMSwyMjMsMjI3LDIyOSwyMzMsMjM5LDI0MSwyNTEsMjU3LDI2MywyNjksMjcxLDI3NywyODEsMjgzLDI5MywzMDcsMzExLDMxMywzMTcsMzMxLDMzNywzNDcsMzQ5LDM1MywzNTksMzY3LDM3MywzNzksMzgzLDM4OSwzOTcsNDAxLDQwOSw0MTksNDIxLDQzMSw0MzMsNDM5LDQ0Myw0NDksNDU3LDQ2MSw0NjMsNDY3LDQ3OSw0ODcsNDkxLDQ5OSw1MDMsNTA5LDUyMSw1MjMsNTQxLDU0Nyw1NTcsNTYzLDU2OSw1NzEsNTc3LDU4Nyw1OTMsNTk5LDYwMSw2MDcsNjEzLDYxNyw2MTksNjMxLDY0MSw2NDMsNjQ3LDY1Myw2NTksNjYxLDY3Myw2NzcsNjgzLDY5MSw3MDEsNzA5LDcxOSw3MjcsNzMzLDczOSw3NDMsNzUxLDc1Nyw3NjEsNzY5LDc3Myw3ODcsNzk3LDgwOSw4MTEsODIxLDgyMyw4MjcsODI5LDgzOSw4NTMsODU3LDg1OSw4NjMsODc3LDg4MSw4ODMsODg3LDkwNyw5MTEsOTE5LDkyOSw5MzcsOTQxLDk0Nyw5NTMsOTY3LDk3MSw5NzcsOTgzLDk5MSw5OTddO1xuICAgIHZhciBscGxpbSA9ICgxPDwyNikvbG93cHJpbWVzW2xvd3ByaW1lcy5sZW5ndGgtMV07XG5cbiAgICAvLyAocHVibGljKSB0ZXN0IHByaW1hbGl0eSB3aXRoIGNlcnRhaW50eSA+PSAxLS41XnRcbiAgICBmdW5jdGlvbiBibklzUHJvYmFibGVQcmltZSh0KSB7XG4gICAgICB2YXIgaSwgeCA9IHRoaXMuYWJzKCk7XG4gICAgICBpZih4LnQgPT0gMSAmJiB4WzBdIDw9IGxvd3ByaW1lc1tsb3dwcmltZXMubGVuZ3RoLTFdKSB7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IGxvd3ByaW1lcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICBpZih4WzBdID09IGxvd3ByaW1lc1tpXSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmKHguaXNFdmVuKCkpIHJldHVybiBmYWxzZTtcbiAgICAgIGkgPSAxO1xuICAgICAgd2hpbGUoaSA8IGxvd3ByaW1lcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG0gPSBsb3dwcmltZXNbaV0sIGogPSBpKzE7XG4gICAgICAgIHdoaWxlKGogPCBsb3dwcmltZXMubGVuZ3RoICYmIG0gPCBscGxpbSkgbSAqPSBsb3dwcmltZXNbaisrXTtcbiAgICAgICAgbSA9IHgubW9kSW50KG0pO1xuICAgICAgICB3aGlsZShpIDwgaikgaWYobSVsb3dwcmltZXNbaSsrXSA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4geC5taWxsZXJSYWJpbih0KTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0cnVlIGlmIHByb2JhYmx5IHByaW1lIChIQUMgNC4yNCwgTWlsbGVyLVJhYmluKVxuICAgIGZ1bmN0aW9uIGJucE1pbGxlclJhYmluKHQpIHtcbiAgICAgIHZhciBuMSA9IHRoaXMuc3VidHJhY3QoQmlnSW50ZWdlci5PTkUpO1xuICAgICAgdmFyIGsgPSBuMS5nZXRMb3dlc3RTZXRCaXQoKTtcbiAgICAgIGlmKGsgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgdmFyIHIgPSBuMS5zaGlmdFJpZ2h0KGspO1xuICAgICAgdCA9ICh0KzEpPj4xO1xuICAgICAgaWYodCA+IGxvd3ByaW1lcy5sZW5ndGgpIHQgPSBsb3dwcmltZXMubGVuZ3RoO1xuICAgICAgdmFyIGEgPSBuYmkoKTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0OyArK2kpIHtcbiAgICAgICAgLy9QaWNrIGJhc2VzIGF0IHJhbmRvbSwgaW5zdGVhZCBvZiBzdGFydGluZyBhdCAyXG4gICAgICAgIGEuZnJvbUludChsb3dwcmltZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmxvd3ByaW1lcy5sZW5ndGgpXSk7XG4gICAgICAgIHZhciB5ID0gYS5tb2RQb3cocix0aGlzKTtcbiAgICAgICAgaWYoeS5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpICE9IDAgJiYgeS5jb21wYXJlVG8objEpICE9IDApIHtcbiAgICAgICAgICB2YXIgaiA9IDE7XG4gICAgICAgICAgd2hpbGUoaisrIDwgayAmJiB5LmNvbXBhcmVUbyhuMSkgIT0gMCkge1xuICAgICAgICAgICAgeSA9IHkubW9kUG93SW50KDIsdGhpcyk7XG4gICAgICAgICAgICBpZih5LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZih5LmNvbXBhcmVUbyhuMSkgIT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBwcm90ZWN0ZWRcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jaHVua1NpemUgPSBibnBDaHVua1NpemU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9SYWRpeCA9IGJucFRvUmFkaXg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbVJhZGl4ID0gYm5wRnJvbVJhZGl4O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21OdW1iZXIgPSBibnBGcm9tTnVtYmVyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdHdpc2VUbyA9IGJucEJpdHdpc2VUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jaGFuZ2VCaXQgPSBibnBDaGFuZ2VCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWRkVG8gPSBibnBBZGRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kTXVsdGlwbHkgPSBibnBETXVsdGlwbHk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZEFkZE9mZnNldCA9IGJucERBZGRPZmZzZXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlMb3dlclRvID0gYm5wTXVsdGlwbHlMb3dlclRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5VXBwZXJUbyA9IGJucE11bHRpcGx5VXBwZXJUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnQgPSBibnBNb2RJbnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWlsbGVyUmFiaW4gPSBibnBNaWxsZXJSYWJpbjtcblxuICAgIC8vIHB1YmxpY1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsb25lID0gYm5DbG9uZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pbnRWYWx1ZSA9IGJuSW50VmFsdWU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYnl0ZVZhbHVlID0gYm5CeXRlVmFsdWU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hvcnRWYWx1ZSA9IGJuU2hvcnRWYWx1ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaWdudW0gPSBiblNpZ051bTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0J5dGVBcnJheSA9IGJuVG9CeXRlQXJyYXk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZXF1YWxzID0gYm5FcXVhbHM7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWluID0gYm5NaW47XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWF4ID0gYm5NYXg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kID0gYm5BbmQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUub3IgPSBibk9yO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnhvciA9IGJuWG9yO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZE5vdCA9IGJuQW5kTm90O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5vdCA9IGJuTm90O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdCA9IGJuU2hpZnRMZWZ0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0UmlnaHQgPSBiblNoaWZ0UmlnaHQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ2V0TG93ZXN0U2V0Qml0ID0gYm5HZXRMb3dlc3RTZXRCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0Q291bnQgPSBibkJpdENvdW50O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRlc3RCaXQgPSBiblRlc3RCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2V0Qml0ID0gYm5TZXRCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2xlYXJCaXQgPSBibkNsZWFyQml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZsaXBCaXQgPSBibkZsaXBCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWRkID0gYm5BZGQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3QgPSBiblN1YnRyYWN0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5ID0gYm5NdWx0aXBseTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGUgPSBibkRpdmlkZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yZW1haW5kZXIgPSBiblJlbWFpbmRlcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGVBbmRSZW1haW5kZXIgPSBibkRpdmlkZUFuZFJlbWFpbmRlcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3cgPSBibk1vZFBvdztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnZlcnNlID0gYm5Nb2RJbnZlcnNlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnBvdyA9IGJuUG93O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdjZCA9IGJuR0NEO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzUHJvYmFibGVQcmltZSA9IGJuSXNQcm9iYWJsZVByaW1lO1xuXG4gICAgLy8gSlNCTi1zcGVjaWZpYyBleHRlbnNpb25cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmUgPSBiblNxdWFyZTtcblxuICAgIC8vIEV4cG9zZSB0aGUgQmFycmV0dCBmdW5jdGlvblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkJhcnJldHQgPSBCYXJyZXR0XG5cbiAgICAvLyBCaWdJbnRlZ2VyIGludGVyZmFjZXMgbm90IGltcGxlbWVudGVkIGluIGpzYm46XG5cbiAgICAvLyBCaWdJbnRlZ2VyKGludCBzaWdudW0sIGJ5dGVbXSBtYWduaXR1ZGUpXG4gICAgLy8gZG91YmxlIGRvdWJsZVZhbHVlKClcbiAgICAvLyBmbG9hdCBmbG9hdFZhbHVlKClcbiAgICAvLyBpbnQgaGFzaENvZGUoKVxuICAgIC8vIGxvbmcgbG9uZ1ZhbHVlKClcbiAgICAvLyBzdGF0aWMgQmlnSW50ZWdlciB2YWx1ZU9mKGxvbmcgdmFsKVxuXG4gICAgLy8gUmFuZG9tIG51bWJlciBnZW5lcmF0b3IgLSByZXF1aXJlcyBhIFBSTkcgYmFja2VuZCwgZS5nLiBwcm5nNC5qc1xuXG4gICAgLy8gRm9yIGJlc3QgcmVzdWx0cywgcHV0IGNvZGUgbGlrZVxuICAgIC8vIDxib2R5IG9uQ2xpY2s9J3JuZ19zZWVkX3RpbWUoKTsnIG9uS2V5UHJlc3M9J3JuZ19zZWVkX3RpbWUoKTsnPlxuICAgIC8vIGluIHlvdXIgbWFpbiBIVE1MIGRvY3VtZW50LlxuXG4gICAgdmFyIHJuZ19zdGF0ZTtcbiAgICB2YXIgcm5nX3Bvb2w7XG4gICAgdmFyIHJuZ19wcHRyO1xuXG4gICAgLy8gTWl4IGluIGEgMzItYml0IGludGVnZXIgaW50byB0aGUgcG9vbFxuICAgIGZ1bmN0aW9uIHJuZ19zZWVkX2ludCh4KSB7XG4gICAgICBybmdfcG9vbFtybmdfcHB0cisrXSBePSB4ICYgMjU1O1xuICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gXj0gKHggPj4gOCkgJiAyNTU7XG4gICAgICBybmdfcG9vbFtybmdfcHB0cisrXSBePSAoeCA+PiAxNikgJiAyNTU7XG4gICAgICBybmdfcG9vbFtybmdfcHB0cisrXSBePSAoeCA+PiAyNCkgJiAyNTU7XG4gICAgICBpZihybmdfcHB0ciA+PSBybmdfcHNpemUpIHJuZ19wcHRyIC09IHJuZ19wc2l6ZTtcbiAgICB9XG5cbiAgICAvLyBNaXggaW4gdGhlIGN1cnJlbnQgdGltZSAody9taWxsaXNlY29uZHMpIGludG8gdGhlIHBvb2xcbiAgICBmdW5jdGlvbiBybmdfc2VlZF90aW1lKCkge1xuICAgICAgcm5nX3NlZWRfaW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBwb29sIHdpdGgganVuayBpZiBuZWVkZWQuXG4gICAgaWYocm5nX3Bvb2wgPT0gbnVsbCkge1xuICAgICAgcm5nX3Bvb2wgPSBuZXcgQXJyYXkoKTtcbiAgICAgIHJuZ19wcHRyID0gMDtcbiAgICAgIHZhciB0O1xuICAgICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuY3J5cHRvKSB7XG4gICAgICAgIGlmICh3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgIC8vIFVzZSB3ZWJjcnlwdG8gaWYgYXZhaWxhYmxlXG4gICAgICAgICAgdmFyIHVhID0gbmV3IFVpbnQ4QXJyYXkoMzIpO1xuICAgICAgICAgIHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHVhKTtcbiAgICAgICAgICBmb3IodCA9IDA7IHQgPCAzMjsgKyt0KVxuICAgICAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB1YVt0XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG5hdmlnYXRvci5hcHBOYW1lID09IFwiTmV0c2NhcGVcIiAmJiBuYXZpZ2F0b3IuYXBwVmVyc2lvbiA8IFwiNVwiKSB7XG4gICAgICAgICAgLy8gRXh0cmFjdCBlbnRyb3B5ICgyNTYgYml0cykgZnJvbSBOUzQgUk5HIGlmIGF2YWlsYWJsZVxuICAgICAgICAgIHZhciB6ID0gd2luZG93LmNyeXB0by5yYW5kb20oMzIpO1xuICAgICAgICAgIGZvcih0ID0gMDsgdCA8IHoubGVuZ3RoOyArK3QpXG4gICAgICAgICAgICBybmdfcG9vbFtybmdfcHB0cisrXSA9IHouY2hhckNvZGVBdCh0KSAmIDI1NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2hpbGUocm5nX3BwdHIgPCBybmdfcHNpemUpIHsgIC8vIGV4dHJhY3Qgc29tZSByYW5kb21uZXNzIGZyb20gTWF0aC5yYW5kb20oKVxuICAgICAgICB0ID0gTWF0aC5mbG9vcig2NTUzNiAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICBybmdfcG9vbFtybmdfcHB0cisrXSA9IHQgPj4+IDg7XG4gICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gdCAmIDI1NTtcbiAgICAgIH1cbiAgICAgIHJuZ19wcHRyID0gMDtcbiAgICAgIHJuZ19zZWVkX3RpbWUoKTtcbiAgICAgIC8vcm5nX3NlZWRfaW50KHdpbmRvdy5zY3JlZW5YKTtcbiAgICAgIC8vcm5nX3NlZWRfaW50KHdpbmRvdy5zY3JlZW5ZKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBybmdfZ2V0X2J5dGUoKSB7XG4gICAgICBpZihybmdfc3RhdGUgPT0gbnVsbCkge1xuICAgICAgICBybmdfc2VlZF90aW1lKCk7XG4gICAgICAgIHJuZ19zdGF0ZSA9IHBybmdfbmV3c3RhdGUoKTtcbiAgICAgICAgcm5nX3N0YXRlLmluaXQocm5nX3Bvb2wpO1xuICAgICAgICBmb3Iocm5nX3BwdHIgPSAwOyBybmdfcHB0ciA8IHJuZ19wb29sLmxlbmd0aDsgKytybmdfcHB0cilcbiAgICAgICAgICBybmdfcG9vbFtybmdfcHB0cl0gPSAwO1xuICAgICAgICBybmdfcHB0ciA9IDA7XG4gICAgICAgIC8vcm5nX3Bvb2wgPSBudWxsO1xuICAgICAgfVxuICAgICAgLy8gVE9ETzogYWxsb3cgcmVzZWVkaW5nIGFmdGVyIGZpcnN0IHJlcXVlc3RcbiAgICAgIHJldHVybiBybmdfc3RhdGUubmV4dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJuZ19nZXRfYnl0ZXMoYmEpIHtcbiAgICAgIHZhciBpO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgYmEubGVuZ3RoOyArK2kpIGJhW2ldID0gcm5nX2dldF9ieXRlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU2VjdXJlUmFuZG9tKCkge31cblxuICAgIFNlY3VyZVJhbmRvbS5wcm90b3R5cGUubmV4dEJ5dGVzID0gcm5nX2dldF9ieXRlcztcblxuICAgIC8vIHBybmc0LmpzIC0gdXNlcyBBcmNmb3VyIGFzIGEgUFJOR1xuXG4gICAgZnVuY3Rpb24gQXJjZm91cigpIHtcbiAgICAgIHRoaXMuaSA9IDA7XG4gICAgICB0aGlzLmogPSAwO1xuICAgICAgdGhpcy5TID0gbmV3IEFycmF5KCk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBhcmNmb3VyIGNvbnRleHQgZnJvbSBrZXksIGFuIGFycmF5IG9mIGludHMsIGVhY2ggZnJvbSBbMC4uMjU1XVxuICAgIGZ1bmN0aW9uIEFSQzRpbml0KGtleSkge1xuICAgICAgdmFyIGksIGosIHQ7XG4gICAgICBmb3IoaSA9IDA7IGkgPCAyNTY7ICsraSlcbiAgICAgICAgdGhpcy5TW2ldID0gaTtcbiAgICAgIGogPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgaiA9IChqICsgdGhpcy5TW2ldICsga2V5W2kgJSBrZXkubGVuZ3RoXSkgJiAyNTU7XG4gICAgICAgIHQgPSB0aGlzLlNbaV07XG4gICAgICAgIHRoaXMuU1tpXSA9IHRoaXMuU1tqXTtcbiAgICAgICAgdGhpcy5TW2pdID0gdDtcbiAgICAgIH1cbiAgICAgIHRoaXMuaSA9IDA7XG4gICAgICB0aGlzLmogPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIEFSQzRuZXh0KCkge1xuICAgICAgdmFyIHQ7XG4gICAgICB0aGlzLmkgPSAodGhpcy5pICsgMSkgJiAyNTU7XG4gICAgICB0aGlzLmogPSAodGhpcy5qICsgdGhpcy5TW3RoaXMuaV0pICYgMjU1O1xuICAgICAgdCA9IHRoaXMuU1t0aGlzLmldO1xuICAgICAgdGhpcy5TW3RoaXMuaV0gPSB0aGlzLlNbdGhpcy5qXTtcbiAgICAgIHRoaXMuU1t0aGlzLmpdID0gdDtcbiAgICAgIHJldHVybiB0aGlzLlNbKHQgKyB0aGlzLlNbdGhpcy5pXSkgJiAyNTVdO1xuICAgIH1cblxuICAgIEFyY2ZvdXIucHJvdG90eXBlLmluaXQgPSBBUkM0aW5pdDtcbiAgICBBcmNmb3VyLnByb3RvdHlwZS5uZXh0ID0gQVJDNG5leHQ7XG5cbiAgICAvLyBQbHVnIGluIHlvdXIgUk5HIGNvbnN0cnVjdG9yIGhlcmVcbiAgICBmdW5jdGlvbiBwcm5nX25ld3N0YXRlKCkge1xuICAgICAgcmV0dXJuIG5ldyBBcmNmb3VyKCk7XG4gICAgfVxuXG4gICAgLy8gUG9vbCBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0IGFuZCBncmVhdGVyIHRoYW4gMzIuXG4gICAgLy8gQW4gYXJyYXkgb2YgYnl0ZXMgdGhlIHNpemUgb2YgdGhlIHBvb2wgd2lsbCBiZSBwYXNzZWQgdG8gaW5pdCgpXG4gICAgdmFyIHJuZ19wc2l6ZSA9IDI1NjtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICAgICAgZGVmYXVsdDogQmlnSW50ZWdlcixcbiAgICAgICAgICAgIEJpZ0ludGVnZXI6IEJpZ0ludGVnZXIsXG4gICAgICAgICAgICBTZWN1cmVSYW5kb206IFNlY3VyZVJhbmRvbSxcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmpzYm4gPSB7XG4gICAgICAgICAgQmlnSW50ZWdlcjogQmlnSW50ZWdlcixcbiAgICAgICAgICBTZWN1cmVSYW5kb206IFNlY3VyZVJhbmRvbVxuICAgICAgICB9O1xuICAgIH1cblxufSkuY2FsbCh0aGlzKTtcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgVGltZXIgfSBmcm9tICcuL1RpbWVyLmpzJztcclxuXHJcbmNvbnN0IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IDYwOyAvLyBzZWNvbmRzXHJcblxyXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5FdmVudHMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSxcclxuICAgICAgICBhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXIgPSBuZXcgVGltZXIoXCJBY2Nlc3MgdG9rZW4gZXhwaXJpbmdcIiksXHJcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmVkVGltZXIgPSBuZXcgVGltZXIoXCJBY2Nlc3MgdG9rZW4gZXhwaXJlZFwiKVxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZyA9IGFjY2Vzc1Rva2VuRXhwaXJpbmdUaW1lcjtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQgPSBhY2Nlc3NUb2tlbkV4cGlyZWRUaW1lcjtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKGNvbnRhaW5lcikge1xyXG4gICAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZXZlbnRzIGlmIHRoZXJlJ3MgYW4gYWNjZXNzIHRva2VuIGFuZCBpdCBoYXMgYW4gZXhwaXJhdGlvblxyXG4gICAgICAgIGlmIChjb250YWluZXIuYWNjZXNzX3Rva2VuICYmIGNvbnRhaW5lci5leHBpcmVzX2luICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gY29udGFpbmVyLmV4cGlyZXNfaW47XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IGFjY2VzcyB0b2tlbiBwcmVzZW50LCByZW1haW5pbmcgZHVyYXRpb246XCIsIGR1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZXhwaXJpbmcgaWYgd2Ugc3RpbGwgaGF2ZSB0aW1lXHJcbiAgICAgICAgICAgICAgICBsZXQgZXhwaXJpbmcgPSBkdXJhdGlvbiAtIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4cGlyaW5nIDw9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyaW5nID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiQWNjZXNzVG9rZW5FdmVudHMubG9hZDogcmVnaXN0ZXJpbmcgZXhwaXJpbmcgdGltZXIgaW46XCIsIGV4cGlyaW5nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuaW5pdChleHBpcmluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiBjYW5jZWxpbmcgZXhpc3RpbmcgZXhwaXJpbmcgdGltZXIgYmVjYXNlIHdlJ3JlIHBhc3QgZXhwaXJhdGlvbi5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiBpdCdzIG5lZ2F0aXZlLCBpdCB3aWxsIHN0aWxsIGZpcmVcclxuICAgICAgICAgICAgbGV0IGV4cGlyZWQgPSBkdXJhdGlvbiArIDE7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IHJlZ2lzdGVyaW5nIGV4cGlyZWQgdGltZXIgaW46XCIsIGV4cGlyZWQpO1xyXG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuaW5pdChleHBpcmVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdW5sb2FkKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLnVubG9hZDogY2FuY2VsaW5nIGV4aXN0aW5nIGFjY2VzcyB0b2tlbiB0aW1lcnNcIik7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5jYW5jZWwoKTtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuY2FuY2VsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWNjZXNzVG9rZW5FeHBpcmluZyhjYikge1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuYWRkSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbiAgICByZW1vdmVBY2Nlc3NUb2tlbkV4cGlyaW5nKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5yZW1vdmVIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBY2Nlc3NUb2tlbkV4cGlyZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuYWRkSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbiAgICByZW1vdmVBY2Nlc3NUb2tlbkV4cGlyZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQucmVtb3ZlSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuY29uc3QgRGVmYXVsdEludGVydmFsID0gMjAwMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja1Nlc3Npb25JRnJhbWUge1xyXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2ssIGNsaWVudF9pZCwgdXJsLCBpbnRlcnZhbCwgc3RvcE9uRXJyb3IgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSBjbGllbnRfaWQ7XHJcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gaW50ZXJ2YWwgfHwgRGVmYXVsdEludGVydmFsO1xyXG4gICAgICAgIHRoaXMuX3N0b3BPbkVycm9yID0gc3RvcE9uRXJyb3I7XHJcblxyXG4gICAgICAgIHZhciBpZHggPSB1cmwuaW5kZXhPZihcIi9cIiwgdXJsLmluZGV4T2YoXCIvL1wiKSArIDIpO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lX29yaWdpbiA9IHVybC5zdWJzdHIoMCwgaWR4KTtcclxuXHJcbiAgICAgICAgdGhpcy5fZnJhbWUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuXHJcbiAgICAgICAgLy8gc2hvdGd1biBhcHByb2FjaFxyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS53aWR0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUuaGVpZ2h0ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3JjID0gdXJsO1xyXG4gICAgfVxyXG4gICAgbG9hZCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZnJhbWUub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9mcmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50ID0gdGhpcy5fbWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9tZXNzYWdlKGUpIHtcclxuICAgICAgICBpZiAoZS5vcmlnaW4gPT09IHRoaXMuX2ZyYW1lX29yaWdpbiAmJlxyXG4gICAgICAgICAgICBlLnNvdXJjZSA9PT0gdGhpcy5fZnJhbWUuY29udGVudFdpbmRvd1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhID09PSBcImVycm9yXCIpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkNoZWNrU2Vzc2lvbklGcmFtZTogZXJyb3IgbWVzc2FnZSBmcm9tIGNoZWNrIHNlc3Npb24gb3AgaWZyYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0b3BPbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZS5kYXRhID09PSBcImNoYW5nZWRcIikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ2hlY2tTZXNzaW9uSUZyYW1lOiBjaGFuZ2VkIG1lc3NhZ2UgZnJvbSBjaGVjayBzZXNzaW9uIG9wIGlmcmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZTogXCIgKyBlLmRhdGEgKyBcIiBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydChzZXNzaW9uX3N0YXRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Nlc3Npb25fc3RhdGUgIT09IHNlc3Npb25fc3RhdGUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0XCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zZXNzaW9uX3N0YXRlID0gc2Vzc2lvbl9zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSh0aGlzLl9jbGllbnRfaWQgKyBcIiBcIiArIHRoaXMuX3Nlc3Npb25fc3RhdGUsIHRoaXMuX2ZyYW1lX29yaWdpbik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIG5vd1xyXG4gICAgICAgICAgICBzZW5kKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBhbmQgc2V0dXAgdGltZXJcclxuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoc2VuZCwgdGhpcy5faW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuX3Nlc3Npb25fc3RhdGUgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fdGltZXIpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ2hlY2tTZXNzaW9uSUZyYW1lLnN0b3BcIik7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgQ29yZG92YVBvcHVwV2luZG93IH0gZnJvbSAnLi9Db3Jkb3ZhUG9wdXBXaW5kb3cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvcmRvdmFJRnJhbWVOYXZpZ2F0b3Ige1xyXG5cclxuICAgIHByZXBhcmUocGFyYW1zKSB7XHJcbiAgICAgICAgcGFyYW1zLnBvcHVwV2luZG93RmVhdHVyZXMgPSAnaGlkZGVuPXllcyc7XHJcbiAgICAgICAgbGV0IHBvcHVwID0gbmV3IENvcmRvdmFQb3B1cFdpbmRvdyhwYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocG9wdXApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IENvcmRvdmFQb3B1cFdpbmRvdyB9IGZyb20gJy4vQ29yZG92YVBvcHVwV2luZG93LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhUG9wdXBOYXZpZ2F0b3Ige1xyXG5cclxuICAgIHByZXBhcmUocGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IHBvcHVwID0gbmV3IENvcmRvdmFQb3B1cFdpbmRvdyhwYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocG9wdXApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmNvbnN0IERlZmF1bHRQb3B1cEZlYXR1cmVzID0gJ2xvY2F0aW9uPW5vLHRvb2xiYXI9bm8sem9vbT1ubyc7XHJcbmNvbnN0IERlZmF1bHRQb3B1cFRhcmdldCA9IFwiX2JsYW5rXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZG92YVBvcHVwV2luZG93IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmZlYXR1cmVzID0gcGFyYW1zLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgRGVmYXVsdFBvcHVwRmVhdHVyZXM7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBwYXJhbXMucG9wdXBXaW5kb3dUYXJnZXQgfHwgRGVmYXVsdFBvcHVwVGFyZ2V0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVkaXJlY3RfdXJpID0gcGFyYW1zLnN0YXJ0VXJsO1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdy5jdG9yOiByZWRpcmVjdF91cmk6IFwiICsgdGhpcy5yZWRpcmVjdF91cmkpO1xyXG4gICAgfVxyXG5cclxuICAgIF9pc0luQXBwQnJvd3Nlckluc3RhbGxlZChjb3Jkb3ZhTWV0YWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gW1wiY29yZG92YS1wbHVnaW4taW5hcHBicm93c2VyXCIsIFwiY29yZG92YS1wbHVnaW4taW5hcHBicm93c2VyLmluYXBwYnJvd3NlclwiLCBcIm9yZy5hcGFjaGUuY29yZG92YS5pbmFwcGJyb3dzZXJcIl0uc29tZShmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29yZG92YU1ldGFkYXRhLmhhc093blByb3BlcnR5KG5hbWUpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmF2aWdhdGUocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy51cmwpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29yZG92YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKFwiY29yZG92YSBpcyB1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGNvcmRvdmFNZXRhZGF0YSA9IHdpbmRvdy5jb3Jkb3ZhLnJlcXVpcmUoXCJjb3Jkb3ZhL3BsdWdpbl9saXN0XCIpLm1ldGFkYXRhO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNJbkFwcEJyb3dzZXJJbnN0YWxsZWQoY29yZG92YU1ldGFkYXRhKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcihcIkluQXBwQnJvd3NlciBwbHVnaW4gbm90IGZvdW5kXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcG9wdXAgPSBjb3Jkb3ZhLkluQXBwQnJvd3Nlci5vcGVuKHBhcmFtcy51cmwsIHRoaXMudGFyZ2V0LCB0aGlzLmZlYXR1cmVzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJDb3Jkb3ZhUG9wdXBXaW5kb3cubmF2aWdhdGU6IHBvcHVwIHN1Y2Nlc3NmdWxseSBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leGl0Q2FsbGJhY2tFdmVudCA9IHRoaXMuX2V4aXRDYWxsYmFjay5iaW5kKHRoaXMpOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRTdGFydENhbGxiYWNrRXZlbnQgPSB0aGlzLl9sb2FkU3RhcnRDYWxsYmFjay5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiZXhpdFwiLCB0aGlzLl9leGl0Q2FsbGJhY2tFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRzdGFydFwiLCB0aGlzLl9sb2FkU3RhcnRDYWxsYmFja0V2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihcIkVycm9yIG9wZW5pbmcgcG9wdXAgd2luZG93XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb21pc2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX2xvYWRTdGFydENhbGxiYWNrKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnVybC5pbmRleE9mKHRoaXMucmVkaXJlY3RfdXJpKSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWNjZXNzKHsgdXJsOiBldmVudC51cmwgfSk7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuICAgIF9leGl0Q2FsbGJhY2sobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuX2Vycm9yKG1lc3NhZ2UpOyAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgX3N1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93OiBTdWNjZXNzZnVsIHJlc3BvbnNlIGZyb20gY29yZG92YSBwb3B1cCB3aW5kb3dcIik7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZShkYXRhKTtcclxuICAgIH1cclxuICAgIF9lcnJvcihtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG5cclxuICAgICAgICBMb2cuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5fcmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbGVhbnVwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9wb3B1cCl7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdzogY2xlYW5pbmcgdXAgcG9wdXBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJleGl0XCIsIHRoaXMuX2V4aXRDYWxsYmFja0V2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2Fkc3RhcnRcIiwgdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wb3B1cCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVycm9yUmVzcG9uc2UgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7ZXJyb3IsIGVycm9yX2Rlc2NyaXB0aW9uLCBlcnJvcl91cmksIHN0YXRlLCBzZXNzaW9uX3N0YXRlfT17fVxyXG4gICAgKSB7XHJcbiAgICAgICAgIGlmICghZXJyb3Ipe1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBlcnJvciBwYXNzZWQgdG8gRXJyb3JSZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlcihlcnJvcl9kZXNjcmlwdGlvbiB8fCBlcnJvcik7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiRXJyb3JSZXNwb25zZVwiO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgdGhpcy5lcnJvcl9kZXNjcmlwdGlvbiA9IGVycm9yX2Rlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZXJyb3JfdXJpID0gZXJyb3JfdXJpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uX3N0YXRlID0gc2Vzc2lvbl9zdGF0ZTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRIYW5kbGVyKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnB1c2goY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUhhbmRsZXIoY2IpIHtcclxuICAgICAgICB2YXIgaWR4ID0gdGhpcy5fY2FsbGJhY2tzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGNiKTtcclxuICAgICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByYWlzZSguLi5wYXJhbXMpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJFdmVudDogUmFpc2luZyBldmVudDogXCIgKyB0aGlzLl9uYW1lKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3NbaV0oLi4ucGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuY29uc3QgdGltZXIgPSB7XHJcbiAgICBzZXRJbnRlcnZhbDogZnVuY3Rpb24gKGNiLCBkdXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChjYiwgZHVyYXRpb24pO1xyXG4gICAgfSxcclxuICAgIGNsZWFySW50ZXJ2YWw6IGZ1bmN0aW9uIChoYW5kbGUpIHtcclxuICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xyXG4gICAgfVxyXG59O1xyXG5cclxubGV0IHRlc3RpbmcgPSBmYWxzZTtcclxubGV0IHJlcXVlc3QgPSBudWxsO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdsb2JhbCB7XHJcblxyXG4gICAgc3RhdGljIF90ZXN0aW5nKCkge1xyXG4gICAgICAgIHRlc3RpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgbG9jYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0ZXN0aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsb2NhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBsb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgaWYgKCF0ZXN0aW5nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgc2Vzc2lvblN0b3JhZ2UoKSB7XHJcbiAgICAgICAgaWYgKCF0ZXN0aW5nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldFhNTEh0dHBSZXF1ZXN0KG5ld1JlcXVlc3QpIHtcclxuICAgICAgICByZXF1ZXN0ID0gbmV3UmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IFhNTEh0dHBSZXF1ZXN0KCkge1xyXG4gICAgICAgIGlmICghdGVzdGluZyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCB0aW1lcigpIHtcclxuICAgICAgICBpZiAoIXRlc3RpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IElGcmFtZVdpbmRvdyB9IGZyb20gJy4vSUZyYW1lV2luZG93LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJRnJhbWVOYXZpZ2F0b3Ige1xyXG5cclxuICAgIHByZXBhcmUocGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IGZyYW1lID0gbmV3IElGcmFtZVdpbmRvdyhwYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZnJhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZU5hdmlnYXRvci5jYWxsYmFja1wiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgSUZyYW1lV2luZG93Lm5vdGlmeVBhcmVudCh1cmwpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuY29uc3QgRGVmYXVsdFRpbWVvdXQgPSAxMDAwMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBJRnJhbWVXaW5kb3cge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50ID0gdGhpcy5fbWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLl9mcmFtZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG5cclxuICAgICAgICAvLyBzaG90Z3VuIGFwcHJvYWNoXHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLndpZHRoID0gMDtcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5oZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9mcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2aWdhdGUocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy51cmwpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdGltZW91dCA9IHBhcmFtcy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCBEZWZhdWx0VGltZW91dDtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93Lm5hdmlnYXRlOiBVc2luZyB0aW1lb3V0IG9mOlwiLCB0aW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLl90aW1lb3V0LmJpbmQodGhpcyksIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLl9mcmFtZS5zcmMgPSBwYXJhbXMudXJsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvbWlzZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBfc3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3c6IFN1Y2Nlc3NmdWwgcmVzcG9uc2UgZnJvbSBmcmFtZSB3aW5kb3dcIik7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZShkYXRhKTtcclxuICAgIH1cclxuICAgIF9lcnJvcihtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG5cclxuICAgICAgICBMb2cuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5fcmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbGVhbnVwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9mcmFtZSkge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3c6IGNsZWFudXBcIik7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuX2ZyYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fZnJhbWUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF90aW1lb3V0KCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy50aW1lb3V0XCIpO1xyXG4gICAgICAgIHRoaXMuX2Vycm9yKFwiRnJhbWUgd2luZG93IHRpbWVkIG91dFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBfbWVzc2FnZShlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93Lm1lc3NhZ2VcIik7XHJcblx0XHRjb25zb2xlLmxvZygnUmVjZWl2ZWQgbWVzc2FnZSBmcm9tIGNoaWxkOiBvcmlnaW4gPSAnICsgZS5vcmlnaW4gKyAnLCBzb3VyY2UgPSAnICsgZS5zb3VyY2UgKyAnLCBkYXRhID0gJyArIGUuZGF0YSk7XHJcblx0XHRjb25zb2xlLmxvZygnTXVzdCBoYXZlOiBvcmlnaW4gPT0gJyArIHRoaXMuX29yaWdpbiAgKyAnLCBzb3VyY2UgPT0gJyArIHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3cgKyAnIGFuZCBkYXRhIG5vdCBmYWxzZXknKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVyICYmXHJcbiAgICAgICAgICAgIGUub3JpZ2luID09PSB0aGlzLl9vcmlnaW4gJiZcclxuICAgICAgICAgICAgZS5zb3VyY2UgPT09IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3dcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IGUuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3VjY2Vzcyh7IHVybDogdXJsIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIGZyb20gZnJhbWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9vcmlnaW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm90aWZ5UGFyZW50KHVybCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnRcIik7XHJcbiAgICAgICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93Lm5vdGlmeVBhcmVudDogcG9zdGluZyB1cmwgbWVzc2FnZSB0byBwYXJlbnRcIik7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdQb3N0aW5nIG1lc3NhZ2UgdG8gcGFyZW50IFwiJyArIHVybCArICdcIiBhdCBsb2NhdGlvbjogXCInICsgbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0ICsgJ1wiJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UodXJsLCBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlXZWJTdG9yYWdle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShrZXkpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2UuZ2V0SXRlbVwiLCBrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXRlbShrZXksIHZhbHVlKXtcclxuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2Uuc2V0SXRlbVwiLCBrZXkpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW0oa2V5KXtcclxuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2UucmVtb3ZlSXRlbVwiLCBrZXkpO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9kYXRhW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fZGF0YSkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGtleShpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLl9kYXRhKVtpbmRleF07XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Sm9zZVV0aWwoeyBqd3MsIEtleVV0aWwsIFg1MDksIGNyeXB0bywgaGV4dG9iNjR1LCBiNjR0b2hleCwgQWxsb3dlZFNpZ25pbmdBbGdzIH0pIHtcclxuICAgIHJldHVybiBjbGFzcyBKb3NlVXRpbCB7XHJcblxyXG4gICAgICAgIHN0YXRpYyBwYXJzZUp3dChqd3QpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwucGFyc2VKd3RcIik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBqd3MuSldTLnBhcnNlKGp3dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogdG9rZW4uaGVhZGVyT2JqLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHRva2VuLnBheWxvYWRPYmpcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgdmFsaWRhdGVKd3Qoand0LCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93LCB0aW1lSW5zZW5zaXRpdmUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwudmFsaWRhdGVKd3RcIik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleS5rdHkgPT09IFwiUlNBXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmUgJiYga2V5Lm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gS2V5VXRpbC5nZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleS54NWMgJiYga2V5Lng1Yy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhleCA9IGI2NHRvaGV4KGtleS54NWNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBYNTA5LmdldFB1YmxpY0tleUZyb21DZXJ0SGV4KGhleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwudmFsaWRhdGVKd3Q6IFJTQSBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIiwga2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlJTQSBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Lmt0eSA9PT0gXCJFQ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5jcnYgJiYga2V5LnggJiYga2V5LnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gS2V5VXRpbC5nZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC52YWxpZGF0ZUp3dDogRUMga2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIsIGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJFQyBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwudmFsaWRhdGVKd3Q6IFVuc3VwcG9ydGVkIGtleSB0eXBlXCIsIGtleSAmJiBrZXkua3R5KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQga2V5IHR5cGU6IFwiICsga2V5ICYmIGtleS5rdHkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSm9zZVV0aWwuX3ZhbGlkYXRlSnd0KGp3dCwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUgJiYgZS5tZXNzYWdlIHx8IGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiSldUIHZhbGlkYXRpb24gZmFpbGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgdmFsaWRhdGVKd3RBdHRyaWJ1dGVzKGp3dCwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3LCBub3csIHRpbWVJbnNlbnNpdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAoIWNsb2NrU2tldykge1xyXG4gICAgICAgICAgICAgICAgY2xvY2tTa2V3ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFub3cpIHtcclxuICAgICAgICAgICAgICAgIG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBKb3NlVXRpbC5wYXJzZUp3dChqd3QpLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuaXNzKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGlzc3VlciB3YXMgbm90IHByb3ZpZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImlzc3VlciB3YXMgbm90IHByb3ZpZGVkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGF5bG9hZC5pc3MgIT09IGlzc3Vlcikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBJbnZhbGlkIGlzc3VlciBpbiB0b2tlblwiLCBwYXlsb2FkLmlzcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBpc3N1ZXIgaW4gdG9rZW46IFwiICsgcGF5bG9hZC5pc3MpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmF1ZCkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBhdWQgd2FzIG5vdCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhdWQgd2FzIG5vdCBwcm92aWRlZFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZhbGlkQXVkaWVuY2UgPSBwYXlsb2FkLmF1ZCA9PT0gYXVkaWVuY2UgfHwgKEFycmF5LmlzQXJyYXkocGF5bG9hZC5hdWQpICYmIHBheWxvYWQuYXVkLmluZGV4T2YoYXVkaWVuY2UpID49IDApO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkQXVkaWVuY2UpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBhdWRpZW5jZSBpbiB0b2tlblwiLCBwYXlsb2FkLmF1ZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBhdWRpZW5jZSBpbiB0b2tlbjogXCIgKyBwYXlsb2FkLmF1ZCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmF6cCAmJiBwYXlsb2FkLmF6cCAhPT0gYXVkaWVuY2UpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBhenAgaW4gdG9rZW5cIiwgcGF5bG9hZC5henApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgYXpwIGluIHRva2VuOiBcIiArIHBheWxvYWQuYXpwKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGltZUluc2Vuc2l0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG93ZXJOb3cgPSBub3cgKyBjbG9ja1NrZXc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXBwZXJOb3cgPSBub3cgLSBjbG9ja1NrZXc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmlhdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogaWF0IHdhcyBub3QgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImlhdCB3YXMgbm90IHByb3ZpZGVkXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsb3dlck5vdyA8IHBheWxvYWQuaWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBpYXQgaXMgaW4gdGhlIGZ1dHVyZVwiLCBwYXlsb2FkLmlhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImlhdCBpcyBpbiB0aGUgZnV0dXJlOiBcIiArIHBheWxvYWQuaWF0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQubmJmICYmIGxvd2VyTm93IDwgcGF5bG9hZC5uYmYpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IG5iZiBpcyBpbiB0aGUgZnV0dXJlXCIsIHBheWxvYWQubmJmKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwibmJmIGlzIGluIHRoZSBmdXR1cmU6IFwiICsgcGF5bG9hZC5uYmYpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBheWxvYWQuZXhwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBleHAgd2FzIG5vdCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiZXhwIHdhcyBub3QgcHJvdmlkZWRcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuZXhwIDwgdXBwZXJOb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGV4cCBpcyBpbiB0aGUgcGFzdFwiLCBwYXlsb2FkLmV4cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImV4cCBpcyBpbiB0aGUgcGFzdDpcIiArIHBheWxvYWQuZXhwKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgX3ZhbGlkYXRlSnd0KGp3dCwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gSm9zZVV0aWwudmFsaWRhdGVKd3RBdHRyaWJ1dGVzKGp3dCwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3LCBub3csIHRpbWVJbnNlbnNpdGl2ZSkudGhlbihwYXlsb2FkID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqd3MuSldTLnZlcmlmeShqd3QsIGtleSwgQWxsb3dlZFNpZ25pbmdBbGdzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IHNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF5bG9hZDtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoZSAmJiBlLm1lc3NhZ2UgfHwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGhhc2hTdHJpbmcodmFsdWUsIGFsZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5VdGlsLmhhc2hTdHJpbmcodmFsdWUsIGFsZyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGhleFRvQmFzZTY0VXJsKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGV4dG9iNjR1KHZhbHVlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGp3cywgS2V5VXRpbCwgWDUwOSwgY3J5cHRvLCBoZXh0b2I2NHUsIGI2NHRvaGV4LCBBbGxvd2VkU2lnbmluZ0FsZ3MgfSBmcm9tICcuL2NyeXB0by9yc2EnO1xyXG5pbXBvcnQgZ2V0Sm9zZVV0aWwgZnJvbSAnLi9Kb3NlVXRpbEltcGwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEpvc2VVdGlsID0gZ2V0Sm9zZVV0aWwoeyBqd3MsIEtleVV0aWwsIFg1MDksIGNyeXB0bywgaGV4dG9iNjR1LCBiNjR0b2hleCwgQWxsb3dlZFNpZ25pbmdBbGdzIH0pO1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBKc29uU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBhZGRpdGlvbmFsQ29udGVudFR5cGVzID0gbnVsbCwgXHJcbiAgICAgICAgWE1MSHR0cFJlcXVlc3RDdG9yID0gR2xvYmFsLlhNTEh0dHBSZXF1ZXN0LCBcclxuICAgICAgICBqd3RIYW5kbGVyID0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxDb250ZW50VHlwZXMgJiYgQXJyYXkuaXNBcnJheShhZGRpdGlvbmFsQ29udGVudFR5cGVzKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcyA9IGFkZGl0aW9uYWxDb250ZW50VHlwZXMuc2xpY2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGVudFR5cGVzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcy5wdXNoKCdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgaWYgKGp3dEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGVudFR5cGVzLnB1c2goJ2FwcGxpY2F0aW9uL2p3dCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fWE1MSHR0cFJlcXVlc3QgPSBYTUxIdHRwUmVxdWVzdEN0b3I7XHJcbiAgICAgICAgdGhpcy5fand0SGFuZGxlciA9IGp3dEhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SnNvbih1cmwsIHRva2VuKSB7XHJcbiAgICAgICAgaWYgKCF1cmwpe1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5nZXRKc29uOiBObyB1cmwgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5nZXRKc29uLCB1cmw6IFwiLCB1cmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyB0aGlzLl9YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXEub3BlbignR0VUJywgdXJsKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhbGxvd2VkQ29udGVudFR5cGVzID0gdGhpcy5fY29udGVudFR5cGVzO1xyXG4gICAgICAgICAgICB2YXIgand0SGFuZGxlciA9IHRoaXMuX2p3dEhhbmRsZXI7XHJcblxyXG4gICAgICAgICAgICByZXEub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5nZXRKc29uOiBIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgcmVxLnN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQgPT0gXCJhcHBsaWNhdGlvbi9qd3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgand0SGFuZGxlcihyZXEpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5nZXRKc29uOiBFcnJvciBwYXJzaW5nIEpTT04gcmVzcG9uc2VcIiwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIENvbnRlbnQtVHlwZTogXCIgKyBjb250ZW50VHlwZSArIFwiLCBmcm9tIFVSTDogXCIgKyB1cmwpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihyZXEuc3RhdHVzVGV4dCArIFwiIChcIiArIHJlcS5zdGF0dXMgKyBcIilcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLmdldEpzb246IG5ldHdvcmsgZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiSnNvblNlcnZpY2UuZ2V0SnNvbjogdG9rZW4gcGFzc2VkLCBzZXR0aW5nIEF1dGhvcml6YXRpb24gaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgdG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXEuc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RGb3JtKHVybCwgcGF5bG9hZCkge1xyXG4gICAgICAgIGlmICghdXJsKXtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IE5vIHVybCBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLnBvc3RGb3JtLCB1cmw6IFwiLCB1cmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyB0aGlzLl9YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXEub3BlbignUE9TVCcsIHVybCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWxsb3dlZENvbnRlbnRUeXBlcyA9IHRoaXMuX2NvbnRlbnRUeXBlcztcclxuXHJcbiAgICAgICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgcmVxLnN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBFcnJvciBwYXJzaW5nIEpTT04gcmVzcG9uc2VcIiwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIENvbnRlbnQtVHlwZTogXCIgKyBjb250ZW50VHlwZSArIFwiLCBmcm9tIFVSTDogXCIgKyB1cmwpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDQwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkICYmIHBheWxvYWQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IEVycm9yIGZyb20gc2VydmVyOiBcIiwgcGF5bG9hZC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocGF5bG9hZC5lcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogRXJyb3IgcGFyc2luZyBKU09OIHJlc3BvbnNlXCIsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IocmVxLnN0YXR1c1RleHQgKyBcIiAoXCIgKyByZXEuc3RhdHVzICsgXCIpXCIpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogbmV0d29yayBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiBwYXlsb2FkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGF5bG9hZFtrZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9keS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gXCImXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gXCI9XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAgICAgcmVxLnNlbmQoYm9keSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxubGV0IG5vcExvZ2dlciA9IHtcclxuICAgIGRlYnVnKCl7fSxcclxuICAgIGluZm8oKXt9LFxyXG4gICAgd2Fybigpe30sXHJcbiAgICBlcnJvcigpe31cclxufTtcclxuXHJcbmNvbnN0IE5PTkUgPSAwO1xyXG5jb25zdCBFUlJPUiA9IDE7XHJcbmNvbnN0IFdBUk4gPSAyO1xyXG5jb25zdCBJTkZPID0gMztcclxuY29uc3QgREVCVUcgPSA0O1xyXG5cclxubGV0IGxvZ2dlcjtcclxubGV0IGxldmVsO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZyB7XHJcbiAgICBzdGF0aWMgZ2V0IE5PTkUoKSB7cmV0dXJuIE5PTkV9O1xyXG4gICAgc3RhdGljIGdldCBFUlJPUigpIHtyZXR1cm4gRVJST1J9O1xyXG4gICAgc3RhdGljIGdldCBXQVJOKCkge3JldHVybiBXQVJOfTtcclxuICAgIHN0YXRpYyBnZXQgSU5GTygpIHtyZXR1cm4gSU5GT307XHJcbiAgICBzdGF0aWMgZ2V0IERFQlVHKCkge3JldHVybiBERUJVR307XHJcbiAgICBcclxuICAgIHN0YXRpYyByZXNldCgpe1xyXG4gICAgICAgIGxldmVsID0gSU5GTztcclxuICAgICAgICBsb2dnZXIgPSBub3BMb2dnZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXQgbGV2ZWwoKXtcclxuICAgICAgICByZXR1cm4gbGV2ZWw7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0IGxldmVsKHZhbHVlKXtcclxuICAgICAgICBpZiAoTk9ORSA8PSB2YWx1ZSAmJiB2YWx1ZSA8PSBERUJVRyl7XHJcbiAgICAgICAgICAgIGxldmVsID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvZyBsZXZlbFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXQgbG9nZ2VyKCl7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2dlcjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXQgbG9nZ2VyKHZhbHVlKXtcclxuICAgICAgICBpZiAoIXZhbHVlLmRlYnVnICYmIHZhbHVlLmluZm8pIHtcclxuICAgICAgICAgICAgLy8ganVzdCB0byBzdGF5IGJhY2t3YXJkcyBjb21wYXQuIGNhbiByZW1vdmUgaW4gMi4wXHJcbiAgICAgICAgICAgIHZhbHVlLmRlYnVnID0gdmFsdWUuaW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZS5kZWJ1ZyAmJiB2YWx1ZS5pbmZvICYmIHZhbHVlLndhcm4gJiYgdmFsdWUuZXJyb3Ipe1xyXG4gICAgICAgICAgICBsb2dnZXIgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9nZ2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGRlYnVnKC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmIChsZXZlbCA+PSBERUJVRyl7XHJcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zy5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBpbmZvKC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmIChsZXZlbCA+PSBJTkZPKXtcclxuICAgICAgICAgICAgbG9nZ2VyLmluZm8uYXBwbHkobG9nZ2VyLCBBcnJheS5mcm9tKGFyZ3MpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgd2FybiguLi5hcmdzKXtcclxuICAgICAgICBpZiAobGV2ZWwgPj0gV0FSTil7XHJcbiAgICAgICAgICAgIGxvZ2dlci53YXJuLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGVycm9yKC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmIChsZXZlbCA+PSBFUlJPUil7XHJcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvci5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuTG9nLnJlc2V0KCk7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgSnNvblNlcnZpY2UgfSBmcm9tICcuL0pzb25TZXJ2aWNlLmpzJztcclxuXHJcbmNvbnN0IE9pZGNNZXRhZGF0YVVybFBhdGggPSAnLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgSnNvblNlcnZpY2VDdG9yID0gSnNvblNlcnZpY2UpIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZTogTm8gc2V0dGluZ3MgcGFzc2VkIHRvIE1ldGFkYXRhU2VydmljZVwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0dGluZ3NcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgICAgIHRoaXMuX2pzb25TZXJ2aWNlID0gbmV3IEpzb25TZXJ2aWNlQ3RvcihbJ2FwcGxpY2F0aW9uL2p3ay1zZXQranNvbiddKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWV0YWRhdGFVcmwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9tZXRhZGF0YVVybCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubWV0YWRhdGFVcmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5fc2V0dGluZ3MubWV0YWRhdGFVcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmwgJiYgdGhpcy5fbWV0YWRhdGFVcmwuaW5kZXhPZihPaWRjTWV0YWRhdGFVcmxQYXRoKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmxbdGhpcy5fbWV0YWRhdGFVcmwubGVuZ3RoIC0gMV0gIT09ICcvJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCArPSAnLyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9IE9pZGNNZXRhZGF0YVVybFBhdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVVybDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRhZGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhOiBSZXR1cm5pbmcgbWV0YWRhdGEgZnJvbSBzZXR0aW5nc1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMubWV0YWRhdGFVcmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhOiBObyBhdXRob3JpdHkgb3IgbWV0YWRhdGFVcmwgY29uZmlndXJlZCBvbiBzZXR0aW5nc1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGF1dGhvcml0eSBvciBtZXRhZGF0YVVybCBjb25maWd1cmVkIG9uIHNldHRpbmdzXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YTogZ2V0dGluZyBtZXRhZGF0YSBmcm9tXCIsIHRoaXMubWV0YWRhdGFVcmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih0aGlzLm1ldGFkYXRhVXJsKVxyXG4gICAgICAgICAgICAudGhlbihtZXRhZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGE6IGpzb24gcmVjZWl2ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJc3N1ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJpc3N1ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiYXV0aG9yaXphdGlvbl9lbmRwb2ludFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VySW5mb0VuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwidXNlcmluZm9fZW5kcG9pbnRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW5FbmRwb2ludChvcHRpb25hbD10cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJ0b2tlbl9lbmRwb2ludFwiLCBvcHRpb25hbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hlY2tTZXNzaW9uSWZyYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiY2hlY2tfc2Vzc2lvbl9pZnJhbWVcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW5kU2Vzc2lvbkVuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiZW5kX3Nlc3Npb25fZW5kcG9pbnRcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmV2b2NhdGlvbkVuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwicmV2b2NhdGlvbl9lbmRwb2ludFwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRLZXlzRW5kcG9pbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJqd2tzX3VyaVwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0TWV0YWRhdGFQcm9wZXJ0eShuYW1lLCBvcHRpb25hbD1mYWxzZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5IGZvcjogXCIgKyBuYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWV0YWRhdGEoKS50aGVuKG1ldGFkYXRhID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhUHJvcGVydHk6IG1ldGFkYXRhIHJlY2lldmVkXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1ldGFkYXRhW25hbWVdID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5OiBNZXRhZGF0YSBkb2VzIG5vdCBjb250YWluIG9wdGlvbmFsIHByb3BlcnR5IFwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5OiBNZXRhZGF0YSBkb2VzIG5vdCBjb250YWluIHByb3BlcnR5IFwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0YWRhdGEgZG9lcyBub3QgY29udGFpbiBwcm9wZXJ0eSBcIiArIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWV0YWRhdGFbbmFtZV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2lnbmluZ0tleXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czogUmV0dXJuaW5nIHNpZ25pbmdLZXlzIGZyb20gc2V0dGluZ3NcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJqd2tzX3VyaVwiKS50aGVuKGp3a3NfdXJpID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBqd2tzX3VyaSByZWNlaXZlZFwiLCBqd2tzX3VyaSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbihqd2tzX3VyaSkudGhlbihrZXlTZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBrZXkgc2V0IHJlY2VpdmVkXCIsIGtleVNldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFrZXlTZXQua2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czogTWlzc2luZyBrZXlzIG9uIGtleXNldFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGtleXMgb24ga2V5c2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzID0ga2V5U2V0LmtleXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudFNldHRpbmdzIH0gZnJvbSAnLi9PaWRjQ2xpZW50U2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi9FcnJvclJlc3BvbnNlLmpzJztcclxuaW1wb3J0IHsgU2lnbmluUmVxdWVzdCB9IGZyb20gJy4vU2lnbmluUmVxdWVzdC5qcyc7XHJcbmltcG9ydCB7IFNpZ25pblJlc3BvbnNlIH0gZnJvbSAnLi9TaWduaW5SZXNwb25zZS5qcyc7XHJcbmltcG9ydCB7IFNpZ25vdXRSZXF1ZXN0IH0gZnJvbSAnLi9TaWdub3V0UmVxdWVzdC5qcyc7XHJcbmltcG9ydCB7IFNpZ25vdXRSZXNwb25zZSB9IGZyb20gJy4vU2lnbm91dFJlc3BvbnNlLmpzJztcclxuaW1wb3J0IHsgU2lnbmluU3RhdGUgfSBmcm9tICcuL1NpZ25pblN0YXRlLmpzJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1N0YXRlLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBPaWRjQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzID0ge30pIHtcclxuICAgICAgICBpZiAoc2V0dGluZ3MgaW5zdGFuY2VvZiBPaWRjQ2xpZW50U2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzID0gbmV3IE9pZGNDbGllbnRTZXR0aW5ncyhzZXR0aW5ncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBfc3RhdGVTdG9yZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5zdGF0ZVN0b3JlO1xyXG4gICAgfVxyXG4gICAgZ2V0IF92YWxpZGF0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudmFsaWRhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9tZXRhZGF0YVNlcnZpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubWV0YWRhdGFTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZXR0aW5ncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICBnZXQgbWV0YWRhdGFTZXJ2aWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2lnbmluUmVxdWVzdCh7XHJcbiAgICAgICAgcmVzcG9uc2VfdHlwZSwgc2NvcGUsIHJlZGlyZWN0X3VyaSxcclxuICAgICAgICAvLyBkYXRhIHdhcyBtZWFudCB0byBiZSB0aGUgcGxhY2UgYSBjYWxsZXIgY291bGQgaW5kaWNhdGUgdGhlIGRhdGEgdG9cclxuICAgICAgICAvLyBoYXZlIHJvdW5kIHRyaXBwZWQsIGJ1dCBwZW9wbGUgd2VyZSBnZXR0aW5nIGNvbmZ1c2VkLCBzbyBpIGFkZGVkIHN0YXRlIChzaW5jZSB0aGF0IG1hdGNoZXMgdGhlIHNwZWMpXHJcbiAgICAgICAgLy8gYW5kIHNvIG5vdyBpZiBkYXRhIGlzIG5vdCBwYXNzZWQsIGJ1dCBzdGF0ZSBpcyB0aGVuIHN0YXRlIHdpbGwgYmUgdXNlZFxyXG4gICAgICAgIGRhdGEsIHN0YXRlLCBwcm9tcHQsIGRpc3BsYXksIG1heF9hZ2UsIHVpX2xvY2FsZXMsIGlkX3Rva2VuX2hpbnQsIGxvZ2luX2hpbnQsIGFjcl92YWx1ZXMsXHJcbiAgICAgICAgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCByZXNwb25zZV9tb2RlLCBleHRyYVF1ZXJ5UGFyYW1zLCBleHRyYVRva2VuUGFyYW1zLCByZXF1ZXN0X3R5cGUsIHNraXBVc2VySW5mbyB9ID0ge30sXHJcbiAgICAgICAgc3RhdGVTdG9yZVxyXG4gICAgKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWduaW5SZXF1ZXN0XCIpO1xyXG5cclxuICAgICAgICBsZXQgY2xpZW50X2lkID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xyXG4gICAgICAgIHJlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlIHx8IHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX3R5cGU7XHJcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzLl9zZXR0aW5ncy5zY29wZTtcclxuICAgICAgICByZWRpcmVjdF91cmkgPSByZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xyXG5cclxuICAgICAgICAvLyBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50IGFyZW4ndCBhbGxvd2VkIG9uIF9zZXR0aW5nc1xyXG4gICAgICAgIHByb21wdCA9IHByb21wdCB8fCB0aGlzLl9zZXR0aW5ncy5wcm9tcHQ7XHJcbiAgICAgICAgZGlzcGxheSA9IGRpc3BsYXkgfHwgdGhpcy5fc2V0dGluZ3MuZGlzcGxheTtcclxuICAgICAgICBtYXhfYWdlID0gbWF4X2FnZSB8fCB0aGlzLl9zZXR0aW5ncy5tYXhfYWdlO1xyXG4gICAgICAgIHVpX2xvY2FsZXMgPSB1aV9sb2NhbGVzIHx8IHRoaXMuX3NldHRpbmdzLnVpX2xvY2FsZXM7XHJcbiAgICAgICAgYWNyX3ZhbHVlcyA9IGFjcl92YWx1ZXMgfHwgdGhpcy5fc2V0dGluZ3MuYWNyX3ZhbHVlcztcclxuICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlIHx8IHRoaXMuX3NldHRpbmdzLnJlc291cmNlO1xyXG4gICAgICAgIHJlc3BvbnNlX21vZGUgPSByZXNwb25zZV9tb2RlIHx8IHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX21vZGU7XHJcbiAgICAgICAgZXh0cmFRdWVyeVBhcmFtcyA9IGV4dHJhUXVlcnlQYXJhbXMgfHwgdGhpcy5fc2V0dGluZ3MuZXh0cmFRdWVyeVBhcmFtcztcclxuICAgICAgICBleHRyYVRva2VuUGFyYW1zID0gZXh0cmFUb2tlblBhcmFtcyB8fCB0aGlzLl9zZXR0aW5ncy5leHRyYVRva2VuUGFyYW1zO1xyXG5cclxuICAgICAgICBsZXQgYXV0aG9yaXR5ID0gdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5O1xyXG5cclxuICAgICAgICBpZiAoU2lnbmluUmVxdWVzdC5pc0NvZGUocmVzcG9uc2VfdHlwZSkgJiYgcmVzcG9uc2VfdHlwZSAhPT0gXCJjb2RlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk9wZW5JRCBDb25uZWN0IGh5YnJpZCBmbG93IGlzIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRBdXRob3JpemF0aW9uRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbmluUmVxdWVzdDogUmVjZWl2ZWQgYXV0aG9yaXphdGlvbiBlbmRwb2ludFwiLCB1cmwpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNpZ25pblJlcXVlc3QgPSBuZXcgU2lnbmluUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRfaWQsXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdF91cmksXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZV90eXBlLFxyXG4gICAgICAgICAgICAgICAgc2NvcGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhIHx8IHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5LFxyXG4gICAgICAgICAgICAgICAgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50LCBhY3JfdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCBleHRyYVF1ZXJ5UGFyYW1zLCBleHRyYVRva2VuUGFyYW1zLCByZXF1ZXN0X3R5cGUsIHJlc3BvbnNlX21vZGUsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfc2VjcmV0LFxyXG4gICAgICAgICAgICAgICAgc2tpcFVzZXJJbmZvXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNpZ25pblN0YXRlID0gc2lnbmluUmVxdWVzdC5zdGF0ZTtcclxuICAgICAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVN0b3JlLnNldChzaWduaW5TdGF0ZS5pZCwgc2lnbmluU3RhdGUudG9TdG9yYWdlU3RyaW5nKCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpZ25pblJlcXVlc3Q7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRTaWduaW5SZXNwb25zZVN0YXRlKHVybCwgc3RhdGVTdG9yZSwgcmVtb3ZlU3RhdGUgPSBmYWxzZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucmVhZFNpZ25pblJlc3BvbnNlU3RhdGVcIik7XHJcblxyXG4gICAgICAgIGxldCB1c2VRdWVyeSA9IHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX21vZGUgPT09IFwicXVlcnlcIiB8fCBcclxuICAgICAgICAgICAgKCF0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV9tb2RlICYmIFNpZ25pblJlcXVlc3QuaXNDb2RlKHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX3R5cGUpKTtcclxuICAgICAgICBsZXQgZGVsaW1pdGVyID0gdXNlUXVlcnkgPyBcIj9cIiA6IFwiI1wiO1xyXG5cclxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBuZXcgU2lnbmluUmVzcG9uc2UodXJsLCBkZWxpbWl0ZXIpO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnQucmVhZFNpZ25pblJlc3BvbnNlU3RhdGU6IE5vIHN0YXRlIGluIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc3RhdGUgaW4gcmVzcG9uc2VcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcclxuXHJcbiAgICAgICAgdmFyIHN0YXRlQXBpID0gcmVtb3ZlU3RhdGUgPyBzdGF0ZVN0b3JlLnJlbW92ZS5iaW5kKHN0YXRlU3RvcmUpIDogc3RhdGVTdG9yZS5nZXQuYmluZChzdGF0ZVN0b3JlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlQXBpKHJlc3BvbnNlLnN0YXRlKS50aGVuKHN0b3JlZFN0YXRlU3RyaW5nID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzdG9yZWRTdGF0ZVN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZTogTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG1hdGNoaW5nIHN0YXRlIGZvdW5kIGluIHN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IFNpZ25pblN0YXRlLmZyb21TdG9yYWdlU3RyaW5nKHN0b3JlZFN0YXRlU3RyaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZSwgcmVzcG9uc2V9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwsIHN0YXRlU3RvcmUpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnByb2Nlc3NTaWduaW5SZXNwb25zZVwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFNpZ25pblJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCB0cnVlKS50aGVuKCh7c3RhdGUsIHJlc3BvbnNlfSkgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnByb2Nlc3NTaWduaW5SZXNwb25zZTogUmVjZWl2ZWQgc3RhdGUgZnJvbSBzdG9yYWdlOyB2YWxpZGF0aW5nIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTaWdub3V0UmVxdWVzdCh7aWRfdG9rZW5faGludCwgZGF0YSwgc3RhdGUsIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSwgZXh0cmFRdWVyeVBhcmFtcywgcmVxdWVzdF90eXBlIH0gPSB7fSxcclxuICAgICAgICBzdGF0ZVN0b3JlXHJcbiAgICApIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25vdXRSZXF1ZXN0XCIpO1xyXG5cclxuICAgICAgICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIGV4dHJhUXVlcnlQYXJhbXMgPSBleHRyYVF1ZXJ5UGFyYW1zIHx8IHRoaXMuX3NldHRpbmdzLmV4dHJhUXVlcnlQYXJhbXM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0RW5kU2Vzc2lvbkVuZHBvaW50KCkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogTm8gZW5kIHNlc3Npb24gZW5kcG9pbnQgdXJsIHJldHVybmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm8gZW5kIHNlc3Npb24gZW5kcG9pbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbm91dFJlcXVlc3Q6IFJlY2VpdmVkIGVuZCBzZXNzaW9uIGVuZHBvaW50XCIsIHVybCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBTaWdub3V0UmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICBpZF90b2tlbl9oaW50LFxyXG4gICAgICAgICAgICAgICAgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSB8fCBzdGF0ZSxcclxuICAgICAgICAgICAgICAgIGV4dHJhUXVlcnlQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0X3R5cGVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2lnbm91dFN0YXRlID0gcmVxdWVzdC5zdGF0ZTtcclxuICAgICAgICAgICAgaWYgKHNpZ25vdXRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogU2lnbm91dCByZXF1ZXN0IGhhcyBzdGF0ZSB0byBwZXJzaXN0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZVN0b3JlLnNldChzaWdub3V0U3RhdGUuaWQsIHNpZ25vdXRTdGF0ZS50b1N0b3JhZ2VTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSh1cmwsIHN0YXRlU3RvcmUsIHJlbW92ZVN0YXRlID0gZmFsc2UpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZVwiKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gbmV3IFNpZ25vdXRSZXNwb25zZSh1cmwpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uuc3RhdGUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGU6IE5vIHN0YXRlIGluIHJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cud2FybihcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlOiBSZXNwb25zZSB3YXMgZXJyb3I6IFwiLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yUmVzcG9uc2UocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c3RhdGU6IHVuZGVmaW5lZCwgcmVzcG9uc2V9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzdGF0ZUtleSA9IHJlc3BvbnNlLnN0YXRlO1xyXG5cclxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xyXG5cclxuICAgICAgICB2YXIgc3RhdGVBcGkgPSByZW1vdmVTdGF0ZSA/IHN0YXRlU3RvcmUucmVtb3ZlLmJpbmQoc3RhdGVTdG9yZSkgOiBzdGF0ZVN0b3JlLmdldC5iaW5kKHN0YXRlU3RvcmUpO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZUFwaShzdGF0ZUtleSkudGhlbihzdG9yZWRTdGF0ZVN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3RvcmVkU3RhdGVTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlOiBObyBtYXRjaGluZyBzdGF0ZSBmb3VuZCBpbiBzdG9yYWdlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmVkU3RhdGVTdHJpbmcpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZSwgcmVzcG9uc2V9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsLCBzdGF0ZVN0b3JlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCB0cnVlKS50aGVuKCh7c3RhdGUsIHJlc3BvbnNlfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25vdXRSZXNwb25zZTogUmVjZWl2ZWQgc3RhdGUgZnJvbSBzdG9yYWdlOyB2YWxpZGF0aW5nIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlOiBObyBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHNraXBwaW5nIHZhbGlkYXRpbmcgcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclN0YWxlU3RhdGUoc3RhdGVTdG9yZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY2xlYXJTdGFsZVN0YXRlXCIpO1xyXG5cclxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xyXG5cclxuICAgICAgICByZXR1cm4gU3RhdGUuY2xlYXJTdGFsZVN0YXRlKHN0YXRlU3RvcmUsIHRoaXMuc2V0dGluZ3Muc3RhbGVTdGF0ZUFnZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJy4vV2ViU3RvcmFnZVN0YXRlU3RvcmUuanMnO1xyXG5pbXBvcnQgeyBSZXNwb25zZVZhbGlkYXRvciB9IGZyb20gJy4vUmVzcG9uc2VWYWxpZGF0b3IuanMnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL01ldGFkYXRhU2VydmljZS5qcyc7XHJcblxyXG5jb25zdCBPaWRjTWV0YWRhdGFVcmxQYXRoID0gJy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uJztcclxuXHJcbmNvbnN0IERlZmF1bHRSZXNwb25zZVR5cGUgPSBcImlkX3Rva2VuXCI7XHJcbmNvbnN0IERlZmF1bHRTY29wZSA9IFwib3BlbmlkXCI7XHJcbmNvbnN0IERlZmF1bHRTdGFsZVN0YXRlQWdlID0gNjAgKiAxNTsgLy8gc2Vjb25kc1xyXG5jb25zdCBEZWZhdWx0Q2xvY2tTa2V3SW5TZWNvbmRzID0gNjAgKiA1O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9pZGNDbGllbnRTZXR0aW5ncyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgLy8gbWV0YWRhdGEgcmVsYXRlZFxyXG4gICAgICAgIGF1dGhvcml0eSwgbWV0YWRhdGFVcmwsIG1ldGFkYXRhLCBzaWduaW5nS2V5cyxcclxuICAgICAgICAvLyBjbGllbnQgcmVsYXRlZFxyXG4gICAgICAgIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgcmVzcG9uc2VfdHlwZSA9IERlZmF1bHRSZXNwb25zZVR5cGUsIHNjb3BlID0gRGVmYXVsdFNjb3BlLFxyXG4gICAgICAgIHJlZGlyZWN0X3VyaSwgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxyXG4gICAgICAgIC8vIG9wdGlvbmFsIHByb3RvY29sXHJcbiAgICAgICAgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBhY3JfdmFsdWVzLCByZXNvdXJjZSwgcmVzcG9uc2VfbW9kZSxcclxuICAgICAgICAvLyBiZWhhdmlvciBmbGFnc1xyXG4gICAgICAgIGZpbHRlclByb3RvY29sQ2xhaW1zID0gdHJ1ZSwgbG9hZFVzZXJJbmZvID0gdHJ1ZSxcclxuICAgICAgICBzdGFsZVN0YXRlQWdlID0gRGVmYXVsdFN0YWxlU3RhdGVBZ2UsIGNsb2NrU2tldyA9IERlZmF1bHRDbG9ja1NrZXdJblNlY29uZHMsXHJcbiAgICAgICAgdXNlckluZm9Kd3RJc3N1ZXIgPSAnT1AnLFxyXG4gICAgICAgIC8vIG90aGVyIGJlaGF2aW9yXHJcbiAgICAgICAgc3RhdGVTdG9yZSA9IG5ldyBXZWJTdG9yYWdlU3RhdGVTdG9yZSgpLFxyXG4gICAgICAgIFJlc3BvbnNlVmFsaWRhdG9yQ3RvciA9IFJlc3BvbnNlVmFsaWRhdG9yLFxyXG4gICAgICAgIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2UsXHJcbiAgICAgICAgLy8gZXh0cmEgcXVlcnkgcGFyYW1zXHJcbiAgICAgICAgZXh0cmFRdWVyeVBhcmFtcyA9IHt9LFxyXG4gICAgICAgIGV4dHJhVG9rZW5QYXJhbXMgPSB7fVxyXG4gICAgfSA9IHt9KSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2F1dGhvcml0eSA9IGF1dGhvcml0eTtcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IG1ldGFkYXRhVXJsO1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhID0gbWV0YWRhdGE7XHJcbiAgICAgICAgdGhpcy5fc2lnbmluZ0tleXMgPSBzaWduaW5nS2V5cztcclxuXHJcbiAgICAgICAgdGhpcy5fY2xpZW50X2lkID0gY2xpZW50X2lkO1xyXG4gICAgICAgIHRoaXMuX2NsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xyXG4gICAgICAgIHRoaXMuX3Jlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlO1xyXG4gICAgICAgIHRoaXMuX3Njb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5fcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcclxuXHJcbiAgICAgICAgdGhpcy5fcHJvbXB0ID0gcHJvbXB0O1xyXG4gICAgICAgIHRoaXMuX2Rpc3BsYXkgPSBkaXNwbGF5O1xyXG4gICAgICAgIHRoaXMuX21heF9hZ2UgPSBtYXhfYWdlO1xyXG4gICAgICAgIHRoaXMuX3VpX2xvY2FsZXMgPSB1aV9sb2NhbGVzO1xyXG4gICAgICAgIHRoaXMuX2Fjcl92YWx1ZXMgPSBhY3JfdmFsdWVzO1xyXG4gICAgICAgIHRoaXMuX3Jlc291cmNlID0gcmVzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZpbHRlclByb3RvY29sQ2xhaW1zID0gISFmaWx0ZXJQcm90b2NvbENsYWltcztcclxuICAgICAgICB0aGlzLl9sb2FkVXNlckluZm8gPSAhIWxvYWRVc2VySW5mbztcclxuICAgICAgICB0aGlzLl9zdGFsZVN0YXRlQWdlID0gc3RhbGVTdGF0ZUFnZTtcclxuICAgICAgICB0aGlzLl9jbG9ja1NrZXcgPSBjbG9ja1NrZXc7XHJcbiAgICAgICAgdGhpcy5fdXNlckluZm9Kd3RJc3N1ZXIgPSB1c2VySW5mb0p3dElzc3VlcjtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmU7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdG9yID0gbmV3IFJlc3BvbnNlVmFsaWRhdG9yQ3Rvcih0aGlzKTtcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHR5cGVvZiBleHRyYVF1ZXJ5UGFyYW1zID09PSAnb2JqZWN0JyA/IGV4dHJhUXVlcnlQYXJhbXMgOiB7fTtcclxuICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0gdHlwZW9mIGV4dHJhVG9rZW5QYXJhbXMgPT09ICdvYmplY3QnID8gZXh0cmFUb2tlblBhcmFtcyA6IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNsaWVudCBjb25maWdcclxuICAgIGdldCBjbGllbnRfaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9pZDtcclxuICAgIH1cclxuICAgIHNldCBjbGllbnRfaWQodmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NsaWVudF9pZCkge1xyXG4gICAgICAgICAgICAvLyBvbmUtdGltZSBzZXQgb25seVxyXG4gICAgICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnRTZXR0aW5ncy5zZXRfY2xpZW50X2lkOiBjbGllbnRfaWQgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpZW50X2lkIGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGNsaWVudF9zZWNyZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9zZWNyZXQ7XHJcbiAgICB9XHJcbiAgICBnZXQgcmVzcG9uc2VfdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VfdHlwZTtcclxuICAgIH1cclxuICAgIGdldCBzY29wZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcGU7XHJcbiAgICB9XHJcbiAgICBnZXQgcmVkaXJlY3RfdXJpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdF91cmk7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG9wdGlvbmFsIHByb3RvY29sIHBhcmFtc1xyXG4gICAgZ2V0IHByb21wdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbXB0O1xyXG4gICAgfVxyXG4gICAgZ2V0IGRpc3BsYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXk7XHJcbiAgICB9XHJcbiAgICBnZXQgbWF4X2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4X2FnZTtcclxuICAgIH1cclxuICAgIGdldCB1aV9sb2NhbGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91aV9sb2NhbGVzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFjcl92YWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fjcl92YWx1ZXM7XHJcbiAgICB9XHJcbiAgICBnZXQgcmVzb3VyY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlc3BvbnNlX21vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlX21vZGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG1ldGFkYXRhXHJcbiAgICBnZXQgYXV0aG9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRob3JpdHk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXV0aG9yaXR5KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9hdXRob3JpdHkpIHtcclxuICAgICAgICAgICAgLy8gb25lLXRpbWUgc2V0IG9ubHlcclxuICAgICAgICAgICAgdGhpcy5fYXV0aG9yaXR5ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJPaWRjQ2xpZW50U2V0dGluZ3Muc2V0X2F1dGhvcml0eTogYXV0aG9yaXR5IGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhvcml0eSBoYXMgYWxyZWFkeSBiZWVuIGFzc2lnbmVkLlwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBtZXRhZGF0YVVybCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX21ldGFkYXRhVXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5hdXRob3JpdHk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmwgJiYgdGhpcy5fbWV0YWRhdGFVcmwuaW5kZXhPZihPaWRjTWV0YWRhdGFVcmxQYXRoKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybFt0aGlzLl9tZXRhZGF0YVVybC5sZW5ndGggLSAxXSAhPT0gJy8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gJy8nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gT2lkY01ldGFkYXRhVXJsUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldHRhYmxlL2NhY2hhYmxlIG1ldGFkYXRhIHZhbHVlc1xyXG4gICAgZ2V0IG1ldGFkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YTtcclxuICAgIH1cclxuICAgIHNldCBtZXRhZGF0YSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZ25pbmdLZXlzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5nS2V5cztcclxuICAgIH1cclxuICAgIHNldCBzaWduaW5nS2V5cyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3NpZ25pbmdLZXlzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmVoYXZpb3IgZmxhZ3NcclxuICAgIGdldCBmaWx0ZXJQcm90b2NvbENsYWltcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyUHJvdG9jb2xDbGFpbXM7XHJcbiAgICB9XHJcbiAgICBnZXQgbG9hZFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkVXNlckluZm87XHJcbiAgICB9XHJcbiAgICBnZXQgc3RhbGVTdGF0ZUFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhbGVTdGF0ZUFnZTtcclxuICAgIH1cclxuICAgIGdldCBjbG9ja1NrZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb2NrU2tldztcclxuICAgIH1cclxuICAgIGdldCB1c2VySW5mb0p3dElzc3VlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckluZm9Kd3RJc3N1ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXRlU3RvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlU3RvcmU7XHJcbiAgICB9XHJcbiAgICBnZXQgdmFsaWRhdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgbWV0YWRhdGFTZXJ2aWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXh0cmEgcXVlcnkgcGFyYW1zXHJcbiAgICBnZXQgZXh0cmFRdWVyeVBhcmFtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFRdWVyeVBhcmFtcztcclxuICAgIH1cclxuICAgIHNldCBleHRyYVF1ZXJ5UGFyYW1zKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zID0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBleHRyYSB0b2tlbiBwYXJhbXNcclxuICAgIGdldCBleHRyYVRva2VuUGFyYW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHRyYVRva2VuUGFyYW1zO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4dHJhVG9rZW5QYXJhbXModmFsdWUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXMgPSB2YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgUG9wdXBXaW5kb3cgfSBmcm9tICcuL1BvcHVwV2luZG93LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cE5hdmlnYXRvciB7XHJcblxyXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcclxuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgUG9wdXBXaW5kb3cocGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsYmFjayh1cmwsIGtlZXBPcGVuLCBkZWxpbWl0ZXIpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cE5hdmlnYXRvci5jYWxsYmFja1wiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xyXG5cclxuY29uc3QgQ2hlY2tGb3JQb3B1cENsb3NlZEludGVydmFsID0gNTAwO1xyXG5jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9ICdsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHdpZHRoPTUwMCxoZWlnaHQ9NTAwLGxlZnQ9MTAwLHRvcD0xMDA7JztcclxuLy9jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9ICdsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHdpZHRoPTUwMCxoZWlnaHQ9NTAwLGxlZnQ9MTAwLHRvcD0xMDA7cmVzaXphYmxlPXllcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0UG9wdXBUYXJnZXQgPSBcIl9ibGFua1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwV2luZG93IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gcGFyYW1zLnBvcHVwV2luZG93VGFyZ2V0IHx8IERlZmF1bHRQb3B1cFRhcmdldDtcclxuICAgICAgICBsZXQgZmVhdHVyZXMgPSBwYXJhbXMucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCBEZWZhdWx0UG9wdXBGZWF0dXJlcztcclxuXHJcbiAgICAgICAgdGhpcy5fcG9wdXAgPSB3aW5kb3cub3BlbignJywgdGFyZ2V0LCBmZWF0dXJlcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmN0b3I6IHBvcHVwIHN1Y2Nlc3NmdWxseSBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZC5iaW5kKHRoaXMpLCBDaGVja0ZvclBvcHVwQ2xvc2VkSW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvbWlzZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3BvcHVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiUG9wdXBXaW5kb3cubmF2aWdhdGU6IEVycm9yIG9wZW5pbmcgcG9wdXAgd2luZG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghcGFyYW1zIHx8ICFwYXJhbXMudXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiUG9wdXBXaW5kb3cubmF2aWdhdGU6IG5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogU2V0dGluZyBVUkwgaW4gcG9wdXBcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pZCA9IHBhcmFtcy5pZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJwb3B1cENhbGxiYWNrX1wiICsgcGFyYW1zLmlkXSA9IHRoaXMuX2NhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLndpbmRvdy5sb2NhdGlvbiA9IHBhcmFtcy51cmw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9zdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5jYWxsYmFjazogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIHBvcHVwIHdpbmRvd1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdmUoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBfZXJyb3IobWVzc2FnZSkge1xyXG4gICAgICAgIExvZy5lcnJvcihcIlBvcHVwV2luZG93LmVycm9yOiBcIiwgbWVzc2FnZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG4gICAgICAgIHRoaXMuX3JlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXAoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbGVhbnVwKGtlZXBPcGVuKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY2xlYW51cFwiKTtcclxuXHJcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZFRpbWVyKTtcclxuICAgICAgICB0aGlzLl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBkZWxldGUgd2luZG93W1wicG9wdXBDYWxsYmFja19cIiArIHRoaXMuX2lkXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwICYmICFrZWVwT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wb3B1cCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrRm9yUG9wdXBDbG9zZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9wb3B1cCB8fCB0aGlzLl9wb3B1cC5jbG9zZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJQb3B1cCB3aW5kb3cgY2xvc2VkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXAoa2VlcE9wZW4pO1xyXG5cclxuICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNhbGxiYWNrIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Y2Nlc3MoeyB1cmw6IHVybCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNhbGxiYWNrOiBJbnZhbGlkIHJlc3BvbnNlIGZyb20gcG9wdXBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiSW52YWxpZCByZXNwb25zZSBmcm9tIHBvcHVwXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm90aWZ5T3BlbmVyKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcikge1xyXG4gICAgICAgIGlmICh3aW5kb3cub3BlbmVyKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBkZWxpbWl0ZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBcInBvcHVwQ2FsbGJhY2tfXCIgKyBkYXRhLnN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHdpbmRvdy5vcGVuZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogcGFzc2luZyB1cmwgbWVzc2FnZSB0byBvcGVuZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVybCwga2VlcE9wZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJQb3B1cFdpbmRvdy5ub3RpZnlPcGVuZXI6IG5vIG1hdGNoaW5nIGNhbGxiYWNrIGZvdW5kIG9uIG9wZW5lclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gc3RhdGUgZm91bmQgaW4gcmVzcG9uc2UgdXJsXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cud2FybihcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gd2luZG93Lm9wZW5lci4gQ2FuJ3QgY29tcGxldGUgbm90aWZpY2F0aW9uLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlZGlyZWN0TmF2aWdhdG9yIHtcclxuXHJcbiAgICBwcmVwYXJlKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2aWdhdGUocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy51cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVkaXJlY3ROYXZpZ2F0b3IubmF2aWdhdGU6IE5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyYW1zLnVzZVJlcGxhY2VUb05hdmlnYXRlKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHBhcmFtcy51cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcGFyYW1zLnVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXJsKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgVXNlckluZm9TZXJ2aWNlIH0gZnJvbSAnLi9Vc2VySW5mb1NlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBUb2tlbkNsaWVudCB9IGZyb20gJy4vVG9rZW5DbGllbnQuanMnO1xyXG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi9FcnJvclJlc3BvbnNlLmpzJztcclxuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcclxuXHJcbmNvbnN0IFByb3RvY29sQ2xhaW1zID0gW1wibm9uY2VcIiwgXCJhdF9oYXNoXCIsIFwiaWF0XCIsIFwibmJmXCIsIFwiZXhwXCIsIFwiYXVkXCIsIFwiaXNzXCIsIFwiY19oYXNoXCJdO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlVmFsaWRhdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgXHJcbiAgICAgICAgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSxcclxuICAgICAgICBVc2VySW5mb1NlcnZpY2VDdG9yID0gVXNlckluZm9TZXJ2aWNlLCBcclxuICAgICAgICBqb3NlVXRpbCA9IEpvc2VVdGlsLFxyXG4gICAgICAgIFRva2VuQ2xpZW50Q3RvciA9IFRva2VuQ2xpZW50KSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5jdG9yOiBObyBzZXR0aW5ncyBwYXNzZWQgdG8gUmVzcG9uc2VWYWxpZGF0b3JcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fdXNlckluZm9TZXJ2aWNlID0gbmV3IFVzZXJJbmZvU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XHJcbiAgICAgICAgdGhpcy5fdG9rZW5DbGllbnQgPSBuZXcgVG9rZW5DbGllbnRDdG9yKHRoaXMuX3NldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZVNpZ25pblJlc3BvbnNlKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2VcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzU2lnbmluUGFyYW1zKHN0YXRlLCByZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2U6IHN0YXRlIHByb2Nlc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlVG9rZW5zKHN0YXRlLCByZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlOiB0b2tlbnMgdmFsaWRhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NDbGFpbXMoc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlOiBjbGFpbXMgcHJvY2Vzc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoc3RhdGUuaWQgIT09IHJlc3BvbnNlLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbm91dFJlc3BvbnNlOiBTdGF0ZSBkb2VzIG5vdCBtYXRjaFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG5vdyB0aGF0IHdlIGtub3cgdGhlIHN0YXRlIG1hdGNoZXMsIHRha2UgdGhlIHN0b3JlZCBkYXRhXHJcbiAgICAgICAgLy8gYW5kIHNldCBpdCBpbnRvIHRoZSByZXNwb25zZSBzbyBjYWxsZXJzIGNhbiBnZXQgdGhlaXIgc3RhdGVcclxuICAgICAgICAvLyB0aGlzIGlzIGltcG9ydGFudCBmb3IgYm90aCBzdWNjZXNzICYgZXJyb3Igb3V0Y29tZXNcclxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZTogc3RhdGUgdmFsaWRhdGVkXCIpO1xyXG4gICAgICAgIHJlc3BvbnNlLnN0YXRlID0gc3RhdGUuZGF0YTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIExvZy53YXJuKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWdub3V0UmVzcG9uc2U6IFJlc3BvbnNlIHdhcyBlcnJvclwiLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JSZXNwb25zZShyZXNwb25zZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Byb2Nlc3NTaWduaW5QYXJhbXMoc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmlkICE9PSByZXNwb25zZS5zdGF0ZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogU3RhdGUgZG9lcyBub3QgbWF0Y2hcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJTdGF0ZSBkb2VzIG5vdCBtYXRjaFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXN0YXRlLmNsaWVudF9pZCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogTm8gY2xpZW50X2lkIG9uIHN0YXRlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gY2xpZW50X2lkIG9uIHN0YXRlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUuYXV0aG9yaXR5KSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBObyBhdXRob3JpdHkgb24gc3RhdGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBhdXRob3JpdHkgb24gc3RhdGVcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcyBhbGxvd3MgdGhlIGF1dGhvcml0eSB0byBiZSBsb2FkZWQgZnJvbSB0aGUgc2lnbmluIHN0YXRlXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5ID0gc3RhdGUuYXV0aG9yaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbnN1cmUgd2UncmUgdXNpbmcgdGhlIGNvcnJlY3QgYXV0aG9yaXR5IGlmIHRoZSBhdXRob3JpdHkgaXMgbm90IGxvYWRlZCBmcm9tIHNpZ25pbiBzdGF0ZVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSAmJiB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkgIT09IHN0YXRlLmF1dGhvcml0eSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogYXV0aG9yaXR5IG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhdXRob3JpdHkgbWlzbWF0Y2ggb24gc2V0dGluZ3MgdnMuIHNpZ25pbiBzdGF0ZVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMgYWxsb3dzIHRoZSBjbGllbnRfaWQgdG8gYmUgbG9hZGVkIGZyb20gdGhlIHNpZ25pbiBzdGF0ZVxyXG4gICAgICAgIGlmICghdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCA9IHN0YXRlLmNsaWVudF9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZW5zdXJlIHdlJ3JlIHVzaW5nIHRoZSBjb3JyZWN0IGNsaWVudF9pZCBpZiB0aGUgY2xpZW50X2lkIGlzIG5vdCBsb2FkZWQgZnJvbSBzaWduaW4gc3RhdGVcclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQgJiYgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkICE9PSBzdGF0ZS5jbGllbnRfaWQpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IGNsaWVudF9pZCBtaXNtYXRjaCBvbiBzZXR0aW5ncyB2cy4gc2lnbmluIHN0YXRlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiY2xpZW50X2lkIG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbm93IHRoYXQgd2Uga25vdyB0aGUgc3RhdGUgbWF0Y2hlcywgdGFrZSB0aGUgc3RvcmVkIGRhdGFcclxuICAgICAgICAvLyBhbmQgc2V0IGl0IGludG8gdGhlIHJlc3BvbnNlIHNvIGNhbGxlcnMgY2FuIGdldCB0aGVpciBzdGF0ZVxyXG4gICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGZvciBib3RoIHN1Y2Nlc3MgJiBlcnJvciBvdXRjb21lc1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBzdGF0ZSB2YWxpZGF0ZWRcIik7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdGUgPSBzdGF0ZS5kYXRhO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgTG9nLndhcm4oXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogUmVzcG9uc2Ugd2FzIGVycm9yXCIsIHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUubm9uY2UgJiYgIXJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBFeHBlY3RpbmcgaWRfdG9rZW4gaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBpZF90b2tlbiBpbiByZXNwb25zZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXN0YXRlLm5vbmNlICYmIHJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBOb3QgZXhwZWN0aW5nIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5leHBlY3RlZCBpZF90b2tlbiBpbiByZXNwb25zZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUuY29kZV92ZXJpZmllciAmJiAhcmVzcG9uc2UuY29kZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogRXhwZWN0aW5nIGNvZGUgaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBjb2RlIGluIHJlc3BvbnNlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUuY29kZV92ZXJpZmllciAmJiByZXNwb25zZS5jb2RlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBOb3QgZXhwZWN0aW5nIGNvZGUgaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGNvZGUgaW4gcmVzcG9uc2VcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5zY29wZSkge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSdzIG5vIHNjb3BlIG9uIHRoZSByZXNwb25zZSwgdGhlbiBhc3N1bWUgYWxsIHNjb3BlcyBncmFudGVkIChwZXItc3BlYykgYW5kIGNvcHkgb3ZlciBzY29wZXMgZnJvbSBvcmlnaW5hbCByZXF1ZXN0XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnNjb3BlID0gc3RhdGUuc2NvcGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcHJvY2Vzc0NsYWltcyhzdGF0ZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuaXNPcGVuSWRDb25uZWN0KSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiByZXNwb25zZSBpcyBPSURDLCBwcm9jZXNzaW5nIGNsYWltc1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnByb2ZpbGUgPSB0aGlzLl9maWx0ZXJQcm90b2NvbENsYWltcyhyZXNwb25zZS5wcm9maWxlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5za2lwVXNlckluZm8gIT09IHRydWUgJiYgdGhpcy5fc2V0dGluZ3MubG9hZFVzZXJJbmZvICYmIHJlc3BvbnNlLmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IGxvYWRpbmcgdXNlciBpbmZvXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zKHJlc3BvbnNlLmFjY2Vzc190b2tlbikudGhlbihjbGFpbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiB1c2VyIGluZm8gY2xhaW1zIHJlY2VpdmVkIGZyb20gdXNlciBpbmZvIGVuZHBvaW50XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xhaW1zLnN1YiAhPT0gcmVzcG9uc2UucHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHN1YiBmcm9tIHVzZXIgaW5mbyBlbmRwb2ludCBkb2VzIG5vdCBtYXRjaCBzdWIgaW4gYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic3ViIGZyb20gdXNlciBpbmZvIGVuZHBvaW50IGRvZXMgbm90IG1hdGNoIHN1YiBpbiBhY2Nlc3NfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHRoaXMuX21lcmdlQ2xhaW1zKHJlc3BvbnNlLnByb2ZpbGUsIGNsYWltcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHVzZXIgaW5mbyBjbGFpbXMgcmVjZWl2ZWQsIHVwZGF0ZWQgcHJvZmlsZTpcIiwgcmVzcG9uc2UucHJvZmlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IG5vdCBsb2FkaW5nIHVzZXIgaW5mb1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHJlc3BvbnNlIGlzIG5vdCBPSURDLCBub3QgcHJvY2Vzc2luZyBjbGFpbXNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBfbWVyZ2VDbGFpbXMoY2xhaW1zMSwgY2xhaW1zMikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBjbGFpbXMxKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBjbGFpbXMyKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBjbGFpbXMyW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdFtuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRbbmFtZV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdFtuYW1lXS5pbmRleE9mKHZhbHVlKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdFtuYW1lXSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSB0aGlzLl9tZXJnZUNsYWltcyhyZXN1bHRbbmFtZV0sIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSBbcmVzdWx0W25hbWVdLCB2YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIF9maWx0ZXJQcm90b2NvbENsYWltcyhjbGFpbXMpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyUHJvdG9jb2xDbGFpbXMsIGluY29taW5nIGNsYWltczpcIiwgY2xhaW1zKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIGNsYWltcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5fZmlsdGVyUHJvdG9jb2xDbGFpbXMpIHtcclxuICAgICAgICAgICAgUHJvdG9jb2xDbGFpbXMuZm9yRWFjaCh0eXBlID0+IHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbdHlwZV07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlclByb3RvY29sQ2xhaW1zOiBwcm90b2NvbCBjbGFpbXMgZmlsdGVyZWRcIiwgcmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJQcm90b2NvbENsYWltczogcHJvdG9jb2wgY2xhaW1zIG5vdCBmaWx0ZXJlZFwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBfdmFsaWRhdGVUb2tlbnMoc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zOiBWYWxpZGF0aW5nIGNvZGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzQ29kZShzdGF0ZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5hY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogVmFsaWRhdGluZyBpZF90b2tlbiBhbmQgYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogVmFsaWRhdGluZyBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbihzdGF0ZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zOiBObyBjb2RlIHRvIHByb2Nlc3Mgb3IgaWRfdG9rZW4gdG8gdmFsaWRhdGVcIik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Byb2Nlc3NDb2RlKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBjbGllbnRfaWQ6IHN0YXRlLmNsaWVudF9pZCxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogc3RhdGUuY2xpZW50X3NlY3JldCxcclxuICAgICAgICAgICAgY29kZSA6IHJlc3BvbnNlLmNvZGUsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogc3RhdGUucmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICBjb2RlX3ZlcmlmaWVyOiBzdGF0ZS5jb2RlX3ZlcmlmaWVyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMgJiYgdHlwZW9mKHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlcXVlc3QsIHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlKHJlcXVlc3QpLnRoZW4odG9rZW5SZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiB0b2tlblJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVtrZXldID0gdG9rZW5SZXNwb25zZVtrZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ29kZTogdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc2Z1bCwgcHJvY2Vzc2luZyBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzKHN0YXRlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NvZGU6IHRva2VuIHJlc3BvbnNlIHN1Y2Nlc3NmdWwsIHJldHVybmluZyByZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCkudGhlbihpc3N1ZXIgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGF1ZGllbmNlID0gc3RhdGUuY2xpZW50X2lkO1xyXG4gICAgICAgICAgICBsZXQgY2xvY2tTa2V3SW5TZWNvbmRzID0gdGhpcy5fc2V0dGluZ3MuY2xvY2tTa2V3O1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlczogVmFsaWRhaW5nIEpXVCBhdHRyaWJ1dGVzOyB1c2luZyBjbG9jayBza2V3IChpbiBzZWNvbmRzKSBvZjogXCIsIGNsb2NrU2tld0luU2Vjb25kcyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3RBdHRyaWJ1dGVzKHJlc3BvbnNlLmlkX3Rva2VuLCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXdJblNlY29uZHMpLnRoZW4ocGF5bG9hZCA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLm5vbmNlICYmIHN0YXRlLm5vbmNlICE9PSBwYXlsb2FkLm5vbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXM6IEludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcGF5bG9hZC5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlczogTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gcGF5bG9hZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlQWNjZXNzVG9rZW4ocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5ub25jZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBub25jZSBvbiBzdGF0ZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIG5vbmNlIG9uIHN0YXRlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXNwb25zZS5pZF90b2tlbik7XHJcbiAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIgfHwgIWp3dC5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IEZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiLCBqd3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5ub25jZSAhPT0gand0LnBheWxvYWQubm9uY2UpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGtpZCA9IGp3dC5oZWFkZXIua2lkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpLnRoZW4oaXNzdWVyID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogUmVjZWl2ZWQgaXNzdWVyXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5cygpLnRoZW4oa2V5cyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc2lnbmluZyBrZXlzIGZyb20gbWV0YWRhdGFcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IFJlY2VpdmVkIHNpZ25pbmcga2V5c1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBrZXk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWtpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleXMgPSB0aGlzLl9maWx0ZXJCeUFsZyhrZXlzLCBqd3QuaGVhZGVyLmFsZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGtpZCBmb3VuZCBpbiBpZF90b2tlbiBhbmQgbW9yZSB0aGFuIG9uZSBrZXkgZm91bmQgaW4gbWV0YWRhdGFcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2lkIGlzIG1hbmRhdG9yeSBvbmx5IHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGtleXMgaW4gdGhlIHJlZmVyZW5jZWQgSldLIFNldCBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWUgaHR0cDovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNTaWduaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5cy5maWx0ZXIoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleS5raWQgPT09IGtpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVswXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaWVuY2UgPSBzdGF0ZS5jbGllbnRfaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IFZhbGlkYWluZyBKV1Q7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIiwgY2xvY2tTa2V3SW5TZWNvbmRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3QocmVzcG9uc2UuaWRfdG9rZW4sIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogSldUIHZhbGlkYXRpb24gc3VjY2Vzc2Z1bFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqd3QucGF5bG9hZC5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzdWIgcHJlc2VudCBpbiBpZF90b2tlblwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gand0LnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZmlsdGVyQnlBbGcoa2V5cywgYWxnKXtcclxuICAgICAgICB2YXIga3R5ID0gbnVsbDtcclxuICAgICAgICBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJSU1wiKSkge1xyXG4gICAgICAgICAgICBrdHkgPSBcIlJTQVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIlBTXCIpKSB7XHJcbiAgICAgICAgICAgIGt0eSA9IFwiUFNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJFU1wiKSkge1xyXG4gICAgICAgICAgICBrdHkgPSBcIkVDXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyQnlBbGc6IGFsZyBub3Qgc3VwcG9ydGVkOiBcIiwgYWxnKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlckJ5QWxnOiBMb29raW5nIGZvciBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIiwga3R5KTtcclxuXHJcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXkua3R5ID09PSBrdHk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJCeUFsZzogTnVtYmVyIG9mIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHksIGtleXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICB9XHJcblxyXG4gICAgX3ZhbGlkYXRlQWNjZXNzVG9rZW4ocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLnByb2ZpbGUpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IE5vIHByb2ZpbGUgbG9hZGVkIGZyb20gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBwcm9maWxlIGxvYWRlZCBmcm9tIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBObyBhdF9oYXNoIGluIGlkX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gYXRfaGFzaCBpbiBpZF90b2tlblwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBObyBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXNwb25zZS5pZF90b2tlbik7XHJcbiAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IEZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiLCBqd3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBoYXNoQWxnID0gand0LmhlYWRlci5hbGc7XHJcbiAgICAgICAgaWYgKCFoYXNoQWxnIHx8IGhhc2hBbGcubGVuZ3RoICE9PSA1KSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBVbnN1cHBvcnRlZCBhbGc6XCIsIGhhc2hBbGcpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOiBcIiArIGhhc2hBbGcpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBoYXNoQml0cyA9IGhhc2hBbGcuc3Vic3RyKDIsIDMpO1xyXG4gICAgICAgIGlmICghaGFzaEJpdHMpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IFVuc3VwcG9ydGVkIGFsZzpcIiwgaGFzaEFsZywgaGFzaEJpdHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOiBcIiArIGhhc2hBbGcpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhc2hCaXRzID0gcGFyc2VJbnQoaGFzaEJpdHMpO1xyXG4gICAgICAgIGlmIChoYXNoQml0cyAhPT0gMjU2ICYmIGhhc2hCaXRzICE9PSAzODQgJiYgaGFzaEJpdHMgIT09IDUxMikge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogVW5zdXBwb3J0ZWQgYWxnOlwiLCBoYXNoQWxnLCBoYXNoQml0cyk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6IFwiICsgaGFzaEFsZykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNoYSA9IFwic2hhXCIgKyBoYXNoQml0cztcclxuICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2pvc2VVdGlsLmhhc2hTdHJpbmcocmVzcG9uc2UuYWNjZXNzX3Rva2VuLCBzaGEpO1xyXG4gICAgICAgIGlmICghaGFzaCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogYWNjZXNzX3Rva2VuIGhhc2ggZmFpbGVkOlwiLCBzaGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHZhbGlkYXRlIGF0X2hhc2hcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxlZnQgPSBoYXNoLnN1YnN0cigwLCBoYXNoLmxlbmd0aCAvIDIpO1xyXG4gICAgICAgIHZhciBsZWZ0X2I2NHUgPSB0aGlzLl9qb3NlVXRpbC5oZXhUb0Jhc2U2NFVybChsZWZ0KTtcclxuICAgICAgICBpZiAobGVmdF9iNjR1ICE9PSByZXNwb25zZS5wcm9maWxlLmF0X2hhc2gpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IEZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIsIGxlZnRfYjY0dSwgcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBzdWNjZXNzXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IENoZWNrU2Vzc2lvbklGcmFtZSB9IGZyb20gJy4vQ2hlY2tTZXNzaW9uSUZyYW1lLmpzJztcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlc3Npb25Nb25pdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih1c2VyTWFuYWdlciwgQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciA9IENoZWNrU2Vzc2lvbklGcmFtZSwgdGltZXIgPSBHbG9iYWwudGltZXIpIHtcclxuICAgICAgICBpZiAoIXVzZXJNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yLmN0b3I6IE5vIHVzZXIgbWFuYWdlciBwYXNzZWQgdG8gU2Vzc2lvbk1vbml0b3JcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJNYW5hZ2VyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcclxuICAgICAgICB0aGlzLl9DaGVja1Nlc3Npb25JRnJhbWVDdG9yID0gQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvcjtcclxuICAgICAgICB0aGlzLl90aW1lciA9IHRpbWVyO1xyXG5cclxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkVXNlckxvYWRlZCh0aGlzLl9zdGFydC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkVXNlclVubG9hZGVkKHRoaXMuX3N0b3AuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmdldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAvLyBkb2luZyB0aGlzIG1hbnVhbGx5IGhlcmUgc2luY2UgY2FsbGluZyBnZXRVc2VyIFxyXG4gICAgICAgICAgICAvLyBkb2Vzbid0IHRyaWdnZXIgbG9hZCBldmVudC5cclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0KHVzZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3NldHRpbmdzLm1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXMoKS50aGVuKHNlc3Npb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0bXBVc2VyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlIDogc2Vzc2lvbi5zZXNzaW9uX3N0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zdWIgJiYgc2Vzc2lvbi5zaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wVXNlci5wcm9maWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViOiBzZXNzaW9uLnN1YixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZDogc2Vzc2lvbi5zaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQodG1wVXNlcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yIGN0b3I6IGVycm9yIGZyb20gcXVlcnlTZXNzaW9uU3RhdHVzOlwiLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBhIGN0b3JcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2Vzc2lvbk1vbml0b3IgY3RvcjogZXJyb3IgZnJvbSBnZXRVc2VyOlwiLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9zZXR0aW5ncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1hbmFnZXIuc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICBnZXQgX21ldGFkYXRhU2VydmljZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1hbmFnZXIubWV0YWRhdGFTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9jbGllbnRfaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcclxuICAgIH1cclxuICAgIGdldCBfY2hlY2tTZXNzaW9uSW50ZXJ2YWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmNoZWNrU2Vzc2lvbkludGVydmFsO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9zdG9wQ2hlY2tTZXNzaW9uT25FcnJvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Muc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgX3N0YXJ0KHVzZXIpIHtcclxuICAgICAgICBsZXQgc2Vzc2lvbl9zdGF0ZSA9IHVzZXIuc2Vzc2lvbl9zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHNlc3Npb25fc3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViID0gdXNlci5wcm9maWxlLnN1YjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpZCA9IHVzZXIucHJvZmlsZS5zaWQ7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb25fc3RhdGUsIFwiLCBzdWI6XCIsIHRoaXMuX3N1Yik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb25fc3RhdGUsIFwiLCBhbm9ueW1vdXMgdXNlclwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRDaGVja1Nlc3Npb25JZnJhbWUoKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IEluaXRpYWxpemluZyBjaGVjayBzZXNzaW9uIGlmcmFtZVwiKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudF9pZCA9IHRoaXMuX2NsaWVudF9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gdGhpcy5fY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdG9wT25FcnJvciA9IHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lID0gbmV3IHRoaXMuX0NoZWNrU2Vzc2lvbklGcmFtZUN0b3IodGhpcy5fY2FsbGJhY2suYmluZCh0aGlzKSwgY2xpZW50X2lkLCB1cmwsIGludGVydmFsLCBzdG9wT25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUuc3RhcnQoc2Vzc2lvbl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IE5vIGNoZWNrIHNlc3Npb24gaWZyYW1lIGZvdW5kIGluIHRoZSBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBub24tcHJvbWlzZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogRXJyb3IgZnJvbSBnZXRDaGVja1Nlc3Npb25JZnJhbWU6XCIsIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0KHNlc3Npb25fc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9zdG9wKCkge1xyXG4gICAgICAgIHRoaXMuX3N1YiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9zaWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX3N0b3BcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubW9uaXRvckFub255bW91c1Nlc3Npb24pIHtcclxuICAgICAgICAgICAgLy8gdXNpbmcgYSB0aW1lciB0byBkZWxheSByZS1pbml0aWFsaXphdGlvbiB0byBhdm9pZCByYWNlIGNvbmRpdGlvbnMgZHVyaW5nIHNpZ25vdXRcclxuICAgICAgICAgICAgbGV0IHRpbWVySGFuZGxlID0gdGhpcy5fdGltZXIuc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyLmNsZWFySW50ZXJ2YWwodGltZXJIYW5kbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRtcFVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25fc3RhdGUgOiBzZXNzaW9uLnNlc3Npb25fc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnN1YiAmJiBzZXNzaW9uLnNpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBVc2VyLnByb2ZpbGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWI6IHNlc3Npb24uc3ViLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkOiBzZXNzaW9uLnNpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCh0bXBVc2VyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yOiBlcnJvciBmcm9tIHF1ZXJ5U2Vzc2lvblN0YXR1czpcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XHJcbiAgICAgICAgICAgIHZhciByYWlzZUV2ZW50ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zdWIgPT09IHRoaXMuX3N1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhaXNlRXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUuc3RhcnQoc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlc3Npb24uc2lkID09PSB0aGlzLl9zaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTYW1lIHN1YiBzdGlsbCBsb2dnZWQgaW4gYXQgT1AsIHJlc3RhcnRpbmcgY2hlY2sgc2Vzc2lvbiBpZnJhbWU7IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb24uc2Vzc2lvbl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNhbWUgc3ViIHN0aWxsIGxvZ2dlZCBpbiBhdCBPUCwgc2Vzc2lvbiBzdGF0ZSBoYXMgY2hhbmdlZCwgcmVzdGFydGluZyBjaGVjayBzZXNzaW9uIGlmcmFtZTsgc2Vzc2lvbl9zdGF0ZTpcIiwgc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogRGlmZmVyZW50IHN1YmplY3Qgc2lnbmVkIGludG8gT1A6XCIsIHNlc3Npb24uc3ViKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogU3ViamVjdCBubyBsb25nZXIgc2lnbmVkIGludG8gT1BcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyYWlzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s7IHJhaXNpbmcgc2lnbmVkIG91dCBldmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNpZ25lZE91dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s7IHJhaXNpbmcgc2lnbmVkIGluIGV2ZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkSW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdWIpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogRXJyb3IgY2FsbGluZyBxdWVyeUN1cnJlbnRTaWduaW5TZXNzaW9uOyByYWlzaW5nIHNpZ25lZCBvdXQgZXZlbnRcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLl9yYWlzZVVzZXJTaWduZWRPdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XHJcbmltcG9ydCB7IFNpZ25pblN0YXRlIH0gZnJvbSAnLi9TaWduaW5TdGF0ZS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVxdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgLy8gbWFuZGF0b3J5XHJcbiAgICAgICAgdXJsLCBjbGllbnRfaWQsIHJlZGlyZWN0X3VyaSwgcmVzcG9uc2VfdHlwZSwgc2NvcGUsIGF1dGhvcml0eSxcclxuICAgICAgICAvLyBvcHRpb25hbFxyXG4gICAgICAgIGRhdGEsIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcywgcmVzb3VyY2UsIHJlc3BvbnNlX21vZGUsXHJcbiAgICAgICAgcmVxdWVzdCwgcmVxdWVzdF91cmksIGV4dHJhUXVlcnlQYXJhbXMsIHJlcXVlc3RfdHlwZSwgY2xpZW50X3NlY3JldCwgZXh0cmFUb2tlblBhcmFtcywgc2tpcFVzZXJJbmZvXHJcbiAgICB9KSB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyB1cmwgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpZW50X2lkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlZGlyZWN0X3VyaSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHJlZGlyZWN0X3VyaSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlZGlyZWN0X3VyaVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gcmVzcG9uc2VfdHlwZSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlc3BvbnNlX3R5cGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2NvcGUpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyBzY29wZSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNjb3BlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWF1dGhvcml0eSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIGF1dGhvcml0eSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhvcml0eVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvaWRjID0gU2lnbmluUmVxdWVzdC5pc09pZGMocmVzcG9uc2VfdHlwZSk7XHJcbiAgICAgICAgbGV0IGNvZGUgPSBTaWduaW5SZXF1ZXN0LmlzQ29kZShyZXNwb25zZV90eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZV9tb2RlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlX21vZGUgPSBTaWduaW5SZXF1ZXN0LmlzQ29kZShyZXNwb25zZV90eXBlKSA/IFwicXVlcnlcIiA6IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFNpZ25pblN0YXRlKHsgbm9uY2U6IG9pZGMsIFxyXG4gICAgICAgICAgICBkYXRhLCBjbGllbnRfaWQsIGF1dGhvcml0eSwgcmVkaXJlY3RfdXJpLCBcclxuICAgICAgICAgICAgY29kZV92ZXJpZmllcjogY29kZSwgXHJcbiAgICAgICAgICAgIHJlcXVlc3RfdHlwZSwgcmVzcG9uc2VfbW9kZSxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldCwgc2NvcGUsIGV4dHJhVG9rZW5QYXJhbXMsIHNraXBVc2VySW5mbyB9KTtcclxuXHJcbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJjbGllbnRfaWRcIiwgY2xpZW50X2lkKTtcclxuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInJlZGlyZWN0X3VyaVwiLCByZWRpcmVjdF91cmkpO1xyXG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwicmVzcG9uc2VfdHlwZVwiLCByZXNwb25zZV90eXBlKTtcclxuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInNjb3BlXCIsIHNjb3BlKTtcclxuXHJcbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLmlkKTtcclxuICAgICAgICBpZiAob2lkYykge1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcIm5vbmNlXCIsIHRoaXMuc3RhdGUubm9uY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29kZSkge1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImNvZGVfY2hhbGxlbmdlXCIsIHRoaXMuc3RhdGUuY29kZV9jaGFsbGVuZ2UpO1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImNvZGVfY2hhbGxlbmdlX21ldGhvZFwiLCBcIlMyNTZcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3B0aW9uYWwgPSB7IHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcywgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCByZXNwb25zZV9tb2RlIH07XHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gb3B0aW9uYWwpe1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uYWxba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwga2V5LCBvcHRpb25hbFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gZXh0cmFRdWVyeVBhcmFtcyl7XHJcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgZXh0cmFRdWVyeVBhcmFtc1trZXldKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzT2lkYyhyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwiaWRfdG9rZW5cIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gISEocmVzdWx0WzBdKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNPQXV0aChyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwidG9rZW5cIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gISEocmVzdWx0WzBdKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGlzQ29kZShyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwiY29kZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAhIShyZXN1bHRbMF0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xyXG5cclxuY29uc3QgT2lkY1Njb3BlID0gXCJvcGVuaWRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5SZXNwb25zZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1cmwsIGRlbGltaXRlciA9IFwiI1wiKSB7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZXMgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBkZWxpbWl0ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yID0gdmFsdWVzLmVycm9yO1xyXG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSB2YWx1ZXMuZXJyb3JfZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5lcnJvcl91cmkgPSB2YWx1ZXMuZXJyb3JfdXJpO1xyXG5cclxuICAgICAgICB0aGlzLmNvZGUgPSB2YWx1ZXMuY29kZTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdmFsdWVzLnN0YXRlO1xyXG4gICAgICAgIHRoaXMuaWRfdG9rZW4gPSB2YWx1ZXMuaWRfdG9rZW47XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uX3N0YXRlID0gdmFsdWVzLnNlc3Npb25fc3RhdGU7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSB2YWx1ZXMuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgIHRoaXMudG9rZW5fdHlwZSA9IHZhbHVlcy50b2tlbl90eXBlO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB2YWx1ZXMuc2NvcGU7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlID0gdW5kZWZpbmVkOyAvLyB3aWxsIGJlIHNldCBmcm9tIFJlc3BvbnNlVmFsaWRhdG9yXHJcblxyXG4gICAgICAgIHRoaXMuZXhwaXJlc19pbiA9IHZhbHVlcy5leHBpcmVzX2luO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBleHBpcmVzX2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGlyZXNfYXQpIHtcclxuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHNldCBleHBpcmVzX2luKHZhbHVlKXtcclxuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgICBpZiAodHlwZW9mIGV4cGlyZXNfaW4gPT09ICdudW1iZXInICYmIGV4cGlyZXNfaW4gPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBub3cgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwaXJlc19hdCA9IG5vdyArIGV4cGlyZXNfaW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBleHBpcmVkKCkge1xyXG4gICAgICAgIGxldCBleHBpcmVzX2luID0gdGhpcy5leHBpcmVzX2luO1xyXG4gICAgICAgIGlmIChleHBpcmVzX2luICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4cGlyZXNfaW4gPD0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2NvcGVzKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zY29wZSB8fCBcIlwiKS5zcGxpdChcIiBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzT3BlbklkQ29ubmVjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZXMuaW5kZXhPZihPaWRjU2NvcGUpID49IDAgfHwgISF0aGlzLmlkX3Rva2VuO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1N0YXRlLmpzJztcclxuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcclxuaW1wb3J0IHJhbmRvbSBmcm9tICcuL3JhbmRvbS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7bm9uY2UsIGF1dGhvcml0eSwgY2xpZW50X2lkLCByZWRpcmVjdF91cmksIGNvZGVfdmVyaWZpZXIsIHJlc3BvbnNlX21vZGUsIGNsaWVudF9zZWNyZXQsIHNjb3BlLCBleHRyYVRva2VuUGFyYW1zLCBza2lwVXNlckluZm99ID0ge30pIHtcclxuICAgICAgICBzdXBlcihhcmd1bWVudHNbMF0pO1xyXG5cclxuICAgICAgICBpZiAobm9uY2UgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9uY2UgPSByYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobm9uY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9uY2UgPSBub25jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2RlX3ZlcmlmaWVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIHJhbmRvbSgpIHByb2R1Y2VzIDMyIGxlbmd0aFxyXG4gICAgICAgICAgICB0aGlzLl9jb2RlX3ZlcmlmaWVyID0gcmFuZG9tKCkgKyByYW5kb20oKSArIHJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2RlX3ZlcmlmaWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvZGVfdmVyaWZpZXIgPSBjb2RlX3ZlcmlmaWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5jb2RlX3ZlcmlmaWVyKSB7XHJcbiAgICAgICAgICAgIGxldCBoYXNoID0gSm9zZVV0aWwuaGFzaFN0cmluZyh0aGlzLmNvZGVfdmVyaWZpZXIsIFwiU0hBMjU2XCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2RlX2NoYWxsZW5nZSA9IEpvc2VVdGlsLmhleFRvQmFzZTY0VXJsKGhhc2gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX2F1dGhvcml0eSA9IGF1dGhvcml0eTtcclxuICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSBjbGllbnRfaWQ7XHJcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGU7XHJcbiAgICAgICAgdGhpcy5fY2xpZW50X3NlY3JldCA9IGNsaWVudF9zZWNyZXQ7XHJcbiAgICAgICAgdGhpcy5fc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0gZXh0cmFUb2tlblBhcmFtcztcclxuICAgICAgICB0aGlzLl9za2lwVXNlckluZm8gPSBza2lwVXNlckluZm87XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5vbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ub25jZTtcclxuICAgIH1cclxuICAgIGdldCBhdXRob3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhvcml0eTtcclxuICAgIH1cclxuICAgIGdldCBjbGllbnRfaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9pZDtcclxuICAgIH1cclxuICAgIGdldCByZWRpcmVjdF91cmkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0X3VyaTtcclxuICAgIH1cclxuICAgIGdldCBjb2RlX3ZlcmlmaWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlX3ZlcmlmaWVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvZGVfY2hhbGxlbmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlX2NoYWxsZW5nZTtcclxuICAgIH1cclxuICAgIGdldCByZXNwb25zZV9tb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZV9tb2RlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNsaWVudF9zZWNyZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9zZWNyZXQ7XHJcbiAgICB9XHJcbiAgICBnZXQgc2NvcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3BlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGV4dHJhVG9rZW5QYXJhbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXM7XHJcbiAgICB9XHJcbiAgICBnZXQgc2tpcFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9za2lwVXNlckluZm87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJTaWduaW5TdGF0ZS50b1N0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcclxuICAgICAgICAgICAgY3JlYXRlZDogdGhpcy5jcmVhdGVkLFxyXG4gICAgICAgICAgICByZXF1ZXN0X3R5cGU6IHRoaXMucmVxdWVzdF90eXBlLFxyXG4gICAgICAgICAgICBub25jZTogdGhpcy5ub25jZSxcclxuICAgICAgICAgICAgY29kZV92ZXJpZmllcjogdGhpcy5jb2RlX3ZlcmlmaWVyLFxyXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICBhdXRob3JpdHk6IHRoaXMuYXV0aG9yaXR5LFxyXG4gICAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxyXG4gICAgICAgICAgICByZXNwb25zZV9tb2RlOiB0aGlzLnJlc3BvbnNlX21vZGUsXHJcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY2xpZW50X3NlY3JldCxcclxuICAgICAgICAgICAgc2NvcGU6IHRoaXMuc2NvcGUsXHJcbiAgICAgICAgICAgIGV4dHJhVG9rZW5QYXJhbXMgOiB0aGlzLmV4dHJhVG9rZW5QYXJhbXMsXHJcbiAgICAgICAgICAgIHNraXBVc2VySW5mbzogdGhpcy5za2lwVXNlckluZm9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmFnZVN0cmluZykge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlNpZ25pblN0YXRlLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShzdG9yYWdlU3RyaW5nKTtcclxuICAgICAgICByZXR1cm4gbmV3IFNpZ25pblN0YXRlKGRhdGEpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9TdGF0ZS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dFJlcXVlc3Qge1xyXG4gICAgY29uc3RydWN0b3Ioe3VybCwgaWRfdG9rZW5faGludCwgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLCBkYXRhLCBleHRyYVF1ZXJ5UGFyYW1zLCByZXF1ZXN0X3R5cGV9KSB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbm91dFJlcXVlc3QuY3RvcjogTm8gdXJsIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkX3Rva2VuX2hpbnQpIHtcclxuICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJpZF90b2tlbl9oaW50XCIsIGlkX3Rva2VuX2hpbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSkge1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaVwiLCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU3RhdGUoeyBkYXRhLCByZXF1ZXN0X3R5cGUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gZXh0cmFRdWVyeVBhcmFtcyl7XHJcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgZXh0cmFRdWVyeVBhcmFtc1trZXldKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dFJlc3BvbnNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHVybCkge1xyXG5cclxuICAgICAgICB2YXIgdmFsdWVzID0gVXJsVXRpbGl0eS5wYXJzZVVybEZyYWdtZW50KHVybCwgXCI/XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yID0gdmFsdWVzLmVycm9yO1xyXG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSB2YWx1ZXMuZXJyb3JfZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5lcnJvcl91cmkgPSB2YWx1ZXMuZXJyb3JfdXJpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gdmFsdWVzLnN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWxlbnRSZW5ld1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVzZXJNYW5hZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrID0gdGhpcy5fdG9rZW5FeHBpcmluZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkQWNjZXNzVG9rZW5FeHBpcmluZyh0aGlzLl9jYWxsYmFjayk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgdHJpZ2dlciBsb2FkaW5nIG9mIHRoZSB1c2VyIHNvIHRoZSBleHBpcmluZyBldmVudHMgY2FuIGJlIGluaXRpYWxpemVkXHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmdldFVzZXIoKS50aGVuKHVzZXI9PntcclxuICAgICAgICAgICAgICAgIC8vIGRlbGliZXJhdGUgbm9wXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lsZW50UmVuZXdTZXJ2aWNlLnN0YXJ0OiBFcnJvciBmcm9tIGdldFVzZXI6XCIsIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5yZW1vdmVBY2Nlc3NUb2tlbkV4cGlyaW5nKHRoaXMuX2NhbGxiYWNrKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdG9rZW5FeHBpcmluZygpIHtcclxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5zaWduaW5TaWxlbnQoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTaWxlbnRSZW5ld1NlcnZpY2UuX3Rva2VuRXhwaXJpbmc6IFNpbGVudCB0b2tlbiByZW5ld2FsIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lsZW50UmVuZXdTZXJ2aWNlLl90b2tlbkV4cGlyaW5nOiBFcnJvciBmcm9tIHNpZ25pblNpbGVudDpcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHJhbmRvbSBmcm9tICcuL3JhbmRvbS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3Ioe2lkLCBkYXRhLCBjcmVhdGVkLCByZXF1ZXN0X3R5cGV9ID0ge30pIHtcclxuICAgICAgICB0aGlzLl9pZCA9IGlkIHx8IHJhbmRvbSgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNyZWF0ZWQgPT09ICdudW1iZXInICYmIGNyZWF0ZWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZWQgPSBjcmVhdGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdF90eXBlID0gIHJlcXVlc3RfdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgICB9XHJcbiAgICBnZXQgY3JlYXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlZDtcclxuICAgIH1cclxuICAgIGdldCByZXF1ZXN0X3R5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RfdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0b3JhZ2VTdHJpbmcoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUudG9TdG9yYWdlU3RyaW5nXCIpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgICAgIGNyZWF0ZWQ6IHRoaXMuY3JlYXRlZCxcclxuICAgICAgICAgICAgcmVxdWVzdF90eXBlOiB0aGlzLnJlcXVlc3RfdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0ZShKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xlYXJTdGFsZVN0YXRlKHN0b3JhZ2UsIGFnZSkge1xyXG5cclxuICAgICAgICB2YXIgY3V0b2ZmID0gRGF0ZS5ub3coKSAvIDEwMDAgLSBhZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLmdldEFsbEtleXMoKS50aGVuKGtleXMgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IGdvdCBrZXlzXCIsIGtleXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgcCA9IHN0b3JhZ2UuZ2V0KGtleSkudGhlbihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZyhpdGVtKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogZ290IGl0ZW0gZnJvbSBrZXk6IFwiLCBrZXksIHN0YXRlLmNyZWF0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jcmVhdGVkIDw9IGN1dG9mZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogRXJyb3IgcGFyc2luZyBzdGF0ZSBmb3Iga2V5XCIsIGtleSwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogbm8gaXRlbSBpbiBzdG9yYWdlIGZvciBrZXk6IFwiLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IHJlbW92ZWQgaXRlbSBmb3Iga2V5OiBcIiwga2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2UucmVtb3ZlKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiB3YWl0aW5nIG9uIHByb21pc2UgY291bnQ6XCIsIHByb21pc2VzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9FdmVudC5qcyc7XHJcblxyXG5jb25zdCBUaW1lckR1cmF0aW9uID0gNTsgLy8gc2Vjb25kc1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVyIGV4dGVuZHMgRXZlbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRpbWVyID0gR2xvYmFsLnRpbWVyLCBub3dGdW5jID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICAgICAgdGhpcy5fdGltZXIgPSB0aW1lcjtcclxuXHJcbiAgICAgICAgaWYgKG5vd0Z1bmMpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm93RnVuYyA9IG5vd0Z1bmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ub3dGdW5jID0gKCkgPT4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBub3coKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX25vd0Z1bmMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChkdXJhdGlvbikge1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHVyYXRpb24gPSBwYXJzZUludChkdXJhdGlvbik7XHJcblxyXG4gICAgICAgIHZhciBleHBpcmF0aW9uID0gdGhpcy5ub3cgKyBkdXJhdGlvbjtcclxuICAgICAgICBpZiAodGhpcy5leHBpcmF0aW9uID09PSBleHBpcmF0aW9uICYmIHRoaXMuX3RpbWVySGFuZGxlKSB7XHJcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gcmVpbml0aWFsaXplIHRvIHNhbWUgZXhwaXJhdGlvbiwgc28gYmFpbCBvdXRcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVGltZXIuaW5pdCB0aW1lciBcIiArIHRoaXMuX25hbWUgKyBcIiBza2lwcGluZyBpbml0aWFsaXphdGlvbiBzaW5jZSBhbHJlYWR5IGluaXRpYWxpemVkIGZvciBleHBpcmF0aW9uOlwiLCB0aGlzLmV4cGlyYXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbmNlbCgpO1xyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJUaW1lci5pbml0IHRpbWVyIFwiICsgdGhpcy5fbmFtZSArIFwiIGZvciBkdXJhdGlvbjpcIiwgZHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMuX2V4cGlyYXRpb24gPSBleHBpcmF0aW9uO1xyXG5cclxuICAgICAgICAvLyB3ZSdyZSB1c2luZyBhIGZhaXJseSBzaG9ydCB0aW1lciBhbmQgdGhlbiBjaGVja2luZyB0aGUgZXhwaXJhdGlvbiBpbiB0aGVcclxuICAgICAgICAvLyBjYWxsYmFjayB0byBoYW5kbGUgc2NlbmFyaW9zIHdoZXJlIHRoZSBicm93c2VyIGRldmljZSBzbGVlcHMsIGFuZCB0aGVuXHJcbiAgICAgICAgLy8gdGhlIHRpbWVycyBlbmQgdXAgZ2V0dGluZyBkZWxheWVkLlxyXG4gICAgICAgIHZhciB0aW1lckR1cmF0aW9uID0gVGltZXJEdXJhdGlvbjtcclxuICAgICAgICBpZiAoZHVyYXRpb24gPCB0aW1lckR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRpbWVyRHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdGltZXJIYW5kbGUgPSB0aGlzLl90aW1lci5zZXRJbnRlcnZhbCh0aGlzLl9jYWxsYmFjay5iaW5kKHRoaXMpLCB0aW1lckR1cmF0aW9uICogMTAwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBleHBpcmF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBpcmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGltZXJIYW5kbGUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVGltZXIuY2FuY2VsOiBcIiwgdGhpcy5fbmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyLmNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXJIYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lckhhbmRsZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsYmFjaygpIHtcclxuICAgICAgICB2YXIgZGlmZiA9IHRoaXMuX2V4cGlyYXRpb24gLSB0aGlzLm5vdztcclxuICAgICAgICBMb2cuZGVidWcoXCJUaW1lci5jYWxsYmFjazsgXCIgKyB0aGlzLl9uYW1lICsgXCIgdGltZXIgZXhwaXJlcyBpbjpcIiwgZGlmZik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9leHBpcmF0aW9uIDw9IHRoaXMubm93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHN1cGVyLnJhaXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IEpzb25TZXJ2aWNlIH0gZnJvbSAnLi9Kc29uU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBKc29uU2VydmljZUN0b3IgPSBKc29uU2VydmljZSwgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSkge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuY3RvcjogTm8gc2V0dGluZ3MgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5fanNvblNlcnZpY2UgPSBuZXcgSnNvblNlcnZpY2VDdG9yKCk7XHJcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4Y2hhbmdlQ29kZShhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MuZ3JhbnRfdHlwZSA9IGFyZ3MuZ3JhbnRfdHlwZSB8fCBcImF1dGhvcml6YXRpb25fY29kZVwiO1xyXG4gICAgICAgIGFyZ3MuY2xpZW50X2lkID0gYXJncy5jbGllbnRfaWQgfHwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xyXG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gYXJncy5yZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xyXG5cclxuICAgICAgICBpZiAoIWFyZ3MuY29kZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IE5vIGNvZGUgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSBjb2RlIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcmdzLnJlZGlyZWN0X3VyaSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IE5vIHJlZGlyZWN0X3VyaSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHJlZGlyZWN0X3VyaSBpcyByZXF1aXJlZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJncy5jb2RlX3ZlcmlmaWVyKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY29kZV92ZXJpZmllciBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIGNvZGVfdmVyaWZpZXIgaXMgcmVxdWlyZWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFyZ3MuY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY2xpZW50X2lkIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VG9rZW5FbmRwb2ludChmYWxzZSkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IFJlY2VpdmVkIHRva2VuIGVuZHBvaW50XCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25TZXJ2aWNlLnBvc3RGb3JtKHVybCwgYXJncykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IHJlc3BvbnNlIHJlY2VpdmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleGNoYW5nZVJlZnJlc2hUb2tlbihhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MuZ3JhbnRfdHlwZSA9IGFyZ3MuZ3JhbnRfdHlwZSB8fCBcInJlZnJlc2hfdG9rZW5cIjtcclxuICAgICAgICBhcmdzLmNsaWVudF9pZCA9IGFyZ3MuY2xpZW50X2lkIHx8IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcclxuICAgICAgICBhcmdzLmNsaWVudF9zZWNyZXQgPSBhcmdzLmNsaWVudF9zZWNyZXQgfHwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcclxuXHJcbiAgICAgICAgaWYgKCFhcmdzLnJlZnJlc2hfdG9rZW4pIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VSZWZyZXNoVG9rZW46IE5vIHJlZnJlc2hfdG9rZW4gcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSByZWZyZXNoX3Rva2VuIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcmdzLmNsaWVudF9pZCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY2xpZW50X2lkIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VG9rZW5FbmRwb2ludChmYWxzZSkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogUmVjZWl2ZWQgdG9rZW4gZW5kcG9pbnRcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UucG9zdEZvcm0odXJsLCBhcmdzKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuOiByZXNwb25zZSByZWNlaXZlZFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL01ldGFkYXRhU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuXHJcbmNvbnN0IEFjY2Vzc1Rva2VuVHlwZUhpbnQgPSBcImFjY2Vzc190b2tlblwiO1xyXG5jb25zdCBSZWZyZXNoVG9rZW5UeXBlSGludCA9IFwicmVmcmVzaF90b2tlblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuUmV2b2NhdGlvbkNsaWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgWE1MSHR0cFJlcXVlc3RDdG9yID0gR2xvYmFsLlhNTEh0dHBSZXF1ZXN0LCBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQuY3RvcjogTm8gc2V0dGluZ3MgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNldHRpbmdzIHByb3ZpZGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5fWE1MSHR0cFJlcXVlc3RDdG9yID0gWE1MSHR0cFJlcXVlc3RDdG9yO1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXZva2UodG9rZW4sIHJlcXVpcmVkLCB0eXBlID0gXCJhY2Nlc3NfdG9rZW5cIikge1xyXG4gICAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogTm8gdG9rZW4gcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHRva2VuIHByb3ZpZGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlICE9PSBBY2Nlc3NUb2tlblR5cGVIaW50ICYmIHR5cGUgIT0gUmVmcmVzaFRva2VuVHlwZUhpbnQpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogSW52YWxpZCB0b2tlbiB0eXBlXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRva2VuIHR5cGUuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRSZXZvY2F0aW9uRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBSZXZvY2F0aW9uIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmV2b2NhdGlvbiBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIG5vdCByZXF1aXJlZCwgc28gZG9uJ3QgZXJyb3IgYW5kIGp1c3QgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IFJldm9raW5nIFwiICsgdHlwZSk7XHJcbiAgICAgICAgICAgIHZhciBjbGllbnRfaWQgPSB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XHJcbiAgICAgICAgICAgIHZhciBjbGllbnRfc2VjcmV0ID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZSh1cmwsIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgdG9rZW4sIHR5cGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZXZva2UodXJsLCBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHRva2VuLCB0eXBlKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IHRoaXMuX1hNTEh0dHBSZXF1ZXN0Q3RvcigpO1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsKTtcclxuXHJcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgeGhyLnN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcih4aHIuc3RhdHVzVGV4dCArIFwiIChcIiArIHhoci5zdGF0dXMgKyBcIilcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHsgXHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBOZXR3b3JrIEVycm9yLlwiKVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTmV0d29yayBFcnJvclwiKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBib2R5ID0gXCJjbGllbnRfaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50X2lkKTtcclxuICAgICAgICAgICAgaWYgKGNsaWVudF9zZWNyZXQpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkgKz0gXCImY2xpZW50X3NlY3JldD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChjbGllbnRfc2VjcmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2R5ICs9IFwiJnRva2VuX3R5cGVfaGludD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0eXBlKTtcclxuICAgICAgICAgICAgYm9keSArPSBcIiZ0b2tlbj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0b2tlbik7XHJcblxyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoYm9keSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXJsVXRpbGl0eSB7XHJcbiAgICBzdGF0aWMgYWRkUXVlcnlQYXJhbSh1cmwsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKCc/JykgPCAwKSB7XHJcbiAgICAgICAgICAgIHVybCArPSBcIj9cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1cmxbdXJsLmxlbmd0aCAtIDFdICE9PSBcIj9cIikge1xyXG4gICAgICAgICAgICB1cmwgKz0gXCImXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xyXG4gICAgICAgIHVybCArPSBcIj1cIjtcclxuICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGFyc2VVcmxGcmFnbWVudCh2YWx1ZSwgZGVsaW1pdGVyID0gXCIjXCIsIGdsb2JhbCA9IEdsb2JhbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgdmFsdWUgPSBnbG9iYWwubG9jYXRpb24uaHJlZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpZHggPSB2YWx1ZS5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xyXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cihpZHggKyAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkZWxpbWl0ZXIgPT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHdlJ3JlIGRvaW5nIHF1ZXJ5LCB0aGVuIHN0cmlwIG9mZiBoYXNoIGZyYWdtZW50IGJlZm9yZSB3ZSBwYXJzZVxyXG4gICAgICAgICAgICBpZHggPSB2YWx1ZS5pbmRleE9mKCcjJyk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgaWR4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IHt9LFxyXG4gICAgICAgICAgICByZWdleCA9IC8oW14mPV0rKT0oW14mXSopL2csXHJcbiAgICAgICAgICAgIG07XHJcblxyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICB3aGlsZSAobSA9IHJlZ2V4LmV4ZWModmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tkZWNvZGVVUklDb21wb25lbnQobVsxXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KG1bMl0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG4gICAgICAgICAgICBpZiAoY291bnRlcisrID4gNTApIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVybFV0aWxpdHkucGFyc2VVcmxGcmFnbWVudDogcmVzcG9uc2UgZXhjZWVkZWQgZXhwZWN0ZWQgbnVtYmVyIG9mIHBhcmFtZXRlcnNcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJSZXNwb25zZSBleGNlZWRlZCBleHBlY3RlZCBudW1iZXIgb2YgcGFyYW1ldGVyc1wiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHtpZF90b2tlbiwgc2Vzc2lvbl9zdGF0ZSwgYWNjZXNzX3Rva2VuLCByZWZyZXNoX3Rva2VuLCB0b2tlbl90eXBlLCBzY29wZSwgcHJvZmlsZSwgZXhwaXJlc19hdCwgc3RhdGV9KSB7XHJcbiAgICAgICAgdGhpcy5pZF90b2tlbiA9IGlkX3Rva2VuO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbl9zdGF0ZSA9IHNlc3Npb25fc3RhdGU7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Rva2VuID0gcmVmcmVzaF90b2tlbjtcclxuICAgICAgICB0aGlzLnRva2VuX3R5cGUgPSB0b2tlbl90eXBlO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLnByb2ZpbGUgPSBwcm9maWxlO1xyXG4gICAgICAgIHRoaXMuZXhwaXJlc19hdCA9IGV4cGlyZXNfYXQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBleHBpcmVzX2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGlyZXNfYXQpIHtcclxuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHNldCBleHBpcmVzX2luKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGV4cGlyZXNfaW4gPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBleHBpcmVzX2luID09PSAnbnVtYmVyJyAmJiBleHBpcmVzX2luID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLmV4cGlyZXNfYXQgPSBub3cgKyBleHBpcmVzX2luO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXhwaXJlZCgpIHtcclxuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHRoaXMuZXhwaXJlc19pbjtcclxuICAgICAgICBpZiAoZXhwaXJlc19pbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHBpcmVzX2luIDw9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjb3BlcygpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuc2NvcGUgfHwgXCJcIikuc3BsaXQoXCIgXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyLnRvU3RvcmFnZVN0cmluZ1wiKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBpZF90b2tlbjogdGhpcy5pZF90b2tlbixcclxuICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogdGhpcy5zZXNzaW9uX3N0YXRlLFxyXG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW46IHRoaXMuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICByZWZyZXNoX3Rva2VuOiB0aGlzLnJlZnJlc2hfdG9rZW4sXHJcbiAgICAgICAgICAgIHRva2VuX3R5cGU6IHRoaXMudG9rZW5fdHlwZSxcclxuICAgICAgICAgICAgc2NvcGU6IHRoaXMuc2NvcGUsXHJcbiAgICAgICAgICAgIHByb2ZpbGU6IHRoaXMucHJvZmlsZSxcclxuICAgICAgICAgICAgZXhwaXJlc19hdDogdGhpcy5leHBpcmVzX2F0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyb21TdG9yYWdlU3RyaW5nKHN0b3JhZ2VTdHJpbmcpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVXNlcihKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBKc29uU2VydmljZSB9IGZyb20gJy4vSnNvblNlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL01ldGFkYXRhU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VySW5mb1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc2V0dGluZ3MsIFxyXG4gICAgICAgIEpzb25TZXJ2aWNlQ3RvciA9IEpzb25TZXJ2aWNlLCBcclxuICAgICAgICBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlLCBcclxuICAgICAgICBqb3NlVXRpbCA9IEpvc2VVdGlsXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5jdG9yOiBObyBzZXR0aW5ncyBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLl9qc29uU2VydmljZSA9IG5ldyBKc29uU2VydmljZUN0b3IodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMuX2dldENsYWltc0Zyb21Kd3QuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xhaW1zKHRva2VuKSB7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zOiBObyB0b2tlbiBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHRva2VuIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VXNlckluZm9FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLmdldENsYWltczogcmVjZWl2ZWQgdXNlcmluZm8gdXJsXCIsIHVybCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih1cmwsIHRva2VuKS50aGVuKGNsYWltcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zOiBjbGFpbXMgcmVjZWl2ZWRcIiwgY2xhaW1zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFpbXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRDbGFpbXNGcm9tSnd0KHJlcSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXEucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIgfHwgIWp3dC5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEZhaWxlZCB0byBwYXJzZSBKV1RcIiwgand0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIga2lkID0gand0LmhlYWRlci5raWQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXNzdWVyUHJvbWlzZTtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zZXR0aW5ncy51c2VySW5mb0p3dElzc3Vlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnT1AnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlzc3VlclByb21pc2UgPSB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBTlknOlxyXG4gICAgICAgICAgICAgICAgICAgIGlzc3VlclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoand0LnBheWxvYWQuaXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy51c2VySW5mb0p3dElzc3Vlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpc3N1ZXJQcm9taXNlLnRoZW4oaXNzdWVyID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogUmVjZWl2ZWQgaXNzdWVyOlwiICsgaXNzdWVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzKCkudGhlbihrZXlzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogUmVjZWl2ZWQgc2lnbmluZyBrZXlzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFraWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cyA9IHRoaXMuX2ZpbHRlckJ5QWxnKGtleXMsIGp3dC5oZWFkZXIuYWxnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBraWQgZm91bmQgaW4gaWRfdG9rZW4gYW5kIG1vcmUgdGhhbiBvbmUga2V5IGZvdW5kIGluIG1ldGFkYXRhXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpZCBpcyBtYW5kYXRvcnkgb25seSB3aGVuIHRoZXJlIGFyZSBtdWx0aXBsZSBrZXlzIGluIHRoZSByZWZlcmVuY2VkIEpXSyBTZXQgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlZSBodHRwOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1jb3JlLTFfMC5odG1sI1NpZ25pbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXMuZmlsdGVyKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5LmtpZCA9PT0ga2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVswXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdWRpZW5jZSA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IFZhbGlkYWluZyBKV1Q7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIiwgY2xvY2tTa2V3SW5TZWNvbmRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsLnZhbGlkYXRlSnd0KHJlcS5yZXNwb25zZVRleHQsIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzLCB1bmRlZmluZWQsIHRydWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEpXVCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBqd3QucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEVycm9yIHBhcnNpbmcgSldUIHJlc3BvbnNlXCIsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZmlsdGVyQnlBbGcoa2V5cywgYWxnKSB7XHJcbiAgICAgICAgdmFyIGt0eSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGFsZy5zdGFydHNXaXRoKFwiUlNcIikpIHtcclxuICAgICAgICAgICAga3R5ID0gXCJSU0FcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJQU1wiKSkge1xyXG4gICAgICAgICAgICBrdHkgPSBcIlBTXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFsZy5zdGFydHNXaXRoKFwiRVNcIikpIHtcclxuICAgICAgICAgICAga3R5ID0gXCJFQ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9maWx0ZXJCeUFsZzogYWxnIG5vdCBzdXBwb3J0ZWQ6IFwiLCBhbGcpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2ZpbHRlckJ5QWxnOiBMb29raW5nIGZvciBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIiwga3R5KTtcclxuXHJcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXkua3R5ID09PSBrdHk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZmlsdGVyQnlBbGc6IE51bWJlciBvZiBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIiwga3R5LCBrZXlzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudCB9IGZyb20gJy4vT2lkY0NsaWVudC5qcyc7XHJcbmltcG9ydCB7IFVzZXJNYW5hZ2VyU2V0dGluZ3MgfSBmcm9tICcuL1VzZXJNYW5hZ2VyU2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyLmpzJztcclxuaW1wb3J0IHsgVXNlck1hbmFnZXJFdmVudHMgfSBmcm9tICcuL1VzZXJNYW5hZ2VyRXZlbnRzLmpzJztcclxuaW1wb3J0IHsgU2lsZW50UmVuZXdTZXJ2aWNlIH0gZnJvbSAnLi9TaWxlbnRSZW5ld1NlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uTW9uaXRvciB9IGZyb20gJy4vU2Vzc2lvbk1vbml0b3IuanMnO1xyXG5pbXBvcnQgeyBUb2tlblJldm9jYXRpb25DbGllbnQgfSBmcm9tICcuL1Rva2VuUmV2b2NhdGlvbkNsaWVudC5qcyc7XHJcbmltcG9ydCB7IFRva2VuQ2xpZW50IH0gZnJvbSAnLi9Ub2tlbkNsaWVudC5qcyc7XHJcbmltcG9ydCB7IEpvc2VVdGlsIH0gZnJvbSAnLi9Kb3NlVXRpbC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJNYW5hZ2VyIGV4dGVuZHMgT2lkY0NsaWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncyA9IHt9LFxyXG4gICAgICAgIFNpbGVudFJlbmV3U2VydmljZUN0b3IgPSBTaWxlbnRSZW5ld1NlcnZpY2UsXHJcbiAgICAgICAgU2Vzc2lvbk1vbml0b3JDdG9yID0gU2Vzc2lvbk1vbml0b3IsXHJcbiAgICAgICAgVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3RvciA9IFRva2VuUmV2b2NhdGlvbkNsaWVudCxcclxuICAgICAgICBUb2tlbkNsaWVudEN0b3IgPSBUb2tlbkNsaWVudCxcclxuICAgICAgICBqb3NlVXRpbCA9IEpvc2VVdGlsXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgaWYgKCEoc2V0dGluZ3MgaW5zdGFuY2VvZiBVc2VyTWFuYWdlclNldHRpbmdzKSkge1xyXG4gICAgICAgICAgICBzZXR0aW5ncyA9IG5ldyBVc2VyTWFuYWdlclNldHRpbmdzKHNldHRpbmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoc2V0dGluZ3MpO1xyXG5cclxuICAgICAgICB0aGlzLl9ldmVudHMgPSBuZXcgVXNlck1hbmFnZXJFdmVudHMoc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3U2VydmljZSA9IG5ldyBTaWxlbnRSZW5ld1NlcnZpY2VDdG9yKHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBvcmRlciBpcyBpbXBvcnRhbnQgZm9yIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczsgdGhlc2Ugc2VydmljZXMgZGVwZW5kIHVwb24gdGhlIGV2ZW50cy5cclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvbWF0aWNTaWxlbnRSZW5ldykge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5jdG9yOiBhdXRvbWF0aWNTaWxlbnRSZW5ldyBpcyBjb25maWd1cmVkLCBzZXR0aW5nIHVwIHNpbGVudCByZW5ld1wiKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFNpbGVudFJlbmV3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5tb25pdG9yU2Vzc2lvbikge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5jdG9yOiBtb25pdG9yU2Vzc2lvbiBpcyBjb25maWd1cmVkLCBzZXR0aW5nIHVwIHNlc3Npb24gbW9uaXRvclwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Vzc2lvbk1vbml0b3IgPSBuZXcgU2Vzc2lvbk1vbml0b3JDdG9yKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50ID0gbmV3IFRva2VuUmV2b2NhdGlvbkNsaWVudEN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX3Rva2VuQ2xpZW50ID0gbmV3IFRva2VuQ2xpZW50Q3Rvcih0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fam9zZVV0aWwgPSBqb3NlVXRpbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3JlZGlyZWN0TmF2aWdhdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnJlZGlyZWN0TmF2aWdhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9wb3B1cE5hdmlnYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5wb3B1cE5hdmlnYXRvcjtcclxuICAgIH1cclxuICAgIGdldCBfaWZyYW1lTmF2aWdhdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmlmcmFtZU5hdmlnYXRvcjtcclxuICAgIH1cclxuICAgIGdldCBfdXNlclN0b3JlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnVzZXJTdG9yZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXZlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5nZXRVc2VyOiB1c2VyIGxvYWRlZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMubG9hZCh1c2VyLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLmdldFVzZXI6IHVzZXIgbm90IGZvdW5kIGluIHN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVVzZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVVc2VyKG51bGwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnJlbW92ZVVzZXI6IHVzZXIgcmVtb3ZlZCBmcm9tIHN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy51bmxvYWQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5SZWRpcmVjdChhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpyXCI7XHJcbiAgICAgICAgbGV0IG5hdlBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdXNlUmVwbGFjZVRvTmF2aWdhdGUgOiBhcmdzLnVzZVJlcGxhY2VUb05hdmlnYXRlXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IsIG5hdlBhcmFtcykudGhlbigoKT0+e1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0OiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbmluUmVkaXJlY3RDYWxsYmFjayh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluRW5kKHVybCB8fCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvci51cmwpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5SZWRpcmVjdENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2s6IG5vIHN1YlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbmluUG9wdXAoYXJncyA9IHt9KSB7XHJcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xyXG5cclxuICAgICAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic2k6cFwiO1xyXG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvcHVwX3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cDogTm8gcG9wdXBfcmVkaXJlY3RfdXJpIG9yIHJlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gcG9wdXBfcmVkaXJlY3RfdXJpIG9yIHJlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gdXJsO1xyXG4gICAgICAgIGFyZ3MuZGlzcGxheSA9IFwicG9wdXBcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbihhcmdzLCB0aGlzLl9wb3B1cE5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd0ZlYXR1cmVzOiBhcmdzLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd0ZlYXR1cmVzLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd1RhcmdldDogYXJncy5wb3B1cFdpbmRvd1RhcmdldCB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93VGFyZ2V0XHJcbiAgICAgICAgfSkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXA6IHNpZ25pblBvcHVwIHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXA6IG5vIHN1YlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaWduaW5Qb3B1cENhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5DYWxsYmFjayh1cmwsIHRoaXMuX3BvcHVwTmF2aWdhdG9yKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2s6IG5vIHN1YlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2sgZXJyb3I6IFwiICsgZXJyICYmIGVyci5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5TaWxlbnQoYXJncyA9IHt9KSB7XHJcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xyXG5cclxuICAgICAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic2k6c1wiO1xyXG4gICAgICAgIC8vIGZpcnN0IGRldGVybWluZSBpZiB3ZSBoYXZlIGEgcmVmcmVzaCB0b2tlbiwgb3IgbmVlZCB0byB1c2UgaWZyYW1lXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5yZWZyZXNoX3Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzLnJlZnJlc2hfdG9rZW4gPSB1c2VyLnJlZnJlc2hfdG9rZW47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlUmVmcmVzaFRva2VuKGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXJncy5pZF90b2tlbl9oaW50ID0gYXJncy5pZF90b2tlbl9oaW50IHx8ICh0aGlzLnNldHRpbmdzLmluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyAmJiB1c2VyICYmIHVzZXIuaWRfdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIgJiYgdGhpcy5fc2V0dGluZ3MudmFsaWRhdGVTdWJPblNpbGVudFJlbmV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50LCBzdWJqZWN0IHByaW9yIHRvIHNpbGVudCByZW5ldzogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuY3VycmVudF9zdWIgPSB1c2VyLnByb2ZpbGUuc3ViO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pblNpbGVudElmcmFtZShhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF91c2VSZWZyZXNoVG9rZW4oYXJncyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuKGFyZ3MpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl91c2VSZWZyZXNoVG9rZW46IE5vIHJlc3BvbnNlIHJldHVybmVkIGZyb20gdG9rZW4gZW5kcG9pbnRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyByZXNwb25zZSByZXR1cm5lZCBmcm9tIHRva2VuIGVuZHBvaW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3VzZVJlZnJlc2hUb2tlbjogTm8gYWNjZXNzIHRva2VuIHJldHVybmVkIGZyb20gdG9rZW4gZW5kcG9pbnRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQgZnJvbSB0b2tlbiBlbmRwb2ludFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkVG9rZW5WYWxpZGF0aW9uID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pZF90b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRva2VuVmFsaWRhdGlvbiA9IHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbih1c2VyLnByb2ZpbGUsIHJlc3VsdC5pZF90b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWRUb2tlblZhbGlkYXRpb24udGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl91c2VSZWZyZXNoVG9rZW46IHJlZnJlc2ggdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5pZF90b2tlbiA9IHJlc3VsdC5pZF90b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5hY2Nlc3NfdG9rZW4gPSByZXN1bHQuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLnJlZnJlc2hfdG9rZW4gPSByZXN1bHQucmVmcmVzaF90b2tlbiB8fCB1c2VyLnJlZnJlc2hfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZXhwaXJlc19pbiA9IHJlc3VsdC5leHBpcmVzX2luO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVVc2VyKHVzZXIpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW4ocHJvZmlsZSwgaWRfdG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpLnRoZW4oaXNzdWVyID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsLnZhbGlkYXRlSnd0QXR0cmlidXRlcyhpZF90b2tlbiwgaXNzdWVyLCB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQsIHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldykudGhlbihwYXlsb2FkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IEZhaWxlZCB0byB2YWxpZGF0ZSBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHZhbGlkYXRlIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLnN1YiAhPT0gcHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBzdWIgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggY3VycmVudCBzdWJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInN1YiBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBjdXJyZW50IHN1YlwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5hdXRoX3RpbWUgJiYgcGF5bG9hZC5hdXRoX3RpbWUgIT09IHByb2ZpbGUuYXV0aF90aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXV0aF90aW1lIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF1dGhfdGltZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXV0aF90aW1lIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF1dGhfdGltZVwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5henAgJiYgcGF5bG9hZC5henAgIT09IHByb2ZpbGUuYXpwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXpwIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF6cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXpwIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF6cFwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBheWxvYWQuYXpwICYmIHByb2ZpbGUuYXpwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXpwIG5vdCBpbiBpZF90b2tlbiwgYnV0IHByZXNlbnQgaW4gb3JpZ2luYWwgaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImF6cCBub3QgaW4gaWRfdG9rZW4sIGJ1dCBwcmVzZW50IGluIG9yaWdpbmFsIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9zaWduaW5TaWxlbnRJZnJhbWUoYXJncyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50X3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQ6IE5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IHVybDtcclxuICAgICAgICBhcmdzLnByb21wdCA9IGFyZ3MucHJvbXB0IHx8IFwibm9uZVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluKGFyZ3MsIHRoaXMuX2lmcmFtZU5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDogYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0XHJcbiAgICAgICAgfSkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50OiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudDogbm8gc3ViXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5TaWxlbnRDYWxsYmFjayh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluQ2FsbGJhY2sodXJsLCB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudENhbGxiYWNrOiBubyBzdWJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25pbkNhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRTaWduaW5SZXNwb25zZVN0YXRlKHVybCkudGhlbigoe3N0YXRlLCByZXNwb25zZX0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLnJlcXVlc3RfdHlwZSA9PT0gXCJzaTpyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2sodXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNpOnBcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmluUG9wdXBDYWxsYmFjayh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0X3R5cGUgPT09IFwic2k6c1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduaW5TaWxlbnRDYWxsYmFjayh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpbnZhbGlkIHJlc3BvbnNlX3R5cGUgaW4gc3RhdGVcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25vdXRDYWxsYmFjayh1cmwsIGtlZXBPcGVuKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlKHVybCkudGhlbigoe3N0YXRlLCByZXNwb25zZX0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNvOnJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25vdXRSZWRpcmVjdENhbGxiYWNrKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNvOnBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25vdXRQb3B1cENhbGxiYWNrKHVybCwga2VlcE9wZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImludmFsaWQgcmVzcG9uc2VfdHlwZSBpbiBzdGF0ZVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHF1ZXJ5U2Vzc2lvblN0YXR1cyhhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpzXCI7IC8vIHRoaXMgYWN0cyBsaWtlIGEgc2lnbmluIHNpbGVudFxyXG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnNpbGVudF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJncy5yZWRpcmVjdF91cmkgPSB1cmw7XHJcbiAgICAgICAgYXJncy5wcm9tcHQgPSBcIm5vbmVcIjtcclxuICAgICAgICBhcmdzLnJlc3BvbnNlX3R5cGUgPSBhcmdzLnJlc3BvbnNlX3R5cGUgfHwgdGhpcy5zZXR0aW5ncy5xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZTtcclxuICAgICAgICBhcmdzLnNjb3BlID0gYXJncy5zY29wZSB8fCBcIm9wZW5pZFwiO1xyXG4gICAgICAgIGFyZ3Muc2tpcFVzZXJJbmZvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pblN0YXJ0KGFyZ3MsIHRoaXMuX2lmcmFtZU5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDogYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0XHJcbiAgICAgICAgfSkudGhlbihuYXZSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWduaW5SZXNwb25zZShuYXZSZXNwb25zZS51cmwpLnRoZW4oc2lnbmluUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBnb3Qgc2lnbmluIHJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzaWduaW5SZXNwb25zZS5zZXNzaW9uX3N0YXRlICYmIHNpZ25pblJlc3BvbnNlLnByb2ZpbGUuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXM6IHF1ZXJ5U2Vzc2lvblN0YXR1cyBzdWNjZXNzIGZvciBzdWI6IFwiLCAgc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25fc3RhdGU6IHNpZ25pblJlc3BvbnNlLnNlc3Npb25fc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yjogc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZDogc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zaWRcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJxdWVyeVNlc3Npb25TdGF0dXMgc3VjY2Vzc2Z1bCwgdXNlciBub3QgYXV0aGVudGljYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyLnNlc3Npb25fc3RhdGUgJiYgdGhpcy5zZXR0aW5ncy5tb25pdG9yQW5vbnltb3VzU2Vzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIubWVzc2FnZSA9PSBcImxvZ2luX3JlcXVpcmVkXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID09IFwiY29uc2VudF9yZXF1aXJlZFwiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9PSBcImludGVyYWN0aW9uX3JlcXVpcmVkXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID09IFwiYWNjb3VudF9zZWxlY3Rpb25fcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1czogcXVlcnlTZXNzaW9uU3RhdHVzIHN1Y2Nlc3MgZm9yIGFub255bW91cyB1c2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogZXJyLnNlc3Npb25fc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2lnbmluKGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMpLnRoZW4obmF2UmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluRW5kKG5hdlJlc3BvbnNlLnVybCwgYXJncyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfc2lnbmluU3RhcnQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xyXG5cclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnByZXBhcmUobmF2aWdhdG9yUGFyYW1zKS50aGVuKGhhbmRsZSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5TdGFydDogZ290IG5hdmlnYXRvciB3aW5kb3cgaGFuZGxlXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2lnbmluUmVxdWVzdChhcmdzKS50aGVuKHNpZ25pblJlcXVlc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pblN0YXJ0OiBnb3Qgc2lnbmluIHJlcXVlc3RcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLnVybCA9IHNpZ25pblJlcXVlc3QudXJsO1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLmlkID0gc2lnbmluUmVxdWVzdC5zdGF0ZS5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLm5hdmlnYXRlKG5hdmlnYXRvclBhcmFtcyk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pblN0YXJ0OiBFcnJvciBhZnRlciBwcmVwYXJpbmcgbmF2aWdhdG9yLCBjbG9zaW5nIG5hdmlnYXRvciB3aW5kb3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3NpZ25pbkVuZCh1cmwsIGFyZ3MgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwpLnRoZW4oc2lnbmluUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiBnb3Qgc2lnbmluIHJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcihzaWduaW5SZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXJncy5jdXJyZW50X3N1Yikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MuY3VycmVudF9zdWIgIT09IHVzZXIucHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiBjdXJyZW50IHVzZXIgZG9lcyBub3QgbWF0Y2ggdXNlciByZXR1cm5lZCBmcm9tIHNpZ25pbi4gc3ViIGZyb20gc2lnbmluOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImxvZ2luX3JlcXVpcmVkXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5FbmQ6IGN1cnJlbnQgdXNlciBtYXRjaGVzIHVzZXIgcmV0dXJuZWQgZnJvbSBzaWduaW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcih1c2VyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5FbmQ6IHVzZXIgc3RvcmVkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9zaWduaW5DYWxsYmFjayh1cmwsIG5hdmlnYXRvcikge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5DYWxsYmFja1wiKTtcclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmNhbGxiYWNrKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbm91dFJlZGlyZWN0KGFyZ3MgPSB7fSkge1xyXG4gICAgICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcclxuXHJcbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNvOnJcIjtcclxuICAgICAgICBsZXQgcG9zdExvZ291dFJlZGlyZWN0VXJpID0gYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgaWYgKHBvc3RMb2dvdXRSZWRpcmVjdFVyaSl7XHJcbiAgICAgICAgICAgIGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9zdExvZ291dFJlZGlyZWN0VXJpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmF2UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB1c2VSZXBsYWNlVG9OYXZpZ2F0ZSA6IGFyZ3MudXNlUmVwbGFjZVRvTmF2aWdhdGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0U3RhcnQoYXJncywgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IsIG5hdlBhcmFtcykudGhlbigoKT0+e1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25vdXRSZWRpcmVjdDogc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNpZ25vdXRSZWRpcmVjdENhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0RW5kKHVybCB8fCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvci51cmwpLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UmVkaXJlY3RDYWxsYmFjazogc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25vdXRQb3B1cChhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzbzpwXCI7XHJcbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gdXJsO1xyXG4gICAgICAgIGFyZ3MuZGlzcGxheSA9IFwicG9wdXBcIjtcclxuICAgICAgICBpZiAoYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkpe1xyXG4gICAgICAgICAgICAvLyB3ZSdyZSBwdXR0aW5nIGEgZHVtbXkgZW50cnkgaW4gaGVyZSBiZWNhdXNlIHdlXHJcbiAgICAgICAgICAgIC8vIG5lZWQgYSB1bmlxdWUgaWQgZnJvbSB0aGUgc3RhdGUgZm9yIG5vdGlmaWNhdGlvblxyXG4gICAgICAgICAgICAvLyB0byB0aGUgcGFyZW50IHdpbmRvdywgd2hpY2ggaXMgbmVjZXNzYXJ5IGlmIHdlXHJcbiAgICAgICAgICAgIC8vIHBsYW4gdG8gcmV0dXJuIGJhY2sgdG8gdGhlIGNsaWVudCBhZnRlciBzaWdub3V0XHJcbiAgICAgICAgICAgIC8vIGFuZCBzbyB3ZSBjYW4gY2xvc2UgdGhlIHBvcHVwIGFmdGVyIHNpZ25vdXRcclxuICAgICAgICAgICAgYXJncy5zdGF0ZSA9IGFyZ3Muc3RhdGUgfHwge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbm91dChhcmdzLCB0aGlzLl9wb3B1cE5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd0ZlYXR1cmVzOiBhcmdzLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd0ZlYXR1cmVzLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd1RhcmdldDogYXJncy5wb3B1cFdpbmRvd1RhcmdldCB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93VGFyZ2V0XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbm91dFBvcHVwOiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbm91dFBvcHVwQ2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xyXG4gICAgICAgIGlmICh0eXBlb2Yoa2VlcE9wZW4pID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YodXJsKSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIGtlZXBPcGVuID0gdXJsO1xyXG4gICAgICAgICAgICB1cmwgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRlbGltaXRlciA9ICc/JztcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBOYXZpZ2F0b3IuY2FsbGJhY2sodXJsLCBrZWVwT3BlbiwgZGVsaW1pdGVyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UG9wdXBDYWxsYmFjazogc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2lnbm91dChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRTdGFydChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcykudGhlbihuYXZSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0RW5kKG5hdlJlc3BvbnNlLnVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfc2lnbm91dFN0YXJ0KGFyZ3MgPSB7fSwgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IucHJlcGFyZShuYXZpZ2F0b3JQYXJhbXMpLnRoZW4oaGFuZGxlID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogZ290IG5hdmlnYXRvciB3aW5kb3cgaGFuZGxlXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IGxvYWRlZCBjdXJyZW50IHVzZXIgZnJvbSBzdG9yYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXZva2VQcm9taXNlID0gdGhpcy5fc2V0dGluZ3MucmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQgPyB0aGlzLl9yZXZva2VJbnRlcm5hbCh1c2VyKSA6IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldm9rZVByb21pc2UudGhlbigoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZF90b2tlbiA9IGFyZ3MuaWRfdG9rZW5faGludCB8fCB1c2VyICYmIHVzZXIuaWRfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IFNldHRpbmcgaWRfdG9rZW4gaW50byBzaWdub3V0IHJlcXVlc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MuaWRfdG9rZW5faGludCA9IGlkX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlVXNlcigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiB1c2VyIHJlbW92ZWQsIGNyZWF0aW5nIHNpZ25vdXQgcmVxdWVzdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNpZ25vdXRSZXF1ZXN0KGFyZ3MpLnRoZW4oc2lnbm91dFJlcXVlc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogZ290IHNpZ25vdXQgcmVxdWVzdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMudXJsID0gc2lnbm91dFJlcXVlc3QudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25vdXRSZXF1ZXN0LnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLmlkID0gc2lnbm91dFJlcXVlc3Quc3RhdGUuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLm5hdmlnYXRlKG5hdmlnYXRvclBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogRXJyb3IgYWZ0ZXIgcHJlcGFyaW5nIG5hdmlnYXRvciwgY2xvc2luZyBuYXZpZ2F0b3Igd2luZG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9zaWdub3V0RW5kKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsKS50aGVuKHNpZ25vdXRSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0RW5kOiBnb3Qgc2lnbm91dCByZXNwb25zZVwiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzaWdub3V0UmVzcG9uc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2b2tlQWNjZXNzVG9rZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUludGVybmFsKHVzZXIsIHRydWUpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuOiByZW1vdmluZyB0b2tlbiBwcm9wZXJ0aWVzIGZyb20gdXNlciBhbmQgcmUtc3RvcmluZ1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5hY2Nlc3NfdG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIucmVmcmVzaF90b2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5leHBpcmVzX2F0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnRva2VuX3R5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIodXNlcikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuOiB1c2VyIHN0b3JlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmxvYWQodXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5yZXZva2VBY2Nlc3NUb2tlbjogYWNjZXNzIHRva2VuIHJldm9rZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZXZva2VJbnRlcm5hbCh1c2VyLCByZXF1aXJlZCkge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIHZhciBhY2Nlc3NfdG9rZW4gPSB1c2VyLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgdmFyIHJlZnJlc2hfdG9rZW4gPSB1c2VyLnJlZnJlc2hfdG9rZW47XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlQWNjZXNzVG9rZW5JbnRlcm5hbChhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXRTdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJ0U3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWF0U3VjY2VzcyAmJiAhcnRTdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucmV2b2tlQWNjZXNzVG9rZW46IG5vIG5lZWQgdG8gcmV2b2tlIGR1ZSB0byBubyB0b2tlbihzKSwgb3IgSldUIGZvcm1hdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0U3VjY2VzcyB8fCBydFN1Y2Nlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmV2b2tlQWNjZXNzVG9rZW5JbnRlcm5hbChhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIEpXVCB2cy4gcmVmZXJlbmNlIHRva2VuXHJcbiAgICAgICAgaWYgKCFhY2Nlc3NfdG9rZW4gfHwgYWNjZXNzX3Rva2VuLmluZGV4T2YoJy4nKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2UoYWNjZXNzX3Rva2VuLCByZXF1aXJlZCkudGhlbigoKSA9PiB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQpIHtcclxuICAgICAgICBpZiAoIXJlZnJlc2hfdG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZShyZWZyZXNoX3Rva2VuLCByZXF1aXJlZCwgXCJyZWZyZXNoX3Rva2VuXCIpLnRoZW4oKCkgPT4gdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTaWxlbnRSZW5ldygpIHtcclxuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld1NlcnZpY2Uuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wU2lsZW50UmVuZXcoKSB7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdTZXJ2aWNlLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3VzZXJTdG9yZUtleSgpIHtcclxuICAgICAgICByZXR1cm4gYHVzZXI6JHt0aGlzLnNldHRpbmdzLmF1dGhvcml0eX06JHt0aGlzLnNldHRpbmdzLmNsaWVudF9pZH1gO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb2FkVXNlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlLmdldCh0aGlzLl91c2VyU3RvcmVLZXkpLnRoZW4oc3RvcmFnZVN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdG9yYWdlU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fbG9hZFVzZXI6IHVzZXIgc3RvcmFnZVN0cmluZyBsb2FkZWRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVXNlci5mcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX2xvYWRVc2VyOiBubyB1c2VyIHN0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlVXNlcih1c2VyKSB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc3RvcmVVc2VyOiBzdG9yaW5nIHVzZXJcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RvcmFnZVN0cmluZyA9IHVzZXIudG9TdG9yYWdlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VyU3RvcmUuc2V0KHRoaXMuX3VzZXJTdG9yZUtleSwgc3RvcmFnZVN0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJzdG9yZVVzZXIuc3RvcmVVc2VyOiByZW1vdmluZyB1c2VyXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlLnJlbW92ZSh0aGlzLl91c2VyU3RvcmVLZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRXZlbnRzIH0gZnJvbSAnLi9BY2Nlc3NUb2tlbkV2ZW50cy5qcyc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9FdmVudC5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlck1hbmFnZXJFdmVudHMgZXh0ZW5kcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcclxuICAgICAgICBzdXBlcihzZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZCA9IG5ldyBFdmVudChcIlVzZXIgbG9hZGVkXCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZCA9IG5ldyBFdmVudChcIlVzZXIgdW5sb2FkZWRcIik7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvciA9IG5ldyBFdmVudChcIlNpbGVudCByZW5ldyBlcnJvclwiKTtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkSW4gPSBuZXcgRXZlbnQoXCJVc2VyIHNpZ25lZCBpblwiKTtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkT3V0ID0gbmV3IEV2ZW50KFwiVXNlciBzaWduZWQgb3V0XCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZCA9IG5ldyBFdmVudChcIlVzZXIgc2Vzc2lvbiBjaGFuZ2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQodXNlciwgcmFpc2VFdmVudD10cnVlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMubG9hZFwiKTtcclxuICAgICAgICBzdXBlci5sb2FkKHVzZXIpO1xyXG4gICAgICAgIGlmIChyYWlzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJMb2FkZWQucmFpc2UodXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdW5sb2FkKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLnVubG9hZFwiKTtcclxuICAgICAgICBzdXBlci51bmxvYWQoKTtcclxuICAgICAgICB0aGlzLl91c2VyVW5sb2FkZWQucmFpc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyTG9hZGVkKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVVzZXJMb2FkZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyTG9hZGVkLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFVzZXJVbmxvYWRlZChjYikge1xyXG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVVzZXJVbmxvYWRlZChjYikge1xyXG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5yZW1vdmVIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTaWxlbnRSZW5ld0Vycm9yKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVNpbGVudFJlbmV3RXJyb3IoY2IpIHtcclxuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld0Vycm9yLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlU2lsZW50UmVuZXdFcnJvclwiLCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3RXJyb3IucmFpc2UoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVXNlclNpZ25lZEluKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluLmFkZEhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlVXNlclNpZ25lZEluKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgX3JhaXNlVXNlclNpZ25lZEluKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTaWduZWRJblwiKTtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkSW4ucmFpc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyU2lnbmVkT3V0KGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZE91dC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVVzZXJTaWduZWRPdXQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkT3V0LnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgX3JhaXNlVXNlclNpZ25lZE91dCgpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkT3V0XCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQucmFpc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyU2Vzc2lvbkNoYW5nZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQuYWRkSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbiAgICByZW1vdmVVc2VyU2Vzc2lvbkNoYW5nZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQucmVtb3ZlSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbiAgICBfcmFpc2VVc2VyU2Vzc2lvbkNoYW5nZWQoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkXCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZC5yYWlzZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudFNldHRpbmdzIH0gZnJvbSAnLi9PaWRjQ2xpZW50U2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdE5hdmlnYXRvciB9IGZyb20gJy4vUmVkaXJlY3ROYXZpZ2F0b3IuanMnO1xyXG5pbXBvcnQgeyBQb3B1cE5hdmlnYXRvciB9IGZyb20gJy4vUG9wdXBOYXZpZ2F0b3IuanMnO1xyXG5pbXBvcnQgeyBJRnJhbWVOYXZpZ2F0b3IgfSBmcm9tICcuL0lGcmFtZU5hdmlnYXRvci5qcyc7XHJcbmltcG9ydCB7IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnLi9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuaW1wb3J0IHsgU2lnbmluUmVxdWVzdCB9IGZyb20gJy4vU2lnbmluUmVxdWVzdC5qcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSA2MDtcclxuY29uc3QgRGVmYXVsdENoZWNrU2Vzc2lvbkludGVydmFsID0gMjAwMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyTWFuYWdlclNldHRpbmdzIGV4dGVuZHMgT2lkY0NsaWVudFNldHRpbmdzIHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICBwb3B1cF9yZWRpcmVjdF91cmksXHJcbiAgICAgICAgcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxyXG4gICAgICAgIHBvcHVwV2luZG93RmVhdHVyZXMsXHJcbiAgICAgICAgcG9wdXBXaW5kb3dUYXJnZXQsXHJcbiAgICAgICAgc2lsZW50X3JlZGlyZWN0X3VyaSxcclxuICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dCxcclxuICAgICAgICBhdXRvbWF0aWNTaWxlbnRSZW5ldyA9IGZhbHNlLFxyXG4gICAgICAgIHZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyA9IGZhbHNlLFxyXG4gICAgICAgIGluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyA9IHRydWUsXHJcbiAgICAgICAgbW9uaXRvclNlc3Npb24gPSB0cnVlLFxyXG4gICAgICAgIG1vbml0b3JBbm9ueW1vdXNTZXNzaW9uID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tTZXNzaW9uSW50ZXJ2YWwgPSBEZWZhdWx0Q2hlY2tTZXNzaW9uSW50ZXJ2YWwsXHJcbiAgICAgICAgc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IgPSB0cnVlLFxyXG4gICAgICAgIHF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlLFxyXG4gICAgICAgIHJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0ID0gZmFsc2UsXHJcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUsXHJcbiAgICAgICAgcmVkaXJlY3ROYXZpZ2F0b3IgPSBuZXcgUmVkaXJlY3ROYXZpZ2F0b3IoKSxcclxuICAgICAgICBwb3B1cE5hdmlnYXRvciA9IG5ldyBQb3B1cE5hdmlnYXRvcigpLFxyXG4gICAgICAgIGlmcmFtZU5hdmlnYXRvciA9IG5ldyBJRnJhbWVOYXZpZ2F0b3IoKSxcclxuICAgICAgICB1c2VyU3RvcmUgPSBuZXcgV2ViU3RvcmFnZVN0YXRlU3RvcmUoeyBzdG9yZTogR2xvYmFsLnNlc3Npb25TdG9yYWdlIH0pXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICBzdXBlcihhcmd1bWVudHNbMF0pO1xyXG5cclxuICAgICAgICB0aGlzLl9wb3B1cF9yZWRpcmVjdF91cmkgPSBwb3B1cF9yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwV2luZG93RmVhdHVyZXMgPSBwb3B1cFdpbmRvd0ZlYXR1cmVzO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwV2luZG93VGFyZ2V0ID0gcG9wdXBXaW5kb3dUYXJnZXQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3NpbGVudF9yZWRpcmVjdF91cmkgPSBzaWxlbnRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX3NpbGVudFJlcXVlc3RUaW1lb3V0ID0gc2lsZW50UmVxdWVzdFRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy5fYXV0b21hdGljU2lsZW50UmVuZXcgPSBhdXRvbWF0aWNTaWxlbnRSZW5ldztcclxuICAgICAgICB0aGlzLl92YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXcgPSB2YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXc7XHJcbiAgICAgICAgdGhpcy5faW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3ID0gaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3O1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XHJcblxyXG4gICAgICAgIHRoaXMuX21vbml0b3JTZXNzaW9uID0gbW9uaXRvclNlc3Npb247XHJcbiAgICAgICAgdGhpcy5fbW9uaXRvckFub255bW91c1Nlc3Npb24gPSBtb25pdG9yQW5vbnltb3VzU2Vzc2lvbjtcclxuICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JbnRlcnZhbCA9IGNoZWNrU2Vzc2lvbkludGVydmFsO1xyXG4gICAgICAgIHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yID0gc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XHJcbiAgICAgICAgaWYgKHF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3F1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlID0gcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGU7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmIChhcmd1bWVudHNbMF0gJiYgYXJndW1lbnRzWzBdLnJlc3BvbnNlX3R5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUgPSBTaWduaW5SZXF1ZXN0LmlzT2lkYyhhcmd1bWVudHNbMF0ucmVzcG9uc2VfdHlwZSkgPyBcImlkX3Rva2VuXCIgOiBcImNvZGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3F1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlID0gXCJpZF90b2tlblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCA9IHJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0O1xyXG5cclxuICAgICAgICB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvciA9IHJlZGlyZWN0TmF2aWdhdG9yO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwTmF2aWdhdG9yID0gcG9wdXBOYXZpZ2F0b3I7XHJcbiAgICAgICAgdGhpcy5faWZyYW1lTmF2aWdhdG9yID0gaWZyYW1lTmF2aWdhdG9yO1xyXG5cclxuICAgICAgICB0aGlzLl91c2VyU3RvcmUgPSB1c2VyU3RvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBvcHVwX3JlZGlyZWN0X3VyaSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBfcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvcHVwV2luZG93RmVhdHVyZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwV2luZG93RmVhdHVyZXM7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9wdXBXaW5kb3dUYXJnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwV2luZG93VGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaWxlbnRfcmVkaXJlY3RfdXJpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWxlbnRfcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgIGdldCBzaWxlbnRSZXF1ZXN0VGltZW91dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lsZW50UmVxdWVzdFRpbWVvdXQ7XHJcbiAgICB9XHJcbiAgICBnZXQgYXV0b21hdGljU2lsZW50UmVuZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9tYXRpY1NpbGVudFJlbmV3O1xyXG4gICAgfVxyXG4gICAgZ2V0IHZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3O1xyXG4gICAgfVxyXG4gICAgZ2V0IGluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3O1xyXG4gICAgfVxyXG4gICAgZ2V0IGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9uaXRvclNlc3Npb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbml0b3JTZXNzaW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb25pdG9yQW5vbnltb3VzU2Vzc2lvbjtcclxuICAgIH1cclxuICAgIGdldCBjaGVja1Nlc3Npb25JbnRlcnZhbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XHJcbiAgICB9XHJcbiAgICBnZXQgcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGU7XHJcbiAgICB9XHJcbiAgICBnZXQgcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZWRpcmVjdE5hdmlnYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9wdXBOYXZpZ2F0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwTmF2aWdhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlmcmFtZU5hdmlnYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWZyYW1lTmF2aWdhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB1c2VyU3RvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7cHJlZml4ID0gXCJvaWRjLlwiLCBzdG9yZSA9IEdsb2JhbC5sb2NhbFN0b3JhZ2V9ID0ge30pIHtcclxuICAgICAgICB0aGlzLl9zdG9yZSA9IHN0b3JlO1xyXG4gICAgICAgIHRoaXMuX3ByZWZpeCA9IHByZWZpeDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLnNldFwiLCBrZXkpO1xyXG5cclxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0b3JlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoa2V5KSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUuZ2V0XCIsIGtleSk7XHJcblxyXG4gICAgICAgIGtleSA9IHRoaXMuX3ByZWZpeCArIGtleTtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9zdG9yZS5nZXRJdGVtKGtleSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGtleSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLnJlbW92ZVwiLCBrZXkpO1xyXG5cclxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XHJcblxyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5fc3RvcmUuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIHRoaXMuX3N0b3JlLnJlbW92ZUl0ZW0oa2V5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxLZXlzKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLmdldEFsbEtleXNcIik7XHJcblxyXG4gICAgICAgIHZhciBrZXlzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9zdG9yZS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuX3N0b3JlLmtleShpbmRleCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5fcHJlZml4KSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleS5zdWJzdHIodGhpcy5fcHJlZml4Lmxlbmd0aCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGtleXMpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbkJhc2VkIG9uIHRoZSB3b3JrIG9mIEF1dGgwXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9hdXRoMC9pZHRva2VuLXZlcmlmaWVyXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9hdXRoMC9pZHRva2VuLXZlcmlmaWVyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuV2hpY2ggaXMgYmFzZWQgb24gdGhlIHdvcmsgb2YgVG9tIFd1XHJcbmh0dHA6Ly93d3ctY3Mtc3R1ZGVudHMuc3RhbmZvcmQuZWR1L350ancvanNibi9cclxuaHR0cDovL3d3dy1jcy1zdHVkZW50cy5zdGFuZm9yZC5lZHUvfnRqdy9qc2JuL0xJQ0VOU0VcclxuKi9cclxuXHJcbi8qXHJcbiAqIFRvIHN1cHBvcnQgbW9zdCBiYXNpYyBPcGVuSWQgdXNlIGNhc2VzICh1c2luZyBSU0EyNTYpLCB3ZSBjYW4gZ2V0IGF3YXkgd2l0aG91dFxyXG4gKiByZXF1aXJpbmcgdGhlIGZ1bGwganJzYXNpZ24gZmVhdHVyZSBzZXQgKGFuZCByZXN1bHRpbmcgbWFzc2l2ZSBidW5kbGUpLlxyXG4gKlxyXG4gKiAtIFN1cHBvcnQgUlNBIDI1NiBhbGdvcml0aG0gKG9wdGlvbmFsbHkgY291bGQgc3VwcG9ydCBSU0EqIGZhbWlseSlcclxuICogLSBQYXJzZSBKV1QgdG9rZW5zIHVzaW5nIHRoZSAobikgcGFyYW1ldGVyLlxyXG4gKiAtIFZlcmlmeSBzaWduYXR1cmUgb2YgaWRfdG9rZW5zXHJcbiAqIC0gVmVyaWZ5IGF0X2hhc2ggb2YgYWNjZXNzX3Rva2Vuc1xyXG4gKiAtIFBlcmZvcm0gY29tbW9uIGJhc2U2NCBlbmNvZGluZy9kZWNvZGluZyB0YXNrcy5cclxuICovXHJcblxyXG5pbXBvcnQgSlNCTiBmcm9tICdqc2JuJztcclxuaW1wb3J0IFNIQTI1NiBmcm9tICdjcnlwdG8tanMvc2hhMjU2JztcclxuaW1wb3J0IGJhc2U2NEpzIGZyb20gJ2Jhc2U2NC1qcyc7XHJcblxyXG52YXIgQmlnSW50ZWdlciA9IEpTQk4uQmlnSW50ZWdlcjtcclxuXHJcbi8qISAoYykgVG9tIFd1IHwgaHR0cDovL3d3dy1jcy1zdHVkZW50cy5zdGFuZm9yZC5lZHUvfnRqdy9qc2JuL1xyXG4gKi9cclxudmFyIGI2NG1hcCA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xyXG52YXIgYjY0cGFkID0gXCI9XCI7XHJcblxyXG5jb25zdCBCYXNlNjQgPSB7XHJcbiAgICBiNjR0b2hleChzKSB7XHJcbiAgICAgICAgdmFyIHJldCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgdmFyIGsgPSAwOyAvLyBiNjQgc3RhdGUsIDAtM1xyXG4gICAgICAgIHZhciBzbG9wO1xyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYocy5jaGFyQXQoaSkgPT09IGI2NHBhZCkgYnJlYWs7XHJcbiAgICAgICAgICAgIHZhciB2ID0gYjY0bWFwLmluZGV4T2Yocy5jaGFyQXQoaSkpO1xyXG4gICAgICAgICAgICBpZih2IDwgMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmKGsgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHYgPj4gMik7XHJcbiAgICAgICAgICAgICAgICBzbG9wID0gdiAmIDM7XHJcbiAgICAgICAgICAgICAgICBrID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGsgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChzbG9wIDw8IDIpIHwgKHYgPj4gNCkpO1xyXG4gICAgICAgICAgICAgICAgc2xvcCA9IHYgJiAweGY7XHJcbiAgICAgICAgICAgICAgICBrID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGsgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHNsb3ApO1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodiA+PiAyKTtcclxuICAgICAgICAgICAgICAgIHNsb3AgPSB2ICYgMztcclxuICAgICAgICAgICAgICAgIGsgPSAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHNsb3AgPDwgMikgfCAodiA+PiA0KSk7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh2ICYgMHhmKTtcclxuICAgICAgICAgICAgICAgIGsgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGsgPT09IDEpXHJcbiAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHNsb3AgPDwgMik7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0sXHJcbiAgICBoZXhUb0Jhc2U2NChoKSB7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgdmFyIGM7XHJcbiAgICAgICAgdmFyIHJldCA9IFwiXCI7XHJcbiAgICAgICAgZm9yKGkgPSAwOyBpKzMgPD0gaC5sZW5ndGg7IGkrPTMpIHtcclxuICAgICAgICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksaSszKSwxNik7XHJcbiAgICAgICAgICAgIHJldCArPSBiNjRtYXAuY2hhckF0KGMgPj4gNikgKyBiNjRtYXAuY2hhckF0KGMgJiA2Myk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGkrMSA9PT0gaC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksaSsxKSwxNik7XHJcbiAgICAgICAgICAgIHJldCArPSBiNjRtYXAuY2hhckF0KGMgPDwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaSsyID09PSBoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSxpKzIpLDE2KTtcclxuICAgICAgICAgICAgcmV0ICs9IGI2NG1hcC5jaGFyQXQoYyA+PiAyKSArIGI2NG1hcC5jaGFyQXQoKGMgJiAzKSA8PCA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGI2NHBhZCkgd2hpbGUoKHJldC5sZW5ndGggJiAzKSA+IDApIHJldCArPSBiNjRwYWQ7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0sXHJcblxyXG4gICAgcGFkZGluZyhzdHIpIHtcclxuICAgICAgICB2YXIgbW9kID0gKHN0ci5sZW5ndGggJSA0KTtcclxuICAgICAgICB2YXIgcGFkID0gNCAtIG1vZDtcclxuXHJcbiAgICAgICAgaWYgKG1vZCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0ciArIChuZXcgQXJyYXkoMSArIHBhZCkpLmpvaW4oJz0nKTtcclxuICAgIH0sXHJcblxyXG4gICAgYnl0ZUFycmF5VG9IZXgocmF3KSB7XHJcbiAgICAgICAgdmFyIEhFWCA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhdy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgX2hleCA9IHJhd1tpXS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIEhFWCArPSAoX2hleC5sZW5ndGggPT09IDIgPyBfaGV4IDogJzAnICsgX2hleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gSEVYO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWNvZGVUb0hFWChzdHIpIHtcclxuICAgICAgICByZXR1cm4gQmFzZTY0LmJ5dGVBcnJheVRvSGV4KGJhc2U2NEpzLnRvQnl0ZUFycmF5KEJhc2U2NC5wYWRkaW5nKHN0cikpKTtcclxuICAgIH0sXHJcblxyXG4gICAgYmFzZTY0VG9CYXNlNjRVcmwocykge1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoLz0vZywgXCJcIik7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvXFwrL2csIFwiLVwiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC9cXC8vZywgXCJfXCIpO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cmxEZWNvZGUoc3RyKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLy0vZywgJysnKSAvLyBDb252ZXJ0ICctJyB0byAnKydcclxuICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJy8nKSAvLyBDb252ZXJ0ICdfJyB0byAnLydcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xccy9nLCAnICcpOyAvLyBDb252ZXJ0ICdcXHMnIHRvICcgJ1xyXG5cclxuICAgICAgICByZXR1cm4gYXRvYihzdHIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbnZhciBEaWdlc3RJbmZvSGVhZCA9IHtcclxuICAgIHNoYTE6ICczMDIxMzAwOTA2MDUyYjBlMDMwMjFhMDUwMDA0MTQnLFxyXG4gICAgc2hhMjI0OiAnMzAyZDMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjA0MDUwMDA0MWMnLFxyXG4gICAgc2hhMjU2OiAnMzAzMTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAxMDUwMDA0MjAnLFxyXG4gICAgc2hhMzg0OiAnMzA0MTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAyMDUwMDA0MzAnLFxyXG4gICAgc2hhNTEyOiAnMzA1MTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAzMDUwMDA0NDAnLFxyXG4gICAgbWQyOiAnMzAyMDMwMGMwNjA4MmE4NjQ4ODZmNzBkMDIwMjA1MDAwNDEwJyxcclxuICAgIG1kNTogJzMwMjAzMDBjMDYwODJhODY0ODg2ZjcwZDAyMDUwNTAwMDQxMCcsXHJcbiAgICByaXBlbWQxNjA6ICczMDIxMzAwOTA2MDUyYjI0MDMwMjAxMDUwMDA0MTQnXHJcbn07XHJcblxyXG52YXIgRGlnZXN0QWxncyA9IHtcclxuICAgIHNoYTI1NjogU0hBMjU2LFxyXG4gICAgU0hBMjU2OlNIQTI1NlxyXG59O1xyXG5cclxuZnVuY3Rpb24gUlNBVmVyaWZpZXIobW9kdWx1cywgZXhwKSB7XHJcbiAgICB0aGlzLm4gPSBudWxsO1xyXG4gICAgdGhpcy5lID0gMDtcclxuXHJcbiAgICBpZiAobW9kdWx1cyAhPSBudWxsICYmIGV4cCAhPSBudWxsICYmIG1vZHVsdXMubGVuZ3RoID4gMCAmJiBleHAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMubiA9IG5ldyBCaWdJbnRlZ2VyKG1vZHVsdXMsIDE2KTtcclxuICAgICAgICB0aGlzLmUgPSBwYXJzZUludChleHAsIDE2KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGtleSBkYXRhJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFsZ29yaXRobUZyb21EaWdlc3QoaERpZ2VzdEluZm8pIHtcclxuICAgIGZvciAodmFyIGFsZ05hbWUgaW4gRGlnZXN0SW5mb0hlYWQpIHtcclxuICAgICAgICB2YXIgaGVhZCA9IERpZ2VzdEluZm9IZWFkW2FsZ05hbWVdO1xyXG4gICAgICAgIHZhciBsZW4gPSBoZWFkLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGhEaWdlc3RJbmZvLnN1YnN0cmluZygwLCBsZW4pID09PSBoZWFkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhbGc6IGFsZ05hbWUsXHJcbiAgICAgICAgICAgICAgICBoYXNoOiBoRGlnZXN0SW5mby5zdWJzdHJpbmcobGVuKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufVxyXG5cclxuXHJcblJTQVZlcmlmaWVyLnByb3RvdHlwZS52ZXJpZnkgPSBmdW5jdGlvbiAobXNnLCBlbmNzaWcpIHtcclxuICAgIGVuY3NpZyA9IEJhc2U2NC5kZWNvZGVUb0hFWChlbmNzaWcpO1xyXG4gICAgZW5jc2lnID0gZW5jc2lnLnJlcGxhY2UoL1teMC05YS1mXXxbXFxzXFxuXV0vaWcsICcnKTtcclxuXHJcbiAgICB2YXIgc2lnID0gbmV3IEJpZ0ludGVnZXIoZW5jc2lnLCAxNik7XHJcblxyXG4gICAgaWYgKHNpZy5iaXRMZW5ndGgoKSA+IHRoaXMubi5iaXRMZW5ndGgoKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2lnbmF0dXJlIGRvZXMgbm90IG1hdGNoIHdpdGggdGhlIGtleSBtb2R1bHVzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkZWNyeXB0ZWRTaWcgPSBzaWcubW9kUG93SW50KHRoaXMuZSwgdGhpcy5uKTtcclxuICAgIHZhciBkaWdlc3QgPSBkZWNyeXB0ZWRTaWcudG9TdHJpbmcoMTYpLnJlcGxhY2UoL14xZiswMC8sICcnKTtcclxuICAgIHZhciBkaWdlc3RJbmZvID0gZ2V0QWxnb3JpdGhtRnJvbURpZ2VzdChkaWdlc3QpO1xyXG5cclxuICAgIGlmIChkaWdlc3RJbmZvLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIURpZ2VzdEFsZ3MuaGFzT3duUHJvcGVydHkoZGlnZXN0SW5mby5hbGcpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYXNoaW5nIGFsZ29yaXRobSBpcyBub3Qgc3VwcG9ydGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtc2dIYXNoID0gRGlnZXN0QWxnc1tkaWdlc3RJbmZvLmFsZ10obXNnKS50b1N0cmluZygpO1xyXG4gICAgcmV0dXJuIChkaWdlc3RJbmZvLmhhc2ggPT09IG1zZ0hhc2gpO1xyXG59O1xyXG5cclxuY29uc3QgQWxsb3dlZFNpZ25pbmdBbGdzID0gWydSUzI1NiddO1xyXG5cclxuY29uc3QgandzID0ge1xyXG4gICAgSldTOiB7XHJcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIHZhciBoZWFkZXI7XHJcbiAgICAgICAgICAgIHZhciBwYXlsb2FkO1xyXG5cclxuICAgICAgICAgICAgLy8gVGhpcyBkaXZlcmdlcyBmcm9tIEF1dGgwJ3MgaW1wbGVtZW50YXRpb24sIHdoaWNoIHRocm93cyByYXRoZXIgdGhhblxyXG4gICAgICAgICAgICAvLyByZXR1cm5pbmcgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIgPSBKU09OLnBhcnNlKEJhc2U2NC51cmxEZWNvZGUocGFydHNbMF0pKTtcclxuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKEJhc2U2NC51cmxEZWNvZGUocGFydHNbMV0pKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignVG9rZW4gaGVhZGVyIG9yIHBheWxvYWQgaXMgbm90IHZhbGlkIEpTT04nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlck9iajogaGVhZGVyLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZE9iajogcGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcmlmeTogZnVuY3Rpb24oand0LCBrZXksIGFsbG93ZWRTaWduaW5nQWxncyA9IFtdKSB7XHJcbiAgICAgICAgICAgIGFsbG93ZWRTaWduaW5nQWxncy5mb3JFYWNoKChhbGcpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChBbGxvd2VkU2lnbmluZ0FsZ3MuaW5kZXhPZihhbGcpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaWduaW5nIGFsZ29yaXRobTogJyArIGFsZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgdmVyaWZ5ID0gbmV3IFJTQVZlcmlmaWVyKGtleS5uLCBrZXkuZSk7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGp3dC5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGhlYWRlckFuZFBheWxvYWQgPSBbcGFydHNbMF0sIHBhcnRzWzFdXS5qb2luKCcuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZXJpZnkudmVyaWZ5KGhlYWRlckFuZFBheWxvYWQsIHBhcnRzWzJdKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IEtleVV0aWwgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgZGVjb2RlZCBrZXlzIGluIEhleCBmb3JtYXQgZm9yIHVzZSBpbiBjcnlwdG8gZnVuY3Rpb25zLlxyXG4gICAgICogU3VwcG9ydHMgbW9kdWx1cy9leHBvbmVudC1zdHlsZSBrZXlzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBrZXkgdGhlIHNlY3VyaXR5IGtleVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0S2V5KGtleSkge1xyXG4gICAgICAgIGlmIChrZXkua3R5ID09PSAnUlNBJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZTogQmFzZTY0LmRlY29kZVRvSEVYKGtleS5lKSxcclxuICAgICAgICAgICAgICAgIG46IEJhc2U2NC5kZWNvZGVUb0hFWChrZXkubiksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBYNTA5ID0ge1xyXG4gICAgZ2V0UHVibGljS2V5RnJvbUNlcnRQRU06IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkLiBVc2UgdGhlIGZ1bGwgb2lkYy1jbGllbnQgbGlicmFyeSBpZiB5b3UgbmVlZCBzdXBwb3J0IGZvciBYNTA5LicpO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNyeXB0byA9IHtcclxuICAgIFV0aWw6IHtcclxuICAgICAgICBoYXNoU3RyaW5nOiBmdW5jdGlvbih2YWx1ZSwgYWxnKSB7XHJcbiAgICAgICAgICAgIHZhciBoYXNoRnVuYyA9IERpZ2VzdEFsZ3NbYWxnXTtcclxuICAgICAgICAgICAgcmV0dXJuIGhhc2hGdW5jKHZhbHVlKS50b1N0cmluZygpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBoZXh0b2I2NHUocykge1xyXG4gICAgaWYgKHMubGVuZ3RoICUgMiA9PT0gMSkge1xyXG4gICAgICAgIHMgPSAnMCcgKyBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEJhc2U2NC5iYXNlNjRUb0Jhc2U2NFVybChCYXNlNjQuaGV4VG9CYXNlNjQocykpO1xyXG59XHJcblxyXG5jb25zdCB7YjY0dG9oZXh9ID0gQmFzZTY0O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGp3cyxcclxuICAgIEtleVV0aWwsXHJcbiAgICBYNTA5LFxyXG4gICAgY3J5cHRvLFxyXG4gICAgaGV4dG9iNjR1LFxyXG4gICAgYjY0dG9oZXgsXHJcbiAgICBBbGxvd2VkU2lnbmluZ0FsZ3NcclxufTtcclxuIiwiLyoqXHJcbiAqIEdlbmVyYXRlcyBSRkM0MTIyIHZlcnNpb24gNCBndWlkICgpXHJcbiAqL1xyXG5cclxudmFyIGNyeXB0byA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyAod2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG8pIDogbnVsbDtcclxuXHJcbmZ1bmN0aW9uIF9jcnlwdG9VdWlkdjQoKSB7XHJcbiAgcmV0dXJuIChbMWU3XSstMWUzKy00ZTMrLThlMystMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYyA9PlxyXG4gICAgKGMgXiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmIDE1ID4+IGMgLyA0KS50b1N0cmluZygxNilcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF91dWlkdjQoKSB7XHJcbiAgICByZXR1cm4gKFsxZTddKy0xZTMrLTRlMystOGUzKy0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+XHJcbiAgICAoYyBeIE1hdGgucmFuZG9tKCkgKiAxNiA+PiBjIC8gNCkudG9TdHJpbmcoMTYpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5kb20oKSB7XHJcbiAgdmFyIGhhc0NyeXB0byA9IGNyeXB0byAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8gIT09IG51bGw7XHJcbiAgdmFyIGhhc1JhbmRvbVZhbHVlcyA9IGhhc0NyeXB0byAmJiAodHlwZW9mKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpICE9ICd1bmRlZmluZWQnKTsgIFxyXG4gIHZhciB1dWlkID0gaGFzUmFuZG9tVmFsdWVzID8gX2NyeXB0b1V1aWR2NCA6IF91dWlkdjQ7XHJcbiAgcmV0dXJuIHV1aWQoKS5yZXBsYWNlKC8tL2csICcnKTtcclxufVxyXG4iLCJjb25zdCBWZXJzaW9uID0gXCIxLjExLjAtYmV0YS4xXCI7IGV4cG9ydCB7VmVyc2lvbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
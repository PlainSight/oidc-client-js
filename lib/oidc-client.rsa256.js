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
        console.log('Received message from child ' + JSON.stringify(e));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNibi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWNjZXNzVG9rZW5FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoZWNrU2Vzc2lvbklGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZG92YUlGcmFtZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZG92YVBvcHVwTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9Db3Jkb3ZhUG9wdXBXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9yUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lGcmFtZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUZyYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9Jbk1lbW9yeVdlYlN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pvc2VVdGlsSW1wbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSm9zZVV0aWxSc2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pzb25TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Mb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01ldGFkYXRhU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2lkY0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2lkY0NsaWVudFNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9Qb3B1cE5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlZGlyZWN0TmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNwb25zZVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2Vzc2lvbk1vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWduaW5TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbm91dFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25vdXRSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lsZW50UmVuZXdTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rva2VuQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2tlblJldm9jYXRpb25DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VybFV0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJJbmZvU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJNYW5hZ2VyRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyTWFuYWdlclNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3J5cHRvL3JzYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZG9tLmpzIiwid2VicGFjazovLy8uL3ZlcnNpb24uanMiXSwibmFtZXMiOlsiVmVyc2lvbiIsIkxvZyIsIk9pZGNDbGllbnQiLCJPaWRjQ2xpZW50U2V0dGluZ3MiLCJXZWJTdG9yYWdlU3RhdGVTdG9yZSIsIkluTWVtb3J5V2ViU3RvcmFnZSIsIlVzZXJNYW5hZ2VyIiwiQWNjZXNzVG9rZW5FdmVudHMiLCJNZXRhZGF0YVNlcnZpY2UiLCJDb3Jkb3ZhUG9wdXBOYXZpZ2F0b3IiLCJDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yIiwiQ2hlY2tTZXNzaW9uSUZyYW1lIiwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50IiwiU2Vzc2lvbk1vbml0b3IiLCJHbG9iYWwiLCJVc2VyIiwiRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUiLCJhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXIiLCJUaW1lciIsImFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyIiwiX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiX2FjY2Vzc1Rva2VuRXhwaXJpbmciLCJfYWNjZXNzVG9rZW5FeHBpcmVkIiwibG9hZCIsImNvbnRhaW5lciIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNfaW4iLCJ1bmRlZmluZWQiLCJkdXJhdGlvbiIsImRlYnVnIiwiZXhwaXJpbmciLCJpbml0IiwiY2FuY2VsIiwiZXhwaXJlZCIsInVubG9hZCIsImFkZEFjY2Vzc1Rva2VuRXhwaXJpbmciLCJjYiIsImFkZEhhbmRsZXIiLCJyZW1vdmVBY2Nlc3NUb2tlbkV4cGlyaW5nIiwicmVtb3ZlSGFuZGxlciIsImFkZEFjY2Vzc1Rva2VuRXhwaXJlZCIsInJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJlZCIsIkRlZmF1bHRJbnRlcnZhbCIsImNhbGxiYWNrIiwiY2xpZW50X2lkIiwidXJsIiwiaW50ZXJ2YWwiLCJzdG9wT25FcnJvciIsIl9jYWxsYmFjayIsIl9jbGllbnRfaWQiLCJfdXJsIiwiX2ludGVydmFsIiwiX3N0b3BPbkVycm9yIiwiaWR4IiwiaW5kZXhPZiIsIl9mcmFtZV9vcmlnaW4iLCJzdWJzdHIiLCJfZnJhbWUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsIlByb21pc2UiLCJyZXNvbHZlIiwib25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiX2JvdW5kTWVzc2FnZUV2ZW50IiwiX21lc3NhZ2UiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJvcmlnaW4iLCJzb3VyY2UiLCJjb250ZW50V2luZG93IiwiZGF0YSIsImVycm9yIiwic3RvcCIsInN0YXJ0Iiwic2Vzc2lvbl9zdGF0ZSIsIl9zZXNzaW9uX3N0YXRlIiwic2VuZCIsInBvc3RNZXNzYWdlIiwiX3RpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicHJlcGFyZSIsInBhcmFtcyIsInBvcHVwV2luZG93RmVhdHVyZXMiLCJwb3B1cCIsIkNvcmRvdmFQb3B1cFdpbmRvdyIsIkRlZmF1bHRQb3B1cEZlYXR1cmVzIiwiRGVmYXVsdFBvcHVwVGFyZ2V0IiwiX3Byb21pc2UiLCJyZWplY3QiLCJfcmVzb2x2ZSIsIl9yZWplY3QiLCJmZWF0dXJlcyIsInRhcmdldCIsInBvcHVwV2luZG93VGFyZ2V0IiwicmVkaXJlY3RfdXJpIiwic3RhcnRVcmwiLCJfaXNJbkFwcEJyb3dzZXJJbnN0YWxsZWQiLCJjb3Jkb3ZhTWV0YWRhdGEiLCJzb21lIiwibmFtZSIsImhhc093blByb3BlcnR5IiwibmF2aWdhdGUiLCJfZXJyb3IiLCJjb3Jkb3ZhIiwicmVxdWlyZSIsIm1ldGFkYXRhIiwiX3BvcHVwIiwiSW5BcHBCcm93c2VyIiwib3BlbiIsIl9leGl0Q2FsbGJhY2tFdmVudCIsIl9leGl0Q2FsbGJhY2siLCJfbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCIsIl9sb2FkU3RhcnRDYWxsYmFjayIsInByb21pc2UiLCJldmVudCIsIl9zdWNjZXNzIiwibWVzc2FnZSIsIl9jbGVhbnVwIiwiRXJyb3IiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJFcnJvclJlc3BvbnNlIiwiZXJyb3JfZGVzY3JpcHRpb24iLCJlcnJvcl91cmkiLCJzdGF0ZSIsIkV2ZW50IiwiX25hbWUiLCJfY2FsbGJhY2tzIiwicHVzaCIsImZpbmRJbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJyYWlzZSIsImkiLCJsZW5ndGgiLCJ0aW1lciIsImhhbmRsZSIsInRlc3RpbmciLCJyZXF1ZXN0IiwiX3Rlc3RpbmciLCJzZXRYTUxIdHRwUmVxdWVzdCIsIm5ld1JlcXVlc3QiLCJsb2NhdGlvbiIsImxvY2FsU3RvcmFnZSIsInNlc3Npb25TdG9yYWdlIiwiWE1MSHR0cFJlcXVlc3QiLCJJRnJhbWVOYXZpZ2F0b3IiLCJmcmFtZSIsIklGcmFtZVdpbmRvdyIsIm5vdGlmeVBhcmVudCIsIkRlZmF1bHRUaW1lb3V0IiwidGltZW91dCIsInNpbGVudFJlcXVlc3RUaW1lb3V0Iiwic2V0VGltZW91dCIsIl90aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIl9vcmlnaW4iLCJocmVmIiwicHJvdG9jb2wiLCJob3N0IiwicGFyZW50IiwiX2RhdGEiLCJnZXRJdGVtIiwia2V5Iiwic2V0SXRlbSIsInZhbHVlIiwicmVtb3ZlSXRlbSIsImluZGV4IiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldEpvc2VVdGlsIiwiandzIiwiS2V5VXRpbCIsIlg1MDkiLCJjcnlwdG8iLCJoZXh0b2I2NHUiLCJiNjR0b2hleCIsIkFsbG93ZWRTaWduaW5nQWxncyIsInBhcnNlSnd0Iiwiand0IiwidG9rZW4iLCJKV1MiLCJwYXJzZSIsImhlYWRlciIsImhlYWRlck9iaiIsInBheWxvYWQiLCJwYXlsb2FkT2JqIiwidmFsaWRhdGVKd3QiLCJpc3N1ZXIiLCJhdWRpZW5jZSIsImNsb2NrU2tldyIsIm5vdyIsInRpbWVJbnNlbnNpdGl2ZSIsImt0eSIsIm4iLCJnZXRLZXkiLCJ4NWMiLCJoZXgiLCJnZXRQdWJsaWNLZXlGcm9tQ2VydEhleCIsImNydiIsIngiLCJ5IiwiSm9zZVV0aWwiLCJfdmFsaWRhdGVKd3QiLCJ2YWxpZGF0ZUp3dEF0dHJpYnV0ZXMiLCJwYXJzZUludCIsIkRhdGUiLCJpc3MiLCJhdWQiLCJ2YWxpZEF1ZGllbmNlIiwiQXJyYXkiLCJpc0FycmF5IiwiYXpwIiwibG93ZXJOb3ciLCJ1cHBlck5vdyIsImlhdCIsIm5iZiIsImV4cCIsInRoZW4iLCJ2ZXJpZnkiLCJoYXNoU3RyaW5nIiwiYWxnIiwiVXRpbCIsImhleFRvQmFzZTY0VXJsIiwiSnNvblNlcnZpY2UiLCJhZGRpdGlvbmFsQ29udGVudFR5cGVzIiwiWE1MSHR0cFJlcXVlc3RDdG9yIiwiand0SGFuZGxlciIsIl9jb250ZW50VHlwZXMiLCJzbGljZSIsIl9YTUxIdHRwUmVxdWVzdCIsIl9qd3RIYW5kbGVyIiwiZ2V0SnNvbiIsInJlcSIsImFsbG93ZWRDb250ZW50VHlwZXMiLCJzdGF0dXMiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiZm91bmQiLCJmaW5kIiwic3RhcnRzV2l0aCIsInJlc3BvbnNlVGV4dCIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwic2V0UmVxdWVzdEhlYWRlciIsInBvc3RGb3JtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwibm9wTG9nZ2VyIiwiaW5mbyIsIndhcm4iLCJOT05FIiwiRVJST1IiLCJXQVJOIiwiSU5GTyIsIkRFQlVHIiwibG9nZ2VyIiwibGV2ZWwiLCJyZXNldCIsImFyZ3MiLCJhcHBseSIsImZyb20iLCJPaWRjTWV0YWRhdGFVcmxQYXRoIiwic2V0dGluZ3MiLCJKc29uU2VydmljZUN0b3IiLCJfc2V0dGluZ3MiLCJfanNvblNlcnZpY2UiLCJnZXRNZXRhZGF0YSIsIm1ldGFkYXRhVXJsIiwiZ2V0SXNzdWVyIiwiX2dldE1ldGFkYXRhUHJvcGVydHkiLCJnZXRBdXRob3JpemF0aW9uRW5kcG9pbnQiLCJnZXRVc2VySW5mb0VuZHBvaW50IiwiZ2V0VG9rZW5FbmRwb2ludCIsIm9wdGlvbmFsIiwiZ2V0Q2hlY2tTZXNzaW9uSWZyYW1lIiwiZ2V0RW5kU2Vzc2lvbkVuZHBvaW50IiwiZ2V0UmV2b2NhdGlvbkVuZHBvaW50IiwiZ2V0S2V5c0VuZHBvaW50IiwiZ2V0U2lnbmluZ0tleXMiLCJzaWduaW5nS2V5cyIsImp3a3NfdXJpIiwia2V5U2V0Iiwia2V5cyIsIl9tZXRhZGF0YVVybCIsImF1dGhvcml0eSIsImNyZWF0ZVNpZ25pblJlcXVlc3QiLCJyZXNwb25zZV90eXBlIiwic2NvcGUiLCJwcm9tcHQiLCJtYXhfYWdlIiwidWlfbG9jYWxlcyIsImlkX3Rva2VuX2hpbnQiLCJsb2dpbl9oaW50IiwiYWNyX3ZhbHVlcyIsInJlc291cmNlIiwicmVxdWVzdF91cmkiLCJyZXNwb25zZV9tb2RlIiwiZXh0cmFRdWVyeVBhcmFtcyIsImV4dHJhVG9rZW5QYXJhbXMiLCJyZXF1ZXN0X3R5cGUiLCJza2lwVXNlckluZm8iLCJzdGF0ZVN0b3JlIiwiU2lnbmluUmVxdWVzdCIsImlzQ29kZSIsIl9tZXRhZGF0YVNlcnZpY2UiLCJzaWduaW5SZXF1ZXN0IiwiY2xpZW50X3NlY3JldCIsInNpZ25pblN0YXRlIiwiX3N0YXRlU3RvcmUiLCJzZXQiLCJpZCIsInRvU3RvcmFnZVN0cmluZyIsInJlYWRTaWduaW5SZXNwb25zZVN0YXRlIiwicmVtb3ZlU3RhdGUiLCJ1c2VRdWVyeSIsImRlbGltaXRlciIsInJlc3BvbnNlIiwiU2lnbmluUmVzcG9uc2UiLCJzdGF0ZUFwaSIsInJlbW92ZSIsImdldCIsInN0b3JlZFN0YXRlU3RyaW5nIiwiU2lnbmluU3RhdGUiLCJmcm9tU3RvcmFnZVN0cmluZyIsInByb2Nlc3NTaWduaW5SZXNwb25zZSIsIl92YWxpZGF0b3IiLCJ2YWxpZGF0ZVNpZ25pblJlc3BvbnNlIiwiY3JlYXRlU2lnbm91dFJlcXVlc3QiLCJwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJTaWdub3V0UmVxdWVzdCIsInNpZ25vdXRTdGF0ZSIsInJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSIsIlNpZ25vdXRSZXNwb25zZSIsInN0YXRlS2V5IiwiU3RhdGUiLCJwcm9jZXNzU2lnbm91dFJlc3BvbnNlIiwidmFsaWRhdGVTaWdub3V0UmVzcG9uc2UiLCJjbGVhclN0YWxlU3RhdGUiLCJzdGFsZVN0YXRlQWdlIiwidmFsaWRhdG9yIiwibWV0YWRhdGFTZXJ2aWNlIiwiRGVmYXVsdFJlc3BvbnNlVHlwZSIsIkRlZmF1bHRTY29wZSIsIkRlZmF1bHRTdGFsZVN0YXRlQWdlIiwiRGVmYXVsdENsb2NrU2tld0luU2Vjb25kcyIsImZpbHRlclByb3RvY29sQ2xhaW1zIiwibG9hZFVzZXJJbmZvIiwidXNlckluZm9Kd3RJc3N1ZXIiLCJSZXNwb25zZVZhbGlkYXRvckN0b3IiLCJSZXNwb25zZVZhbGlkYXRvciIsIk1ldGFkYXRhU2VydmljZUN0b3IiLCJfYXV0aG9yaXR5IiwiX21ldGFkYXRhIiwiX3NpZ25pbmdLZXlzIiwiX2NsaWVudF9zZWNyZXQiLCJfcmVzcG9uc2VfdHlwZSIsIl9zY29wZSIsIl9yZWRpcmVjdF91cmkiLCJfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiX3Byb21wdCIsIl9kaXNwbGF5IiwiX21heF9hZ2UiLCJfdWlfbG9jYWxlcyIsIl9hY3JfdmFsdWVzIiwiX3Jlc291cmNlIiwiX3Jlc3BvbnNlX21vZGUiLCJfZmlsdGVyUHJvdG9jb2xDbGFpbXMiLCJfbG9hZFVzZXJJbmZvIiwiX3N0YWxlU3RhdGVBZ2UiLCJfY2xvY2tTa2V3IiwiX3VzZXJJbmZvSnd0SXNzdWVyIiwiX2V4dHJhUXVlcnlQYXJhbXMiLCJfZXh0cmFUb2tlblBhcmFtcyIsIlBvcHVwTmF2aWdhdG9yIiwiUG9wdXBXaW5kb3ciLCJrZWVwT3BlbiIsIm5vdGlmeU9wZW5lciIsIkNoZWNrRm9yUG9wdXBDbG9zZWRJbnRlcnZhbCIsIl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIiLCJfY2hlY2tGb3JQb3B1cENsb3NlZCIsIl9pZCIsImZvY3VzIiwiY2xvc2VkIiwib3BlbmVyIiwiVXJsVXRpbGl0eSIsInBhcnNlVXJsRnJhZ21lbnQiLCJSZWRpcmVjdE5hdmlnYXRvciIsInVzZVJlcGxhY2VUb05hdmlnYXRlIiwicmVwbGFjZSIsIlByb3RvY29sQ2xhaW1zIiwiVXNlckluZm9TZXJ2aWNlQ3RvciIsIlVzZXJJbmZvU2VydmljZSIsImpvc2VVdGlsIiwiVG9rZW5DbGllbnRDdG9yIiwiVG9rZW5DbGllbnQiLCJfdXNlckluZm9TZXJ2aWNlIiwiX2pvc2VVdGlsIiwiX3Rva2VuQ2xpZW50IiwiX3Byb2Nlc3NTaWduaW5QYXJhbXMiLCJfdmFsaWRhdGVUb2tlbnMiLCJfcHJvY2Vzc0NsYWltcyIsIm5vbmNlIiwiaWRfdG9rZW4iLCJjb2RlX3ZlcmlmaWVyIiwiY29kZSIsImlzT3BlbklkQ29ubmVjdCIsInByb2ZpbGUiLCJnZXRDbGFpbXMiLCJjbGFpbXMiLCJzdWIiLCJfbWVyZ2VDbGFpbXMiLCJjbGFpbXMxIiwiY2xhaW1zMiIsInJlc3VsdCIsImFzc2lnbiIsInZhbHVlcyIsImZvckVhY2giLCJ0eXBlIiwiX3Byb2Nlc3NDb2RlIiwiX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuIiwiX3ZhbGlkYXRlSWRUb2tlbiIsImV4Y2hhbmdlQ29kZSIsInRva2VuUmVzcG9uc2UiLCJfdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlcyIsImNsb2NrU2tld0luU2Vjb25kcyIsIl92YWxpZGF0ZUFjY2Vzc1Rva2VuIiwia2lkIiwiX2ZpbHRlckJ5QWxnIiwiZmlsdGVyIiwiYXRfaGFzaCIsImhhc2hBbGciLCJoYXNoQml0cyIsInNoYSIsImhhc2giLCJsZWZ0IiwibGVmdF9iNjR1IiwidXNlck1hbmFnZXIiLCJDaGVja1Nlc3Npb25JRnJhbWVDdG9yIiwiX3VzZXJNYW5hZ2VyIiwiX0NoZWNrU2Vzc2lvbklGcmFtZUN0b3IiLCJldmVudHMiLCJhZGRVc2VyTG9hZGVkIiwiX3N0YXJ0IiwiYWRkVXNlclVubG9hZGVkIiwiX3N0b3AiLCJnZXRVc2VyIiwidXNlciIsIm1vbml0b3JBbm9ueW1vdXNTZXNzaW9uIiwicXVlcnlTZXNzaW9uU3RhdHVzIiwidG1wVXNlciIsInNlc3Npb24iLCJzaWQiLCJjYXRjaCIsImVyciIsIl9zdWIiLCJfc2lkIiwiX2NoZWNrU2Vzc2lvbklGcmFtZSIsIl9jaGVja1Nlc3Npb25JbnRlcnZhbCIsIl9zdG9wQ2hlY2tTZXNzaW9uT25FcnJvciIsInRpbWVySGFuZGxlIiwicmFpc2VFdmVudCIsIl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCIsIl9yYWlzZVVzZXJTaWduZWRPdXQiLCJfcmFpc2VVc2VyU2lnbmVkSW4iLCJjaGVja1Nlc3Npb25JbnRlcnZhbCIsInN0b3BDaGVja1Nlc3Npb25PbkVycm9yIiwib2lkYyIsImlzT2lkYyIsImFkZFF1ZXJ5UGFyYW0iLCJjb2RlX2NoYWxsZW5nZSIsInNwbGl0IiwiaXNPQXV0aCIsIk9pZGNTY29wZSIsInRva2VuX3R5cGUiLCJleHBpcmVzX2F0Iiwic2NvcGVzIiwiYXJndW1lbnRzIiwiX25vbmNlIiwiX2NvZGVfdmVyaWZpZXIiLCJfY29kZV9jaGFsbGVuZ2UiLCJfc2tpcFVzZXJJbmZvIiwiY3JlYXRlZCIsInN0b3JhZ2VTdHJpbmciLCJTaWxlbnRSZW5ld1NlcnZpY2UiLCJfdG9rZW5FeHBpcmluZyIsInNpZ25pblNpbGVudCIsIl9yYWlzZVNpbGVudFJlbmV3RXJyb3IiLCJfY3JlYXRlZCIsIl9yZXF1ZXN0X3R5cGUiLCJzdG9yYWdlIiwiYWdlIiwiY3V0b2ZmIiwiZ2V0QWxsS2V5cyIsInByb21pc2VzIiwicCIsImFsbCIsIlRpbWVyRHVyYXRpb24iLCJub3dGdW5jIiwiX25vd0Z1bmMiLCJleHBpcmF0aW9uIiwiX3RpbWVySGFuZGxlIiwiX2V4cGlyYXRpb24iLCJ0aW1lckR1cmF0aW9uIiwiZGlmZiIsImdyYW50X3R5cGUiLCJleGNoYW5nZVJlZnJlc2hUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJBY2Nlc3NUb2tlblR5cGVIaW50IiwiUmVmcmVzaFRva2VuVHlwZUhpbnQiLCJfWE1MSHR0cFJlcXVlc3RDdG9yIiwicmV2b2tlIiwicmVxdWlyZWQiLCJfcmV2b2tlIiwieGhyIiwiZ2xvYmFsIiwibGFzdEluZGV4T2YiLCJyZWdleCIsIm0iLCJjb3VudGVyIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCIsInByb3AiLCJfZ2V0Q2xhaW1zRnJvbUp3dCIsImlzc3VlclByb21pc2UiLCJTaWxlbnRSZW5ld1NlcnZpY2VDdG9yIiwiU2Vzc2lvbk1vbml0b3JDdG9yIiwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3RvciIsIlVzZXJNYW5hZ2VyU2V0dGluZ3MiLCJfZXZlbnRzIiwiVXNlck1hbmFnZXJFdmVudHMiLCJfc2lsZW50UmVuZXdTZXJ2aWNlIiwiYXV0b21hdGljU2lsZW50UmVuZXciLCJzdGFydFNpbGVudFJlbmV3IiwibW9uaXRvclNlc3Npb24iLCJfc2Vzc2lvbk1vbml0b3IiLCJfdG9rZW5SZXZvY2F0aW9uQ2xpZW50IiwiX2xvYWRVc2VyIiwicmVtb3ZlVXNlciIsInN0b3JlVXNlciIsInNpZ25pblJlZGlyZWN0IiwibmF2UGFyYW1zIiwiX3NpZ25pblN0YXJ0IiwiX3JlZGlyZWN0TmF2aWdhdG9yIiwic2lnbmluUmVkaXJlY3RDYWxsYmFjayIsIl9zaWduaW5FbmQiLCJzaWduaW5Qb3B1cCIsInBvcHVwX3JlZGlyZWN0X3VyaSIsIl9zaWduaW4iLCJfcG9wdXBOYXZpZ2F0b3IiLCJzaWduaW5Qb3B1cENhbGxiYWNrIiwiX3NpZ25pbkNhbGxiYWNrIiwiX3VzZVJlZnJlc2hUb2tlbiIsImluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyIsInZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyIsImN1cnJlbnRfc3ViIiwiX3NpZ25pblNpbGVudElmcmFtZSIsImlkVG9rZW5WYWxpZGF0aW9uIiwiX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbiIsImF1dGhfdGltZSIsInNpbGVudF9yZWRpcmVjdF91cmkiLCJfaWZyYW1lTmF2aWdhdG9yIiwic2lnbmluU2lsZW50Q2FsbGJhY2siLCJzaWduaW5DYWxsYmFjayIsInNpZ25vdXRDYWxsYmFjayIsInNpZ25vdXRSZWRpcmVjdENhbGxiYWNrIiwic2lnbm91dFBvcHVwQ2FsbGJhY2siLCJxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSIsIm5hdlJlc3BvbnNlIiwic2lnbmluUmVzcG9uc2UiLCJuYXZpZ2F0b3IiLCJuYXZpZ2F0b3JQYXJhbXMiLCJzaWdub3V0UmVkaXJlY3QiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJfc2lnbm91dFN0YXJ0IiwiX3NpZ25vdXRFbmQiLCJzaWdub3V0UG9wdXAiLCJwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfc2lnbm91dCIsInJldm9rZVByb21pc2UiLCJyZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCIsIl9yZXZva2VJbnRlcm5hbCIsInNpZ25vdXRSZXF1ZXN0Iiwic2lnbm91dFJlc3BvbnNlIiwicmV2b2tlQWNjZXNzVG9rZW4iLCJzdWNjZXNzIiwiX3Jldm9rZUFjY2Vzc1Rva2VuSW50ZXJuYWwiLCJfcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwiLCJhdFN1Y2Nlc3MiLCJydFN1Y2Nlc3MiLCJzdG9wU2lsZW50UmVuZXciLCJfdXNlclN0b3JlIiwiX3VzZXJTdG9yZUtleSIsInJlZGlyZWN0TmF2aWdhdG9yIiwicG9wdXBOYXZpZ2F0b3IiLCJpZnJhbWVOYXZpZ2F0b3IiLCJ1c2VyU3RvcmUiLCJfdXNlckxvYWRlZCIsIl91c2VyVW5sb2FkZWQiLCJfc2lsZW50UmVuZXdFcnJvciIsIl91c2VyU2lnbmVkSW4iLCJfdXNlclNpZ25lZE91dCIsIl91c2VyU2Vzc2lvbkNoYW5nZWQiLCJyZW1vdmVVc2VyTG9hZGVkIiwicmVtb3ZlVXNlclVubG9hZGVkIiwiYWRkU2lsZW50UmVuZXdFcnJvciIsInJlbW92ZVNpbGVudFJlbmV3RXJyb3IiLCJhZGRVc2VyU2lnbmVkSW4iLCJyZW1vdmVVc2VyU2lnbmVkSW4iLCJhZGRVc2VyU2lnbmVkT3V0IiwicmVtb3ZlVXNlclNpZ25lZE91dCIsImFkZFVzZXJTZXNzaW9uQ2hhbmdlZCIsInJlbW92ZVVzZXJTZXNzaW9uQ2hhbmdlZCIsIkRlZmF1bHRDaGVja1Nlc3Npb25JbnRlcnZhbCIsInN0b3JlIiwiX3BvcHVwX3JlZGlyZWN0X3VyaSIsIl9wb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfcG9wdXBXaW5kb3dGZWF0dXJlcyIsIl9wb3B1cFdpbmRvd1RhcmdldCIsIl9zaWxlbnRfcmVkaXJlY3RfdXJpIiwiX3NpbGVudFJlcXVlc3RUaW1lb3V0IiwiX2F1dG9tYXRpY1NpbGVudFJlbmV3IiwiX3ZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyIsIl9pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXciLCJfbW9uaXRvclNlc3Npb24iLCJfbW9uaXRvckFub255bW91c1Nlc3Npb24iLCJfcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUiLCJfcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQiLCJwcmVmaXgiLCJfc3RvcmUiLCJfcHJlZml4IiwiQmlnSW50ZWdlciIsIkpTQk4iLCJiNjRtYXAiLCJiNjRwYWQiLCJCYXNlNjQiLCJzIiwicmV0IiwiayIsInNsb3AiLCJjaGFyQXQiLCJ2IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiaGV4VG9CYXNlNjQiLCJoIiwiYyIsInN1YnN0cmluZyIsInBhZGRpbmciLCJzdHIiLCJtb2QiLCJwYWQiLCJqb2luIiwiYnl0ZUFycmF5VG9IZXgiLCJyYXciLCJIRVgiLCJfaGV4IiwidG9TdHJpbmciLCJkZWNvZGVUb0hFWCIsImJhc2U2NEpzIiwidG9CeXRlQXJyYXkiLCJiYXNlNjRUb0Jhc2U2NFVybCIsInVybERlY29kZSIsImF0b2IiLCJEaWdlc3RJbmZvSGVhZCIsInNoYTEiLCJzaGEyMjQiLCJzaGEyNTYiLCJzaGEzODQiLCJzaGE1MTIiLCJtZDIiLCJtZDUiLCJyaXBlbWQxNjAiLCJEaWdlc3RBbGdzIiwiU0hBMjU2IiwiUlNBVmVyaWZpZXIiLCJtb2R1bHVzIiwiZ2V0QWxnb3JpdGhtRnJvbURpZ2VzdCIsImhEaWdlc3RJbmZvIiwiYWxnTmFtZSIsImhlYWQiLCJsZW4iLCJwcm90b3R5cGUiLCJtc2ciLCJlbmNzaWciLCJzaWciLCJiaXRMZW5ndGgiLCJkZWNyeXB0ZWRTaWciLCJtb2RQb3dJbnQiLCJkaWdlc3QiLCJkaWdlc3RJbmZvIiwibXNnSGFzaCIsInBhcnRzIiwiYWxsb3dlZFNpZ25pbmdBbGdzIiwiaGVhZGVyQW5kUGF5bG9hZCIsImdldFB1YmxpY0tleUZyb21DZXJ0UEVNIiwiaGFzaEZ1bmMiLCJyYW5kb20iLCJtc0NyeXB0byIsIl9jcnlwdG9VdWlkdjQiLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50OEFycmF5IiwiX3V1aWR2NCIsIk1hdGgiLCJoYXNDcnlwdG8iLCJoYXNSYW5kb21WYWx1ZXMiLCJ1dWlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNB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QVN3QyxNQUFULEdBQWtCO0FBQy9CLE1BQUlPLFlBQVlqaEIsVUFBVSxXQUFWLElBQXlCQSxXQUFXLElBQXBEO0FBQ0EsTUFBSWtoQixrQkFBa0JELGFBQWMsT0FBT2poQixPQUFPNmdCLGVBQWQsSUFBa0MsV0FBdEU7QUFDQSxNQUFJTSxPQUFPRCxrQkFBa0JOLGFBQWxCLEdBQWtDRyxPQUE3QztBQUNBLFNBQU9JLE9BQU83VCxPQUFQLENBQWUsSUFBZixFQUFxQixFQUFyQixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRCxJQUFNdFosVUFBVSxlQUFoQixDLFFBQXlDQSxPLEdBQUFBLE8iLCJmaWxlIjoib2lkYy1jbGllbnQucnNhMjU2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL3NyYy9Mb2cuanMnO1xyXG5pbXBvcnQgeyBPaWRjQ2xpZW50IH0gZnJvbSAnLi9zcmMvT2lkY0NsaWVudC5qcyc7XHJcbmltcG9ydCB7IE9pZGNDbGllbnRTZXR0aW5ncyB9IGZyb20gJy4vc3JjL09pZGNDbGllbnRTZXR0aW5ncy5qcyc7XHJcbmltcG9ydCB7IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnLi9zcmMvV2ViU3RvcmFnZVN0YXRlU3RvcmUuanMnO1xyXG5pbXBvcnQgeyBJbk1lbW9yeVdlYlN0b3JhZ2UgfSBmcm9tICcuL3NyYy9Jbk1lbW9yeVdlYlN0b3JhZ2UuanMnO1xyXG5pbXBvcnQgeyBVc2VyTWFuYWdlciB9IGZyb20gJy4vc3JjL1VzZXJNYW5hZ2VyLmpzJztcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5FdmVudHMgfSBmcm9tICcuL3NyYy9BY2Nlc3NUb2tlbkV2ZW50cy5qcyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vc3JjL01ldGFkYXRhU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IENvcmRvdmFQb3B1cE5hdmlnYXRvciB9IGZyb20gJy4vc3JjL0NvcmRvdmFQb3B1cE5hdmlnYXRvci5qcyc7XHJcbmltcG9ydCB7IENvcmRvdmFJRnJhbWVOYXZpZ2F0b3IgfSBmcm9tICcuL3NyYy9Db3Jkb3ZhSUZyYW1lTmF2aWdhdG9yLmpzJztcclxuaW1wb3J0IHsgQ2hlY2tTZXNzaW9uSUZyYW1lIH0gZnJvbSAnLi9zcmMvQ2hlY2tTZXNzaW9uSUZyYW1lLmpzJztcclxuaW1wb3J0IHsgVG9rZW5SZXZvY2F0aW9uQ2xpZW50IH0gZnJvbSAnLi9zcmMvVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzJztcclxuaW1wb3J0IHsgU2Vzc2lvbk1vbml0b3IgfSBmcm9tICcuL3NyYy9TZXNzaW9uTW9uaXRvci5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vc3JjL0dsb2JhbC5qcyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3NyYy9Vc2VyLmpzJztcclxuXHJcbmltcG9ydCB7IFZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24uanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgVmVyc2lvbixcclxuICAgIExvZyxcclxuICAgIE9pZGNDbGllbnQsXHJcbiAgICBPaWRjQ2xpZW50U2V0dGluZ3MsXHJcbiAgICBXZWJTdG9yYWdlU3RhdGVTdG9yZSxcclxuICAgIEluTWVtb3J5V2ViU3RvcmFnZSxcclxuICAgIFVzZXJNYW5hZ2VyLFxyXG4gICAgQWNjZXNzVG9rZW5FdmVudHMsXHJcbiAgICBNZXRhZGF0YVNlcnZpY2UsXHJcbiAgICBDb3Jkb3ZhUG9wdXBOYXZpZ2F0b3IsXHJcbiAgICBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yLFxyXG4gICAgQ2hlY2tTZXNzaW9uSUZyYW1lLFxyXG4gICAgVG9rZW5SZXZvY2F0aW9uQ2xpZW50LFxyXG4gICAgU2Vzc2lvbk1vbml0b3IsXHJcbiAgICBHbG9iYWwsXHJcbiAgICBVc2VyXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdHJvb3QuQ3J5cHRvSlMgPSBmYWN0b3J5KCk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXG5cdC8qKlxuXHQgKiBDcnlwdG9KUyBjb3JlIGNvbXBvbmVudHMuXG5cdCAqL1xuXHR2YXIgQ3J5cHRvSlMgPSBDcnlwdG9KUyB8fCAoZnVuY3Rpb24gKE1hdGgsIHVuZGVmaW5lZCkge1xuXHQgICAgLypcblx0ICAgICAqIExvY2FsIHBvbHlmaWwgb2YgT2JqZWN0LmNyZWF0ZVxuXHQgICAgICovXG5cdCAgICB2YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIEYoKSB7fTtcblxuXHQgICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgICAgICAgIHZhciBzdWJ0eXBlO1xuXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gb2JqO1xuXG5cdCAgICAgICAgICAgIHN1YnR5cGUgPSBuZXcgRigpO1xuXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gbnVsbDtcblxuXHQgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICB9O1xuXHQgICAgfSgpKVxuXG5cdCAgICAvKipcblx0ICAgICAqIENyeXB0b0pTIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMaWJyYXJ5IG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfbGliID0gQy5saWIgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBCYXNlIG9iamVjdCBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlID0gKGZ1bmN0aW9uICgpIHtcblxuXG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG92ZXJyaWRlcyBQcm9wZXJ0aWVzIHRvIGNvcHkgaW50byB0aGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZScsXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICAgICAgbWV0aG9kOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNwYXduXG5cdCAgICAgICAgICAgICAgICB2YXIgc3VidHlwZSA9IGNyZWF0ZSh0aGlzKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gQXVnbWVudFxuXHQgICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUubWl4SW4ob3ZlcnJpZGVzKTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRlZmF1bHQgaW5pdGlhbGl6ZXJcblx0ICAgICAgICAgICAgICAgIGlmICghc3VidHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5pdCcpIHx8IHRoaXMuaW5pdCA9PT0gc3VidHlwZS5pbml0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlci5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZXIncyBwcm90b3R5cGUgaXMgdGhlIHN1YnR5cGUgb2JqZWN0XG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQucHJvdG90eXBlID0gc3VidHlwZTtcblxuXHQgICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHN1cGVydHlwZVxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIgPSB0aGlzO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogRXh0ZW5kcyB0aGlzIG9iamVjdCBhbmQgcnVucyB0aGUgaW5pdCBtZXRob2QuXG5cdCAgICAgICAgICAgICAqIEFyZ3VtZW50cyB0byBjcmVhdGUoKSB3aWxsIGJlIHBhc3NlZCB0byBpbml0KCkuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBpbnN0YW5jZSA9IE15VHlwZS5jcmVhdGUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5leHRlbmQoKTtcblx0ICAgICAgICAgICAgICAgIGluc3RhbmNlLmluaXQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIG9iamVjdC5cblx0ICAgICAgICAgICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHNvbWUgbG9naWMgd2hlbiB5b3VyIG9iamVjdHMgYXJlIGNyZWF0ZWQuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgICAgIC8vIC4uLlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDb3BpZXMgcHJvcGVydGllcyBpbnRvIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBtaXggaW4uXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICBNeVR5cGUubWl4SW4oe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnXG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIG1peEluOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIElFIHdvbid0IGNvcHkgdG9TdHJpbmcgdXNpbmcgdGhlIGxvb3AgYWJvdmVcblx0ICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy50b1N0cmluZyA9IHByb3BlcnRpZXMudG9TdHJpbmc7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGluc3RhbmNlLmNsb25lKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9IHdvcmRzIFRoZSBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2lnQnl0ZXMgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgKi9cblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXkgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSB3b3JkcyAoT3B0aW9uYWwpIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lnQnl0ZXMgKE9wdGlvbmFsKSBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoZSB3b3Jkcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKCk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10pO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddLCA2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAod29yZHMsIHNpZ0J5dGVzKSB7XG5cdCAgICAgICAgICAgIHdvcmRzID0gdGhpcy53b3JkcyA9IHdvcmRzIHx8IFtdO1xuXG5cdCAgICAgICAgICAgIGlmIChzaWdCeXRlcyAhPSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSBzaWdCeXRlcztcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSB3b3Jkcy5sZW5ndGggKiA0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIHRoaXMgd29yZCBhcnJheSB0byBhIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7RW5jb2Rlcn0gZW5jb2RlciAoT3B0aW9uYWwpIFRoZSBlbmNvZGluZyBzdHJhdGVneSB0byB1c2UuIERlZmF1bHQ6IENyeXB0b0pTLmVuYy5IZXhcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZ2lmaWVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkgKyAnJztcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZygpO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKGVuY29kZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIChlbmNvZGVyIHx8IEhleCkuc3RyaW5naWZ5KHRoaXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25jYXRlbmF0ZXMgYSB3b3JkIGFycmF5IHRvIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheTEuY29uY2F0KHdvcmRBcnJheTIpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHRoaXNXb3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0V29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGlzU2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHRoaXMuY2xhbXAoKTtcblxuXHQgICAgICAgICAgICAvLyBDb25jYXRcblx0ICAgICAgICAgICAgaWYgKHRoaXNTaWdCeXRlcyAlIDQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIGJ5dGUgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXRCeXRlID0gKHRoYXRXb3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gfD0gdGhhdEJ5dGUgPDwgKDI0IC0gKCh0aGlzU2lnQnl0ZXMgKyBpKSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSB3b3JkIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0U2lnQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaSkgPj4+IDJdID0gdGhhdFdvcmRzW2kgPj4+IDJdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgKz0gdGhhdFNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVtb3ZlcyBpbnNpZ25pZmljYW50IGJpdHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsYW1wOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wXG5cdCAgICAgICAgICAgIHdvcmRzW3NpZ0J5dGVzID4+PiAyXSAmPSAweGZmZmZmZmZmIDw8ICgzMiAtIChzaWdCeXRlcyAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIHdvcmRzLmxlbmd0aCA9IE1hdGguY2VpbChzaWdCeXRlcyAvIDQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gd29yZEFycmF5LmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS53b3JkcyA9IHRoaXMud29yZHMuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgd29yZCBhcnJheSBmaWxsZWQgd2l0aCByYW5kb20gYnl0ZXMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbkJ5dGVzIFRoZSBudW1iZXIgb2YgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcmFuZG9tIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LnJhbmRvbSgxNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiAobkJ5dGVzKSB7XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXG5cdCAgICAgICAgICAgIHZhciByID0gKGZ1bmN0aW9uIChtX3cpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBtX3cgPSBtX3c7XG5cdCAgICAgICAgICAgICAgICB2YXIgbV96ID0gMHgzYWRlNjhiMTtcblx0ICAgICAgICAgICAgICAgIHZhciBtYXNrID0gMHhmZmZmZmZmZjtcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICBtX3ogPSAoMHg5MDY5ICogKG1feiAmIDB4RkZGRikgKyAobV96ID4+IDB4MTApKSAmIG1hc2s7XG5cdCAgICAgICAgICAgICAgICAgICAgbV93ID0gKDB4NDY1MCAqIChtX3cgJiAweEZGRkYpICsgKG1fdyA+PiAweDEwKSkgJiBtYXNrO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAoKG1feiA8PCAweDEwKSArIG1fdykgJiBtYXNrO1xuXHQgICAgICAgICAgICAgICAgICAgIHJlc3VsdCAvPSAweDEwMDAwMDAwMDtcblx0ICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gMC41O1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKiAoTWF0aC5yYW5kb20oKSA+IC41ID8gMSA6IC0xKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSk7XG5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIHJjYWNoZTsgaSA8IG5CeXRlczsgaSArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgX3IgPSByKChyY2FjaGUgfHwgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwMDAwMCk7XG5cblx0ICAgICAgICAgICAgICAgIHJjYWNoZSA9IF9yKCkgKiAweDNhZGU2N2I3O1xuXHQgICAgICAgICAgICAgICAgd29yZHMucHVzaCgoX3IoKSAqIDB4MTAwMDAwMDAwKSB8IDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbkJ5dGVzKTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBFbmNvZGVyIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBIZXggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBIZXggPSBDX2VuYy5IZXggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGV4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkhleC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGhleENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgJiAweDBmKS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhleENoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIGhleCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhleFN0ciBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKGhleFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChoZXhTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGhleFN0ckxlbmd0aCA9IGhleFN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZXhTdHJMZW5ndGg7IGkgKz0gMikge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gM10gfD0gcGFyc2VJbnQoaGV4U3RyLnN1YnN0cihpLCAyKSwgMTYpIDw8ICgyNCAtIChpICUgOCkgKiA0KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGhleFN0ckxlbmd0aCAvIDIpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGF0aW4xIGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgTGF0aW4xID0gQ19lbmMuTGF0aW4xID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGxhdGluMVN0cmluZyA9IENyeXB0b0pTLmVuYy5MYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGxhdGluMUNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShiaXRlKSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbGF0aW4xQ2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgTGF0aW4xIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGF0aW4xU3RyIFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5MYXRpbjEucGFyc2UobGF0aW4xU3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGxhdGluMVN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xU3RyTGVuZ3RoID0gbGF0aW4xU3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhdGluMVN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAyXSB8PSAobGF0aW4xU3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmKSA8PCAoMjQgLSAoaSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBsYXRpbjFTdHJMZW5ndGgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogVVRGLTggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBVdGY4ID0gQ19lbmMuVXRmOCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgdXRmOFN0cmluZyA9IENyeXB0b0pTLmVuYy5VdGY4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpKSk7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkIFVURi04IGRhdGEnKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIFVURi04IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXRmOFN0ciBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHV0ZjhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAodXRmOFN0cikge1xuXHQgICAgICAgICAgICByZXR1cm4gTGF0aW4xLnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh1dGY4U3RyKSkpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgYnVmZmVyZWQgYmxvY2sgYWxnb3JpdGhtIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIFRoZSBwcm9wZXJ0eSBibG9ja1NpemUgbXVzdCBiZSBpbXBsZW1lbnRlZCBpbiBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IF9taW5CdWZmZXJTaXplIFRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgc2hvdWxkIGJlIGtlcHQgdW5wcm9jZXNzZWQgaW4gdGhlIGJ1ZmZlci4gRGVmYXVsdDogMFxuXHQgICAgICovXG5cdCAgICB2YXIgQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IENfbGliLkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgZGF0YSBidWZmZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFdvcmRBcnJheS5pbml0KCk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgPSAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBBZGRzIG5ldyBkYXRhIHRvIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgYnVmZmVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGFwcGVuZC4gU3RyaW5ncyBhcmUgY29udmVydGVkIHRvIGEgV29yZEFycmF5IHVzaW5nIFVURi04LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQoJ2RhdGEnKTtcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2FwcGVuZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gV29yZEFycmF5LCBlbHNlIGFzc3VtZSBXb3JkQXJyYXkgYWxyZWFkeVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgICAgIGRhdGEgPSBVdGY4LnBhcnNlKGRhdGEpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEuY29uY2F0KGRhdGEpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzICs9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFByb2Nlc3NlcyBhdmFpbGFibGUgZGF0YSBibG9ja3MuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBUaGlzIG1ldGhvZCBpbnZva2VzIF9kb1Byb2Nlc3NCbG9jayhvZmZzZXQpLCB3aGljaCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9GbHVzaCBXaGV0aGVyIGFsbCBibG9ja3MgYW5kIHBhcnRpYWwgYmxvY2tzIHNob3VsZCBiZSBwcm9jZXNzZWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBwcm9jZXNzZWQgZGF0YS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCk7XG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcyghISdmbHVzaCcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9wcm9jZXNzOiBmdW5jdGlvbiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGRhdGFTaWdCeXRlcyA9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBibG9ja3MgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CbG9ja3NSZWFkeSA9IGRhdGFTaWdCeXRlcyAvIGJsb2NrU2l6ZUJ5dGVzO1xuXHQgICAgICAgICAgICBpZiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgdXAgdG8gaW5jbHVkZSBwYXJ0aWFsIGJsb2Nrc1xuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5jZWlsKG5CbG9ja3NSZWFkeSk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCBkb3duIHRvIGluY2x1ZGUgb25seSBmdWxsIGJsb2Nrcyxcblx0ICAgICAgICAgICAgICAgIC8vIGxlc3MgdGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBtdXN0IHJlbWFpbiBpbiB0aGUgYnVmZmVyXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLm1heCgobkJsb2Nrc1JlYWR5IHwgMCkgLSB0aGlzLl9taW5CdWZmZXJTaXplLCAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvdW50IHdvcmRzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuV29yZHNSZWFkeSA9IG5CbG9ja3NSZWFkeSAqIGJsb2NrU2l6ZTtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBieXRlcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbkJ5dGVzUmVhZHkgPSBNYXRoLm1pbihuV29yZHNSZWFkeSAqIDQsIGRhdGFTaWdCeXRlcyk7XG5cblx0ICAgICAgICAgICAgLy8gUHJvY2VzcyBibG9ja3Ncblx0ICAgICAgICAgICAgaWYgKG5Xb3Jkc1JlYWR5KSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBuV29yZHNSZWFkeTsgb2Zmc2V0ICs9IGJsb2NrU2l6ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtYWxnb3JpdGhtIGxvZ2ljXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9Qcm9jZXNzQmxvY2soZGF0YVdvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc2VkV29yZHMgPSBkYXRhV29yZHMuc3BsaWNlKDAsIG5Xb3Jkc1JlYWR5KTtcblx0ICAgICAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gbkJ5dGVzUmVhZHk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQocHJvY2Vzc2VkV29yZHMsIG5CeXRlc1JlYWR5KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2RhdGEgPSB0aGlzLl9kYXRhLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfbWluQnVmZmVyU2l6ZTogMFxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgaGFzaGVyIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBibG9ja1NpemUgVGhlIG51bWJlciBvZiAzMi1iaXQgd29yZHMgdGhpcyBoYXNoZXIgb3BlcmF0ZXMgb24uIERlZmF1bHQ6IDE2ICg1MTIgYml0cylcblx0ICAgICAqL1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlciA9IEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCgpLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaGVyID0gQ3J5cHRvSlMuYWxnby5TSEEyNTYuY3JlYXRlKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBoYXNoZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGRhdGEgYnVmZmVyXG5cdCAgICAgICAgICAgIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB0aGlzLl9kb1Jlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFVwZGF0ZXMgdGhpcyBoYXNoZXIgd2l0aCBhIG1lc3NhZ2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgVGhlIG1lc3NhZ2UgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7SGFzaGVyfSBUaGlzIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXG5cdCAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgaGFzaFxuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBGaW5hbGl6ZXMgdGhlIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSAoT3B0aW9uYWwpIEEgZmluYWwgbWVzc2FnZSB1cGRhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBGaW5hbCBtZXNzYWdlIHVwZGF0ZVxuXHQgICAgICAgICAgICBpZiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLl9kb0ZpbmFsaXplKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogNTEyLzMyLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIGEgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byBjcmVhdGUgYSBoZWxwZXIgZm9yLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIFNIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGNmZykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBoYXNoZXIuaW5pdChjZmcpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIHVzZSBpbiB0aGlzIEhNQUMgaGVscGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIEhtYWNTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSG1hY0hlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGtleSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDX2FsZ28uSE1BQy5pbml0KGhhc2hlciwga2V5KS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbGdvcml0aG0gbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvID0ge307XG5cblx0ICAgIHJldHVybiBDO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUztcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uIChNYXRoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyO1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLy8gSW5pdGlhbGl6YXRpb24gYW5kIHJvdW5kIGNvbnN0YW50cyB0YWJsZXNcblx0ICAgIHZhciBIID0gW107XG5cdCAgICB2YXIgSyA9IFtdO1xuXG5cdCAgICAvLyBDb21wdXRlIGNvbnN0YW50c1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBpc1ByaW1lKG4pIHtcblx0ICAgICAgICAgICAgdmFyIHNxcnROID0gTWF0aC5zcXJ0KG4pO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBmYWN0b3IgPSAyOyBmYWN0b3IgPD0gc3FydE47IGZhY3RvcisrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoIShuICUgZmFjdG9yKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGZ1bmN0aW9uIGdldEZyYWN0aW9uYWxCaXRzKG4pIHtcblx0ICAgICAgICAgICAgcmV0dXJuICgobiAtIChuIHwgMCkpICogMHgxMDAwMDAwMDApIHwgMDtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICB2YXIgbiA9IDI7XG5cdCAgICAgICAgdmFyIG5QcmltZSA9IDA7XG5cdCAgICAgICAgd2hpbGUgKG5QcmltZSA8IDY0KSB7XG5cdCAgICAgICAgICAgIGlmIChpc1ByaW1lKG4pKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoblByaW1lIDwgOCkge1xuXHQgICAgICAgICAgICAgICAgICAgIEhbblByaW1lXSA9IGdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sIDEgLyAyKSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBLW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhNYXRoLnBvdyhuLCAxIC8gMykpO1xuXG5cdCAgICAgICAgICAgICAgICBuUHJpbWUrKztcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIG4rKztcblx0ICAgICAgICB9XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3Rcblx0ICAgIHZhciBXID0gW107XG5cblx0ICAgIC8qKlxuXHQgICAgICogU0hBLTI1NiBoYXNoIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFNIQTI1NiA9IENfYWxnby5TSEEyNTYgPSBIYXNoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFdvcmRBcnJheS5pbml0KEguc2xpY2UoMCkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIEggPSB0aGlzLl9oYXNoLndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFdvcmtpbmcgdmFyaWFibGVzXG5cdCAgICAgICAgICAgIHZhciBhID0gSFswXTtcblx0ICAgICAgICAgICAgdmFyIGIgPSBIWzFdO1xuXHQgICAgICAgICAgICB2YXIgYyA9IEhbMl07XG5cdCAgICAgICAgICAgIHZhciBkID0gSFszXTtcblx0ICAgICAgICAgICAgdmFyIGUgPSBIWzRdO1xuXHQgICAgICAgICAgICB2YXIgZiA9IEhbNV07XG5cdCAgICAgICAgICAgIHZhciBnID0gSFs2XTtcblx0ICAgICAgICAgICAgdmFyIGggPSBIWzddO1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGF0aW9uXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKGkgPCAxNikge1xuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBNW29mZnNldCArIGldIHwgMDtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMHggPSBXW2kgLSAxNV07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMCAgPSAoKGdhbW1hMHggPDwgMjUpIHwgKGdhbW1hMHggPj4+IDcpKSAgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnYW1tYTB4IDw8IDE0KSB8IChnYW1tYTB4ID4+PiAxOCkpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2FtbWEweCA+Pj4gMyk7XG5cblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExeCA9IFdbaSAtIDJdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTEgID0gKChnYW1tYTF4IDw8IDE1KSB8IChnYW1tYTF4ID4+PiAxNykpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZ2FtbWExeCA8PCAxMykgfCAoZ2FtbWExeCA+Pj4gMTkpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdhbW1hMXggPj4+IDEwKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBnYW1tYTAgKyBXW2kgLSA3XSArIGdhbW1hMSArIFdbaSAtIDE2XTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgdmFyIGNoICA9IChlICYgZikgXiAofmUgJiBnKTtcblx0ICAgICAgICAgICAgICAgIHZhciBtYWogPSAoYSAmIGIpIF4gKGEgJiBjKSBeIChiICYgYyk7XG5cblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTAgPSAoKGEgPDwgMzApIHwgKGEgPj4+IDIpKSBeICgoYSA8PCAxOSkgfCAoYSA+Pj4gMTMpKSBeICgoYSA8PCAxMCkgfCAoYSA+Pj4gMjIpKTtcblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTEgPSAoKGUgPDwgMjYpIHwgKGUgPj4+IDYpKSBeICgoZSA8PCAyMSkgfCAoZSA+Pj4gMTEpKSBeICgoZSA8PCA3KSAgfCAoZSA+Pj4gMjUpKTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHQxID0gaCArIHNpZ21hMSArIGNoICsgS1tpXSArIFdbaV07XG5cdCAgICAgICAgICAgICAgICB2YXIgdDIgPSBzaWdtYTAgKyBtYWo7XG5cblx0ICAgICAgICAgICAgICAgIGggPSBnO1xuXHQgICAgICAgICAgICAgICAgZyA9IGY7XG5cdCAgICAgICAgICAgICAgICBmID0gZTtcblx0ICAgICAgICAgICAgICAgIGUgPSAoZCArIHQxKSB8IDA7XG5cdCAgICAgICAgICAgICAgICBkID0gYztcblx0ICAgICAgICAgICAgICAgIGMgPSBiO1xuXHQgICAgICAgICAgICAgICAgYiA9IGE7XG5cdCAgICAgICAgICAgICAgICBhID0gKHQxICsgdDIpIHwgMDtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG5cdCAgICAgICAgICAgIEhbMF0gPSAoSFswXSArIGEpIHwgMDtcblx0ICAgICAgICAgICAgSFsxXSA9IChIWzFdICsgYikgfCAwO1xuXHQgICAgICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSB8IDA7XG5cdCAgICAgICAgICAgIEhbM10gPSAoSFszXSArIGQpIHwgMDtcblx0ICAgICAgICAgICAgSFs0XSA9IChIWzRdICsgZSkgfCAwO1xuXHQgICAgICAgICAgICBIWzVdID0gKEhbNV0gKyBmKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNl0gPSAoSFs2XSArIGcpIHwgMDtcblx0ICAgICAgICAgICAgSFs3XSA9IChIWzddICsgaCkgfCAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuXHQgICAgICAgICAgICB2YXIgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE1XSA9IG5CaXRzVG90YWw7XG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcblxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTI1Nih3b3JkQXJyYXkpO1xuXHQgICAgICovXG5cdCAgICBDLlNIQTI1NiA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFNIQTI1Nik7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBMjU2KG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgKi9cblx0ICAgIEMuSG1hY1NIQTI1NiA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihTSEEyNTYpO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEEyNTY7XG5cbn0pKTsiLCIoZnVuY3Rpb24oKXtcblxuICAgIC8vIENvcHlyaWdodCAoYykgMjAwNSAgVG9tIFd1XG4gICAgLy8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAvLyBTZWUgXCJMSUNFTlNFXCIgZm9yIGRldGFpbHMuXG5cbiAgICAvLyBCYXNpYyBKYXZhU2NyaXB0IEJOIGxpYnJhcnkgLSBzdWJzZXQgdXNlZnVsIGZvciBSU0EgZW5jcnlwdGlvbi5cblxuICAgIC8vIEJpdHMgcGVyIGRpZ2l0XG4gICAgdmFyIGRiaXRzO1xuXG4gICAgLy8gSmF2YVNjcmlwdCBlbmdpbmUgYW5hbHlzaXNcbiAgICB2YXIgY2FuYXJ5ID0gMHhkZWFkYmVlZmNhZmU7XG4gICAgdmFyIGpfbG0gPSAoKGNhbmFyeSYweGZmZmZmZik9PTB4ZWZjYWZlKTtcblxuICAgIC8vIChwdWJsaWMpIENvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gQmlnSW50ZWdlcihhLGIsYykge1xuICAgICAgaWYoYSAhPSBudWxsKVxuICAgICAgICBpZihcIm51bWJlclwiID09IHR5cGVvZiBhKSB0aGlzLmZyb21OdW1iZXIoYSxiLGMpO1xuICAgICAgICBlbHNlIGlmKGIgPT0gbnVsbCAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBhKSB0aGlzLmZyb21TdHJpbmcoYSwyNTYpO1xuICAgICAgICBlbHNlIHRoaXMuZnJvbVN0cmluZyhhLGIpO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBuZXcsIHVuc2V0IEJpZ0ludGVnZXJcbiAgICBmdW5jdGlvbiBuYmkoKSB7IHJldHVybiBuZXcgQmlnSW50ZWdlcihudWxsKTsgfVxuXG4gICAgLy8gYW06IENvbXB1dGUgd19qICs9ICh4KnRoaXNfaSksIHByb3BhZ2F0ZSBjYXJyaWVzLFxuICAgIC8vIGMgaXMgaW5pdGlhbCBjYXJyeSwgcmV0dXJucyBmaW5hbCBjYXJyeS5cbiAgICAvLyBjIDwgMypkdmFsdWUsIHggPCAyKmR2YWx1ZSwgdGhpc19pIDwgZHZhbHVlXG4gICAgLy8gV2UgbmVlZCB0byBzZWxlY3QgdGhlIGZhc3Rlc3Qgb25lIHRoYXQgd29ya3MgaW4gdGhpcyBlbnZpcm9ubWVudC5cblxuICAgIC8vIGFtMTogdXNlIGEgc2luZ2xlIG11bHQgYW5kIGRpdmlkZSB0byBnZXQgdGhlIGhpZ2ggYml0cyxcbiAgICAvLyBtYXggZGlnaXQgYml0cyBzaG91bGQgYmUgMjYgYmVjYXVzZVxuICAgIC8vIG1heCBpbnRlcm5hbCB2YWx1ZSA9IDIqZHZhbHVlXjItMipkdmFsdWUgKDwgMl41MylcbiAgICBmdW5jdGlvbiBhbTEoaSx4LHcsaixjLG4pIHtcbiAgICAgIHdoaWxlKC0tbiA+PSAwKSB7XG4gICAgICAgIHZhciB2ID0geCp0aGlzW2krK10rd1tqXStjO1xuICAgICAgICBjID0gTWF0aC5mbG9vcih2LzB4NDAwMDAwMCk7XG4gICAgICAgIHdbaisrXSA9IHYmMHgzZmZmZmZmO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIC8vIGFtMiBhdm9pZHMgYSBiaWcgbXVsdC1hbmQtZXh0cmFjdCBjb21wbGV0ZWx5LlxuICAgIC8vIE1heCBkaWdpdCBiaXRzIHNob3VsZCBiZSA8PSAzMCBiZWNhdXNlIHdlIGRvIGJpdHdpc2Ugb3BzXG4gICAgLy8gb24gdmFsdWVzIHVwIHRvIDIqaGR2YWx1ZV4yLWhkdmFsdWUtMSAoPCAyXjMxKVxuICAgIGZ1bmN0aW9uIGFtMihpLHgsdyxqLGMsbikge1xuICAgICAgdmFyIHhsID0geCYweDdmZmYsIHhoID0geD4+MTU7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgbCA9IHRoaXNbaV0mMHg3ZmZmO1xuICAgICAgICB2YXIgaCA9IHRoaXNbaSsrXT4+MTU7XG4gICAgICAgIHZhciBtID0geGgqbCtoKnhsO1xuICAgICAgICBsID0geGwqbCsoKG0mMHg3ZmZmKTw8MTUpK3dbal0rKGMmMHgzZmZmZmZmZik7XG4gICAgICAgIGMgPSAobD4+PjMwKSsobT4+PjE1KSt4aCpoKyhjPj4+MzApO1xuICAgICAgICB3W2orK10gPSBsJjB4M2ZmZmZmZmY7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgLy8gQWx0ZXJuYXRlbHksIHNldCBtYXggZGlnaXQgYml0cyB0byAyOCBzaW5jZSBzb21lXG4gICAgLy8gYnJvd3NlcnMgc2xvdyBkb3duIHdoZW4gZGVhbGluZyB3aXRoIDMyLWJpdCBudW1iZXJzLlxuICAgIGZ1bmN0aW9uIGFtMyhpLHgsdyxqLGMsbikge1xuICAgICAgdmFyIHhsID0geCYweDNmZmYsIHhoID0geD4+MTQ7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgbCA9IHRoaXNbaV0mMHgzZmZmO1xuICAgICAgICB2YXIgaCA9IHRoaXNbaSsrXT4+MTQ7XG4gICAgICAgIHZhciBtID0geGgqbCtoKnhsO1xuICAgICAgICBsID0geGwqbCsoKG0mMHgzZmZmKTw8MTQpK3dbal0rYztcbiAgICAgICAgYyA9IChsPj4yOCkrKG0+PjE0KSt4aCpoO1xuICAgICAgICB3W2orK10gPSBsJjB4ZmZmZmZmZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICB2YXIgaW5Ccm93c2VyID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICBpZihpbkJyb3dzZXIgJiYgal9sbSAmJiAobmF2aWdhdG9yLmFwcE5hbWUgPT0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIikpIHtcbiAgICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFtID0gYW0yO1xuICAgICAgZGJpdHMgPSAzMDtcbiAgICB9XG4gICAgZWxzZSBpZihpbkJyb3dzZXIgJiYgal9sbSAmJiAobmF2aWdhdG9yLmFwcE5hbWUgIT0gXCJOZXRzY2FwZVwiKSkge1xuICAgICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBhbTE7XG4gICAgICBkYml0cyA9IDI2O1xuICAgIH1cbiAgICBlbHNlIHsgLy8gTW96aWxsYS9OZXRzY2FwZSBzZWVtcyB0byBwcmVmZXIgYW0zXG4gICAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbSA9IGFtMztcbiAgICAgIGRiaXRzID0gMjg7XG4gICAgfVxuXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuREIgPSBkYml0cztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ETSA9ICgoMTw8ZGJpdHMpLTEpO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkRWID0gKDE8PGRiaXRzKTtcblxuICAgIHZhciBCSV9GUCA9IDUyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkZWID0gTWF0aC5wb3coMixCSV9GUCk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRjEgPSBCSV9GUC1kYml0cztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5GMiA9IDIqZGJpdHMtQklfRlA7XG5cbiAgICAvLyBEaWdpdCBjb252ZXJzaW9uc1xuICAgIHZhciBCSV9STSA9IFwiMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCI7XG4gICAgdmFyIEJJX1JDID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIHJyLHZ2O1xuICAgIHJyID0gXCIwXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAwOyB2diA8PSA5OyArK3Z2KSBCSV9SQ1tycisrXSA9IHZ2O1xuICAgIHJyID0gXCJhXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAxMDsgdnYgPCAzNjsgKyt2dikgQklfUkNbcnIrK10gPSB2djtcbiAgICByciA9IFwiQVwiLmNoYXJDb2RlQXQoMCk7XG4gICAgZm9yKHZ2ID0gMTA7IHZ2IDwgMzY7ICsrdnYpIEJJX1JDW3JyKytdID0gdnY7XG5cbiAgICBmdW5jdGlvbiBpbnQyY2hhcihuKSB7IHJldHVybiBCSV9STS5jaGFyQXQobik7IH1cbiAgICBmdW5jdGlvbiBpbnRBdChzLGkpIHtcbiAgICAgIHZhciBjID0gQklfUkNbcy5jaGFyQ29kZUF0KGkpXTtcbiAgICAgIHJldHVybiAoYz09bnVsbCk/LTE6YztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb3B5IHRoaXMgdG8gclxuICAgIGZ1bmN0aW9uIGJucENvcHlUbyhyKSB7XG4gICAgICBmb3IodmFyIGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSB0aGlzW2ldO1xuICAgICAgci50ID0gdGhpcy50O1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHNldCBmcm9tIGludGVnZXIgdmFsdWUgeCwgLURWIDw9IHggPCBEVlxuICAgIGZ1bmN0aW9uIGJucEZyb21JbnQoeCkge1xuICAgICAgdGhpcy50ID0gMTtcbiAgICAgIHRoaXMucyA9ICh4PDApPy0xOjA7XG4gICAgICBpZih4ID4gMCkgdGhpc1swXSA9IHg7XG4gICAgICBlbHNlIGlmKHggPCAtMSkgdGhpc1swXSA9IHgrdGhpcy5EVjtcbiAgICAgIGVsc2UgdGhpcy50ID0gMDtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gYmlnaW50IGluaXRpYWxpemVkIHRvIHZhbHVlXG4gICAgZnVuY3Rpb24gbmJ2KGkpIHsgdmFyIHIgPSBuYmkoKTsgci5mcm9tSW50KGkpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgc2V0IGZyb20gc3RyaW5nIGFuZCByYWRpeFxuICAgIGZ1bmN0aW9uIGJucEZyb21TdHJpbmcocyxiKSB7XG4gICAgICB2YXIgaztcbiAgICAgIGlmKGIgPT0gMTYpIGsgPSA0O1xuICAgICAgZWxzZSBpZihiID09IDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihiID09IDI1NikgayA9IDg7IC8vIGJ5dGUgYXJyYXlcbiAgICAgIGVsc2UgaWYoYiA9PSAyKSBrID0gMTtcbiAgICAgIGVsc2UgaWYoYiA9PSAzMikgayA9IDU7XG4gICAgICBlbHNlIGlmKGIgPT0gNCkgayA9IDI7XG4gICAgICBlbHNlIHsgdGhpcy5mcm9tUmFkaXgocyxiKTsgcmV0dXJuOyB9XG4gICAgICB0aGlzLnQgPSAwO1xuICAgICAgdGhpcy5zID0gMDtcbiAgICAgIHZhciBpID0gcy5sZW5ndGgsIG1pID0gZmFsc2UsIHNoID0gMDtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSB7XG4gICAgICAgIHZhciB4ID0gKGs9PTgpP3NbaV0mMHhmZjppbnRBdChzLGkpO1xuICAgICAgICBpZih4IDwgMCkge1xuICAgICAgICAgIGlmKHMuY2hhckF0KGkpID09IFwiLVwiKSBtaSA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbWkgPSBmYWxzZTtcbiAgICAgICAgaWYoc2ggPT0gMClcbiAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9IHg7XG4gICAgICAgIGVsc2UgaWYoc2grayA+IHRoaXMuREIpIHtcbiAgICAgICAgICB0aGlzW3RoaXMudC0xXSB8PSAoeCYoKDE8PCh0aGlzLkRCLXNoKSktMSkpPDxzaDtcbiAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9ICh4Pj4odGhpcy5EQi1zaCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzW3RoaXMudC0xXSB8PSB4PDxzaDtcbiAgICAgICAgc2ggKz0gaztcbiAgICAgICAgaWYoc2ggPj0gdGhpcy5EQikgc2ggLT0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGsgPT0gOCAmJiAoc1swXSYweDgwKSAhPSAwKSB7XG4gICAgICAgIHRoaXMucyA9IC0xO1xuICAgICAgICBpZihzaCA+IDApIHRoaXNbdGhpcy50LTFdIHw9ICgoMTw8KHRoaXMuREItc2gpKS0xKTw8c2g7XG4gICAgICB9XG4gICAgICB0aGlzLmNsYW1wKCk7XG4gICAgICBpZihtaSkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMsdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY2xhbXAgb2ZmIGV4Y2VzcyBoaWdoIHdvcmRzXG4gICAgZnVuY3Rpb24gYm5wQ2xhbXAoKSB7XG4gICAgICB2YXIgYyA9IHRoaXMucyZ0aGlzLkRNO1xuICAgICAgd2hpbGUodGhpcy50ID4gMCAmJiB0aGlzW3RoaXMudC0xXSA9PSBjKSAtLXRoaXMudDtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIGluIGdpdmVuIHJhZGl4XG4gICAgZnVuY3Rpb24gYm5Ub1N0cmluZyhiKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gXCItXCIrdGhpcy5uZWdhdGUoKS50b1N0cmluZyhiKTtcbiAgICAgIHZhciBrO1xuICAgICAgaWYoYiA9PSAxNikgayA9IDQ7XG4gICAgICBlbHNlIGlmKGIgPT0gOCkgayA9IDM7XG4gICAgICBlbHNlIGlmKGIgPT0gMikgayA9IDE7XG4gICAgICBlbHNlIGlmKGIgPT0gMzIpIGsgPSA1O1xuICAgICAgZWxzZSBpZihiID09IDQpIGsgPSAyO1xuICAgICAgZWxzZSByZXR1cm4gdGhpcy50b1JhZGl4KGIpO1xuICAgICAgdmFyIGttID0gKDE8PGspLTEsIGQsIG0gPSBmYWxzZSwgciA9IFwiXCIsIGkgPSB0aGlzLnQ7XG4gICAgICB2YXIgcCA9IHRoaXMuREItKGkqdGhpcy5EQiklaztcbiAgICAgIGlmKGktLSA+IDApIHtcbiAgICAgICAgaWYocCA8IHRoaXMuREIgJiYgKGQgPSB0aGlzW2ldPj5wKSA+IDApIHsgbSA9IHRydWU7IHIgPSBpbnQyY2hhcihkKTsgfVxuICAgICAgICB3aGlsZShpID49IDApIHtcbiAgICAgICAgICBpZihwIDwgaykge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldJigoMTw8cCktMSkpPDwoay1wKTtcbiAgICAgICAgICAgIGQgfD0gdGhpc1stLWldPj4ocCs9dGhpcy5EQi1rKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0+PihwLT1rKSkma207XG4gICAgICAgICAgICBpZihwIDw9IDApIHsgcCArPSB0aGlzLkRCOyAtLWk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZCA+IDApIG0gPSB0cnVlO1xuICAgICAgICAgIGlmKG0pIHIgKz0gaW50MmNoYXIoZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBtP3I6XCIwXCI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgLXRoaXNcbiAgICBmdW5jdGlvbiBibk5lZ2F0ZSgpIHsgdmFyIHIgPSBuYmkoKTsgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB8dGhpc3xcbiAgICBmdW5jdGlvbiBibkFicygpIHsgcmV0dXJuICh0aGlzLnM8MCk/dGhpcy5uZWdhdGUoKTp0aGlzOyB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gKyBpZiB0aGlzID4gYSwgLSBpZiB0aGlzIDwgYSwgMCBpZiBlcXVhbFxuICAgIGZ1bmN0aW9uIGJuQ29tcGFyZVRvKGEpIHtcbiAgICAgIHZhciByID0gdGhpcy5zLWEucztcbiAgICAgIGlmKHIgIT0gMCkgcmV0dXJuIHI7XG4gICAgICB2YXIgaSA9IHRoaXMudDtcbiAgICAgIHIgPSBpLWEudDtcbiAgICAgIGlmKHIgIT0gMCkgcmV0dXJuICh0aGlzLnM8MCk/LXI6cjtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSBpZigocj10aGlzW2ldLWFbaV0pICE9IDApIHJldHVybiByO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBiaXQgbGVuZ3RoIG9mIHRoZSBpbnRlZ2VyIHhcbiAgICBmdW5jdGlvbiBuYml0cyh4KSB7XG4gICAgICB2YXIgciA9IDEsIHQ7XG4gICAgICBpZigodD14Pj4+MTYpICE9IDApIHsgeCA9IHQ7IHIgKz0gMTY7IH1cbiAgICAgIGlmKCh0PXg+PjgpICE9IDApIHsgeCA9IHQ7IHIgKz0gODsgfVxuICAgICAgaWYoKHQ9eD4+NCkgIT0gMCkgeyB4ID0gdDsgciArPSA0OyB9XG4gICAgICBpZigodD14Pj4yKSAhPSAwKSB7IHggPSB0OyByICs9IDI7IH1cbiAgICAgIGlmKCh0PXg+PjEpICE9IDApIHsgeCA9IHQ7IHIgKz0gMTsgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHRoZSBudW1iZXIgb2YgYml0cyBpbiBcInRoaXNcIlxuICAgIGZ1bmN0aW9uIGJuQml0TGVuZ3RoKCkge1xuICAgICAgaWYodGhpcy50IDw9IDApIHJldHVybiAwO1xuICAgICAgcmV0dXJuIHRoaXMuREIqKHRoaXMudC0xKStuYml0cyh0aGlzW3RoaXMudC0xXV4odGhpcy5zJnRoaXMuRE0pKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA8PCBuKkRCXG4gICAgZnVuY3Rpb24gYm5wRExTaGlmdFRvKG4scikge1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IoaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkgcltpK25dID0gdGhpc1tpXTtcbiAgICAgIGZvcihpID0gbi0xOyBpID49IDA7IC0taSkgcltpXSA9IDA7XG4gICAgICByLnQgPSB0aGlzLnQrbjtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA+PiBuKkRCXG4gICAgZnVuY3Rpb24gYm5wRFJTaGlmdFRvKG4scikge1xuICAgICAgZm9yKHZhciBpID0gbjsgaSA8IHRoaXMudDsgKytpKSByW2ktbl0gPSB0aGlzW2ldO1xuICAgICAgci50ID0gTWF0aC5tYXgodGhpcy50LW4sMCk7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPDwgblxuICAgIGZ1bmN0aW9uIGJucExTaGlmdFRvKG4scikge1xuICAgICAgdmFyIGJzID0gbiV0aGlzLkRCO1xuICAgICAgdmFyIGNicyA9IHRoaXMuREItYnM7XG4gICAgICB2YXIgYm0gPSAoMTw8Y2JzKS0xO1xuICAgICAgdmFyIGRzID0gTWF0aC5mbG9vcihuL3RoaXMuREIpLCBjID0gKHRoaXMuczw8YnMpJnRoaXMuRE0sIGk7XG4gICAgICBmb3IoaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkge1xuICAgICAgICByW2krZHMrMV0gPSAodGhpc1tpXT4+Y2JzKXxjO1xuICAgICAgICBjID0gKHRoaXNbaV0mYm0pPDxicztcbiAgICAgIH1cbiAgICAgIGZvcihpID0gZHMtMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSAwO1xuICAgICAgcltkc10gPSBjO1xuICAgICAgci50ID0gdGhpcy50K2RzKzE7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPj4gblxuICAgIGZ1bmN0aW9uIGJucFJTaGlmdFRvKG4scikge1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgICAgdmFyIGRzID0gTWF0aC5mbG9vcihuL3RoaXMuREIpO1xuICAgICAgaWYoZHMgPj0gdGhpcy50KSB7IHIudCA9IDA7IHJldHVybjsgfVxuICAgICAgdmFyIGJzID0gbiV0aGlzLkRCO1xuICAgICAgdmFyIGNicyA9IHRoaXMuREItYnM7XG4gICAgICB2YXIgYm0gPSAoMTw8YnMpLTE7XG4gICAgICByWzBdID0gdGhpc1tkc10+PmJzO1xuICAgICAgZm9yKHZhciBpID0gZHMrMTsgaSA8IHRoaXMudDsgKytpKSB7XG4gICAgICAgIHJbaS1kcy0xXSB8PSAodGhpc1tpXSZibSk8PGNicztcbiAgICAgICAgcltpLWRzXSA9IHRoaXNbaV0+PmJzO1xuICAgICAgfVxuICAgICAgaWYoYnMgPiAwKSByW3RoaXMudC1kcy0xXSB8PSAodGhpcy5zJmJtKTw8Y2JzO1xuICAgICAgci50ID0gdGhpcy50LWRzO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIC0gYVxuICAgIGZ1bmN0aW9uIGJucFN1YlRvKGEscikge1xuICAgICAgdmFyIGkgPSAwLCBjID0gMCwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgd2hpbGUoaSA8IG0pIHtcbiAgICAgICAgYyArPSB0aGlzW2ldLWFbaV07XG4gICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBjIC09IGEucztcbiAgICAgICAgd2hpbGUoaSA8IHRoaXMudCkge1xuICAgICAgICAgIGMgKz0gdGhpc1tpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgICAgd2hpbGUoaSA8IGEudCkge1xuICAgICAgICAgIGMgLT0gYVtpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjIC09IGEucztcbiAgICAgIH1cbiAgICAgIHIucyA9IChjPDApPy0xOjA7XG4gICAgICBpZihjIDwgLTEpIHJbaSsrXSA9IHRoaXMuRFYrYztcbiAgICAgIGVsc2UgaWYoYyA+IDApIHJbaSsrXSA9IGM7XG4gICAgICByLnQgPSBpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzICogYSwgciAhPSB0aGlzLGEgKEhBQyAxNC4xMilcbiAgICAvLyBcInRoaXNcIiBzaG91bGQgYmUgdGhlIGxhcmdlciBvbmUgaWYgYXBwcm9wcmlhdGUuXG4gICAgZnVuY3Rpb24gYm5wTXVsdGlwbHlUbyhhLHIpIHtcbiAgICAgIHZhciB4ID0gdGhpcy5hYnMoKSwgeSA9IGEuYWJzKCk7XG4gICAgICB2YXIgaSA9IHgudDtcbiAgICAgIHIudCA9IGkreS50O1xuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgeS50OyArK2kpIHJbaSt4LnRdID0geC5hbSgwLHlbaV0scixpLDAseC50KTtcbiAgICAgIHIucyA9IDA7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICBpZih0aGlzLnMgIT0gYS5zKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocixyKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpc14yLCByICE9IHRoaXMgKEhBQyAxNC4xNilcbiAgICBmdW5jdGlvbiBibnBTcXVhcmVUbyhyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMuYWJzKCk7XG4gICAgICB2YXIgaSA9IHIudCA9IDIqeC50O1xuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgeC50LTE7ICsraSkge1xuICAgICAgICB2YXIgYyA9IHguYW0oaSx4W2ldLHIsMippLDAsMSk7XG4gICAgICAgIGlmKChyW2kreC50XSs9eC5hbShpKzEsMip4W2ldLHIsMippKzEsYyx4LnQtaS0xKSkgPj0geC5EVikge1xuICAgICAgICAgIHJbaSt4LnRdIC09IHguRFY7XG4gICAgICAgICAgcltpK3gudCsxXSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHIudCA+IDApIHJbci50LTFdICs9IHguYW0oaSx4W2ldLHIsMippLDAsMSk7XG4gICAgICByLnMgPSAwO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGRpdmlkZSB0aGlzIGJ5IG0sIHF1b3RpZW50IGFuZCByZW1haW5kZXIgdG8gcSwgciAoSEFDIDE0LjIwKVxuICAgIC8vIHIgIT0gcSwgdGhpcyAhPSBtLiAgcSBvciByIG1heSBiZSBudWxsLlxuICAgIGZ1bmN0aW9uIGJucERpdlJlbVRvKG0scSxyKSB7XG4gICAgICB2YXIgcG0gPSBtLmFicygpO1xuICAgICAgaWYocG0udCA8PSAwKSByZXR1cm47XG4gICAgICB2YXIgcHQgPSB0aGlzLmFicygpO1xuICAgICAgaWYocHQudCA8IHBtLnQpIHtcbiAgICAgICAgaWYocSAhPSBudWxsKSBxLmZyb21JbnQoMCk7XG4gICAgICAgIGlmKHIgIT0gbnVsbCkgdGhpcy5jb3B5VG8ocik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmKHIgPT0gbnVsbCkgciA9IG5iaSgpO1xuICAgICAgdmFyIHkgPSBuYmkoKSwgdHMgPSB0aGlzLnMsIG1zID0gbS5zO1xuICAgICAgdmFyIG5zaCA9IHRoaXMuREItbmJpdHMocG1bcG0udC0xXSk7ICAgLy8gbm9ybWFsaXplIG1vZHVsdXNcbiAgICAgIGlmKG5zaCA+IDApIHsgcG0ubFNoaWZ0VG8obnNoLHkpOyBwdC5sU2hpZnRUbyhuc2gscik7IH1cbiAgICAgIGVsc2UgeyBwbS5jb3B5VG8oeSk7IHB0LmNvcHlUbyhyKTsgfVxuICAgICAgdmFyIHlzID0geS50O1xuICAgICAgdmFyIHkwID0geVt5cy0xXTtcbiAgICAgIGlmKHkwID09IDApIHJldHVybjtcbiAgICAgIHZhciB5dCA9IHkwKigxPDx0aGlzLkYxKSsoKHlzPjEpP3lbeXMtMl0+PnRoaXMuRjI6MCk7XG4gICAgICB2YXIgZDEgPSB0aGlzLkZWL3l0LCBkMiA9ICgxPDx0aGlzLkYxKS95dCwgZSA9IDE8PHRoaXMuRjI7XG4gICAgICB2YXIgaSA9IHIudCwgaiA9IGkteXMsIHQgPSAocT09bnVsbCk/bmJpKCk6cTtcbiAgICAgIHkuZGxTaGlmdFRvKGosdCk7XG4gICAgICBpZihyLmNvbXBhcmVUbyh0KSA+PSAwKSB7XG4gICAgICAgIHJbci50KytdID0gMTtcbiAgICAgICAgci5zdWJUbyh0LHIpO1xuICAgICAgfVxuICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKHlzLHQpO1xuICAgICAgdC5zdWJUbyh5LHkpOyAgLy8gXCJuZWdhdGl2ZVwiIHkgc28gd2UgY2FuIHJlcGxhY2Ugc3ViIHdpdGggYW0gbGF0ZXJcbiAgICAgIHdoaWxlKHkudCA8IHlzKSB5W3kudCsrXSA9IDA7XG4gICAgICB3aGlsZSgtLWogPj0gMCkge1xuICAgICAgICAvLyBFc3RpbWF0ZSBxdW90aWVudCBkaWdpdFxuICAgICAgICB2YXIgcWQgPSAoclstLWldPT15MCk/dGhpcy5ETTpNYXRoLmZsb29yKHJbaV0qZDErKHJbaS0xXStlKSpkMik7XG4gICAgICAgIGlmKChyW2ldKz15LmFtKDAscWQscixqLDAseXMpKSA8IHFkKSB7ICAgLy8gVHJ5IGl0IG91dFxuICAgICAgICAgIHkuZGxTaGlmdFRvKGosdCk7XG4gICAgICAgICAgci5zdWJUbyh0LHIpO1xuICAgICAgICAgIHdoaWxlKHJbaV0gPCAtLXFkKSByLnN1YlRvKHQscik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHEgIT0gbnVsbCkge1xuICAgICAgICByLmRyU2hpZnRUbyh5cyxxKTtcbiAgICAgICAgaWYodHMgIT0gbXMpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhxLHEpO1xuICAgICAgfVxuICAgICAgci50ID0geXM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICBpZihuc2ggPiAwKSByLnJTaGlmdFRvKG5zaCxyKTsgLy8gRGVub3JtYWxpemUgcmVtYWluZGVyXG4gICAgICBpZih0cyA8IDApIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhyLHIpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgbW9kIGFcbiAgICBmdW5jdGlvbiBibk1vZChhKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgdGhpcy5hYnMoKS5kaXZSZW1UbyhhLG51bGwscik7XG4gICAgICBpZih0aGlzLnMgPCAwICYmIHIuY29tcGFyZVRvKEJpZ0ludGVnZXIuWkVSTykgPiAwKSBhLnN1YlRvKHIscik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyBNb2R1bGFyIHJlZHVjdGlvbiB1c2luZyBcImNsYXNzaWNcIiBhbGdvcml0aG1cbiAgICBmdW5jdGlvbiBDbGFzc2ljKG0pIHsgdGhpcy5tID0gbTsgfVxuICAgIGZ1bmN0aW9uIGNDb252ZXJ0KHgpIHtcbiAgICAgIGlmKHgucyA8IDAgfHwgeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSByZXR1cm4geC5tb2QodGhpcy5tKTtcbiAgICAgIGVsc2UgcmV0dXJuIHg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNSZXZlcnQoeCkgeyByZXR1cm4geDsgfVxuICAgIGZ1bmN0aW9uIGNSZWR1Y2UoeCkgeyB4LmRpdlJlbVRvKHRoaXMubSxudWxsLHgpOyB9XG4gICAgZnVuY3Rpb24gY011bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuICAgIGZ1bmN0aW9uIGNTcXJUbyh4LHIpIHsgeC5zcXVhcmVUbyhyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIENsYXNzaWMucHJvdG90eXBlLmNvbnZlcnQgPSBjQ29udmVydDtcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5yZXZlcnQgPSBjUmV2ZXJ0O1xuICAgIENsYXNzaWMucHJvdG90eXBlLnJlZHVjZSA9IGNSZWR1Y2U7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUubXVsVG8gPSBjTXVsVG87XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUuc3FyVG8gPSBjU3FyVG87XG5cbiAgICAvLyAocHJvdGVjdGVkKSByZXR1cm4gXCItMS90aGlzICUgMl5EQlwiOyB1c2VmdWwgZm9yIE1vbnQuIHJlZHVjdGlvblxuICAgIC8vIGp1c3RpZmljYXRpb246XG4gICAgLy8gICAgICAgICB4eSA9PSAxIChtb2QgbSlcbiAgICAvLyAgICAgICAgIHh5ID0gIDEra21cbiAgICAvLyAgIHh5KDIteHkpID0gKDEra20pKDEta20pXG4gICAgLy8geFt5KDIteHkpXSA9IDEta14ybV4yXG4gICAgLy8geFt5KDIteHkpXSA9PSAxIChtb2QgbV4yKVxuICAgIC8vIGlmIHkgaXMgMS94IG1vZCBtLCB0aGVuIHkoMi14eSkgaXMgMS94IG1vZCBtXjJcbiAgICAvLyBzaG91bGQgcmVkdWNlIHggYW5kIHkoMi14eSkgYnkgbV4yIGF0IGVhY2ggc3RlcCB0byBrZWVwIHNpemUgYm91bmRlZC5cbiAgICAvLyBKUyBtdWx0aXBseSBcIm92ZXJmbG93c1wiIGRpZmZlcmVudGx5IGZyb20gQy9DKyssIHNvIGNhcmUgaXMgbmVlZGVkIGhlcmUuXG4gICAgZnVuY3Rpb24gYm5wSW52RGlnaXQoKSB7XG4gICAgICBpZih0aGlzLnQgPCAxKSByZXR1cm4gMDtcbiAgICAgIHZhciB4ID0gdGhpc1swXTtcbiAgICAgIGlmKCh4JjEpID09IDApIHJldHVybiAwO1xuICAgICAgdmFyIHkgPSB4JjM7ICAgICAgIC8vIHkgPT0gMS94IG1vZCAyXjJcbiAgICAgIHkgPSAoeSooMi0oeCYweGYpKnkpKSYweGY7IC8vIHkgPT0gMS94IG1vZCAyXjRcbiAgICAgIHkgPSAoeSooMi0oeCYweGZmKSp5KSkmMHhmZjsgICAvLyB5ID09IDEveCBtb2QgMl44XG4gICAgICB5ID0gKHkqKDItKCgoeCYweGZmZmYpKnkpJjB4ZmZmZikpKSYweGZmZmY7ICAgIC8vIHkgPT0gMS94IG1vZCAyXjE2XG4gICAgICAvLyBsYXN0IHN0ZXAgLSBjYWxjdWxhdGUgaW52ZXJzZSBtb2QgRFYgZGlyZWN0bHk7XG4gICAgICAvLyBhc3N1bWVzIDE2IDwgREIgPD0gMzIgYW5kIGFzc3VtZXMgYWJpbGl0eSB0byBoYW5kbGUgNDgtYml0IGludHNcbiAgICAgIHkgPSAoeSooMi14KnkldGhpcy5EVikpJXRoaXMuRFY7ICAgICAgIC8vIHkgPT0gMS94IG1vZCAyXmRiaXRzXG4gICAgICAvLyB3ZSByZWFsbHkgd2FudCB0aGUgbmVnYXRpdmUgaW52ZXJzZSwgYW5kIC1EViA8IHkgPCBEVlxuICAgICAgcmV0dXJuICh5PjApP3RoaXMuRFYteToteTtcbiAgICB9XG5cbiAgICAvLyBNb250Z29tZXJ5IHJlZHVjdGlvblxuICAgIGZ1bmN0aW9uIE1vbnRnb21lcnkobSkge1xuICAgICAgdGhpcy5tID0gbTtcbiAgICAgIHRoaXMubXAgPSBtLmludkRpZ2l0KCk7XG4gICAgICB0aGlzLm1wbCA9IHRoaXMubXAmMHg3ZmZmO1xuICAgICAgdGhpcy5tcGggPSB0aGlzLm1wPj4xNTtcbiAgICAgIHRoaXMudW0gPSAoMTw8KG0uREItMTUpKS0xO1xuICAgICAgdGhpcy5tdDIgPSAyKm0udDtcbiAgICB9XG5cbiAgICAvLyB4UiBtb2QgbVxuICAgIGZ1bmN0aW9uIG1vbnRDb252ZXJ0KHgpIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICB4LmFicygpLmRsU2hpZnRUbyh0aGlzLm0udCxyKTtcbiAgICAgIHIuZGl2UmVtVG8odGhpcy5tLG51bGwscik7XG4gICAgICBpZih4LnMgPCAwICYmIHIuY29tcGFyZVRvKEJpZ0ludGVnZXIuWkVSTykgPiAwKSB0aGlzLm0uc3ViVG8ocixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIHgvUiBtb2QgbVxuICAgIGZ1bmN0aW9uIG1vbnRSZXZlcnQoeCkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIHguY29weVRvKHIpO1xuICAgICAgdGhpcy5yZWR1Y2Uocik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyB4ID0geC9SIG1vZCBtIChIQUMgMTQuMzIpXG4gICAgZnVuY3Rpb24gbW9udFJlZHVjZSh4KSB7XG4gICAgICB3aGlsZSh4LnQgPD0gdGhpcy5tdDIpIC8vIHBhZCB4IHNvIGFtIGhhcyBlbm91Z2ggcm9vbSBsYXRlclxuICAgICAgICB4W3gudCsrXSA9IDA7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5tLnQ7ICsraSkge1xuICAgICAgICAvLyBmYXN0ZXIgd2F5IG9mIGNhbGN1bGF0aW5nIHUwID0geFtpXSptcCBtb2QgRFZcbiAgICAgICAgdmFyIGogPSB4W2ldJjB4N2ZmZjtcbiAgICAgICAgdmFyIHUwID0gKGoqdGhpcy5tcGwrKCgoaip0aGlzLm1waCsoeFtpXT4+MTUpKnRoaXMubXBsKSZ0aGlzLnVtKTw8MTUpKSZ4LkRNO1xuICAgICAgICAvLyB1c2UgYW0gdG8gY29tYmluZSB0aGUgbXVsdGlwbHktc2hpZnQtYWRkIGludG8gb25lIGNhbGxcbiAgICAgICAgaiA9IGkrdGhpcy5tLnQ7XG4gICAgICAgIHhbal0gKz0gdGhpcy5tLmFtKDAsdTAseCxpLDAsdGhpcy5tLnQpO1xuICAgICAgICAvLyBwcm9wYWdhdGUgY2FycnlcbiAgICAgICAgd2hpbGUoeFtqXSA+PSB4LkRWKSB7IHhbal0gLT0geC5EVjsgeFsrK2pdKys7IH1cbiAgICAgIH1cbiAgICAgIHguY2xhbXAoKTtcbiAgICAgIHguZHJTaGlmdFRvKHRoaXMubS50LHgpO1xuICAgICAgaWYoeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSB4LnN1YlRvKHRoaXMubSx4KTtcbiAgICB9XG5cbiAgICAvLyByID0gXCJ4XjIvUiBtb2QgbVwiOyB4ICE9IHJcbiAgICBmdW5jdGlvbiBtb250U3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICAvLyByID0gXCJ4eS9SIG1vZCBtXCI7IHgseSAhPSByXG4gICAgZnVuY3Rpb24gbW9udE11bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUuY29udmVydCA9IG1vbnRDb252ZXJ0O1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLnJldmVydCA9IG1vbnRSZXZlcnQ7XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUucmVkdWNlID0gbW9udFJlZHVjZTtcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5tdWxUbyA9IG1vbnRNdWxUbztcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5zcXJUbyA9IG1vbnRTcXJUbztcblxuICAgIC8vIChwcm90ZWN0ZWQpIHRydWUgaWZmIHRoaXMgaXMgZXZlblxuICAgIGZ1bmN0aW9uIGJucElzRXZlbigpIHsgcmV0dXJuICgodGhpcy50PjApPyh0aGlzWzBdJjEpOnRoaXMucykgPT0gMDsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpc15lLCBlIDwgMl4zMiwgZG9pbmcgc3FyIGFuZCBtdWwgd2l0aCBcInJcIiAoSEFDIDE0Ljc5KVxuICAgIGZ1bmN0aW9uIGJucEV4cChlLHopIHtcbiAgICAgIGlmKGUgPiAweGZmZmZmZmZmIHx8IGUgPCAxKSByZXR1cm4gQmlnSW50ZWdlci5PTkU7XG4gICAgICB2YXIgciA9IG5iaSgpLCByMiA9IG5iaSgpLCBnID0gei5jb252ZXJ0KHRoaXMpLCBpID0gbmJpdHMoZSktMTtcbiAgICAgIGcuY29weVRvKHIpO1xuICAgICAgd2hpbGUoLS1pID49IDApIHtcbiAgICAgICAgei5zcXJUbyhyLHIyKTtcbiAgICAgICAgaWYoKGUmKDE8PGkpKSA+IDApIHoubXVsVG8ocjIsZyxyKTtcbiAgICAgICAgZWxzZSB7IHZhciB0ID0gcjsgciA9IHIyOyByMiA9IHQ7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB6LnJldmVydChyKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmUgJSBtLCAwIDw9IGUgPCAyXjMyXG4gICAgZnVuY3Rpb24gYm5Nb2RQb3dJbnQoZSxtKSB7XG4gICAgICB2YXIgejtcbiAgICAgIGlmKGUgPCAyNTYgfHwgbS5pc0V2ZW4oKSkgeiA9IG5ldyBDbGFzc2ljKG0pOyBlbHNlIHogPSBuZXcgTW9udGdvbWVyeShtKTtcbiAgICAgIHJldHVybiB0aGlzLmV4cChlLHopO1xuICAgIH1cblxuICAgIC8vIHByb3RlY3RlZFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvcHlUbyA9IGJucENvcHlUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tSW50ID0gYm5wRnJvbUludDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tU3RyaW5nID0gYm5wRnJvbVN0cmluZztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbGFtcCA9IGJucENsYW1wO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRsU2hpZnRUbyA9IGJucERMU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kclNoaWZ0VG8gPSBibnBEUlNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubFNoaWZ0VG8gPSBibnBMU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yU2hpZnRUbyA9IGJucFJTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YlRvID0gYm5wU3ViVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlUbyA9IGJucE11bHRpcGx5VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlVG8gPSBibnBTcXVhcmVUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZSZW1UbyA9IGJucERpdlJlbVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmludkRpZ2l0ID0gYm5wSW52RGlnaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNFdmVuID0gYm5wSXNFdmVuO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmV4cCA9IGJucEV4cDtcblxuICAgIC8vIHB1YmxpY1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nID0gYm5Ub1N0cmluZztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZWdhdGUgPSBibk5lZ2F0ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hYnMgPSBibkFicztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlVG8gPSBibkNvbXBhcmVUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGggPSBibkJpdExlbmd0aDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBibk1vZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3dJbnQgPSBibk1vZFBvd0ludDtcblxuICAgIC8vIFwiY29uc3RhbnRzXCJcbiAgICBCaWdJbnRlZ2VyLlpFUk8gPSBuYnYoMCk7XG4gICAgQmlnSW50ZWdlci5PTkUgPSBuYnYoMSk7XG5cbiAgICAvLyBDb3B5cmlnaHQgKGMpIDIwMDUtMjAwOSAgVG9tIFd1XG4gICAgLy8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAvLyBTZWUgXCJMSUNFTlNFXCIgZm9yIGRldGFpbHMuXG5cbiAgICAvLyBFeHRlbmRlZCBKYXZhU2NyaXB0IEJOIGZ1bmN0aW9ucywgcmVxdWlyZWQgZm9yIFJTQSBwcml2YXRlIG9wcy5cblxuICAgIC8vIFZlcnNpb24gMS4xOiBuZXcgQmlnSW50ZWdlcihcIjBcIiwgMTApIHJldHVybnMgXCJwcm9wZXJcIiB6ZXJvXG4gICAgLy8gVmVyc2lvbiAxLjI6IHNxdWFyZSgpIEFQSSwgaXNQcm9iYWJsZVByaW1lIGZpeFxuXG4gICAgLy8gKHB1YmxpYylcbiAgICBmdW5jdGlvbiBibkNsb25lKCkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmNvcHlUbyhyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBpbnRlZ2VyXG4gICAgZnVuY3Rpb24gYm5JbnRWYWx1ZSgpIHtcbiAgICAgIGlmKHRoaXMucyA8IDApIHtcbiAgICAgICAgaWYodGhpcy50ID09IDEpIHJldHVybiB0aGlzWzBdLXRoaXMuRFY7XG4gICAgICAgIGVsc2UgaWYodGhpcy50ID09IDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodGhpcy50ID09IDEpIHJldHVybiB0aGlzWzBdO1xuICAgICAgZWxzZSBpZih0aGlzLnQgPT0gMCkgcmV0dXJuIDA7XG4gICAgICAvLyBhc3N1bWVzIDE2IDwgREIgPCAzMlxuICAgICAgcmV0dXJuICgodGhpc1sxXSYoKDE8PCgzMi10aGlzLkRCKSktMSkpPDx0aGlzLkRCKXx0aGlzWzBdO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBieXRlXG4gICAgZnVuY3Rpb24gYm5CeXRlVmFsdWUoKSB7IHJldHVybiAodGhpcy50PT0wKT90aGlzLnM6KHRoaXNbMF08PDI0KT4+MjQ7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBzaG9ydCAoYXNzdW1lcyBEQj49MTYpXG4gICAgZnVuY3Rpb24gYm5TaG9ydFZhbHVlKCkgeyByZXR1cm4gKHRoaXMudD09MCk/dGhpcy5zOih0aGlzWzBdPDwxNik+PjE2OyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByZXR1cm4geCBzLnQuIHJeeCA8IERWXG4gICAgZnVuY3Rpb24gYm5wQ2h1bmtTaXplKHIpIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5MTjIqdGhpcy5EQi9NYXRoLmxvZyhyKSk7IH1cblxuICAgIC8vIChwdWJsaWMpIDAgaWYgdGhpcyA9PSAwLCAxIGlmIHRoaXMgPiAwXG4gICAgZnVuY3Rpb24gYm5TaWdOdW0oKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gLTE7XG4gICAgICBlbHNlIGlmKHRoaXMudCA8PSAwIHx8ICh0aGlzLnQgPT0gMSAmJiB0aGlzWzBdIDw9IDApKSByZXR1cm4gMDtcbiAgICAgIGVsc2UgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY29udmVydCB0byByYWRpeCBzdHJpbmdcbiAgICBmdW5jdGlvbiBibnBUb1JhZGl4KGIpIHtcbiAgICAgIGlmKGIgPT0gbnVsbCkgYiA9IDEwO1xuICAgICAgaWYodGhpcy5zaWdudW0oKSA9PSAwIHx8IGIgPCAyIHx8IGIgPiAzNikgcmV0dXJuIFwiMFwiO1xuICAgICAgdmFyIGNzID0gdGhpcy5jaHVua1NpemUoYik7XG4gICAgICB2YXIgYSA9IE1hdGgucG93KGIsY3MpO1xuICAgICAgdmFyIGQgPSBuYnYoYSksIHkgPSBuYmkoKSwgeiA9IG5iaSgpLCByID0gXCJcIjtcbiAgICAgIHRoaXMuZGl2UmVtVG8oZCx5LHopO1xuICAgICAgd2hpbGUoeS5zaWdudW0oKSA+IDApIHtcbiAgICAgICAgciA9IChhK3ouaW50VmFsdWUoKSkudG9TdHJpbmcoYikuc3Vic3RyKDEpICsgcjtcbiAgICAgICAgeS5kaXZSZW1UbyhkLHkseik7XG4gICAgICB9XG4gICAgICByZXR1cm4gei5pbnRWYWx1ZSgpLnRvU3RyaW5nKGIpICsgcjtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb252ZXJ0IGZyb20gcmFkaXggc3RyaW5nXG4gICAgZnVuY3Rpb24gYm5wRnJvbVJhZGl4KHMsYikge1xuICAgICAgdGhpcy5mcm9tSW50KDApO1xuICAgICAgaWYoYiA9PSBudWxsKSBiID0gMTA7XG4gICAgICB2YXIgY3MgPSB0aGlzLmNodW5rU2l6ZShiKTtcbiAgICAgIHZhciBkID0gTWF0aC5wb3coYixjcyksIG1pID0gZmFsc2UsIGogPSAwLCB3ID0gMDtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciB4ID0gaW50QXQocyxpKTtcbiAgICAgICAgaWYoeCA8IDApIHtcbiAgICAgICAgICBpZihzLmNoYXJBdChpKSA9PSBcIi1cIiAmJiB0aGlzLnNpZ251bSgpID09IDApIG1pID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB3ID0gYip3K3g7XG4gICAgICAgIGlmKCsraiA+PSBjcykge1xuICAgICAgICAgIHRoaXMuZE11bHRpcGx5KGQpO1xuICAgICAgICAgIHRoaXMuZEFkZE9mZnNldCh3LDApO1xuICAgICAgICAgIGogPSAwO1xuICAgICAgICAgIHcgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihqID4gMCkge1xuICAgICAgICB0aGlzLmRNdWx0aXBseShNYXRoLnBvdyhiLGopKTtcbiAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KHcsMCk7XG4gICAgICB9XG4gICAgICBpZihtaSkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMsdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgYWx0ZXJuYXRlIGNvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gYm5wRnJvbU51bWJlcihhLGIsYykge1xuICAgICAgaWYoXCJudW1iZXJcIiA9PSB0eXBlb2YgYikge1xuICAgICAgICAvLyBuZXcgQmlnSW50ZWdlcihpbnQsaW50LFJORylcbiAgICAgICAgaWYoYSA8IDIpIHRoaXMuZnJvbUludCgxKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5mcm9tTnVtYmVyKGEsYyk7XG4gICAgICAgICAgaWYoIXRoaXMudGVzdEJpdChhLTEpKSAgICAvLyBmb3JjZSBNU0Igc2V0XG4gICAgICAgICAgICB0aGlzLmJpdHdpc2VUbyhCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQoYS0xKSxvcF9vcix0aGlzKTtcbiAgICAgICAgICBpZih0aGlzLmlzRXZlbigpKSB0aGlzLmRBZGRPZmZzZXQoMSwwKTsgLy8gZm9yY2Ugb2RkXG4gICAgICAgICAgd2hpbGUoIXRoaXMuaXNQcm9iYWJsZVByaW1lKGIpKSB7XG4gICAgICAgICAgICB0aGlzLmRBZGRPZmZzZXQoMiwwKTtcbiAgICAgICAgICAgIGlmKHRoaXMuYml0TGVuZ3RoKCkgPiBhKSB0aGlzLnN1YlRvKEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChhLTEpLHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIG5ldyBCaWdJbnRlZ2VyKGludCxSTkcpXG4gICAgICAgIHZhciB4ID0gbmV3IEFycmF5KCksIHQgPSBhJjc7XG4gICAgICAgIHgubGVuZ3RoID0gKGE+PjMpKzE7XG4gICAgICAgIGIubmV4dEJ5dGVzKHgpO1xuICAgICAgICBpZih0ID4gMCkgeFswXSAmPSAoKDE8PHQpLTEpOyBlbHNlIHhbMF0gPSAwO1xuICAgICAgICB0aGlzLmZyb21TdHJpbmcoeCwyNTYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIGNvbnZlcnQgdG8gYmlnZW5kaWFuIGJ5dGUgYXJyYXlcbiAgICBmdW5jdGlvbiBiblRvQnl0ZUFycmF5KCkge1xuICAgICAgdmFyIGkgPSB0aGlzLnQsIHIgPSBuZXcgQXJyYXkoKTtcbiAgICAgIHJbMF0gPSB0aGlzLnM7XG4gICAgICB2YXIgcCA9IHRoaXMuREItKGkqdGhpcy5EQiklOCwgZCwgayA9IDA7XG4gICAgICBpZihpLS0gPiAwKSB7XG4gICAgICAgIGlmKHAgPCB0aGlzLkRCICYmIChkID0gdGhpc1tpXT4+cCkgIT0gKHRoaXMucyZ0aGlzLkRNKT4+cClcbiAgICAgICAgICByW2srK10gPSBkfCh0aGlzLnM8PCh0aGlzLkRCLXApKTtcbiAgICAgICAgd2hpbGUoaSA+PSAwKSB7XG4gICAgICAgICAgaWYocCA8IDgpIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXSYoKDE8PHApLTEpKTw8KDgtcCk7XG4gICAgICAgICAgICBkIHw9IHRoaXNbLS1pXT4+KHArPXRoaXMuREItOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldPj4ocC09OCkpJjB4ZmY7XG4gICAgICAgICAgICBpZihwIDw9IDApIHsgcCArPSB0aGlzLkRCOyAtLWk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoKGQmMHg4MCkgIT0gMCkgZCB8PSAtMjU2O1xuICAgICAgICAgIGlmKGsgPT0gMCAmJiAodGhpcy5zJjB4ODApICE9IChkJjB4ODApKSArK2s7XG4gICAgICAgICAgaWYoayA+IDAgfHwgZCAhPSB0aGlzLnMpIHJbaysrXSA9IGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJuRXF1YWxzKGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPT0wKTsgfVxuICAgIGZ1bmN0aW9uIGJuTWluKGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPDApP3RoaXM6YTsgfVxuICAgIGZ1bmN0aW9uIGJuTWF4KGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPjApP3RoaXM6YTsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgb3AgYSAoYml0d2lzZSlcbiAgICBmdW5jdGlvbiBibnBCaXR3aXNlVG8oYSxvcCxyKSB7XG4gICAgICB2YXIgaSwgZiwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgbTsgKytpKSByW2ldID0gb3AodGhpc1tpXSxhW2ldKTtcbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBmID0gYS5zJnRoaXMuRE07XG4gICAgICAgIGZvcihpID0gbTsgaSA8IHRoaXMudDsgKytpKSByW2ldID0gb3AodGhpc1tpXSxmKTtcbiAgICAgICAgci50ID0gdGhpcy50O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGYgPSB0aGlzLnMmdGhpcy5ETTtcbiAgICAgICAgZm9yKGkgPSBtOyBpIDwgYS50OyArK2kpIHJbaV0gPSBvcChmLGFbaV0pO1xuICAgICAgICByLnQgPSBhLnQ7XG4gICAgICB9XG4gICAgICByLnMgPSBvcCh0aGlzLnMsYS5zKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICYgYVxuICAgIGZ1bmN0aW9uIG9wX2FuZCh4LHkpIHsgcmV0dXJuIHgmeTsgfVxuICAgIGZ1bmN0aW9uIGJuQW5kKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF9hbmQscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIHwgYVxuICAgIGZ1bmN0aW9uIG9wX29yKHgseSkgeyByZXR1cm4geHx5OyB9XG4gICAgZnVuY3Rpb24gYm5PcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3Bfb3Iscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIF4gYVxuICAgIGZ1bmN0aW9uIG9wX3hvcih4LHkpIHsgcmV0dXJuIHheeTsgfVxuICAgIGZ1bmN0aW9uIGJuWG9yKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF94b3Iscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICYgfmFcbiAgICBmdW5jdGlvbiBvcF9hbmRub3QoeCx5KSB7IHJldHVybiB4Jn55OyB9XG4gICAgZnVuY3Rpb24gYm5BbmROb3QoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmJpdHdpc2VUbyhhLG9wX2FuZG5vdCxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIH50aGlzXG4gICAgZnVuY3Rpb24gYm5Ob3QoKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudDsgKytpKSByW2ldID0gdGhpcy5ETSZ+dGhpc1tpXTtcbiAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgIHIucyA9IH50aGlzLnM7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIDw8IG5cbiAgICBmdW5jdGlvbiBiblNoaWZ0TGVmdChuKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgaWYobiA8IDApIHRoaXMuclNoaWZ0VG8oLW4scik7IGVsc2UgdGhpcy5sU2hpZnRUbyhuLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyA+PiBuXG4gICAgZnVuY3Rpb24gYm5TaGlmdFJpZ2h0KG4pIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICBpZihuIDwgMCkgdGhpcy5sU2hpZnRUbygtbixyKTsgZWxzZSB0aGlzLnJTaGlmdFRvKG4scik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gaW5kZXggb2YgbG93ZXN0IDEtYml0IGluIHgsIHggPCAyXjMxXG4gICAgZnVuY3Rpb24gbGJpdCh4KSB7XG4gICAgICBpZih4ID09IDApIHJldHVybiAtMTtcbiAgICAgIHZhciByID0gMDtcbiAgICAgIGlmKCh4JjB4ZmZmZikgPT0gMCkgeyB4ID4+PSAxNjsgciArPSAxNjsgfVxuICAgICAgaWYoKHgmMHhmZikgPT0gMCkgeyB4ID4+PSA4OyByICs9IDg7IH1cbiAgICAgIGlmKCh4JjB4ZikgPT0gMCkgeyB4ID4+PSA0OyByICs9IDQ7IH1cbiAgICAgIGlmKCh4JjMpID09IDApIHsgeCA+Pj0gMjsgciArPSAyOyB9XG4gICAgICBpZigoeCYxKSA9PSAwKSArK3I7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm5zIGluZGV4IG9mIGxvd2VzdCAxLWJpdCAob3IgLTEgaWYgbm9uZSlcbiAgICBmdW5jdGlvbiBibkdldExvd2VzdFNldEJpdCgpIHtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSlcbiAgICAgICAgaWYodGhpc1tpXSAhPSAwKSByZXR1cm4gaSp0aGlzLkRCK2xiaXQodGhpc1tpXSk7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gdGhpcy50KnRoaXMuREI7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG51bWJlciBvZiAxIGJpdHMgaW4geFxuICAgIGZ1bmN0aW9uIGNiaXQoeCkge1xuICAgICAgdmFyIHIgPSAwO1xuICAgICAgd2hpbGUoeCAhPSAwKSB7IHggJj0geC0xOyArK3I7IH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiBudW1iZXIgb2Ygc2V0IGJpdHNcbiAgICBmdW5jdGlvbiBibkJpdENvdW50KCkge1xuICAgICAgdmFyIHIgPSAwLCB4ID0gdGhpcy5zJnRoaXMuRE07XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy50OyArK2kpIHIgKz0gY2JpdCh0aGlzW2ldXngpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdHJ1ZSBpZmYgbnRoIGJpdCBpcyBzZXRcbiAgICBmdW5jdGlvbiBiblRlc3RCaXQobikge1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKG4vdGhpcy5EQik7XG4gICAgICBpZihqID49IHRoaXMudCkgcmV0dXJuKHRoaXMucyE9MCk7XG4gICAgICByZXR1cm4oKHRoaXNbal0mKDE8PChuJXRoaXMuREIpKSkhPTApO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgb3AgKDE8PG4pXG4gICAgZnVuY3Rpb24gYm5wQ2hhbmdlQml0KG4sb3ApIHtcbiAgICAgIHZhciByID0gQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KG4pO1xuICAgICAgdGhpcy5iaXR3aXNlVG8ocixvcCxyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgfCAoMTw8bilcbiAgICBmdW5jdGlvbiBiblNldEJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX29yKTsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIH4oMTw8bilcbiAgICBmdW5jdGlvbiBibkNsZWFyQml0KG4pIHsgcmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sb3BfYW5kbm90KTsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyBeICgxPDxuKVxuICAgIGZ1bmN0aW9uIGJuRmxpcEJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX3hvcik7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzICsgYVxuICAgIGZ1bmN0aW9uIGJucEFkZFRvKGEscikge1xuICAgICAgdmFyIGkgPSAwLCBjID0gMCwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgd2hpbGUoaSA8IG0pIHtcbiAgICAgICAgYyArPSB0aGlzW2ldK2FbaV07XG4gICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBjICs9IGEucztcbiAgICAgICAgd2hpbGUoaSA8IHRoaXMudCkge1xuICAgICAgICAgIGMgKz0gdGhpc1tpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgICAgd2hpbGUoaSA8IGEudCkge1xuICAgICAgICAgIGMgKz0gYVtpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IGEucztcbiAgICAgIH1cbiAgICAgIHIucyA9IChjPDApPy0xOjA7XG4gICAgICBpZihjID4gMCkgcltpKytdID0gYztcbiAgICAgIGVsc2UgaWYoYyA8IC0xKSByW2krK10gPSB0aGlzLkRWK2M7XG4gICAgICByLnQgPSBpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgKyBhXG4gICAgZnVuY3Rpb24gYm5BZGQoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmFkZFRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIC0gYVxuICAgIGZ1bmN0aW9uIGJuU3VidHJhY3QoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLnN1YlRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICogYVxuICAgIGZ1bmN0aW9uIGJuTXVsdGlwbHkoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLm11bHRpcGx5VG8oYSxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXNeMlxuICAgIGZ1bmN0aW9uIGJuU3F1YXJlKCkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLnNxdWFyZVRvKHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAvIGFcbiAgICBmdW5jdGlvbiBibkRpdmlkZShhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuZGl2UmVtVG8oYSxyLG51bGwpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAlIGFcbiAgICBmdW5jdGlvbiBiblJlbWFpbmRlcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuZGl2UmVtVG8oYSxudWxsLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgW3RoaXMvYSx0aGlzJWFdXG4gICAgZnVuY3Rpb24gYm5EaXZpZGVBbmRSZW1haW5kZXIoYSkge1xuICAgICAgdmFyIHEgPSBuYmkoKSwgciA9IG5iaSgpO1xuICAgICAgdGhpcy5kaXZSZW1UbyhhLHEscik7XG4gICAgICByZXR1cm4gbmV3IEFycmF5KHEscik7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyAqPSBuLCB0aGlzID49IDAsIDEgPCBuIDwgRFZcbiAgICBmdW5jdGlvbiBibnBETXVsdGlwbHkobikge1xuICAgICAgdGhpc1t0aGlzLnRdID0gdGhpcy5hbSgwLG4tMSx0aGlzLDAsMCx0aGlzLnQpO1xuICAgICAgKyt0aGlzLnQ7XG4gICAgICB0aGlzLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyArPSBuIDw8IHcgd29yZHMsIHRoaXMgPj0gMFxuICAgIGZ1bmN0aW9uIGJucERBZGRPZmZzZXQobix3KSB7XG4gICAgICBpZihuID09IDApIHJldHVybjtcbiAgICAgIHdoaWxlKHRoaXMudCA8PSB3KSB0aGlzW3RoaXMudCsrXSA9IDA7XG4gICAgICB0aGlzW3ddICs9IG47XG4gICAgICB3aGlsZSh0aGlzW3ddID49IHRoaXMuRFYpIHtcbiAgICAgICAgdGhpc1t3XSAtPSB0aGlzLkRWO1xuICAgICAgICBpZigrK3cgPj0gdGhpcy50KSB0aGlzW3RoaXMudCsrXSA9IDA7XG4gICAgICAgICsrdGhpc1t3XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBIFwibnVsbFwiIHJlZHVjZXJcbiAgICBmdW5jdGlvbiBOdWxsRXhwKCkge31cbiAgICBmdW5jdGlvbiBuTm9wKHgpIHsgcmV0dXJuIHg7IH1cbiAgICBmdW5jdGlvbiBuTXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IH1cbiAgICBmdW5jdGlvbiBuU3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IH1cblxuICAgIE51bGxFeHAucHJvdG90eXBlLmNvbnZlcnQgPSBuTm9wO1xuICAgIE51bGxFeHAucHJvdG90eXBlLnJldmVydCA9IG5Ob3A7XG4gICAgTnVsbEV4cC5wcm90b3R5cGUubXVsVG8gPSBuTXVsVG87XG4gICAgTnVsbEV4cC5wcm90b3R5cGUuc3FyVG8gPSBuU3FyVG87XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmVcbiAgICBmdW5jdGlvbiBiblBvdyhlKSB7IHJldHVybiB0aGlzLmV4cChlLG5ldyBOdWxsRXhwKCkpOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gbG93ZXIgbiB3b3JkcyBvZiBcInRoaXMgKiBhXCIsIGEudCA8PSBuXG4gICAgLy8gXCJ0aGlzXCIgc2hvdWxkIGJlIHRoZSBsYXJnZXIgb25lIGlmIGFwcHJvcHJpYXRlLlxuICAgIGZ1bmN0aW9uIGJucE11bHRpcGx5TG93ZXJUbyhhLG4scikge1xuICAgICAgdmFyIGkgPSBNYXRoLm1pbih0aGlzLnQrYS50LG4pO1xuICAgICAgci5zID0gMDsgLy8gYXNzdW1lcyBhLHRoaXMgPj0gMFxuICAgICAgci50ID0gaTtcbiAgICAgIHdoaWxlKGkgPiAwKSByWy0taV0gPSAwO1xuICAgICAgdmFyIGo7XG4gICAgICBmb3IoaiA9IHIudC10aGlzLnQ7IGkgPCBqOyArK2kpIHJbaSt0aGlzLnRdID0gdGhpcy5hbSgwLGFbaV0scixpLDAsdGhpcy50KTtcbiAgICAgIGZvcihqID0gTWF0aC5taW4oYS50LG4pOyBpIDwgajsgKytpKSB0aGlzLmFtKDAsYVtpXSxyLGksMCxuLWkpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSBcInRoaXMgKiBhXCIgd2l0aG91dCBsb3dlciBuIHdvcmRzLCBuID4gMFxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBmdW5jdGlvbiBibnBNdWx0aXBseVVwcGVyVG8oYSxuLHIpIHtcbiAgICAgIC0tbjtcbiAgICAgIHZhciBpID0gci50ID0gdGhpcy50K2EudC1uO1xuICAgICAgci5zID0gMDsgLy8gYXNzdW1lcyBhLHRoaXMgPj0gMFxuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSBNYXRoLm1heChuLXRoaXMudCwwKTsgaSA8IGEudDsgKytpKVxuICAgICAgICByW3RoaXMudCtpLW5dID0gdGhpcy5hbShuLWksYVtpXSxyLDAsMCx0aGlzLnQraS1uKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICAgIHIuZHJTaGlmdFRvKDEscik7XG4gICAgfVxuXG4gICAgLy8gQmFycmV0dCBtb2R1bGFyIHJlZHVjdGlvblxuICAgIGZ1bmN0aW9uIEJhcnJldHQobSkge1xuICAgICAgLy8gc2V0dXAgQmFycmV0dFxuICAgICAgdGhpcy5yMiA9IG5iaSgpO1xuICAgICAgdGhpcy5xMyA9IG5iaSgpO1xuICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKDIqbS50LHRoaXMucjIpO1xuICAgICAgdGhpcy5tdSA9IHRoaXMucjIuZGl2aWRlKG0pO1xuICAgICAgdGhpcy5tID0gbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiYXJyZXR0Q29udmVydCh4KSB7XG4gICAgICBpZih4LnMgPCAwIHx8IHgudCA+IDIqdGhpcy5tLnQpIHJldHVybiB4Lm1vZCh0aGlzLm0pO1xuICAgICAgZWxzZSBpZih4LmNvbXBhcmVUbyh0aGlzLm0pIDwgMCkgcmV0dXJuIHg7XG4gICAgICBlbHNlIHsgdmFyIHIgPSBuYmkoKTsgeC5jb3B5VG8ocik7IHRoaXMucmVkdWNlKHIpOyByZXR1cm4gcjsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJhcnJldHRSZXZlcnQoeCkgeyByZXR1cm4geDsgfVxuXG4gICAgLy8geCA9IHggbW9kIG0gKEhBQyAxNC40MilcbiAgICBmdW5jdGlvbiBiYXJyZXR0UmVkdWNlKHgpIHtcbiAgICAgIHguZHJTaGlmdFRvKHRoaXMubS50LTEsdGhpcy5yMik7XG4gICAgICBpZih4LnQgPiB0aGlzLm0udCsxKSB7IHgudCA9IHRoaXMubS50KzE7IHguY2xhbXAoKTsgfVxuICAgICAgdGhpcy5tdS5tdWx0aXBseVVwcGVyVG8odGhpcy5yMix0aGlzLm0udCsxLHRoaXMucTMpO1xuICAgICAgdGhpcy5tLm11bHRpcGx5TG93ZXJUbyh0aGlzLnEzLHRoaXMubS50KzEsdGhpcy5yMik7XG4gICAgICB3aGlsZSh4LmNvbXBhcmVUbyh0aGlzLnIyKSA8IDApIHguZEFkZE9mZnNldCgxLHRoaXMubS50KzEpO1xuICAgICAgeC5zdWJUbyh0aGlzLnIyLHgpO1xuICAgICAgd2hpbGUoeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSB4LnN1YlRvKHRoaXMubSx4KTtcbiAgICB9XG5cbiAgICAvLyByID0geF4yIG1vZCBtOyB4ICE9IHJcbiAgICBmdW5jdGlvbiBiYXJyZXR0U3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICAvLyByID0geCp5IG1vZCBtOyB4LHkgIT0gclxuICAgIGZ1bmN0aW9uIGJhcnJldHRNdWxUbyh4LHkscikgeyB4Lm11bHRpcGx5VG8oeSxyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIEJhcnJldHQucHJvdG90eXBlLmNvbnZlcnQgPSBiYXJyZXR0Q29udmVydDtcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5yZXZlcnQgPSBiYXJyZXR0UmV2ZXJ0O1xuICAgIEJhcnJldHQucHJvdG90eXBlLnJlZHVjZSA9IGJhcnJldHRSZWR1Y2U7XG4gICAgQmFycmV0dC5wcm90b3R5cGUubXVsVG8gPSBiYXJyZXR0TXVsVG87XG4gICAgQmFycmV0dC5wcm90b3R5cGUuc3FyVG8gPSBiYXJyZXR0U3FyVG87XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmUgJSBtIChIQUMgMTQuODUpXG4gICAgZnVuY3Rpb24gYm5Nb2RQb3coZSxtKSB7XG4gICAgICB2YXIgaSA9IGUuYml0TGVuZ3RoKCksIGssIHIgPSBuYnYoMSksIHo7XG4gICAgICBpZihpIDw9IDApIHJldHVybiByO1xuICAgICAgZWxzZSBpZihpIDwgMTgpIGsgPSAxO1xuICAgICAgZWxzZSBpZihpIDwgNDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihpIDwgMTQ0KSBrID0gNDtcbiAgICAgIGVsc2UgaWYoaSA8IDc2OCkgayA9IDU7XG4gICAgICBlbHNlIGsgPSA2O1xuICAgICAgaWYoaSA8IDgpXG4gICAgICAgIHogPSBuZXcgQ2xhc3NpYyhtKTtcbiAgICAgIGVsc2UgaWYobS5pc0V2ZW4oKSlcbiAgICAgICAgeiA9IG5ldyBCYXJyZXR0KG0pO1xuICAgICAgZWxzZVxuICAgICAgICB6ID0gbmV3IE1vbnRnb21lcnkobSk7XG5cbiAgICAgIC8vIHByZWNvbXB1dGF0aW9uXG4gICAgICB2YXIgZyA9IG5ldyBBcnJheSgpLCBuID0gMywgazEgPSBrLTEsIGttID0gKDE8PGspLTE7XG4gICAgICBnWzFdID0gei5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYoayA+IDEpIHtcbiAgICAgICAgdmFyIGcyID0gbmJpKCk7XG4gICAgICAgIHouc3FyVG8oZ1sxXSxnMik7XG4gICAgICAgIHdoaWxlKG4gPD0ga20pIHtcbiAgICAgICAgICBnW25dID0gbmJpKCk7XG4gICAgICAgICAgei5tdWxUbyhnMixnW24tMl0sZ1tuXSk7XG4gICAgICAgICAgbiArPSAyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBqID0gZS50LTEsIHcsIGlzMSA9IHRydWUsIHIyID0gbmJpKCksIHQ7XG4gICAgICBpID0gbmJpdHMoZVtqXSktMTtcbiAgICAgIHdoaWxlKGogPj0gMCkge1xuICAgICAgICBpZihpID49IGsxKSB3ID0gKGVbal0+PihpLWsxKSkma207XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHcgPSAoZVtqXSYoKDE8PChpKzEpKS0xKSk8PChrMS1pKTtcbiAgICAgICAgICBpZihqID4gMCkgdyB8PSBlW2otMV0+Pih0aGlzLkRCK2ktazEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbiA9IGs7XG4gICAgICAgIHdoaWxlKCh3JjEpID09IDApIHsgdyA+Pj0gMTsgLS1uOyB9XG4gICAgICAgIGlmKChpIC09IG4pIDwgMCkgeyBpICs9IHRoaXMuREI7IC0tajsgfVxuICAgICAgICBpZihpczEpIHsgICAgLy8gcmV0ID09IDEsIGRvbid0IGJvdGhlciBzcXVhcmluZyBvciBtdWx0aXBseWluZyBpdFxuICAgICAgICAgIGdbd10uY29weVRvKHIpO1xuICAgICAgICAgIGlzMSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHdoaWxlKG4gPiAxKSB7IHouc3FyVG8ocixyMik7IHouc3FyVG8ocjIscik7IG4gLT0gMjsgfVxuICAgICAgICAgIGlmKG4gPiAwKSB6LnNxclRvKHIscjIpOyBlbHNlIHsgdCA9IHI7IHIgPSByMjsgcjIgPSB0OyB9XG4gICAgICAgICAgei5tdWxUbyhyMixnW3ddLHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUoaiA+PSAwICYmIChlW2pdJigxPDxpKSkgPT0gMCkge1xuICAgICAgICAgIHouc3FyVG8ocixyMik7IHQgPSByOyByID0gcjI7IHIyID0gdDtcbiAgICAgICAgICBpZigtLWkgPCAwKSB7IGkgPSB0aGlzLkRCLTE7IC0tajsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gei5yZXZlcnQocik7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgZ2NkKHRoaXMsYSkgKEhBQyAxNC41NClcbiAgICBmdW5jdGlvbiBibkdDRChhKSB7XG4gICAgICB2YXIgeCA9ICh0aGlzLnM8MCk/dGhpcy5uZWdhdGUoKTp0aGlzLmNsb25lKCk7XG4gICAgICB2YXIgeSA9IChhLnM8MCk/YS5uZWdhdGUoKTphLmNsb25lKCk7XG4gICAgICBpZih4LmNvbXBhcmVUbyh5KSA8IDApIHsgdmFyIHQgPSB4OyB4ID0geTsgeSA9IHQ7IH1cbiAgICAgIHZhciBpID0geC5nZXRMb3dlc3RTZXRCaXQoKSwgZyA9IHkuZ2V0TG93ZXN0U2V0Qml0KCk7XG4gICAgICBpZihnIDwgMCkgcmV0dXJuIHg7XG4gICAgICBpZihpIDwgZykgZyA9IGk7XG4gICAgICBpZihnID4gMCkge1xuICAgICAgICB4LnJTaGlmdFRvKGcseCk7XG4gICAgICAgIHkuclNoaWZ0VG8oZyx5KTtcbiAgICAgIH1cbiAgICAgIHdoaWxlKHguc2lnbnVtKCkgPiAwKSB7XG4gICAgICAgIGlmKChpID0geC5nZXRMb3dlc3RTZXRCaXQoKSkgPiAwKSB4LnJTaGlmdFRvKGkseCk7XG4gICAgICAgIGlmKChpID0geS5nZXRMb3dlc3RTZXRCaXQoKSkgPiAwKSB5LnJTaGlmdFRvKGkseSk7XG4gICAgICAgIGlmKHguY29tcGFyZVRvKHkpID49IDApIHtcbiAgICAgICAgICB4LnN1YlRvKHkseCk7XG4gICAgICAgICAgeC5yU2hpZnRUbygxLHgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHkuc3ViVG8oeCx5KTtcbiAgICAgICAgICB5LnJTaGlmdFRvKDEseSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGcgPiAwKSB5LmxTaGlmdFRvKGcseSk7XG4gICAgICByZXR1cm4geTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzICUgbiwgbiA8IDJeMjZcbiAgICBmdW5jdGlvbiBibnBNb2RJbnQobikge1xuICAgICAgaWYobiA8PSAwKSByZXR1cm4gMDtcbiAgICAgIHZhciBkID0gdGhpcy5EViVuLCByID0gKHRoaXMuczwwKT9uLTE6MDtcbiAgICAgIGlmKHRoaXMudCA+IDApXG4gICAgICAgIGlmKGQgPT0gMCkgciA9IHRoaXNbMF0lbjtcbiAgICAgICAgZWxzZSBmb3IodmFyIGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHIgPSAoZCpyK3RoaXNbaV0pJW47XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSAxL3RoaXMgJSBtIChIQUMgMTQuNjEpXG4gICAgZnVuY3Rpb24gYm5Nb2RJbnZlcnNlKG0pIHtcbiAgICAgIHZhciBhYyA9IG0uaXNFdmVuKCk7XG4gICAgICBpZigodGhpcy5pc0V2ZW4oKSAmJiBhYykgfHwgbS5zaWdudW0oKSA9PSAwKSByZXR1cm4gQmlnSW50ZWdlci5aRVJPO1xuICAgICAgdmFyIHUgPSBtLmNsb25lKCksIHYgPSB0aGlzLmNsb25lKCk7XG4gICAgICB2YXIgYSA9IG5idigxKSwgYiA9IG5idigwKSwgYyA9IG5idigwKSwgZCA9IG5idigxKTtcbiAgICAgIHdoaWxlKHUuc2lnbnVtKCkgIT0gMCkge1xuICAgICAgICB3aGlsZSh1LmlzRXZlbigpKSB7XG4gICAgICAgICAgdS5yU2hpZnRUbygxLHUpO1xuICAgICAgICAgIGlmKGFjKSB7XG4gICAgICAgICAgICBpZighYS5pc0V2ZW4oKSB8fCAhYi5pc0V2ZW4oKSkgeyBhLmFkZFRvKHRoaXMsYSk7IGIuc3ViVG8obSxiKTsgfVxuICAgICAgICAgICAgYS5yU2hpZnRUbygxLGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCFiLmlzRXZlbigpKSBiLnN1YlRvKG0sYik7XG4gICAgICAgICAgYi5yU2hpZnRUbygxLGIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlKHYuaXNFdmVuKCkpIHtcbiAgICAgICAgICB2LnJTaGlmdFRvKDEsdik7XG4gICAgICAgICAgaWYoYWMpIHtcbiAgICAgICAgICAgIGlmKCFjLmlzRXZlbigpIHx8ICFkLmlzRXZlbigpKSB7IGMuYWRkVG8odGhpcyxjKTsgZC5zdWJUbyhtLGQpOyB9XG4gICAgICAgICAgICBjLnJTaGlmdFRvKDEsYyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoIWQuaXNFdmVuKCkpIGQuc3ViVG8obSxkKTtcbiAgICAgICAgICBkLnJTaGlmdFRvKDEsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodS5jb21wYXJlVG8odikgPj0gMCkge1xuICAgICAgICAgIHUuc3ViVG8odix1KTtcbiAgICAgICAgICBpZihhYykgYS5zdWJUbyhjLGEpO1xuICAgICAgICAgIGIuc3ViVG8oZCxiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2LnN1YlRvKHUsdik7XG4gICAgICAgICAgaWYoYWMpIGMuc3ViVG8oYSxjKTtcbiAgICAgICAgICBkLnN1YlRvKGIsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHYuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSAhPSAwKSByZXR1cm4gQmlnSW50ZWdlci5aRVJPO1xuICAgICAgaWYoZC5jb21wYXJlVG8obSkgPj0gMCkgcmV0dXJuIGQuc3VidHJhY3QobSk7XG4gICAgICBpZihkLnNpZ251bSgpIDwgMCkgZC5hZGRUbyhtLGQpOyBlbHNlIHJldHVybiBkO1xuICAgICAgaWYoZC5zaWdudW0oKSA8IDApIHJldHVybiBkLmFkZChtKTsgZWxzZSByZXR1cm4gZDtcbiAgICB9XG5cbiAgICB2YXIgbG93cHJpbWVzID0gWzIsMyw1LDcsMTEsMTMsMTcsMTksMjMsMjksMzEsMzcsNDEsNDMsNDcsNTMsNTksNjEsNjcsNzEsNzMsNzksODMsODksOTcsMTAxLDEwMywxMDcsMTA5LDExMywxMjcsMTMxLDEzNywxMzksMTQ5LDE1MSwxNTcsMTYzLDE2NywxNzMsMTc5LDE4MSwxOTEsMTkzLDE5NywxOTksMjExLDIyMywyMjcsMjI5LDIzMywyMzksMjQxLDI1MSwyNTcsMjYzLDI2OSwyNzEsMjc3LDI4MSwyODMsMjkzLDMwNywzMTEsMzEzLDMxNywzMzEsMzM3LDM0NywzNDksMzUzLDM1OSwzNjcsMzczLDM3OSwzODMsMzg5LDM5Nyw0MDEsNDA5LDQxOSw0MjEsNDMxLDQzMyw0MzksNDQzLDQ0OSw0NTcsNDYxLDQ2Myw0NjcsNDc5LDQ4Nyw0OTEsNDk5LDUwMyw1MDksNTIxLDUyMyw1NDEsNTQ3LDU1Nyw1NjMsNTY5LDU3MSw1NzcsNTg3LDU5Myw1OTksNjAxLDYwNyw2MTMsNjE3LDYxOSw2MzEsNjQxLDY0Myw2NDcsNjUzLDY1OSw2NjEsNjczLDY3Nyw2ODMsNjkxLDcwMSw3MDksNzE5LDcyNyw3MzMsNzM5LDc0Myw3NTEsNzU3LDc2MSw3NjksNzczLDc4Nyw3OTcsODA5LDgxMSw4MjEsODIzLDgyNyw4MjksODM5LDg1Myw4NTcsODU5LDg2Myw4NzcsODgxLDg4Myw4ODcsOTA3LDkxMSw5MTksOTI5LDkzNyw5NDEsOTQ3LDk1Myw5NjcsOTcxLDk3Nyw5ODMsOTkxLDk5N107XG4gICAgdmFyIGxwbGltID0gKDE8PDI2KS9sb3dwcmltZXNbbG93cHJpbWVzLmxlbmd0aC0xXTtcblxuICAgIC8vIChwdWJsaWMpIHRlc3QgcHJpbWFsaXR5IHdpdGggY2VydGFpbnR5ID49IDEtLjVedFxuICAgIGZ1bmN0aW9uIGJuSXNQcm9iYWJsZVByaW1lKHQpIHtcbiAgICAgIHZhciBpLCB4ID0gdGhpcy5hYnMoKTtcbiAgICAgIGlmKHgudCA9PSAxICYmIHhbMF0gPD0gbG93cHJpbWVzW2xvd3ByaW1lcy5sZW5ndGgtMV0pIHtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgbG93cHJpbWVzLmxlbmd0aDsgKytpKVxuICAgICAgICAgIGlmKHhbMF0gPT0gbG93cHJpbWVzW2ldKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYoeC5pc0V2ZW4oKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaSA9IDE7XG4gICAgICB3aGlsZShpIDwgbG93cHJpbWVzLmxlbmd0aCkge1xuICAgICAgICB2YXIgbSA9IGxvd3ByaW1lc1tpXSwgaiA9IGkrMTtcbiAgICAgICAgd2hpbGUoaiA8IGxvd3ByaW1lcy5sZW5ndGggJiYgbSA8IGxwbGltKSBtICo9IGxvd3ByaW1lc1tqKytdO1xuICAgICAgICBtID0geC5tb2RJbnQobSk7XG4gICAgICAgIHdoaWxlKGkgPCBqKSBpZihtJWxvd3ByaW1lc1tpKytdID09IDApIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB4Lm1pbGxlclJhYmluKHQpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRydWUgaWYgcHJvYmFibHkgcHJpbWUgKEhBQyA0LjI0LCBNaWxsZXItUmFiaW4pXG4gICAgZnVuY3Rpb24gYm5wTWlsbGVyUmFiaW4odCkge1xuICAgICAgdmFyIG4xID0gdGhpcy5zdWJ0cmFjdChCaWdJbnRlZ2VyLk9ORSk7XG4gICAgICB2YXIgayA9IG4xLmdldExvd2VzdFNldEJpdCgpO1xuICAgICAgaWYoayA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgciA9IG4xLnNoaWZ0UmlnaHQoayk7XG4gICAgICB0ID0gKHQrMSk+PjE7XG4gICAgICBpZih0ID4gbG93cHJpbWVzLmxlbmd0aCkgdCA9IGxvd3ByaW1lcy5sZW5ndGg7XG4gICAgICB2YXIgYSA9IG5iaSgpO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHQ7ICsraSkge1xuICAgICAgICAvL1BpY2sgYmFzZXMgYXQgcmFuZG9tLCBpbnN0ZWFkIG9mIHN0YXJ0aW5nIGF0IDJcbiAgICAgICAgYS5mcm9tSW50KGxvd3ByaW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbG93cHJpbWVzLmxlbmd0aCldKTtcbiAgICAgICAgdmFyIHkgPSBhLm1vZFBvdyhyLHRoaXMpO1xuICAgICAgICBpZih5LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgIT0gMCAmJiB5LmNvbXBhcmVUbyhuMSkgIT0gMCkge1xuICAgICAgICAgIHZhciBqID0gMTtcbiAgICAgICAgICB3aGlsZShqKysgPCBrICYmIHkuY29tcGFyZVRvKG4xKSAhPSAwKSB7XG4gICAgICAgICAgICB5ID0geS5tb2RQb3dJbnQoMix0aGlzKTtcbiAgICAgICAgICAgIGlmKHkuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHkuY29tcGFyZVRvKG4xKSAhPSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIHByb3RlY3RlZFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNodW5rU2l6ZSA9IGJucENodW5rU2l6ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1JhZGl4ID0gYm5wVG9SYWRpeDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tUmFkaXggPSBibnBGcm9tUmFkaXg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbU51bWJlciA9IGJucEZyb21OdW1iZXI7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0d2lzZVRvID0gYm5wQml0d2lzZVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNoYW5nZUJpdCA9IGJucENoYW5nZUJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGRUbyA9IGJucEFkZFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRNdWx0aXBseSA9IGJucERNdWx0aXBseTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kQWRkT2Zmc2V0ID0gYm5wREFkZE9mZnNldDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseUxvd2VyVG8gPSBibnBNdWx0aXBseUxvd2VyVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlVcHBlclRvID0gYm5wTXVsdGlwbHlVcHBlclRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludCA9IGJucE1vZEludDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5taWxsZXJSYWJpbiA9IGJucE1pbGxlclJhYmluO1xuXG4gICAgLy8gcHVibGljXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2xvbmUgPSBibkNsb25lO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmludFZhbHVlID0gYm5JbnRWYWx1ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ieXRlVmFsdWUgPSBibkJ5dGVWYWx1ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaG9ydFZhbHVlID0gYm5TaG9ydFZhbHVlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNpZ251bSA9IGJuU2lnTnVtO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvQnl0ZUFycmF5ID0gYm5Ub0J5dGVBcnJheTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHMgPSBibkVxdWFscztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5taW4gPSBibk1pbjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tYXggPSBibk1heDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmQgPSBibkFuZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5vciA9IGJuT3I7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUueG9yID0gYm5Yb3I7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kTm90ID0gYm5BbmROb3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubm90ID0gYm5Ob3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRMZWZ0ID0gYm5TaGlmdExlZnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRSaWdodCA9IGJuU2hpZnRSaWdodDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nZXRMb3dlc3RTZXRCaXQgPSBibkdldExvd2VzdFNldEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRDb3VudCA9IGJuQml0Q291bnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudGVzdEJpdCA9IGJuVGVzdEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zZXRCaXQgPSBiblNldEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbGVhckJpdCA9IGJuQ2xlYXJCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZmxpcEJpdCA9IGJuRmxpcEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGQgPSBibkFkZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGJuU3VidHJhY3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHkgPSBibk11bHRpcGx5O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZSA9IGJuRGl2aWRlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnJlbWFpbmRlciA9IGJuUmVtYWluZGVyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZUFuZFJlbWFpbmRlciA9IGJuRGl2aWRlQW5kUmVtYWluZGVyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvdyA9IGJuTW9kUG93O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludmVyc2UgPSBibk1vZEludmVyc2U7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucG93ID0gYm5Qb3c7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ2NkID0gYm5HQ0Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gYm5Jc1Byb2JhYmxlUHJpbWU7XG5cbiAgICAvLyBKU0JOLXNwZWNpZmljIGV4dGVuc2lvblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNxdWFyZSA9IGJuU3F1YXJlO1xuXG4gICAgLy8gRXhwb3NlIHRoZSBCYXJyZXR0IGZ1bmN0aW9uXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuQmFycmV0dCA9IEJhcnJldHRcblxuICAgIC8vIEJpZ0ludGVnZXIgaW50ZXJmYWNlcyBub3QgaW1wbGVtZW50ZWQgaW4ganNibjpcblxuICAgIC8vIEJpZ0ludGVnZXIoaW50IHNpZ251bSwgYnl0ZVtdIG1hZ25pdHVkZSlcbiAgICAvLyBkb3VibGUgZG91YmxlVmFsdWUoKVxuICAgIC8vIGZsb2F0IGZsb2F0VmFsdWUoKVxuICAgIC8vIGludCBoYXNoQ29kZSgpXG4gICAgLy8gbG9uZyBsb25nVmFsdWUoKVxuICAgIC8vIHN0YXRpYyBCaWdJbnRlZ2VyIHZhbHVlT2YobG9uZyB2YWwpXG5cbiAgICAvLyBSYW5kb20gbnVtYmVyIGdlbmVyYXRvciAtIHJlcXVpcmVzIGEgUFJORyBiYWNrZW5kLCBlLmcuIHBybmc0LmpzXG5cbiAgICAvLyBGb3IgYmVzdCByZXN1bHRzLCBwdXQgY29kZSBsaWtlXG4gICAgLy8gPGJvZHkgb25DbGljaz0ncm5nX3NlZWRfdGltZSgpOycgb25LZXlQcmVzcz0ncm5nX3NlZWRfdGltZSgpOyc+XG4gICAgLy8gaW4geW91ciBtYWluIEhUTUwgZG9jdW1lbnQuXG5cbiAgICB2YXIgcm5nX3N0YXRlO1xuICAgIHZhciBybmdfcG9vbDtcbiAgICB2YXIgcm5nX3BwdHI7XG5cbiAgICAvLyBNaXggaW4gYSAzMi1iaXQgaW50ZWdlciBpbnRvIHRoZSBwb29sXG4gICAgZnVuY3Rpb24gcm5nX3NlZWRfaW50KHgpIHtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49IHggJiAyNTU7XG4gICAgICBybmdfcG9vbFtybmdfcHB0cisrXSBePSAoeCA+PiA4KSAmIDI1NTtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49ICh4ID4+IDE2KSAmIDI1NTtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49ICh4ID4+IDI0KSAmIDI1NTtcbiAgICAgIGlmKHJuZ19wcHRyID49IHJuZ19wc2l6ZSkgcm5nX3BwdHIgLT0gcm5nX3BzaXplO1xuICAgIH1cblxuICAgIC8vIE1peCBpbiB0aGUgY3VycmVudCB0aW1lICh3L21pbGxpc2Vjb25kcykgaW50byB0aGUgcG9vbFxuICAgIGZ1bmN0aW9uIHJuZ19zZWVkX3RpbWUoKSB7XG4gICAgICBybmdfc2VlZF9pbnQobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgdGhlIHBvb2wgd2l0aCBqdW5rIGlmIG5lZWRlZC5cbiAgICBpZihybmdfcG9vbCA9PSBudWxsKSB7XG4gICAgICBybmdfcG9vbCA9IG5ldyBBcnJheSgpO1xuICAgICAgcm5nX3BwdHIgPSAwO1xuICAgICAgdmFyIHQ7XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5jcnlwdG8pIHtcbiAgICAgICAgaWYgKHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgLy8gVXNlIHdlYmNyeXB0byBpZiBhdmFpbGFibGVcbiAgICAgICAgICB2YXIgdWEgPSBuZXcgVWludDhBcnJheSgzMik7XG4gICAgICAgICAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXModWEpO1xuICAgICAgICAgIGZvcih0ID0gMDsgdCA8IDMyOyArK3QpXG4gICAgICAgICAgICBybmdfcG9vbFtybmdfcHB0cisrXSA9IHVhW3RdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobmF2aWdhdG9yLmFwcE5hbWUgPT0gXCJOZXRzY2FwZVwiICYmIG5hdmlnYXRvci5hcHBWZXJzaW9uIDwgXCI1XCIpIHtcbiAgICAgICAgICAvLyBFeHRyYWN0IGVudHJvcHkgKDI1NiBiaXRzKSBmcm9tIE5TNCBSTkcgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgdmFyIHogPSB3aW5kb3cuY3J5cHRvLnJhbmRvbSgzMik7XG4gICAgICAgICAgZm9yKHQgPSAwOyB0IDwgei5sZW5ndGg7ICsrdClcbiAgICAgICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gei5jaGFyQ29kZUF0KHQpICYgMjU1O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aGlsZShybmdfcHB0ciA8IHJuZ19wc2l6ZSkgeyAgLy8gZXh0cmFjdCBzb21lIHJhbmRvbW5lc3MgZnJvbSBNYXRoLnJhbmRvbSgpXG4gICAgICAgIHQgPSBNYXRoLmZsb29yKDY1NTM2ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gdCA+Pj4gODtcbiAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB0ICYgMjU1O1xuICAgICAgfVxuICAgICAgcm5nX3BwdHIgPSAwO1xuICAgICAgcm5nX3NlZWRfdGltZSgpO1xuICAgICAgLy9ybmdfc2VlZF9pbnQod2luZG93LnNjcmVlblgpO1xuICAgICAgLy9ybmdfc2VlZF9pbnQod2luZG93LnNjcmVlblkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJuZ19nZXRfYnl0ZSgpIHtcbiAgICAgIGlmKHJuZ19zdGF0ZSA9PSBudWxsKSB7XG4gICAgICAgIHJuZ19zZWVkX3RpbWUoKTtcbiAgICAgICAgcm5nX3N0YXRlID0gcHJuZ19uZXdzdGF0ZSgpO1xuICAgICAgICBybmdfc3RhdGUuaW5pdChybmdfcG9vbCk7XG4gICAgICAgIGZvcihybmdfcHB0ciA9IDA7IHJuZ19wcHRyIDwgcm5nX3Bvb2wubGVuZ3RoOyArK3JuZ19wcHRyKVxuICAgICAgICAgIHJuZ19wb29sW3JuZ19wcHRyXSA9IDA7XG4gICAgICAgIHJuZ19wcHRyID0gMDtcbiAgICAgICAgLy9ybmdfcG9vbCA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBhbGxvdyByZXNlZWRpbmcgYWZ0ZXIgZmlyc3QgcmVxdWVzdFxuICAgICAgcmV0dXJuIHJuZ19zdGF0ZS5uZXh0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcm5nX2dldF9ieXRlcyhiYSkge1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IoaSA9IDA7IGkgPCBiYS5sZW5ndGg7ICsraSkgYmFbaV0gPSBybmdfZ2V0X2J5dGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTZWN1cmVSYW5kb20oKSB7fVxuXG4gICAgU2VjdXJlUmFuZG9tLnByb3RvdHlwZS5uZXh0Qnl0ZXMgPSBybmdfZ2V0X2J5dGVzO1xuXG4gICAgLy8gcHJuZzQuanMgLSB1c2VzIEFyY2ZvdXIgYXMgYSBQUk5HXG5cbiAgICBmdW5jdGlvbiBBcmNmb3VyKCkge1xuICAgICAgdGhpcy5pID0gMDtcbiAgICAgIHRoaXMuaiA9IDA7XG4gICAgICB0aGlzLlMgPSBuZXcgQXJyYXkoKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFyY2ZvdXIgY29udGV4dCBmcm9tIGtleSwgYW4gYXJyYXkgb2YgaW50cywgZWFjaCBmcm9tIFswLi4yNTVdXG4gICAgZnVuY3Rpb24gQVJDNGluaXQoa2V5KSB7XG4gICAgICB2YXIgaSwgaiwgdDtcbiAgICAgIGZvcihpID0gMDsgaSA8IDI1NjsgKytpKVxuICAgICAgICB0aGlzLlNbaV0gPSBpO1xuICAgICAgaiA9IDA7XG4gICAgICBmb3IoaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICBqID0gKGogKyB0aGlzLlNbaV0gKyBrZXlbaSAlIGtleS5sZW5ndGhdKSAmIDI1NTtcbiAgICAgICAgdCA9IHRoaXMuU1tpXTtcbiAgICAgICAgdGhpcy5TW2ldID0gdGhpcy5TW2pdO1xuICAgICAgICB0aGlzLlNbal0gPSB0O1xuICAgICAgfVxuICAgICAgdGhpcy5pID0gMDtcbiAgICAgIHRoaXMuaiA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQVJDNG5leHQoKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIHRoaXMuaSA9ICh0aGlzLmkgKyAxKSAmIDI1NTtcbiAgICAgIHRoaXMuaiA9ICh0aGlzLmogKyB0aGlzLlNbdGhpcy5pXSkgJiAyNTU7XG4gICAgICB0ID0gdGhpcy5TW3RoaXMuaV07XG4gICAgICB0aGlzLlNbdGhpcy5pXSA9IHRoaXMuU1t0aGlzLmpdO1xuICAgICAgdGhpcy5TW3RoaXMual0gPSB0O1xuICAgICAgcmV0dXJuIHRoaXMuU1sodCArIHRoaXMuU1t0aGlzLmldKSAmIDI1NV07XG4gICAgfVxuXG4gICAgQXJjZm91ci5wcm90b3R5cGUuaW5pdCA9IEFSQzRpbml0O1xuICAgIEFyY2ZvdXIucHJvdG90eXBlLm5leHQgPSBBUkM0bmV4dDtcblxuICAgIC8vIFBsdWcgaW4geW91ciBSTkcgY29uc3RydWN0b3IgaGVyZVxuICAgIGZ1bmN0aW9uIHBybmdfbmV3c3RhdGUoKSB7XG4gICAgICByZXR1cm4gbmV3IEFyY2ZvdXIoKTtcbiAgICB9XG5cbiAgICAvLyBQb29sIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQgYW5kIGdyZWF0ZXIgdGhhbiAzMi5cbiAgICAvLyBBbiBhcnJheSBvZiBieXRlcyB0aGUgc2l6ZSBvZiB0aGUgcG9vbCB3aWxsIGJlIHBhc3NlZCB0byBpbml0KClcbiAgICB2YXIgcm5nX3BzaXplID0gMjU2O1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgICAgICBkZWZhdWx0OiBCaWdJbnRlZ2VyLFxuICAgICAgICAgICAgQmlnSW50ZWdlcjogQmlnSW50ZWdlcixcbiAgICAgICAgICAgIFNlY3VyZVJhbmRvbTogU2VjdXJlUmFuZG9tLFxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuanNibiA9IHtcbiAgICAgICAgICBCaWdJbnRlZ2VyOiBCaWdJbnRlZ2VyLFxuICAgICAgICAgIFNlY3VyZVJhbmRvbTogU2VjdXJlUmFuZG9tXG4gICAgICAgIH07XG4gICAgfVxuXG59KS5jYWxsKHRoaXMpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBUaW1lciB9IGZyb20gJy4vVGltZXIuanMnO1xyXG5cclxuY29uc3QgRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gNjA7IC8vIHNlY29uZHNcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJpbmdUaW1lciA9IG5ldyBUaW1lcihcIkFjY2VzcyB0b2tlbiBleHBpcmluZ1wiKSxcclxuICAgICAgICBhY2Nlc3NUb2tlbkV4cGlyZWRUaW1lciA9IG5ldyBUaW1lcihcIkFjY2VzcyB0b2tlbiBleHBpcmVkXCIpXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xyXG5cclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nID0gYWNjZXNzVG9rZW5FeHBpcmluZ1RpbWVyO1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZCA9IGFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoY29udGFpbmVyKSB7XHJcbiAgICAgICAgLy8gb25seSByZWdpc3RlciBldmVudHMgaWYgdGhlcmUncyBhbiBhY2Nlc3MgdG9rZW4gYW5kIGl0IGhhcyBhbiBleHBpcmF0aW9uXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lci5hY2Nlc3NfdG9rZW4gJiYgY29udGFpbmVyLmV4cGlyZXNfaW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSBjb250YWluZXIuZXhwaXJlc19pbjtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQWNjZXNzVG9rZW5FdmVudHMubG9hZDogYWNjZXNzIHRva2VuIHByZXNlbnQsIHJlbWFpbmluZyBkdXJhdGlvbjpcIiwgZHVyYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gb25seSByZWdpc3RlciBleHBpcmluZyBpZiB3ZSBzdGlsbCBoYXZlIHRpbWVcclxuICAgICAgICAgICAgICAgIGxldCBleHBpcmluZyA9IGR1cmF0aW9uIC0gdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhwaXJpbmcgPD0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJpbmcgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiByZWdpc3RlcmluZyBleHBpcmluZyB0aW1lciBpbjpcIiwgZXhwaXJpbmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5pbml0KGV4cGlyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IGNhbmNlbGluZyBleGlzdGluZyBleHBpcmluZyB0aW1lciBiZWNhc2Ugd2UncmUgcGFzdCBleHBpcmF0aW9uLlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgbmVnYXRpdmUsIGl0IHdpbGwgc3RpbGwgZmlyZVxyXG4gICAgICAgICAgICBsZXQgZXhwaXJlZCA9IGR1cmF0aW9uICsgMTtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQWNjZXNzVG9rZW5FdmVudHMubG9hZDogcmVnaXN0ZXJpbmcgZXhwaXJlZCB0aW1lciBpbjpcIiwgZXhwaXJlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5pbml0KGV4cGlyZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bmxvYWQoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiQWNjZXNzVG9rZW5FdmVudHMudW5sb2FkOiBjYW5jZWxpbmcgZXhpc3RpbmcgYWNjZXNzIHRva2VuIHRpbWVyc1wiKTtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmNhbmNlbCgpO1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBY2Nlc3NUb2tlbkV4cGlyaW5nKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJpbmcoY2IpIHtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFjY2Vzc1Rva2VuRXhwaXJlZChjYikge1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJlZChjYikge1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5yZW1vdmVIYW5kbGVyKGNiKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0SW50ZXJ2YWwgPSAyMDAwO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrU2Vzc2lvbklGcmFtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaywgY2xpZW50X2lkLCB1cmwsIGludGVydmFsLCBzdG9wT25FcnJvciA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IGNsaWVudF9pZDtcclxuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBpbnRlcnZhbCB8fCBEZWZhdWx0SW50ZXJ2YWw7XHJcbiAgICAgICAgdGhpcy5fc3RvcE9uRXJyb3IgPSBzdG9wT25FcnJvcjtcclxuXHJcbiAgICAgICAgdmFyIGlkeCA9IHVybC5pbmRleE9mKFwiL1wiLCB1cmwuaW5kZXhPZihcIi8vXCIpICsgMik7XHJcbiAgICAgICAgdGhpcy5fZnJhbWVfb3JpZ2luID0gdXJsLnN1YnN0cigwLCBpZHgpO1xyXG5cclxuICAgICAgICB0aGlzLl9mcmFtZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG5cclxuICAgICAgICAvLyBzaG90Z3VuIGFwcHJvYWNoXHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLndpZHRoID0gMDtcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5oZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9mcmFtZS5zcmMgPSB1cmw7XHJcbiAgICB9XHJcbiAgICBsb2FkKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9mcmFtZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2ZyYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQgPSB0aGlzLl9tZXNzYWdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX21lc3NhZ2UoZSkge1xyXG4gICAgICAgIGlmIChlLm9yaWdpbiA9PT0gdGhpcy5fZnJhbWVfb3JpZ2luICYmXHJcbiAgICAgICAgICAgIGUuc291cmNlID09PSB0aGlzLl9mcmFtZS5jb250ZW50V2luZG93XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEgPT09IFwiZXJyb3JcIikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiQ2hlY2tTZXNzaW9uSUZyYW1lOiBlcnJvciBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RvcE9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLmRhdGEgPT09IFwiY2hhbmdlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJDaGVja1Nlc3Npb25JRnJhbWU6IGNoYW5nZWQgbWVzc2FnZSBmcm9tIGNoZWNrIHNlc3Npb24gb3AgaWZyYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ2hlY2tTZXNzaW9uSUZyYW1lOiBcIiArIGUuZGF0YSArIFwiIG1lc3NhZ2UgZnJvbSBjaGVjayBzZXNzaW9uIG9wIGlmcmFtZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0KHNlc3Npb25fc3RhdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2Vzc2lvbl9zdGF0ZSAhPT0gc2Vzc2lvbl9zdGF0ZSkge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJDaGVja1Nlc3Npb25JRnJhbWUuc3RhcnRcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Nlc3Npb25fc3RhdGUgPSBzZXNzaW9uX3N0YXRlO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHRoaXMuX2NsaWVudF9pZCArIFwiIFwiICsgdGhpcy5fc2Vzc2lvbl9zdGF0ZSwgdGhpcy5fZnJhbWVfb3JpZ2luKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgbm93XHJcbiAgICAgICAgICAgIHNlbmQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFuZCBzZXR1cCB0aW1lclxyXG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbChzZW5kLCB0aGlzLl9pbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5fc2Vzc2lvbl9zdGF0ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl90aW1lcikge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJDaGVja1Nlc3Npb25JRnJhbWUuc3RvcFwiKTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBDb3Jkb3ZhUG9wdXBXaW5kb3cgfSBmcm9tICcuL0NvcmRvdmFQb3B1cFdpbmRvdy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZG92YUlGcmFtZU5hdmlnYXRvciB7XHJcblxyXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcclxuICAgICAgICBwYXJhbXMucG9wdXBXaW5kb3dGZWF0dXJlcyA9ICdoaWRkZW49eWVzJztcclxuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgQ29yZG92YVBvcHVwV2luZG93KHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3B1cCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgQ29yZG92YVBvcHVwV2luZG93IH0gZnJvbSAnLi9Db3Jkb3ZhUG9wdXBXaW5kb3cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvcmRvdmFQb3B1cE5hdmlnYXRvciB7XHJcblxyXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcclxuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgQ29yZG92YVBvcHVwV2luZG93KHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3B1cCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuY29uc3QgRGVmYXVsdFBvcHVwRmVhdHVyZXMgPSAnbG9jYXRpb249bm8sdG9vbGJhcj1ubyx6b29tPW5vJztcclxuY29uc3QgRGVmYXVsdFBvcHVwVGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhUG9wdXBXaW5kb3cge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBwYXJhbXMucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCBEZWZhdWx0UG9wdXBGZWF0dXJlcztcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHBhcmFtcy5wb3B1cFdpbmRvd1RhcmdldCB8fCBEZWZhdWx0UG9wdXBUYXJnZXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdF91cmkgPSBwYXJhbXMuc3RhcnRVcmw7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93LmN0b3I6IHJlZGlyZWN0X3VyaTogXCIgKyB0aGlzLnJlZGlyZWN0X3VyaSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2lzSW5BcHBCcm93c2VySW5zdGFsbGVkKGNvcmRvdmFNZXRhZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBbXCJjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXJcIiwgXCJjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXIuaW5hcHBicm93c2VyXCIsIFwib3JnLmFwYWNoZS5jb3Jkb3ZhLmluYXBwYnJvd3NlclwiXS5zb21lKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3Jkb3ZhTWV0YWRhdGEuaGFzT3duUHJvcGVydHkobmFtZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcclxuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5jb3Jkb3ZhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3IoXCJjb3Jkb3ZhIGlzIHVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY29yZG92YU1ldGFkYXRhID0gd2luZG93LmNvcmRvdmEucmVxdWlyZShcImNvcmRvdmEvcGx1Z2luX2xpc3RcIikubWV0YWRhdGE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0luQXBwQnJvd3Nlckluc3RhbGxlZChjb3Jkb3ZhTWV0YWRhdGEpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKFwiSW5BcHBCcm93c2VyIHBsdWdpbiBub3QgZm91bmRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9wb3B1cCA9IGNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW4ocGFyYW1zLnVybCwgdGhpcy50YXJnZXQsIHRoaXMuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcG9wdXApIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogcG9wdXAgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4aXRDYWxsYmFja0V2ZW50ID0gdGhpcy5fZXhpdENhbGxiYWNrLmJpbmQodGhpcyk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCA9IHRoaXMuX2xvYWRTdGFydENhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJleGl0XCIsIHRoaXMuX2V4aXRDYWxsYmFja0V2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibG9hZHN0YXJ0XCIsIHRoaXMuX2xvYWRTdGFydENhbGxiYWNrRXZlbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiRXJyb3Igb3BlbmluZyBwb3B1cCB3aW5kb3dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvbWlzZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBfbG9hZFN0YXJ0Q2FsbGJhY2soZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudXJsLmluZGV4T2YodGhpcy5yZWRpcmVjdF91cmkpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Y2Nlc3MoeyB1cmw6IGV2ZW50LnVybCB9KTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG4gICAgX2V4aXRDYWxsYmFjayhtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fZXJyb3IobWVzc2FnZSk7ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfc3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJDb3Jkb3ZhUG9wdXBXaW5kb3c6IFN1Y2Nlc3NmdWwgcmVzcG9uc2UgZnJvbSBjb3Jkb3ZhIHBvcHVwIHdpbmRvd1wiKTtcclxuICAgICAgICB0aGlzLl9yZXNvbHZlKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgX2Vycm9yKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcblxyXG4gICAgICAgIExvZy5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLl9yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFudXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwKXtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93OiBjbGVhbmluZyB1cCBwb3B1cFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImV4aXRcIiwgdGhpcy5fZXhpdENhbGxiYWNrRXZlbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRzdGFydFwiLCB0aGlzLl9sb2FkU3RhcnRDYWxsYmFja0V2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BvcHVwID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRXJyb3JSZXNwb25zZSBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHtlcnJvciwgZXJyb3JfZGVzY3JpcHRpb24sIGVycm9yX3VyaSwgc3RhdGUsIHNlc3Npb25fc3RhdGV9PXt9XHJcbiAgICApIHtcclxuICAgICAgICAgaWYgKCFlcnJvcil7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIGVycm9yIHBhc3NlZCB0byBFcnJvclJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1cGVyKGVycm9yX2Rlc2NyaXB0aW9uIHx8IGVycm9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJFcnJvclJlc3BvbnNlXCI7XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcclxuICAgICAgICB0aGlzLmVycm9yX2Rlc2NyaXB0aW9uID0gZXJyb3JfZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5lcnJvcl91cmkgPSBlcnJvcl91cmk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLnNlc3Npb25fc3RhdGUgPSBzZXNzaW9uX3N0YXRlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEhhbmRsZXIoY2IpIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3MucHVzaChjYik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSGFuZGxlcihjYikge1xyXG4gICAgICAgIHZhciBpZHggPSB0aGlzLl9jYWxsYmFja3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gY2IpO1xyXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3Muc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJhaXNlKC4uLnBhcmFtcykge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIkV2ZW50OiBSYWlzaW5nIGV2ZW50OiBcIiArIHRoaXMuX25hbWUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1tpXSguLi5wYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5jb25zdCB0aW1lciA9IHtcclxuICAgIHNldEludGVydmFsOiBmdW5jdGlvbiAoY2IsIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKGNiLCBkdXJhdGlvbik7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJJbnRlcnZhbDogZnVuY3Rpb24gKGhhbmRsZSkge1xyXG4gICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGhhbmRsZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5sZXQgdGVzdGluZyA9IGZhbHNlO1xyXG5sZXQgcmVxdWVzdCA9IG51bGw7XHJcblxyXG5leHBvcnQgY2xhc3MgR2xvYmFsIHtcclxuXHJcbiAgICBzdGF0aWMgX3Rlc3RpbmcoKSB7XHJcbiAgICAgICAgdGVzdGluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBsb2NhdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRlc3RpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGxvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICBpZiAoIXRlc3RpbmcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBzZXNzaW9uU3RvcmFnZSgpIHtcclxuICAgICAgICBpZiAoIXRlc3RpbmcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0WE1MSHR0cFJlcXVlc3QobmV3UmVxdWVzdCkge1xyXG4gICAgICAgIHJlcXVlc3QgPSBuZXdSZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgWE1MSHR0cFJlcXVlc3QoKSB7XHJcbiAgICAgICAgaWYgKCF0ZXN0aW5nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0IHx8IFhNTEh0dHBSZXF1ZXN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IHRpbWVyKCkge1xyXG4gICAgICAgIGlmICghdGVzdGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGltZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgSUZyYW1lV2luZG93IH0gZnJvbSAnLi9JRnJhbWVXaW5kb3cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIElGcmFtZU5hdmlnYXRvciB7XHJcblxyXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcclxuICAgICAgICBsZXQgZnJhbWUgPSBuZXcgSUZyYW1lV2luZG93KHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbGJhY2sodXJsKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lTmF2aWdhdG9yLmNhbGxiYWNrXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBJRnJhbWVXaW5kb3cubm90aWZ5UGFyZW50KHVybCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0VGltZW91dCA9IDEwMDAwO1xyXG5cclxuZXhwb3J0IGNsYXNzIElGcmFtZVdpbmRvdyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQgPSB0aGlzLl9tZXNzYWdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50LCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcblxyXG4gICAgICAgIC8vIHNob3RndW4gYXBwcm9hY2hcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUud2lkdGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2ZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcclxuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lb3V0ID0gcGFyYW1zLnNpbGVudFJlcXVlc3RUaW1lb3V0IHx8IERlZmF1bHRUaW1lb3V0O1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cubmF2aWdhdGU6IFVzaW5nIHRpbWVvdXQgb2Y6XCIsIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuX3RpbWVvdXQuYmluZCh0aGlzKSwgdGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lLnNyYyA9IHBhcmFtcy51cmw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9taXNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9zdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdzogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIGZyYW1lIHdpbmRvd1wiKTtcclxuICAgICAgICB0aGlzLl9yZXNvbHZlKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgX2Vycm9yKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcblxyXG4gICAgICAgIExvZy5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLl9yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFudXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZyYW1lKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdzogY2xlYW51cFwiKTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcclxuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5fZnJhbWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9mcmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3RpbWVvdXQoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93LnRpbWVvdXRcIik7XHJcbiAgICAgICAgdGhpcy5fZXJyb3IoXCJGcmFtZSB3aW5kb3cgdGltZWQgb3V0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9tZXNzYWdlKGUpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cubWVzc2FnZVwiKTtcclxuXHRcdGNvbnNvbGUubG9nKCdSZWNlaXZlZCBtZXNzYWdlIGZyb20gY2hpbGQgJyArIEpTT04uc3RyaW5naWZ5KGUpKTtcclxuXHRcdGNvbnNvbGUubG9nKCdNdXN0IGhhdmU6IG9yaWdpbiA9PSAnICsgdGhpcy5fb3JpZ2luICArICcsIHNvdXJjZSA9PSAnICsgdGhpcy5fZnJhbWUuY29udGVudFdpbmRvdyArICcgYW5kIGRhdGEgbm90IGZhbHNleScpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fdGltZXIgJiZcclxuICAgICAgICAgICAgZS5vcmlnaW4gPT09IHRoaXMuX29yaWdpbiAmJlxyXG4gICAgICAgICAgICBlLnNvdXJjZSA9PT0gdGhpcy5fZnJhbWUuY29udGVudFdpbmRvd1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gZS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWNjZXNzKHsgdXJsOiB1cmwgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihcIkludmFsaWQgcmVzcG9uc2UgZnJvbSBmcmFtZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgX29yaWdpbigpIHtcclxuICAgICAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3RpZnlQYXJlbnQodXJsKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93Lm5vdGlmeVBhcmVudFwiKTtcclxuICAgICAgICB1cmwgPSB1cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cubm90aWZ5UGFyZW50OiBwb3N0aW5nIHVybCBtZXNzYWdlIHRvIHBhcmVudFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1Bvc3RpbmcgbWVzc2FnZSB0byBwYXJlbnQgXCInICsgdXJsICsgJ1wiIGF0IGxvY2F0aW9uOiBcIicgKyBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3QgKyAnXCInKTtcclxuICAgICAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh1cmwsIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeVdlYlN0b3JhZ2V7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtKGtleSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIkluTWVtb3J5V2ViU3RvcmFnZS5nZXRJdGVtXCIsIGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJdGVtKGtleSwgdmFsdWUpe1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIkluTWVtb3J5V2ViU3RvcmFnZS5zZXRJdGVtXCIsIGtleSk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSXRlbShrZXkpe1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIkluTWVtb3J5V2ViU3RvcmFnZS5yZW1vdmVJdGVtXCIsIGtleSk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2RhdGFba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLl9kYXRhKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAga2V5KGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuX2RhdGEpW2luZGV4XTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRKb3NlVXRpbCh7IGp3cywgS2V5VXRpbCwgWDUwOSwgY3J5cHRvLCBoZXh0b2I2NHUsIGI2NHRvaGV4LCBBbGxvd2VkU2lnbmluZ0FsZ3MgfSkge1xyXG4gICAgcmV0dXJuIGNsYXNzIEpvc2VVdGlsIHtcclxuXHJcbiAgICAgICAgc3RhdGljIHBhcnNlSnd0KGp3dCkge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJKb3NlVXRpbC5wYXJzZUp3dFwiKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IGp3cy5KV1MucGFyc2Uoand0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB0b2tlbi5oZWFkZXJPYmosXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogdG9rZW4ucGF5bG9hZE9ialxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyB2YWxpZGF0ZUp3dChqd3QsIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3LCBub3csIHRpbWVJbnNlbnNpdGl2ZSkge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJKb3NlVXRpbC52YWxpZGF0ZUp3dFwiKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5Lmt0eSA9PT0gXCJSU0FcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuZSAmJiBrZXkubikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBLZXlVdGlsLmdldEtleShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Lng1YyAmJiBrZXkueDVjLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGV4ID0gYjY0dG9oZXgoa2V5Lng1Y1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IFg1MDkuZ2V0UHVibGljS2V5RnJvbUNlcnRIZXgoaGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC52YWxpZGF0ZUp3dDogUlNBIGtleSBtaXNzaW5nIGtleSBtYXRlcmlhbFwiLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUlNBIGtleSBtaXNzaW5nIGtleSBtYXRlcmlhbFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkua3R5ID09PSBcIkVDXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmNydiAmJiBrZXkueCAmJiBrZXkueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBLZXlVdGlsLmdldEtleShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLnZhbGlkYXRlSnd0OiBFQyBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIiwga2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkVDIGtleSBtaXNzaW5nIGtleSBtYXRlcmlhbFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC52YWxpZGF0ZUp3dDogVW5zdXBwb3J0ZWQga2V5IHR5cGVcIiwga2V5ICYmIGtleS5rdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBrZXkgdHlwZTogXCIgKyBrZXkgJiYga2V5Lmt0eSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBKb3NlVXRpbC5fdmFsaWRhdGVKd3Qoand0LCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93LCB0aW1lSW5zZW5zaXRpdmUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoZSAmJiBlLm1lc3NhZ2UgfHwgZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJKV1QgdmFsaWRhdGlvbiBmYWlsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyB2YWxpZGF0ZUp3dEF0dHJpYnV0ZXMoand0LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlKSB7XHJcbiAgICAgICAgICAgIGlmICghY2xvY2tTa2V3KSB7XHJcbiAgICAgICAgICAgICAgICBjbG9ja1NrZXcgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIW5vdykge1xyXG4gICAgICAgICAgICAgICAgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGF5bG9hZCA9IEpvc2VVdGlsLnBhcnNlSnd0KGp3dCkucGF5bG9hZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghcGF5bG9hZC5pc3MpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogaXNzdWVyIHdhcyBub3QgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaXNzdWVyIHdhcyBub3QgcHJvdmlkZWRcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmlzcyAhPT0gaXNzdWVyKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IEludmFsaWQgaXNzdWVyIGluIHRva2VuXCIsIHBheWxvYWQuaXNzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIGlzc3VlciBpbiB0b2tlbjogXCIgKyBwYXlsb2FkLmlzcykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuYXVkKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGF1ZCB3YXMgbm90IHByb3ZpZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImF1ZCB3YXMgbm90IHByb3ZpZGVkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdmFsaWRBdWRpZW5jZSA9IHBheWxvYWQuYXVkID09PSBhdWRpZW5jZSB8fCAoQXJyYXkuaXNBcnJheShwYXlsb2FkLmF1ZCkgJiYgcGF5bG9hZC5hdWQuaW5kZXhPZihhdWRpZW5jZSkgPj0gMCk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRBdWRpZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBJbnZhbGlkIGF1ZGllbmNlIGluIHRva2VuXCIsIHBheWxvYWQuYXVkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIGF1ZGllbmNlIGluIHRva2VuOiBcIiArIHBheWxvYWQuYXVkKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBheWxvYWQuYXpwICYmIHBheWxvYWQuYXpwICE9PSBhdWRpZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBJbnZhbGlkIGF6cCBpbiB0b2tlblwiLCBwYXlsb2FkLmF6cCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBhenAgaW4gdG9rZW46IFwiICsgcGF5bG9hZC5henApKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aW1lSW5zZW5zaXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsb3dlck5vdyA9IG5vdyArIGNsb2NrU2tldztcclxuICAgICAgICAgICAgICAgIHZhciB1cHBlck5vdyA9IG5vdyAtIGNsb2NrU2tldztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBheWxvYWQuaWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBpYXQgd2FzIG5vdCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaWF0IHdhcyBub3QgcHJvdmlkZWRcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxvd2VyTm93IDwgcGF5bG9hZC5pYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGlhdCBpcyBpbiB0aGUgZnV0dXJlXCIsIHBheWxvYWQuaWF0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaWF0IGlzIGluIHRoZSBmdXR1cmU6IFwiICsgcGF5bG9hZC5pYXQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5uYmYgJiYgbG93ZXJOb3cgPCBwYXlsb2FkLm5iZikge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogbmJmIGlzIGluIHRoZSBmdXR1cmVcIiwgcGF5bG9hZC5uYmYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJuYmYgaXMgaW4gdGhlIGZ1dHVyZTogXCIgKyBwYXlsb2FkLm5iZikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcGF5bG9hZC5leHApIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGV4cCB3YXMgbm90IHByb3ZpZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJleHAgd2FzIG5vdCBwcm92aWRlZFwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5leHAgPCB1cHBlck5vdykge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogZXhwIGlzIGluIHRoZSBwYXN0XCIsIHBheWxvYWQuZXhwKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiZXhwIGlzIGluIHRoZSBwYXN0OlwiICsgcGF5bG9hZC5leHApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwYXlsb2FkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBfdmFsaWRhdGVKd3Qoand0LCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93LCB0aW1lSW5zZW5zaXRpdmUpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBKb3NlVXRpbC52YWxpZGF0ZUp3dEF0dHJpYnV0ZXMoand0LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlKS50aGVuKHBheWxvYWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWp3cy5KV1MudmVyaWZ5KGp3dCwga2V5LCBBbGxvd2VkU2lnbmluZ0FsZ3MpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogc2lnbmF0dXJlIHZhbGlkYXRpb24gZmFpbGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic2lnbmF0dXJlIHZhbGlkYXRpb24gZmFpbGVkXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXlsb2FkO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihlICYmIGUubWVzc2FnZSB8fCBlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic2lnbmF0dXJlIHZhbGlkYXRpb24gZmFpbGVkXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgaGFzaFN0cmluZyh2YWx1ZSwgYWxnKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3J5cHRvLlV0aWwuaGFzaFN0cmluZyh2YWx1ZSwgYWxnKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgaGV4VG9CYXNlNjRVcmwodmFsdWUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBoZXh0b2I2NHUodmFsdWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgandzLCBLZXlVdGlsLCBYNTA5LCBjcnlwdG8sIGhleHRvYjY0dSwgYjY0dG9oZXgsIEFsbG93ZWRTaWduaW5nQWxncyB9IGZyb20gJy4vY3J5cHRvL3JzYSc7XHJcbmltcG9ydCBnZXRKb3NlVXRpbCBmcm9tICcuL0pvc2VVdGlsSW1wbCc7XHJcblxyXG5leHBvcnQgY29uc3QgSm9zZVV0aWwgPSBnZXRKb3NlVXRpbCh7IGp3cywgS2V5VXRpbCwgWDUwOSwgY3J5cHRvLCBoZXh0b2I2NHUsIGI2NHRvaGV4LCBBbGxvd2VkU2lnbmluZ0FsZ3MgfSk7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEpzb25TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGFkZGl0aW9uYWxDb250ZW50VHlwZXMgPSBudWxsLCBcclxuICAgICAgICBYTUxIdHRwUmVxdWVzdEN0b3IgPSBHbG9iYWwuWE1MSHR0cFJlcXVlc3QsIFxyXG4gICAgICAgIGp3dEhhbmRsZXIgPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoYWRkaXRpb25hbENvbnRlbnRUeXBlcyAmJiBBcnJheS5pc0FycmF5KGFkZGl0aW9uYWxDb250ZW50VHlwZXMpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGVudFR5cGVzID0gYWRkaXRpb25hbENvbnRlbnRUeXBlcy5zbGljZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250ZW50VHlwZXMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29udGVudFR5cGVzLnB1c2goJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICBpZiAoand0SGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250ZW50VHlwZXMucHVzaCgnYXBwbGljYXRpb24vand0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9YTUxIdHRwUmVxdWVzdCA9IFhNTEh0dHBSZXF1ZXN0Q3RvcjtcclxuICAgICAgICB0aGlzLl9qd3RIYW5kbGVyID0gand0SGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRKc29uKHVybCwgdG9rZW4pIHtcclxuICAgICAgICBpZiAoIXVybCl7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLmdldEpzb246IE5vIHVybCBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLmdldEpzb24sIHVybDogXCIsIHVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVxID0gbmV3IHRoaXMuX1hNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHJlcS5vcGVuKCdHRVQnLCB1cmwpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFsbG93ZWRDb250ZW50VHlwZXMgPSB0aGlzLl9jb250ZW50VHlwZXM7XHJcbiAgICAgICAgICAgIHZhciBqd3RIYW5kbGVyID0gdGhpcy5fand0SGFuZGxlcjtcclxuXHJcbiAgICAgICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLmdldEpzb246IEhUVFAgcmVzcG9uc2UgcmVjZWl2ZWQsIHN0YXR1c1wiLCByZXEuc3RhdHVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHJlcS5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudFR5cGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IGFsbG93ZWRDb250ZW50VHlwZXMuZmluZChpdGVtPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudFR5cGUuc3RhcnRzV2l0aChpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZCA9PSBcImFwcGxpY2F0aW9uL2p3dFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqd3RIYW5kbGVyKHJlcSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLmdldEpzb246IEVycm9yIHBhcnNpbmcgSlNPTiByZXNwb25zZVwiLCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihcIkludmFsaWQgcmVzcG9uc2UgQ29udGVudC1UeXBlOiBcIiArIGNvbnRlbnRUeXBlICsgXCIsIGZyb20gVVJMOiBcIiArIHVybCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEVycm9yKHJlcS5zdGF0dXNUZXh0ICsgXCIgKFwiICsgcmVxLnN0YXR1cyArIFwiKVwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UuZ2V0SnNvbjogbmV0d29yayBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5nZXRKc29uOiB0b2tlbiBwYXNzZWQsIHNldHRpbmcgQXV0aG9yaXphdGlvbiBoZWFkZXJcIik7XHJcbiAgICAgICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcS5zZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdEZvcm0odXJsLCBwYXlsb2FkKSB7XHJcbiAgICAgICAgaWYgKCF1cmwpe1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogTm8gdXJsIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiSnNvblNlcnZpY2UucG9zdEZvcm0sIHVybDogXCIsIHVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVxID0gbmV3IHRoaXMuX1hNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHJlcS5vcGVuKCdQT1NUJywgdXJsKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhbGxvd2VkQ29udGVudFR5cGVzID0gdGhpcy5fY29udGVudFR5cGVzO1xyXG5cclxuICAgICAgICAgICAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IEhUVFAgcmVzcG9uc2UgcmVjZWl2ZWQsIHN0YXR1c1wiLCByZXEuc3RhdHVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHJlcS5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudFR5cGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IGFsbG93ZWRDb250ZW50VHlwZXMuZmluZChpdGVtPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudFR5cGUuc3RhcnRzV2l0aChpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IEVycm9yIHBhcnNpbmcgSlNPTiByZXNwb25zZVwiLCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihcIkludmFsaWQgcmVzcG9uc2UgQ29udGVudC1UeXBlOiBcIiArIGNvbnRlbnRUeXBlICsgXCIsIGZyb20gVVJMOiBcIiArIHVybCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PT0gNDAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHJlcS5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudFR5cGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IGFsbG93ZWRDb250ZW50VHlwZXMuZmluZChpdGVtPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudFR5cGUuc3RhcnRzV2l0aChpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF5bG9hZCA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBheWxvYWQgJiYgcGF5bG9hZC5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogRXJyb3IgZnJvbSBzZXJ2ZXI6IFwiLCBwYXlsb2FkLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihwYXlsb2FkLmVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBFcnJvciBwYXJzaW5nIEpTT04gcmVzcG9uc2VcIiwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihyZXEuc3RhdHVzVGV4dCArIFwiIChcIiArIHJlcS5zdGF0dXMgKyBcIilcIikpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBuZXR3b3JrIGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgYm9keSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIHBheWxvYWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXlsb2FkW2tleV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2R5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBcIiZcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBcIj1cIjtcclxuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xyXG4gICAgICAgICAgICByZXEuc2VuZChib2R5KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5sZXQgbm9wTG9nZ2VyID0ge1xyXG4gICAgZGVidWcoKXt9LFxyXG4gICAgaW5mbygpe30sXHJcbiAgICB3YXJuKCl7fSxcclxuICAgIGVycm9yKCl7fVxyXG59O1xyXG5cclxuY29uc3QgTk9ORSA9IDA7XHJcbmNvbnN0IEVSUk9SID0gMTtcclxuY29uc3QgV0FSTiA9IDI7XHJcbmNvbnN0IElORk8gPSAzO1xyXG5jb25zdCBERUJVRyA9IDQ7XHJcblxyXG5sZXQgbG9nZ2VyO1xyXG5sZXQgbGV2ZWw7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9nIHtcclxuICAgIHN0YXRpYyBnZXQgTk9ORSgpIHtyZXR1cm4gTk9ORX07XHJcbiAgICBzdGF0aWMgZ2V0IEVSUk9SKCkge3JldHVybiBFUlJPUn07XHJcbiAgICBzdGF0aWMgZ2V0IFdBUk4oKSB7cmV0dXJuIFdBUk59O1xyXG4gICAgc3RhdGljIGdldCBJTkZPKCkge3JldHVybiBJTkZPfTtcclxuICAgIHN0YXRpYyBnZXQgREVCVUcoKSB7cmV0dXJuIERFQlVHfTtcclxuICAgIFxyXG4gICAgc3RhdGljIHJlc2V0KCl7XHJcbiAgICAgICAgbGV2ZWwgPSBJTkZPO1xyXG4gICAgICAgIGxvZ2dlciA9IG5vcExvZ2dlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGdldCBsZXZlbCgpe1xyXG4gICAgICAgIHJldHVybiBsZXZlbDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXQgbGV2ZWwodmFsdWUpe1xyXG4gICAgICAgIGlmIChOT05FIDw9IHZhbHVlICYmIHZhbHVlIDw9IERFQlVHKXtcclxuICAgICAgICAgICAgbGV2ZWwgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9nIGxldmVsXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGdldCBsb2dnZXIoKXtcclxuICAgICAgICByZXR1cm4gbG9nZ2VyO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldCBsb2dnZXIodmFsdWUpe1xyXG4gICAgICAgIGlmICghdmFsdWUuZGVidWcgJiYgdmFsdWUuaW5mbykge1xyXG4gICAgICAgICAgICAvLyBqdXN0IHRvIHN0YXkgYmFja3dhcmRzIGNvbXBhdC4gY2FuIHJlbW92ZSBpbiAyLjBcclxuICAgICAgICAgICAgdmFsdWUuZGVidWcgPSB2YWx1ZS5pbmZvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlLmRlYnVnICYmIHZhbHVlLmluZm8gJiYgdmFsdWUud2FybiAmJiB2YWx1ZS5lcnJvcil7XHJcbiAgICAgICAgICAgIGxvZ2dlciA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2dnZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZGVidWcoLi4uYXJncyl7XHJcbiAgICAgICAgaWYgKGxldmVsID49IERFQlVHKXtcclxuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGluZm8oLi4uYXJncyl7XHJcbiAgICAgICAgaWYgKGxldmVsID49IElORk8pe1xyXG4gICAgICAgICAgICBsb2dnZXIuaW5mby5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyB3YXJuKC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmIChsZXZlbCA+PSBXQVJOKXtcclxuICAgICAgICAgICAgbG9nZ2VyLndhcm4uYXBwbHkobG9nZ2VyLCBBcnJheS5mcm9tKGFyZ3MpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZXJyb3IoLi4uYXJncyl7XHJcbiAgICAgICAgaWYgKGxldmVsID49IEVSUk9SKXtcclxuICAgICAgICAgICAgbG9nZ2VyLmVycm9yLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Mb2cucmVzZXQoKTtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBKc29uU2VydmljZSB9IGZyb20gJy4vSnNvblNlcnZpY2UuanMnO1xyXG5cclxuY29uc3QgT2lkY01ldGFkYXRhVXJsUGF0aCA9ICcud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBKc29uU2VydmljZUN0b3IgPSBKc29uU2VydmljZSkge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiTWV0YWRhdGFTZXJ2aWNlOiBObyBzZXR0aW5ncyBwYXNzZWQgdG8gTWV0YWRhdGFTZXJ2aWNlXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5fanNvblNlcnZpY2UgPSBuZXcgSnNvblNlcnZpY2VDdG9yKFsnYXBwbGljYXRpb24vandrLXNldCtqc29uJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtZXRhZGF0YVVybCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX21ldGFkYXRhVXJsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YVVybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgPSB0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YVVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybCAmJiB0aGlzLl9tZXRhZGF0YVVybC5pbmRleE9mKE9pZGNNZXRhZGF0YVVybFBhdGgpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybFt0aGlzLl9tZXRhZGF0YVVybC5sZW5ndGggLSAxXSAhPT0gJy8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9ICcvJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gT2lkY01ldGFkYXRhVXJsUGF0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGE6IFJldHVybmluZyBtZXRhZGF0YSBmcm9tIHNldHRpbmdzXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5tZXRhZGF0YVVybCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGE6IE5vIGF1dGhvcml0eSBvciBtZXRhZGF0YVVybCBjb25maWd1cmVkIG9uIHNldHRpbmdzXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gYXV0aG9yaXR5IG9yIG1ldGFkYXRhVXJsIGNvbmZpZ3VyZWQgb24gc2V0dGluZ3NcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhOiBnZXR0aW5nIG1ldGFkYXRhIGZyb21cIiwgdGhpcy5tZXRhZGF0YVVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9qc29uU2VydmljZS5nZXRKc29uKHRoaXMubWV0YWRhdGFVcmwpXHJcbiAgICAgICAgICAgIC50aGVuKG1ldGFkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YToganNvbiByZWNlaXZlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhID0gbWV0YWRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YWRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElzc3VlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImlzc3VlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdXRob3JpemF0aW9uRW5kcG9pbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJhdXRob3JpemF0aW9uX2VuZHBvaW50XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJbmZvRW5kcG9pbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJ1c2VyaW5mb19lbmRwb2ludFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbkVuZHBvaW50KG9wdGlvbmFsPXRydWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcInRva2VuX2VuZHBvaW50XCIsIG9wdGlvbmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGVja1Nlc3Npb25JZnJhbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJjaGVja19zZXNzaW9uX2lmcmFtZVwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbmRTZXNzaW9uRW5kcG9pbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJlbmRfc2Vzc2lvbl9lbmRwb2ludFwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZXZvY2F0aW9uRW5kcG9pbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJyZXZvY2F0aW9uX2VuZHBvaW50XCIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEtleXNFbmRwb2ludCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImp3a3NfdXJpXCIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRNZXRhZGF0YVByb3BlcnR5KG5hbWUsIG9wdGlvbmFsPWZhbHNlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhUHJvcGVydHkgZm9yOiBcIiArIG5hbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRNZXRhZGF0YSgpLnRoZW4obWV0YWRhdGEgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGFQcm9wZXJ0eTogbWV0YWRhdGEgcmVjaWV2ZWRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAobWV0YWRhdGFbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy53YXJuKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhUHJvcGVydHk6IE1ldGFkYXRhIGRvZXMgbm90IGNvbnRhaW4gb3B0aW9uYWwgcHJvcGVydHkgXCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhUHJvcGVydHk6IE1ldGFkYXRhIGRvZXMgbm90IGNvbnRhaW4gcHJvcGVydHkgXCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRhZGF0YSBkb2VzIG5vdCBjb250YWluIHByb3BlcnR5IFwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YVtuYW1lXTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTaWduaW5nS2V5cygpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXMpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBSZXR1cm5pbmcgc2lnbmluZ0tleXMgZnJvbSBzZXR0aW5nc1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImp3a3NfdXJpXCIpLnRoZW4oandrc191cmkgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0U2lnbmluZ0tleXM6IGp3a3NfdXJpIHJlY2VpdmVkXCIsIGp3a3NfdXJpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uU2VydmljZS5nZXRKc29uKGp3a3NfdXJpKS50aGVuKGtleVNldCA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0U2lnbmluZ0tleXM6IGtleSBzZXQgcmVjZWl2ZWRcIiwga2V5U2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWtleVNldC5rZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBNaXNzaW5nIGtleXMgb24ga2V5c2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3Npbmcga2V5cyBvbiBrZXlzZXRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXMgPSBrZXlTZXQua2V5cztcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBPaWRjQ2xpZW50U2V0dGluZ3MgfSBmcm9tICcuL09pZGNDbGllbnRTZXR0aW5ncy5qcyc7XHJcbmltcG9ydCB7IEVycm9yUmVzcG9uc2UgfSBmcm9tICcuL0Vycm9yUmVzcG9uc2UuanMnO1xyXG5pbXBvcnQgeyBTaWduaW5SZXF1ZXN0IH0gZnJvbSAnLi9TaWduaW5SZXF1ZXN0LmpzJztcclxuaW1wb3J0IHsgU2lnbmluUmVzcG9uc2UgfSBmcm9tICcuL1NpZ25pblJlc3BvbnNlLmpzJztcclxuaW1wb3J0IHsgU2lnbm91dFJlcXVlc3QgfSBmcm9tICcuL1NpZ25vdXRSZXF1ZXN0LmpzJztcclxuaW1wb3J0IHsgU2lnbm91dFJlc3BvbnNlIH0gZnJvbSAnLi9TaWdub3V0UmVzcG9uc2UuanMnO1xyXG5pbXBvcnQgeyBTaWduaW5TdGF0ZSB9IGZyb20gJy4vU2lnbmluU3RhdGUuanMnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vU3RhdGUuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9pZGNDbGllbnQge1xyXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MgPSB7fSkge1xyXG4gICAgICAgIGlmIChzZXR0aW5ncyBpbnN0YW5jZW9mIE9pZGNDbGllbnRTZXR0aW5ncykge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBuZXcgT2lkY0NsaWVudFNldHRpbmdzKHNldHRpbmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9zdGF0ZVN0b3JlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnN0YXRlU3RvcmU7XHJcbiAgICB9XHJcbiAgICBnZXQgX3ZhbGlkYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy52YWxpZGF0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgX21ldGFkYXRhU2VydmljZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5tZXRhZGF0YVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNldHRpbmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncztcclxuICAgIH1cclxuICAgIGdldCBtZXRhZGF0YVNlcnZpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTaWduaW5SZXF1ZXN0KHtcclxuICAgICAgICByZXNwb25zZV90eXBlLCBzY29wZSwgcmVkaXJlY3RfdXJpLFxyXG4gICAgICAgIC8vIGRhdGEgd2FzIG1lYW50IHRvIGJlIHRoZSBwbGFjZSBhIGNhbGxlciBjb3VsZCBpbmRpY2F0ZSB0aGUgZGF0YSB0b1xyXG4gICAgICAgIC8vIGhhdmUgcm91bmQgdHJpcHBlZCwgYnV0IHBlb3BsZSB3ZXJlIGdldHRpbmcgY29uZnVzZWQsIHNvIGkgYWRkZWQgc3RhdGUgKHNpbmNlIHRoYXQgbWF0Y2hlcyB0aGUgc3BlYylcclxuICAgICAgICAvLyBhbmQgc28gbm93IGlmIGRhdGEgaXMgbm90IHBhc3NlZCwgYnV0IHN0YXRlIGlzIHRoZW4gc3RhdGUgd2lsbCBiZSB1c2VkXHJcbiAgICAgICAgZGF0YSwgc3RhdGUsIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcyxcclxuICAgICAgICByZXNvdXJjZSwgcmVxdWVzdCwgcmVxdWVzdF91cmksIHJlc3BvbnNlX21vZGUsIGV4dHJhUXVlcnlQYXJhbXMsIGV4dHJhVG9rZW5QYXJhbXMsIHJlcXVlc3RfdHlwZSwgc2tpcFVzZXJJbmZvIH0gPSB7fSxcclxuICAgICAgICBzdGF0ZVN0b3JlXHJcbiAgICApIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25pblJlcXVlc3RcIik7XHJcblxyXG4gICAgICAgIGxldCBjbGllbnRfaWQgPSB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XHJcbiAgICAgICAgcmVzcG9uc2VfdHlwZSA9IHJlc3BvbnNlX3R5cGUgfHwgdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfdHlwZTtcclxuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXMuX3NldHRpbmdzLnNjb3BlO1xyXG4gICAgICAgIHJlZGlyZWN0X3VyaSA9IHJlZGlyZWN0X3VyaSB8fCB0aGlzLl9zZXR0aW5ncy5yZWRpcmVjdF91cmk7XHJcblxyXG4gICAgICAgIC8vIGlkX3Rva2VuX2hpbnQsIGxvZ2luX2hpbnQgYXJlbid0IGFsbG93ZWQgb24gX3NldHRpbmdzXHJcbiAgICAgICAgcHJvbXB0ID0gcHJvbXB0IHx8IHRoaXMuX3NldHRpbmdzLnByb21wdDtcclxuICAgICAgICBkaXNwbGF5ID0gZGlzcGxheSB8fCB0aGlzLl9zZXR0aW5ncy5kaXNwbGF5O1xyXG4gICAgICAgIG1heF9hZ2UgPSBtYXhfYWdlIHx8IHRoaXMuX3NldHRpbmdzLm1heF9hZ2U7XHJcbiAgICAgICAgdWlfbG9jYWxlcyA9IHVpX2xvY2FsZXMgfHwgdGhpcy5fc2V0dGluZ3MudWlfbG9jYWxlcztcclxuICAgICAgICBhY3JfdmFsdWVzID0gYWNyX3ZhbHVlcyB8fCB0aGlzLl9zZXR0aW5ncy5hY3JfdmFsdWVzO1xyXG4gICAgICAgIHJlc291cmNlID0gcmVzb3VyY2UgfHwgdGhpcy5fc2V0dGluZ3MucmVzb3VyY2U7XHJcbiAgICAgICAgcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGUgfHwgdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfbW9kZTtcclxuICAgICAgICBleHRyYVF1ZXJ5UGFyYW1zID0gZXh0cmFRdWVyeVBhcmFtcyB8fCB0aGlzLl9zZXR0aW5ncy5leHRyYVF1ZXJ5UGFyYW1zO1xyXG4gICAgICAgIGV4dHJhVG9rZW5QYXJhbXMgPSBleHRyYVRva2VuUGFyYW1zIHx8IHRoaXMuX3NldHRpbmdzLmV4dHJhVG9rZW5QYXJhbXM7XHJcblxyXG4gICAgICAgIGxldCBhdXRob3JpdHkgPSB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHk7XHJcblxyXG4gICAgICAgIGlmIChTaWduaW5SZXF1ZXN0LmlzQ29kZShyZXNwb25zZV90eXBlKSAmJiByZXNwb25zZV90eXBlICE9PSBcImNvZGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiT3BlbklEIENvbm5lY3QgaHlicmlkIGZsb3cgaXMgbm90IHN1cHBvcnRlZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldEF1dGhvcml6YXRpb25FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWduaW5SZXF1ZXN0OiBSZWNlaXZlZCBhdXRob3JpemF0aW9uIGVuZHBvaW50XCIsIHVybCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2lnbmluUmVxdWVzdCA9IG5ldyBTaWduaW5SZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIGNsaWVudF9pZCxcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0X3VyaSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlX3R5cGUsXHJcbiAgICAgICAgICAgICAgICBzY29wZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEgfHwgc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhdXRob3JpdHksXHJcbiAgICAgICAgICAgICAgICBwcm9tcHQsIGRpc3BsYXksIG1heF9hZ2UsIHVpX2xvY2FsZXMsIGlkX3Rva2VuX2hpbnQsIGxvZ2luX2hpbnQsIGFjcl92YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZSwgcmVxdWVzdCwgcmVxdWVzdF91cmksIGV4dHJhUXVlcnlQYXJhbXMsIGV4dHJhVG9rZW5QYXJhbXMsIHJlcXVlc3RfdHlwZSwgcmVzcG9uc2VfbW9kZSxcclxuICAgICAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuX3NldHRpbmdzLmNsaWVudF9zZWNyZXQsXHJcbiAgICAgICAgICAgICAgICBza2lwVXNlckluZm9cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2lnbmluU3RhdGUgPSBzaWduaW5SZXF1ZXN0LnN0YXRlO1xyXG4gICAgICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlU3RvcmUuc2V0KHNpZ25pblN0YXRlLmlkLCBzaWduaW5TdGF0ZS50b1N0b3JhZ2VTdHJpbmcoKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2lnbmluUmVxdWVzdDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZFNpZ25pblJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCByZW1vdmVTdGF0ZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZVwiKTtcclxuXHJcbiAgICAgICAgbGV0IHVzZVF1ZXJ5ID0gdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfbW9kZSA9PT0gXCJxdWVyeVwiIHx8IFxyXG4gICAgICAgICAgICAoIXRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX21vZGUgJiYgU2lnbmluUmVxdWVzdC5pc0NvZGUodGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfdHlwZSkpO1xyXG4gICAgICAgIGxldCBkZWxpbWl0ZXIgPSB1c2VRdWVyeSA/IFwiP1wiIDogXCIjXCI7XHJcblxyXG4gICAgICAgIHZhciByZXNwb25zZSA9IG5ldyBTaWduaW5SZXNwb25zZSh1cmwsIGRlbGltaXRlcik7XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uuc3RhdGUpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZTogTm8gc3RhdGUgaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzdGF0ZSBpbiByZXNwb25zZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xyXG5cclxuICAgICAgICB2YXIgc3RhdGVBcGkgPSByZW1vdmVTdGF0ZSA/IHN0YXRlU3RvcmUucmVtb3ZlLmJpbmQoc3RhdGVTdG9yZSkgOiBzdGF0ZVN0b3JlLmdldC5iaW5kKHN0YXRlU3RvcmUpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RhdGVBcGkocmVzcG9uc2Uuc3RhdGUpLnRoZW4oc3RvcmVkU3RhdGVTdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXN0b3JlZFN0YXRlU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJPaWRjQ2xpZW50LnJlYWRTaWduaW5SZXNwb25zZVN0YXRlOiBObyBtYXRjaGluZyBzdGF0ZSBmb3VuZCBpbiBzdG9yYWdlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gU2lnbmluU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmVkU3RhdGVTdHJpbmcpO1xyXG4gICAgICAgICAgICByZXR1cm4ge3N0YXRlLCByZXNwb25zZX07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc1NpZ25pblJlc3BvbnNlKHVybCwgc3RhdGVTdG9yZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25pblJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZSh1cmwsIHN0YXRlU3RvcmUsIHRydWUpLnRoZW4oKHtzdGF0ZSwgcmVzcG9uc2V9KSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25pblJlc3BvbnNlOiBSZWNlaXZlZCBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHZhbGlkYXRpbmcgcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IudmFsaWRhdGVTaWduaW5SZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNpZ25vdXRSZXF1ZXN0KHtpZF90b2tlbl9oaW50LCBkYXRhLCBzdGF0ZSwgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLCBleHRyYVF1ZXJ5UGFyYW1zLCByZXF1ZXN0X3R5cGUgfSA9IHt9LFxyXG4gICAgICAgIHN0YXRlU3RvcmVcclxuICAgICkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbm91dFJlcXVlc3RcIik7XHJcblxyXG4gICAgICAgIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSB8fCB0aGlzLl9zZXR0aW5ncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgZXh0cmFRdWVyeVBhcmFtcyA9IGV4dHJhUXVlcnlQYXJhbXMgfHwgdGhpcy5fc2V0dGluZ3MuZXh0cmFRdWVyeVBhcmFtcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRFbmRTZXNzaW9uRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25vdXRSZXF1ZXN0OiBObyBlbmQgc2Vzc2lvbiBlbmRwb2ludCB1cmwgcmV0dXJuZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJubyBlbmQgc2Vzc2lvbiBlbmRwb2ludFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogUmVjZWl2ZWQgZW5kIHNlc3Npb24gZW5kcG9pbnRcIiwgdXJsKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFNpZ25vdXRSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIGlkX3Rva2VuX2hpbnQsXHJcbiAgICAgICAgICAgICAgICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhIHx8IHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFRdWVyeVBhcmFtcyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RfdHlwZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzaWdub3V0U3RhdGUgPSByZXF1ZXN0LnN0YXRlO1xyXG4gICAgICAgICAgICBpZiAoc2lnbm91dFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25vdXRSZXF1ZXN0OiBTaWdub3V0IHJlcXVlc3QgaGFzIHN0YXRlIHRvIHBlcnNpc3RcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcclxuICAgICAgICAgICAgICAgIHN0YXRlU3RvcmUuc2V0KHNpZ25vdXRTdGF0ZS5pZCwgc2lnbm91dFN0YXRlLnRvU3RvcmFnZVN0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlKHVybCwgc3RhdGVTdG9yZSwgcmVtb3ZlU3RhdGUgPSBmYWxzZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlXCIpO1xyXG5cclxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBuZXcgU2lnbm91dFJlc3BvbnNlKHVybCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5zdGF0ZSkge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZTogTm8gc3RhdGUgaW4gcmVzcG9uc2VcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIExvZy53YXJuKFwiT2lkY0NsaWVudC5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGU6IFJlc3BvbnNlIHdhcyBlcnJvcjogXCIsIHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JSZXNwb25zZShyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzdGF0ZTogdW5kZWZpbmVkLCByZXNwb25zZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHN0YXRlS2V5ID0gcmVzcG9uc2Uuc3RhdGU7XHJcblxyXG4gICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XHJcblxyXG4gICAgICAgIHZhciBzdGF0ZUFwaSA9IHJlbW92ZVN0YXRlID8gc3RhdGVTdG9yZS5yZW1vdmUuYmluZChzdGF0ZVN0b3JlKSA6IHN0YXRlU3RvcmUuZ2V0LmJpbmQoc3RhdGVTdG9yZSk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlQXBpKHN0YXRlS2V5KS50aGVuKHN0b3JlZFN0YXRlU3RyaW5nID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzdG9yZWRTdGF0ZVN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGU6IE5vIG1hdGNoaW5nIHN0YXRlIGZvdW5kIGluIHN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtYXRjaGluZyBzdGF0ZSBmb3VuZCBpbiBzdG9yYWdlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZyhzdG9yZWRTdGF0ZVN0cmluZyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge3N0YXRlLCByZXNwb25zZX07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc1NpZ25vdXRSZXNwb25zZSh1cmwsIHN0YXRlU3RvcmUpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnByb2Nlc3NTaWdub3V0UmVzcG9uc2VcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSh1cmwsIHN0YXRlU3RvcmUsIHRydWUpLnRoZW4oKHtzdGF0ZSwgcmVzcG9uc2V9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlOiBSZWNlaXZlZCBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHZhbGlkYXRpbmcgcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yLnZhbGlkYXRlU2lnbm91dFJlc3BvbnNlKHN0YXRlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnByb2Nlc3NTaWdub3V0UmVzcG9uc2U6IE5vIHN0YXRlIGZyb20gc3RvcmFnZTsgc2tpcHBpbmcgdmFsaWRhdGluZyByZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU3RhbGVTdGF0ZShzdGF0ZVN0b3JlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jbGVhclN0YWxlU3RhdGVcIik7XHJcblxyXG4gICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XHJcblxyXG4gICAgICAgIHJldHVybiBTdGF0ZS5jbGVhclN0YWxlU3RhdGUoc3RhdGVTdG9yZSwgdGhpcy5zZXR0aW5ncy5zdGFsZVN0YXRlQWdlKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnLi9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyc7XHJcbmltcG9ydCB7IFJlc3BvbnNlVmFsaWRhdG9yIH0gZnJvbSAnLi9SZXNwb25zZVZhbGlkYXRvci5qcyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcclxuXHJcbmNvbnN0IE9pZGNNZXRhZGF0YVVybFBhdGggPSAnLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb24nO1xyXG5cclxuY29uc3QgRGVmYXVsdFJlc3BvbnNlVHlwZSA9IFwiaWRfdG9rZW5cIjtcclxuY29uc3QgRGVmYXVsdFNjb3BlID0gXCJvcGVuaWRcIjtcclxuY29uc3QgRGVmYXVsdFN0YWxlU3RhdGVBZ2UgPSA2MCAqIDE1OyAvLyBzZWNvbmRzXHJcbmNvbnN0IERlZmF1bHRDbG9ja1NrZXdJblNlY29uZHMgPSA2MCAqIDU7XHJcblxyXG5leHBvcnQgY2xhc3MgT2lkY0NsaWVudFNldHRpbmdzIHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICAvLyBtZXRhZGF0YSByZWxhdGVkXHJcbiAgICAgICAgYXV0aG9yaXR5LCBtZXRhZGF0YVVybCwgbWV0YWRhdGEsIHNpZ25pbmdLZXlzLFxyXG4gICAgICAgIC8vIGNsaWVudCByZWxhdGVkXHJcbiAgICAgICAgY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCByZXNwb25zZV90eXBlID0gRGVmYXVsdFJlc3BvbnNlVHlwZSwgc2NvcGUgPSBEZWZhdWx0U2NvcGUsXHJcbiAgICAgICAgcmVkaXJlY3RfdXJpLCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXHJcbiAgICAgICAgLy8gb3B0aW9uYWwgcHJvdG9jb2xcclxuICAgICAgICBwcm9tcHQsIGRpc3BsYXksIG1heF9hZ2UsIHVpX2xvY2FsZXMsIGFjcl92YWx1ZXMsIHJlc291cmNlLCByZXNwb25zZV9tb2RlLFxyXG4gICAgICAgIC8vIGJlaGF2aW9yIGZsYWdzXHJcbiAgICAgICAgZmlsdGVyUHJvdG9jb2xDbGFpbXMgPSB0cnVlLCBsb2FkVXNlckluZm8gPSB0cnVlLFxyXG4gICAgICAgIHN0YWxlU3RhdGVBZ2UgPSBEZWZhdWx0U3RhbGVTdGF0ZUFnZSwgY2xvY2tTa2V3ID0gRGVmYXVsdENsb2NrU2tld0luU2Vjb25kcyxcclxuICAgICAgICB1c2VySW5mb0p3dElzc3VlciA9ICdPUCcsXHJcbiAgICAgICAgLy8gb3RoZXIgYmVoYXZpb3JcclxuICAgICAgICBzdGF0ZVN0b3JlID0gbmV3IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlKCksXHJcbiAgICAgICAgUmVzcG9uc2VWYWxpZGF0b3JDdG9yID0gUmVzcG9uc2VWYWxpZGF0b3IsXHJcbiAgICAgICAgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSxcclxuICAgICAgICAvLyBleHRyYSBxdWVyeSBwYXJhbXNcclxuICAgICAgICBleHRyYVF1ZXJ5UGFyYW1zID0ge30sXHJcbiAgICAgICAgZXh0cmFUb2tlblBhcmFtcyA9IHt9XHJcbiAgICB9ID0ge30pIHtcclxuXHJcbiAgICAgICAgdGhpcy5fYXV0aG9yaXR5ID0gYXV0aG9yaXR5O1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gbWV0YWRhdGFVcmw7XHJcbiAgICAgICAgdGhpcy5fbWV0YWRhdGEgPSBtZXRhZGF0YTtcclxuICAgICAgICB0aGlzLl9zaWduaW5nS2V5cyA9IHNpZ25pbmdLZXlzO1xyXG5cclxuICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSBjbGllbnRfaWQ7XHJcbiAgICAgICAgdGhpcy5fY2xpZW50X3NlY3JldCA9IGNsaWVudF9zZWNyZXQ7XHJcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VfdHlwZSA9IHJlc3BvbnNlX3R5cGU7XHJcbiAgICAgICAgdGhpcy5fc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLl9yZWRpcmVjdF91cmkgPSByZWRpcmVjdF91cmk7XHJcbiAgICAgICAgdGhpcy5fcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG5cclxuICAgICAgICB0aGlzLl9wcm9tcHQgPSBwcm9tcHQ7XHJcbiAgICAgICAgdGhpcy5fZGlzcGxheSA9IGRpc3BsYXk7XHJcbiAgICAgICAgdGhpcy5fbWF4X2FnZSA9IG1heF9hZ2U7XHJcbiAgICAgICAgdGhpcy5fdWlfbG9jYWxlcyA9IHVpX2xvY2FsZXM7XHJcbiAgICAgICAgdGhpcy5fYWNyX3ZhbHVlcyA9IGFjcl92YWx1ZXM7XHJcbiAgICAgICAgdGhpcy5fcmVzb3VyY2UgPSByZXNvdXJjZTtcclxuICAgICAgICB0aGlzLl9yZXNwb25zZV9tb2RlID0gcmVzcG9uc2VfbW9kZTtcclxuXHJcbiAgICAgICAgdGhpcy5fZmlsdGVyUHJvdG9jb2xDbGFpbXMgPSAhIWZpbHRlclByb3RvY29sQ2xhaW1zO1xyXG4gICAgICAgIHRoaXMuX2xvYWRVc2VySW5mbyA9ICEhbG9hZFVzZXJJbmZvO1xyXG4gICAgICAgIHRoaXMuX3N0YWxlU3RhdGVBZ2UgPSBzdGFsZVN0YXRlQWdlO1xyXG4gICAgICAgIHRoaXMuX2Nsb2NrU2tldyA9IGNsb2NrU2tldztcclxuICAgICAgICB0aGlzLl91c2VySW5mb0p3dElzc3VlciA9IHVzZXJJbmZvSnd0SXNzdWVyO1xyXG5cclxuICAgICAgICB0aGlzLl9zdGF0ZVN0b3JlID0gc3RhdGVTdG9yZTtcclxuICAgICAgICB0aGlzLl92YWxpZGF0b3IgPSBuZXcgUmVzcG9uc2VWYWxpZGF0b3JDdG9yKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zID0gdHlwZW9mIGV4dHJhUXVlcnlQYXJhbXMgPT09ICdvYmplY3QnID8gZXh0cmFRdWVyeVBhcmFtcyA6IHt9O1xyXG4gICAgICAgIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXMgPSB0eXBlb2YgZXh0cmFUb2tlblBhcmFtcyA9PT0gJ29iamVjdCcgPyBleHRyYVRva2VuUGFyYW1zIDoge307XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xpZW50IGNvbmZpZ1xyXG4gICAgZ2V0IGNsaWVudF9pZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50X2lkO1xyXG4gICAgfVxyXG4gICAgc2V0IGNsaWVudF9pZCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5fY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIC8vIG9uZS10aW1lIHNldCBvbmx5XHJcbiAgICAgICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudFNldHRpbmdzLnNldF9jbGllbnRfaWQ6IGNsaWVudF9pZCBoYXMgYWxyZWFkeSBiZWVuIGFzc2lnbmVkLlwiKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjbGllbnRfaWQgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgY2xpZW50X3NlY3JldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50X3NlY3JldDtcclxuICAgIH1cclxuICAgIGdldCByZXNwb25zZV90eXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZV90eXBlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNjb3BlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY29wZTtcclxuICAgIH1cclxuICAgIGdldCByZWRpcmVjdF91cmkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0X3VyaTtcclxuICAgIH1cclxuICAgIGdldCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gb3B0aW9uYWwgcHJvdG9jb2wgcGFyYW1zXHJcbiAgICBnZXQgcHJvbXB0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9tcHQ7XHJcbiAgICB9XHJcbiAgICBnZXQgZGlzcGxheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGlzcGxheTtcclxuICAgIH1cclxuICAgIGdldCBtYXhfYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhfYWdlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHVpX2xvY2FsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VpX2xvY2FsZXM7XHJcbiAgICB9XHJcbiAgICBnZXQgYWNyX3ZhbHVlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWNyX3ZhbHVlcztcclxuICAgIH1cclxuICAgIGdldCByZXNvdXJjZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2U7XHJcbiAgICB9XHJcbiAgICBnZXQgcmVzcG9uc2VfbW9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VfbW9kZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gbWV0YWRhdGFcclxuICAgIGdldCBhdXRob3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhvcml0eTtcclxuICAgIH1cclxuICAgIHNldCBhdXRob3JpdHkodmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2F1dGhvcml0eSkge1xyXG4gICAgICAgICAgICAvLyBvbmUtdGltZSBzZXQgb25seVxyXG4gICAgICAgICAgICB0aGlzLl9hdXRob3JpdHkgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnRTZXR0aW5ncy5zZXRfYXV0aG9yaXR5OiBhdXRob3JpdHkgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXV0aG9yaXR5IGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IG1ldGFkYXRhVXJsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fbWV0YWRhdGFVcmwpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgPSB0aGlzLmF1dGhvcml0eTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybCAmJiB0aGlzLl9tZXRhZGF0YVVybC5pbmRleE9mKE9pZGNNZXRhZGF0YVVybFBhdGgpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21ldGFkYXRhVXJsW3RoaXMuX21ldGFkYXRhVXJsLmxlbmd0aCAtIDFdICE9PSAnLycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCArPSAnLyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCArPSBPaWRjTWV0YWRhdGFVcmxQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0dGFibGUvY2FjaGFibGUgbWV0YWRhdGEgdmFsdWVzXHJcbiAgICBnZXQgbWV0YWRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhO1xyXG4gICAgfVxyXG4gICAgc2V0IG1ldGFkYXRhKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fbWV0YWRhdGEgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2lnbmluZ0tleXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbmdLZXlzO1xyXG4gICAgfVxyXG4gICAgc2V0IHNpZ25pbmdLZXlzKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fc2lnbmluZ0tleXMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBiZWhhdmlvciBmbGFnc1xyXG4gICAgZ2V0IGZpbHRlclByb3RvY29sQ2xhaW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJQcm90b2NvbENsYWltcztcclxuICAgIH1cclxuICAgIGdldCBsb2FkVXNlckluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VySW5mbztcclxuICAgIH1cclxuICAgIGdldCBzdGFsZVN0YXRlQWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFsZVN0YXRlQWdlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNsb2NrU2tldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2xvY2tTa2V3O1xyXG4gICAgfVxyXG4gICAgZ2V0IHVzZXJJbmZvSnd0SXNzdWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VySW5mb0p3dElzc3VlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdGVTdG9yZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVTdG9yZTtcclxuICAgIH1cclxuICAgIGdldCB2YWxpZGF0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvcjtcclxuICAgIH1cclxuICAgIGdldCBtZXRhZGF0YVNlcnZpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBleHRyYSBxdWVyeSBwYXJhbXNcclxuICAgIGdldCBleHRyYVF1ZXJ5UGFyYW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4dHJhUXVlcnlQYXJhbXModmFsdWUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4dHJhUXVlcnlQYXJhbXMgPSB2YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGV4dHJhIHRva2VuIHBhcmFtc1xyXG4gICAgZ2V0IGV4dHJhVG9rZW5QYXJhbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXM7XHJcbiAgICB9XHJcbiAgICBzZXQgZXh0cmFUb2tlblBhcmFtcyh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgdGhpcy5fZXh0cmFUb2tlblBhcmFtcyA9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBQb3B1cFdpbmRvdyB9IGZyb20gJy4vUG9wdXBXaW5kb3cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwTmF2aWdhdG9yIHtcclxuXHJcbiAgICBwcmVwYXJlKHBhcmFtcykge1xyXG4gICAgICAgIGxldCBwb3B1cCA9IG5ldyBQb3B1cFdpbmRvdyhwYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocG9wdXApO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxiYWNrKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcikge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwTmF2aWdhdG9yLmNhbGxiYWNrXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBQb3B1cFdpbmRvdy5ub3RpZnlPcGVuZXIodXJsLCBrZWVwT3BlbiwgZGVsaW1pdGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XHJcblxyXG5jb25zdCBDaGVja0ZvclBvcHVwQ2xvc2VkSW50ZXJ2YWwgPSA1MDA7XHJcbmNvbnN0IERlZmF1bHRQb3B1cEZlYXR1cmVzID0gJ2xvY2F0aW9uPW5vLHRvb2xiYXI9bm8sd2lkdGg9NTAwLGhlaWdodD01MDAsbGVmdD0xMDAsdG9wPTEwMDsnO1xyXG4vL2NvbnN0IERlZmF1bHRQb3B1cEZlYXR1cmVzID0gJ2xvY2F0aW9uPW5vLHRvb2xiYXI9bm8sd2lkdGg9NTAwLGhlaWdodD01MDAsbGVmdD0xMDAsdG9wPTEwMDtyZXNpemFibGU9eWVzJztcclxuXHJcbmNvbnN0IERlZmF1bHRQb3B1cFRhcmdldCA9IFwiX2JsYW5rXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXBXaW5kb3cge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXQgPSBwYXJhbXMucG9wdXBXaW5kb3dUYXJnZXQgfHwgRGVmYXVsdFBvcHVwVGFyZ2V0O1xyXG4gICAgICAgIGxldCBmZWF0dXJlcyA9IHBhcmFtcy5wb3B1cFdpbmRvd0ZlYXR1cmVzIHx8IERlZmF1bHRQb3B1cEZlYXR1cmVzO1xyXG5cclxuICAgICAgICB0aGlzLl9wb3B1cCA9IHdpbmRvdy5vcGVuKCcnLCB0YXJnZXQsIGZlYXR1cmVzKTtcclxuICAgICAgICBpZiAodGhpcy5fcG9wdXApIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY3RvcjogcG9wdXAgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrRm9yUG9wdXBDbG9zZWRUaW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCh0aGlzLl9jaGVja0ZvclBvcHVwQ2xvc2VkLmJpbmQodGhpcyksIENoZWNrRm9yUG9wdXBDbG9zZWRJbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9taXNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdmlnYXRlKHBhcmFtcykge1xyXG4gICAgICAgIGlmICghdGhpcy5fcG9wdXApIHtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogRXJyb3Igb3BlbmluZyBwb3B1cCB3aW5kb3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy51cmwpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogbm8gdXJsIHByb3ZpZGVkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93Lm5hdmlnYXRlOiBTZXR0aW5nIFVSTCBpbiBwb3B1cFwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2lkID0gcGFyYW1zLmlkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faWQpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1tcInBvcHVwQ2FsbGJhY2tfXCIgKyBwYXJhbXMuaWRdID0gdGhpcy5fY2FsbGJhY2suYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcG9wdXAuZm9jdXMoKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9wdXAud2luZG93LmxvY2F0aW9uID0gcGFyYW1zLnVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX3N1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNhbGxiYWNrOiBTdWNjZXNzZnVsIHJlc3BvbnNlIGZyb20gcG9wdXAgd2luZG93XCIpO1xyXG5cclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZShkYXRhKTtcclxuICAgIH1cclxuICAgIF9lcnJvcihtZXNzYWdlKSB7XHJcbiAgICAgICAgTG9nLmVycm9yKFwiUG9wdXBXaW5kb3cuZXJyb3I6IFwiLCBtZXNzYWdlKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcbiAgICAgICAgdGhpcy5fcmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFudXAoa2VlcE9wZW4pIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5jbGVhbnVwXCIpO1xyXG5cclxuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIpO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrRm9yUG9wdXBDbG9zZWRUaW1lciA9IG51bGw7XHJcblxyXG4gICAgICAgIGRlbGV0ZSB3aW5kb3dbXCJwb3B1cENhbGxiYWNrX1wiICsgdGhpcy5faWRdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcG9wdXAgJiYgIWtlZXBPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BvcHVwID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tGb3JQb3B1cENsb3NlZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3BvcHVwIHx8IHRoaXMuX3BvcHVwLmNsb3NlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvcihcIlBvcHVwIHdpbmRvdyBjbG9zZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsYmFjayh1cmwsIGtlZXBPcGVuKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cChrZWVwT3Blbik7XHJcblxyXG4gICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY2FsbGJhY2sgc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgdGhpcy5fc3VjY2Vzcyh7IHVybDogdXJsIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY2FsbGJhY2s6IEludmFsaWQgcmVzcG9uc2UgZnJvbSBwb3B1cFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIGZyb20gcG9wdXBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3RpZnlPcGVuZXIodXJsLCBrZWVwT3BlbiwgZGVsaW1pdGVyKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5vcGVuZXIpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFVybFV0aWxpdHkucGFyc2VVcmxGcmFnbWVudCh1cmwsIGRlbGltaXRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IFwicG9wdXBDYWxsYmFja19cIiArIGRhdGEuc3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gd2luZG93Lm9wZW5lcltuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyOiBwYXNzaW5nIHVybCBtZXNzYWdlIHRvIG9wZW5lclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodXJsLCBrZWVwT3Blbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gbWF0Y2hpbmcgY2FsbGJhY2sgZm91bmQgb24gb3BlbmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy53YXJuKFwiUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyOiBubyBzdGF0ZSBmb3VuZCBpbiByZXNwb25zZSB1cmxcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy53YXJuKFwiUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyOiBubyB3aW5kb3cub3BlbmVyLiBDYW4ndCBjb21wbGV0ZSBub3RpZmljYXRpb24uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVkaXJlY3ROYXZpZ2F0b3Ige1xyXG5cclxuICAgIHByZXBhcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcclxuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZWRpcmVjdE5hdmlnYXRvci5uYXZpZ2F0ZTogTm8gdXJsIHByb3ZpZGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gdXJsIHByb3ZpZGVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXMudXNlUmVwbGFjZVRvTmF2aWdhdGUpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocGFyYW1zLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBwYXJhbXMudXJsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB1cmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9NZXRhZGF0YVNlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBVc2VySW5mb1NlcnZpY2UgfSBmcm9tICcuL1VzZXJJbmZvU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IFRva2VuQ2xpZW50IH0gZnJvbSAnLi9Ub2tlbkNsaWVudC5qcyc7XHJcbmltcG9ydCB7IEVycm9yUmVzcG9uc2UgfSBmcm9tICcuL0Vycm9yUmVzcG9uc2UuanMnO1xyXG5pbXBvcnQgeyBKb3NlVXRpbCB9IGZyb20gJy4vSm9zZVV0aWwuanMnO1xyXG5cclxuY29uc3QgUHJvdG9jb2xDbGFpbXMgPSBbXCJub25jZVwiLCBcImF0X2hhc2hcIiwgXCJpYXRcIiwgXCJuYmZcIiwgXCJleHBcIiwgXCJhdWRcIiwgXCJpc3NcIiwgXCJjX2hhc2hcIl07XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VWYWxpZGF0b3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBcclxuICAgICAgICBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlLFxyXG4gICAgICAgIFVzZXJJbmZvU2VydmljZUN0b3IgPSBVc2VySW5mb1NlcnZpY2UsIFxyXG4gICAgICAgIGpvc2VVdGlsID0gSm9zZVV0aWwsXHJcbiAgICAgICAgVG9rZW5DbGllbnRDdG9yID0gVG9rZW5DbGllbnQpIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLmN0b3I6IE5vIHNldHRpbmdzIHBhc3NlZCB0byBSZXNwb25zZVZhbGlkYXRvclwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0dGluZ3NcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcclxuICAgICAgICB0aGlzLl91c2VySW5mb1NlcnZpY2UgPSBuZXcgVXNlckluZm9TZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fam9zZVV0aWwgPSBqb3NlVXRpbDtcclxuICAgICAgICB0aGlzLl90b2tlbkNsaWVudCA9IG5ldyBUb2tlbkNsaWVudEN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlU2lnbmluUmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWduaW5SZXNwb25zZVwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NTaWduaW5QYXJhbXMoc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWduaW5SZXNwb25zZTogc3RhdGUgcHJvY2Vzc2VkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVUb2tlbnMoc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2U6IHRva2VucyB2YWxpZGF0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc0NsYWltcyhzdGF0ZSwgcmVzcG9uc2UpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2U6IGNsYWltcyBwcm9jZXNzZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlU2lnbm91dFJlc3BvbnNlKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChzdGF0ZS5pZCAhPT0gcmVzcG9uc2Uuc3RhdGUpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWdub3V0UmVzcG9uc2U6IFN0YXRlIGRvZXMgbm90IG1hdGNoXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiU3RhdGUgZG9lcyBub3QgbWF0Y2hcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbm93IHRoYXQgd2Uga25vdyB0aGUgc3RhdGUgbWF0Y2hlcywgdGFrZSB0aGUgc3RvcmVkIGRhdGFcclxuICAgICAgICAvLyBhbmQgc2V0IGl0IGludG8gdGhlIHJlc3BvbnNlIHNvIGNhbGxlcnMgY2FuIGdldCB0aGVpciBzdGF0ZVxyXG4gICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGZvciBib3RoIHN1Y2Nlc3MgJiBlcnJvciBvdXRjb21lc1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbm91dFJlc3BvbnNlOiBzdGF0ZSB2YWxpZGF0ZWRcIik7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdGUgPSBzdGF0ZS5kYXRhO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgTG9nLndhcm4oXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZTogUmVzcG9uc2Ugd2FzIGVycm9yXCIsIHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcHJvY2Vzc1NpZ25pblBhcmFtcyhzdGF0ZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoc3RhdGUuaWQgIT09IHJlc3BvbnNlLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBTdGF0ZSBkb2VzIG5vdCBtYXRjaFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUuY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBObyBjbGllbnRfaWQgb24gc3RhdGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBjbGllbnRfaWQgb24gc3RhdGVcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzdGF0ZS5hdXRob3JpdHkpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IE5vIGF1dGhvcml0eSBvbiBzdGF0ZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGF1dGhvcml0eSBvbiBzdGF0ZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzIGFsbG93cyB0aGUgYXV0aG9yaXR5IHRvIGJlIGxvYWRlZCBmcm9tIHRoZSBzaWduaW4gc3RhdGVcclxuICAgICAgICBpZiAoIXRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkgPSBzdGF0ZS5hdXRob3JpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVuc3VyZSB3ZSdyZSB1c2luZyB0aGUgY29ycmVjdCBhdXRob3JpdHkgaWYgdGhlIGF1dGhvcml0eSBpcyBub3QgbG9hZGVkIGZyb20gc2lnbmluIHN0YXRlXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5ICYmIHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSAhPT0gc3RhdGUuYXV0aG9yaXR5KSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBhdXRob3JpdHkgbWlzbWF0Y2ggb24gc2V0dGluZ3MgdnMuIHNpZ25pbiBzdGF0ZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImF1dGhvcml0eSBtaXNtYXRjaCBvbiBzZXR0aW5ncyB2cy4gc2lnbmluIHN0YXRlXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcyBhbGxvd3MgdGhlIGNsaWVudF9pZCB0byBiZSBsb2FkZWQgZnJvbSB0aGUgc2lnbmluIHN0YXRlXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkID0gc3RhdGUuY2xpZW50X2lkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbnN1cmUgd2UncmUgdXNpbmcgdGhlIGNvcnJlY3QgY2xpZW50X2lkIGlmIHRoZSBjbGllbnRfaWQgaXMgbm90IGxvYWRlZCBmcm9tIHNpZ25pbiBzdGF0ZVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCAmJiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQgIT09IHN0YXRlLmNsaWVudF9pZCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogY2xpZW50X2lkIG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJjbGllbnRfaWQgbWlzbWF0Y2ggb24gc2V0dGluZ3MgdnMuIHNpZ25pbiBzdGF0ZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBub3cgdGhhdCB3ZSBrbm93IHRoZSBzdGF0ZSBtYXRjaGVzLCB0YWtlIHRoZSBzdG9yZWQgZGF0YVxyXG4gICAgICAgIC8vIGFuZCBzZXQgaXQgaW50byB0aGUgcmVzcG9uc2Ugc28gY2FsbGVycyBjYW4gZ2V0IHRoZWlyIHN0YXRlXHJcbiAgICAgICAgLy8gdGhpcyBpcyBpbXBvcnRhbnQgZm9yIGJvdGggc3VjY2VzcyAmIGVycm9yIG91dGNvbWVzXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IHN0YXRlIHZhbGlkYXRlZFwiKTtcclxuICAgICAgICByZXNwb25zZS5zdGF0ZSA9IHN0YXRlLmRhdGE7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgICAgICBMb2cud2FybihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBSZXNwb25zZSB3YXMgZXJyb3JcIiwgcmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yUmVzcG9uc2UocmVzcG9uc2UpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5ub25jZSAmJiAhcmVzcG9uc2UuaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IEV4cGVjdGluZyBpZF90b2tlbiBpbiByZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUubm9uY2UgJiYgcmVzcG9uc2UuaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IE5vdCBleHBlY3RpbmcgaWRfdG9rZW4gaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5jb2RlX3ZlcmlmaWVyICYmICFyZXNwb25zZS5jb2RlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBFeHBlY3RpbmcgY29kZSBpbiByZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGNvZGUgaW4gcmVzcG9uc2VcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzdGF0ZS5jb2RlX3ZlcmlmaWVyICYmIHJlc3BvbnNlLmNvZGUpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IE5vdCBleHBlY3RpbmcgY29kZSBpbiByZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgY29kZSBpbiByZXNwb25zZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLnNjb3BlKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3Mgbm8gc2NvcGUgb24gdGhlIHJlc3BvbnNlLCB0aGVuIGFzc3VtZSBhbGwgc2NvcGVzIGdyYW50ZWQgKHBlci1zcGVjKSBhbmQgY29weSBvdmVyIHNjb3BlcyBmcm9tIG9yaWdpbmFsIHJlcXVlc3RcclxuICAgICAgICAgICAgcmVzcG9uc2Uuc2NvcGUgPSBzdGF0ZS5zY29wZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIF9wcm9jZXNzQ2xhaW1zKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5pc09wZW5JZENvbm5lY3QpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHJlc3BvbnNlIGlzIE9JREMsIHByb2Nlc3NpbmcgY2xhaW1zXCIpO1xyXG5cclxuICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHRoaXMuX2ZpbHRlclByb3RvY29sQ2xhaW1zKHJlc3BvbnNlLnByb2ZpbGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLnNraXBVc2VySW5mbyAhPT0gdHJ1ZSAmJiB0aGlzLl9zZXR0aW5ncy5sb2FkVXNlckluZm8gJiYgcmVzcG9uc2UuYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogbG9hZGluZyB1c2VyIGluZm9cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJJbmZvU2VydmljZS5nZXRDbGFpbXMocmVzcG9uc2UuYWNjZXNzX3Rva2VuKS50aGVuKGNsYWltcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHVzZXIgaW5mbyBjbGFpbXMgcmVjZWl2ZWQgZnJvbSB1c2VyIGluZm8gZW5kcG9pbnRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGFpbXMuc3ViICE9PSByZXNwb25zZS5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogc3ViIGZyb20gdXNlciBpbmZvIGVuZHBvaW50IGRvZXMgbm90IG1hdGNoIHN1YiBpbiBhY2Nlc3NfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJzdWIgZnJvbSB1c2VyIGluZm8gZW5kcG9pbnQgZG9lcyBub3QgbWF0Y2ggc3ViIGluIGFjY2Vzc190b2tlblwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gdGhpcy5fbWVyZ2VDbGFpbXMocmVzcG9uc2UucHJvZmlsZSwgY2xhaW1zKTtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogdXNlciBpbmZvIGNsYWltcyByZWNlaXZlZCwgdXBkYXRlZCBwcm9maWxlOlwiLCByZXNwb25zZS5wcm9maWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogbm90IGxvYWRpbmcgdXNlciBpbmZvXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogcmVzcG9uc2UgaXMgbm90IE9JREMsIG5vdCBwcm9jZXNzaW5nIGNsYWltc1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIF9tZXJnZUNsYWltcyhjbGFpbXMxLCBjbGFpbXMyKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIGNsYWltczEpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIGNsYWltczIpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGNsYWltczJbbmFtZV07XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhbHVlc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0W25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdFtuYW1lXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0W25hbWVdLmluZGV4T2YodmFsdWUpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0ucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0W25hbWVdICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHRoaXMuX21lcmdlQ2xhaW1zKHJlc3VsdFtuYW1lXSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IFtyZXN1bHRbbmFtZV0sIHZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2ZpbHRlclByb3RvY29sQ2xhaW1zKGNsYWltcykge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJQcm90b2NvbENsYWltcywgaW5jb21pbmcgY2xhaW1zOlwiLCBjbGFpbXMpO1xyXG5cclxuICAgICAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgY2xhaW1zKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLl9maWx0ZXJQcm90b2NvbENsYWltcykge1xyXG4gICAgICAgICAgICBQcm90b2NvbENsYWltcy5mb3JFYWNoKHR5cGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFt0eXBlXTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyUHJvdG9jb2xDbGFpbXM6IHByb3RvY29sIGNsYWltcyBmaWx0ZXJlZFwiLCByZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlclByb3RvY29sQ2xhaW1zOiBwcm90b2NvbCBjbGFpbXMgbm90IGZpbHRlcmVkXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZVRva2VucyhzdGF0ZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuY29kZSkge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVUb2tlbnM6IFZhbGlkYXRpbmcgY29kZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NDb2RlKHN0YXRlLCByZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2UuaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zOiBWYWxpZGF0aW5nIGlkX3Rva2VuIGFuZCBhY2Nlc3NfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVJZFRva2VuQW5kQWNjZXNzVG9rZW4oc3RhdGUsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zOiBWYWxpZGF0aW5nIGlkX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVJZFRva2VuKHN0YXRlLCByZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVUb2tlbnM6IE5vIGNvZGUgdG8gcHJvY2VzcyBvciBpZF90b2tlbiB0byB2YWxpZGF0ZVwiKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcHJvY2Vzc0NvZGUoc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogc3RhdGUuY2xpZW50X2lkLFxyXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBzdGF0ZS5jbGllbnRfc2VjcmV0LFxyXG4gICAgICAgICAgICBjb2RlIDogcmVzcG9uc2UuY29kZSxcclxuICAgICAgICAgICAgcmVkaXJlY3RfdXJpOiBzdGF0ZS5yZWRpcmVjdF91cmksXHJcbiAgICAgICAgICAgIGNvZGVfdmVyaWZpZXI6IHN0YXRlLmNvZGVfdmVyaWZpZXJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoc3RhdGUuZXh0cmFUb2tlblBhcmFtcyAmJiB0eXBlb2Yoc3RhdGUuZXh0cmFUb2tlblBhcmFtcykgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVxdWVzdCwgc3RhdGUuZXh0cmFUb2tlblBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2tlbkNsaWVudC5leGNoYW5nZUNvZGUocmVxdWVzdCkudGhlbih0b2tlblJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIHRva2VuUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlW2tleV0gPSB0b2tlblJlc3BvbnNlW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5pZF90b2tlbikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDb2RlOiB0b2tlbiByZXNwb25zZSBzdWNjZXNzZnVsLCBwcm9jZXNzaW5nIGlkX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXMoc3RhdGUsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ29kZTogdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc2Z1bCwgcmV0dXJuaW5nIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXMoc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRJc3N1ZXIoKS50aGVuKGlzc3VlciA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXVkaWVuY2UgPSBzdGF0ZS5jbGllbnRfaWQ7XHJcbiAgICAgICAgICAgIGxldCBjbG9ja1NrZXdJblNlY29uZHMgPSB0aGlzLl9zZXR0aW5ncy5jbG9ja1NrZXc7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzOiBWYWxpZGFpbmcgSldUIGF0dHJpYnV0ZXM7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIiwgY2xvY2tTa2V3SW5TZWNvbmRzKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qb3NlVXRpbC52YWxpZGF0ZUp3dEF0dHJpYnV0ZXMocmVzcG9uc2UuaWRfdG9rZW4sIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tld0luU2Vjb25kcykudGhlbihwYXlsb2FkID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUubm9uY2UgJiYgc3RhdGUubm9uY2UgIT09IHBheWxvYWQubm9uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlczogSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzOiBObyBzdWIgcHJlc2VudCBpbiBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnByb2ZpbGUgPSBwYXlsb2FkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfdmFsaWRhdGVJZFRva2VuQW5kQWNjZXNzVG9rZW4oc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbihzdGF0ZSwgcmVzcG9uc2UpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVBY2Nlc3NUb2tlbihyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3ZhbGlkYXRlSWRUb2tlbihzdGF0ZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoIXN0YXRlLm5vbmNlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIG5vbmNlIG9uIHN0YXRlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gbm9uY2Ugb24gc3RhdGVcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGp3dCA9IHRoaXMuX2pvc2VVdGlsLnBhcnNlSnd0KHJlc3BvbnNlLmlkX3Rva2VuKTtcclxuICAgICAgICBpZiAoIWp3dCB8fCAhand0LmhlYWRlciB8fCAhand0LnBheWxvYWQpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIsIGp3dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLm5vbmNlICE9PSBqd3QucGF5bG9hZC5ub25jZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBJbnZhbGlkIG5vbmNlIGluIGlkX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIga2lkID0gand0LmhlYWRlci5raWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCkudGhlbihpc3N1ZXIgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBSZWNlaXZlZCBpc3N1ZXJcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzKCkudGhlbihrZXlzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgha2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogUmVjZWl2ZWQgc2lnbmluZyBrZXlzXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleTtcclxuICAgICAgICAgICAgICAgIGlmICgha2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5cyA9IHRoaXMuX2ZpbHRlckJ5QWxnKGtleXMsIGp3dC5oZWFkZXIuYWxnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBraWQgZm91bmQgaW4gaWRfdG9rZW4gYW5kIG1vcmUgdGhhbiBvbmUga2V5IGZvdW5kIGluIG1ldGFkYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBraWQgaXMgbWFuZGF0b3J5IG9ubHkgd2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUga2V5cyBpbiB0aGUgcmVmZXJlbmNlZCBKV0sgU2V0IGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlZSBodHRwOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1jb3JlLTFfMC5odG1sI1NpZ25pbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5c1swXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXlzLmZpbHRlcihrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5LmtpZCA9PT0ga2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBrZXkgbWF0Y2hpbmcga2lkIG9yIGFsZyBmb3VuZCBpbiBzaWduaW5nIGtleXNcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhdWRpZW5jZSA9IHN0YXRlLmNsaWVudF9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY2xvY2tTa2V3SW5TZWNvbmRzID0gdGhpcy5fc2V0dGluZ3MuY2xvY2tTa2V3O1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogVmFsaWRhaW5nIEpXVDsgdXNpbmcgY2xvY2sgc2tldyAoaW4gc2Vjb25kcykgb2Y6IFwiLCBjbG9ja1NrZXdJblNlY29uZHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9qb3NlVXRpbC52YWxpZGF0ZUp3dChyZXNwb25zZS5pZF90b2tlbiwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXdJblNlY29uZHMpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBKV1QgdmFsaWRhdGlvbiBzdWNjZXNzZnVsXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWp3dC5wYXlsb2FkLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBzdWIgcHJlc2VudCBpbiBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnByb2ZpbGUgPSBqd3QucGF5bG9hZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9maWx0ZXJCeUFsZyhrZXlzLCBhbGcpe1xyXG4gICAgICAgIHZhciBrdHkgPSBudWxsO1xyXG4gICAgICAgIGlmIChhbGcuc3RhcnRzV2l0aChcIlJTXCIpKSB7XHJcbiAgICAgICAgICAgIGt0eSA9IFwiUlNBXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFsZy5zdGFydHNXaXRoKFwiUFNcIikpIHtcclxuICAgICAgICAgICAga3R5ID0gXCJQU1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIkVTXCIpKSB7XHJcbiAgICAgICAgICAgIGt0eSA9IFwiRUNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJCeUFsZzogYWxnIG5vdCBzdXBwb3J0ZWQ6IFwiLCBhbGcpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyQnlBbGc6IExvb2tpbmcgZm9yIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHkpO1xyXG5cclxuICAgICAgICBrZXlzID0ga2V5cy5maWx0ZXIoa2V5ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleS5rdHkgPT09IGt0eTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlckJ5QWxnOiBOdW1iZXIgb2Yga2V5cyB0aGF0IG1hdGNoIGt0eTogXCIsIGt0eSwga2V5cy5sZW5ndGgpO1xyXG5cclxuICAgICAgICByZXR1cm4ga2V5cztcclxuICAgIH1cclxuXHJcbiAgICBfdmFsaWRhdGVBY2Nlc3NUb2tlbihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2UucHJvZmlsZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogTm8gcHJvZmlsZSBsb2FkZWQgZnJvbSBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHByb2ZpbGUgbG9hZGVkIGZyb20gaWRfdG9rZW5cIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5wcm9maWxlLmF0X2hhc2gpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IE5vIGF0X2hhc2ggaW4gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBhdF9oYXNoIGluIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2UuaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IE5vIGlkX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gaWRfdG9rZW5cIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGp3dCA9IHRoaXMuX2pvc2VVdGlsLnBhcnNlSnd0KHJlc3BvbnNlLmlkX3Rva2VuKTtcclxuICAgICAgICBpZiAoIWp3dCB8fCAhand0LmhlYWRlcikge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIsIGp3dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGhhc2hBbGcgPSBqd3QuaGVhZGVyLmFsZztcclxuICAgICAgICBpZiAoIWhhc2hBbGcgfHwgaGFzaEFsZy5sZW5ndGggIT09IDUpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IFVuc3VwcG9ydGVkIGFsZzpcIiwgaGFzaEFsZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6IFwiICsgaGFzaEFsZykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGhhc2hCaXRzID0gaGFzaEFsZy5zdWJzdHIoMiwgMyk7XHJcbiAgICAgICAgaWYgKCFoYXNoQml0cykge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogVW5zdXBwb3J0ZWQgYWxnOlwiLCBoYXNoQWxnLCBoYXNoQml0cyk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6IFwiICsgaGFzaEFsZykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGFzaEJpdHMgPSBwYXJzZUludChoYXNoQml0cyk7XHJcbiAgICAgICAgaWYgKGhhc2hCaXRzICE9PSAyNTYgJiYgaGFzaEJpdHMgIT09IDM4NCAmJiBoYXNoQml0cyAhPT0gNTEyKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBVbnN1cHBvcnRlZCBhbGc6XCIsIGhhc2hBbGcsIGhhc2hCaXRzKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGFsZzogXCIgKyBoYXNoQWxnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2hhID0gXCJzaGFcIiArIGhhc2hCaXRzO1xyXG4gICAgICAgIHZhciBoYXNoID0gdGhpcy5fam9zZVV0aWwuaGFzaFN0cmluZyhyZXNwb25zZS5hY2Nlc3NfdG9rZW4sIHNoYSk7XHJcbiAgICAgICAgaWYgKCFoYXNoKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBhY2Nlc3NfdG9rZW4gaGFzaCBmYWlsZWQ6XCIsIHNoYSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdmFsaWRhdGUgYXRfaGFzaFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbGVmdCA9IGhhc2guc3Vic3RyKDAsIGhhc2gubGVuZ3RoIC8gMik7XHJcbiAgICAgICAgdmFyIGxlZnRfYjY0dSA9IHRoaXMuX2pvc2VVdGlsLmhleFRvQmFzZTY0VXJsKGxlZnQpO1xyXG4gICAgICAgIGlmIChsZWZ0X2I2NHUgIT09IHJlc3BvbnNlLnByb2ZpbGUuYXRfaGFzaCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogRmFpbGVkIHRvIHZhbGlkYXRlIGF0X2hhc2hcIiwgbGVmdF9iNjR1LCByZXNwb25zZS5wcm9maWxlLmF0X2hhc2gpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHZhbGlkYXRlIGF0X2hhc2hcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IHN1Y2Nlc3NcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgQ2hlY2tTZXNzaW9uSUZyYW1lIH0gZnJvbSAnLi9DaGVja1Nlc3Npb25JRnJhbWUuanMnO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvbk1vbml0b3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVzZXJNYW5hZ2VyLCBDaGVja1Nlc3Npb25JRnJhbWVDdG9yID0gQ2hlY2tTZXNzaW9uSUZyYW1lLCB0aW1lciA9IEdsb2JhbC50aW1lcikge1xyXG4gICAgICAgIGlmICghdXNlck1hbmFnZXIpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2Vzc2lvbk1vbml0b3IuY3RvcjogTm8gdXNlciBtYW5hZ2VyIHBhc3NlZCB0byBTZXNzaW9uTW9uaXRvclwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXNlck1hbmFnZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlciA9IHVzZXJNYW5hZ2VyO1xyXG4gICAgICAgIHRoaXMuX0NoZWNrU2Vzc2lvbklGcmFtZUN0b3IgPSBDaGVja1Nlc3Npb25JRnJhbWVDdG9yO1xyXG4gICAgICAgIHRoaXMuX3RpbWVyID0gdGltZXI7XHJcblxyXG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5hZGRVc2VyTG9hZGVkKHRoaXMuX3N0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5hZGRVc2VyVW5sb2FkZWQodGhpcy5fc3RvcC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZ2V0VXNlcigpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRvaW5nIHRoaXMgbWFudWFsbHkgaGVyZSBzaW5jZSBjYWxsaW5nIGdldFVzZXIgXHJcbiAgICAgICAgICAgIC8vIGRvZXNuJ3QgdHJpZ2dlciBsb2FkIGV2ZW50LlxyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQodXNlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc2V0dGluZ3MubW9uaXRvckFub255bW91c1Nlc3Npb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRtcFVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25fc3RhdGUgOiBzZXNzaW9uLnNlc3Npb25fc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnN1YiAmJiBzZXNzaW9uLnNpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBVc2VyLnByb2ZpbGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWI6IHNlc3Npb24uc3ViLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkOiBzZXNzaW9uLnNpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCh0bXBVc2VyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiU2Vzc2lvbk1vbml0b3IgY3RvcjogZXJyb3IgZnJvbSBxdWVyeVNlc3Npb25TdGF0dXM6XCIsIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTZXNzaW9uTW9uaXRvciBjdG9yOiBlcnJvciBmcm9tIGdldFVzZXI6XCIsIGVyci5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3NldHRpbmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTWFuYWdlci5zZXR0aW5ncztcclxuICAgIH1cclxuICAgIGdldCBfbWV0YWRhdGFTZXJ2aWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTWFuYWdlci5tZXRhZGF0YVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBnZXQgX2NsaWVudF9pZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9jaGVja1Nlc3Npb25JbnRlcnZhbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5zdG9wQ2hlY2tTZXNzaW9uT25FcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICBfc3RhcnQodXNlcikge1xyXG4gICAgICAgIGxldCBzZXNzaW9uX3N0YXRlID0gdXNlci5zZXNzaW9uX3N0YXRlO1xyXG5cclxuICAgICAgICBpZiAoc2Vzc2lvbl9zdGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAodXNlci5wcm9maWxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWIgPSB1c2VyLnByb2ZpbGUuc3ViO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2lkID0gdXNlci5wcm9maWxlLnNpZDtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogc2Vzc2lvbl9zdGF0ZTpcIiwgc2Vzc2lvbl9zdGF0ZSwgXCIsIHN1YjpcIiwgdGhpcy5fc3ViKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N1YiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogc2Vzc2lvbl9zdGF0ZTpcIiwgc2Vzc2lvbl9zdGF0ZSwgXCIsIGFub255bW91cyB1c2VyXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldENoZWNrU2Vzc2lvbklmcmFtZSgpLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogSW5pdGlhbGl6aW5nIGNoZWNrIHNlc3Npb24gaWZyYW1lXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50X2lkID0gdGhpcy5fY2xpZW50X2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLl9jaGVja1Nlc3Npb25JbnRlcnZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3BPbkVycm9yID0gdGhpcy5fc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUgPSBuZXcgdGhpcy5fQ2hlY2tTZXNzaW9uSUZyYW1lQ3Rvcih0aGlzLl9jYWxsYmFjay5iaW5kKHRoaXMpLCBjbGllbnRfaWQsIHVybCwgaW50ZXJ2YWwsIHN0b3BPbkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdGFydChzZXNzaW9uX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogTm8gY2hlY2sgc2Vzc2lvbiBpZnJhbWUgZm91bmQgaW4gdGhlIG1ldGFkYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIG5vbi1wcm9taXNlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiU2Vzc2lvbk1vbml0b3IuX3N0YXJ0OiBFcnJvciBmcm9tIGdldENoZWNrU2Vzc2lvbklmcmFtZTpcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUuc3RhcnQoc2Vzc2lvbl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3N0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5fc3ViID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX3NpZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZSkge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RvcFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0b3AoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5tb25pdG9yQW5vbnltb3VzU2Vzc2lvbikge1xyXG4gICAgICAgICAgICAvLyB1c2luZyBhIHRpbWVyIHRvIGRlbGF5IHJlLWluaXRpYWxpemF0aW9uIHRvIGF2b2lkIHJhY2UgY29uZGl0aW9ucyBkdXJpbmcgc2lnbm91dFxyXG4gICAgICAgICAgICBsZXQgdGltZXJIYW5kbGUgPSB0aGlzLl90aW1lci5zZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGltZXIuY2xlYXJJbnRlcnZhbCh0aW1lckhhbmRsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzKCkudGhlbihzZXNzaW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG1wVXNlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZSA6IHNlc3Npb24uc2Vzc2lvbl9zdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlc3Npb24uc3ViICYmIHNlc3Npb24uc2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcFVzZXIucHJvZmlsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yjogc2Vzc2lvbi5zdWIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWQ6IHNlc3Npb24uc2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0KHRtcFVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBhIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiU2Vzc2lvbk1vbml0b3I6IGVycm9yIGZyb20gcXVlcnlTZXNzaW9uU3RhdHVzOlwiLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzKCkudGhlbihzZXNzaW9uID0+IHtcclxuICAgICAgICAgICAgdmFyIHJhaXNlRXZlbnQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnN1YiA9PT0gdGhpcy5fc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFpc2VFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdGFydChzZXNzaW9uLnNlc3Npb25fc3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zaWQgPT09IHRoaXMuX3NpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNhbWUgc3ViIHN0aWxsIGxvZ2dlZCBpbiBhdCBPUCwgcmVzdGFydGluZyBjaGVjayBzZXNzaW9uIGlmcmFtZTsgc2Vzc2lvbl9zdGF0ZTpcIiwgc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogU2FtZSBzdWIgc3RpbGwgbG9nZ2VkIGluIGF0IE9QLCBzZXNzaW9uIHN0YXRlIGhhcyBjaGFuZ2VkLCByZXN0YXJ0aW5nIGNoZWNrIHNlc3Npb24gaWZyYW1lOyBzZXNzaW9uX3N0YXRlOlwiLCBzZXNzaW9uLnNlc3Npb25fc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBEaWZmZXJlbnQgc3ViamVjdCBzaWduZWQgaW50byBPUDpcIiwgc2Vzc2lvbi5zdWIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTdWJqZWN0IG5vIGxvbmdlciBzaWduZWQgaW50byBPUFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJhaXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazsgcmFpc2luZyBzaWduZWQgb3V0IGV2ZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkT3V0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazsgcmFpc2luZyBzaWduZWQgaW4gZXZlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLl9yYWlzZVVzZXJTaWduZWRJbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3N1Yikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBFcnJvciBjYWxsaW5nIHF1ZXJ5Q3VycmVudFNpZ25pblNlc3Npb247IHJhaXNpbmcgc2lnbmVkIG91dCBldmVudFwiLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNpZ25lZE91dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBVcmxVdGlsaXR5IH0gZnJvbSAnLi9VcmxVdGlsaXR5LmpzJztcclxuaW1wb3J0IHsgU2lnbmluU3RhdGUgfSBmcm9tICcuL1NpZ25pblN0YXRlLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5SZXF1ZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICAvLyBtYW5kYXRvcnlcclxuICAgICAgICB1cmwsIGNsaWVudF9pZCwgcmVkaXJlY3RfdXJpLCByZXNwb25zZV90eXBlLCBzY29wZSwgYXV0aG9yaXR5LFxyXG4gICAgICAgIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgZGF0YSwgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50LCBhY3JfdmFsdWVzLCByZXNvdXJjZSwgcmVzcG9uc2VfbW9kZSxcclxuICAgICAgICByZXF1ZXN0LCByZXF1ZXN0X3VyaSwgZXh0cmFRdWVyeVBhcmFtcywgcmVxdWVzdF90eXBlLCBjbGllbnRfc2VjcmV0LCBleHRyYVRva2VuUGFyYW1zLCBza2lwVXNlckluZm9cclxuICAgIH0pIHtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHVybCBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjbGllbnRfaWQpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyBjbGllbnRfaWQgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjbGllbnRfaWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVkaXJlY3RfdXJpKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gcmVkaXJlY3RfdXJpIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVkaXJlY3RfdXJpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlc3BvbnNlX3R5cGUpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyByZXNwb25zZV90eXBlIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVzcG9uc2VfdHlwZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzY29wZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHNjb3BlIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2NvcGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXV0aG9yaXR5KSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gYXV0aG9yaXR5IHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXV0aG9yaXR5XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9pZGMgPSBTaWduaW5SZXF1ZXN0LmlzT2lkYyhyZXNwb25zZV90eXBlKTtcclxuICAgICAgICBsZXQgY29kZSA9IFNpZ25pblJlcXVlc3QuaXNDb2RlKHJlc3BvbnNlX3R5cGUpO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlX21vZGUpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2VfbW9kZSA9IFNpZ25pblJlcXVlc3QuaXNDb2RlKHJlc3BvbnNlX3R5cGUpID8gXCJxdWVyeVwiIDogbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU2lnbmluU3RhdGUoeyBub25jZTogb2lkYywgXHJcbiAgICAgICAgICAgIGRhdGEsIGNsaWVudF9pZCwgYXV0aG9yaXR5LCByZWRpcmVjdF91cmksIFxyXG4gICAgICAgICAgICBjb2RlX3ZlcmlmaWVyOiBjb2RlLCBcclxuICAgICAgICAgICAgcmVxdWVzdF90eXBlLCByZXNwb25zZV9tb2RlLFxyXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0LCBzY29wZSwgZXh0cmFUb2tlblBhcmFtcywgc2tpcFVzZXJJbmZvIH0pO1xyXG5cclxuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImNsaWVudF9pZFwiLCBjbGllbnRfaWQpO1xyXG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwicmVkaXJlY3RfdXJpXCIsIHJlZGlyZWN0X3VyaSk7XHJcbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJyZXNwb25zZV90eXBlXCIsIHJlc3BvbnNlX3R5cGUpO1xyXG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwic2NvcGVcIiwgc2NvcGUpO1xyXG5cclxuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInN0YXRlXCIsIHRoaXMuc3RhdGUuaWQpO1xyXG4gICAgICAgIGlmIChvaWRjKSB7XHJcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwibm9uY2VcIiwgdGhpcy5zdGF0ZS5ub25jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2RlKSB7XHJcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwiY29kZV9jaGFsbGVuZ2VcIiwgdGhpcy5zdGF0ZS5jb2RlX2NoYWxsZW5nZSk7XHJcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwiY29kZV9jaGFsbGVuZ2VfbWV0aG9kXCIsIFwiUzI1NlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25hbCA9IHsgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50LCBhY3JfdmFsdWVzLCByZXNvdXJjZSwgcmVxdWVzdCwgcmVxdWVzdF91cmksIHJlc3BvbnNlX21vZGUgfTtcclxuICAgICAgICBmb3IobGV0IGtleSBpbiBvcHRpb25hbCl7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25hbFtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBrZXksIG9wdGlvbmFsW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGtleSBpbiBleHRyYVF1ZXJ5UGFyYW1zKXtcclxuICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwga2V5LCBleHRyYVF1ZXJ5UGFyYW1zW2tleV0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNPaWRjKHJlc3BvbnNlX3R5cGUpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2VfdHlwZS5zcGxpdCgvXFxzKy9nKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbSA9PT0gXCJpZF90b2tlblwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAhIShyZXN1bHRbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc09BdXRoKHJlc3BvbnNlX3R5cGUpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2VfdHlwZS5zcGxpdCgvXFxzKy9nKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbSA9PT0gXCJ0b2tlblwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAhIShyZXN1bHRbMF0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgaXNDb2RlKHJlc3BvbnNlX3R5cGUpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2VfdHlwZS5zcGxpdCgvXFxzKy9nKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbSA9PT0gXCJjb2RlXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICEhKHJlc3VsdFswXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XHJcblxyXG5jb25zdCBPaWRjU2NvcGUgPSBcIm9wZW5pZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblJlc3BvbnNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHVybCwgZGVsaW1pdGVyID0gXCIjXCIpIHtcclxuXHJcbiAgICAgICAgdmFyIHZhbHVlcyA9IFVybFV0aWxpdHkucGFyc2VVcmxGcmFnbWVudCh1cmwsIGRlbGltaXRlcik7XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3IgPSB2YWx1ZXMuZXJyb3I7XHJcbiAgICAgICAgdGhpcy5lcnJvcl9kZXNjcmlwdGlvbiA9IHZhbHVlcy5lcnJvcl9kZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmVycm9yX3VyaSA9IHZhbHVlcy5lcnJvcl91cmk7XHJcblxyXG4gICAgICAgIHRoaXMuY29kZSA9IHZhbHVlcy5jb2RlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB2YWx1ZXMuc3RhdGU7XHJcbiAgICAgICAgdGhpcy5pZF90b2tlbiA9IHZhbHVlcy5pZF90b2tlbjtcclxuICAgICAgICB0aGlzLnNlc3Npb25fc3RhdGUgPSB2YWx1ZXMuc2Vzc2lvbl9zdGF0ZTtcclxuICAgICAgICB0aGlzLmFjY2Vzc190b2tlbiA9IHZhbHVlcy5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgdGhpcy50b2tlbl90eXBlID0gdmFsdWVzLnRva2VuX3R5cGU7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHZhbHVlcy5zY29wZTtcclxuICAgICAgICB0aGlzLnByb2ZpbGUgPSB1bmRlZmluZWQ7IC8vIHdpbGwgYmUgc2V0IGZyb20gUmVzcG9uc2VWYWxpZGF0b3JcclxuXHJcbiAgICAgICAgdGhpcy5leHBpcmVzX2luID0gdmFsdWVzLmV4cGlyZXNfaW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGV4cGlyZXNfaW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwaXJlc19hdCkge1xyXG4gICAgICAgICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHBpcmVzX2F0IC0gbm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4cGlyZXNfaW4odmFsdWUpe1xyXG4gICAgICAgIGxldCBleHBpcmVzX2luID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZXhwaXJlc19pbiA9PT0gJ251bWJlcicgJiYgZXhwaXJlc19pbiA+IDApIHtcclxuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5leHBpcmVzX2F0ID0gbm93ICsgZXhwaXJlc19pbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGV4cGlyZWQoKSB7XHJcbiAgICAgICAgbGV0IGV4cGlyZXNfaW4gPSB0aGlzLmV4cGlyZXNfaW47XHJcbiAgICAgICAgaWYgKGV4cGlyZXNfaW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXhwaXJlc19pbiA8PSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY29wZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnNjb3BlIHx8IFwiXCIpLnNwbGl0KFwiIFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNPcGVuSWRDb25uZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3Blcy5pbmRleE9mKE9pZGNTY29wZSkgPj0gMCB8fCAhIXRoaXMuaWRfdG9rZW47XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vU3RhdGUuanMnO1xyXG5pbXBvcnQgeyBKb3NlVXRpbCB9IGZyb20gJy4vSm9zZVV0aWwuanMnO1xyXG5pbXBvcnQgcmFuZG9tIGZyb20gJy4vcmFuZG9tLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5TdGF0ZSBleHRlbmRzIFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHtub25jZSwgYXV0aG9yaXR5LCBjbGllbnRfaWQsIHJlZGlyZWN0X3VyaSwgY29kZV92ZXJpZmllciwgcmVzcG9uc2VfbW9kZSwgY2xpZW50X3NlY3JldCwgc2NvcGUsIGV4dHJhVG9rZW5QYXJhbXMsIHNraXBVc2VySW5mb30gPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGFyZ3VtZW50c1swXSk7XHJcblxyXG4gICAgICAgIGlmIChub25jZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ub25jZSA9IHJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChub25jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ub25jZSA9IG5vbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvZGVfdmVyaWZpZXIgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgLy8gcmFuZG9tKCkgcHJvZHVjZXMgMzIgbGVuZ3RoXHJcbiAgICAgICAgICAgIHRoaXMuX2NvZGVfdmVyaWZpZXIgPSByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvZGVfdmVyaWZpZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29kZV92ZXJpZmllciA9IGNvZGVfdmVyaWZpZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmNvZGVfdmVyaWZpZXIpIHtcclxuICAgICAgICAgICAgbGV0IGhhc2ggPSBKb3NlVXRpbC5oYXNoU3RyaW5nKHRoaXMuY29kZV92ZXJpZmllciwgXCJTSEEyNTZcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvZGVfY2hhbGxlbmdlID0gSm9zZVV0aWwuaGV4VG9CYXNlNjRVcmwoaGFzaCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9yZWRpcmVjdF91cmkgPSByZWRpcmVjdF91cmk7XHJcbiAgICAgICAgdGhpcy5fYXV0aG9yaXR5ID0gYXV0aG9yaXR5O1xyXG4gICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IGNsaWVudF9pZDtcclxuICAgICAgICB0aGlzLl9yZXNwb25zZV9tb2RlID0gcmVzcG9uc2VfbW9kZTtcclxuICAgICAgICB0aGlzLl9jbGllbnRfc2VjcmV0ID0gY2xpZW50X3NlY3JldDtcclxuICAgICAgICB0aGlzLl9zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXMgPSBleHRyYVRva2VuUGFyYW1zO1xyXG4gICAgICAgIHRoaXMuX3NraXBVc2VySW5mbyA9IHNraXBVc2VySW5mbztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbm9uY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vbmNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGF1dGhvcml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXR5O1xyXG4gICAgfVxyXG4gICAgZ2V0IGNsaWVudF9pZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50X2lkO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlZGlyZWN0X3VyaSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvZGVfdmVyaWZpZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvZGVfdmVyaWZpZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgY29kZV9jaGFsbGVuZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvZGVfY2hhbGxlbmdlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlc3BvbnNlX21vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlX21vZGU7XHJcbiAgICB9XHJcbiAgICBnZXQgY2xpZW50X3NlY3JldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50X3NlY3JldDtcclxuICAgIH1cclxuICAgIGdldCBzY29wZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcGU7XHJcbiAgICB9XHJcbiAgICBnZXQgZXh0cmFUb2tlblBhcmFtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFUb2tlblBhcmFtcztcclxuICAgIH1cclxuICAgIGdldCBza2lwVXNlckluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NraXBVc2VySW5mbztcclxuICAgIH1cclxuICAgIFxyXG4gICAgdG9TdG9yYWdlU3RyaW5nKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlNpZ25pblN0YXRlLnRvU3RvcmFnZVN0cmluZ1wiKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLFxyXG4gICAgICAgICAgICBjcmVhdGVkOiB0aGlzLmNyZWF0ZWQsXHJcbiAgICAgICAgICAgIHJlcXVlc3RfdHlwZTogdGhpcy5yZXF1ZXN0X3R5cGUsXHJcbiAgICAgICAgICAgIG5vbmNlOiB0aGlzLm5vbmNlLFxyXG4gICAgICAgICAgICBjb2RlX3ZlcmlmaWVyOiB0aGlzLmNvZGVfdmVyaWZpZXIsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogdGhpcy5yZWRpcmVjdF91cmksXHJcbiAgICAgICAgICAgIGF1dGhvcml0eTogdGhpcy5hdXRob3JpdHksXHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlX21vZGU6IHRoaXMucmVzcG9uc2VfbW9kZSxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5jbGllbnRfc2VjcmV0LFxyXG4gICAgICAgICAgICBzY29wZTogdGhpcy5zY29wZSxcclxuICAgICAgICAgICAgZXh0cmFUb2tlblBhcmFtcyA6IHRoaXMuZXh0cmFUb2tlblBhcmFtcyxcclxuICAgICAgICAgICAgc2tpcFVzZXJJbmZvOiB0aGlzLnNraXBVc2VySW5mb1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiU2lnbmluU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpO1xyXG4gICAgICAgIHJldHVybiBuZXcgU2lnbmluU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBVcmxVdGlsaXR5IH0gZnJvbSAnLi9VcmxVdGlsaXR5LmpzJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1N0YXRlLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdub3V0UmVxdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7dXJsLCBpZF90b2tlbl9oaW50LCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmksIGRhdGEsIGV4dHJhUXVlcnlQYXJhbXMsIHJlcXVlc3RfdHlwZX0pIHtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWdub3V0UmVxdWVzdC5jdG9yOiBObyB1cmwgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWRfdG9rZW5faGludCkge1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImlkX3Rva2VuX2hpbnRcIiwgaWRfdG9rZW5faGludCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKSB7XHJcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwicG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpXCIsIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBTdGF0ZSh7IGRhdGEsIHJlcXVlc3RfdHlwZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInN0YXRlXCIsIHRoaXMuc3RhdGUuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGtleSBpbiBleHRyYVF1ZXJ5UGFyYW1zKXtcclxuICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwga2V5LCBleHRyYVF1ZXJ5UGFyYW1zW2tleV0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBVcmxVdGlsaXR5IH0gZnJvbSAnLi9VcmxVdGlsaXR5LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdub3V0UmVzcG9uc2Uge1xyXG4gICAgY29uc3RydWN0b3IodXJsKSB7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZXMgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBcIj9cIik7XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3IgPSB2YWx1ZXMuZXJyb3I7XHJcbiAgICAgICAgdGhpcy5lcnJvcl9kZXNjcmlwdGlvbiA9IHZhbHVlcy5lcnJvcl9kZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmVycm9yX3VyaSA9IHZhbHVlcy5lcnJvcl91cmk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB2YWx1ZXMuc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbGVudFJlbmV3U2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodXNlck1hbmFnZXIpIHtcclxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlciA9IHVzZXJNYW5hZ2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSB0aGlzLl90b2tlbkV4cGlyaW5nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5hZGRBY2Nlc3NUb2tlbkV4cGlyaW5nKHRoaXMuX2NhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCB0cmlnZ2VyIGxvYWRpbmcgb2YgdGhlIHVzZXIgc28gdGhlIGV4cGlyaW5nIGV2ZW50cyBjYW4gYmUgaW5pdGlhbGl6ZWRcclxuICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZ2V0VXNlcigpLnRoZW4odXNlcj0+e1xyXG4gICAgICAgICAgICAgICAgLy8gZGVsaWJlcmF0ZSBub3BcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjdG9yXHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWxlbnRSZW5ld1NlcnZpY2Uuc3RhcnQ6IEVycm9yIGZyb20gZ2V0VXNlcjpcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLnJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJpbmcodGhpcy5fY2FsbGJhY2spO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF90b2tlbkV4cGlyaW5nKCkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnNpZ25pblNpbGVudCgpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNpbGVudFJlbmV3U2VydmljZS5fdG9rZW5FeHBpcmluZzogU2lsZW50IHRva2VuIHJlbmV3YWwgc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWxlbnRSZW5ld1NlcnZpY2UuX3Rva2VuRXhwaXJpbmc6IEVycm9yIGZyb20gc2lnbmluU2lsZW50OlwiLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VTaWxlbnRSZW5ld0Vycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgcmFuZG9tIGZyb20gJy4vcmFuZG9tLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7aWQsIGRhdGEsIGNyZWF0ZWQsIHJlcXVlc3RfdHlwZX0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQgfHwgcmFuZG9tKCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY3JlYXRlZCA9PT0gJ251bWJlcicgJiYgY3JlYXRlZCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlZCA9IGNyZWF0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVkID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZXF1ZXN0X3R5cGUgPSAgcmVxdWVzdF90eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICAgIH1cclxuICAgIGdldCBjcmVhdGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVkO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlcXVlc3RfdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdF90eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS50b1N0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcclxuICAgICAgICAgICAgY3JlYXRlZDogdGhpcy5jcmVhdGVkLFxyXG4gICAgICAgICAgICByZXF1ZXN0X3R5cGU6IHRoaXMucmVxdWVzdF90eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyb21TdG9yYWdlU3RyaW5nKHN0b3JhZ2VTdHJpbmcpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZ1wiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0YXRlKEpTT04ucGFyc2Uoc3RvcmFnZVN0cmluZykpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGVhclN0YWxlU3RhdGUoc3RvcmFnZSwgYWdlKSB7XHJcblxyXG4gICAgICAgIHZhciBjdXRvZmYgPSBEYXRlLm5vdygpIC8gMTAwMCAtIGFnZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UuZ2V0QWxsS2V5cygpLnRoZW4oa2V5cyA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogZ290IGtleXNcIiwga2V5cyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcclxuICAgICAgICAgICAgICAgIHZhciBwID0gc3RvcmFnZS5nZXQoa2V5KS50aGVuKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZW1vdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IFN0YXRlLmZyb21TdG9yYWdlU3RyaW5nKGl0ZW0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiBnb3QgaXRlbSBmcm9tIGtleTogXCIsIGtleSwgc3RhdGUuY3JlYXRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmNyZWF0ZWQgPD0gY3V0b2ZmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiBFcnJvciBwYXJzaW5nIHN0YXRlIGZvciBrZXlcIiwga2V5LCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiBubyBpdGVtIGluIHN0b3JhZ2UgZm9yIGtleTogXCIsIGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogcmVtb3ZlZCBpdGVtIGZvciBrZXk6IFwiLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmFnZS5yZW1vdmUoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IHdhaXRpbmcgb24gcHJvbWlzZSBjb3VudDpcIiwgcHJvbWlzZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuL0V2ZW50LmpzJztcclxuXHJcbmNvbnN0IFRpbWVyRHVyYXRpb24gPSA1OyAvLyBzZWNvbmRzXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZXIgZXh0ZW5kcyBFdmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdGltZXIgPSBHbG9iYWwudGltZXIsIG5vd0Z1bmMgPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuICAgICAgICB0aGlzLl90aW1lciA9IHRpbWVyO1xyXG5cclxuICAgICAgICBpZiAobm93RnVuYykge1xyXG4gICAgICAgICAgICB0aGlzLl9ub3dGdW5jID0gbm93RnVuYztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25vd0Z1bmMgPSAoKSA9PiBEYXRlLm5vdygpIC8gMTAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5vdygpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5fbm93RnVuYygpKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KGR1cmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uIDw9IDApIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkdXJhdGlvbiA9IHBhcnNlSW50KGR1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgdmFyIGV4cGlyYXRpb24gPSB0aGlzLm5vdyArIGR1cmF0aW9uO1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGlyYXRpb24gPT09IGV4cGlyYXRpb24gJiYgdGhpcy5fdGltZXJIYW5kbGUpIHtcclxuICAgICAgICAgICAgLy8gbm8gbmVlZCB0byByZWluaXRpYWxpemUgdG8gc2FtZSBleHBpcmF0aW9uLCBzbyBiYWlsIG91dFxyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUaW1lci5pbml0IHRpbWVyIFwiICsgdGhpcy5fbmFtZSArIFwiIHNraXBwaW5nIGluaXRpYWxpemF0aW9uIHNpbmNlIGFscmVhZHkgaW5pdGlhbGl6ZWQgZm9yIGV4cGlyYXRpb246XCIsIHRoaXMuZXhwaXJhdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FuY2VsKCk7XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlRpbWVyLmluaXQgdGltZXIgXCIgKyB0aGlzLl9uYW1lICsgXCIgZm9yIGR1cmF0aW9uOlwiLCBkdXJhdGlvbik7XHJcbiAgICAgICAgdGhpcy5fZXhwaXJhdGlvbiA9IGV4cGlyYXRpb247XHJcblxyXG4gICAgICAgIC8vIHdlJ3JlIHVzaW5nIGEgZmFpcmx5IHNob3J0IHRpbWVyIGFuZCB0aGVuIGNoZWNraW5nIHRoZSBleHBpcmF0aW9uIGluIHRoZVxyXG4gICAgICAgIC8vIGNhbGxiYWNrIHRvIGhhbmRsZSBzY2VuYXJpb3Mgd2hlcmUgdGhlIGJyb3dzZXIgZGV2aWNlIHNsZWVwcywgYW5kIHRoZW5cclxuICAgICAgICAvLyB0aGUgdGltZXJzIGVuZCB1cCBnZXR0aW5nIGRlbGF5ZWQuXHJcbiAgICAgICAgdmFyIHRpbWVyRHVyYXRpb24gPSBUaW1lckR1cmF0aW9uO1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiA8IHRpbWVyRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGltZXJEdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl90aW1lckhhbmRsZSA9IHRoaXMuX3RpbWVyLnNldEludGVydmFsKHRoaXMuX2NhbGxiYWNrLmJpbmQodGhpcyksIHRpbWVyRHVyYXRpb24gKiAxMDAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGV4cGlyYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cGlyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl90aW1lckhhbmRsZSkge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUaW1lci5jYW5jZWw6IFwiLCB0aGlzLl9uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fdGltZXIuY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lckhhbmRsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVySGFuZGxlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NhbGxiYWNrKCkge1xyXG4gICAgICAgIHZhciBkaWZmID0gdGhpcy5fZXhwaXJhdGlvbiAtIHRoaXMubm93O1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlRpbWVyLmNhbGxiYWNrOyBcIiArIHRoaXMuX25hbWUgKyBcIiB0aW1lciBleHBpcmVzIGluOlwiLCBkaWZmKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2V4cGlyYXRpb24gPD0gdGhpcy5ub3cpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgc3VwZXIucmFpc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgSnNvblNlcnZpY2UgfSBmcm9tICcuL0pzb25TZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9NZXRhZGF0YVNlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5DbGllbnQge1xyXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIEpzb25TZXJ2aWNlQ3RvciA9IEpzb25TZXJ2aWNlLCBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5jdG9yOiBObyBzZXR0aW5ncyBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLl9qc29uU2VydmljZSA9IG5ldyBKc29uU2VydmljZUN0b3IoKTtcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhjaGFuZ2VDb2RlKGFyZ3MgPSB7fSkge1xyXG4gICAgICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcclxuXHJcbiAgICAgICAgYXJncy5ncmFudF90eXBlID0gYXJncy5ncmFudF90eXBlIHx8IFwiYXV0aG9yaXphdGlvbl9jb2RlXCI7XHJcbiAgICAgICAgYXJncy5jbGllbnRfaWQgPSBhcmdzLmNsaWVudF9pZCB8fCB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XHJcbiAgICAgICAgYXJncy5yZWRpcmVjdF91cmkgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLl9zZXR0aW5ncy5yZWRpcmVjdF91cmk7XHJcblxyXG4gICAgICAgIGlmICghYXJncy5jb2RlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY29kZSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIGNvZGUgaXMgcmVxdWlyZWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFyZ3MucmVkaXJlY3RfdXJpKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gcmVkaXJlY3RfdXJpIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgcmVkaXJlY3RfdXJpIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcmdzLmNvZGVfdmVyaWZpZXIpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlOiBObyBjb2RlX3ZlcmlmaWVyIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY29kZV92ZXJpZmllciBpcyByZXF1aXJlZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJncy5jbGllbnRfaWQpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlOiBObyBjbGllbnRfaWQgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSBjbGllbnRfaWQgaXMgcmVxdWlyZWRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRUb2tlbkVuZHBvaW50KGZhbHNlKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogUmVjZWl2ZWQgdG9rZW4gZW5kcG9pbnRcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UucG9zdEZvcm0odXJsLCBhcmdzKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogcmVzcG9uc2UgcmVjZWl2ZWRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4Y2hhbmdlUmVmcmVzaFRva2VuKGFyZ3MgPSB7fSkge1xyXG4gICAgICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcclxuXHJcbiAgICAgICAgYXJncy5ncmFudF90eXBlID0gYXJncy5ncmFudF90eXBlIHx8IFwicmVmcmVzaF90b2tlblwiO1xyXG4gICAgICAgIGFyZ3MuY2xpZW50X2lkID0gYXJncy5jbGllbnRfaWQgfHwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xyXG4gICAgICAgIGFyZ3MuY2xpZW50X3NlY3JldCA9IGFyZ3MuY2xpZW50X3NlY3JldCB8fCB0aGlzLl9zZXR0aW5ncy5jbGllbnRfc2VjcmV0O1xyXG5cclxuICAgICAgICBpZiAoIWFyZ3MucmVmcmVzaF90b2tlbikge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogTm8gcmVmcmVzaF90b2tlbiBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHJlZnJlc2hfdG9rZW4gaXMgcmVxdWlyZWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFyZ3MuY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuOiBObyBjbGllbnRfaWQgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSBjbGllbnRfaWQgaXMgcmVxdWlyZWRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRUb2tlbkVuZHBvaW50KGZhbHNlKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuOiBSZWNlaXZlZCB0b2tlbiBlbmRwb2ludFwiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uU2VydmljZS5wb3N0Rm9ybSh1cmwsIGFyZ3MpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VSZWZyZXNoVG9rZW46IHJlc3BvbnNlIHJlY2VpdmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwuanMnO1xyXG5cclxuY29uc3QgQWNjZXNzVG9rZW5UeXBlSGludCA9IFwiYWNjZXNzX3Rva2VuXCI7XHJcbmNvbnN0IFJlZnJlc2hUb2tlblR5cGVIaW50ID0gXCJyZWZyZXNoX3Rva2VuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5SZXZvY2F0aW9uQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBYTUxIdHRwUmVxdWVzdEN0b3IgPSBHbG9iYWwuWE1MSHR0cFJlcXVlc3QsIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2UpIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5jdG9yOiBObyBzZXR0aW5ncyBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2V0dGluZ3MgcHJvdmlkZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLl9YTUxIdHRwUmVxdWVzdEN0b3IgPSBYTUxIdHRwUmVxdWVzdEN0b3I7XHJcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldm9rZSh0b2tlbiwgcmVxdWlyZWQsIHR5cGUgPSBcImFjY2Vzc190b2tlblwiKSB7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBObyB0b2tlbiBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdG9rZW4gcHJvdmlkZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGUgIT09IEFjY2Vzc1Rva2VuVHlwZUhpbnQgJiYgdHlwZSAhPSBSZWZyZXNoVG9rZW5UeXBlSGludCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBJbnZhbGlkIHRva2VuIHR5cGVcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdG9rZW4gdHlwZS5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFJldm9jYXRpb25FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IFJldm9jYXRpb24gbm90IHN1cHBvcnRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXZvY2F0aW9uIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbm90IHJlcXVpcmVkLCBzbyBkb24ndCBlcnJvciBhbmQganVzdCByZXR1cm5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogUmV2b2tpbmcgXCIgKyB0eXBlKTtcclxuICAgICAgICAgICAgdmFyIGNsaWVudF9pZCA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcclxuICAgICAgICAgICAgdmFyIGNsaWVudF9zZWNyZXQgPSB0aGlzLl9zZXR0aW5ncy5jbGllbnRfc2VjcmV0O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlKHVybCwgY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCB0b2tlbiwgdHlwZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Jldm9rZSh1cmwsIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgdG9rZW4sIHR5cGUpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgdGhpcy5fWE1MSHR0cFJlcXVlc3RDdG9yKCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwpO1xyXG5cclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IEhUVFAgcmVzcG9uc2UgcmVjZWl2ZWQsIHN0YXR1c1wiLCB4aHIuc3RhdHVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEVycm9yKHhoci5zdGF0dXNUZXh0ICsgXCIgKFwiICsgeGhyLnN0YXR1cyArIFwiKVwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gKCkgPT4geyBcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IE5ldHdvcmsgRXJyb3IuXCIpXHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJOZXR3b3JrIEVycm9yXCIpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGJvZHkgPSBcImNsaWVudF9pZD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChjbGllbnRfaWQpO1xyXG4gICAgICAgICAgICBpZiAoY2xpZW50X3NlY3JldCkge1xyXG4gICAgICAgICAgICAgICAgYm9keSArPSBcIiZjbGllbnRfc2VjcmV0PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGNsaWVudF9zZWNyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHkgKz0gXCImdG9rZW5fdHlwZV9oaW50PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHR5cGUpO1xyXG4gICAgICAgICAgICBib2R5ICs9IFwiJnRva2VuPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRva2VuKTtcclxuXHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZChib2R5KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVcmxVdGlsaXR5IHtcclxuICAgIHN0YXRpYyBhZGRRdWVyeVBhcmFtKHVybCwgbmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA8IDApIHtcclxuICAgICAgICAgICAgdXJsICs9IFwiP1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVybFt1cmwubGVuZ3RoIC0gMV0gIT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgIHVybCArPSBcIiZcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVybCArPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7XHJcbiAgICAgICAgdXJsICs9IFwiPVwiO1xyXG4gICAgICAgIHVybCArPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwYXJzZVVybEZyYWdtZW50KHZhbHVlLCBkZWxpbWl0ZXIgPSBcIiNcIiwgZ2xvYmFsID0gR2xvYmFsKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGdsb2JhbC5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGlkeCA9IHZhbHVlLmxhc3RJbmRleE9mKGRlbGltaXRlcik7XHJcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKGlkeCArIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRlbGltaXRlciA9PT0gXCI/XCIpIHtcclxuICAgICAgICAgICAgLy8gaWYgd2UncmUgZG9pbmcgcXVlcnksIHRoZW4gc3RyaXAgb2ZmIGhhc2ggZnJhZ21lbnQgYmVmb3JlIHdlIHBhcnNlXHJcbiAgICAgICAgICAgIGlkeCA9IHZhbHVlLmluZGV4T2YoJyMnKTtcclxuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCBpZHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcGFyYW1zID0ge30sXHJcbiAgICAgICAgICAgIHJlZ2V4ID0gLyhbXiY9XSspPShbXiZdKikvZyxcclxuICAgICAgICAgICAgbTtcclxuXHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHdoaWxlIChtID0gcmVnZXguZXhlYyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcGFyYW1zW2RlY29kZVVSSUNvbXBvbmVudChtWzFdKV0gPSBkZWNvZGVVUklDb21wb25lbnQobVsyXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyKysgPiA1MCkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXJsVXRpbGl0eS5wYXJzZVVybEZyYWdtZW50OiByZXNwb25zZSBleGNlZWRlZCBleHBlY3RlZCBudW1iZXIgb2YgcGFyYW1ldGVyc1wiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcIlJlc3BvbnNlIGV4Y2VlZGVkIGV4cGVjdGVkIG51bWJlciBvZiBwYXJhbWV0ZXJzXCJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgY29uc3RydWN0b3Ioe2lkX3Rva2VuLCBzZXNzaW9uX3N0YXRlLCBhY2Nlc3NfdG9rZW4sIHJlZnJlc2hfdG9rZW4sIHRva2VuX3R5cGUsIHNjb3BlLCBwcm9maWxlLCBleHBpcmVzX2F0LCBzdGF0ZX0pIHtcclxuICAgICAgICB0aGlzLmlkX3Rva2VuID0gaWRfdG9rZW47XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uX3N0YXRlID0gc2Vzc2lvbl9zdGF0ZTtcclxuICAgICAgICB0aGlzLmFjY2Vzc190b2tlbiA9IGFjY2Vzc190b2tlbjtcclxuICAgICAgICB0aGlzLnJlZnJlc2hfdG9rZW4gPSByZWZyZXNoX3Rva2VuO1xyXG4gICAgICAgIHRoaXMudG9rZW5fdHlwZSA9IHRva2VuX3R5cGU7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHRoaXMucHJvZmlsZSA9IHByb2ZpbGU7XHJcbiAgICAgICAgdGhpcy5leHBpcmVzX2F0ID0gZXhwaXJlc19hdDtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGV4cGlyZXNfaW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwaXJlc19hdCkge1xyXG4gICAgICAgICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHBpcmVzX2F0IC0gbm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4cGlyZXNfaW4odmFsdWUpIHtcclxuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgICBpZiAodHlwZW9mIGV4cGlyZXNfaW4gPT09ICdudW1iZXInICYmIGV4cGlyZXNfaW4gPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBub3cgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwaXJlc19hdCA9IG5vdyArIGV4cGlyZXNfaW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBleHBpcmVkKCkge1xyXG4gICAgICAgIGxldCBleHBpcmVzX2luID0gdGhpcy5leHBpcmVzX2luO1xyXG4gICAgICAgIGlmIChleHBpcmVzX2luICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4cGlyZXNfaW4gPD0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2NvcGVzKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zY29wZSB8fCBcIlwiKS5zcGxpdChcIiBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdG9yYWdlU3RyaW5nKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXIudG9TdG9yYWdlU3RyaW5nXCIpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGlkX3Rva2VuOiB0aGlzLmlkX3Rva2VuLFxyXG4gICAgICAgICAgICBzZXNzaW9uX3N0YXRlOiB0aGlzLnNlc3Npb25fc3RhdGUsXHJcbiAgICAgICAgICAgIGFjY2Vzc190b2tlbjogdGhpcy5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IHRoaXMucmVmcmVzaF90b2tlbixcclxuICAgICAgICAgICAgdG9rZW5fdHlwZTogdGhpcy50b2tlbl90eXBlLFxyXG4gICAgICAgICAgICBzY29wZTogdGhpcy5zY29wZSxcclxuICAgICAgICAgICAgcHJvZmlsZTogdGhpcy5wcm9maWxlLFxyXG4gICAgICAgICAgICBleHBpcmVzX2F0OiB0aGlzLmV4cGlyZXNfYXRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmFnZVN0cmluZykge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXIuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVc2VyKEpTT04ucGFyc2Uoc3RvcmFnZVN0cmluZykpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IEpzb25TZXJ2aWNlIH0gZnJvbSAnLi9Kc29uU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBKb3NlVXRpbCB9IGZyb20gJy4vSm9zZVV0aWwuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJJbmZvU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBzZXR0aW5ncywgXHJcbiAgICAgICAgSnNvblNlcnZpY2VDdG9yID0gSnNvblNlcnZpY2UsIFxyXG4gICAgICAgIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2UsIFxyXG4gICAgICAgIGpvc2VVdGlsID0gSm9zZVV0aWxcclxuICAgICkge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLmN0b3I6IE5vIHNldHRpbmdzIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0dGluZ3NcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgICAgIHRoaXMuX2pzb25TZXJ2aWNlID0gbmV3IEpzb25TZXJ2aWNlQ3Rvcih1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcy5fZ2V0Q2xhaW1zRnJvbUp3dC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fam9zZVV0aWwgPSBqb3NlVXRpbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbGFpbXModG9rZW4pIHtcclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5nZXRDbGFpbXM6IE5vIHRva2VuIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgdG9rZW4gaXMgcmVxdWlyZWRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRVc2VySW5mb0VuZHBvaW50KCkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zOiByZWNlaXZlZCB1c2VyaW5mbyB1cmxcIiwgdXJsKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uU2VydmljZS5nZXRKc29uKHVybCwgdG9rZW4pLnRoZW4oY2xhaW1zID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5nZXRDbGFpbXM6IGNsYWltcyByZWNlaXZlZFwiLCBjbGFpbXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYWltcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldENsYWltc0Zyb21Kd3QocmVxKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGp3dCA9IHRoaXMuX2pvc2VVdGlsLnBhcnNlSnd0KHJlcS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBpZiAoIWp3dCB8fCAhand0LmhlYWRlciB8fCAhand0LnBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogRmFpbGVkIHRvIHBhcnNlIEpXVFwiLCBqd3QpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBraWQgPSBqd3QuaGVhZGVyLmtpZDtcclxuXHJcbiAgICAgICAgICAgIGxldCBpc3N1ZXJQcm9taXNlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3NldHRpbmdzLnVzZXJJbmZvSnd0SXNzdWVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdPUCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVyUHJvbWlzZSA9IHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRJc3N1ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0FOWSc6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShqd3QucGF5bG9hZC5pc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpc3N1ZXJQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3NldHRpbmdzLnVzZXJJbmZvSnd0SXNzdWVyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGlzc3VlclByb21pc2UudGhlbihpc3N1ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBSZWNlaXZlZCBpc3N1ZXI6XCIgKyBpc3N1ZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0U2lnbmluZ0tleXMoKS50aGVuKGtleXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgha2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IE5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc2lnbmluZyBrZXlzIGZyb20gbWV0YWRhdGFcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBSZWNlaXZlZCBzaWduaW5nIGtleXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWtpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzID0gdGhpcy5fZmlsdGVyQnlBbGcoa2V5cywgand0LmhlYWRlci5hbGcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBObyBraWQgZm91bmQgaW4gaWRfdG9rZW4gYW5kIG1vcmUgdGhhbiBvbmUga2V5IGZvdW5kIGluIG1ldGFkYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGtpZCBmb3VuZCBpbiBpZF90b2tlbiBhbmQgbW9yZSB0aGFuIG9uZSBrZXkgZm91bmQgaW4gbWV0YWRhdGFcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2lkIGlzIG1hbmRhdG9yeSBvbmx5IHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGtleXMgaW4gdGhlIHJlZmVyZW5jZWQgSldLIFNldCBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VlIGh0dHA6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjU2lnbmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5c1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5cy5maWx0ZXIoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkua2lkID09PSBraWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBObyBrZXkgbWF0Y2hpbmcga2lkIG9yIGFsZyBmb3VuZCBpbiBzaWduaW5nIGtleXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBrZXkgbWF0Y2hpbmcga2lkIG9yIGFsZyBmb3VuZCBpbiBzaWduaW5nIGtleXNcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF1ZGllbmNlID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2xvY2tTa2V3SW5TZWNvbmRzID0gdGhpcy5fc2V0dGluZ3MuY2xvY2tTa2V3O1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogVmFsaWRhaW5nIEpXVDsgdXNpbmcgY2xvY2sgc2tldyAoaW4gc2Vjb25kcykgb2Y6IFwiLCBjbG9ja1NrZXdJblNlY29uZHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3QocmVxLnJlc3BvbnNlVGV4dCwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXdJblNlY29uZHMsIHVuZGVmaW5lZCwgdHJ1ZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogSldUIHZhbGlkYXRpb24gc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGp3dC5wYXlsb2FkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogRXJyb3IgcGFyc2luZyBKV1QgcmVzcG9uc2VcIiwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9maWx0ZXJCeUFsZyhrZXlzLCBhbGcpIHtcclxuICAgICAgICB2YXIga3R5ID0gbnVsbDtcclxuICAgICAgICBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJSU1wiKSkge1xyXG4gICAgICAgICAgICBrdHkgPSBcIlJTQVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIlBTXCIpKSB7XHJcbiAgICAgICAgICAgIGt0eSA9IFwiUFNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJFU1wiKSkge1xyXG4gICAgICAgICAgICBrdHkgPSBcIkVDXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2ZpbHRlckJ5QWxnOiBhbGcgbm90IHN1cHBvcnRlZDogXCIsIGFsZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZmlsdGVyQnlBbGc6IExvb2tpbmcgZm9yIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHkpO1xyXG5cclxuICAgICAgICBrZXlzID0ga2V5cy5maWx0ZXIoa2V5ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleS5rdHkgPT09IGt0eTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9maWx0ZXJCeUFsZzogTnVtYmVyIG9mIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHksIGtleXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBPaWRjQ2xpZW50IH0gZnJvbSAnLi9PaWRjQ2xpZW50LmpzJztcclxuaW1wb3J0IHsgVXNlck1hbmFnZXJTZXR0aW5ncyB9IGZyb20gJy4vVXNlck1hbmFnZXJTZXR0aW5ncy5qcyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL1VzZXIuanMnO1xyXG5pbXBvcnQgeyBVc2VyTWFuYWdlckV2ZW50cyB9IGZyb20gJy4vVXNlck1hbmFnZXJFdmVudHMuanMnO1xyXG5pbXBvcnQgeyBTaWxlbnRSZW5ld1NlcnZpY2UgfSBmcm9tICcuL1NpbGVudFJlbmV3U2VydmljZS5qcyc7XHJcbmltcG9ydCB7IFNlc3Npb25Nb25pdG9yIH0gZnJvbSAnLi9TZXNzaW9uTW9uaXRvci5qcyc7XHJcbmltcG9ydCB7IFRva2VuUmV2b2NhdGlvbkNsaWVudCB9IGZyb20gJy4vVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzJztcclxuaW1wb3J0IHsgVG9rZW5DbGllbnQgfSBmcm9tICcuL1Rva2VuQ2xpZW50LmpzJztcclxuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlck1hbmFnZXIgZXh0ZW5kcyBPaWRjQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzID0ge30sXHJcbiAgICAgICAgU2lsZW50UmVuZXdTZXJ2aWNlQ3RvciA9IFNpbGVudFJlbmV3U2VydmljZSxcclxuICAgICAgICBTZXNzaW9uTW9uaXRvckN0b3IgPSBTZXNzaW9uTW9uaXRvcixcclxuICAgICAgICBUb2tlblJldm9jYXRpb25DbGllbnRDdG9yID0gVG9rZW5SZXZvY2F0aW9uQ2xpZW50LFxyXG4gICAgICAgIFRva2VuQ2xpZW50Q3RvciA9IFRva2VuQ2xpZW50LFxyXG4gICAgICAgIGpvc2VVdGlsID0gSm9zZVV0aWxcclxuICAgICkge1xyXG5cclxuICAgICAgICBpZiAoIShzZXR0aW5ncyBpbnN0YW5jZW9mIFVzZXJNYW5hZ2VyU2V0dGluZ3MpKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzID0gbmV3IFVzZXJNYW5hZ2VyU2V0dGluZ3Moc2V0dGluZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihzZXR0aW5ncyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBVc2VyTWFuYWdlckV2ZW50cyhzZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdTZXJ2aWNlID0gbmV3IFNpbGVudFJlbmV3U2VydmljZUN0b3IodGhpcyk7XHJcblxyXG4gICAgICAgIC8vIG9yZGVyIGlzIGltcG9ydGFudCBmb3IgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOyB0aGVzZSBzZXJ2aWNlcyBkZXBlbmQgdXBvbiB0aGUgZXZlbnRzLlxyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9tYXRpY1NpbGVudFJlbmV3KSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLmN0b3I6IGF1dG9tYXRpY1NpbGVudFJlbmV3IGlzIGNvbmZpZ3VyZWQsIHNldHRpbmcgdXAgc2lsZW50IHJlbmV3XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2lsZW50UmVuZXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLm1vbml0b3JTZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLmN0b3I6IG1vbml0b3JTZXNzaW9uIGlzIGNvbmZpZ3VyZWQsIHNldHRpbmcgdXAgc2Vzc2lvbiBtb25pdG9yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXNzaW9uTW9uaXRvciA9IG5ldyBTZXNzaW9uTW9uaXRvckN0b3IodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl90b2tlblJldm9jYXRpb25DbGllbnQgPSBuZXcgVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3Rvcih0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fdG9rZW5DbGllbnQgPSBuZXcgVG9rZW5DbGllbnRDdG9yKHRoaXMuX3NldHRpbmdzKTtcclxuICAgICAgICB0aGlzLl9qb3NlVXRpbCA9IGpvc2VVdGlsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBfcmVkaXJlY3ROYXZpZ2F0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MucmVkaXJlY3ROYXZpZ2F0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgX3BvcHVwTmF2aWdhdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnBvcHVwTmF2aWdhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9pZnJhbWVOYXZpZ2F0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuaWZyYW1lTmF2aWdhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IF91c2VyU3RvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudXNlclN0b3JlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBldmVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkVXNlcigpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLmdldFVzZXI6IHVzZXIgbG9hZGVkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuZ2V0VXNlcjogdXNlciBub3QgZm91bmQgaW4gc3RvcmFnZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVXNlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIobnVsbCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIucmVtb3ZlVXNlcjogdXNlciByZW1vdmVkIGZyb20gc3RvcmFnZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLnVubG9hZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25pblJlZGlyZWN0KGFyZ3MgPSB7fSkge1xyXG4gICAgICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcclxuXHJcbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNpOnJcIjtcclxuICAgICAgICBsZXQgbmF2UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB1c2VSZXBsYWNlVG9OYXZpZ2F0ZSA6IGFyZ3MudXNlUmVwbGFjZVRvTmF2aWdhdGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5TdGFydChhcmdzLCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvciwgbmF2UGFyYW1zKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUmVkaXJlY3Q6IHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaWduaW5SZWRpcmVjdENhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5FbmQodXJsIHx8IHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yLnVybCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2s6IHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUmVkaXJlY3RDYWxsYmFjazogbm8gc3ViXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5Qb3B1cChhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpwXCI7XHJcbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9wdXBfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwOiBObyBwb3B1cF9yZWRpcmVjdF91cmkgb3IgcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBwb3B1cF9yZWRpcmVjdF91cmkgb3IgcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJncy5yZWRpcmVjdF91cmkgPSB1cmw7XHJcbiAgICAgICAgYXJncy5kaXNwbGF5ID0gXCJwb3B1cFwiO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluKGFyZ3MsIHRoaXMuX3BvcHVwTmF2aWdhdG9yLCB7XHJcbiAgICAgICAgICAgIHN0YXJ0VXJsOiB1cmwsXHJcbiAgICAgICAgICAgIHBvcHVwV2luZG93RmVhdHVyZXM6IGFyZ3MucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93RmVhdHVyZXMsXHJcbiAgICAgICAgICAgIHBvcHVwV2luZG93VGFyZ2V0OiBhcmdzLnBvcHVwV2luZG93VGFyZ2V0IHx8IHRoaXMuc2V0dGluZ3MucG9wdXBXaW5kb3dUYXJnZXRcclxuICAgICAgICB9KS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cDogc2lnbmluUG9wdXAgc3VjY2Vzc2Z1bCwgc2lnbmVkIGluIHN1YjogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cDogbm8gc3ViXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNpZ25pblBvcHVwQ2FsbGJhY2sodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbkNhbGxiYWNrKHVybCwgdGhpcy5fcG9wdXBOYXZpZ2F0b3IpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2s6IHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXBDYWxsYmFjazogbm8gc3ViXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXBDYWxsYmFjayBlcnJvcjogXCIgKyBlcnIgJiYgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25pblNpbGVudChhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpzXCI7XHJcbiAgICAgICAgLy8gZmlyc3QgZGV0ZXJtaW5lIGlmIHdlIGhhdmUgYSByZWZyZXNoIHRva2VuLCBvciBuZWVkIHRvIHVzZSBpZnJhbWVcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlciAmJiB1c2VyLnJlZnJlc2hfdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MucmVmcmVzaF90b2tlbiA9IHVzZXIucmVmcmVzaF90b2tlbjtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VSZWZyZXNoVG9rZW4oYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzLmlkX3Rva2VuX2hpbnQgPSBhcmdzLmlkX3Rva2VuX2hpbnQgfHwgKHRoaXMuc2V0dGluZ3MuaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3ICYmIHVzZXIgJiYgdXNlci5pZF90b2tlbik7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlciAmJiB0aGlzLl9zZXR0aW5ncy52YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQsIHN1YmplY3QgcHJpb3IgdG8gc2lsZW50IHJlbmV3OiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5jdXJyZW50X3N1YiA9IHVzZXIucHJvZmlsZS5zdWI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU2lsZW50SWZyYW1lKGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3VzZVJlZnJlc2hUb2tlbihhcmdzID0ge30pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5DbGllbnQuZXhjaGFuZ2VSZWZyZXNoVG9rZW4oYXJncykudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3VzZVJlZnJlc2hUb2tlbjogTm8gcmVzcG9uc2UgcmV0dXJuZWQgZnJvbSB0b2tlbiBlbmRwb2ludFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIk5vIHJlc3BvbnNlIHJldHVybmVkIGZyb20gdG9rZW4gZW5kcG9pbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdXNlUmVmcmVzaFRva2VuOiBObyBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQgZnJvbSB0b2tlbiBlbmRwb2ludFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIk5vIGFjY2VzcyB0b2tlbiByZXR1cm5lZCBmcm9tIHRva2VuIGVuZHBvaW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWRUb2tlblZhbGlkYXRpb24gPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkVG9rZW5WYWxpZGF0aW9uID0gdGhpcy5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuKHVzZXIucHJvZmlsZSwgcmVzdWx0LmlkX3Rva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpZFRva2VuVmFsaWRhdGlvbi50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3VzZVJlZnJlc2hUb2tlbjogcmVmcmVzaCB0b2tlbiByZXNwb25zZSBzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmlkX3Rva2VuID0gcmVzdWx0LmlkX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmFjY2Vzc190b2tlbiA9IHJlc3VsdC5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIucmVmcmVzaF90b2tlbiA9IHJlc3VsdC5yZWZyZXNoX3Rva2VuIHx8IHVzZXIucmVmcmVzaF90b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5leHBpcmVzX2luID0gcmVzdWx0LmV4cGlyZXNfaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIodXNlcikudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmxvYWQodXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbihwcm9maWxlLCBpZF90b2tlbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCkudGhlbihpc3N1ZXIgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3RBdHRyaWJ1dGVzKGlkX3Rva2VuLCBpc3N1ZXIsIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCwgdGhpcy5fc2V0dGluZ3MuY2xvY2tTa2V3KS50aGVuKHBheWxvYWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogRmFpbGVkIHRvIHZhbGlkYXRlIGlkX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdmFsaWRhdGUgaWRfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuc3ViICE9PSBwcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IHN1YiBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBjdXJyZW50IHN1YlwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic3ViIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIGN1cnJlbnQgc3ViXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmF1dGhfdGltZSAmJiBwYXlsb2FkLmF1dGhfdGltZSAhPT0gcHJvZmlsZS5hdXRoX3RpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBhdXRoX3RpbWUgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggb3JpZ2luYWwgYXV0aF90aW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhdXRoX3RpbWUgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggb3JpZ2luYWwgYXV0aF90aW1lXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmF6cCAmJiBwYXlsb2FkLmF6cCAhPT0gcHJvZmlsZS5henApIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBhenAgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggb3JpZ2luYWwgYXpwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhenAgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggb3JpZ2luYWwgYXpwXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghcGF5bG9hZC5henAgJiYgcHJvZmlsZS5henApIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBhenAgbm90IGluIGlkX3Rva2VuLCBidXQgcHJlc2VudCBpbiBvcmlnaW5hbCBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXpwIG5vdCBpbiBpZF90b2tlbiwgYnV0IHByZXNlbnQgaW4gb3JpZ2luYWwgaWRfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgX3NpZ25pblNpbGVudElmcmFtZShhcmdzID0ge30pIHtcclxuICAgICAgICBsZXQgdXJsID0gYXJncy5yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5zaWxlbnRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudDogTm8gc2lsZW50X3JlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc2lsZW50X3JlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gdXJsO1xyXG4gICAgICAgIGFyZ3MucHJvbXB0ID0gYXJncy5wcm9tcHQgfHwgXCJub25lXCI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW4oYXJncywgdGhpcy5faWZyYW1lTmF2aWdhdG9yLCB7XHJcbiAgICAgICAgICAgIHN0YXJ0VXJsOiB1cmwsXHJcbiAgICAgICAgICAgIHNpbGVudFJlcXVlc3RUaW1lb3V0OiBhcmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0IHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50UmVxdWVzdFRpbWVvdXRcclxuICAgICAgICB9KS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQ6IHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50OiBubyBzdWJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25pblNpbGVudENhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5DYWxsYmFjayh1cmwsIHRoaXMuX2lmcmFtZU5hdmlnYXRvcikudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50Q2FsbGJhY2s6IHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50Q2FsbGJhY2s6IG5vIHN1YlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbmluQ2FsbGJhY2sodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFNpZ25pblJlc3BvbnNlU3RhdGUodXJsKS50aGVuKCh7c3RhdGUsIHJlc3BvbnNlfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNpOnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmluUmVkaXJlY3RDYWxsYmFjayh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0X3R5cGUgPT09IFwic2k6cFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduaW5Qb3B1cENhbGxiYWNrKHVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YXRlLnJlcXVlc3RfdHlwZSA9PT0gXCJzaTpzXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25pblNpbGVudENhbGxiYWNrKHVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImludmFsaWQgcmVzcG9uc2VfdHlwZSBpbiBzdGF0ZVwiKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbm91dENhbGxiYWNrKHVybCwga2VlcE9wZW4pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUodXJsKS50aGVuKCh7c3RhdGUsIHJlc3BvbnNlfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0X3R5cGUgPT09IFwic286clwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnbm91dFJlZGlyZWN0Q2FsbGJhY2sodXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0X3R5cGUgPT09IFwic286cFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnbm91dFBvcHVwQ2FsbGJhY2sodXJsLCBrZWVwT3Blbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaW52YWxpZCByZXNwb25zZV90eXBlIGluIHN0YXRlXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVlcnlTZXNzaW9uU3RhdHVzKGFyZ3MgPSB7fSkge1xyXG4gICAgICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcclxuXHJcbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNpOnNcIjsgLy8gdGhpcyBhY3RzIGxpa2UgYSBzaWduaW4gc2lsZW50XHJcbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50X3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXM6IE5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IHVybDtcclxuICAgICAgICBhcmdzLnByb21wdCA9IFwibm9uZVwiO1xyXG4gICAgICAgIGFyZ3MucmVzcG9uc2VfdHlwZSA9IGFyZ3MucmVzcG9uc2VfdHlwZSB8fCB0aGlzLnNldHRpbmdzLnF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlO1xyXG4gICAgICAgIGFyZ3Muc2NvcGUgPSBhcmdzLnNjb3BlIHx8IFwib3BlbmlkXCI7XHJcbiAgICAgICAgYXJncy5za2lwVXNlckluZm8gPSB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgdGhpcy5faWZyYW1lTmF2aWdhdG9yLCB7XHJcbiAgICAgICAgICAgIHN0YXJ0VXJsOiB1cmwsXHJcbiAgICAgICAgICAgIHNpbGVudFJlcXVlc3RUaW1lb3V0OiBhcmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0IHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50UmVxdWVzdFRpbWVvdXRcclxuICAgICAgICB9KS50aGVuKG5hdlJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1NpZ25pblJlc3BvbnNlKG5hdlJlc3BvbnNlLnVybCkudGhlbihzaWduaW5SZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXM6IGdvdCBzaWduaW4gcmVzcG9uc2VcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNpZ25pblJlc3BvbnNlLnNlc3Npb25fc3RhdGUgJiYgc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1czogcXVlcnlTZXNzaW9uU3RhdHVzIHN1Y2Nlc3MgZm9yIHN1YjogXCIsICBzaWduaW5SZXNwb25zZS5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogc2lnbmluUmVzcG9uc2Uuc2Vzc2lvbl9zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViOiBzaWduaW5SZXNwb25zZS5wcm9maWxlLnN1YixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkOiBzaWduaW5SZXNwb25zZS5wcm9maWxlLnNpZFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcInF1ZXJ5U2Vzc2lvblN0YXR1cyBzdWNjZXNzZnVsLCB1c2VyIG5vdCBhdXRoZW50aWNhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIuc2Vzc2lvbl9zdGF0ZSAmJiB0aGlzLnNldHRpbmdzLm1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyci5tZXNzYWdlID09IFwibG9naW5fcmVxdWlyZWRcIiB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPT0gXCJjb25zZW50X3JlcXVpcmVkXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID09IFwiaW50ZXJhY3Rpb25fcmVxdWlyZWRcIiB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPT0gXCJhY2NvdW50X3NlbGVjdGlvbl9yZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBxdWVyeVNlc3Npb25TdGF0dXMgc3VjY2VzcyBmb3IgYW5vbnltb3VzIHVzZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlOiBlcnIuc2Vzc2lvbl9zdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zaWduaW4oYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5TdGFydChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcykudGhlbihuYXZSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5FbmQobmF2UmVzcG9uc2UudXJsLCBhcmdzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9zaWduaW5TdGFydChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XHJcblxyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IucHJlcGFyZShuYXZpZ2F0b3JQYXJhbXMpLnRoZW4oaGFuZGxlID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pblN0YXJ0OiBnb3QgbmF2aWdhdG9yIHdpbmRvdyBoYW5kbGVcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTaWduaW5SZXF1ZXN0KGFyZ3MpLnRoZW4oc2lnbmluUmVxdWVzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluU3RhcnQ6IGdvdCBzaWduaW4gcmVxdWVzdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMudXJsID0gc2lnbmluUmVxdWVzdC51cmw7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMuaWQgPSBzaWduaW5SZXF1ZXN0LnN0YXRlLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUubmF2aWdhdGUobmF2aWdhdG9yUGFyYW1zKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGUuY2xvc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluU3RhcnQ6IEVycm9yIGFmdGVyIHByZXBhcmluZyBuYXZpZ2F0b3IsIGNsb3NpbmcgbmF2aWdhdG9yIHdpbmRvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfc2lnbmluRW5kKHVybCwgYXJncyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1NpZ25pblJlc3BvbnNlKHVybCkudGhlbihzaWduaW5SZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5FbmQ6IGdvdCBzaWduaW4gcmVzcG9uc2VcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgdXNlciA9IG5ldyBVc2VyKHNpZ25pblJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhcmdzLmN1cnJlbnRfc3ViKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5jdXJyZW50X3N1YiAhPT0gdXNlci5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5FbmQ6IGN1cnJlbnQgdXNlciBkb2VzIG5vdCBtYXRjaCB1c2VyIHJldHVybmVkIGZyb20gc2lnbmluLiBzdWIgZnJvbSBzaWduaW46IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwibG9naW5fcmVxdWlyZWRcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pbkVuZDogY3VycmVudCB1c2VyIG1hdGNoZXMgdXNlciByZXR1cm5lZCBmcm9tIHNpZ25pblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVVc2VyKHVzZXIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pbkVuZDogdXNlciBzdG9yZWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmxvYWQodXNlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3NpZ25pbkNhbGxiYWNrKHVybCwgbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pbkNhbGxiYWNrXCIpO1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuY2FsbGJhY2sodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBzaWdub3V0UmVkaXJlY3QoYXJncyA9IHt9KSB7XHJcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xyXG5cclxuICAgICAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic286clwiO1xyXG4gICAgICAgIGxldCBwb3N0TG9nb3V0UmVkaXJlY3RVcmkgPSBhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcclxuICAgICAgICBpZiAocG9zdExvZ291dFJlZGlyZWN0VXJpKXtcclxuICAgICAgICAgICAgYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSBwb3N0TG9nb3V0UmVkaXJlY3RVcmk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuYXZQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHVzZVJlcGxhY2VUb05hdmlnYXRlIDogYXJncy51c2VSZXBsYWNlVG9OYXZpZ2F0ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRTdGFydChhcmdzLCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvciwgbmF2UGFyYW1zKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbm91dFJlZGlyZWN0OiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbm91dFJlZGlyZWN0Q2FsbGJhY2sodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRFbmQodXJsIHx8IHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yLnVybCkudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25vdXRSZWRpcmVjdENhbGxiYWNrOiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbm91dFBvcHVwKGFyZ3MgPSB7fSkge1xyXG4gICAgICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcclxuXHJcbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNvOnBcIjtcclxuICAgICAgICBsZXQgdXJsID0gYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSB1cmw7XHJcbiAgICAgICAgYXJncy5kaXNwbGF5ID0gXCJwb3B1cFwiO1xyXG4gICAgICAgIGlmIChhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSl7XHJcbiAgICAgICAgICAgIC8vIHdlJ3JlIHB1dHRpbmcgYSBkdW1teSBlbnRyeSBpbiBoZXJlIGJlY2F1c2Ugd2VcclxuICAgICAgICAgICAgLy8gbmVlZCBhIHVuaXF1ZSBpZCBmcm9tIHRoZSBzdGF0ZSBmb3Igbm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgIC8vIHRvIHRoZSBwYXJlbnQgd2luZG93LCB3aGljaCBpcyBuZWNlc3NhcnkgaWYgd2VcclxuICAgICAgICAgICAgLy8gcGxhbiB0byByZXR1cm4gYmFjayB0byB0aGUgY2xpZW50IGFmdGVyIHNpZ25vdXRcclxuICAgICAgICAgICAgLy8gYW5kIHNvIHdlIGNhbiBjbG9zZSB0aGUgcG9wdXAgYWZ0ZXIgc2lnbm91dFxyXG4gICAgICAgICAgICBhcmdzLnN0YXRlID0gYXJncy5zdGF0ZSB8fCB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0KGFyZ3MsIHRoaXMuX3BvcHVwTmF2aWdhdG9yLCB7XHJcbiAgICAgICAgICAgIHN0YXJ0VXJsOiB1cmwsXHJcbiAgICAgICAgICAgIHBvcHVwV2luZG93RmVhdHVyZXM6IGFyZ3MucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93RmVhdHVyZXMsXHJcbiAgICAgICAgICAgIHBvcHVwV2luZG93VGFyZ2V0OiBhcmdzLnBvcHVwV2luZG93VGFyZ2V0IHx8IHRoaXMuc2V0dGluZ3MucG9wdXBXaW5kb3dUYXJnZXRcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UG9wdXA6IHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaWdub3V0UG9wdXBDYWxsYmFjayh1cmwsIGtlZXBPcGVuKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZihrZWVwT3BlbikgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZih1cmwpID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAga2VlcE9wZW4gPSB1cmw7XHJcbiAgICAgICAgICAgIHVybCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGVsaW1pdGVyID0gJz8nO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3B1cE5hdmlnYXRvci5jYWxsYmFjayh1cmwsIGtlZXBPcGVuLCBkZWxpbWl0ZXIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25vdXRQb3B1cENhbGxiYWNrOiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zaWdub3V0KGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbm91dFN0YXJ0KGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zKS50aGVuKG5hdlJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRFbmQobmF2UmVzcG9uc2UudXJsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9zaWdub3V0U3RhcnQoYXJncyA9IHt9LCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5wcmVwYXJlKG5hdmlnYXRvclBhcmFtcykudGhlbihoYW5kbGUgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiBnb3QgbmF2aWdhdG9yIHdpbmRvdyBoYW5kbGVcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogbG9hZGVkIGN1cnJlbnQgdXNlciBmcm9tIHN0b3JhZ2VcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJldm9rZVByb21pc2UgPSB0aGlzLl9zZXR0aW5ncy5yZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCA/IHRoaXMuX3Jldm9rZUludGVybmFsKHVzZXIpIDogUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV2b2tlUHJvbWlzZS50aGVuKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkX3Rva2VuID0gYXJncy5pZF90b2tlbl9oaW50IHx8IHVzZXIgJiYgdXNlci5pZF90b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogU2V0dGluZyBpZF90b2tlbiBpbnRvIHNpZ25vdXQgcmVxdWVzdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5pZF90b2tlbl9oaW50ID0gaWRfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVVc2VyKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IHVzZXIgcmVtb3ZlZCwgY3JlYXRpbmcgc2lnbm91dCByZXF1ZXN0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2lnbm91dFJlcXVlc3QoYXJncykudGhlbihzaWdub3V0UmVxdWVzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiBnb3Qgc2lnbm91dCByZXF1ZXN0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvclBhcmFtcy51cmwgPSBzaWdub3V0UmVxdWVzdC51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2lnbm91dFJlcXVlc3Quc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMuaWQgPSBzaWdub3V0UmVxdWVzdC5zdGF0ZS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUubmF2aWdhdGUobmF2aWdhdG9yUGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGUuY2xvc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiBFcnJvciBhZnRlciBwcmVwYXJpbmcgbmF2aWdhdG9yLCBjbG9zaW5nIG5hdmlnYXRvciB3aW5kb3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3NpZ25vdXRFbmQodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1NpZ25vdXRSZXNwb25zZSh1cmwpLnRoZW4oc2lnbm91dFJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRFbmQ6IGdvdCBzaWdub3V0IHJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNpZ25vdXRSZXNwb25zZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXZva2VBY2Nlc3NUb2tlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlSW50ZXJuYWwodXNlciwgdHJ1ZSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucmV2b2tlQWNjZXNzVG9rZW46IHJlbW92aW5nIHRva2VuIHByb3BlcnRpZXMgZnJvbSB1c2VyIGFuZCByZS1zdG9yaW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1c2VyLmFjY2Vzc190b2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5yZWZyZXNoX3Rva2VuID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLmV4cGlyZXNfYXQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIudG9rZW5fdHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcih1c2VyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucmV2b2tlQWNjZXNzVG9rZW46IHVzZXIgc3RvcmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMubG9hZCh1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuOiBhY2Nlc3MgdG9rZW4gcmV2b2tlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Jldm9rZUludGVybmFsKHVzZXIsIHJlcXVpcmVkKSB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgdmFyIGFjY2Vzc190b2tlbiA9IHVzZXIuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICB2YXIgcmVmcmVzaF90b2tlbiA9IHVzZXIucmVmcmVzaF90b2tlbjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXZva2VBY2Nlc3NUb2tlbkludGVybmFsKGFjY2Vzc190b2tlbiwgcmVxdWlyZWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbihhdFN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXZva2VSZWZyZXNoVG9rZW5JbnRlcm5hbChyZWZyZXNoX3Rva2VuLCByZXF1aXJlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocnRTdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXRTdWNjZXNzICYmICFydFN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5yZXZva2VBY2Nlc3NUb2tlbjogbm8gbmVlZCB0byByZXZva2UgZHVlIHRvIG5vIHRva2VuKHMpLCBvciBKV1QgZm9ybWF0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXRTdWNjZXNzIHx8IHJ0U3VjY2VzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZXZva2VBY2Nlc3NUb2tlbkludGVybmFsKGFjY2Vzc190b2tlbiwgcmVxdWlyZWQpIHtcclxuICAgICAgICAvLyBjaGVjayBmb3IgSldUIHZzLiByZWZlcmVuY2UgdG9rZW5cclxuICAgICAgICBpZiAoIWFjY2Vzc190b2tlbiB8fCBhY2Nlc3NfdG9rZW4uaW5kZXhPZignLicpID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZShhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKS50aGVuKCgpID0+IHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZXZva2VSZWZyZXNoVG9rZW5JbnRlcm5hbChyZWZyZXNoX3Rva2VuLCByZXF1aXJlZCkge1xyXG4gICAgICAgIGlmICghcmVmcmVzaF90b2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlKHJlZnJlc2hfdG9rZW4sIHJlcXVpcmVkLCBcInJlZnJlc2hfdG9rZW5cIikudGhlbigoKSA9PiB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNpbGVudFJlbmV3KCkge1xyXG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3U2VydmljZS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BTaWxlbnRSZW5ldygpIHtcclxuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld1NlcnZpY2Uuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBfdXNlclN0b3JlS2V5KCkge1xyXG4gICAgICAgIHJldHVybiBgdXNlcjoke3RoaXMuc2V0dGluZ3MuYXV0aG9yaXR5fToke3RoaXMuc2V0dGluZ3MuY2xpZW50X2lkfWA7XHJcbiAgICB9XHJcblxyXG4gICAgX2xvYWRVc2VyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyU3RvcmUuZ2V0KHRoaXMuX3VzZXJTdG9yZUtleSkudGhlbihzdG9yYWdlU3RyaW5nID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0b3JhZ2VTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9sb2FkVXNlcjogdXNlciBzdG9yYWdlU3RyaW5nIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBVc2VyLmZyb21TdG9yYWdlU3RyaW5nKHN0b3JhZ2VTdHJpbmcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fbG9hZFVzZXI6IG5vIHVzZXIgc3RvcmFnZVN0cmluZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVVc2VyKHVzZXIpIHtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5zdG9yZVVzZXI6IHN0b3JpbmcgdXNlclwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdG9yYWdlU3RyaW5nID0gdXNlci50b1N0b3JhZ2VTdHJpbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZS5zZXQodGhpcy5fdXNlclN0b3JlS2V5LCBzdG9yYWdlU3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcInN0b3JlVXNlci5zdG9yZVVzZXI6IHJlbW92aW5nIHVzZXJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VyU3RvcmUucmVtb3ZlKHRoaXMuX3VzZXJTdG9yZUtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5FdmVudHMgfSBmcm9tICcuL0FjY2Vzc1Rva2VuRXZlbnRzLmpzJztcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuL0V2ZW50LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyTWFuYWdlckV2ZW50cyBleHRlbmRzIEFjY2Vzc1Rva2VuRXZlbnRzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xyXG4gICAgICAgIHN1cGVyKHNldHRpbmdzKTtcclxuICAgICAgICB0aGlzLl91c2VyTG9hZGVkID0gbmV3IEV2ZW50KFwiVXNlciBsb2FkZWRcIik7XHJcbiAgICAgICAgdGhpcy5fdXNlclVubG9hZGVkID0gbmV3IEV2ZW50KFwiVXNlciB1bmxvYWRlZFwiKTtcclxuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld0Vycm9yID0gbmV3IEV2ZW50KFwiU2lsZW50IHJlbmV3IGVycm9yXCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRJbiA9IG5ldyBFdmVudChcIlVzZXIgc2lnbmVkIGluXCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQgPSBuZXcgRXZlbnQoXCJVc2VyIHNpZ25lZCBvdXRcIik7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlc3Npb25DaGFuZ2VkID0gbmV3IEV2ZW50KFwiVXNlciBzZXNzaW9uIGNoYW5nZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZCh1c2VyLCByYWlzZUV2ZW50PXRydWUpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy5sb2FkXCIpO1xyXG4gICAgICAgIHN1cGVyLmxvYWQodXNlcik7XHJcbiAgICAgICAgaWYgKHJhaXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXNlckxvYWRlZC5yYWlzZSh1c2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1bmxvYWQoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMudW5sb2FkXCIpO1xyXG4gICAgICAgIHN1cGVyLnVubG9hZCgpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5yYWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFVzZXJMb2FkZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyTG9hZGVkLmFkZEhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlVXNlckxvYWRlZChjYikge1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWQucmVtb3ZlSGFuZGxlcihjYik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVXNlclVubG9hZGVkKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclVubG9hZGVkLmFkZEhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlVXNlclVubG9hZGVkKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclVubG9hZGVkLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFNpbGVudFJlbmV3RXJyb3IoY2IpIHtcclxuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld0Vycm9yLmFkZEhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlU2lsZW50UmVuZXdFcnJvcihjYikge1xyXG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3RXJyb3IucmVtb3ZlSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbiAgICBfcmFpc2VTaWxlbnRSZW5ld0Vycm9yKGUpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy5fcmFpc2VTaWxlbnRSZW5ld0Vycm9yXCIsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5yYWlzZShlKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyU2lnbmVkSW4oY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkSW4uYWRkSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbiAgICByZW1vdmVVc2VyU2lnbmVkSW4oY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkSW4ucmVtb3ZlSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbiAgICBfcmFpc2VVc2VyU2lnbmVkSW4oKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlVXNlclNpZ25lZEluXCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRJbi5yYWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFVzZXJTaWduZWRPdXQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkT3V0LmFkZEhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlVXNlclNpZ25lZE91dChjYikge1xyXG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQucmVtb3ZlSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbiAgICBfcmFpc2VVc2VyU2lnbmVkT3V0KCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTaWduZWRPdXRcIik7XHJcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZE91dC5yYWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFVzZXJTZXNzaW9uQ2hhbmdlZChjYikge1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVVzZXJTZXNzaW9uQ2hhbmdlZChjYikge1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZC5yZW1vdmVIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIF9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCgpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy5fcmFpc2VVc2VyU2Vzc2lvbkNoYW5nZWRcIik7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlc3Npb25DaGFuZ2VkLnJhaXNlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBPaWRjQ2xpZW50U2V0dGluZ3MgfSBmcm9tICcuL09pZGNDbGllbnRTZXR0aW5ncy5qcyc7XHJcbmltcG9ydCB7IFJlZGlyZWN0TmF2aWdhdG9yIH0gZnJvbSAnLi9SZWRpcmVjdE5hdmlnYXRvci5qcyc7XHJcbmltcG9ydCB7IFBvcHVwTmF2aWdhdG9yIH0gZnJvbSAnLi9Qb3B1cE5hdmlnYXRvci5qcyc7XHJcbmltcG9ydCB7IElGcmFtZU5hdmlnYXRvciB9IGZyb20gJy4vSUZyYW1lTmF2aWdhdG9yLmpzJztcclxuaW1wb3J0IHsgV2ViU3RvcmFnZVN0YXRlU3RvcmUgfSBmcm9tICcuL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlLmpzJztcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwuanMnO1xyXG5pbXBvcnQgeyBTaWduaW5SZXF1ZXN0IH0gZnJvbSAnLi9TaWduaW5SZXF1ZXN0LmpzJztcclxuXHJcbmNvbnN0IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IDYwO1xyXG5jb25zdCBEZWZhdWx0Q2hlY2tTZXNzaW9uSW50ZXJ2YWwgPSAyMDAwO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJNYW5hZ2VyU2V0dGluZ3MgZXh0ZW5kcyBPaWRjQ2xpZW50U2V0dGluZ3Mge1xyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIHBvcHVwX3JlZGlyZWN0X3VyaSxcclxuICAgICAgICBwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXHJcbiAgICAgICAgcG9wdXBXaW5kb3dGZWF0dXJlcyxcclxuICAgICAgICBwb3B1cFdpbmRvd1RhcmdldCxcclxuICAgICAgICBzaWxlbnRfcmVkaXJlY3RfdXJpLFxyXG4gICAgICAgIHNpbGVudFJlcXVlc3RUaW1lb3V0LFxyXG4gICAgICAgIGF1dG9tYXRpY1NpbGVudFJlbmV3ID0gZmFsc2UsXHJcbiAgICAgICAgdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3ID0gZmFsc2UsXHJcbiAgICAgICAgaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3ID0gdHJ1ZSxcclxuICAgICAgICBtb25pdG9yU2Vzc2lvbiA9IHRydWUsXHJcbiAgICAgICAgbW9uaXRvckFub255bW91c1Nlc3Npb24gPSBmYWxzZSxcclxuICAgICAgICBjaGVja1Nlc3Npb25JbnRlcnZhbCA9IERlZmF1bHRDaGVja1Nlc3Npb25JbnRlcnZhbCxcclxuICAgICAgICBzdG9wQ2hlY2tTZXNzaW9uT25FcnJvciA9IHRydWUsXHJcbiAgICAgICAgcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUsXHJcbiAgICAgICAgcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQgPSBmYWxzZSxcclxuICAgICAgICBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSxcclxuICAgICAgICByZWRpcmVjdE5hdmlnYXRvciA9IG5ldyBSZWRpcmVjdE5hdmlnYXRvcigpLFxyXG4gICAgICAgIHBvcHVwTmF2aWdhdG9yID0gbmV3IFBvcHVwTmF2aWdhdG9yKCksXHJcbiAgICAgICAgaWZyYW1lTmF2aWdhdG9yID0gbmV3IElGcmFtZU5hdmlnYXRvcigpLFxyXG4gICAgICAgIHVzZXJTdG9yZSA9IG5ldyBXZWJTdG9yYWdlU3RhdGVTdG9yZSh7IHN0b3JlOiBHbG9iYWwuc2Vzc2lvblN0b3JhZ2UgfSlcclxuICAgIH0gPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGFyZ3VtZW50c1swXSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3BvcHVwX3JlZGlyZWN0X3VyaSA9IHBvcHVwX3JlZGlyZWN0X3VyaTtcclxuICAgICAgICB0aGlzLl9wb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSBwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBXaW5kb3dGZWF0dXJlcyA9IHBvcHVwV2luZG93RmVhdHVyZXM7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBXaW5kb3dUYXJnZXQgPSBwb3B1cFdpbmRvd1RhcmdldDtcclxuXHJcbiAgICAgICAgdGhpcy5fc2lsZW50X3JlZGlyZWN0X3VyaSA9IHNpbGVudF9yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVxdWVzdFRpbWVvdXQgPSBzaWxlbnRSZXF1ZXN0VGltZW91dDtcclxuICAgICAgICB0aGlzLl9hdXRvbWF0aWNTaWxlbnRSZW5ldyA9IGF1dG9tYXRpY1NpbGVudFJlbmV3O1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyA9IHZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldztcclxuICAgICAgICB0aGlzLl9pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXcgPSBpbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXc7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcclxuXHJcbiAgICAgICAgdGhpcy5fbW9uaXRvclNlc3Npb24gPSBtb25pdG9yU2Vzc2lvbjtcclxuICAgICAgICB0aGlzLl9tb25pdG9yQW5vbnltb3VzU2Vzc2lvbiA9IG1vbml0b3JBbm9ueW1vdXNTZXNzaW9uO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbkludGVydmFsID0gY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XHJcbiAgICAgICAgdGhpcy5fc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IgPSBzdG9wQ2hlY2tTZXNzaW9uT25FcnJvcjtcclxuICAgICAgICBpZiAocXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUgPSBxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50c1swXSAmJiBhcmd1bWVudHNbMF0ucmVzcG9uc2VfdHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSA9IFNpZ25pblJlcXVlc3QuaXNPaWRjKGFyZ3VtZW50c1swXS5yZXNwb25zZV90eXBlKSA/IFwiaWRfdG9rZW5cIiA6IFwiY29kZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUgPSBcImlkX3Rva2VuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Jldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0ID0gcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yID0gcmVkaXJlY3ROYXZpZ2F0b3I7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBOYXZpZ2F0b3IgPSBwb3B1cE5hdmlnYXRvcjtcclxuICAgICAgICB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IgPSBpZnJhbWVOYXZpZ2F0b3I7XHJcblxyXG4gICAgICAgIHRoaXMuX3VzZXJTdG9yZSA9IHVzZXJTdG9yZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcG9wdXBfcmVkaXJlY3RfdXJpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3B1cF9yZWRpcmVjdF91cmk7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9wdXBXaW5kb3dGZWF0dXJlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBXaW5kb3dGZWF0dXJlcztcclxuICAgIH1cclxuICAgIGdldCBwb3B1cFdpbmRvd1RhcmdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBXaW5kb3dUYXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpbGVudF9yZWRpcmVjdF91cmkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbGVudF9yZWRpcmVjdF91cmk7XHJcbiAgICB9XHJcbiAgICAgZ2V0IHNpbGVudFJlcXVlc3RUaW1lb3V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWxlbnRSZXF1ZXN0VGltZW91dDtcclxuICAgIH1cclxuICAgIGdldCBhdXRvbWF0aWNTaWxlbnRSZW5ldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0b21hdGljU2lsZW50UmVuZXc7XHJcbiAgICB9XHJcbiAgICBnZXQgdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXc7XHJcbiAgICB9XHJcbiAgICBnZXQgaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXc7XHJcbiAgICB9XHJcbiAgICBnZXQgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb25pdG9yU2Vzc2lvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9uaXRvclNlc3Npb247XHJcbiAgICB9XHJcbiAgICBnZXQgbW9uaXRvckFub255bW91c1Nlc3Npb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbml0b3JBbm9ueW1vdXNTZXNzaW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNoZWNrU2Vzc2lvbkludGVydmFsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGVja1Nlc3Npb25JbnRlcnZhbDtcclxuICAgIH1cclxuICAgIGdldCBzdG9wQ2hlY2tTZXNzaW9uT25FcnJvcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9wQ2hlY2tTZXNzaW9uT25FcnJvcjtcclxuICAgIH1cclxuICAgIGdldCBxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZTtcclxuICAgIH1cclxuICAgIGdldCByZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJlZGlyZWN0TmF2aWdhdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvcjtcclxuICAgIH1cclxuICAgIGdldCBwb3B1cE5hdmlnYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBOYXZpZ2F0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgaWZyYW1lTmF2aWdhdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pZnJhbWVOYXZpZ2F0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHVzZXJTdG9yZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKHtwcmVmaXggPSBcIm9pZGMuXCIsIHN0b3JlID0gR2xvYmFsLmxvY2FsU3RvcmFnZX0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMuX3N0b3JlID0gc3RvcmU7XHJcbiAgICAgICAgdGhpcy5fcHJlZml4ID0gcHJlZml4O1xyXG4gICAgfVxyXG5cclxuICAgIHNldChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUuc2V0XCIsIGtleSk7XHJcblxyXG4gICAgICAgIGtleSA9IHRoaXMuX3ByZWZpeCArIGtleTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RvcmUuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChrZXkpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJXZWJTdG9yYWdlU3RhdGVTdG9yZS5nZXRcIiwga2V5KTtcclxuXHJcbiAgICAgICAga2V5ID0gdGhpcy5fcHJlZml4ICsga2V5O1xyXG5cclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX3N0b3JlLmdldEl0ZW0oa2V5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoa2V5KSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUucmVtb3ZlXCIsIGtleSk7XHJcblxyXG4gICAgICAgIGtleSA9IHRoaXMuX3ByZWZpeCArIGtleTtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9zdG9yZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgdGhpcy5fc3RvcmUucmVtb3ZlSXRlbShrZXkpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbEtleXMoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUuZ2V0QWxsS2V5c1wiKTtcclxuXHJcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3N0b3JlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5fc3RvcmUua2V5KGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZih0aGlzLl9wcmVmaXgpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5LnN1YnN0cih0aGlzLl9wcmVmaXgubGVuZ3RoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoa2V5cyk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuQmFzZWQgb24gdGhlIHdvcmsgb2YgQXV0aDBcclxuaHR0cHM6Ly9naXRodWIuY29tL2F1dGgwL2lkdG9rZW4tdmVyaWZpZXJcclxuaHR0cHM6Ly9naXRodWIuY29tL2F1dGgwL2lkdG9rZW4tdmVyaWZpZXIvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG5XaGljaCBpcyBiYXNlZCBvbiB0aGUgd29yayBvZiBUb20gV3VcclxuaHR0cDovL3d3dy1jcy1zdHVkZW50cy5zdGFuZm9yZC5lZHUvfnRqdy9qc2JuL1xyXG5odHRwOi8vd3d3LWNzLXN0dWRlbnRzLnN0YW5mb3JkLmVkdS9+dGp3L2pzYm4vTElDRU5TRVxyXG4qL1xyXG5cclxuLypcclxuICogVG8gc3VwcG9ydCBtb3N0IGJhc2ljIE9wZW5JZCB1c2UgY2FzZXMgKHVzaW5nIFJTQTI1NiksIHdlIGNhbiBnZXQgYXdheSB3aXRob3V0XHJcbiAqIHJlcXVpcmluZyB0aGUgZnVsbCBqcnNhc2lnbiBmZWF0dXJlIHNldCAoYW5kIHJlc3VsdGluZyBtYXNzaXZlIGJ1bmRsZSkuXHJcbiAqXHJcbiAqIC0gU3VwcG9ydCBSU0EgMjU2IGFsZ29yaXRobSAob3B0aW9uYWxseSBjb3VsZCBzdXBwb3J0IFJTQSogZmFtaWx5KVxyXG4gKiAtIFBhcnNlIEpXVCB0b2tlbnMgdXNpbmcgdGhlIChuKSBwYXJhbWV0ZXIuXHJcbiAqIC0gVmVyaWZ5IHNpZ25hdHVyZSBvZiBpZF90b2tlbnNcclxuICogLSBWZXJpZnkgYXRfaGFzaCBvZiBhY2Nlc3NfdG9rZW5zXHJcbiAqIC0gUGVyZm9ybSBjb21tb24gYmFzZTY0IGVuY29kaW5nL2RlY29kaW5nIHRhc2tzLlxyXG4gKi9cclxuXHJcbmltcG9ydCBKU0JOIGZyb20gJ2pzYm4nO1xyXG5pbXBvcnQgU0hBMjU2IGZyb20gJ2NyeXB0by1qcy9zaGEyNTYnO1xyXG5pbXBvcnQgYmFzZTY0SnMgZnJvbSAnYmFzZTY0LWpzJztcclxuXHJcbnZhciBCaWdJbnRlZ2VyID0gSlNCTi5CaWdJbnRlZ2VyO1xyXG5cclxuLyohIChjKSBUb20gV3UgfCBodHRwOi8vd3d3LWNzLXN0dWRlbnRzLnN0YW5mb3JkLmVkdS9+dGp3L2pzYm4vXHJcbiAqL1xyXG52YXIgYjY0bWFwID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XHJcbnZhciBiNjRwYWQgPSBcIj1cIjtcclxuXHJcbmNvbnN0IEJhc2U2NCA9IHtcclxuICAgIGI2NHRvaGV4KHMpIHtcclxuICAgICAgICB2YXIgcmV0ID0gXCJcIjtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICB2YXIgayA9IDA7IC8vIGI2NCBzdGF0ZSwgMC0zXHJcbiAgICAgICAgdmFyIHNsb3A7XHJcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZihzLmNoYXJBdChpKSA9PT0gYjY0cGFkKSBicmVhaztcclxuICAgICAgICAgICAgdmFyIHYgPSBiNjRtYXAuaW5kZXhPZihzLmNoYXJBdChpKSk7XHJcbiAgICAgICAgICAgIGlmKHYgPCAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYoayA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodiA+PiAyKTtcclxuICAgICAgICAgICAgICAgIHNsb3AgPSB2ICYgMztcclxuICAgICAgICAgICAgICAgIGsgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoayA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHNsb3AgPDwgMikgfCAodiA+PiA0KSk7XHJcbiAgICAgICAgICAgICAgICBzbG9wID0gdiAmIDB4ZjtcclxuICAgICAgICAgICAgICAgIGsgPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoayA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoc2xvcCk7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh2ID4+IDIpO1xyXG4gICAgICAgICAgICAgICAgc2xvcCA9IHYgJiAzO1xyXG4gICAgICAgICAgICAgICAgayA9IDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoc2xvcCA8PCAyKSB8ICh2ID4+IDQpKTtcclxuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHYgJiAweGYpO1xyXG4gICAgICAgICAgICAgICAgayA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoayA9PT0gMSlcclxuICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoc2xvcCA8PCAyKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfSxcclxuICAgIGhleFRvQmFzZTY0KGgpIHtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICB2YXIgYztcclxuICAgICAgICB2YXIgcmV0ID0gXCJcIjtcclxuICAgICAgICBmb3IoaSA9IDA7IGkrMyA8PSBoLmxlbmd0aDsgaSs9Mykge1xyXG4gICAgICAgICAgICBjID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSxpKzMpLDE2KTtcclxuICAgICAgICAgICAgcmV0ICs9IGI2NG1hcC5jaGFyQXQoYyA+PiA2KSArIGI2NG1hcC5jaGFyQXQoYyAmIDYzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaSsxID09PSBoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSxpKzEpLDE2KTtcclxuICAgICAgICAgICAgcmV0ICs9IGI2NG1hcC5jaGFyQXQoYyA8PCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpKzIgPT09IGgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGMgPSBwYXJzZUludChoLnN1YnN0cmluZyhpLGkrMiksMTYpO1xyXG4gICAgICAgICAgICByZXQgKz0gYjY0bWFwLmNoYXJBdChjID4+IDIpICsgYjY0bWFwLmNoYXJBdCgoYyAmIDMpIDw8IDQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYjY0cGFkKSB3aGlsZSgocmV0Lmxlbmd0aCAmIDMpID4gMCkgcmV0ICs9IGI2NHBhZDtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfSxcclxuXHJcbiAgICBwYWRkaW5nKHN0cikge1xyXG4gICAgICAgIHZhciBtb2QgPSAoc3RyLmxlbmd0aCAlIDQpO1xyXG4gICAgICAgIHZhciBwYWQgPSA0IC0gbW9kO1xyXG5cclxuICAgICAgICBpZiAobW9kID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RyICsgKG5ldyBBcnJheSgxICsgcGFkKSkuam9pbignPScpO1xyXG4gICAgfSxcclxuXHJcbiAgICBieXRlQXJyYXlUb0hleChyYXcpIHtcclxuICAgICAgICB2YXIgSEVYID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBfaGV4ID0gcmF3W2ldLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgSEVYICs9IChfaGV4Lmxlbmd0aCA9PT0gMiA/IF9oZXggOiAnMCcgKyBfaGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBIRVg7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlY29kZVRvSEVYKHN0cikge1xyXG4gICAgICAgIHJldHVybiBCYXNlNjQuYnl0ZUFycmF5VG9IZXgoYmFzZTY0SnMudG9CeXRlQXJyYXkoQmFzZTY0LnBhZGRpbmcoc3RyKSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBiYXNlNjRUb0Jhc2U2NFVybChzKSB7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvPS9nLCBcIlwiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC9cXCsvZywgXCItXCIpO1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoL1xcLy9nLCBcIl9cIik7XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9LFxyXG5cclxuICAgIHVybERlY29kZShzdHIpIHtcclxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvLS9nLCAnKycpIC8vIENvbnZlcnQgJy0nIHRvICcrJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvXy9nLCAnLycpIC8vIENvbnZlcnQgJ18nIHRvICcvJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzL2csICcgJyk7IC8vIENvbnZlcnQgJ1xccycgdG8gJyAnXHJcblxyXG4gICAgICAgIHJldHVybiBhdG9iKHN0cik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxudmFyIERpZ2VzdEluZm9IZWFkID0ge1xyXG4gICAgc2hhMTogJzMwMjEzMDA5MDYwNTJiMGUwMzAyMWEwNTAwMDQxNCcsXHJcbiAgICBzaGEyMjQ6ICczMDJkMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDQwNTAwMDQxYycsXHJcbiAgICBzaGEyNTY6ICczMDMxMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDEwNTAwMDQyMCcsXHJcbiAgICBzaGEzODQ6ICczMDQxMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDIwNTAwMDQzMCcsXHJcbiAgICBzaGE1MTI6ICczMDUxMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDMwNTAwMDQ0MCcsXHJcbiAgICBtZDI6ICczMDIwMzAwYzA2MDgyYTg2NDg4NmY3MGQwMjAyMDUwMDA0MTAnLFxyXG4gICAgbWQ1OiAnMzAyMDMwMGMwNjA4MmE4NjQ4ODZmNzBkMDIwNTA1MDAwNDEwJyxcclxuICAgIHJpcGVtZDE2MDogJzMwMjEzMDA5MDYwNTJiMjQwMzAyMDEwNTAwMDQxNCdcclxufTtcclxuXHJcbnZhciBEaWdlc3RBbGdzID0ge1xyXG4gICAgc2hhMjU2OiBTSEEyNTYsXHJcbiAgICBTSEEyNTY6U0hBMjU2XHJcbn07XHJcblxyXG5mdW5jdGlvbiBSU0FWZXJpZmllcihtb2R1bHVzLCBleHApIHtcclxuICAgIHRoaXMubiA9IG51bGw7XHJcbiAgICB0aGlzLmUgPSAwO1xyXG5cclxuICAgIGlmIChtb2R1bHVzICE9IG51bGwgJiYgZXhwICE9IG51bGwgJiYgbW9kdWx1cy5sZW5ndGggPiAwICYmIGV4cC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5uID0gbmV3IEJpZ0ludGVnZXIobW9kdWx1cywgMTYpO1xyXG4gICAgICAgIHRoaXMuZSA9IHBhcnNlSW50KGV4cCwgMTYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQga2V5IGRhdGEnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QWxnb3JpdGhtRnJvbURpZ2VzdChoRGlnZXN0SW5mbykge1xyXG4gICAgZm9yICh2YXIgYWxnTmFtZSBpbiBEaWdlc3RJbmZvSGVhZCkge1xyXG4gICAgICAgIHZhciBoZWFkID0gRGlnZXN0SW5mb0hlYWRbYWxnTmFtZV07XHJcbiAgICAgICAgdmFyIGxlbiA9IGhlYWQubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAoaERpZ2VzdEluZm8uc3Vic3RyaW5nKDAsIGxlbikgPT09IGhlYWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFsZzogYWxnTmFtZSxcclxuICAgICAgICAgICAgICAgIGhhc2g6IGhEaWdlc3RJbmZvLnN1YnN0cmluZyhsZW4pXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59XHJcblxyXG5cclxuUlNBVmVyaWZpZXIucHJvdG90eXBlLnZlcmlmeSA9IGZ1bmN0aW9uIChtc2csIGVuY3NpZykge1xyXG4gICAgZW5jc2lnID0gQmFzZTY0LmRlY29kZVRvSEVYKGVuY3NpZyk7XHJcbiAgICBlbmNzaWcgPSBlbmNzaWcucmVwbGFjZSgvW14wLTlhLWZdfFtcXHNcXG5dXS9pZywgJycpO1xyXG5cclxuICAgIHZhciBzaWcgPSBuZXcgQmlnSW50ZWdlcihlbmNzaWcsIDE2KTtcclxuXHJcbiAgICBpZiAoc2lnLmJpdExlbmd0aCgpID4gdGhpcy5uLmJpdExlbmd0aCgpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaWduYXR1cmUgZG9lcyBub3QgbWF0Y2ggd2l0aCB0aGUga2V5IG1vZHVsdXMuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRlY3J5cHRlZFNpZyA9IHNpZy5tb2RQb3dJbnQodGhpcy5lLCB0aGlzLm4pO1xyXG4gICAgdmFyIGRpZ2VzdCA9IGRlY3J5cHRlZFNpZy50b1N0cmluZygxNikucmVwbGFjZSgvXjFmKzAwLywgJycpO1xyXG4gICAgdmFyIGRpZ2VzdEluZm8gPSBnZXRBbGdvcml0aG1Gcm9tRGlnZXN0KGRpZ2VzdCk7XHJcblxyXG4gICAgaWYgKGRpZ2VzdEluZm8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghRGlnZXN0QWxncy5oYXNPd25Qcm9wZXJ0eShkaWdlc3RJbmZvLmFsZykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhc2hpbmcgYWxnb3JpdGhtIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1zZ0hhc2ggPSBEaWdlc3RBbGdzW2RpZ2VzdEluZm8uYWxnXShtc2cpLnRvU3RyaW5nKCk7XHJcbiAgICByZXR1cm4gKGRpZ2VzdEluZm8uaGFzaCA9PT0gbXNnSGFzaCk7XHJcbn07XHJcblxyXG5jb25zdCBBbGxvd2VkU2lnbmluZ0FsZ3MgPSBbJ1JTMjU2J107XHJcblxyXG5jb25zdCBqd3MgPSB7XHJcbiAgICBKV1M6IHtcclxuICAgICAgICBwYXJzZTogZnVuY3Rpb24odG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gdG9rZW4uc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgdmFyIGhlYWRlcjtcclxuICAgICAgICAgICAgdmFyIHBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIGRpdmVyZ2VzIGZyb20gQXV0aDAncyBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggdGhyb3dzIHJhdGhlciB0aGFuXHJcbiAgICAgICAgICAgIC8vIHJldHVybmluZyB1bmRlZmluZWRcclxuICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGhlYWRlciA9IEpTT04ucGFyc2UoQmFzZTY0LnVybERlY29kZShwYXJ0c1swXSkpO1xyXG4gICAgICAgICAgICAgICAgcGF5bG9hZCA9IEpTT04ucGFyc2UoQmFzZTY0LnVybERlY29kZShwYXJ0c1sxXSkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdUb2tlbiBoZWFkZXIgb3IgcGF5bG9hZCBpcyBub3QgdmFsaWQgSlNPTicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyT2JqOiBoZWFkZXIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkT2JqOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmVyaWZ5OiBmdW5jdGlvbihqd3QsIGtleSwgYWxsb3dlZFNpZ25pbmdBbGdzID0gW10pIHtcclxuICAgICAgICAgICAgYWxsb3dlZFNpZ25pbmdBbGdzLmZvckVhY2goKGFsZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFsbG93ZWRTaWduaW5nQWxncy5pbmRleE9mKGFsZykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNpZ25pbmcgYWxnb3JpdGhtOiAnICsgYWxnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciB2ZXJpZnkgPSBuZXcgUlNBVmVyaWZpZXIoa2V5Lm4sIGtleS5lKTtcclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gand0LnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaGVhZGVyQW5kUGF5bG9hZCA9IFtwYXJ0c1swXSwgcGFydHNbMV1dLmpvaW4oJy4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmeS52ZXJpZnkoaGVhZGVyQW5kUGF5bG9hZCwgcGFydHNbMl0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgS2V5VXRpbCA9IHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBkZWNvZGVkIGtleXMgaW4gSGV4IGZvcm1hdCBmb3IgdXNlIGluIGNyeXB0byBmdW5jdGlvbnMuXHJcbiAgICAgKiBTdXBwb3J0cyBtb2R1bHVzL2V4cG9uZW50LXN0eWxlIGtleXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGtleSB0aGUgc2VjdXJpdHkga2V5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBnZXRLZXkoa2V5KSB7XHJcbiAgICAgICAgaWYgKGtleS5rdHkgPT09ICdSU0EnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlOiBCYXNlNjQuZGVjb2RlVG9IRVgoa2V5LmUpLFxyXG4gICAgICAgICAgICAgICAgbjogQmFzZTY0LmRlY29kZVRvSEVYKGtleS5uKSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IFg1MDkgPSB7XHJcbiAgICBnZXRQdWJsaWNLZXlGcm9tQ2VydFBFTTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQuIFVzZSB0aGUgZnVsbCBvaWRjLWNsaWVudCBsaWJyYXJ5IGlmIHlvdSBuZWVkIHN1cHBvcnQgZm9yIFg1MDkuJyk7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgY3J5cHRvID0ge1xyXG4gICAgVXRpbDoge1xyXG4gICAgICAgIGhhc2hTdHJpbmc6IGZ1bmN0aW9uKHZhbHVlLCBhbGcpIHtcclxuICAgICAgICAgICAgdmFyIGhhc2hGdW5jID0gRGlnZXN0QWxnc1thbGddO1xyXG4gICAgICAgICAgICByZXR1cm4gaGFzaEZ1bmModmFsdWUpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGhleHRvYjY0dShzKSB7XHJcbiAgICBpZiAocy5sZW5ndGggJSAyID09PSAxKSB7XHJcbiAgICAgICAgcyA9ICcwJyArIHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQmFzZTY0LmJhc2U2NFRvQmFzZTY0VXJsKEJhc2U2NC5oZXhUb0Jhc2U2NChzKSk7XHJcbn1cclxuXHJcbmNvbnN0IHtiNjR0b2hleH0gPSBCYXNlNjQ7XHJcblxyXG5leHBvcnQge1xyXG4gICAgandzLFxyXG4gICAgS2V5VXRpbCxcclxuICAgIFg1MDksXHJcbiAgICBjcnlwdG8sXHJcbiAgICBoZXh0b2I2NHUsXHJcbiAgICBiNjR0b2hleCxcclxuICAgIEFsbG93ZWRTaWduaW5nQWxnc1xyXG59O1xyXG4iLCIvKipcclxuICogR2VuZXJhdGVzIFJGQzQxMjIgdmVyc2lvbiA0IGd1aWQgKClcclxuICovXHJcblxyXG52YXIgY3J5cHRvID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/ICh3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0bykgOiBudWxsO1xyXG5cclxuZnVuY3Rpb24gX2NyeXB0b1V1aWR2NCgpIHtcclxuICByZXR1cm4gKFsxZTddKy0xZTMrLTRlMystOGUzKy0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+XHJcbiAgICAoYyBeIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgMTUgPj4gYyAvIDQpLnRvU3RyaW5nKDE2KVxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gX3V1aWR2NCgpIHtcclxuICAgIHJldHVybiAoWzFlN10rLTFlMystNGUzKy04ZTMrLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIGMgPT5cclxuICAgIChjIF4gTWF0aC5yYW5kb20oKSAqIDE2ID4+IGMgLyA0KS50b1N0cmluZygxNilcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmRvbSgpIHtcclxuICB2YXIgaGFzQ3J5cHRvID0gY3J5cHRvICE9ICd1bmRlZmluZWQnICYmIGNyeXB0byAhPT0gbnVsbDtcclxuICB2YXIgaGFzUmFuZG9tVmFsdWVzID0gaGFzQ3J5cHRvICYmICh0eXBlb2YoY3J5cHRvLmdldFJhbmRvbVZhbHVlcykgIT0gJ3VuZGVmaW5lZCcpOyAgXHJcbiAgdmFyIHV1aWQgPSBoYXNSYW5kb21WYWx1ZXMgPyBfY3J5cHRvVXVpZHY0IDogX3V1aWR2NDtcclxuICByZXR1cm4gdXVpZCgpLnJlcGxhY2UoLy0vZywgJycpO1xyXG59XHJcbiIsImNvbnN0IFZlcnNpb24gPSBcIjEuMTEuMC1iZXRhLjFcIjsgZXhwb3J0IHtWZXJzaW9ufTsiXSwic291cmNlUm9vdCI6IiJ9
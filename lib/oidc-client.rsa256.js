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
        console.log('Received message from child: origin = ' + e.origin + ', data = ' + e.data);
        console.log('Must have: origin == ' + this._origin + ', source is the same and data not falsey');
        console.log('Source is same: ' + e.source === this._frame.contentWindow);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNibi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWNjZXNzVG9rZW5FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoZWNrU2Vzc2lvbklGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZG92YUlGcmFtZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZG92YVBvcHVwTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9Db3Jkb3ZhUG9wdXBXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9yUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lGcmFtZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUZyYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9Jbk1lbW9yeVdlYlN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pvc2VVdGlsSW1wbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSm9zZVV0aWxSc2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pzb25TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Mb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01ldGFkYXRhU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2lkY0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2lkY0NsaWVudFNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9Qb3B1cE5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlZGlyZWN0TmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNwb25zZVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2Vzc2lvbk1vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWduaW5TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbm91dFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25vdXRSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lsZW50UmVuZXdTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rva2VuQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2tlblJldm9jYXRpb25DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VybFV0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJJbmZvU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJNYW5hZ2VyRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyTWFuYWdlclNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3J5cHRvL3JzYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZG9tLmpzIiwid2VicGFjazovLy8uL3ZlcnNpb24uanMiXSwibmFtZXMiOlsiVmVyc2lvbiIsIkxvZyIsIk9pZGNDbGllbnQiLCJPaWRjQ2xpZW50U2V0dGluZ3MiLCJXZWJTdG9yYWdlU3RhdGVTdG9yZSIsIkluTWVtb3J5V2ViU3RvcmFnZSIsIlVzZXJNYW5hZ2VyIiwiQWNjZXNzVG9rZW5FdmVudHMiLCJNZXRhZGF0YVNlcnZpY2UiLCJDb3Jkb3ZhUG9wdXBOYXZpZ2F0b3IiLCJDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yIiwiQ2hlY2tTZXNzaW9uSUZyYW1lIiwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50IiwiU2Vzc2lvbk1vbml0b3IiLCJHbG9iYWwiLCJVc2VyIiwiRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUiLCJhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXIiLCJUaW1lciIsImFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyIiwiX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiX2FjY2Vzc1Rva2VuRXhwaXJpbmciLCJfYWNjZXNzVG9rZW5FeHBpcmVkIiwibG9hZCIsImNvbnRhaW5lciIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNfaW4iLCJ1bmRlZmluZWQiLCJkdXJhdGlvbiIsImRlYnVnIiwiZXhwaXJpbmciLCJpbml0IiwiY2FuY2VsIiwiZXhwaXJlZCIsInVubG9hZCIsImFkZEFjY2Vzc1Rva2VuRXhwaXJpbmciLCJjYiIsImFkZEhhbmRsZXIiLCJyZW1vdmVBY2Nlc3NUb2tlbkV4cGlyaW5nIiwicmVtb3ZlSGFuZGxlciIsImFkZEFjY2Vzc1Rva2VuRXhwaXJlZCIsInJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJlZCIsIkRlZmF1bHRJbnRlcnZhbCIsImNhbGxiYWNrIiwiY2xpZW50X2lkIiwidXJsIiwiaW50ZXJ2YWwiLCJzdG9wT25FcnJvciIsIl9jYWxsYmFjayIsIl9jbGllbnRfaWQiLCJfdXJsIiwiX2ludGVydmFsIiwiX3N0b3BPbkVycm9yIiwiaWR4IiwiaW5kZXhPZiIsIl9mcmFtZV9vcmlnaW4iLCJzdWJzdHIiLCJfZnJhbWUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsIlByb21pc2UiLCJyZXNvbHZlIiwib25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiX2JvdW5kTWVzc2FnZUV2ZW50IiwiX21lc3NhZ2UiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJvcmlnaW4iLCJzb3VyY2UiLCJjb250ZW50V2luZG93IiwiZGF0YSIsImVycm9yIiwic3RvcCIsInN0YXJ0Iiwic2Vzc2lvbl9zdGF0ZSIsIl9zZXNzaW9uX3N0YXRlIiwic2VuZCIsInBvc3RNZXNzYWdlIiwiX3RpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicHJlcGFyZSIsInBhcmFtcyIsInBvcHVwV2luZG93RmVhdHVyZXMiLCJwb3B1cCIsIkNvcmRvdmFQb3B1cFdpbmRvdyIsIkRlZmF1bHRQb3B1cEZlYXR1cmVzIiwiRGVmYXVsdFBvcHVwVGFyZ2V0IiwiX3Byb21pc2UiLCJyZWplY3QiLCJfcmVzb2x2ZSIsIl9yZWplY3QiLCJmZWF0dXJlcyIsInRhcmdldCIsInBvcHVwV2luZG93VGFyZ2V0IiwicmVkaXJlY3RfdXJpIiwic3RhcnRVcmwiLCJfaXNJbkFwcEJyb3dzZXJJbnN0YWxsZWQiLCJjb3Jkb3ZhTWV0YWRhdGEiLCJzb21lIiwibmFtZSIsImhhc093blByb3BlcnR5IiwibmF2aWdhdGUiLCJfZXJyb3IiLCJjb3Jkb3ZhIiwicmVxdWlyZSIsIm1ldGFkYXRhIiwiX3BvcHVwIiwiSW5BcHBCcm93c2VyIiwib3BlbiIsIl9leGl0Q2FsbGJhY2tFdmVudCIsIl9leGl0Q2FsbGJhY2siLCJfbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCIsIl9sb2FkU3RhcnRDYWxsYmFjayIsInByb21pc2UiLCJldmVudCIsIl9zdWNjZXNzIiwibWVzc2FnZSIsIl9jbGVhbnVwIiwiRXJyb3IiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJFcnJvclJlc3BvbnNlIiwiZXJyb3JfZGVzY3JpcHRpb24iLCJlcnJvcl91cmkiLCJzdGF0ZSIsIkV2ZW50IiwiX25hbWUiLCJfY2FsbGJhY2tzIiwicHVzaCIsImZpbmRJbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJyYWlzZSIsImkiLCJsZW5ndGgiLCJ0aW1lciIsImhhbmRsZSIsInRlc3RpbmciLCJyZXF1ZXN0IiwiX3Rlc3RpbmciLCJzZXRYTUxIdHRwUmVxdWVzdCIsIm5ld1JlcXVlc3QiLCJsb2NhdGlvbiIsImxvY2FsU3RvcmFnZSIsInNlc3Npb25TdG9yYWdlIiwiWE1MSHR0cFJlcXVlc3QiLCJJRnJhbWVOYXZpZ2F0b3IiLCJmcmFtZSIsIklGcmFtZVdpbmRvdyIsIm5vdGlmeVBhcmVudCIsIkRlZmF1bHRUaW1lb3V0IiwidGltZW91dCIsInNpbGVudFJlcXVlc3RUaW1lb3V0Iiwic2V0VGltZW91dCIsIl90aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwiX29yaWdpbiIsImhyZWYiLCJwcm90b2NvbCIsImhvc3QiLCJwYXJlbnQiLCJfZGF0YSIsImdldEl0ZW0iLCJrZXkiLCJzZXRJdGVtIiwidmFsdWUiLCJyZW1vdmVJdGVtIiwiaW5kZXgiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZ2V0Sm9zZVV0aWwiLCJqd3MiLCJLZXlVdGlsIiwiWDUwOSIsImNyeXB0byIsImhleHRvYjY0dSIsImI2NHRvaGV4IiwiQWxsb3dlZFNpZ25pbmdBbGdzIiwicGFyc2VKd3QiLCJqd3QiLCJ0b2tlbiIsIkpXUyIsInBhcnNlIiwiaGVhZGVyIiwiaGVhZGVyT2JqIiwicGF5bG9hZCIsInBheWxvYWRPYmoiLCJ2YWxpZGF0ZUp3dCIsImlzc3VlciIsImF1ZGllbmNlIiwiY2xvY2tTa2V3Iiwibm93IiwidGltZUluc2Vuc2l0aXZlIiwia3R5IiwibiIsImdldEtleSIsIng1YyIsImhleCIsImdldFB1YmxpY0tleUZyb21DZXJ0SGV4IiwiY3J2IiwieCIsInkiLCJKb3NlVXRpbCIsIl92YWxpZGF0ZUp3dCIsInZhbGlkYXRlSnd0QXR0cmlidXRlcyIsInBhcnNlSW50IiwiRGF0ZSIsImlzcyIsImF1ZCIsInZhbGlkQXVkaWVuY2UiLCJBcnJheSIsImlzQXJyYXkiLCJhenAiLCJsb3dlck5vdyIsInVwcGVyTm93IiwiaWF0IiwibmJmIiwiZXhwIiwidGhlbiIsInZlcmlmeSIsImhhc2hTdHJpbmciLCJhbGciLCJVdGlsIiwiaGV4VG9CYXNlNjRVcmwiLCJKc29uU2VydmljZSIsImFkZGl0aW9uYWxDb250ZW50VHlwZXMiLCJYTUxIdHRwUmVxdWVzdEN0b3IiLCJqd3RIYW5kbGVyIiwiX2NvbnRlbnRUeXBlcyIsInNsaWNlIiwiX1hNTEh0dHBSZXF1ZXN0IiwiX2p3dEhhbmRsZXIiLCJnZXRKc29uIiwicmVxIiwiYWxsb3dlZENvbnRlbnRUeXBlcyIsInN0YXR1cyIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJmb3VuZCIsImZpbmQiLCJzdGFydHNXaXRoIiwiSlNPTiIsInJlc3BvbnNlVGV4dCIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwic2V0UmVxdWVzdEhlYWRlciIsInBvc3RGb3JtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwibm9wTG9nZ2VyIiwiaW5mbyIsIndhcm4iLCJOT05FIiwiRVJST1IiLCJXQVJOIiwiSU5GTyIsIkRFQlVHIiwibG9nZ2VyIiwibGV2ZWwiLCJyZXNldCIsImFyZ3MiLCJhcHBseSIsImZyb20iLCJPaWRjTWV0YWRhdGFVcmxQYXRoIiwic2V0dGluZ3MiLCJKc29uU2VydmljZUN0b3IiLCJfc2V0dGluZ3MiLCJfanNvblNlcnZpY2UiLCJnZXRNZXRhZGF0YSIsIm1ldGFkYXRhVXJsIiwiZ2V0SXNzdWVyIiwiX2dldE1ldGFkYXRhUHJvcGVydHkiLCJnZXRBdXRob3JpemF0aW9uRW5kcG9pbnQiLCJnZXRVc2VySW5mb0VuZHBvaW50IiwiZ2V0VG9rZW5FbmRwb2ludCIsIm9wdGlvbmFsIiwiZ2V0Q2hlY2tTZXNzaW9uSWZyYW1lIiwiZ2V0RW5kU2Vzc2lvbkVuZHBvaW50IiwiZ2V0UmV2b2NhdGlvbkVuZHBvaW50IiwiZ2V0S2V5c0VuZHBvaW50IiwiZ2V0U2lnbmluZ0tleXMiLCJzaWduaW5nS2V5cyIsImp3a3NfdXJpIiwia2V5U2V0Iiwia2V5cyIsIl9tZXRhZGF0YVVybCIsImF1dGhvcml0eSIsImNyZWF0ZVNpZ25pblJlcXVlc3QiLCJyZXNwb25zZV90eXBlIiwic2NvcGUiLCJwcm9tcHQiLCJtYXhfYWdlIiwidWlfbG9jYWxlcyIsImlkX3Rva2VuX2hpbnQiLCJsb2dpbl9oaW50IiwiYWNyX3ZhbHVlcyIsInJlc291cmNlIiwicmVxdWVzdF91cmkiLCJyZXNwb25zZV9tb2RlIiwiZXh0cmFRdWVyeVBhcmFtcyIsImV4dHJhVG9rZW5QYXJhbXMiLCJyZXF1ZXN0X3R5cGUiLCJza2lwVXNlckluZm8iLCJzdGF0ZVN0b3JlIiwiU2lnbmluUmVxdWVzdCIsImlzQ29kZSIsIl9tZXRhZGF0YVNlcnZpY2UiLCJzaWduaW5SZXF1ZXN0IiwiY2xpZW50X3NlY3JldCIsInNpZ25pblN0YXRlIiwiX3N0YXRlU3RvcmUiLCJzZXQiLCJpZCIsInRvU3RvcmFnZVN0cmluZyIsInJlYWRTaWduaW5SZXNwb25zZVN0YXRlIiwicmVtb3ZlU3RhdGUiLCJ1c2VRdWVyeSIsImRlbGltaXRlciIsInJlc3BvbnNlIiwiU2lnbmluUmVzcG9uc2UiLCJzdGF0ZUFwaSIsInJlbW92ZSIsImdldCIsInN0b3JlZFN0YXRlU3RyaW5nIiwiU2lnbmluU3RhdGUiLCJmcm9tU3RvcmFnZVN0cmluZyIsInByb2Nlc3NTaWduaW5SZXNwb25zZSIsIl92YWxpZGF0b3IiLCJ2YWxpZGF0ZVNpZ25pblJlc3BvbnNlIiwiY3JlYXRlU2lnbm91dFJlcXVlc3QiLCJwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJTaWdub3V0UmVxdWVzdCIsInNpZ25vdXRTdGF0ZSIsInJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSIsIlNpZ25vdXRSZXNwb25zZSIsInN0YXRlS2V5IiwiU3RhdGUiLCJwcm9jZXNzU2lnbm91dFJlc3BvbnNlIiwidmFsaWRhdGVTaWdub3V0UmVzcG9uc2UiLCJjbGVhclN0YWxlU3RhdGUiLCJzdGFsZVN0YXRlQWdlIiwidmFsaWRhdG9yIiwibWV0YWRhdGFTZXJ2aWNlIiwiRGVmYXVsdFJlc3BvbnNlVHlwZSIsIkRlZmF1bHRTY29wZSIsIkRlZmF1bHRTdGFsZVN0YXRlQWdlIiwiRGVmYXVsdENsb2NrU2tld0luU2Vjb25kcyIsImZpbHRlclByb3RvY29sQ2xhaW1zIiwibG9hZFVzZXJJbmZvIiwidXNlckluZm9Kd3RJc3N1ZXIiLCJSZXNwb25zZVZhbGlkYXRvckN0b3IiLCJSZXNwb25zZVZhbGlkYXRvciIsIk1ldGFkYXRhU2VydmljZUN0b3IiLCJfYXV0aG9yaXR5IiwiX21ldGFkYXRhIiwiX3NpZ25pbmdLZXlzIiwiX2NsaWVudF9zZWNyZXQiLCJfcmVzcG9uc2VfdHlwZSIsIl9zY29wZSIsIl9yZWRpcmVjdF91cmkiLCJfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiX3Byb21wdCIsIl9kaXNwbGF5IiwiX21heF9hZ2UiLCJfdWlfbG9jYWxlcyIsIl9hY3JfdmFsdWVzIiwiX3Jlc291cmNlIiwiX3Jlc3BvbnNlX21vZGUiLCJfZmlsdGVyUHJvdG9jb2xDbGFpbXMiLCJfbG9hZFVzZXJJbmZvIiwiX3N0YWxlU3RhdGVBZ2UiLCJfY2xvY2tTa2V3IiwiX3VzZXJJbmZvSnd0SXNzdWVyIiwiX2V4dHJhUXVlcnlQYXJhbXMiLCJfZXh0cmFUb2tlblBhcmFtcyIsIlBvcHVwTmF2aWdhdG9yIiwiUG9wdXBXaW5kb3ciLCJrZWVwT3BlbiIsIm5vdGlmeU9wZW5lciIsIkNoZWNrRm9yUG9wdXBDbG9zZWRJbnRlcnZhbCIsIl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIiLCJfY2hlY2tGb3JQb3B1cENsb3NlZCIsIl9pZCIsImZvY3VzIiwiY2xvc2VkIiwib3BlbmVyIiwiVXJsVXRpbGl0eSIsInBhcnNlVXJsRnJhZ21lbnQiLCJSZWRpcmVjdE5hdmlnYXRvciIsInVzZVJlcGxhY2VUb05hdmlnYXRlIiwicmVwbGFjZSIsIlByb3RvY29sQ2xhaW1zIiwiVXNlckluZm9TZXJ2aWNlQ3RvciIsIlVzZXJJbmZvU2VydmljZSIsImpvc2VVdGlsIiwiVG9rZW5DbGllbnRDdG9yIiwiVG9rZW5DbGllbnQiLCJfdXNlckluZm9TZXJ2aWNlIiwiX2pvc2VVdGlsIiwiX3Rva2VuQ2xpZW50IiwiX3Byb2Nlc3NTaWduaW5QYXJhbXMiLCJfdmFsaWRhdGVUb2tlbnMiLCJfcHJvY2Vzc0NsYWltcyIsIm5vbmNlIiwiaWRfdG9rZW4iLCJjb2RlX3ZlcmlmaWVyIiwiY29kZSIsImlzT3BlbklkQ29ubmVjdCIsInByb2ZpbGUiLCJnZXRDbGFpbXMiLCJjbGFpbXMiLCJzdWIiLCJfbWVyZ2VDbGFpbXMiLCJjbGFpbXMxIiwiY2xhaW1zMiIsInJlc3VsdCIsImFzc2lnbiIsInZhbHVlcyIsImZvckVhY2giLCJ0eXBlIiwiX3Byb2Nlc3NDb2RlIiwiX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuIiwiX3ZhbGlkYXRlSWRUb2tlbiIsImV4Y2hhbmdlQ29kZSIsInRva2VuUmVzcG9uc2UiLCJfdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlcyIsImNsb2NrU2tld0luU2Vjb25kcyIsIl92YWxpZGF0ZUFjY2Vzc1Rva2VuIiwia2lkIiwiX2ZpbHRlckJ5QWxnIiwiZmlsdGVyIiwiYXRfaGFzaCIsImhhc2hBbGciLCJoYXNoQml0cyIsInNoYSIsImhhc2giLCJsZWZ0IiwibGVmdF9iNjR1IiwidXNlck1hbmFnZXIiLCJDaGVja1Nlc3Npb25JRnJhbWVDdG9yIiwiX3VzZXJNYW5hZ2VyIiwiX0NoZWNrU2Vzc2lvbklGcmFtZUN0b3IiLCJldmVudHMiLCJhZGRVc2VyTG9hZGVkIiwiX3N0YXJ0IiwiYWRkVXNlclVubG9hZGVkIiwiX3N0b3AiLCJnZXRVc2VyIiwidXNlciIsIm1vbml0b3JBbm9ueW1vdXNTZXNzaW9uIiwicXVlcnlTZXNzaW9uU3RhdHVzIiwidG1wVXNlciIsInNlc3Npb24iLCJzaWQiLCJjYXRjaCIsImVyciIsIl9zdWIiLCJfc2lkIiwiX2NoZWNrU2Vzc2lvbklGcmFtZSIsIl9jaGVja1Nlc3Npb25JbnRlcnZhbCIsIl9zdG9wQ2hlY2tTZXNzaW9uT25FcnJvciIsInRpbWVySGFuZGxlIiwicmFpc2VFdmVudCIsIl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCIsIl9yYWlzZVVzZXJTaWduZWRPdXQiLCJfcmFpc2VVc2VyU2lnbmVkSW4iLCJjaGVja1Nlc3Npb25JbnRlcnZhbCIsInN0b3BDaGVja1Nlc3Npb25PbkVycm9yIiwib2lkYyIsImlzT2lkYyIsImFkZFF1ZXJ5UGFyYW0iLCJjb2RlX2NoYWxsZW5nZSIsInNwbGl0IiwiaXNPQXV0aCIsIk9pZGNTY29wZSIsInRva2VuX3R5cGUiLCJleHBpcmVzX2F0Iiwic2NvcGVzIiwiYXJndW1lbnRzIiwiX25vbmNlIiwiX2NvZGVfdmVyaWZpZXIiLCJfY29kZV9jaGFsbGVuZ2UiLCJfc2tpcFVzZXJJbmZvIiwic3RyaW5naWZ5IiwiY3JlYXRlZCIsInN0b3JhZ2VTdHJpbmciLCJTaWxlbnRSZW5ld1NlcnZpY2UiLCJfdG9rZW5FeHBpcmluZyIsInNpZ25pblNpbGVudCIsIl9yYWlzZVNpbGVudFJlbmV3RXJyb3IiLCJfY3JlYXRlZCIsIl9yZXF1ZXN0X3R5cGUiLCJzdG9yYWdlIiwiYWdlIiwiY3V0b2ZmIiwiZ2V0QWxsS2V5cyIsInByb21pc2VzIiwicCIsImFsbCIsIlRpbWVyRHVyYXRpb24iLCJub3dGdW5jIiwiX25vd0Z1bmMiLCJleHBpcmF0aW9uIiwiX3RpbWVySGFuZGxlIiwiX2V4cGlyYXRpb24iLCJ0aW1lckR1cmF0aW9uIiwiZGlmZiIsImdyYW50X3R5cGUiLCJleGNoYW5nZVJlZnJlc2hUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJBY2Nlc3NUb2tlblR5cGVIaW50IiwiUmVmcmVzaFRva2VuVHlwZUhpbnQiLCJfWE1MSHR0cFJlcXVlc3RDdG9yIiwicmV2b2tlIiwicmVxdWlyZWQiLCJfcmV2b2tlIiwieGhyIiwiZ2xvYmFsIiwibGFzdEluZGV4T2YiLCJyZWdleCIsIm0iLCJjb3VudGVyIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCIsInByb3AiLCJfZ2V0Q2xhaW1zRnJvbUp3dCIsImlzc3VlclByb21pc2UiLCJTaWxlbnRSZW5ld1NlcnZpY2VDdG9yIiwiU2Vzc2lvbk1vbml0b3JDdG9yIiwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3RvciIsIlVzZXJNYW5hZ2VyU2V0dGluZ3MiLCJfZXZlbnRzIiwiVXNlck1hbmFnZXJFdmVudHMiLCJfc2lsZW50UmVuZXdTZXJ2aWNlIiwiYXV0b21hdGljU2lsZW50UmVuZXciLCJzdGFydFNpbGVudFJlbmV3IiwibW9uaXRvclNlc3Npb24iLCJfc2Vzc2lvbk1vbml0b3IiLCJfdG9rZW5SZXZvY2F0aW9uQ2xpZW50IiwiX2xvYWRVc2VyIiwicmVtb3ZlVXNlciIsInN0b3JlVXNlciIsInNpZ25pblJlZGlyZWN0IiwibmF2UGFyYW1zIiwiX3NpZ25pblN0YXJ0IiwiX3JlZGlyZWN0TmF2aWdhdG9yIiwic2lnbmluUmVkaXJlY3RDYWxsYmFjayIsIl9zaWduaW5FbmQiLCJzaWduaW5Qb3B1cCIsInBvcHVwX3JlZGlyZWN0X3VyaSIsIl9zaWduaW4iLCJfcG9wdXBOYXZpZ2F0b3IiLCJzaWduaW5Qb3B1cENhbGxiYWNrIiwiX3NpZ25pbkNhbGxiYWNrIiwiX3VzZVJlZnJlc2hUb2tlbiIsImluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyIsInZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyIsImN1cnJlbnRfc3ViIiwiX3NpZ25pblNpbGVudElmcmFtZSIsImlkVG9rZW5WYWxpZGF0aW9uIiwiX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbiIsImF1dGhfdGltZSIsInNpbGVudF9yZWRpcmVjdF91cmkiLCJfaWZyYW1lTmF2aWdhdG9yIiwic2lnbmluU2lsZW50Q2FsbGJhY2siLCJzaWduaW5DYWxsYmFjayIsInNpZ25vdXRDYWxsYmFjayIsInNpZ25vdXRSZWRpcmVjdENhbGxiYWNrIiwic2lnbm91dFBvcHVwQ2FsbGJhY2siLCJxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSIsIm5hdlJlc3BvbnNlIiwic2lnbmluUmVzcG9uc2UiLCJuYXZpZ2F0b3IiLCJuYXZpZ2F0b3JQYXJhbXMiLCJzaWdub3V0UmVkaXJlY3QiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJfc2lnbm91dFN0YXJ0IiwiX3NpZ25vdXRFbmQiLCJzaWdub3V0UG9wdXAiLCJwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfc2lnbm91dCIsInJldm9rZVByb21pc2UiLCJyZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCIsIl9yZXZva2VJbnRlcm5hbCIsInNpZ25vdXRSZXF1ZXN0Iiwic2lnbm91dFJlc3BvbnNlIiwicmV2b2tlQWNjZXNzVG9rZW4iLCJzdWNjZXNzIiwiX3Jldm9rZUFjY2Vzc1Rva2VuSW50ZXJuYWwiLCJfcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwiLCJhdFN1Y2Nlc3MiLCJydFN1Y2Nlc3MiLCJzdG9wU2lsZW50UmVuZXciLCJfdXNlclN0b3JlIiwiX3VzZXJTdG9yZUtleSIsInJlZGlyZWN0TmF2aWdhdG9yIiwicG9wdXBOYXZpZ2F0b3IiLCJpZnJhbWVOYXZpZ2F0b3IiLCJ1c2VyU3RvcmUiLCJfdXNlckxvYWRlZCIsIl91c2VyVW5sb2FkZWQiLCJfc2lsZW50UmVuZXdFcnJvciIsIl91c2VyU2lnbmVkSW4iLCJfdXNlclNpZ25lZE91dCIsIl91c2VyU2Vzc2lvbkNoYW5nZWQiLCJyZW1vdmVVc2VyTG9hZGVkIiwicmVtb3ZlVXNlclVubG9hZGVkIiwiYWRkU2lsZW50UmVuZXdFcnJvciIsInJlbW92ZVNpbGVudFJlbmV3RXJyb3IiLCJhZGRVc2VyU2lnbmVkSW4iLCJyZW1vdmVVc2VyU2lnbmVkSW4iLCJhZGRVc2VyU2lnbmVkT3V0IiwicmVtb3ZlVXNlclNpZ25lZE91dCIsImFkZFVzZXJTZXNzaW9uQ2hhbmdlZCIsInJlbW92ZVVzZXJTZXNzaW9uQ2hhbmdlZCIsIkRlZmF1bHRDaGVja1Nlc3Npb25JbnRlcnZhbCIsInN0b3JlIiwiX3BvcHVwX3JlZGlyZWN0X3VyaSIsIl9wb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfcG9wdXBXaW5kb3dGZWF0dXJlcyIsIl9wb3B1cFdpbmRvd1RhcmdldCIsIl9zaWxlbnRfcmVkaXJlY3RfdXJpIiwiX3NpbGVudFJlcXVlc3RUaW1lb3V0IiwiX2F1dG9tYXRpY1NpbGVudFJlbmV3IiwiX3ZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyIsIl9pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXciLCJfbW9uaXRvclNlc3Npb24iLCJfbW9uaXRvckFub255bW91c1Nlc3Npb24iLCJfcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUiLCJfcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQiLCJwcmVmaXgiLCJfc3RvcmUiLCJfcHJlZml4IiwiQmlnSW50ZWdlciIsIkpTQk4iLCJiNjRtYXAiLCJiNjRwYWQiLCJCYXNlNjQiLCJzIiwicmV0IiwiayIsInNsb3AiLCJjaGFyQXQiLCJ2IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiaGV4VG9CYXNlNjQiLCJoIiwiYyIsInN1YnN0cmluZyIsInBhZGRpbmciLCJzdHIiLCJtb2QiLCJwYWQiLCJqb2luIiwiYnl0ZUFycmF5VG9IZXgiLCJyYXciLCJIRVgiLCJfaGV4IiwidG9TdHJpbmciLCJkZWNvZGVUb0hFWCIsImJhc2U2NEpzIiwidG9CeXRlQXJyYXkiLCJiYXNlNjRUb0Jhc2U2NFVybCIsInVybERlY29kZSIsImF0b2IiLCJEaWdlc3RJbmZvSGVhZCIsInNoYTEiLCJzaGEyMjQiLCJzaGEyNTYiLCJzaGEzODQiLCJzaGE1MTIiLCJtZDIiLCJtZDUiLCJyaXBlbWQxNjAiLCJEaWdlc3RBbGdzIiwiU0hBMjU2IiwiUlNBVmVyaWZpZXIiLCJtb2R1bHVzIiwiZ2V0QWxnb3JpdGhtRnJvbURpZ2VzdCIsImhEaWdlc3RJbmZvIiwiYWxnTmFtZSIsImhlYWQiLCJsZW4iLCJwcm90b3R5cGUiLCJtc2ciLCJlbmNzaWciLCJzaWciLCJiaXRMZW5ndGgiLCJkZWNyeXB0ZWRTaWciLCJtb2RQb3dJbnQiLCJkaWdlc3QiLCJkaWdlc3RJbmZvIiwibXNnSGFzaCIsInBhcnRzIiwiYWxsb3dlZFNpZ25pbmdBbGdzIiwiaGVhZGVyQW5kUGF5bG9hZCIsImdldFB1YmxpY0tleUZyb21DZXJ0UEVNIiwiaGFzaEZ1bmMiLCJyYW5kb20iLCJtc0NyeXB0byIsIl9jcnlwdG9VdWlkdjQiLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50OEFycmF5IiwiX3V1aWR2NCIsIk1hdGgiLCJoYXNDcnlwdG8iLCJoYXNSYW5kb21WYWx1ZXMiLCJ1dWlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNB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UUFBbEMsQ0FBMkMsRUFBM0MsQ0FEc0Q7QUFBQSxHQUEvQyxDQUFQO0FBR0g7O0FBRWMsU0FBU3dDLE1BQVQsR0FBa0I7QUFDL0IsTUFBSU8sWUFBWW5oQixVQUFVLFdBQVYsSUFBeUJBLFdBQVcsSUFBcEQ7QUFDQSxNQUFJb2hCLGtCQUFrQkQsYUFBYyxPQUFPbmhCLE9BQU8rZ0IsZUFBZCxJQUFrQyxXQUF0RTtBQUNBLE1BQUlNLE9BQU9ELGtCQUFrQk4sYUFBbEIsR0FBa0NHLE9BQTdDO0FBQ0EsU0FBT0ksT0FBTzlULE9BQVAsQ0FBZSxJQUFmLEVBQXFCLEVBQXJCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJELElBQU1yWixVQUFVLGVBQWhCLEMsUUFBeUNBLE8sR0FBQUEsTyIsImZpbGUiOiJvaWRjLWNsaWVudC5yc2EyNTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vc3JjL0xvZy5qcyc7XHJcbmltcG9ydCB7IE9pZGNDbGllbnQgfSBmcm9tICcuL3NyYy9PaWRjQ2xpZW50LmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudFNldHRpbmdzIH0gZnJvbSAnLi9zcmMvT2lkY0NsaWVudFNldHRpbmdzLmpzJztcclxuaW1wb3J0IHsgV2ViU3RvcmFnZVN0YXRlU3RvcmUgfSBmcm9tICcuL3NyYy9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyc7XHJcbmltcG9ydCB7IEluTWVtb3J5V2ViU3RvcmFnZSB9IGZyb20gJy4vc3JjL0luTWVtb3J5V2ViU3RvcmFnZS5qcyc7XHJcbmltcG9ydCB7IFVzZXJNYW5hZ2VyIH0gZnJvbSAnLi9zcmMvVXNlck1hbmFnZXIuanMnO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkV2ZW50cyB9IGZyb20gJy4vc3JjL0FjY2Vzc1Rva2VuRXZlbnRzLmpzJztcclxuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zcmMvTWV0YWRhdGFTZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgQ29yZG92YVBvcHVwTmF2aWdhdG9yIH0gZnJvbSAnLi9zcmMvQ29yZG92YVBvcHVwTmF2aWdhdG9yLmpzJztcclxuaW1wb3J0IHsgQ29yZG92YUlGcmFtZU5hdmlnYXRvciB9IGZyb20gJy4vc3JjL0NvcmRvdmFJRnJhbWVOYXZpZ2F0b3IuanMnO1xyXG5pbXBvcnQgeyBDaGVja1Nlc3Npb25JRnJhbWUgfSBmcm9tICcuL3NyYy9DaGVja1Nlc3Npb25JRnJhbWUuanMnO1xyXG5pbXBvcnQgeyBUb2tlblJldm9jYXRpb25DbGllbnQgfSBmcm9tICcuL3NyYy9Ub2tlblJldm9jYXRpb25DbGllbnQuanMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uTW9uaXRvciB9IGZyb20gJy4vc3JjL1Nlc3Npb25Nb25pdG9yLmpzJztcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9zcmMvR2xvYmFsLmpzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vc3JjL1VzZXIuanMnO1xyXG5cclxuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBWZXJzaW9uLFxyXG4gICAgTG9nLFxyXG4gICAgT2lkY0NsaWVudCxcclxuICAgIE9pZGNDbGllbnRTZXR0aW5ncyxcclxuICAgIFdlYlN0b3JhZ2VTdGF0ZVN0b3JlLFxyXG4gICAgSW5NZW1vcnlXZWJTdG9yYWdlLFxyXG4gICAgVXNlck1hbmFnZXIsXHJcbiAgICBBY2Nlc3NUb2tlbkV2ZW50cyxcclxuICAgIE1ldGFkYXRhU2VydmljZSxcclxuICAgIENvcmRvdmFQb3B1cE5hdmlnYXRvcixcclxuICAgIENvcmRvdmFJRnJhbWVOYXZpZ2F0b3IsXHJcbiAgICBDaGVja1Nlc3Npb25JRnJhbWUsXHJcbiAgICBUb2tlblJldm9jYXRpb25DbGllbnQsXHJcbiAgICBTZXNzaW9uTW9uaXRvcixcclxuICAgIEdsb2JhbCxcclxuICAgIFVzZXJcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayhcbiAgICAgIHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aClcbiAgICApKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0cm9vdC5DcnlwdG9KUyA9IGZhY3RvcnkoKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cblx0LyoqXG5cdCAqIENyeXB0b0pTIGNvcmUgY29tcG9uZW50cy5cblx0ICovXG5cdHZhciBDcnlwdG9KUyA9IENyeXB0b0pTIHx8IChmdW5jdGlvbiAoTWF0aCwgdW5kZWZpbmVkKSB7XG5cdCAgICAvKlxuXHQgICAgICogTG9jYWwgcG9seWZpbCBvZiBPYmplY3QuY3JlYXRlXG5cdCAgICAgKi9cblx0ICAgIHZhciBjcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZnVuY3Rpb24gRigpIHt9O1xuXG5cdCAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcblx0ICAgICAgICAgICAgdmFyIHN1YnR5cGU7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBvYmo7XG5cblx0ICAgICAgICAgICAgc3VidHlwZSA9IG5ldyBGKCk7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBudWxsO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgIH07XG5cdCAgICB9KCkpXG5cblx0ICAgIC8qKlxuXHQgICAgICogQ3J5cHRvSlMgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQyA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIExpYnJhcnkgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYiA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEJhc2Ugb2JqZWN0IGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2UgPSAoZnVuY3Rpb24gKCkge1xuXG5cblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3ZlcnJpZGVzIFByb3BlcnRpZXMgdG8gY29weSBpbnRvIHRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBmaWVsZDogJ3ZhbHVlJyxcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgICAgICBtZXRob2Q6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICogICAgICAgICB9XG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGV4dGVuZDogZnVuY3Rpb24gKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgLy8gU3Bhd25cblx0ICAgICAgICAgICAgICAgIHZhciBzdWJ0eXBlID0gY3JlYXRlKHRoaXMpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBBdWdtZW50XG5cdCAgICAgICAgICAgICAgICBpZiAob3ZlcnJpZGVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5taXhJbihvdmVycmlkZXMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZGVmYXVsdCBpbml0aWFsaXplclxuXHQgICAgICAgICAgICAgICAgaWYgKCFzdWJ0eXBlLmhhc093blByb3BlcnR5KCdpbml0JykgfHwgdGhpcy5pbml0ID09PSBzdWJ0eXBlLmluaXQpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUuJHN1cGVyLmluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplcidzIHByb3RvdHlwZSBpcyB0aGUgc3VidHlwZSBvYmplY3Rcblx0ICAgICAgICAgICAgICAgIHN1YnR5cGUuaW5pdC5wcm90b3R5cGUgPSBzdWJ0eXBlO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZWZlcmVuY2Ugc3VwZXJ0eXBlXG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlciA9IHRoaXM7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBFeHRlbmRzIHRoaXMgb2JqZWN0IGFuZCBydW5zIHRoZSBpbml0IG1ldGhvZC5cblx0ICAgICAgICAgICAgICogQXJndW1lbnRzIHRvIGNyZWF0ZSgpIHdpbGwgYmUgcGFzc2VkIHRvIGluaXQoKS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIGluc3RhbmNlID0gTXlUeXBlLmNyZWF0ZSgpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmV4dGVuZCgpO1xuXHQgICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5pdC5hcHBseShpbnN0YW5jZSwgYXJndW1lbnRzKTtcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhZGQgc29tZSBsb2dpYyB3aGVuIHlvdXIgb2JqZWN0cyBhcmUgY3JlYXRlZC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBNeVR5cGUgPSBDcnlwdG9KUy5saWIuQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICogICAgICAgICAgICAgLy8gLi4uXG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENvcGllcyBwcm9wZXJ0aWVzIGludG8gdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRvIG1peCBpbi5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIE15VHlwZS5taXhJbih7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZSdcblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgbWl4SW46IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSUUgd29uJ3QgY29weSB0b1N0cmluZyB1c2luZyB0aGUgbG9vcCBhYm92ZVxuXHQgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoJ3RvU3RyaW5nJykpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnRvU3RyaW5nID0gcHJvcGVydGllcy50b1N0cmluZztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gaW5zdGFuY2UuY2xvbmUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0LnByb3RvdHlwZS5leHRlbmQodGhpcyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgfSgpKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtBcnJheX0gd29yZHMgVGhlIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaWdCeXRlcyBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIChPcHRpb25hbCkgQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWdCeXRlcyAoT3B0aW9uYWwpIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhlIHdvcmRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFsweDAwMDEwMjAzLCAweDA0MDUwNjA3XSk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10sIDYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3b3Jkcywgc2lnQnl0ZXMpIHtcblx0ICAgICAgICAgICAgd29yZHMgPSB0aGlzLndvcmRzID0gd29yZHMgfHwgW107XG5cblx0ICAgICAgICAgICAgaWYgKHNpZ0J5dGVzICE9IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHdvcmRzLmxlbmd0aCAqIDQ7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgdGhpcyB3b3JkIGFycmF5IHRvIGEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtFbmNvZGVyfSBlbmNvZGVyIChPcHRpb25hbCkgVGhlIGVuY29kaW5nIHN0cmF0ZWd5IHRvIHVzZS4gRGVmYXVsdDogQ3J5cHRvSlMuZW5jLkhleFxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3RyaW5naWZpZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheSArICcnO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKCk7XG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoZW5jb2Rlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gKGVuY29kZXIgfHwgSGV4KS5zdHJpbmdpZnkodGhpcyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmNhdGVuYXRlcyBhIHdvcmQgYXJyYXkgdG8gdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgd29yZEFycmF5MS5jb25jYXQod29yZEFycmF5Mik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY29uY2F0OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgdGhpc1dvcmRzID0gdGhpcy53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHRoYXRXb3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHRoaXNTaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0U2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXAgZXhjZXNzIGJpdHNcblx0ICAgICAgICAgICAgdGhpcy5jbGFtcCgpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbmNhdFxuXHQgICAgICAgICAgICBpZiAodGhpc1NpZ0J5dGVzICUgNCkge1xuXHQgICAgICAgICAgICAgICAgLy8gQ29weSBvbmUgYnl0ZSBhdCBhIHRpbWVcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdFNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdEJ5dGUgPSAodGhhdFdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzV29yZHNbKHRoaXNTaWdCeXRlcyArIGkpID4+PiAyXSB8PSB0aGF0Qnl0ZSA8PCAoMjQgLSAoKHRoaXNTaWdCeXRlcyArIGkpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIHdvcmQgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gPSB0aGF0V29yZHNbaSA+Pj4gMl07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyArPSB0aGF0U2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZW1vdmVzIGluc2lnbmlmaWNhbnQgYml0cy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgd29yZEFycmF5LmNsYW1wKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xhbXA6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXBcblx0ICAgICAgICAgICAgd29yZHNbc2lnQnl0ZXMgPj4+IDJdICY9IDB4ZmZmZmZmZmYgPDwgKDMyIC0gKHNpZ0J5dGVzICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgd29yZHMubGVuZ3RoID0gTWF0aC5jZWlsKHNpZ0J5dGVzIC8gNCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSB3b3JkQXJyYXkuY2xvbmUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLndvcmRzID0gdGhpcy53b3Jkcy5zbGljZSgwKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSB3b3JkIGFycmF5IGZpbGxlZCB3aXRoIHJhbmRvbSBieXRlcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuQnl0ZXMgVGhlIG51bWJlciBvZiByYW5kb20gYnl0ZXMgdG8gZ2VuZXJhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSByYW5kb20gd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkucmFuZG9tKDE2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByYW5kb206IGZ1bmN0aW9uIChuQnl0ZXMpIHtcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cblx0ICAgICAgICAgICAgdmFyIHIgPSAoZnVuY3Rpb24gKG1fdykge1xuXHQgICAgICAgICAgICAgICAgdmFyIG1fdyA9IG1fdztcblx0ICAgICAgICAgICAgICAgIHZhciBtX3ogPSAweDNhZGU2OGIxO1xuXHQgICAgICAgICAgICAgICAgdmFyIG1hc2sgPSAweGZmZmZmZmZmO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgIG1feiA9ICgweDkwNjkgKiAobV96ICYgMHhGRkZGKSArIChtX3ogPj4gMHgxMCkpICYgbWFzaztcblx0ICAgICAgICAgICAgICAgICAgICBtX3cgPSAoMHg0NjUwICogKG1fdyAmIDB4RkZGRikgKyAobV93ID4+IDB4MTApKSAmIG1hc2s7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICgobV96IDw8IDB4MTApICsgbV93KSAmIG1hc2s7XG5cdCAgICAgICAgICAgICAgICAgICAgcmVzdWx0IC89IDB4MTAwMDAwMDAwO1xuXHQgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAwLjU7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAqIChNYXRoLnJhbmRvbSgpID4gLjUgPyAxIDogLTEpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9KTtcblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgcmNhY2hlOyBpIDwgbkJ5dGVzOyBpICs9IDQpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBfciA9IHIoKHJjYWNoZSB8fCBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDAwMDAwKTtcblxuXHQgICAgICAgICAgICAgICAgcmNhY2hlID0gX3IoKSAqIDB4M2FkZTY3Yjc7XG5cdCAgICAgICAgICAgICAgICB3b3Jkcy5wdXNoKChfcigpICogMHgxMDAwMDAwMDApIHwgMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBuQnl0ZXMpO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEVuY29kZXIgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYyA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEhleCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEhleCA9IENfZW5jLkhleCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoZXhTdHJpbmcgPSBDcnlwdG9KUy5lbmMuSGV4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgaGV4Q2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICBoZXhDaGFycy5wdXNoKChiaXRlID4+PiA0KS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSAmIDB4MGYpLnRvU3RyaW5nKDE2KSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gaGV4Q2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgaGV4IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4U3RyIFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5IZXgucGFyc2UoaGV4U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGhleFN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgaGV4U3RyTGVuZ3RoID0gaGV4U3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhleFN0ckxlbmd0aDsgaSArPSAyKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAzXSB8PSBwYXJzZUludChoZXhTdHIuc3Vic3RyKGksIDIpLCAxNikgPDwgKDI0IC0gKGkgJSA4KSAqIDQpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgaGV4U3RyTGVuZ3RoIC8gMik7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMYXRpbjEgZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBMYXRpbjEgPSBDX2VuYy5MYXRpbjEgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgbGF0aW4xU3RyaW5nID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGxhdGluMUNoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgbGF0aW4xQ2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJpdGUpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBsYXRpbjFDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBMYXRpbjEgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYXRpbjFTdHIgVGhlIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5wYXJzZShsYXRpbjFTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAobGF0aW4xU3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFTdHJMZW5ndGggPSBsYXRpbjFTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGF0aW4xU3RyTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDJdIHw9IChsYXRpbjFTdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYpIDw8ICgyNCAtIChpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGxhdGluMVN0ckxlbmd0aCk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBVVEYtOCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFV0ZjggPSBDX2VuYy5VdGY4ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB1dGY4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLlV0Zjguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShMYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSkpKTtcblx0ICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYWxmb3JtZWQgVVRGLTggZGF0YScpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgVVRGLTggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1dGY4U3RyIFRoZSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UodXRmOFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh1dGY4U3RyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBMYXRpbjEucGFyc2UodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHV0ZjhTdHIpKSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBidWZmZXJlZCBibG9jayBhbGdvcml0aG0gdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogVGhlIHByb3BlcnR5IGJsb2NrU2l6ZSBtdXN0IGJlIGltcGxlbWVudGVkIGluIGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gX21pbkJ1ZmZlclNpemUgVGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBzaG91bGQgYmUga2VwdCB1bnByb2Nlc3NlZCBpbiB0aGUgYnVmZmVyLiBEZWZhdWx0OiAwXG5cdCAgICAgKi9cblx0ICAgIHZhciBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQ19saWIuQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBibG9jayBhbGdvcml0aG0ncyBkYXRhIGJ1ZmZlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIEluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgV29yZEFycmF5LmluaXQoKTtcblx0ICAgICAgICAgICAgdGhpcy5fbkRhdGFCeXRlcyA9IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEFkZHMgbmV3IGRhdGEgdG8gdGhpcyBibG9jayBhbGdvcml0aG0ncyBidWZmZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYXBwZW5kLiBTdHJpbmdzIGFyZSBjb252ZXJ0ZWQgdG8gYSBXb3JkQXJyYXkgdXNpbmcgVVRGLTguXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCgnZGF0YScpO1xuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfYXBwZW5kOiBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgICAgICAvLyBDb252ZXJ0IHN0cmluZyB0byBXb3JkQXJyYXksIGVsc2UgYXNzdW1lIFdvcmRBcnJheSBhbHJlYWR5XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PSAnc3RyaW5nJykge1xuXHQgICAgICAgICAgICAgICAgZGF0YSA9IFV0ZjgucGFyc2UoZGF0YSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fZGF0YS5jb25jYXQoZGF0YSk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgKz0gZGF0YS5zaWdCeXRlcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUHJvY2Vzc2VzIGF2YWlsYWJsZSBkYXRhIGJsb2Nrcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIFRoaXMgbWV0aG9kIGludm9rZXMgX2RvUHJvY2Vzc0Jsb2NrKG9mZnNldCksIHdoaWNoIG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYSBjb25jcmV0ZSBzdWJ0eXBlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBkb0ZsdXNoIFdoZXRoZXIgYWxsIGJsb2NrcyBhbmQgcGFydGlhbCBibG9ja3Mgc2hvdWxkIGJlIHByb2Nlc3NlZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHByb2Nlc3NlZCBkYXRhLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX3Byb2Nlc3MoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCEhJ2ZsdXNoJyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX3Byb2Nlc3M6IGZ1bmN0aW9uIChkb0ZsdXNoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVNpZ0J5dGVzID0gZGF0YS5zaWdCeXRlcztcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplQnl0ZXMgPSBibG9ja1NpemUgKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIENvdW50IGJsb2NrcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbkJsb2Nrc1JlYWR5ID0gZGF0YVNpZ0J5dGVzIC8gYmxvY2tTaXplQnl0ZXM7XG5cdCAgICAgICAgICAgIGlmIChkb0ZsdXNoKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCB1cCB0byBpbmNsdWRlIHBhcnRpYWwgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLmNlaWwobkJsb2Nrc1JlYWR5KTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIGRvd24gdG8gaW5jbHVkZSBvbmx5IGZ1bGwgYmxvY2tzLFxuXHQgICAgICAgICAgICAgICAgLy8gbGVzcyB0aGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IG11c3QgcmVtYWluIGluIHRoZSBidWZmZXJcblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGgubWF4KChuQmxvY2tzUmVhZHkgfCAwKSAtIHRoaXMuX21pbkJ1ZmZlclNpemUsIDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgd29yZHMgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5Xb3Jkc1JlYWR5ID0gbkJsb2Nrc1JlYWR5ICogYmxvY2tTaXplO1xuXG5cdCAgICAgICAgICAgIC8vIENvdW50IGJ5dGVzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuQnl0ZXNSZWFkeSA9IE1hdGgubWluKG5Xb3Jkc1JlYWR5ICogNCwgZGF0YVNpZ0J5dGVzKTtcblxuXHQgICAgICAgICAgICAvLyBQcm9jZXNzIGJsb2Nrc1xuXHQgICAgICAgICAgICBpZiAobldvcmRzUmVhZHkpIHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IG5Xb3Jkc1JlYWR5OyBvZmZzZXQgKz0gYmxvY2tTaXplKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1hbGdvcml0aG0gbG9naWNcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb1Byb2Nlc3NCbG9jayhkYXRhV29yZHMsIG9mZnNldCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBwcm9jZXNzZWQgd29yZHNcblx0ICAgICAgICAgICAgICAgIHZhciBwcm9jZXNzZWRXb3JkcyA9IGRhdGFXb3Jkcy5zcGxpY2UoMCwgbldvcmRzUmVhZHkpO1xuXHQgICAgICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyAtPSBuQnl0ZXNSZWFkeTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBwcm9jZXNzZWQgd29yZHNcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdChwcm9jZXNzZWRXb3JkcywgbkJ5dGVzUmVhZHkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5fZGF0YSA9IHRoaXMuX2RhdGEuY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9taW5CdWZmZXJTaXplOiAwXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBoYXNoZXIgdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJsb2NrU2l6ZSBUaGUgbnVtYmVyIG9mIDMyLWJpdCB3b3JkcyB0aGlzIGhhc2hlciBvcGVyYXRlcyBvbi4gRGVmYXVsdDogMTYgKDUxMiBiaXRzKVxuXHQgICAgICovXG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyID0gQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjZmc6IEJhc2UuZXh0ZW5kKCksXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgaGFzaGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoZXIgPSBDcnlwdG9KUy5hbGdvLlNIQTI1Ni5jcmVhdGUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2ZnKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZyBkZWZhdWx0c1xuXHQgICAgICAgICAgICB0aGlzLmNmZyA9IHRoaXMuY2ZnLmV4dGVuZChjZmcpO1xuXG5cdCAgICAgICAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGhhc2hlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gUmVzZXQgZGF0YSBidWZmZXJcblx0ICAgICAgICAgICAgQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldC5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtaGFzaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHRoaXMuX2RvUmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogVXBkYXRlcyB0aGlzIGhhc2hlciB3aXRoIGEgbWVzc2FnZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSBUaGUgbWVzc2FnZSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtIYXNoZXJ9IFRoaXMgaGFzaGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIGhhc2hlci51cGRhdGUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG5cblx0ICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBoYXNoXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEZpbmFsaXplcyB0aGUgaGFzaCBjb21wdXRhdGlvbi5cblx0ICAgICAgICAgKiBOb3RlIHRoYXQgdGhlIGZpbmFsaXplIG9wZXJhdGlvbiBpcyBlZmZlY3RpdmVseSBhIGRlc3RydWN0aXZlLCByZWFkLW9uY2Ugb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIChPcHRpb25hbCkgQSBmaW5hbCBtZXNzYWdlIHVwZGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCk7XG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEZpbmFsIG1lc3NhZ2UgdXBkYXRlXG5cdCAgICAgICAgICAgIGlmIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2RvRmluYWxpemUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgYmxvY2tTaXplOiA1MTIvMzIsXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gYSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIGNyZWF0ZSBhIGhlbHBlciBmb3IuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHNob3J0Y3V0IGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgU0hBMjU2ID0gQ3J5cHRvSlMubGliLkhhc2hlci5fY3JlYXRlSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwgY2ZnKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGhhc2hlci5pbml0KGNmZykuZmluYWxpemUobWVzc2FnZSk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBzaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gdXNlIGluIHRoaXMgSE1BQyBoZWxwZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHNob3J0Y3V0IGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgSG1hY1NIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9jcmVhdGVIbWFjSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwga2V5KSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENfYWxnby5ITUFDLmluaXQoaGFzaGVyLCBrZXkpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFsZ29yaXRobSBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ28gPSB7fTtcblxuXHQgICAgcmV0dXJuIEM7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTO1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKE1hdGgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBJbml0aWFsaXphdGlvbiBhbmQgcm91bmQgY29uc3RhbnRzIHRhYmxlc1xuXHQgICAgdmFyIEggPSBbXTtcblx0ICAgIHZhciBLID0gW107XG5cblx0ICAgIC8vIENvbXB1dGUgY29uc3RhbnRzXG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIGlzUHJpbWUobikge1xuXHQgICAgICAgICAgICB2YXIgc3FydE4gPSBNYXRoLnNxcnQobik7XG5cdCAgICAgICAgICAgIGZvciAodmFyIGZhY3RvciA9IDI7IGZhY3RvciA8PSBzcXJ0TjsgZmFjdG9yKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmICghKG4gJSBmYWN0b3IpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgZnVuY3Rpb24gZ2V0RnJhY3Rpb25hbEJpdHMobikge1xuXHQgICAgICAgICAgICByZXR1cm4gKChuIC0gKG4gfCAwKSkgKiAweDEwMDAwMDAwMCkgfCAwO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHZhciBuID0gMjtcblx0ICAgICAgICB2YXIgblByaW1lID0gMDtcblx0ICAgICAgICB3aGlsZSAoblByaW1lIDwgNjQpIHtcblx0ICAgICAgICAgICAgaWYgKGlzUHJpbWUobikpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChuUHJpbWUgPCA4KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgSFtuUHJpbWVdID0gZ2V0RnJhY3Rpb25hbEJpdHMoTWF0aC5wb3cobiwgMSAvIDIpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIEtbblByaW1lXSA9IGdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sIDEgLyAzKSk7XG5cblx0ICAgICAgICAgICAgICAgIG5QcmltZSsrO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgbisrO1xuXHQgICAgICAgIH1cblx0ICAgIH0oKSk7XG5cblx0ICAgIC8vIFJldXNhYmxlIG9iamVjdFxuXHQgICAgdmFyIFcgPSBbXTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTSEEtMjU2IGhhc2ggYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgU0hBMjU2ID0gQ19hbGdvLlNIQTI1NiA9IEhhc2hlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggPSBuZXcgV29yZEFycmF5LmluaXQoSC5zbGljZSgwKSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgSCA9IHRoaXMuX2hhc2gud29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gV29ya2luZyB2YXJpYWJsZXNcblx0ICAgICAgICAgICAgdmFyIGEgPSBIWzBdO1xuXHQgICAgICAgICAgICB2YXIgYiA9IEhbMV07XG5cdCAgICAgICAgICAgIHZhciBjID0gSFsyXTtcblx0ICAgICAgICAgICAgdmFyIGQgPSBIWzNdO1xuXHQgICAgICAgICAgICB2YXIgZSA9IEhbNF07XG5cdCAgICAgICAgICAgIHZhciBmID0gSFs1XTtcblx0ICAgICAgICAgICAgdmFyIGcgPSBIWzZdO1xuXHQgICAgICAgICAgICB2YXIgaCA9IEhbN107XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0YXRpb25cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoaSA8IDE2KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IE1bb2Zmc2V0ICsgaV0gfCAwO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEweCA9IFdbaSAtIDE1XTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEwICA9ICgoZ2FtbWEweCA8PCAyNSkgfCAoZ2FtbWEweCA+Pj4gNykpICBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGdhbW1hMHggPDwgMTQpIHwgKGdhbW1hMHggPj4+IDE4KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnYW1tYTB4ID4+PiAzKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTF4ID0gV1tpIC0gMl07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMSAgPSAoKGdhbW1hMXggPDwgMTUpIHwgKGdhbW1hMXggPj4+IDE3KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnYW1tYTF4IDw8IDEzKSB8IChnYW1tYTF4ID4+PiAxOSkpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2FtbWExeCA+Pj4gMTApO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGdhbW1hMCArIFdbaSAtIDddICsgZ2FtbWExICsgV1tpIC0gMTZdO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICB2YXIgY2ggID0gKGUgJiBmKSBeICh+ZSAmIGcpO1xuXHQgICAgICAgICAgICAgICAgdmFyIG1haiA9IChhICYgYikgXiAoYSAmIGMpIF4gKGIgJiBjKTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMCA9ICgoYSA8PCAzMCkgfCAoYSA+Pj4gMikpIF4gKChhIDw8IDE5KSB8IChhID4+PiAxMykpIF4gKChhIDw8IDEwKSB8IChhID4+PiAyMikpO1xuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMSA9ICgoZSA8PCAyNikgfCAoZSA+Pj4gNikpIF4gKChlIDw8IDIxKSB8IChlID4+PiAxMSkpIF4gKChlIDw8IDcpICB8IChlID4+PiAyNSkpO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgdDEgPSBoICsgc2lnbWExICsgY2ggKyBLW2ldICsgV1tpXTtcblx0ICAgICAgICAgICAgICAgIHZhciB0MiA9IHNpZ21hMCArIG1hajtcblxuXHQgICAgICAgICAgICAgICAgaCA9IGc7XG5cdCAgICAgICAgICAgICAgICBnID0gZjtcblx0ICAgICAgICAgICAgICAgIGYgPSBlO1xuXHQgICAgICAgICAgICAgICAgZSA9IChkICsgdDEpIHwgMDtcblx0ICAgICAgICAgICAgICAgIGQgPSBjO1xuXHQgICAgICAgICAgICAgICAgYyA9IGI7XG5cdCAgICAgICAgICAgICAgICBiID0gYTtcblx0ICAgICAgICAgICAgICAgIGEgPSAodDEgKyB0MikgfCAwO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcblx0ICAgICAgICAgICAgSFswXSA9IChIWzBdICsgYSkgfCAwO1xuXHQgICAgICAgICAgICBIWzFdID0gKEhbMV0gKyBiKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMl0gPSAoSFsyXSArIGMpIHwgMDtcblx0ICAgICAgICAgICAgSFszXSA9IChIWzNdICsgZCkgfCAwO1xuXHQgICAgICAgICAgICBIWzRdID0gKEhbNF0gKyBlKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNV0gPSAoSFs1XSArIGYpIHwgMDtcblx0ICAgICAgICAgICAgSFs2XSA9IChIWzZdICsgZykgfCAwO1xuXHQgICAgICAgICAgICBIWzddID0gKEhbN10gKyBoKSB8IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTVdID0gbkJpdHNUb3RhbDtcblx0ICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IGRhdGFXb3Jkcy5sZW5ndGggKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gSGFzaGVyLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTI1NignbWVzc2FnZScpO1xuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KHdvcmRBcnJheSk7XG5cdCAgICAgKi9cblx0ICAgIEMuU0hBMjU2ID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoU0hBMjU2KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNTSEEyNTYobWVzc2FnZSwga2V5KTtcblx0ICAgICAqL1xuXHQgICAgQy5IbWFjU0hBMjU2ID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTI1Nik7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlNIQTI1NjtcblxufSkpOyIsIihmdW5jdGlvbigpe1xuXG4gICAgLy8gQ29weXJpZ2h0IChjKSAyMDA1ICBUb20gV3VcbiAgICAvLyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgIC8vIFNlZSBcIkxJQ0VOU0VcIiBmb3IgZGV0YWlscy5cblxuICAgIC8vIEJhc2ljIEphdmFTY3JpcHQgQk4gbGlicmFyeSAtIHN1YnNldCB1c2VmdWwgZm9yIFJTQSBlbmNyeXB0aW9uLlxuXG4gICAgLy8gQml0cyBwZXIgZGlnaXRcbiAgICB2YXIgZGJpdHM7XG5cbiAgICAvLyBKYXZhU2NyaXB0IGVuZ2luZSBhbmFseXNpc1xuICAgIHZhciBjYW5hcnkgPSAweGRlYWRiZWVmY2FmZTtcbiAgICB2YXIgal9sbSA9ICgoY2FuYXJ5JjB4ZmZmZmZmKT09MHhlZmNhZmUpO1xuXG4gICAgLy8gKHB1YmxpYykgQ29uc3RydWN0b3JcbiAgICBmdW5jdGlvbiBCaWdJbnRlZ2VyKGEsYixjKSB7XG4gICAgICBpZihhICE9IG51bGwpXG4gICAgICAgIGlmKFwibnVtYmVyXCIgPT0gdHlwZW9mIGEpIHRoaXMuZnJvbU51bWJlcihhLGIsYyk7XG4gICAgICAgIGVsc2UgaWYoYiA9PSBudWxsICYmIFwic3RyaW5nXCIgIT0gdHlwZW9mIGEpIHRoaXMuZnJvbVN0cmluZyhhLDI1Nik7XG4gICAgICAgIGVsc2UgdGhpcy5mcm9tU3RyaW5nKGEsYik7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG5ldywgdW5zZXQgQmlnSW50ZWdlclxuICAgIGZ1bmN0aW9uIG5iaSgpIHsgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG51bGwpOyB9XG5cbiAgICAvLyBhbTogQ29tcHV0ZSB3X2ogKz0gKHgqdGhpc19pKSwgcHJvcGFnYXRlIGNhcnJpZXMsXG4gICAgLy8gYyBpcyBpbml0aWFsIGNhcnJ5LCByZXR1cm5zIGZpbmFsIGNhcnJ5LlxuICAgIC8vIGMgPCAzKmR2YWx1ZSwgeCA8IDIqZHZhbHVlLCB0aGlzX2kgPCBkdmFsdWVcbiAgICAvLyBXZSBuZWVkIHRvIHNlbGVjdCB0aGUgZmFzdGVzdCBvbmUgdGhhdCB3b3JrcyBpbiB0aGlzIGVudmlyb25tZW50LlxuXG4gICAgLy8gYW0xOiB1c2UgYSBzaW5nbGUgbXVsdCBhbmQgZGl2aWRlIHRvIGdldCB0aGUgaGlnaCBiaXRzLFxuICAgIC8vIG1heCBkaWdpdCBiaXRzIHNob3VsZCBiZSAyNiBiZWNhdXNlXG4gICAgLy8gbWF4IGludGVybmFsIHZhbHVlID0gMipkdmFsdWVeMi0yKmR2YWx1ZSAoPCAyXjUzKVxuICAgIGZ1bmN0aW9uIGFtMShpLHgsdyxqLGMsbikge1xuICAgICAgd2hpbGUoLS1uID49IDApIHtcbiAgICAgICAgdmFyIHYgPSB4KnRoaXNbaSsrXSt3W2pdK2M7XG4gICAgICAgIGMgPSBNYXRoLmZsb29yKHYvMHg0MDAwMDAwKTtcbiAgICAgICAgd1tqKytdID0gdiYweDNmZmZmZmY7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgLy8gYW0yIGF2b2lkcyBhIGJpZyBtdWx0LWFuZC1leHRyYWN0IGNvbXBsZXRlbHkuXG4gICAgLy8gTWF4IGRpZ2l0IGJpdHMgc2hvdWxkIGJlIDw9IDMwIGJlY2F1c2Ugd2UgZG8gYml0d2lzZSBvcHNcbiAgICAvLyBvbiB2YWx1ZXMgdXAgdG8gMipoZHZhbHVlXjItaGR2YWx1ZS0xICg8IDJeMzEpXG4gICAgZnVuY3Rpb24gYW0yKGkseCx3LGosYyxuKSB7XG4gICAgICB2YXIgeGwgPSB4JjB4N2ZmZiwgeGggPSB4Pj4xNTtcbiAgICAgIHdoaWxlKC0tbiA+PSAwKSB7XG4gICAgICAgIHZhciBsID0gdGhpc1tpXSYweDdmZmY7XG4gICAgICAgIHZhciBoID0gdGhpc1tpKytdPj4xNTtcbiAgICAgICAgdmFyIG0gPSB4aCpsK2gqeGw7XG4gICAgICAgIGwgPSB4bCpsKygobSYweDdmZmYpPDwxNSkrd1tqXSsoYyYweDNmZmZmZmZmKTtcbiAgICAgICAgYyA9IChsPj4+MzApKyhtPj4+MTUpK3hoKmgrKGM+Pj4zMCk7XG4gICAgICAgIHdbaisrXSA9IGwmMHgzZmZmZmZmZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICAvLyBBbHRlcm5hdGVseSwgc2V0IG1heCBkaWdpdCBiaXRzIHRvIDI4IHNpbmNlIHNvbWVcbiAgICAvLyBicm93c2VycyBzbG93IGRvd24gd2hlbiBkZWFsaW5nIHdpdGggMzItYml0IG51bWJlcnMuXG4gICAgZnVuY3Rpb24gYW0zKGkseCx3LGosYyxuKSB7XG4gICAgICB2YXIgeGwgPSB4JjB4M2ZmZiwgeGggPSB4Pj4xNDtcbiAgICAgIHdoaWxlKC0tbiA+PSAwKSB7XG4gICAgICAgIHZhciBsID0gdGhpc1tpXSYweDNmZmY7XG4gICAgICAgIHZhciBoID0gdGhpc1tpKytdPj4xNDtcbiAgICAgICAgdmFyIG0gPSB4aCpsK2gqeGw7XG4gICAgICAgIGwgPSB4bCpsKygobSYweDNmZmYpPDwxNCkrd1tqXStjO1xuICAgICAgICBjID0gKGw+PjI4KSsobT4+MTQpK3hoKmg7XG4gICAgICAgIHdbaisrXSA9IGwmMHhmZmZmZmZmO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIHZhciBpbkJyb3dzZXIgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiO1xuICAgIGlmKGluQnJvd3NlciAmJiBqX2xtICYmIChuYXZpZ2F0b3IuYXBwTmFtZSA9PSBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiKSkge1xuICAgICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBhbTI7XG4gICAgICBkYml0cyA9IDMwO1xuICAgIH1cbiAgICBlbHNlIGlmKGluQnJvd3NlciAmJiBqX2xtICYmIChuYXZpZ2F0b3IuYXBwTmFtZSAhPSBcIk5ldHNjYXBlXCIpKSB7XG4gICAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbSA9IGFtMTtcbiAgICAgIGRiaXRzID0gMjY7XG4gICAgfVxuICAgIGVsc2UgeyAvLyBNb3ppbGxhL05ldHNjYXBlIHNlZW1zIHRvIHByZWZlciBhbTNcbiAgICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFtID0gYW0zO1xuICAgICAgZGJpdHMgPSAyODtcbiAgICB9XG5cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5EQiA9IGRiaXRzO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkRNID0gKCgxPDxkYml0cyktMSk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRFYgPSAoMTw8ZGJpdHMpO1xuXG4gICAgdmFyIEJJX0ZQID0gNTI7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRlYgPSBNYXRoLnBvdygyLEJJX0ZQKTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5GMSA9IEJJX0ZQLWRiaXRzO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkYyID0gMipkYml0cy1CSV9GUDtcblxuICAgIC8vIERpZ2l0IGNvbnZlcnNpb25zXG4gICAgdmFyIEJJX1JNID0gXCIwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIjtcbiAgICB2YXIgQklfUkMgPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgcnIsdnY7XG4gICAgcnIgPSBcIjBcIi5jaGFyQ29kZUF0KDApO1xuICAgIGZvcih2diA9IDA7IHZ2IDw9IDk7ICsrdnYpIEJJX1JDW3JyKytdID0gdnY7XG4gICAgcnIgPSBcImFcIi5jaGFyQ29kZUF0KDApO1xuICAgIGZvcih2diA9IDEwOyB2diA8IDM2OyArK3Z2KSBCSV9SQ1tycisrXSA9IHZ2O1xuICAgIHJyID0gXCJBXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAxMDsgdnYgPCAzNjsgKyt2dikgQklfUkNbcnIrK10gPSB2djtcblxuICAgIGZ1bmN0aW9uIGludDJjaGFyKG4pIHsgcmV0dXJuIEJJX1JNLmNoYXJBdChuKTsgfVxuICAgIGZ1bmN0aW9uIGludEF0KHMsaSkge1xuICAgICAgdmFyIGMgPSBCSV9SQ1tzLmNoYXJDb2RlQXQoaSldO1xuICAgICAgcmV0dXJuIChjPT1udWxsKT8tMTpjO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGNvcHkgdGhpcyB0byByXG4gICAgZnVuY3Rpb24gYm5wQ29weVRvKHIpIHtcbiAgICAgIGZvcih2YXIgaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkgcltpXSA9IHRoaXNbaV07XG4gICAgICByLnQgPSB0aGlzLnQ7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgc2V0IGZyb20gaW50ZWdlciB2YWx1ZSB4LCAtRFYgPD0geCA8IERWXG4gICAgZnVuY3Rpb24gYm5wRnJvbUludCh4KSB7XG4gICAgICB0aGlzLnQgPSAxO1xuICAgICAgdGhpcy5zID0gKHg8MCk/LTE6MDtcbiAgICAgIGlmKHggPiAwKSB0aGlzWzBdID0geDtcbiAgICAgIGVsc2UgaWYoeCA8IC0xKSB0aGlzWzBdID0geCt0aGlzLkRWO1xuICAgICAgZWxzZSB0aGlzLnQgPSAwO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBiaWdpbnQgaW5pdGlhbGl6ZWQgdG8gdmFsdWVcbiAgICBmdW5jdGlvbiBuYnYoaSkgeyB2YXIgciA9IG5iaSgpOyByLmZyb21JbnQoaSk7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBzZXQgZnJvbSBzdHJpbmcgYW5kIHJhZGl4XG4gICAgZnVuY3Rpb24gYm5wRnJvbVN0cmluZyhzLGIpIHtcbiAgICAgIHZhciBrO1xuICAgICAgaWYoYiA9PSAxNikgayA9IDQ7XG4gICAgICBlbHNlIGlmKGIgPT0gOCkgayA9IDM7XG4gICAgICBlbHNlIGlmKGIgPT0gMjU2KSBrID0gODsgLy8gYnl0ZSBhcnJheVxuICAgICAgZWxzZSBpZihiID09IDIpIGsgPSAxO1xuICAgICAgZWxzZSBpZihiID09IDMyKSBrID0gNTtcbiAgICAgIGVsc2UgaWYoYiA9PSA0KSBrID0gMjtcbiAgICAgIGVsc2UgeyB0aGlzLmZyb21SYWRpeChzLGIpOyByZXR1cm47IH1cbiAgICAgIHRoaXMudCA9IDA7XG4gICAgICB0aGlzLnMgPSAwO1xuICAgICAgdmFyIGkgPSBzLmxlbmd0aCwgbWkgPSBmYWxzZSwgc2ggPSAwO1xuICAgICAgd2hpbGUoLS1pID49IDApIHtcbiAgICAgICAgdmFyIHggPSAoaz09OCk/c1tpXSYweGZmOmludEF0KHMsaSk7XG4gICAgICAgIGlmKHggPCAwKSB7XG4gICAgICAgICAgaWYocy5jaGFyQXQoaSkgPT0gXCItXCIpIG1pID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtaSA9IGZhbHNlO1xuICAgICAgICBpZihzaCA9PSAwKVxuICAgICAgICAgIHRoaXNbdGhpcy50KytdID0geDtcbiAgICAgICAgZWxzZSBpZihzaCtrID4gdGhpcy5EQikge1xuICAgICAgICAgIHRoaXNbdGhpcy50LTFdIHw9ICh4JigoMTw8KHRoaXMuREItc2gpKS0xKSk8PHNoO1xuICAgICAgICAgIHRoaXNbdGhpcy50KytdID0gKHg+Pih0aGlzLkRCLXNoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXNbdGhpcy50LTFdIHw9IHg8PHNoO1xuICAgICAgICBzaCArPSBrO1xuICAgICAgICBpZihzaCA+PSB0aGlzLkRCKSBzaCAtPSB0aGlzLkRCO1xuICAgICAgfVxuICAgICAgaWYoayA9PSA4ICYmIChzWzBdJjB4ODApICE9IDApIHtcbiAgICAgICAgdGhpcy5zID0gLTE7XG4gICAgICAgIGlmKHNoID4gMCkgdGhpc1t0aGlzLnQtMV0gfD0gKCgxPDwodGhpcy5EQi1zaCkpLTEpPDxzaDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xhbXAoKTtcbiAgICAgIGlmKG1pKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcyx0aGlzKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjbGFtcCBvZmYgZXhjZXNzIGhpZ2ggd29yZHNcbiAgICBmdW5jdGlvbiBibnBDbGFtcCgpIHtcbiAgICAgIHZhciBjID0gdGhpcy5zJnRoaXMuRE07XG4gICAgICB3aGlsZSh0aGlzLnQgPiAwICYmIHRoaXNbdGhpcy50LTFdID09IGMpIC0tdGhpcy50O1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiBzdHJpbmcgcmVwcmVzZW50YXRpb24gaW4gZ2l2ZW4gcmFkaXhcbiAgICBmdW5jdGlvbiBiblRvU3RyaW5nKGIpIHtcbiAgICAgIGlmKHRoaXMucyA8IDApIHJldHVybiBcIi1cIit0aGlzLm5lZ2F0ZSgpLnRvU3RyaW5nKGIpO1xuICAgICAgdmFyIGs7XG4gICAgICBpZihiID09IDE2KSBrID0gNDtcbiAgICAgIGVsc2UgaWYoYiA9PSA4KSBrID0gMztcbiAgICAgIGVsc2UgaWYoYiA9PSAyKSBrID0gMTtcbiAgICAgIGVsc2UgaWYoYiA9PSAzMikgayA9IDU7XG4gICAgICBlbHNlIGlmKGIgPT0gNCkgayA9IDI7XG4gICAgICBlbHNlIHJldHVybiB0aGlzLnRvUmFkaXgoYik7XG4gICAgICB2YXIga20gPSAoMTw8ayktMSwgZCwgbSA9IGZhbHNlLCByID0gXCJcIiwgaSA9IHRoaXMudDtcbiAgICAgIHZhciBwID0gdGhpcy5EQi0oaSp0aGlzLkRCKSVrO1xuICAgICAgaWYoaS0tID4gMCkge1xuICAgICAgICBpZihwIDwgdGhpcy5EQiAmJiAoZCA9IHRoaXNbaV0+PnApID4gMCkgeyBtID0gdHJ1ZTsgciA9IGludDJjaGFyKGQpOyB9XG4gICAgICAgIHdoaWxlKGkgPj0gMCkge1xuICAgICAgICAgIGlmKHAgPCBrKSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0mKCgxPDxwKS0xKSk8PChrLXApO1xuICAgICAgICAgICAgZCB8PSB0aGlzWy0taV0+PihwKz10aGlzLkRCLWspO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXT4+KHAtPWspKSZrbTtcbiAgICAgICAgICAgIGlmKHAgPD0gMCkgeyBwICs9IHRoaXMuREI7IC0taTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihkID4gMCkgbSA9IHRydWU7XG4gICAgICAgICAgaWYobSkgciArPSBpbnQyY2hhcihkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG0/cjpcIjBcIjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSAtdGhpc1xuICAgIGZ1bmN0aW9uIGJuTmVnYXRlKCkgeyB2YXIgciA9IG5iaSgpOyBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcyxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHx0aGlzfFxuICAgIGZ1bmN0aW9uIGJuQWJzKCkgeyByZXR1cm4gKHRoaXMuczwwKT90aGlzLm5lZ2F0ZSgpOnRoaXM7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiArIGlmIHRoaXMgPiBhLCAtIGlmIHRoaXMgPCBhLCAwIGlmIGVxdWFsXG4gICAgZnVuY3Rpb24gYm5Db21wYXJlVG8oYSkge1xuICAgICAgdmFyIHIgPSB0aGlzLnMtYS5zO1xuICAgICAgaWYociAhPSAwKSByZXR1cm4gcjtcbiAgICAgIHZhciBpID0gdGhpcy50O1xuICAgICAgciA9IGktYS50O1xuICAgICAgaWYociAhPSAwKSByZXR1cm4gKHRoaXMuczwwKT8tcjpyO1xuICAgICAgd2hpbGUoLS1pID49IDApIGlmKChyPXRoaXNbaV0tYVtpXSkgIT0gMCkgcmV0dXJuIHI7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIGJpdCBsZW5ndGggb2YgdGhlIGludGVnZXIgeFxuICAgIGZ1bmN0aW9uIG5iaXRzKHgpIHtcbiAgICAgIHZhciByID0gMSwgdDtcbiAgICAgIGlmKCh0PXg+Pj4xNikgIT0gMCkgeyB4ID0gdDsgciArPSAxNjsgfVxuICAgICAgaWYoKHQ9eD4+OCkgIT0gMCkgeyB4ID0gdDsgciArPSA4OyB9XG4gICAgICBpZigodD14Pj40KSAhPSAwKSB7IHggPSB0OyByICs9IDQ7IH1cbiAgICAgIGlmKCh0PXg+PjIpICE9IDApIHsgeCA9IHQ7IHIgKz0gMjsgfVxuICAgICAgaWYoKHQ9eD4+MSkgIT0gMCkgeyB4ID0gdDsgciArPSAxOyB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gdGhlIG51bWJlciBvZiBiaXRzIGluIFwidGhpc1wiXG4gICAgZnVuY3Rpb24gYm5CaXRMZW5ndGgoKSB7XG4gICAgICBpZih0aGlzLnQgPD0gMCkgcmV0dXJuIDA7XG4gICAgICByZXR1cm4gdGhpcy5EQioodGhpcy50LTEpK25iaXRzKHRoaXNbdGhpcy50LTFdXih0aGlzLnMmdGhpcy5ETSkpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIDw8IG4qREJcbiAgICBmdW5jdGlvbiBibnBETFNoaWZ0VG8obixyKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGZvcihpID0gdGhpcy50LTE7IGkgPj0gMDsgLS1pKSByW2krbl0gPSB0aGlzW2ldO1xuICAgICAgZm9yKGkgPSBuLTE7IGkgPj0gMDsgLS1pKSByW2ldID0gMDtcbiAgICAgIHIudCA9IHRoaXMudCtuO1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzID4+IG4qREJcbiAgICBmdW5jdGlvbiBibnBEUlNoaWZ0VG8obixyKSB7XG4gICAgICBmb3IodmFyIGkgPSBuOyBpIDwgdGhpcy50OyArK2kpIHJbaS1uXSA9IHRoaXNbaV07XG4gICAgICByLnQgPSBNYXRoLm1heCh0aGlzLnQtbiwwKTtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA8PCBuXG4gICAgZnVuY3Rpb24gYm5wTFNoaWZ0VG8obixyKSB7XG4gICAgICB2YXIgYnMgPSBuJXRoaXMuREI7XG4gICAgICB2YXIgY2JzID0gdGhpcy5EQi1icztcbiAgICAgIHZhciBibSA9ICgxPDxjYnMpLTE7XG4gICAgICB2YXIgZHMgPSBNYXRoLmZsb29yKG4vdGhpcy5EQiksIGMgPSAodGhpcy5zPDxicykmdGhpcy5ETSwgaTtcbiAgICAgIGZvcihpID0gdGhpcy50LTE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHJbaStkcysxXSA9ICh0aGlzW2ldPj5jYnMpfGM7XG4gICAgICAgIGMgPSAodGhpc1tpXSZibSk8PGJzO1xuICAgICAgfVxuICAgICAgZm9yKGkgPSBkcy0xOyBpID49IDA7IC0taSkgcltpXSA9IDA7XG4gICAgICByW2RzXSA9IGM7XG4gICAgICByLnQgPSB0aGlzLnQrZHMrMTtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA+PiBuXG4gICAgZnVuY3Rpb24gYm5wUlNoaWZ0VG8obixyKSB7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgICB2YXIgZHMgPSBNYXRoLmZsb29yKG4vdGhpcy5EQik7XG4gICAgICBpZihkcyA+PSB0aGlzLnQpIHsgci50ID0gMDsgcmV0dXJuOyB9XG4gICAgICB2YXIgYnMgPSBuJXRoaXMuREI7XG4gICAgICB2YXIgY2JzID0gdGhpcy5EQi1icztcbiAgICAgIHZhciBibSA9ICgxPDxicyktMTtcbiAgICAgIHJbMF0gPSB0aGlzW2RzXT4+YnM7XG4gICAgICBmb3IodmFyIGkgPSBkcysxOyBpIDwgdGhpcy50OyArK2kpIHtcbiAgICAgICAgcltpLWRzLTFdIHw9ICh0aGlzW2ldJmJtKTw8Y2JzO1xuICAgICAgICByW2ktZHNdID0gdGhpc1tpXT4+YnM7XG4gICAgICB9XG4gICAgICBpZihicyA+IDApIHJbdGhpcy50LWRzLTFdIHw9ICh0aGlzLnMmYm0pPDxjYnM7XG4gICAgICByLnQgPSB0aGlzLnQtZHM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgLSBhXG4gICAgZnVuY3Rpb24gYm5wU3ViVG8oYSxyKSB7XG4gICAgICB2YXIgaSA9IDAsIGMgPSAwLCBtID0gTWF0aC5taW4oYS50LHRoaXMudCk7XG4gICAgICB3aGlsZShpIDwgbSkge1xuICAgICAgICBjICs9IHRoaXNbaV0tYVtpXTtcbiAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgfVxuICAgICAgaWYoYS50IDwgdGhpcy50KSB7XG4gICAgICAgIGMgLT0gYS5zO1xuICAgICAgICB3aGlsZShpIDwgdGhpcy50KSB7XG4gICAgICAgICAgYyArPSB0aGlzW2ldO1xuICAgICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICB9XG4gICAgICAgIGMgKz0gdGhpcy5zO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGMgKz0gdGhpcy5zO1xuICAgICAgICB3aGlsZShpIDwgYS50KSB7XG4gICAgICAgICAgYyAtPSBhW2ldO1xuICAgICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICB9XG4gICAgICAgIGMgLT0gYS5zO1xuICAgICAgfVxuICAgICAgci5zID0gKGM8MCk/LTE6MDtcbiAgICAgIGlmKGMgPCAtMSkgcltpKytdID0gdGhpcy5EVitjO1xuICAgICAgZWxzZSBpZihjID4gMCkgcltpKytdID0gYztcbiAgICAgIHIudCA9IGk7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgKiBhLCByICE9IHRoaXMsYSAoSEFDIDE0LjEyKVxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBmdW5jdGlvbiBibnBNdWx0aXBseVRvKGEscikge1xuICAgICAgdmFyIHggPSB0aGlzLmFicygpLCB5ID0gYS5hYnMoKTtcbiAgICAgIHZhciBpID0geC50O1xuICAgICAgci50ID0gaSt5LnQ7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkgcltpXSA9IDA7XG4gICAgICBmb3IoaSA9IDA7IGkgPCB5LnQ7ICsraSkgcltpK3gudF0gPSB4LmFtKDAseVtpXSxyLGksMCx4LnQpO1xuICAgICAgci5zID0gMDtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICAgIGlmKHRoaXMucyAhPSBhLnMpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhyLHIpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzXjIsIHIgIT0gdGhpcyAoSEFDIDE0LjE2KVxuICAgIGZ1bmN0aW9uIGJucFNxdWFyZVRvKHIpIHtcbiAgICAgIHZhciB4ID0gdGhpcy5hYnMoKTtcbiAgICAgIHZhciBpID0gci50ID0gMip4LnQ7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkgcltpXSA9IDA7XG4gICAgICBmb3IoaSA9IDA7IGkgPCB4LnQtMTsgKytpKSB7XG4gICAgICAgIHZhciBjID0geC5hbShpLHhbaV0sciwyKmksMCwxKTtcbiAgICAgICAgaWYoKHJbaSt4LnRdKz14LmFtKGkrMSwyKnhbaV0sciwyKmkrMSxjLHgudC1pLTEpKSA+PSB4LkRWKSB7XG4gICAgICAgICAgcltpK3gudF0gLT0geC5EVjtcbiAgICAgICAgICByW2kreC50KzFdID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoci50ID4gMCkgcltyLnQtMV0gKz0geC5hbShpLHhbaV0sciwyKmksMCwxKTtcbiAgICAgIHIucyA9IDA7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgZGl2aWRlIHRoaXMgYnkgbSwgcXVvdGllbnQgYW5kIHJlbWFpbmRlciB0byBxLCByIChIQUMgMTQuMjApXG4gICAgLy8gciAhPSBxLCB0aGlzICE9IG0uICBxIG9yIHIgbWF5IGJlIG51bGwuXG4gICAgZnVuY3Rpb24gYm5wRGl2UmVtVG8obSxxLHIpIHtcbiAgICAgIHZhciBwbSA9IG0uYWJzKCk7XG4gICAgICBpZihwbS50IDw9IDApIHJldHVybjtcbiAgICAgIHZhciBwdCA9IHRoaXMuYWJzKCk7XG4gICAgICBpZihwdC50IDwgcG0udCkge1xuICAgICAgICBpZihxICE9IG51bGwpIHEuZnJvbUludCgwKTtcbiAgICAgICAgaWYociAhPSBudWxsKSB0aGlzLmNvcHlUbyhyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYociA9PSBudWxsKSByID0gbmJpKCk7XG4gICAgICB2YXIgeSA9IG5iaSgpLCB0cyA9IHRoaXMucywgbXMgPSBtLnM7XG4gICAgICB2YXIgbnNoID0gdGhpcy5EQi1uYml0cyhwbVtwbS50LTFdKTsgICAvLyBub3JtYWxpemUgbW9kdWx1c1xuICAgICAgaWYobnNoID4gMCkgeyBwbS5sU2hpZnRUbyhuc2gseSk7IHB0LmxTaGlmdFRvKG5zaCxyKTsgfVxuICAgICAgZWxzZSB7IHBtLmNvcHlUbyh5KTsgcHQuY29weVRvKHIpOyB9XG4gICAgICB2YXIgeXMgPSB5LnQ7XG4gICAgICB2YXIgeTAgPSB5W3lzLTFdO1xuICAgICAgaWYoeTAgPT0gMCkgcmV0dXJuO1xuICAgICAgdmFyIHl0ID0geTAqKDE8PHRoaXMuRjEpKygoeXM+MSk/eVt5cy0yXT4+dGhpcy5GMjowKTtcbiAgICAgIHZhciBkMSA9IHRoaXMuRlYveXQsIGQyID0gKDE8PHRoaXMuRjEpL3l0LCBlID0gMTw8dGhpcy5GMjtcbiAgICAgIHZhciBpID0gci50LCBqID0gaS15cywgdCA9IChxPT1udWxsKT9uYmkoKTpxO1xuICAgICAgeS5kbFNoaWZ0VG8oaix0KTtcbiAgICAgIGlmKHIuY29tcGFyZVRvKHQpID49IDApIHtcbiAgICAgICAgcltyLnQrK10gPSAxO1xuICAgICAgICByLnN1YlRvKHQscik7XG4gICAgICB9XG4gICAgICBCaWdJbnRlZ2VyLk9ORS5kbFNoaWZ0VG8oeXMsdCk7XG4gICAgICB0LnN1YlRvKHkseSk7ICAvLyBcIm5lZ2F0aXZlXCIgeSBzbyB3ZSBjYW4gcmVwbGFjZSBzdWIgd2l0aCBhbSBsYXRlclxuICAgICAgd2hpbGUoeS50IDwgeXMpIHlbeS50KytdID0gMDtcbiAgICAgIHdoaWxlKC0taiA+PSAwKSB7XG4gICAgICAgIC8vIEVzdGltYXRlIHF1b3RpZW50IGRpZ2l0XG4gICAgICAgIHZhciBxZCA9IChyWy0taV09PXkwKT90aGlzLkRNOk1hdGguZmxvb3IocltpXSpkMSsocltpLTFdK2UpKmQyKTtcbiAgICAgICAgaWYoKHJbaV0rPXkuYW0oMCxxZCxyLGosMCx5cykpIDwgcWQpIHsgICAvLyBUcnkgaXQgb3V0XG4gICAgICAgICAgeS5kbFNoaWZ0VG8oaix0KTtcbiAgICAgICAgICByLnN1YlRvKHQscik7XG4gICAgICAgICAgd2hpbGUocltpXSA8IC0tcWQpIHIuc3ViVG8odCxyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYocSAhPSBudWxsKSB7XG4gICAgICAgIHIuZHJTaGlmdFRvKHlzLHEpO1xuICAgICAgICBpZih0cyAhPSBtcykgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHEscSk7XG4gICAgICB9XG4gICAgICByLnQgPSB5cztcbiAgICAgIHIuY2xhbXAoKTtcbiAgICAgIGlmKG5zaCA+IDApIHIuclNoaWZ0VG8obnNoLHIpOyAvLyBEZW5vcm1hbGl6ZSByZW1haW5kZXJcbiAgICAgIGlmKHRzIDwgMCkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHIscik7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyBtb2QgYVxuICAgIGZ1bmN0aW9uIGJuTW9kKGEpIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICB0aGlzLmFicygpLmRpdlJlbVRvKGEsbnVsbCxyKTtcbiAgICAgIGlmKHRoaXMucyA8IDAgJiYgci5jb21wYXJlVG8oQmlnSW50ZWdlci5aRVJPKSA+IDApIGEuc3ViVG8ocixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIE1vZHVsYXIgcmVkdWN0aW9uIHVzaW5nIFwiY2xhc3NpY1wiIGFsZ29yaXRobVxuICAgIGZ1bmN0aW9uIENsYXNzaWMobSkgeyB0aGlzLm0gPSBtOyB9XG4gICAgZnVuY3Rpb24gY0NvbnZlcnQoeCkge1xuICAgICAgaWYoeC5zIDwgMCB8fCB4LmNvbXBhcmVUbyh0aGlzLm0pID49IDApIHJldHVybiB4Lm1vZCh0aGlzLm0pO1xuICAgICAgZWxzZSByZXR1cm4geDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY1JldmVydCh4KSB7IHJldHVybiB4OyB9XG4gICAgZnVuY3Rpb24gY1JlZHVjZSh4KSB7IHguZGl2UmVtVG8odGhpcy5tLG51bGwseCk7IH1cbiAgICBmdW5jdGlvbiBjTXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IHRoaXMucmVkdWNlKHIpOyB9XG4gICAgZnVuY3Rpb24gY1NxclRvKHgscikgeyB4LnNxdWFyZVRvKHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgQ2xhc3NpYy5wcm90b3R5cGUuY29udmVydCA9IGNDb252ZXJ0O1xuICAgIENsYXNzaWMucHJvdG90eXBlLnJldmVydCA9IGNSZXZlcnQ7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUucmVkdWNlID0gY1JlZHVjZTtcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5tdWxUbyA9IGNNdWxUbztcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5zcXJUbyA9IGNTcXJUbztcblxuICAgIC8vIChwcm90ZWN0ZWQpIHJldHVybiBcIi0xL3RoaXMgJSAyXkRCXCI7IHVzZWZ1bCBmb3IgTW9udC4gcmVkdWN0aW9uXG4gICAgLy8ganVzdGlmaWNhdGlvbjpcbiAgICAvLyAgICAgICAgIHh5ID09IDEgKG1vZCBtKVxuICAgIC8vICAgICAgICAgeHkgPSAgMStrbVxuICAgIC8vICAgeHkoMi14eSkgPSAoMStrbSkoMS1rbSlcbiAgICAvLyB4W3koMi14eSldID0gMS1rXjJtXjJcbiAgICAvLyB4W3koMi14eSldID09IDEgKG1vZCBtXjIpXG4gICAgLy8gaWYgeSBpcyAxL3ggbW9kIG0sIHRoZW4geSgyLXh5KSBpcyAxL3ggbW9kIG1eMlxuICAgIC8vIHNob3VsZCByZWR1Y2UgeCBhbmQgeSgyLXh5KSBieSBtXjIgYXQgZWFjaCBzdGVwIHRvIGtlZXAgc2l6ZSBib3VuZGVkLlxuICAgIC8vIEpTIG11bHRpcGx5IFwib3ZlcmZsb3dzXCIgZGlmZmVyZW50bHkgZnJvbSBDL0MrKywgc28gY2FyZSBpcyBuZWVkZWQgaGVyZS5cbiAgICBmdW5jdGlvbiBibnBJbnZEaWdpdCgpIHtcbiAgICAgIGlmKHRoaXMudCA8IDEpIHJldHVybiAwO1xuICAgICAgdmFyIHggPSB0aGlzWzBdO1xuICAgICAgaWYoKHgmMSkgPT0gMCkgcmV0dXJuIDA7XG4gICAgICB2YXIgeSA9IHgmMzsgICAgICAgLy8geSA9PSAxL3ggbW9kIDJeMlxuICAgICAgeSA9ICh5KigyLSh4JjB4ZikqeSkpJjB4ZjsgLy8geSA9PSAxL3ggbW9kIDJeNFxuICAgICAgeSA9ICh5KigyLSh4JjB4ZmYpKnkpKSYweGZmOyAgIC8vIHkgPT0gMS94IG1vZCAyXjhcbiAgICAgIHkgPSAoeSooMi0oKCh4JjB4ZmZmZikqeSkmMHhmZmZmKSkpJjB4ZmZmZjsgICAgLy8geSA9PSAxL3ggbW9kIDJeMTZcbiAgICAgIC8vIGxhc3Qgc3RlcCAtIGNhbGN1bGF0ZSBpbnZlcnNlIG1vZCBEViBkaXJlY3RseTtcbiAgICAgIC8vIGFzc3VtZXMgMTYgPCBEQiA8PSAzMiBhbmQgYXNzdW1lcyBhYmlsaXR5IHRvIGhhbmRsZSA0OC1iaXQgaW50c1xuICAgICAgeSA9ICh5KigyLXgqeSV0aGlzLkRWKSkldGhpcy5EVjsgICAgICAgLy8geSA9PSAxL3ggbW9kIDJeZGJpdHNcbiAgICAgIC8vIHdlIHJlYWxseSB3YW50IHRoZSBuZWdhdGl2ZSBpbnZlcnNlLCBhbmQgLURWIDwgeSA8IERWXG4gICAgICByZXR1cm4gKHk+MCk/dGhpcy5EVi15Oi15O1xuICAgIH1cblxuICAgIC8vIE1vbnRnb21lcnkgcmVkdWN0aW9uXG4gICAgZnVuY3Rpb24gTW9udGdvbWVyeShtKSB7XG4gICAgICB0aGlzLm0gPSBtO1xuICAgICAgdGhpcy5tcCA9IG0uaW52RGlnaXQoKTtcbiAgICAgIHRoaXMubXBsID0gdGhpcy5tcCYweDdmZmY7XG4gICAgICB0aGlzLm1waCA9IHRoaXMubXA+PjE1O1xuICAgICAgdGhpcy51bSA9ICgxPDwobS5EQi0xNSkpLTE7XG4gICAgICB0aGlzLm10MiA9IDIqbS50O1xuICAgIH1cblxuICAgIC8vIHhSIG1vZCBtXG4gICAgZnVuY3Rpb24gbW9udENvbnZlcnQoeCkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIHguYWJzKCkuZGxTaGlmdFRvKHRoaXMubS50LHIpO1xuICAgICAgci5kaXZSZW1Ubyh0aGlzLm0sbnVsbCxyKTtcbiAgICAgIGlmKHgucyA8IDAgJiYgci5jb21wYXJlVG8oQmlnSW50ZWdlci5aRVJPKSA+IDApIHRoaXMubS5zdWJUbyhyLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8geC9SIG1vZCBtXG4gICAgZnVuY3Rpb24gbW9udFJldmVydCh4KSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgeC5jb3B5VG8ocik7XG4gICAgICB0aGlzLnJlZHVjZShyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIHggPSB4L1IgbW9kIG0gKEhBQyAxNC4zMilcbiAgICBmdW5jdGlvbiBtb250UmVkdWNlKHgpIHtcbiAgICAgIHdoaWxlKHgudCA8PSB0aGlzLm10MikgLy8gcGFkIHggc28gYW0gaGFzIGVub3VnaCByb29tIGxhdGVyXG4gICAgICAgIHhbeC50KytdID0gMDtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLm0udDsgKytpKSB7XG4gICAgICAgIC8vIGZhc3RlciB3YXkgb2YgY2FsY3VsYXRpbmcgdTAgPSB4W2ldKm1wIG1vZCBEVlxuICAgICAgICB2YXIgaiA9IHhbaV0mMHg3ZmZmO1xuICAgICAgICB2YXIgdTAgPSAoaip0aGlzLm1wbCsoKChqKnRoaXMubXBoKyh4W2ldPj4xNSkqdGhpcy5tcGwpJnRoaXMudW0pPDwxNSkpJnguRE07XG4gICAgICAgIC8vIHVzZSBhbSB0byBjb21iaW5lIHRoZSBtdWx0aXBseS1zaGlmdC1hZGQgaW50byBvbmUgY2FsbFxuICAgICAgICBqID0gaSt0aGlzLm0udDtcbiAgICAgICAgeFtqXSArPSB0aGlzLm0uYW0oMCx1MCx4LGksMCx0aGlzLm0udCk7XG4gICAgICAgIC8vIHByb3BhZ2F0ZSBjYXJyeVxuICAgICAgICB3aGlsZSh4W2pdID49IHguRFYpIHsgeFtqXSAtPSB4LkRWOyB4Wysral0rKzsgfVxuICAgICAgfVxuICAgICAgeC5jbGFtcCgpO1xuICAgICAgeC5kclNoaWZ0VG8odGhpcy5tLnQseCk7XG4gICAgICBpZih4LmNvbXBhcmVUbyh0aGlzLm0pID49IDApIHguc3ViVG8odGhpcy5tLHgpO1xuICAgIH1cblxuICAgIC8vIHIgPSBcInheMi9SIG1vZCBtXCI7IHggIT0gclxuICAgIGZ1bmN0aW9uIG1vbnRTcXJUbyh4LHIpIHsgeC5zcXVhcmVUbyhyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIC8vIHIgPSBcInh5L1IgbW9kIG1cIjsgeCx5ICE9IHJcbiAgICBmdW5jdGlvbiBtb250TXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5jb252ZXJ0ID0gbW9udENvbnZlcnQ7XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUucmV2ZXJ0ID0gbW9udFJldmVydDtcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5yZWR1Y2UgPSBtb250UmVkdWNlO1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLm11bFRvID0gbW9udE11bFRvO1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLnNxclRvID0gbW9udFNxclRvO1xuXG4gICAgLy8gKHByb3RlY3RlZCkgdHJ1ZSBpZmYgdGhpcyBpcyBldmVuXG4gICAgZnVuY3Rpb24gYm5wSXNFdmVuKCkgeyByZXR1cm4gKCh0aGlzLnQ+MCk/KHRoaXNbMF0mMSk6dGhpcy5zKSA9PSAwOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzXmUsIGUgPCAyXjMyLCBkb2luZyBzcXIgYW5kIG11bCB3aXRoIFwiclwiIChIQUMgMTQuNzkpXG4gICAgZnVuY3Rpb24gYm5wRXhwKGUseikge1xuICAgICAgaWYoZSA+IDB4ZmZmZmZmZmYgfHwgZSA8IDEpIHJldHVybiBCaWdJbnRlZ2VyLk9ORTtcbiAgICAgIHZhciByID0gbmJpKCksIHIyID0gbmJpKCksIGcgPSB6LmNvbnZlcnQodGhpcyksIGkgPSBuYml0cyhlKS0xO1xuICAgICAgZy5jb3B5VG8ocik7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkge1xuICAgICAgICB6LnNxclRvKHIscjIpO1xuICAgICAgICBpZigoZSYoMTw8aSkpID4gMCkgei5tdWxUbyhyMixnLHIpO1xuICAgICAgICBlbHNlIHsgdmFyIHQgPSByOyByID0gcjI7IHIyID0gdDsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHoucmV2ZXJ0KHIpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXNeZSAlIG0sIDAgPD0gZSA8IDJeMzJcbiAgICBmdW5jdGlvbiBibk1vZFBvd0ludChlLG0pIHtcbiAgICAgIHZhciB6O1xuICAgICAgaWYoZSA8IDI1NiB8fCBtLmlzRXZlbigpKSB6ID0gbmV3IENsYXNzaWMobSk7IGVsc2UgeiA9IG5ldyBNb250Z29tZXJ5KG0pO1xuICAgICAgcmV0dXJuIHRoaXMuZXhwKGUseik7XG4gICAgfVxuXG4gICAgLy8gcHJvdGVjdGVkXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29weVRvID0gYm5wQ29weVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21JbnQgPSBibnBGcm9tSW50O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21TdHJpbmcgPSBibnBGcm9tU3RyaW5nO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsYW1wID0gYm5wQ2xhbXA7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGxTaGlmdFRvID0gYm5wRExTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRyU2hpZnRUbyA9IGJucERSU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sU2hpZnRUbyA9IGJucExTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnJTaGlmdFRvID0gYm5wUlNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3ViVG8gPSBibnBTdWJUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseVRvID0gYm5wTXVsdGlwbHlUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmVUbyA9IGJucFNxdWFyZVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdlJlbVRvID0gYm5wRGl2UmVtVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaW52RGlnaXQgPSBibnBJbnZEaWdpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0V2ZW4gPSBibnBJc0V2ZW47XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZXhwID0gYm5wRXhwO1xuXG4gICAgLy8gcHVibGljXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9TdHJpbmcgPSBiblRvU3RyaW5nO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5lZ2F0ZSA9IGJuTmVnYXRlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFicyA9IGJuQWJzO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmVUbyA9IGJuQ29tcGFyZVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aCA9IGJuQml0TGVuZ3RoO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZCA9IGJuTW9kO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvd0ludCA9IGJuTW9kUG93SW50O1xuXG4gICAgLy8gXCJjb25zdGFudHNcIlxuICAgIEJpZ0ludGVnZXIuWkVSTyA9IG5idigwKTtcbiAgICBCaWdJbnRlZ2VyLk9ORSA9IG5idigxKTtcblxuICAgIC8vIENvcHlyaWdodCAoYykgMjAwNS0yMDA5ICBUb20gV3VcbiAgICAvLyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgIC8vIFNlZSBcIkxJQ0VOU0VcIiBmb3IgZGV0YWlscy5cblxuICAgIC8vIEV4dGVuZGVkIEphdmFTY3JpcHQgQk4gZnVuY3Rpb25zLCByZXF1aXJlZCBmb3IgUlNBIHByaXZhdGUgb3BzLlxuXG4gICAgLy8gVmVyc2lvbiAxLjE6IG5ldyBCaWdJbnRlZ2VyKFwiMFwiLCAxMCkgcmV0dXJucyBcInByb3BlclwiIHplcm9cbiAgICAvLyBWZXJzaW9uIDEuMjogc3F1YXJlKCkgQVBJLCBpc1Byb2JhYmxlUHJpbWUgZml4XG5cbiAgICAvLyAocHVibGljKVxuICAgIGZ1bmN0aW9uIGJuQ2xvbmUoKSB7IHZhciByID0gbmJpKCk7IHRoaXMuY29weVRvKHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHZhbHVlIGFzIGludGVnZXJcbiAgICBmdW5jdGlvbiBibkludFZhbHVlKCkge1xuICAgICAgaWYodGhpcy5zIDwgMCkge1xuICAgICAgICBpZih0aGlzLnQgPT0gMSkgcmV0dXJuIHRoaXNbMF0tdGhpcy5EVjtcbiAgICAgICAgZWxzZSBpZih0aGlzLnQgPT0gMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0aGlzLnQgPT0gMSkgcmV0dXJuIHRoaXNbMF07XG4gICAgICBlbHNlIGlmKHRoaXMudCA9PSAwKSByZXR1cm4gMDtcbiAgICAgIC8vIGFzc3VtZXMgMTYgPCBEQiA8IDMyXG4gICAgICByZXR1cm4gKCh0aGlzWzFdJigoMTw8KDMyLXRoaXMuREIpKS0xKSk8PHRoaXMuREIpfHRoaXNbMF07XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHZhbHVlIGFzIGJ5dGVcbiAgICBmdW5jdGlvbiBibkJ5dGVWYWx1ZSgpIHsgcmV0dXJuICh0aGlzLnQ9PTApP3RoaXMuczoodGhpc1swXTw8MjQpPj4yNDsgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHZhbHVlIGFzIHNob3J0IChhc3N1bWVzIERCPj0xNilcbiAgICBmdW5jdGlvbiBiblNob3J0VmFsdWUoKSB7IHJldHVybiAodGhpcy50PT0wKT90aGlzLnM6KHRoaXNbMF08PDE2KT4+MTY7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHJldHVybiB4IHMudC4gcl54IDwgRFZcbiAgICBmdW5jdGlvbiBibnBDaHVua1NpemUocikgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLkxOMip0aGlzLkRCL01hdGgubG9nKHIpKTsgfVxuXG4gICAgLy8gKHB1YmxpYykgMCBpZiB0aGlzID09IDAsIDEgaWYgdGhpcyA+IDBcbiAgICBmdW5jdGlvbiBiblNpZ051bSgpIHtcbiAgICAgIGlmKHRoaXMucyA8IDApIHJldHVybiAtMTtcbiAgICAgIGVsc2UgaWYodGhpcy50IDw9IDAgfHwgKHRoaXMudCA9PSAxICYmIHRoaXNbMF0gPD0gMCkpIHJldHVybiAwO1xuICAgICAgZWxzZSByZXR1cm4gMTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb252ZXJ0IHRvIHJhZGl4IHN0cmluZ1xuICAgIGZ1bmN0aW9uIGJucFRvUmFkaXgoYikge1xuICAgICAgaWYoYiA9PSBudWxsKSBiID0gMTA7XG4gICAgICBpZih0aGlzLnNpZ251bSgpID09IDAgfHwgYiA8IDIgfHwgYiA+IDM2KSByZXR1cm4gXCIwXCI7XG4gICAgICB2YXIgY3MgPSB0aGlzLmNodW5rU2l6ZShiKTtcbiAgICAgIHZhciBhID0gTWF0aC5wb3coYixjcyk7XG4gICAgICB2YXIgZCA9IG5idihhKSwgeSA9IG5iaSgpLCB6ID0gbmJpKCksIHIgPSBcIlwiO1xuICAgICAgdGhpcy5kaXZSZW1UbyhkLHkseik7XG4gICAgICB3aGlsZSh5LnNpZ251bSgpID4gMCkge1xuICAgICAgICByID0gKGErei5pbnRWYWx1ZSgpKS50b1N0cmluZyhiKS5zdWJzdHIoMSkgKyByO1xuICAgICAgICB5LmRpdlJlbVRvKGQseSx6KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB6LmludFZhbHVlKCkudG9TdHJpbmcoYikgKyByO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGNvbnZlcnQgZnJvbSByYWRpeCBzdHJpbmdcbiAgICBmdW5jdGlvbiBibnBGcm9tUmFkaXgocyxiKSB7XG4gICAgICB0aGlzLmZyb21JbnQoMCk7XG4gICAgICBpZihiID09IG51bGwpIGIgPSAxMDtcbiAgICAgIHZhciBjcyA9IHRoaXMuY2h1bmtTaXplKGIpO1xuICAgICAgdmFyIGQgPSBNYXRoLnBvdyhiLGNzKSwgbWkgPSBmYWxzZSwgaiA9IDAsIHcgPSAwO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHggPSBpbnRBdChzLGkpO1xuICAgICAgICBpZih4IDwgMCkge1xuICAgICAgICAgIGlmKHMuY2hhckF0KGkpID09IFwiLVwiICYmIHRoaXMuc2lnbnVtKCkgPT0gMCkgbWkgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHcgPSBiKncreDtcbiAgICAgICAgaWYoKytqID49IGNzKSB7XG4gICAgICAgICAgdGhpcy5kTXVsdGlwbHkoZCk7XG4gICAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KHcsMCk7XG4gICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgdyA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGogPiAwKSB7XG4gICAgICAgIHRoaXMuZE11bHRpcGx5KE1hdGgucG93KGIsaikpO1xuICAgICAgICB0aGlzLmRBZGRPZmZzZXQodywwKTtcbiAgICAgIH1cbiAgICAgIGlmKG1pKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcyx0aGlzKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBhbHRlcm5hdGUgY29uc3RydWN0b3JcbiAgICBmdW5jdGlvbiBibnBGcm9tTnVtYmVyKGEsYixjKSB7XG4gICAgICBpZihcIm51bWJlclwiID09IHR5cGVvZiBiKSB7XG4gICAgICAgIC8vIG5ldyBCaWdJbnRlZ2VyKGludCxpbnQsUk5HKVxuICAgICAgICBpZihhIDwgMikgdGhpcy5mcm9tSW50KDEpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZyb21OdW1iZXIoYSxjKTtcbiAgICAgICAgICBpZighdGhpcy50ZXN0Qml0KGEtMSkpICAgIC8vIGZvcmNlIE1TQiBzZXRcbiAgICAgICAgICAgIHRoaXMuYml0d2lzZVRvKEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChhLTEpLG9wX29yLHRoaXMpO1xuICAgICAgICAgIGlmKHRoaXMuaXNFdmVuKCkpIHRoaXMuZEFkZE9mZnNldCgxLDApOyAvLyBmb3JjZSBvZGRcbiAgICAgICAgICB3aGlsZSghdGhpcy5pc1Byb2JhYmxlUHJpbWUoYikpIHtcbiAgICAgICAgICAgIHRoaXMuZEFkZE9mZnNldCgyLDApO1xuICAgICAgICAgICAgaWYodGhpcy5iaXRMZW5ndGgoKSA+IGEpIHRoaXMuc3ViVG8oQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KGEtMSksdGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gbmV3IEJpZ0ludGVnZXIoaW50LFJORylcbiAgICAgICAgdmFyIHggPSBuZXcgQXJyYXkoKSwgdCA9IGEmNztcbiAgICAgICAgeC5sZW5ndGggPSAoYT4+MykrMTtcbiAgICAgICAgYi5uZXh0Qnl0ZXMoeCk7XG4gICAgICAgIGlmKHQgPiAwKSB4WzBdICY9ICgoMTw8dCktMSk7IGVsc2UgeFswXSA9IDA7XG4gICAgICAgIHRoaXMuZnJvbVN0cmluZyh4LDI1Nik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgY29udmVydCB0byBiaWdlbmRpYW4gYnl0ZSBhcnJheVxuICAgIGZ1bmN0aW9uIGJuVG9CeXRlQXJyYXkoKSB7XG4gICAgICB2YXIgaSA9IHRoaXMudCwgciA9IG5ldyBBcnJheSgpO1xuICAgICAgclswXSA9IHRoaXMucztcbiAgICAgIHZhciBwID0gdGhpcy5EQi0oaSp0aGlzLkRCKSU4LCBkLCBrID0gMDtcbiAgICAgIGlmKGktLSA+IDApIHtcbiAgICAgICAgaWYocCA8IHRoaXMuREIgJiYgKGQgPSB0aGlzW2ldPj5wKSAhPSAodGhpcy5zJnRoaXMuRE0pPj5wKVxuICAgICAgICAgIHJbaysrXSA9IGR8KHRoaXMuczw8KHRoaXMuREItcCkpO1xuICAgICAgICB3aGlsZShpID49IDApIHtcbiAgICAgICAgICBpZihwIDwgOCkge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldJigoMTw8cCktMSkpPDwoOC1wKTtcbiAgICAgICAgICAgIGQgfD0gdGhpc1stLWldPj4ocCs9dGhpcy5EQi04KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0+PihwLT04KSkmMHhmZjtcbiAgICAgICAgICAgIGlmKHAgPD0gMCkgeyBwICs9IHRoaXMuREI7IC0taTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZigoZCYweDgwKSAhPSAwKSBkIHw9IC0yNTY7XG4gICAgICAgICAgaWYoayA9PSAwICYmICh0aGlzLnMmMHg4MCkgIT0gKGQmMHg4MCkpICsraztcbiAgICAgICAgICBpZihrID4gMCB8fCBkICE9IHRoaXMucykgcltrKytdID0gZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYm5FcXVhbHMoYSkgeyByZXR1cm4odGhpcy5jb21wYXJlVG8oYSk9PTApOyB9XG4gICAgZnVuY3Rpb24gYm5NaW4oYSkgeyByZXR1cm4odGhpcy5jb21wYXJlVG8oYSk8MCk/dGhpczphOyB9XG4gICAgZnVuY3Rpb24gYm5NYXgoYSkgeyByZXR1cm4odGhpcy5jb21wYXJlVG8oYSk+MCk/dGhpczphOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyBvcCBhIChiaXR3aXNlKVxuICAgIGZ1bmN0aW9uIGJucEJpdHdpc2VUbyhhLG9wLHIpIHtcbiAgICAgIHZhciBpLCBmLCBtID0gTWF0aC5taW4oYS50LHRoaXMudCk7XG4gICAgICBmb3IoaSA9IDA7IGkgPCBtOyArK2kpIHJbaV0gPSBvcCh0aGlzW2ldLGFbaV0pO1xuICAgICAgaWYoYS50IDwgdGhpcy50KSB7XG4gICAgICAgIGYgPSBhLnMmdGhpcy5ETTtcbiAgICAgICAgZm9yKGkgPSBtOyBpIDwgdGhpcy50OyArK2kpIHJbaV0gPSBvcCh0aGlzW2ldLGYpO1xuICAgICAgICByLnQgPSB0aGlzLnQ7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZiA9IHRoaXMucyZ0aGlzLkRNO1xuICAgICAgICBmb3IoaSA9IG07IGkgPCBhLnQ7ICsraSkgcltpXSA9IG9wKGYsYVtpXSk7XG4gICAgICAgIHIudCA9IGEudDtcbiAgICAgIH1cbiAgICAgIHIucyA9IG9wKHRoaXMucyxhLnMpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgJiBhXG4gICAgZnVuY3Rpb24gb3BfYW5kKHgseSkgeyByZXR1cm4geCZ5OyB9XG4gICAgZnVuY3Rpb24gYm5BbmQoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmJpdHdpc2VUbyhhLG9wX2FuZCxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgfCBhXG4gICAgZnVuY3Rpb24gb3Bfb3IoeCx5KSB7IHJldHVybiB4fHk7IH1cbiAgICBmdW5jdGlvbiBibk9yKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF9vcixyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgXiBhXG4gICAgZnVuY3Rpb24gb3BfeG9yKHgseSkgeyByZXR1cm4geF55OyB9XG4gICAgZnVuY3Rpb24gYm5Yb3IoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmJpdHdpc2VUbyhhLG9wX3hvcixyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgJiB+YVxuICAgIGZ1bmN0aW9uIG9wX2FuZG5vdCh4LHkpIHsgcmV0dXJuIHgmfnk7IH1cbiAgICBmdW5jdGlvbiBibkFuZE5vdChhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3BfYW5kbm90LHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgfnRoaXNcbiAgICBmdW5jdGlvbiBibk5vdCgpIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy50OyArK2kpIHJbaV0gPSB0aGlzLkRNJn50aGlzW2ldO1xuICAgICAgci50ID0gdGhpcy50O1xuICAgICAgci5zID0gfnRoaXMucztcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgPDwgblxuICAgIGZ1bmN0aW9uIGJuU2hpZnRMZWZ0KG4pIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICBpZihuIDwgMCkgdGhpcy5yU2hpZnRUbygtbixyKTsgZWxzZSB0aGlzLmxTaGlmdFRvKG4scik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzID4+IG5cbiAgICBmdW5jdGlvbiBiblNoaWZ0UmlnaHQobikge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIGlmKG4gPCAwKSB0aGlzLmxTaGlmdFRvKC1uLHIpOyBlbHNlIHRoaXMuclNoaWZ0VG8obixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBpbmRleCBvZiBsb3dlc3QgMS1iaXQgaW4geCwgeCA8IDJeMzFcbiAgICBmdW5jdGlvbiBsYml0KHgpIHtcbiAgICAgIGlmKHggPT0gMCkgcmV0dXJuIC0xO1xuICAgICAgdmFyIHIgPSAwO1xuICAgICAgaWYoKHgmMHhmZmZmKSA9PSAwKSB7IHggPj49IDE2OyByICs9IDE2OyB9XG4gICAgICBpZigoeCYweGZmKSA9PSAwKSB7IHggPj49IDg7IHIgKz0gODsgfVxuICAgICAgaWYoKHgmMHhmKSA9PSAwKSB7IHggPj49IDQ7IHIgKz0gNDsgfVxuICAgICAgaWYoKHgmMykgPT0gMCkgeyB4ID4+PSAyOyByICs9IDI7IH1cbiAgICAgIGlmKCh4JjEpID09IDApICsrcjtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybnMgaW5kZXggb2YgbG93ZXN0IDEtYml0IChvciAtMSBpZiBub25lKVxuICAgIGZ1bmN0aW9uIGJuR2V0TG93ZXN0U2V0Qml0KCkge1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudDsgKytpKVxuICAgICAgICBpZih0aGlzW2ldICE9IDApIHJldHVybiBpKnRoaXMuREIrbGJpdCh0aGlzW2ldKTtcbiAgICAgIGlmKHRoaXMucyA8IDApIHJldHVybiB0aGlzLnQqdGhpcy5EQjtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gbnVtYmVyIG9mIDEgYml0cyBpbiB4XG4gICAgZnVuY3Rpb24gY2JpdCh4KSB7XG4gICAgICB2YXIgciA9IDA7XG4gICAgICB3aGlsZSh4ICE9IDApIHsgeCAmPSB4LTE7ICsrcjsgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIG51bWJlciBvZiBzZXQgYml0c1xuICAgIGZ1bmN0aW9uIGJuQml0Q291bnQoKSB7XG4gICAgICB2YXIgciA9IDAsIHggPSB0aGlzLnMmdGhpcy5ETTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSkgciArPSBjYml0KHRoaXNbaV1eeCk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0cnVlIGlmZiBudGggYml0IGlzIHNldFxuICAgIGZ1bmN0aW9uIGJuVGVzdEJpdChuKSB7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3Iobi90aGlzLkRCKTtcbiAgICAgIGlmKGogPj0gdGhpcy50KSByZXR1cm4odGhpcy5zIT0wKTtcbiAgICAgIHJldHVybigodGhpc1tqXSYoMTw8KG4ldGhpcy5EQikpKSE9MCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyBvcCAoMTw8bilcbiAgICBmdW5jdGlvbiBibnBDaGFuZ2VCaXQobixvcCkge1xuICAgICAgdmFyIHIgPSBCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQobik7XG4gICAgICB0aGlzLmJpdHdpc2VUbyhyLG9wLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyB8ICgxPDxuKVxuICAgIGZ1bmN0aW9uIGJuU2V0Qml0KG4pIHsgcmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sb3Bfb3IpOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICYgfigxPDxuKVxuICAgIGZ1bmN0aW9uIGJuQ2xlYXJCaXQobikgeyByZXR1cm4gdGhpcy5jaGFuZ2VCaXQobixvcF9hbmRub3QpOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIF4gKDE8PG4pXG4gICAgZnVuY3Rpb24gYm5GbGlwQml0KG4pIHsgcmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sb3BfeG9yKTsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgKyBhXG4gICAgZnVuY3Rpb24gYm5wQWRkVG8oYSxyKSB7XG4gICAgICB2YXIgaSA9IDAsIGMgPSAwLCBtID0gTWF0aC5taW4oYS50LHRoaXMudCk7XG4gICAgICB3aGlsZShpIDwgbSkge1xuICAgICAgICBjICs9IHRoaXNbaV0rYVtpXTtcbiAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgfVxuICAgICAgaWYoYS50IDwgdGhpcy50KSB7XG4gICAgICAgIGMgKz0gYS5zO1xuICAgICAgICB3aGlsZShpIDwgdGhpcy50KSB7XG4gICAgICAgICAgYyArPSB0aGlzW2ldO1xuICAgICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICB9XG4gICAgICAgIGMgKz0gdGhpcy5zO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGMgKz0gdGhpcy5zO1xuICAgICAgICB3aGlsZShpIDwgYS50KSB7XG4gICAgICAgICAgYyArPSBhW2ldO1xuICAgICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICB9XG4gICAgICAgIGMgKz0gYS5zO1xuICAgICAgfVxuICAgICAgci5zID0gKGM8MCk/LTE6MDtcbiAgICAgIGlmKGMgPiAwKSByW2krK10gPSBjO1xuICAgICAgZWxzZSBpZihjIDwgLTEpIHJbaSsrXSA9IHRoaXMuRFYrYztcbiAgICAgIHIudCA9IGk7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyArIGFcbiAgICBmdW5jdGlvbiBibkFkZChhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYWRkVG8oYSxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgLSBhXG4gICAgZnVuY3Rpb24gYm5TdWJ0cmFjdChhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuc3ViVG8oYSxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgKiBhXG4gICAgZnVuY3Rpb24gYm5NdWx0aXBseShhKSB7IHZhciByID0gbmJpKCk7IHRoaXMubXVsdGlwbHlUbyhhLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpc14yXG4gICAgZnVuY3Rpb24gYm5TcXVhcmUoKSB7IHZhciByID0gbmJpKCk7IHRoaXMuc3F1YXJlVG8ocik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIC8gYVxuICAgIGZ1bmN0aW9uIGJuRGl2aWRlKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5kaXZSZW1UbyhhLHIsbnVsbCk7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICUgYVxuICAgIGZ1bmN0aW9uIGJuUmVtYWluZGVyKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5kaXZSZW1UbyhhLG51bGwscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSBbdGhpcy9hLHRoaXMlYV1cbiAgICBmdW5jdGlvbiBibkRpdmlkZUFuZFJlbWFpbmRlcihhKSB7XG4gICAgICB2YXIgcSA9IG5iaSgpLCByID0gbmJpKCk7XG4gICAgICB0aGlzLmRpdlJlbVRvKGEscSxyKTtcbiAgICAgIHJldHVybiBuZXcgQXJyYXkocSxyKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzICo9IG4sIHRoaXMgPj0gMCwgMSA8IG4gPCBEVlxuICAgIGZ1bmN0aW9uIGJucERNdWx0aXBseShuKSB7XG4gICAgICB0aGlzW3RoaXMudF0gPSB0aGlzLmFtKDAsbi0xLHRoaXMsMCwwLHRoaXMudCk7XG4gICAgICArK3RoaXMudDtcbiAgICAgIHRoaXMuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzICs9IG4gPDwgdyB3b3JkcywgdGhpcyA+PSAwXG4gICAgZnVuY3Rpb24gYm5wREFkZE9mZnNldChuLHcpIHtcbiAgICAgIGlmKG4gPT0gMCkgcmV0dXJuO1xuICAgICAgd2hpbGUodGhpcy50IDw9IHcpIHRoaXNbdGhpcy50KytdID0gMDtcbiAgICAgIHRoaXNbd10gKz0gbjtcbiAgICAgIHdoaWxlKHRoaXNbd10gPj0gdGhpcy5EVikge1xuICAgICAgICB0aGlzW3ddIC09IHRoaXMuRFY7XG4gICAgICAgIGlmKCsrdyA+PSB0aGlzLnQpIHRoaXNbdGhpcy50KytdID0gMDtcbiAgICAgICAgKyt0aGlzW3ddO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEEgXCJudWxsXCIgcmVkdWNlclxuICAgIGZ1bmN0aW9uIE51bGxFeHAoKSB7fVxuICAgIGZ1bmN0aW9uIG5Ob3AoeCkgeyByZXR1cm4geDsgfVxuICAgIGZ1bmN0aW9uIG5NdWxUbyh4LHkscikgeyB4Lm11bHRpcGx5VG8oeSxyKTsgfVxuICAgIGZ1bmN0aW9uIG5TcXJUbyh4LHIpIHsgeC5zcXVhcmVUbyhyKTsgfVxuXG4gICAgTnVsbEV4cC5wcm90b3R5cGUuY29udmVydCA9IG5Ob3A7XG4gICAgTnVsbEV4cC5wcm90b3R5cGUucmV2ZXJ0ID0gbk5vcDtcbiAgICBOdWxsRXhwLnByb3RvdHlwZS5tdWxUbyA9IG5NdWxUbztcbiAgICBOdWxsRXhwLnByb3RvdHlwZS5zcXJUbyA9IG5TcXJUbztcblxuICAgIC8vIChwdWJsaWMpIHRoaXNeZVxuICAgIGZ1bmN0aW9uIGJuUG93KGUpIHsgcmV0dXJuIHRoaXMuZXhwKGUsbmV3IE51bGxFeHAoKSk7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSBsb3dlciBuIHdvcmRzIG9mIFwidGhpcyAqIGFcIiwgYS50IDw9IG5cbiAgICAvLyBcInRoaXNcIiBzaG91bGQgYmUgdGhlIGxhcmdlciBvbmUgaWYgYXBwcm9wcmlhdGUuXG4gICAgZnVuY3Rpb24gYm5wTXVsdGlwbHlMb3dlclRvKGEsbixyKSB7XG4gICAgICB2YXIgaSA9IE1hdGgubWluKHRoaXMudCthLnQsbik7XG4gICAgICByLnMgPSAwOyAvLyBhc3N1bWVzIGEsdGhpcyA+PSAwXG4gICAgICByLnQgPSBpO1xuICAgICAgd2hpbGUoaSA+IDApIHJbLS1pXSA9IDA7XG4gICAgICB2YXIgajtcbiAgICAgIGZvcihqID0gci50LXRoaXMudDsgaSA8IGo7ICsraSkgcltpK3RoaXMudF0gPSB0aGlzLmFtKDAsYVtpXSxyLGksMCx0aGlzLnQpO1xuICAgICAgZm9yKGogPSBNYXRoLm1pbihhLnQsbik7IGkgPCBqOyArK2kpIHRoaXMuYW0oMCxhW2ldLHIsaSwwLG4taSk7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IFwidGhpcyAqIGFcIiB3aXRob3V0IGxvd2VyIG4gd29yZHMsIG4gPiAwXG4gICAgLy8gXCJ0aGlzXCIgc2hvdWxkIGJlIHRoZSBsYXJnZXIgb25lIGlmIGFwcHJvcHJpYXRlLlxuICAgIGZ1bmN0aW9uIGJucE11bHRpcGx5VXBwZXJUbyhhLG4scikge1xuICAgICAgLS1uO1xuICAgICAgdmFyIGkgPSByLnQgPSB0aGlzLnQrYS50LW47XG4gICAgICByLnMgPSAwOyAvLyBhc3N1bWVzIGEsdGhpcyA+PSAwXG4gICAgICB3aGlsZSgtLWkgPj0gMCkgcltpXSA9IDA7XG4gICAgICBmb3IoaSA9IE1hdGgubWF4KG4tdGhpcy50LDApOyBpIDwgYS50OyArK2kpXG4gICAgICAgIHJbdGhpcy50K2ktbl0gPSB0aGlzLmFtKG4taSxhW2ldLHIsMCwwLHRoaXMudCtpLW4pO1xuICAgICAgci5jbGFtcCgpO1xuICAgICAgci5kclNoaWZ0VG8oMSxyKTtcbiAgICB9XG5cbiAgICAvLyBCYXJyZXR0IG1vZHVsYXIgcmVkdWN0aW9uXG4gICAgZnVuY3Rpb24gQmFycmV0dChtKSB7XG4gICAgICAvLyBzZXR1cCBCYXJyZXR0XG4gICAgICB0aGlzLnIyID0gbmJpKCk7XG4gICAgICB0aGlzLnEzID0gbmJpKCk7XG4gICAgICBCaWdJbnRlZ2VyLk9ORS5kbFNoaWZ0VG8oMiptLnQsdGhpcy5yMik7XG4gICAgICB0aGlzLm11ID0gdGhpcy5yMi5kaXZpZGUobSk7XG4gICAgICB0aGlzLm0gPSBtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJhcnJldHRDb252ZXJ0KHgpIHtcbiAgICAgIGlmKHgucyA8IDAgfHwgeC50ID4gMip0aGlzLm0udCkgcmV0dXJuIHgubW9kKHRoaXMubSk7XG4gICAgICBlbHNlIGlmKHguY29tcGFyZVRvKHRoaXMubSkgPCAwKSByZXR1cm4geDtcbiAgICAgIGVsc2UgeyB2YXIgciA9IG5iaSgpOyB4LmNvcHlUbyhyKTsgdGhpcy5yZWR1Y2Uocik7IHJldHVybiByOyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmFycmV0dFJldmVydCh4KSB7IHJldHVybiB4OyB9XG5cbiAgICAvLyB4ID0geCBtb2QgbSAoSEFDIDE0LjQyKVxuICAgIGZ1bmN0aW9uIGJhcnJldHRSZWR1Y2UoeCkge1xuICAgICAgeC5kclNoaWZ0VG8odGhpcy5tLnQtMSx0aGlzLnIyKTtcbiAgICAgIGlmKHgudCA+IHRoaXMubS50KzEpIHsgeC50ID0gdGhpcy5tLnQrMTsgeC5jbGFtcCgpOyB9XG4gICAgICB0aGlzLm11Lm11bHRpcGx5VXBwZXJUbyh0aGlzLnIyLHRoaXMubS50KzEsdGhpcy5xMyk7XG4gICAgICB0aGlzLm0ubXVsdGlwbHlMb3dlclRvKHRoaXMucTMsdGhpcy5tLnQrMSx0aGlzLnIyKTtcbiAgICAgIHdoaWxlKHguY29tcGFyZVRvKHRoaXMucjIpIDwgMCkgeC5kQWRkT2Zmc2V0KDEsdGhpcy5tLnQrMSk7XG4gICAgICB4LnN1YlRvKHRoaXMucjIseCk7XG4gICAgICB3aGlsZSh4LmNvbXBhcmVUbyh0aGlzLm0pID49IDApIHguc3ViVG8odGhpcy5tLHgpO1xuICAgIH1cblxuICAgIC8vIHIgPSB4XjIgbW9kIG07IHggIT0gclxuICAgIGZ1bmN0aW9uIGJhcnJldHRTcXJUbyh4LHIpIHsgeC5zcXVhcmVUbyhyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIC8vIHIgPSB4KnkgbW9kIG07IHgseSAhPSByXG4gICAgZnVuY3Rpb24gYmFycmV0dE11bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgQmFycmV0dC5wcm90b3R5cGUuY29udmVydCA9IGJhcnJldHRDb252ZXJ0O1xuICAgIEJhcnJldHQucHJvdG90eXBlLnJldmVydCA9IGJhcnJldHRSZXZlcnQ7XG4gICAgQmFycmV0dC5wcm90b3R5cGUucmVkdWNlID0gYmFycmV0dFJlZHVjZTtcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5tdWxUbyA9IGJhcnJldHRNdWxUbztcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5zcXJUbyA9IGJhcnJldHRTcXJUbztcblxuICAgIC8vIChwdWJsaWMpIHRoaXNeZSAlIG0gKEhBQyAxNC44NSlcbiAgICBmdW5jdGlvbiBibk1vZFBvdyhlLG0pIHtcbiAgICAgIHZhciBpID0gZS5iaXRMZW5ndGgoKSwgaywgciA9IG5idigxKSwgejtcbiAgICAgIGlmKGkgPD0gMCkgcmV0dXJuIHI7XG4gICAgICBlbHNlIGlmKGkgPCAxOCkgayA9IDE7XG4gICAgICBlbHNlIGlmKGkgPCA0OCkgayA9IDM7XG4gICAgICBlbHNlIGlmKGkgPCAxNDQpIGsgPSA0O1xuICAgICAgZWxzZSBpZihpIDwgNzY4KSBrID0gNTtcbiAgICAgIGVsc2UgayA9IDY7XG4gICAgICBpZihpIDwgOClcbiAgICAgICAgeiA9IG5ldyBDbGFzc2ljKG0pO1xuICAgICAgZWxzZSBpZihtLmlzRXZlbigpKVxuICAgICAgICB6ID0gbmV3IEJhcnJldHQobSk7XG4gICAgICBlbHNlXG4gICAgICAgIHogPSBuZXcgTW9udGdvbWVyeShtKTtcblxuICAgICAgLy8gcHJlY29tcHV0YXRpb25cbiAgICAgIHZhciBnID0gbmV3IEFycmF5KCksIG4gPSAzLCBrMSA9IGstMSwga20gPSAoMTw8ayktMTtcbiAgICAgIGdbMV0gPSB6LmNvbnZlcnQodGhpcyk7XG4gICAgICBpZihrID4gMSkge1xuICAgICAgICB2YXIgZzIgPSBuYmkoKTtcbiAgICAgICAgei5zcXJUbyhnWzFdLGcyKTtcbiAgICAgICAgd2hpbGUobiA8PSBrbSkge1xuICAgICAgICAgIGdbbl0gPSBuYmkoKTtcbiAgICAgICAgICB6Lm11bFRvKGcyLGdbbi0yXSxnW25dKTtcbiAgICAgICAgICBuICs9IDI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGogPSBlLnQtMSwgdywgaXMxID0gdHJ1ZSwgcjIgPSBuYmkoKSwgdDtcbiAgICAgIGkgPSBuYml0cyhlW2pdKS0xO1xuICAgICAgd2hpbGUoaiA+PSAwKSB7XG4gICAgICAgIGlmKGkgPj0gazEpIHcgPSAoZVtqXT4+KGktazEpKSZrbTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdyA9IChlW2pdJigoMTw8KGkrMSkpLTEpKTw8KGsxLWkpO1xuICAgICAgICAgIGlmKGogPiAwKSB3IHw9IGVbai0xXT4+KHRoaXMuREIraS1rMSk7XG4gICAgICAgIH1cblxuICAgICAgICBuID0gaztcbiAgICAgICAgd2hpbGUoKHcmMSkgPT0gMCkgeyB3ID4+PSAxOyAtLW47IH1cbiAgICAgICAgaWYoKGkgLT0gbikgPCAwKSB7IGkgKz0gdGhpcy5EQjsgLS1qOyB9XG4gICAgICAgIGlmKGlzMSkgeyAgICAvLyByZXQgPT0gMSwgZG9uJ3QgYm90aGVyIHNxdWFyaW5nIG9yIG11bHRpcGx5aW5nIGl0XG4gICAgICAgICAgZ1t3XS5jb3B5VG8ocik7XG4gICAgICAgICAgaXMxID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgd2hpbGUobiA+IDEpIHsgei5zcXJUbyhyLHIyKTsgei5zcXJUbyhyMixyKTsgbiAtPSAyOyB9XG4gICAgICAgICAgaWYobiA+IDApIHouc3FyVG8ocixyMik7IGVsc2UgeyB0ID0gcjsgciA9IHIyOyByMiA9IHQ7IH1cbiAgICAgICAgICB6Lm11bFRvKHIyLGdbd10scik7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZShqID49IDAgJiYgKGVbal0mKDE8PGkpKSA9PSAwKSB7XG4gICAgICAgICAgei5zcXJUbyhyLHIyKTsgdCA9IHI7IHIgPSByMjsgcjIgPSB0O1xuICAgICAgICAgIGlmKC0taSA8IDApIHsgaSA9IHRoaXMuREItMTsgLS1qOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB6LnJldmVydChyKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSBnY2QodGhpcyxhKSAoSEFDIDE0LjU0KVxuICAgIGZ1bmN0aW9uIGJuR0NEKGEpIHtcbiAgICAgIHZhciB4ID0gKHRoaXMuczwwKT90aGlzLm5lZ2F0ZSgpOnRoaXMuY2xvbmUoKTtcbiAgICAgIHZhciB5ID0gKGEuczwwKT9hLm5lZ2F0ZSgpOmEuY2xvbmUoKTtcbiAgICAgIGlmKHguY29tcGFyZVRvKHkpIDwgMCkgeyB2YXIgdCA9IHg7IHggPSB5OyB5ID0gdDsgfVxuICAgICAgdmFyIGkgPSB4LmdldExvd2VzdFNldEJpdCgpLCBnID0geS5nZXRMb3dlc3RTZXRCaXQoKTtcbiAgICAgIGlmKGcgPCAwKSByZXR1cm4geDtcbiAgICAgIGlmKGkgPCBnKSBnID0gaTtcbiAgICAgIGlmKGcgPiAwKSB7XG4gICAgICAgIHguclNoaWZ0VG8oZyx4KTtcbiAgICAgICAgeS5yU2hpZnRUbyhnLHkpO1xuICAgICAgfVxuICAgICAgd2hpbGUoeC5zaWdudW0oKSA+IDApIHtcbiAgICAgICAgaWYoKGkgPSB4LmdldExvd2VzdFNldEJpdCgpKSA+IDApIHguclNoaWZ0VG8oaSx4KTtcbiAgICAgICAgaWYoKGkgPSB5LmdldExvd2VzdFNldEJpdCgpKSA+IDApIHkuclNoaWZ0VG8oaSx5KTtcbiAgICAgICAgaWYoeC5jb21wYXJlVG8oeSkgPj0gMCkge1xuICAgICAgICAgIHguc3ViVG8oeSx4KTtcbiAgICAgICAgICB4LnJTaGlmdFRvKDEseCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgeS5zdWJUbyh4LHkpO1xuICAgICAgICAgIHkuclNoaWZ0VG8oMSx5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoZyA+IDApIHkubFNoaWZ0VG8oZyx5KTtcbiAgICAgIHJldHVybiB5O1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgJSBuLCBuIDwgMl4yNlxuICAgIGZ1bmN0aW9uIGJucE1vZEludChuKSB7XG4gICAgICBpZihuIDw9IDApIHJldHVybiAwO1xuICAgICAgdmFyIGQgPSB0aGlzLkRWJW4sIHIgPSAodGhpcy5zPDApP24tMTowO1xuICAgICAgaWYodGhpcy50ID4gMClcbiAgICAgICAgaWYoZCA9PSAwKSByID0gdGhpc1swXSVuO1xuICAgICAgICBlbHNlIGZvcih2YXIgaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkgciA9IChkKnIrdGhpc1tpXSklbjtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIDEvdGhpcyAlIG0gKEhBQyAxNC42MSlcbiAgICBmdW5jdGlvbiBibk1vZEludmVyc2UobSkge1xuICAgICAgdmFyIGFjID0gbS5pc0V2ZW4oKTtcbiAgICAgIGlmKCh0aGlzLmlzRXZlbigpICYmIGFjKSB8fCBtLnNpZ251bSgpID09IDApIHJldHVybiBCaWdJbnRlZ2VyLlpFUk87XG4gICAgICB2YXIgdSA9IG0uY2xvbmUoKSwgdiA9IHRoaXMuY2xvbmUoKTtcbiAgICAgIHZhciBhID0gbmJ2KDEpLCBiID0gbmJ2KDApLCBjID0gbmJ2KDApLCBkID0gbmJ2KDEpO1xuICAgICAgd2hpbGUodS5zaWdudW0oKSAhPSAwKSB7XG4gICAgICAgIHdoaWxlKHUuaXNFdmVuKCkpIHtcbiAgICAgICAgICB1LnJTaGlmdFRvKDEsdSk7XG4gICAgICAgICAgaWYoYWMpIHtcbiAgICAgICAgICAgIGlmKCFhLmlzRXZlbigpIHx8ICFiLmlzRXZlbigpKSB7IGEuYWRkVG8odGhpcyxhKTsgYi5zdWJUbyhtLGIpOyB9XG4gICAgICAgICAgICBhLnJTaGlmdFRvKDEsYSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoIWIuaXNFdmVuKCkpIGIuc3ViVG8obSxiKTtcbiAgICAgICAgICBiLnJTaGlmdFRvKDEsYik7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUodi5pc0V2ZW4oKSkge1xuICAgICAgICAgIHYuclNoaWZ0VG8oMSx2KTtcbiAgICAgICAgICBpZihhYykge1xuICAgICAgICAgICAgaWYoIWMuaXNFdmVuKCkgfHwgIWQuaXNFdmVuKCkpIHsgYy5hZGRUbyh0aGlzLGMpOyBkLnN1YlRvKG0sZCk7IH1cbiAgICAgICAgICAgIGMuclNoaWZ0VG8oMSxjKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZighZC5pc0V2ZW4oKSkgZC5zdWJUbyhtLGQpO1xuICAgICAgICAgIGQuclNoaWZ0VG8oMSxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZih1LmNvbXBhcmVUbyh2KSA+PSAwKSB7XG4gICAgICAgICAgdS5zdWJUbyh2LHUpO1xuICAgICAgICAgIGlmKGFjKSBhLnN1YlRvKGMsYSk7XG4gICAgICAgICAgYi5zdWJUbyhkLGIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHYuc3ViVG8odSx2KTtcbiAgICAgICAgICBpZihhYykgYy5zdWJUbyhhLGMpO1xuICAgICAgICAgIGQuc3ViVG8oYixkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYodi5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpICE9IDApIHJldHVybiBCaWdJbnRlZ2VyLlpFUk87XG4gICAgICBpZihkLmNvbXBhcmVUbyhtKSA+PSAwKSByZXR1cm4gZC5zdWJ0cmFjdChtKTtcbiAgICAgIGlmKGQuc2lnbnVtKCkgPCAwKSBkLmFkZFRvKG0sZCk7IGVsc2UgcmV0dXJuIGQ7XG4gICAgICBpZihkLnNpZ251bSgpIDwgMCkgcmV0dXJuIGQuYWRkKG0pOyBlbHNlIHJldHVybiBkO1xuICAgIH1cblxuICAgIHZhciBsb3dwcmltZXMgPSBbMiwzLDUsNywxMSwxMywxNywxOSwyMywyOSwzMSwzNyw0MSw0Myw0Nyw1Myw1OSw2MSw2Nyw3MSw3Myw3OSw4Myw4OSw5NywxMDEsMTAzLDEwNywxMDksMTEzLDEyNywxMzEsMTM3LDEzOSwxNDksMTUxLDE1NywxNjMsMTY3LDE3MywxNzksMTgxLDE5MSwxOTMsMTk3LDE5OSwyMTEsMjIzLDIyNywyMjksMjMzLDIzOSwyNDEsMjUxLDI1NywyNjMsMjY5LDI3MSwyNzcsMjgxLDI4MywyOTMsMzA3LDMxMSwzMTMsMzE3LDMzMSwzMzcsMzQ3LDM0OSwzNTMsMzU5LDM2NywzNzMsMzc5LDM4MywzODksMzk3LDQwMSw0MDksNDE5LDQyMSw0MzEsNDMzLDQzOSw0NDMsNDQ5LDQ1Nyw0NjEsNDYzLDQ2Nyw0NzksNDg3LDQ5MSw0OTksNTAzLDUwOSw1MjEsNTIzLDU0MSw1NDcsNTU3LDU2Myw1NjksNTcxLDU3Nyw1ODcsNTkzLDU5OSw2MDEsNjA3LDYxMyw2MTcsNjE5LDYzMSw2NDEsNjQzLDY0Nyw2NTMsNjU5LDY2MSw2NzMsNjc3LDY4Myw2OTEsNzAxLDcwOSw3MTksNzI3LDczMyw3MzksNzQzLDc1MSw3NTcsNzYxLDc2OSw3NzMsNzg3LDc5Nyw4MDksODExLDgyMSw4MjMsODI3LDgyOSw4MzksODUzLDg1Nyw4NTksODYzLDg3Nyw4ODEsODgzLDg4Nyw5MDcsOTExLDkxOSw5MjksOTM3LDk0MSw5NDcsOTUzLDk2Nyw5NzEsOTc3LDk4Myw5OTEsOTk3XTtcbiAgICB2YXIgbHBsaW0gPSAoMTw8MjYpL2xvd3ByaW1lc1tsb3dwcmltZXMubGVuZ3RoLTFdO1xuXG4gICAgLy8gKHB1YmxpYykgdGVzdCBwcmltYWxpdHkgd2l0aCBjZXJ0YWludHkgPj0gMS0uNV50XG4gICAgZnVuY3Rpb24gYm5Jc1Byb2JhYmxlUHJpbWUodCkge1xuICAgICAgdmFyIGksIHggPSB0aGlzLmFicygpO1xuICAgICAgaWYoeC50ID09IDEgJiYgeFswXSA8PSBsb3dwcmltZXNbbG93cHJpbWVzLmxlbmd0aC0xXSkge1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBsb3dwcmltZXMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgaWYoeFswXSA9PSBsb3dwcmltZXNbaV0pIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZih4LmlzRXZlbigpKSByZXR1cm4gZmFsc2U7XG4gICAgICBpID0gMTtcbiAgICAgIHdoaWxlKGkgPCBsb3dwcmltZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBtID0gbG93cHJpbWVzW2ldLCBqID0gaSsxO1xuICAgICAgICB3aGlsZShqIDwgbG93cHJpbWVzLmxlbmd0aCAmJiBtIDwgbHBsaW0pIG0gKj0gbG93cHJpbWVzW2orK107XG4gICAgICAgIG0gPSB4Lm1vZEludChtKTtcbiAgICAgICAgd2hpbGUoaSA8IGopIGlmKG0lbG93cHJpbWVzW2krK10gPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHgubWlsbGVyUmFiaW4odCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdHJ1ZSBpZiBwcm9iYWJseSBwcmltZSAoSEFDIDQuMjQsIE1pbGxlci1SYWJpbilcbiAgICBmdW5jdGlvbiBibnBNaWxsZXJSYWJpbih0KSB7XG4gICAgICB2YXIgbjEgPSB0aGlzLnN1YnRyYWN0KEJpZ0ludGVnZXIuT05FKTtcbiAgICAgIHZhciBrID0gbjEuZ2V0TG93ZXN0U2V0Qml0KCk7XG4gICAgICBpZihrIDw9IDApIHJldHVybiBmYWxzZTtcbiAgICAgIHZhciByID0gbjEuc2hpZnRSaWdodChrKTtcbiAgICAgIHQgPSAodCsxKT4+MTtcbiAgICAgIGlmKHQgPiBsb3dwcmltZXMubGVuZ3RoKSB0ID0gbG93cHJpbWVzLmxlbmd0aDtcbiAgICAgIHZhciBhID0gbmJpKCk7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdDsgKytpKSB7XG4gICAgICAgIC8vUGljayBiYXNlcyBhdCByYW5kb20sIGluc3RlYWQgb2Ygc3RhcnRpbmcgYXQgMlxuICAgICAgICBhLmZyb21JbnQobG93cHJpbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpsb3dwcmltZXMubGVuZ3RoKV0pO1xuICAgICAgICB2YXIgeSA9IGEubW9kUG93KHIsdGhpcyk7XG4gICAgICAgIGlmKHkuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSAhPSAwICYmIHkuY29tcGFyZVRvKG4xKSAhPSAwKSB7XG4gICAgICAgICAgdmFyIGogPSAxO1xuICAgICAgICAgIHdoaWxlKGorKyA8IGsgJiYgeS5jb21wYXJlVG8objEpICE9IDApIHtcbiAgICAgICAgICAgIHkgPSB5Lm1vZFBvd0ludCgyLHRoaXMpO1xuICAgICAgICAgICAgaWYoeS5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpID09IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoeS5jb21wYXJlVG8objEpICE9IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gcHJvdGVjdGVkXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2h1bmtTaXplID0gYm5wQ2h1bmtTaXplO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvUmFkaXggPSBibnBUb1JhZGl4O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21SYWRpeCA9IGJucEZyb21SYWRpeDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tTnVtYmVyID0gYm5wRnJvbU51bWJlcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXR3aXNlVG8gPSBibnBCaXR3aXNlVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2hhbmdlQml0ID0gYm5wQ2hhbmdlQml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZFRvID0gYm5wQWRkVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZE11bHRpcGx5ID0gYm5wRE11bHRpcGx5O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRBZGRPZmZzZXQgPSBibnBEQWRkT2Zmc2V0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5TG93ZXJUbyA9IGJucE11bHRpcGx5TG93ZXJUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseVVwcGVyVG8gPSBibnBNdWx0aXBseVVwcGVyVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW50ID0gYm5wTW9kSW50O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1pbGxlclJhYmluID0gYm5wTWlsbGVyUmFiaW47XG5cbiAgICAvLyBwdWJsaWNcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbG9uZSA9IGJuQ2xvbmU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaW50VmFsdWUgPSBibkludFZhbHVlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJ5dGVWYWx1ZSA9IGJuQnl0ZVZhbHVlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNob3J0VmFsdWUgPSBiblNob3J0VmFsdWU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2lnbnVtID0gYm5TaWdOdW07XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9CeXRlQXJyYXkgPSBiblRvQnl0ZUFycmF5O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmVxdWFscyA9IGJuRXF1YWxzO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1pbiA9IGJuTWluO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1heCA9IGJuTWF4O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZCA9IGJuQW5kO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm9yID0gYm5PcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS54b3IgPSBiblhvcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmROb3QgPSBibkFuZE5vdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3QgPSBibk5vdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdExlZnQgPSBiblNoaWZ0TGVmdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gYm5TaGlmdFJpZ2h0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdldExvd2VzdFNldEJpdCA9IGJuR2V0TG93ZXN0U2V0Qml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdENvdW50ID0gYm5CaXRDb3VudDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50ZXN0Qml0ID0gYm5UZXN0Qml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNldEJpdCA9IGJuU2V0Qml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsZWFyQml0ID0gYm5DbGVhckJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mbGlwQml0ID0gYm5GbGlwQml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZCA9IGJuQWRkO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0ID0gYm5TdWJ0cmFjdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseSA9IGJuTXVsdGlwbHk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlID0gYm5EaXZpZGU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucmVtYWluZGVyID0gYm5SZW1haW5kZXI7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlQW5kUmVtYWluZGVyID0gYm5EaXZpZGVBbmRSZW1haW5kZXI7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93ID0gYm5Nb2RQb3c7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW52ZXJzZSA9IGJuTW9kSW52ZXJzZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wb3cgPSBiblBvdztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nY2QgPSBibkdDRDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWUgPSBibklzUHJvYmFibGVQcmltZTtcblxuICAgIC8vIEpTQk4tc3BlY2lmaWMgZXh0ZW5zaW9uXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlID0gYm5TcXVhcmU7XG5cbiAgICAvLyBFeHBvc2UgdGhlIEJhcnJldHQgZnVuY3Rpb25cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5CYXJyZXR0ID0gQmFycmV0dFxuXG4gICAgLy8gQmlnSW50ZWdlciBpbnRlcmZhY2VzIG5vdCBpbXBsZW1lbnRlZCBpbiBqc2JuOlxuXG4gICAgLy8gQmlnSW50ZWdlcihpbnQgc2lnbnVtLCBieXRlW10gbWFnbml0dWRlKVxuICAgIC8vIGRvdWJsZSBkb3VibGVWYWx1ZSgpXG4gICAgLy8gZmxvYXQgZmxvYXRWYWx1ZSgpXG4gICAgLy8gaW50IGhhc2hDb2RlKClcbiAgICAvLyBsb25nIGxvbmdWYWx1ZSgpXG4gICAgLy8gc3RhdGljIEJpZ0ludGVnZXIgdmFsdWVPZihsb25nIHZhbClcblxuICAgIC8vIFJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yIC0gcmVxdWlyZXMgYSBQUk5HIGJhY2tlbmQsIGUuZy4gcHJuZzQuanNcblxuICAgIC8vIEZvciBiZXN0IHJlc3VsdHMsIHB1dCBjb2RlIGxpa2VcbiAgICAvLyA8Ym9keSBvbkNsaWNrPSdybmdfc2VlZF90aW1lKCk7JyBvbktleVByZXNzPSdybmdfc2VlZF90aW1lKCk7Jz5cbiAgICAvLyBpbiB5b3VyIG1haW4gSFRNTCBkb2N1bWVudC5cblxuICAgIHZhciBybmdfc3RhdGU7XG4gICAgdmFyIHJuZ19wb29sO1xuICAgIHZhciBybmdfcHB0cjtcblxuICAgIC8vIE1peCBpbiBhIDMyLWJpdCBpbnRlZ2VyIGludG8gdGhlIHBvb2xcbiAgICBmdW5jdGlvbiBybmdfc2VlZF9pbnQoeCkge1xuICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gXj0geCAmIDI1NTtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49ICh4ID4+IDgpICYgMjU1O1xuICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gXj0gKHggPj4gMTYpICYgMjU1O1xuICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gXj0gKHggPj4gMjQpICYgMjU1O1xuICAgICAgaWYocm5nX3BwdHIgPj0gcm5nX3BzaXplKSBybmdfcHB0ciAtPSBybmdfcHNpemU7XG4gICAgfVxuXG4gICAgLy8gTWl4IGluIHRoZSBjdXJyZW50IHRpbWUgKHcvbWlsbGlzZWNvbmRzKSBpbnRvIHRoZSBwb29sXG4gICAgZnVuY3Rpb24gcm5nX3NlZWRfdGltZSgpIHtcbiAgICAgIHJuZ19zZWVkX2ludChuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgcG9vbCB3aXRoIGp1bmsgaWYgbmVlZGVkLlxuICAgIGlmKHJuZ19wb29sID09IG51bGwpIHtcbiAgICAgIHJuZ19wb29sID0gbmV3IEFycmF5KCk7XG4gICAgICBybmdfcHB0ciA9IDA7XG4gICAgICB2YXIgdDtcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmNyeXB0bykge1xuICAgICAgICBpZiAod2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgICAvLyBVc2Ugd2ViY3J5cHRvIGlmIGF2YWlsYWJsZVxuICAgICAgICAgIHZhciB1YSA9IG5ldyBVaW50OEFycmF5KDMyKTtcbiAgICAgICAgICB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyh1YSk7XG4gICAgICAgICAgZm9yKHQgPSAwOyB0IDwgMzI7ICsrdClcbiAgICAgICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gdWFbdF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihuYXZpZ2F0b3IuYXBwTmFtZSA9PSBcIk5ldHNjYXBlXCIgJiYgbmF2aWdhdG9yLmFwcFZlcnNpb24gPCBcIjVcIikge1xuICAgICAgICAgIC8vIEV4dHJhY3QgZW50cm9weSAoMjU2IGJpdHMpIGZyb20gTlM0IFJORyBpZiBhdmFpbGFibGVcbiAgICAgICAgICB2YXIgeiA9IHdpbmRvdy5jcnlwdG8ucmFuZG9tKDMyKTtcbiAgICAgICAgICBmb3IodCA9IDA7IHQgPCB6Lmxlbmd0aDsgKyt0KVxuICAgICAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB6LmNoYXJDb2RlQXQodCkgJiAyNTU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHdoaWxlKHJuZ19wcHRyIDwgcm5nX3BzaXplKSB7ICAvLyBleHRyYWN0IHNvbWUgcmFuZG9tbmVzcyBmcm9tIE1hdGgucmFuZG9tKClcbiAgICAgICAgdCA9IE1hdGguZmxvb3IoNjU1MzYgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB0ID4+PiA4O1xuICAgICAgICBybmdfcG9vbFtybmdfcHB0cisrXSA9IHQgJiAyNTU7XG4gICAgICB9XG4gICAgICBybmdfcHB0ciA9IDA7XG4gICAgICBybmdfc2VlZF90aW1lKCk7XG4gICAgICAvL3JuZ19zZWVkX2ludCh3aW5kb3cuc2NyZWVuWCk7XG4gICAgICAvL3JuZ19zZWVkX2ludCh3aW5kb3cuc2NyZWVuWSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcm5nX2dldF9ieXRlKCkge1xuICAgICAgaWYocm5nX3N0YXRlID09IG51bGwpIHtcbiAgICAgICAgcm5nX3NlZWRfdGltZSgpO1xuICAgICAgICBybmdfc3RhdGUgPSBwcm5nX25ld3N0YXRlKCk7XG4gICAgICAgIHJuZ19zdGF0ZS5pbml0KHJuZ19wb29sKTtcbiAgICAgICAgZm9yKHJuZ19wcHRyID0gMDsgcm5nX3BwdHIgPCBybmdfcG9vbC5sZW5ndGg7ICsrcm5nX3BwdHIpXG4gICAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHJdID0gMDtcbiAgICAgICAgcm5nX3BwdHIgPSAwO1xuICAgICAgICAvL3JuZ19wb29sID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIFRPRE86IGFsbG93IHJlc2VlZGluZyBhZnRlciBmaXJzdCByZXF1ZXN0XG4gICAgICByZXR1cm4gcm5nX3N0YXRlLm5leHQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBybmdfZ2V0X2J5dGVzKGJhKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGZvcihpID0gMDsgaSA8IGJhLmxlbmd0aDsgKytpKSBiYVtpXSA9IHJuZ19nZXRfYnl0ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFNlY3VyZVJhbmRvbSgpIHt9XG5cbiAgICBTZWN1cmVSYW5kb20ucHJvdG90eXBlLm5leHRCeXRlcyA9IHJuZ19nZXRfYnl0ZXM7XG5cbiAgICAvLyBwcm5nNC5qcyAtIHVzZXMgQXJjZm91ciBhcyBhIFBSTkdcblxuICAgIGZ1bmN0aW9uIEFyY2ZvdXIoKSB7XG4gICAgICB0aGlzLmkgPSAwO1xuICAgICAgdGhpcy5qID0gMDtcbiAgICAgIHRoaXMuUyA9IG5ldyBBcnJheSgpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgYXJjZm91ciBjb250ZXh0IGZyb20ga2V5LCBhbiBhcnJheSBvZiBpbnRzLCBlYWNoIGZyb20gWzAuLjI1NV1cbiAgICBmdW5jdGlvbiBBUkM0aW5pdChrZXkpIHtcbiAgICAgIHZhciBpLCBqLCB0O1xuICAgICAgZm9yKGkgPSAwOyBpIDwgMjU2OyArK2kpXG4gICAgICAgIHRoaXMuU1tpXSA9IGk7XG4gICAgICBqID0gMDtcbiAgICAgIGZvcihpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgICAgIGogPSAoaiArIHRoaXMuU1tpXSArIGtleVtpICUga2V5Lmxlbmd0aF0pICYgMjU1O1xuICAgICAgICB0ID0gdGhpcy5TW2ldO1xuICAgICAgICB0aGlzLlNbaV0gPSB0aGlzLlNbal07XG4gICAgICAgIHRoaXMuU1tqXSA9IHQ7XG4gICAgICB9XG4gICAgICB0aGlzLmkgPSAwO1xuICAgICAgdGhpcy5qID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBBUkM0bmV4dCgpIHtcbiAgICAgIHZhciB0O1xuICAgICAgdGhpcy5pID0gKHRoaXMuaSArIDEpICYgMjU1O1xuICAgICAgdGhpcy5qID0gKHRoaXMuaiArIHRoaXMuU1t0aGlzLmldKSAmIDI1NTtcbiAgICAgIHQgPSB0aGlzLlNbdGhpcy5pXTtcbiAgICAgIHRoaXMuU1t0aGlzLmldID0gdGhpcy5TW3RoaXMual07XG4gICAgICB0aGlzLlNbdGhpcy5qXSA9IHQ7XG4gICAgICByZXR1cm4gdGhpcy5TWyh0ICsgdGhpcy5TW3RoaXMuaV0pICYgMjU1XTtcbiAgICB9XG5cbiAgICBBcmNmb3VyLnByb3RvdHlwZS5pbml0ID0gQVJDNGluaXQ7XG4gICAgQXJjZm91ci5wcm90b3R5cGUubmV4dCA9IEFSQzRuZXh0O1xuXG4gICAgLy8gUGx1ZyBpbiB5b3VyIFJORyBjb25zdHJ1Y3RvciBoZXJlXG4gICAgZnVuY3Rpb24gcHJuZ19uZXdzdGF0ZSgpIHtcbiAgICAgIHJldHVybiBuZXcgQXJjZm91cigpO1xuICAgIH1cblxuICAgIC8vIFBvb2wgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCBhbmQgZ3JlYXRlciB0aGFuIDMyLlxuICAgIC8vIEFuIGFycmF5IG9mIGJ5dGVzIHRoZSBzaXplIG9mIHRoZSBwb29sIHdpbGwgYmUgcGFzc2VkIHRvIGluaXQoKVxuICAgIHZhciBybmdfcHNpemUgPSAyNTY7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IEJpZ0ludGVnZXIsXG4gICAgICAgICAgICBCaWdJbnRlZ2VyOiBCaWdJbnRlZ2VyLFxuICAgICAgICAgICAgU2VjdXJlUmFuZG9tOiBTZWN1cmVSYW5kb20sXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5qc2JuID0ge1xuICAgICAgICAgIEJpZ0ludGVnZXI6IEJpZ0ludGVnZXIsXG4gICAgICAgICAgU2VjdXJlUmFuZG9tOiBTZWN1cmVSYW5kb21cbiAgICAgICAgfTtcbiAgICB9XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IFRpbWVyIH0gZnJvbSAnLi9UaW1lci5qcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSA2MDsgLy8gc2Vjb25kc1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuRXZlbnRzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUsXHJcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ1RpbWVyID0gbmV3IFRpbWVyKFwiQWNjZXNzIHRva2VuIGV4cGlyaW5nXCIpLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyID0gbmV3IFRpbWVyKFwiQWNjZXNzIHRva2VuIGV4cGlyZWRcIilcclxuICAgIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XHJcblxyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcgPSBhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXI7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkID0gYWNjZXNzVG9rZW5FeHBpcmVkVGltZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZChjb250YWluZXIpIHtcclxuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGV2ZW50cyBpZiB0aGVyZSdzIGFuIGFjY2VzcyB0b2tlbiBhbmQgaXQgaGFzIGFuIGV4cGlyYXRpb25cclxuICAgICAgICBpZiAoY29udGFpbmVyLmFjY2Vzc190b2tlbiAmJiBjb250YWluZXIuZXhwaXJlc19pbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IGNvbnRhaW5lci5leHBpcmVzX2luO1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiBhY2Nlc3MgdG9rZW4gcHJlc2VudCwgcmVtYWluaW5nIGR1cmF0aW9uOlwiLCBkdXJhdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGV4cGlyaW5nIGlmIHdlIHN0aWxsIGhhdmUgdGltZVxyXG4gICAgICAgICAgICAgICAgbGV0IGV4cGlyaW5nID0gZHVyYXRpb24gLSB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcclxuICAgICAgICAgICAgICAgIGlmIChleHBpcmluZyA8PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmluZyA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IHJlZ2lzdGVyaW5nIGV4cGlyaW5nIHRpbWVyIGluOlwiLCBleHBpcmluZyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmluaXQoZXhwaXJpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiQWNjZXNzVG9rZW5FdmVudHMubG9hZDogY2FuY2VsaW5nIGV4aXN0aW5nIGV4cGlyaW5nIHRpbWVyIGJlY2FzZSB3ZSdyZSBwYXN0IGV4cGlyYXRpb24uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgaXQncyBuZWdhdGl2ZSwgaXQgd2lsbCBzdGlsbCBmaXJlXHJcbiAgICAgICAgICAgIGxldCBleHBpcmVkID0gZHVyYXRpb24gKyAxO1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiByZWdpc3RlcmluZyBleHBpcmVkIHRpbWVyIGluOlwiLCBleHBpcmVkKTtcclxuICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmluaXQoZXhwaXJlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVubG9hZCgpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJBY2Nlc3NUb2tlbkV2ZW50cy51bmxvYWQ6IGNhbmNlbGluZyBleGlzdGluZyBhY2Nlc3MgdG9rZW4gdGltZXJzXCIpO1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuY2FuY2VsKCk7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmNhbmNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFjY2Vzc1Rva2VuRXhwaXJpbmcoY2IpIHtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmFkZEhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmluZyhjYikge1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcucmVtb3ZlSGFuZGxlcihjYik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWNjZXNzVG9rZW5FeHBpcmVkKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmFkZEhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmVkKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmNvbnN0IERlZmF1bHRJbnRlcnZhbCA9IDIwMDA7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tTZXNzaW9uSUZyYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrLCBjbGllbnRfaWQsIHVybCwgaW50ZXJ2YWwsIHN0b3BPbkVycm9yID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5fY2xpZW50X2lkID0gY2xpZW50X2lkO1xyXG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IGludGVydmFsIHx8IERlZmF1bHRJbnRlcnZhbDtcclxuICAgICAgICB0aGlzLl9zdG9wT25FcnJvciA9IHN0b3BPbkVycm9yO1xyXG5cclxuICAgICAgICB2YXIgaWR4ID0gdXJsLmluZGV4T2YoXCIvXCIsIHVybC5pbmRleE9mKFwiLy9cIikgKyAyKTtcclxuICAgICAgICB0aGlzLl9mcmFtZV9vcmlnaW4gPSB1cmwuc3Vic3RyKDAsIGlkeCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcblxyXG4gICAgICAgIC8vIHNob3RndW4gYXBwcm9hY2hcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUud2lkdGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnNyYyA9IHVybDtcclxuICAgIH1cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZnJhbWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCA9IHRoaXMuX21lc3NhZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfbWVzc2FnZShlKSB7XHJcbiAgICAgICAgaWYgKGUub3JpZ2luID09PSB0aGlzLl9mcmFtZV9vcmlnaW4gJiZcclxuICAgICAgICAgICAgZS5zb3VyY2UgPT09IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3dcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YSA9PT0gXCJlcnJvclwiKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJDaGVja1Nlc3Npb25JRnJhbWU6IGVycm9yIG1lc3NhZ2UgZnJvbSBjaGVjayBzZXNzaW9uIG9wIGlmcmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdG9wT25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGUuZGF0YSA9PT0gXCJjaGFuZ2VkXCIpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZTogY2hhbmdlZCBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJDaGVja1Nlc3Npb25JRnJhbWU6IFwiICsgZS5kYXRhICsgXCIgbWVzc2FnZSBmcm9tIGNoZWNrIHNlc3Npb24gb3AgaWZyYW1lXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhcnQoc2Vzc2lvbl9zdGF0ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZXNzaW9uX3N0YXRlICE9PSBzZXNzaW9uX3N0YXRlKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZS5zdGFydFwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2Vzc2lvbl9zdGF0ZSA9IHNlc3Npb25fc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UodGhpcy5fY2xpZW50X2lkICsgXCIgXCIgKyB0aGlzLl9zZXNzaW9uX3N0YXRlLCB0aGlzLl9mcmFtZV9vcmlnaW4pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gdHJpZ2dlciBub3dcclxuICAgICAgICAgICAgc2VuZCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gYW5kIHNldHVwIHRpbWVyXHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gd2luZG93LnNldEludGVydmFsKHNlbmQsIHRoaXMuX2ludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLl9zZXNzaW9uX3N0YXRlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVyKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZS5zdG9wXCIpO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IENvcmRvdmFQb3B1cFdpbmRvdyB9IGZyb20gJy4vQ29yZG92YVBvcHVwV2luZG93LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yIHtcclxuXHJcbiAgICBwcmVwYXJlKHBhcmFtcykge1xyXG4gICAgICAgIHBhcmFtcy5wb3B1cFdpbmRvd0ZlYXR1cmVzID0gJ2hpZGRlbj15ZXMnO1xyXG4gICAgICAgIGxldCBwb3B1cCA9IG5ldyBDb3Jkb3ZhUG9wdXBXaW5kb3cocGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBvcHVwKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBDb3Jkb3ZhUG9wdXBXaW5kb3cgfSBmcm9tICcuL0NvcmRvdmFQb3B1cFdpbmRvdy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZG92YVBvcHVwTmF2aWdhdG9yIHtcclxuXHJcbiAgICBwcmVwYXJlKHBhcmFtcykge1xyXG4gICAgICAgIGxldCBwb3B1cCA9IG5ldyBDb3Jkb3ZhUG9wdXBXaW5kb3cocGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBvcHVwKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9ICdsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHpvb209bm8nO1xyXG5jb25zdCBEZWZhdWx0UG9wdXBUYXJnZXQgPSBcIl9ibGFua1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvcmRvdmFQb3B1cFdpbmRvdyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IHBhcmFtcy5wb3B1cFdpbmRvd0ZlYXR1cmVzIHx8IERlZmF1bHRQb3B1cEZlYXR1cmVzO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gcGFyYW1zLnBvcHVwV2luZG93VGFyZ2V0IHx8IERlZmF1bHRQb3B1cFRhcmdldDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlZGlyZWN0X3VyaSA9IHBhcmFtcy5zdGFydFVybDtcclxuICAgICAgICBMb2cuZGVidWcoXCJDb3Jkb3ZhUG9wdXBXaW5kb3cuY3RvcjogcmVkaXJlY3RfdXJpOiBcIiArIHRoaXMucmVkaXJlY3RfdXJpKTtcclxuICAgIH1cclxuXHJcbiAgICBfaXNJbkFwcEJyb3dzZXJJbnN0YWxsZWQoY29yZG92YU1ldGFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcImNvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3NlclwiLCBcImNvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3Nlci5pbmFwcGJyb3dzZXJcIiwgXCJvcmcuYXBhY2hlLmNvcmRvdmEuaW5hcHBicm93c2VyXCJdLnNvbWUoZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvcmRvdmFNZXRhZGF0YS5oYXNPd25Qcm9wZXJ0eShuYW1lKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5hdmlnYXRlKHBhcmFtcykge1xyXG4gICAgICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXMudXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiTm8gdXJsIHByb3ZpZGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghd2luZG93LmNvcmRvdmEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcihcImNvcmRvdmEgaXMgdW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBjb3Jkb3ZhTWV0YWRhdGEgPSB3aW5kb3cuY29yZG92YS5yZXF1aXJlKFwiY29yZG92YS9wbHVnaW5fbGlzdFwiKS5tZXRhZGF0YTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzSW5BcHBCcm93c2VySW5zdGFsbGVkKGNvcmRvdmFNZXRhZGF0YSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3IoXCJJbkFwcEJyb3dzZXIgcGx1Z2luIG5vdCBmb3VuZFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwID0gY29yZG92YS5JbkFwcEJyb3dzZXIub3BlbihwYXJhbXMudXJsLCB0aGlzLnRhcmdldCwgdGhpcy5mZWF0dXJlcyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93Lm5hdmlnYXRlOiBwb3B1cCBzdWNjZXNzZnVsbHkgY3JlYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhpdENhbGxiYWNrRXZlbnQgPSB0aGlzLl9leGl0Q2FsbGJhY2suYmluZCh0aGlzKTsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkU3RhcnRDYWxsYmFja0V2ZW50ID0gdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2suYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImV4aXRcIiwgdGhpcy5fZXhpdENhbGxiYWNrRXZlbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2Fkc3RhcnRcIiwgdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJFcnJvciBvcGVuaW5nIHBvcHVwIHdpbmRvd1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9taXNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb2FkU3RhcnRDYWxsYmFjayhldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC51cmwuaW5kZXhPZih0aGlzLnJlZGlyZWN0X3VyaSkgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fc3VjY2Vzcyh7IHVybDogZXZlbnQudXJsIH0pO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcbiAgICBfZXhpdENhbGxiYWNrKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLl9lcnJvcihtZXNzYWdlKTsgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9zdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdzogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIGNvcmRvdmEgcG9wdXAgd2luZG93XCIpO1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdmUoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBfZXJyb3IobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcclxuXHJcbiAgICAgICAgTG9nLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuX3JlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYW51cCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcG9wdXApe1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJDb3Jkb3ZhUG9wdXBXaW5kb3c6IGNsZWFuaW5nIHVwIHBvcHVwXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXhpdFwiLCB0aGlzLl9leGl0Q2FsbGJhY2tFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZHN0YXJ0XCIsIHRoaXMuX2xvYWRTdGFydENhbGxiYWNrRXZlbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9wdXAuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcG9wdXAgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFcnJvclJlc3BvbnNlIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3Ioe2Vycm9yLCBlcnJvcl9kZXNjcmlwdGlvbiwgZXJyb3JfdXJpLCBzdGF0ZSwgc2Vzc2lvbl9zdGF0ZX09e31cclxuICAgICkge1xyXG4gICAgICAgICBpZiAoIWVycm9yKXtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gZXJyb3IgcGFzc2VkIHRvIEVycm9yUmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VwZXIoZXJyb3JfZGVzY3JpcHRpb24gfHwgZXJyb3IpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkVycm9yUmVzcG9uc2VcIjtcclxuXHJcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xyXG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSBlcnJvcl9kZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmVycm9yX3VyaSA9IGVycm9yX3VyaTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbl9zdGF0ZSA9IHNlc3Npb25fc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSGFuZGxlcihjYikge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5wdXNoKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVIYW5kbGVyKGNiKSB7XHJcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuX2NhbGxiYWNrcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBjYik7XHJcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2UoLi4ucGFyYW1zKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiRXZlbnQ6IFJhaXNpbmcgZXZlbnQ6IFwiICsgdGhpcy5fbmFtZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzW2ldKC4uLnBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmNvbnN0IHRpbWVyID0ge1xyXG4gICAgc2V0SW50ZXJ2YWw6IGZ1bmN0aW9uIChjYiwgZHVyYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoY2IsIGR1cmF0aW9uKTtcclxuICAgIH0sXHJcbiAgICBjbGVhckludGVydmFsOiBmdW5jdGlvbiAoaGFuZGxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcclxuICAgIH1cclxufTtcclxuXHJcbmxldCB0ZXN0aW5nID0gZmFsc2U7XHJcbmxldCByZXF1ZXN0ID0gbnVsbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWwge1xyXG5cclxuICAgIHN0YXRpYyBfdGVzdGluZygpIHtcclxuICAgICAgICB0ZXN0aW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGxvY2F0aW9uKCkge1xyXG4gICAgICAgIGlmICghdGVzdGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gbG9jYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgbG9jYWxTdG9yYWdlKCkge1xyXG4gICAgICAgIGlmICghdGVzdGluZyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IHNlc3Npb25TdG9yYWdlKCkge1xyXG4gICAgICAgIGlmICghdGVzdGluZyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRYTUxIdHRwUmVxdWVzdChuZXdSZXF1ZXN0KSB7XHJcbiAgICAgICAgcmVxdWVzdCA9IG5ld1JlcXVlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBYTUxIdHRwUmVxdWVzdCgpIHtcclxuICAgICAgICBpZiAoIXRlc3RpbmcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QgfHwgWE1MSHR0cFJlcXVlc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgdGltZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0ZXN0aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBJRnJhbWVXaW5kb3cgfSBmcm9tICcuL0lGcmFtZVdpbmRvdy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSUZyYW1lTmF2aWdhdG9yIHtcclxuXHJcbiAgICBwcmVwYXJlKHBhcmFtcykge1xyXG4gICAgICAgIGxldCBmcmFtZSA9IG5ldyBJRnJhbWVXaW5kb3cocGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsYmFjayh1cmwpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVOYXZpZ2F0b3IuY2FsbGJhY2tcIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIElGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnQodXJsKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmNvbnN0IERlZmF1bHRUaW1lb3V0ID0gMTAwMDA7XHJcblxyXG5leHBvcnQgY2xhc3MgSUZyYW1lV2luZG93IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCA9IHRoaXMuX21lc3NhZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZnJhbWUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuXHJcbiAgICAgICAgLy8gc2hvdGd1biBhcHByb2FjaFxyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS53aWR0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUuaGVpZ2h0ID0gMDtcclxuXHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZnJhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdmlnYXRlKHBhcmFtcykge1xyXG4gICAgICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXMudXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiTm8gdXJsIHByb3ZpZGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVvdXQgPSBwYXJhbXMuc2lsZW50UmVxdWVzdFRpbWVvdXQgfHwgRGVmYXVsdFRpbWVvdXQ7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5uYXZpZ2F0ZTogVXNpbmcgdGltZW91dCBvZjpcIiwgdGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5fdGltZW91dC5iaW5kKHRoaXMpLCB0aW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy5fZnJhbWUuc3JjID0gcGFyYW1zLnVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb21pc2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX3N1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93OiBTdWNjZXNzZnVsIHJlc3BvbnNlIGZyb20gZnJhbWUgd2luZG93XCIpO1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdmUoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBfZXJyb3IobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcclxuXHJcbiAgICAgICAgTG9nLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuX3JlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYW51cCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZnJhbWUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93OiBjbGVhbnVwXCIpO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xyXG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLl9mcmFtZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdGltZW91dCgpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cudGltZW91dFwiKTtcclxuICAgICAgICB0aGlzLl9lcnJvcihcIkZyYW1lIHdpbmRvdyB0aW1lZCBvdXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgX21lc3NhZ2UoZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5tZXNzYWdlXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coJ1JlY2VpdmVkIG1lc3NhZ2UgZnJvbSBjaGlsZDogb3JpZ2luID0gJyArIGUub3JpZ2luICsgJywgZGF0YSA9ICcgKyBlLmRhdGEpO1xyXG5cdFx0Y29uc29sZS5sb2coJ011c3QgaGF2ZTogb3JpZ2luID09ICcgKyB0aGlzLl9vcmlnaW4gICsgJywgc291cmNlIGlzIHRoZSBzYW1lIGFuZCBkYXRhIG5vdCBmYWxzZXknKTtcclxuXHRcdGNvbnNvbGUubG9nKCdTb3VyY2UgaXMgc2FtZTogJyArIGUuc291cmNlID09PSB0aGlzLl9mcmFtZS5jb250ZW50V2luZG93KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVyICYmXHJcbiAgICAgICAgICAgIGUub3JpZ2luID09PSB0aGlzLl9vcmlnaW4gJiZcclxuICAgICAgICAgICAgZS5zb3VyY2UgPT09IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3dcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IGUuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3VjY2Vzcyh7IHVybDogdXJsIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIGZyb20gZnJhbWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9vcmlnaW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm90aWZ5UGFyZW50KHVybCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnRcIik7XHJcbiAgICAgICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93Lm5vdGlmeVBhcmVudDogcG9zdGluZyB1cmwgbWVzc2FnZSB0byBwYXJlbnRcIik7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdQb3N0aW5nIG1lc3NhZ2UgdG8gcGFyZW50IFwiJyArIHVybCArICdcIiBhdCBsb2NhdGlvbjogXCInICsgbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0ICsgJ1wiJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UodXJsLCBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlXZWJTdG9yYWdle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShrZXkpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2UuZ2V0SXRlbVwiLCBrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXRlbShrZXksIHZhbHVlKXtcclxuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2Uuc2V0SXRlbVwiLCBrZXkpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW0oa2V5KXtcclxuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2UucmVtb3ZlSXRlbVwiLCBrZXkpO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9kYXRhW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fZGF0YSkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGtleShpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLl9kYXRhKVtpbmRleF07XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Sm9zZVV0aWwoeyBqd3MsIEtleVV0aWwsIFg1MDksIGNyeXB0bywgaGV4dG9iNjR1LCBiNjR0b2hleCwgQWxsb3dlZFNpZ25pbmdBbGdzIH0pIHtcclxuICAgIHJldHVybiBjbGFzcyBKb3NlVXRpbCB7XHJcblxyXG4gICAgICAgIHN0YXRpYyBwYXJzZUp3dChqd3QpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwucGFyc2VKd3RcIik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBqd3MuSldTLnBhcnNlKGp3dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogdG9rZW4uaGVhZGVyT2JqLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHRva2VuLnBheWxvYWRPYmpcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgdmFsaWRhdGVKd3Qoand0LCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93LCB0aW1lSW5zZW5zaXRpdmUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwudmFsaWRhdGVKd3RcIik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleS5rdHkgPT09IFwiUlNBXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmUgJiYga2V5Lm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gS2V5VXRpbC5nZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleS54NWMgJiYga2V5Lng1Yy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhleCA9IGI2NHRvaGV4KGtleS54NWNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBYNTA5LmdldFB1YmxpY0tleUZyb21DZXJ0SGV4KGhleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwudmFsaWRhdGVKd3Q6IFJTQSBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIiwga2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlJTQSBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Lmt0eSA9PT0gXCJFQ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5jcnYgJiYga2V5LnggJiYga2V5LnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gS2V5VXRpbC5nZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC52YWxpZGF0ZUp3dDogRUMga2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIsIGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJFQyBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwudmFsaWRhdGVKd3Q6IFVuc3VwcG9ydGVkIGtleSB0eXBlXCIsIGtleSAmJiBrZXkua3R5KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQga2V5IHR5cGU6IFwiICsga2V5ICYmIGtleS5rdHkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSm9zZVV0aWwuX3ZhbGlkYXRlSnd0KGp3dCwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUgJiYgZS5tZXNzYWdlIHx8IGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiSldUIHZhbGlkYXRpb24gZmFpbGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgdmFsaWRhdGVKd3RBdHRyaWJ1dGVzKGp3dCwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3LCBub3csIHRpbWVJbnNlbnNpdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAoIWNsb2NrU2tldykge1xyXG4gICAgICAgICAgICAgICAgY2xvY2tTa2V3ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFub3cpIHtcclxuICAgICAgICAgICAgICAgIG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBKb3NlVXRpbC5wYXJzZUp3dChqd3QpLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuaXNzKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGlzc3VlciB3YXMgbm90IHByb3ZpZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImlzc3VlciB3YXMgbm90IHByb3ZpZGVkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGF5bG9hZC5pc3MgIT09IGlzc3Vlcikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBJbnZhbGlkIGlzc3VlciBpbiB0b2tlblwiLCBwYXlsb2FkLmlzcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBpc3N1ZXIgaW4gdG9rZW46IFwiICsgcGF5bG9hZC5pc3MpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmF1ZCkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBhdWQgd2FzIG5vdCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhdWQgd2FzIG5vdCBwcm92aWRlZFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZhbGlkQXVkaWVuY2UgPSBwYXlsb2FkLmF1ZCA9PT0gYXVkaWVuY2UgfHwgKEFycmF5LmlzQXJyYXkocGF5bG9hZC5hdWQpICYmIHBheWxvYWQuYXVkLmluZGV4T2YoYXVkaWVuY2UpID49IDApO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkQXVkaWVuY2UpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBhdWRpZW5jZSBpbiB0b2tlblwiLCBwYXlsb2FkLmF1ZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBhdWRpZW5jZSBpbiB0b2tlbjogXCIgKyBwYXlsb2FkLmF1ZCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmF6cCAmJiBwYXlsb2FkLmF6cCAhPT0gYXVkaWVuY2UpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBhenAgaW4gdG9rZW5cIiwgcGF5bG9hZC5henApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgYXpwIGluIHRva2VuOiBcIiArIHBheWxvYWQuYXpwKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGltZUluc2Vuc2l0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG93ZXJOb3cgPSBub3cgKyBjbG9ja1NrZXc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXBwZXJOb3cgPSBub3cgLSBjbG9ja1NrZXc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmlhdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogaWF0IHdhcyBub3QgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImlhdCB3YXMgbm90IHByb3ZpZGVkXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsb3dlck5vdyA8IHBheWxvYWQuaWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBpYXQgaXMgaW4gdGhlIGZ1dHVyZVwiLCBwYXlsb2FkLmlhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImlhdCBpcyBpbiB0aGUgZnV0dXJlOiBcIiArIHBheWxvYWQuaWF0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQubmJmICYmIGxvd2VyTm93IDwgcGF5bG9hZC5uYmYpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IG5iZiBpcyBpbiB0aGUgZnV0dXJlXCIsIHBheWxvYWQubmJmKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwibmJmIGlzIGluIHRoZSBmdXR1cmU6IFwiICsgcGF5bG9hZC5uYmYpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBheWxvYWQuZXhwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBleHAgd2FzIG5vdCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiZXhwIHdhcyBub3QgcHJvdmlkZWRcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuZXhwIDwgdXBwZXJOb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGV4cCBpcyBpbiB0aGUgcGFzdFwiLCBwYXlsb2FkLmV4cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImV4cCBpcyBpbiB0aGUgcGFzdDpcIiArIHBheWxvYWQuZXhwKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgX3ZhbGlkYXRlSnd0KGp3dCwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gSm9zZVV0aWwudmFsaWRhdGVKd3RBdHRyaWJ1dGVzKGp3dCwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3LCBub3csIHRpbWVJbnNlbnNpdGl2ZSkudGhlbihwYXlsb2FkID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqd3MuSldTLnZlcmlmeShqd3QsIGtleSwgQWxsb3dlZFNpZ25pbmdBbGdzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IHNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF5bG9hZDtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoZSAmJiBlLm1lc3NhZ2UgfHwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGhhc2hTdHJpbmcodmFsdWUsIGFsZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5VdGlsLmhhc2hTdHJpbmcodmFsdWUsIGFsZyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGhleFRvQmFzZTY0VXJsKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGV4dG9iNjR1KHZhbHVlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGp3cywgS2V5VXRpbCwgWDUwOSwgY3J5cHRvLCBoZXh0b2I2NHUsIGI2NHRvaGV4LCBBbGxvd2VkU2lnbmluZ0FsZ3MgfSBmcm9tICcuL2NyeXB0by9yc2EnO1xyXG5pbXBvcnQgZ2V0Sm9zZVV0aWwgZnJvbSAnLi9Kb3NlVXRpbEltcGwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEpvc2VVdGlsID0gZ2V0Sm9zZVV0aWwoeyBqd3MsIEtleVV0aWwsIFg1MDksIGNyeXB0bywgaGV4dG9iNjR1LCBiNjR0b2hleCwgQWxsb3dlZFNpZ25pbmdBbGdzIH0pO1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBKc29uU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBhZGRpdGlvbmFsQ29udGVudFR5cGVzID0gbnVsbCwgXHJcbiAgICAgICAgWE1MSHR0cFJlcXVlc3RDdG9yID0gR2xvYmFsLlhNTEh0dHBSZXF1ZXN0LCBcclxuICAgICAgICBqd3RIYW5kbGVyID0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxDb250ZW50VHlwZXMgJiYgQXJyYXkuaXNBcnJheShhZGRpdGlvbmFsQ29udGVudFR5cGVzKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcyA9IGFkZGl0aW9uYWxDb250ZW50VHlwZXMuc2xpY2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGVudFR5cGVzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcy5wdXNoKCdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgaWYgKGp3dEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGVudFR5cGVzLnB1c2goJ2FwcGxpY2F0aW9uL2p3dCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fWE1MSHR0cFJlcXVlc3QgPSBYTUxIdHRwUmVxdWVzdEN0b3I7XHJcbiAgICAgICAgdGhpcy5fand0SGFuZGxlciA9IGp3dEhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SnNvbih1cmwsIHRva2VuKSB7XHJcbiAgICAgICAgaWYgKCF1cmwpe1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5nZXRKc29uOiBObyB1cmwgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5nZXRKc29uLCB1cmw6IFwiLCB1cmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyB0aGlzLl9YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXEub3BlbignR0VUJywgdXJsKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhbGxvd2VkQ29udGVudFR5cGVzID0gdGhpcy5fY29udGVudFR5cGVzO1xyXG4gICAgICAgICAgICB2YXIgand0SGFuZGxlciA9IHRoaXMuX2p3dEhhbmRsZXI7XHJcblxyXG4gICAgICAgICAgICByZXEub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5nZXRKc29uOiBIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgcmVxLnN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQgPT0gXCJhcHBsaWNhdGlvbi9qd3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgand0SGFuZGxlcihyZXEpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5nZXRKc29uOiBFcnJvciBwYXJzaW5nIEpTT04gcmVzcG9uc2VcIiwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIENvbnRlbnQtVHlwZTogXCIgKyBjb250ZW50VHlwZSArIFwiLCBmcm9tIFVSTDogXCIgKyB1cmwpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihyZXEuc3RhdHVzVGV4dCArIFwiIChcIiArIHJlcS5zdGF0dXMgKyBcIilcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLmdldEpzb246IG5ldHdvcmsgZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiSnNvblNlcnZpY2UuZ2V0SnNvbjogdG9rZW4gcGFzc2VkLCBzZXR0aW5nIEF1dGhvcml6YXRpb24gaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgdG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXEuc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RGb3JtKHVybCwgcGF5bG9hZCkge1xyXG4gICAgICAgIGlmICghdXJsKXtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IE5vIHVybCBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLnBvc3RGb3JtLCB1cmw6IFwiLCB1cmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyB0aGlzLl9YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXEub3BlbignUE9TVCcsIHVybCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWxsb3dlZENvbnRlbnRUeXBlcyA9IHRoaXMuX2NvbnRlbnRUeXBlcztcclxuXHJcbiAgICAgICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgcmVxLnN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBFcnJvciBwYXJzaW5nIEpTT04gcmVzcG9uc2VcIiwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIENvbnRlbnQtVHlwZTogXCIgKyBjb250ZW50VHlwZSArIFwiLCBmcm9tIFVSTDogXCIgKyB1cmwpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDQwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkICYmIHBheWxvYWQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IEVycm9yIGZyb20gc2VydmVyOiBcIiwgcGF5bG9hZC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocGF5bG9hZC5lcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogRXJyb3IgcGFyc2luZyBKU09OIHJlc3BvbnNlXCIsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IocmVxLnN0YXR1c1RleHQgKyBcIiAoXCIgKyByZXEuc3RhdHVzICsgXCIpXCIpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogbmV0d29yayBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiBwYXlsb2FkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGF5bG9hZFtrZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9keS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gXCImXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gXCI9XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAgICAgcmVxLnNlbmQoYm9keSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxubGV0IG5vcExvZ2dlciA9IHtcclxuICAgIGRlYnVnKCl7fSxcclxuICAgIGluZm8oKXt9LFxyXG4gICAgd2Fybigpe30sXHJcbiAgICBlcnJvcigpe31cclxufTtcclxuXHJcbmNvbnN0IE5PTkUgPSAwO1xyXG5jb25zdCBFUlJPUiA9IDE7XHJcbmNvbnN0IFdBUk4gPSAyO1xyXG5jb25zdCBJTkZPID0gMztcclxuY29uc3QgREVCVUcgPSA0O1xyXG5cclxubGV0IGxvZ2dlcjtcclxubGV0IGxldmVsO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZyB7XHJcbiAgICBzdGF0aWMgZ2V0IE5PTkUoKSB7cmV0dXJuIE5PTkV9O1xyXG4gICAgc3RhdGljIGdldCBFUlJPUigpIHtyZXR1cm4gRVJST1J9O1xyXG4gICAgc3RhdGljIGdldCBXQVJOKCkge3JldHVybiBXQVJOfTtcclxuICAgIHN0YXRpYyBnZXQgSU5GTygpIHtyZXR1cm4gSU5GT307XHJcbiAgICBzdGF0aWMgZ2V0IERFQlVHKCkge3JldHVybiBERUJVR307XHJcbiAgICBcclxuICAgIHN0YXRpYyByZXNldCgpe1xyXG4gICAgICAgIGxldmVsID0gSU5GTztcclxuICAgICAgICBsb2dnZXIgPSBub3BMb2dnZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXQgbGV2ZWwoKXtcclxuICAgICAgICByZXR1cm4gbGV2ZWw7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0IGxldmVsKHZhbHVlKXtcclxuICAgICAgICBpZiAoTk9ORSA8PSB2YWx1ZSAmJiB2YWx1ZSA8PSBERUJVRyl7XHJcbiAgICAgICAgICAgIGxldmVsID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvZyBsZXZlbFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXQgbG9nZ2VyKCl7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2dlcjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXQgbG9nZ2VyKHZhbHVlKXtcclxuICAgICAgICBpZiAoIXZhbHVlLmRlYnVnICYmIHZhbHVlLmluZm8pIHtcclxuICAgICAgICAgICAgLy8ganVzdCB0byBzdGF5IGJhY2t3YXJkcyBjb21wYXQuIGNhbiByZW1vdmUgaW4gMi4wXHJcbiAgICAgICAgICAgIHZhbHVlLmRlYnVnID0gdmFsdWUuaW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZS5kZWJ1ZyAmJiB2YWx1ZS5pbmZvICYmIHZhbHVlLndhcm4gJiYgdmFsdWUuZXJyb3Ipe1xyXG4gICAgICAgICAgICBsb2dnZXIgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9nZ2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGRlYnVnKC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmIChsZXZlbCA+PSBERUJVRyl7XHJcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zy5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBpbmZvKC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmIChsZXZlbCA+PSBJTkZPKXtcclxuICAgICAgICAgICAgbG9nZ2VyLmluZm8uYXBwbHkobG9nZ2VyLCBBcnJheS5mcm9tKGFyZ3MpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgd2FybiguLi5hcmdzKXtcclxuICAgICAgICBpZiAobGV2ZWwgPj0gV0FSTil7XHJcbiAgICAgICAgICAgIGxvZ2dlci53YXJuLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGVycm9yKC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmIChsZXZlbCA+PSBFUlJPUil7XHJcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvci5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuTG9nLnJlc2V0KCk7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgSnNvblNlcnZpY2UgfSBmcm9tICcuL0pzb25TZXJ2aWNlLmpzJztcclxuXHJcbmNvbnN0IE9pZGNNZXRhZGF0YVVybFBhdGggPSAnLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgSnNvblNlcnZpY2VDdG9yID0gSnNvblNlcnZpY2UpIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZTogTm8gc2V0dGluZ3MgcGFzc2VkIHRvIE1ldGFkYXRhU2VydmljZVwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0dGluZ3NcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgICAgIHRoaXMuX2pzb25TZXJ2aWNlID0gbmV3IEpzb25TZXJ2aWNlQ3RvcihbJ2FwcGxpY2F0aW9uL2p3ay1zZXQranNvbiddKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWV0YWRhdGFVcmwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9tZXRhZGF0YVVybCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubWV0YWRhdGFVcmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5fc2V0dGluZ3MubWV0YWRhdGFVcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmwgJiYgdGhpcy5fbWV0YWRhdGFVcmwuaW5kZXhPZihPaWRjTWV0YWRhdGFVcmxQYXRoKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmxbdGhpcy5fbWV0YWRhdGFVcmwubGVuZ3RoIC0gMV0gIT09ICcvJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCArPSAnLyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9IE9pZGNNZXRhZGF0YVVybFBhdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVVybDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRhZGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhOiBSZXR1cm5pbmcgbWV0YWRhdGEgZnJvbSBzZXR0aW5nc1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMubWV0YWRhdGFVcmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhOiBObyBhdXRob3JpdHkgb3IgbWV0YWRhdGFVcmwgY29uZmlndXJlZCBvbiBzZXR0aW5nc1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGF1dGhvcml0eSBvciBtZXRhZGF0YVVybCBjb25maWd1cmVkIG9uIHNldHRpbmdzXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YTogZ2V0dGluZyBtZXRhZGF0YSBmcm9tXCIsIHRoaXMubWV0YWRhdGFVcmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih0aGlzLm1ldGFkYXRhVXJsKVxyXG4gICAgICAgICAgICAudGhlbihtZXRhZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGE6IGpzb24gcmVjZWl2ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJc3N1ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJpc3N1ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiYXV0aG9yaXphdGlvbl9lbmRwb2ludFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VySW5mb0VuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwidXNlcmluZm9fZW5kcG9pbnRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW5FbmRwb2ludChvcHRpb25hbD10cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJ0b2tlbl9lbmRwb2ludFwiLCBvcHRpb25hbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hlY2tTZXNzaW9uSWZyYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiY2hlY2tfc2Vzc2lvbl9pZnJhbWVcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW5kU2Vzc2lvbkVuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiZW5kX3Nlc3Npb25fZW5kcG9pbnRcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmV2b2NhdGlvbkVuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwicmV2b2NhdGlvbl9lbmRwb2ludFwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRLZXlzRW5kcG9pbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJqd2tzX3VyaVwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0TWV0YWRhdGFQcm9wZXJ0eShuYW1lLCBvcHRpb25hbD1mYWxzZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5IGZvcjogXCIgKyBuYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWV0YWRhdGEoKS50aGVuKG1ldGFkYXRhID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhUHJvcGVydHk6IG1ldGFkYXRhIHJlY2lldmVkXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1ldGFkYXRhW25hbWVdID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5OiBNZXRhZGF0YSBkb2VzIG5vdCBjb250YWluIG9wdGlvbmFsIHByb3BlcnR5IFwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5OiBNZXRhZGF0YSBkb2VzIG5vdCBjb250YWluIHByb3BlcnR5IFwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0YWRhdGEgZG9lcyBub3QgY29udGFpbiBwcm9wZXJ0eSBcIiArIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWV0YWRhdGFbbmFtZV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2lnbmluZ0tleXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czogUmV0dXJuaW5nIHNpZ25pbmdLZXlzIGZyb20gc2V0dGluZ3NcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJqd2tzX3VyaVwiKS50aGVuKGp3a3NfdXJpID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBqd2tzX3VyaSByZWNlaXZlZFwiLCBqd2tzX3VyaSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbihqd2tzX3VyaSkudGhlbihrZXlTZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBrZXkgc2V0IHJlY2VpdmVkXCIsIGtleVNldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFrZXlTZXQua2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czogTWlzc2luZyBrZXlzIG9uIGtleXNldFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGtleXMgb24ga2V5c2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzID0ga2V5U2V0LmtleXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudFNldHRpbmdzIH0gZnJvbSAnLi9PaWRjQ2xpZW50U2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi9FcnJvclJlc3BvbnNlLmpzJztcclxuaW1wb3J0IHsgU2lnbmluUmVxdWVzdCB9IGZyb20gJy4vU2lnbmluUmVxdWVzdC5qcyc7XHJcbmltcG9ydCB7IFNpZ25pblJlc3BvbnNlIH0gZnJvbSAnLi9TaWduaW5SZXNwb25zZS5qcyc7XHJcbmltcG9ydCB7IFNpZ25vdXRSZXF1ZXN0IH0gZnJvbSAnLi9TaWdub3V0UmVxdWVzdC5qcyc7XHJcbmltcG9ydCB7IFNpZ25vdXRSZXNwb25zZSB9IGZyb20gJy4vU2lnbm91dFJlc3BvbnNlLmpzJztcclxuaW1wb3J0IHsgU2lnbmluU3RhdGUgfSBmcm9tICcuL1NpZ25pblN0YXRlLmpzJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1N0YXRlLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBPaWRjQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzID0ge30pIHtcclxuICAgICAgICBpZiAoc2V0dGluZ3MgaW5zdGFuY2VvZiBPaWRjQ2xpZW50U2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzID0gbmV3IE9pZGNDbGllbnRTZXR0aW5ncyhzZXR0aW5ncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBfc3RhdGVTdG9yZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5zdGF0ZVN0b3JlO1xyXG4gICAgfVxyXG4gICAgZ2V0IF92YWxpZGF0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudmFsaWRhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9tZXRhZGF0YVNlcnZpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubWV0YWRhdGFTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZXR0aW5ncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICBnZXQgbWV0YWRhdGFTZXJ2aWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2lnbmluUmVxdWVzdCh7XHJcbiAgICAgICAgcmVzcG9uc2VfdHlwZSwgc2NvcGUsIHJlZGlyZWN0X3VyaSxcclxuICAgICAgICAvLyBkYXRhIHdhcyBtZWFudCB0byBiZSB0aGUgcGxhY2UgYSBjYWxsZXIgY291bGQgaW5kaWNhdGUgdGhlIGRhdGEgdG9cclxuICAgICAgICAvLyBoYXZlIHJvdW5kIHRyaXBwZWQsIGJ1dCBwZW9wbGUgd2VyZSBnZXR0aW5nIGNvbmZ1c2VkLCBzbyBpIGFkZGVkIHN0YXRlIChzaW5jZSB0aGF0IG1hdGNoZXMgdGhlIHNwZWMpXHJcbiAgICAgICAgLy8gYW5kIHNvIG5vdyBpZiBkYXRhIGlzIG5vdCBwYXNzZWQsIGJ1dCBzdGF0ZSBpcyB0aGVuIHN0YXRlIHdpbGwgYmUgdXNlZFxyXG4gICAgICAgIGRhdGEsIHN0YXRlLCBwcm9tcHQsIGRpc3BsYXksIG1heF9hZ2UsIHVpX2xvY2FsZXMsIGlkX3Rva2VuX2hpbnQsIGxvZ2luX2hpbnQsIGFjcl92YWx1ZXMsXHJcbiAgICAgICAgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCByZXNwb25zZV9tb2RlLCBleHRyYVF1ZXJ5UGFyYW1zLCBleHRyYVRva2VuUGFyYW1zLCByZXF1ZXN0X3R5cGUsIHNraXBVc2VySW5mbyB9ID0ge30sXHJcbiAgICAgICAgc3RhdGVTdG9yZVxyXG4gICAgKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWduaW5SZXF1ZXN0XCIpO1xyXG5cclxuICAgICAgICBsZXQgY2xpZW50X2lkID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xyXG4gICAgICAgIHJlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlIHx8IHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX3R5cGU7XHJcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzLl9zZXR0aW5ncy5zY29wZTtcclxuICAgICAgICByZWRpcmVjdF91cmkgPSByZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xyXG5cclxuICAgICAgICAvLyBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50IGFyZW4ndCBhbGxvd2VkIG9uIF9zZXR0aW5nc1xyXG4gICAgICAgIHByb21wdCA9IHByb21wdCB8fCB0aGlzLl9zZXR0aW5ncy5wcm9tcHQ7XHJcbiAgICAgICAgZGlzcGxheSA9IGRpc3BsYXkgfHwgdGhpcy5fc2V0dGluZ3MuZGlzcGxheTtcclxuICAgICAgICBtYXhfYWdlID0gbWF4X2FnZSB8fCB0aGlzLl9zZXR0aW5ncy5tYXhfYWdlO1xyXG4gICAgICAgIHVpX2xvY2FsZXMgPSB1aV9sb2NhbGVzIHx8IHRoaXMuX3NldHRpbmdzLnVpX2xvY2FsZXM7XHJcbiAgICAgICAgYWNyX3ZhbHVlcyA9IGFjcl92YWx1ZXMgfHwgdGhpcy5fc2V0dGluZ3MuYWNyX3ZhbHVlcztcclxuICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlIHx8IHRoaXMuX3NldHRpbmdzLnJlc291cmNlO1xyXG4gICAgICAgIHJlc3BvbnNlX21vZGUgPSByZXNwb25zZV9tb2RlIHx8IHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX21vZGU7XHJcbiAgICAgICAgZXh0cmFRdWVyeVBhcmFtcyA9IGV4dHJhUXVlcnlQYXJhbXMgfHwgdGhpcy5fc2V0dGluZ3MuZXh0cmFRdWVyeVBhcmFtcztcclxuICAgICAgICBleHRyYVRva2VuUGFyYW1zID0gZXh0cmFUb2tlblBhcmFtcyB8fCB0aGlzLl9zZXR0aW5ncy5leHRyYVRva2VuUGFyYW1zO1xyXG5cclxuICAgICAgICBsZXQgYXV0aG9yaXR5ID0gdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5O1xyXG5cclxuICAgICAgICBpZiAoU2lnbmluUmVxdWVzdC5pc0NvZGUocmVzcG9uc2VfdHlwZSkgJiYgcmVzcG9uc2VfdHlwZSAhPT0gXCJjb2RlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk9wZW5JRCBDb25uZWN0IGh5YnJpZCBmbG93IGlzIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRBdXRob3JpemF0aW9uRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbmluUmVxdWVzdDogUmVjZWl2ZWQgYXV0aG9yaXphdGlvbiBlbmRwb2ludFwiLCB1cmwpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNpZ25pblJlcXVlc3QgPSBuZXcgU2lnbmluUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRfaWQsXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdF91cmksXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZV90eXBlLFxyXG4gICAgICAgICAgICAgICAgc2NvcGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhIHx8IHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5LFxyXG4gICAgICAgICAgICAgICAgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50LCBhY3JfdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCBleHRyYVF1ZXJ5UGFyYW1zLCBleHRyYVRva2VuUGFyYW1zLCByZXF1ZXN0X3R5cGUsIHJlc3BvbnNlX21vZGUsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfc2VjcmV0LFxyXG4gICAgICAgICAgICAgICAgc2tpcFVzZXJJbmZvXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNpZ25pblN0YXRlID0gc2lnbmluUmVxdWVzdC5zdGF0ZTtcclxuICAgICAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVN0b3JlLnNldChzaWduaW5TdGF0ZS5pZCwgc2lnbmluU3RhdGUudG9TdG9yYWdlU3RyaW5nKCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpZ25pblJlcXVlc3Q7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRTaWduaW5SZXNwb25zZVN0YXRlKHVybCwgc3RhdGVTdG9yZSwgcmVtb3ZlU3RhdGUgPSBmYWxzZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucmVhZFNpZ25pblJlc3BvbnNlU3RhdGVcIik7XHJcblxyXG4gICAgICAgIGxldCB1c2VRdWVyeSA9IHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX21vZGUgPT09IFwicXVlcnlcIiB8fCBcclxuICAgICAgICAgICAgKCF0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV9tb2RlICYmIFNpZ25pblJlcXVlc3QuaXNDb2RlKHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX3R5cGUpKTtcclxuICAgICAgICBsZXQgZGVsaW1pdGVyID0gdXNlUXVlcnkgPyBcIj9cIiA6IFwiI1wiO1xyXG5cclxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBuZXcgU2lnbmluUmVzcG9uc2UodXJsLCBkZWxpbWl0ZXIpO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnQucmVhZFNpZ25pblJlc3BvbnNlU3RhdGU6IE5vIHN0YXRlIGluIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc3RhdGUgaW4gcmVzcG9uc2VcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcclxuXHJcbiAgICAgICAgdmFyIHN0YXRlQXBpID0gcmVtb3ZlU3RhdGUgPyBzdGF0ZVN0b3JlLnJlbW92ZS5iaW5kKHN0YXRlU3RvcmUpIDogc3RhdGVTdG9yZS5nZXQuYmluZChzdGF0ZVN0b3JlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlQXBpKHJlc3BvbnNlLnN0YXRlKS50aGVuKHN0b3JlZFN0YXRlU3RyaW5nID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzdG9yZWRTdGF0ZVN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZTogTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG1hdGNoaW5nIHN0YXRlIGZvdW5kIGluIHN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IFNpZ25pblN0YXRlLmZyb21TdG9yYWdlU3RyaW5nKHN0b3JlZFN0YXRlU3RyaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZSwgcmVzcG9uc2V9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwsIHN0YXRlU3RvcmUpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnByb2Nlc3NTaWduaW5SZXNwb25zZVwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFNpZ25pblJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCB0cnVlKS50aGVuKCh7c3RhdGUsIHJlc3BvbnNlfSkgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnByb2Nlc3NTaWduaW5SZXNwb25zZTogUmVjZWl2ZWQgc3RhdGUgZnJvbSBzdG9yYWdlOyB2YWxpZGF0aW5nIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTaWdub3V0UmVxdWVzdCh7aWRfdG9rZW5faGludCwgZGF0YSwgc3RhdGUsIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSwgZXh0cmFRdWVyeVBhcmFtcywgcmVxdWVzdF90eXBlIH0gPSB7fSxcclxuICAgICAgICBzdGF0ZVN0b3JlXHJcbiAgICApIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25vdXRSZXF1ZXN0XCIpO1xyXG5cclxuICAgICAgICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIGV4dHJhUXVlcnlQYXJhbXMgPSBleHRyYVF1ZXJ5UGFyYW1zIHx8IHRoaXMuX3NldHRpbmdzLmV4dHJhUXVlcnlQYXJhbXM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0RW5kU2Vzc2lvbkVuZHBvaW50KCkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogTm8gZW5kIHNlc3Npb24gZW5kcG9pbnQgdXJsIHJldHVybmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm8gZW5kIHNlc3Npb24gZW5kcG9pbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbm91dFJlcXVlc3Q6IFJlY2VpdmVkIGVuZCBzZXNzaW9uIGVuZHBvaW50XCIsIHVybCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBTaWdub3V0UmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICBpZF90b2tlbl9oaW50LFxyXG4gICAgICAgICAgICAgICAgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSB8fCBzdGF0ZSxcclxuICAgICAgICAgICAgICAgIGV4dHJhUXVlcnlQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0X3R5cGVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2lnbm91dFN0YXRlID0gcmVxdWVzdC5zdGF0ZTtcclxuICAgICAgICAgICAgaWYgKHNpZ25vdXRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogU2lnbm91dCByZXF1ZXN0IGhhcyBzdGF0ZSB0byBwZXJzaXN0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZVN0b3JlLnNldChzaWdub3V0U3RhdGUuaWQsIHNpZ25vdXRTdGF0ZS50b1N0b3JhZ2VTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSh1cmwsIHN0YXRlU3RvcmUsIHJlbW92ZVN0YXRlID0gZmFsc2UpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZVwiKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gbmV3IFNpZ25vdXRSZXNwb25zZSh1cmwpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uuc3RhdGUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGU6IE5vIHN0YXRlIGluIHJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cud2FybihcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlOiBSZXNwb25zZSB3YXMgZXJyb3I6IFwiLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yUmVzcG9uc2UocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c3RhdGU6IHVuZGVmaW5lZCwgcmVzcG9uc2V9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzdGF0ZUtleSA9IHJlc3BvbnNlLnN0YXRlO1xyXG5cclxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xyXG5cclxuICAgICAgICB2YXIgc3RhdGVBcGkgPSByZW1vdmVTdGF0ZSA/IHN0YXRlU3RvcmUucmVtb3ZlLmJpbmQoc3RhdGVTdG9yZSkgOiBzdGF0ZVN0b3JlLmdldC5iaW5kKHN0YXRlU3RvcmUpO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZUFwaShzdGF0ZUtleSkudGhlbihzdG9yZWRTdGF0ZVN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3RvcmVkU3RhdGVTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlOiBObyBtYXRjaGluZyBzdGF0ZSBmb3VuZCBpbiBzdG9yYWdlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmVkU3RhdGVTdHJpbmcpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZSwgcmVzcG9uc2V9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsLCBzdGF0ZVN0b3JlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCB0cnVlKS50aGVuKCh7c3RhdGUsIHJlc3BvbnNlfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25vdXRSZXNwb25zZTogUmVjZWl2ZWQgc3RhdGUgZnJvbSBzdG9yYWdlOyB2YWxpZGF0aW5nIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlOiBObyBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHNraXBwaW5nIHZhbGlkYXRpbmcgcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclN0YWxlU3RhdGUoc3RhdGVTdG9yZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY2xlYXJTdGFsZVN0YXRlXCIpO1xyXG5cclxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xyXG5cclxuICAgICAgICByZXR1cm4gU3RhdGUuY2xlYXJTdGFsZVN0YXRlKHN0YXRlU3RvcmUsIHRoaXMuc2V0dGluZ3Muc3RhbGVTdGF0ZUFnZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJy4vV2ViU3RvcmFnZVN0YXRlU3RvcmUuanMnO1xyXG5pbXBvcnQgeyBSZXNwb25zZVZhbGlkYXRvciB9IGZyb20gJy4vUmVzcG9uc2VWYWxpZGF0b3IuanMnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL01ldGFkYXRhU2VydmljZS5qcyc7XHJcblxyXG5jb25zdCBPaWRjTWV0YWRhdGFVcmxQYXRoID0gJy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uJztcclxuXHJcbmNvbnN0IERlZmF1bHRSZXNwb25zZVR5cGUgPSBcImlkX3Rva2VuXCI7XHJcbmNvbnN0IERlZmF1bHRTY29wZSA9IFwib3BlbmlkXCI7XHJcbmNvbnN0IERlZmF1bHRTdGFsZVN0YXRlQWdlID0gNjAgKiAxNTsgLy8gc2Vjb25kc1xyXG5jb25zdCBEZWZhdWx0Q2xvY2tTa2V3SW5TZWNvbmRzID0gNjAgKiA1O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9pZGNDbGllbnRTZXR0aW5ncyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgLy8gbWV0YWRhdGEgcmVsYXRlZFxyXG4gICAgICAgIGF1dGhvcml0eSwgbWV0YWRhdGFVcmwsIG1ldGFkYXRhLCBzaWduaW5nS2V5cyxcclxuICAgICAgICAvLyBjbGllbnQgcmVsYXRlZFxyXG4gICAgICAgIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgcmVzcG9uc2VfdHlwZSA9IERlZmF1bHRSZXNwb25zZVR5cGUsIHNjb3BlID0gRGVmYXVsdFNjb3BlLFxyXG4gICAgICAgIHJlZGlyZWN0X3VyaSwgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxyXG4gICAgICAgIC8vIG9wdGlvbmFsIHByb3RvY29sXHJcbiAgICAgICAgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBhY3JfdmFsdWVzLCByZXNvdXJjZSwgcmVzcG9uc2VfbW9kZSxcclxuICAgICAgICAvLyBiZWhhdmlvciBmbGFnc1xyXG4gICAgICAgIGZpbHRlclByb3RvY29sQ2xhaW1zID0gdHJ1ZSwgbG9hZFVzZXJJbmZvID0gdHJ1ZSxcclxuICAgICAgICBzdGFsZVN0YXRlQWdlID0gRGVmYXVsdFN0YWxlU3RhdGVBZ2UsIGNsb2NrU2tldyA9IERlZmF1bHRDbG9ja1NrZXdJblNlY29uZHMsXHJcbiAgICAgICAgdXNlckluZm9Kd3RJc3N1ZXIgPSAnT1AnLFxyXG4gICAgICAgIC8vIG90aGVyIGJlaGF2aW9yXHJcbiAgICAgICAgc3RhdGVTdG9yZSA9IG5ldyBXZWJTdG9yYWdlU3RhdGVTdG9yZSgpLFxyXG4gICAgICAgIFJlc3BvbnNlVmFsaWRhdG9yQ3RvciA9IFJlc3BvbnNlVmFsaWRhdG9yLFxyXG4gICAgICAgIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2UsXHJcbiAgICAgICAgLy8gZXh0cmEgcXVlcnkgcGFyYW1zXHJcbiAgICAgICAgZXh0cmFRdWVyeVBhcmFtcyA9IHt9LFxyXG4gICAgICAgIGV4dHJhVG9rZW5QYXJhbXMgPSB7fVxyXG4gICAgfSA9IHt9KSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2F1dGhvcml0eSA9IGF1dGhvcml0eTtcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IG1ldGFkYXRhVXJsO1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhID0gbWV0YWRhdGE7XHJcbiAgICAgICAgdGhpcy5fc2lnbmluZ0tleXMgPSBzaWduaW5nS2V5cztcclxuXHJcbiAgICAgICAgdGhpcy5fY2xpZW50X2lkID0gY2xpZW50X2lkO1xyXG4gICAgICAgIHRoaXMuX2NsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xyXG4gICAgICAgIHRoaXMuX3Jlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlO1xyXG4gICAgICAgIHRoaXMuX3Njb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5fcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcclxuXHJcbiAgICAgICAgdGhpcy5fcHJvbXB0ID0gcHJvbXB0O1xyXG4gICAgICAgIHRoaXMuX2Rpc3BsYXkgPSBkaXNwbGF5O1xyXG4gICAgICAgIHRoaXMuX21heF9hZ2UgPSBtYXhfYWdlO1xyXG4gICAgICAgIHRoaXMuX3VpX2xvY2FsZXMgPSB1aV9sb2NhbGVzO1xyXG4gICAgICAgIHRoaXMuX2Fjcl92YWx1ZXMgPSBhY3JfdmFsdWVzO1xyXG4gICAgICAgIHRoaXMuX3Jlc291cmNlID0gcmVzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZpbHRlclByb3RvY29sQ2xhaW1zID0gISFmaWx0ZXJQcm90b2NvbENsYWltcztcclxuICAgICAgICB0aGlzLl9sb2FkVXNlckluZm8gPSAhIWxvYWRVc2VySW5mbztcclxuICAgICAgICB0aGlzLl9zdGFsZVN0YXRlQWdlID0gc3RhbGVTdGF0ZUFnZTtcclxuICAgICAgICB0aGlzLl9jbG9ja1NrZXcgPSBjbG9ja1NrZXc7XHJcbiAgICAgICAgdGhpcy5fdXNlckluZm9Kd3RJc3N1ZXIgPSB1c2VySW5mb0p3dElzc3VlcjtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmU7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdG9yID0gbmV3IFJlc3BvbnNlVmFsaWRhdG9yQ3Rvcih0aGlzKTtcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHR5cGVvZiBleHRyYVF1ZXJ5UGFyYW1zID09PSAnb2JqZWN0JyA/IGV4dHJhUXVlcnlQYXJhbXMgOiB7fTtcclxuICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0gdHlwZW9mIGV4dHJhVG9rZW5QYXJhbXMgPT09ICdvYmplY3QnID8gZXh0cmFUb2tlblBhcmFtcyA6IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNsaWVudCBjb25maWdcclxuICAgIGdldCBjbGllbnRfaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9pZDtcclxuICAgIH1cclxuICAgIHNldCBjbGllbnRfaWQodmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NsaWVudF9pZCkge1xyXG4gICAgICAgICAgICAvLyBvbmUtdGltZSBzZXQgb25seVxyXG4gICAgICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnRTZXR0aW5ncy5zZXRfY2xpZW50X2lkOiBjbGllbnRfaWQgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpZW50X2lkIGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGNsaWVudF9zZWNyZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9zZWNyZXQ7XHJcbiAgICB9XHJcbiAgICBnZXQgcmVzcG9uc2VfdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VfdHlwZTtcclxuICAgIH1cclxuICAgIGdldCBzY29wZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcGU7XHJcbiAgICB9XHJcbiAgICBnZXQgcmVkaXJlY3RfdXJpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdF91cmk7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG9wdGlvbmFsIHByb3RvY29sIHBhcmFtc1xyXG4gICAgZ2V0IHByb21wdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbXB0O1xyXG4gICAgfVxyXG4gICAgZ2V0IGRpc3BsYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXk7XHJcbiAgICB9XHJcbiAgICBnZXQgbWF4X2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4X2FnZTtcclxuICAgIH1cclxuICAgIGdldCB1aV9sb2NhbGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91aV9sb2NhbGVzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFjcl92YWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fjcl92YWx1ZXM7XHJcbiAgICB9XHJcbiAgICBnZXQgcmVzb3VyY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlc3BvbnNlX21vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlX21vZGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG1ldGFkYXRhXHJcbiAgICBnZXQgYXV0aG9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRob3JpdHk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXV0aG9yaXR5KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9hdXRob3JpdHkpIHtcclxuICAgICAgICAgICAgLy8gb25lLXRpbWUgc2V0IG9ubHlcclxuICAgICAgICAgICAgdGhpcy5fYXV0aG9yaXR5ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJPaWRjQ2xpZW50U2V0dGluZ3Muc2V0X2F1dGhvcml0eTogYXV0aG9yaXR5IGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhvcml0eSBoYXMgYWxyZWFkeSBiZWVuIGFzc2lnbmVkLlwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBtZXRhZGF0YVVybCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX21ldGFkYXRhVXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5hdXRob3JpdHk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmwgJiYgdGhpcy5fbWV0YWRhdGFVcmwuaW5kZXhPZihPaWRjTWV0YWRhdGFVcmxQYXRoKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybFt0aGlzLl9tZXRhZGF0YVVybC5sZW5ndGggLSAxXSAhPT0gJy8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gJy8nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gT2lkY01ldGFkYXRhVXJsUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldHRhYmxlL2NhY2hhYmxlIG1ldGFkYXRhIHZhbHVlc1xyXG4gICAgZ2V0IG1ldGFkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YTtcclxuICAgIH1cclxuICAgIHNldCBtZXRhZGF0YSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZ25pbmdLZXlzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5nS2V5cztcclxuICAgIH1cclxuICAgIHNldCBzaWduaW5nS2V5cyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3NpZ25pbmdLZXlzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmVoYXZpb3IgZmxhZ3NcclxuICAgIGdldCBmaWx0ZXJQcm90b2NvbENsYWltcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyUHJvdG9jb2xDbGFpbXM7XHJcbiAgICB9XHJcbiAgICBnZXQgbG9hZFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkVXNlckluZm87XHJcbiAgICB9XHJcbiAgICBnZXQgc3RhbGVTdGF0ZUFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhbGVTdGF0ZUFnZTtcclxuICAgIH1cclxuICAgIGdldCBjbG9ja1NrZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb2NrU2tldztcclxuICAgIH1cclxuICAgIGdldCB1c2VySW5mb0p3dElzc3VlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckluZm9Kd3RJc3N1ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXRlU3RvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlU3RvcmU7XHJcbiAgICB9XHJcbiAgICBnZXQgdmFsaWRhdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgbWV0YWRhdGFTZXJ2aWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXh0cmEgcXVlcnkgcGFyYW1zXHJcbiAgICBnZXQgZXh0cmFRdWVyeVBhcmFtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFRdWVyeVBhcmFtcztcclxuICAgIH1cclxuICAgIHNldCBleHRyYVF1ZXJ5UGFyYW1zKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zID0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBleHRyYSB0b2tlbiBwYXJhbXNcclxuICAgIGdldCBleHRyYVRva2VuUGFyYW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHRyYVRva2VuUGFyYW1zO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4dHJhVG9rZW5QYXJhbXModmFsdWUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXMgPSB2YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgUG9wdXBXaW5kb3cgfSBmcm9tICcuL1BvcHVwV2luZG93LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cE5hdmlnYXRvciB7XHJcblxyXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcclxuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgUG9wdXBXaW5kb3cocGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsYmFjayh1cmwsIGtlZXBPcGVuLCBkZWxpbWl0ZXIpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cE5hdmlnYXRvci5jYWxsYmFja1wiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xyXG5cclxuY29uc3QgQ2hlY2tGb3JQb3B1cENsb3NlZEludGVydmFsID0gNTAwO1xyXG5jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9ICdsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHdpZHRoPTUwMCxoZWlnaHQ9NTAwLGxlZnQ9MTAwLHRvcD0xMDA7JztcclxuLy9jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9ICdsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHdpZHRoPTUwMCxoZWlnaHQ9NTAwLGxlZnQ9MTAwLHRvcD0xMDA7cmVzaXphYmxlPXllcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0UG9wdXBUYXJnZXQgPSBcIl9ibGFua1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwV2luZG93IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gcGFyYW1zLnBvcHVwV2luZG93VGFyZ2V0IHx8IERlZmF1bHRQb3B1cFRhcmdldDtcclxuICAgICAgICBsZXQgZmVhdHVyZXMgPSBwYXJhbXMucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCBEZWZhdWx0UG9wdXBGZWF0dXJlcztcclxuXHJcbiAgICAgICAgdGhpcy5fcG9wdXAgPSB3aW5kb3cub3BlbignJywgdGFyZ2V0LCBmZWF0dXJlcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmN0b3I6IHBvcHVwIHN1Y2Nlc3NmdWxseSBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZC5iaW5kKHRoaXMpLCBDaGVja0ZvclBvcHVwQ2xvc2VkSW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvbWlzZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3BvcHVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiUG9wdXBXaW5kb3cubmF2aWdhdGU6IEVycm9yIG9wZW5pbmcgcG9wdXAgd2luZG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghcGFyYW1zIHx8ICFwYXJhbXMudXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiUG9wdXBXaW5kb3cubmF2aWdhdGU6IG5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogU2V0dGluZyBVUkwgaW4gcG9wdXBcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pZCA9IHBhcmFtcy5pZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJwb3B1cENhbGxiYWNrX1wiICsgcGFyYW1zLmlkXSA9IHRoaXMuX2NhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLndpbmRvdy5sb2NhdGlvbiA9IHBhcmFtcy51cmw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9zdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5jYWxsYmFjazogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIHBvcHVwIHdpbmRvd1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdmUoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBfZXJyb3IobWVzc2FnZSkge1xyXG4gICAgICAgIExvZy5lcnJvcihcIlBvcHVwV2luZG93LmVycm9yOiBcIiwgbWVzc2FnZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG4gICAgICAgIHRoaXMuX3JlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXAoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbGVhbnVwKGtlZXBPcGVuKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY2xlYW51cFwiKTtcclxuXHJcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZFRpbWVyKTtcclxuICAgICAgICB0aGlzLl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBkZWxldGUgd2luZG93W1wicG9wdXBDYWxsYmFja19cIiArIHRoaXMuX2lkXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwICYmICFrZWVwT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wb3B1cCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrRm9yUG9wdXBDbG9zZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9wb3B1cCB8fCB0aGlzLl9wb3B1cC5jbG9zZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJQb3B1cCB3aW5kb3cgY2xvc2VkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXAoa2VlcE9wZW4pO1xyXG5cclxuICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNhbGxiYWNrIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Y2Nlc3MoeyB1cmw6IHVybCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNhbGxiYWNrOiBJbnZhbGlkIHJlc3BvbnNlIGZyb20gcG9wdXBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiSW52YWxpZCByZXNwb25zZSBmcm9tIHBvcHVwXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm90aWZ5T3BlbmVyKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcikge1xyXG4gICAgICAgIGlmICh3aW5kb3cub3BlbmVyKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBkZWxpbWl0ZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBcInBvcHVwQ2FsbGJhY2tfXCIgKyBkYXRhLnN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHdpbmRvdy5vcGVuZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogcGFzc2luZyB1cmwgbWVzc2FnZSB0byBvcGVuZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVybCwga2VlcE9wZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJQb3B1cFdpbmRvdy5ub3RpZnlPcGVuZXI6IG5vIG1hdGNoaW5nIGNhbGxiYWNrIGZvdW5kIG9uIG9wZW5lclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gc3RhdGUgZm91bmQgaW4gcmVzcG9uc2UgdXJsXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cud2FybihcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gd2luZG93Lm9wZW5lci4gQ2FuJ3QgY29tcGxldGUgbm90aWZpY2F0aW9uLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlZGlyZWN0TmF2aWdhdG9yIHtcclxuXHJcbiAgICBwcmVwYXJlKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2aWdhdGUocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy51cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVkaXJlY3ROYXZpZ2F0b3IubmF2aWdhdGU6IE5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyYW1zLnVzZVJlcGxhY2VUb05hdmlnYXRlKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHBhcmFtcy51cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcGFyYW1zLnVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXJsKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgVXNlckluZm9TZXJ2aWNlIH0gZnJvbSAnLi9Vc2VySW5mb1NlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBUb2tlbkNsaWVudCB9IGZyb20gJy4vVG9rZW5DbGllbnQuanMnO1xyXG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi9FcnJvclJlc3BvbnNlLmpzJztcclxuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcclxuXHJcbmNvbnN0IFByb3RvY29sQ2xhaW1zID0gW1wibm9uY2VcIiwgXCJhdF9oYXNoXCIsIFwiaWF0XCIsIFwibmJmXCIsIFwiZXhwXCIsIFwiYXVkXCIsIFwiaXNzXCIsIFwiY19oYXNoXCJdO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlVmFsaWRhdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgXHJcbiAgICAgICAgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSxcclxuICAgICAgICBVc2VySW5mb1NlcnZpY2VDdG9yID0gVXNlckluZm9TZXJ2aWNlLCBcclxuICAgICAgICBqb3NlVXRpbCA9IEpvc2VVdGlsLFxyXG4gICAgICAgIFRva2VuQ2xpZW50Q3RvciA9IFRva2VuQ2xpZW50KSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5jdG9yOiBObyBzZXR0aW5ncyBwYXNzZWQgdG8gUmVzcG9uc2VWYWxpZGF0b3JcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fdXNlckluZm9TZXJ2aWNlID0gbmV3IFVzZXJJbmZvU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XHJcbiAgICAgICAgdGhpcy5fdG9rZW5DbGllbnQgPSBuZXcgVG9rZW5DbGllbnRDdG9yKHRoaXMuX3NldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZVNpZ25pblJlc3BvbnNlKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2VcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzU2lnbmluUGFyYW1zKHN0YXRlLCByZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2U6IHN0YXRlIHByb2Nlc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlVG9rZW5zKHN0YXRlLCByZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlOiB0b2tlbnMgdmFsaWRhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NDbGFpbXMoc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlOiBjbGFpbXMgcHJvY2Vzc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoc3RhdGUuaWQgIT09IHJlc3BvbnNlLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbm91dFJlc3BvbnNlOiBTdGF0ZSBkb2VzIG5vdCBtYXRjaFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG5vdyB0aGF0IHdlIGtub3cgdGhlIHN0YXRlIG1hdGNoZXMsIHRha2UgdGhlIHN0b3JlZCBkYXRhXHJcbiAgICAgICAgLy8gYW5kIHNldCBpdCBpbnRvIHRoZSByZXNwb25zZSBzbyBjYWxsZXJzIGNhbiBnZXQgdGhlaXIgc3RhdGVcclxuICAgICAgICAvLyB0aGlzIGlzIGltcG9ydGFudCBmb3IgYm90aCBzdWNjZXNzICYgZXJyb3Igb3V0Y29tZXNcclxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZTogc3RhdGUgdmFsaWRhdGVkXCIpO1xyXG4gICAgICAgIHJlc3BvbnNlLnN0YXRlID0gc3RhdGUuZGF0YTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIExvZy53YXJuKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWdub3V0UmVzcG9uc2U6IFJlc3BvbnNlIHdhcyBlcnJvclwiLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JSZXNwb25zZShyZXNwb25zZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Byb2Nlc3NTaWduaW5QYXJhbXMoc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmlkICE9PSByZXNwb25zZS5zdGF0ZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogU3RhdGUgZG9lcyBub3QgbWF0Y2hcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJTdGF0ZSBkb2VzIG5vdCBtYXRjaFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXN0YXRlLmNsaWVudF9pZCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogTm8gY2xpZW50X2lkIG9uIHN0YXRlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gY2xpZW50X2lkIG9uIHN0YXRlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUuYXV0aG9yaXR5KSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBObyBhdXRob3JpdHkgb24gc3RhdGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBhdXRob3JpdHkgb24gc3RhdGVcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcyBhbGxvd3MgdGhlIGF1dGhvcml0eSB0byBiZSBsb2FkZWQgZnJvbSB0aGUgc2lnbmluIHN0YXRlXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5ID0gc3RhdGUuYXV0aG9yaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbnN1cmUgd2UncmUgdXNpbmcgdGhlIGNvcnJlY3QgYXV0aG9yaXR5IGlmIHRoZSBhdXRob3JpdHkgaXMgbm90IGxvYWRlZCBmcm9tIHNpZ25pbiBzdGF0ZVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSAmJiB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkgIT09IHN0YXRlLmF1dGhvcml0eSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogYXV0aG9yaXR5IG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhdXRob3JpdHkgbWlzbWF0Y2ggb24gc2V0dGluZ3MgdnMuIHNpZ25pbiBzdGF0ZVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMgYWxsb3dzIHRoZSBjbGllbnRfaWQgdG8gYmUgbG9hZGVkIGZyb20gdGhlIHNpZ25pbiBzdGF0ZVxyXG4gICAgICAgIGlmICghdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCA9IHN0YXRlLmNsaWVudF9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZW5zdXJlIHdlJ3JlIHVzaW5nIHRoZSBjb3JyZWN0IGNsaWVudF9pZCBpZiB0aGUgY2xpZW50X2lkIGlzIG5vdCBsb2FkZWQgZnJvbSBzaWduaW4gc3RhdGVcclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQgJiYgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkICE9PSBzdGF0ZS5jbGllbnRfaWQpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IGNsaWVudF9pZCBtaXNtYXRjaCBvbiBzZXR0aW5ncyB2cy4gc2lnbmluIHN0YXRlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiY2xpZW50X2lkIG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbm93IHRoYXQgd2Uga25vdyB0aGUgc3RhdGUgbWF0Y2hlcywgdGFrZSB0aGUgc3RvcmVkIGRhdGFcclxuICAgICAgICAvLyBhbmQgc2V0IGl0IGludG8gdGhlIHJlc3BvbnNlIHNvIGNhbGxlcnMgY2FuIGdldCB0aGVpciBzdGF0ZVxyXG4gICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGZvciBib3RoIHN1Y2Nlc3MgJiBlcnJvciBvdXRjb21lc1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBzdGF0ZSB2YWxpZGF0ZWRcIik7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdGUgPSBzdGF0ZS5kYXRhO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgTG9nLndhcm4oXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogUmVzcG9uc2Ugd2FzIGVycm9yXCIsIHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUubm9uY2UgJiYgIXJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBFeHBlY3RpbmcgaWRfdG9rZW4gaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBpZF90b2tlbiBpbiByZXNwb25zZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXN0YXRlLm5vbmNlICYmIHJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBOb3QgZXhwZWN0aW5nIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5leHBlY3RlZCBpZF90b2tlbiBpbiByZXNwb25zZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUuY29kZV92ZXJpZmllciAmJiAhcmVzcG9uc2UuY29kZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogRXhwZWN0aW5nIGNvZGUgaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBjb2RlIGluIHJlc3BvbnNlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUuY29kZV92ZXJpZmllciAmJiByZXNwb25zZS5jb2RlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBOb3QgZXhwZWN0aW5nIGNvZGUgaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGNvZGUgaW4gcmVzcG9uc2VcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5zY29wZSkge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSdzIG5vIHNjb3BlIG9uIHRoZSByZXNwb25zZSwgdGhlbiBhc3N1bWUgYWxsIHNjb3BlcyBncmFudGVkIChwZXItc3BlYykgYW5kIGNvcHkgb3ZlciBzY29wZXMgZnJvbSBvcmlnaW5hbCByZXF1ZXN0XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnNjb3BlID0gc3RhdGUuc2NvcGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcHJvY2Vzc0NsYWltcyhzdGF0ZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuaXNPcGVuSWRDb25uZWN0KSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiByZXNwb25zZSBpcyBPSURDLCBwcm9jZXNzaW5nIGNsYWltc1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnByb2ZpbGUgPSB0aGlzLl9maWx0ZXJQcm90b2NvbENsYWltcyhyZXNwb25zZS5wcm9maWxlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5za2lwVXNlckluZm8gIT09IHRydWUgJiYgdGhpcy5fc2V0dGluZ3MubG9hZFVzZXJJbmZvICYmIHJlc3BvbnNlLmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IGxvYWRpbmcgdXNlciBpbmZvXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zKHJlc3BvbnNlLmFjY2Vzc190b2tlbikudGhlbihjbGFpbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiB1c2VyIGluZm8gY2xhaW1zIHJlY2VpdmVkIGZyb20gdXNlciBpbmZvIGVuZHBvaW50XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xhaW1zLnN1YiAhPT0gcmVzcG9uc2UucHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHN1YiBmcm9tIHVzZXIgaW5mbyBlbmRwb2ludCBkb2VzIG5vdCBtYXRjaCBzdWIgaW4gYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic3ViIGZyb20gdXNlciBpbmZvIGVuZHBvaW50IGRvZXMgbm90IG1hdGNoIHN1YiBpbiBhY2Nlc3NfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHRoaXMuX21lcmdlQ2xhaW1zKHJlc3BvbnNlLnByb2ZpbGUsIGNsYWltcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHVzZXIgaW5mbyBjbGFpbXMgcmVjZWl2ZWQsIHVwZGF0ZWQgcHJvZmlsZTpcIiwgcmVzcG9uc2UucHJvZmlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IG5vdCBsb2FkaW5nIHVzZXIgaW5mb1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHJlc3BvbnNlIGlzIG5vdCBPSURDLCBub3QgcHJvY2Vzc2luZyBjbGFpbXNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBfbWVyZ2VDbGFpbXMoY2xhaW1zMSwgY2xhaW1zMikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBjbGFpbXMxKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBjbGFpbXMyKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBjbGFpbXMyW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdFtuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRbbmFtZV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdFtuYW1lXS5pbmRleE9mKHZhbHVlKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdFtuYW1lXSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSB0aGlzLl9tZXJnZUNsYWltcyhyZXN1bHRbbmFtZV0sIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSBbcmVzdWx0W25hbWVdLCB2YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIF9maWx0ZXJQcm90b2NvbENsYWltcyhjbGFpbXMpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyUHJvdG9jb2xDbGFpbXMsIGluY29taW5nIGNsYWltczpcIiwgY2xhaW1zKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIGNsYWltcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5fZmlsdGVyUHJvdG9jb2xDbGFpbXMpIHtcclxuICAgICAgICAgICAgUHJvdG9jb2xDbGFpbXMuZm9yRWFjaCh0eXBlID0+IHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbdHlwZV07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlclByb3RvY29sQ2xhaW1zOiBwcm90b2NvbCBjbGFpbXMgZmlsdGVyZWRcIiwgcmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJQcm90b2NvbENsYWltczogcHJvdG9jb2wgY2xhaW1zIG5vdCBmaWx0ZXJlZFwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBfdmFsaWRhdGVUb2tlbnMoc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zOiBWYWxpZGF0aW5nIGNvZGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzQ29kZShzdGF0ZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5hY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogVmFsaWRhdGluZyBpZF90b2tlbiBhbmQgYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogVmFsaWRhdGluZyBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbihzdGF0ZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zOiBObyBjb2RlIHRvIHByb2Nlc3Mgb3IgaWRfdG9rZW4gdG8gdmFsaWRhdGVcIik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Byb2Nlc3NDb2RlKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBjbGllbnRfaWQ6IHN0YXRlLmNsaWVudF9pZCxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogc3RhdGUuY2xpZW50X3NlY3JldCxcclxuICAgICAgICAgICAgY29kZSA6IHJlc3BvbnNlLmNvZGUsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogc3RhdGUucmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICBjb2RlX3ZlcmlmaWVyOiBzdGF0ZS5jb2RlX3ZlcmlmaWVyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMgJiYgdHlwZW9mKHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlcXVlc3QsIHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlKHJlcXVlc3QpLnRoZW4odG9rZW5SZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiB0b2tlblJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVtrZXldID0gdG9rZW5SZXNwb25zZVtrZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ29kZTogdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc2Z1bCwgcHJvY2Vzc2luZyBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzKHN0YXRlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NvZGU6IHRva2VuIHJlc3BvbnNlIHN1Y2Nlc3NmdWwsIHJldHVybmluZyByZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCkudGhlbihpc3N1ZXIgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGF1ZGllbmNlID0gc3RhdGUuY2xpZW50X2lkO1xyXG4gICAgICAgICAgICBsZXQgY2xvY2tTa2V3SW5TZWNvbmRzID0gdGhpcy5fc2V0dGluZ3MuY2xvY2tTa2V3O1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlczogVmFsaWRhaW5nIEpXVCBhdHRyaWJ1dGVzOyB1c2luZyBjbG9jayBza2V3IChpbiBzZWNvbmRzKSBvZjogXCIsIGNsb2NrU2tld0luU2Vjb25kcyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3RBdHRyaWJ1dGVzKHJlc3BvbnNlLmlkX3Rva2VuLCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXdJblNlY29uZHMpLnRoZW4ocGF5bG9hZCA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLm5vbmNlICYmIHN0YXRlLm5vbmNlICE9PSBwYXlsb2FkLm5vbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXM6IEludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcGF5bG9hZC5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlczogTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gcGF5bG9hZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlQWNjZXNzVG9rZW4ocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5ub25jZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBub25jZSBvbiBzdGF0ZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIG5vbmNlIG9uIHN0YXRlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXNwb25zZS5pZF90b2tlbik7XHJcbiAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIgfHwgIWp3dC5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IEZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiLCBqd3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5ub25jZSAhPT0gand0LnBheWxvYWQubm9uY2UpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGtpZCA9IGp3dC5oZWFkZXIua2lkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpLnRoZW4oaXNzdWVyID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogUmVjZWl2ZWQgaXNzdWVyXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5cygpLnRoZW4oa2V5cyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc2lnbmluZyBrZXlzIGZyb20gbWV0YWRhdGFcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IFJlY2VpdmVkIHNpZ25pbmcga2V5c1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBrZXk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWtpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleXMgPSB0aGlzLl9maWx0ZXJCeUFsZyhrZXlzLCBqd3QuaGVhZGVyLmFsZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGtpZCBmb3VuZCBpbiBpZF90b2tlbiBhbmQgbW9yZSB0aGFuIG9uZSBrZXkgZm91bmQgaW4gbWV0YWRhdGFcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2lkIGlzIG1hbmRhdG9yeSBvbmx5IHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGtleXMgaW4gdGhlIHJlZmVyZW5jZWQgSldLIFNldCBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWUgaHR0cDovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNTaWduaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5cy5maWx0ZXIoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleS5raWQgPT09IGtpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVswXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaWVuY2UgPSBzdGF0ZS5jbGllbnRfaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IFZhbGlkYWluZyBKV1Q7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIiwgY2xvY2tTa2V3SW5TZWNvbmRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3QocmVzcG9uc2UuaWRfdG9rZW4sIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogSldUIHZhbGlkYXRpb24gc3VjY2Vzc2Z1bFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqd3QucGF5bG9hZC5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzdWIgcHJlc2VudCBpbiBpZF90b2tlblwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gand0LnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZmlsdGVyQnlBbGcoa2V5cywgYWxnKXtcclxuICAgICAgICB2YXIga3R5ID0gbnVsbDtcclxuICAgICAgICBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJSU1wiKSkge1xyXG4gICAgICAgICAgICBrdHkgPSBcIlJTQVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIlBTXCIpKSB7XHJcbiAgICAgICAgICAgIGt0eSA9IFwiUFNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJFU1wiKSkge1xyXG4gICAgICAgICAgICBrdHkgPSBcIkVDXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyQnlBbGc6IGFsZyBub3Qgc3VwcG9ydGVkOiBcIiwgYWxnKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlckJ5QWxnOiBMb29raW5nIGZvciBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIiwga3R5KTtcclxuXHJcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXkua3R5ID09PSBrdHk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJCeUFsZzogTnVtYmVyIG9mIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHksIGtleXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICB9XHJcblxyXG4gICAgX3ZhbGlkYXRlQWNjZXNzVG9rZW4ocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLnByb2ZpbGUpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IE5vIHByb2ZpbGUgbG9hZGVkIGZyb20gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBwcm9maWxlIGxvYWRlZCBmcm9tIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBObyBhdF9oYXNoIGluIGlkX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gYXRfaGFzaCBpbiBpZF90b2tlblwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBObyBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXNwb25zZS5pZF90b2tlbik7XHJcbiAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IEZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiLCBqd3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBoYXNoQWxnID0gand0LmhlYWRlci5hbGc7XHJcbiAgICAgICAgaWYgKCFoYXNoQWxnIHx8IGhhc2hBbGcubGVuZ3RoICE9PSA1KSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBVbnN1cHBvcnRlZCBhbGc6XCIsIGhhc2hBbGcpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOiBcIiArIGhhc2hBbGcpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBoYXNoQml0cyA9IGhhc2hBbGcuc3Vic3RyKDIsIDMpO1xyXG4gICAgICAgIGlmICghaGFzaEJpdHMpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IFVuc3VwcG9ydGVkIGFsZzpcIiwgaGFzaEFsZywgaGFzaEJpdHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOiBcIiArIGhhc2hBbGcpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhc2hCaXRzID0gcGFyc2VJbnQoaGFzaEJpdHMpO1xyXG4gICAgICAgIGlmIChoYXNoQml0cyAhPT0gMjU2ICYmIGhhc2hCaXRzICE9PSAzODQgJiYgaGFzaEJpdHMgIT09IDUxMikge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogVW5zdXBwb3J0ZWQgYWxnOlwiLCBoYXNoQWxnLCBoYXNoQml0cyk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6IFwiICsgaGFzaEFsZykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNoYSA9IFwic2hhXCIgKyBoYXNoQml0cztcclxuICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2pvc2VVdGlsLmhhc2hTdHJpbmcocmVzcG9uc2UuYWNjZXNzX3Rva2VuLCBzaGEpO1xyXG4gICAgICAgIGlmICghaGFzaCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogYWNjZXNzX3Rva2VuIGhhc2ggZmFpbGVkOlwiLCBzaGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHZhbGlkYXRlIGF0X2hhc2hcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxlZnQgPSBoYXNoLnN1YnN0cigwLCBoYXNoLmxlbmd0aCAvIDIpO1xyXG4gICAgICAgIHZhciBsZWZ0X2I2NHUgPSB0aGlzLl9qb3NlVXRpbC5oZXhUb0Jhc2U2NFVybChsZWZ0KTtcclxuICAgICAgICBpZiAobGVmdF9iNjR1ICE9PSByZXNwb25zZS5wcm9maWxlLmF0X2hhc2gpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IEZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIsIGxlZnRfYjY0dSwgcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBzdWNjZXNzXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IENoZWNrU2Vzc2lvbklGcmFtZSB9IGZyb20gJy4vQ2hlY2tTZXNzaW9uSUZyYW1lLmpzJztcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlc3Npb25Nb25pdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih1c2VyTWFuYWdlciwgQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciA9IENoZWNrU2Vzc2lvbklGcmFtZSwgdGltZXIgPSBHbG9iYWwudGltZXIpIHtcclxuICAgICAgICBpZiAoIXVzZXJNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yLmN0b3I6IE5vIHVzZXIgbWFuYWdlciBwYXNzZWQgdG8gU2Vzc2lvbk1vbml0b3JcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJNYW5hZ2VyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcclxuICAgICAgICB0aGlzLl9DaGVja1Nlc3Npb25JRnJhbWVDdG9yID0gQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvcjtcclxuICAgICAgICB0aGlzLl90aW1lciA9IHRpbWVyO1xyXG5cclxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkVXNlckxvYWRlZCh0aGlzLl9zdGFydC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkVXNlclVubG9hZGVkKHRoaXMuX3N0b3AuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmdldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAvLyBkb2luZyB0aGlzIG1hbnVhbGx5IGhlcmUgc2luY2UgY2FsbGluZyBnZXRVc2VyIFxyXG4gICAgICAgICAgICAvLyBkb2Vzbid0IHRyaWdnZXIgbG9hZCBldmVudC5cclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0KHVzZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3NldHRpbmdzLm1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXMoKS50aGVuKHNlc3Npb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0bXBVc2VyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlIDogc2Vzc2lvbi5zZXNzaW9uX3N0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zdWIgJiYgc2Vzc2lvbi5zaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wVXNlci5wcm9maWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViOiBzZXNzaW9uLnN1YixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZDogc2Vzc2lvbi5zaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQodG1wVXNlcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yIGN0b3I6IGVycm9yIGZyb20gcXVlcnlTZXNzaW9uU3RhdHVzOlwiLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBhIGN0b3JcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2Vzc2lvbk1vbml0b3IgY3RvcjogZXJyb3IgZnJvbSBnZXRVc2VyOlwiLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9zZXR0aW5ncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1hbmFnZXIuc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICBnZXQgX21ldGFkYXRhU2VydmljZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1hbmFnZXIubWV0YWRhdGFTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9jbGllbnRfaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcclxuICAgIH1cclxuICAgIGdldCBfY2hlY2tTZXNzaW9uSW50ZXJ2YWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmNoZWNrU2Vzc2lvbkludGVydmFsO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9zdG9wQ2hlY2tTZXNzaW9uT25FcnJvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Muc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgX3N0YXJ0KHVzZXIpIHtcclxuICAgICAgICBsZXQgc2Vzc2lvbl9zdGF0ZSA9IHVzZXIuc2Vzc2lvbl9zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHNlc3Npb25fc3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViID0gdXNlci5wcm9maWxlLnN1YjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpZCA9IHVzZXIucHJvZmlsZS5zaWQ7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb25fc3RhdGUsIFwiLCBzdWI6XCIsIHRoaXMuX3N1Yik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb25fc3RhdGUsIFwiLCBhbm9ueW1vdXMgdXNlclwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRDaGVja1Nlc3Npb25JZnJhbWUoKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IEluaXRpYWxpemluZyBjaGVjayBzZXNzaW9uIGlmcmFtZVwiKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudF9pZCA9IHRoaXMuX2NsaWVudF9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gdGhpcy5fY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdG9wT25FcnJvciA9IHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lID0gbmV3IHRoaXMuX0NoZWNrU2Vzc2lvbklGcmFtZUN0b3IodGhpcy5fY2FsbGJhY2suYmluZCh0aGlzKSwgY2xpZW50X2lkLCB1cmwsIGludGVydmFsLCBzdG9wT25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUuc3RhcnQoc2Vzc2lvbl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IE5vIGNoZWNrIHNlc3Npb24gaWZyYW1lIGZvdW5kIGluIHRoZSBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBub24tcHJvbWlzZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogRXJyb3IgZnJvbSBnZXRDaGVja1Nlc3Npb25JZnJhbWU6XCIsIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0KHNlc3Npb25fc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9zdG9wKCkge1xyXG4gICAgICAgIHRoaXMuX3N1YiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9zaWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX3N0b3BcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubW9uaXRvckFub255bW91c1Nlc3Npb24pIHtcclxuICAgICAgICAgICAgLy8gdXNpbmcgYSB0aW1lciB0byBkZWxheSByZS1pbml0aWFsaXphdGlvbiB0byBhdm9pZCByYWNlIGNvbmRpdGlvbnMgZHVyaW5nIHNpZ25vdXRcclxuICAgICAgICAgICAgbGV0IHRpbWVySGFuZGxlID0gdGhpcy5fdGltZXIuc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyLmNsZWFySW50ZXJ2YWwodGltZXJIYW5kbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRtcFVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25fc3RhdGUgOiBzZXNzaW9uLnNlc3Npb25fc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnN1YiAmJiBzZXNzaW9uLnNpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBVc2VyLnByb2ZpbGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWI6IHNlc3Npb24uc3ViLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkOiBzZXNzaW9uLnNpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCh0bXBVc2VyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yOiBlcnJvciBmcm9tIHF1ZXJ5U2Vzc2lvblN0YXR1czpcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XHJcbiAgICAgICAgICAgIHZhciByYWlzZUV2ZW50ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zdWIgPT09IHRoaXMuX3N1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhaXNlRXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUuc3RhcnQoc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlc3Npb24uc2lkID09PSB0aGlzLl9zaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTYW1lIHN1YiBzdGlsbCBsb2dnZWQgaW4gYXQgT1AsIHJlc3RhcnRpbmcgY2hlY2sgc2Vzc2lvbiBpZnJhbWU7IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb24uc2Vzc2lvbl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNhbWUgc3ViIHN0aWxsIGxvZ2dlZCBpbiBhdCBPUCwgc2Vzc2lvbiBzdGF0ZSBoYXMgY2hhbmdlZCwgcmVzdGFydGluZyBjaGVjayBzZXNzaW9uIGlmcmFtZTsgc2Vzc2lvbl9zdGF0ZTpcIiwgc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogRGlmZmVyZW50IHN1YmplY3Qgc2lnbmVkIGludG8gT1A6XCIsIHNlc3Npb24uc3ViKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogU3ViamVjdCBubyBsb25nZXIgc2lnbmVkIGludG8gT1BcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyYWlzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s7IHJhaXNpbmcgc2lnbmVkIG91dCBldmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNpZ25lZE91dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s7IHJhaXNpbmcgc2lnbmVkIGluIGV2ZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkSW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdWIpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogRXJyb3IgY2FsbGluZyBxdWVyeUN1cnJlbnRTaWduaW5TZXNzaW9uOyByYWlzaW5nIHNpZ25lZCBvdXQgZXZlbnRcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLl9yYWlzZVVzZXJTaWduZWRPdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XHJcbmltcG9ydCB7IFNpZ25pblN0YXRlIH0gZnJvbSAnLi9TaWduaW5TdGF0ZS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVxdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgLy8gbWFuZGF0b3J5XHJcbiAgICAgICAgdXJsLCBjbGllbnRfaWQsIHJlZGlyZWN0X3VyaSwgcmVzcG9uc2VfdHlwZSwgc2NvcGUsIGF1dGhvcml0eSxcclxuICAgICAgICAvLyBvcHRpb25hbFxyXG4gICAgICAgIGRhdGEsIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcywgcmVzb3VyY2UsIHJlc3BvbnNlX21vZGUsXHJcbiAgICAgICAgcmVxdWVzdCwgcmVxdWVzdF91cmksIGV4dHJhUXVlcnlQYXJhbXMsIHJlcXVlc3RfdHlwZSwgY2xpZW50X3NlY3JldCwgZXh0cmFUb2tlblBhcmFtcywgc2tpcFVzZXJJbmZvXHJcbiAgICB9KSB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyB1cmwgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpZW50X2lkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlZGlyZWN0X3VyaSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHJlZGlyZWN0X3VyaSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlZGlyZWN0X3VyaVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gcmVzcG9uc2VfdHlwZSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlc3BvbnNlX3R5cGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2NvcGUpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyBzY29wZSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNjb3BlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWF1dGhvcml0eSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIGF1dGhvcml0eSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhvcml0eVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvaWRjID0gU2lnbmluUmVxdWVzdC5pc09pZGMocmVzcG9uc2VfdHlwZSk7XHJcbiAgICAgICAgbGV0IGNvZGUgPSBTaWduaW5SZXF1ZXN0LmlzQ29kZShyZXNwb25zZV90eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZV9tb2RlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlX21vZGUgPSBTaWduaW5SZXF1ZXN0LmlzQ29kZShyZXNwb25zZV90eXBlKSA/IFwicXVlcnlcIiA6IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFNpZ25pblN0YXRlKHsgbm9uY2U6IG9pZGMsIFxyXG4gICAgICAgICAgICBkYXRhLCBjbGllbnRfaWQsIGF1dGhvcml0eSwgcmVkaXJlY3RfdXJpLCBcclxuICAgICAgICAgICAgY29kZV92ZXJpZmllcjogY29kZSwgXHJcbiAgICAgICAgICAgIHJlcXVlc3RfdHlwZSwgcmVzcG9uc2VfbW9kZSxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldCwgc2NvcGUsIGV4dHJhVG9rZW5QYXJhbXMsIHNraXBVc2VySW5mbyB9KTtcclxuXHJcbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJjbGllbnRfaWRcIiwgY2xpZW50X2lkKTtcclxuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInJlZGlyZWN0X3VyaVwiLCByZWRpcmVjdF91cmkpO1xyXG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwicmVzcG9uc2VfdHlwZVwiLCByZXNwb25zZV90eXBlKTtcclxuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInNjb3BlXCIsIHNjb3BlKTtcclxuXHJcbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLmlkKTtcclxuICAgICAgICBpZiAob2lkYykge1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcIm5vbmNlXCIsIHRoaXMuc3RhdGUubm9uY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29kZSkge1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImNvZGVfY2hhbGxlbmdlXCIsIHRoaXMuc3RhdGUuY29kZV9jaGFsbGVuZ2UpO1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImNvZGVfY2hhbGxlbmdlX21ldGhvZFwiLCBcIlMyNTZcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3B0aW9uYWwgPSB7IHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcywgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCByZXNwb25zZV9tb2RlIH07XHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gb3B0aW9uYWwpe1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uYWxba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwga2V5LCBvcHRpb25hbFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gZXh0cmFRdWVyeVBhcmFtcyl7XHJcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgZXh0cmFRdWVyeVBhcmFtc1trZXldKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzT2lkYyhyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwiaWRfdG9rZW5cIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gISEocmVzdWx0WzBdKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNPQXV0aChyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwidG9rZW5cIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gISEocmVzdWx0WzBdKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGlzQ29kZShyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwiY29kZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAhIShyZXN1bHRbMF0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xyXG5cclxuY29uc3QgT2lkY1Njb3BlID0gXCJvcGVuaWRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5SZXNwb25zZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1cmwsIGRlbGltaXRlciA9IFwiI1wiKSB7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZXMgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBkZWxpbWl0ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yID0gdmFsdWVzLmVycm9yO1xyXG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSB2YWx1ZXMuZXJyb3JfZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5lcnJvcl91cmkgPSB2YWx1ZXMuZXJyb3JfdXJpO1xyXG5cclxuICAgICAgICB0aGlzLmNvZGUgPSB2YWx1ZXMuY29kZTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdmFsdWVzLnN0YXRlO1xyXG4gICAgICAgIHRoaXMuaWRfdG9rZW4gPSB2YWx1ZXMuaWRfdG9rZW47XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uX3N0YXRlID0gdmFsdWVzLnNlc3Npb25fc3RhdGU7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSB2YWx1ZXMuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgIHRoaXMudG9rZW5fdHlwZSA9IHZhbHVlcy50b2tlbl90eXBlO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB2YWx1ZXMuc2NvcGU7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlID0gdW5kZWZpbmVkOyAvLyB3aWxsIGJlIHNldCBmcm9tIFJlc3BvbnNlVmFsaWRhdG9yXHJcblxyXG4gICAgICAgIHRoaXMuZXhwaXJlc19pbiA9IHZhbHVlcy5leHBpcmVzX2luO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBleHBpcmVzX2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGlyZXNfYXQpIHtcclxuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHNldCBleHBpcmVzX2luKHZhbHVlKXtcclxuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgICBpZiAodHlwZW9mIGV4cGlyZXNfaW4gPT09ICdudW1iZXInICYmIGV4cGlyZXNfaW4gPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBub3cgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwaXJlc19hdCA9IG5vdyArIGV4cGlyZXNfaW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBleHBpcmVkKCkge1xyXG4gICAgICAgIGxldCBleHBpcmVzX2luID0gdGhpcy5leHBpcmVzX2luO1xyXG4gICAgICAgIGlmIChleHBpcmVzX2luICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4cGlyZXNfaW4gPD0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2NvcGVzKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zY29wZSB8fCBcIlwiKS5zcGxpdChcIiBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzT3BlbklkQ29ubmVjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZXMuaW5kZXhPZihPaWRjU2NvcGUpID49IDAgfHwgISF0aGlzLmlkX3Rva2VuO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1N0YXRlLmpzJztcclxuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcclxuaW1wb3J0IHJhbmRvbSBmcm9tICcuL3JhbmRvbS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7bm9uY2UsIGF1dGhvcml0eSwgY2xpZW50X2lkLCByZWRpcmVjdF91cmksIGNvZGVfdmVyaWZpZXIsIHJlc3BvbnNlX21vZGUsIGNsaWVudF9zZWNyZXQsIHNjb3BlLCBleHRyYVRva2VuUGFyYW1zLCBza2lwVXNlckluZm99ID0ge30pIHtcclxuICAgICAgICBzdXBlcihhcmd1bWVudHNbMF0pO1xyXG5cclxuICAgICAgICBpZiAobm9uY2UgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9uY2UgPSByYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobm9uY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9uY2UgPSBub25jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2RlX3ZlcmlmaWVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIHJhbmRvbSgpIHByb2R1Y2VzIDMyIGxlbmd0aFxyXG4gICAgICAgICAgICB0aGlzLl9jb2RlX3ZlcmlmaWVyID0gcmFuZG9tKCkgKyByYW5kb20oKSArIHJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2RlX3ZlcmlmaWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvZGVfdmVyaWZpZXIgPSBjb2RlX3ZlcmlmaWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5jb2RlX3ZlcmlmaWVyKSB7XHJcbiAgICAgICAgICAgIGxldCBoYXNoID0gSm9zZVV0aWwuaGFzaFN0cmluZyh0aGlzLmNvZGVfdmVyaWZpZXIsIFwiU0hBMjU2XCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2RlX2NoYWxsZW5nZSA9IEpvc2VVdGlsLmhleFRvQmFzZTY0VXJsKGhhc2gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX2F1dGhvcml0eSA9IGF1dGhvcml0eTtcclxuICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSBjbGllbnRfaWQ7XHJcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGU7XHJcbiAgICAgICAgdGhpcy5fY2xpZW50X3NlY3JldCA9IGNsaWVudF9zZWNyZXQ7XHJcbiAgICAgICAgdGhpcy5fc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0gZXh0cmFUb2tlblBhcmFtcztcclxuICAgICAgICB0aGlzLl9za2lwVXNlckluZm8gPSBza2lwVXNlckluZm87XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5vbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ub25jZTtcclxuICAgIH1cclxuICAgIGdldCBhdXRob3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhvcml0eTtcclxuICAgIH1cclxuICAgIGdldCBjbGllbnRfaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9pZDtcclxuICAgIH1cclxuICAgIGdldCByZWRpcmVjdF91cmkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0X3VyaTtcclxuICAgIH1cclxuICAgIGdldCBjb2RlX3ZlcmlmaWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlX3ZlcmlmaWVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvZGVfY2hhbGxlbmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlX2NoYWxsZW5nZTtcclxuICAgIH1cclxuICAgIGdldCByZXNwb25zZV9tb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZV9tb2RlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNsaWVudF9zZWNyZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9zZWNyZXQ7XHJcbiAgICB9XHJcbiAgICBnZXQgc2NvcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3BlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGV4dHJhVG9rZW5QYXJhbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXM7XHJcbiAgICB9XHJcbiAgICBnZXQgc2tpcFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9za2lwVXNlckluZm87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJTaWduaW5TdGF0ZS50b1N0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcclxuICAgICAgICAgICAgY3JlYXRlZDogdGhpcy5jcmVhdGVkLFxyXG4gICAgICAgICAgICByZXF1ZXN0X3R5cGU6IHRoaXMucmVxdWVzdF90eXBlLFxyXG4gICAgICAgICAgICBub25jZTogdGhpcy5ub25jZSxcclxuICAgICAgICAgICAgY29kZV92ZXJpZmllcjogdGhpcy5jb2RlX3ZlcmlmaWVyLFxyXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICBhdXRob3JpdHk6IHRoaXMuYXV0aG9yaXR5LFxyXG4gICAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxyXG4gICAgICAgICAgICByZXNwb25zZV9tb2RlOiB0aGlzLnJlc3BvbnNlX21vZGUsXHJcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY2xpZW50X3NlY3JldCxcclxuICAgICAgICAgICAgc2NvcGU6IHRoaXMuc2NvcGUsXHJcbiAgICAgICAgICAgIGV4dHJhVG9rZW5QYXJhbXMgOiB0aGlzLmV4dHJhVG9rZW5QYXJhbXMsXHJcbiAgICAgICAgICAgIHNraXBVc2VySW5mbzogdGhpcy5za2lwVXNlckluZm9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmFnZVN0cmluZykge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlNpZ25pblN0YXRlLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShzdG9yYWdlU3RyaW5nKTtcclxuICAgICAgICByZXR1cm4gbmV3IFNpZ25pblN0YXRlKGRhdGEpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9TdGF0ZS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dFJlcXVlc3Qge1xyXG4gICAgY29uc3RydWN0b3Ioe3VybCwgaWRfdG9rZW5faGludCwgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLCBkYXRhLCBleHRyYVF1ZXJ5UGFyYW1zLCByZXF1ZXN0X3R5cGV9KSB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbm91dFJlcXVlc3QuY3RvcjogTm8gdXJsIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkX3Rva2VuX2hpbnQpIHtcclxuICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJpZF90b2tlbl9oaW50XCIsIGlkX3Rva2VuX2hpbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSkge1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaVwiLCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU3RhdGUoeyBkYXRhLCByZXF1ZXN0X3R5cGUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gZXh0cmFRdWVyeVBhcmFtcyl7XHJcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgZXh0cmFRdWVyeVBhcmFtc1trZXldKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dFJlc3BvbnNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHVybCkge1xyXG5cclxuICAgICAgICB2YXIgdmFsdWVzID0gVXJsVXRpbGl0eS5wYXJzZVVybEZyYWdtZW50KHVybCwgXCI/XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yID0gdmFsdWVzLmVycm9yO1xyXG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSB2YWx1ZXMuZXJyb3JfZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5lcnJvcl91cmkgPSB2YWx1ZXMuZXJyb3JfdXJpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gdmFsdWVzLnN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWxlbnRSZW5ld1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVzZXJNYW5hZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrID0gdGhpcy5fdG9rZW5FeHBpcmluZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkQWNjZXNzVG9rZW5FeHBpcmluZyh0aGlzLl9jYWxsYmFjayk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgdHJpZ2dlciBsb2FkaW5nIG9mIHRoZSB1c2VyIHNvIHRoZSBleHBpcmluZyBldmVudHMgY2FuIGJlIGluaXRpYWxpemVkXHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmdldFVzZXIoKS50aGVuKHVzZXI9PntcclxuICAgICAgICAgICAgICAgIC8vIGRlbGliZXJhdGUgbm9wXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lsZW50UmVuZXdTZXJ2aWNlLnN0YXJ0OiBFcnJvciBmcm9tIGdldFVzZXI6XCIsIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5yZW1vdmVBY2Nlc3NUb2tlbkV4cGlyaW5nKHRoaXMuX2NhbGxiYWNrKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdG9rZW5FeHBpcmluZygpIHtcclxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5zaWduaW5TaWxlbnQoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTaWxlbnRSZW5ld1NlcnZpY2UuX3Rva2VuRXhwaXJpbmc6IFNpbGVudCB0b2tlbiByZW5ld2FsIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lsZW50UmVuZXdTZXJ2aWNlLl90b2tlbkV4cGlyaW5nOiBFcnJvciBmcm9tIHNpZ25pblNpbGVudDpcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHJhbmRvbSBmcm9tICcuL3JhbmRvbS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3Ioe2lkLCBkYXRhLCBjcmVhdGVkLCByZXF1ZXN0X3R5cGV9ID0ge30pIHtcclxuICAgICAgICB0aGlzLl9pZCA9IGlkIHx8IHJhbmRvbSgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNyZWF0ZWQgPT09ICdudW1iZXInICYmIGNyZWF0ZWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZWQgPSBjcmVhdGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdF90eXBlID0gIHJlcXVlc3RfdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgICB9XHJcbiAgICBnZXQgY3JlYXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlZDtcclxuICAgIH1cclxuICAgIGdldCByZXF1ZXN0X3R5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RfdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0b3JhZ2VTdHJpbmcoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUudG9TdG9yYWdlU3RyaW5nXCIpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgICAgIGNyZWF0ZWQ6IHRoaXMuY3JlYXRlZCxcclxuICAgICAgICAgICAgcmVxdWVzdF90eXBlOiB0aGlzLnJlcXVlc3RfdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0ZShKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xlYXJTdGFsZVN0YXRlKHN0b3JhZ2UsIGFnZSkge1xyXG5cclxuICAgICAgICB2YXIgY3V0b2ZmID0gRGF0ZS5ub3coKSAvIDEwMDAgLSBhZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLmdldEFsbEtleXMoKS50aGVuKGtleXMgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IGdvdCBrZXlzXCIsIGtleXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgcCA9IHN0b3JhZ2UuZ2V0KGtleSkudGhlbihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZyhpdGVtKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogZ290IGl0ZW0gZnJvbSBrZXk6IFwiLCBrZXksIHN0YXRlLmNyZWF0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jcmVhdGVkIDw9IGN1dG9mZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogRXJyb3IgcGFyc2luZyBzdGF0ZSBmb3Iga2V5XCIsIGtleSwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogbm8gaXRlbSBpbiBzdG9yYWdlIGZvciBrZXk6IFwiLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IHJlbW92ZWQgaXRlbSBmb3Iga2V5OiBcIiwga2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2UucmVtb3ZlKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiB3YWl0aW5nIG9uIHByb21pc2UgY291bnQ6XCIsIHByb21pc2VzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9FdmVudC5qcyc7XHJcblxyXG5jb25zdCBUaW1lckR1cmF0aW9uID0gNTsgLy8gc2Vjb25kc1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVyIGV4dGVuZHMgRXZlbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRpbWVyID0gR2xvYmFsLnRpbWVyLCBub3dGdW5jID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICAgICAgdGhpcy5fdGltZXIgPSB0aW1lcjtcclxuXHJcbiAgICAgICAgaWYgKG5vd0Z1bmMpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm93RnVuYyA9IG5vd0Z1bmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ub3dGdW5jID0gKCkgPT4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBub3coKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX25vd0Z1bmMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChkdXJhdGlvbikge1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHVyYXRpb24gPSBwYXJzZUludChkdXJhdGlvbik7XHJcblxyXG4gICAgICAgIHZhciBleHBpcmF0aW9uID0gdGhpcy5ub3cgKyBkdXJhdGlvbjtcclxuICAgICAgICBpZiAodGhpcy5leHBpcmF0aW9uID09PSBleHBpcmF0aW9uICYmIHRoaXMuX3RpbWVySGFuZGxlKSB7XHJcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gcmVpbml0aWFsaXplIHRvIHNhbWUgZXhwaXJhdGlvbiwgc28gYmFpbCBvdXRcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVGltZXIuaW5pdCB0aW1lciBcIiArIHRoaXMuX25hbWUgKyBcIiBza2lwcGluZyBpbml0aWFsaXphdGlvbiBzaW5jZSBhbHJlYWR5IGluaXRpYWxpemVkIGZvciBleHBpcmF0aW9uOlwiLCB0aGlzLmV4cGlyYXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbmNlbCgpO1xyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJUaW1lci5pbml0IHRpbWVyIFwiICsgdGhpcy5fbmFtZSArIFwiIGZvciBkdXJhdGlvbjpcIiwgZHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMuX2V4cGlyYXRpb24gPSBleHBpcmF0aW9uO1xyXG5cclxuICAgICAgICAvLyB3ZSdyZSB1c2luZyBhIGZhaXJseSBzaG9ydCB0aW1lciBhbmQgdGhlbiBjaGVja2luZyB0aGUgZXhwaXJhdGlvbiBpbiB0aGVcclxuICAgICAgICAvLyBjYWxsYmFjayB0byBoYW5kbGUgc2NlbmFyaW9zIHdoZXJlIHRoZSBicm93c2VyIGRldmljZSBzbGVlcHMsIGFuZCB0aGVuXHJcbiAgICAgICAgLy8gdGhlIHRpbWVycyBlbmQgdXAgZ2V0dGluZyBkZWxheWVkLlxyXG4gICAgICAgIHZhciB0aW1lckR1cmF0aW9uID0gVGltZXJEdXJhdGlvbjtcclxuICAgICAgICBpZiAoZHVyYXRpb24gPCB0aW1lckR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRpbWVyRHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdGltZXJIYW5kbGUgPSB0aGlzLl90aW1lci5zZXRJbnRlcnZhbCh0aGlzLl9jYWxsYmFjay5iaW5kKHRoaXMpLCB0aW1lckR1cmF0aW9uICogMTAwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBleHBpcmF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBpcmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGltZXJIYW5kbGUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVGltZXIuY2FuY2VsOiBcIiwgdGhpcy5fbmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyLmNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXJIYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lckhhbmRsZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsYmFjaygpIHtcclxuICAgICAgICB2YXIgZGlmZiA9IHRoaXMuX2V4cGlyYXRpb24gLSB0aGlzLm5vdztcclxuICAgICAgICBMb2cuZGVidWcoXCJUaW1lci5jYWxsYmFjazsgXCIgKyB0aGlzLl9uYW1lICsgXCIgdGltZXIgZXhwaXJlcyBpbjpcIiwgZGlmZik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9leHBpcmF0aW9uIDw9IHRoaXMubm93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHN1cGVyLnJhaXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IEpzb25TZXJ2aWNlIH0gZnJvbSAnLi9Kc29uU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBKc29uU2VydmljZUN0b3IgPSBKc29uU2VydmljZSwgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSkge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuY3RvcjogTm8gc2V0dGluZ3MgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5fanNvblNlcnZpY2UgPSBuZXcgSnNvblNlcnZpY2VDdG9yKCk7XHJcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4Y2hhbmdlQ29kZShhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MuZ3JhbnRfdHlwZSA9IGFyZ3MuZ3JhbnRfdHlwZSB8fCBcImF1dGhvcml6YXRpb25fY29kZVwiO1xyXG4gICAgICAgIGFyZ3MuY2xpZW50X2lkID0gYXJncy5jbGllbnRfaWQgfHwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xyXG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gYXJncy5yZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xyXG5cclxuICAgICAgICBpZiAoIWFyZ3MuY29kZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IE5vIGNvZGUgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSBjb2RlIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcmdzLnJlZGlyZWN0X3VyaSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IE5vIHJlZGlyZWN0X3VyaSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHJlZGlyZWN0X3VyaSBpcyByZXF1aXJlZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJncy5jb2RlX3ZlcmlmaWVyKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY29kZV92ZXJpZmllciBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIGNvZGVfdmVyaWZpZXIgaXMgcmVxdWlyZWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFyZ3MuY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY2xpZW50X2lkIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VG9rZW5FbmRwb2ludChmYWxzZSkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IFJlY2VpdmVkIHRva2VuIGVuZHBvaW50XCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25TZXJ2aWNlLnBvc3RGb3JtKHVybCwgYXJncykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IHJlc3BvbnNlIHJlY2VpdmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleGNoYW5nZVJlZnJlc2hUb2tlbihhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MuZ3JhbnRfdHlwZSA9IGFyZ3MuZ3JhbnRfdHlwZSB8fCBcInJlZnJlc2hfdG9rZW5cIjtcclxuICAgICAgICBhcmdzLmNsaWVudF9pZCA9IGFyZ3MuY2xpZW50X2lkIHx8IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcclxuICAgICAgICBhcmdzLmNsaWVudF9zZWNyZXQgPSBhcmdzLmNsaWVudF9zZWNyZXQgfHwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcclxuXHJcbiAgICAgICAgaWYgKCFhcmdzLnJlZnJlc2hfdG9rZW4pIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VSZWZyZXNoVG9rZW46IE5vIHJlZnJlc2hfdG9rZW4gcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSByZWZyZXNoX3Rva2VuIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcmdzLmNsaWVudF9pZCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY2xpZW50X2lkIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VG9rZW5FbmRwb2ludChmYWxzZSkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogUmVjZWl2ZWQgdG9rZW4gZW5kcG9pbnRcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UucG9zdEZvcm0odXJsLCBhcmdzKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuOiByZXNwb25zZSByZWNlaXZlZFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL01ldGFkYXRhU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuXHJcbmNvbnN0IEFjY2Vzc1Rva2VuVHlwZUhpbnQgPSBcImFjY2Vzc190b2tlblwiO1xyXG5jb25zdCBSZWZyZXNoVG9rZW5UeXBlSGludCA9IFwicmVmcmVzaF90b2tlblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuUmV2b2NhdGlvbkNsaWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgWE1MSHR0cFJlcXVlc3RDdG9yID0gR2xvYmFsLlhNTEh0dHBSZXF1ZXN0LCBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQuY3RvcjogTm8gc2V0dGluZ3MgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNldHRpbmdzIHByb3ZpZGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5fWE1MSHR0cFJlcXVlc3RDdG9yID0gWE1MSHR0cFJlcXVlc3RDdG9yO1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXZva2UodG9rZW4sIHJlcXVpcmVkLCB0eXBlID0gXCJhY2Nlc3NfdG9rZW5cIikge1xyXG4gICAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogTm8gdG9rZW4gcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHRva2VuIHByb3ZpZGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlICE9PSBBY2Nlc3NUb2tlblR5cGVIaW50ICYmIHR5cGUgIT0gUmVmcmVzaFRva2VuVHlwZUhpbnQpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogSW52YWxpZCB0b2tlbiB0eXBlXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRva2VuIHR5cGUuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRSZXZvY2F0aW9uRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBSZXZvY2F0aW9uIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmV2b2NhdGlvbiBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIG5vdCByZXF1aXJlZCwgc28gZG9uJ3QgZXJyb3IgYW5kIGp1c3QgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IFJldm9raW5nIFwiICsgdHlwZSk7XHJcbiAgICAgICAgICAgIHZhciBjbGllbnRfaWQgPSB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XHJcbiAgICAgICAgICAgIHZhciBjbGllbnRfc2VjcmV0ID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZSh1cmwsIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgdG9rZW4sIHR5cGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZXZva2UodXJsLCBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHRva2VuLCB0eXBlKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IHRoaXMuX1hNTEh0dHBSZXF1ZXN0Q3RvcigpO1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsKTtcclxuXHJcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgeGhyLnN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcih4aHIuc3RhdHVzVGV4dCArIFwiIChcIiArIHhoci5zdGF0dXMgKyBcIilcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHsgXHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBOZXR3b3JrIEVycm9yLlwiKVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTmV0d29yayBFcnJvclwiKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBib2R5ID0gXCJjbGllbnRfaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50X2lkKTtcclxuICAgICAgICAgICAgaWYgKGNsaWVudF9zZWNyZXQpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkgKz0gXCImY2xpZW50X3NlY3JldD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChjbGllbnRfc2VjcmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2R5ICs9IFwiJnRva2VuX3R5cGVfaGludD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0eXBlKTtcclxuICAgICAgICAgICAgYm9keSArPSBcIiZ0b2tlbj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0b2tlbik7XHJcblxyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoYm9keSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXJsVXRpbGl0eSB7XHJcbiAgICBzdGF0aWMgYWRkUXVlcnlQYXJhbSh1cmwsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKCc/JykgPCAwKSB7XHJcbiAgICAgICAgICAgIHVybCArPSBcIj9cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1cmxbdXJsLmxlbmd0aCAtIDFdICE9PSBcIj9cIikge1xyXG4gICAgICAgICAgICB1cmwgKz0gXCImXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xyXG4gICAgICAgIHVybCArPSBcIj1cIjtcclxuICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGFyc2VVcmxGcmFnbWVudCh2YWx1ZSwgZGVsaW1pdGVyID0gXCIjXCIsIGdsb2JhbCA9IEdsb2JhbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgdmFsdWUgPSBnbG9iYWwubG9jYXRpb24uaHJlZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpZHggPSB2YWx1ZS5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xyXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cihpZHggKyAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkZWxpbWl0ZXIgPT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHdlJ3JlIGRvaW5nIHF1ZXJ5LCB0aGVuIHN0cmlwIG9mZiBoYXNoIGZyYWdtZW50IGJlZm9yZSB3ZSBwYXJzZVxyXG4gICAgICAgICAgICBpZHggPSB2YWx1ZS5pbmRleE9mKCcjJyk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgaWR4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IHt9LFxyXG4gICAgICAgICAgICByZWdleCA9IC8oW14mPV0rKT0oW14mXSopL2csXHJcbiAgICAgICAgICAgIG07XHJcblxyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICB3aGlsZSAobSA9IHJlZ2V4LmV4ZWModmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tkZWNvZGVVUklDb21wb25lbnQobVsxXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KG1bMl0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG4gICAgICAgICAgICBpZiAoY291bnRlcisrID4gNTApIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVybFV0aWxpdHkucGFyc2VVcmxGcmFnbWVudDogcmVzcG9uc2UgZXhjZWVkZWQgZXhwZWN0ZWQgbnVtYmVyIG9mIHBhcmFtZXRlcnNcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJSZXNwb25zZSBleGNlZWRlZCBleHBlY3RlZCBudW1iZXIgb2YgcGFyYW1ldGVyc1wiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHtpZF90b2tlbiwgc2Vzc2lvbl9zdGF0ZSwgYWNjZXNzX3Rva2VuLCByZWZyZXNoX3Rva2VuLCB0b2tlbl90eXBlLCBzY29wZSwgcHJvZmlsZSwgZXhwaXJlc19hdCwgc3RhdGV9KSB7XHJcbiAgICAgICAgdGhpcy5pZF90b2tlbiA9IGlkX3Rva2VuO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbl9zdGF0ZSA9IHNlc3Npb25fc3RhdGU7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Rva2VuID0gcmVmcmVzaF90b2tlbjtcclxuICAgICAgICB0aGlzLnRva2VuX3R5cGUgPSB0b2tlbl90eXBlO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLnByb2ZpbGUgPSBwcm9maWxlO1xyXG4gICAgICAgIHRoaXMuZXhwaXJlc19hdCA9IGV4cGlyZXNfYXQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBleHBpcmVzX2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGlyZXNfYXQpIHtcclxuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHNldCBleHBpcmVzX2luKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGV4cGlyZXNfaW4gPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBleHBpcmVzX2luID09PSAnbnVtYmVyJyAmJiBleHBpcmVzX2luID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLmV4cGlyZXNfYXQgPSBub3cgKyBleHBpcmVzX2luO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXhwaXJlZCgpIHtcclxuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHRoaXMuZXhwaXJlc19pbjtcclxuICAgICAgICBpZiAoZXhwaXJlc19pbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHBpcmVzX2luIDw9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjb3BlcygpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuc2NvcGUgfHwgXCJcIikuc3BsaXQoXCIgXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyLnRvU3RvcmFnZVN0cmluZ1wiKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBpZF90b2tlbjogdGhpcy5pZF90b2tlbixcclxuICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogdGhpcy5zZXNzaW9uX3N0YXRlLFxyXG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW46IHRoaXMuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICByZWZyZXNoX3Rva2VuOiB0aGlzLnJlZnJlc2hfdG9rZW4sXHJcbiAgICAgICAgICAgIHRva2VuX3R5cGU6IHRoaXMudG9rZW5fdHlwZSxcclxuICAgICAgICAgICAgc2NvcGU6IHRoaXMuc2NvcGUsXHJcbiAgICAgICAgICAgIHByb2ZpbGU6IHRoaXMucHJvZmlsZSxcclxuICAgICAgICAgICAgZXhwaXJlc19hdDogdGhpcy5leHBpcmVzX2F0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyb21TdG9yYWdlU3RyaW5nKHN0b3JhZ2VTdHJpbmcpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVXNlcihKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBKc29uU2VydmljZSB9IGZyb20gJy4vSnNvblNlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL01ldGFkYXRhU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VySW5mb1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc2V0dGluZ3MsIFxyXG4gICAgICAgIEpzb25TZXJ2aWNlQ3RvciA9IEpzb25TZXJ2aWNlLCBcclxuICAgICAgICBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlLCBcclxuICAgICAgICBqb3NlVXRpbCA9IEpvc2VVdGlsXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5jdG9yOiBObyBzZXR0aW5ncyBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLl9qc29uU2VydmljZSA9IG5ldyBKc29uU2VydmljZUN0b3IodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMuX2dldENsYWltc0Zyb21Kd3QuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xhaW1zKHRva2VuKSB7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zOiBObyB0b2tlbiBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHRva2VuIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VXNlckluZm9FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLmdldENsYWltczogcmVjZWl2ZWQgdXNlcmluZm8gdXJsXCIsIHVybCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih1cmwsIHRva2VuKS50aGVuKGNsYWltcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zOiBjbGFpbXMgcmVjZWl2ZWRcIiwgY2xhaW1zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFpbXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRDbGFpbXNGcm9tSnd0KHJlcSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXEucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIgfHwgIWp3dC5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEZhaWxlZCB0byBwYXJzZSBKV1RcIiwgand0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIga2lkID0gand0LmhlYWRlci5raWQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXNzdWVyUHJvbWlzZTtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zZXR0aW5ncy51c2VySW5mb0p3dElzc3Vlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnT1AnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlzc3VlclByb21pc2UgPSB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBTlknOlxyXG4gICAgICAgICAgICAgICAgICAgIGlzc3VlclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoand0LnBheWxvYWQuaXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy51c2VySW5mb0p3dElzc3Vlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpc3N1ZXJQcm9taXNlLnRoZW4oaXNzdWVyID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogUmVjZWl2ZWQgaXNzdWVyOlwiICsgaXNzdWVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzKCkudGhlbihrZXlzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogUmVjZWl2ZWQgc2lnbmluZyBrZXlzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFraWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cyA9IHRoaXMuX2ZpbHRlckJ5QWxnKGtleXMsIGp3dC5oZWFkZXIuYWxnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBraWQgZm91bmQgaW4gaWRfdG9rZW4gYW5kIG1vcmUgdGhhbiBvbmUga2V5IGZvdW5kIGluIG1ldGFkYXRhXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpZCBpcyBtYW5kYXRvcnkgb25seSB3aGVuIHRoZXJlIGFyZSBtdWx0aXBsZSBrZXlzIGluIHRoZSByZWZlcmVuY2VkIEpXSyBTZXQgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlZSBodHRwOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1jb3JlLTFfMC5odG1sI1NpZ25pbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXMuZmlsdGVyKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5LmtpZCA9PT0ga2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVswXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdWRpZW5jZSA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IFZhbGlkYWluZyBKV1Q7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIiwgY2xvY2tTa2V3SW5TZWNvbmRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsLnZhbGlkYXRlSnd0KHJlcS5yZXNwb25zZVRleHQsIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzLCB1bmRlZmluZWQsIHRydWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEpXVCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBqd3QucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEVycm9yIHBhcnNpbmcgSldUIHJlc3BvbnNlXCIsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZmlsdGVyQnlBbGcoa2V5cywgYWxnKSB7XHJcbiAgICAgICAgdmFyIGt0eSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGFsZy5zdGFydHNXaXRoKFwiUlNcIikpIHtcclxuICAgICAgICAgICAga3R5ID0gXCJSU0FcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJQU1wiKSkge1xyXG4gICAgICAgICAgICBrdHkgPSBcIlBTXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFsZy5zdGFydHNXaXRoKFwiRVNcIikpIHtcclxuICAgICAgICAgICAga3R5ID0gXCJFQ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9maWx0ZXJCeUFsZzogYWxnIG5vdCBzdXBwb3J0ZWQ6IFwiLCBhbGcpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2ZpbHRlckJ5QWxnOiBMb29raW5nIGZvciBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIiwga3R5KTtcclxuXHJcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXkua3R5ID09PSBrdHk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZmlsdGVyQnlBbGc6IE51bWJlciBvZiBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIiwga3R5LCBrZXlzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudCB9IGZyb20gJy4vT2lkY0NsaWVudC5qcyc7XHJcbmltcG9ydCB7IFVzZXJNYW5hZ2VyU2V0dGluZ3MgfSBmcm9tICcuL1VzZXJNYW5hZ2VyU2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyLmpzJztcclxuaW1wb3J0IHsgVXNlck1hbmFnZXJFdmVudHMgfSBmcm9tICcuL1VzZXJNYW5hZ2VyRXZlbnRzLmpzJztcclxuaW1wb3J0IHsgU2lsZW50UmVuZXdTZXJ2aWNlIH0gZnJvbSAnLi9TaWxlbnRSZW5ld1NlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uTW9uaXRvciB9IGZyb20gJy4vU2Vzc2lvbk1vbml0b3IuanMnO1xyXG5pbXBvcnQgeyBUb2tlblJldm9jYXRpb25DbGllbnQgfSBmcm9tICcuL1Rva2VuUmV2b2NhdGlvbkNsaWVudC5qcyc7XHJcbmltcG9ydCB7IFRva2VuQ2xpZW50IH0gZnJvbSAnLi9Ub2tlbkNsaWVudC5qcyc7XHJcbmltcG9ydCB7IEpvc2VVdGlsIH0gZnJvbSAnLi9Kb3NlVXRpbC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJNYW5hZ2VyIGV4dGVuZHMgT2lkY0NsaWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncyA9IHt9LFxyXG4gICAgICAgIFNpbGVudFJlbmV3U2VydmljZUN0b3IgPSBTaWxlbnRSZW5ld1NlcnZpY2UsXHJcbiAgICAgICAgU2Vzc2lvbk1vbml0b3JDdG9yID0gU2Vzc2lvbk1vbml0b3IsXHJcbiAgICAgICAgVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3RvciA9IFRva2VuUmV2b2NhdGlvbkNsaWVudCxcclxuICAgICAgICBUb2tlbkNsaWVudEN0b3IgPSBUb2tlbkNsaWVudCxcclxuICAgICAgICBqb3NlVXRpbCA9IEpvc2VVdGlsXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgaWYgKCEoc2V0dGluZ3MgaW5zdGFuY2VvZiBVc2VyTWFuYWdlclNldHRpbmdzKSkge1xyXG4gICAgICAgICAgICBzZXR0aW5ncyA9IG5ldyBVc2VyTWFuYWdlclNldHRpbmdzKHNldHRpbmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoc2V0dGluZ3MpO1xyXG5cclxuICAgICAgICB0aGlzLl9ldmVudHMgPSBuZXcgVXNlck1hbmFnZXJFdmVudHMoc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3U2VydmljZSA9IG5ldyBTaWxlbnRSZW5ld1NlcnZpY2VDdG9yKHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBvcmRlciBpcyBpbXBvcnRhbnQgZm9yIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczsgdGhlc2Ugc2VydmljZXMgZGVwZW5kIHVwb24gdGhlIGV2ZW50cy5cclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvbWF0aWNTaWxlbnRSZW5ldykge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5jdG9yOiBhdXRvbWF0aWNTaWxlbnRSZW5ldyBpcyBjb25maWd1cmVkLCBzZXR0aW5nIHVwIHNpbGVudCByZW5ld1wiKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFNpbGVudFJlbmV3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5tb25pdG9yU2Vzc2lvbikge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5jdG9yOiBtb25pdG9yU2Vzc2lvbiBpcyBjb25maWd1cmVkLCBzZXR0aW5nIHVwIHNlc3Npb24gbW9uaXRvclwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Vzc2lvbk1vbml0b3IgPSBuZXcgU2Vzc2lvbk1vbml0b3JDdG9yKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50ID0gbmV3IFRva2VuUmV2b2NhdGlvbkNsaWVudEN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX3Rva2VuQ2xpZW50ID0gbmV3IFRva2VuQ2xpZW50Q3Rvcih0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fam9zZVV0aWwgPSBqb3NlVXRpbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3JlZGlyZWN0TmF2aWdhdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnJlZGlyZWN0TmF2aWdhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9wb3B1cE5hdmlnYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5wb3B1cE5hdmlnYXRvcjtcclxuICAgIH1cclxuICAgIGdldCBfaWZyYW1lTmF2aWdhdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmlmcmFtZU5hdmlnYXRvcjtcclxuICAgIH1cclxuICAgIGdldCBfdXNlclN0b3JlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnVzZXJTdG9yZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXZlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5nZXRVc2VyOiB1c2VyIGxvYWRlZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMubG9hZCh1c2VyLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLmdldFVzZXI6IHVzZXIgbm90IGZvdW5kIGluIHN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVVzZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVVc2VyKG51bGwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnJlbW92ZVVzZXI6IHVzZXIgcmVtb3ZlZCBmcm9tIHN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy51bmxvYWQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5SZWRpcmVjdChhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpyXCI7XHJcbiAgICAgICAgbGV0IG5hdlBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdXNlUmVwbGFjZVRvTmF2aWdhdGUgOiBhcmdzLnVzZVJlcGxhY2VUb05hdmlnYXRlXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IsIG5hdlBhcmFtcykudGhlbigoKT0+e1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0OiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbmluUmVkaXJlY3RDYWxsYmFjayh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluRW5kKHVybCB8fCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvci51cmwpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5SZWRpcmVjdENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2s6IG5vIHN1YlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbmluUG9wdXAoYXJncyA9IHt9KSB7XHJcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xyXG5cclxuICAgICAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic2k6cFwiO1xyXG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvcHVwX3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cDogTm8gcG9wdXBfcmVkaXJlY3RfdXJpIG9yIHJlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gcG9wdXBfcmVkaXJlY3RfdXJpIG9yIHJlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gdXJsO1xyXG4gICAgICAgIGFyZ3MuZGlzcGxheSA9IFwicG9wdXBcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbihhcmdzLCB0aGlzLl9wb3B1cE5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd0ZlYXR1cmVzOiBhcmdzLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd0ZlYXR1cmVzLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd1RhcmdldDogYXJncy5wb3B1cFdpbmRvd1RhcmdldCB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93VGFyZ2V0XHJcbiAgICAgICAgfSkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXA6IHNpZ25pblBvcHVwIHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXA6IG5vIHN1YlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaWduaW5Qb3B1cENhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5DYWxsYmFjayh1cmwsIHRoaXMuX3BvcHVwTmF2aWdhdG9yKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2s6IG5vIHN1YlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2sgZXJyb3I6IFwiICsgZXJyICYmIGVyci5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5TaWxlbnQoYXJncyA9IHt9KSB7XHJcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xyXG5cclxuICAgICAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic2k6c1wiO1xyXG4gICAgICAgIC8vIGZpcnN0IGRldGVybWluZSBpZiB3ZSBoYXZlIGEgcmVmcmVzaCB0b2tlbiwgb3IgbmVlZCB0byB1c2UgaWZyYW1lXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5yZWZyZXNoX3Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzLnJlZnJlc2hfdG9rZW4gPSB1c2VyLnJlZnJlc2hfdG9rZW47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlUmVmcmVzaFRva2VuKGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXJncy5pZF90b2tlbl9oaW50ID0gYXJncy5pZF90b2tlbl9oaW50IHx8ICh0aGlzLnNldHRpbmdzLmluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyAmJiB1c2VyICYmIHVzZXIuaWRfdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIgJiYgdGhpcy5fc2V0dGluZ3MudmFsaWRhdGVTdWJPblNpbGVudFJlbmV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50LCBzdWJqZWN0IHByaW9yIHRvIHNpbGVudCByZW5ldzogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuY3VycmVudF9zdWIgPSB1c2VyLnByb2ZpbGUuc3ViO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pblNpbGVudElmcmFtZShhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF91c2VSZWZyZXNoVG9rZW4oYXJncyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuKGFyZ3MpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl91c2VSZWZyZXNoVG9rZW46IE5vIHJlc3BvbnNlIHJldHVybmVkIGZyb20gdG9rZW4gZW5kcG9pbnRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyByZXNwb25zZSByZXR1cm5lZCBmcm9tIHRva2VuIGVuZHBvaW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3VzZVJlZnJlc2hUb2tlbjogTm8gYWNjZXNzIHRva2VuIHJldHVybmVkIGZyb20gdG9rZW4gZW5kcG9pbnRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQgZnJvbSB0b2tlbiBlbmRwb2ludFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkVG9rZW5WYWxpZGF0aW9uID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pZF90b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRva2VuVmFsaWRhdGlvbiA9IHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbih1c2VyLnByb2ZpbGUsIHJlc3VsdC5pZF90b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWRUb2tlblZhbGlkYXRpb24udGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl91c2VSZWZyZXNoVG9rZW46IHJlZnJlc2ggdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5pZF90b2tlbiA9IHJlc3VsdC5pZF90b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5hY2Nlc3NfdG9rZW4gPSByZXN1bHQuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLnJlZnJlc2hfdG9rZW4gPSByZXN1bHQucmVmcmVzaF90b2tlbiB8fCB1c2VyLnJlZnJlc2hfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZXhwaXJlc19pbiA9IHJlc3VsdC5leHBpcmVzX2luO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVVc2VyKHVzZXIpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW4ocHJvZmlsZSwgaWRfdG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpLnRoZW4oaXNzdWVyID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsLnZhbGlkYXRlSnd0QXR0cmlidXRlcyhpZF90b2tlbiwgaXNzdWVyLCB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQsIHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldykudGhlbihwYXlsb2FkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IEZhaWxlZCB0byB2YWxpZGF0ZSBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHZhbGlkYXRlIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLnN1YiAhPT0gcHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBzdWIgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggY3VycmVudCBzdWJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInN1YiBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBjdXJyZW50IHN1YlwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5hdXRoX3RpbWUgJiYgcGF5bG9hZC5hdXRoX3RpbWUgIT09IHByb2ZpbGUuYXV0aF90aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXV0aF90aW1lIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF1dGhfdGltZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXV0aF90aW1lIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF1dGhfdGltZVwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5henAgJiYgcGF5bG9hZC5henAgIT09IHByb2ZpbGUuYXpwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXpwIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF6cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXpwIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF6cFwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBheWxvYWQuYXpwICYmIHByb2ZpbGUuYXpwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXpwIG5vdCBpbiBpZF90b2tlbiwgYnV0IHByZXNlbnQgaW4gb3JpZ2luYWwgaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImF6cCBub3QgaW4gaWRfdG9rZW4sIGJ1dCBwcmVzZW50IGluIG9yaWdpbmFsIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9zaWduaW5TaWxlbnRJZnJhbWUoYXJncyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50X3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQ6IE5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IHVybDtcclxuICAgICAgICBhcmdzLnByb21wdCA9IGFyZ3MucHJvbXB0IHx8IFwibm9uZVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluKGFyZ3MsIHRoaXMuX2lmcmFtZU5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDogYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0XHJcbiAgICAgICAgfSkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50OiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudDogbm8gc3ViXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5TaWxlbnRDYWxsYmFjayh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluQ2FsbGJhY2sodXJsLCB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudENhbGxiYWNrOiBubyBzdWJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25pbkNhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRTaWduaW5SZXNwb25zZVN0YXRlKHVybCkudGhlbigoe3N0YXRlLCByZXNwb25zZX0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLnJlcXVlc3RfdHlwZSA9PT0gXCJzaTpyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2sodXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNpOnBcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmluUG9wdXBDYWxsYmFjayh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0X3R5cGUgPT09IFwic2k6c1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduaW5TaWxlbnRDYWxsYmFjayh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpbnZhbGlkIHJlc3BvbnNlX3R5cGUgaW4gc3RhdGVcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25vdXRDYWxsYmFjayh1cmwsIGtlZXBPcGVuKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlKHVybCkudGhlbigoe3N0YXRlLCByZXNwb25zZX0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNvOnJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25vdXRSZWRpcmVjdENhbGxiYWNrKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNvOnBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25vdXRQb3B1cENhbGxiYWNrKHVybCwga2VlcE9wZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImludmFsaWQgcmVzcG9uc2VfdHlwZSBpbiBzdGF0ZVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHF1ZXJ5U2Vzc2lvblN0YXR1cyhhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpzXCI7IC8vIHRoaXMgYWN0cyBsaWtlIGEgc2lnbmluIHNpbGVudFxyXG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnNpbGVudF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJncy5yZWRpcmVjdF91cmkgPSB1cmw7XHJcbiAgICAgICAgYXJncy5wcm9tcHQgPSBcIm5vbmVcIjtcclxuICAgICAgICBhcmdzLnJlc3BvbnNlX3R5cGUgPSBhcmdzLnJlc3BvbnNlX3R5cGUgfHwgdGhpcy5zZXR0aW5ncy5xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZTtcclxuICAgICAgICBhcmdzLnNjb3BlID0gYXJncy5zY29wZSB8fCBcIm9wZW5pZFwiO1xyXG4gICAgICAgIGFyZ3Muc2tpcFVzZXJJbmZvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pblN0YXJ0KGFyZ3MsIHRoaXMuX2lmcmFtZU5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDogYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0XHJcbiAgICAgICAgfSkudGhlbihuYXZSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWduaW5SZXNwb25zZShuYXZSZXNwb25zZS51cmwpLnRoZW4oc2lnbmluUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBnb3Qgc2lnbmluIHJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzaWduaW5SZXNwb25zZS5zZXNzaW9uX3N0YXRlICYmIHNpZ25pblJlc3BvbnNlLnByb2ZpbGUuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXM6IHF1ZXJ5U2Vzc2lvblN0YXR1cyBzdWNjZXNzIGZvciBzdWI6IFwiLCAgc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25fc3RhdGU6IHNpZ25pblJlc3BvbnNlLnNlc3Npb25fc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yjogc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZDogc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zaWRcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJxdWVyeVNlc3Npb25TdGF0dXMgc3VjY2Vzc2Z1bCwgdXNlciBub3QgYXV0aGVudGljYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyLnNlc3Npb25fc3RhdGUgJiYgdGhpcy5zZXR0aW5ncy5tb25pdG9yQW5vbnltb3VzU2Vzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIubWVzc2FnZSA9PSBcImxvZ2luX3JlcXVpcmVkXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID09IFwiY29uc2VudF9yZXF1aXJlZFwiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9PSBcImludGVyYWN0aW9uX3JlcXVpcmVkXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID09IFwiYWNjb3VudF9zZWxlY3Rpb25fcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1czogcXVlcnlTZXNzaW9uU3RhdHVzIHN1Y2Nlc3MgZm9yIGFub255bW91cyB1c2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogZXJyLnNlc3Npb25fc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2lnbmluKGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMpLnRoZW4obmF2UmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluRW5kKG5hdlJlc3BvbnNlLnVybCwgYXJncyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfc2lnbmluU3RhcnQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xyXG5cclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnByZXBhcmUobmF2aWdhdG9yUGFyYW1zKS50aGVuKGhhbmRsZSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5TdGFydDogZ290IG5hdmlnYXRvciB3aW5kb3cgaGFuZGxlXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2lnbmluUmVxdWVzdChhcmdzKS50aGVuKHNpZ25pblJlcXVlc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pblN0YXJ0OiBnb3Qgc2lnbmluIHJlcXVlc3RcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLnVybCA9IHNpZ25pblJlcXVlc3QudXJsO1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLmlkID0gc2lnbmluUmVxdWVzdC5zdGF0ZS5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLm5hdmlnYXRlKG5hdmlnYXRvclBhcmFtcyk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pblN0YXJ0OiBFcnJvciBhZnRlciBwcmVwYXJpbmcgbmF2aWdhdG9yLCBjbG9zaW5nIG5hdmlnYXRvciB3aW5kb3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3NpZ25pbkVuZCh1cmwsIGFyZ3MgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwpLnRoZW4oc2lnbmluUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiBnb3Qgc2lnbmluIHJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcihzaWduaW5SZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXJncy5jdXJyZW50X3N1Yikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MuY3VycmVudF9zdWIgIT09IHVzZXIucHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiBjdXJyZW50IHVzZXIgZG9lcyBub3QgbWF0Y2ggdXNlciByZXR1cm5lZCBmcm9tIHNpZ25pbi4gc3ViIGZyb20gc2lnbmluOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImxvZ2luX3JlcXVpcmVkXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5FbmQ6IGN1cnJlbnQgdXNlciBtYXRjaGVzIHVzZXIgcmV0dXJuZWQgZnJvbSBzaWduaW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcih1c2VyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5FbmQ6IHVzZXIgc3RvcmVkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9zaWduaW5DYWxsYmFjayh1cmwsIG5hdmlnYXRvcikge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5DYWxsYmFja1wiKTtcclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmNhbGxiYWNrKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbm91dFJlZGlyZWN0KGFyZ3MgPSB7fSkge1xyXG4gICAgICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcclxuXHJcbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNvOnJcIjtcclxuICAgICAgICBsZXQgcG9zdExvZ291dFJlZGlyZWN0VXJpID0gYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgaWYgKHBvc3RMb2dvdXRSZWRpcmVjdFVyaSl7XHJcbiAgICAgICAgICAgIGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9zdExvZ291dFJlZGlyZWN0VXJpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmF2UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB1c2VSZXBsYWNlVG9OYXZpZ2F0ZSA6IGFyZ3MudXNlUmVwbGFjZVRvTmF2aWdhdGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0U3RhcnQoYXJncywgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IsIG5hdlBhcmFtcykudGhlbigoKT0+e1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25vdXRSZWRpcmVjdDogc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNpZ25vdXRSZWRpcmVjdENhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0RW5kKHVybCB8fCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvci51cmwpLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UmVkaXJlY3RDYWxsYmFjazogc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25vdXRQb3B1cChhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzbzpwXCI7XHJcbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gdXJsO1xyXG4gICAgICAgIGFyZ3MuZGlzcGxheSA9IFwicG9wdXBcIjtcclxuICAgICAgICBpZiAoYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkpe1xyXG4gICAgICAgICAgICAvLyB3ZSdyZSBwdXR0aW5nIGEgZHVtbXkgZW50cnkgaW4gaGVyZSBiZWNhdXNlIHdlXHJcbiAgICAgICAgICAgIC8vIG5lZWQgYSB1bmlxdWUgaWQgZnJvbSB0aGUgc3RhdGUgZm9yIG5vdGlmaWNhdGlvblxyXG4gICAgICAgICAgICAvLyB0byB0aGUgcGFyZW50IHdpbmRvdywgd2hpY2ggaXMgbmVjZXNzYXJ5IGlmIHdlXHJcbiAgICAgICAgICAgIC8vIHBsYW4gdG8gcmV0dXJuIGJhY2sgdG8gdGhlIGNsaWVudCBhZnRlciBzaWdub3V0XHJcbiAgICAgICAgICAgIC8vIGFuZCBzbyB3ZSBjYW4gY2xvc2UgdGhlIHBvcHVwIGFmdGVyIHNpZ25vdXRcclxuICAgICAgICAgICAgYXJncy5zdGF0ZSA9IGFyZ3Muc3RhdGUgfHwge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbm91dChhcmdzLCB0aGlzLl9wb3B1cE5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd0ZlYXR1cmVzOiBhcmdzLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd0ZlYXR1cmVzLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd1RhcmdldDogYXJncy5wb3B1cFdpbmRvd1RhcmdldCB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93VGFyZ2V0XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbm91dFBvcHVwOiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbm91dFBvcHVwQ2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xyXG4gICAgICAgIGlmICh0eXBlb2Yoa2VlcE9wZW4pID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YodXJsKSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIGtlZXBPcGVuID0gdXJsO1xyXG4gICAgICAgICAgICB1cmwgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRlbGltaXRlciA9ICc/JztcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBOYXZpZ2F0b3IuY2FsbGJhY2sodXJsLCBrZWVwT3BlbiwgZGVsaW1pdGVyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UG9wdXBDYWxsYmFjazogc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2lnbm91dChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRTdGFydChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcykudGhlbihuYXZSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0RW5kKG5hdlJlc3BvbnNlLnVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfc2lnbm91dFN0YXJ0KGFyZ3MgPSB7fSwgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IucHJlcGFyZShuYXZpZ2F0b3JQYXJhbXMpLnRoZW4oaGFuZGxlID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogZ290IG5hdmlnYXRvciB3aW5kb3cgaGFuZGxlXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IGxvYWRlZCBjdXJyZW50IHVzZXIgZnJvbSBzdG9yYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXZva2VQcm9taXNlID0gdGhpcy5fc2V0dGluZ3MucmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQgPyB0aGlzLl9yZXZva2VJbnRlcm5hbCh1c2VyKSA6IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldm9rZVByb21pc2UudGhlbigoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZF90b2tlbiA9IGFyZ3MuaWRfdG9rZW5faGludCB8fCB1c2VyICYmIHVzZXIuaWRfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IFNldHRpbmcgaWRfdG9rZW4gaW50byBzaWdub3V0IHJlcXVlc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MuaWRfdG9rZW5faGludCA9IGlkX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlVXNlcigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiB1c2VyIHJlbW92ZWQsIGNyZWF0aW5nIHNpZ25vdXQgcmVxdWVzdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNpZ25vdXRSZXF1ZXN0KGFyZ3MpLnRoZW4oc2lnbm91dFJlcXVlc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogZ290IHNpZ25vdXQgcmVxdWVzdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMudXJsID0gc2lnbm91dFJlcXVlc3QudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25vdXRSZXF1ZXN0LnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLmlkID0gc2lnbm91dFJlcXVlc3Quc3RhdGUuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLm5hdmlnYXRlKG5hdmlnYXRvclBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogRXJyb3IgYWZ0ZXIgcHJlcGFyaW5nIG5hdmlnYXRvciwgY2xvc2luZyBuYXZpZ2F0b3Igd2luZG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9zaWdub3V0RW5kKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsKS50aGVuKHNpZ25vdXRSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0RW5kOiBnb3Qgc2lnbm91dCByZXNwb25zZVwiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzaWdub3V0UmVzcG9uc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2b2tlQWNjZXNzVG9rZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUludGVybmFsKHVzZXIsIHRydWUpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuOiByZW1vdmluZyB0b2tlbiBwcm9wZXJ0aWVzIGZyb20gdXNlciBhbmQgcmUtc3RvcmluZ1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5hY2Nlc3NfdG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIucmVmcmVzaF90b2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5leHBpcmVzX2F0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnRva2VuX3R5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIodXNlcikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuOiB1c2VyIHN0b3JlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmxvYWQodXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5yZXZva2VBY2Nlc3NUb2tlbjogYWNjZXNzIHRva2VuIHJldm9rZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZXZva2VJbnRlcm5hbCh1c2VyLCByZXF1aXJlZCkge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIHZhciBhY2Nlc3NfdG9rZW4gPSB1c2VyLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgdmFyIHJlZnJlc2hfdG9rZW4gPSB1c2VyLnJlZnJlc2hfdG9rZW47XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlQWNjZXNzVG9rZW5JbnRlcm5hbChhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXRTdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJ0U3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWF0U3VjY2VzcyAmJiAhcnRTdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucmV2b2tlQWNjZXNzVG9rZW46IG5vIG5lZWQgdG8gcmV2b2tlIGR1ZSB0byBubyB0b2tlbihzKSwgb3IgSldUIGZvcm1hdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0U3VjY2VzcyB8fCBydFN1Y2Nlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmV2b2tlQWNjZXNzVG9rZW5JbnRlcm5hbChhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIEpXVCB2cy4gcmVmZXJlbmNlIHRva2VuXHJcbiAgICAgICAgaWYgKCFhY2Nlc3NfdG9rZW4gfHwgYWNjZXNzX3Rva2VuLmluZGV4T2YoJy4nKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2UoYWNjZXNzX3Rva2VuLCByZXF1aXJlZCkudGhlbigoKSA9PiB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQpIHtcclxuICAgICAgICBpZiAoIXJlZnJlc2hfdG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZShyZWZyZXNoX3Rva2VuLCByZXF1aXJlZCwgXCJyZWZyZXNoX3Rva2VuXCIpLnRoZW4oKCkgPT4gdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTaWxlbnRSZW5ldygpIHtcclxuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld1NlcnZpY2Uuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wU2lsZW50UmVuZXcoKSB7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdTZXJ2aWNlLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3VzZXJTdG9yZUtleSgpIHtcclxuICAgICAgICByZXR1cm4gYHVzZXI6JHt0aGlzLnNldHRpbmdzLmF1dGhvcml0eX06JHt0aGlzLnNldHRpbmdzLmNsaWVudF9pZH1gO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb2FkVXNlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlLmdldCh0aGlzLl91c2VyU3RvcmVLZXkpLnRoZW4oc3RvcmFnZVN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdG9yYWdlU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fbG9hZFVzZXI6IHVzZXIgc3RvcmFnZVN0cmluZyBsb2FkZWRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVXNlci5mcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX2xvYWRVc2VyOiBubyB1c2VyIHN0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlVXNlcih1c2VyKSB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc3RvcmVVc2VyOiBzdG9yaW5nIHVzZXJcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RvcmFnZVN0cmluZyA9IHVzZXIudG9TdG9yYWdlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VyU3RvcmUuc2V0KHRoaXMuX3VzZXJTdG9yZUtleSwgc3RvcmFnZVN0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJzdG9yZVVzZXIuc3RvcmVVc2VyOiByZW1vdmluZyB1c2VyXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlLnJlbW92ZSh0aGlzLl91c2VyU3RvcmVLZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRXZlbnRzIH0gZnJvbSAnLi9BY2Nlc3NUb2tlbkV2ZW50cy5qcyc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9FdmVudC5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlck1hbmFnZXJFdmVudHMgZXh0ZW5kcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcclxuICAgICAgICBzdXBlcihzZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZCA9IG5ldyBFdmVudChcIlVzZXIgbG9hZGVkXCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZCA9IG5ldyBFdmVudChcIlVzZXIgdW5sb2FkZWRcIik7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvciA9IG5ldyBFdmVudChcIlNpbGVudCByZW5ldyBlcnJvclwiKTtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkSW4gPSBuZXcgRXZlbnQoXCJVc2VyIHNpZ25lZCBpblwiKTtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkT3V0ID0gbmV3IEV2ZW50KFwiVXNlciBzaWduZWQgb3V0XCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZCA9IG5ldyBFdmVudChcIlVzZXIgc2Vzc2lvbiBjaGFuZ2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQodXNlciwgcmFpc2VFdmVudD10cnVlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMubG9hZFwiKTtcclxuICAgICAgICBzdXBlci5sb2FkKHVzZXIpO1xyXG4gICAgICAgIGlmIChyYWlzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJMb2FkZWQucmFpc2UodXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdW5sb2FkKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLnVubG9hZFwiKTtcclxuICAgICAgICBzdXBlci51bmxvYWQoKTtcclxuICAgICAgICB0aGlzLl91c2VyVW5sb2FkZWQucmFpc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyTG9hZGVkKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVVzZXJMb2FkZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyTG9hZGVkLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFVzZXJVbmxvYWRlZChjYikge1xyXG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVVzZXJVbmxvYWRlZChjYikge1xyXG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5yZW1vdmVIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTaWxlbnRSZW5ld0Vycm9yKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVNpbGVudFJlbmV3RXJyb3IoY2IpIHtcclxuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld0Vycm9yLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlU2lsZW50UmVuZXdFcnJvclwiLCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3RXJyb3IucmFpc2UoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVXNlclNpZ25lZEluKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluLmFkZEhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlVXNlclNpZ25lZEluKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgX3JhaXNlVXNlclNpZ25lZEluKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTaWduZWRJblwiKTtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkSW4ucmFpc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyU2lnbmVkT3V0KGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZE91dC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVVzZXJTaWduZWRPdXQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkT3V0LnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgX3JhaXNlVXNlclNpZ25lZE91dCgpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkT3V0XCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQucmFpc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyU2Vzc2lvbkNoYW5nZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQuYWRkSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbiAgICByZW1vdmVVc2VyU2Vzc2lvbkNoYW5nZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQucmVtb3ZlSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbiAgICBfcmFpc2VVc2VyU2Vzc2lvbkNoYW5nZWQoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkXCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZC5yYWlzZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudFNldHRpbmdzIH0gZnJvbSAnLi9PaWRjQ2xpZW50U2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdE5hdmlnYXRvciB9IGZyb20gJy4vUmVkaXJlY3ROYXZpZ2F0b3IuanMnO1xyXG5pbXBvcnQgeyBQb3B1cE5hdmlnYXRvciB9IGZyb20gJy4vUG9wdXBOYXZpZ2F0b3IuanMnO1xyXG5pbXBvcnQgeyBJRnJhbWVOYXZpZ2F0b3IgfSBmcm9tICcuL0lGcmFtZU5hdmlnYXRvci5qcyc7XHJcbmltcG9ydCB7IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnLi9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuaW1wb3J0IHsgU2lnbmluUmVxdWVzdCB9IGZyb20gJy4vU2lnbmluUmVxdWVzdC5qcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSA2MDtcclxuY29uc3QgRGVmYXVsdENoZWNrU2Vzc2lvbkludGVydmFsID0gMjAwMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyTWFuYWdlclNldHRpbmdzIGV4dGVuZHMgT2lkY0NsaWVudFNldHRpbmdzIHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICBwb3B1cF9yZWRpcmVjdF91cmksXHJcbiAgICAgICAgcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxyXG4gICAgICAgIHBvcHVwV2luZG93RmVhdHVyZXMsXHJcbiAgICAgICAgcG9wdXBXaW5kb3dUYXJnZXQsXHJcbiAgICAgICAgc2lsZW50X3JlZGlyZWN0X3VyaSxcclxuICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dCxcclxuICAgICAgICBhdXRvbWF0aWNTaWxlbnRSZW5ldyA9IGZhbHNlLFxyXG4gICAgICAgIHZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyA9IGZhbHNlLFxyXG4gICAgICAgIGluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyA9IHRydWUsXHJcbiAgICAgICAgbW9uaXRvclNlc3Npb24gPSB0cnVlLFxyXG4gICAgICAgIG1vbml0b3JBbm9ueW1vdXNTZXNzaW9uID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tTZXNzaW9uSW50ZXJ2YWwgPSBEZWZhdWx0Q2hlY2tTZXNzaW9uSW50ZXJ2YWwsXHJcbiAgICAgICAgc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IgPSB0cnVlLFxyXG4gICAgICAgIHF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlLFxyXG4gICAgICAgIHJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0ID0gZmFsc2UsXHJcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUsXHJcbiAgICAgICAgcmVkaXJlY3ROYXZpZ2F0b3IgPSBuZXcgUmVkaXJlY3ROYXZpZ2F0b3IoKSxcclxuICAgICAgICBwb3B1cE5hdmlnYXRvciA9IG5ldyBQb3B1cE5hdmlnYXRvcigpLFxyXG4gICAgICAgIGlmcmFtZU5hdmlnYXRvciA9IG5ldyBJRnJhbWVOYXZpZ2F0b3IoKSxcclxuICAgICAgICB1c2VyU3RvcmUgPSBuZXcgV2ViU3RvcmFnZVN0YXRlU3RvcmUoeyBzdG9yZTogR2xvYmFsLnNlc3Npb25TdG9yYWdlIH0pXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICBzdXBlcihhcmd1bWVudHNbMF0pO1xyXG5cclxuICAgICAgICB0aGlzLl9wb3B1cF9yZWRpcmVjdF91cmkgPSBwb3B1cF9yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwV2luZG93RmVhdHVyZXMgPSBwb3B1cFdpbmRvd0ZlYXR1cmVzO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwV2luZG93VGFyZ2V0ID0gcG9wdXBXaW5kb3dUYXJnZXQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3NpbGVudF9yZWRpcmVjdF91cmkgPSBzaWxlbnRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX3NpbGVudFJlcXVlc3RUaW1lb3V0ID0gc2lsZW50UmVxdWVzdFRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy5fYXV0b21hdGljU2lsZW50UmVuZXcgPSBhdXRvbWF0aWNTaWxlbnRSZW5ldztcclxuICAgICAgICB0aGlzLl92YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXcgPSB2YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXc7XHJcbiAgICAgICAgdGhpcy5faW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3ID0gaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3O1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XHJcblxyXG4gICAgICAgIHRoaXMuX21vbml0b3JTZXNzaW9uID0gbW9uaXRvclNlc3Npb247XHJcbiAgICAgICAgdGhpcy5fbW9uaXRvckFub255bW91c1Nlc3Npb24gPSBtb25pdG9yQW5vbnltb3VzU2Vzc2lvbjtcclxuICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JbnRlcnZhbCA9IGNoZWNrU2Vzc2lvbkludGVydmFsO1xyXG4gICAgICAgIHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yID0gc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XHJcbiAgICAgICAgaWYgKHF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3F1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlID0gcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGU7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmIChhcmd1bWVudHNbMF0gJiYgYXJndW1lbnRzWzBdLnJlc3BvbnNlX3R5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUgPSBTaWduaW5SZXF1ZXN0LmlzT2lkYyhhcmd1bWVudHNbMF0ucmVzcG9uc2VfdHlwZSkgPyBcImlkX3Rva2VuXCIgOiBcImNvZGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3F1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlID0gXCJpZF90b2tlblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCA9IHJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0O1xyXG5cclxuICAgICAgICB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvciA9IHJlZGlyZWN0TmF2aWdhdG9yO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwTmF2aWdhdG9yID0gcG9wdXBOYXZpZ2F0b3I7XHJcbiAgICAgICAgdGhpcy5faWZyYW1lTmF2aWdhdG9yID0gaWZyYW1lTmF2aWdhdG9yO1xyXG5cclxuICAgICAgICB0aGlzLl91c2VyU3RvcmUgPSB1c2VyU3RvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBvcHVwX3JlZGlyZWN0X3VyaSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBfcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvcHVwV2luZG93RmVhdHVyZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwV2luZG93RmVhdHVyZXM7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9wdXBXaW5kb3dUYXJnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwV2luZG93VGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaWxlbnRfcmVkaXJlY3RfdXJpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWxlbnRfcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgIGdldCBzaWxlbnRSZXF1ZXN0VGltZW91dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lsZW50UmVxdWVzdFRpbWVvdXQ7XHJcbiAgICB9XHJcbiAgICBnZXQgYXV0b21hdGljU2lsZW50UmVuZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9tYXRpY1NpbGVudFJlbmV3O1xyXG4gICAgfVxyXG4gICAgZ2V0IHZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3O1xyXG4gICAgfVxyXG4gICAgZ2V0IGluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3O1xyXG4gICAgfVxyXG4gICAgZ2V0IGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9uaXRvclNlc3Npb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbml0b3JTZXNzaW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb25pdG9yQW5vbnltb3VzU2Vzc2lvbjtcclxuICAgIH1cclxuICAgIGdldCBjaGVja1Nlc3Npb25JbnRlcnZhbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XHJcbiAgICB9XHJcbiAgICBnZXQgcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGU7XHJcbiAgICB9XHJcbiAgICBnZXQgcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZWRpcmVjdE5hdmlnYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9wdXBOYXZpZ2F0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwTmF2aWdhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlmcmFtZU5hdmlnYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWZyYW1lTmF2aWdhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB1c2VyU3RvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7cHJlZml4ID0gXCJvaWRjLlwiLCBzdG9yZSA9IEdsb2JhbC5sb2NhbFN0b3JhZ2V9ID0ge30pIHtcclxuICAgICAgICB0aGlzLl9zdG9yZSA9IHN0b3JlO1xyXG4gICAgICAgIHRoaXMuX3ByZWZpeCA9IHByZWZpeDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLnNldFwiLCBrZXkpO1xyXG5cclxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0b3JlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoa2V5KSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUuZ2V0XCIsIGtleSk7XHJcblxyXG4gICAgICAgIGtleSA9IHRoaXMuX3ByZWZpeCArIGtleTtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9zdG9yZS5nZXRJdGVtKGtleSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGtleSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLnJlbW92ZVwiLCBrZXkpO1xyXG5cclxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XHJcblxyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5fc3RvcmUuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIHRoaXMuX3N0b3JlLnJlbW92ZUl0ZW0oa2V5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxLZXlzKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLmdldEFsbEtleXNcIik7XHJcblxyXG4gICAgICAgIHZhciBrZXlzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9zdG9yZS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuX3N0b3JlLmtleShpbmRleCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5fcHJlZml4KSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleS5zdWJzdHIodGhpcy5fcHJlZml4Lmxlbmd0aCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGtleXMpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbkJhc2VkIG9uIHRoZSB3b3JrIG9mIEF1dGgwXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9hdXRoMC9pZHRva2VuLXZlcmlmaWVyXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9hdXRoMC9pZHRva2VuLXZlcmlmaWVyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuV2hpY2ggaXMgYmFzZWQgb24gdGhlIHdvcmsgb2YgVG9tIFd1XHJcbmh0dHA6Ly93d3ctY3Mtc3R1ZGVudHMuc3RhbmZvcmQuZWR1L350ancvanNibi9cclxuaHR0cDovL3d3dy1jcy1zdHVkZW50cy5zdGFuZm9yZC5lZHUvfnRqdy9qc2JuL0xJQ0VOU0VcclxuKi9cclxuXHJcbi8qXHJcbiAqIFRvIHN1cHBvcnQgbW9zdCBiYXNpYyBPcGVuSWQgdXNlIGNhc2VzICh1c2luZyBSU0EyNTYpLCB3ZSBjYW4gZ2V0IGF3YXkgd2l0aG91dFxyXG4gKiByZXF1aXJpbmcgdGhlIGZ1bGwganJzYXNpZ24gZmVhdHVyZSBzZXQgKGFuZCByZXN1bHRpbmcgbWFzc2l2ZSBidW5kbGUpLlxyXG4gKlxyXG4gKiAtIFN1cHBvcnQgUlNBIDI1NiBhbGdvcml0aG0gKG9wdGlvbmFsbHkgY291bGQgc3VwcG9ydCBSU0EqIGZhbWlseSlcclxuICogLSBQYXJzZSBKV1QgdG9rZW5zIHVzaW5nIHRoZSAobikgcGFyYW1ldGVyLlxyXG4gKiAtIFZlcmlmeSBzaWduYXR1cmUgb2YgaWRfdG9rZW5zXHJcbiAqIC0gVmVyaWZ5IGF0X2hhc2ggb2YgYWNjZXNzX3Rva2Vuc1xyXG4gKiAtIFBlcmZvcm0gY29tbW9uIGJhc2U2NCBlbmNvZGluZy9kZWNvZGluZyB0YXNrcy5cclxuICovXHJcblxyXG5pbXBvcnQgSlNCTiBmcm9tICdqc2JuJztcclxuaW1wb3J0IFNIQTI1NiBmcm9tICdjcnlwdG8tanMvc2hhMjU2JztcclxuaW1wb3J0IGJhc2U2NEpzIGZyb20gJ2Jhc2U2NC1qcyc7XHJcblxyXG52YXIgQmlnSW50ZWdlciA9IEpTQk4uQmlnSW50ZWdlcjtcclxuXHJcbi8qISAoYykgVG9tIFd1IHwgaHR0cDovL3d3dy1jcy1zdHVkZW50cy5zdGFuZm9yZC5lZHUvfnRqdy9qc2JuL1xyXG4gKi9cclxudmFyIGI2NG1hcCA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xyXG52YXIgYjY0cGFkID0gXCI9XCI7XHJcblxyXG5jb25zdCBCYXNlNjQgPSB7XHJcbiAgICBiNjR0b2hleChzKSB7XHJcbiAgICAgICAgdmFyIHJldCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgdmFyIGsgPSAwOyAvLyBiNjQgc3RhdGUsIDAtM1xyXG4gICAgICAgIHZhciBzbG9wO1xyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYocy5jaGFyQXQoaSkgPT09IGI2NHBhZCkgYnJlYWs7XHJcbiAgICAgICAgICAgIHZhciB2ID0gYjY0bWFwLmluZGV4T2Yocy5jaGFyQXQoaSkpO1xyXG4gICAgICAgICAgICBpZih2IDwgMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmKGsgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHYgPj4gMik7XHJcbiAgICAgICAgICAgICAgICBzbG9wID0gdiAmIDM7XHJcbiAgICAgICAgICAgICAgICBrID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGsgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChzbG9wIDw8IDIpIHwgKHYgPj4gNCkpO1xyXG4gICAgICAgICAgICAgICAgc2xvcCA9IHYgJiAweGY7XHJcbiAgICAgICAgICAgICAgICBrID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGsgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHNsb3ApO1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodiA+PiAyKTtcclxuICAgICAgICAgICAgICAgIHNsb3AgPSB2ICYgMztcclxuICAgICAgICAgICAgICAgIGsgPSAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHNsb3AgPDwgMikgfCAodiA+PiA0KSk7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh2ICYgMHhmKTtcclxuICAgICAgICAgICAgICAgIGsgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGsgPT09IDEpXHJcbiAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHNsb3AgPDwgMik7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0sXHJcbiAgICBoZXhUb0Jhc2U2NChoKSB7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgdmFyIGM7XHJcbiAgICAgICAgdmFyIHJldCA9IFwiXCI7XHJcbiAgICAgICAgZm9yKGkgPSAwOyBpKzMgPD0gaC5sZW5ndGg7IGkrPTMpIHtcclxuICAgICAgICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksaSszKSwxNik7XHJcbiAgICAgICAgICAgIHJldCArPSBiNjRtYXAuY2hhckF0KGMgPj4gNikgKyBiNjRtYXAuY2hhckF0KGMgJiA2Myk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGkrMSA9PT0gaC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksaSsxKSwxNik7XHJcbiAgICAgICAgICAgIHJldCArPSBiNjRtYXAuY2hhckF0KGMgPDwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaSsyID09PSBoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSxpKzIpLDE2KTtcclxuICAgICAgICAgICAgcmV0ICs9IGI2NG1hcC5jaGFyQXQoYyA+PiAyKSArIGI2NG1hcC5jaGFyQXQoKGMgJiAzKSA8PCA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGI2NHBhZCkgd2hpbGUoKHJldC5sZW5ndGggJiAzKSA+IDApIHJldCArPSBiNjRwYWQ7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0sXHJcblxyXG4gICAgcGFkZGluZyhzdHIpIHtcclxuICAgICAgICB2YXIgbW9kID0gKHN0ci5sZW5ndGggJSA0KTtcclxuICAgICAgICB2YXIgcGFkID0gNCAtIG1vZDtcclxuXHJcbiAgICAgICAgaWYgKG1vZCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0ciArIChuZXcgQXJyYXkoMSArIHBhZCkpLmpvaW4oJz0nKTtcclxuICAgIH0sXHJcblxyXG4gICAgYnl0ZUFycmF5VG9IZXgocmF3KSB7XHJcbiAgICAgICAgdmFyIEhFWCA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhdy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgX2hleCA9IHJhd1tpXS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIEhFWCArPSAoX2hleC5sZW5ndGggPT09IDIgPyBfaGV4IDogJzAnICsgX2hleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gSEVYO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWNvZGVUb0hFWChzdHIpIHtcclxuICAgICAgICByZXR1cm4gQmFzZTY0LmJ5dGVBcnJheVRvSGV4KGJhc2U2NEpzLnRvQnl0ZUFycmF5KEJhc2U2NC5wYWRkaW5nKHN0cikpKTtcclxuICAgIH0sXHJcblxyXG4gICAgYmFzZTY0VG9CYXNlNjRVcmwocykge1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoLz0vZywgXCJcIik7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvXFwrL2csIFwiLVwiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC9cXC8vZywgXCJfXCIpO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cmxEZWNvZGUoc3RyKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLy0vZywgJysnKSAvLyBDb252ZXJ0ICctJyB0byAnKydcclxuICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJy8nKSAvLyBDb252ZXJ0ICdfJyB0byAnLydcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xccy9nLCAnICcpOyAvLyBDb252ZXJ0ICdcXHMnIHRvICcgJ1xyXG5cclxuICAgICAgICByZXR1cm4gYXRvYihzdHIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbnZhciBEaWdlc3RJbmZvSGVhZCA9IHtcclxuICAgIHNoYTE6ICczMDIxMzAwOTA2MDUyYjBlMDMwMjFhMDUwMDA0MTQnLFxyXG4gICAgc2hhMjI0OiAnMzAyZDMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjA0MDUwMDA0MWMnLFxyXG4gICAgc2hhMjU2OiAnMzAzMTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAxMDUwMDA0MjAnLFxyXG4gICAgc2hhMzg0OiAnMzA0MTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAyMDUwMDA0MzAnLFxyXG4gICAgc2hhNTEyOiAnMzA1MTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAzMDUwMDA0NDAnLFxyXG4gICAgbWQyOiAnMzAyMDMwMGMwNjA4MmE4NjQ4ODZmNzBkMDIwMjA1MDAwNDEwJyxcclxuICAgIG1kNTogJzMwMjAzMDBjMDYwODJhODY0ODg2ZjcwZDAyMDUwNTAwMDQxMCcsXHJcbiAgICByaXBlbWQxNjA6ICczMDIxMzAwOTA2MDUyYjI0MDMwMjAxMDUwMDA0MTQnXHJcbn07XHJcblxyXG52YXIgRGlnZXN0QWxncyA9IHtcclxuICAgIHNoYTI1NjogU0hBMjU2LFxyXG4gICAgU0hBMjU2OlNIQTI1NlxyXG59O1xyXG5cclxuZnVuY3Rpb24gUlNBVmVyaWZpZXIobW9kdWx1cywgZXhwKSB7XHJcbiAgICB0aGlzLm4gPSBudWxsO1xyXG4gICAgdGhpcy5lID0gMDtcclxuXHJcbiAgICBpZiAobW9kdWx1cyAhPSBudWxsICYmIGV4cCAhPSBudWxsICYmIG1vZHVsdXMubGVuZ3RoID4gMCAmJiBleHAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMubiA9IG5ldyBCaWdJbnRlZ2VyKG1vZHVsdXMsIDE2KTtcclxuICAgICAgICB0aGlzLmUgPSBwYXJzZUludChleHAsIDE2KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGtleSBkYXRhJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFsZ29yaXRobUZyb21EaWdlc3QoaERpZ2VzdEluZm8pIHtcclxuICAgIGZvciAodmFyIGFsZ05hbWUgaW4gRGlnZXN0SW5mb0hlYWQpIHtcclxuICAgICAgICB2YXIgaGVhZCA9IERpZ2VzdEluZm9IZWFkW2FsZ05hbWVdO1xyXG4gICAgICAgIHZhciBsZW4gPSBoZWFkLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGhEaWdlc3RJbmZvLnN1YnN0cmluZygwLCBsZW4pID09PSBoZWFkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhbGc6IGFsZ05hbWUsXHJcbiAgICAgICAgICAgICAgICBoYXNoOiBoRGlnZXN0SW5mby5zdWJzdHJpbmcobGVuKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufVxyXG5cclxuXHJcblJTQVZlcmlmaWVyLnByb3RvdHlwZS52ZXJpZnkgPSBmdW5jdGlvbiAobXNnLCBlbmNzaWcpIHtcclxuICAgIGVuY3NpZyA9IEJhc2U2NC5kZWNvZGVUb0hFWChlbmNzaWcpO1xyXG4gICAgZW5jc2lnID0gZW5jc2lnLnJlcGxhY2UoL1teMC05YS1mXXxbXFxzXFxuXV0vaWcsICcnKTtcclxuXHJcbiAgICB2YXIgc2lnID0gbmV3IEJpZ0ludGVnZXIoZW5jc2lnLCAxNik7XHJcblxyXG4gICAgaWYgKHNpZy5iaXRMZW5ndGgoKSA+IHRoaXMubi5iaXRMZW5ndGgoKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2lnbmF0dXJlIGRvZXMgbm90IG1hdGNoIHdpdGggdGhlIGtleSBtb2R1bHVzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkZWNyeXB0ZWRTaWcgPSBzaWcubW9kUG93SW50KHRoaXMuZSwgdGhpcy5uKTtcclxuICAgIHZhciBkaWdlc3QgPSBkZWNyeXB0ZWRTaWcudG9TdHJpbmcoMTYpLnJlcGxhY2UoL14xZiswMC8sICcnKTtcclxuICAgIHZhciBkaWdlc3RJbmZvID0gZ2V0QWxnb3JpdGhtRnJvbURpZ2VzdChkaWdlc3QpO1xyXG5cclxuICAgIGlmIChkaWdlc3RJbmZvLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIURpZ2VzdEFsZ3MuaGFzT3duUHJvcGVydHkoZGlnZXN0SW5mby5hbGcpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYXNoaW5nIGFsZ29yaXRobSBpcyBub3Qgc3VwcG9ydGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtc2dIYXNoID0gRGlnZXN0QWxnc1tkaWdlc3RJbmZvLmFsZ10obXNnKS50b1N0cmluZygpO1xyXG4gICAgcmV0dXJuIChkaWdlc3RJbmZvLmhhc2ggPT09IG1zZ0hhc2gpO1xyXG59O1xyXG5cclxuY29uc3QgQWxsb3dlZFNpZ25pbmdBbGdzID0gWydSUzI1NiddO1xyXG5cclxuY29uc3QgandzID0ge1xyXG4gICAgSldTOiB7XHJcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIHZhciBoZWFkZXI7XHJcbiAgICAgICAgICAgIHZhciBwYXlsb2FkO1xyXG5cclxuICAgICAgICAgICAgLy8gVGhpcyBkaXZlcmdlcyBmcm9tIEF1dGgwJ3MgaW1wbGVtZW50YXRpb24sIHdoaWNoIHRocm93cyByYXRoZXIgdGhhblxyXG4gICAgICAgICAgICAvLyByZXR1cm5pbmcgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIgPSBKU09OLnBhcnNlKEJhc2U2NC51cmxEZWNvZGUocGFydHNbMF0pKTtcclxuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKEJhc2U2NC51cmxEZWNvZGUocGFydHNbMV0pKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignVG9rZW4gaGVhZGVyIG9yIHBheWxvYWQgaXMgbm90IHZhbGlkIEpTT04nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlck9iajogaGVhZGVyLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZE9iajogcGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcmlmeTogZnVuY3Rpb24oand0LCBrZXksIGFsbG93ZWRTaWduaW5nQWxncyA9IFtdKSB7XHJcbiAgICAgICAgICAgIGFsbG93ZWRTaWduaW5nQWxncy5mb3JFYWNoKChhbGcpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChBbGxvd2VkU2lnbmluZ0FsZ3MuaW5kZXhPZihhbGcpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaWduaW5nIGFsZ29yaXRobTogJyArIGFsZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgdmVyaWZ5ID0gbmV3IFJTQVZlcmlmaWVyKGtleS5uLCBrZXkuZSk7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGp3dC5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGhlYWRlckFuZFBheWxvYWQgPSBbcGFydHNbMF0sIHBhcnRzWzFdXS5qb2luKCcuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZXJpZnkudmVyaWZ5KGhlYWRlckFuZFBheWxvYWQsIHBhcnRzWzJdKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IEtleVV0aWwgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgZGVjb2RlZCBrZXlzIGluIEhleCBmb3JtYXQgZm9yIHVzZSBpbiBjcnlwdG8gZnVuY3Rpb25zLlxyXG4gICAgICogU3VwcG9ydHMgbW9kdWx1cy9leHBvbmVudC1zdHlsZSBrZXlzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBrZXkgdGhlIHNlY3VyaXR5IGtleVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0S2V5KGtleSkge1xyXG4gICAgICAgIGlmIChrZXkua3R5ID09PSAnUlNBJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZTogQmFzZTY0LmRlY29kZVRvSEVYKGtleS5lKSxcclxuICAgICAgICAgICAgICAgIG46IEJhc2U2NC5kZWNvZGVUb0hFWChrZXkubiksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBYNTA5ID0ge1xyXG4gICAgZ2V0UHVibGljS2V5RnJvbUNlcnRQRU06IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkLiBVc2UgdGhlIGZ1bGwgb2lkYy1jbGllbnQgbGlicmFyeSBpZiB5b3UgbmVlZCBzdXBwb3J0IGZvciBYNTA5LicpO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNyeXB0byA9IHtcclxuICAgIFV0aWw6IHtcclxuICAgICAgICBoYXNoU3RyaW5nOiBmdW5jdGlvbih2YWx1ZSwgYWxnKSB7XHJcbiAgICAgICAgICAgIHZhciBoYXNoRnVuYyA9IERpZ2VzdEFsZ3NbYWxnXTtcclxuICAgICAgICAgICAgcmV0dXJuIGhhc2hGdW5jKHZhbHVlKS50b1N0cmluZygpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBoZXh0b2I2NHUocykge1xyXG4gICAgaWYgKHMubGVuZ3RoICUgMiA9PT0gMSkge1xyXG4gICAgICAgIHMgPSAnMCcgKyBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEJhc2U2NC5iYXNlNjRUb0Jhc2U2NFVybChCYXNlNjQuaGV4VG9CYXNlNjQocykpO1xyXG59XHJcblxyXG5jb25zdCB7YjY0dG9oZXh9ID0gQmFzZTY0O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGp3cyxcclxuICAgIEtleVV0aWwsXHJcbiAgICBYNTA5LFxyXG4gICAgY3J5cHRvLFxyXG4gICAgaGV4dG9iNjR1LFxyXG4gICAgYjY0dG9oZXgsXHJcbiAgICBBbGxvd2VkU2lnbmluZ0FsZ3NcclxufTtcclxuIiwiLyoqXHJcbiAqIEdlbmVyYXRlcyBSRkM0MTIyIHZlcnNpb24gNCBndWlkICgpXHJcbiAqL1xyXG5cclxudmFyIGNyeXB0byA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyAod2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG8pIDogbnVsbDtcclxuXHJcbmZ1bmN0aW9uIF9jcnlwdG9VdWlkdjQoKSB7XHJcbiAgcmV0dXJuIChbMWU3XSstMWUzKy00ZTMrLThlMystMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYyA9PlxyXG4gICAgKGMgXiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmIDE1ID4+IGMgLyA0KS50b1N0cmluZygxNilcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF91dWlkdjQoKSB7XHJcbiAgICByZXR1cm4gKFsxZTddKy0xZTMrLTRlMystOGUzKy0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+XHJcbiAgICAoYyBeIE1hdGgucmFuZG9tKCkgKiAxNiA+PiBjIC8gNCkudG9TdHJpbmcoMTYpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5kb20oKSB7XHJcbiAgdmFyIGhhc0NyeXB0byA9IGNyeXB0byAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8gIT09IG51bGw7XHJcbiAgdmFyIGhhc1JhbmRvbVZhbHVlcyA9IGhhc0NyeXB0byAmJiAodHlwZW9mKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpICE9ICd1bmRlZmluZWQnKTsgIFxyXG4gIHZhciB1dWlkID0gaGFzUmFuZG9tVmFsdWVzID8gX2NyeXB0b1V1aWR2NCA6IF91dWlkdjQ7XHJcbiAgcmV0dXJuIHV1aWQoKS5yZXBsYWNlKC8tL2csICcnKTtcclxufVxyXG4iLCJjb25zdCBWZXJzaW9uID0gXCIxLjExLjAtYmV0YS4xXCI7IGV4cG9ydCB7VmVyc2lvbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
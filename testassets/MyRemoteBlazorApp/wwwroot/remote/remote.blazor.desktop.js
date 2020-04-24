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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Boot.Desktop.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@aspnet/signalr/dist/esm/AbortController.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/AbortController.js ***!
  \******************************************************************/
/*! exports provided: AbortController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortController", function() { return AbortController; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Rough polyfill of https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// We don't actually ever use the API being polyfilled, we always use the polyfill because
// it's a very new API right now.
// Not exported from index.
/** @private */
var AbortController = /** @class */ (function () {
    function AbortController() {
        this.isAborted = false;
        this.onabort = null;
    }
    AbortController.prototype.abort = function () {
        if (!this.isAborted) {
            this.isAborted = true;
            if (this.onabort) {
                this.onabort();
            }
        }
    };
    Object.defineProperty(AbortController.prototype, "signal", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbortController.prototype, "aborted", {
        get: function () {
            return this.isAborted;
        },
        enumerable: true,
        configurable: true
    });
    return AbortController;
}());

//# sourceMappingURL=AbortController.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/DefaultHttpClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/DefaultHttpClient.js ***!
  \********************************************************************/
/*! exports provided: DefaultHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultHttpClient", function() { return DefaultHttpClient; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./node_modules/@aspnet/signalr/dist/esm/Errors.js");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "./node_modules/@aspnet/signalr/dist/esm/HttpClient.js");
/* harmony import */ var _NodeHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeHttpClient */ "./node_modules/@aspnet/signalr/dist/esm/NodeHttpClient.js");
/* harmony import */ var _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XhrHttpClient */ "./node_modules/@aspnet/signalr/dist/esm/XhrHttpClient.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/** Default implementation of {@link @aspnet/signalr.HttpClient}. */
var DefaultHttpClient = /** @class */ (function (_super) {
    __extends(DefaultHttpClient, _super);
    /** Creates a new instance of the {@link @aspnet/signalr.DefaultHttpClient}, using the provided {@link @aspnet/signalr.ILogger} to log messages. */
    function DefaultHttpClient(logger) {
        var _this = _super.call(this) || this;
        if (typeof XMLHttpRequest !== "undefined") {
            _this.httpClient = new _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__["XhrHttpClient"](logger);
        }
        else {
            _this.httpClient = new _NodeHttpClient__WEBPACK_IMPORTED_MODULE_2__["NodeHttpClient"](logger);
        }
        return _this;
    }
    /** @inheritDoc */
    DefaultHttpClient.prototype.send = function (request) {
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return this.httpClient.send(request);
    };
    DefaultHttpClient.prototype.getCookieString = function (url) {
        return this.httpClient.getCookieString(url);
    };
    return DefaultHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));

//# sourceMappingURL=DefaultHttpClient.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/DefaultReconnectPolicy.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/DefaultReconnectPolicy.js ***!
  \*************************************************************************/
/*! exports provided: DefaultReconnectPolicy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultReconnectPolicy", function() { return DefaultReconnectPolicy; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// 0, 2, 10, 30 second delays before reconnect attempts.
var DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2000, 10000, 30000, null];
/** @private */
var DefaultReconnectPolicy = /** @class */ (function () {
    function DefaultReconnectPolicy(retryDelays) {
        this.retryDelays = retryDelays !== undefined ? retryDelays.concat([null]) : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
    }
    DefaultReconnectPolicy.prototype.nextRetryDelayInMilliseconds = function (previousRetryCount) {
        return this.retryDelays[previousRetryCount];
    };
    return DefaultReconnectPolicy;
}());

//# sourceMappingURL=DefaultReconnectPolicy.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/Errors.js":
/*!*********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/Errors.js ***!
  \*********************************************************/
/*! exports provided: HttpError, TimeoutError, AbortError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return HttpError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return AbortError; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Error thrown when an HTTP request fails. */
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    /** Constructs a new instance of {@link @aspnet/signalr.HttpError}.
     *
     * @param {string} errorMessage A descriptive error message.
     * @param {number} statusCode The HTTP status code represented by this error.
     */
    function HttpError(errorMessage, statusCode) {
        var _newTarget = this.constructor;
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        _this.statusCode = statusCode;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return HttpError;
}(Error));

/** Error thrown when a timeout elapses. */
var TimeoutError = /** @class */ (function (_super) {
    __extends(TimeoutError, _super);
    /** Constructs a new instance of {@link @aspnet/signalr.TimeoutError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    function TimeoutError(errorMessage) {
        var _newTarget = this.constructor;
        if (errorMessage === void 0) { errorMessage = "A timeout occurred."; }
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return TimeoutError;
}(Error));

/** Error thrown when an action is aborted. */
var AbortError = /** @class */ (function (_super) {
    __extends(AbortError, _super);
    /** Constructs a new instance of {@link AbortError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    function AbortError(errorMessage) {
        var _newTarget = this.constructor;
        if (errorMessage === void 0) { errorMessage = "An abort occurred."; }
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return AbortError;
}(Error));

//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/HandshakeProtocol.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HandshakeProtocol.js ***!
  \********************************************************************/
/*! exports provided: HandshakeProtocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandshakeProtocol", function() { return HandshakeProtocol; });
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextMessageFormat */ "./node_modules/@aspnet/signalr/dist/esm/TextMessageFormat.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.


/** @private */
var HandshakeProtocol = /** @class */ (function () {
    function HandshakeProtocol() {
    }
    // Handshake request is always JSON
    HandshakeProtocol.prototype.writeHandshakeRequest = function (handshakeRequest) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].write(JSON.stringify(handshakeRequest));
    };
    HandshakeProtocol.prototype.parseHandshakeResponse = function (data) {
        var responseMessage;
        var messageData;
        var remainingData;
        if (Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"])(data) || (typeof Buffer !== "undefined" && data instanceof Buffer)) {
            // Format is binary but still need to read JSON text from handshake response
            var binaryData = new Uint8Array(data);
            var separatorIndex = binaryData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].RecordSeparatorCode);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            var responseLength = separatorIndex + 1;
            messageData = String.fromCharCode.apply(null, binaryData.slice(0, responseLength));
            remainingData = (binaryData.byteLength > responseLength) ? binaryData.slice(responseLength).buffer : null;
        }
        else {
            var textData = data;
            var separatorIndex = textData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].RecordSeparator);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            var responseLength = separatorIndex + 1;
            messageData = textData.substring(0, responseLength);
            remainingData = (textData.length > responseLength) ? textData.substring(responseLength) : null;
        }
        // At this point we should have just the single handshake message
        var messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].parse(messageData);
        var response = JSON.parse(messages[0]);
        if (response.type) {
            throw new Error("Expected a handshake response from the server.");
        }
        responseMessage = response;
        // multiple messages could have arrived with handshake
        // return additional data to be parsed as usual, or null if all parsed
        return [remainingData, responseMessage];
    };
    return HandshakeProtocol;
}());

//# sourceMappingURL=HandshakeProtocol.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/HttpClient.js":
/*!*************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HttpClient.js ***!
  \*************************************************************/
/*! exports provided: HttpResponse, HttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Represents an HTTP response. */
var HttpResponse = /** @class */ (function () {
    function HttpResponse(statusCode, statusText, content) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.content = content;
    }
    return HttpResponse;
}());

/** Abstraction over an HTTP client.
 *
 * This class provides an abstraction over an HTTP client so that a different implementation can be provided on different platforms.
 */
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function (url, options) {
        return this.send(__assign({}, options, { method: "GET", url: url }));
    };
    HttpClient.prototype.post = function (url, options) {
        return this.send(__assign({}, options, { method: "POST", url: url }));
    };
    HttpClient.prototype.delete = function (url, options) {
        return this.send(__assign({}, options, { method: "DELETE", url: url }));
    };
    /** Gets all cookies that apply to the specified URL.
     *
     * @param url The URL that the cookies are valid for.
     * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
     */
    // @ts-ignore
    HttpClient.prototype.getCookieString = function (url) {
        return "";
    };
    return HttpClient;
}());

//# sourceMappingURL=HttpClient.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/HttpConnection.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HttpConnection.js ***!
  \*****************************************************************/
/*! exports provided: HttpConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConnection", function() { return HttpConnection; });
/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHttpClient */ "./node_modules/@aspnet/signalr/dist/esm/DefaultHttpClient.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js");
/* harmony import */ var _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LongPollingTransport */ "./node_modules/@aspnet/signalr/dist/esm/LongPollingTransport.js");
/* harmony import */ var _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServerSentEventsTransport */ "./node_modules/@aspnet/signalr/dist/esm/ServerSentEventsTransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
/* harmony import */ var _WebSocketTransport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebSocketTransport */ "./node_modules/@aspnet/signalr/dist/esm/WebSocketTransport.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var MAX_REDIRECTS = 100;
var WebSocketModule = null;
var EventSourceModule = null;
if (_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && "function" !== "undefined") {
    // In order to ignore the dynamic require in webpack builds we need to do this magic
    // @ts-ignore: TS doesn't know about these names
    var requireFunc =  true ? require : undefined;
    WebSocketModule = requireFunc("ws");
    EventSourceModule = requireFunc("eventsource");
}
/** @private */
var HttpConnection = /** @class */ (function () {
    function HttpConnection(url, options) {
        if (options === void 0) { options = {}; }
        this.features = {};
        _Utils__WEBPACK_IMPORTED_MODULE_5__["Arg"].isRequired(url, "url");
        this.logger = Object(_Utils__WEBPACK_IMPORTED_MODULE_5__["createLogger"])(options.logger);
        this.baseUrl = this.resolveUrl(url);
        options = options || {};
        options.logMessageContent = options.logMessageContent || false;
        if (!_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
            options.WebSocket = WebSocket;
        }
        else if (_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && !options.WebSocket) {
            if (WebSocketModule) {
                options.WebSocket = WebSocketModule;
            }
        }
        if (!_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && typeof EventSource !== "undefined" && !options.EventSource) {
            options.EventSource = EventSource;
        }
        else if (_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && !options.EventSource) {
            if (typeof EventSourceModule !== "undefined") {
                options.EventSource = EventSourceModule;
            }
        }
        this.httpClient = options.httpClient || new _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_0__["DefaultHttpClient"](this.logger);
        this.connectionState = "Disconnected" /* Disconnected */;
        this.connectionStarted = false;
        this.options = options;
        this.onreceive = null;
        this.onclose = null;
    }
    HttpConnection.prototype.start = function (transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var message, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transferFormat = transferFormat || _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"].Binary;
                        _Utils__WEBPACK_IMPORTED_MODULE_5__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"], "transferFormat");
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Starting connection with transfer format '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][transferFormat] + "'.");
                        if (this.connectionState !== "Disconnected" /* Disconnected */) {
                            return [2 /*return*/, Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."))];
                        }
                        this.connectionState = "Connecting " /* Connecting */;
                        this.startInternalPromise = this.startInternal(transferFormat);
                        return [4 /*yield*/, this.startInternalPromise];
                    case 1:
                        _a.sent();
                        if (!(this.connectionState === "Disconnecting" /* Disconnecting */)) return [3 /*break*/, 3];
                        message = "Failed to start the HttpConnection before stop() was called.";
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, message);
                        // We cannot await stopPromise inside startInternal since stopInternal awaits the startInternalPromise.
                        return [4 /*yield*/, this.stopPromise];
                    case 2:
                        // We cannot await stopPromise inside startInternal since stopInternal awaits the startInternalPromise.
                        _a.sent();
                        return [2 /*return*/, Promise.reject(new Error(message))];
                    case 3:
                        if (this.connectionState !== "Connected" /* Connected */) {
                            message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, message);
                            return [2 /*return*/, Promise.reject(new Error(message))];
                        }
                        _a.label = 4;
                    case 4:
                        this.connectionStarted = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.send = function (data) {
        if (this.connectionState !== "Connected" /* Connected */) {
            return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
        }
        // Transport will not be null if state is connected
        return this.transport.send(data);
    };
    HttpConnection.prototype.stop = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.connectionState === "Disconnected" /* Disconnected */) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnected state.");
                            return [2 /*return*/, Promise.resolve()];
                        }
                        if (this.connectionState === "Disconnecting" /* Disconnecting */) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnecting state.");
                            return [2 /*return*/, this.stopPromise];
                        }
                        this.connectionState = "Disconnecting" /* Disconnecting */;
                        this.stopPromise = new Promise(function (resolve) {
                            // Don't complete stop() until stopConnection() completes.
                            _this.stopPromiseResolver = resolve;
                        });
                        // stopInternal should never throw so just observe it.
                        return [4 /*yield*/, this.stopInternal(error)];
                    case 1:
                        // stopInternal should never throw so just observe it.
                        _a.sent();
                        return [4 /*yield*/, this.stopPromise];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.stopInternal = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Set error as soon as possible otherwise there is a race between
                        // the transport closing and providing an error and the error from a close message
                        // We would prefer the close message error.
                        this.stopError = error;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.startInternalPromise];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        if (!this.transport) return [3 /*break*/, 9];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.transport.stop()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        e_2 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "HttpConnection.transport.stop() threw error '" + e_2 + "'.");
                        this.stopConnection();
                        return [3 /*break*/, 8];
                    case 8:
                        this.transport = undefined;
                        return [3 /*break*/, 10];
                    case 9:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
                        this.stopConnection();
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.startInternal = function (transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var url, negotiateResponse, redirects, _loop_1, this_1, e_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.baseUrl;
                        this.accessTokenFactory = this.options.accessTokenFactory;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 12, , 13]);
                        if (!this.options.skipNegotiation) return [3 /*break*/, 5];
                        if (!(this.options.transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets)) return [3 /*break*/, 3];
                        // No need to add a connection ID in this case
                        this.transport = this.constructTransport(_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets);
                        // We should just call connect directly in this case.
                        // No fallback or negotiate in this case.
                        return [4 /*yield*/, this.transport.connect(url, transferFormat)];
                    case 2:
                        // We should just call connect directly in this case.
                        // No fallback or negotiate in this case.
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                    case 4: return [3 /*break*/, 11];
                    case 5:
                        negotiateResponse = null;
                        redirects = 0;
                        _loop_1 = function () {
                            var accessToken_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.getNegotiationResponse(url)];
                                    case 1:
                                        negotiateResponse = _a.sent();
                                        // the user tries to stop the connection when it is being started
                                        if (this_1.connectionState === "Disconnecting" /* Disconnecting */ || this_1.connectionState === "Disconnected" /* Disconnected */) {
                                            throw new Error("The connection was stopped during negotiation.");
                                        }
                                        if (negotiateResponse.error) {
                                            throw new Error(negotiateResponse.error);
                                        }
                                        if (negotiateResponse.ProtocolVersion) {
                                            throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                                        }
                                        if (negotiateResponse.url) {
                                            url = negotiateResponse.url;
                                        }
                                        if (negotiateResponse.accessToken) {
                                            accessToken_1 = negotiateResponse.accessToken;
                                            this_1.accessTokenFactory = function () { return accessToken_1; };
                                        }
                                        redirects++;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 6;
                    case 6: return [5 /*yield**/, _loop_1()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        if (negotiateResponse.url && redirects < MAX_REDIRECTS) return [3 /*break*/, 6];
                        _a.label = 9;
                    case 9:
                        if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
                            throw new Error("Negotiate redirection limit exceeded.");
                        }
                        this.connectionId = negotiateResponse.connectionId;
                        return [4 /*yield*/, this.createTransport(url, this.options.transport, negotiateResponse, transferFormat)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        if (this.transport instanceof _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__["LongPollingTransport"]) {
                            this.features.inherentKeepAlive = true;
                        }
                        this.transport.onreceive = this.onreceive;
                        this.transport.onclose = function (e) { return _this.stopConnection(e); };
                        if (this.connectionState === "Connecting " /* Connecting */) {
                            // Ensure the connection transitions to the connected state prior to completing this.startInternalPromise.
                            // start() will handle the case when stop was called and startInternal exits still in the disconnecting state.
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "The HttpConnection connected successfully.");
                            this.connectionState = "Connected" /* Connected */;
                        }
                        return [3 /*break*/, 13];
                    case 12:
                        e_3 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to start the connection: " + e_3);
                        this.connectionState = "Disconnected" /* Disconnected */;
                        this.transport = undefined;
                        return [2 /*return*/, Promise.reject(e_3)];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.getNegotiationResponse = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, headers, token, negotiateUrl, response, e_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _b.sent();
                        if (token) {
                            headers = (_a = {},
                                _a["Authorization"] = "Bearer " + token,
                                _a);
                        }
                        _b.label = 2;
                    case 2:
                        negotiateUrl = this.resolveNegotiateUrl(url);
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Sending negotiation request: " + negotiateUrl + ".");
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.httpClient.post(negotiateUrl, {
                                content: "",
                                headers: headers,
                            })];
                    case 4:
                        response = _b.sent();
                        if (response.statusCode !== 200) {
                            return [2 /*return*/, Promise.reject(new Error("Unexpected status code returned from negotiate " + response.statusCode))];
                        }
                        return [2 /*return*/, JSON.parse(response.content)];
                    case 5:
                        e_4 = _b.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to complete negotiation with the server: " + e_4);
                        return [2 /*return*/, Promise.reject(e_4)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.createConnectUrl = function (url, connectionId) {
        if (!connectionId) {
            return url;
        }
        return url + (url.indexOf("?") === -1 ? "?" : "&") + ("id=" + connectionId);
    };
    HttpConnection.prototype.createTransport = function (url, requestedTransport, negotiateResponse, requestedTransferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var connectUrl, transportExceptions, transports, _i, transports_1, endpoint, transport, ex_1, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connectUrl = this.createConnectUrl(url, negotiateResponse.connectionId);
                        if (!this.isITransport(requestedTransport)) return [3 /*break*/, 2];
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Connection was provided an instance of ITransport, using that directly.");
                        this.transport = requestedTransport;
                        return [4 /*yield*/, this.transport.connect(connectUrl, requestedTransferFormat)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        transportExceptions = [];
                        transports = negotiateResponse.availableTransports || [];
                        _i = 0, transports_1 = transports;
                        _a.label = 3;
                    case 3:
                        if (!(_i < transports_1.length)) return [3 /*break*/, 11];
                        endpoint = transports_1[_i];
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 9, , 10]);
                        transport = this.resolveTransport(endpoint, requestedTransport, requestedTransferFormat);
                        if (!(typeof transport === "number")) return [3 /*break*/, 8];
                        this.transport = this.constructTransport(transport);
                        if (!!negotiateResponse.connectionId) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getNegotiationResponse(url)];
                    case 5:
                        negotiateResponse = _a.sent();
                        connectUrl = this.createConnectUrl(url, negotiateResponse.connectionId);
                        _a.label = 6;
                    case 6: return [4 /*yield*/, this.transport.connect(connectUrl, requestedTransferFormat)];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        ex_1 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to start the transport '" + endpoint.transport + "': " + ex_1);
                        negotiateResponse.connectionId = undefined;
                        transportExceptions.push(endpoint.transport + " failed: " + ex_1);
                        if (this.connectionState !== "Connecting " /* Connecting */) {
                            message = "Failed to select transport before stop() was called.";
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, message);
                            return [2 /*return*/, Promise.reject(new Error(message))];
                        }
                        return [3 /*break*/, 10];
                    case 10:
                        _i++;
                        return [3 /*break*/, 3];
                    case 11:
                        if (transportExceptions.length > 0) {
                            return [2 /*return*/, Promise.reject(new Error("Unable to connect to the server with any of the available transports. " + transportExceptions.join(" ")))];
                        }
                        return [2 /*return*/, Promise.reject(new Error("None of the transports supported by the client are supported by the server."))];
                }
            });
        });
    };
    HttpConnection.prototype.constructTransport = function (transport) {
        switch (transport) {
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets:
                if (!this.options.WebSocket) {
                    throw new Error("'WebSocket' is not supported in your environment.");
                }
                return new _WebSocketTransport__WEBPACK_IMPORTED_MODULE_6__["WebSocketTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.WebSocket);
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].ServerSentEvents:
                if (!this.options.EventSource) {
                    throw new Error("'EventSource' is not supported in your environment.");
                }
                return new _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_4__["ServerSentEventsTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.EventSource);
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].LongPolling:
                return new _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__["LongPollingTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false);
            default:
                throw new Error("Unknown transport: " + transport + ".");
        }
    };
    HttpConnection.prototype.resolveTransport = function (endpoint, requestedTransport, requestedTransferFormat) {
        var transport = _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][endpoint.transport];
        if (transport === null || transport === undefined) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
        }
        else {
            var transferFormats = endpoint.transferFormats.map(function (s) { return _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][s]; });
            if (transportMatches(requestedTransport, transport)) {
                if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
                    if ((transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets && !this.options.WebSocket) ||
                        (transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].ServerSentEvents && !this.options.EventSource)) {
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it is not supported in your environment.'");
                        throw new Error("'" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' is not supported in your environment.");
                    }
                    else {
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Selecting transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "'.");
                        return transport;
                    }
                }
                else {
                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it does not support the requested transfer format '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][requestedTransferFormat] + "'.");
                    throw new Error("'" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' does not support " + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][requestedTransferFormat] + ".");
                }
            }
            else {
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it was disabled by the client.");
                throw new Error("'" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' is disabled by the client.");
            }
        }
        return null;
    };
    HttpConnection.prototype.isITransport = function (transport) {
        return transport && typeof (transport) === "object" && "connect" in transport;
    };
    HttpConnection.prototype.stopConnection = function (error) {
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "HttpConnection.stopConnection(" + error + ") called while in state " + this.connectionState + ".");
        this.transport = undefined;
        // If we have a stopError, it takes precedence over the error from the transport
        error = this.stopError || error;
        this.stopError = undefined;
        if (this.connectionState === "Disconnected" /* Disconnected */) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Call to HttpConnection.stopConnection(" + error + ") was ignored because the connection is already in the disconnected state.");
            return;
        }
        if (this.connectionState === "Connecting " /* Connecting */) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Warning, "Call to HttpConnection.stopConnection(" + error + ") was ignored because the connection hasn't yet left the in the connecting state.");
            return;
        }
        if (this.connectionState === "Disconnecting" /* Disconnecting */) {
            // A call to stop() induced this call to stopConnection and needs to be completed.
            // Any stop() awaiters will be scheduled to continue after the onclose callback fires.
            this.stopPromiseResolver();
        }
        if (error) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Connection disconnected with error '" + error + "'.");
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Connection disconnected.");
        }
        this.connectionId = undefined;
        this.connectionState = "Disconnected" /* Disconnected */;
        if (this.onclose && this.connectionStarted) {
            this.connectionStarted = false;
            try {
                this.onclose(error);
            }
            catch (e) {
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "HttpConnection.onclose(" + error + ") threw error '" + e + "'.");
            }
        }
    };
    HttpConnection.prototype.resolveUrl = function (url) {
        // startsWith is not supported in IE
        if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
            return url;
        }
        if (!_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isBrowser || !window.document) {
            throw new Error("Cannot resolve '" + url + "'.");
        }
        // Setting the url to the href propery of an anchor tag handles normalization
        // for us. There are 3 main cases.
        // 1. Relative  path normalization e.g "b" -> "http://localhost:5000/a/b"
        // 2. Absolute path normalization e.g "/a/b" -> "http://localhost:5000/a/b"
        // 3. Networkpath reference normalization e.g "//localhost:5000/a/b" -> "http://localhost:5000/a/b"
        var aTag = window.document.createElement("a");
        aTag.href = url;
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Normalizing '" + url + "' to '" + aTag.href + "'.");
        return aTag.href;
    };
    HttpConnection.prototype.resolveNegotiateUrl = function (url) {
        var index = url.indexOf("?");
        var negotiateUrl = url.substring(0, index === -1 ? url.length : index);
        if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
            negotiateUrl += "/";
        }
        negotiateUrl += "negotiate";
        negotiateUrl += index === -1 ? "" : url.substring(index);
        return negotiateUrl;
    };
    return HttpConnection;
}());

function transportMatches(requestedTransport, actualTransport) {
    return !requestedTransport || ((actualTransport & requestedTransport) !== 0);
}
//# sourceMappingURL=HttpConnection.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/HubConnection.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HubConnection.js ***!
  \****************************************************************/
/*! exports provided: HubConnectionState, HubConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnectionState", function() { return HubConnectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnection", function() { return HubConnection; });
/* harmony import */ var _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HandshakeProtocol */ "./node_modules/@aspnet/signalr/dist/esm/HandshakeProtocol.js");
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IHubProtocol */ "./node_modules/@aspnet/signalr/dist/esm/IHubProtocol.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subject */ "./node_modules/@aspnet/signalr/dist/esm/Subject.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
var DEFAULT_PING_INTERVAL_IN_MS = 15 * 1000;
/** Describes the current state of the {@link HubConnection} to the server. */
var HubConnectionState;
(function (HubConnectionState) {
    /** The hub connection is disconnected. */
    HubConnectionState["Disconnected"] = "Disconnected";
    /** The hub connection is connecting. */
    HubConnectionState["Connecting"] = "Connecting";
    /** The hub connection is connected. */
    HubConnectionState["Connected"] = "Connected";
    /** The hub connection is disconnecting. */
    HubConnectionState["Disconnecting"] = "Disconnecting";
    /** The hub connection is reconnecting. */
    HubConnectionState["Reconnecting"] = "Reconnecting";
})(HubConnectionState || (HubConnectionState = {}));
/** Represents a connection to a SignalR Hub. */
var HubConnection = /** @class */ (function () {
    function HubConnection(connection, logger, protocol, reconnectPolicy) {
        var _this = this;
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(connection, "connection");
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(logger, "logger");
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(protocol, "protocol");
        this.serverTimeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS;
        this.keepAliveIntervalInMilliseconds = DEFAULT_PING_INTERVAL_IN_MS;
        this.logger = logger;
        this.protocol = protocol;
        this.connection = connection;
        this.reconnectPolicy = reconnectPolicy;
        this.handshakeProtocol = new _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_0__["HandshakeProtocol"]();
        this.connection.onreceive = function (data) { return _this.processIncomingData(data); };
        this.connection.onclose = function (error) { return _this.connectionClosed(error); };
        this.callbacks = {};
        this.methods = {};
        this.closedCallbacks = [];
        this.reconnectingCallbacks = [];
        this.reconnectedCallbacks = [];
        this.invocationId = 0;
        this.receivedHandshakeResponse = false;
        this.connectionState = HubConnectionState.Disconnected;
        this.connectionStarted = false;
        this.cachedPingMessage = this.protocol.writeMessage({ type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Ping });
    }
    /** @internal */
    // Using a public static factory method means we can have a private constructor and an _internal_
    // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
    // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
    // public parameter-less constructor.
    HubConnection.create = function (connection, logger, protocol, reconnectPolicy) {
        return new HubConnection(connection, logger, protocol, reconnectPolicy);
    };
    Object.defineProperty(HubConnection.prototype, "state", {
        /** Indicates the state of the {@link HubConnection} to the server. */
        get: function () {
            return this.connectionState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HubConnection.prototype, "connectionId", {
        /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
         *  in the disconnected state or if the negotiation step was skipped.
         */
        get: function () {
            return this.connection ? (this.connection.connectionId || null) : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Starts the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
     */
    HubConnection.prototype.start = function () {
        this.startPromise = this.startWithStateTransitions();
        return this.startPromise;
    };
    HubConnection.prototype.startWithStateTransitions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.connectionState !== HubConnectionState.Disconnected) {
                            return [2 /*return*/, Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."))];
                        }
                        this.connectionState = HubConnectionState.Connecting;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Starting HubConnection.");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.startInternal()];
                    case 2:
                        _a.sent();
                        this.connectionState = HubConnectionState.Connected;
                        this.connectionStarted = true;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "HubConnection connected successfully.");
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.connectionState = HubConnectionState.Disconnected;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "HubConnection failed to start successfully because of error '" + e_1 + "'.");
                        return [2 /*return*/, Promise.reject(e_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HubConnection.prototype.startInternal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var handshakePromise, handshakeRequest, e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.stopDuringStartError = undefined;
                        this.receivedHandshakeResponse = false;
                        handshakePromise = new Promise(function (resolve, reject) {
                            _this.handshakeResolver = resolve;
                            _this.handshakeRejecter = reject;
                        });
                        return [4 /*yield*/, this.connection.start(this.protocol.transferFormat)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 7]);
                        handshakeRequest = {
                            protocol: this.protocol.name,
                            version: this.protocol.version,
                        };
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Sending handshake request.");
                        return [4 /*yield*/, this.sendMessage(this.handshakeProtocol.writeHandshakeRequest(handshakeRequest))];
                    case 3:
                        _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Using HubProtocol '" + this.protocol.name + "'.");
                        // defensively cleanup timeout in case we receive a message from the server before we finish start
                        this.cleanupTimeout();
                        this.resetTimeoutPeriod();
                        this.resetKeepAliveInterval();
                        return [4 /*yield*/, handshakePromise];
                    case 4:
                        _a.sent();
                        // It's important to check the stopDuringStartError instead of just relying on the handshakePromise
                        // being rejected on close, because this continuation can run after both the handshake completed successfully
                        // and the connection was closed.
                        if (this.stopDuringStartError) {
                            // It's important to throw instead of returning a rejected promise, because we don't want to allow any state
                            // transitions to occur between now and the calling code observing the exceptions. Returning a rejected promise
                            // will cause the calling continuation to get scheduled to run later.
                            throw this.stopDuringStartError;
                        }
                        return [3 /*break*/, 7];
                    case 5:
                        e_2 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Hub handshake failed with error '" + e_2 + "' during start(). Stopping HubConnection.");
                        this.cleanupTimeout();
                        this.cleanupPingTimer();
                        // HttpConnection.stop() should not complete until after the onclose callback is invoked.
                        // This will transition the HubConnection to the disconnected state before HttpConnection.stop() completes.
                        return [4 /*yield*/, this.connection.stop(e_2)];
                    case 6:
                        // HttpConnection.stop() should not complete until after the onclose callback is invoked.
                        // This will transition the HubConnection to the disconnected state before HttpConnection.stop() completes.
                        _a.sent();
                        throw e_2;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /** Stops the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
     */
    HubConnection.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startPromise, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startPromise = this.startPromise;
                        this.stopPromise = this.stopInternal();
                        return [4 /*yield*/, this.stopPromise];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        // Awaiting undefined continues immediately
                        return [4 /*yield*/, startPromise];
                    case 3:
                        // Awaiting undefined continues immediately
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HubConnection.prototype.stopInternal = function (error) {
        if (this.connectionState === HubConnectionState.Disconnected) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Call to HubConnection.stop(" + error + ") ignored because it is already in the disconnected state.");
            return Promise.resolve();
        }
        if (this.connectionState === HubConnectionState.Disconnecting) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnecting state.");
            return this.stopPromise;
        }
        this.connectionState = HubConnectionState.Disconnecting;
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Stopping HubConnection.");
        if (this.reconnectDelayHandle) {
            // We're in a reconnect delay which means the underlying connection is currently already stopped.
            // Just clear the handle to stop the reconnect loop (which no one is waiting on thankfully) and
            // fire the onclose callbacks.
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection stopped during reconnect delay. Done reconnecting.");
            clearTimeout(this.reconnectDelayHandle);
            this.reconnectDelayHandle = undefined;
            this.completeClose();
            return Promise.resolve();
        }
        this.cleanupTimeout();
        this.cleanupPingTimer();
        this.stopDuringStartError = error || new Error("The connection was stopped before the hub handshake could complete.");
        // HttpConnection.stop() should not complete until after either HttpConnection.start() fails
        // or the onclose callback is invoked. The onclose callback will transition the HubConnection
        // to the disconnected state if need be before HttpConnection.stop() completes.
        return this.connection.stop(error);
    };
    /** Invokes a streaming hub method on the server using the specified name and arguments.
     *
     * @typeparam T The type of the items returned by the server.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
     */
    HubConnection.prototype.stream = function (methodName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a = this.replaceStreamingParams(args), streams = _a[0], streamIds = _a[1];
        var invocationDescriptor = this.createStreamInvocation(methodName, args, streamIds);
        var promiseQueue;
        var subject = new _Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        subject.cancelCallback = function () {
            var cancelInvocation = _this.createCancelInvocation(invocationDescriptor.invocationId);
            delete _this.callbacks[invocationDescriptor.invocationId];
            return promiseQueue.then(function () {
                return _this.sendWithProtocol(cancelInvocation);
            });
        };
        this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
            if (error) {
                subject.error(error);
                return;
            }
            else if (invocationEvent) {
                // invocationEvent will not be null when an error is not passed to the callback
                if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                    if (invocationEvent.error) {
                        subject.error(new Error(invocationEvent.error));
                    }
                    else {
                        subject.complete();
                    }
                }
                else {
                    subject.next((invocationEvent.item));
                }
            }
        };
        promiseQueue = this.sendWithProtocol(invocationDescriptor)
            .catch(function (e) {
            subject.error(e);
            delete _this.callbacks[invocationDescriptor.invocationId];
        });
        this.launchStreams(streams, promiseQueue);
        return subject;
    };
    HubConnection.prototype.sendMessage = function (message) {
        this.resetKeepAliveInterval();
        return this.connection.send(message);
    };
    /**
     * Sends a js object to the server.
     * @param message The js object to serialize and send.
     */
    HubConnection.prototype.sendWithProtocol = function (message) {
        return this.sendMessage(this.protocol.writeMessage(message));
    };
    /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
     *
     * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
     * be processing the invocation.
     *
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
     */
    HubConnection.prototype.send = function (methodName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a = this.replaceStreamingParams(args), streams = _a[0], streamIds = _a[1];
        var sendPromise = this.sendWithProtocol(this.createInvocation(methodName, args, true, streamIds));
        this.launchStreams(streams, sendPromise);
        return sendPromise;
    };
    /** Invokes a hub method on the server using the specified name and arguments.
     *
     * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
     * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
     * resolving the Promise.
     *
     * @typeparam T The expected return type.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
     */
    HubConnection.prototype.invoke = function (methodName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a = this.replaceStreamingParams(args), streams = _a[0], streamIds = _a[1];
        var invocationDescriptor = this.createInvocation(methodName, args, false, streamIds);
        var p = new Promise(function (resolve, reject) {
            // invocationId will always have a value for a non-blocking invocation
            _this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
                if (error) {
                    reject(error);
                    return;
                }
                else if (invocationEvent) {
                    // invocationEvent will not be null when an error is not passed to the callback
                    if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                        if (invocationEvent.error) {
                            reject(new Error(invocationEvent.error));
                        }
                        else {
                            resolve(invocationEvent.result);
                        }
                    }
                    else {
                        reject(new Error("Unexpected message type: " + invocationEvent.type));
                    }
                }
            };
            var promiseQueue = _this.sendWithProtocol(invocationDescriptor)
                .catch(function (e) {
                reject(e);
                // invocationId will always have a value for a non-blocking invocation
                delete _this.callbacks[invocationDescriptor.invocationId];
            });
            _this.launchStreams(streams, promiseQueue);
        });
        return p;
    };
    /** Registers a handler that will be invoked when the hub method with the specified method name is invoked.
     *
     * @param {string} methodName The name of the hub method to define.
     * @param {Function} newMethod The handler that will be raised when the hub method is invoked.
     */
    HubConnection.prototype.on = function (methodName, newMethod) {
        if (!methodName || !newMethod) {
            return;
        }
        methodName = methodName.toLowerCase();
        if (!this.methods[methodName]) {
            this.methods[methodName] = [];
        }
        // Preventing adding the same handler multiple times.
        if (this.methods[methodName].indexOf(newMethod) !== -1) {
            return;
        }
        this.methods[methodName].push(newMethod);
    };
    HubConnection.prototype.off = function (methodName, method) {
        if (!methodName) {
            return;
        }
        methodName = methodName.toLowerCase();
        var handlers = this.methods[methodName];
        if (!handlers) {
            return;
        }
        if (method) {
            var removeIdx = handlers.indexOf(method);
            if (removeIdx !== -1) {
                handlers.splice(removeIdx, 1);
                if (handlers.length === 0) {
                    delete this.methods[methodName];
                }
            }
        }
        else {
            delete this.methods[methodName];
        }
    };
    /** Registers a handler that will be invoked when the connection is closed.
     *
     * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
     */
    HubConnection.prototype.onclose = function (callback) {
        if (callback) {
            this.closedCallbacks.push(callback);
        }
    };
    /** Registers a handler that will be invoked when the connection starts reconnecting.
     *
     * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
     */
    HubConnection.prototype.onreconnecting = function (callback) {
        if (callback) {
            this.reconnectingCallbacks.push(callback);
        }
    };
    /** Registers a handler that will be invoked when the connection successfully reconnects.
     *
     * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
     */
    HubConnection.prototype.onreconnected = function (callback) {
        if (callback) {
            this.reconnectedCallbacks.push(callback);
        }
    };
    HubConnection.prototype.processIncomingData = function (data) {
        this.cleanupTimeout();
        if (!this.receivedHandshakeResponse) {
            data = this.processHandshakeResponse(data);
            this.receivedHandshakeResponse = true;
        }
        // Data may have all been read when processing handshake response
        if (data) {
            // Parse the messages
            var messages = this.protocol.parseMessages(data, this.logger);
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                switch (message.type) {
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation:
                        this.invokeClientMethod(message);
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamItem:
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion:
                        var callback = this.callbacks[message.invocationId];
                        if (callback) {
                            if (message.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                                delete this.callbacks[message.invocationId];
                            }
                            callback(message);
                        }
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Ping:
                        // Don't care about pings
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Close:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Close message received from server.");
                        // We don't want to wait on the stop itself.
                        this.stopPromise = this.stopInternal(message.error ? new Error("Server returned an error on close: " + message.error) : undefined);
                        break;
                    default:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Invalid message type: " + message.type + ".");
                        break;
                }
            }
        }
        this.resetTimeoutPeriod();
    };
    HubConnection.prototype.processHandshakeResponse = function (data) {
        var _a;
        var responseMessage;
        var remainingData;
        try {
            _a = this.handshakeProtocol.parseHandshakeResponse(data), remainingData = _a[0], responseMessage = _a[1];
        }
        catch (e) {
            var message = "Error parsing handshake response: " + e;
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
            var error = new Error(message);
            this.handshakeRejecter(error);
            throw error;
        }
        if (responseMessage.error) {
            var message = "Server returned handshake error: " + responseMessage.error;
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
            var error = new Error(message);
            this.handshakeRejecter(error);
            throw error;
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Server handshake complete.");
        }
        this.handshakeResolver();
        return remainingData;
    };
    HubConnection.prototype.resetKeepAliveInterval = function () {
        var _this = this;
        this.cleanupPingTimer();
        this.pingServerHandle = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.connectionState === HubConnectionState.Connected)) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.sendMessage(this.cachedPingMessage)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        // We don't care about the error. It should be seen elsewhere in the client.
                        // The connection is probably in a bad or closed state now, cleanup the timer so it stops triggering
                        this.cleanupPingTimer();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); }, this.keepAliveIntervalInMilliseconds);
    };
    HubConnection.prototype.resetTimeoutPeriod = function () {
        var _this = this;
        if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
            // Set the timeout timer
            this.timeoutHandle = setTimeout(function () { return _this.serverTimeout(); }, this.serverTimeoutInMilliseconds);
        }
    };
    HubConnection.prototype.serverTimeout = function () {
        // The server hasn't talked to us in a while. It doesn't like us anymore ... :(
        // Terminate the connection, but we don't need to wait on the promise. This could trigger reconnecting.
        // tslint:disable-next-line:no-floating-promises
        this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
    };
    HubConnection.prototype.invokeClientMethod = function (invocationMessage) {
        var _this = this;
        var methods = this.methods[invocationMessage.target.toLowerCase()];
        if (methods) {
            try {
                methods.forEach(function (m) { return m.apply(_this, invocationMessage.arguments); });
            }
            catch (e) {
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "A callback for the method " + invocationMessage.target.toLowerCase() + " threw error '" + e + "'.");
            }
            if (invocationMessage.invocationId) {
                // This is not supported in v1. So we return an error to avoid blocking the server waiting for the response.
                var message = "Server requested a response, which is not supported in this version of the client.";
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
                // We don't want to wait on the stop itself.
                this.stopPromise = this.stopInternal(new Error(message));
            }
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "No client method with the name '" + invocationMessage.target + "' found.");
        }
    };
    HubConnection.prototype.connectionClosed = function (error) {
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "HubConnection.connectionClosed(" + error + ") called while in state " + this.connectionState + ".");
        // Triggering this.handshakeRejecter is insufficient because it could already be resolved without the continuation having run yet.
        this.stopDuringStartError = this.stopDuringStartError || error || new Error("The underlying connection was closed before the hub handshake could complete.");
        // If the handshake is in progress, start will be waiting for the handshake promise, so we complete it.
        // If it has already completed, this should just noop.
        if (this.handshakeResolver) {
            this.handshakeResolver();
        }
        this.cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
        this.cleanupTimeout();
        this.cleanupPingTimer();
        if (this.connectionState === HubConnectionState.Disconnecting) {
            this.completeClose(error);
        }
        else if (this.connectionState === HubConnectionState.Connected && this.reconnectPolicy) {
            // tslint:disable-next-line:no-floating-promises
            this.reconnect(error);
        }
        else if (this.connectionState === HubConnectionState.Connected) {
            this.completeClose(error);
        }
        // If none of the above if conditions were true were called the HubConnection must be in either:
        // 1. The Connecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail it.
        // 2. The Reconnecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail the current reconnect attempt
        //    and potentially continue the reconnect() loop.
        // 3. The Disconnected state in which case we're already done.
    };
    HubConnection.prototype.completeClose = function (error) {
        var _this = this;
        if (this.connectionStarted) {
            this.connectionState = HubConnectionState.Disconnected;
            this.connectionStarted = false;
            try {
                this.closedCallbacks.forEach(function (c) { return c.apply(_this, [error]); });
            }
            catch (e) {
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "An onclose callback called with error '" + error + "' threw error '" + e + "'.");
            }
        }
    };
    HubConnection.prototype.reconnect = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var reconnectStartTime, previousReconnectAttempts, nextRetryDelay, e_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reconnectStartTime = Date.now();
                        previousReconnectAttempts = 0;
                        nextRetryDelay = this.getNextRetryDelay(previousReconnectAttempts++, 0);
                        if (nextRetryDelay === null) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection not reconnecting because the IReconnectPolicy returned null on the first reconnect attempt.");
                            this.completeClose(error);
                            return [2 /*return*/];
                        }
                        this.connectionState = HubConnectionState.Reconnecting;
                        if (error) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Connection reconnecting because of error '" + error + "'.");
                        }
                        else {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Connection reconnecting.");
                        }
                        if (this.onreconnecting) {
                            try {
                                this.reconnectingCallbacks.forEach(function (c) { return c.apply(_this, [error]); });
                            }
                            catch (e) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "An onreconnecting callback called with error '" + error + "' threw error '" + e + "'.");
                            }
                            // Exit early if an onreconnecting callback called connection.stop().
                            if (this.connectionState !== HubConnectionState.Reconnecting) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
                                return [2 /*return*/];
                            }
                        }
                        _a.label = 1;
                    case 1:
                        if (!(nextRetryDelay !== null)) return [3 /*break*/, 7];
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Reconnect attempt number " + previousReconnectAttempts + " will start in " + nextRetryDelay + " ms.");
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
                            })];
                    case 2:
                        _a.sent();
                        this.reconnectDelayHandle = undefined;
                        if (this.connectionState !== HubConnectionState.Reconnecting) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
                            return [2 /*return*/];
                        }
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.startInternal()];
                    case 4:
                        _a.sent();
                        this.connectionState = HubConnectionState.Connected;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "HubConnection reconnected successfully.");
                        if (this.onreconnected) {
                            try {
                                this.reconnectedCallbacks.forEach(function (c) { return c.apply(_this, [_this.connection.connectionId]); });
                            }
                            catch (e) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "An onreconnected callback called with connectionId '" + this.connection.connectionId + "; threw error '" + e + "'.");
                            }
                        }
                        return [2 /*return*/];
                    case 5:
                        e_4 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Reconnect attempt failed because of error '" + e_4 + "'.");
                        if (this.connectionState !== HubConnectionState.Reconnecting) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection left the reconnecting state during reconnect attempt. Done reconnecting.");
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 6];
                    case 6:
                        nextRetryDelay = this.getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime);
                        return [3 /*break*/, 1];
                    case 7:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Reconnect retries have been exhausted after " + (Date.now() - reconnectStartTime) + " ms and " + previousReconnectAttempts + " failed attempts. Connection disconnecting.");
                        this.completeClose();
                        return [2 /*return*/];
                }
            });
        });
    };
    HubConnection.prototype.getNextRetryDelay = function (previousRetryCount, elapsedMilliseconds) {
        try {
            return this.reconnectPolicy.nextRetryDelayInMilliseconds(previousRetryCount, elapsedMilliseconds);
        }
        catch (e) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "IReconnectPolicy.nextRetryDelayInMilliseconds(" + previousRetryCount + ", " + elapsedMilliseconds + ") threw error '" + e + "'.");
            return null;
        }
    };
    HubConnection.prototype.cancelCallbacksWithError = function (error) {
        var callbacks = this.callbacks;
        this.callbacks = {};
        Object.keys(callbacks)
            .forEach(function (key) {
            var callback = callbacks[key];
            callback(null, error);
        });
    };
    HubConnection.prototype.cleanupPingTimer = function () {
        if (this.pingServerHandle) {
            clearTimeout(this.pingServerHandle);
        }
    };
    HubConnection.prototype.cleanupTimeout = function () {
        if (this.timeoutHandle) {
            clearTimeout(this.timeoutHandle);
        }
    };
    HubConnection.prototype.createInvocation = function (methodName, args, nonblocking, streamIds) {
        if (nonblocking) {
            return {
                arguments: args,
                streamIds: streamIds,
                target: methodName,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation,
            };
        }
        else {
            var invocationId = this.invocationId;
            this.invocationId++;
            return {
                arguments: args,
                invocationId: invocationId.toString(),
                streamIds: streamIds,
                target: methodName,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation,
            };
        }
    };
    HubConnection.prototype.launchStreams = function (streams, promiseQueue) {
        var _this = this;
        if (streams.length === 0) {
            return;
        }
        // Synchronize stream data so they arrive in-order on the server
        if (!promiseQueue) {
            promiseQueue = Promise.resolve();
        }
        var _loop_1 = function (streamId) {
            streams[streamId].subscribe({
                complete: function () {
                    promiseQueue = promiseQueue.then(function () { return _this.sendWithProtocol(_this.createCompletionMessage(streamId)); });
                },
                error: function (err) {
                    var message;
                    if (err instanceof Error) {
                        message = err.message;
                    }
                    else if (err && err.toString) {
                        message = err.toString();
                    }
                    else {
                        message = "Unknown error";
                    }
                    promiseQueue = promiseQueue.then(function () { return _this.sendWithProtocol(_this.createCompletionMessage(streamId, message)); });
                },
                next: function (item) {
                    promiseQueue = promiseQueue.then(function () { return _this.sendWithProtocol(_this.createStreamItemMessage(streamId, item)); });
                },
            });
        };
        // We want to iterate over the keys, since the keys are the stream ids
        // tslint:disable-next-line:forin
        for (var streamId in streams) {
            _loop_1(streamId);
        }
    };
    HubConnection.prototype.replaceStreamingParams = function (args) {
        var streams = [];
        var streamIds = [];
        for (var i = 0; i < args.length; i++) {
            var argument = args[i];
            if (this.isObservable(argument)) {
                var streamId = this.invocationId;
                this.invocationId++;
                // Store the stream for later use
                streams[streamId] = argument;
                streamIds.push(streamId.toString());
                // remove stream from args
                args.splice(i, 1);
            }
        }
        return [streams, streamIds];
    };
    HubConnection.prototype.isObservable = function (arg) {
        // This allows other stream implementations to just work (like rxjs)
        return arg.subscribe && typeof arg.subscribe === "function";
    };
    HubConnection.prototype.createStreamInvocation = function (methodName, args, streamIds) {
        var invocationId = this.invocationId;
        this.invocationId++;
        return {
            arguments: args,
            invocationId: invocationId.toString(),
            streamIds: streamIds,
            target: methodName,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamInvocation,
        };
    };
    HubConnection.prototype.createCancelInvocation = function (id) {
        return {
            invocationId: id,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].CancelInvocation,
        };
    };
    HubConnection.prototype.createStreamItemMessage = function (id, item) {
        return {
            invocationId: id,
            item: item,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamItem,
        };
    };
    HubConnection.prototype.createCompletionMessage = function (id, error, result) {
        if (error) {
            return {
                error: error,
                invocationId: id,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion,
            };
        }
        return {
            invocationId: id,
            result: result,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion,
        };
    };
    return HubConnection;
}());

//# sourceMappingURL=HubConnection.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/HubConnectionBuilder.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HubConnectionBuilder.js ***!
  \***********************************************************************/
/*! exports provided: HubConnectionBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnectionBuilder", function() { return HubConnectionBuilder; });
/* harmony import */ var _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultReconnectPolicy */ "./node_modules/@aspnet/signalr/dist/esm/DefaultReconnectPolicy.js");
/* harmony import */ var _HttpConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpConnection */ "./node_modules/@aspnet/signalr/dist/esm/HttpConnection.js");
/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HubConnection */ "./node_modules/@aspnet/signalr/dist/esm/HubConnection.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JsonHubProtocol */ "./node_modules/@aspnet/signalr/dist/esm/JsonHubProtocol.js");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loggers */ "./node_modules/@aspnet/signalr/dist/esm/Loggers.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};







// tslint:disable:object-literal-sort-keys
var LogLevelNameMapping = {
    trace: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Trace,
    debug: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Debug,
    info: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Information,
    information: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Information,
    warn: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Warning,
    warning: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Warning,
    error: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Error,
    critical: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Critical,
    none: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].None,
};
function parseLogLevel(name) {
    // Case-insensitive matching via lower-casing
    // Yes, I know case-folding is a complicated problem in Unicode, but we only support
    // the ASCII strings defined in LogLevelNameMapping anyway, so it's fine -anurse.
    var mapping = LogLevelNameMapping[name.toLowerCase()];
    if (typeof mapping !== "undefined") {
        return mapping;
    }
    else {
        throw new Error("Unknown log level: " + name);
    }
}
/** A builder for configuring {@link @aspnet/signalr.HubConnection} instances. */
var HubConnectionBuilder = /** @class */ (function () {
    function HubConnectionBuilder() {
    }
    HubConnectionBuilder.prototype.configureLogging = function (logging) {
        _Utils__WEBPACK_IMPORTED_MODULE_6__["Arg"].isRequired(logging, "logging");
        if (isLogger(logging)) {
            this.logger = logging;
        }
        else if (typeof logging === "string") {
            var logLevel = parseLogLevel(logging);
            this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_6__["ConsoleLogger"](logLevel);
        }
        else {
            this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_6__["ConsoleLogger"](logging);
        }
        return this;
    };
    HubConnectionBuilder.prototype.withUrl = function (url, transportTypeOrOptions) {
        _Utils__WEBPACK_IMPORTED_MODULE_6__["Arg"].isRequired(url, "url");
        this.url = url;
        // Flow-typing knows where it's at. Since HttpTransportType is a number and IHttpConnectionOptions is guaranteed
        // to be an object, we know (as does TypeScript) this comparison is all we need to figure out which overload was called.
        if (typeof transportTypeOrOptions === "object") {
            this.httpConnectionOptions = __assign({}, this.httpConnectionOptions, transportTypeOrOptions);
        }
        else {
            this.httpConnectionOptions = __assign({}, this.httpConnectionOptions, { transport: transportTypeOrOptions });
        }
        return this;
    };
    /** Configures the {@link @aspnet/signalr.HubConnection} to use the specified Hub Protocol.
     *
     * @param {IHubProtocol} protocol The {@link @aspnet/signalr.IHubProtocol} implementation to use.
     */
    HubConnectionBuilder.prototype.withHubProtocol = function (protocol) {
        _Utils__WEBPACK_IMPORTED_MODULE_6__["Arg"].isRequired(protocol, "protocol");
        this.protocol = protocol;
        return this;
    };
    HubConnectionBuilder.prototype.withAutomaticReconnect = function (retryDelaysOrReconnectPolicy) {
        if (this.reconnectPolicy) {
            throw new Error("A reconnectPolicy has already been set.");
        }
        if (!retryDelaysOrReconnectPolicy) {
            this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_0__["DefaultReconnectPolicy"]();
        }
        else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
            this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_0__["DefaultReconnectPolicy"](retryDelaysOrReconnectPolicy);
        }
        else {
            this.reconnectPolicy = retryDelaysOrReconnectPolicy;
        }
        return this;
    };
    /** Creates a {@link @aspnet/signalr.HubConnection} from the configuration options specified in this builder.
     *
     * @returns {HubConnection} The configured {@link @aspnet/signalr.HubConnection}.
     */
    HubConnectionBuilder.prototype.build = function () {
        // If httpConnectionOptions has a logger, use it. Otherwise, override it with the one
        // provided to configureLogger
        var httpConnectionOptions = this.httpConnectionOptions || {};
        // If it's 'null', the user **explicitly** asked for null, don't mess with it.
        if (httpConnectionOptions.logger === undefined) {
            // If our logger is undefined or null, that's OK, the HttpConnection constructor will handle it.
            httpConnectionOptions.logger = this.logger;
        }
        // Now create the connection
        if (!this.url) {
            throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
        }
        var connection = new _HttpConnection__WEBPACK_IMPORTED_MODULE_1__["HttpConnection"](this.url, httpConnectionOptions);
        return _HubConnection__WEBPACK_IMPORTED_MODULE_2__["HubConnection"].create(connection, this.logger || _Loggers__WEBPACK_IMPORTED_MODULE_5__["NullLogger"].instance, this.protocol || new _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_4__["JsonHubProtocol"](), this.reconnectPolicy);
    };
    return HubConnectionBuilder;
}());

function isLogger(logger) {
    return logger.log !== undefined;
}
//# sourceMappingURL=HubConnectionBuilder.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/IHubProtocol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/IHubProtocol.js ***!
  \***************************************************************/
/*! exports provided: MessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** Defines the type of a Hub Message. */
var MessageType;
(function (MessageType) {
    /** Indicates the message is an Invocation message and implements the {@link @aspnet/signalr.InvocationMessage} interface. */
    MessageType[MessageType["Invocation"] = 1] = "Invocation";
    /** Indicates the message is a StreamItem message and implements the {@link @aspnet/signalr.StreamItemMessage} interface. */
    MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
    /** Indicates the message is a Completion message and implements the {@link @aspnet/signalr.CompletionMessage} interface. */
    MessageType[MessageType["Completion"] = 3] = "Completion";
    /** Indicates the message is a Stream Invocation message and implements the {@link @aspnet/signalr.StreamInvocationMessage} interface. */
    MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
    /** Indicates the message is a Cancel Invocation message and implements the {@link @aspnet/signalr.CancelInvocationMessage} interface. */
    MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
    /** Indicates the message is a Ping message and implements the {@link @aspnet/signalr.PingMessage} interface. */
    MessageType[MessageType["Ping"] = 6] = "Ping";
    /** Indicates the message is a Close message and implements the {@link @aspnet/signalr.CloseMessage} interface. */
    MessageType[MessageType["Close"] = 7] = "Close";
})(MessageType || (MessageType = {}));
//# sourceMappingURL=IHubProtocol.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/ILogger.js ***!
  \**********************************************************/
/*! exports provided: LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// These values are designed to match the ASP.NET Log Levels since that's the pattern we're emulating here.
/** Indicates the severity of a log message.
 *
 * Log Levels are ordered in increasing severity. So `Debug` is more severe than `Trace`, etc.
 */
var LogLevel;
(function (LogLevel) {
    /** Log level for very low severity diagnostic messages. */
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    /** Log level for low severity diagnostic messages. */
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    /** Log level for informational diagnostic messages. */
    LogLevel[LogLevel["Information"] = 2] = "Information";
    /** Log level for diagnostic messages that indicate a non-fatal problem. */
    LogLevel[LogLevel["Warning"] = 3] = "Warning";
    /** Log level for diagnostic messages that indicate a failure in the current operation. */
    LogLevel[LogLevel["Error"] = 4] = "Error";
    /** Log level for diagnostic messages that indicate a failure that will terminate the entire application. */
    LogLevel[LogLevel["Critical"] = 5] = "Critical";
    /** The highest possible log level. Used when configuring logging to indicate that no log messages should be emitted. */
    LogLevel[LogLevel["None"] = 6] = "None";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=ILogger.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js":
/*!*************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/ITransport.js ***!
  \*************************************************************/
/*! exports provided: HttpTransportType, TransferFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTransportType", function() { return HttpTransportType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferFormat", function() { return TransferFormat; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// This will be treated as a bit flag in the future, so we keep it using power-of-two values.
/** Specifies a specific HTTP transport type. */
var HttpTransportType;
(function (HttpTransportType) {
    /** Specifies no transport preference. */
    HttpTransportType[HttpTransportType["None"] = 0] = "None";
    /** Specifies the WebSockets transport. */
    HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
    /** Specifies the Server-Sent Events transport. */
    HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
    /** Specifies the Long Polling transport. */
    HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
})(HttpTransportType || (HttpTransportType = {}));
/** Specifies the transfer format for a connection. */
var TransferFormat;
(function (TransferFormat) {
    /** Specifies that only text data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Text"] = 1] = "Text";
    /** Specifies that binary data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
})(TransferFormat || (TransferFormat = {}));
//# sourceMappingURL=ITransport.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/JsonHubProtocol.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/JsonHubProtocol.js ***!
  \******************************************************************/
/*! exports provided: JsonHubProtocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonHubProtocol", function() { return JsonHubProtocol; });
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IHubProtocol */ "./node_modules/@aspnet/signalr/dist/esm/IHubProtocol.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loggers */ "./node_modules/@aspnet/signalr/dist/esm/Loggers.js");
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextMessageFormat */ "./node_modules/@aspnet/signalr/dist/esm/TextMessageFormat.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.





var JSON_HUB_PROTOCOL_NAME = "json";
/** Implements the JSON Hub Protocol. */
var JsonHubProtocol = /** @class */ (function () {
    function JsonHubProtocol() {
        /** @inheritDoc */
        this.name = JSON_HUB_PROTOCOL_NAME;
        /** @inheritDoc */
        this.version = 1;
        /** @inheritDoc */
        this.transferFormat = _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"].Text;
    }
    /** Creates an array of {@link @aspnet/signalr.HubMessage} objects from the specified serialized representation.
     *
     * @param {string} input A string containing the serialized representation.
     * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
     */
    JsonHubProtocol.prototype.parseMessages = function (input, logger) {
        // The interface does allow "ArrayBuffer" to be passed in, but this implementation does not. So let's throw a useful error.
        if (typeof input !== "string") {
            throw new Error("Invalid input for JSON hub protocol. Expected a string.");
        }
        if (!input) {
            return [];
        }
        if (logger === null) {
            logger = _Loggers__WEBPACK_IMPORTED_MODULE_3__["NullLogger"].instance;
        }
        // Parse the messages
        var messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__["TextMessageFormat"].parse(input);
        var hubMessages = [];
        for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
            var message = messages_1[_i];
            var parsedMessage = JSON.parse(message);
            if (typeof parsedMessage.type !== "number") {
                throw new Error("Invalid payload.");
            }
            switch (parsedMessage.type) {
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Invocation:
                    this.isInvocationMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].StreamItem:
                    this.isStreamItemMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Completion:
                    this.isCompletionMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Ping:
                    // Single value, no need to validate
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Close:
                    // All optional values, no need to validate
                    break;
                default:
                    // Future protocol changes can add message types, old clients can ignore them
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
                    continue;
            }
            hubMessages.push(parsedMessage);
        }
        return hubMessages;
    };
    /** Writes the specified {@link @aspnet/signalr.HubMessage} to a string and returns it.
     *
     * @param {HubMessage} message The message to write.
     * @returns {string} A string containing the serialized representation of the message.
     */
    JsonHubProtocol.prototype.writeMessage = function (message) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__["TextMessageFormat"].write(JSON.stringify(message));
    };
    JsonHubProtocol.prototype.isInvocationMessage = function (message) {
        this.assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
        if (message.invocationId !== undefined) {
            this.assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
        }
    };
    JsonHubProtocol.prototype.isStreamItemMessage = function (message) {
        this.assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
        if (message.item === undefined) {
            throw new Error("Invalid payload for StreamItem message.");
        }
    };
    JsonHubProtocol.prototype.isCompletionMessage = function (message) {
        if (message.result && message.error) {
            throw new Error("Invalid payload for Completion message.");
        }
        if (!message.result && message.error) {
            this.assertNotEmptyString(message.error, "Invalid payload for Completion message.");
        }
        this.assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
    };
    JsonHubProtocol.prototype.assertNotEmptyString = function (value, errorMessage) {
        if (typeof value !== "string" || value === "") {
            throw new Error(errorMessage);
        }
    };
    return JsonHubProtocol;
}());

//# sourceMappingURL=JsonHubProtocol.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/Loggers.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/Loggers.js ***!
  \**********************************************************/
/*! exports provided: NullLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullLogger", function() { return NullLogger; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** A logger that does nothing when log messages are sent to it. */
var NullLogger = /** @class */ (function () {
    function NullLogger() {
    }
    /** @inheritDoc */
    // tslint:disable-next-line
    NullLogger.prototype.log = function (_logLevel, _message) {
    };
    /** The singleton instance of the {@link @aspnet/signalr.NullLogger}. */
    NullLogger.instance = new NullLogger();
    return NullLogger;
}());

//# sourceMappingURL=Loggers.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/LongPollingTransport.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/LongPollingTransport.js ***!
  \***********************************************************************/
/*! exports provided: LongPollingTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPollingTransport", function() { return LongPollingTransport; });
/* harmony import */ var _AbortController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbortController */ "./node_modules/@aspnet/signalr/dist/esm/AbortController.js");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ "./node_modules/@aspnet/signalr/dist/esm/Errors.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// Not exported from 'index', this type is internal.
/** @private */
var LongPollingTransport = /** @class */ (function () {
    function LongPollingTransport(httpClient, accessTokenFactory, logger, logMessageContent) {
        this.httpClient = httpClient;
        this.accessTokenFactory = accessTokenFactory;
        this.logger = logger;
        this.pollAbort = new _AbortController__WEBPACK_IMPORTED_MODULE_0__["AbortController"]();
        this.logMessageContent = logMessageContent;
        this.running = false;
        this.onreceive = null;
        this.onclose = null;
    }
    Object.defineProperty(LongPollingTransport.prototype, "pollAborted", {
        // This is an internal type, not exported from 'index' so this is really just internal.
        get: function () {
            return this.pollAbort.aborted;
        },
        enumerable: true,
        configurable: true
    });
    LongPollingTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var pollOptions, token, pollUrl, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"], "transferFormat");
                        this.url = url;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Connecting.");
                        // Allow binary format on Node and Browsers that support binary content (indicated by the presence of responseType property)
                        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"].Binary &&
                            (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
                            throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                        }
                        pollOptions = {
                            abortSignal: this.pollAbort.signal,
                            headers: {},
                            timeout: 100000,
                        };
                        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"].Binary) {
                            pollOptions.responseType = "arraybuffer";
                        }
                        return [4 /*yield*/, this.getAccessToken()];
                    case 1:
                        token = _a.sent();
                        this.updateHeaderToken(pollOptions, token);
                        pollUrl = url + "&_=" + Date.now();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                        return [4 /*yield*/, this.httpClient.get(pollUrl, pollOptions)];
                    case 2:
                        response = _a.sent();
                        if (response.statusCode !== 200) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
                            // Mark running as false so that the poll immediately ends and runs the close logic
                            this.closeError = new _Errors__WEBPACK_IMPORTED_MODULE_1__["HttpError"](response.statusText || "", response.statusCode);
                            this.running = false;
                        }
                        else {
                            this.running = true;
                        }
                        this.receiving = this.poll(this.url, pollOptions);
                        return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, null];
                }
            });
        });
    };
    LongPollingTransport.prototype.updateHeaderToken = function (request, token) {
        if (!request.headers) {
            request.headers = {};
        }
        if (token) {
            // tslint:disable-next-line:no-string-literal
            request.headers["Authorization"] = "Bearer " + token;
            return;
        }
        // tslint:disable-next-line:no-string-literal
        if (request.headers["Authorization"]) {
            // tslint:disable-next-line:no-string-literal
            delete request.headers["Authorization"];
        }
    };
    LongPollingTransport.prototype.poll = function (url, pollOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var token, pollUrl, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 8, 9]);
                        _a.label = 1;
                    case 1:
                        if (!this.running) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getAccessToken()];
                    case 2:
                        token = _a.sent();
                        this.updateHeaderToken(pollOptions, token);
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        pollUrl = url + "&_=" + Date.now();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                        return [4 /*yield*/, this.httpClient.get(pollUrl, pollOptions)];
                    case 4:
                        response = _a.sent();
                        if (response.statusCode === 204) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "(LongPolling transport) Poll terminated by server.");
                            this.running = false;
                        }
                        else if (response.statusCode !== 200) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
                            // Unexpected status code
                            this.closeError = new _Errors__WEBPACK_IMPORTED_MODULE_1__["HttpError"](response.statusText || "", response.statusCode);
                            this.running = false;
                        }
                        else {
                            // Process the response
                            if (response.content) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getDataDetail"])(response.content, this.logMessageContent) + ".");
                                if (this.onreceive) {
                                    this.onreceive(response.content);
                                }
                            }
                            else {
                                // This is another way timeout manifest.
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll timed out, reissuing.");
                            }
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        if (!this.running) {
                            // Log but disregard errors that occur after stopping
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll errored after shutdown: " + e_1.message);
                        }
                        else {
                            if (e_1 instanceof _Errors__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]) {
                                // Ignore timeouts and reissue the poll.
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll timed out, reissuing.");
                            }
                            else {
                                // Close the connection with the error as the result.
                                this.closeError = e_1;
                                this.running = false;
                            }
                        }
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 1];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Polling complete.");
                        // We will reach here with pollAborted==false when the server returned a response causing the transport to stop.
                        // If pollAborted==true then client initiated the stop and the stop method will raise the close event after DELETE is sent.
                        if (!this.pollAborted) {
                            this.raiseOnClose();
                        }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.running) {
                    return [2 /*return*/, Promise.reject(new Error("Cannot send until the transport is connected"))];
                }
                return [2 /*return*/, Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["sendMessage"])(this.logger, "LongPolling", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
            });
        });
    };
    LongPollingTransport.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deleteOptions, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Stopping polling.");
                        // Tell receiving loop to stop, abort any current request, and then wait for it to finish
                        this.running = false;
                        this.pollAbort.abort();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 5, 6]);
                        return [4 /*yield*/, this.receiving];
                    case 2:
                        _a.sent();
                        // Send DELETE to clean up long polling on the server
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) sending DELETE request to " + this.url + ".");
                        deleteOptions = {
                            headers: {},
                        };
                        return [4 /*yield*/, this.getAccessToken()];
                    case 3:
                        token = _a.sent();
                        this.updateHeaderToken(deleteOptions, token);
                        return [4 /*yield*/, this.httpClient.delete(this.url, deleteOptions)];
                    case 4:
                        _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) DELETE request sent.");
                        return [3 /*break*/, 6];
                    case 5:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Stop finished.");
                        // Raise close event here instead of in polling
                        // It needs to happen after the DELETE request is sent
                        this.raiseOnClose();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.raiseOnClose = function () {
        if (this.onclose) {
            var logMessage = "(LongPolling transport) Firing onclose event.";
            if (this.closeError) {
                logMessage += " Error: " + this.closeError;
            }
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, logMessage);
            this.onclose(this.closeError);
        }
    };
    return LongPollingTransport;
}());

//# sourceMappingURL=LongPollingTransport.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/NodeHttpClient.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/NodeHttpClient.js ***!
  \*****************************************************************/
/*! exports provided: NodeHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeHttpClient", function() { return NodeHttpClient; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./node_modules/@aspnet/signalr/dist/esm/Errors.js");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "./node_modules/@aspnet/signalr/dist/esm/HttpClient.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var requestModule;
if (typeof XMLHttpRequest === "undefined") {
    // In order to ignore the dynamic require in webpack builds we need to do this magic
    // @ts-ignore: TS doesn't know about these names
    var requireFunc =  true ? require : undefined;
    requestModule = requireFunc("request");
}
var NodeHttpClient = /** @class */ (function (_super) {
    __extends(NodeHttpClient, _super);
    function NodeHttpClient(logger) {
        var _this = _super.call(this) || this;
        if (typeof requestModule === "undefined") {
            throw new Error("The 'request' module could not be loaded.");
        }
        _this.logger = logger;
        _this.cookieJar = requestModule.jar();
        _this.request = requestModule.defaults({ jar: _this.cookieJar });
        return _this;
    }
    NodeHttpClient.prototype.send = function (httpRequest) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestBody;
            if (Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isArrayBuffer"])(httpRequest.content)) {
                requestBody = Buffer.from(httpRequest.content);
            }
            else {
                requestBody = httpRequest.content || "";
            }
            var currentRequest = _this.request(httpRequest.url, {
                body: requestBody,
                // If binary is expected 'null' should be used, otherwise for text 'utf8'
                encoding: httpRequest.responseType === "arraybuffer" ? null : "utf8",
                headers: __assign({ 
                    // Tell auth middleware to 401 instead of redirecting
                    "X-Requested-With": "XMLHttpRequest" }, httpRequest.headers),
                method: httpRequest.method,
                timeout: httpRequest.timeout,
            }, function (error, response, body) {
                if (httpRequest.abortSignal) {
                    httpRequest.abortSignal.onabort = null;
                }
                if (error) {
                    if (error.code === "ETIMEDOUT") {
                        _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Timeout from HTTP request.");
                        reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]());
                    }
                    _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Error from HTTP request. " + error);
                    reject(error);
                    return;
                }
                if (response.statusCode >= 200 && response.statusCode < 300) {
                    resolve(new _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](response.statusCode, response.statusMessage || "", body));
                }
                else {
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](response.statusMessage || "", response.statusCode || 0));
                }
            });
            if (httpRequest.abortSignal) {
                httpRequest.abortSignal.onabort = function () {
                    currentRequest.abort();
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
                };
            }
        });
    };
    NodeHttpClient.prototype.getCookieString = function (url) {
        return this.cookieJar.getCookieString(url);
    };
    return NodeHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));

//# sourceMappingURL=NodeHttpClient.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/ServerSentEventsTransport.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/ServerSentEventsTransport.js ***!
  \****************************************************************************/
/*! exports provided: ServerSentEventsTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSentEventsTransport", function() { return ServerSentEventsTransport; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/** @private */
var ServerSentEventsTransport = /** @class */ (function () {
    function ServerSentEventsTransport(httpClient, accessTokenFactory, logger, logMessageContent, eventSourceConstructor) {
        this.httpClient = httpClient;
        this.accessTokenFactory = accessTokenFactory;
        this.logger = logger;
        this.logMessageContent = logMessageContent;
        this.eventSourceConstructor = eventSourceConstructor;
        this.onreceive = null;
        this.onclose = null;
    }
    ServerSentEventsTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"], "transferFormat");
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(SSE transport) Connecting.");
                        // set url before accessTokenFactory because this.url is only for send and we set the auth header instead of the query string for send
                        this.url = url;
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                            var opened = false;
                            if (transferFormat !== _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"].Text) {
                                reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                                return;
                            }
                            var eventSource;
                            if (_Utils__WEBPACK_IMPORTED_MODULE_2__["Platform"].isBrowser || _Utils__WEBPACK_IMPORTED_MODULE_2__["Platform"].isWebWorker) {
                                eventSource = new _this.eventSourceConstructor(url, { withCredentials: true });
                            }
                            else {
                                // Non-browser passes cookies via the dictionary
                                var cookies = _this.httpClient.getCookieString(url);
                                eventSource = new _this.eventSourceConstructor(url, { withCredentials: true, headers: { Cookie: cookies } });
                            }
                            try {
                                eventSource.onmessage = function (e) {
                                    if (_this.onreceive) {
                                        try {
                                            _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(SSE transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(e.data, _this.logMessageContent) + ".");
                                            _this.onreceive(e.data);
                                        }
                                        catch (error) {
                                            _this.close(error);
                                            return;
                                        }
                                    }
                                };
                                eventSource.onerror = function (e) {
                                    var error = new Error(e.data || "Error occurred");
                                    if (opened) {
                                        _this.close(error);
                                    }
                                    else {
                                        reject(error);
                                    }
                                };
                                eventSource.onopen = function () {
                                    _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information, "SSE connected to " + _this.url);
                                    _this.eventSource = eventSource;
                                    opened = true;
                                    resolve();
                                };
                            }
                            catch (e) {
                                reject(e);
                                return;
                            }
                        })];
                }
            });
        });
    };
    ServerSentEventsTransport.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.eventSource) {
                    return [2 /*return*/, Promise.reject(new Error("Cannot send until the transport is connected"))];
                }
                return [2 /*return*/, Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["sendMessage"])(this.logger, "SSE", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
            });
        });
    };
    ServerSentEventsTransport.prototype.stop = function () {
        this.close();
        return Promise.resolve();
    };
    ServerSentEventsTransport.prototype.close = function (e) {
        if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = undefined;
            if (this.onclose) {
                this.onclose(e);
            }
        }
    };
    return ServerSentEventsTransport;
}());

//# sourceMappingURL=ServerSentEventsTransport.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/Subject.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/Subject.js ***!
  \**********************************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

/** Stream implementation to stream items to the server. */
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.next = function (item) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.next(item);
        }
    };
    Subject.prototype.error = function (err) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            if (observer.error) {
                observer.error(err);
            }
        }
    };
    Subject.prototype.complete = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            if (observer.complete) {
                observer.complete();
            }
        }
    };
    Subject.prototype.subscribe = function (observer) {
        this.observers.push(observer);
        return new _Utils__WEBPACK_IMPORTED_MODULE_0__["SubjectSubscription"](this, observer);
    };
    return Subject;
}());

//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/TextMessageFormat.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/TextMessageFormat.js ***!
  \********************************************************************/
/*! exports provided: TextMessageFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMessageFormat", function() { return TextMessageFormat; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Not exported from index
/** @private */
var TextMessageFormat = /** @class */ (function () {
    function TextMessageFormat() {
    }
    TextMessageFormat.write = function (output) {
        return "" + output + TextMessageFormat.RecordSeparator;
    };
    TextMessageFormat.parse = function (input) {
        if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
            throw new Error("Message is incomplete.");
        }
        var messages = input.split(TextMessageFormat.RecordSeparator);
        messages.pop();
        return messages;
    };
    TextMessageFormat.RecordSeparatorCode = 0x1e;
    TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
    return TextMessageFormat;
}());

//# sourceMappingURL=TextMessageFormat.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/Utils.js":
/*!********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/Utils.js ***!
  \********************************************************/
/*! exports provided: Arg, Platform, getDataDetail, formatArrayBuffer, isArrayBuffer, sendMessage, createLogger, SubjectSubscription, ConsoleLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arg", function() { return Arg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataDetail", function() { return getDataDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatArrayBuffer", function() { return formatArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return isArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLogger", function() { return createLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return SubjectSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogger", function() { return ConsoleLogger; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loggers */ "./node_modules/@aspnet/signalr/dist/esm/Loggers.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/** @private */
var Arg = /** @class */ (function () {
    function Arg() {
    }
    Arg.isRequired = function (val, name) {
        if (val === null || val === undefined) {
            throw new Error("The '" + name + "' argument is required.");
        }
    };
    Arg.isIn = function (val, values, name) {
        // TypeScript enums have keys for **both** the name and the value of each enum member on the type itself.
        if (!(val in values)) {
            throw new Error("Unknown " + name + " value: " + val + ".");
        }
    };
    return Arg;
}());

/** @private */
var Platform = /** @class */ (function () {
    function Platform() {
    }
    Object.defineProperty(Platform, "isBrowser", {
        get: function () {
            return typeof window === "object";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Platform, "isWebWorker", {
        get: function () {
            return typeof self === "object" && "importScripts" in self;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Platform, "isNode", {
        get: function () {
            return !this.isBrowser && !this.isWebWorker;
        },
        enumerable: true,
        configurable: true
    });
    return Platform;
}());

/** @private */
function getDataDetail(data, includeContent) {
    var detail = "";
    if (isArrayBuffer(data)) {
        detail = "Binary data of length " + data.byteLength;
        if (includeContent) {
            detail += ". Content: '" + formatArrayBuffer(data) + "'";
        }
    }
    else if (typeof data === "string") {
        detail = "String data of length " + data.length;
        if (includeContent) {
            detail += ". Content: '" + data + "'";
        }
    }
    return detail;
}
/** @private */
function formatArrayBuffer(data) {
    var view = new Uint8Array(data);
    // Uint8Array.map only supports returning another Uint8Array?
    var str = "";
    view.forEach(function (num) {
        var pad = num < 16 ? "0" : "";
        str += "0x" + pad + num.toString(16) + " ";
    });
    // Trim of trailing space.
    return str.substr(0, str.length - 1);
}
// Also in signalr-protocol-msgpack/Utils.ts
/** @private */
function isArrayBuffer(val) {
    return val && typeof ArrayBuffer !== "undefined" &&
        (val instanceof ArrayBuffer ||
            // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
            (val.constructor && val.constructor.name === "ArrayBuffer"));
}
/** @private */
function sendMessage(logger, transportName, httpClient, url, accessTokenFactory, content, logMessageContent) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, headers, token, responseType, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!accessTokenFactory) return [3 /*break*/, 2];
                    return [4 /*yield*/, accessTokenFactory()];
                case 1:
                    token = _b.sent();
                    if (token) {
                        headers = (_a = {},
                            _a["Authorization"] = "Bearer " + token,
                            _a);
                    }
                    _b.label = 2;
                case 2:
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(" + transportName + " transport) sending data. " + getDataDetail(content, logMessageContent) + ".");
                    responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
                    return [4 /*yield*/, httpClient.post(url, {
                            content: content,
                            headers: headers,
                            responseType: responseType,
                        })];
                case 3:
                    response = _b.sent();
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(" + transportName + " transport) request complete. Response status: " + response.statusCode + ".");
                    return [2 /*return*/];
            }
        });
    });
}
/** @private */
function createLogger(logger) {
    if (logger === undefined) {
        return new ConsoleLogger(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information);
    }
    if (logger === null) {
        return _Loggers__WEBPACK_IMPORTED_MODULE_1__["NullLogger"].instance;
    }
    if (logger.log) {
        return logger;
    }
    return new ConsoleLogger(logger);
}
/** @private */
var SubjectSubscription = /** @class */ (function () {
    function SubjectSubscription(subject, observer) {
        this.subject = subject;
        this.observer = observer;
    }
    SubjectSubscription.prototype.dispose = function () {
        var index = this.subject.observers.indexOf(this.observer);
        if (index > -1) {
            this.subject.observers.splice(index, 1);
        }
        if (this.subject.observers.length === 0 && this.subject.cancelCallback) {
            this.subject.cancelCallback().catch(function (_) { });
        }
    };
    return SubjectSubscription;
}());

/** @private */
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger(minimumLogLevel) {
        this.minimumLogLevel = minimumLogLevel;
        this.outputConsole = console;
    }
    ConsoleLogger.prototype.log = function (logLevel, message) {
        if (logLevel >= this.minimumLogLevel) {
            switch (logLevel) {
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Critical:
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Error:
                    this.outputConsole.error("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Warning:
                    this.outputConsole.warn("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information:
                    this.outputConsole.info("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                default:
                    // console.debug only goes to attached debuggers in Node, so we use console.log for Trace and Debug
                    this.outputConsole.log("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
            }
        }
    };
    return ConsoleLogger;
}());

//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/WebSocketTransport.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/WebSocketTransport.js ***!
  \*********************************************************************/
/*! exports provided: WebSocketTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketTransport", function() { return WebSocketTransport; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/** @private */
var WebSocketTransport = /** @class */ (function () {
    function WebSocketTransport(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor) {
        this.logger = logger;
        this.accessTokenFactory = accessTokenFactory;
        this.logMessageContent = logMessageContent;
        this.webSocketConstructor = webSocketConstructor;
        this.httpClient = httpClient;
        this.onreceive = null;
        this.onclose = null;
    }
    WebSocketTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"], "transferFormat");
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) Connecting.");
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                            url = url.replace(/^http/, "ws");
                            var webSocket;
                            var cookies = _this.httpClient.getCookieString(url);
                            if (_Utils__WEBPACK_IMPORTED_MODULE_2__["Platform"].isNode && cookies) {
                                // Only pass cookies when in non-browser environments
                                webSocket = new _this.webSocketConstructor(url, undefined, {
                                    headers: {
                                        Cookie: "" + cookies,
                                    },
                                });
                            }
                            if (!webSocket) {
                                // Chrome is not happy with passing 'undefined' as protocol
                                webSocket = new _this.webSocketConstructor(url);
                            }
                            if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"].Binary) {
                                webSocket.binaryType = "arraybuffer";
                            }
                            // tslint:disable-next-line:variable-name
                            webSocket.onopen = function (_event) {
                                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information, "WebSocket connected to " + url + ".");
                                _this.webSocket = webSocket;
                                resolve();
                            };
                            webSocket.onerror = function (event) {
                                var error = null;
                                // ErrorEvent is a browser only type we need to check if the type exists before using it
                                if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                                    error = event.error;
                                }
                                reject(error);
                            };
                            webSocket.onmessage = function (message) {
                                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(message.data, _this.logMessageContent) + ".");
                                if (_this.onreceive) {
                                    _this.onreceive(message.data);
                                }
                            };
                            webSocket.onclose = function (event) { return _this.close(event); };
                        })];
                }
            });
        });
    };
    WebSocketTransport.prototype.send = function (data) {
        if (this.webSocket && this.webSocket.readyState === this.webSocketConstructor.OPEN) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) sending data. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(data, this.logMessageContent) + ".");
            this.webSocket.send(data);
            return Promise.resolve();
        }
        return Promise.reject("WebSocket is not in the OPEN state");
    };
    WebSocketTransport.prototype.stop = function () {
        if (this.webSocket) {
            // Clear websocket handlers because we are considering the socket closed now
            this.webSocket.onclose = function () { };
            this.webSocket.onmessage = function () { };
            this.webSocket.onerror = function () { };
            this.webSocket.close();
            this.webSocket = undefined;
            // Manually invoke onclose callback inline so we know the HttpConnection was closed properly before returning
            // This also solves an issue where websocket.onclose could take 18+ seconds to trigger during network disconnects
            this.close(undefined);
        }
        return Promise.resolve();
    };
    WebSocketTransport.prototype.close = function (event) {
        // webSocket will be null if the transport did not start successfully
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) socket closed.");
        if (this.onclose) {
            if (event && (event.wasClean === false || event.code !== 1000)) {
                this.onclose(new Error("WebSocket closed with status code: " + event.code + " (" + event.reason + ")."));
            }
            else {
                this.onclose();
            }
        }
    };
    return WebSocketTransport;
}());

//# sourceMappingURL=WebSocketTransport.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/XhrHttpClient.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/XhrHttpClient.js ***!
  \****************************************************************/
/*! exports provided: XhrHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrHttpClient", function() { return XhrHttpClient; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./node_modules/@aspnet/signalr/dist/esm/Errors.js");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "./node_modules/@aspnet/signalr/dist/esm/HttpClient.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var XhrHttpClient = /** @class */ (function (_super) {
    __extends(XhrHttpClient, _super);
    function XhrHttpClient(logger) {
        var _this = _super.call(this) || this;
        _this.logger = logger;
        return _this;
    }
    /** @inheritDoc */
    XhrHttpClient.prototype.send = function (request) {
        var _this = this;
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(request.method, request.url, true);
            xhr.withCredentials = true;
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            // Explicitly setting the Content-Type header for React Native on Android platform.
            xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            var headers = request.headers;
            if (headers) {
                Object.keys(headers)
                    .forEach(function (header) {
                    xhr.setRequestHeader(header, headers[header]);
                });
            }
            if (request.responseType) {
                xhr.responseType = request.responseType;
            }
            if (request.abortSignal) {
                request.abortSignal.onabort = function () {
                    xhr.abort();
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
                };
            }
            if (request.timeout) {
                xhr.timeout = request.timeout;
            }
            xhr.onload = function () {
                if (request.abortSignal) {
                    request.abortSignal.onabort = null;
                }
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(new _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](xhr.status, xhr.statusText, xhr.response || xhr.responseText));
                }
                else {
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](xhr.statusText, xhr.status));
                }
            };
            xhr.onerror = function () {
                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Error from HTTP request. " + xhr.status + ": " + xhr.statusText + ".");
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](xhr.statusText, xhr.status));
            };
            xhr.ontimeout = function () {
                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Timeout from HTTP request.");
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]());
            };
            xhr.send(request.content || "");
        });
    };
    return XhrHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));

//# sourceMappingURL=XhrHttpClient.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: VERSION, AbortError, HttpError, TimeoutError, HttpClient, HttpResponse, DefaultHttpClient, HubConnection, HubConnectionState, HubConnectionBuilder, MessageType, LogLevel, HttpTransportType, TransferFormat, NullLogger, JsonHubProtocol, Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./node_modules/@aspnet/signalr/dist/esm/Errors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]; });

/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "./node_modules/@aspnet/signalr/dist/esm/HttpClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]; });

/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultHttpClient */ "./node_modules/@aspnet/signalr/dist/esm/DefaultHttpClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultHttpClient", function() { return _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__["DefaultHttpClient"]; });

/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HubConnection */ "./node_modules/@aspnet/signalr/dist/esm/HubConnection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnection", function() { return _HubConnection__WEBPACK_IMPORTED_MODULE_3__["HubConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnectionState", function() { return _HubConnection__WEBPACK_IMPORTED_MODULE_3__["HubConnectionState"]; });

/* harmony import */ var _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HubConnectionBuilder */ "./node_modules/@aspnet/signalr/dist/esm/HubConnectionBuilder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnectionBuilder", function() { return _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_4__["HubConnectionBuilder"]; });

/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IHubProtocol */ "./node_modules/@aspnet/signalr/dist/esm/IHubProtocol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return _IHubProtocol__WEBPACK_IMPORTED_MODULE_5__["MessageType"]; });

/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _ILogger__WEBPACK_IMPORTED_MODULE_6__["LogLevel"]; });

/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTransportType", function() { return _ITransport__WEBPACK_IMPORTED_MODULE_7__["HttpTransportType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransferFormat", function() { return _ITransport__WEBPACK_IMPORTED_MODULE_7__["TransferFormat"]; });

/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Loggers */ "./node_modules/@aspnet/signalr/dist/esm/Loggers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullLogger", function() { return _Loggers__WEBPACK_IMPORTED_MODULE_8__["NullLogger"]; });

/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JsonHubProtocol */ "./node_modules/@aspnet/signalr/dist/esm/JsonHubProtocol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonHubProtocol", function() { return _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_9__["JsonHubProtocol"]; });

/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Subject */ "./node_modules/@aspnet/signalr/dist/esm/Subject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return _Subject__WEBPACK_IMPORTED_MODULE_10__["Subject"]; });

// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Version token that will be replaced by the prepack command
/** The version of the SignalR client. */
var VERSION = "3.0.0-preview6.19307.2";











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@dotnet/jsinterop/dist/Microsoft.JSInterop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@dotnet/jsinterop/dist/Microsoft.JSInterop.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This is a single-file self-contained module to avoid the need for a Webpack build
var DotNet;
(function (DotNet) {
    window.DotNet = DotNet; // Ensure reachable from anywhere
    var jsonRevivers = [];
    var pendingAsyncCalls = {};
    var cachedJSFunctions = {};
    var nextAsyncCallId = 1; // Start at 1 because zero signals "no response needed"
    var dotNetDispatcher = null;
    /**
     * Sets the specified .NET call dispatcher as the current instance so that it will be used
     * for future invocations.
     *
     * @param dispatcher An object that can dispatch calls from JavaScript to a .NET runtime.
     */
    function attachDispatcher(dispatcher) {
        dotNetDispatcher = dispatcher;
    }
    DotNet.attachDispatcher = attachDispatcher;
    /**
     * Adds a JSON reviver callback that will be used when parsing arguments received from .NET.
     * @param reviver The reviver to add.
     */
    function attachReviver(reviver) {
        jsonRevivers.push(reviver);
    }
    DotNet.attachReviver = attachReviver;
    /**
     * Invokes the specified .NET public method synchronously. Not all hosting scenarios support
     * synchronous invocation, so if possible use invokeMethodAsync instead.
     *
     * @param assemblyName The short name (without key/version or .dll extension) of the .NET assembly containing the method.
     * @param methodIdentifier The identifier of the method to invoke. The method must have a [JSInvokable] attribute specifying this identifier.
     * @param args Arguments to pass to the method, each of which must be JSON-serializable.
     * @returns The result of the operation.
     */
    function invokeMethod(assemblyName, methodIdentifier) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return invokePossibleInstanceMethod(assemblyName, methodIdentifier, null, args);
    }
    DotNet.invokeMethod = invokeMethod;
    /**
     * Invokes the specified .NET public method asynchronously.
     *
     * @param assemblyName The short name (without key/version or .dll extension) of the .NET assembly containing the method.
     * @param methodIdentifier The identifier of the method to invoke. The method must have a [JSInvokable] attribute specifying this identifier.
     * @param args Arguments to pass to the method, each of which must be JSON-serializable.
     * @returns A promise representing the result of the operation.
     */
    function invokeMethodAsync(assemblyName, methodIdentifier) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return invokePossibleInstanceMethodAsync(assemblyName, methodIdentifier, null, args);
    }
    DotNet.invokeMethodAsync = invokeMethodAsync;
    function invokePossibleInstanceMethod(assemblyName, methodIdentifier, dotNetObjectId, args) {
        var dispatcher = getRequiredDispatcher();
        if (dispatcher.invokeDotNetFromJS) {
            var argsJson = JSON.stringify(args, argReplacer);
            var resultJson = dispatcher.invokeDotNetFromJS(assemblyName, methodIdentifier, dotNetObjectId, argsJson);
            return resultJson ? parseJsonWithRevivers(resultJson) : null;
        }
        else {
            throw new Error('The current dispatcher does not support synchronous calls from JS to .NET. Use invokeMethodAsync instead.');
        }
    }
    function invokePossibleInstanceMethodAsync(assemblyName, methodIdentifier, dotNetObjectId, args) {
        if (assemblyName && dotNetObjectId) {
            throw new Error("For instance method calls, assemblyName should be null. Received '" + assemblyName + "'.");
        }
        var asyncCallId = nextAsyncCallId++;
        var resultPromise = new Promise(function (resolve, reject) {
            pendingAsyncCalls[asyncCallId] = { resolve: resolve, reject: reject };
        });
        try {
            var argsJson = JSON.stringify(args, argReplacer);
            getRequiredDispatcher().beginInvokeDotNetFromJS(asyncCallId, assemblyName, methodIdentifier, dotNetObjectId, argsJson);
        }
        catch (ex) {
            // Synchronous failure
            completePendingCall(asyncCallId, false, ex);
        }
        return resultPromise;
    }
    function getRequiredDispatcher() {
        if (dotNetDispatcher !== null) {
            return dotNetDispatcher;
        }
        throw new Error('No .NET call dispatcher has been set.');
    }
    function completePendingCall(asyncCallId, success, resultOrError) {
        if (!pendingAsyncCalls.hasOwnProperty(asyncCallId)) {
            throw new Error("There is no pending async call with ID " + asyncCallId + ".");
        }
        var asyncCall = pendingAsyncCalls[asyncCallId];
        delete pendingAsyncCalls[asyncCallId];
        if (success) {
            asyncCall.resolve(resultOrError);
        }
        else {
            asyncCall.reject(resultOrError);
        }
    }
    /**
     * Receives incoming calls from .NET and dispatches them to JavaScript.
     */
    DotNet.jsCallDispatcher = {
        /**
         * Finds the JavaScript function matching the specified identifier.
         *
         * @param identifier Identifies the globally-reachable function to be returned.
         * @returns A Function instance.
         */
        findJSFunction: findJSFunction,
        /**
         * Invokes the specified synchronous JavaScript function.
         *
         * @param identifier Identifies the globally-reachable function to invoke.
         * @param argsJson JSON representation of arguments to be passed to the function.
         * @returns JSON representation of the invocation result.
         */
        invokeJSFromDotNet: function (identifier, argsJson) {
            var result = findJSFunction(identifier).apply(null, parseJsonWithRevivers(argsJson));
            return result === null || result === undefined
                ? null
                : JSON.stringify(result, argReplacer);
        },
        /**
         * Invokes the specified synchronous or asynchronous JavaScript function.
         *
         * @param asyncHandle A value identifying the asynchronous operation. This value will be passed back in a later call to endInvokeJSFromDotNet.
         * @param identifier Identifies the globally-reachable function to invoke.
         * @param argsJson JSON representation of arguments to be passed to the function.
         */
        beginInvokeJSFromDotNet: function (asyncHandle, identifier, argsJson) {
            // Coerce synchronous functions into async ones, plus treat
            // synchronous exceptions the same as async ones
            var promise = new Promise(function (resolve) {
                var synchronousResultOrPromise = findJSFunction(identifier).apply(null, parseJsonWithRevivers(argsJson));
                resolve(synchronousResultOrPromise);
            });
            // We only listen for a result if the caller wants to be notified about it
            if (asyncHandle) {
                // On completion, dispatch result back to .NET
                // Not using "await" because it codegens a lot of boilerplate
                promise.then(function (result) { return getRequiredDispatcher().endInvokeJSFromDotNet(asyncHandle, true, JSON.stringify([asyncHandle, true, result], argReplacer)); }, function (error) { return getRequiredDispatcher().endInvokeJSFromDotNet(asyncHandle, false, JSON.stringify([asyncHandle, false, formatError(error)])); });
            }
        },
        /**
         * Receives notification that an async call from JS to .NET has completed.
         * @param asyncCallId The identifier supplied in an earlier call to beginInvokeDotNetFromJS.
         * @param success A flag to indicate whether the operation completed successfully.
         * @param resultOrExceptionMessage Either the operation result or an error message.
         */
        endInvokeDotNetFromJS: function (asyncCallId, success, resultOrExceptionMessage) {
            var resultOrError = success ? resultOrExceptionMessage : new Error(resultOrExceptionMessage);
            completePendingCall(parseInt(asyncCallId), success, resultOrError);
        }
    };
    function parseJsonWithRevivers(json) {
        return json ? JSON.parse(json, function (key, initialValue) {
            // Invoke each reviver in order, passing the output from the previous reviver,
            // so that each one gets a chance to transform the value
            return jsonRevivers.reduce(function (latestValue, reviver) { return reviver(key, latestValue); }, initialValue);
        }) : null;
    }
    function formatError(error) {
        if (error instanceof Error) {
            return error.message + "\n" + error.stack;
        }
        else {
            return error ? error.toString() : 'null';
        }
    }
    function findJSFunction(identifier) {
        if (cachedJSFunctions.hasOwnProperty(identifier)) {
            return cachedJSFunctions[identifier];
        }
        var result = window;
        var resultIdentifier = 'window';
        var lastSegmentValue;
        identifier.split('.').forEach(function (segment) {
            if (segment in result) {
                lastSegmentValue = result;
                result = result[segment];
                resultIdentifier += '.' + segment;
            }
            else {
                throw new Error("Could not find '" + segment + "' in '" + resultIdentifier + "'.");
            }
        });
        if (result instanceof Function) {
            result = result.bind(lastSegmentValue);
            cachedJSFunctions[identifier] = result;
            return result;
        }
        else {
            throw new Error("The value '" + resultIdentifier + "' is not a function.");
        }
    }
    var DotNetObject = /** @class */ (function () {
        function DotNetObject(_id) {
            this._id = _id;
        }
        DotNetObject.prototype.invokeMethod = function (methodIdentifier) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return invokePossibleInstanceMethod(null, methodIdentifier, this._id, args);
        };
        DotNetObject.prototype.invokeMethodAsync = function (methodIdentifier) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return invokePossibleInstanceMethodAsync(null, methodIdentifier, this._id, args);
        };
        DotNetObject.prototype.dispose = function () {
            var promise = invokePossibleInstanceMethodAsync(null, '__Dispose', this._id, null);
            promise.catch(function (error) { return console.error(error); });
        };
        DotNetObject.prototype.serializeAsArg = function () {
            return { __dotNetObject: this._id };
        };
        return DotNetObject;
    }());
    var dotNetObjectRefKey = '__dotNetObject';
    attachReviver(function reviveDotNetObject(key, value) {
        if (value && typeof value === 'object' && value.hasOwnProperty(dotNetObjectRefKey)) {
            return new DotNetObject(value.__dotNetObject);
        }
        // Unrecognized - let another reviver handle it
        return value;
    });
    function argReplacer(key, value) {
        return value instanceof DotNetObject ? value.serializeAsArg() : value;
    }
})(DotNet || (DotNet = {}));
//# sourceMappingURL=Microsoft.JSInterop.js.map

/***/ }),

/***/ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();


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

  var i
  for (i = 0; i < len; i += 4) {
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

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Boot.Desktop.ts":
/*!*****************************!*\
  !*** ./src/Boot.Desktop.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! @dotnet/jsinterop/dist/Microsoft.JSInterop */ "./node_modules/@dotnet/jsinterop/dist/Microsoft.JSInterop.js");
__webpack_require__(/*! @browserjs/GlobalExports */ "./upstream/aspnetcore/web.js/src/GlobalExports.ts");
var OutOfProcessRenderBatch_1 = __webpack_require__(/*! @browserjs/Rendering/RenderBatch/OutOfProcessRenderBatch */ "./upstream/aspnetcore/web.js/src/Rendering/RenderBatch/OutOfProcessRenderBatch.ts");
var RendererEventDispatcher_1 = __webpack_require__(/*! @browserjs/Rendering/RendererEventDispatcher */ "./upstream/aspnetcore/web.js/src/Rendering/RendererEventDispatcher.ts");
var NavigationManager_1 = __webpack_require__(/*! @browserjs/Services/NavigationManager */ "./upstream/aspnetcore/web.js/src/Services/NavigationManager.ts");
var Renderer_1 = __webpack_require__(/*! @browserjs/Rendering/Renderer */ "./upstream/aspnetcore/web.js/src/Rendering/Renderer.ts");
var base64_arraybuffer_1 = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
var ipc = __webpack_require__(/*! ./IPC */ "./src/IPC.ts");
var signalR = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
var IPC_1 = __webpack_require__(/*! ./IPC */ "./src/IPC.ts");
var connection;
function sendMessage(message) {
    connection.invoke("SendMessage", "userid", message).catch(function (err) {
        console.error("SendMessage Failed" + err.toString());
    });
}
exports.sendMessage = sendMessage;
function boot() {
    connection = new signalR.HubConnectionBuilder().withUrl("/webWindowHub").build();
    connection.start().then(function () {
        console.info("Connection successful");
        // Confirm that the JS side is ready for the app to start
        ipc.send('components:init', [
            NavigationManager_1.internalFunctions.getLocationHref().replace(/\/index\.html$/, ''),
            NavigationManager_1.internalFunctions.getBaseURI()
        ]);
    }).catch(function (err) {
        console.error("Unable to connect to SignalR hub");
        console.error(err.toString());
    });
    connection.on("ReceiveMessage", function (message) { console.info("Received: " + message); IPC_1.receiveMessage(message); });
    RendererEventDispatcher_1.setEventDispatcher(function (eventDescriptor, eventArgs) { return DotNet.invokeMethodAsync('WebWindow.Blazor', 'DispatchEvent', eventDescriptor, JSON.stringify(eventArgs)); });
    NavigationManager_1.internalFunctions.listenForNavigationEvents(function (uri, intercepted) {
        return DotNet.invokeMethodAsync('WebWindow.Blazor', 'NotifyLocationChanged', uri, intercepted);
    });
    // Configure the mechanism for JS<->NET calls
    DotNet.attachDispatcher({
        beginInvokeDotNetFromJS: function (callId, assemblyName, methodIdentifier, dotNetObjectId, argsJson) {
            ipc.send('BeginInvokeDotNetFromJS', [callId ? callId.toString() : null, assemblyName, methodIdentifier, dotNetObjectId || 0, argsJson]);
        },
        endInvokeJSFromDotNet: function (callId, succeeded, resultOrError) {
            ipc.send('EndInvokeJSFromDotNet', [callId, succeeded, resultOrError]);
        }
    });
    NavigationManager_1.internalFunctions.enableNavigationInterception();
    ipc.on('JS.BeginInvokeJS', function (asyncHandle, identifier, argsJson) {
        DotNet.jsCallDispatcher.beginInvokeJSFromDotNet(asyncHandle, identifier, argsJson);
    });
    ipc.on('JS.EndInvokeDotNet', function (callId, success, resultOrError) {
        DotNet.jsCallDispatcher.endInvokeDotNetFromJS(callId, success, resultOrError);
    });
    ipc.on('JS.RenderBatch', function (rendererId, batchBase64) {
        var batchData = new Uint8Array(base64_arraybuffer_1.decode(batchBase64));
        Renderer_1.renderBatch(rendererId, new OutOfProcessRenderBatch_1.OutOfProcessRenderBatch(batchData));
    });
    ipc.on('JS.Error', function (message) {
        console.error(message);
    });
}
boot();


/***/ }),

/***/ "./src/IPC.ts":
/*!********************!*\
  !*** ./src/IPC.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Boot_Desktop_1 = __webpack_require__(/*! ./Boot.Desktop */ "./src/Boot.Desktop.ts");
var registrations = {};
function on(eventName, callback) {
    if (!(eventName in registrations)) {
        registrations[eventName] = [];
    }
    registrations[eventName].push(callback);
}
exports.on = on;
function off(eventName, callback) {
    var group = registrations[eventName];
    var index = group.indexOf(callback);
    if (index >= 0) {
        group.splice(index, 1);
    }
}
exports.off = off;
function once(eventName, callback) {
    var callbackOnce = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        off(eventName, callbackOnce);
        callback.apply(null, args);
    };
    on(eventName, callbackOnce);
}
exports.once = once;
function send(eventName, args) {
    Boot_Desktop_1.sendMessage("ipc:" + eventName + " " + JSON.stringify(args));
}
exports.send = send;
function receiveMessage(message) {
    var colonPos = message.indexOf(':');
    var eventName = message.substring(0, colonPos);
    var argsJson = message.substr(colonPos + 1);
    var group = registrations[eventName];
    if (group) {
        var args_1 = JSON.parse(argsJson);
        group.forEach(function (callback) { return callback.apply(null, args_1); });
    }
}
exports.receiveMessage = receiveMessage;


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/Environment.ts":
/*!*******************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/Environment.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function setPlatform(platformInstance) {
    exports.platform = platformInstance;
    return exports.platform;
}
exports.setPlatform = setPlatform;


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/GlobalExports.ts":
/*!*********************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/GlobalExports.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NavigationManager_1 = __webpack_require__(/*! ./Services/NavigationManager */ "./upstream/aspnetcore/web.js/src/Services/NavigationManager.ts");
var Renderer_1 = __webpack_require__(/*! ./Rendering/Renderer */ "./upstream/aspnetcore/web.js/src/Rendering/Renderer.ts");
// Make the following APIs available in global scope for invocation from JS
window['Blazor'] = {
    navigateTo: NavigationManager_1.navigateTo,
    _internal: {
        attachRootComponentToElement: Renderer_1.attachRootComponentToElement,
        navigationManager: NavigationManager_1.internalFunctions,
    },
};


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/Platform/Platform.ts":
/*!*************************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/Platform/Platform.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/Rendering/BrowserRenderer.ts":
/*!*********************************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/Rendering/BrowserRenderer.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RenderBatch_1 = __webpack_require__(/*! ./RenderBatch/RenderBatch */ "./upstream/aspnetcore/web.js/src/Rendering/RenderBatch/RenderBatch.ts");
var EventDelegator_1 = __webpack_require__(/*! ./EventDelegator */ "./upstream/aspnetcore/web.js/src/Rendering/EventDelegator.ts");
var LogicalElements_1 = __webpack_require__(/*! ./LogicalElements */ "./upstream/aspnetcore/web.js/src/Rendering/LogicalElements.ts");
var ElementReferenceCapture_1 = __webpack_require__(/*! ./ElementReferenceCapture */ "./upstream/aspnetcore/web.js/src/Rendering/ElementReferenceCapture.ts");
var RendererEventDispatcher_1 = __webpack_require__(/*! ./RendererEventDispatcher */ "./upstream/aspnetcore/web.js/src/Rendering/RendererEventDispatcher.ts");
var NavigationManager_1 = __webpack_require__(/*! ../Services/NavigationManager */ "./upstream/aspnetcore/web.js/src/Services/NavigationManager.ts");
var selectValuePropname = '_blazorSelectValue';
var sharedTemplateElemForParsing = document.createElement('template');
var sharedSvgElemForParsing = document.createElementNS('http://www.w3.org/2000/svg', 'g');
var preventDefaultEvents = { submit: true };
var rootComponentsPendingFirstRender = {};
var internalAttributeNamePrefix = '__internal_';
var eventPreventDefaultAttributeNamePrefix = 'preventDefault_';
var eventStopPropagationAttributeNamePrefix = 'stopPropagation_';
var BrowserRenderer = /** @class */ (function () {
    function BrowserRenderer(browserRendererId) {
        var _this = this;
        this.childComponentLocations = {};
        this.browserRendererId = browserRendererId;
        this.eventDelegator = new EventDelegator_1.EventDelegator(function (event, eventHandlerId, eventArgs, eventFieldInfo) {
            raiseEvent(event, _this.browserRendererId, eventHandlerId, eventArgs, eventFieldInfo);
        });
        // We don't yet know whether or not navigation interception will be enabled, but in case it will be,
        // we wire up the navigation manager to the event delegator so it has the option to participate
        // in the synthetic event bubbling process later
        NavigationManager_1.attachToEventDelegator(this.eventDelegator);
    }
    BrowserRenderer.prototype.attachRootComponentToLogicalElement = function (componentId, element) {
        this.attachComponentToElement(componentId, element);
        rootComponentsPendingFirstRender[componentId] = element;
    };
    BrowserRenderer.prototype.updateComponent = function (batch, componentId, edits, referenceFrames) {
        var element = this.childComponentLocations[componentId];
        if (!element) {
            throw new Error("No element is currently associated with component " + componentId);
        }
        // On the first render for each root component, clear any existing content (e.g., prerendered)
        var rootElementToClear = rootComponentsPendingFirstRender[componentId];
        if (rootElementToClear) {
            var rootElementToClearEnd = LogicalElements_1.getLogicalSiblingEnd(rootElementToClear);
            delete rootComponentsPendingFirstRender[componentId];
            if (!rootElementToClearEnd) {
                clearElement(rootElementToClear);
            }
            else {
                clearBetween(rootElementToClear, rootElementToClearEnd);
            }
        }
        var ownerDocument = LogicalElements_1.getClosestDomElement(element).ownerDocument;
        var activeElementBefore = ownerDocument && ownerDocument.activeElement;
        this.applyEdits(batch, componentId, element, 0, edits, referenceFrames);
        // Try to restore focus in case it was lost due to an element move
        if ((activeElementBefore instanceof HTMLElement) && ownerDocument && ownerDocument.activeElement !== activeElementBefore) {
            activeElementBefore.focus();
        }
    };
    BrowserRenderer.prototype.disposeComponent = function (componentId) {
        delete this.childComponentLocations[componentId];
    };
    BrowserRenderer.prototype.disposeEventHandler = function (eventHandlerId) {
        this.eventDelegator.removeListener(eventHandlerId);
    };
    BrowserRenderer.prototype.attachComponentToElement = function (componentId, element) {
        this.childComponentLocations[componentId] = element;
    };
    BrowserRenderer.prototype.applyEdits = function (batch, componentId, parent, childIndex, edits, referenceFrames) {
        var currentDepth = 0;
        var childIndexAtCurrentDepth = childIndex;
        var permutationList;
        var arrayBuilderSegmentReader = batch.arrayBuilderSegmentReader;
        var editReader = batch.editReader;
        var frameReader = batch.frameReader;
        var editsValues = arrayBuilderSegmentReader.values(edits);
        var editsOffset = arrayBuilderSegmentReader.offset(edits);
        var editsLength = arrayBuilderSegmentReader.count(edits);
        var maxEditIndexExcl = editsOffset + editsLength;
        for (var editIndex = editsOffset; editIndex < maxEditIndexExcl; editIndex++) {
            var edit = batch.diffReader.editsEntry(editsValues, editIndex);
            var editType = editReader.editType(edit);
            switch (editType) {
                case RenderBatch_1.EditType.prependFrame: {
                    var frameIndex = editReader.newTreeIndex(edit);
                    var frame = batch.referenceFramesEntry(referenceFrames, frameIndex);
                    var siblingIndex = editReader.siblingIndex(edit);
                    this.insertFrame(batch, componentId, parent, childIndexAtCurrentDepth + siblingIndex, referenceFrames, frame, frameIndex);
                    break;
                }
                case RenderBatch_1.EditType.removeFrame: {
                    var siblingIndex = editReader.siblingIndex(edit);
                    LogicalElements_1.removeLogicalChild(parent, childIndexAtCurrentDepth + siblingIndex);
                    break;
                }
                case RenderBatch_1.EditType.setAttribute: {
                    var frameIndex = editReader.newTreeIndex(edit);
                    var frame = batch.referenceFramesEntry(referenceFrames, frameIndex);
                    var siblingIndex = editReader.siblingIndex(edit);
                    var element = LogicalElements_1.getLogicalChild(parent, childIndexAtCurrentDepth + siblingIndex);
                    if (element instanceof Element) {
                        this.applyAttribute(batch, componentId, element, frame);
                    }
                    else {
                        throw new Error('Cannot set attribute on non-element child');
                    }
                    break;
                }
                case RenderBatch_1.EditType.removeAttribute: {
                    // Note that we don't have to dispose the info we track about event handlers here, because the
                    // disposed event handler IDs are delivered separately (in the 'disposedEventHandlerIds' array)
                    var siblingIndex = editReader.siblingIndex(edit);
                    var element = LogicalElements_1.getLogicalChild(parent, childIndexAtCurrentDepth + siblingIndex);
                    if (element instanceof HTMLElement) {
                        var attributeName = editReader.removedAttributeName(edit);
                        // First try to remove any special property we use for this attribute
                        if (!this.tryApplySpecialProperty(batch, element, attributeName, null)) {
                            // If that's not applicable, it's a regular DOM attribute so remove that
                            element.removeAttribute(attributeName);
                        }
                    }
                    else {
                        throw new Error('Cannot remove attribute from non-element child');
                    }
                    break;
                }
                case RenderBatch_1.EditType.updateText: {
                    var frameIndex = editReader.newTreeIndex(edit);
                    var frame = batch.referenceFramesEntry(referenceFrames, frameIndex);
                    var siblingIndex = editReader.siblingIndex(edit);
                    var textNode = LogicalElements_1.getLogicalChild(parent, childIndexAtCurrentDepth + siblingIndex);
                    if (textNode instanceof Text) {
                        textNode.textContent = frameReader.textContent(frame);
                    }
                    else {
                        throw new Error('Cannot set text content on non-text child');
                    }
                    break;
                }
                case RenderBatch_1.EditType.updateMarkup: {
                    var frameIndex = editReader.newTreeIndex(edit);
                    var frame = batch.referenceFramesEntry(referenceFrames, frameIndex);
                    var siblingIndex = editReader.siblingIndex(edit);
                    LogicalElements_1.removeLogicalChild(parent, childIndexAtCurrentDepth + siblingIndex);
                    this.insertMarkup(batch, parent, childIndexAtCurrentDepth + siblingIndex, frame);
                    break;
                }
                case RenderBatch_1.EditType.stepIn: {
                    var siblingIndex = editReader.siblingIndex(edit);
                    parent = LogicalElements_1.getLogicalChild(parent, childIndexAtCurrentDepth + siblingIndex);
                    currentDepth++;
                    childIndexAtCurrentDepth = 0;
                    break;
                }
                case RenderBatch_1.EditType.stepOut: {
                    parent = LogicalElements_1.getLogicalParent(parent);
                    currentDepth--;
                    childIndexAtCurrentDepth = currentDepth === 0 ? childIndex : 0; // The childIndex is only ever nonzero at zero depth
                    break;
                }
                case RenderBatch_1.EditType.permutationListEntry: {
                    permutationList = permutationList || [];
                    permutationList.push({
                        fromSiblingIndex: childIndexAtCurrentDepth + editReader.siblingIndex(edit),
                        toSiblingIndex: childIndexAtCurrentDepth + editReader.moveToSiblingIndex(edit),
                    });
                    break;
                }
                case RenderBatch_1.EditType.permutationListEnd: {
                    LogicalElements_1.permuteLogicalChildren(parent, permutationList);
                    permutationList = undefined;
                    break;
                }
                default: {
                    var unknownType = editType; // Compile-time verification that the switch was exhaustive
                    throw new Error("Unknown edit type: " + unknownType);
                }
            }
        }
    };
    BrowserRenderer.prototype.insertFrame = function (batch, componentId, parent, childIndex, frames, frame, frameIndex) {
        var frameReader = batch.frameReader;
        var frameType = frameReader.frameType(frame);
        switch (frameType) {
            case RenderBatch_1.FrameType.element:
                this.insertElement(batch, componentId, parent, childIndex, frames, frame, frameIndex);
                return 1;
            case RenderBatch_1.FrameType.text:
                this.insertText(batch, parent, childIndex, frame);
                return 1;
            case RenderBatch_1.FrameType.attribute:
                throw new Error('Attribute frames should only be present as leading children of element frames.');
            case RenderBatch_1.FrameType.component:
                this.insertComponent(batch, parent, childIndex, frame);
                return 1;
            case RenderBatch_1.FrameType.region:
                return this.insertFrameRange(batch, componentId, parent, childIndex, frames, frameIndex + 1, frameIndex + frameReader.subtreeLength(frame));
            case RenderBatch_1.FrameType.elementReferenceCapture:
                if (parent instanceof Element) {
                    ElementReferenceCapture_1.applyCaptureIdToElement(parent, frameReader.elementReferenceCaptureId(frame));
                    return 0; // A "capture" is a child in the diff, but has no node in the DOM
                }
                else {
                    throw new Error('Reference capture frames can only be children of element frames.');
                }
            case RenderBatch_1.FrameType.markup:
                this.insertMarkup(batch, parent, childIndex, frame);
                return 1;
            default:
                var unknownType = frameType; // Compile-time verification that the switch was exhaustive
                throw new Error("Unknown frame type: " + unknownType);
        }
    };
    BrowserRenderer.prototype.insertElement = function (batch, componentId, parent, childIndex, frames, frame, frameIndex) {
        var frameReader = batch.frameReader;
        var tagName = frameReader.elementName(frame);
        var newDomElementRaw = tagName === 'svg' || LogicalElements_1.isSvgElement(parent) ?
            document.createElementNS('http://www.w3.org/2000/svg', tagName) :
            document.createElement(tagName);
        var newElement = LogicalElements_1.toLogicalElement(newDomElementRaw);
        LogicalElements_1.insertLogicalChild(newDomElementRaw, parent, childIndex);
        // Apply attributes
        var descendantsEndIndexExcl = frameIndex + frameReader.subtreeLength(frame);
        for (var descendantIndex = frameIndex + 1; descendantIndex < descendantsEndIndexExcl; descendantIndex++) {
            var descendantFrame = batch.referenceFramesEntry(frames, descendantIndex);
            if (frameReader.frameType(descendantFrame) === RenderBatch_1.FrameType.attribute) {
                this.applyAttribute(batch, componentId, newDomElementRaw, descendantFrame);
            }
            else {
                // As soon as we see a non-attribute child, all the subsequent child frames are
                // not attributes, so bail out and insert the remnants recursively
                this.insertFrameRange(batch, componentId, newElement, 0, frames, descendantIndex, descendantsEndIndexExcl);
                break;
            }
        }
        // We handle setting 'value' on a <select> in two different ways:
        // [1] When inserting a corresponding <option>, in case you're dynamically adding options
        // [2] After we finish inserting the <select>, in case the descendant options are being
        //     added as an opaque markup block rather than individually
        // Right here we implement [2]
        if (newDomElementRaw instanceof HTMLSelectElement && selectValuePropname in newDomElementRaw) {
            var selectValue = newDomElementRaw[selectValuePropname];
            newDomElementRaw.value = selectValue;
            delete newDomElementRaw[selectValuePropname];
        }
    };
    BrowserRenderer.prototype.insertComponent = function (batch, parent, childIndex, frame) {
        var containerElement = LogicalElements_1.createAndInsertLogicalContainer(parent, childIndex);
        // All we have to do is associate the child component ID with its location. We don't actually
        // do any rendering here, because the diff for the child will appear later in the render batch.
        var childComponentId = batch.frameReader.componentId(frame);
        this.attachComponentToElement(childComponentId, containerElement);
    };
    BrowserRenderer.prototype.insertText = function (batch, parent, childIndex, textFrame) {
        var textContent = batch.frameReader.textContent(textFrame);
        var newTextNode = document.createTextNode(textContent);
        LogicalElements_1.insertLogicalChild(newTextNode, parent, childIndex);
    };
    BrowserRenderer.prototype.insertMarkup = function (batch, parent, childIndex, markupFrame) {
        var markupContainer = LogicalElements_1.createAndInsertLogicalContainer(parent, childIndex);
        var markupContent = batch.frameReader.markupContent(markupFrame);
        var parsedMarkup = parseMarkup(markupContent, LogicalElements_1.isSvgElement(parent));
        var logicalSiblingIndex = 0;
        while (parsedMarkup.firstChild) {
            LogicalElements_1.insertLogicalChild(parsedMarkup.firstChild, markupContainer, logicalSiblingIndex++);
        }
    };
    BrowserRenderer.prototype.applyAttribute = function (batch, componentId, toDomElement, attributeFrame) {
        var frameReader = batch.frameReader;
        var attributeName = frameReader.attributeName(attributeFrame);
        var eventHandlerId = frameReader.attributeEventHandlerId(attributeFrame);
        if (eventHandlerId) {
            var eventName = stripOnPrefix(attributeName);
            this.eventDelegator.setListener(toDomElement, eventName, eventHandlerId, componentId);
            return;
        }
        // First see if we have special handling for this attribute
        if (!this.tryApplySpecialProperty(batch, toDomElement, attributeName, attributeFrame)) {
            // If not, treat it as a regular string-valued attribute
            toDomElement.setAttribute(attributeName, frameReader.attributeValue(attributeFrame));
        }
    };
    BrowserRenderer.prototype.tryApplySpecialProperty = function (batch, element, attributeName, attributeFrame) {
        switch (attributeName) {
            case 'value':
                return this.tryApplyValueProperty(batch, element, attributeFrame);
            case 'checked':
                return this.tryApplyCheckedProperty(batch, element, attributeFrame);
            default: {
                if (attributeName.startsWith(internalAttributeNamePrefix)) {
                    this.applyInternalAttribute(batch, element, attributeName.substring(internalAttributeNamePrefix.length), attributeFrame);
                    return true;
                }
                return false;
            }
        }
    };
    BrowserRenderer.prototype.applyInternalAttribute = function (batch, element, internalAttributeName, attributeFrame) {
        var attributeValue = attributeFrame ? batch.frameReader.attributeValue(attributeFrame) : null;
        if (internalAttributeName.startsWith(eventStopPropagationAttributeNamePrefix)) {
            // Stop propagation
            var eventName = stripOnPrefix(internalAttributeName.substring(eventStopPropagationAttributeNamePrefix.length));
            this.eventDelegator.setStopPropagation(element, eventName, attributeValue !== null);
        }
        else if (internalAttributeName.startsWith(eventPreventDefaultAttributeNamePrefix)) {
            // Prevent default
            var eventName = stripOnPrefix(internalAttributeName.substring(eventPreventDefaultAttributeNamePrefix.length));
            this.eventDelegator.setPreventDefault(element, eventName, attributeValue !== null);
        }
        else {
            // The prefix makes this attribute name reserved, so any other usage is disallowed
            throw new Error("Unsupported internal attribute '" + internalAttributeName + "'");
        }
    };
    BrowserRenderer.prototype.tryApplyValueProperty = function (batch, element, attributeFrame) {
        // Certain elements have built-in behaviour for their 'value' property
        var frameReader = batch.frameReader;
        if (element.tagName === 'INPUT' && element.getAttribute('type') === 'time' && !element.getAttribute('step')) {
            var timeValue = attributeFrame ? frameReader.attributeValue(attributeFrame) : null;
            if (timeValue) {
                element['value'] = timeValue.substring(0, 5);
                return true;
            }
        }
        switch (element.tagName) {
            case 'INPUT':
            case 'SELECT':
            case 'TEXTAREA': {
                var value = attributeFrame ? frameReader.attributeValue(attributeFrame) : null;
                element.value = value;
                if (element.tagName === 'SELECT') {
                    // <select> is special, in that anything we write to .value will be lost if there
                    // isn't yet a matching <option>. To maintain the expected behavior no matter the
                    // element insertion/update order, preserve the desired value separately so
                    // we can recover it when inserting any matching <option> or after inserting an
                    // entire markup block of descendants.
                    element[selectValuePropname] = value;
                }
                return true;
            }
            case 'OPTION': {
                var value = attributeFrame ? frameReader.attributeValue(attributeFrame) : null;
                if (value) {
                    element.setAttribute('value', value);
                }
                else {
                    element.removeAttribute('value');
                }
                // See above for why we have this special handling for <select>/<option>
                // Note that this is only one of the two cases where we set the value on a <select>
                var selectElem = this.findClosestAncestorSelectElement(element);
                if (selectElem && (selectValuePropname in selectElem) && selectElem[selectValuePropname] === value) {
                    this.tryApplyValueProperty(batch, selectElem, attributeFrame);
                    delete selectElem[selectValuePropname];
                }
                return true;
            }
            default:
                return false;
        }
    };
    BrowserRenderer.prototype.tryApplyCheckedProperty = function (batch, element, attributeFrame) {
        // Certain elements have built-in behaviour for their 'checked' property
        if (element.tagName === 'INPUT') {
            var value = attributeFrame ? batch.frameReader.attributeValue(attributeFrame) : null;
            element.checked = value !== null;
            return true;
        }
        else {
            return false;
        }
    };
    BrowserRenderer.prototype.findClosestAncestorSelectElement = function (element) {
        while (element) {
            if (element instanceof HTMLSelectElement) {
                return element;
            }
            else {
                element = element.parentElement;
            }
        }
        return null;
    };
    BrowserRenderer.prototype.insertFrameRange = function (batch, componentId, parent, childIndex, frames, startIndex, endIndexExcl) {
        var origChildIndex = childIndex;
        for (var index = startIndex; index < endIndexExcl; index++) {
            var frame = batch.referenceFramesEntry(frames, index);
            var numChildrenInserted = this.insertFrame(batch, componentId, parent, childIndex, frames, frame, index);
            childIndex += numChildrenInserted;
            // Skip over any descendants, since they are already dealt with recursively
            index += countDescendantFrames(batch, frame);
        }
        return (childIndex - origChildIndex); // Total number of children inserted
    };
    return BrowserRenderer;
}());
exports.BrowserRenderer = BrowserRenderer;
function parseMarkup(markup, isSvg) {
    if (isSvg) {
        sharedSvgElemForParsing.innerHTML = markup || ' ';
        return sharedSvgElemForParsing;
    }
    else {
        sharedTemplateElemForParsing.innerHTML = markup || ' ';
        return sharedTemplateElemForParsing.content;
    }
}
function countDescendantFrames(batch, frame) {
    var frameReader = batch.frameReader;
    switch (frameReader.frameType(frame)) {
        // The following frame types have a subtree length. Other frames may use that memory slot
        // to mean something else, so we must not read it. We should consider having nominal subtypes
        // of RenderTreeFramePointer that prevent access to non-applicable fields.
        case RenderBatch_1.FrameType.component:
        case RenderBatch_1.FrameType.element:
        case RenderBatch_1.FrameType.region:
            return frameReader.subtreeLength(frame) - 1;
        default:
            return 0;
    }
}
function raiseEvent(event, browserRendererId, eventHandlerId, eventArgs, eventFieldInfo) {
    if (preventDefaultEvents[event.type]) {
        event.preventDefault();
    }
    var eventDescriptor = {
        browserRendererId: browserRendererId,
        eventHandlerId: eventHandlerId,
        eventArgsType: eventArgs.type,
        eventFieldInfo: eventFieldInfo,
    };
    RendererEventDispatcher_1.dispatchEvent(eventDescriptor, eventArgs.data);
}
function clearElement(element) {
    var childNode;
    while (childNode = element.firstChild) {
        element.removeChild(childNode);
    }
}
function clearBetween(start, end) {
    var logicalParent = LogicalElements_1.getLogicalParent(start);
    if (!logicalParent) {
        throw new Error("Can't clear between nodes. The start node does not have a logical parent.");
    }
    var children = LogicalElements_1.getLogicalChildrenArray(logicalParent);
    var removeStart = children.indexOf(start) + 1;
    var endIndex = children.indexOf(end);
    // We remove the end component comment from the DOM as we don't need it after this point.
    for (var i = removeStart; i <= endIndex; i++) {
        LogicalElements_1.removeLogicalChild(logicalParent, removeStart);
    }
    // We sanitize the start comment by removing all the information from it now that we don't need it anymore
    // as it adds noise to the DOM.
    start.textContent = '!';
}
function stripOnPrefix(attributeName) {
    if (attributeName.startsWith('on')) {
        return attributeName.substring(2);
    }
    throw new Error("Attribute should be an event name, but doesn't start with 'on'. Value: '" + attributeName + "'");
}


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/Rendering/ElementReferenceCapture.ts":
/*!*****************************************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/Rendering/ElementReferenceCapture.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function applyCaptureIdToElement(element, referenceCaptureId) {
    element.setAttribute(getCaptureIdAttributeName(referenceCaptureId), '');
}
exports.applyCaptureIdToElement = applyCaptureIdToElement;
function getElementByCaptureId(referenceCaptureId) {
    var selector = "[" + getCaptureIdAttributeName(referenceCaptureId) + "]";
    return document.querySelector(selector);
}
function getCaptureIdAttributeName(referenceCaptureId) {
    return "_bl_" + referenceCaptureId;
}
// Support receiving ElementRef instances as args in interop calls
var elementRefKey = '__internalId'; // Keep in sync with ElementRef.cs
DotNet.attachReviver(function (key, value) {
    if (value && typeof value === 'object' && value.hasOwnProperty(elementRefKey) && typeof value[elementRefKey] === 'string') {
        return getElementByCaptureId(value[elementRefKey]);
    }
    else {
        return value;
    }
});


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/Rendering/EventDelegator.ts":
/*!********************************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/Rendering/EventDelegator.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventForDotNet_1 = __webpack_require__(/*! ./EventForDotNet */ "./upstream/aspnetcore/web.js/src/Rendering/EventForDotNet.ts");
var EventFieldInfo_1 = __webpack_require__(/*! ./EventFieldInfo */ "./upstream/aspnetcore/web.js/src/Rendering/EventFieldInfo.ts");
var nonBubblingEvents = toLookup([
    'abort',
    'blur',
    'change',
    'error',
    'focus',
    'load',
    'loadend',
    'loadstart',
    'mouseenter',
    'mouseleave',
    'progress',
    'reset',
    'scroll',
    'submit',
    'unload',
    'DOMNodeInsertedIntoDocument',
    'DOMNodeRemovedFromDocument',
]);
var disableableEventNames = toLookup(['click', 'dblclick', 'mousedown', 'mousemove', 'mouseup']);
// Responsible for adding/removing the eventInfo on an expando property on DOM elements, and
// calling an EventInfoStore that deals with registering/unregistering the underlying delegated
// event listeners as required (and also maps actual events back to the given callback).
var EventDelegator = /** @class */ (function () {
    function EventDelegator(onEvent) {
        this.onEvent = onEvent;
        this.afterClickCallbacks = [];
        var eventDelegatorId = ++EventDelegator.nextEventDelegatorId;
        this.eventsCollectionKey = "_blazorEvents_" + eventDelegatorId;
        this.eventInfoStore = new EventInfoStore(this.onGlobalEvent.bind(this));
    }
    EventDelegator.prototype.setListener = function (element, eventName, eventHandlerId, renderingComponentId) {
        var infoForElement = this.getEventHandlerInfosForElement(element, true);
        var existingHandler = infoForElement.getHandler(eventName);
        if (existingHandler) {
            // We can cheaply update the info on the existing object and don't need any other housekeeping
            // Note that this also takes care of updating the eventHandlerId on the existing handler object
            this.eventInfoStore.update(existingHandler.eventHandlerId, eventHandlerId);
        }
        else {
            // Go through the whole flow which might involve registering a new global handler
            var newInfo = { element: element, eventName: eventName, eventHandlerId: eventHandlerId, renderingComponentId: renderingComponentId };
            this.eventInfoStore.add(newInfo);
            infoForElement.setHandler(eventName, newInfo);
        }
    };
    EventDelegator.prototype.removeListener = function (eventHandlerId) {
        // This method gets called whenever the .NET-side code reports that a certain event handler
        // has been disposed. However we will already have disposed the info about that handler if
        // the eventHandlerId for the (element,eventName) pair was replaced during diff application.
        var info = this.eventInfoStore.remove(eventHandlerId);
        if (info) {
            // Looks like this event handler wasn't already disposed
            // Remove the associated data from the DOM element
            var element = info.element;
            var elementEventInfos = this.getEventHandlerInfosForElement(element, false);
            if (elementEventInfos) {
                elementEventInfos.removeHandler(info.eventName);
            }
        }
    };
    EventDelegator.prototype.notifyAfterClick = function (callback) {
        // This is extremely special-case. It's needed so that navigation link click interception
        // can be sure to run *after* our synthetic bubbling process. If a need arises, we can
        // generalise this, but right now it's a purely internal detail.
        this.afterClickCallbacks.push(callback);
        this.eventInfoStore.addGlobalListener('click'); // Ensure we always listen for this
    };
    EventDelegator.prototype.setStopPropagation = function (element, eventName, value) {
        var infoForElement = this.getEventHandlerInfosForElement(element, true);
        infoForElement.stopPropagation(eventName, value);
    };
    EventDelegator.prototype.setPreventDefault = function (element, eventName, value) {
        var infoForElement = this.getEventHandlerInfosForElement(element, true);
        infoForElement.preventDefault(eventName, value);
    };
    EventDelegator.prototype.onGlobalEvent = function (evt) {
        if (!(evt.target instanceof Element)) {
            return;
        }
        // Scan up the element hierarchy, looking for any matching registered event handlers
        var candidateElement = evt.target;
        var eventArgs = null; // Populate lazily
        var eventIsNonBubbling = nonBubblingEvents.hasOwnProperty(evt.type);
        var stopPropagationWasRequested = false;
        while (candidateElement) {
            var handlerInfos = this.getEventHandlerInfosForElement(candidateElement, false);
            if (handlerInfos) {
                var handlerInfo = handlerInfos.getHandler(evt.type);
                if (handlerInfo && !eventIsDisabledOnElement(candidateElement, evt.type)) {
                    // We are going to raise an event for this element, so prepare info needed by the .NET code
                    if (!eventArgs) {
                        eventArgs = EventForDotNet_1.EventForDotNet.fromDOMEvent(evt);
                    }
                    var eventFieldInfo = EventFieldInfo_1.EventFieldInfo.fromEvent(handlerInfo.renderingComponentId, evt);
                    this.onEvent(evt, handlerInfo.eventHandlerId, eventArgs, eventFieldInfo);
                }
                if (handlerInfos.stopPropagation(evt.type)) {
                    stopPropagationWasRequested = true;
                }
                if (handlerInfos.preventDefault(evt.type)) {
                    evt.preventDefault();
                }
            }
            candidateElement = (eventIsNonBubbling || stopPropagationWasRequested) ? null : candidateElement.parentElement;
        }
        // Special case for navigation interception
        if (evt.type === 'click') {
            this.afterClickCallbacks.forEach(function (callback) { return callback(evt); });
        }
    };
    EventDelegator.prototype.getEventHandlerInfosForElement = function (element, createIfNeeded) {
        if (element.hasOwnProperty(this.eventsCollectionKey)) {
            return element[this.eventsCollectionKey];
        }
        else if (createIfNeeded) {
            return (element[this.eventsCollectionKey] = new EventHandlerInfosForElement());
        }
        else {
            return null;
        }
    };
    EventDelegator.nextEventDelegatorId = 0;
    return EventDelegator;
}());
exports.EventDelegator = EventDelegator;
// Responsible for adding and removing the global listener when the number of listeners
// for a given event name changes between zero and nonzero
var EventInfoStore = /** @class */ (function () {
    function EventInfoStore(globalListener) {
        this.globalListener = globalListener;
        this.infosByEventHandlerId = {};
        this.countByEventName = {};
    }
    EventInfoStore.prototype.add = function (info) {
        if (this.infosByEventHandlerId[info.eventHandlerId]) {
            // Should never happen, but we want to know if it does
            throw new Error("Event " + info.eventHandlerId + " is already tracked");
        }
        this.infosByEventHandlerId[info.eventHandlerId] = info;
        this.addGlobalListener(info.eventName);
    };
    EventInfoStore.prototype.addGlobalListener = function (eventName) {
        if (this.countByEventName.hasOwnProperty(eventName)) {
            this.countByEventName[eventName]++;
        }
        else {
            this.countByEventName[eventName] = 1;
            // To make delegation work with non-bubbling events, register a 'capture' listener.
            // We preserve the non-bubbling behavior by only dispatching such events to the targeted element.
            var useCapture = nonBubblingEvents.hasOwnProperty(eventName);
            document.addEventListener(eventName, this.globalListener, useCapture);
        }
    };
    EventInfoStore.prototype.update = function (oldEventHandlerId, newEventHandlerId) {
        if (this.infosByEventHandlerId.hasOwnProperty(newEventHandlerId)) {
            // Should never happen, but we want to know if it does
            throw new Error("Event " + newEventHandlerId + " is already tracked");
        }
        // Since we're just updating the event handler ID, there's no need to update the global counts
        var info = this.infosByEventHandlerId[oldEventHandlerId];
        delete this.infosByEventHandlerId[oldEventHandlerId];
        info.eventHandlerId = newEventHandlerId;
        this.infosByEventHandlerId[newEventHandlerId] = info;
    };
    EventInfoStore.prototype.remove = function (eventHandlerId) {
        var info = this.infosByEventHandlerId[eventHandlerId];
        if (info) {
            delete this.infosByEventHandlerId[eventHandlerId];
            var eventName = info.eventName;
            if (--this.countByEventName[eventName] === 0) {
                delete this.countByEventName[eventName];
                document.removeEventListener(eventName, this.globalListener);
            }
        }
        return info;
    };
    return EventInfoStore;
}());
var EventHandlerInfosForElement = /** @class */ (function () {
    function EventHandlerInfosForElement() {
        // Although we *could* track multiple event handlers per (element, eventName) pair
        // (since they have distinct eventHandlerId values), there's no point doing so because
        // our programming model is that you declare event handlers as attributes. An element
        // can only have one attribute with a given name, hence only one event handler with
        // that name at any one time.
        // So to keep things simple, only track one EventHandlerInfo per (element, eventName)
        this.handlers = {};
        this.preventDefaultFlags = null;
        this.stopPropagationFlags = null;
    }
    EventHandlerInfosForElement.prototype.getHandler = function (eventName) {
        return this.handlers.hasOwnProperty(eventName) ? this.handlers[eventName] : null;
    };
    EventHandlerInfosForElement.prototype.setHandler = function (eventName, handler) {
        this.handlers[eventName] = handler;
    };
    EventHandlerInfosForElement.prototype.removeHandler = function (eventName) {
        delete this.handlers[eventName];
    };
    EventHandlerInfosForElement.prototype.preventDefault = function (eventName, setValue) {
        if (setValue !== undefined) {
            this.preventDefaultFlags = this.preventDefaultFlags || {};
            this.preventDefaultFlags[eventName] = setValue;
        }
        return this.preventDefaultFlags ? this.preventDefaultFlags[eventName] : false;
    };
    EventHandlerInfosForElement.prototype.stopPropagation = function (eventName, setValue) {
        if (setValue !== undefined) {
            this.stopPropagationFlags = this.stopPropagationFlags || {};
            this.stopPropagationFlags[eventName] = setValue;
        }
        return this.stopPropagationFlags ? this.stopPropagationFlags[eventName] : false;
    };
    return EventHandlerInfosForElement;
}());
function toLookup(items) {
    var result = {};
    items.forEach(function (value) {
        result[value] = true;
    });
    return result;
}
function eventIsDisabledOnElement(element, eventName) {
    // We want to replicate the normal DOM event behavior that, for 'interactive' elements
    // with a 'disabled' attribute, certain mouse events are suppressed
    return (element instanceof HTMLButtonElement || element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement)
        && disableableEventNames.hasOwnProperty(eventName)
        && element.disabled;
}


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/Rendering/EventFieldInfo.ts":
/*!********************************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/Rendering/EventFieldInfo.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventFieldInfo = /** @class */ (function () {
    function EventFieldInfo(componentId, fieldValue) {
        this.componentId = componentId;
        this.fieldValue = fieldValue;
    }
    EventFieldInfo.fromEvent = function (componentId, event) {
        var elem = event.target;
        if (elem instanceof Element) {
            var fieldData = getFormFieldData(elem);
            if (fieldData) {
                return new EventFieldInfo(componentId, fieldData.value);
            }
        }
        // This event isn't happening on a form field that we can reverse-map back to some incoming attribute
        return null;
    };
    return EventFieldInfo;
}());
exports.EventFieldInfo = EventFieldInfo;
function getFormFieldData(elem) {
    // The logic in here should be the inverse of the logic in BrowserRenderer's tryApplySpecialProperty.
    // That is, we're doing the reverse mapping, starting from an HTML property and reconstructing which
    // "special" attribute would have been mapped to that property.
    if (elem instanceof HTMLInputElement) {
        return (elem.type && elem.type.toLowerCase() === 'checkbox')
            ? { value: elem.checked }
            : { value: elem.value };
    }
    if (elem instanceof HTMLSelectElement || elem instanceof HTMLTextAreaElement) {
        return { value: elem.value };
    }
    return null;
}


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/Rendering/EventForDotNet.ts":
/*!********************************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/Rendering/EventForDotNet.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
var EventForDotNet = /** @class */ (function () {
    function EventForDotNet(type, data) {
        this.type = type;
        this.data = data;
    }
    EventForDotNet.fromDOMEvent = function (event) {
        var element = event.target;
        switch (event.type) {
            case 'input':
            case 'change': {
                if (isTimeBasedInput(element)) {
                    var normalizedValue = normalizeTimeBasedValue(element);
                    return new EventForDotNet('change', { type: event.type, value: normalizedValue });
                }
                var targetIsCheckbox = isCheckbox(element);
                var newValue = targetIsCheckbox ? !!element['checked'] : element['value'];
                return new EventForDotNet('change', { type: event.type, value: newValue });
            }
            case 'copy':
            case 'cut':
            case 'paste':
                return new EventForDotNet('clipboard', { type: event.type });
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
                return new EventForDotNet('drag', parseDragEvent(event));
            case 'focus':
            case 'blur':
            case 'focusin':
            case 'focusout':
                return new EventForDotNet('focus', { type: event.type });
            case 'keydown':
            case 'keyup':
            case 'keypress':
                return new EventForDotNet('keyboard', parseKeyboardEvent(event));
            case 'contextmenu':
            case 'click':
            case 'mouseover':
            case 'mouseout':
            case 'mousemove':
            case 'mousedown':
            case 'mouseup':
            case 'dblclick':
                return new EventForDotNet('mouse', parseMouseEvent(event));
            case 'error':
                return new EventForDotNet('error', parseErrorEvent(event));
            case 'loadstart':
            case 'timeout':
            case 'abort':
            case 'load':
            case 'loadend':
            case 'progress':
                return new EventForDotNet('progress', parseProgressEvent(event));
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchenter':
            case 'touchleave':
            case 'touchstart':
                return new EventForDotNet('touch', parseTouchEvent(event));
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerenter':
            case 'pointerleave':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
                return new EventForDotNet('pointer', parsePointerEvent(event));
            case 'wheel':
            case 'mousewheel':
                return new EventForDotNet('wheel', parseWheelEvent(event));
            default:
                return new EventForDotNet('unknown', { type: event.type });
        }
    };
    return EventForDotNet;
}());
exports.EventForDotNet = EventForDotNet;
function parseDragEvent(event) {
    return __assign(__assign({}, parseMouseEvent(event)), { dataTransfer: event.dataTransfer });
}
function parseWheelEvent(event) {
    return __assign(__assign({}, parseMouseEvent(event)), { deltaX: event.deltaX, deltaY: event.deltaY, deltaZ: event.deltaZ, deltaMode: event.deltaMode });
}
function parseErrorEvent(event) {
    return {
        type: event.type,
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
    };
}
function parseProgressEvent(event) {
    return {
        type: event.type,
        lengthComputable: event.lengthComputable,
        loaded: event.loaded,
        total: event.total,
    };
}
function parseTouchEvent(event) {
    function parseTouch(touchList) {
        var touches = [];
        for (var i = 0; i < touchList.length; i++) {
            var touch = touchList[i];
            touches.push({
                identifier: touch.identifier,
                clientX: touch.clientX,
                clientY: touch.clientY,
                screenX: touch.screenX,
                screenY: touch.screenY,
                pageX: touch.pageX,
                pageY: touch.pageY,
            });
        }
        return touches;
    }
    return {
        type: event.type,
        detail: event.detail,
        touches: parseTouch(event.touches),
        targetTouches: parseTouch(event.targetTouches),
        changedTouches: parseTouch(event.changedTouches),
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey,
    };
}
function parseKeyboardEvent(event) {
    return {
        type: event.type,
        key: event.key,
        code: event.code,
        location: event.location,
        repeat: event.repeat,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey,
    };
}
function parsePointerEvent(event) {
    return __assign(__assign({}, parseMouseEvent(event)), { pointerId: event.pointerId, width: event.width, height: event.height, pressure: event.pressure, tiltX: event.tiltX, tiltY: event.tiltY, pointerType: event.pointerType, isPrimary: event.isPrimary });
}
function parseMouseEvent(event) {
    return {
        type: event.type,
        detail: event.detail,
        screenX: event.screenX,
        screenY: event.screenY,
        clientX: event.clientX,
        clientY: event.clientY,
        button: event.button,
        buttons: event.buttons,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey,
    };
}
function isCheckbox(element) {
    return !!element && element.tagName === 'INPUT' && element.getAttribute('type') === 'checkbox';
}
var timeBasedInputs = [
    'date',
    'datetime-local',
    'month',
    'time',
    'week',
];
function isTimeBasedInput(element) {
    return timeBasedInputs.indexOf(element.getAttribute('type')) !== -1;
}
function normalizeTimeBasedValue(element) {
    var value = element.value;
    var type = element.type;
    switch (type) {
        case 'date':
        case 'datetime-local':
        case 'month':
            return value;
        case 'time':
            return value.length === 5 ? value + ':00' : value; // Convert hh:mm to hh:mm:00
        case 'week':
            // For now we are not going to normalize input type week as it is not trivial
            return value;
    }
    throw new Error("Invalid element type '" + type + "'.");
}


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/Rendering/LogicalElements.ts":
/*!*********************************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/Rendering/LogicalElements.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  A LogicalElement plays the same role as an Element instance from the point of view of the
  API consumer. Inserting and removing logical elements updates the browser DOM just the same.

  The difference is that, unlike regular DOM mutation APIs, the LogicalElement APIs don't use
  the underlying DOM structure as the data storage for the element hierarchy. Instead, the
  LogicalElement APIs take care of tracking hierarchical relationships separately. The point
  of this is to permit a logical tree structure in which parent/child relationships don't
  have to be materialized in terms of DOM element parent/child relationships. And the reason
  why we want that is so that hierarchies of Blazor components can be tracked even when those
  components' render output need not be a single literal DOM element.

  Consumers of the API don't need to know about the implementation, but how it's done is:
  - Each LogicalElement is materialized in the DOM as either:
    - A Node instance, for actual Node instances inserted using 'insertLogicalChild' or
      for Element instances promoted to LogicalElement via 'toLogicalElement'
    - A Comment instance, for 'logical container' instances inserted using 'createAndInsertLogicalContainer'
  - Then, on that instance (i.e., the Node or Comment), we store an array of 'logical children'
    instances, e.g.,
      [firstChild, secondChild, thirdChild, ...]
    ... plus we store a reference to the 'logical parent' (if any)
  - The 'logical children' array means we can look up in O(1):
    - The number of logical children (not currently implemented because not required, but trivial)
    - The logical child at any given index
  - Whenever a logical child is added or removed, we update the parent's array of logical children
*/
Object.defineProperty(exports, "__esModule", { value: true });
var logicalChildrenPropname = createSymbolOrFallback('_blazorLogicalChildren');
var logicalParentPropname = createSymbolOrFallback('_blazorLogicalParent');
var logicalEndSiblingPropname = createSymbolOrFallback('_blazorLogicalEnd');
function toLogicalRootCommentElement(start, end) {
    // Now that we support start/end comments as component delimiters we are going to be setting up
    // adding the components rendered output as siblings of the start/end tags (between).
    // For that to work, we need to appropriately configure the parent element to be a logical element
    // with all their children being the child elements.
    // For example, imagine you have
    // <app>
    // <div><p>Static content</p></div>
    // <!-- start component
    // <!-- end component
    // <footer>Some other content</footer>
    // <app>
    // We want the parent element to be something like
    // *app
    // |- *div
    // |- *component
    // |- *footer
    if (!start.parentNode) {
        throw new Error("Comment not connected to the DOM " + start.textContent);
    }
    var parent = start.parentNode;
    var parentLogicalElement = toLogicalElement(parent, /* allow existing contents */ true);
    var children = getLogicalChildrenArray(parentLogicalElement);
    Array.from(parent.childNodes).forEach(function (n) { return children.push(n); });
    start[logicalParentPropname] = parentLogicalElement;
    // We might not have an end comment in the case of non-prerendered components.
    if (end) {
        start[logicalEndSiblingPropname] = end;
        toLogicalElement(end, /* allowExistingcontents */ true);
    }
    return toLogicalElement(start, /* allowExistingContents */ true);
}
exports.toLogicalRootCommentElement = toLogicalRootCommentElement;
function toLogicalElement(element, allowExistingContents) {
    // Normally it's good to assert that the element has started empty, because that's the usual
    // situation and we probably have a bug if it's not. But for the element that contain prerendered
    // root components, we want to let them keep their content until we replace it.
    if (element.childNodes.length > 0 && !allowExistingContents) {
        throw new Error('New logical elements must start empty, or allowExistingContents must be true');
    }
    element[logicalChildrenPropname] = [];
    return element;
}
exports.toLogicalElement = toLogicalElement;
function createAndInsertLogicalContainer(parent, childIndex) {
    var containerElement = document.createComment('!');
    insertLogicalChild(containerElement, parent, childIndex);
    return containerElement;
}
exports.createAndInsertLogicalContainer = createAndInsertLogicalContainer;
function insertLogicalChild(child, parent, childIndex) {
    var childAsLogicalElement = child;
    if (child instanceof Comment) {
        var existingGrandchildren = getLogicalChildrenArray(childAsLogicalElement);
        if (existingGrandchildren && getLogicalChildrenArray(childAsLogicalElement).length > 0) {
            // There's nothing to stop us implementing support for this scenario, and it's not difficult
            // (after inserting 'child' itself, also iterate through its logical children and physically
            // put them as following-siblings in the DOM). However there's no scenario that requires it
            // presently, so if we did implement it there'd be no good way to have tests for it.
            throw new Error('Not implemented: inserting non-empty logical container');
        }
    }
    if (getLogicalParent(childAsLogicalElement)) {
        // Likewise, we could easily support this scenario too (in this 'if' block, just splice
        // out 'child' from the logical children array of its previous logical parent by using
        // Array.prototype.indexOf to determine its previous sibling index).
        // But again, since there's not currently any scenario that would use it, we would not
        // have any test coverage for such an implementation.
        throw new Error('Not implemented: moving existing logical children');
    }
    var newSiblings = getLogicalChildrenArray(parent);
    if (childIndex < newSiblings.length) {
        // Insert
        var nextSibling = newSiblings[childIndex];
        nextSibling.parentNode.insertBefore(child, nextSibling);
        newSiblings.splice(childIndex, 0, childAsLogicalElement);
    }
    else {
        // Append
        appendDomNode(child, parent);
        newSiblings.push(childAsLogicalElement);
    }
    childAsLogicalElement[logicalParentPropname] = parent;
    if (!(logicalChildrenPropname in childAsLogicalElement)) {
        childAsLogicalElement[logicalChildrenPropname] = [];
    }
}
exports.insertLogicalChild = insertLogicalChild;
function removeLogicalChild(parent, childIndex) {
    var childrenArray = getLogicalChildrenArray(parent);
    var childToRemove = childrenArray.splice(childIndex, 1)[0];
    // If it's a logical container, also remove its descendants
    if (childToRemove instanceof Comment) {
        var grandchildrenArray = getLogicalChildrenArray(childToRemove);
        while (grandchildrenArray.length > 0) {
            removeLogicalChild(childToRemove, 0);
        }
    }
    // Finally, remove the node itself
    var domNodeToRemove = childToRemove;
    domNodeToRemove.parentNode.removeChild(domNodeToRemove);
}
exports.removeLogicalChild = removeLogicalChild;
function getLogicalParent(element) {
    return element[logicalParentPropname] || null;
}
exports.getLogicalParent = getLogicalParent;
function getLogicalSiblingEnd(element) {
    return element[logicalEndSiblingPropname] || null;
}
exports.getLogicalSiblingEnd = getLogicalSiblingEnd;
function getLogicalChild(parent, childIndex) {
    return getLogicalChildrenArray(parent)[childIndex];
}
exports.getLogicalChild = getLogicalChild;
function isSvgElement(element) {
    return getClosestDomElement(element).namespaceURI === 'http://www.w3.org/2000/svg';
}
exports.isSvgElement = isSvgElement;
function getLogicalChildrenArray(element) {
    return element[logicalChildrenPropname];
}
exports.getLogicalChildrenArray = getLogicalChildrenArray;
function permuteLogicalChildren(parent, permutationList) {
    // The permutationList must represent a valid permutation, i.e., the list of 'from' indices
    // is distinct, and the list of 'to' indices is a permutation of it. The algorithm here
    // relies on that assumption.
    // Each of the phases here has to happen separately, because each one is designed not to
    // interfere with the indices or DOM entries used by subsequent phases.
    // Phase 1: track which nodes we will move
    var siblings = getLogicalChildrenArray(parent);
    permutationList.forEach(function (listEntry) {
        listEntry.moveRangeStart = siblings[listEntry.fromSiblingIndex];
        listEntry.moveRangeEnd = findLastDomNodeInRange(listEntry.moveRangeStart);
    });
    // Phase 2: insert markers
    permutationList.forEach(function (listEntry) {
        var marker = listEntry.moveToBeforeMarker = document.createComment('marker');
        var insertBeforeNode = siblings[listEntry.toSiblingIndex + 1];
        if (insertBeforeNode) {
            insertBeforeNode.parentNode.insertBefore(marker, insertBeforeNode);
        }
        else {
            appendDomNode(marker, parent);
        }
    });
    // Phase 3: move descendants & remove markers
    permutationList.forEach(function (listEntry) {
        var insertBefore = listEntry.moveToBeforeMarker;
        var parentDomNode = insertBefore.parentNode;
        var elementToMove = listEntry.moveRangeStart;
        var moveEndNode = listEntry.moveRangeEnd;
        var nextToMove = elementToMove;
        while (nextToMove) {
            var nextNext = nextToMove.nextSibling;
            parentDomNode.insertBefore(nextToMove, insertBefore);
            if (nextToMove === moveEndNode) {
                break;
            }
            else {
                nextToMove = nextNext;
            }
        }
        parentDomNode.removeChild(insertBefore);
    });
    // Phase 4: update siblings index
    permutationList.forEach(function (listEntry) {
        siblings[listEntry.toSiblingIndex] = listEntry.moveRangeStart;
    });
}
exports.permuteLogicalChildren = permuteLogicalChildren;
function getClosestDomElement(logicalElement) {
    if (logicalElement instanceof Element) {
        return logicalElement;
    }
    else if (logicalElement instanceof Comment) {
        return logicalElement.parentNode;
    }
    else {
        throw new Error('Not a valid logical element');
    }
}
exports.getClosestDomElement = getClosestDomElement;
function getLogicalNextSibling(element) {
    var siblings = getLogicalChildrenArray(getLogicalParent(element));
    var siblingIndex = Array.prototype.indexOf.call(siblings, element);
    return siblings[siblingIndex + 1] || null;
}
function appendDomNode(child, parent) {
    // This function only puts 'child' into the DOM in the right place relative to 'parent'
    // It does not update the logical children array of anything
    if (parent instanceof Element) {
        parent.appendChild(child);
    }
    else if (parent instanceof Comment) {
        var parentLogicalNextSibling = getLogicalNextSibling(parent);
        if (parentLogicalNextSibling) {
            // Since the parent has a logical next-sibling, its appended child goes right before that
            parentLogicalNextSibling.parentNode.insertBefore(child, parentLogicalNextSibling);
        }
        else {
            // Since the parent has no logical next-sibling, keep recursing upwards until we find
            // a logical ancestor that does have a next-sibling or is a physical element.
            appendDomNode(child, getLogicalParent(parent));
        }
    }
    else {
        // Should never happen
        throw new Error("Cannot append node because the parent is not a valid logical element. Parent: " + parent);
    }
}
// Returns the final node (in depth-first evaluation order) that is a descendant of the logical element.
// As such, the entire subtree is between 'element' and 'findLastDomNodeInRange(element)' inclusive.
function findLastDomNodeInRange(element) {
    if (element instanceof Element) {
        return element;
    }
    var nextSibling = getLogicalNextSibling(element);
    if (nextSibling) {
        // Simple case: not the last logical sibling, so take the node before the next sibling
        return nextSibling.previousSibling;
    }
    else {
        // Harder case: there's no logical next-sibling, so recurse upwards until we find
        // a logical ancestor that does have one, or a physical element
        var logicalParent = getLogicalParent(element);
        return logicalParent instanceof Element
            ? logicalParent.lastChild
            : findLastDomNodeInRange(logicalParent);
    }
}
function createSymbolOrFallback(fallback) {
    return typeof Symbol === 'function' ? Symbol() : fallback;
}


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/Rendering/RenderBatch/OutOfProcessRenderBatch.ts":
/*!*****************************************************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/Rendering/RenderBatch/OutOfProcessRenderBatch.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utf8Decoder_1 = __webpack_require__(/*! ./Utf8Decoder */ "./upstream/aspnetcore/web.js/src/Rendering/RenderBatch/Utf8Decoder.ts");
var updatedComponentsEntryLength = 4; // Each is a single int32 giving the location of the data
var referenceFramesEntryLength = 20; // 1 int for frame type, then 16 bytes for type-specific data
var disposedComponentIdsEntryLength = 4; // Each is an int32 giving the ID
var disposedEventHandlerIdsEntryLength = 8; // Each is an int64 giving the ID
var editsEntryLength = 16; // 4 ints
var stringTableEntryLength = 4; // Each is an int32 giving the string data location, or -1 for null
var uint64HighPartShift = Math.pow(2, 32);
var maxSafeNumberHighPart = Math.pow(2, 21) - 1; // The high-order int32 from Number.MAX_SAFE_INTEGER
var OutOfProcessRenderBatch = /** @class */ (function () {
    function OutOfProcessRenderBatch(batchData) {
        this.batchData = batchData;
        var stringReader = new OutOfProcessStringReader(batchData);
        this.arrayRangeReader = new OutOfProcessArrayRangeReader(batchData);
        this.arrayBuilderSegmentReader = new OutOfProcessArrayBuilderSegmentReader(batchData);
        this.diffReader = new OutOfProcessRenderTreeDiffReader(batchData);
        this.editReader = new OutOfProcessRenderTreeEditReader(batchData, stringReader);
        this.frameReader = new OutOfProcessRenderTreeFrameReader(batchData, stringReader);
    }
    OutOfProcessRenderBatch.prototype.updatedComponents = function () {
        return readInt32LE(this.batchData, this.batchData.length - 20); // 5th-from-last int32
    };
    OutOfProcessRenderBatch.prototype.referenceFrames = function () {
        return readInt32LE(this.batchData, this.batchData.length - 16); // 4th-from-last int32
    };
    OutOfProcessRenderBatch.prototype.disposedComponentIds = function () {
        return readInt32LE(this.batchData, this.batchData.length - 12); // 3rd-from-last int32
    };
    OutOfProcessRenderBatch.prototype.disposedEventHandlerIds = function () {
        return readInt32LE(this.batchData, this.batchData.length - 8); // 2th-from-last int32
    };
    OutOfProcessRenderBatch.prototype.updatedComponentsEntry = function (values, index) {
        var tableEntryPos = values + index * updatedComponentsEntryLength;
        return readInt32LE(this.batchData, tableEntryPos);
    };
    OutOfProcessRenderBatch.prototype.referenceFramesEntry = function (values, index) {
        return values + index * referenceFramesEntryLength;
    };
    OutOfProcessRenderBatch.prototype.disposedComponentIdsEntry = function (values, index) {
        var entryPos = values + index * disposedComponentIdsEntryLength;
        return readInt32LE(this.batchData, entryPos);
    };
    OutOfProcessRenderBatch.prototype.disposedEventHandlerIdsEntry = function (values, index) {
        var entryPos = values + index * disposedEventHandlerIdsEntryLength;
        return readUint64LE(this.batchData, entryPos);
    };
    return OutOfProcessRenderBatch;
}());
exports.OutOfProcessRenderBatch = OutOfProcessRenderBatch;
var OutOfProcessRenderTreeDiffReader = /** @class */ (function () {
    function OutOfProcessRenderTreeDiffReader(batchDataUint8) {
        this.batchDataUint8 = batchDataUint8;
    }
    OutOfProcessRenderTreeDiffReader.prototype.componentId = function (diff) {
        // First int32 is componentId
        return readInt32LE(this.batchDataUint8, diff);
    };
    OutOfProcessRenderTreeDiffReader.prototype.edits = function (diff) {
        // Entries data starts after the componentId (which is a 4-byte int)
        return (diff + 4);
    };
    OutOfProcessRenderTreeDiffReader.prototype.editsEntry = function (values, index) {
        return values + index * editsEntryLength;
    };
    return OutOfProcessRenderTreeDiffReader;
}());
var OutOfProcessRenderTreeEditReader = /** @class */ (function () {
    function OutOfProcessRenderTreeEditReader(batchDataUint8, stringReader) {
        this.batchDataUint8 = batchDataUint8;
        this.stringReader = stringReader;
    }
    OutOfProcessRenderTreeEditReader.prototype.editType = function (edit) {
        return readInt32LE(this.batchDataUint8, edit); // 1st int
    };
    OutOfProcessRenderTreeEditReader.prototype.siblingIndex = function (edit) {
        return readInt32LE(this.batchDataUint8, edit + 4); // 2nd int
    };
    OutOfProcessRenderTreeEditReader.prototype.newTreeIndex = function (edit) {
        return readInt32LE(this.batchDataUint8, edit + 8); // 3rd int
    };
    OutOfProcessRenderTreeEditReader.prototype.moveToSiblingIndex = function (edit) {
        return readInt32LE(this.batchDataUint8, edit + 8); // 3rd int
    };
    OutOfProcessRenderTreeEditReader.prototype.removedAttributeName = function (edit) {
        var stringIndex = readInt32LE(this.batchDataUint8, edit + 12); // 4th int
        return this.stringReader.readString(stringIndex);
    };
    return OutOfProcessRenderTreeEditReader;
}());
var OutOfProcessRenderTreeFrameReader = /** @class */ (function () {
    function OutOfProcessRenderTreeFrameReader(batchDataUint8, stringReader) {
        this.batchDataUint8 = batchDataUint8;
        this.stringReader = stringReader;
    }
    // For render frames, the 2nd-4th ints have different meanings depending on frameType.
    // It's the caller's responsibility not to evaluate properties that aren't applicable to the frameType.
    OutOfProcessRenderTreeFrameReader.prototype.frameType = function (frame) {
        return readInt32LE(this.batchDataUint8, frame); // 1st int
    };
    OutOfProcessRenderTreeFrameReader.prototype.subtreeLength = function (frame) {
        return readInt32LE(this.batchDataUint8, frame + 4); // 2nd int
    };
    OutOfProcessRenderTreeFrameReader.prototype.elementReferenceCaptureId = function (frame) {
        var stringIndex = readInt32LE(this.batchDataUint8, frame + 4); // 2nd int
        return this.stringReader.readString(stringIndex);
    };
    OutOfProcessRenderTreeFrameReader.prototype.componentId = function (frame) {
        return readInt32LE(this.batchDataUint8, frame + 8); // 3rd int
    };
    OutOfProcessRenderTreeFrameReader.prototype.elementName = function (frame) {
        var stringIndex = readInt32LE(this.batchDataUint8, frame + 8); // 3rd int
        return this.stringReader.readString(stringIndex);
    };
    OutOfProcessRenderTreeFrameReader.prototype.textContent = function (frame) {
        var stringIndex = readInt32LE(this.batchDataUint8, frame + 4); // 2nd int
        return this.stringReader.readString(stringIndex);
    };
    OutOfProcessRenderTreeFrameReader.prototype.markupContent = function (frame) {
        var stringIndex = readInt32LE(this.batchDataUint8, frame + 4); // 2nd int
        return this.stringReader.readString(stringIndex);
    };
    OutOfProcessRenderTreeFrameReader.prototype.attributeName = function (frame) {
        var stringIndex = readInt32LE(this.batchDataUint8, frame + 4); // 2nd int
        return this.stringReader.readString(stringIndex);
    };
    OutOfProcessRenderTreeFrameReader.prototype.attributeValue = function (frame) {
        var stringIndex = readInt32LE(this.batchDataUint8, frame + 8); // 3rd int
        return this.stringReader.readString(stringIndex);
    };
    OutOfProcessRenderTreeFrameReader.prototype.attributeEventHandlerId = function (frame) {
        return readUint64LE(this.batchDataUint8, frame + 12); // Bytes 12-19
    };
    return OutOfProcessRenderTreeFrameReader;
}());
var OutOfProcessStringReader = /** @class */ (function () {
    function OutOfProcessStringReader(batchDataUint8) {
        this.batchDataUint8 = batchDataUint8;
        // Final int gives start position of the string table
        this.stringTableStartIndex = readInt32LE(batchDataUint8, batchDataUint8.length - 4);
    }
    OutOfProcessStringReader.prototype.readString = function (index) {
        if (index === -1) { // Special value encodes 'null'
            return null;
        }
        else {
            var stringTableEntryPos = readInt32LE(this.batchDataUint8, this.stringTableStartIndex + index * stringTableEntryLength);
            // By default, .NET's BinaryWriter gives LEB128-length-prefixed UTF-8 data.
            // This is convenient enough to decode in JavaScript.
            var numUtf8Bytes = readLEB128(this.batchDataUint8, stringTableEntryPos);
            var charsStart = stringTableEntryPos + numLEB128Bytes(numUtf8Bytes);
            var utf8Data = new Uint8Array(this.batchDataUint8.buffer, this.batchDataUint8.byteOffset + charsStart, numUtf8Bytes);
            return Utf8Decoder_1.decodeUtf8(utf8Data);
        }
    };
    return OutOfProcessStringReader;
}());
var OutOfProcessArrayRangeReader = /** @class */ (function () {
    function OutOfProcessArrayRangeReader(batchDataUint8) {
        this.batchDataUint8 = batchDataUint8;
    }
    OutOfProcessArrayRangeReader.prototype.count = function (arrayRange) {
        // First int is count
        return readInt32LE(this.batchDataUint8, arrayRange);
    };
    OutOfProcessArrayRangeReader.prototype.values = function (arrayRange) {
        // Entries data starts after the 'count' int (i.e., after 4 bytes)
        return arrayRange + 4;
    };
    return OutOfProcessArrayRangeReader;
}());
var OutOfProcessArrayBuilderSegmentReader = /** @class */ (function () {
    function OutOfProcessArrayBuilderSegmentReader(batchDataUint8) {
        this.batchDataUint8 = batchDataUint8;
    }
    OutOfProcessArrayBuilderSegmentReader.prototype.offset = function (arrayBuilderSegment) {
        // Not used by the out-of-process representation of RenderBatch data.
        // This only exists on the ArrayBuilderSegmentReader for the shared-memory representation.
        return 0;
    };
    OutOfProcessArrayBuilderSegmentReader.prototype.count = function (arrayBuilderSegment) {
        // First int is count
        return readInt32LE(this.batchDataUint8, arrayBuilderSegment);
    };
    OutOfProcessArrayBuilderSegmentReader.prototype.values = function (arrayBuilderSegment) {
        // Entries data starts after the 'count' int (i.e., after 4 bytes)
        return arrayBuilderSegment + 4;
    };
    return OutOfProcessArrayBuilderSegmentReader;
}());
function readInt32LE(buffer, position) {
    return (buffer[position])
        | (buffer[position + 1] << 8)
        | (buffer[position + 2] << 16)
        | (buffer[position + 3] << 24);
}
function readUint32LE(buffer, position) {
    return (buffer[position])
        + (buffer[position + 1] << 8)
        + (buffer[position + 2] << 16)
        + ((buffer[position + 3] << 24) >>> 0); // The >>> 0 coerces the value to unsigned
}
function readUint64LE(buffer, position) {
    // This cannot be done using bit-shift operators in JavaScript, because
    // those all implicitly convert to int32
    var highPart = readUint32LE(buffer, position + 4);
    if (highPart > maxSafeNumberHighPart) {
        throw new Error("Cannot read uint64 with high order part " + highPart + ", because the result would exceed Number.MAX_SAFE_INTEGER.");
    }
    return (highPart * uint64HighPartShift) + readUint32LE(buffer, position);
}
function readLEB128(buffer, position) {
    var result = 0;
    var shift = 0;
    for (var index = 0; index < 4; index++) {
        var byte = buffer[position + index];
        result |= (byte & 127) << shift;
        if (byte < 128) {
            break;
        }
        shift += 7;
    }
    return result;
}
function numLEB128Bytes(value) {
    return value < 128 ? 1
        : value < 16384 ? 2
            : value < 2097152 ? 3 : 4;
}


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/Rendering/RenderBatch/RenderBatch.ts":
/*!*****************************************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/Rendering/RenderBatch/RenderBatch.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EditType;
(function (EditType) {
    // The values must be kept in sync with the .NET equivalent in RenderTreeEditType.cs
    EditType[EditType["prependFrame"] = 1] = "prependFrame";
    EditType[EditType["removeFrame"] = 2] = "removeFrame";
    EditType[EditType["setAttribute"] = 3] = "setAttribute";
    EditType[EditType["removeAttribute"] = 4] = "removeAttribute";
    EditType[EditType["updateText"] = 5] = "updateText";
    EditType[EditType["stepIn"] = 6] = "stepIn";
    EditType[EditType["stepOut"] = 7] = "stepOut";
    EditType[EditType["updateMarkup"] = 8] = "updateMarkup";
    EditType[EditType["permutationListEntry"] = 9] = "permutationListEntry";
    EditType[EditType["permutationListEnd"] = 10] = "permutationListEnd";
})(EditType = exports.EditType || (exports.EditType = {}));
var FrameType;
(function (FrameType) {
    // The values must be kept in sync with the .NET equivalent in RenderTreeFrameType.cs
    FrameType[FrameType["element"] = 1] = "element";
    FrameType[FrameType["text"] = 2] = "text";
    FrameType[FrameType["attribute"] = 3] = "attribute";
    FrameType[FrameType["component"] = 4] = "component";
    FrameType[FrameType["region"] = 5] = "region";
    FrameType[FrameType["elementReferenceCapture"] = 6] = "elementReferenceCapture";
    FrameType[FrameType["markup"] = 8] = "markup";
})(FrameType = exports.FrameType || (exports.FrameType = {}));


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/Rendering/RenderBatch/Utf8Decoder.ts":
/*!*****************************************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/Rendering/RenderBatch/Utf8Decoder.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nativeDecoder = typeof TextDecoder === 'function'
    ? new TextDecoder('utf-8')
    : null;
exports.decodeUtf8 = nativeDecoder ? nativeDecoder.decode.bind(nativeDecoder) : decodeImpl;
/* !
Logic in decodeImpl is derived from fast-text-encoding
https://github.com/samthor/fast-text-encoding

License for fast-text-encoding: Apache 2.0
https://github.com/samthor/fast-text-encoding/blob/master/LICENSE
*/
function decodeImpl(bytes) {
    var pos = 0;
    var len = bytes.length;
    var out = [];
    var substrings = [];
    while (pos < len) {
        var byte1 = bytes[pos++];
        if (byte1 === 0) {
            break; // NULL
        }
        if ((byte1 & 0x80) === 0) { // 1-byte
            out.push(byte1);
        }
        else if ((byte1 & 0xe0) === 0xc0) { // 2-byte
            var byte2 = bytes[pos++] & 0x3f;
            out.push(((byte1 & 0x1f) << 6) | byte2);
        }
        else if ((byte1 & 0xf0) === 0xe0) {
            var byte2 = bytes[pos++] & 0x3f;
            var byte3 = bytes[pos++] & 0x3f;
            out.push(((byte1 & 0x1f) << 12) | (byte2 << 6) | byte3);
        }
        else if ((byte1 & 0xf8) === 0xf0) {
            var byte2 = bytes[pos++] & 0x3f;
            var byte3 = bytes[pos++] & 0x3f;
            var byte4 = bytes[pos++] & 0x3f;
            // this can be > 0xffff, so possibly generate surrogates
            var codepoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0c) | (byte3 << 0x06) | byte4;
            if (codepoint > 0xffff) {
                // codepoint &= ~0x10000;
                codepoint -= 0x10000;
                out.push((codepoint >>> 10) & 0x3ff | 0xd800);
                codepoint = 0xdc00 | codepoint & 0x3ff;
            }
            out.push(codepoint);
        }
        else {
            // FIXME: we're ignoring this
        }
        // As a workaround for https://github.com/samthor/fast-text-encoding/issues/1,
        // make sure the 'out' array never gets too long. When it reaches a limit, we
        // stringify what we have so far and append to a list of outputs.
        if (out.length > 1024) {
            substrings.push(String.fromCharCode.apply(null, out));
            out.length = 0;
        }
    }
    substrings.push(String.fromCharCode.apply(null, out));
    return substrings.join('');
}


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/Rendering/Renderer.ts":
/*!**************************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/Rendering/Renderer.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/camelcase */
__webpack_require__(/*! ../Platform/Platform */ "./upstream/aspnetcore/web.js/src/Platform/Platform.ts");
__webpack_require__(/*! ../Environment */ "./upstream/aspnetcore/web.js/src/Environment.ts");
var BrowserRenderer_1 = __webpack_require__(/*! ./BrowserRenderer */ "./upstream/aspnetcore/web.js/src/Rendering/BrowserRenderer.ts");
var LogicalElements_1 = __webpack_require__(/*! ./LogicalElements */ "./upstream/aspnetcore/web.js/src/Rendering/LogicalElements.ts");
var browserRenderers = {};
var shouldResetScrollAfterNextBatch = false;
function attachRootComponentToLogicalElement(browserRendererId, logicalElement, componentId) {
    var browserRenderer = browserRenderers[browserRendererId];
    if (!browserRenderer) {
        browserRenderer = browserRenderers[browserRendererId] = new BrowserRenderer_1.BrowserRenderer(browserRendererId);
    }
    browserRenderer.attachRootComponentToLogicalElement(componentId, logicalElement);
}
exports.attachRootComponentToLogicalElement = attachRootComponentToLogicalElement;
function attachRootComponentToElement(elementSelector, componentId, browserRendererId) {
    var element = document.querySelector(elementSelector);
    if (!element) {
        throw new Error("Could not find any element matching selector '" + elementSelector + "'.");
    }
    // 'allowExistingContents' to keep any prerendered content until we do the first client-side render
    // Only client-side Blazor supplies a browser renderer ID
    attachRootComponentToLogicalElement(browserRendererId || 0, LogicalElements_1.toLogicalElement(element, /* allow existing contents */ true), componentId);
}
exports.attachRootComponentToElement = attachRootComponentToElement;
function renderBatch(browserRendererId, batch) {
    var browserRenderer = browserRenderers[browserRendererId];
    if (!browserRenderer) {
        throw new Error("There is no browser renderer with ID " + browserRendererId + ".");
    }
    var arrayRangeReader = batch.arrayRangeReader;
    var updatedComponentsRange = batch.updatedComponents();
    var updatedComponentsValues = arrayRangeReader.values(updatedComponentsRange);
    var updatedComponentsLength = arrayRangeReader.count(updatedComponentsRange);
    var referenceFrames = batch.referenceFrames();
    var referenceFramesValues = arrayRangeReader.values(referenceFrames);
    var diffReader = batch.diffReader;
    for (var i = 0; i < updatedComponentsLength; i++) {
        var diff = batch.updatedComponentsEntry(updatedComponentsValues, i);
        var componentId = diffReader.componentId(diff);
        var edits = diffReader.edits(diff);
        browserRenderer.updateComponent(batch, componentId, edits, referenceFramesValues);
    }
    var disposedComponentIdsRange = batch.disposedComponentIds();
    var disposedComponentIdsValues = arrayRangeReader.values(disposedComponentIdsRange);
    var disposedComponentIdsLength = arrayRangeReader.count(disposedComponentIdsRange);
    for (var i = 0; i < disposedComponentIdsLength; i++) {
        var componentId = batch.disposedComponentIdsEntry(disposedComponentIdsValues, i);
        browserRenderer.disposeComponent(componentId);
    }
    var disposedEventHandlerIdsRange = batch.disposedEventHandlerIds();
    var disposedEventHandlerIdsValues = arrayRangeReader.values(disposedEventHandlerIdsRange);
    var disposedEventHandlerIdsLength = arrayRangeReader.count(disposedEventHandlerIdsRange);
    for (var i = 0; i < disposedEventHandlerIdsLength; i++) {
        var eventHandlerId = batch.disposedEventHandlerIdsEntry(disposedEventHandlerIdsValues, i);
        browserRenderer.disposeEventHandler(eventHandlerId);
    }
    resetScrollIfNeeded();
}
exports.renderBatch = renderBatch;
function resetScrollAfterNextBatch() {
    shouldResetScrollAfterNextBatch = true;
}
exports.resetScrollAfterNextBatch = resetScrollAfterNextBatch;
function resetScrollIfNeeded() {
    if (shouldResetScrollAfterNextBatch) {
        shouldResetScrollAfterNextBatch = false;
        // This assumes the scroller is on the window itself. There isn't a general way to know
        // if some other element is playing the role of the primary scroll region.
        window.scrollTo && window.scrollTo(0, 0);
    }
}


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/Rendering/RendererEventDispatcher.ts":
/*!*****************************************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/Rendering/RendererEventDispatcher.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var eventDispatcherInstance;
function dispatchEvent(eventDescriptor, eventArgs) {
    if (!eventDispatcherInstance) {
        throw new Error('eventDispatcher not initialized. Call \'setEventDispatcher\' to configure it.');
    }
    return eventDispatcherInstance(eventDescriptor, eventArgs);
}
exports.dispatchEvent = dispatchEvent;
function setEventDispatcher(newDispatcher) {
    eventDispatcherInstance = newDispatcher;
}
exports.setEventDispatcher = setEventDispatcher;


/***/ }),

/***/ "./upstream/aspnetcore/web.js/src/Services/NavigationManager.ts":
/*!**********************************************************************!*\
  !*** ./upstream/aspnetcore/web.js/src/Services/NavigationManager.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// import '@dotnet/jsinterop'; Imported elsewhere
var Renderer_1 = __webpack_require__(/*! ../Rendering/Renderer */ "./upstream/aspnetcore/web.js/src/Rendering/Renderer.ts");
var hasEnabledNavigationInterception = false;
var hasRegisteredNavigationEventListeners = false;
// Will be initialized once someone registers
var notifyLocationChangedCallback = null;
// These are the functions we're making available for invocation from .NET
exports.internalFunctions = {
    listenForNavigationEvents: listenForNavigationEvents,
    enableNavigationInterception: enableNavigationInterception,
    navigateTo: navigateTo,
    getBaseURI: function () { return document.baseURI; },
    getLocationHref: function () { return location.href; },
};
function listenForNavigationEvents(callback) {
    notifyLocationChangedCallback = callback;
    if (hasRegisteredNavigationEventListeners) {
        return;
    }
    hasRegisteredNavigationEventListeners = true;
    window.addEventListener('popstate', function () { return notifyLocationChanged(false); });
}
function enableNavigationInterception() {
    hasEnabledNavigationInterception = true;
}
function attachToEventDelegator(eventDelegator) {
    // We need to respond to clicks on <a> elements *after* the EventDelegator has finished
    // running its simulated bubbling process so that we can respect any preventDefault requests.
    // So instead of registering our own native event, register using the EventDelegator.
    eventDelegator.notifyAfterClick(function (event) {
        if (!hasEnabledNavigationInterception) {
            return;
        }
        if (event.button !== 0 || eventHasSpecialKey(event)) {
            // Don't stop ctrl/meta-click (etc) from opening links in new tabs/windows
            return;
        }
        if (event.defaultPrevented) {
            return;
        }
        // Intercept clicks on all <a> elements where the href is within the <base href> URI space
        // We must explicitly check if it has an 'href' attribute, because if it doesn't, the result might be null or an empty string depending on the browser
        var anchorTarget = findClosestAncestor(event.target, 'A');
        var hrefAttributeName = 'href';
        if (anchorTarget && anchorTarget.hasAttribute(hrefAttributeName)) {
            var targetAttributeValue = anchorTarget.getAttribute('target');
            var opensInSameFrame = !targetAttributeValue || targetAttributeValue === '_self';
            if (!opensInSameFrame) {
                return;
            }
            var href = anchorTarget.getAttribute(hrefAttributeName);
            var absoluteHref = toAbsoluteUri(href);
            if (isWithinBaseUriSpace(absoluteHref)) {
                event.preventDefault();
                performInternalNavigation(absoluteHref, true);
            }
        }
    });
}
exports.attachToEventDelegator = attachToEventDelegator;
function navigateTo(uri, forceLoad) {
    var absoluteUri = toAbsoluteUri(uri);
    if (!forceLoad && isWithinBaseUriSpace(absoluteUri)) {
        // It's an internal URL, so do client-side navigation
        performInternalNavigation(absoluteUri, false);
    }
    else if (forceLoad && location.href === uri) {
        // Force-loading the same URL you're already on requires special handling to avoid
        // triggering browser-specific behavior issues.
        // For details about what this fixes and why, see https://github.com/aspnet/AspNetCore/pull/10839
        var temporaryUri = uri + '?';
        history.replaceState(null, '', temporaryUri);
        location.replace(uri);
    }
    else {
        // It's either an external URL, or forceLoad is requested, so do a full page load
        location.href = uri;
    }
}
exports.navigateTo = navigateTo;
function performInternalNavigation(absoluteInternalHref, interceptedLink) {
    // Since this was *not* triggered by a back/forward gesture (that goes through a different
    // code path starting with a popstate event), we don't want to preserve the current scroll
    // position, so reset it.
    // To avoid ugly flickering effects, we don't want to change the scroll position until the
    // we render the new page. As a best approximation, wait until the next batch.
    Renderer_1.resetScrollAfterNextBatch();
    history.pushState(null, /* ignored title */ '', absoluteInternalHref);
    notifyLocationChanged(interceptedLink);
}
function notifyLocationChanged(interceptedLink) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!notifyLocationChangedCallback) return [3 /*break*/, 2];
                    return [4 /*yield*/, notifyLocationChangedCallback(location.href, interceptedLink)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
var testAnchor;
function toAbsoluteUri(relativeUri) {
    testAnchor = testAnchor || document.createElement('a');
    testAnchor.href = relativeUri;
    return testAnchor.href;
}
function findClosestAncestor(element, tagName) {
    return !element
        ? null
        : element.tagName === tagName
            ? element
            : findClosestAncestor(element.parentElement, tagName);
}
function isWithinBaseUriSpace(href) {
    var baseUriWithTrailingSlash = toBaseUriWithTrailingSlash(document.baseURI); // TODO: Might baseURI really be null?
    return href.startsWith(baseUriWithTrailingSlash);
}
function toBaseUriWithTrailingSlash(baseUri) {
    return baseUri.substr(0, baseUri.lastIndexOf('/') + 1);
}
function eventHasSpecialKey(event) {
    return event.ctrlKey || event.shiftKey || event.altKey || event.metaKey;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9BYm9ydENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9EZWZhdWx0SHR0cENsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFzcG5ldC9zaWduYWxyL2Rpc3QvZXNtL0RlZmF1bHRSZWNvbm5lY3RQb2xpY3kuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9IYW5kc2hha2VQcm90b2NvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFzcG5ldC9zaWduYWxyL2Rpc3QvZXNtL0h0dHBDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9IdHRwQ29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFzcG5ldC9zaWduYWxyL2Rpc3QvZXNtL0h1YkNvbm5lY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9IdWJDb25uZWN0aW9uQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFzcG5ldC9zaWduYWxyL2Rpc3QvZXNtL0lIdWJQcm90b2NvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFzcG5ldC9zaWduYWxyL2Rpc3QvZXNtL0lMb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9JVHJhbnNwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXNwbmV0L3NpZ25hbHIvZGlzdC9lc20vSnNvbkh1YlByb3RvY29sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXNwbmV0L3NpZ25hbHIvZGlzdC9lc20vTG9nZ2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFzcG5ldC9zaWduYWxyL2Rpc3QvZXNtL0xvbmdQb2xsaW5nVHJhbnNwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXNwbmV0L3NpZ25hbHIvZGlzdC9lc20vTm9kZUh0dHBDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9TZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXNwbmV0L3NpZ25hbHIvZGlzdC9lc20vU3ViamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFzcG5ldC9zaWduYWxyL2Rpc3QvZXNtL1RleHRNZXNzYWdlRm9ybWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXNwbmV0L3NpZ25hbHIvZGlzdC9lc20vVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9XZWJTb2NrZXRUcmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9YaHJIdHRwQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXNwbmV0L3NpZ25hbHIvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb3RuZXQvanNpbnRlcm9wL2Rpc3QvTWljcm9zb2Z0LkpTSW50ZXJvcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWFycmF5YnVmZmVyL2xpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jvb3QuRGVza3RvcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSVBDLnRzIiwid2VicGFjazovLy8uL3Vwc3RyZWFtL2FzcG5ldGNvcmUvd2ViLmpzL3NyYy9FbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi91cHN0cmVhbS9hc3BuZXRjb3JlL3dlYi5qcy9zcmMvR2xvYmFsRXhwb3J0cy50cyIsIndlYnBhY2s6Ly8vLi91cHN0cmVhbS9hc3BuZXRjb3JlL3dlYi5qcy9zcmMvUmVuZGVyaW5nL0Jyb3dzZXJSZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi91cHN0cmVhbS9hc3BuZXRjb3JlL3dlYi5qcy9zcmMvUmVuZGVyaW5nL0VsZW1lbnRSZWZlcmVuY2VDYXB0dXJlLnRzIiwid2VicGFjazovLy8uL3Vwc3RyZWFtL2FzcG5ldGNvcmUvd2ViLmpzL3NyYy9SZW5kZXJpbmcvRXZlbnREZWxlZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vdXBzdHJlYW0vYXNwbmV0Y29yZS93ZWIuanMvc3JjL1JlbmRlcmluZy9FdmVudEZpZWxkSW5mby50cyIsIndlYnBhY2s6Ly8vLi91cHN0cmVhbS9hc3BuZXRjb3JlL3dlYi5qcy9zcmMvUmVuZGVyaW5nL0V2ZW50Rm9yRG90TmV0LnRzIiwid2VicGFjazovLy8uL3Vwc3RyZWFtL2FzcG5ldGNvcmUvd2ViLmpzL3NyYy9SZW5kZXJpbmcvTG9naWNhbEVsZW1lbnRzLnRzIiwid2VicGFjazovLy8uL3Vwc3RyZWFtL2FzcG5ldGNvcmUvd2ViLmpzL3NyYy9SZW5kZXJpbmcvUmVuZGVyQmF0Y2gvT3V0T2ZQcm9jZXNzUmVuZGVyQmF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vdXBzdHJlYW0vYXNwbmV0Y29yZS93ZWIuanMvc3JjL1JlbmRlcmluZy9SZW5kZXJCYXRjaC9SZW5kZXJCYXRjaC50cyIsIndlYnBhY2s6Ly8vLi91cHN0cmVhbS9hc3BuZXRjb3JlL3dlYi5qcy9zcmMvUmVuZGVyaW5nL1JlbmRlckJhdGNoL1V0ZjhEZWNvZGVyLnRzIiwid2VicGFjazovLy8uL3Vwc3RyZWFtL2FzcG5ldGNvcmUvd2ViLmpzL3NyYy9SZW5kZXJpbmcvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdXBzdHJlYW0vYXNwbmV0Y29yZS93ZWIuanMvc3JjL1JlbmRlcmluZy9SZW5kZXJlckV2ZW50RGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi91cHN0cmVhbS9hc3BuZXRjb3JlL3dlYi5qcy9zcmMvU2VydmljZXMvTmF2aWdhdGlvbk1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbEVXOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLG9EQUFXO0FBQ2hDLGNBQWMsbUJBQU8sQ0FBQyxnREFBUztBQUMvQixjQUFjLG1CQUFPLENBQUMsZ0RBQVM7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQW1EO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDO0FBRUQsU0FBUywwQkFBMEIsQ0FBQyxPQUFlO0lBQ2pELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxLQUFpQjtJQUMzQyxPQUFPLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDMUUsQ0FBQyIsImZpbGUiOiJyZW1vdGUuYmxhem9yLmRlc2t0b3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9Cb290LkRlc2t0b3AudHNcIik7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbi8vIFJvdWdoIHBvbHlmaWxsIG9mIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9BYm9ydENvbnRyb2xsZXJcclxuLy8gV2UgZG9uJ3QgYWN0dWFsbHkgZXZlciB1c2UgdGhlIEFQSSBiZWluZyBwb2x5ZmlsbGVkLCB3ZSBhbHdheXMgdXNlIHRoZSBwb2x5ZmlsbCBiZWNhdXNlXHJcbi8vIGl0J3MgYSB2ZXJ5IG5ldyBBUEkgcmlnaHQgbm93LlxyXG4vLyBOb3QgZXhwb3J0ZWQgZnJvbSBpbmRleC5cclxuLyoqIEBwcml2YXRlICovXHJcbnZhciBBYm9ydENvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBYm9ydENvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pc0Fib3J0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uYWJvcnQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgQWJvcnRDb250cm9sbGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBYm9ydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBYm9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25hYm9ydCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmFib3J0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFib3J0Q29udHJvbGxlci5wcm90b3R5cGUsIFwic2lnbmFsXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJvcnRDb250cm9sbGVyLnByb3RvdHlwZSwgXCJhYm9ydGVkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNBYm9ydGVkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEFib3J0Q29udHJvbGxlcjtcclxufSgpKTtcclxuZXhwb3J0IHsgQWJvcnRDb250cm9sbGVyIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFib3J0Q29udHJvbGxlci5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgeyBBYm9ydEVycm9yIH0gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiLi9IdHRwQ2xpZW50XCI7XHJcbmltcG9ydCB7IE5vZGVIdHRwQ2xpZW50IH0gZnJvbSBcIi4vTm9kZUh0dHBDbGllbnRcIjtcclxuaW1wb3J0IHsgWGhySHR0cENsaWVudCB9IGZyb20gXCIuL1hockh0dHBDbGllbnRcIjtcclxuLyoqIERlZmF1bHQgaW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIEBhc3BuZXQvc2lnbmFsci5IdHRwQ2xpZW50fS4gKi9cclxudmFyIERlZmF1bHRIdHRwQ2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKERlZmF1bHRIdHRwQ2xpZW50LCBfc3VwZXIpO1xyXG4gICAgLyoqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBAYXNwbmV0L3NpZ25hbHIuRGVmYXVsdEh0dHBDbGllbnR9LCB1c2luZyB0aGUgcHJvdmlkZWQge0BsaW5rIEBhc3BuZXQvc2lnbmFsci5JTG9nZ2VyfSB0byBsb2cgbWVzc2FnZXMuICovXHJcbiAgICBmdW5jdGlvbiBEZWZhdWx0SHR0cENsaWVudChsb2dnZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgX3RoaXMuaHR0cENsaWVudCA9IG5ldyBYaHJIdHRwQ2xpZW50KGxvZ2dlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBfdGhpcy5odHRwQ2xpZW50ID0gbmV3IE5vZGVIdHRwQ2xpZW50KGxvZ2dlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgRGVmYXVsdEh0dHBDbGllbnQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAocmVxdWVzdCkge1xyXG4gICAgICAgIC8vIENoZWNrIHRoYXQgYWJvcnQgd2FzIG5vdCBzaWduYWxlZCBiZWZvcmUgY2FsbGluZyBzZW5kXHJcbiAgICAgICAgaWYgKHJlcXVlc3QuYWJvcnRTaWduYWwgJiYgcmVxdWVzdC5hYm9ydFNpZ25hbC5hYm9ydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQWJvcnRFcnJvcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0Lm1ldGhvZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gbWV0aG9kIGRlZmluZWQuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0LnVybCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gdXJsIGRlZmluZWQuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5zZW5kKHJlcXVlc3QpO1xyXG4gICAgfTtcclxuICAgIERlZmF1bHRIdHRwQ2xpZW50LnByb3RvdHlwZS5nZXRDb29raWVTdHJpbmcgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXRDb29raWVTdHJpbmcodXJsKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRGVmYXVsdEh0dHBDbGllbnQ7XHJcbn0oSHR0cENsaWVudCkpO1xyXG5leHBvcnQgeyBEZWZhdWx0SHR0cENsaWVudCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1EZWZhdWx0SHR0cENsaWVudC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbi8vIDAsIDIsIDEwLCAzMCBzZWNvbmQgZGVsYXlzIGJlZm9yZSByZWNvbm5lY3QgYXR0ZW1wdHMuXHJcbnZhciBERUZBVUxUX1JFVFJZX0RFTEFZU19JTl9NSUxMSVNFQ09ORFMgPSBbMCwgMjAwMCwgMTAwMDAsIDMwMDAwLCBudWxsXTtcclxuLyoqIEBwcml2YXRlICovXHJcbnZhciBEZWZhdWx0UmVjb25uZWN0UG9saWN5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRGVmYXVsdFJlY29ubmVjdFBvbGljeShyZXRyeURlbGF5cykge1xyXG4gICAgICAgIHRoaXMucmV0cnlEZWxheXMgPSByZXRyeURlbGF5cyAhPT0gdW5kZWZpbmVkID8gcmV0cnlEZWxheXMuY29uY2F0KFtudWxsXSkgOiBERUZBVUxUX1JFVFJZX0RFTEFZU19JTl9NSUxMSVNFQ09ORFM7XHJcbiAgICB9XHJcbiAgICBEZWZhdWx0UmVjb25uZWN0UG9saWN5LnByb3RvdHlwZS5uZXh0UmV0cnlEZWxheUluTWlsbGlzZWNvbmRzID0gZnVuY3Rpb24gKHByZXZpb3VzUmV0cnlDb3VudCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5RGVsYXlzW3ByZXZpb3VzUmV0cnlDb3VudF07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERlZmF1bHRSZWNvbm5lY3RQb2xpY3k7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IERlZmF1bHRSZWNvbm5lY3RQb2xpY3kgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGVmYXVsdFJlY29ubmVjdFBvbGljeS5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG4vKiogRXJyb3IgdGhyb3duIHdoZW4gYW4gSFRUUCByZXF1ZXN0IGZhaWxzLiAqL1xyXG52YXIgSHR0cEVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEh0dHBFcnJvciwgX3N1cGVyKTtcclxuICAgIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBAYXNwbmV0L3NpZ25hbHIuSHR0cEVycm9yfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JNZXNzYWdlIEEgZGVzY3JpcHRpdmUgZXJyb3IgbWVzc2FnZS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0dXNDb2RlIFRoZSBIVFRQIHN0YXR1cyBjb2RlIHJlcHJlc2VudGVkIGJ5IHRoaXMgZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIEh0dHBFcnJvcihlcnJvck1lc3NhZ2UsIHN0YXR1c0NvZGUpIHtcclxuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgdHJ1ZVByb3RvID0gX25ld1RhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlcnJvck1lc3NhZ2UpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XHJcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBpc3N1ZSBpbiBUeXBlc2NyaXB0IGNvbXBpbGVyXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzk2NSNpc3N1ZWNvbW1lbnQtMjc4NTcwMjAwXHJcbiAgICAgICAgX3RoaXMuX19wcm90b19fID0gdHJ1ZVByb3RvO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBIdHRwRXJyb3I7XHJcbn0oRXJyb3IpKTtcclxuZXhwb3J0IHsgSHR0cEVycm9yIH07XHJcbi8qKiBFcnJvciB0aHJvd24gd2hlbiBhIHRpbWVvdXQgZWxhcHNlcy4gKi9cclxudmFyIFRpbWVvdXRFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUaW1lb3V0RXJyb3IsIF9zdXBlcik7XHJcbiAgICAvKiogQ29uc3RydWN0cyBhIG5ldyBpbnN0YW5jZSBvZiB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLlRpbWVvdXRFcnJvcn0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yTWVzc2FnZSBBIGRlc2NyaXB0aXZlIGVycm9yIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFRpbWVvdXRFcnJvcihlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZSA9PT0gdm9pZCAwKSB7IGVycm9yTWVzc2FnZSA9IFwiQSB0aW1lb3V0IG9jY3VycmVkLlwiOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgdHJ1ZVByb3RvID0gX25ld1RhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlcnJvck1lc3NhZ2UpIHx8IHRoaXM7XHJcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBpc3N1ZSBpbiBUeXBlc2NyaXB0IGNvbXBpbGVyXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzk2NSNpc3N1ZWNvbW1lbnQtMjc4NTcwMjAwXHJcbiAgICAgICAgX3RoaXMuX19wcm90b19fID0gdHJ1ZVByb3RvO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBUaW1lb3V0RXJyb3I7XHJcbn0oRXJyb3IpKTtcclxuZXhwb3J0IHsgVGltZW91dEVycm9yIH07XHJcbi8qKiBFcnJvciB0aHJvd24gd2hlbiBhbiBhY3Rpb24gaXMgYWJvcnRlZC4gKi9cclxudmFyIEFib3J0RXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQWJvcnRFcnJvciwgX3N1cGVyKTtcclxuICAgIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBBYm9ydEVycm9yfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JNZXNzYWdlIEEgZGVzY3JpcHRpdmUgZXJyb3IgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gQWJvcnRFcnJvcihlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZSA9PT0gdm9pZCAwKSB7IGVycm9yTWVzc2FnZSA9IFwiQW4gYWJvcnQgb2NjdXJyZWQuXCI7IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciB0cnVlUHJvdG8gPSBfbmV3VGFyZ2V0LnByb3RvdHlwZTtcclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVycm9yTWVzc2FnZSkgfHwgdGhpcztcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICBfdGhpcy5fX3Byb3RvX18gPSB0cnVlUHJvdG87XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFib3J0RXJyb3I7XHJcbn0oRXJyb3IpKTtcclxuZXhwb3J0IHsgQWJvcnRFcnJvciB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1FcnJvcnMuanMubWFwIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5pbXBvcnQgeyBUZXh0TWVzc2FnZUZvcm1hdCB9IGZyb20gXCIuL1RleHRNZXNzYWdlRm9ybWF0XCI7XHJcbmltcG9ydCB7IGlzQXJyYXlCdWZmZXIgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG4vKiogQHByaXZhdGUgKi9cclxudmFyIEhhbmRzaGFrZVByb3RvY29sID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSGFuZHNoYWtlUHJvdG9jb2woKSB7XHJcbiAgICB9XHJcbiAgICAvLyBIYW5kc2hha2UgcmVxdWVzdCBpcyBhbHdheXMgSlNPTlxyXG4gICAgSGFuZHNoYWtlUHJvdG9jb2wucHJvdG90eXBlLndyaXRlSGFuZHNoYWtlUmVxdWVzdCA9IGZ1bmN0aW9uIChoYW5kc2hha2VSZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIFRleHRNZXNzYWdlRm9ybWF0LndyaXRlKEpTT04uc3RyaW5naWZ5KGhhbmRzaGFrZVJlcXVlc3QpKTtcclxuICAgIH07XHJcbiAgICBIYW5kc2hha2VQcm90b2NvbC5wcm90b3R5cGUucGFyc2VIYW5kc2hha2VSZXNwb25zZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyIHJlc3BvbnNlTWVzc2FnZTtcclxuICAgICAgICB2YXIgbWVzc2FnZURhdGE7XHJcbiAgICAgICAgdmFyIHJlbWFpbmluZ0RhdGE7XHJcbiAgICAgICAgaWYgKGlzQXJyYXlCdWZmZXIoZGF0YSkgfHwgKHR5cGVvZiBCdWZmZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcclxuICAgICAgICAgICAgLy8gRm9ybWF0IGlzIGJpbmFyeSBidXQgc3RpbGwgbmVlZCB0byByZWFkIEpTT04gdGV4dCBmcm9tIGhhbmRzaGFrZSByZXNwb25zZVxyXG4gICAgICAgICAgICB2YXIgYmluYXJ5RGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9ySW5kZXggPSBiaW5hcnlEYXRhLmluZGV4T2YoVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yQ29kZSk7XHJcbiAgICAgICAgICAgIGlmIChzZXBhcmF0b3JJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1lc3NhZ2UgaXMgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29udGVudCBiZWZvcmUgc2VwYXJhdG9yIGlzIGhhbmRzaGFrZSByZXNwb25zZVxyXG4gICAgICAgICAgICAvLyBvcHRpb25hbCBjb250ZW50IGFmdGVyIGlzIGFkZGl0aW9uYWwgbWVzc2FnZXNcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlTGVuZ3RoID0gc2VwYXJhdG9ySW5kZXggKyAxO1xyXG4gICAgICAgICAgICBtZXNzYWdlRGF0YSA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgYmluYXJ5RGF0YS5zbGljZSgwLCByZXNwb25zZUxlbmd0aCkpO1xyXG4gICAgICAgICAgICByZW1haW5pbmdEYXRhID0gKGJpbmFyeURhdGEuYnl0ZUxlbmd0aCA+IHJlc3BvbnNlTGVuZ3RoKSA/IGJpbmFyeURhdGEuc2xpY2UocmVzcG9uc2VMZW5ndGgpLmJ1ZmZlciA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdGV4dERhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9ySW5kZXggPSB0ZXh0RGF0YS5pbmRleE9mKFRleHRNZXNzYWdlRm9ybWF0LlJlY29yZFNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgIGlmIChzZXBhcmF0b3JJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1lc3NhZ2UgaXMgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29udGVudCBiZWZvcmUgc2VwYXJhdG9yIGlzIGhhbmRzaGFrZSByZXNwb25zZVxyXG4gICAgICAgICAgICAvLyBvcHRpb25hbCBjb250ZW50IGFmdGVyIGlzIGFkZGl0aW9uYWwgbWVzc2FnZXNcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlTGVuZ3RoID0gc2VwYXJhdG9ySW5kZXggKyAxO1xyXG4gICAgICAgICAgICBtZXNzYWdlRGF0YSA9IHRleHREYXRhLnN1YnN0cmluZygwLCByZXNwb25zZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJlbWFpbmluZ0RhdGEgPSAodGV4dERhdGEubGVuZ3RoID4gcmVzcG9uc2VMZW5ndGgpID8gdGV4dERhdGEuc3Vic3RyaW5nKHJlc3BvbnNlTGVuZ3RoKSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEF0IHRoaXMgcG9pbnQgd2Ugc2hvdWxkIGhhdmUganVzdCB0aGUgc2luZ2xlIGhhbmRzaGFrZSBtZXNzYWdlXHJcbiAgICAgICAgdmFyIG1lc3NhZ2VzID0gVGV4dE1lc3NhZ2VGb3JtYXQucGFyc2UobWVzc2FnZURhdGEpO1xyXG4gICAgICAgIHZhciByZXNwb25zZSA9IEpTT04ucGFyc2UobWVzc2FnZXNbMF0pO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS50eXBlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGEgaGFuZHNoYWtlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlci5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3BvbnNlTWVzc2FnZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgIC8vIG11bHRpcGxlIG1lc3NhZ2VzIGNvdWxkIGhhdmUgYXJyaXZlZCB3aXRoIGhhbmRzaGFrZVxyXG4gICAgICAgIC8vIHJldHVybiBhZGRpdGlvbmFsIGRhdGEgdG8gYmUgcGFyc2VkIGFzIHVzdWFsLCBvciBudWxsIGlmIGFsbCBwYXJzZWRcclxuICAgICAgICByZXR1cm4gW3JlbWFpbmluZ0RhdGEsIHJlc3BvbnNlTWVzc2FnZV07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEhhbmRzaGFrZVByb3RvY29sO1xyXG59KCkpO1xyXG5leHBvcnQgeyBIYW5kc2hha2VQcm90b2NvbCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IYW5kc2hha2VQcm90b2NvbC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbi8qKiBSZXByZXNlbnRzIGFuIEhUVFAgcmVzcG9uc2UuICovXHJcbnZhciBIdHRwUmVzcG9uc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIdHRwUmVzcG9uc2Uoc3RhdHVzQ29kZSwgc3RhdHVzVGV4dCwgY29udGVudCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEh0dHBSZXNwb25zZTtcclxufSgpKTtcclxuZXhwb3J0IHsgSHR0cFJlc3BvbnNlIH07XHJcbi8qKiBBYnN0cmFjdGlvbiBvdmVyIGFuIEhUVFAgY2xpZW50LlxyXG4gKlxyXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGFuIGFic3RyYWN0aW9uIG92ZXIgYW4gSFRUUCBjbGllbnQgc28gdGhhdCBhIGRpZmZlcmVudCBpbXBsZW1lbnRhdGlvbiBjYW4gYmUgcHJvdmlkZWQgb24gZGlmZmVyZW50IHBsYXRmb3Jtcy5cclxuICovXHJcbnZhciBIdHRwQ2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSHR0cENsaWVudCgpIHtcclxuICAgIH1cclxuICAgIEh0dHBDbGllbnQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKF9fYXNzaWduKHt9LCBvcHRpb25zLCB7IG1ldGhvZDogXCJHRVRcIiwgdXJsOiB1cmwgfSkpO1xyXG4gICAgfTtcclxuICAgIEh0dHBDbGllbnQucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZChfX2Fzc2lnbih7fSwgb3B0aW9ucywgeyBtZXRob2Q6IFwiUE9TVFwiLCB1cmw6IHVybCB9KSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cENsaWVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoX19hc3NpZ24oe30sIG9wdGlvbnMsIHsgbWV0aG9kOiBcIkRFTEVURVwiLCB1cmw6IHVybCB9KSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIEdldHMgYWxsIGNvb2tpZXMgdGhhdCBhcHBseSB0byB0aGUgc3BlY2lmaWVkIFVSTC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBVUkwgdGhhdCB0aGUgY29va2llcyBhcmUgdmFsaWQgZm9yLlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmcgY29udGFpbmluZyBhbGwgdGhlIGtleS12YWx1ZSBjb29raWUgcGFpcnMgZm9yIHRoZSBzcGVjaWZpZWQgVVJMLlxyXG4gICAgICovXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBIdHRwQ2xpZW50LnByb3RvdHlwZS5nZXRDb29raWVTdHJpbmcgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEh0dHBDbGllbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEh0dHBDbGllbnQgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SHR0cENsaWVudC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IHsgRGVmYXVsdEh0dHBDbGllbnQgfSBmcm9tIFwiLi9EZWZhdWx0SHR0cENsaWVudFwiO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgSHR0cFRyYW5zcG9ydFR5cGUsIFRyYW5zZmVyRm9ybWF0IH0gZnJvbSBcIi4vSVRyYW5zcG9ydFwiO1xyXG5pbXBvcnQgeyBMb25nUG9sbGluZ1RyYW5zcG9ydCB9IGZyb20gXCIuL0xvbmdQb2xsaW5nVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IFNlcnZlclNlbnRFdmVudHNUcmFuc3BvcnQgfSBmcm9tIFwiLi9TZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IEFyZywgY3JlYXRlTG9nZ2VyLCBQbGF0Zm9ybSB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7IFdlYlNvY2tldFRyYW5zcG9ydCB9IGZyb20gXCIuL1dlYlNvY2tldFRyYW5zcG9ydFwiO1xyXG52YXIgTUFYX1JFRElSRUNUUyA9IDEwMDtcclxudmFyIFdlYlNvY2tldE1vZHVsZSA9IG51bGw7XHJcbnZhciBFdmVudFNvdXJjZU1vZHVsZSA9IG51bGw7XHJcbmlmIChQbGF0Zm9ybS5pc05vZGUgJiYgdHlwZW9mIHJlcXVpcmUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIC8vIEluIG9yZGVyIHRvIGlnbm9yZSB0aGUgZHluYW1pYyByZXF1aXJlIGluIHdlYnBhY2sgYnVpbGRzIHdlIG5lZWQgdG8gZG8gdGhpcyBtYWdpY1xyXG4gICAgLy8gQHRzLWlnbm9yZTogVFMgZG9lc24ndCBrbm93IGFib3V0IHRoZXNlIG5hbWVzXHJcbiAgICB2YXIgcmVxdWlyZUZ1bmMgPSB0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyA9PT0gXCJmdW5jdGlvblwiID8gX19ub25fd2VicGFja19yZXF1aXJlX18gOiByZXF1aXJlO1xyXG4gICAgV2ViU29ja2V0TW9kdWxlID0gcmVxdWlyZUZ1bmMoXCJ3c1wiKTtcclxuICAgIEV2ZW50U291cmNlTW9kdWxlID0gcmVxdWlyZUZ1bmMoXCJldmVudHNvdXJjZVwiKTtcclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxudmFyIEh0dHBDb25uZWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSHR0cENvbm5lY3Rpb24odXJsLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgICAgICB0aGlzLmZlYXR1cmVzID0ge307XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQodXJsLCBcInVybFwiKTtcclxuICAgICAgICB0aGlzLmxvZ2dlciA9IGNyZWF0ZUxvZ2dlcihvcHRpb25zLmxvZ2dlcik7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gdGhpcy5yZXNvbHZlVXJsKHVybCk7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgb3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudCA9IG9wdGlvbnMubG9nTWVzc2FnZUNvbnRlbnQgfHwgZmFsc2U7XHJcbiAgICAgICAgaWYgKCFQbGF0Zm9ybS5pc05vZGUgJiYgdHlwZW9mIFdlYlNvY2tldCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhb3B0aW9ucy5XZWJTb2NrZXQpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5XZWJTb2NrZXQgPSBXZWJTb2NrZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKFBsYXRmb3JtLmlzTm9kZSAmJiAhb3B0aW9ucy5XZWJTb2NrZXQpIHtcclxuICAgICAgICAgICAgaWYgKFdlYlNvY2tldE1vZHVsZSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5XZWJTb2NrZXQgPSBXZWJTb2NrZXRNb2R1bGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFQbGF0Zm9ybS5pc05vZGUgJiYgdHlwZW9mIEV2ZW50U291cmNlICE9PSBcInVuZGVmaW5lZFwiICYmICFvcHRpb25zLkV2ZW50U291cmNlKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuRXZlbnRTb3VyY2UgPSBFdmVudFNvdXJjZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoUGxhdGZvcm0uaXNOb2RlICYmICFvcHRpb25zLkV2ZW50U291cmNlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgRXZlbnRTb3VyY2VNb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuRXZlbnRTb3VyY2UgPSBFdmVudFNvdXJjZU1vZHVsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBvcHRpb25zLmh0dHBDbGllbnQgfHwgbmV3IERlZmF1bHRIdHRwQ2xpZW50KHRoaXMubG9nZ2VyKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMub25yZWNlaXZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uY2xvc2UgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgSHR0cENvbm5lY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKHRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZSwgbWVzc2FnZTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmZXJGb3JtYXQgPSB0cmFuc2ZlckZvcm1hdCB8fCBUcmFuc2ZlckZvcm1hdC5CaW5hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyZy5pc0luKHRyYW5zZmVyRm9ybWF0LCBUcmFuc2ZlckZvcm1hdCwgXCJ0cmFuc2ZlckZvcm1hdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIlN0YXJ0aW5nIGNvbm5lY3Rpb24gd2l0aCB0cmFuc2ZlciBmb3JtYXQgJ1wiICsgVHJhbnNmZXJGb3JtYXRbdHJhbnNmZXJGb3JtYXRdICsgXCInLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlICE9PSBcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbm5vdCBzdGFydCBhbiBIdHRwQ29ubmVjdGlvbiB0aGF0IGlzIG5vdCBpbiB0aGUgJ0Rpc2Nvbm5lY3RlZCcgc3RhdGUuXCIpKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUgPSBcIkNvbm5lY3RpbmcgXCIgLyogQ29ubmVjdGluZyAqLztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEludGVybmFsUHJvbWlzZSA9IHRoaXMuc3RhcnRJbnRlcm5hbCh0cmFuc2ZlckZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc3RhcnRJbnRlcm5hbFByb21pc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0aW5nXCIgLyogRGlzY29ubmVjdGluZyAqLykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJGYWlsZWQgdG8gc3RhcnQgdGhlIEh0dHBDb25uZWN0aW9uIGJlZm9yZSBzdG9wKCkgd2FzIGNhbGxlZC5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2Fubm90IGF3YWl0IHN0b3BQcm9taXNlIGluc2lkZSBzdGFydEludGVybmFsIHNpbmNlIHN0b3BJbnRlcm5hbCBhd2FpdHMgdGhlIHN0YXJ0SW50ZXJuYWxQcm9taXNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnN0b3BQcm9taXNlXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbm5vdCBhd2FpdCBzdG9wUHJvbWlzZSBpbnNpZGUgc3RhcnRJbnRlcm5hbCBzaW5jZSBzdG9wSW50ZXJuYWwgYXdhaXRzIHRoZSBzdGFydEludGVybmFsUHJvbWlzZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUgIT09IFwiQ29ubmVjdGVkXCIgLyogQ29ubmVjdGVkICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJIdHRwQ29ubmVjdGlvbi5zdGFydEludGVybmFsIGNvbXBsZXRlZCBncmFjZWZ1bGx5IGJ1dCBkaWRuJ3QgZW50ZXIgdGhlIGNvbm5lY3Rpb24gaW50byB0aGUgY29ubmVjdGVkIHN0YXRlIVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwQ29ubmVjdGlvbi5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlICE9PSBcIkNvbm5lY3RlZFwiIC8qIENvbm5lY3RlZCAqLykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IHNlbmQgZGF0YSBpZiB0aGUgY29ubmVjdGlvbiBpcyBub3QgaW4gdGhlICdDb25uZWN0ZWQnIFN0YXRlLlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRyYW5zcG9ydCB3aWxsIG5vdCBiZSBudWxsIGlmIHN0YXRlIGlzIGNvbm5lY3RlZFxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKGRhdGEpO1xyXG4gICAgfTtcclxuICAgIEh0dHBDb25uZWN0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUgPT09IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ2FsbCB0byBIdHRwQ29ubmVjdGlvbi5zdG9wKFwiICsgZXJyb3IgKyBcIikgaWdub3JlZCBiZWNhdXNlIHRoZSBjb25uZWN0aW9uIGlzIGFscmVhZHkgaW4gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgUHJvbWlzZS5yZXNvbHZlKCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0aW5nXCIgLyogRGlzY29ubmVjdGluZyAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkNhbGwgdG8gSHR0cENvbm5lY3Rpb24uc3RvcChcIiArIGVycm9yICsgXCIpIGlnbm9yZWQgYmVjYXVzZSB0aGUgY29ubmVjdGlvbiBpcyBhbHJlYWR5IGluIHRoZSBkaXNjb25uZWN0aW5nIHN0YXRlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnN0b3BQcm9taXNlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9IFwiRGlzY29ubmVjdGluZ1wiIC8qIERpc2Nvbm5lY3RpbmcgKi87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgY29tcGxldGUgc3RvcCgpIHVudGlsIHN0b3BDb25uZWN0aW9uKCkgY29tcGxldGVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RvcFByb21pc2VSZXNvbHZlciA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9wSW50ZXJuYWwgc2hvdWxkIG5ldmVyIHRocm93IHNvIGp1c3Qgb2JzZXJ2ZSBpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zdG9wSW50ZXJuYWwoZXJyb3IpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3BJbnRlcm5hbCBzaG91bGQgbmV2ZXIgdGhyb3cgc28ganVzdCBvYnNlcnZlIGl0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc3RvcFByb21pc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBDb25uZWN0aW9uLnByb3RvdHlwZS5zdG9wSW50ZXJuYWwgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlXzEsIGVfMjtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGVycm9yIGFzIHNvb24gYXMgcG9zc2libGUgb3RoZXJ3aXNlIHRoZXJlIGlzIGEgcmFjZSBiZXR3ZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSB0cmFuc3BvcnQgY2xvc2luZyBhbmQgcHJvdmlkaW5nIGFuIGVycm9yIGFuZCB0aGUgZXJyb3IgZnJvbSBhIGNsb3NlIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2Ugd291bGQgcHJlZmVyIHRoZSBjbG9zZSBtZXNzYWdlIGVycm9yLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BFcnJvciA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnN0YXJ0SW50ZXJuYWxQcm9taXNlXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRyYW5zcG9ydCkgcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbNSwgNywgLCA4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMudHJhbnNwb3J0LnN0b3AoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIFwiSHR0cENvbm5lY3Rpb24udHJhbnNwb3J0LnN0b3AoKSB0aHJldyBlcnJvciAnXCIgKyBlXzIgKyBcIicuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BDb25uZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJIdHRwQ29ubmVjdGlvbi50cmFuc3BvcnQgaXMgdW5kZWZpbmVkIGluIEh0dHBDb25uZWN0aW9uLnN0b3AoKSBiZWNhdXNlIHN0YXJ0KCkgZmFpbGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wQ29ubmVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cENvbm5lY3Rpb24ucHJvdG90eXBlLnN0YXJ0SW50ZXJuYWwgPSBmdW5jdGlvbiAodHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmwsIG5lZ290aWF0ZVJlc3BvbnNlLCByZWRpcmVjdHMsIF9sb29wXzEsIHRoaXNfMSwgZV8zO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLmJhc2VVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZXNzVG9rZW5GYWN0b3J5ID0gdGhpcy5vcHRpb25zLmFjY2Vzc1Rva2VuRmFjdG9yeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAxMiwgLCAxM10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5za2lwTmVnb3RpYXRpb24pIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLm9wdGlvbnMudHJhbnNwb3J0ID09PSBIdHRwVHJhbnNwb3J0VHlwZS5XZWJTb2NrZXRzKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gYWRkIGEgY29ubmVjdGlvbiBJRCBpbiB0aGlzIGNhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0aGlzLmNvbnN0cnVjdFRyYW5zcG9ydChIdHRwVHJhbnNwb3J0VHlwZS5XZWJTb2NrZXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGp1c3QgY2FsbCBjb25uZWN0IGRpcmVjdGx5IGluIHRoaXMgY2FzZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gZmFsbGJhY2sgb3IgbmVnb3RpYXRlIGluIHRoaXMgY2FzZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy50cmFuc3BvcnQuY29ubmVjdCh1cmwsIHRyYW5zZmVyRm9ybWF0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBzaG91bGQganVzdCBjYWxsIGNvbm5lY3QgZGlyZWN0bHkgaW4gdGhpcyBjYXNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBmYWxsYmFjayBvciBuZWdvdGlhdGUgaW4gdGhpcyBjYXNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogdGhyb3cgbmV3IEVycm9yKFwiTmVnb3RpYXRpb24gY2FuIG9ubHkgYmUgc2tpcHBlZCB3aGVuIHVzaW5nIHRoZSBXZWJTb2NrZXQgdHJhbnNwb3J0IGRpcmVjdGx5LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ290aWF0ZVJlc3BvbnNlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2xvb3BfMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY2Nlc3NUb2tlbl8xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzXzEuZ2V0TmVnb3RpYXRpb25SZXNwb25zZSh1cmwpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVnb3RpYXRlUmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdXNlciB0cmllcyB0byBzdG9wIHRoZSBjb25uZWN0aW9uIHdoZW4gaXQgaXMgYmVpbmcgc3RhcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNfMS5jb25uZWN0aW9uU3RhdGUgPT09IFwiRGlzY29ubmVjdGluZ1wiIC8qIERpc2Nvbm5lY3RpbmcgKi8gfHwgdGhpc18xLmNvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29ubmVjdGlvbiB3YXMgc3RvcHBlZCBkdXJpbmcgbmVnb3RpYXRpb24uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5lZ290aWF0ZVJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG5lZ290aWF0ZVJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZWdvdGlhdGVSZXNwb25zZS5Qcm90b2NvbFZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEZXRlY3RlZCBhIGNvbm5lY3Rpb24gYXR0ZW1wdCB0byBhbiBBU1AuTkVUIFNpZ25hbFIgU2VydmVyLiBUaGlzIGNsaWVudCBvbmx5IHN1cHBvcnRzIGNvbm5lY3RpbmcgdG8gYW4gQVNQLk5FVCBDb3JlIFNpZ25hbFIgU2VydmVyLiBTZWUgaHR0cHM6Ly9ha2EubXMvc2lnbmFsci1jb3JlLWRpZmZlcmVuY2VzIGZvciBkZXRhaWxzLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZWdvdGlhdGVSZXNwb25zZS51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBuZWdvdGlhdGVSZXNwb25zZS51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmVnb3RpYXRlUmVzcG9uc2UuYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbl8xID0gbmVnb3RpYXRlUmVzcG9uc2UuYWNjZXNzVG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc18xLmFjY2Vzc1Rva2VuRmFjdG9yeSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFjY2Vzc1Rva2VuXzE7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdHMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc18xID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFs1IC8qeWllbGQqKi8sIF9sb29wXzEoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gODtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZWdvdGlhdGVSZXNwb25zZS51cmwgJiYgcmVkaXJlY3RzIDwgTUFYX1JFRElSRUNUUykgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gOTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdHMgPT09IE1BWF9SRURJUkVDVFMgJiYgbmVnb3RpYXRlUmVzcG9uc2UudXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZWdvdGlhdGUgcmVkaXJlY3Rpb24gbGltaXQgZXhjZWVkZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbklkID0gbmVnb3RpYXRlUmVzcG9uc2UuY29ubmVjdGlvbklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNyZWF0ZVRyYW5zcG9ydCh1cmwsIHRoaXMub3B0aW9ucy50cmFuc3BvcnQsIG5lZ290aWF0ZVJlc3BvbnNlLCB0cmFuc2ZlckZvcm1hdCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50cmFuc3BvcnQgaW5zdGFuY2VvZiBMb25nUG9sbGluZ1RyYW5zcG9ydCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcy5pbmhlcmVudEtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQub25yZWNlaXZlID0gdGhpcy5vbnJlY2VpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0Lm9uY2xvc2UgPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuc3RvcENvbm5lY3Rpb24oZSk7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9PT0gXCJDb25uZWN0aW5nIFwiIC8qIENvbm5lY3RpbmcgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuc3VyZSB0aGUgY29ubmVjdGlvbiB0cmFuc2l0aW9ucyB0byB0aGUgY29ubmVjdGVkIHN0YXRlIHByaW9yIHRvIGNvbXBsZXRpbmcgdGhpcy5zdGFydEludGVybmFsUHJvbWlzZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0KCkgd2lsbCBoYW5kbGUgdGhlIGNhc2Ugd2hlbiBzdG9wIHdhcyBjYWxsZWQgYW5kIHN0YXJ0SW50ZXJuYWwgZXhpdHMgc3RpbGwgaW4gdGhlIGRpc2Nvbm5lY3Rpbmcgc3RhdGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiVGhlIEh0dHBDb25uZWN0aW9uIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHkuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUgPSBcIkNvbm5lY3RlZFwiIC8qIENvbm5lY3RlZCAqLztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxM107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZV8zID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIFwiRmFpbGVkIHRvIHN0YXJ0IHRoZSBjb25uZWN0aW9uOiBcIiArIGVfMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXRlID0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgUHJvbWlzZS5yZWplY3QoZV8zKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0TmVnb3RpYXRpb25SZXNwb25zZSA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSwgaGVhZGVycywgdG9rZW4sIG5lZ290aWF0ZVVybCwgcmVzcG9uc2UsIGVfNDtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFjY2Vzc1Rva2VuRmFjdG9yeSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuYWNjZXNzVG9rZW5GYWN0b3J5KCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA9IChfYSA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hW1wiQXV0aG9yaXphdGlvblwiXSA9IFwiQmVhcmVyIFwiICsgdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ290aWF0ZVVybCA9IHRoaXMucmVzb2x2ZU5lZ290aWF0ZVVybCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU2VuZGluZyBuZWdvdGlhdGlvbiByZXF1ZXN0OiBcIiArIG5lZ290aWF0ZVVybCArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFszLCA1LCAsIDZdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5odHRwQ2xpZW50LnBvc3QobmVnb3RpYXRlVXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHN0YXR1cyBjb2RlIHJldHVybmVkIGZyb20gbmVnb3RpYXRlIFwiICsgcmVzcG9uc2Uuc3RhdHVzQ29kZSkpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgSlNPTi5wYXJzZShyZXNwb25zZS5jb250ZW50KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzQgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgXCJGYWlsZWQgdG8gY29tcGxldGUgbmVnb3RpYXRpb24gd2l0aCB0aGUgc2VydmVyOiBcIiArIGVfNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlamVjdChlXzQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cENvbm5lY3Rpb24ucHJvdG90eXBlLmNyZWF0ZUNvbm5lY3RVcmwgPSBmdW5jdGlvbiAodXJsLCBjb25uZWN0aW9uSWQpIHtcclxuICAgICAgICBpZiAoIWNvbm5lY3Rpb25JZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsICsgKHVybC5pbmRleE9mKFwiP1wiKSA9PT0gLTEgPyBcIj9cIiA6IFwiJlwiKSArIChcImlkPVwiICsgY29ubmVjdGlvbklkKTtcclxuICAgIH07XHJcbiAgICBIdHRwQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlVHJhbnNwb3J0ID0gZnVuY3Rpb24gKHVybCwgcmVxdWVzdGVkVHJhbnNwb3J0LCBuZWdvdGlhdGVSZXNwb25zZSwgcmVxdWVzdGVkVHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25uZWN0VXJsLCB0cmFuc3BvcnRFeGNlcHRpb25zLCB0cmFuc3BvcnRzLCBfaSwgdHJhbnNwb3J0c18xLCBlbmRwb2ludCwgdHJhbnNwb3J0LCBleF8xLCBtZXNzYWdlO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0VXJsID0gdGhpcy5jcmVhdGVDb25uZWN0VXJsKHVybCwgbmVnb3RpYXRlUmVzcG9uc2UuY29ubmVjdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSVRyYW5zcG9ydChyZXF1ZXN0ZWRUcmFuc3BvcnQpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkNvbm5lY3Rpb24gd2FzIHByb3ZpZGVkIGFuIGluc3RhbmNlIG9mIElUcmFuc3BvcnQsIHVzaW5nIHRoYXQgZGlyZWN0bHkuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHJlcXVlc3RlZFRyYW5zcG9ydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy50cmFuc3BvcnQuY29ubmVjdChjb25uZWN0VXJsLCByZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnRFeGNlcHRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydHMgPSBuZWdvdGlhdGVSZXNwb25zZS5hdmFpbGFibGVUcmFuc3BvcnRzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaSA9IDAsIHRyYW5zcG9ydHNfMSA9IHRyYW5zcG9ydHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9pIDwgdHJhbnNwb3J0c18xLmxlbmd0aCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQgPSB0cmFuc3BvcnRzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzQsIDksICwgMTBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0ID0gdGhpcy5yZXNvbHZlVHJhbnNwb3J0KGVuZHBvaW50LCByZXF1ZXN0ZWRUcmFuc3BvcnQsIHJlcXVlc3RlZFRyYW5zZmVyRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodHlwZW9mIHRyYW5zcG9ydCA9PT0gXCJudW1iZXJcIikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRoaXMuY29uc3RydWN0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIW5lZ290aWF0ZVJlc3BvbnNlLmNvbm5lY3Rpb25JZCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0TmVnb3RpYXRpb25SZXNwb25zZSh1cmwpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ290aWF0ZVJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0VXJsID0gdGhpcy5jcmVhdGVDb25uZWN0VXJsKHVybCwgbmVnb3RpYXRlUmVzcG9uc2UuY29ubmVjdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy50cmFuc3BvcnQuY29ubmVjdChjb25uZWN0VXJsLCByZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzMgLypicmVhayovLCAxMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleF8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIFwiRmFpbGVkIHRvIHN0YXJ0IHRoZSB0cmFuc3BvcnQgJ1wiICsgZW5kcG9pbnQudHJhbnNwb3J0ICsgXCInOiBcIiArIGV4XzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdvdGlhdGVSZXNwb25zZS5jb25uZWN0aW9uSWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydEV4Y2VwdGlvbnMucHVzaChlbmRwb2ludC50cmFuc3BvcnQgKyBcIiBmYWlsZWQ6IFwiICsgZXhfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0ZSAhPT0gXCJDb25uZWN0aW5nIFwiIC8qIENvbm5lY3RpbmcgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkZhaWxlZCB0byBzZWxlY3QgdHJhbnNwb3J0IGJlZm9yZSBzdG9wKCkgd2FzIGNhbGxlZC5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc3BvcnRFeGNlcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgc2VydmVyIHdpdGggYW55IG9mIHRoZSBhdmFpbGFibGUgdHJhbnNwb3J0cy4gXCIgKyB0cmFuc3BvcnRFeGNlcHRpb25zLmpvaW4oXCIgXCIpKSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJOb25lIG9mIHRoZSB0cmFuc3BvcnRzIHN1cHBvcnRlZCBieSB0aGUgY2xpZW50IGFyZSBzdXBwb3J0ZWQgYnkgdGhlIHNlcnZlci5cIikpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cENvbm5lY3Rpb24ucHJvdG90eXBlLmNvbnN0cnVjdFRyYW5zcG9ydCA9IGZ1bmN0aW9uICh0cmFuc3BvcnQpIHtcclxuICAgICAgICBzd2l0Y2ggKHRyYW5zcG9ydCkge1xyXG4gICAgICAgICAgICBjYXNlIEh0dHBUcmFuc3BvcnRUeXBlLldlYlNvY2tldHM6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5XZWJTb2NrZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInV2ViU29ja2V0JyBpcyBub3Qgc3VwcG9ydGVkIGluIHlvdXIgZW52aXJvbm1lbnQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJTb2NrZXRUcmFuc3BvcnQodGhpcy5odHRwQ2xpZW50LCB0aGlzLmFjY2Vzc1Rva2VuRmFjdG9yeSwgdGhpcy5sb2dnZXIsIHRoaXMub3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudCB8fCBmYWxzZSwgdGhpcy5vcHRpb25zLldlYlNvY2tldCk7XHJcbiAgICAgICAgICAgIGNhc2UgSHR0cFRyYW5zcG9ydFR5cGUuU2VydmVyU2VudEV2ZW50czpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLkV2ZW50U291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ0V2ZW50U291cmNlJyBpcyBub3Qgc3VwcG9ydGVkIGluIHlvdXIgZW52aXJvbm1lbnQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0KHRoaXMuaHR0cENsaWVudCwgdGhpcy5hY2Nlc3NUb2tlbkZhY3RvcnksIHRoaXMubG9nZ2VyLCB0aGlzLm9wdGlvbnMubG9nTWVzc2FnZUNvbnRlbnQgfHwgZmFsc2UsIHRoaXMub3B0aW9ucy5FdmVudFNvdXJjZSk7XHJcbiAgICAgICAgICAgIGNhc2UgSHR0cFRyYW5zcG9ydFR5cGUuTG9uZ1BvbGxpbmc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExvbmdQb2xsaW5nVHJhbnNwb3J0KHRoaXMuaHR0cENsaWVudCwgdGhpcy5hY2Nlc3NUb2tlbkZhY3RvcnksIHRoaXMubG9nZ2VyLCB0aGlzLm9wdGlvbnMubG9nTWVzc2FnZUNvbnRlbnQgfHwgZmFsc2UpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biB0cmFuc3BvcnQ6IFwiICsgdHJhbnNwb3J0ICsgXCIuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBIdHRwQ29ubmVjdGlvbi5wcm90b3R5cGUucmVzb2x2ZVRyYW5zcG9ydCA9IGZ1bmN0aW9uIChlbmRwb2ludCwgcmVxdWVzdGVkVHJhbnNwb3J0LCByZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIHZhciB0cmFuc3BvcnQgPSBIdHRwVHJhbnNwb3J0VHlwZVtlbmRwb2ludC50cmFuc3BvcnRdO1xyXG4gICAgICAgIGlmICh0cmFuc3BvcnQgPT09IG51bGwgfHwgdHJhbnNwb3J0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIlNraXBwaW5nIHRyYW5zcG9ydCAnXCIgKyBlbmRwb2ludC50cmFuc3BvcnQgKyBcIicgYmVjYXVzZSBpdCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgY2xpZW50LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2ZlckZvcm1hdHMgPSBlbmRwb2ludC50cmFuc2ZlckZvcm1hdHMubWFwKGZ1bmN0aW9uIChzKSB7IHJldHVybiBUcmFuc2ZlckZvcm1hdFtzXTsgfSk7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc3BvcnRNYXRjaGVzKHJlcXVlc3RlZFRyYW5zcG9ydCwgdHJhbnNwb3J0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zZmVyRm9ybWF0cy5pbmRleE9mKHJlcXVlc3RlZFRyYW5zZmVyRm9ybWF0KSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0cmFuc3BvcnQgPT09IEh0dHBUcmFuc3BvcnRUeXBlLldlYlNvY2tldHMgJiYgIXRoaXMub3B0aW9ucy5XZWJTb2NrZXQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0cmFuc3BvcnQgPT09IEh0dHBUcmFuc3BvcnRUeXBlLlNlcnZlclNlbnRFdmVudHMgJiYgIXRoaXMub3B0aW9ucy5FdmVudFNvdXJjZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIlNraXBwaW5nIHRyYW5zcG9ydCAnXCIgKyBIdHRwVHJhbnNwb3J0VHlwZVt0cmFuc3BvcnRdICsgXCInIGJlY2F1c2UgaXQgaXMgbm90IHN1cHBvcnRlZCBpbiB5b3VyIGVudmlyb25tZW50LidcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidcIiArIEh0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF0gKyBcIicgaXMgbm90IHN1cHBvcnRlZCBpbiB5b3VyIGVudmlyb25tZW50LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJTZWxlY3RpbmcgdHJhbnNwb3J0ICdcIiArIEh0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF0gKyBcIicuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwb3J0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJTa2lwcGluZyB0cmFuc3BvcnQgJ1wiICsgSHR0cFRyYW5zcG9ydFR5cGVbdHJhbnNwb3J0XSArIFwiJyBiZWNhdXNlIGl0IGRvZXMgbm90IHN1cHBvcnQgdGhlIHJlcXVlc3RlZCB0cmFuc2ZlciBmb3JtYXQgJ1wiICsgVHJhbnNmZXJGb3JtYXRbcmVxdWVzdGVkVHJhbnNmZXJGb3JtYXRdICsgXCInLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInXCIgKyBIdHRwVHJhbnNwb3J0VHlwZVt0cmFuc3BvcnRdICsgXCInIGRvZXMgbm90IHN1cHBvcnQgXCIgKyBUcmFuc2ZlckZvcm1hdFtyZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdF0gKyBcIi5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU2tpcHBpbmcgdHJhbnNwb3J0ICdcIiArIEh0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF0gKyBcIicgYmVjYXVzZSBpdCB3YXMgZGlzYWJsZWQgYnkgdGhlIGNsaWVudC5cIik7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInXCIgKyBIdHRwVHJhbnNwb3J0VHlwZVt0cmFuc3BvcnRdICsgXCInIGlzIGRpc2FibGVkIGJ5IHRoZSBjbGllbnQuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIEh0dHBDb25uZWN0aW9uLnByb3RvdHlwZS5pc0lUcmFuc3BvcnQgPSBmdW5jdGlvbiAodHJhbnNwb3J0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zcG9ydCAmJiB0eXBlb2YgKHRyYW5zcG9ydCkgPT09IFwib2JqZWN0XCIgJiYgXCJjb25uZWN0XCIgaW4gdHJhbnNwb3J0O1xyXG4gICAgfTtcclxuICAgIEh0dHBDb25uZWN0aW9uLnByb3RvdHlwZS5zdG9wQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJIdHRwQ29ubmVjdGlvbi5zdG9wQ29ubmVjdGlvbihcIiArIGVycm9yICsgXCIpIGNhbGxlZCB3aGlsZSBpbiBzdGF0ZSBcIiArIHRoaXMuY29ubmVjdGlvblN0YXRlICsgXCIuXCIpO1xyXG4gICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSBzdG9wRXJyb3IsIGl0IHRha2VzIHByZWNlZGVuY2Ugb3ZlciB0aGUgZXJyb3IgZnJvbSB0aGUgdHJhbnNwb3J0XHJcbiAgICAgICAgZXJyb3IgPSB0aGlzLnN0b3BFcnJvciB8fCBlcnJvcjtcclxuICAgICAgICB0aGlzLnN0b3BFcnJvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUgPT09IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJDYWxsIHRvIEh0dHBDb25uZWN0aW9uLnN0b3BDb25uZWN0aW9uKFwiICsgZXJyb3IgKyBcIikgd2FzIGlnbm9yZWQgYmVjYXVzZSB0aGUgY29ubmVjdGlvbiBpcyBhbHJlYWR5IGluIHRoZSBkaXNjb25uZWN0ZWQgc3RhdGUuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9PT0gXCJDb25uZWN0aW5nIFwiIC8qIENvbm5lY3RpbmcgKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIFwiQ2FsbCB0byBIdHRwQ29ubmVjdGlvbi5zdG9wQ29ubmVjdGlvbihcIiArIGVycm9yICsgXCIpIHdhcyBpZ25vcmVkIGJlY2F1c2UgdGhlIGNvbm5lY3Rpb24gaGFzbid0IHlldCBsZWZ0IHRoZSBpbiB0aGUgY29ubmVjdGluZyBzdGF0ZS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlID09PSBcIkRpc2Nvbm5lY3RpbmdcIiAvKiBEaXNjb25uZWN0aW5nICovKSB7XHJcbiAgICAgICAgICAgIC8vIEEgY2FsbCB0byBzdG9wKCkgaW5kdWNlZCB0aGlzIGNhbGwgdG8gc3RvcENvbm5lY3Rpb24gYW5kIG5lZWRzIHRvIGJlIGNvbXBsZXRlZC5cclxuICAgICAgICAgICAgLy8gQW55IHN0b3AoKSBhd2FpdGVycyB3aWxsIGJlIHNjaGVkdWxlZCB0byBjb250aW51ZSBhZnRlciB0aGUgb25jbG9zZSBjYWxsYmFjayBmaXJlcy5cclxuICAgICAgICAgICAgdGhpcy5zdG9wUHJvbWlzZVJlc29sdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIFwiQ29ubmVjdGlvbiBkaXNjb25uZWN0ZWQgd2l0aCBlcnJvciAnXCIgKyBlcnJvciArIFwiJy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiQ29ubmVjdGlvbiBkaXNjb25uZWN0ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25JZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovO1xyXG4gICAgICAgIGlmICh0aGlzLm9uY2xvc2UgJiYgdGhpcy5jb25uZWN0aW9uU3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2xvc2UoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIFwiSHR0cENvbm5lY3Rpb24ub25jbG9zZShcIiArIGVycm9yICsgXCIpIHRocmV3IGVycm9yICdcIiArIGUgKyBcIicuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEh0dHBDb25uZWN0aW9uLnByb3RvdHlwZS5yZXNvbHZlVXJsID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIC8vIHN0YXJ0c1dpdGggaXMgbm90IHN1cHBvcnRlZCBpbiBJRVxyXG4gICAgICAgIGlmICh1cmwubGFzdEluZGV4T2YoXCJodHRwczovL1wiLCAwKSA9PT0gMCB8fCB1cmwubGFzdEluZGV4T2YoXCJodHRwOi8vXCIsIDApID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyIHx8ICF3aW5kb3cuZG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlc29sdmUgJ1wiICsgdXJsICsgXCInLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2V0dGluZyB0aGUgdXJsIHRvIHRoZSBocmVmIHByb3Blcnkgb2YgYW4gYW5jaG9yIHRhZyBoYW5kbGVzIG5vcm1hbGl6YXRpb25cclxuICAgICAgICAvLyBmb3IgdXMuIFRoZXJlIGFyZSAzIG1haW4gY2FzZXMuXHJcbiAgICAgICAgLy8gMS4gUmVsYXRpdmUgIHBhdGggbm9ybWFsaXphdGlvbiBlLmcgXCJiXCIgLT4gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYS9iXCJcclxuICAgICAgICAvLyAyLiBBYnNvbHV0ZSBwYXRoIG5vcm1hbGl6YXRpb24gZS5nIFwiL2EvYlwiIC0+IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2EvYlwiXHJcbiAgICAgICAgLy8gMy4gTmV0d29ya3BhdGggcmVmZXJlbmNlIG5vcm1hbGl6YXRpb24gZS5nIFwiLy9sb2NhbGhvc3Q6NTAwMC9hL2JcIiAtPiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hL2JcIlxyXG4gICAgICAgIHZhciBhVGFnID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGFUYWcuaHJlZiA9IHVybDtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiTm9ybWFsaXppbmcgJ1wiICsgdXJsICsgXCInIHRvICdcIiArIGFUYWcuaHJlZiArIFwiJy5cIik7XHJcbiAgICAgICAgcmV0dXJuIGFUYWcuaHJlZjtcclxuICAgIH07XHJcbiAgICBIdHRwQ29ubmVjdGlvbi5wcm90b3R5cGUucmVzb2x2ZU5lZ290aWF0ZVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB1cmwuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgdmFyIG5lZ290aWF0ZVVybCA9IHVybC5zdWJzdHJpbmcoMCwgaW5kZXggPT09IC0xID8gdXJsLmxlbmd0aCA6IGluZGV4KTtcclxuICAgICAgICBpZiAobmVnb3RpYXRlVXJsW25lZ290aWF0ZVVybC5sZW5ndGggLSAxXSAhPT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgbmVnb3RpYXRlVXJsICs9IFwiL1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZWdvdGlhdGVVcmwgKz0gXCJuZWdvdGlhdGVcIjtcclxuICAgICAgICBuZWdvdGlhdGVVcmwgKz0gaW5kZXggPT09IC0xID8gXCJcIiA6IHVybC5zdWJzdHJpbmcoaW5kZXgpO1xyXG4gICAgICAgIHJldHVybiBuZWdvdGlhdGVVcmw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEh0dHBDb25uZWN0aW9uO1xyXG59KCkpO1xyXG5leHBvcnQgeyBIdHRwQ29ubmVjdGlvbiB9O1xyXG5mdW5jdGlvbiB0cmFuc3BvcnRNYXRjaGVzKHJlcXVlc3RlZFRyYW5zcG9ydCwgYWN0dWFsVHJhbnNwb3J0KSB7XHJcbiAgICByZXR1cm4gIXJlcXVlc3RlZFRyYW5zcG9ydCB8fCAoKGFjdHVhbFRyYW5zcG9ydCAmIHJlcXVlc3RlZFRyYW5zcG9ydCkgIT09IDApO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUh0dHBDb25uZWN0aW9uLmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5pbXBvcnQgeyBIYW5kc2hha2VQcm90b2NvbCB9IGZyb20gXCIuL0hhbmRzaGFrZVByb3RvY29sXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VUeXBlIH0gZnJvbSBcIi4vSUh1YlByb3RvY29sXCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcIi4vU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBBcmcgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG52YXIgREVGQVVMVF9USU1FT1VUX0lOX01TID0gMzAgKiAxMDAwO1xyXG52YXIgREVGQVVMVF9QSU5HX0lOVEVSVkFMX0lOX01TID0gMTUgKiAxMDAwO1xyXG4vKiogRGVzY3JpYmVzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSB7QGxpbmsgSHViQ29ubmVjdGlvbn0gdG8gdGhlIHNlcnZlci4gKi9cclxuZXhwb3J0IHZhciBIdWJDb25uZWN0aW9uU3RhdGU7XHJcbihmdW5jdGlvbiAoSHViQ29ubmVjdGlvblN0YXRlKSB7XHJcbiAgICAvKiogVGhlIGh1YiBjb25uZWN0aW9uIGlzIGRpc2Nvbm5lY3RlZC4gKi9cclxuICAgIEh1YkNvbm5lY3Rpb25TdGF0ZVtcIkRpc2Nvbm5lY3RlZFwiXSA9IFwiRGlzY29ubmVjdGVkXCI7XHJcbiAgICAvKiogVGhlIGh1YiBjb25uZWN0aW9uIGlzIGNvbm5lY3RpbmcuICovXHJcbiAgICBIdWJDb25uZWN0aW9uU3RhdGVbXCJDb25uZWN0aW5nXCJdID0gXCJDb25uZWN0aW5nXCI7XHJcbiAgICAvKiogVGhlIGh1YiBjb25uZWN0aW9uIGlzIGNvbm5lY3RlZC4gKi9cclxuICAgIEh1YkNvbm5lY3Rpb25TdGF0ZVtcIkNvbm5lY3RlZFwiXSA9IFwiQ29ubmVjdGVkXCI7XHJcbiAgICAvKiogVGhlIGh1YiBjb25uZWN0aW9uIGlzIGRpc2Nvbm5lY3RpbmcuICovXHJcbiAgICBIdWJDb25uZWN0aW9uU3RhdGVbXCJEaXNjb25uZWN0aW5nXCJdID0gXCJEaXNjb25uZWN0aW5nXCI7XHJcbiAgICAvKiogVGhlIGh1YiBjb25uZWN0aW9uIGlzIHJlY29ubmVjdGluZy4gKi9cclxuICAgIEh1YkNvbm5lY3Rpb25TdGF0ZVtcIlJlY29ubmVjdGluZ1wiXSA9IFwiUmVjb25uZWN0aW5nXCI7XHJcbn0pKEh1YkNvbm5lY3Rpb25TdGF0ZSB8fCAoSHViQ29ubmVjdGlvblN0YXRlID0ge30pKTtcclxuLyoqIFJlcHJlc2VudHMgYSBjb25uZWN0aW9uIHRvIGEgU2lnbmFsUiBIdWIuICovXHJcbnZhciBIdWJDb25uZWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSHViQ29ubmVjdGlvbihjb25uZWN0aW9uLCBsb2dnZXIsIHByb3RvY29sLCByZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKGNvbm5lY3Rpb24sIFwiY29ubmVjdGlvblwiKTtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZChsb2dnZXIsIFwibG9nZ2VyXCIpO1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHByb3RvY29sLCBcInByb3RvY29sXCIpO1xyXG4gICAgICAgIHRoaXMuc2VydmVyVGltZW91dEluTWlsbGlzZWNvbmRzID0gREVGQVVMVF9USU1FT1VUX0lOX01TO1xyXG4gICAgICAgIHRoaXMua2VlcEFsaXZlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyA9IERFRkFVTFRfUElOR19JTlRFUlZBTF9JTl9NUztcclxuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICB0aGlzLnByb3RvY29sID0gcHJvdG9jb2w7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gY29ubmVjdGlvbjtcclxuICAgICAgICB0aGlzLnJlY29ubmVjdFBvbGljeSA9IHJlY29ubmVjdFBvbGljeTtcclxuICAgICAgICB0aGlzLmhhbmRzaGFrZVByb3RvY29sID0gbmV3IEhhbmRzaGFrZVByb3RvY29sKCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9ucmVjZWl2ZSA9IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBfdGhpcy5wcm9jZXNzSW5jb21pbmdEYXRhKGRhdGEpOyB9O1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbmNsb3NlID0gZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBfdGhpcy5jb25uZWN0aW9uQ2xvc2VkKGVycm9yKTsgfTtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IHt9O1xyXG4gICAgICAgIHRoaXMubWV0aG9kcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuY2xvc2VkQ2FsbGJhY2tzID0gW107XHJcbiAgICAgICAgdGhpcy5yZWNvbm5lY3RpbmdDYWxsYmFja3MgPSBbXTtcclxuICAgICAgICB0aGlzLnJlY29ubmVjdGVkQ2FsbGJhY2tzID0gW107XHJcbiAgICAgICAgdGhpcy5pbnZvY2F0aW9uSWQgPSAwO1xyXG4gICAgICAgIHRoaXMucmVjZWl2ZWRIYW5kc2hha2VSZXNwb25zZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXRlID0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RlZDtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYWNoZWRQaW5nTWVzc2FnZSA9IHRoaXMucHJvdG9jb2wud3JpdGVNZXNzYWdlKHsgdHlwZTogTWVzc2FnZVR5cGUuUGluZyB9KTtcclxuICAgIH1cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIC8vIFVzaW5nIGEgcHVibGljIHN0YXRpYyBmYWN0b3J5IG1ldGhvZCBtZWFucyB3ZSBjYW4gaGF2ZSBhIHByaXZhdGUgY29uc3RydWN0b3IgYW5kIGFuIF9pbnRlcm5hbF9cclxuICAgIC8vIGNyZWF0ZSBtZXRob2QgdGhhdCBjYW4gYmUgdXNlZCBieSBIdWJDb25uZWN0aW9uQnVpbGRlci4gQW4gXCJpbnRlcm5hbFwiIGNvbnN0cnVjdG9yIHdvdWxkIGp1c3RcclxuICAgIC8vIGJlIHN0cmlwcGVkIGF3YXkgYW5kIHRoZSAnLmQudHMnIGZpbGUgd291bGQgaGF2ZSBubyBjb25zdHJ1Y3Rvciwgd2hpY2ggaXMgaW50ZXJwcmV0ZWQgYXMgYVxyXG4gICAgLy8gcHVibGljIHBhcmFtZXRlci1sZXNzIGNvbnN0cnVjdG9yLlxyXG4gICAgSHViQ29ubmVjdGlvbi5jcmVhdGUgPSBmdW5jdGlvbiAoY29ubmVjdGlvbiwgbG9nZ2VyLCBwcm90b2NvbCwgcmVjb25uZWN0UG9saWN5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIdWJDb25uZWN0aW9uKGNvbm5lY3Rpb24sIGxvZ2dlciwgcHJvdG9jb2wsIHJlY29ubmVjdFBvbGljeSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLCBcInN0YXRlXCIsIHtcclxuICAgICAgICAvKiogSW5kaWNhdGVzIHRoZSBzdGF0ZSBvZiB0aGUge0BsaW5rIEh1YkNvbm5lY3Rpb259IHRvIHRoZSBzZXJ2ZXIuICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25TdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIdWJDb25uZWN0aW9uLnByb3RvdHlwZSwgXCJjb25uZWN0aW9uSWRcIiwge1xyXG4gICAgICAgIC8qKiBSZXByZXNlbnRzIHRoZSBjb25uZWN0aW9uIGlkIG9mIHRoZSB7QGxpbmsgSHViQ29ubmVjdGlvbn0gb24gdGhlIHNlcnZlci4gVGhlIGNvbm5lY3Rpb24gaWQgd2lsbCBiZSBudWxsIHdoZW4gdGhlIGNvbm5lY3Rpb24gaXMgZWl0aGVyXHJcbiAgICAgICAgICogIGluIHRoZSBkaXNjb25uZWN0ZWQgc3RhdGUgb3IgaWYgdGhlIG5lZ290aWF0aW9uIHN0ZXAgd2FzIHNraXBwZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24gPyAodGhpcy5jb25uZWN0aW9uLmNvbm5lY3Rpb25JZCB8fCBudWxsKSA6IG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKiogU3RhcnRzIHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBjb25uZWN0aW9uIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBlc3RhYmxpc2hlZCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UHJvbWlzZSA9IHRoaXMuc3RhcnRXaXRoU3RhdGVUcmFuc2l0aW9ucygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0UHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5zdGFydFdpdGhTdGF0ZVRyYW5zaXRpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVfMTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlICE9PSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IHN0YXJ0IGEgSHViQ29ubmVjdGlvbiB0aGF0IGlzIG5vdCBpbiB0aGUgJ0Rpc2Nvbm5lY3RlZCcgc3RhdGUuXCIpKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIlN0YXJ0aW5nIEh1YkNvbm5lY3Rpb24uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnN0YXJ0SW50ZXJuYWwoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXRlID0gSHViQ29ubmVjdGlvblN0YXRlLkNvbm5lY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJIdWJDb25uZWN0aW9uIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHkuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiSHViQ29ubmVjdGlvbiBmYWlsZWQgdG8gc3RhcnQgc3VjY2Vzc2Z1bGx5IGJlY2F1c2Ugb2YgZXJyb3IgJ1wiICsgZV8xICsgXCInLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVqZWN0KGVfMSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5zdGFydEludGVybmFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGhhbmRzaGFrZVByb21pc2UsIGhhbmRzaGFrZVJlcXVlc3QsIGVfMjtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wRHVyaW5nU3RhcnRFcnJvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlZEhhbmRzaGFrZVJlc3BvbnNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRzaGFrZVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kc2hha2VSZXNvbHZlciA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kc2hha2VSZWplY3RlciA9IHJlamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY29ubmVjdGlvbi5zdGFydCh0aGlzLnByb3RvY29sLnRyYW5zZmVyRm9ybWF0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMiwgNSwgLCA3XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRzaGFrZVJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90b2NvbDogdGhpcy5wcm90b2NvbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogdGhpcy5wcm90b2NvbC52ZXJzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU2VuZGluZyBoYW5kc2hha2UgcmVxdWVzdC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2VuZE1lc3NhZ2UodGhpcy5oYW5kc2hha2VQcm90b2NvbC53cml0ZUhhbmRzaGFrZVJlcXVlc3QoaGFuZHNoYWtlUmVxdWVzdCkpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBcIlVzaW5nIEh1YlByb3RvY29sICdcIiArIHRoaXMucHJvdG9jb2wubmFtZSArIFwiJy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlZmVuc2l2ZWx5IGNsZWFudXAgdGltZW91dCBpbiBjYXNlIHdlIHJlY2VpdmUgYSBtZXNzYWdlIGZyb20gdGhlIHNlcnZlciBiZWZvcmUgd2UgZmluaXNoIHN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYW51cFRpbWVvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFRpbWVvdXRQZXJpb2QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEtlZXBBbGl2ZUludGVydmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGhhbmRzaGFrZVByb21pc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIGltcG9ydGFudCB0byBjaGVjayB0aGUgc3RvcER1cmluZ1N0YXJ0RXJyb3IgaW5zdGVhZCBvZiBqdXN0IHJlbHlpbmcgb24gdGhlIGhhbmRzaGFrZVByb21pc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmVpbmcgcmVqZWN0ZWQgb24gY2xvc2UsIGJlY2F1c2UgdGhpcyBjb250aW51YXRpb24gY2FuIHJ1biBhZnRlciBib3RoIHRoZSBoYW5kc2hha2UgY29tcGxldGVkIHN1Y2Nlc3NmdWxseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhlIGNvbm5lY3Rpb24gd2FzIGNsb3NlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcER1cmluZ1N0YXJ0RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIHRocm93IGluc3RlYWQgb2YgcmV0dXJuaW5nIGEgcmVqZWN0ZWQgcHJvbWlzZSwgYmVjYXVzZSB3ZSBkb24ndCB3YW50IHRvIGFsbG93IGFueSBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNpdGlvbnMgdG8gb2NjdXIgYmV0d2VlbiBub3cgYW5kIHRoZSBjYWxsaW5nIGNvZGUgb2JzZXJ2aW5nIHRoZSBleGNlcHRpb25zLiBSZXR1cm5pbmcgYSByZWplY3RlZCBwcm9taXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWxsIGNhdXNlIHRoZSBjYWxsaW5nIGNvbnRpbnVhdGlvbiB0byBnZXQgc2NoZWR1bGVkIHRvIHJ1biBsYXRlci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHRoaXMuc3RvcER1cmluZ1N0YXJ0RXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJIdWIgaGFuZHNoYWtlIGZhaWxlZCB3aXRoIGVycm9yICdcIiArIGVfMiArIFwiJyBkdXJpbmcgc3RhcnQoKS4gU3RvcHBpbmcgSHViQ29ubmVjdGlvbi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYW51cFRpbWVvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhbnVwUGluZ1RpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEh0dHBDb25uZWN0aW9uLnN0b3AoKSBzaG91bGQgbm90IGNvbXBsZXRlIHVudGlsIGFmdGVyIHRoZSBvbmNsb3NlIGNhbGxiYWNrIGlzIGludm9rZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCB0cmFuc2l0aW9uIHRoZSBIdWJDb25uZWN0aW9uIHRvIHRoZSBkaXNjb25uZWN0ZWQgc3RhdGUgYmVmb3JlIEh0dHBDb25uZWN0aW9uLnN0b3AoKSBjb21wbGV0ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY29ubmVjdGlvbi5zdG9wKGVfMildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSHR0cENvbm5lY3Rpb24uc3RvcCgpIHNob3VsZCBub3QgY29tcGxldGUgdW50aWwgYWZ0ZXIgdGhlIG9uY2xvc2UgY2FsbGJhY2sgaXMgaW52b2tlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHRyYW5zaXRpb24gdGhlIEh1YkNvbm5lY3Rpb24gdG8gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZSBiZWZvcmUgSHR0cENvbm5lY3Rpb24uc3RvcCgpIGNvbXBsZXRlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBTdG9wcyB0aGUgY29ubmVjdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgY29ubmVjdGlvbiBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdGVybWluYXRlZCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0UHJvbWlzZSwgZV8zO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFByb21pc2UgPSB0aGlzLnN0YXJ0UHJvbWlzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wUHJvbWlzZSA9IHRoaXMuc3RvcEludGVybmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc3RvcFByb21pc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzIsIDQsICwgNV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBd2FpdGluZyB1bmRlZmluZWQgY29udGludWVzIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHN0YXJ0UHJvbWlzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBd2FpdGluZyB1bmRlZmluZWQgY29udGludWVzIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5zdG9wSW50ZXJuYWwgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkNhbGwgdG8gSHViQ29ubmVjdGlvbi5zdG9wKFwiICsgZXJyb3IgKyBcIikgaWdub3JlZCBiZWNhdXNlIGl0IGlzIGFscmVhZHkgaW4gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlID09PSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ2FsbCB0byBIdHRwQ29ubmVjdGlvbi5zdG9wKFwiICsgZXJyb3IgKyBcIikgaWdub3JlZCBiZWNhdXNlIHRoZSBjb25uZWN0aW9uIGlzIGFscmVhZHkgaW4gdGhlIGRpc2Nvbm5lY3Rpbmcgc3RhdGUuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9wUHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGluZztcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU3RvcHBpbmcgSHViQ29ubmVjdGlvbi5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMucmVjb25uZWN0RGVsYXlIYW5kbGUpIHtcclxuICAgICAgICAgICAgLy8gV2UncmUgaW4gYSByZWNvbm5lY3QgZGVsYXkgd2hpY2ggbWVhbnMgdGhlIHVuZGVybHlpbmcgY29ubmVjdGlvbiBpcyBjdXJyZW50bHkgYWxyZWFkeSBzdG9wcGVkLlxyXG4gICAgICAgICAgICAvLyBKdXN0IGNsZWFyIHRoZSBoYW5kbGUgdG8gc3RvcCB0aGUgcmVjb25uZWN0IGxvb3AgKHdoaWNoIG5vIG9uZSBpcyB3YWl0aW5nIG9uIHRoYW5rZnVsbHkpIGFuZFxyXG4gICAgICAgICAgICAvLyBmaXJlIHRoZSBvbmNsb3NlIGNhbGxiYWNrcy5cclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkNvbm5lY3Rpb24gc3RvcHBlZCBkdXJpbmcgcmVjb25uZWN0IGRlbGF5LiBEb25lIHJlY29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlY29ubmVjdERlbGF5SGFuZGxlKTtcclxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3REZWxheUhhbmRsZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUNsb3NlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwVGltZW91dCgpO1xyXG4gICAgICAgIHRoaXMuY2xlYW51cFBpbmdUaW1lcigpO1xyXG4gICAgICAgIHRoaXMuc3RvcER1cmluZ1N0YXJ0RXJyb3IgPSBlcnJvciB8fCBuZXcgRXJyb3IoXCJUaGUgY29ubmVjdGlvbiB3YXMgc3RvcHBlZCBiZWZvcmUgdGhlIGh1YiBoYW5kc2hha2UgY291bGQgY29tcGxldGUuXCIpO1xyXG4gICAgICAgIC8vIEh0dHBDb25uZWN0aW9uLnN0b3AoKSBzaG91bGQgbm90IGNvbXBsZXRlIHVudGlsIGFmdGVyIGVpdGhlciBIdHRwQ29ubmVjdGlvbi5zdGFydCgpIGZhaWxzXHJcbiAgICAgICAgLy8gb3IgdGhlIG9uY2xvc2UgY2FsbGJhY2sgaXMgaW52b2tlZC4gVGhlIG9uY2xvc2UgY2FsbGJhY2sgd2lsbCB0cmFuc2l0aW9uIHRoZSBIdWJDb25uZWN0aW9uXHJcbiAgICAgICAgLy8gdG8gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZSBpZiBuZWVkIGJlIGJlZm9yZSBIdHRwQ29ubmVjdGlvbi5zdG9wKCkgY29tcGxldGVzLlxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24uc3RvcChlcnJvcik7XHJcbiAgICB9O1xyXG4gICAgLyoqIEludm9rZXMgYSBzdHJlYW1pbmcgaHViIG1ldGhvZCBvbiB0aGUgc2VydmVyIHVzaW5nIHRoZSBzcGVjaWZpZWQgbmFtZSBhbmQgYXJndW1lbnRzLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlcGFyYW0gVCBUaGUgdHlwZSBvZiB0aGUgaXRlbXMgcmV0dXJuZWQgYnkgdGhlIHNlcnZlci5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIFRoZSBuYW1lIG9mIHRoZSBzZXJ2ZXIgbWV0aG9kIHRvIGludm9rZS5cclxuICAgICAqIEBwYXJhbSB7YW55W119IGFyZ3MgVGhlIGFyZ3VtZW50cyB1c2VkIHRvIGludm9rZSB0aGUgc2VydmVyIG1ldGhvZC5cclxuICAgICAqIEByZXR1cm5zIHtJU3RyZWFtUmVzdWx0PFQ+fSBBbiBvYmplY3QgdGhhdCB5aWVsZHMgcmVzdWx0cyBmcm9tIHRoZSBzZXJ2ZXIgYXMgdGhleSBhcmUgcmVjZWl2ZWQuXHJcbiAgICAgKi9cclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLnN0cmVhbSA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfYSA9IHRoaXMucmVwbGFjZVN0cmVhbWluZ1BhcmFtcyhhcmdzKSwgc3RyZWFtcyA9IF9hWzBdLCBzdHJlYW1JZHMgPSBfYVsxXTtcclxuICAgICAgICB2YXIgaW52b2NhdGlvbkRlc2NyaXB0b3IgPSB0aGlzLmNyZWF0ZVN0cmVhbUludm9jYXRpb24obWV0aG9kTmFtZSwgYXJncywgc3RyZWFtSWRzKTtcclxuICAgICAgICB2YXIgcHJvbWlzZVF1ZXVlO1xyXG4gICAgICAgIHZhciBzdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcclxuICAgICAgICBzdWJqZWN0LmNhbmNlbENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY2FuY2VsSW52b2NhdGlvbiA9IF90aGlzLmNyZWF0ZUNhbmNlbEludm9jYXRpb24oaW52b2NhdGlvbkRlc2NyaXB0b3IuaW52b2NhdGlvbklkKTtcclxuICAgICAgICAgICAgZGVsZXRlIF90aGlzLmNhbGxiYWNrc1tpbnZvY2F0aW9uRGVzY3JpcHRvci5pbnZvY2F0aW9uSWRdO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVF1ZXVlLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNlbmRXaXRoUHJvdG9jb2woY2FuY2VsSW52b2NhdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3NbaW52b2NhdGlvbkRlc2NyaXB0b3IuaW52b2NhdGlvbklkXSA9IGZ1bmN0aW9uIChpbnZvY2F0aW9uRXZlbnQsIGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc3ViamVjdC5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaW52b2NhdGlvbkV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpbnZvY2F0aW9uRXZlbnQgd2lsbCBub3QgYmUgbnVsbCB3aGVuIGFuIGVycm9yIGlzIG5vdCBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoaW52b2NhdGlvbkV2ZW50LnR5cGUgPT09IE1lc3NhZ2VUeXBlLkNvbXBsZXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW52b2NhdGlvbkV2ZW50LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QuZXJyb3IobmV3IEVycm9yKGludm9jYXRpb25FdmVudC5lcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3QubmV4dCgoaW52b2NhdGlvbkV2ZW50Lml0ZW0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcHJvbWlzZVF1ZXVlID0gdGhpcy5zZW5kV2l0aFByb3RvY29sKGludm9jYXRpb25EZXNjcmlwdG9yKVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgc3ViamVjdC5lcnJvcihlKTtcclxuICAgICAgICAgICAgZGVsZXRlIF90aGlzLmNhbGxiYWNrc1tpbnZvY2F0aW9uRGVzY3JpcHRvci5pbnZvY2F0aW9uSWRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubGF1bmNoU3RyZWFtcyhzdHJlYW1zLCBwcm9taXNlUXVldWUpO1xyXG4gICAgICAgIHJldHVybiBzdWJqZWN0O1xyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLnNlbmRNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLnJlc2V0S2VlcEFsaXZlSW50ZXJ2YWwoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLnNlbmQobWVzc2FnZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kcyBhIGpzIG9iamVjdCB0byB0aGUgc2VydmVyLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIGpzIG9iamVjdCB0byBzZXJpYWxpemUgYW5kIHNlbmQuXHJcbiAgICAgKi9cclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLnNlbmRXaXRoUHJvdG9jb2wgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKHRoaXMucHJvdG9jb2wud3JpdGVNZXNzYWdlKG1lc3NhZ2UpKTtcclxuICAgIH07XHJcbiAgICAvKiogSW52b2tlcyBhIGh1YiBtZXRob2Qgb24gdGhlIHNlcnZlciB1c2luZyB0aGUgc3BlY2lmaWVkIG5hbWUgYW5kIGFyZ3VtZW50cy4gRG9lcyBub3Qgd2FpdCBmb3IgYSByZXNwb25zZSBmcm9tIHRoZSByZWNlaXZlci5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgUHJvbWlzZSByZXR1cm5lZCBieSB0aGlzIG1ldGhvZCByZXNvbHZlcyB3aGVuIHRoZSBjbGllbnQgaGFzIHNlbnQgdGhlIGludm9jYXRpb24gdG8gdGhlIHNlcnZlci4gVGhlIHNlcnZlciBtYXkgc3RpbGxcclxuICAgICAqIGJlIHByb2Nlc3NpbmcgdGhlIGludm9jYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIHNlcnZlciBtZXRob2QgdG8gaW52b2tlLlxyXG4gICAgICogQHBhcmFtIHthbnlbXX0gYXJncyBUaGUgYXJndW1lbnRzIHVzZWQgdG8gaW52b2tlIHRoZSBzZXJ2ZXIgbWV0aG9kLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGludm9jYXRpb24gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHNlbnQsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgICAqL1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2EgPSB0aGlzLnJlcGxhY2VTdHJlYW1pbmdQYXJhbXMoYXJncyksIHN0cmVhbXMgPSBfYVswXSwgc3RyZWFtSWRzID0gX2FbMV07XHJcbiAgICAgICAgdmFyIHNlbmRQcm9taXNlID0gdGhpcy5zZW5kV2l0aFByb3RvY29sKHRoaXMuY3JlYXRlSW52b2NhdGlvbihtZXRob2ROYW1lLCBhcmdzLCB0cnVlLCBzdHJlYW1JZHMpKTtcclxuICAgICAgICB0aGlzLmxhdW5jaFN0cmVhbXMoc3RyZWFtcywgc2VuZFByb21pc2UpO1xyXG4gICAgICAgIHJldHVybiBzZW5kUHJvbWlzZTtcclxuICAgIH07XHJcbiAgICAvKiogSW52b2tlcyBhIGh1YiBtZXRob2Qgb24gdGhlIHNlcnZlciB1c2luZyB0aGUgc3BlY2lmaWVkIG5hbWUgYW5kIGFyZ3VtZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgUHJvbWlzZSByZXR1cm5lZCBieSB0aGlzIG1ldGhvZCByZXNvbHZlcyB3aGVuIHRoZSBzZXJ2ZXIgaW5kaWNhdGVzIGl0IGhhcyBmaW5pc2hlZCBpbnZva2luZyB0aGUgbWV0aG9kLiBXaGVuIHRoZSBwcm9taXNlXHJcbiAgICAgKiByZXNvbHZlcywgdGhlIHNlcnZlciBoYXMgZmluaXNoZWQgaW52b2tpbmcgdGhlIG1ldGhvZC4gSWYgdGhlIHNlcnZlciBtZXRob2QgcmV0dXJucyBhIHJlc3VsdCwgaXQgaXMgcHJvZHVjZWQgYXMgdGhlIHJlc3VsdCBvZlxyXG4gICAgICogcmVzb2x2aW5nIHRoZSBQcm9taXNlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlcGFyYW0gVCBUaGUgZXhwZWN0ZWQgcmV0dXJuIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgc2VydmVyIG1ldGhvZCB0byBpbnZva2UuXHJcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBhcmdzIFRoZSBhcmd1bWVudHMgdXNlZCB0byBpbnZva2UgdGhlIHNlcnZlciBtZXRob2QuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUPn0gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSBzZXJ2ZXIgbWV0aG9kIChpZiBhbnkpLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfYSA9IHRoaXMucmVwbGFjZVN0cmVhbWluZ1BhcmFtcyhhcmdzKSwgc3RyZWFtcyA9IF9hWzBdLCBzdHJlYW1JZHMgPSBfYVsxXTtcclxuICAgICAgICB2YXIgaW52b2NhdGlvbkRlc2NyaXB0b3IgPSB0aGlzLmNyZWF0ZUludm9jYXRpb24obWV0aG9kTmFtZSwgYXJncywgZmFsc2UsIHN0cmVhbUlkcyk7XHJcbiAgICAgICAgdmFyIHAgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIC8vIGludm9jYXRpb25JZCB3aWxsIGFsd2F5cyBoYXZlIGEgdmFsdWUgZm9yIGEgbm9uLWJsb2NraW5nIGludm9jYXRpb25cclxuICAgICAgICAgICAgX3RoaXMuY2FsbGJhY2tzW2ludm9jYXRpb25EZXNjcmlwdG9yLmludm9jYXRpb25JZF0gPSBmdW5jdGlvbiAoaW52b2NhdGlvbkV2ZW50LCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpbnZvY2F0aW9uRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnZvY2F0aW9uRXZlbnQgd2lsbCBub3QgYmUgbnVsbCB3aGVuIGFuIGVycm9yIGlzIG5vdCBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludm9jYXRpb25FdmVudC50eXBlID09PSBNZXNzYWdlVHlwZS5Db21wbGV0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uRXZlbnQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoaW52b2NhdGlvbkV2ZW50LmVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGludm9jYXRpb25FdmVudC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVW5leHBlY3RlZCBtZXNzYWdlIHR5cGU6IFwiICsgaW52b2NhdGlvbkV2ZW50LnR5cGUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBwcm9taXNlUXVldWUgPSBfdGhpcy5zZW5kV2l0aFByb3RvY29sKGludm9jYXRpb25EZXNjcmlwdG9yKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpbnZvY2F0aW9uSWQgd2lsbCBhbHdheXMgaGF2ZSBhIHZhbHVlIGZvciBhIG5vbi1ibG9ja2luZyBpbnZvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMuY2FsbGJhY2tzW2ludm9jYXRpb25EZXNjcmlwdG9yLmludm9jYXRpb25JZF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfdGhpcy5sYXVuY2hTdHJlYW1zKHN0cmVhbXMsIHByb21pc2VRdWV1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJlZ2lzdGVycyBhIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgaHViIG1ldGhvZCB3aXRoIHRoZSBzcGVjaWZpZWQgbWV0aG9kIG5hbWUgaXMgaW52b2tlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgaHViIG1ldGhvZCB0byBkZWZpbmUuXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXdNZXRob2QgVGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIHJhaXNlZCB3aGVuIHRoZSBodWIgbWV0aG9kIGlzIGludm9rZWQuXHJcbiAgICAgKi9cclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIG5ld01ldGhvZCkge1xyXG4gICAgICAgIGlmICghbWV0aG9kTmFtZSB8fCAhbmV3TWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kTmFtZSA9IG1ldGhvZE5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoIXRoaXMubWV0aG9kc1ttZXRob2ROYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLm1ldGhvZHNbbWV0aG9kTmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUHJldmVudGluZyBhZGRpbmcgdGhlIHNhbWUgaGFuZGxlciBtdWx0aXBsZSB0aW1lcy5cclxuICAgICAgICBpZiAodGhpcy5tZXRob2RzW21ldGhvZE5hbWVdLmluZGV4T2YobmV3TWV0aG9kKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1ldGhvZHNbbWV0aG9kTmFtZV0ucHVzaChuZXdNZXRob2QpO1xyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBtZXRob2QpIHtcclxuICAgICAgICBpZiAoIW1ldGhvZE5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2ROYW1lID0gbWV0aG9kTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMubWV0aG9kc1ttZXRob2ROYW1lXTtcclxuICAgICAgICBpZiAoIWhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGhvZCkge1xyXG4gICAgICAgICAgICB2YXIgcmVtb3ZlSWR4ID0gaGFuZGxlcnMuaW5kZXhPZihtZXRob2QpO1xyXG4gICAgICAgICAgICBpZiAocmVtb3ZlSWR4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKHJlbW92ZUlkeCwgMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMubWV0aG9kc1ttZXRob2ROYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMubWV0aG9kc1ttZXRob2ROYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqIFJlZ2lzdGVycyBhIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBpcyBjbG9zZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBpcyBjbG9zZWQuIE9wdGlvbmFsbHkgcmVjZWl2ZXMgYSBzaW5nbGUgYXJndW1lbnQgY29udGFpbmluZyB0aGUgZXJyb3IgdGhhdCBjYXVzZWQgdGhlIGNvbm5lY3Rpb24gdG8gY2xvc2UgKGlmIGFueSkuXHJcbiAgICAgKi9cclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLm9uY2xvc2UgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZWRDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKiBSZWdpc3RlcnMgYSBoYW5kbGVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGNvbm5lY3Rpb24gc3RhcnRzIHJlY29ubmVjdGluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBjb25uZWN0aW9uIHN0YXJ0cyByZWNvbm5lY3RpbmcuIE9wdGlvbmFsbHkgcmVjZWl2ZXMgYSBzaW5nbGUgYXJndW1lbnQgY29udGFpbmluZyB0aGUgZXJyb3IgdGhhdCBjYXVzZWQgdGhlIGNvbm5lY3Rpb24gdG8gc3RhcnQgcmVjb25uZWN0aW5nIChpZiBhbnkpLlxyXG4gICAgICovXHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5vbnJlY29ubmVjdGluZyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdGluZ0NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqIFJlZ2lzdGVycyBhIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBzdWNjZXNzZnVsbHkgcmVjb25uZWN0cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBjb25uZWN0aW9uIHN1Y2Nlc3NmdWxseSByZWNvbm5lY3RzLlxyXG4gICAgICovXHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5vbnJlY29ubmVjdGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0ZWRDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLnByb2Nlc3NJbmNvbWluZ0RhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY2xlYW51cFRpbWVvdXQoKTtcclxuICAgICAgICBpZiAoIXRoaXMucmVjZWl2ZWRIYW5kc2hha2VSZXNwb25zZSkge1xyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5wcm9jZXNzSGFuZHNoYWtlUmVzcG9uc2UoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZWRIYW5kc2hha2VSZXNwb25zZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERhdGEgbWF5IGhhdmUgYWxsIGJlZW4gcmVhZCB3aGVuIHByb2Nlc3NpbmcgaGFuZHNoYWtlIHJlc3BvbnNlXHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gUGFyc2UgdGhlIG1lc3NhZ2VzXHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlcyA9IHRoaXMucHJvdG9jb2wucGFyc2VNZXNzYWdlcyhkYXRhLCB0aGlzLmxvZ2dlcik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgbWVzc2FnZXNfMSA9IG1lc3NhZ2VzOyBfaSA8IG1lc3NhZ2VzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IG1lc3NhZ2VzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkludm9jYXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlQ2xpZW50TWV0aG9kKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLlN0cmVhbUl0ZW06XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21wbGV0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrc1ttZXNzYWdlLmludm9jYXRpb25JZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gTWVzc2FnZVR5cGUuQ29tcGxldGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrc1ttZXNzYWdlLmludm9jYXRpb25JZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLlBpbmc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGNhcmUgYWJvdXQgcGluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5DbG9zZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBcIkNsb3NlIG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBzZXJ2ZXIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRvIHdhaXQgb24gdGhlIHN0b3AgaXRzZWxmLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BQcm9taXNlID0gdGhpcy5zdG9wSW50ZXJuYWwobWVzc2FnZS5lcnJvciA/IG5ldyBFcnJvcihcIlNlcnZlciByZXR1cm5lZCBhbiBlcnJvciBvbiBjbG9zZTogXCIgKyBtZXNzYWdlLmVycm9yKSA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBcIkludmFsaWQgbWVzc2FnZSB0eXBlOiBcIiArIG1lc3NhZ2UudHlwZSArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldFRpbWVvdXRQZXJpb2QoKTtcclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5wcm9jZXNzSGFuZHNoYWtlUmVzcG9uc2UgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB2YXIgcmVzcG9uc2VNZXNzYWdlO1xyXG4gICAgICAgIHZhciByZW1haW5pbmdEYXRhO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIF9hID0gdGhpcy5oYW5kc2hha2VQcm90b2NvbC5wYXJzZUhhbmRzaGFrZVJlc3BvbnNlKGRhdGEpLCByZW1haW5pbmdEYXRhID0gX2FbMF0sIHJlc3BvbnNlTWVzc2FnZSA9IF9hWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiRXJyb3IgcGFyc2luZyBoYW5kc2hha2UgcmVzcG9uc2U6IFwiICsgZTtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRzaGFrZVJlamVjdGVyKGVycm9yKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXNwb25zZU1lc3NhZ2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIlNlcnZlciByZXR1cm5lZCBoYW5kc2hha2UgZXJyb3I6IFwiICsgcmVzcG9uc2VNZXNzYWdlLmVycm9yO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZHNoYWtlUmVqZWN0ZXIoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJTZXJ2ZXIgaGFuZHNoYWtlIGNvbXBsZXRlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kc2hha2VSZXNvbHZlcigpO1xyXG4gICAgICAgIHJldHVybiByZW1haW5pbmdEYXRhO1xyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLnJlc2V0S2VlcEFsaXZlSW50ZXJ2YWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFudXBQaW5nVGltZXIoKTtcclxuICAgICAgICB0aGlzLnBpbmdTZXJ2ZXJIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkNvbm5lY3RlZCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnNlbmRNZXNzYWdlKHRoaXMuY2FjaGVkUGluZ01lc3NhZ2UpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgY2FyZSBhYm91dCB0aGUgZXJyb3IuIEl0IHNob3VsZCBiZSBzZWVuIGVsc2V3aGVyZSBpbiB0aGUgY2xpZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgY29ubmVjdGlvbiBpcyBwcm9iYWJseSBpbiBhIGJhZCBvciBjbG9zZWQgc3RhdGUgbm93LCBjbGVhbnVwIHRoZSB0aW1lciBzbyBpdCBzdG9wcyB0cmlnZ2VyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYW51cFBpbmdUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0sIHRoaXMua2VlcEFsaXZlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyk7XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUucmVzZXRUaW1lb3V0UGVyaW9kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3Rpb24uZmVhdHVyZXMgfHwgIXRoaXMuY29ubmVjdGlvbi5mZWF0dXJlcy5pbmhlcmVudEtlZXBBbGl2ZSkge1xyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIHRpbWVvdXQgdGltZXJcclxuICAgICAgICAgICAgdGhpcy50aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zZXJ2ZXJUaW1lb3V0KCk7IH0sIHRoaXMuc2VydmVyVGltZW91dEluTWlsbGlzZWNvbmRzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuc2VydmVyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBUaGUgc2VydmVyIGhhc24ndCB0YWxrZWQgdG8gdXMgaW4gYSB3aGlsZS4gSXQgZG9lc24ndCBsaWtlIHVzIGFueW1vcmUgLi4uIDooXHJcbiAgICAgICAgLy8gVGVybWluYXRlIHRoZSBjb25uZWN0aW9uLCBidXQgd2UgZG9uJ3QgbmVlZCB0byB3YWl0IG9uIHRoZSBwcm9taXNlLiBUaGlzIGNvdWxkIHRyaWdnZXIgcmVjb25uZWN0aW5nLlxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5zdG9wKG5ldyBFcnJvcihcIlNlcnZlciB0aW1lb3V0IGVsYXBzZWQgd2l0aG91dCByZWNlaXZpbmcgYSBtZXNzYWdlIGZyb20gdGhlIHNlcnZlci5cIikpO1xyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLmludm9rZUNsaWVudE1ldGhvZCA9IGZ1bmN0aW9uIChpbnZvY2F0aW9uTWVzc2FnZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG1ldGhvZHMgPSB0aGlzLm1ldGhvZHNbaW52b2NhdGlvbk1lc3NhZ2UudGFyZ2V0LnRvTG93ZXJDYXNlKCldO1xyXG4gICAgICAgIGlmIChtZXRob2RzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0uYXBwbHkoX3RoaXMsIGludm9jYXRpb25NZXNzYWdlLmFyZ3VtZW50cyk7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIFwiQSBjYWxsYmFjayBmb3IgdGhlIG1ldGhvZCBcIiArIGludm9jYXRpb25NZXNzYWdlLnRhcmdldC50b0xvd2VyQ2FzZSgpICsgXCIgdGhyZXcgZXJyb3IgJ1wiICsgZSArIFwiJy5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGludm9jYXRpb25NZXNzYWdlLmludm9jYXRpb25JZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBub3Qgc3VwcG9ydGVkIGluIHYxLiBTbyB3ZSByZXR1cm4gYW4gZXJyb3IgdG8gYXZvaWQgYmxvY2tpbmcgdGhlIHNlcnZlciB3YWl0aW5nIGZvciB0aGUgcmVzcG9uc2UuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiU2VydmVyIHJlcXVlc3RlZCBhIHJlc3BvbnNlLCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgdmVyc2lvbiBvZiB0aGUgY2xpZW50LlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gd2FpdCBvbiB0aGUgc3RvcCBpdHNlbGYuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BQcm9taXNlID0gdGhpcy5zdG9wSW50ZXJuYWwobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIFwiTm8gY2xpZW50IG1ldGhvZCB3aXRoIHRoZSBuYW1lICdcIiArIGludm9jYXRpb25NZXNzYWdlLnRhcmdldCArIFwiJyBmb3VuZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLmNvbm5lY3Rpb25DbG9zZWQgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiSHViQ29ubmVjdGlvbi5jb25uZWN0aW9uQ2xvc2VkKFwiICsgZXJyb3IgKyBcIikgY2FsbGVkIHdoaWxlIGluIHN0YXRlIFwiICsgdGhpcy5jb25uZWN0aW9uU3RhdGUgKyBcIi5cIik7XHJcbiAgICAgICAgLy8gVHJpZ2dlcmluZyB0aGlzLmhhbmRzaGFrZVJlamVjdGVyIGlzIGluc3VmZmljaWVudCBiZWNhdXNlIGl0IGNvdWxkIGFscmVhZHkgYmUgcmVzb2x2ZWQgd2l0aG91dCB0aGUgY29udGludWF0aW9uIGhhdmluZyBydW4geWV0LlxyXG4gICAgICAgIHRoaXMuc3RvcER1cmluZ1N0YXJ0RXJyb3IgPSB0aGlzLnN0b3BEdXJpbmdTdGFydEVycm9yIHx8IGVycm9yIHx8IG5ldyBFcnJvcihcIlRoZSB1bmRlcmx5aW5nIGNvbm5lY3Rpb24gd2FzIGNsb3NlZCBiZWZvcmUgdGhlIGh1YiBoYW5kc2hha2UgY291bGQgY29tcGxldGUuXCIpO1xyXG4gICAgICAgIC8vIElmIHRoZSBoYW5kc2hha2UgaXMgaW4gcHJvZ3Jlc3MsIHN0YXJ0IHdpbGwgYmUgd2FpdGluZyBmb3IgdGhlIGhhbmRzaGFrZSBwcm9taXNlLCBzbyB3ZSBjb21wbGV0ZSBpdC5cclxuICAgICAgICAvLyBJZiBpdCBoYXMgYWxyZWFkeSBjb21wbGV0ZWQsIHRoaXMgc2hvdWxkIGp1c3Qgbm9vcC5cclxuICAgICAgICBpZiAodGhpcy5oYW5kc2hha2VSZXNvbHZlcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRzaGFrZVJlc29sdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuY2VsQ2FsbGJhY2tzV2l0aEVycm9yKGVycm9yIHx8IG5ldyBFcnJvcihcIkludm9jYXRpb24gY2FuY2VsZWQgZHVlIHRvIHRoZSB1bmRlcmx5aW5nIGNvbm5lY3Rpb24gYmVpbmcgY2xvc2VkLlwiKSk7XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwVGltZW91dCgpO1xyXG4gICAgICAgIHRoaXMuY2xlYW51cFBpbmdUaW1lcigpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUNsb3NlKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5Db25uZWN0ZWQgJiYgdGhpcy5yZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5Db25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUNsb3NlKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgbm9uZSBvZiB0aGUgYWJvdmUgaWYgY29uZGl0aW9ucyB3ZXJlIHRydWUgd2VyZSBjYWxsZWQgdGhlIEh1YkNvbm5lY3Rpb24gbXVzdCBiZSBpbiBlaXRoZXI6XHJcbiAgICAgICAgLy8gMS4gVGhlIENvbm5lY3Rpbmcgc3RhdGUgaW4gd2hpY2ggY2FzZSB0aGUgaGFuZHNoYWtlUmVzb2x2ZXIgd2lsbCBjb21wbGV0ZSBpdCBhbmQgc3RvcER1cmluZ1N0YXJ0RXJyb3Igd2lsbCBmYWlsIGl0LlxyXG4gICAgICAgIC8vIDIuIFRoZSBSZWNvbm5lY3Rpbmcgc3RhdGUgaW4gd2hpY2ggY2FzZSB0aGUgaGFuZHNoYWtlUmVzb2x2ZXIgd2lsbCBjb21wbGV0ZSBpdCBhbmQgc3RvcER1cmluZ1N0YXJ0RXJyb3Igd2lsbCBmYWlsIHRoZSBjdXJyZW50IHJlY29ubmVjdCBhdHRlbXB0XHJcbiAgICAgICAgLy8gICAgYW5kIHBvdGVudGlhbGx5IGNvbnRpbnVlIHRoZSByZWNvbm5lY3QoKSBsb29wLlxyXG4gICAgICAgIC8vIDMuIFRoZSBEaXNjb25uZWN0ZWQgc3RhdGUgaW4gd2hpY2ggY2FzZSB3ZSdyZSBhbHJlYWR5IGRvbmUuXHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuY29tcGxldGVDbG9zZSA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGVkO1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlZENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmFwcGx5KF90aGlzLCBbZXJyb3JdKTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgXCJBbiBvbmNsb3NlIGNhbGxiYWNrIGNhbGxlZCB3aXRoIGVycm9yICdcIiArIGVycm9yICsgXCInIHRocmV3IGVycm9yICdcIiArIGUgKyBcIicuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLnJlY29ubmVjdCA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlY29ubmVjdFN0YXJ0VGltZSwgcHJldmlvdXNSZWNvbm5lY3RBdHRlbXB0cywgbmV4dFJldHJ5RGVsYXksIGVfNDtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb25uZWN0U3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNSZWNvbm5lY3RBdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRSZXRyeURlbGF5ID0gdGhpcy5nZXROZXh0UmV0cnlEZWxheShwcmV2aW91c1JlY29ubmVjdEF0dGVtcHRzKyssIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFJldHJ5RGVsYXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJDb25uZWN0aW9uIG5vdCByZWNvbm5lY3RpbmcgYmVjYXVzZSB0aGUgSVJlY29ubmVjdFBvbGljeSByZXR1cm5lZCBudWxsIG9uIHRoZSBmaXJzdCByZWNvbm5lY3QgYXR0ZW1wdC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlQ2xvc2UoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXRlID0gSHViQ29ubmVjdGlvblN0YXRlLlJlY29ubmVjdGluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiQ29ubmVjdGlvbiByZWNvbm5lY3RpbmcgYmVjYXVzZSBvZiBlcnJvciAnXCIgKyBlcnJvciArIFwiJy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiQ29ubmVjdGlvbiByZWNvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ucmVjb25uZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb25uZWN0aW5nQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMuYXBwbHkoX3RoaXMsIFtlcnJvcl0pOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBcIkFuIG9ucmVjb25uZWN0aW5nIGNhbGxiYWNrIGNhbGxlZCB3aXRoIGVycm9yICdcIiArIGVycm9yICsgXCInIHRocmV3IGVycm9yICdcIiArIGUgKyBcIicuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhpdCBlYXJseSBpZiBhbiBvbnJlY29ubmVjdGluZyBjYWxsYmFjayBjYWxsZWQgY29ubmVjdGlvbi5zdG9wKCkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUgIT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5SZWNvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ29ubmVjdGlvbiBsZWZ0IHRoZSByZWNvbm5lY3Rpbmcgc3RhdGUgaW4gb25yZWNvbm5lY3RpbmcgY2FsbGJhY2suIERvbmUgcmVjb25uZWN0aW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobmV4dFJldHJ5RGVsYXkgIT09IG51bGwpKSByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBcIlJlY29ubmVjdCBhdHRlbXB0IG51bWJlciBcIiArIHByZXZpb3VzUmVjb25uZWN0QXR0ZW1wdHMgKyBcIiB3aWxsIHN0YXJ0IGluIFwiICsgbmV4dFJldHJ5RGVsYXkgKyBcIiBtcy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVjb25uZWN0RGVsYXlIYW5kbGUgPSBzZXRUaW1lb3V0KHJlc29sdmUsIG5leHRSZXRyeURlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3REZWxheUhhbmRsZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlICE9PSBIdWJDb25uZWN0aW9uU3RhdGUuUmVjb25uZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ29ubmVjdGlvbiBsZWZ0IHRoZSByZWNvbm5lY3Rpbmcgc3RhdGUgZHVyaW5nIHJlY29ubmVjdCBkZWxheS4gRG9uZSByZWNvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMywgNSwgLCA2XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc3RhcnRJbnRlcm5hbCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiSHViQ29ubmVjdGlvbiByZWNvbm5lY3RlZCBzdWNjZXNzZnVsbHkuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vbnJlY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb25uZWN0ZWRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5hcHBseShfdGhpcywgW190aGlzLmNvbm5lY3Rpb24uY29ubmVjdGlvbklkXSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIFwiQW4gb25yZWNvbm5lY3RlZCBjYWxsYmFjayBjYWxsZWQgd2l0aCBjb25uZWN0aW9uSWQgJ1wiICsgdGhpcy5jb25uZWN0aW9uLmNvbm5lY3Rpb25JZCArIFwiOyB0aHJldyBlcnJvciAnXCIgKyBlICsgXCInLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzQgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJSZWNvbm5lY3QgYXR0ZW1wdCBmYWlsZWQgYmVjYXVzZSBvZiBlcnJvciAnXCIgKyBlXzQgKyBcIicuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUgIT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5SZWNvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJDb25uZWN0aW9uIGxlZnQgdGhlIHJlY29ubmVjdGluZyBzdGF0ZSBkdXJpbmcgcmVjb25uZWN0IGF0dGVtcHQuIERvbmUgcmVjb25uZWN0aW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRSZXRyeURlbGF5ID0gdGhpcy5nZXROZXh0UmV0cnlEZWxheShwcmV2aW91c1JlY29ubmVjdEF0dGVtcHRzKyssIERhdGUubm93KCkgLSByZWNvbm5lY3RTdGFydFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJSZWNvbm5lY3QgcmV0cmllcyBoYXZlIGJlZW4gZXhoYXVzdGVkIGFmdGVyIFwiICsgKERhdGUubm93KCkgLSByZWNvbm5lY3RTdGFydFRpbWUpICsgXCIgbXMgYW5kIFwiICsgcHJldmlvdXNSZWNvbm5lY3RBdHRlbXB0cyArIFwiIGZhaWxlZCBhdHRlbXB0cy4gQ29ubmVjdGlvbiBkaXNjb25uZWN0aW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0TmV4dFJldHJ5RGVsYXkgPSBmdW5jdGlvbiAocHJldmlvdXNSZXRyeUNvdW50LCBlbGFwc2VkTWlsbGlzZWNvbmRzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjb25uZWN0UG9saWN5Lm5leHRSZXRyeURlbGF5SW5NaWxsaXNlY29uZHMocHJldmlvdXNSZXRyeUNvdW50LCBlbGFwc2VkTWlsbGlzZWNvbmRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBcIklSZWNvbm5lY3RQb2xpY3kubmV4dFJldHJ5RGVsYXlJbk1pbGxpc2Vjb25kcyhcIiArIHByZXZpb3VzUmV0cnlDb3VudCArIFwiLCBcIiArIGVsYXBzZWRNaWxsaXNlY29uZHMgKyBcIikgdGhyZXcgZXJyb3IgJ1wiICsgZSArIFwiJy5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5jYW5jZWxDYWxsYmFja3NXaXRoRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3M7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhjYWxsYmFja3MpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2tleV07XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5jbGVhbnVwUGluZ1RpbWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBpbmdTZXJ2ZXJIYW5kbGUpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1NlcnZlckhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLmNsZWFudXBUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRIYW5kbGUpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dEhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLmNyZWF0ZUludm9jYXRpb24gPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgYXJncywgbm9uYmxvY2tpbmcsIHN0cmVhbUlkcykge1xyXG4gICAgICAgIGlmIChub25ibG9ja2luZykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgc3RyZWFtSWRzOiBzdHJlYW1JZHMsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IG1ldGhvZE5hbWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5JbnZvY2F0aW9uLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGludm9jYXRpb25JZCA9IHRoaXMuaW52b2NhdGlvbklkO1xyXG4gICAgICAgICAgICB0aGlzLmludm9jYXRpb25JZCsrO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgaW52b2NhdGlvbklkOiBpbnZvY2F0aW9uSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHN0cmVhbUlkczogc3RyZWFtSWRzLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBtZXRob2ROYW1lLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuSW52b2NhdGlvbixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUubGF1bmNoU3RyZWFtcyA9IGZ1bmN0aW9uIChzdHJlYW1zLCBwcm9taXNlUXVldWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChzdHJlYW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFN5bmNocm9uaXplIHN0cmVhbSBkYXRhIHNvIHRoZXkgYXJyaXZlIGluLW9yZGVyIG9uIHRoZSBzZXJ2ZXJcclxuICAgICAgICBpZiAoIXByb21pc2VRdWV1ZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlUXVldWUgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoc3RyZWFtSWQpIHtcclxuICAgICAgICAgICAgc3RyZWFtc1tzdHJlYW1JZF0uc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVF1ZXVlID0gcHJvbWlzZVF1ZXVlLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2VuZFdpdGhQcm90b2NvbChfdGhpcy5jcmVhdGVDb21wbGV0aW9uTWVzc2FnZShzdHJlYW1JZCkpOyB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVyciAmJiBlcnIudG9TdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVyci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVW5rbm93biBlcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlUXVldWUgPSBwcm9taXNlUXVldWUudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zZW5kV2l0aFByb3RvY29sKF90aGlzLmNyZWF0ZUNvbXBsZXRpb25NZXNzYWdlKHN0cmVhbUlkLCBtZXNzYWdlKSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVF1ZXVlID0gcHJvbWlzZVF1ZXVlLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2VuZFdpdGhQcm90b2NvbChfdGhpcy5jcmVhdGVTdHJlYW1JdGVtTWVzc2FnZShzdHJlYW1JZCwgaXRlbSkpOyB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gV2Ugd2FudCB0byBpdGVyYXRlIG92ZXIgdGhlIGtleXMsIHNpbmNlIHRoZSBrZXlzIGFyZSB0aGUgc3RyZWFtIGlkc1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgICAgIGZvciAodmFyIHN0cmVhbUlkIGluIHN0cmVhbXMpIHtcclxuICAgICAgICAgICAgX2xvb3BfMShzdHJlYW1JZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLnJlcGxhY2VTdHJlYW1pbmdQYXJhbXMgPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHZhciBzdHJlYW1zID0gW107XHJcbiAgICAgICAgdmFyIHN0cmVhbUlkcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYXJndW1lbnQgPSBhcmdzW2ldO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09ic2VydmFibGUoYXJndW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyZWFtSWQgPSB0aGlzLmludm9jYXRpb25JZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52b2NhdGlvbklkKys7XHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgc3RyZWFtIGZvciBsYXRlciB1c2VcclxuICAgICAgICAgICAgICAgIHN0cmVhbXNbc3RyZWFtSWRdID0gYXJndW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBzdHJlYW1JZHMucHVzaChzdHJlYW1JZC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBzdHJlYW0gZnJvbSBhcmdzXHJcbiAgICAgICAgICAgICAgICBhcmdzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3N0cmVhbXMsIHN0cmVhbUlkc107XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuaXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gKGFyZykge1xyXG4gICAgICAgIC8vIFRoaXMgYWxsb3dzIG90aGVyIHN0cmVhbSBpbXBsZW1lbnRhdGlvbnMgdG8ganVzdCB3b3JrIChsaWtlIHJ4anMpXHJcbiAgICAgICAgcmV0dXJuIGFyZy5zdWJzY3JpYmUgJiYgdHlwZW9mIGFyZy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVTdHJlYW1JbnZvY2F0aW9uID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGFyZ3MsIHN0cmVhbUlkcykge1xyXG4gICAgICAgIHZhciBpbnZvY2F0aW9uSWQgPSB0aGlzLmludm9jYXRpb25JZDtcclxuICAgICAgICB0aGlzLmludm9jYXRpb25JZCsrO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFyZ3VtZW50czogYXJncyxcclxuICAgICAgICAgICAgaW52b2NhdGlvbklkOiBpbnZvY2F0aW9uSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgc3RyZWFtSWRzOiBzdHJlYW1JZHMsXHJcbiAgICAgICAgICAgIHRhcmdldDogbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuU3RyZWFtSW52b2NhdGlvbixcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLmNyZWF0ZUNhbmNlbEludm9jYXRpb24gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGlkLFxyXG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5DYW5jZWxJbnZvY2F0aW9uLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlU3RyZWFtSXRlbU1lc3NhZ2UgPSBmdW5jdGlvbiAoaWQsIGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGlkLFxyXG4gICAgICAgICAgICBpdGVtOiBpdGVtLFxyXG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5TdHJlYW1JdGVtLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlQ29tcGxldGlvbk1lc3NhZ2UgPSBmdW5jdGlvbiAoaWQsIGVycm9yLCByZXN1bHQpIHtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcclxuICAgICAgICAgICAgICAgIGludm9jYXRpb25JZDogaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5Db21wbGV0aW9uLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGlkLFxyXG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcclxuICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuQ29tcGxldGlvbixcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBIdWJDb25uZWN0aW9uO1xyXG59KCkpO1xyXG5leHBvcnQgeyBIdWJDb25uZWN0aW9uIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUh1YkNvbm5lY3Rpb24uanMubWFwIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5pbXBvcnQgeyBEZWZhdWx0UmVjb25uZWN0UG9saWN5IH0gZnJvbSBcIi4vRGVmYXVsdFJlY29ubmVjdFBvbGljeVwiO1xyXG5pbXBvcnQgeyBIdHRwQ29ubmVjdGlvbiB9IGZyb20gXCIuL0h0dHBDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IEh1YkNvbm5lY3Rpb24gfSBmcm9tIFwiLi9IdWJDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBKc29uSHViUHJvdG9jb2wgfSBmcm9tIFwiLi9Kc29uSHViUHJvdG9jb2xcIjtcclxuaW1wb3J0IHsgTnVsbExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlcnNcIjtcclxuaW1wb3J0IHsgQXJnLCBDb25zb2xlTG9nZ2VyIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXHJcbnZhciBMb2dMZXZlbE5hbWVNYXBwaW5nID0ge1xyXG4gICAgdHJhY2U6IExvZ0xldmVsLlRyYWNlLFxyXG4gICAgZGVidWc6IExvZ0xldmVsLkRlYnVnLFxyXG4gICAgaW5mbzogTG9nTGV2ZWwuSW5mb3JtYXRpb24sXHJcbiAgICBpbmZvcm1hdGlvbjogTG9nTGV2ZWwuSW5mb3JtYXRpb24sXHJcbiAgICB3YXJuOiBMb2dMZXZlbC5XYXJuaW5nLFxyXG4gICAgd2FybmluZzogTG9nTGV2ZWwuV2FybmluZyxcclxuICAgIGVycm9yOiBMb2dMZXZlbC5FcnJvcixcclxuICAgIGNyaXRpY2FsOiBMb2dMZXZlbC5Dcml0aWNhbCxcclxuICAgIG5vbmU6IExvZ0xldmVsLk5vbmUsXHJcbn07XHJcbmZ1bmN0aW9uIHBhcnNlTG9nTGV2ZWwobmFtZSkge1xyXG4gICAgLy8gQ2FzZS1pbnNlbnNpdGl2ZSBtYXRjaGluZyB2aWEgbG93ZXItY2FzaW5nXHJcbiAgICAvLyBZZXMsIEkga25vdyBjYXNlLWZvbGRpbmcgaXMgYSBjb21wbGljYXRlZCBwcm9ibGVtIGluIFVuaWNvZGUsIGJ1dCB3ZSBvbmx5IHN1cHBvcnRcclxuICAgIC8vIHRoZSBBU0NJSSBzdHJpbmdzIGRlZmluZWQgaW4gTG9nTGV2ZWxOYW1lTWFwcGluZyBhbnl3YXksIHNvIGl0J3MgZmluZSAtYW51cnNlLlxyXG4gICAgdmFyIG1hcHBpbmcgPSBMb2dMZXZlbE5hbWVNYXBwaW5nW25hbWUudG9Mb3dlckNhc2UoKV07XHJcbiAgICBpZiAodHlwZW9mIG1hcHBpbmcgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm4gbWFwcGluZztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gbG9nIGxldmVsOiBcIiArIG5hbWUpO1xyXG4gICAgfVxyXG59XHJcbi8qKiBBIGJ1aWxkZXIgZm9yIGNvbmZpZ3VyaW5nIHtAbGluayBAYXNwbmV0L3NpZ25hbHIuSHViQ29ubmVjdGlvbn0gaW5zdGFuY2VzLiAqL1xyXG52YXIgSHViQ29ubmVjdGlvbkJ1aWxkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIdWJDb25uZWN0aW9uQnVpbGRlcigpIHtcclxuICAgIH1cclxuICAgIEh1YkNvbm5lY3Rpb25CdWlsZGVyLnByb3RvdHlwZS5jb25maWd1cmVMb2dnaW5nID0gZnVuY3Rpb24gKGxvZ2dpbmcpIHtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZChsb2dnaW5nLCBcImxvZ2dpbmdcIik7XHJcbiAgICAgICAgaWYgKGlzTG9nZ2VyKGxvZ2dpbmcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2luZztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGxvZ2dpbmcgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdmFyIGxvZ0xldmVsID0gcGFyc2VMb2dMZXZlbChsb2dnaW5nKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgQ29uc29sZUxvZ2dlcihsb2dMZXZlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlciA9IG5ldyBDb25zb2xlTG9nZ2VyKGxvZ2dpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uQnVpbGRlci5wcm90b3R5cGUud2l0aFVybCA9IGZ1bmN0aW9uICh1cmwsIHRyYW5zcG9ydFR5cGVPck9wdGlvbnMpIHtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZCh1cmwsIFwidXJsXCIpO1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIC8vIEZsb3ctdHlwaW5nIGtub3dzIHdoZXJlIGl0J3MgYXQuIFNpbmNlIEh0dHBUcmFuc3BvcnRUeXBlIGlzIGEgbnVtYmVyIGFuZCBJSHR0cENvbm5lY3Rpb25PcHRpb25zIGlzIGd1YXJhbnRlZWRcclxuICAgICAgICAvLyB0byBiZSBhbiBvYmplY3QsIHdlIGtub3cgKGFzIGRvZXMgVHlwZVNjcmlwdCkgdGhpcyBjb21wYXJpc29uIGlzIGFsbCB3ZSBuZWVkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggb3ZlcmxvYWQgd2FzIGNhbGxlZC5cclxuICAgICAgICBpZiAodHlwZW9mIHRyYW5zcG9ydFR5cGVPck9wdGlvbnMgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5odHRwQ29ubmVjdGlvbk9wdGlvbnMgPSBfX2Fzc2lnbih7fSwgdGhpcy5odHRwQ29ubmVjdGlvbk9wdGlvbnMsIHRyYW5zcG9ydFR5cGVPck9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5odHRwQ29ubmVjdGlvbk9wdGlvbnMgPSBfX2Fzc2lnbih7fSwgdGhpcy5odHRwQ29ubmVjdGlvbk9wdGlvbnMsIHsgdHJhbnNwb3J0OiB0cmFuc3BvcnRUeXBlT3JPcHRpb25zIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICAvKiogQ29uZmlndXJlcyB0aGUge0BsaW5rIEBhc3BuZXQvc2lnbmFsci5IdWJDb25uZWN0aW9ufSB0byB1c2UgdGhlIHNwZWNpZmllZCBIdWIgUHJvdG9jb2wuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtJSHViUHJvdG9jb2x9IHByb3RvY29sIFRoZSB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLklIdWJQcm90b2NvbH0gaW1wbGVtZW50YXRpb24gdG8gdXNlLlxyXG4gICAgICovXHJcbiAgICBIdWJDb25uZWN0aW9uQnVpbGRlci5wcm90b3R5cGUud2l0aEh1YlByb3RvY29sID0gZnVuY3Rpb24gKHByb3RvY29sKSB7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQocHJvdG9jb2wsIFwicHJvdG9jb2xcIik7XHJcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IHByb3RvY29sO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb25CdWlsZGVyLnByb3RvdHlwZS53aXRoQXV0b21hdGljUmVjb25uZWN0ID0gZnVuY3Rpb24gKHJldHJ5RGVsYXlzT3JSZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICBpZiAodGhpcy5yZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSByZWNvbm5lY3RQb2xpY3kgaGFzIGFscmVhZHkgYmVlbiBzZXQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJldHJ5RGVsYXlzT3JSZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RQb2xpY3kgPSBuZXcgRGVmYXVsdFJlY29ubmVjdFBvbGljeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJldHJ5RGVsYXlzT3JSZWNvbm5lY3RQb2xpY3kpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0UG9saWN5ID0gbmV3IERlZmF1bHRSZWNvbm5lY3RQb2xpY3kocmV0cnlEZWxheXNPclJlY29ubmVjdFBvbGljeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdFBvbGljeSA9IHJldHJ5RGVsYXlzT3JSZWNvbm5lY3RQb2xpY3k7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIC8qKiBDcmVhdGVzIGEge0BsaW5rIEBhc3BuZXQvc2lnbmFsci5IdWJDb25uZWN0aW9ufSBmcm9tIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgc3BlY2lmaWVkIGluIHRoaXMgYnVpbGRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7SHViQ29ubmVjdGlvbn0gVGhlIGNvbmZpZ3VyZWQge0BsaW5rIEBhc3BuZXQvc2lnbmFsci5IdWJDb25uZWN0aW9ufS5cclxuICAgICAqL1xyXG4gICAgSHViQ29ubmVjdGlvbkJ1aWxkZXIucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIElmIGh0dHBDb25uZWN0aW9uT3B0aW9ucyBoYXMgYSBsb2dnZXIsIHVzZSBpdC4gT3RoZXJ3aXNlLCBvdmVycmlkZSBpdCB3aXRoIHRoZSBvbmVcclxuICAgICAgICAvLyBwcm92aWRlZCB0byBjb25maWd1cmVMb2dnZXJcclxuICAgICAgICB2YXIgaHR0cENvbm5lY3Rpb25PcHRpb25zID0gdGhpcy5odHRwQ29ubmVjdGlvbk9wdGlvbnMgfHwge307XHJcbiAgICAgICAgLy8gSWYgaXQncyAnbnVsbCcsIHRoZSB1c2VyICoqZXhwbGljaXRseSoqIGFza2VkIGZvciBudWxsLCBkb24ndCBtZXNzIHdpdGggaXQuXHJcbiAgICAgICAgaWYgKGh0dHBDb25uZWN0aW9uT3B0aW9ucy5sb2dnZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBJZiBvdXIgbG9nZ2VyIGlzIHVuZGVmaW5lZCBvciBudWxsLCB0aGF0J3MgT0ssIHRoZSBIdHRwQ29ubmVjdGlvbiBjb25zdHJ1Y3RvciB3aWxsIGhhbmRsZSBpdC5cclxuICAgICAgICAgICAgaHR0cENvbm5lY3Rpb25PcHRpb25zLmxvZ2dlciA9IHRoaXMubG9nZ2VyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBOb3cgY3JlYXRlIHRoZSBjb25uZWN0aW9uXHJcbiAgICAgICAgaWYgKCF0aGlzLnVybCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ0h1YkNvbm5lY3Rpb25CdWlsZGVyLndpdGhVcmwnIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgYnVpbGRpbmcgdGhlIGNvbm5lY3Rpb24uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IG5ldyBIdHRwQ29ubmVjdGlvbih0aGlzLnVybCwgaHR0cENvbm5lY3Rpb25PcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gSHViQ29ubmVjdGlvbi5jcmVhdGUoY29ubmVjdGlvbiwgdGhpcy5sb2dnZXIgfHwgTnVsbExvZ2dlci5pbnN0YW5jZSwgdGhpcy5wcm90b2NvbCB8fCBuZXcgSnNvbkh1YlByb3RvY29sKCksIHRoaXMucmVjb25uZWN0UG9saWN5KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSHViQ29ubmVjdGlvbkJ1aWxkZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEh1YkNvbm5lY3Rpb25CdWlsZGVyIH07XHJcbmZ1bmN0aW9uIGlzTG9nZ2VyKGxvZ2dlcikge1xyXG4gICAgcmV0dXJuIGxvZ2dlci5sb2cgIT09IHVuZGVmaW5lZDtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IdWJDb25uZWN0aW9uQnVpbGRlci5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbi8qKiBEZWZpbmVzIHRoZSB0eXBlIG9mIGEgSHViIE1lc3NhZ2UuICovXHJcbmV4cG9ydCB2YXIgTWVzc2FnZVR5cGU7XHJcbihmdW5jdGlvbiAoTWVzc2FnZVR5cGUpIHtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYW4gSW52b2NhdGlvbiBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLkludm9jYXRpb25NZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkludm9jYXRpb25cIl0gPSAxXSA9IFwiSW52b2NhdGlvblwiO1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhIFN0cmVhbUl0ZW0gbWVzc2FnZSBhbmQgaW1wbGVtZW50cyB0aGUge0BsaW5rIEBhc3BuZXQvc2lnbmFsci5TdHJlYW1JdGVtTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJTdHJlYW1JdGVtXCJdID0gMl0gPSBcIlN0cmVhbUl0ZW1cIjtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYSBDb21wbGV0aW9uIG1lc3NhZ2UgYW5kIGltcGxlbWVudHMgdGhlIHtAbGluayBAYXNwbmV0L3NpZ25hbHIuQ29tcGxldGlvbk1lc3NhZ2V9IGludGVyZmFjZS4gKi9cclxuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiQ29tcGxldGlvblwiXSA9IDNdID0gXCJDb21wbGV0aW9uXCI7XHJcbiAgICAvKiogSW5kaWNhdGVzIHRoZSBtZXNzYWdlIGlzIGEgU3RyZWFtIEludm9jYXRpb24gbWVzc2FnZSBhbmQgaW1wbGVtZW50cyB0aGUge0BsaW5rIEBhc3BuZXQvc2lnbmFsci5TdHJlYW1JbnZvY2F0aW9uTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJTdHJlYW1JbnZvY2F0aW9uXCJdID0gNF0gPSBcIlN0cmVhbUludm9jYXRpb25cIjtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYSBDYW5jZWwgSW52b2NhdGlvbiBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLkNhbmNlbEludm9jYXRpb25NZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkNhbmNlbEludm9jYXRpb25cIl0gPSA1XSA9IFwiQ2FuY2VsSW52b2NhdGlvblwiO1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhIFBpbmcgbWVzc2FnZSBhbmQgaW1wbGVtZW50cyB0aGUge0BsaW5rIEBhc3BuZXQvc2lnbmFsci5QaW5nTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJQaW5nXCJdID0gNl0gPSBcIlBpbmdcIjtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYSBDbG9zZSBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLkNsb3NlTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJDbG9zZVwiXSA9IDddID0gXCJDbG9zZVwiO1xyXG59KShNZXNzYWdlVHlwZSB8fCAoTWVzc2FnZVR5cGUgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JSHViUHJvdG9jb2wuanMubWFwIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4vLyBUaGVzZSB2YWx1ZXMgYXJlIGRlc2lnbmVkIHRvIG1hdGNoIHRoZSBBU1AuTkVUIExvZyBMZXZlbHMgc2luY2UgdGhhdCdzIHRoZSBwYXR0ZXJuIHdlJ3JlIGVtdWxhdGluZyBoZXJlLlxyXG4vKiogSW5kaWNhdGVzIHRoZSBzZXZlcml0eSBvZiBhIGxvZyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBMb2cgTGV2ZWxzIGFyZSBvcmRlcmVkIGluIGluY3JlYXNpbmcgc2V2ZXJpdHkuIFNvIGBEZWJ1Z2AgaXMgbW9yZSBzZXZlcmUgdGhhbiBgVHJhY2VgLCBldGMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIExvZ0xldmVsO1xyXG4oZnVuY3Rpb24gKExvZ0xldmVsKSB7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciB2ZXJ5IGxvdyBzZXZlcml0eSBkaWFnbm9zdGljIG1lc3NhZ2VzLiAqL1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJUcmFjZVwiXSA9IDBdID0gXCJUcmFjZVwiO1xyXG4gICAgLyoqIExvZyBsZXZlbCBmb3IgbG93IHNldmVyaXR5IGRpYWdub3N0aWMgbWVzc2FnZXMuICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkRlYnVnXCJdID0gMV0gPSBcIkRlYnVnXCI7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciBpbmZvcm1hdGlvbmFsIGRpYWdub3N0aWMgbWVzc2FnZXMuICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkluZm9ybWF0aW9uXCJdID0gMl0gPSBcIkluZm9ybWF0aW9uXCI7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciBkaWFnbm9zdGljIG1lc3NhZ2VzIHRoYXQgaW5kaWNhdGUgYSBub24tZmF0YWwgcHJvYmxlbS4gKi9cclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiV2FybmluZ1wiXSA9IDNdID0gXCJXYXJuaW5nXCI7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciBkaWFnbm9zdGljIG1lc3NhZ2VzIHRoYXQgaW5kaWNhdGUgYSBmYWlsdXJlIGluIHRoZSBjdXJyZW50IG9wZXJhdGlvbi4gKi9cclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiRXJyb3JcIl0gPSA0XSA9IFwiRXJyb3JcIjtcclxuICAgIC8qKiBMb2cgbGV2ZWwgZm9yIGRpYWdub3N0aWMgbWVzc2FnZXMgdGhhdCBpbmRpY2F0ZSBhIGZhaWx1cmUgdGhhdCB3aWxsIHRlcm1pbmF0ZSB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLiAqL1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJDcml0aWNhbFwiXSA9IDVdID0gXCJDcml0aWNhbFwiO1xyXG4gICAgLyoqIFRoZSBoaWdoZXN0IHBvc3NpYmxlIGxvZyBsZXZlbC4gVXNlZCB3aGVuIGNvbmZpZ3VyaW5nIGxvZ2dpbmcgdG8gaW5kaWNhdGUgdGhhdCBubyBsb2cgbWVzc2FnZXMgc2hvdWxkIGJlIGVtaXR0ZWQuICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIk5vbmVcIl0gPSA2XSA9IFwiTm9uZVwiO1xyXG59KShMb2dMZXZlbCB8fCAoTG9nTGV2ZWwgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JTG9nZ2VyLmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuLy8gVGhpcyB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBiaXQgZmxhZyBpbiB0aGUgZnV0dXJlLCBzbyB3ZSBrZWVwIGl0IHVzaW5nIHBvd2VyLW9mLXR3byB2YWx1ZXMuXHJcbi8qKiBTcGVjaWZpZXMgYSBzcGVjaWZpYyBIVFRQIHRyYW5zcG9ydCB0eXBlLiAqL1xyXG5leHBvcnQgdmFyIEh0dHBUcmFuc3BvcnRUeXBlO1xyXG4oZnVuY3Rpb24gKEh0dHBUcmFuc3BvcnRUeXBlKSB7XHJcbiAgICAvKiogU3BlY2lmaWVzIG5vIHRyYW5zcG9ydCBwcmVmZXJlbmNlLiAqL1xyXG4gICAgSHR0cFRyYW5zcG9ydFR5cGVbSHR0cFRyYW5zcG9ydFR5cGVbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcclxuICAgIC8qKiBTcGVjaWZpZXMgdGhlIFdlYlNvY2tldHMgdHJhbnNwb3J0LiAqL1xyXG4gICAgSHR0cFRyYW5zcG9ydFR5cGVbSHR0cFRyYW5zcG9ydFR5cGVbXCJXZWJTb2NrZXRzXCJdID0gMV0gPSBcIldlYlNvY2tldHNcIjtcclxuICAgIC8qKiBTcGVjaWZpZXMgdGhlIFNlcnZlci1TZW50IEV2ZW50cyB0cmFuc3BvcnQuICovXHJcbiAgICBIdHRwVHJhbnNwb3J0VHlwZVtIdHRwVHJhbnNwb3J0VHlwZVtcIlNlcnZlclNlbnRFdmVudHNcIl0gPSAyXSA9IFwiU2VydmVyU2VudEV2ZW50c1wiO1xyXG4gICAgLyoqIFNwZWNpZmllcyB0aGUgTG9uZyBQb2xsaW5nIHRyYW5zcG9ydC4gKi9cclxuICAgIEh0dHBUcmFuc3BvcnRUeXBlW0h0dHBUcmFuc3BvcnRUeXBlW1wiTG9uZ1BvbGxpbmdcIl0gPSA0XSA9IFwiTG9uZ1BvbGxpbmdcIjtcclxufSkoSHR0cFRyYW5zcG9ydFR5cGUgfHwgKEh0dHBUcmFuc3BvcnRUeXBlID0ge30pKTtcclxuLyoqIFNwZWNpZmllcyB0aGUgdHJhbnNmZXIgZm9ybWF0IGZvciBhIGNvbm5lY3Rpb24uICovXHJcbmV4cG9ydCB2YXIgVHJhbnNmZXJGb3JtYXQ7XHJcbihmdW5jdGlvbiAoVHJhbnNmZXJGb3JtYXQpIHtcclxuICAgIC8qKiBTcGVjaWZpZXMgdGhhdCBvbmx5IHRleHQgZGF0YSB3aWxsIGJlIHRyYW5zbWl0dGVkIG92ZXIgdGhlIGNvbm5lY3Rpb24uICovXHJcbiAgICBUcmFuc2ZlckZvcm1hdFtUcmFuc2ZlckZvcm1hdFtcIlRleHRcIl0gPSAxXSA9IFwiVGV4dFwiO1xyXG4gICAgLyoqIFNwZWNpZmllcyB0aGF0IGJpbmFyeSBkYXRhIHdpbGwgYmUgdHJhbnNtaXR0ZWQgb3ZlciB0aGUgY29ubmVjdGlvbi4gKi9cclxuICAgIFRyYW5zZmVyRm9ybWF0W1RyYW5zZmVyRm9ybWF0W1wiQmluYXJ5XCJdID0gMl0gPSBcIkJpbmFyeVwiO1xyXG59KShUcmFuc2ZlckZvcm1hdCB8fCAoVHJhbnNmZXJGb3JtYXQgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JVHJhbnNwb3J0LmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiLi9JSHViUHJvdG9jb2xcIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFRyYW5zZmVyRm9ybWF0IH0gZnJvbSBcIi4vSVRyYW5zcG9ydFwiO1xyXG5pbXBvcnQgeyBOdWxsTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2Vyc1wiO1xyXG5pbXBvcnQgeyBUZXh0TWVzc2FnZUZvcm1hdCB9IGZyb20gXCIuL1RleHRNZXNzYWdlRm9ybWF0XCI7XHJcbnZhciBKU09OX0hVQl9QUk9UT0NPTF9OQU1FID0gXCJqc29uXCI7XHJcbi8qKiBJbXBsZW1lbnRzIHRoZSBKU09OIEh1YiBQcm90b2NvbC4gKi9cclxudmFyIEpzb25IdWJQcm90b2NvbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEpzb25IdWJQcm90b2NvbCgpIHtcclxuICAgICAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgICAgICB0aGlzLm5hbWUgPSBKU09OX0hVQl9QUk9UT0NPTF9OQU1FO1xyXG4gICAgICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IDE7XHJcbiAgICAgICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICAgICAgdGhpcy50cmFuc2ZlckZvcm1hdCA9IFRyYW5zZmVyRm9ybWF0LlRleHQ7XHJcbiAgICB9XHJcbiAgICAvKiogQ3JlYXRlcyBhbiBhcnJheSBvZiB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLkh1Yk1lc3NhZ2V9IG9iamVjdHMgZnJvbSB0aGUgc3BlY2lmaWVkIHNlcmlhbGl6ZWQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHNlcmlhbGl6ZWQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge0lMb2dnZXJ9IGxvZ2dlciBBIGxvZ2dlciB0aGF0IHdpbGwgYmUgdXNlZCB0byBsb2cgbWVzc2FnZXMgdGhhdCBvY2N1ciBkdXJpbmcgcGFyc2luZy5cclxuICAgICAqL1xyXG4gICAgSnNvbkh1YlByb3RvY29sLnByb3RvdHlwZS5wYXJzZU1lc3NhZ2VzID0gZnVuY3Rpb24gKGlucHV0LCBsb2dnZXIpIHtcclxuICAgICAgICAvLyBUaGUgaW50ZXJmYWNlIGRvZXMgYWxsb3cgXCJBcnJheUJ1ZmZlclwiIHRvIGJlIHBhc3NlZCBpbiwgYnV0IHRoaXMgaW1wbGVtZW50YXRpb24gZG9lcyBub3QuIFNvIGxldCdzIHRocm93IGEgdXNlZnVsIGVycm9yLlxyXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dCBmb3IgSlNPTiBodWIgcHJvdG9jb2wuIEV4cGVjdGVkIGEgc3RyaW5nLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbnB1dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2dnZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbG9nZ2VyID0gTnVsbExvZ2dlci5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUGFyc2UgdGhlIG1lc3NhZ2VzXHJcbiAgICAgICAgdmFyIG1lc3NhZ2VzID0gVGV4dE1lc3NhZ2VGb3JtYXQucGFyc2UoaW5wdXQpO1xyXG4gICAgICAgIHZhciBodWJNZXNzYWdlcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgbWVzc2FnZXNfMSA9IG1lc3NhZ2VzOyBfaSA8IG1lc3NhZ2VzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbWVzc2FnZXNfMVtfaV07XHJcbiAgICAgICAgICAgIHZhciBwYXJzZWRNZXNzYWdlID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWRNZXNzYWdlLnR5cGUgIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGF5bG9hZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3dpdGNoIChwYXJzZWRNZXNzYWdlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuSW52b2NhdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzSW52b2NhdGlvbk1lc3NhZ2UocGFyc2VkTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLlN0cmVhbUl0ZW06XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N0cmVhbUl0ZW1NZXNzYWdlKHBhcnNlZE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21wbGV0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0aW9uTWVzc2FnZShwYXJzZWRNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuUGluZzpcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaW5nbGUgdmFsdWUsIG5vIG5lZWQgdG8gdmFsaWRhdGVcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuQ2xvc2U6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxsIG9wdGlvbmFsIHZhbHVlcywgbm8gbmVlZCB0byB2YWxpZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAvLyBGdXR1cmUgcHJvdG9jb2wgY2hhbmdlcyBjYW4gYWRkIG1lc3NhZ2UgdHlwZXMsIG9sZCBjbGllbnRzIGNhbiBpZ25vcmUgdGhlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiVW5rbm93biBtZXNzYWdlIHR5cGUgJ1wiICsgcGFyc2VkTWVzc2FnZS50eXBlICsgXCInIGlnbm9yZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGh1Yk1lc3NhZ2VzLnB1c2gocGFyc2VkTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBodWJNZXNzYWdlcztcclxuICAgIH07XHJcbiAgICAvKiogV3JpdGVzIHRoZSBzcGVjaWZpZWQge0BsaW5rIEBhc3BuZXQvc2lnbmFsci5IdWJNZXNzYWdlfSB0byBhIHN0cmluZyBhbmQgcmV0dXJucyBpdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0h1Yk1lc3NhZ2V9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gd3JpdGUuXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZyBjb250YWluaW5nIHRoZSBzZXJpYWxpemVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBKc29uSHViUHJvdG9jb2wucHJvdG90eXBlLndyaXRlTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIFRleHRNZXNzYWdlRm9ybWF0LndyaXRlKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcclxuICAgIH07XHJcbiAgICBKc29uSHViUHJvdG9jb2wucHJvdG90eXBlLmlzSW52b2NhdGlvbk1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuYXNzZXJ0Tm90RW1wdHlTdHJpbmcobWVzc2FnZS50YXJnZXQsIFwiSW52YWxpZCBwYXlsb2FkIGZvciBJbnZvY2F0aW9uIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlLmludm9jYXRpb25JZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXNzZXJ0Tm90RW1wdHlTdHJpbmcobWVzc2FnZS5pbnZvY2F0aW9uSWQsIFwiSW52YWxpZCBwYXlsb2FkIGZvciBJbnZvY2F0aW9uIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBKc29uSHViUHJvdG9jb2wucHJvdG90eXBlLmlzU3RyZWFtSXRlbU1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuYXNzZXJ0Tm90RW1wdHlTdHJpbmcobWVzc2FnZS5pbnZvY2F0aW9uSWQsIFwiSW52YWxpZCBwYXlsb2FkIGZvciBTdHJlYW1JdGVtIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlLml0ZW0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBheWxvYWQgZm9yIFN0cmVhbUl0ZW0gbWVzc2FnZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEpzb25IdWJQcm90b2NvbC5wcm90b3R5cGUuaXNDb21wbGV0aW9uTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UucmVzdWx0ICYmIG1lc3NhZ2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXlsb2FkIGZvciBDb21wbGV0aW9uIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1lc3NhZ2UucmVzdWx0ICYmIG1lc3NhZ2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5hc3NlcnROb3RFbXB0eVN0cmluZyhtZXNzYWdlLmVycm9yLCBcIkludmFsaWQgcGF5bG9hZCBmb3IgQ29tcGxldGlvbiBtZXNzYWdlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hc3NlcnROb3RFbXB0eVN0cmluZyhtZXNzYWdlLmludm9jYXRpb25JZCwgXCJJbnZhbGlkIHBheWxvYWQgZm9yIENvbXBsZXRpb24gbWVzc2FnZS5cIik7XHJcbiAgICB9O1xyXG4gICAgSnNvbkh1YlByb3RvY29sLnByb3RvdHlwZS5hc3NlcnROb3RFbXB0eVN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIiB8fCB2YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEpzb25IdWJQcm90b2NvbDtcclxufSgpKTtcclxuZXhwb3J0IHsgSnNvbkh1YlByb3RvY29sIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUpzb25IdWJQcm90b2NvbC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbi8qKiBBIGxvZ2dlciB0aGF0IGRvZXMgbm90aGluZyB3aGVuIGxvZyBtZXNzYWdlcyBhcmUgc2VudCB0byBpdC4gKi9cclxudmFyIE51bGxMb2dnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOdWxsTG9nZ2VyKCkge1xyXG4gICAgfVxyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIE51bGxMb2dnZXIucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIChfbG9nTGV2ZWwsIF9tZXNzYWdlKSB7XHJcbiAgICB9O1xyXG4gICAgLyoqIFRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBAYXNwbmV0L3NpZ25hbHIuTnVsbExvZ2dlcn0uICovXHJcbiAgICBOdWxsTG9nZ2VyLmluc3RhbmNlID0gbmV3IE51bGxMb2dnZXIoKTtcclxuICAgIHJldHVybiBOdWxsTG9nZ2VyO1xyXG59KCkpO1xyXG5leHBvcnQgeyBOdWxsTG9nZ2VyIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxvZ2dlcnMuanMubWFwIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmltcG9ydCB7IEFib3J0Q29udHJvbGxlciB9IGZyb20gXCIuL0Fib3J0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3IsIFRpbWVvdXRFcnJvciB9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgVHJhbnNmZXJGb3JtYXQgfSBmcm9tIFwiLi9JVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IEFyZywgZ2V0RGF0YURldGFpbCwgc2VuZE1lc3NhZ2UgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG4vLyBOb3QgZXhwb3J0ZWQgZnJvbSAnaW5kZXgnLCB0aGlzIHR5cGUgaXMgaW50ZXJuYWwuXHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG52YXIgTG9uZ1BvbGxpbmdUcmFuc3BvcnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMb25nUG9sbGluZ1RyYW5zcG9ydChodHRwQ2xpZW50LCBhY2Nlc3NUb2tlbkZhY3RvcnksIGxvZ2dlciwgbG9nTWVzc2FnZUNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xyXG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW5GYWN0b3J5ID0gYWNjZXNzVG9rZW5GYWN0b3J5O1xyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMucG9sbEFib3J0ID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZUNvbnRlbnQgPSBsb2dNZXNzYWdlQ29udGVudDtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9ucmVjZWl2ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbmNsb3NlID0gbnVsbDtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMb25nUG9sbGluZ1RyYW5zcG9ydC5wcm90b3R5cGUsIFwicG9sbEFib3J0ZWRcIiwge1xyXG4gICAgICAgIC8vIFRoaXMgaXMgYW4gaW50ZXJuYWwgdHlwZSwgbm90IGV4cG9ydGVkIGZyb20gJ2luZGV4JyBzbyB0aGlzIGlzIHJlYWxseSBqdXN0IGludGVybmFsLlxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb2xsQWJvcnQuYWJvcnRlZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIExvbmdQb2xsaW5nVHJhbnNwb3J0LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKHVybCwgdHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwb2xsT3B0aW9ucywgdG9rZW4sIHBvbGxVcmwsIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcmcuaXNSZXF1aXJlZCh1cmwsIFwidXJsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcmcuaXNSZXF1aXJlZCh0cmFuc2ZlckZvcm1hdCwgXCJ0cmFuc2ZlckZvcm1hdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJnLmlzSW4odHJhbnNmZXJGb3JtYXQsIFRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIENvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGxvdyBiaW5hcnkgZm9ybWF0IG9uIE5vZGUgYW5kIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCBiaW5hcnkgY29udGVudCAoaW5kaWNhdGVkIGJ5IHRoZSBwcmVzZW5jZSBvZiByZXNwb25zZVR5cGUgcHJvcGVydHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2ZlckZvcm1hdCA9PT0gVHJhbnNmZXJGb3JtYXQuQmluYXJ5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBuZXcgWE1MSHR0cFJlcXVlc3QoKS5yZXNwb25zZVR5cGUgIT09IFwic3RyaW5nXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCaW5hcnkgcHJvdG9jb2xzIG92ZXIgWG1sSHR0cFJlcXVlc3Qgbm90IGltcGxlbWVudGluZyBhZHZhbmNlZCBmZWF0dXJlcyBhcmUgbm90IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9sbE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydFNpZ25hbDogdGhpcy5wb2xsQWJvcnQuc2lnbmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2ZlckZvcm1hdCA9PT0gVHJhbnNmZXJGb3JtYXQuQmluYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2xsT3B0aW9ucy5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRBY2Nlc3NUb2tlbigpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhlYWRlclRva2VuKHBvbGxPcHRpb25zLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbGxVcmwgPSB1cmwgKyBcIiZfPVwiICsgRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIHBvbGxpbmc6IFwiICsgcG9sbFVybCArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5odHRwQ2xpZW50LmdldChwb2xsVXJsLCBwb2xsT3B0aW9ucyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBVbmV4cGVjdGVkIHJlc3BvbnNlIGNvZGU6IFwiICsgcmVzcG9uc2Uuc3RhdHVzQ29kZSArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hcmsgcnVubmluZyBhcyBmYWxzZSBzbyB0aGF0IHRoZSBwb2xsIGltbWVkaWF0ZWx5IGVuZHMgYW5kIHJ1bnMgdGhlIGNsb3NlIGxvZ2ljXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRXJyb3IgPSBuZXcgSHR0cEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQgfHwgXCJcIiwgcmVzcG9uc2Uuc3RhdHVzQ29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZpbmcgPSB0aGlzLnBvbGwodGhpcy51cmwsIHBvbGxPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMb25nUG9sbGluZ1RyYW5zcG9ydC5wcm90b3R5cGUuZ2V0QWNjZXNzVG9rZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWNjZXNzVG9rZW5GYWN0b3J5KSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5hY2Nlc3NUb2tlbkZhY3RvcnkoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCBudWxsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTG9uZ1BvbGxpbmdUcmFuc3BvcnQucHJvdG90eXBlLnVwZGF0ZUhlYWRlclRva2VuID0gZnVuY3Rpb24gKHJlcXVlc3QsIHRva2VuKSB7XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0LmhlYWRlcnMpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcclxuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IFwiQmVhcmVyIFwiICsgdG9rZW47XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXHJcbiAgICAgICAgaWYgKHJlcXVlc3QuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0pIHtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0LmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMb25nUG9sbGluZ1RyYW5zcG9ydC5wcm90b3R5cGUucG9sbCA9IGZ1bmN0aW9uICh1cmwsIHBvbGxPcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4sIHBvbGxVcmwsIHJlc3BvbnNlLCBlXzE7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgLCA4LCA5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRBY2Nlc3NUb2tlbigpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhlYWRlclRva2VuKHBvbGxPcHRpb25zLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMywgNSwgLCA2XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbGxVcmwgPSB1cmwgKyBcIiZfPVwiICsgRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIHBvbGxpbmc6IFwiICsgcG9sbFVybCArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5odHRwQ2xpZW50LmdldChwb2xsVXJsLCBwb2xsT3B0aW9ucyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBQb2xsIHRlcm1pbmF0ZWQgYnkgc2VydmVyLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFVuZXhwZWN0ZWQgcmVzcG9uc2UgY29kZTogXCIgKyByZXNwb25zZS5zdGF0dXNDb2RlICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW5leHBlY3RlZCBzdGF0dXMgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUVycm9yID0gbmV3IEh0dHBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0IHx8IFwiXCIsIHJlc3BvbnNlLnN0YXR1c0NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgZGF0YSByZWNlaXZlZC4gXCIgKyBnZXREYXRhRGV0YWlsKHJlc3BvbnNlLmNvbnRlbnQsIHRoaXMubG9nTWVzc2FnZUNvbnRlbnQpICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ucmVjZWl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9ucmVjZWl2ZShyZXNwb25zZS5jb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFub3RoZXIgd2F5IHRpbWVvdXQgbWFuaWZlc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFBvbGwgdGltZWQgb3V0LCByZWlzc3VpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9nIGJ1dCBkaXNyZWdhcmQgZXJyb3JzIHRoYXQgb2NjdXIgYWZ0ZXIgc3RvcHBpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBQb2xsIGVycm9yZWQgYWZ0ZXIgc2h1dGRvd246IFwiICsgZV8xLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVfMSBpbnN0YW5jZW9mIFRpbWVvdXRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSB0aW1lb3V0cyBhbmQgcmVpc3N1ZSB0aGUgcG9sbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgUG9sbCB0aW1lZCBvdXQsIHJlaXNzdWluZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSB0aGUgY29ubmVjdGlvbiB3aXRoIHRoZSBlcnJvciBhcyB0aGUgcmVzdWx0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VFcnJvciA9IGVfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgUG9sbGluZyBjb21wbGV0ZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIHdpbGwgcmVhY2ggaGVyZSB3aXRoIHBvbGxBYm9ydGVkPT1mYWxzZSB3aGVuIHRoZSBzZXJ2ZXIgcmV0dXJuZWQgYSByZXNwb25zZSBjYXVzaW5nIHRoZSB0cmFuc3BvcnQgdG8gc3RvcC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgcG9sbEFib3J0ZWQ9PXRydWUgdGhlbiBjbGllbnQgaW5pdGlhdGVkIHRoZSBzdG9wIGFuZCB0aGUgc3RvcCBtZXRob2Qgd2lsbCByYWlzZSB0aGUgY2xvc2UgZXZlbnQgYWZ0ZXIgREVMRVRFIGlzIHNlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5wb2xsQWJvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWlzZU9uQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMb25nUG9sbGluZ1RyYW5zcG9ydC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW5ub3Qgc2VuZCB1bnRpbCB0aGUgdHJhbnNwb3J0IGlzIGNvbm5lY3RlZFwiKSldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHNlbmRNZXNzYWdlKHRoaXMubG9nZ2VyLCBcIkxvbmdQb2xsaW5nXCIsIHRoaXMuaHR0cENsaWVudCwgdGhpcy51cmwsIHRoaXMuYWNjZXNzVG9rZW5GYWN0b3J5LCBkYXRhLCB0aGlzLmxvZ01lc3NhZ2VDb250ZW50KV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExvbmdQb2xsaW5nVHJhbnNwb3J0LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGRlbGV0ZU9wdGlvbnMsIHRva2VuO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgU3RvcHBpbmcgcG9sbGluZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlbGwgcmVjZWl2aW5nIGxvb3AgdG8gc3RvcCwgYWJvcnQgYW55IGN1cnJlbnQgcmVxdWVzdCwgYW5kIHRoZW4gd2FpdCBmb3IgaXQgdG8gZmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvbGxBYm9ydC5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsICwgNSwgNl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlY2VpdmluZ107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgREVMRVRFIHRvIGNsZWFuIHVwIGxvbmcgcG9sbGluZyBvbiB0aGUgc2VydmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBzZW5kaW5nIERFTEVURSByZXF1ZXN0IHRvIFwiICsgdGhpcy51cmwgKyBcIi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRBY2Nlc3NUb2tlbigpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhlYWRlclRva2VuKGRlbGV0ZU9wdGlvbnMsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5odHRwQ2xpZW50LmRlbGV0ZSh0aGlzLnVybCwgZGVsZXRlT3B0aW9ucyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgREVMRVRFIHJlcXVlc3Qgc2VudC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFN0b3AgZmluaXNoZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSYWlzZSBjbG9zZSBldmVudCBoZXJlIGluc3RlYWQgb2YgaW4gcG9sbGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCBuZWVkcyB0byBoYXBwZW4gYWZ0ZXIgdGhlIERFTEVURSByZXF1ZXN0IGlzIHNlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWlzZU9uQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTG9uZ1BvbGxpbmdUcmFuc3BvcnQucHJvdG90eXBlLnJhaXNlT25DbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5vbmNsb3NlKSB7XHJcbiAgICAgICAgICAgIHZhciBsb2dNZXNzYWdlID0gXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBGaXJpbmcgb25jbG9zZSBldmVudC5cIjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2xvc2VFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgbG9nTWVzc2FnZSArPSBcIiBFcnJvcjogXCIgKyB0aGlzLmNsb3NlRXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBsb2dNZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5vbmNsb3NlKHRoaXMuY2xvc2VFcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBMb25nUG9sbGluZ1RyYW5zcG9ydDtcclxufSgpKTtcclxuZXhwb3J0IHsgTG9uZ1BvbGxpbmdUcmFuc3BvcnQgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TG9uZ1BvbGxpbmdUcmFuc3BvcnQuanMubWFwIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuaW1wb3J0IHsgQWJvcnRFcnJvciwgSHR0cEVycm9yLCBUaW1lb3V0RXJyb3IgfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIi4vSHR0cENsaWVudFwiO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgaXNBcnJheUJ1ZmZlciB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbnZhciByZXF1ZXN0TW9kdWxlO1xyXG5pZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAvLyBJbiBvcmRlciB0byBpZ25vcmUgdGhlIGR5bmFtaWMgcmVxdWlyZSBpbiB3ZWJwYWNrIGJ1aWxkcyB3ZSBuZWVkIHRvIGRvIHRoaXMgbWFnaWNcclxuICAgIC8vIEB0cy1pZ25vcmU6IFRTIGRvZXNuJ3Qga25vdyBhYm91dCB0aGVzZSBuYW1lc1xyXG4gICAgdmFyIHJlcXVpcmVGdW5jID0gdHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gPT09IFwiZnVuY3Rpb25cIiA/IF9fbm9uX3dlYnBhY2tfcmVxdWlyZV9fIDogcmVxdWlyZTtcclxuICAgIHJlcXVlc3RNb2R1bGUgPSByZXF1aXJlRnVuYyhcInJlcXVlc3RcIik7XHJcbn1cclxudmFyIE5vZGVIdHRwQ2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE5vZGVIdHRwQ2xpZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTm9kZUh0dHBDbGllbnQobG9nZ2VyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3RNb2R1bGUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlICdyZXF1ZXN0JyBtb2R1bGUgY291bGQgbm90IGJlIGxvYWRlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90aGlzLmxvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICBfdGhpcy5jb29raWVKYXIgPSByZXF1ZXN0TW9kdWxlLmphcigpO1xyXG4gICAgICAgIF90aGlzLnJlcXVlc3QgPSByZXF1ZXN0TW9kdWxlLmRlZmF1bHRzKHsgamFyOiBfdGhpcy5jb29raWVKYXIgfSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgTm9kZUh0dHBDbGllbnQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoaHR0cFJlcXVlc3QpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0Qm9keTtcclxuICAgICAgICAgICAgaWYgKGlzQXJyYXlCdWZmZXIoaHR0cFJlcXVlc3QuY29udGVudCkpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RCb2R5ID0gQnVmZmVyLmZyb20oaHR0cFJlcXVlc3QuY29udGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Qm9keSA9IGh0dHBSZXF1ZXN0LmNvbnRlbnQgfHwgXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY3VycmVudFJlcXVlc3QgPSBfdGhpcy5yZXF1ZXN0KGh0dHBSZXF1ZXN0LnVybCwge1xyXG4gICAgICAgICAgICAgICAgYm9keTogcmVxdWVzdEJvZHksXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBiaW5hcnkgaXMgZXhwZWN0ZWQgJ251bGwnIHNob3VsZCBiZSB1c2VkLCBvdGhlcndpc2UgZm9yIHRleHQgJ3V0ZjgnXHJcbiAgICAgICAgICAgICAgICBlbmNvZGluZzogaHR0cFJlcXVlc3QucmVzcG9uc2VUeXBlID09PSBcImFycmF5YnVmZmVyXCIgPyBudWxsIDogXCJ1dGY4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBfX2Fzc2lnbih7IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRlbGwgYXV0aCBtaWRkbGV3YXJlIHRvIDQwMSBpbnN0ZWFkIG9mIHJlZGlyZWN0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIiB9LCBodHRwUmVxdWVzdC5oZWFkZXJzKSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogaHR0cFJlcXVlc3QubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogaHR0cFJlcXVlc3QudGltZW91dCxcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSwgYm9keSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGh0dHBSZXF1ZXN0LmFib3J0U2lnbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHR0cFJlcXVlc3QuYWJvcnRTaWduYWwub25hYm9ydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gXCJFVElNRURPVVRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIFwiVGltZW91dCBmcm9tIEhUVFAgcmVxdWVzdC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgVGltZW91dEVycm9yKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIFwiRXJyb3IgZnJvbSBIVFRQIHJlcXVlc3QuIFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1c0NvZGUgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBIdHRwUmVzcG9uc2UocmVzcG9uc2Uuc3RhdHVzQ29kZSwgcmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSB8fCBcIlwiLCBib2R5KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEh0dHBFcnJvcihyZXNwb25zZS5zdGF0dXNNZXNzYWdlIHx8IFwiXCIsIHJlc3BvbnNlLnN0YXR1c0NvZGUgfHwgMCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGh0dHBSZXF1ZXN0LmFib3J0U2lnbmFsKSB7XHJcbiAgICAgICAgICAgICAgICBodHRwUmVxdWVzdC5hYm9ydFNpZ25hbC5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZXF1ZXN0LmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBBYm9ydEVycm9yKCkpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE5vZGVIdHRwQ2xpZW50LnByb3RvdHlwZS5nZXRDb29raWVTdHJpbmcgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29va2llSmFyLmdldENvb2tpZVN0cmluZyh1cmwpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBOb2RlSHR0cENsaWVudDtcclxufShIdHRwQ2xpZW50KSk7XHJcbmV4cG9ydCB7IE5vZGVIdHRwQ2xpZW50IH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5vZGVIdHRwQ2xpZW50LmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgVHJhbnNmZXJGb3JtYXQgfSBmcm9tIFwiLi9JVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IEFyZywgZ2V0RGF0YURldGFpbCwgUGxhdGZvcm0sIHNlbmRNZXNzYWdlIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuLyoqIEBwcml2YXRlICovXHJcbnZhciBTZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2VydmVyU2VudEV2ZW50c1RyYW5zcG9ydChodHRwQ2xpZW50LCBhY2Nlc3NUb2tlbkZhY3RvcnksIGxvZ2dlciwgbG9nTWVzc2FnZUNvbnRlbnQsIGV2ZW50U291cmNlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xyXG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW5GYWN0b3J5ID0gYWNjZXNzVG9rZW5GYWN0b3J5O1xyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZUNvbnRlbnQgPSBsb2dNZXNzYWdlQ29udGVudDtcclxuICAgICAgICB0aGlzLmV2ZW50U291cmNlQ29uc3RydWN0b3IgPSBldmVudFNvdXJjZUNvbnN0cnVjdG9yO1xyXG4gICAgICAgIHRoaXMub25yZWNlaXZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uY2xvc2UgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgU2VydmVyU2VudEV2ZW50c1RyYW5zcG9ydC5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uICh1cmwsIHRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW47XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyZy5pc1JlcXVpcmVkKHVybCwgXCJ1cmxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyZy5pc1JlcXVpcmVkKHRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcmcuaXNJbih0cmFuc2ZlckZvcm1hdCwgVHJhbnNmZXJGb3JtYXQsIFwidHJhbnNmZXJGb3JtYXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoU1NFIHRyYW5zcG9ydCkgQ29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCB1cmwgYmVmb3JlIGFjY2Vzc1Rva2VuRmFjdG9yeSBiZWNhdXNlIHRoaXMudXJsIGlzIG9ubHkgZm9yIHNlbmQgYW5kIHdlIHNldCB0aGUgYXV0aCBoZWFkZXIgaW5zdGVhZCBvZiB0aGUgcXVlcnkgc3RyaW5nIGZvciBzZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWNjZXNzVG9rZW5GYWN0b3J5KSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5hY2Nlc3NUb2tlbkZhY3RvcnkoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgKz0gKHVybC5pbmRleE9mKFwiP1wiKSA8IDAgPyBcIj9cIiA6IFwiJlwiKSArIChcImFjY2Vzc190b2tlbj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNmZXJGb3JtYXQgIT09IFRyYW5zZmVyRm9ybWF0LlRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIFNlcnZlci1TZW50IEV2ZW50cyB0cmFuc3BvcnQgb25seSBzdXBwb3J0cyB0aGUgJ1RleHQnIHRyYW5zZmVyIGZvcm1hdFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50U291cmNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciB8fCBQbGF0Zm9ybS5pc1dlYldvcmtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50U291cmNlID0gbmV3IF90aGlzLmV2ZW50U291cmNlQ29uc3RydWN0b3IodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vbi1icm93c2VyIHBhc3NlcyBjb29raWVzIHZpYSB0aGUgZGljdGlvbmFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb29raWVzID0gX3RoaXMuaHR0cENsaWVudC5nZXRDb29raWVTdHJpbmcodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFNvdXJjZSA9IG5ldyBfdGhpcy5ldmVudFNvdXJjZUNvbnN0cnVjdG9yKHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUsIGhlYWRlcnM6IHsgQ29va2llOiBjb29raWVzIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50U291cmNlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5vbnJlY2VpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoU1NFIHRyYW5zcG9ydCkgZGF0YSByZWNlaXZlZC4gXCIgKyBnZXREYXRhRGV0YWlsKGUuZGF0YSwgX3RoaXMubG9nTWVzc2FnZUNvbnRlbnQpICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm9ucmVjZWl2ZShlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRTb3VyY2Uub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihlLmRhdGEgfHwgXCJFcnJvciBvY2N1cnJlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRTb3VyY2Uub25vcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBcIlNTRSBjb25uZWN0ZWQgdG8gXCIgKyBfdGhpcy51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ldmVudFNvdXJjZSA9IGV2ZW50U291cmNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ldmVudFNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW5ub3Qgc2VuZCB1bnRpbCB0aGUgdHJhbnNwb3J0IGlzIGNvbm5lY3RlZFwiKSldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHNlbmRNZXNzYWdlKHRoaXMubG9nZ2VyLCBcIlNTRVwiLCB0aGlzLmh0dHBDbGllbnQsIHRoaXMudXJsLCB0aGlzLmFjY2Vzc1Rva2VuRmFjdG9yeSwgZGF0YSwgdGhpcy5sb2dNZXNzYWdlQ29udGVudCldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9O1xyXG4gICAgU2VydmVyU2VudEV2ZW50c1RyYW5zcG9ydC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50U291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRTb3VyY2UuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudFNvdXJjZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25jbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmNsb3NlKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBTZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0O1xyXG59KCkpO1xyXG5leHBvcnQgeyBTZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0IH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNlcnZlclNlbnRFdmVudHNUcmFuc3BvcnQuanMubWFwIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5pbXBvcnQgeyBTdWJqZWN0U3Vic2NyaXB0aW9uIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuLyoqIFN0cmVhbSBpbXBsZW1lbnRhdGlvbiB0byBzdHJlYW0gaXRlbXMgdG8gdGhlIHNlcnZlci4gKi9cclxudmFyIFN1YmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTdWJqZWN0KCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XHJcbiAgICB9XHJcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5vYnNlcnZlcnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IF9hW19pXTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU3ViamVjdC5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMub2JzZXJ2ZXJzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZlci5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5vYnNlcnZlcnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IF9hW19pXTtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmVyLmNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFN1YmplY3QucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3ViamVjdFN1YnNjcmlwdGlvbih0aGlzLCBvYnNlcnZlcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN1YmplY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFN1YmplY3QgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3ViamVjdC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbi8vIE5vdCBleHBvcnRlZCBmcm9tIGluZGV4XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG52YXIgVGV4dE1lc3NhZ2VGb3JtYXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUZXh0TWVzc2FnZUZvcm1hdCgpIHtcclxuICAgIH1cclxuICAgIFRleHRNZXNzYWdlRm9ybWF0LndyaXRlID0gZnVuY3Rpb24gKG91dHB1dCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiICsgb3V0cHV0ICsgVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yO1xyXG4gICAgfTtcclxuICAgIFRleHRNZXNzYWdlRm9ybWF0LnBhcnNlID0gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgaWYgKGlucHV0W2lucHV0Lmxlbmd0aCAtIDFdICE9PSBUZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWVzc2FnZSBpcyBpbmNvbXBsZXRlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1lc3NhZ2VzID0gaW5wdXQuc3BsaXQoVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yKTtcclxuICAgICAgICBtZXNzYWdlcy5wb3AoKTtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZXM7XHJcbiAgICB9O1xyXG4gICAgVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yQ29kZSA9IDB4MWU7XHJcbiAgICBUZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3IgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFRleHRNZXNzYWdlRm9ybWF0LlJlY29yZFNlcGFyYXRvckNvZGUpO1xyXG4gICAgcmV0dXJuIFRleHRNZXNzYWdlRm9ybWF0O1xyXG59KCkpO1xyXG5leHBvcnQgeyBUZXh0TWVzc2FnZUZvcm1hdCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1UZXh0TWVzc2FnZUZvcm1hdC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IE51bGxMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJzXCI7XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG52YXIgQXJnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXJnKCkge1xyXG4gICAgfVxyXG4gICAgQXJnLmlzUmVxdWlyZWQgPSBmdW5jdGlvbiAodmFsLCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ1wiICsgbmFtZSArIFwiJyBhcmd1bWVudCBpcyByZXF1aXJlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEFyZy5pc0luID0gZnVuY3Rpb24gKHZhbCwgdmFsdWVzLCBuYW1lKSB7XHJcbiAgICAgICAgLy8gVHlwZVNjcmlwdCBlbnVtcyBoYXZlIGtleXMgZm9yICoqYm90aCoqIHRoZSBuYW1lIGFuZCB0aGUgdmFsdWUgb2YgZWFjaCBlbnVtIG1lbWJlciBvbiB0aGUgdHlwZSBpdHNlbGYuXHJcbiAgICAgICAgaWYgKCEodmFsIGluIHZhbHVlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBcIiArIG5hbWUgKyBcIiB2YWx1ZTogXCIgKyB2YWwgKyBcIi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBBcmc7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEFyZyB9O1xyXG4vKiogQHByaXZhdGUgKi9cclxudmFyIFBsYXRmb3JtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGxhdGZvcm0oKSB7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUGxhdGZvcm0sIFwiaXNCcm93c2VyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUGxhdGZvcm0sIFwiaXNXZWJXb3JrZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgXCJpbXBvcnRTY3JpcHRzXCIgaW4gc2VsZjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQbGF0Zm9ybSwgXCJpc05vZGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNCcm93c2VyICYmICF0aGlzLmlzV2ViV29ya2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFBsYXRmb3JtO1xyXG59KCkpO1xyXG5leHBvcnQgeyBQbGF0Zm9ybSB9O1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFEZXRhaWwoZGF0YSwgaW5jbHVkZUNvbnRlbnQpIHtcclxuICAgIHZhciBkZXRhaWwgPSBcIlwiO1xyXG4gICAgaWYgKGlzQXJyYXlCdWZmZXIoZGF0YSkpIHtcclxuICAgICAgICBkZXRhaWwgPSBcIkJpbmFyeSBkYXRhIG9mIGxlbmd0aCBcIiArIGRhdGEuYnl0ZUxlbmd0aDtcclxuICAgICAgICBpZiAoaW5jbHVkZUNvbnRlbnQpIHtcclxuICAgICAgICAgICAgZGV0YWlsICs9IFwiLiBDb250ZW50OiAnXCIgKyBmb3JtYXRBcnJheUJ1ZmZlcihkYXRhKSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZGV0YWlsID0gXCJTdHJpbmcgZGF0YSBvZiBsZW5ndGggXCIgKyBkYXRhLmxlbmd0aDtcclxuICAgICAgICBpZiAoaW5jbHVkZUNvbnRlbnQpIHtcclxuICAgICAgICAgICAgZGV0YWlsICs9IFwiLiBDb250ZW50OiAnXCIgKyBkYXRhICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRldGFpbDtcclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEFycmF5QnVmZmVyKGRhdGEpIHtcclxuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XHJcbiAgICAvLyBVaW50OEFycmF5Lm1hcCBvbmx5IHN1cHBvcnRzIHJldHVybmluZyBhbm90aGVyIFVpbnQ4QXJyYXk/XHJcbiAgICB2YXIgc3RyID0gXCJcIjtcclxuICAgIHZpZXcuZm9yRWFjaChmdW5jdGlvbiAobnVtKSB7XHJcbiAgICAgICAgdmFyIHBhZCA9IG51bSA8IDE2ID8gXCIwXCIgOiBcIlwiO1xyXG4gICAgICAgIHN0ciArPSBcIjB4XCIgKyBwYWQgKyBudW0udG9TdHJpbmcoMTYpICsgXCIgXCI7XHJcbiAgICB9KTtcclxuICAgIC8vIFRyaW0gb2YgdHJhaWxpbmcgc3BhY2UuXHJcbiAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSk7XHJcbn1cclxuLy8gQWxzbyBpbiBzaWduYWxyLXByb3RvY29sLW1zZ3BhY2svVXRpbHMudHNcclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xyXG4gICAgcmV0dXJuIHZhbCAmJiB0eXBlb2YgQXJyYXlCdWZmZXIgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICAodmFsIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHxcclxuICAgICAgICAgICAgLy8gU29tZXRpbWVzIHdlIGdldCBhbiBBcnJheUJ1ZmZlciB0aGF0IGRvZXNuJ3Qgc2F0aXNmeSBpbnN0YW5jZW9mXHJcbiAgICAgICAgICAgICh2YWwuY29uc3RydWN0b3IgJiYgdmFsLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlCdWZmZXJcIikpO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2UobG9nZ2VyLCB0cmFuc3BvcnROYW1lLCBodHRwQ2xpZW50LCB1cmwsIGFjY2Vzc1Rva2VuRmFjdG9yeSwgY29udGVudCwgbG9nTWVzc2FnZUNvbnRlbnQpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EsIGhlYWRlcnMsIHRva2VuLCByZXNwb25zZVR5cGUsIHJlc3BvbnNlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWNjZXNzVG9rZW5GYWN0b3J5KSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBhY2Nlc3NUb2tlbkZhY3RvcnkoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgPSAoX2EgPSB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hW1wiQXV0aG9yaXphdGlvblwiXSA9IFwiQmVhcmVyIFwiICsgdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihcIiArIHRyYW5zcG9ydE5hbWUgKyBcIiB0cmFuc3BvcnQpIHNlbmRpbmcgZGF0YS4gXCIgKyBnZXREYXRhRGV0YWlsKGNvbnRlbnQsIGxvZ01lc3NhZ2VDb250ZW50KSArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGUgPSBpc0FycmF5QnVmZmVyKGNvbnRlbnQpID8gXCJhcnJheWJ1ZmZlclwiIDogXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaHR0cENsaWVudC5wb3N0KHVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6IHJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKFwiICsgdHJhbnNwb3J0TmFtZSArIFwiIHRyYW5zcG9ydCkgcmVxdWVzdCBjb21wbGV0ZS4gUmVzcG9uc2Ugc3RhdHVzOiBcIiArIHJlc3BvbnNlLnN0YXR1c0NvZGUgKyBcIi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcihsb2dnZXIpIHtcclxuICAgIGlmIChsb2dnZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29uc29sZUxvZ2dlcihMb2dMZXZlbC5JbmZvcm1hdGlvbik7XHJcbiAgICB9XHJcbiAgICBpZiAobG9nZ2VyID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIE51bGxMb2dnZXIuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBpZiAobG9nZ2VyLmxvZykge1xyXG4gICAgICAgIHJldHVybiBsb2dnZXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IENvbnNvbGVMb2dnZXIobG9nZ2VyKTtcclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxudmFyIFN1YmplY3RTdWJzY3JpcHRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTdWJqZWN0U3Vic2NyaXB0aW9uKHN1YmplY3QsIG9ic2VydmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XHJcbiAgICB9XHJcbiAgICBTdWJqZWN0U3Vic2NyaXB0aW9uLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuc3ViamVjdC5vYnNlcnZlcnMuaW5kZXhPZih0aGlzLm9ic2VydmVyKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YmplY3Qub2JzZXJ2ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN1YmplY3Qub2JzZXJ2ZXJzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnN1YmplY3QuY2FuY2VsQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJqZWN0LmNhbmNlbENhbGxiYWNrKCkuY2F0Y2goZnVuY3Rpb24gKF8pIHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBTdWJqZWN0U3Vic2NyaXB0aW9uO1xyXG59KCkpO1xyXG5leHBvcnQgeyBTdWJqZWN0U3Vic2NyaXB0aW9uIH07XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG52YXIgQ29uc29sZUxvZ2dlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbnNvbGVMb2dnZXIobWluaW11bUxvZ0xldmVsKSB7XHJcbiAgICAgICAgdGhpcy5taW5pbXVtTG9nTGV2ZWwgPSBtaW5pbXVtTG9nTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5vdXRwdXRDb25zb2xlID0gY29uc29sZTtcclxuICAgIH1cclxuICAgIENvbnNvbGVMb2dnZXIucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIChsb2dMZXZlbCwgbWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChsb2dMZXZlbCA+PSB0aGlzLm1pbmltdW1Mb2dMZXZlbCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxvZ0xldmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIExvZ0xldmVsLkNyaXRpY2FsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5FcnJvcjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dENvbnNvbGUuZXJyb3IoXCJbXCIgKyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgKyBcIl0gXCIgKyBMb2dMZXZlbFtsb2dMZXZlbF0gKyBcIjogXCIgKyBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuV2FybmluZzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dENvbnNvbGUud2FybihcIltcIiArIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSArIFwiXSBcIiArIExvZ0xldmVsW2xvZ0xldmVsXSArIFwiOiBcIiArIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5JbmZvcm1hdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dENvbnNvbGUuaW5mbyhcIltcIiArIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSArIFwiXSBcIiArIExvZ0xldmVsW2xvZ0xldmVsXSArIFwiOiBcIiArIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRlYnVnIG9ubHkgZ29lcyB0byBhdHRhY2hlZCBkZWJ1Z2dlcnMgaW4gTm9kZSwgc28gd2UgdXNlIGNvbnNvbGUubG9nIGZvciBUcmFjZSBhbmQgRGVidWdcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dENvbnNvbGUubG9nKFwiW1wiICsgbmV3IERhdGUoKS50b0lTT1N0cmluZygpICsgXCJdIFwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCI6IFwiICsgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbnNvbGVMb2dnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IENvbnNvbGVMb2dnZXIgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VXRpbHMuanMubWFwIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBUcmFuc2ZlckZvcm1hdCB9IGZyb20gXCIuL0lUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgQXJnLCBnZXREYXRhRGV0YWlsLCBQbGF0Zm9ybSB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG52YXIgV2ViU29ja2V0VHJhbnNwb3J0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2ViU29ja2V0VHJhbnNwb3J0KGh0dHBDbGllbnQsIGFjY2Vzc1Rva2VuRmFjdG9yeSwgbG9nZ2VyLCBsb2dNZXNzYWdlQ29udGVudCwgd2ViU29ja2V0Q29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuRmFjdG9yeSA9IGFjY2Vzc1Rva2VuRmFjdG9yeTtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2VDb250ZW50ID0gbG9nTWVzc2FnZUNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy53ZWJTb2NrZXRDb25zdHJ1Y3RvciA9IHdlYlNvY2tldENvbnN0cnVjdG9yO1xyXG4gICAgICAgIHRoaXMuaHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XHJcbiAgICAgICAgdGhpcy5vbnJlY2VpdmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25jbG9zZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBXZWJTb2NrZXRUcmFuc3BvcnQucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAodXJsLCB0cmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcmcuaXNSZXF1aXJlZCh1cmwsIFwidXJsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcmcuaXNSZXF1aXJlZCh0cmFuc2ZlckZvcm1hdCwgXCJ0cmFuc2ZlckZvcm1hdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJnLmlzSW4odHJhbnNmZXJGb3JtYXQsIFRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKFdlYlNvY2tldHMgdHJhbnNwb3J0KSBDb25uZWN0aW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFjY2Vzc1Rva2VuRmFjdG9yeSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuYWNjZXNzVG9rZW5GYWN0b3J5KCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsICs9ICh1cmwuaW5kZXhPZihcIj9cIikgPCAwID8gXCI/XCIgOiBcIiZcIikgKyAoXCJhY2Nlc3NfdG9rZW49XCIgKyBlbmNvZGVVUklDb21wb25lbnQodG9rZW4pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL15odHRwLywgXCJ3c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ZWJTb2NrZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29va2llcyA9IF90aGlzLmh0dHBDbGllbnQuZ2V0Q29va2llU3RyaW5nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUGxhdGZvcm0uaXNOb2RlICYmIGNvb2tpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHBhc3MgY29va2llcyB3aGVuIGluIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlNvY2tldCA9IG5ldyBfdGhpcy53ZWJTb2NrZXRDb25zdHJ1Y3Rvcih1cmwsIHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWU6IFwiXCIgKyBjb29raWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3ZWJTb2NrZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaHJvbWUgaXMgbm90IGhhcHB5IHdpdGggcGFzc2luZyAndW5kZWZpbmVkJyBhcyBwcm90b2NvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlNvY2tldCA9IG5ldyBfdGhpcy53ZWJTb2NrZXRDb25zdHJ1Y3Rvcih1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zZmVyRm9ybWF0ID09PSBUcmFuc2ZlckZvcm1hdC5CaW5hcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJTb2NrZXQuYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJTb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKF9ldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiV2ViU29ja2V0IGNvbm5lY3RlZCB0byBcIiArIHVybCArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy53ZWJTb2NrZXQgPSB3ZWJTb2NrZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFcnJvckV2ZW50IGlzIGEgYnJvd3NlciBvbmx5IHR5cGUgd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgdHlwZSBleGlzdHMgYmVmb3JlIHVzaW5nIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBFcnJvckV2ZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGV2ZW50IGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGV2ZW50LmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKFdlYlNvY2tldHMgdHJhbnNwb3J0KSBkYXRhIHJlY2VpdmVkLiBcIiArIGdldERhdGFEZXRhaWwobWVzc2FnZS5kYXRhLCBfdGhpcy5sb2dNZXNzYWdlQ29udGVudCkgKyBcIi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLm9ucmVjZWl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbnJlY2VpdmUobWVzc2FnZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViU29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLmNsb3NlKGV2ZW50KTsgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBXZWJTb2NrZXRUcmFuc3BvcnQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLndlYlNvY2tldCAmJiB0aGlzLndlYlNvY2tldC5yZWFkeVN0YXRlID09PSB0aGlzLndlYlNvY2tldENvbnN0cnVjdG9yLk9QRU4pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihXZWJTb2NrZXRzIHRyYW5zcG9ydCkgc2VuZGluZyBkYXRhLiBcIiArIGdldERhdGFEZXRhaWwoZGF0YSwgdGhpcy5sb2dNZXNzYWdlQ29udGVudCkgKyBcIi5cIik7XHJcbiAgICAgICAgICAgIHRoaXMud2ViU29ja2V0LnNlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiV2ViU29ja2V0IGlzIG5vdCBpbiB0aGUgT1BFTiBzdGF0ZVwiKTtcclxuICAgIH07XHJcbiAgICBXZWJTb2NrZXRUcmFuc3BvcnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgIC8vIENsZWFyIHdlYnNvY2tldCBoYW5kbGVycyBiZWNhdXNlIHdlIGFyZSBjb25zaWRlcmluZyB0aGUgc29ja2V0IGNsb3NlZCBub3dcclxuICAgICAgICAgICAgdGhpcy53ZWJTb2NrZXQub25jbG9zZSA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgICAgICAgICAgdGhpcy53ZWJTb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgICAgICAgICB0aGlzLndlYlNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgICAgICAgICB0aGlzLndlYlNvY2tldC5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLndlYlNvY2tldCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgLy8gTWFudWFsbHkgaW52b2tlIG9uY2xvc2UgY2FsbGJhY2sgaW5saW5lIHNvIHdlIGtub3cgdGhlIEh0dHBDb25uZWN0aW9uIHdhcyBjbG9zZWQgcHJvcGVybHkgYmVmb3JlIHJldHVybmluZ1xyXG4gICAgICAgICAgICAvLyBUaGlzIGFsc28gc29sdmVzIGFuIGlzc3VlIHdoZXJlIHdlYnNvY2tldC5vbmNsb3NlIGNvdWxkIHRha2UgMTgrIHNlY29uZHMgdG8gdHJpZ2dlciBkdXJpbmcgbmV0d29yayBkaXNjb25uZWN0c1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH07XHJcbiAgICBXZWJTb2NrZXRUcmFuc3BvcnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gd2ViU29ja2V0IHdpbGwgYmUgbnVsbCBpZiB0aGUgdHJhbnNwb3J0IGRpZCBub3Qgc3RhcnQgc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihXZWJTb2NrZXRzIHRyYW5zcG9ydCkgc29ja2V0IGNsb3NlZC5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMub25jbG9zZSkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQgJiYgKGV2ZW50Lndhc0NsZWFuID09PSBmYWxzZSB8fCBldmVudC5jb2RlICE9PSAxMDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmNsb3NlKG5ldyBFcnJvcihcIldlYlNvY2tldCBjbG9zZWQgd2l0aCBzdGF0dXMgY29kZTogXCIgKyBldmVudC5jb2RlICsgXCIgKFwiICsgZXZlbnQucmVhc29uICsgXCIpLlwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gV2ViU29ja2V0VHJhbnNwb3J0O1xyXG59KCkpO1xyXG5leHBvcnQgeyBXZWJTb2NrZXRUcmFuc3BvcnQgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2ViU29ja2V0VHJhbnNwb3J0LmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCB7IEFib3J0RXJyb3IsIEh0dHBFcnJvciwgVGltZW91dEVycm9yIH0gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gXCIuL0h0dHBDbGllbnRcIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbnZhciBYaHJIdHRwQ2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFhockh0dHBDbGllbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBYaHJIdHRwQ2xpZW50KGxvZ2dlcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgWGhySHR0cENsaWVudC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBDaGVjayB0aGF0IGFib3J0IHdhcyBub3Qgc2lnbmFsZWQgYmVmb3JlIGNhbGxpbmcgc2VuZFxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmFib3J0U2lnbmFsICYmIHJlcXVlc3QuYWJvcnRTaWduYWwuYWJvcnRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFib3J0RXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVxdWVzdC5tZXRob2QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIG1ldGhvZCBkZWZpbmVkLlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVxdWVzdC51cmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHVybCBkZWZpbmVkLlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xyXG4gICAgICAgICAgICAvLyBFeHBsaWNpdGx5IHNldHRpbmcgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXIgZm9yIFJlYWN0IE5hdGl2ZSBvbiBBbmRyb2lkIHBsYXRmb3JtLlxyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvcGxhaW47Y2hhcnNldD1VVEYtOFwiKTtcclxuICAgICAgICAgICAgdmFyIGhlYWRlcnMgPSByZXF1ZXN0LmhlYWRlcnM7XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhoZWFkZXJzKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIsIGhlYWRlcnNbaGVhZGVyXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5yZXNwb25zZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSByZXF1ZXN0LnJlc3BvbnNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5hYm9ydFNpZ25hbCkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5hYm9ydFNpZ25hbC5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgQWJvcnRFcnJvcigpKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QudGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSByZXF1ZXN0LnRpbWVvdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmFib3J0U2lnbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5hYm9ydFNpZ25hbC5vbmFib3J0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgSHR0cFJlc3BvbnNlKHhoci5zdGF0dXMsIHhoci5zdGF0dXNUZXh0LCB4aHIucmVzcG9uc2UgfHwgeGhyLnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBIdHRwRXJyb3IoeGhyLnN0YXR1c1RleHQsIHhoci5zdGF0dXMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIFwiRXJyb3IgZnJvbSBIVFRQIHJlcXVlc3QuIFwiICsgeGhyLnN0YXR1cyArIFwiOiBcIiArIHhoci5zdGF0dXNUZXh0ICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBIdHRwRXJyb3IoeGhyLnN0YXR1c1RleHQsIHhoci5zdGF0dXMpKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuV2FybmluZywgXCJUaW1lb3V0IGZyb20gSFRUUCByZXF1ZXN0LlwiKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgVGltZW91dEVycm9yKCkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIuc2VuZChyZXF1ZXN0LmNvbnRlbnQgfHwgXCJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFhockh0dHBDbGllbnQ7XHJcbn0oSHR0cENsaWVudCkpO1xyXG5leHBvcnQgeyBYaHJIdHRwQ2xpZW50IH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVhockh0dHBDbGllbnQuanMubWFwIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4vLyBWZXJzaW9uIHRva2VuIHRoYXQgd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgcHJlcGFjayBjb21tYW5kXHJcbi8qKiBUaGUgdmVyc2lvbiBvZiB0aGUgU2lnbmFsUiBjbGllbnQuICovXHJcbmV4cG9ydCB2YXIgVkVSU0lPTiA9IFwiMy4wLjAtcHJldmlldzYuMTkzMDcuMlwiO1xyXG5leHBvcnQgeyBBYm9ydEVycm9yLCBIdHRwRXJyb3IsIFRpbWVvdXRFcnJvciB9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5leHBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiLi9IdHRwQ2xpZW50XCI7XHJcbmV4cG9ydCB7IERlZmF1bHRIdHRwQ2xpZW50IH0gZnJvbSBcIi4vRGVmYXVsdEh0dHBDbGllbnRcIjtcclxuZXhwb3J0IHsgSHViQ29ubmVjdGlvbiwgSHViQ29ubmVjdGlvblN0YXRlIH0gZnJvbSBcIi4vSHViQ29ubmVjdGlvblwiO1xyXG5leHBvcnQgeyBIdWJDb25uZWN0aW9uQnVpbGRlciB9IGZyb20gXCIuL0h1YkNvbm5lY3Rpb25CdWlsZGVyXCI7XHJcbmV4cG9ydCB7IE1lc3NhZ2VUeXBlIH0gZnJvbSBcIi4vSUh1YlByb3RvY29sXCI7XHJcbmV4cG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5leHBvcnQgeyBIdHRwVHJhbnNwb3J0VHlwZSwgVHJhbnNmZXJGb3JtYXQgfSBmcm9tIFwiLi9JVHJhbnNwb3J0XCI7XHJcbmV4cG9ydCB7IE51bGxMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJzXCI7XHJcbmV4cG9ydCB7IEpzb25IdWJQcm90b2NvbCB9IGZyb20gXCIuL0pzb25IdWJQcm90b2NvbFwiO1xyXG5leHBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcIi4vU3ViamVjdFwiO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgaXMgYSBzaW5nbGUtZmlsZSBzZWxmLWNvbnRhaW5lZCBtb2R1bGUgdG8gYXZvaWQgdGhlIG5lZWQgZm9yIGEgV2VicGFjayBidWlsZFxudmFyIERvdE5ldDtcbihmdW5jdGlvbiAoRG90TmV0KSB7XG4gICAgd2luZG93LkRvdE5ldCA9IERvdE5ldDsgLy8gRW5zdXJlIHJlYWNoYWJsZSBmcm9tIGFueXdoZXJlXG4gICAgdmFyIGpzb25SZXZpdmVycyA9IFtdO1xuICAgIHZhciBwZW5kaW5nQXN5bmNDYWxscyA9IHt9O1xuICAgIHZhciBjYWNoZWRKU0Z1bmN0aW9ucyA9IHt9O1xuICAgIHZhciBuZXh0QXN5bmNDYWxsSWQgPSAxOyAvLyBTdGFydCBhdCAxIGJlY2F1c2UgemVybyBzaWduYWxzIFwibm8gcmVzcG9uc2UgbmVlZGVkXCJcbiAgICB2YXIgZG90TmV0RGlzcGF0Y2hlciA9IG51bGw7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc3BlY2lmaWVkIC5ORVQgY2FsbCBkaXNwYXRjaGVyIGFzIHRoZSBjdXJyZW50IGluc3RhbmNlIHNvIHRoYXQgaXQgd2lsbCBiZSB1c2VkXG4gICAgICogZm9yIGZ1dHVyZSBpbnZvY2F0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkaXNwYXRjaGVyIEFuIG9iamVjdCB0aGF0IGNhbiBkaXNwYXRjaCBjYWxscyBmcm9tIEphdmFTY3JpcHQgdG8gYSAuTkVUIHJ1bnRpbWUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYXR0YWNoRGlzcGF0Y2hlcihkaXNwYXRjaGVyKSB7XG4gICAgICAgIGRvdE5ldERpc3BhdGNoZXIgPSBkaXNwYXRjaGVyO1xuICAgIH1cbiAgICBEb3ROZXQuYXR0YWNoRGlzcGF0Y2hlciA9IGF0dGFjaERpc3BhdGNoZXI7XG4gICAgLyoqXG4gICAgICogQWRkcyBhIEpTT04gcmV2aXZlciBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIHBhcnNpbmcgYXJndW1lbnRzIHJlY2VpdmVkIGZyb20gLk5FVC5cbiAgICAgKiBAcGFyYW0gcmV2aXZlciBUaGUgcmV2aXZlciB0byBhZGQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYXR0YWNoUmV2aXZlcihyZXZpdmVyKSB7XG4gICAgICAgIGpzb25SZXZpdmVycy5wdXNoKHJldml2ZXIpO1xuICAgIH1cbiAgICBEb3ROZXQuYXR0YWNoUmV2aXZlciA9IGF0dGFjaFJldml2ZXI7XG4gICAgLyoqXG4gICAgICogSW52b2tlcyB0aGUgc3BlY2lmaWVkIC5ORVQgcHVibGljIG1ldGhvZCBzeW5jaHJvbm91c2x5LiBOb3QgYWxsIGhvc3Rpbmcgc2NlbmFyaW9zIHN1cHBvcnRcbiAgICAgKiBzeW5jaHJvbm91cyBpbnZvY2F0aW9uLCBzbyBpZiBwb3NzaWJsZSB1c2UgaW52b2tlTWV0aG9kQXN5bmMgaW5zdGVhZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhc3NlbWJseU5hbWUgVGhlIHNob3J0IG5hbWUgKHdpdGhvdXQga2V5L3ZlcnNpb24gb3IgLmRsbCBleHRlbnNpb24pIG9mIHRoZSAuTkVUIGFzc2VtYmx5IGNvbnRhaW5pbmcgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gbWV0aG9kSWRlbnRpZmllciBUaGUgaWRlbnRpZmllciBvZiB0aGUgbWV0aG9kIHRvIGludm9rZS4gVGhlIG1ldGhvZCBtdXN0IGhhdmUgYSBbSlNJbnZva2FibGVdIGF0dHJpYnV0ZSBzcGVjaWZ5aW5nIHRoaXMgaWRlbnRpZmllci5cbiAgICAgKiBAcGFyYW0gYXJncyBBcmd1bWVudHMgdG8gcGFzcyB0byB0aGUgbWV0aG9kLCBlYWNoIG9mIHdoaWNoIG11c3QgYmUgSlNPTi1zZXJpYWxpemFibGUuXG4gICAgICogQHJldHVybnMgVGhlIHJlc3VsdCBvZiB0aGUgb3BlcmF0aW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGludm9rZU1ldGhvZChhc3NlbWJseU5hbWUsIG1ldGhvZElkZW50aWZpZXIpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludm9rZVBvc3NpYmxlSW5zdGFuY2VNZXRob2QoYXNzZW1ibHlOYW1lLCBtZXRob2RJZGVudGlmaWVyLCBudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgRG90TmV0Lmludm9rZU1ldGhvZCA9IGludm9rZU1ldGhvZDtcbiAgICAvKipcbiAgICAgKiBJbnZva2VzIHRoZSBzcGVjaWZpZWQgLk5FVCBwdWJsaWMgbWV0aG9kIGFzeW5jaHJvbm91c2x5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGFzc2VtYmx5TmFtZSBUaGUgc2hvcnQgbmFtZSAod2l0aG91dCBrZXkvdmVyc2lvbiBvciAuZGxsIGV4dGVuc2lvbikgb2YgdGhlIC5ORVQgYXNzZW1ibHkgY29udGFpbmluZyB0aGUgbWV0aG9kLlxuICAgICAqIEBwYXJhbSBtZXRob2RJZGVudGlmaWVyIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBtZXRob2QgdG8gaW52b2tlLiBUaGUgbWV0aG9kIG11c3QgaGF2ZSBhIFtKU0ludm9rYWJsZV0gYXR0cmlidXRlIHNwZWNpZnlpbmcgdGhpcyBpZGVudGlmaWVyLlxuICAgICAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBtZXRob2QsIGVhY2ggb2Ygd2hpY2ggbXVzdCBiZSBKU09OLXNlcmlhbGl6YWJsZS5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgcmVwcmVzZW50aW5nIHRoZSByZXN1bHQgb2YgdGhlIG9wZXJhdGlvbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbnZva2VNZXRob2RBc3luYyhhc3NlbWJseU5hbWUsIG1ldGhvZElkZW50aWZpZXIpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludm9rZVBvc3NpYmxlSW5zdGFuY2VNZXRob2RBc3luYyhhc3NlbWJseU5hbWUsIG1ldGhvZElkZW50aWZpZXIsIG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgICBEb3ROZXQuaW52b2tlTWV0aG9kQXN5bmMgPSBpbnZva2VNZXRob2RBc3luYztcbiAgICBmdW5jdGlvbiBpbnZva2VQb3NzaWJsZUluc3RhbmNlTWV0aG9kKGFzc2VtYmx5TmFtZSwgbWV0aG9kSWRlbnRpZmllciwgZG90TmV0T2JqZWN0SWQsIGFyZ3MpIHtcbiAgICAgICAgdmFyIGRpc3BhdGNoZXIgPSBnZXRSZXF1aXJlZERpc3BhdGNoZXIoKTtcbiAgICAgICAgaWYgKGRpc3BhdGNoZXIuaW52b2tlRG90TmV0RnJvbUpTKSB7XG4gICAgICAgICAgICB2YXIgYXJnc0pzb24gPSBKU09OLnN0cmluZ2lmeShhcmdzLCBhcmdSZXBsYWNlcik7XG4gICAgICAgICAgICB2YXIgcmVzdWx0SnNvbiA9IGRpc3BhdGNoZXIuaW52b2tlRG90TmV0RnJvbUpTKGFzc2VtYmx5TmFtZSwgbWV0aG9kSWRlbnRpZmllciwgZG90TmV0T2JqZWN0SWQsIGFyZ3NKc29uKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRKc29uID8gcGFyc2VKc29uV2l0aFJldml2ZXJzKHJlc3VsdEpzb24pIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGN1cnJlbnQgZGlzcGF0Y2hlciBkb2VzIG5vdCBzdXBwb3J0IHN5bmNocm9ub3VzIGNhbGxzIGZyb20gSlMgdG8gLk5FVC4gVXNlIGludm9rZU1ldGhvZEFzeW5jIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaW52b2tlUG9zc2libGVJbnN0YW5jZU1ldGhvZEFzeW5jKGFzc2VtYmx5TmFtZSwgbWV0aG9kSWRlbnRpZmllciwgZG90TmV0T2JqZWN0SWQsIGFyZ3MpIHtcbiAgICAgICAgaWYgKGFzc2VtYmx5TmFtZSAmJiBkb3ROZXRPYmplY3RJZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRm9yIGluc3RhbmNlIG1ldGhvZCBjYWxscywgYXNzZW1ibHlOYW1lIHNob3VsZCBiZSBudWxsLiBSZWNlaXZlZCAnXCIgKyBhc3NlbWJseU5hbWUgKyBcIicuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhc3luY0NhbGxJZCA9IG5leHRBc3luY0NhbGxJZCsrO1xuICAgICAgICB2YXIgcmVzdWx0UHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHBlbmRpbmdBc3luY0NhbGxzW2FzeW5jQ2FsbElkXSA9IHsgcmVzb2x2ZTogcmVzb2x2ZSwgcmVqZWN0OiByZWplY3QgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYXJnc0pzb24gPSBKU09OLnN0cmluZ2lmeShhcmdzLCBhcmdSZXBsYWNlcik7XG4gICAgICAgICAgICBnZXRSZXF1aXJlZERpc3BhdGNoZXIoKS5iZWdpbkludm9rZURvdE5ldEZyb21KUyhhc3luY0NhbGxJZCwgYXNzZW1ibHlOYW1lLCBtZXRob2RJZGVudGlmaWVyLCBkb3ROZXRPYmplY3RJZCwgYXJnc0pzb24pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgLy8gU3luY2hyb25vdXMgZmFpbHVyZVxuICAgICAgICAgICAgY29tcGxldGVQZW5kaW5nQ2FsbChhc3luY0NhbGxJZCwgZmFsc2UsIGV4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UmVxdWlyZWREaXNwYXRjaGVyKCkge1xuICAgICAgICBpZiAoZG90TmV0RGlzcGF0Y2hlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvdE5ldERpc3BhdGNoZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyAuTkVUIGNhbGwgZGlzcGF0Y2hlciBoYXMgYmVlbiBzZXQuJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlUGVuZGluZ0NhbGwoYXN5bmNDYWxsSWQsIHN1Y2Nlc3MsIHJlc3VsdE9yRXJyb3IpIHtcbiAgICAgICAgaWYgKCFwZW5kaW5nQXN5bmNDYWxscy5oYXNPd25Qcm9wZXJ0eShhc3luY0NhbGxJZCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGlzIG5vIHBlbmRpbmcgYXN5bmMgY2FsbCB3aXRoIElEIFwiICsgYXN5bmNDYWxsSWQgKyBcIi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFzeW5jQ2FsbCA9IHBlbmRpbmdBc3luY0NhbGxzW2FzeW5jQ2FsbElkXTtcbiAgICAgICAgZGVsZXRlIHBlbmRpbmdBc3luY0NhbGxzW2FzeW5jQ2FsbElkXTtcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGFzeW5jQ2FsbC5yZXNvbHZlKHJlc3VsdE9yRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXN5bmNDYWxsLnJlamVjdChyZXN1bHRPckVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWNlaXZlcyBpbmNvbWluZyBjYWxscyBmcm9tIC5ORVQgYW5kIGRpc3BhdGNoZXMgdGhlbSB0byBKYXZhU2NyaXB0LlxuICAgICAqL1xuICAgIERvdE5ldC5qc0NhbGxEaXNwYXRjaGVyID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogRmluZHMgdGhlIEphdmFTY3JpcHQgZnVuY3Rpb24gbWF0Y2hpbmcgdGhlIHNwZWNpZmllZCBpZGVudGlmaWVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gaWRlbnRpZmllciBJZGVudGlmaWVzIHRoZSBnbG9iYWxseS1yZWFjaGFibGUgZnVuY3Rpb24gdG8gYmUgcmV0dXJuZWQuXG4gICAgICAgICAqIEByZXR1cm5zIEEgRnVuY3Rpb24gaW5zdGFuY2UuXG4gICAgICAgICAqL1xuICAgICAgICBmaW5kSlNGdW5jdGlvbjogZmluZEpTRnVuY3Rpb24sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnZva2VzIHRoZSBzcGVjaWZpZWQgc3luY2hyb25vdXMgSmF2YVNjcmlwdCBmdW5jdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGlkZW50aWZpZXIgSWRlbnRpZmllcyB0aGUgZ2xvYmFsbHktcmVhY2hhYmxlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAgICAgICAgICogQHBhcmFtIGFyZ3NKc29uIEpTT04gcmVwcmVzZW50YXRpb24gb2YgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXG4gICAgICAgICAqIEByZXR1cm5zIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGludm9jYXRpb24gcmVzdWx0LlxuICAgICAgICAgKi9cbiAgICAgICAgaW52b2tlSlNGcm9tRG90TmV0OiBmdW5jdGlvbiAoaWRlbnRpZmllciwgYXJnc0pzb24pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmaW5kSlNGdW5jdGlvbihpZGVudGlmaWVyKS5hcHBseShudWxsLCBwYXJzZUpzb25XaXRoUmV2aXZlcnMoYXJnc0pzb24pKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICA6IEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgYXJnUmVwbGFjZXIpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogSW52b2tlcyB0aGUgc3BlY2lmaWVkIHN5bmNocm9ub3VzIG9yIGFzeW5jaHJvbm91cyBKYXZhU2NyaXB0IGZ1bmN0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gYXN5bmNIYW5kbGUgQSB2YWx1ZSBpZGVudGlmeWluZyB0aGUgYXN5bmNocm9ub3VzIG9wZXJhdGlvbi4gVGhpcyB2YWx1ZSB3aWxsIGJlIHBhc3NlZCBiYWNrIGluIGEgbGF0ZXIgY2FsbCB0byBlbmRJbnZva2VKU0Zyb21Eb3ROZXQuXG4gICAgICAgICAqIEBwYXJhbSBpZGVudGlmaWVyIElkZW50aWZpZXMgdGhlIGdsb2JhbGx5LXJlYWNoYWJsZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gICAgICAgICAqIEBwYXJhbSBhcmdzSnNvbiBKU09OIHJlcHJlc2VudGF0aW9uIG9mIGFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgYmVnaW5JbnZva2VKU0Zyb21Eb3ROZXQ6IGZ1bmN0aW9uIChhc3luY0hhbmRsZSwgaWRlbnRpZmllciwgYXJnc0pzb24pIHtcbiAgICAgICAgICAgIC8vIENvZXJjZSBzeW5jaHJvbm91cyBmdW5jdGlvbnMgaW50byBhc3luYyBvbmVzLCBwbHVzIHRyZWF0XG4gICAgICAgICAgICAvLyBzeW5jaHJvbm91cyBleGNlcHRpb25zIHRoZSBzYW1lIGFzIGFzeW5jIG9uZXNcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3luY2hyb25vdXNSZXN1bHRPclByb21pc2UgPSBmaW5kSlNGdW5jdGlvbihpZGVudGlmaWVyKS5hcHBseShudWxsLCBwYXJzZUpzb25XaXRoUmV2aXZlcnMoYXJnc0pzb24pKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHN5bmNocm9ub3VzUmVzdWx0T3JQcm9taXNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gV2Ugb25seSBsaXN0ZW4gZm9yIGEgcmVzdWx0IGlmIHRoZSBjYWxsZXIgd2FudHMgdG8gYmUgbm90aWZpZWQgYWJvdXQgaXRcbiAgICAgICAgICAgIGlmIChhc3luY0hhbmRsZSkge1xuICAgICAgICAgICAgICAgIC8vIE9uIGNvbXBsZXRpb24sIGRpc3BhdGNoIHJlc3VsdCBiYWNrIHRvIC5ORVRcbiAgICAgICAgICAgICAgICAvLyBOb3QgdXNpbmcgXCJhd2FpdFwiIGJlY2F1c2UgaXQgY29kZWdlbnMgYSBsb3Qgb2YgYm9pbGVycGxhdGVcbiAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gZ2V0UmVxdWlyZWREaXNwYXRjaGVyKCkuZW5kSW52b2tlSlNGcm9tRG90TmV0KGFzeW5jSGFuZGxlLCB0cnVlLCBKU09OLnN0cmluZ2lmeShbYXN5bmNIYW5kbGUsIHRydWUsIHJlc3VsdF0sIGFyZ1JlcGxhY2VyKSk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gZ2V0UmVxdWlyZWREaXNwYXRjaGVyKCkuZW5kSW52b2tlSlNGcm9tRG90TmV0KGFzeW5jSGFuZGxlLCBmYWxzZSwgSlNPTi5zdHJpbmdpZnkoW2FzeW5jSGFuZGxlLCBmYWxzZSwgZm9ybWF0RXJyb3IoZXJyb3IpXSkpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlY2VpdmVzIG5vdGlmaWNhdGlvbiB0aGF0IGFuIGFzeW5jIGNhbGwgZnJvbSBKUyB0byAuTkVUIGhhcyBjb21wbGV0ZWQuXG4gICAgICAgICAqIEBwYXJhbSBhc3luY0NhbGxJZCBUaGUgaWRlbnRpZmllciBzdXBwbGllZCBpbiBhbiBlYXJsaWVyIGNhbGwgdG8gYmVnaW5JbnZva2VEb3ROZXRGcm9tSlMuXG4gICAgICAgICAqIEBwYXJhbSBzdWNjZXNzIEEgZmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBvcGVyYXRpb24gY29tcGxldGVkIHN1Y2Nlc3NmdWxseS5cbiAgICAgICAgICogQHBhcmFtIHJlc3VsdE9yRXhjZXB0aW9uTWVzc2FnZSBFaXRoZXIgdGhlIG9wZXJhdGlvbiByZXN1bHQgb3IgYW4gZXJyb3IgbWVzc2FnZS5cbiAgICAgICAgICovXG4gICAgICAgIGVuZEludm9rZURvdE5ldEZyb21KUzogZnVuY3Rpb24gKGFzeW5jQ2FsbElkLCBzdWNjZXNzLCByZXN1bHRPckV4Y2VwdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHRPckVycm9yID0gc3VjY2VzcyA/IHJlc3VsdE9yRXhjZXB0aW9uTWVzc2FnZSA6IG5ldyBFcnJvcihyZXN1bHRPckV4Y2VwdGlvbk1lc3NhZ2UpO1xuICAgICAgICAgICAgY29tcGxldGVQZW5kaW5nQ2FsbChwYXJzZUludChhc3luY0NhbGxJZCksIHN1Y2Nlc3MsIHJlc3VsdE9yRXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBwYXJzZUpzb25XaXRoUmV2aXZlcnMoanNvbikge1xuICAgICAgICByZXR1cm4ganNvbiA/IEpTT04ucGFyc2UoanNvbiwgZnVuY3Rpb24gKGtleSwgaW5pdGlhbFZhbHVlKSB7XG4gICAgICAgICAgICAvLyBJbnZva2UgZWFjaCByZXZpdmVyIGluIG9yZGVyLCBwYXNzaW5nIHRoZSBvdXRwdXQgZnJvbSB0aGUgcHJldmlvdXMgcmV2aXZlcixcbiAgICAgICAgICAgIC8vIHNvIHRoYXQgZWFjaCBvbmUgZ2V0cyBhIGNoYW5jZSB0byB0cmFuc2Zvcm0gdGhlIHZhbHVlXG4gICAgICAgICAgICByZXR1cm4ganNvblJldml2ZXJzLnJlZHVjZShmdW5jdGlvbiAobGF0ZXN0VmFsdWUsIHJldml2ZXIpIHsgcmV0dXJuIHJldml2ZXIoa2V5LCBsYXRlc3RWYWx1ZSk7IH0sIGluaXRpYWxWYWx1ZSk7XG4gICAgICAgIH0pIDogbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9ybWF0RXJyb3IoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlICsgXCJcXG5cIiArIGVycm9yLnN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yID8gZXJyb3IudG9TdHJpbmcoKSA6ICdudWxsJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBmaW5kSlNGdW5jdGlvbihpZGVudGlmaWVyKSB7XG4gICAgICAgIGlmIChjYWNoZWRKU0Z1bmN0aW9ucy5oYXNPd25Qcm9wZXJ0eShpZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZEpTRnVuY3Rpb25zW2lkZW50aWZpZXJdO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSB3aW5kb3c7XG4gICAgICAgIHZhciByZXN1bHRJZGVudGlmaWVyID0gJ3dpbmRvdyc7XG4gICAgICAgIHZhciBsYXN0U2VnbWVudFZhbHVlO1xuICAgICAgICBpZGVudGlmaWVyLnNwbGl0KCcuJykuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgaWYgKHNlZ21lbnQgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgbGFzdFNlZ21lbnRWYWx1ZSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRbc2VnbWVudF07XG4gICAgICAgICAgICAgICAgcmVzdWx0SWRlbnRpZmllciArPSAnLicgKyBzZWdtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgJ1wiICsgc2VnbWVudCArIFwiJyBpbiAnXCIgKyByZXN1bHRJZGVudGlmaWVyICsgXCInLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmJpbmQobGFzdFNlZ21lbnRWYWx1ZSk7XG4gICAgICAgICAgICBjYWNoZWRKU0Z1bmN0aW9uc1tpZGVudGlmaWVyXSA9IHJlc3VsdDtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdmFsdWUgJ1wiICsgcmVzdWx0SWRlbnRpZmllciArIFwiJyBpcyBub3QgYSBmdW5jdGlvbi5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIERvdE5ldE9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gRG90TmV0T2JqZWN0KF9pZCkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSBfaWQ7XG4gICAgICAgIH1cbiAgICAgICAgRG90TmV0T2JqZWN0LnByb3RvdHlwZS5pbnZva2VNZXRob2QgPSBmdW5jdGlvbiAobWV0aG9kSWRlbnRpZmllcikge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbnZva2VQb3NzaWJsZUluc3RhbmNlTWV0aG9kKG51bGwsIG1ldGhvZElkZW50aWZpZXIsIHRoaXMuX2lkLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgRG90TmV0T2JqZWN0LnByb3RvdHlwZS5pbnZva2VNZXRob2RBc3luYyA9IGZ1bmN0aW9uIChtZXRob2RJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGludm9rZVBvc3NpYmxlSW5zdGFuY2VNZXRob2RBc3luYyhudWxsLCBtZXRob2RJZGVudGlmaWVyLCB0aGlzLl9pZCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIERvdE5ldE9iamVjdC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gaW52b2tlUG9zc2libGVJbnN0YW5jZU1ldGhvZEFzeW5jKG51bGwsICdfX0Rpc3Bvc2UnLCB0aGlzLl9pZCwgbnVsbCk7XG4gICAgICAgICAgICBwcm9taXNlLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5lcnJvcihlcnJvcik7IH0pO1xuICAgICAgICB9O1xuICAgICAgICBEb3ROZXRPYmplY3QucHJvdG90eXBlLnNlcmlhbGl6ZUFzQXJnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgX19kb3ROZXRPYmplY3Q6IHRoaXMuX2lkIH07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBEb3ROZXRPYmplY3Q7XG4gICAgfSgpKTtcbiAgICB2YXIgZG90TmV0T2JqZWN0UmVmS2V5ID0gJ19fZG90TmV0T2JqZWN0JztcbiAgICBhdHRhY2hSZXZpdmVyKGZ1bmN0aW9uIHJldml2ZURvdE5ldE9iamVjdChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmhhc093blByb3BlcnR5KGRvdE5ldE9iamVjdFJlZktleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRG90TmV0T2JqZWN0KHZhbHVlLl9fZG90TmV0T2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVbnJlY29nbml6ZWQgLSBsZXQgYW5vdGhlciByZXZpdmVyIGhhbmRsZSBpdFxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gYXJnUmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEb3ROZXRPYmplY3QgPyB2YWx1ZS5zZXJpYWxpemVBc0FyZygpIDogdmFsdWU7XG4gICAgfVxufSkoRG90TmV0IHx8IChEb3ROZXQgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TWljcm9zb2Z0LkpTSW50ZXJvcC5qcy5tYXAiLCIvKlxuICogYmFzZTY0LWFycmF5YnVmZmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG4oZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGNoYXJzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XG5cbiAgLy8gVXNlIGEgbG9va3VwIHRhYmxlIHRvIGZpbmQgdGhlIGluZGV4LlxuICB2YXIgbG9va3VwID0gbmV3IFVpbnQ4QXJyYXkoMjU2KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykge1xuICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7XG4gIH1cblxuICBleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLFxuICAgIGksIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gXCJcIjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTMpIHtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpXSA+PiAyXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyKSB8IChieXRlc1tpICsgMl0gPj4gNildO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAoKGxlbiAlIDMpID09PSAyKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArIFwiPVwiO1xuICAgIH0gZWxzZSBpZiAobGVuICUgMyA9PT0gMSkge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyBcIj09XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NDtcbiAgfTtcblxuICBleHBvcnRzLmRlY29kZSA9ICBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYmFzZTY0Lmxlbmd0aCAqIDAuNzUsXG4gICAgbGVuID0gYmFzZTY0Lmxlbmd0aCwgaSwgcCA9IDAsXG4gICAgZW5jb2RlZDEsIGVuY29kZWQyLCBlbmNvZGVkMywgZW5jb2RlZDQ7XG5cbiAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09IFwiPVwiKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcnJheWJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpLFxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9NCkge1xuICAgICAgZW5jb2RlZDEgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSldO1xuICAgICAgZW5jb2RlZDIgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSsxKV07XG4gICAgICBlbmNvZGVkMyA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKzIpXTtcbiAgICAgIGVuY29kZWQ0ID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkrMyldO1xuXG4gICAgICBieXRlc1twKytdID0gKGVuY29kZWQxIDw8IDIpIHwgKGVuY29kZWQyID4+IDQpO1xuICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDIgJiAxNSkgPDwgNCkgfCAoZW5jb2RlZDMgPj4gMik7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMyAmIDMpIDw8IDYpIHwgKGVuY29kZWQ0ICYgNjMpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheWJ1ZmZlcjtcbiAgfTtcbn0pKCk7XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgJ0Bkb3RuZXQvanNpbnRlcm9wL2Rpc3QvTWljcm9zb2Z0LkpTSW50ZXJvcCc7XHJcbmltcG9ydCAnQGJyb3dzZXJqcy9HbG9iYWxFeHBvcnRzJztcclxuaW1wb3J0IHsgT3V0T2ZQcm9jZXNzUmVuZGVyQmF0Y2ggfSBmcm9tICdAYnJvd3NlcmpzL1JlbmRlcmluZy9SZW5kZXJCYXRjaC9PdXRPZlByb2Nlc3NSZW5kZXJCYXRjaCc7XHJcbmltcG9ydCB7IHNldEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ0Bicm93c2VyanMvUmVuZGVyaW5nL1JlbmRlcmVyRXZlbnREaXNwYXRjaGVyJztcclxuaW1wb3J0IHsgaW50ZXJuYWxGdW5jdGlvbnMgYXMgbmF2aWdhdGlvbk1hbmFnZXJGdW5jdGlvbnMgfSBmcm9tICdAYnJvd3NlcmpzL1NlcnZpY2VzL05hdmlnYXRpb25NYW5hZ2VyJztcclxuaW1wb3J0IHsgcmVuZGVyQmF0Y2ggfSBmcm9tICdAYnJvd3NlcmpzL1JlbmRlcmluZy9SZW5kZXJlcic7XHJcbmltcG9ydCB7IGRlY29kZSB9IGZyb20gJ2Jhc2U2NC1hcnJheWJ1ZmZlcic7XHJcbmltcG9ydCAqIGFzIGlwYyBmcm9tICcuL0lQQyc7XHJcbmltcG9ydCAqIGFzIHNpZ25hbFIgZnJvbSAnQGFzcG5ldC9zaWduYWxyJztcclxuaW1wb3J0IHsgcmVjZWl2ZU1lc3NhZ2UgfSBmcm9tICcuL0lQQyc7XHJcblxyXG5sZXQgY29ubmVjdGlvbjogc2lnbmFsUi5IdWJDb25uZWN0aW9uO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgY29ubmVjdGlvbi5pbnZva2UoXCJTZW5kTWVzc2FnZVwiLCBcInVzZXJpZFwiLCBtZXNzYWdlKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmVycm9yKFwiU2VuZE1lc3NhZ2UgRmFpbGVkXCIgKyBlcnIudG9TdHJpbmcoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYm9vdCgpIHtcclxuICAgIGNvbm5lY3Rpb24gPSBuZXcgc2lnbmFsUi5IdWJDb25uZWN0aW9uQnVpbGRlcigpLndpdGhVcmwoXCIvd2ViV2luZG93SHViXCIpLmJ1aWxkKCk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5zdGFydCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhcIkNvbm5lY3Rpb24gc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAvLyBDb25maXJtIHRoYXQgdGhlIEpTIHNpZGUgaXMgcmVhZHkgZm9yIHRoZSBhcHAgdG8gc3RhcnRcclxuICAgICAgICBpcGMuc2VuZCgnY29tcG9uZW50czppbml0JywgW1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uTWFuYWdlckZ1bmN0aW9ucy5nZXRMb2NhdGlvbkhyZWYoKS5yZXBsYWNlKC9cXC9pbmRleFxcLmh0bWwkLywgJycpLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uTWFuYWdlckZ1bmN0aW9ucy5nZXRCYXNlVVJJKCldKTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBjb25uZWN0IHRvIFNpZ25hbFIgaHViXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGVyci50b1N0cmluZygpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub24oXCJSZWNlaXZlTWVzc2FnZVwiLCBtZXNzYWdlID0+IHsgY29uc29sZS5pbmZvKFwiUmVjZWl2ZWQ6IFwiICsgbWVzc2FnZSk7cmVjZWl2ZU1lc3NhZ2UobWVzc2FnZSkgfSlcclxuXHJcblxyXG4gIHNldEV2ZW50RGlzcGF0Y2hlcigoZXZlbnREZXNjcmlwdG9yLCBldmVudEFyZ3MpID0+IERvdE5ldC5pbnZva2VNZXRob2RBc3luYygnV2ViV2luZG93LkJsYXpvcicsICdEaXNwYXRjaEV2ZW50JywgZXZlbnREZXNjcmlwdG9yLCBKU09OLnN0cmluZ2lmeShldmVudEFyZ3MpKSk7XHJcbiAgbmF2aWdhdGlvbk1hbmFnZXJGdW5jdGlvbnMubGlzdGVuRm9yTmF2aWdhdGlvbkV2ZW50cygodXJpOiBzdHJpbmcsIGludGVyY2VwdGVkOiBib29sZWFuKSA9PiB7XHJcbiAgICByZXR1cm4gRG90TmV0Lmludm9rZU1ldGhvZEFzeW5jKCdXZWJXaW5kb3cuQmxhem9yJywgJ05vdGlmeUxvY2F0aW9uQ2hhbmdlZCcsIHVyaSwgaW50ZXJjZXB0ZWQpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBDb25maWd1cmUgdGhlIG1lY2hhbmlzbSBmb3IgSlM8LT5ORVQgY2FsbHNcclxuICBEb3ROZXQuYXR0YWNoRGlzcGF0Y2hlcih7XHJcbiAgICBiZWdpbkludm9rZURvdE5ldEZyb21KUzogKGNhbGxJZDogbnVtYmVyLCBhc3NlbWJseU5hbWU6IHN0cmluZyB8IG51bGwsIG1ldGhvZElkZW50aWZpZXI6IHN0cmluZywgZG90TmV0T2JqZWN0SWQ6IG51bWJlciB8IG51bGwsIGFyZ3NKc29uOiBzdHJpbmcpID0+IHtcclxuICAgICAgaXBjLnNlbmQoJ0JlZ2luSW52b2tlRG90TmV0RnJvbUpTJywgW2NhbGxJZCA/IGNhbGxJZC50b1N0cmluZygpIDogbnVsbCwgYXNzZW1ibHlOYW1lLCBtZXRob2RJZGVudGlmaWVyLCBkb3ROZXRPYmplY3RJZCB8fCAwLCBhcmdzSnNvbl0pO1xyXG4gICAgfSxcclxuICAgIGVuZEludm9rZUpTRnJvbURvdE5ldDogKGNhbGxJZDogbnVtYmVyLCBzdWNjZWVkZWQ6IGJvb2xlYW4sIHJlc3VsdE9yRXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICBpcGMuc2VuZCgnRW5kSW52b2tlSlNGcm9tRG90TmV0JywgW2NhbGxJZCwgc3VjY2VlZGVkLCByZXN1bHRPckVycm9yXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG5hdmlnYXRpb25NYW5hZ2VyRnVuY3Rpb25zLmVuYWJsZU5hdmlnYXRpb25JbnRlcmNlcHRpb24oKTtcclxuXHJcbiAgaXBjLm9uKCdKUy5CZWdpbkludm9rZUpTJywgKGFzeW5jSGFuZGxlLCBpZGVudGlmaWVyLCBhcmdzSnNvbikgPT4ge1xyXG4gICAgRG90TmV0LmpzQ2FsbERpc3BhdGNoZXIuYmVnaW5JbnZva2VKU0Zyb21Eb3ROZXQoYXN5bmNIYW5kbGUsIGlkZW50aWZpZXIsIGFyZ3NKc29uKTtcclxuICB9KTtcclxuXHJcbiAgaXBjLm9uKCdKUy5FbmRJbnZva2VEb3ROZXQnLCAoY2FsbElkLCBzdWNjZXNzLCByZXN1bHRPckVycm9yKSA9PiB7XHJcbiAgICBEb3ROZXQuanNDYWxsRGlzcGF0Y2hlci5lbmRJbnZva2VEb3ROZXRGcm9tSlMoY2FsbElkLCBzdWNjZXNzLCByZXN1bHRPckVycm9yKTtcclxuICB9KTtcclxuXHJcbiAgaXBjLm9uKCdKUy5SZW5kZXJCYXRjaCcsIChyZW5kZXJlcklkLCBiYXRjaEJhc2U2NCkgPT4ge1xyXG4gICAgdmFyIGJhdGNoRGF0YSA9IG5ldyBVaW50OEFycmF5KGRlY29kZShiYXRjaEJhc2U2NCkpO1xyXG4gICAgcmVuZGVyQmF0Y2gocmVuZGVyZXJJZCwgbmV3IE91dE9mUHJvY2Vzc1JlbmRlckJhdGNoKGJhdGNoRGF0YSkpO1xyXG4gIH0pO1xyXG5cclxuICBpcGMub24oJ0pTLkVycm9yJywgKG1lc3NhZ2UpID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XHJcbiAgfSk7XHJcblxyXG4gIFxyXG59XHJcblxyXG5ib290KCk7XHJcbiIsImltcG9ydCB7IHNlbmRNZXNzYWdlIH0gZnJvbSBcIi4vQm9vdC5EZXNrdG9wXCI7XHJcblxyXG5pbnRlcmZhY2UgQ2FsbGJhY2sge1xyXG4gICAgKC4uLmFyZ3M6IGFueVtdKTogdm9pZDtcclxufVxyXG5cclxuY29uc3QgcmVnaXN0cmF0aW9ucyA9IHt9IGFzIHsgW2V2ZW50TmFtZTogc3RyaW5nXTogQ2FsbGJhY2tbXSB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgIGlmICghKGV2ZW50TmFtZSBpbiByZWdpc3RyYXRpb25zKSkge1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvbnNbZXZlbnROYW1lXSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdHJhdGlvbnNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9mZihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IENhbGxiYWNrKTogdm9pZCB7XHJcbiAgICBjb25zdCBncm91cCA9IHJlZ2lzdHJhdGlvbnNbZXZlbnROYW1lXTtcclxuICAgIGNvbnN0IGluZGV4ID0gZ3JvdXAuaW5kZXhPZihjYWxsYmFjayk7XHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIGdyb3VwLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbmNlKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgIGNvbnN0IGNhbGxiYWNrT25jZTogQ2FsbGJhY2sgPSAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICBvZmYoZXZlbnROYW1lLCBjYWxsYmFja09uY2UpO1xyXG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbihldmVudE5hbWUsIGNhbGxiYWNrT25jZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kKGV2ZW50TmFtZTogc3RyaW5nLCBhcmdzOiBhbnkpOiB2b2lkIHtcclxuICAgIHNlbmRNZXNzYWdlKGBpcGM6JHtldmVudE5hbWV9ICR7SlNPTi5zdHJpbmdpZnkoYXJncyl9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWNlaXZlTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNvbG9uUG9zID0gbWVzc2FnZS5pbmRleE9mKCc6Jyk7XHJcbiAgICBjb25zdCBldmVudE5hbWUgPSBtZXNzYWdlLnN1YnN0cmluZygwLCBjb2xvblBvcyk7XHJcbiAgICBjb25zdCBhcmdzSnNvbiA9IG1lc3NhZ2Uuc3Vic3RyKGNvbG9uUG9zICsgMSk7XHJcblxyXG4gICAgY29uc3QgZ3JvdXAgPSByZWdpc3RyYXRpb25zW2V2ZW50TmFtZV07XHJcbiAgICBpZiAoZ3JvdXApIHtcclxuICAgICAgICBjb25zdCBhcmdzOiBhbnlbXSA9IEpTT04ucGFyc2UoYXJnc0pzb24pO1xyXG4gICAgICAgIGdyb3VwLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJncykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiLy8gRXhwb3NlIGFuIGV4cG9ydCBjYWxsZWQgJ3BsYXRmb3JtJyBvZiB0aGUgaW50ZXJmYWNlIHR5cGUgJ1BsYXRmb3JtJyxcclxuLy8gc28gdGhhdCBjb25zdW1lcnMgY2FuIGJlIGFnbm9zdGljIGFib3V0IHdoaWNoIGltcGxlbWVudGF0aW9uIHRoZXkgdXNlLlxyXG4vLyBCYXNpYyBhbHRlcm5hdGl2ZSB0byBoYXZpbmcgYW4gYWN0dWFsIERJIGNvbnRhaW5lci5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuL1BsYXRmb3JtL1BsYXRmb3JtJztcclxuXHJcbmV4cG9ydCBsZXQgcGxhdGZvcm06IFBsYXRmb3JtO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBsYXRmb3JtKHBsYXRmb3JtSW5zdGFuY2U6IFBsYXRmb3JtKSB7XHJcbiAgcGxhdGZvcm0gPSBwbGF0Zm9ybUluc3RhbmNlO1xyXG4gIHJldHVybiBwbGF0Zm9ybTtcclxufVxyXG4iLCJpbXBvcnQgeyBuYXZpZ2F0ZVRvLCBpbnRlcm5hbEZ1bmN0aW9ucyBhcyBuYXZpZ2F0aW9uTWFuYWdlckludGVybmFsRnVuY3Rpb25zIH0gZnJvbSAnLi9TZXJ2aWNlcy9OYXZpZ2F0aW9uTWFuYWdlcic7XHJcbmltcG9ydCB7IGF0dGFjaFJvb3RDb21wb25lbnRUb0VsZW1lbnQgfSBmcm9tICcuL1JlbmRlcmluZy9SZW5kZXJlcic7XHJcblxyXG4vLyBNYWtlIHRoZSBmb2xsb3dpbmcgQVBJcyBhdmFpbGFibGUgaW4gZ2xvYmFsIHNjb3BlIGZvciBpbnZvY2F0aW9uIGZyb20gSlNcclxud2luZG93WydCbGF6b3InXSA9IHtcclxuICBuYXZpZ2F0ZVRvLFxyXG5cclxuICBfaW50ZXJuYWw6IHtcclxuICAgIGF0dGFjaFJvb3RDb21wb25lbnRUb0VsZW1lbnQsXHJcbiAgICBuYXZpZ2F0aW9uTWFuYWdlcjogbmF2aWdhdGlvbk1hbmFnZXJJbnRlcm5hbEZ1bmN0aW9ucyxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBSZW5kZXJCYXRjaCwgQXJyYXlCdWlsZGVyU2VnbWVudCwgUmVuZGVyVHJlZUVkaXQsIFJlbmRlclRyZWVGcmFtZSwgRWRpdFR5cGUsIEZyYW1lVHlwZSwgQXJyYXlWYWx1ZXMgfSBmcm9tICcuL1JlbmRlckJhdGNoL1JlbmRlckJhdGNoJztcclxuaW1wb3J0IHsgRXZlbnREZWxlZ2F0b3IgfSBmcm9tICcuL0V2ZW50RGVsZWdhdG9yJztcclxuaW1wb3J0IHsgRXZlbnRGb3JEb3ROZXQsIFVJRXZlbnRBcmdzLCBFdmVudEFyZ3NUeXBlIH0gZnJvbSAnLi9FdmVudEZvckRvdE5ldCc7XHJcbmltcG9ydCB7IExvZ2ljYWxFbGVtZW50LCBQZXJtdXRhdGlvbkxpc3RFbnRyeSwgdG9Mb2dpY2FsRWxlbWVudCwgaW5zZXJ0TG9naWNhbENoaWxkLCByZW1vdmVMb2dpY2FsQ2hpbGQsIGdldExvZ2ljYWxQYXJlbnQsIGdldExvZ2ljYWxDaGlsZCwgY3JlYXRlQW5kSW5zZXJ0TG9naWNhbENvbnRhaW5lciwgaXNTdmdFbGVtZW50LCBnZXRMb2dpY2FsQ2hpbGRyZW5BcnJheSwgZ2V0TG9naWNhbFNpYmxpbmdFbmQsIHBlcm11dGVMb2dpY2FsQ2hpbGRyZW4sIGdldENsb3Nlc3REb21FbGVtZW50IH0gZnJvbSAnLi9Mb2dpY2FsRWxlbWVudHMnO1xyXG5pbXBvcnQgeyBhcHBseUNhcHR1cmVJZFRvRWxlbWVudCB9IGZyb20gJy4vRWxlbWVudFJlZmVyZW5jZUNhcHR1cmUnO1xyXG5pbXBvcnQgeyBFdmVudEZpZWxkSW5mbyB9IGZyb20gJy4vRXZlbnRGaWVsZEluZm8nO1xyXG5pbXBvcnQgeyBkaXNwYXRjaEV2ZW50IH0gZnJvbSAnLi9SZW5kZXJlckV2ZW50RGlzcGF0Y2hlcic7XHJcbmltcG9ydCB7IGF0dGFjaFRvRXZlbnREZWxlZ2F0b3IgYXMgYXR0YWNoTmF2aWdhdGlvbk1hbmFnZXJUb0V2ZW50RGVsZWdhdG9yIH0gZnJvbSAnLi4vU2VydmljZXMvTmF2aWdhdGlvbk1hbmFnZXInO1xyXG5jb25zdCBzZWxlY3RWYWx1ZVByb3BuYW1lID0gJ19ibGF6b3JTZWxlY3RWYWx1ZSc7XHJcbmNvbnN0IHNoYXJlZFRlbXBsYXRlRWxlbUZvclBhcnNpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG5jb25zdCBzaGFyZWRTdmdFbGVtRm9yUGFyc2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG5jb25zdCBwcmV2ZW50RGVmYXVsdEV2ZW50czogeyBbZXZlbnRUeXBlOiBzdHJpbmddOiBib29sZWFuIH0gPSB7IHN1Ym1pdDogdHJ1ZSB9O1xyXG5jb25zdCByb290Q29tcG9uZW50c1BlbmRpbmdGaXJzdFJlbmRlcjogeyBbY29tcG9uZW50SWQ6IG51bWJlcl06IExvZ2ljYWxFbGVtZW50IH0gPSB7fTtcclxuY29uc3QgaW50ZXJuYWxBdHRyaWJ1dGVOYW1lUHJlZml4ID0gJ19faW50ZXJuYWxfJztcclxuY29uc3QgZXZlbnRQcmV2ZW50RGVmYXVsdEF0dHJpYnV0ZU5hbWVQcmVmaXggPSAncHJldmVudERlZmF1bHRfJztcclxuY29uc3QgZXZlbnRTdG9wUHJvcGFnYXRpb25BdHRyaWJ1dGVOYW1lUHJlZml4ID0gJ3N0b3BQcm9wYWdhdGlvbl8nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJyb3dzZXJSZW5kZXJlciB7XHJcbiAgcHJpdmF0ZSBldmVudERlbGVnYXRvcjogRXZlbnREZWxlZ2F0b3I7XHJcblxyXG4gIHByaXZhdGUgY2hpbGRDb21wb25lbnRMb2NhdGlvbnM6IHsgW2NvbXBvbmVudElkOiBudW1iZXJdOiBMb2dpY2FsRWxlbWVudCB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgYnJvd3NlclJlbmRlcmVySWQ6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGJyb3dzZXJSZW5kZXJlcklkOiBudW1iZXIpIHtcclxuICAgIHRoaXMuYnJvd3NlclJlbmRlcmVySWQgPSBicm93c2VyUmVuZGVyZXJJZDtcclxuICAgIHRoaXMuZXZlbnREZWxlZ2F0b3IgPSBuZXcgRXZlbnREZWxlZ2F0b3IoKGV2ZW50LCBldmVudEhhbmRsZXJJZCwgZXZlbnRBcmdzLCBldmVudEZpZWxkSW5mbykgPT4ge1xyXG4gICAgICByYWlzZUV2ZW50KGV2ZW50LCB0aGlzLmJyb3dzZXJSZW5kZXJlcklkLCBldmVudEhhbmRsZXJJZCwgZXZlbnRBcmdzLCBldmVudEZpZWxkSW5mbyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBXZSBkb24ndCB5ZXQga25vdyB3aGV0aGVyIG9yIG5vdCBuYXZpZ2F0aW9uIGludGVyY2VwdGlvbiB3aWxsIGJlIGVuYWJsZWQsIGJ1dCBpbiBjYXNlIGl0IHdpbGwgYmUsXHJcbiAgICAvLyB3ZSB3aXJlIHVwIHRoZSBuYXZpZ2F0aW9uIG1hbmFnZXIgdG8gdGhlIGV2ZW50IGRlbGVnYXRvciBzbyBpdCBoYXMgdGhlIG9wdGlvbiB0byBwYXJ0aWNpcGF0ZVxyXG4gICAgLy8gaW4gdGhlIHN5bnRoZXRpYyBldmVudCBidWJibGluZyBwcm9jZXNzIGxhdGVyXHJcbiAgICBhdHRhY2hOYXZpZ2F0aW9uTWFuYWdlclRvRXZlbnREZWxlZ2F0b3IodGhpcy5ldmVudERlbGVnYXRvcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXR0YWNoUm9vdENvbXBvbmVudFRvTG9naWNhbEVsZW1lbnQoY29tcG9uZW50SWQ6IG51bWJlciwgZWxlbWVudDogTG9naWNhbEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuYXR0YWNoQ29tcG9uZW50VG9FbGVtZW50KGNvbXBvbmVudElkLCBlbGVtZW50KTtcclxuICAgIHJvb3RDb21wb25lbnRzUGVuZGluZ0ZpcnN0UmVuZGVyW2NvbXBvbmVudElkXSA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50KGJhdGNoOiBSZW5kZXJCYXRjaCwgY29tcG9uZW50SWQ6IG51bWJlciwgZWRpdHM6IEFycmF5QnVpbGRlclNlZ21lbnQ8UmVuZGVyVHJlZUVkaXQ+LCByZWZlcmVuY2VGcmFtZXM6IEFycmF5VmFsdWVzPFJlbmRlclRyZWVGcmFtZT4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNoaWxkQ29tcG9uZW50TG9jYXRpb25zW2NvbXBvbmVudElkXTtcclxuICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGVsZW1lbnQgaXMgY3VycmVudGx5IGFzc29jaWF0ZWQgd2l0aCBjb21wb25lbnQgJHtjb21wb25lbnRJZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbiB0aGUgZmlyc3QgcmVuZGVyIGZvciBlYWNoIHJvb3QgY29tcG9uZW50LCBjbGVhciBhbnkgZXhpc3RpbmcgY29udGVudCAoZS5nLiwgcHJlcmVuZGVyZWQpXHJcbiAgICBjb25zdCByb290RWxlbWVudFRvQ2xlYXIgPSByb290Q29tcG9uZW50c1BlbmRpbmdGaXJzdFJlbmRlcltjb21wb25lbnRJZF07XHJcbiAgICBpZiAocm9vdEVsZW1lbnRUb0NsZWFyKSB7XHJcbiAgICAgIGNvbnN0IHJvb3RFbGVtZW50VG9DbGVhckVuZCA9IGdldExvZ2ljYWxTaWJsaW5nRW5kKHJvb3RFbGVtZW50VG9DbGVhcik7XHJcbiAgICAgIGRlbGV0ZSByb290Q29tcG9uZW50c1BlbmRpbmdGaXJzdFJlbmRlcltjb21wb25lbnRJZF07XHJcblxyXG4gICAgICBpZiAoIXJvb3RFbGVtZW50VG9DbGVhckVuZCkge1xyXG4gICAgICAgIGNsZWFyRWxlbWVudChyb290RWxlbWVudFRvQ2xlYXIgYXMgdW5rbm93biBhcyBFbGVtZW50KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjbGVhckJldHdlZW4ocm9vdEVsZW1lbnRUb0NsZWFyIGFzIHVua25vd24gYXMgTm9kZSwgcm9vdEVsZW1lbnRUb0NsZWFyRW5kIGFzIHVua25vd24gYXMgQ29tbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvd25lckRvY3VtZW50ID0gZ2V0Q2xvc2VzdERvbUVsZW1lbnQoZWxlbWVudCkub3duZXJEb2N1bWVudDtcclxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRCZWZvcmUgPSBvd25lckRvY3VtZW50ICYmIG93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLmFwcGx5RWRpdHMoYmF0Y2gsIGNvbXBvbmVudElkLCBlbGVtZW50LCAwLCBlZGl0cywgcmVmZXJlbmNlRnJhbWVzKTtcclxuXHJcbiAgICAvLyBUcnkgdG8gcmVzdG9yZSBmb2N1cyBpbiBjYXNlIGl0IHdhcyBsb3N0IGR1ZSB0byBhbiBlbGVtZW50IG1vdmVcclxuICAgIGlmICgoYWN0aXZlRWxlbWVudEJlZm9yZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJiBvd25lckRvY3VtZW50ICYmIG93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gYWN0aXZlRWxlbWVudEJlZm9yZSkge1xyXG4gICAgICBhY3RpdmVFbGVtZW50QmVmb3JlLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzcG9zZUNvbXBvbmVudChjb21wb25lbnRJZDogbnVtYmVyKSB7XHJcbiAgICBkZWxldGUgdGhpcy5jaGlsZENvbXBvbmVudExvY2F0aW9uc1tjb21wb25lbnRJZF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzcG9zZUV2ZW50SGFuZGxlcihldmVudEhhbmRsZXJJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmV2ZW50RGVsZWdhdG9yLnJlbW92ZUxpc3RlbmVyKGV2ZW50SGFuZGxlcklkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoQ29tcG9uZW50VG9FbGVtZW50KGNvbXBvbmVudElkOiBudW1iZXIsIGVsZW1lbnQ6IExvZ2ljYWxFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNoaWxkQ29tcG9uZW50TG9jYXRpb25zW2NvbXBvbmVudElkXSA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFwcGx5RWRpdHMoYmF0Y2g6IFJlbmRlckJhdGNoLCBjb21wb25lbnRJZDogbnVtYmVyLCBwYXJlbnQ6IExvZ2ljYWxFbGVtZW50LCBjaGlsZEluZGV4OiBudW1iZXIsIGVkaXRzOiBBcnJheUJ1aWxkZXJTZWdtZW50PFJlbmRlclRyZWVFZGl0PiwgcmVmZXJlbmNlRnJhbWVzOiBBcnJheVZhbHVlczxSZW5kZXJUcmVlRnJhbWU+KSB7XHJcbiAgICBsZXQgY3VycmVudERlcHRoID0gMDtcclxuICAgIGxldCBjaGlsZEluZGV4QXRDdXJyZW50RGVwdGggPSBjaGlsZEluZGV4O1xyXG4gICAgbGV0IHBlcm11dGF0aW9uTGlzdDogUGVybXV0YXRpb25MaXN0RW50cnlbXSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdCBhcnJheUJ1aWxkZXJTZWdtZW50UmVhZGVyID0gYmF0Y2guYXJyYXlCdWlsZGVyU2VnbWVudFJlYWRlcjtcclxuICAgIGNvbnN0IGVkaXRSZWFkZXIgPSBiYXRjaC5lZGl0UmVhZGVyO1xyXG4gICAgY29uc3QgZnJhbWVSZWFkZXIgPSBiYXRjaC5mcmFtZVJlYWRlcjtcclxuICAgIGNvbnN0IGVkaXRzVmFsdWVzID0gYXJyYXlCdWlsZGVyU2VnbWVudFJlYWRlci52YWx1ZXMoZWRpdHMpO1xyXG4gICAgY29uc3QgZWRpdHNPZmZzZXQgPSBhcnJheUJ1aWxkZXJTZWdtZW50UmVhZGVyLm9mZnNldChlZGl0cyk7XHJcbiAgICBjb25zdCBlZGl0c0xlbmd0aCA9IGFycmF5QnVpbGRlclNlZ21lbnRSZWFkZXIuY291bnQoZWRpdHMpO1xyXG4gICAgY29uc3QgbWF4RWRpdEluZGV4RXhjbCA9IGVkaXRzT2Zmc2V0ICsgZWRpdHNMZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgZWRpdEluZGV4ID0gZWRpdHNPZmZzZXQ7IGVkaXRJbmRleCA8IG1heEVkaXRJbmRleEV4Y2w7IGVkaXRJbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGVkaXQgPSBiYXRjaC5kaWZmUmVhZGVyLmVkaXRzRW50cnkoZWRpdHNWYWx1ZXMsIGVkaXRJbmRleCk7XHJcbiAgICAgIGNvbnN0IGVkaXRUeXBlID0gZWRpdFJlYWRlci5lZGl0VHlwZShlZGl0KTtcclxuICAgICAgc3dpdGNoIChlZGl0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgRWRpdFR5cGUucHJlcGVuZEZyYW1lOiB7XHJcbiAgICAgICAgICBjb25zdCBmcmFtZUluZGV4ID0gZWRpdFJlYWRlci5uZXdUcmVlSW5kZXgoZWRpdCk7XHJcbiAgICAgICAgICBjb25zdCBmcmFtZSA9IGJhdGNoLnJlZmVyZW5jZUZyYW1lc0VudHJ5KHJlZmVyZW5jZUZyYW1lcywgZnJhbWVJbmRleCk7XHJcbiAgICAgICAgICBjb25zdCBzaWJsaW5nSW5kZXggPSBlZGl0UmVhZGVyLnNpYmxpbmdJbmRleChlZGl0KTtcclxuICAgICAgICAgIHRoaXMuaW5zZXJ0RnJhbWUoYmF0Y2gsIGNvbXBvbmVudElkLCBwYXJlbnQsIGNoaWxkSW5kZXhBdEN1cnJlbnREZXB0aCArIHNpYmxpbmdJbmRleCwgcmVmZXJlbmNlRnJhbWVzLCBmcmFtZSwgZnJhbWVJbmRleCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBFZGl0VHlwZS5yZW1vdmVGcmFtZToge1xyXG4gICAgICAgICAgY29uc3Qgc2libGluZ0luZGV4ID0gZWRpdFJlYWRlci5zaWJsaW5nSW5kZXgoZWRpdCk7XHJcbiAgICAgICAgICByZW1vdmVMb2dpY2FsQ2hpbGQocGFyZW50LCBjaGlsZEluZGV4QXRDdXJyZW50RGVwdGggKyBzaWJsaW5nSW5kZXgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRWRpdFR5cGUuc2V0QXR0cmlidXRlOiB7XHJcbiAgICAgICAgICBjb25zdCBmcmFtZUluZGV4ID0gZWRpdFJlYWRlci5uZXdUcmVlSW5kZXgoZWRpdCk7XHJcbiAgICAgICAgICBjb25zdCBmcmFtZSA9IGJhdGNoLnJlZmVyZW5jZUZyYW1lc0VudHJ5KHJlZmVyZW5jZUZyYW1lcywgZnJhbWVJbmRleCk7XHJcbiAgICAgICAgICBjb25zdCBzaWJsaW5nSW5kZXggPSBlZGl0UmVhZGVyLnNpYmxpbmdJbmRleChlZGl0KTtcclxuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRMb2dpY2FsQ2hpbGQocGFyZW50LCBjaGlsZEluZGV4QXRDdXJyZW50RGVwdGggKyBzaWJsaW5nSW5kZXgpO1xyXG4gICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlBdHRyaWJ1dGUoYmF0Y2gsIGNvbXBvbmVudElkLCBlbGVtZW50LCBmcmFtZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBzZXQgYXR0cmlidXRlIG9uIG5vbi1lbGVtZW50IGNoaWxkJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBFZGl0VHlwZS5yZW1vdmVBdHRyaWJ1dGU6IHtcclxuICAgICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBkb24ndCBoYXZlIHRvIGRpc3Bvc2UgdGhlIGluZm8gd2UgdHJhY2sgYWJvdXQgZXZlbnQgaGFuZGxlcnMgaGVyZSwgYmVjYXVzZSB0aGVcclxuICAgICAgICAgIC8vIGRpc3Bvc2VkIGV2ZW50IGhhbmRsZXIgSURzIGFyZSBkZWxpdmVyZWQgc2VwYXJhdGVseSAoaW4gdGhlICdkaXNwb3NlZEV2ZW50SGFuZGxlcklkcycgYXJyYXkpXHJcbiAgICAgICAgICBjb25zdCBzaWJsaW5nSW5kZXggPSBlZGl0UmVhZGVyLnNpYmxpbmdJbmRleChlZGl0KTtcclxuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRMb2dpY2FsQ2hpbGQocGFyZW50LCBjaGlsZEluZGV4QXRDdXJyZW50RGVwdGggKyBzaWJsaW5nSW5kZXgpO1xyXG4gICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gZWRpdFJlYWRlci5yZW1vdmVkQXR0cmlidXRlTmFtZShlZGl0KSE7XHJcbiAgICAgICAgICAgIC8vIEZpcnN0IHRyeSB0byByZW1vdmUgYW55IHNwZWNpYWwgcHJvcGVydHkgd2UgdXNlIGZvciB0aGlzIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudHJ5QXBwbHlTcGVjaWFsUHJvcGVydHkoYmF0Y2gsIGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIG51bGwpKSB7XHJcbiAgICAgICAgICAgICAgLy8gSWYgdGhhdCdzIG5vdCBhcHBsaWNhYmxlLCBpdCdzIGEgcmVndWxhciBET00gYXR0cmlidXRlIHNvIHJlbW92ZSB0aGF0XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlbW92ZSBhdHRyaWJ1dGUgZnJvbSBub24tZWxlbWVudCBjaGlsZCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRWRpdFR5cGUudXBkYXRlVGV4dDoge1xyXG4gICAgICAgICAgY29uc3QgZnJhbWVJbmRleCA9IGVkaXRSZWFkZXIubmV3VHJlZUluZGV4KGVkaXQpO1xyXG4gICAgICAgICAgY29uc3QgZnJhbWUgPSBiYXRjaC5yZWZlcmVuY2VGcmFtZXNFbnRyeShyZWZlcmVuY2VGcmFtZXMsIGZyYW1lSW5kZXgpO1xyXG4gICAgICAgICAgY29uc3Qgc2libGluZ0luZGV4ID0gZWRpdFJlYWRlci5zaWJsaW5nSW5kZXgoZWRpdCk7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGdldExvZ2ljYWxDaGlsZChwYXJlbnQsIGNoaWxkSW5kZXhBdEN1cnJlbnREZXB0aCArIHNpYmxpbmdJbmRleCk7XHJcbiAgICAgICAgICBpZiAodGV4dE5vZGUgaW5zdGFuY2VvZiBUZXh0KSB7XHJcbiAgICAgICAgICAgIHRleHROb2RlLnRleHRDb250ZW50ID0gZnJhbWVSZWFkZXIudGV4dENvbnRlbnQoZnJhbWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2V0IHRleHQgY29udGVudCBvbiBub24tdGV4dCBjaGlsZCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRWRpdFR5cGUudXBkYXRlTWFya3VwOiB7XHJcbiAgICAgICAgICBjb25zdCBmcmFtZUluZGV4ID0gZWRpdFJlYWRlci5uZXdUcmVlSW5kZXgoZWRpdCk7XHJcbiAgICAgICAgICBjb25zdCBmcmFtZSA9IGJhdGNoLnJlZmVyZW5jZUZyYW1lc0VudHJ5KHJlZmVyZW5jZUZyYW1lcywgZnJhbWVJbmRleCk7XHJcbiAgICAgICAgICBjb25zdCBzaWJsaW5nSW5kZXggPSBlZGl0UmVhZGVyLnNpYmxpbmdJbmRleChlZGl0KTtcclxuICAgICAgICAgIHJlbW92ZUxvZ2ljYWxDaGlsZChwYXJlbnQsIGNoaWxkSW5kZXhBdEN1cnJlbnREZXB0aCArIHNpYmxpbmdJbmRleCk7XHJcbiAgICAgICAgICB0aGlzLmluc2VydE1hcmt1cChiYXRjaCwgcGFyZW50LCBjaGlsZEluZGV4QXRDdXJyZW50RGVwdGggKyBzaWJsaW5nSW5kZXgsIGZyYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEVkaXRUeXBlLnN0ZXBJbjoge1xyXG4gICAgICAgICAgY29uc3Qgc2libGluZ0luZGV4ID0gZWRpdFJlYWRlci5zaWJsaW5nSW5kZXgoZWRpdCk7XHJcbiAgICAgICAgICBwYXJlbnQgPSBnZXRMb2dpY2FsQ2hpbGQocGFyZW50LCBjaGlsZEluZGV4QXRDdXJyZW50RGVwdGggKyBzaWJsaW5nSW5kZXgpO1xyXG4gICAgICAgICAgY3VycmVudERlcHRoKys7XHJcbiAgICAgICAgICBjaGlsZEluZGV4QXRDdXJyZW50RGVwdGggPSAwO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRWRpdFR5cGUuc3RlcE91dDoge1xyXG4gICAgICAgICAgcGFyZW50ID0gZ2V0TG9naWNhbFBhcmVudChwYXJlbnQpITtcclxuICAgICAgICAgIGN1cnJlbnREZXB0aC0tO1xyXG4gICAgICAgICAgY2hpbGRJbmRleEF0Q3VycmVudERlcHRoID0gY3VycmVudERlcHRoID09PSAwID8gY2hpbGRJbmRleCA6IDA7IC8vIFRoZSBjaGlsZEluZGV4IGlzIG9ubHkgZXZlciBub256ZXJvIGF0IHplcm8gZGVwdGhcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEVkaXRUeXBlLnBlcm11dGF0aW9uTGlzdEVudHJ5OiB7XHJcbiAgICAgICAgICBwZXJtdXRhdGlvbkxpc3QgPSBwZXJtdXRhdGlvbkxpc3QgfHwgW107XHJcbiAgICAgICAgICBwZXJtdXRhdGlvbkxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgIGZyb21TaWJsaW5nSW5kZXg6IGNoaWxkSW5kZXhBdEN1cnJlbnREZXB0aCArIGVkaXRSZWFkZXIuc2libGluZ0luZGV4KGVkaXQpLFxyXG4gICAgICAgICAgICB0b1NpYmxpbmdJbmRleDogY2hpbGRJbmRleEF0Q3VycmVudERlcHRoICsgZWRpdFJlYWRlci5tb3ZlVG9TaWJsaW5nSW5kZXgoZWRpdCksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEVkaXRUeXBlLnBlcm11dGF0aW9uTGlzdEVuZDoge1xyXG4gICAgICAgICAgcGVybXV0ZUxvZ2ljYWxDaGlsZHJlbihwYXJlbnQsIHBlcm11dGF0aW9uTGlzdCEpO1xyXG4gICAgICAgICAgcGVybXV0YXRpb25MaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgIGNvbnN0IHVua25vd25UeXBlOiBuZXZlciA9IGVkaXRUeXBlOyAvLyBDb21waWxlLXRpbWUgdmVyaWZpY2F0aW9uIHRoYXQgdGhlIHN3aXRjaCB3YXMgZXhoYXVzdGl2ZVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGVkaXQgdHlwZTogJHt1bmtub3duVHlwZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zZXJ0RnJhbWUoYmF0Y2g6IFJlbmRlckJhdGNoLCBjb21wb25lbnRJZDogbnVtYmVyLCBwYXJlbnQ6IExvZ2ljYWxFbGVtZW50LCBjaGlsZEluZGV4OiBudW1iZXIsIGZyYW1lczogQXJyYXlWYWx1ZXM8UmVuZGVyVHJlZUZyYW1lPiwgZnJhbWU6IFJlbmRlclRyZWVGcmFtZSwgZnJhbWVJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGZyYW1lUmVhZGVyID0gYmF0Y2guZnJhbWVSZWFkZXI7XHJcbiAgICBjb25zdCBmcmFtZVR5cGUgPSBmcmFtZVJlYWRlci5mcmFtZVR5cGUoZnJhbWUpO1xyXG4gICAgc3dpdGNoIChmcmFtZVR5cGUpIHtcclxuICAgICAgY2FzZSBGcmFtZVR5cGUuZWxlbWVudDpcclxuICAgICAgICB0aGlzLmluc2VydEVsZW1lbnQoYmF0Y2gsIGNvbXBvbmVudElkLCBwYXJlbnQsIGNoaWxkSW5kZXgsIGZyYW1lcywgZnJhbWUsIGZyYW1lSW5kZXgpO1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgICBjYXNlIEZyYW1lVHlwZS50ZXh0OlxyXG4gICAgICAgIHRoaXMuaW5zZXJ0VGV4dChiYXRjaCwgcGFyZW50LCBjaGlsZEluZGV4LCBmcmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgIGNhc2UgRnJhbWVUeXBlLmF0dHJpYnV0ZTpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dHJpYnV0ZSBmcmFtZXMgc2hvdWxkIG9ubHkgYmUgcHJlc2VudCBhcyBsZWFkaW5nIGNoaWxkcmVuIG9mIGVsZW1lbnQgZnJhbWVzLicpO1xyXG4gICAgICBjYXNlIEZyYW1lVHlwZS5jb21wb25lbnQ6XHJcbiAgICAgICAgdGhpcy5pbnNlcnRDb21wb25lbnQoYmF0Y2gsIHBhcmVudCwgY2hpbGRJbmRleCwgZnJhbWUpO1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgICBjYXNlIEZyYW1lVHlwZS5yZWdpb246XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0RnJhbWVSYW5nZShiYXRjaCwgY29tcG9uZW50SWQsIHBhcmVudCwgY2hpbGRJbmRleCwgZnJhbWVzLCBmcmFtZUluZGV4ICsgMSwgZnJhbWVJbmRleCArIGZyYW1lUmVhZGVyLnN1YnRyZWVMZW5ndGgoZnJhbWUpKTtcclxuICAgICAgY2FzZSBGcmFtZVR5cGUuZWxlbWVudFJlZmVyZW5jZUNhcHR1cmU6XHJcbiAgICAgICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgICAgICAgIGFwcGx5Q2FwdHVyZUlkVG9FbGVtZW50KHBhcmVudCwgZnJhbWVSZWFkZXIuZWxlbWVudFJlZmVyZW5jZUNhcHR1cmVJZChmcmFtZSkhKTtcclxuICAgICAgICAgIHJldHVybiAwOyAvLyBBIFwiY2FwdHVyZVwiIGlzIGEgY2hpbGQgaW4gdGhlIGRpZmYsIGJ1dCBoYXMgbm8gbm9kZSBpbiB0aGUgRE9NXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmZXJlbmNlIGNhcHR1cmUgZnJhbWVzIGNhbiBvbmx5IGJlIGNoaWxkcmVuIG9mIGVsZW1lbnQgZnJhbWVzLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSBGcmFtZVR5cGUubWFya3VwOlxyXG4gICAgICAgIHRoaXMuaW5zZXJ0TWFya3VwKGJhdGNoLCBwYXJlbnQsIGNoaWxkSW5kZXgsIGZyYW1lKTtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zdCB1bmtub3duVHlwZTogbmV2ZXIgPSBmcmFtZVR5cGU7IC8vIENvbXBpbGUtdGltZSB2ZXJpZmljYXRpb24gdGhhdCB0aGUgc3dpdGNoIHdhcyBleGhhdXN0aXZlXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGZyYW1lIHR5cGU6ICR7dW5rbm93blR5cGV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc2VydEVsZW1lbnQoYmF0Y2g6IFJlbmRlckJhdGNoLCBjb21wb25lbnRJZDogbnVtYmVyLCBwYXJlbnQ6IExvZ2ljYWxFbGVtZW50LCBjaGlsZEluZGV4OiBudW1iZXIsIGZyYW1lczogQXJyYXlWYWx1ZXM8UmVuZGVyVHJlZUZyYW1lPiwgZnJhbWU6IFJlbmRlclRyZWVGcmFtZSwgZnJhbWVJbmRleDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBmcmFtZVJlYWRlciA9IGJhdGNoLmZyYW1lUmVhZGVyO1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IGZyYW1lUmVhZGVyLmVsZW1lbnROYW1lKGZyYW1lKSE7XHJcbiAgICBjb25zdCBuZXdEb21FbGVtZW50UmF3ID0gdGFnTmFtZSA9PT0gJ3N2ZycgfHwgaXNTdmdFbGVtZW50KHBhcmVudCkgP1xyXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdGFnTmFtZSkgOlxyXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IHRvTG9naWNhbEVsZW1lbnQobmV3RG9tRWxlbWVudFJhdyk7XHJcbiAgICBpbnNlcnRMb2dpY2FsQ2hpbGQobmV3RG9tRWxlbWVudFJhdywgcGFyZW50LCBjaGlsZEluZGV4KTtcclxuXHJcbiAgICAvLyBBcHBseSBhdHRyaWJ1dGVzXHJcbiAgICBjb25zdCBkZXNjZW5kYW50c0VuZEluZGV4RXhjbCA9IGZyYW1lSW5kZXggKyBmcmFtZVJlYWRlci5zdWJ0cmVlTGVuZ3RoKGZyYW1lKTtcclxuICAgIGZvciAobGV0IGRlc2NlbmRhbnRJbmRleCA9IGZyYW1lSW5kZXggKyAxOyBkZXNjZW5kYW50SW5kZXggPCBkZXNjZW5kYW50c0VuZEluZGV4RXhjbDsgZGVzY2VuZGFudEluZGV4KyspIHtcclxuICAgICAgY29uc3QgZGVzY2VuZGFudEZyYW1lID0gYmF0Y2gucmVmZXJlbmNlRnJhbWVzRW50cnkoZnJhbWVzLCBkZXNjZW5kYW50SW5kZXgpO1xyXG4gICAgICBpZiAoZnJhbWVSZWFkZXIuZnJhbWVUeXBlKGRlc2NlbmRhbnRGcmFtZSkgPT09IEZyYW1lVHlwZS5hdHRyaWJ1dGUpIHtcclxuICAgICAgICB0aGlzLmFwcGx5QXR0cmlidXRlKGJhdGNoLCBjb21wb25lbnRJZCwgbmV3RG9tRWxlbWVudFJhdywgZGVzY2VuZGFudEZyYW1lKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBcyBzb29uIGFzIHdlIHNlZSBhIG5vbi1hdHRyaWJ1dGUgY2hpbGQsIGFsbCB0aGUgc3Vic2VxdWVudCBjaGlsZCBmcmFtZXMgYXJlXHJcbiAgICAgICAgLy8gbm90IGF0dHJpYnV0ZXMsIHNvIGJhaWwgb3V0IGFuZCBpbnNlcnQgdGhlIHJlbW5hbnRzIHJlY3Vyc2l2ZWx5XHJcbiAgICAgICAgdGhpcy5pbnNlcnRGcmFtZVJhbmdlKGJhdGNoLCBjb21wb25lbnRJZCwgbmV3RWxlbWVudCwgMCwgZnJhbWVzLCBkZXNjZW5kYW50SW5kZXgsIGRlc2NlbmRhbnRzRW5kSW5kZXhFeGNsKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdlIGhhbmRsZSBzZXR0aW5nICd2YWx1ZScgb24gYSA8c2VsZWN0PiBpbiB0d28gZGlmZmVyZW50IHdheXM6XHJcbiAgICAvLyBbMV0gV2hlbiBpbnNlcnRpbmcgYSBjb3JyZXNwb25kaW5nIDxvcHRpb24+LCBpbiBjYXNlIHlvdSdyZSBkeW5hbWljYWxseSBhZGRpbmcgb3B0aW9uc1xyXG4gICAgLy8gWzJdIEFmdGVyIHdlIGZpbmlzaCBpbnNlcnRpbmcgdGhlIDxzZWxlY3Q+LCBpbiBjYXNlIHRoZSBkZXNjZW5kYW50IG9wdGlvbnMgYXJlIGJlaW5nXHJcbiAgICAvLyAgICAgYWRkZWQgYXMgYW4gb3BhcXVlIG1hcmt1cCBibG9jayByYXRoZXIgdGhhbiBpbmRpdmlkdWFsbHlcclxuICAgIC8vIFJpZ2h0IGhlcmUgd2UgaW1wbGVtZW50IFsyXVxyXG4gICAgaWYgKG5ld0RvbUVsZW1lbnRSYXcgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiBzZWxlY3RWYWx1ZVByb3BuYW1lIGluIG5ld0RvbUVsZW1lbnRSYXcpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0VmFsdWUgPSBuZXdEb21FbGVtZW50UmF3W3NlbGVjdFZhbHVlUHJvcG5hbWVdO1xyXG4gICAgICBuZXdEb21FbGVtZW50UmF3LnZhbHVlID0gc2VsZWN0VmFsdWU7XHJcbiAgICAgIGRlbGV0ZSBuZXdEb21FbGVtZW50UmF3W3NlbGVjdFZhbHVlUHJvcG5hbWVdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnNlcnRDb21wb25lbnQoYmF0Y2g6IFJlbmRlckJhdGNoLCBwYXJlbnQ6IExvZ2ljYWxFbGVtZW50LCBjaGlsZEluZGV4OiBudW1iZXIsIGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBjcmVhdGVBbmRJbnNlcnRMb2dpY2FsQ29udGFpbmVyKHBhcmVudCwgY2hpbGRJbmRleCk7XHJcblxyXG4gICAgLy8gQWxsIHdlIGhhdmUgdG8gZG8gaXMgYXNzb2NpYXRlIHRoZSBjaGlsZCBjb21wb25lbnQgSUQgd2l0aCBpdHMgbG9jYXRpb24uIFdlIGRvbid0IGFjdHVhbGx5XHJcbiAgICAvLyBkbyBhbnkgcmVuZGVyaW5nIGhlcmUsIGJlY2F1c2UgdGhlIGRpZmYgZm9yIHRoZSBjaGlsZCB3aWxsIGFwcGVhciBsYXRlciBpbiB0aGUgcmVuZGVyIGJhdGNoLlxyXG4gICAgY29uc3QgY2hpbGRDb21wb25lbnRJZCA9IGJhdGNoLmZyYW1lUmVhZGVyLmNvbXBvbmVudElkKGZyYW1lKTtcclxuICAgIHRoaXMuYXR0YWNoQ29tcG9uZW50VG9FbGVtZW50KGNoaWxkQ29tcG9uZW50SWQsIGNvbnRhaW5lckVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnNlcnRUZXh0KGJhdGNoOiBSZW5kZXJCYXRjaCwgcGFyZW50OiBMb2dpY2FsRWxlbWVudCwgY2hpbGRJbmRleDogbnVtYmVyLCB0ZXh0RnJhbWU6IFJlbmRlclRyZWVGcmFtZSkge1xyXG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSBiYXRjaC5mcmFtZVJlYWRlci50ZXh0Q29udGVudCh0ZXh0RnJhbWUpITtcclxuICAgIGNvbnN0IG5ld1RleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dENvbnRlbnQpO1xyXG4gICAgaW5zZXJ0TG9naWNhbENoaWxkKG5ld1RleHROb2RlLCBwYXJlbnQsIGNoaWxkSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnNlcnRNYXJrdXAoYmF0Y2g6IFJlbmRlckJhdGNoLCBwYXJlbnQ6IExvZ2ljYWxFbGVtZW50LCBjaGlsZEluZGV4OiBudW1iZXIsIG1hcmt1cEZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpIHtcclxuICAgIGNvbnN0IG1hcmt1cENvbnRhaW5lciA9IGNyZWF0ZUFuZEluc2VydExvZ2ljYWxDb250YWluZXIocGFyZW50LCBjaGlsZEluZGV4KTtcclxuXHJcbiAgICBjb25zdCBtYXJrdXBDb250ZW50ID0gYmF0Y2guZnJhbWVSZWFkZXIubWFya3VwQ29udGVudChtYXJrdXBGcmFtZSk7XHJcbiAgICBjb25zdCBwYXJzZWRNYXJrdXAgPSBwYXJzZU1hcmt1cChtYXJrdXBDb250ZW50LCBpc1N2Z0VsZW1lbnQocGFyZW50KSk7XHJcbiAgICBsZXQgbG9naWNhbFNpYmxpbmdJbmRleCA9IDA7XHJcbiAgICB3aGlsZSAocGFyc2VkTWFya3VwLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgaW5zZXJ0TG9naWNhbENoaWxkKHBhcnNlZE1hcmt1cC5maXJzdENoaWxkLCBtYXJrdXBDb250YWluZXIsIGxvZ2ljYWxTaWJsaW5nSW5kZXgrKyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFwcGx5QXR0cmlidXRlKGJhdGNoOiBSZW5kZXJCYXRjaCwgY29tcG9uZW50SWQ6IG51bWJlciwgdG9Eb21FbGVtZW50OiBFbGVtZW50LCBhdHRyaWJ1dGVGcmFtZTogUmVuZGVyVHJlZUZyYW1lKSB7XHJcbiAgICBjb25zdCBmcmFtZVJlYWRlciA9IGJhdGNoLmZyYW1lUmVhZGVyO1xyXG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGZyYW1lUmVhZGVyLmF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlRnJhbWUpITtcclxuICAgIGNvbnN0IGV2ZW50SGFuZGxlcklkID0gZnJhbWVSZWFkZXIuYXR0cmlidXRlRXZlbnRIYW5kbGVySWQoYXR0cmlidXRlRnJhbWUpO1xyXG5cclxuICAgIGlmIChldmVudEhhbmRsZXJJZCkge1xyXG4gICAgICBjb25zdCBldmVudE5hbWUgPSBzdHJpcE9uUHJlZml4KGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICB0aGlzLmV2ZW50RGVsZWdhdG9yLnNldExpc3RlbmVyKHRvRG9tRWxlbWVudCwgZXZlbnROYW1lLCBldmVudEhhbmRsZXJJZCwgY29tcG9uZW50SWQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmlyc3Qgc2VlIGlmIHdlIGhhdmUgc3BlY2lhbCBoYW5kbGluZyBmb3IgdGhpcyBhdHRyaWJ1dGVcclxuICAgIGlmICghdGhpcy50cnlBcHBseVNwZWNpYWxQcm9wZXJ0eShiYXRjaCwgdG9Eb21FbGVtZW50LCBhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVGcmFtZSkpIHtcclxuICAgICAgLy8gSWYgbm90LCB0cmVhdCBpdCBhcyBhIHJlZ3VsYXIgc3RyaW5nLXZhbHVlZCBhdHRyaWJ1dGVcclxuICAgICAgdG9Eb21FbGVtZW50LnNldEF0dHJpYnV0ZShcclxuICAgICAgICBhdHRyaWJ1dGVOYW1lLFxyXG4gICAgICAgIGZyYW1lUmVhZGVyLmF0dHJpYnV0ZVZhbHVlKGF0dHJpYnV0ZUZyYW1lKSFcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5QXBwbHlTcGVjaWFsUHJvcGVydHkoYmF0Y2g6IFJlbmRlckJhdGNoLCBlbGVtZW50OiBFbGVtZW50LCBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZUZyYW1lOiBSZW5kZXJUcmVlRnJhbWUgfCBudWxsKSB7XHJcbiAgICBzd2l0Y2ggKGF0dHJpYnV0ZU5hbWUpIHtcclxuICAgICAgY2FzZSAndmFsdWUnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyeUFwcGx5VmFsdWVQcm9wZXJ0eShiYXRjaCwgZWxlbWVudCwgYXR0cmlidXRlRnJhbWUpO1xyXG4gICAgICBjYXNlICdjaGVja2VkJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50cnlBcHBseUNoZWNrZWRQcm9wZXJ0eShiYXRjaCwgZWxlbWVudCwgYXR0cmlidXRlRnJhbWUpO1xyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUuc3RhcnRzV2l0aChpbnRlcm5hbEF0dHJpYnV0ZU5hbWVQcmVmaXgpKSB7XHJcbiAgICAgICAgICB0aGlzLmFwcGx5SW50ZXJuYWxBdHRyaWJ1dGUoYmF0Y2gsIGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUuc3Vic3RyaW5nKGludGVybmFsQXR0cmlidXRlTmFtZVByZWZpeC5sZW5ndGgpLCBhdHRyaWJ1dGVGcmFtZSk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFwcGx5SW50ZXJuYWxBdHRyaWJ1dGUoYmF0Y2g6IFJlbmRlckJhdGNoLCBlbGVtZW50OiBFbGVtZW50LCBpbnRlcm5hbEF0dHJpYnV0ZU5hbWU6IHN0cmluZywgYXR0cmlidXRlRnJhbWU6IFJlbmRlclRyZWVGcmFtZSB8IG51bGwpIHtcclxuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlRnJhbWUgPyBiYXRjaC5mcmFtZVJlYWRlci5hdHRyaWJ1dGVWYWx1ZShhdHRyaWJ1dGVGcmFtZSkgOiBudWxsO1xyXG5cclxuICAgIGlmIChpbnRlcm5hbEF0dHJpYnV0ZU5hbWUuc3RhcnRzV2l0aChldmVudFN0b3BQcm9wYWdhdGlvbkF0dHJpYnV0ZU5hbWVQcmVmaXgpKSB7XHJcbiAgICAgIC8vIFN0b3AgcHJvcGFnYXRpb25cclxuICAgICAgY29uc3QgZXZlbnROYW1lID0gc3RyaXBPblByZWZpeChpbnRlcm5hbEF0dHJpYnV0ZU5hbWUuc3Vic3RyaW5nKGV2ZW50U3RvcFByb3BhZ2F0aW9uQXR0cmlidXRlTmFtZVByZWZpeC5sZW5ndGgpKTtcclxuICAgICAgdGhpcy5ldmVudERlbGVnYXRvci5zZXRTdG9wUHJvcGFnYXRpb24oZWxlbWVudCwgZXZlbnROYW1lLCBhdHRyaWJ1dGVWYWx1ZSAhPT0gbnVsbCk7XHJcbiAgICB9IGVsc2UgaWYgKGludGVybmFsQXR0cmlidXRlTmFtZS5zdGFydHNXaXRoKGV2ZW50UHJldmVudERlZmF1bHRBdHRyaWJ1dGVOYW1lUHJlZml4KSkge1xyXG4gICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcclxuICAgICAgY29uc3QgZXZlbnROYW1lID0gc3RyaXBPblByZWZpeChpbnRlcm5hbEF0dHJpYnV0ZU5hbWUuc3Vic3RyaW5nKGV2ZW50UHJldmVudERlZmF1bHRBdHRyaWJ1dGVOYW1lUHJlZml4Lmxlbmd0aCkpO1xyXG4gICAgICB0aGlzLmV2ZW50RGVsZWdhdG9yLnNldFByZXZlbnREZWZhdWx0KGVsZW1lbnQsIGV2ZW50TmFtZSwgYXR0cmlidXRlVmFsdWUgIT09IG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gVGhlIHByZWZpeCBtYWtlcyB0aGlzIGF0dHJpYnV0ZSBuYW1lIHJlc2VydmVkLCBzbyBhbnkgb3RoZXIgdXNhZ2UgaXMgZGlzYWxsb3dlZFxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGludGVybmFsIGF0dHJpYnV0ZSAnJHtpbnRlcm5hbEF0dHJpYnV0ZU5hbWV9J2ApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cnlBcHBseVZhbHVlUHJvcGVydHkoYmF0Y2g6IFJlbmRlckJhdGNoLCBlbGVtZW50OiBFbGVtZW50LCBhdHRyaWJ1dGVGcmFtZTogUmVuZGVyVHJlZUZyYW1lIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gQ2VydGFpbiBlbGVtZW50cyBoYXZlIGJ1aWx0LWluIGJlaGF2aW91ciBmb3IgdGhlaXIgJ3ZhbHVlJyBwcm9wZXJ0eVxyXG4gICAgY29uc3QgZnJhbWVSZWFkZXIgPSBiYXRjaC5mcmFtZVJlYWRlcjtcclxuXHJcbiAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICd0aW1lJyAmJiAhZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0ZXAnKSkge1xyXG4gICAgICBjb25zdCB0aW1lVmFsdWUgPSBhdHRyaWJ1dGVGcmFtZSA/IGZyYW1lUmVhZGVyLmF0dHJpYnV0ZVZhbHVlKGF0dHJpYnV0ZUZyYW1lKSA6IG51bGw7XHJcbiAgICAgIGlmICh0aW1lVmFsdWUpIHtcclxuICAgICAgICBlbGVtZW50Wyd2YWx1ZSddID0gdGltZVZhbHVlLnN1YnN0cmluZygwLCA1KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZWxlbWVudC50YWdOYW1lKSB7XHJcbiAgICAgIGNhc2UgJ0lOUFVUJzpcclxuICAgICAgY2FzZSAnU0VMRUNUJzpcclxuICAgICAgY2FzZSAnVEVYVEFSRUEnOiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVGcmFtZSA/IGZyYW1lUmVhZGVyLmF0dHJpYnV0ZVZhbHVlKGF0dHJpYnV0ZUZyYW1lKSA6IG51bGw7XHJcbiAgICAgICAgKGVsZW1lbnQgYXMgYW55KS52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnU0VMRUNUJykge1xyXG4gICAgICAgICAgLy8gPHNlbGVjdD4gaXMgc3BlY2lhbCwgaW4gdGhhdCBhbnl0aGluZyB3ZSB3cml0ZSB0byAudmFsdWUgd2lsbCBiZSBsb3N0IGlmIHRoZXJlXHJcbiAgICAgICAgICAvLyBpc24ndCB5ZXQgYSBtYXRjaGluZyA8b3B0aW9uPi4gVG8gbWFpbnRhaW4gdGhlIGV4cGVjdGVkIGJlaGF2aW9yIG5vIG1hdHRlciB0aGVcclxuICAgICAgICAgIC8vIGVsZW1lbnQgaW5zZXJ0aW9uL3VwZGF0ZSBvcmRlciwgcHJlc2VydmUgdGhlIGRlc2lyZWQgdmFsdWUgc2VwYXJhdGVseSBzb1xyXG4gICAgICAgICAgLy8gd2UgY2FuIHJlY292ZXIgaXQgd2hlbiBpbnNlcnRpbmcgYW55IG1hdGNoaW5nIDxvcHRpb24+IG9yIGFmdGVyIGluc2VydGluZyBhblxyXG4gICAgICAgICAgLy8gZW50aXJlIG1hcmt1cCBibG9jayBvZiBkZXNjZW5kYW50cy5cclxuICAgICAgICAgIGVsZW1lbnRbc2VsZWN0VmFsdWVQcm9wbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnT1BUSU9OJzoge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlRnJhbWUgPyBmcmFtZVJlYWRlci5hdHRyaWJ1dGVWYWx1ZShhdHRyaWJ1dGVGcmFtZSkgOiBudWxsO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2VlIGFib3ZlIGZvciB3aHkgd2UgaGF2ZSB0aGlzIHNwZWNpYWwgaGFuZGxpbmcgZm9yIDxzZWxlY3Q+LzxvcHRpb24+XHJcbiAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBvbmUgb2YgdGhlIHR3byBjYXNlcyB3aGVyZSB3ZSBzZXQgdGhlIHZhbHVlIG9uIGEgPHNlbGVjdD5cclxuICAgICAgICBjb25zdCBzZWxlY3RFbGVtID0gdGhpcy5maW5kQ2xvc2VzdEFuY2VzdG9yU2VsZWN0RWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICBpZiAoc2VsZWN0RWxlbSAmJiAoc2VsZWN0VmFsdWVQcm9wbmFtZSBpbiBzZWxlY3RFbGVtKSAmJiBzZWxlY3RFbGVtW3NlbGVjdFZhbHVlUHJvcG5hbWVdID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy50cnlBcHBseVZhbHVlUHJvcGVydHkoYmF0Y2gsIHNlbGVjdEVsZW0sIGF0dHJpYnV0ZUZyYW1lKTtcclxuICAgICAgICAgIGRlbGV0ZSBzZWxlY3RFbGVtW3NlbGVjdFZhbHVlUHJvcG5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5QXBwbHlDaGVja2VkUHJvcGVydHkoYmF0Y2g6IFJlbmRlckJhdGNoLCBlbGVtZW50OiBFbGVtZW50LCBhdHRyaWJ1dGVGcmFtZTogUmVuZGVyVHJlZUZyYW1lIHwgbnVsbCkge1xyXG4gICAgLy8gQ2VydGFpbiBlbGVtZW50cyBoYXZlIGJ1aWx0LWluIGJlaGF2aW91ciBmb3IgdGhlaXIgJ2NoZWNrZWQnIHByb3BlcnR5XHJcbiAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlRnJhbWUgPyBiYXRjaC5mcmFtZVJlYWRlci5hdHRyaWJ1dGVWYWx1ZShhdHRyaWJ1dGVGcmFtZSkgOiBudWxsO1xyXG4gICAgICAoZWxlbWVudCBhcyBhbnkpLmNoZWNrZWQgPSB2YWx1ZSAhPT0gbnVsbDtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRDbG9zZXN0QW5jZXN0b3JTZWxlY3RFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQgfCBudWxsKSB7XHJcbiAgICB3aGlsZSAoZWxlbWVudCkge1xyXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnNlcnRGcmFtZVJhbmdlKGJhdGNoOiBSZW5kZXJCYXRjaCwgY29tcG9uZW50SWQ6IG51bWJlciwgcGFyZW50OiBMb2dpY2FsRWxlbWVudCwgY2hpbGRJbmRleDogbnVtYmVyLCBmcmFtZXM6IEFycmF5VmFsdWVzPFJlbmRlclRyZWVGcmFtZT4sIHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXhFeGNsOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3Qgb3JpZ0NoaWxkSW5kZXggPSBjaGlsZEluZGV4O1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSBzdGFydEluZGV4OyBpbmRleCA8IGVuZEluZGV4RXhjbDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBmcmFtZSA9IGJhdGNoLnJlZmVyZW5jZUZyYW1lc0VudHJ5KGZyYW1lcywgaW5kZXgpO1xyXG4gICAgICBjb25zdCBudW1DaGlsZHJlbkluc2VydGVkID0gdGhpcy5pbnNlcnRGcmFtZShiYXRjaCwgY29tcG9uZW50SWQsIHBhcmVudCwgY2hpbGRJbmRleCwgZnJhbWVzLCBmcmFtZSwgaW5kZXgpO1xyXG4gICAgICBjaGlsZEluZGV4ICs9IG51bUNoaWxkcmVuSW5zZXJ0ZWQ7XHJcblxyXG4gICAgICAvLyBTa2lwIG92ZXIgYW55IGRlc2NlbmRhbnRzLCBzaW5jZSB0aGV5IGFyZSBhbHJlYWR5IGRlYWx0IHdpdGggcmVjdXJzaXZlbHlcclxuICAgICAgaW5kZXggKz0gY291bnREZXNjZW5kYW50RnJhbWVzKGJhdGNoLCBmcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChjaGlsZEluZGV4IC0gb3JpZ0NoaWxkSW5kZXgpOyAvLyBUb3RhbCBudW1iZXIgb2YgY2hpbGRyZW4gaW5zZXJ0ZWRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50RGVzY3JpcHRvciB7XHJcbiAgc3RhcnQ6IE5vZGU7XHJcbiAgZW5kOiBOb2RlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50RGVzY3JpcHRvciB7XHJcbiAgYnJvd3NlclJlbmRlcmVySWQ6IG51bWJlcjtcclxuICBldmVudEhhbmRsZXJJZDogbnVtYmVyO1xyXG4gIGV2ZW50QXJnc1R5cGU6IEV2ZW50QXJnc1R5cGU7XHJcbiAgZXZlbnRGaWVsZEluZm86IEV2ZW50RmllbGRJbmZvIHwgbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VNYXJrdXAobWFya3VwOiBzdHJpbmcsIGlzU3ZnOiBib29sZWFuKSB7XHJcbiAgaWYgKGlzU3ZnKSB7XHJcbiAgICBzaGFyZWRTdmdFbGVtRm9yUGFyc2luZy5pbm5lckhUTUwgPSBtYXJrdXAgfHwgJyAnO1xyXG4gICAgcmV0dXJuIHNoYXJlZFN2Z0VsZW1Gb3JQYXJzaW5nO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzaGFyZWRUZW1wbGF0ZUVsZW1Gb3JQYXJzaW5nLmlubmVySFRNTCA9IG1hcmt1cCB8fCAnICc7XHJcbiAgICByZXR1cm4gc2hhcmVkVGVtcGxhdGVFbGVtRm9yUGFyc2luZy5jb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY291bnREZXNjZW5kYW50RnJhbWVzKGJhdGNoOiBSZW5kZXJCYXRjaCwgZnJhbWU6IFJlbmRlclRyZWVGcmFtZSk6IG51bWJlciB7XHJcbiAgY29uc3QgZnJhbWVSZWFkZXIgPSBiYXRjaC5mcmFtZVJlYWRlcjtcclxuICBzd2l0Y2ggKGZyYW1lUmVhZGVyLmZyYW1lVHlwZShmcmFtZSkpIHtcclxuICAgIC8vIFRoZSBmb2xsb3dpbmcgZnJhbWUgdHlwZXMgaGF2ZSBhIHN1YnRyZWUgbGVuZ3RoLiBPdGhlciBmcmFtZXMgbWF5IHVzZSB0aGF0IG1lbW9yeSBzbG90XHJcbiAgICAvLyB0byBtZWFuIHNvbWV0aGluZyBlbHNlLCBzbyB3ZSBtdXN0IG5vdCByZWFkIGl0LiBXZSBzaG91bGQgY29uc2lkZXIgaGF2aW5nIG5vbWluYWwgc3VidHlwZXNcclxuICAgIC8vIG9mIFJlbmRlclRyZWVGcmFtZVBvaW50ZXIgdGhhdCBwcmV2ZW50IGFjY2VzcyB0byBub24tYXBwbGljYWJsZSBmaWVsZHMuXHJcbiAgICBjYXNlIEZyYW1lVHlwZS5jb21wb25lbnQ6XHJcbiAgICBjYXNlIEZyYW1lVHlwZS5lbGVtZW50OlxyXG4gICAgY2FzZSBGcmFtZVR5cGUucmVnaW9uOlxyXG4gICAgICByZXR1cm4gZnJhbWVSZWFkZXIuc3VidHJlZUxlbmd0aChmcmFtZSkgLSAxO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByYWlzZUV2ZW50KFxyXG4gIGV2ZW50OiBFdmVudCxcclxuICBicm93c2VyUmVuZGVyZXJJZDogbnVtYmVyLFxyXG4gIGV2ZW50SGFuZGxlcklkOiBudW1iZXIsXHJcbiAgZXZlbnRBcmdzOiBFdmVudEZvckRvdE5ldDxVSUV2ZW50QXJncz4sXHJcbiAgZXZlbnRGaWVsZEluZm86IEV2ZW50RmllbGRJbmZvIHwgbnVsbFxyXG4pOiB2b2lkIHtcclxuICBpZiAocHJldmVudERlZmF1bHRFdmVudHNbZXZlbnQudHlwZV0pIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBldmVudERlc2NyaXB0b3IgPSB7XHJcbiAgICBicm93c2VyUmVuZGVyZXJJZCxcclxuICAgIGV2ZW50SGFuZGxlcklkLFxyXG4gICAgZXZlbnRBcmdzVHlwZTogZXZlbnRBcmdzLnR5cGUsXHJcbiAgICBldmVudEZpZWxkSW5mbzogZXZlbnRGaWVsZEluZm8sXHJcbiAgfTtcclxuXHJcbiAgZGlzcGF0Y2hFdmVudChldmVudERlc2NyaXB0b3IsIGV2ZW50QXJncy5kYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICBsZXQgY2hpbGROb2RlOiBOb2RlIHwgbnVsbDtcclxuICB3aGlsZSAoY2hpbGROb2RlID0gZWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckJldHdlZW4oc3RhcnQ6IE5vZGUsIGVuZDogTm9kZSk6IHZvaWQge1xyXG4gIGNvbnN0IGxvZ2ljYWxQYXJlbnQgPSBnZXRMb2dpY2FsUGFyZW50KHN0YXJ0IGFzIHVua25vd24gYXMgTG9naWNhbEVsZW1lbnQpO1xyXG4gIGlmICghbG9naWNhbFBhcmVudCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgY2xlYXIgYmV0d2VlbiBub2Rlcy4gVGhlIHN0YXJ0IG5vZGUgZG9lcyBub3QgaGF2ZSBhIGxvZ2ljYWwgcGFyZW50LlwiKTtcclxuICB9XHJcbiAgY29uc3QgY2hpbGRyZW4gPSBnZXRMb2dpY2FsQ2hpbGRyZW5BcnJheShsb2dpY2FsUGFyZW50KTtcclxuICBjb25zdCByZW1vdmVTdGFydCA9IGNoaWxkcmVuLmluZGV4T2Yoc3RhcnQgYXMgdW5rbm93biBhcyBMb2dpY2FsRWxlbWVudCkgKyAxO1xyXG4gIGNvbnN0IGVuZEluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZihlbmQgYXMgdW5rbm93biBhcyBMb2dpY2FsRWxlbWVudCk7XHJcblxyXG4gIC8vIFdlIHJlbW92ZSB0aGUgZW5kIGNvbXBvbmVudCBjb21tZW50IGZyb20gdGhlIERPTSBhcyB3ZSBkb24ndCBuZWVkIGl0IGFmdGVyIHRoaXMgcG9pbnQuXHJcbiAgZm9yIChsZXQgaSA9IHJlbW92ZVN0YXJ0OyBpIDw9IGVuZEluZGV4OyBpKyspIHtcclxuICAgIHJlbW92ZUxvZ2ljYWxDaGlsZChsb2dpY2FsUGFyZW50LCByZW1vdmVTdGFydCk7XHJcbiAgfVxyXG5cclxuICAvLyBXZSBzYW5pdGl6ZSB0aGUgc3RhcnQgY29tbWVudCBieSByZW1vdmluZyBhbGwgdGhlIGluZm9ybWF0aW9uIGZyb20gaXQgbm93IHRoYXQgd2UgZG9uJ3QgbmVlZCBpdCBhbnltb3JlXHJcbiAgLy8gYXMgaXQgYWRkcyBub2lzZSB0byB0aGUgRE9NLlxyXG4gIHN0YXJ0LnRleHRDb250ZW50ID0gJyEnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdHJpcE9uUHJlZml4KGF0dHJpYnV0ZU5hbWU6IHN0cmluZykge1xyXG4gIGlmIChhdHRyaWJ1dGVOYW1lLnN0YXJ0c1dpdGgoJ29uJykpIHtcclxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lLnN1YnN0cmluZygyKTtcclxuICB9XHJcblxyXG4gIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIHNob3VsZCBiZSBhbiBldmVudCBuYW1lLCBidXQgZG9lc24ndCBzdGFydCB3aXRoICdvbicuIFZhbHVlOiAnJHthdHRyaWJ1dGVOYW1lfSdgKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwbHlDYXB0dXJlSWRUb0VsZW1lbnQoZWxlbWVudDogRWxlbWVudCwgcmVmZXJlbmNlQ2FwdHVyZUlkOiBzdHJpbmcpIHtcclxuICBlbGVtZW50LnNldEF0dHJpYnV0ZShnZXRDYXB0dXJlSWRBdHRyaWJ1dGVOYW1lKHJlZmVyZW5jZUNhcHR1cmVJZCksICcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RWxlbWVudEJ5Q2FwdHVyZUlkKHJlZmVyZW5jZUNhcHR1cmVJZDogc3RyaW5nKSB7XHJcbiAgY29uc3Qgc2VsZWN0b3IgPSBgWyR7Z2V0Q2FwdHVyZUlkQXR0cmlidXRlTmFtZShyZWZlcmVuY2VDYXB0dXJlSWQpfV1gO1xyXG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2FwdHVyZUlkQXR0cmlidXRlTmFtZShyZWZlcmVuY2VDYXB0dXJlSWQ6IHN0cmluZykge1xyXG4gIHJldHVybiBgX2JsXyR7cmVmZXJlbmNlQ2FwdHVyZUlkfWA7XHJcbn1cclxuXHJcbi8vIFN1cHBvcnQgcmVjZWl2aW5nIEVsZW1lbnRSZWYgaW5zdGFuY2VzIGFzIGFyZ3MgaW4gaW50ZXJvcCBjYWxsc1xyXG5jb25zdCBlbGVtZW50UmVmS2V5ID0gJ19faW50ZXJuYWxJZCc7IC8vIEtlZXAgaW4gc3luYyB3aXRoIEVsZW1lbnRSZWYuY3NcclxuRG90TmV0LmF0dGFjaFJldml2ZXIoKGtleSwgdmFsdWUpID0+IHtcclxuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShlbGVtZW50UmVmS2V5KSAmJiB0eXBlb2YgdmFsdWVbZWxlbWVudFJlZktleV0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gZ2V0RWxlbWVudEJ5Q2FwdHVyZUlkKHZhbHVlW2VsZW1lbnRSZWZLZXldKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IEV2ZW50Rm9yRG90TmV0LCBVSUV2ZW50QXJncyB9IGZyb20gJy4vRXZlbnRGb3JEb3ROZXQnO1xyXG5pbXBvcnQgeyBFdmVudEZpZWxkSW5mbyB9IGZyb20gJy4vRXZlbnRGaWVsZEluZm8nO1xyXG5cclxuY29uc3Qgbm9uQnViYmxpbmdFdmVudHMgPSB0b0xvb2t1cChbXHJcbiAgJ2Fib3J0JyxcclxuICAnYmx1cicsXHJcbiAgJ2NoYW5nZScsXHJcbiAgJ2Vycm9yJyxcclxuICAnZm9jdXMnLFxyXG4gICdsb2FkJyxcclxuICAnbG9hZGVuZCcsXHJcbiAgJ2xvYWRzdGFydCcsXHJcbiAgJ21vdXNlZW50ZXInLFxyXG4gICdtb3VzZWxlYXZlJyxcclxuICAncHJvZ3Jlc3MnLFxyXG4gICdyZXNldCcsXHJcbiAgJ3Njcm9sbCcsXHJcbiAgJ3N1Ym1pdCcsXHJcbiAgJ3VubG9hZCcsXHJcbiAgJ0RPTU5vZGVJbnNlcnRlZEludG9Eb2N1bWVudCcsXHJcbiAgJ0RPTU5vZGVSZW1vdmVkRnJvbURvY3VtZW50JyxcclxuXSk7XHJcblxyXG5jb25zdCBkaXNhYmxlYWJsZUV2ZW50TmFtZXMgPSB0b0xvb2t1cChbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCddKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT25FdmVudENhbGxiYWNrIHtcclxuICAoZXZlbnQ6IEV2ZW50LCBldmVudEhhbmRsZXJJZDogbnVtYmVyLCBldmVudEFyZ3M6IEV2ZW50Rm9yRG90TmV0PFVJRXZlbnRBcmdzPiwgZXZlbnRGaWVsZEluZm86IEV2ZW50RmllbGRJbmZvIHwgbnVsbCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpYmxlIGZvciBhZGRpbmcvcmVtb3ZpbmcgdGhlIGV2ZW50SW5mbyBvbiBhbiBleHBhbmRvIHByb3BlcnR5IG9uIERPTSBlbGVtZW50cywgYW5kXHJcbi8vIGNhbGxpbmcgYW4gRXZlbnRJbmZvU3RvcmUgdGhhdCBkZWFscyB3aXRoIHJlZ2lzdGVyaW5nL3VucmVnaXN0ZXJpbmcgdGhlIHVuZGVybHlpbmcgZGVsZWdhdGVkXHJcbi8vIGV2ZW50IGxpc3RlbmVycyBhcyByZXF1aXJlZCAoYW5kIGFsc28gbWFwcyBhY3R1YWwgZXZlbnRzIGJhY2sgdG8gdGhlIGdpdmVuIGNhbGxiYWNrKS5cclxuZXhwb3J0IGNsYXNzIEV2ZW50RGVsZWdhdG9yIHtcclxuICBwcml2YXRlIHN0YXRpYyBuZXh0RXZlbnREZWxlZ2F0b3JJZCA9IDA7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRzQ29sbGVjdGlvbktleTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGFmdGVyQ2xpY2tDYWxsYmFja3M6ICgoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQpW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBldmVudEluZm9TdG9yZTogRXZlbnRJbmZvU3RvcmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb25FdmVudDogT25FdmVudENhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBldmVudERlbGVnYXRvcklkID0gKytFdmVudERlbGVnYXRvci5uZXh0RXZlbnREZWxlZ2F0b3JJZDtcclxuICAgIHRoaXMuZXZlbnRzQ29sbGVjdGlvbktleSA9IGBfYmxhem9yRXZlbnRzXyR7ZXZlbnREZWxlZ2F0b3JJZH1gO1xyXG4gICAgdGhpcy5ldmVudEluZm9TdG9yZSA9IG5ldyBFdmVudEluZm9TdG9yZSh0aGlzLm9uR2xvYmFsRXZlbnQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0TGlzdGVuZXIoZWxlbWVudDogRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcklkOiBudW1iZXIsIHJlbmRlcmluZ0NvbXBvbmVudElkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGluZm9Gb3JFbGVtZW50ID0gdGhpcy5nZXRFdmVudEhhbmRsZXJJbmZvc0ZvckVsZW1lbnQoZWxlbWVudCwgdHJ1ZSkhO1xyXG4gICAgY29uc3QgZXhpc3RpbmdIYW5kbGVyID0gaW5mb0ZvckVsZW1lbnQuZ2V0SGFuZGxlcihldmVudE5hbWUpO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0hhbmRsZXIpIHtcclxuICAgICAgLy8gV2UgY2FuIGNoZWFwbHkgdXBkYXRlIHRoZSBpbmZvIG9uIHRoZSBleGlzdGluZyBvYmplY3QgYW5kIGRvbid0IG5lZWQgYW55IG90aGVyIGhvdXNla2VlcGluZ1xyXG4gICAgICAvLyBOb3RlIHRoYXQgdGhpcyBhbHNvIHRha2VzIGNhcmUgb2YgdXBkYXRpbmcgdGhlIGV2ZW50SGFuZGxlcklkIG9uIHRoZSBleGlzdGluZyBoYW5kbGVyIG9iamVjdFxyXG4gICAgICB0aGlzLmV2ZW50SW5mb1N0b3JlLnVwZGF0ZShleGlzdGluZ0hhbmRsZXIuZXZlbnRIYW5kbGVySWQsIGV2ZW50SGFuZGxlcklkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEdvIHRocm91Z2ggdGhlIHdob2xlIGZsb3cgd2hpY2ggbWlnaHQgaW52b2x2ZSByZWdpc3RlcmluZyBhIG5ldyBnbG9iYWwgaGFuZGxlclxyXG4gICAgICBjb25zdCBuZXdJbmZvID0geyBlbGVtZW50LCBldmVudE5hbWUsIGV2ZW50SGFuZGxlcklkLCByZW5kZXJpbmdDb21wb25lbnRJZCB9O1xyXG4gICAgICB0aGlzLmV2ZW50SW5mb1N0b3JlLmFkZChuZXdJbmZvKTtcclxuICAgICAgaW5mb0ZvckVsZW1lbnQuc2V0SGFuZGxlcihldmVudE5hbWUsIG5ld0luZm8pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUxpc3RlbmVyKGV2ZW50SGFuZGxlcklkOiBudW1iZXIpIHtcclxuICAgIC8vIFRoaXMgbWV0aG9kIGdldHMgY2FsbGVkIHdoZW5ldmVyIHRoZSAuTkVULXNpZGUgY29kZSByZXBvcnRzIHRoYXQgYSBjZXJ0YWluIGV2ZW50IGhhbmRsZXJcclxuICAgIC8vIGhhcyBiZWVuIGRpc3Bvc2VkLiBIb3dldmVyIHdlIHdpbGwgYWxyZWFkeSBoYXZlIGRpc3Bvc2VkIHRoZSBpbmZvIGFib3V0IHRoYXQgaGFuZGxlciBpZlxyXG4gICAgLy8gdGhlIGV2ZW50SGFuZGxlcklkIGZvciB0aGUgKGVsZW1lbnQsZXZlbnROYW1lKSBwYWlyIHdhcyByZXBsYWNlZCBkdXJpbmcgZGlmZiBhcHBsaWNhdGlvbi5cclxuICAgIGNvbnN0IGluZm8gPSB0aGlzLmV2ZW50SW5mb1N0b3JlLnJlbW92ZShldmVudEhhbmRsZXJJZCk7XHJcbiAgICBpZiAoaW5mbykge1xyXG4gICAgICAvLyBMb29rcyBsaWtlIHRoaXMgZXZlbnQgaGFuZGxlciB3YXNuJ3QgYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAvLyBSZW1vdmUgdGhlIGFzc29jaWF0ZWQgZGF0YSBmcm9tIHRoZSBET00gZWxlbWVudFxyXG4gICAgICBjb25zdCBlbGVtZW50ID0gaW5mby5lbGVtZW50O1xyXG4gICAgICBjb25zdCBlbGVtZW50RXZlbnRJbmZvcyA9IHRoaXMuZ2V0RXZlbnRIYW5kbGVySW5mb3NGb3JFbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcclxuICAgICAgaWYgKGVsZW1lbnRFdmVudEluZm9zKSB7XHJcbiAgICAgICAgZWxlbWVudEV2ZW50SW5mb3MucmVtb3ZlSGFuZGxlcihpbmZvLmV2ZW50TmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBub3RpZnlBZnRlckNsaWNrKGNhbGxiYWNrOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQpIHtcclxuICAgIC8vIFRoaXMgaXMgZXh0cmVtZWx5IHNwZWNpYWwtY2FzZS4gSXQncyBuZWVkZWQgc28gdGhhdCBuYXZpZ2F0aW9uIGxpbmsgY2xpY2sgaW50ZXJjZXB0aW9uXHJcbiAgICAvLyBjYW4gYmUgc3VyZSB0byBydW4gKmFmdGVyKiBvdXIgc3ludGhldGljIGJ1YmJsaW5nIHByb2Nlc3MuIElmIGEgbmVlZCBhcmlzZXMsIHdlIGNhblxyXG4gICAgLy8gZ2VuZXJhbGlzZSB0aGlzLCBidXQgcmlnaHQgbm93IGl0J3MgYSBwdXJlbHkgaW50ZXJuYWwgZGV0YWlsLlxyXG4gICAgdGhpcy5hZnRlckNsaWNrQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgdGhpcy5ldmVudEluZm9TdG9yZS5hZGRHbG9iYWxMaXN0ZW5lcignY2xpY2snKTsgLy8gRW5zdXJlIHdlIGFsd2F5cyBsaXN0ZW4gZm9yIHRoaXNcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTdG9wUHJvcGFnYXRpb24oZWxlbWVudDogRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBpbmZvRm9yRWxlbWVudCA9IHRoaXMuZ2V0RXZlbnRIYW5kbGVySW5mb3NGb3JFbGVtZW50KGVsZW1lbnQsIHRydWUpITtcclxuICAgIGluZm9Gb3JFbGVtZW50LnN0b3BQcm9wYWdhdGlvbihldmVudE5hbWUsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQcmV2ZW50RGVmYXVsdChlbGVtZW50OiBFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGluZm9Gb3JFbGVtZW50ID0gdGhpcy5nZXRFdmVudEhhbmRsZXJJbmZvc0ZvckVsZW1lbnQoZWxlbWVudCwgdHJ1ZSkhO1xyXG4gICAgaW5mb0ZvckVsZW1lbnQucHJldmVudERlZmF1bHQoZXZlbnROYW1lLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uR2xvYmFsRXZlbnQoZXZ0OiBFdmVudCkge1xyXG4gICAgaWYgKCEoZXZ0LnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTY2FuIHVwIHRoZSBlbGVtZW50IGhpZXJhcmNoeSwgbG9va2luZyBmb3IgYW55IG1hdGNoaW5nIHJlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnNcclxuICAgIGxldCBjYW5kaWRhdGVFbGVtZW50ID0gZXZ0LnRhcmdldCBhcyBFbGVtZW50IHwgbnVsbDtcclxuICAgIGxldCBldmVudEFyZ3M6IEV2ZW50Rm9yRG90TmV0PFVJRXZlbnRBcmdzPiB8IG51bGwgPSBudWxsOyAvLyBQb3B1bGF0ZSBsYXppbHlcclxuICAgIGNvbnN0IGV2ZW50SXNOb25CdWJibGluZyA9IG5vbkJ1YmJsaW5nRXZlbnRzLmhhc093blByb3BlcnR5KGV2dC50eXBlKTtcclxuICAgIGxldCBzdG9wUHJvcGFnYXRpb25XYXNSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuICAgIHdoaWxlIChjYW5kaWRhdGVFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGhhbmRsZXJJbmZvcyA9IHRoaXMuZ2V0RXZlbnRIYW5kbGVySW5mb3NGb3JFbGVtZW50KGNhbmRpZGF0ZUVsZW1lbnQsIGZhbHNlKTtcclxuICAgICAgaWYgKGhhbmRsZXJJbmZvcykge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXJJbmZvID0gaGFuZGxlckluZm9zLmdldEhhbmRsZXIoZXZ0LnR5cGUpO1xyXG4gICAgICAgIGlmIChoYW5kbGVySW5mbyAmJiAhZXZlbnRJc0Rpc2FibGVkT25FbGVtZW50KGNhbmRpZGF0ZUVsZW1lbnQsIGV2dC50eXBlKSkge1xyXG4gICAgICAgICAgLy8gV2UgYXJlIGdvaW5nIHRvIHJhaXNlIGFuIGV2ZW50IGZvciB0aGlzIGVsZW1lbnQsIHNvIHByZXBhcmUgaW5mbyBuZWVkZWQgYnkgdGhlIC5ORVQgY29kZVxyXG4gICAgICAgICAgaWYgKCFldmVudEFyZ3MpIHtcclxuICAgICAgICAgICAgZXZlbnRBcmdzID0gRXZlbnRGb3JEb3ROZXQuZnJvbURPTUV2ZW50KGV2dCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgZXZlbnRGaWVsZEluZm8gPSBFdmVudEZpZWxkSW5mby5mcm9tRXZlbnQoaGFuZGxlckluZm8ucmVuZGVyaW5nQ29tcG9uZW50SWQsIGV2dCk7XHJcbiAgICAgICAgICB0aGlzLm9uRXZlbnQoZXZ0LCBoYW5kbGVySW5mby5ldmVudEhhbmRsZXJJZCwgZXZlbnRBcmdzLCBldmVudEZpZWxkSW5mbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFuZGxlckluZm9zLnN0b3BQcm9wYWdhdGlvbihldnQudHlwZSkpIHtcclxuICAgICAgICAgIHN0b3BQcm9wYWdhdGlvbldhc1JlcXVlc3RlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFuZGxlckluZm9zLnByZXZlbnREZWZhdWx0KGV2dC50eXBlKSkge1xyXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjYW5kaWRhdGVFbGVtZW50ID0gKGV2ZW50SXNOb25CdWJibGluZyB8fCBzdG9wUHJvcGFnYXRpb25XYXNSZXF1ZXN0ZWQpID8gbnVsbCA6IGNhbmRpZGF0ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIG5hdmlnYXRpb24gaW50ZXJjZXB0aW9uXHJcbiAgICBpZiAoZXZ0LnR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgdGhpcy5hZnRlckNsaWNrQ2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soZXZ0IGFzIE1vdXNlRXZlbnQpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RXZlbnRIYW5kbGVySW5mb3NGb3JFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQsIGNyZWF0ZUlmTmVlZGVkOiBib29sZWFuKTogRXZlbnRIYW5kbGVySW5mb3NGb3JFbGVtZW50IHwgbnVsbCB7XHJcbiAgICBpZiAoZWxlbWVudC5oYXNPd25Qcm9wZXJ0eSh0aGlzLmV2ZW50c0NvbGxlY3Rpb25LZXkpKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50W3RoaXMuZXZlbnRzQ29sbGVjdGlvbktleV07XHJcbiAgICB9IGVsc2UgaWYgKGNyZWF0ZUlmTmVlZGVkKSB7XHJcbiAgICAgIHJldHVybiAoZWxlbWVudFt0aGlzLmV2ZW50c0NvbGxlY3Rpb25LZXldID0gbmV3IEV2ZW50SGFuZGxlckluZm9zRm9yRWxlbWVudCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2libGUgZm9yIGFkZGluZyBhbmQgcmVtb3ZpbmcgdGhlIGdsb2JhbCBsaXN0ZW5lciB3aGVuIHRoZSBudW1iZXIgb2YgbGlzdGVuZXJzXHJcbi8vIGZvciBhIGdpdmVuIGV2ZW50IG5hbWUgY2hhbmdlcyBiZXR3ZWVuIHplcm8gYW5kIG5vbnplcm9cclxuY2xhc3MgRXZlbnRJbmZvU3RvcmUge1xyXG4gIHByaXZhdGUgaW5mb3NCeUV2ZW50SGFuZGxlcklkOiB7IFtldmVudEhhbmRsZXJJZDogbnVtYmVyXTogRXZlbnRIYW5kbGVySW5mbyB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY291bnRCeUV2ZW50TmFtZTogeyBbZXZlbnROYW1lOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdsb2JhbExpc3RlbmVyOiBFdmVudExpc3RlbmVyKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKGluZm86IEV2ZW50SGFuZGxlckluZm8pIHtcclxuICAgIGlmICh0aGlzLmluZm9zQnlFdmVudEhhbmRsZXJJZFtpbmZvLmV2ZW50SGFuZGxlcklkXSkge1xyXG4gICAgICAvLyBTaG91bGQgbmV2ZXIgaGFwcGVuLCBidXQgd2Ugd2FudCB0byBrbm93IGlmIGl0IGRvZXNcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFdmVudCAke2luZm8uZXZlbnRIYW5kbGVySWR9IGlzIGFscmVhZHkgdHJhY2tlZGApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5mb3NCeUV2ZW50SGFuZGxlcklkW2luZm8uZXZlbnRIYW5kbGVySWRdID0gaW5mbztcclxuXHJcbiAgICB0aGlzLmFkZEdsb2JhbExpc3RlbmVyKGluZm8uZXZlbnROYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRHbG9iYWxMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuY291bnRCeUV2ZW50TmFtZS5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUpKSB7XHJcbiAgICAgIHRoaXMuY291bnRCeUV2ZW50TmFtZVtldmVudE5hbWVdKys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvdW50QnlFdmVudE5hbWVbZXZlbnROYW1lXSA9IDE7XHJcblxyXG4gICAgICAvLyBUbyBtYWtlIGRlbGVnYXRpb24gd29yayB3aXRoIG5vbi1idWJibGluZyBldmVudHMsIHJlZ2lzdGVyIGEgJ2NhcHR1cmUnIGxpc3RlbmVyLlxyXG4gICAgICAvLyBXZSBwcmVzZXJ2ZSB0aGUgbm9uLWJ1YmJsaW5nIGJlaGF2aW9yIGJ5IG9ubHkgZGlzcGF0Y2hpbmcgc3VjaCBldmVudHMgdG8gdGhlIHRhcmdldGVkIGVsZW1lbnQuXHJcbiAgICAgIGNvbnN0IHVzZUNhcHR1cmUgPSBub25CdWJibGluZ0V2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUpO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy5nbG9iYWxMaXN0ZW5lciwgdXNlQ2FwdHVyZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKG9sZEV2ZW50SGFuZGxlcklkOiBudW1iZXIsIG5ld0V2ZW50SGFuZGxlcklkOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmluZm9zQnlFdmVudEhhbmRsZXJJZC5oYXNPd25Qcm9wZXJ0eShuZXdFdmVudEhhbmRsZXJJZCkpIHtcclxuICAgICAgLy8gU2hvdWxkIG5ldmVyIGhhcHBlbiwgYnV0IHdlIHdhbnQgdG8ga25vdyBpZiBpdCBkb2VzXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXZlbnQgJHtuZXdFdmVudEhhbmRsZXJJZH0gaXMgYWxyZWFkeSB0cmFja2VkYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2luY2Ugd2UncmUganVzdCB1cGRhdGluZyB0aGUgZXZlbnQgaGFuZGxlciBJRCwgdGhlcmUncyBubyBuZWVkIHRvIHVwZGF0ZSB0aGUgZ2xvYmFsIGNvdW50c1xyXG4gICAgY29uc3QgaW5mbyA9IHRoaXMuaW5mb3NCeUV2ZW50SGFuZGxlcklkW29sZEV2ZW50SGFuZGxlcklkXTtcclxuICAgIGRlbGV0ZSB0aGlzLmluZm9zQnlFdmVudEhhbmRsZXJJZFtvbGRFdmVudEhhbmRsZXJJZF07XHJcbiAgICBpbmZvLmV2ZW50SGFuZGxlcklkID0gbmV3RXZlbnRIYW5kbGVySWQ7XHJcbiAgICB0aGlzLmluZm9zQnlFdmVudEhhbmRsZXJJZFtuZXdFdmVudEhhbmRsZXJJZF0gPSBpbmZvO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShldmVudEhhbmRsZXJJZDogbnVtYmVyKTogRXZlbnRIYW5kbGVySW5mbyB7XHJcbiAgICBjb25zdCBpbmZvID0gdGhpcy5pbmZvc0J5RXZlbnRIYW5kbGVySWRbZXZlbnRIYW5kbGVySWRdO1xyXG4gICAgaWYgKGluZm8pIHtcclxuICAgICAgZGVsZXRlIHRoaXMuaW5mb3NCeUV2ZW50SGFuZGxlcklkW2V2ZW50SGFuZGxlcklkXTtcclxuXHJcbiAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGluZm8uZXZlbnROYW1lO1xyXG4gICAgICBpZiAoLS10aGlzLmNvdW50QnlFdmVudE5hbWVbZXZlbnROYW1lXSA9PT0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvdW50QnlFdmVudE5hbWVbZXZlbnROYW1lXTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy5nbG9iYWxMaXN0ZW5lcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5mbztcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEV2ZW50SGFuZGxlckluZm9zRm9yRWxlbWVudCB7XHJcbiAgLy8gQWx0aG91Z2ggd2UgKmNvdWxkKiB0cmFjayBtdWx0aXBsZSBldmVudCBoYW5kbGVycyBwZXIgKGVsZW1lbnQsIGV2ZW50TmFtZSkgcGFpclxyXG4gIC8vIChzaW5jZSB0aGV5IGhhdmUgZGlzdGluY3QgZXZlbnRIYW5kbGVySWQgdmFsdWVzKSwgdGhlcmUncyBubyBwb2ludCBkb2luZyBzbyBiZWNhdXNlXHJcbiAgLy8gb3VyIHByb2dyYW1taW5nIG1vZGVsIGlzIHRoYXQgeW91IGRlY2xhcmUgZXZlbnQgaGFuZGxlcnMgYXMgYXR0cmlidXRlcy4gQW4gZWxlbWVudFxyXG4gIC8vIGNhbiBvbmx5IGhhdmUgb25lIGF0dHJpYnV0ZSB3aXRoIGEgZ2l2ZW4gbmFtZSwgaGVuY2Ugb25seSBvbmUgZXZlbnQgaGFuZGxlciB3aXRoXHJcbiAgLy8gdGhhdCBuYW1lIGF0IGFueSBvbmUgdGltZS5cclxuICAvLyBTbyB0byBrZWVwIHRoaW5ncyBzaW1wbGUsIG9ubHkgdHJhY2sgb25lIEV2ZW50SGFuZGxlckluZm8gcGVyIChlbGVtZW50LCBldmVudE5hbWUpXHJcbiAgcHJpdmF0ZSBoYW5kbGVyczogeyBbZXZlbnROYW1lOiBzdHJpbmddOiBFdmVudEhhbmRsZXJJbmZvIH0gPSB7fTtcclxuICBwcml2YXRlIHByZXZlbnREZWZhdWx0RmxhZ3M6IHsgW2V2ZW50TmFtZTogc3RyaW5nXTogYm9vbGVhbiB9IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzdG9wUHJvcGFnYXRpb25GbGFnczogeyBbZXZlbnROYW1lOiBzdHJpbmddOiBib29sZWFuIH0gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHVibGljIGdldEhhbmRsZXIoZXZlbnROYW1lOiBzdHJpbmcpOiBFdmVudEhhbmRsZXJJbmZvIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUpID8gdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRIYW5kbGVyKGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXJJbmZvKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV0gPSBoYW5kbGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUhhbmRsZXIoZXZlbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIGRlbGV0ZSB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJldmVudERlZmF1bHQoZXZlbnROYW1lOiBzdHJpbmcsIHNldFZhbHVlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHNldFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEZsYWdzID0gdGhpcy5wcmV2ZW50RGVmYXVsdEZsYWdzIHx8IHt9O1xyXG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0RmxhZ3NbZXZlbnROYW1lXSA9IHNldFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnByZXZlbnREZWZhdWx0RmxhZ3MgPyB0aGlzLnByZXZlbnREZWZhdWx0RmxhZ3NbZXZlbnROYW1lXSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3BQcm9wYWdhdGlvbihldmVudE5hbWU6IHN0cmluZywgc2V0VmFsdWU/OiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoc2V0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbkZsYWdzID0gdGhpcy5zdG9wUHJvcGFnYXRpb25GbGFncyB8fCB7fTtcclxuICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb25GbGFnc1tldmVudE5hbWVdID0gc2V0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc3RvcFByb3BhZ2F0aW9uRmxhZ3MgPyB0aGlzLnN0b3BQcm9wYWdhdGlvbkZsYWdzW2V2ZW50TmFtZV0gOiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBFdmVudEhhbmRsZXJJbmZvIHtcclxuICBlbGVtZW50OiBFbGVtZW50O1xyXG4gIGV2ZW50TmFtZTogc3RyaW5nO1xyXG4gIGV2ZW50SGFuZGxlcklkOiBudW1iZXI7XHJcblxyXG4gIC8vIFRoZSBjb21wb25lbnQgd2hvc2UgdHJlZSBpbmNsdWRlcyB0aGUgZXZlbnQgaGFuZGxlciBhdHRyaWJ1dGUgZnJhbWUsICpub3QqIG5lY2Vzc2FyaWx5IHRoZVxyXG4gIC8vIHNhbWUgY29tcG9uZW50IHRoYXQgd2lsbCBiZSByZS1yZW5kZXJlZCBhZnRlciB0aGUgZXZlbnQgaXMgaGFuZGxlZCAoc2luY2Ugd2UgcmUtcmVuZGVyIHRoZVxyXG4gIC8vIGNvbXBvbmVudCB0aGF0IHN1cHBsaWVkIHRoZSBkZWxlZ2F0ZSwgbm90IHRoZSBvbmUgdGhhdCByZW5kZXJlZCB0aGUgZXZlbnQgaGFuZGxlciBmcmFtZSlcclxuICByZW5kZXJpbmdDb21wb25lbnRJZDogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0xvb2t1cChpdGVtczogc3RyaW5nW10pOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSB7XHJcbiAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgaXRlbXMuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICByZXN1bHRbdmFsdWVdID0gdHJ1ZTtcclxuICB9KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBldmVudElzRGlzYWJsZWRPbkVsZW1lbnQoZWxlbWVudDogRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAvLyBXZSB3YW50IHRvIHJlcGxpY2F0ZSB0aGUgbm9ybWFsIERPTSBldmVudCBiZWhhdmlvciB0aGF0LCBmb3IgJ2ludGVyYWN0aXZlJyBlbGVtZW50c1xyXG4gIC8vIHdpdGggYSAnZGlzYWJsZWQnIGF0dHJpYnV0ZSwgY2VydGFpbiBtb3VzZSBldmVudHMgYXJlIHN1cHByZXNzZWRcclxuICByZXR1cm4gKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpXHJcbiAgICAmJiBkaXNhYmxlYWJsZUV2ZW50TmFtZXMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKVxyXG4gICAgJiYgZWxlbWVudC5kaXNhYmxlZDtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRXZlbnRGaWVsZEluZm8ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudElkOiBudW1iZXIsIHB1YmxpYyBmaWVsZFZhbHVlOiBzdHJpbmcgfCBib29sZWFuKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tRXZlbnQoY29tcG9uZW50SWQ6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogRXZlbnRGaWVsZEluZm8gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBlbGVtID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmIChlbGVtIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZERhdGEgPSBnZXRGb3JtRmllbGREYXRhKGVsZW0pO1xyXG4gICAgICAgICAgICBpZiAoZmllbGREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEV2ZW50RmllbGRJbmZvKGNvbXBvbmVudElkLCBmaWVsZERhdGEudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGlzIGV2ZW50IGlzbid0IGhhcHBlbmluZyBvbiBhIGZvcm0gZmllbGQgdGhhdCB3ZSBjYW4gcmV2ZXJzZS1tYXAgYmFjayB0byBzb21lIGluY29taW5nIGF0dHJpYnV0ZVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JtRmllbGREYXRhKGVsZW06IEVsZW1lbnQpIHtcclxuICAgIC8vIFRoZSBsb2dpYyBpbiBoZXJlIHNob3VsZCBiZSB0aGUgaW52ZXJzZSBvZiB0aGUgbG9naWMgaW4gQnJvd3NlclJlbmRlcmVyJ3MgdHJ5QXBwbHlTcGVjaWFsUHJvcGVydHkuXHJcbiAgICAvLyBUaGF0IGlzLCB3ZSdyZSBkb2luZyB0aGUgcmV2ZXJzZSBtYXBwaW5nLCBzdGFydGluZyBmcm9tIGFuIEhUTUwgcHJvcGVydHkgYW5kIHJlY29uc3RydWN0aW5nIHdoaWNoXHJcbiAgICAvLyBcInNwZWNpYWxcIiBhdHRyaWJ1dGUgd291bGQgaGF2ZSBiZWVuIG1hcHBlZCB0byB0aGF0IHByb3BlcnR5LlxyXG4gICAgaWYgKGVsZW0gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIChlbGVtLnR5cGUgJiYgZWxlbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdjaGVja2JveCcpXHJcbiAgICAgICAgICAgID8geyB2YWx1ZTogZWxlbS5jaGVja2VkIH1cclxuICAgICAgICAgICAgOiB7IHZhbHVlOiBlbGVtLnZhbHVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVsZW0gaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCB8fCBlbGVtIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBlbGVtLnZhbHVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEV2ZW50Rm9yRG90TmV0PFREYXRhIGV4dGVuZHMgVUlFdmVudEFyZ3M+IHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHR5cGU6IEV2ZW50QXJnc1R5cGUsIHB1YmxpYyByZWFkb25seSBkYXRhOiBURGF0YSkge1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tRE9NRXZlbnQoZXZlbnQ6IEV2ZW50KTogRXZlbnRGb3JEb3ROZXQ8VUlFdmVudEFyZ3M+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgRWxlbWVudDtcclxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG5cclxuICAgICAgY2FzZSAnaW5wdXQnOlxyXG4gICAgICBjYXNlICdjaGFuZ2UnOiB7XHJcblxyXG4gICAgICAgIGlmIChpc1RpbWVCYXNlZElucHV0KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVkVmFsdWUgPSBub3JtYWxpemVUaW1lQmFzZWRWYWx1ZShlbGVtZW50KTtcclxuICAgICAgICAgIHJldHVybiBuZXcgRXZlbnRGb3JEb3ROZXQ8VUlDaGFuZ2VFdmVudEFyZ3M+KCdjaGFuZ2UnLCB7IHR5cGU6IGV2ZW50LnR5cGUsIHZhbHVlOiBub3JtYWxpemVkVmFsdWUgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXRJc0NoZWNrYm94ID0gaXNDaGVja2JveChlbGVtZW50KTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRhcmdldElzQ2hlY2tib3ggPyAhIWVsZW1lbnRbJ2NoZWNrZWQnXSA6IGVsZW1lbnRbJ3ZhbHVlJ107XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEZvckRvdE5ldDxVSUNoYW5nZUV2ZW50QXJncz4oJ2NoYW5nZScsIHsgdHlwZTogZXZlbnQudHlwZSwgdmFsdWU6IG5ld1ZhbHVlIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjYXNlICdjb3B5JzpcclxuICAgICAgY2FzZSAnY3V0JzpcclxuICAgICAgY2FzZSAncGFzdGUnOlxyXG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRGb3JEb3ROZXQ8VUlDbGlwYm9hcmRFdmVudEFyZ3M+KCdjbGlwYm9hcmQnLCB7IHR5cGU6IGV2ZW50LnR5cGUgfSk7XHJcblxyXG4gICAgICBjYXNlICdkcmFnJzpcclxuICAgICAgY2FzZSAnZHJhZ2VuZCc6XHJcbiAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XHJcbiAgICAgIGNhc2UgJ2RyYWdsZWF2ZSc6XHJcbiAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcclxuICAgICAgY2FzZSAnZHJhZ3N0YXJ0JzpcclxuICAgICAgY2FzZSAnZHJvcCc6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEZvckRvdE5ldDxVSURyYWdFdmVudEFyZ3M+KCdkcmFnJywgcGFyc2VEcmFnRXZlbnQoZXZlbnQpKTtcclxuXHJcbiAgICAgIGNhc2UgJ2ZvY3VzJzpcclxuICAgICAgY2FzZSAnYmx1cic6XHJcbiAgICAgIGNhc2UgJ2ZvY3VzaW4nOlxyXG4gICAgICBjYXNlICdmb2N1c291dCc6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEZvckRvdE5ldDxVSUZvY3VzRXZlbnRBcmdzPignZm9jdXMnLCB7IHR5cGU6IGV2ZW50LnR5cGUgfSk7XHJcblxyXG4gICAgICBjYXNlICdrZXlkb3duJzpcclxuICAgICAgY2FzZSAna2V5dXAnOlxyXG4gICAgICBjYXNlICdrZXlwcmVzcyc6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEZvckRvdE5ldDxVSUtleWJvYXJkRXZlbnRBcmdzPigna2V5Ym9hcmQnLCBwYXJzZUtleWJvYXJkRXZlbnQoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkpO1xyXG5cclxuICAgICAgY2FzZSAnY29udGV4dG1lbnUnOlxyXG4gICAgICBjYXNlICdjbGljayc6XHJcbiAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XHJcbiAgICAgIGNhc2UgJ21vdXNlb3V0JzpcclxuICAgICAgY2FzZSAnbW91c2Vtb3ZlJzpcclxuICAgICAgY2FzZSAnbW91c2Vkb3duJzpcclxuICAgICAgY2FzZSAnbW91c2V1cCc6XHJcbiAgICAgIGNhc2UgJ2RibGNsaWNrJzpcclxuICAgICAgICByZXR1cm4gbmV3IEV2ZW50Rm9yRG90TmV0PFVJTW91c2VFdmVudEFyZ3M+KCdtb3VzZScsIHBhcnNlTW91c2VFdmVudChldmVudCBhcyBNb3VzZUV2ZW50KSk7XHJcblxyXG4gICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEZvckRvdE5ldDxVSUVycm9yRXZlbnRBcmdzPignZXJyb3InLCBwYXJzZUVycm9yRXZlbnQoZXZlbnQgYXMgRXJyb3JFdmVudCkpO1xyXG5cclxuICAgICAgY2FzZSAnbG9hZHN0YXJ0JzpcclxuICAgICAgY2FzZSAndGltZW91dCc6XHJcbiAgICAgIGNhc2UgJ2Fib3J0JzpcclxuICAgICAgY2FzZSAnbG9hZCc6XHJcbiAgICAgIGNhc2UgJ2xvYWRlbmQnOlxyXG4gICAgICBjYXNlICdwcm9ncmVzcyc6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEZvckRvdE5ldDxVSVByb2dyZXNzRXZlbnRBcmdzPigncHJvZ3Jlc3MnLCBwYXJzZVByb2dyZXNzRXZlbnQoZXZlbnQgYXMgUHJvZ3Jlc3NFdmVudCkpO1xyXG5cclxuICAgICAgY2FzZSAndG91Y2hjYW5jZWwnOlxyXG4gICAgICBjYXNlICd0b3VjaGVuZCc6XHJcbiAgICAgIGNhc2UgJ3RvdWNobW92ZSc6XHJcbiAgICAgIGNhc2UgJ3RvdWNoZW50ZXInOlxyXG4gICAgICBjYXNlICd0b3VjaGxlYXZlJzpcclxuICAgICAgY2FzZSAndG91Y2hzdGFydCc6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEZvckRvdE5ldDxVSVRvdWNoRXZlbnRBcmdzPigndG91Y2gnLCBwYXJzZVRvdWNoRXZlbnQoZXZlbnQgYXMgVG91Y2hFdmVudCkpO1xyXG5cclxuICAgICAgY2FzZSAnZ290cG9pbnRlcmNhcHR1cmUnOlxyXG4gICAgICBjYXNlICdsb3N0cG9pbnRlcmNhcHR1cmUnOlxyXG4gICAgICBjYXNlICdwb2ludGVyY2FuY2VsJzpcclxuICAgICAgY2FzZSAncG9pbnRlcmRvd24nOlxyXG4gICAgICBjYXNlICdwb2ludGVyZW50ZXInOlxyXG4gICAgICBjYXNlICdwb2ludGVybGVhdmUnOlxyXG4gICAgICBjYXNlICdwb2ludGVybW92ZSc6XHJcbiAgICAgIGNhc2UgJ3BvaW50ZXJvdXQnOlxyXG4gICAgICBjYXNlICdwb2ludGVyb3Zlcic6XHJcbiAgICAgIGNhc2UgJ3BvaW50ZXJ1cCc6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEZvckRvdE5ldDxVSVBvaW50ZXJFdmVudEFyZ3M+KCdwb2ludGVyJywgcGFyc2VQb2ludGVyRXZlbnQoZXZlbnQgYXMgUG9pbnRlckV2ZW50KSk7XHJcblxyXG4gICAgICBjYXNlICd3aGVlbCc6XHJcbiAgICAgIGNhc2UgJ21vdXNld2hlZWwnOlxyXG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRGb3JEb3ROZXQ8VUlXaGVlbEV2ZW50QXJncz4oJ3doZWVsJywgcGFyc2VXaGVlbEV2ZW50KGV2ZW50IGFzIFdoZWVsRXZlbnQpKTtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEZvckRvdE5ldDxVSUV2ZW50QXJncz4oJ3Vua25vd24nLCB7IHR5cGU6IGV2ZW50LnR5cGUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZURyYWdFdmVudChldmVudDogYW55KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnBhcnNlTW91c2VFdmVudChldmVudCksXHJcbiAgICBkYXRhVHJhbnNmZXI6IGV2ZW50LmRhdGFUcmFuc2ZlcixcclxuXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VXaGVlbEV2ZW50KGV2ZW50OiBXaGVlbEV2ZW50KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnBhcnNlTW91c2VFdmVudChldmVudCksXHJcbiAgICBkZWx0YVg6IGV2ZW50LmRlbHRhWCxcclxuICAgIGRlbHRhWTogZXZlbnQuZGVsdGFZLFxyXG4gICAgZGVsdGFaOiBldmVudC5kZWx0YVosXHJcbiAgICBkZWx0YU1vZGU6IGV2ZW50LmRlbHRhTW9kZSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUVycm9yRXZlbnQoZXZlbnQ6IEVycm9yRXZlbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogZXZlbnQudHlwZSxcclxuICAgIG1lc3NhZ2U6IGV2ZW50Lm1lc3NhZ2UsXHJcbiAgICBmaWxlbmFtZTogZXZlbnQuZmlsZW5hbWUsXHJcbiAgICBsaW5lbm86IGV2ZW50LmxpbmVubyxcclxuICAgIGNvbG5vOiBldmVudC5jb2xubyxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVByb2dyZXNzRXZlbnQoZXZlbnQ6IFByb2dyZXNzRXZlbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogZXZlbnQudHlwZSxcclxuICAgIGxlbmd0aENvbXB1dGFibGU6IGV2ZW50Lmxlbmd0aENvbXB1dGFibGUsXHJcbiAgICBsb2FkZWQ6IGV2ZW50LmxvYWRlZCxcclxuICAgIHRvdGFsOiBldmVudC50b3RhbCxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVRvdWNoRXZlbnQoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcclxuXHJcbiAgZnVuY3Rpb24gcGFyc2VUb3VjaCh0b3VjaExpc3Q6IFRvdWNoTGlzdCkge1xyXG4gICAgY29uc3QgdG91Y2hlczogVUlUb3VjaFBvaW50W10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdWNoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0b3VjaCA9IHRvdWNoTGlzdFtpXTtcclxuICAgICAgdG91Y2hlcy5wdXNoKHtcclxuICAgICAgICBpZGVudGlmaWVyOiB0b3VjaC5pZGVudGlmaWVyLFxyXG4gICAgICAgIGNsaWVudFg6IHRvdWNoLmNsaWVudFgsXHJcbiAgICAgICAgY2xpZW50WTogdG91Y2guY2xpZW50WSxcclxuICAgICAgICBzY3JlZW5YOiB0b3VjaC5zY3JlZW5YLFxyXG4gICAgICAgIHNjcmVlblk6IHRvdWNoLnNjcmVlblksXHJcbiAgICAgICAgcGFnZVg6IHRvdWNoLnBhZ2VYLFxyXG4gICAgICAgIHBhZ2VZOiB0b3VjaC5wYWdlWSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG91Y2hlcztcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBldmVudC50eXBlLFxyXG4gICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXHJcbiAgICB0b3VjaGVzOiBwYXJzZVRvdWNoKGV2ZW50LnRvdWNoZXMpLFxyXG4gICAgdGFyZ2V0VG91Y2hlczogcGFyc2VUb3VjaChldmVudC50YXJnZXRUb3VjaGVzKSxcclxuICAgIGNoYW5nZWRUb3VjaGVzOiBwYXJzZVRvdWNoKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSxcclxuICAgIGN0cmxLZXk6IGV2ZW50LmN0cmxLZXksXHJcbiAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXksXHJcbiAgICBhbHRLZXk6IGV2ZW50LmFsdEtleSxcclxuICAgIG1ldGFLZXk6IGV2ZW50Lm1ldGFLZXksXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VLZXlib2FyZEV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IGV2ZW50LnR5cGUsXHJcbiAgICBrZXk6IGV2ZW50LmtleSxcclxuICAgIGNvZGU6IGV2ZW50LmNvZGUsXHJcbiAgICBsb2NhdGlvbjogZXZlbnQubG9jYXRpb24sXHJcbiAgICByZXBlYXQ6IGV2ZW50LnJlcGVhdCxcclxuICAgIGN0cmxLZXk6IGV2ZW50LmN0cmxLZXksXHJcbiAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXksXHJcbiAgICBhbHRLZXk6IGV2ZW50LmFsdEtleSxcclxuICAgIG1ldGFLZXk6IGV2ZW50Lm1ldGFLZXksXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VQb2ludGVyRXZlbnQoZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5wYXJzZU1vdXNlRXZlbnQoZXZlbnQpLFxyXG4gICAgcG9pbnRlcklkOiBldmVudC5wb2ludGVySWQsXHJcbiAgICB3aWR0aDogZXZlbnQud2lkdGgsXHJcbiAgICBoZWlnaHQ6IGV2ZW50LmhlaWdodCxcclxuICAgIHByZXNzdXJlOiBldmVudC5wcmVzc3VyZSxcclxuICAgIHRpbHRYOiBldmVudC50aWx0WCxcclxuICAgIHRpbHRZOiBldmVudC50aWx0WSxcclxuICAgIHBvaW50ZXJUeXBlOiBldmVudC5wb2ludGVyVHlwZSxcclxuICAgIGlzUHJpbWFyeTogZXZlbnQuaXNQcmltYXJ5LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlTW91c2VFdmVudChldmVudDogTW91c2VFdmVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBldmVudC50eXBlLFxyXG4gICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXHJcbiAgICBzY3JlZW5YOiBldmVudC5zY3JlZW5YLFxyXG4gICAgc2NyZWVuWTogZXZlbnQuc2NyZWVuWSxcclxuICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxyXG4gICAgYnV0dG9uOiBldmVudC5idXR0b24sXHJcbiAgICBidXR0b25zOiBldmVudC5idXR0b25zLFxyXG4gICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcclxuICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleSxcclxuICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxyXG4gICAgbWV0YUtleTogZXZlbnQubWV0YUtleSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NoZWNrYm94KGVsZW1lbnQ6IEVsZW1lbnQgfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuICEhZWxlbWVudCAmJiBlbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94JztcclxufVxyXG5cclxuY29uc3QgdGltZUJhc2VkSW5wdXRzID0gW1xyXG4gICdkYXRlJyxcclxuICAnZGF0ZXRpbWUtbG9jYWwnLFxyXG4gICdtb250aCcsXHJcbiAgJ3RpbWUnLFxyXG4gICd3ZWVrJyxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGlzVGltZUJhc2VkSW5wdXQoZWxlbWVudDogRWxlbWVudCk6IGVsZW1lbnQgaXMgSFRNTElucHV0RWxlbWVudCB7XHJcbiAgcmV0dXJuIHRpbWVCYXNlZElucHV0cy5pbmRleE9mKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJykhKSAhPT0gLTE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVRpbWVCYXNlZFZhbHVlKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gIGNvbnN0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcclxuICBjb25zdCB0eXBlID0gZWxlbWVudC50eXBlO1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnZGF0ZSc6XHJcbiAgICBjYXNlICdkYXRldGltZS1sb2NhbCc6XHJcbiAgICBjYXNlICdtb250aCc6XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIGNhc2UgJ3RpbWUnOlxyXG4gICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSA1ID8gdmFsdWUgKyAnOjAwJyA6IHZhbHVlOyAvLyBDb252ZXJ0IGhoOm1tIHRvIGhoOm1tOjAwXHJcbiAgICBjYXNlICd3ZWVrJzpcclxuICAgICAgLy8gRm9yIG5vdyB3ZSBhcmUgbm90IGdvaW5nIHRvIG5vcm1hbGl6ZSBpbnB1dCB0eXBlIHdlZWsgYXMgaXQgaXMgbm90IHRyaXZpYWxcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGVsZW1lbnQgdHlwZSAnJHt0eXBlfScuYCk7XHJcbn1cclxuXHJcbi8vIFRoZSBmb2xsb3dpbmcgaW50ZXJmYWNlcyBtdXN0IGJlIGtlcHQgaW4gc3luYyB3aXRoIHRoZSBVSUV2ZW50QXJncyBDIyBjbGFzc2VzXHJcblxyXG5leHBvcnQgdHlwZSBFdmVudEFyZ3NUeXBlID0gJ2NoYW5nZScgfCAnY2xpcGJvYXJkJyB8ICdkcmFnJyB8ICdlcnJvcicgfCAnZm9jdXMnIHwgJ2tleWJvYXJkJyB8ICdtb3VzZScgfCAncG9pbnRlcicgfCAncHJvZ3Jlc3MnIHwgJ3RvdWNoJyB8ICd1bmtub3duJyB8ICd3aGVlbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVJRXZlbnRBcmdzIHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBVSUNoYW5nZUV2ZW50QXJncyBleHRlbmRzIFVJRXZlbnRBcmdzIHtcclxuICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVJQ2xpcGJvYXJkRXZlbnRBcmdzIGV4dGVuZHMgVUlFdmVudEFyZ3Mge1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVUlEcmFnRXZlbnRBcmdzIGV4dGVuZHMgVUlFdmVudEFyZ3Mge1xyXG4gIGRldGFpbDogbnVtYmVyO1xyXG4gIGRhdGFUcmFuc2ZlcjogVUlEYXRhVHJhbnNmZXI7XHJcbiAgc2NyZWVuWDogbnVtYmVyO1xyXG4gIHNjcmVlblk6IG51bWJlcjtcclxuICBjbGllbnRYOiBudW1iZXI7XHJcbiAgY2xpZW50WTogbnVtYmVyO1xyXG4gIGJ1dHRvbjogbnVtYmVyO1xyXG4gIGJ1dHRvbnM6IG51bWJlcjtcclxuICBjdHJsS2V5OiBib29sZWFuO1xyXG4gIHNoaWZ0S2V5OiBib29sZWFuO1xyXG4gIGFsdEtleTogYm9vbGVhbjtcclxuICBtZXRhS2V5OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVUlEYXRhVHJhbnNmZXIge1xyXG4gIGRyb3BFZmZlY3Q6IHN0cmluZztcclxuICBlZmZlY3RBbGxvd2VkOiBzdHJpbmc7XHJcbiAgZmlsZXM6IHN0cmluZ1tdO1xyXG4gIGl0ZW1zOiBVSURhdGFUcmFuc2Zlckl0ZW1bXTtcclxuICB0eXBlczogc3RyaW5nW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBVSURhdGFUcmFuc2Zlckl0ZW0ge1xyXG4gIGtpbmQ6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBVSUVycm9yRXZlbnRBcmdzIGV4dGVuZHMgVUlFdmVudEFyZ3Mge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBmaWxlbmFtZTogc3RyaW5nO1xyXG4gIGxpbmVubzogbnVtYmVyO1xyXG4gIGNvbG5vOiBudW1iZXI7XHJcblxyXG4gIC8vIG9taXR0aW5nICdlcnJvcicgaGVyZSBzaW5jZSB3ZSdkIGhhdmUgdG8gc2VyaWFsaXplIGl0LCBhbmQgaXQncyBub3QgY2xlYXIgd2Ugd2lsbCB3YW50IHRvXHJcbiAgLy8gZG8gdGhhdC4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Vycm9yRXZlbnRcclxufVxyXG5cclxuaW50ZXJmYWNlIFVJRm9jdXNFdmVudEFyZ3MgZXh0ZW5kcyBVSUV2ZW50QXJncyB7XHJcbn1cclxuXHJcbmludGVyZmFjZSBVSUtleWJvYXJkRXZlbnRBcmdzIGV4dGVuZHMgVUlFdmVudEFyZ3Mge1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIGNvZGU6IHN0cmluZztcclxuICBsb2NhdGlvbjogbnVtYmVyO1xyXG4gIHJlcGVhdDogYm9vbGVhbjtcclxuICBjdHJsS2V5OiBib29sZWFuO1xyXG4gIHNoaWZ0S2V5OiBib29sZWFuO1xyXG4gIGFsdEtleTogYm9vbGVhbjtcclxuICBtZXRhS2V5OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVUlNb3VzZUV2ZW50QXJncyBleHRlbmRzIFVJRXZlbnRBcmdzIHtcclxuICBkZXRhaWw6IG51bWJlcjtcclxuICBzY3JlZW5YOiBudW1iZXI7XHJcbiAgc2NyZWVuWTogbnVtYmVyO1xyXG4gIGNsaWVudFg6IG51bWJlcjtcclxuICBjbGllbnRZOiBudW1iZXI7XHJcbiAgYnV0dG9uOiBudW1iZXI7XHJcbiAgYnV0dG9uczogbnVtYmVyO1xyXG4gIGN0cmxLZXk6IGJvb2xlYW47XHJcbiAgc2hpZnRLZXk6IGJvb2xlYW47XHJcbiAgYWx0S2V5OiBib29sZWFuO1xyXG4gIG1ldGFLZXk6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBVSVBvaW50ZXJFdmVudEFyZ3MgZXh0ZW5kcyBVSU1vdXNlRXZlbnRBcmdzIHtcclxuICBwb2ludGVySWQ6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIHByZXNzdXJlOiBudW1iZXI7XHJcbiAgdGlsdFg6IG51bWJlcjtcclxuICB0aWx0WTogbnVtYmVyO1xyXG4gIHBvaW50ZXJUeXBlOiBzdHJpbmc7XHJcbiAgaXNQcmltYXJ5OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVUlQcm9ncmVzc0V2ZW50QXJncyBleHRlbmRzIFVJRXZlbnRBcmdzIHtcclxuICBsZW5ndGhDb21wdXRhYmxlOiBib29sZWFuO1xyXG4gIGxvYWRlZDogbnVtYmVyO1xyXG4gIHRvdGFsOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBVSVRvdWNoRXZlbnRBcmdzIGV4dGVuZHMgVUlFdmVudEFyZ3Mge1xyXG4gIGRldGFpbDogbnVtYmVyO1xyXG4gIHRvdWNoZXM6IFVJVG91Y2hQb2ludFtdO1xyXG4gIHRhcmdldFRvdWNoZXM6IFVJVG91Y2hQb2ludFtdO1xyXG4gIGNoYW5nZWRUb3VjaGVzOiBVSVRvdWNoUG9pbnRbXTtcclxuICBjdHJsS2V5OiBib29sZWFuO1xyXG4gIHNoaWZ0S2V5OiBib29sZWFuO1xyXG4gIGFsdEtleTogYm9vbGVhbjtcclxuICBtZXRhS2V5OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVUlUb3VjaFBvaW50IHtcclxuICBpZGVudGlmaWVyOiBudW1iZXI7XHJcbiAgc2NyZWVuWDogbnVtYmVyO1xyXG4gIHNjcmVlblk6IG51bWJlcjtcclxuICBjbGllbnRYOiBudW1iZXI7XHJcbiAgY2xpZW50WTogbnVtYmVyO1xyXG4gIHBhZ2VYOiBudW1iZXI7XHJcbiAgcGFnZVk6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVJV2hlZWxFdmVudEFyZ3MgZXh0ZW5kcyBVSU1vdXNlRXZlbnRBcmdzIHtcclxuICBkZWx0YVg6IG51bWJlcjtcclxuICBkZWx0YVk6IG51bWJlcjtcclxuICBkZWx0YVo6IG51bWJlcjtcclxuICBkZWx0YU1vZGU6IG51bWJlcjtcclxufVxyXG4iLCIvKlxyXG4gIEEgTG9naWNhbEVsZW1lbnQgcGxheXMgdGhlIHNhbWUgcm9sZSBhcyBhbiBFbGVtZW50IGluc3RhbmNlIGZyb20gdGhlIHBvaW50IG9mIHZpZXcgb2YgdGhlXHJcbiAgQVBJIGNvbnN1bWVyLiBJbnNlcnRpbmcgYW5kIHJlbW92aW5nIGxvZ2ljYWwgZWxlbWVudHMgdXBkYXRlcyB0aGUgYnJvd3NlciBET00ganVzdCB0aGUgc2FtZS5cclxuXHJcbiAgVGhlIGRpZmZlcmVuY2UgaXMgdGhhdCwgdW5saWtlIHJlZ3VsYXIgRE9NIG11dGF0aW9uIEFQSXMsIHRoZSBMb2dpY2FsRWxlbWVudCBBUElzIGRvbid0IHVzZVxyXG4gIHRoZSB1bmRlcmx5aW5nIERPTSBzdHJ1Y3R1cmUgYXMgdGhlIGRhdGEgc3RvcmFnZSBmb3IgdGhlIGVsZW1lbnQgaGllcmFyY2h5LiBJbnN0ZWFkLCB0aGVcclxuICBMb2dpY2FsRWxlbWVudCBBUElzIHRha2UgY2FyZSBvZiB0cmFja2luZyBoaWVyYXJjaGljYWwgcmVsYXRpb25zaGlwcyBzZXBhcmF0ZWx5LiBUaGUgcG9pbnRcclxuICBvZiB0aGlzIGlzIHRvIHBlcm1pdCBhIGxvZ2ljYWwgdHJlZSBzdHJ1Y3R1cmUgaW4gd2hpY2ggcGFyZW50L2NoaWxkIHJlbGF0aW9uc2hpcHMgZG9uJ3RcclxuICBoYXZlIHRvIGJlIG1hdGVyaWFsaXplZCBpbiB0ZXJtcyBvZiBET00gZWxlbWVudCBwYXJlbnQvY2hpbGQgcmVsYXRpb25zaGlwcy4gQW5kIHRoZSByZWFzb25cclxuICB3aHkgd2Ugd2FudCB0aGF0IGlzIHNvIHRoYXQgaGllcmFyY2hpZXMgb2YgQmxhem9yIGNvbXBvbmVudHMgY2FuIGJlIHRyYWNrZWQgZXZlbiB3aGVuIHRob3NlXHJcbiAgY29tcG9uZW50cycgcmVuZGVyIG91dHB1dCBuZWVkIG5vdCBiZSBhIHNpbmdsZSBsaXRlcmFsIERPTSBlbGVtZW50LlxyXG5cclxuICBDb25zdW1lcnMgb2YgdGhlIEFQSSBkb24ndCBuZWVkIHRvIGtub3cgYWJvdXQgdGhlIGltcGxlbWVudGF0aW9uLCBidXQgaG93IGl0J3MgZG9uZSBpczpcclxuICAtIEVhY2ggTG9naWNhbEVsZW1lbnQgaXMgbWF0ZXJpYWxpemVkIGluIHRoZSBET00gYXMgZWl0aGVyOlxyXG4gICAgLSBBIE5vZGUgaW5zdGFuY2UsIGZvciBhY3R1YWwgTm9kZSBpbnN0YW5jZXMgaW5zZXJ0ZWQgdXNpbmcgJ2luc2VydExvZ2ljYWxDaGlsZCcgb3JcclxuICAgICAgZm9yIEVsZW1lbnQgaW5zdGFuY2VzIHByb21vdGVkIHRvIExvZ2ljYWxFbGVtZW50IHZpYSAndG9Mb2dpY2FsRWxlbWVudCdcclxuICAgIC0gQSBDb21tZW50IGluc3RhbmNlLCBmb3IgJ2xvZ2ljYWwgY29udGFpbmVyJyBpbnN0YW5jZXMgaW5zZXJ0ZWQgdXNpbmcgJ2NyZWF0ZUFuZEluc2VydExvZ2ljYWxDb250YWluZXInXHJcbiAgLSBUaGVuLCBvbiB0aGF0IGluc3RhbmNlIChpLmUuLCB0aGUgTm9kZSBvciBDb21tZW50KSwgd2Ugc3RvcmUgYW4gYXJyYXkgb2YgJ2xvZ2ljYWwgY2hpbGRyZW4nXHJcbiAgICBpbnN0YW5jZXMsIGUuZy4sXHJcbiAgICAgIFtmaXJzdENoaWxkLCBzZWNvbmRDaGlsZCwgdGhpcmRDaGlsZCwgLi4uXVxyXG4gICAgLi4uIHBsdXMgd2Ugc3RvcmUgYSByZWZlcmVuY2UgdG8gdGhlICdsb2dpY2FsIHBhcmVudCcgKGlmIGFueSlcclxuICAtIFRoZSAnbG9naWNhbCBjaGlsZHJlbicgYXJyYXkgbWVhbnMgd2UgY2FuIGxvb2sgdXAgaW4gTygxKTpcclxuICAgIC0gVGhlIG51bWJlciBvZiBsb2dpY2FsIGNoaWxkcmVuIChub3QgY3VycmVudGx5IGltcGxlbWVudGVkIGJlY2F1c2Ugbm90IHJlcXVpcmVkLCBidXQgdHJpdmlhbClcclxuICAgIC0gVGhlIGxvZ2ljYWwgY2hpbGQgYXQgYW55IGdpdmVuIGluZGV4XHJcbiAgLSBXaGVuZXZlciBhIGxvZ2ljYWwgY2hpbGQgaXMgYWRkZWQgb3IgcmVtb3ZlZCwgd2UgdXBkYXRlIHRoZSBwYXJlbnQncyBhcnJheSBvZiBsb2dpY2FsIGNoaWxkcmVuXHJcbiovXHJcblxyXG5jb25zdCBsb2dpY2FsQ2hpbGRyZW5Qcm9wbmFtZSA9IGNyZWF0ZVN5bWJvbE9yRmFsbGJhY2soJ19ibGF6b3JMb2dpY2FsQ2hpbGRyZW4nKTtcclxuY29uc3QgbG9naWNhbFBhcmVudFByb3BuYW1lID0gY3JlYXRlU3ltYm9sT3JGYWxsYmFjaygnX2JsYXpvckxvZ2ljYWxQYXJlbnQnKTtcclxuY29uc3QgbG9naWNhbEVuZFNpYmxpbmdQcm9wbmFtZSA9IGNyZWF0ZVN5bWJvbE9yRmFsbGJhY2soJ19ibGF6b3JMb2dpY2FsRW5kJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Mb2dpY2FsUm9vdENvbW1lbnRFbGVtZW50KHN0YXJ0OiBDb21tZW50LCBlbmQ6IENvbW1lbnQpOiBMb2dpY2FsRWxlbWVudCB7XHJcbiAgLy8gTm93IHRoYXQgd2Ugc3VwcG9ydCBzdGFydC9lbmQgY29tbWVudHMgYXMgY29tcG9uZW50IGRlbGltaXRlcnMgd2UgYXJlIGdvaW5nIHRvIGJlIHNldHRpbmcgdXBcclxuICAvLyBhZGRpbmcgdGhlIGNvbXBvbmVudHMgcmVuZGVyZWQgb3V0cHV0IGFzIHNpYmxpbmdzIG9mIHRoZSBzdGFydC9lbmQgdGFncyAoYmV0d2VlbikuXHJcbiAgLy8gRm9yIHRoYXQgdG8gd29yaywgd2UgbmVlZCB0byBhcHByb3ByaWF0ZWx5IGNvbmZpZ3VyZSB0aGUgcGFyZW50IGVsZW1lbnQgdG8gYmUgYSBsb2dpY2FsIGVsZW1lbnRcclxuICAvLyB3aXRoIGFsbCB0aGVpciBjaGlsZHJlbiBiZWluZyB0aGUgY2hpbGQgZWxlbWVudHMuXHJcbiAgLy8gRm9yIGV4YW1wbGUsIGltYWdpbmUgeW91IGhhdmVcclxuICAvLyA8YXBwPlxyXG4gIC8vIDxkaXY+PHA+U3RhdGljIGNvbnRlbnQ8L3A+PC9kaXY+XHJcbiAgLy8gPCEtLSBzdGFydCBjb21wb25lbnRcclxuICAvLyA8IS0tIGVuZCBjb21wb25lbnRcclxuICAvLyA8Zm9vdGVyPlNvbWUgb3RoZXIgY29udGVudDwvZm9vdGVyPlxyXG4gIC8vIDxhcHA+XHJcbiAgLy8gV2Ugd2FudCB0aGUgcGFyZW50IGVsZW1lbnQgdG8gYmUgc29tZXRoaW5nIGxpa2VcclxuICAvLyAqYXBwXHJcbiAgLy8gfC0gKmRpdlxyXG4gIC8vIHwtICpjb21wb25lbnRcclxuICAvLyB8LSAqZm9vdGVyXHJcbiAgaWYgKCFzdGFydC5wYXJlbnROb2RlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENvbW1lbnQgbm90IGNvbm5lY3RlZCB0byB0aGUgRE9NICR7c3RhcnQudGV4dENvbnRlbnR9YCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJlbnQgPSBzdGFydC5wYXJlbnROb2RlO1xyXG4gIGNvbnN0IHBhcmVudExvZ2ljYWxFbGVtZW50ID0gdG9Mb2dpY2FsRWxlbWVudChwYXJlbnQsIC8qIGFsbG93IGV4aXN0aW5nIGNvbnRlbnRzICovIHRydWUpO1xyXG4gIGNvbnN0IGNoaWxkcmVuID0gZ2V0TG9naWNhbENoaWxkcmVuQXJyYXkocGFyZW50TG9naWNhbEVsZW1lbnQpO1xyXG4gIEFycmF5LmZyb20ocGFyZW50LmNoaWxkTm9kZXMpLmZvckVhY2gobiA9PiBjaGlsZHJlbi5wdXNoKG4gYXMgdW5rbm93biBhcyBMb2dpY2FsRWxlbWVudCkpO1xyXG4gIHN0YXJ0W2xvZ2ljYWxQYXJlbnRQcm9wbmFtZV0gPSBwYXJlbnRMb2dpY2FsRWxlbWVudDtcclxuICAvLyBXZSBtaWdodCBub3QgaGF2ZSBhbiBlbmQgY29tbWVudCBpbiB0aGUgY2FzZSBvZiBub24tcHJlcmVuZGVyZWQgY29tcG9uZW50cy5cclxuICBpZiAoZW5kKSB7XHJcbiAgICBzdGFydFtsb2dpY2FsRW5kU2libGluZ1Byb3BuYW1lXSA9IGVuZDtcclxuICAgIHRvTG9naWNhbEVsZW1lbnQoZW5kLCAvKiBhbGxvd0V4aXN0aW5nY29udGVudHMgKi8gdHJ1ZSk7XHJcbiAgfVxyXG4gIHJldHVybiB0b0xvZ2ljYWxFbGVtZW50KHN0YXJ0LCAvKiBhbGxvd0V4aXN0aW5nQ29udGVudHMgKi8gdHJ1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0xvZ2ljYWxFbGVtZW50KGVsZW1lbnQ6IE5vZGUsIGFsbG93RXhpc3RpbmdDb250ZW50cz86IGJvb2xlYW4pOiBMb2dpY2FsRWxlbWVudCB7XHJcbiAgLy8gTm9ybWFsbHkgaXQncyBnb29kIHRvIGFzc2VydCB0aGF0IHRoZSBlbGVtZW50IGhhcyBzdGFydGVkIGVtcHR5LCBiZWNhdXNlIHRoYXQncyB0aGUgdXN1YWxcclxuICAvLyBzaXR1YXRpb24gYW5kIHdlIHByb2JhYmx5IGhhdmUgYSBidWcgaWYgaXQncyBub3QuIEJ1dCBmb3IgdGhlIGVsZW1lbnQgdGhhdCBjb250YWluIHByZXJlbmRlcmVkXHJcbiAgLy8gcm9vdCBjb21wb25lbnRzLCB3ZSB3YW50IHRvIGxldCB0aGVtIGtlZXAgdGhlaXIgY29udGVudCB1bnRpbCB3ZSByZXBsYWNlIGl0LlxyXG4gIGlmIChlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMCAmJiAhYWxsb3dFeGlzdGluZ0NvbnRlbnRzKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldyBsb2dpY2FsIGVsZW1lbnRzIG11c3Qgc3RhcnQgZW1wdHksIG9yIGFsbG93RXhpc3RpbmdDb250ZW50cyBtdXN0IGJlIHRydWUnKTtcclxuICB9XHJcblxyXG4gIGVsZW1lbnRbbG9naWNhbENoaWxkcmVuUHJvcG5hbWVdID0gW107XHJcbiAgcmV0dXJuIGVsZW1lbnQgYXMgdW5rbm93biBhcyBMb2dpY2FsRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFuZEluc2VydExvZ2ljYWxDb250YWluZXIocGFyZW50OiBMb2dpY2FsRWxlbWVudCwgY2hpbGRJbmRleDogbnVtYmVyKTogTG9naWNhbEVsZW1lbnQge1xyXG4gIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCchJyk7XHJcbiAgaW5zZXJ0TG9naWNhbENoaWxkKGNvbnRhaW5lckVsZW1lbnQsIHBhcmVudCwgY2hpbGRJbmRleCk7XHJcbiAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQgYXMgYW55IGFzIExvZ2ljYWxFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0TG9naWNhbENoaWxkKGNoaWxkOiBOb2RlLCBwYXJlbnQ6IExvZ2ljYWxFbGVtZW50LCBjaGlsZEluZGV4OiBudW1iZXIpIHtcclxuICBjb25zdCBjaGlsZEFzTG9naWNhbEVsZW1lbnQgPSBjaGlsZCBhcyBhbnkgYXMgTG9naWNhbEVsZW1lbnQ7XHJcbiAgaWYgKGNoaWxkIGluc3RhbmNlb2YgQ29tbWVudCkge1xyXG4gICAgY29uc3QgZXhpc3RpbmdHcmFuZGNoaWxkcmVuID0gZ2V0TG9naWNhbENoaWxkcmVuQXJyYXkoY2hpbGRBc0xvZ2ljYWxFbGVtZW50KTtcclxuICAgIGlmIChleGlzdGluZ0dyYW5kY2hpbGRyZW4gJiYgZ2V0TG9naWNhbENoaWxkcmVuQXJyYXkoY2hpbGRBc0xvZ2ljYWxFbGVtZW50KS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIFRoZXJlJ3Mgbm90aGluZyB0byBzdG9wIHVzIGltcGxlbWVudGluZyBzdXBwb3J0IGZvciB0aGlzIHNjZW5hcmlvLCBhbmQgaXQncyBub3QgZGlmZmljdWx0XHJcbiAgICAgIC8vIChhZnRlciBpbnNlcnRpbmcgJ2NoaWxkJyBpdHNlbGYsIGFsc28gaXRlcmF0ZSB0aHJvdWdoIGl0cyBsb2dpY2FsIGNoaWxkcmVuIGFuZCBwaHlzaWNhbGx5XHJcbiAgICAgIC8vIHB1dCB0aGVtIGFzIGZvbGxvd2luZy1zaWJsaW5ncyBpbiB0aGUgRE9NKS4gSG93ZXZlciB0aGVyZSdzIG5vIHNjZW5hcmlvIHRoYXQgcmVxdWlyZXMgaXRcclxuICAgICAgLy8gcHJlc2VudGx5LCBzbyBpZiB3ZSBkaWQgaW1wbGVtZW50IGl0IHRoZXJlJ2QgYmUgbm8gZ29vZCB3YXkgdG8gaGF2ZSB0ZXN0cyBmb3IgaXQuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkOiBpbnNlcnRpbmcgbm9uLWVtcHR5IGxvZ2ljYWwgY29udGFpbmVyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZ2V0TG9naWNhbFBhcmVudChjaGlsZEFzTG9naWNhbEVsZW1lbnQpKSB7XHJcbiAgICAvLyBMaWtld2lzZSwgd2UgY291bGQgZWFzaWx5IHN1cHBvcnQgdGhpcyBzY2VuYXJpbyB0b28gKGluIHRoaXMgJ2lmJyBibG9jaywganVzdCBzcGxpY2VcclxuICAgIC8vIG91dCAnY2hpbGQnIGZyb20gdGhlIGxvZ2ljYWwgY2hpbGRyZW4gYXJyYXkgb2YgaXRzIHByZXZpb3VzIGxvZ2ljYWwgcGFyZW50IGJ5IHVzaW5nXHJcbiAgICAvLyBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiB0byBkZXRlcm1pbmUgaXRzIHByZXZpb3VzIHNpYmxpbmcgaW5kZXgpLlxyXG4gICAgLy8gQnV0IGFnYWluLCBzaW5jZSB0aGVyZSdzIG5vdCBjdXJyZW50bHkgYW55IHNjZW5hcmlvIHRoYXQgd291bGQgdXNlIGl0LCB3ZSB3b3VsZCBub3RcclxuICAgIC8vIGhhdmUgYW55IHRlc3QgY292ZXJhZ2UgZm9yIHN1Y2ggYW4gaW1wbGVtZW50YXRpb24uXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZDogbW92aW5nIGV4aXN0aW5nIGxvZ2ljYWwgY2hpbGRyZW4nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG5ld1NpYmxpbmdzID0gZ2V0TG9naWNhbENoaWxkcmVuQXJyYXkocGFyZW50KTtcclxuICBpZiAoY2hpbGRJbmRleCA8IG5ld1NpYmxpbmdzLmxlbmd0aCkge1xyXG4gICAgLy8gSW5zZXJ0XHJcbiAgICBjb25zdCBuZXh0U2libGluZyA9IG5ld1NpYmxpbmdzW2NoaWxkSW5kZXhdIGFzIGFueSBhcyBOb2RlO1xyXG4gICAgbmV4dFNpYmxpbmcucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKGNoaWxkLCBuZXh0U2libGluZyk7XHJcbiAgICBuZXdTaWJsaW5ncy5zcGxpY2UoY2hpbGRJbmRleCwgMCwgY2hpbGRBc0xvZ2ljYWxFbGVtZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gQXBwZW5kXHJcbiAgICBhcHBlbmREb21Ob2RlKGNoaWxkLCBwYXJlbnQpO1xyXG4gICAgbmV3U2libGluZ3MucHVzaChjaGlsZEFzTG9naWNhbEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgY2hpbGRBc0xvZ2ljYWxFbGVtZW50W2xvZ2ljYWxQYXJlbnRQcm9wbmFtZV0gPSBwYXJlbnQ7XHJcbiAgaWYgKCEobG9naWNhbENoaWxkcmVuUHJvcG5hbWUgaW4gY2hpbGRBc0xvZ2ljYWxFbGVtZW50KSkge1xyXG4gICAgY2hpbGRBc0xvZ2ljYWxFbGVtZW50W2xvZ2ljYWxDaGlsZHJlblByb3BuYW1lXSA9IFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxvZ2ljYWxDaGlsZChwYXJlbnQ6IExvZ2ljYWxFbGVtZW50LCBjaGlsZEluZGV4OiBudW1iZXIpIHtcclxuICBjb25zdCBjaGlsZHJlbkFycmF5ID0gZ2V0TG9naWNhbENoaWxkcmVuQXJyYXkocGFyZW50KTtcclxuICBjb25zdCBjaGlsZFRvUmVtb3ZlID0gY2hpbGRyZW5BcnJheS5zcGxpY2UoY2hpbGRJbmRleCwgMSlbMF07XHJcblxyXG4gIC8vIElmIGl0J3MgYSBsb2dpY2FsIGNvbnRhaW5lciwgYWxzbyByZW1vdmUgaXRzIGRlc2NlbmRhbnRzXHJcbiAgaWYgKGNoaWxkVG9SZW1vdmUgaW5zdGFuY2VvZiBDb21tZW50KSB7XHJcbiAgICBjb25zdCBncmFuZGNoaWxkcmVuQXJyYXkgPSBnZXRMb2dpY2FsQ2hpbGRyZW5BcnJheShjaGlsZFRvUmVtb3ZlKTtcclxuICAgIHdoaWxlIChncmFuZGNoaWxkcmVuQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICByZW1vdmVMb2dpY2FsQ2hpbGQoY2hpbGRUb1JlbW92ZSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGaW5hbGx5LCByZW1vdmUgdGhlIG5vZGUgaXRzZWxmXHJcbiAgY29uc3QgZG9tTm9kZVRvUmVtb3ZlID0gY2hpbGRUb1JlbW92ZSBhcyBhbnkgYXMgTm9kZTtcclxuICBkb21Ob2RlVG9SZW1vdmUucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQoZG9tTm9kZVRvUmVtb3ZlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2ljYWxQYXJlbnQoZWxlbWVudDogTG9naWNhbEVsZW1lbnQpOiBMb2dpY2FsRWxlbWVudCB8IG51bGwge1xyXG4gIHJldHVybiAoZWxlbWVudFtsb2dpY2FsUGFyZW50UHJvcG5hbWVdIGFzIExvZ2ljYWxFbGVtZW50KSB8fCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9naWNhbFNpYmxpbmdFbmQoZWxlbWVudDogTG9naWNhbEVsZW1lbnQpOiBMb2dpY2FsRWxlbWVudCB8IG51bGwge1xyXG4gIHJldHVybiAoZWxlbWVudFtsb2dpY2FsRW5kU2libGluZ1Byb3BuYW1lXSBhcyBMb2dpY2FsRWxlbWVudCkgfHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2ljYWxDaGlsZChwYXJlbnQ6IExvZ2ljYWxFbGVtZW50LCBjaGlsZEluZGV4OiBudW1iZXIpOiBMb2dpY2FsRWxlbWVudCB7XHJcbiAgcmV0dXJuIGdldExvZ2ljYWxDaGlsZHJlbkFycmF5KHBhcmVudClbY2hpbGRJbmRleF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N2Z0VsZW1lbnQoZWxlbWVudDogTG9naWNhbEVsZW1lbnQpIHtcclxuICByZXR1cm4gZ2V0Q2xvc2VzdERvbUVsZW1lbnQoZWxlbWVudCkubmFtZXNwYWNlVVJJID09PSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9naWNhbENoaWxkcmVuQXJyYXkoZWxlbWVudDogTG9naWNhbEVsZW1lbnQpIHtcclxuICByZXR1cm4gZWxlbWVudFtsb2dpY2FsQ2hpbGRyZW5Qcm9wbmFtZV0gYXMgTG9naWNhbEVsZW1lbnRbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBlcm11dGVMb2dpY2FsQ2hpbGRyZW4ocGFyZW50OiBMb2dpY2FsRWxlbWVudCwgcGVybXV0YXRpb25MaXN0OiBQZXJtdXRhdGlvbkxpc3RFbnRyeVtdKSB7XHJcbiAgLy8gVGhlIHBlcm11dGF0aW9uTGlzdCBtdXN0IHJlcHJlc2VudCBhIHZhbGlkIHBlcm11dGF0aW9uLCBpLmUuLCB0aGUgbGlzdCBvZiAnZnJvbScgaW5kaWNlc1xyXG4gIC8vIGlzIGRpc3RpbmN0LCBhbmQgdGhlIGxpc3Qgb2YgJ3RvJyBpbmRpY2VzIGlzIGEgcGVybXV0YXRpb24gb2YgaXQuIFRoZSBhbGdvcml0aG0gaGVyZVxyXG4gIC8vIHJlbGllcyBvbiB0aGF0IGFzc3VtcHRpb24uXHJcblxyXG4gIC8vIEVhY2ggb2YgdGhlIHBoYXNlcyBoZXJlIGhhcyB0byBoYXBwZW4gc2VwYXJhdGVseSwgYmVjYXVzZSBlYWNoIG9uZSBpcyBkZXNpZ25lZCBub3QgdG9cclxuICAvLyBpbnRlcmZlcmUgd2l0aCB0aGUgaW5kaWNlcyBvciBET00gZW50cmllcyB1c2VkIGJ5IHN1YnNlcXVlbnQgcGhhc2VzLlxyXG5cclxuICAvLyBQaGFzZSAxOiB0cmFjayB3aGljaCBub2RlcyB3ZSB3aWxsIG1vdmVcclxuICBjb25zdCBzaWJsaW5ncyA9IGdldExvZ2ljYWxDaGlsZHJlbkFycmF5KHBhcmVudCk7XHJcbiAgcGVybXV0YXRpb25MaXN0LmZvckVhY2goKGxpc3RFbnRyeTogUGVybXV0YXRpb25MaXN0RW50cnlXaXRoVHJhY2tpbmdEYXRhKSA9PiB7XHJcbiAgICBsaXN0RW50cnkubW92ZVJhbmdlU3RhcnQgPSBzaWJsaW5nc1tsaXN0RW50cnkuZnJvbVNpYmxpbmdJbmRleF07XHJcbiAgICBsaXN0RW50cnkubW92ZVJhbmdlRW5kID0gZmluZExhc3REb21Ob2RlSW5SYW5nZShsaXN0RW50cnkubW92ZVJhbmdlU3RhcnQpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBQaGFzZSAyOiBpbnNlcnQgbWFya2Vyc1xyXG4gIHBlcm11dGF0aW9uTGlzdC5mb3JFYWNoKChsaXN0RW50cnk6IFBlcm11dGF0aW9uTGlzdEVudHJ5V2l0aFRyYWNraW5nRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgbWFya2VyID0gbGlzdEVudHJ5Lm1vdmVUb0JlZm9yZU1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ21hcmtlcicpO1xyXG4gICAgY29uc3QgaW5zZXJ0QmVmb3JlTm9kZSA9IHNpYmxpbmdzW2xpc3RFbnRyeS50b1NpYmxpbmdJbmRleCArIDFdIGFzIGFueSBhcyBOb2RlO1xyXG4gICAgaWYgKGluc2VydEJlZm9yZU5vZGUpIHtcclxuICAgICAgaW5zZXJ0QmVmb3JlTm9kZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUobWFya2VyLCBpbnNlcnRCZWZvcmVOb2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwcGVuZERvbU5vZGUobWFya2VyLCBwYXJlbnQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBQaGFzZSAzOiBtb3ZlIGRlc2NlbmRhbnRzICYgcmVtb3ZlIG1hcmtlcnNcclxuICBwZXJtdXRhdGlvbkxpc3QuZm9yRWFjaCgobGlzdEVudHJ5OiBQZXJtdXRhdGlvbkxpc3RFbnRyeVdpdGhUcmFja2luZ0RhdGEpID0+IHtcclxuICAgIGNvbnN0IGluc2VydEJlZm9yZSA9IGxpc3RFbnRyeS5tb3ZlVG9CZWZvcmVNYXJrZXIhO1xyXG4gICAgY29uc3QgcGFyZW50RG9tTm9kZSA9IGluc2VydEJlZm9yZS5wYXJlbnROb2RlITtcclxuICAgIGNvbnN0IGVsZW1lbnRUb01vdmUgPSBsaXN0RW50cnkubW92ZVJhbmdlU3RhcnQhO1xyXG4gICAgY29uc3QgbW92ZUVuZE5vZGUgPSBsaXN0RW50cnkubW92ZVJhbmdlRW5kITtcclxuICAgIGxldCBuZXh0VG9Nb3ZlID0gZWxlbWVudFRvTW92ZSBhcyBhbnkgYXMgTm9kZSB8IG51bGw7XHJcbiAgICB3aGlsZSAobmV4dFRvTW92ZSkge1xyXG4gICAgICBjb25zdCBuZXh0TmV4dCA9IG5leHRUb01vdmUubmV4dFNpYmxpbmc7XHJcbiAgICAgIHBhcmVudERvbU5vZGUuaW5zZXJ0QmVmb3JlKG5leHRUb01vdmUsIGluc2VydEJlZm9yZSk7XHJcblxyXG4gICAgICBpZiAobmV4dFRvTW92ZSA9PT0gbW92ZUVuZE5vZGUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXh0VG9Nb3ZlID0gbmV4dE5leHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwYXJlbnREb21Ob2RlLnJlbW92ZUNoaWxkKGluc2VydEJlZm9yZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIFBoYXNlIDQ6IHVwZGF0ZSBzaWJsaW5ncyBpbmRleFxyXG4gIHBlcm11dGF0aW9uTGlzdC5mb3JFYWNoKChsaXN0RW50cnk6IFBlcm11dGF0aW9uTGlzdEVudHJ5V2l0aFRyYWNraW5nRGF0YSkgPT4ge1xyXG4gICAgc2libGluZ3NbbGlzdEVudHJ5LnRvU2libGluZ0luZGV4XSA9IGxpc3RFbnRyeS5tb3ZlUmFuZ2VTdGFydCE7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbG9zZXN0RG9tRWxlbWVudChsb2dpY2FsRWxlbWVudDogTG9naWNhbEVsZW1lbnQpIHtcclxuICBpZiAobG9naWNhbEVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gbG9naWNhbEVsZW1lbnQ7XHJcbiAgfSBlbHNlIGlmIChsb2dpY2FsRWxlbWVudCBpbnN0YW5jZW9mIENvbW1lbnQpIHtcclxuICAgIHJldHVybiBsb2dpY2FsRWxlbWVudC5wYXJlbnROb2RlISBhcyBFbGVtZW50O1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIGxvZ2ljYWwgZWxlbWVudCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJtdXRhdGlvbkxpc3RFbnRyeSB7XHJcbiAgZnJvbVNpYmxpbmdJbmRleDogbnVtYmVyLFxyXG4gIHRvU2libGluZ0luZGV4OiBudW1iZXIsXHJcbn1cclxuXHJcbmludGVyZmFjZSBQZXJtdXRhdGlvbkxpc3RFbnRyeVdpdGhUcmFja2luZ0RhdGEgZXh0ZW5kcyBQZXJtdXRhdGlvbkxpc3RFbnRyeSB7XHJcbiAgLy8gVGhlc2UgZXh0cmEgcHJvcGVydGllcyBhcmUgdXNlZCBpbnRlcm5hbGx5IHdoZW4gcHJvY2Vzc2luZyB0aGUgcGVybXV0YXRpb24gbGlzdFxyXG4gIG1vdmVSYW5nZVN0YXJ0PzogTG9naWNhbEVsZW1lbnQsXHJcbiAgbW92ZVJhbmdlRW5kPzogTm9kZSxcclxuICBtb3ZlVG9CZWZvcmVNYXJrZXI/OiBOb2RlLFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMb2dpY2FsTmV4dFNpYmxpbmcoZWxlbWVudDogTG9naWNhbEVsZW1lbnQpOiBMb2dpY2FsRWxlbWVudCB8IG51bGwge1xyXG4gIGNvbnN0IHNpYmxpbmdzID0gZ2V0TG9naWNhbENoaWxkcmVuQXJyYXkoZ2V0TG9naWNhbFBhcmVudChlbGVtZW50KSEpO1xyXG4gIGNvbnN0IHNpYmxpbmdJbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoc2libGluZ3MsIGVsZW1lbnQpO1xyXG4gIHJldHVybiBzaWJsaW5nc1tzaWJsaW5nSW5kZXggKyAxXSB8fCBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmREb21Ob2RlKGNoaWxkOiBOb2RlLCBwYXJlbnQ6IExvZ2ljYWxFbGVtZW50KSB7XHJcbiAgLy8gVGhpcyBmdW5jdGlvbiBvbmx5IHB1dHMgJ2NoaWxkJyBpbnRvIHRoZSBET00gaW4gdGhlIHJpZ2h0IHBsYWNlIHJlbGF0aXZlIHRvICdwYXJlbnQnXHJcbiAgLy8gSXQgZG9lcyBub3QgdXBkYXRlIHRoZSBsb2dpY2FsIGNoaWxkcmVuIGFycmF5IG9mIGFueXRoaW5nXHJcbiAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgfSBlbHNlIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBDb21tZW50KSB7XHJcbiAgICBjb25zdCBwYXJlbnRMb2dpY2FsTmV4dFNpYmxpbmcgPSBnZXRMb2dpY2FsTmV4dFNpYmxpbmcocGFyZW50KSBhcyBhbnkgYXMgTm9kZTtcclxuICAgIGlmIChwYXJlbnRMb2dpY2FsTmV4dFNpYmxpbmcpIHtcclxuICAgICAgLy8gU2luY2UgdGhlIHBhcmVudCBoYXMgYSBsb2dpY2FsIG5leHQtc2libGluZywgaXRzIGFwcGVuZGVkIGNoaWxkIGdvZXMgcmlnaHQgYmVmb3JlIHRoYXRcclxuICAgICAgcGFyZW50TG9naWNhbE5leHRTaWJsaW5nLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50TG9naWNhbE5leHRTaWJsaW5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFNpbmNlIHRoZSBwYXJlbnQgaGFzIG5vIGxvZ2ljYWwgbmV4dC1zaWJsaW5nLCBrZWVwIHJlY3Vyc2luZyB1cHdhcmRzIHVudGlsIHdlIGZpbmRcclxuICAgICAgLy8gYSBsb2dpY2FsIGFuY2VzdG9yIHRoYXQgZG9lcyBoYXZlIGEgbmV4dC1zaWJsaW5nIG9yIGlzIGEgcGh5c2ljYWwgZWxlbWVudC5cclxuICAgICAgYXBwZW5kRG9tTm9kZShjaGlsZCwgZ2V0TG9naWNhbFBhcmVudChwYXJlbnQpISk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFNob3VsZCBuZXZlciBoYXBwZW5cclxuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGFwcGVuZCBub2RlIGJlY2F1c2UgdGhlIHBhcmVudCBpcyBub3QgYSB2YWxpZCBsb2dpY2FsIGVsZW1lbnQuIFBhcmVudDogJHtwYXJlbnR9YCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXR1cm5zIHRoZSBmaW5hbCBub2RlIChpbiBkZXB0aC1maXJzdCBldmFsdWF0aW9uIG9yZGVyKSB0aGF0IGlzIGEgZGVzY2VuZGFudCBvZiB0aGUgbG9naWNhbCBlbGVtZW50LlxyXG4vLyBBcyBzdWNoLCB0aGUgZW50aXJlIHN1YnRyZWUgaXMgYmV0d2VlbiAnZWxlbWVudCcgYW5kICdmaW5kTGFzdERvbU5vZGVJblJhbmdlKGVsZW1lbnQpJyBpbmNsdXNpdmUuXHJcbmZ1bmN0aW9uIGZpbmRMYXN0RG9tTm9kZUluUmFuZ2UoZWxlbWVudDogTG9naWNhbEVsZW1lbnQpIHtcclxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbmV4dFNpYmxpbmcgPSBnZXRMb2dpY2FsTmV4dFNpYmxpbmcoZWxlbWVudCk7XHJcbiAgaWYgKG5leHRTaWJsaW5nKSB7XHJcbiAgICAvLyBTaW1wbGUgY2FzZTogbm90IHRoZSBsYXN0IGxvZ2ljYWwgc2libGluZywgc28gdGFrZSB0aGUgbm9kZSBiZWZvcmUgdGhlIG5leHQgc2libGluZ1xyXG4gICAgcmV0dXJuIChuZXh0U2libGluZyBhcyBhbnkgYXMgTm9kZSkucHJldmlvdXNTaWJsaW5nO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBIYXJkZXIgY2FzZTogdGhlcmUncyBubyBsb2dpY2FsIG5leHQtc2libGluZywgc28gcmVjdXJzZSB1cHdhcmRzIHVudGlsIHdlIGZpbmRcclxuICAgIC8vIGEgbG9naWNhbCBhbmNlc3RvciB0aGF0IGRvZXMgaGF2ZSBvbmUsIG9yIGEgcGh5c2ljYWwgZWxlbWVudFxyXG4gICAgY29uc3QgbG9naWNhbFBhcmVudCA9IGdldExvZ2ljYWxQYXJlbnQoZWxlbWVudCkhO1xyXG4gICAgcmV0dXJuIGxvZ2ljYWxQYXJlbnQgaW5zdGFuY2VvZiBFbGVtZW50XHJcbiAgICAgID8gbG9naWNhbFBhcmVudC5sYXN0Q2hpbGRcclxuICAgICAgOiBmaW5kTGFzdERvbU5vZGVJblJhbmdlKGxvZ2ljYWxQYXJlbnQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3ltYm9sT3JGYWxsYmFjayhmYWxsYmFjazogc3RyaW5nKTogc3ltYm9sIHwgc3RyaW5nIHtcclxuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyA/IFN5bWJvbCgpIDogZmFsbGJhY2s7XHJcbn1cclxuXHJcbi8vIE5vbWluYWwgdHlwZSB0byByZXByZXNlbnQgYSBsb2dpY2FsIGVsZW1lbnQgd2l0aG91dCBuZWVkaW5nIHRvIGFsbG9jYXRlIGFueSBvYmplY3QgZm9yIGluc3RhbmNlc1xyXG5leHBvcnQgaW50ZXJmYWNlIExvZ2ljYWxFbGVtZW50IHsgTG9naWNhbEVsZW1lbnRfX0RPX05PVF9JTVBMRU1FTlQ6IGFueSB9XHJcbiIsImltcG9ydCB7IFJlbmRlckJhdGNoLCBBcnJheVJhbmdlLCBSZW5kZXJUcmVlRGlmZiwgQXJyYXlWYWx1ZXMsIFJlbmRlclRyZWVFZGl0LCBFZGl0VHlwZSwgRnJhbWVUeXBlLCBSZW5kZXJUcmVlRnJhbWUsIFJlbmRlclRyZWVEaWZmUmVhZGVyLCBSZW5kZXJUcmVlRnJhbWVSZWFkZXIsIFJlbmRlclRyZWVFZGl0UmVhZGVyLCBBcnJheVJhbmdlUmVhZGVyLCBBcnJheUJ1aWxkZXJTZWdtZW50UmVhZGVyLCBBcnJheUJ1aWxkZXJTZWdtZW50IH0gZnJvbSAnLi9SZW5kZXJCYXRjaCc7XHJcbmltcG9ydCB7IGRlY29kZVV0ZjggfSBmcm9tICcuL1V0ZjhEZWNvZGVyJztcclxuXHJcbmNvbnN0IHVwZGF0ZWRDb21wb25lbnRzRW50cnlMZW5ndGggPSA0OyAvLyBFYWNoIGlzIGEgc2luZ2xlIGludDMyIGdpdmluZyB0aGUgbG9jYXRpb24gb2YgdGhlIGRhdGFcclxuY29uc3QgcmVmZXJlbmNlRnJhbWVzRW50cnlMZW5ndGggPSAyMDsgLy8gMSBpbnQgZm9yIGZyYW1lIHR5cGUsIHRoZW4gMTYgYnl0ZXMgZm9yIHR5cGUtc3BlY2lmaWMgZGF0YVxyXG5jb25zdCBkaXNwb3NlZENvbXBvbmVudElkc0VudHJ5TGVuZ3RoID0gNDsgLy8gRWFjaCBpcyBhbiBpbnQzMiBnaXZpbmcgdGhlIElEXHJcbmNvbnN0IGRpc3Bvc2VkRXZlbnRIYW5kbGVySWRzRW50cnlMZW5ndGggPSA4OyAvLyBFYWNoIGlzIGFuIGludDY0IGdpdmluZyB0aGUgSURcclxuY29uc3QgZWRpdHNFbnRyeUxlbmd0aCA9IDE2OyAvLyA0IGludHNcclxuY29uc3Qgc3RyaW5nVGFibGVFbnRyeUxlbmd0aCA9IDQ7IC8vIEVhY2ggaXMgYW4gaW50MzIgZ2l2aW5nIHRoZSBzdHJpbmcgZGF0YSBsb2NhdGlvbiwgb3IgLTEgZm9yIG51bGxcclxuY29uc3QgdWludDY0SGlnaFBhcnRTaGlmdCA9IE1hdGgucG93KDIsIDMyKTtcclxuY29uc3QgbWF4U2FmZU51bWJlckhpZ2hQYXJ0ID0gTWF0aC5wb3coMiwgMjEpIC0gMTsgLy8gVGhlIGhpZ2gtb3JkZXIgaW50MzIgZnJvbSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxyXG5cclxuZXhwb3J0IGNsYXNzIE91dE9mUHJvY2Vzc1JlbmRlckJhdGNoIGltcGxlbWVudHMgUmVuZGVyQmF0Y2gge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmF0Y2hEYXRhOiBVaW50OEFycmF5KSB7XHJcbiAgICBjb25zdCBzdHJpbmdSZWFkZXIgPSBuZXcgT3V0T2ZQcm9jZXNzU3RyaW5nUmVhZGVyKGJhdGNoRGF0YSk7XHJcblxyXG4gICAgdGhpcy5hcnJheVJhbmdlUmVhZGVyID0gbmV3IE91dE9mUHJvY2Vzc0FycmF5UmFuZ2VSZWFkZXIoYmF0Y2hEYXRhKTtcclxuICAgIHRoaXMuYXJyYXlCdWlsZGVyU2VnbWVudFJlYWRlciA9IG5ldyBPdXRPZlByb2Nlc3NBcnJheUJ1aWxkZXJTZWdtZW50UmVhZGVyKGJhdGNoRGF0YSk7XHJcbiAgICB0aGlzLmRpZmZSZWFkZXIgPSBuZXcgT3V0T2ZQcm9jZXNzUmVuZGVyVHJlZURpZmZSZWFkZXIoYmF0Y2hEYXRhKTtcclxuICAgIHRoaXMuZWRpdFJlYWRlciA9IG5ldyBPdXRPZlByb2Nlc3NSZW5kZXJUcmVlRWRpdFJlYWRlcihiYXRjaERhdGEsIHN0cmluZ1JlYWRlcik7XHJcbiAgICB0aGlzLmZyYW1lUmVhZGVyID0gbmV3IE91dE9mUHJvY2Vzc1JlbmRlclRyZWVGcmFtZVJlYWRlcihiYXRjaERhdGEsIHN0cmluZ1JlYWRlcik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVkQ29tcG9uZW50cygpOiBBcnJheVJhbmdlPFJlbmRlclRyZWVEaWZmPiB7XHJcbiAgICByZXR1cm4gcmVhZEludDMyTEUodGhpcy5iYXRjaERhdGEsIHRoaXMuYmF0Y2hEYXRhLmxlbmd0aCAtIDIwKTsgLy8gNXRoLWZyb20tbGFzdCBpbnQzMlxyXG4gIH1cclxuXHJcbiAgcmVmZXJlbmNlRnJhbWVzKCk6IEFycmF5UmFuZ2U8UmVuZGVyVHJlZUZyYW1lPiB7XHJcbiAgICByZXR1cm4gcmVhZEludDMyTEUodGhpcy5iYXRjaERhdGEsIHRoaXMuYmF0Y2hEYXRhLmxlbmd0aCAtIDE2KTsgLy8gNHRoLWZyb20tbGFzdCBpbnQzMlxyXG4gIH1cclxuXHJcbiAgZGlzcG9zZWRDb21wb25lbnRJZHMoKTogQXJyYXlSYW5nZTxudW1iZXI+IHtcclxuICAgIHJldHVybiByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YSwgdGhpcy5iYXRjaERhdGEubGVuZ3RoIC0gMTIpOyAvLyAzcmQtZnJvbS1sYXN0IGludDMyXHJcbiAgfVxyXG5cclxuICBkaXNwb3NlZEV2ZW50SGFuZGxlcklkcygpOiBBcnJheVJhbmdlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhLCB0aGlzLmJhdGNoRGF0YS5sZW5ndGggLSA4KTsgLy8gMnRoLWZyb20tbGFzdCBpbnQzMlxyXG4gIH1cclxuXHJcbiAgdXBkYXRlZENvbXBvbmVudHNFbnRyeSh2YWx1ZXM6IEFycmF5VmFsdWVzPFJlbmRlclRyZWVEaWZmPiwgaW5kZXg6IG51bWJlcik6IFJlbmRlclRyZWVEaWZmIHtcclxuICAgIGNvbnN0IHRhYmxlRW50cnlQb3MgPSAodmFsdWVzIGFzIGFueSkgKyBpbmRleCAqIHVwZGF0ZWRDb21wb25lbnRzRW50cnlMZW5ndGg7XHJcbiAgICByZXR1cm4gcmVhZEludDMyTEUodGhpcy5iYXRjaERhdGEsIHRhYmxlRW50cnlQb3MpO1xyXG4gIH1cclxuXHJcbiAgcmVmZXJlbmNlRnJhbWVzRW50cnkodmFsdWVzOiBBcnJheVZhbHVlczxSZW5kZXJUcmVlRnJhbWU+LCBpbmRleDogbnVtYmVyKTogUmVuZGVyVHJlZUZyYW1lIHtcclxuICAgIHJldHVybiAodmFsdWVzIGFzIGFueSkgKyBpbmRleCAqIHJlZmVyZW5jZUZyYW1lc0VudHJ5TGVuZ3RoIGFzIGFueTtcclxuICB9XHJcblxyXG4gIGRpc3Bvc2VkQ29tcG9uZW50SWRzRW50cnkodmFsdWVzOiBBcnJheVZhbHVlczxudW1iZXI+LCBpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGVudHJ5UG9zID0gKHZhbHVlcyBhcyBhbnkpICsgaW5kZXggKiBkaXNwb3NlZENvbXBvbmVudElkc0VudHJ5TGVuZ3RoO1xyXG4gICAgcmV0dXJuIHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhLCBlbnRyeVBvcyk7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlZEV2ZW50SGFuZGxlcklkc0VudHJ5KHZhbHVlczogQXJyYXlWYWx1ZXM8bnVtYmVyPiwgaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBlbnRyeVBvcyA9ICh2YWx1ZXMgYXMgYW55KSArIGluZGV4ICogZGlzcG9zZWRFdmVudEhhbmRsZXJJZHNFbnRyeUxlbmd0aDtcclxuICAgIHJldHVybiByZWFkVWludDY0TEUodGhpcy5iYXRjaERhdGEsIGVudHJ5UG9zKTtcclxuICB9XHJcblxyXG4gIGRpZmZSZWFkZXI6IFJlbmRlclRyZWVEaWZmUmVhZGVyO1xyXG5cclxuICBlZGl0UmVhZGVyOiBSZW5kZXJUcmVlRWRpdFJlYWRlcjtcclxuXHJcbiAgZnJhbWVSZWFkZXI6IFJlbmRlclRyZWVGcmFtZVJlYWRlcjtcclxuXHJcbiAgYXJyYXlSYW5nZVJlYWRlcjogQXJyYXlSYW5nZVJlYWRlcjtcclxuXHJcbiAgYXJyYXlCdWlsZGVyU2VnbWVudFJlYWRlcjogQXJyYXlCdWlsZGVyU2VnbWVudFJlYWRlcjtcclxufVxyXG5cclxuY2xhc3MgT3V0T2ZQcm9jZXNzUmVuZGVyVHJlZURpZmZSZWFkZXIgaW1wbGVtZW50cyBSZW5kZXJUcmVlRGlmZlJlYWRlciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXRjaERhdGFVaW50ODogVWludDhBcnJheSkge1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50SWQoZGlmZjogUmVuZGVyVHJlZURpZmYpIHtcclxuICAgIC8vIEZpcnN0IGludDMyIGlzIGNvbXBvbmVudElkXHJcbiAgICByZXR1cm4gcmVhZEludDMyTEUodGhpcy5iYXRjaERhdGFVaW50OCwgZGlmZiBhcyBhbnkpO1xyXG4gIH1cclxuXHJcbiAgZWRpdHMoZGlmZjogUmVuZGVyVHJlZURpZmYpIHtcclxuICAgIC8vIEVudHJpZXMgZGF0YSBzdGFydHMgYWZ0ZXIgdGhlIGNvbXBvbmVudElkICh3aGljaCBpcyBhIDQtYnl0ZSBpbnQpXHJcbiAgICByZXR1cm4gKGRpZmYgYXMgYW55ICsgNCk7XHJcbiAgfVxyXG5cclxuICBlZGl0c0VudHJ5KHZhbHVlczogQXJyYXlWYWx1ZXM8UmVuZGVyVHJlZUVkaXQ+LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKHZhbHVlcyBhcyBhbnkpICsgaW5kZXggKiBlZGl0c0VudHJ5TGVuZ3RoO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgT3V0T2ZQcm9jZXNzUmVuZGVyVHJlZUVkaXRSZWFkZXIgaW1wbGVtZW50cyBSZW5kZXJUcmVlRWRpdFJlYWRlciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXRjaERhdGFVaW50ODogVWludDhBcnJheSwgcHJpdmF0ZSBzdHJpbmdSZWFkZXI6IE91dE9mUHJvY2Vzc1N0cmluZ1JlYWRlcikge1xyXG4gIH1cclxuXHJcbiAgZWRpdFR5cGUoZWRpdDogUmVuZGVyVHJlZUVkaXQpIHtcclxuICAgIHJldHVybiByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YVVpbnQ4LCBlZGl0IGFzIGFueSk7IC8vIDFzdCBpbnRcclxuICB9XHJcblxyXG4gIHNpYmxpbmdJbmRleChlZGl0OiBSZW5kZXJUcmVlRWRpdCkge1xyXG4gICAgcmV0dXJuIHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhVWludDgsIGVkaXQgYXMgYW55ICsgNCk7IC8vIDJuZCBpbnRcclxuICB9XHJcblxyXG4gIG5ld1RyZWVJbmRleChlZGl0OiBSZW5kZXJUcmVlRWRpdCkge1xyXG4gICAgcmV0dXJuIHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhVWludDgsIGVkaXQgYXMgYW55ICsgOCk7IC8vIDNyZCBpbnRcclxuICB9XHJcblxyXG4gIG1vdmVUb1NpYmxpbmdJbmRleChlZGl0OiBSZW5kZXJUcmVlRWRpdCkge1xyXG4gICAgcmV0dXJuIHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhVWludDgsIGVkaXQgYXMgYW55ICsgOCk7IC8vIDNyZCBpbnRcclxuICB9XHJcblxyXG4gIHJlbW92ZWRBdHRyaWJ1dGVOYW1lKGVkaXQ6IFJlbmRlclRyZWVFZGl0KSB7XHJcbiAgICBjb25zdCBzdHJpbmdJbmRleCA9IHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhVWludDgsIGVkaXQgYXMgYW55ICsgMTIpOyAvLyA0dGggaW50XHJcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdSZWFkZXIucmVhZFN0cmluZyhzdHJpbmdJbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBPdXRPZlByb2Nlc3NSZW5kZXJUcmVlRnJhbWVSZWFkZXIgaW1wbGVtZW50cyBSZW5kZXJUcmVlRnJhbWVSZWFkZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmF0Y2hEYXRhVWludDg6IFVpbnQ4QXJyYXksIHByaXZhdGUgc3RyaW5nUmVhZGVyOiBPdXRPZlByb2Nlc3NTdHJpbmdSZWFkZXIpIHtcclxuICB9XHJcblxyXG4gIC8vIEZvciByZW5kZXIgZnJhbWVzLCB0aGUgMm5kLTR0aCBpbnRzIGhhdmUgZGlmZmVyZW50IG1lYW5pbmdzIGRlcGVuZGluZyBvbiBmcmFtZVR5cGUuXHJcbiAgLy8gSXQncyB0aGUgY2FsbGVyJ3MgcmVzcG9uc2liaWxpdHkgbm90IHRvIGV2YWx1YXRlIHByb3BlcnRpZXMgdGhhdCBhcmVuJ3QgYXBwbGljYWJsZSB0byB0aGUgZnJhbWVUeXBlLlxyXG5cclxuICBmcmFtZVR5cGUoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSkge1xyXG4gICAgcmV0dXJuIHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhVWludDgsIGZyYW1lIGFzIGFueSk7IC8vIDFzdCBpbnRcclxuICB9XHJcblxyXG4gIHN1YnRyZWVMZW5ndGgoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSkge1xyXG4gICAgcmV0dXJuIHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhVWludDgsIGZyYW1lIGFzIGFueSArIDQpOyAvLyAybmQgaW50XHJcbiAgfVxyXG5cclxuICBlbGVtZW50UmVmZXJlbmNlQ2FwdHVyZUlkKGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpIHtcclxuICAgIGNvbnN0IHN0cmluZ0luZGV4ID0gcmVhZEludDMyTEUodGhpcy5iYXRjaERhdGFVaW50OCwgZnJhbWUgYXMgYW55ICsgNCk7IC8vIDJuZCBpbnRcclxuICAgIHJldHVybiB0aGlzLnN0cmluZ1JlYWRlci5yZWFkU3RyaW5nKHN0cmluZ0luZGV4KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudElkKGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpIHtcclxuICAgIHJldHVybiByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YVVpbnQ4LCBmcmFtZSBhcyBhbnkgKyA4KTsgLy8gM3JkIGludFxyXG4gIH1cclxuXHJcbiAgZWxlbWVudE5hbWUoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSkge1xyXG4gICAgY29uc3Qgc3RyaW5nSW5kZXggPSByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YVVpbnQ4LCBmcmFtZSBhcyBhbnkgKyA4KTsgLy8gM3JkIGludFxyXG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nUmVhZGVyLnJlYWRTdHJpbmcoc3RyaW5nSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgdGV4dENvbnRlbnQoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSkge1xyXG4gICAgY29uc3Qgc3RyaW5nSW5kZXggPSByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YVVpbnQ4LCBmcmFtZSBhcyBhbnkgKyA0KTsgLy8gMm5kIGludFxyXG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nUmVhZGVyLnJlYWRTdHJpbmcoc3RyaW5nSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgbWFya3VwQ29udGVudChmcmFtZTogUmVuZGVyVHJlZUZyYW1lKSB7XHJcbiAgICBjb25zdCBzdHJpbmdJbmRleCA9IHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhVWludDgsIGZyYW1lIGFzIGFueSArIDQpOyAvLyAybmQgaW50XHJcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdSZWFkZXIucmVhZFN0cmluZyhzdHJpbmdJbmRleCkhO1xyXG4gIH1cclxuXHJcbiAgYXR0cmlidXRlTmFtZShmcmFtZTogUmVuZGVyVHJlZUZyYW1lKSB7XHJcbiAgICBjb25zdCBzdHJpbmdJbmRleCA9IHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhVWludDgsIGZyYW1lIGFzIGFueSArIDQpOyAvLyAybmQgaW50XHJcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdSZWFkZXIucmVhZFN0cmluZyhzdHJpbmdJbmRleCk7XHJcbiAgfVxyXG5cclxuICBhdHRyaWJ1dGVWYWx1ZShmcmFtZTogUmVuZGVyVHJlZUZyYW1lKSB7XHJcbiAgICBjb25zdCBzdHJpbmdJbmRleCA9IHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhVWludDgsIGZyYW1lIGFzIGFueSArIDgpOyAvLyAzcmQgaW50XHJcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdSZWFkZXIucmVhZFN0cmluZyhzdHJpbmdJbmRleCk7XHJcbiAgfVxyXG5cclxuICBhdHRyaWJ1dGVFdmVudEhhbmRsZXJJZChmcmFtZTogUmVuZGVyVHJlZUZyYW1lKSB7XHJcbiAgICByZXR1cm4gcmVhZFVpbnQ2NExFKHRoaXMuYmF0Y2hEYXRhVWludDgsIGZyYW1lIGFzIGFueSArIDEyKTsgLy8gQnl0ZXMgMTItMTlcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE91dE9mUHJvY2Vzc1N0cmluZ1JlYWRlciB7XHJcbiAgcHJpdmF0ZSBzdHJpbmdUYWJsZVN0YXJ0SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXRjaERhdGFVaW50ODogVWludDhBcnJheSkge1xyXG4gICAgLy8gRmluYWwgaW50IGdpdmVzIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBzdHJpbmcgdGFibGVcclxuICAgIHRoaXMuc3RyaW5nVGFibGVTdGFydEluZGV4ID0gcmVhZEludDMyTEUoYmF0Y2hEYXRhVWludDgsIGJhdGNoRGF0YVVpbnQ4Lmxlbmd0aCAtIDQpO1xyXG4gIH1cclxuXHJcbiAgcmVhZFN0cmluZyhpbmRleDogbnVtYmVyKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7IC8vIFNwZWNpYWwgdmFsdWUgZW5jb2RlcyAnbnVsbCdcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBzdHJpbmdUYWJsZUVudHJ5UG9zID0gcmVhZEludDMyTEUodGhpcy5iYXRjaERhdGFVaW50OCwgdGhpcy5zdHJpbmdUYWJsZVN0YXJ0SW5kZXggKyBpbmRleCAqIHN0cmluZ1RhYmxlRW50cnlMZW5ndGgpO1xyXG5cclxuICAgICAgLy8gQnkgZGVmYXVsdCwgLk5FVCdzIEJpbmFyeVdyaXRlciBnaXZlcyBMRUIxMjgtbGVuZ3RoLXByZWZpeGVkIFVURi04IGRhdGEuXHJcbiAgICAgIC8vIFRoaXMgaXMgY29udmVuaWVudCBlbm91Z2ggdG8gZGVjb2RlIGluIEphdmFTY3JpcHQuXHJcbiAgICAgIGNvbnN0IG51bVV0ZjhCeXRlcyA9IHJlYWRMRUIxMjgodGhpcy5iYXRjaERhdGFVaW50OCwgc3RyaW5nVGFibGVFbnRyeVBvcyk7XHJcbiAgICAgIGNvbnN0IGNoYXJzU3RhcnQgPSBzdHJpbmdUYWJsZUVudHJ5UG9zICsgbnVtTEVCMTI4Qnl0ZXMobnVtVXRmOEJ5dGVzKTtcclxuICAgICAgY29uc3QgdXRmOERhdGEgPSBuZXcgVWludDhBcnJheShcclxuICAgICAgICB0aGlzLmJhdGNoRGF0YVVpbnQ4LmJ1ZmZlcixcclxuICAgICAgICB0aGlzLmJhdGNoRGF0YVVpbnQ4LmJ5dGVPZmZzZXQgKyBjaGFyc1N0YXJ0LFxyXG4gICAgICAgIG51bVV0ZjhCeXRlc1xyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gZGVjb2RlVXRmOCh1dGY4RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBPdXRPZlByb2Nlc3NBcnJheVJhbmdlUmVhZGVyIGltcGxlbWVudHMgQXJyYXlSYW5nZVJlYWRlciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXRjaERhdGFVaW50ODogVWludDhBcnJheSkge1xyXG4gIH1cclxuXHJcbiAgY291bnQ8VD4oYXJyYXlSYW5nZTogQXJyYXlSYW5nZTxUPikge1xyXG4gICAgLy8gRmlyc3QgaW50IGlzIGNvdW50XHJcbiAgICByZXR1cm4gcmVhZEludDMyTEUodGhpcy5iYXRjaERhdGFVaW50OCwgYXJyYXlSYW5nZSBhcyBhbnkpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVzPFQ+KGFycmF5UmFuZ2U6IEFycmF5UmFuZ2U8VD4pIHtcclxuICAgIC8vIEVudHJpZXMgZGF0YSBzdGFydHMgYWZ0ZXIgdGhlICdjb3VudCcgaW50IChpLmUuLCBhZnRlciA0IGJ5dGVzKVxyXG4gICAgcmV0dXJuIGFycmF5UmFuZ2UgYXMgYW55ICsgNDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE91dE9mUHJvY2Vzc0FycmF5QnVpbGRlclNlZ21lbnRSZWFkZXIgaW1wbGVtZW50cyBBcnJheUJ1aWxkZXJTZWdtZW50UmVhZGVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhdGNoRGF0YVVpbnQ4OiBVaW50OEFycmF5KSB7XHJcbiAgfVxyXG5cclxuICBvZmZzZXQ8VD4oYXJyYXlCdWlsZGVyU2VnbWVudDogQXJyYXlCdWlsZGVyU2VnbWVudDxUPikge1xyXG4gICAgLy8gTm90IHVzZWQgYnkgdGhlIG91dC1vZi1wcm9jZXNzIHJlcHJlc2VudGF0aW9uIG9mIFJlbmRlckJhdGNoIGRhdGEuXHJcbiAgICAvLyBUaGlzIG9ubHkgZXhpc3RzIG9uIHRoZSBBcnJheUJ1aWxkZXJTZWdtZW50UmVhZGVyIGZvciB0aGUgc2hhcmVkLW1lbW9yeSByZXByZXNlbnRhdGlvbi5cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgY291bnQ8VD4oYXJyYXlCdWlsZGVyU2VnbWVudDogQXJyYXlCdWlsZGVyU2VnbWVudDxUPikge1xyXG4gICAgLy8gRmlyc3QgaW50IGlzIGNvdW50XHJcbiAgICByZXR1cm4gcmVhZEludDMyTEUodGhpcy5iYXRjaERhdGFVaW50OCwgYXJyYXlCdWlsZGVyU2VnbWVudCBhcyBhbnkpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVzPFQ+KGFycmF5QnVpbGRlclNlZ21lbnQ6IEFycmF5QnVpbGRlclNlZ21lbnQ8VD4pOiBBcnJheVZhbHVlczxUPiB7XHJcbiAgICAvLyBFbnRyaWVzIGRhdGEgc3RhcnRzIGFmdGVyIHRoZSAnY291bnQnIGludCAoaS5lLiwgYWZ0ZXIgNCBieXRlcylcclxuICAgIHJldHVybiBhcnJheUJ1aWxkZXJTZWdtZW50IGFzIGFueSArIDQ7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkSW50MzJMRShidWZmZXI6IFVpbnQ4QXJyYXksIHBvc2l0aW9uOiBudW1iZXIpOiBhbnkge1xyXG4gIHJldHVybiAoYnVmZmVyW3Bvc2l0aW9uXSlcclxuICAgIHwgKGJ1ZmZlcltwb3NpdGlvbiArIDFdIDw8IDgpXHJcbiAgICB8IChidWZmZXJbcG9zaXRpb24gKyAyXSA8PCAxNilcclxuICAgIHwgKGJ1ZmZlcltwb3NpdGlvbiArIDNdIDw8IDI0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZFVpbnQzMkxFKGJ1ZmZlcjogVWludDhBcnJheSwgcG9zaXRpb246IG51bWJlcik6IGFueSB7XHJcbiAgcmV0dXJuIChidWZmZXJbcG9zaXRpb25dKVxyXG4gICAgKyAoYnVmZmVyW3Bvc2l0aW9uICsgMV0gPDwgOClcclxuICAgICsgKGJ1ZmZlcltwb3NpdGlvbiArIDJdIDw8IDE2KVxyXG4gICAgKyAoKGJ1ZmZlcltwb3NpdGlvbiArIDNdIDw8IDI0KSA+Pj4gMCk7IC8vIFRoZSA+Pj4gMCBjb2VyY2VzIHRoZSB2YWx1ZSB0byB1bnNpZ25lZFxyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkVWludDY0TEUoYnVmZmVyOiBVaW50OEFycmF5LCBwb3NpdGlvbjogbnVtYmVyKTogYW55IHtcclxuICAvLyBUaGlzIGNhbm5vdCBiZSBkb25lIHVzaW5nIGJpdC1zaGlmdCBvcGVyYXRvcnMgaW4gSmF2YVNjcmlwdCwgYmVjYXVzZVxyXG4gIC8vIHRob3NlIGFsbCBpbXBsaWNpdGx5IGNvbnZlcnQgdG8gaW50MzJcclxuICBjb25zdCBoaWdoUGFydCA9IHJlYWRVaW50MzJMRShidWZmZXIsIHBvc2l0aW9uICsgNCk7XHJcbiAgaWYgKGhpZ2hQYXJ0ID4gbWF4U2FmZU51bWJlckhpZ2hQYXJ0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCByZWFkIHVpbnQ2NCB3aXRoIGhpZ2ggb3JkZXIgcGFydCAke2hpZ2hQYXJ0fSwgYmVjYXVzZSB0aGUgcmVzdWx0IHdvdWxkIGV4Y2VlZCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUi5gKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoaGlnaFBhcnQgKiB1aW50NjRIaWdoUGFydFNoaWZ0KSArIHJlYWRVaW50MzJMRShidWZmZXIsIHBvc2l0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZExFQjEyOChidWZmZXI6IFVpbnQ4QXJyYXksIHBvc2l0aW9uOiBudW1iZXIpIHtcclxuICBsZXQgcmVzdWx0ID0gMDtcclxuICBsZXQgc2hpZnQgPSAwO1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA0OyBpbmRleCsrKSB7XHJcbiAgICBjb25zdCBieXRlID0gYnVmZmVyW3Bvc2l0aW9uICsgaW5kZXhdO1xyXG4gICAgcmVzdWx0IHw9IChieXRlICYgMTI3KSA8PCBzaGlmdDtcclxuICAgIGlmIChieXRlIDwgMTI4KSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgc2hpZnQgKz0gNztcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbnVtTEVCMTI4Qnl0ZXModmFsdWU6IG51bWJlcikge1xyXG4gIHJldHVybiB2YWx1ZSA8IDEyOCA/IDFcclxuICAgIDogdmFsdWUgPCAxNjM4NCA/IDJcclxuICAgICAgOiB2YWx1ZSA8IDIwOTcxNTIgPyAzIDogNDtcclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIFJlbmRlckJhdGNoIHtcclxuICB1cGRhdGVkQ29tcG9uZW50cygpOiBBcnJheVJhbmdlPFJlbmRlclRyZWVEaWZmPjtcclxuICByZWZlcmVuY2VGcmFtZXMoKTogQXJyYXlSYW5nZTxSZW5kZXJUcmVlRnJhbWU+O1xyXG4gIGRpc3Bvc2VkQ29tcG9uZW50SWRzKCk6IEFycmF5UmFuZ2U8bnVtYmVyPjtcclxuICBkaXNwb3NlZEV2ZW50SGFuZGxlcklkcygpOiBBcnJheVJhbmdlPG51bWJlcj47XHJcblxyXG4gIHVwZGF0ZWRDb21wb25lbnRzRW50cnkodmFsdWVzOiBBcnJheVZhbHVlczxSZW5kZXJUcmVlRGlmZj4sIGluZGV4OiBudW1iZXIpOiBSZW5kZXJUcmVlRGlmZjtcclxuICByZWZlcmVuY2VGcmFtZXNFbnRyeSh2YWx1ZXM6IEFycmF5VmFsdWVzPFJlbmRlclRyZWVGcmFtZT4sIGluZGV4OiBudW1iZXIpOiBSZW5kZXJUcmVlRnJhbWU7XHJcbiAgZGlzcG9zZWRDb21wb25lbnRJZHNFbnRyeSh2YWx1ZXM6IEFycmF5VmFsdWVzPG51bWJlcj4sIGluZGV4OiBudW1iZXIpOiBudW1iZXI7XHJcbiAgZGlzcG9zZWRFdmVudEhhbmRsZXJJZHNFbnRyeSh2YWx1ZXM6IEFycmF5VmFsdWVzPG51bWJlcj4sIGluZGV4OiBudW1iZXIpOiBudW1iZXI7XHJcblxyXG4gIGRpZmZSZWFkZXI6IFJlbmRlclRyZWVEaWZmUmVhZGVyO1xyXG4gIGVkaXRSZWFkZXI6IFJlbmRlclRyZWVFZGl0UmVhZGVyO1xyXG4gIGZyYW1lUmVhZGVyOiBSZW5kZXJUcmVlRnJhbWVSZWFkZXI7XHJcbiAgYXJyYXlSYW5nZVJlYWRlcjogQXJyYXlSYW5nZVJlYWRlcjtcclxuICBhcnJheUJ1aWxkZXJTZWdtZW50UmVhZGVyOiBBcnJheUJ1aWxkZXJTZWdtZW50UmVhZGVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFycmF5UmFuZ2VSZWFkZXIge1xyXG4gIGNvdW50PFQ+KGFycmF5UmFuZ2U6IEFycmF5UmFuZ2U8VD4pOiBudW1iZXI7XHJcbiAgdmFsdWVzPFQ+KGFycmF5UmFuZ2U6IEFycmF5UmFuZ2U8VD4pOiBBcnJheVZhbHVlczxUPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcnJheUJ1aWxkZXJTZWdtZW50UmVhZGVyIHtcclxuICBvZmZzZXQ8VD4oYXJyYXlCdWlsZGVyU2VnbWVudDogQXJyYXlCdWlsZGVyU2VnbWVudDxUPik6IG51bWJlcjtcclxuICBjb3VudDxUPihhcnJheUJ1aWxkZXJTZWdtZW50OiBBcnJheUJ1aWxkZXJTZWdtZW50PFQ+KTogbnVtYmVyO1xyXG4gIHZhbHVlczxUPihhcnJheUJ1aWxkZXJTZWdtZW50OiBBcnJheUJ1aWxkZXJTZWdtZW50PFQ+KTogQXJyYXlWYWx1ZXM8VD47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVuZGVyVHJlZURpZmZSZWFkZXIge1xyXG4gIGNvbXBvbmVudElkKGRpZmY6IFJlbmRlclRyZWVEaWZmKTogbnVtYmVyO1xyXG4gIGVkaXRzKGRpZmY6IFJlbmRlclRyZWVEaWZmKTogQXJyYXlCdWlsZGVyU2VnbWVudDxSZW5kZXJUcmVlRWRpdD47XHJcbiAgZWRpdHNFbnRyeSh2YWx1ZXM6IEFycmF5VmFsdWVzPFJlbmRlclRyZWVFZGl0PiwgaW5kZXg6IG51bWJlcik6IFJlbmRlclRyZWVFZGl0O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlclRyZWVFZGl0UmVhZGVyIHtcclxuICBlZGl0VHlwZShlZGl0OiBSZW5kZXJUcmVlRWRpdCk6IEVkaXRUeXBlO1xyXG4gIHNpYmxpbmdJbmRleChlZGl0OiBSZW5kZXJUcmVlRWRpdCk6IG51bWJlcjtcclxuICBuZXdUcmVlSW5kZXgoZWRpdDogUmVuZGVyVHJlZUVkaXQpOiBudW1iZXI7XHJcbiAgbW92ZVRvU2libGluZ0luZGV4KGVkaXQ6IFJlbmRlclRyZWVFZGl0KTogbnVtYmVyO1xyXG4gIHJlbW92ZWRBdHRyaWJ1dGVOYW1lKGVkaXQ6IFJlbmRlclRyZWVFZGl0KTogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZW5kZXJUcmVlRnJhbWVSZWFkZXIge1xyXG4gIGZyYW1lVHlwZShmcmFtZTogUmVuZGVyVHJlZUZyYW1lKTogRnJhbWVUeXBlO1xyXG4gIHN1YnRyZWVMZW5ndGgoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSk6IG51bWJlcjtcclxuICBlbGVtZW50UmVmZXJlbmNlQ2FwdHVyZUlkKGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpOiBzdHJpbmcgfCBudWxsO1xyXG4gIGNvbXBvbmVudElkKGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpOiBudW1iZXI7XHJcbiAgZWxlbWVudE5hbWUoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSk6IHN0cmluZyB8IG51bGw7XHJcbiAgdGV4dENvbnRlbnQoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSk6IHN0cmluZyB8IG51bGw7XHJcbiAgbWFya3VwQ29udGVudChmcmFtZTogUmVuZGVyVHJlZUZyYW1lKTogc3RyaW5nO1xyXG4gIGF0dHJpYnV0ZU5hbWUoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSk6IHN0cmluZyB8IG51bGw7XHJcbiAgYXR0cmlidXRlVmFsdWUoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSk6IHN0cmluZyB8IG51bGw7XHJcbiAgYXR0cmlidXRlRXZlbnRIYW5kbGVySWQoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcnJheVJhbmdlPFQ+IHsgQXJyYXlSYW5nZV9fRE9fTk9UX0lNUExFTUVOVDogYW55IH1cclxuZXhwb3J0IGludGVyZmFjZSBBcnJheUJ1aWxkZXJTZWdtZW50PFQ+IHsgQXJyYXlCdWlsZGVyU2VnbWVudF9fRE9fTk9UX0lNUExFTUVOVDogYW55IH1cclxuZXhwb3J0IGludGVyZmFjZSBBcnJheVZhbHVlczxUPiB7IEFycmF5VmFsdWVzX19ET19OT1RfSU1QTEVNRU5UOiBhbnkgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZW5kZXJUcmVlRGlmZiB7IFJlbmRlclRyZWVEaWZmX19ET19OT1RfSU1QTEVNRU5UOiBhbnkgfVxyXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlclRyZWVGcmFtZSB7IFJlbmRlclRyZWVGcmFtZV9fRE9fTk9UX0lNUExFTUVOVDogYW55IH1cclxuZXhwb3J0IGludGVyZmFjZSBSZW5kZXJUcmVlRWRpdCB7IFJlbmRlclRyZWVFZGl0X19ET19OT1RfSU1QTEVNRU5UOiBhbnkgfVxyXG5cclxuZXhwb3J0IGVudW0gRWRpdFR5cGUge1xyXG4gIC8vIFRoZSB2YWx1ZXMgbXVzdCBiZSBrZXB0IGluIHN5bmMgd2l0aCB0aGUgLk5FVCBlcXVpdmFsZW50IGluIFJlbmRlclRyZWVFZGl0VHlwZS5jc1xyXG4gIHByZXBlbmRGcmFtZSA9IDEsXHJcbiAgcmVtb3ZlRnJhbWUgPSAyLFxyXG4gIHNldEF0dHJpYnV0ZSA9IDMsXHJcbiAgcmVtb3ZlQXR0cmlidXRlID0gNCxcclxuICB1cGRhdGVUZXh0ID0gNSxcclxuICBzdGVwSW4gPSA2LFxyXG4gIHN0ZXBPdXQgPSA3LFxyXG4gIHVwZGF0ZU1hcmt1cCA9IDgsXHJcbiAgcGVybXV0YXRpb25MaXN0RW50cnkgPSA5LFxyXG4gIHBlcm11dGF0aW9uTGlzdEVuZCA9IDEwLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBGcmFtZVR5cGUge1xyXG4gIC8vIFRoZSB2YWx1ZXMgbXVzdCBiZSBrZXB0IGluIHN5bmMgd2l0aCB0aGUgLk5FVCBlcXVpdmFsZW50IGluIFJlbmRlclRyZWVGcmFtZVR5cGUuY3NcclxuICBlbGVtZW50ID0gMSxcclxuICB0ZXh0ID0gMixcclxuICBhdHRyaWJ1dGUgPSAzLFxyXG4gIGNvbXBvbmVudCA9IDQsXHJcbiAgcmVnaW9uID0gNSxcclxuICBlbGVtZW50UmVmZXJlbmNlQ2FwdHVyZSA9IDYsXHJcbiAgbWFya3VwID0gOCxcclxufVxyXG4iLCJjb25zdCBuYXRpdmVEZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAnZnVuY3Rpb24nXHJcbiAgPyBuZXcgVGV4dERlY29kZXIoJ3V0Zi04JylcclxuICA6IG51bGw7XHJcblxyXG5leHBvcnQgY29uc3QgZGVjb2RlVXRmODogKGJ5dGVzOiBVaW50OEFycmF5KSA9PiBzdHJpbmdcclxuICA9IG5hdGl2ZURlY29kZXIgPyBuYXRpdmVEZWNvZGVyLmRlY29kZS5iaW5kKG5hdGl2ZURlY29kZXIpIDogZGVjb2RlSW1wbDtcclxuXHJcbi8qICFcclxuTG9naWMgaW4gZGVjb2RlSW1wbCBpcyBkZXJpdmVkIGZyb20gZmFzdC10ZXh0LWVuY29kaW5nXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9zYW10aG9yL2Zhc3QtdGV4dC1lbmNvZGluZ1xyXG5cclxuTGljZW5zZSBmb3IgZmFzdC10ZXh0LWVuY29kaW5nOiBBcGFjaGUgMi4wXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9zYW10aG9yL2Zhc3QtdGV4dC1lbmNvZGluZy9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiovXHJcblxyXG5mdW5jdGlvbiBkZWNvZGVJbXBsKGJ5dGVzOiBVaW50OEFycmF5KTogc3RyaW5nIHtcclxuICBsZXQgcG9zID0gMDtcclxuICBjb25zdCBsZW4gPSBieXRlcy5sZW5ndGg7XHJcbiAgY29uc3Qgb3V0OiBudW1iZXJbXSA9IFtdO1xyXG4gIGNvbnN0IHN1YnN0cmluZ3M6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIHdoaWxlIChwb3MgPCBsZW4pIHtcclxuICAgIGNvbnN0IGJ5dGUxID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgaWYgKGJ5dGUxID09PSAwKSB7XHJcbiAgICAgIGJyZWFrOyAvLyBOVUxMXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChieXRlMSAmIDB4ODApID09PSAwKSB7IC8vIDEtYnl0ZVxyXG4gICAgICBvdXQucHVzaChieXRlMSk7XHJcbiAgICB9IGVsc2UgaWYgKChieXRlMSAmIDB4ZTApID09PSAweGMwKSB7IC8vIDItYnl0ZVxyXG4gICAgICBjb25zdCBieXRlMiA9IGJ5dGVzW3BvcysrXSAmIDB4M2Y7XHJcbiAgICAgIG91dC5wdXNoKCgoYnl0ZTEgJiAweDFmKSA8PCA2KSB8IGJ5dGUyKTtcclxuICAgIH0gZWxzZSBpZiAoKGJ5dGUxICYgMHhmMCkgPT09IDB4ZTApIHtcclxuICAgICAgY29uc3QgYnl0ZTIgPSBieXRlc1twb3MrK10gJiAweDNmO1xyXG4gICAgICBjb25zdCBieXRlMyA9IGJ5dGVzW3BvcysrXSAmIDB4M2Y7XHJcbiAgICAgIG91dC5wdXNoKCgoYnl0ZTEgJiAweDFmKSA8PCAxMikgfCAoYnl0ZTIgPDwgNikgfCBieXRlMyk7XHJcbiAgICB9IGVsc2UgaWYgKChieXRlMSAmIDB4ZjgpID09PSAweGYwKSB7XHJcbiAgICAgIGNvbnN0IGJ5dGUyID0gYnl0ZXNbcG9zKytdICYgMHgzZjtcclxuICAgICAgY29uc3QgYnl0ZTMgPSBieXRlc1twb3MrK10gJiAweDNmO1xyXG4gICAgICBjb25zdCBieXRlNCA9IGJ5dGVzW3BvcysrXSAmIDB4M2Y7XHJcblxyXG4gICAgICAvLyB0aGlzIGNhbiBiZSA+IDB4ZmZmZiwgc28gcG9zc2libHkgZ2VuZXJhdGUgc3Vycm9nYXRlc1xyXG4gICAgICBsZXQgY29kZXBvaW50ID0gKChieXRlMSAmIDB4MDcpIDw8IDB4MTIpIHwgKGJ5dGUyIDw8IDB4MGMpIHwgKGJ5dGUzIDw8IDB4MDYpIHwgYnl0ZTQ7XHJcbiAgICAgIGlmIChjb2RlcG9pbnQgPiAweGZmZmYpIHtcclxuICAgICAgICAvLyBjb2RlcG9pbnQgJj0gfjB4MTAwMDA7XHJcbiAgICAgICAgY29kZXBvaW50IC09IDB4MTAwMDA7XHJcbiAgICAgICAgb3V0LnB1c2goKGNvZGVwb2ludCA+Pj4gMTApICYgMHgzZmYgfCAweGQ4MDApO1xyXG4gICAgICAgIGNvZGVwb2ludCA9IDB4ZGMwMCB8IGNvZGVwb2ludCAmIDB4M2ZmO1xyXG4gICAgICB9XHJcbiAgICAgIG91dC5wdXNoKGNvZGVwb2ludCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBGSVhNRTogd2UncmUgaWdub3JpbmcgdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL3NhbXRob3IvZmFzdC10ZXh0LWVuY29kaW5nL2lzc3Vlcy8xLFxyXG4gICAgLy8gbWFrZSBzdXJlIHRoZSAnb3V0JyBhcnJheSBuZXZlciBnZXRzIHRvbyBsb25nLiBXaGVuIGl0IHJlYWNoZXMgYSBsaW1pdCwgd2VcclxuICAgIC8vIHN0cmluZ2lmeSB3aGF0IHdlIGhhdmUgc28gZmFyIGFuZCBhcHBlbmQgdG8gYSBsaXN0IG9mIG91dHB1dHMuXHJcbiAgICBpZiAob3V0Lmxlbmd0aCA+IDEwMjQpIHtcclxuICAgICAgc3Vic3RyaW5ncy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgb3V0KSk7XHJcbiAgICAgIG91dC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3Vic3RyaW5ncy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgb3V0KSk7XHJcbiAgcmV0dXJuIHN1YnN0cmluZ3Muam9pbignJyk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZSAqL1xyXG5pbXBvcnQgJy4uL1BsYXRmb3JtL1BsYXRmb3JtJztcclxuaW1wb3J0ICcuLi9FbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IFJlbmRlckJhdGNoIH0gZnJvbSAnLi9SZW5kZXJCYXRjaC9SZW5kZXJCYXRjaCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSZW5kZXJlciB9IGZyb20gJy4vQnJvd3NlclJlbmRlcmVyJztcclxuaW1wb3J0IHsgdG9Mb2dpY2FsRWxlbWVudCwgTG9naWNhbEVsZW1lbnQgfSBmcm9tICcuL0xvZ2ljYWxFbGVtZW50cyc7XHJcblxyXG5pbnRlcmZhY2UgQnJvd3NlclJlbmRlcmVyUmVnaXN0cnkge1xyXG4gIFticm93c2VyUmVuZGVyZXJJZDogbnVtYmVyXTogQnJvd3NlclJlbmRlcmVyO1xyXG59XHJcbmNvbnN0IGJyb3dzZXJSZW5kZXJlcnM6IEJyb3dzZXJSZW5kZXJlclJlZ2lzdHJ5ID0ge307XHJcbmxldCBzaG91bGRSZXNldFNjcm9sbEFmdGVyTmV4dEJhdGNoID0gZmFsc2U7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoUm9vdENvbXBvbmVudFRvTG9naWNhbEVsZW1lbnQoYnJvd3NlclJlbmRlcmVySWQ6IG51bWJlciwgbG9naWNhbEVsZW1lbnQ6IExvZ2ljYWxFbGVtZW50LCBjb21wb25lbnRJZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgbGV0IGJyb3dzZXJSZW5kZXJlciA9IGJyb3dzZXJSZW5kZXJlcnNbYnJvd3NlclJlbmRlcmVySWRdO1xyXG4gIGlmICghYnJvd3NlclJlbmRlcmVyKSB7XHJcbiAgICBicm93c2VyUmVuZGVyZXIgPSBicm93c2VyUmVuZGVyZXJzW2Jyb3dzZXJSZW5kZXJlcklkXSA9IG5ldyBCcm93c2VyUmVuZGVyZXIoYnJvd3NlclJlbmRlcmVySWQpO1xyXG4gIH1cclxuXHJcbiAgYnJvd3NlclJlbmRlcmVyLmF0dGFjaFJvb3RDb21wb25lbnRUb0xvZ2ljYWxFbGVtZW50KGNvbXBvbmVudElkLCBsb2dpY2FsRWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hSb290Q29tcG9uZW50VG9FbGVtZW50KGVsZW1lbnRTZWxlY3Rvcjogc3RyaW5nLCBjb21wb25lbnRJZDogbnVtYmVyLCBicm93c2VyUmVuZGVyZXJJZD86IG51bWJlcik6IHZvaWQge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRTZWxlY3Rvcik7XHJcbiAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGFueSBlbGVtZW50IG1hdGNoaW5nIHNlbGVjdG9yICcke2VsZW1lbnRTZWxlY3Rvcn0nLmApO1xyXG4gIH1cclxuXHJcbiAgLy8gJ2FsbG93RXhpc3RpbmdDb250ZW50cycgdG8ga2VlcCBhbnkgcHJlcmVuZGVyZWQgY29udGVudCB1bnRpbCB3ZSBkbyB0aGUgZmlyc3QgY2xpZW50LXNpZGUgcmVuZGVyXHJcbiAgLy8gT25seSBjbGllbnQtc2lkZSBCbGF6b3Igc3VwcGxpZXMgYSBicm93c2VyIHJlbmRlcmVyIElEXHJcbiAgYXR0YWNoUm9vdENvbXBvbmVudFRvTG9naWNhbEVsZW1lbnQoYnJvd3NlclJlbmRlcmVySWQgfHwgMCwgdG9Mb2dpY2FsRWxlbWVudChlbGVtZW50LCAvKiBhbGxvdyBleGlzdGluZyBjb250ZW50cyAqLyB0cnVlKSwgY29tcG9uZW50SWQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQmF0Y2goYnJvd3NlclJlbmRlcmVySWQ6IG51bWJlciwgYmF0Y2g6IFJlbmRlckJhdGNoKTogdm9pZCB7XHJcbiAgY29uc3QgYnJvd3NlclJlbmRlcmVyID0gYnJvd3NlclJlbmRlcmVyc1ticm93c2VyUmVuZGVyZXJJZF07XHJcbiAgaWYgKCFicm93c2VyUmVuZGVyZXIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gYnJvd3NlciByZW5kZXJlciB3aXRoIElEICR7YnJvd3NlclJlbmRlcmVySWR9LmApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXJyYXlSYW5nZVJlYWRlciA9IGJhdGNoLmFycmF5UmFuZ2VSZWFkZXI7XHJcbiAgY29uc3QgdXBkYXRlZENvbXBvbmVudHNSYW5nZSA9IGJhdGNoLnVwZGF0ZWRDb21wb25lbnRzKCk7XHJcbiAgY29uc3QgdXBkYXRlZENvbXBvbmVudHNWYWx1ZXMgPSBhcnJheVJhbmdlUmVhZGVyLnZhbHVlcyh1cGRhdGVkQ29tcG9uZW50c1JhbmdlKTtcclxuICBjb25zdCB1cGRhdGVkQ29tcG9uZW50c0xlbmd0aCA9IGFycmF5UmFuZ2VSZWFkZXIuY291bnQodXBkYXRlZENvbXBvbmVudHNSYW5nZSk7XHJcbiAgY29uc3QgcmVmZXJlbmNlRnJhbWVzID0gYmF0Y2gucmVmZXJlbmNlRnJhbWVzKCk7XHJcbiAgY29uc3QgcmVmZXJlbmNlRnJhbWVzVmFsdWVzID0gYXJyYXlSYW5nZVJlYWRlci52YWx1ZXMocmVmZXJlbmNlRnJhbWVzKTtcclxuICBjb25zdCBkaWZmUmVhZGVyID0gYmF0Y2guZGlmZlJlYWRlcjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cGRhdGVkQ29tcG9uZW50c0xlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBkaWZmID0gYmF0Y2gudXBkYXRlZENvbXBvbmVudHNFbnRyeSh1cGRhdGVkQ29tcG9uZW50c1ZhbHVlcywgaSk7XHJcbiAgICBjb25zdCBjb21wb25lbnRJZCA9IGRpZmZSZWFkZXIuY29tcG9uZW50SWQoZGlmZik7XHJcbiAgICBjb25zdCBlZGl0cyA9IGRpZmZSZWFkZXIuZWRpdHMoZGlmZik7XHJcbiAgICBicm93c2VyUmVuZGVyZXIudXBkYXRlQ29tcG9uZW50KGJhdGNoLCBjb21wb25lbnRJZCwgZWRpdHMsIHJlZmVyZW5jZUZyYW1lc1ZhbHVlcyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkaXNwb3NlZENvbXBvbmVudElkc1JhbmdlID0gYmF0Y2guZGlzcG9zZWRDb21wb25lbnRJZHMoKTtcclxuICBjb25zdCBkaXNwb3NlZENvbXBvbmVudElkc1ZhbHVlcyA9IGFycmF5UmFuZ2VSZWFkZXIudmFsdWVzKGRpc3Bvc2VkQ29tcG9uZW50SWRzUmFuZ2UpO1xyXG4gIGNvbnN0IGRpc3Bvc2VkQ29tcG9uZW50SWRzTGVuZ3RoID0gYXJyYXlSYW5nZVJlYWRlci5jb3VudChkaXNwb3NlZENvbXBvbmVudElkc1JhbmdlKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3Bvc2VkQ29tcG9uZW50SWRzTGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudElkID0gYmF0Y2guZGlzcG9zZWRDb21wb25lbnRJZHNFbnRyeShkaXNwb3NlZENvbXBvbmVudElkc1ZhbHVlcywgaSk7XHJcbiAgICBicm93c2VyUmVuZGVyZXIuZGlzcG9zZUNvbXBvbmVudChjb21wb25lbnRJZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkaXNwb3NlZEV2ZW50SGFuZGxlcklkc1JhbmdlID0gYmF0Y2guZGlzcG9zZWRFdmVudEhhbmRsZXJJZHMoKTtcclxuICBjb25zdCBkaXNwb3NlZEV2ZW50SGFuZGxlcklkc1ZhbHVlcyA9IGFycmF5UmFuZ2VSZWFkZXIudmFsdWVzKGRpc3Bvc2VkRXZlbnRIYW5kbGVySWRzUmFuZ2UpO1xyXG4gIGNvbnN0IGRpc3Bvc2VkRXZlbnRIYW5kbGVySWRzTGVuZ3RoID0gYXJyYXlSYW5nZVJlYWRlci5jb3VudChkaXNwb3NlZEV2ZW50SGFuZGxlcklkc1JhbmdlKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3Bvc2VkRXZlbnRIYW5kbGVySWRzTGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGV2ZW50SGFuZGxlcklkID0gYmF0Y2guZGlzcG9zZWRFdmVudEhhbmRsZXJJZHNFbnRyeShkaXNwb3NlZEV2ZW50SGFuZGxlcklkc1ZhbHVlcywgaSk7XHJcbiAgICBicm93c2VyUmVuZGVyZXIuZGlzcG9zZUV2ZW50SGFuZGxlcihldmVudEhhbmRsZXJJZCk7XHJcbiAgfVxyXG5cclxuICByZXNldFNjcm9sbElmTmVlZGVkKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldFNjcm9sbEFmdGVyTmV4dEJhdGNoKCkge1xyXG4gIHNob3VsZFJlc2V0U2Nyb2xsQWZ0ZXJOZXh0QmF0Y2ggPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldFNjcm9sbElmTmVlZGVkKCkge1xyXG4gIGlmIChzaG91bGRSZXNldFNjcm9sbEFmdGVyTmV4dEJhdGNoKSB7XHJcbiAgICBzaG91bGRSZXNldFNjcm9sbEFmdGVyTmV4dEJhdGNoID0gZmFsc2U7XHJcblxyXG4gICAgLy8gVGhpcyBhc3N1bWVzIHRoZSBzY3JvbGxlciBpcyBvbiB0aGUgd2luZG93IGl0c2VsZi4gVGhlcmUgaXNuJ3QgYSBnZW5lcmFsIHdheSB0byBrbm93XHJcbiAgICAvLyBpZiBzb21lIG90aGVyIGVsZW1lbnQgaXMgcGxheWluZyB0aGUgcm9sZSBvZiB0aGUgcHJpbWFyeSBzY3JvbGwgcmVnaW9uLlxyXG4gICAgd2luZG93LnNjcm9sbFRvICYmIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnREZXNjcmlwdG9yIH0gZnJvbSAnLi9Ccm93c2VyUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBVSUV2ZW50QXJncyB9IGZyb20gJy4vRXZlbnRGb3JEb3ROZXQnO1xyXG5cclxudHlwZSBFdmVudERpc3BhdGNoZXIgPSAoZXZlbnREZXNjcmlwdG9yOiBFdmVudERlc2NyaXB0b3IsIGV2ZW50QXJnczogVUlFdmVudEFyZ3MpID0+IHZvaWQ7XHJcblxyXG5sZXQgZXZlbnREaXNwYXRjaGVySW5zdGFuY2U6IEV2ZW50RGlzcGF0Y2hlcjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGV2ZW50RGVzY3JpcHRvcjogRXZlbnREZXNjcmlwdG9yLCBldmVudEFyZ3M6IFVJRXZlbnRBcmdzKTogdm9pZCB7XHJcbiAgaWYgKCFldmVudERpc3BhdGNoZXJJbnN0YW5jZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdldmVudERpc3BhdGNoZXIgbm90IGluaXRpYWxpemVkLiBDYWxsIFxcJ3NldEV2ZW50RGlzcGF0Y2hlclxcJyB0byBjb25maWd1cmUgaXQuJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXZlbnREaXNwYXRjaGVySW5zdGFuY2UoZXZlbnREZXNjcmlwdG9yLCBldmVudEFyZ3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RXZlbnREaXNwYXRjaGVyKG5ld0Rpc3BhdGNoZXI6IChldmVudERlc2NyaXB0b3I6IEV2ZW50RGVzY3JpcHRvciwgZXZlbnRBcmdzOiBVSUV2ZW50QXJncykgPT4gUHJvbWlzZTx2b2lkPik6IHZvaWQge1xyXG4gIGV2ZW50RGlzcGF0Y2hlckluc3RhbmNlID0gbmV3RGlzcGF0Y2hlcjtcclxufVxyXG4iLCIvLyBpbXBvcnQgJ0Bkb3RuZXQvanNpbnRlcm9wJzsgSW1wb3J0ZWQgZWxzZXdoZXJlXHJcbmltcG9ydCB7IHJlc2V0U2Nyb2xsQWZ0ZXJOZXh0QmF0Y2ggfSBmcm9tICcuLi9SZW5kZXJpbmcvUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBFdmVudERlbGVnYXRvciB9IGZyb20gJy4uL1JlbmRlcmluZy9FdmVudERlbGVnYXRvcic7XHJcblxyXG5sZXQgaGFzRW5hYmxlZE5hdmlnYXRpb25JbnRlcmNlcHRpb24gPSBmYWxzZTtcclxubGV0IGhhc1JlZ2lzdGVyZWROYXZpZ2F0aW9uRXZlbnRMaXN0ZW5lcnMgPSBmYWxzZTtcclxuXHJcbi8vIFdpbGwgYmUgaW5pdGlhbGl6ZWQgb25jZSBzb21lb25lIHJlZ2lzdGVyc1xyXG5sZXQgbm90aWZ5TG9jYXRpb25DaGFuZ2VkQ2FsbGJhY2s6ICgodXJpOiBzdHJpbmcsIGludGVyY2VwdGVkOiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+KSB8IG51bGwgPSBudWxsO1xyXG5cclxuLy8gVGhlc2UgYXJlIHRoZSBmdW5jdGlvbnMgd2UncmUgbWFraW5nIGF2YWlsYWJsZSBmb3IgaW52b2NhdGlvbiBmcm9tIC5ORVRcclxuZXhwb3J0IGNvbnN0IGludGVybmFsRnVuY3Rpb25zID0ge1xyXG4gIGxpc3RlbkZvck5hdmlnYXRpb25FdmVudHMsXHJcbiAgZW5hYmxlTmF2aWdhdGlvbkludGVyY2VwdGlvbixcclxuICBuYXZpZ2F0ZVRvLFxyXG4gIGdldEJhc2VVUkk6ICgpID0+IGRvY3VtZW50LmJhc2VVUkksXHJcbiAgZ2V0TG9jYXRpb25IcmVmOiAoKSA9PiBsb2NhdGlvbi5ocmVmLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gbGlzdGVuRm9yTmF2aWdhdGlvbkV2ZW50cyhjYWxsYmFjazogKHVyaTogc3RyaW5nLCBpbnRlcmNlcHRlZDogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPikge1xyXG4gIG5vdGlmeUxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcblxyXG4gIGlmIChoYXNSZWdpc3RlcmVkTmF2aWdhdGlvbkV2ZW50TGlzdGVuZXJzKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBoYXNSZWdpc3RlcmVkTmF2aWdhdGlvbkV2ZW50TGlzdGVuZXJzID0gdHJ1ZTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiBub3RpZnlMb2NhdGlvbkNoYW5nZWQoZmFsc2UpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlTmF2aWdhdGlvbkludGVyY2VwdGlvbigpIHtcclxuICBoYXNFbmFibGVkTmF2aWdhdGlvbkludGVyY2VwdGlvbiA9IHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hUb0V2ZW50RGVsZWdhdG9yKGV2ZW50RGVsZWdhdG9yOiBFdmVudERlbGVnYXRvcikge1xyXG4gIC8vIFdlIG5lZWQgdG8gcmVzcG9uZCB0byBjbGlja3Mgb24gPGE+IGVsZW1lbnRzICphZnRlciogdGhlIEV2ZW50RGVsZWdhdG9yIGhhcyBmaW5pc2hlZFxyXG4gIC8vIHJ1bm5pbmcgaXRzIHNpbXVsYXRlZCBidWJibGluZyBwcm9jZXNzIHNvIHRoYXQgd2UgY2FuIHJlc3BlY3QgYW55IHByZXZlbnREZWZhdWx0IHJlcXVlc3RzLlxyXG4gIC8vIFNvIGluc3RlYWQgb2YgcmVnaXN0ZXJpbmcgb3VyIG93biBuYXRpdmUgZXZlbnQsIHJlZ2lzdGVyIHVzaW5nIHRoZSBFdmVudERlbGVnYXRvci5cclxuICBldmVudERlbGVnYXRvci5ub3RpZnlBZnRlckNsaWNrKGV2ZW50ID0+IHtcclxuICAgIGlmICghaGFzRW5hYmxlZE5hdmlnYXRpb25JbnRlcmNlcHRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5idXR0b24gIT09IDAgfHwgZXZlbnRIYXNTcGVjaWFsS2V5KGV2ZW50KSkge1xyXG4gICAgICAvLyBEb24ndCBzdG9wIGN0cmwvbWV0YS1jbGljayAoZXRjKSBmcm9tIG9wZW5pbmcgbGlua3MgaW4gbmV3IHRhYnMvd2luZG93c1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEludGVyY2VwdCBjbGlja3Mgb24gYWxsIDxhPiBlbGVtZW50cyB3aGVyZSB0aGUgaHJlZiBpcyB3aXRoaW4gdGhlIDxiYXNlIGhyZWY+IFVSSSBzcGFjZVxyXG4gICAgLy8gV2UgbXVzdCBleHBsaWNpdGx5IGNoZWNrIGlmIGl0IGhhcyBhbiAnaHJlZicgYXR0cmlidXRlLCBiZWNhdXNlIGlmIGl0IGRvZXNuJ3QsIHRoZSByZXN1bHQgbWlnaHQgYmUgbnVsbCBvciBhbiBlbXB0eSBzdHJpbmcgZGVwZW5kaW5nIG9uIHRoZSBicm93c2VyXHJcbiAgICBjb25zdCBhbmNob3JUYXJnZXQgPSBmaW5kQ2xvc2VzdEFuY2VzdG9yKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50IHwgbnVsbCwgJ0EnKSBhcyBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGw7XHJcbiAgICBjb25zdCBocmVmQXR0cmlidXRlTmFtZSA9ICdocmVmJztcclxuICAgIGlmIChhbmNob3JUYXJnZXQgJiYgYW5jaG9yVGFyZ2V0Lmhhc0F0dHJpYnV0ZShocmVmQXR0cmlidXRlTmFtZSkpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0QXR0cmlidXRlVmFsdWUgPSBhbmNob3JUYXJnZXQuZ2V0QXR0cmlidXRlKCd0YXJnZXQnKTtcclxuICAgICAgY29uc3Qgb3BlbnNJblNhbWVGcmFtZSA9ICF0YXJnZXRBdHRyaWJ1dGVWYWx1ZSB8fCB0YXJnZXRBdHRyaWJ1dGVWYWx1ZSA9PT0gJ19zZWxmJztcclxuICAgICAgaWYgKCFvcGVuc0luU2FtZUZyYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBocmVmID0gYW5jaG9yVGFyZ2V0LmdldEF0dHJpYnV0ZShocmVmQXR0cmlidXRlTmFtZSkhO1xyXG4gICAgICBjb25zdCBhYnNvbHV0ZUhyZWYgPSB0b0Fic29sdXRlVXJpKGhyZWYpO1xyXG5cclxuICAgICAgaWYgKGlzV2l0aGluQmFzZVVyaVNwYWNlKGFic29sdXRlSHJlZikpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHBlcmZvcm1JbnRlcm5hbE5hdmlnYXRpb24oYWJzb2x1dGVIcmVmLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVUbyh1cmk6IHN0cmluZywgZm9yY2VMb2FkOiBib29sZWFuKSB7XHJcbiAgY29uc3QgYWJzb2x1dGVVcmkgPSB0b0Fic29sdXRlVXJpKHVyaSk7XHJcblxyXG4gIGlmICghZm9yY2VMb2FkICYmIGlzV2l0aGluQmFzZVVyaVNwYWNlKGFic29sdXRlVXJpKSkge1xyXG4gICAgLy8gSXQncyBhbiBpbnRlcm5hbCBVUkwsIHNvIGRvIGNsaWVudC1zaWRlIG5hdmlnYXRpb25cclxuICAgIHBlcmZvcm1JbnRlcm5hbE5hdmlnYXRpb24oYWJzb2x1dGVVcmksIGZhbHNlKTtcclxuICB9IGVsc2UgaWYgKGZvcmNlTG9hZCAmJiBsb2NhdGlvbi5ocmVmID09PSB1cmkpIHtcclxuICAgIC8vIEZvcmNlLWxvYWRpbmcgdGhlIHNhbWUgVVJMIHlvdSdyZSBhbHJlYWR5IG9uIHJlcXVpcmVzIHNwZWNpYWwgaGFuZGxpbmcgdG8gYXZvaWRcclxuICAgIC8vIHRyaWdnZXJpbmcgYnJvd3Nlci1zcGVjaWZpYyBiZWhhdmlvciBpc3N1ZXMuXHJcbiAgICAvLyBGb3IgZGV0YWlscyBhYm91dCB3aGF0IHRoaXMgZml4ZXMgYW5kIHdoeSwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hc3BuZXQvQXNwTmV0Q29yZS9wdWxsLzEwODM5XHJcbiAgICBjb25zdCB0ZW1wb3JhcnlVcmkgPSB1cmkgKyAnPyc7XHJcbiAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCAnJywgdGVtcG9yYXJ5VXJpKTtcclxuICAgIGxvY2F0aW9uLnJlcGxhY2UodXJpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gSXQncyBlaXRoZXIgYW4gZXh0ZXJuYWwgVVJMLCBvciBmb3JjZUxvYWQgaXMgcmVxdWVzdGVkLCBzbyBkbyBhIGZ1bGwgcGFnZSBsb2FkXHJcbiAgICBsb2NhdGlvbi5ocmVmID0gdXJpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGVyZm9ybUludGVybmFsTmF2aWdhdGlvbihhYnNvbHV0ZUludGVybmFsSHJlZjogc3RyaW5nLCBpbnRlcmNlcHRlZExpbms6IGJvb2xlYW4pIHtcclxuICAvLyBTaW5jZSB0aGlzIHdhcyAqbm90KiB0cmlnZ2VyZWQgYnkgYSBiYWNrL2ZvcndhcmQgZ2VzdHVyZSAodGhhdCBnb2VzIHRocm91Z2ggYSBkaWZmZXJlbnRcclxuICAvLyBjb2RlIHBhdGggc3RhcnRpbmcgd2l0aCBhIHBvcHN0YXRlIGV2ZW50KSwgd2UgZG9uJ3Qgd2FudCB0byBwcmVzZXJ2ZSB0aGUgY3VycmVudCBzY3JvbGxcclxuICAvLyBwb3NpdGlvbiwgc28gcmVzZXQgaXQuXHJcbiAgLy8gVG8gYXZvaWQgdWdseSBmbGlja2VyaW5nIGVmZmVjdHMsIHdlIGRvbid0IHdhbnQgdG8gY2hhbmdlIHRoZSBzY3JvbGwgcG9zaXRpb24gdW50aWwgdGhlXHJcbiAgLy8gd2UgcmVuZGVyIHRoZSBuZXcgcGFnZS4gQXMgYSBiZXN0IGFwcHJveGltYXRpb24sIHdhaXQgdW50aWwgdGhlIG5leHQgYmF0Y2guXHJcbiAgcmVzZXRTY3JvbGxBZnRlck5leHRCYXRjaCgpO1xyXG5cclxuICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAvKiBpZ25vcmVkIHRpdGxlICovICcnLCBhYnNvbHV0ZUludGVybmFsSHJlZik7XHJcbiAgbm90aWZ5TG9jYXRpb25DaGFuZ2VkKGludGVyY2VwdGVkTGluayk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG5vdGlmeUxvY2F0aW9uQ2hhbmdlZChpbnRlcmNlcHRlZExpbms6IGJvb2xlYW4pIHtcclxuICBpZiAobm90aWZ5TG9jYXRpb25DaGFuZ2VkQ2FsbGJhY2spIHtcclxuICAgIGF3YWl0IG5vdGlmeUxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrKGxvY2F0aW9uLmhyZWYsIGludGVyY2VwdGVkTGluayk7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgdGVzdEFuY2hvcjogSFRNTEFuY2hvckVsZW1lbnQ7XHJcbmZ1bmN0aW9uIHRvQWJzb2x1dGVVcmkocmVsYXRpdmVVcmk6IHN0cmluZykge1xyXG4gIHRlc3RBbmNob3IgPSB0ZXN0QW5jaG9yIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICB0ZXN0QW5jaG9yLmhyZWYgPSByZWxhdGl2ZVVyaTtcclxuICByZXR1cm4gdGVzdEFuY2hvci5ocmVmO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kQ2xvc2VzdEFuY2VzdG9yKGVsZW1lbnQ6IEVsZW1lbnQgfCBudWxsLCB0YWdOYW1lOiBzdHJpbmcpIHtcclxuICByZXR1cm4gIWVsZW1lbnRcclxuICAgID8gbnVsbFxyXG4gICAgOiBlbGVtZW50LnRhZ05hbWUgPT09IHRhZ05hbWVcclxuICAgICAgPyBlbGVtZW50XHJcbiAgICAgIDogZmluZENsb3Nlc3RBbmNlc3RvcihlbGVtZW50LnBhcmVudEVsZW1lbnQsIHRhZ05hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1dpdGhpbkJhc2VVcmlTcGFjZShocmVmOiBzdHJpbmcpIHtcclxuICBjb25zdCBiYXNlVXJpV2l0aFRyYWlsaW5nU2xhc2ggPSB0b0Jhc2VVcmlXaXRoVHJhaWxpbmdTbGFzaChkb2N1bWVudC5iYXNlVVJJISk7IC8vIFRPRE86IE1pZ2h0IGJhc2VVUkkgcmVhbGx5IGJlIG51bGw/XHJcbiAgcmV0dXJuIGhyZWYuc3RhcnRzV2l0aChiYXNlVXJpV2l0aFRyYWlsaW5nU2xhc2gpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0Jhc2VVcmlXaXRoVHJhaWxpbmdTbGFzaChiYXNlVXJpOiBzdHJpbmcpIHtcclxuICByZXR1cm4gYmFzZVVyaS5zdWJzdHIoMCwgYmFzZVVyaS5sYXN0SW5kZXhPZignLycpICsgMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2ZW50SGFzU3BlY2lhbEtleShldmVudDogTW91c2VFdmVudCkge1xyXG4gIHJldHVybiBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5tZXRhS2V5O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
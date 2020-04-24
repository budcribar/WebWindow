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
    connection.on("ReceiveMessage", function (message) { return IPC_1.receiveMessage(message); });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9BYm9ydENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9EZWZhdWx0SHR0cENsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFzcG5ldC9zaWduYWxyL2Rpc3QvZXNtL0RlZmF1bHRSZWNvbm5lY3RQb2xpY3kuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9IYW5kc2hha2VQcm90b2NvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFzcG5ldC9zaWduYWxyL2Rpc3QvZXNtL0h0dHBDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9IdHRwQ29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFzcG5ldC9zaWduYWxyL2Rpc3QvZXNtL0h1YkNvbm5lY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9IdWJDb25uZWN0aW9uQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFzcG5ldC9zaWduYWxyL2Rpc3QvZXNtL0lIdWJQcm90b2NvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFzcG5ldC9zaWduYWxyL2Rpc3QvZXNtL0lMb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9JVHJhbnNwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXNwbmV0L3NpZ25hbHIvZGlzdC9lc20vSnNvbkh1YlByb3RvY29sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXNwbmV0L3NpZ25hbHIvZGlzdC9lc20vTG9nZ2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFzcG5ldC9zaWduYWxyL2Rpc3QvZXNtL0xvbmdQb2xsaW5nVHJhbnNwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXNwbmV0L3NpZ25hbHIvZGlzdC9lc20vTm9kZUh0dHBDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9TZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXNwbmV0L3NpZ25hbHIvZGlzdC9lc20vU3ViamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFzcG5ldC9zaWduYWxyL2Rpc3QvZXNtL1RleHRNZXNzYWdlRm9ybWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXNwbmV0L3NpZ25hbHIvZGlzdC9lc20vVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9XZWJTb2NrZXRUcmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhc3BuZXQvc2lnbmFsci9kaXN0L2VzbS9YaHJIdHRwQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXNwbmV0L3NpZ25hbHIvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb3RuZXQvanNpbnRlcm9wL2Rpc3QvTWljcm9zb2Z0LkpTSW50ZXJvcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWFycmF5YnVmZmVyL2xpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jvb3QuRGVza3RvcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSVBDLnRzIiwid2VicGFjazovLy8uL3Vwc3RyZWFtL2FzcG5ldGNvcmUvd2ViLmpzL3NyYy9FbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi91cHN0cmVhbS9hc3BuZXRjb3JlL3dlYi5qcy9zcmMvR2xvYmFsRXhwb3J0cy50cyIsIndlYnBhY2s6Ly8vLi91cHN0cmVhbS9hc3BuZXRjb3JlL3dlYi5qcy9zcmMvUmVuZGVyaW5nL0Jyb3dzZXJSZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi91cHN0cmVhbS9hc3BuZXRjb3JlL3dlYi5qcy9zcmMvUmVuZGVyaW5nL0VsZW1lbnRSZWZlcmVuY2VDYXB0dXJlLnRzIiwid2VicGFjazovLy8uL3Vwc3RyZWFtL2FzcG5ldGNvcmUvd2ViLmpzL3NyYy9SZW5kZXJpbmcvRXZlbnREZWxlZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vdXBzdHJlYW0vYXNwbmV0Y29yZS93ZWIuanMvc3JjL1JlbmRlcmluZy9FdmVudEZpZWxkSW5mby50cyIsIndlYnBhY2s6Ly8vLi91cHN0cmVhbS9hc3BuZXRjb3JlL3dlYi5qcy9zcmMvUmVuZGVyaW5nL0V2ZW50Rm9yRG90TmV0LnRzIiwid2VicGFjazovLy8uL3Vwc3RyZWFtL2FzcG5ldGNvcmUvd2ViLmpzL3NyYy9SZW5kZXJpbmcvTG9naWNhbEVsZW1lbnRzLnRzIiwid2VicGFjazovLy8uL3Vwc3RyZWFtL2FzcG5ldGNvcmUvd2ViLmpzL3NyYy9SZW5kZXJpbmcvUmVuZGVyQmF0Y2gvT3V0T2ZQcm9jZXNzUmVuZGVyQmF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vdXBzdHJlYW0vYXNwbmV0Y29yZS93ZWIuanMvc3JjL1JlbmRlcmluZy9SZW5kZXJCYXRjaC9SZW5kZXJCYXRjaC50cyIsIndlYnBhY2s6Ly8vLi91cHN0cmVhbS9hc3BuZXRjb3JlL3dlYi5qcy9zcmMvUmVuZGVyaW5nL1JlbmRlckJhdGNoL1V0ZjhEZWNvZGVyLnRzIiwid2VicGFjazovLy8uL3Vwc3RyZWFtL2FzcG5ldGNvcmUvd2ViLmpzL3NyYy9SZW5kZXJpbmcvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdXBzdHJlYW0vYXNwbmV0Y29yZS93ZWIuanMvc3JjL1JlbmRlcmluZy9SZW5kZXJlckV2ZW50RGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi91cHN0cmVhbS9hc3BuZXRjb3JlL3dlYi5qcy9zcmMvU2VydmljZXMvTmF2aWdhdGlvbk1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbEVXOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLG9EQUFXO0FBQ2hDLGNBQWMsbUJBQU8sQ0FBQyxnREFBUztBQUMvQixjQUFjLG1CQUFPLENBQUMsZ0RBQVM7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQW1EO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3pELENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUFDLEtBQWlCO0lBQzNDLE9BQU8sS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUMxRSxDQUFDIiwiZmlsZSI6InJlbW90ZS5ibGF6b3IuZGVza3RvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0Jvb3QuRGVza3RvcC50c1wiKTtcbiIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuLy8gUm91Z2ggcG9seWZpbGwgb2YgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Fib3J0Q29udHJvbGxlclxyXG4vLyBXZSBkb24ndCBhY3R1YWxseSBldmVyIHVzZSB0aGUgQVBJIGJlaW5nIHBvbHlmaWxsZWQsIHdlIGFsd2F5cyB1c2UgdGhlIHBvbHlmaWxsIGJlY2F1c2VcclxuLy8gaXQncyBhIHZlcnkgbmV3IEFQSSByaWdodCBub3cuXHJcbi8vIE5vdCBleHBvcnRlZCBmcm9tIGluZGV4LlxyXG4vKiogQHByaXZhdGUgKi9cclxudmFyIEFib3J0Q29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFib3J0Q29udHJvbGxlcigpIHtcclxuICAgICAgICB0aGlzLmlzQWJvcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25hYm9ydCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBBYm9ydENvbnRyb2xsZXIucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Fib3J0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Fib3J0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vbmFib3J0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uYWJvcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJvcnRDb250cm9sbGVyLnByb3RvdHlwZSwgXCJzaWduYWxcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYm9ydENvbnRyb2xsZXIucHJvdG90eXBlLCBcImFib3J0ZWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0Fib3J0ZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQWJvcnRDb250cm9sbGVyO1xyXG59KCkpO1xyXG5leHBvcnQgeyBBYm9ydENvbnRyb2xsZXIgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWJvcnRDb250cm9sbGVyLmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCB7IEFib3J0RXJyb3IgfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCIuL0h0dHBDbGllbnRcIjtcclxuaW1wb3J0IHsgTm9kZUh0dHBDbGllbnQgfSBmcm9tIFwiLi9Ob2RlSHR0cENsaWVudFwiO1xyXG5pbXBvcnQgeyBYaHJIdHRwQ2xpZW50IH0gZnJvbSBcIi4vWGhySHR0cENsaWVudFwiO1xyXG4vKiogRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLkh0dHBDbGllbnR9LiAqL1xyXG52YXIgRGVmYXVsdEh0dHBDbGllbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRGVmYXVsdEh0dHBDbGllbnQsIF9zdXBlcik7XHJcbiAgICAvKiogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIEBhc3BuZXQvc2lnbmFsci5EZWZhdWx0SHR0cENsaWVudH0sIHVzaW5nIHRoZSBwcm92aWRlZCB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLklMb2dnZXJ9IHRvIGxvZyBtZXNzYWdlcy4gKi9cclxuICAgIGZ1bmN0aW9uIERlZmF1bHRIdHRwQ2xpZW50KGxvZ2dlcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBfdGhpcy5odHRwQ2xpZW50ID0gbmV3IFhockh0dHBDbGllbnQobG9nZ2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF90aGlzLmh0dHBDbGllbnQgPSBuZXcgTm9kZUh0dHBDbGllbnQobG9nZ2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBEZWZhdWx0SHR0cENsaWVudC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCBhYm9ydCB3YXMgbm90IHNpZ25hbGVkIGJlZm9yZSBjYWxsaW5nIHNlbmRcclxuICAgICAgICBpZiAocmVxdWVzdC5hYm9ydFNpZ25hbCAmJiByZXF1ZXN0LmFib3J0U2lnbmFsLmFib3J0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBYm9ydEVycm9yKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlcXVlc3QubWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBtZXRob2QgZGVmaW5lZC5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlcXVlc3QudXJsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyB1cmwgZGVmaW5lZC5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnNlbmQocmVxdWVzdCk7XHJcbiAgICB9O1xyXG4gICAgRGVmYXVsdEh0dHBDbGllbnQucHJvdG90eXBlLmdldENvb2tpZVN0cmluZyA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldENvb2tpZVN0cmluZyh1cmwpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEZWZhdWx0SHR0cENsaWVudDtcclxufShIdHRwQ2xpZW50KSk7XHJcbmV4cG9ydCB7IERlZmF1bHRIdHRwQ2xpZW50IH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURlZmF1bHRIdHRwQ2xpZW50LmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuLy8gMCwgMiwgMTAsIDMwIHNlY29uZCBkZWxheXMgYmVmb3JlIHJlY29ubmVjdCBhdHRlbXB0cy5cclxudmFyIERFRkFVTFRfUkVUUllfREVMQVlTX0lOX01JTExJU0VDT05EUyA9IFswLCAyMDAwLCAxMDAwMCwgMzAwMDAsIG51bGxdO1xyXG4vKiogQHByaXZhdGUgKi9cclxudmFyIERlZmF1bHRSZWNvbm5lY3RQb2xpY3kgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEZWZhdWx0UmVjb25uZWN0UG9saWN5KHJldHJ5RGVsYXlzKSB7XHJcbiAgICAgICAgdGhpcy5yZXRyeURlbGF5cyA9IHJldHJ5RGVsYXlzICE9PSB1bmRlZmluZWQgPyByZXRyeURlbGF5cy5jb25jYXQoW251bGxdKSA6IERFRkFVTFRfUkVUUllfREVMQVlTX0lOX01JTExJU0VDT05EUztcclxuICAgIH1cclxuICAgIERlZmF1bHRSZWNvbm5lY3RQb2xpY3kucHJvdG90eXBlLm5leHRSZXRyeURlbGF5SW5NaWxsaXNlY29uZHMgPSBmdW5jdGlvbiAocHJldmlvdXNSZXRyeUNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlEZWxheXNbcHJldmlvdXNSZXRyeUNvdW50XTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRGVmYXVsdFJlY29ubmVjdFBvbGljeTtcclxufSgpKTtcclxuZXhwb3J0IHsgRGVmYXVsdFJlY29ubmVjdFBvbGljeSB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1EZWZhdWx0UmVjb25uZWN0UG9saWN5LmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbi8qKiBFcnJvciB0aHJvd24gd2hlbiBhbiBIVFRQIHJlcXVlc3QgZmFpbHMuICovXHJcbnZhciBIdHRwRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSHR0cEVycm9yLCBfc3VwZXIpO1xyXG4gICAgLyoqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEBhc3BuZXQvc2lnbmFsci5IdHRwRXJyb3J9LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvck1lc3NhZ2UgQSBkZXNjcmlwdGl2ZSBlcnJvciBtZXNzYWdlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1c0NvZGUgVGhlIEhUVFAgc3RhdHVzIGNvZGUgcmVwcmVzZW50ZWQgYnkgdGhpcyBlcnJvci5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gSHR0cEVycm9yKGVycm9yTWVzc2FnZSwgc3RhdHVzQ29kZSkge1xyXG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciB0cnVlUHJvdG8gPSBfbmV3VGFyZ2V0LnByb3RvdHlwZTtcclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVycm9yTWVzc2FnZSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICBfdGhpcy5fX3Byb3RvX18gPSB0cnVlUHJvdG87XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEh0dHBFcnJvcjtcclxufShFcnJvcikpO1xyXG5leHBvcnQgeyBIdHRwRXJyb3IgfTtcclxuLyoqIEVycm9yIHRocm93biB3aGVuIGEgdGltZW91dCBlbGFwc2VzLiAqL1xyXG52YXIgVGltZW91dEVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRpbWVvdXRFcnJvciwgX3N1cGVyKTtcclxuICAgIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBAYXNwbmV0L3NpZ25hbHIuVGltZW91dEVycm9yfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JNZXNzYWdlIEEgZGVzY3JpcHRpdmUgZXJyb3IgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gVGltZW91dEVycm9yKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlID09PSB2b2lkIDApIHsgZXJyb3JNZXNzYWdlID0gXCJBIHRpbWVvdXQgb2NjdXJyZWQuXCI7IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciB0cnVlUHJvdG8gPSBfbmV3VGFyZ2V0LnByb3RvdHlwZTtcclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVycm9yTWVzc2FnZSkgfHwgdGhpcztcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICBfdGhpcy5fX3Byb3RvX18gPSB0cnVlUHJvdG87XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRpbWVvdXRFcnJvcjtcclxufShFcnJvcikpO1xyXG5leHBvcnQgeyBUaW1lb3V0RXJyb3IgfTtcclxuLyoqIEVycm9yIHRocm93biB3aGVuIGFuIGFjdGlvbiBpcyBhYm9ydGVkLiAqL1xyXG52YXIgQWJvcnRFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhBYm9ydEVycm9yLCBfc3VwZXIpO1xyXG4gICAgLyoqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEFib3J0RXJyb3J9LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvck1lc3NhZ2UgQSBkZXNjcmlwdGl2ZSBlcnJvciBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBBYm9ydEVycm9yKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlID09PSB2b2lkIDApIHsgZXJyb3JNZXNzYWdlID0gXCJBbiBhYm9ydCBvY2N1cnJlZC5cIjsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHRydWVQcm90byA9IF9uZXdUYXJnZXQucHJvdG90eXBlO1xyXG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZXJyb3JNZXNzYWdlKSB8fCB0aGlzO1xyXG4gICAgICAgIC8vIFdvcmthcm91bmQgaXNzdWUgaW4gVHlwZXNjcmlwdCBjb21waWxlclxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM5NjUjaXNzdWVjb21tZW50LTI3ODU3MDIwMFxyXG4gICAgICAgIF90aGlzLl9fcHJvdG9fXyA9IHRydWVQcm90bztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQWJvcnRFcnJvcjtcclxufShFcnJvcikpO1xyXG5leHBvcnQgeyBBYm9ydEVycm9yIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVycm9ycy5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbmltcG9ydCB7IFRleHRNZXNzYWdlRm9ybWF0IH0gZnJvbSBcIi4vVGV4dE1lc3NhZ2VGb3JtYXRcIjtcclxuaW1wb3J0IHsgaXNBcnJheUJ1ZmZlciB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG52YXIgSGFuZHNoYWtlUHJvdG9jb2wgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIYW5kc2hha2VQcm90b2NvbCgpIHtcclxuICAgIH1cclxuICAgIC8vIEhhbmRzaGFrZSByZXF1ZXN0IGlzIGFsd2F5cyBKU09OXHJcbiAgICBIYW5kc2hha2VQcm90b2NvbC5wcm90b3R5cGUud3JpdGVIYW5kc2hha2VSZXF1ZXN0ID0gZnVuY3Rpb24gKGhhbmRzaGFrZVJlcXVlc3QpIHtcclxuICAgICAgICByZXR1cm4gVGV4dE1lc3NhZ2VGb3JtYXQud3JpdGUoSlNPTi5zdHJpbmdpZnkoaGFuZHNoYWtlUmVxdWVzdCkpO1xyXG4gICAgfTtcclxuICAgIEhhbmRzaGFrZVByb3RvY29sLnByb3RvdHlwZS5wYXJzZUhhbmRzaGFrZVJlc3BvbnNlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB2YXIgcmVzcG9uc2VNZXNzYWdlO1xyXG4gICAgICAgIHZhciBtZXNzYWdlRGF0YTtcclxuICAgICAgICB2YXIgcmVtYWluaW5nRGF0YTtcclxuICAgICAgICBpZiAoaXNBcnJheUJ1ZmZlcihkYXRhKSB8fCAodHlwZW9mIEJ1ZmZlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgQnVmZmVyKSkge1xyXG4gICAgICAgICAgICAvLyBGb3JtYXQgaXMgYmluYXJ5IGJ1dCBzdGlsbCBuZWVkIHRvIHJlYWQgSlNPTiB0ZXh0IGZyb20gaGFuZHNoYWtlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIHZhciBiaW5hcnlEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XHJcbiAgICAgICAgICAgIHZhciBzZXBhcmF0b3JJbmRleCA9IGJpbmFyeURhdGEuaW5kZXhPZihUZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3JDb2RlKTtcclxuICAgICAgICAgICAgaWYgKHNlcGFyYXRvckluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWVzc2FnZSBpcyBpbmNvbXBsZXRlLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb250ZW50IGJlZm9yZSBzZXBhcmF0b3IgaXMgaGFuZHNoYWtlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIC8vIG9wdGlvbmFsIGNvbnRlbnQgYWZ0ZXIgaXMgYWRkaXRpb25hbCBtZXNzYWdlc1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VMZW5ndGggPSBzZXBhcmF0b3JJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBiaW5hcnlEYXRhLnNsaWNlKDAsIHJlc3BvbnNlTGVuZ3RoKSk7XHJcbiAgICAgICAgICAgIHJlbWFpbmluZ0RhdGEgPSAoYmluYXJ5RGF0YS5ieXRlTGVuZ3RoID4gcmVzcG9uc2VMZW5ndGgpID8gYmluYXJ5RGF0YS5zbGljZShyZXNwb25zZUxlbmd0aCkuYnVmZmVyIDogbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0RGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIHZhciBzZXBhcmF0b3JJbmRleCA9IHRleHREYXRhLmluZGV4T2YoVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgaWYgKHNlcGFyYXRvckluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWVzc2FnZSBpcyBpbmNvbXBsZXRlLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb250ZW50IGJlZm9yZSBzZXBhcmF0b3IgaXMgaGFuZHNoYWtlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIC8vIG9wdGlvbmFsIGNvbnRlbnQgYWZ0ZXIgaXMgYWRkaXRpb25hbCBtZXNzYWdlc1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VMZW5ndGggPSBzZXBhcmF0b3JJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhID0gdGV4dERhdGEuc3Vic3RyaW5nKDAsIHJlc3BvbnNlTGVuZ3RoKTtcclxuICAgICAgICAgICAgcmVtYWluaW5nRGF0YSA9ICh0ZXh0RGF0YS5sZW5ndGggPiByZXNwb25zZUxlbmd0aCkgPyB0ZXh0RGF0YS5zdWJzdHJpbmcocmVzcG9uc2VMZW5ndGgpIDogbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQXQgdGhpcyBwb2ludCB3ZSBzaG91bGQgaGF2ZSBqdXN0IHRoZSBzaW5nbGUgaGFuZHNoYWtlIG1lc3NhZ2VcclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSBUZXh0TWVzc2FnZUZvcm1hdC5wYXJzZShtZXNzYWdlRGF0YSk7XHJcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZShtZXNzYWdlc1swXSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgYSBoYW5kc2hha2UgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzcG9uc2VNZXNzYWdlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgLy8gbXVsdGlwbGUgbWVzc2FnZXMgY291bGQgaGF2ZSBhcnJpdmVkIHdpdGggaGFuZHNoYWtlXHJcbiAgICAgICAgLy8gcmV0dXJuIGFkZGl0aW9uYWwgZGF0YSB0byBiZSBwYXJzZWQgYXMgdXN1YWwsIG9yIG51bGwgaWYgYWxsIHBhcnNlZFxyXG4gICAgICAgIHJldHVybiBbcmVtYWluaW5nRGF0YSwgcmVzcG9uc2VNZXNzYWdlXTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSGFuZHNoYWtlUHJvdG9jb2w7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEhhbmRzaGFrZVByb3RvY29sIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUhhbmRzaGFrZVByb3RvY29sLmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuLyoqIFJlcHJlc2VudHMgYW4gSFRUUCByZXNwb25zZS4gKi9cclxudmFyIEh0dHBSZXNwb25zZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEh0dHBSZXNwb25zZShzdGF0dXNDb2RlLCBzdGF0dXNUZXh0LCBjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcclxuICAgICAgICB0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSHR0cFJlc3BvbnNlO1xyXG59KCkpO1xyXG5leHBvcnQgeyBIdHRwUmVzcG9uc2UgfTtcclxuLyoqIEFic3RyYWN0aW9uIG92ZXIgYW4gSFRUUCBjbGllbnQuXHJcbiAqXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgYW4gYWJzdHJhY3Rpb24gb3ZlciBhbiBIVFRQIGNsaWVudCBzbyB0aGF0IGEgZGlmZmVyZW50IGltcGxlbWVudGF0aW9uIGNhbiBiZSBwcm92aWRlZCBvbiBkaWZmZXJlbnQgcGxhdGZvcm1zLlxyXG4gKi9cclxudmFyIEh0dHBDbGllbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIdHRwQ2xpZW50KCkge1xyXG4gICAgfVxyXG4gICAgSHR0cENsaWVudC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoX19hc3NpZ24oe30sIG9wdGlvbnMsIHsgbWV0aG9kOiBcIkdFVFwiLCB1cmw6IHVybCB9KSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cENsaWVudC5wcm90b3R5cGUucG9zdCA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKF9fYXNzaWduKHt9LCBvcHRpb25zLCB7IG1ldGhvZDogXCJQT1NUXCIsIHVybDogdXJsIH0pKTtcclxuICAgIH07XHJcbiAgICBIdHRwQ2xpZW50LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZChfX2Fzc2lnbih7fSwgb3B0aW9ucywgeyBtZXRob2Q6IFwiREVMRVRFXCIsIHVybDogdXJsIH0pKTtcclxuICAgIH07XHJcbiAgICAvKiogR2V0cyBhbGwgY29va2llcyB0aGF0IGFwcGx5IHRvIHRoZSBzcGVjaWZpZWQgVVJMLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIFVSTCB0aGF0IHRoZSBjb29raWVzIGFyZSB2YWxpZCBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZyBjb250YWluaW5nIGFsbCB0aGUga2V5LXZhbHVlIGNvb2tpZSBwYWlycyBmb3IgdGhlIHNwZWNpZmllZCBVUkwuXHJcbiAgICAgKi9cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIEh0dHBDbGllbnQucHJvdG90eXBlLmdldENvb2tpZVN0cmluZyA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSHR0cENsaWVudDtcclxufSgpKTtcclxuZXhwb3J0IHsgSHR0cENsaWVudCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IdHRwQ2xpZW50LmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5pbXBvcnQgeyBEZWZhdWx0SHR0cENsaWVudCB9IGZyb20gXCIuL0RlZmF1bHRIdHRwQ2xpZW50XCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBIdHRwVHJhbnNwb3J0VHlwZSwgVHJhbnNmZXJGb3JtYXQgfSBmcm9tIFwiLi9JVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IExvbmdQb2xsaW5nVHJhbnNwb3J0IH0gZnJvbSBcIi4vTG9uZ1BvbGxpbmdUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgU2VydmVyU2VudEV2ZW50c1RyYW5zcG9ydCB9IGZyb20gXCIuL1NlcnZlclNlbnRFdmVudHNUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgQXJnLCBjcmVhdGVMb2dnZXIsIFBsYXRmb3JtIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgV2ViU29ja2V0VHJhbnNwb3J0IH0gZnJvbSBcIi4vV2ViU29ja2V0VHJhbnNwb3J0XCI7XHJcbnZhciBNQVhfUkVESVJFQ1RTID0gMTAwO1xyXG52YXIgV2ViU29ja2V0TW9kdWxlID0gbnVsbDtcclxudmFyIEV2ZW50U291cmNlTW9kdWxlID0gbnVsbDtcclxuaWYgKFBsYXRmb3JtLmlzTm9kZSAmJiB0eXBlb2YgcmVxdWlyZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgLy8gSW4gb3JkZXIgdG8gaWdub3JlIHRoZSBkeW5hbWljIHJlcXVpcmUgaW4gd2VicGFjayBidWlsZHMgd2UgbmVlZCB0byBkbyB0aGlzIG1hZ2ljXHJcbiAgICAvLyBAdHMtaWdub3JlOiBUUyBkb2Vzbid0IGtub3cgYWJvdXQgdGhlc2UgbmFtZXNcclxuICAgIHZhciByZXF1aXJlRnVuYyA9IHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fID09PSBcImZ1bmN0aW9uXCIgPyBfX25vbl93ZWJwYWNrX3JlcXVpcmVfXyA6IHJlcXVpcmU7XHJcbiAgICBXZWJTb2NrZXRNb2R1bGUgPSByZXF1aXJlRnVuYyhcIndzXCIpO1xyXG4gICAgRXZlbnRTb3VyY2VNb2R1bGUgPSByZXF1aXJlRnVuYyhcImV2ZW50c291cmNlXCIpO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG52YXIgSHR0cENvbm5lY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIdHRwQ29ubmVjdGlvbih1cmwsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSB7fTtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZCh1cmwsIFwidXJsXCIpO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gY3JlYXRlTG9nZ2VyKG9wdGlvbnMubG9nZ2VyKTtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLnJlc29sdmVVcmwodXJsKTtcclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICBvcHRpb25zLmxvZ01lc3NhZ2VDb250ZW50ID0gb3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudCB8fCBmYWxzZTtcclxuICAgICAgICBpZiAoIVBsYXRmb3JtLmlzTm9kZSAmJiB0eXBlb2YgV2ViU29ja2V0ICE9PSBcInVuZGVmaW5lZFwiICYmICFvcHRpb25zLldlYlNvY2tldCkge1xyXG4gICAgICAgICAgICBvcHRpb25zLldlYlNvY2tldCA9IFdlYlNvY2tldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoUGxhdGZvcm0uaXNOb2RlICYmICFvcHRpb25zLldlYlNvY2tldCkge1xyXG4gICAgICAgICAgICBpZiAoV2ViU29ja2V0TW9kdWxlKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLldlYlNvY2tldCA9IFdlYlNvY2tldE1vZHVsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVBsYXRmb3JtLmlzTm9kZSAmJiB0eXBlb2YgRXZlbnRTb3VyY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgIW9wdGlvbnMuRXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5FdmVudFNvdXJjZSA9IEV2ZW50U291cmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChQbGF0Zm9ybS5pc05vZGUgJiYgIW9wdGlvbnMuRXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBFdmVudFNvdXJjZU1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5FdmVudFNvdXJjZSA9IEV2ZW50U291cmNlTW9kdWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaHR0cENsaWVudCA9IG9wdGlvbnMuaHR0cENsaWVudCB8fCBuZXcgRGVmYXVsdEh0dHBDbGllbnQodGhpcy5sb2dnZXIpO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXRlID0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi87XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5vbnJlY2VpdmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25jbG9zZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBIdHRwQ29ubmVjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAodHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlLCBtZXNzYWdlO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2ZlckZvcm1hdCA9IHRyYW5zZmVyRm9ybWF0IHx8IFRyYW5zZmVyRm9ybWF0LkJpbmFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJnLmlzSW4odHJhbnNmZXJGb3JtYXQsIFRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU3RhcnRpbmcgY29ubmVjdGlvbiB3aXRoIHRyYW5zZmVyIGZvcm1hdCAnXCIgKyBUcmFuc2ZlckZvcm1hdFt0cmFuc2ZlckZvcm1hdF0gKyBcIicuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUgIT09IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IHN0YXJ0IGFuIEh0dHBDb25uZWN0aW9uIHRoYXQgaXMgbm90IGluIHRoZSAnRGlzY29ubmVjdGVkJyBzdGF0ZS5cIikpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9IFwiQ29ubmVjdGluZyBcIiAvKiBDb25uZWN0aW5nICovO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJuYWxQcm9taXNlID0gdGhpcy5zdGFydEludGVybmFsKHRyYW5zZmVyRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zdGFydEludGVybmFsUHJvbWlzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMuY29ubmVjdGlvblN0YXRlID09PSBcIkRpc2Nvbm5lY3RpbmdcIiAvKiBEaXNjb25uZWN0aW5nICovKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkZhaWxlZCB0byBzdGFydCB0aGUgSHR0cENvbm5lY3Rpb24gYmVmb3JlIHN0b3AoKSB3YXMgY2FsbGVkLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBjYW5ub3QgYXdhaXQgc3RvcFByb21pc2UgaW5zaWRlIHN0YXJ0SW50ZXJuYWwgc2luY2Ugc3RvcEludGVybmFsIGF3YWl0cyB0aGUgc3RhcnRJbnRlcm5hbFByb21pc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc3RvcFByb21pc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2Fubm90IGF3YWl0IHN0b3BQcm9taXNlIGluc2lkZSBzdGFydEludGVybmFsIHNpbmNlIHN0b3BJbnRlcm5hbCBhd2FpdHMgdGhlIHN0YXJ0SW50ZXJuYWxQcm9taXNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0ZSAhPT0gXCJDb25uZWN0ZWRcIiAvKiBDb25uZWN0ZWQgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkh0dHBDb25uZWN0aW9uLnN0YXJ0SW50ZXJuYWwgY29tcGxldGVkIGdyYWNlZnVsbHkgYnV0IGRpZG4ndCBlbnRlciB0aGUgY29ubmVjdGlvbiBpbnRvIHRoZSBjb25uZWN0ZWQgc3RhdGUhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBDb25uZWN0aW9uLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUgIT09IFwiQ29ubmVjdGVkXCIgLyogQ29ubmVjdGVkICovKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW5ub3Qgc2VuZCBkYXRhIGlmIHRoZSBjb25uZWN0aW9uIGlzIG5vdCBpbiB0aGUgJ0Nvbm5lY3RlZCcgU3RhdGUuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVHJhbnNwb3J0IHdpbGwgbm90IGJlIG51bGwgaWYgc3RhdGUgaXMgY29ubmVjdGVkXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cENvbm5lY3Rpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJDYWxsIHRvIEh0dHBDb25uZWN0aW9uLnN0b3AoXCIgKyBlcnJvciArIFwiKSBpZ25vcmVkIGJlY2F1c2UgdGhlIGNvbm5lY3Rpb24gaXMgYWxyZWFkeSBpbiB0aGUgZGlzY29ubmVjdGVkIHN0YXRlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlc29sdmUoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlID09PSBcIkRpc2Nvbm5lY3RpbmdcIiAvKiBEaXNjb25uZWN0aW5nICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ2FsbCB0byBIdHRwQ29ubmVjdGlvbi5zdG9wKFwiICsgZXJyb3IgKyBcIikgaWdub3JlZCBiZWNhdXNlIHRoZSBjb25uZWN0aW9uIGlzIGFscmVhZHkgaW4gdGhlIGRpc2Nvbm5lY3Rpbmcgc3RhdGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuc3RvcFByb21pc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXRlID0gXCJEaXNjb25uZWN0aW5nXCIgLyogRGlzY29ubmVjdGluZyAqLztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBjb21wbGV0ZSBzdG9wKCkgdW50aWwgc3RvcENvbm5lY3Rpb24oKSBjb21wbGV0ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdG9wUHJvbWlzZVJlc29sdmVyID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3BJbnRlcm5hbCBzaG91bGQgbmV2ZXIgdGhyb3cgc28ganVzdCBvYnNlcnZlIGl0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnN0b3BJbnRlcm5hbChlcnJvcildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcEludGVybmFsIHNob3VsZCBuZXZlciB0aHJvdyBzbyBqdXN0IG9ic2VydmUgaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zdG9wUHJvbWlzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cENvbm5lY3Rpb24ucHJvdG90eXBlLnN0b3BJbnRlcm5hbCA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVfMSwgZV8yO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgZXJyb3IgYXMgc29vbiBhcyBwb3NzaWJsZSBvdGhlcndpc2UgdGhlcmUgaXMgYSByYWNlIGJldHdlZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHRyYW5zcG9ydCBjbG9zaW5nIGFuZCBwcm92aWRpbmcgYW4gZXJyb3IgYW5kIHRoZSBlcnJvciBmcm9tIGEgY2xvc2UgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSB3b3VsZCBwcmVmZXIgdGhlIGNsb3NlIG1lc3NhZ2UgZXJyb3IuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcEVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc3RhcnRJbnRlcm5hbFByb21pc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudHJhbnNwb3J0KSByZXR1cm4gWzMgLypicmVhayovLCA5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFs1LCA3LCAsIDhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy50cmFuc3BvcnQuc3RvcCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgXCJIdHRwQ29ubmVjdGlvbi50cmFuc3BvcnQuc3RvcCgpIHRocmV3IGVycm9yICdcIiArIGVfMiArIFwiJy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcENvbm5lY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkh0dHBDb25uZWN0aW9uLnRyYW5zcG9ydCBpcyB1bmRlZmluZWQgaW4gSHR0cENvbm5lY3Rpb24uc3RvcCgpIGJlY2F1c2Ugc3RhcnQoKSBmYWlsZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BDb25uZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwQ29ubmVjdGlvbi5wcm90b3R5cGUuc3RhcnRJbnRlcm5hbCA9IGZ1bmN0aW9uICh0cmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHVybCwgbmVnb3RpYXRlUmVzcG9uc2UsIHJlZGlyZWN0cywgX2xvb3BfMSwgdGhpc18xLCBlXzM7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRoaXMuYmFzZVVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbkZhY3RvcnkgPSB0aGlzLm9wdGlvbnMuYWNjZXNzVG9rZW5GYWN0b3J5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDEyLCAsIDEzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLnNraXBOZWdvdGlhdGlvbikgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMub3B0aW9ucy50cmFuc3BvcnQgPT09IEh0dHBUcmFuc3BvcnRUeXBlLldlYlNvY2tldHMpKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBhZGQgYSBjb25uZWN0aW9uIElEIGluIHRoaXMgY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRoaXMuY29uc3RydWN0VHJhbnNwb3J0KEh0dHBUcmFuc3BvcnRUeXBlLldlYlNvY2tldHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBzaG91bGQganVzdCBjYWxsIGNvbm5lY3QgZGlyZWN0bHkgaW4gdGhpcyBjYXNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBmYWxsYmFjayBvciBuZWdvdGlhdGUgaW4gdGhpcyBjYXNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnRyYW5zcG9ydC5jb25uZWN0KHVybCwgdHJhbnNmZXJGb3JtYXQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBqdXN0IGNhbGwgY29ubmVjdCBkaXJlY3RseSBpbiB0aGlzIGNhc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIGZhbGxiYWNrIG9yIG5lZ290aWF0ZSBpbiB0aGlzIGNhc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiB0aHJvdyBuZXcgRXJyb3IoXCJOZWdvdGlhdGlvbiBjYW4gb25seSBiZSBza2lwcGVkIHdoZW4gdXNpbmcgdGhlIFdlYlNvY2tldCB0cmFuc3BvcnQgZGlyZWN0bHkuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFszIC8qYnJlYWsqLywgMTFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnb3RpYXRlUmVzcG9uc2UgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8xID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjY2Vzc1Rva2VuXzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXNfMS5nZXROZWdvdGlhdGlvblJlc3BvbnNlKHVybCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWdvdGlhdGVSZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSB1c2VyIHRyaWVzIHRvIHN0b3AgdGhlIGNvbm5lY3Rpb24gd2hlbiBpdCBpcyBiZWluZyBzdGFydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc18xLmNvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0aW5nXCIgLyogRGlzY29ubmVjdGluZyAqLyB8fCB0aGlzXzEuY29ubmVjdGlvblN0YXRlID09PSBcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBjb25uZWN0aW9uIHdhcyBzdG9wcGVkIGR1cmluZyBuZWdvdGlhdGlvbi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmVnb3RpYXRlUmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobmVnb3RpYXRlUmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5lZ290aWF0ZVJlc3BvbnNlLlByb3RvY29sVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRldGVjdGVkIGEgY29ubmVjdGlvbiBhdHRlbXB0IHRvIGFuIEFTUC5ORVQgU2lnbmFsUiBTZXJ2ZXIuIFRoaXMgY2xpZW50IG9ubHkgc3VwcG9ydHMgY29ubmVjdGluZyB0byBhbiBBU1AuTkVUIENvcmUgU2lnbmFsUiBTZXJ2ZXIuIFNlZSBodHRwczovL2FrYS5tcy9zaWduYWxyLWNvcmUtZGlmZmVyZW5jZXMgZm9yIGRldGFpbHMuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5lZ290aWF0ZVJlc3BvbnNlLnVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IG5lZ290aWF0ZVJlc3BvbnNlLnVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZWdvdGlhdGVSZXNwb25zZS5hY2Nlc3NUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuXzEgPSBuZWdvdGlhdGVSZXNwb25zZS5hY2Nlc3NUb2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXzEuYWNjZXNzVG9rZW5GYWN0b3J5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gYWNjZXNzVG9rZW5fMTsgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0cysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXzEgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzUgLyp5aWVsZCoqLywgX2xvb3BfMSgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5lZ290aWF0ZVJlc3BvbnNlLnVybCAmJiByZWRpcmVjdHMgPCBNQVhfUkVESVJFQ1RTKSByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0cyA9PT0gTUFYX1JFRElSRUNUUyAmJiBuZWdvdGlhdGVSZXNwb25zZS51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5lZ290aWF0ZSByZWRpcmVjdGlvbiBsaW1pdCBleGNlZWRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uSWQgPSBuZWdvdGlhdGVSZXNwb25zZS5jb25uZWN0aW9uSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY3JlYXRlVHJhbnNwb3J0KHVybCwgdGhpcy5vcHRpb25zLnRyYW5zcG9ydCwgbmVnb3RpYXRlUmVzcG9uc2UsIHRyYW5zZmVyRm9ybWF0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDExO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zcG9ydCBpbnN0YW5jZW9mIExvbmdQb2xsaW5nVHJhbnNwb3J0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVzLmluaGVyZW50S2VlcEFsaXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5vbnJlY2VpdmUgPSB0aGlzLm9ucmVjZWl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQub25jbG9zZSA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5zdG9wQ29ubmVjdGlvbihlKTsgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlID09PSBcIkNvbm5lY3RpbmcgXCIgLyogQ29ubmVjdGluZyAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSBjb25uZWN0aW9uIHRyYW5zaXRpb25zIHRvIHRoZSBjb25uZWN0ZWQgc3RhdGUgcHJpb3IgdG8gY29tcGxldGluZyB0aGlzLnN0YXJ0SW50ZXJuYWxQcm9taXNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnQoKSB3aWxsIGhhbmRsZSB0aGUgY2FzZSB3aGVuIHN0b3Agd2FzIGNhbGxlZCBhbmQgc3RhcnRJbnRlcm5hbCBleGl0cyBzdGlsbCBpbiB0aGUgZGlzY29ubmVjdGluZyBzdGF0ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJUaGUgSHR0cENvbm5lY3Rpb24gY29ubmVjdGVkIHN1Y2Nlc3NmdWxseS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9IFwiQ29ubmVjdGVkXCIgLyogQ29ubmVjdGVkICovO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEzXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgXCJGYWlsZWQgdG8gc3RhcnQgdGhlIGNvbm5lY3Rpb246IFwiICsgZV8zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUgPSBcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlamVjdChlXzMpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBDb25uZWN0aW9uLnByb3RvdHlwZS5nZXROZWdvdGlhdGlvblJlc3BvbnNlID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hLCBoZWFkZXJzLCB0b2tlbiwgbmVnb3RpYXRlVXJsLCByZXNwb25zZSwgZV80O1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWNjZXNzVG9rZW5GYWN0b3J5KSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5hY2Nlc3NUb2tlbkZhY3RvcnkoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzID0gKF9hID0ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FbXCJBdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIgKyB0b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnb3RpYXRlVXJsID0gdGhpcy5yZXNvbHZlTmVnb3RpYXRlVXJsKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJTZW5kaW5nIG5lZ290aWF0aW9uIHJlcXVlc3Q6IFwiICsgbmVnb3RpYXRlVXJsICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzMsIDUsICwgNl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmh0dHBDbGllbnQucG9zdChuZWdvdGlhdGVVcmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgc3RhdHVzIGNvZGUgcmV0dXJuZWQgZnJvbSBuZWdvdGlhdGUgXCIgKyByZXNwb25zZS5zdGF0dXNDb2RlKSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBKU09OLnBhcnNlKHJlc3BvbnNlLmNvbnRlbnQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfNCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBcIkZhaWxlZCB0byBjb21wbGV0ZSBuZWdvdGlhdGlvbiB3aXRoIHRoZSBzZXJ2ZXI6IFwiICsgZV80KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVqZWN0KGVfNCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlQ29ubmVjdFVybCA9IGZ1bmN0aW9uICh1cmwsIGNvbm5lY3Rpb25JZCkge1xyXG4gICAgICAgIGlmICghY29ubmVjdGlvbklkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmwgKyAodXJsLmluZGV4T2YoXCI/XCIpID09PSAtMSA/IFwiP1wiIDogXCImXCIpICsgKFwiaWQ9XCIgKyBjb25uZWN0aW9uSWQpO1xyXG4gICAgfTtcclxuICAgIEh0dHBDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVUcmFuc3BvcnQgPSBmdW5jdGlvbiAodXJsLCByZXF1ZXN0ZWRUcmFuc3BvcnQsIG5lZ290aWF0ZVJlc3BvbnNlLCByZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3RVcmwsIHRyYW5zcG9ydEV4Y2VwdGlvbnMsIHRyYW5zcG9ydHMsIF9pLCB0cmFuc3BvcnRzXzEsIGVuZHBvaW50LCB0cmFuc3BvcnQsIGV4XzEsIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RVcmwgPSB0aGlzLmNyZWF0ZUNvbm5lY3RVcmwodXJsLCBuZWdvdGlhdGVSZXNwb25zZS5jb25uZWN0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNJVHJhbnNwb3J0KHJlcXVlc3RlZFRyYW5zcG9ydCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ29ubmVjdGlvbiB3YXMgcHJvdmlkZWQgYW4gaW5zdGFuY2Ugb2YgSVRyYW5zcG9ydCwgdXNpbmcgdGhhdCBkaXJlY3RseS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gcmVxdWVzdGVkVHJhbnNwb3J0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnRyYW5zcG9ydC5jb25uZWN0KGNvbm5lY3RVcmwsIHJlcXVlc3RlZFRyYW5zZmVyRm9ybWF0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydEV4Y2VwdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0cyA9IG5lZ290aWF0ZVJlc3BvbnNlLmF2YWlsYWJsZVRyYW5zcG9ydHMgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pID0gMCwgdHJhbnNwb3J0c18xID0gdHJhbnNwb3J0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX2kgPCB0cmFuc3BvcnRzXzEubGVuZ3RoKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludCA9IHRyYW5zcG9ydHNfMVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbNCwgOSwgLCAxMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQgPSB0aGlzLnJlc29sdmVUcmFuc3BvcnQoZW5kcG9pbnQsIHJlcXVlc3RlZFRyYW5zcG9ydCwgcmVxdWVzdGVkVHJhbnNmZXJGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0eXBlb2YgdHJhbnNwb3J0ID09PSBcIm51bWJlclwiKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdGhpcy5jb25zdHJ1Y3RUcmFuc3BvcnQodHJhbnNwb3J0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhbmVnb3RpYXRlUmVzcG9uc2UuY29ubmVjdGlvbklkKSByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXROZWdvdGlhdGlvblJlc3BvbnNlKHVybCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnb3RpYXRlUmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RVcmwgPSB0aGlzLmNyZWF0ZUNvbm5lY3RVcmwodXJsLCBuZWdvdGlhdGVSZXNwb25zZS5jb25uZWN0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnRyYW5zcG9ydC5jb25uZWN0KGNvbm5lY3RVcmwsIHJlcXVlc3RlZFRyYW5zZmVyRm9ybWF0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4XzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgXCJGYWlsZWQgdG8gc3RhcnQgdGhlIHRyYW5zcG9ydCAnXCIgKyBlbmRwb2ludC50cmFuc3BvcnQgKyBcIic6IFwiICsgZXhfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ290aWF0ZVJlc3BvbnNlLmNvbm5lY3Rpb25JZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0RXhjZXB0aW9ucy5wdXNoKGVuZHBvaW50LnRyYW5zcG9ydCArIFwiIGZhaWxlZDogXCIgKyBleF8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlICE9PSBcIkNvbm5lY3RpbmcgXCIgLyogQ29ubmVjdGluZyAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiRmFpbGVkIHRvIHNlbGVjdCB0cmFuc3BvcnQgYmVmb3JlIHN0b3AoKSB3YXMgY2FsbGVkLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2krKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zcG9ydEV4Y2VwdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBzZXJ2ZXIgd2l0aCBhbnkgb2YgdGhlIGF2YWlsYWJsZSB0cmFuc3BvcnRzLiBcIiArIHRyYW5zcG9ydEV4Y2VwdGlvbnMuam9pbihcIiBcIikpKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vbmUgb2YgdGhlIHRyYW5zcG9ydHMgc3VwcG9ydGVkIGJ5IHRoZSBjbGllbnQgYXJlIHN1cHBvcnRlZCBieSB0aGUgc2VydmVyLlwiKSldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwQ29ubmVjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0VHJhbnNwb3J0ID0gZnVuY3Rpb24gKHRyYW5zcG9ydCkge1xyXG4gICAgICAgIHN3aXRjaCAodHJhbnNwb3J0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgSHR0cFRyYW5zcG9ydFR5cGUuV2ViU29ja2V0czpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLldlYlNvY2tldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidXZWJTb2NrZXQnIGlzIG5vdCBzdXBwb3J0ZWQgaW4geW91ciBlbnZpcm9ubWVudC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYlNvY2tldFRyYW5zcG9ydCh0aGlzLmh0dHBDbGllbnQsIHRoaXMuYWNjZXNzVG9rZW5GYWN0b3J5LCB0aGlzLmxvZ2dlciwgdGhpcy5vcHRpb25zLmxvZ01lc3NhZ2VDb250ZW50IHx8IGZhbHNlLCB0aGlzLm9wdGlvbnMuV2ViU29ja2V0KTtcclxuICAgICAgICAgICAgY2FzZSBIdHRwVHJhbnNwb3J0VHlwZS5TZXJ2ZXJTZW50RXZlbnRzOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuRXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInRXZlbnRTb3VyY2UnIGlzIG5vdCBzdXBwb3J0ZWQgaW4geW91ciBlbnZpcm9ubWVudC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNlcnZlclNlbnRFdmVudHNUcmFuc3BvcnQodGhpcy5odHRwQ2xpZW50LCB0aGlzLmFjY2Vzc1Rva2VuRmFjdG9yeSwgdGhpcy5sb2dnZXIsIHRoaXMub3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudCB8fCBmYWxzZSwgdGhpcy5vcHRpb25zLkV2ZW50U291cmNlKTtcclxuICAgICAgICAgICAgY2FzZSBIdHRwVHJhbnNwb3J0VHlwZS5Mb25nUG9sbGluZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTG9uZ1BvbGxpbmdUcmFuc3BvcnQodGhpcy5odHRwQ2xpZW50LCB0aGlzLmFjY2Vzc1Rva2VuRmFjdG9yeSwgdGhpcy5sb2dnZXIsIHRoaXMub3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudCB8fCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHRyYW5zcG9ydDogXCIgKyB0cmFuc3BvcnQgKyBcIi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEh0dHBDb25uZWN0aW9uLnByb3RvdHlwZS5yZXNvbHZlVHJhbnNwb3J0ID0gZnVuY3Rpb24gKGVuZHBvaW50LCByZXF1ZXN0ZWRUcmFuc3BvcnQsIHJlcXVlc3RlZFRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgdmFyIHRyYW5zcG9ydCA9IEh0dHBUcmFuc3BvcnRUeXBlW2VuZHBvaW50LnRyYW5zcG9ydF07XHJcbiAgICAgICAgaWYgKHRyYW5zcG9ydCA9PT0gbnVsbCB8fCB0cmFuc3BvcnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU2tpcHBpbmcgdHJhbnNwb3J0ICdcIiArIGVuZHBvaW50LnRyYW5zcG9ydCArIFwiJyBiZWNhdXNlIGl0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBjbGllbnQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHRyYW5zZmVyRm9ybWF0cyA9IGVuZHBvaW50LnRyYW5zZmVyRm9ybWF0cy5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIFRyYW5zZmVyRm9ybWF0W3NdOyB9KTtcclxuICAgICAgICAgICAgaWYgKHRyYW5zcG9ydE1hdGNoZXMocmVxdWVzdGVkVHJhbnNwb3J0LCB0cmFuc3BvcnQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmZXJGb3JtYXRzLmluZGV4T2YocmVxdWVzdGVkVHJhbnNmZXJGb3JtYXQpID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHRyYW5zcG9ydCA9PT0gSHR0cFRyYW5zcG9ydFR5cGUuV2ViU29ja2V0cyAmJiAhdGhpcy5vcHRpb25zLldlYlNvY2tldCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRyYW5zcG9ydCA9PT0gSHR0cFRyYW5zcG9ydFR5cGUuU2VydmVyU2VudEV2ZW50cyAmJiAhdGhpcy5vcHRpb25zLkV2ZW50U291cmNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU2tpcHBpbmcgdHJhbnNwb3J0ICdcIiArIEh0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF0gKyBcIicgYmVjYXVzZSBpdCBpcyBub3Qgc3VwcG9ydGVkIGluIHlvdXIgZW52aXJvbm1lbnQuJ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ1wiICsgSHR0cFRyYW5zcG9ydFR5cGVbdHJhbnNwb3J0XSArIFwiJyBpcyBub3Qgc3VwcG9ydGVkIGluIHlvdXIgZW52aXJvbm1lbnQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIlNlbGVjdGluZyB0cmFuc3BvcnQgJ1wiICsgSHR0cFRyYW5zcG9ydFR5cGVbdHJhbnNwb3J0XSArIFwiJy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc3BvcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIlNraXBwaW5nIHRyYW5zcG9ydCAnXCIgKyBIdHRwVHJhbnNwb3J0VHlwZVt0cmFuc3BvcnRdICsgXCInIGJlY2F1c2UgaXQgZG9lcyBub3Qgc3VwcG9ydCB0aGUgcmVxdWVzdGVkIHRyYW5zZmVyIGZvcm1hdCAnXCIgKyBUcmFuc2ZlckZvcm1hdFtyZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdF0gKyBcIicuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidcIiArIEh0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF0gKyBcIicgZG9lcyBub3Qgc3VwcG9ydCBcIiArIFRyYW5zZmVyRm9ybWF0W3JlcXVlc3RlZFRyYW5zZmVyRm9ybWF0XSArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJTa2lwcGluZyB0cmFuc3BvcnQgJ1wiICsgSHR0cFRyYW5zcG9ydFR5cGVbdHJhbnNwb3J0XSArIFwiJyBiZWNhdXNlIGl0IHdhcyBkaXNhYmxlZCBieSB0aGUgY2xpZW50LlwiKTtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidcIiArIEh0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF0gKyBcIicgaXMgZGlzYWJsZWQgYnkgdGhlIGNsaWVudC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgSHR0cENvbm5lY3Rpb24ucHJvdG90eXBlLmlzSVRyYW5zcG9ydCA9IGZ1bmN0aW9uICh0cmFuc3BvcnQpIHtcclxuICAgICAgICByZXR1cm4gdHJhbnNwb3J0ICYmIHR5cGVvZiAodHJhbnNwb3J0KSA9PT0gXCJvYmplY3RcIiAmJiBcImNvbm5lY3RcIiBpbiB0cmFuc3BvcnQ7XHJcbiAgICB9O1xyXG4gICAgSHR0cENvbm5lY3Rpb24ucHJvdG90eXBlLnN0b3BDb25uZWN0aW9uID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkh0dHBDb25uZWN0aW9uLnN0b3BDb25uZWN0aW9uKFwiICsgZXJyb3IgKyBcIikgY2FsbGVkIHdoaWxlIGluIHN0YXRlIFwiICsgdGhpcy5jb25uZWN0aW9uU3RhdGUgKyBcIi5cIik7XHJcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHN0b3BFcnJvciwgaXQgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoZSBlcnJvciBmcm9tIHRoZSB0cmFuc3BvcnRcclxuICAgICAgICBlcnJvciA9IHRoaXMuc3RvcEVycm9yIHx8IGVycm9yO1xyXG4gICAgICAgIHRoaXMuc3RvcEVycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkNhbGwgdG8gSHR0cENvbm5lY3Rpb24uc3RvcENvbm5lY3Rpb24oXCIgKyBlcnJvciArIFwiKSB3YXMgaWdub3JlZCBiZWNhdXNlIHRoZSBjb25uZWN0aW9uIGlzIGFscmVhZHkgaW4gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlID09PSBcIkNvbm5lY3RpbmcgXCIgLyogQ29ubmVjdGluZyAqLykge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuV2FybmluZywgXCJDYWxsIHRvIEh0dHBDb25uZWN0aW9uLnN0b3BDb25uZWN0aW9uKFwiICsgZXJyb3IgKyBcIikgd2FzIGlnbm9yZWQgYmVjYXVzZSB0aGUgY29ubmVjdGlvbiBoYXNuJ3QgeWV0IGxlZnQgdGhlIGluIHRoZSBjb25uZWN0aW5nIHN0YXRlLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUgPT09IFwiRGlzY29ubmVjdGluZ1wiIC8qIERpc2Nvbm5lY3RpbmcgKi8pIHtcclxuICAgICAgICAgICAgLy8gQSBjYWxsIHRvIHN0b3AoKSBpbmR1Y2VkIHRoaXMgY2FsbCB0byBzdG9wQ29ubmVjdGlvbiBhbmQgbmVlZHMgdG8gYmUgY29tcGxldGVkLlxyXG4gICAgICAgICAgICAvLyBBbnkgc3RvcCgpIGF3YWl0ZXJzIHdpbGwgYmUgc2NoZWR1bGVkIHRvIGNvbnRpbnVlIGFmdGVyIHRoZSBvbmNsb3NlIGNhbGxiYWNrIGZpcmVzLlxyXG4gICAgICAgICAgICB0aGlzLnN0b3BQcm9taXNlUmVzb2x2ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgXCJDb25uZWN0aW9uIGRpc2Nvbm5lY3RlZCB3aXRoIGVycm9yICdcIiArIGVycm9yICsgXCInLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJDb25uZWN0aW9uIGRpc2Nvbm5lY3RlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbklkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXRlID0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi87XHJcbiAgICAgICAgaWYgKHRoaXMub25jbG9zZSAmJiB0aGlzLmNvbm5lY3Rpb25TdGFydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25jbG9zZShlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgXCJIdHRwQ29ubmVjdGlvbi5vbmNsb3NlKFwiICsgZXJyb3IgKyBcIikgdGhyZXcgZXJyb3IgJ1wiICsgZSArIFwiJy5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSHR0cENvbm5lY3Rpb24ucHJvdG90eXBlLnJlc29sdmVVcmwgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgLy8gc3RhcnRzV2l0aCBpcyBub3Qgc3VwcG9ydGVkIGluIElFXHJcbiAgICAgICAgaWYgKHVybC5sYXN0SW5kZXhPZihcImh0dHBzOi8vXCIsIDApID09PSAwIHx8IHVybC5sYXN0SW5kZXhPZihcImh0dHA6Ly9cIiwgMCkgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIgfHwgIXdpbmRvdy5kb2N1bWVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVzb2x2ZSAnXCIgKyB1cmwgKyBcIicuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZXR0aW5nIHRoZSB1cmwgdG8gdGhlIGhyZWYgcHJvcGVyeSBvZiBhbiBhbmNob3IgdGFnIGhhbmRsZXMgbm9ybWFsaXphdGlvblxyXG4gICAgICAgIC8vIGZvciB1cy4gVGhlcmUgYXJlIDMgbWFpbiBjYXNlcy5cclxuICAgICAgICAvLyAxLiBSZWxhdGl2ZSAgcGF0aCBub3JtYWxpemF0aW9uIGUuZyBcImJcIiAtPiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hL2JcIlxyXG4gICAgICAgIC8vIDIuIEFic29sdXRlIHBhdGggbm9ybWFsaXphdGlvbiBlLmcgXCIvYS9iXCIgLT4gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYS9iXCJcclxuICAgICAgICAvLyAzLiBOZXR3b3JrcGF0aCByZWZlcmVuY2Ugbm9ybWFsaXphdGlvbiBlLmcgXCIvL2xvY2FsaG9zdDo1MDAwL2EvYlwiIC0+IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2EvYlwiXHJcbiAgICAgICAgdmFyIGFUYWcgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgYVRhZy5ocmVmID0gdXJsO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJOb3JtYWxpemluZyAnXCIgKyB1cmwgKyBcIicgdG8gJ1wiICsgYVRhZy5ocmVmICsgXCInLlwiKTtcclxuICAgICAgICByZXR1cm4gYVRhZy5ocmVmO1xyXG4gICAgfTtcclxuICAgIEh0dHBDb25uZWN0aW9uLnByb3RvdHlwZS5yZXNvbHZlTmVnb3RpYXRlVXJsID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHVybC5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICB2YXIgbmVnb3RpYXRlVXJsID0gdXJsLnN1YnN0cmluZygwLCBpbmRleCA9PT0gLTEgPyB1cmwubGVuZ3RoIDogaW5kZXgpO1xyXG4gICAgICAgIGlmIChuZWdvdGlhdGVVcmxbbmVnb3RpYXRlVXJsLmxlbmd0aCAtIDFdICE9PSBcIi9cIikge1xyXG4gICAgICAgICAgICBuZWdvdGlhdGVVcmwgKz0gXCIvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5lZ290aWF0ZVVybCArPSBcIm5lZ290aWF0ZVwiO1xyXG4gICAgICAgIG5lZ290aWF0ZVVybCArPSBpbmRleCA9PT0gLTEgPyBcIlwiIDogdXJsLnN1YnN0cmluZyhpbmRleCk7XHJcbiAgICAgICAgcmV0dXJuIG5lZ290aWF0ZVVybDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSHR0cENvbm5lY3Rpb247XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEh0dHBDb25uZWN0aW9uIH07XHJcbmZ1bmN0aW9uIHRyYW5zcG9ydE1hdGNoZXMocmVxdWVzdGVkVHJhbnNwb3J0LCBhY3R1YWxUcmFuc3BvcnQpIHtcclxuICAgIHJldHVybiAhcmVxdWVzdGVkVHJhbnNwb3J0IHx8ICgoYWN0dWFsVHJhbnNwb3J0ICYgcmVxdWVzdGVkVHJhbnNwb3J0KSAhPT0gMCk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SHR0cENvbm5lY3Rpb24uanMubWFwIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmltcG9ydCB7IEhhbmRzaGFrZVByb3RvY29sIH0gZnJvbSBcIi4vSGFuZHNoYWtlUHJvdG9jb2xcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiLi9JSHViUHJvdG9jb2xcIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwiLi9TdWJqZWN0XCI7XHJcbmltcG9ydCB7IEFyZyB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbnZhciBERUZBVUxUX1RJTUVPVVRfSU5fTVMgPSAzMCAqIDEwMDA7XHJcbnZhciBERUZBVUxUX1BJTkdfSU5URVJWQUxfSU5fTVMgPSAxNSAqIDEwMDA7XHJcbi8qKiBEZXNjcmliZXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHtAbGluayBIdWJDb25uZWN0aW9ufSB0byB0aGUgc2VydmVyLiAqL1xyXG5leHBvcnQgdmFyIEh1YkNvbm5lY3Rpb25TdGF0ZTtcclxuKGZ1bmN0aW9uIChIdWJDb25uZWN0aW9uU3RhdGUpIHtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgZGlzY29ubmVjdGVkLiAqL1xyXG4gICAgSHViQ29ubmVjdGlvblN0YXRlW1wiRGlzY29ubmVjdGVkXCJdID0gXCJEaXNjb25uZWN0ZWRcIjtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgY29ubmVjdGluZy4gKi9cclxuICAgIEh1YkNvbm5lY3Rpb25TdGF0ZVtcIkNvbm5lY3RpbmdcIl0gPSBcIkNvbm5lY3RpbmdcIjtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgY29ubmVjdGVkLiAqL1xyXG4gICAgSHViQ29ubmVjdGlvblN0YXRlW1wiQ29ubmVjdGVkXCJdID0gXCJDb25uZWN0ZWRcIjtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgZGlzY29ubmVjdGluZy4gKi9cclxuICAgIEh1YkNvbm5lY3Rpb25TdGF0ZVtcIkRpc2Nvbm5lY3RpbmdcIl0gPSBcIkRpc2Nvbm5lY3RpbmdcIjtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgcmVjb25uZWN0aW5nLiAqL1xyXG4gICAgSHViQ29ubmVjdGlvblN0YXRlW1wiUmVjb25uZWN0aW5nXCJdID0gXCJSZWNvbm5lY3RpbmdcIjtcclxufSkoSHViQ29ubmVjdGlvblN0YXRlIHx8IChIdWJDb25uZWN0aW9uU3RhdGUgPSB7fSkpO1xyXG4vKiogUmVwcmVzZW50cyBhIGNvbm5lY3Rpb24gdG8gYSBTaWduYWxSIEh1Yi4gKi9cclxudmFyIEh1YkNvbm5lY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIdWJDb25uZWN0aW9uKGNvbm5lY3Rpb24sIGxvZ2dlciwgcHJvdG9jb2wsIHJlY29ubmVjdFBvbGljeSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQoY29ubmVjdGlvbiwgXCJjb25uZWN0aW9uXCIpO1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKGxvZ2dlciwgXCJsb2dnZXJcIik7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQocHJvdG9jb2wsIFwicHJvdG9jb2xcIik7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJUaW1lb3V0SW5NaWxsaXNlY29uZHMgPSBERUZBVUxUX1RJTUVPVVRfSU5fTVM7XHJcbiAgICAgICAgdGhpcy5rZWVwQWxpdmVJbnRlcnZhbEluTWlsbGlzZWNvbmRzID0gREVGQVVMVF9QSU5HX0lOVEVSVkFMX0lOX01TO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBwcm90b2NvbDtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xyXG4gICAgICAgIHRoaXMucmVjb25uZWN0UG9saWN5ID0gcmVjb25uZWN0UG9saWN5O1xyXG4gICAgICAgIHRoaXMuaGFuZHNoYWtlUHJvdG9jb2wgPSBuZXcgSGFuZHNoYWtlUHJvdG9jb2woKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub25yZWNlaXZlID0gZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnByb2Nlc3NJbmNvbWluZ0RhdGEoZGF0YSk7IH07XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9uY2xvc2UgPSBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIF90aGlzLmNvbm5lY3Rpb25DbG9zZWQoZXJyb3IpOyB9O1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0ge307XHJcbiAgICAgICAgdGhpcy5tZXRob2RzID0ge307XHJcbiAgICAgICAgdGhpcy5jbG9zZWRDYWxsYmFja3MgPSBbXTtcclxuICAgICAgICB0aGlzLnJlY29ubmVjdGluZ0NhbGxiYWNrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVjb25uZWN0ZWRDYWxsYmFja3MgPSBbXTtcclxuICAgICAgICB0aGlzLmludm9jYXRpb25JZCA9IDA7XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlZEhhbmRzaGFrZVJlc3BvbnNlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGVkO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhY2hlZFBpbmdNZXNzYWdlID0gdGhpcy5wcm90b2NvbC53cml0ZU1lc3NhZ2UoeyB0eXBlOiBNZXNzYWdlVHlwZS5QaW5nIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgLy8gVXNpbmcgYSBwdWJsaWMgc3RhdGljIGZhY3RvcnkgbWV0aG9kIG1lYW5zIHdlIGNhbiBoYXZlIGEgcHJpdmF0ZSBjb25zdHJ1Y3RvciBhbmQgYW4gX2ludGVybmFsX1xyXG4gICAgLy8gY3JlYXRlIG1ldGhvZCB0aGF0IGNhbiBiZSB1c2VkIGJ5IEh1YkNvbm5lY3Rpb25CdWlsZGVyLiBBbiBcImludGVybmFsXCIgY29uc3RydWN0b3Igd291bGQganVzdFxyXG4gICAgLy8gYmUgc3RyaXBwZWQgYXdheSBhbmQgdGhlICcuZC50cycgZmlsZSB3b3VsZCBoYXZlIG5vIGNvbnN0cnVjdG9yLCB3aGljaCBpcyBpbnRlcnByZXRlZCBhcyBhXHJcbiAgICAvLyBwdWJsaWMgcGFyYW1ldGVyLWxlc3MgY29uc3RydWN0b3IuXHJcbiAgICBIdWJDb25uZWN0aW9uLmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25uZWN0aW9uLCBsb2dnZXIsIHByb3RvY29sLCByZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEh1YkNvbm5lY3Rpb24oY29ubmVjdGlvbiwgbG9nZ2VyLCBwcm90b2NvbCwgcmVjb25uZWN0UG9saWN5KTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSHViQ29ubmVjdGlvbi5wcm90b3R5cGUsIFwic3RhdGVcIiwge1xyXG4gICAgICAgIC8qKiBJbmRpY2F0ZXMgdGhlIHN0YXRlIG9mIHRoZSB7QGxpbmsgSHViQ29ubmVjdGlvbn0gdG8gdGhlIHNlcnZlci4gKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvblN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLCBcImNvbm5lY3Rpb25JZFwiLCB7XHJcbiAgICAgICAgLyoqIFJlcHJlc2VudHMgdGhlIGNvbm5lY3Rpb24gaWQgb2YgdGhlIHtAbGluayBIdWJDb25uZWN0aW9ufSBvbiB0aGUgc2VydmVyLiBUaGUgY29ubmVjdGlvbiBpZCB3aWxsIGJlIG51bGwgd2hlbiB0aGUgY29ubmVjdGlvbiBpcyBlaXRoZXJcclxuICAgICAgICAgKiAgaW4gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZSBvciBpZiB0aGUgbmVnb3RpYXRpb24gc3RlcCB3YXMgc2tpcHBlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbiA/ICh0aGlzLmNvbm5lY3Rpb24uY29ubmVjdGlvbklkIHx8IG51bGwpIDogbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8qKiBTdGFydHMgdGhlIGNvbm5lY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGNvbm5lY3Rpb24gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGVzdGFibGlzaGVkLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRQcm9taXNlID0gdGhpcy5zdGFydFdpdGhTdGF0ZVRyYW5zaXRpb25zKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRQcm9taXNlO1xyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLnN0YXJ0V2l0aFN0YXRlVHJhbnNpdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZV8xO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUgIT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW5ub3Qgc3RhcnQgYSBIdWJDb25uZWN0aW9uIHRoYXQgaXMgbm90IGluIHRoZSAnRGlzY29ubmVjdGVkJyBzdGF0ZS5cIikpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5Db25uZWN0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU3RhcnRpbmcgSHViQ29ubmVjdGlvbi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc3RhcnRJbnRlcm5hbCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkh1YkNvbm5lY3Rpb24gY29ubmVjdGVkIHN1Y2Nlc3NmdWxseS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJIdWJDb25uZWN0aW9uIGZhaWxlZCB0byBzdGFydCBzdWNjZXNzZnVsbHkgYmVjYXVzZSBvZiBlcnJvciAnXCIgKyBlXzEgKyBcIicuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgUHJvbWlzZS5yZWplY3QoZV8xKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLnN0YXJ0SW50ZXJuYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaGFuZHNoYWtlUHJvbWlzZSwgaGFuZHNoYWtlUmVxdWVzdCwgZV8yO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BEdXJpbmdTdGFydEVycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2VpdmVkSGFuZHNoYWtlUmVzcG9uc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZHNoYWtlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRzaGFrZVJlc29sdmVyID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRzaGFrZVJlamVjdGVyID0gcmVqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jb25uZWN0aW9uLnN0YXJ0KHRoaXMucHJvdG9jb2wudHJhbnNmZXJGb3JtYXQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsyLCA1LCAsIDddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZHNoYWtlUmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiB0aGlzLnByb3RvY29sLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uOiB0aGlzLnByb3RvY29sLnZlcnNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJTZW5kaW5nIGhhbmRzaGFrZSByZXF1ZXN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zZW5kTWVzc2FnZSh0aGlzLmhhbmRzaGFrZVByb3RvY29sLndyaXRlSGFuZHNoYWtlUmVxdWVzdChoYW5kc2hha2VSZXF1ZXN0KSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiVXNpbmcgSHViUHJvdG9jb2wgJ1wiICsgdGhpcy5wcm90b2NvbC5uYW1lICsgXCInLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVmZW5zaXZlbHkgY2xlYW51cCB0aW1lb3V0IGluIGNhc2Ugd2UgcmVjZWl2ZSBhIG1lc3NhZ2UgZnJvbSB0aGUgc2VydmVyIGJlZm9yZSB3ZSBmaW5pc2ggc3RhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhbnVwVGltZW91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VGltZW91dFBlcmlvZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0S2VlcEFsaXZlSW50ZXJ2YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaGFuZHNoYWtlUHJvbWlzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIGNoZWNrIHRoZSBzdG9wRHVyaW5nU3RhcnRFcnJvciBpbnN0ZWFkIG9mIGp1c3QgcmVseWluZyBvbiB0aGUgaGFuZHNoYWtlUHJvbWlzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiZWluZyByZWplY3RlZCBvbiBjbG9zZSwgYmVjYXVzZSB0aGlzIGNvbnRpbnVhdGlvbiBjYW4gcnVuIGFmdGVyIGJvdGggdGhlIGhhbmRzaGFrZSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGUgY29ubmVjdGlvbiB3YXMgY2xvc2VkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9wRHVyaW5nU3RhcnRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gdGhyb3cgaW5zdGVhZCBvZiByZXR1cm5pbmcgYSByZWplY3RlZCBwcm9taXNlLCBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gYWxsb3cgYW55IHN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2l0aW9ucyB0byBvY2N1ciBiZXR3ZWVuIG5vdyBhbmQgdGhlIGNhbGxpbmcgY29kZSBvYnNlcnZpbmcgdGhlIGV4Y2VwdGlvbnMuIFJldHVybmluZyBhIHJlamVjdGVkIHByb21pc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbGwgY2F1c2UgdGhlIGNhbGxpbmcgY29udGludWF0aW9uIHRvIGdldCBzY2hlZHVsZWQgdG8gcnVuIGxhdGVyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5zdG9wRHVyaW5nU3RhcnRFcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkh1YiBoYW5kc2hha2UgZmFpbGVkIHdpdGggZXJyb3IgJ1wiICsgZV8yICsgXCInIGR1cmluZyBzdGFydCgpLiBTdG9wcGluZyBIdWJDb25uZWN0aW9uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhbnVwVGltZW91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFudXBQaW5nVGltZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSHR0cENvbm5lY3Rpb24uc3RvcCgpIHNob3VsZCBub3QgY29tcGxldGUgdW50aWwgYWZ0ZXIgdGhlIG9uY2xvc2UgY2FsbGJhY2sgaXMgaW52b2tlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHRyYW5zaXRpb24gdGhlIEh1YkNvbm5lY3Rpb24gdG8gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZSBiZWZvcmUgSHR0cENvbm5lY3Rpb24uc3RvcCgpIGNvbXBsZXRlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jb25uZWN0aW9uLnN0b3AoZV8yKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIdHRwQ29ubmVjdGlvbi5zdG9wKCkgc2hvdWxkIG5vdCBjb21wbGV0ZSB1bnRpbCBhZnRlciB0aGUgb25jbG9zZSBjYWxsYmFjayBpcyBpbnZva2VkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgdHJhbnNpdGlvbiB0aGUgSHViQ29ubmVjdGlvbiB0byB0aGUgZGlzY29ubmVjdGVkIHN0YXRlIGJlZm9yZSBIdHRwQ29ubmVjdGlvbi5zdG9wKCkgY29tcGxldGVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFN0b3BzIHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBjb25uZWN0aW9uIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB0ZXJtaW5hdGVkLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRQcm9taXNlLCBlXzM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0UHJvbWlzZSA9IHRoaXMuc3RhcnRQcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BQcm9taXNlID0gdGhpcy5zdG9wSW50ZXJuYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zdG9wUHJvbWlzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMiwgNCwgLCA1XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF3YWl0aW5nIHVuZGVmaW5lZCBjb250aW51ZXMgaW1tZWRpYXRlbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc3RhcnRQcm9taXNlXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF3YWl0aW5nIHVuZGVmaW5lZCBjb250aW51ZXMgaW1tZWRpYXRlbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLnN0b3BJbnRlcm5hbCA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ2FsbCB0byBIdWJDb25uZWN0aW9uLnN0b3AoXCIgKyBlcnJvciArIFwiKSBpZ25vcmVkIGJlY2F1c2UgaXQgaXMgYWxyZWFkeSBpbiB0aGUgZGlzY29ubmVjdGVkIHN0YXRlLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJDYWxsIHRvIEh0dHBDb25uZWN0aW9uLnN0b3AoXCIgKyBlcnJvciArIFwiKSBpZ25vcmVkIGJlY2F1c2UgdGhlIGNvbm5lY3Rpb24gaXMgYWxyZWFkeSBpbiB0aGUgZGlzY29ubmVjdGluZyBzdGF0ZS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3BQcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0aW5nO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJTdG9wcGluZyBIdWJDb25uZWN0aW9uLlwiKTtcclxuICAgICAgICBpZiAodGhpcy5yZWNvbm5lY3REZWxheUhhbmRsZSkge1xyXG4gICAgICAgICAgICAvLyBXZSdyZSBpbiBhIHJlY29ubmVjdCBkZWxheSB3aGljaCBtZWFucyB0aGUgdW5kZXJseWluZyBjb25uZWN0aW9uIGlzIGN1cnJlbnRseSBhbHJlYWR5IHN0b3BwZWQuXHJcbiAgICAgICAgICAgIC8vIEp1c3QgY2xlYXIgdGhlIGhhbmRsZSB0byBzdG9wIHRoZSByZWNvbm5lY3QgbG9vcCAod2hpY2ggbm8gb25lIGlzIHdhaXRpbmcgb24gdGhhbmtmdWxseSkgYW5kXHJcbiAgICAgICAgICAgIC8vIGZpcmUgdGhlIG9uY2xvc2UgY2FsbGJhY2tzLlxyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ29ubmVjdGlvbiBzdG9wcGVkIGR1cmluZyByZWNvbm5lY3QgZGVsYXkuIERvbmUgcmVjb25uZWN0aW5nLlwiKTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVjb25uZWN0RGVsYXlIYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdERlbGF5SGFuZGxlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlQ2xvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFudXBUaW1lb3V0KCk7XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwUGluZ1RpbWVyKCk7XHJcbiAgICAgICAgdGhpcy5zdG9wRHVyaW5nU3RhcnRFcnJvciA9IGVycm9yIHx8IG5ldyBFcnJvcihcIlRoZSBjb25uZWN0aW9uIHdhcyBzdG9wcGVkIGJlZm9yZSB0aGUgaHViIGhhbmRzaGFrZSBjb3VsZCBjb21wbGV0ZS5cIik7XHJcbiAgICAgICAgLy8gSHR0cENvbm5lY3Rpb24uc3RvcCgpIHNob3VsZCBub3QgY29tcGxldGUgdW50aWwgYWZ0ZXIgZWl0aGVyIEh0dHBDb25uZWN0aW9uLnN0YXJ0KCkgZmFpbHNcclxuICAgICAgICAvLyBvciB0aGUgb25jbG9zZSBjYWxsYmFjayBpcyBpbnZva2VkLiBUaGUgb25jbG9zZSBjYWxsYmFjayB3aWxsIHRyYW5zaXRpb24gdGhlIEh1YkNvbm5lY3Rpb25cclxuICAgICAgICAvLyB0byB0aGUgZGlzY29ubmVjdGVkIHN0YXRlIGlmIG5lZWQgYmUgYmVmb3JlIEh0dHBDb25uZWN0aW9uLnN0b3AoKSBjb21wbGV0ZXMuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5zdG9wKGVycm9yKTtcclxuICAgIH07XHJcbiAgICAvKiogSW52b2tlcyBhIHN0cmVhbWluZyBodWIgbWV0aG9kIG9uIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIHNwZWNpZmllZCBuYW1lIGFuZCBhcmd1bWVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGVwYXJhbSBUIFRoZSB0eXBlIG9mIHRoZSBpdGVtcyByZXR1cm5lZCBieSB0aGUgc2VydmVyLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIHNlcnZlciBtZXRob2QgdG8gaW52b2tlLlxyXG4gICAgICogQHBhcmFtIHthbnlbXX0gYXJncyBUaGUgYXJndW1lbnRzIHVzZWQgdG8gaW52b2tlIHRoZSBzZXJ2ZXIgbWV0aG9kLlxyXG4gICAgICogQHJldHVybnMge0lTdHJlYW1SZXN1bHQ8VD59IEFuIG9iamVjdCB0aGF0IHlpZWxkcyByZXN1bHRzIGZyb20gdGhlIHNlcnZlciBhcyB0aGV5IGFyZSByZWNlaXZlZC5cclxuICAgICAqL1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuc3RyZWFtID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5yZXBsYWNlU3RyZWFtaW5nUGFyYW1zKGFyZ3MpLCBzdHJlYW1zID0gX2FbMF0sIHN0cmVhbUlkcyA9IF9hWzFdO1xyXG4gICAgICAgIHZhciBpbnZvY2F0aW9uRGVzY3JpcHRvciA9IHRoaXMuY3JlYXRlU3RyZWFtSW52b2NhdGlvbihtZXRob2ROYW1lLCBhcmdzLCBzdHJlYW1JZHMpO1xyXG4gICAgICAgIHZhciBwcm9taXNlUXVldWU7XHJcbiAgICAgICAgdmFyIHN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgICAgIHN1YmplY3QuY2FuY2VsQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjYW5jZWxJbnZvY2F0aW9uID0gX3RoaXMuY3JlYXRlQ2FuY2VsSW52b2NhdGlvbihpbnZvY2F0aW9uRGVzY3JpcHRvci5pbnZvY2F0aW9uSWQpO1xyXG4gICAgICAgICAgICBkZWxldGUgX3RoaXMuY2FsbGJhY2tzW2ludm9jYXRpb25EZXNjcmlwdG9yLmludm9jYXRpb25JZF07XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUXVldWUudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc2VuZFdpdGhQcm90b2NvbChjYW5jZWxJbnZvY2F0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrc1tpbnZvY2F0aW9uRGVzY3JpcHRvci5pbnZvY2F0aW9uSWRdID0gZnVuY3Rpb24gKGludm9jYXRpb25FdmVudCwgZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0LmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpbnZvY2F0aW9uRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGludm9jYXRpb25FdmVudCB3aWxsIG5vdCBiZSBudWxsIHdoZW4gYW4gZXJyb3IgaXMgbm90IHBhc3NlZCB0byB0aGUgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uRXZlbnQudHlwZSA9PT0gTWVzc2FnZVR5cGUuQ29tcGxldGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uRXZlbnQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5lcnJvcihuZXcgRXJyb3IoaW52b2NhdGlvbkV2ZW50LmVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0LmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5uZXh0KChpbnZvY2F0aW9uRXZlbnQuaXRlbSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwcm9taXNlUXVldWUgPSB0aGlzLnNlbmRXaXRoUHJvdG9jb2woaW52b2NhdGlvbkRlc2NyaXB0b3IpXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzdWJqZWN0LmVycm9yKGUpO1xyXG4gICAgICAgICAgICBkZWxldGUgX3RoaXMuY2FsbGJhY2tzW2ludm9jYXRpb25EZXNjcmlwdG9yLmludm9jYXRpb25JZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sYXVuY2hTdHJlYW1zKHN0cmVhbXMsIHByb21pc2VRdWV1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHN1YmplY3Q7XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuc2VuZE1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMucmVzZXRLZWVwQWxpdmVJbnRlcnZhbCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24uc2VuZChtZXNzYWdlKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNlbmRzIGEganMgb2JqZWN0IHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUganMgb2JqZWN0IHRvIHNlcmlhbGl6ZSBhbmQgc2VuZC5cclxuICAgICAqL1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuc2VuZFdpdGhQcm90b2NvbCA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UodGhpcy5wcm90b2NvbC53cml0ZU1lc3NhZ2UobWVzc2FnZSkpO1xyXG4gICAgfTtcclxuICAgIC8qKiBJbnZva2VzIGEgaHViIG1ldGhvZCBvbiB0aGUgc2VydmVyIHVzaW5nIHRoZSBzcGVjaWZpZWQgbmFtZSBhbmQgYXJndW1lbnRzLiBEb2VzIG5vdCB3YWl0IGZvciBhIHJlc3BvbnNlIGZyb20gdGhlIHJlY2VpdmVyLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBQcm9taXNlIHJldHVybmVkIGJ5IHRoaXMgbWV0aG9kIHJlc29sdmVzIHdoZW4gdGhlIGNsaWVudCBoYXMgc2VudCB0aGUgaW52b2NhdGlvbiB0byB0aGUgc2VydmVyLiBUaGUgc2VydmVyIG1heSBzdGlsbFxyXG4gICAgICogYmUgcHJvY2Vzc2luZyB0aGUgaW52b2NhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgc2VydmVyIG1ldGhvZCB0byBpbnZva2UuXHJcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBhcmdzIFRoZSBhcmd1bWVudHMgdXNlZCB0byBpbnZva2UgdGhlIHNlcnZlciBtZXRob2QuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgaW52b2NhdGlvbiBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc2VudCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfYSA9IHRoaXMucmVwbGFjZVN0cmVhbWluZ1BhcmFtcyhhcmdzKSwgc3RyZWFtcyA9IF9hWzBdLCBzdHJlYW1JZHMgPSBfYVsxXTtcclxuICAgICAgICB2YXIgc2VuZFByb21pc2UgPSB0aGlzLnNlbmRXaXRoUHJvdG9jb2wodGhpcy5jcmVhdGVJbnZvY2F0aW9uKG1ldGhvZE5hbWUsIGFyZ3MsIHRydWUsIHN0cmVhbUlkcykpO1xyXG4gICAgICAgIHRoaXMubGF1bmNoU3RyZWFtcyhzdHJlYW1zLCBzZW5kUHJvbWlzZSk7XHJcbiAgICAgICAgcmV0dXJuIHNlbmRQcm9taXNlO1xyXG4gICAgfTtcclxuICAgIC8qKiBJbnZva2VzIGEgaHViIG1ldGhvZCBvbiB0aGUgc2VydmVyIHVzaW5nIHRoZSBzcGVjaWZpZWQgbmFtZSBhbmQgYXJndW1lbnRzLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBQcm9taXNlIHJldHVybmVkIGJ5IHRoaXMgbWV0aG9kIHJlc29sdmVzIHdoZW4gdGhlIHNlcnZlciBpbmRpY2F0ZXMgaXQgaGFzIGZpbmlzaGVkIGludm9raW5nIHRoZSBtZXRob2QuIFdoZW4gdGhlIHByb21pc2VcclxuICAgICAqIHJlc29sdmVzLCB0aGUgc2VydmVyIGhhcyBmaW5pc2hlZCBpbnZva2luZyB0aGUgbWV0aG9kLiBJZiB0aGUgc2VydmVyIG1ldGhvZCByZXR1cm5zIGEgcmVzdWx0LCBpdCBpcyBwcm9kdWNlZCBhcyB0aGUgcmVzdWx0IG9mXHJcbiAgICAgKiByZXNvbHZpbmcgdGhlIFByb21pc2UuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGVwYXJhbSBUIFRoZSBleHBlY3RlZCByZXR1cm4gdHlwZS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIFRoZSBuYW1lIG9mIHRoZSBzZXJ2ZXIgbWV0aG9kIHRvIGludm9rZS5cclxuICAgICAqIEBwYXJhbSB7YW55W119IGFyZ3MgVGhlIGFyZ3VtZW50cyB1c2VkIHRvIGludm9rZSB0aGUgc2VydmVyIG1ldGhvZC5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFQ+fSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXN1bHQgb2YgdGhlIHNlcnZlciBtZXRob2QgKGlmIGFueSksIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgICAqL1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5yZXBsYWNlU3RyZWFtaW5nUGFyYW1zKGFyZ3MpLCBzdHJlYW1zID0gX2FbMF0sIHN0cmVhbUlkcyA9IF9hWzFdO1xyXG4gICAgICAgIHZhciBpbnZvY2F0aW9uRGVzY3JpcHRvciA9IHRoaXMuY3JlYXRlSW52b2NhdGlvbihtZXRob2ROYW1lLCBhcmdzLCBmYWxzZSwgc3RyZWFtSWRzKTtcclxuICAgICAgICB2YXIgcCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgLy8gaW52b2NhdGlvbklkIHdpbGwgYWx3YXlzIGhhdmUgYSB2YWx1ZSBmb3IgYSBub24tYmxvY2tpbmcgaW52b2NhdGlvblxyXG4gICAgICAgICAgICBfdGhpcy5jYWxsYmFja3NbaW52b2NhdGlvbkRlc2NyaXB0b3IuaW52b2NhdGlvbklkXSA9IGZ1bmN0aW9uIChpbnZvY2F0aW9uRXZlbnQsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGludm9jYXRpb25FdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludm9jYXRpb25FdmVudCB3aWxsIG5vdCBiZSBudWxsIHdoZW4gYW4gZXJyb3IgaXMgbm90IHBhc3NlZCB0byB0aGUgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW52b2NhdGlvbkV2ZW50LnR5cGUgPT09IE1lc3NhZ2VUeXBlLkNvbXBsZXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludm9jYXRpb25FdmVudC5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihpbnZvY2F0aW9uRXZlbnQuZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW52b2NhdGlvbkV2ZW50LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIG1lc3NhZ2UgdHlwZTogXCIgKyBpbnZvY2F0aW9uRXZlbnQudHlwZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHByb21pc2VRdWV1ZSA9IF90aGlzLnNlbmRXaXRoUHJvdG9jb2woaW52b2NhdGlvbkRlc2NyaXB0b3IpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIC8vIGludm9jYXRpb25JZCB3aWxsIGFsd2F5cyBoYXZlIGEgdmFsdWUgZm9yIGEgbm9uLWJsb2NraW5nIGludm9jYXRpb25cclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5jYWxsYmFja3NbaW52b2NhdGlvbkRlc2NyaXB0b3IuaW52b2NhdGlvbklkXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLmxhdW5jaFN0cmVhbXMoc3RyZWFtcywgcHJvbWlzZVF1ZXVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH07XHJcbiAgICAvKiogUmVnaXN0ZXJzIGEgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBodWIgbWV0aG9kIHdpdGggdGhlIHNwZWNpZmllZCBtZXRob2QgbmFtZSBpcyBpbnZva2VkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIFRoZSBuYW1lIG9mIHRoZSBodWIgbWV0aG9kIHRvIGRlZmluZS5cclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG5ld01ldGhvZCBUaGUgaGFuZGxlciB0aGF0IHdpbGwgYmUgcmFpc2VkIHdoZW4gdGhlIGh1YiBtZXRob2QgaXMgaW52b2tlZC5cclxuICAgICAqL1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgbmV3TWV0aG9kKSB7XHJcbiAgICAgICAgaWYgKCFtZXRob2ROYW1lIHx8ICFuZXdNZXRob2QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2ROYW1lID0gbWV0aG9kTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICghdGhpcy5tZXRob2RzW21ldGhvZE5hbWVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWV0aG9kc1ttZXRob2ROYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBQcmV2ZW50aW5nIGFkZGluZyB0aGUgc2FtZSBoYW5kbGVyIG11bHRpcGxlIHRpbWVzLlxyXG4gICAgICAgIGlmICh0aGlzLm1ldGhvZHNbbWV0aG9kTmFtZV0uaW5kZXhPZihuZXdNZXRob2QpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWV0aG9kc1ttZXRob2ROYW1lXS5wdXNoKG5ld01ldGhvZCk7XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIG1ldGhvZCkge1xyXG4gICAgICAgIGlmICghbWV0aG9kTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZE5hbWUgPSBtZXRob2ROYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5tZXRob2RzW21ldGhvZE5hbWVdO1xyXG4gICAgICAgIGlmICghaGFuZGxlcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHZhciByZW1vdmVJZHggPSBoYW5kbGVycy5pbmRleE9mKG1ldGhvZCk7XHJcbiAgICAgICAgICAgIGlmIChyZW1vdmVJZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UocmVtb3ZlSWR4LCAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5tZXRob2RzW21ldGhvZE5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5tZXRob2RzW21ldGhvZE5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKiogUmVnaXN0ZXJzIGEgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZC4gT3B0aW9uYWxseSByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudCBjb250YWluaW5nIHRoZSBlcnJvciB0aGF0IGNhdXNlZCB0aGUgY29ubmVjdGlvbiB0byBjbG9zZSAoaWYgYW55KS5cclxuICAgICAqL1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUub25jbG9zZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqIFJlZ2lzdGVycyBhIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBzdGFydHMgcmVjb25uZWN0aW5nLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBoYW5kbGVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGNvbm5lY3Rpb24gc3RhcnRzIHJlY29ubmVjdGluZy4gT3B0aW9uYWxseSByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudCBjb250YWluaW5nIHRoZSBlcnJvciB0aGF0IGNhdXNlZCB0aGUgY29ubmVjdGlvbiB0byBzdGFydCByZWNvbm5lY3RpbmcgKGlmIGFueSkuXHJcbiAgICAgKi9cclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLm9ucmVjb25uZWN0aW5nID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0aW5nQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKiogUmVnaXN0ZXJzIGEgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBjb25uZWN0aW9uIHN1Y2Nlc3NmdWxseSByZWNvbm5lY3RzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBoYW5kbGVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bGx5IHJlY29ubmVjdHMuXHJcbiAgICAgKi9cclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLm9ucmVjb25uZWN0ZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RlZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUucHJvY2Vzc0luY29taW5nRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwVGltZW91dCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5yZWNlaXZlZEhhbmRzaGFrZVJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLnByb2Nlc3NIYW5kc2hha2VSZXNwb25zZShkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5yZWNlaXZlZEhhbmRzaGFrZVJlc3BvbnNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRGF0YSBtYXkgaGF2ZSBhbGwgYmVlbiByZWFkIHdoZW4gcHJvY2Vzc2luZyBoYW5kc2hha2UgcmVzcG9uc2VcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBQYXJzZSB0aGUgbWVzc2FnZXNcclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2VzID0gdGhpcy5wcm90b2NvbC5wYXJzZU1lc3NhZ2VzKGRhdGEsIHRoaXMubG9nZ2VyKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtZXNzYWdlc18xID0gbWVzc2FnZXM7IF9pIDwgbWVzc2FnZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbWVzc2FnZXNfMVtfaV07XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuSW52b2NhdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnZva2VDbGllbnRNZXRob2QobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuU3RyZWFtSXRlbTpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNvbXBsZXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuY2FsbGJhY2tzW21lc3NhZ2UuaW52b2NhdGlvbklkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlID09PSBNZXNzYWdlVHlwZS5Db21wbGV0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2FsbGJhY2tzW21lc3NhZ2UuaW52b2NhdGlvbklkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuUGluZzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgY2FyZSBhYm91dCBwaW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNsb3NlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiQ2xvc2UgbWVzc2FnZSByZWNlaXZlZCBmcm9tIHNlcnZlci5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gd2FpdCBvbiB0aGUgc3RvcCBpdHNlbGYuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcFByb21pc2UgPSB0aGlzLnN0b3BJbnRlcm5hbChtZXNzYWdlLmVycm9yID8gbmV3IEVycm9yKFwiU2VydmVyIHJldHVybmVkIGFuIGVycm9yIG9uIGNsb3NlOiBcIiArIG1lc3NhZ2UuZXJyb3IpIDogdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIFwiSW52YWxpZCBtZXNzYWdlIHR5cGU6IFwiICsgbWVzc2FnZS50eXBlICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2V0VGltZW91dFBlcmlvZCgpO1xyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLnByb2Nlc3NIYW5kc2hha2VSZXNwb25zZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHZhciByZXNwb25zZU1lc3NhZ2U7XHJcbiAgICAgICAgdmFyIHJlbWFpbmluZ0RhdGE7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgX2EgPSB0aGlzLmhhbmRzaGFrZVByb3RvY29sLnBhcnNlSGFuZHNoYWtlUmVzcG9uc2UoZGF0YSksIHJlbWFpbmluZ0RhdGEgPSBfYVswXSwgcmVzcG9uc2VNZXNzYWdlID0gX2FbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJFcnJvciBwYXJzaW5nIGhhbmRzaGFrZSByZXNwb25zZTogXCIgKyBlO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZHNoYWtlUmVqZWN0ZXIoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlTWVzc2FnZS5lcnJvcikge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiU2VydmVyIHJldHVybmVkIGhhbmRzaGFrZSBlcnJvcjogXCIgKyByZXNwb25zZU1lc3NhZ2UuZXJyb3I7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kc2hha2VSZWplY3RlcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIlNlcnZlciBoYW5kc2hha2UgY29tcGxldGUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRzaGFrZVJlc29sdmVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlbWFpbmluZ0RhdGE7XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUucmVzZXRLZWVwQWxpdmVJbnRlcnZhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2xlYW51cFBpbmdUaW1lcigpO1xyXG4gICAgICAgIHRoaXMucGluZ1NlcnZlckhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMuY29ubmVjdGlvblN0YXRlID09PSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGVkKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2VuZE1lc3NhZ2UodGhpcy5jYWNoZWRQaW5nTWVzc2FnZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBjYXJlIGFib3V0IHRoZSBlcnJvci4gSXQgc2hvdWxkIGJlIHNlZW4gZWxzZXdoZXJlIGluIHRoZSBjbGllbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBjb25uZWN0aW9uIGlzIHByb2JhYmx5IGluIGEgYmFkIG9yIGNsb3NlZCBzdGF0ZSBub3csIGNsZWFudXAgdGhlIHRpbWVyIHNvIGl0IHN0b3BzIHRyaWdnZXJpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhbnVwUGluZ1RpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfSwgdGhpcy5rZWVwQWxpdmVJbnRlcnZhbEluTWlsbGlzZWNvbmRzKTtcclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5yZXNldFRpbWVvdXRQZXJpb2QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGlvbi5mZWF0dXJlcyB8fCAhdGhpcy5jb25uZWN0aW9uLmZlYXR1cmVzLmluaGVyZW50S2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCB0aGUgdGltZW91dCB0aW1lclxyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnNlcnZlclRpbWVvdXQoKTsgfSwgdGhpcy5zZXJ2ZXJUaW1lb3V0SW5NaWxsaXNlY29uZHMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXJ2ZXJUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFRoZSBzZXJ2ZXIgaGFzbid0IHRhbGtlZCB0byB1cyBpbiBhIHdoaWxlLiBJdCBkb2Vzbid0IGxpa2UgdXMgYW55bW9yZSAuLi4gOihcclxuICAgICAgICAvLyBUZXJtaW5hdGUgdGhlIGNvbm5lY3Rpb24sIGJ1dCB3ZSBkb24ndCBuZWVkIHRvIHdhaXQgb24gdGhlIHByb21pc2UuIFRoaXMgY291bGQgdHJpZ2dlciByZWNvbm5lY3RpbmcuXHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLnN0b3AobmV3IEVycm9yKFwiU2VydmVyIHRpbWVvdXQgZWxhcHNlZCB3aXRob3V0IHJlY2VpdmluZyBhIG1lc3NhZ2UgZnJvbSB0aGUgc2VydmVyLlwiKSk7XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuaW52b2tlQ2xpZW50TWV0aG9kID0gZnVuY3Rpb24gKGludm9jYXRpb25NZXNzYWdlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgbWV0aG9kcyA9IHRoaXMubWV0aG9kc1tpbnZvY2F0aW9uTWVzc2FnZS50YXJnZXQudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgaWYgKG1ldGhvZHMpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5hcHBseShfdGhpcywgaW52b2NhdGlvbk1lc3NhZ2UuYXJndW1lbnRzKTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgXCJBIGNhbGxiYWNrIGZvciB0aGUgbWV0aG9kIFwiICsgaW52b2NhdGlvbk1lc3NhZ2UudGFyZ2V0LnRvTG93ZXJDYXNlKCkgKyBcIiB0aHJldyBlcnJvciAnXCIgKyBlICsgXCInLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW52b2NhdGlvbk1lc3NhZ2UuaW52b2NhdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdjEuIFNvIHdlIHJldHVybiBhbiBlcnJvciB0byBhdm9pZCBibG9ja2luZyB0aGUgc2VydmVyIHdhaXRpbmcgZm9yIHRoZSByZXNwb25zZS5cclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJTZXJ2ZXIgcmVxdWVzdGVkIGEgcmVzcG9uc2UsIHdoaWNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyB2ZXJzaW9uIG9mIHRoZSBjbGllbnQuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byB3YWl0IG9uIHRoZSBzdG9wIGl0c2VsZi5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcFByb21pc2UgPSB0aGlzLnN0b3BJbnRlcm5hbChuZXcgRXJyb3IobWVzc2FnZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuV2FybmluZywgXCJObyBjbGllbnQgbWV0aG9kIHdpdGggdGhlIG5hbWUgJ1wiICsgaW52b2NhdGlvbk1lc3NhZ2UudGFyZ2V0ICsgXCInIGZvdW5kLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuY29ubmVjdGlvbkNsb3NlZCA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJIdWJDb25uZWN0aW9uLmNvbm5lY3Rpb25DbG9zZWQoXCIgKyBlcnJvciArIFwiKSBjYWxsZWQgd2hpbGUgaW4gc3RhdGUgXCIgKyB0aGlzLmNvbm5lY3Rpb25TdGF0ZSArIFwiLlwiKTtcclxuICAgICAgICAvLyBUcmlnZ2VyaW5nIHRoaXMuaGFuZHNoYWtlUmVqZWN0ZXIgaXMgaW5zdWZmaWNpZW50IGJlY2F1c2UgaXQgY291bGQgYWxyZWFkeSBiZSByZXNvbHZlZCB3aXRob3V0IHRoZSBjb250aW51YXRpb24gaGF2aW5nIHJ1biB5ZXQuXHJcbiAgICAgICAgdGhpcy5zdG9wRHVyaW5nU3RhcnRFcnJvciA9IHRoaXMuc3RvcER1cmluZ1N0YXJ0RXJyb3IgfHwgZXJyb3IgfHwgbmV3IEVycm9yKFwiVGhlIHVuZGVybHlpbmcgY29ubmVjdGlvbiB3YXMgY2xvc2VkIGJlZm9yZSB0aGUgaHViIGhhbmRzaGFrZSBjb3VsZCBjb21wbGV0ZS5cIik7XHJcbiAgICAgICAgLy8gSWYgdGhlIGhhbmRzaGFrZSBpcyBpbiBwcm9ncmVzcywgc3RhcnQgd2lsbCBiZSB3YWl0aW5nIGZvciB0aGUgaGFuZHNoYWtlIHByb21pc2UsIHNvIHdlIGNvbXBsZXRlIGl0LlxyXG4gICAgICAgIC8vIElmIGl0IGhhcyBhbHJlYWR5IGNvbXBsZXRlZCwgdGhpcyBzaG91bGQganVzdCBub29wLlxyXG4gICAgICAgIGlmICh0aGlzLmhhbmRzaGFrZVJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZHNoYWtlUmVzb2x2ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5jZWxDYWxsYmFja3NXaXRoRXJyb3IoZXJyb3IgfHwgbmV3IEVycm9yKFwiSW52b2NhdGlvbiBjYW5jZWxlZCBkdWUgdG8gdGhlIHVuZGVybHlpbmcgY29ubmVjdGlvbiBiZWluZyBjbG9zZWQuXCIpKTtcclxuICAgICAgICB0aGlzLmNsZWFudXBUaW1lb3V0KCk7XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwUGluZ1RpbWVyKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlID09PSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlQ2xvc2UoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkNvbm5lY3RlZCAmJiB0aGlzLnJlY29ubmVjdFBvbGljeSkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlQ2xvc2UoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBub25lIG9mIHRoZSBhYm92ZSBpZiBjb25kaXRpb25zIHdlcmUgdHJ1ZSB3ZXJlIGNhbGxlZCB0aGUgSHViQ29ubmVjdGlvbiBtdXN0IGJlIGluIGVpdGhlcjpcclxuICAgICAgICAvLyAxLiBUaGUgQ29ubmVjdGluZyBzdGF0ZSBpbiB3aGljaCBjYXNlIHRoZSBoYW5kc2hha2VSZXNvbHZlciB3aWxsIGNvbXBsZXRlIGl0IGFuZCBzdG9wRHVyaW5nU3RhcnRFcnJvciB3aWxsIGZhaWwgaXQuXHJcbiAgICAgICAgLy8gMi4gVGhlIFJlY29ubmVjdGluZyBzdGF0ZSBpbiB3aGljaCBjYXNlIHRoZSBoYW5kc2hha2VSZXNvbHZlciB3aWxsIGNvbXBsZXRlIGl0IGFuZCBzdG9wRHVyaW5nU3RhcnRFcnJvciB3aWxsIGZhaWwgdGhlIGN1cnJlbnQgcmVjb25uZWN0IGF0dGVtcHRcclxuICAgICAgICAvLyAgICBhbmQgcG90ZW50aWFsbHkgY29udGludWUgdGhlIHJlY29ubmVjdCgpIGxvb3AuXHJcbiAgICAgICAgLy8gMy4gVGhlIERpc2Nvbm5lY3RlZCBzdGF0ZSBpbiB3aGljaCBjYXNlIHdlJ3JlIGFscmVhZHkgZG9uZS5cclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5jb21wbGV0ZUNsb3NlID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VkQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMuYXBwbHkoX3RoaXMsIFtlcnJvcl0pOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBcIkFuIG9uY2xvc2UgY2FsbGJhY2sgY2FsbGVkIHdpdGggZXJyb3IgJ1wiICsgZXJyb3IgKyBcIicgdGhyZXcgZXJyb3IgJ1wiICsgZSArIFwiJy5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUucmVjb25uZWN0ID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjb25uZWN0U3RhcnRUaW1lLCBwcmV2aW91c1JlY29ubmVjdEF0dGVtcHRzLCBuZXh0UmV0cnlEZWxheSwgZV80O1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvbm5lY3RTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1JlY29ubmVjdEF0dGVtcHRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFJldHJ5RGVsYXkgPSB0aGlzLmdldE5leHRSZXRyeURlbGF5KHByZXZpb3VzUmVjb25uZWN0QXR0ZW1wdHMrKywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UmV0cnlEZWxheSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkNvbm5lY3Rpb24gbm90IHJlY29ubmVjdGluZyBiZWNhdXNlIHRoZSBJUmVjb25uZWN0UG9saWN5IHJldHVybmVkIG51bGwgb24gdGhlIGZpcnN0IHJlY29ubmVjdCBhdHRlbXB0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVDbG9zZShlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuUmVjb25uZWN0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJDb25uZWN0aW9uIHJlY29ubmVjdGluZyBiZWNhdXNlIG9mIGVycm9yICdcIiArIGVycm9yICsgXCInLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJDb25uZWN0aW9uIHJlY29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25yZWNvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RpbmdDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5hcHBseShfdGhpcywgW2Vycm9yXSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIFwiQW4gb25yZWNvbm5lY3RpbmcgY2FsbGJhY2sgY2FsbGVkIHdpdGggZXJyb3IgJ1wiICsgZXJyb3IgKyBcIicgdGhyZXcgZXJyb3IgJ1wiICsgZSArIFwiJy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeGl0IGVhcmx5IGlmIGFuIG9ucmVjb25uZWN0aW5nIGNhbGxiYWNrIGNhbGxlZCBjb25uZWN0aW9uLnN0b3AoKS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0ZSAhPT0gSHViQ29ubmVjdGlvblN0YXRlLlJlY29ubmVjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJDb25uZWN0aW9uIGxlZnQgdGhlIHJlY29ubmVjdGluZyBzdGF0ZSBpbiBvbnJlY29ubmVjdGluZyBjYWxsYmFjay4gRG9uZSByZWNvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShuZXh0UmV0cnlEZWxheSAhPT0gbnVsbCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiUmVjb25uZWN0IGF0dGVtcHQgbnVtYmVyIFwiICsgcHJldmlvdXNSZWNvbm5lY3RBdHRlbXB0cyArIFwiIHdpbGwgc3RhcnQgaW4gXCIgKyBuZXh0UmV0cnlEZWxheSArIFwiIG1zLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWNvbm5lY3REZWxheUhhbmRsZSA9IHNldFRpbWVvdXQocmVzb2x2ZSwgbmV4dFJldHJ5RGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29ubmVjdERlbGF5SGFuZGxlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUgIT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5SZWNvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJDb25uZWN0aW9uIGxlZnQgdGhlIHJlY29ubmVjdGluZyBzdGF0ZSBkdXJpbmcgcmVjb25uZWN0IGRlbGF5LiBEb25lIHJlY29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFszLCA1LCAsIDZdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zdGFydEludGVybmFsKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5Db25uZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJIdWJDb25uZWN0aW9uIHJlY29ubmVjdGVkIHN1Y2Nlc3NmdWxseS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ucmVjb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RlZENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmFwcGx5KF90aGlzLCBbX3RoaXMuY29ubmVjdGlvbi5jb25uZWN0aW9uSWRdKTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgXCJBbiBvbnJlY29ubmVjdGVkIGNhbGxiYWNrIGNhbGxlZCB3aXRoIGNvbm5lY3Rpb25JZCAnXCIgKyB0aGlzLmNvbm5lY3Rpb24uY29ubmVjdGlvbklkICsgXCI7IHRocmV3IGVycm9yICdcIiArIGUgKyBcIicuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfNCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBcIlJlY29ubmVjdCBhdHRlbXB0IGZhaWxlZCBiZWNhdXNlIG9mIGVycm9yICdcIiArIGVfNCArIFwiJy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0ZSAhPT0gSHViQ29ubmVjdGlvblN0YXRlLlJlY29ubmVjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkNvbm5lY3Rpb24gbGVmdCB0aGUgcmVjb25uZWN0aW5nIHN0YXRlIGR1cmluZyByZWNvbm5lY3QgYXR0ZW1wdC4gRG9uZSByZWNvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFJldHJ5RGVsYXkgPSB0aGlzLmdldE5leHRSZXRyeURlbGF5KHByZXZpb3VzUmVjb25uZWN0QXR0ZW1wdHMrKywgRGF0ZS5ub3coKSAtIHJlY29ubmVjdFN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBcIlJlY29ubmVjdCByZXRyaWVzIGhhdmUgYmVlbiBleGhhdXN0ZWQgYWZ0ZXIgXCIgKyAoRGF0ZS5ub3coKSAtIHJlY29ubmVjdFN0YXJ0VGltZSkgKyBcIiBtcyBhbmQgXCIgKyBwcmV2aW91c1JlY29ubmVjdEF0dGVtcHRzICsgXCIgZmFpbGVkIGF0dGVtcHRzLiBDb25uZWN0aW9uIGRpc2Nvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXROZXh0UmV0cnlEZWxheSA9IGZ1bmN0aW9uIChwcmV2aW91c1JldHJ5Q291bnQsIGVsYXBzZWRNaWxsaXNlY29uZHMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWNvbm5lY3RQb2xpY3kubmV4dFJldHJ5RGVsYXlJbk1pbGxpc2Vjb25kcyhwcmV2aW91c1JldHJ5Q291bnQsIGVsYXBzZWRNaWxsaXNlY29uZHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIFwiSVJlY29ubmVjdFBvbGljeS5uZXh0UmV0cnlEZWxheUluTWlsbGlzZWNvbmRzKFwiICsgcHJldmlvdXNSZXRyeUNvdW50ICsgXCIsIFwiICsgZWxhcHNlZE1pbGxpc2Vjb25kcyArIFwiKSB0aHJldyBlcnJvciAnXCIgKyBlICsgXCInLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLmNhbmNlbENhbGxiYWNrc1dpdGhFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHZhciBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrcztcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGNhbGxiYWNrcylcclxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3Nba2V5XTtcclxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLmNsZWFudXBQaW5nVGltZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGluZ1NlcnZlckhhbmRsZSkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nU2VydmVySGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuY2xlYW51cFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZW91dEhhbmRsZSkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlSW52b2NhdGlvbiA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBhcmdzLCBub25ibG9ja2luZywgc3RyZWFtSWRzKSB7XHJcbiAgICAgICAgaWYgKG5vbmJsb2NraW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICBzdHJlYW1JZHM6IHN0cmVhbUlkcyxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkludm9jYXRpb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgaW52b2NhdGlvbklkID0gdGhpcy5pbnZvY2F0aW9uSWQ7XHJcbiAgICAgICAgICAgIHRoaXMuaW52b2NhdGlvbklkKys7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGludm9jYXRpb25JZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgc3RyZWFtSWRzOiBzdHJlYW1JZHMsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IG1ldGhvZE5hbWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5JbnZvY2F0aW9uLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5sYXVuY2hTdHJlYW1zID0gZnVuY3Rpb24gKHN0cmVhbXMsIHByb21pc2VRdWV1ZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHN0cmVhbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3luY2hyb25pemUgc3RyZWFtIGRhdGEgc28gdGhleSBhcnJpdmUgaW4tb3JkZXIgb24gdGhlIHNlcnZlclxyXG4gICAgICAgIGlmICghcHJvbWlzZVF1ZXVlKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VRdWV1ZSA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChzdHJlYW1JZCkge1xyXG4gICAgICAgICAgICBzdHJlYW1zW3N0cmVhbUlkXS5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlUXVldWUgPSBwcm9taXNlUXVldWUudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zZW5kV2l0aFByb3RvY29sKF90aGlzLmNyZWF0ZUNvbXBsZXRpb25NZXNzYWdlKHN0cmVhbUlkKSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyICYmIGVyci50b1N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJVbmtub3duIGVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VRdWV1ZSA9IHByb21pc2VRdWV1ZS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnNlbmRXaXRoUHJvdG9jb2woX3RoaXMuY3JlYXRlQ29tcGxldGlvbk1lc3NhZ2Uoc3RyZWFtSWQsIG1lc3NhZ2UpKTsgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlUXVldWUgPSBwcm9taXNlUXVldWUudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zZW5kV2l0aFByb3RvY29sKF90aGlzLmNyZWF0ZVN0cmVhbUl0ZW1NZXNzYWdlKHN0cmVhbUlkLCBpdGVtKSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBXZSB3YW50IHRvIGl0ZXJhdGUgb3ZlciB0aGUga2V5cywgc2luY2UgdGhlIGtleXMgYXJlIHRoZSBzdHJlYW0gaWRzXHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXHJcbiAgICAgICAgZm9yICh2YXIgc3RyZWFtSWQgaW4gc3RyZWFtcykge1xyXG4gICAgICAgICAgICBfbG9vcF8xKHN0cmVhbUlkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUucmVwbGFjZVN0cmVhbWluZ1BhcmFtcyA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgdmFyIHN0cmVhbXMgPSBbXTtcclxuICAgICAgICB2YXIgc3RyZWFtSWRzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBhcmd1bWVudCA9IGFyZ3NbaV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2JzZXJ2YWJsZShhcmd1bWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdHJlYW1JZCA9IHRoaXMuaW52b2NhdGlvbklkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZvY2F0aW9uSWQrKztcclxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzdHJlYW0gZm9yIGxhdGVyIHVzZVxyXG4gICAgICAgICAgICAgICAgc3RyZWFtc1tzdHJlYW1JZF0gPSBhcmd1bWVudDtcclxuICAgICAgICAgICAgICAgIHN0cmVhbUlkcy5wdXNoKHN0cmVhbUlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHN0cmVhbSBmcm9tIGFyZ3NcclxuICAgICAgICAgICAgICAgIGFyZ3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbc3RyZWFtcywgc3RyZWFtSWRzXTtcclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5pc09ic2VydmFibGUgPSBmdW5jdGlvbiAoYXJnKSB7XHJcbiAgICAgICAgLy8gVGhpcyBhbGxvd3Mgb3RoZXIgc3RyZWFtIGltcGxlbWVudGF0aW9ucyB0byBqdXN0IHdvcmsgKGxpa2UgcnhqcylcclxuICAgICAgICByZXR1cm4gYXJnLnN1YnNjcmliZSAmJiB0eXBlb2YgYXJnLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb24ucHJvdG90eXBlLmNyZWF0ZVN0cmVhbUludm9jYXRpb24gPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgYXJncywgc3RyZWFtSWRzKSB7XHJcbiAgICAgICAgdmFyIGludm9jYXRpb25JZCA9IHRoaXMuaW52b2NhdGlvbklkO1xyXG4gICAgICAgIHRoaXMuaW52b2NhdGlvbklkKys7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzLFxyXG4gICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGludm9jYXRpb25JZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBzdHJlYW1JZHM6IHN0cmVhbUlkcyxcclxuICAgICAgICAgICAgdGFyZ2V0OiBtZXRob2ROYW1lLFxyXG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5TdHJlYW1JbnZvY2F0aW9uLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlQ2FuY2VsSW52b2NhdGlvbiA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGludm9jYXRpb25JZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNhbmNlbEludm9jYXRpb24sXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVTdHJlYW1JdGVtTWVzc2FnZSA9IGZ1bmN0aW9uIChpZCwgaXRlbSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGludm9jYXRpb25JZDogaWQsXHJcbiAgICAgICAgICAgIGl0ZW06IGl0ZW0sXHJcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlN0cmVhbUl0ZW0sXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBIdWJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVDb21wbGV0aW9uTWVzc2FnZSA9IGZ1bmN0aW9uIChpZCwgZXJyb3IsIHJlc3VsdCkge1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgaW52b2NhdGlvbklkOiBpZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNvbXBsZXRpb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGludm9jYXRpb25JZDogaWQsXHJcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxyXG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5Db21wbGV0aW9uLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEh1YkNvbm5lY3Rpb247XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEh1YkNvbm5lY3Rpb24gfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SHViQ29ubmVjdGlvbi5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbmltcG9ydCB7IERlZmF1bHRSZWNvbm5lY3RQb2xpY3kgfSBmcm9tIFwiLi9EZWZhdWx0UmVjb25uZWN0UG9saWN5XCI7XHJcbmltcG9ydCB7IEh0dHBDb25uZWN0aW9uIH0gZnJvbSBcIi4vSHR0cENvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgSHViQ29ubmVjdGlvbiB9IGZyb20gXCIuL0h1YkNvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IEpzb25IdWJQcm90b2NvbCB9IGZyb20gXCIuL0pzb25IdWJQcm90b2NvbFwiO1xyXG5pbXBvcnQgeyBOdWxsTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2Vyc1wiO1xyXG5pbXBvcnQgeyBBcmcsIENvbnNvbGVMb2dnZXIgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcclxudmFyIExvZ0xldmVsTmFtZU1hcHBpbmcgPSB7XHJcbiAgICB0cmFjZTogTG9nTGV2ZWwuVHJhY2UsXHJcbiAgICBkZWJ1ZzogTG9nTGV2ZWwuRGVidWcsXHJcbiAgICBpbmZvOiBMb2dMZXZlbC5JbmZvcm1hdGlvbixcclxuICAgIGluZm9ybWF0aW9uOiBMb2dMZXZlbC5JbmZvcm1hdGlvbixcclxuICAgIHdhcm46IExvZ0xldmVsLldhcm5pbmcsXHJcbiAgICB3YXJuaW5nOiBMb2dMZXZlbC5XYXJuaW5nLFxyXG4gICAgZXJyb3I6IExvZ0xldmVsLkVycm9yLFxyXG4gICAgY3JpdGljYWw6IExvZ0xldmVsLkNyaXRpY2FsLFxyXG4gICAgbm9uZTogTG9nTGV2ZWwuTm9uZSxcclxufTtcclxuZnVuY3Rpb24gcGFyc2VMb2dMZXZlbChuYW1lKSB7XHJcbiAgICAvLyBDYXNlLWluc2Vuc2l0aXZlIG1hdGNoaW5nIHZpYSBsb3dlci1jYXNpbmdcclxuICAgIC8vIFllcywgSSBrbm93IGNhc2UtZm9sZGluZyBpcyBhIGNvbXBsaWNhdGVkIHByb2JsZW0gaW4gVW5pY29kZSwgYnV0IHdlIG9ubHkgc3VwcG9ydFxyXG4gICAgLy8gdGhlIEFTQ0lJIHN0cmluZ3MgZGVmaW5lZCBpbiBMb2dMZXZlbE5hbWVNYXBwaW5nIGFueXdheSwgc28gaXQncyBmaW5lIC1hbnVyc2UuXHJcbiAgICB2YXIgbWFwcGluZyA9IExvZ0xldmVsTmFtZU1hcHBpbmdbbmFtZS50b0xvd2VyQ2FzZSgpXTtcclxuICAgIGlmICh0eXBlb2YgbWFwcGluZyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiBtYXBwaW5nO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBsb2cgbGV2ZWw6IFwiICsgbmFtZSk7XHJcbiAgICB9XHJcbn1cclxuLyoqIEEgYnVpbGRlciBmb3IgY29uZmlndXJpbmcge0BsaW5rIEBhc3BuZXQvc2lnbmFsci5IdWJDb25uZWN0aW9ufSBpbnN0YW5jZXMuICovXHJcbnZhciBIdWJDb25uZWN0aW9uQnVpbGRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEh1YkNvbm5lY3Rpb25CdWlsZGVyKCkge1xyXG4gICAgfVxyXG4gICAgSHViQ29ubmVjdGlvbkJ1aWxkZXIucHJvdG90eXBlLmNvbmZpZ3VyZUxvZ2dpbmcgPSBmdW5jdGlvbiAobG9nZ2luZykge1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKGxvZ2dpbmcsIFwibG9nZ2luZ1wiKTtcclxuICAgICAgICBpZiAoaXNMb2dnZXIobG9nZ2luZykpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgbG9nZ2luZyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB2YXIgbG9nTGV2ZWwgPSBwYXJzZUxvZ0xldmVsKGxvZ2dpbmcpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlciA9IG5ldyBDb25zb2xlTG9nZ2VyKGxvZ0xldmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyID0gbmV3IENvbnNvbGVMb2dnZXIobG9nZ2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEh1YkNvbm5lY3Rpb25CdWlsZGVyLnByb3RvdHlwZS53aXRoVXJsID0gZnVuY3Rpb24gKHVybCwgdHJhbnNwb3J0VHlwZU9yT3B0aW9ucykge1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHVybCwgXCJ1cmxcIik7XHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICAgICAgLy8gRmxvdy10eXBpbmcga25vd3Mgd2hlcmUgaXQncyBhdC4gU2luY2UgSHR0cFRyYW5zcG9ydFR5cGUgaXMgYSBudW1iZXIgYW5kIElIdHRwQ29ubmVjdGlvbk9wdGlvbnMgaXMgZ3VhcmFudGVlZFxyXG4gICAgICAgIC8vIHRvIGJlIGFuIG9iamVjdCwgd2Uga25vdyAoYXMgZG9lcyBUeXBlU2NyaXB0KSB0aGlzIGNvbXBhcmlzb24gaXMgYWxsIHdlIG5lZWQgdG8gZmlndXJlIG91dCB3aGljaCBvdmVybG9hZCB3YXMgY2FsbGVkLlxyXG4gICAgICAgIGlmICh0eXBlb2YgdHJhbnNwb3J0VHlwZU9yT3B0aW9ucyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICB0aGlzLmh0dHBDb25uZWN0aW9uT3B0aW9ucyA9IF9fYXNzaWduKHt9LCB0aGlzLmh0dHBDb25uZWN0aW9uT3B0aW9ucywgdHJhbnNwb3J0VHlwZU9yT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmh0dHBDb25uZWN0aW9uT3B0aW9ucyA9IF9fYXNzaWduKHt9LCB0aGlzLmh0dHBDb25uZWN0aW9uT3B0aW9ucywgeyB0cmFuc3BvcnQ6IHRyYW5zcG9ydFR5cGVPck9wdGlvbnMgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIC8qKiBDb25maWd1cmVzIHRoZSB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLkh1YkNvbm5lY3Rpb259IHRvIHVzZSB0aGUgc3BlY2lmaWVkIEh1YiBQcm90b2NvbC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0lIdWJQcm90b2NvbH0gcHJvdG9jb2wgVGhlIHtAbGluayBAYXNwbmV0L3NpZ25hbHIuSUh1YlByb3RvY29sfSBpbXBsZW1lbnRhdGlvbiB0byB1c2UuXHJcbiAgICAgKi9cclxuICAgIEh1YkNvbm5lY3Rpb25CdWlsZGVyLnByb3RvdHlwZS53aXRoSHViUHJvdG9jb2wgPSBmdW5jdGlvbiAocHJvdG9jb2wpIHtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZChwcm90b2NvbCwgXCJwcm90b2NvbFwiKTtcclxuICAgICAgICB0aGlzLnByb3RvY29sID0gcHJvdG9jb2w7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgSHViQ29ubmVjdGlvbkJ1aWxkZXIucHJvdG90eXBlLndpdGhBdXRvbWF0aWNSZWNvbm5lY3QgPSBmdW5jdGlvbiAocmV0cnlEZWxheXNPclJlY29ubmVjdFBvbGljeSkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlY29ubmVjdFBvbGljeSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIHJlY29ubmVjdFBvbGljeSBoYXMgYWxyZWFkeSBiZWVuIHNldC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmV0cnlEZWxheXNPclJlY29ubmVjdFBvbGljeSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdFBvbGljeSA9IG5ldyBEZWZhdWx0UmVjb25uZWN0UG9saWN5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmV0cnlEZWxheXNPclJlY29ubmVjdFBvbGljeSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RQb2xpY3kgPSBuZXcgRGVmYXVsdFJlY29ubmVjdFBvbGljeShyZXRyeURlbGF5c09yUmVjb25uZWN0UG9saWN5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0UG9saWN5ID0gcmV0cnlEZWxheXNPclJlY29ubmVjdFBvbGljeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgLyoqIENyZWF0ZXMgYSB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLkh1YkNvbm5lY3Rpb259IGZyb20gdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBzcGVjaWZpZWQgaW4gdGhpcyBidWlsZGVyLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtIdWJDb25uZWN0aW9ufSBUaGUgY29uZmlndXJlZCB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLkh1YkNvbm5lY3Rpb259LlxyXG4gICAgICovXHJcbiAgICBIdWJDb25uZWN0aW9uQnVpbGRlci5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gSWYgaHR0cENvbm5lY3Rpb25PcHRpb25zIGhhcyBhIGxvZ2dlciwgdXNlIGl0LiBPdGhlcndpc2UsIG92ZXJyaWRlIGl0IHdpdGggdGhlIG9uZVxyXG4gICAgICAgIC8vIHByb3ZpZGVkIHRvIGNvbmZpZ3VyZUxvZ2dlclxyXG4gICAgICAgIHZhciBodHRwQ29ubmVjdGlvbk9wdGlvbnMgPSB0aGlzLmh0dHBDb25uZWN0aW9uT3B0aW9ucyB8fCB7fTtcclxuICAgICAgICAvLyBJZiBpdCdzICdudWxsJywgdGhlIHVzZXIgKipleHBsaWNpdGx5KiogYXNrZWQgZm9yIG51bGwsIGRvbid0IG1lc3Mgd2l0aCBpdC5cclxuICAgICAgICBpZiAoaHR0cENvbm5lY3Rpb25PcHRpb25zLmxvZ2dlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIElmIG91ciBsb2dnZXIgaXMgdW5kZWZpbmVkIG9yIG51bGwsIHRoYXQncyBPSywgdGhlIEh0dHBDb25uZWN0aW9uIGNvbnN0cnVjdG9yIHdpbGwgaGFuZGxlIGl0LlxyXG4gICAgICAgICAgICBodHRwQ29ubmVjdGlvbk9wdGlvbnMubG9nZ2VyID0gdGhpcy5sb2dnZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE5vdyBjcmVhdGUgdGhlIGNvbm5lY3Rpb25cclxuICAgICAgICBpZiAoIXRoaXMudXJsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnSHViQ29ubmVjdGlvbkJ1aWxkZXIud2l0aFVybCcgbWV0aG9kIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBidWlsZGluZyB0aGUgY29ubmVjdGlvbi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gbmV3IEh0dHBDb25uZWN0aW9uKHRoaXMudXJsLCBodHRwQ29ubmVjdGlvbk9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBIdWJDb25uZWN0aW9uLmNyZWF0ZShjb25uZWN0aW9uLCB0aGlzLmxvZ2dlciB8fCBOdWxsTG9nZ2VyLmluc3RhbmNlLCB0aGlzLnByb3RvY29sIHx8IG5ldyBKc29uSHViUHJvdG9jb2woKSwgdGhpcy5yZWNvbm5lY3RQb2xpY3kpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBIdWJDb25uZWN0aW9uQnVpbGRlcjtcclxufSgpKTtcclxuZXhwb3J0IHsgSHViQ29ubmVjdGlvbkJ1aWxkZXIgfTtcclxuZnVuY3Rpb24gaXNMb2dnZXIobG9nZ2VyKSB7XHJcbiAgICByZXR1cm4gbG9nZ2VyLmxvZyAhPT0gdW5kZWZpbmVkO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUh1YkNvbm5lY3Rpb25CdWlsZGVyLmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuLyoqIERlZmluZXMgdGhlIHR5cGUgb2YgYSBIdWIgTWVzc2FnZS4gKi9cclxuZXhwb3J0IHZhciBNZXNzYWdlVHlwZTtcclxuKGZ1bmN0aW9uIChNZXNzYWdlVHlwZSkge1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhbiBJbnZvY2F0aW9uIG1lc3NhZ2UgYW5kIGltcGxlbWVudHMgdGhlIHtAbGluayBAYXNwbmV0L3NpZ25hbHIuSW52b2NhdGlvbk1lc3NhZ2V9IGludGVyZmFjZS4gKi9cclxuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiSW52b2NhdGlvblwiXSA9IDFdID0gXCJJbnZvY2F0aW9uXCI7XHJcbiAgICAvKiogSW5kaWNhdGVzIHRoZSBtZXNzYWdlIGlzIGEgU3RyZWFtSXRlbSBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLlN0cmVhbUl0ZW1NZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIlN0cmVhbUl0ZW1cIl0gPSAyXSA9IFwiU3RyZWFtSXRlbVwiO1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhIENvbXBsZXRpb24gbWVzc2FnZSBhbmQgaW1wbGVtZW50cyB0aGUge0BsaW5rIEBhc3BuZXQvc2lnbmFsci5Db21wbGV0aW9uTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJDb21wbGV0aW9uXCJdID0gM10gPSBcIkNvbXBsZXRpb25cIjtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYSBTdHJlYW0gSW52b2NhdGlvbiBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLlN0cmVhbUludm9jYXRpb25NZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIlN0cmVhbUludm9jYXRpb25cIl0gPSA0XSA9IFwiU3RyZWFtSW52b2NhdGlvblwiO1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhIENhbmNlbCBJbnZvY2F0aW9uIG1lc3NhZ2UgYW5kIGltcGxlbWVudHMgdGhlIHtAbGluayBAYXNwbmV0L3NpZ25hbHIuQ2FuY2VsSW52b2NhdGlvbk1lc3NhZ2V9IGludGVyZmFjZS4gKi9cclxuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiQ2FuY2VsSW52b2NhdGlvblwiXSA9IDVdID0gXCJDYW5jZWxJbnZvY2F0aW9uXCI7XHJcbiAgICAvKiogSW5kaWNhdGVzIHRoZSBtZXNzYWdlIGlzIGEgUGluZyBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLlBpbmdNZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIlBpbmdcIl0gPSA2XSA9IFwiUGluZ1wiO1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhIENsb3NlIG1lc3NhZ2UgYW5kIGltcGxlbWVudHMgdGhlIHtAbGluayBAYXNwbmV0L3NpZ25hbHIuQ2xvc2VNZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkNsb3NlXCJdID0gN10gPSBcIkNsb3NlXCI7XHJcbn0pKE1lc3NhZ2VUeXBlIHx8IChNZXNzYWdlVHlwZSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlIdWJQcm90b2NvbC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbi8vIFRoZXNlIHZhbHVlcyBhcmUgZGVzaWduZWQgdG8gbWF0Y2ggdGhlIEFTUC5ORVQgTG9nIExldmVscyBzaW5jZSB0aGF0J3MgdGhlIHBhdHRlcm4gd2UncmUgZW11bGF0aW5nIGhlcmUuXHJcbi8qKiBJbmRpY2F0ZXMgdGhlIHNldmVyaXR5IG9mIGEgbG9nIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIExvZyBMZXZlbHMgYXJlIG9yZGVyZWQgaW4gaW5jcmVhc2luZyBzZXZlcml0eS4gU28gYERlYnVnYCBpcyBtb3JlIHNldmVyZSB0aGFuIGBUcmFjZWAsIGV0Yy5cclxuICovXHJcbmV4cG9ydCB2YXIgTG9nTGV2ZWw7XHJcbihmdW5jdGlvbiAoTG9nTGV2ZWwpIHtcclxuICAgIC8qKiBMb2cgbGV2ZWwgZm9yIHZlcnkgbG93IHNldmVyaXR5IGRpYWdub3N0aWMgbWVzc2FnZXMuICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlRyYWNlXCJdID0gMF0gPSBcIlRyYWNlXCI7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciBsb3cgc2V2ZXJpdHkgZGlhZ25vc3RpYyBtZXNzYWdlcy4gKi9cclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiRGVidWdcIl0gPSAxXSA9IFwiRGVidWdcIjtcclxuICAgIC8qKiBMb2cgbGV2ZWwgZm9yIGluZm9ybWF0aW9uYWwgZGlhZ25vc3RpYyBtZXNzYWdlcy4gKi9cclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiSW5mb3JtYXRpb25cIl0gPSAyXSA9IFwiSW5mb3JtYXRpb25cIjtcclxuICAgIC8qKiBMb2cgbGV2ZWwgZm9yIGRpYWdub3N0aWMgbWVzc2FnZXMgdGhhdCBpbmRpY2F0ZSBhIG5vbi1mYXRhbCBwcm9ibGVtLiAqL1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJXYXJuaW5nXCJdID0gM10gPSBcIldhcm5pbmdcIjtcclxuICAgIC8qKiBMb2cgbGV2ZWwgZm9yIGRpYWdub3N0aWMgbWVzc2FnZXMgdGhhdCBpbmRpY2F0ZSBhIGZhaWx1cmUgaW4gdGhlIGN1cnJlbnQgb3BlcmF0aW9uLiAqL1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJFcnJvclwiXSA9IDRdID0gXCJFcnJvclwiO1xyXG4gICAgLyoqIExvZyBsZXZlbCBmb3IgZGlhZ25vc3RpYyBtZXNzYWdlcyB0aGF0IGluZGljYXRlIGEgZmFpbHVyZSB0aGF0IHdpbGwgdGVybWluYXRlIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkNyaXRpY2FsXCJdID0gNV0gPSBcIkNyaXRpY2FsXCI7XHJcbiAgICAvKiogVGhlIGhpZ2hlc3QgcG9zc2libGUgbG9nIGxldmVsLiBVc2VkIHdoZW4gY29uZmlndXJpbmcgbG9nZ2luZyB0byBpbmRpY2F0ZSB0aGF0IG5vIGxvZyBtZXNzYWdlcyBzaG91bGQgYmUgZW1pdHRlZC4gKi9cclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiTm9uZVwiXSA9IDZdID0gXCJOb25lXCI7XHJcbn0pKExvZ0xldmVsIHx8IChMb2dMZXZlbCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlMb2dnZXIuanMubWFwIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4vLyBUaGlzIHdpbGwgYmUgdHJlYXRlZCBhcyBhIGJpdCBmbGFnIGluIHRoZSBmdXR1cmUsIHNvIHdlIGtlZXAgaXQgdXNpbmcgcG93ZXItb2YtdHdvIHZhbHVlcy5cclxuLyoqIFNwZWNpZmllcyBhIHNwZWNpZmljIEhUVFAgdHJhbnNwb3J0IHR5cGUuICovXHJcbmV4cG9ydCB2YXIgSHR0cFRyYW5zcG9ydFR5cGU7XHJcbihmdW5jdGlvbiAoSHR0cFRyYW5zcG9ydFR5cGUpIHtcclxuICAgIC8qKiBTcGVjaWZpZXMgbm8gdHJhbnNwb3J0IHByZWZlcmVuY2UuICovXHJcbiAgICBIdHRwVHJhbnNwb3J0VHlwZVtIdHRwVHJhbnNwb3J0VHlwZVtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xyXG4gICAgLyoqIFNwZWNpZmllcyB0aGUgV2ViU29ja2V0cyB0cmFuc3BvcnQuICovXHJcbiAgICBIdHRwVHJhbnNwb3J0VHlwZVtIdHRwVHJhbnNwb3J0VHlwZVtcIldlYlNvY2tldHNcIl0gPSAxXSA9IFwiV2ViU29ja2V0c1wiO1xyXG4gICAgLyoqIFNwZWNpZmllcyB0aGUgU2VydmVyLVNlbnQgRXZlbnRzIHRyYW5zcG9ydC4gKi9cclxuICAgIEh0dHBUcmFuc3BvcnRUeXBlW0h0dHBUcmFuc3BvcnRUeXBlW1wiU2VydmVyU2VudEV2ZW50c1wiXSA9IDJdID0gXCJTZXJ2ZXJTZW50RXZlbnRzXCI7XHJcbiAgICAvKiogU3BlY2lmaWVzIHRoZSBMb25nIFBvbGxpbmcgdHJhbnNwb3J0LiAqL1xyXG4gICAgSHR0cFRyYW5zcG9ydFR5cGVbSHR0cFRyYW5zcG9ydFR5cGVbXCJMb25nUG9sbGluZ1wiXSA9IDRdID0gXCJMb25nUG9sbGluZ1wiO1xyXG59KShIdHRwVHJhbnNwb3J0VHlwZSB8fCAoSHR0cFRyYW5zcG9ydFR5cGUgPSB7fSkpO1xyXG4vKiogU3BlY2lmaWVzIHRoZSB0cmFuc2ZlciBmb3JtYXQgZm9yIGEgY29ubmVjdGlvbi4gKi9cclxuZXhwb3J0IHZhciBUcmFuc2ZlckZvcm1hdDtcclxuKGZ1bmN0aW9uIChUcmFuc2ZlckZvcm1hdCkge1xyXG4gICAgLyoqIFNwZWNpZmllcyB0aGF0IG9ubHkgdGV4dCBkYXRhIHdpbGwgYmUgdHJhbnNtaXR0ZWQgb3ZlciB0aGUgY29ubmVjdGlvbi4gKi9cclxuICAgIFRyYW5zZmVyRm9ybWF0W1RyYW5zZmVyRm9ybWF0W1wiVGV4dFwiXSA9IDFdID0gXCJUZXh0XCI7XHJcbiAgICAvKiogU3BlY2lmaWVzIHRoYXQgYmluYXJ5IGRhdGEgd2lsbCBiZSB0cmFuc21pdHRlZCBvdmVyIHRoZSBjb25uZWN0aW9uLiAqL1xyXG4gICAgVHJhbnNmZXJGb3JtYXRbVHJhbnNmZXJGb3JtYXRbXCJCaW5hcnlcIl0gPSAyXSA9IFwiQmluYXJ5XCI7XHJcbn0pKFRyYW5zZmVyRm9ybWF0IHx8IChUcmFuc2ZlckZvcm1hdCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlUcmFuc3BvcnQuanMubWFwIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5pbXBvcnQgeyBNZXNzYWdlVHlwZSB9IGZyb20gXCIuL0lIdWJQcm90b2NvbFwiO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgVHJhbnNmZXJGb3JtYXQgfSBmcm9tIFwiLi9JVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IE51bGxMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJzXCI7XHJcbmltcG9ydCB7IFRleHRNZXNzYWdlRm9ybWF0IH0gZnJvbSBcIi4vVGV4dE1lc3NhZ2VGb3JtYXRcIjtcclxudmFyIEpTT05fSFVCX1BST1RPQ09MX05BTUUgPSBcImpzb25cIjtcclxuLyoqIEltcGxlbWVudHMgdGhlIEpTT04gSHViIFByb3RvY29sLiAqL1xyXG52YXIgSnNvbkh1YlByb3RvY29sID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSnNvbkh1YlByb3RvY29sKCkge1xyXG4gICAgICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgICAgIHRoaXMubmFtZSA9IEpTT05fSFVCX1BST1RPQ09MX05BTUU7XHJcbiAgICAgICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gMTtcclxuICAgICAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgICAgICB0aGlzLnRyYW5zZmVyRm9ybWF0ID0gVHJhbnNmZXJGb3JtYXQuVGV4dDtcclxuICAgIH1cclxuICAgIC8qKiBDcmVhdGVzIGFuIGFycmF5IG9mIHtAbGluayBAYXNwbmV0L3NpZ25hbHIuSHViTWVzc2FnZX0gb2JqZWN0cyBmcm9tIHRoZSBzcGVjaWZpZWQgc2VyaWFsaXplZCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgQSBzdHJpbmcgY29udGFpbmluZyB0aGUgc2VyaWFsaXplZCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqIEBwYXJhbSB7SUxvZ2dlcn0gbG9nZ2VyIEEgbG9nZ2VyIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGxvZyBtZXNzYWdlcyB0aGF0IG9jY3VyIGR1cmluZyBwYXJzaW5nLlxyXG4gICAgICovXHJcbiAgICBKc29uSHViUHJvdG9jb2wucHJvdG90eXBlLnBhcnNlTWVzc2FnZXMgPSBmdW5jdGlvbiAoaW5wdXQsIGxvZ2dlcikge1xyXG4gICAgICAgIC8vIFRoZSBpbnRlcmZhY2UgZG9lcyBhbGxvdyBcIkFycmF5QnVmZmVyXCIgdG8gYmUgcGFzc2VkIGluLCBidXQgdGhpcyBpbXBsZW1lbnRhdGlvbiBkb2VzIG5vdC4gU28gbGV0J3MgdGhyb3cgYSB1c2VmdWwgZXJyb3IuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0IGZvciBKU09OIGh1YiBwcm90b2NvbC4gRXhwZWN0ZWQgYSBzdHJpbmcuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlucHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvZ2dlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsb2dnZXIgPSBOdWxsTG9nZ2VyLmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBQYXJzZSB0aGUgbWVzc2FnZXNcclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSBUZXh0TWVzc2FnZUZvcm1hdC5wYXJzZShpbnB1dCk7XHJcbiAgICAgICAgdmFyIGh1Yk1lc3NhZ2VzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtZXNzYWdlc18xID0gbWVzc2FnZXM7IF9pIDwgbWVzc2FnZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBtZXNzYWdlc18xW19pXTtcclxuICAgICAgICAgICAgdmFyIHBhcnNlZE1lc3NhZ2UgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcnNlZE1lc3NhZ2UudHlwZSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXlsb2FkLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzd2l0Y2ggKHBhcnNlZE1lc3NhZ2UudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5JbnZvY2F0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNJbnZvY2F0aW9uTWVzc2FnZShwYXJzZWRNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuU3RyZWFtSXRlbTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3RyZWFtSXRlbU1lc3NhZ2UocGFyc2VkTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNvbXBsZXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRpb25NZXNzYWdlKHBhcnNlZE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5QaW5nOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmdsZSB2YWx1ZSwgbm8gbmVlZCB0byB2YWxpZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5DbG9zZTpcclxuICAgICAgICAgICAgICAgICAgICAvLyBBbGwgb3B0aW9uYWwgdmFsdWVzLCBubyBuZWVkIHRvIHZhbGlkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZ1dHVyZSBwcm90b2NvbCBjaGFuZ2VzIGNhbiBhZGQgbWVzc2FnZSB0eXBlcywgb2xkIGNsaWVudHMgY2FuIGlnbm9yZSB0aGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJVbmtub3duIG1lc3NhZ2UgdHlwZSAnXCIgKyBwYXJzZWRNZXNzYWdlLnR5cGUgKyBcIicgaWdub3JlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaHViTWVzc2FnZXMucHVzaChwYXJzZWRNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGh1Yk1lc3NhZ2VzO1xyXG4gICAgfTtcclxuICAgIC8qKiBXcml0ZXMgdGhlIHNwZWNpZmllZCB7QGxpbmsgQGFzcG5ldC9zaWduYWxyLkh1Yk1lc3NhZ2V9IHRvIGEgc3RyaW5nIGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SHViTWVzc2FnZX0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byB3cml0ZS5cclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHNlcmlhbGl6ZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIEpzb25IdWJQcm90b2NvbC5wcm90b3R5cGUud3JpdGVNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gVGV4dE1lc3NhZ2VGb3JtYXQud3JpdGUoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG4gICAgfTtcclxuICAgIEpzb25IdWJQcm90b2NvbC5wcm90b3R5cGUuaXNJbnZvY2F0aW9uTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5hc3NlcnROb3RFbXB0eVN0cmluZyhtZXNzYWdlLnRhcmdldCwgXCJJbnZhbGlkIHBheWxvYWQgZm9yIEludm9jYXRpb24gbWVzc2FnZS5cIik7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UuaW52b2NhdGlvbklkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hc3NlcnROb3RFbXB0eVN0cmluZyhtZXNzYWdlLmludm9jYXRpb25JZCwgXCJJbnZhbGlkIHBheWxvYWQgZm9yIEludm9jYXRpb24gbWVzc2FnZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEpzb25IdWJQcm90b2NvbC5wcm90b3R5cGUuaXNTdHJlYW1JdGVtTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5hc3NlcnROb3RFbXB0eVN0cmluZyhtZXNzYWdlLmludm9jYXRpb25JZCwgXCJJbnZhbGlkIHBheWxvYWQgZm9yIFN0cmVhbUl0ZW0gbWVzc2FnZS5cIik7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UuaXRlbSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGF5bG9hZCBmb3IgU3RyZWFtSXRlbSBtZXNzYWdlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSnNvbkh1YlByb3RvY29sLnByb3RvdHlwZS5pc0NvbXBsZXRpb25NZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAobWVzc2FnZS5yZXN1bHQgJiYgbWVzc2FnZS5lcnJvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBheWxvYWQgZm9yIENvbXBsZXRpb24gbWVzc2FnZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbWVzc2FnZS5yZXN1bHQgJiYgbWVzc2FnZS5lcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5U3RyaW5nKG1lc3NhZ2UuZXJyb3IsIFwiSW52YWxpZCBwYXlsb2FkIGZvciBDb21wbGV0aW9uIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5U3RyaW5nKG1lc3NhZ2UuaW52b2NhdGlvbklkLCBcIkludmFsaWQgcGF5bG9hZCBmb3IgQ29tcGxldGlvbiBtZXNzYWdlLlwiKTtcclxuICAgIH07XHJcbiAgICBKc29uSHViUHJvdG9jb2wucHJvdG90eXBlLmFzc2VydE5vdEVtcHR5U3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiIHx8IHZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gSnNvbkh1YlByb3RvY29sO1xyXG59KCkpO1xyXG5leHBvcnQgeyBKc29uSHViUHJvdG9jb2wgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SnNvbkh1YlByb3RvY29sLmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuLyoqIEEgbG9nZ2VyIHRoYXQgZG9lcyBub3RoaW5nIHdoZW4gbG9nIG1lc3NhZ2VzIGFyZSBzZW50IHRvIGl0LiAqL1xyXG52YXIgTnVsbExvZ2dlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE51bGxMb2dnZXIoKSB7XHJcbiAgICB9XHJcbiAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgTnVsbExvZ2dlci5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKF9sb2dMZXZlbCwgX21lc3NhZ2UpIHtcclxuICAgIH07XHJcbiAgICAvKiogVGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIEBhc3BuZXQvc2lnbmFsci5OdWxsTG9nZ2VyfS4gKi9cclxuICAgIE51bGxMb2dnZXIuaW5zdGFuY2UgPSBuZXcgTnVsbExvZ2dlcigpO1xyXG4gICAgcmV0dXJuIE51bGxMb2dnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IE51bGxMb2dnZXIgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TG9nZ2Vycy5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IHsgQWJvcnRDb250cm9sbGVyIH0gZnJvbSBcIi4vQWJvcnRDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IEh0dHBFcnJvciwgVGltZW91dEVycm9yIH0gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBUcmFuc2ZlckZvcm1hdCB9IGZyb20gXCIuL0lUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgQXJnLCBnZXREYXRhRGV0YWlsLCBzZW5kTWVzc2FnZSB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbi8vIE5vdCBleHBvcnRlZCBmcm9tICdpbmRleCcsIHRoaXMgdHlwZSBpcyBpbnRlcm5hbC5cclxuLyoqIEBwcml2YXRlICovXHJcbnZhciBMb25nUG9sbGluZ1RyYW5zcG9ydCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExvbmdQb2xsaW5nVHJhbnNwb3J0KGh0dHBDbGllbnQsIGFjY2Vzc1Rva2VuRmFjdG9yeSwgbG9nZ2VyLCBsb2dNZXNzYWdlQ29udGVudCkge1xyXG4gICAgICAgIHRoaXMuaHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbkZhY3RvcnkgPSBhY2Nlc3NUb2tlbkZhY3Rvcnk7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICAgICAgdGhpcy5wb2xsQWJvcnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlQ29udGVudCA9IGxvZ01lc3NhZ2VDb250ZW50O1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25yZWNlaXZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uY2xvc2UgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExvbmdQb2xsaW5nVHJhbnNwb3J0LnByb3RvdHlwZSwgXCJwb2xsQWJvcnRlZFwiLCB7XHJcbiAgICAgICAgLy8gVGhpcyBpcyBhbiBpbnRlcm5hbCB0eXBlLCBub3QgZXhwb3J0ZWQgZnJvbSAnaW5kZXgnIHNvIHRoaXMgaXMgcmVhbGx5IGp1c3QgaW50ZXJuYWwuXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbGxBYm9ydC5hYm9ydGVkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTG9uZ1BvbGxpbmdUcmFuc3BvcnQucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAodXJsLCB0cmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBvbGxPcHRpb25zLCB0b2tlbiwgcG9sbFVybCwgcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyZy5pc1JlcXVpcmVkKHVybCwgXCJ1cmxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyZy5pc1JlcXVpcmVkKHRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcmcuaXNJbih0cmFuc2ZlckZvcm1hdCwgVHJhbnNmZXJGb3JtYXQsIFwidHJhbnNmZXJGb3JtYXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgQ29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbG93IGJpbmFyeSBmb3JtYXQgb24gTm9kZSBhbmQgQnJvd3NlcnMgdGhhdCBzdXBwb3J0IGJpbmFyeSBjb250ZW50IChpbmRpY2F0ZWQgYnkgdGhlIHByZXNlbmNlIG9mIHJlc3BvbnNlVHlwZSBwcm9wZXJ0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zZmVyRm9ybWF0ID09PSBUcmFuc2ZlckZvcm1hdC5CaW5hcnkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIG5ldyBYTUxIdHRwUmVxdWVzdCgpLnJlc3BvbnNlVHlwZSAhPT0gXCJzdHJpbmdcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJpbmFyeSBwcm90b2NvbHMgb3ZlciBYbWxIdHRwUmVxdWVzdCBub3QgaW1wbGVtZW50aW5nIGFkdmFuY2VkIGZlYXR1cmVzIGFyZSBub3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2xsT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0U2lnbmFsOiB0aGlzLnBvbGxBYm9ydC5zaWduYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zZmVyRm9ybWF0ID09PSBUcmFuc2ZlckZvcm1hdC5CaW5hcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGxPcHRpb25zLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldEFjY2Vzc1Rva2VuKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSGVhZGVyVG9rZW4ocG9sbE9wdGlvbnMsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9sbFVybCA9IHVybCArIFwiJl89XCIgKyBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgcG9sbGluZzogXCIgKyBwb2xsVXJsICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmh0dHBDbGllbnQuZ2V0KHBvbGxVcmwsIHBvbGxPcHRpb25zKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFVuZXhwZWN0ZWQgcmVzcG9uc2UgY29kZTogXCIgKyByZXNwb25zZS5zdGF0dXNDb2RlICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFyayBydW5uaW5nIGFzIGZhbHNlIHNvIHRoYXQgdGhlIHBvbGwgaW1tZWRpYXRlbHkgZW5kcyBhbmQgcnVucyB0aGUgY2xvc2UgbG9naWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VFcnJvciA9IG5ldyBIdHRwRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCB8fCBcIlwiLCByZXNwb25zZS5zdGF0dXNDb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2VpdmluZyA9IHRoaXMucG9sbCh0aGlzLnVybCwgcG9sbE9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExvbmdQb2xsaW5nVHJhbnNwb3J0LnByb3RvdHlwZS5nZXRBY2Nlc3NUb2tlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hY2Nlc3NUb2tlbkZhY3RvcnkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmFjY2Vzc1Rva2VuRmFjdG9yeSgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMb25nUG9sbGluZ1RyYW5zcG9ydC5wcm90b3R5cGUudXBkYXRlSGVhZGVyVG9rZW4gPSBmdW5jdGlvbiAocmVxdWVzdCwgdG9rZW4pIHtcclxuICAgICAgICBpZiAoIXJlcXVlc3QuaGVhZGVycykge1xyXG4gICAgICAgICAgICByZXF1ZXN0LmhlYWRlcnMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxyXG4gICAgICAgICAgICByZXF1ZXN0LmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIgKyB0b2tlbjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcclxuICAgICAgICBpZiAocmVxdWVzdC5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcclxuICAgICAgICAgICAgZGVsZXRlIHJlcXVlc3QuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExvbmdQb2xsaW5nVHJhbnNwb3J0LnByb3RvdHlwZS5wb2xsID0gZnVuY3Rpb24gKHVybCwgcG9sbE9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiwgcG9sbFVybCwgcmVzcG9uc2UsIGVfMTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAsIDgsIDldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldEFjY2Vzc1Rva2VuKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSGVhZGVyVG9rZW4ocG9sbE9wdGlvbnMsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFszLCA1LCAsIDZdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9sbFVybCA9IHVybCArIFwiJl89XCIgKyBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgcG9sbGluZzogXCIgKyBwb2xsVXJsICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmh0dHBDbGllbnQuZ2V0KHBvbGxVcmwsIHBvbGxPcHRpb25zKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFBvbGwgdGVybWluYXRlZCBieSBzZXJ2ZXIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgVW5leHBlY3RlZCByZXNwb25zZSBjb2RlOiBcIiArIHJlc3BvbnNlLnN0YXR1c0NvZGUgKyBcIi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVbmV4cGVjdGVkIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRXJyb3IgPSBuZXcgSHR0cEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQgfHwgXCJcIiwgcmVzcG9uc2Uuc3RhdHVzQ29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBkYXRhIHJlY2VpdmVkLiBcIiArIGdldERhdGFEZXRhaWwocmVzcG9uc2UuY29udGVudCwgdGhpcy5sb2dNZXNzYWdlQ29udGVudCkgKyBcIi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25yZWNlaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25yZWNlaXZlKHJlc3BvbnNlLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW5vdGhlciB3YXkgdGltZW91dCBtYW5pZmVzdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgUG9sbCB0aW1lZCBvdXQsIHJlaXNzdWluZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb2cgYnV0IGRpc3JlZ2FyZCBlcnJvcnMgdGhhdCBvY2N1ciBhZnRlciBzdG9wcGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFBvbGwgZXJyb3JlZCBhZnRlciBzaHV0ZG93bjogXCIgKyBlXzEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZV8xIGluc3RhbmNlb2YgVGltZW91dEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIHRpbWVvdXRzIGFuZCByZWlzc3VlIHRoZSBwb2xsLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBQb2xsIHRpbWVkIG91dCwgcmVpc3N1aW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIHRoZSBjb25uZWN0aW9uIHdpdGggdGhlIGVycm9yIGFzIHRoZSByZXN1bHQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUVycm9yID0gZV8xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzMgLypicmVhayovLCA5XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBQb2xsaW5nIGNvbXBsZXRlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2Ugd2lsbCByZWFjaCBoZXJlIHdpdGggcG9sbEFib3J0ZWQ9PWZhbHNlIHdoZW4gdGhlIHNlcnZlciByZXR1cm5lZCBhIHJlc3BvbnNlIGNhdXNpbmcgdGhlIHRyYW5zcG9ydCB0byBzdG9wLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBwb2xsQWJvcnRlZD09dHJ1ZSB0aGVuIGNsaWVudCBpbml0aWF0ZWQgdGhlIHN0b3AgYW5kIHRoZSBzdG9wIG1ldGhvZCB3aWxsIHJhaXNlIHRoZSBjbG9zZSBldmVudCBhZnRlciBERUxFVEUgaXMgc2VudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBvbGxBYm9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJhaXNlT25DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExvbmdQb2xsaW5nVHJhbnNwb3J0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbm5vdCBzZW5kIHVudGlsIHRoZSB0cmFuc3BvcnQgaXMgY29ubmVjdGVkXCIpKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgc2VuZE1lc3NhZ2UodGhpcy5sb2dnZXIsIFwiTG9uZ1BvbGxpbmdcIiwgdGhpcy5odHRwQ2xpZW50LCB0aGlzLnVybCwgdGhpcy5hY2Nlc3NUb2tlbkZhY3RvcnksIGRhdGEsIHRoaXMubG9nTWVzc2FnZUNvbnRlbnQpXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTG9uZ1BvbGxpbmdUcmFuc3BvcnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZGVsZXRlT3B0aW9ucywgdG9rZW47XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBTdG9wcGluZyBwb2xsaW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVsbCByZWNlaXZpbmcgbG9vcCB0byBzdG9wLCBhYm9ydCBhbnkgY3VycmVudCByZXF1ZXN0LCBhbmQgdGhlbiB3YWl0IGZvciBpdCB0byBmaW5pc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9sbEFib3J0LmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgLCA1LCA2XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVjZWl2aW5nXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VuZCBERUxFVEUgdG8gY2xlYW4gdXAgbG9uZyBwb2xsaW5nIG9uIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIHNlbmRpbmcgREVMRVRFIHJlcXVlc3QgdG8gXCIgKyB0aGlzLnVybCArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldEFjY2Vzc1Rva2VuKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSGVhZGVyVG9rZW4oZGVsZXRlT3B0aW9ucywgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmh0dHBDbGllbnQuZGVsZXRlKHRoaXMudXJsLCBkZWxldGVPcHRpb25zKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBERUxFVEUgcmVxdWVzdCBzZW50LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgU3RvcCBmaW5pc2hlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJhaXNlIGNsb3NlIGV2ZW50IGhlcmUgaW5zdGVhZCBvZiBpbiBwb2xsaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0IG5lZWRzIHRvIGhhcHBlbiBhZnRlciB0aGUgREVMRVRFIHJlcXVlc3QgaXMgc2VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJhaXNlT25DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMb25nUG9sbGluZ1RyYW5zcG9ydC5wcm90b3R5cGUucmFpc2VPbkNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9uY2xvc2UpIHtcclxuICAgICAgICAgICAgdmFyIGxvZ01lc3NhZ2UgPSBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIEZpcmluZyBvbmNsb3NlIGV2ZW50LlwiO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jbG9zZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBsb2dNZXNzYWdlICs9IFwiIEVycm9yOiBcIiArIHRoaXMuY2xvc2VFcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGxvZ01lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLm9uY2xvc2UodGhpcy5jbG9zZUVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExvbmdQb2xsaW5nVHJhbnNwb3J0O1xyXG59KCkpO1xyXG5leHBvcnQgeyBMb25nUG9sbGluZ1RyYW5zcG9ydCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Mb25nUG9sbGluZ1RyYW5zcG9ydC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5pbXBvcnQgeyBBYm9ydEVycm9yLCBIdHRwRXJyb3IsIFRpbWVvdXRFcnJvciB9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiLi9IdHRwQ2xpZW50XCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBpc0FycmF5QnVmZmVyIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxudmFyIHJlcXVlc3RNb2R1bGU7XHJcbmlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIC8vIEluIG9yZGVyIHRvIGlnbm9yZSB0aGUgZHluYW1pYyByZXF1aXJlIGluIHdlYnBhY2sgYnVpbGRzIHdlIG5lZWQgdG8gZG8gdGhpcyBtYWdpY1xyXG4gICAgLy8gQHRzLWlnbm9yZTogVFMgZG9lc24ndCBrbm93IGFib3V0IHRoZXNlIG5hbWVzXHJcbiAgICB2YXIgcmVxdWlyZUZ1bmMgPSB0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyA9PT0gXCJmdW5jdGlvblwiID8gX19ub25fd2VicGFja19yZXF1aXJlX18gOiByZXF1aXJlO1xyXG4gICAgcmVxdWVzdE1vZHVsZSA9IHJlcXVpcmVGdW5jKFwicmVxdWVzdFwiKTtcclxufVxyXG52YXIgTm9kZUh0dHBDbGllbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTm9kZUh0dHBDbGllbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBOb2RlSHR0cENsaWVudChsb2dnZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdE1vZHVsZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ3JlcXVlc3QnIG1vZHVsZSBjb3VsZCBub3QgYmUgbG9hZGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3RoaXMubG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIF90aGlzLmNvb2tpZUphciA9IHJlcXVlc3RNb2R1bGUuamFyKCk7XHJcbiAgICAgICAgX3RoaXMucmVxdWVzdCA9IHJlcXVlc3RNb2R1bGUuZGVmYXVsdHMoeyBqYXI6IF90aGlzLmNvb2tpZUphciB9KTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBOb2RlSHR0cENsaWVudC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChodHRwUmVxdWVzdCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RCb2R5O1xyXG4gICAgICAgICAgICBpZiAoaXNBcnJheUJ1ZmZlcihodHRwUmVxdWVzdC5jb250ZW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEJvZHkgPSBCdWZmZXIuZnJvbShodHRwUmVxdWVzdC5jb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RCb2R5ID0gaHR0cFJlcXVlc3QuY29udGVudCB8fCBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50UmVxdWVzdCA9IF90aGlzLnJlcXVlc3QoaHR0cFJlcXVlc3QudXJsLCB7XHJcbiAgICAgICAgICAgICAgICBib2R5OiByZXF1ZXN0Qm9keSxcclxuICAgICAgICAgICAgICAgIC8vIElmIGJpbmFyeSBpcyBleHBlY3RlZCAnbnVsbCcgc2hvdWxkIGJlIHVzZWQsIG90aGVyd2lzZSBmb3IgdGV4dCAndXRmOCdcclxuICAgICAgICAgICAgICAgIGVuY29kaW5nOiBodHRwUmVxdWVzdC5yZXNwb25zZVR5cGUgPT09IFwiYXJyYXlidWZmZXJcIiA/IG51bGwgOiBcInV0ZjhcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IF9fYXNzaWduKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGVsbCBhdXRoIG1pZGRsZXdhcmUgdG8gNDAxIGluc3RlYWQgb2YgcmVkaXJlY3RpbmdcclxuICAgICAgICAgICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiIH0sIGh0dHBSZXF1ZXN0LmhlYWRlcnMpLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBodHRwUmVxdWVzdC5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBodHRwUmVxdWVzdC50aW1lb3V0LFxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaHR0cFJlcXVlc3QuYWJvcnRTaWduYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBodHRwUmVxdWVzdC5hYm9ydFNpZ25hbC5vbmFib3J0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSBcIkVUSU1FRE9VVFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuV2FybmluZywgXCJUaW1lb3V0IGZyb20gSFRUUCByZXF1ZXN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBUaW1lb3V0RXJyb3IoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuV2FybmluZywgXCJFcnJvciBmcm9tIEhUVFAgcmVxdWVzdC4gXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzQ29kZSA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEh0dHBSZXNwb25zZShyZXNwb25zZS5zdGF0dXNDb2RlLCByZXNwb25zZS5zdGF0dXNNZXNzYWdlIHx8IFwiXCIsIGJvZHkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgSHR0cEVycm9yKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2UgfHwgXCJcIiwgcmVzcG9uc2Uuc3RhdHVzQ29kZSB8fCAwKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoaHR0cFJlcXVlc3QuYWJvcnRTaWduYWwpIHtcclxuICAgICAgICAgICAgICAgIGh0dHBSZXF1ZXN0LmFib3J0U2lnbmFsLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlcXVlc3QuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEFib3J0RXJyb3IoKSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTm9kZUh0dHBDbGllbnQucHJvdG90eXBlLmdldENvb2tpZVN0cmluZyA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb29raWVKYXIuZ2V0Q29va2llU3RyaW5nKHVybCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE5vZGVIdHRwQ2xpZW50O1xyXG59KEh0dHBDbGllbnQpKTtcclxuZXhwb3J0IHsgTm9kZUh0dHBDbGllbnQgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Tm9kZUh0dHBDbGllbnQuanMubWFwIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBUcmFuc2ZlckZvcm1hdCB9IGZyb20gXCIuL0lUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgQXJnLCBnZXREYXRhRGV0YWlsLCBQbGF0Zm9ybSwgc2VuZE1lc3NhZ2UgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG4vKiogQHByaXZhdGUgKi9cclxudmFyIFNlcnZlclNlbnRFdmVudHNUcmFuc3BvcnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0KGh0dHBDbGllbnQsIGFjY2Vzc1Rva2VuRmFjdG9yeSwgbG9nZ2VyLCBsb2dNZXNzYWdlQ29udGVudCwgZXZlbnRTb3VyY2VDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMuaHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbkZhY3RvcnkgPSBhY2Nlc3NUb2tlbkZhY3Rvcnk7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlQ29udGVudCA9IGxvZ01lc3NhZ2VDb250ZW50O1xyXG4gICAgICAgIHRoaXMuZXZlbnRTb3VyY2VDb25zdHJ1Y3RvciA9IGV2ZW50U291cmNlQ29uc3RydWN0b3I7XHJcbiAgICAgICAgdGhpcy5vbnJlY2VpdmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25jbG9zZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBTZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKHVybCwgdHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbjtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJnLmlzUmVxdWlyZWQodXJsLCBcInVybFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJnLmlzUmVxdWlyZWQodHJhbnNmZXJGb3JtYXQsIFwidHJhbnNmZXJGb3JtYXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyZy5pc0luKHRyYW5zZmVyRm9ybWF0LCBUcmFuc2ZlckZvcm1hdCwgXCJ0cmFuc2ZlckZvcm1hdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihTU0UgdHJhbnNwb3J0KSBDb25uZWN0aW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHVybCBiZWZvcmUgYWNjZXNzVG9rZW5GYWN0b3J5IGJlY2F1c2UgdGhpcy51cmwgaXMgb25seSBmb3Igc2VuZCBhbmQgd2Ugc2V0IHRoZSBhdXRoIGhlYWRlciBpbnN0ZWFkIG9mIHRoZSBxdWVyeSBzdHJpbmcgZm9yIHNlbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hY2Nlc3NUb2tlbkZhY3RvcnkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmFjY2Vzc1Rva2VuRmFjdG9yeSgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCArPSAodXJsLmluZGV4T2YoXCI/XCIpIDwgMCA/IFwiP1wiIDogXCImXCIpICsgKFwiYWNjZXNzX3Rva2VuPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcGVuZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2ZlckZvcm1hdCAhPT0gVHJhbnNmZXJGb3JtYXQuVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJUaGUgU2VydmVyLVNlbnQgRXZlbnRzIHRyYW5zcG9ydCBvbmx5IHN1cHBvcnRzIHRoZSAnVGV4dCcgdHJhbnNmZXIgZm9ybWF0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRTb3VyY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyIHx8IFBsYXRmb3JtLmlzV2ViV29ya2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRTb3VyY2UgPSBuZXcgX3RoaXMuZXZlbnRTb3VyY2VDb25zdHJ1Y3Rvcih1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm9uLWJyb3dzZXIgcGFzc2VzIGNvb2tpZXMgdmlhIHRoZSBkaWN0aW9uYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvb2tpZXMgPSBfdGhpcy5odHRwQ2xpZW50LmdldENvb2tpZVN0cmluZyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50U291cmNlID0gbmV3IF90aGlzLmV2ZW50U291cmNlQ29uc3RydWN0b3IodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSwgaGVhZGVyczogeyBDb29raWU6IGNvb2tpZXMgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRTb3VyY2Uub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLm9ucmVjZWl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihTU0UgdHJhbnNwb3J0KSBkYXRhIHJlY2VpdmVkLiBcIiArIGdldERhdGFEZXRhaWwoZS5kYXRhLCBfdGhpcy5sb2dNZXNzYWdlQ29udGVudCkgKyBcIi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25yZWNlaXZlKGUuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZShlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFNvdXJjZS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKGUuZGF0YSB8fCBcIkVycm9yIG9jY3VycmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZShlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFNvdXJjZS5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiU1NFIGNvbm5lY3RlZCB0byBcIiArIF90aGlzLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmV2ZW50U291cmNlID0gZXZlbnRTb3VyY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNlcnZlclNlbnRFdmVudHNUcmFuc3BvcnQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV2ZW50U291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbm5vdCBzZW5kIHVudGlsIHRoZSB0cmFuc3BvcnQgaXMgY29ubmVjdGVkXCIpKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgc2VuZE1lc3NhZ2UodGhpcy5sb2dnZXIsIFwiU1NFXCIsIHRoaXMuaHR0cENsaWVudCwgdGhpcy51cmwsIHRoaXMuYWNjZXNzVG9rZW5GYWN0b3J5LCBkYXRhLCB0aGlzLmxvZ01lc3NhZ2VDb250ZW50KV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNlcnZlclNlbnRFdmVudHNUcmFuc3BvcnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH07XHJcbiAgICBTZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudFNvdXJjZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50U291cmNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vbmNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2xvc2UoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNlcnZlclNlbnRFdmVudHNUcmFuc3BvcnQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFNlcnZlclNlbnRFdmVudHNUcmFuc3BvcnQgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2VydmVyU2VudEV2ZW50c1RyYW5zcG9ydC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbmltcG9ydCB7IFN1YmplY3RTdWJzY3JpcHRpb24gfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG4vKiogU3RyZWFtIGltcGxlbWVudGF0aW9uIHRvIHN0cmVhbSBpdGVtcyB0byB0aGUgc2VydmVyLiAqL1xyXG52YXIgU3ViamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN1YmplY3QoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgIH1cclxuICAgIFN1YmplY3QucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLm9ic2VydmVyczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gX2FbX2ldO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5vYnNlcnZlcnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IF9hW19pXTtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmVyLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFN1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLm9ic2VydmVyczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gX2FbX2ldO1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIuY29tcGxldGUpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU3ViamVjdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJqZWN0U3Vic2NyaXB0aW9uKHRoaXMsIG9ic2VydmVyKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU3ViamVjdDtcclxufSgpKTtcclxuZXhwb3J0IHsgU3ViamVjdCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJqZWN0LmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuLy8gTm90IGV4cG9ydGVkIGZyb20gaW5kZXhcclxuLyoqIEBwcml2YXRlICovXHJcbnZhciBUZXh0TWVzc2FnZUZvcm1hdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRleHRNZXNzYWdlRm9ybWF0KCkge1xyXG4gICAgfVxyXG4gICAgVGV4dE1lc3NhZ2VGb3JtYXQud3JpdGUgPSBmdW5jdGlvbiAob3V0cHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCIgKyBvdXRwdXQgKyBUZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3I7XHJcbiAgICB9O1xyXG4gICAgVGV4dE1lc3NhZ2VGb3JtYXQucGFyc2UgPSBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICBpZiAoaW5wdXRbaW5wdXQubGVuZ3RoIC0gMV0gIT09IFRleHRNZXNzYWdlRm9ybWF0LlJlY29yZFNlcGFyYXRvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXNzYWdlIGlzIGluY29tcGxldGUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSBpbnB1dC5zcGxpdChUZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3IpO1xyXG4gICAgICAgIG1lc3NhZ2VzLnBvcCgpO1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlcztcclxuICAgIH07XHJcbiAgICBUZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3JDb2RlID0gMHgxZTtcclxuICAgIFRleHRNZXNzYWdlRm9ybWF0LlJlY29yZFNlcGFyYXRvciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yQ29kZSk7XHJcbiAgICByZXR1cm4gVGV4dE1lc3NhZ2VGb3JtYXQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFRleHRNZXNzYWdlRm9ybWF0IH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRleHRNZXNzYWdlRm9ybWF0LmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgTnVsbExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlcnNcIjtcclxuLyoqIEBwcml2YXRlICovXHJcbnZhciBBcmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcmcoKSB7XHJcbiAgICB9XHJcbiAgICBBcmcuaXNSZXF1aXJlZCA9IGZ1bmN0aW9uICh2YWwsIG5hbWUpIHtcclxuICAgICAgICBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnXCIgKyBuYW1lICsgXCInIGFyZ3VtZW50IGlzIHJlcXVpcmVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQXJnLmlzSW4gPSBmdW5jdGlvbiAodmFsLCB2YWx1ZXMsIG5hbWUpIHtcclxuICAgICAgICAvLyBUeXBlU2NyaXB0IGVudW1zIGhhdmUga2V5cyBmb3IgKipib3RoKiogdGhlIG5hbWUgYW5kIHRoZSB2YWx1ZSBvZiBlYWNoIGVudW0gbWVtYmVyIG9uIHRoZSB0eXBlIGl0c2VsZi5cclxuICAgICAgICBpZiAoISh2YWwgaW4gdmFsdWVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIFwiICsgbmFtZSArIFwiIHZhbHVlOiBcIiArIHZhbCArIFwiLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFyZztcclxufSgpKTtcclxuZXhwb3J0IHsgQXJnIH07XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG52YXIgUGxhdGZvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQbGF0Zm9ybSgpIHtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQbGF0Zm9ybSwgXCJpc0Jyb3dzZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQbGF0Zm9ybSwgXCJpc1dlYldvcmtlclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBcImltcG9ydFNjcmlwdHNcIiBpbiBzZWxmO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFBsYXRmb3JtLCBcImlzTm9kZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc0Jyb3dzZXIgJiYgIXRoaXMuaXNXZWJXb3JrZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gUGxhdGZvcm07XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFBsYXRmb3JtIH07XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YURldGFpbChkYXRhLCBpbmNsdWRlQ29udGVudCkge1xyXG4gICAgdmFyIGRldGFpbCA9IFwiXCI7XHJcbiAgICBpZiAoaXNBcnJheUJ1ZmZlcihkYXRhKSkge1xyXG4gICAgICAgIGRldGFpbCA9IFwiQmluYXJ5IGRhdGEgb2YgbGVuZ3RoIFwiICsgZGF0YS5ieXRlTGVuZ3RoO1xyXG4gICAgICAgIGlmIChpbmNsdWRlQ29udGVudCkge1xyXG4gICAgICAgICAgICBkZXRhaWwgKz0gXCIuIENvbnRlbnQ6ICdcIiArIGZvcm1hdEFycmF5QnVmZmVyKGRhdGEpICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBkZXRhaWwgPSBcIlN0cmluZyBkYXRhIG9mIGxlbmd0aCBcIiArIGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIGlmIChpbmNsdWRlQ29udGVudCkge1xyXG4gICAgICAgICAgICBkZXRhaWwgKz0gXCIuIENvbnRlbnQ6ICdcIiArIGRhdGEgKyBcIidcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGV0YWlsO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0QXJyYXlCdWZmZXIoZGF0YSkge1xyXG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgIC8vIFVpbnQ4QXJyYXkubWFwIG9ubHkgc3VwcG9ydHMgcmV0dXJuaW5nIGFub3RoZXIgVWludDhBcnJheT9cclxuICAgIHZhciBzdHIgPSBcIlwiO1xyXG4gICAgdmlldy5mb3JFYWNoKGZ1bmN0aW9uIChudW0pIHtcclxuICAgICAgICB2YXIgcGFkID0gbnVtIDwgMTYgPyBcIjBcIiA6IFwiXCI7XHJcbiAgICAgICAgc3RyICs9IFwiMHhcIiArIHBhZCArIG51bS50b1N0cmluZygxNikgKyBcIiBcIjtcclxuICAgIH0pO1xyXG4gICAgLy8gVHJpbSBvZiB0cmFpbGluZyBzcGFjZS5cclxuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKTtcclxufVxyXG4vLyBBbHNvIGluIHNpZ25hbHItcHJvdG9jb2wtbXNncGFjay9VdGlscy50c1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XHJcbiAgICByZXR1cm4gdmFsICYmIHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICAgICh2YWwgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fFxyXG4gICAgICAgICAgICAvLyBTb21ldGltZXMgd2UgZ2V0IGFuIEFycmF5QnVmZmVyIHRoYXQgZG9lc24ndCBzYXRpc2Z5IGluc3RhbmNlb2ZcclxuICAgICAgICAgICAgKHZhbC5jb25zdHJ1Y3RvciAmJiB2YWwuY29uc3RydWN0b3IubmFtZSA9PT0gXCJBcnJheUJ1ZmZlclwiKSk7XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZShsb2dnZXIsIHRyYW5zcG9ydE5hbWUsIGh0dHBDbGllbnQsIHVybCwgYWNjZXNzVG9rZW5GYWN0b3J5LCBjb250ZW50LCBsb2dNZXNzYWdlQ29udGVudCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSwgaGVhZGVycywgdG9rZW4sIHJlc3BvbnNlVHlwZSwgcmVzcG9uc2U7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY2Nlc3NUb2tlbkZhY3RvcnkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGFjY2Vzc1Rva2VuRmFjdG9yeSgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA9IChfYSA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FbXCJBdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIgKyB0b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKFwiICsgdHJhbnNwb3J0TmFtZSArIFwiIHRyYW5zcG9ydCkgc2VuZGluZyBkYXRhLiBcIiArIGdldERhdGFEZXRhaWwoY29udGVudCwgbG9nTWVzc2FnZUNvbnRlbnQpICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9IGlzQXJyYXlCdWZmZXIoY29udGVudCkgPyBcImFycmF5YnVmZmVyXCIgOiBcInRleHRcIjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBodHRwQ2xpZW50LnBvc3QodXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogcmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoXCIgKyB0cmFuc3BvcnROYW1lICsgXCIgdHJhbnNwb3J0KSByZXF1ZXN0IGNvbXBsZXRlLiBSZXNwb25zZSBzdGF0dXM6IFwiICsgcmVzcG9uc2Uuc3RhdHVzQ29kZSArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKGxvZ2dlcikge1xyXG4gICAgaWYgKGxvZ2dlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zb2xlTG9nZ2VyKExvZ0xldmVsLkluZm9ybWF0aW9uKTtcclxuICAgIH1cclxuICAgIGlmIChsb2dnZXIgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gTnVsbExvZ2dlci5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGlmIChsb2dnZXIubG9nKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2dlcjtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgQ29uc29sZUxvZ2dlcihsb2dnZXIpO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG52YXIgU3ViamVjdFN1YnNjcmlwdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN1YmplY3RTdWJzY3JpcHRpb24oc3ViamVjdCwgb2JzZXJ2ZXIpIHtcclxuICAgICAgICB0aGlzLnN1YmplY3QgPSBzdWJqZWN0O1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcclxuICAgIH1cclxuICAgIFN1YmplY3RTdWJzY3JpcHRpb24ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdWJqZWN0Lm9ic2VydmVycy5pbmRleE9mKHRoaXMub2JzZXJ2ZXIpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdC5vYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3ViamVjdC5vYnNlcnZlcnMubGVuZ3RoID09PSAwICYmIHRoaXMuc3ViamVjdC5jYW5jZWxDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnN1YmplY3QuY2FuY2VsQ2FsbGJhY2soKS5jYXRjaChmdW5jdGlvbiAoXykgeyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN1YmplY3RTdWJzY3JpcHRpb247XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFN1YmplY3RTdWJzY3JpcHRpb24gfTtcclxuLyoqIEBwcml2YXRlICovXHJcbnZhciBDb25zb2xlTG9nZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29uc29sZUxvZ2dlcihtaW5pbXVtTG9nTGV2ZWwpIHtcclxuICAgICAgICB0aGlzLm1pbmltdW1Mb2dMZXZlbCA9IG1pbmltdW1Mb2dMZXZlbDtcclxuICAgICAgICB0aGlzLm91dHB1dENvbnNvbGUgPSBjb25zb2xlO1xyXG4gICAgfVxyXG4gICAgQ29uc29sZUxvZ2dlci5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKGxvZ0xldmVsLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKGxvZ0xldmVsID49IHRoaXMubWluaW11bUxvZ0xldmVsKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobG9nTGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuQ3JpdGljYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIExvZ0xldmVsLkVycm9yOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0Q29uc29sZS5lcnJvcihcIltcIiArIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSArIFwiXSBcIiArIExvZ0xldmVsW2xvZ0xldmVsXSArIFwiOiBcIiArIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5XYXJuaW5nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0Q29uc29sZS53YXJuKFwiW1wiICsgbmV3IERhdGUoKS50b0lTT1N0cmluZygpICsgXCJdIFwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCI6IFwiICsgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIExvZ0xldmVsLkluZm9ybWF0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0Q29uc29sZS5pbmZvKFwiW1wiICsgbmV3IERhdGUoKS50b0lTT1N0cmluZygpICsgXCJdIFwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCI6IFwiICsgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGVidWcgb25seSBnb2VzIHRvIGF0dGFjaGVkIGRlYnVnZ2VycyBpbiBOb2RlLCBzbyB3ZSB1c2UgY29uc29sZS5sb2cgZm9yIFRyYWNlIGFuZCBEZWJ1Z1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0Q29uc29sZS5sb2coXCJbXCIgKyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgKyBcIl0gXCIgKyBMb2dMZXZlbFtsb2dMZXZlbF0gKyBcIjogXCIgKyBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29uc29sZUxvZ2dlcjtcclxufSgpKTtcclxuZXhwb3J0IHsgQ29uc29sZUxvZ2dlciB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1VdGlscy5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFRyYW5zZmVyRm9ybWF0IH0gZnJvbSBcIi4vSVRyYW5zcG9ydFwiO1xyXG5pbXBvcnQgeyBBcmcsIGdldERhdGFEZXRhaWwsIFBsYXRmb3JtIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuLyoqIEBwcml2YXRlICovXHJcbnZhciBXZWJTb2NrZXRUcmFuc3BvcnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXZWJTb2NrZXRUcmFuc3BvcnQoaHR0cENsaWVudCwgYWNjZXNzVG9rZW5GYWN0b3J5LCBsb2dnZXIsIGxvZ01lc3NhZ2VDb250ZW50LCB3ZWJTb2NrZXRDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW5GYWN0b3J5ID0gYWNjZXNzVG9rZW5GYWN0b3J5O1xyXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZUNvbnRlbnQgPSBsb2dNZXNzYWdlQ29udGVudDtcclxuICAgICAgICB0aGlzLndlYlNvY2tldENvbnN0cnVjdG9yID0gd2ViU29ja2V0Q29uc3RydWN0b3I7XHJcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcclxuICAgICAgICB0aGlzLm9ucmVjZWl2ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbmNsb3NlID0gbnVsbDtcclxuICAgIH1cclxuICAgIFdlYlNvY2tldFRyYW5zcG9ydC5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uICh1cmwsIHRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW47XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyZy5pc1JlcXVpcmVkKHVybCwgXCJ1cmxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyZy5pc1JlcXVpcmVkKHRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcmcuaXNJbih0cmFuc2ZlckZvcm1hdCwgVHJhbnNmZXJGb3JtYXQsIFwidHJhbnNmZXJGb3JtYXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoV2ViU29ja2V0cyB0cmFuc3BvcnQpIENvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWNjZXNzVG9rZW5GYWN0b3J5KSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5hY2Nlc3NUb2tlbkZhY3RvcnkoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgKz0gKHVybC5pbmRleE9mKFwiP1wiKSA8IDAgPyBcIj9cIiA6IFwiJlwiKSArIChcImFjY2Vzc190b2tlbj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXmh0dHAvLCBcIndzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdlYlNvY2tldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb29raWVzID0gX3RoaXMuaHR0cENsaWVudC5nZXRDb29raWVTdHJpbmcodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChQbGF0Zm9ybS5pc05vZGUgJiYgY29va2llcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgcGFzcyBjb29raWVzIHdoZW4gaW4gbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViU29ja2V0ID0gbmV3IF90aGlzLndlYlNvY2tldENvbnN0cnVjdG9yKHVybCwgdW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZTogXCJcIiArIGNvb2tpZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdlYlNvY2tldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENocm9tZSBpcyBub3QgaGFwcHkgd2l0aCBwYXNzaW5nICd1bmRlZmluZWQnIGFzIHByb3RvY29sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViU29ja2V0ID0gbmV3IF90aGlzLndlYlNvY2tldENvbnN0cnVjdG9yKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNmZXJGb3JtYXQgPT09IFRyYW5zZmVyRm9ybWF0LkJpbmFyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlNvY2tldC5iaW5hcnlUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoX2V2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJXZWJTb2NrZXQgY29ubmVjdGVkIHRvIFwiICsgdXJsICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLndlYlNvY2tldCA9IHdlYlNvY2tldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViU29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVycm9yRXZlbnQgaXMgYSBicm93c2VyIG9ubHkgdHlwZSB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSB0eXBlIGV4aXN0cyBiZWZvcmUgdXNpbmcgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEVycm9yRXZlbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZXZlbnQgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXZlbnQuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViU29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoV2ViU29ja2V0cyB0cmFuc3BvcnQpIGRhdGEgcmVjZWl2ZWQuIFwiICsgZ2V0RGF0YURldGFpbChtZXNzYWdlLmRhdGEsIF90aGlzLmxvZ01lc3NhZ2VDb250ZW50KSArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMub25yZWNlaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm9ucmVjZWl2ZShtZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJTb2NrZXQub25jbG9zZSA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuY2xvc2UoZXZlbnQpOyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdlYlNvY2tldFRyYW5zcG9ydC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2ViU29ja2V0ICYmIHRoaXMud2ViU29ja2V0LnJlYWR5U3RhdGUgPT09IHRoaXMud2ViU29ja2V0Q29uc3RydWN0b3IuT1BFTikge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKFdlYlNvY2tldHMgdHJhbnNwb3J0KSBzZW5kaW5nIGRhdGEuIFwiICsgZ2V0RGF0YURldGFpbChkYXRhLCB0aGlzLmxvZ01lc3NhZ2VDb250ZW50KSArIFwiLlwiKTtcclxuICAgICAgICAgICAgdGhpcy53ZWJTb2NrZXQuc2VuZChkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJXZWJTb2NrZXQgaXMgbm90IGluIHRoZSBPUEVOIHN0YXRlXCIpO1xyXG4gICAgfTtcclxuICAgIFdlYlNvY2tldFRyYW5zcG9ydC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy53ZWJTb2NrZXQpIHtcclxuICAgICAgICAgICAgLy8gQ2xlYXIgd2Vic29ja2V0IGhhbmRsZXJzIGJlY2F1c2Ugd2UgYXJlIGNvbnNpZGVyaW5nIHRoZSBzb2NrZXQgY2xvc2VkIG5vd1xyXG4gICAgICAgICAgICB0aGlzLndlYlNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgICAgICAgICB0aGlzLndlYlNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7IH07XHJcbiAgICAgICAgICAgIHRoaXMud2ViU29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7IH07XHJcbiAgICAgICAgICAgIHRoaXMud2ViU29ja2V0LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMud2ViU29ja2V0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAvLyBNYW51YWxseSBpbnZva2Ugb25jbG9zZSBjYWxsYmFjayBpbmxpbmUgc28gd2Uga25vdyB0aGUgSHR0cENvbm5lY3Rpb24gd2FzIGNsb3NlZCBwcm9wZXJseSBiZWZvcmUgcmV0dXJuaW5nXHJcbiAgICAgICAgICAgIC8vIFRoaXMgYWxzbyBzb2x2ZXMgYW4gaXNzdWUgd2hlcmUgd2Vic29ja2V0Lm9uY2xvc2UgY291bGQgdGFrZSAxOCsgc2Vjb25kcyB0byB0cmlnZ2VyIGR1cmluZyBuZXR3b3JrIGRpc2Nvbm5lY3RzXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodW5kZWZpbmVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfTtcclxuICAgIFdlYlNvY2tldFRyYW5zcG9ydC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvLyB3ZWJTb2NrZXQgd2lsbCBiZSBudWxsIGlmIHRoZSB0cmFuc3BvcnQgZGlkIG5vdCBzdGFydCBzdWNjZXNzZnVsbHlcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKFdlYlNvY2tldHMgdHJhbnNwb3J0KSBzb2NrZXQgY2xvc2VkLlwiKTtcclxuICAgICAgICBpZiAodGhpcy5vbmNsb3NlKSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudCAmJiAoZXZlbnQud2FzQ2xlYW4gPT09IGZhbHNlIHx8IGV2ZW50LmNvZGUgIT09IDEwMDApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2xvc2UobmV3IEVycm9yKFwiV2ViU29ja2V0IGNsb3NlZCB3aXRoIHN0YXR1cyBjb2RlOiBcIiArIGV2ZW50LmNvZGUgKyBcIiAoXCIgKyBldmVudC5yZWFzb24gKyBcIikuXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBXZWJTb2NrZXRUcmFuc3BvcnQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFdlYlNvY2tldFRyYW5zcG9ydCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1XZWJTb2NrZXRUcmFuc3BvcnQuanMubWFwIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IHsgQWJvcnRFcnJvciwgSHR0cEVycm9yLCBUaW1lb3V0RXJyb3IgfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIi4vSHR0cENsaWVudFwiO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxudmFyIFhockh0dHBDbGllbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoWGhySHR0cENsaWVudCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFhockh0dHBDbGllbnQobG9nZ2VyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBYaHJIdHRwQ2xpZW50LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIENoZWNrIHRoYXQgYWJvcnQgd2FzIG5vdCBzaWduYWxlZCBiZWZvcmUgY2FsbGluZyBzZW5kXHJcbiAgICAgICAgaWYgKHJlcXVlc3QuYWJvcnRTaWduYWwgJiYgcmVxdWVzdC5hYm9ydFNpZ25hbC5hYm9ydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQWJvcnRFcnJvcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0Lm1ldGhvZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gbWV0aG9kIGRlZmluZWQuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0LnVybCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gdXJsIGRlZmluZWQuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIik7XHJcbiAgICAgICAgICAgIC8vIEV4cGxpY2l0bHkgc2V0dGluZyB0aGUgQ29udGVudC1UeXBlIGhlYWRlciBmb3IgUmVhY3QgTmF0aXZlIG9uIEFuZHJvaWQgcGxhdGZvcm0uXHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIpO1xyXG4gICAgICAgICAgICB2YXIgaGVhZGVycyA9IHJlcXVlc3QuaGVhZGVycztcclxuICAgICAgICAgICAgaWYgKGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlciwgaGVhZGVyc1toZWFkZXJdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlc3BvbnNlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHJlcXVlc3QucmVzcG9uc2VUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmFib3J0U2lnbmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LmFib3J0U2lnbmFsLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBBYm9ydEVycm9yKCkpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC50aW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICB4aHIudGltZW91dCA9IHJlcXVlc3QudGltZW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuYWJvcnRTaWduYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmFib3J0U2lnbmFsLm9uYWJvcnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBIdHRwUmVzcG9uc2UoeGhyLnN0YXR1cywgeGhyLnN0YXR1c1RleHQsIHhoci5yZXNwb25zZSB8fCB4aHIucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEh0dHBFcnJvcih4aHIuc3RhdHVzVGV4dCwgeGhyLnN0YXR1cykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmxvZ2dlci5sb2coTG9nTGV2ZWwuV2FybmluZywgXCJFcnJvciBmcm9tIEhUVFAgcmVxdWVzdC4gXCIgKyB4aHIuc3RhdHVzICsgXCI6IFwiICsgeGhyLnN0YXR1c1RleHQgKyBcIi5cIik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEh0dHBFcnJvcih4aHIuc3RhdHVzVGV4dCwgeGhyLnN0YXR1cykpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubG9nZ2VyLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBcIlRpbWVvdXQgZnJvbSBIVFRQIHJlcXVlc3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBUaW1lb3V0RXJyb3IoKSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5zZW5kKHJlcXVlc3QuY29udGVudCB8fCBcIlwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gWGhySHR0cENsaWVudDtcclxufShIdHRwQ2xpZW50KSk7XHJcbmV4cG9ydCB7IFhockh0dHBDbGllbnQgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9WGhySHR0cENsaWVudC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbi8vIFZlcnNpb24gdG9rZW4gdGhhdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHRoZSBwcmVwYWNrIGNvbW1hbmRcclxuLyoqIFRoZSB2ZXJzaW9uIG9mIHRoZSBTaWduYWxSIGNsaWVudC4gKi9cclxuZXhwb3J0IHZhciBWRVJTSU9OID0gXCIzLjAuMC1wcmV2aWV3Ni4xOTMwNy4yXCI7XHJcbmV4cG9ydCB7IEFib3J0RXJyb3IsIEh0dHBFcnJvciwgVGltZW91dEVycm9yIH0gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmV4cG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gXCIuL0h0dHBDbGllbnRcIjtcclxuZXhwb3J0IHsgRGVmYXVsdEh0dHBDbGllbnQgfSBmcm9tIFwiLi9EZWZhdWx0SHR0cENsaWVudFwiO1xyXG5leHBvcnQgeyBIdWJDb25uZWN0aW9uLCBIdWJDb25uZWN0aW9uU3RhdGUgfSBmcm9tIFwiLi9IdWJDb25uZWN0aW9uXCI7XHJcbmV4cG9ydCB7IEh1YkNvbm5lY3Rpb25CdWlsZGVyIH0gZnJvbSBcIi4vSHViQ29ubmVjdGlvbkJ1aWxkZXJcIjtcclxuZXhwb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiLi9JSHViUHJvdG9jb2xcIjtcclxuZXhwb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmV4cG9ydCB7IEh0dHBUcmFuc3BvcnRUeXBlLCBUcmFuc2ZlckZvcm1hdCB9IGZyb20gXCIuL0lUcmFuc3BvcnRcIjtcclxuZXhwb3J0IHsgTnVsbExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlcnNcIjtcclxuZXhwb3J0IHsgSnNvbkh1YlByb3RvY29sIH0gZnJvbSBcIi4vSnNvbkh1YlByb3RvY29sXCI7XHJcbmV4cG9ydCB7IFN1YmplY3QgfSBmcm9tIFwiLi9TdWJqZWN0XCI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLy8gVGhpcyBpcyBhIHNpbmdsZS1maWxlIHNlbGYtY29udGFpbmVkIG1vZHVsZSB0byBhdm9pZCB0aGUgbmVlZCBmb3IgYSBXZWJwYWNrIGJ1aWxkXG52YXIgRG90TmV0O1xuKGZ1bmN0aW9uIChEb3ROZXQpIHtcbiAgICB3aW5kb3cuRG90TmV0ID0gRG90TmV0OyAvLyBFbnN1cmUgcmVhY2hhYmxlIGZyb20gYW55d2hlcmVcbiAgICB2YXIganNvblJldml2ZXJzID0gW107XG4gICAgdmFyIHBlbmRpbmdBc3luY0NhbGxzID0ge307XG4gICAgdmFyIGNhY2hlZEpTRnVuY3Rpb25zID0ge307XG4gICAgdmFyIG5leHRBc3luY0NhbGxJZCA9IDE7IC8vIFN0YXJ0IGF0IDEgYmVjYXVzZSB6ZXJvIHNpZ25hbHMgXCJubyByZXNwb25zZSBuZWVkZWRcIlxuICAgIHZhciBkb3ROZXREaXNwYXRjaGVyID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzcGVjaWZpZWQgLk5FVCBjYWxsIGRpc3BhdGNoZXIgYXMgdGhlIGN1cnJlbnQgaW5zdGFuY2Ugc28gdGhhdCBpdCB3aWxsIGJlIHVzZWRcbiAgICAgKiBmb3IgZnV0dXJlIGludm9jYXRpb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRpc3BhdGNoZXIgQW4gb2JqZWN0IHRoYXQgY2FuIGRpc3BhdGNoIGNhbGxzIGZyb20gSmF2YVNjcmlwdCB0byBhIC5ORVQgcnVudGltZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhdHRhY2hEaXNwYXRjaGVyKGRpc3BhdGNoZXIpIHtcbiAgICAgICAgZG90TmV0RGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG4gICAgfVxuICAgIERvdE5ldC5hdHRhY2hEaXNwYXRjaGVyID0gYXR0YWNoRGlzcGF0Y2hlcjtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgSlNPTiByZXZpdmVyIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gcGFyc2luZyBhcmd1bWVudHMgcmVjZWl2ZWQgZnJvbSAuTkVULlxuICAgICAqIEBwYXJhbSByZXZpdmVyIFRoZSByZXZpdmVyIHRvIGFkZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhdHRhY2hSZXZpdmVyKHJldml2ZXIpIHtcbiAgICAgICAganNvblJldml2ZXJzLnB1c2gocmV2aXZlcik7XG4gICAgfVxuICAgIERvdE5ldC5hdHRhY2hSZXZpdmVyID0gYXR0YWNoUmV2aXZlcjtcbiAgICAvKipcbiAgICAgKiBJbnZva2VzIHRoZSBzcGVjaWZpZWQgLk5FVCBwdWJsaWMgbWV0aG9kIHN5bmNocm9ub3VzbHkuIE5vdCBhbGwgaG9zdGluZyBzY2VuYXJpb3Mgc3VwcG9ydFxuICAgICAqIHN5bmNocm9ub3VzIGludm9jYXRpb24sIHNvIGlmIHBvc3NpYmxlIHVzZSBpbnZva2VNZXRob2RBc3luYyBpbnN0ZWFkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGFzc2VtYmx5TmFtZSBUaGUgc2hvcnQgbmFtZSAod2l0aG91dCBrZXkvdmVyc2lvbiBvciAuZGxsIGV4dGVuc2lvbikgb2YgdGhlIC5ORVQgYXNzZW1ibHkgY29udGFpbmluZyB0aGUgbWV0aG9kLlxuICAgICAqIEBwYXJhbSBtZXRob2RJZGVudGlmaWVyIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBtZXRob2QgdG8gaW52b2tlLiBUaGUgbWV0aG9kIG11c3QgaGF2ZSBhIFtKU0ludm9rYWJsZV0gYXR0cmlidXRlIHNwZWNpZnlpbmcgdGhpcyBpZGVudGlmaWVyLlxuICAgICAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBtZXRob2QsIGVhY2ggb2Ygd2hpY2ggbXVzdCBiZSBKU09OLXNlcmlhbGl6YWJsZS5cbiAgICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0IG9mIHRoZSBvcGVyYXRpb24uXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW52b2tlTWV0aG9kKGFzc2VtYmx5TmFtZSwgbWV0aG9kSWRlbnRpZmllcikge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW52b2tlUG9zc2libGVJbnN0YW5jZU1ldGhvZChhc3NlbWJseU5hbWUsIG1ldGhvZElkZW50aWZpZXIsIG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgICBEb3ROZXQuaW52b2tlTWV0aG9kID0gaW52b2tlTWV0aG9kO1xuICAgIC8qKlxuICAgICAqIEludm9rZXMgdGhlIHNwZWNpZmllZCAuTkVUIHB1YmxpYyBtZXRob2QgYXN5bmNocm9ub3VzbHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXNzZW1ibHlOYW1lIFRoZSBzaG9ydCBuYW1lICh3aXRob3V0IGtleS92ZXJzaW9uIG9yIC5kbGwgZXh0ZW5zaW9uKSBvZiB0aGUgLk5FVCBhc3NlbWJseSBjb250YWluaW5nIHRoZSBtZXRob2QuXG4gICAgICogQHBhcmFtIG1ldGhvZElkZW50aWZpZXIgVGhlIGlkZW50aWZpZXIgb2YgdGhlIG1ldGhvZCB0byBpbnZva2UuIFRoZSBtZXRob2QgbXVzdCBoYXZlIGEgW0pTSW52b2thYmxlXSBhdHRyaWJ1dGUgc3BlY2lmeWluZyB0aGlzIGlkZW50aWZpZXIuXG4gICAgICogQHBhcmFtIGFyZ3MgQXJndW1lbnRzIHRvIHBhc3MgdG8gdGhlIG1ldGhvZCwgZWFjaCBvZiB3aGljaCBtdXN0IGJlIEpTT04tc2VyaWFsaXphYmxlLlxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSByZXByZXNlbnRpbmcgdGhlIHJlc3VsdCBvZiB0aGUgb3BlcmF0aW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGludm9rZU1ldGhvZEFzeW5jKGFzc2VtYmx5TmFtZSwgbWV0aG9kSWRlbnRpZmllcikge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW52b2tlUG9zc2libGVJbnN0YW5jZU1ldGhvZEFzeW5jKGFzc2VtYmx5TmFtZSwgbWV0aG9kSWRlbnRpZmllciwgbnVsbCwgYXJncyk7XG4gICAgfVxuICAgIERvdE5ldC5pbnZva2VNZXRob2RBc3luYyA9IGludm9rZU1ldGhvZEFzeW5jO1xuICAgIGZ1bmN0aW9uIGludm9rZVBvc3NpYmxlSW5zdGFuY2VNZXRob2QoYXNzZW1ibHlOYW1lLCBtZXRob2RJZGVudGlmaWVyLCBkb3ROZXRPYmplY3RJZCwgYXJncykge1xuICAgICAgICB2YXIgZGlzcGF0Y2hlciA9IGdldFJlcXVpcmVkRGlzcGF0Y2hlcigpO1xuICAgICAgICBpZiAoZGlzcGF0Y2hlci5pbnZva2VEb3ROZXRGcm9tSlMpIHtcbiAgICAgICAgICAgIHZhciBhcmdzSnNvbiA9IEpTT04uc3RyaW5naWZ5KGFyZ3MsIGFyZ1JlcGxhY2VyKTtcbiAgICAgICAgICAgIHZhciByZXN1bHRKc29uID0gZGlzcGF0Y2hlci5pbnZva2VEb3ROZXRGcm9tSlMoYXNzZW1ibHlOYW1lLCBtZXRob2RJZGVudGlmaWVyLCBkb3ROZXRPYmplY3RJZCwgYXJnc0pzb24pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdEpzb24gPyBwYXJzZUpzb25XaXRoUmV2aXZlcnMocmVzdWx0SnNvbikgOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY3VycmVudCBkaXNwYXRjaGVyIGRvZXMgbm90IHN1cHBvcnQgc3luY2hyb25vdXMgY2FsbHMgZnJvbSBKUyB0byAuTkVULiBVc2UgaW52b2tlTWV0aG9kQXN5bmMgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpbnZva2VQb3NzaWJsZUluc3RhbmNlTWV0aG9kQXN5bmMoYXNzZW1ibHlOYW1lLCBtZXRob2RJZGVudGlmaWVyLCBkb3ROZXRPYmplY3RJZCwgYXJncykge1xuICAgICAgICBpZiAoYXNzZW1ibHlOYW1lICYmIGRvdE5ldE9iamVjdElkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGb3IgaW5zdGFuY2UgbWV0aG9kIGNhbGxzLCBhc3NlbWJseU5hbWUgc2hvdWxkIGJlIG51bGwuIFJlY2VpdmVkICdcIiArIGFzc2VtYmx5TmFtZSArIFwiJy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFzeW5jQ2FsbElkID0gbmV4dEFzeW5jQ2FsbElkKys7XG4gICAgICAgIHZhciByZXN1bHRQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcGVuZGluZ0FzeW5jQ2FsbHNbYXN5bmNDYWxsSWRdID0geyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9O1xuICAgICAgICB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhcmdzSnNvbiA9IEpTT04uc3RyaW5naWZ5KGFyZ3MsIGFyZ1JlcGxhY2VyKTtcbiAgICAgICAgICAgIGdldFJlcXVpcmVkRGlzcGF0Y2hlcigpLmJlZ2luSW52b2tlRG90TmV0RnJvbUpTKGFzeW5jQ2FsbElkLCBhc3NlbWJseU5hbWUsIG1ldGhvZElkZW50aWZpZXIsIGRvdE5ldE9iamVjdElkLCBhcmdzSnNvbik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAvLyBTeW5jaHJvbm91cyBmYWlsdXJlXG4gICAgICAgICAgICBjb21wbGV0ZVBlbmRpbmdDYWxsKGFzeW5jQ2FsbElkLCBmYWxzZSwgZXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRSZXF1aXJlZERpc3BhdGNoZXIoKSB7XG4gICAgICAgIGlmIChkb3ROZXREaXNwYXRjaGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZG90TmV0RGlzcGF0Y2hlcjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIC5ORVQgY2FsbCBkaXNwYXRjaGVyIGhhcyBiZWVuIHNldC4nKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcGxldGVQZW5kaW5nQ2FsbChhc3luY0NhbGxJZCwgc3VjY2VzcywgcmVzdWx0T3JFcnJvcikge1xuICAgICAgICBpZiAoIXBlbmRpbmdBc3luY0NhbGxzLmhhc093blByb3BlcnR5KGFzeW5jQ2FsbElkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgaXMgbm8gcGVuZGluZyBhc3luYyBjYWxsIHdpdGggSUQgXCIgKyBhc3luY0NhbGxJZCArIFwiLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXN5bmNDYWxsID0gcGVuZGluZ0FzeW5jQ2FsbHNbYXN5bmNDYWxsSWRdO1xuICAgICAgICBkZWxldGUgcGVuZGluZ0FzeW5jQ2FsbHNbYXN5bmNDYWxsSWRdO1xuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgYXN5bmNDYWxsLnJlc29sdmUocmVzdWx0T3JFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhc3luY0NhbGwucmVqZWN0KHJlc3VsdE9yRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlY2VpdmVzIGluY29taW5nIGNhbGxzIGZyb20gLk5FVCBhbmQgZGlzcGF0Y2hlcyB0aGVtIHRvIEphdmFTY3JpcHQuXG4gICAgICovXG4gICAgRG90TmV0LmpzQ2FsbERpc3BhdGNoZXIgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaW5kcyB0aGUgSmF2YVNjcmlwdCBmdW5jdGlvbiBtYXRjaGluZyB0aGUgc3BlY2lmaWVkIGlkZW50aWZpZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBpZGVudGlmaWVyIElkZW50aWZpZXMgdGhlIGdsb2JhbGx5LXJlYWNoYWJsZSBmdW5jdGlvbiB0byBiZSByZXR1cm5lZC5cbiAgICAgICAgICogQHJldHVybnMgQSBGdW5jdGlvbiBpbnN0YW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIGZpbmRKU0Z1bmN0aW9uOiBmaW5kSlNGdW5jdGlvbixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZXMgdGhlIHNwZWNpZmllZCBzeW5jaHJvbm91cyBKYXZhU2NyaXB0IGZ1bmN0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gaWRlbnRpZmllciBJZGVudGlmaWVzIHRoZSBnbG9iYWxseS1yZWFjaGFibGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICAgICAgICAgKiBAcGFyYW0gYXJnc0pzb24gSlNPTiByZXByZXNlbnRhdGlvbiBvZiBhcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cbiAgICAgICAgICogQHJldHVybnMgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgaW52b2NhdGlvbiByZXN1bHQuXG4gICAgICAgICAqL1xuICAgICAgICBpbnZva2VKU0Zyb21Eb3ROZXQ6IGZ1bmN0aW9uIChpZGVudGlmaWVyLCBhcmdzSnNvbikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZpbmRKU0Z1bmN0aW9uKGlkZW50aWZpZXIpLmFwcGx5KG51bGwsIHBhcnNlSnNvbldpdGhSZXZpdmVycyhhcmdzSnNvbikpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCB8fCByZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgIDogSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBhcmdSZXBsYWNlcik7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnZva2VzIHRoZSBzcGVjaWZpZWQgc3luY2hyb25vdXMgb3IgYXN5bmNocm9ub3VzIEphdmFTY3JpcHQgZnVuY3Rpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBhc3luY0hhbmRsZSBBIHZhbHVlIGlkZW50aWZ5aW5nIHRoZSBhc3luY2hyb25vdXMgb3BlcmF0aW9uLiBUaGlzIHZhbHVlIHdpbGwgYmUgcGFzc2VkIGJhY2sgaW4gYSBsYXRlciBjYWxsIHRvIGVuZEludm9rZUpTRnJvbURvdE5ldC5cbiAgICAgICAgICogQHBhcmFtIGlkZW50aWZpZXIgSWRlbnRpZmllcyB0aGUgZ2xvYmFsbHktcmVhY2hhYmxlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAgICAgICAgICogQHBhcmFtIGFyZ3NKc29uIEpTT04gcmVwcmVzZW50YXRpb24gb2YgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICBiZWdpbkludm9rZUpTRnJvbURvdE5ldDogZnVuY3Rpb24gKGFzeW5jSGFuZGxlLCBpZGVudGlmaWVyLCBhcmdzSnNvbikge1xuICAgICAgICAgICAgLy8gQ29lcmNlIHN5bmNocm9ub3VzIGZ1bmN0aW9ucyBpbnRvIGFzeW5jIG9uZXMsIHBsdXMgdHJlYXRcbiAgICAgICAgICAgIC8vIHN5bmNocm9ub3VzIGV4Y2VwdGlvbnMgdGhlIHNhbWUgYXMgYXN5bmMgb25lc1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHZhciBzeW5jaHJvbm91c1Jlc3VsdE9yUHJvbWlzZSA9IGZpbmRKU0Z1bmN0aW9uKGlkZW50aWZpZXIpLmFwcGx5KG51bGwsIHBhcnNlSnNvbldpdGhSZXZpdmVycyhhcmdzSnNvbikpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc3luY2hyb25vdXNSZXN1bHRPclByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBXZSBvbmx5IGxpc3RlbiBmb3IgYSByZXN1bHQgaWYgdGhlIGNhbGxlciB3YW50cyB0byBiZSBub3RpZmllZCBhYm91dCBpdFxuICAgICAgICAgICAgaWYgKGFzeW5jSGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgLy8gT24gY29tcGxldGlvbiwgZGlzcGF0Y2ggcmVzdWx0IGJhY2sgdG8gLk5FVFxuICAgICAgICAgICAgICAgIC8vIE5vdCB1c2luZyBcImF3YWl0XCIgYmVjYXVzZSBpdCBjb2RlZ2VucyBhIGxvdCBvZiBib2lsZXJwbGF0ZVxuICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiBnZXRSZXF1aXJlZERpc3BhdGNoZXIoKS5lbmRJbnZva2VKU0Zyb21Eb3ROZXQoYXN5bmNIYW5kbGUsIHRydWUsIEpTT04uc3RyaW5naWZ5KFthc3luY0hhbmRsZSwgdHJ1ZSwgcmVzdWx0XSwgYXJnUmVwbGFjZXIpKTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBnZXRSZXF1aXJlZERpc3BhdGNoZXIoKS5lbmRJbnZva2VKU0Zyb21Eb3ROZXQoYXN5bmNIYW5kbGUsIGZhbHNlLCBKU09OLnN0cmluZ2lmeShbYXN5bmNIYW5kbGUsIGZhbHNlLCBmb3JtYXRFcnJvcihlcnJvcildKSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVjZWl2ZXMgbm90aWZpY2F0aW9uIHRoYXQgYW4gYXN5bmMgY2FsbCBmcm9tIEpTIHRvIC5ORVQgaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgICogQHBhcmFtIGFzeW5jQ2FsbElkIFRoZSBpZGVudGlmaWVyIHN1cHBsaWVkIGluIGFuIGVhcmxpZXIgY2FsbCB0byBiZWdpbkludm9rZURvdE5ldEZyb21KUy5cbiAgICAgICAgICogQHBhcmFtIHN1Y2Nlc3MgQSBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIG9wZXJhdGlvbiBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LlxuICAgICAgICAgKiBAcGFyYW0gcmVzdWx0T3JFeGNlcHRpb25NZXNzYWdlIEVpdGhlciB0aGUgb3BlcmF0aW9uIHJlc3VsdCBvciBhbiBlcnJvciBtZXNzYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgZW5kSW52b2tlRG90TmV0RnJvbUpTOiBmdW5jdGlvbiAoYXN5bmNDYWxsSWQsIHN1Y2Nlc3MsIHJlc3VsdE9yRXhjZXB0aW9uTWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdE9yRXJyb3IgPSBzdWNjZXNzID8gcmVzdWx0T3JFeGNlcHRpb25NZXNzYWdlIDogbmV3IEVycm9yKHJlc3VsdE9yRXhjZXB0aW9uTWVzc2FnZSk7XG4gICAgICAgICAgICBjb21wbGV0ZVBlbmRpbmdDYWxsKHBhcnNlSW50KGFzeW5jQ2FsbElkKSwgc3VjY2VzcywgcmVzdWx0T3JFcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIHBhcnNlSnNvbldpdGhSZXZpdmVycyhqc29uKSB7XG4gICAgICAgIHJldHVybiBqc29uID8gSlNPTi5wYXJzZShqc29uLCBmdW5jdGlvbiAoa2V5LCBpbml0aWFsVmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEludm9rZSBlYWNoIHJldml2ZXIgaW4gb3JkZXIsIHBhc3NpbmcgdGhlIG91dHB1dCBmcm9tIHRoZSBwcmV2aW91cyByZXZpdmVyLFxuICAgICAgICAgICAgLy8gc28gdGhhdCBlYWNoIG9uZSBnZXRzIGEgY2hhbmNlIHRvIHRyYW5zZm9ybSB0aGUgdmFsdWVcbiAgICAgICAgICAgIHJldHVybiBqc29uUmV2aXZlcnMucmVkdWNlKGZ1bmN0aW9uIChsYXRlc3RWYWx1ZSwgcmV2aXZlcikgeyByZXR1cm4gcmV2aXZlcihrZXksIGxhdGVzdFZhbHVlKTsgfSwgaW5pdGlhbFZhbHVlKTtcbiAgICAgICAgfSkgOiBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3JtYXRFcnJvcihlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2UgKyBcIlxcblwiICsgZXJyb3Iuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IgPyBlcnJvci50b1N0cmluZygpIDogJ251bGwnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpbmRKU0Z1bmN0aW9uKGlkZW50aWZpZXIpIHtcbiAgICAgICAgaWYgKGNhY2hlZEpTRnVuY3Rpb25zLmhhc093blByb3BlcnR5KGlkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkSlNGdW5jdGlvbnNbaWRlbnRpZmllcl07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IHdpbmRvdztcbiAgICAgICAgdmFyIHJlc3VsdElkZW50aWZpZXIgPSAnd2luZG93JztcbiAgICAgICAgdmFyIGxhc3RTZWdtZW50VmFsdWU7XG4gICAgICAgIGlkZW50aWZpZXIuc3BsaXQoJy4nKS5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICBpZiAoc2VnbWVudCBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBsYXN0U2VnbWVudFZhbHVlID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtzZWdtZW50XTtcbiAgICAgICAgICAgICAgICByZXN1bHRJZGVudGlmaWVyICs9ICcuJyArIHNlZ21lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCAnXCIgKyBzZWdtZW50ICsgXCInIGluICdcIiArIHJlc3VsdElkZW50aWZpZXIgKyBcIicuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuYmluZChsYXN0U2VnbWVudFZhbHVlKTtcbiAgICAgICAgICAgIGNhY2hlZEpTRnVuY3Rpb25zW2lkZW50aWZpZXJdID0gcmVzdWx0O1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB2YWx1ZSAnXCIgKyByZXN1bHRJZGVudGlmaWVyICsgXCInIGlzIG5vdCBhIGZ1bmN0aW9uLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgRG90TmV0T2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBEb3ROZXRPYmplY3QoX2lkKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IF9pZDtcbiAgICAgICAgfVxuICAgICAgICBEb3ROZXRPYmplY3QucHJvdG90eXBlLmludm9rZU1ldGhvZCA9IGZ1bmN0aW9uIChtZXRob2RJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGludm9rZVBvc3NpYmxlSW5zdGFuY2VNZXRob2QobnVsbCwgbWV0aG9kSWRlbnRpZmllciwgdGhpcy5faWQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBEb3ROZXRPYmplY3QucHJvdG90eXBlLmludm9rZU1ldGhvZEFzeW5jID0gZnVuY3Rpb24gKG1ldGhvZElkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW52b2tlUG9zc2libGVJbnN0YW5jZU1ldGhvZEFzeW5jKG51bGwsIG1ldGhvZElkZW50aWZpZXIsIHRoaXMuX2lkLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgRG90TmV0T2JqZWN0LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBpbnZva2VQb3NzaWJsZUluc3RhbmNlTWV0aG9kQXN5bmMobnVsbCwgJ19fRGlzcG9zZScsIHRoaXMuX2lkLCBudWxsKTtcbiAgICAgICAgICAgIHByb21pc2UuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmVycm9yKGVycm9yKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIERvdE5ldE9iamVjdC5wcm90b3R5cGUuc2VyaWFsaXplQXNBcmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBfX2RvdE5ldE9iamVjdDogdGhpcy5faWQgfTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIERvdE5ldE9iamVjdDtcbiAgICB9KCkpO1xuICAgIHZhciBkb3ROZXRPYmplY3RSZWZLZXkgPSAnX19kb3ROZXRPYmplY3QnO1xuICAgIGF0dGFjaFJldml2ZXIoZnVuY3Rpb24gcmV2aXZlRG90TmV0T2JqZWN0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoZG90TmV0T2JqZWN0UmVmS2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEb3ROZXRPYmplY3QodmFsdWUuX19kb3ROZXRPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVucmVjb2duaXplZCAtIGxldCBhbm90aGVyIHJldml2ZXIgaGFuZGxlIGl0XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBhcmdSZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERvdE5ldE9iamVjdCA/IHZhbHVlLnNlcmlhbGl6ZUFzQXJnKCkgOiB2YWx1ZTtcbiAgICB9XG59KShEb3ROZXQgfHwgKERvdE5ldCA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NaWNyb3NvZnQuSlNJbnRlcm9wLmpzLm1hcCIsIi8qXG4gKiBiYXNlNjQtYXJyYXlidWZmZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgTmlrbGFzIHZvbiBIZXJ0emVuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgY2hhcnMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcblxuICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguXG4gIHZhciBsb29rdXAgPSBuZXcgVWludDhBcnJheSgyNTYpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgbG9va3VwW2NoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcbiAgfVxuXG4gIGV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlciksXG4gICAgaSwgbGVuID0gYnl0ZXMubGVuZ3RoLCBiYXNlNjQgPSBcIlwiO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9Mykge1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2ldID4+IDJdO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaV0gJiAzKSA8PCA0KSB8IChieXRlc1tpICsgMV0gPj4gNCldO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaSArIDJdICYgNjNdO1xuICAgIH1cblxuICAgIGlmICgobGVuICUgMykgPT09IDIpIHtcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgXCI9XCI7XG4gICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAyKSArIFwiPT1cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTY0O1xuICB9O1xuXG4gIGV4cG9ydHMuZGVjb2RlID0gIGZ1bmN0aW9uKGJhc2U2NCkge1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBiYXNlNjQubGVuZ3RoICogMC43NSxcbiAgICBsZW4gPSBiYXNlNjQubGVuZ3RoLCBpLCBwID0gMCxcbiAgICBlbmNvZGVkMSwgZW5jb2RlZDIsIGVuY29kZWQzLCBlbmNvZGVkNDtcblxuICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDFdID09PSBcIj1cIikge1xuICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAyXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFycmF5YnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCksXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKz00KSB7XG4gICAgICBlbmNvZGVkMSA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKV07XG4gICAgICBlbmNvZGVkMiA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKzEpXTtcbiAgICAgIGVuY29kZWQzID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkrMildO1xuICAgICAgZW5jb2RlZDQgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSszKV07XG5cbiAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDEgPDwgMikgfCAoZW5jb2RlZDIgPj4gNCk7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMiAmIDE1KSA8PCA0KSB8IChlbmNvZGVkMyA+PiAyKTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQzICYgMykgPDwgNikgfCAoZW5jb2RlZDQgJiA2Myk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5YnVmZmVyO1xuICB9O1xufSkoKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIHZhciBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayhcbiAgICAgIHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aClcbiAgICApKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCAnQGRvdG5ldC9qc2ludGVyb3AvZGlzdC9NaWNyb3NvZnQuSlNJbnRlcm9wJztcclxuaW1wb3J0ICdAYnJvd3NlcmpzL0dsb2JhbEV4cG9ydHMnO1xyXG5pbXBvcnQgeyBPdXRPZlByb2Nlc3NSZW5kZXJCYXRjaCB9IGZyb20gJ0Bicm93c2VyanMvUmVuZGVyaW5nL1JlbmRlckJhdGNoL091dE9mUHJvY2Vzc1JlbmRlckJhdGNoJztcclxuaW1wb3J0IHsgc2V0RXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnQGJyb3dzZXJqcy9SZW5kZXJpbmcvUmVuZGVyZXJFdmVudERpc3BhdGNoZXInO1xyXG5pbXBvcnQgeyBpbnRlcm5hbEZ1bmN0aW9ucyBhcyBuYXZpZ2F0aW9uTWFuYWdlckZ1bmN0aW9ucyB9IGZyb20gJ0Bicm93c2VyanMvU2VydmljZXMvTmF2aWdhdGlvbk1hbmFnZXInO1xyXG5pbXBvcnQgeyByZW5kZXJCYXRjaCB9IGZyb20gJ0Bicm93c2VyanMvUmVuZGVyaW5nL1JlbmRlcmVyJztcclxuaW1wb3J0IHsgZGVjb2RlIH0gZnJvbSAnYmFzZTY0LWFycmF5YnVmZmVyJztcclxuaW1wb3J0ICogYXMgaXBjIGZyb20gJy4vSVBDJztcclxuaW1wb3J0ICogYXMgc2lnbmFsUiBmcm9tICdAYXNwbmV0L3NpZ25hbHInO1xyXG5pbXBvcnQgeyByZWNlaXZlTWVzc2FnZSB9IGZyb20gJy4vSVBDJztcclxuXHJcbmxldCBjb25uZWN0aW9uOiBzaWduYWxSLkh1YkNvbm5lY3Rpb247XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBjb25uZWN0aW9uLmludm9rZShcIlNlbmRNZXNzYWdlXCIsIFwidXNlcmlkXCIsIG1lc3NhZ2UpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTZW5kTWVzc2FnZSBGYWlsZWRcIiArIGVyci50b1N0cmluZygpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBib290KCkge1xyXG4gICAgY29ubmVjdGlvbiA9IG5ldyBzaWduYWxSLkh1YkNvbm5lY3Rpb25CdWlsZGVyKCkud2l0aFVybChcIi93ZWJXaW5kb3dIdWJcIikuYnVpbGQoKTtcclxuXHJcbiAgICBjb25uZWN0aW9uLnN0YXJ0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKFwiQ29ubmVjdGlvbiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIC8vIENvbmZpcm0gdGhhdCB0aGUgSlMgc2lkZSBpcyByZWFkeSBmb3IgdGhlIGFwcCB0byBzdGFydFxyXG4gICAgICAgIGlwYy5zZW5kKCdjb21wb25lbnRzOmluaXQnLCBbXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25NYW5hZ2VyRnVuY3Rpb25zLmdldExvY2F0aW9uSHJlZigpLnJlcGxhY2UoL1xcL2luZGV4XFwuaHRtbCQvLCAnJyksXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25NYW5hZ2VyRnVuY3Rpb25zLmdldEJhc2VVUkkoKV0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gU2lnbmFsUiBodWJcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnRvU3RyaW5nKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbihcIlJlY2VpdmVNZXNzYWdlXCIsIG1lc3NhZ2UgPT4gcmVjZWl2ZU1lc3NhZ2UobWVzc2FnZSkpXHJcblxyXG5cclxuICBzZXRFdmVudERpc3BhdGNoZXIoKGV2ZW50RGVzY3JpcHRvciwgZXZlbnRBcmdzKSA9PiBEb3ROZXQuaW52b2tlTWV0aG9kQXN5bmMoJ1dlYldpbmRvdy5CbGF6b3InLCAnRGlzcGF0Y2hFdmVudCcsIGV2ZW50RGVzY3JpcHRvciwgSlNPTi5zdHJpbmdpZnkoZXZlbnRBcmdzKSkpO1xyXG4gIG5hdmlnYXRpb25NYW5hZ2VyRnVuY3Rpb25zLmxpc3RlbkZvck5hdmlnYXRpb25FdmVudHMoKHVyaTogc3RyaW5nLCBpbnRlcmNlcHRlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgcmV0dXJuIERvdE5ldC5pbnZva2VNZXRob2RBc3luYygnV2ViV2luZG93LkJsYXpvcicsICdOb3RpZnlMb2NhdGlvbkNoYW5nZWQnLCB1cmksIGludGVyY2VwdGVkKTtcclxuICB9KTtcclxuXHJcbiAgLy8gQ29uZmlndXJlIHRoZSBtZWNoYW5pc20gZm9yIEpTPC0+TkVUIGNhbGxzXHJcbiAgRG90TmV0LmF0dGFjaERpc3BhdGNoZXIoe1xyXG4gICAgYmVnaW5JbnZva2VEb3ROZXRGcm9tSlM6IChjYWxsSWQ6IG51bWJlciwgYXNzZW1ibHlOYW1lOiBzdHJpbmcgfCBudWxsLCBtZXRob2RJZGVudGlmaWVyOiBzdHJpbmcsIGRvdE5ldE9iamVjdElkOiBudW1iZXIgfCBudWxsLCBhcmdzSnNvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlwYy5zZW5kKCdCZWdpbkludm9rZURvdE5ldEZyb21KUycsIFtjYWxsSWQgPyBjYWxsSWQudG9TdHJpbmcoKSA6IG51bGwsIGFzc2VtYmx5TmFtZSwgbWV0aG9kSWRlbnRpZmllciwgZG90TmV0T2JqZWN0SWQgfHwgMCwgYXJnc0pzb25dKTtcclxuICAgIH0sXHJcbiAgICBlbmRJbnZva2VKU0Zyb21Eb3ROZXQ6IChjYWxsSWQ6IG51bWJlciwgc3VjY2VlZGVkOiBib29sZWFuLCByZXN1bHRPckVycm9yOiBhbnkpID0+IHtcclxuICAgICAgaXBjLnNlbmQoJ0VuZEludm9rZUpTRnJvbURvdE5ldCcsIFtjYWxsSWQsIHN1Y2NlZWRlZCwgcmVzdWx0T3JFcnJvcl0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBuYXZpZ2F0aW9uTWFuYWdlckZ1bmN0aW9ucy5lbmFibGVOYXZpZ2F0aW9uSW50ZXJjZXB0aW9uKCk7XHJcblxyXG4gIGlwYy5vbignSlMuQmVnaW5JbnZva2VKUycsIChhc3luY0hhbmRsZSwgaWRlbnRpZmllciwgYXJnc0pzb24pID0+IHtcclxuICAgIERvdE5ldC5qc0NhbGxEaXNwYXRjaGVyLmJlZ2luSW52b2tlSlNGcm9tRG90TmV0KGFzeW5jSGFuZGxlLCBpZGVudGlmaWVyLCBhcmdzSnNvbik7XHJcbiAgfSk7XHJcblxyXG4gIGlwYy5vbignSlMuRW5kSW52b2tlRG90TmV0JywgKGNhbGxJZCwgc3VjY2VzcywgcmVzdWx0T3JFcnJvcikgPT4ge1xyXG4gICAgRG90TmV0LmpzQ2FsbERpc3BhdGNoZXIuZW5kSW52b2tlRG90TmV0RnJvbUpTKGNhbGxJZCwgc3VjY2VzcywgcmVzdWx0T3JFcnJvcik7XHJcbiAgfSk7XHJcblxyXG4gIGlwYy5vbignSlMuUmVuZGVyQmF0Y2gnLCAocmVuZGVyZXJJZCwgYmF0Y2hCYXNlNjQpID0+IHtcclxuICAgIHZhciBiYXRjaERhdGEgPSBuZXcgVWludDhBcnJheShkZWNvZGUoYmF0Y2hCYXNlNjQpKTtcclxuICAgIHJlbmRlckJhdGNoKHJlbmRlcmVySWQsIG5ldyBPdXRPZlByb2Nlc3NSZW5kZXJCYXRjaChiYXRjaERhdGEpKTtcclxuICB9KTtcclxuXHJcbiAgaXBjLm9uKCdKUy5FcnJvcicsIChtZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xyXG4gIH0pO1xyXG5cclxuICBcclxufVxyXG5cclxuYm9vdCgpO1xyXG4iLCJpbXBvcnQgeyBzZW5kTWVzc2FnZSB9IGZyb20gXCIuL0Jvb3QuRGVza3RvcFwiO1xyXG5cclxuaW50ZXJmYWNlIENhbGxiYWNrIHtcclxuICAgICguLi5hcmdzOiBhbnlbXSk6IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IHJlZ2lzdHJhdGlvbnMgPSB7fSBhcyB7IFtldmVudE5hbWU6IHN0cmluZ106IENhbGxiYWNrW10gfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IENhbGxiYWNrKTogdm9pZCB7XHJcbiAgICBpZiAoIShldmVudE5hbWUgaW4gcmVnaXN0cmF0aW9ucykpIHtcclxuICAgICAgICByZWdpc3RyYXRpb25zW2V2ZW50TmFtZV0gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RyYXRpb25zW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgY29uc3QgZ3JvdXAgPSByZWdpc3RyYXRpb25zW2V2ZW50TmFtZV07XHJcbiAgICBjb25zdCBpbmRleCA9IGdyb3VwLmluZGV4T2YoY2FsbGJhY2spO1xyXG4gICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICBncm91cC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25jZShldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IENhbGxiYWNrKTogdm9pZCB7XHJcbiAgICBjb25zdCBjYWxsYmFja09uY2U6IENhbGxiYWNrID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgb2ZmKGV2ZW50TmFtZSwgY2FsbGJhY2tPbmNlKTtcclxuICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgb24oZXZlbnROYW1lLCBjYWxsYmFja09uY2UpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZChldmVudE5hbWU6IHN0cmluZywgYXJnczogYW55KTogdm9pZCB7XHJcbiAgICBzZW5kTWVzc2FnZShgaXBjOiR7ZXZlbnROYW1lfSAke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVjZWl2ZU1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjb2xvblBvcyA9IG1lc3NhZ2UuaW5kZXhPZignOicpO1xyXG4gICAgY29uc3QgZXZlbnROYW1lID0gbWVzc2FnZS5zdWJzdHJpbmcoMCwgY29sb25Qb3MpO1xyXG4gICAgY29uc3QgYXJnc0pzb24gPSBtZXNzYWdlLnN1YnN0cihjb2xvblBvcyArIDEpO1xyXG5cclxuICAgIGNvbnN0IGdyb3VwID0gcmVnaXN0cmF0aW9uc1tldmVudE5hbWVdO1xyXG4gICAgaWYgKGdyb3VwKSB7XHJcbiAgICAgICAgY29uc3QgYXJnczogYW55W10gPSBKU09OLnBhcnNlKGFyZ3NKc29uKTtcclxuICAgICAgICBncm91cC5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3MpKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIi8vIEV4cG9zZSBhbiBleHBvcnQgY2FsbGVkICdwbGF0Zm9ybScgb2YgdGhlIGludGVyZmFjZSB0eXBlICdQbGF0Zm9ybScsXHJcbi8vIHNvIHRoYXQgY29uc3VtZXJzIGNhbiBiZSBhZ25vc3RpYyBhYm91dCB3aGljaCBpbXBsZW1lbnRhdGlvbiB0aGV5IHVzZS5cclxuLy8gQmFzaWMgYWx0ZXJuYXRpdmUgdG8gaGF2aW5nIGFuIGFjdHVhbCBESSBjb250YWluZXIuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi9QbGF0Zm9ybS9QbGF0Zm9ybSc7XHJcblxyXG5leHBvcnQgbGV0IHBsYXRmb3JtOiBQbGF0Zm9ybTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQbGF0Zm9ybShwbGF0Zm9ybUluc3RhbmNlOiBQbGF0Zm9ybSkge1xyXG4gIHBsYXRmb3JtID0gcGxhdGZvcm1JbnN0YW5jZTtcclxuICByZXR1cm4gcGxhdGZvcm07XHJcbn1cclxuIiwiaW1wb3J0IHsgbmF2aWdhdGVUbywgaW50ZXJuYWxGdW5jdGlvbnMgYXMgbmF2aWdhdGlvbk1hbmFnZXJJbnRlcm5hbEZ1bmN0aW9ucyB9IGZyb20gJy4vU2VydmljZXMvTmF2aWdhdGlvbk1hbmFnZXInO1xyXG5pbXBvcnQgeyBhdHRhY2hSb290Q29tcG9uZW50VG9FbGVtZW50IH0gZnJvbSAnLi9SZW5kZXJpbmcvUmVuZGVyZXInO1xyXG5cclxuLy8gTWFrZSB0aGUgZm9sbG93aW5nIEFQSXMgYXZhaWxhYmxlIGluIGdsb2JhbCBzY29wZSBmb3IgaW52b2NhdGlvbiBmcm9tIEpTXHJcbndpbmRvd1snQmxhem9yJ10gPSB7XHJcbiAgbmF2aWdhdGVUbyxcclxuXHJcbiAgX2ludGVybmFsOiB7XHJcbiAgICBhdHRhY2hSb290Q29tcG9uZW50VG9FbGVtZW50LFxyXG4gICAgbmF2aWdhdGlvbk1hbmFnZXI6IG5hdmlnYXRpb25NYW5hZ2VySW50ZXJuYWxGdW5jdGlvbnMsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgUmVuZGVyQmF0Y2gsIEFycmF5QnVpbGRlclNlZ21lbnQsIFJlbmRlclRyZWVFZGl0LCBSZW5kZXJUcmVlRnJhbWUsIEVkaXRUeXBlLCBGcmFtZVR5cGUsIEFycmF5VmFsdWVzIH0gZnJvbSAnLi9SZW5kZXJCYXRjaC9SZW5kZXJCYXRjaCc7XHJcbmltcG9ydCB7IEV2ZW50RGVsZWdhdG9yIH0gZnJvbSAnLi9FdmVudERlbGVnYXRvcic7XHJcbmltcG9ydCB7IEV2ZW50Rm9yRG90TmV0LCBVSUV2ZW50QXJncywgRXZlbnRBcmdzVHlwZSB9IGZyb20gJy4vRXZlbnRGb3JEb3ROZXQnO1xyXG5pbXBvcnQgeyBMb2dpY2FsRWxlbWVudCwgUGVybXV0YXRpb25MaXN0RW50cnksIHRvTG9naWNhbEVsZW1lbnQsIGluc2VydExvZ2ljYWxDaGlsZCwgcmVtb3ZlTG9naWNhbENoaWxkLCBnZXRMb2dpY2FsUGFyZW50LCBnZXRMb2dpY2FsQ2hpbGQsIGNyZWF0ZUFuZEluc2VydExvZ2ljYWxDb250YWluZXIsIGlzU3ZnRWxlbWVudCwgZ2V0TG9naWNhbENoaWxkcmVuQXJyYXksIGdldExvZ2ljYWxTaWJsaW5nRW5kLCBwZXJtdXRlTG9naWNhbENoaWxkcmVuLCBnZXRDbG9zZXN0RG9tRWxlbWVudCB9IGZyb20gJy4vTG9naWNhbEVsZW1lbnRzJztcclxuaW1wb3J0IHsgYXBwbHlDYXB0dXJlSWRUb0VsZW1lbnQgfSBmcm9tICcuL0VsZW1lbnRSZWZlcmVuY2VDYXB0dXJlJztcclxuaW1wb3J0IHsgRXZlbnRGaWVsZEluZm8gfSBmcm9tICcuL0V2ZW50RmllbGRJbmZvJztcclxuaW1wb3J0IHsgZGlzcGF0Y2hFdmVudCB9IGZyb20gJy4vUmVuZGVyZXJFdmVudERpc3BhdGNoZXInO1xyXG5pbXBvcnQgeyBhdHRhY2hUb0V2ZW50RGVsZWdhdG9yIGFzIGF0dGFjaE5hdmlnYXRpb25NYW5hZ2VyVG9FdmVudERlbGVnYXRvciB9IGZyb20gJy4uL1NlcnZpY2VzL05hdmlnYXRpb25NYW5hZ2VyJztcclxuY29uc3Qgc2VsZWN0VmFsdWVQcm9wbmFtZSA9ICdfYmxhem9yU2VsZWN0VmFsdWUnO1xyXG5jb25zdCBzaGFyZWRUZW1wbGF0ZUVsZW1Gb3JQYXJzaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuY29uc3Qgc2hhcmVkU3ZnRWxlbUZvclBhcnNpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcclxuY29uc3QgcHJldmVudERlZmF1bHRFdmVudHM6IHsgW2V2ZW50VHlwZTogc3RyaW5nXTogYm9vbGVhbiB9ID0geyBzdWJtaXQ6IHRydWUgfTtcclxuY29uc3Qgcm9vdENvbXBvbmVudHNQZW5kaW5nRmlyc3RSZW5kZXI6IHsgW2NvbXBvbmVudElkOiBudW1iZXJdOiBMb2dpY2FsRWxlbWVudCB9ID0ge307XHJcbmNvbnN0IGludGVybmFsQXR0cmlidXRlTmFtZVByZWZpeCA9ICdfX2ludGVybmFsXyc7XHJcbmNvbnN0IGV2ZW50UHJldmVudERlZmF1bHRBdHRyaWJ1dGVOYW1lUHJlZml4ID0gJ3ByZXZlbnREZWZhdWx0Xyc7XHJcbmNvbnN0IGV2ZW50U3RvcFByb3BhZ2F0aW9uQXR0cmlidXRlTmFtZVByZWZpeCA9ICdzdG9wUHJvcGFnYXRpb25fJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCcm93c2VyUmVuZGVyZXIge1xyXG4gIHByaXZhdGUgZXZlbnREZWxlZ2F0b3I6IEV2ZW50RGVsZWdhdG9yO1xyXG5cclxuICBwcml2YXRlIGNoaWxkQ29tcG9uZW50TG9jYXRpb25zOiB7IFtjb21wb25lbnRJZDogbnVtYmVyXTogTG9naWNhbEVsZW1lbnQgfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGJyb3dzZXJSZW5kZXJlcklkOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihicm93c2VyUmVuZGVyZXJJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmJyb3dzZXJSZW5kZXJlcklkID0gYnJvd3NlclJlbmRlcmVySWQ7XHJcbiAgICB0aGlzLmV2ZW50RGVsZWdhdG9yID0gbmV3IEV2ZW50RGVsZWdhdG9yKChldmVudCwgZXZlbnRIYW5kbGVySWQsIGV2ZW50QXJncywgZXZlbnRGaWVsZEluZm8pID0+IHtcclxuICAgICAgcmFpc2VFdmVudChldmVudCwgdGhpcy5icm93c2VyUmVuZGVyZXJJZCwgZXZlbnRIYW5kbGVySWQsIGV2ZW50QXJncywgZXZlbnRGaWVsZEluZm8pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gV2UgZG9uJ3QgeWV0IGtub3cgd2hldGhlciBvciBub3QgbmF2aWdhdGlvbiBpbnRlcmNlcHRpb24gd2lsbCBiZSBlbmFibGVkLCBidXQgaW4gY2FzZSBpdCB3aWxsIGJlLFxyXG4gICAgLy8gd2Ugd2lyZSB1cCB0aGUgbmF2aWdhdGlvbiBtYW5hZ2VyIHRvIHRoZSBldmVudCBkZWxlZ2F0b3Igc28gaXQgaGFzIHRoZSBvcHRpb24gdG8gcGFydGljaXBhdGVcclxuICAgIC8vIGluIHRoZSBzeW50aGV0aWMgZXZlbnQgYnViYmxpbmcgcHJvY2VzcyBsYXRlclxyXG4gICAgYXR0YWNoTmF2aWdhdGlvbk1hbmFnZXJUb0V2ZW50RGVsZWdhdG9yKHRoaXMuZXZlbnREZWxlZ2F0b3IpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGF0dGFjaFJvb3RDb21wb25lbnRUb0xvZ2ljYWxFbGVtZW50KGNvbXBvbmVudElkOiBudW1iZXIsIGVsZW1lbnQ6IExvZ2ljYWxFbGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmF0dGFjaENvbXBvbmVudFRvRWxlbWVudChjb21wb25lbnRJZCwgZWxlbWVudCk7XHJcbiAgICByb290Q29tcG9uZW50c1BlbmRpbmdGaXJzdFJlbmRlcltjb21wb25lbnRJZF0gPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUNvbXBvbmVudChiYXRjaDogUmVuZGVyQmF0Y2gsIGNvbXBvbmVudElkOiBudW1iZXIsIGVkaXRzOiBBcnJheUJ1aWxkZXJTZWdtZW50PFJlbmRlclRyZWVFZGl0PiwgcmVmZXJlbmNlRnJhbWVzOiBBcnJheVZhbHVlczxSZW5kZXJUcmVlRnJhbWU+KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jaGlsZENvbXBvbmVudExvY2F0aW9uc1tjb21wb25lbnRJZF07XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBlbGVtZW50IGlzIGN1cnJlbnRseSBhc3NvY2lhdGVkIHdpdGggY29tcG9uZW50ICR7Y29tcG9uZW50SWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT24gdGhlIGZpcnN0IHJlbmRlciBmb3IgZWFjaCByb290IGNvbXBvbmVudCwgY2xlYXIgYW55IGV4aXN0aW5nIGNvbnRlbnQgKGUuZy4sIHByZXJlbmRlcmVkKVxyXG4gICAgY29uc3Qgcm9vdEVsZW1lbnRUb0NsZWFyID0gcm9vdENvbXBvbmVudHNQZW5kaW5nRmlyc3RSZW5kZXJbY29tcG9uZW50SWRdO1xyXG4gICAgaWYgKHJvb3RFbGVtZW50VG9DbGVhcikge1xyXG4gICAgICBjb25zdCByb290RWxlbWVudFRvQ2xlYXJFbmQgPSBnZXRMb2dpY2FsU2libGluZ0VuZChyb290RWxlbWVudFRvQ2xlYXIpO1xyXG4gICAgICBkZWxldGUgcm9vdENvbXBvbmVudHNQZW5kaW5nRmlyc3RSZW5kZXJbY29tcG9uZW50SWRdO1xyXG5cclxuICAgICAgaWYgKCFyb290RWxlbWVudFRvQ2xlYXJFbmQpIHtcclxuICAgICAgICBjbGVhckVsZW1lbnQocm9vdEVsZW1lbnRUb0NsZWFyIGFzIHVua25vd24gYXMgRWxlbWVudCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2xlYXJCZXR3ZWVuKHJvb3RFbGVtZW50VG9DbGVhciBhcyB1bmtub3duIGFzIE5vZGUsIHJvb3RFbGVtZW50VG9DbGVhckVuZCBhcyB1bmtub3duIGFzIENvbW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3duZXJEb2N1bWVudCA9IGdldENsb3Nlc3REb21FbGVtZW50KGVsZW1lbnQpLm93bmVyRG9jdW1lbnQ7XHJcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50QmVmb3JlID0gb3duZXJEb2N1bWVudCAmJiBvd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy5hcHBseUVkaXRzKGJhdGNoLCBjb21wb25lbnRJZCwgZWxlbWVudCwgMCwgZWRpdHMsIHJlZmVyZW5jZUZyYW1lcyk7XHJcblxyXG4gICAgLy8gVHJ5IHRvIHJlc3RvcmUgZm9jdXMgaW4gY2FzZSBpdCB3YXMgbG9zdCBkdWUgdG8gYW4gZWxlbWVudCBtb3ZlXHJcbiAgICBpZiAoKGFjdGl2ZUVsZW1lbnRCZWZvcmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgJiYgb3duZXJEb2N1bWVudCAmJiBvd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGFjdGl2ZUVsZW1lbnRCZWZvcmUpIHtcclxuICAgICAgYWN0aXZlRWxlbWVudEJlZm9yZS5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc3Bvc2VDb21wb25lbnQoY29tcG9uZW50SWQ6IG51bWJlcikge1xyXG4gICAgZGVsZXRlIHRoaXMuY2hpbGRDb21wb25lbnRMb2NhdGlvbnNbY29tcG9uZW50SWRdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc3Bvc2VFdmVudEhhbmRsZXIoZXZlbnRIYW5kbGVySWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5ldmVudERlbGVnYXRvci5yZW1vdmVMaXN0ZW5lcihldmVudEhhbmRsZXJJZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF0dGFjaENvbXBvbmVudFRvRWxlbWVudChjb21wb25lbnRJZDogbnVtYmVyLCBlbGVtZW50OiBMb2dpY2FsRWxlbWVudCkge1xyXG4gICAgdGhpcy5jaGlsZENvbXBvbmVudExvY2F0aW9uc1tjb21wb25lbnRJZF0gPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcHBseUVkaXRzKGJhdGNoOiBSZW5kZXJCYXRjaCwgY29tcG9uZW50SWQ6IG51bWJlciwgcGFyZW50OiBMb2dpY2FsRWxlbWVudCwgY2hpbGRJbmRleDogbnVtYmVyLCBlZGl0czogQXJyYXlCdWlsZGVyU2VnbWVudDxSZW5kZXJUcmVlRWRpdD4sIHJlZmVyZW5jZUZyYW1lczogQXJyYXlWYWx1ZXM8UmVuZGVyVHJlZUZyYW1lPikge1xyXG4gICAgbGV0IGN1cnJlbnREZXB0aCA9IDA7XHJcbiAgICBsZXQgY2hpbGRJbmRleEF0Q3VycmVudERlcHRoID0gY2hpbGRJbmRleDtcclxuICAgIGxldCBwZXJtdXRhdGlvbkxpc3Q6IFBlcm11dGF0aW9uTGlzdEVudHJ5W10gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3QgYXJyYXlCdWlsZGVyU2VnbWVudFJlYWRlciA9IGJhdGNoLmFycmF5QnVpbGRlclNlZ21lbnRSZWFkZXI7XHJcbiAgICBjb25zdCBlZGl0UmVhZGVyID0gYmF0Y2guZWRpdFJlYWRlcjtcclxuICAgIGNvbnN0IGZyYW1lUmVhZGVyID0gYmF0Y2guZnJhbWVSZWFkZXI7XHJcbiAgICBjb25zdCBlZGl0c1ZhbHVlcyA9IGFycmF5QnVpbGRlclNlZ21lbnRSZWFkZXIudmFsdWVzKGVkaXRzKTtcclxuICAgIGNvbnN0IGVkaXRzT2Zmc2V0ID0gYXJyYXlCdWlsZGVyU2VnbWVudFJlYWRlci5vZmZzZXQoZWRpdHMpO1xyXG4gICAgY29uc3QgZWRpdHNMZW5ndGggPSBhcnJheUJ1aWxkZXJTZWdtZW50UmVhZGVyLmNvdW50KGVkaXRzKTtcclxuICAgIGNvbnN0IG1heEVkaXRJbmRleEV4Y2wgPSBlZGl0c09mZnNldCArIGVkaXRzTGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IGVkaXRJbmRleCA9IGVkaXRzT2Zmc2V0OyBlZGl0SW5kZXggPCBtYXhFZGl0SW5kZXhFeGNsOyBlZGl0SW5kZXgrKykge1xyXG4gICAgICBjb25zdCBlZGl0ID0gYmF0Y2guZGlmZlJlYWRlci5lZGl0c0VudHJ5KGVkaXRzVmFsdWVzLCBlZGl0SW5kZXgpO1xyXG4gICAgICBjb25zdCBlZGl0VHlwZSA9IGVkaXRSZWFkZXIuZWRpdFR5cGUoZWRpdCk7XHJcbiAgICAgIHN3aXRjaCAoZWRpdFR5cGUpIHtcclxuICAgICAgICBjYXNlIEVkaXRUeXBlLnByZXBlbmRGcmFtZToge1xyXG4gICAgICAgICAgY29uc3QgZnJhbWVJbmRleCA9IGVkaXRSZWFkZXIubmV3VHJlZUluZGV4KGVkaXQpO1xyXG4gICAgICAgICAgY29uc3QgZnJhbWUgPSBiYXRjaC5yZWZlcmVuY2VGcmFtZXNFbnRyeShyZWZlcmVuY2VGcmFtZXMsIGZyYW1lSW5kZXgpO1xyXG4gICAgICAgICAgY29uc3Qgc2libGluZ0luZGV4ID0gZWRpdFJlYWRlci5zaWJsaW5nSW5kZXgoZWRpdCk7XHJcbiAgICAgICAgICB0aGlzLmluc2VydEZyYW1lKGJhdGNoLCBjb21wb25lbnRJZCwgcGFyZW50LCBjaGlsZEluZGV4QXRDdXJyZW50RGVwdGggKyBzaWJsaW5nSW5kZXgsIHJlZmVyZW5jZUZyYW1lcywgZnJhbWUsIGZyYW1lSW5kZXgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRWRpdFR5cGUucmVtb3ZlRnJhbWU6IHtcclxuICAgICAgICAgIGNvbnN0IHNpYmxpbmdJbmRleCA9IGVkaXRSZWFkZXIuc2libGluZ0luZGV4KGVkaXQpO1xyXG4gICAgICAgICAgcmVtb3ZlTG9naWNhbENoaWxkKHBhcmVudCwgY2hpbGRJbmRleEF0Q3VycmVudERlcHRoICsgc2libGluZ0luZGV4KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEVkaXRUeXBlLnNldEF0dHJpYnV0ZToge1xyXG4gICAgICAgICAgY29uc3QgZnJhbWVJbmRleCA9IGVkaXRSZWFkZXIubmV3VHJlZUluZGV4KGVkaXQpO1xyXG4gICAgICAgICAgY29uc3QgZnJhbWUgPSBiYXRjaC5yZWZlcmVuY2VGcmFtZXNFbnRyeShyZWZlcmVuY2VGcmFtZXMsIGZyYW1lSW5kZXgpO1xyXG4gICAgICAgICAgY29uc3Qgc2libGluZ0luZGV4ID0gZWRpdFJlYWRlci5zaWJsaW5nSW5kZXgoZWRpdCk7XHJcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0TG9naWNhbENoaWxkKHBhcmVudCwgY2hpbGRJbmRleEF0Q3VycmVudERlcHRoICsgc2libGluZ0luZGV4KTtcclxuICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5QXR0cmlidXRlKGJhdGNoLCBjb21wb25lbnRJZCwgZWxlbWVudCwgZnJhbWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2V0IGF0dHJpYnV0ZSBvbiBub24tZWxlbWVudCBjaGlsZCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRWRpdFR5cGUucmVtb3ZlQXR0cmlidXRlOiB7XHJcbiAgICAgICAgICAvLyBOb3RlIHRoYXQgd2UgZG9uJ3QgaGF2ZSB0byBkaXNwb3NlIHRoZSBpbmZvIHdlIHRyYWNrIGFib3V0IGV2ZW50IGhhbmRsZXJzIGhlcmUsIGJlY2F1c2UgdGhlXHJcbiAgICAgICAgICAvLyBkaXNwb3NlZCBldmVudCBoYW5kbGVyIElEcyBhcmUgZGVsaXZlcmVkIHNlcGFyYXRlbHkgKGluIHRoZSAnZGlzcG9zZWRFdmVudEhhbmRsZXJJZHMnIGFycmF5KVxyXG4gICAgICAgICAgY29uc3Qgc2libGluZ0luZGV4ID0gZWRpdFJlYWRlci5zaWJsaW5nSW5kZXgoZWRpdCk7XHJcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0TG9naWNhbENoaWxkKHBhcmVudCwgY2hpbGRJbmRleEF0Q3VycmVudERlcHRoICsgc2libGluZ0luZGV4KTtcclxuICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGVkaXRSZWFkZXIucmVtb3ZlZEF0dHJpYnV0ZU5hbWUoZWRpdCkhO1xyXG4gICAgICAgICAgICAvLyBGaXJzdCB0cnkgdG8gcmVtb3ZlIGFueSBzcGVjaWFsIHByb3BlcnR5IHdlIHVzZSBmb3IgdGhpcyBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRyeUFwcGx5U3BlY2lhbFByb3BlcnR5KGJhdGNoLCBlbGVtZW50LCBhdHRyaWJ1dGVOYW1lLCBudWxsKSkge1xyXG4gICAgICAgICAgICAgIC8vIElmIHRoYXQncyBub3QgYXBwbGljYWJsZSwgaXQncyBhIHJlZ3VsYXIgRE9NIGF0dHJpYnV0ZSBzbyByZW1vdmUgdGhhdFxyXG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZW1vdmUgYXR0cmlidXRlIGZyb20gbm9uLWVsZW1lbnQgY2hpbGQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEVkaXRUeXBlLnVwZGF0ZVRleHQ6IHtcclxuICAgICAgICAgIGNvbnN0IGZyYW1lSW5kZXggPSBlZGl0UmVhZGVyLm5ld1RyZWVJbmRleChlZGl0KTtcclxuICAgICAgICAgIGNvbnN0IGZyYW1lID0gYmF0Y2gucmVmZXJlbmNlRnJhbWVzRW50cnkocmVmZXJlbmNlRnJhbWVzLCBmcmFtZUluZGV4KTtcclxuICAgICAgICAgIGNvbnN0IHNpYmxpbmdJbmRleCA9IGVkaXRSZWFkZXIuc2libGluZ0luZGV4KGVkaXQpO1xyXG4gICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBnZXRMb2dpY2FsQ2hpbGQocGFyZW50LCBjaGlsZEluZGV4QXRDdXJyZW50RGVwdGggKyBzaWJsaW5nSW5kZXgpO1xyXG4gICAgICAgICAgaWYgKHRleHROb2RlIGluc3RhbmNlb2YgVGV4dCkge1xyXG4gICAgICAgICAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IGZyYW1lUmVhZGVyLnRleHRDb250ZW50KGZyYW1lKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNldCB0ZXh0IGNvbnRlbnQgb24gbm9uLXRleHQgY2hpbGQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEVkaXRUeXBlLnVwZGF0ZU1hcmt1cDoge1xyXG4gICAgICAgICAgY29uc3QgZnJhbWVJbmRleCA9IGVkaXRSZWFkZXIubmV3VHJlZUluZGV4KGVkaXQpO1xyXG4gICAgICAgICAgY29uc3QgZnJhbWUgPSBiYXRjaC5yZWZlcmVuY2VGcmFtZXNFbnRyeShyZWZlcmVuY2VGcmFtZXMsIGZyYW1lSW5kZXgpO1xyXG4gICAgICAgICAgY29uc3Qgc2libGluZ0luZGV4ID0gZWRpdFJlYWRlci5zaWJsaW5nSW5kZXgoZWRpdCk7XHJcbiAgICAgICAgICByZW1vdmVMb2dpY2FsQ2hpbGQocGFyZW50LCBjaGlsZEluZGV4QXRDdXJyZW50RGVwdGggKyBzaWJsaW5nSW5kZXgpO1xyXG4gICAgICAgICAgdGhpcy5pbnNlcnRNYXJrdXAoYmF0Y2gsIHBhcmVudCwgY2hpbGRJbmRleEF0Q3VycmVudERlcHRoICsgc2libGluZ0luZGV4LCBmcmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBFZGl0VHlwZS5zdGVwSW46IHtcclxuICAgICAgICAgIGNvbnN0IHNpYmxpbmdJbmRleCA9IGVkaXRSZWFkZXIuc2libGluZ0luZGV4KGVkaXQpO1xyXG4gICAgICAgICAgcGFyZW50ID0gZ2V0TG9naWNhbENoaWxkKHBhcmVudCwgY2hpbGRJbmRleEF0Q3VycmVudERlcHRoICsgc2libGluZ0luZGV4KTtcclxuICAgICAgICAgIGN1cnJlbnREZXB0aCsrO1xyXG4gICAgICAgICAgY2hpbGRJbmRleEF0Q3VycmVudERlcHRoID0gMDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEVkaXRUeXBlLnN0ZXBPdXQ6IHtcclxuICAgICAgICAgIHBhcmVudCA9IGdldExvZ2ljYWxQYXJlbnQocGFyZW50KSE7XHJcbiAgICAgICAgICBjdXJyZW50RGVwdGgtLTtcclxuICAgICAgICAgIGNoaWxkSW5kZXhBdEN1cnJlbnREZXB0aCA9IGN1cnJlbnREZXB0aCA9PT0gMCA/IGNoaWxkSW5kZXggOiAwOyAvLyBUaGUgY2hpbGRJbmRleCBpcyBvbmx5IGV2ZXIgbm9uemVybyBhdCB6ZXJvIGRlcHRoXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBFZGl0VHlwZS5wZXJtdXRhdGlvbkxpc3RFbnRyeToge1xyXG4gICAgICAgICAgcGVybXV0YXRpb25MaXN0ID0gcGVybXV0YXRpb25MaXN0IHx8IFtdO1xyXG4gICAgICAgICAgcGVybXV0YXRpb25MaXN0LnB1c2goe1xyXG4gICAgICAgICAgICBmcm9tU2libGluZ0luZGV4OiBjaGlsZEluZGV4QXRDdXJyZW50RGVwdGggKyBlZGl0UmVhZGVyLnNpYmxpbmdJbmRleChlZGl0KSxcclxuICAgICAgICAgICAgdG9TaWJsaW5nSW5kZXg6IGNoaWxkSW5kZXhBdEN1cnJlbnREZXB0aCArIGVkaXRSZWFkZXIubW92ZVRvU2libGluZ0luZGV4KGVkaXQpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBFZGl0VHlwZS5wZXJtdXRhdGlvbkxpc3RFbmQ6IHtcclxuICAgICAgICAgIHBlcm11dGVMb2dpY2FsQ2hpbGRyZW4ocGFyZW50LCBwZXJtdXRhdGlvbkxpc3QhKTtcclxuICAgICAgICAgIHBlcm11dGF0aW9uTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICBjb25zdCB1bmtub3duVHlwZTogbmV2ZXIgPSBlZGl0VHlwZTsgLy8gQ29tcGlsZS10aW1lIHZlcmlmaWNhdGlvbiB0aGF0IHRoZSBzd2l0Y2ggd2FzIGV4aGF1c3RpdmVcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBlZGl0IHR5cGU6ICR7dW5rbm93blR5cGV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc2VydEZyYW1lKGJhdGNoOiBSZW5kZXJCYXRjaCwgY29tcG9uZW50SWQ6IG51bWJlciwgcGFyZW50OiBMb2dpY2FsRWxlbWVudCwgY2hpbGRJbmRleDogbnVtYmVyLCBmcmFtZXM6IEFycmF5VmFsdWVzPFJlbmRlclRyZWVGcmFtZT4sIGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUsIGZyYW1lSW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBmcmFtZVJlYWRlciA9IGJhdGNoLmZyYW1lUmVhZGVyO1xyXG4gICAgY29uc3QgZnJhbWVUeXBlID0gZnJhbWVSZWFkZXIuZnJhbWVUeXBlKGZyYW1lKTtcclxuICAgIHN3aXRjaCAoZnJhbWVUeXBlKSB7XHJcbiAgICAgIGNhc2UgRnJhbWVUeXBlLmVsZW1lbnQ6XHJcbiAgICAgICAgdGhpcy5pbnNlcnRFbGVtZW50KGJhdGNoLCBjb21wb25lbnRJZCwgcGFyZW50LCBjaGlsZEluZGV4LCBmcmFtZXMsIGZyYW1lLCBmcmFtZUluZGV4KTtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgICAgY2FzZSBGcmFtZVR5cGUudGV4dDpcclxuICAgICAgICB0aGlzLmluc2VydFRleHQoYmF0Y2gsIHBhcmVudCwgY2hpbGRJbmRleCwgZnJhbWUpO1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgICBjYXNlIEZyYW1lVHlwZS5hdHRyaWJ1dGU6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdHRyaWJ1dGUgZnJhbWVzIHNob3VsZCBvbmx5IGJlIHByZXNlbnQgYXMgbGVhZGluZyBjaGlsZHJlbiBvZiBlbGVtZW50IGZyYW1lcy4nKTtcclxuICAgICAgY2FzZSBGcmFtZVR5cGUuY29tcG9uZW50OlxyXG4gICAgICAgIHRoaXMuaW5zZXJ0Q29tcG9uZW50KGJhdGNoLCBwYXJlbnQsIGNoaWxkSW5kZXgsIGZyYW1lKTtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgICAgY2FzZSBGcmFtZVR5cGUucmVnaW9uOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEZyYW1lUmFuZ2UoYmF0Y2gsIGNvbXBvbmVudElkLCBwYXJlbnQsIGNoaWxkSW5kZXgsIGZyYW1lcywgZnJhbWVJbmRleCArIDEsIGZyYW1lSW5kZXggKyBmcmFtZVJlYWRlci5zdWJ0cmVlTGVuZ3RoKGZyYW1lKSk7XHJcbiAgICAgIGNhc2UgRnJhbWVUeXBlLmVsZW1lbnRSZWZlcmVuY2VDYXB0dXJlOlxyXG4gICAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICBhcHBseUNhcHR1cmVJZFRvRWxlbWVudChwYXJlbnQsIGZyYW1lUmVhZGVyLmVsZW1lbnRSZWZlcmVuY2VDYXB0dXJlSWQoZnJhbWUpISk7XHJcbiAgICAgICAgICByZXR1cm4gMDsgLy8gQSBcImNhcHR1cmVcIiBpcyBhIGNoaWxkIGluIHRoZSBkaWZmLCBidXQgaGFzIG5vIG5vZGUgaW4gdGhlIERPTVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZmVyZW5jZSBjYXB0dXJlIGZyYW1lcyBjYW4gb25seSBiZSBjaGlsZHJlbiBvZiBlbGVtZW50IGZyYW1lcy4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgRnJhbWVUeXBlLm1hcmt1cDpcclxuICAgICAgICB0aGlzLmluc2VydE1hcmt1cChiYXRjaCwgcGFyZW50LCBjaGlsZEluZGV4LCBmcmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc3QgdW5rbm93blR5cGU6IG5ldmVyID0gZnJhbWVUeXBlOyAvLyBDb21waWxlLXRpbWUgdmVyaWZpY2F0aW9uIHRoYXQgdGhlIHN3aXRjaCB3YXMgZXhoYXVzdGl2ZVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBmcmFtZSB0eXBlOiAke3Vua25vd25UeXBlfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnNlcnRFbGVtZW50KGJhdGNoOiBSZW5kZXJCYXRjaCwgY29tcG9uZW50SWQ6IG51bWJlciwgcGFyZW50OiBMb2dpY2FsRWxlbWVudCwgY2hpbGRJbmRleDogbnVtYmVyLCBmcmFtZXM6IEFycmF5VmFsdWVzPFJlbmRlclRyZWVGcmFtZT4sIGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUsIGZyYW1lSW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgZnJhbWVSZWFkZXIgPSBiYXRjaC5mcmFtZVJlYWRlcjtcclxuICAgIGNvbnN0IHRhZ05hbWUgPSBmcmFtZVJlYWRlci5lbGVtZW50TmFtZShmcmFtZSkhO1xyXG4gICAgY29uc3QgbmV3RG9tRWxlbWVudFJhdyA9IHRhZ05hbWUgPT09ICdzdmcnIHx8IGlzU3ZnRWxlbWVudChwYXJlbnQpID9cclxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHRhZ05hbWUpIDpcclxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSB0b0xvZ2ljYWxFbGVtZW50KG5ld0RvbUVsZW1lbnRSYXcpO1xyXG4gICAgaW5zZXJ0TG9naWNhbENoaWxkKG5ld0RvbUVsZW1lbnRSYXcsIHBhcmVudCwgY2hpbGRJbmRleCk7XHJcblxyXG4gICAgLy8gQXBwbHkgYXR0cmlidXRlc1xyXG4gICAgY29uc3QgZGVzY2VuZGFudHNFbmRJbmRleEV4Y2wgPSBmcmFtZUluZGV4ICsgZnJhbWVSZWFkZXIuc3VidHJlZUxlbmd0aChmcmFtZSk7XHJcbiAgICBmb3IgKGxldCBkZXNjZW5kYW50SW5kZXggPSBmcmFtZUluZGV4ICsgMTsgZGVzY2VuZGFudEluZGV4IDwgZGVzY2VuZGFudHNFbmRJbmRleEV4Y2w7IGRlc2NlbmRhbnRJbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGRlc2NlbmRhbnRGcmFtZSA9IGJhdGNoLnJlZmVyZW5jZUZyYW1lc0VudHJ5KGZyYW1lcywgZGVzY2VuZGFudEluZGV4KTtcclxuICAgICAgaWYgKGZyYW1lUmVhZGVyLmZyYW1lVHlwZShkZXNjZW5kYW50RnJhbWUpID09PSBGcmFtZVR5cGUuYXR0cmlidXRlKSB7XHJcbiAgICAgICAgdGhpcy5hcHBseUF0dHJpYnV0ZShiYXRjaCwgY29tcG9uZW50SWQsIG5ld0RvbUVsZW1lbnRSYXcsIGRlc2NlbmRhbnRGcmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQXMgc29vbiBhcyB3ZSBzZWUgYSBub24tYXR0cmlidXRlIGNoaWxkLCBhbGwgdGhlIHN1YnNlcXVlbnQgY2hpbGQgZnJhbWVzIGFyZVxyXG4gICAgICAgIC8vIG5vdCBhdHRyaWJ1dGVzLCBzbyBiYWlsIG91dCBhbmQgaW5zZXJ0IHRoZSByZW1uYW50cyByZWN1cnNpdmVseVxyXG4gICAgICAgIHRoaXMuaW5zZXJ0RnJhbWVSYW5nZShiYXRjaCwgY29tcG9uZW50SWQsIG5ld0VsZW1lbnQsIDAsIGZyYW1lcywgZGVzY2VuZGFudEluZGV4LCBkZXNjZW5kYW50c0VuZEluZGV4RXhjbCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBXZSBoYW5kbGUgc2V0dGluZyAndmFsdWUnIG9uIGEgPHNlbGVjdD4gaW4gdHdvIGRpZmZlcmVudCB3YXlzOlxyXG4gICAgLy8gWzFdIFdoZW4gaW5zZXJ0aW5nIGEgY29ycmVzcG9uZGluZyA8b3B0aW9uPiwgaW4gY2FzZSB5b3UncmUgZHluYW1pY2FsbHkgYWRkaW5nIG9wdGlvbnNcclxuICAgIC8vIFsyXSBBZnRlciB3ZSBmaW5pc2ggaW5zZXJ0aW5nIHRoZSA8c2VsZWN0PiwgaW4gY2FzZSB0aGUgZGVzY2VuZGFudCBvcHRpb25zIGFyZSBiZWluZ1xyXG4gICAgLy8gICAgIGFkZGVkIGFzIGFuIG9wYXF1ZSBtYXJrdXAgYmxvY2sgcmF0aGVyIHRoYW4gaW5kaXZpZHVhbGx5XHJcbiAgICAvLyBSaWdodCBoZXJlIHdlIGltcGxlbWVudCBbMl1cclxuICAgIGlmIChuZXdEb21FbGVtZW50UmF3IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgJiYgc2VsZWN0VmFsdWVQcm9wbmFtZSBpbiBuZXdEb21FbGVtZW50UmF3KSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdFZhbHVlID0gbmV3RG9tRWxlbWVudFJhd1tzZWxlY3RWYWx1ZVByb3BuYW1lXTtcclxuICAgICAgbmV3RG9tRWxlbWVudFJhdy52YWx1ZSA9IHNlbGVjdFZhbHVlO1xyXG4gICAgICBkZWxldGUgbmV3RG9tRWxlbWVudFJhd1tzZWxlY3RWYWx1ZVByb3BuYW1lXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zZXJ0Q29tcG9uZW50KGJhdGNoOiBSZW5kZXJCYXRjaCwgcGFyZW50OiBMb2dpY2FsRWxlbWVudCwgY2hpbGRJbmRleDogbnVtYmVyLCBmcmFtZTogUmVuZGVyVHJlZUZyYW1lKSB7XHJcbiAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gY3JlYXRlQW5kSW5zZXJ0TG9naWNhbENvbnRhaW5lcihwYXJlbnQsIGNoaWxkSW5kZXgpO1xyXG5cclxuICAgIC8vIEFsbCB3ZSBoYXZlIHRvIGRvIGlzIGFzc29jaWF0ZSB0aGUgY2hpbGQgY29tcG9uZW50IElEIHdpdGggaXRzIGxvY2F0aW9uLiBXZSBkb24ndCBhY3R1YWxseVxyXG4gICAgLy8gZG8gYW55IHJlbmRlcmluZyBoZXJlLCBiZWNhdXNlIHRoZSBkaWZmIGZvciB0aGUgY2hpbGQgd2lsbCBhcHBlYXIgbGF0ZXIgaW4gdGhlIHJlbmRlciBiYXRjaC5cclxuICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50SWQgPSBiYXRjaC5mcmFtZVJlYWRlci5jb21wb25lbnRJZChmcmFtZSk7XHJcbiAgICB0aGlzLmF0dGFjaENvbXBvbmVudFRvRWxlbWVudChjaGlsZENvbXBvbmVudElkLCBjb250YWluZXJFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zZXJ0VGV4dChiYXRjaDogUmVuZGVyQmF0Y2gsIHBhcmVudDogTG9naWNhbEVsZW1lbnQsIGNoaWxkSW5kZXg6IG51bWJlciwgdGV4dEZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpIHtcclxuICAgIGNvbnN0IHRleHRDb250ZW50ID0gYmF0Y2guZnJhbWVSZWFkZXIudGV4dENvbnRlbnQodGV4dEZyYW1lKSE7XHJcbiAgICBjb25zdCBuZXdUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHRDb250ZW50KTtcclxuICAgIGluc2VydExvZ2ljYWxDaGlsZChuZXdUZXh0Tm9kZSwgcGFyZW50LCBjaGlsZEluZGV4KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zZXJ0TWFya3VwKGJhdGNoOiBSZW5kZXJCYXRjaCwgcGFyZW50OiBMb2dpY2FsRWxlbWVudCwgY2hpbGRJbmRleDogbnVtYmVyLCBtYXJrdXBGcmFtZTogUmVuZGVyVHJlZUZyYW1lKSB7XHJcbiAgICBjb25zdCBtYXJrdXBDb250YWluZXIgPSBjcmVhdGVBbmRJbnNlcnRMb2dpY2FsQ29udGFpbmVyKHBhcmVudCwgY2hpbGRJbmRleCk7XHJcblxyXG4gICAgY29uc3QgbWFya3VwQ29udGVudCA9IGJhdGNoLmZyYW1lUmVhZGVyLm1hcmt1cENvbnRlbnQobWFya3VwRnJhbWUpO1xyXG4gICAgY29uc3QgcGFyc2VkTWFya3VwID0gcGFyc2VNYXJrdXAobWFya3VwQ29udGVudCwgaXNTdmdFbGVtZW50KHBhcmVudCkpO1xyXG4gICAgbGV0IGxvZ2ljYWxTaWJsaW5nSW5kZXggPSAwO1xyXG4gICAgd2hpbGUgKHBhcnNlZE1hcmt1cC5maXJzdENoaWxkKSB7XHJcbiAgICAgIGluc2VydExvZ2ljYWxDaGlsZChwYXJzZWRNYXJrdXAuZmlyc3RDaGlsZCwgbWFya3VwQ29udGFpbmVyLCBsb2dpY2FsU2libGluZ0luZGV4KyspO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcHBseUF0dHJpYnV0ZShiYXRjaDogUmVuZGVyQmF0Y2gsIGNvbXBvbmVudElkOiBudW1iZXIsIHRvRG9tRWxlbWVudDogRWxlbWVudCwgYXR0cmlidXRlRnJhbWU6IFJlbmRlclRyZWVGcmFtZSkge1xyXG4gICAgY29uc3QgZnJhbWVSZWFkZXIgPSBiYXRjaC5mcmFtZVJlYWRlcjtcclxuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBmcmFtZVJlYWRlci5hdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZUZyYW1lKSE7XHJcbiAgICBjb25zdCBldmVudEhhbmRsZXJJZCA9IGZyYW1lUmVhZGVyLmF0dHJpYnV0ZUV2ZW50SGFuZGxlcklkKGF0dHJpYnV0ZUZyYW1lKTtcclxuXHJcbiAgICBpZiAoZXZlbnRIYW5kbGVySWQpIHtcclxuICAgICAgY29uc3QgZXZlbnROYW1lID0gc3RyaXBPblByZWZpeChhdHRyaWJ1dGVOYW1lKTtcclxuICAgICAgdGhpcy5ldmVudERlbGVnYXRvci5zZXRMaXN0ZW5lcih0b0RvbUVsZW1lbnQsIGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVySWQsIGNvbXBvbmVudElkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpcnN0IHNlZSBpZiB3ZSBoYXZlIHNwZWNpYWwgaGFuZGxpbmcgZm9yIHRoaXMgYXR0cmlidXRlXHJcbiAgICBpZiAoIXRoaXMudHJ5QXBwbHlTcGVjaWFsUHJvcGVydHkoYmF0Y2gsIHRvRG9tRWxlbWVudCwgYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlRnJhbWUpKSB7XHJcbiAgICAgIC8vIElmIG5vdCwgdHJlYXQgaXQgYXMgYSByZWd1bGFyIHN0cmluZy12YWx1ZWQgYXR0cmlidXRlXHJcbiAgICAgIHRvRG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgYXR0cmlidXRlTmFtZSxcclxuICAgICAgICBmcmFtZVJlYWRlci5hdHRyaWJ1dGVWYWx1ZShhdHRyaWJ1dGVGcmFtZSkhXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyeUFwcGx5U3BlY2lhbFByb3BlcnR5KGJhdGNoOiBSZW5kZXJCYXRjaCwgZWxlbWVudDogRWxlbWVudCwgYXR0cmlidXRlTmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVGcmFtZTogUmVuZGVyVHJlZUZyYW1lIHwgbnVsbCkge1xyXG4gICAgc3dpdGNoIChhdHRyaWJ1dGVOYW1lKSB7XHJcbiAgICAgIGNhc2UgJ3ZhbHVlJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50cnlBcHBseVZhbHVlUHJvcGVydHkoYmF0Y2gsIGVsZW1lbnQsIGF0dHJpYnV0ZUZyYW1lKTtcclxuICAgICAgY2FzZSAnY2hlY2tlZCc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJ5QXBwbHlDaGVja2VkUHJvcGVydHkoYmF0Y2gsIGVsZW1lbnQsIGF0dHJpYnV0ZUZyYW1lKTtcclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVOYW1lLnN0YXJ0c1dpdGgoaW50ZXJuYWxBdHRyaWJ1dGVOYW1lUHJlZml4KSkge1xyXG4gICAgICAgICAgdGhpcy5hcHBseUludGVybmFsQXR0cmlidXRlKGJhdGNoLCBlbGVtZW50LCBhdHRyaWJ1dGVOYW1lLnN1YnN0cmluZyhpbnRlcm5hbEF0dHJpYnV0ZU5hbWVQcmVmaXgubGVuZ3RoKSwgYXR0cmlidXRlRnJhbWUpO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcHBseUludGVybmFsQXR0cmlidXRlKGJhdGNoOiBSZW5kZXJCYXRjaCwgZWxlbWVudDogRWxlbWVudCwgaW50ZXJuYWxBdHRyaWJ1dGVOYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZUZyYW1lOiBSZW5kZXJUcmVlRnJhbWUgfCBudWxsKSB7XHJcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZUZyYW1lID8gYmF0Y2guZnJhbWVSZWFkZXIuYXR0cmlidXRlVmFsdWUoYXR0cmlidXRlRnJhbWUpIDogbnVsbDtcclxuXHJcbiAgICBpZiAoaW50ZXJuYWxBdHRyaWJ1dGVOYW1lLnN0YXJ0c1dpdGgoZXZlbnRTdG9wUHJvcGFnYXRpb25BdHRyaWJ1dGVOYW1lUHJlZml4KSkge1xyXG4gICAgICAvLyBTdG9wIHByb3BhZ2F0aW9uXHJcbiAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IHN0cmlwT25QcmVmaXgoaW50ZXJuYWxBdHRyaWJ1dGVOYW1lLnN1YnN0cmluZyhldmVudFN0b3BQcm9wYWdhdGlvbkF0dHJpYnV0ZU5hbWVQcmVmaXgubGVuZ3RoKSk7XHJcbiAgICAgIHRoaXMuZXZlbnREZWxlZ2F0b3Iuc2V0U3RvcFByb3BhZ2F0aW9uKGVsZW1lbnQsIGV2ZW50TmFtZSwgYXR0cmlidXRlVmFsdWUgIT09IG51bGwpO1xyXG4gICAgfSBlbHNlIGlmIChpbnRlcm5hbEF0dHJpYnV0ZU5hbWUuc3RhcnRzV2l0aChldmVudFByZXZlbnREZWZhdWx0QXR0cmlidXRlTmFtZVByZWZpeCkpIHtcclxuICAgICAgLy8gUHJldmVudCBkZWZhdWx0XHJcbiAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IHN0cmlwT25QcmVmaXgoaW50ZXJuYWxBdHRyaWJ1dGVOYW1lLnN1YnN0cmluZyhldmVudFByZXZlbnREZWZhdWx0QXR0cmlidXRlTmFtZVByZWZpeC5sZW5ndGgpKTtcclxuICAgICAgdGhpcy5ldmVudERlbGVnYXRvci5zZXRQcmV2ZW50RGVmYXVsdChlbGVtZW50LCBldmVudE5hbWUsIGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRoZSBwcmVmaXggbWFrZXMgdGhpcyBhdHRyaWJ1dGUgbmFtZSByZXNlcnZlZCwgc28gYW55IG90aGVyIHVzYWdlIGlzIGRpc2FsbG93ZWRcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBpbnRlcm5hbCBhdHRyaWJ1dGUgJyR7aW50ZXJuYWxBdHRyaWJ1dGVOYW1lfSdgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5QXBwbHlWYWx1ZVByb3BlcnR5KGJhdGNoOiBSZW5kZXJCYXRjaCwgZWxlbWVudDogRWxlbWVudCwgYXR0cmlidXRlRnJhbWU6IFJlbmRlclRyZWVGcmFtZSB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIC8vIENlcnRhaW4gZWxlbWVudHMgaGF2ZSBidWlsdC1pbiBiZWhhdmlvdXIgZm9yIHRoZWlyICd2YWx1ZScgcHJvcGVydHlcclxuICAgIGNvbnN0IGZyYW1lUmVhZGVyID0gYmF0Y2guZnJhbWVSZWFkZXI7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAndGltZScgJiYgIWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdGVwJykpIHtcclxuICAgICAgY29uc3QgdGltZVZhbHVlID0gYXR0cmlidXRlRnJhbWUgPyBmcmFtZVJlYWRlci5hdHRyaWJ1dGVWYWx1ZShhdHRyaWJ1dGVGcmFtZSkgOiBudWxsO1xyXG4gICAgICBpZiAodGltZVZhbHVlKSB7XHJcbiAgICAgICAgZWxlbWVudFsndmFsdWUnXSA9IHRpbWVWYWx1ZS5zdWJzdHJpbmcoMCwgNSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGVsZW1lbnQudGFnTmFtZSkge1xyXG4gICAgICBjYXNlICdJTlBVVCc6XHJcbiAgICAgIGNhc2UgJ1NFTEVDVCc6XHJcbiAgICAgIGNhc2UgJ1RFWFRBUkVBJzoge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlRnJhbWUgPyBmcmFtZVJlYWRlci5hdHRyaWJ1dGVWYWx1ZShhdHRyaWJ1dGVGcmFtZSkgOiBudWxsO1xyXG4gICAgICAgIChlbGVtZW50IGFzIGFueSkudmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcclxuICAgICAgICAgIC8vIDxzZWxlY3Q+IGlzIHNwZWNpYWwsIGluIHRoYXQgYW55dGhpbmcgd2Ugd3JpdGUgdG8gLnZhbHVlIHdpbGwgYmUgbG9zdCBpZiB0aGVyZVxyXG4gICAgICAgICAgLy8gaXNuJ3QgeWV0IGEgbWF0Y2hpbmcgPG9wdGlvbj4uIFRvIG1haW50YWluIHRoZSBleHBlY3RlZCBiZWhhdmlvciBubyBtYXR0ZXIgdGhlXHJcbiAgICAgICAgICAvLyBlbGVtZW50IGluc2VydGlvbi91cGRhdGUgb3JkZXIsIHByZXNlcnZlIHRoZSBkZXNpcmVkIHZhbHVlIHNlcGFyYXRlbHkgc29cclxuICAgICAgICAgIC8vIHdlIGNhbiByZWNvdmVyIGl0IHdoZW4gaW5zZXJ0aW5nIGFueSBtYXRjaGluZyA8b3B0aW9uPiBvciBhZnRlciBpbnNlcnRpbmcgYW5cclxuICAgICAgICAgIC8vIGVudGlyZSBtYXJrdXAgYmxvY2sgb2YgZGVzY2VuZGFudHMuXHJcbiAgICAgICAgICBlbGVtZW50W3NlbGVjdFZhbHVlUHJvcG5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ09QVElPTic6IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZUZyYW1lID8gZnJhbWVSZWFkZXIuYXR0cmlidXRlVmFsdWUoYXR0cmlidXRlRnJhbWUpIDogbnVsbDtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNlZSBhYm92ZSBmb3Igd2h5IHdlIGhhdmUgdGhpcyBzcGVjaWFsIGhhbmRsaW5nIGZvciA8c2VsZWN0Pi88b3B0aW9uPlxyXG4gICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIGlzIG9ubHkgb25lIG9mIHRoZSB0d28gY2FzZXMgd2hlcmUgd2Ugc2V0IHRoZSB2YWx1ZSBvbiBhIDxzZWxlY3Q+XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0RWxlbSA9IHRoaXMuZmluZENsb3Nlc3RBbmNlc3RvclNlbGVjdEVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKHNlbGVjdEVsZW0gJiYgKHNlbGVjdFZhbHVlUHJvcG5hbWUgaW4gc2VsZWN0RWxlbSkgJiYgc2VsZWN0RWxlbVtzZWxlY3RWYWx1ZVByb3BuYW1lXSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMudHJ5QXBwbHlWYWx1ZVByb3BlcnR5KGJhdGNoLCBzZWxlY3RFbGVtLCBhdHRyaWJ1dGVGcmFtZSk7XHJcbiAgICAgICAgICBkZWxldGUgc2VsZWN0RWxlbVtzZWxlY3RWYWx1ZVByb3BuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyeUFwcGx5Q2hlY2tlZFByb3BlcnR5KGJhdGNoOiBSZW5kZXJCYXRjaCwgZWxlbWVudDogRWxlbWVudCwgYXR0cmlidXRlRnJhbWU6IFJlbmRlclRyZWVGcmFtZSB8IG51bGwpIHtcclxuICAgIC8vIENlcnRhaW4gZWxlbWVudHMgaGF2ZSBidWlsdC1pbiBiZWhhdmlvdXIgZm9yIHRoZWlyICdjaGVja2VkJyBwcm9wZXJ0eVxyXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZUZyYW1lID8gYmF0Y2guZnJhbWVSZWFkZXIuYXR0cmlidXRlVmFsdWUoYXR0cmlidXRlRnJhbWUpIDogbnVsbDtcclxuICAgICAgKGVsZW1lbnQgYXMgYW55KS5jaGVja2VkID0gdmFsdWUgIT09IG51bGw7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaW5kQ2xvc2VzdEFuY2VzdG9yU2VsZWN0RWxlbWVudChlbGVtZW50OiBFbGVtZW50IHwgbnVsbCkge1xyXG4gICAgd2hpbGUgKGVsZW1lbnQpIHtcclxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zZXJ0RnJhbWVSYW5nZShiYXRjaDogUmVuZGVyQmF0Y2gsIGNvbXBvbmVudElkOiBudW1iZXIsIHBhcmVudDogTG9naWNhbEVsZW1lbnQsIGNoaWxkSW5kZXg6IG51bWJlciwgZnJhbWVzOiBBcnJheVZhbHVlczxSZW5kZXJUcmVlRnJhbWU+LCBzdGFydEluZGV4OiBudW1iZXIsIGVuZEluZGV4RXhjbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG9yaWdDaGlsZEluZGV4ID0gY2hpbGRJbmRleDtcclxuICAgIGZvciAobGV0IGluZGV4ID0gc3RhcnRJbmRleDsgaW5kZXggPCBlbmRJbmRleEV4Y2w7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZnJhbWUgPSBiYXRjaC5yZWZlcmVuY2VGcmFtZXNFbnRyeShmcmFtZXMsIGluZGV4KTtcclxuICAgICAgY29uc3QgbnVtQ2hpbGRyZW5JbnNlcnRlZCA9IHRoaXMuaW5zZXJ0RnJhbWUoYmF0Y2gsIGNvbXBvbmVudElkLCBwYXJlbnQsIGNoaWxkSW5kZXgsIGZyYW1lcywgZnJhbWUsIGluZGV4KTtcclxuICAgICAgY2hpbGRJbmRleCArPSBudW1DaGlsZHJlbkluc2VydGVkO1xyXG5cclxuICAgICAgLy8gU2tpcCBvdmVyIGFueSBkZXNjZW5kYW50cywgc2luY2UgdGhleSBhcmUgYWxyZWFkeSBkZWFsdCB3aXRoIHJlY3Vyc2l2ZWx5XHJcbiAgICAgIGluZGV4ICs9IGNvdW50RGVzY2VuZGFudEZyYW1lcyhiYXRjaCwgZnJhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoY2hpbGRJbmRleCAtIG9yaWdDaGlsZEluZGV4KTsgLy8gVG90YWwgbnVtYmVyIG9mIGNoaWxkcmVuIGluc2VydGVkXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudERlc2NyaXB0b3Ige1xyXG4gIHN0YXJ0OiBOb2RlO1xyXG4gIGVuZDogTm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudERlc2NyaXB0b3Ige1xyXG4gIGJyb3dzZXJSZW5kZXJlcklkOiBudW1iZXI7XHJcbiAgZXZlbnRIYW5kbGVySWQ6IG51bWJlcjtcclxuICBldmVudEFyZ3NUeXBlOiBFdmVudEFyZ3NUeXBlO1xyXG4gIGV2ZW50RmllbGRJbmZvOiBFdmVudEZpZWxkSW5mbyB8IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlTWFya3VwKG1hcmt1cDogc3RyaW5nLCBpc1N2ZzogYm9vbGVhbikge1xyXG4gIGlmIChpc1N2Zykge1xyXG4gICAgc2hhcmVkU3ZnRWxlbUZvclBhcnNpbmcuaW5uZXJIVE1MID0gbWFya3VwIHx8ICcgJztcclxuICAgIHJldHVybiBzaGFyZWRTdmdFbGVtRm9yUGFyc2luZztcclxuICB9IGVsc2Uge1xyXG4gICAgc2hhcmVkVGVtcGxhdGVFbGVtRm9yUGFyc2luZy5pbm5lckhUTUwgPSBtYXJrdXAgfHwgJyAnO1xyXG4gICAgcmV0dXJuIHNoYXJlZFRlbXBsYXRlRWxlbUZvclBhcnNpbmcuY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvdW50RGVzY2VuZGFudEZyYW1lcyhiYXRjaDogUmVuZGVyQmF0Y2gsIGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpOiBudW1iZXIge1xyXG4gIGNvbnN0IGZyYW1lUmVhZGVyID0gYmF0Y2guZnJhbWVSZWFkZXI7XHJcbiAgc3dpdGNoIChmcmFtZVJlYWRlci5mcmFtZVR5cGUoZnJhbWUpKSB7XHJcbiAgICAvLyBUaGUgZm9sbG93aW5nIGZyYW1lIHR5cGVzIGhhdmUgYSBzdWJ0cmVlIGxlbmd0aC4gT3RoZXIgZnJhbWVzIG1heSB1c2UgdGhhdCBtZW1vcnkgc2xvdFxyXG4gICAgLy8gdG8gbWVhbiBzb21ldGhpbmcgZWxzZSwgc28gd2UgbXVzdCBub3QgcmVhZCBpdC4gV2Ugc2hvdWxkIGNvbnNpZGVyIGhhdmluZyBub21pbmFsIHN1YnR5cGVzXHJcbiAgICAvLyBvZiBSZW5kZXJUcmVlRnJhbWVQb2ludGVyIHRoYXQgcHJldmVudCBhY2Nlc3MgdG8gbm9uLWFwcGxpY2FibGUgZmllbGRzLlxyXG4gICAgY2FzZSBGcmFtZVR5cGUuY29tcG9uZW50OlxyXG4gICAgY2FzZSBGcmFtZVR5cGUuZWxlbWVudDpcclxuICAgIGNhc2UgRnJhbWVUeXBlLnJlZ2lvbjpcclxuICAgICAgcmV0dXJuIGZyYW1lUmVhZGVyLnN1YnRyZWVMZW5ndGgoZnJhbWUpIC0gMTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiAwO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmFpc2VFdmVudChcclxuICBldmVudDogRXZlbnQsXHJcbiAgYnJvd3NlclJlbmRlcmVySWQ6IG51bWJlcixcclxuICBldmVudEhhbmRsZXJJZDogbnVtYmVyLFxyXG4gIGV2ZW50QXJnczogRXZlbnRGb3JEb3ROZXQ8VUlFdmVudEFyZ3M+LFxyXG4gIGV2ZW50RmllbGRJbmZvOiBFdmVudEZpZWxkSW5mbyB8IG51bGxcclxuKTogdm9pZCB7XHJcbiAgaWYgKHByZXZlbnREZWZhdWx0RXZlbnRzW2V2ZW50LnR5cGVdKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZXZlbnREZXNjcmlwdG9yID0ge1xyXG4gICAgYnJvd3NlclJlbmRlcmVySWQsXHJcbiAgICBldmVudEhhbmRsZXJJZCxcclxuICAgIGV2ZW50QXJnc1R5cGU6IGV2ZW50QXJncy50eXBlLFxyXG4gICAgZXZlbnRGaWVsZEluZm86IGV2ZW50RmllbGRJbmZvLFxyXG4gIH07XHJcblxyXG4gIGRpc3BhdGNoRXZlbnQoZXZlbnREZXNjcmlwdG9yLCBldmVudEFyZ3MuZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgbGV0IGNoaWxkTm9kZTogTm9kZSB8IG51bGw7XHJcbiAgd2hpbGUgKGNoaWxkTm9kZSA9IGVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGUpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJCZXR3ZWVuKHN0YXJ0OiBOb2RlLCBlbmQ6IE5vZGUpOiB2b2lkIHtcclxuICBjb25zdCBsb2dpY2FsUGFyZW50ID0gZ2V0TG9naWNhbFBhcmVudChzdGFydCBhcyB1bmtub3duIGFzIExvZ2ljYWxFbGVtZW50KTtcclxuICBpZiAoIWxvZ2ljYWxQYXJlbnQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGNsZWFyIGJldHdlZW4gbm9kZXMuIFRoZSBzdGFydCBub2RlIGRvZXMgbm90IGhhdmUgYSBsb2dpY2FsIHBhcmVudC5cIik7XHJcbiAgfVxyXG4gIGNvbnN0IGNoaWxkcmVuID0gZ2V0TG9naWNhbENoaWxkcmVuQXJyYXkobG9naWNhbFBhcmVudCk7XHJcbiAgY29uc3QgcmVtb3ZlU3RhcnQgPSBjaGlsZHJlbi5pbmRleE9mKHN0YXJ0IGFzIHVua25vd24gYXMgTG9naWNhbEVsZW1lbnQpICsgMTtcclxuICBjb25zdCBlbmRJbmRleCA9IGNoaWxkcmVuLmluZGV4T2YoZW5kIGFzIHVua25vd24gYXMgTG9naWNhbEVsZW1lbnQpO1xyXG5cclxuICAvLyBXZSByZW1vdmUgdGhlIGVuZCBjb21wb25lbnQgY29tbWVudCBmcm9tIHRoZSBET00gYXMgd2UgZG9uJ3QgbmVlZCBpdCBhZnRlciB0aGlzIHBvaW50LlxyXG4gIGZvciAobGV0IGkgPSByZW1vdmVTdGFydDsgaSA8PSBlbmRJbmRleDsgaSsrKSB7XHJcbiAgICByZW1vdmVMb2dpY2FsQ2hpbGQobG9naWNhbFBhcmVudCwgcmVtb3ZlU3RhcnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gV2Ugc2FuaXRpemUgdGhlIHN0YXJ0IGNvbW1lbnQgYnkgcmVtb3ZpbmcgYWxsIHRoZSBpbmZvcm1hdGlvbiBmcm9tIGl0IG5vdyB0aGF0IHdlIGRvbid0IG5lZWQgaXQgYW55bW9yZVxyXG4gIC8vIGFzIGl0IGFkZHMgbm9pc2UgdG8gdGhlIERPTS5cclxuICBzdGFydC50ZXh0Q29udGVudCA9ICchJztcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaXBPblByZWZpeChhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpIHtcclxuICBpZiAoYXR0cmlidXRlTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XHJcbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZS5zdWJzdHJpbmcoMik7XHJcbiAgfVxyXG5cclxuICB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBzaG91bGQgYmUgYW4gZXZlbnQgbmFtZSwgYnV0IGRvZXNuJ3Qgc3RhcnQgd2l0aCAnb24nLiBWYWx1ZTogJyR7YXR0cmlidXRlTmFtZX0nYCk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q2FwdHVyZUlkVG9FbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQsIHJlZmVyZW5jZUNhcHR1cmVJZDogc3RyaW5nKSB7XHJcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoZ2V0Q2FwdHVyZUlkQXR0cmlidXRlTmFtZShyZWZlcmVuY2VDYXB0dXJlSWQpLCAnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnRCeUNhcHR1cmVJZChyZWZlcmVuY2VDYXB0dXJlSWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHNlbGVjdG9yID0gYFske2dldENhcHR1cmVJZEF0dHJpYnV0ZU5hbWUocmVmZXJlbmNlQ2FwdHVyZUlkKX1dYDtcclxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENhcHR1cmVJZEF0dHJpYnV0ZU5hbWUocmVmZXJlbmNlQ2FwdHVyZUlkOiBzdHJpbmcpIHtcclxuICByZXR1cm4gYF9ibF8ke3JlZmVyZW5jZUNhcHR1cmVJZH1gO1xyXG59XHJcblxyXG4vLyBTdXBwb3J0IHJlY2VpdmluZyBFbGVtZW50UmVmIGluc3RhbmNlcyBhcyBhcmdzIGluIGludGVyb3AgY2FsbHNcclxuY29uc3QgZWxlbWVudFJlZktleSA9ICdfX2ludGVybmFsSWQnOyAvLyBLZWVwIGluIHN5bmMgd2l0aCBFbGVtZW50UmVmLmNzXHJcbkRvdE5ldC5hdHRhY2hSZXZpdmVyKChrZXksIHZhbHVlKSA9PiB7XHJcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoZWxlbWVudFJlZktleSkgJiYgdHlwZW9mIHZhbHVlW2VsZW1lbnRSZWZLZXldID09PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIGdldEVsZW1lbnRCeUNhcHR1cmVJZCh2YWx1ZVtlbGVtZW50UmVmS2V5XSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBFdmVudEZvckRvdE5ldCwgVUlFdmVudEFyZ3MgfSBmcm9tICcuL0V2ZW50Rm9yRG90TmV0JztcclxuaW1wb3J0IHsgRXZlbnRGaWVsZEluZm8gfSBmcm9tICcuL0V2ZW50RmllbGRJbmZvJztcclxuXHJcbmNvbnN0IG5vbkJ1YmJsaW5nRXZlbnRzID0gdG9Mb29rdXAoW1xyXG4gICdhYm9ydCcsXHJcbiAgJ2JsdXInLFxyXG4gICdjaGFuZ2UnLFxyXG4gICdlcnJvcicsXHJcbiAgJ2ZvY3VzJyxcclxuICAnbG9hZCcsXHJcbiAgJ2xvYWRlbmQnLFxyXG4gICdsb2Fkc3RhcnQnLFxyXG4gICdtb3VzZWVudGVyJyxcclxuICAnbW91c2VsZWF2ZScsXHJcbiAgJ3Byb2dyZXNzJyxcclxuICAncmVzZXQnLFxyXG4gICdzY3JvbGwnLFxyXG4gICdzdWJtaXQnLFxyXG4gICd1bmxvYWQnLFxyXG4gICdET01Ob2RlSW5zZXJ0ZWRJbnRvRG9jdW1lbnQnLFxyXG4gICdET01Ob2RlUmVtb3ZlZEZyb21Eb2N1bWVudCcsXHJcbl0pO1xyXG5cclxuY29uc3QgZGlzYWJsZWFibGVFdmVudE5hbWVzID0gdG9Mb29rdXAoWydjbGljaycsICdkYmxjbGljaycsICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnXSk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9uRXZlbnRDYWxsYmFjayB7XHJcbiAgKGV2ZW50OiBFdmVudCwgZXZlbnRIYW5kbGVySWQ6IG51bWJlciwgZXZlbnRBcmdzOiBFdmVudEZvckRvdE5ldDxVSUV2ZW50QXJncz4sIGV2ZW50RmllbGRJbmZvOiBFdmVudEZpZWxkSW5mbyB8IG51bGwpOiB2b2lkO1xyXG59XHJcblxyXG4vLyBSZXNwb25zaWJsZSBmb3IgYWRkaW5nL3JlbW92aW5nIHRoZSBldmVudEluZm8gb24gYW4gZXhwYW5kbyBwcm9wZXJ0eSBvbiBET00gZWxlbWVudHMsIGFuZFxyXG4vLyBjYWxsaW5nIGFuIEV2ZW50SW5mb1N0b3JlIHRoYXQgZGVhbHMgd2l0aCByZWdpc3RlcmluZy91bnJlZ2lzdGVyaW5nIHRoZSB1bmRlcmx5aW5nIGRlbGVnYXRlZFxyXG4vLyBldmVudCBsaXN0ZW5lcnMgYXMgcmVxdWlyZWQgKGFuZCBhbHNvIG1hcHMgYWN0dWFsIGV2ZW50cyBiYWNrIHRvIHRoZSBnaXZlbiBjYWxsYmFjaykuXHJcbmV4cG9ydCBjbGFzcyBFdmVudERlbGVnYXRvciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgbmV4dEV2ZW50RGVsZWdhdG9ySWQgPSAwO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50c0NvbGxlY3Rpb25LZXk6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBhZnRlckNsaWNrQ2FsbGJhY2tzOiAoKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgZXZlbnRJbmZvU3RvcmU6IEV2ZW50SW5mb1N0b3JlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9uRXZlbnQ6IE9uRXZlbnRDYWxsYmFjaykge1xyXG4gICAgY29uc3QgZXZlbnREZWxlZ2F0b3JJZCA9ICsrRXZlbnREZWxlZ2F0b3IubmV4dEV2ZW50RGVsZWdhdG9ySWQ7XHJcbiAgICB0aGlzLmV2ZW50c0NvbGxlY3Rpb25LZXkgPSBgX2JsYXpvckV2ZW50c18ke2V2ZW50RGVsZWdhdG9ySWR9YDtcclxuICAgIHRoaXMuZXZlbnRJbmZvU3RvcmUgPSBuZXcgRXZlbnRJbmZvU3RvcmUodGhpcy5vbkdsb2JhbEV2ZW50LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldExpc3RlbmVyKGVsZW1lbnQ6IEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXJJZDogbnVtYmVyLCByZW5kZXJpbmdDb21wb25lbnRJZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBpbmZvRm9yRWxlbWVudCA9IHRoaXMuZ2V0RXZlbnRIYW5kbGVySW5mb3NGb3JFbGVtZW50KGVsZW1lbnQsIHRydWUpITtcclxuICAgIGNvbnN0IGV4aXN0aW5nSGFuZGxlciA9IGluZm9Gb3JFbGVtZW50LmdldEhhbmRsZXIoZXZlbnROYW1lKTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdIYW5kbGVyKSB7XHJcbiAgICAgIC8vIFdlIGNhbiBjaGVhcGx5IHVwZGF0ZSB0aGUgaW5mbyBvbiB0aGUgZXhpc3Rpbmcgb2JqZWN0IGFuZCBkb24ndCBuZWVkIGFueSBvdGhlciBob3VzZWtlZXBpbmdcclxuICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgYWxzbyB0YWtlcyBjYXJlIG9mIHVwZGF0aW5nIHRoZSBldmVudEhhbmRsZXJJZCBvbiB0aGUgZXhpc3RpbmcgaGFuZGxlciBvYmplY3RcclxuICAgICAgdGhpcy5ldmVudEluZm9TdG9yZS51cGRhdGUoZXhpc3RpbmdIYW5kbGVyLmV2ZW50SGFuZGxlcklkLCBldmVudEhhbmRsZXJJZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBHbyB0aHJvdWdoIHRoZSB3aG9sZSBmbG93IHdoaWNoIG1pZ2h0IGludm9sdmUgcmVnaXN0ZXJpbmcgYSBuZXcgZ2xvYmFsIGhhbmRsZXJcclxuICAgICAgY29uc3QgbmV3SW5mbyA9IHsgZWxlbWVudCwgZXZlbnROYW1lLCBldmVudEhhbmRsZXJJZCwgcmVuZGVyaW5nQ29tcG9uZW50SWQgfTtcclxuICAgICAgdGhpcy5ldmVudEluZm9TdG9yZS5hZGQobmV3SW5mbyk7XHJcbiAgICAgIGluZm9Gb3JFbGVtZW50LnNldEhhbmRsZXIoZXZlbnROYW1lLCBuZXdJbmZvKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lcihldmVudEhhbmRsZXJJZDogbnVtYmVyKSB7XHJcbiAgICAvLyBUaGlzIG1ldGhvZCBnZXRzIGNhbGxlZCB3aGVuZXZlciB0aGUgLk5FVC1zaWRlIGNvZGUgcmVwb3J0cyB0aGF0IGEgY2VydGFpbiBldmVudCBoYW5kbGVyXHJcbiAgICAvLyBoYXMgYmVlbiBkaXNwb3NlZC4gSG93ZXZlciB3ZSB3aWxsIGFscmVhZHkgaGF2ZSBkaXNwb3NlZCB0aGUgaW5mbyBhYm91dCB0aGF0IGhhbmRsZXIgaWZcclxuICAgIC8vIHRoZSBldmVudEhhbmRsZXJJZCBmb3IgdGhlIChlbGVtZW50LGV2ZW50TmFtZSkgcGFpciB3YXMgcmVwbGFjZWQgZHVyaW5nIGRpZmYgYXBwbGljYXRpb24uXHJcbiAgICBjb25zdCBpbmZvID0gdGhpcy5ldmVudEluZm9TdG9yZS5yZW1vdmUoZXZlbnRIYW5kbGVySWQpO1xyXG4gICAgaWYgKGluZm8pIHtcclxuICAgICAgLy8gTG9va3MgbGlrZSB0aGlzIGV2ZW50IGhhbmRsZXIgd2Fzbid0IGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgLy8gUmVtb3ZlIHRoZSBhc3NvY2lhdGVkIGRhdGEgZnJvbSB0aGUgRE9NIGVsZW1lbnRcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGluZm8uZWxlbWVudDtcclxuICAgICAgY29uc3QgZWxlbWVudEV2ZW50SW5mb3MgPSB0aGlzLmdldEV2ZW50SGFuZGxlckluZm9zRm9yRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XHJcbiAgICAgIGlmIChlbGVtZW50RXZlbnRJbmZvcykge1xyXG4gICAgICAgIGVsZW1lbnRFdmVudEluZm9zLnJlbW92ZUhhbmRsZXIoaW5mby5ldmVudE5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbm90aWZ5QWZ0ZXJDbGljayhjYWxsYmFjazogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKSB7XHJcbiAgICAvLyBUaGlzIGlzIGV4dHJlbWVseSBzcGVjaWFsLWNhc2UuIEl0J3MgbmVlZGVkIHNvIHRoYXQgbmF2aWdhdGlvbiBsaW5rIGNsaWNrIGludGVyY2VwdGlvblxyXG4gICAgLy8gY2FuIGJlIHN1cmUgdG8gcnVuICphZnRlciogb3VyIHN5bnRoZXRpYyBidWJibGluZyBwcm9jZXNzLiBJZiBhIG5lZWQgYXJpc2VzLCB3ZSBjYW5cclxuICAgIC8vIGdlbmVyYWxpc2UgdGhpcywgYnV0IHJpZ2h0IG5vdyBpdCdzIGEgcHVyZWx5IGludGVybmFsIGRldGFpbC5cclxuICAgIHRoaXMuYWZ0ZXJDbGlja0NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIHRoaXMuZXZlbnRJbmZvU3RvcmUuYWRkR2xvYmFsTGlzdGVuZXIoJ2NsaWNrJyk7IC8vIEVuc3VyZSB3ZSBhbHdheXMgbGlzdGVuIGZvciB0aGlzXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U3RvcFByb3BhZ2F0aW9uKGVsZW1lbnQ6IEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgaW5mb0ZvckVsZW1lbnQgPSB0aGlzLmdldEV2ZW50SGFuZGxlckluZm9zRm9yRWxlbWVudChlbGVtZW50LCB0cnVlKSE7XHJcbiAgICBpbmZvRm9yRWxlbWVudC5zdG9wUHJvcGFnYXRpb24oZXZlbnROYW1lLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UHJldmVudERlZmF1bHQoZWxlbWVudDogRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBpbmZvRm9yRWxlbWVudCA9IHRoaXMuZ2V0RXZlbnRIYW5kbGVySW5mb3NGb3JFbGVtZW50KGVsZW1lbnQsIHRydWUpITtcclxuICAgIGluZm9Gb3JFbGVtZW50LnByZXZlbnREZWZhdWx0KGV2ZW50TmFtZSwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkdsb2JhbEV2ZW50KGV2dDogRXZlbnQpIHtcclxuICAgIGlmICghKGV2dC50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2NhbiB1cCB0aGUgZWxlbWVudCBoaWVyYXJjaHksIGxvb2tpbmcgZm9yIGFueSBtYXRjaGluZyByZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzXHJcbiAgICBsZXQgY2FuZGlkYXRlRWxlbWVudCA9IGV2dC50YXJnZXQgYXMgRWxlbWVudCB8IG51bGw7XHJcbiAgICBsZXQgZXZlbnRBcmdzOiBFdmVudEZvckRvdE5ldDxVSUV2ZW50QXJncz4gfCBudWxsID0gbnVsbDsgLy8gUG9wdWxhdGUgbGF6aWx5XHJcbiAgICBjb25zdCBldmVudElzTm9uQnViYmxpbmcgPSBub25CdWJibGluZ0V2ZW50cy5oYXNPd25Qcm9wZXJ0eShldnQudHlwZSk7XHJcbiAgICBsZXQgc3RvcFByb3BhZ2F0aW9uV2FzUmVxdWVzdGVkID0gZmFsc2U7XHJcbiAgICB3aGlsZSAoY2FuZGlkYXRlRWxlbWVudCkge1xyXG4gICAgICBjb25zdCBoYW5kbGVySW5mb3MgPSB0aGlzLmdldEV2ZW50SGFuZGxlckluZm9zRm9yRWxlbWVudChjYW5kaWRhdGVFbGVtZW50LCBmYWxzZSk7XHJcbiAgICAgIGlmIChoYW5kbGVySW5mb3MpIHtcclxuICAgICAgICBjb25zdCBoYW5kbGVySW5mbyA9IGhhbmRsZXJJbmZvcy5nZXRIYW5kbGVyKGV2dC50eXBlKTtcclxuICAgICAgICBpZiAoaGFuZGxlckluZm8gJiYgIWV2ZW50SXNEaXNhYmxlZE9uRWxlbWVudChjYW5kaWRhdGVFbGVtZW50LCBldnQudHlwZSkpIHtcclxuICAgICAgICAgIC8vIFdlIGFyZSBnb2luZyB0byByYWlzZSBhbiBldmVudCBmb3IgdGhpcyBlbGVtZW50LCBzbyBwcmVwYXJlIGluZm8gbmVlZGVkIGJ5IHRoZSAuTkVUIGNvZGVcclxuICAgICAgICAgIGlmICghZXZlbnRBcmdzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50QXJncyA9IEV2ZW50Rm9yRG90TmV0LmZyb21ET01FdmVudChldnQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGRJbmZvID0gRXZlbnRGaWVsZEluZm8uZnJvbUV2ZW50KGhhbmRsZXJJbmZvLnJlbmRlcmluZ0NvbXBvbmVudElkLCBldnQpO1xyXG4gICAgICAgICAgdGhpcy5vbkV2ZW50KGV2dCwgaGFuZGxlckluZm8uZXZlbnRIYW5kbGVySWQsIGV2ZW50QXJncywgZXZlbnRGaWVsZEluZm8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhhbmRsZXJJbmZvcy5zdG9wUHJvcGFnYXRpb24oZXZ0LnR5cGUpKSB7XHJcbiAgICAgICAgICBzdG9wUHJvcGFnYXRpb25XYXNSZXF1ZXN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhhbmRsZXJJbmZvcy5wcmV2ZW50RGVmYXVsdChldnQudHlwZSkpIHtcclxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY2FuZGlkYXRlRWxlbWVudCA9IChldmVudElzTm9uQnViYmxpbmcgfHwgc3RvcFByb3BhZ2F0aW9uV2FzUmVxdWVzdGVkKSA/IG51bGwgOiBjYW5kaWRhdGVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3BlY2lhbCBjYXNlIGZvciBuYXZpZ2F0aW9uIGludGVyY2VwdGlvblxyXG4gICAgaWYgKGV2dC50eXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgIHRoaXMuYWZ0ZXJDbGlja0NhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKGV2dCBhcyBNb3VzZUV2ZW50KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEV2ZW50SGFuZGxlckluZm9zRm9yRWxlbWVudChlbGVtZW50OiBFbGVtZW50LCBjcmVhdGVJZk5lZWRlZDogYm9vbGVhbik6IEV2ZW50SGFuZGxlckluZm9zRm9yRWxlbWVudCB8IG51bGwge1xyXG4gICAgaWYgKGVsZW1lbnQuaGFzT3duUHJvcGVydHkodGhpcy5ldmVudHNDb2xsZWN0aW9uS2V5KSkge1xyXG4gICAgICByZXR1cm4gZWxlbWVudFt0aGlzLmV2ZW50c0NvbGxlY3Rpb25LZXldO1xyXG4gICAgfSBlbHNlIGlmIChjcmVhdGVJZk5lZWRlZCkge1xyXG4gICAgICByZXR1cm4gKGVsZW1lbnRbdGhpcy5ldmVudHNDb2xsZWN0aW9uS2V5XSA9IG5ldyBFdmVudEhhbmRsZXJJbmZvc0ZvckVsZW1lbnQoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpYmxlIGZvciBhZGRpbmcgYW5kIHJlbW92aW5nIHRoZSBnbG9iYWwgbGlzdGVuZXIgd2hlbiB0aGUgbnVtYmVyIG9mIGxpc3RlbmVyc1xyXG4vLyBmb3IgYSBnaXZlbiBldmVudCBuYW1lIGNoYW5nZXMgYmV0d2VlbiB6ZXJvIGFuZCBub256ZXJvXHJcbmNsYXNzIEV2ZW50SW5mb1N0b3JlIHtcclxuICBwcml2YXRlIGluZm9zQnlFdmVudEhhbmRsZXJJZDogeyBbZXZlbnRIYW5kbGVySWQ6IG51bWJlcl06IEV2ZW50SGFuZGxlckluZm8gfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGNvdW50QnlFdmVudE5hbWU6IHsgW2V2ZW50TmFtZTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnbG9iYWxMaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcikge1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZChpbmZvOiBFdmVudEhhbmRsZXJJbmZvKSB7XHJcbiAgICBpZiAodGhpcy5pbmZvc0J5RXZlbnRIYW5kbGVySWRbaW5mby5ldmVudEhhbmRsZXJJZF0pIHtcclxuICAgICAgLy8gU2hvdWxkIG5ldmVyIGhhcHBlbiwgYnV0IHdlIHdhbnQgdG8ga25vdyBpZiBpdCBkb2VzXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXZlbnQgJHtpbmZvLmV2ZW50SGFuZGxlcklkfSBpcyBhbHJlYWR5IHRyYWNrZWRgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluZm9zQnlFdmVudEhhbmRsZXJJZFtpbmZvLmV2ZW50SGFuZGxlcklkXSA9IGluZm87XHJcblxyXG4gICAgdGhpcy5hZGRHbG9iYWxMaXN0ZW5lcihpbmZvLmV2ZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkR2xvYmFsTGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmNvdW50QnlFdmVudE5hbWUuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKSkge1xyXG4gICAgICB0aGlzLmNvdW50QnlFdmVudE5hbWVbZXZlbnROYW1lXSsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb3VudEJ5RXZlbnROYW1lW2V2ZW50TmFtZV0gPSAxO1xyXG5cclxuICAgICAgLy8gVG8gbWFrZSBkZWxlZ2F0aW9uIHdvcmsgd2l0aCBub24tYnViYmxpbmcgZXZlbnRzLCByZWdpc3RlciBhICdjYXB0dXJlJyBsaXN0ZW5lci5cclxuICAgICAgLy8gV2UgcHJlc2VydmUgdGhlIG5vbi1idWJibGluZyBiZWhhdmlvciBieSBvbmx5IGRpc3BhdGNoaW5nIHN1Y2ggZXZlbnRzIHRvIHRoZSB0YXJnZXRlZCBlbGVtZW50LlxyXG4gICAgICBjb25zdCB1c2VDYXB0dXJlID0gbm9uQnViYmxpbmdFdmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMuZ2xvYmFsTGlzdGVuZXIsIHVzZUNhcHR1cmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShvbGRFdmVudEhhbmRsZXJJZDogbnVtYmVyLCBuZXdFdmVudEhhbmRsZXJJZDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5pbmZvc0J5RXZlbnRIYW5kbGVySWQuaGFzT3duUHJvcGVydHkobmV3RXZlbnRIYW5kbGVySWQpKSB7XHJcbiAgICAgIC8vIFNob3VsZCBuZXZlciBoYXBwZW4sIGJ1dCB3ZSB3YW50IHRvIGtub3cgaWYgaXQgZG9lc1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEV2ZW50ICR7bmV3RXZlbnRIYW5kbGVySWR9IGlzIGFscmVhZHkgdHJhY2tlZGApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpbmNlIHdlJ3JlIGp1c3QgdXBkYXRpbmcgdGhlIGV2ZW50IGhhbmRsZXIgSUQsIHRoZXJlJ3Mgbm8gbmVlZCB0byB1cGRhdGUgdGhlIGdsb2JhbCBjb3VudHNcclxuICAgIGNvbnN0IGluZm8gPSB0aGlzLmluZm9zQnlFdmVudEhhbmRsZXJJZFtvbGRFdmVudEhhbmRsZXJJZF07XHJcbiAgICBkZWxldGUgdGhpcy5pbmZvc0J5RXZlbnRIYW5kbGVySWRbb2xkRXZlbnRIYW5kbGVySWRdO1xyXG4gICAgaW5mby5ldmVudEhhbmRsZXJJZCA9IG5ld0V2ZW50SGFuZGxlcklkO1xyXG4gICAgdGhpcy5pbmZvc0J5RXZlbnRIYW5kbGVySWRbbmV3RXZlbnRIYW5kbGVySWRdID0gaW5mbztcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUoZXZlbnRIYW5kbGVySWQ6IG51bWJlcik6IEV2ZW50SGFuZGxlckluZm8ge1xyXG4gICAgY29uc3QgaW5mbyA9IHRoaXMuaW5mb3NCeUV2ZW50SGFuZGxlcklkW2V2ZW50SGFuZGxlcklkXTtcclxuICAgIGlmIChpbmZvKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLmluZm9zQnlFdmVudEhhbmRsZXJJZFtldmVudEhhbmRsZXJJZF07XHJcblxyXG4gICAgICBjb25zdCBldmVudE5hbWUgPSBpbmZvLmV2ZW50TmFtZTtcclxuICAgICAgaWYgKC0tdGhpcy5jb3VudEJ5RXZlbnROYW1lW2V2ZW50TmFtZV0gPT09IDApIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5jb3VudEJ5RXZlbnROYW1lW2V2ZW50TmFtZV07XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMuZ2xvYmFsTGlzdGVuZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluZm87XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBFdmVudEhhbmRsZXJJbmZvc0ZvckVsZW1lbnQge1xyXG4gIC8vIEFsdGhvdWdoIHdlICpjb3VsZCogdHJhY2sgbXVsdGlwbGUgZXZlbnQgaGFuZGxlcnMgcGVyIChlbGVtZW50LCBldmVudE5hbWUpIHBhaXJcclxuICAvLyAoc2luY2UgdGhleSBoYXZlIGRpc3RpbmN0IGV2ZW50SGFuZGxlcklkIHZhbHVlcyksIHRoZXJlJ3Mgbm8gcG9pbnQgZG9pbmcgc28gYmVjYXVzZVxyXG4gIC8vIG91ciBwcm9ncmFtbWluZyBtb2RlbCBpcyB0aGF0IHlvdSBkZWNsYXJlIGV2ZW50IGhhbmRsZXJzIGFzIGF0dHJpYnV0ZXMuIEFuIGVsZW1lbnRcclxuICAvLyBjYW4gb25seSBoYXZlIG9uZSBhdHRyaWJ1dGUgd2l0aCBhIGdpdmVuIG5hbWUsIGhlbmNlIG9ubHkgb25lIGV2ZW50IGhhbmRsZXIgd2l0aFxyXG4gIC8vIHRoYXQgbmFtZSBhdCBhbnkgb25lIHRpbWUuXHJcbiAgLy8gU28gdG8ga2VlcCB0aGluZ3Mgc2ltcGxlLCBvbmx5IHRyYWNrIG9uZSBFdmVudEhhbmRsZXJJbmZvIHBlciAoZWxlbWVudCwgZXZlbnROYW1lKVxyXG4gIHByaXZhdGUgaGFuZGxlcnM6IHsgW2V2ZW50TmFtZTogc3RyaW5nXTogRXZlbnRIYW5kbGVySW5mbyB9ID0ge307XHJcbiAgcHJpdmF0ZSBwcmV2ZW50RGVmYXVsdEZsYWdzOiB7IFtldmVudE5hbWU6IHN0cmluZ106IGJvb2xlYW4gfSB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgc3RvcFByb3BhZ2F0aW9uRmxhZ3M6IHsgW2V2ZW50TmFtZTogc3RyaW5nXTogYm9vbGVhbiB9IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyBnZXRIYW5kbGVyKGV2ZW50TmFtZTogc3RyaW5nKTogRXZlbnRIYW5kbGVySW5mbyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKSA/IHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0SGFuZGxlcihldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVySW5mbykge1xyXG4gICAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdID0gaGFuZGxlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVIYW5kbGVyKGV2ZW50TmFtZTogc3RyaW5nKSB7XHJcbiAgICBkZWxldGUgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZXZlbnREZWZhdWx0KGV2ZW50TmFtZTogc3RyaW5nLCBzZXRWYWx1ZT86IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIGlmIChzZXRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHRGbGFncyA9IHRoaXMucHJldmVudERlZmF1bHRGbGFncyB8fCB7fTtcclxuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEZsYWdzW2V2ZW50TmFtZV0gPSBzZXRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5wcmV2ZW50RGVmYXVsdEZsYWdzID8gdGhpcy5wcmV2ZW50RGVmYXVsdEZsYWdzW2V2ZW50TmFtZV0gOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wUHJvcGFnYXRpb24oZXZlbnROYW1lOiBzdHJpbmcsIHNldFZhbHVlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHNldFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb25GbGFncyA9IHRoaXMuc3RvcFByb3BhZ2F0aW9uRmxhZ3MgfHwge307XHJcbiAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uRmxhZ3NbZXZlbnROYW1lXSA9IHNldFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnN0b3BQcm9wYWdhdGlvbkZsYWdzID8gdGhpcy5zdG9wUHJvcGFnYXRpb25GbGFnc1tldmVudE5hbWVdIDogZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgRXZlbnRIYW5kbGVySW5mbyB7XHJcbiAgZWxlbWVudDogRWxlbWVudDtcclxuICBldmVudE5hbWU6IHN0cmluZztcclxuICBldmVudEhhbmRsZXJJZDogbnVtYmVyO1xyXG5cclxuICAvLyBUaGUgY29tcG9uZW50IHdob3NlIHRyZWUgaW5jbHVkZXMgdGhlIGV2ZW50IGhhbmRsZXIgYXR0cmlidXRlIGZyYW1lLCAqbm90KiBuZWNlc3NhcmlseSB0aGVcclxuICAvLyBzYW1lIGNvbXBvbmVudCB0aGF0IHdpbGwgYmUgcmUtcmVuZGVyZWQgYWZ0ZXIgdGhlIGV2ZW50IGlzIGhhbmRsZWQgKHNpbmNlIHdlIHJlLXJlbmRlciB0aGVcclxuICAvLyBjb21wb25lbnQgdGhhdCBzdXBwbGllZCB0aGUgZGVsZWdhdGUsIG5vdCB0aGUgb25lIHRoYXQgcmVuZGVyZWQgdGhlIGV2ZW50IGhhbmRsZXIgZnJhbWUpXHJcbiAgcmVuZGVyaW5nQ29tcG9uZW50SWQ6IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Mb29rdXAoaXRlbXM6IHN0cmluZ1tdKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gIGl0ZW1zLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgcmVzdWx0W3ZhbHVlXSA9IHRydWU7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZXZlbnRJc0Rpc2FibGVkT25FbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgLy8gV2Ugd2FudCB0byByZXBsaWNhdGUgdGhlIG5vcm1hbCBET00gZXZlbnQgYmVoYXZpb3IgdGhhdCwgZm9yICdpbnRlcmFjdGl2ZScgZWxlbWVudHNcclxuICAvLyB3aXRoIGEgJ2Rpc2FibGVkJyBhdHRyaWJ1dGUsIGNlcnRhaW4gbW91c2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkXHJcbiAgcmV0dXJuIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KVxyXG4gICAgJiYgZGlzYWJsZWFibGVFdmVudE5hbWVzLmhhc093blByb3BlcnR5KGV2ZW50TmFtZSlcclxuICAgICYmIGVsZW1lbnQuZGlzYWJsZWQ7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEV2ZW50RmllbGRJbmZvIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21wb25lbnRJZDogbnVtYmVyLCBwdWJsaWMgZmllbGRWYWx1ZTogc3RyaW5nIHwgYm9vbGVhbikge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUV2ZW50KGNvbXBvbmVudElkOiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IEV2ZW50RmllbGRJbmZvIHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAoZWxlbSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGREYXRhID0gZ2V0Rm9ybUZpZWxkRGF0YShlbGVtKTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFdmVudEZpZWxkSW5mbyhjb21wb25lbnRJZCwgZmllbGREYXRhLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGhpcyBldmVudCBpc24ndCBoYXBwZW5pbmcgb24gYSBmb3JtIGZpZWxkIHRoYXQgd2UgY2FuIHJldmVyc2UtbWFwIGJhY2sgdG8gc29tZSBpbmNvbWluZyBhdHRyaWJ1dGVcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9ybUZpZWxkRGF0YShlbGVtOiBFbGVtZW50KSB7XHJcbiAgICAvLyBUaGUgbG9naWMgaW4gaGVyZSBzaG91bGQgYmUgdGhlIGludmVyc2Ugb2YgdGhlIGxvZ2ljIGluIEJyb3dzZXJSZW5kZXJlcidzIHRyeUFwcGx5U3BlY2lhbFByb3BlcnR5LlxyXG4gICAgLy8gVGhhdCBpcywgd2UncmUgZG9pbmcgdGhlIHJldmVyc2UgbWFwcGluZywgc3RhcnRpbmcgZnJvbSBhbiBIVE1MIHByb3BlcnR5IGFuZCByZWNvbnN0cnVjdGluZyB3aGljaFxyXG4gICAgLy8gXCJzcGVjaWFsXCIgYXR0cmlidXRlIHdvdWxkIGhhdmUgYmVlbiBtYXBwZWQgdG8gdGhhdCBwcm9wZXJ0eS5cclxuICAgIGlmIChlbGVtIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiAoZWxlbS50eXBlICYmIGVsZW0udHlwZS50b0xvd2VyQ2FzZSgpID09PSAnY2hlY2tib3gnKVxyXG4gICAgICAgICAgICA/IHsgdmFsdWU6IGVsZW0uY2hlY2tlZCB9XHJcbiAgICAgICAgICAgIDogeyB2YWx1ZTogZWxlbS52YWx1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbGVtIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgfHwgZWxlbSBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4geyB2YWx1ZTogZWxlbS52YWx1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBFdmVudEZvckRvdE5ldDxURGF0YSBleHRlbmRzIFVJRXZlbnRBcmdzPiB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSB0eXBlOiBFdmVudEFyZ3NUeXBlLCBwdWJsaWMgcmVhZG9ubHkgZGF0YTogVERhdGEpIHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbURPTUV2ZW50KGV2ZW50OiBFdmVudCk6IEV2ZW50Rm9yRG90TmV0PFVJRXZlbnRBcmdzPiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcclxuXHJcbiAgICAgIGNhc2UgJ2lucHV0JzpcclxuICAgICAgY2FzZSAnY2hhbmdlJzoge1xyXG5cclxuICAgICAgICBpZiAoaXNUaW1lQmFzZWRJbnB1dChlbGVtZW50KSkge1xyXG4gICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFZhbHVlID0gbm9ybWFsaXplVGltZUJhc2VkVmFsdWUoZWxlbWVudCk7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IEV2ZW50Rm9yRG90TmV0PFVJQ2hhbmdlRXZlbnRBcmdzPignY2hhbmdlJywgeyB0eXBlOiBldmVudC50eXBlLCB2YWx1ZTogbm9ybWFsaXplZFZhbHVlIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0SXNDaGVja2JveCA9IGlzQ2hlY2tib3goZWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0YXJnZXRJc0NoZWNrYm94ID8gISFlbGVtZW50WydjaGVja2VkJ10gOiBlbGVtZW50Wyd2YWx1ZSddO1xyXG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRGb3JEb3ROZXQ8VUlDaGFuZ2VFdmVudEFyZ3M+KCdjaGFuZ2UnLCB7IHR5cGU6IGV2ZW50LnR5cGUsIHZhbHVlOiBuZXdWYWx1ZSB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSAnY29weSc6XHJcbiAgICAgIGNhc2UgJ2N1dCc6XHJcbiAgICAgIGNhc2UgJ3Bhc3RlJzpcclxuICAgICAgICByZXR1cm4gbmV3IEV2ZW50Rm9yRG90TmV0PFVJQ2xpcGJvYXJkRXZlbnRBcmdzPignY2xpcGJvYXJkJywgeyB0eXBlOiBldmVudC50eXBlIH0pO1xyXG5cclxuICAgICAgY2FzZSAnZHJhZyc6XHJcbiAgICAgIGNhc2UgJ2RyYWdlbmQnOlxyXG4gICAgICBjYXNlICdkcmFnZW50ZXInOlxyXG4gICAgICBjYXNlICdkcmFnbGVhdmUnOlxyXG4gICAgICBjYXNlICdkcmFnb3Zlcic6XHJcbiAgICAgIGNhc2UgJ2RyYWdzdGFydCc6XHJcbiAgICAgIGNhc2UgJ2Ryb3AnOlxyXG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRGb3JEb3ROZXQ8VUlEcmFnRXZlbnRBcmdzPignZHJhZycsIHBhcnNlRHJhZ0V2ZW50KGV2ZW50KSk7XHJcblxyXG4gICAgICBjYXNlICdmb2N1cyc6XHJcbiAgICAgIGNhc2UgJ2JsdXInOlxyXG4gICAgICBjYXNlICdmb2N1c2luJzpcclxuICAgICAgY2FzZSAnZm9jdXNvdXQnOlxyXG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRGb3JEb3ROZXQ8VUlGb2N1c0V2ZW50QXJncz4oJ2ZvY3VzJywgeyB0eXBlOiBldmVudC50eXBlIH0pO1xyXG5cclxuICAgICAgY2FzZSAna2V5ZG93bic6XHJcbiAgICAgIGNhc2UgJ2tleXVwJzpcclxuICAgICAgY2FzZSAna2V5cHJlc3MnOlxyXG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRGb3JEb3ROZXQ8VUlLZXlib2FyZEV2ZW50QXJncz4oJ2tleWJvYXJkJywgcGFyc2VLZXlib2FyZEV2ZW50KGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpKTtcclxuXHJcbiAgICAgIGNhc2UgJ2NvbnRleHRtZW51JzpcclxuICAgICAgY2FzZSAnY2xpY2snOlxyXG4gICAgICBjYXNlICdtb3VzZW92ZXInOlxyXG4gICAgICBjYXNlICdtb3VzZW91dCc6XHJcbiAgICAgIGNhc2UgJ21vdXNlbW92ZSc6XHJcbiAgICAgIGNhc2UgJ21vdXNlZG93bic6XHJcbiAgICAgIGNhc2UgJ21vdXNldXAnOlxyXG4gICAgICBjYXNlICdkYmxjbGljayc6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEZvckRvdE5ldDxVSU1vdXNlRXZlbnRBcmdzPignbW91c2UnLCBwYXJzZU1vdXNlRXZlbnQoZXZlbnQgYXMgTW91c2VFdmVudCkpO1xyXG5cclxuICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRGb3JEb3ROZXQ8VUlFcnJvckV2ZW50QXJncz4oJ2Vycm9yJywgcGFyc2VFcnJvckV2ZW50KGV2ZW50IGFzIEVycm9yRXZlbnQpKTtcclxuXHJcbiAgICAgIGNhc2UgJ2xvYWRzdGFydCc6XHJcbiAgICAgIGNhc2UgJ3RpbWVvdXQnOlxyXG4gICAgICBjYXNlICdhYm9ydCc6XHJcbiAgICAgIGNhc2UgJ2xvYWQnOlxyXG4gICAgICBjYXNlICdsb2FkZW5kJzpcclxuICAgICAgY2FzZSAncHJvZ3Jlc3MnOlxyXG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRGb3JEb3ROZXQ8VUlQcm9ncmVzc0V2ZW50QXJncz4oJ3Byb2dyZXNzJywgcGFyc2VQcm9ncmVzc0V2ZW50KGV2ZW50IGFzIFByb2dyZXNzRXZlbnQpKTtcclxuXHJcbiAgICAgIGNhc2UgJ3RvdWNoY2FuY2VsJzpcclxuICAgICAgY2FzZSAndG91Y2hlbmQnOlxyXG4gICAgICBjYXNlICd0b3VjaG1vdmUnOlxyXG4gICAgICBjYXNlICd0b3VjaGVudGVyJzpcclxuICAgICAgY2FzZSAndG91Y2hsZWF2ZSc6XHJcbiAgICAgIGNhc2UgJ3RvdWNoc3RhcnQnOlxyXG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRGb3JEb3ROZXQ8VUlUb3VjaEV2ZW50QXJncz4oJ3RvdWNoJywgcGFyc2VUb3VjaEV2ZW50KGV2ZW50IGFzIFRvdWNoRXZlbnQpKTtcclxuXHJcbiAgICAgIGNhc2UgJ2dvdHBvaW50ZXJjYXB0dXJlJzpcclxuICAgICAgY2FzZSAnbG9zdHBvaW50ZXJjYXB0dXJlJzpcclxuICAgICAgY2FzZSAncG9pbnRlcmNhbmNlbCc6XHJcbiAgICAgIGNhc2UgJ3BvaW50ZXJkb3duJzpcclxuICAgICAgY2FzZSAncG9pbnRlcmVudGVyJzpcclxuICAgICAgY2FzZSAncG9pbnRlcmxlYXZlJzpcclxuICAgICAgY2FzZSAncG9pbnRlcm1vdmUnOlxyXG4gICAgICBjYXNlICdwb2ludGVyb3V0JzpcclxuICAgICAgY2FzZSAncG9pbnRlcm92ZXInOlxyXG4gICAgICBjYXNlICdwb2ludGVydXAnOlxyXG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRGb3JEb3ROZXQ8VUlQb2ludGVyRXZlbnRBcmdzPigncG9pbnRlcicsIHBhcnNlUG9pbnRlckV2ZW50KGV2ZW50IGFzIFBvaW50ZXJFdmVudCkpO1xyXG5cclxuICAgICAgY2FzZSAnd2hlZWwnOlxyXG4gICAgICBjYXNlICdtb3VzZXdoZWVsJzpcclxuICAgICAgICByZXR1cm4gbmV3IEV2ZW50Rm9yRG90TmV0PFVJV2hlZWxFdmVudEFyZ3M+KCd3aGVlbCcsIHBhcnNlV2hlZWxFdmVudChldmVudCBhcyBXaGVlbEV2ZW50KSk7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRGb3JEb3ROZXQ8VUlFdmVudEFyZ3M+KCd1bmtub3duJywgeyB0eXBlOiBldmVudC50eXBlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VEcmFnRXZlbnQoZXZlbnQ6IGFueSkge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5wYXJzZU1vdXNlRXZlbnQoZXZlbnQpLFxyXG4gICAgZGF0YVRyYW5zZmVyOiBldmVudC5kYXRhVHJhbnNmZXIsXHJcblxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlV2hlZWxFdmVudChldmVudDogV2hlZWxFdmVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5wYXJzZU1vdXNlRXZlbnQoZXZlbnQpLFxyXG4gICAgZGVsdGFYOiBldmVudC5kZWx0YVgsXHJcbiAgICBkZWx0YVk6IGV2ZW50LmRlbHRhWSxcclxuICAgIGRlbHRhWjogZXZlbnQuZGVsdGFaLFxyXG4gICAgZGVsdGFNb2RlOiBldmVudC5kZWx0YU1vZGUsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VFcnJvckV2ZW50KGV2ZW50OiBFcnJvckV2ZW50KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IGV2ZW50LnR5cGUsXHJcbiAgICBtZXNzYWdlOiBldmVudC5tZXNzYWdlLFxyXG4gICAgZmlsZW5hbWU6IGV2ZW50LmZpbGVuYW1lLFxyXG4gICAgbGluZW5vOiBldmVudC5saW5lbm8sXHJcbiAgICBjb2xubzogZXZlbnQuY29sbm8sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VQcm9ncmVzc0V2ZW50KGV2ZW50OiBQcm9ncmVzc0V2ZW50KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IGV2ZW50LnR5cGUsXHJcbiAgICBsZW5ndGhDb21wdXRhYmxlOiBldmVudC5sZW5ndGhDb21wdXRhYmxlLFxyXG4gICAgbG9hZGVkOiBldmVudC5sb2FkZWQsXHJcbiAgICB0b3RhbDogZXZlbnQudG90YWwsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VUb3VjaEV2ZW50KGV2ZW50OiBUb3VjaEV2ZW50KSB7XHJcblxyXG4gIGZ1bmN0aW9uIHBhcnNlVG91Y2godG91Y2hMaXN0OiBUb3VjaExpc3QpIHtcclxuICAgIGNvbnN0IHRvdWNoZXM6IFVJVG91Y2hQb2ludFtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3VjaExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdG91Y2ggPSB0b3VjaExpc3RbaV07XHJcbiAgICAgIHRvdWNoZXMucHVzaCh7XHJcbiAgICAgICAgaWRlbnRpZmllcjogdG91Y2guaWRlbnRpZmllcixcclxuICAgICAgICBjbGllbnRYOiB0b3VjaC5jbGllbnRYLFxyXG4gICAgICAgIGNsaWVudFk6IHRvdWNoLmNsaWVudFksXHJcbiAgICAgICAgc2NyZWVuWDogdG91Y2guc2NyZWVuWCxcclxuICAgICAgICBzY3JlZW5ZOiB0b3VjaC5zY3JlZW5ZLFxyXG4gICAgICAgIHBhZ2VYOiB0b3VjaC5wYWdlWCxcclxuICAgICAgICBwYWdlWTogdG91Y2gucGFnZVksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvdWNoZXM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogZXZlbnQudHlwZSxcclxuICAgIGRldGFpbDogZXZlbnQuZGV0YWlsLFxyXG4gICAgdG91Y2hlczogcGFyc2VUb3VjaChldmVudC50b3VjaGVzKSxcclxuICAgIHRhcmdldFRvdWNoZXM6IHBhcnNlVG91Y2goZXZlbnQudGFyZ2V0VG91Y2hlcyksXHJcbiAgICBjaGFuZ2VkVG91Y2hlczogcGFyc2VUb3VjaChldmVudC5jaGFuZ2VkVG91Y2hlcyksXHJcbiAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxyXG4gICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxyXG4gICAgYWx0S2V5OiBldmVudC5hbHRLZXksXHJcbiAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlS2V5Ym9hcmRFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBldmVudC50eXBlLFxyXG4gICAga2V5OiBldmVudC5rZXksXHJcbiAgICBjb2RlOiBldmVudC5jb2RlLFxyXG4gICAgbG9jYXRpb246IGV2ZW50LmxvY2F0aW9uLFxyXG4gICAgcmVwZWF0OiBldmVudC5yZXBlYXQsXHJcbiAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxyXG4gICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxyXG4gICAgYWx0S2V5OiBldmVudC5hbHRLZXksXHJcbiAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlUG9pbnRlckV2ZW50KGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4ucGFyc2VNb3VzZUV2ZW50KGV2ZW50KSxcclxuICAgIHBvaW50ZXJJZDogZXZlbnQucG9pbnRlcklkLFxyXG4gICAgd2lkdGg6IGV2ZW50LndpZHRoLFxyXG4gICAgaGVpZ2h0OiBldmVudC5oZWlnaHQsXHJcbiAgICBwcmVzc3VyZTogZXZlbnQucHJlc3N1cmUsXHJcbiAgICB0aWx0WDogZXZlbnQudGlsdFgsXHJcbiAgICB0aWx0WTogZXZlbnQudGlsdFksXHJcbiAgICBwb2ludGVyVHlwZTogZXZlbnQucG9pbnRlclR5cGUsXHJcbiAgICBpc1ByaW1hcnk6IGV2ZW50LmlzUHJpbWFyeSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZU1vdXNlRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogZXZlbnQudHlwZSxcclxuICAgIGRldGFpbDogZXZlbnQuZGV0YWlsLFxyXG4gICAgc2NyZWVuWDogZXZlbnQuc2NyZWVuWCxcclxuICAgIHNjcmVlblk6IGV2ZW50LnNjcmVlblksXHJcbiAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxyXG4gICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcclxuICAgIGJ1dHRvbjogZXZlbnQuYnV0dG9uLFxyXG4gICAgYnV0dG9uczogZXZlbnQuYnV0dG9ucyxcclxuICAgIGN0cmxLZXk6IGV2ZW50LmN0cmxLZXksXHJcbiAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXksXHJcbiAgICBhbHRLZXk6IGV2ZW50LmFsdEtleSxcclxuICAgIG1ldGFLZXk6IGV2ZW50Lm1ldGFLZXksXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDaGVja2JveChlbGVtZW50OiBFbGVtZW50IHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAhIWVsZW1lbnQgJiYgZWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICdjaGVja2JveCc7XHJcbn1cclxuXHJcbmNvbnN0IHRpbWVCYXNlZElucHV0cyA9IFtcclxuICAnZGF0ZScsXHJcbiAgJ2RhdGV0aW1lLWxvY2FsJyxcclxuICAnbW9udGgnLFxyXG4gICd0aW1lJyxcclxuICAnd2VlaycsXHJcbl07XHJcblxyXG5mdW5jdGlvbiBpc1RpbWVCYXNlZElucHV0KGVsZW1lbnQ6IEVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gIHJldHVybiB0aW1lQmFzZWRJbnB1dHMuaW5kZXhPZihlbGVtZW50LmdldEF0dHJpYnV0ZSgndHlwZScpISkgIT09IC0xO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVUaW1lQmFzZWRWYWx1ZShlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50KTogc3RyaW5nIHtcclxuICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XHJcbiAgY29uc3QgdHlwZSA9IGVsZW1lbnQudHlwZTtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgY2FzZSAnZGF0ZXRpbWUtbG9jYWwnOlxyXG4gICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICBjYXNlICd0aW1lJzpcclxuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gNSA/IHZhbHVlICsgJzowMCcgOiB2YWx1ZTsgLy8gQ29udmVydCBoaDptbSB0byBoaDptbTowMFxyXG4gICAgY2FzZSAnd2Vlayc6XHJcbiAgICAgIC8vIEZvciBub3cgd2UgYXJlIG5vdCBnb2luZyB0byBub3JtYWxpemUgaW5wdXQgdHlwZSB3ZWVrIGFzIGl0IGlzIG5vdCB0cml2aWFsXHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBlbGVtZW50IHR5cGUgJyR7dHlwZX0nLmApO1xyXG59XHJcblxyXG4vLyBUaGUgZm9sbG93aW5nIGludGVyZmFjZXMgbXVzdCBiZSBrZXB0IGluIHN5bmMgd2l0aCB0aGUgVUlFdmVudEFyZ3MgQyMgY2xhc3Nlc1xyXG5cclxuZXhwb3J0IHR5cGUgRXZlbnRBcmdzVHlwZSA9ICdjaGFuZ2UnIHwgJ2NsaXBib2FyZCcgfCAnZHJhZycgfCAnZXJyb3InIHwgJ2ZvY3VzJyB8ICdrZXlib2FyZCcgfCAnbW91c2UnIHwgJ3BvaW50ZXInIHwgJ3Byb2dyZXNzJyB8ICd0b3VjaCcgfCAndW5rbm93bicgfCAnd2hlZWwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVSUV2ZW50QXJncyB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVUlDaGFuZ2VFdmVudEFyZ3MgZXh0ZW5kcyBVSUV2ZW50QXJncyB7XHJcbiAgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBVSUNsaXBib2FyZEV2ZW50QXJncyBleHRlbmRzIFVJRXZlbnRBcmdzIHtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVJRHJhZ0V2ZW50QXJncyBleHRlbmRzIFVJRXZlbnRBcmdzIHtcclxuICBkZXRhaWw6IG51bWJlcjtcclxuICBkYXRhVHJhbnNmZXI6IFVJRGF0YVRyYW5zZmVyO1xyXG4gIHNjcmVlblg6IG51bWJlcjtcclxuICBzY3JlZW5ZOiBudW1iZXI7XHJcbiAgY2xpZW50WDogbnVtYmVyO1xyXG4gIGNsaWVudFk6IG51bWJlcjtcclxuICBidXR0b246IG51bWJlcjtcclxuICBidXR0b25zOiBudW1iZXI7XHJcbiAgY3RybEtleTogYm9vbGVhbjtcclxuICBzaGlmdEtleTogYm9vbGVhbjtcclxuICBhbHRLZXk6IGJvb2xlYW47XHJcbiAgbWV0YUtleTogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVJRGF0YVRyYW5zZmVyIHtcclxuICBkcm9wRWZmZWN0OiBzdHJpbmc7XHJcbiAgZWZmZWN0QWxsb3dlZDogc3RyaW5nO1xyXG4gIGZpbGVzOiBzdHJpbmdbXTtcclxuICBpdGVtczogVUlEYXRhVHJhbnNmZXJJdGVtW107XHJcbiAgdHlwZXM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVUlEYXRhVHJhbnNmZXJJdGVtIHtcclxuICBraW5kOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVUlFcnJvckV2ZW50QXJncyBleHRlbmRzIFVJRXZlbnRBcmdzIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZmlsZW5hbWU6IHN0cmluZztcclxuICBsaW5lbm86IG51bWJlcjtcclxuICBjb2xubzogbnVtYmVyO1xyXG5cclxuICAvLyBvbWl0dGluZyAnZXJyb3InIGhlcmUgc2luY2Ugd2UnZCBoYXZlIHRvIHNlcmlhbGl6ZSBpdCwgYW5kIGl0J3Mgbm90IGNsZWFyIHdlIHdpbGwgd2FudCB0b1xyXG4gIC8vIGRvIHRoYXQuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FcnJvckV2ZW50XHJcbn1cclxuXHJcbmludGVyZmFjZSBVSUZvY3VzRXZlbnRBcmdzIGV4dGVuZHMgVUlFdmVudEFyZ3Mge1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVUlLZXlib2FyZEV2ZW50QXJncyBleHRlbmRzIFVJRXZlbnRBcmdzIHtcclxuICBrZXk6IHN0cmluZztcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IG51bWJlcjtcclxuICByZXBlYXQ6IGJvb2xlYW47XHJcbiAgY3RybEtleTogYm9vbGVhbjtcclxuICBzaGlmdEtleTogYm9vbGVhbjtcclxuICBhbHRLZXk6IGJvb2xlYW47XHJcbiAgbWV0YUtleTogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVJTW91c2VFdmVudEFyZ3MgZXh0ZW5kcyBVSUV2ZW50QXJncyB7XHJcbiAgZGV0YWlsOiBudW1iZXI7XHJcbiAgc2NyZWVuWDogbnVtYmVyO1xyXG4gIHNjcmVlblk6IG51bWJlcjtcclxuICBjbGllbnRYOiBudW1iZXI7XHJcbiAgY2xpZW50WTogbnVtYmVyO1xyXG4gIGJ1dHRvbjogbnVtYmVyO1xyXG4gIGJ1dHRvbnM6IG51bWJlcjtcclxuICBjdHJsS2V5OiBib29sZWFuO1xyXG4gIHNoaWZ0S2V5OiBib29sZWFuO1xyXG4gIGFsdEtleTogYm9vbGVhbjtcclxuICBtZXRhS2V5OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVUlQb2ludGVyRXZlbnRBcmdzIGV4dGVuZHMgVUlNb3VzZUV2ZW50QXJncyB7XHJcbiAgcG9pbnRlcklkOiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBwcmVzc3VyZTogbnVtYmVyO1xyXG4gIHRpbHRYOiBudW1iZXI7XHJcbiAgdGlsdFk6IG51bWJlcjtcclxuICBwb2ludGVyVHlwZTogc3RyaW5nO1xyXG4gIGlzUHJpbWFyeTogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVJUHJvZ3Jlc3NFdmVudEFyZ3MgZXh0ZW5kcyBVSUV2ZW50QXJncyB7XHJcbiAgbGVuZ3RoQ29tcHV0YWJsZTogYm9vbGVhbjtcclxuICBsb2FkZWQ6IG51bWJlcjtcclxuICB0b3RhbDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVUlUb3VjaEV2ZW50QXJncyBleHRlbmRzIFVJRXZlbnRBcmdzIHtcclxuICBkZXRhaWw6IG51bWJlcjtcclxuICB0b3VjaGVzOiBVSVRvdWNoUG9pbnRbXTtcclxuICB0YXJnZXRUb3VjaGVzOiBVSVRvdWNoUG9pbnRbXTtcclxuICBjaGFuZ2VkVG91Y2hlczogVUlUb3VjaFBvaW50W107XHJcbiAgY3RybEtleTogYm9vbGVhbjtcclxuICBzaGlmdEtleTogYm9vbGVhbjtcclxuICBhbHRLZXk6IGJvb2xlYW47XHJcbiAgbWV0YUtleTogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVJVG91Y2hQb2ludCB7XHJcbiAgaWRlbnRpZmllcjogbnVtYmVyO1xyXG4gIHNjcmVlblg6IG51bWJlcjtcclxuICBzY3JlZW5ZOiBudW1iZXI7XHJcbiAgY2xpZW50WDogbnVtYmVyO1xyXG4gIGNsaWVudFk6IG51bWJlcjtcclxuICBwYWdlWDogbnVtYmVyO1xyXG4gIHBhZ2VZOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBVSVdoZWVsRXZlbnRBcmdzIGV4dGVuZHMgVUlNb3VzZUV2ZW50QXJncyB7XHJcbiAgZGVsdGFYOiBudW1iZXI7XHJcbiAgZGVsdGFZOiBudW1iZXI7XHJcbiAgZGVsdGFaOiBudW1iZXI7XHJcbiAgZGVsdGFNb2RlOiBudW1iZXI7XHJcbn1cclxuIiwiLypcclxuICBBIExvZ2ljYWxFbGVtZW50IHBsYXlzIHRoZSBzYW1lIHJvbGUgYXMgYW4gRWxlbWVudCBpbnN0YW5jZSBmcm9tIHRoZSBwb2ludCBvZiB2aWV3IG9mIHRoZVxyXG4gIEFQSSBjb25zdW1lci4gSW5zZXJ0aW5nIGFuZCByZW1vdmluZyBsb2dpY2FsIGVsZW1lbnRzIHVwZGF0ZXMgdGhlIGJyb3dzZXIgRE9NIGp1c3QgdGhlIHNhbWUuXHJcblxyXG4gIFRoZSBkaWZmZXJlbmNlIGlzIHRoYXQsIHVubGlrZSByZWd1bGFyIERPTSBtdXRhdGlvbiBBUElzLCB0aGUgTG9naWNhbEVsZW1lbnQgQVBJcyBkb24ndCB1c2VcclxuICB0aGUgdW5kZXJseWluZyBET00gc3RydWN0dXJlIGFzIHRoZSBkYXRhIHN0b3JhZ2UgZm9yIHRoZSBlbGVtZW50IGhpZXJhcmNoeS4gSW5zdGVhZCwgdGhlXHJcbiAgTG9naWNhbEVsZW1lbnQgQVBJcyB0YWtlIGNhcmUgb2YgdHJhY2tpbmcgaGllcmFyY2hpY2FsIHJlbGF0aW9uc2hpcHMgc2VwYXJhdGVseS4gVGhlIHBvaW50XHJcbiAgb2YgdGhpcyBpcyB0byBwZXJtaXQgYSBsb2dpY2FsIHRyZWUgc3RydWN0dXJlIGluIHdoaWNoIHBhcmVudC9jaGlsZCByZWxhdGlvbnNoaXBzIGRvbid0XHJcbiAgaGF2ZSB0byBiZSBtYXRlcmlhbGl6ZWQgaW4gdGVybXMgb2YgRE9NIGVsZW1lbnQgcGFyZW50L2NoaWxkIHJlbGF0aW9uc2hpcHMuIEFuZCB0aGUgcmVhc29uXHJcbiAgd2h5IHdlIHdhbnQgdGhhdCBpcyBzbyB0aGF0IGhpZXJhcmNoaWVzIG9mIEJsYXpvciBjb21wb25lbnRzIGNhbiBiZSB0cmFja2VkIGV2ZW4gd2hlbiB0aG9zZVxyXG4gIGNvbXBvbmVudHMnIHJlbmRlciBvdXRwdXQgbmVlZCBub3QgYmUgYSBzaW5nbGUgbGl0ZXJhbCBET00gZWxlbWVudC5cclxuXHJcbiAgQ29uc3VtZXJzIG9mIHRoZSBBUEkgZG9uJ3QgbmVlZCB0byBrbm93IGFib3V0IHRoZSBpbXBsZW1lbnRhdGlvbiwgYnV0IGhvdyBpdCdzIGRvbmUgaXM6XHJcbiAgLSBFYWNoIExvZ2ljYWxFbGVtZW50IGlzIG1hdGVyaWFsaXplZCBpbiB0aGUgRE9NIGFzIGVpdGhlcjpcclxuICAgIC0gQSBOb2RlIGluc3RhbmNlLCBmb3IgYWN0dWFsIE5vZGUgaW5zdGFuY2VzIGluc2VydGVkIHVzaW5nICdpbnNlcnRMb2dpY2FsQ2hpbGQnIG9yXHJcbiAgICAgIGZvciBFbGVtZW50IGluc3RhbmNlcyBwcm9tb3RlZCB0byBMb2dpY2FsRWxlbWVudCB2aWEgJ3RvTG9naWNhbEVsZW1lbnQnXHJcbiAgICAtIEEgQ29tbWVudCBpbnN0YW5jZSwgZm9yICdsb2dpY2FsIGNvbnRhaW5lcicgaW5zdGFuY2VzIGluc2VydGVkIHVzaW5nICdjcmVhdGVBbmRJbnNlcnRMb2dpY2FsQ29udGFpbmVyJ1xyXG4gIC0gVGhlbiwgb24gdGhhdCBpbnN0YW5jZSAoaS5lLiwgdGhlIE5vZGUgb3IgQ29tbWVudCksIHdlIHN0b3JlIGFuIGFycmF5IG9mICdsb2dpY2FsIGNoaWxkcmVuJ1xyXG4gICAgaW5zdGFuY2VzLCBlLmcuLFxyXG4gICAgICBbZmlyc3RDaGlsZCwgc2Vjb25kQ2hpbGQsIHRoaXJkQ2hpbGQsIC4uLl1cclxuICAgIC4uLiBwbHVzIHdlIHN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSAnbG9naWNhbCBwYXJlbnQnIChpZiBhbnkpXHJcbiAgLSBUaGUgJ2xvZ2ljYWwgY2hpbGRyZW4nIGFycmF5IG1lYW5zIHdlIGNhbiBsb29rIHVwIGluIE8oMSk6XHJcbiAgICAtIFRoZSBudW1iZXIgb2YgbG9naWNhbCBjaGlsZHJlbiAobm90IGN1cnJlbnRseSBpbXBsZW1lbnRlZCBiZWNhdXNlIG5vdCByZXF1aXJlZCwgYnV0IHRyaXZpYWwpXHJcbiAgICAtIFRoZSBsb2dpY2FsIGNoaWxkIGF0IGFueSBnaXZlbiBpbmRleFxyXG4gIC0gV2hlbmV2ZXIgYSBsb2dpY2FsIGNoaWxkIGlzIGFkZGVkIG9yIHJlbW92ZWQsIHdlIHVwZGF0ZSB0aGUgcGFyZW50J3MgYXJyYXkgb2YgbG9naWNhbCBjaGlsZHJlblxyXG4qL1xyXG5cclxuY29uc3QgbG9naWNhbENoaWxkcmVuUHJvcG5hbWUgPSBjcmVhdGVTeW1ib2xPckZhbGxiYWNrKCdfYmxhem9yTG9naWNhbENoaWxkcmVuJyk7XHJcbmNvbnN0IGxvZ2ljYWxQYXJlbnRQcm9wbmFtZSA9IGNyZWF0ZVN5bWJvbE9yRmFsbGJhY2soJ19ibGF6b3JMb2dpY2FsUGFyZW50Jyk7XHJcbmNvbnN0IGxvZ2ljYWxFbmRTaWJsaW5nUHJvcG5hbWUgPSBjcmVhdGVTeW1ib2xPckZhbGxiYWNrKCdfYmxhem9yTG9naWNhbEVuZCcpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvTG9naWNhbFJvb3RDb21tZW50RWxlbWVudChzdGFydDogQ29tbWVudCwgZW5kOiBDb21tZW50KTogTG9naWNhbEVsZW1lbnQge1xyXG4gIC8vIE5vdyB0aGF0IHdlIHN1cHBvcnQgc3RhcnQvZW5kIGNvbW1lbnRzIGFzIGNvbXBvbmVudCBkZWxpbWl0ZXJzIHdlIGFyZSBnb2luZyB0byBiZSBzZXR0aW5nIHVwXHJcbiAgLy8gYWRkaW5nIHRoZSBjb21wb25lbnRzIHJlbmRlcmVkIG91dHB1dCBhcyBzaWJsaW5ncyBvZiB0aGUgc3RhcnQvZW5kIHRhZ3MgKGJldHdlZW4pLlxyXG4gIC8vIEZvciB0aGF0IHRvIHdvcmssIHdlIG5lZWQgdG8gYXBwcm9wcmlhdGVseSBjb25maWd1cmUgdGhlIHBhcmVudCBlbGVtZW50IHRvIGJlIGEgbG9naWNhbCBlbGVtZW50XHJcbiAgLy8gd2l0aCBhbGwgdGhlaXIgY2hpbGRyZW4gYmVpbmcgdGhlIGNoaWxkIGVsZW1lbnRzLlxyXG4gIC8vIEZvciBleGFtcGxlLCBpbWFnaW5lIHlvdSBoYXZlXHJcbiAgLy8gPGFwcD5cclxuICAvLyA8ZGl2PjxwPlN0YXRpYyBjb250ZW50PC9wPjwvZGl2PlxyXG4gIC8vIDwhLS0gc3RhcnQgY29tcG9uZW50XHJcbiAgLy8gPCEtLSBlbmQgY29tcG9uZW50XHJcbiAgLy8gPGZvb3Rlcj5Tb21lIG90aGVyIGNvbnRlbnQ8L2Zvb3Rlcj5cclxuICAvLyA8YXBwPlxyXG4gIC8vIFdlIHdhbnQgdGhlIHBhcmVudCBlbGVtZW50IHRvIGJlIHNvbWV0aGluZyBsaWtlXHJcbiAgLy8gKmFwcFxyXG4gIC8vIHwtICpkaXZcclxuICAvLyB8LSAqY29tcG9uZW50XHJcbiAgLy8gfC0gKmZvb3RlclxyXG4gIGlmICghc3RhcnQucGFyZW50Tm9kZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBDb21tZW50IG5vdCBjb25uZWN0ZWQgdG8gdGhlIERPTSAke3N0YXJ0LnRleHRDb250ZW50fWApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyZW50ID0gc3RhcnQucGFyZW50Tm9kZTtcclxuICBjb25zdCBwYXJlbnRMb2dpY2FsRWxlbWVudCA9IHRvTG9naWNhbEVsZW1lbnQocGFyZW50LCAvKiBhbGxvdyBleGlzdGluZyBjb250ZW50cyAqLyB0cnVlKTtcclxuICBjb25zdCBjaGlsZHJlbiA9IGdldExvZ2ljYWxDaGlsZHJlbkFycmF5KHBhcmVudExvZ2ljYWxFbGVtZW50KTtcclxuICBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKS5mb3JFYWNoKG4gPT4gY2hpbGRyZW4ucHVzaChuIGFzIHVua25vd24gYXMgTG9naWNhbEVsZW1lbnQpKTtcclxuICBzdGFydFtsb2dpY2FsUGFyZW50UHJvcG5hbWVdID0gcGFyZW50TG9naWNhbEVsZW1lbnQ7XHJcbiAgLy8gV2UgbWlnaHQgbm90IGhhdmUgYW4gZW5kIGNvbW1lbnQgaW4gdGhlIGNhc2Ugb2Ygbm9uLXByZXJlbmRlcmVkIGNvbXBvbmVudHMuXHJcbiAgaWYgKGVuZCkge1xyXG4gICAgc3RhcnRbbG9naWNhbEVuZFNpYmxpbmdQcm9wbmFtZV0gPSBlbmQ7XHJcbiAgICB0b0xvZ2ljYWxFbGVtZW50KGVuZCwgLyogYWxsb3dFeGlzdGluZ2NvbnRlbnRzICovIHRydWUpO1xyXG4gIH1cclxuICByZXR1cm4gdG9Mb2dpY2FsRWxlbWVudChzdGFydCwgLyogYWxsb3dFeGlzdGluZ0NvbnRlbnRzICovIHRydWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Mb2dpY2FsRWxlbWVudChlbGVtZW50OiBOb2RlLCBhbGxvd0V4aXN0aW5nQ29udGVudHM/OiBib29sZWFuKTogTG9naWNhbEVsZW1lbnQge1xyXG4gIC8vIE5vcm1hbGx5IGl0J3MgZ29vZCB0byBhc3NlcnQgdGhhdCB0aGUgZWxlbWVudCBoYXMgc3RhcnRlZCBlbXB0eSwgYmVjYXVzZSB0aGF0J3MgdGhlIHVzdWFsXHJcbiAgLy8gc2l0dWF0aW9uIGFuZCB3ZSBwcm9iYWJseSBoYXZlIGEgYnVnIGlmIGl0J3Mgbm90LiBCdXQgZm9yIHRoZSBlbGVtZW50IHRoYXQgY29udGFpbiBwcmVyZW5kZXJlZFxyXG4gIC8vIHJvb3QgY29tcG9uZW50cywgd2Ugd2FudCB0byBsZXQgdGhlbSBrZWVwIHRoZWlyIGNvbnRlbnQgdW50aWwgd2UgcmVwbGFjZSBpdC5cclxuICBpZiAoZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDAgJiYgIWFsbG93RXhpc3RpbmdDb250ZW50cykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOZXcgbG9naWNhbCBlbGVtZW50cyBtdXN0IHN0YXJ0IGVtcHR5LCBvciBhbGxvd0V4aXN0aW5nQ29udGVudHMgbXVzdCBiZSB0cnVlJyk7XHJcbiAgfVxyXG5cclxuICBlbGVtZW50W2xvZ2ljYWxDaGlsZHJlblByb3BuYW1lXSA9IFtdO1xyXG4gIHJldHVybiBlbGVtZW50IGFzIHVua25vd24gYXMgTG9naWNhbEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbmRJbnNlcnRMb2dpY2FsQ29udGFpbmVyKHBhcmVudDogTG9naWNhbEVsZW1lbnQsIGNoaWxkSW5kZXg6IG51bWJlcik6IExvZ2ljYWxFbGVtZW50IHtcclxuICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnIScpO1xyXG4gIGluc2VydExvZ2ljYWxDaGlsZChjb250YWluZXJFbGVtZW50LCBwYXJlbnQsIGNoaWxkSW5kZXgpO1xyXG4gIHJldHVybiBjb250YWluZXJFbGVtZW50IGFzIGFueSBhcyBMb2dpY2FsRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydExvZ2ljYWxDaGlsZChjaGlsZDogTm9kZSwgcGFyZW50OiBMb2dpY2FsRWxlbWVudCwgY2hpbGRJbmRleDogbnVtYmVyKSB7XHJcbiAgY29uc3QgY2hpbGRBc0xvZ2ljYWxFbGVtZW50ID0gY2hpbGQgYXMgYW55IGFzIExvZ2ljYWxFbGVtZW50O1xyXG4gIGlmIChjaGlsZCBpbnN0YW5jZW9mIENvbW1lbnQpIHtcclxuICAgIGNvbnN0IGV4aXN0aW5nR3JhbmRjaGlsZHJlbiA9IGdldExvZ2ljYWxDaGlsZHJlbkFycmF5KGNoaWxkQXNMb2dpY2FsRWxlbWVudCk7XHJcbiAgICBpZiAoZXhpc3RpbmdHcmFuZGNoaWxkcmVuICYmIGdldExvZ2ljYWxDaGlsZHJlbkFycmF5KGNoaWxkQXNMb2dpY2FsRWxlbWVudCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBUaGVyZSdzIG5vdGhpbmcgdG8gc3RvcCB1cyBpbXBsZW1lbnRpbmcgc3VwcG9ydCBmb3IgdGhpcyBzY2VuYXJpbywgYW5kIGl0J3Mgbm90IGRpZmZpY3VsdFxyXG4gICAgICAvLyAoYWZ0ZXIgaW5zZXJ0aW5nICdjaGlsZCcgaXRzZWxmLCBhbHNvIGl0ZXJhdGUgdGhyb3VnaCBpdHMgbG9naWNhbCBjaGlsZHJlbiBhbmQgcGh5c2ljYWxseVxyXG4gICAgICAvLyBwdXQgdGhlbSBhcyBmb2xsb3dpbmctc2libGluZ3MgaW4gdGhlIERPTSkuIEhvd2V2ZXIgdGhlcmUncyBubyBzY2VuYXJpbyB0aGF0IHJlcXVpcmVzIGl0XHJcbiAgICAgIC8vIHByZXNlbnRseSwgc28gaWYgd2UgZGlkIGltcGxlbWVudCBpdCB0aGVyZSdkIGJlIG5vIGdvb2Qgd2F5IHRvIGhhdmUgdGVzdHMgZm9yIGl0LlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZDogaW5zZXJ0aW5nIG5vbi1lbXB0eSBsb2dpY2FsIGNvbnRhaW5lcicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGdldExvZ2ljYWxQYXJlbnQoY2hpbGRBc0xvZ2ljYWxFbGVtZW50KSkge1xyXG4gICAgLy8gTGlrZXdpc2UsIHdlIGNvdWxkIGVhc2lseSBzdXBwb3J0IHRoaXMgc2NlbmFyaW8gdG9vIChpbiB0aGlzICdpZicgYmxvY2ssIGp1c3Qgc3BsaWNlXHJcbiAgICAvLyBvdXQgJ2NoaWxkJyBmcm9tIHRoZSBsb2dpY2FsIGNoaWxkcmVuIGFycmF5IG9mIGl0cyBwcmV2aW91cyBsb2dpY2FsIHBhcmVudCBieSB1c2luZ1xyXG4gICAgLy8gQXJyYXkucHJvdG90eXBlLmluZGV4T2YgdG8gZGV0ZXJtaW5lIGl0cyBwcmV2aW91cyBzaWJsaW5nIGluZGV4KS5cclxuICAgIC8vIEJ1dCBhZ2Fpbiwgc2luY2UgdGhlcmUncyBub3QgY3VycmVudGx5IGFueSBzY2VuYXJpbyB0aGF0IHdvdWxkIHVzZSBpdCwgd2Ugd291bGQgbm90XHJcbiAgICAvLyBoYXZlIGFueSB0ZXN0IGNvdmVyYWdlIGZvciBzdWNoIGFuIGltcGxlbWVudGF0aW9uLlxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQ6IG1vdmluZyBleGlzdGluZyBsb2dpY2FsIGNoaWxkcmVuJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdTaWJsaW5ncyA9IGdldExvZ2ljYWxDaGlsZHJlbkFycmF5KHBhcmVudCk7XHJcbiAgaWYgKGNoaWxkSW5kZXggPCBuZXdTaWJsaW5ncy5sZW5ndGgpIHtcclxuICAgIC8vIEluc2VydFxyXG4gICAgY29uc3QgbmV4dFNpYmxpbmcgPSBuZXdTaWJsaW5nc1tjaGlsZEluZGV4XSBhcyBhbnkgYXMgTm9kZTtcclxuICAgIG5leHRTaWJsaW5nLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShjaGlsZCwgbmV4dFNpYmxpbmcpO1xyXG4gICAgbmV3U2libGluZ3Muc3BsaWNlKGNoaWxkSW5kZXgsIDAsIGNoaWxkQXNMb2dpY2FsRWxlbWVudCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEFwcGVuZFxyXG4gICAgYXBwZW5kRG9tTm9kZShjaGlsZCwgcGFyZW50KTtcclxuICAgIG5ld1NpYmxpbmdzLnB1c2goY2hpbGRBc0xvZ2ljYWxFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGNoaWxkQXNMb2dpY2FsRWxlbWVudFtsb2dpY2FsUGFyZW50UHJvcG5hbWVdID0gcGFyZW50O1xyXG4gIGlmICghKGxvZ2ljYWxDaGlsZHJlblByb3BuYW1lIGluIGNoaWxkQXNMb2dpY2FsRWxlbWVudCkpIHtcclxuICAgIGNoaWxkQXNMb2dpY2FsRWxlbWVudFtsb2dpY2FsQ2hpbGRyZW5Qcm9wbmFtZV0gPSBbXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMb2dpY2FsQ2hpbGQocGFyZW50OiBMb2dpY2FsRWxlbWVudCwgY2hpbGRJbmRleDogbnVtYmVyKSB7XHJcbiAgY29uc3QgY2hpbGRyZW5BcnJheSA9IGdldExvZ2ljYWxDaGlsZHJlbkFycmF5KHBhcmVudCk7XHJcbiAgY29uc3QgY2hpbGRUb1JlbW92ZSA9IGNoaWxkcmVuQXJyYXkuc3BsaWNlKGNoaWxkSW5kZXgsIDEpWzBdO1xyXG5cclxuICAvLyBJZiBpdCdzIGEgbG9naWNhbCBjb250YWluZXIsIGFsc28gcmVtb3ZlIGl0cyBkZXNjZW5kYW50c1xyXG4gIGlmIChjaGlsZFRvUmVtb3ZlIGluc3RhbmNlb2YgQ29tbWVudCkge1xyXG4gICAgY29uc3QgZ3JhbmRjaGlsZHJlbkFycmF5ID0gZ2V0TG9naWNhbENoaWxkcmVuQXJyYXkoY2hpbGRUb1JlbW92ZSk7XHJcbiAgICB3aGlsZSAoZ3JhbmRjaGlsZHJlbkFycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgcmVtb3ZlTG9naWNhbENoaWxkKGNoaWxkVG9SZW1vdmUsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRmluYWxseSwgcmVtb3ZlIHRoZSBub2RlIGl0c2VsZlxyXG4gIGNvbnN0IGRvbU5vZGVUb1JlbW92ZSA9IGNoaWxkVG9SZW1vdmUgYXMgYW55IGFzIE5vZGU7XHJcbiAgZG9tTm9kZVRvUmVtb3ZlLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKGRvbU5vZGVUb1JlbW92ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2dpY2FsUGFyZW50KGVsZW1lbnQ6IExvZ2ljYWxFbGVtZW50KTogTG9naWNhbEVsZW1lbnQgfCBudWxsIHtcclxuICByZXR1cm4gKGVsZW1lbnRbbG9naWNhbFBhcmVudFByb3BuYW1lXSBhcyBMb2dpY2FsRWxlbWVudCkgfHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2ljYWxTaWJsaW5nRW5kKGVsZW1lbnQ6IExvZ2ljYWxFbGVtZW50KTogTG9naWNhbEVsZW1lbnQgfCBudWxsIHtcclxuICByZXR1cm4gKGVsZW1lbnRbbG9naWNhbEVuZFNpYmxpbmdQcm9wbmFtZV0gYXMgTG9naWNhbEVsZW1lbnQpIHx8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2dpY2FsQ2hpbGQocGFyZW50OiBMb2dpY2FsRWxlbWVudCwgY2hpbGRJbmRleDogbnVtYmVyKTogTG9naWNhbEVsZW1lbnQge1xyXG4gIHJldHVybiBnZXRMb2dpY2FsQ2hpbGRyZW5BcnJheShwYXJlbnQpW2NoaWxkSW5kZXhdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdmdFbGVtZW50KGVsZW1lbnQ6IExvZ2ljYWxFbGVtZW50KSB7XHJcbiAgcmV0dXJuIGdldENsb3Nlc3REb21FbGVtZW50KGVsZW1lbnQpLm5hbWVzcGFjZVVSSSA9PT0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2ljYWxDaGlsZHJlbkFycmF5KGVsZW1lbnQ6IExvZ2ljYWxFbGVtZW50KSB7XHJcbiAgcmV0dXJuIGVsZW1lbnRbbG9naWNhbENoaWxkcmVuUHJvcG5hbWVdIGFzIExvZ2ljYWxFbGVtZW50W107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwZXJtdXRlTG9naWNhbENoaWxkcmVuKHBhcmVudDogTG9naWNhbEVsZW1lbnQsIHBlcm11dGF0aW9uTGlzdDogUGVybXV0YXRpb25MaXN0RW50cnlbXSkge1xyXG4gIC8vIFRoZSBwZXJtdXRhdGlvbkxpc3QgbXVzdCByZXByZXNlbnQgYSB2YWxpZCBwZXJtdXRhdGlvbiwgaS5lLiwgdGhlIGxpc3Qgb2YgJ2Zyb20nIGluZGljZXNcclxuICAvLyBpcyBkaXN0aW5jdCwgYW5kIHRoZSBsaXN0IG9mICd0bycgaW5kaWNlcyBpcyBhIHBlcm11dGF0aW9uIG9mIGl0LiBUaGUgYWxnb3JpdGhtIGhlcmVcclxuICAvLyByZWxpZXMgb24gdGhhdCBhc3N1bXB0aW9uLlxyXG5cclxuICAvLyBFYWNoIG9mIHRoZSBwaGFzZXMgaGVyZSBoYXMgdG8gaGFwcGVuIHNlcGFyYXRlbHksIGJlY2F1c2UgZWFjaCBvbmUgaXMgZGVzaWduZWQgbm90IHRvXHJcbiAgLy8gaW50ZXJmZXJlIHdpdGggdGhlIGluZGljZXMgb3IgRE9NIGVudHJpZXMgdXNlZCBieSBzdWJzZXF1ZW50IHBoYXNlcy5cclxuXHJcbiAgLy8gUGhhc2UgMTogdHJhY2sgd2hpY2ggbm9kZXMgd2Ugd2lsbCBtb3ZlXHJcbiAgY29uc3Qgc2libGluZ3MgPSBnZXRMb2dpY2FsQ2hpbGRyZW5BcnJheShwYXJlbnQpO1xyXG4gIHBlcm11dGF0aW9uTGlzdC5mb3JFYWNoKChsaXN0RW50cnk6IFBlcm11dGF0aW9uTGlzdEVudHJ5V2l0aFRyYWNraW5nRGF0YSkgPT4ge1xyXG4gICAgbGlzdEVudHJ5Lm1vdmVSYW5nZVN0YXJ0ID0gc2libGluZ3NbbGlzdEVudHJ5LmZyb21TaWJsaW5nSW5kZXhdO1xyXG4gICAgbGlzdEVudHJ5Lm1vdmVSYW5nZUVuZCA9IGZpbmRMYXN0RG9tTm9kZUluUmFuZ2UobGlzdEVudHJ5Lm1vdmVSYW5nZVN0YXJ0KTtcclxuICB9KTtcclxuXHJcbiAgLy8gUGhhc2UgMjogaW5zZXJ0IG1hcmtlcnNcclxuICBwZXJtdXRhdGlvbkxpc3QuZm9yRWFjaCgobGlzdEVudHJ5OiBQZXJtdXRhdGlvbkxpc3RFbnRyeVdpdGhUcmFja2luZ0RhdGEpID0+IHtcclxuICAgIGNvbnN0IG1hcmtlciA9IGxpc3RFbnRyeS5tb3ZlVG9CZWZvcmVNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdtYXJrZXInKTtcclxuICAgIGNvbnN0IGluc2VydEJlZm9yZU5vZGUgPSBzaWJsaW5nc1tsaXN0RW50cnkudG9TaWJsaW5nSW5kZXggKyAxXSBhcyBhbnkgYXMgTm9kZTtcclxuICAgIGlmIChpbnNlcnRCZWZvcmVOb2RlKSB7XHJcbiAgICAgIGluc2VydEJlZm9yZU5vZGUucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKG1hcmtlciwgaW5zZXJ0QmVmb3JlTm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcHBlbmREb21Ob2RlKG1hcmtlciwgcGFyZW50KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gUGhhc2UgMzogbW92ZSBkZXNjZW5kYW50cyAmIHJlbW92ZSBtYXJrZXJzXHJcbiAgcGVybXV0YXRpb25MaXN0LmZvckVhY2goKGxpc3RFbnRyeTogUGVybXV0YXRpb25MaXN0RW50cnlXaXRoVHJhY2tpbmdEYXRhKSA9PiB7XHJcbiAgICBjb25zdCBpbnNlcnRCZWZvcmUgPSBsaXN0RW50cnkubW92ZVRvQmVmb3JlTWFya2VyITtcclxuICAgIGNvbnN0IHBhcmVudERvbU5vZGUgPSBpbnNlcnRCZWZvcmUucGFyZW50Tm9kZSE7XHJcbiAgICBjb25zdCBlbGVtZW50VG9Nb3ZlID0gbGlzdEVudHJ5Lm1vdmVSYW5nZVN0YXJ0ITtcclxuICAgIGNvbnN0IG1vdmVFbmROb2RlID0gbGlzdEVudHJ5Lm1vdmVSYW5nZUVuZCE7XHJcbiAgICBsZXQgbmV4dFRvTW92ZSA9IGVsZW1lbnRUb01vdmUgYXMgYW55IGFzIE5vZGUgfCBudWxsO1xyXG4gICAgd2hpbGUgKG5leHRUb01vdmUpIHtcclxuICAgICAgY29uc3QgbmV4dE5leHQgPSBuZXh0VG9Nb3ZlLm5leHRTaWJsaW5nO1xyXG4gICAgICBwYXJlbnREb21Ob2RlLmluc2VydEJlZm9yZShuZXh0VG9Nb3ZlLCBpbnNlcnRCZWZvcmUpO1xyXG5cclxuICAgICAgaWYgKG5leHRUb01vdmUgPT09IG1vdmVFbmROb2RlKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV4dFRvTW92ZSA9IG5leHROZXh0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGFyZW50RG9tTm9kZS5yZW1vdmVDaGlsZChpbnNlcnRCZWZvcmUpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBQaGFzZSA0OiB1cGRhdGUgc2libGluZ3MgaW5kZXhcclxuICBwZXJtdXRhdGlvbkxpc3QuZm9yRWFjaCgobGlzdEVudHJ5OiBQZXJtdXRhdGlvbkxpc3RFbnRyeVdpdGhUcmFja2luZ0RhdGEpID0+IHtcclxuICAgIHNpYmxpbmdzW2xpc3RFbnRyeS50b1NpYmxpbmdJbmRleF0gPSBsaXN0RW50cnkubW92ZVJhbmdlU3RhcnQhO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xvc2VzdERvbUVsZW1lbnQobG9naWNhbEVsZW1lbnQ6IExvZ2ljYWxFbGVtZW50KSB7XHJcbiAgaWYgKGxvZ2ljYWxFbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGxvZ2ljYWxFbGVtZW50O1xyXG4gIH0gZWxzZSBpZiAobG9naWNhbEVsZW1lbnQgaW5zdGFuY2VvZiBDb21tZW50KSB7XHJcbiAgICByZXR1cm4gbG9naWNhbEVsZW1lbnQucGFyZW50Tm9kZSEgYXMgRWxlbWVudDtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSB2YWxpZCBsb2dpY2FsIGVsZW1lbnQnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVybXV0YXRpb25MaXN0RW50cnkge1xyXG4gIGZyb21TaWJsaW5nSW5kZXg6IG51bWJlcixcclxuICB0b1NpYmxpbmdJbmRleDogbnVtYmVyLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGVybXV0YXRpb25MaXN0RW50cnlXaXRoVHJhY2tpbmdEYXRhIGV4dGVuZHMgUGVybXV0YXRpb25MaXN0RW50cnkge1xyXG4gIC8vIFRoZXNlIGV4dHJhIHByb3BlcnRpZXMgYXJlIHVzZWQgaW50ZXJuYWxseSB3aGVuIHByb2Nlc3NpbmcgdGhlIHBlcm11dGF0aW9uIGxpc3RcclxuICBtb3ZlUmFuZ2VTdGFydD86IExvZ2ljYWxFbGVtZW50LFxyXG4gIG1vdmVSYW5nZUVuZD86IE5vZGUsXHJcbiAgbW92ZVRvQmVmb3JlTWFya2VyPzogTm9kZSxcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TG9naWNhbE5leHRTaWJsaW5nKGVsZW1lbnQ6IExvZ2ljYWxFbGVtZW50KTogTG9naWNhbEVsZW1lbnQgfCBudWxsIHtcclxuICBjb25zdCBzaWJsaW5ncyA9IGdldExvZ2ljYWxDaGlsZHJlbkFycmF5KGdldExvZ2ljYWxQYXJlbnQoZWxlbWVudCkhKTtcclxuICBjb25zdCBzaWJsaW5nSW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHNpYmxpbmdzLCBlbGVtZW50KTtcclxuICByZXR1cm4gc2libGluZ3Nbc2libGluZ0luZGV4ICsgMV0gfHwgbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kRG9tTm9kZShjaGlsZDogTm9kZSwgcGFyZW50OiBMb2dpY2FsRWxlbWVudCkge1xyXG4gIC8vIFRoaXMgZnVuY3Rpb24gb25seSBwdXRzICdjaGlsZCcgaW50byB0aGUgRE9NIGluIHRoZSByaWdodCBwbGFjZSByZWxhdGl2ZSB0byAncGFyZW50J1xyXG4gIC8vIEl0IGRvZXMgbm90IHVwZGF0ZSB0aGUgbG9naWNhbCBjaGlsZHJlbiBhcnJheSBvZiBhbnl0aGluZ1xyXG4gIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gIH0gZWxzZSBpZiAocGFyZW50IGluc3RhbmNlb2YgQ29tbWVudCkge1xyXG4gICAgY29uc3QgcGFyZW50TG9naWNhbE5leHRTaWJsaW5nID0gZ2V0TG9naWNhbE5leHRTaWJsaW5nKHBhcmVudCkgYXMgYW55IGFzIE5vZGU7XHJcbiAgICBpZiAocGFyZW50TG9naWNhbE5leHRTaWJsaW5nKSB7XHJcbiAgICAgIC8vIFNpbmNlIHRoZSBwYXJlbnQgaGFzIGEgbG9naWNhbCBuZXh0LXNpYmxpbmcsIGl0cyBhcHBlbmRlZCBjaGlsZCBnb2VzIHJpZ2h0IGJlZm9yZSB0aGF0XHJcbiAgICAgIHBhcmVudExvZ2ljYWxOZXh0U2libGluZy5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUoY2hpbGQsIHBhcmVudExvZ2ljYWxOZXh0U2libGluZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTaW5jZSB0aGUgcGFyZW50IGhhcyBubyBsb2dpY2FsIG5leHQtc2libGluZywga2VlcCByZWN1cnNpbmcgdXB3YXJkcyB1bnRpbCB3ZSBmaW5kXHJcbiAgICAgIC8vIGEgbG9naWNhbCBhbmNlc3RvciB0aGF0IGRvZXMgaGF2ZSBhIG5leHQtc2libGluZyBvciBpcyBhIHBoeXNpY2FsIGVsZW1lbnQuXHJcbiAgICAgIGFwcGVuZERvbU5vZGUoY2hpbGQsIGdldExvZ2ljYWxQYXJlbnQocGFyZW50KSEpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBTaG91bGQgbmV2ZXIgaGFwcGVuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBhcHBlbmQgbm9kZSBiZWNhdXNlIHRoZSBwYXJlbnQgaXMgbm90IGEgdmFsaWQgbG9naWNhbCBlbGVtZW50LiBQYXJlbnQ6ICR7cGFyZW50fWApO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmV0dXJucyB0aGUgZmluYWwgbm9kZSAoaW4gZGVwdGgtZmlyc3QgZXZhbHVhdGlvbiBvcmRlcikgdGhhdCBpcyBhIGRlc2NlbmRhbnQgb2YgdGhlIGxvZ2ljYWwgZWxlbWVudC5cclxuLy8gQXMgc3VjaCwgdGhlIGVudGlyZSBzdWJ0cmVlIGlzIGJldHdlZW4gJ2VsZW1lbnQnIGFuZCAnZmluZExhc3REb21Ob2RlSW5SYW5nZShlbGVtZW50KScgaW5jbHVzaXZlLlxyXG5mdW5jdGlvbiBmaW5kTGFzdERvbU5vZGVJblJhbmdlKGVsZW1lbnQ6IExvZ2ljYWxFbGVtZW50KSB7XHJcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGNvbnN0IG5leHRTaWJsaW5nID0gZ2V0TG9naWNhbE5leHRTaWJsaW5nKGVsZW1lbnQpO1xyXG4gIGlmIChuZXh0U2libGluZykge1xyXG4gICAgLy8gU2ltcGxlIGNhc2U6IG5vdCB0aGUgbGFzdCBsb2dpY2FsIHNpYmxpbmcsIHNvIHRha2UgdGhlIG5vZGUgYmVmb3JlIHRoZSBuZXh0IHNpYmxpbmdcclxuICAgIHJldHVybiAobmV4dFNpYmxpbmcgYXMgYW55IGFzIE5vZGUpLnByZXZpb3VzU2libGluZztcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gSGFyZGVyIGNhc2U6IHRoZXJlJ3Mgbm8gbG9naWNhbCBuZXh0LXNpYmxpbmcsIHNvIHJlY3Vyc2UgdXB3YXJkcyB1bnRpbCB3ZSBmaW5kXHJcbiAgICAvLyBhIGxvZ2ljYWwgYW5jZXN0b3IgdGhhdCBkb2VzIGhhdmUgb25lLCBvciBhIHBoeXNpY2FsIGVsZW1lbnRcclxuICAgIGNvbnN0IGxvZ2ljYWxQYXJlbnQgPSBnZXRMb2dpY2FsUGFyZW50KGVsZW1lbnQpITtcclxuICAgIHJldHVybiBsb2dpY2FsUGFyZW50IGluc3RhbmNlb2YgRWxlbWVudFxyXG4gICAgICA/IGxvZ2ljYWxQYXJlbnQubGFzdENoaWxkXHJcbiAgICAgIDogZmluZExhc3REb21Ob2RlSW5SYW5nZShsb2dpY2FsUGFyZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN5bWJvbE9yRmFsbGJhY2soZmFsbGJhY2s6IHN0cmluZyk6IHN5bWJvbCB8IHN0cmluZyB7XHJcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgPyBTeW1ib2woKSA6IGZhbGxiYWNrO1xyXG59XHJcblxyXG4vLyBOb21pbmFsIHR5cGUgdG8gcmVwcmVzZW50IGEgbG9naWNhbCBlbGVtZW50IHdpdGhvdXQgbmVlZGluZyB0byBhbGxvY2F0ZSBhbnkgb2JqZWN0IGZvciBpbnN0YW5jZXNcclxuZXhwb3J0IGludGVyZmFjZSBMb2dpY2FsRWxlbWVudCB7IExvZ2ljYWxFbGVtZW50X19ET19OT1RfSU1QTEVNRU5UOiBhbnkgfVxyXG4iLCJpbXBvcnQgeyBSZW5kZXJCYXRjaCwgQXJyYXlSYW5nZSwgUmVuZGVyVHJlZURpZmYsIEFycmF5VmFsdWVzLCBSZW5kZXJUcmVlRWRpdCwgRWRpdFR5cGUsIEZyYW1lVHlwZSwgUmVuZGVyVHJlZUZyYW1lLCBSZW5kZXJUcmVlRGlmZlJlYWRlciwgUmVuZGVyVHJlZUZyYW1lUmVhZGVyLCBSZW5kZXJUcmVlRWRpdFJlYWRlciwgQXJyYXlSYW5nZVJlYWRlciwgQXJyYXlCdWlsZGVyU2VnbWVudFJlYWRlciwgQXJyYXlCdWlsZGVyU2VnbWVudCB9IGZyb20gJy4vUmVuZGVyQmF0Y2gnO1xyXG5pbXBvcnQgeyBkZWNvZGVVdGY4IH0gZnJvbSAnLi9VdGY4RGVjb2Rlcic7XHJcblxyXG5jb25zdCB1cGRhdGVkQ29tcG9uZW50c0VudHJ5TGVuZ3RoID0gNDsgLy8gRWFjaCBpcyBhIHNpbmdsZSBpbnQzMiBnaXZpbmcgdGhlIGxvY2F0aW9uIG9mIHRoZSBkYXRhXHJcbmNvbnN0IHJlZmVyZW5jZUZyYW1lc0VudHJ5TGVuZ3RoID0gMjA7IC8vIDEgaW50IGZvciBmcmFtZSB0eXBlLCB0aGVuIDE2IGJ5dGVzIGZvciB0eXBlLXNwZWNpZmljIGRhdGFcclxuY29uc3QgZGlzcG9zZWRDb21wb25lbnRJZHNFbnRyeUxlbmd0aCA9IDQ7IC8vIEVhY2ggaXMgYW4gaW50MzIgZ2l2aW5nIHRoZSBJRFxyXG5jb25zdCBkaXNwb3NlZEV2ZW50SGFuZGxlcklkc0VudHJ5TGVuZ3RoID0gODsgLy8gRWFjaCBpcyBhbiBpbnQ2NCBnaXZpbmcgdGhlIElEXHJcbmNvbnN0IGVkaXRzRW50cnlMZW5ndGggPSAxNjsgLy8gNCBpbnRzXHJcbmNvbnN0IHN0cmluZ1RhYmxlRW50cnlMZW5ndGggPSA0OyAvLyBFYWNoIGlzIGFuIGludDMyIGdpdmluZyB0aGUgc3RyaW5nIGRhdGEgbG9jYXRpb24sIG9yIC0xIGZvciBudWxsXHJcbmNvbnN0IHVpbnQ2NEhpZ2hQYXJ0U2hpZnQgPSBNYXRoLnBvdygyLCAzMik7XHJcbmNvbnN0IG1heFNhZmVOdW1iZXJIaWdoUGFydCA9IE1hdGgucG93KDIsIDIxKSAtIDE7IC8vIFRoZSBoaWdoLW9yZGVyIGludDMyIGZyb20gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcclxuXHJcbmV4cG9ydCBjbGFzcyBPdXRPZlByb2Nlc3NSZW5kZXJCYXRjaCBpbXBsZW1lbnRzIFJlbmRlckJhdGNoIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhdGNoRGF0YTogVWludDhBcnJheSkge1xyXG4gICAgY29uc3Qgc3RyaW5nUmVhZGVyID0gbmV3IE91dE9mUHJvY2Vzc1N0cmluZ1JlYWRlcihiYXRjaERhdGEpO1xyXG5cclxuICAgIHRoaXMuYXJyYXlSYW5nZVJlYWRlciA9IG5ldyBPdXRPZlByb2Nlc3NBcnJheVJhbmdlUmVhZGVyKGJhdGNoRGF0YSk7XHJcbiAgICB0aGlzLmFycmF5QnVpbGRlclNlZ21lbnRSZWFkZXIgPSBuZXcgT3V0T2ZQcm9jZXNzQXJyYXlCdWlsZGVyU2VnbWVudFJlYWRlcihiYXRjaERhdGEpO1xyXG4gICAgdGhpcy5kaWZmUmVhZGVyID0gbmV3IE91dE9mUHJvY2Vzc1JlbmRlclRyZWVEaWZmUmVhZGVyKGJhdGNoRGF0YSk7XHJcbiAgICB0aGlzLmVkaXRSZWFkZXIgPSBuZXcgT3V0T2ZQcm9jZXNzUmVuZGVyVHJlZUVkaXRSZWFkZXIoYmF0Y2hEYXRhLCBzdHJpbmdSZWFkZXIpO1xyXG4gICAgdGhpcy5mcmFtZVJlYWRlciA9IG5ldyBPdXRPZlByb2Nlc3NSZW5kZXJUcmVlRnJhbWVSZWFkZXIoYmF0Y2hEYXRhLCBzdHJpbmdSZWFkZXIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlZENvbXBvbmVudHMoKTogQXJyYXlSYW5nZTxSZW5kZXJUcmVlRGlmZj4ge1xyXG4gICAgcmV0dXJuIHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhLCB0aGlzLmJhdGNoRGF0YS5sZW5ndGggLSAyMCk7IC8vIDV0aC1mcm9tLWxhc3QgaW50MzJcclxuICB9XHJcblxyXG4gIHJlZmVyZW5jZUZyYW1lcygpOiBBcnJheVJhbmdlPFJlbmRlclRyZWVGcmFtZT4ge1xyXG4gICAgcmV0dXJuIHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhLCB0aGlzLmJhdGNoRGF0YS5sZW5ndGggLSAxNik7IC8vIDR0aC1mcm9tLWxhc3QgaW50MzJcclxuICB9XHJcblxyXG4gIGRpc3Bvc2VkQ29tcG9uZW50SWRzKCk6IEFycmF5UmFuZ2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gcmVhZEludDMyTEUodGhpcy5iYXRjaERhdGEsIHRoaXMuYmF0Y2hEYXRhLmxlbmd0aCAtIDEyKTsgLy8gM3JkLWZyb20tbGFzdCBpbnQzMlxyXG4gIH1cclxuXHJcbiAgZGlzcG9zZWRFdmVudEhhbmRsZXJJZHMoKTogQXJyYXlSYW5nZTxudW1iZXI+IHtcclxuICAgIHJldHVybiByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YSwgdGhpcy5iYXRjaERhdGEubGVuZ3RoIC0gOCk7IC8vIDJ0aC1mcm9tLWxhc3QgaW50MzJcclxuICB9XHJcblxyXG4gIHVwZGF0ZWRDb21wb25lbnRzRW50cnkodmFsdWVzOiBBcnJheVZhbHVlczxSZW5kZXJUcmVlRGlmZj4sIGluZGV4OiBudW1iZXIpOiBSZW5kZXJUcmVlRGlmZiB7XHJcbiAgICBjb25zdCB0YWJsZUVudHJ5UG9zID0gKHZhbHVlcyBhcyBhbnkpICsgaW5kZXggKiB1cGRhdGVkQ29tcG9uZW50c0VudHJ5TGVuZ3RoO1xyXG4gICAgcmV0dXJuIHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhLCB0YWJsZUVudHJ5UG9zKTtcclxuICB9XHJcblxyXG4gIHJlZmVyZW5jZUZyYW1lc0VudHJ5KHZhbHVlczogQXJyYXlWYWx1ZXM8UmVuZGVyVHJlZUZyYW1lPiwgaW5kZXg6IG51bWJlcik6IFJlbmRlclRyZWVGcmFtZSB7XHJcbiAgICByZXR1cm4gKHZhbHVlcyBhcyBhbnkpICsgaW5kZXggKiByZWZlcmVuY2VGcmFtZXNFbnRyeUxlbmd0aCBhcyBhbnk7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlZENvbXBvbmVudElkc0VudHJ5KHZhbHVlczogQXJyYXlWYWx1ZXM8bnVtYmVyPiwgaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBlbnRyeVBvcyA9ICh2YWx1ZXMgYXMgYW55KSArIGluZGV4ICogZGlzcG9zZWRDb21wb25lbnRJZHNFbnRyeUxlbmd0aDtcclxuICAgIHJldHVybiByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YSwgZW50cnlQb3MpO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZWRFdmVudEhhbmRsZXJJZHNFbnRyeSh2YWx1ZXM6IEFycmF5VmFsdWVzPG51bWJlcj4sIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZW50cnlQb3MgPSAodmFsdWVzIGFzIGFueSkgKyBpbmRleCAqIGRpc3Bvc2VkRXZlbnRIYW5kbGVySWRzRW50cnlMZW5ndGg7XHJcbiAgICByZXR1cm4gcmVhZFVpbnQ2NExFKHRoaXMuYmF0Y2hEYXRhLCBlbnRyeVBvcyk7XHJcbiAgfVxyXG5cclxuICBkaWZmUmVhZGVyOiBSZW5kZXJUcmVlRGlmZlJlYWRlcjtcclxuXHJcbiAgZWRpdFJlYWRlcjogUmVuZGVyVHJlZUVkaXRSZWFkZXI7XHJcblxyXG4gIGZyYW1lUmVhZGVyOiBSZW5kZXJUcmVlRnJhbWVSZWFkZXI7XHJcblxyXG4gIGFycmF5UmFuZ2VSZWFkZXI6IEFycmF5UmFuZ2VSZWFkZXI7XHJcblxyXG4gIGFycmF5QnVpbGRlclNlZ21lbnRSZWFkZXI6IEFycmF5QnVpbGRlclNlZ21lbnRSZWFkZXI7XHJcbn1cclxuXHJcbmNsYXNzIE91dE9mUHJvY2Vzc1JlbmRlclRyZWVEaWZmUmVhZGVyIGltcGxlbWVudHMgUmVuZGVyVHJlZURpZmZSZWFkZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmF0Y2hEYXRhVWludDg6IFVpbnQ4QXJyYXkpIHtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudElkKGRpZmY6IFJlbmRlclRyZWVEaWZmKSB7XHJcbiAgICAvLyBGaXJzdCBpbnQzMiBpcyBjb21wb25lbnRJZFxyXG4gICAgcmV0dXJuIHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhVWludDgsIGRpZmYgYXMgYW55KTtcclxuICB9XHJcblxyXG4gIGVkaXRzKGRpZmY6IFJlbmRlclRyZWVEaWZmKSB7XHJcbiAgICAvLyBFbnRyaWVzIGRhdGEgc3RhcnRzIGFmdGVyIHRoZSBjb21wb25lbnRJZCAod2hpY2ggaXMgYSA0LWJ5dGUgaW50KVxyXG4gICAgcmV0dXJuIChkaWZmIGFzIGFueSArIDQpO1xyXG4gIH1cclxuXHJcbiAgZWRpdHNFbnRyeSh2YWx1ZXM6IEFycmF5VmFsdWVzPFJlbmRlclRyZWVFZGl0PiwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuICh2YWx1ZXMgYXMgYW55KSArIGluZGV4ICogZWRpdHNFbnRyeUxlbmd0aDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE91dE9mUHJvY2Vzc1JlbmRlclRyZWVFZGl0UmVhZGVyIGltcGxlbWVudHMgUmVuZGVyVHJlZUVkaXRSZWFkZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmF0Y2hEYXRhVWludDg6IFVpbnQ4QXJyYXksIHByaXZhdGUgc3RyaW5nUmVhZGVyOiBPdXRPZlByb2Nlc3NTdHJpbmdSZWFkZXIpIHtcclxuICB9XHJcblxyXG4gIGVkaXRUeXBlKGVkaXQ6IFJlbmRlclRyZWVFZGl0KSB7XHJcbiAgICByZXR1cm4gcmVhZEludDMyTEUodGhpcy5iYXRjaERhdGFVaW50OCwgZWRpdCBhcyBhbnkpOyAvLyAxc3QgaW50XHJcbiAgfVxyXG5cclxuICBzaWJsaW5nSW5kZXgoZWRpdDogUmVuZGVyVHJlZUVkaXQpIHtcclxuICAgIHJldHVybiByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YVVpbnQ4LCBlZGl0IGFzIGFueSArIDQpOyAvLyAybmQgaW50XHJcbiAgfVxyXG5cclxuICBuZXdUcmVlSW5kZXgoZWRpdDogUmVuZGVyVHJlZUVkaXQpIHtcclxuICAgIHJldHVybiByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YVVpbnQ4LCBlZGl0IGFzIGFueSArIDgpOyAvLyAzcmQgaW50XHJcbiAgfVxyXG5cclxuICBtb3ZlVG9TaWJsaW5nSW5kZXgoZWRpdDogUmVuZGVyVHJlZUVkaXQpIHtcclxuICAgIHJldHVybiByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YVVpbnQ4LCBlZGl0IGFzIGFueSArIDgpOyAvLyAzcmQgaW50XHJcbiAgfVxyXG5cclxuICByZW1vdmVkQXR0cmlidXRlTmFtZShlZGl0OiBSZW5kZXJUcmVlRWRpdCkge1xyXG4gICAgY29uc3Qgc3RyaW5nSW5kZXggPSByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YVVpbnQ4LCBlZGl0IGFzIGFueSArIDEyKTsgLy8gNHRoIGludFxyXG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nUmVhZGVyLnJlYWRTdHJpbmcoc3RyaW5nSW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgT3V0T2ZQcm9jZXNzUmVuZGVyVHJlZUZyYW1lUmVhZGVyIGltcGxlbWVudHMgUmVuZGVyVHJlZUZyYW1lUmVhZGVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhdGNoRGF0YVVpbnQ4OiBVaW50OEFycmF5LCBwcml2YXRlIHN0cmluZ1JlYWRlcjogT3V0T2ZQcm9jZXNzU3RyaW5nUmVhZGVyKSB7XHJcbiAgfVxyXG5cclxuICAvLyBGb3IgcmVuZGVyIGZyYW1lcywgdGhlIDJuZC00dGggaW50cyBoYXZlIGRpZmZlcmVudCBtZWFuaW5ncyBkZXBlbmRpbmcgb24gZnJhbWVUeXBlLlxyXG4gIC8vIEl0J3MgdGhlIGNhbGxlcidzIHJlc3BvbnNpYmlsaXR5IG5vdCB0byBldmFsdWF0ZSBwcm9wZXJ0aWVzIHRoYXQgYXJlbid0IGFwcGxpY2FibGUgdG8gdGhlIGZyYW1lVHlwZS5cclxuXHJcbiAgZnJhbWVUeXBlKGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpIHtcclxuICAgIHJldHVybiByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YVVpbnQ4LCBmcmFtZSBhcyBhbnkpOyAvLyAxc3QgaW50XHJcbiAgfVxyXG5cclxuICBzdWJ0cmVlTGVuZ3RoKGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpIHtcclxuICAgIHJldHVybiByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YVVpbnQ4LCBmcmFtZSBhcyBhbnkgKyA0KTsgLy8gMm5kIGludFxyXG4gIH1cclxuXHJcbiAgZWxlbWVudFJlZmVyZW5jZUNhcHR1cmVJZChmcmFtZTogUmVuZGVyVHJlZUZyYW1lKSB7XHJcbiAgICBjb25zdCBzdHJpbmdJbmRleCA9IHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhVWludDgsIGZyYW1lIGFzIGFueSArIDQpOyAvLyAybmQgaW50XHJcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdSZWFkZXIucmVhZFN0cmluZyhzdHJpbmdJbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRJZChmcmFtZTogUmVuZGVyVHJlZUZyYW1lKSB7XHJcbiAgICByZXR1cm4gcmVhZEludDMyTEUodGhpcy5iYXRjaERhdGFVaW50OCwgZnJhbWUgYXMgYW55ICsgOCk7IC8vIDNyZCBpbnRcclxuICB9XHJcblxyXG4gIGVsZW1lbnROYW1lKGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpIHtcclxuICAgIGNvbnN0IHN0cmluZ0luZGV4ID0gcmVhZEludDMyTEUodGhpcy5iYXRjaERhdGFVaW50OCwgZnJhbWUgYXMgYW55ICsgOCk7IC8vIDNyZCBpbnRcclxuICAgIHJldHVybiB0aGlzLnN0cmluZ1JlYWRlci5yZWFkU3RyaW5nKHN0cmluZ0luZGV4KTtcclxuICB9XHJcblxyXG4gIHRleHRDb250ZW50KGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpIHtcclxuICAgIGNvbnN0IHN0cmluZ0luZGV4ID0gcmVhZEludDMyTEUodGhpcy5iYXRjaERhdGFVaW50OCwgZnJhbWUgYXMgYW55ICsgNCk7IC8vIDJuZCBpbnRcclxuICAgIHJldHVybiB0aGlzLnN0cmluZ1JlYWRlci5yZWFkU3RyaW5nKHN0cmluZ0luZGV4KTtcclxuICB9XHJcblxyXG4gIG1hcmt1cENvbnRlbnQoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSkge1xyXG4gICAgY29uc3Qgc3RyaW5nSW5kZXggPSByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YVVpbnQ4LCBmcmFtZSBhcyBhbnkgKyA0KTsgLy8gMm5kIGludFxyXG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nUmVhZGVyLnJlYWRTdHJpbmcoc3RyaW5nSW5kZXgpITtcclxuICB9XHJcblxyXG4gIGF0dHJpYnV0ZU5hbWUoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSkge1xyXG4gICAgY29uc3Qgc3RyaW5nSW5kZXggPSByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YVVpbnQ4LCBmcmFtZSBhcyBhbnkgKyA0KTsgLy8gMm5kIGludFxyXG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nUmVhZGVyLnJlYWRTdHJpbmcoc3RyaW5nSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgYXR0cmlidXRlVmFsdWUoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSkge1xyXG4gICAgY29uc3Qgc3RyaW5nSW5kZXggPSByZWFkSW50MzJMRSh0aGlzLmJhdGNoRGF0YVVpbnQ4LCBmcmFtZSBhcyBhbnkgKyA4KTsgLy8gM3JkIGludFxyXG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nUmVhZGVyLnJlYWRTdHJpbmcoc3RyaW5nSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgYXR0cmlidXRlRXZlbnRIYW5kbGVySWQoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSkge1xyXG4gICAgcmV0dXJuIHJlYWRVaW50NjRMRSh0aGlzLmJhdGNoRGF0YVVpbnQ4LCBmcmFtZSBhcyBhbnkgKyAxMik7IC8vIEJ5dGVzIDEyLTE5XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBPdXRPZlByb2Nlc3NTdHJpbmdSZWFkZXIge1xyXG4gIHByaXZhdGUgc3RyaW5nVGFibGVTdGFydEluZGV4OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmF0Y2hEYXRhVWludDg6IFVpbnQ4QXJyYXkpIHtcclxuICAgIC8vIEZpbmFsIGludCBnaXZlcyBzdGFydCBwb3NpdGlvbiBvZiB0aGUgc3RyaW5nIHRhYmxlXHJcbiAgICB0aGlzLnN0cmluZ1RhYmxlU3RhcnRJbmRleCA9IHJlYWRJbnQzMkxFKGJhdGNoRGF0YVVpbnQ4LCBiYXRjaERhdGFVaW50OC5sZW5ndGggLSA0KTtcclxuICB9XHJcblxyXG4gIHJlYWRTdHJpbmcoaW5kZXg6IG51bWJlcik6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkgeyAvLyBTcGVjaWFsIHZhbHVlIGVuY29kZXMgJ251bGwnXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgc3RyaW5nVGFibGVFbnRyeVBvcyA9IHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhVWludDgsIHRoaXMuc3RyaW5nVGFibGVTdGFydEluZGV4ICsgaW5kZXggKiBzdHJpbmdUYWJsZUVudHJ5TGVuZ3RoKTtcclxuXHJcbiAgICAgIC8vIEJ5IGRlZmF1bHQsIC5ORVQncyBCaW5hcnlXcml0ZXIgZ2l2ZXMgTEVCMTI4LWxlbmd0aC1wcmVmaXhlZCBVVEYtOCBkYXRhLlxyXG4gICAgICAvLyBUaGlzIGlzIGNvbnZlbmllbnQgZW5vdWdoIHRvIGRlY29kZSBpbiBKYXZhU2NyaXB0LlxyXG4gICAgICBjb25zdCBudW1VdGY4Qnl0ZXMgPSByZWFkTEVCMTI4KHRoaXMuYmF0Y2hEYXRhVWludDgsIHN0cmluZ1RhYmxlRW50cnlQb3MpO1xyXG4gICAgICBjb25zdCBjaGFyc1N0YXJ0ID0gc3RyaW5nVGFibGVFbnRyeVBvcyArIG51bUxFQjEyOEJ5dGVzKG51bVV0ZjhCeXRlcyk7XHJcbiAgICAgIGNvbnN0IHV0ZjhEYXRhID0gbmV3IFVpbnQ4QXJyYXkoXHJcbiAgICAgICAgdGhpcy5iYXRjaERhdGFVaW50OC5idWZmZXIsXHJcbiAgICAgICAgdGhpcy5iYXRjaERhdGFVaW50OC5ieXRlT2Zmc2V0ICsgY2hhcnNTdGFydCxcclxuICAgICAgICBudW1VdGY4Qnl0ZXNcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIGRlY29kZVV0ZjgodXRmOERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgT3V0T2ZQcm9jZXNzQXJyYXlSYW5nZVJlYWRlciBpbXBsZW1lbnRzIEFycmF5UmFuZ2VSZWFkZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmF0Y2hEYXRhVWludDg6IFVpbnQ4QXJyYXkpIHtcclxuICB9XHJcblxyXG4gIGNvdW50PFQ+KGFycmF5UmFuZ2U6IEFycmF5UmFuZ2U8VD4pIHtcclxuICAgIC8vIEZpcnN0IGludCBpcyBjb3VudFxyXG4gICAgcmV0dXJuIHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhVWludDgsIGFycmF5UmFuZ2UgYXMgYW55KTtcclxuICB9XHJcblxyXG4gIHZhbHVlczxUPihhcnJheVJhbmdlOiBBcnJheVJhbmdlPFQ+KSB7XHJcbiAgICAvLyBFbnRyaWVzIGRhdGEgc3RhcnRzIGFmdGVyIHRoZSAnY291bnQnIGludCAoaS5lLiwgYWZ0ZXIgNCBieXRlcylcclxuICAgIHJldHVybiBhcnJheVJhbmdlIGFzIGFueSArIDQ7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBPdXRPZlByb2Nlc3NBcnJheUJ1aWxkZXJTZWdtZW50UmVhZGVyIGltcGxlbWVudHMgQXJyYXlCdWlsZGVyU2VnbWVudFJlYWRlciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXRjaERhdGFVaW50ODogVWludDhBcnJheSkge1xyXG4gIH1cclxuXHJcbiAgb2Zmc2V0PFQ+KGFycmF5QnVpbGRlclNlZ21lbnQ6IEFycmF5QnVpbGRlclNlZ21lbnQ8VD4pIHtcclxuICAgIC8vIE5vdCB1c2VkIGJ5IHRoZSBvdXQtb2YtcHJvY2VzcyByZXByZXNlbnRhdGlvbiBvZiBSZW5kZXJCYXRjaCBkYXRhLlxyXG4gICAgLy8gVGhpcyBvbmx5IGV4aXN0cyBvbiB0aGUgQXJyYXlCdWlsZGVyU2VnbWVudFJlYWRlciBmb3IgdGhlIHNoYXJlZC1tZW1vcnkgcmVwcmVzZW50YXRpb24uXHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIGNvdW50PFQ+KGFycmF5QnVpbGRlclNlZ21lbnQ6IEFycmF5QnVpbGRlclNlZ21lbnQ8VD4pIHtcclxuICAgIC8vIEZpcnN0IGludCBpcyBjb3VudFxyXG4gICAgcmV0dXJuIHJlYWRJbnQzMkxFKHRoaXMuYmF0Y2hEYXRhVWludDgsIGFycmF5QnVpbGRlclNlZ21lbnQgYXMgYW55KTtcclxuICB9XHJcblxyXG4gIHZhbHVlczxUPihhcnJheUJ1aWxkZXJTZWdtZW50OiBBcnJheUJ1aWxkZXJTZWdtZW50PFQ+KTogQXJyYXlWYWx1ZXM8VD4ge1xyXG4gICAgLy8gRW50cmllcyBkYXRhIHN0YXJ0cyBhZnRlciB0aGUgJ2NvdW50JyBpbnQgKGkuZS4sIGFmdGVyIDQgYnl0ZXMpXHJcbiAgICByZXR1cm4gYXJyYXlCdWlsZGVyU2VnbWVudCBhcyBhbnkgKyA0O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZEludDMyTEUoYnVmZmVyOiBVaW50OEFycmF5LCBwb3NpdGlvbjogbnVtYmVyKTogYW55IHtcclxuICByZXR1cm4gKGJ1ZmZlcltwb3NpdGlvbl0pXHJcbiAgICB8IChidWZmZXJbcG9zaXRpb24gKyAxXSA8PCA4KVxyXG4gICAgfCAoYnVmZmVyW3Bvc2l0aW9uICsgMl0gPDwgMTYpXHJcbiAgICB8IChidWZmZXJbcG9zaXRpb24gKyAzXSA8PCAyNCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRVaW50MzJMRShidWZmZXI6IFVpbnQ4QXJyYXksIHBvc2l0aW9uOiBudW1iZXIpOiBhbnkge1xyXG4gIHJldHVybiAoYnVmZmVyW3Bvc2l0aW9uXSlcclxuICAgICsgKGJ1ZmZlcltwb3NpdGlvbiArIDFdIDw8IDgpXHJcbiAgICArIChidWZmZXJbcG9zaXRpb24gKyAyXSA8PCAxNilcclxuICAgICsgKChidWZmZXJbcG9zaXRpb24gKyAzXSA8PCAyNCkgPj4+IDApOyAvLyBUaGUgPj4+IDAgY29lcmNlcyB0aGUgdmFsdWUgdG8gdW5zaWduZWRcclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZFVpbnQ2NExFKGJ1ZmZlcjogVWludDhBcnJheSwgcG9zaXRpb246IG51bWJlcik6IGFueSB7XHJcbiAgLy8gVGhpcyBjYW5ub3QgYmUgZG9uZSB1c2luZyBiaXQtc2hpZnQgb3BlcmF0b3JzIGluIEphdmFTY3JpcHQsIGJlY2F1c2VcclxuICAvLyB0aG9zZSBhbGwgaW1wbGljaXRseSBjb252ZXJ0IHRvIGludDMyXHJcbiAgY29uc3QgaGlnaFBhcnQgPSByZWFkVWludDMyTEUoYnVmZmVyLCBwb3NpdGlvbiArIDQpO1xyXG4gIGlmIChoaWdoUGFydCA+IG1heFNhZmVOdW1iZXJIaWdoUGFydCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgcmVhZCB1aW50NjQgd2l0aCBoaWdoIG9yZGVyIHBhcnQgJHtoaWdoUGFydH0sIGJlY2F1c2UgdGhlIHJlc3VsdCB3b3VsZCBleGNlZWQgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIuYCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKGhpZ2hQYXJ0ICogdWludDY0SGlnaFBhcnRTaGlmdCkgKyByZWFkVWludDMyTEUoYnVmZmVyLCBwb3NpdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRMRUIxMjgoYnVmZmVyOiBVaW50OEFycmF5LCBwb3NpdGlvbjogbnVtYmVyKSB7XHJcbiAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgbGV0IHNoaWZ0ID0gMDtcclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNDsgaW5kZXgrKykge1xyXG4gICAgY29uc3QgYnl0ZSA9IGJ1ZmZlcltwb3NpdGlvbiArIGluZGV4XTtcclxuICAgIHJlc3VsdCB8PSAoYnl0ZSAmIDEyNykgPDwgc2hpZnQ7XHJcbiAgICBpZiAoYnl0ZSA8IDEyOCkge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHNoaWZ0ICs9IDc7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG51bUxFQjEyOEJ5dGVzKHZhbHVlOiBudW1iZXIpIHtcclxuICByZXR1cm4gdmFsdWUgPCAxMjggPyAxXHJcbiAgICA6IHZhbHVlIDwgMTYzODQgPyAyXHJcbiAgICAgIDogdmFsdWUgPCAyMDk3MTUyID8gMyA6IDQ7XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBSZW5kZXJCYXRjaCB7XHJcbiAgdXBkYXRlZENvbXBvbmVudHMoKTogQXJyYXlSYW5nZTxSZW5kZXJUcmVlRGlmZj47XHJcbiAgcmVmZXJlbmNlRnJhbWVzKCk6IEFycmF5UmFuZ2U8UmVuZGVyVHJlZUZyYW1lPjtcclxuICBkaXNwb3NlZENvbXBvbmVudElkcygpOiBBcnJheVJhbmdlPG51bWJlcj47XHJcbiAgZGlzcG9zZWRFdmVudEhhbmRsZXJJZHMoKTogQXJyYXlSYW5nZTxudW1iZXI+O1xyXG5cclxuICB1cGRhdGVkQ29tcG9uZW50c0VudHJ5KHZhbHVlczogQXJyYXlWYWx1ZXM8UmVuZGVyVHJlZURpZmY+LCBpbmRleDogbnVtYmVyKTogUmVuZGVyVHJlZURpZmY7XHJcbiAgcmVmZXJlbmNlRnJhbWVzRW50cnkodmFsdWVzOiBBcnJheVZhbHVlczxSZW5kZXJUcmVlRnJhbWU+LCBpbmRleDogbnVtYmVyKTogUmVuZGVyVHJlZUZyYW1lO1xyXG4gIGRpc3Bvc2VkQ29tcG9uZW50SWRzRW50cnkodmFsdWVzOiBBcnJheVZhbHVlczxudW1iZXI+LCBpbmRleDogbnVtYmVyKTogbnVtYmVyO1xyXG4gIGRpc3Bvc2VkRXZlbnRIYW5kbGVySWRzRW50cnkodmFsdWVzOiBBcnJheVZhbHVlczxudW1iZXI+LCBpbmRleDogbnVtYmVyKTogbnVtYmVyO1xyXG5cclxuICBkaWZmUmVhZGVyOiBSZW5kZXJUcmVlRGlmZlJlYWRlcjtcclxuICBlZGl0UmVhZGVyOiBSZW5kZXJUcmVlRWRpdFJlYWRlcjtcclxuICBmcmFtZVJlYWRlcjogUmVuZGVyVHJlZUZyYW1lUmVhZGVyO1xyXG4gIGFycmF5UmFuZ2VSZWFkZXI6IEFycmF5UmFuZ2VSZWFkZXI7XHJcbiAgYXJyYXlCdWlsZGVyU2VnbWVudFJlYWRlcjogQXJyYXlCdWlsZGVyU2VnbWVudFJlYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcnJheVJhbmdlUmVhZGVyIHtcclxuICBjb3VudDxUPihhcnJheVJhbmdlOiBBcnJheVJhbmdlPFQ+KTogbnVtYmVyO1xyXG4gIHZhbHVlczxUPihhcnJheVJhbmdlOiBBcnJheVJhbmdlPFQ+KTogQXJyYXlWYWx1ZXM8VD47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlCdWlsZGVyU2VnbWVudFJlYWRlciB7XHJcbiAgb2Zmc2V0PFQ+KGFycmF5QnVpbGRlclNlZ21lbnQ6IEFycmF5QnVpbGRlclNlZ21lbnQ8VD4pOiBudW1iZXI7XHJcbiAgY291bnQ8VD4oYXJyYXlCdWlsZGVyU2VnbWVudDogQXJyYXlCdWlsZGVyU2VnbWVudDxUPik6IG51bWJlcjtcclxuICB2YWx1ZXM8VD4oYXJyYXlCdWlsZGVyU2VnbWVudDogQXJyYXlCdWlsZGVyU2VnbWVudDxUPik6IEFycmF5VmFsdWVzPFQ+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlclRyZWVEaWZmUmVhZGVyIHtcclxuICBjb21wb25lbnRJZChkaWZmOiBSZW5kZXJUcmVlRGlmZik6IG51bWJlcjtcclxuICBlZGl0cyhkaWZmOiBSZW5kZXJUcmVlRGlmZik6IEFycmF5QnVpbGRlclNlZ21lbnQ8UmVuZGVyVHJlZUVkaXQ+O1xyXG4gIGVkaXRzRW50cnkodmFsdWVzOiBBcnJheVZhbHVlczxSZW5kZXJUcmVlRWRpdD4sIGluZGV4OiBudW1iZXIpOiBSZW5kZXJUcmVlRWRpdDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZW5kZXJUcmVlRWRpdFJlYWRlciB7XHJcbiAgZWRpdFR5cGUoZWRpdDogUmVuZGVyVHJlZUVkaXQpOiBFZGl0VHlwZTtcclxuICBzaWJsaW5nSW5kZXgoZWRpdDogUmVuZGVyVHJlZUVkaXQpOiBudW1iZXI7XHJcbiAgbmV3VHJlZUluZGV4KGVkaXQ6IFJlbmRlclRyZWVFZGl0KTogbnVtYmVyO1xyXG4gIG1vdmVUb1NpYmxpbmdJbmRleChlZGl0OiBSZW5kZXJUcmVlRWRpdCk6IG51bWJlcjtcclxuICByZW1vdmVkQXR0cmlidXRlTmFtZShlZGl0OiBSZW5kZXJUcmVlRWRpdCk6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVuZGVyVHJlZUZyYW1lUmVhZGVyIHtcclxuICBmcmFtZVR5cGUoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSk6IEZyYW1lVHlwZTtcclxuICBzdWJ0cmVlTGVuZ3RoKGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpOiBudW1iZXI7XHJcbiAgZWxlbWVudFJlZmVyZW5jZUNhcHR1cmVJZChmcmFtZTogUmVuZGVyVHJlZUZyYW1lKTogc3RyaW5nIHwgbnVsbDtcclxuICBjb21wb25lbnRJZChmcmFtZTogUmVuZGVyVHJlZUZyYW1lKTogbnVtYmVyO1xyXG4gIGVsZW1lbnROYW1lKGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpOiBzdHJpbmcgfCBudWxsO1xyXG4gIHRleHRDb250ZW50KGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpOiBzdHJpbmcgfCBudWxsO1xyXG4gIG1hcmt1cENvbnRlbnQoZnJhbWU6IFJlbmRlclRyZWVGcmFtZSk6IHN0cmluZztcclxuICBhdHRyaWJ1dGVOYW1lKGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpOiBzdHJpbmcgfCBudWxsO1xyXG4gIGF0dHJpYnV0ZVZhbHVlKGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpOiBzdHJpbmcgfCBudWxsO1xyXG4gIGF0dHJpYnV0ZUV2ZW50SGFuZGxlcklkKGZyYW1lOiBSZW5kZXJUcmVlRnJhbWUpOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlSYW5nZTxUPiB7IEFycmF5UmFuZ2VfX0RPX05PVF9JTVBMRU1FTlQ6IGFueSB9XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlCdWlsZGVyU2VnbWVudDxUPiB7IEFycmF5QnVpbGRlclNlZ21lbnRfX0RPX05PVF9JTVBMRU1FTlQ6IGFueSB9XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlWYWx1ZXM8VD4geyBBcnJheVZhbHVlc19fRE9fTk9UX0lNUExFTUVOVDogYW55IH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVuZGVyVHJlZURpZmYgeyBSZW5kZXJUcmVlRGlmZl9fRE9fTk9UX0lNUExFTUVOVDogYW55IH1cclxuZXhwb3J0IGludGVyZmFjZSBSZW5kZXJUcmVlRnJhbWUgeyBSZW5kZXJUcmVlRnJhbWVfX0RPX05PVF9JTVBMRU1FTlQ6IGFueSB9XHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVuZGVyVHJlZUVkaXQgeyBSZW5kZXJUcmVlRWRpdF9fRE9fTk9UX0lNUExFTUVOVDogYW55IH1cclxuXHJcbmV4cG9ydCBlbnVtIEVkaXRUeXBlIHtcclxuICAvLyBUaGUgdmFsdWVzIG11c3QgYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIC5ORVQgZXF1aXZhbGVudCBpbiBSZW5kZXJUcmVlRWRpdFR5cGUuY3NcclxuICBwcmVwZW5kRnJhbWUgPSAxLFxyXG4gIHJlbW92ZUZyYW1lID0gMixcclxuICBzZXRBdHRyaWJ1dGUgPSAzLFxyXG4gIHJlbW92ZUF0dHJpYnV0ZSA9IDQsXHJcbiAgdXBkYXRlVGV4dCA9IDUsXHJcbiAgc3RlcEluID0gNixcclxuICBzdGVwT3V0ID0gNyxcclxuICB1cGRhdGVNYXJrdXAgPSA4LFxyXG4gIHBlcm11dGF0aW9uTGlzdEVudHJ5ID0gOSxcclxuICBwZXJtdXRhdGlvbkxpc3RFbmQgPSAxMCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRnJhbWVUeXBlIHtcclxuICAvLyBUaGUgdmFsdWVzIG11c3QgYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIC5ORVQgZXF1aXZhbGVudCBpbiBSZW5kZXJUcmVlRnJhbWVUeXBlLmNzXHJcbiAgZWxlbWVudCA9IDEsXHJcbiAgdGV4dCA9IDIsXHJcbiAgYXR0cmlidXRlID0gMyxcclxuICBjb21wb25lbnQgPSA0LFxyXG4gIHJlZ2lvbiA9IDUsXHJcbiAgZWxlbWVudFJlZmVyZW5jZUNhcHR1cmUgPSA2LFxyXG4gIG1hcmt1cCA9IDgsXHJcbn1cclxuIiwiY29uc3QgbmF0aXZlRGVjb2RlciA9IHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gJ2Z1bmN0aW9uJ1xyXG4gID8gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpXHJcbiAgOiBudWxsO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlY29kZVV0Zjg6IChieXRlczogVWludDhBcnJheSkgPT4gc3RyaW5nXHJcbiAgPSBuYXRpdmVEZWNvZGVyID8gbmF0aXZlRGVjb2Rlci5kZWNvZGUuYmluZChuYXRpdmVEZWNvZGVyKSA6IGRlY29kZUltcGw7XHJcblxyXG4vKiAhXHJcbkxvZ2ljIGluIGRlY29kZUltcGwgaXMgZGVyaXZlZCBmcm9tIGZhc3QtdGV4dC1lbmNvZGluZ1xyXG5odHRwczovL2dpdGh1Yi5jb20vc2FtdGhvci9mYXN0LXRleHQtZW5jb2RpbmdcclxuXHJcbkxpY2Vuc2UgZm9yIGZhc3QtdGV4dC1lbmNvZGluZzogQXBhY2hlIDIuMFxyXG5odHRwczovL2dpdGh1Yi5jb20vc2FtdGhvci9mYXN0LXRleHQtZW5jb2RpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gZGVjb2RlSW1wbChieXRlczogVWludDhBcnJheSk6IHN0cmluZyB7XHJcbiAgbGV0IHBvcyA9IDA7XHJcbiAgY29uc3QgbGVuID0gYnl0ZXMubGVuZ3RoO1xyXG4gIGNvbnN0IG91dDogbnVtYmVyW10gPSBbXTtcclxuICBjb25zdCBzdWJzdHJpbmdzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICB3aGlsZSAocG9zIDwgbGVuKSB7XHJcbiAgICBjb25zdCBieXRlMSA9IGJ5dGVzW3BvcysrXTtcclxuICAgIGlmIChieXRlMSA9PT0gMCkge1xyXG4gICAgICBicmVhazsgLy8gTlVMTFxyXG4gICAgfVxyXG5cclxuICAgIGlmICgoYnl0ZTEgJiAweDgwKSA9PT0gMCkgeyAvLyAxLWJ5dGVcclxuICAgICAgb3V0LnB1c2goYnl0ZTEpO1xyXG4gICAgfSBlbHNlIGlmICgoYnl0ZTEgJiAweGUwKSA9PT0gMHhjMCkgeyAvLyAyLWJ5dGVcclxuICAgICAgY29uc3QgYnl0ZTIgPSBieXRlc1twb3MrK10gJiAweDNmO1xyXG4gICAgICBvdXQucHVzaCgoKGJ5dGUxICYgMHgxZikgPDwgNikgfCBieXRlMik7XHJcbiAgICB9IGVsc2UgaWYgKChieXRlMSAmIDB4ZjApID09PSAweGUwKSB7XHJcbiAgICAgIGNvbnN0IGJ5dGUyID0gYnl0ZXNbcG9zKytdICYgMHgzZjtcclxuICAgICAgY29uc3QgYnl0ZTMgPSBieXRlc1twb3MrK10gJiAweDNmO1xyXG4gICAgICBvdXQucHVzaCgoKGJ5dGUxICYgMHgxZikgPDwgMTIpIHwgKGJ5dGUyIDw8IDYpIHwgYnl0ZTMpO1xyXG4gICAgfSBlbHNlIGlmICgoYnl0ZTEgJiAweGY4KSA9PT0gMHhmMCkge1xyXG4gICAgICBjb25zdCBieXRlMiA9IGJ5dGVzW3BvcysrXSAmIDB4M2Y7XHJcbiAgICAgIGNvbnN0IGJ5dGUzID0gYnl0ZXNbcG9zKytdICYgMHgzZjtcclxuICAgICAgY29uc3QgYnl0ZTQgPSBieXRlc1twb3MrK10gJiAweDNmO1xyXG5cclxuICAgICAgLy8gdGhpcyBjYW4gYmUgPiAweGZmZmYsIHNvIHBvc3NpYmx5IGdlbmVyYXRlIHN1cnJvZ2F0ZXNcclxuICAgICAgbGV0IGNvZGVwb2ludCA9ICgoYnl0ZTEgJiAweDA3KSA8PCAweDEyKSB8IChieXRlMiA8PCAweDBjKSB8IChieXRlMyA8PCAweDA2KSB8IGJ5dGU0O1xyXG4gICAgICBpZiAoY29kZXBvaW50ID4gMHhmZmZmKSB7XHJcbiAgICAgICAgLy8gY29kZXBvaW50ICY9IH4weDEwMDAwO1xyXG4gICAgICAgIGNvZGVwb2ludCAtPSAweDEwMDAwO1xyXG4gICAgICAgIG91dC5wdXNoKChjb2RlcG9pbnQgPj4+IDEwKSAmIDB4M2ZmIHwgMHhkODAwKTtcclxuICAgICAgICBjb2RlcG9pbnQgPSAweGRjMDAgfCBjb2RlcG9pbnQgJiAweDNmZjtcclxuICAgICAgfVxyXG4gICAgICBvdXQucHVzaChjb2RlcG9pbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRklYTUU6IHdlJ3JlIGlnbm9yaW5nIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9zYW10aG9yL2Zhc3QtdGV4dC1lbmNvZGluZy9pc3N1ZXMvMSxcclxuICAgIC8vIG1ha2Ugc3VyZSB0aGUgJ291dCcgYXJyYXkgbmV2ZXIgZ2V0cyB0b28gbG9uZy4gV2hlbiBpdCByZWFjaGVzIGEgbGltaXQsIHdlXHJcbiAgICAvLyBzdHJpbmdpZnkgd2hhdCB3ZSBoYXZlIHNvIGZhciBhbmQgYXBwZW5kIHRvIGEgbGlzdCBvZiBvdXRwdXRzLlxyXG4gICAgaWYgKG91dC5sZW5ndGggPiAxMDI0KSB7XHJcbiAgICAgIHN1YnN0cmluZ3MucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG91dCkpO1xyXG4gICAgICBvdXQubGVuZ3RoID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1YnN0cmluZ3MucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG91dCkpO1xyXG4gIHJldHVybiBzdWJzdHJpbmdzLmpvaW4oJycpO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2UgKi9cclxuaW1wb3J0ICcuLi9QbGF0Zm9ybS9QbGF0Zm9ybSc7XHJcbmltcG9ydCAnLi4vRW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJCYXRjaCB9IGZyb20gJy4vUmVuZGVyQmF0Y2gvUmVuZGVyQmF0Y2gnO1xyXG5pbXBvcnQgeyBCcm93c2VyUmVuZGVyZXIgfSBmcm9tICcuL0Jyb3dzZXJSZW5kZXJlcic7XHJcbmltcG9ydCB7IHRvTG9naWNhbEVsZW1lbnQsIExvZ2ljYWxFbGVtZW50IH0gZnJvbSAnLi9Mb2dpY2FsRWxlbWVudHMnO1xyXG5cclxuaW50ZXJmYWNlIEJyb3dzZXJSZW5kZXJlclJlZ2lzdHJ5IHtcclxuICBbYnJvd3NlclJlbmRlcmVySWQ6IG51bWJlcl06IEJyb3dzZXJSZW5kZXJlcjtcclxufVxyXG5jb25zdCBicm93c2VyUmVuZGVyZXJzOiBCcm93c2VyUmVuZGVyZXJSZWdpc3RyeSA9IHt9O1xyXG5sZXQgc2hvdWxkUmVzZXRTY3JvbGxBZnRlck5leHRCYXRjaCA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaFJvb3RDb21wb25lbnRUb0xvZ2ljYWxFbGVtZW50KGJyb3dzZXJSZW5kZXJlcklkOiBudW1iZXIsIGxvZ2ljYWxFbGVtZW50OiBMb2dpY2FsRWxlbWVudCwgY29tcG9uZW50SWQ6IG51bWJlcik6IHZvaWQge1xyXG4gIGxldCBicm93c2VyUmVuZGVyZXIgPSBicm93c2VyUmVuZGVyZXJzW2Jyb3dzZXJSZW5kZXJlcklkXTtcclxuICBpZiAoIWJyb3dzZXJSZW5kZXJlcikge1xyXG4gICAgYnJvd3NlclJlbmRlcmVyID0gYnJvd3NlclJlbmRlcmVyc1ticm93c2VyUmVuZGVyZXJJZF0gPSBuZXcgQnJvd3NlclJlbmRlcmVyKGJyb3dzZXJSZW5kZXJlcklkKTtcclxuICB9XHJcblxyXG4gIGJyb3dzZXJSZW5kZXJlci5hdHRhY2hSb290Q29tcG9uZW50VG9Mb2dpY2FsRWxlbWVudChjb21wb25lbnRJZCwgbG9naWNhbEVsZW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoUm9vdENvbXBvbmVudFRvRWxlbWVudChlbGVtZW50U2VsZWN0b3I6IHN0cmluZywgY29tcG9uZW50SWQ6IG51bWJlciwgYnJvd3NlclJlbmRlcmVySWQ/OiBudW1iZXIpOiB2b2lkIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50U2VsZWN0b3IpO1xyXG4gIGlmICghZWxlbWVudCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhbnkgZWxlbWVudCBtYXRjaGluZyBzZWxlY3RvciAnJHtlbGVtZW50U2VsZWN0b3J9Jy5gKTtcclxuICB9XHJcblxyXG4gIC8vICdhbGxvd0V4aXN0aW5nQ29udGVudHMnIHRvIGtlZXAgYW55IHByZXJlbmRlcmVkIGNvbnRlbnQgdW50aWwgd2UgZG8gdGhlIGZpcnN0IGNsaWVudC1zaWRlIHJlbmRlclxyXG4gIC8vIE9ubHkgY2xpZW50LXNpZGUgQmxhem9yIHN1cHBsaWVzIGEgYnJvd3NlciByZW5kZXJlciBJRFxyXG4gIGF0dGFjaFJvb3RDb21wb25lbnRUb0xvZ2ljYWxFbGVtZW50KGJyb3dzZXJSZW5kZXJlcklkIHx8IDAsIHRvTG9naWNhbEVsZW1lbnQoZWxlbWVudCwgLyogYWxsb3cgZXhpc3RpbmcgY29udGVudHMgKi8gdHJ1ZSksIGNvbXBvbmVudElkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJhdGNoKGJyb3dzZXJSZW5kZXJlcklkOiBudW1iZXIsIGJhdGNoOiBSZW5kZXJCYXRjaCk6IHZvaWQge1xyXG4gIGNvbnN0IGJyb3dzZXJSZW5kZXJlciA9IGJyb3dzZXJSZW5kZXJlcnNbYnJvd3NlclJlbmRlcmVySWRdO1xyXG4gIGlmICghYnJvd3NlclJlbmRlcmVyKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vIGJyb3dzZXIgcmVuZGVyZXIgd2l0aCBJRCAke2Jyb3dzZXJSZW5kZXJlcklkfS5gKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFycmF5UmFuZ2VSZWFkZXIgPSBiYXRjaC5hcnJheVJhbmdlUmVhZGVyO1xyXG4gIGNvbnN0IHVwZGF0ZWRDb21wb25lbnRzUmFuZ2UgPSBiYXRjaC51cGRhdGVkQ29tcG9uZW50cygpO1xyXG4gIGNvbnN0IHVwZGF0ZWRDb21wb25lbnRzVmFsdWVzID0gYXJyYXlSYW5nZVJlYWRlci52YWx1ZXModXBkYXRlZENvbXBvbmVudHNSYW5nZSk7XHJcbiAgY29uc3QgdXBkYXRlZENvbXBvbmVudHNMZW5ndGggPSBhcnJheVJhbmdlUmVhZGVyLmNvdW50KHVwZGF0ZWRDb21wb25lbnRzUmFuZ2UpO1xyXG4gIGNvbnN0IHJlZmVyZW5jZUZyYW1lcyA9IGJhdGNoLnJlZmVyZW5jZUZyYW1lcygpO1xyXG4gIGNvbnN0IHJlZmVyZW5jZUZyYW1lc1ZhbHVlcyA9IGFycmF5UmFuZ2VSZWFkZXIudmFsdWVzKHJlZmVyZW5jZUZyYW1lcyk7XHJcbiAgY29uc3QgZGlmZlJlYWRlciA9IGJhdGNoLmRpZmZSZWFkZXI7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlZENvbXBvbmVudHNMZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZGlmZiA9IGJhdGNoLnVwZGF0ZWRDb21wb25lbnRzRW50cnkodXBkYXRlZENvbXBvbmVudHNWYWx1ZXMsIGkpO1xyXG4gICAgY29uc3QgY29tcG9uZW50SWQgPSBkaWZmUmVhZGVyLmNvbXBvbmVudElkKGRpZmYpO1xyXG4gICAgY29uc3QgZWRpdHMgPSBkaWZmUmVhZGVyLmVkaXRzKGRpZmYpO1xyXG4gICAgYnJvd3NlclJlbmRlcmVyLnVwZGF0ZUNvbXBvbmVudChiYXRjaCwgY29tcG9uZW50SWQsIGVkaXRzLCByZWZlcmVuY2VGcmFtZXNWYWx1ZXMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlzcG9zZWRDb21wb25lbnRJZHNSYW5nZSA9IGJhdGNoLmRpc3Bvc2VkQ29tcG9uZW50SWRzKCk7XHJcbiAgY29uc3QgZGlzcG9zZWRDb21wb25lbnRJZHNWYWx1ZXMgPSBhcnJheVJhbmdlUmVhZGVyLnZhbHVlcyhkaXNwb3NlZENvbXBvbmVudElkc1JhbmdlKTtcclxuICBjb25zdCBkaXNwb3NlZENvbXBvbmVudElkc0xlbmd0aCA9IGFycmF5UmFuZ2VSZWFkZXIuY291bnQoZGlzcG9zZWRDb21wb25lbnRJZHNSYW5nZSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNwb3NlZENvbXBvbmVudElkc0xlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBjb21wb25lbnRJZCA9IGJhdGNoLmRpc3Bvc2VkQ29tcG9uZW50SWRzRW50cnkoZGlzcG9zZWRDb21wb25lbnRJZHNWYWx1ZXMsIGkpO1xyXG4gICAgYnJvd3NlclJlbmRlcmVyLmRpc3Bvc2VDb21wb25lbnQoY29tcG9uZW50SWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlzcG9zZWRFdmVudEhhbmRsZXJJZHNSYW5nZSA9IGJhdGNoLmRpc3Bvc2VkRXZlbnRIYW5kbGVySWRzKCk7XHJcbiAgY29uc3QgZGlzcG9zZWRFdmVudEhhbmRsZXJJZHNWYWx1ZXMgPSBhcnJheVJhbmdlUmVhZGVyLnZhbHVlcyhkaXNwb3NlZEV2ZW50SGFuZGxlcklkc1JhbmdlKTtcclxuICBjb25zdCBkaXNwb3NlZEV2ZW50SGFuZGxlcklkc0xlbmd0aCA9IGFycmF5UmFuZ2VSZWFkZXIuY291bnQoZGlzcG9zZWRFdmVudEhhbmRsZXJJZHNSYW5nZSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNwb3NlZEV2ZW50SGFuZGxlcklkc0xlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBldmVudEhhbmRsZXJJZCA9IGJhdGNoLmRpc3Bvc2VkRXZlbnRIYW5kbGVySWRzRW50cnkoZGlzcG9zZWRFdmVudEhhbmRsZXJJZHNWYWx1ZXMsIGkpO1xyXG4gICAgYnJvd3NlclJlbmRlcmVyLmRpc3Bvc2VFdmVudEhhbmRsZXIoZXZlbnRIYW5kbGVySWQpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRTY3JvbGxJZk5lZWRlZCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRTY3JvbGxBZnRlck5leHRCYXRjaCgpIHtcclxuICBzaG91bGRSZXNldFNjcm9sbEFmdGVyTmV4dEJhdGNoID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRTY3JvbGxJZk5lZWRlZCgpIHtcclxuICBpZiAoc2hvdWxkUmVzZXRTY3JvbGxBZnRlck5leHRCYXRjaCkge1xyXG4gICAgc2hvdWxkUmVzZXRTY3JvbGxBZnRlck5leHRCYXRjaCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIFRoaXMgYXNzdW1lcyB0aGUgc2Nyb2xsZXIgaXMgb24gdGhlIHdpbmRvdyBpdHNlbGYuIFRoZXJlIGlzbid0IGEgZ2VuZXJhbCB3YXkgdG8ga25vd1xyXG4gICAgLy8gaWYgc29tZSBvdGhlciBlbGVtZW50IGlzIHBsYXlpbmcgdGhlIHJvbGUgb2YgdGhlIHByaW1hcnkgc2Nyb2xsIHJlZ2lvbi5cclxuICAgIHdpbmRvdy5zY3JvbGxUbyAmJiB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50RGVzY3JpcHRvciB9IGZyb20gJy4vQnJvd3NlclJlbmRlcmVyJztcclxuaW1wb3J0IHsgVUlFdmVudEFyZ3MgfSBmcm9tICcuL0V2ZW50Rm9yRG90TmV0JztcclxuXHJcbnR5cGUgRXZlbnREaXNwYXRjaGVyID0gKGV2ZW50RGVzY3JpcHRvcjogRXZlbnREZXNjcmlwdG9yLCBldmVudEFyZ3M6IFVJRXZlbnRBcmdzKSA9PiB2b2lkO1xyXG5cclxubGV0IGV2ZW50RGlzcGF0Y2hlckluc3RhbmNlOiBFdmVudERpc3BhdGNoZXI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChldmVudERlc2NyaXB0b3I6IEV2ZW50RGVzY3JpcHRvciwgZXZlbnRBcmdzOiBVSUV2ZW50QXJncyk6IHZvaWQge1xyXG4gIGlmICghZXZlbnREaXNwYXRjaGVySW5zdGFuY2UpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignZXZlbnREaXNwYXRjaGVyIG5vdCBpbml0aWFsaXplZC4gQ2FsbCBcXCdzZXRFdmVudERpc3BhdGNoZXJcXCcgdG8gY29uZmlndXJlIGl0LicpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGV2ZW50RGlzcGF0Y2hlckluc3RhbmNlKGV2ZW50RGVzY3JpcHRvciwgZXZlbnRBcmdzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEV2ZW50RGlzcGF0Y2hlcihuZXdEaXNwYXRjaGVyOiAoZXZlbnREZXNjcmlwdG9yOiBFdmVudERlc2NyaXB0b3IsIGV2ZW50QXJnczogVUlFdmVudEFyZ3MpID0+IFByb21pc2U8dm9pZD4pOiB2b2lkIHtcclxuICBldmVudERpc3BhdGNoZXJJbnN0YW5jZSA9IG5ld0Rpc3BhdGNoZXI7XHJcbn1cclxuIiwiLy8gaW1wb3J0ICdAZG90bmV0L2pzaW50ZXJvcCc7IEltcG9ydGVkIGVsc2V3aGVyZVxyXG5pbXBvcnQgeyByZXNldFNjcm9sbEFmdGVyTmV4dEJhdGNoIH0gZnJvbSAnLi4vUmVuZGVyaW5nL1JlbmRlcmVyJztcclxuaW1wb3J0IHsgRXZlbnREZWxlZ2F0b3IgfSBmcm9tICcuLi9SZW5kZXJpbmcvRXZlbnREZWxlZ2F0b3InO1xyXG5cclxubGV0IGhhc0VuYWJsZWROYXZpZ2F0aW9uSW50ZXJjZXB0aW9uID0gZmFsc2U7XHJcbmxldCBoYXNSZWdpc3RlcmVkTmF2aWdhdGlvbkV2ZW50TGlzdGVuZXJzID0gZmFsc2U7XHJcblxyXG4vLyBXaWxsIGJlIGluaXRpYWxpemVkIG9uY2Ugc29tZW9uZSByZWdpc3RlcnNcclxubGV0IG5vdGlmeUxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrOiAoKHVyaTogc3RyaW5nLCBpbnRlcmNlcHRlZDogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPikgfCBudWxsID0gbnVsbDtcclxuXHJcbi8vIFRoZXNlIGFyZSB0aGUgZnVuY3Rpb25zIHdlJ3JlIG1ha2luZyBhdmFpbGFibGUgZm9yIGludm9jYXRpb24gZnJvbSAuTkVUXHJcbmV4cG9ydCBjb25zdCBpbnRlcm5hbEZ1bmN0aW9ucyA9IHtcclxuICBsaXN0ZW5Gb3JOYXZpZ2F0aW9uRXZlbnRzLFxyXG4gIGVuYWJsZU5hdmlnYXRpb25JbnRlcmNlcHRpb24sXHJcbiAgbmF2aWdhdGVUbyxcclxuICBnZXRCYXNlVVJJOiAoKSA9PiBkb2N1bWVudC5iYXNlVVJJLFxyXG4gIGdldExvY2F0aW9uSHJlZjogKCkgPT4gbG9jYXRpb24uaHJlZixcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxpc3RlbkZvck5hdmlnYXRpb25FdmVudHMoY2FsbGJhY2s6ICh1cmk6IHN0cmluZywgaW50ZXJjZXB0ZWQ6IGJvb2xlYW4pID0+IFByb21pc2U8dm9pZD4pIHtcclxuICBub3RpZnlMb2NhdGlvbkNoYW5nZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG5cclxuICBpZiAoaGFzUmVnaXN0ZXJlZE5hdmlnYXRpb25FdmVudExpc3RlbmVycykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaGFzUmVnaXN0ZXJlZE5hdmlnYXRpb25FdmVudExpc3RlbmVycyA9IHRydWU7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4gbm90aWZ5TG9jYXRpb25DaGFuZ2VkKGZhbHNlKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZU5hdmlnYXRpb25JbnRlcmNlcHRpb24oKSB7XHJcbiAgaGFzRW5hYmxlZE5hdmlnYXRpb25JbnRlcmNlcHRpb24gPSB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoVG9FdmVudERlbGVnYXRvcihldmVudERlbGVnYXRvcjogRXZlbnREZWxlZ2F0b3IpIHtcclxuICAvLyBXZSBuZWVkIHRvIHJlc3BvbmQgdG8gY2xpY2tzIG9uIDxhPiBlbGVtZW50cyAqYWZ0ZXIqIHRoZSBFdmVudERlbGVnYXRvciBoYXMgZmluaXNoZWRcclxuICAvLyBydW5uaW5nIGl0cyBzaW11bGF0ZWQgYnViYmxpbmcgcHJvY2VzcyBzbyB0aGF0IHdlIGNhbiByZXNwZWN0IGFueSBwcmV2ZW50RGVmYXVsdCByZXF1ZXN0cy5cclxuICAvLyBTbyBpbnN0ZWFkIG9mIHJlZ2lzdGVyaW5nIG91ciBvd24gbmF0aXZlIGV2ZW50LCByZWdpc3RlciB1c2luZyB0aGUgRXZlbnREZWxlZ2F0b3IuXHJcbiAgZXZlbnREZWxlZ2F0b3Iubm90aWZ5QWZ0ZXJDbGljayhldmVudCA9PiB7XHJcbiAgICBpZiAoIWhhc0VuYWJsZWROYXZpZ2F0aW9uSW50ZXJjZXB0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwIHx8IGV2ZW50SGFzU3BlY2lhbEtleShldmVudCkpIHtcclxuICAgICAgLy8gRG9uJ3Qgc3RvcCBjdHJsL21ldGEtY2xpY2sgKGV0YykgZnJvbSBvcGVuaW5nIGxpbmtzIGluIG5ldyB0YWJzL3dpbmRvd3NcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnRlcmNlcHQgY2xpY2tzIG9uIGFsbCA8YT4gZWxlbWVudHMgd2hlcmUgdGhlIGhyZWYgaXMgd2l0aGluIHRoZSA8YmFzZSBocmVmPiBVUkkgc3BhY2VcclxuICAgIC8vIFdlIG11c3QgZXhwbGljaXRseSBjaGVjayBpZiBpdCBoYXMgYW4gJ2hyZWYnIGF0dHJpYnV0ZSwgYmVjYXVzZSBpZiBpdCBkb2Vzbid0LCB0aGUgcmVzdWx0IG1pZ2h0IGJlIG51bGwgb3IgYW4gZW1wdHkgc3RyaW5nIGRlcGVuZGluZyBvbiB0aGUgYnJvd3NlclxyXG4gICAgY29uc3QgYW5jaG9yVGFyZ2V0ID0gZmluZENsb3Nlc3RBbmNlc3RvcihldmVudC50YXJnZXQgYXMgRWxlbWVudCB8IG51bGwsICdBJykgYXMgSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsO1xyXG4gICAgY29uc3QgaHJlZkF0dHJpYnV0ZU5hbWUgPSAnaHJlZic7XHJcbiAgICBpZiAoYW5jaG9yVGFyZ2V0ICYmIGFuY2hvclRhcmdldC5oYXNBdHRyaWJ1dGUoaHJlZkF0dHJpYnV0ZU5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEF0dHJpYnV0ZVZhbHVlID0gYW5jaG9yVGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFyZ2V0Jyk7XHJcbiAgICAgIGNvbnN0IG9wZW5zSW5TYW1lRnJhbWUgPSAhdGFyZ2V0QXR0cmlidXRlVmFsdWUgfHwgdGFyZ2V0QXR0cmlidXRlVmFsdWUgPT09ICdfc2VsZic7XHJcbiAgICAgIGlmICghb3BlbnNJblNhbWVGcmFtZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaHJlZiA9IGFuY2hvclRhcmdldC5nZXRBdHRyaWJ1dGUoaHJlZkF0dHJpYnV0ZU5hbWUpITtcclxuICAgICAgY29uc3QgYWJzb2x1dGVIcmVmID0gdG9BYnNvbHV0ZVVyaShocmVmKTtcclxuXHJcbiAgICAgIGlmIChpc1dpdGhpbkJhc2VVcmlTcGFjZShhYnNvbHV0ZUhyZWYpKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwZXJmb3JtSW50ZXJuYWxOYXZpZ2F0aW9uKGFic29sdXRlSHJlZiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlVG8odXJpOiBzdHJpbmcsIGZvcmNlTG9hZDogYm9vbGVhbikge1xyXG4gIGNvbnN0IGFic29sdXRlVXJpID0gdG9BYnNvbHV0ZVVyaSh1cmkpO1xyXG5cclxuICBpZiAoIWZvcmNlTG9hZCAmJiBpc1dpdGhpbkJhc2VVcmlTcGFjZShhYnNvbHV0ZVVyaSkpIHtcclxuICAgIC8vIEl0J3MgYW4gaW50ZXJuYWwgVVJMLCBzbyBkbyBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uXHJcbiAgICBwZXJmb3JtSW50ZXJuYWxOYXZpZ2F0aW9uKGFic29sdXRlVXJpLCBmYWxzZSk7XHJcbiAgfSBlbHNlIGlmIChmb3JjZUxvYWQgJiYgbG9jYXRpb24uaHJlZiA9PT0gdXJpKSB7XHJcbiAgICAvLyBGb3JjZS1sb2FkaW5nIHRoZSBzYW1lIFVSTCB5b3UncmUgYWxyZWFkeSBvbiByZXF1aXJlcyBzcGVjaWFsIGhhbmRsaW5nIHRvIGF2b2lkXHJcbiAgICAvLyB0cmlnZ2VyaW5nIGJyb3dzZXItc3BlY2lmaWMgYmVoYXZpb3IgaXNzdWVzLlxyXG4gICAgLy8gRm9yIGRldGFpbHMgYWJvdXQgd2hhdCB0aGlzIGZpeGVzIGFuZCB3aHksIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYXNwbmV0L0FzcE5ldENvcmUvcHVsbC8xMDgzOVxyXG4gICAgY29uc3QgdGVtcG9yYXJ5VXJpID0gdXJpICsgJz8nO1xyXG4gICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgJycsIHRlbXBvcmFyeVVyaSk7XHJcbiAgICBsb2NhdGlvbi5yZXBsYWNlKHVyaSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEl0J3MgZWl0aGVyIGFuIGV4dGVybmFsIFVSTCwgb3IgZm9yY2VMb2FkIGlzIHJlcXVlc3RlZCwgc28gZG8gYSBmdWxsIHBhZ2UgbG9hZFxyXG4gICAgbG9jYXRpb24uaHJlZiA9IHVyaTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBlcmZvcm1JbnRlcm5hbE5hdmlnYXRpb24oYWJzb2x1dGVJbnRlcm5hbEhyZWY6IHN0cmluZywgaW50ZXJjZXB0ZWRMaW5rOiBib29sZWFuKSB7XHJcbiAgLy8gU2luY2UgdGhpcyB3YXMgKm5vdCogdHJpZ2dlcmVkIGJ5IGEgYmFjay9mb3J3YXJkIGdlc3R1cmUgKHRoYXQgZ29lcyB0aHJvdWdoIGEgZGlmZmVyZW50XHJcbiAgLy8gY29kZSBwYXRoIHN0YXJ0aW5nIHdpdGggYSBwb3BzdGF0ZSBldmVudCksIHdlIGRvbid0IHdhbnQgdG8gcHJlc2VydmUgdGhlIGN1cnJlbnQgc2Nyb2xsXHJcbiAgLy8gcG9zaXRpb24sIHNvIHJlc2V0IGl0LlxyXG4gIC8vIFRvIGF2b2lkIHVnbHkgZmxpY2tlcmluZyBlZmZlY3RzLCB3ZSBkb24ndCB3YW50IHRvIGNoYW5nZSB0aGUgc2Nyb2xsIHBvc2l0aW9uIHVudGlsIHRoZVxyXG4gIC8vIHdlIHJlbmRlciB0aGUgbmV3IHBhZ2UuIEFzIGEgYmVzdCBhcHByb3hpbWF0aW9uLCB3YWl0IHVudGlsIHRoZSBuZXh0IGJhdGNoLlxyXG4gIHJlc2V0U2Nyb2xsQWZ0ZXJOZXh0QmF0Y2goKTtcclxuXHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgLyogaWdub3JlZCB0aXRsZSAqLyAnJywgYWJzb2x1dGVJbnRlcm5hbEhyZWYpO1xyXG4gIG5vdGlmeUxvY2F0aW9uQ2hhbmdlZChpbnRlcmNlcHRlZExpbmspO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBub3RpZnlMb2NhdGlvbkNoYW5nZWQoaW50ZXJjZXB0ZWRMaW5rOiBib29sZWFuKSB7XHJcbiAgaWYgKG5vdGlmeUxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrKSB7XHJcbiAgICBhd2FpdCBub3RpZnlMb2NhdGlvbkNoYW5nZWRDYWxsYmFjayhsb2NhdGlvbi5ocmVmLCBpbnRlcmNlcHRlZExpbmspO1xyXG4gIH1cclxufVxyXG5cclxubGV0IHRlc3RBbmNob3I6IEhUTUxBbmNob3JFbGVtZW50O1xyXG5mdW5jdGlvbiB0b0Fic29sdXRlVXJpKHJlbGF0aXZlVXJpOiBzdHJpbmcpIHtcclxuICB0ZXN0QW5jaG9yID0gdGVzdEFuY2hvciB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgdGVzdEFuY2hvci5ocmVmID0gcmVsYXRpdmVVcmk7XHJcbiAgcmV0dXJuIHRlc3RBbmNob3IuaHJlZjtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZENsb3Nlc3RBbmNlc3RvcihlbGVtZW50OiBFbGVtZW50IHwgbnVsbCwgdGFnTmFtZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuICFlbGVtZW50XHJcbiAgICA/IG51bGxcclxuICAgIDogZWxlbWVudC50YWdOYW1lID09PSB0YWdOYW1lXHJcbiAgICAgID8gZWxlbWVudFxyXG4gICAgICA6IGZpbmRDbG9zZXN0QW5jZXN0b3IoZWxlbWVudC5wYXJlbnRFbGVtZW50LCB0YWdOYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNXaXRoaW5CYXNlVXJpU3BhY2UoaHJlZjogc3RyaW5nKSB7XHJcbiAgY29uc3QgYmFzZVVyaVdpdGhUcmFpbGluZ1NsYXNoID0gdG9CYXNlVXJpV2l0aFRyYWlsaW5nU2xhc2goZG9jdW1lbnQuYmFzZVVSSSEpOyAvLyBUT0RPOiBNaWdodCBiYXNlVVJJIHJlYWxseSBiZSBudWxsP1xyXG4gIHJldHVybiBocmVmLnN0YXJ0c1dpdGgoYmFzZVVyaVdpdGhUcmFpbGluZ1NsYXNoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9CYXNlVXJpV2l0aFRyYWlsaW5nU2xhc2goYmFzZVVyaTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGJhc2VVcmkuc3Vic3RyKDAsIGJhc2VVcmkubGFzdEluZGV4T2YoJy8nKSArIDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBldmVudEhhc1NwZWNpYWxLZXkoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICByZXR1cm4gZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubWV0YUtleTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
/******/ 	__webpack_require__.p = "/lib/fundscanner/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/marketing/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ibkr/clientportal.common/src/js/settings.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ibkr/clientportal.common/src/js/settings.js ***!
  \*******************************************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Should be moved to app.common.
 *
 * Will be migrated to store settings online. Either AWS or IB.
 */
var LAST_ACCOUNT = '.lastaccount';
var PERFORMANCE_WIDGET_KEY = '.pw-period';
var PORTFOLIO_VIEW = '.pmview';
var SHOW_VIRTUAL_FX = '.show-virtual-fx';
var SHOW_IN_BASE = '.show-in-base';
var MO_INDEX_CHART = '.mo-index-chart';
var MO_PERFORMANCE_REGION = '.mo-performance-region';
var MO_GAINERS_LOSERS_REGION = '.mo-gainers-losers-region';
var MO_MARKET_SCANNER_REGION = '.mo-market-scanner-region';
var SHOW_TRADE_NOTIFICATION = '.show-trade-notification';
var PRIVACY_MODE = '.privacy-mode';
var HIDE_GETTING_STARTED = '.hide-getting-started';
var NOTIFICATION_PREFS = '.notification-prefs';
var RECENT_SEARCH = '.recent-search';
var TELEMETRY_SSTM = '.telemetry-sstm';
var PERFORMANCE_CHART_SELECTION = '.performance-chart-selection';
var TELEMETRY_COMPONENTS = '.telemetry-components';

function store_(key, value, cb) {
  var username = window.username;
  var realKey = username + key;
  localStorage.setItem(realKey, value);
  if (cb) cb(true);
}

function retrieve_(key, cb) {
  var json = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var username = window.username;
  var realKey = username + key;

  if (cb) {
    cb(json ? JSON.parse(localStorage.getItem(realKey)) : localStorage.getItem(realKey));
  }
}

var Settings = {
  get: function get(key, def) {
    return new Promise(function (resolve, reject) {
      var username = window.username;

      if (!username) {
        reject('no username');
      } else {
        var obj = localStorage.getItem(username + '.' + key);

        if ( true && process.env.DEBUG_STORE) {
          console.debug('settings:get', username, key, obj);
        }

        if (obj === null || obj === undefined) {
          // if defaut value is provided, store it in local storage and return same
          if (def !== null && def !== undefined) {
            if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') {
              localStorage.setItem(username + '.' + key, JSON.stringify(def));
            } else {
              localStorage.setItem(username + '.' + key, def);
            }

            resolve(def);
          } else {
            reject('null');
          }
        } else {
          var ret = obj;

          try {
            ret = JSON.parse(obj);
          } catch (e) {// noop
          }

          resolve(ret);
        }
      }
    });
  },
  store: function store(key, value) {
    var username = window.username;
    return new Promise(function (resolve, reject) {
      if (!username) {
        reject('no username');
      } else {
        if ( true && process.env.DEBUG_STORE) {
          console.debug('settings:store', username, key, value);
        }

        if (_typeof(value) === 'object') {
          localStorage.setItem(username + '.' + key, JSON.stringify(value));
        } else {
          localStorage.setItem(username + '.' + key, value);
        }

        resolve(value);
      }
    });
  },
  getPortfolioView: function getPortfolioView(callback) {
    retrieve_(PORTFOLIO_VIEW, callback);
  },
  savePortfolioView: function savePortfolioView(view) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    store_(PORTFOLIO_VIEW, view, callback);
  },
  getAccountSelection: function getAccountSelection(callback) {
    retrieve_(LAST_ACCOUNT, callback, true);
  },
  saveAccountSelection: function saveAccountSelection(account) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    store_(LAST_ACCOUNT, JSON.stringify(account), callback);
  },
  getPerformanceWidgetPeriod: function getPerformanceWidgetPeriod() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(PERFORMANCE_WIDGET_KEY, callback, false);
  },
  savePerformanceWidgetPeriod: function savePerformanceWidgetPeriod(val) {
    store_(PERFORMANCE_WIDGET_KEY, val);
  },
  getShowVirtualFX: function getShowVirtualFX() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(SHOW_VIRTUAL_FX, callback, false);
  },
  saveShowVirtualFX: function saveShowVirtualFX(val) {
    store_(SHOW_VIRTUAL_FX, val);
  },
  getShowInBase: function getShowInBase() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(SHOW_IN_BASE, callback, false);
  },
  saveShowInBase: function saveShowInBase(val) {
    store_(SHOW_IN_BASE, val);
  },

  /**
   * Market Overview: Index Chart
   */
  getIndexChartData: function getIndexChartData() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(MO_INDEX_CHART, callback, true);
  },
  saveIndexChartData: function saveIndexChartData(val) {
    store_(MO_INDEX_CHART, val);
  },

  /**
   * Market Overview: Performance By Sector
   */
  getPerformanceRegion: function getPerformanceRegion() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(MO_PERFORMANCE_REGION, callback, false);
  },
  savePerformanceRegion: function savePerformanceRegion(val) {
    store_(MO_PERFORMANCE_REGION, val);
  },

  /**
   * Market Overview: Gainers & Losers
   */
  getGainersLosersRegion: function getGainersLosersRegion() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(MO_GAINERS_LOSERS_REGION, callback, false);
  },
  saveGainersLosersRegion: function saveGainersLosersRegion(val) {
    store_(MO_GAINERS_LOSERS_REGION, val);
  },

  /**
   * Market Overview: Market Scanner
   */
  getMarketScannerRegion: function getMarketScannerRegion() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(MO_MARKET_SCANNER_REGION, callback, false);
  },
  saveMarketScannerRegion: function saveMarketScannerRegion(val) {
    store_(MO_MARKET_SCANNER_REGION, val);
  },
  getShowTradeNotification: function getShowTradeNotification() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(SHOW_TRADE_NOTIFICATION, callback, false);
  },
  saveShowTradeNotification: function saveShowTradeNotification(val) {
    Settings.store(SHOW_TRADE_NOTIFICATION, val);
  },
  getHideGettingStarted: function getHideGettingStarted() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(HIDE_GETTING_STARTED, callback, false);
  },
  saveHideGettingStarted: function saveHideGettingStarted(val) {
    store_(HIDE_GETTING_STARTED, val);
  },
  getNotificationPrefs: function getNotificationPrefs() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(NOTIFICATION_PREFS, callback, true);
  },

  /**
   * Contains key-value pair where key is notification id and value is boolean.
   * If value is true for the key, notification for that id should not be displayed
   */
  saveNotificationPrefs: function saveNotificationPrefs(val) {
    store_(NOTIFICATION_PREFS, val);
  },
  getPrivacyMode: function getPrivacyMode() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(PRIVACY_MODE, callback, false);
  },
  savePrivacyMode: function savePrivacyMode(val) {
    store_(PRIVACY_MODE, val);
  },
  saveRecentSearch: function saveRecentSearch(val) {
    store_(RECENT_SEARCH, val);
  },
  getRecentSearch: function getRecentSearch() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(RECENT_SEARCH, callback, false);
  },
  saveTelemetrySstm: function saveTelemetrySstm(val) {
    store_(TELEMETRY_SSTM, val);
  },
  getTelemetrySstm: function getTelemetrySstm() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(TELEMETRY_SSTM, callback, false);
  },
  savePerfChartSelection: function savePerfChartSelection(val) {
    store_(PERFORMANCE_CHART_SELECTION, val);
  },
  getPerfChartSelection: function getPerfChartSelection() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(PERFORMANCE_CHART_SELECTION, callback, false);
  },
  saveTelemetryComponents: function saveTelemetryComponents(val) {
    store_(TELEMETRY_COMPONENTS, val);
  },
  getTelemetryComponents: function getTelemetryComponents() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    retrieve_(TELEMETRY_COMPONENTS, callback, false);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");

var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");

var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");

var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false; // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.

    if ( true && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;

      request.onprogress = function handleProgress() {};

      request.ontimeout = function handleTimeout() {};
    } // HTTP basic authentication


    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js"); // Add xsrf header


      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (config.withCredentials) {
      request.withCredentials = true;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");

var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

axios.Axios = Axios; // Factory for creating new instances

axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js"); // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");
module.exports = axios; // Allow use of default import syntax in TypeScript

module.exports.default = axios;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");

var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");

var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {
    method: 'get'
  }, this.defaults, config);
  config.method = config.method.toLowerCase(); // Hook up interceptors middleware

  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
module.exports = Axios;

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");

var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");

var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Support baseURL config

  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  } // Ensure headers exist


  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  return error;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus; // Note: status is not exposed by XDomainRequest

  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}

E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';

  for ( // initialize result and counter
  var block, charCode, idx = 0, map = chars; // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1); // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);

    if (charCode > 0xFF) {
      throw new E();
    }

    block = block << 8 | charCode;
  }

  return output;
}

module.exports = btoa;

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js"); // Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FundFamily.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FundFamily.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/ */ "./src/api/index.js");
/* harmony import */ var _SelectDrop_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectDrop.vue */ "./src/components/SelectDrop.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FundFamily',
  components: {
    SelectDrop: _SelectDrop_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('fundscanner', ['urlFilters']), {
    defaultFundFamily: function defaultFundFamily() {
      return this.initializeData();
    }
  }),
  data: function data() {
    return {
      fundFamilies: ['All'],
      selected: 'All'
    };
  },
  methods: {
    getFundFamilies: function getFundFamilies() {
      var _this = this;

      _api___WEBPACK_IMPORTED_MODULE_1__["default"].getFundFamilies().then(function (res) {
        _this.fundFamilies = [].concat(_toConsumableArray(_this.fundFamilies), _toConsumableArray(res.families));
        _this.fundFamilies = _this.fundFamilies.map(function (family) {
          return family = {
            value: family,
            label: family
          };
        });
      });
    },
    reset: function reset() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.$refs.selectDrop.reset();

        _this2.selected = 'All';
      });
    },
    showFundFamily: function showFundFamily(selected) {
      this.selected = selected ? selected : this.defaultFundFamily;
      this.$emit('showFundFamily', this.selected);
    },
    initializeData: function initializeData() {
      return this.urlFilters && this.urlFilters.family ? this.urlFilters.family : 'All';
    }
  },
  mounted: function mounted() {
    this.selected = this.initializeData();
    this.getFundFamilies();
    this.$emit('showFundFamily', this.selected);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FundType.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FundType.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FundType',
  data: function data() {
    return {
      selected: 'All',
      fundTypes: [{
        val: 'All',
        label: this.$t('all')
      }, {
        val: 'Alternatives',
        label: this.$t('alternatives')
      }, {
        val: 'Balanced',
        label: this.$t('balanced')
      }, {
        val: 'Bond',
        label: this.$t('bond')
      }, {
        val: 'Commodity',
        label: this.$t('commodity')
      }, {
        val: 'break',
        label: ''
      }, //--using this to break the buttons in two lines
      {
        val: 'Equity',
        label: this.$t('equity')
      }, {
        val: 'Mixed Investments',
        label: this.$t('mixed_investments')
      }, {
        val: 'Money Market',
        label: this.$t('money_market')
      }, {
        val: 'Stock',
        label: this.$t('stock')
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('fundscanner', ['urlFilters'])),
  methods: {
    reset: function reset() {
      this.selected = 'All';
    },
    showFundType: function showFundType() {
      this.$emit('showFundType', this.selected);
    }
  },
  mounted: function mounted() {
    this.selected = this.urlFilters && this.urlFilters.itype ? this.urlFilters.itype : 'All';
    this.showFundType();
  },
  watch: {
    selected: {
      handler: function handler() {
        this.showFundType();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InvestorResidency.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InvestorResidency.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/countries */ "./src/js/countries.js");
/* harmony import */ var _SelectDrop_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectDrop.vue */ "./src/components/SelectDrop.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InvestorResidency',
  components: {
    SelectDrop: _SelectDrop_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      countries: Object(_js_countries__WEBPACK_IMPORTED_MODULE_1__["countries"])(this),
      selected: {
        label: this.$t('USA'),
        value: 'USA'
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('fundscanner', ['urlFilters']), {
    defaultCountry: function defaultCountry() {
      return this.initializeData();
    }
  }),
  methods: {
    reset: function reset() {
      var _this = this;

      this.$nextTick(function () {
        _this.$refs.selectDrop.reset();

        _this.selected = _this.defaultCountry;
      });
    },
    showResidence: function showResidence(selected) {
      var curCountry = this.countries.filter(function (country) {
        return country.value === selected;
      });
      this.selected = selected ? curCountry[0] : this.defaultCountry;
      this.$emit('showResidence', this.selected);
    },
    initializeData: function initializeData() {
      var _this2 = this;

      if (this.urlFilters && this.urlFilters.residency) {
        return this.countries.find(function (country) {
          return country.value === _this2.urlFilters.residency;
        });
      } else {
        return {
          label: this.$t('USA'),
          value: 'USA'
        };
      }
    }
  },
  mounted: function mounted() {
    this.selected = this.initializeData();
    this.$emit('showResidence', this.selected);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MFScanner.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MFScanner.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/ */ "./src/api/index.js");
/* harmony import */ var _ScanFilters_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScanFilters.vue */ "./src/components/ScanFilters.vue");
/* harmony import */ var _SearchResults_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResults.vue */ "./src/components/SearchResults.vue");
/* harmony import */ var _js_countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/countries */ "./src/js/countries.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MFScanner',
  components: {
    ScanFilters: _ScanFilters_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SearchResults: _SearchResults_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      amSession: window.AM_SESSION_ID,
      fields: '',
      filters: '',
      order: [{
        "NAME": "FUND NAME"
      }, {
        "SYMBOL": "SYMBOL"
      }, {
        "FAMILY": "FUND FAMILY"
      }, {
        "INVEST_TYPE": "FUND TYPE"
      }, {
        "EXPENSE_RATIO": "EXPENSE RATIO %"
      }, {
        "TXN": "TRANSACTION FEE"
      }, {
        "LT": "LOAD TYPE"
      }, {
        "MGTFEE": "MANAGEMENT FEES"
      }, {
        "EXPENSE_RATIO": "EXPENSE RATIO %"
      }, {
        "PERF": "PERFORMANCE - YTD"
      }, {
        "LIPPER": "LIPPER RATING"
      }, {
        "SHARPE": "SHARPE RATIO"
      }, {
        "FUND_GEO": "GEOGRAPHICAL FOCUS"
      }, {
        "ESG": "ESG SCORE"
      }, {
        "ASSETS": "ASSETS UNDER MANAGEMENT"
      }, {
        "ISIN": "ISIN"
      }, {
        "CUSIP": "CUSIP"
      }, {
        "SHARE_CLASS": "SHARE CLASS"
      }, {
        "INITIAL_INVEST": "INITIAL INVESTMENT MINIMUM"
      }],
      resultsview: false,
      total: '',
      responses: [],
      signedIn: false,
      downloading: false,
      countries: Object(_js_countries__WEBPACK_IMPORTED_MODULE_3__["countries"])(this),
      checkBoolean: [{
        label: this.$t('yes'),
        value: 'T'
      }, {
        label: this.$t('no'),
        value: 'F'
      }, {
        label: this.$t('all'),
        value: 'All'
      }]
    };
  },
  created: function created() {
    this.getTotalFunds();
    var params = this.$route.query;

    if (params.identifier || params.residency || params.family || params.txnfee || params.itype) {
      var identifier = params.identifier || '';
      var residency = params.residency || 'USA';
      var family = params.family || 'All';
      var txnfee = params.txnfee || 'All';
      var type = params.itype || 'All';
      var page = params.page || 1;
      var curCountry = this.countries.find(function (country) {
        return country.value === residency;
      });
      var curFee = this.checkBoolean.find(function (fee) {
        return fee.value === txnfee;
      });
      var filters = {
        identifier: identifier,
        residency: residency,
        family: family,
        txnfee: txnfee,
        itype: type,
        page: parseInt(page)
      };
      var fundFields = {
        identifier: identifier,
        residence: curCountry.label,
        fundFamily: family,
        transLabel: curFee ? curFee.label : this.$t('all'),
        fundType: type
      };
      this.$store.dispatch('fundscanner/setFiltersFromUrl', filters);
      this.onSubmit(fundFields, filters);
    }
  },
  methods: {
    checkSignedIn: function checkSignedIn(signedIn) {
      this.signedIn = signedIn;
    },
    changeOrder: function changeOrder(row) {
      var newOrder = {};

      for (var i = 0; i < this.order.length; i++) {
        var key = Object.keys(this.order[i]);

        if (row.hasOwnProperty(key)) {
          newOrder[key] = row[key];
        }
      }

      return newOrder;
    },
    downloadData: function downloadData() {
      var _this = this;

      // expense ratio % is in different locations when looking at the table vs downloading table
      this.downloading = true;
      this.filters.page = ''; // Return all results

      _api___WEBPACK_IMPORTED_MODULE_0__["default"].searchFunds(this.filters).then(function (r) {
        _this.responses = r.data;

        if (_this.responses.total === 0) {
          _this.$alert(_this.$t('zero_results'));

          _this.loading = false;
          return;
        }

        var res = _this.responses;
        console.log(res);
        var rows = Object.values(res.funds);
        rows.forEach(function (result) {
          var numTest = /\d/.test(result['SYMBOL']);

          for (var key in result) {
            if (!result[key]) {
              result[key] = 'N/A';
            }
          }

          if (numTest) {
            result['SYMBOL'] = 'N/A';
          }
        });
        rows = rows.map(function (row) {
          return _this.changeOrder(row);
        });
        var columnNames = [];

        _this.order.forEach(function (col) {
          columnNames.push.apply(columnNames, _toConsumableArray(Object.values(col)));
        });

        console.log(columnNames);
        var first = columnNames.slice(0, 4);
        var second = columnNames.slice(5);
        var finalColumns = [].concat(_toConsumableArray(first), _toConsumableArray(second));
        console.log(finalColumns);

        if (!_this.signedIn) {
          finalColumns.length = 6;
        }

        var content = '<table><colgroup>';
        finalColumns.forEach(function (column, i) {
          content += i === 0 ? "<col style='width:400px;'>" : "<col>";
        });
        content += '</colgroup><thead><tr>';
        console.log(finalColumns);
        finalColumns.forEach(function (column, i) {
          if (i === 0) {
            content += "<th style='background:rgb(219,18,34);color:rgb(255,255,255);text-align:center;width:400px;'>".concat(column, "</th>");
          } else {
            content += "<th style='background:rgb(219,18,34);color:rgb(255,255,255);text-align:center;'>".concat(column, "</th>");
          }
        });
        content += '</tr></thead><tbody>';
        rows.forEach(function (row) {
          row = Object.values(row);
          console.log(row);
          var first = row.slice(0, 4);
          var second = row.slice(5, 8);
          var third = row.slice(4, 5);
          var rest = row.slice(8);
          row = [].concat(_toConsumableArray(first), _toConsumableArray(second), _toConsumableArray(third), _toConsumableArray(rest));
          content += '<tr>';
          row.forEach(function (r, i) {
            if (!_this.signedIn) {
              if (i < 6) {
                content += "<td style='text-align:center;'>".concat(r, "</td>");
              }
            } else {
              content += "<td style='text-align:center;'>".concat(r, "</td>");
            }
          });
          content += '</tr>';
        });
        content += '</tbody></table>';
        var dataType = 'data:application/vnd.ms-excel,';
        var filename = 'IBKR_Mutual_Fund_Scanner_Results.xls';
        var link = document.createElement('a');
        link.setAttribute('href', dataType + encodeURIComponent(content));
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        _this.downloading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getTotalFunds: function getTotalFunds() {
      var _this2 = this;

      _api___WEBPACK_IMPORTED_MODULE_0__["default"].getTotalFunds().then(function (res) {
        return _this2.total = res.total;
      });
    },
    logOut: function logOut() {
      _api___WEBPACK_IMPORTED_MODULE_0__["default"].logOut().then(function () {
        window.location.reload();
      })["catch"](function (error) {
        console.log(error);
        console.log("cookie", document.cookie);
      });
    },
    onSubmit: function onSubmit(fundFields, filters) {
      this.fields = fundFields;
      this.filters = filters;
      this.resultsview = true;
    },
    showForm: function showForm() {
      this.resultsview = false;
      this.$router.replace({
        query: {}
      });
    },
    startOver: function startOver() {
      this.showForm();
      this.$refs.scanFilters.resetFilters();
    },
    refresh: function refresh() {
      this.$refs.searchResults.refresh();
    }
  },
  watch: {
    resultsview: {
      handler: function handler(val) {
        window.scrollTo(0, 0);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ScanFilters.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ScanFilters.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InvestorResidency_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvestorResidency.vue */ "./src/components/InvestorResidency.vue");
/* harmony import */ var _FundFamily_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FundFamily.vue */ "./src/components/FundFamily.vue");
/* harmony import */ var _FundType_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FundType.vue */ "./src/components/FundType.vue");
/* harmony import */ var _SubmitForm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubmitForm.vue */ "./src/components/SubmitForm.vue");
/* harmony import */ var _api___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/ */ "./src/api/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ScanFilters',
  components: {
    InvestorResidency: _InvestorResidency_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FundFamily: _FundFamily_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    FundType: _FundType_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SubmitForm: _SubmitForm_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      checkBoolean: [{
        label: this.$t('yes'),
        value: 'T'
      }, {
        label: this.$t('no'),
        value: 'F'
      }, {
        label: this.$t('all'),
        value: 'All'
      }],
      countryLabel: '',
      disabled: true,
      fundFamily: '',
      fundType: '',
      identifier: '',
      residence: '',
      selected: 'All',
      transFee: 'All',
      transLabel: 'All',
      invalidInput: false
    };
  },
  methods: {
    checkFields: function checkFields() {
      this.residence !== '' ? this.disabled = false : this.disabled = true;
    },
    getFundFamily: function getFundFamily(selected) {
      this.fundFamily = selected;
      this.checkFields();
    },
    getFundType: function getFundType(selected) {
      this.fundType = selected;
      this.checkFields();
    },
    getResidence: function getResidence(selected) {
      this.residence = selected;
      this.checkFields();
    },
    getTransFee: function getTransFee() {
      var _this = this;

      this.transFee = this.selected;
      var curFee = this.checkBoolean.filter(function (fee) {
        return fee.value === _this.selected;
      });
      this.transLabel = curFee[0].label;
      this.checkFields();
    },
    clearFiltersInQueryUrl: function clearFiltersInQueryUrl() {
      this.$store.dispatch('fundscanner/setFiltersFromUrl', {});
      this.$router.replace({
        query: {}
      });
    },
    resetFilters: function resetFilters() {
      this.clearFiltersInQueryUrl();
      this.$refs.investorResidency.reset();
      this.$refs.fundFamily.reset();
      this.$refs.fundType.reset();
      this.selected = 'All';
      this.residence = {
        label: this.$t('USA'),
        value: 'USA'
      };
      this.fundFamily = 'All';
      this.transFee = 'All';
      this.transLabel = 'All';
      this.fundType = 'All';
      this.identifier = '';
      this.checkFields();
      this.invalidInput = false;
    },
    submit: function submit() {
      if (this.invalidInput) {
        return false;
      }

      var filters = {
        identifier: this.identifier,
        residency: this.residence.value,
        family: this.fundFamily,
        txnfee: this.transFee,
        itype: this.fundType
      };
      var fundFields = {
        identifier: this.identifier,
        residence: this.residence.label,
        fundFamily: this.fundFamily,
        transLabel: this.transLabel,
        fundType: this.fundType
      };
      this.$emit('onSubmit', fundFields, filters);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('fundscanner', ['urlFilters'])),
  mounted: function mounted() {
    this.identifier = this.urlFilters && this.urlFilters.identifier || '';
    this.selected = this.urlFilters && this.urlFilters.txnfee || 'All';
    this.transFee = 'All';
    this.transLabel = 'All';
  },
  watch: {
    selected: {
      handler: function handler() {
        this.getTransFee();
      }
    },
    identifier: {
      handler: function handler(val) {
        this.invalidInput = /[<>]/.test(val) ? true : false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResults.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchResults.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/ */ "./src/api/index.js");
/* harmony import */ var _ibkr_clientportal_common_src_js_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibkr/clientportal.common/src/js/settings */ "./node_modules/@ibkr/clientportal.common/src/js/settings.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var MAX_ROWS = 50;
var sso = 'https://www.interactivebrokers.com/sso/Login?action=FUNDSCANNER';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SearchResults',
  created: function created() {
    this.$overlay = window.Vue.prototype.$overlay;
    this.checkSignedIn();
  },
  computed: {
    conids: function conids() {
      return this.curResults.map(function (m) {
        return parseInt(m.CONID);
      });
    }
  },
  props: {
    scanFields: Object
  },
  data: function data() {
    return {
      amSession: window.AM_SESSION_ID,
      curPage: 1,
      curResults: [],
      loading: true,
      maxPage: 1,
      MAX_ROWS: MAX_ROWS,
      query: '',
      results: [],
      signedIn: false,
      total: 0,
      firstLoad: true,
      showLoginScreen: false
    };
  },
  methods: {
    addFilters: function addFilters() {
      this.query = new URLSearchParams(this.scanFields).toString();
      window.location.href = "".concat(sso, "&").concat(this.query);
    },
    checkSignedIn: function checkSignedIn() {
      var _this = this;

      if (this.$store.state.isPortal) {
        this.signedIn = true;
        this.$emit('signedIn', this.signedIn);
      } else if (typeof amSession !== 'undefined') {
        this.signedIn = true;
        this.$emit('signedIn', this.signedIn);
      } else {
        _api___WEBPACK_IMPORTED_MODULE_0__["default"].checkCP().then(function (res) {
          if (res && res["RESULT"] === true) {
            _this.signedIn = true;

            _this.$emit('signedIn', _this.signedIn);
          }
        })["catch"](function (error) {
          console.log(error);

          _this.$emit('signedIn', _this.signedIn);
        });
      }
    },
    closeModal: function closeModal() {
      this.showLoginScreen = false;
    },
    getMoreInfo: function getMoreInfo() {
      if (!this.signedIn) {
        this.showLoginScreen = true;
      }
    },
    refresh: function refresh() {
      this.showLoginScreen = false;
      this.curPage = this.scanFields.page ? this.scanFields.page : 1;
      this.curResults = [];
      this.maxPage = 1;
      this.results = [];
      this.total = 0;
      this.search();
      window.scrollTo(0, 0);
    },
    search: function search() {
      var _this2 = this;

      this.loading = true;

      for (var field in this.scanFields) {
        if (this.scanFields[field] === 'All') {
          this.scanFields[field] = '';
        }
      }

      if (!this.scanFields['page'] || !this.firstLoad) {
        this.scanFields['page'] = this.curPage;
      }

      _api___WEBPACK_IMPORTED_MODULE_0__["default"].searchFunds(this.scanFields).then(function (res) {
        res = res.data;

        _this2.$emit('responses', res);

        if (res.total === 0) {
          _this2.$alert(_this2.$t('zero_results'));

          _this2.loading = false;
          return;
        }

        _this2.total = res.total;
        _this2.results = Object.values(res.funds);

        _this2.results.forEach(function (result) {
          var numTest = /\d/.test(result['SYMBOL']);

          for (var key in result) {
            if (!result[key]) {
              result[key] = 'N/A';
            }
          }

          if (numTest) {
            result['SYMBOL'] = 'N/A';
          }
        });

        if (_this2.total > MAX_ROWS) {
          _this2.maxPage = Math.ceil(_this2.total / MAX_ROWS);
        }

        _this2.curResults = _this2.results.length <= MAX_ROWS ? _this2.results : _this2.results.slice(MAX_ROWS * (_this2.curPage - 1), MAX_ROWS * _this2.curPage);
        _this2.loading = false;
      })["catch"](function (error) {
        console.log(error);
        _this2.loading = false;

        _this2.$alert(_this2.$t('not_available'));
      });
    },
    formattedRow: function formattedRow(row) {
      row.conid = parseInt(row.CONID);
      return row;
    },
    //--open Quote details page when in CP
    openQD: function openQD(data) {
      var conid = data && data.row && data.row.CONID;

      if (conid && this.$store.state.isPortal) {
        _ibkr_clientportal_common_src_js_settings__WEBPACK_IMPORTED_MODULE_1__["Settings"].store('context_conids', this.conids);
        this.$router.push({
          path: '/quote',
          query: {
            source: 'mf',
            conid: conid
          }
        });
      }

      if (conid && typeof amSession !== 'undefined') {
        this.$router.push({
          path: '/quote',
          query: {
            source: 'mf',
            conid: conid
          }
        });
      }
    },
    addToWatchlist: function addToWatchlist(pos) {
      if (pos.conid) {
        window.app.addToWatchlist(pos.conid);
      }
    },
    trade: function trade(row, buy) {
      window.onebar.openQuickTradeV2({
        conid: row.conid,
        isBuy: buy,
        referrer: ''
      });
    }
  },
  mounted: function mounted() {
    this.refresh();
    this.firstLoad = false;
  },
  watch: {
    scanFields: {
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.search();
        }
      },
      deep: true,
      immediate: true
    },
    curPage: {
      handler: function handler(newVal, oldVal) {
        window.scrollTo(0, 0);

        if (newVal !== oldVal) {
          this.loading = true;
          this.results = [];
          this.search();
        }
      }
    },
    conids: {
      handler: function handler(val) {
        if (this.$store.state.isPortal && val && val.length > 0) {
          this.$store.dispatch('getSecdefs', {
            conids: val
          });
        }
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SelectDrop.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SelectDrop.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SelectDrop',
  data: function data() {
    return {
      searchFilter: undefined
    };
  },
  methods: {
    selectOption: function selectOption() {
      this.$emit('getSelect', this.searchFilter);
    },
    reset: function reset() {
      this.searchFilter = this.defaultValue;
    }
  },
  props: {
    options: Array,
    defaultValue: String,
    filterFor: String
  },
  mounted: function mounted() {
    this.searchFilter = this.defaultValue;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SubmitForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SubmitForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SubmitForm',
  props: ['disabled'],
  data: function data() {
    return {};
  },
  methods: {
    resetFilter: function resetFilter() {
      this.$emit('onReset');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/marketing/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/marketing/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MFScanner_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MFScanner.vue */ "./src/components/MFScanner.vue");
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'index',
  components: {
    MFScanner: _components_MFScanner_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      translations: {"translations":{"en":{"ABW":"Aruba","AFG":"Afghanistan","AGO":"Angola","AIA":"Anguilla","ALA":"Aland Islands","ALB":"Albania","AND":"Andorra","ANT":"Netherlands Antilles","ARE":"United Arab Emirates","ARG":"Argentina","ARM":"Armenia","ASM":"American Samoa","ATA":"Antarctica","ATG":"Antigua and Barbuda","AUS":"Australia","AUT":"Austria","AZE":"Azerbaijan","BDI":"Burundi","BEL":"Belgium","BEN":"Benin","BES":"Bonaire, Sint Eustatius and Saba","BFA":"Burkina Faso","BGD":"Bangladesh","BGR":"Bulgaria","BHR":"Bahrain","BHS":"Bahamas","BIH":"Bosnia and Herzegovina","BLM":"Saint Barthelemy","BLR":"Belarus","BLZ":"Belize","BMU":"Bermuda","BOL":"Bolivia","BRA":"Brazil","BRB":"Barbados","BRN":"Brunei Darussalam","BTN":"Bhutan","BWA":"Botswana","CAF":"Central African Republic","CAN":"Canada","CHE":"Switzerland","CHL":"Chile","CHN":"China","CIV":"Cote d'Ivoire","CMR":"Cameroon","COD":"Democratic Republic of the Congo","COG":"Congo","COK":"Cook Islands","COL":"Colombia","COM":"Comoros","CPV":"Cape Verde","CRI":"Costa Rica","CUB":"Cuba","CUW":"Curacao","CYM":"Cayman Islands","CYP":"Cyprus","CZE":"Czech Republic","DEU":"Germany","DJI":"Djibouti","DMA":"Dominica","DNK":"Denmark","DOM":"Dominican Republic","DZA":"Algeria","ECU":"Ecuador","EGY":"Egypt","ERI":"Eritrea","ESH":"Western Sahara","ESP":"Spain","EST":"Estonia","ETH":"Ethiopia","FIN":"Finland","FJI":"Fiji","FLK":"Falkland Islands (Malvinas)","FRA":"France","FRO":"Faeroe Islands","FSM":"Micronesia, Federated States of","GAB":"Gabon","GBR":"United Kingdom","GEO":"Georgia","GGY":"Guernsey","GHA":"Ghana","GIB":"Gibraltar","GIN":"Guinea","GLP":"Guadeloupe","GMB":"Gambia","GNB":"Guinea-Bissau","GNQ":"Equatorial Guinea","GRC":"Greece","GRD":"Grenada","GRL":"Greenland","GTM":"Guatemala","GUF":"French Guiana","GUM":"Guam","GUY":"Guyana","HKG":"Hong Kong Special Administrative Region of China","HND":"Honduras","HRV":"Croatia","HTI":"Haiti","HUN":"Hungary","IDN":"Indonesia","IMN":"Isle of Man","IND":"India","IOT":"British Indian Ocean Territory","IRL":"Ireland","IRN":"Iran (Islamic Republic of)","IRQ":"Iraq","ISL":"Iceland","ISR":"Israel","ITA":"Italy","JAM":"Jamaica","JER":"Channel Islands and Jersey","JOR":"Jordan","JPN":"Japan","KAZ":"Kazakhstan","KEN":"Kenya","KGZ":"Kyrgyzstan","KHM":"Cambodia","KIR":"Kiribati","KNA":"Saint Kitts and Nevis","KOR":"Republic of Korea","KWT":"Kuwait","LAO":"Lao People`s Democratic Republic","LBN":"Lebanon","LBR":"Liberia","LBY":"Libyan Arab Jamahiriya","LCA":"Saint Lucia","LIE":"Liechtenstein","LKA":"Sri Lanka","LSO":"Lesotho","LTU":"Lithuania","LUX":"Luxembourg","LVA":"Latvia","MAC":"Macao Special Administrative Region of China","MAF":"Saint Martin","MAR":"Morocco","MCO":"Monaco","MDA":"Republic of Moldova","MDG":"Madagascar","MDV":"Maldives","MEX":"Mexico","MHL":"Marshall Islands","MKD":"The former Yugoslav Republic of Macedonia","MLI":"Mali","MLT":"Malta","MMR":"Myanmar","MNE":"Montenegro","MNG":"Mongolia","MNP":"Northern Mariana Islands","MOZ":"Mozambique","MRT":"Mauritania","MSR":"Montserrat","MTQ":"Martinique","MUS":"Mauritius","MWI":"Malawi","MYS":"Malaysia","MYT":"Mayotte","NAM":"Namibia","NCL":"New Caledonia","NER":"Niger","NFK":"Norfolk Island","NGA":"Nigeria","NIC":"Nicaragua","NIU":"Niue","NLD":"Netherlands","NOR":"Norway","NPL":"Nepal","NRU":"Nauru","NZL":"New Zealand","OMN":"Oman","PAK":"Pakistan","PAN":"Panama","PCN":"Pitcairn","PER":"Peru","PHL":"Philippines","PLW":"Palau","PNG":"Papua New Guinea","POL":"Poland","PRI":"Puerto Rico","PRK":"Democratic Peoples Republic of Korea (North Korea]","PRT":"Portugal","PRY":"Paraguay","PSE":"Occupied Palestinian Territory","PYF":"French Polynesia","QAT":"Qatar","REU":"Reunion","ROM":"Romania","ROU":"Romania","RUS":"Russian Federation","RWA":"Rwanda","SAU":"Saudi Arabia","SDN":"Sudan","SEN":"Senegal","SGP":"Singapore","SHN":"Saint Helena","SJM":"Svalbard and Jan Mayen Islands","SLB":"Solomon Islands","SLE":"Sierra Leone","SLV":"El Salvador","SMR":"San Marino","SOM":"Somalia","SPM":"Saint Pierre and Miquelon","SRB":"Serbia","SSD":"South Sudan","STP":"Sao Tome and Principe","SUR":"Suriname","SVK":"Slovakia","SVN":"Slovenia","SWE":"Sweden","SWZ":"Swaziland","SXM":"Sint Maarten","SYC":"Seychelles","SYR":"Syrian Arab Republic","TCA":"Turks and Caicos Islands","TCD":"Chad","TGO":"Togo","THA":"Thailand","TJK":"Tajikistan","TKL":"Tokelau","TKM":"Turkmenistan","TLS":"East Timor","TMP":"East Timor","TON":"Tonga","TTO":"Trinidad and Tobago","TUN":"Tunisia","TUR":"Turkey","TUV":"Tuvalu","TWN":"Taiwan (Republic of China)","TZA":"United Republic of Tanzania","UGA":"Uganda","UKR":"Ukraine","URY":"Uruguay","USA":"United States","UZB":"Uzbekistan","VAT":"Holy See","VCT":"Saint Vincent and the Grenadines","VEN":"Venezuela","VGB":"British Virgin Islands","VIR":"United States Virgin Islands","VNM":"Viet Nam","VUT":"Vanuatu","WLF":"Wallis and Futuna Islands","WSM":"Samoa","XKX":"Kosovo","YEM":"Yemen","YUG":"Yugoslavia","ZAF":"South Africa","ZMB":"Zambia","ZWE":"Zimbabwe","all":"All","alternatives":"Alternatives","aum":"AUM","balanced":"Balanced","bond":"Bond","buy":"Buy","commission_charged":"Commission Charged","commodity":"Commodity","cusip":"CUSIP","dont_have_an_account_open_one":"Don't have an account? Open one here.","download_xls":"Download to XLS","edit":"Edit","equity":"Equity","esg_score":"ESG Score","expense_ratio_%":"Expense Ratio %","filters":"Filters","fund_family":"Fund Family","fund_name":"Fund Name","fund_scanner":"Fund Scanner","fund_type":"Fund Type","geographical_focus":"Geographical Focus","have_an_existing_account":"Have An Existing Account","identifier":"Identifier","initial_invest":"Initial Investment","investor_residency":"Investor Residency","isin":"ISIN","lipper_rating":"Lipper Rating","load_type":"Load Type","loading":"Loading","log_out":"Log Out","login_to_portal_view_more_info":"Login to Portal to view more information about this fund.","login_to_view":"Login to View","management_fees":"Management Fees","match_requested_format":"Please match the requested format","mixed_investments":"Mixed Investments","money_market":"Money Market","mutual_fund_scanner":"Mutual Fund Scanner","mutual_fund_search":"Mutual Fund Search","mutual_fund_search_tool":"Mutual Fund Search Tool","no":"No","no_results":"No Results","none":"None","not_available":"Not Available Try Again","open_an_ib_account":"Open an IB Account","or":"or","performance_ytd":"Performance - YTD","refresh_results":"Refresh Results","region":"Region","reset_filters":"Reset Filters","search":"Search","search_isin_cusip_ticker_fund":"Search by ISIN, CUSIP, Ticker Symbol, or Fund Name","select_filters_intro":"Select your filters and click the <b>View Results</b> button at the bottom of the page to view availability","sell":"Sell","share_class":"Share Class","sharpe_ratio":"Sharpe Ratio","showing":"Showing","start_over":"Start Over","stock":"Stock","symbol":"Symbol","ticker_symbol":"Ticker Symbol","total_mutual_funds":"Total Mutual Funds","transaction_fee":"Transaction Fee","united_states_of_america":"United States of America","usa":"USA","view_results":"View Results","watchlist":"Watchlist","yes":"Yes","your_country":"Your Country","zero_results":"There were 0 results"},"de":"/lib/fundscanner/i18n/de.json","es":"/lib/fundscanner/i18n/es.json","fr":"/lib/fundscanner/i18n/fr.json","it":"/lib/fundscanner/i18n/it.json","ru":"/lib/fundscanner/i18n/ru.json","zh-Hans":"/lib/fundscanner/i18n/zh-Hans.json","zh-Hant":"/lib/fundscanner/i18n/zh-Hant.json","ja":"/lib/fundscanner/i18n/ja.json","he":"/lib/fundscanner/i18n/he.json","ar":"/lib/fundscanner/i18n/ar.json"}}.translations
    };
  },
  methods: {
    mount: function mount(mountTo) {
      if (!window.fndscannerapp._isMounted) {
        console.debug('mount for the first time');
        window.fndscannerapp.$mount();
      }

      var app = document.getElementById(mountTo);

      if (!app) {
        this.$alert('can\'t instantiate fundscanner');
        return;
      }

      app.innerHTML = '';
      app.appendChild(window.fndscannerapp.$el);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./src/less/global.less":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!./src/less/global.less ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".pointer {\n  cursor: pointer;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FundType.vue?vue&type=style&index=0&lang=less&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FundType.vue?vue&type=style&index=0&lang=less& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@media (max-width: 600px) {\n.fund-types .big-mobile {\n    width: 50%;\n    margin-bottom: 24px;\n}\n}\n@media (max-width: 850px) and (orientation: landscape) {\n.fund-types .big-mobile {\n    width: 50%;\n    margin-bottom: 24px;\n}\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MFScanner.vue?vue&type=style&index=0&lang=less&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MFScanner.vue?vue&type=style&index=0&lang=less& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mf-head {\n  flex-wrap: wrap;\n}\n@media (max-width: 850px) {\n.flex-fixed.sm-no-flex {\n    display: block;\n}\n.flex-fixed.sm-no-flex .mobile-descr {\n    margin-bottom: 1em;\n}\n.text-end.center {\n    text-align: center;\n    margin-top: 1rem;\n}\n.mf-head h2 {\n    width: 100%;\n    text-align: center;\n}\n}\n@media (max-width: 600px) {\n.mf-edit {\n    width: 47%;\n    padding: 7px;\n}\n.filter-labels {\n    margin-bottom: 8px;\n    display: inline-block;\n}\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ScanFilters.vue?vue&type=style&index=0&lang=less&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ScanFilters.vue?vue&type=style&index=0&lang=less& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".scan-filters .fund-search {\n  min-width: 400px;\n}\n.scan-filters .label {\n  text-transform: capitalize;\n  max-width: 20em;\n  width: 100%;\n}\n.scan-filters .invalid-input {\n  visibility: hidden;\n}\n.scan-filters .invalid-input.show {\n  visibility: visible;\n}\n@media (max-width: 850px) and (orientation: landscape) {\n.scan-filters .big-mobile ._cbc {\n    width: 48px;\n    height: 48px;\n    line-height: 32px;\n}\n}\n@media (max-width: 600px) {\n.scan-filters .fund-search {\n    width: 100%;\n    min-width: 100%;\n}\n.scan-filters .fund-search label {\n    font-size: 0.875em;\n}\n.scan-filters .label {\n    max-width: 100%;\n}\n.scan-filters .big-mobile ._cbc {\n    width: 48px;\n    height: 48px;\n    line-height: 32px;\n}\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResults.vue?vue&type=style&index=0&lang=less&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchResults.vue?vue&type=style&index=0&lang=less& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "a:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n.inner-modal {\n  width: 100%;\n  border-top: 0.25rem solid #db1222;\n  padding: 10px;\n}\n.inner-modal .act {\n  background: #db1222;\n  border-radius: 0;\n}\n.inner-modal .add-info h3 {\n  display: inline-block;\n  padding: 10px 0;\n}\n.resultsview.signedin:not(.cp) .scroll-table td {\n  cursor: default;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SubmitForm.vue?vue&type=style&index=0&lang=less&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SubmitForm.vue?vue&type=style&index=0&lang=less& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".reset-filter {\n  background: none;\n  border: none;\n}\n.reset-filter::after {\n  background-color: #fff;\n}\n.reset-filter._btn:active:hover::after {\n  background-color: transparent;\n  box-shadow: none;\n  color: #db1222;\n}\n@media (max-width: 600px) {\n.button-select button {\n    display: block;\n    margin: 6px auto;\n}\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/marketing/index.vue?vue&type=style&index=0&lang=less&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/marketing/index.vue?vue&type=style&index=0&lang=less& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "section.fund-scanner {\n  padding: 0;\n}\n.mf-view {\n  height: calc(100vh - 240px);\n}\n@media (max-width: 1100px) and (orientation: landscape) {\n.mf-view {\n    height: 150vh;\n}\n}\n@media (max-width: 600px) {\n.mf-view {\n    height: calc(100vh);\n}\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
} // For Node v0.10 support. Remove this eventually.


function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FundFamily.vue?vue&type=template&id=58f79f8e&lang=pug&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--2-oneOf-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FundFamily.vue?vue&type=template&id=58f79f8e&lang=pug& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "s12 insety-16 border-bottom" }, [
    _c(
      "div",
      {
        staticClass: "after-16 before-8",
        class: { "flex-flex": _vm.$media.l },
      },
      [
        _c("div", { staticClass: "text-semibold label" }, [
          _vm._v(_vm._s(_vm.$t("fund_family"))),
        ]),
        _c(
          "div",
          { class: _vm.$media.l ? "start-32" : "before-16" },
          [
            _c("SelectDrop", {
              ref: "selectDrop",
              staticClass: "after-16 fund-fields",
              attrs: {
                options: _vm.fundFamilies,
                defaultValue: _vm.defaultFundFamily,
                filterFor: "family",
              },
              on: { getSelect: _vm.showFundFamily },
            }),
          ],
          1
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FundType.vue?vue&type=template&id=02f2744f&lang=pug&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--2-oneOf-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FundType.vue?vue&type=template&id=02f2744f&lang=pug& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "s12 border-bottom insety-16 fund-types" }, [
    _c(
      "div",
      {
        staticClass: "after-16 before-8",
        class: { "flex-flex": _vm.$media.l },
      },
      [
        _c("div", { staticClass: "text-semibold label" }, [
          _vm._v(_vm._s(_vm.$t("fund_type"))),
        ]),
        _c(
          "div",
          { class: _vm.$media.l ? "start-32" : "before-16" },
          [
            _vm._l(_vm.fundTypes, function (item) {
              return item.val !== "break"
                ? _c(
                    "ib-radio",
                    {
                      key: item.val,
                      staticClass: "after-16 big-mobile",
                      class: {
                        "end-16": _vm.$media.l,
                        "after-24": !_vm.$media.l,
                      },
                      attrs: { name: "fundTypes", val: item.val },
                      model: {
                        value: _vm.selected,
                        callback: function ($$v) {
                          _vm.selected = $$v
                        },
                        expression: "selected",
                      },
                    },
                    [_vm._v(_vm._s(item.label))]
                  )
                : item.val === "break" && _vm.$media.xl
                ? _c("br")
                : _vm._e()
            }),
            _c("span", { attrs: { else: "" } }),
          ],
          2
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InvestorResidency.vue?vue&type=template&id=54c9b062&lang=pug&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--2-oneOf-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InvestorResidency.vue?vue&type=template&id=54c9b062&lang=pug& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "s12 insety-16 border-bottom" }, [
    _c(
      "div",
      {
        staticClass: "after-16 before-8",
        class: { "flex-flex": _vm.$media.l },
      },
      [
        _c("div", { staticClass: "text-semibold label" }, [
          _vm._v(
            _vm._s(_vm.$t("your_country")) + "/" + _vm._s(_vm.$t("region"))
          ),
        ]),
        _c(
          "div",
          { class: _vm.$media.l ? "start-32" : "before-16" },
          [
            _c("SelectDrop", {
              ref: "selectDrop",
              staticClass: "after-16 fund-fields",
              attrs: {
                options: _vm.countries,
                defaultValue: _vm.defaultCountry.value,
                filterFor: "residency",
              },
              on: { getSelect: _vm.showResidence },
            }),
          ],
          1
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MFScanner.vue?vue&type=template&id=798963c5&lang=pug&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--2-oneOf-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MFScanner.vue?vue&type=template&id=798963c5&lang=pug& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ib-col",
    { staticClass: "flex" },
    [
      _c(
        "ib-row",
        [
          _c("ib-col", { staticClass: "mf-head fixed-flex middle inset-16" }, [
            _c("h2", {
              class: { fs2: _vm.$media.l, fs4: !_vm.$media.l },
              domProps: {
                textContent: _vm._s(
                  _vm.$store.state.isPortal
                    ? _vm.$t("mutual_fund_scanner")
                    : _vm.$t("mutual_fund_search_tool")
                ),
              },
            }),
            _vm.resultsview
              ? _c(
                  "div",
                  { staticClass: "text-end center" },
                  [
                    _c(
                      "ib-button",
                      {
                        staticClass: "mf-edit",
                        attrs: { tone: "accent", appearance: "clear" },
                        on: { click: _vm.refresh },
                      },
                      [
                        _c("svg", { attrs: { viewBox: "0 0 50 50" } }, [
                          _c("path", {
                            attrs: {
                              d: "M25 2a1 1 0 1 0 0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21A20.99 20.99 0 0 1 12 8.52V15a1 1 0 1 0 2 0V5H4a1 1 0 1 0 0 2h6.7A22.96 22.96 0 0 0 2 25c0 12.69 10.31 23 23 23s23-10.31 23-23S37.69 2 25 2z",
                            },
                          }),
                        ]),
                        _vm._v(" " + _vm._s(_vm.$t("refresh_results"))),
                      ]
                    ),
                    _c(
                      "ib-button",
                      {
                        staticClass: "mf-edit",
                        attrs: { tone: "accent" },
                        on: { click: _vm.startOver },
                      },
                      [_vm._v(_vm._s(_vm.$t("start_over")))]
                    ),
                    _c(
                      "ib-button",
                      {
                        staticClass: "mf-edit",
                        attrs: { tone: "accent" },
                        on: { click: _vm.showForm },
                      },
                      [_vm._v(_vm._s(_vm.$t("edit")))]
                    ),
                    _c(
                      "ib-button",
                      {
                        staticClass: "mf-edit",
                        attrs: { tone: "accent", busy: _vm.downloading },
                        on: { click: _vm.downloadData },
                      },
                      [_vm._v(_vm._s(_vm.$t("download_xls")))]
                    ),
                    _vm.signedIn &&
                    !_vm.$store.state.isPortal &&
                    typeof _vm.amSession === "undefined"
                      ? _c(
                          "ib-button",
                          {
                            staticClass: "mf-edit",
                            attrs: { tone: "accent" },
                            on: { click: _vm.logOut },
                          },
                          [_vm._v(_vm._s(_vm.$t("log_out")))]
                        )
                      : _vm._e(),
                  ],
                  1
                )
              : _vm._e(),
          ]),
        ],
        1
      ),
      _c(
        "ib-row",
        [
          _vm.resultsview
            ? _c(
                "ib-col",
                {
                  staticClass: "fs7 insetx-16 after-8",
                  class: { "insetx-24": !_vm.$media.l },
                },
                [
                  _vm.fields.identifier
                    ? _c("span", [
                        _vm._v(
                          _vm._s(_vm.$t("isin")) +
                            ", " +
                            _vm._s(_vm.$t("cusip")) +
                            ", " +
                            _vm._s(_vm.$t("or")) +
                            " " +
                            _vm._s(_vm.$t("ticker_symbol")) +
                            ":"
                        ),
                      ])
                    : _vm._e(),
                  _vm.fields.identifier
                    ? _c("span", {
                        staticClass: "fg-accent outsetx-8 filter-labels",
                        domProps: {
                          textContent: _vm._s(
                            _vm.fields.identifier.toUpperCase()
                          ),
                        },
                      })
                    : _vm._e(),
                  !_vm.$media.l && _vm.fields.identifier ? _c("br") : _vm._e(),
                  _c("span", [
                    _vm._v(_vm._s(_vm.$t("investor_residency")) + ":"),
                  ]),
                  _c("span", {
                    staticClass: "fg-accent outsetx-8 filter-labels",
                    domProps: { textContent: _vm._s(_vm.fields.residence) },
                  }),
                  !_vm.$media.l ? _c("br") : _vm._e(),
                  _c("span", [_vm._v(_vm._s(_vm.$t("fund_family")) + ":")]),
                  _c("span", {
                    staticClass: "fg-accent outsetx-8 filter-labels",
                    domProps: { textContent: _vm._s(_vm.fields.fundFamily) },
                  }),
                  !_vm.$media.l ? _c("br") : _vm._e(),
                  _c("span", [
                    _vm._v(_vm._s(_vm.$t("commission_charged")) + ":"),
                  ]),
                  _c("span", {
                    staticClass: "fg-accent outsetx-8 filter-labels",
                    domProps: { textContent: _vm._s(_vm.fields.transLabel) },
                  }),
                  !_vm.$media.l ? _c("br") : _vm._e(),
                  _c("span", [_vm._v(_vm._s(_vm.$t("fund_type")) + ":")]),
                  _c("span", {
                    staticClass: "fg-accent outsetx-8",
                    domProps: { textContent: _vm._s(_vm.fields.fundType) },
                  }),
                ]
              )
            : _vm._e(),
        ],
        1
      ),
      _c("ScanFilters", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.resultsview,
            expression: "!resultsview",
          },
        ],
        ref: "scanFilters",
        on: { onSubmit: _vm.onSubmit },
      }),
      _vm.resultsview
        ? _c("SearchResults", {
            ref: "searchResults",
            attrs: { scanFields: _vm.filters },
            on: { signedIn: _vm.checkSignedIn },
          })
        : _vm._e(),
      _c(
        "ib-row",
        [
          _c("ib-col", [
            _c(
              "div",
              { staticClass: "insetx-16 border-top" },
              [
                _c("p", { staticClass: "fs8 outsety-8" }, [
                  _vm._v("Source: Thomsen Reuters Refinitiv"),
                ]),
                _c("P", { staticClass: "fs8" }, [
                  _vm._v(
                    "The information presented is taken from, or based upon, information obtained from publicly available sources, the completeness and accuracy of which has not been independently verified, and cannot be assured by Interactive Brokers."
                  ),
                ]),
                _c("p", { staticClass: "fs8" }, [
                  _vm._v(
                    "Not all products will be available to all investors due to a number of factors including account type requirements and regional restrictions."
                  ),
                ]),
              ],
              1
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ScanFilters.vue?vue&type=template&id=f40d6484&lang=pug&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--2-oneOf-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ScanFilters.vue?vue&type=template&id=f40d6484&lang=pug& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      staticClass: "scan-filters inset-16",
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.submit.apply(null, arguments)
        },
      },
    },
    [
      _c(
        "div",
        { staticClass: "after-16", class: { "flex-flex": _vm.$media.l } },
        [
          _c("div", {
            staticClass: "end-16 text-semibold label",
            domProps: { innerHTML: _vm._s(_vm.$t("select_filters_intro")) },
          }),
          _c(
            "div",
            { class: _vm.$media.l ? "start-32" : "before-lg" },
            [
              _c("ib-field", {
                ref: "fundSearch",
                staticClass: "fund-search outsetx-0",
                class: { "before-16": !_vm.$media.l },
                attrs: {
                  name: "Fund Search",
                  width: "40ch",
                  placeholder: _vm.$t("search_isin_cusip_ticker_fund"),
                  maxlength: 30,
                },
                model: {
                  value: _vm.identifier,
                  callback: function ($$v) {
                    _vm.identifier = $$v
                  },
                  expression: "identifier",
                },
              }),
              _c(
                "div",
                {
                  staticClass: "fs7 fg-error invalid-input",
                  class: { show: _vm.invalidInput },
                },
                [_vm._v(_vm._s(_vm.$t("match_requested_format")))]
              ),
            ],
            1
          ),
        ]
      ),
      _c("div", {
        staticClass: "border-bottom insety-16 uppercase fg70",
        domProps: { textContent: _vm._s(_vm.$t("filters")) },
      }),
      _c("InvestorResidency", {
        ref: "investorResidency",
        on: { showResidence: _vm.getResidence },
      }),
      _c("FundFamily", {
        ref: "fundFamily",
        on: { showFundFamily: _vm.getFundFamily },
      }),
      _c("div", { staticClass: "s12 insety-16 border-bottom" }, [
        _c(
          "div",
          {
            staticClass: "after-16 before-8",
            class: { "flex-flex": _vm.$media.l },
          },
          [
            _c("div", { staticClass: "text-semibold label" }, [
              _vm._v(_vm._s(_vm.$t("commission_charged"))),
            ]),
            _c(
              "div",
              {
                staticClass: "after-16",
                class: _vm.$media.l ? "start-32" : "before-16",
              },
              [
                _c(
                  "ib-radio",
                  {
                    staticClass: "end-16 big-mobile",
                    attrs: { name: "transFee", val: "All" },
                    model: {
                      value: _vm.selected,
                      callback: function ($$v) {
                        _vm.selected = $$v
                      },
                      expression: "selected",
                    },
                  },
                  [_vm._v(_vm._s(_vm.$t("all")))]
                ),
                _c(
                  "ib-radio",
                  {
                    staticClass: "end-16 big-mobile",
                    attrs: { name: "transFee", val: "T" },
                    model: {
                      value: _vm.selected,
                      callback: function ($$v) {
                        _vm.selected = $$v
                      },
                      expression: "selected",
                    },
                  },
                  [_vm._v(_vm._s(_vm.$t("yes")))]
                ),
                _c(
                  "ib-radio",
                  {
                    staticClass: "end-16 big-mobile",
                    attrs: { name: "transFee", val: "F" },
                    model: {
                      value: _vm.selected,
                      callback: function ($$v) {
                        _vm.selected = $$v
                      },
                      expression: "selected",
                    },
                  },
                  [_vm._v(_vm._s(_vm.$t("no")))]
                ),
              ],
              1
            ),
          ]
        ),
      ]),
      _c("FundType", {
        ref: "fundType",
        on: { showFundType: _vm.getFundType },
      }),
      _c("SubmitForm", {
        ref: "submitForm",
        attrs: { disabled: _vm.disabled },
        on: { onReset: _vm.resetFilters },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResults.vue?vue&type=template&id=1d54fe2e&lang=pug&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--2-oneOf-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchResults.vue?vue&type=template&id=1d54fe2e&lang=pug& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ib-progress-linear",
    {
      staticClass: "_row grow",
      class: { signedin: _vm.signedIn, cp: _vm.$store.state.isPortal },
      attrs: { show: _vm.loading, blocking: "" },
    },
    [
      _c(
        "ib-col",
        { staticClass: "flex" },
        [
          _c(
            "ib-row",
            [
              _c(
                "ib-col",
                { staticClass: "insetx-16 flex-fixed border-bottom border-xs" },
                [
                  this.total <= _vm.MAX_ROWS
                    ? _c("div", { staticClass: "fs7" }, [
                        _vm._v(
                          _vm._s(_vm.$t("showing")) +
                            " " +
                            _vm._s(_vm.total) +
                            " of " +
                            _vm._s(_vm.total)
                        ),
                      ])
                    : _c("div", { staticClass: "fs7" }, [
                        _vm._v(
                          _vm._s(_vm.$t("showing")) +
                            "\n " +
                            _vm._s(
                              _vm.curResults.length
                                ? _vm.$num.int(
                                    _vm.MAX_ROWS * (_vm.curPage - 1) + 1
                                  )
                                : 0
                            ) +
                            "\n to " +
                            _vm._s(
                              _vm.$num.int(
                                _vm.MAX_ROWS * (_vm.curPage - 1) +
                                  _vm.curResults.length
                              )
                            ) +
                            "\n of " +
                            _vm._s(_vm.$num.int(_vm.total))
                        ),
                      ]),
                  !_vm.loading
                    ? _c("ib-paginate", {
                        attrs: { stride: 5, size: 5, max: _vm.maxPage },
                        model: {
                          value: _vm.curPage,
                          callback: function ($$v) {
                            _vm.curPage = $$v
                          },
                          expression: "curPage",
                        },
                      })
                    : _vm._e(),
                ],
                1
              ),
            ],
            1
          ),
          _c(
            "ib-table-basic",
            {
              ref: "scrolltable",
              staticClass: "fs7 fg70 shrink",
              attrs: { row: "", data: _vm.curResults, spacing: "huge" },
              on: { click: _vm.openQD },
              scopedSlots: _vm._u(
                [
                  {
                    key: "body",
                    fn: function (row) {
                      return [
                        _c(
                          "td",
                          {
                            staticClass: "ellipsis",
                            on: { click: _vm.getMoreInfo },
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass: "clipped fs7 fg70",
                                attrs: { title: row.NAME },
                              },
                              [_vm._v(_vm._s(row.NAME))]
                            ),
                          ]
                        ),
                        _c("td", { on: { click: _vm.getMoreInfo } }, [
                          _c("span", { attrs: { title: row.SYMBOL } }, [
                            _vm._v(_vm._s(row.SYMBOL)),
                          ]),
                        ]),
                        _c("td", { on: { click: _vm.getMoreInfo } }, [
                          _c(
                            "span",
                            {
                              staticClass: "ellipsis no-wrap",
                              attrs: { title: row.FAMILY },
                            },
                            [_vm._v(_vm._s(row.FAMILY))]
                          ),
                        ]),
                        _c("td", { on: { click: _vm.getMoreInfo } }, [
                          _c("span", { attrs: { title: row.INVEST_TYPE } }, [
                            _vm._v(_vm._s(row.INVEST_TYPE)),
                          ]),
                        ]),
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            on: { click: _vm.getMoreInfo },
                          },
                          [_c("span", [_vm._v(_vm._s(row.TXN))])]
                        ),
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            on: { click: _vm.getMoreInfo },
                          },
                          [_c("span", [_vm._v(_vm._s(row.LT))])]
                        ),
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            on: { click: _vm.getMoreInfo },
                          },
                          [_c("span", [_vm._v(_vm._s(row.MGTFEE))])]
                        ),
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            on: { click: _vm.getMoreInfo },
                          },
                          [_c("span", [_vm._v(_vm._s(row.EXPENSE_RATIO))])]
                        ),
                        !_vm.signedIn
                          ? _c(
                              "td",
                              {
                                staticClass: "blue",
                                on: { click: _vm.getMoreInfo },
                              },
                              [_vm._v(_vm._s(_vm.$t("login_to_view")))]
                            )
                          : _c("td", [_vm._v(_vm._s(row.PERF))]),
                        !_vm.signedIn
                          ? _c(
                              "td",
                              {
                                staticClass: "blue",
                                on: { click: _vm.getMoreInfo },
                              },
                              [_vm._v(_vm._s(_vm.$t("login_to_view")))]
                            )
                          : _c("td", [_vm._v(_vm._s(row.LIPPER))]),
                        !_vm.signedIn
                          ? _c(
                              "td",
                              {
                                staticClass: "blue",
                                on: { click: _vm.getMoreInfo },
                              },
                              [_vm._v(_vm._s(_vm.$t("login_to_view")))]
                            )
                          : _c("td", [_vm._v(_vm._s(row.SHARPE))]),
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            on: { click: _vm.getMoreInfo },
                          },
                          [_c("span", [_vm._v(_vm._s(row.FUND_GEO))])]
                        ),
                        !_vm.signedIn
                          ? _c(
                              "td",
                              {
                                staticClass: "blue",
                                on: { click: _vm.getMoreInfo },
                              },
                              [_vm._v(_vm._s(_vm.$t("login_to_view")))]
                            )
                          : _c("td", [_vm._v(_vm._s(row.ESG))]),
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            on: { click: _vm.getMoreInfo },
                          },
                          [_c("span", [_vm._v(_vm._s(row.ASSETS))])]
                        ),
                        !_vm.signedIn
                          ? _c(
                              "td",
                              {
                                staticClass: "blue",
                                on: { click: _vm.getMoreInfo },
                              },
                              [_vm._v(_vm._s(_vm.$t("login_to_view")))]
                            )
                          : _c("td", [_vm._v(_vm._s(row.ISIN))]),
                        !_vm.signedIn
                          ? _c(
                              "td",
                              {
                                staticClass: "blue",
                                on: { click: _vm.getMoreInfo },
                              },
                              [_vm._v(_vm._s(_vm.$t("login_to_view")))]
                            )
                          : _c("td", [_vm._v(_vm._s(row.CUSIP))]),
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            on: { click: _vm.getMoreInfo },
                          },
                          [_c("span", [_vm._v(_vm._s(row.SHARE_CLASS))])]
                        ),
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            on: { click: _vm.getMoreInfo },
                          },
                          [
                            _c("span", [
                              _vm._v(_vm._s(row.INITIAL_INVEST) + " "),
                            ]),
                          ]
                        ),
                      ]
                    },
                  },
                  {
                    key: _vm.$store.state.isPortal ? "end" : "",
                    fn: function (row) {
                      return _vm.$store.state.isPortal
                        ? [
                            _c(
                              "span",
                              [
                                _c(
                                  "ib-button",
                                  {
                                    attrs: { tone: "accent capitalize" },
                                    on: {
                                      click: function ($event) {
                                        _vm.trade(_vm.formattedRow(row), true)
                                      },
                                    },
                                  },
                                  [_vm._v(_vm._s(_vm.$t("buy")))]
                                ),
                                _c(
                                  "ib-button",
                                  {
                                    attrs: { tone: "sell capitalize" },
                                    on: {
                                      click: function ($event) {
                                        _vm.trade(_vm.formattedRow(row), false)
                                      },
                                    },
                                  },
                                  [_vm._v(_vm._s(_vm.$t("sell")))]
                                ),
                                _c(
                                  "ib-button",
                                  {
                                    staticClass: "outline accent capitalize",
                                    on: {
                                      click: function ($event) {
                                        _vm.addToWatchlist(
                                          _vm.formattedRow(row)
                                        )
                                      },
                                    },
                                  },
                                  [_vm._v(_vm._s(_vm.$t("watchlist")))]
                                ),
                              ],
                              1
                            ),
                          ]
                        : undefined
                    },
                  },
                ],
                null,
                true
              ),
            },
            [
              _c(
                "ib-table-col",
                {
                  attrs: { width: _vm.$media.m ? "36ch" : "20ch", sticky: "" },
                },
                [_vm._v(_vm._s(_vm.$t("fund_name")))]
              ),
              _c("ib-table-col", { attrs: { width: "8ch" } }, [
                _vm._v(_vm._s(_vm.$t("symbol"))),
              ]),
              _c("ib-table-col", { attrs: { width: "24ch" } }, [
                _vm._v(_vm._s(_vm.$t("fund_family"))),
              ]),
              _c("ib-table-col", { attrs: { width: "12ch" } }, [
                _vm._v(_vm._s(_vm.$t("fund_type"))),
              ]),
              _c("ib-table-col", { attrs: { width: "12ch" } }, [
                _vm._v(_vm._s(_vm.$t("transaction_fee"))),
              ]),
              _c("ib-table-col", { attrs: { width: "10ch" } }, [
                _vm._v(_vm._s(_vm.$t("load_type"))),
              ]),
              _c("ib-table-col", { attrs: { width: "16ch" } }, [
                _vm._v(_vm._s(_vm.$t("management_fees"))),
              ]),
              _c("ib-table-col", { attrs: { width: "12ch" } }, [
                _vm._v(_vm._s(_vm.$t("expense_ratio_%"))),
              ]),
              _c("ib-table-col", { attrs: { width: "14ch" } }, [
                _vm._v(_vm._s(_vm.$t("performance_ytd"))),
              ]),
              _c("ib-table-col", { attrs: { width: "12ch" } }, [
                _vm._v(_vm._s(_vm.$t("lipper_rating"))),
              ]),
              _c("ib-table-col", { attrs: { width: "16ch" } }, [
                _vm._v(_vm._s(_vm.$t("sharpe_ratio"))),
              ]),
              _c("ib-table-col", { attrs: { width: "16ch" } }, [
                _vm._v(_vm._s(_vm.$t("geographical_focus"))),
              ]),
              _c("ib-table-col", { attrs: { width: "12ch" } }, [
                _vm._v(_vm._s(_vm.$t("esg_score"))),
              ]),
              _c("ib-table-col", { attrs: { width: "16ch" } }, [
                _vm._v(_vm._s(_vm.$t("aum"))),
              ]),
              _c("ib-table-col", { attrs: { width: "12ch" } }, [
                _vm._v(_vm._s(_vm.$t("isin"))),
              ]),
              _c("ib-table-col", { attrs: { width: "12ch" } }, [
                _vm._v(_vm._s(_vm.$t("cusip"))),
              ]),
              _c("ib-table-col", { attrs: { width: "14ch" } }, [
                _vm._v(_vm._s(_vm.$t("share_class"))),
              ]),
              _c("ib-table-col", { attrs: { width: "14ch" } }, [
                _vm._v(_vm._s(_vm.$t("initial_invest"))),
              ]),
              _vm.loading
                ? _c("p", { attrs: { slot: "empty" }, slot: "empty" }, [
                    _vm._v(_vm._s(_vm.$t("loading")) + " ..."),
                  ])
                : _c("p", { attrs: { slot: "empty" }, slot: "empty" }, [
                    _vm._v(_vm._s(_vm.$t("no_results"))),
                  ]),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "ib-dialog",
        {
          ref: "modal",
          attrs: { autoclose: true },
          model: {
            value: _vm.showLoginScreen,
            callback: function ($$v) {
              _vm.showLoginScreen = $$v
            },
            expression: "showLoginScreen",
          },
        },
        [
          _c("div", { staticClass: "inner-modal" }, [
            _c("div", { staticClass: "add-info flex-fixed top" }, [
              _c("h3", [_vm._v(_vm._s(_vm.$t("mutual_fund_search")))]),
              _c("a", { on: { click: _vm.closeModal } }, [
                _c("span", { staticClass: "fg" }, [
                  _c("svg", { attrs: { viewBox: "0 0 20 20" } }, [
                    _c("path", {
                      attrs: {
                        d: "M10 0a10 10 0 1010 10A10.029 10.029 0 0010 0z",
                      },
                    }),
                    _c("path", {
                      attrs: {
                        d: "M14.9 13.5l-1.4 1.4-3.5-3.5-3.5 3.5-1.4-1.4L8.6 10 5.1 6.5l1.4-1.4L10 8.6l3.5-3.5 1.4 1.4-3.5 3.5z",
                        fill: "#fff",
                      },
                    }),
                  ]),
                ]),
              ]),
            ]),
            _c("h5", [
              _vm._v(_vm._s(_vm.$t("login_to_portal_view_more_info"))),
            ]),
            _c(
              "p",
              { staticClass: "text-end inset-8" },
              [
                _c(
                  "ib-button",
                  {
                    staticClass: "bg-accent _btn xs act",
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.addFilters.apply(null, arguments)
                      },
                    },
                  },
                  [_vm._v(_vm._s(_vm.$t("have_an_existing_account")))]
                ),
              ],
              1
            ),
            _c("h5", [_vm._v(_vm._s(_vm.$t("dont_have_an_account_open_one")))]),
            _c("p", { staticClass: "text-end inset-8" }, [
              _c(
                "a",
                {
                  staticClass: "bg-accent _btn xs act",
                  attrs: {
                    href: "https://www.interactivebrokers.com/en/index.php?f=4695",
                  },
                },
                [_vm._v(_vm._s(_vm.$t("open_an_ib_account")))]
              ),
            ]),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SelectDrop.vue?vue&type=template&id=57b3d28a&lang=pug&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--2-oneOf-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SelectDrop.vue?vue&type=template&id=57b3d28a&lang=pug& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ib-dropdown", {
    attrs: {
      data: _vm.options,
      placeholder: _vm.$t("search"),
      filtered: "",
      width: _vm.$media.m ? "380px" : "100%",
    },
    on: { change: _vm.selectOption },
    model: {
      value: _vm.searchFilter,
      callback: function ($$v) {
        _vm.searchFilter = $$v
      },
      expression: "searchFilter",
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SubmitForm.vue?vue&type=template&id=0648312c&lang=pug&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--2-oneOf-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SubmitForm.vue?vue&type=template&id=0648312c&lang=pug& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "button-select" }, [
    _c(
      "div",
      { staticClass: "insety-16" },
      [
        _c(
          "ib-button-submit",
          {
            staticClass: "xl accent insetx-64",
            attrs: { disabled: _vm.disabled },
          },
          [_vm._v(_vm._s(_vm.$t("view_results")))]
        ),
        _c(
          "ib-button",
          {
            staticClass: "fg-accent reset-filter pointer",
            on: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.resetFilter.apply(null, arguments)
              },
            },
          },
          [_vm._v(_vm._s(_vm.$t("reset_filters")))]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/marketing/index.vue?vue&type=template&id=25854f40&lang=pug&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--2-oneOf-0!./node_modules/vue-loader/lib??vue-loader-options!./src/marketing/index.vue?vue&type=template&id=25854f40&lang=pug& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ib-application",
    {
      staticClass: "mf-view",
      attrs: {
        layout: "full",
        translations: _vm.translations,
        row: "",
        grow: "",
      },
    },
    [_c("MFScanner")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FundType.vue?vue&type=style&index=0&lang=less&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FundType.vue?vue&type=style&index=0&lang=less& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./FundType.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FundType.vue?vue&type=style&index=0&lang=less&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d0d33730", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MFScanner.vue?vue&type=style&index=0&lang=less&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MFScanner.vue?vue&type=style&index=0&lang=less& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./MFScanner.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MFScanner.vue?vue&type=style&index=0&lang=less&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1a0fbddc", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ScanFilters.vue?vue&type=style&index=0&lang=less&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ScanFilters.vue?vue&type=style&index=0&lang=less& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./ScanFilters.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ScanFilters.vue?vue&type=style&index=0&lang=less&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6910bf9c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResults.vue?vue&type=style&index=0&lang=less&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchResults.vue?vue&type=style&index=0&lang=less& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./SearchResults.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResults.vue?vue&type=style&index=0&lang=less&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5db361b2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SubmitForm.vue?vue&type=style&index=0&lang=less&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SubmitForm.vue?vue&type=style&index=0&lang=less& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./SubmitForm.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SubmitForm.vue?vue&type=style&index=0&lang=less&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("e9a62abc", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/marketing/index.vue?vue&type=style&index=0&lang=less&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./src/marketing/index.vue?vue&type=style&index=0&lang=less& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/marketing/index.vue?vue&type=style&index=0&lang=less&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("14a2dfc0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

/***/ }),

/***/ "./src/api/default.js":
/*!****************************!*\
  !*** ./src/api/default.js ***!
  \****************************/
/*! exports provided: api, apiGet, apiPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGet", function() { return apiGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiPost", function() { return apiPost; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  timeout: 15000,
  withCredentials: true
});

var handleResponse = function handleResponse(res, resolve, reject) {
  res.status == 200 ? resolve(res.data) : reject(res.statusText);
};

var buildPromise = function buildPromise(method, endPoint, data, config) {
  return new Promise(function (resolve, reject) {
    method(endPoint, data, config).then(function (res) {
      return handleResponse(res, resolve, reject);
    })["catch"](function (reason) {
      return reject(reason);
    });
  });
};

function apiGet(endPoint, config) {
  return new Promise(function (resolve, reject) {
    api.get(endPoint, config).then(function (res) {
      return handleResponse(res, resolve, reject);
    })["catch"](function (reason) {
      return reject(reason);
    });
  });
}
function apiPost(endPoint, data) {
  return buildPromise(api.post, endPoint, data);
}

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "./src/api/default.js");

var cpBase = "/portal.proxy/v1/portal";
var mFunds = "/response_handlers/mf";

function checkCP(response) {
  return Object(_default__WEBPACK_IMPORTED_MODULE_0__["apiGet"])(cpBase + '/sso/validate');
}

function getTotalFunds() {
  return Object(_default__WEBPACK_IMPORTED_MODULE_0__["apiGet"])(mFunds + '/getTotals.php');
}

function getFundFamilies() {
  return Object(_default__WEBPACK_IMPORTED_MODULE_0__["apiGet"])(mFunds + '/getFamilies.php');
}

function logOut() {
  return Object(_default__WEBPACK_IMPORTED_MODULE_0__["apiPost"])(mFunds + '/logout.php');
}

function searchFunds(data) {
  var query = "";

  if (data.identifier) {
    query += "&identifier=".concat(data.identifier);
  }

  if (data.family) {
    query += "&family=".concat(data.family);
  }

  if (data.txnfee) {
    query += "&txnfee=".concat(data.txnfee);
  }

  if (data.itype) {
    query += "&itype=".concat(data.itype);
  }

  if (data.page) {
    query += "&page=".concat(data.page);
  }

  return _default__WEBPACK_IMPORTED_MODULE_0__["api"].get("".concat(mFunds, "/index.php?residency=").concat(data.residency).concat(query));
}

/* harmony default export */ __webpack_exports__["default"] = ({
  checkCP: checkCP,
  getTotalFunds: getTotalFunds,
  getFundFamilies: getFundFamilies,
  logOut: logOut,
  searchFunds: searchFunds
});

/***/ }),

/***/ "./src/components/FundFamily.vue":
/*!***************************************!*\
  !*** ./src/components/FundFamily.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FundFamily_vue_vue_type_template_id_58f79f8e_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FundFamily.vue?vue&type=template&id=58f79f8e&lang=pug& */ "./src/components/FundFamily.vue?vue&type=template&id=58f79f8e&lang=pug&");
/* harmony import */ var _FundFamily_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FundFamily.vue?vue&type=script&lang=js& */ "./src/components/FundFamily.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FundFamily_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FundFamily_vue_vue_type_template_id_58f79f8e_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FundFamily_vue_vue_type_template_id_58f79f8e_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/FundFamily.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/FundFamily.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/FundFamily.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundFamily_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./FundFamily.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FundFamily.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundFamily_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/FundFamily.vue?vue&type=template&id=58f79f8e&lang=pug&":
/*!*******************************************************************************!*\
  !*** ./src/components/FundFamily.vue?vue&type=template&id=58f79f8e&lang=pug& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundFamily_vue_vue_type_template_id_58f79f8e_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader??ref--2-oneOf-0!../../node_modules/vue-loader/lib??vue-loader-options!./FundFamily.vue?vue&type=template&id=58f79f8e&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FundFamily.vue?vue&type=template&id=58f79f8e&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundFamily_vue_vue_type_template_id_58f79f8e_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundFamily_vue_vue_type_template_id_58f79f8e_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/FundType.vue":
/*!*************************************!*\
  !*** ./src/components/FundType.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FundType_vue_vue_type_template_id_02f2744f_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FundType.vue?vue&type=template&id=02f2744f&lang=pug& */ "./src/components/FundType.vue?vue&type=template&id=02f2744f&lang=pug&");
/* harmony import */ var _FundType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FundType.vue?vue&type=script&lang=js& */ "./src/components/FundType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FundType_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FundType.vue?vue&type=style&index=0&lang=less& */ "./src/components/FundType.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FundType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FundType_vue_vue_type_template_id_02f2744f_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FundType_vue_vue_type_template_id_02f2744f_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/FundType.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/FundType.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/FundType.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./FundType.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FundType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/FundType.vue?vue&type=style&index=0&lang=less&":
/*!***********************************************************************!*\
  !*** ./src/components/FundType.vue?vue&type=style&index=0&lang=less& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FundType_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./FundType.vue?vue&type=style&index=0&lang=less& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FundType.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FundType_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FundType_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FundType_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FundType_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/FundType.vue?vue&type=template&id=02f2744f&lang=pug&":
/*!*****************************************************************************!*\
  !*** ./src/components/FundType.vue?vue&type=template&id=02f2744f&lang=pug& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundType_vue_vue_type_template_id_02f2744f_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader??ref--2-oneOf-0!../../node_modules/vue-loader/lib??vue-loader-options!./FundType.vue?vue&type=template&id=02f2744f&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FundType.vue?vue&type=template&id=02f2744f&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundType_vue_vue_type_template_id_02f2744f_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundType_vue_vue_type_template_id_02f2744f_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/InvestorResidency.vue":
/*!**********************************************!*\
  !*** ./src/components/InvestorResidency.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvestorResidency_vue_vue_type_template_id_54c9b062_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvestorResidency.vue?vue&type=template&id=54c9b062&lang=pug& */ "./src/components/InvestorResidency.vue?vue&type=template&id=54c9b062&lang=pug&");
/* harmony import */ var _InvestorResidency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvestorResidency.vue?vue&type=script&lang=js& */ "./src/components/InvestorResidency.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InvestorResidency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvestorResidency_vue_vue_type_template_id_54c9b062_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvestorResidency_vue_vue_type_template_id_54c9b062_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/InvestorResidency.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/InvestorResidency.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/InvestorResidency.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorResidency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./InvestorResidency.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InvestorResidency.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorResidency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/InvestorResidency.vue?vue&type=template&id=54c9b062&lang=pug&":
/*!**************************************************************************************!*\
  !*** ./src/components/InvestorResidency.vue?vue&type=template&id=54c9b062&lang=pug& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorResidency_vue_vue_type_template_id_54c9b062_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader??ref--2-oneOf-0!../../node_modules/vue-loader/lib??vue-loader-options!./InvestorResidency.vue?vue&type=template&id=54c9b062&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InvestorResidency.vue?vue&type=template&id=54c9b062&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorResidency_vue_vue_type_template_id_54c9b062_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorResidency_vue_vue_type_template_id_54c9b062_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/MFScanner.vue":
/*!**************************************!*\
  !*** ./src/components/MFScanner.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MFScanner_vue_vue_type_template_id_798963c5_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MFScanner.vue?vue&type=template&id=798963c5&lang=pug& */ "./src/components/MFScanner.vue?vue&type=template&id=798963c5&lang=pug&");
/* harmony import */ var _MFScanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MFScanner.vue?vue&type=script&lang=js& */ "./src/components/MFScanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MFScanner_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MFScanner.vue?vue&type=style&index=0&lang=less& */ "./src/components/MFScanner.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MFScanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MFScanner_vue_vue_type_template_id_798963c5_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MFScanner_vue_vue_type_template_id_798963c5_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MFScanner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/MFScanner.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/MFScanner.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MFScanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./MFScanner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MFScanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MFScanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MFScanner.vue?vue&type=style&index=0&lang=less&":
/*!************************************************************************!*\
  !*** ./src/components/MFScanner.vue?vue&type=style&index=0&lang=less& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MFScanner_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./MFScanner.vue?vue&type=style&index=0&lang=less& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MFScanner.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MFScanner_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MFScanner_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MFScanner_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MFScanner_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/MFScanner.vue?vue&type=template&id=798963c5&lang=pug&":
/*!******************************************************************************!*\
  !*** ./src/components/MFScanner.vue?vue&type=template&id=798963c5&lang=pug& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MFScanner_vue_vue_type_template_id_798963c5_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader??ref--2-oneOf-0!../../node_modules/vue-loader/lib??vue-loader-options!./MFScanner.vue?vue&type=template&id=798963c5&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MFScanner.vue?vue&type=template&id=798963c5&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MFScanner_vue_vue_type_template_id_798963c5_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MFScanner_vue_vue_type_template_id_798963c5_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/ScanFilters.vue":
/*!****************************************!*\
  !*** ./src/components/ScanFilters.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScanFilters_vue_vue_type_template_id_f40d6484_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScanFilters.vue?vue&type=template&id=f40d6484&lang=pug& */ "./src/components/ScanFilters.vue?vue&type=template&id=f40d6484&lang=pug&");
/* harmony import */ var _ScanFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScanFilters.vue?vue&type=script&lang=js& */ "./src/components/ScanFilters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ScanFilters_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScanFilters.vue?vue&type=style&index=0&lang=less& */ "./src/components/ScanFilters.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ScanFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScanFilters_vue_vue_type_template_id_f40d6484_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScanFilters_vue_vue_type_template_id_f40d6484_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ScanFilters.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/ScanFilters.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/ScanFilters.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScanFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./ScanFilters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ScanFilters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScanFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ScanFilters.vue?vue&type=style&index=0&lang=less&":
/*!**************************************************************************!*\
  !*** ./src/components/ScanFilters.vue?vue&type=style&index=0&lang=less& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScanFilters_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./ScanFilters.vue?vue&type=style&index=0&lang=less& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ScanFilters.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScanFilters_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScanFilters_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScanFilters_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScanFilters_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/ScanFilters.vue?vue&type=template&id=f40d6484&lang=pug&":
/*!********************************************************************************!*\
  !*** ./src/components/ScanFilters.vue?vue&type=template&id=f40d6484&lang=pug& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScanFilters_vue_vue_type_template_id_f40d6484_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader??ref--2-oneOf-0!../../node_modules/vue-loader/lib??vue-loader-options!./ScanFilters.vue?vue&type=template&id=f40d6484&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ScanFilters.vue?vue&type=template&id=f40d6484&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScanFilters_vue_vue_type_template_id_f40d6484_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScanFilters_vue_vue_type_template_id_f40d6484_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/SearchResults.vue":
/*!******************************************!*\
  !*** ./src/components/SearchResults.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchResults_vue_vue_type_template_id_1d54fe2e_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResults.vue?vue&type=template&id=1d54fe2e&lang=pug& */ "./src/components/SearchResults.vue?vue&type=template&id=1d54fe2e&lang=pug&");
/* harmony import */ var _SearchResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchResults.vue?vue&type=script&lang=js& */ "./src/components/SearchResults.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SearchResults_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResults.vue?vue&type=style&index=0&lang=less& */ "./src/components/SearchResults.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchResults_vue_vue_type_template_id_1d54fe2e_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchResults_vue_vue_type_template_id_1d54fe2e_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/SearchResults.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/SearchResults.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/SearchResults.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./SearchResults.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResults.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/SearchResults.vue?vue&type=style&index=0&lang=less&":
/*!****************************************************************************!*\
  !*** ./src/components/SearchResults.vue?vue&type=style&index=0&lang=less& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./SearchResults.vue?vue&type=style&index=0&lang=less& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResults.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/SearchResults.vue?vue&type=template&id=1d54fe2e&lang=pug&":
/*!**********************************************************************************!*\
  !*** ./src/components/SearchResults.vue?vue&type=template&id=1d54fe2e&lang=pug& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_template_id_1d54fe2e_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader??ref--2-oneOf-0!../../node_modules/vue-loader/lib??vue-loader-options!./SearchResults.vue?vue&type=template&id=1d54fe2e&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResults.vue?vue&type=template&id=1d54fe2e&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_template_id_1d54fe2e_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_template_id_1d54fe2e_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/SelectDrop.vue":
/*!***************************************!*\
  !*** ./src/components/SelectDrop.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectDrop_vue_vue_type_template_id_57b3d28a_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectDrop.vue?vue&type=template&id=57b3d28a&lang=pug& */ "./src/components/SelectDrop.vue?vue&type=template&id=57b3d28a&lang=pug&");
/* harmony import */ var _SelectDrop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectDrop.vue?vue&type=script&lang=js& */ "./src/components/SelectDrop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectDrop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectDrop_vue_vue_type_template_id_57b3d28a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SelectDrop_vue_vue_type_template_id_57b3d28a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/SelectDrop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/SelectDrop.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/SelectDrop.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDrop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./SelectDrop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SelectDrop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDrop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/SelectDrop.vue?vue&type=template&id=57b3d28a&lang=pug&":
/*!*******************************************************************************!*\
  !*** ./src/components/SelectDrop.vue?vue&type=template&id=57b3d28a&lang=pug& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDrop_vue_vue_type_template_id_57b3d28a_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader??ref--2-oneOf-0!../../node_modules/vue-loader/lib??vue-loader-options!./SelectDrop.vue?vue&type=template&id=57b3d28a&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SelectDrop.vue?vue&type=template&id=57b3d28a&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDrop_vue_vue_type_template_id_57b3d28a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDrop_vue_vue_type_template_id_57b3d28a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/SubmitForm.vue":
/*!***************************************!*\
  !*** ./src/components/SubmitForm.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmitForm_vue_vue_type_template_id_0648312c_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitForm.vue?vue&type=template&id=0648312c&lang=pug& */ "./src/components/SubmitForm.vue?vue&type=template&id=0648312c&lang=pug&");
/* harmony import */ var _SubmitForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitForm.vue?vue&type=script&lang=js& */ "./src/components/SubmitForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SubmitForm_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmitForm.vue?vue&type=style&index=0&lang=less& */ "./src/components/SubmitForm.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SubmitForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmitForm_vue_vue_type_template_id_0648312c_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmitForm_vue_vue_type_template_id_0648312c_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/SubmitForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/SubmitForm.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/SubmitForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./SubmitForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SubmitForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/SubmitForm.vue?vue&type=style&index=0&lang=less&":
/*!*************************************************************************!*\
  !*** ./src/components/SubmitForm.vue?vue&type=style&index=0&lang=less& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitForm_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./SubmitForm.vue?vue&type=style&index=0&lang=less& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SubmitForm.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitForm_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitForm_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitForm_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitForm_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/SubmitForm.vue?vue&type=template&id=0648312c&lang=pug&":
/*!*******************************************************************************!*\
  !*** ./src/components/SubmitForm.vue?vue&type=template&id=0648312c&lang=pug& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitForm_vue_vue_type_template_id_0648312c_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader??ref--2-oneOf-0!../../node_modules/vue-loader/lib??vue-loader-options!./SubmitForm.vue?vue&type=template&id=0648312c&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SubmitForm.vue?vue&type=template&id=0648312c&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitForm_vue_vue_type_template_id_0648312c_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitForm_vue_vue_type_template_id_0648312c_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/countries.js":
/*!*****************************!*\
  !*** ./src/js/countries.js ***!
  \*****************************/
/*! exports provided: countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
var countries = function countries(self) {
  return [{
    label: self.$t('USA'),
    value: 'USA'
  }, {
    label: self.$t('ALA'),
    value: 'ALA'
  }, {
    label: self.$t('ALB'),
    value: 'ALB'
  }, {
    label: self.$t('DZA'),
    value: 'DZA'
  }, {
    label: self.$t('AND'),
    value: 'AND'
  }, {
    label: self.$t('ANT'),
    value: 'ANT'
  }, {
    label: self.$t('AIA'),
    value: 'AIA'
  }, {
    label: self.$t('ATA'),
    value: 'ATA'
  }, {
    label: self.$t('ATG'),
    value: 'ATG'
  }, {
    label: self.$t('ARG'),
    value: 'ARG'
  }, {
    label: self.$t('ARM'),
    value: 'ARM'
  }, {
    label: self.$t('ABW'),
    value: 'ABW'
  }, {
    label: self.$t('AUS'),
    value: 'AUS'
  }, {
    label: self.$t('AUT'),
    value: 'AUT'
  }, {
    label: self.$t('AZE'),
    value: 'AZE'
  }, {
    label: self.$t('BHS'),
    value: 'BHS'
  }, {
    label: self.$t('BHR'),
    value: 'BHR'
  }, {
    label: self.$t('BGD'),
    value: 'BGD'
  }, {
    label: self.$t('BRB'),
    value: 'BRB'
  }, {
    label: self.$t('BEL'),
    value: 'BEL'
  }, {
    label: self.$t('BLZ'),
    value: 'BLZ'
  }, {
    label: self.$t('BEN'),
    value: 'BEN'
  }, {
    label: self.$t('BMU'),
    value: 'BMU'
  }, {
    label: self.$t('BTN'),
    value: 'BTN'
  }, {
    label: self.$t('BOL'),
    value: 'BOL'
  }, {
    label: self.$t('BIH'),
    value: 'BIH'
  }, {
    label: self.$t('BWA'),
    value: 'BWA'
  }, {
    label: self.$t('BRA'),
    value: 'BRA'
  }, {
    label: self.$t('IOT'),
    value: 'IOT'
  }, {
    label: self.$t('VGB'),
    value: 'VGB'
  }, {
    label: self.$t('BRN'),
    value: 'BRN'
  }, {
    label: self.$t('BGR'),
    value: 'BGR'
  }, {
    label: self.$t('BFA'),
    value: 'BFA'
  }, {
    label: self.$t('KHM'),
    value: 'KHM'
  }, {
    label: self.$t('CMR'),
    value: 'CMR'
  }, {
    label: self.$t('CPV'),
    value: 'CPV'
  }, {
    label: self.$t('CYM'),
    value: 'CYM'
  }, {
    label: self.$t('TCD'),
    value: 'TCD'
  }, {
    label: self.$t('JER'),
    value: 'JER'
  }, {
    label: self.$t('CHL'),
    value: 'CHL'
  }, {
    label: self.$t('CHN'),
    value: 'CHN'
  }, {
    label: self.$t('COL'),
    value: 'COL'
  }, {
    label: self.$t('COM'),
    value: 'COM'
  }, {
    label: self.$t('COK'),
    value: 'COK'
  }, {
    label: self.$t('CRI'),
    value: 'CRI'
  }, {
    label: self.$t('HRV'),
    value: 'HRV'
  }, {
    label: self.$t('CUW'),
    value: 'CUW'
  }, {
    label: self.$t('CYP'),
    value: 'CYP'
  }, {
    label: self.$t('CZE'),
    value: 'CZE'
  }, {
    label: self.$t('DNK'),
    value: 'DNK'
  }, {
    label: self.$t('DJI'),
    value: 'DJI'
  }, {
    label: self.$t('DMA'),
    value: 'DMA'
  }, {
    label: self.$t('DOM'),
    value: 'DOM'
  }, {
    label: self.$t('TLS'),
    value: 'TLS'
  }, {
    label: self.$t('ECU'),
    value: 'ECU'
  }, {
    label: self.$t('EGY'),
    value: 'EGY'
  }, {
    label: self.$t('SLV'),
    value: 'SLV'
  }, {
    label: self.$t('GNQ'),
    value: 'GNQ'
  }, {
    label: self.$t('ERI'),
    value: 'ERI'
  }, {
    label: self.$t('EST'),
    value: 'EST'
  }, {
    label: self.$t('ETH'),
    value: 'ETH'
  }, {
    label: self.$t('FRO'),
    value: 'FRO'
  }, {
    label: self.$t('FLK'),
    value: 'FLK'
  }, {
    label: self.$t('FJI'),
    value: 'FJI'
  }, {
    label: self.$t('FIN'),
    value: 'FIN'
  }, {
    label: self.$t('FRA'),
    value: 'FRA'
  }, {
    label: self.$t('GUF'),
    value: 'GUF'
  }, {
    label: self.$t('PYF'),
    value: 'PYF'
  }, {
    label: self.$t('GAB'),
    value: 'GAB'
  }, {
    label: self.$t('GMB'),
    value: 'GMB'
  }, {
    label: self.$t('GEO'),
    value: 'GEO'
  }, {
    label: self.$t('DEU'),
    value: 'DEU'
  }, {
    label: self.$t('GHA'),
    value: 'GHA'
  }, {
    label: self.$t('GIB'),
    value: 'GIB'
  }, {
    label: self.$t('GRC'),
    value: 'GRC'
  }, {
    label: self.$t('GRL'),
    value: 'GRL'
  }, {
    label: self.$t('GRD'),
    value: 'GRD'
  }, {
    label: self.$t('GLP'),
    value: 'GLP'
  }, {
    label: self.$t('GTM'),
    value: 'GTM'
  }, {
    label: self.$t('GGY'),
    value: 'GGY'
  }, {
    label: self.$t('GUY'),
    value: 'GUY'
  }, {
    label: self.$t('HTI'),
    value: 'HTI'
  }, {
    label: self.$t('VAT'),
    value: 'VAT'
  }, {
    label: self.$t('HND'),
    value: 'HND'
  }, {
    label: self.$t('HKG'),
    value: 'HKG'
  }, {
    label: self.$t('HUN'),
    value: 'HUN'
  }, {
    label: self.$t('ISL'),
    value: 'ISL'
  }, {
    label: self.$t('IND'),
    value: 'IND'
  }, {
    label: self.$t('IDN'),
    value: 'IDN'
  }, {
    label: self.$t('IRL'),
    value: 'IRL'
  }, {
    label: self.$t('IMN'),
    value: 'IMN'
  }, {
    label: self.$t('ISR'),
    value: 'ISR'
  }, {
    label: self.$t('ITA'),
    value: 'ITA'
  }, {
    label: self.$t('JAM'),
    value: 'JAM'
  }, {
    label: self.$t('JPN'),
    value: 'JPN'
  }, {
    label: self.$t('JOR'),
    value: 'JOR'
  }, {
    label: self.$t('KAZ'),
    value: 'KAZ'
  }, {
    label: self.$t('KEN'),
    value: 'KEN'
  }, {
    label: self.$t('KIR'),
    value: 'KIR'
  }, {
    label: self.$t('KWT'),
    value: 'KWT'
  }, {
    label: self.$t('KGZ'),
    value: 'KGZ'
  }, {
    label: self.$t('LAO'),
    value: 'LAO'
  }, {
    label: self.$t('LVA'),
    value: 'LVA'
  }, {
    label: self.$t('LSO'),
    value: 'LSO'
  }, {
    label: self.$t('LBR'),
    value: 'LBR'
  }, {
    label: self.$t('LIE'),
    value: 'LIE'
  }, {
    label: self.$t('LTU'),
    value: 'LTU'
  }, {
    label: self.$t('LUX'),
    value: 'LUX'
  }, {
    label: self.$t('MAC'),
    value: 'MAC'
  }, {
    label: self.$t('MDG'),
    value: 'MDG'
  }, {
    label: self.$t('MWI'),
    value: 'MWI'
  }, {
    label: self.$t('MYS'),
    value: 'MYS'
  }, {
    label: self.$t('MDV'),
    value: 'MDV'
  }, {
    label: self.$t('MLT'),
    value: 'MLT'
  }, {
    label: self.$t('MHL'),
    value: 'MHL'
  }, {
    label: self.$t('MTQ'),
    value: 'MTQ'
  }, {
    label: self.$t('MRT'),
    value: 'MRT'
  }, {
    label: self.$t('MUS'),
    value: 'MUS'
  }, {
    label: self.$t('MYT'),
    value: 'MYT'
  }, {
    label: self.$t('MEX'),
    value: 'MEX'
  }, {
    label: self.$t('FSM'),
    value: 'FSM'
  }, {
    label: self.$t('MCO'),
    value: 'MCO'
  }, {
    label: self.$t('MNG'),
    value: 'MNG'
  }, {
    label: self.$t('MNE'),
    value: 'MNE'
  }, {
    label: self.$t('MSR'),
    value: 'MSR'
  }, {
    label: self.$t('MAR'),
    value: 'MAR'
  }, {
    label: self.$t('MOZ'),
    value: 'MOZ'
  }, {
    label: self.$t('NAM'),
    value: 'NAM'
  }, {
    label: self.$t('NPL'),
    value: 'NPL'
  }, {
    label: self.$t('NLD'),
    value: 'NLD'
  }, {
    label: self.$t('ANT'),
    value: 'ANT'
  }, {
    label: self.$t('NCL'),
    value: 'NCL'
  }, {
    label: self.$t('NZL'),
    value: 'NZL'
  }, {
    label: self.$t('NER'),
    value: 'NER'
  }, {
    label: self.$t('NIU'),
    value: 'NIU'
  }, {
    label: self.$t('NFK'),
    value: 'NFK'
  }, {
    label: self.$t('MNP'),
    value: 'MNP'
  }, {
    label: self.$t('NOR'),
    value: 'NOR'
  }, {
    label: self.$t('PSE'),
    value: 'PSE'
  }, {
    label: self.$t('OMN'),
    value: 'OMN'
  }, {
    label: self.$t('PAK'),
    value: 'PAK'
  }, {
    label: self.$t('PLW'),
    value: 'PLW'
  }, {
    label: self.$t('PAN'),
    value: 'PAN'
  }, {
    label: self.$t('PNG'),
    value: 'PNG'
  }, {
    label: self.$t('PRY'),
    value: 'PRY'
  }, {
    label: self.$t('PER'),
    value: 'PER'
  }, {
    label: self.$t('PHL'),
    value: 'PHL'
  }, {
    label: self.$t('PCN'),
    value: 'PCN'
  }, {
    label: self.$t('POL'),
    value: 'POL'
  }, {
    label: self.$t('PRT'),
    value: 'PRT'
  }, {
    label: self.$t('QAT'),
    value: 'QAT'
  }, {
    label: self.$t('KOR'),
    value: 'KOR'
  }, {
    label: self.$t('MDA'),
    value: 'MDA'
  }, {
    label: self.$t('REU'),
    value: 'REU'
  }, {
    label: self.$t('ROU'),
    value: 'ROU'
  }, {
    label: self.$t('RUS'),
    value: 'RUS'
  }, {
    label: self.$t('RWA'),
    value: 'RWA'
  }, {
    label: self.$t('SHN'),
    value: 'SHN'
  }, {
    label: self.$t('KNA'),
    value: 'KNA'
  }, {
    label: self.$t('LCA'),
    value: 'LCA'
  }, {
    label: self.$t('SPM'),
    value: 'SPM'
  }, {
    label: self.$t('VCT'),
    value: 'VCT'
  }, {
    label: self.$t('WSM'),
    value: 'WSM'
  }, {
    label: self.$t('SMR'),
    value: 'SMR'
  }, {
    label: self.$t('STP'),
    value: 'STP'
  }, {
    label: self.$t('SAU'),
    value: 'SAU'
  }, {
    label: self.$t('SEN'),
    value: 'SEN'
  }, {
    label: self.$t('SRB'),
    value: 'SRB'
  }, {
    label: self.$t('SYC'),
    value: 'SYC'
  }, {
    label: self.$t('SGP'),
    value: 'SGP'
  }, {
    label: self.$t('SVK'),
    value: 'SVK'
  }, {
    label: self.$t('SVN'),
    value: 'SVN'
  }, {
    label: self.$t('SLB'),
    value: 'SLB'
  }, {
    label: self.$t('ZAF'),
    value: 'ZAF'
  }, {
    label: self.$t('ESP'),
    value: 'ESP'
  }, {
    label: self.$t('LKA'),
    value: 'LKA'
  }, {
    label: self.$t('SUR'),
    value: 'SUR'
  }, {
    label: self.$t('SJM'),
    value: 'SJM'
  }, {
    label: self.$t('SWZ'),
    value: 'SWZ'
  }, {
    label: self.$t('SWE'),
    value: 'SWE'
  }, {
    label: self.$t('CHE'),
    value: 'CHE'
  }, {
    label: self.$t('TWN'),
    value: 'TWN'
  }, {
    label: self.$t('TJK'),
    value: 'TJK'
  }, {
    label: self.$t('THA'),
    value: 'THA'
  }, {
    label: self.$t('MKD'),
    value: 'MKD'
  }, {
    label: self.$t('TGO'),
    value: 'TGO'
  }, {
    label: self.$t('TKL'),
    value: 'TKL'
  }, {
    label: self.$t('TON'),
    value: 'TON'
  }, {
    label: self.$t('TTO'),
    value: 'TTO'
  }, {
    label: self.$t('TUN'),
    value: 'TUN'
  }, {
    label: self.$t('TUR'),
    value: 'TUR'
  }, {
    label: self.$t('TKM'),
    value: 'TKM'
  }, {
    label: self.$t('TCA'),
    value: 'TCA'
  }, {
    label: self.$t('TUV'),
    value: 'TUV'
  }, {
    label: self.$t('UGA'),
    value: 'UGA'
  }, {
    label: self.$t('ARE'),
    value: 'ARE'
  }, {
    label: self.$t('GBR'),
    value: 'GBR'
  }, {
    label: self.$t('TZA'),
    value: 'TZA'
  }, {
    label: self.$t('URY'),
    value: 'URY'
  }, {
    label: self.$t('UZB'),
    value: 'UZB'
  }, {
    label: self.$t('VUT'),
    value: 'VUT'
  }, {
    label: self.$t('VNM'),
    value: 'VNM'
  }, {
    label: self.$t('WLF'),
    value: 'WLF'
  }, {
    label: self.$t('ESH'),
    value: 'ESH'
  }, {
    label: self.$t('ZMB'),
    value: 'ZMB'
  }];
};

/***/ }),

/***/ "./src/less/global.less":
/*!******************************!*\
  !*** ./src/less/global.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!./global.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./src/less/global.less");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1ee0f3d3", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/marketing/index.js":
/*!********************************!*\
  !*** ./src/marketing/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue */ "./src/marketing/index.vue");
/* harmony import */ var _store_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/module */ "./src/store/module.js");
/* harmony import */ var _components_MFScanner_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MFScanner.vue */ "./src/components/MFScanner.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var store = new Vuex.Store({
  modules: {
    fundscanner: _store_module__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});
var router = new VueRouter({
  mode: "hash",
  hashbang: true,
  history: true,
  scrollBehavior: function scrollBehavior(to, from, saved) {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [{
    path: '/',
    component: _components_MFScanner_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }]
});
router.afterEach(function (to, from) {
  window.scrollTo(0, 0);
});

__webpack_require__(/*! ../less/global.less */ "./src/less/global.less");

var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a(_objectSpread({
  store: store,
  router: router
}, _index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]));

if (window.AUTO_MOUNT !== false) {
  var appEl = document.getElementById('app');

  if (appEl) {
    app.$mount('#app');
  }
}

window.fndscannerapp = app;

/***/ }),

/***/ "./src/marketing/index.vue":
/*!*********************************!*\
  !*** ./src/marketing/index.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_25854f40_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=25854f40&lang=pug& */ "./src/marketing/index.vue?vue&type=template&id=25854f40&lang=pug&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/marketing/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=less& */ "./src/marketing/index.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_25854f40_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_25854f40_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/marketing/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/marketing/index.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/marketing/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/marketing/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/marketing/index.vue?vue&type=style&index=0&lang=less&":
/*!*******************************************************************!*\
  !*** ./src/marketing/index.vue?vue&type=style&index=0&lang=less& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=less& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/marketing/index.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/marketing/index.vue?vue&type=template&id=25854f40&lang=pug&":
/*!*************************************************************************!*\
  !*** ./src/marketing/index.vue?vue&type=template&id=25854f40&lang=pug& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25854f40_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader??ref--2-oneOf-0!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=25854f40&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/marketing/index.vue?vue&type=template&id=25854f40&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25854f40_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_ref_2_oneOf_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25854f40_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/store/module.js":
/*!*****************************!*\
  !*** ./src/store/module.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var state = {
  urlFilters: {} //-- filters passed from the url as query strings

};
var mutations = {
  SET_FILTERS_FROM_URL: function SET_FILTERS_FROM_URL(state, data) {
    state.urlFilters = data;
  }
};
var actions = {
  setFiltersFromUrl: function setFiltersFromUrl(_ref, data) {
    var commit = _ref.commit;
    commit('SET_FILTERS_FROM_URL', data);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "vuex":
/*!***********************!*\
  !*** external "Vuex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vuex;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
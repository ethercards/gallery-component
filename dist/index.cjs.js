'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var axios = require('axios');
var InfiniteScroll = require('react-infinite-scroll-component');
var _ = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var InfiniteScroll__default = /*#__PURE__*/_interopDefaultLegacy(InfiniteScroll);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var FilterContext = /*#__PURE__*/React.createContext([]);
var FilterContextProvider = function FilterContextProvider(_ref) {
  var children = _ref.children;
  var _useState = React.useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    filters = _useState2[0],
    setFilters = _useState2[1];
  var _useState3 = React.useState(1),
    _useState4 = _slicedToArray(_useState3, 2),
    currentPage = _useState4[0],
    setCurrentPage = _useState4[1];
  var updateFilters = function updateFilters(value) {
    setFilters(value);
    resetCurrentPage();
  };
  var updateCurrentPage = function updateCurrentPage(value) {
    setCurrentPage(value);
  };
  var resetCurrentPage = function resetCurrentPage() {
    setCurrentPage(1);
  };
  return /*#__PURE__*/React__default["default"].createElement(FilterContext.Provider, {
    value: {
      filters: filters,
      updateFilters: updateFilters,
      updateCurrentPage: updateCurrentPage,
      currentPage: currentPage,
      resetCurrentPage: resetCurrentPage
    }
  }, children);
};

const getFilters = async base_url => {
  return new Promise((resolve, reject) => {
    axios__default["default"].get(`${base_url}filters`).then(response => {
      resolve(response.data);
    }).catch(e => {
      console.log(e.response.status);
      reject(e.response.status);
    });
  });
};
const getFilteredCards = async (base_url, filters, currentPage) => {
  return new Promise((resolve, reject) => {
    axios__default["default"].post(`${base_url}filter?page=${currentPage}`, filters).then(response => {
      resolve(response.data);
    }).catch(e => {
      reject(e.message);
    });
  });
};

const FilterItem = _ref => {
  let {
    filterKeyName,
    filterList = [],
    handleSelect,
    selectedFilters = []
  } = _ref;
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleCheckboxChange = event => {
    const {
      value,
      checked
    } = event.target;
    handleSelect(filterKeyName, value, checked);
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-filter-dropdown-container"
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    className: "dropdown-label",
    onClick: toggleDropdown
  }, filterKeyName), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `gallery-filter-dropdown-content ${isOpen ? 'open' : ''}`
  }, filterList.map(option => /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-filter-item-box",
    key: option
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    className: "gallery-filter-item-box-name"
  }, option), /*#__PURE__*/React__default["default"].createElement("label", {
    className: "checkbox-container"
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "checkbox",
    value: option,
    onChange: handleCheckboxChange,
    checked: selectedFilters.includes(option)
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "checkmark"
  }))))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `gallery-filter-dropdown-backdrop ${isOpen ? 'open' : ''}`,
    onClick: toggleDropdown
  }));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = ".gallery-filter-container-root {\r\n  margin: 20px auto;\r\n  text-align: center;\r\n  width: 100%;\r\n  background-color: #faf9f5;\r\n  box-shadow: 0px 0px 15px 2px rgb(0 0 0 / 29%);\r\n  border-radius: 20px;\r\n  z-index: 1;\r\n\r\n}\r\n\r\n.gallery-filter-inner-container {\r\n  padding: 16px 20px;\r\n  display: flex;\r\n  column-gap: 32px;\r\n  width: auto;\r\n}\r\n\r\n.dark .gallery-filter-container-root {\r\n  background-color: #151E2A;\r\n}\r\n\r\n.dropdown-label {\r\n  font-family: 'poppins-semibold';\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  color: #000;\r\n}\r\n\r\n.dark .dropdown-label {\r\n  color: #FFF\r\n}\r\n\r\n.gallery-filter-dropdown-container {\r\n  display: inline-block;\r\n}\r\n\r\n.gallery-filter-dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #faf9f5;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n  padding: 12px 16px;\r\n  z-index: 3;\r\n  max-height: 160px;\r\n  overflow:  hidden auto ;\r\n  scrollbar-width: thin;\r\n  scrollbar-color: #FE2C85 transparent;\r\n}\r\n.dark .gallery-filter-dropdown-content {\r\n  background-color: #151E2A;\r\n}\r\n\r\n.gallery-filter-dropdown-content.open {\r\n  display: block;\r\n}\r\n.gallery-filter-dropdown-content::-webkit-scrollbar {\r\n  width: 6px;               /* width of the entire scrollbar */\r\n}\r\n\r\n.gallery-filter-dropdown-content::-webkit-scrollbar-track {\r\n  background: transparent;        /* color of the tracking area */\r\n}\r\n\r\n.gallery-filter-dropdown-content::-webkit-scrollbar-thumb {\r\n  background-color: #FE2C85;    /* color of the scroll thumb */\r\n  border-radius: 20px;       /* roundness of the scroll thumb */\r\n  border: 1px solid #FE2C85;  /* creates padding around scroll thumb */\r\n}\r\n.gallery-filter-dropdown-backdrop {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: 2;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.gallery-filter-dropdown-backdrop.open {\r\n  display: block;\r\n}\r\n\r\n\r\n\r\n.gallery-filter-item-box {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  column-gap: 10px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.gallery-filter-item-box .gallery-filter-item-box-name {\r\n  font-family: 'poppins';\r\n  font-size: 14px;\r\n}\r\n.dark .gallery-filter-item-box .gallery-filter-item-box-name {\r\n color: #FFF;\r\n}\r\n\r\n.checkbox-container {\r\n  display: inline-block; \r\n  position: relative;\r\n  display: flex;\r\n  align-items: baseline;\r\n  justify-content: center;\r\n}\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  height: 15px;\r\n  width: 15px;\r\n  background-color: #FFF;\r\n  border: 1px solid #FE2C85;\r\n  cursor: pointer;\r\n}\r\n.checkbox-container input{\r\n  margin: 0;\r\n}\r\n.dark .checkmark {\r\n  background-color: #151E2A;\r\n}\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.checkbox-container input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n.checkbox-container .checkmark:after {\r\n  left: 5px;\r\n  top: 1px;\r\n  width: 4px;\r\n  height: 8px;\r\n  border: solid #FE2C85;\r\n  border-width: 0 2px 2px 0;\r\n  transform: rotate(45deg);\r\n}";
styleInject(css_248z$3);

const FilterContainer = _ref => {
  let {
    filtersArray
  } = _ref;
  const {
    filters,
    updateFilters
  } = React.useContext(FilterContext);
  const handleSelect = (category, item, checked) => {
    const activeFilters = {
      ...filters
    };
    if (checked) {
      const tmpArray = activeFilters[category] ? [...activeFilters[category], item] : [item];
      activeFilters[category] = tmpArray;
    } else {
      if (activeFilters[category]) {
        const filteredArray = activeFilters[category].filter(data => data !== item);
        if (filteredArray.length === 0) {
          delete activeFilters[category];
        } else {
          activeFilters[category] = filteredArray;
        }
      }
    }
    updateFilters(activeFilters);
  };
  const renderFilters = () => {
    return filtersArray ? Object.keys(filtersArray).map((filterKeyName, index) => /*#__PURE__*/React__default["default"].createElement(FilterItem, {
      filterKeyName: filterKeyName,
      filterList: filtersArray[filterKeyName],
      key: index,
      handleSelect: handleSelect,
      selectedFilters: filters[filterKeyName]
    })) : 'No filters loaded!';
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-filter-container-root"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-filter-inner-container"
  }, renderFilters()));
};

var Filter = function Filter(_ref) {
  var baseUrl = _ref.baseUrl;
    _ref.headerStyle;
  //this component fetching data from BE
  var _useState = React.useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    filters = _useState2[0],
    setFilters = _useState2[1];
  var fetchFilters = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            getFilters(baseUrl).then(function (res) {
              setFilters(res);
            }).catch(function (e) {
              if (e) {
                setFilters(null);
              }
            });
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function fetchFilters() {
      return _ref2.apply(this, arguments);
    };
  }();
  React.useEffect(function () {
    fetchFilters();
  }, [baseUrl]);
  return filters && /*#__PURE__*/React__default["default"].createElement(FilterContainer, {
    filtersArray: filters
  });
};
var Filter$1 = /*#__PURE__*/React__default["default"].memo(Filter);

const placeHolder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';
const LazyImage = _ref => {
  let {
    src,
    alt,
    idx,
    imageOnLoad,
    onClick,
    style
  } = _ref;
  const [imageSrc, setImageSrc] = React.useState(placeHolder);
  const [imageRef, setImageRef] = React.useState();
  const onLoad = event => {
    event.target.classList.add('loaded');
    imageOnLoad();
  };
  const onError = event => {
    event.target.classList.add('has-error');
  };
  React.useEffect(() => {
    let observer;
    let didCancel = false;
    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
              setTimeout(() => {
                setImageSrc(src);
              }, idx * 100); //add 200 ms delay between image loads :/

              observer.unobserve(imageRef);
            }
          });
        }, {
          threshold: 0.01,
          rootMargin: '75%'
        });
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);
  return /*#__PURE__*/React__default["default"].createElement("img", {
    className: "gallery-lazy-image",
    ref: setImageRef,
    src: imageSrc,
    alt: alt,
    onLoad: onLoad,
    onError: onError,
    style: {
      zIndex: '0',
      ...style
    },
    onClick: onClick
  });
};

var css_248z$2 = ".gallery-card-root-box {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n  background-color: #faf9f5;\r\n  box-shadow: 0px 0px 15px 2px rgb(0 0 0 / 29%)\r\n}\r\n\r\n.dark .gallery-card-root-box {\r\n  background-color: #151E2A;\r\n}\r\n\r\n.gallery-card-root-box p {\r\n  margin-block-start: 0em !important;\r\n  margin-block-end: 0em !important;\r\n}\r\n\r\n.gallery-card-image-holder {\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.gallery-card-content {\r\n  padding: 15px 22px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  gap: 10px;\r\n}\r\n\r\n.gallery-card-content-general {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  column-gap: 16px;\r\n}\r\n\r\n.gallery-card-content-name {\r\n  font-size: 22px;\r\n  line-height: 26px;\r\n  color: #000;\r\n  font-family: Poppins, 'poppins-semibold';\r\n  font-weight: 500;\r\n  text-align: left;\r\n  /* min-height: 85px; */\r\n}\r\n\r\n.dark .gallery-card-content-name {\r\n  color: #FFF;\r\n}\r\n\r\n.gallery-card-label-title {\r\n  text-align: start !important;\r\n  font-family: Bau, 'bau';\r\n  font-size: 16px;\r\n  color: #FE2C85;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.gallery-card-flex-box {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  min-height: 72px;\r\n}\r\n\r\n.gallery-card-content-id-box p {\r\n  font-family: Bau, 'bau';\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  color: #000;\r\n  text-align: left;\r\n}\r\n\r\n.price-container span {\r\n  color: #00000090;\r\n}\r\n\r\n.dark .price-container span {\r\n  color: #FFFFFF90;\r\n}\r\n\r\n.dark .gallery-card-content-id-box p {\r\n  color: #F5F6FC;\r\n}\r\n\r\n.gallery-owner-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.gallery-owner-box p {\r\n  color: #F5F6FC;\r\n  font-family: Bau, 'bau';\r\n}\r\n\r\n.gallery-owner-box p:hover {\r\n  color: #FE2C85;\r\n}\r\n\r\n.gallery-card-price-holder {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.gallery-price-box {\r\n  display: flex;\r\n  gap: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.gallery-price-box p {\r\n  /* color: #FE2C85 !important; */\r\n  color: #00000090;\r\n  line-height: 18px;\r\n  font-size: 16px;\r\n  font-family: Bau, 'bau';\r\n  font-weight: 600;\r\n}\r\n\r\n.dark .gallery-price-box p {\r\n  color: #F5F6FC;\r\n}\r\n\r\n.gallery-card-token-symbol {\r\n  height: 17px;\r\n  width: auto;\r\n}\r\n\r\n.gallery-social-trait-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.gallery-social-items-box {\r\n  margin-bottom: 10px;\r\n  display: flex;\r\n  gap: 10px\r\n}\r\n\r\n.gallery-trait-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 3px;\r\n  justify-content: flex-start;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gallery-trait-holder-box {\r\n  /* border-radius: 20px; */\r\n  border-radius: 5px;\r\n  width: 26px;\r\n  height: 26px;\r\n  background-color: #030000;\r\n  padding: 3px;\r\n  overflow: hidden;\r\n  /* border: 1px solid #FE2C85; */\r\n  /* border: 2px solid white; */\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.gallery-trait-holder-box img {\r\n  /* min-height: 28px; */\r\n  width: 100%;\r\n  height: auto;\r\n}";
styleInject(css_248z$2);

var img$5 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='41.248' height='41.177' viewBox='0 0 41.248 41.177'%3e %3cg id='opensea' transform='translate(-4.953 -6)'%3e %3cg id='Group_1481' data-name='Group 1481' transform='translate(4.953 6)'%3e %3cpath id='Path_140' data-name='Path 140' d='M13.529%2c25.573a1.75%2c1.75%2c0%2c0%2c1%2c1.751-1.751h.008l2.914.008a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.751V36.6c.328-.1.749-.2%2c1.213-.312a1.461%2c1.461%2c0%2c0%2c0%2c1.128-1.423V21.211a1.75%2c1.75%2c0%2c0%2c1%2c1.751-1.751h2.922a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.751V33.884s.733-.295%2c1.44-.6a1.463%2c1.463%2c0%2c0%2c0%2c.893-1.347V16.84A1.75%2c1.75%2c0%2c0%2c1%2c32.8%2c15.089h2.914a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.751V29.286A34.4%2c34.4%2c0%2c0%2c0%2c44.593%2c22.6a2.946%2c2.946%2c0%2c0%2c0%2c.446-2.745A20.609%2c20.609%2c0%2c1%2c0%2c7.694%2c36.873a2.6%2c2.6%2c0%2c0%2c0%2c2.484%2c1.288c.556-.051%2c1.238-.118%2c2.055-.211A1.457%2c1.457%2c0%2c0%2c0%2c13.521%2c36.5l.008-10.93' transform='translate(-4.953 -6.003)' fill='%2321325b'/%3e %3cpath id='Path_141' data-name='Path 141' d='M106.1%2c251.479a20.6%2c20.6%2c0%2c0%2c0%2c32.731-16.665c0-.472-.025-.943-.051-1.415-7.528%2c11.233-21.439%2c16.488-32.681%2c18.079' transform='translate(-97.583 -214.252)' fill='%23979695'/%3e %3c/g%3e %3cpath id='Path_142' data-name='Path 142' d='M46.677%2c26.589A20.589%2c20.589%2c0%2c1%2c1%2c26.089%2c6%2c20.592%2c20.592%2c0%2c0%2c1%2c46.677%2c26.589Z' transform='translate(-0.501)' fill='%232081e2'/%3e %3cpath id='Path_143' data-name='Path 143' d='M125.931%2c165.509l.084-.126%2c5.356-8.362c.084-.126.244-.126.328.042.909%2c2.021%2c1.65%2c4.488%2c1.314%2c6.054a8.8%2c8.8%2c0%2c0%2c1-1.069%2c2.307.985.985%2c0%2c0%2c1-.2.328.219.219%2c0%2c0%2c1-.168.084h-5.516A.225.225%2c0%2c0%2c1%2c125.931%2c165.509Z' transform='translate(-110.76 -138.221)' fill='white'/%3e %3cpath id='Path_144' data-name='Path 144' d='M133.105%2c118.418v1.314c0%2c.084-.042.126-.126.168a6.4%2c6.4%2c0%2c0%2c0-2.434%2c1.65c-1.524%2c2.1-2.678%2c5.1-5.229%2c5.1H114.58a6.9%2c6.9%2c0%2c0%2c1-6.88-6.922v-.126a.181.181%2c0%2c0%2c1%2c.168-.168h6.054a.216.216%2c0%2c0%2c1%2c.2.2%2c2.333%2c2.333%2c0%2c0%2c0%2c.2%2c1.154%2c2.094%2c2.094%2c0%2c0%2c0%2c1.895%2c1.154h2.964v-2.307h-2.922a.187.187%2c0%2c0%2c1-.168-.286.581.581%2c0%2c0%2c0%2c.126-.168c.286-.413.657-.985%2c1.069-1.684a9.738%2c9.738%2c0%2c0%2c0%2c.741-1.482%2c2.39%2c2.39%2c0%2c0%2c0%2c.126-.286c.042-.168.126-.328.168-.455s.084-.244.126-.371a6.808%2c6.808%2c0%2c0%2c0%2c.126-1.356%2c2.782%2c2.782%2c0%2c0%2c0-.042-.573c0-.2-.042-.413-.042-.615a2.392%2c2.392%2c0%2c0%2c0-.084-.539%2c5.738%2c5.738%2c0%2c0%2c0-.168-.825l-.042-.084a2.65%2c2.65%2c0%2c0%2c0-.168-.539c-.168-.573-.37-1.154-.573-1.65-.084-.2-.168-.413-.244-.615-.126-.286-.244-.573-.37-.825-.042-.126-.126-.2-.168-.328s-.126-.244-.168-.371c-.042-.084-.084-.168-.126-.244l-.37-.657c-.042-.084.042-.2.126-.168l2.265.615h0l.286.084.328.084.126.042V105a1.192%2c1.192%2c0%2c0%2c1%2c1.154-1.2%2c1.179%2c1.179%2c0%2c0%2c1%2c.825.328%2c1.164%2c1.164%2c0%2c0%2c1%2c.328.825v1.979l.244.084a.041.041%2c0%2c0%2c1%2c.042.042%2c1.448%2c1.448%2c0%2c0%2c0%2c.244.2%2c1.672%2c1.672%2c0%2c0%2c0%2c.286.244c.2.168.5.413.783.657.084.084.168.126.2.2a15.975%2c15.975%2c0%2c0%2c1%2c1.2%2c1.2c.126.126.2.244.328.371s.2.286.328.413c.126.168.286.371.413.539a2.149%2c2.149%2c0%2c0%2c1%2c.168.286c.168.244.286.5.455.741.042.126.126.244.168.371a2.937%2c2.937%2c0%2c0%2c1%2c.328%2c1.027.445.445%2c0%2c0%2c1%2c.042.2h0a.779.779%2c0%2c0%2c1%2c.042.328%2c4.553%2c4.553%2c0%2c0%2c1-.042%2c1.069c-.042.168-.084.286-.126.455a3.135%2c3.135%2c0%2c0%2c1-.168.455%2c9.574%2c9.574%2c0%2c0%2c1-.455.867c-.042.084-.126.2-.2.328a1.157%2c1.157%2c0%2c0%2c0-.2.328c-.084.126-.2.244-.286.371a2.745%2c2.745%2c0%2c0%2c1-.286.371c-.126.168-.286.328-.413.5a2039668559500.258%2c2039668559500.258%2c0%2c0%2c1-.573.573%2c2.593%2c2.593%2c0%2c0%2c1-.371.328l-.244.2a.155.155%2c0%2c0%2c1-.126.042h-1.81v2.307h2.265a2.041%2c2.041%2c0%2c0%2c0%2c1.356-.5c.126-.126.7-.615%2c1.4-1.356.042-.042.042-.042.084-.042l6.257-1.81C133.021%2c118.216%2c133.105%2c118.292%2c133.105%2c118.418Z' transform='translate(-94.095 -89.565)' fill='white'/%3e %3c/g%3e%3c/svg%3e";

var img$4 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='41.756' height='41.177' viewBox='0 0 41.756 41.177'%3e %3cg id='Group_1482' data-name='Group 1482' transform='translate(-288 -1871)'%3e %3cellipse id='Ellipse_1' data-name='Ellipse 1' cx='20.878' cy='20.469' rx='20.878' ry='20.469' transform='translate(288 1871.24)' fill='white'/%3e %3cg id='etherscan-seeklogo.com' transform='translate(288.125 1871)'%3e %3cpath id='Path_138' data-name='Path 138' d='M13.529%2c25.573a1.75%2c1.75%2c0%2c0%2c1%2c1.752-1.752h.008l2.914.008a1.75%2c1.75%2c0%2c0%2c1%2c1.752%2c1.751V36.6c.328-.1.749-.2%2c1.213-.312a1.461%2c1.461%2c0%2c0%2c0%2c1.128-1.423V21.211a1.75%2c1.75%2c0%2c0%2c1%2c1.752-1.752h2.922a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.752V33.884s.733-.295%2c1.44-.6a1.463%2c1.463%2c0%2c0%2c0%2c.893-1.347V16.84A1.75%2c1.75%2c0%2c0%2c1%2c32.8%2c15.089h2.914a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.752V29.286A34.4%2c34.4%2c0%2c0%2c0%2c44.593%2c22.6a2.946%2c2.946%2c0%2c0%2c0%2c.446-2.745A20.609%2c20.609%2c0%2c1%2c0%2c7.694%2c36.873a2.6%2c2.6%2c0%2c0%2c0%2c2.484%2c1.288c.556-.051%2c1.238-.118%2c2.055-.211A1.458%2c1.458%2c0%2c0%2c0%2c13.521%2c36.5l.008-10.93' transform='translate(-4.953 -6.003)' fill='%2321325b'/%3e %3cpath id='Path_139' data-name='Path 139' d='M106.1%2c251.479a20.6%2c20.6%2c0%2c0%2c0%2c32.731-16.665c0-.472-.025-.943-.051-1.415-7.528%2c11.233-21.439%2c16.488-32.681%2c18.079' transform='translate(-97.583 -214.252)' fill='%23979695'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg id='eth' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='10.321' height='14' viewBox='0 0 10.321 14'%3e %3cdefs%3e %3cclipPath id='clip-path'%3e %3crect id='Rectangle_2677' data-name='Rectangle 2677' width='10.321' height='14' fill='%23848383'/%3e %3c/clipPath%3e %3c/defs%3e %3cg id='Group_3379' data-name='Group 3379' clip-path='url(%23clip-path)'%3e %3cpath id='Path_1081' data-name='Path 1081' d='M9.093%2c10.572a5.315%2c5.315%2c0%2c0%2c1-3%2c.812%2c5.405%2c5.405%2c0%2c0%2c1-2.507-.572A4.453%2c4.453%2c0%2c0%2c1%2c1.835%2c9.249%2c4.025%2c4.025%2c0%2c0%2c1%2c1.2%2c7.023a4.063%2c4.063%2c0%2c0%2c1%2c.639-2.234A4.367%2c4.367%2c0%2c0%2c1%2c3.6%2c3.225a5.518%2c5.518%2c0%2c0%2c1%2c2.515-.564A4.95%2c4.95%2c0%2c0%2c1%2c9.568%2c3.894l.754-.707A4.839%2c4.839%2c0%2c0%2c0%2c8.47%2c2.052%2c7.209%2c7.209%2c0%2c0%2c0%2c6.159%2c1.67V0L5%2c.524V1.741a6.459%2c6.459%2c0%2c0%2c0-2.046.619A5.384%2c5.384%2c0%2c0%2c0%2c.786%2c4.278%2c4.975%2c4.975%2c0%2c0%2c0%2c0%2c7.023%2c4.976%2c4.976%2c0%2c0%2c0%2c.786%2c9.768a5.379%2c5.379%2c0%2c0%2c0%2c2.163%2c1.918A6.445%2c6.445%2c0%2c0%2c0%2c5%2c12.306V14l1.163-.523v-1.1a7.61%2c7.61%2c0%2c0%2c0%2c2.2-.344%2c5.751%2c5.751%2c0%2c0%2c0%2c1.9-.993V7.922L9.093%2c8.4Z' transform='translate(0 -0.001)' fill='%23848383'/%3e %3c/g%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='11.491' height='14' viewBox='0 0 11.491 14'%3e %3cg id='dust' transform='translate(-1000.2 -403.5)'%3e %3cpath id='Path_1082' data-name='Path 1082' d='M1006.446%2c403.5v1.11c.335.063.662.114.974.194a5.105%2c5.105%2c0%2c0%2c1%2c4.113%2c4.228%2c7.549%2c7.549%2c0%2c0%2c1-.161%2c3.717%2c5.179%2c5.179%2c0%2c0%2c1-4.366%2c3.675c-.179.034-.363.059-.561.093v.983h-2.758v-.907H1000.2V404.572h3.47V403.5C1004.6%2c403.5%2c1005.508%2c403.5%2c1006.446%2c403.5Zm-3.5%2c3.089v7.949c.956%2c0%2c1.9.063%2c2.836-.013a2.981%2c2.981%2c0%2c0%2c0%2c2.822-2.211%2c5.86%2c5.86%2c0%2c0%2c0%2c0-3.5%2c3.046%2c3.046%2c0%2c0%2c0-2.946-2.215C1004.764%2c406.546%2c1003.863%2c406.589%2c1002.944%2c406.589Z' fill='%23848383'/%3e %3c/g%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='17.443' height='14' viewBox='0 0 17.443 14'%3e %3cg id='matic' transform='translate(-1093.7 -531.625)'%3e %3cpath id='Path_1080' data-name='Path 1080' d='M1093.744%2c536.578V534.6a.879.879%2c0%2c0%2c1%2c.5-.82c1.263-.66%2c2.526-1.34%2c3.789-2.019a.918.918%2c0%2c0%2c1%2c.958%2c0c1.285.68%2c2.548%2c1.359%2c3.833%2c2.019a.8.8%2c0%2c0%2c1%2c.479.78v1.12a.464.464%2c0%2c0%2c1-.261.42c-.348.18-.7.38-1.067.56-.24.12-.37.04-.37-.22v-.98a.859.859%2c0%2c0%2c0-.5-.82c-.7-.36-1.372-.72-2.069-1.1a.986.986%2c0%2c0%2c0-1.045%2c0c-.7.38-1.394.74-2.091%2c1.1a.839.839%2c0%2c0%2c0-.5.78v2.259a.792.792%2c0%2c0%2c0%2c.479.76c.7.36%2c1.394.72%2c2.091%2c1.1a1.03%2c1.03%2c0%2c0%2c0%2c1.045%2c0c2.243-1.2%2c4.508-2.4%2c6.751-3.6a1.092%2c1.092%2c0%2c0%2c1%2c1.154%2c0c1.2.66%2c2.417%2c1.3%2c3.637%2c1.919a.943.943%2c0%2c0%2c1%2c.588.9c-.022%2c1.3%2c0%2c2.6%2c0%2c3.9a.883.883%2c0%2c0%2c1-.544.86c-1.241.64-2.483%2c1.3-3.7%2c1.959a1.024%2c1.024%2c0%2c0%2c1-1.067%2c0l-3.724-1.979a.825.825%2c0%2c0%2c1-.523-.84V541.6a.484.484%2c0%2c0%2c1%2c.283-.46c.349-.18.675-.36%2c1-.54.261-.14.414-.06.414.22v1.02a.787.787%2c0%2c0%2c0%2c.436.72c.74.4%2c1.481.78%2c2.2%2c1.18a.851.851%2c0%2c0%2c0%2c.871%2c0c.74-.4%2c1.481-.78%2c2.221-1.18a.779.779%2c0%2c0%2c0%2c.436-.7v-2.3a.779.779%2c0%2c0%2c0-.457-.74c-.719-.38-1.416-.76-2.134-1.14a1%2c1%2c0%2c0%2c0-1%2c0c-2.265%2c1.2-4.53%2c2.4-6.794%2c3.619a1.092%2c1.092%2c0%2c0%2c1-1.154%2c0c-1.219-.66-2.461-1.32-3.68-1.959a.872.872%2c0%2c0%2c1-.523-.84C1093.744%2c537.9%2c1093.744%2c537.238%2c1093.744%2c536.578Z' transform='translate(0 0)' fill='%23848383'/%3e %3c/g%3e%3c/svg%3e";

const Card = _ref => {
  let {
    card,
    openseaUrl,
    etherscanUrl,
    handleCardClick,
    displayTraits,
    owner,
    ownerLabel,
    handleOwnerClick,
    isMarketplace,
    erc777Symbol = '',
    chainDefaultToken = ''
  } = _ref;
  const [loading, setLoading] = React.useState(true);
  const handleCardImageClick = tokenId => {
    handleCardClick && handleCardClick(tokenId);
  };
  const handleEtherscanClick = () => {
    etherscanUrl && window.open(`${etherscanUrl}`, '_blank');
  };
  const handleOpenseaClick = tokenId => {
    openseaUrl && window.open(`${openseaUrl}/${tokenId}`, '_blank');
  };
  const handleOwnerBoxClick = owner => {
    handleOwnerClick(owner);
  };
  console.log(owner);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-root-box"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-image-holder"
  }, /*#__PURE__*/React__default["default"].createElement(LazyImage, {
    style: {
      cursor: handleCardClick ? 'pointer' : 'unset',
      width: '100%'
    },
    src: card.image,
    imageOnLoad: () => setLoading(false),
    alt: "Card",
    onClick: () => {
      handleCardImageClick(card.tokenId);
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-content"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "gallery-card-content-name "
  }, card.collection_name, /*#__PURE__*/React__default["default"].createElement("br", null), "#", card.tokenId), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-flex-box"
  }, owner || ownerLabel ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-owner-box"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "gallery-card-label-title"
  }, "Owner"), /*#__PURE__*/React__default["default"].createElement("p", {
    onClick: () => handleOwnerBoxClick(owner),
    style: {
      cursor: handleOwnerBoxClick ? 'pointer' : 'unset'
    }
  }, ownerLabel || owner.slice(0, 6) + '...')) : '', isMarketplace && card.marketplace && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-price-holder"
  }, (card.marketplace.sale_native || card.marketplace.sale_erc777) && /*#__PURE__*/React__default["default"].createElement("span", {
    className: "gallery-card-label-title"
  }, "Price"), Number(card.marketplace.sale_native) > 0 && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-content-id-box gallery-price-box"
  }, /*#__PURE__*/React__default["default"].createElement("p", null, card.marketplace.sale_native), chainDefaultToken.toLowerCase().includes('eth') ? /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$3,
    alt: "ETH",
    className: "gallery-card-token-symbol"
  }) : /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$1,
    alt: "MATIC",
    className: "gallery-card-token-symbol"
  })), Number(card.marketplace.sale_erc777) > 0 && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-content-id-box gallery-price-box"
  }, /*#__PURE__*/React__default["default"].createElement("p", null, card.marketplace.sale_erc777), /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$2,
    alt: "ETH",
    className: "gallery-card-token-symbol"
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-social-trait-box"
  }, etherscanUrl || openseaUrl ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-social-items-box"
  }, openseaUrl && /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$5,
    alt: "opensea",
    style: {
      maxWidth: '30px',
      cursor: openseaUrl ? 'pointer' : 'unset'
    },
    onClick: () => handleOpenseaClick(card.tokenId)
  }), etherscanUrl && /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$4,
    alt: "etherscan",
    style: {
      maxWidth: '30px',
      cursor: etherscanUrl ? 'pointer' : 'unset'
    },
    onClick: () => handleEtherscanClick()
  })) : null, card.traits && displayTraits && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "gallery-card-label-title"
  }, "Utility Traits:"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-trait-container"
  }, card.traits.map((item, index) => item.status ? item.status === '1' && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-trait-holder-box",
    key: index
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: item.icon_url,
    alt: "trait"
  })) : /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-trait-holder-box",
    key: index
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: item.icon_url,
    alt: "trait"
  }))))))));
};

var css_248z$1 = ".gallery-grid-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 24px;\r\n  padding: 10px;\r\n}\r\n\r\n.gallery-card-item {\r\n  flex-basis: 23%;\r\n  -webkit-box-flex: 0;\r\n  flex-grow: 0;\r\n  max-width: 23%;\r\n}\r\n\r\n.dark .gallery-error-message {\r\n  color: #FFF;\r\n}\r\n\r\n.gallery-error-message {\r\n  color: #000\r\n}\r\n\r\n.dark .gallery-no-item-message {\r\n  color: #FFF;\r\n}\r\n\r\n.gallery-no-item-message {\r\n  color: #000\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  .gallery-card-item {\r\n    flex-basis: 45%;\r\n    max-width: 45%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .gallery-card-item {\r\n    flex-basis: 100%;\r\n    max-width: 100%;\r\n  }\r\n}";
styleInject(css_248z$1);

function useDeepCompareMemoize(value) {
  const ref = React.useRef();
  if (!___default["default"].isEqual(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}
function useDeepEffect(callback, dependencies) {
  React.useEffect(callback, useDeepCompareMemoize(dependencies));
}

const ScrollComponent = _ref => {
  let {
    nfts,
    openseaUrl,
    etherscanUrl,
    handleCardClick,
    displayTraits,
    handleOwnerClick,
    scrollCallback,
    done,
    isMarketplace,
    erc777Symbol,
    chainDefaultToken
  } = _ref;
  const ITEMS_PER_PAGE = 16;
  const [cards, setCards] = React.useState([]);
  const {
    currentPage,
    updateCurrentPage
  } = React.useContext(FilterContext);
  const currentPageRef = React.useRef(1);
  const setCurrentPage = val => {
    //update the context, and the ref to store the actual data
    updateCurrentPage(val);
    currentPageRef.current = val;
  };
  const handleCallback = val => {
    scrollCallback(currentPageRef.current + 1);
    currentPageRef.current = val;
  };
  const renderCards = () => {
    return cards.map((card, i) => {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        key: i,
        className: "gallery-card-item"
      }, /*#__PURE__*/React__default["default"].createElement(Card, {
        card: card.metadata ? card.metadata : card,
        openseaUrl: openseaUrl,
        etherscanUrl: etherscanUrl,
        handleCardClick: handleCardClick,
        displayTraits: displayTraits
        // owner={card.owner || null}
        ,
        owner: '0x133E437110782d27DEFD4586fFc93652E21Da57b',
        ownerLabel: card.ownerLabel || null,
        erc777Symbol: erc777Symbol,
        chainDefaultToken: chainDefaultToken,
        handleOwnerClick: handleOwnerClick,
        isMarketplace: isMarketplace
      }));
    });
  };
  useDeepEffect(() => {
    if (nfts.length > 0) {
      setCards(nfts);
    } else if (nfts.length === 0 && isMarketplace) {
      currentPageRef.current = 1;
      setCards([]);
    } else if (nfts.length === 0 && currentPageRef.current === 1) {
      setCards([]);
    }
  }, [nfts]);
  React.useEffect(() => {
    //need to set currentPageRef.current 1 when we select a filter
    if (currentPage === 1) {
      currentPageRef.current = 1;
    }
  }, [currentPage]);
  if (!nfts) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "gallery-error-message"
    }, "ERROR");
  }
  if (cards.length === 0) {
    return /*#__PURE__*/React__default["default"].createElement("p", {
      className: "gallery-no-item-message"
    }, "No item to display");
  }
  return /*#__PURE__*/React__default["default"].createElement(InfiniteScroll__default["default"], {
    className: "gallery-infinite-scroll",
    dataLength: cards.length,
    next: () => {
      scrollCallback ? handleCallback(currentPageRef.current + 1) : setCurrentPage(currentPageRef.current + 1);
    },
    pullDownToRefreshThreshold: 300,
    hasMore: !done && currentPageRef.current * ITEMS_PER_PAGE < cards.length
    // scrollThreshold="200px"
    // scrollableTarget="content-container"
    // initialScrollY={1000}
    // loader={<h4>Loading...</h4>}
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-grid-container"
  }, renderCards()));
};

var Explorer = function Explorer(_ref) {
  var _ref$baseUrl = _ref.baseUrl,
    baseUrl = _ref$baseUrl === void 0 ? undefined : _ref$baseUrl,
    openseaUrl = _ref.openseaUrl,
    etherscanUrl = _ref.etherscanUrl,
    handleCardClick = _ref.handleCardClick,
    _ref$nftsCardList = _ref.nftsCardList,
    nftsCardList = _ref$nftsCardList === void 0 ? [] : _ref$nftsCardList,
    displayTraits = _ref.displayTraits,
    handleOwnerClick = _ref.handleOwnerClick,
    scrollCallback = _ref.scrollCallback,
    done = _ref.done,
    isMarketplace = _ref.isMarketplace,
    erc777Symbol = _ref.erc777Symbol,
    chainDefaultToken = _ref.chainDefaultToken;
  var _useState = React.useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    nfts = _useState2[0],
    setNfts = _useState2[1];
  var _useContext = React.useContext(FilterContext),
    filters = _useContext.filters,
    currentPage = _useContext.currentPage;
  var explorerRef = React.useRef(null);
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    fetchDone = _useState6[0],
    setFetchDone = _useState6[1];
  var fetchNfts = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            getFilteredCards(baseUrl, filters, currentPage).then(function (res) {
              if (res.length > 0 && currentPage > 1) {
                //load elements into array when currentPage is increasing
                setNfts(function (prevState) {
                  return [].concat(_toConsumableArray(prevState), _toConsumableArray(res));
                });
              }
              if (currentPage === 1) {
                //this happens when select a filter 
                setNfts(res);
              }
              if (currentPage > 1 && res.length === 0) {
                setFetchDone(true);
              }
            });
            setLoading(false);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function fetchNfts() {
      return _ref2.apply(this, arguments);
    };
  }();
  useDeepEffect(function () {
    if (baseUrl) {
      setLoading(true);
      fetchNfts();
    }
  }, [filters, baseUrl, currentPage]);
  useDeepEffect(function () {
    if (!baseUrl) {
      setNfts(nftsCardList);
    }
  }, [nftsCardList]);
  console.log(nftsCardList, 'nft cardlist');
  console.log(nfts, 'nfts');
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: explorerRef,
    style: {
      width: '100%',
      height: 'auto',
      paddingTop: '50px'
    },
    className: "gallery-scroll-component-holder"
  }, loading ? /*#__PURE__*/React__default["default"].createElement("p", null, "Fetching data ....") : /*#__PURE__*/React__default["default"].createElement(ScrollComponent, {
    nfts: nfts,
    openseaUrl: openseaUrl,
    etherscanUrl: etherscanUrl,
    handleCardClick: handleCardClick,
    displayTraits: displayTraits,
    handleOwnerClick: handleOwnerClick,
    scrollCallback: scrollCallback,
    done: done || fetchDone,
    isMarketplace: isMarketplace,
    erc777Symbol: erc777Symbol,
    chainDefaultToken: chainDefaultToken
  }));
};

var css_248z = ".gallery-selected-filters-box {\r\n  width: 100%;\r\n  gap: 16px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gallery-selected-filters-content-box {\r\n  width: auto;\r\n  display: flex;\r\n  background-color: #faf9f5;\r\n  border-radius: 20px;\r\n  padding: 14px;\r\n  align-items: center;\r\n  box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 29%)\r\n}\r\n\r\n.dark .gallery-selected-filters-content-box {\r\n  background-color: #151a2d;\r\n}\r\n\r\n.gallery-selected-filters-content-box span {\r\n  font-family: 'poppins';\r\n  color: #000;\r\n  font-size: 14px;\r\n}\r\n\r\n.dark .gallery-selected-filters-content-box span {\r\n  color: #FFF\r\n}\r\n\r\n.gallery-selected-filters-category-name {\r\n  margin-right: 5px;\r\n}\r\n\r\n.gallery-selected-filters-filter-name {\r\n  margin-right: 15px;\r\n}\r\n\r\n.gallery-selected-filters-clear-button {\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n}";
styleInject(css_248z);

var img = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M24 3.35998L20.64 0L12 8.63999L3.35998 0L0 3.35998L8.63999 12L0 20.64L3.35998 24L12 15.36L20.64 24L24 20.64L15.36 12L24 3.35998Z' fill='%23FE2C85'/%3e%3c/svg%3e";

const SelectedFilterItem = _ref => {
  let {
    filterKeyName,
    filterName,
    handleClearOne
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-selected-filters-content-box"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "gallery-selected-filters-category-name"
  }, filterKeyName, ":", ' '), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "gallery-selected-filters-filter-name"
  }, filterName), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-selected-filters-clear-button",
    onClick: () => handleClearOne(filterKeyName, filterName)
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img,
    alt: "clear",
    style: {
      height: '15px',
      width: '15px'
    }
  })));
};

var SelectedFilters = function SelectedFilters() {
  var _useContext = React.useContext(FilterContext),
    filters = _useContext.filters,
    updateFilters = _useContext.updateFilters;
  var handleClearOne = function handleClearOne(category, value) {
    var activeFilters = _objectSpread2({}, filters);
    var filteredArray = activeFilters[category].filter(function (data) {
      return data !== value;
    });
    if (filteredArray.length === 0) {
      delete activeFilters[category];
    } else {
      activeFilters[category] = filteredArray;
    }
    updateFilters(activeFilters);
  };
  var renderSelectedFilters = function renderSelectedFilters() {
    return filters ? Object.keys(filters).map(function (keyName) {
      return filters[keyName].map(function (filter, index) {
        return /*#__PURE__*/React__default["default"].createElement(SelectedFilterItem, {
          filterKeyName: keyName,
          filterName: filter,
          handleClearOne: handleClearOne,
          key: index
        });
      });
    }) : "";
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-selected-filters-box"
  }, renderSelectedFilters());
};
var SelectedFilters$1 = /*#__PURE__*/React__default["default"].memo(SelectedFilters);

var GalleryComponent = function GalleryComponent(_ref) {
  var apiBaseUrl = _ref.apiBaseUrl,
    openseaUrl = _ref.openseaUrl,
    etherscanUrl = _ref.etherscanUrl,
    handleCardClick = _ref.handleCardClick,
    headerStyle = _ref.headerStyle,
    cardArray = _ref.cardArray,
    _ref$displayTraits = _ref.displayTraits,
    displayTraits = _ref$displayTraits === void 0 ? false : _ref$displayTraits,
    _ref$displayFilters = _ref.displayFilters,
    displayFilters = _ref$displayFilters === void 0 ? true : _ref$displayFilters,
    _ref$handleOwnerClick = _ref.handleOwnerClick,
    handleOwnerClick = _ref$handleOwnerClick === void 0 ? undefined : _ref$handleOwnerClick,
    _ref$displaySelectedF = _ref.displaySelectedFilters,
    displaySelectedFilters = _ref$displaySelectedF === void 0 ? false : _ref$displaySelectedF,
    _ref$scrollCallback = _ref.scrollCallback,
    scrollCallback = _ref$scrollCallback === void 0 ? undefined : _ref$scrollCallback,
    _ref$done = _ref.done,
    done = _ref$done === void 0 ? false : _ref$done,
    _ref$isMarketplace = _ref.isMarketplace,
    isMarketplace = _ref$isMarketplace === void 0 ? false : _ref$isMarketplace,
    _ref$erc777Symbol = _ref.erc777Symbol,
    erc777Symbol = _ref$erc777Symbol === void 0 ? '' : _ref$erc777Symbol,
    _ref$chainDefaultToke = _ref.chainDefaultToken,
    chainDefaultToken = _ref$chainDefaultToke === void 0 ? '' : _ref$chainDefaultToke;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: '100%',
      position: 'relative'
    },
    className: "gallery-component-box"
  }, /*#__PURE__*/React__default["default"].createElement(FilterContextProvider, null, apiBaseUrl && displayFilters ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Filter$1, {
    baseUrl: apiBaseUrl,
    headerStyle: headerStyle
  }), displaySelectedFilters && /*#__PURE__*/React__default["default"].createElement(SelectedFilters$1, null)) : null, /*#__PURE__*/React__default["default"].createElement(Explorer, {
    baseUrl: apiBaseUrl,
    openseaUrl: openseaUrl,
    etherscanUrl: etherscanUrl,
    handleCardClick: handleCardClick,
    nftsCardList: cardArray,
    displayTraits: displayTraits,
    handleOwnerClick: handleOwnerClick,
    scrollCallback: scrollCallback,
    done: done,
    isMarketplace: isMarketplace,
    erc777Symbol: erc777Symbol,
    chainDefaultToken: chainDefaultToken
  })));
};
var GalleryComponent$1 = /*#__PURE__*/React__default["default"].memo(GalleryComponent);

exports.GalleryComponent = GalleryComponent$1;

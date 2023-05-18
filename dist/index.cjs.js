'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var axios = require('axios');
var InfiniteScroll = require('react-infinite-scroll-component');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var InfiniteScroll__default = /*#__PURE__*/_interopDefaultLegacy(InfiniteScroll);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
  var _useState = React.useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    filters = _useState2[0],
    setFilters = _useState2[1];
  var updateFilters = function updateFilters(type, value) {
    setFilters(function (prevFilter) {
      return _objectSpread2(_objectSpread2({}, prevFilter), {}, _defineProperty({}, type, value));
    });
  };
  return /*#__PURE__*/React__default["default"].createElement(FilterContext.Provider, {
    value: {
      filters: filters,
      updateFilters: updateFilters
    }
  }, children);
};

var getFilters = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(base_url) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            axios__default["default"].get("".concat(base_url, "/filters")).then(function (response) {
              resolve(response.data);
            });
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getFilters(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getFilteredCards = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(base_url, filters) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          console.log(filters);
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            axios__default["default"].post("".concat(base_url, "/filter"), filters).then(function (response) {
              resolve(response.data);
            }).catch(function (e) {
              reject(e.message);
            });
          }));
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getFilteredCards(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var Filter = function Filter(_ref) {
  var baseUrl = _ref.baseUrl;
  var _useState = React.useState({}),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setFilters = _useState2[1];
  var fetchFilters = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            getFilters(baseUrl).then(function (res) {
              setFilters(res);
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
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", null);
};
var Filter$1 = /*#__PURE__*/React__default["default"].memo(Filter);

var loadNext = function loadNext(nfts, ITEMS_PER_PAGE, currentPageRef, setCurrentPage, setCards) {
  var c = [];
  var end = nfts.length < ITEMS_PER_PAGE ? nfts.length : ITEMS_PER_PAGE;
  for (var i = 0; i < end; i++) {
    if (currentPageRef.current * ITEMS_PER_PAGE + i < nfts.length) {
      c.push(nfts[currentPageRef.current * ITEMS_PER_PAGE + i]);
    }
  }
  setCards(function (cards) {
    return cards.concat(c);
  });
  setCurrentPage(currentPageRef.current + 1);
};

var _templateObject;
var placeHolder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';
var Image = styled__default["default"].img(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  //display: block;\n  //height: 100px;\n  //width: 100px;\n  // Add a smooth animation on loading\n  @keyframes loaded {\n    0% {\n      opacity: 0.1;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  // I use utilitary classes instead of props to avoid style regenerating\n  &.loaded:not(.has-error) {\n    animation: loaded 300ms ease-in-out;\n  }\n  &.has-error {\n    // fallback to placeholder image on error\n    content: url(", ");\n  }\n"])), placeHolder);
var LazyImage = function LazyImage(_ref) {
  var src = _ref.src,
    alt = _ref.alt,
    idx = _ref.idx,
    imageOnLoad = _ref.imageOnLoad;
  var _useState = React.useState(placeHolder),
    _useState2 = _slicedToArray(_useState, 2),
    imageSrc = _useState2[0],
    setImageSrc = _useState2[1];
  var _useState3 = React.useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    imageRef = _useState4[0],
    setImageRef = _useState4[1];
  var onLoad = function onLoad(event) {
    event.target.classList.add('loaded');
    imageOnLoad();
  };
  var onError = function onError(event) {
    event.target.classList.add('has-error');
  };
  React.useEffect(function () {
    var observer;
    var didCancel = false;
    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
              //	console.log(idx)
              setTimeout(function () {
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
    return function () {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);
  return /*#__PURE__*/React__default["default"].createElement(Image, {
    ref: setImageRef,
    src: imageSrc,
    alt: alt,
    onLoad: onLoad,
    onError: onError,
    style: {
      zIndex: '0',
      borderRadius: '15px 15px 0px 0px'
    }
  });
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

var css_248z$2 = ".gallery-card-root-box {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n  /* background-color: #030000; */\r\n}\r\n\r\n.gallery-card-root-box p {\r\n  margin-block-start: 0em !important;\r\n  margin-block-end: 0em !important;\r\n}\r\n\r\n.gallery-card-content {\r\n  padding: 25px 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px\r\n}\r\n\r\n.gallery-card-content-name {\r\n  font-size: 26px;\r\n  line-height: 26px;\r\n  color: #FFF;\r\n  font-family: 'poppins-semibold';\r\n  text-align: left;\r\n}\r\n\r\n.gallery-card-content-id-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n}\r\n\r\n.gallery-card-content-id-box span {\r\n  font-family: 'poppins';\r\n  font-size: 14px;\r\n  color: #FFFFFF90;\r\n  text-align: left;\r\n}\r\n\r\n.gallery-card-content-id-box p {\r\n  font-family: 'poppins-medium';\r\n  font-size: 18px;\r\n  color: #FFFFFF;\r\n  text-align: left;\r\n}\r\n\r\n.gallery-social-items-box {\r\n  display: flex;\r\n  gap: 10px\r\n}";
styleInject(css_248z$2);

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='41.248' height='41.177' viewBox='0 0 41.248 41.177'%3e %3cg id='opensea' transform='translate(-4.953 -6)'%3e %3cg id='Group_1481' data-name='Group 1481' transform='translate(4.953 6)'%3e %3cpath id='Path_140' data-name='Path 140' d='M13.529%2c25.573a1.75%2c1.75%2c0%2c0%2c1%2c1.751-1.751h.008l2.914.008a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.751V36.6c.328-.1.749-.2%2c1.213-.312a1.461%2c1.461%2c0%2c0%2c0%2c1.128-1.423V21.211a1.75%2c1.75%2c0%2c0%2c1%2c1.751-1.751h2.922a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.751V33.884s.733-.295%2c1.44-.6a1.463%2c1.463%2c0%2c0%2c0%2c.893-1.347V16.84A1.75%2c1.75%2c0%2c0%2c1%2c32.8%2c15.089h2.914a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.751V29.286A34.4%2c34.4%2c0%2c0%2c0%2c44.593%2c22.6a2.946%2c2.946%2c0%2c0%2c0%2c.446-2.745A20.609%2c20.609%2c0%2c1%2c0%2c7.694%2c36.873a2.6%2c2.6%2c0%2c0%2c0%2c2.484%2c1.288c.556-.051%2c1.238-.118%2c2.055-.211A1.457%2c1.457%2c0%2c0%2c0%2c13.521%2c36.5l.008-10.93' transform='translate(-4.953 -6.003)' fill='%2321325b'/%3e %3cpath id='Path_141' data-name='Path 141' d='M106.1%2c251.479a20.6%2c20.6%2c0%2c0%2c0%2c32.731-16.665c0-.472-.025-.943-.051-1.415-7.528%2c11.233-21.439%2c16.488-32.681%2c18.079' transform='translate(-97.583 -214.252)' fill='%23979695'/%3e %3c/g%3e %3cpath id='Path_142' data-name='Path 142' d='M46.677%2c26.589A20.589%2c20.589%2c0%2c1%2c1%2c26.089%2c6%2c20.592%2c20.592%2c0%2c0%2c1%2c46.677%2c26.589Z' transform='translate(-0.501)' fill='%232081e2'/%3e %3cpath id='Path_143' data-name='Path 143' d='M125.931%2c165.509l.084-.126%2c5.356-8.362c.084-.126.244-.126.328.042.909%2c2.021%2c1.65%2c4.488%2c1.314%2c6.054a8.8%2c8.8%2c0%2c0%2c1-1.069%2c2.307.985.985%2c0%2c0%2c1-.2.328.219.219%2c0%2c0%2c1-.168.084h-5.516A.225.225%2c0%2c0%2c1%2c125.931%2c165.509Z' transform='translate(-110.76 -138.221)' fill='white'/%3e %3cpath id='Path_144' data-name='Path 144' d='M133.105%2c118.418v1.314c0%2c.084-.042.126-.126.168a6.4%2c6.4%2c0%2c0%2c0-2.434%2c1.65c-1.524%2c2.1-2.678%2c5.1-5.229%2c5.1H114.58a6.9%2c6.9%2c0%2c0%2c1-6.88-6.922v-.126a.181.181%2c0%2c0%2c1%2c.168-.168h6.054a.216.216%2c0%2c0%2c1%2c.2.2%2c2.333%2c2.333%2c0%2c0%2c0%2c.2%2c1.154%2c2.094%2c2.094%2c0%2c0%2c0%2c1.895%2c1.154h2.964v-2.307h-2.922a.187.187%2c0%2c0%2c1-.168-.286.581.581%2c0%2c0%2c0%2c.126-.168c.286-.413.657-.985%2c1.069-1.684a9.738%2c9.738%2c0%2c0%2c0%2c.741-1.482%2c2.39%2c2.39%2c0%2c0%2c0%2c.126-.286c.042-.168.126-.328.168-.455s.084-.244.126-.371a6.808%2c6.808%2c0%2c0%2c0%2c.126-1.356%2c2.782%2c2.782%2c0%2c0%2c0-.042-.573c0-.2-.042-.413-.042-.615a2.392%2c2.392%2c0%2c0%2c0-.084-.539%2c5.738%2c5.738%2c0%2c0%2c0-.168-.825l-.042-.084a2.65%2c2.65%2c0%2c0%2c0-.168-.539c-.168-.573-.37-1.154-.573-1.65-.084-.2-.168-.413-.244-.615-.126-.286-.244-.573-.37-.825-.042-.126-.126-.2-.168-.328s-.126-.244-.168-.371c-.042-.084-.084-.168-.126-.244l-.37-.657c-.042-.084.042-.2.126-.168l2.265.615h0l.286.084.328.084.126.042V105a1.192%2c1.192%2c0%2c0%2c1%2c1.154-1.2%2c1.179%2c1.179%2c0%2c0%2c1%2c.825.328%2c1.164%2c1.164%2c0%2c0%2c1%2c.328.825v1.979l.244.084a.041.041%2c0%2c0%2c1%2c.042.042%2c1.448%2c1.448%2c0%2c0%2c0%2c.244.2%2c1.672%2c1.672%2c0%2c0%2c0%2c.286.244c.2.168.5.413.783.657.084.084.168.126.2.2a15.975%2c15.975%2c0%2c0%2c1%2c1.2%2c1.2c.126.126.2.244.328.371s.2.286.328.413c.126.168.286.371.413.539a2.149%2c2.149%2c0%2c0%2c1%2c.168.286c.168.244.286.5.455.741.042.126.126.244.168.371a2.937%2c2.937%2c0%2c0%2c1%2c.328%2c1.027.445.445%2c0%2c0%2c1%2c.042.2h0a.779.779%2c0%2c0%2c1%2c.042.328%2c4.553%2c4.553%2c0%2c0%2c1-.042%2c1.069c-.042.168-.084.286-.126.455a3.135%2c3.135%2c0%2c0%2c1-.168.455%2c9.574%2c9.574%2c0%2c0%2c1-.455.867c-.042.084-.126.2-.2.328a1.157%2c1.157%2c0%2c0%2c0-.2.328c-.084.126-.2.244-.286.371a2.745%2c2.745%2c0%2c0%2c1-.286.371c-.126.168-.286.328-.413.5a2039668559500.258%2c2039668559500.258%2c0%2c0%2c1-.573.573%2c2.593%2c2.593%2c0%2c0%2c1-.371.328l-.244.2a.155.155%2c0%2c0%2c1-.126.042h-1.81v2.307h2.265a2.041%2c2.041%2c0%2c0%2c0%2c1.356-.5c.126-.126.7-.615%2c1.4-1.356.042-.042.042-.042.084-.042l6.257-1.81C133.021%2c118.216%2c133.105%2c118.292%2c133.105%2c118.418Z' transform='translate(-94.095 -89.565)' fill='white'/%3e %3c/g%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='41.756' height='41.177' viewBox='0 0 41.756 41.177'%3e %3cg id='Group_1482' data-name='Group 1482' transform='translate(-288 -1871)'%3e %3cellipse id='Ellipse_1' data-name='Ellipse 1' cx='20.878' cy='20.469' rx='20.878' ry='20.469' transform='translate(288 1871.24)' fill='white'/%3e %3cg id='etherscan-seeklogo.com' transform='translate(288.125 1871)'%3e %3cpath id='Path_138' data-name='Path 138' d='M13.529%2c25.573a1.75%2c1.75%2c0%2c0%2c1%2c1.752-1.752h.008l2.914.008a1.75%2c1.75%2c0%2c0%2c1%2c1.752%2c1.751V36.6c.328-.1.749-.2%2c1.213-.312a1.461%2c1.461%2c0%2c0%2c0%2c1.128-1.423V21.211a1.75%2c1.75%2c0%2c0%2c1%2c1.752-1.752h2.922a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.752V33.884s.733-.295%2c1.44-.6a1.463%2c1.463%2c0%2c0%2c0%2c.893-1.347V16.84A1.75%2c1.75%2c0%2c0%2c1%2c32.8%2c15.089h2.914a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.752V29.286A34.4%2c34.4%2c0%2c0%2c0%2c44.593%2c22.6a2.946%2c2.946%2c0%2c0%2c0%2c.446-2.745A20.609%2c20.609%2c0%2c1%2c0%2c7.694%2c36.873a2.6%2c2.6%2c0%2c0%2c0%2c2.484%2c1.288c.556-.051%2c1.238-.118%2c2.055-.211A1.458%2c1.458%2c0%2c0%2c0%2c13.521%2c36.5l.008-10.93' transform='translate(-4.953 -6.003)' fill='%2321325b'/%3e %3cpath id='Path_139' data-name='Path 139' d='M106.1%2c251.479a20.6%2c20.6%2c0%2c0%2c0%2c32.731-16.665c0-.472-.025-.943-.051-1.415-7.528%2c11.233-21.439%2c16.488-32.681%2c18.079' transform='translate(-97.583 -214.252)' fill='%23979695'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

const Card = _ref => {
  let {
    card
  } = _ref;
  const [loading, setLoading] = React.useState(true);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-root-box"
  }, /*#__PURE__*/React__default["default"].createElement(LazyImage, {
    src: card.image,
    imageOnLoad: () => setLoading(false),
    alt: "Card"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-content"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "gallery-card-content-name "
  }, card.name), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-content-id-box "
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "ID"), /*#__PURE__*/React__default["default"].createElement("p", null, "#", card.tokenId)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-social-items-box"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$1,
    alt: "opensea"
  }), /*#__PURE__*/React__default["default"].createElement("img", {
    src: img,
    alt: "etherscan"
  }))));
};

var css_248z$1 = ".gallery-grid-container{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 24px;\r\n}\r\n.gallery-card-item{\r\n  flex-basis: 23%;\r\n  -webkit-box-flex: 0;\r\n  flex-grow: 0;\r\n  max-width: 23%;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  .gallery-card-item{\r\n    flex-basis: 45%;\r\n    max-width: 45%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .gallery-card-item{\r\n    flex-basis: 100%;\r\n    max-width: 100%;\r\n  }\r\n}";
styleInject(css_248z$1);

const ScrollComponent = _ref => {
  let {
    nfts
  } = _ref;
  const ITEMS_PER_PAGE = 29;
  const [cards, setCards] = React.useState([]);
  const [currentPage, _setCurrentPage] = React.useState(0);
  const currentPageRef = React.useRef(currentPage);
  const setCurrentPage = val => {
    currentPageRef.current = val;
    _setCurrentPage(val);
  };
  const renderCards = () => {
    return cards.map((card, i) => {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        key: i,
        className: "gallery-card-item"
      }, /*#__PURE__*/React__default["default"].createElement(Card, {
        card: card
      }));
    });
  };
  React.useEffect(() => {
    if (nfts) {
      setCards([]);
      setCurrentPage(0);
      loadNext(nfts, ITEMS_PER_PAGE, currentPageRef, setCurrentPage, setCards);
    }
  }, [nfts]);
  if (!nfts) {
    return /*#__PURE__*/React__default["default"].createElement("div", null, "ERROR");
  }
  return /*#__PURE__*/React__default["default"].createElement(InfiniteScroll__default["default"], {
    className: "gallery-infinite-scroll",
    dataLength: cards.length,
    next: () => loadNext(nfts, ITEMS_PER_PAGE, currentPageRef, setCurrentPage, setCards),
    pullDownToRefreshThreshold: 500,
    hasMore: currentPageRef.current * ITEMS_PER_PAGE < nfts.length
    // scrollThreshold="200px"
    // scrollableTarget="content-container"
    // initialScrollY={1000}
    ,
    loader: /*#__PURE__*/React__default["default"].createElement("h4", null, "Loading...")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-grid-container"
  }, renderCards()));
};

const Explorer = _ref => {
  let {
    baseUrl
  } = _ref;
  const [nfts, setNfts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const {
    filters
  } = React.useContext(FilterContext);
  const fetchNfts = async () => {
    getFilteredCards(baseUrl, filters).then(res => {
      setNfts(res);
      setLoading(false);
    });
  };
  React.useEffect(() => {
    setLoading(true);
    fetchNfts();
  }, [baseUrl, filters]);
  console.log(nfts);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: '100%',
      height: 'auto'
    }
  }, loading ? /*#__PURE__*/React__default["default"].createElement("p", null, "....Loading") : null, /*#__PURE__*/React__default["default"].createElement(ScrollComponent, {
    nfts: nfts
  }));
};

var css_248z = "@font-face {\r\n  font-family: 'bau';\r\n  src: local('bau'), url(../../assets/fonts/Bau-Regular.ttf) format('truetype');\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'poppins';\r\n  src: local('poppins'), url(../../assets/fonts/Poppins.ttf) format('truetype');\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'poppins-semibold';\r\n  src: local('poppins-semibold'),\r\n    url(../../assets/fonts/Poppins-SemiBold.ttf) format('truetype');\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'poppins-medium';\r\n  src: local('poppins-medium'),\r\n    url(../../assets/fonts/Poppins-Medium.ttf) format('truetype');\r\n  font-display: swap;\r\n}\r\n\r\n";
styleInject(css_248z);

const GalleryComponent = _ref => {
  let {
    apiBaseUrl
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React__default["default"].createElement(FilterContextProvider, null, /*#__PURE__*/React__default["default"].createElement(Filter$1, {
    baseUrl: apiBaseUrl
  }), /*#__PURE__*/React__default["default"].createElement(Explorer, {
    baseUrl: apiBaseUrl
  })));
};

exports.GalleryComponent = GalleryComponent;

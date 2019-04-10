'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = undefined;

var _toArray2 = require('babel-runtime/helpers/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _hypot = require('babel-runtime/core-js/math/hypot');

var _hypot2 = _interopRequireDefault(_hypot);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = {
  helloWorld: function helloWorld(str) {
    return 'hello world ,欢迎您使用 Util CommonJS!【util】';
  },

  arrayMax: function arrayMax(arr) {
    return Math.max.apply(Math, (0, _toConsumableArray3.default)(arr));
  },

  arrayMin: function arrayMin(arr) {
    return Math.min.apply(Math, (0, _toConsumableArray3.default)(arr));
  },

  chunk: function chunk(arr, size) {
    return (0, _from2.default)({
      length: Math.ceil(arr.length / size)
    }, function (v, i) {
      return arr.slice(i * size, i * size + size);
    });
  },

  compact: function compact(arr) {
    return arr.filter(Boolean);
  },

  countOccurrences: function countOccurrences(arr, value) {
    return arr.reduce(function (a, v) {
      return v === value ? a + 1 : a + 0;
    }, 0);
  },

  difference: function difference(a, b) {
    var s = new _set2.default(b);
    return a.filter(function (x) {
      return !s.has(x);
    });
  },

  distinctValuesOfArray: function distinctValuesOfArray(arr) {
    return [].concat((0, _toConsumableArray3.default)(new _set2.default(arr)));
  },

  dropElements: function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  },

  everyNth: function everyNth(arr, nth) {
    return arr.filter(function (e, i) {
      return i % nth === 0;
    });
  },

  filterNonUnique: function filterNonUnique(arr) {
    return arr.filter(function (i) {
      return arr.indexOf(i) === arr.lastIndexOf(i);
    });
  },

  flatten: function flatten(arr) {
    return arr.reduce(function (a, v) {
      return a.concat(v);
    }, []);
  },

  head: function head(arr) {
    return arr[0];
  },

  initial: function initial(arr) {
    return arr.slice(0, -1);
  },

  initializeArrayWithRange: function initializeArrayWithRange(end) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return (0, _from2.default)({
      length: end - start
    }).map(function (v, i) {
      return i + start;
    });
  },

  initializeArrayWithValues: function initializeArrayWithValues(n) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Array(n).fill(value);
  },

  intersection: function intersection(a, b) {
    var s = new _set2.default(b);
    return a.filter(function (x) {
      return s.has(x);
    });
  },

  last: function last(arr) {
    return arr[arr.length - 1];
  },

  mapObject: function mapObject(arr, fn) {
    return function (a) {
      return a = [arr, arr.map(fn)], a[0].reduce(function (acc, val, ind) {
        return acc[val] = a[1][ind], acc;
      }, {});
    }();
  },

  nthElement: function nthElement(arr) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
  },

  pick: function pick(obj, arr) {
    return arr.reduce(function (acc, curr) {
      return curr in obj && (acc[curr] = obj[curr]), acc;
    }, {});
  },

  pull: function pull(arr) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var pulled = arr.filter(function (v, i) {
      return !args.includes(v);
    });
    arr.length = 0;
    pulled.forEach(function (v) {
      return arr.push(v);
    });
  },

  remove: function remove(arr, func) {
    return Array.isArray(arr) ? arr.filter(func).reduce(function (acc, val) {
      arr.splice(arr.indexOf(val), 1);
      return acc.concat(val);
    }, []) : [];
  },

  sample: function sample(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  shuffle: function shuffle(arr) {
    return arr.sort(function () {
      return Math.random() - 0.5;
    });
  },

  similarity: function similarity(arr, values) {
    return arr.filter(function (v) {
      return values.includes(v);
    });
  },

  symmetricDifference: function symmetricDifference(a, b) {
    var sA = new _set2.default(a),
        sB = new _set2.default(b);
    return [].concat((0, _toConsumableArray3.default)(a.filter(function (x) {
      return !sB.has(x);
    })), (0, _toConsumableArray3.default)(b.filter(function (x) {
      return !sA.has(x);
    })));
  },

  tail: function tail(arr) {
    return arr.length > 1 ? arr.slice(1) : arr;
  },

  take: function take(arr) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return arr.slice(0, n);
  },

  takeRight: function takeRight(arr) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return arr.slice(arr.length - n, arr.length);
  },

  union: function union(a, b) {
    return (0, _from2.default)(new _set2.default([].concat((0, _toConsumableArray3.default)(a), (0, _toConsumableArray3.default)(b))));
  },

  without: function without(arr) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return arr.filter(function (v) {
      return !args.includes(v);
    });
  },

  zip: function zip() {
    for (var _len3 = arguments.length, arrays = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      arrays[_key3] = arguments[_key3];
    }

    var maxLength = Math.max.apply(Math, (0, _toConsumableArray3.default)(arrays.map(function (x) {
      return x.length;
    })));
    return (0, _from2.default)({
      length: maxLength
    }).map(function (_, i) {
      return (0, _from2.default)({
        length: arrays.length
      }, function (_, k) {
        return arrays[k][i];
      });
    });
  },

  removeArrayItem: function removeArrayItem(arr, item) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] == item) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
    return arr;
  },

  contains: function contains(arr, item) {
    var i = arr.length;
    while (i--) {
      if (arr[i] === item) {
        return true;
      }
    }
    return false;
  },

  bottomVisible: function bottomVisible() {
    return document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight || document.documentElement.clientHeight;
  },

  currentURL: function currentURL() {
    return window.location.href;
  },

  elementIsVisibleInViewport: function elementIsVisibleInViewport(el) {
    var partiallyVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _el$getBoundingClient = el.getBoundingClientRect(),
        top = _el$getBoundingClient.top,
        left = _el$getBoundingClient.left,
        bottom = _el$getBoundingClient.bottom,
        right = _el$getBoundingClient.right;

    return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  },

  getScrollPosition: function getScrollPosition() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    return {
      x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
      y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    };
  },

  getURLParameters: function getURLParameters(url) {
    return url.match(/([^?=&]+)(=([^&]*))/g).reduce(function (a, v) {
      return a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a;
    }, {});
  },

  redirect: function redirect(url) {
    var asLink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return asLink ? window.location.href = url : window.location.replace(url);
  },

  scrolllToTop: function scrolllToTop() {
    var c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  },

  ISODateString: function ISODateString(date) {
    pad = function pad(n) {
      return n < 10 ? '0' + n : n;
    };
    return date.getUTCFullYear() + '-' + pad(date.getUTCMonth() + 1) + '-' + pad(date.getUTCDate()) + 'T' + pad(date.getUTCHours()) + ':' + pad(date.getUTCMinutes()) + ':' + pad(date.getUTCSeconds()) + 'Z';
  },

  getDayDiffBetweenDates: function getDayDiffBetweenDates(dateInitial, dateFinal) {
    return (dateFinal - dateInitial) / (1000 * 3600 * 24);
  },

  JSONToDate: function JSONToDate(arr) {
    var date = new Date(parseInt(arr.toString().substr(6)));
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  },

  toEnglishDate: function toEnglishDate(time) {
    try {
      return new Date(time).toISOString().split('T')[0].replace(/-/g, '/');
    } catch (e) {}
  },

  chainAsync: function chainAsync(fns) {
    var curr = 0;
    var next = function next() {
      return fns[curr++](next);
    };
    next();
  },

  compose: function compose() {
    for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      fns[_key4] = arguments[_key4];
    }

    return fns.reduce(function (f, g) {
      return function () {
        return f(g.apply(undefined, arguments));
      };
    });
  },

  curry: function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
      var innerArgs = Array.prototype.slice.call(arguments);
      var finalArgs = args.concat(innerArgs);
      return fn.apply(null, finalArgs);
    };
  },

  functionName: function functionName(fn) {
    return console.debug(fn, name), fn;
  },

  pipeFunctions: function pipeFunctions() {
    for (var _len5 = arguments.length, fns = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      fns[_key5] = arguments[_key5];
    }

    return fns.reduce(function (f, g) {
      return function () {
        return g(f.apply(undefined, arguments));
      };
    });
  },

  promisify: function promisify(func) {
    return function () {
      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return new _promise2.default(function (resolve, reject) {
        return func.apply(undefined, args.concat([function (err, result) {
          return err ? reject(err) : resolve(result);
        }]));
      });
    };
  },

  runPromisesInSeries: function runPromisesInSeries(ps) {
    return ps.reduce(function (p, next) {
      return p.then(next);
    }, _promise2.default.resolve());
  },

  sleep: function sleep(ms) {
    return new _promise2.default(function (resolve) {
      return setTimeout(resolve, ms);
    });
  },

  generateRandom: function generateRandom(lowerValue, upperValue) {
    var chioces = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * chioces + lowerValue);
  },

  arrayAverage: function arrayAverage(arr) {
    return arr.reduce(function (acc, val) {
      return acc + val;
    }, 0) / arr.length;
  },

  arraySum: function arraySum(arr) {
    return arr.reduce(function (acc, val) {
      return acc + val;
    }, 0);
  },

  collatz: function collatz(n) {
    return n % 2 == 0 ? n / 2 : 3 * n + 1;
  },

  digitize: function digitize(n) {
    return [].concat((0, _toConsumableArray3.default)('' + n)).map(function (i) {
      return parseInt(i);
    });
  },

  distance: function distance(x0, y0, x1, y1) {
    return (0, _hypot2.default)(x1 - x0, y1 - y0);
  },

  fibonacci: function fibonacci(n) {
    return Array(n).fill(0).reduce(function (acc, val, i) {
      return acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i);
    }, []);
  },

  gcd: function gcd(a, b) {
    var x = a,
        y = b;
    _gcd = function (_gcd2) {
      function _gcd(_x10, _x11) {
        return _gcd2.apply(this, arguments);
      }

      _gcd.toString = function () {
        return _gcd2.toString();
      };

      return _gcd;
    }(function (_x, _y) {
      return !_y ? _x : _gcd(_y, _x % _y);
    });
    return _gcd(a, b);
  },

  hammingDistance: function hammingDistance(num1, num2) {
    return ((num1 ^ num2).toString(2).match(/1/g) || '').length;
  },

  isDivisible: function isDivisible(dividend, divisor) {
    return dividend % divisor === 0;
  },

  isEven: function isEven(num) {
    return num % 2 === 0;
  },

  lcm: function lcm(x, y) {
    var gcd = function gcd(x, y) {
      return !y ? x : gcd(y, x % y);
    };
    return Math.abs(x * y) / gcd(x, y);
  },

  median: function median(arr) {
    var mid = Math.floor(arr.length / 2),
        nums = arr.sort(function (a, b) {
      return a - b;
    });
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  },

  palindrome: function palindrome(str) {
    var s = str.toLowerCase().replace(/[\W]/g, '');
    return s === s.split('').reverse().join('');
  },

  percentile: function percentile(arr, val) {
    return 100 * arr.reduce(function (acc, v) {
      return acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0);
    }, 0) / arr.length;
  },

  powerset: function powerset(arr) {
    return arr.reduce(function (a, v) {
      return a.concat(a.map(function (r) {
        return [v].concat(r);
      }));
    }, [[]]);
  },

  randomIntegerInRange: function randomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  randomNumberInRange: function randomNumberInRange(min, max) {
    return Math.random() * (max - min) + min;
  },

  round: function round(n) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Number(Math.round(n + 'e' + decimals) + 'e-' + decimals);
  },

  speechSynthesis: function speechSynthesis(message) {
    var msg = new SpeechSynthesisUtterance(message);
    msg.voice = window.speechSynthesis.getVoices()[0];
    window.speechSynthesis.speak(msg);
  },

  hasClass: function hasClass(node, className) {
    if (node.className) {
      return node.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    } else {
      return false;
    }
  },

  cleanObj: function cleanObj(obj) {
    var keysToKeep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var childIndicator = arguments[2];

    var o = obj,
        k = keysToKeep,
        c = childIndicator;

    _cleanObj = function (_cleanObj2) {
      function _cleanObj(_x15) {
        return _cleanObj2.apply(this, arguments);
      }

      _cleanObj.toString = function () {
        return _cleanObj2.toString();
      };

      return _cleanObj;
    }(function (_obj) {
      var _keysToKeep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var _childIndicator = arguments[2];

      (0, _keys2.default)(_obj).forEach(function (key) {
        if (key === _childIndicator) {
          _cleanObj(_obj[key], _keysToKeep, _childIndicator);
        } else if (!_keysToKeep.includes(key)) {
          delete _obj[key];
        }
      });
    });
    return _cleanObj(o, k, c);
  },

  objectFromPairs: function objectFromPairs(arr) {
    return arr.reduce(function (a, v) {
      return a[v[0]] = v[1], a;
    }, {});
  },

  objectToPairs: function objectToPairs(obj) {
    return (0, _keys2.default)(obj).map(function (k) {
      return [k, obj[k]];
    });
  },

  shallowClone: function shallowClone(obj) {
    return (0, _assign2.default)({}, obj);
  },

  truthCheckCollection: function truthCheckCollection(collection, pre) {
    return collection.every(function (obj) {
      return obj[pre];
    });
  },

  trim: function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  },

  ltrim: function ltrim(str) {
    return str.replace(/^\s+/, '');
  },

  rtrim: function rtrim(val) {
    return val.replace(/\s+$/, '');
  },

  truncate: function truncate(str, len) {
    if (str.length > len) {
      str = str.substring(0, len);
    }
    return str;
  },

  onlyLetters: function onlyLetters(str) {
    return str.toLowerCase().replace(/[^a-z]/g, '');
  },

  onlyLettersNums: function onlyLettersNums(str) {
    return str.toLowerCase().replace(/[^a-z,0-9]/g, '');
  },

  anagrams: function anagrams(str) {
    _anagrams = function (_anagrams2) {
      function _anagrams(_x16) {
        return _anagrams2.apply(this, arguments);
      }

      _anagrams.toString = function () {
        return _anagrams2.toString();
      };

      return _anagrams;
    }(function (_str) {
      if (_str.length <= 2) {
        return _str.length === 2 ? [_str, _str[1] + _str[0]] : [_str];
      }
      return _str.split('').reduce(function (acc, letter, i) {
        return acc.concat(_anagrams(_str.slice(0, i) + _str.slice(i + 1)).map(function (val) {
          return letter + val;
        }));
      }, []);
    });
    s = str;
    return _anagrams(s);
  },

  capitalize: function capitalize(_ref) {
    var _ref2 = (0, _toArray3.default)(_ref),
        first = _ref2[0],
        rest = _ref2.slice(1);

    var lowerRest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
  },

  capitalizeEveryWord: function capitalizeEveryWord(str) {
    return str.replace(/\b[a-z]/g, function (char) {
      return char.toUpperCase();
    });
  },

  escapeRegExp: function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  },

  fromCamelCase: function fromCamelCase(str) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';
    return str.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2').toLowerCase();
  },

  reverseString: function reverseString(str) {
    return [].concat((0, _toConsumableArray3.default)(str)).reverse().join('');
  },

  sortCharactersInString: function sortCharactersInString(str) {
    return str.split('').sort(function (a, b) {
      return a.localeCompare(b);
    }).join('');
  },

  toCamelCase: function toCamelCase(str) {
    return str.replace(/^([A-Z])|[\s-_]+(\w)/g, function (match, p1, p2, offset) {
      return p2 ? p2.toUpperCase() : p1.toLowerCase();
    });
  },

  truncateString: function truncateString(str, num) {
    return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
  },

  isNumber: function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  },

  isArray: function isArray(value) {
    return Object.prototype.toString.call(value) == '[object Array]';
  },

  isFunction: function isFunction(value) {
    return Object.prototype.toString.call(value) == '[object Function]';
  },

  isRegExp: function isRegExp(value) {
    return Object.prototype.toString.call(value) == '[object RegExp]';
  },

  isString: function isString(str) {
    return Object.prototype.toString.call(str) == '[object String]';
  },

  isBoolean: function isBoolean(val) {
    return Object.prototype.toString.call(val) == '[object Boolean]';
  },

  isSymbol: function isSymbol(val) {
    return Object.prototype.toString.call(val) == '[object Symbol]';
  },

  maxNum: function maxNum(arr) {
    return Math.max.apply(Math, arr);
  },

  minNum: function minNum(arr) {
    return Math.max.apply(Math, arr);
  },

  coalesce: function coalesce() {
    for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    return args.find(function (_) {
      return ![undefined, null].includes(_);
    });
  },

  coalesceFactory: function coalesceFactory(valid) {
    return function () {
      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      return args.find(valid);
    };
  },

  extendHex: function extendHex(shortHex) {
    _extendHex = function _extendHex(_shortHex) {
      return _shortHex.length <= 4 ? '#' + _shortHex.slice(_shortHex.startsWith('#') ? 1 : 0).split('').map(function (x) {
        return x + x;
      }).join('') : shortHex;
    };
    var _shortHex = shortHex;
    return _extendHex(_shortHex);
  },

  gettype: function gettype(v) {
    return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  },

  hexToRGB: function hexToRGB(hex) {
    var extendHex = function extendHex(shortHex) {
      return '#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0).split('').map(function (x) {
        return x + x;
      }).join('');
    };
    var extendedHex = hex.slice(hex.startsWith('#') ? 1 : 0).length === 3 ? extendHex(hex) : hex;
    return 'rgb(' + (parseInt(extendedHex.slice(1), 16) >> 16) + ', ' + ((parseInt(extendedHex.slice(1), 16) & 0x00ff00) >> 8) + ', ' + (parseInt(extendedHex.slice(1), 16) & 0x0000ff) + ')';
  },

  RGBToHex: function RGBToHex(r, g, b) {
    return ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
  },

  timeTaken: function timeTaken(callback) {
    console.time('timeTaken');
    var r = callback();
    console.timeEnd('timeTaken');
    return r;
  },

  toOridinalSuffix: function toOridinalSuffix(num) {
    var int = parseInt(num),
        digits = [int % 10],
        ordinals = ['st', 'nd', 'rd', 'th'],
        oPattern = [1, 2, 3, 4],
        tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    return oPattern.includes(digits[0]) && !tPattern.includes(digits[1]) ? int + ordinals[digits[0] - 1] : int + ordinals[3];
  },

  UUIDGenerator: function UUIDGenerator() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
      return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
  },

  validateEmail: function validateEmail(str) {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str)
    );
  }
};
exports.util = util;
exports.default = util;
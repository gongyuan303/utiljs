'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utilCommonJs = undefined;

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _regExp = require('./regExp');

var _regExp2 = _interopRequireDefault(_regExp);

var _browser = require('./browser');

var _browser2 = _interopRequireDefault(_browser);

var _stringUtils = require('./string-utils');

var _stringUtils2 = _interopRequireDefault(_stringUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utilCommonJs = new Object({
  util: _util2.default,
  regExp: _regExp2.default,
  browser: _browser2.default,
  stringUtils: _stringUtils2.default
});

exports.utilCommonJs = utilCommonJs;
exports.default = utilCommonJs;
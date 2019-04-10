'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringUtils = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _ref;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stringUtils = new Object((_ref = {
  helloWorld: function helloWorld(str) {
    return 'hello world ,欢迎您使用 Util CommonJS!【stringUtils】';
  },
  lowerCase: function lowerCase(str) {
    return str.toLowerCase();
  },

  upperCase: function upperCase(str) {
    return str.toUpperCase();
  },

  camelCase: function camelCase(str) {
    str = replaceAccents(str);
    str = removeNonWord(str).replace(/\-/g, ' ').replace(/\s[a-z]/g, upperCase).replace(/\s+/g, '').replace(/^[A-Z]/g, lowerCase);
    return str;
  },

  unCamelCase: function unCamelCase(str) {
    str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2');
    str = str.toLowerCase();
    return str;
  },

  properCase: function properCase(str) {
    return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
  },

  pascalCase: function pascalCase(str) {
    return camelCase(str).replace(/^[a-z]/, upperCase);
  },

  normalizeLineBreaks: function normalizeLineBreaks(str, lineEnd) {
    lineEnd = lineEnd || 'n';

    return str.replace(/rn/g, lineEnd).replace(/r/g, lineEnd).replace(/n/g, lineEnd);
  },

  sentenceCase: function sentenceCase(str) {
    return lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, upperCase);
  },

  slugify: function slugify(str, delimeter) {
    if (delimeter == null) {
      delimeter = "-";
    }

    str = replaceAccents(str);
    str = removeNonWord(str);
    str = trim(str).replace(/ +/g, delimeter).toLowerCase();

    return str;
  },

  hyphenate: function hyphenate(str) {
    str = unCamelCase(str);
    return slugify(str, "-");
  },

  unhyphenate: function unhyphenate(str) {
    return str.replace(/(\w)(-)(\w)/g, '$1 $3');
  },

  underscore: function underscore(str) {
    str = unCamelCase(str);
    return slugify(str, "_");
  },

  removeNonWord: function removeNonWord(str) {
    return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, '');
  }

}, (0, _defineProperty3.default)(_ref, 'normalizeLineBreaks', function normalizeLineBreaks(str, lineEnd) {
  lineEnd = lineEnd || '\n';

  return str.replace(/\r\n/g, lineEnd).replace(/\r/g, lineEnd).replace(/\n/g, lineEnd);
}), (0, _defineProperty3.default)(_ref, 'replaceAccents', function replaceAccents(str) {
  if (str.search(/[\xC0-\xFF]/g) > -1) {
    str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
  }

  return str;
}), (0, _defineProperty3.default)(_ref, 'contains', function contains(str, substring, fromIndex) {
  return str.indexOf(substring, fromIndex) !== -1;
}), (0, _defineProperty3.default)(_ref, 'crop', function crop(str, maxChars, append) {
  return truncate(str, maxChars, append, true);
}), (0, _defineProperty3.default)(_ref, 'escapeRegExp', function escapeRegExp(str) {
  var ESCAPE_CHARS = /[\\.+*?\^$\[\](){}\/'#]/g;
  return str.replace(ESCAPE_CHARS, '\\$&');
}), (0, _defineProperty3.default)(_ref, 'escapeHtml', function escapeHtml(str) {
  str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

  return str;
}), (0, _defineProperty3.default)(_ref, 'unescapeHtml', function unescapeHtml(str) {
  str = str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
  return str;
}), (0, _defineProperty3.default)(_ref, 'stripHtmlTags', function stripHtmlTags(str) {
  return str.replace(/<[^>]*>/g, '');
}), (0, _defineProperty3.default)(_ref, 'removeNonASCII', function removeNonASCII(str) {
  return str.replace(/[^\x20-\x7E]/g, '');
}), (0, _defineProperty3.default)(_ref, 'interpolate', function interpolate(template, replacements, syntax) {
  var stache = /\{\{(\w+)\}\}/g;

  var replaceFn = (match, prop);
  {
    return prop in replacements ? replacements[prop] : '';
  };

  return template.replace(syntax || stache, replaceFn);
}), (0, _defineProperty3.default)(_ref, 'rpad', function rpad(str, minLen, ch) {
  ch = ch || ' ';
  return str.length < minLen ? str + repeat(ch, minLen - str.length) : str;
}), (0, _defineProperty3.default)(_ref, 'lpad', function lpad(str, minLen, ch) {
  ch = ch || ' ';

  return str.length < minLen ? repeat(ch, minLen - str.length) + str : str;
}), (0, _defineProperty3.default)(_ref, 'repeat', function repeat(str, n) {
  return new Array(n + 1).join(str);
}), (0, _defineProperty3.default)(_ref, 'truncate', function truncate(str, maxChars, append, onlyFullWords) {
  append = append || '...';
  maxChars = onlyFullWords ? maxChars + 1 : maxChars;

  str = trim(str);
  if (str.length <= maxChars) {
    return str;
  }
  str = str.substr(0, maxChars - append.length);

  str = onlyFullWords ? str.substr(0, str.lastIndexOf(' ')) : trim(str);
  return str + append;
}), (0, _defineProperty3.default)(_ref, 'ltrim', function ltrim(str, chars) {
  var WHITE_SPACES = [' ', '\n', '\r', '\t', '\f', '\v', '\xA0', '\u1680', '\u180E', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200A', '\u2028', '\u2029', '\u202F', '\u205F', '\u3000'],
      chars = chars || WHITE_SPACES;

  var start = 0,
      len = str.length,
      charLen = chars.length,
      found = true,
      i,
      c;

  while (found && start < len) {
    found = false;
    i = -1;
    c = str.charAt(start);

    while (++i < charLen) {
      if (c === chars[i]) {
        found = true;
        start++;
        break;
      }
    }
  }

  return start >= len ? '' : str.substr(start, len);
}), (0, _defineProperty3.default)(_ref, 'rtrim', function rtrim(str, chars) {
  var WHITE_SPACES = [' ', '\n', '\r', '\t', '\f', '\v', '\xA0', '\u1680', '\u180E', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200A', '\u2028', '\u2029', '\u202F', '\u205F', '\u3000'],
      chars = chars || WHITE_SPACES;

  var end = str.length - 1,
      charLen = chars.length,
      found = true,
      i,
      c;

  while (found && end >= 0) {
    found = false;
    i = -1;
    c = str.charAt(end);

    while (++i < charLen) {
      if (c === chars[i]) {
        found = true;
        end--;
        break;
      }
    }
  }

  return end >= 0 ? str.substring(0, end + 1) : '';
}), (0, _defineProperty3.default)(_ref, 'trim', function trim(str, chars) {
  var WHITE_SPACES = [' ', '\n', '\r', '\t', '\f', '\v', '\xA0', '\u1680', '\u180E', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200A', '\u2028', '\u2029', '\u202F', '\u205F', '\u3000'],
      chars = chars || WHITE_SPACES;
  return ltrim(rtrim(str, chars), chars);
}), (0, _defineProperty3.default)(_ref, 'abbreviate', function abbreviate(str) {
  return str.match(/\b([A-Z])/g).join('');
}), _ref));
exports.stringUtils = stringUtils;
exports.default = stringUtils;
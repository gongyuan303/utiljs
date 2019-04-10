var stringUtils = new Object({
  helloWorld: (str) => {
    return 'hello world ,欢迎您使用 Util CommonJS!【stringUtils】'
  },
  lowerCase: function (str) {
    return str.toLowerCase();
  },

  /**
   * "Safer" String.toUpperCase()
   */
  upperCase: function (str) {
    return str.toUpperCase();
  },

  /**
   * Convert string to camelCase text.
   */
  camelCase: function (str) {
    str = replaceAccents(str);
    str = removeNonWord(str)
      .replace(/\-/g, ' ') //convert all hyphens to spaces
      .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
      .replace(/\s+/g, '') //remove spaces
      .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase
    return str;
  },

  /**
   * Add space between camelCase text.
   */
  unCamelCase: function (str) {
    str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2');
    str = str.toLowerCase(); //add space between camelCase text
    return str;
  },

  /**
   * UPPERCASE first char of each word.
   */
  properCase: function (str) {
    return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
  },

  /**
   * camelCase + UPPERCASE first char
   */
  pascalCase: function (str) {
    return camelCase(str).replace(/^[a-z]/, upperCase);
  },

  normalizeLineBreaks: function (str, lineEnd) {
    lineEnd = lineEnd || 'n';

    return str
      .replace(/rn/g, lineEnd) // DOS
      .replace(/r/g, lineEnd) // Mac
      .replace(/n/g, lineEnd); // Unix
  },
  /**
   * UPPERCASE first char of each sentence and lowercase other chars.
   */
  sentenceCase: function (str) {
    // Replace first char of each sentence (new line or after '.\s+') to
    // UPPERCASE
    return lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, upperCase);
  },

  /**
   * Convert to lower case, remove accents, remove non-word chars and
   * replace spaces with the specified delimeter.
   * Does not split camelCase text.
   */
  slugify: function (str, delimeter) {
    if (delimeter == null) {
      delimeter = "-";
    }

    str = replaceAccents(str);
    str = removeNonWord(str);
    str = trim(str) //should come after removeNonWord
      .replace(/ +/g, delimeter) //replace spaces with delimeter
      .toLowerCase();

    return str;
  },

  /**
   * Replaces spaces with hyphens, split camelCase text, remove non-word chars, remove accents and convert to lower case.
   */
  hyphenate: function (str) {
    str = unCamelCase(str);
    return slugify(str, "-");
  },

  /**
   * Replaces hyphens with spaces. (only hyphens between word chars)
   */
  unhyphenate: function (str) {
    return str.replace(/(\w)(-)(\w)/g, '$1 $3');
  },

  /**
   * Replaces spaces with underscores, split camelCase text, remove
   * non-word chars, remove accents and convert to lower case.
   */
  underscore: function (str) {
    str = unCamelCase(str);
    return slugify(str, "_");
  },

  /**
   * Remove non-word chars.
   */
  removeNonWord: function (str) {
    return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, '');
  },

  /**
   * Convert line-breaks from DOS/MAC to a single standard (UNIX by default)
   */
  normalizeLineBreaks: function (str, lineEnd) {
    lineEnd = lineEnd || '\n';

    return str
      .replace(/\r\n/g, lineEnd) // DOS
      .replace(/\r/g, lineEnd) // Mac
      .replace(/\n/g, lineEnd); // Unix
  },
  /**
   * Replaces all accented chars with regular ones
   */
  replaceAccents: function (str) {
    // verifies if the String has accents and replace them
    if (str.search(/[\xC0-\xFF]/g) > -1) {
      str = str
        .replace(/[\xC0-\xC5]/g, "A")
        .replace(/[\xC6]/g, "AE")
        .replace(/[\xC7]/g, "C")
        .replace(/[\xC8-\xCB]/g, "E")
        .replace(/[\xCC-\xCF]/g, "I")
        .replace(/[\xD0]/g, "D")
        .replace(/[\xD1]/g, "N")
        .replace(/[\xD2-\xD6\xD8]/g, "O")
        .replace(/[\xD9-\xDC]/g, "U")
        .replace(/[\xDD]/g, "Y")
        .replace(/[\xDE]/g, "P")
        .replace(/[\xE0-\xE5]/g, "a")
        .replace(/[\xE6]/g, "ae")
        .replace(/[\xE7]/g, "c")
        .replace(/[\xE8-\xEB]/g, "e")
        .replace(/[\xEC-\xEF]/g, "i")
        .replace(/[\xF1]/g, "n")
        .replace(/[\xF2-\xF6\xF8]/g, "o")
        .replace(/[\xF9-\xFC]/g, "u")
        .replace(/[\xFE]/g, "p")
        .replace(/[\xFD\xFF]/g, "y");
    }

    return str;
  },

  /**
   * Searches for a given substring
   */
  contains: function (str, substring, fromIndex) {
    return str.indexOf(substring, fromIndex) !== -1;
  },

  /**
   * Truncate string at full words.
   */
  crop: function (str, maxChars, append) {
    return truncate(str, maxChars, append, true);
  },

  /**
   * Escape RegExp string chars.
   */
  escapeRegExp: function (str) {
    var ESCAPE_CHARS = /[\\.+*?\^$\[\](){}\/'#]/g;
    return str.replace(ESCAPE_CHARS, '\\$&');
  },

  /**
   * Escapes a string for insertion into HTML.
   */
  escapeHtml: function (str) {
    str = str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&#39;')
      .replace(/"/g, '&quot;');

    return str;
  },

  /**
   * Unescapes HTML special chars
   */
  unescapeHtml: function (str) {
    str = str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"');
    return str;
  },

  /**
   * Escape string into unicode sequences
   */
  // escapeUnicode: function (str, shouldEscapePrintable) {
  //   return str.replace(/[\s\S]/g, (ch) {
  //     // skip printable ASCII chars if we should not escape them
  //     if (!shouldEscapePrintable && (/[\x20-\x7E]/).test(ch)) {
  //       return ch;
  //     }
  //     // we use "000" and slice(-4) for brevity, need to pad zeros,
  //     // unicode escape always have 4 chars after "\u"
  //     return '\\u' + ('000' + ch.charCodeAt(0).toString(16)).slice(-4);
  //   });
  // },

  /**
   * Remove HTML tags from string.
   */
  stripHtmlTags: function (str) {
    return str.replace(/<[^>]*>/g, '');
  },

  /**
   * Remove non-printable ASCII chars
   */
  removeNonASCII: function (str) {
    // Matches non-printable ASCII chars -
    // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
    return str.replace(/[^\x20-\x7E]/g, '');
  },

  /**
   * String interpolation
   */
  interpolate: function (template, replacements, syntax) {
    var stache = /\{\{(\w+)\}\}/g; //mustache-like

    var replaceFn = (match, prop) 
    {
      return (prop in replacements) ? replacements[prop] : '';
    };

    return template.replace(syntax || stache, replaceFn);
  },

  /**
   * Pad string with `char` if its' length is smaller than `minLen`
   */
  rpad: function (str, minLen, ch) {
    ch = ch || ' ';
    return (str.length < minLen) ? str + repeat(ch, minLen - str.length) : str;
  },

  /**
   * Pad string with `char` if its' length is smaller than `minLen`
   */
  lpad: function (str, minLen, ch) {
    ch = ch || ' ';

    return ((str.length < minLen) ?
      repeat(ch, minLen - str.length) + str : str);
  },

  /**
   * Repeat string n times
   */
  repeat: function (str, n) {
    return (new Array(n + 1)).join(str);
  },

  /**
   * Limit number of chars.
   */
  truncate: function (str, maxChars, append, onlyFullWords) {
    append = append || '...';
    maxChars = onlyFullWords ? maxChars + 1 : maxChars;

    str = trim(str);
    if (str.length <= maxChars) {
      return str;
    }
    str = str.substr(0, maxChars - append.length);
    //crop at last space or remove trailing whitespace
    str = onlyFullWords ? str.substr(0, str.lastIndexOf(' ')) : trim(str);
    return str + append;
  },

 

  /**
   * Remove chars from beginning of string.
   */
  ltrim: function (str, chars) {
    var WHITE_SPACES = [
      ' ', '\n', '\r', '\t', '\f', '\v', '\u00A0', '\u1680', '\u180E',
      '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006',
      '\u2007', '\u2008', '\u2009', '\u200A', '\u2028', '\u2029', '\u202F',
      '\u205F', '\u3000'
    ],
    chars = chars || WHITE_SPACES;

    var start = 0,
      len = str.length,
      charLen = chars.length,
      found = true,
      i, c;

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

    return (start >= len) ? '' : str.substr(start, len);
  },

  /**
   * Remove chars from end of string.
   */
  rtrim: function (str, chars) {
    var WHITE_SPACES = [
      ' ', '\n', '\r', '\t', '\f', '\v', '\u00A0', '\u1680', '\u180E',
      '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006',
      '\u2007', '\u2008', '\u2009', '\u200A', '\u2028', '\u2029', '\u202F',
      '\u205F', '\u3000'
    ],
    chars = chars || WHITE_SPACES;

    var end = str.length - 1,
      charLen = chars.length,
      found = true,
      i, c;

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

    return (end >= 0) ? str.substring(0, end + 1) : '';
  },

  /**
   * Remove white-spaces from beginning and end of string.
   */
  trim: function (str, chars) {
    var WHITE_SPACES = [
      ' ', '\n', '\r', '\t', '\f', '\v', '\u00A0', '\u1680', '\u180E',
      '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006',
      '\u2007', '\u2008', '\u2009', '\u200A', '\u2028', '\u2029', '\u202F',
      '\u205F', '\u3000'
    ],
    chars = chars || WHITE_SPACES;
    return ltrim(rtrim(str, chars), chars);
  },

  /**
   * Capture all capital letters following a word boundary (in case the
   * input is in all caps)
   */
  abbreviate: function (str) {
    return str.match(/\b([A-Z])/g).join('');
  }
})
export { stringUtils }

export default stringUtils

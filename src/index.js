// eslint-disable-next-line import/no-duplicates
import util from './util'
import regExp from './regExp'
import browser from './browser'
import stringUtils from './string-utils'
let utilCommonJs = new Object({
  util,
  regExp,
  browser,
  stringUtils
});

export { utilCommonJs }

export default utilCommonJs

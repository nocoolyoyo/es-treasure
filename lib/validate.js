'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isURL = isURL;
exports.isLowerCase = isLowerCase;
exports.isUpperCase = isUpperCase;
exports.isEmail = isEmail;
exports.isTrimEmpty = isTrimEmpty;
exports.isEmptyObject = isEmptyObject;
exports.isHexColor = isHexColor;

var _regexMap = require('./regexMap');

var _regexMap2 = _interopRequireDefault(_regexMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * url校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 *
 * @date       2018/2/19
 * @author   nocoolyoyo
 */
function isURL(val) {
  return _regexMap2.default.url.test(val);
}

/**
 * 小写校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 *
 * @date       2018/2/19
 * @author   nocoolyoyo
 */
/**
 * 校验方法合集
 */
function isLowerCase(val) {
  return _regexMap2.default.lowerCase.test(val);
}

/**
 * 大写校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 *
 * @date       2018/2/19
 * @author   nocoolyoyo
 */
function isUpperCase(val) {
  return _regexMap2.default.upperCase.test(val);
}

/**
 * 邮箱校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 *
 * @date       2018/2/19
 * @author   nocoolyoyo
 */
function isEmail(val) {
  return _regexMap2.default.email.test(val);
}

/**
 * 空字符串校验
 * @param val
 * @returns {boolean}
 *
 * @date       2018/6/16
 * @author   nocoolyoyo
 */
function isTrimEmpty(val) {
  if (typeof val !== 'string') return false;
  return val.trim() === '';
}

/**
 * 空对象校验
 * @param val
 * @return {boolean}
 */
function isEmptyObject(val) {
  if ((typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) !== 'object') return false;
  return (0, _keys2.default)(val).length > 0;
}

/**
 * 十六进制颜色
 * @param val
 * @return {boolean}
 */
function isHexColor(val) {
  if (typeof val !== 'string') return false;
  return _regexMap2.default.hexColor.test(val);
}
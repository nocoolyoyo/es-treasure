'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelCase;
/**
 * @function 将传入的属性名转为驼峰
 *
 * @param name 名字
 * @return {*}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
function camelCase(name) {
  var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
  var MOZ_HACK_REGEXP = /^moz([A-Z])/;
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
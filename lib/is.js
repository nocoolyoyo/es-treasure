'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTrimEmpty = isTrimEmpty;
/**
 * 判断方法
 * Created by nocoolyoyo on 2018/6/15.
 */

function isTrimEmpty() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (typeof str !== 'string') return false;
  return str.trim() === '';
}
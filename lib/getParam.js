'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParam;
/**
 * 获取指定的URL参数值
 * @param: name: { String }
 *
 * @return: value
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
function getParam(name) {

  if (typeof name !== 'string') throw new Error('要获取的参数名必须为字符串');
  //这里是去除加号，除公司外的项目可能会有影响
  var url = decodeURI(window.location.search.replace(/\+/g, '%20'));
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = url.substr(1).match(reg);

  if (r !== null) return decodeURI(r[2]);
  return '';
}
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getStyle = getStyle;
/*
 * 获取节点的某个属性的值
 * @param element {Object}    //节点
 * @param styleName {String}    //属性名字
 *
 * @return value   //属性值
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 * */

function getStyle(element, styleName) {
	if (!element || !styleName) return null;
	styleName = camelCase(styleName);
	if (styleName === 'float') {
		styleName = 'cssFloat';
	}
	try {
		var computed = document.defaultView.getComputedStyle(element, '');
		return element.style[styleName] || computed ? computed[styleName] : null;
	} catch (e) {
		return element.style[styleName];
	}
}
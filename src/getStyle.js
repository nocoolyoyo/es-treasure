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

//将传入的属性名转为驼峰
function camelCase(name) {
	let SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
	let MOZ_HACK_REGEXP = /^moz([A-Z])/;
	return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
		return offset ? letter.toUpperCase() : letter;
	}).replace(MOZ_HACK_REGEXP, 'Moz$1');
}

export default function getStyle (element, styleName) {
	if (!element || !styleName) return null;
	styleName = camelCase(styleName);
	if (styleName === 'float') {
		styleName = 'cssFloat';
	}
	try {
		const computed = document.defaultView.getComputedStyle(element, '');
		return element.style[styleName] || computed ? computed[styleName] : null;
	} catch(e) {
		return element.style[styleName];
	}
}
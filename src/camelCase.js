/**
 * 将传入的属性名转为驼峰
 * @param name {String} 名字
 * @returns {*}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export default function camelCase(name) {
	let SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
	let MOZ_HACK_REGEXP = /^moz([A-Z])/;
	return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
		return offset ? letter.toUpperCase() : letter;
	}).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
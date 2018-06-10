/**
 * css样式构造
 * @param styleObj 文件后缀名
 * @returns {String}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export default function strStyle(styleObj){
	let cssStr = '';
	for( let key in styleObj){
		if(styleObj.hasOwnProperty(key)) cssStr += `${key}:${styleObj[key]};`;
	}
	return cssStr;
}
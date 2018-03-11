/*
 * css样式构造
 * @params styleObj { Object } //文件后缀名
 *
 * @return cssStr {String}  //构造后的样式字符串
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 * */
export function strStyle(styleObj){
	let cssStr = '';
	for( let key in styleObj){
		if(styleObj.hasOwnProperty(key)) cssStr += `${key}:${styleObj[key]};`;
	}
	return cssStr;
}
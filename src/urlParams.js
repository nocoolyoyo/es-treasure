/**
 * @function 获取指定的URL参数值
 * @param name
 * @return {string}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export function getUrlParam(name) {
	if(typeof name !== 'string') console.error('要获取的参数名必须为字符串')
	//这里是去除加号，除公司外的项目可能会有影响
	const url =  decodeURI(window.location.search.replace(/\+/g,'%20'))
	const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
	const r = url.substr(1).match(reg)

	if (r !== null)
		return decodeURI(r[2])
	return ''
}

/**
 * @function 追加指定的URL参数值
 * @param params
 * @param url
 * @return {string}
 *
 * @author: nocoolyoyo
 * @date: 2018-09-04
 */
export function appendUrlParam(params = {}, url = '') {
	//url已存在参数
	let tempStr = ''
	Object.keys(params).forEach(key => {
		tempStr += `&${key}=${params[key]}`
	})
	if(url.indexOf('?')){
		tempStr = tempStr.replace(/\?/, '&')
	}
	url += tempStr
	return url
}

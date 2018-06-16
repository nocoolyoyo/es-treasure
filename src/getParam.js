/**
 * @function 获取指定的URL参数值
 * @param name
 * @return {string}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export default function getParam(name) {
	if(typeof name !== 'string') console.error('要获取的参数名必须为字符串')
	//这里是去除加号，除公司外的项目可能会有影响
	const url =  decodeURI(window.location.search.replace(/\+/g,'%20'))
	const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
	const r = url.substr(1).match(reg)

	if (r !== null)
		return decodeURI(r[2])
	return ''

}
/**
 * 判断方法
 * Created by nocoolyoyo on 2018/6/15.
 */

export function isTrimEmpty(str = ''){
	if(typeof str !== 'string') return false
	return str.trim() === ''
}

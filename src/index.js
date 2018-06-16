/**
 * Created by nocoolyoyo on 2018/6/11.
 */
import copy2Board from './copy2Board'
import { initClient, getClient, mountClient, setAttribute } from './device'
import { isTrimEmpty, isEmail, isLowerCase, isUpperCase, isURL, isEmptyObject } from './validate'
import { getStyle, strStyle } from './styleUtils'
import getParam from './getParam'
import imageLoaded from './imageLoaded'
import RegexMap from './regexMap'

module.exports =  {
	RegexMap,
	copy2Board,
	initClient,
	getClient,
	mountClient,
	setAttribute,
	getParam,
	getStyle,
	strStyle,
	imageLoaded,
	isEmail,
	isLowerCase,
	isUpperCase,
	isURL,
	isTrimEmpty,
	isEmptyObject
}
module.exports.default = module.exports;
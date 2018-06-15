/**
 * Created by nocoolyoyo on 2018/6/11.
 */
import copy2Board from './copy2Board'
import { initClient, getClient, setAttribute } from './device'
import { isTrimEmpty } from './is'
import getParam from './getParam'
import getStyle from './getStyle'
import imageLoaded from './imageLoaded'
import regexMap from './regexMap'
import strStyle from './strStyle'

module.exports =  {
	copy2Board,
	initClient,
	getClient,
	setAttribute,
	getParam,
	getStyle,
	imageLoaded,
	regexMap,
	isTrimEmpty,
	strStyle
}
module.exports.default = module.exports;
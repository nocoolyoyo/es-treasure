'use strict';

var _copy2Board = require('./copy2Board');

var _copy2Board2 = _interopRequireDefault(_copy2Board);

var _device = require('./device');

var _styleUtils = require('./styleUtils');

var _urlParams = require('./urlParams');

var _imageLoaded = require('./imageLoaded');

var _imageLoaded2 = _interopRequireDefault(_imageLoaded);

var _regexMap = require('./regexMap');

var _regexMap2 = _interopRequireDefault(_regexMap);

var _validate = require('./validate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	RegexMap: _regexMap2.default,
	copy2Board: _copy2Board2.default,
	initClient: _device.initClient,
	getClient: _device.getClient,
	setAttribute: _device.setAttribute,
	getParam: _urlParams.getUrlParam, //做兼容
	getUrlParam: _urlParams.getUrlParam,
	appendUrlParam: _urlParams.appendUrlParam,
	getStyle: _styleUtils.getStyle,
	strStyle: _styleUtils.strStyle,
	imageLoaded: _imageLoaded2.default,
	isEmail: _validate.isEmail,
	isLowerCase: _validate.isLowerCase,
	isUpperCase: _validate.isUpperCase,
	isURL: _validate.isURL,
	isTrimEmpty: _validate.isTrimEmpty,
	isEmptyObject: _validate.isEmptyObject,
	isHexColor: _validate.isHexColor,
	isStyleUnit: _validate.isStyleUnit
}; /**
    * Created by nocoolyoyo on 2018/6/11.
    */

module.exports.default = module.exports;
'use strict';

var _copy2Board = require('./copy2Board');

var _copy2Board2 = _interopRequireDefault(_copy2Board);

var _device = require('./device');

var _styleUtils = require('./styleUtils');

var _getParam = require('./getParam');

var _getParam2 = _interopRequireDefault(_getParam);

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
	mountClient: _device.mountClient,
	setAttribute: _device.setAttribute,
	getParam: _getParam2.default,
	getStyle: _styleUtils.getStyle,
	strStyle: _styleUtils.strStyle,
	imageLoaded: _imageLoaded2.default,
	isEmail: _validate.isEmail,
	isLowerCase: _validate.isLowerCase,
	isUpperCase: _validate.isUpperCase,
	isURL: _validate.isURL,
	isTrimEmpty: _validate.isTrimEmpty,
	isEmptyObject: _validate.isEmptyObject,
	isHexColor: _validate.isHexColor
}; /**
    * Created by nocoolyoyo on 2018/6/11.
    */

module.exports.default = module.exports;
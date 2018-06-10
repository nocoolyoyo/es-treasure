'use strict';

var _copy2Board = require('./copy2Board');

var _copy2Board2 = _interopRequireDefault(_copy2Board);

var _device = require('./device');

var _getParam = require('./getParam');

var _getParam2 = _interopRequireDefault(_getParam);

var _getStyle = require('./getStyle');

var _getStyle2 = _interopRequireDefault(_getStyle);

var _imageLoaded = require('./imageLoaded');

var _imageLoaded2 = _interopRequireDefault(_imageLoaded);

var _regexMap = require('./regexMap');

var _regexMap2 = _interopRequireDefault(_regexMap);

var _strStyle = require('./strStyle');

var _strStyle2 = _interopRequireDefault(_strStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	copy2Board: _copy2Board2.default,
	initClient: _device.initClient,
	getClient: _device.getClient,
	setAttribute: _device.setAttribute,
	getParam: _getParam2.default,
	getStyle: _getStyle2.default,
	imageLoaded: _imageLoaded2.default,
	regexMap: _regexMap2.default,
	strStyle: _strStyle2.default
}; /**
    * Created by nocoolyoyo on 2018/6/11.
    */

module.exports.default = module.exports;
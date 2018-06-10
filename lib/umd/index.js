(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', './copy2Board', './device', './getParam', './getStyle', './imageLoaded', './regexMap', './strStyle'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, require('./copy2Board'), require('./device'), require('./getParam'), require('./getStyle'), require('./imageLoaded'), require('./regexMap'), require('./strStyle'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, global.copy2Board, global.device, global.getParam, global.getStyle, global.imageLoaded, global.regexMap, global.strStyle);
		global.index = mod.exports;
	}
})(this, function (module, _copy2Board, _device, _getParam, _getStyle, _imageLoaded, _regexMap, _strStyle) {
	'use strict';

	var _copy2Board2 = _interopRequireDefault(_copy2Board);

	var _getParam2 = _interopRequireDefault(_getParam);

	var _getStyle2 = _interopRequireDefault(_getStyle);

	var _imageLoaded2 = _interopRequireDefault(_imageLoaded);

	var _regexMap2 = _interopRequireDefault(_regexMap);

	var _strStyle2 = _interopRequireDefault(_strStyle);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

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
});
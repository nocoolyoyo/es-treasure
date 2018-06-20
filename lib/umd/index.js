(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', './copy2Board', './device', './styleUtils', './getParam', './imageLoaded', './regexMap', './validate'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, require('./copy2Board'), require('./device'), require('./styleUtils'), require('./getParam'), require('./imageLoaded'), require('./regexMap'), require('./validate'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, global.copy2Board, global.device, global.styleUtils, global.getParam, global.imageLoaded, global.regexMap, global.validate);
		global.index = mod.exports;
	}
})(this, function (module, _copy2Board, _device, _styleUtils, _getParam, _imageLoaded, _regexMap, _validate) {
	'use strict';

	var _copy2Board2 = _interopRequireDefault(_copy2Board);

	var _getParam2 = _interopRequireDefault(_getParam);

	var _imageLoaded2 = _interopRequireDefault(_imageLoaded);

	var _regexMap2 = _interopRequireDefault(_regexMap);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

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
		isHexColor: _validate.isHexColor,
		isStyleUnit: _validate.isStyleUnit
	}; /**
     * Created by nocoolyoyo on 2018/6/11.
     */

	module.exports.default = module.exports;
});
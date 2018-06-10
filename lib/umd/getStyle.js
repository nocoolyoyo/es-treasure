(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports', './camelCase'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports, require('./camelCase'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports, global.camelCase);
		global.getStyle = mod.exports;
	}
})(this, function (module, exports, _camelCase) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = getStyle;

	var _camelCase2 = _interopRequireDefault(_camelCase);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function getStyle(element, styleName) {
		if (!element || !styleName) return null;
		styleName = (0, _camelCase2.default)(styleName);
		if (styleName === 'float') {
			styleName = 'cssFloat';
		}
		try {
			var computed = document.defaultView.getComputedStyle(element, '');
			return element.style[styleName] || computed ? computed[styleName] : null;
		} catch (e) {
			return element.style[styleName];
		}
	} /**
    *获取节点的某个属性的值
    * @param element {Object} 节点
    * @param styleName {String} 属性名字
    * @returns {*}
    * @author: nocoolyoyo
    * @date: 2018-03-11
    */
	module.exports = exports['default'];
});
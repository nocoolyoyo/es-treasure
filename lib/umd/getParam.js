(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.getParam = mod.exports;
	}
})(this, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = getParam;
	/**
  * @function 获取指定的URL参数值
  * @param name
  * @return {string}
  *
  * @author: nocoolyoyo
  * @date: 2018-03-11
  */
	function getParam(name) {
		if (typeof name !== 'string') console.error('要获取的参数名必须为字符串');
		//这里是去除加号，除公司外的项目可能会有影响
		var url = decodeURI(window.location.search.replace(/\+/g, '%20'));
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = url.substr(1).match(reg);

		if (r !== null) return decodeURI(r[2]);
		return '';
	}
	module.exports = exports['default'];
});
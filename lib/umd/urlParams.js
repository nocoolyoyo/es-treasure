(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', 'babel-runtime/core-js/object/keys'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('babel-runtime/core-js/object/keys'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.keys);
		global.urlParams = mod.exports;
	}
})(this, function (exports, _keys) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getUrlParam = getUrlParam;
	exports.appendUrlParam = appendUrlParam;

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	/**
  * @function 获取指定的URL参数值
  * @param name
  * @return {string}
  *
  * @author: nocoolyoyo
  * @date: 2018-03-11
  */
	function getUrlParam(name) {
		var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;

		if (typeof name !== 'string') console.error('要获取的参数名必须为字符串');
		var _url = decodeURI(url.replace(/\+/g, '%20'));
		var search = _url.substring(_url.lastIndexOf("?") + 1);
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = search.match(reg);
		if (r !== null) return decodeURI(r[2]);
		return '';
	}

	/**
  * @function 追加指定的URL参数值
  * @param params
  * @param url
  * @return {string}
  *
  * @author: nocoolyoyo
  * @date: 2018-09-04
  */
	function appendUrlParam() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

		//url已存在参数
		var tempStr = '';
		(0, _keys2.default)(params).forEach(function (key) {
			tempStr += '&' + key + '=' + params[key];
		});
		if (url.indexOf('?')) {
			tempStr = tempStr.replace(/\?/, '&');
		}
		url += tempStr;
		return url;
	}
});
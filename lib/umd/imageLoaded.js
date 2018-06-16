(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports', 'babel-runtime/core-js/promise'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports, require('babel-runtime/core-js/promise'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports, global.promise);
		global.imageLoaded = mod.exports;
	}
})(this, function (module, exports, _promise) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = imageLoaded;

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	/**
  * @module 图片预加载完返回图片的信息
  * @param url  图片的url
  * @returns {Promise<any>}包含图片属性的promise的对象
  * @returns {Promise} {number} width  图片宽度
  * @returns {Promise} {number} height 图片高度
  *
  * @author: nocoolyoyo
  * @date: 2018-03-11
  */
	function imageLoaded(url) {
		return new _promise2.default(function (resolve, reject) {
			var img = new Image();
			img.onload = function () {
				resolve({
					width: this.width,
					height: this.height
					//todo:添加大小，图片类型等信息
				}); //real_width,real_height
				img = null;
			};
			img.onerror = function () {
				reject('load image fail');
			};
			img.src = url;
		});
	}
	module.exports = exports['default'];
});
(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports', 'babel-runtime/core-js/promise', 'clipboard'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports, require('babel-runtime/core-js/promise'), require('clipboard'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports, global.promise, global.clipboard);
		global.copy2Board = mod.exports;
	}
})(this, function (module, exports, _promise, _clipboard) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = clip2Board;

	var _promise2 = _interopRequireDefault(_promise);

	var _clipboard2 = _interopRequireDefault(_clipboard);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	/**
  * @module  封装clipboard的复制功能
  *
  * @param text
  * @return {Promise<any>}
  *
  * @date      2018-03-01
  * @author   nocoolyoyo
  */
	function clip2Board() {
		var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		var domId = 'clipDom' + new Date().getTime();
		var $dom = document.createElement('button');
		var $container = document.body;

		$dom.style.display = 'hidden';
		$dom.style.position = 'fixed';
		$dom.setAttribute('id', domId);
		$dom.setAttribute('data-clipboard-text', text);

		$container.appendChild($dom);

		var Clipboard = new _clipboard2.default('#' + domId);
		return new _promise2.default(function (resolve, reject) {
			Clipboard.on('success', function (e) {
				e.clearSelection();
				$container.removeChild($dom);
				resolve(e.text);
			});
			Clipboard.on('error', function (e) {
				$container.removeChild($dom);
				reject();
			});
			$dom.click();
		});
	}
	module.exports = exports['default'];
});
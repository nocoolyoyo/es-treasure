'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = clip2Board;

var _clipboard = require('clipboard');

var _clipboard2 = _interopRequireDefault(_clipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clip2Board() {
	var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	var domId = 'clipDom' + new Date().getTime();
	var $dom = document.createElement('button');
	$dom.style.display = 'hidden';
	$dom.style.position = 'fixed';
	$dom.setAttribute('id', domId);
	$dom.setAttribute('data-clipboard-text', text);

	document.body.appendChild($dom);

	var Clipboard = new _clipboard2.default('#' + domId);
	return new Promise(function (resolve, reject) {
		Clipboard.on('success', function (e) {
			e.clearSelection();
			document.body.removeChild($dom);
			resolve(e.text);
		});
		Clipboard.on('error', function (e) {
			document.body.removeChild($dom);
			reject();
		});
		$dom.click();
	});
} /**
   * @module  封装clipboard的复制功能
   *
   * @param   { String }  text   复制内容到剪切板
   * @return  { Promise }
   *
   * @date      2018-03-01
   * @author   nocoolyoyo
   *
   */
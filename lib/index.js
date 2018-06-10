'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelCase;
/**
 * 将传入的属性名转为驼峰
 * @param name {String} 名字
 * @returns {*}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
function camelCase(name) {
  var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
  var MOZ_HACK_REGEXP = /^moz([A-Z])/;
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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
	return new _promise2.default(function (resolve, reject) {
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
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initClient = initClient;
exports.getClient = getClient;
exports.setAttribute = setAttribute;
/**
 * 设备信息，同时提供初始化方法在页面初始化挂载
 * Created by nocoolyoyo on 2018/3/11.
 */

var Client = {};

function initClient(lang) {
	if (/mobile/gi.test(navigator.userAgent)) {
		Client.type = "mobile";
	} else {
		Client.type = "pc";
	}

	if (/ipad|iphone|mac/gi.test(navigator.userAgent)) {
		Client.OS = "IOS";
	} else if (/android/gi.test(navigator.userAgent)) {
		Client.OS = "Android";
	} else if (/window/gi.test(navigator.userAgent)) {
		Client.OS = "Windows";
	}

	if (lang && lang !== '') {
		lang = lang.split('-');
		if (lang.length > 1) {
			lang = lang[0] + '-' + lang[1].toUpperCase();
		} else {
			lang = lang[0];
		}
		Client.lang = lang;
	} else {
		Client.lang = navigator.language;
	}
}

function getClient() {
	return Client;
}

function setAttribute(lang) {
	initClient(lang);
	var $root = document.documentElement;
	$root.setAttribute('data-client-os', Client.OS);
	$root.setAttribute('data-client-type', Client.type);
	$root.setAttribute('lang', Client.lang);

	if (Client.lang === "ar") {
		$root.setAttribute('dir', 'rtl');
	}
}
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getParam;
/**
 * 获取指定的URL参数值
 * @param: name: { String }
 * @return: value
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
function getParam(name) {

	if (typeof name !== 'string') throw new Error('要获取的参数名必须为字符串');
	//这里是去除加号，除公司外的项目可能会有影响
	var url = decodeURI(window.location.search.replace(/\+/g, '%20'));
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = url.substr(1).match(reg);

	if (r !== null) return decodeURI(r[2]);
	return '';
}
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getStyle;

var _camelCase = require('./camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = imageLoaded;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 图片预加载完返回图片的信息
 * @param url {String}    //图片的url
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
			resolve({ width: this.width, height: this.height }); //real_width,real_height
			img = null;
		};
		img.onerror = function () {
			reject('load image fail');
		};
		img.src = url;
	});
}
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

exports.default = {
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * 正则MAP大全
 * @var phone 手机号
 * @var email 邮箱
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
exports.default = regMap = {
  phone: /^1\d{10}$/,
  email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = strStyle;
/**
 * css样式构造
 * @param styleObj 文件后缀名
 * @returns {String}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
function strStyle(styleObj) {
  var cssStr = '';
  for (var key in styleObj) {
    if (styleObj.hasOwnProperty(key)) cssStr += key + ':' + styleObj[key] + ';';
  }
  return cssStr;
}
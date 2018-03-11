'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.clip2Board = clip2Board;

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

function initClient() {
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

	Client.lang = navigator.language;
}

function getClient() {
	if (Object.keys(Client).length === 0) initClient();

	return Client;
}

function setAttribute() {
	if (Object.keys(Client).length === 0) initClient();

	var $root = document.documentElement;
	$root.setAttribute('lang', Client.lang);
	$root.setAttribute('data-client-os', Client.OS);
	$root.setAttribute('data-client-type', Client.type);
	if (Client.lang === "ar") {
		$root.setAttribute('dir', 'rtl');
	}
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParam = getParam;
/**
 * 获取指定的URL参数值
 * @param: name: { String }
 *
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
exports.getStyle = getStyle;
/*
 * 获取节点的某个属性的值
 * @param element {Object}    //节点
 * @param styleName {String}    //属性名字
 *
 * @return value   //属性值
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 * */

function getStyle(element, styleName) {
	if (!element || !styleName) return null;
	styleName = camelCase(styleName);
	if (styleName === 'float') {
		styleName = 'cssFloat';
	}
	try {
		var computed = document.defaultView.getComputedStyle(element, '');
		return element.style[styleName] || computed ? computed[styleName] : null;
	} catch (e) {
		return element.style[styleName];
	}
}
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.imageLoaded = imageLoaded;
/*
 * 图片预加载完返回图片的信息
 * @param url {String}    //图片的url
 *
 * @return  { Promise }    //包含图片属性的promise的对象
 * @return  { Promise } { number } width        //图片宽度
 * @return  { Promise } { number } height       //图片高度
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 * */
function imageLoaded(url) {
	return new Promise(function (resolve, reject) {
		var img = new Image();
		img.onload = function () {
			resolve({ width: this.width, height: this.height }); //real_width,real_height
			img = null;
		};
		img.onerror = function () {
			reject('图片加载失败');
		};
		img.src = url;
	});
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strStyle = strStyle;
/*
 * css样式构造
 * @params styleObj { Object } //文件后缀名
 *
 * @return cssStr {String}  //构造后的样式字符串
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 * */
function strStyle(styleObj) {
  var cssStr = '';
  for (var key in styleObj) {
    if (styleObj.hasOwnProperty(key)) cssStr += key + ':' + styleObj[key] + ';';
  }
  return cssStr;
}
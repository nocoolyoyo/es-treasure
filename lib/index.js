import _Promise from 'babel-runtime/core-js/promise';
/**
 * @module  封装clipboard的复制功能
 *
 * @param   { String }  text   复制内容到剪切板
 * @return  { Promise }
 *
 * @date      2018-03-01
 * @author   nocoolyoyo
 *
 */
import ClipboardJS from 'clipboard';
export default function clip2Board(text = '') {
	let domId = 'clipDom' + new Date().getTime();
	let $dom = document.createElement('button');
	$dom.style.display = 'hidden';
	$dom.style.position = 'fixed';
	$dom.setAttribute('id', domId);
	$dom.setAttribute('data-clipboard-text', text);

	document.body.appendChild($dom);

	let Clipboard = new ClipboardJS(`#${domId}`);
	return new _Promise((resolve, reject) => {
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
}
/**
 * 设备信息，同时提供初始化方法在页面初始化挂载
 * Created by nocoolyoyo on 2018/3/11.
 */

let Client = {};

export function initClient(lang) {
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

export function getClient() {
	return Client;
}

export function setAttribute(lang) {
	initClient(lang);
	let $root = document.documentElement;
	$root.setAttribute('data-client-os', Client.OS);
	$root.setAttribute('data-client-type', Client.type);
	$root.setAttribute('lang', Client.lang);

	if (Client.lang === "ar") {
		$root.setAttribute('dir', 'rtl');
	}
}
/**
 * 文件处理方法工程
 * Created by nocoolyoyo on 2018/5/10.
 */

/*
 * 根据传入的文件名获取文件的类型
 * @param fileInfo {String}  传入的文件信息，可以是文件全名也可以是文件拓展名也可以是文件的二进制流文件
 *
 * */
/**
 * 根据传入的文件名获取文件的类型
 * @param: name: { String }
 *
 * @return: value
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export function getFileType(fileInfo) {
	let result = null;
	/*
  *   fixMe:这里的文件名字匹配可能不全，会慢慢完善
  *   toDo:补充二进制文件判断
  * */
	//二进制文件头信息的匹配组
	const bitMatchGroup = {
		image: "image",
		audio: "audio",
		video: "video",
		word: "application/msword",
		excel: "application/vnd.ms-excel",
		archive: "application/zip"
	};

	//文件名的匹配组
	const nameMatchGroup = {
		image: /[jpeg|jpg|png|gif]/, //图片
		audio: /[mp[0-9]|wav]/, //音频
		video: /[3gp]/, //视频
		word: /[doc|docx]/, //word
		excel: /[xls|xlt|xlm|xlw|xlsx]/, //excel
		ppt: /[ppt|pps|pot|pptx]/, //ppt
		archive: /[tar|rar|zip]/ //压缩文件
	};

	/*
  * 流文件判断处理
  * @param bitHead {String} //文件信息头
  * @return fileType {String}
  * */
	const bitWorkFlow = function (bitHead) {};

	/*
  * 文件名处理
  * @prama fileExt {String} //文件后缀名
  * @return fileType {String}
  * */
	const nameWorkFlow = function (fileExt) {};

	/*主程
  * */
	function run() {
		fileInfo = fileInfo.toLowerCase();
		let ext = /\./.test(fileInfo) === true ? fileInfo.split["."][1] : fileInfo;

		for (let k in nameMatchGroup) {
			if (ext.match(nameMatchGroup[k])) {
				result = k;
				break;
			}
		}

		return result;
	}

	return run();
}
/**
 * 获取指定的URL参数值
 * @param: name: { String }
 *
 * @return: value
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export default function getParam(name) {

  if (typeof name !== 'string') throw new Error('要获取的参数名必须为字符串');
  //这里是去除加号，除公司外的项目可能会有影响
  const url = decodeURI(window.location.search.replace(/\+/g, '%20'));
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  const r = url.substr(1).match(reg);

  if (r !== null) return decodeURI(r[2]);
  return '';
}
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

//将传入的属性名转为驼峰
function camelCase(name) {
	let SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
	let MOZ_HACK_REGEXP = /^moz([A-Z])/;
	return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
		return offset ? letter.toUpperCase() : letter;
	}).replace(MOZ_HACK_REGEXP, 'Moz$1');
}

export default function getStyle(element, styleName) {
	if (!element || !styleName) return null;
	styleName = camelCase(styleName);
	if (styleName === 'float') {
		styleName = 'cssFloat';
	}
	try {
		const computed = document.defaultView.getComputedStyle(element, '');
		return element.style[styleName] || computed ? computed[styleName] : null;
	} catch (e) {
		return element.style[styleName];
	}
}
import _Promise from 'babel-runtime/core-js/promise';
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
export default function imageLoaded(url) {
	return new _Promise((resolve, reject) => {
		let img = new Image();
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
/*
 * 正则判断大全
 * @param test   {String}    //被匹配对象
 * @param type {String}    // 匹配类型
 *
 * @return  { Boolean }    //true表示能匹配，false不匹配
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 * */
const regMap = {
  phone: /^1\d{10}$/,
  email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
};
export default function isRegex(test, type) {
  if (regMap[type] === 'undefined') throw new Error('无该类型判断条件');
  return regMap[type].test(test);
}
/*
 * css样式构造
 * @params styleObj { Object } //文件后缀名
 *
 * @return cssStr {String}  //构造后的样式字符串
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 * */
export default function serilizeUrl(styleObj) {
  let cssStr = '';
  for (let key in styleObj) {
    if (styleObj.hasOwnProperty(key)) cssStr += `${key}:${styleObj[key]};`;
  }
  return cssStr;
}
/*
 * css样式构造
 * @params styleObj { Object } //文件后缀名
 *
 * @return cssStr {String}  //构造后的样式字符串
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 * */
export default function strStyle(styleObj) {
  let cssStr = '';
  for (let key in styleObj) {
    if (styleObj.hasOwnProperty(key)) cssStr += `${key}:${styleObj[key]};`;
  }
  return cssStr;
}
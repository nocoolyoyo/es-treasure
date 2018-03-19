'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = imageLoaded;
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
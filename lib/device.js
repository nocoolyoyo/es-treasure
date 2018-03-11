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
}
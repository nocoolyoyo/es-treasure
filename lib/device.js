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
		Client.lang = lang;
	} else {
		Client.lang = navigator.language;
	}
}

function getClient() {
	if (Object.keys(Client).length === 0) initClient();

	return Client;
}

function setAttribute(lang) {
	if (Object.keys(Client).length === 0) initClient(lang);

	var $root = document.documentElement;
	$root.setAttribute('data-client-os', Client.OS);
	$root.setAttribute('data-client-type', Client.type);
	$root.setAttribute('lang', Client.lang);
	if (Client.lang === "ar") {
		$root.setAttribute('dir', 'rtl');
	}
}
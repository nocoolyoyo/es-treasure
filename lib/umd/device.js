(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports", "./validate"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require("./validate"));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.validate);
		global.device = mod.exports;
	}
})(this, function (exports, _validate) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.initClient = initClient;
	exports.getClient = getClient;
	exports.setAttribute = setAttribute;


	var Client = {};

	/**
  * @function 初始化硬件信息
  * @param lang
  * @param isMount
  */
	/**
  * 设备信息，同时提供初始化方法在页面初始化挂载
  * Created by nocoolyoyo on 2018/3/11.
  */
	function initClient(lang) {
		var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

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
		//挂载硬件信息到节点属性
		if (isMount) {
			var $root = document.documentElement;
			$root.setAttribute('data-client-os', Client.OS);
			$root.setAttribute('data-client-type', Client.type);
			$root.setAttribute('lang', Client.lang);

			if (Client.lang === "ar") {
				$root.setAttribute('dir', 'rtl');
			}
		}
	}

	/**
  * @function 获取硬件信息
  * @returns {object}
  */
	function getClient() {
		if ((0, _validate.isEmptyObject)(Client)) initClient();
		return Client;
	}

	/**
  * @function 兼容旧版本，准备废弃
  * @param lang
  */
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
});
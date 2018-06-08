/**
 * 设备信息，同时提供初始化方法在页面初始化挂载
 * Created by nocoolyoyo on 2018/3/11.
 */

let Client = { }

export function initClient(lang) {
	if(/mobile/gi.test(navigator.userAgent)){
		Client.type = "mobile"
	}else{
		Client.type = "pc"
	}

	if(/ipad|iphone|mac/gi.test(navigator.userAgent)){
		Client.OS = "IOS"
	}else if(/android/gi.test(navigator.userAgent)){
		Client.OS = "Android"
	}else if(/window/gi.test(navigator.userAgent)){
		Client.OS = "Windows"
	}

	if(lang && lang !== ''){
		lang = lang.split('-')
		if(lang.length > 1) {
			lang = lang[0]+'-'+lang[1].toUpperCase()
		}else{
			lang = lang[0]
		}
		Client.lang = lang
	} else{
		Client.lang = navigator.language
	}
}

export function getClient() {
	return Client
}

export function setAttribute(lang) {
	initClient(lang)
	let $root = document.documentElement
	$root.setAttribute('data-client-os',  Client.OS)
	$root.setAttribute('data-client-type',  Client.type)
	$root.setAttribute('lang',  Client.lang)

	if(Client.lang === "ar") {
		$root.setAttribute('dir',  'rtl')
	}
}
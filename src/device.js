/**
 * 设备信息，同时提供初始化方法在页面初始化挂载
 * Created by nocoolyoyo on 2018/3/11.
 */
import getParam from './getParam'

let Client = { }

export  function initClient(lang=getParam('lang')) {
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
		Client.lang = lang
	} else{
		Client.lang = navigator.language
	}
}

export  function getClient() {
	if (Object.keys(Client).length === 0) 	initClient()
	return Client
}

export  function setAttribute(lang) {
	initClient(lang)
	let $root = document.documentElement
	$root.setAttribute('data-client-os',  Client.OS)
	$root.setAttribute('data-client-type',  Client.type)
	$root.setAttribute('lang',  Client.lang)

	if(Client.lang === "ar") {
		$root.setAttribute('dir',  'rtl')
	}
}
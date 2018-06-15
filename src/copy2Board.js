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
import ClipboardJS from 'clipboard'
export  default function clip2Board(text='') {
	let domId = 'clipDom' + new Date().getTime()
	let $dom = document.createElement('button')
	$dom.style.display = 'hidden'
	$dom.style.position = 'fixed'
	$dom.setAttribute('id', domId)
	$dom.setAttribute('data-clipboard-text', text)

	document.body.appendChild($dom)

	let  Clipboard = new ClipboardJS(`#${domId}`);
	return new Promise((resolve, reject)=>{
		Clipboard.on('success', function(e) {
			e.clearSelection();
			document.body.removeChild($dom)
			resolve(e.text)
		});
		Clipboard.on('error', function(e) {
			document.body.removeChild($dom)
			reject()
		});
		$dom.click();
	})
}

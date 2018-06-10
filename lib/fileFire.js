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
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.strStyle = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = strStyle;
  /**
   * css样式构造
   * @param styleObj 文件后缀名
   * @returns {String}
   *
   * @author: nocoolyoyo
   * @date: 2018-03-11
   */
  function strStyle(styleObj) {
    var cssStr = '';
    for (var key in styleObj) {
      if (styleObj.hasOwnProperty(key)) cssStr += key + ':' + styleObj[key] + ';';
    }
    return cssStr;
  }
  module.exports = exports['default'];
});
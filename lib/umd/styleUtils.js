(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './camelCase'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./camelCase'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.camelCase);
    global.styleUtils = mod.exports;
  }
})(this, function (exports, _camelCase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.strStyle = strStyle;
  exports.getStyle = getStyle;

  var _camelCase2 = _interopRequireDefault(_camelCase);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  /**
   *获取节点的某个属性的值
   * @param element {Object} 节点
   * @param styleName {String} 属性名字
   * @returns {*}
   * @author: nocoolyoyo
   * @date: 2018-03-11
   */
  /**
   * css样式相关
   */
  function getStyle(element, styleName) {
    if (!element || !styleName) return null;
    styleName = (0, _camelCase2.default)(styleName);
    if (styleName === 'float') {
      styleName = 'cssFloat';
    }
    try {
      var computed = document.defaultView.getComputedStyle(element, '');
      return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
      return element.style[styleName];
    }
  }
});
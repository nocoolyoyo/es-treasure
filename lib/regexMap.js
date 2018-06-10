"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * 正则MAP大全
 * @var phone 手机号
 * @var email 邮箱
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
exports.default = {
  phone: /^1\d{10}$/,
  email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
};
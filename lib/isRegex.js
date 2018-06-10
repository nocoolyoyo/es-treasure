/*
 * 正则判断大全
 * @param test   {String}    //被匹配对象
 * @param type {String}    // 匹配类型
 *
 * @return  { Boolean }    //true表示能匹配，false不匹配
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 * */
const regMap = {
  phone: /^1\d{10}$/,
  email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
};
export default function isRegex(test, type) {
  if (regMap[type] === 'undefined') throw new Error('无该类型判断条件');
  return regMap[type].test(test);
}
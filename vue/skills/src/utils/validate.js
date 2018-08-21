/* 验证手机号 */
export function isPhone (str) {
  const reg = /^1[345678]\d{9}$/
  if (str === '') {
    return false
  } else {
    return reg.test(str.trim())
  }
}

/* 是否是邮箱 */
export function isEmail (str) {
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5\.]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  return reg.test(str.trim())
}

/* 是否是数字 */
export function isNumber (str) {
   return ( typeof parseInt(str) == Number )
}

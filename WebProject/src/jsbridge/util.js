/**
 * Created by aidenZou on 16/5/5.
 */
// require('vconsole');

const ua = navigator.userAgent
let isWX = function () {
  var ua = navigator.userAgent
  return (/MicroMessenger/i).test(ua)
}
let isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

let isAPP = function () {
  var ua = navigator.userAgent
  return (/TestWeb/i).test(ua) || (/QYB/i).test(ua)
}
let isAndroid = function () {
  var ua = navigator.userAgent
  return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1
}

let setTitle = (title) => {
  document.title = title
  if (isIOS) {
    let iframe = document.createElement('iframe')
    iframe.style.visibility = 'hidden'
    iframe.setAttribute('src', 'https://m.baidu.com/favicon.ico')
    iframe.style.width = '1px'
    iframe.style.height = '1px'
    iframe.onload = function () {
      setTimeout(function () {
        document.body.removeChild(iframe)
      }, 0)
    }
    document.body.appendChild(iframe)
  }
}

// 获取 url 请求参数
let getRequestParams = function (url) {
  url = url || window.location.search
  url = decodeURIComponent(url)
  var Request = {}
  if (url.indexOf('?') !== -1) {
    var str = url.substr(1)
    let strs = str.split('&')
    for (var i = 0; i < strs.length; i++) {
      var _key = strs[i].split('=')[0]
      _key && (Request[_key] = strs[i].split('=')[1])
    }
  }
  return Request
}

// 检查邮箱格式
let checkEmail = function (email) {
  var correctEmail = /^([a-zA-Z0-9]+[_|\|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
  return correctEmail.test(email)
}
let isEmptyObject = function (obj) {
  /* eslint-disable no-unused-vars */
  let name
  for (name in obj) {
    return false
  }
  return true
}
// 工具JSTools
let JSTools = function () {
  // function fileImgUrl(file) {
  //   var url = null;
  //   if (window.createObjectURL!=undefined) {
  //     url = window.createObjectURL(file);
  //   } else if (window.URL!=undefined) {
  //     url = window.URL.createObjectURL(file);
  //   } else if (window.webkitURL!=undefined) {
  //     url = window.webkitURL.createObjectURL(file);
  //   }
  //   return url;
  // }
  //
  // function isAndroidDevice() {
  //   var ua = navigator.userAgent;
  //   return (/Android/i).test(ua);
  // }
  // return {
  //   fileImgUrl:fileImgUrl,
  //   isAndroidDevice:isAndroidDevice
  // };
}


export default {
  isWX : isWX(),
  isAPP : isAPP(),
  isAndroid : isAndroid(),
  getRequestParams : getRequestParams,
  checkEmail : checkEmail,
  isEmptyObject : isEmptyObject,
  setTitle : setTitle,
  JSTools : JSTools,
}

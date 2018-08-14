1. js中 call 和 apply
 test.call/apply(obj);临时让test成为obj的方法进行调用。

## 使用typeof截取字符串判断浏览器默认语言。
````javascript
  navigatior.language.indexof('en')>-1
````

## 获取当前窗口地址在指定域名下的路径
```javascript
	var path = window.location.pathname;
	var activityNo = path.split('/')[path.split('/').length - 1];
```

## 判断打开浏览器，并设置cookie
```javascript
if(browser.versions.weiChat){
	var wx_login = getCookie('wx_login');
	if (wx_login == 'undefined' || wx_login == '' || wx_login == 'false'){
		setCookie('iswx', '1');
		window.location.reload();
	}else if(wx_login == 'true'){
		setCookie('iswx', '1');
	}
} else {
	setCookie('iswx', '0');
}
```

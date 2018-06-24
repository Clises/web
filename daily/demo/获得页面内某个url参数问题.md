1. 实例
```javascript
$(init)

function init() {

  var name = getSearchParam('name');

  showFounder(name);

}

function getSearchParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return (r[2]); return null;
}

function showFounder(name) {
  switch (name) {
    case 'ycc':
      $('.block--ycc').removeClass('none');
      break;
    case 'ql':
      $('.block--ql').removeClass('none');
      break;
    case 'lg':
      $('.block--lg').removeClass('none');
      break;
    case 'dy':
      $('.block--dy').removeClass('none');
      break;
    default:
      $('.block--ql').removeClass('none');
  }
}

```
详解： 
 - getSearchParam()  截取url链接
寻找&+url参数名字=值+&     &可以不存在。
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
var r   =   window.location.search.substr(1).match(reg);      
if (r!=null) return (r[2]); return null;   
开始匹配，找到对应url值，没找到返回null。



1.屏蔽用户选择
Q: 禁止用户选择页面中的文字或者图片
```css
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
```


2.清除输入框内阴影
Q: 在iOS上，输入框默认有内部阴影，但无法使用 box-shadow 来清除，如果不需要阴影，可以这样关闭：
```css
-webkit-appearance: none;
```

3.禁止文本缩放
```css
-webkit-text-size-adjust: 100%;

```

4.如何禁止保存或拷贝图像
```css
img{-webkit-touch-callout: none;}
```

5.设置input里面placeholder字体的大小
```css
::-webkit-input-placeholder{ font-size:10pt;}
```

6.audio元素和video元素在ios和andriod中无法自动播放
代码如下,触屏及播放
```javascript
$('html').one('touchstart',function(){
audio.play()
})
```

7.手机拍照和上传图片
Q: 针对file类型增加不同的accept字段
A:代码如下
```html
<input type="file">的accept 属性
<!-- 选择照片 -->
<input type=file accept="image/*">
<!-- 选择视频 -->
<input type=file accept="video/*">
```

8.开启硬件加速
```css
-webkit-transform: translate3d(0, 0, 0);
-moz-transform: translate3d(0, 0, 0);
-ms-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
```


9.CSS透明度颜色设置问题

 Android部分不支持 hex写法，推荐用rgba的写法
   #0000009c --> rgba(0, 0, 0, 0.61)
   
10.flex对低版本的ios和Android的支持问题
使用postcss的autoprefixer插件，自动添加浏览器内核前缀，
并且增加更低浏览器版本的配置，自动添加flex老版本的属性和写法
autoprefixer({
    browsers: [
        'iOS >= 6',     // 特殊处理支持低版本IOS
        'Safari >= 6',  // 特殊处理支持低版本Safari
    ],
}),

11.ios：DOM元素固定一边，另一边滚动，滚动很卡的问题
  ```css
// (横向滚动用的多些)简单粗暴的办法，样式添加如下属性
-webkit-overflow-scrolling: touch;

```
4. 某些 Anbroid 1px 不显示问题




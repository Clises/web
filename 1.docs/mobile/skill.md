
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

9. 

1. p标签中不能包含块状元素，若包含块状元素，会结束自己
2. html中a链接跳转失效方法
```html
<a href="javascript:void (0)">
  表示跳转失效
</a>
```
3.如果在background中设置二维码，会无法扫描，应设置在元素中,在实际开发中，设计添加照片，不需要多余设置div的宽高。
4. opacity:0、visibility：hidden、display：none 三者区别
opacity：0仅仅不可见，但仍可被浏览器发现，也就能触发各种事件。通过浏览器调试工具即可得出此结论。
visibility：hidden则相当于完全从文档流中删除了该元素，但所占据的尺寸仍然保留。
display：none 完全不在文档流中
一定注意这个opacity，如果制作弹窗的话，如果只顾弹窗效果，而使用opcity会造成不必要的后果。。。。。

display:none和visibility:hidden的差别:visibility:hidden隐藏，但在浏览时保留位置；而CSS display:none视为不存在。
5. CSS3 box-sizing 属性
  在设置box-sizing浏览器会以怪异模式进行解析，在这样的情况下，设置padding或者border之后不div不会错位掉下来。
6. img标签注意事项   实际用途:
img标签是inline，表现上更加倾向于inline-block，效果等同于块状元素。
它的特殊表现包括：可以设置width/height;
默认的，img元素在屏幕占据的空间与其图片的实际像素一致，除非CSS有设置或者自身的width/height HTML 属性有设置
如果img标签的包裹元素为也为inline元素，则img的边界可以超出其直接父元素的边界，直到自己的宽、高达到最大或者设定值为止，而且文档流中img的兄弟元素也不能遮盖住img。最常见的就是<a>里面包含的<img>


7. vertical-align 属性 
设置元素的垂直对齐方式<br/>
属性值包括：
[设置元素的垂直方式](http://www.w3school.com.cn/cssref/pr_pos_vertical-align.asp)
只在inline-block上其起作用，常用的属性值是middle

8. 多个块状元素一行显示
- 1、两个块级元素都进行浮动。   注意清除浮动问题。
- 2、两个块级元素都设置为display:inline-block行内块。
- 3、进行flex布局,若有多个块状元素包含在div中，只需要设置父元素的display：flex就可以。。
- 4、两个块级元素同时进行绝对定位，定位到同一高度。
9.css3的linear-gradient()滤镜属性
参考链接
            http://www.css88.com/book/css/values/image/linear-gradient().html

10. 选择器之 >子元素选择器 <br/>
选某元素的子元素的元素，如果一组div包含很多子元素，包括p  span
要选择span 就直接div>span，空格可以不注意。。

11. 文字效果之 
 **font-weight属性设置文字粗细水平**
        默认值:normal
        继承值：yes 
 **text-overflow规定当文本溢出包含元素时发生的情况**  
 可用在制作信息列表中
 必须项：overflow：hideen  
 属性值：text-overflow:ellipsis  修剪文本。	    
         text-overflow:clip  显示省略符号来代表被修剪的文本。	  
         string：使用给定的字符串来代表被修剪的文本。  
![image](https://github.com/Clises/pic/blob/master/font-weight.png?raw=true)

12.布局之 box-orient
**该属性规定框的子元素应该被水平或垂直排列。**

13.在常见布局中,颜色是不能继承的,但是字体大小可以继承 之后做继承的总结.
14.怎么让Chrome支持小于12px 的文字？
```html
p{font-size:10px;-webkit-transform:scale(0.8);} //0.8是缩放比例
```

15.reset重置必要性
    由于各个浏览器自带默认样式，而且都不一样，reset 重置是为了让各个浏览器有统一的标准。
        

16.部分手机端吸底会出现抖动问题
设置 html 和 body padding-bottom:x 与底部的值









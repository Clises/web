
## CSS3 text-overflow 属性<br/>
**规定当文本溢出包含元素时发生的情况<br/>**
**可用在制作信息列表中**

```html
必须项：overflow：hideen
属性值：text-overflow:ellipsis  修剪文本。	
        text-overflow:clip  显示省略符号来代表被修剪的文本。	
        string：使用给定的字符串来代表被修剪的文本。	
<!DOCTYPE html>
<html>
<head>
<style> 
div.test
{
white-space:nowrap; 
width:12em; 
overflow:hidden; 
border:1px solid #000000;
}
</style>
</head>
<body>

<p>下面两个 div 包含无法在框中容纳的长文本。正如您所见，文本被修剪了。</p>

<p>这个 div 使用 "text-overflow:ellipsis" ：</p>

<div class="test" style="text-overflow:ellipsis;">This is some long text that will not fit in the box</div>

<p>这个 div 使用 "text-overflow:clip"：</p>

<div class="test" style="text-overflow:clip;">This is some long text that will not fit in the box</div>

</body>
</html>
```
属性值包括:
    ![image](https://raw.githubusercontent.com/Clises/pic/master/text-overflow.png)

# box-orient
**该属性规定框的子元素应该被水平或垂直排列。**
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
width:350px;
height:150px;
border:1px solid black;
  
/* Firefox */
display:-moz-box;
-moz-box-orient:horizontal;

/* Safari, Opera, and Chrome */
display:-webkit-box;
-webkit-box-orient:horizontal;

/* W3C */
display:box;
box-orient:horizontal;  //从左向右排列子元素
}
</style>
</head>
<body>

<div>
<p>段落 1。</p>
<p>段落 2。</p>
<p>段落 3。</p>
</div>

<p><b>注释：</b>IE 不支持 box-orient 属性。</p>

</body>
</html>
```
属性值包括:
![image](https://github.com/Clises/pic/blob/master/box-orient.png?raw=true)

# align-items
定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。
![image](https://github.com/Clises/pic/blob/master/align-items.jpg?raw=true)

## >子元素选择器 <br/>
选某元素的子元素的元素，如果一组div包含很多子元素，包括p  span
要选择span 就直接div>span，空格可以不注意。。

## border属性
    dashed虚线
    
    
## background-origin
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        div{

            /* 关键样式 */
            background: url(https://github.com/Clises/pic/blob/master/icon/like/Combined%20Shape%20Copy%203.png?raw=true)
            no-repeat bottom right #58a;
            background-origin: content-box;  /*相对于内荣框定位*/
            background-origin: border-box;
            /*相对于边框盒定位*/
            background-origin: padding-box;
/*相对于内边距框定位*/
            padding: 10px 20px;
            /* 其它样式 */
            max-width: 10em;
            min-height: 5em;
            font: 100%/1 sans-serif;


        }
    </style>
    <title>Title</title>
</head>
<body>
<div>
    兼容性问题解决方案
</div>
<p>
    实现要点：
    background-origin 默认值是 padding-box，也就说我们设置 background 为 top left 时左上角是 padding box（内边距的外沿框）的左上角。
    在本例中设置 background-origin 为 content-box，那么就相对于 content box（内容区的外沿框）的左上角，那么也就是背景图离容器的右边和底边的偏移量是跟着容器的 padding 值走了，那设置 padding: 10px 20px; 自然就可以实现本例的效果了。
</p>
</body>
</html>

```
##CSS3 box-sizing 属性

  在设置box-sizing浏览器会以怪异模式进行解析，在这样的情况下，设置padding或者border之后不div不会错位掉下来。

## button美化
http://www.css88.com/demo/beautify-input/

## img标签注意事项   实际用途:
img标签是inline，表现上更加倾向于inline-block，效果等同于块状元素。
它的特殊表现包括：可以设置width/height;
默认的，img元素在屏幕占据的空间与其图片的实际像素一致，除非CSS有设置或者自身的width/height HTML 属性有设置
如果img标签的包裹元素为也为inline元素，则img的边界可以超出其直接父元素的边界，直到自己的宽、高达到最大或者设定值为止，而且文档流中img的兄弟元素也不能遮盖住img。最常见的就是<a>里面包含的<img>
## vertical-align 属性 
设置元素的垂直对齐方式<br/>
属性值包括：
http://www.w3school.com.cn/cssref/pr_pos_vertical-align.asp<br/>
只在inline-block上其起作用，常用的属性值是middle

## 多个块状元素一行显示
- 1、两个块级元素都进行浮动。   注意清除浮动问题。
- 2、两个块级元素都设置为display:inline-block行内块。
- 3、进行flex布局,若有多个块状元素包含在div中，只需要设置父元素的display：flex就可以。。
- 4、两个块级元素同时进行绝对定位，定位到同一高度。
## linear-gradient()滤镜属性
参考链接
            http://www.css88.com/book/css/values/image/linear-gradient().html
## css两端对齐方式
    text-align：justify
    column多列布局
    使用justify-content:space-between


  
## opacity:0、visibility：hidden、display：none 三者区别
opacity：0仅仅不可见，但仍可被浏览器发现，也就能触发各种事件。通过浏览器调试工具即可得出此结论。
visibility：hidden则相当于完全从文档流中删除了该元素，但所占据的尺寸仍然保留。
display：none 完全不在文档流中
一定注意这个opacity，如果制作弹窗的话，如果只顾弹窗效果，而使用opcity会造成不必要的后果。。。。。

display:none和visibility:hidden的差别:visibility:hidden隐藏，但在浏览时保留位置；而CSS display:none视为不存在。

###  如果在background中设置二维码，会无法扫描，应设置在元素中，在实际开发中，设计添加照片，不需要多余设置div的宽高。

## 居中方式，x轴方向

 transform：translateX(50%);
  position:absolute;
  left:50%
### font-weight  属性   用来设置文字粗细水平
        默认值:normal
        继承值：yes
![image](https://github.com/Clises/pic/blob/master/font-weight.png?raw=true)
### p标签中不能包含块状元素，若包含块状元素，会结束自己
## html中a链接跳转失效方法
```html
<a href="javascript:void (0)">
  表示跳转失效
</a>
```
             
1.什么是json：用于数据交换的文本格式。  
2.json和xml比较  
  与同样作为数据传输的格式的xml比起来，json具有以下优点：   
  - 书写简单，结构清晰，轻量级   
  - 符合javascript的原生语法，解释器引擎可以直接处理  
3.json格式的规定
  数组或对象的值可以是简单值也可以是复合值  
  简单值包括：字符串、数值（必须是十进制标识）、布尔值和Null，其中（NaN,Infinity,-Infinity和undefined都会被转换为null)  
  复合值包括符合json格式的数组或对象  
  数组或对象的最后一个成员后面不能加逗号  
  数组或对象之中的字符串必须使用双引号，不能使用单引号  
  对象的成员名称必须使用双引号   
    
 注意:空数组或者空对象都是合格的json值，Null也是一个合格的json值 
 正确的json格式，例如：
  ["one", "two", "three"] //数组      
  
  { "one": 1, "two": 2, "three": 3 }//对象，注意成员名称必须用双引号  
  
  {"names": ["张三", "李四"] }//值为复合对象   
  
  [ { "name": "张三"}, {"name": "李四"} ]//对象数组  
  
 
 
4.json对象
ES5中的两个方法：JSON.stringify()和JSON.parse()
          
1. JSON.stringify() 
用处：将一个值转换为json格式的字符串，该字符串可以被JSON.parse()解析,需要注意以下几点：  
原始类型的字符串解析后会自动加上双引号  
原始对象中如有一个成员是undefined,函数或者是xml对象，则这个成员被忽略  
原始对象中如果数组的成员的是undefined,函数或者是xml对象，则被转换为null  
正则表达式会被转换为空对象  
自动忽略原始对象中不可遍历的属性  
可以接受一个数组参数，指定需要转换成字符串的属性  
可以接受一个函数作为参数，指定如何来转换成字符串，注意该函数是递归处理所有的键  
如何被转换的对象中包含一个toJSON方法，则会使用该方法的返回值，将该返回值转换为字符串，忽略其他成员（可以被用来处理转换正则表达式的情况）  
2. JSON.parse() 
用处：用来将json格式的字符串转换为对象。如果该json字符串不符合json格式，则会报错。



实例：

```javascript
console.log(JSON.stringify('abc'));//""abc""字符串默认加上双引号
        console.log(JSON.stringify(1));//"1"
        console.log(JSON.stringify(false) );//"false"
        console.log(JSON.stringify([]));//"[]"
        console.log(JSON.stringify({}));//"{}"
        console.log(JSON.stringify([1, "false", false]));//"[1, "false", false]"
        console.log(JSON.stringify({ name: "张三" }));//"{"name":"张三"}" 成员名称双引号
        console.log(JSON.stringify({
                    f: function(){},
                    a: [ function(){}, undefined ]
                }));//"{"a":[null,null]}"
        console.log(JSON.stringify(/foo/));//"{}"正则表达式会被转换为空对象
```














## 6、json字符串解析   key in 一种形式
```html
for (var i = 0, l = data.result.banner.length; i < l; i++) {

                    for (var key in data.result.banner[i]) {
                        var banner_img=data.result.banner[i][key]
                        var dom_='<div class="swiper-slide">' +
                            '<img src="'+banner_img+'"/>' +
                            '</div>'
                        $('.banner_container .bannerSwiper .swiper-wrapper').append(dom_);
                    }
```
  ####  第二种形式，公司写法
  ```html
                  for (var m = 0, le = data.result.article.length; m < le; m++) {
                    var Artice_ = data.result.article[m]
                    console.log(Artice_)
                    var  alticle_img= Artice_.alticle_img,
                        article_title = Artice_.article_title,
                        article_author = Artice_.article_author,
                        article_time = Artice_.article_time
                    var articleDom='<ul class="article"><li class="article_box ">' +
                        '<p class="alticle_img">' +
                        '   <img src="'+alticle_img+'"/></p>' +
                        '<p class="article_title_box">' +
                        '<a href="#" class="article_title">  '+article_title+'' +
                        '</a>' +
                        '<span class="article_author">'+article_author+'</span>' +
                        '<span class="article_time" title="' + article_time + '"></span>' +
                        '</p>' +
                        '</li></ul>'
                    $('.article-container').append(articleDom);


  
               }
```

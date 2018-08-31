var str = '\
<div class="w80">\
    <h1 class="logo">\
        <a href="/index.html"><img src="http://static.qiezipai.cn/wechat/photoplus/img/home/logle.png" alt=""></a>\
    </h1>\
    <h1 class="logo1">\
        <a href="/index.html"><img src="http://static.qiezipai.cn/wechat/photoplus/img/model/logo.png" alt=""></a>\
    </h1>\
    <span class="off">\
    </span>\
    <ul class="head_list" id="head_list">\
      <li id="menu-function">\
      <a href="/model.html">功能</a>\
      <span></span>\
      </li>\
      <li class="menu-case" id="menu-case">\
        <a href="/case.html">案例</a>\
      <span></span>\
    </li>\
      <li id="menu-price" class="menu-price">\
      <a href="/price.html">价格</a>\
      <span></span>\
      </li>\
      <li class="down down_pc" id="menu-down--pc">\
      <a href="http://desk.photoplus.cn/#/download">下载</a>\
      <span></span>\
      </li>\
      <li class="down down_h5" id="menu-down--h5">\
      <a href="https://fir.im/t149">下载</a>\
      <span></span>\
      </li>\
      <li class="help" id="menu-help">\
      <a href="http://help.plusx.cn">帮助</a>\
      <span></span>\
      </li>\
      <li class="last">\
      <a href="http://desk.photoplus.cn">前往工作台</a>\
      </li>\
    </ul>\
</div>\
';
var w = window.screen.width;
var path = window.location.pathname;

$('header').append(str);
if (w < 769) {
    if (path.indexOf('model') > -1) {
        $('#menu-function').find('a').addClass('active');
    }
    if (path.indexOf('price') > -1) {
        $('#menu-price').find('a').addClass('active');
    }
} else {
    if (path.indexOf('model') > -1) {
        $('header').addClass('zi');
    }
}

$(".off").click(function(){
    $(this).next().slideToggle(200);
    $(this).toggleClass("no")
})

function headerChange() {
    var a = $(document).scrollTop();
    a < 64 ? $('header').removeClass('white') : $('header').addClass('white');
}
headerChange();
$(document).on('scroll', headerChange)

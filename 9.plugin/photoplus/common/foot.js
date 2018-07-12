var scroll = window.screen.width;

    var str = '<ul class="box_ul" id="box_ul">\
    <li class="parentLi">\
        <p>产品<i></i></p>\
        <ul class="childrenUl">\
            <li class="childrenLi">\
                <a href="/model.html">产品功能</a>\
            </li>\
            <li class="childrenLi down_pc">\
                <a href="http://desk.photoplus.cn/#/download">下载APP</a>\
            </li>\
            <li class="childrenLi down_h5">\
                <a href="https://fir.im/t149">下载APP</a>\
            </li>\
            <li class="childrenLi">\
                <a href="javascript:;" class="sdk">SDK</a>\
            </li>\
        </ul>\
    </li>\
    <li class="parentLi">\
        <p>服务<i></i></p>\
        <ul class="childrenUl">\
            <li class="childrenLi">\
                <a href="http://help.plusx.cn">帮助中心</a>\
            </li>\
            <li class="childrenLi">\
                <a href="http://wx.plusx.cn/activity/live/3711431">更新日志</a>\
            </li>\
            <li class="childrenLi">\
                <a href="http://desk.photoplus.cn/#/agreement">服务条款</a>\
            </li>\
        </ul>\
    </li>\
    <li class="parentLi">\
        <p>公司<i></i></p>\
        <ul class="childrenUl">\
            <li class="childrenLi">\
                <a href="/about.html">关于我们</a>\
            </li>\
            <li class="childrenLi">\
                <a href="https://www.lagou.com/gongsi/j126741.html">加入我们</a>\
            </li>\
            <li class="childrenLi">\
                <a href="/linkus.html">联系我们</a>\
            </li>\
        </ul>\
    </li>\
    <li class="parentLi">\
        <p>联系方式<i></i></p>\
        <ul class="childrenUl">\
            <li class="childrenLi">\
                <a href="javascript:;">400-8080-565</a>\
            </li>\
            <li class="childrenLi">\
                <a href="javascript:;">support@photoplus.cn</a>\
            </li>\
            <li class="childrenLi">\
                <a href="javascript:;">QQ群：669704804</a>\
            </li>\
            <li class="childrenLi">\
                <a id="qrcode" class="qrcode">\
                    <img class="wx-icon" src="http://static.qiezipai.cn/wechat/photoplus/img/common/wx.png" alt="">\
                    <div class="qrcode-box">\
                      <img src="http://static.qiezipai.cn/wechat/photoplus/img/common/ewm.jpeg" alt="">\
                    </div>\
                </a>\
                <a href="https://weibo.com/u/6487110210?topnav=1&wvr=6&topsug=1">\
                    <img class="wb-icon" src="http://static.qiezipai.cn/wechat/photoplus/img/common/wb.png" alt="">\
                </a>\
            </li>\
        </ul>\
    </li>\
</ul>\
<p class="di">\
    <span>\
        <small>copyright © 2015-2018 photoplus</small>\
        <small>京备号：8416237657</small>\
    </span>\
    <span>承影互联(北京)科技有限公司</span>\
</p>';
    $('footer').append(str);
    $('.box_ul').on('click', '.parentLi>p', function() {
      var $this = $(this);
      $this.next().slideToggle(200);
      $this.find('i').toggleClass('active');
    })

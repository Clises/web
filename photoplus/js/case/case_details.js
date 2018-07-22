(function($) {
    win_width = $(window).width();
    $(window).resize(function() {
      var win_width = $(window).width();
        $('.details-qr').css('left', (win_width-750)/2 + 755)
    }), $('.details-qr').css('left', (win_width-750)/2 + 755);
    //gd
    $(window).scroll(function() {
        //scrollTop距离顶部距离
        var scrollTop = $(document).scrollTop();
        var eletop=$('.case-show').outerHeight();
        if (scrollTop >eletop) {
            $(".details-qr").css({"top":eletop+100,"position":"absolute"});
        }else {
            $(".details-qr").css({"top":"100px","position":"fixed"});
        }
    });
    //qr
    var url = $('.qr').attr('data-url');
    $('.qr').qrcode({
        render: "canvas",
        width: 112,
        height: 112,
        text: url,
        src: '',  //中间logo
    });
})(jQuery);

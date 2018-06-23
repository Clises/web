(function($) {
    $(window).scroll(function() {
        var scrollTop = $(document).scrollTop();
        var eletop=$('.case-show').outerHeight()-70;
        if (scrollTop > eletop) {
            $(".details-qr").css({"top":eletop+100,"position":"absolute"});
        }else {
            $(".details-qr").css({"top":"100px","position":"fixed"});
        }
    });
    $(window).resize(function() {
        var win_width = $(window).width();
        $('.details-qr').css('left', (win_width-750)/2 + 755);
    })
    var url = $('.qr').attr('data-url');
    $('.qr').qrcode({
        render: "canvas",
        width: 112,
        height: 112,
        text: url,
        src: '',  //中间logo

    });
})(jQuery)

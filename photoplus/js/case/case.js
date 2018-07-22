$(init)
eleStatus = {    //nav滚动条滚动距离
    srollnow: 0,
    offsetLeft: 0
}
function init() {
    $('.drop-down-content .list').append($('.case-classify li').clone(true))
    $('.case-classify').on('click', 'li', classify)
    $('.open').on('click', allOpen)
    $('.list').on('click', 'li', allList)
    $('.close,.mask').on('click', allClose)
}
/*分类*/
function classify() {
    var $this = $(this), $index = $this.index();
    $(".case-classify li").removeClass("active").eq($index).addClass("active");
    $('.list').find('li').removeClass("active").eq($index).addClass("active");
    panel($index)
    eleStatus.srollnow = $('.case-classify')[0].scrollLeft;
    eleStatus.offsetLeft = $(this).offset().left;
    if (eleStatus.offsetLeft > 220) {
        $('.case-classify').animate({'scrollLeft': eleStatus.srollnow + 90}, 1000);
    }
}
/*全部分类*/
function allList() {
    $('html,body').removeClass('ovfHiden');
    var $this = $(this), $index = $this.index();
    $(".list li").removeClass("active").eq($index).addClass("active")
    $('.case-classify').find('li').removeClass("active").eq($index).addClass("active");
    panel($index)
    $('.drop-down-content').css({'height': '0'})
    $('.mask').css({'display': 'none'})
    $('.open').css({'display': 'block'})
    eleStatus.offsetLeft = $('.case-classify').find('li').eq($index).get(0).offsetLeft;
    if ($('.case-classify').find('li').eq($index).hasClass('active')) {
        $('.case-classify')[0].scrollLeft = eleStatus.offsetLeft - 20;
    }
}
function allOpen() {
    $('.mask,.drop-down-content').bind("touchmove", function (e) {
        e.preventDefault();
    });
    $('html,body').addClass('ovfHiden');
    $(this).css({'display': 'none'})
    $('.mask').css({'display': 'block'})
    $('.drop-down-content').css({'height': '3rem', 'top': '0'})
}

function allClose() {
    $('html,body').removeClass('ovfHiden');
    $('.open').css({'display': 'block'})
    $('.mask').css({'display': 'none'})
    $('.drop-down-content').css({'height': '0'})
}
$(".m-style a").attr("href",function(){
    return location.pathname+$(this).attr("href");
})

function panel(index) {
    $('.all,.case-item ').addClass('none');
    switch (index) {
        case 1:
            $('.dxfbh').removeClass('none');
            break;
        case 2:
            $('.hylt').removeClass('none');
            break;
        case 3:
            $('.qdnh').removeClass('none');
            break;
        case 4:
            $('.jzkt').removeClass('none');
            break;
        case 5:
            $('.jmlz').removeClass('none');
            break;
        case 6:
            $('.zlzx').removeClass('none');
            break;
        case 7:
            $('.tjlx').removeClass('none');
            break;
        case 8:
            $('.hlgp').removeClass('none');
            break;
        case 9:
            $('.wyyc').removeClass('none');
            break;
        case 10:
            $('.slpt').removeClass('none');
            break;
        case 11:
            $('.tyss').removeClass('none');
            break;

        default:
            $('.all').removeClass('none');
    }

}


$(init)
eleRoling = {    //nav滚动条滚动距离
    offsetLeft: 0
}
function init() {
    $('.drop-down-content .list').append($('.case-classify li').clone(true))
    $('.case-classify').on('click', 'li', classify);
    $('.list').on('click', 'li', allList);
    $('.all_open,.mask,.list li').on('click', _toggle);
}
/*分类*/
function classify() {
    var $this = $(this), $index = $this.index();
    $('.case-classify').find('li').removeClass("active").eq($index).addClass("active");
    $('.list').find('li').removeClass("active").eq($index).addClass("active");
    eleRoling.offsetLeft = $(this).offset().left;
    var rolingNow=$('.case-classify')[0].scrollLeft;
    var maxWith=$('.case-classify li').width()*3;
    var rollingWith=$('.case-classify').width()/2;
    if (eleRoling.offsetLeft >maxWith) {
        $('.case-classify').animate({'scrollLeft': rolingNow +rollingWith}, 500);
    }
}
/*H5全部分类*/
function allList() {
    var $this = $(this), $index = $this.index();
    $('.list').find('li').removeClass("active").eq($index).addClass("active");
    $('.case-classify').find('li').removeClass("active").eq($index).addClass("active");
    var rollingWith=$('.case-classify').width()/3;
    eleRoling.offsetLeft = $('.case-classify').find('li').eq($index).get(0).offsetLeft;
    if ($('.case-classify').find('li').eq($index).hasClass('active')) {
        $('.case-classify')[0].scrollLeft = eleRoling.offsetLeft-rollingWith;
    }
}
function _toggle() {
    $('html,body').toggleClass('ovfHiden');
    $('.all_open').children('a').toggleClass('arrow-up')
    $('.drop-down-content').toggleClass('drop-down--down');
    $('.mask').toggleClass('block');
}
$(".m-style a").attr("href",function(){
    return location.pathname+$(this).attr("href");
})
// function panel(index) {
//     $('.all,.case-item ').addClass('none');
//     switch (index) {
//         case 1:
//             $('.dxfbh').removeClass('none');
//             break;
//         case 2:
//             $('.hylt').removeClass('none');
//             break;
//         case 3:
//             $('.qdnh').removeClass('none');
//             break;
//         case 4:
//             $('.jzkt').removeClass('none');
//             break;
//         case 5:
//             $('.jmlz').removeClass('none');
//             break;
//         case 6:
//             $('.zlzx').removeClass('none');
//             break;
//         case 7:
//             $('.tjlx').removeClass('none');
//             break;
//         case 8:
//             $('.hlgp').removeClass('none');
//             break;
//         case 9:
//             $('.wyyc').removeClass('none');
//             break;
//         case 10:
//             $('.slpt').removeClass('none');
//             break;
//         case 11:
//             $('.tyss').removeClass('none');
//             break;
//
//         default:
//             $('.all').removeClass('none');
//     }
//
// }


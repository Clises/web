$(init)
function init() {
    $('.drop-down-content .list').append($('.case-classify li').clone(true))
    $('.case-classify').on('click', 'li', classify);
    $('.list').on('click', 'li', allList);
    $('.all_open,.mask,.list li').on('click', __toggle);
    /*分页处理*/
    $('.pagination').pagination({
        pageCount: 50,
        jump: true,
        coping: true,
        prevContent: '上一页',
        nextContent: '下一页',
        callback: function () {
            window.open('http://www.jq22.com/jquery-info5697')
        }
    });
}
/*分类*/
function classify() {
    var $this = $(this), $index = $this.index();
    $('.case-classify').find('li').removeClass("active").eq($index).addClass("active");
    $('.list').find('li').removeClass("active").eq($index).addClass("active");
    var offsetLeft = $(this).offset().left;
    var rolingNow = $('.case-classify')[0].scrollLeft;
    var maxWith = $('.case-classify li').width() * 3;
    var rollingWith = $('.case-classify').width() / 2;
    if (offsetLeft > maxWith) {
        $('.case-classify').animate({'scrollLeft': rolingNow + rollingWith}, 500);
    }
}
/*h5全部分类*/
function allList() {
    var $this = $(this), $index = $this.index();
    $('.list').find('li').removeClass("active").eq($index).addClass("active");
    $('.case-classify').find('li').removeClass("active").eq($index).addClass("active");
    var rollingWith = $('.case-classify').width() / 3;
    var offsetLeft = $('.case-classify').find('li').eq($index).get(0).offsetLeft;
    if ($('.case-classify').find('li').eq($index).hasClass('active')) {
        $('.case-classify')[0].scrollLeft = offsetLeft - rollingWith;
    }
}
//一些显示和隐藏
function __toggle() {
    $('html,body').toggleClass('ovfHiden');
    $('.all_open').children('a').toggleClass('arrow-up')
    $('.drop-down-content').toggleClass('drop-down--down');
    $('.mask').toggleClass('block');
}
//上拉加载
function pullOnLoading() {
    $(document).scroll(function () {
        var dh = $(document).height();
        var sh = $(window).height();
        var wh = $(window).width()
        var top = $(document).scrollTop()
        if (wh <= 768 && dh - sh - top < 50) {
            //数据加载
        }
    })
}

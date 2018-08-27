$(init)
eleRoling = {    //nav滚动条滚动距离
    offsetLeft: 0
}

function init() {
    $('.drop-down-content .list').append($('.case-classify li').clone(true))
    $('.case-classify').on('click', 'li', classify);
    $('.list').on('click', 'li', allList);
    $('.all_open,.mask,.list li').on('click', _toggle);
    pullOnLoading()
    var aa = $('.ps-style').children().length;
    for (var i = 1; i < aa; i++) {
        showPages(i, aa, 2)
        console.log(showPages(i, aa, 2))
    }
}

/*分类*/
function classify() {
    var $this = $(this), $index = $this.index();
    $('.case-classify').find('li').removeClass("active").eq($index).addClass("active");
    $('.list').find('li').removeClass("active").eq($index).addClass("active");
    eleRoling.offsetLeft = $(this).offset().left;
    var rolingNow = $('.case-classify')[0].scrollLeft;
    var maxWith = $('.case-classify li').width() * 3;
    var rollingWith = $('.case-classify').width() / 2;
    if (eleRoling.offsetLeft > maxWith) {
        $('.case-classify').animate({'scrollLeft': rolingNow + rollingWith}, 500);
    }
}

/*H5全部分类*/
function allList() {
    var $this = $(this), $index = $this.index();
    $('.list').find('li').removeClass("active").eq($index).addClass("active");
    $('.case-classify').find('li').removeClass("active").eq($index).addClass("active");
    var rollingWith = $('.case-classify').width() / 3;
    eleRoling.offsetLeft = $('.case-classify').find('li').eq($index).get(0).offsetLeft;
    if ($('.case-classify').find('li').eq($index).hasClass('active')) {
        $('.case-classify')[0].scrollLeft = eleRoling.offsetLeft - rollingWith;
    }
}

function _toggle() {
    $('html,body').toggleClass('ovfHiden');
    $('.all_open').children('a').toggleClass('arrow-up')
    $('.drop-down-content').toggleClass('drop-down--down');
    $('.mask').toggleClass('block');
}

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


/*
page 当前页码
total 总页码数
show 当前页面后展示的页码数
*/


function showPages(page, total, show) {
    var str = page + '';
    for (var i = 1; i <= show; i++) {
        if (page - i > 1) {
            str = page - i + ' ' + str;
        }
        if (page + i < total) {
            str = str + ' ' + (page + i);
        }
    }
    if (page - (show + 1) > 1) {
        str = '... ' + str;
    }
    if (page > 1) {
        str = 1 + ' ' + str;
    }
    if (page + show + 1 < total) {
        str = str + ' ...';
    }
    if (page < total) {
        str = str + ' ' + total;
    }
    return str;
}

/*
$(".m-style a").attr("href", function () {
    return location.pathname + $(this).attr("href");
})
*/

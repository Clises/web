var words = {
    lans: [
        {"cn": "首页", "en": "index"},
        {"cn": "问题", "en": "question"}
    ]
};
var checkELement = ['.nav'];

init()

function init() {
    $('.menu').on('click', function () {
        $('nav').toggleClass('nav--pullDown')
    });
    $('.nav').on('click', 'li', skip);

    $('.switch--languages').on('click', function () {
        $('.changeLan').toggleClass('changeLan--pullDown')
    })

    $('.changeLan').on('click', 'li', changeLanguages);
}

function changeLanguages() {
    var $this = $(this), index = $this.index();
    $('.language').html($this.text());
    $this.addClass('active').siblings().removeClass('active')
    var lan = index ? 'en' : 'cn';
    for (var i = 0, len = checkELement.length; i < len; i++) {
        interprete(checkELement[i], lan);
    }
}

function interprete(ele, lan) {
    var eleString = $(ele).html() || '';
    var lans = words.lans;
    switch (lan) {
        case 'cn':
            for (var i = 0, len = lans.length; i < len; i++) {
                var data_cn = lans[i].cn, data_en = lans[i].en;
                eleString = eleString.replace(data_en, data_cn);
            }
            break;
        case 'en':
            for (var i = 0, len = lans.length; i < len; i++) {
                var data_cn = lans[i].cn, data_en = lans[i].en;
                eleString = eleString.replace(data_cn, data_en);
            }
            break;
    }
    $(ele).html(eleString);
}
function skip() {
    $('nav').toggleClass('nav--pullDown')
    var $this = $(this), index = $this.index();
    var headHeight=$('header').outerHeight();
    switch(index) {
        case 0:
            $('html, body').stop().animate({scrollTop:$(".image-top").offset().top},500);
        break;
        case 1:
            console.log($(".timeLine").offset().top)
            $('html, body').stop().animate({scrollTop:$(".industryPain").offset().top-headHeight},500);
            break;
    }
}

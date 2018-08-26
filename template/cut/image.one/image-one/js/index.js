var words = {
    lans: [
        {"cn": "首页", "en": "index"},
        {"cn": "问题", "en": "question"},
        {"cn": "技术", "en": "Technology"},
        {"cn": "白皮书", "en": "White Pape"},
        {"cn": "团队", "en": "Team"},
        {"cn": "联系我们", "en": "Contact Us"},
    ]
};
var checkELement = ['.nav'];
//判断系统语言
var LANGUAGE = navigator.language.indexOf('CN') > -1;
init()
function init() {

    tets()
    $('.menu').on('click', function () {
        $('nav').toggleClass('nav--pullDown')
    });
    $('.nav').on('click', 'li', skip);
    $('.switch--languages').on('click', function () {
        $('.changeLan').toggleClass('changeLan--pullDown')
    });
    $('.changeLan').on('click', 'li', changeLanguages);
}
function tets() {
    if (LANGUAGE)
    {
        $('.changeLan').children('.languages .cn').addClass('active')

    }

    var lan = localStorage.getItem('language');
    switch (lan) {
        case 'en':
            $('.language').html('EN');
            $('.changeLan').children('.en').toggleClass('active')

            break;
        case 'cn':
            $('.language').html('中文');
            $('.changeLan').children('.cn').toggleClass('active')
            break;
    }
    for (var i = 0, len = checkELement.length; i < len; i++) {
        interprete(checkELement[i], lan);
    }
}
function changeLanguages() {
    var $this = $(this), index = $this.index();
    $('.language').html($this.text());
    $this.addClass('active').siblings().removeClass('active')
    var lan = index ? 'en' : 'cn';
    window.localStorage.setItem('language', lan);
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
    var headHeight = $('header').outerHeight();
    switch (index) {
        case 0:
            $('html, body').stop().animate({scrollTop: $(".image-top").offset().top}, 500);
            break;
        case 1:
            $('html, body').stop().animate({scrollTop: $(".industryPain").offset().top - headHeight}, 500);
            break;
        case 2:
            $('html, body').stop().animate({scrollTop: $(".teachnology").offset().top - headHeight}, 500);
            break;
        case 3:
            $('html, body').stop().animate({scrollTop: $(".white-paper").offset().top - headHeight}, 500);
            break;
        case 4:
            $('html, body').stop().animate({scrollTop: $(".team").offset().top - headHeight}, 500);
            break;
        case 5:
            $('html, body').stop().animate({scrollTop: $("footer").offset().top - headHeight}, 500);
            break;
    }
}

// $(function () {
//     var iamgeOne = {
//         init: function () {
//             this.navPullDown()
//             this.skip()
//             this.lanPullDown()
//         },
//         navPullDown: function (){
//             $('.menu').on('click', function () {
//                 $('nav').toggleClass('nav--pullDown')
//             });
//         },
//         skip: function () {
//             $('.nav').on('click', 'li', function () {
//                 $('nav').toggleClass('nav--pullDown')
//                 var $this = $(this), index = $this.index();
//                 var headHeight = $('header').outerHeight() + 50;
//                 switch (index) {
//                     case 0:
//                         $('html, body').stop().animate({scrollTop: $(".image-top").offset().top}, 500);
//                         break;
//                     case 1:
//                         $('html, body').stop().animate({scrollTop: $(".industryPain").offset().top - headHeight}, 500);
//                         break;
//                     case 2:
//                         $('html, body').stop().animate({scrollTop: $(".teachnology").offset().top - headHeight}, 500);
//                         break;
//                     case 3:
//                         $('html, body').stop().animate({scrollTop: $(".white-paper").offset().top - headHeight}, 500);
//                         break;
//                     case 4:
//                         $('html, body').stop().animate({scrollTop: $(".team").offset().top - headHeight}, 500);
//                         break;
//                     case 5:
//                         $('html, body').stop().animate({scrollTop: $("footer").offset().top - headHeight}, 500);
//                         break;
//                 }
//             });
//         },
//         lanPullDown: function () {
//             $('.switch--languages').on('click', function () {
//                 $('.changeLan').toggleClass('changeLan--pullDown')
//             });
//         }
//
//     }
//     iamgeOne.init()
//
// })

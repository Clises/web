var words={
    lans:[
        {"cn":"首页","en":"index"},
        {"cn":"问题","en":"question"}
    ]
};
var checkELement = ['.nav'];

$(langInit)
function langInit()
{
    $('.menu').on('click',function () {
        $('nav').toggleClass('nav--pullDown')

    });

    $('.switch--languages').on('click',function () {
        $('.changeLan').toggleClass('changeLan--pullDown')
    })
    $('.changeLan').on('click','li',changeLanguages);
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

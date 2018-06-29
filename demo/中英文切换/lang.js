var words = {
    lans: [
        {"cn": "123", "en": "Go"},
        {"cn":"设置精彩图","en":"To"},
        {"cn":"哈哈哈","en":"haha"}
    ]
}
var checkELement = ['.guest'];
$(langInit)
function langInit() {
    $('.checklang').on('click','span',changeLang);
}
function changeLang() {
    var $this = $(this), index = $this.index();
    //active
    // if ($this.hasClass('active'));
    // $('.checklang').find('span').removeClass('active');
    // $this.addClass('active');
    var lan = index ? 'en' : 'cn';
    for (var i = 0, len = checkELement.length; i < len; i++) {
        interprete(checkELement[i], lan);
    }
}
function interprete(ele, lan) {
    var eleString = $(ele).html() || '';
    console.log(typeof eleString)
    console.log(eleString)
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

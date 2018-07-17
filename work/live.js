var isLoading = false, //正在加载
    isOver = false, //是否结束直播
    picShowSwiper = null, // 大图预览实例
    player = null, // 视频播放实例
    contentSort = 0, // 图片直播、图文、热门
    picLikeArr = [], // 所有自己点过赞的图片hash数组
    bigTagArr = [], // 1-10排名的hash数组

    all = {leftHeight: 0, rightHeight: 0, step: 30, theLast: 0, theNew: 0, fixLocation: [], preloadImg: [], swiperArr: [], total: 0, cur: 0}, //默认全部 对象
    hot = {fixLocation: [], preloadImg:[], swiperArr:[], isHot: false, total: 0, cur: 0}, // 热门 对象
    imgText = {fixLocation: [], preloadImg: [], swiperArr: [], count: 0, step: 50, add: 0, data: [], total: 0, cur: 0}, // 图文对象  bol: 是否切换到在图文 has: 是否有图文
    timeLine = {fixLocation: [], preloadImg: [], swiperArr: [], count: 0, step: 3, add: 0, data: [], theme: 1, total: 0, cur: 0}, // 时间线对象 ,theme: 区分黑白版本
    discuss = {from: 0, size: 10, sortType: 2, end: false},
    albumObj = {arr: [], hasAlbum: false}

visibleContainer = '.pic-container__waterfall'; // 方便筛选当前排列方式下的picItem

vhall = { // 微吼
    scrollTop: 0,
    url: ''
}

timer = {
    all: null,
    album: null // 只检测所在的相册
}

findmeObj = {
    guide: true, // 引导
    example: null // 实例
}

puzzledObj = {
    count: 0,
    status: false
}

scrollEle = '.all', //滚动哪个区块
    scrollObj = all, //滚动哪个区块的对象

    eleStatus = { // 一些元素的高度或卷入高度
        navST: 0,
        navH: 0,
    }

clickGuide = GUIDE === 'false' ? true : false,
    clickStart = false,
    clickPass = false;

// 初始化
$(init);
$(eventInit);

// 初始化
function init() {
    // ***********
    $('.puzzled-result-content').append('<div id="qrcode"></div>');
    // ***********
    // 是否有活动名称
    if (DETAIL.name) {
        $('.detail-title h1').html(DETAIL.name);
    }
    // 活动时间显示
    if (DETAIL.start_date) {
        modifyMainview(DETAIL.start_date);
        if (DETAIL.start_date === DETAIL.end_date) {
            $('#activityTime, #mes-time').html(DETAIL.start_date + '&nbsp;&nbsp;&nbsp;' + DETAIL.start_time + '~' + DETAIL.end_time );
        } else {
            $('#activityTime, #mes-time').html(DETAIL.start_date + ' ' + DETAIL.start_time + ' ~ ' + DETAIL.end_date + ' ' + DETAIL.end_time );
        }
    } else {
        $('#activityTime, #mes-time').parent().addClass('none');
    }

    // 地点
    if (DETAIL.place) {
        $('#activityPlace, #mes-place').html(DETAIL.place);
    } else {
        $('#activityPlace, #mes-place').parent().addClass('none');
    }
    // 简介
    if (DETAIL.description) {
        $('#activityIntro, #mes-intro').html(DETAIL.description);
    } else {
        $('#activityIntro, #mes-intro').parent().addClass('none');
    }

    // 活动状态状态
    var status_;
    if (DETAIL.status > 5) {
        $('.pic-wait').addClass('none');
        getAllPics('.all', all);
    } else {
        $('.pic-wait').removeClass('none');
    }
    if (DETAIL.status == 5) {
        status_ = '人正在等待收看此次图片直播';
        $('.pic-nomore, .count-wrapper').remove();
    } else if (DETAIL.status == 10) {
        status_ = '人正在收看此次图片直播';
    } else {
        status_ = '人已收看此次图片直播';
    }
    $('#lookStatus').html(status_);
    $('#lookNum').html(DETAIL.view_count);

    // 预加载图片数组
    var preloadImg = [
        'http://static.qiezipai.cn/wechat/liveplus/image/loading-bg.png'
    ];
    // 是否有启动屏
    if (DETAIL.back_img) {
        preloadImg.push(DETAIL.back_img);
    }
    // 是否有头图
    if (DETAIL.head_img) {
        $('#bannerImg').attr('src', DETAIL.head_img);
        preloadImg.push(DETAIL.head_img);
    } else {
        $('#bannerImg').remove();
        $('.banner').addClass('noimg').html(DETAIL.name);
    }

    // 头图是否有跳转链接
    if (DETAIL.url) {
        $('.banner-link').attr('href', DETAIL.url);
        $('.banner-tip').removeClass('none');
    }
    // 其他信息
    var contractor_  = DETAIL.contractor ? JSON.parse(DETAIL.contractor) : [];
    if (contractor_) {
        for (var i = 0, len = contractor_.length - 1; i < len; i++) {
            var contractor_one = contractor_[i];
            var dom_ = '\
      <div class="mes-one row-start-start">\
        <span>'+ contractor_one.title +'</span>\
        <p id="mes-intro">'+ contractor_one.content +'</p>\
      </div>\
      ';
            $('#mesModal .mes-content').append(dom_);
        }
    }
    // 信息显示或隐藏
    var contractor_last = contractor_.slice(-1)[0];
    contractor_last = contractor_last ? contractor_last : {};
    switch (contractor_last.type) {
        case 'show':
            $('.detail-content').removeClass('none');
            $('.icon-detail').addClass('none');
            break;
        case 'none':
            $('.icon-detail, .detail-content').addClass('none');
            break;
        default:
            $('.detail-content').addClass('none');
            $('.icon-detail').removeClass('none');
    }

    // 自定义页面信息
    var is_sell = DETAIL.is_sell;
    if ((is_sell & 1) <= 0) {
        // $('.ad-service, .homeLink').removeClass('none');
    }
    if ((is_sell & 256) <= 0) {
        $('.try').removeClass('none');
    }
    if ((is_sell & 2) <= 0) {
        $('.ad-photoplus').removeClass('none');
    }

    if ((is_sell & 2048) > 0) {
        var company_des = DETAIL.company_des;
        if (company_des.ad_type == 0) {
            $('#order').remove();
        } else {
            $('#try').remove();
            if (company_des.ad_title) {
                $('.camer-name').parent().html(company_des.ad_title);
            } else {
                $('.camer-name').parent().html('预约拍摄');
            }
            if (company_des.ad_type == 1) {
                $('.order-wrapper__form').remove();
                $('.order-wrapper__img').append('<img src="'+ company_des.ad_pic +'">').removeClass('none');
            }
            if (company_des.ad_type == 2) {
                company_des.ad_phone ? $('#camerPhone').html(company_des.ad_phone) : $('.camerPhone').remove();
            }
        }
    } else {
        $('.order, .order-wrapper').remove();
    }

    if ((is_sell & 4) > 0) {
        $('.logo').addClass('none');
    }
    if ((is_sell & 8) > 0) {
        document.title = DETAIL.name;
    }
    if ((is_sell & 1024) > 0) {
        document.title = DETAIL.definition_title;
    }
    if ((is_sell & 16) <= 0) {
        $('#me').remove();
    }
    if ((is_sell & 32) <= 0) {
        $('#find').remove();
    }
    if ((is_sell & 64) <= 0) {
        $('#hot, .like-box').addClass('none');
    }
    if ((is_sell & 128) <= 0) {
        $('#timeline').addClass('none');
    }
    if ((is_sell & 512) <= 0) {
        $('#textImg').addClass('none');
    }
    if ((is_sell & 65536) <= 0) {
        $('#discuss').addClass('none');
    }
    // 有试用或预约时 评论框样式变化
    if ((is_sell & 2048) > 0 || (is_sell & 256) <= 0) {
        $('.discuss-wrapper').addClass('bottom88');
    }

    // 大图是否显示摄影师
    if ((is_sell & 4096) <= 0) {
        $('#camer').parent().remove();
    }
    // 大图是否显示修图师
    if ((is_sell & 8192) <= 0) {
        $('#pser').parent().remove();
    }
    // 是否有打赏
    if ((is_sell & 262144) <= 0) {
        $('.reward-box').addClass('none');
    }

    // 是否有iframe
    if ((is_sell & 16384) > 0 && DETAIL.video_url) {
        $('.video-live').removeClass('none');
        $('.video-live').find('.video-box').append('<iframe id="iframeWH"></iframe>');
        vhall.url = DETAIL.video_url;
        $('#iframeWH').attr('src', vhall.url);
    }
    if (!(((is_sell & 16384) > 0 && DETAIL.video_url) || DETAIL.cc_room_id)) {
        $('.video-live').remove();
    }
    // 是否有cc视频
    if (DETAIL.cc_room_id) {
        $('head').append('<script src="http://view.csslcloud.net/js/liveSDK.js" type="text/javascript"></script><script src="http://view.csslcloud.net/js/playbackSDK.js" type="text/javascript"></script>');
        setTimeout(function() {
            $('.video-live').removeClass('none');
            ccLive(DETAIL.cc_room_id);
        }, 2000)
    }
    // 是否有视频播放
    if ((is_sell & 32768) > 0 && DETAIL.media_url) {
        $('.video-play').removeClass('none');
        // 初始化播放器高度
        DETAIL.media_url_rate = DETAIL.media_url_rate ? DETAIL.media_url_rate : 0.562;
        var playerHeight = $('#videoBox').width() * DETAIL.media_url_rate;
        $('#videoBox').css('height', playerHeight);

        // 七牛视频播放器
        var options = {
            controls: true,
            file: DETAIL.media_url,
            type: 'mp4',
            poster: '',
            preload: 'auto',
            autoplay: false
        };
        player = new QiniuPlayer('video-play', options);
    } else {
        $('.video-play').remove();
    }

    var preloadObj = {
        imgs: preloadImg,
        loaded: function() {
            $('.container').on('touchmove', touchModal);
            // 是否有密码
            var pravite = DETAIL.serial_code ? true : false;
            if (!pravite || (PASSWORD && PASSWORD == DETAIL.serial_code)) {
                $('.password-masking').remove();
                setView(DETAIL.back_img);
            }

            $('.masking').addClass('none');
            if (LANGUAGE) $('.checklang span').eq(1).trigger('click');
            // 第一次授权返回评论
            var firsGetInfo = GetSearchParam('wxStatus');
            if (firsGetInfo && firsGetInfo == 'getinfo') {
                $('#main-view-enter').trigger('click');
                $('#discuss').trigger('click');
            }
            eleStatus.navST = $('.banner').outerHeight() + $('.detail').outerHeight() + $('.guest').outerHeight() + $('.video-live').outerHeight() + $('.video-play').outerHeight();
        }
    }
    // 预加载启动屏和头图
    loadingFun(preloadObj);

    // 是否属于合辑页
    if (DETAIL.father_activity_no) {
        $('.advertisement').addClass('jh');
        getAllActivity();
    } else {
        $('.jh-button').remove();
    }

    findmeObj.example = new QiniuJsSDK(); // 初始化找自己

    getGuestList(); // 获得嘉宾列表信息
    getAlbum(); // 获得相册nav
    getLikes(); // 获得点赞的数组
    homeGuide(); //引导页 是否出现
    picTimer(); //定时刷新全部
    // addWhUrl(4);
}
// 事件初始化
function eventInit() {
    // 验证密码
    $('.password-masking').on('click', '#password-enter', praviteVerify);
    // 点击跳过主视觉
    $('.main-masking').on('click', '#main-view-enter', function() {
        removeMainMasking();
    })
    // 点击出现详情
    $('.detail').on('click', '.icon-detail', activityInfoAlert);
    // 点击主办方和嘉宾
    $('.guest').on('click', '.guest-item', activityGuestAlert);
    // 关闭弹层
    $('.container').on('click', '.close', activityCloseAlert);

    // 切换内容
    $('.nav').on('click', '.nav-1-content__item', switchContent);
    // 切换内容的分类
    $('.nav').on('click', '.nav-1-sort__item', switchSort);
    // 选择分类
    $('.nav').on('click', '.sort-item__list li', chooseSort);
    // 切换全部内的相册
    $('.nav').on('click', '.nav-2__item', switchAlbumTab);
    // 点击图片 展示大图
    $('.photo').on('click', '.picItem', bigPicShow);
    // 关闭大图预览
    $('.swiper-masking').on('click', '.modalClose', closeBigPicShow);
    // 找自己
    $('.pos-box').on('click', '.findMe', findMeFloat);
    $('.find-container').on('click', '.find-button', findMeGuide);
    // 聚合页
    $('.container').on('click', '.jh-button', gatherEntry);
    // 点赞
    $('.swiper-masking').on('click', '.like-box', clickLikes);
    // 单张分享按钮
    $('.swiper-masking').on('click', '.singleShare-box', {bol: true}, singleShare);
    $('.container').on('click', '#share', {bol: false}, singleShare);
    // 请求原图
    $('.swiper-masking').on('click', '.originPic-box', requestOriPic);
    // 时间线 收缩
    $('.timeLine').on('click', '.timeLine-title', shrinkTimeLine);
    // 添加评论
    $('.container').on('click', '#discussButton', discussAdd);
    $('.photo').on('click', '.discuss-item__likeicon', discussLike);
    $('.container').on('focus', '#discussValue', wxGetInfo)
    // 滚动行为
    $document.on('scroll', throttle(scrollAction, 200, 200));
    $document.on('click', closeSlide);
    // 视频播放
    // $('.video-play').on('click', '#videoBox', function() {
    //   player.play();
    // })
}

function activityInfoAlert() {
    // 切换时关闭拼图模式
    $('.puzzle-cancel').trigger('click');
    $('video').addClass('none');
    $('#mesModal').fadeIn();

    whModify();
}
function activityGuestAlert(event) {
    var $this = $(this), a = $this.hasClass('guest-item--small');
    var type = a ? 1 : 2;
    var qrcode = $this.attr('data-qr');
    var link = $this.attr('data-link');

    $('.puzzle-cancel').trigger('click');
    $('video').addClass('none');

    whModify();

    if (type === 2) {
        $('#holderModal').fadeIn();
        $('.sponsor-img').attr('src', $this.attr('data-logo'));
        $('.sponsor-name').html($this.attr('data-name'));
        $('.sponsor-describe').html($this.attr('data-describe'));
        $('.sponsor-link').attr('href', link);
        $('.sponsor-qrcode').find('img').attr('src', qrcode);
        removeEle(qrcode, '.sponsor-qrcode');
        removeEle(link, '.sponsor-link');
    } else {
        $('#guestModal').fadeIn();
        $('.guest-img').attr('src', $this.attr('data-logo'));
        $('.guest-name').html($this.attr('data-name'));
        $('.guest-describe').html($this.attr('data-describe'));
        $('.guest-link').attr('href', link);
        $('.guest-qrcode').find('img').attr('src', qrcode);
        removeEle(qrcode, '.guest-qrcode');
        removeEle(link, '.guest-link');
    }
}
function activityCloseAlert() {
    $('#holderModal, #guestModal, #mesModal, .find-container, #guideModal').fadeOut();
    $('video').removeClass('none');
    $('body').css('position', 'relative');
}
// 切换内容
function switchContent() {
    setTimeout(function() {eleStatus.navH = $('.nav').outerHeight();}, 500);
    toTop();

    var $this = $(this), $index = $this.index();

    $('.nav-1-content__item').removeClass('active');
    $this.addClass('active');

    $('.nav-1-sort__item, .block, .discuss-wrapper').addClass('none');
    $('.advertisement, .pos-box, .count-wrapper, .jh-button, .pic-wait').removeClass('none');

    if ($index !== 0) {
        $('.nav-2').slideUp(200);
        visibleContainer = '.pic-container'
    }

    hot.isHot = false;

    switch ($index) {
        case 1:
            $('.imgText').removeClass('none');
            scrollEle = '.imgText';
            scrollObj = imgText;
            scrollObj.cur = 0;
            getImageTextPics();
            break;
        case 2:
            $('.timeLine').removeClass('none');
            scrollEle = '.timeLine';
            scrollObj = timeLine;
            scrollObj.cur = 0;
            getTimelinePics();
            break;
        case 3:
            $('.hot').removeClass('none');
            scrollEle = '.hot';
            scrollObj = hot;
            scrollObj.cur = 0;
            hot.isHot = true; //用于热门图片点开大图 有个排名的标识
            getHotPics();
            break;
        case 4:
            $('.advertisement, .pos-box, .count-wrapper, .jh-button, .pic-wait').addClass('none');
            $('.discuss, .discuss-wrapper').removeClass('none');
            $('.discuss').find('.pic-no').removeClass('none');
            scrollEle = '.discuss';
            scrollObj = discuss;
            $('#discuss-select').removeClass('none');
            $('.pic-loading__top').removeClass('hide');
            $('.discuss .pic-container').css('height', winH).html('');
            discuss.from = 0;
            discuss.end = false;
            getDiscuss();
            break;
        default:
            scrollEle = '.all';
            scrollObj = all;
            visibleContainer = $('.pic-container__waterfall').hasClass('none') ? '.pic-container__tiled' : '.pic-container__waterfall';
            $('#all-select').removeClass('none');
            if (!$('.nav-2').hasClass('none')) $('.nav-2').slideDown(200);
            $('.all').removeClass('none');
            $('.nav-2__item').eq(0).trigger('click');
    }
}
// 切换分类
function switchSort(e) {
    e.stopPropagation();
    var $this = $(this), $index = $this.index();
    contentSort = $index;
    $this.find('ul').slideToggle(200);
}
// 选择分类
function chooseSort(e) {
    e.stopPropagation();
    var $this = $(this), $index = $this.index(), $val = $this.html();
    $this.parent().slideUp(200);
    $this.parents('.nav-1-sort__item').find('.nav-sort__cur').html($val);
    switch (contentSort) {
        case 1:
            switchDiscussSort($index);
            break;
        default:
            switchPicDisplay($index);
    }
}
// 切换相册tab
function switchAlbumTab() {
    var $this = $(this), $index = $this.index();
    var albumId = $this.attr('data-id'); //相册的id
    var newTip = !$this.find('i').hasClass('none'); // 新图的提示
    hot.isHot = false;

    // 切换时关闭拼图模式
    $('.puzzle-cancel').trigger('click');

    // 清除红点
    $this.find('i').addClass('none');

    // 切换nav的样式
    $('.nav-2__item').removeClass('active');
    $this.addClass('active');

    // 滚动至顶部
    toTop();

    $('.block').addClass('none');

    // 判断相册的显示状态
    if (albumId == 0) {
        $('.all').removeClass('none');
        scrollEle = '.all';
        scrollObj = all;
        if (newTip) {
            scrollObj.fixLocation = [];
            scrollObj.swiperArr = [];
            scrollObj.preloadImg = [];
            scrollObj.theNew = 0;
            scrollObj.step = 30;
            scrollObj.cur = 0;
            $(scrollEle).find('.waterfall-container__left, .waterfall-container__right, .pic-container__tiled').empty();
            $('#all').find('i').addClass('none');
            getAllPics(scrollEle, scrollObj);
        }

    } else {
        $('.album' + albumId).removeClass('none');
        scrollEle = '.album' + albumId;
        scrollObj = albumObj.arr[$index - 1];

        clearInterval(timer.album); //取消上一个定时器
        albumInterVal($this, scrollObj, albumId); // 开启相应相册对应的定时器
        $('#count-current').html('0');

        // // 相册图片首次加载
        // if (scrollObj && !scrollObj.albumNew) {
        //   getAlbumPics(scrollEle, scrollObj);
        //   scrollObj.albumNew = true;
        // }
        // 相册有新图进图
        if (newTip) {
            scrollObj.fixLocation = [];
            scrollObj.swiperArr = [];
            scrollObj.preloadImg = [];
            scrollObj.step = 30;
            scrollObj.cur = 0;
            $(scrollEle).find('.waterfall-container__left, .waterfall-container__right, .pic-container__tiled').empty();
            getAlbumPics(scrollEle, scrollObj);
        }
    }
    // 改变图片总数
    $('#count-total').html(scrollObj.total);
}
// 切换展示方式
function switchPicDisplay(index) {
    // 关闭拼图模式
    $('.puzzle-cancel').trigger('click');

    if (index === 0) {
        visibleContainer = '.pic-container__waterfall';
        $('.pic-container__tiled').addClass('none');
        $('.pic-container__waterfall').find('.waterfall-container__left, .waterfall-container__right').removeClass('none');
        $('.pic-container__waterfall').css('width', '100%');
    } else {
        visibleContainer = '.pic-container__tiled';
        $('.pic-container__waterfall').css('width', '0');
        $('.pic-container__waterfall').find('.waterfall-container__left, .waterfall-container__right').addClass('none');
        $('.pic-container__tiled').removeClass('none');
    }
    // 回到顶部
    toTop();
}
// 点开大图
function bigPicShow() {
    var $this = $(this);
    $('.container').on('touchmove', touchModal);
    // 付费模式下默认无大图，去支付
    if (!$this.attr('data-big')) {
        PAY.hash = $this.attr('data-hash');
        PAY.money = PAYMONEY;
        PAY.type = 1;
        var camerOrretoucher = $this.attr('data-camer') == '--' ? $this.attr('data-retoucher') : $this.attr('data-camer');
        $('.pay-avator').attr('src', $this.attr('data-avator'));
        $('.pay-camer').html(camerOrretoucher);
        $('#pay-money').html(PAYMONEY);
        $('#pay-wrapper').removeClass('none');
        return;
    }

    $('video').addClass('none');
    var getOri = $('#imgShowModal .swiper-slide-active img').attr('data-getOri');
    getOri === 'yes' ? $('#origin-picSize').addClass('none') : $('#origin-picSize').removeClass('none');

    var likeCount_ = $this.attr('data-likeCount'); //喜欢改图的数量
    var thisHash = $this.attr('data-hash'); //hash
    var thisSrc = $this.attr('data-src') || $this.attr('src');
    var showIndex = scrollObj.fixLocation.indexOf(thisSrc);
    var showNum = scrollObj.fixLocation.length;
    var add = showIndex, reduce = showIndex, oneOrTwo = 0, dom = '';
    var camer_ = $this.attr('data-camer') || '--';
    var retoucher_ = $this.attr('data-retoucher') || '--';
    var midsize_ = $this.attr('data-midSize');
    var orisize_ = $this.attr('data-oriSize');
    var time = $(this).attr('data-time');
    midsize_ = ((midsize_/(1024*1024)) >= 1) ? (midsize_/(1024*1024)).toFixed(1)+"MB" : parseInt(midsize_/1024)+"KB";
    orisize_ = ((orisize_/(1024*1024)) >= 1) ? (orisize_/(1024*1024)).toFixed(1)+"MB" : parseInt(orisize_/1024)+"KB";
    $('#camer').html(camer_);
    $('#pser').html(retoucher_);
    $('#picSize').html(midsize_);
    $('#origin-picSize').html(orisize_);
    $('#pub-time').html(time);
    $('#like-num').html(likeCount_);

    likeStatus(likeCount_);

    testLike(thisHash); // 自己是否点过赞

    dom = '\
  <div class="swiper-slide">\
  <div class="slide_zoom_container row-all-center" style="height: '+ winH +'px">\
  <img class="swiper-lazy big_img_slide" data-src="'+ scrollObj.swiperArr[showIndex].big_img +'" data-hash="'+ scrollObj.swiperArr[showIndex].pic_hash +'" data-midSize="'+ scrollObj.swiperArr[showIndex].middle_size +'" data-camer="'+ scrollObj.swiperArr[showIndex].camer +'" data-retoucher="'+ scrollObj.swiperArr[showIndex].retoucher +'"\
  data-time="'+ scrollObj.swiperArr[showIndex].create_time +'" data-ori="'+ scrollObj.swiperArr[showIndex].origin_img +'" data-oriSize="'+ scrollObj.swiperArr[showIndex].pic_size +'" data-likeCount="'+ scrollObj.swiperArr[showIndex].like_count +'" data-avator="'+ scrollObj.swiperArr[showIndex].camer_head +'" data-avator2="'+ scrollObj.swiperArr[showIndex].retoucher_head +'" onload=loadOnePic(this)>\
  </div>\
  </div>';
    $('.imgShowSwiper .swiper-wrapper').append(dom);
    picShowSwiper = new Swiper('.imgShowSwiper', {
        centeredSlides: true,
        preloadImages: false,
        lazyLoading: true,
        observer: true,
        keyboardControl : true,
        initialSlide: oneOrTwo,
        onInit: function() {
            var father = $('.imgShowSwiper');
            var thisBigImg = $('.imgShowSwiper .swiper-slide-active .big_img_slide');
            var hash_ = thisBigImg.attr('data-hash');
            // 查看记录hash
            picAjax('pic_view', hash_);
            // 长按记录hash
            thisBigImg.longPress(function(){picAjax('pic_down', hash_);});
            touchImg(thisBigImg, father); //下拉或上拉  关闭预览
            testBigTag(hash_); //大图是否有排名标签
        },
        onSlideChangeStart: function() {
            // $('.loading-box').addClass('none');

            var father = $('.imgShowSwiper');
            var thisBigImg = $('.imgShowSwiper .swiper-slide-active .big_img_slide');
            var hash_ = thisBigImg.attr('data-hash');
            var camer_ = $this.attr('data-camer') || '--';
            var retoucher_ = $this.attr('data-retoucher') || '--';
            var midsize_ = thisBigImg.attr('data-midSize');
            var orisize_ = thisBigImg.attr('data-oriSize');
            var time = $(this).attr('data-time');
            var getOri = $('#imgShowModal .swiper-slide-active img').attr('data-getOri');

            if(getOri == 'yes') {
                midsize_ = thisBigImg.attr('data-oriSize');
                $('#origin-picSize').addClass('none');
            } else {
                $('#origin-picSize').removeClass('none');
            }
            midsize_ = ((midsize_/(1024*1024)) >= 1) ? (midsize_/(1024*1024)).toFixed(1)+"MB" : parseInt(midsize_/1024)+"KB";
            orisize_ = ((orisize_/(1024*1024)) >= 1) ? (orisize_/(1024*1024)).toFixed(1)+"MB" : parseInt(orisize_/1024)+"KB";
            $('#picSize').html(midsize_);
            $('#origin-picSize').html(orisize_);
            $('#camer').html(camer_);
            $('#pser').html(retoucher_);
            $('#pub-time').html(time);
            testLike(hash_); // 自己是否点过赞

            picAjax("pic_view", hash_);
            thisBigImg.longPress(function(){picAjax("pic_down", hash_);});

            touchImg(thisBigImg, father); //下拉或上拉  关闭预览
            testBigTag(hash_); //大图是否有排名标签
            //利用hash去获得列表中likecount的数量 方法不好 暂用
            $(scrollEle).find('.picItem').each(function() {
                var $this_ = $(this);
                var thisHash = $this_.attr('data-hash');
                if(thisHash == hash_) {
                    var thisCount = $this_.attr('data-likeCount');
                    $('#like-num').html(thisCount);
                    likeStatus(thisCount);
                }
            })
        },
        onSlidePrevEnd: function(swiper) {
            reduce--;
            if(reduce >= 0) {
                var dom = '\
        <div class="swiper-slide">\
        <div class="slide_zoom_container row-all-center" style="height: '+ winH +'px">\
        <img class="swiper-lazy big_img_slide" data-src="'+ scrollObj.swiperArr[reduce].big_img +'" data-hash="'+ scrollObj.swiperArr[reduce].pic_hash +'" data-midSize="'+ scrollObj.swiperArr[reduce].middle_size +'" data-camer="'+ scrollObj.swiperArr[reduce].camer +'" data-retoucher="'+ scrollObj.swiperArr[reduce].retoucher +'"\
        data-time="'+ scrollObj.swiperArr[reduce].create_time +'" data-ori="'+ scrollObj.swiperArr[reduce].origin_img +'" data-oriSize="'+ scrollObj.swiperArr[reduce].pic_size +'" data-likeCount="'+ scrollObj.swiperArr[reduce].like_count +'" data-avator="'+ scrollObj.swiperArr[reduce].camer_head +'" data-avator2="'+ scrollObj.swiperArr[reduce].retoucher_head +'" onload=loadOnePic(this)>\
        </div>\
        </div>';
                picShowSwiper.prependSlide(dom);
                picShowSwiper.update(true);

            }
            var $this = $('.imgShowSwiper .swiper-slide-prev .slide_zoom_container');
            new RTP.PinchZoom($this, {});
        },
        onSlideNextStart: function() {
            add++;
            if(add < showNum) {
                var dom = '\
        <div class="swiper-slide">\
        <div class="slide_zoom_container row-all-center" style="height: '+ winH +'px">\
        <img class="swiper-lazy big_img_slide" data-src="'+ scrollObj.swiperArr[add].big_img +'" data-hash="'+ scrollObj.swiperArr[add].pic_hash +'" data-midSize="'+ scrollObj.swiperArr[add].middle_size +'" data-camer="'+ scrollObj.swiperArr[add].camer +'" data-retoucher="'+ scrollObj.swiperArr[add].retoucher +'"\
        data-time="'+ scrollObj.swiperArr[add].create_time +'" data-ori="'+ scrollObj.swiperArr[add].origin_img +'" data-oriSize="'+ scrollObj.swiperArr[add].pic_size +'" data-likeCount="'+ scrollObj.swiperArr[add].like_count +'" data-avator="'+ scrollObj.swiperArr[add].camer_head +'" data-avator2="'+ scrollObj.swiperArr[add].retoucher_head +'" onload=loadOnePic(this)>\
        </div>\
        </div>';
                picShowSwiper.appendSlide(dom);
                picShowSwiper.update(true);

            }
            var $this = $('.imgShowSwiper .swiper-slide-next .slide_zoom_container');
            new RTP.PinchZoom($this, {});
        }
    })
    // 付费模式下 大图不创建新的slide
    if (!ISPAY) {
        if (showIndex == 0 && showNum > 1) {
            add++;
            var dom = '\
      <div class="swiper-slide">\
      <div class="slide_zoom_container row-all-center" style="height: '+ winH +'px">\
      <img class="swiper-lazy big_img_slide" data-src="'+ scrollObj.swiperArr[add].big_img +'" data-hash="'+ scrollObj.swiperArr[add].pic_hash +'" data-midSize="'+ scrollObj.swiperArr[add].middle_size +'" data-camer="'+ scrollObj.swiperArr[add].camer +'" data-retoucher="'+ scrollObj.swiperArr[add].retoucher +'"\
      data-time="'+ scrollObj.swiperArr[add].create_time +'" data-ori="'+ scrollObj.swiperArr[add].origin_img +'" data-oriSize="'+ scrollObj.swiperArr[add].pic_size +'" data-likeCount="'+ scrollObj.swiperArr[add].like_count +'" data-avator="'+ scrollObj.swiperArr[add].camer_head +'" data-avator2="'+ scrollObj.swiperArr[add].retoucher_head +'" onload=loadOnePic(this)>\
      </div>\
      </div>';
            picShowSwiper.appendSlide(dom);
            picShowSwiper.update(true);
        } else if (showIndex == showNum - 1 && showNum > 1) {
            reduce--;
            var dom = '\
      <div class="swiper-slide">\
      <div class="slide_zoom_container row-all-center" style="height: '+ winH +'px">\
      <img class="swiper-lazy big_img_slide" data-src="'+ scrollObj.swiperArr[reduce].big_img +'" data-hash="'+ scrollObj.swiperArr[reduce].pic_hash +'" data-midSize="'+ scrollObj.swiperArr[reduce].middle_size +'" data-camer="'+ scrollObj.swiperArr[reduce].camer +'" data-retoucher="'+ scrollObj.swiperArr[reduce].retoucher +'"\
      data-time="'+ scrollObj.swiperArr[reduce].create_time +'" data-ori="'+ scrollObj.swiperArr[reduce].origin_img +'" data-oriSize="'+ scrollObj.swiperArr[reduce].pic_size +'" data-likeCount="'+ scrollObj.swiperArr[reduce].like_count +'" data-avator="'+ scrollObj.swiperArr[reduce].camer_head +'" data-avator2="'+ scrollObj.swiperArr[reduce].retoucher_head +'" onload=loadOnePic(this)>\
      </div>\
      </div>';
            picShowSwiper.prependSlide(dom);
            picShowSwiper.update(true);
        } else if (showIndex != 0 && showIndex != showNum - 1 && showNum > 2) {
            add++;
            reduce--;
            var domPrev = '\
      <div class="swiper-slide">\
      <div class="slide_zoom_container row-all-center" style="height: '+ winH +'px">\
      <img class="swiper-lazy big_img_slide" data-src="'+ scrollObj.swiperArr[reduce].big_img +'" data-hash="'+ scrollObj.swiperArr[reduce].pic_hash +'" data-midSize="'+ scrollObj.swiperArr[reduce].middle_size +'" data-camer="'+ scrollObj.swiperArr[reduce].camer +'" data-retoucher="'+ scrollObj.swiperArr[reduce].retoucher +'"\
      data-time="'+ scrollObj.swiperArr[reduce].create_time +'" data-ori="'+ scrollObj.swiperArr[reduce].origin_img +'" data-oriSize="'+ scrollObj.swiperArr[reduce].pic_size +'" data-likeCount="'+ scrollObj.swiperArr[reduce].like_count +'" data-avator="'+ scrollObj.swiperArr[reduce].camer_head +'" data-avator2="'+ scrollObj.swiperArr[reduce].retoucher_head +'" onload=loadOnePic(this)>\
      </div>\
      </div>';
            picShowSwiper.prependSlide(domPrev);
            picShowSwiper.update(true);
            var domNext = '\
      <div class="swiper-slide">\
      <div class="slide_zoom_container row-all-center" style="height: '+ winH +'px">\
      <img class="swiper-lazy big_img_slide" data-src="'+ scrollObj.swiperArr[add].big_img +'" data-hash="'+ scrollObj.swiperArr[add].pic_hash +'" data-midSize="'+ scrollObj.swiperArr[add].middle_size +'" data-camer="'+ scrollObj.swiperArr[add].camer +'" data-retoucher="'+ scrollObj.swiperArr[add].retoucher +'"\
      data-time="'+ scrollObj.swiperArr[add].create_time +'" data-ori="'+ scrollObj.swiperArr[add].origin_img +'" data-oriSize="'+ scrollObj.swiperArr[add].pic_size +'" data-likeCount="'+ scrollObj.swiperArr[add].like_count +'" data-avator="'+ scrollObj.swiperArr[add].camer_head +'" data-avator2="'+ scrollObj.swiperArr[add].retoucher_head +'" onload=loadOnePic(this)>\
      </div>\
      </div>';
            picShowSwiper.appendSlide(domNext);
            picShowSwiper.update(true);
        }
    }

    $('#imgShowModal').fadeIn().find('.imgShowSwiper').fadeIn();

    // 图片放大
    $('.slide_zoom_container').each(function(){
        new RTP.PinchZoom($(this), {});
    })

    // 点击记录hash
    picAjax("pic_click", thisHash);
}
// 关闭大图
function closeBigPicShow() {
    $('.container').off('touchmove');
    $('video').removeClass('none');
    $('.loading-box').addClass('none');
    $('#imgShowModal').fadeOut(200,function() {
        picLikeArr = []; //关闭时清空 自己点赞过图片的数组
        getLikes(); // 重新获取一次；
        $('#imgShowModal .modal_footer').fadeIn();
        $('.imgShowSwiper .swiper-wrapper').empty();
        picShowSwiper.destroy(false, true);
    });
}
// 关闭下拉栏
function closeSlide() {
    $('.sort-item__list').slideUp(200);
}
// 滚动时执行
function scrollAction() {
    var photo_height = $('.photo').outerHeight();
    var this_st = $document.scrollTop();
    vhall.scrollTop = this_st;
    // 加载图片
    if (this_st > photo_height + eleStatus.navST - winH * 3) {
        if (!isLoading && scrollEle !== '.imgText' && scrollEle !== '.timeLine' && scrollEle !== '.hot' && scrollEle !== '.discuss') {
            isLoading = true;
            loadMorePic(scrollEle, scrollObj);
        }
        if (scrollEle === '.imgText') {
            scrollImageTextPics();
        }
        if (scrollEle === '.timeLine' && timeLine.add < timeLine.count) {
            scrollTimeLinePics();
        }
        if (!isLoading && !discuss.end && scrollEle === '.discuss') {
            getDiscuss();
        }
    }
    // 当前图片位置
    $(scrollEle +' '+ visibleContainer).find('.picItem').each(function() {
        var $this = $(this);
        if ($this.offset().top - this_st < winH) {
            var cur = $this.attr('data-cur');
            $('#count-current').html(cur);
            if (cur == scrollObj.total - 1) {
                $('#count-current').html(scrollObj.total);
            }
        }
    })
    // 相册悬浮
    if (this_st > eleStatus.navST) {
        $('.nav').addClass('float');
        $('.photo').css('padding-top', eleStatus.navH + 'px');
        if (scrollEle !== '.discuss') $('.count-wrapper').removeClass('none');
    } else {
        $('.nav').removeClass('float');
        $('.photo').css('padding-top', 0);
        if (scrollEle !== '.discuss') $('.count-wrapper').addClass('none');
    }
}
// 滚动时加载图片
function loadMorePic(scrollEle, scrollObj){
    scrollObj.step = 30;
    picsWhere(scrollEle, scrollObj);
}
// 获取所有图片 每次只请求picstep30张
function getAllPics(ele, obj) {
    $('.pic-loading__top').removeClass('hide');
    $.ajax({
        url: '/activity/live/pics',
        type: 'get',
        dataType: 'json',
        data: {
            activityNo: ACTIVITYNO,
            picIndex: obj.theNew,
            isNew: false,
            count: 500,
        },
        success:function(data) {
            if (data.success) {
                var result = data.result;
                var picsArr = result.pics_array;
                obj.total = result.pics_total;
                $('#count-total').html(obj.total);
                if (picsArr.length > 0) {

                    $('.pic-wait').remove();

                    obj.theNew = picsArr[picsArr.length - 1].pic_index;

                    for (var i = 0, len = picsArr.length; i < len; i++) {
                        obj.fixLocation.push(picsArr[i].small_img); //用于图片定位的数组
                    }
                    obj.preloadImg = obj.preloadImg.concat(picsArr);
                    obj.swiperArr = obj.swiperArr.concat(picsArr);

                    picsWhere(ele, obj);

                    if (picsArr.length === 500) {
                        getAllPics(ele, obj);
                    } else {
                        obj.theLast = obj.swiperArr[0].pic_index;
                    }
                }
                if (obj.total === 0) {
                    $('.pic-wait').removeClass('none');
                    $('.pic-nomore').remove();
                }
            }

            $('.pic-loading__top').addClass('hide');
        }
    })
}
// 获得相应相册的图片
function getAlbumPics(ele, obj) {
    $('.pic-loading__top').removeClass('hide');
    $.ajax({
        url: '/activity/live/album/one',
        type: 'get',
        dataType: 'json',
        data: {albumId: obj.id, picIndex: 0, count: 1000, isNew: false},
        success: function(data) {
            var pics = data.result.pics;
            if (data.success && pics.length > 0) {

                obj.total = pics.length;
                $('#count-total').html(obj.total);

                obj.theLast = pics[0].pic_index;
                for (var i = 0, len = pics.length; i < len; i++) {
                    obj.fixLocation.push(pics[i].small_img);
                }
                obj.preloadImg = pics.concat();
                obj.swiperArr = pics.concat();
                picsWhere(ele, obj);
            } else {
                if (DETAIL.status !== 5) $(ele).find('.pic-no').removeClass('none');
            }
            $('.pic-loading__top').addClass('hide');
        }
    })
}
// 获取主办方及嘉宾
function getGuestList() {
    $.ajax({
        url: '/activity/live/guest/list',
        type: 'get',
        dataType: 'json',
        data: {activityNo: ACTIVITYNO},
        success:function(data){
            var result = data.result;
            var guestList = result.guest_list;
            var brandList = result.band_list;
            // 是否有嘉宾
            if (data.success && guestList && guestList.length > 0) {
                $('.guest').removeClass('none');
                var guestDom = '';
                for (var i = 0, len = guestList.length; i < len; i++) {
                    if (guestList[i].type == 2) {
                        var guestDom_one = '\
            <li class="guest-item col-start-center" data-name="'+ guestList[i].name +'" data-describe="'+ guestList[i].description +'" data-qr="'+ guestList[i].qr_code +'" data-logo="'+ guestList[i].big_img +'" data-link="'+ guestList[i].url +'">\
              <div class="guest-item__avator" style="background-image:url('+ guestList[i].big_img +')"></div>\
              <p class="guest-item__name">'+ guestList[i].name +'</p>\
              <span class="guest-item__title">'+ guestList[i].title +'</span>\
            </li>\
            ';
                    } else {
                        var guestDom_one = '\
            <li class="guest-item guest-item--small col-start-center" data-name="'+ guestList[i].name +'" data-describe="'+ guestList[i].description +'" data-qr="'+ guestList[i].qr_code +'" data-logo="'+ guestList[i].big_img +'" data-link="'+ guestList[i].url +'">\
              <div class="guest-item__avator" style="background-image:url('+ guestList[i].big_img +')"></div>\
              <p class="guest-item__name">'+ guestList[i].name +'</p>\
              <span class="guest-item__title">嘉宾</span>\
            </li>\
            ';
                    }
                    guestDom += guestDom_one;
                }
                $('.guest-wrapper').append(guestDom);
            } else {
                $('.guest').remove();
            }

            // 相册栏距顶部高度
            eleStatus.navST = $('.banner').outerHeight() + $('.detail').outerHeight() + $('.guest').outerHeight() + $('.video-live').outerHeight() + $('.video-play').outerHeight();

            // 是否有品牌信息
            if (data.success && brandList &&  brandList.length > 0) {
                var customerDom = '';
                for (var i = 0, len = brandList.length; i < len; i++) {
                    var customer_one = '\
          <div class="ad-guest col-start-center">\
          <div class="ad-title row-all-center">\
          <span class="ad-title__content">'+ brandList[i].name +'</span>\
          </div>\
          '+ function() {if(brandList[i].description) {return '<p class="ad-content">'+ brandList[i].description +'</p>'} else {return '';}}() +
                        function() {if(brandList[i].big_img){return '<img src="'+ brandList[i].big_img +'" class="cusLogoImg">';} else {return '';}}() +
                        function() {if(brandList[i].url) {return '<a href="'+ brandList[i].url +'" class="cusWebSite row-all-center">前往相关页面&gt;</a>'} else {return '';}}() +
                        '</div>';
                    customerDom += customer_one;
                }
                $('.ad-container').append(customerDom);

            }
            // 更换皮肤
            changeTheme(DETAIL.color);
            // 切换语言
            if (LANGUAGE) interprete('.guest', 'en');
        }
    })
}

// 相册
function getAlbum(){
    $.ajax({
        url: '/activity/live/albums',
        type: 'get',
        dataType: 'json',
        data: {
            activityNo: ACTIVITYNO,
            count: 1000
        },
        success:function(data){

            if (data.success && data.result.length > 0) {
                albumObj.hasAlbum = true;

                var result = data.result;

                for (var i = 0, len = result.length; i < len; i++) {
                    var navLiDom = '\
          <li class="nav-2__item" data-id="'+ result[i].album_id +'">'+ result[i].name +'\
            <i></i>\
          </li>\
          ';
                    var albumEle = '\
          <div class="album'+ result[i].album_id +' block none">\
            <div class="pic-container row-start-center">\
              <div class="pic-container__waterfall">\
                <div class="waterfall-container__left"></div>\
                <div class="waterfall-container__right"></div>\
              </div>\
              <div class="pic-container__tiled none"></div>\
            </div>\
            <p class="pic-no none">暂无图片</p>\
          </div>';

                    var album = {
                        bol: true,
                        theLast: 0,
                        preloadImg: [],
                        fixLocation: [],
                        swiperArr: [],
                        newImgArr: [],
                        leftHeight: 0,
                        rightHeight: 0,
                        total: 0,
                        cur: 0,
                        id: result[i].album_id
                    };
                    albumObj.arr.push(album);
                    $('.nav-2 ul').append(navLiDom);
                    $('.photo').append(albumEle);

                }
            } else {
                $('.nav-2').addClass('none');
            }
            eleStatus.navH = $('.nav').outerHeight();
            // 切换语言
            if (LANGUAGE) interprete('.guest', 'en');
        }
    })
}

function picsWhere(ele, obj){
    if (obj.preloadImg.length > 0 && obj.step > 0) {
        $('.pic-loading__bottom').removeClass('hide');
        var first_ = obj.preloadImg.shift(),
            picType_ = first_.pic_type,
            src_ = first_.small_img,
            hash_ = first_.pic_hash,
            bigSrc_ = first_.big_img,
            oriSrc_ = first_.origin_img,
            camer_ = first_.camer || '--',
            avator_ = first_.camer_head || first_.retoucher_head,
            retoucher_ = first_.retoucher || '--',
            midsize_ = first_.middle_size,
            orisize_ = first_.pic_size,
            likeCount_ = first_.like_count,
            createTime_ = first_.create_time;
        obj.step--;
        var isGif = first_.small_img.indexOf('.gif') > -1 ? '<img class="gifSign" src="http://static.qiezipai.cn/wechat/live/image/live4/gif.png">' : '';
        var hasPayDom = (ISPAY && first_.big_img) ? '<i class="iconfont icon-jiaobiao jiaobiao"></i>' : '';
        var unselected = DETAIL.color == 2 ? 'unselectedw' : 'unselected'; //无法选择时的图片样式 分黑白
        var oldPicSelect = puzzledObj.count >= 9 ? unselected : '';
        var oldSelectTag = puzzledObj.count >= 9 ? 'none' : '';
        var oldPicSelectShow = puzzledObj.status ? '' : 'none';

        // 当前图片的序号，用于显示当前图片所处位置
        obj.cur++;
        obj.cur = obj.cur < obj.total ? obj.cur : obj.total;
        // 瀑布流
        var picTypeClass_ = '';
        if (picType_ === 1) {
            picTypeClass_ = 'picType1';
        } else if (picType_ === 2) {
            picTypeClass_ = 'picType2';
        } else {
            picTypeClass_ = 'picType3';
        }

        var picDom = '\
    <div class="pic_item picItem '+ picTypeClass_ +' " data-src="'+ src_ +'" data-time="'+ createTime_ +'" data-hash="'+ hash_ +'" data-big="'+ bigSrc_ +'" data-midSize="'+ midsize_ +'" data-ori="'+ oriSrc_ +'" data-oriSize="'+ orisize_ +'" data-likeCount="'+ likeCount_ +'"\
    data-cur="'+ obj.cur +'" data-camer="'+ camer_ +'" data-retoucher="'+ retoucher_ +'" data-avator="'+ avator_ +'" style="background-image:url('+ src_ +')">\
    '+ isGif +'\
    '+ hasPayDom +'\
    <div class="picSelect '+ oldPicSelect +' '+ oldPicSelectShow +'">\
    <span class="select-tag '+ oldSelectTag +'"></span>\
    </div>\
    </div>';

        var left = $(ele).find('.waterfall-container__left'), right = $(ele).find('.waterfall-container__right');
        obj.leftHeight = left.height();
        obj.rightHeight = right.height();
        obj.leftHeight <= obj.rightHeight ? left.append(picDom) : right.append(picDom);
        // 平铺
        var tiledDom = '\
    <div class="pic_item picItem tiled_item " data-src="'+ src_ +'" data-time="'+ createTime_ +'" data-hash="'+ hash_ +'" data-big="'+ bigSrc_ +'" data-midSize="'+ midsize_ +'" data-ori="'+ oriSrc_ +'" data-oriSize="'+ orisize_ +'" data-likeCount="'+ likeCount_ +'"\
    data-cur="'+ obj.cur +'" data-camer="'+ camer_ +'" data-retoucher="'+ retoucher_ +'" data-avator="'+ avator_ +'" style="background-image:url('+ src_ +')">\
    '+ isGif +'\
    '+ hasPayDom +'\
    <div class="picSelect '+ oldPicSelect +' '+ oldPicSelectShow +'">\
    <span class="select-tag '+ oldSelectTag +'"></span>\
    </div>\
    </div>';
        var tiled = $(ele).find('.pic-container__tiled');
        tiled.append(tiledDom);

        if (DETAIL.color == 2) $('.select-tag').addClass('white'); //白色的拼图勾选
        picsWhere(ele, obj);
    } else {
        $('.pic-loading__bottom').addClass('hide');
        isLoading = false;
    }
    if (obj.preloadImg.length <= 0) {
        isOver = true;
        setTimeout(function() {$(ele).find('.pic-nomore').removeClass('none');},500);
    };
}

// 轮询新图
function picTimer() {
    timer.all = setInterval(function(){
        $.ajax({
            url: '/activity/live/pics',
            type: 'get',
            dataType: 'json',
            data: {
                activityNo: ACTIVITYNO,
                picIndex: all.theLast,
                // picIndex: 0,
                isNew: true,
                count: 1000,
            },
            success:function(data){
                if (data.success) {
                    $('#lookNum').html(data.result.view_count);
                    if (data.result.pics_array.length > 0) {
                        $('.pic-wait').addClass('none');
                        $('.nav-2__item').eq(0).find('i').removeClass('none');
                        $('#all').find('i').removeClass('none');
                    }
                }
            }
        })
    },30000);
}
// 统计点击量
function picAjax(value,hash_) {
    $.ajax({
        url: '/statistics/picClick',
        type: 'get',
        dataType: 'json',
        data: {key: value, params: hash_, activity_no: ACTIVITYNO}
    })
}
// cc视频
function ccLive(roomid_) {
    $.ajax({
        url: '/activity/live/bokecc',
        type: 'get',
        dataType: 'json',
        data: {roomId:roomid_},
        success: function(data) {
            if (data.success) {
                var liveid_ = data.result.liveId;
                if (liveid_ && liveid_ == 'is_living') {
                    $('.video-live').find('.video-box').append('<div id="livePlayer"></div>')
                    DWLive.init({
                        userid: '33DAEE6345188E32',
                        roomid: roomid_,
                    });
                } else if (liveid_ && liveid_.length > 1){
                    $('.video-live').find('.video-box').append('<div id="playbackPlayer"></div>')
                    $.DW.config({
                        userId: '33DAEE6345188E32',
                        roomId: roomid_,
                        liveId: liveid_
                    });
                }
            }
        }
    })
}

//swiper大图加载
function loadOnePic(ele) {
    var imgSrc_ = $(ele).attr('src');
    var img_ = new Image();
    img_.src = imgSrc_;
    img_.onload = function() {
        $(ele).parents('.swiper-slide').css('background', 'transparent');
    }
}
// 相册检测
function albumInterVal(curAlbum, obj, id) {
    timer.album = setInterval(function() {
        $.ajax({
            url: '/activity/live/album/one',
            type: 'get',
            dataType: 'json',
            data: {albumId: id, picIndex: obj.theLast, count: 1000, isNew: true},
            success: function(data) {
                if (data.success && data.result.pics.length > 0) {
                    curAlbum.find('i').removeClass('none');
                }
            }
        })
    }, 30000);
}
// 获得热门图片
function getHotPics() {
    $('.hot .pic-container').addClass('row-start-start').html('').css('height', winH);
    $('.pic-loading__top').removeClass('hide');
    hot.fixLocation = [];
    hot.add = 0;
    $.ajax({
        url: '/activity/live/album/like',
        type: 'get',
        dataType: 'json',
        data: {
            activityNo: ACTIVITYNO,
            from: 0,
            size: 100,
        },
        success: function(data) {
            if (data.success) {
                var pics = data.result.pics;
                var picsArr = [];
                hot.total = pics.length || 0;
                $('#count-total').html(hot.total);
                for (var i = 0; i < hot.total; i++) {
                    hot.fixLocation.push(pics[i].small_img);
                    if (i < 10) {
                        bigTagArr.push(pics[i].pic_hash);
                    }
                }
                solveHotPics(pics);
                hot.swiperArr = pics.concat();
            }
            $('.hot .pic-container').css('height', 'auto');
        }
    })
}
// 处理热门图片
function solveHotPics(pics) {
    for (var i = 0, len = pics.length; i < len && 100; i++) {
        // 当前图片的序号，用于显示当前图片所处位置
        hot.cur++;
        hot.cur = hot.cur < hot.total ? hot.cur : hot.total;
        var camer_ = pics[i].camer || '--';
        var avator_ = pics[i].camer_head || pics[i].retoucher_head;
        var retoucher_ = pics[i].retoucher || '--';

        var hasPayDom = (ISPAY && pics[i].big_img) ? '<i class="iconfont icon-jiaobiao jiaobiao"></i>' : '';
        var payText = pics[i].big_img ? '' : '<p class="nopay-masking-p">购买成功后<br>可点击下载原图</p>';

        var bs = pics[i].big_img ? pics[i].big_img : pics[i].small_img;
        var isnopay = pics[i].big_img ? '' : 'filterblur';

        var bigHot = '\
    <div class="hot-item-big hot-item picItem" data-src="'+ pics[i].small_img +'" data-hash="'+ pics[i].pic_hash +'" data-big="'+ pics[i].big_img +'" data-midSize="'+ pics[i].middle_size +'" data-time="'+ pics[i].create_time +'" data-ori="'+ pics[i].origin_img +'"\
    data-cur="'+ hot.cur +'" data-camer="'+ camer_ +'" data-retoucher="'+ retoucher_ +'" data-avator="'+ avator_ +'" data-oriSize="'+ pics[i].pic_size +'"\
    data-likeCount="'+ pics[i].like_count +'">\
    <img src="'+ bs +'" class="'+ isnopay +'">\
    '+ payText +'\
    '+ hasPayDom +'\
    <div class="picSelect none">\
    <span class="select-tag"></span>\
    </div>\
    </div>';
        var smallHot = '\
    <div class="hot-item-small hot-item fadeIn picItem" data-src="'+ pics[i].small_img +'" data-hash="'+ pics[i].pic_hash +'" data-big="'+ pics[i].big_img +'" data-midSize="'+ pics[i].middle_size +'" data-time="'+ pics[i].create_time +'" data-ori="'+ pics[i].origin_img +'"\
    data-cur="'+ hot.cur +'" data-camer="'+ camer_ +'" data-retoucher="'+ retoucher_ +'" data-avator="'+ avator_ +'" data-oriSize="'+ pics[i].pic_size +'"\
    data-likeCount="'+ pics[i].like_count +'">\
    '+ hasPayDom +'\
    <div class="picSelect none">\
    <span class="select-tag"></span>\
    </div>\
    </div>';
        i < 2 ? $('.hot .pic-container').append(bigHot) : $('.hot .pic-container').append(smallHot);

        if (i < 2) {
            $('.hot-item').eq(i).append('<p class="no-sign-big row-all-center" data-bigTag='+ i +'><span>No.</span>'+ (i+1) +'</p>')
        } else if (i >= 2 && i < 10) {
            $('.hot-item').eq(i).append('<p class="no-sign-small row-all-center" data-bigTag='+ i +'>'+ (i+1) +'.</p>')
        }
    }

    hotLoad();
    $('.pic-loading__top').addClass('hide');

    if (DETAIL.color == 2) $('.select-tag').addClass('white');
}
// 加载热门图片
function hotLoad() {
    if ($('.fadeIn').length > 0) {
        var $self = $('.fadeIn').eq(0);
        var img_ = new Image();
        img_.src = $self.attr('data-src');
        img_.onload = function() {
            $self.css('background-image', 'url('+ img_.src +')');
            $self.removeClass('fadeIn');
            hotLoad();
        }
        img_.onerror = function() {
            $self.remove();
            hotLoad();
        }
    }
}
// 获得点赞的hash数组
function getLikes() {
    $.ajax({
        url: '/activity/live/pic/like/info',
        type: 'get',
        dataType: 'json',
        data: {activityNo: ACTIVITYNO},
        success: function(data) {
            if (data.success) {
                var picLike = data.result.picLike;
                for (var k in picLike) {
                    picLikeArr.push(k);
                }
            }
        }
    })
}
// 点赞操作
function clickLikes() {
    var $this = $(this).find('.like');
    var num = parseInt($('#like-num').html());
    var hash_ = $('#imgShowModal .swiper-slide-active img').attr('data-hash');
    var likeCount_ = $('#imgShowModal .swiper-slide-active img').attr('data-likeCount');
    if (!$this.hasClass('like-ani')) {
        num++;
        $('#like-num').html(num);
        likeStatus(num);

        $(scrollEle).find('.picItem').each(function() {
            var $this_ = $(this);
            var thisHash = $this_.attr('data-hash');
            if(thisHash == hash_) {
                $this_.attr('data-likeCount', num);
            }
        })
        iLike(hash_, 5);
        $this.removeClass('icon-dianzanqian').addClass('icon-dianzanhou');
    } else {
        num--;
        $('#like-num').html(num);

        likeStatus(num);
        //利用hash去获得列表中likecount的数量 方法不好 暂用
        $(scrollEle).find('.picItem').each(function() {
            var $this_ = $(this);
            var thisHash = $this_.attr('data-hash');
            var thisCount = $this_.attr('data-likeCount');
            if(thisHash == hash_) {
                $this_.attr('data-likeCount', --thisCount);
            }
        })
        iLike(hash_, -1);
        $this.addClass('icon-dianzanqian').removeClass('icon-dianzanhou');
    }
    $this.toggleClass('like-ani');
}
// 点赞状态切换
function likeStatus(count) {
    if (count > 0) {
        $('#like-no').addClass('none');
        $('#like-num').removeClass('none').html(count)
    } else {
        $('#like-num').addClass('none');
        $('#like-no').removeClass('none');
    }
}
// 点赞请求
function iLike(hash_, status) {
    $.ajax({
        url: '/activity/live/pic/add/like',
        type: 'get',
        dataType: 'json',
        data: {
            picHash: hash_,
            status: status
        },
        success: function(data) {
            if (data.success) {
                status == 5 ? picLikeArr.push(hash_) : picLikeArr.splice($.inArray(hash_,picLikeArr),1);
            }
        }
    })
}
// 匹配自己是否点赞
function testLike(hash_) {
    if (picLikeArr.indexOf(hash_) > -1) {
        $('.like').addClass('like-ani').addClass('icon-dianzanhou').removeClass('icon-dianzanqian');
    } else {
        $('.like').removeClass('like-ani').removeClass('icon-dianzanhou').addClass('icon-dianzanqian');
    }
}
// 大图内是否有标识
function testBigTag(hash_) {
    $('.bigNoTag-big, .bigNoTag-small').remove();
    if (hot.isHot && bigTagArr.indexOf(hash_) > -1) {
        var no_ = bigTagArr.indexOf(hash_) + 1;
        no_ < 3 ? $('#imgShowModal').append('<p class="bigNoTag-big row-all-center"><span>No.</span>'+ no_ +'</p>') : $('#imgShowModal').append('<p class="bigNoTag-small row-all-center">'+ no_ +'.</p>');
    }
}
// 单张分享按钮
function singleShare(event) {
    var bol = event.data.bol;
    if (bol) {
        var hash_ = $('#imgShowModal .swiper-slide-active img').attr('data-hash');
        $('#share').fadeIn();
        shareLink = 'http://'+ HOST +'/activity/live/pic/one/' + hash_;
    } else {
        $('#share').fadeOut();
        shareLink = window.location.href;
    }
    getRealLink();
    changeShareLink();
}

// 请求原图
function requestOriPic() {
    $('.loading--box').removeClass('none');
    $('#imgShowModal .swiper-slide-active img').attr('data-getOri', 'yes');
    var oriSrc = $('#imgShowModal .swiper-slide-active img').attr('data-ori');
    var oriSize = $('#origin-picSize').html();
    var oriImg = new Image();
    oriImg.src = oriSrc;
    oriImg.onload = function() {
        $('#imgShowModal .swiper-slide-active img').attr('src', oriSrc);
        $('#picSize').html(oriSize);
        $('#origin-picSize, #orgin-title').addClass('none');
        $('.loading--box').addClass('none');
    }
    oriImg.onerror = function() {
        $('.loading--box').addClass('none');
        toast('请求原图失败');
    }
}
// 控制显示隐藏一些元素
function removeEle(something, ele) {
    if (something == 'null' || !something || something == 'undefined') {
        $(ele).addClass('none');
    } else {
        $(ele).removeClass('none');
    }
}
// 引导页
function homeGuide() {
    if (GUIDE && GUIDE === 'false') {
        $('#guideModal').removeClass('none');
        $('#guideModal').click(removeHomeGuide);
    } else {
        $('#guideModal').remove();
        // addWhUrl(3);
    }
}
// 去除引导页cookie
function removeHomeGuide() {
    $(this).fadeOut(200);
    // addWhUrl(3);
    $.ajax({
        url: '/home/guide/remove',
        type: 'get',
        dataType: 'json',
        data: {activityNo: ACTIVITYNO}
    })
}
// 是否有主会场信息
function getAllActivity() {

    $('#go-jh').attr('href', 'http://' + HOST + '/activity/live?activityNo='+ DETAIL.father_activity_no);
    $('#title-jh').html(DETAIL.father_activity_name);

    if (DETAIL.father_activity_them !== 10) {
        for (var i = 0, len = DETAIL.activity_list.length; i < len; i++) {
            var resultList_ = DETAIL.activity_list[i];
            var status_ = resultList_.activity_status;
            var isGray = status_ === 5 ? 'grey' : '';
            var domb_ = '<a style="border:none;background-image:url('+ resultList_.little_img +')" href="'+ resultList_.activity_url +'" class="day_btn '+ isGray +' row-start-center" data-no="'+ resultList_.activity_no +'"></a>';
            $('.jh-box').append(domb_);
        }
    } else {
        for (var i = 0, len = DETAIL.activity_list.length; i < len; i++) {
            var resultList_ = DETAIL.activity_list[i];
            var status_ = resultList_.activity_status;
            var isActiveClass = status_ === 5 ? '' : 'active';
            var isActiveHtml = status_ === 5 ? '敬请期待' : '精彩图片';

            var domb_ = '\
      <a href="'+ resultList_.activity_url +'" class="day_btn row-start-center '+ isActiveClass +'" data-no="'+ resultList_.activity_no +'" style="border-color: '+ resultList_.color +'">\
        <span class="day_title">'+ resultList_.title +'</span>\
        <span class="arrow_right '+ isActiveClass +'"><span style="color: ' + resultList_.color +'">'+ isActiveHtml +'</span><i class="iconfont icon-gengduo" style="color: ' + resultList_.color +'"></i></span>\
      </a>';
            $('.jh-box').append(domb_);
        }
        // if (DETAIL.color) {
        //   setColor(DETAIL.color);
        // }
    }

}
// 找自己 悬浮
function findMeFloat() {
    $('.puzzle-cancel').trigger('click');
    if (findmeObj.guide) {
        $('video').addClass('none');
        $('.find-container').removeClass('none');
        chooseImg('find');
        findmeObj.guide = false;
        whModify();
    }
}
// 找自己 引导
function findMeGuide() {
    $('.pos-box').find('input').trigger('click');
    $('.find-container').fadeOut();
    $('video').removeClass('none');
}
// 上传图片
function chooseImg(id) {
    var key_name, url;
    var uploader = new findmeObj.example.uploader({
        runtimes: 'html5,flash,html4',    //上传模式,依次退化
        browse_button: id,       //上传选择的点选按钮，**必需**
        uptoken_url: '/base/getUploadToken',
        domain: 'http://s.plusx.cn',
        max_file_size: '6mb',           //最大文件体积限制
        max_retries: 3,                   //上传失败最大重试次数
        chunk_size: '0',                //分块上传时，每片的体积
        auto_start: true,
        multi_selection: true,
        // filters : {
        //     mime_types: [{title : "Image files", extensions : "jpg,gif,png,jpeg"},]
        // },                //选择文件后自动上传，若关闭需要自己绑定事件触发上传
        resize: {
            height: 800,
            crop: false,
            quality: 50,
            preserve_headers: true
        },
        init: {
            'UploadProgress': function() {
                $('.masking').removeClass('none');
            },
            'FileUploaded': function(up, file, info) {
                // var img_url;
                var res = JSON.parse(info);
                var hash_ = res.hash;
                $.ajax({
                    type: "get",
                    url: "/home/pic/add",
                    data: {
                        url: key_name,
                        hash: hash_,
                        activityNo: ACTIVITYNO
                    },
                    dataType: "json",
                    success:function(data){
                        $('.masking').addClass('none');
                        window.location.href = '/page1/home/findme';
                    },
                    error:function(data){
                        $('.masking').addClass('none');
                        toast('服务器异常');
                    }
                });
            },
            'Error': function(up, err, errTip) {
                toast('上传图片过大');
            },
            'Key': function(up, file) {
                var myDate = new Date();
                var timestamp_ = (myDate.getMonth()+1).toString()+myDate.getDate().toString()+myDate.getHours().toString()+myDate.getMinutes().toString()+myDate.getSeconds().toString()+myDate.getMilliseconds().toString();
                var fliename_ = file.name.replace(/-/g,"_");
                var key_temp_ = '/plus/user/findme/' + USERID + '/' + timestamp_;
                key_name = key_temp_;
                return key_name;
            },
            'Destroy':function(up){}
        }
    });//uploader
}
// 点击出现聚合页入口
function gatherEntry() {
    $('video').toggleClass('none');
    $('.jh-container').fadeToggle();
    $('.jh-container-inner').toggleClass('active');
    $(this).toggleClass('active');
    $('.jh-button__1, .jh-button__2').toggleClass('none');
    whModify();
}
// 设置主视觉
function setView(view) {
    if (view) {
        $('#main-view').css('background-image', 'url('+ view +')');
        addMainViewAni(view);
        viewInterval(5);
    } else {
        removeMainMasking();
    }
}
// 主视觉倒计时
function viewInterval(second) {
    var viewInterval_ = setInterval(function() {
        second--;
        $('.main-view-interval').html(second);
        if (second === 0) {
            removeMainMasking();
            clearInterval(viewInterval_);
            // addWhUrl(2);
        }
    },1000)
}
function removeMainMasking() {
    $('.container').off('touchmove');
    $('.main-masking').remove();
}


// 获取时间线图片总数
function getTimelinePics() {
    $('.pic-loading__top').removeClass('hide');
    $('.timeLine .pic-container').css('height', winH).html('');
    timeLine.fixLocation = [];
    timeLine.swiperArr = [];
    timeLine.count = 0;
    timeLine.add = 0;
    timeLine.total = 0;
    timeLine.data = [];
    $.ajax({
        url: '/activity/live/album/timeline',
        type: 'get',
        dataType: 'json',
        data: {
            activityNo: ACTIVITYNO,
            from: 0,
            size: 2000
        },
        success: function(data) {
            if (data.success) {
                var result = data.result;
                if ((result instanceof Array) && (result.length > 0)) {
                    timeLine.count = result.length;
                    timeLine.data = result;
                    for (var i = 0; i < result.length; i++) {
                        for (var j = 0; j < result[i].picList.length; j++) {
                            timeLine.total++;
                            timeLine.fixLocation.push(result[i].picList[j].small_img);
                        }
                        timeLine.swiperArr = timeLine.swiperArr.concat(result[i].picList);
                    }
                    $('#count-total').html(timeLine.total);
                    scrollTimeLinePics();
                }
                $('.pic-loading__top').addClass('hide');
                $('.timeLine .pic-container').css('height', 'auto');
            }
        }
    })
}
// 滚动加载时间线
function scrollTimeLinePics() {
    for (var i = 0; i < timeLine.step && timeLine.add < timeLine.count; i++) {
        var timeline_one = timeLine.data[timeLine.add];
        var timeLineTheme = DETAIL.color == 2 ? 'white' : '';
        var timeLineDom = '\
    <div class="timeLine-one col-start-start">\
      <div class="timeLine-one-outer">\
      <div class="timeLine-title row-start-center">\
        <span class="iconfont icon-yuandian timeLine-dot '+ timeLineTheme +'">\
          <i class="timeLine-line"></i>\
        </span>\
        <span class="timeLine-time '+ timeLineTheme +'">'+ timeline_one.name +'</span>\
        <span class="iconfont icon-shuangjiantouyou timeLine-shrink '+ timeLineTheme +'"></span>\
      </div>\
      <div class="timeLine-picbox">\
        '+ function() {
                var timeline_picDomAll = '';
                for (var j = 0, j_len = timeline_one.picList.length; j < j_len; j++) {
                    // 当前图片的序号，用于显示当前图片所处位置
                    timeLine.cur++;
                    timeLine.cur = timeLine.cur < timeLine.total ? timeLine.cur : timeLine.total;
                    // 图片信息
                    var timeline_picOne = timeline_one.picList[j];
                    var src_ = timeline_picOne.small_img,
                        hash_ = timeline_picOne.pic_hash,
                        bigSrc_ = timeline_picOne.big_img,
                        oriSrc_ = timeline_picOne.origin_img,
                        midsize_ = timeline_picOne.middle_size,
                        orisize_ = timeline_picOne.pic_size,
                        likeCount_ = timeline_picOne.like_count,
                        createTime_ = timeline_picOne.create_time,
                        camer_ = timeline_picOne.camer || '--',
                        avator_ = timeline_picOne.camer_head || timeline_picOne.retoucher_head,
                        retoucher_ = timeline_picOne.retoucher || '--',

                        isGif = src_.indexOf('.gif') > -1 ? '<img class="gifSign" src="http://static.qiezipai.cn/wechat/live/image/live4/gif.png">' : '',
                        hasPayDom = (ISPAY && timeline_picOne.big_img) ? '<i class="iconfont icon-jiaobiao jiaobiao"></i>' : '',

                        unselected = DETAIL.color == 2 ? 'unselectedw' : 'unselected',
                        oldPicSelect = puzzledObj.count >= 9 ? unselected : '',
                        oldSelectTag = puzzledObj.count >= 9 ? 'none' : '',
                        oldPicSelectShow = puzzledObj.status ? '' : 'none';

                    var timeline_picDom = '\
            <div class="pic_item picItem tiled_item new_pic" data-src="'+ src_ +'" data-time="'+ createTime_ +'" data-hash="'+ hash_ +'" data-big="'+ bigSrc_ +'" data-midSize="'+ midsize_ +'" data-ori="'+ oriSrc_ +'" data-oriSize="'+ orisize_ +'" data-likeCount="'+ likeCount_ +'" data-cur="'+ timeLine.cur +'" data-camer="'+ camer_ +'"\
              data-avator="'+ avator_ +'" data-retoucher="'+ retoucher_ +'" style="background-image:url('+ src_ +')">\
            '+ isGif +'\
            '+ hasPayDom +'\
            <div class="nopay" style="background-image: url('+ src_ +')"></div>\
            <p class="nopay-masking-p none">购买成功后<br>可点击下载原图</p>\
            <div class="picSelect '+ oldPicSelect +' '+ oldPicSelectShow +'">\
            <span class="select-tag '+ oldSelectTag +'"></span>\
            </div>\
            </div>\
            ';
                    timeline_picDomAll += timeline_picDom;
                };
                return timeline_picDomAll;
            }() +
            '<div class="timeLine-one-inner '+ timeLineTheme +'"></div>\
        </div>\
      </div>\
    </div>\
    ';
        $('.timeLine .pic-container').append(timeLineDom);
        if (DETAIL.color == 2) $('.select-tag').addClass('white');
        timeLine.add++; // 统计加载到第几个时间线模块
    }
    fixImgArea('.timeLine-picbox');
}
// 收缩时间线
function shrinkTimeLine() {
    var $this = $(this);
    $this.siblings('.timeLine-picbox').slideToggle(200);
    $this.find('.timeLine-shrink').toggleClass('active');
    $this.parents('.timeLine-one').toggleClass('mb');
}

// 获得图文图片
function getImageTextPics() {
    $('.pic-loading__top').removeClass('hide');
    $('.imgText .pic-container').html('').css('height', winH);
    imgText.fixLocation = [];
    imgText.swiperArr = [];
    imgText.total = 0;
    imgText.add = 0;
    imgText.count = 0;
    $.ajax({
        url: '/activity/live/album/timenote',
        type: 'get',
        dataType: 'json',
        data: {
            activityNo: ACTIVITYNO,
            from: 0,
            size: 3000
        },
        success: function(data) {
            if (data.success && (data.result instanceof Array)) {
                var result = data.result;

                if (result.length > 0) {
                    for (var i = 0, len = result.length; i < len; i++) {
                        if (result[i].type == 1) imgText.total++;
                    }
                    $('#count-total').html(imgText.total);
                    imgText.data = result;
                    imgText.count = result.length;
                    scrollImageTextPics();
                }
                $('.imgText .pic-container').css('height', 'auto');
                $('.pic-loading__top').addClass('hide');
            }
        }
    })
}
function scrollImageTextPics() {
    for (var i = 0; i < imgText.step && imgText.add < imgText.count; i++) {
        var textimage_picOne = imgText.data[imgText.add];
        var imageTextTheme = DETAIL.color == 2 ? 'white' : '';
        if (imgText.add === 0 && textimage_picOne.type === 1) {
            $('.imgText .pic-container').append('<div class="imgText-area"></div>');
        }

        if (textimage_picOne.type == 1) {
            // 当前图片的序号，用于显示当前图片所处位置
            imgText.cur++;
            imgText.cur = imgText.cur < imgText.total ? imgText.cur : imgText.total;
            // 图文中的图
            var src_ = textimage_picOne.small_img,
                hash_ = textimage_picOne.pic_hash,
                bigSrc_ = textimage_picOne.big_img,
                camer_ = textimage_picOne.camer || '--',
                avator_ = textimage_picOne.camer_head || textimage_picOne.retoucher_head,
                retoucher_ = textimage_picOne.retoucher || '--',
                oriSrc_ = textimage_picOne.origin_img,
                midsize_ = textimage_picOne.middle_size,
                orisize_ = textimage_picOne.pic_size,
                likeCount_ = textimage_picOne.like_count,
                createTime_ = textimage_picOne.create_time,
                isGif = src_.indexOf('.gif') > -1 ? '<img class="gifSign" src="http://static.qiezipai.cn/wechat/live/image/live4/gif.png">' : '',
                hasPayDom = (ISPAY && textimage_picOne.big_img) ? '<i class="iconfont icon-jiaobiao jiaobiao"></i>' : '',

                unselected = DETAIL.color == 2 ? 'unselectedw' : 'unselected',
                oldPicSelect = puzzledObj.count >= 9 ? unselected : '',
                oldSelectTag = puzzledObj.count >= 9 ? 'none' : '',
                oldPicSelectShow = puzzledObj.status ? '' : 'none';

            var textimage_picDom = '\
      <div class="pic_item picItem tiled_item " data-src="'+ src_ +'" data-time="'+ createTime_ +'" data-hash="'+ hash_ +'" data-big="'+ bigSrc_ +'" data-midSize="'+ midsize_ +'" data-ori="'+ oriSrc_ +'" data-oriSize="'+ orisize_ +'" data-likeCount="'+ likeCount_ +'"\
      data-cur="'+ imgText.cur +'" data-camer="'+ camer_ +'" data-avator="'+ avator_ +'" data-retoucher="'+ retoucher_ +'" style="background-image:url('+ src_ +')">\
      '+ isGif +'\
      '+ hasPayDom +'\
      <div class="nopay" style="background-image: url('+ src_ +')"></div>\
      <p class="nopay-masking-p none">购买原图后<br>可点击下载原图</p>\
      <div class="picSelect '+ oldPicSelect +' '+ oldPicSelectShow +'">\
      <span class="select-tag '+ oldSelectTag +'"></span>\
      </div>\
      </div>\
      ';
            imgText.fixLocation.push(src_);
            imgText.swiperArr.push(textimage_picOne);
            $('.imgText-area').last().append(textimage_picDom);
        } else {
            // 图文中的文
            var title_ = textimage_picOne.title;
            var word_ = textimage_picOne.note;
            var time_ = textimage_picOne.relate_time;
            var textDom = '\
      <section class="text_item">\
        <p class="row-start-center"><i class="iconfont icon-yuandian"></i><span class="imageText-title '+ imageTextTheme +'">'+ title_ +'</span></p>\
        <p class="imageText-word '+ imageTextTheme +'">'+ word_ +'</p>\
        <p class="imageText-time '+ imageTextTheme +'">'+ time_ +'</p>\
      </section>\
      ';
            $('.imgText .pic-container').append(textDom);
            $('.imgText .pic-container').append('<div class="imgText-area"></div>');
        }
        imgText.add++;
    }
    fixImgArea('.imgText-area');
}
// 适配图文中仅有一张或者两张时的图片样式
function fixImgArea(ele) {
    $(ele).each(function() {
        var $this = $(this), pics = $this.find('.picItem'), len = pics.length;
        if (len === 0) {
            return;
        }
        if (len === 1) {
            var smallSrc =pics.attr('data-src');
            var bigSrc = pics.attr('data-big');
            if (bigSrc) {
                pics.attr('style', 'background-image:url('+ bigSrc +')');
            } else {
                pics.attr('style', '');
                pics.find('.nopay').addClass('nopay-masking');
                pics.find('.nopay-masking-p').removeClass('none');
            }

            pics.addClass('area-one');
        }
        if (len === 2) {
            pics.addClass('area-two');
        }
    })
}
// 获取评论
function getDiscuss() {
    isLoading = true;
    $.ajax({
        url: '/activity/live/comment/list',
        type: 'get',
        dataType: 'json',
        data: {
            from: discuss.from,
            size: discuss.size,
            activityNo: ACTIVITYNO,
            sortType: discuss.sortType
        },
        success: function(res) {
            if (res.success) {
                var list = res.result.comment_list;
                if (list.length < discuss.size) discuss.end = true;
                var listDom = '';
                for (var i = 0, len = list.length; i < len; i++) {
                    var listOne = list[i];

                    var isIconLike = listOne.like ? 'icon-dianzanhou' : 'icon-dianzanqian';
                    var isCountLike = listOne.like ? 'like' : '';
                    var isWhite = DETAIL.color == 2 ? 'white' : '';

                    var item = '\
          <div class="discuss-item row-start-start '+ isWhite +'">\
            <div class="discuss-item__avator">\
              <img src="'+ listOne.wxHead +'">\
            </div>\
            <div class="discuss-item__detail">\
              <p class="discuss-item__name '+ isWhite +'">'+ listOne.wxName +'</p>\
              <p class="discuss-item__content '+ isWhite +'">'+ listOne.comment +'</p>\
              <div class="discuss-item__other row-all-center">\
                <span class="discuss-item__time '+ isWhite +'">'+ listOne.createTime +'</span>\
                <div class="discuss-item__like row-all-center">\
                  <span class="discuss-item__likecount '+ isWhite +' '+ isCountLike +'">'+ listOne.likeCount +'</span>\
                  <i class="iconfont '+ isWhite +' '+ isIconLike +' discuss-item__likeicon" data-id="'+ listOne.id +'"></i>\
                </div>\
              </div>\
            </div>\
          </div>';
                    listDom += item;
                }
                $('.discuss .pic-container').css('height', 'auto').append(listDom);
                $('.pic-loading__top').addClass('hide');
                discuss.from = $('.discuss-item').length;
                isLoading = false;
                if (discuss.end) $('.discuss-item').last().addClass('last');
                if (discuss.from > 0) $('.discuss .pic-no').addClass('none');
            }
        }
    })
}
function switchDiscussSort(index) {
    if (index == 0) {
        discuss.sortType = 2;
    } else if (index == 1) {
        discuss.sortType = 1;
    }
    $('.pic-loading__top').removeClass('hide');
    $('.discuss .pic-container').css('height', winH).html('');
    discuss.from = 0;
    discuss.end = false;
    getDiscuss();
}
function discussAdd() {
    var comment = $('#discussValue').val();
    if (!comment.trim()) {
        LANGUAGE ? toast('Please enter a comment') : toast('请输入评论内容');
        return;
    }
    if ($('#discussButton').hasClass('isOn')) {
        return;
    }
    $('.loading--box').removeClass('none');
    $('#discussButton').addClass('isOn');

    $.ajax({
        url: '/activity/live/comment/add',
        type: 'get',
        dataType: 'json',
        data: {
            comment: comment,
            activityNo: ACTIVITYNO,
        },
        success: function(res) {
            if (res.success) {
                $('#discussButton').removeClass('isOn');
                $('#discussValue').val('');

                LANGUAGE ? toast('Sent successfully！<br>Pending approval for display') : toast('评论提交成功！<br>待审核后发布显示');
            } else {
                toast('服务器异常，稍后再试');
            }
            $('.loading--box').addClass('none');
        }
    })
}
function discussLike() {
    var $this = $(this), $prev = $this.prev(), count = $prev.html() * 1;
    var commentId = $this.attr('data-id');
    var liked = $this.hasClass('icon-dianzanhou');
    var status = liked ? -1 : 5;
    liked ? count-- : count++;
    $prev.html(count);
    $this.toggleClass('icon-dianzanhou').toggleClass('icon-dianzanqian');
    $prev.toggleClass('like');
    $.ajax({
        url: '/activity/live/comment/like/add',
        type: 'get',
        dataType: 'json',
        data: {
            commentId: commentId,
            status: status,
        },
        success: function(res) {

        }
    })
}
function wxGetInfo() {
    if (!WX_INFO || (WX_INFO && WX_INFO == '0')) window.location.href = 'http://'+ HOST +'/activity/live/'+ ACTIVITYNO +'?wxStatus=noinfo';
}

// 密码验证
function praviteVerify() {
    if (!$('#password-enter').hasClass('active')) {
        $('#password-enter').addClass('active');
        var password_ = $.trim($('#password').val());
        password_ = $.md5(password_);
        if (password_ == DETAIL.serial_code) {
            setCookie('password', DETAIL.serial_code);
            $('.password-wrapper').addClass('ani-fadeoutdown');
            $('.password-masking').fadeOut(1200, function() {
                $(this).remove();
            });

            setView(DETAIL.back_img);

        } else {
            toast('密码错误!');
            $('#password-enter').removeClass('active');
            $('#password').focus();
        }
    }
}
// 适配微吼视频出现在视口内 页面上滚
function whModify() {
    if (vhall.scrollTop <= eleStatus.navST && vhall.url) {
        toTop();
    }
}
// 判断 插入微吼链接的时机
function addWhUrl(n) {
    switch (n) {
        case 1:
            if (clickPass && !clickGuide && !clickStart) {
                $('#iframeWH').attr('src', vhall.url);
            };
            break;
        case 2:
            if (clickStart && !clickGuide) {
                $('#iframeWH').attr('src', vhall.url);
            };
            break;
        case 3:
            if (clickGuide) {
                $('#iframeWH').attr('src', vhall.url);
            }
            break;
        case 4:
            if (!clickGuide && !clickPass && !clickStart) {
                $('#iframeWH').attr('src', vhall.url);
            }
    }
}
// 适配2018.05.15之前的启动屏
function modifyMainview(time) {
    if (!time) return;
    var a = time.split('.');
    var targetDate = 2018 * 365 + 5 * 30 + 15 * 1;
    var thisDate = a[0] * 365 + a[1] * 30 + a[2] * 1;
    if (thisDate < targetDate) {
        $('.main-view').addClass('modify');
    }
}
// 启动屏高度大于手机屏幕增加滚动动画
function addMainViewAni(img) {
    var $mainView = $('#main-view');
    var mainViewH = $mainView.height(), mainViewW = $mainView.width();
    var thisImg = new Image();
    thisImg.src = img;
    thisH = thisImg.height;
    thisW = thisImg.width;
    if ((mainViewH / mainViewW) < (thisH / thisW)) {
        $mainView.addClass('ani');
    }
}
function toTop() {
    $('body').animate({scrollTop: eleStatus.navST}, 1000);
}

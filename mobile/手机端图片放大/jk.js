var picLikeArr = [];
var albumArr = [];
var FIRST = [];
var SECOND = [];
var HUAXU=[];
var BIMEN=[];
var nowDate = 13;
var nowSlide = '#day1';
var scrollObj = null;
var winH = $(window).height();
var activityNo = getNo();
var picShowSwiper = null;
$(init);
function init() {
    link();
    nowDate = getDate();
    getDetail();
    getAlbum();
    $('#masking').click(function() {
        $(this).fadeOut();
    })
    //video
    var options = {
        controls: true,
        file: 'http://q.plusx.cn/video/diy/mbh201805.mp4',
        type: 'mp4',
        poster: '',
        preload: 'auto',
        autoplay: false
    };
    var player = new QiniuPlayer('demo-video', options);
    $('.video-box').on('click', function() {
        player.play();
    });
    $('#slide-masking ,.slide__right').on('click',slideFade);
    $('.tab').on('click','.tab-item',function () {
        var index = $(this).index();
        $('.tab-date').removeClass('active');
        $('.slide-box').addClass('none');
        $('.slide-box').eq(index).removeClass('none');
        $(this).find('.tab-date').addClass('active');
        $('.slide-wrapper').animate({scrollTop: 0});
        switch (index) {
            case 0:
                albumArr = FIRST;
                nowSlide = '#day1';
                break;
            case 1:
                albumArr = SECOND;
                nowSlide = '#day2';
                break;
            case 2:
                $(this).addClass('huaxu')
                albumArr = HUAXU;
                break;
            case 3:
                albumArr=BIMEN;
                nowSlide = '#bimen';
                break;

        }
        forAlbum(albumArr);
        if($(this).hasClass('huaxu')){
            $('.album-title').addClass('none')
            $('.slide__right').addClass('disabled')
        }
        else{
            $('.slide__right').removeClass('disabled')
        }
    });
    // 定位锚点
    $('.slide-wrapper').on('click', '.enter', function() {
        var this_ = $(this), mao = this_.attr('data-mao');
        slideFade();
        maoDot(mao);
    });
    $('.content').on('click', '.item-pic', function() {
        $(document).on('touchmove', touchModal);
        var parentId = $(this).parent().parent().attr('albumId');
        for(var i = 0, len = albumArr.length; i < len; i++) {
            if(albumArr[i].id == parentId) {
                scrollObj = albumArr[i];
            }
        }
        var getOri = $('#imgShowModal .swiper-slide-active img').attr('data-getOri');
        getOri === 'yes' ? $('#origin-picSize').addClass('none') : $('#origin-picSize').removeClass('none');
        var $this = $(this);
        var likeCount_ = $this.attr('data-likeCount'); //喜欢改图的数量
        var thisHash = $this.attr('data-hash'); //hash
        var thisSrc = $this.attr('data-src') || $this.attr('src');
        var showIndex = scrollObj.fixLocation.indexOf(thisSrc);
        var showNum = scrollObj.fixLocation.length;
        var add = showIndex, reduce = showIndex, oneOrTwo = 0, dom = '';
        var midsize_ = parseInt($this.attr('data-midSize'));
        var orisize_ = parseInt($this.attr('data-oriSize'));

        var time = $(this).attr('data-time');
        midsize_ = ((midsize_/(1024*1024)) >= 1) ? parseInt(midsize_/(1024*1024))+"MB" : parseInt(midsize_/1024)+"KB";
        orisize_ = ((orisize_/(1024*1024)) >= 1) ? parseInt(orisize_/(1024*1024))+"MB" : parseInt(orisize_/1024)+"KB";
        $('#picSize').html('目前大小'+midsize_);
        $('#origin-picSize').html('，原图' + orisize_);
        $('#pub-time').html(time);
        $('#like-num').html(likeCount_);

        likeStatus(likeCount_);

        testLike(thisHash); // 自己是否点过赞

        dom = '\
    <div class="swiper-slide">\
      <div class="slide_zoom_container row-all-center" style="height: '+ winH +'px">\
        <img class="swiper-lazy big_img_slide" data-src="'+ scrollObj.swiperArr[showIndex].big_img +'" data-hash="'+ scrollObj.swiperArr[showIndex].pic_hash +'" data-midSize="'+ scrollObj.swiperArr[showIndex].middle_size +'"\
        data-time="'+ scrollObj.swiperArr[showIndex].create_time +'" data-ori="'+ scrollObj.swiperArr[showIndex].origin_img +'" data-oriSize="'+ scrollObj.swiperArr[showIndex].pic_size +'" data-likeCount="'+ scrollObj.swiperArr[showIndex].like_count +'" onload=loadOnePic(this)>\
      </div>\
    </div>';
        $('.imgShowSwiper .swiper-wrapper').append(dom);

        picShowSwiper = new Swiper('.imgShowSwiper', {
            centeredSlides: true,
            preloadImages: false,
            lazyLoading: true,
            observer: true,
            initialSlide: oneOrTwo,
            onInit: function() {
                var father = $('.imgShowSwiper');
                var thisBigImg = $('.imgShowSwiper .swiper-slide-active .big_img_slide');
                var hash_ = thisBigImg.attr('data-hash');
                // 查看记录hash
                picAjax("pic_view", hash_, activityNo);
                // 长按记录hash
                thisBigImg.longPress(function(){picAjax("pic_down", hash_, activityNo);});
                touchImg(thisBigImg, father); //下拉或上拉  关闭预览
            },
            onSlideChangeStart: function() {
                $('.common-loading').addClass('none');

                var father = $('.imgShowSwiper');
                var thisBigImg = $('.imgShowSwiper .swiper-slide-active .big_img_slide');
                var hash_ = thisBigImg.attr('data-hash');
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

                $('#picSize').html('目前大小'+midsize_);
                $('#origin-picSize').html('，原图' + orisize_);
                $('#pub-time').html(time);
                // $('#like-num').html(likeCount_);
                testLike(hash_); // 自己是否点过赞

                picAjax("pic_view", hash_, activityNo);
                thisBigImg.longPress(function(){picAjax("pic_down", hash_, activityNo);});

                touchImg(thisBigImg, father); //下拉或上拉  关闭预览

                //利用hash去获得列表中likecount的数量 方法不好 暂用
                $('.content').find('.item-pic').each(function() {
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
              <img class="swiper-lazy big_img_slide" data-src="'+ scrollObj.swiperArr[reduce].big_img +'" data-hash="'+ scrollObj.swiperArr[reduce].pic_hash +'" data-midSize="'+ scrollObj.swiperArr[reduce].middle_size +'"\
              data-time="'+ scrollObj.swiperArr[reduce].create_time +'" data-ori="'+ scrollObj.swiperArr[reduce].origin_img +'" data-oriSize="'+ scrollObj.swiperArr[reduce].pic_size +'" data-likeCount="'+ scrollObj.swiperArr[reduce].like_count +'" onload=loadOnePic(this)>\
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
              <img class="swiper-lazy big_img_slide" data-src="'+ scrollObj.swiperArr[add].big_img +'" data-hash="'+ scrollObj.swiperArr[add].pic_hash +'" data-midSize="'+ scrollObj.swiperArr[add].middle_size +'"\
              data-time="'+ scrollObj.swiperArr[add].create_time +'" data-ori="'+ scrollObj.swiperArr[add].origin_img +'" data-oriSize="'+ scrollObj.swiperArr[add].pic_size +'" data-likeCount="'+ scrollObj.swiperArr[add].like_count +'" onload=loadOnePic(this)>\
            </div>\
          </div>';
                    picShowSwiper.appendSlide(dom);
                    picShowSwiper.update(true);

                }
                var $this = $('.imgShowSwiper .swiper-slide-next .slide_zoom_container');
                new RTP.PinchZoom($this, {});
            }
        })
        if(showIndex == 0 && showNum > 1) {
            add++;
            var dom = '\
      <div class="swiper-slide">\
        <div class="slide_zoom_container row-all-center" style="height: '+ winH +'px">\
          <img class="swiper-lazy big_img_slide" data-src="'+ scrollObj.swiperArr[add].big_img +'" data-hash="'+ scrollObj.swiperArr[add].pic_hash +'" data-midSize="'+ scrollObj.swiperArr[add].middle_size +'"\
          data-time="'+ scrollObj.swiperArr[add].create_time +'" data-ori="'+ scrollObj.swiperArr[add].origin_img +'" data-oriSize="'+ scrollObj.swiperArr[add].pic_size +'" data-likeCount="'+ scrollObj.swiperArr[add].like_count +'" onload=loadOnePic(this)>\
        </div>\
      </div>';
            picShowSwiper.appendSlide(dom);
            picShowSwiper.update(true);
        } else if(showIndex == showNum - 1 && showNum > 1) {
            reduce--;
            var dom = '\
      <div class="swiper-slide">\
        <div class="slide_zoom_container row-all-center" style="height: '+ winH +'px">\
          <img class="swiper-lazy big_img_slide" data-src="'+ scrollObj.swiperArr[reduce].big_img +'" data-hash="'+ scrollObj.swiperArr[reduce].pic_hash +'" data-midSize="'+ scrollObj.swiperArr[reduce].middle_size +'"\
          data-time="'+ scrollObj.swiperArr[reduce].create_time +'" data-ori="'+ scrollObj.swiperArr[reduce].origin_img +'" data-oriSize="'+ scrollObj.swiperArr[reduce].pic_size +'" data-likeCount="'+ scrollObj.swiperArr[reduce].like_count +'" onload=loadOnePic(this)>\
        </div>\
      </div>';
            picShowSwiper.prependSlide(dom);
            picShowSwiper.update(true);
        } else if(showIndex != 0 && showIndex != showNum - 1 && showNum > 2) {
            add++;
            reduce--;
            var domPrev = '\
      <div class="swiper-slide">\
        <div class="slide_zoom_container row-all-center" style="height: '+ winH +'px">\
          <img class="swiper-lazy big_img_slide" data-src="'+ scrollObj.swiperArr[reduce].big_img +'" data-hash="'+ scrollObj.swiperArr[reduce].pic_hash +'" data-midSize="'+ scrollObj.swiperArr[reduce].middle_size +'"\
          data-time="'+ scrollObj.swiperArr[reduce].create_time +'" data-ori="'+ scrollObj.swiperArr[reduce].origin_img +'" data-oriSize="'+ scrollObj.swiperArr[reduce].pic_size +'" data-likeCount="'+ scrollObj.swiperArr[reduce].like_count +'" onload=loadOnePic(this)>\
        </div>\
      </div>';
            picShowSwiper.prependSlide(domPrev);
            picShowSwiper.update(true);
            var domNext = '\
      <div class="swiper-slide">\
        <div class="slide_zoom_container row-all-center" style="height: '+ winH +'px">\
          <img class="swiper-lazy big_img_slide" data-src="'+ scrollObj.swiperArr[add].big_img +'" data-hash="'+ scrollObj.swiperArr[add].pic_hash +'" data-midSize="'+ scrollObj.swiperArr[add].middle_size +'"\
          data-time="'+ scrollObj.swiperArr[add].create_time +'" data-ori="'+ scrollObj.swiperArr[add].origin_img +'" data-oriSize="'+ scrollObj.swiperArr[add].pic_size +'" data-likeCount="'+ scrollObj.swiperArr[add].like_count +'" onload=loadOnePic(this)>\
        </div>\
      </div>';
            picShowSwiper.appendSlide(domNext);
            picShowSwiper.update(true);
        }
        $('#imgShowModal').fadeIn().find('.imgShowSwiper').fadeIn();

        // 图片放大
        $('.slide_zoom_container').each(function(){
            new RTP.PinchZoom($(this), {});
        })
        // 点击记录hash
        picAjax("pic_click", thisHash, activityNo);
    })
    // 点赞
    $('.like').click(function() {
        var $this = $(this);
        var num = parseInt($('#like-num').html());
        var hash_ = $('#imgShowModal .swiper-slide-active img').attr('data-hash');
        var likeCount_ = $('#imgShowModal .swiper-slide-active img').attr('data-likeCount');
        if(!$this.hasClass('like-ani')) {
            num++;
            $('#like-num').html(num);
            likeStatus(num);

            $('.itemPic').each(function() {
                var $this_ = $(this);
                var thisHash = $this_.attr('data-hash');
                if(thisHash == hash_) {
                    $this_.attr('data-likeCount', num);
                }
            })
            iLike(hash_, 5);

        }else {
            num--;
            $('#like-num').html(num);

            likeStatus(num);

            //利用hash去获得列表中likecount的数量 方法不好 暂用
            $('.content').find('.item-pic').each(function() {
                var $this_ = $(this);
                var thisHash = $this_.attr('data-hash');
                var thisCount = $this_.attr('data-likeCount');
                if(thisHash == hash_) {
                    $this_.attr('data-likeCount', --thisCount);
                }
            })
            iLike(hash_, -1);
        }
        $(this).toggleClass('like-ani');
    })

    // 请求原图
    $('.originPic-box').click(function() {
        $('.common-loading').removeClass('none');
        $('#imgShowModal .swiper-slide-active img').attr('data-getOri', 'yes');
        var oriSrc = $('#imgShowModal .swiper-slide-active img').attr('data-ori');
        var oriSize = $('#origin-picSize').html();
        var oriImg = new Image();
        oriImg.src = oriSrc;
        oriImg.onload = function() {
            $('#imgShowModal .swiper-slide-active img').attr('src', oriSrc);
            $('#picSize').html('目前大小' + oriSize.slice(3));
            $('#origin-picSize').addClass('none');
            $('.common-loading').addClass('none');
        }
    })

    // 关闭大图预览
    $('.modalClose').click(function() {
        $('.common-loading').addClass('none');
        $(document).off('touchmove');
        $('#imgShowModal').fadeOut(200,function() {
            picLikeArr = []; //关闭时清空 自己点赞过图片的数组
            getLikes(); // 重新获取一次;
            $('#imgShowModal .modal_footer').fadeIn();
            $('.imgShowSwiper .swiper-wrapper').empty();
            picShowSwiper.destroy(false,true);
            $(this).removeClass('like-ani');
        });
    })
}
function getDetail() {
    $.ajax({
        async: false,
        url: '/activity/live/detail',
        type: 'get',
        dataType: 'json',
        data: {activityNo: activityNo},
        success: function(data) {
            if(data.success) {
                var result = data.result;
                // 微信分享
                shareImgUrl = result.wx_img;
                sharedescContent = result.wx_desc;
                shareTitle = result.wx_title;
                changeShareLink();
            }
        }
    })
}
//相册
function getAlbum(){
    $.ajax({
        // async: false,
        url: '/activity/live/albums',
        type: 'get',
        dataType: 'json',
        data: {
            activityNo: activityNo,
            count: 1000
        },
        success:function(data){
            if(data.success && data.result.length > 0) {
                var result = data.result;
                for (var i = 0, len = result.length; i < len; i++) {
                    var album = {
                        preloadImg: [],
                        fixLocation: [],
                        swiperArr: [],
                        id: result[i].album_id,
                        name: result[i].name
                    };

                    switch (result[i].description) {
                        case '1':
                            FIRST.push(album);
                            break;
                        case '2':
                            SECOND.push(album);
                            break;
                        case '3':
                            HUAXU.push(album);
                            break;
                        case '4':
                            BIMEN.push(album);
                            break;
                    }
                }
                switch (nowDate) {
                    case 21:
                        albumArr = FIRST;
                        break;
                    case 22:
                        albumArr = SECOND;
                        break;
                    // case 23:
                    //     albumArr = HUAXU;
                    //     break;
                    // case 24:
                    //     albumArr = BIMEN;
                    //     break;
                    // default:
                    //     albumArr = FIRST;
                }
                forAlbum(albumArr);
            }
        }
    })
}
// 获得相应相册的图片
function forAlbum(arr) {
    $('.album-item').remove();
    for (var j = 0, alen = arr.length; j < alen; j++) {
        var dom = '\
    <div class="album-item none" id="album'+ arr[j].id +'" data-mao="'+ (j+1) +'" albumId="'+ arr[j].id +'">\
      <p class="album-title">'+ arr[j].name +'</p>\
      <div class="album-box"></div>\
    </div>';
        $('.content').append(dom);
        getAlbumPics(arr[j]);

    }
}

function getAlbumPics(obj) {
    $.ajax({
        url: '/activity/live/album/one',
        type: 'get',
        // async: false,
        dataType: 'json',
        data: {albumId: obj.id, picIndex: 0, count: 1000, isNew: false},
        success: function(data) {
            if (data.success) {
                if (data.result.pics.length > 0) {
                    var result = data.result;
                    var album = '#album' + obj.id;
                    var $albumContent = $(album).find('.album-box');
                    $(album).removeClass('none');
                    var mao_ = $(album).attr('data-mao');
                    $(nowSlide).find('.slide-item').each(function() {
                        var thisMao_ = $(this).attr('data-mao');
                        if(thisMao_ == mao_) {
                            $(this).addClass('enter');
                            $(this).find('.slide-item-head').addClass('active');
                        }
                    })

                    var a = [];
                    for (var i = 0, len = result.pics.length; i < len; i++) {
                        var dom = '<div class="item-pic" style="background-image: url('+ result.pics[i].small_img +')" data-src="'+ result.pics[i].small_img +'" data-hash="'+ result.pics[i].pic_hash +'"\
            data-big="'+ result.pics[i].big_img +'" data-ori="'+ result.pics[i].origin_img +'" data-midSize="'+ result.pics[i].middle_size +'" data-oriSize="'+ result.pics[i].pic_size +'" data-likeCount="'+ result.pics[i].like_count +'"></div>';
                        $albumContent.append(dom);
                        a.push(data.result.pics[i].small_img);

                    }
                    obj.fixLocation = a.concat();
                    obj.preloadImg = data.result.pics.concat();
                    obj.swiperArr = data.result.pics.concat();

                    waitShow();
                } else {
                    waitShow();
                }
            }
        }
    })
}
function getDate() {
    return new Date().getDate();
}
function maoDot(mao)
{
    var head_height = $('header').height(), this_top, scrollTo, scrollTop;
    $('.content').find('.album-item').each(function() {
        var mao_ = $(this).attr('data-mao');
        if(mao_ === mao) {
            scrollTop = $('.content').scrollTop();
            this_top = $(this).offset().top;
            scrollTo = this_top - head_height + scrollTop;
            $('.content').animate({scrollTop: scrollTo});
        }
    })
}
function waitShow() {
    if ($('.item-pic').length > 0) {
        $('.slide__right').removeClass('none')
        $('.tab-date').css({'color':'red'})
        $('.bimen').removeClass('none')
        $('.wait').addClass('none');
        $('footer').addClass('none')
    } else {
        $('.slide__right').addClass('none')
        $('.wait').removeClass('none');
        $('footer').removeClass('none')
        $('.bimen').addClass('none')

    }
}
function slideFade() {
    $('#slide-masking').fadeToggle();
    $('.slide-wrapper').toggleClass('slide-wrapper--move');
    $('body').toggleClass('body-hidden');
    $('video').toggleClass('none');
}

function likeStatus(count) {
    if(count > 0) {
        $('#noLike').addClass('none');
        $('#hasLike').removeClass('none');
    }else {
        $('#hasLike').addClass('none');
        $('#noLike').removeClass('none');
    }
}
// 匹配自己是否点赞
function testLike(hash_) {
    picLikeArr.indexOf(hash_) > -1 ? $('.like').addClass('like-ani') : $('.like').removeClass('like-ani');
}
// 点赞
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
            if(data.success) {
                status == 5 ? picLikeArr.push(hash_) : picLikeArr.splice($.inArray(hash_,picLikeArr),1);
            }
        }
    })
}
// 获得点赞的数组
function getLikes() {
    $.ajax({
        url: '/activity/live/pic/like/info',
        type: 'get',
        dataType: 'json',
        data: {activityNo: activityNo},
        success: function(data) {
            if(data.success) {
                var picLike = data.result.picLike;
                for(var k in picLike) {
                    picLikeArr.push(k);
                }
            }
        }
    })
}
function changeShareLink() {
    wx.ready(function() {
        wx.onMenuShareAppMessage({
            title: shareTitle , // 分享标题
            desc: sharedescContent, // 分享描述
            link: realShareLink, // 分享链接
            imgUrl: shareImgUrl, // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '',
            success: function() {
                $.ajax({
                    url: '/statistics/shareClick',
                    type: 'GET',
                    dataType: 'json',
                    data: { key: UvUrl, params:"activityNo="+activityNo },
                });
            },
        });
        wx.onMenuShareTimeline({
            title: sharedescContent, // 分享标题
            link: realShareLink, // 分享链接
            imgUrl: shareImgUrl,
            success: function() {
                $.ajax({
                    url: '/statistics/shareClick',
                    type: 'GET',
                    dataType: 'json',
                    data: {key: UvUrl,
                        params: 'activityNo=' + activityNo
                    },
                });
            },
        });
    })
}
// 获取链接路 得到参数
function getNo() {
    var path = window.location.pathname;
    var activityNo = path.split('/')[path.split('/').length - 1];
    return activityNo;
}
function link(){
    var link = document.createElement('link');
    link.setAttribute('type','text/css');
    link.setAttribute('rel','stylesheet');
    link.setAttribute('href','http://static.1sight.cn/wechat/lib/swiper-3.4.2.min.css');
    document.head.appendChild(link);

}





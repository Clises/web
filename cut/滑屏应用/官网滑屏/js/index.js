var winH = $(window).height()
$(function () {
    navSlider()
    allSwiper()
    // getContent()
    // $('.comment-box').on('click', '.picItem', bigPicShow())
    // $('.img-close').on('click', bigPicClose())
})

function allSwiper() {
    allSwiper = new Swiper('.swiper-container-all', {
        direction: 'vertical',
        navigation: {
            nextEl: '.btn-scroll',
        },
        on: {
            init: function () {
                $('.startPage').addClass('slide-move')
            },
            slideChange: function (even) {
                var index_ = this.activeIndex
                if (index_ == 0) {
                    $('nav').addClass('none')
                    $('.hamburger-inner').removeClass('hamburger-inner-black')
                    allSwiper.allowSlidePrev = false;
                    allSwiper.allowSlideNext = true;
                }
                else {
                    $('nav').removeClass('none')
                    $('.hamburger-inner').addClass('hamburger-inner-black')
                    allSwiper.allowSlidePrev = true;
                    allSwiper.allowSlideNext = false;
                }
                //点击上滑设置
                if (this.isEnd) {
                    this.navigation.$nextEl.css('display', 'none');

                } else {
                    this.navigation.$nextEl.css('display', 'block');
                }

            }
        }


    });
    //设置次页内部滑动
    var startScroll, touchStart, touchCurrent;
    allSwiper.slides.on('touchstart', function (e) {
        startScroll = this.scrollTop;
        touchStart = e.targetTouches[0].pageY;
    }, true);
    allSwiper.slides.on('touchmove', function (e) {
        touchCurrent = e.targetTouches[0].pageY;
        var touchesDiff = touchCurrent - touchStart;
        var slide = this;
        var onlyScrolling =
            (slide.scrollHeight > slide.offsetHeight) && //allow only when slide is scrollable
            (
                (touchesDiff < 0 && startScroll === 0) || //start from top edge to scroll bottom
                (touchesDiff > 0 && startScroll === (slide.scrollHeight - slide.offsetHeight)) || //start from bottom edge to scroll top
                (startScroll > 0 && startScroll < (slide.scrollHeight - slide.offsetHeight)) //start from the middle
            );
        if (onlyScrolling) {
            e.stopPropagation();
        }
    }, true);
}

// function getContent() {
//     $.ajax({
//         url: 'data/datail.json',
//         type: 'get',
//         dataType: 'json',
//         async: false,
//         success: function (data) {
//             if (data.success) {
//                 //loding
//                 // setTimeout(function () {
//                 //     $('.loading').addClass('none');
//                 // }, 1000)
//                 // })
//                 /*banner_img*/
//                 for (var i = 0, l = data.result.banner.length; i < l; i++) {
//                     for (var key in data.result.banner[i]) {
//                         var banner_img = data.result.banner[i][key];
//                         console.log(banner_img)
//                         var dom_ = '<div class="swiper-slide">' +
//                             '<img src="' + banner_img + '"/>' +
//                             '</div>'
//                         $('.banner_container .bannerSwiper .swiper-wrapper').append(dom_);
//                         var bannerswiper = new Swiper(".bannerSwiper", {
//                             preloadImages: true,
//                             speed: 2000,
//                             autoplay: {
//                                 delay: 2000
//                             },
//                         })
//                     }
//                 }
//                 //图片
//                 if (data.result.pics.length > 1) {
//                     for (var i = 0, len = data.result.pics.length; i < len; i++) {
//                         var pic_ = data.result.pics[i];
//                         var src_ = pic_.small_img, bigSrc_ = pic_.big_img, text_img = pic_.text_img
//                         var dom = '<div class="picItem" data-text="' + text_img + '"><img src="' + src_ + '"/></div>';
//                         $('.comment-box').append(dom);
//                         var slideDom = '<div class="swiper-slide">' +
//                             '<div class="slide_zoom_container row-all-center" style="height: ' + winH + 'px">' +
//                             '<img src="' + bigSrc_ + '" class="swiper-lazy big_img_slide" data-text="' + text_img + '"/>' +
//                             '</div>'
//                         '</div>';
//                         $('.imgShowSwiper .swiper-wrapper').append(slideDom);
//
//                     }
//
//                 }
//             }
//         }
//     })
//
// }
//
// function bigPicShow() {
//     $(document).on('touchmove', touchModal);   //开启触摸
//     var $this = $(this);
//     var text_img = $this.attr('data-text');
//     $('.footer').html(text_img)
//     var showIndex = $(this).index();
//     picShowSwiper = new Swiper('.imgShowSwiper', {
//         centeredSlides: true,
//         preloadImages: true,
//         observer: true,
//         on: {
//             Init: function () {
//                 var father = $('.imgShowSwiper');
//                 var thisBigImg = $('.imgShowSwiper .swiper-slide-active .big_img_slide');
//                 touchImg(thisBigImg, father); //下拉或上拉  关闭预览
//                 $('.slide_zoom_container').each(function () {
//                     new RTP.PinchZoom($(this), {});
//                 })
//             },
//             slideChangeTransitionStart: function () {
//                 var father = $('.imgShowSwiper');
//                 var thisBigImg = $('.imgShowSwiper .swiper-slide-active .big_img_slide');
//                 var text_img = thisBigImg.attr('data-text');
//                 $('.footer').html(text_img)
//                 touchImg(thisBigImg, father); //下拉或上拉  关闭预览
//             }
//         }
//     })
//     $('.imgShowSwiper').fadeIn();
//     picShowSwiper.slideTo(showIndex);   //swiper的方法
// }
//
// function bigPicClose() {
//     $(document).off('touchmove');
//     $('.imgShowSwiper').fadeOut(200, function () {
//         picShowSwiper.destroy(false, true);
//     });
// }
function navSlider() {
    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('.slider-bottom').toggleClass('slider-bottom-active');
    })
    // 返回
    // $('.return-icon').click(function() {
    //     window.history.back(-1);
    // })
    var commonslider = '\
  <div class="slider-bottom col-all-start">\
    <a href="#" class="slider-title-black">blog</a>\
    <a href="#" class="slider-title-black">album</a>\
    <a href="#" class="slider-title-black">github</a>\
    <a href="#" class="slider-title-black">sina</a>\
    <a href="#" class="slider-title-black">about</a>\
    <div>\
    '
    $('body').append(commonslider);
}

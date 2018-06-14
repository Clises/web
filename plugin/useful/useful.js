
//上滑下滑关闭预览
function touchImg(son, father) {

    var father = father[0];
    var son = son[0];
    var parentOpacity = 1;
    var imgScale = 1;

    var iw = son.offsetWidth, ih = son.offsetHeight;
    var startY, moveY, touchAngle;

    son.addEventListener('touchstart',function(ev){
        if(ev.targetTouches.length === 1) {
            son.style.transition = '';
            son.style.webkitTransition = '';
            father.style.transition = '';
            father.style.webkitTransition = '';

            startY = ev.touches[0].clientY;
            startX = ev.touches[0].clientX;
        }
    },false)
    son.addEventListener('touchmove',function(ev){
        if(ev.targetTouches.length === 1) {
            moveY = ev.touches[0].clientY - startY;
            moveX = ev.touches[0].clientX - startX;

            parentOpacity = 1 - (Math.abs(moveY) / 500);
            imgScale = 1 - (Math.abs(moveY) / 500);

            // 触摸滑动角度
            touchAngle = Math.abs((moveY / moveX));
            if(touchAngle > 1 && dragClose) {
                son.style.webkitTransform = 'translate('+ moveX +'px, '+ moveY +'px) scale('+ imgScale +')';
                son.style.transform = 'translate('+ moveX +'px, '+ moveY +'px) scale('+ imgScale +')';
                father.style.background = 'rgba(0, 0, 0, '+ parentOpacity +')';
                $('#imgShowModal .modal_footer').fadeOut();
            }
        }

    },false)
    son.addEventListener('touchend',function(ev){
        if(touchAngle > 1 && dragClose) {
            if(Math.abs(moveY) > 130) {
                son.style.webkitTransition = 'all .5s';
                son.style.transition = 'all .5s';
                son.style.webkitTransform = 'scale(0)';
                son.style.transform = 'scale(0)';
                $('video').removeClass('none');
                $('#imgShowModal').fadeOut(200, function() {
                    picLikeArr = []; //关闭时清空 自己点赞过图片的数组
                    getLikes(); // 重新获取一次；
                    $('#imgShowModal .modal_footer').fadeIn();
                    picShowSwiper.destroy(false,true);
                });
                $(document).off('touchmove');
            }else {
                son.style.webkitTransform = 'translateY(0) scale(1)';
                son.style.transform = 'translateY(0) scale(1)';
                son.style.webkitTransition = 'all .2s';
                son.style.transition = 'all .2s';

                father.style.background = 'rgba(0, 0, 0, 1)';
                father.style.webkitTransition = 'all .5s';
                father.style.transition = 'all .5s';

                $('#imgShowModal .modal_footer').fadeIn();
            }
        }
    })
}

//swiper内容超出添加行向滚动条
//后期合并
function swiper(swiper) {
    var startScroll, touchStart, touchCurrent;
    swiper.slides.on('touchstart', function (e) {
        startScroll = this.scrollTop;
        touchStart = e.targetTouches[0].pageY;
    }, true);
    swiper.slides.on('touchmove', function (e) {
        touchCurrent = e.targetTouches[0].pageY;
        var touchesDiff = touchCurrent - touchStart;
        var slide = this;
        var onlyScrolling =
            ( slide.scrollHeight > slide.offsetHeight ) && //allow only when slide is scrollable
            (
                ( touchesDiff < 0 && startScroll === 0 ) || //start from top edge to scroll bottom
                ( touchesDiff > 0 && startScroll === ( slide.scrollHeight - slide.offsetHeight ) ) || //start from bottom edge to scroll top
                ( startScroll > 0 && startScroll < ( slide.scrollHeight - slide.offsetHeight ) ) //start from the middle
            );
        if (onlyScrolling) {
            e.stopPropagation();
        }
    }, true);
}
//swiper内容超出添加纵向滚动条
function swiper(swiper) {
    var startScroll, touchStart, touchCurrent;
    swiper.slides.on('touchstart', function (e) {
        startScroll = this.scrollLeft;
        touchStart = e.targetTouches[0].pageX;
    }, true);
    swiper.slides.on('touchmove', function (e) {
        touchCurrent = e.targetTouches[0].pageX;
        var touchesDiff = touchCurrent - touchStart;
        var slide = this;
        var onlyScrolling =
            ( slide.scrollWidth > slide.offsetWidth ) && //allow only when slide is scrollable
            (
                ( touchesDiff < 0 && startScroll === 0 ) || //start from left edge to scroll right
                ( touchesDiff > 0 && startScroll === ( slide.scrollWidth - slide.offsetWidth ) ) || //start from right edge to scroll left
                ( startScroll > 0 && startScroll < ( slide.scrollWidth - slide.offsetWidth ) ) //start from the middle
            );
        if (onlyScrolling) {
            e.stopPropagation();
        }
    }, true);

}

//drag拖拽

function drag(els,ele) {
    var contW=ele.width();
    var contH=ele.height();
    var startX,startY,sX,sY,moveX,moveY;
    var winW=els.width();
    var winH=els.height();
    ele.on({
        touchstart:function(e){
            startX = e.originalEvent.targetTouches[0].pageX;
            startY = e.originalEvent.targetTouches[0].pageY;
            sX=$(this).offset().left;
            sY=$(this).offset().top;
            leftX=startX-sX;
            rightX=winW-contW+leftX;
            topY=startY-sY;
            bottomY=winH-contH+topY;
        },
        touchmove:function(e){
            e.preventDefault();
            moveX=e.originalEvent.targetTouches[0].pageX;
            moveY=e.originalEvent.targetTouches[0].pageY;
            if(moveX<leftX){moveX=leftX;}
            if(moveX>rightX){moveX=rightX;}
            if(moveY<topY){moveY=topY;}
            if(moveY>bottomY){moveY=bottomY;}
            $(this).css({
                "left":moveX+sX-startX,
                "top":moveY+sY-startY,
            });
        },
        mousedown: function(ev){
            var patch = parseInt($(this).css("height"))/2;
            $(this).mousemove(function(ev){
                var oEvent = ev || event;
                var oX = oEvent.clientX;
                var oY = oEvent.clientY;
                var t = oY - patch;
                var l = oX - patch;
                var w = els.width() - $(this).width();
                var h = els.height() - $(this).height();
                if(t<0){t = 0}
                if(l<0){l=0}
                if(t>h){t=h}
                if(l>w){l=w}
                $(this).css({top:t,left:l})
            });
            $(this).mouseup(function(){
                $(this).unbind('mousemove');
            });
        }
    });


}



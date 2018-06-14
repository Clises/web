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

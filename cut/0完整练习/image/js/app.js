function initwidht() {
    if ($(window).width() < 900) {
        $('#sheet').attr('href', "css/mobile.css");
    } else {
        $('#sheet').attr('href', "css/main.css");
    }
}
initwidht();
window.onresize = function () {
    initwidht()
}
$(function () {

    $('.h_nav li,.ph_nav_list li').click(function(){
        if($(this).index() == 0){
            $('html, body').stop().animate({scrollTop:0},300);
        }
        if($(this).index() == 1){
            $('html, body').stop().animate({scrollTop:$("#question").offset().top-100},300);
        }
        if($(this).index() == 2){
            $('html, body').stop().animate({scrollTop:$("#technology").offset().top-100},300);
        }
        if($(this).index() == 3){
            $('html, body').stop().animate({scrollTop:$("#book").offset().top-100 },300);
        }
        if($(this).index() == 4){
            $('html, body').stop().animate({scrollTop:$("#team").offset().top-100 },300);
        }
        if($(this).index() == 5){
            $('html, body').stop().animate({scrollTop:$("#contact").offset().top-100 },300);
        }
        try {
            $('.ph_nav').hide();
        } catch (error) {

        }
    })

    $('.icon_nav').click(function(){
        var _h = document.documentElement.clientHeight;
        $('.ph_nav').toggle();
        $('.ph_nav').css('height',_h-58+"px" );
    })

    $('.page5_fq_item').click(function(ev){
            ev.stopPropagation()
            try {
                $(this).find('.page5_tips').toggle();
            } catch (error) {

            }

    })

    $(document).click(function(){
        $('.page5_tips').hide();
    })
})

$(function () {
    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12', 'page13', 'page14', 'page15', 'page16'],
        'afterLoad': function (anchorLink, index) {
            if (index == 1) {
                $(".leftbg").hide();
                $(".rightbg").hide();
                $(".gobtn").hide();


            }
            if (index == 2) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page2 .text").animate({
                    left: "0",
                })

            }
            if (index == 3) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page3 .text").animate({
                    left: "0",
                    opacity:"1"
                },1000)
            }
            if (index == 4) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page4 .text").animate({
                    bottom: ".9rem",
                    opacity:"1"
                },1000)

            }
            if (index == 5) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page5 .text").animate({
                    right: "0",
                    opacity:"1"
                },1000)
            }
            if (index == 6) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page6 .text").animate({
                    left: "0",
                    opacity:"1"
                },1000)
            }
            if (index == 7) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page7 .text").animate({
                    bottom: ".9rem",
                    opacity:"1"
                },1000)
            }
            if (index == 8) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page8 .text").animate({
                    right: "0",
                    opacity:"1"
                },1000)
            }
            if (index == 9) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page9 .text").animate({
                    left: "0",
                    opacity:"1"
                },1000)
            }
            if (index == 10) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page10 .text").animate({
                    bottom: ".9rem",
                    opacity:"1"
                },1000)
            }
            if (index == 11) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page11 .text").animate({
                    bottom: ".9rem",
                    opacity:"1"
                },1000)
            }
            if (index == 12) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page12 .text").animate({
                    left: "0",
                    opacity:"1"
                },1000)
            }
            if (index == 13) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".img-cartoon img").show();
                $(".img-airplane img").addClass("img-cartoon")

            }
            if (index == 14) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page14-left").show()

                $(".page14-left").addClass("invitation-cartoon14")
                $(".page14 .text").delay(2000).animate({
                    left: "0",
                    opacity:"1"
                },500)
            }

            if (index == 15) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page15 .text img").animate({
                    opacity: "1"
                }, 500)
            }
        },
        'onLeave': function (index, direction) {
            if (index == 1) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
            }
            if (index == 2) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page2 .text").animate({
                    left: "100%"
                })
            }
            if (index == 3) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page3 .text").animate({
                    left: "-100%",
                    opacity:"0"
                })
            }
            if (index == 4) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page4 .text").animate({
                    bottom: "-100%",
                    opacity:"0"
                })
            }
            if (index == 5) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page5 .text").animate({
                    right: "-100%",
                    opacity:"0"
                })
            }
            if (index == 6) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page6 .text").animate({
                    left: "-100%",
                    opacity:"0"
                })
            }
            if (index == 7) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page7 .text").animate({
                    bottom: "-100%",
                    opacity:"0"
                })
            }
            if (index == 8) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page8 .text").animate({
                    right: "-100%",
                    opacity:"0"
                })
            }
            if (index == 9) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page9 .text").animate({
                    left: "-100%",
                    opacity:"0"
                })
            }
            if (index == 10) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page10 .text").animate({
                    bottom: "-100%",
                    opacity:"0"
                })
            }
            if (index == 11) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page11 .text").animate({
                    bottom: "-100%",
                    opacity:"0"
                })
            }
            if (index == 12) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page12 .text").animate({
                    left: "-100%",
                    opacity:"0"
                })
            }
            if (index == 13) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();

            }
            if (index == 14) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").show();
                $(".page14 .text").animate({
                    left: "100%"
                });
                $(".page14-left").removeClass("invitation-cartoon14")
                $(".page14-left").hide()
            }
            if (index == 15) {
                $(".leftbg").show();
                $(".rightbg").show();
                $(".gobtn").hide();
                $(".page15 .text img").animate({
                    opacity: "0"
                })
            }
        },


    });
    /*setInterval(function(){
        $.fn.fullpage.moveSectionDown();
    },10000)*/

})

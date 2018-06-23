$(init)
eleStatus = {    //nav滚动条滚动距离
    srollnow: 0,
    offsetLeft: 0
}
nav_list=$('.case-classify__details li').clone(true)
function init() {
    paging();
    $('.drop-down-content .list').append(nav_list)
    $('.case-classify__details').on('click', 'li', classify)
    $('.open').on('click', allOpen)
    $('.list').on('click', 'li', allList)
    $('.close,.mask').on('click', allClose)

}
/*翻页*/
function paging(index) {
    var totalPage = 1;//总共多少页
    var totalRecords = 4;//总共多少条数据
    var pageSize = 6;//每页显示多少case
    /*
    * pno  默认加载第一页内容
    * */
    loadList(1); //初始化显示第一页
    function loadList(pno) {
        $.ajax({
            async: false,
            url: 'data.json',   //  获取地址
            type: 'post',
            dataType: 'json',
            data: {'pageNum': pno, 'pageSize': pageSize},    //传递参数
            success: function (data) {
                console.log(data);
                console.log(pno);
                if (data.success) {
                    var count = data.total;
                    var result = data.result.case;
                    totalRecords = count; //总共多少case
                    totalPage = Math.ceil(count / pageSize); //总共多少页
                    var datalist = "";
                    $.each(result, function (i, item) {
                        datalist += '<a href="#" target="_blank"class="case-item__items">' +
                            '<div class="case-items__photo">' +
                            '<img src="' + item.photo + '">' +
                            '</div>' +
                            '<div class="case-items__msg">' +
                            '<h2>' + item.title + '</h2>' +
                            '<div class="case-items__tag">' +
                            '<span class="case-items__tags">' + item.tags + ' </span>' +
                            '</div>' +
                            '<div class="case-items__sponsor">' +
                            '<span class="sponsor--icon"></span>' +
                            '<span class="sponsor">' + item.sponsor + '</span>' +
                            '</div>' +
                            '</div>' +
                            '</a>';
                    });
                    $(".all").html(datalist);  //渲染dom
                    $('#count_total').text(totalPage);
                    $('.M-box').pagination({
                        showData: pageSize,
                        pageCount: totalPage,
                        current: pno,//当前第几页
                        jump: true,
                        coping: true,
                        prevContent: '上一页',
                        nextContent: '下一页',
                        callback: PageClick
                    });
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('网络连接异常，请重试！')
            }
        })
    }

    function PageClick(index){
        $('#count_now').text(index.getCurrent());
        loadList(index.getCurrent());//点击分页加载列表数据  */
    }
}
/*分类*/
function classify() {
    var $this = $(this), $index = $this.index();
    $(".case-classify__details li").removeClass("active").eq($index).addClass("active");
    $('.list').find('li').removeClass("active").eq($index).addClass("active");
    panel($index)
    eleStatus.srollnow = $('.case-classify__details')[0].scrollLeft;
    eleStatus.offsetLeft = $(this).offset().left;
    if (eleStatus.offsetLeft > 220) {
        $('.case-classify__details').animate({'scrollLeft': eleStatus.srollnow + 90}, 1000);

    }

}
/*全部分类*/
function allList() {
    $('html,body').removeClass('ovfHiden');
    var $this = $(this), $index = $this.index();
    $(".list li").removeClass("active").eq($index).addClass("active")
    $('.case-classify__details').find('li').removeClass("active").eq($index).addClass("active");
    panel($index)
    $('.drop-down-content').css({'height': '0'})
    $('.mask').css({'display': 'none'})
    $('.open').css({'display': 'block'})
    eleStatus.offsetLeft = $('.case-classify__details').find('li').eq($index).get(0).offsetLeft;
    if ($('.case-classify__details').find('li').eq($index).hasClass('active')) {
        $('.case-classify__details')[0].scrollLeft = eleStatus.offsetLeft - 20;
    }
}
function allOpen() {

    $('.mask,.drop-down-content').bind("touchmove", function (e) {
        e.preventDefault();
    });
    $('html,body').addClass('ovfHiden');
    $(this).css({'display': 'none'})
    $('.mask').css({'display': 'block'})
    $('.drop-down-content').css({'height': '3rem', 'top': '0'})
}

function allClose() {

    $('html,body').removeClass('ovfHiden');
    $('.open').css({'display': 'block'})
    $('.mask').css({'display': 'none'})
    $('.drop-down-content').css({'height': '0'})
}
function panel(index) {
    $('.all,.case-item ').addClass('none');
    switch (index) {
        case 1:
            $('.dxfbh').removeClass('none');
            break;
        case 2:
            $('.hylt').removeClass('none');
            break;
        case 3:
            $('.qdnh').removeClass('none');
            break;
        case 4:
            $('.jzkt').removeClass('none');
            break;
        case 5:
            $('.jmlz').removeClass('none');
            break;
        case 6:
            $('.zlzx').removeClass('none');
            break;
        case 7:
            $('.tjlx').removeClass('none');
            break;
        case 8:
            $('.hlgp').removeClass('none');
            break;
        case 9:
            $('.wyyc').removeClass('none');
            break;
        case 10:
            $('.slpt').removeClass('none');
            break;
        case 11:
            $('.tyss').removeClass('none');
            break;

        default:
            $('.all').removeClass('none');
    }

}

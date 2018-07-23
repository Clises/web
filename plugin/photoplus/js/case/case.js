$(init)
eleStatus = {    //nav滚动条滚动距离
    srollnow: 0,
    offsetLeft: 0
}
nav_list = '<li class="active">全部内容</li> ' +
    '<li>大型发布会</li>' +
    '<li>会议论坛</li>' +
    '<li>庆典年会</li>' +
    '<li>讲座课堂</li>' +
    '<li>节目录制</li>' +
    '<li>展览展销</li>' +
    '<li>团建旅行</li>' +
    '<li>婚礼跟拍</li>' +
    '<li>文艺演出</li>' +
    '<li>沙龙趴体</li>' +
    '<li>体育赛事</li>　　'
function init() {
    // paging();
    // $('.case_classify, .list').html(nav_list)
    // $('.case_classify').on('click', 'li', classify)
    $("#case").tab();

    $('.open').on('click', allOpen)
    $('.mask').on('click', mask)
    // $('.list').on('click', 'li', allList)
    $('.close').on('click', allClose)

}


/*翻页*/
// function paging() {
//     var totalPage = 1;//总共多少页
//     var totalRecords = 4;//总共多少条数据
//     var pageSize = 6;//每页显示多少case
//     /*
//     * pno  默认加载第一页内容
//     * */
//     loadList(1); //初始化显示第一页
//     function loadList(pno) {
//         $.ajax({
//             async: false,
//             url: 'data.json',   //  获取地址
//             type: 'post',
//             dataType: 'json',
//             data: {'pageNum': pno, 'pageSize': pageSize},    //传递参数
//             success: function (data) {
//                 console.log(data);
//                 console.log(pno);
//                 if (data.success) {
//                     var count = data.total;
//                     var result = data.result.case;
//                     totalRecords = count; //总共多少case
//                     totalPage = Math.ceil(count / pageSize); //总共多少页
//                     var datalist = "";
//                     $.each(result, function (i, item) {
//                         datalist += '<li>' +
//                             '<div class="case_item_photo">' +
//                             '<img src="' + item.case_item_photo + '">' +
//                             '</div>' +
//                             '<div class="case_item_msg">' +
//                             '<h2>' + item.case_item_title + '</h2>' +
//                             '<div class="case_item_tag">' +
//                             '<span class="case_item_tags">' + item.case_item_tags + ' </span>' +
//                             '</div>' +
//                             '<div class="case_item_sponsor">' +
//                             '<span class="sponsor_icon"></span>' +
//                             '<span class="sponsor">' + item.sponsor + '</span>' +
//                             '</div>' +
//                             '</div>' +
//                             '</li>';
//                     });
//                     $(".case_item").html(datalist);  //渲染dom
//                     $('#count_total').text(totalPage);
//                     $('.M-box').pagination({
//                         showData: pageSize,
//                         pageCount: totalPage,
//                         current: pno,//当前第几页
//                         jump: true,
//                         coping: true,
//                         prevContent: '上一页',
//                         nextContent: '下一页',
//                         callback: PageClick
//
//
//                     });
//                 }
//             },
//             error: function (XMLHttpRequest, textStatus, errorThrown) {
//                 alert('网络连接异常，请重试！')
//             }
//         })
//     }
//
//     function PageClick(index){
//         $('#count_now').text(index.getCurrent());
//         loadList(index.getCurrent());//点击分页加载列表数据  */
//     }
// }
/*分类*/
// function classify() {
//     var $this = $(this), $index = $this.index();
//     $(".case_classify li").removeClass("active").eq($index).addClass("active");
//     $('.list').find('li').removeClass("active").eq($index).addClass("active");
//     eleStatus.srollnow = $('.case_classify')[0].scrollLeft;
//     eleStatus.offsetLeft = $(this).offset().left;
//     if (eleStatus.offsetLeft > 200) {
//         $('.case_classify').animate({'scrollLeft': eleStatus.srollnow + 70}, 1000);
//
//     }
//
// }

/*全部分类*/
// function allList() {
//     $('html,body').removeClass('ovfHiden');
    var $this = $(this), $index = $this.index();
    $(".list li").removeClass("active").eq($index).addClass("active")
//     $('.case_classify').find('li').removeClass("active").eq($index).addClass("active");
//     $('.drop-down-content').css({'height': '0'})
//     $('.mask').css({'display': 'none'})
//     $('.open').css({'display': 'block'})
//     eleStatus.offsetLeft = $('.case_classify').find('li').eq($index).get(0).offsetLeft;
//     if ($('.case_classify').find('li').eq($index).hasClass('active')) {
//         $('.case_classify')[0].scrollLeft = eleStatus.offsetLeft - 20;
//     }
// }

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

function mask() {
    $('.open').css({'display': 'block'})
    $('html,body').removeClass('ovfHiden');
    $('.drop-down-content').css({'height': '0'})
    $('.mask').css({'display': 'none'})
}

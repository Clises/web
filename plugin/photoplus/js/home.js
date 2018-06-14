var obj = {
    list: [
        {
            id: 1,
            count: "大型发布会",
            img: "home/timepc1.png",
            qr: 'home/timeqrcode1.png',
            title: '雅居乐环保集团品牌发布会',
            link: 'http://wx.plusx.cn/activity/live/7091690'
        },
        {
            id: 1,
            count: "会议论坛",
            img: "home/timepc2.png",
            qr: 'home/timeqrcode2.png',
            title: '2017英特尔中国行业峰会',
            link: 'http://wx.plusx.cn/activity/live/8001179'
        },
        {
            id: 1,
            count: "庆典年会",
            img: "home/timepc3.png",
            qr: 'home/timeqrcode3.png',
            title: '米奥之夜 善行中国',
            link: 'http://wx.plusx.cn/activity/live/9081304'
        },
        {
            id: 1,
            count: "课程讲座",
            img: "home/timepc4.png",
            qr: 'home/timeqrcode4.png',
            title: '黄埔书院非常道读书会',
            link: 'http://wx.plusx.cn/activity/live/2341590'
        },
        {
            id: 1,
            count: "节目录制",
            img: "home/timepc5.png",
            qr: 'home/timeqrcode5.png',
            title: '2018珠江频道节目巡礼',
            link: 'http://wx.plusx.cn/activity/live/7121842'
        },
        {
            id: 1,
            count: "展览展销",
            img: "home/timepc6.png",
            qr: 'home/timeqrcode6.png',
            title: 'GFF 2017 9.2&W风潮馆',
            link: 'http://wx.plusx.cn/activity/live/5691909'
        },
        {
            id: 1,
            count: "团建旅行",
            img: "home/timepc7.png",
            qr: 'home/timeqrcode7.png',
            title: '2017年锐丰科技第五届登山活动',
            link: 'http://wx.plusx.cn/activity/live/1121107'
        },
        {
            id: 1,
            count: "婚礼跟拍",
            img: "home/timepc8.png",
            qr: 'home/timeqrcode8.png',
            title: '女王嫁到 婚礼仪式',
            link: 'http://wx.plusx.cn/activity/live/471208'
        },
        {
            id: 1,
            count: "文艺演出",
            img: "home/timepc9.png",
            qr: 'home/timeqrcode9.png',
            title: '山西卫视 中国民歌夜',
            link: 'http://wx.plusx.cn/activity/live/5721918'
        },
        {
            id: 1,
            count: "沙龙趴体",
            img: "home/timepc10.png",
            qr: 'home/timeqrcode10.png',
            title: '春梅里侨香新店开业派对',
            link: 'http://wx.plusx.cn/activity/live/5761033'
        },
        {
            id: 1,
            count: "体育赛事",
            img: "home/timepc11.png",
            qr: 'home/timeqrcode11.png',
            title: '2018福建永泰半程马拉松赛',
            link: 'http://wx.plusx.cn/activity/live/7751542'
        }
    ]
}



var scroll = window.screen.width;
var uls = document.getElementById('uls');
var time_right = document.getElementById('time_right');
var swiper = new Swiper('.swiper-container', {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 30,
    nextButton: '.swiper-button-next',//前进后退按钮
    prevButton: '.swiper-button-prev',
    onSlideChangeStart: function(swiper) {
      var index = swiper.realIndex;
      $('.count').addClass('none').eq(index).removeClass('none')
    }
});
var str = "";
for (var i = 0; i < obj.list.length; i++) {
    str += '<li>' + obj.list[i].count + '</li>';
}
uls.innerHTML = str + "<li></li>";
// if (scroll > 769) {
//     time_right.innerHTML = '<img src="http://static.qiezipai.cn/wechat/photoplus/img/home/timepc1.png" alt="" >'
// } else {
//     time_right.innerHTML = '<img src="http://static.qiezipai.cn/wechat/photoplus/img/home/timeh51.png" alt="" >';
// }
var list = uls.getElementsByTagName('li');
var activityLink = document.getElementById('activityLink');
var timeQr = document.getElementById('time-qr');
var timeImg = document.getElementById('time-img');
var timeTitle = document.getElementById('time-title');
activityLink.setAttribute('href', obj.list[0].link);
list[0].className = "active";
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        for (var k = 0; k < list.length; k++) {
            list[k].className = ""
        }
        this.className = "active";
        timeQr.setAttribute('src', 'http://static.qiezipai.cn/wechat/photoplus/img/' + obj.list[i].qr);
        timeImg.setAttribute('src', 'http://static.qiezipai.cn/wechat/photoplus/img/' + obj.list[i].img);
        timeTitle.innerHTML = obj.list[i].title;
        activityLink.setAttribute('href', obj.list[i].link);
    }
}

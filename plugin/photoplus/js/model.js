var work_count = document.getElementById('work_count').getElementsByTagName('a')
var work = document.getElementById('work');
var scroll = window.screen.width;
var obj = {
    workdata: [
        {
            id: 1,
            img: "model/workpc1.gif",
            count: '配置图片直播页面'
        },
        {
            id: 2,
            img: "model/workpc2.gif",
            count: "邀请参与者加入协作拍摄修图"
        },
        {
            id: 3,
            img: "model/workpc3.gif",
            count: "图片直接发布或上传，实现直播"
        },
        {
            id: 4,
            img: "model/workpc4.gif",
            count: "对直播图片做相册、图文操作"
        },
        {
            id: 5,
            img: "model/workpc5.gif",
            count: "对直播图片做不同形式的排序呈现"
        },
        {
            id: 6,
            img: "model/workpc6.gif",
            count: "构建大型活动合集或个人作品页面"
        },
        {
            id: 7,
            img: "model/workpc7.gif",
            count: "实时监控各设备传输情况"
        }
    ],
    workdata1: [
        {
            id: 1,
            img: "img/fun1.gif",
            count: '图片展示瀑布流与方格图切换'
        },
        {
            id: 2,
            img: "img/fun2.gif",
            count: "拼图功能"
        },
        {
            id: 3,
            img: "img/fun3.gif",
            count: "图片点赞，热门图片排行"
        },
        {
            id: 4,
            img: "img/fun4.gif",
            count: "添加品牌介绍信息"
        },
        {
            id: 5,
            img: "img/fun5.gif",
            count: "视频与视频直播播放"
        },
        {
            id: 6,
            img: "img/fun6.gif",
            count: "主会场分会场活动合集页面"
        },
        {
            id: 7,
            img: "img/fun7.gif",
            count: "人脸识别，找自己的照片"
        },
        {
            id: 8,
            img: "img/fun8.gif",
            count: "图片直播页面加密访问"
        },
        {
            id: 9,
            img: "img/fun9.gif",
            count: "时间线与图文直播"
        },
        {
            id: 10,
            img: "img/fun10.gif",
            count: "图片直播页面实时可视化数据统计"
        },
        {
            id: 11,
            img: "img/fun11.gif",
            count: "相册展示"
        },
        {
            id: 12,
            img: "img/fun12.gif",
            count: "添加页面主视觉效果，活动方和嘉宾信息"
        }
    ],
}
var colorlist = document.getElementById('colorlist').getElementsByTagName('a');
var scroe_left = document.getElementById('scroe_left');

if(scroll>769){
    for (let i = 0; i < obj.workdata1.length; i++) {
        colorlist[i].onclick = function () {
            scroe_left.innerHTML = '<img src="http://static.qiezipai.cn/wechat/photoplus/img/' + obj.workdata1[i].img + '" alt="" title="不知道为什么出错了">'
            for (var k = 0; k < colorlist.length; k++) {
                colorlist[k].className = "";
            }
            colorlist[i].className = "active"

        }
    }
}
for (let i = 0; i < work_count.length; i++) {
    work_count[i].onclick = function () {
        work.innerHTML = '<img src="http://static.qiezipai.cn/wechat/photoplus/img/' + obj.workdata[i].img + '" alt="" title="不知道为什么出错了">'
        for (var k = 0; k < work_count.length; k++) {
            work_count[k].className = "";
        }
        work_count[i].className = "active"
    }
}
var wrapper = document.getElementById('swiper-wrapper');
var swiper_score = document.getElementById('swiper_score');
var swiper_score_text = document.getElementById('swiper_score_text');
var str = "";

for (var i = 0; i < obj.workdata.length; i++) {
    str += '<div class="swiper-slide"><a href="javascript:;">' + obj.workdata[i].count + '</a><img src="http://static.qiezipai.cn/wechat/photoplus/img/' + obj.workdata[i].img + '" alt=""></div>'
}



var str1="";
var str2='';
for (var i = 0; i < obj.workdata1.length; i++) {
    str1 += '<div class="swiper-slide"><img src="http://static.qiezipai.cn/wechat/photoplus/img/' + obj.workdata1[i].img + '" alt=""></div>';
    str2 += '<div class="swiper-slide"><a href="javascript:;">' + obj.workdata1[i].count + '</a></div>';
}

wrapper.innerHTML = str;
swiper_score.innerHTML = str1;
swiper_score_text.innerHTML = str2;
new Swiper('.work_swiper', {
  // autoplay : 4000,
  // autoplayDisableOnInteraction : false,
})
var phone_img = new Swiper('.score_swiper', {
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    // autoplay : 4000,
    // autoplayDisableOnInteraction : false,
})
var phone_text = new Swiper('.score_text_swiper', {

})
phone_img.params.control = phone_text;
phone_text.params.control = phone_img;

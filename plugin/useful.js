//rem及 pc 端浏览适配
!(function (doc, win) {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        var docEle = doc.documentElement,
            evt = "onorientationchange" in window ? "resize" : "orientationchange",
            fn = function () {
                var width = 500;
                width && (docEle.style.fontSize = 100 * (width / 750) + "px");
            };
        win.addEventListener(evt, fn, false);
        doc.addEventListener("DOMContentLoaded", fn, false);

        $('html, body').css({'width': '500px', 'margin': '0 auto'});
        $('.jh-container, .nav,.discuss-wrapper, .order, .try, .swiper-masking, .main-masking').css({
            'width': '500px',
            'left': '50%',
            'margin-left': '-250px'
        });
        $('.pos-box').remove();
        // $('body').css('background', '#9b9fa3');
    } else {
        return;
    }
}(document, window));
// 以上部分为了暂时在pc上展示样式 后期更改

// 判断浏览器(微信网页显示引导)
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {//移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/)
            || !!u.match(/AppleWebKit/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1,//是否web应该程序，没有头部与底部
            google: u.indexOf('Chrome') > -1,
            weiChat: (u.indexOf('MicroMessenger') > -1 || u.indexOf('micromessenger') > -1) && u.indexOf('wxwork') === -1
        };
    }(),
}
// 哪种设备打开
if (browser.versions.weiChat) {
    var wx_login = getCookie('wx_login');
    if (wx_login == 'undefined' || wx_login == '' || wx_login == 'false') {
        setCookie('iswx', '1');
        window.location.reload();
    } else if (wx_login == 'true') {
        setCookie('iswx', '1');
    }
} else {
    setCookie('iswx', '0');
}


// 获取活动号
function getNo() {
    var path = window.location.pathname;
    var activityNo = path.split('/')[path.split('/').length - 1];
    return activityNo;
}

// 获取链接参数
function GetSearchParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]);
    return null;
}

// 长按
$.fn.longPress = function (fn) {
    var timeout = undefined;
    var $this = this;
    for (var i = 0; i < $this.length; i++) {
        $this[i].addEventListener('touchstart', function (event) {
            timeout = setTimeout(fn, 800);
        }, false);
        $this[i].addEventListener('touchend', function (event) {
            clearTimeout(timeout);
        }, false);
    }
}

// 阻止默认事件
function touchModal(event) {
    var event = event || window.event;
    event.preventDefault();
    return false;
}

// toast 弹层
function toast(text) {
    var $toast = $('.toast');
    if ($toast.attr('style') == 'display: block;') {
        return;
    }
    $toast.find('p').html(text);
    $toast.fadeIn(100).delay(1500).fadeOut();
}

//cookie
function setCookie(name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate;
}

function getCookie(name) {
    var arr = document.cookie.split('; ');
    var i = 0;
    for (i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');
        if (arr2[0] == name) {
            var getC = decodeURIComponent(arr2[1]);
            return getC;
        }
    }
    return '';
}

//预加载
(function () {
    window.loadingFun = function (obj) {
        if (obj.imgs && obj.imgs.length > 0 && obj.imgs instanceof Array) {
            var _imgs = [];
            var imgIndex = 0;
            for (var i = 0; i < obj.imgs.length; i++) {
                var img = new Image();
                img.src = obj.imgs[i];
                _imgs.push(img);
                img.onload = function () {
                    imgIndex++;
                    if (obj.loading && typeof obj.loading == 'function') {
                        obj.loading();
                    }
                    if (imgIndex == obj.imgs.length) {
                        if (obj.loaded && typeof obj.loaded == 'function') {
                            obj.loaded(_imgs);
                        }
                    }
                }
            }
        }
    }

})()

// touch 关闭图片
function touchImg(son, father) {
    var father = father[0];
    var son = son[0];
    var parentOpacity = 1;
    var imgScale = 1;
    var iw = son.offsetWidth, ih = son.offsetHeight;
    var startY, moveY, touchAngle;
    son.addEventListener('touchstart', function (ev) {
        if (ev.targetTouches.length === 1) {
            son.style.transition = '';
            son.style.webkitTransition = '';
            father.style.transition = '';
            father.style.webkitTransition = '';

            startY = ev.touches[0].clientY;
            startX = ev.touches[0].clientX;
        }
    }, false)
    son.addEventListener('touchmove', function (ev) {
        if (ev.targetTouches.length === 1) {
            moveY = ev.touches[0].clientY - startY;
            moveX = ev.touches[0].clientX - startX;
            parentOpacity = 1 - (Math.abs(moveY) / 500);
            // 触摸滑动角度
            touchAngle = Math.abs((moveY / moveX));
            if (touchAngle > 1 && dragClose) {
                son.style.webkitTransform = 'translate(' + moveX + 'px, ' + moveY + 'px) scale(' + imgScale + ')';
                son.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px) scale(' + imgScale + ')';
                father.style.background = 'rgba(0, 0, 0, ' + parentOpacity + ')';
                $('#imgShowModal .modal_footer').fadeOut();
            }
        }

    }, false)
    son.addEventListener('touchend', function (ev) {
        if (touchAngle > 1 && dragClose) {
            if (Math.abs(moveY) > 130) {
                son.style.webkitTransition = 'all .5s';
                son.style.transition = 'all .5s';
                son.style.webkitTransform = 'scale(0)';
                son.style.transform = 'scale(0)';
                $('video').removeClass('none');
                $('#imgShowModal').fadeOut(200, function () {
                    picLikeArr = []; //关闭时清空 自己点赞过图片的数组
                    getLikes(); // 重新获取一次；
                    $('#imgShowModal .modal_footer').fadeIn();
                    $('.imgShowSwiper .swiper-wrapper').empty();
                    picShowSwiper.destroy(false, true);
                });
                $('.container').off('touchmove');
            } else {
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

//判断手机
function checkPhone(str) {
    var reg = /^1\d{10}$/
    if (str === '') {
        return false;
    } else {
        return reg.test(str.trim());
    }
}


function throttle(method, delay, time) {
    var timeout, startTime = new Date();
    return function () {
        var context = this,
            args = arguments,
            curTime = new Date();
        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if (curTime - startTime >= time) {
            method.apply(context, args);
            startTime = curTime;
            // 没达到触发间隔，重新设定定时器
        } else {
            timeout = setTimeout(method, delay);
        }
    }
}

// 埋点
function visitRecord(key, param) {
    $.ajax({
        url: '/statistics/click',
        type: 'get',
        dataType: 'json',
        data: {key: key, params: param, activity_no: ACTIVITYNO}
    })
}


//原生 ajax
function ajax(url, fnSucc, fnFaild) {
    //1.创建Ajax对象
    if (window.XMLHttpRequest) {
        var oAjax = new XMLHttpRequest();
    }
    else {
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.连接服务器（打开和服务器的连接）
    oAjax.open('GET', url, true);
    //3.发送
    oAjax.send();
    //4.接收
    oAjax.onreadystatechange = function () {
        if (oAjax.readyState == 4) {
            if (oAjax.status == 200) {
                //alert('成功了：'+oAjax.responseText);
                fnSucc(oAjax.responseText);
            }
            else {
                //alert('失败了');
                if (fnFaild) {
                    fnFaild();
                }
            }
        }
    };
}

//多久之前
!function (t) {
    function e(e) {
        var n = t.extend(o.settings, e)
            , s = t.proxy(r, this);
        s(),
        n.refreshMillis > 0 && setInterval(s, n.refreshMillis)
    }

    function r() {
        var e = n(this)
            , r = e.datetime;
        return isNaN(r) || t(this).text(o.inWords(r)),
            this
    }

    function n(e) {
        return e = t(e),
        e.data("timeago") || e.data("timeago", {
            datetime: o.datetime(e)
        }),
            e.data("timeago")
    }

    function s(t) {
        return (new Date).getTime() - t.getTime()
    }

    function i(t) {
        var e = new Date;
        return e.getMonth() > t.getMonth() || e.getDate() > t.getDate()
    }

    function a(t) {
        return (new Date).getFullYear() > t.getFullYear()
    }

    Date.prototype.format = function (t) {
        var e = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var r in e)
            new RegExp("(" + r + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[r] : ("00" + e[r]).substr(("" + e[r]).length)));
        return t
    }
    ;
    var o = {
        settings: {
            refreshMillis: 6e4,
            relative: !0,
            strings: {
                suffixAgo: "前",
                seconds: "刚刚",
                minute: "1分钟",
                minutes: "%d分钟",
                hour: "1小时",
                hours: "%d小时",
                days: "%d天",
                months: "%d月",
                years: "%d年",
                numbers: []
            },
            yearsAgoFormat: "yyyy-MM-dd",
            daysAgoFormat: "MM-dd hh:mm"
        },
        inWords: function (e) {
            function r(e, r) {
                var n = t.isFunction(e) ? e(r, u) : e
                    , s = g.numbers && g.numbers[r] || r;
                return n.replace(/%d/i, s)
            }

            var n = o.settings.relative;
            if (!n && a(e))
                return e.format(this.settings.yearsAgoFormat);
            if (!n && i(e))
                return e.format(this.settings.daysAgoFormat);
            var u = s(e)
                , g = this.settings.strings
                , h = g.suffixAgo
                , d = Math.abs(u) / 1e3
                , l = d / 60
                , f = l / 60
                , m = f / 24
                , c = m / 30
                , M = m / 365;
            return words = 60 > d ? r(g.seconds, Math.floor(d)) : 60 > l ? r(g.minutes, Math.floor(l)) : 24 > f ? r(g.hours, Math.floor(f)) : 30 > m ? r(g.days, Math.floor(m)) : 365 > m ? r(g.months, Math.floor(c)) : r(g.years, Math.floor(M)),
                "刚刚" == words ? words : words + h
        },
        parse: function (e) {
            var r = t.trim(e);
            return r = r.replace(/\.\d+/, ""),
                r = r.replace(/-/, "/").replace(/-/, "/"),
                r = r.replace(/T/, " ").replace(/Z/, " UTC"),
                r = r.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"),
                new Date(r)
        },
        datetime: function (e) {
            var r = t(e).attr(o.isTime(e) ? "datetime" : "title");
            return o.parse(r)
        },
        isTime: function (e) {
            return "time" === t(e).get(0).tagName.toLowerCase()
        }
    };
    t.fn.timeago = function (t) {
        return this.each(function () {
            e.call(this, t)
        }),
            this
    }
}(window.jQuery)

//当前时间
function DateNow() {
    var myDate = new Date();
    //获取当前年
    var year = myDate.getFullYear();
    //获取当前月
    var month = myDate.getMonth() + 1;
    //获取当前日
    var date = myDate.getDate();
    var h = myDate.getHours();       //获取当前小时数(0-23)
    var m = myDate.getMinutes();     //获取当前分钟数(0-59)
    if (m < 10) m = '0' + m;
    var s = myDate.getSeconds();
    if (s < 10) s = '0' + s;
    var now = year + '-' + month + "-" + date + " " + h + ':' + m + ":" + s;
    return now;
}

//转换成时间戳
function getDateTimeStamp(dateStr) {
    return Date.parse(dateStr.replace(/-/gi, "/"));
}


//左滑右滑判断

var startX = 0;
var startY = 0;

function slide(ele) {

    var startX = 0;
    var startY = 0;
    $(ele).on("touchstart", function () {
        startX = event.targetTouches[0].pageX;
        startY = event.targetTouches[0].pageY;

    })
    $(ele).on("touchend", function () {
        var endX = event.changedTouches[0].pageX;
        var endY = event.changedTouches[0].pageY;
        if (startX > endX) {
            var x = Math.abs(startX - endX);
            var y = Math.abs(startY - endY);
            var a = Math.atan(y / x);
            if (a < Math.PI / 6) {
                console.log("左滑")
            }
        }
        //右滑
        if (endX > startX) {
            var m = endX - startX;
            var n = endY - startY;
            var b = Math.atan(n / m)
            if (b < Math.PI / 6) {
                console.log("右滑")
            }
        }
    })
}

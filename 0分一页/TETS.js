
/**
 * 分页
 * by reelin
 */
var render = function(dom, now, total, limit) {
    var max = Math.ceil(total / limit);    //每页显示
    var pager = {
        now: now,
        max: max
    };
    if (total > 1) {
        var pages = create(pager);
        render_html(dom, pages, pager);
    }
}

var render_html = function(dom, pages, pagger) {
    /** 分页**/
    var now = pagger.now;
    var max = pagger.max;
    var html = ['<div class="pages">'];
    if (pagger.now > 1) {
        html.splice(1, 0, '<a class="pg-item page-prev js-p-prev" href="#" title="上一页"></a> ');
    }
    for (var i = 0, l = pages.length; i < l; i++) {
        if (typeof pages[i] === "number") {
            if (pages[i] == now) {
                html.push('<em ><span>' + now + '</span></em>');
            }
            else {
                html.push('<a class="pg-item js-pn" pg="' + pages[i] + '" href="#"><span>' + pages[i] + '</span></a>');
            }
        }
        else if (typeof pages[i] === "string") {
            html.push("<span >...</span>");
        }
    }
    if (pagger.now < pagger.max) {
        html.push('<a class="pg-item page-next js-p-next" href="#" title="下一页"></a>');
    }
    html.push('<span class="page-block" data-value="' + max + '"> 共' + max + '页</span>');
    html.push('<div class="pg-search" href="#">到<input type="text" name="name" value="">页</a><a class="js-submit" href="#">确定</a>');
    html.push("</div>");
    dom.html(html.join(""));
}

function create(pagger) {
    var max = pagger.max,
        now = pagger.now;
    var f_offset = 2; //偏移量
    var l_r_limit = 5;
    var pages = [];
    var gap = "...";
    var rs = [],
        ls = [],
        lv,
        rv,
        maxed = false,
        mined = false;
    lv = rv = now;

    if (1 == max) {
        return [1];
    }
    if (l_r_limit >= max) {
        var pages = [];
        for (var i = 1; i <= max; i++) {
            pages.push(i);
        }
        return pages;
    }
    for (var i = 0; i < f_offset; i++) {
        if (++rv >= max) {
            if (!maxed) {
                rs.push(max);
                maxed = true;
            }
        } else {
            rs.push(rv);
        }
        if (--lv <= 1) {
            if (!mined) {
                ls.splice(0, 0, 1);
                mined = true;
            }
        } else {
            ls.splice(0, 0, lv);
        }

    }

    var pages = ls.concat([now]).concat(rs);
    if (!maxed) {
        if (pages[pages.length - 1] < max - 1) {
            pages.push(gap);
        }
        pages.push(max);
    } else {
        if (l_r_limit > max) {
            pages = [];
            for (var i = 1; i <= max; i++) {
                pages.push(i);
            }
        } else {
            pages = [];
            for (var i = max; i > max - l_r_limit; i--) {
                pages.splice(0, 0, i);
            }
            if (1 < max - l_r_limit) {
                pages.splice(0, 0, gap);
            }
            pages.splice(0, 0, 1);
            return pages;
        }

    }

    if (!mined) {
        if (pages[0] > 2) {
            pages = [1, gap].concat(pages);
        } else {
            pages.splice(0, 0, 1);
        }
    } else {
        if (l_r_limit >= max) {
            pages = [];
            for (var i = 1; i <= max; i++) {
                pages.push(i);
            }
        } else {
            pages = [];
            for (var i = 1; i <= l_r_limit; i++) {
                pages.push(i);
            }
            if (l_r_limit < max - 1) {
                pages.push(gap);
            }
            pages.push(max);
        }

    }


    return pages;
}

// 解析url
var search  = window.location.search,
    decode = decodeURIComponent;
var S= {} , cache;
function parse(is_now){
    var _s , params = {} ;
    if (cache) {
        return cache;
    }
    _s = window.location.search;
    _s =  _s.replace(/^\?/,"").split("&");
    if (_s.forEach) {
        _s.forEach(function(s,i){
            var t = s.split("=");
            params[t[0]] = decode(t[1]);
        });
    } else {
        for (var i = 0, l = _s.length; i < l; i++) {
            var t = _s[i].split("=");
            params[t[0]] = decode(t[1]);
        }
    }
    cache = params;
    return params;
}

$.getQuery = function(key){
    return key ? parse()[key] : parse();
};

$.render = render;

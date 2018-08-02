!function (e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Pagination = t()
}("undefined" != typeof self ? self : this, function () {
    "use strict";
    var a = "pagination-item", o = "pagination-link", t = function (e, t, i) {
        e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + t] = i
    };
    var e = function (e, t) {
        this.options = {curr: 1, pageShow: 2, ellipsis: !0, hash: !1}, function (e, t, i) {
            for (var n in t) !t.hasOwnProperty(n) || e.hasOwnProperty(n) && !i || (e[n] = t[n])
        }(this.options, t, !0), this.pageElement = function (e, t) {
            return (t = 1 < arguments.length ? t : document) ? t.querySelectorAll(e) : null
        }(e)[0], this.dataCount = this.options.count, this.pageNumber = this.options.curr, this.pageCount = Math.ceil(this.options.count / this.options.limit), this.renderPages(), this.options.callback && this.options.callback({
            curr: this.pageNumber,
            limit: this.options.limit,
            isFirst: !0
        }), this.changePage()
    };
    return e.prototype = {
        constructor: e,
        pageInfos: [{id: "first", content: "首页"}, {id: "prev", content: "前一页"}, {
            id: "next",
            content: "后一页"
        }, {id: "last", content: "尾页"}, {id: "", content: "..."}],
        getPageInfos: function (e, t) {
            return {id: "page", className: e, content: t}
        },
        changePage: function () {
            var n = this, e = n.pageElement;
            t(e, "click", function (e) {
                var t = e || window.event, i = t.target || t.srcElement;
                if ("a" == i.nodeName.toLocaleLowerCase()) {
                    if ("prev" === i.id) n.prevPage(); else if ("next" === i.id) n.nextPage(); else if ("first" === i.id) n.firstPage(); else if ("last" === i.id) n.lastPage(); else {
                        if ("page" !== i.id) return;
                        n.goPage(parseInt(i.innerHTML))
                    }
                    n.renderPages(), n.options.callback && n.options.callback({
                        curr: n.pageNumber,
                        limit: n.options.limit,
                        isFirst: !1
                    }), n.pageHash()
                }
            })
        },
        pageHash: function () {
            this.options.hash && (window.location.hash = "#!" + this.options.hash + "=" + this.pageNumber)
        },
        renderPages: function () {
            this.pageElement.innerHTML = "", this.options.ellipsis ? this.pageElement.appendChild(this.renderEllipsis()) : this.pageElement.appendChild(this.renderNoEllipsis())
        },
        renderNoEllipsis: function () {
            var e = document.createDocumentFragment();
            return this.pageNumber < this.options.pageShow + 1 ? e.appendChild(this.renderDom(1, 2 * this.options.pageShow + 1)) : this.pageNumber > this.pageCount - this.options.pageShow ? e.appendChild(this.renderDom(this.pageCount - 2 * this.options.pageShow, this.pageCount)) : e.appendChild(this.renderDom(this.pageNumber - this.options.pageShow, this.pageNumber + this.options.pageShow)), 1 < this.pageNumber && this.addFragmentBefore(e, [this.pageInfos[0], this.pageInfos[1]]), this.pageNumber < this.pageCount && this.addFragmentAfter(e, [this.pageInfos[2], this.pageInfos[3]]), e
        },
        renderEllipsis: function () {
            var e = document.createDocumentFragment();
            this.addFragmentAfter(e, [this.getPageInfos(o + " current", this.pageNumber)]);
            for (var t = 1; t <= this.options.pageShow; t++) 1 < this.pageNumber - t && this.addFragmentBefore(e, [this.getPageInfos(o, this.pageNumber - t)]), this.pageNumber + t < this.pageCount && this.addFragmentAfter(e, [this.getPageInfos(o, this.pageNumber + t)]);
            return 1 < this.pageNumber - (this.options.pageShow + 1) && this.addFragmentBefore(e, [this.pageInfos[4]]), 1 < this.pageNumber && this.addFragmentBefore(e, [this.pageInfos[0], this.pageInfos[1], this.getPageInfos(o, 1)]), this.pageNumber + this.options.pageShow + 1 < this.pageCount && this.addFragmentAfter(e, [this.pageInfos[4]]), this.pageNumber < this.pageCount && this.addFragmentAfter(e, [this.getPageInfos(o, this.pageCount), this.pageInfos[2], this.pageInfos[3]]), e
        },
        addFragmentBefore: function (e, t) {
            e.insertBefore(this.createHtml(t), e.firstChild)
        },
        addFragmentAfter: function (e, t) {
            e.appendChild(this.createHtml(t))
        },
        createHtml: function (e) {
            var i = document.createDocumentFragment(), n = document.createElement("li"),
                s = document.createElement("a");
            return e.forEach(function (e, t) {
                n = n.cloneNode(!1), s = s.cloneNode(!1), n.setAttribute("class", a), s.setAttribute("href", "javascript:;"), s.setAttribute("id", e.id), "page" !== e.id ? s.setAttribute("class", o) : s.setAttribute("class", e.className), s.innerHTML = e.content, n.appendChild(s), i.appendChild(n)
            }), i
        },
        renderDom: function (e, t) {
            for (var i = document.createDocumentFragment(), n = "", s = e; s <= t; s++) n = this.pageNumber === s ? o + " current" : o, this.addFragmentAfter(i, [this.getPageInfos(n, s)]);
            return i
        },
        prevPage: function () {
            this.pageNumber--
        },
        nextPage: function () {
            this.pageNumber++
        },
        goPage: function (e) {
            this.pageNumber = e
        },
        firstPage: function () {
            this.pageNumber = 1
        },
        lastPage: function () {
            this.pageNumber = this.pageCount
        }
    }, e
});

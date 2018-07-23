(function ($) {
    /*
    *
    *tab.parent=#case
    *
    *
    *
    * */

    /**
     * 初始化tab选项卡、面板样式
     */
    function initTab($tab) {
        $tab.addClass("tab")
            .children("ul").addClass("case_classify")
            .append($("<li></li>").addClass("tab_case").css("width", 100))
    }

    /**
     * 初始化tab总高度、内容面板高度
     */

    function initContentHeight($tab) {
        $tab.css("height", ($tab.parent().height() - 2) + "px")
            .find(".case_cases").css("height", ($tab.parent().height() - 88) + "px");
    }


    /**
     * 点击切换
     **/
    function initEvents($tab) {
        $tab
        // 选项卡点击事件
            .delegate(".tab_case", "click", function () {

                var selected = $(this).hasClass("active");
                if (!selected) {
                    // 如果这个选项卡没有选中，就调用selectTab函数进行选中
                    selectTab($tab, $(this).attr("target"));
                }
            })

    }

    /**
     * 选中指定tab标签，切换样式
     */
    function selectTab($tab, tabId) {
        var headItems = $tab.children('.case_classify');
        var tab = headItems.find("li[target=" + tabId + "]");
        if (tab[0]) {
            tab.addClass("active")
                .siblings().removeClass("active");
        }
    }
    /**
    * 添加
     * */
    // function addRemoteTab($tab, param) {
    //     // 添加选项卡
    //     addTab($tab, {"title": param["title"], "id": param["id"], "content": ""});
    //     // 获取数据，然后填充到新添加的面板
    //     $.ajax({
    //         type: param["method"] || "post",
    //         dataType: "html",
    //         url: param["url"],
    //         cache: false,
    //         success: function(data) {
    //             // 填充数据到面板
    //             $tab.find("#" + param["id"]).html(data);
    //         }
    //     });
    // }

    function isSelected($tab, tabId) {
        return  $tab.children('.case_classify').find("li[target=" + tabId + "]").hasClass("active")
    }

    function isExists($tab, tabId) {
        return  $tab.children('.case_classify').find("li[target=" + tabId + "]")[0] != undefined
    }
    $.fn.tab = function (options, param) {
        if (typeof options == 'string') {
            switch(options){
                case 'selectTab':
                    return this.each(function() {
                        selectTab($(this), param);
                    });
                case 'isSelected':
                    return isSelected($(this), param);
                case 'isExists':
                    return isExists($(this), param);
            }
        }
        options = options || {};
        return this.each(function () {
            // 保存对象
            var tab = $(this);
            // 初始化tab选项卡、面板样式
            // initTab(tab);
            // 初始化标签的右键菜单和菜单项
            // initContextMenu();
            // 初始化tab总高度、内容面板高度
            // initContentHeight(tab);
            // 初始化选项卡点击事件、关闭按钮点击事件
            initEvents(tab);
            // 给body绑定事件，用于显示、关闭tab标签右键菜单
            // initWindowContextMenu();
        });
    };


})(jQuery);

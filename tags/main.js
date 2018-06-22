function mainPage(config){
    this.mainProduct=config.mainProduct,//要显示内容的div
        this.productItem=config.productItem,//显示内容div中的一项
        this.mainPage=config.mainPage,//显示内容div中的分页div
        this.Pagesize=config.Pagesize,//分页大小
        this.className=config.className||"on";//分页的当前样式,默认是on
    this.scrollTop=config.scrollTop||0;	//点击分页要到达的地方 .默认顶部
};
mainPage.prototype={
    GetPage:function(backAll){
        //backAll描点的位置。点击分页时用的，可以不给参数
        var mainProduct=this.mainProduct,
            productItem=this.productItem,
            mainPage=this.mainPage,
            Pagesize=this.Pagesize,
            className=this.className,
            scrollTop=this.scrollTop,
            href=window.location.href;
        var newHref=href.split("#");
        if(newHref.length>1)
        {
            href=newHref[0];
        }
        $(mainProduct).each(function(i){
            var _this=this;
            len=$(_this).find(productItem).length,
                PageCount=Math.ceil(len/Pagesize),
                li=[],
                AddPage=$(_this).find(mainPage);
            if(PageCount==1){$(_this).find(mainPage).hide();}
            for(var j=1;j<=PageCount;j++)
            {
                li.push("<a>"+j+"</a>");
            }
            li=li.join("");
            if(AddPage.find("a").length>0)
            {
                AddPage.find("a").remove();
            }
            AddPage.append(li);
            AddPage.find("a").eq(0).addClass(className);
            var Current_W=0;
            for(var pageNum=0;pageNum<PageCount;pageNum++)
            {
                Current_W+=parseInt(AddPage.find("a").eq(pageNum).outerWidth(true),10);
            }
            Current_Num=Current_W+10;

            $(_this).find(mainPage).css("width",Current_Num+"px");
            $(_this).find(productItem).hide().end().find(productItem+":lt("+Pagesize+")").show();
            AddPage.find("a").click(
                function()
                {
                    var $thisIndex=$(this),
                        _indexNum=Pagesize*($thisIndex.index())-1;
                    $thisIndex.parents(mainProduct).find(productItem).hide();

                    if(_indexNum<0)
                    {
                        $thisIndex.parents(mainProduct).find(productItem+":lt("+Pagesize+")").show();
                    }
                    else
                    {
                        $thisIndex.parents(mainProduct).find(productItem+":gt("+_indexNum+"):lt("+Pagesize+")").show();
                    }
                    $thisIndex.addClass(className).siblings().removeClass(className);
                    if(typeof backAll=="string")
                    {
                        window.location.href=href+backAll;
                    }
                    else
                    {
                        $(window).scrollTop(scrollTop);
                    }
                });
        });
    }
};
function tabNab(config){
    this.mainNav=config.mainNav;//选项卡的div
    this.mainContent=config.mainContent;//选项卡内容
    this.Reset=config.Reset||false;//点击选项卡的时候重置分页，不配置就是false
    this.className=config.className||"on";//选项卡的样式，默认是on
};
tabNab.prototype={
    showTab:function(){
        var mainNav=this.mainNav,
            mainContent=this.mainContent,
            Reset=this.Reset,
            className=this.className;
        $(mainContent).hide().eq(0).show();
        $(mainNav).eq(0).addClass(className);
        $(mainNav).click(function(){
            var _this=this,
                _index=$(_this).index();
            $(mainContent).hide().eq(_index).show();
            $(_this).addClass(className).siblings().removeClass(className);
            if(Reset)
            {
                Reset.GetPage();
                //这里是根据上面那个js来的。所以这里如果运用到实际中可根据需要删除
            }
        });
    }
};






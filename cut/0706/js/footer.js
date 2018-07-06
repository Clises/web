init()
function init() {
    $('.nav').on('click','li',nav)
}
function nav(event) {
    /*字体变色*/
    var $this = $(this), $index = $this.index();
    var preindex=$("li.active").attr("index");
    $this.addClass("active").siblings().removeClass("active");
    console.log(event.target.tagName==='IMG')
    if (event.target.tagName==='IMG')
    {
        var child=$('.nav li img')
        for (var i=0;i<child.length;i++){
            child[i].src = child[i].src.replace(/.png|_selected.png/,'.png');

        }
        event.target.src = event.target.src.replace(/.png|_selected.png/,'_selected.png');


    }



    // var arr=['images/morecl.png','images/eyecl.png']
    // var $this = $(this), $index = $this.index();
    //
    // $this.children('img').attr('src',arr[$index]);

}

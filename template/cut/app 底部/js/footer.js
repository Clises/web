init()
function init() {
    $('.nav').on('click','li',nav);
    $('.logo-left').on('click',show)
    $('.close').on('click',close)
}

function nav(event) {
    /*字体变色*/
    var $this = $(this), $index = $this.index();
    $this.addClass("active").siblings().removeClass("active");
    if (event.target.tagName==='IMG')
    {
        var child=$('.nav li img')
        for (var i=0;i<child.length;i++){
            child[i].src = child[i].src.replace(/.png|_selected.png/,'.png');
        }
        event.target.src = event.target.src.replace(/.png|_selected.png/,'_selected.png');
    }
    panel($index)

}
function show() {
    $('.container').removeClass('none');
    $(this).addClass('none')
}
function panel(index) {
    $('.more,.item').addClass('none');
    switch (index) {
        case 1:
            $('.query').removeClass('none');
            break;
        default:
            $('.more').removeClass('none');
    }
}
function close() {
    $(this).parent().parent().addClass('none')
}

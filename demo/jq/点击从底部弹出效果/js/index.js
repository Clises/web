$(function() {
    $(".line li").on("click", up);
    $(".close").on("click",clos)
});
function up() {
    var _index=$(this).index()
    var titles = ['这是第一条','这是第二条','这是第三条'];
    var colors=['red','black','green']
    $(this).addClass('active')
    $('.contnet').find('h1').html(titles[_index])
    $('.contnet').css({top:'0'})
    // console.log(colors)
    $('.contnet').find('.contnet_line').css({backgroundColor:colors[_index]})

}
function clos() {
    $('.contnet').css({top:'100%'})
    $('.line li').removeClass('active')
}
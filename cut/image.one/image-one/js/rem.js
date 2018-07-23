/*
 * Description: 定义rem大小，设计图宽度为750px，网页中1rem 等于 设计图的100px
 */
;(function(){
    var timer = null,
        docElem = window.document.documentElement;
    function setRem(){
        var width = docElem.getBoundingClientRect().width;
        if(width > 750){
            width = 750;
        }
        var rem = width / 750 * 100;
        docElem.style.fontSize = rem + 'px';
    }
    window.addEventListener('resize', function(){
        clearTimeout(timer);
        timer = setTimeout(setRem, 300);
    }, false);
    window.addEventListener('pageshow', function(e){
        if(e.persisted){
            clearTimeout(timer);
            timer = setTimeout(setRem, 300);
        }
    }, false);
    setRem();
})();

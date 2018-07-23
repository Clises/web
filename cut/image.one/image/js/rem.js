/*
 * Author: fg
 * LastTime: 2018-4-27 17:49:52
 * Description: 定义rem大小，设置为 宽度750px设计图，网页中1rem 等于 设计图的100px
 * Contact : 
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
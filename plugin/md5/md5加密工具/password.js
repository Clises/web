
$(function () {
    $('#password-enter').click(praviteVerify)
})
function praviteVerify() {
   var pravite_password=1234;
    if (!$('#password-enter').hasClass('active')) {
        $('#password-enter').addClass('active');
        var password_ = $.trim($('#password').val());
        // password_ = $.md5(password_);
        if (password_ == pravite_password) {
            setCookie('password', pravite_password);
                $('.password-wrapper').addClass('ani-fadeoutdown');
            $('.password-masking').fadeOut(1200, function() {
                $(this).remove();
            });
            setTimeout(function() {
                $('body, html').removeClass('overhidden');
            }, 1000)
            // viewInterval(5);

            // addWhUrl(1);

        } else {
            toast('密码错误!');
            $('#password-enter').removeClass('active');
            $('#password').focus();
        }
    }
}
function toast(text) {
    $('.toast p').html(text);
    $('.toast').fadeIn(100).delay(1000).fadeOut();
}

//cookie
function setCookie(name, value, iDay){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate;
}
function getCookie(name){
    var arr = document.cookie.split('; ');
    var i = 0;
    for(i = 0;i < arr.length;i++) {
        var arr2 = arr[i].split('=');
        if(arr2[0] == name) {
            var getC = decodeURIComponent(arr2[1]);
            return getC;
        }
    }
    return '';
}
function removeCookie(name) {
    setCookie(name, '1', -1);
}
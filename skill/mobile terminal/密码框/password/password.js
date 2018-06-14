
console.log('aaa')
$(function () {
    $('#password-enter').click(praviteVerify)
})
function praviteVerify() {
   var pravite_password=1234
    if (!$('#password-enter').hasClass('active')) {
        $('#password-enter').addClass('active');
        var password_ = $.trim($('#password').val());
        // password_ = $.md5(password_);
        if (password_ == pravite_password) {
            // setCookie('password', pravite_password);
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

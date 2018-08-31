$(init)

function init() {
  $('.address-title').on('click', 'li', function() {
    var $this = $(this), index = $this.index();
    $('.address-title').find('li').removeClass('active');
    $this.addClass('active');
    $('.block--address').removeClass('bj');
    $('.block--address').removeClass('sh');
    $('.block--address').removeClass('sz');
    if (index === 0) {
      $('.block--address').addClass('bj');
    }
    if (index === 1) {
      $('.block--address').addClass('sh');
    }
    if (index === 2) {
      $('.block--address').addClass('sz');
    }
    $('.address-content').find('li').addClass('address-contentnone');
    $('.address-content').find('li').eq(index).removeClass('address-contentnone');
  })
}

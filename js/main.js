function updateHeaderState($header) {
  if (this.scrollTop() > 24)
    $header.not('.Header--Active').addClass('Header--Active');
  else
    $header.filter('.Header--Active').removeClass('Header--Active');
}

$(function () {
  const $window = $(window);
  const $header = $('#js-header');
  const $calculator = $('#js-calculator');

  $window.on('scroll', updateHeaderState.bind($window, $header));
  updateHeaderState.call($window, $header);
});

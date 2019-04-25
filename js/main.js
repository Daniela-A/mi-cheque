$(function () {
  const $window = $(window);
  const $header = $('#Header');

  $window.on('scroll', function () {
    const scrollTop = $window.scrollTop();

    if (scrollTop > 0)
      $header.not('.Header--Active').addClass('Header--Active');
    else
      $header.filter('.Header--Active').removeClass('Header--Active');
  });
});

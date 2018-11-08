$(window).on('load', function () {
    $preloader = $('.preloader'),
      $loader = $preloader.find('.preloader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
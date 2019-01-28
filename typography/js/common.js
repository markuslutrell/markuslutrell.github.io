(function($) {
$(function() {

  $('select').styler();

});
})(jQuery);

$( ".example" ).hover(
  function() {
    $( ".example__container" ).toggleClass( "hover__example" );
  }
);

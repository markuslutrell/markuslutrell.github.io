 $('.sl').slick({
 	
 });

 $('.feedback__slider').slick({
 	autoplay: true,
 	dots: true,
 });

 var header = new Headhesive('.header');

 $(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });
});
 $(document).ready(function(){
    $(".header__button").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });
});
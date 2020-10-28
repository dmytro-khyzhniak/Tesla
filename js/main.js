$(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000, 
        dots: true
    });

    let headerBtn = $('.header-btn');
    let closeBtn = $('.close-btn');

    headerBtn.click(function () {
        $('.menu').css('left', '0px');
    });

    closeBtn.click(function () {
        $('.menu').css('left', '-100%');
    });
});


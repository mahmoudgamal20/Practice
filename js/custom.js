$(function() {

    // make the navbar active and make smooth scroll

    $('.navbar-dark .navbar-nav .nav-link').on('click', function() {

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    $('.navbar-dark .navbar-nav .nav-link,.arrow-down a,.overview a,.choose-us .choose-info a').on('click', function() {

        $('html,body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1500);

    });

    // trigger the arrow-down 

    // $('.arrow-down').on('click',function(){

    //     $('html,body').animate({

    //         scrollTop:

    //     },1500);

    // });

    // trigger the arrow up 

    $('.arrow-up').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 200) {
            $('.arrow-up').fadeIn(800);
        } else {
            $('.arrow-up').fadeOut(800);
        }
    });


    // trigger the carousel

    $('.carousel').carousel();

    // trigger typed.js

    var typed = new Typed('.head-back', {
        strings: ["Development", "Graphic", "Development", "Analysis"],
        typeSpeed: 150,
        startDelay: 150,
        backSpeed: 150,
        loop: true,
    });

    // make shuffle images

    $('.features ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') === 'all') {
            $('.feature-imgs .col-md').css('opacity', 1);
        } else {
            $('.feature-imgs .col-md').css('opacity', 0.08);
            $($(this).data('class')).css('opacity', 1);
        }
    });

    $('html,body').niceScroll({
        cursorcolor: "#7bc74d",
        cursorwidth: "10px",
        cursorborder: "0",
        cursorborderradius: "0",
        zindex: "999"
    });


})
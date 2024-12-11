

$(document).ready(function(){
  $('.scroll-top').on('click',function(){
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
});

    $('.watch:in-viewport').each(function(){
        $(this).addClass('reveal');
    });
    
    $(window).on('scroll', function () {

    $('.watch:in-viewport').each(function(){
        $(this).addClass('reveal');
    });
    });

    $('.burger').on('click',function(){
        $('menu.main-menu').slideToggle(300);
    });
    $('.search-button').on('click',function(){
        $('.search').slideToggle(300);
    });
    
    $("a.fancybox").fancybox();
});
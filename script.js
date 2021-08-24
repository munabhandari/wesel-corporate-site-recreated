$(window).scroll(function(){
    if($(window).scrollTop() > 50){
        $('.container-wrapper').addClass('sticky');
    }else{
        $('.container-wrapper').removeClass('sticky');

    }
})

$('header .nav-link').click(function(){
    $('header .nav-link.active').removeClass('active');
    $(this).addClass('active');
})

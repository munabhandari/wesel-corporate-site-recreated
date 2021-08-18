$(window).scroll(function(){
    if($(window).scrollTop() > 50){
        $('.container-wrapper').addClass('sticky');
    }else{
        $('.container-wrapper').removeClass('sticky');

    }
})
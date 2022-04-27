$('.ctn__content').addClass('animate__animated animate__bounceInUp');
$('.ctn__image').addClass('animate__animated animate__bounceInRight');

$(document).ready(function(){
    $(window).scroll(function(){
        var body=$('html,body').scrollTop();
        console.log(body);
        if (body>=100 && body<900) {
            $('.our_impact h1').addClass('animate__animated animate__bounceInUp');
            $('.our_impact .card').addClass('animate__animated animate__bounceInUp');
        } else if (body>=900 && body<1254) {
            $('.reason_title').addClass('animate__animated animate__bounceInUp');
            $('.info_item-1').addClass('animate__animated animate__bounceInUp');
        } else if (body>=1254 && body<2000) {
            $('.info_item-2').addClass('animate__animated animate__bounceInUp');
        
        } 

    });
})


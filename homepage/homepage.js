$('.ctn__content').addClass('animate__animated animate__bounceInUp');
$('.ctn__image').addClass('animate__animated animate__bounceInRight');
$(document).ready(function(){
    $(window).scroll(function(){
        var body=$('html,body').scrollTop();
        console.log(body);
        if (body==0) {
            
        } 
        
    });
})
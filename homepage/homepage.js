//animate
$('.ctn__content').addClass('animate__animated animate__bounceInUp');
$('.ctn__image').addClass('animate__animated animate__bounceInRight');
$('.content .info_img').addClass('animate__animated animate__bounceInLeft');
$('.content .info_content').addClass('animate__animated animate__bounceInRight');


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
        } else if (body>=1254 && body<1866) {
            $('.info_item-2').addClass('animate__animated animate__bounceInUp');
            
        } else if (body>=1866 && body<3000) {
            // $('.highlights .title').addClass('animate__animated animate__bounceInUp');
            // $('.highlights .card_project').addClass('animate__animated animate__bounceInUp');
        }
    });
})

//btn_project_card
function trans_aft_card() {
    let card_project = document.querySelector('.card_project');
    let form_card_project = document.querySelectorAll('.card_project .form_card_project');
    let card_project_1 = document.querySelector('.card_project-1');

    Object.assign(card_project.style ,{
        display : 'none',
    })

    Object.assign(card_project_1.style ,{
        display : 'flex',
    })
}

function trans_pre_card() {
    let card_project = document.querySelector('.card_project');
    let form_card_project = document.querySelectorAll('.card_project .form_card_project');
    let card_project_1 = document.querySelector('.card_project-1');
    
    Object.assign(card_project_1.style ,{
        display : 'none',
    })
    Object.assign(card_project.style ,{
        display : 'flex',
    })

}

//info_details
let modal=document.querySelector('.modal');

function open_prj() {
    modal.classList.add('open');
}

function close_prj() {
    console.log('hihi00');
    modal.classList.remove('open');
}



















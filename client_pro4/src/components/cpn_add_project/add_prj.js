

//handle : trans post_project_created : main-> FAQ
let tab;
const main_post = document.querySelector('.main_post');
const faq_post = document.querySelector('.FAQ_post');
const next_step_a = document.querySelector('.next_step a');

console.log(main_post);
//~~~~~~~   handle add story    ~~~~~~~~~~~

//function chay

function chooseFile_story_1(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(`#image_1`).attr('src' , e.target.result);
            path_image= e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function chooseFile_story_2(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(`#image_2`).attr('src' , e.target.result);
            path_image= e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function chooseFile_story_3(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(`#image_3`).attr('src' , e.target.result);
            path_image= e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function chooseFile_story_4(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(`#image_4`).attr('src' , e.target.result);
            path_image= e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function chooseFile_story_5(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(`#image_5`).attr('src' , e.target.result);
            path_image= e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function chooseFile_story_6(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(`#image_6`).attr('src' , e.target.result);
            path_image= e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function chooseFile_story_7(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(`#image_7`).attr('src' , e.target.result);
            path_image= e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

const button_add_str = document.querySelector('.story_post .button_add_str');

$(document).ready(function(){
    $(window).scroll(function(){
        var button_add_str_top = $('.button_add_str').offset().top;
        var ctn_footer_top = $('.ctn__footer').offset().top;

        if ((button_add_str_top + 455.52) < ctn_footer_top) {
            Object.assign(button_add_str.style , {
                display: 'flex',
            })
        }
        else {
            Object.assign(button_add_str.style , {
                display: 'none',
            })
        }
        

    })
})


















































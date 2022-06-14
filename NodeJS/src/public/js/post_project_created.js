
// choose_image
var path_image;
function chooseFile(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e){
            $('#image').attr('src' , e.target.result);
            path_image= e.target.result;
        }
        
        reader.readAsDataURL(fileInput.files[0]);
    }
}



//add FAQ
let question_FAQ = document.querySelector('.question_FAQ');
let data_FAQ = "";
let btn_next = `<button>NEXT</button>`;
let data_add_btn =
    `<div style="width: 100%;">
        <div class="add_FAQ" style="margin : 30px 0">
            <input type="text" name="question" id="question">
        </div>
    </div>`;

function add_FAQ() {
    data_FAQ += data_add_btn;
    question_FAQ.innerHTML = data_FAQ;
}

//handle : trans post_project_created : main-> FAQ
let tab;
const main_post = document.querySelector('.main_post');
const faq_post = document.querySelector('.FAQ_post');
const next_step_a = document.querySelector('.next_step a');

console.log(main_post);

function click_main_trans_faq() {
    Object.assign(main_post.style , {
        display : 'none',
    })
    Object.assign(faq_post.style, {
        display : 'flex',
    })
}



// click_main_trans_faq();



// handle nav header 
const over_view = document.querySelector('.main_post');
const faq = document.querySelector('.FAQ_post');
const story = document.querySelector('.story_post');

function close_all() {
    Object.assign(over_view.style , {
        display : 'none',
    })
    Object.assign(story.style , {
        display : 'none',
    })
    // Object.assign(rewards.style , {
    //     display : 'none',
    // })
    Object.assign(faq.style , {
        display : 'none',
    })
}

function open_over_view() {
    close_all();
    Object.assign(over_view.style , {
        display : 'flex',
    })
}

function open_story() {
    close_all();
    Object.assign(story.style , {
        display : 'flex',
    })
}

// function open_rewards() {
//     close_all();
//     Object.assign(rewards.style , {
//         display : 'flex',
//     })
// }

function open_faq() {
    close_all();
    Object.assign(faq.style , {
        display : 'flex',
    })
}


//~~~~~~~   handle add story    ~~~~~~~~~~~
let id_image = 0,id_title = 0,id_content = 0;
let input_add_str = document.querySelector('.input_add_str');
let data_story = "";
// let data_add_title =
//     `<input name="title${id_title}" type="text" style="width: 90%;font-size : 40px; padding: 10px;margin: 10px;">
//     `;
// let data_add_content = 
//     `<input name="content${id_content}" type="text" style="width: 90%;font-size : 20px; padding: 10px;margin: 10px;">
//     `;
// let data_add_image = 
//     `<div style="display: flex; flex-direction: column;">
//     <img style="margin: 0 auto; z-index: 1" src="" alt="" id="image_${id_image}" width="300" height="300">
//     <input style="width: 80%;margin: 20px auto 60px auto;" type="file" class="form-control" id="img_big" name="img_big" onchange=chooseFile_story(this)
//             accept="image/gif , image/jpeg, image/png">
//     </div>
//     `

function add_story_title() {
    id_title++;
    data_story += 
    `<input name="title${id_title}" type="text" style="width: 90%;font-size : 30px; padding: 20px;margin: 10px;">
    `;
    input_add_str.innerHTML = data_story;
}

function add_story_content() {
    id_content++;
    data_story += 
    `<input name="content${id_content}" type="text" style="width: 90%;font-size : 20px; padding: 10px;margin: 10px;">
    `;
    input_add_str.innerHTML = data_story;
}

function add_story_image() {
    id_image++;
    data_story += 
    `<div style="display: flex; flex-direction: column;">
    <img style="margin: 0 auto; z-index: 1" src="" alt="" id="image_${id_image}" width="300" height="300">
    <input name="image${id_image}" style="width: 80%;margin: 20px auto 60px auto;" type="file" class="form-control" id="img_big" name="img_big" onchange=chooseFile_story_${id_image}(this)
            accept="image/gif , image/jpeg, image/png">
    </div>
    `;
    input_add_str.innerHTML = data_story;
}

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
















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
function close_all() {
    Object.assign(over_view.style , {
        display : 'none',
    })
    // Object.assign(story.style , {
    //     display : 'none',
    // })
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

// function open_story() {
//     close_all();
//     Object.assign(story.style , {
//         display : 'flex',
//     })
// }

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




























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
































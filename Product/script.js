const body=document.querySelector("body"),
      slidebar=body.querySelector(".the_left_page"),
      toggle=body.querySelector(".toggle"),
      modeSwitch=body.querySelector(".toggle-switch"),
      modeText=body.querySelector(".mode-text");

      toggle  

      modeSwitch.addEventListener("click",()=>{
          body.classList.toggle("dark");
          if(body.classList.contains("dark")){
              modeText.innerText="Light Mode";
          }else{
              modeText.innerText="Dark Mode";
          }
      })
      
      
      $(document).ready(function(){
          var width=$(document).width();
          console.log(width);
        $('.ctn__footer').waypoint(
            function(direction){
                if(direction == 'down'){
                    $('.letf_page').hide(200);
                    // $('.center_page').addClass('center_page_fix'); 
                    $('.investor_rankings').hide(200);
                    $('.Top_project_fix').hide(200);
                }else if(width > 768 ) {
                    $('.letf_page').show(300);
                    //  $('.center_page').removeClass('center_page_fix');
                    $('.investor_rankings').show();
                    $('.Top_project_fix').show();
                }
              
            },{
                offset : "560px"
            }
        )
      })
    
    

/* =============loadding================= */
/*-----coi lại promise-------*/
var ctn__loading__home=document.querySelector('.ctn__loading__body');
var homepage=document.querySelector('#homepage');
var product=document.querySelector('#product');
var projects=document.querySelector('#projects');

function sleep(s){
    return new Promise(function(resolve) {
        setTimeout(resolve,s)
    })
}

function onclick__home(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            
            return sleep(1300);
        })
        .then(function() {
            
            ctn__loading__home.classList.remove('open__load')
            homepage.href="../homepage/index.html"; 
            homepage.click();
        })      
}
homepage.addEventListener('click' , onclick__home);

function onclick__product(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            
            return sleep(1300);
        })
        .then(function() {
            
            ctn__loading__home.classList.remove('open__load')
            product.href="../Product/index.html"; 
            product.click();
        })      
}

product.addEventListener('click' , onclick__product);


function onclick__projects(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            return sleep(1300);
        })
        .then(function() {
            
            ctn__loading__home.classList.remove('open__load')
            projects.href="../projects/index.html"; 
            projects.click();
        })      
}

projects.addEventListener('click' , onclick__projects);

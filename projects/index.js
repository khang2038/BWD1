const body=document.querySelector("body"),
      slidebar=body.querySelector(".the_left_page"),
      toggle=body.querySelector(".toggle"),
      modeSwitch=body.querySelector(".toggle-switch"),
      modeText=body.querySelector(".mode-text");

      toggle  

      modeSwitch.addEventListener("click",()=>{
          alert("gugu");
          body.classList.toggle("dark");
          if(body.classList.contains("dark")){
              modeText.innerText="Light Mode";
          }else{
              modeText.innerText="Dark Mode";
          }
      })


// transform thanh chủ đề 
function onmouseover_the_left_page() {
    Object.assign(slidebar.style , {
        animationName : 'trans_slide_bar_to_left',
        animationDuration: '0.5s',
        left: 0,
    })
}

function onmouseout_the_left_page() {
    Object.assign(slidebar.style , {
        animationName : 'trans_slide_bar_to_right',
        animationDuration: '0.5s',
        left : '-14%',
    })
}

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

// to top btn

window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });
  
  // Scroll to a certain element
  document.querySelector('.hello').scrollIntoView({ 
    behavior: 'smooth' 
  });














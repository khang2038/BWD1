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
            homepage.href="home"; 
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
            product.href="product"; 
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
            projects.href="detail"; 
            projects.click();
        })      
}

projects.addEventListener('click' , onclick__projects);
// loading mobile

var ctn__loading__home=document.querySelector('.ctn__loading__body');
var homepage_mb=document.querySelector('#homepage_mobile');
var product_mb=document.querySelector('#product_mobile');
var projects_mb=document.querySelector('#projects_mobile');

function sleep(s){
    return new Promise(function(resolve) {
        setTimeout(resolve,s)
    })
}

function onclick__home_mb(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            
            return sleep(1300);
        })
        .then(function() {
            
            ctn__loading__home.classList.remove('open__load')
            homepage_mb.href="localhost:3000/homepage"; 
            homepage_mb.click();
        })      
}
homepage_mb.addEventListener('click' , onclick__home_mb);

function onclick__product_mb(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            
            return sleep(1300);
        })
        .then(function() {
            
            ctn__loading__home.classList.remove('open__load')
            product_mb.href="localhost:3000/Product"; 
            product_mb.click();
        })      
}

product_mb.addEventListener('click' , onclick__product_mb);


function onclick__projects_mb(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            return sleep(1300);
        })
        .then(function() {
            
            ctn__loading__home.classList.remove('open__load')
            projects_mb.href="localhost:3000/detail"; 
            projects_mb.click();
        })      
}

projects_mb.addEventListener('click' , onclick__projects_mb);

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














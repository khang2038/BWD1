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
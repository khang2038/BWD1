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
        $('.ctn__footer').waypoint(
            function(direction){
                if(direction == 'down'){
                    slidebar.classList.remove('letf_page');
                }else{
                    slidebar.classList.add('letf_page');
                }
            },{
                offset : "550px"
            }
        )
    })

    
   
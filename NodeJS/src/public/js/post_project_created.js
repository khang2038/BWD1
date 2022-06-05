
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





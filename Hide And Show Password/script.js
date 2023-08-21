let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "./image/eye-svgrepo-com (1).svg"
    }else{
        password.type = "password";
        eyeicon.src = "./image/eye-closed-svgrepo-com.svg"
    }
}
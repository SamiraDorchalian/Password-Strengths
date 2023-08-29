const btnEl = document.querySelector(".btn");
const copyIcon = document.querySelector(".icon");
const alertContainer = document.querySelector(".alert-container");

const inputEl = document.getElementById("input");

btnEl.addEventListener("click", () =>{
    createPassword();
})

copyIcon.addEventListener("click", ()=>{
    copyPassword();
    if(inputEl.value){
        alertContainer.classList.remove("active");
        setTimeout(() =>{
            alertContainer.classList.add("active");
        }, 2000);
    }
});

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?{}[]ABCDEFGHIJKMNOPQRSTUVWXYZ";
    const passwordLength = 14;

    let password = "";

    for (let index = 0; index < passwordLength; index++) {
        const randomNun = Math.floor(Math.random() * chars.length);

        password += chars.substring(randomNun, randomNun + 1);
        
    }
    inputEl.value = password;
    alertContainer.innerText = password + " copied!";
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}
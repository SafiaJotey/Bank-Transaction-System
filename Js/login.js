const emailInput= document.getElementById("emailInput");
const passWordInput= document.getElementById("passWordInput");
const loginButton= document.getElementById("Login");

passWordInput.addEventListener("keydown",function(event){
    if(event.key ==="enter"){
        loginButton.click();
    }
})

loginButton.addEventListener("click",()=>{
    const emailInputValue=emailInput.value;
    const PassWordInputValue=passWordInput.value;
    if(emailInputValue=="safia@gmail.com" && PassWordInputValue=="1234"){
        window.location.href="home.html";
    }
    
})
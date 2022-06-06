


var signUpData = JSON.parse(localStorage.getItem("signupData"))

document.querySelector("#form").addEventListener("submit",signinFunction)


function signinFunction(){
    event.preventDefault();

    var email=form.email.value;
    var password=document.getElementById("password").value;

    var count=0;

signUpData.forEach(function(ele){

    if(email===ele.email && password===ele.password){
    
         alert("Sign IN Successfull!!")
        window.location.href="index.html";
    }
    else
    {
        count++;
    }
})
if(count==signUpData.length)    alert("Invalid Credentials")

form.email.value = "";
document.getElementById("password").value = "";


}

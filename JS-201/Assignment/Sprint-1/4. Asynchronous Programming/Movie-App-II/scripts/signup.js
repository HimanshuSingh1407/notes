
document.querySelector("#form").addEventListener("submit", signupFunction);


var signUpData = JSON.parse(localStorage.getItem("signupData")) || [];

function signupFunction(){
    event.preventDefault();

    var data = {
        name : form.name.value,
        number : form.number.value,
        email : form.email.value,
        password : form.password.value,
        
    };
    
    if(data.name==="")
    {
        alert("Please fill Name")
    }
    else if(data.number==="" )
    {
        alert("Please fill Contact Number")
    }
    else if(data.email==="")
    {
        alert("Please fill Email Id")
    }
    else if(data.password==="")
    {
        alert("Please fill Password")
    }
    else
    {
        alert("Sing up successfully")
        signUpData.push(data)
        //console.log(signUpData)
        localStorage.setItem("signupData", JSON.stringify(signUpData))
    }
             
    window.location.href = "login.html";
    
}
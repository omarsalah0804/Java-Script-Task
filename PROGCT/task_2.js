let signInBtn=document.getElementById("signInId");
let emailField=document.getElementById("email");
let passwordField=document.getElementById("password");

//email field
emailField.addEventListener("focus",function(){
    document.getElementById("emailP").style.display="none";
})


//password field
passwordField.addEventListener("focus",function(){
    document.getElementById("passwordP").style.display="none";
})

//login button field
signInBtn.addEventListener("click",function(event){
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let i=0;
    for(;i<users.length;i++){
        if(users[i]["email"]==emailField.value && users[i]["password"]==passwordField.value){
            alert("Welcome "+ users[i]["firstName"] + "!!");
            document.getElementById("emailP").style.display="none";
            document.getElementById("passwordP").style.display="none";
            localStorage.setItem("userName", JSON.stringify(users[i]["firstName"]));
            window.location.href=""
        ;}
        if(users[i]["email"]==emailField.value && users[i]["password"]!=passwordField.value){
            document.getElementById("emailP").style.display="none";
            document.getElementById("passwordP").style.display="block";
            document.getElementById("passwordP").classListadd("invalid");
            console.log("error pass");
            break;}
    }
    if(i==users.length){
        document.getElementById("emailP").style.display="block";
        document.getElementById("emailP").classListadd("invalid");
        document.getElementById("passwordP").style.display="none";
        console.log("error email");
    }
    
})
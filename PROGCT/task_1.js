let userObject={};
let firstNameFlag=0;
let lastNameFlag=0;
let emailFlag=0
let confEmailFlag=0;
let passwordFlag=0;
let confPasswordFlag=0
let requiredPositionFlag=0;

let up=0;
let lw=0;
let nm=0;
let lg=0;


//first name field
let firstName=document.getElementById("fName");
firstName.addEventListener("focus",function(){
    document.getElementById("fNameP").style.display="block";
})
firstName.addEventListener("blur",function(){
    document.getElementById("fNameP").style.display="none";
})
firstName.addEventListener("keyup",function(){
    let fNameRE=/[a-zA-Z]{3,}/g;
    console.log(firstName.value.match(fNameRE)==firstName.value);
    if(firstName.value.match(fNameRE)==firstName.value){
        document.getElementById("fNameP").classList.remove("invalid");
        document.getElementById("fNameP").classList.add("valid");
        firstNameFlag=1;
    }else{
        document.getElementById("fNameP").classList.remove("valid");
        document.getElementById("fNameP").classList.add("invalid");
    }
})

//last name field
let lastName=document.getElementById("lName");
lastName.addEventListener("focus",function(){
    document.getElementById("lNameP").style.display="block";
})
lastName.addEventListener("blur",function(){
    document.getElementById("lNameP").style.display="none";
})
lastName.addEventListener("keyup",function(){
    let lNameRE=/[a-zA-Z]{3,}/g;
    if(lastName.value.match(lNameRE)==lastName.value){
        document.getElementById("lNameP").classList.remove("invalid");
        document.getElementById("lNameP").classList.add("valid");
        lastNameFlag=1;
    }else{
        document.getElementById("lNameP").classList.remove("valid");
        document.getElementById("lNameP").classList.add("invalid");
    }
})


//Email field
let email=document.getElementById("email");
email.addEventListener("focus",function(){
    document.getElementById("emailP").style.display="block";
})
email.addEventListener("blur",function(){
    document.getElementById("emailP").style.display="none";
})
email.addEventListener("keyup",function(){
    let emailRE=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // let matchResult=email.value.match(emailRE);
    if(email.value.match(emailRE)){
        document.getElementById("emailP").classList.remove("invalid");
        document.getElementById("emailP").classList.add("valid");
        emailFlag=1;
    }else{
        document.getElementById("emailP").classList.remove("valid");
        document.getElementById("emailP").classList.add("invalid");
    }

})

//confirm Email field
let confEmail=document.getElementById("confEmail");
confEmail.addEventListener("focus",function(){
    document.getElementById("confEmailP").style.display="block";
})
confEmail.addEventListener("blur",function(){
    document.getElementById("confEmailP").style.display="none";
})
confEmail.addEventListener("keyup",function(){
    if(email.value===confEmail.value){
        document.getElementById("confEmailP").classList.remove("invalid");
        document.getElementById("confEmailP").classList.add("valid");
        confEmailFlag=1;
    }else{
        document.getElementById("confEmailP").classList.remove("valid");
        document.getElementById("confEmailP").classList.add("invalid");
    }
})

//Password field
let password=document.getElementById("password");
password.addEventListener("focus",function(){
        document.getElementById("capitalPass").style.display="block";
        document.getElementById("letterPass").style.display="block";
        document.getElementById("numberPass").style.display="block";
        document.getElementById("lengthPass").style.display="block";
})
password.addEventListener("blur",function(){
        document.getElementById("capitalPass").style.display="none";
        document.getElementById("letterPass").style.display="none";
        document.getElementById("numberPass").style.display="none";
        document.getElementById("lengthPass").style.display="none";
})
password.addEventListener("keyup",function(){
    // let passwordRE=/(^[A-Z])(?=.*\d)(?=.*[a-z]).{8,32}/g;
    
    var upperCaseLetters = /(^[A-Z])/g;
    if(password.value.match(upperCaseLetters)) {  
        capitalPass.classList.remove("invalid");
        capitalPass.classList.add("valid");
        up=1;
    } else {
        capitalPass.classList.remove("valid");
        capitalPass.classList.add("invalid");
    }
    var lowerCaseLetters = /(?=.*[a-z])/g;
    if(password.value.match(lowerCaseLetters)) {  
        letterPass.classList.remove("invalid");
        letterPass.classList.add("valid");
        lw=1;
    } else {
        letterPass.classList.remove("valid");
        letterPass.classList.add("invalid");
    }
    var numbers = /(?=.*\d)/g;
    if(password.value.match(numbers)) {  
        numberPass.classList.remove("invalid");
        numberPass.classList.add("valid");
        nm=1;
    } else {
        numberPass.classList.remove("valid");
        numberPass.classList.add("invalid");
    }
    if(password.value.length >= 8 && password.value.length<=32) {
        lengthPass.classList.remove("invalid");
        lengthPass.classList.add("valid");
        lg=1;
    } else {
        lengthPass.classList.remove("valid");
        lengthPass.classList.add("invalid");
    }if(up && lw && nm && lg){
        passwordFlag=1;
    }
})

//confirm Password field
let confPassword=document.getElementById("confPassword");
confPassword.addEventListener("focus",function(){
    document.getElementById("confPassP").style.display="block";
})
confPassword.addEventListener("blur",function(){
    document.getElementById("confPassP").style.display="none";
})
confPassword.addEventListener("keyup",function(){
    if(password.value===confPassword.value){
        console.log("valid");
        document.getElementById("confPassP").classList.remove("invalid");
        document.getElementById("confPassP").classList.add("valid");
        confPasswordFlag=1;
    }else{
        console.log("in-valid");
        document.getElementById("confPassP").classList.remove("valid");
        document.getElementById("confPassP").classList.add("invalid");
    }
})

//required Position list
let requiredPosition=document.getElementById("requiredPosition");
requiredPosition.addEventListener("change",function(){
    if(requiredPosition.value!=="SelectPosition"){
        document.getElementById("selectP").style.display="none";
        requiredPositionFlag=1;
    }
})

//submit Button
let ButtonSubmit=document.getElementById("buttonID");
ButtonSubmit.addEventListener("click",function(event){
    if(requiredPositionFlag===0){
        event.preventDefault();
        document.getElementById("selectP").style.display="block";
    }
    if(firstNameFlag ==0){
        event.preventDefault();
        document.getElementById("fNameP").style.display="block";
        document.getElementById("fNameP").classList.remove("valid");
        document.getElementById("fNameP").classList.add("invalid");
    }
    if(lastNameFlag ==0){
        event.preventDefault();
        document.getElementById("lNameP").style.display="block";
        document.getElementById("lNameP").classList.remove("valid");
        document.getElementById("lNameP").classList.add("invalid");
    }
    if(emailFlag ==0){
        event.preventDefault();
        document.getElementById("emailP").style.display="block";
        document.getElementById("emailP").classList.remove("valid");
        document.getElementById("emailP").classList.add("invalid");
    }
    if(confEmailFlag==0){
        event.preventDefault();
        document.getElementById("confEmailP").style.display="block";
        document.getElementById("confEmailP").classList.remove("valid");
        document.getElementById("confEmailP").classList.add("invalid");
    }
    if(passwordFlag==0){
        event.preventDefault();
        document.getElementById("capitalPass").style.display="block";
        document.getElementById("letterPass").style.display="block";
        document.getElementById("numberPass").style.display="block";
        document.getElementById("lengthPass").style.display="block";
    }
    if(confPasswordFlag==0){
        event.preventDefault();
        document.getElementById("confPassP").style.display="block";
    }
    if(firstNameFlag && lastNameFlag && emailFlag && confEmailFlag && passwordFlag && confPasswordFlag &&requiredPositionFlag ){
        event.preventDefault();

        userObject["firstName"]=firstName.value;
        userObject["lastName"]=lastName.value;
        userObject["email"]=confEmail.value;
        userObject["password"]=confPassword.value;
        userObject["requiredPosition"]=requiredPosition.value;
        console.log(userObject);
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(userObject);
        localStorage.setItem("users", JSON.stringify(users));
        if(requiredPosition.value==="HTML"){
            let correctAnswerHTML=[1,3,3,1,4,2,1,4,2,3];
            localStorage.setItem("correctAnswerHTML",JSON.stringify(correctAnswerHTML));
        }
        else if(requiredPosition.value==="CSS"){
            let correctAnswerCSS=[3,3,2,1,4,1,1,2,4,3];
            localStorage.setItem("correctAnswerCSS",JSON.stringify(correctAnswerCSS));
        }
        else{
            let correctAnswerJS=[2,3,4,4,1,1,3,2,4,2];
            localStorage.setItem("correctAnswerJS",JSON.stringify(correctAnswerJS));
        }
        window.location.href="./task_2.html";
    }
})
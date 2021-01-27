function checkLogin(){

const username = 'Username'
const password = 'Password'

let usernameAttempt = document.querySelector('#Username')
let passwordAttempt = document.querySelector('#Password')


    if (usernameAttempt.value == username && passwordAttempt.value == password){
        document.querySelector('.errorMSG').textContent = "Username  Password are correct"
        document.querySelector('.errorMSG').style.color = "lime";
        usernameAttempt.style.borderBottomColor = '#0084ff';
        passwordAttempt.style.borderBottomColor = '#0084ff';
    } else if (usernameAttempt.value == "" && passwordAttempt.value == ""){
        document.querySelector('.errorMSG').textContent = "Username or Password cannot be blank"
        document.querySelector('.errorMSG').style.color = "red";
    } else {
        document.querySelector('.errorMSG').textContent = "Username or Password are incorrect"
        document.querySelector('.errorMSG').style.color = "red";
        usernameAttempt.style.borderBottomColor = "red";
        passwordAttempt.style.borderBottomColor = "red";
    } 
}

$(document).ready(function(){

    $(".hint").click(function(){
        $(".hintMSG").fadeToggle(200);
      });
  
  });
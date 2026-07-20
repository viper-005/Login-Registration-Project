const loginForm=document.getElementById("loginForm");

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("loginEmail").value;

const password=document.getElementById("loginPassword").value;

const storedUser=JSON.parse(localStorage.getItem("user"));

if(

storedUser &&

email===storedUser.email &&

password===storedUser.password

){

localStorage.setItem(

"loggedInUser",

JSON.stringify(storedUser)

);

alert("Login Successful");

window.location.href="home.html";

}

else{

alert("Invalid Email or Password");

}

});

let form =document.querySelector("form");
let userName =document.querySelector("#username");
let userPassCode =document.querySelector("#username");
let userEmail =document.querySelector("#email");
form.addEventListener("submit", (e)=> {
  e.preventDefault();
  let userData = {
    name: `${userName.value}`,
    email: `${userEmail.value}`,
    code: `${userPassCode.value}`,
    me:false
  }
  localStorage.setItem("DATA", JSON.stringify(userData));
  location.href ="myprojects.html"
})
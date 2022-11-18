let checkUserName = document.querySelector("#username");
let checkUserCode = document.querySelector("#password");
loginForm = document.querySelector("form");

let massage = document.querySelector('.message');
let userD = JSON.parse(localStorage.getItem("DATA")) || [];
let me = document.querySelector("#me");
loginForm.addEventListener("submit", (e)=> {
  e.preventDefault();
    if(userD.name == checkUserName.value && userD.code == checkUserCode.value) {
      if(me.checked==true) {
        userD.me = true;
        localStorage.setItem("DATA", JSON.stringify(userD));
      }
      location.href="myprojects.html";
    }else {
      massage.textContent = "invalid username or password";
    }
})
    
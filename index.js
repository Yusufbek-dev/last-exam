let rememberBtn = document.querySelector(".check");
rememberBtn.addEventListener("click", ()=> {
  let val = JSON.parse(localStorage.getItem("DATA")) ? JSON.parse(localStorage.getItem("DATA")) : location.href = "login.html"
  
  if(val.me) {
    console.log(val.me);
    location.href ="myprojects.html";
  }else {
    location.href = "login.html"
  }
})
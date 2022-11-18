let nameUser = document.querySelector(".username");
let userData = JSON.parse(localStorage.getItem("DATA"));
nameUser.innerHTML = userData.name;

let logOut = document.querySelector(".logOut");
let userDel = document.querySelector(".deleteAccountBtn");

logOut.addEventListener("click", ()=> {
  userData.me=false;
  localStorage.setItem("DATA", JSON.stringify(userData));
  location.href="index.html"
});
userDel.addEventListener("click", ()=> {
  localStorage.clear();
  location.href="index.html";
});

let projects =document.querySelector(".projects");
let frData = JSON.parse(localStorage.getItem("frData")) || [];
// console.log(frData);
  for(let i = 0; i<frData.length; i++) {
    // let pr = document.createElement("div");background: linear-gradient(#, #9198e5); background: linear-gradient(to right, #1f4037, #99f2c8);
    let project = ` 
    <div class="project" style="background-image: linear-gradient(to right bottom, rgb(60, 39, 155), rgba(60, 39, 155, 0.34)), url(${frData[i].frImg})"> ${frData[i].frTitle}</div>
    `
    projects.innerHTML += project;
  }



let userName = document.querySelector(".username").textContent = JSON.parse(localStorage.getItem("DATA")).name;
let form = document.querySelector("form"),
    img = document.querySelector("#imgurl"),
    title = document.querySelector("#title"),
    job = document.querySelector("#job"),
    data = document.querySelector("#date"),
    description = document.querySelector("#description");

let getJob =document.querySelector(".getJob"),
    getDate =document.querySelector(".getDate"),
    getImg =document.querySelector(".getImg"),
    getName =document.querySelector(".name"),
    getAbout =document.querySelector(".getAbout");
form.addEventListener("input", (e)=> {
  getImg.setAttribute("src", `${img.value}`);
  getJob.innerHTML =job.value;
  getDate.innerHTML =data.value;
  getAbout.innerHTML =description.value;
  getName.innerHTML =title.value;
})



let frData = JSON.parse(localStorage.getItem("frData")) || [];
form.addEventListener("submit", (e)=> {
  e.preventDefault();
  // let fd = new FormData(form);
  // let obj = Object.fromEntries(fd)
  let frontData = {
    frTitle: title.value,
    frImg: img.value,
  }
  frData.push(frontData);
  localStorage.setItem("frData", JSON.stringify(frData));
  location.href = "myprojects.html"
});
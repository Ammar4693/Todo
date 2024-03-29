const FIRSTPAGE = document.querySelector(".firstpage");
const SECPAGE = document.querySelector(".secpage");
const THIRDPAGE = document.querySelector(".thirdpage");
const FOURPAGE = document.querySelector(".fourpage");
SECPAGE.classList.add("none");
FIRSTPAGE.classList.add("none");
// THIRDPAGE.classList.add("none");
FOURPAGE.classList.add("none");
const reg = document.getElementById("regis");
const sign = document.getElementById("sign");
const log = document.getElementById("log");
const create = document.getElementById("create");
const add = document.getElementById("add");
const home = document.getElementById("home");
const Tlists = document.getElementById("tlists");
let score = 0;
add.style.backgroundColor="#951BBF";
add.style.borderRadius="100%";
reg.addEventListener("click",function(){
  FIRSTPAGE.classList.add("none");
  SECPAGE.classList.remove("none");
  THIRDPAGE.classList.add("none");
  FOURPAGE.classList.add("none");
})
sign.addEventListener("click",function(){
  FIRSTPAGE.classList.add("none");
  SECPAGE.classList.remove("none");
  THIRDPAGE.classList.add("none");
  FOURPAGE.classList.add("none");
})
log.addEventListener("click",function(){
  FIRSTPAGE.classList.add("none");
  SECPAGE.classList.add("none");
  THIRDPAGE.classList.remove("none");
  FOURPAGE.classList.add("none");
})
create.addEventListener("click",function(){
  FIRSTPAGE.classList.remove("none");
  SECPAGE.classList.add("none");
  THIRDPAGE.classList.add("none");
  FOURPAGE.classList.add("none");
})
add.addEventListener("click",function(){
  FIRSTPAGE.classList.add("none");
  SECPAGE.classList.add("none");
  THIRDPAGE.classList.add("none");
  FOURPAGE.classList.remove("none");
})
home.addEventListener("click",function(){
  FIRSTPAGE.classList.add("none");
  SECPAGE.classList.remove("none");
  THIRDPAGE.classList.add("none");
  FOURPAGE.classList.add("none");
})
Tlists.addEventListener("click",function(){
  FIRSTPAGE.classList.add("none");
  SECPAGE.classList.add("none");
  THIRDPAGE.classList.remove("none");
  FOURPAGE.classList.add("none");
})
  document.querySelector(".txt").addEventListener("input",function (ev) {
    if(ev.inputType==="deleteContentBackward"){
      score--;
    }
    else{
      score++;
    }
    document.querySelector(".sptxt").textContent = score+"/40";
  })

let today = new Date().toLocaleDateString().split('/').reverse().join('-');
let date = document.querySelector('.date input');
date.value = today;


var toggle = document.querySelector(".toggle-show")
var toggle1 = document.querySelector(".toggle-show1")
var toggle2 = document.querySelector(".toggle-show2")
var toggle3 = document.querySelector(".toggle-show3")

var showMoreBtn = document.getElementById("toggle-btn")
var showLessBtn = document.getElementById("toggle-btn2")

function toggle1Func(){
    toggle.style.display = "flex";
    toggle1.style.display = "flex";
    toggle2.style.display = "flex";
    toggle3.style.display = "flex";
    showMoreBtn.style.display = "none";
    showLessBtn.style.display = "block";
}

function toggle2Func(){
    toggle.style.display = "none";
    toggle1.style.display = "none";
    toggle2.style.display = "none";
    toggle3.style.display = "none";
    showMoreBtn.style.display = "block";
    showLessBtn.style.display = "none";
}
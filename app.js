var menuIcon= document.querySelector(".menu");
var sideBar= document.querySelector(".sidebar");
var container= document.querySelector(".main");
var tags=document.querySelector(".tags");

menuIcon.onclick=function(){
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    tags.classList.toggle("large-tags");
}
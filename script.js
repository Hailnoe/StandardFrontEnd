var hamburger = Front.querySelector(".wrapper .section .top_navbar .hamburger");

hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
})
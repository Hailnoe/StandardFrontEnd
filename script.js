var hamburger = Front.querySelector(".hamburger");

hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
})
const topFixed = document.querySelector(".top-fixed");
const sticky = topFixed.offsetTop;

window.addEventListener("scroll",()=>{
    if (window.pageYOffset >= sticky) {
        topFixed.classList.add("sticky")
    }
    else {
        topFixed.classList.remove("sticky");
    }
})
const topFixed = document.querySelector(".top-fixed");
const sticky = topFixed.offsetTop;
const scrollProgressBar = document.querySelector("div.scroll-progress-bar");

window.addEventListener("scroll",()=>{
    const percent = window.scrollY/(document.body.scrollHeight - window.innerHeight)*100;
    scrollProgressBar.style.width = `${percent}%`;



    if (window.pageYOffset >= sticky) {
        topFixed.classList.add("sticky")
    }
    else {
        topFixed.classList.remove("sticky");
    }
})
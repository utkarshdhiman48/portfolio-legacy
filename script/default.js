const topFixed = document.querySelector(".top-fixed");
const sticky = topFixed.offsetTop;
// const scrollProgressBar = document.querySelector("div.scroll-progress-bar");
const mode = document.querySelector(".mode");
const modeChangeBtn = document.querySelector(".mode-change-btn");
window.addEventListener("scroll",()=>{
    // const percent = window.scrollY/(document.body.scrollHeight - window.innerHeight)*100;
    // scrollProgressBar.style.width = `${percent}%`;

    if (window.pageYOffset >= sticky) {
        topFixed.classList.add("sticky")
    }
    else {
        topFixed.classList.remove("sticky");
    }
})

modeChangeBtn.addEventListener("click",()=>{
    if(mode.getAttribute('href')==="css/light.css"){
        mode.setAttribute('href',"css/dark.css");
    }
    else{
        mode.setAttribute('href',"css/light.css")
    }
    // if(typeof(Storage) !== "undefined"){
    //     if(localStorage.utthm==="d"){
    //         mode.setAttribute('href',"css/dark.css")
    //     }
    //     else if (localStorage.utthm ==="l"){
    //         mode.setAttribute('href',"css/light.css")
    //     }
    //     localStorage.setItem("utthm",mode.getAttribute("href"));
    // }
})
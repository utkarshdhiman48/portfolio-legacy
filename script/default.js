const topFixed = document.querySelector(".top-fixed");
const navLinks = document.querySelectorAll("div.navigation nav ul li a");
const sticky = topFixed.offsetTop;

const mode = document.querySelector(".mode");
const modeChangeBtn = document.querySelector(".mode-change-btn");
window.addEventListener("scroll",()=>{

    if (window.pageYOffset >= sticky) {
        topFixed.classList.add("sticky")
    }
    else {
        topFixed.classList.remove("sticky");
    }
})

modeChangeBtn.addEventListener("click",()=>{
    if(mode.getAttribute('href')==="css/light.min.css"){
        mode.setAttribute('href',"css/dark.min.css");
    }
    else{
        mode.setAttribute('href',"css/light.min.css")
    }
    if(typeof(Storage) !== "undefined"){
        if(localStorage.utthm==="d"){
            mode.setAttribute('href',"css/dark.min.css")
        }
        else if (localStorage.utthm ==="l"){
            mode.setAttribute('href',"css/light.min.css")
        }
        localStorage.setItem("utthm",mode.getAttribute("href"));
    }
})

navLinks.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        document.querySelector(e.target.dataset.href).scrollIntoView({block: 'start', behavior: "smooth"});
    })
});
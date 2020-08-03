const models = document.querySelectorAll(".model");
const modelOverlay = document.querySelector(".modelOverlay");
const modelImmediateImg = modelOverlay.children[0];

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
    if(mode.getAttribute('href')==="css/light.css"){
        mode.setAttribute('href',"css/dark.css");
    }
    else{
        mode.setAttribute('href',"css/light.css")
    }
    if(typeof(Storage) !== "undefined"){
        if(localStorage.utthm==="d"){
            mode.setAttribute('href',"css/dark.css")
        }
        else if (localStorage.utthm ==="l"){
            mode.setAttribute('href',"css/light.css")
        }
        localStorage.setItem("utthm",mode.getAttribute("href"));
    }
})

navLinks.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        document.querySelector(e.target.dataset.href).scrollIntoView({block: 'start', behavior: "smooth"});
    })
});

models.forEach((model)=>{
    model.addEventListener("click", (e)=>{
        modelImmediateImg.src=e.target.src;
        modelOverlay.style.display = "flex";
        modelOverlay.style.left = 0;
        modelOverlay.style.top = 0;
    })
});

modelOverlay.addEventListener("click",()=>{
    modelOverlay.style.display = "none";
});
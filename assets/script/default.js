AOS.init({
    offset: 100,
    delay: 50
});

new ScrollSpy({
    activeClassName: "active-link-btn",
    checkLowerBound: false
});


const models = document.querySelectorAll(".model");
const modelOverlay = document.querySelector(".modelOverlay");
const modelImmediateImg = modelOverlay.children[0];

const topFixed = document.querySelector(".top-fixed");
const navLinks = [...document.querySelectorAll("div.navigation nav ul li a"),...document.querySelectorAll("div.overlay-nav .overlay-content a")];

const mode = document.querySelector(".mode");
const modeChangeBtn = document.querySelector(".mode-change-btn");

let utThm=localStorage.getItem("utthm");
console.log(utThm);
switch (utThm) {
    case "l":
        mode.setAttribute('href',"assets/css/light.css");
        break;

    default:
        mode.setAttribute('href',"assets/css/dark.css");
        break;
}

const scrollTriggers = [...document.querySelectorAll("[data-trg]")];

//scroll 
if(!window.matchMedia("(max-width: 600px)").matches){
    window.addEventListener("scroll",()=>{
        let scrolled = document.body.scrollTop || document.documentElement.scrollTop;
        let viewportHeight = window.innerHeight;
        //nav-bar
        if (scrolled> 120) {
            topFixed.style.top = "0";
        } else {
            topFixed.style.top = "-50px";
        }
    });
}



//responsive nav
function openNav() {
    document.querySelector(".overlay-nav").style.height = "100%";
}
  
function closeNav() {
    document.querySelector(".overlay-nav").style.height = "0%";
}


//theme
modeChangeBtn.addEventListener("click",()=>{
    let utthm = "d";
    if(mode.getAttribute('href')==="assets/css/light.css"){
        mode.setAttribute('href',"assets/css/dark.css");
        utthm="d";
    }
    else{
        mode.setAttribute('href',"assets/css/light.css")
        utthm="l";
    }

    if(typeof(Storage) !== "undefined")
        localStorage.setItem("utthm", utthm);
})

//no # links
navLinks.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        if(e.target.dataset.pointsto){
            document.querySelector("#"+e.target.dataset.pointsto).scrollIntoView({block: 'start', behavior: "smooth"});
        }
    })
});

//modal
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

///timeline
let colors = new Map();

document.querySelectorAll("[data-year]").forEach((ele)=>{
    colors.set(parseInt(ele.dataset['year']), null);
});

//random color generator
colors.forEach((v,k)=>{
    colors.set(k, `hsl(${parseInt((Math.random()*1000)%360)}, ${parseInt((Math.random()*100)%100)}%, ${parseInt(60)}%)`);
});
document.querySelectorAll("[data-year]").forEach((element)=>{
    if(element.classList.contains("timeline-progress-bar")){
        element.style.backgroundColor = colors.get(parseInt(element.dataset['year']));
    }
    else{
        element.style.borderColor = colors.get(parseInt(element.dataset['year']));
    }
});

function randomColorChannel(){
    return parseInt((Math.random()*100+150)%220);
}

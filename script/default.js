AOS.init({
    offset: 100,
    delay: 50
});
const models = document.querySelectorAll(".model");
const modelOverlay = document.querySelector(".modelOverlay");
const modelImmediateImg = modelOverlay.children[0];

const topFixed = document.querySelector(".top-fixed");
const navLinks = document.querySelectorAll("div.navigation nav ul li a");

const mode = document.querySelector(".mode");
const modeChangeBtn = document.querySelector(".mode-change-btn");
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

    //scroll spy
        let last;
        navLinks.forEach(link=>link.classList.remove("active-link-btn"));
        for(let i=0; i<scrollTriggers.length; i++){
            let pos = getPositionOfElement(scrollTriggers[i]);
            if(pos>scrolled-100 && pos<scrolled+viewportHeight-200){
                last=scrollTriggers[i];
            }
        }
        let id = last.id;
        let link = document.querySelector('[data-href="#'+id+'"]');
        // console.log(last, link);
        if(link) link.classList.add("active-link-btn");
    });
}



//responsive nav
function openNav() {
    document.querySelector(".overlay-nav").style.height = "100%";
}
  
  /* Close */
function closeNav() {
    document.querySelector(".overlay-nav").style.height = "0%";
}


//theme
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

//no # links
navLinks.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        document.querySelector(e.target.dataset.href).scrollIntoView({block: 'start', behavior: "smooth"});
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
function getPositionOfElement(domElement)
{
    let pos = 0;
    while (domElement != null)
    {
        pos += domElement.offsetTop;
        domElement = domElement.offsetParent;
    }
    return pos;
}
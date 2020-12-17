
AOS.init({
    offset: 100,
    delay: 50
});

new ScrollSpy({
    activeClassName: "active-link-btn",
    checkLowerBound: false
});

class returnAndIncrementNumber{
    constructor(limit, begin=0){
        this.limit = limit;
        this.value = begin;
        this.begin = begin;
    }
    value;
    begin;
    limit;
    increment(count=1){
        let temp = this.value;
        this.value+=count;
        if(this.value>=this.limit)
            this.value=this.begin;
        return temp;
    }
    decrement(count=1){
        let temp = this.value;
        this.value-=count;
        if(this.value<this.begin)
            this.value=this.limit-1;
        return temp;
    }
}


const root = document.documentElement;
const models = document.querySelectorAll("img");
const modelOverlay = document.querySelector(".modelOverlay");
const modelImmediateImg = modelOverlay.children[0];

const topFixed = document.querySelector(".top-fixed");
const navLinks = [...document.querySelectorAll("div.navigation nav ul li a"),...document.querySelectorAll("div.overlay-nav .overlay-content a")];

const mode = document.querySelector(".mode");
const modeChangeBtn = document.querySelector(".mode-change-btn");

let utThm=localStorage.getItem("utthm");
switch (utThm) {
    case "l":
        mode.setAttribute('href',"./css/light.css");
        break;

    default:
        mode.setAttribute('href',"./css/dark.css");
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
    if(mode.getAttribute('href')==="./css/light.css"){
        mode.setAttribute('href',"./css/dark.css");
        utthm="d";
    }
    else{
        mode.setAttribute('href',"./css/light.css")
        utthm="l";
    }

    if(typeof(Storage) !== "undefined")
        localStorage.setItem("utthm", utthm);
})

//ui color
const colShuffle = document.querySelector(".col-shuffle");
const materialColors = ["009bff", "3BB78F", "FC9842", "d23"];
let colorCount = new returnAndIncrementNumber(materialColors.length, 0);

colShuffle.addEventListener("click", ()=>{
    root.style.setProperty("--fallbackCol", "#"+materialColors[colorCount.increment(1)]);
});



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


//helper function

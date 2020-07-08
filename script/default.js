const superScroll =  document.querySelector(".super-scroll");
const hamburger = document.querySelector(".hamburger");
const navRFc = document.querySelector(".nav-r-fc");


window.addEventListener("scroll",()=>{
    if(window.scrollY>=260){
        //show nav bar
        // superScroll.style.display= "block";
        superScroll.style.top= 0;
        //show buttons
        
    }
    else{
        //hide nav bar
        // superScroll.style.display= "none";
        superScroll.style.top= "-4rem";
        //hide buttons
    }
});


hamburger.addEventListener("click",()=>{
    if(navRFc.style.display === "none" || navRFc.style.display === ""){
        navRFc.style.display = "block";
    }
    else if(navRFc.style.display === "block"){
        navRFc.style.display = "none";
    }
})
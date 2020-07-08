const superScroll =  document.querySelector(".super-scroll");

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
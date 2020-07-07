const superScroll =  document.querySelector(".super-scroll");

window.addEventListener("scroll",()=>{
    if(window.scrollY>=260){
        superScroll.style.display= "block";
    }
    else{
        superScroll.style.display= "none";
    }
})
const scrollVisibleBtns = document.querySelector(".scroll-visible-btns");
const main = document.querySelector("main");
const rect = main.getBoundingClientRect();
const superScroll =  document.querySelector(".super-scroll");

window.addEventListener("scroll",()=>{
    if(window.scrollY>=260){
        //show nav bar
        superScroll.style.display= "block";
        //show buttons
        
    }
    else{
        //hide nav bar
        superScroll.style.display= "none";
        //hide buttons
    }
    if(rect.bottom <= window.scrollY+window.innerHeight){
        scrollVisibleBtns.style.flexDirection="row";
    }
    else{
        scrollVisibleBtns.style.flexDirection="column";
    }
})
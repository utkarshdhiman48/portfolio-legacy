class KeyWord{
    constructor(command, response, clas, action){
        this.clas = clas;
        this.command = command;
        this.response = response;
        this.action = action;
    }
};


/////////////VARIABLES
let lastInps = [""];
let lastInpCounter = new returnAndIncrementNumber(1, 0);
const utcolor="ut-color";
const prefix = `<br><span class="terminal-preview-text"><span class="yellowgreen">mock@terminal</span><span class="sky-blue">~</span>$ `;
const suffix = `</span>`;
const terminalPreview = document.querySelector("div.terminal-preview");
const terminalInput = document.querySelector("input.terminal-input");

const listcommands = `>_ ut blogs :Blogs I've written<br>>_ ut extras :Some of my experiments<br>>_ ut projects :scrolls to My Projects<br>>_ ut certifications :scrolls to My Certifications<br>>_ ut skills :shows the languages I speak ;)<br>>_ ut connect :connect with me on any of the following platforms, emails are priorities<br>>_ ut timeline :shows my timeline tip: use shift+scroll to scroll the timeline<br>>_ ut linkedin :will open open my linkedin profile<br>>_ ut github :will open open my github profile<br>>_ ut twitter :will take you to my twitter profile<br>>_ ut facebook :will open my facebook profile<br>>_ ut email :email me through your email client<br>>_ ut help :opens a list of all commands<br>You're Welcome...<br>>_ ut color :change UI color(not preserved)<br>>_ ut theme :change theme of site(preserverd)`;
// >_ ut about :tell you something about me<br>


let keywords = [
    new KeyWord(new RegExp("help","i"), `Help is on the way...<br>All commands are case-insenstive.<br>${listcommands}`, "cyan", ()=>{console.log("You're welcome");}),

    new KeyWord(new RegExp("blogs","i"), "Taking you to my blogs...", "custom-color1", ()=>{document.querySelector("#frdBSs").scrollIntoView({block: 'end', behavior: "smooth"});}),

    new KeyWord(new RegExp("extras","i"), "Some of my experiments...", "orangered", ()=>{document.querySelector("#r2kBSs").scrollIntoView({block: 'end', behavior: "smooth"});}),

    new KeyWord(new RegExp("projects","i"), "Taking you to my projects...", "lime", ()=>{document.querySelector("#KcajcM").scrollIntoView({block: 'end', behavior: "smooth"});}),

    new KeyWord(new RegExp("skills","i"), "These are my skills...", "orchid", ()=>{document.querySelector("#hVoudh").scrollIntoView({block: 'end', behavior: "smooth"});}),

    new KeyWord(new RegExp("certifications","i"), "Here are my certifications...", "orangered", ()=>{document.querySelector("#sauBnN").scrollIntoView({block: 'end', behavior: "smooth"});}),

    new KeyWord(new RegExp("connect","i"), "You can connect here...", "sky-blue", ()=>{document.querySelector("#YQLBsm").scrollIntoView({block: 'end', behavior: "smooth"});}),

    new KeyWord(new RegExp("facebook","i"), "Redirecting to facebook profile...", "fb-color", ()=>{window.open("https://www.facebook.com/utkarsh.utkarsh.927/","_blank")}),

    new KeyWord(new RegExp("twitter","i"), "Redirecting to twitter profile...", "tw-color", ()=>{window.open("https://twitter.com/utkarshdhiman48","_blank")}),

    new KeyWord(new RegExp("linkedin","i"), "Redirecting to linkedin profile...", "ln-color", ()=>{window.open("https://www.linkedin.com/in/utkarsh-dhiman-b626b5149/","_blank")}),

    new KeyWord(new RegExp("github","i"), "Redirecting to github profile...", "apricot", ()=>{window.open("https://github.com/utkarsh48","_blank")}),

    new KeyWord(new RegExp("email","i"), "Opening...", "custom-color1", ()=>{
        window.open("mailto:utkarshdhiman48@gmail.com","_target");
        console.log("utkarshdhiman48@gmail.com");
    }),
    
    new KeyWord(new RegExp("timeline","i"), "Use Shift + Scroll to scroll...", "sky-blue", ()=>{document.querySelector("#arIknM").scrollIntoView({block: 'end', behavior: "smooth"});}),

    new KeyWord(new RegExp("theme","i"), "Changing theme...<br> preferences preserved!", "orchid", ()=>{document.querySelector(".mode-change-btn").click();}),

    new KeyWord(new RegExp("color","i"), "Changing UI color...<br>Note: This color preference is not saved!", "orchid", ()=>{document.querySelector(".col-shuffle").click();})

    // new KeyWord(new RegExp("about","i"), "Here is something about him...", "cyan", ()=>{document.querySelector("#YQLBsm").scrollIntoView({block: 'end', behavior: "smooth"});})
];

////////first line
terminalPreview.innerHTML=`<span class="yellowgreen">mock@terminal</span><span class="sky-blue">~</span>$ You can navigate my page using this terminal also.<br>You change theme or colors using button in top right corner or using commands '<span class="ut-color">ut</span> <span class="orchid">theme</span>' and '<span class="ut-color">ut</span> <span class="orchid">color</span>' respectively.<br>Type '<span class="ut-color">ut</span> <span class="cyan">help</span>' to get a list of all commands.${suffix}`;

////////Enter key event listener
terminalInput.addEventListener("keydown",(e)=>{
    let inputField = e.target;
    let prevCommands = terminalPreview.innerHTML;
    if(e.key==="Enter" || e.keyCode==13){
        let textChunks = inputField.value.split(" ");

        //input stack
        lastInps.push(inputField.value.trim());
        lastInpCounter.limit++;

        if((textChunks[0].match(/ut/i)) && textChunks.length === 2 ) {
            let [found] = keywords.filter((f)=>{
                return textChunks[1].match(f.command);
            });
            if(!found) {
                let output = `${prefix}"${inputField.value}" is not a valid command${suffix}`;
                terminalPreview.innerHTML=`${prevCommands}${output}`;
            }
            else{
                let output = `${prefix}<span class="${utcolor}">${textChunks[0]}</span> <span class="${found.clas}">${textChunks[1]}</span><br>${found.response}${suffix}`;
                terminalPreview.innerHTML=`${prevCommands}${output}`;
                setTimeout(()=>{
                    found.action();
                },500);
            }
            terminalPreview.lastChild.scrollIntoView(false);
        }
        else{
            let output = `${prefix}"${inputField.value}" is not a valid command${suffix}`;
            terminalPreview.innerHTML=`${prevCommands}${output}`;
            terminalPreview.lastChild.scrollIntoView(false);
        }
        inputField.value = "";
        lastInpCounter.value=0;
    }
    else if(e.key==="ArrowUp" || e.keyCode==38){
        lastInpCounter.decrement();
        inputField.value = lastInps[lastInpCounter.value] || "";
        console.log(lastInps, lastInpCounter.value);
    }
    else if(e.key==="ArrowDown" || e.keyCode==40){
        lastInpCounter.increment();
        inputField.value = lastInps[lastInpCounter.value] || "";
        console.log(lastInps, lastInpCounter.value);
    }

});

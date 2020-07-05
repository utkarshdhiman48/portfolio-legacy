class KeyWord{
    constructor(command, response, clas, action){
        this.clas = clas;
        this.command = command;
        this.response = response;
        this.action = action;
    }
};

let keywords = [
    new KeyWord(new RegExp("help","i"), "Help is on the way...", "cyan", ""),
    new KeyWord(new RegExp("education","i"), "Redirecting to his institutions...", "custom-color1", ""),
    new KeyWord(new RegExp("projects","i"), "Redirecting to projects...", "lime", ""),
    new KeyWord(new RegExp("connect","i"), "You can connect here", "orangered", ""),
    new KeyWord(new RegExp("facebook","i"), "Redirecting to facebook profile...", "", ""),
    new KeyWord(new RegExp("twitter","i"), "Redirecting to twitter profile...", "cyan", ""),
    new KeyWord(new RegExp("linkedin","i"), "Redirecting to linkedin profile...", "cyan", ""),
    new KeyWord(new RegExp("github","i"), "Redirecting to github profile...", "cyan", ""),
    new KeyWord(new RegExp("email","i"), "Configuring pre email settings, Opening...", "cyan", ""),
    new KeyWord(new RegExp("about","i"), "Here is something about him...", "cyan", "")
];




/////////////VARIABLES

const utcolor="ut-color";
const prefix = `<br><span class="terminal-preview-text"><span class="yellowgreen">mock@terminal</span><span class="sky-blue">~</span>$ `;
const suffix = `</span>`;
const terminalPreview = document.querySelector("div.terminal-preview");
const terminalInput = document.querySelector("input.terminal-input");

////////first line
terminalPreview.innerHTML=`<span class="yellowgreen">mock@terminal</span><span class="sky-blue">~</span>$ Type 'ut help' to get a list of all commands${suffix}`;

////////Enter key event listener
terminalInput.addEventListener("keydown",(e)=>{
    let inputField = e.target;
    let prevCommands = terminalPreview.innerHTML;
    if(e.key==="Enter"){//////////////// find alternative for mobile
        let textChunks = inputField.value.split(" ");
        if((textChunks[0] ==="ut" || textChunks[0] === "UT") && textChunks.length === 2 ) {
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
            }
            terminalPreview.lastChild.scrollIntoView(false);
        }
        else{
            let output = `${prefix}"${inputField.value}" is not a valid command${suffix}`;
            terminalPreview.innerHTML=`${prevCommands}${output}`;
            terminalPreview.lastChild.scrollIntoView(false);
        }








        
        inputField.value = "";
    }
});
class KeyWord{
    constructor(command, response, clas, action){
        this.clas = clas;
        this.command = command;
        this.response = response;
        this.action = action;
    }
};

let keywords = [
    new KeyWord("help", "Help is on the way...", "cyan", ""),
    new KeyWord("education", "Redirecting to his institutions...", "cyan", ""),
    new KeyWord("projects", "Redirecting to projects...", "cyan", ""),
    new KeyWord("connect", "You can connect here", "cyan", ""),
    new KeyWord("facebook", "Redirecting to facebook profile...", "cyan", ""),
    new KeyWord("twitter", "Redirecting to twitter profile...", "cyan", ""),
    new KeyWord("linkedin", "Redirecting to linkedin profile...", "cyan", ""),
    new KeyWord("github", "Redirecting to github profile...", "cyan", ""),
    new KeyWord("email", "Configuring pre email settings, Opening...", "cyan", ""),
    new KeyWord(RegExp("about","i"), "Here is something about him...", "cyan", "")
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
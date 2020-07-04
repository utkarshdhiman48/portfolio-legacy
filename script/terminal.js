class KeyWord{
    constructor(command, response, clas, action){
        this.clas = clas;
        this.command = command;
        this.response = response;
        this.action = action;
    }
};

let keywords = [new KeyWord("about", "Here's about him", "cyan", ""), new KeyWord("connect", "You can connect here", "cyan", "")];

const prefix = `<br><span class="terminal-preview-text">mock@terminal:~$ `;
const suffix = `</span>`;
const terminalPreview = document.querySelector("div.terminal-preview");
const terminalInput = document.querySelector("input.terminal-input");

terminalInput.addEventListener("keydown",(e)=>{
    let inputField = e.target;
    let prevCommands = terminalPreview.innerHTML;
    if(e.key==="Enter"){
        let textChunks = inputField.value.split(" ");
        if((textChunks[0] ==="ut" || textChunks[0] === "UT") && textChunks.length === 2 ) {
            let [found] = keywords.filter((f)=>{
                f.command === textChunks[1];
            })
            let output = `${prefix}<span class="${utcolor}">${textChunks[0]}</span> <span class="${found.clas}">${textChunks[1]}</span><br>${response}${suffix}`;
            terminalPreview.innerHTML=`${prevCommands}${output}`;
        }
        else{
            let output = `${prefix}"${inputField.value}" is not a valid command${suffix}`;
            terminalPreview.innerHTML=`${prevCommands}${output}`;
        }









        inputField.value = "";
    }
});
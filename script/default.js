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
            console.log("hey ut")
        }
        else{
            terminalPreview.innerHTML=`${prevCommands}${prefix}"${inputField.value}" is not a valid command${suffix}`;
        }









        inputField.value = "";
    }
});
function glossaryAdder(){
    // retrieve term and description inserted
    var term = document.getElementById("term").value;
    var description = document.getElementById("description").value;
    if (term.search(/.{1,}/) == 0 && description.search(/.{1,}/) == 0){
        // to run a bash file
        const exec = require('child_process').exec;
        // build the command in order to run the script
        var cmd = 'bash glossaryAdderScript.sh "'+term+'" "'+description+'"';
        // execution of the script and add the error manager
        const child = exec( cmd, (error, stdout, stderr) => {
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
                if (error !== null) {
                    console.log(`exec error: ${error}`);
                }
            });
    }
}

window.onunload=function(){
    // display a massage to inform that the glossary will be re-build
    var rx = confirm("Vuoi ricompilare il glossario?", "Compilazione del glossario");
    if (rx == true){
        // to run bash file 
        const exec = require('child_process').execSync;
        // build the command in order to compile the script
        var cmd = 'bash AutomaticGlossaryGenerator.sh';
        // execution of the script and add the error manager
        const child = exec( cmd, (error, stdout, stderr) => {
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
                if (error !== null) {
                    console.log(`exec error: ${error}`);
                }   
            });
    }
};
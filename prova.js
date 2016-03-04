function prova(){
            const exec = require('child_process').execSync;
            var term = document.getElementById("term").value;
        var description = document.getElementById("description").value;
        var cmd = 'bash prova.sh "'+term+'" "'+description+'"';
        const child = exec( cmd,
          (error, stdout, stderr) => {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            if (error !== null) {
              console.log(`exec error: ${error}`);
            }
              });
        var c = document.getElementById("term");
        var app = document.getElementById("app");
        console.log(app.prova());
        }
        window.onunload=function(){
            alert("Compilazione del Glossario");
            const exec = require('child_process').execSync;
                    var term = document.getElementById("term").value;
                var description = document.getElementById("description").value;
                var cmd = 'bash AutomaticGlossaryGenerator.sh '+term+' '+description;
                const child = exec( cmd,
                  (error, stdout, stderr) => {
                    console.log(`stdout: ${stdout}`);
                    console.log(`stderr: ${stderr}`);
                    if (error !== null) {
                      console.log(`exec error: ${error}`);
                    }
                      });
        };
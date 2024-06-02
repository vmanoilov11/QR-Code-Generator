import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    {
        "message": "Type your message here: ",
        "name": "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    let qr_res = qr.image(url);
    qr_res.pipe(fs.createWriteStream('qr_img.svg'));

    
    fs.writeFile('URL.txt', url, (err) => {
        if(err) throw err;
        console.log("File saved sucsesfullu")
    })
        

  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });

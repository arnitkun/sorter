var fs = require('fs');


const types = ['jpg', 'mp3', 'mp4', 'zip', 'txt', 'md'];

const basePath = __dirname;

fs.readdir(basePath, (err, files) => {
    files.forEach((file)=>{

    });
});



types.forEach((element) =>{
    fs.mkdir(basePath + `/${element}`, {recursive: false}, (err) =>{
        if(err) {
            throw err;
        }
    });
});


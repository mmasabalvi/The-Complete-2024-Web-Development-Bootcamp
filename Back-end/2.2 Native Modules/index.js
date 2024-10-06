const fs = require("fs"); //to use fs 

fs.readFile('message.txt', 'utf8', (err, data) => { //from documentation
    if (err) throw err;
    console.log(data);
  }); 
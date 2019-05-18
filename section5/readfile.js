const fs = require('fs');

fs.readFile('./assets/alex.jpg', (err, img) => { 
  if (err) {
    console.log(err);
    throw err;
  }
  console.log('file contents read');
  console.log(img);  
});

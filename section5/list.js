const fs = require('fs');

fs.readdir('./assets', (err, files) => { 
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log(files);
    console.log('done reading files');
  }
});
console.log('start reading files');

const fs = require('fs');

/**
 * Write to output file
 * 
 * @param {*} fileName 
 * @param {*} jsonResponse 
 */
 function writeToFile(fileName, jsonResponse){

    // jsonResponse = JSON.stringify(jsonResponse);
    console.log(`${fileName} : \n` + jsonResponse);
  
    fs.writeFileSync(`./${fileName}`, jsonResponse, function (err) {
      if (err) throw err;
      console.log(`${fileName} Saved!`);
    });
  }

  
  export { writeToFile };
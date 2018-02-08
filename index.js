const git = require('simple-git/promise');

async function status (workingDir) {
 console.log(workingDir)
   
   let statusSummary = null;
   try {
      statusSummary = await git(workingDir).status();
   }
   catch (e) {
      // handle the error
   }
   
   return statusSummary;
}

// using the async function
status(__dirname + '/.git').then(status => console.log(status));

////const AWS = require('aws-sdk');
//const fs = require('fs');
//
//AWS.config.loadFromPath('./config.json');
//
//const s3 = new AWS.S3();
//
//let fileData = fs.readFileSync("./file.jpg"); 
//const params = {
//    Bucket: "whatsbetter-static",
//    Key: "file.jpg",
//    Body: fileData,
//    ACL: 'public-read',
//    ContentType: "image/jpeg", 
//};
//
//s3.putObject(params, function (perr, pres) {
//    if (perr) {
//	console.log("Error uploading image: ", perr);                                                
//    } 
//    else {
//	console.log("uploading image successfully");                        
//    }                      
//});


const git = require('simple-git/promise');
const mime = require('mime-types');
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require("path");


AWS.config.loadFromPath('./credential.json');
const s3 = new AWS.S3();

async function status (workingDir) {   
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
status(__dirname + '/')
    .then(status => {
	for (let item of status.files) {
	     console.log(item)
	    if (item.path.indexOf("/") !== -1) {
		upload(item.path)
	    }
	}
    });


function upload(filepath) {
    let fullpath = path.resolve("./" + filepath);
    console.log(fullpath)
//    let filedata = fs.readFileSync(fullpath); 
//    
//    let params = {
//	Bucket: "whatsbetter-static",
//	Key: filepath,
//	Body: filedata,
//	ACL: 'public-read',
//	ContentType: mime.lookup(filepath),
//    };  
//    
//    s3.putObject(params, function (perr, pres) {
//	if (perr) {
//	    console.log("Error uploading image: ", perr);                                                
//	} 
//	else {
//	    console.log("uploading image successfully");                        
//	}                      
//    });
}



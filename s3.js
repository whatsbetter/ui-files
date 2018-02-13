const mime = require('mime-types');
const AWS = require('aws-sdk');
const path = require("path");
const fs = require('fs');

AWS.config.loadFromPath('./credential.json');
const s3 = new AWS.S3();

module.exports = function upload(filepath) {
    let fullpath = path.resolve("./" + filepath);
    
    let filedata = fs.readFileSync(fullpath); 
    
    let params = {
	Bucket: "whatsbetter-static",
	Key: filepath,
	Body: filedata,
	ACL: 'public-read',
	ContentType: mime.lookup(filepath)
    };  
    
    s3.putObject(params, function (perr, pres) {
	if (perr) {
	    console.log("Error uploading image: ", perr);                                                
	} 
	else {
	    console.log("uploading successfully", filepath);                        
	}                      
    });
}



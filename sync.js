const fs = require('fs');
const path = require("path");
const s3Upload = require("./s3");

const imgDirectory = './img';
const fontsDirectory = './fonts';
const soundsDirectory = './sounds';

function readDir(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
	var filePath = path.join(currentDirPath, name);
	var stat = fs.statSync(filePath);
	if (stat.isFile()) {
	    callback(filePath);
	} else if (stat.isDirectory()) {
	    readDir(filePath, callback);
	}
    });
}
    
readDir(imgDirectory, s3Upload);
readDir(fontsDirectory, s3Upload);
readDir(soundsDirectory, s3Upload);
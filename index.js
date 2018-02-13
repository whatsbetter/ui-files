var watchr = require('watchr')

// Define our watching parameters
var path = process.cwd()
function listener (changeType, fullPath, currentStat, previousStat) {
	switch ( changeType ) {
		case 'update':
			console.log('the file', fullPath, 'was updated', currentStat, previousStat)
			break
		case 'create':
			console.log('the file', fullPath, 'was created', currentStat)
			break
		case 'delete':
			console.log('the file', fullPath, 'was deleted', previousStat)
			break
	}
}
function next (err) {
	if ( err )  return console.log('watch failed on', path, 'with error', err)
	console.log('watch successful on', path)
}

// Watch the path with the change listener and completion callback
var stalker = watchr.open(path, listener, next)

// Close the stalker of the watcher


//exec("git add .");
//
//exec("git status | grep 'deleted:' | awk '{print $2}'", function(err, stdout, stderr) {
//    let str = trim(stdout);
//    
//    console.log("-- deleted");
//    console.log(str.split("\n"));
//});
//
//
//exec("git status | grep 'new file:' | awk '{print $3}'", function(err, stdout, stderr) {
//    let str = trim(stdout);
//    
//    console.log("-- new file");
//    console.log(str.split("\n"));
//});
//
//exec("git status | grep 'modified:' | awk '{print $2}'", function(err, stdout, stderr) {
//    let str = trim(stdout);
//    
//    console.log("-- modified");
//    console.log(str.split("\n"));
//});
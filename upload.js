
if (process.argv.length !== 3) {
    process.exit(-1);
}

const s3Upload = require("./s3");

s3Upload(process.argv[2]);
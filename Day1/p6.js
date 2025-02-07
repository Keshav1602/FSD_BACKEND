
const fs = require('fs');

fs.unlink('./data.txt', (err) => {
    if (err) {
        console.error(err , err.message);
        return;
    }
    console.log("File deleted successfully");
});
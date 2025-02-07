const fs = require('fs');

data = "async data to write into file";

fs.writeFile("./data.txt", data, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Data written successfully");
});
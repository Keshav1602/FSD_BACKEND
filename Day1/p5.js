const fs = require('fs');

data = "appending data to file";

fs.appendFile("./data.txt", data, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Data appended successfully");
});
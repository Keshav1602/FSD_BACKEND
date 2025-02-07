const fs = require('fs');
// fs.mkdir('MyFolderr', (err) => {   // Create a directory
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("Directory created successfully");
// });
fs.mkdir('MyFolderr/SubFolder', { recursive: true }, (err) => {   // Create a subdirectory
    // { recursive: true } is used to create a directory and its parent directories if they do not exist.
    if (err) {
        console.error(err);
        return;
    }
    console.log("Subdirectory created successfully");
});
fs.rmdir('MyFolderr', { recursive: true }, (err) => {   // Remove a directory 
    // { recursive: true } is used to remove a directory and its parent directories if they do not exist.
    if (err) {
        console.error(err);
        return;
    }
    console.log("Subdirectory removed successfully");
});
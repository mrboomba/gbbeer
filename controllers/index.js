const fs = require("fs");
const path = require("path");
const logger = require(path.resolve(__dirname,'../config/logger'));

fs.readdir(__dirname, (err, files) => {
    files.forEach(function(file) {
        /*
                 * initializes all models and sources them as .model-name
                 */
        if (file !== 'index.js') {
            const moduleName = file.split('.')[0];
            exports[moduleName] = require('./' + moduleName);
        }
    });
});

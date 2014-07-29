var filterM = require("./filteredls.js");

filterM(process.argv[2], process.argv[3], function (err, files) {
    "use strict";
    for (var i =0; i < files.length; i++)
    console.log(files[i]);
});
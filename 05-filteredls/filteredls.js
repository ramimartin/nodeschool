var dir = process.argv[2];
var ext = process.argv[3];
var fs = require("fs");
var path = require("path");
fs.readdir(dir, function callback(err, data) {
    "use strict";
    if (data !== undefined) {
      for (var i = 0; i< data.length; i++) {
        var fileExt = path.extname(data[i]);
        if (fileExt === '.'.concat(ext)) {
          console.log(data[i]);
        }
      }
    }
    
})
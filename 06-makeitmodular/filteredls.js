module.exports = function(dir,ext,callback){
    var fs = require("fs");
    var path = require("path");
    fs.readdir(dir, function (err, data) {
        "use strict";           
        if (err)
            callback(err, undefined)
        if (data !== undefined) {
            var filtered = new Array();
          for (var i = 0; i< data.length; i++) {
            var fileExt = path.extname(data[i]);
            if (fileExt === '.'.concat(ext)) {
              filtered.push(data[i]);
            }
          }
          callback(undefined,filtered);
        }

    })

}

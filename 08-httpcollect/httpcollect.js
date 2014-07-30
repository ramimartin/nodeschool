var http = require("http");
http.get(process.argv[2], function (response) {
    "use strict";
    response.setEncoding("utf8");
    response.on("end", function (data) {
        console.log(data.length);
        console.log(data);
    });
    response.on("error", function (error) {
        console.error(error);
    });
});

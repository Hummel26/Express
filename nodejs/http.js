var http = require("http");
var url = require("url");

http.createServer((request,response) => {
    response.writeHead(200 , {"content-type" : "text/plain"});
    console.log('req.uri |', request.url)
    // console.log('req.headers', request.headers)

    var q = url.parse(request.url, true).query;
    console.log(q.firstname + ' ' + q.lastname);
    response.write(q.firstname + ' ' + q.lastname + "\n")

    response.end("Hello World Ok. \n")
}).listen(8081);

console.log("Server Running at http://127.0.0.1:8081/");
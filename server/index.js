var http = require('http'),
    fs = require('fs');

var html = '<!DOCTYPE html><html><head><title>Page Title</title></head><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>';

http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
}).listen(8000);
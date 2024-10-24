const http = require ("http");
const fs = require ("fs");
const url = require("url")

http.createServer((req,res)=>{
    var q = url.parse(req.url, true);
    var filename = "."+ q.pathname;
    fs.readFile(filename,(err,data) => {
    res.writeHead(200, {'Content-Tead':'text/html'})
    res.write(data);
    res.end()
})
}).listen(8000);
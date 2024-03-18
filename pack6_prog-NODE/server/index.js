const http = require('http');
const fs = require('node:fs')
const PORT = 8000;

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} : ${req.url} New Req REseved\n`
    fs.appendFile('./test.txt', log, () =>{
            switch (req.url){
                case '/' : 
                res.end("HomePage")
                break;
                case '/about' :
                res.end("I am Shanu");
                break;
                default : 
                res.end("404 Not Found")
            }
    })
})

myServer.listen(PORT, () => {
    console.log(`Server is runing at PORT: ${PORT}`);
})
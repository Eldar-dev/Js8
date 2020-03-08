const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end(`
    <!doctype>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Основы Node.js</title>
        </head>

        <body>
        <h1>Основы Node.js</h1>
        </body>
    </html>`); 
}).listen(3000, () => console.log('Сервер работает'));
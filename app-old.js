const http = require('http');

http.createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
                nombre: 'Danniels',
                edad: 33,
                url: request.url
            }
            // response.write('Hola DanKenSoft');
        response.write(JSON.stringify(salida));
        response.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');
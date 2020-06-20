const http = require('http')

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'})

    const persona = {
        nombre: 'anyelo',
        apellido: 'romero',
        URL: req.url
    }
    
    res.write( JSON.stringify(persona))

    res.end()
}).listen(8080)

console.log('escuchando el puerto 8080');
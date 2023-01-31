const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Ola, tudo bem? Tudo funcionando por aqui! =)')
})

server.listen(port, () => {
  console.log('Escutando requisição na porta 3000.');
})


// Forma antiga => const http = require('http') = Usava-se o CommonJS
import http from 'node:http' // ESModules => import/Export

// req = Requisição, ou seja, está chamando o nosso servidor.
// res = Response (Resposta) Está devolvendo ao front end a resposta pedida ao back end

const server = http.createServer((request, response) => {
  return response.end('server online')
})

server.listen(3333)
// Forma antiga => const http = require('http') = Usava-se o CommonJS
import http from 'node:http' // ESModules => import/Export

// req = Requisição, ou seja, está chamando o nosso servidor.
// res = Response (Resposta) Está devolvendo ao front end a resposta pedida ao back end

const server = http.createServer((req, res) => {
  const { method, url } = req

  if ( method === 'GET' && url === '/users') {

    // Early return 
    return res.end('Listagem de usuários')
  }

  if ( method === 'POST' && url === '/users') {
    return res.end('Criação de Usuário.')
  }


  return res.end('Curso Nodejs pela rocketseat')
})

server.listen(3333)
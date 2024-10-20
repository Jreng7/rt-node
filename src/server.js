// Forma antiga => const http = require('http') = Usava-se o CommonJS
 // ESModules => import/Export

// req = Requisição, ou seja, está chamando o nosso servidor.
// res = Response (Resposta) Está devolvendo ao front end a resposta pedida ao back end

// Stateful - Stateless

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisição/Resposta) => Metadados

// HTTP Status Code

import http from 'node:http'
import { json } from './middlewares/json.js'
import { Database } from './middlewares/database.js'

const database = new Database

const server = http.createServer(async (req, res) => {

  const { method, url } = req

  await json(req, res)

  if ( method === 'GET' && url === '/users') {
    const users = database.select('users')
    // Early return 
    return res.end(JSON.stringify(users))
  }

  if ( method === 'POST' && url === '/users') {

    const { name, email } = req.body

    const user = {
      id: 1,
      name,
      email,
    }

    database.insert('users', user)
    console.log(database)

    return res.writeHead(201).end("Usuário criado com sucesso!")
  }


  return res.writeHead(404).end('Not Found')
})

server.listen(3333)
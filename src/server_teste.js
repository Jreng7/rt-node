
import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
  
  const { method, url } = req
  

  if (method === 'POST' && url === '/users') {

    users.push({

      id: 1,
      name: 'John Doe',
      email: 'johndoee@gmail.com'

    })

    return res.writeHead(201).end('Usuário criado com sucesso1')

  } else if (method === 'GET' && url === '/users') {

    return res
      .setHeader('Content-type', 'aplication/json')
      .end(JSON.stringify(users))

  }

  return res.writeHead(404).end("Not Found")

})

server.listen(7778)
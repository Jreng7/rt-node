import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {

  const { method, url } = req
  
  if (method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-type', 'aplication/json')
    .end(JSON.stringify(users))
  }
   
  if (method === 'POST' && url === '/users') {

    users.push({
      id: 1,
      name: 'john doe',
      email: 'johndoe@gmail.com'
    })

    return res
    .writeHead(201)
    .end('Criação de usuário com sucesso!')
  }

  return res
  .writeHead(404)
  .end('Not Found')
  

})

server.listen(0)
import http from 'node:http'

const user = []

const server = http.createServer((req, res) => {

  const { method, url } = req

  if(method === 'GET' && url === '/user'){

    return res
    .setHeader('Content-type', 'aplication/json')
    .end(JSON.stringify(user))

  }
  
  if(method === 'POST' && url === '/user'){
      
    user.push({
    id: 2,
    name: 'Joaquim',
    email: 'joaquim1@hotmail.com'

  })

    return res.writeHead(201).end('Usuário criado com sucesso!')

  }

  return res.writeHead(404).end('Not Found')

})

server.listen(4444)
import http from 'node:http'

const pessoa = []

const server = http.createServer(function(req, res){

  const { method, url } = req

  if ( method === 'POST' && url === '/novo') {
    
    pessoa.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@hgmail.com'
    })

    return res.writeHead(201).end('Usuário criado com sucesso!')

  } else if ( method === 'GET' && url === '/novo') {

    return res
            .setHeader('Content-type', 'aplication/json')
            .end(JSON.stringify(pessoa))
    
  }

  return res.writeHead(404).end('Not Found')
})


server.listen(7852)
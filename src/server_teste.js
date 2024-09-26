import http from 'node:http'

const cliente = []

const server = http.createServer((req, res) => {

  const { method, url } = req

  if(method === 'POST' && url === '/clientes') {

    cliente.push({
      id: 1,
      name: 'Joaquim',
      email: 'joaquimsilva@gmail.com'
    })

    return res.writeHead(201).end('Usuário criado com sucesso!')
  } else if (method === 'GET' && url === '/clientes'){
    return res
    .setHeader('Content-type', 'aplication/json')
    .end(JSON.stringify(cliente))
  }

})

server.listen(1574)
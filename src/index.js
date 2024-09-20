import http from 'node:http'

const sim = []

const server = http.createServer((req, res) => {

  const { method, url } = req

  if(method === 'POST' && url === '/sim') {

      sim.push({
      id: 1,
      name: "John Doe"
    })

    return res.writeHead(201).end()

  }

  if(method === 'GET' && url === '/sim') {

    return res.setHeader('Content-type', 'aplication/json').end(JSON.stringify(sim))

  }

  return res.writeHead(404).end('Not Found')

})

server.listen(7777)
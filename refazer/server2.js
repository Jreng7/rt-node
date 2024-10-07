import http from 'node:http'

const server = http.createServer((req, res) => {

  return res.end('Nde.js Rocketseat')

})

server.listen(3434)
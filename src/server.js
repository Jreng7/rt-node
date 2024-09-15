// Forma antiga => const http = require('http') = Usava-se o CommonJS
import http from 'http' // ESModules => import/Export

const server = http.createServer((req, res) => {
  res.end('server online')
})

server.listen(3333)
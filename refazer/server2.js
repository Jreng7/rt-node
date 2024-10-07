import http from 'node:http'

const app = http.createServer((req, res) => {

  return res.end('Curso node.js Rocketseat')

})

app.listen(3434)
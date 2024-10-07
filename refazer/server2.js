import http from 'node:http'

const server = http.createServer((req, res) => {

  const { method, url } = req
  
  if (method === 'GET')
    
  return res.end('Nde.js Rocketseat')
  

})

server.listen(3434)
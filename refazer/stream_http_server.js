import http from 'node:http'

const dadosEsperado = []

const servidor = http.createServer(async function(req, res) {

  for await (const data of req ) {
    
  }
  

}).listen(7711)
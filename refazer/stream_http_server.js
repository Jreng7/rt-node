import http from 'node:http'

const dadosEsperado = []

const servidor = http.createServer(async function(req, res) {

  for await (const itemReq of req ) {
    dadosEsperado.push(itemReq)
  }
  

}).listen(7711)
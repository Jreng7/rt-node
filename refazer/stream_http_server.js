import http from 'node:http'
import { Transform } from 'node:stream'

class NumeroNegativo extends Transform {
  _transform(chunk, encoding, callback) {
    const numero = Number(chunk.toString()) * -1

    console.log(numero)

    callback(null, numero.toString())
  }
}

const server = http.createServer(async (req, res) => {

  const buffers = [] 

  for await (const dados of req) { 
    buffers.push(dados)
  }

  const bufferResponse = Buffer.concat(buffers).toString() 

  // console.log(bufferResponse)

  return res.end(bufferResponse)

})

server.listen(3535)
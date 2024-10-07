import http from 'node:http'
import { Transform } from 'node:stream'

class NumeroNegativo extends Transform {
  _transform(chunk, encoding, callback) {
    const numero = Number(chunk.toString()) * -1

    console.log(numero)

    callback(null, numero.toString())
  }
}

const server = http.createServer((req, res) => {

  return req.pipe(new NumeroNegativo()).pipe(res)

})

server.listen(3535)
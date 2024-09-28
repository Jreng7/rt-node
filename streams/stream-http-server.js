
import http from 'node:http'
import { Transform } from 'node:stream'

class Negativo extends Transform {
  _transform(chunk, encoding, callback) {
    const dado = Number(chunk.toString()) * -1

    console.log(dado)

    callback(null, dado.toString())
  }
}

// req => ReadableStream
// res => WritableStream

const server = http.createServer((req, res) => {

  return req.pipe(new Negativo()).pipe(res)

})

server.listen(1234)

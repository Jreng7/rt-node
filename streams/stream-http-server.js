import http from 'node:http'
import { Transform } from 'node:stream'

class Transformed extends Transform {
  _transform(chunk, encoding, callback){
    const resposta = Number(chunk) * -1 
    callback(null, Buffer.from(resposta.toString()))
  }
}

// req => Readable Stream
// res => Writable Stream

const server = http.createServer((req, res) => {



})


server.listen(3334)
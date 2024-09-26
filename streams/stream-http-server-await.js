
import http from 'node:http'
import { Transform } from 'node:stream'

class Transformed extends Transform {
  _transform(chunk, encoding, callback){
    const resposta = Number(chunk) * -1 

    console.log(resposta)

    callback(null, Buffer.from(resposta.toString()))
  }
}

// req => Readable Stream
// res => Writable Stream

const server = http.createServer(async (req, res) => {

  const buffers = []

  for await (const dado of buffers) {

  }

})


server.listen(5775) 
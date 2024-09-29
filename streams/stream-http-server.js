// Criando um servidor para simular o tratamento de dados entre front end e back end.

import http from 'node:http'
import { Transform } from 'node:stream'

class OneNegative extends Transform {
  _transform(chunk, encoding, callback){
    
    const results = Number(chunk.toString()) * -1
    
    console.log(results)

    callback(null, String(results))

  }
}

const server = http.createServer((req, res) => {

  return req.pipe(new OneNegative()).pipe(res)

})

server.listen(5454)
// Criando um servidor para simular o tratamento de dados entre front end e back end.
//import { Transform } from 'node:stream'
// class InverseNumberStream extends Transform {
//   _transform(chunk, encoding, callback){
    
//     const results = Number(chunk.toString()) * -1
    
//     console.log(results)

//     callback(null, String(results))

//   }
// }

// req => ReadableStream
// res => WritableStream

import http from 'node:http'

const server = http.createServer(async (req, res) => {
  const buffers = [] // Stateful

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const fullStreamContent = Buffer.concat(buffers).toString()

  console.log(fullStreamContent)

  return res.end(fullStreamContent)

})

server.listen(3334)
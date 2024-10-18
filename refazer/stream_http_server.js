import http from 'node:http'
import { Transform } from 'node:stream'

class Negative extends Transform {
  _transform(chunk, encoding, callback) {
    const data = Number(String(chunk)) * -1

    console.log(data)

    callback(null, data.toString())
  }
}

// const dadosEsperado = []

const servidor = http.createServer(function(req, res) {

  return req.pipe(new Negative()).pipe(res)


  // for await (const itemReq of req ) {
  //   dadosEsperado.push(itemReq)
  // }

  // const pegarDadosEsperado = Buffer.concat(dadosEsperado).toString()

  // return res.end(pegarDadosEsperado)  

})

servidor.listen(7711)
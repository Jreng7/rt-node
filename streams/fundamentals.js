// Streams

//process.stdin
// .pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream'

class One extends Readable {

  num = 1

  _read(){
    const numero = this.num++

    setTimeout(() => {
      if(numero > 10) {
        this.push(null)
      } else if (numero < 10) {
        const buf = Buffer.from(numero.toString())
        this.push(buf)
      }
    }, 1000)

  }
}

class Negativo extends Transform {
  _transform(chunk, encoding, callback) {
    const dado = Number(chunk.toString()) * -1
    callback(null, dado.toString())
  }
}

class OneVsTen extends Writable {
  _write(chunk, encoding, callback){
    console.log(Number(chunk.toString()) * 10)
    callback()
  }

}

new One().pipe(new Negativo()).pipe(new OneVsTen())
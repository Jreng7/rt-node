// Tentar replicar a aula sem olhar, para ver se entendi.

import { Readable, Writable, Transform } from 'node:stream'

class One extends Readable {

  numero = 1

  _read(){
    const soma = this.numero++

    setTimeout(() => {
      if(soma > 100){
        this.push(null)
      }
  
      if(soma < 100) {
  
        const buf = Buffer.from(soma.toString())
  
        this.push(buf)
      }
    }, 1000)
  }
}

class OneTen extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

class OneTenLess extends Transform {
  _transform(chunk, encoding, callback){
    const reverso = Number(chunk.toString()) * -1
    callback(null, String(reverso))
  }
}

new One()
  .pipe(new OneTenLess())
  .pipe(new OneTen())
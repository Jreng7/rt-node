// Tentar replicar a aula sem olhar, para ver se entendi.

import { Readable, Writable } from 'node:stream'

class One extends Readable {

  numero = 1

  _read(){

    const soma = this.numero++

    setTimeout(() => {
      if(soma > 100) {
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
  _write(chunk, encoding, callback){
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

new One().pipe(new OneTen())
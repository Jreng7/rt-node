// Streams

//process.stdin
// .pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream'

class OneTo extends Readable {
  
  numero = 1
  
  _read(){
    const resultado = this.numero++

    setTimeout(() => {
      if(resultado > 100){
        this.push(null)
      } else if (resultado < 100) {
        
        const buf = Buffer.from(String(resultado))
        
        this.push(buf)
      }
    }, 1000)
    
  }
}

class OneToTen extends Writable {

  _write(chunck, encoding, callback) {
    console.log(Number(chunck.toString()) * 10)
    callback()
  }
}

class Inverse extends Transform {

  _transform(chunk, encoding, callback){
    const transformado = Number(chunk.toString()) * -1 // Não era necessário, pois chunk já um número.

    callback(null, Buffer.from(String(transformado))) // Primeiro parâmetro de uma callback é um erro.

  }

}


new OneTo()
  .pipe(new Inverse())
  .pipe(new OneToTen())

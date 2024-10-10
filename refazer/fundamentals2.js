// process.stdout.write('Digite algo: ')

// process.stdin.on('data', (infoDoWrite) => {
//   const resposta = infoDoWrite.toString().trim()
//   process.stdout.write(`Sua resposta foi ${resposta} `)
// })

import { Readable, Writable, Transform } from 'node:stream'

class One extends Readable {
  
  numero = 1

  _read(){
    const i = this.numero++

    setTimeout(() => {
      if ( i > 7 ) {
        this.push(null)
      } else {
        const buff = Buffer.from(String(i))
        this.push(buff)
      }
    }, 300)

  }
}

class Negative extends Transform {
  _transform(chunk, encoding, callback) {
    const data = Number(String(chunk)) * -1
    callback(null, data.toString())
  }
}

class OneTen extends Writable {
  _write(chunk, encoding, callback){
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

new One()
  .pipe(new Negative())
  .pipe(new OneTen())

// process.stdout.write('Digite algo: ')

// process.stdin.on('data', (infoDoWrite) => {
//   const resposta = infoDoWrite.toString().trim()
//   process.stdout.write(`Sua resposta foi ${resposta} `)
// })

import { Readable, Writable, Transform } from 'node:stream'

class One extends Readable {
  
  num = 1

  _read(){
    const i = this.num++

    setTimeout(() => {
      if (i > 12) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
        this.push(buf)
      }
    }, 700)
  }
}

class NegativeOne extends Transform {
  _transform(chunck, encoding, callback){
    const dado = Number(String(chunck)) * -1
    callback(null, dado.toString())
  }
}

class OneTen extends Writable {
  _write(chunk, encoding, callback){
    console.log(Number(chunk) * 10)
    callback()
  }
}

new One()
  .pipe(new NegativeOne())
  .pipe(new OneTen())
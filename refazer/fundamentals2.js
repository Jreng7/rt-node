// process.stdout.write('Digite algo: ')

// process.stdin.on('data', (infoDoWrite) => {
//   const resposta = infoDoWrite.toString().trim()
//   process.stdout.write(`Sua resposta foi ${resposta} `)
// })

import { Readable, Writable, Transform } from 'node:stream'

class One extends Readable {

  index = 1

  _read(){

    const i = this.index++

    setTimeout(() => {

      if (i > 10) {
      this.push(null)
    } else {

      const buf = Buffer.from(String(i))

      this.push(buf)
    }
    }, 500)
  
  }
}

class OneTen extends Writable {
  _write(chunck, encoding, callback) {
    
  }
}

new One().pipe(process.stdout)
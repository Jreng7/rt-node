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

    if (i > 10) {
      this.push(null)
    } else {
      this.push(i)
    }
  }
}

new One().pipe(process.stdout)
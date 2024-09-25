// Streams

//process.stdin
// .pipe(process.stdout)

import { Readable } from 'node:stream'

class OneTo extends Readable {

  index = 1

  _read(){
    const i = this.index++

    if(i > 100) {
      this.push(null)
    } else {
      const buf = Buffer.from(String(i))

      this.push(buf)
    }

  }

}

new OneTo().pipe(process.stdout)
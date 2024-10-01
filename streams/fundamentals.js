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
      } else {
        const buf = Buffer.from(numero.toString())
        this.push(buf)
      }
    }, 1000)
  }
}

class OneNegative extends Transform {
  _transform(chunk, encoding, callback){
    const results = Number(chunk.toString()) * -1
    callback(null, String(results))
  }
}

class OneTen extends Writable {
  _write(chunk, encoding, callback){
    console.log(chunk.toString() * 10)
    callback()
  }
}

new One()
  .pipe(new OneNegative())
  .pipe(new OneTen())
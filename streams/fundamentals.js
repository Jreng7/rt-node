// Streams

//process.stdin
// .pipe(process.stdout)

import { Readable, Writable } from 'node:stream'

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
    }, 100)
    
  }
}

class OneToTen extends Writable {

  _write(chunck, encoding, callback) {
    console.log(Number(chunck.toString()) * 10)
    callback()
  }
}


new OneTo().pipe(new OneToTen())

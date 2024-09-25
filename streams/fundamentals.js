// Streams

//process.stdin
// .pipe(process.stdout)

import { Readable } from 'node:stream'

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

new OneTo().pipe(process.stdout)
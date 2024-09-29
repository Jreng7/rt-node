
import { Readable } from 'node:stream'

class One extends Readable {
  
  num = 1

  _read(){
    const numero = this.num++

    setTimeout(() => {
      if(numero > 10) {
        this.push(null)
      } else if (numero < 10) {
        const buf = Buffer.from(numero.toString())
        this.push(buf)
      }
    }, 1000)
  }
}

fetch('http://localhost:5454', {
  method: 'POST',
  body: new One(),
  duplex: 'half'
})
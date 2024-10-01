
import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
  
  num = 1

  _read(){
    const numero = this.num++

    setTimeout(() => {
      if(numero > 5) {
        this.push(null)
      } else if (numero < 5) {
        const buf = Buffer.from(numero.toString())
        this.push(buf)
      }
    }, 1000)
  }
}

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToHundredStream(),
  duplex: 'half'
}).then(response => {
  return response.text()
}).then(data => {
  console.log(data)
})
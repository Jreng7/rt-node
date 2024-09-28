import { Readable } from 'node:stream'

class One extends Readable {
  
  num = 1
  
  _read(){
    const soma = this.num++

    setTimeout(() => {
      if(soma > 20){
        this.push(null)
      } else if(soma < 20) {
        const buf = Buffer.from(soma.toString())

        this.push(buf)
      }
    }, 1000)
  }
}


fetch('http://localhost:1234', {

  method: 'POST',
  body: new One(),
  duplex: 'half'
  
}) 
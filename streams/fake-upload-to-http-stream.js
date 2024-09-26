
// Simulando um FRONT END enviado dados para o BACK-END através da FETCH API

import { Readable } from 'node:stream'

class FakeUpLoad extends Readable {

  num = 1
  
  _read(){
    const soma = this.num++

    setTimeout(() => {
      if(soma > 100) {
        this.push(null)
      } else if (soma < 100) {
        const buf = Buffer.from(soma.toString())
        this.push(buf)
      }
    }, 1000)
  }
}

fetch('http://localhost:3334', {
  method: 'POST',
  body: new FakeUpLoad()
})
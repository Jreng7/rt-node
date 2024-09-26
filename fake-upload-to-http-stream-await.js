
// Simulando um FRONT END enviado dados para o BACK-END através da FETCH API

import { Readable } from 'node:stream'

class OneTo extends Readable {

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

fetch('http://localhost:5775', {

  method: 'POST',
  body: new OneTo(),
  duplex: 'half' // Não gravou aula explicando o assunto, infelizmente. 
})


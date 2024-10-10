import { Readable } from 'node:stream'

class GeradorNumero extends Readable {
  
  num = 1

  _read(){

    const i = this.num++

    setTimeout(() => {
      if ( i > 10 ) {
        this.push(null)
      } else {
        const dados = Buffer.from(i)
        this.push(dados)
      }
    }, 400);

  }
}

fetch('http://localhost:7711', {
  method: 'POST',
  body: new GeradorNumero(),
  duplex: 'half',
})

import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
  
  num = 1

  _read(){
    const numero = this.num++

    setTimeout(() => {
      if( numero > 7 ) {
        this.push(null)
      } else {
        const buf = Buffer.from(numero.toString())
        this.push(buf)
      }
    }, 500)
  }
}

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToHundredStream(),
  duplex: 'half',
}).then(dadosTratados => {
  return dadosTratados.text()
}).then(dados => {
  console.log(dados)
})
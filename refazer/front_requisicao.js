import { Readable } from 'node:stream'

class One extends Readable {
  num = 1

  _read(){
    const i = this.num++

    setTimeout(() => {
      if (i > 15) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
        this.push(buf)
      }
    }, 500);
  }
}

fetch('http://localhost:3535', {
  method: 'POST',
  body: new One(),
  duplex: 'half'
})
// Streams

//process.stdin
// .pipe(process.stdout)

import { Readable } from 'node:stream'

class DeUmCem extends Readable {

  numero = 1

  _read(){

    const soma1 = this.numero++

  }



}
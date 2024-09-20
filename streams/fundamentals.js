// Streams

//process.stdin
// .pipe(process.stdout)

import { Readable } from 'node:stream'

class OneToHundreaStream extends Readable {

  index = 1

  _read() {

  }


}
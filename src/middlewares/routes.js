import { Database } from './middlewares/database.js'
import { randomUUID } from 'node:crypto' //  Universal Unique Identifier, ou ( Identificador Universal Único. )

export const routes = [
  {
    method: 'GET',
    path: '/users',
    handler: (req, res) => {
      const users = db.select('users')
      // Early return 
      return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }
  }
]
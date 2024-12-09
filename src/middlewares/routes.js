import { Database } from './middlewares/database.js'
import { randomUUID } from 'node:crypto' //  Universal Unique Identifier, ou ( Identificador Universal Único. )

const db = new Database()

export const routes = [

  //  Lista Usuários.
  {
    method: 'GET',
    path: buildRoutePath('/users'),
    handler: (req, res) => {

      const users = db.select('users')

      return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }
  },

  //  Cria Usuários.
  {
    method: 'POST',
    path: buildRoutePath('/users'),
    handler: (req, res) => {

      const { name, email } = req.body

        const user = {
          id: randomUUID(),
          name,
          email,
        }

        db.insert('users', user)

        return res.writeHead(201).end("Usuário criado com sucesso!")
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {
      const { id } = req.params
      db.delete('users', id)
      return res.
    }
  }

]
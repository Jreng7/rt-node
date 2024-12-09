import fs from 'node:fs/promises'

// Retorna o caminho inteiro do arquivo atual, no caso, database.js
// console.log(import.meta.url)
// file:///home/josue/developer/rt-node/src/middlewares/database.js

const databasePath = new URL('../db.json', import.meta.url)

export class Database {
  
  #database = {}

  constructor() {
    fs.readFile(databasePath, 'utf8')
      .then(data => {
        this.#database = JSON.parse(data)
    })
      .catch(() => {
        this.#persist()
    })
  }

  #persist() {  
    fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  select(tabela) {
    return this.#database[tabela] ?? []
 
  }

  insert(tabela, dado){
    if (Array.isArray(this.#database[tabela])){
      this.#database[tabela].push(dado)
    } else {
      this.#database[tabela] = [dado]
    }

    this.#persist()

    return dado;
  }

  delete(){}

}
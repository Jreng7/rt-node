import fs from 'node:fs/promises'

// Retorna o caminho inteiro do arquivo atual, no caso, database.js
// console.log(import.meta.url)
// file:///home/josue/developer/rt-node/src/middlewares/database.js

const databaPath = new URL('../db.json', import.meta.url)

export class Database {
  
  #banco = {}

  constructor() {
    fs.readFile(databaPath, 'utf8').then(data => {
      this.#banco = JSON.parse(data)
    })
    .catch(() => {
      this.#persist()
    })
  }

  #persist() {
    fs.writeFile(databaPath, JSON.stringify(this.#banco))
  }

  select(tabela) {
    const dado = this.#banco[tabela] ?? []
    
    return dado;
  }

  insert(tabela, dado){
    if(Array.isArray(this.#banco[tabela])){
      this.#banco[tabela].push(dado)
    } else {
      this.#banco[tabela] = [dado]
    }

    this.#persist()

    return dado;
  }

}
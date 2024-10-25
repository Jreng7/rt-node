import fs from 'node:fs/promises'

// Retorna o caminho inteiro do arquivo atual, no caso, database.js
console.log(import.meta.url)
// file:///home/josue/developer/rt-node/src/middlewares/database.js

export class Database {
  
  #banco = {}

  #persist() {
    fs.writeFile('db.json', JSON.stringify(this.#banco))
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
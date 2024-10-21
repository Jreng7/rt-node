import fs from 'node:fs/promises'

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
      this.dado[tabela].push(dado)
    } else {
      this.dado[tabela] = [dado]
    }

    this.#persist()

    return dado;
  }

}
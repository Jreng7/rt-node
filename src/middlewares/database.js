export class Database {
  
  database = {}

  select(table) {
    const data = this.database[table] ?? []
    return data;
  }

  insert(table, data) {
    if(Array.isArray(this.database[table])){ // Condição! 

      this.database[table].push(data)
    } else { // senão 

      this.database[table] = [data]
    }

    return data;
  }

}
# Curso Node.js - Rocketseat

Curso na plataforma da Rocketseat - Módulo Node.js.

### Nome do repositório

O nome deste repositório, **rt-nome**, é uma **abreviação** de "Rocketseat Node.js", onde:
- **rt** se refere a **Rocketseat**
- **nome** se refere ao **Node.js**

Essa abreviação foi escolhida para manter o nome curto e descritivo.

### 06/09/2024 - Iniciando com Node.js

* Criando um projeto Node.js

#### 1. Forma Antiga (CommonJS)
```js
const http = require('http'); // Usava-se o CommonJS
```

#### 1.2 Forma Atual (ESModules)
```js
import http from 'node:http'; // ESModules => import/export
```

- `req` (Request): Requisição, ou seja, está chamando o nosso servidor.
- `res` (Response): Resposta do servidor, devolvendo ao front-end a resposta solicitada ao back-end.

#### 2. Instalando o HTTPie

Instale o HTTPie com o comando:

```bash
sudo apt install httpie
```

Para substituir o navegador, use o comando no terminal:

```bash

http localhost:3333

```

#### 3. Usando o Watch Mode

Para evitar digitar `node src/server.js` repetidamente, o Node.js tem uma funcionalidade chamada **Watch Mode**. Use o comando:

```bash   

node --watch src/server.js

```

Para facilitar, adicione o seguinte script no arquivo `package.json`:

```json  

"scripts": {
  "dev": "node --watch src/server.js"
}

```

Agora, para rodar o comando, basta digitar:

```bash
npm run dev
```

#### 4. HTTP - Recursos principais:

1. **Métodos**: GET, POST, PUT, PATCH, DELETE.
2. **URL**: Endereço de recursos.

#### 5. Métodos HTTP:

- **GET**: Buscar informações (recursos) no back-end.
- **POST**: Criar uma informação (recurso) no back-end.
- **PUT**: Atualiza ou edita uma entidade inteira no back-end.
- **PATCH**: Atualizar uma única parte ou informação específica no back-end.
- **DELETE**: Remover uma informação (recurso) no back-end.

_Exemplos:_

// *GET/users* => Buscando usuários no back-end
// *POST/users* => Criando um usuário no back-end


#### 6. STREAMS 

### Código

```javascript
process.stdout.write("Digite Algo: ");

process.stdin.on("data", (abacate) => {
  const writer = abacate.toString().trim();
  process.stdout.write(`Você digitou ${writer}\n`);
});
```


**Explicação do Código**

  process.stdout.write("Digite Algo: ");
*Exibe uma mensagem no terminal pedindo para o usuário digitar algo*

  process.stdin.on("data", (abacate) => {
*Fica esperando o usuário digitar algo. Quando ele aperta Enter, o que foi digitado é capturado*

  const writer = abacate.toString().trim();
*Converte o que o usuário digitou (um buffer) para texto e remove espaços extras ou quebras de linha*

  process.stdout.write(`Você digitou ${writer}\n`);
*Exibe no terminal a mensagem dizendo "Você digitou" seguido do que o usuário digitou*

});


# Insomnia baixado para trabalhar com req, res e métodos.
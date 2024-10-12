# Explicação Completa do Código com Requisições POST e GET

Este código demonstra como um servidor HTTP em Node.js recebe e processa requisições POST e GET, utilizando um "banco de dados" temporário na memória.

## Código com Passo a Passo

```javascript
// 1º passo: Importa o módulo 'http' do Node.js para criar um servidor
import http from 'node:http'

// 2º passo: Simulando um banco de dados temporário na memória para armazenar os usuários
const users = []

// 3º passo: Cria o servidor HTTP. A função recebe dois argumentos, 'req' (requisição) e 'res' (resposta)
const server = http.createServer(async (req, res) => {

  // 4º passo: Extraindo o método (GET, POST, etc.) e a URL da requisição
  const { method, url } = req

  // 5º passo: Criando um array para armazenar pedaços de dados (chunks) que podem ser enviados na requisição
  const buffers = []

  // 6º passo: Lendo o corpo da requisição aos poucos. Cada pedaço (chunk) é adicionado ao array 'buffers'
  for await (const chunk of req) {
    buffers.push(chunk)
  }

  // 7º passo: Após receber todos os pedaços, o buffer é concatenado e transformado em uma string. Se for JSON, ele será convertido em um objeto JavaScript.
  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {
    // Se os dados não forem um JSON válido, 'req.body' será null
    req.body = null
  }

  // 8º passo: Se a requisição for um GET na URL '/users', o servidor retorna a lista de usuários
  if (method === 'GET' && url === '/users') {
    // Definindo o cabeçalho da resposta para indicar que o conteúdo é JSON
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users)) // Convertendo o array 'users' para JSON e enviando como resposta
  }

  // 9º passo: Se a requisição for um POST na URL '/users', o servidor vai tentar criar um novo usuário
  if (method === 'POST' && url === '/users') {
    // Extraindo o nome e o email do corpo da requisição (req.body)
    const { name, email } = req.body

    // Adicionando o novo usuário ao array 'users'
    users.push({
      id: users.length + 1, // Gerando um ID simples baseado no tamanho do array
      name,
      email,
    })

    // Retorna uma resposta com o status 201 (Created) para indicar que o usuário foi criado com sucesso
    return res.writeHead(201).end()
  }

  // 10º passo: Se a URL ou o método não forem encontrados, retorna uma resposta 404 (Not Found)
  return res.writeHead(404).end('Not Found')
})

// 11º passo: O servidor está configurado para ouvir na porta 3333
server.listen(3333)```

```
### ABAIXO CONTINUA A EXPLICAÇÃO!

Explicação do Fluxo

1º Passo: Importação do Módulo HTTP
-- O módulo http do Node.js é importado para que possamos criar o servidor e lidar com requisições e respostas HTTP.

2º Passo: Banco de Dados Temporário
O array users serve como um "banco de dados" temporário em memória, onde os usuários serão armazenados durante o tempo de execução do servidor.

3º Passo: Criação do Servidor
O servidor HTTP é criado usando http.createServer. Ele vai escutar requisições e responder de acordo com a URL e o método (GET ou POST).

4º Passo: Extraindo o Método e a URL
O servidor extrai o método (como GET ou POST) e a URL da requisição para decidir como processar a resposta.

5º Passo: Preparando para Receber os Dados
É criado um array buffers para armazenar os pedaços de dados (chunks) que o servidor pode receber na requisição POST.

6º Passo: Coletando os Pedaços de Dados
O loop for await coleta todos os pedaços de dados da requisição (caso seja um POST com dados no corpo). Esses pedaços são armazenados no array buffers.

7º Passo: Convertendo os Dados para JSON
Após receber todos os pedaços, o servidor junta todos os pedaços com Buffer.concat(buffers) e transforma os dados em string usando .toString(). Em seguida, tenta converter essa string para um objeto JSON com JSON.parse. Se a conversão falhar (os dados não forem JSON), o req.body será null.

8º Passo: Resposta para Requisição GET
Se a requisição for um GET na URL /users, o servidor retorna a lista de usuários armazenados no array users. O conteúdo da resposta é formatado como JSON.

9º Passo: Resposta para Requisição POST
Se a requisição for um POST na URL /users, o servidor cria um novo usuário com base nos dados enviados no corpo da requisição (JSON), que agora estão disponíveis em req.body. O novo usuário é adicionado ao array users.

10º Passo: Tratamento de Erros (404 Not Found)
Se a URL ou o método não forem reconhecidos, o servidor retorna uma mensagem de erro 404 (Not Found).

11º Passo: Ouvindo na Porta 3333
O servidor está configurado para ouvir as requisições na porta 3333. Você pode acessar o servidor fazendo requisições para http://localhost:3333.


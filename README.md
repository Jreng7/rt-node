# curso_node.js_rocketseat
Curso na plataforma da Rocketseat - Módulo Node.
### 06/09/2024 - Iniciando com Node.js
* Criando um projeto node.js

---------------------- // --------------------------

// Forma antiga => const http = require('http') = Usava-se o CommonJS

{ import http from 'node:http' // ESModules => import/Export }

// req = Requisição, ou seja, está chamando o nosso servidor.
// res = Response (Resposta) Está devolvendo ao front end a resposta pedida ao back end


3) Instalado "httpie" ( sudo apt install httpie) Ele substitui o browser
logo, é só digitar no terminal "http localhost:3333" 

4) Para não ficar digitando toda hora "node src/server.js" o node vem com uma 
funcionalidade chama "Watch", logo, usasse "node --watch src/server.js"
Porém, para não ficar digitando esse texto longo, é só ir até o arquivo "package.json"
e colocar um script "dev" e o código "node --watch src/server.js" 
assim, para o rodar o comando é só digitar "npm run dev" esse dev é o 
mesmo que "node --watch src/server.js"

5) HTTP => Os dois principais recursos são:

- Métodos GET/POST/PUT/PATCH/DELETE
- URL 

6) GET, POST, PUT, PATCH, DELETE

GET => Buscar informações no back-end
// Streams

//process.stdin
// .pipe(process.stdout)

process.stdout.write("Digite Algo: ");

process.stdin.on("data", (abacate) => {
  const writer = abacate.toString().trim();

  process.stdout.write(`Você digitou ${writer}\n`)

})

/**
 * Esse código solicita ao usuário que digite algo no terminal.
 * 
 * - `process.stdout.write("Digite Algo: ")`: Mostra a mensagem para o usuário no terminal.
 * - `process.stdin.on("data", (input) => {...})`: Fica "ouvindo" a entrada do usuário. Quando o usuário digita e aperta Enter, o que foi digitado é capturado.
 * - `input.toString().trim()`: Converte a entrada (que inicialmente é um buffer) para texto e remove espaços extras.
 * - `process.stdout.write(...)`: Responde no terminal mostrando de volta o que o usuário digitou.
 * 
 * Em resumo, esse código espera o usuário digitar, processa a entrada e exibe o que foi digitado.
 */

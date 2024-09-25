// Streams

//process.stdin
// .pipe(process.stdout)

process.stdout.write('Digite Algo: ')

process.stdin.on('data', (mouse) => {
  const resposta = mouse.toString().trim()
  process.stdout.write(`Você digitou o seguinte texto ${resposta}`)
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
 * 
 */

console.log('Caso você não tenha entendido a explicação acima, veja mais uma logo abaixo.')


/**
 * Vamos simplificar isso:
 *
 * 1.  process.stdout.write("Digite Algo: "): 
 *     Exibe uma mensagem no terminal pedindo para o usuário digitar algo.
 *
 * 2.  process.stdin.on("data", (abacate) => {...}): 
 *     O programa fica "esperando" a pessoa digitar. Quando ela digita e aperta enter, o que foi digitado é capturado. 
 *     Aqui, chamamos o que foi digitado de "abacate", mas poderia ser qualquer nome. No caso, é a função de CallBack.
 *
 * 3.  abacate.toString().trim(): 
 *     O que a pessoa digitou vem em um formato especial, então convertemos para texto usando .toString() 
 *     e removemos espaços extras e quebras de linha com .trim()
 *
 * 4.  process.stdout.write(...): 
 *     Depois de entender o que foi digitado, o programa responde dizendo "Você digitou" seguido do que foi escrito.
 *
 *    Resumindo: O código pede ao usuário para digitar algo, espera o input, e mostra de volta no terminal o que foi digitado. 
 *    O evento "data" funciona como um aviso para o programa, informando que o usuário digitou algo, e "abacate" é o que foi digitado.
 */

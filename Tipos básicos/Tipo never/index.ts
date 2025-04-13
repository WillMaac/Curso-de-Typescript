/*Never que dizer que aquele método ou função nunca vai retornar nada*/

function criaErro(): never {
  throw new Error('Erro qualquer');
}

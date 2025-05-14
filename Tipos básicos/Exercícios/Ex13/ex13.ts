/*Crie um type alias chamado Operacao para funções que recebem dois números e retornam um número.
Depois, crie uma função executarOperacao que receba uma Operacao e dois números, e retorne o resultado da operação. */


type Operacao = (a: number, b: number) => number;

function executarOperacao(op: Operacao, a: number, b: number) {
  return op(a, b);
}


const soma: Operacao = (x, y) => x + y;
const multiplicar: Operacao = (x, y) => x * y;


console.log(executarOperacao(soma, 10, 5));
console.log(executarOperacao(multiplicar, 4, 3));


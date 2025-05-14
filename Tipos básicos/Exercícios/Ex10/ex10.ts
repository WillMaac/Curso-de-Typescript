/*Crie um tipo chamado StatusPedido que só aceite os valores "pendente", "processando" ou "entregue".
Depois, crie uma função atualizarStatus que receba um status e retorne uma string como: "O pedido está: <status>".*/

type StatusPedido = 'pendente' | 'processando' | 'entregue';

const atualizarStatus = (staus: StatusPedido): string => {
  return `O pedido está: ${staus}`;
};

const verificarStatus1 = atualizarStatus('processando');
const verificarStatus2 = atualizarStatus('entregue');

console.log(verificarStatus1);
console.log(verificarStatus2);

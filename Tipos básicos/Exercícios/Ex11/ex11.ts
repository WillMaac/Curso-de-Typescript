/* Crie uma função calcularPrecoFinal que aceite dois parâmetros:

modoPagamento: "dinheiro" | "cartao" | "pix"

valor: number

A lógica deve ser:

"dinheiro" = 10% de desconto

"cartao" = sem desconto

"pix" = 15% de desconto*/


function calcularPrecoFinal(modoPagamento: "dinheiro" | "cartao" | "pix", valor: number): number {
  if (modoPagamento === "dinheiro") return valor * 0.9;
  if (modoPagamento === "pix") return valor * 0.85;
  return valor;
}

const formaDePagamento = calcularPrecoFinal("dinheiro", 200)

console.log(formaDePagamento);


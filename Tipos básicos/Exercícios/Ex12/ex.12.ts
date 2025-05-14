/* Crie um type chamado Produto com as propriedades: nome: string, preco: number.
Depois, crie uma função descreverProduto que recebe um Produto e imprime "Produto: nome - R$ preco".*/

type Produto ={
  nome:string
  preco:number
}

const descreverProduto = (produto:Produto):void =>{
console.log(`Produto: ${produto.nome} - R$ ${produto.preco}`)

}


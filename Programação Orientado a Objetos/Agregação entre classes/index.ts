export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];
  inserirProduto(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProduto(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
  get Nome(): string {
    return this.nome;
  }
}

const produto1 = new Produto("Computador", 5000);
const produto2 = new Produto("Iphone", 4000);
const produto3 = new Produto("Camiseta", 50);
const carrinhoDeCompras = new CarrinhoDeCompras();

carrinhoDeCompras.inserirProduto(produto1, produto2, produto3);
console.log(carrinhoDeCompras.quantidadeProduto());

console.log(carrinhoDeCompras.valorTotal());

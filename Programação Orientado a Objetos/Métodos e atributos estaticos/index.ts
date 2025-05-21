export class Cliente {
  static idadePadrao =0
  static cpfPadrao = '000.000-00'
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
  ) {}

   metodoNormal():void{
    console.log(Cliente.idadePadrao, Cliente.cpfPadrao);
    
  }
  static criaCliente(nome: string, sobrenome: string):Cliente {
    return new Cliente(nome,sobrenome, Cliente.idadePadrao, Cliente.cpfPadrao);
  }
}

const c1 = new Cliente("João", "Carlos", 30, "123.456.798-00");
const c2 = Cliente.criaCliente("Carla", "Cardos")
console.log(c2);

console.log(c1.cpf);
c1.metodoNormal();

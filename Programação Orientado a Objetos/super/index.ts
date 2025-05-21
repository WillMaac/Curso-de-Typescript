export class Pessoa {
  public nome: string;
  public sobrenome: string;
  protected idade: number;
  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
    this.sobrenome = sobrenome;
  }

  gettoll(): void {
    console.log(
      `Meu nome é ${this.nome}, e meu sobrenome é ${this.sobrenome} e tenho ${this.idade} anos`
    );
  }
}

export class Aluno extends Pessoa {
  private matricula: number;
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    matricula: number
  ) {
    super(nome, sobrenome, idade);

    this.nome = nome;
    this.idade = idade;
    this.sobrenome = sobrenome;
    this.matricula = matricula;

  }
  mostrarDados():void{
    super.gettoll()
    
    
  }
}

const person = new Pessoa("Will", "Meec", 20);
const aluno1 = new Aluno ("Maria", "Vanessa", 30, 12345)
person.gettoll();
console.log(aluno1);
aluno1.mostrarDados()


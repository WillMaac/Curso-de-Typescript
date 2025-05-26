interface TipoPessoa {
  nome: string;
}

interface Aluno {
  curso: string;
  faculdade: string;
  apresentacao(): void;
}

interface Estudante extends TipoPessoa, Aluno {}
export class Estudante1 implements Estudante {
  constructor(
    public nome: string,
    public curso: string,
    public faculdade: string
  ) {}

  apresentacao(): void{}
}

const alunoNovo: Estudante1 = {
    apresentacao():void{
 console.log(`O aluno ${this.nome} está cursando ${this.curso} na faculdade de ${this.faculdade}`);
    },
    nome:'Takisumy',
     curso:'Ciência da Computação', 
     faculdade:'Harvard.',
}

alunoNovo.apresentacao()
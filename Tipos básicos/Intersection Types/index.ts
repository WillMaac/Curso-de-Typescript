// Intersection Types é um tipo que combina as propriedades de dois ou mais tipos diferentes.

type TemNome = {nome:string};
type TemSobrenome = {sobrenome:string};
type TemIdade = {idade:number}
type Pessoa2 = TemNome & TemSobrenome & TemIdade; //AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC;

const p1: Pessoa2 ={
  nome: 'Will',
  sobrenome: 'Maacc',
  idade: 30,
}

type Mãe = {
  nome: string;
  filhos: number;
};

type Engenheira = {
  profissao: string;
};

type MãeEngenheira = Mãe & Engenheira;
const p2: MãeEngenheira = {
  nome: 'Julia',
  filhos: 2,
  profissao: 'Engenheira de Software'
}

console.log(p1);
console.log(p2);



// Type alias é tipo criar um apelido para um tipo//

type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario:number;
  corPreferida?:string;
}
type CorRGB = 'Vermelho'| 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type CorPreferida = CorRGB | CorCMYK;

const person:Pessoa = {
nome :'Will',
idade :20,
salario :5.000,
};

const setCorPreferida =(person:Pessoa, cor:CorPreferida):Pessoa =>{
return {...person, corPreferida: cor}
}
console.log(setCorPreferida(person,'Preto'));


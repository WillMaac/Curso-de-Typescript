interface IObjeto {
  chaveA: string;
  chaveB: string;
  chaveC?:string;
  chaveD:string;
}
const user:IObjeto ={
  chaveA: 'Valor A',
  chaveB: 'Valor B',
  chaveD: 'Valor D',
}

user.chaveA = 'Novo valor'
user.chaveC= 'Nova chave C';
user.chaveD= 'Nova chave123';


console.log(user.chaveC);



const objetoA:{
  chaveA: string;
  chaveB: string;
  chaveC?:string;

  [key: string]:unknown;
} ={
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
objetoA.chaveA = 'Novo valor'
objetoA.chaveC= 'Nova chave';
objetoA.chaveD= 'Nova chave';


console.log(objetoA);



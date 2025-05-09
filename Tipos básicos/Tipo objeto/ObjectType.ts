type ObjetoA = {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  chaveD?: string; // explícita
  [key: string]: unknown;
};

const objetoA: ObjetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA['chaveDDDD'] = 'Valor DDD';
objetoA['chaveB'] = 'Testando';

console.log(objetoA.chaveB);

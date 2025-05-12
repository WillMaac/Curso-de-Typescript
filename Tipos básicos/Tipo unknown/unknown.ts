// É um tipo seguro para valores que ainda não sabemos exatamente o que são.

let valor: unknown;

valor = 42;
valor = 'Olá!';

const y = 10

// Ao utilizar o unknown é preciso fazer uma verificação
if (typeof valor === 'number') console.log(valor + y); // Isso é seguro, pois sabemos que valor é um número


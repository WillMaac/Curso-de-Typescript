// É um tipo seguro para valores que ainda não sabemos exatamente o que são.

let valor: unknown;

valor = 'Olá!';
valor = 42;
valor = true;

// Ao utilizar o unknown é preciso fazer uma verificação
if (typeof valor === 'number') {
  console.log(valor.toFixed(2));
}

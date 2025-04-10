function multiplicarArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}
function concatenarString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const resultado = multiplicarArgs(1, 2, 3);
const concate = concatenarString("Olá ", "mundo")

console.log(concate);
console.log(resultado);



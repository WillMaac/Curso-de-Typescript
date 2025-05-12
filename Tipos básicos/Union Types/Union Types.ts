const addOrConcat = (a: number | string, b: number | string): number | string => {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
};

console.log(addOrConcat(10, 10));
console.log(addOrConcat('Valor: ', 10));

function imprimir(valor: string | number) {
  if (typeof valor === "string") {
    console.log(valor.toUpperCase());
  } else {
    console.log(valor.toFixed(2));
  }
}
imprimir(200);

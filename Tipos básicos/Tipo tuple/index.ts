const cliente: [string, number,] = ["Guss", 20, ]

console.log(cliente);


function retornaDados(): [string, number] {
  return ["João", 30];
}

const [name1, age1] = retornaDados();

console.log(retornaDados());


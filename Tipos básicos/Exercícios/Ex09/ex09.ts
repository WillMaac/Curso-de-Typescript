/* Cria uma função chamada erroFatal que lança um erro e tem tipo de retorno never.*/

const fatalError = ():never =>{
  throw new Error("Erro fatal")
}



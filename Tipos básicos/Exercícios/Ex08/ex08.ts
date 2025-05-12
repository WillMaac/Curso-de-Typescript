/*Cria uma função processarValor que aceita um valor do tipo unknown, e verifica se é string. Se for, retorna o .toUpperCase().*/

const processValue = (value:unknown): string | undefined =>{
  if(typeof value === "string") return value.toUpperCase()
}

console.log(processValue("olá")) // OI

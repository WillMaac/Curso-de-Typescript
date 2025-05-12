/*Cria um enum chamado DiaSemana com os dias da semana, e uma função ehFimDeSemana que retorna true se o dia for sábado ou domingo.*/

enum dayWeek{
  segunda
  , terca
  , quarta
  , quinta
  , sexta
  , sabado
  , domingo
}

const ehFimDeSemana = (dia: dayWeek): boolean => {
  return dia === dayWeek.sabado || dia === dayWeek.domingo;
};
console.log(ehFimDeSemana(dayWeek.sabado)); // true

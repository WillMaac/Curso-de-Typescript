/*Tipo literais são tipos que representam valores específicos em vez de tipos genéricos*/

type thema = 'branco' | 'Preto';

const mudarCor = (cor:thema):string =>{
return cor;
}

console.log(mudarCor('Preto'));


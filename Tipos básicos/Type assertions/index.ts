//Condicional
const body1 = document.querySelector('body')
if(body1)body1.style.background = 'red';

// Non-null assertation (!)
const body2 = document.querySelector('body')!; //Significa que ele não pode ser nulo
body2.style.background = 'red';


//Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement; // a forma mais recomendada em se utilizar em relaçao dos 3 exemplos
body3.style.background = 'red';

//HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;



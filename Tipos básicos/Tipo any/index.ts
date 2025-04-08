// Any representa falta de tipo, utilizar apenas em último caso//

function shadowMessage(msg:any){
    return msg;
}

console.log(shadowMessage([1, 2, 3, 4, 5]));
console.log(shadowMessage('Olá'));
console.log(shadowMessage(1));



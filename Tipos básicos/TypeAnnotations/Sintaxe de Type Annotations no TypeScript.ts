let nome: string = 'João'; // Texto
let idade: number = 25; // Número (inteiro ou decimal)
let ativo: boolean = true; // Verdadeiro ou falso
let simbolo: symbol = Symbol('Qualquer-symbol');
let indefinido: undefined = undefined; // Valor indefinido
let nulo: null = null; // Valor nulo
//bigint usado para números inteiros muito grandes, que ultrapassam o limite do tipo number.

console.log(idade);
           //array/
let arrayNumString: (number | string)[] =  [22, '22', '22'];
let arrayNum:Array<number> = [1, 2, 3, 4]

             //Objetos//

             let pessoa: {name: string, idade:number, adulto?:boolean} = {
              name: "Will",
              idade: 26,
             }
             console.log(pessoa.name, pessoa.idade);

                    //Function//

                    function sun(a:number, b:number):number{
                       return a + b
                    }

                    console.log(sun(10, 90));

                   function Saudacao():void{
                      let name = "Will"
                      console.log(`Olá  ${name}, tudo certo?`);
                    }

               Saudacao()





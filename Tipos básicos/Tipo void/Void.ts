/*Void que dizer que uma função ou método não retorna nada*/

function semRetorno(...args: string[]): void {
    console.log(args.join(''));
}

semRetorno('Will');

   //void em objetos//

   const pessoa2= {
    nome: "Willian",
    idade: 20,

    getName():void{
       console.log(this.nome);

    }
   }

pessoa2.getName()


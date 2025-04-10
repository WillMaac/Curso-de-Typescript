class Medico{
  realizarParto():void{
console.log("Realizando parto..");

  }
}

class Anestesista extends Medico{
realizarParto():void{
  console.log("Aplicando a anestesia..");
  super.realizarParto()
}
}

class Obstetra extends Medico{
realizarParto(): void {
    console.log("Preparando e retirando o bebe..");
    super.realizarParto()
}
}

class Pediatra extends Medico{
     realizarParto(): void {
         console.log("Verificando a saúde do recém-nascido...");
         super.realizarParto()


     }
}


const medico2 = new Medico()
const pediatra2 = new Pediatra()
const anestesista2 = new Anestesista()
const obstetra2 = new Obstetra()

medico2.realizarParto()
anestesista2.realizarParto()
obstetra2.realizarParto()
pediatra2.realizarParto()


class Animal {
  fazerSom(): void {
      console.log("Algum som genérico...");
  }
}

class Gato extends Animal {
  fazerSom(): void {
      console.log("Miau!");
  }
}

class Cão extends Animal {
  fazerSom(): void {
      console.log("Au au!");
  }
}

const animais: Animal[] = [new Gato(), new Cão()];

for (const animal of animais) {
  animal.fazerSom(); // Aqui acontece o polimorfismo
}

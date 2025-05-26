type Carro = {
  nome: string;
  motor: string;
  ano: number;
};

type TestandoMotor = {
  testandoMotor(): void;
};

export class MeuCarro implements Carro, TestandoMotor {
  constructor(public nome: string, public motor: string, public ano: number) {}

  testandoMotor(): void {
    console.log(`O ${this.motor} do ${this.nome} está funcionando!`);
  }
}

const carro = new MeuCarro("Fusca", "Motor 1200cc", 1960);

carro.testandoMotor();

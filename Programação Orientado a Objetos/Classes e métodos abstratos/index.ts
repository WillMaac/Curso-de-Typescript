abstract class Personagem {
  constructor(
    protected nome: string,
    protected atque: number,
    protected vida: number
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    console.log(`${this.nome} está atacando...`);
    personagem.perderVida(this.atque);
  }
  perderVida(forcaAtaque: number): void {
      this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida`);
  }

  abstract bordao(): void;

}

class Guerreiro extends Personagem {
  bordao(): void {
    console.log("AO ATAQUE!!!");
  }
}
class Monstro extends Personagem {
    bordao(): void {
        console.log("OOOOOOOORRRR");
        
    }
}

const guerreiro = new Guerreiro("Thor", 200, 1000);
const monstro = new Monstro("monstro", 100, 1000);

guerreiro.atacar(monstro);
guerreiro.atacar(monstro);
guerreiro.atacar(monstro);
guerreiro.atacar(monstro);

monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);

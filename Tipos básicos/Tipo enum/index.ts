enum Cores {
  Vermelho,
  Azul,
  Preto,
}

const escolhaACor = (cor: Cores): void => {
  console.log(Cores[cor]);
};

escolhaACor(Cores.Azul);




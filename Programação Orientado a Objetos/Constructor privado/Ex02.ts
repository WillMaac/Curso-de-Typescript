export class Logger {
  private static instance: Logger;

  private constructor(private msg: string) {}

  exibindoMsg(): void {
    console.log(`Mensagem já criada, aqui está: ${this.msg}`);
  }

  static getLogger(msg: string): Logger {
    if (Logger.instance) {
      console.log("Mensagem já criada. Retornando instância existente.");
      return Logger.instance;
    }

    console.log("Criando nova mensagem.");
    Logger.instance = new Logger(msg);
    return Logger.instance;
  }
}

const logger1 = Logger.getLogger("Mensagem de teste para o logger");
logger1.exibindoMsg();

const logger2 = Logger.getLogger("Mensagem de teste diferente");
logger2.exibindoMsg();

console.log(logger1 === logger2); // true

    

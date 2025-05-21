export class Pessoa{
    public nome: string
    public sobrenome:string
    protected idade: number
    constructor(nome:string, sobrenome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
        this.sobrenome = sobrenome
    }

    gettoll():void{
        console.log(`Meu nome é ${this.nome}, e meu sobrenome é ${this.sobrenome} e tenho ${this.idade} anos`);
    }
}


const person = new Pessoa('Will', 'Meec', 20)
person.gettoll()
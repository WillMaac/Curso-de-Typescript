export class Cliente{
    constructor(
    private nome:string,
    private sobrenome:string,
    private idade:number,
    private _cpf:string,
    ) {}

    set cpf(cpf:string){
        console.log("Seter chamado");
        
        this._cpf = cpf;
    }

    get cpf():string{
        console.log("Geter chamado");
        
return this._cpf
    }
}

const c1 = new Cliente("João", "Carlos", 30, "123.456.798-00")

c1.cpf = "548545415"

console.log(c1.cpf);

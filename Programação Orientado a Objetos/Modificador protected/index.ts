class Empresa1 {
public readonly nome:string;
protected colaboradores:Colaborador[] = [];
protected readonly cnpj:string;

constructor(nome:string, cnpj:string){
    this.nome = nome;       
    this.cnpj = cnpj;       
}

adicionarColaborador(colaboradores:Colaborador):void{
    this.colaboradores.push(colaborador)
}
mostrarColaboradores():void{
    for(const colaborador of this.colaboradores){
        console.log(colaborador);
        
    }
}
}

export class Google extends Empresa1{
    constructor(){
        super('Google', '12.222.222/002-11')
    }
    pop():Colaborador | null{
        const colaborador = this.colaboradores.pop();
        if(Colaborador) return colaborador;
        return null;
    }
}

class Colaborador1{
    constructor(
public readonly nome:string,
public readonly sobrenome:string,
){}
}

const empresa2 = new Empresa('Google', '12.222.222/002-11')
const colaboradorrt = new Colaborador('Gustavo', 'Silva')
const colaboradormt = new Colaborador('Maria', 'Fernanda')
const colaborador5 = new Colaborador('Lucas', 'Souza')
const colaborador6 = new Colaborador('Taty', 'Silva')
empresa1.adicionarColaborador(colaborador)
empresa1.adicionarColaborador(colaborador2)
empresa1.adicionarColaborador(colaborador3)
empresa1.adicionarColaborador(colaborador4)
console.log(empresa1);
empresa1.mostrarColaboradores()
empresa1.pop()
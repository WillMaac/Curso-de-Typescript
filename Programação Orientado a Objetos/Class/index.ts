class Empresa {
public readonly nome:string;
private colaboradores:Colaborador[] = [];
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

class Colaborador{
    constructor(
public readonly nome:string,
public readonly sobrenome:string,
){}
}

const empresa1 = new Empresa('Google', '12.222.222/002-11')
const colaborador = new Colaborador('Gustavo', 'Silva')
const colaborador2 = new Colaborador('Maria', 'Fernanda')
const colaborador3 = new Colaborador('Lucas', 'Souza')
const colaborador4 = new Colaborador('Taty', 'Silva')
empresa1.adicionarColaborador(colaborador)
empresa1.adicionarColaborador(colaborador2)
empresa1.adicionarColaborador(colaborador3)
empresa1.adicionarColaborador(colaborador4)
console.log(empresa1);
empresa1.mostrarColaboradores()




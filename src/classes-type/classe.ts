export class Empresa {
    public readonly nome: string;                 //metodo public acessivel em todas as classes fora das classes e em todas as subclasses
    protected readonly colaboradores: Colaborador[] = []; //metodo private só é acessivel dentro da classe -> eport class Empresa <-
    private readonly cnpj: string;


    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }
    adicionarColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador)
     }
     showcolaboradores(): void{
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
     }
}


export class tecLamb extends Empresa {
    constructor(){
        super('LAMB', '11.111.111./0008-78');
    }
    
    popColaborador(): Colaborador | null {
        const colaborador = this.colaboradores.pop();
        if (colaborador) return colaborador;
        return null;
    }
}


export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
}


const empresa1 = new Empresa('lamb´l', '011.011.111/0001-11');
const empresa2 = new Empresa('vercel', '007.008.009/0006-12')
const colaborador1 = new Colaborador('Marcus', 'Vinicius');
const colaborador2 = new Colaborador('Rich', 'Harris')
const colaboradorRemovido = empresa1;
console.log(empresa1, colaborador1);
console.log(empresa2, colaborador2);
empresa1.adicionarColaborador(colaborador1);
empresa2.adicionarColaborador(colaborador2);
empresa1.showcolaboradores();
empresa2.showcolaboradores();
console.log(colaboradorRemovido);



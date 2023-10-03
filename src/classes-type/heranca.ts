export class Pessoa {

    constructor(
        public name: string,
        public lastName: string,
        private age: number,
        protected cpf: string,
        private peso?: string,
        ) {}
            getAge(): Number{
                return this.age;
            }
            getCpf(): String{
                return this.cpf;
            }
            getNAME(): String{
                return this.name + ' ' + this.lastName;
            }
            getPeso(): String | undefined{
                return ' agora eu tenho `${peso}`';
            }
}

export class Aluno extends Pessoa {
   constructor(){
    super('Vinicius', 'Pereira', 30, '5645644654', '70');
   }
}
export class Cliente extends Pessoa {
    constructor(name: string,
        lastName: string,
        age: number,
        cpf: string,
        public CNPJ: string,
        ) {
        super(name, lastName, age, cpf);
    }
    getNAME(): String {
        return 'isso aqui é do Cliente: ' + this.name + ' ' + this.lastName;
    }
    getPeso(): String | undefined {
        return ' estou ganhando peso' + this.getPeso;
    }

}
export class Peso extends Pessoa {
    constructor() {
        super('Marcus', 'Vinicius', 29,'456.546.789.78', '69 kilos')
    }
}

const NovaPessoa = new Peso();
const aluno = new Aluno();
const cliente = new Cliente('Marcus', 'Vinicius', 30 , '123.123.789.89', '1231.1231.7897.2132-12')
const pessoa = new Pessoa('VINICIUS', 'FURQUIM', 31, '789.456.123.58')
console.log(cliente.getNAME());
console.log(cliente);
console.log(pessoa.getNAME());
console.log(Peso.);


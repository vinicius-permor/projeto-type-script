export class Pessoa{
        static idadePadrao = 0; // attibutos esticos
        static cpfPadrao = '789.789.456.45'; // atributos estaticos

//metodo estaticos
    static cria_pessoa(nome: string, sobrenome: string): Pessoa {
      return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }

    novoMetodo(): void {
        console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }

    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string,)
         {}

}

const pessoa  = new Pessoa('Marcus', 'Vinicius',29,' 7987.8789.98789.89789');
const pessoa2 = Pessoa.cria_pessoa('Vinicius', 'Pereira');
pessoa.cpf = '789.789.456.45';
pessoa2.novoMetodo();
console.log(pessoa);
console.log(pessoa2);

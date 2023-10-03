export class Pessoa {
    constructor(
        private _name: string,
        private _last_name: string,
        private age: number,
        private _cpf: string,
        private numberOfcount: number ,
    ){
        this.cpf = _cpf;
        this.Name = _name;
        this.last_name = _last_name;
    }

    getAge(): Number{
        return this.age;
    }

    set cpf(cpf: string) {
         this._cpf = cpf;
    }

    get cpf(): string{
         return this._cpf.replace(/\D/g, '');
    }

    set Name(name: string){
        this._name = name;
    }
    set last_name(last_name: string){
        this._last_name = last_name
    }
    get NumAccount_number(): Number {
        return this.numberOfcount;
    }
}
const one_pessoa = new  Pessoa("Marcus", "Vinicius", 29, "456.789.231.12", 789789789789789);
one_pessoa.Name = 'Marcus Vinicius';
one_pessoa.last_name = 'Pereira de Moraes';
one_pessoa.cpf = '123.123.123.31.313';
console.log('nome: ', one_pessoa.Name);
console.log('sobrenome: ', one_pessoa.last_name);
console.log('numero da conta: ', one_pessoa.NumAccount_number);
console.log('CPF: ', one_pessoa.cpf);

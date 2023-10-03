type TypePeople = {
     name: string;
     last_name: string;
     full_name(): string;
};
export class People implements TypePeople {
    constructor(
        public nome: string,
        public last_name: string,
        ) {}
    public full_name(): string {
        return this.nome + ' ' +  this.last_name;
    }
}

const pessoa = new People("Marcus", "Vincius");
console.log(pessoa.full_name());

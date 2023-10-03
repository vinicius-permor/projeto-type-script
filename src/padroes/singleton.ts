export class Pessoa {
    constructor(
        private nome: string,
        public sobrenome: string,
        protected idade: number,
        public id: string,

    ){}

    public getnome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setnome(nome: string): void {
        this.nome = nome
    }

    public setIdade(idade: number): void {
        this.idade  = idade;
    }
}

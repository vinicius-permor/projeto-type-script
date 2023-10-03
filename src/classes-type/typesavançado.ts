export function add(a: unknown, b: unknown) {
    return typeof a ==='number' && typeof b ==='number' ?a + b : `${a} + ${b}`;
}

console.log(add(1,5));
console.log(add('a', 'b'));



type Pessoa = {nome: string};
type Animal = {cor: string};
type union = Pessoa | Animal;

export class Aluno implements Pessoa {
    constructor(public nome: string) {}
}
function mostraNome(obj: Pessoa_ou_Animal): void {
   if ('nome' in obj) console.log(obj.nome)

}
mostraNome(new Aluno('Vinicius'));

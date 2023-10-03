export class Music{
    public nome: string;
    public genero: string;
    public nomedaMusica: string;

    constructor(nome: string, genero: string, nomedaMusica: string){
        this.nome = nome;
        this.genero = genero;
        this.nomedaMusica = nomedaMusica;
    }

    addMusica(NOMEMUSICA: string): void{
        this.nomedaMusica.replace;
    }
    mostrarmusica(): void{
        for (const NOMEMUSICA of this.genero) {
            console.log(NOMEMUSICA)
        }
    }
}

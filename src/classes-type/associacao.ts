export class Escritor{
    private _ferramenta: Ferramenta | null = null;
    constructor(private _nome: string){}

    get nome(): string{
        return this._nome;
    }

    set ferramenta(ferramenta: Ferramenta | null) {
        this._ferramenta = ferramenta;
    }
    get ferramenta(): Ferramenta | null {
        return this._ferramenta;
    }

    escrever(): void {
        if (this.ferramenta === null) {
            console.log("não posso escrever sem ferramenta")
            return;
        }
    }
 }

 export abstract class Ferramenta {
    constructor(private _nome: string){}
    abstract escrever(): void;

    get nome(): string{
        return this._nome;
    }
 }

 export class caneta extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está ecrevendo`)
    }
 }

 export class MaquinaDeEscrever extends Ferramenta{
    escrever(): void {
        console.log(`${this.nome} está digitando`)
    }
 }

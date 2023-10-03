export class Person {
    protected abstract emoji: string;

    constructor(
        protected name: string,
        protected atacker: number,
        protected life: number,
        ) {}

    atack(person: Person): void{
        this.bordao();
        person.lostlife(this.atacker);
    }


    lostlife(attack_force: number): void{
        this.life -= attack_force;
        console.log(`${this.emoji} - ${this.name} , está tomando dano tem , ${this.life}`);
    }

    abstract bordao(): void;


}

export class Guerreira extends Person {
    protected emoji = '\u{1F9DD}';
    bordao(): void {
        console.log(this.emoji + ' ataque da guerreira ');
    }
}
export class Monstro extends Person {
    protected emoji = '\u{1F9DF}';
    bordao(): void {
        console.log(this.emoji + ' ataque do monstro ');
    }
}

const guerreira = new Guerreira('espada-chin', 600, 400);
const monstro = new Monstro('ogro-mutante', 500, 300);

guerreira.atack(monstro);
guerreira.atack(monstro);
monstro.atack(guerreira);
guerreira.atack(monstro);
monstro.atack(guerreira);
guerreira.atack(monstro);
monstro.atack(guerreira);
guerreira.atack(monstro);

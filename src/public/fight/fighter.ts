export interface IFighter {
    readonly name: string;
    readonly power: number;
    // getHealth(): number;
    // setDamage(damage: number): void;
    hit(enemy: Fighter, point: number): void;
    knockout(): Promise<{}>;
} 


// Create class Fighter
export default class Fighter implements IFighter {
    readonly name: string;
    private _health: number;
    readonly power: number;

    constructor(name: string = "Halk", health: number = 30, power: number = 5) {
        this.name = name;
        this._health = health;
        this.power = power;
    }

    get health(): number {
        return this._health;
    }

    set health(health: number) {
        this._health = health;
    }

    protected _setDamage(damage: number): void {
        this.health = this.health - damage;
        console.log(`${this.name}'s health: ${this.health}`);
    }

    hit(enemy: Fighter, point: number): void {
        const damage = point * this.power;
        enemy._setDamage(damage);
    }

    knockout(): Promise<{}> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("time is over");
            }, 500);
        });
    }
}

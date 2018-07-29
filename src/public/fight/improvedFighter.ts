// Create class ImprovedFighter
import Fighter, { IFighter } from "./fighter";


export interface IImprovedFighter extends IFighter {
    doubleHit(enemy: Fighter, point: number): void;
}

export default class ImprovedFighter extends Fighter implements IImprovedFighter {
    constructor(name: string = "ImprovedHalk", health: number = 30, power: number = 5) {
        super(name, health, power);
    }

    doubleHit(enemy: Fighter, point: number): void {
        super.hit(enemy, point * 2);
    }
}

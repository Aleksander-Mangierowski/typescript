// import "babel-polyfill";

import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";

export interface IFight {
    firstFighter: Fighter;
    secondFighter: Fighter;
    points: number[];
    startFight(): void;
}

export default class Fight implements IFight {
    firstFighter: Fighter;
    secondFighter: Fighter;
    points: number[];

    constructor(firstFighter: Fighter, secondFighter: Fighter, points: number[]) {
        this.firstFighter = firstFighter;
        this.secondFighter = secondFighter;
        this.points = points;
    }

    startFight(): void {
        (async () => {
            for (let i = 0; i < this.points.length; i++) {
                this.firstFighter.hit(this.secondFighter, this.points[i]);
                if (this.secondFighter.health < 0) {
                    console.log(`ImprovedFighter ${this.secondFighter.name} is in knockout!`);
                    await this.secondFighter.knockout().then(message => console.log(message));
                    console.log(`Game over. Fighter ${this.firstFighter.name} has won!`);
                    break;
                }
                (this.secondFighter as ImprovedFighter).doubleHit(this.firstFighter, this.points[i]); // type casting
                if (this.firstFighter.health < 0) {
                    console.log(`Fighter ${this.firstFighter.name} is in knockout!`);
                    await this.firstFighter.knockout().then(message => console.log(message));
                    console.log(
                        `Game over. ImprovedFighter ${this.secondFighter.name} has won!`
                    );
                    break;
                }
            }
        })();
    }
}
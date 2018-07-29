import Fight from './fight/fight';
import Fighter from './fight/fighter';
import ImprovedFighter from "./fight/improvedFighter";

export default class Main {
    constructor() {
        const fighter = new Fighter("Ali", 30, 4);
        const improvedFighter = new ImprovedFighter("Tyson", 20, 3);
        const points = [2, 3, 4, 5];

        const app = new Fight(fighter, improvedFighter, points);
        app.startFight();
    }
}

new Main();

import { Warrior } from "../interface/warriorInterface";
import { Android } from "./android";

export class AndroidAdapter implements Warrior {
    constructor(private adroid: Android) {}
        public AttackBase = 50;
        public Attack(): number {
            return this.adroid.kick() + this.adroid.punch() + this.AttackBase;
        }
}
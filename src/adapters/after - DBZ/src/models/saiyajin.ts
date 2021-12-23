import { Warrior } from '../interface/warriorInterface';

export class Saiyajin implements Warrior {
  public AttackBase = 99;
  public Attack(): number {
    return Math.random() * 100 + this.AttackBase;
  }
}

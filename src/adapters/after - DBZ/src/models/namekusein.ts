import { Warrior } from '../interface/warriorInterface';

export class Namekusein implements Warrior {
  public AttackBase = 50;
  public Attack(): number {
    return Math.random() * 50 + this.AttackBase;
  }
}

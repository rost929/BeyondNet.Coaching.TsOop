import { Saiyajin } from './models/saiyajin';
import { Namekusein } from './models/namekusein';
import { Android } from './models/android';
import { AndroidAdapter } from './models/androidAdapter';

const carlosIvan = new Saiyajin();
const vegueta = new Saiyajin();
const piccolo = new Namekusein();
const androidC17 = new AndroidAdapter(new Android());

console.log(`Carlos attack: ${carlosIvan.Attack()}`);
console.log(`Vegueta attack: ${vegueta.Attack()}`);
console.log(`Picolo attack: ${piccolo.Attack()}`);
console.log(`androidC17 attack: ${androidC17.Attack()}`);

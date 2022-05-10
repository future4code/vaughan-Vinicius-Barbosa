import { Character } from '../src/index'
import { validateCharacter } from '../src/index'

export const performAttack = (attacker: Character, defender: Character) => {
   if (!validateCharacter(attacker) || !validateCharacter(defender)) {
     throw new Error("Invalid character");
   }
 
   if (attacker.strength > defender.defense) {
     defender.life -= attacker.strength - defender.defense;
   }
 };


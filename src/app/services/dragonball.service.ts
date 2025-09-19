import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/dragonball/character';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonBallService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocaleStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    //! * this.characters().push(newCharacter); */
    this.characters.update((list) => [...list, character]);
  }
}

import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.html',
})
export class DragonBall {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Son Goku',
      power: 9001,
    },
    /* {
      id: 2,
      name: 'Veggeta',
      power: 8501,
    },
    {
      id: 3,
      name: 'Picoro',
      power: 6200,
    },
    {
      id: 4,
      name: 'Yamcha',
      power: 800,
    }, */
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    /* this.characters().push(newCharacter); */
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}

import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.html',
  imports: [UpperCasePipe],
})
export class HeroPage {
  name = signal('hulk');
  age = signal(42);

  heroDescription = computed(() => `${this.name()} - ${this.age()}`);

  capitalizedName = computed(() => this.name().charAt(0).toUpperCase() + this.name().slice(1));

  changeHero() {
    this.name.set('spiderman');
    this.age.set(22);
  }

  chageAge(value: number) {
    this.age.set(value);
  }

  resetForm() {
    this.name.set('hulk');
    this.age.set(40);
  }
}

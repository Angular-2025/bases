import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPage {
  counter = 10;
  counterSignal = signal(10);

  constructor() {}

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  decreaseBy(value: number) {
    if (this.counterSignal() <= 0) return;

    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}

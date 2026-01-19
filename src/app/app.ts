import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  counter: WritableSignal<number> = signal<number>(0);

  handleCounter(val: string) {
    if (val === '+') {
      this.counter.update((val) => val+1);
    } else if (val === '-' && this.counter() > 0) {
      this.counter.update((val) => val-1);
    } else {
      this.counter.set(0);
    }
  }

}

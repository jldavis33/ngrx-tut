import { Component } from '@angular/core';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {

  constructor() {
    // TODO: Connect `this.count$` stream to the current store `count` state
  }

  increment() {
    // TODO: Dispatch an 'increment' action
  }

  decrement() {
    // TODO: Dispatch a 'decrement' action
  }

  reset() {
    // TODO: Dispatch a 'reset' action
  }
}

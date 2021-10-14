import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
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

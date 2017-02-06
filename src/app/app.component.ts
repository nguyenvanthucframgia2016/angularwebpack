import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    public collection: string[] = ['a', 'b', 'c', 'd'];
    public str: string = 'abcdefghij';
}

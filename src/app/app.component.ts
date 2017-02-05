import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    public users = [
        { id: 1, name: 'Nguyen Van A', age: 18 },
        { id: 2, name: 'Nguyen Van B', age: 19 },
        { id: 3, name: 'Nguyen Van C', age: 20 },
        { id: 4, name: 'Nguyen Van D', age: 21 },
        { id: 5, name: 'Nguyen Van E', age: 22 },
    ];
}

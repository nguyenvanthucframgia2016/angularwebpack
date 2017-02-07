import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    public name: string = 'Thuc po rao';
    public stringFormat: string = 'Hello String formatted';
}

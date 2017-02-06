import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    public message:string = 'Uppercase and LowerCase Pipe';
}

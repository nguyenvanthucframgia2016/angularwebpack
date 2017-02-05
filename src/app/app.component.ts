import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    public ids = [1, 2, 3, 4, 5];

    public getCssClasses(even: boolean) {
        return even ? { 'one': true, 'two': true } : { 'three': true, 'four': true };
    }
}

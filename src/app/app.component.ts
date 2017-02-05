import { Component } from '@angular/core';
import { DirectionEnum } from './enum/directionEnum';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    public person = 'A';
    public users = [
        { id: 1, name: 'Nguyen Van A' },
        { id: 2, name: 'Nguyen Van B' },
        { id: 3, name: 'Nguyen Van C' },
        { id: 4, name: 'Nguyen Van D' },
        { id: 'ab', name: 'Nguyen Van E' },
    ];
    public dirEnum = DirectionEnum;
    public north = DirectionEnum.North;
}

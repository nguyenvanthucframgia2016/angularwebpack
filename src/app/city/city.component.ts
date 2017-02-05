import { Component, Input } from '@angular/core';

@Component({
    selector: 'city-app',
    templateUrl: './index.html'
})

export class CityComponent {
    @Input('cityObjects') cities: String[];
}
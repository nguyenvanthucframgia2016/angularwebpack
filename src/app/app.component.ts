import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    public fontSize = 8;
    public getStyle() {
        return {
            'font-size.px': this.fontSize < 10 ? this.fontSize * 3 : this.fontSize,
            'color': 'blue',
            'background': 'url(\'../src/assets/images/image.jpg\') no-repeat'
        }
    }
}

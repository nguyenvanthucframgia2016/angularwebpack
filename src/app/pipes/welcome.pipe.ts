import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'welcome'
})

export class WelcomePipe implements PipeTransform {
    transform(value: string) {
        if (value) {
            return 'Welcome ' + value
        }

        return;
    }
}
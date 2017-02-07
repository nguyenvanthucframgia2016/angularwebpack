import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'repeat'
})

export class RepeatPipe implements PipeTransform {
    transform(value: string, repeat: number) {
        if (value && !isNaN(repeat) && repeat) {
            return value.repeat(repeat);
        }
    }
}
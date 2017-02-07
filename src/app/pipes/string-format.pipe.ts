import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stringFormat'
})

export class StringFormatPipe implements PipeTransform {
    transform(value: string, format: string) {
        if (value) {
            return value.split(' ').join(format);
        }

        return;
    }
}
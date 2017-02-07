import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tempConvertor'
})

export class TemConvertorPipe implements PipeTransform {
    transform(value: number, unit: string) {
        if (!isNaN(value)) {
            if (unit === 'C') {
                return ((value - 32) / 1.8).toFixed(2);
            } else if (unit === 'F') {
                return ((value * 1.8) + 32).toFixed(2);
            }
        }

        return;
    }
}
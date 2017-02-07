import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numExpress'
})

export class NumberExpressionPipe implements PipeTransform {
    transform(firstNumber: number, operator: string, secondNumber: number) {
        if (!isNaN(firstNumber)
            && !isNaN(secondNumber)) {
            switch (operator) {
                case '+':
                    return firstNumber + secondNumber;
                case '-':
                    return firstNumber - secondNumber;
                case '*':
                    return firstNumber * secondNumber;
                case '/':
                    if (secondNumber == 0) {
                        return;
                    }

                    return firstNumber / secondNumber;
                default:
                    return;
            }
        }

        return;
    }
}
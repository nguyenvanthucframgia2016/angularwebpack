import { Injectable } from '@angular/core';

@Injectable()

export class LoggerService {
    print(message: any) {
        console.log(message);
    }
}
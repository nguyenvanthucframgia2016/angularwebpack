import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';

@Injectable()

export class ProductService {
    constructor(private loggerService: LoggerService) {}

    public getListProduct() {
        this.loggerService.print('get List Product');
        let products: Product[] = [
            new Product(1, 'A', 100),
            new Product(2, 'B', 200),
            new Product(3, 'C', 300),
            new Product(4, 'D', 400),
        ];
        this.loggerService.print(products);

        return products;
    }
}
import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html',
  providers: [
    ProductService,
    LoggerService,
  ]
})

export class AppComponent implements OnInit {
    public products: any;
    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.products = this.productService.getListProduct();
    }
}

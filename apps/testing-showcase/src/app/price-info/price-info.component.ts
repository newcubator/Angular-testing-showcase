import { Component, OnInit } from '@angular/core';
import { PriceService } from './services/price.service';

@Component({
    selector: 'ts-price-info',
    templateUrl: './price-info.component.html',
    styleUrls: ['./price-info.component.scss'],
    providers: [PriceService]
})
export class PriceInfoComponent implements OnInit {
    price = 0;

    constructor(private priceService: PriceService) {}

    ngOnInit(): void {
        this.price = this.priceService.getPrice(10);
    }

    onIncrease() {
        this.price = this.priceService.increasePrice(this.price);
    }
}

import { Injectable } from '@angular/core';

@Injectable()
export class PriceService {

    getPrice(price: number) {
        return price;
    }

    increasePrice(price: number) {
        const newPrice = price * 2;
        return newPrice;
    }
}

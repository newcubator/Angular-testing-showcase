import { PriceService } from './price.service';

describe('PriceService', () => {
    let service: PriceService;

    beforeEach(() => {
        service = new PriceService();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

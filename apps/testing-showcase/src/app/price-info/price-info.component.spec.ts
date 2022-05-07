import { CommonModule } from '@angular/common';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { render, RenderComponentOptions, RenderResult, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { createSpyFromClass, Spy } from 'jest-auto-spies';
import { MockModule } from 'ng-mocks';
import { ButtonModule } from '../../../../../libs/ui/src/index';

import { PriceInfoComponent } from './price-info.component';
import { PriceService } from './services/price.service';

describe('PriceInfoComponent', () => {
    let renderResult: RenderResult<PriceInfoComponent>;
    let component: PriceInfoComponent;
    const setup = async (config: RenderComponentOptions<PriceInfoComponent> = {}) =>
        render(PriceInfoComponent, {
            ...{
                imports: [
                    CommonModule,
                    ButtonModule
                ],
            },
            ...config
        });

    describe('Component Test', () => {
        const mockPriceService = createSpyFromClass(PriceService);
        beforeEach(async () => {
            renderResult = await setup({
                imports: [
                    MockModule(ButtonModule)
                ],
                providers: [
                    { provide: ComponentFixtureAutoDetect, useValue: true }
                ],
                componentProviders: [
                    {
                        provide: PriceService, useValue: mockPriceService
                    }
                ]
            });
            component = renderResult.fixture.componentInstance;
        });

        it('should validate that price has a init value of 10', () => {
            mockPriceService.getPrice.mockReturnValue(10);
            component.ngOnInit();
            expect(component.price).toEqual(10);
        });

        for (const { price, response } of [
            { price: 10, response: 20 },
            { price: 20, response: 40 },
            { price: 122, response: 244 },
        ]) {
            it(`should return ${response} if price is ${price}`, () => {
                mockPriceService.increasePrice.mockReturnValue(response);
                component.price = price;
                component.onIncrease();
                expect(component.price).toEqual(response);
                screen.logTestingPlaygroundURL();

            });
        }
    });

    describe('Integration Test', () => {
        let priceService: PriceService = new PriceService();
        beforeEach(async () => {
            renderResult = await setup({
                componentProviders: [
                    { provide: PriceService, useValue: priceService }
                ]
            });
            component = renderResult.fixture.componentInstance;
        });

        it('should create', async () => {
            expect(component).toBeInstanceOf(PriceInfoComponent);
        });

        it('should click and increase price', async () => {
            const priceServiceSpy = jest.spyOn(priceService, 'increasePrice');
            const oldPrice = component.price;
            await userEvent.click(screen.getByTestId('ts-btn'));
            expect(component.price).toEqual(oldPrice * 2);
            expect(priceServiceSpy).toHaveBeenCalled();
            screen.logTestingPlaygroundURL();
        });
    });

    xdescribe('Let\'s go crazy', () => {
        let component: PriceInfoComponent;
        let priceServiceSpy: Spy<PriceService> = createSpyFromClass(PriceService);

        beforeEach(() => {
            component = new PriceInfoComponent(priceServiceSpy);
        });

        it('should validate that price has a init value of 10', () => {
            priceServiceSpy.getPrice.mockReturnValue(10);
            component.ngOnInit();
            expect(component.price).toEqual(10);
        });

        for (const { price, response } of [
            { price: 10, response: 20 },
            { price: 20, response: 40 },
            { price: 122, response: 244 },
        ]) {
            it(`should return ${response} if price is ${price}`, () => {
                priceServiceSpy.increasePrice.mockReturnValue(response);
                component.price = price;
                component.onIncrease();
                expect(component.price).toEqual(response);
                screen.logTestingPlaygroundURL();

            });
        }
    });
});

import { CommonModule } from '@angular/common';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { ButtonModule } from '../../../../../libs/ui/src/index';

import { PriceInfoComponent } from './price-info.component';

describe('PriceInfoComponent', () => {
    const setup = async () =>
        render(PriceInfoComponent, {
            imports: [
                CommonModule,
                ButtonModule
            ],
        });

    it('should create', async () => {
        const renderResult = await setup();
        expect(renderResult.fixture.componentInstance).toBeInstanceOf(PriceInfoComponent);
    });

    it('should click and increase price', async () => {
        const renderResult = await setup();
        const component = renderResult.fixture.componentInstance;
        const oldPrice = component.price;
        await userEvent.click(screen.getByTestId('ts-btn'));
        expect(component.price).toEqual(oldPrice * 2);

        screen.logTestingPlaygroundURL();
    });
});

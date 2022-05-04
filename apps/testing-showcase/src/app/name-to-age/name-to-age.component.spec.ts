import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { createSpyFromClass } from 'jest-auto-spies';
import { of } from 'rxjs';
import { AgifyService } from '../../../../../libs/name-to-age/src/index';
import { ButtonModule } from '../../../../../libs/ui/src/index';

import { NameToAgeComponent } from './name-to-age.component';

describe('NameToAgeComponent', () => {
    const agifyService = createSpyFromClass(AgifyService);
    const setup = async () =>
        render(NameToAgeComponent, {
            imports: [
                ReactiveFormsModule,
                CommonModule,
                ButtonModule
            ],
            providers: [
                { provide: AgifyService, useValue: agifyService }
            ],
        });

    it('should create', async () => {
        const renderResult = await setup();
        expect(renderResult.fixture.componentInstance).toBeInstanceOf(NameToAgeComponent);

    });

    it('should show age response after entering a name', async () => {
        const renderResult = await setup();
        const component = renderResult.fixture.componentInstance;
        agifyService.getAge.mockReturnValue(of(33));
        await userEvent.type(screen.getByTestId('name'), 'dennis');
        await userEvent.click(screen.getByTestId('ts-btn'));
        expect(component.searchForm.get('name')?.value).toEqual('dennis');
        expect(agifyService.getAge).toHaveBeenCalledWith('dennis');
        expect(await screen.findByText('33')).toBeTruthy();

        screen.logTestingPlaygroundURL();
    });
});

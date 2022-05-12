import { CommonModule } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { AgifyService, defaultResponse } from '../../../../../libs/name-to-age/src/index';
import { ButtonModule } from '../../../../../libs/ui/src/index';

import { NameToAgeComponent } from './name-to-age.component';

describe('NameToAgeComponent', () => {
    let agifyService: AgifyService;

    const setup = async () =>
        render(NameToAgeComponent, {
            imports: [
                ReactiveFormsModule,
                CommonModule,
                ButtonModule,
                HttpClientTestingModule
            ],
        });

    describe('Integration Test', () => {
        it('should create', async () => {
            const renderResult = await setup();
            expect(renderResult.fixture.componentInstance).toBeInstanceOf(NameToAgeComponent);

        });

        it('should show age response after entering a name', async () => {
            const renderResult = await setup();
            agifyService = TestBed.inject(AgifyService);
            const agifyServiceGetSpy = jest.spyOn(agifyService, 'getAge');
            const component = renderResult.fixture.componentInstance;

            await userEvent.type(screen.getByTestId('name'), 'dennis');
            await userEvent.click(screen.getByTestId('ts-btn'));

            TestBed.inject(HttpTestingController)
                .expectOne((req) => !!req.url.match(/api.agify.io/))
                .flush({ ...defaultResponse, age: 33 });

            expect(component.searchForm.get('name')?.value).toEqual('dennis');
            expect(agifyServiceGetSpy).toHaveBeenCalledWith('dennis');
            expect(await screen.findByText('33')).toBeTruthy();

            screen.logTestingPlaygroundURL();
        });
    });
});

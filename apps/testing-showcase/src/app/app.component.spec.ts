import { TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { NameToAgeComponent } from './name-to-age/name-to-age.component';
import { PriceInfoComponent } from './price-info/price-info.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                MockComponent(NameToAgeComponent),
                MockComponent(PriceInfoComponent),
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});

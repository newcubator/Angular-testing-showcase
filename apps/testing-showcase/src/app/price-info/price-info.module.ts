import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@ts/ui';
import { PriceInfoComponent } from './price-info.component';

const components = [
    PriceInfoComponent
];

@NgModule({
    declarations: [components],
    imports: [CommonModule, ButtonModule],
    exports: [components]
})
export class PriceInfoModule {
}

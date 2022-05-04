import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@ts/ui';
import { NameToAgeComponent } from './name-to-age.component';

const components = [
    NameToAgeComponent
];

@NgModule({
    declarations: [components],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        ButtonModule
    ],
    exports: [
        components
    ]
})
export class NameToAgeModule {
}

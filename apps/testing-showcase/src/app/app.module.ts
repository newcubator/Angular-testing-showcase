import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameToAgeModule } from './name-to-age/name-to-age.module';
import { PriceInfoModule } from './price-info/price-info.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        NameToAgeModule,
        PriceInfoModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}

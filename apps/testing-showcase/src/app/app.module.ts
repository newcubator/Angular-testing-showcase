import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameToAgeModule } from './name-to-age/name-to-age.module';
import { PriceInfoModule } from './price-info/price-info.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        NameToAgeModule,
        PriceInfoModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TranslateModule} from '@ngx-translate/core';
import { AppSliderComponent } from '../elements/app-slider/app-slider.component';

@NgModule({
    declarations: [
        AppComponent,
        AppSliderComponent
    ],
    imports: [
        BrowserModule,
        TranslateModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

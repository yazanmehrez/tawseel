import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TranslateModule} from '@ngx-translate/core';
import {AppSliderComponent} from '../elements/app-slider/app-slider.component';
import {AppSlideshowComponent} from '../elements/app-slideshow/app-slideshow.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AppSwiperComponent} from '../elements/app-swiper/app-swiper.component';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import {MatCardModule} from '@angular/material';
import { AppXgalleryComponent } from '../elements/app-xgallery/app-xgallery.component';
import {SafePipe} from '../pipes/safeURLs.pipe';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

@NgModule({
    declarations: [
        AppComponent,
        AppSliderComponent,
        AppSlideshowComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AppSwiperComponent,
        AppXgalleryComponent,
        SafePipe
    ],
    imports: [
        BrowserModule,
        SlideshowModule,
        SwiperModule,
        MatCardModule,
        TranslateModule.forRoot()
    ],
    providers: [{
        provide: SWIPER_CONFIG,
        useValue: DEFAULT_SWIPER_CONFIG
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AppSliderComponent} from '../elements/app-slider/app-slider.component';
import {AppSlideshowComponent} from '../elements/app-slideshow/app-slideshow.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import {HeaderComponent} from './tawseel/header/header.component';
import {FooterComponent} from './tawseel/footer/footer.component';
import {HomeComponent} from './tawseel/home/home.component';
import {AppSwiperComponent} from '../elements/app-swiper/app-swiper.component';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import {MatCardModule} from '@angular/material';
import {AppXgalleryComponent} from '../elements/app-xgallery/app-xgallery.component';
import {SafePipe} from '../pipes/safeURLs.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TawseelComponent} from './tawseel/tawseel.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {InvestorComponent} from './tawseel/investor/investor.component';
import {AboutUsComponent} from './tawseel/about-us/about-us.component';
import {OurCustomerComponent} from './tawseel/our-customer/our-customer.component';
import {CustomerRegistrationComponent} from './tawseel/customer-registration/customer-registration.component';
import {BreadcrumbComponent} from '../elements/breadcrumb/breadcrumb.component';
import {CaptchaComponent} from '../elements/captcha/captcha.component';
import {FormsExamplesComponent} from '../elements/forms-examples/forms-examples.component';
import {BsDatepickerModule, BsDropdownModule, DatepickerModule} from 'ngx-bootstrap';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressHttpModule} from '@ngx-progressbar/http';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {NoBreakSpace} from '../pipes/nbsp.pipe';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import { MediaCenterComponent } from './tawseel/media-center/media-center.component';
import { OurServicesComponent } from './tawseel/our-services/our-services.component';
import { ContactUsComponent } from './tawseel/contact-us/contact-us.component';
import { TermsConditionsComponent } from './tawseel/terms-conditions/terms-conditions.component';
import { FaqComponent } from './tawseel/faq/faq.component';
import {NgxLoadingModule} from 'ngx-loading';
import { NewsComponent } from './tawseel/news/news.component';
import { DetailsComponent } from './tawseel/details/details.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new MultiTranslateHttpLoader(httpClient, [
        {prefix: './assets/i18n/', suffix: '.json'}
    ]);
}

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
        SafePipe,
        NoBreakSpace,
        TawseelComponent,
        InvestorComponent,
        AboutUsComponent,
        OurCustomerComponent,
        CustomerRegistrationComponent,
        BreadcrumbComponent,
        CaptchaComponent,
        FormsExamplesComponent,
        MediaCenterComponent,
        OurServicesComponent,
        ContactUsComponent,
        TermsConditionsComponent,
        FaqComponent,
        NewsComponent,
        DetailsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SlideshowModule,
        SwiperModule,
        MatCardModule,
        HttpClientModule,
        RouterModule,
        DeviceDetectorModule.forRoot(),
        BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        DatepickerModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        NgProgressModule.withConfig({
            spinner: false,
            color: '#000'
        }),
        NgxLoadingModule.forRoot({ fullScreenBackdrop: true}),
        NgProgressHttpModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [{
        provide: SWIPER_CONFIG,
        useValue: DEFAULT_SWIPER_CONFIG
    }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

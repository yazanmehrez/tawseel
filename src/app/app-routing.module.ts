import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './tawseel/home/home.component';
import {InvestorComponent} from './tawseel/investor/investor.component';
import {AboutUsComponent} from './tawseel/about-us/about-us.component';
import {OurCustomerComponent} from './tawseel/our-customer/our-customer.component';
import {CustomerRegistrationComponent} from './tawseel/customer-registration/customer-registration.component';
import {TawseelComponent} from './tawseel/tawseel.component';
import {OurServicesComponent} from './tawseel/our-services/our-services.component';
import {ContactUsComponent} from './tawseel/contact-us/contact-us.component';
import {MediaCenterComponent} from './tawseel/media-center/media-center.component';
import {TermsConditionsComponent} from './tawseel/terms-conditions/terms-conditions.component';
import {FaqComponent} from './tawseel/faq/faq.component';
import {NewsComponent} from './tawseel/news/news.component';
import {DetailsComponent} from './tawseel/details/details.component';
import {GeneralComponent} from './tawseel/general/general.component';
import {SearchResultComponent} from './tawseel/search-result/search-result.component';
import {PrivacyStatmentComponent} from './tawseel/privacy-statment/privacy-statment.component';

const routes: Routes = [
        {
            path: '',
            component: TawseelComponent,
            children: [
                {
                    path: 'home',
                    component: HomeComponent
                },
                {
                    path: 'investor',
                    component: InvestorComponent
                },
                {
                    path: 'about-us',
                    component: AboutUsComponent
                },
                {
                    path: 'our-customer',
                    component: OurCustomerComponent
                },
                {
                    path: 'search/:id',
                    component: SearchResultComponent
                },
                {
                    path: 'customer-registration',
                    component: CustomerRegistrationComponent
                },
                {
                    path: 'our-services',
                    component: OurServicesComponent
                },
                {
                    path: 'contact-us',
                    component: ContactUsComponent
                },
                {
                    path: 'media-center',
                    component: MediaCenterComponent
                },
                {
                    path: 'terms-conditions',
                    component: TermsConditionsComponent
                },
                {
                    path: 'privacy-statment',
                    component: PrivacyStatmentComponent
                },
                {
                    path: 'FAQ',
                    component: FaqComponent
                },
                {
                    path: 'news',
                    component: NewsComponent
                },
                {
                    path: 'details/:id',
                    component: DetailsComponent
                },
                {
                    path: 'more/:id',
                    component: GeneralComponent
                },

                {
                    path: '**',
                    redirectTo: 'home'
                }
            ]
        },
        {
            path: '**',
            redirectTo: 'home'
        }
    ];


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class  AppRoutingModule {
}

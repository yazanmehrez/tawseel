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
                    path: 'FAQ',
                    component: FaqComponent
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
export class AppRoutingModule {
}

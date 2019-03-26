import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './tawseel/home/home.component';
import {InvestorComponent} from './tawseel/investor/investor.component';
import {AboutUsComponent} from './tawseel/about-us/about-us.component';
import {OurCustomerComponent} from './tawseel/our-customer/our-customer.component';
import {CustomerRegistrationComponent} from './tawseel/customer-registration/customer-registration.component';
import {TawseelComponent} from './tawseel/tawseel.component';

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
                    path: '**',
                    redirectTo: 'home'
                }
            ]
        },
        {
            path: '**',
            redirectTo: 'home'
        }
    ]
;


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

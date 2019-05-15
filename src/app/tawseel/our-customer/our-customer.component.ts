import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-our-customer',
    templateUrl: './our-customer.component.html',
    styleUrls: ['./our-customer.component.css']
})
export class OurCustomerComponent implements OnInit {

    public customer: any;
    public commitment: any;
    public offer: any;
    public result: any;

    constructor(private translateService: TranslateService, public _appService: AppService) {
        this.translateService.onLangChange.subscribe(lang => {
            this._appService.loading = true;
            this.getAboutData();
        });
    }

    getAboutData() {
        this._appService.api.getCustomerService().subscribe(response => {
            this.result = response['payload'];
            this.result.forEach(item => {
                if (item.UniqueName === 'our.customers') {
                    this.customer = item;

                } else if (item.UniqueName === 'we.would.like') {

                    this.offer = item;

                } else if (item.UniqueName === 'our.commitment.to.you') {
                    this.commitment = item;

                }
            });
            setTimeout(() => {
                this._appService.loading = false;
            }, 1000);
        });
    }

    ngOnInit() {
        this.getAboutData();
    }

}

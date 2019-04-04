import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-our-customer',
  templateUrl: './our-customer.component.html',
  styleUrls: ['./our-customer.component.css']
})
export class OurCustomerComponent implements OnInit {

  public customer: any;

    constructor(private translateService: TranslateService, public _appService: AppService) {
        this.translateService.onLangChange.subscribe(lang => {
            this.getAboutData();
        });
    }
    getAboutData() {
        this._appService.api.getCustomerService().subscribe(response => {

          this.customer = response['payload'][0];

        });
    }

    ngOnInit() {
        this.getAboutData();
    }

}

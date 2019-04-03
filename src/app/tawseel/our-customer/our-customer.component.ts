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
    }
    getAboutData() {
        this._appService.api.getCustomerService().subscribe(response => {

          this.customer = response['payload'][0];

            // response['payload'].forEach(item => {
                // if (item.UniqueName == 'who.we.are') {
                //     this.about = item;
                //
                // } else if (item.UniqueName == 'your.fast.way.for.mohre.services') {
                //     this.services = item;
                //
                // }
            // });

        });
    }

    ngOnInit() {
        this.getAboutData();
    }

}
